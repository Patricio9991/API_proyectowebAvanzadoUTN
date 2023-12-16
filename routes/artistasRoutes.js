const express=require('express')
const route=express.Router()
const {todosLosArtistas,cargarArtista, insertarImagen, eliminarArtista}=require('../controllers/artistasControllers')
const uploadImages=require('../multer/multer')


route.get("/todos",todosLosArtistas)
route.post("/nuevo",uploadImages.single('file'),cargarArtista)
route.delete("/eliminar",eliminarArtista)

route.post("/addImage",uploadImages.single("imagen"),insertarImagen)

module.exports=route