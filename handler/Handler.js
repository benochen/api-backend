const Handler = class {
    constructor(id,user,producer){

        const uuid=require('uuid')
        this.user=user;
        this.id=id;
        this.producer=producer
    }

    handle(){

        const Task = require('../task/Task');

       const  t=new Task(this.id,this.user)
        console.log("I managed task "+t.id+" for user "+this.user)
        this.producer.send(t);
    }
}

module.exports = Handler