const express=require('express')
const route=express.Router()
const {todosLosArtistas,cargarArtista, cargarImagen}=require('../controllers/artistasControllers')
const uploadImages=require('../multer/multer')


route.get("/todos",todosLosArtistas)
route.post("/nuevo",uploadImages.single("imagen"),cargarArtista)

module.exports=route