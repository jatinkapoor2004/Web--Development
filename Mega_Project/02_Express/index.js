import express from "express";
import logger from "./logger.js";
import morgan from "morgan";
const app =express();
const port = 3000;

// app.get("/",(req,res)=>{
//     res.send("Hello world !");
// })
// app.get("/jatin",(req,res)=>{
//     res.send("Jatin Kapoor is in url");
// })
// app.get("/insta",(req,res)=>{
//     res.send("Jatin Kapoor instagram is jatinjatinkapoor");
// })

//Making CRUD Application
app.use(express.json());

const morganFormat = ":method :url :status :response-time ms";

app.use(
    morgan(morganFormat, {
      stream: {
        write: (message) => {
          const logObject = {
            method: message.split(" ")[0],
            url: message.split(" ")[1],
            status: message.split(" ")[2],
            responseTime: message.split(" ")[3],
          };
          logger.info(JSON.stringify(logObject));
        },
      },
    })
  );
let teaData=[];
let nextId=1;

//This is how to post data/ add tea 
app.post("/teas",(req,res)=>{
    console.log("adding tea");
    
     const {name,price}=req.body;

     const newTea ={
        id : nextId++,
        name,price,
     }
     teaData.push(newTea);
     res.status(200).send(newTea);
})
//This is how to get whole data/ get all teas
app.get("/teas",(req,res)=>{
    res.status(200).send(teaData);
})
//This is how to get single data using ID attribute/ search tea
app.get("/teas/:id",(req,res)=>{
    const tea = teaData.find(t=> t.id == parseInt(req.params.id));
    if(!tea){
        return res.status(404).send("Tea Not Found !!!"); 
    }
    else{
        return res.status(200).send(tea);
    }
})
//Update tea

app.put("/teas/:id",(req,res)=>{
    const tea= teaData.find(t=> t.id == parseInt(req.params.id));
    if(!tea){
        return res.status(404).send("Tea Not Found !");
    }
    const {name,price}=req.body;
    tea.name=name;
    tea.price=price;
    return res.status(200).send("Updated successfully !");
})

// Delete Tea using id again
app.delete("/teas/:id",(req,res)=>{
    console.log("deleting tea");
    
    const teaIndex=teaData.findIndex(t=> t.id == parseInt(req.params.id));
    console.log(teaIndex);
    
    if(teaIndex==-1){
        return res.status(404).send("Tea Not Found !!");
    }
    teaData.splice(teaIndex,1);
    return res.status(200).send("Deleted successfully !");
})
app.listen(port,()=>{
    console.log("Server is listening at port 3000...")
})