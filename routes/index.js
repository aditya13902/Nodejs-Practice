const express = require('express');
const Homecontroller=require('../controllers/home_controllers')
const router=express.Router();
router.get('/',Homecontroller.home)
console.log('Router Loaded :)')
module.exports =router;
