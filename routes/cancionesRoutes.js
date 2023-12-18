const express=require('express')
const route=express.Router()
const {todasLasCanciones,agregarCancion}=require('../controllers/cancionesControllers')


route.get("/todos",todasLasCanciones)
route.post("/agregarNuevaCancion",agregarCancion)


module.exports=route