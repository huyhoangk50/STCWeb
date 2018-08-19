import './categoryItem2.html';

Template.categoryItem2.rendered = function(){

}

Template.categoryItem2.helpers({
    // imageLogo: function() {
    //     return ('<img src="' + this.category.url + '" class="img-rounded">')
    // }
});

Template.categoryItem2.events({ 
    'click .category-item2': function(event, template) { 
        Router.go('/new-product/0x7cd28a08a8f0fb876e4cb9fb4fe4af7d17fb6008');
    } 
});