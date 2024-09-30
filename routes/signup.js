const express = require('express');

const {
    handleGetRequestForSignup,
    handlePostRequestForSignup
} = require('../controllers/signup');

const router = express.Router();

router.post("/", handlePostRequestForSignup);

router.get("/:id",handleGetRequestForSignup);



module.exports = router;