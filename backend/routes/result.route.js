import express from "express";
import dotenv from "dotenv";

dotenv.config();

async function findOneByListing(client, listing) {
    var intListing = parseInt(listing);

    const result = await client.db(process.env.DBNAME).collection(process.env.COLLECTION).findOne({"aadhar_no": intListing});
    return result;
};

async function postDb(req, res, mongoClient) {
    const studentData = await findOneByListing(mongoClient, req.body.aadhar_no);
    setTimeout((() => {
        res.send(studentData);
      }), 4000)
    // res.send(studentData);
};

var wrapper = function(mongoClient) {
    var router = express.Router();

    router.post('/', (req, res) => postDb(req, res, mongoClient));

    return router;
}

export default wrapper;