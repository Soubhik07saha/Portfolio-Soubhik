const router = require("express").Router();
const portfolioContact = require("../models/portfolioContact");
router.post("/post", async (req, res) => {
    try {
        const { name, email, phone, message} = req.body;
        const newContact = new portfolioContact({ name, email, phone, message});
        await newContact.save().then(() =>{
            res.status(200).json({ message: "Data saved"});
        }, () =>{
            res.status(400).json({ message: "Data not saved"});
        });
    } catch (error) {
        res.status(400).json({ message: "Technical Error occurred"});
    }
});

module.exports = router;