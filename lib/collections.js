Todos = new Meteor.Collection('todos');


// schema object to store all schema used in this project
var schema = {};

// Schema for `Todos` collection
schema.Todos = new SimpleSchema({
    title:{
        type:String,
        label: "Title",
        max: 200
    },
    completed:{
        type: Boolean,
        label: "This task is completed or not",
        defaultValue: false
    },
    createdAt:{
        type: Date,
        label: "Last Modified Date"
    }
});

Todos.attachSchema(schema.Todos);