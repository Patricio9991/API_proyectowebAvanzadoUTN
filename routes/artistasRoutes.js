const express=require('express')
const route=express.Router()
const {todosLosArtistas,cargarArtista, editarInfo, eliminarArtista}=require('../controllers/artistasControllers')
const uploadImages=require('../multer/multer')


route.get("/todos",todosLosArtistas)
route.post("/nuevo",uploadImages.single('file'),cargarArtista)
route.delete("/eliminar",eliminarArtista)

route.put("/editar/:numeroMagico",editarInfo)

module.exports=route