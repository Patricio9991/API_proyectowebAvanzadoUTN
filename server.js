const express=require('express')
const server=express()
const cors=require('cors')
const port=4000



require('./config/db_config')

server.use(express.json())
server.use(cors())
server.use("/imagenes",express.static("./imagenes"));
server.use(express.urlencoded({extended:true}))


server.use("/artistas",require('./routes/artistasRoutes'))
server.use("/canciones",require('./routes/cancionesRoutes'))






server.listen(port,()=>{
    console.log(`conectado al puerto ${port}`)
})