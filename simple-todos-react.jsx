// Collection to keep the todos
Todos = new Meteor.Collection('todos');

if (Meteor.isClient) {
    // This code is executed on the client only

    // Default set currently filter to "all"
    Session.set('filter', 'all');

    // Default currently in editing item is null
    Session.set('editing_todo', null);

    // Set up filter types and their mongo db selectors
    var filter_selection = {
        all: {},
        active: {completed: false},
        completed: {completed: true}
    };

    FlowRouter.route('/', {
        action: function(){
            Session.set('filter', 'all');
        }
    });

    FlowRouter.route('/all', {
        action: function(){
            Session.set('filter', 'all');
        }
    });

    FlowRouter.route('/active',{
        action: function(){
            Session.set('filter', 'active');
        }
    });

    FlowRouter.route('/completed',{
        action: function(){
            Session.set('filter', 'completed');
        }
    });

    Meteor.startup(function () {
        // Use Meteor.startup to render the component after the page is ready
        React.render(<App />, document.getElementById("render-target"));
    });
}