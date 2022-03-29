const router = require('express').Router();

// const axios = require('axios')



router.route('/').get(async (req,res)=>{
    
    console.log('req.body',req.body);
  
    res.json('alksdjf')
    
    
    
})

module.exports = router;