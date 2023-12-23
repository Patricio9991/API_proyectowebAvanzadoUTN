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

    const {nombre,aniosActividad,breveBio,genero}=req.body
    const file=req.file.path

    dbConnection.query("INSERT INTO artistas(nombre,añosActividad,breveBio,generos,imagenes) VALUES (?,?,?,?,?)",[nombre,aniosActividad,breveBio,genero,file],(err,data)=>{
        if(err){
            res.status(500).json({'message':err})
            console.log(err)
        }else{
            console.log(file)
            console.log(req.file.path)
            res.status(200).send(data)
        }
    })


}

const editarInfo=(req,res)=>{
    const numeroMagico=req.params.numeroMagico
    const {nombre,añosActividad,breveBio,generos}=req.body

    dbConnection.query("UPDATE artistas SET nombre=?,añosActividad=?,breveBio=?,generos=? WHERE id=?",[nombre,añosActividad,breveBio,generos,numeroMagico],(err,data)=>{
        if(err){
            res.status(500).json({'mensaje':err})
            console.log(err)

        }else{
            res.status(200).send(data)
            console.log(req.body)
            console.log(numeroMagico)
        }
    })
    
}

const eliminarArtista=(req,res)=>{
    const {nombre}=req.body

    dbConnection.query("DELETE FROM artistas WHERE nombre=?",[nombre],(err,data)=>{
        if(err){
            res.status(500).json({'message':err})
            console.log(err)
        }else{
            console.log(nombre)
            res.status(200).send(data)
        }
    })
}
module.exports={todosLosArtistas,cargarArtista,editarInfo,eliminarArtista}