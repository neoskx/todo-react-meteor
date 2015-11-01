FlowRouter.route('/', {
    action: function(){
        Session.set('filter', 'all');
        console.log("path: /");
    }
});

FlowRouter.route('/all', {
    action: function(){
        Session.set('filter', 'all');
        console.log("path: /all");
    }
});

FlowRouter.route('/active',{
    action: function(){
        Session.set('filter', 'active');
        console.log("path: /active");
    }
});

FlowRouter.route('/completed',{
    action: function(){
        Session.set('filter', 'completed');
        console.log("path: /completed");
    }
});