const express = require("express");
const router = express.Router();

router.get("/",(req,res)=> {
    res.send("all users");
});

router.get("/:userId", (req, res)=>{
    res.send(req.params)
})

router.post("/", (req, res)=> {
    res.send(req.body);
})

module.exports = router;