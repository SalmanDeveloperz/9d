const express= require("express");
const mongo= require("mongoose");
const app= express();

app.get("/", (req, res) =>{
    res.send("Running the Task Manager Get Operation");
})

app.get("/api/tasks", (req,res) =>{
    res.send("Will show the tasks here soon inshAllah");
})





app.listen(4500, () => {
    console.log("Running on 4500...");
});




// app.post()
// app.put()        
// app.delete()