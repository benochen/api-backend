const { application, response } = require('express');
const Tasks=require('./task/Tasks');
const Task=require('./task/Task')
const ActivemqInstance=require('./service/activemq');
global.tasks=new Tasks();

const express = require('express');

const Stomp=require('stomp-client');
const app = express();
const mongoose=require('mongoose')
const passwordRoute= require('./Routes/PasswordCheck')
const docRoute=require('./Routes/ApiDoc')

const Handler=require('./handler/Handler')
const host="127.0.0.1"
const port=61613;
const destinationRequest="/queue/request"
const destinationAnswer="/queue/answer"

global.activemqInstance=new ActivemqInstance(host,port,null,null,destinationRequest)

const stompClient = new Stomp(host,port)

stompClient.connect((sessionId)=>{
  console.log("connected to activeMQ")
  console.log("Wait for message from "+destinationAnswer)
  stompClient.subscribe(destinationAnswer, function(body, headers) {
    const message = JSON.parse(body)
    console.log("update tasks list")
    tasks.add(message);
    console.log("task after update : "+JSON.stringify(tasks));
  })});

  let t=new Task("myid","ben57univ@gmail.com")
 


mongoose.connect('mongodb://localhost:27017/monitoring',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

app.use("/api/password",passwordRoute)
app.use("/api/docs",docRoute)



module.exports = app;