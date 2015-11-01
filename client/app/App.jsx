// App component - represents the whole app
Components.App = React.createClass({
    mixins: [ReactMeteorData],
    getMeteorData: function(){
        return {
            tasks:DBUtility.Todos.getTodoLists(Session.get("filter"))
        }
    },

    render() {
        return (
            <div>
                <section id="todoapp">
                    <header id="header">
                        <h1>todos</h1>
                        <Components.AddTask />
                    </header>
                    <Components.TaskList tasks={this.data.tasks}/>
                </section>
                <Components.Footer />
            </div>
        );
    }
});