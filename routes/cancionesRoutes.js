const express=require('express')
const route=express.Router()
const {todasLasCanciones}=require('../controllers/cancionesControllers')


route.get("/todos",todasLasCanciones)


module.exports=route