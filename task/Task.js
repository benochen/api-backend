const Task = class{

    constructor(id,user){

        this.id=id;
        this.user=user;
        this.status='CREATE'
        this.completion=0
        this.age=0

    }
}

module.exports = Task