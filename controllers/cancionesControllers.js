const dbConnection=require("../config/db_config");

const todasLasCanciones=(req,res)=>{
    dbConnection.query("SELECT * FROM canciones",(err,data)=>{
        if(err){
            res.status(500).json({message:err})
        }else{
            res.send(data)
        }
    })
}

module.exports={todasLasCanciones}