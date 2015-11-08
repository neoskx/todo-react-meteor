function authenticationPage(){
    var route = FlowRouter.current()&&FlowRouter.current().route||{};
    var skipAuth = route.options&&route.options.skipAuth||false;
    // If user not exist and this page need to auth, go to login page
    if(!Meteor.user()&&!skipAuth){
        var path = FlowRouter.path("login", null, null);
        FlowRouter.go(path);
    }else{

    }
}

FlowRouter.route('/', {
    name: "index",
    action: function(){
        authenticationPage();
        ReactLayout.render(Components.MainLayout, {content: <Components.App />});
        Session.set('filter', 'all');
        console.log("path: /");
    }
});

FlowRouter.route('/all', {
    action: function(){
        authenticationPage();
        Session.set('filter', 'all');
        console.log("path: /all");
    }
});

FlowRouter.route('/active',{
    action: function(){
        authenticationPage();
        Session.set('filter', 'active');
        console.log("path: /active");
    }
});

FlowRouter.route('/completed',{
    action: function(){
        authenticationPage();
        Session.set('filter', 'completed');
        console.log("path: /completed");
    }
});

FlowRouter.route('/login', {
    name: "login",
    skipAuth: "true",
    action: function(){
        authenticationPage();
        ReactLayout.render(Components.MainLayout, {content: <Components.Login />});
    }
});

FlowRouter.route('/register', {
    name: "register",
    skipAuth: "true",
    action: function(){
        authenticationPage();
        ReactLayout.render(Components.MainLayout, {content: <Components.Register />});
    }
});

FlowRouter.route('/forget', {
    name: "forget",
    skipAuth: "true",
    action: function(){
        authenticationPage();
        ReactLayout.render(Components.MainLayout, {content: <Components.Forget />});
    }
});