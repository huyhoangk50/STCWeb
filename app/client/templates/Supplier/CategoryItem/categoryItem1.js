import './categoryItem1.html';

Template.categoryItem1.rendered = function(){

}

Template.categoryItem1.helpers({
    // imageLogo: function() {
    //     return ('<img src="' + this.category.url + '" class="img-rounded">')
    // }
});

Template.categoryItem1.events({ 
    'click .category-item1': function(event, template) { 
        Router.go('/new-product/0x4e8c38f2e5e7713059c4ddf973f8261f3ea9abba')
    } 
});