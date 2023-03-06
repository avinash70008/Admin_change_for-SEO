const express = require("express")

const Pagechange = require("../models/pagechange.model")

const router = express.Router();


const {
    upload,
    uploadSingle,
  
  } = require("../middlewares/file-upload");

  const Pagechanges = require("../models/pagechange.model");

  router.post("/single", uploadSingle("document"), async (req, res) => {

    try {
  
        const pagechange = await Pagechanges.create({
           
            htxt: req.body.htxt,
            stxt: req.body.stxt,
            link: req.body.link,
            img: req.file.path,
            icon: req.file.path,
          });
      
          return res.send(user);
        
        } catch (err) {
          return res.status(500).send({ message: err.message });
        }
       
      
      });




// post route

router.post("", async (req, res) =>{
    try {
        const pagechange = await Pagechange.create(req.body);
        return res.status(200).send(pagechange);
    } catch(error) {
        return res.status(500).send(error.message);
    }
});

// get route

router.get("", async (req, res) =>{
    try {
        const pagechange = await Pagechange.find().lean().exec();
        return res.status(200).send(pagechange);
    } catch (error) {
        return res.status(500).send(error.message);
    }
});

// route get by id

router.get("/:id" , async (req, res) =>{
    try {
        const pagechange = await Pagechange.findById({_id:req.params.id}).lean().exec();
        return res.status(200).send(pagechange);
    } catch (error) {
        return res.status(500).send(error.message);
    }
});

// for update

router.patch("/:id" , async (req, res) =>{
    try {
        const pagechange = await Pagechange.findByIdAndUpdate(req.params.id, {htxt:req.body.htxt , stxt:req.body.stxt }, {new : true}).lean().exec();
        console.log(pagechange)
        return res.status(200).send(pagechange);
    } catch (error) {
        return res.status(500).send(error.message);
    }
});


// for delete

router.delete("/:id" , async (req, res) =>{
    try {
        const pagechange = await Pagechange.deleteOne({_id:req.params.id}).lean().exec();
        return res.status(200).send(pagechange)
        const pagechanges = await Pagechange.find().lean().exec();
    } catch (error) {
        return res.status(500).send(error.message);
    }
});

module.exports = router;



