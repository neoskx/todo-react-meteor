// Task component - represents a single todo item
Components.Task = React.createClass({
    getInitialState: function () {
        return {editText: this.props.todo.title};
    },
    toggle: function () {
        //Todos.update(this._id, {$set: {completed: !this.completed}})
        DBUtility.Todos.updateTodoList(this.props.todo._id, {completed: !this.props.todo.completed});
    },
    remove: function () {
        //console.log("remove, %o", this);
        //Todos.remove(this.props.todo._id);
        DBUtility.Todos.deleteTodoList(this.props.todo._id);
    },
    onEditing: function () {
        console.log("Task -> onEditing");
        this.props.editing = true;
        this.setState({editText: this.props.todo.title});
    },
    handleSubmit: function (event) {
        console.log("Task -> handleSubmit");
        var val = this.state.editText.trim();
        console.log("val: %s", val);
        if (val) {
            //Todos.update(this._id, {$set: {title: $.trim(val)}});
            DBUtility.Todos.updateTodoList(this.props.todo._id, {title: $.trim(val)})
            this.setState({editText: val});
            this.props.editing = false;
        } else {
            //this.props.onDestroy();
        }
    },
    handleKeyDown: function (event) {
        console.log("Task -> handleKeyDown");
        var ESCAPE_KEY = 27;
        var ENTER_KEY = 13;

        if (event.which === ESCAPE_KEY) {
            console.log("escape");
            this.setState({editText: this.props.todo.title});
            this.props.editing = false;
        } else if (event.which === ENTER_KEY) {
            console.log("enter");
            this.handleSubmit(event);
        }
    },
    handleChange: function(event){
        if (this.props.editing) {
            this.setState({editText: event.target.value});
        }
    },
    render() {

        return (
            <li className={React.addons.classSet({
					completed: this.props.todo.completed,
					editing: this.props.editing
				})}>
                <div className="view">
                    <input
                        className="toggle"
                        type="checkbox"
                        checked={this.props.todo.completed}
                        onClick={this.toggle}
                        />
                    <label
                        onDoubleClick={this.onEditing}>{this.props.todo.title}</label>
                    <button className="destroy" onClick={this.remove.bind(this)}></button>
                </div>
                <input
                    className="edit"
                    value={this.state.editText}
                    onBlur={this.handleSubmit}
                    onChange={this.handleChange}
                    onKeyDown={this.handleKeyDown}/>
            </li>
        );
    }
});