const express=require('express')
const server=express()
const cors=require('cors')
const port=4000

const artistasRoutes=require('./routes/artistasRoutes')
const pistasRoutes=require('./routes/pistasRoutes')

require('./config/db_config')

server.use(express.json())
server.use(cors())


server.use("/artistas",artistasRoutes)
//server.use("/pistas",pistasRoutes)






server.listen(port,()=>{
    console.log(`conectado al puerto ${port}`)
})