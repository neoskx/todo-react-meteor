AddTask = React.createClass({
    addToDoItem: function () {

        var ENTER_KEY = 13;
        // Just when key is enter, then save to server
        if (event.keyCode !== ENTER_KEY) {
            return;
        }

        event.preventDefault();

        var title = React.findDOMNode(this.refs.addToDoItem).value.trim();
        var item = {
            title: title,
            completed: false,
            createdAt: new Date()
        };
        Todos.insert(item);
        React.findDOMNode(this.refs.addToDoItem).value = '';
    },
    render(){
        return (
            <input id="new-todo" placeholder="What needs to be done?" autofocus="" ref="addToDoItem" onKeyDown={this.addToDoItem}/>
        );
    }
});