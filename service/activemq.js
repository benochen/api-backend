const ActivemqInstance = class {

    constructor(host,port,user,password,destination){
        this.host=host;
        this.port=port;
        this.user=user;
        this.password=password;
        this.destination=destination;
    }
    
}

module.exports = ActivemqInstance;