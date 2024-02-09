import express from "express"

function getDb(req, res, mongoClient) {
    res.send({"status": "success", "route": "result/", "method": "GET"})
}

function postDb(req, res, mongoClient) {
    res.send({"status": "success", "route": "result/", "method": "POST"})
}

var wrapper = function(mongoClient) {
    var router = express.Router()
    router.get('/print', function(req, res) {
        getDb(req, res, mongoClient);
    });

    router.post('/', (req, res) => postDb(req, res, mongoClient));

    return router
}

export default wrapper