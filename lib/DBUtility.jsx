/**
 * Database utility, it provides following
 * @type {{}}
 */
DBUtility = {};

DBUtility.Todos = {
    /**
     * Get lists based on status you passed, default status is 'all'
     * @param status
     */
    getTodoLists: function(status){
        // Todos collection
        if(!Todos){
            throw "Todos collection doesn't defined, you should defined!";
        }

        if(status == "all"){
            return Todos.find({},{sort: {createdAt: -1}}).fetch(); // return all documents
        }else if(status == "active"){
            return Todos.find({completed: false}, {sort: {createdAt: -1}}).fetch();
        }else if(status == "completed"){
            return Todos.find({completed: true}, {sort: {createdAt: -1}}).fetch();
        }else{              // default status is 'all'
            return Todos.find({},{sort: {createdAt: -1}}).fetch(); // return all documents
        }
    },
    updateTodoList:function(id, updateObj){

        //console.group("updateTodoList: ");
        //console.log("id: %s", id);
        //console.log("updateObj: %o", updateObj);
        //console.groupEnd();

        if(!id){
            throw "You must pass id"
        }

        if(typeof updateObj != 'object'){
            throw "updateObj must be an object";
        }

        Todos.update({"_id":id }, {$set: updateObj});
    },
    deleteTodoList: function(id){
        if(!id){
            throw "You must pass id"
        }

        Todos.remove({"_id": id});
    }
};