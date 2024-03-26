import express from "express";
import dotenv from "dotenv";

dotenv.config();

async function findOneByListing(client, listing) {
    var intListing = parseInt(listing);

    const result = await client.db(process.env.DBNAME).collection(process.env.COLLECTION).findOne({"aadhar_no": intListing});
    return result;
};

async function postDb(req, res, mongoClient) {
    if (!req.body.aadhar_no) {
        res.send({
            'success': false,
            'errorMessage': 'No post data found',
            'errorCode': '2000'
        })
    }

    const studentData = await findOneByListing(mongoClient, req.body.aadhar_no);

    if (!studentData || !studentData.aadhar_no) {
        res.send({
            'success': false,
            'errorMessage': 'We are unable to find the result, Please verify your Aadhar Number and try again',
            'errorCode': '3000'
        })
    } else {
        // setTimeout((() => {
        //     res.send(studentData);
        //   }), 4000)
        res.send({
            'success': true,
            'container': [studentData],
        });
    }
};

var wrapper = function(mongoClient) {
    var router = express.Router();

    router.post('/', (req, res) => postDb(req, res, mongoClient));
    router.get('/', (req, res) =>  {return res.status(404).json({
        'success': false,
        'errorMessage': 'Method not allowed on this route',
        'errorCode': '1001',
    })})

    return router;
}

export default wrapper;