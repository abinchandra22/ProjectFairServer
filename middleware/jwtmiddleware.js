const jwt =require('jsonwebtoken')
// verify token
const jwtMiddleware = (req,res,next)=>{
    console.log("inside JWT middleware!!!");
    try{
        // to get token without barer
        const token = req.headers['authorization'].split(" ")[1]
        console.log(token);
        if(token){
            // inbult
            const jwtResponse = jwt.verify(token,process.env.JWT_SECRET_KEY)
            console.log(jwtResponse);
            req.payload = jwtResponse.userId
            next()
        }
        else{
            res.status(406).json("Please provide token")
        }
    }
    catch{
        res.status(401).json("Access denaied please login")
    }
}
module.exports = jwtMiddleware