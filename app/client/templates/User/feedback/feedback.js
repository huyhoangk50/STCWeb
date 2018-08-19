import './feedback.css';
import './feedback.html';
import { userPrivateKey } from '../../../../lib/EthereumContracts';
const ethContract = require('../../../../lib/EthereumContracts');
const ProductManagement = require('../../../../lib/Ethereum/ProductManagementBlockchain');
// import './hero-slider.css';
// import './tooplate-style.css';
// import './StarRatingBar';

Template.feedback.rendered = function(){
    console.log('rendered')
    var ratingAverage;
    if(this.data.nRating == 0){
        ratingAverage = 0;
    } else {
        let average = this.data.sumRating * 5.0 / this.data.nRating;
        ratingAverage = Math.floor(average);
    }
    $("#total-rating").html('<x-star-rating  class="rating-bar" value="' + ratingAverage + '" number="5"></x-star-rating>');
    // console.log(this.data.imageUrl);
    $("#pic-1").html('<img src="' + this.data.imageUrl  +'" />');
}

Template.feedback.helpers({ 
    ratingAverage:  function(){
        if(this.nRating == 0){
            return 0;
        } else {
            let average = this.sumRating * 5.0 / this.nRating;
            return(average.toFixed(2));
        }
    }
}); 

Template.feedback.events({ 
    'submit .feedback-form': function(event, template){
        event.preventDefault();
        var generalRating = document.getElementById('general-rating-bar').value;
        var tasting = document.getElementById('tasting-bar').value;
        var uiDesignRating = document.getElementById('ui-design-bar').value;
        var ordorRating = document.getElementById('odor-rating-bar').value;
        var comment = event.target.comment.value;

        var productManagement = new ProductManagement(ethContract.productABI, ethContract.productBytecode);
        // productManagement.sendFeedback(template.data.productAddress, generalRating, tasting, uiDesignRating, ordorRating, comment, template.data.code, ethContract.userAddress, userPrivateKey, function(receipt){
        productManagement.sendFeedback(template.data.productAddress, generalRating, comment, template.data.code, ethContract.userAddress, userPrivateKey, function(receipt){
            console.log("receipt");
            console.log(receipt);
        });
    },
    'click .check-code': function (event, template){
        
        var generalRating = document.getElementById('general-rating-bar').value;
        var comment = $('#comment').val();
        var productManagement = new ProductManagement(ethContract.productABI, ethContract.productBytecode);
        console.log('checkcode 0 ');
        productManagement.getIsRated(template.data.productAddress, function(receipt){
            console.log("receipt");
            console.log(receipt);
        });
    }
}); 
