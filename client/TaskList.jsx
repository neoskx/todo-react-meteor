TaskList = React.createClass({
    renderTaskList: function(){
        console.log(this.props.tasks);
        var tasks = this.props.tasks;
        return tasks.map((task) => {
            return <Task key={task._id} todo={task} />;
        });
    },
    // get number of active todos
    activeToDos: function(){
        return Todos.find({completed: false}).count();
    },
    // get number of completed todos
    completedToDos: function(){
        return Todos.find({completed: true}).count();
    },
    //
    toggleAll: function(){
        console.log("toggleAll");
        var completed = true;
        if (!Todos.find({completed: false}).count()) {
            completed = false;
        }
        Todos.find({}).forEach(function(todo) {
            Todos.update({'_id': todo._id}, {$set: {completed: completed}});
        });
    },
    render(){
        var taskListClassName;
        if(this.props.tasks.length){
            taskListClassName = "display";
        }else{
            taskListClassName = "hide";
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
                            <a class="<!--data:Q79TWPGkfQzQhwhTH-->" href="#/all">all</a>
                        </li>

                        <li>
                            <a class="<!--data:5ocXQiHfP27vFramg-->" href="#/active">active</a>
                        </li>

                        <li>
                            <a class="<!--data:yBa8tNgFnndsa5MZ3-->" href="#/completed">completed</a>
                        </li>

                    </ul>

                    <button id="clear-completed">Clear completed ({this.completedToDos()})</button>

                </footer>
            </div>
        );
    }
});