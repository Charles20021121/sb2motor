const express = require("express");
const app = express();
const cors = require("cors");
const mysql =require("mysql");



app.use(cors());

app.use(express.json());//

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"sbmotor"

})

app.get("/",(req,res)=>{
    const sql = "SELECT * FROM customer_info";
    db.query(sql,(err,data)=>{
        if(err)
        {
            return res.json("error");
        }
        else
        {
            return res.json(data);
        }
    })
})

app.get("/admin/:id",(req,res)=>{
    const sql = "SELECT * FROM customer_info WHERE Id = ?";
    const id=req.params.id
    db.query(sql,[id],(err,data)=>{
        if(err)
        {
            return res.json("error");
        }
        else
        {
            return res.json(data);
        }
    })
})

app.post("/create",(req,res)=>{
    const sql = "INSERT INTO customer_info (`Name`,`Phone`,`Home_Address`,`Email`,`Bank_acc`,`Bank_Name`,`Company_Name`,`Company_Phone`,`Company_Address`,`Employment_period`,`Name1`,`Phone1`,`Address1`,`Name2`,`Phone2`,`Address2`) VALUES (?)";
    const value =[
        
        req.body.Name,
        req.body.Phone,
        req.body.HomeAddress,
        req.body.Email,
        req.body.BankAcc,
        req.body.BankName,
        req.body.CompanyName,
        req.body.CompanyPhone,
        req.body.CompanyAddress,
        req.body.Employmentperiod,
        req.body.Name1,
        req.body.Phone1,
        req.body.Address1,
        req.body.Name2,
        req.body.Phone2,
        req.body.Address2,
       
    ]
    db.query(sql,[value],(err,data)=>{
        if(err) 
        {
            return res.json("Error")
        }
        else
        {
            return res.json(data);
        }
    })
})

app.listen(8081,()=>{
    console.log("listening");
})