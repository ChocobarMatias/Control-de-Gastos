const express = require('express');
const {connection} = require("./Config/DataBase");
const cors = require('cors');

const app = express();
const port = 8000;
app.use(cors());
app.use(express.json());
// app.use("/",)

connection.connect(()=>{
    console.log("Base de datos conectada ✓")
});

app.get("/",(req,res)=>{
    console.log("API FUNCIONANDO")
res.send({message: "Control de Gastos - API CONECTADA ✓"})
});

app.listen(port, () =>{
    console.log(`🔝 Escuchando en el puerto ${port}\n 🔹 Ingresar: http://localhost:${port}/`)
})