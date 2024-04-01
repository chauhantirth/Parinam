import express from "express";
import dotenv from "dotenv";

import DB_INFO from '../constants/constants.js';

dotenv.config();

async function findOneByListing(client, listing, db_name, collection) {
    var intListing = parseInt(listing);

    const result = await client.db(db_name).collection(collection).findOne({"aadhar_no": intListing});
    return result;
};

async function postDb_Gujcet(req, res, mongoClient) {
    if (!req.body.aadhar_no) {
        res.send({
            'success': false,
            'errorMessage': 'No post data found',
            'errorCode': '2000'
        })
    }

    const studentData = await findOneByListing(
        mongoClient, 
        req.body.aadhar_no, 
        DB_INFO.gujcet.DB_NAME, 
        DB_INFO.gujcet.COLLECTION
    );

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

async function postDb_Ddcet(req, res, mongoClient) {
    if (!req.body.aadhar_no) {
        res.send({
            'success': false,
            'errorMessage': 'No post data found',
            'errorCode': '2000'
        })
    }

    const studentData = await findOneByListing(
        mongoClient, 
        req.body.aadhar_no, 
        DB_INFO.ddcet.DB_NAME, 
        DB_INFO.ddcet.COLLECTION
    );

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

    router.post('/gujcet', (req, res) => postDb_Gujcet(req, res, mongoClient));
    router.post('/ddcet', (req, res) => postDb_Ddcet(req, res, mongoClient));
    router.get('/', (req, res) =>  {return res.status(404).json({
        'success': false,
        'errorMessage': 'Method not allowed on this route',
        'errorCode': '1001',
    })})

    return router;
}

export default wrapper;