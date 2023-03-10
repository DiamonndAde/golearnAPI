const {createReview,getReviews,updateReview, deleteReview, getSingleReview} = require("../controllers/reviewcontroller")
const {authorize,access}= require("../middleware/auth")
const express = require("express")




const router = express.Router({mergeParams:true})

// router.use(authorize)



router.route("/")
.get(getReviews)
.post(authorize,createReview)

router.route("/:id")
.put(authorize,updateReview)
.delete(authorize,deleteReview)
.get(getSingleReview)

module.exports = router