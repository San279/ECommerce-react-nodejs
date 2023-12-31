const router = require("express").Router();
const dotenv = require("dotenv");
dotenv.config();


const stripe = require("stripe")(process.env.STRIPE_SECRET);


router.post("/payment", (req, res)=>{
    stripe.charges.create({
        source: req.body.tokenId,
        amount: req.body.amount,
        currency: "thb",
    },
    (stripeErr, stripeRes) =>{
        console.log(stripe);
        if (stripeErr) {
            res.status(500).json(stripeErr);
        } else {
            res.status(200).json(stripeRes);
        }
    } 
   );
});

module.exports = router;