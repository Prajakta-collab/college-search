const express=require('express');

const router=express.Router();

// const { body, validationResult } = require("express-validator");


// //Router 2: Add notes for user using :Post (/api/notes/addnotes)  Login required

// router.post('/addnotes',fetchuser,[
   
//     body("title", "Enter valid title").isLength({ min: 2 }),
//     body("description", "Description must be of atleast 5 characters ").isLength({
//       min: 5,
//     }),
// ],async(req,res)=>{
//     const {title,description,tag}=req.body;
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ errors: errors.array() });
//     }

//     try {
        
//         const note=new Notes({
//             title,description,tag, user : req.user.id
//         })
//         const savednote=await note.save();
        

//         res.json(savednote);
//     } catch (error) {
//         console.error(error.message);
//         res.status(500).send("Internal Server Error !");
//     }

   

// })





module.exports=router