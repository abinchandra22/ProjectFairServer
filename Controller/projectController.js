const projects =require('../Models/projectModel')

// add project

exports.addProject = async(req,res)=>{
    console.log("Inside add project api");
    const userId = req.payload
    const {title,languages,overview,github,website} = req.body
    const projectImage = req.file.filename
    console.log(title,languages,overview,github,website,projectImage,userId);
    try{
        const exisitingProject = await projects.findOne({github})
        if(exisitingProject){
            res.status(406).json("project is allready exist uplode another..")
        }
        else{
            // add project
            const newProject = new projects({
                title,languages,overview,github,website,projectImage,userId  
            })
            await newProject.save()  
              res.status(200).json(newProject)

        }
    }catch(err){
        res.status(401).json(err)
    }
}

// get homepage
exports.getHomeProject = async(req,res)=>{
    try{
        const homeProject = await projects.find().limit(3)
        res.status(200).json(homeProject)
    }catch(err){
res.status(401).json(err)
    }
}

// get all projects

exports.getAllProject = async(req,res)=>{
    const searchkey = req.query.search
    const query ={
        languages:{
            $regex:searchkey,$options:"i"
        }
    }
    try{
        const allProject = await projects.find(query)
        res.status(200).json(allProject)
    }catch(err){
res.status(401).json(err)
    }
}

// get user project

exports.getUserProject = async(req,res)=>{
    const userId = req.payload
    try{
        const userProject = await projects.find({userId})
        res.status(200).json(userProject)
    }catch(err){
res.status(401).json(err)
    }
}


// edit project
exports.editProject = async (req,res)=>{
    console.log("inside edit project");
    // para,s is predefined
    const {pid} = req.params
    const userId = req.payload
    const {title,languages,overview,github,website,projectImage}= req.body
    const uploadImage = req.file?req.file.filename:projectImage

    try{
        const updateProject = await projects.findByIdAndUpdate({_id:pid},{title,languages,overview,github,website,projectImage:uploadImage,userId },{new:true})
        await updateProject.save()
        res.status(200).json(updateProject)
    }catch(err){
        res.status(401).json(err)
    }
}


// delete project
exports.removeProject= async (req,res)=>{
    console.log("inside remove project");
    const {pid} =req.params
    try{
        const projectDetails = await projects.findByIdAndDelete({_id:pid})
        res.status(200).json(projectDetails)

    }catch(err){
        res.status(401).json(err)
    }
}