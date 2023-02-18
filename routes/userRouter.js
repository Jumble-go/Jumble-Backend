const express = require('express')
const router = express.Router()
const userControllers = require('../controller/userController')

router.get('/user_posts', userControllers.getAllPost)
router.post('/add_user', userControllers.addUser)
router.post('/look_user', userControllers.lookForUser)


module.exports = router