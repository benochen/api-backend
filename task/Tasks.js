let instance = null;


const Tasks = class {
    constructor(){

        this.tasks={}
}
       

    

    isEmpty(){

        return this.tasks==null || this.tasks.length==0
    }

    count(){
        if (this.tasks ==null){
            return 0
        }else{
            return this.tasks.length
        }
    }

    findOne(id){
        return this.tasks[id];
    }

    add(task){
        this.tasks[task.id]=task;

    }

    delete(id){

        if(this.tasks.hasKey(id)){
            delete this.tasks.id;
            return true;
        }else{
            return false;
        }
    }
}

module.exports=Tasks