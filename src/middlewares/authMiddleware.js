const jwt =require('jsonwebtoken')

module.exports= async(req,res,next)=>{

    try {
        const token = req.headers["authorization"].split(" ")[1];
        jwt.verify(token, process.env.JWT_TOKEN, (err, decode) => {
          if (err) {
            return res.status(200).send({
              message: "Auth failed",
              success: false,
              err:err
            });
          } else {
            req.body.userId = decode.id;
            next();
          }
        });
   } catch (error) {
        console.log(error);
        return res.status(401).send({success : false , message : `Auth failed `})

   }
   
}