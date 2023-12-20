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

const agregarCancion=(req,res)=>{
   const {titulo,artista,disco}=req.body

    dbConnection.query("INSERT INTO canciones(titulo,artista,disco)VALUES(?,?,?)",[titulo,artista,disco],(err,data)=>{
        if(err){
            res.status(500).json({message:err})
            console.log(data)
        }else{
            console.log(req.body)
            res.send(data)
        }
    })

}




module.exports={todasLasCanciones,agregarCancion}