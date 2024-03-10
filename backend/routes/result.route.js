import express from "express";

async function findOneByListing(client, listing) {
    var intListing = parseInt(listing);

    const result = await client.db("rngpit").collection("gujcet-2023").findOne({"aadharno": listing});
    return result;
};

async function postDb(req, res, mongoClient) {
    const studentData = await findOneByListing(mongoClient, req.body.aadhar_no);
    res.send(studentData);
};

var wrapper = function(mongoClient) {
    var router = express.Router();

    router.post('/', (req, res) => postDb(req, res, mongoClient));

    return router;
}

export default wrapper;