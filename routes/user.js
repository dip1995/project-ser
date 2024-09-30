const express = require("express");

const { handleGetRequest,
    handlePostRequest,
    handleDeleteRequest,
    handleGetRequestById,
    handlePatchRequest
 } = require("../controllers/user");

const router = express.Router();

router.get("/",handleGetRequest);
router.post("/",handlePostRequest);
router.delete("/:id",handleDeleteRequest);
router.patch('/:id',handlePatchRequest);
router.get('/:id',handleGetRequestById);

module.exports = router;
