import express from "express"

function getDb(req, res, dbClient) {
    res.send({"status": "success", "route": "result/", "method": "GET"})
}

function postDb(dbClient) {
    res.send({"status": "success", "route": "result/", "method": "POST"})
}

var wrapper = function(req, res, mongoClient) {
    var router = express.Router()

    router.route('/').get(getDb(req, res, mongoClient))
    // router.route('/').post(postDb(req, res, mongoClient))

    return router
}

export default wrapper

// const router = express.Router()

// router.route('/').get(
//     (req, res) => res.send(
//         "Hello Result API"
//     )
// )

// export default router