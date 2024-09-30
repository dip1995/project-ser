const express = require('express');

const { handlePostRequestForLogin } = require('../controllers/login');

const router = express.Router();

router.post("/", handlePostRequestForLogin);

module.exports = router;