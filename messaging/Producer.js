const Stomp=require("stomp-client");
const Producer= class {

    constructor(host,port,user,password,destination){
        this.host=host;
        this.port=port;
        this.user=user;
        this.password=password;
        this.destination=destination;
    }

    send(message){
        const stomp = new Stomp(this.host,this.port);
         stomp.connect(()=>{
            console.log("producer connected");
            stomp.publish(this.destination,JSON.stringify(message));
            stomp.disconnect();

         })
    }
}

module.exports=Producer