Components.TaskList = React.createClass({
    renderTaskList: function(){
        console.log(this.props.tasks);
        var tasks = this.props.tasks;
        return tasks.map((task) => {
            return <Components.Task key={task._id} todo={task} />;
        });
    },
    // get number of active todos
    activeToDos: function(){
        return DBUtility.Todos.getTodoLists("active").length;
    },
    // get number of completed todos
    completedToDos: function(){
        return DBUtility.Todos.getTodoLists("completed").length;
    },
    //
    toggleAll: function(){
        console.log("toggleAll");
        var completed = true;
        if (!DBUtility.Todos.getTodoLists("active").length) {
            completed = false;
        }
        DBUtility.Todos.getTodoLists("all").forEach(function(todo) {
            //Todos.update({'_id': todo._id}, {$set: {completed: completed}});
            DBUtility.Todos.updateTodoList(todo._id, {completed: completed});
        });
    },
    removeCompletedTodos: function(){
        DBUtility.Todos.getTodoLists("completed").forEach(function(todo){
            DBUtility.Todos.deleteTodoList(todo._id);
        });
    },
    render(){
        var taskListClassName;
        if(this.props.tasks.length){
            taskListClassName = "display";
        }else{
            taskListClassName = "hide";
        }

        var filtersClassName = {
            all: 'selected',
            active: '',
            completed: ''
        };

        if(Session.get('filter') == "all"){
            filtersClassName = {
                all: 'selected',
                active: '',
                completed: ''
            }
        }else if(Session.get('filter') == "active"){
            filtersClassName = {
                all: '',
                active: 'selected',
                completed: ''
            }
        }else if(Session.get('filter') == "completed"){
            filtersClassName = {
                all: '',
                active: '',
                completed: 'selected'
            }
        }

        return (
            <div className={taskListClassName}>
                <section id="main">
                    <input
                        id="toggle-all"
                        type="checkbox"
                        onClick={this.toggleAll}/>
                    <label for="toggle-all"></label>
                    <ul id="todo-list">
                        {this.renderTaskList()}
                    </ul>
                </section>

                <footer id="footer">
                    <span id="todo-count"><strong>{this.activeToDos()}</strong>items left</span>
                    <ul id="filters">

                        <li>
                            <a href="/all" className={filtersClassName.all}>all</a>
                        </li>

                        <li>
                            <a href="/active" className={filtersClassName.active}>active</a>
                        </li>

                        <li>
                            <a href="/completed" className={filtersClassName.completed}>completed</a>
                        </li>

                    </ul>

                    <button id="clear-completed" onClick={this.removeCompletedTodos}>Clear completed ({this.completedToDos()})</button>

                </footer>
            </div>
        );
    }
});