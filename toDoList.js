/**
 * Created by tinhonng on 4/15/15.
 */
Items = new Mongo.Collection('items');


if(Meteor.isClient){
    Template.toDoList.helpers({
        items: function(){
            return Items.find({creator: Meteor.user()});
        }
    });
    Template.addForm.events({
        "submit form": function(event){
            event.preventDefault();
            var inputValue = event.target.task.value;
            Items.insert({creator: Meteor.user(), detail: inputValue});
            event.target.reset();
        }
    });
}


if(Meteor.isServer){
    Meteor.startup(function(){

    });
}