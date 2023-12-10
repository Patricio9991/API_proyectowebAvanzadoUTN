const multer=require('multer')

const storage=multer.diskStorage({
    destination:(req,file,callback)=>{
        callback(null,'./imagenes')
    },
    filename:(req,file,callback)=>{
        const extension=file.originalname.split(".").pop()
        const nuevoNombre=`imagen-${Date.now()}.${extension}`
        callback(null,nuevoNombre)
    }
})

const upload=multer({storage})

module.exports=upload







//const upload=multer({dest:'./imagenes'})
