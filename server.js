const express=require('express')
const server=express()
const cors=require('cors')
const port=4000

const artistasRoutes=require('./routes/artistasRoutes')
const cancionesRoutes=require('./routes/cancionesRoutes')

require('./config/db_config')

server.use(express.json())
server.use(cors())
server.use("/imagenes",express.static("./imagenes"));
server.use(express.urlencoded({extended:true}))


server.use("/artistas",artistasRoutes)
server.use("/canciones",cancionesRoutes)






server.listen(port,()=>{
    console.log(`conectado al puerto ${port}`)
})