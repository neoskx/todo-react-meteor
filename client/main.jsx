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

Components.MainLayout = React.createClass({
    render(){
        return (
            <div>
                {this.props.content}
            </div>
        );
    }
});


Meteor.startup(function () {
    // Use Meteor.startup to render the component after the page is ready
    //React.render(<Components.App></Components.App>, document.getElementById("render-target"));
    //React.render(<Components.MainLayout></Components.MainLayout>, document.getElementById("render-target"));
    //authenticationPage();
});