// Task component - represents a single todo item
Task = React.createClass({
    getInitialState: function () {
        return {editText: this.props.todo.title};
    },
    toggle: function () {
        Todos.update(this._id, {$set: {completed: !this.completed}})
    },
    remove: function () {
        console.log("remove, %o", this);
        Todos.remove(this.props.todo._id);
    },
    onEditing: function () {
        this.props.editing = true;
        this.setState({editText: this.props.todo.title});
    },
    handleSubmit: function (event) {
        var val = this.state.editText.trim();
        if (val) {
            Todos.update(this._id, {$set: {title: $.trim(val)}});
            this.setState({editText: val});
        } else {
            //this.props.onDestroy();
        }
    },
    handleKeyDown: function () {
        var ESCAPE_KEY = 27;
        var ENTER_KEY = 13;

        if (event.which === ESCAPE_KEY) {
            this.setState({editText: this.props.todo.title});
            this.props.editing = false;
        } else if (event.which === ENTER_KEY) {
            this.handleSubmit(event);
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
                    onKeyDown={this.handleKeyDown}/>
            </li>
        );
    }
});