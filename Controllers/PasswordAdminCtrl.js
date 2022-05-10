const Hash=require("../models/hash")
const crypto=require("crypto")
const Producer=require('../messaging/Producer');
const Task=require('../task/Task')
const { v4: uuidv4 } = require('uuid');
const ActivemqInstance = require("../service/activemq");

    

exports.updateDb = (req,res,next) => {
 
const producer=new Producer(activemqInstance.host,activemqInstance.port,activemqInstance.user,activemqInstance.password,activemqInstance.destination);

let uuid=uuidv4();
let t=new Task(uuid,"ben57univ@gmail.com");
producer.send(t);
 
tasks.add(t);
console.log(tasks);
res.status(201).json({message:"update request launched"});

};

