import paytmchecksum from '../paytm/PaytmChecksum.js';

import { paytmParams, paytmMerchantkey } from '../index.js';
import formidable from 'formidable';

import https from 'https';



export const addPaymentGateway = async (request, response) => {
    console.log("req of payment",request.body);
    try {
        let paytmCheckSum = await paytmchecksum.generateSignature(paytmParams, paytmMerchantkey);
       let params = {  
        ...paytmParams,'CHECKSUMHASH': paytmCheckSum
        }
        console.log("kp",params);
        response.status(200).json(params);
    } catch (error) {
        
        response.status(500).json({error:error.message})
    }
}

export const paytmResponse = (request, response) => {

    const form =  formidable();
    let paytmCheckSum = request.body.CHECKSUMHASH;
    console.log("paytmCheckSum is ", request.body);
    delete request.body.CHECKSUMHASH;
    // paytmChecksum value is undefined because of the req.body.CHECKSUMHASH is not passed in the req parameters
    let isVerifySignature = paytmchecksum.verifySignature(request.body, paytmMerchantkey , paytmCheckSum);
    if (isVerifySignature) { 
        let paytmParams = {};
        paytmParams["MID"] = request.body.MID;
        paytmParams["ORDERID"] = request.body.ORDERID;
    
        paytmchecksum.generateSignature(paytmParams, paytmMerchantkey).then(function (checksum) {

            paytmParams["CHECKSUMHASH"] = checksum;

            let post_data = JSON.stringify(paytmParams);

            let options = {
                hostname: 'securegw-stage.paytm.in',
                port: 443,
                path: '/order/status',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Content-Length': post_data.length
                }
            };

            let res = "";
            let post_req = https.request(options, function (post_res) {
                post_res.on('data', function (chunk) {
                    res += chunk;
                });

                post_res.on('end', function () {
                    let result = JSON.parse(res);
                    console.log(result);
                    response.redirect('http://localhost:3000/')
                })
            });
            post_req.write(post_data);
            post_req.end();
        });
    } else {
        console.log("Checksum Mismatched");
    }
}