// App component - represents the whole app
App = React.createClass({
    mixins: [ReactMeteorData],

    getMeteorData(){
        return {
            tasks: Todos.find({}, {sort: {createdAt: -1}}).fetch()
        }
    },

    render() {
        return (
            <div>
                <section id="todoapp">
                    <header id="header">
                        <h1>todos</h1>
                        <AddTask />
                    </header>
                    <TaskList tasks={this.data.tasks}/>
                </section>
                <Footer />
            </div>
        );
    }
});