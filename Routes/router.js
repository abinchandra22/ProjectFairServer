const express = require('express')
const userController = require('../Controller/userController')
const projectController = require('../Controller/projectController')
const jwtMiddleware = require("../middleware/jwtmiddleware")
const multerConfig = require('../middleware/multerMiddleware')

const router = new express.Router()


// register api
router.post('/register',userController.register)

// login api
router.post('/login',userController.login)

// add project api router specific middleware
router.post('/add-project',jwtMiddleware,multerConfig.single('projectImage'),projectController.addProject)

// get homeproject cards on home page
router.get('/get-home-project',projectController.getHomeProject)

// get all projects , view all project
router.get('/get-all-project',jwtMiddleware,projectController.getAllProject)

// user projects ,view single project
router.get('/get-user-project',jwtMiddleware,projectController.getUserProject)

// update project transfer through url so we use pid
router.put('/project/edit/:pid',jwtMiddleware,multerConfig.single('projectImage'),projectController.editProject)

// deleteproject
router.delete('/remove-project/:pid',jwtMiddleware,projectController.removeProject)



// updateuser,profile
router.put('/user/edit',jwtMiddleware,multerConfig.single('profileImage'),userController.editUser)







// exporting router only in last
module.exports = router