require("dotenv").config();
let express=require("express")
let mongoose=require("mongoose")
let cors=require("cors")
const rt = require("./routes/userroutes")
mongoose.connect(process.env.uri).then(()=>{
    app.listen(process.env.port||5000)
})
let app=express()
app.use(express.json())
app.use(cors())
app.use("/",rt)
