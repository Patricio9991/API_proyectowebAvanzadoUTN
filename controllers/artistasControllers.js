const dbConnection=require('../config/db_config')

const todosLosArtistas=(req,res)=>{
    dbConnection.query("SELECT * FROM artistas",(err,data)=>{
        if(err){
            res.status(500).json({'message':err})
        }else{
            res.send(data)
        }
    })
}

const cargarArtista=(req,res)=>{

    const {nombre,añosActividad,breveBio,generos}=req.body
    

    dbConnection.query("INSERT INTO artistas(nombre,añosActividad,breveBio,generos) VALUES (?,?,?,?)",[nombre,añosActividad,breveBio,generos],(err,data)=>{
        if(err){
            res.status(500).json({'message':err})
        }else{
            
            
            res.status(200).send(data)
        }
    })


}

const cargarImagen=(req,res)=>{
    const {nombre}=req.body
    const imagen=req.file.path
    dbConnection.query("UPDATE artistas SET imagenes=? WHERE nombre=?",[imagen,nombre],(err,data)=>{
        if(err){
            res.send(500).json({"mensaje":"No fue posible"})
        }else{
            console.log(req.file)
            res.send("imagen cargada")
        }
    })
}

module.exports={todosLosArtistas,cargarArtista,cargarImagen}