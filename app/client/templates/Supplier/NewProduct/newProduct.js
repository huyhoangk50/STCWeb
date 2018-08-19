import './newProduct.html'
import './newProduct.css'
// const ProductManagement = require('../../../../lib/Ethereum/ProductManagementBlockchain');
const sha256 = require('sha256');
const ethContract = require('../../../../lib/EthereumContracts');
const host = 'http://192.168.2.189:3000/';


const ProductManagement = require('../../../../lib/Ethereum/ProductManagementBlockchain');
// import './hero-slider.css';
// import './tooplate-style.css';
// import './StarRatingBar';

Template.new_product.rendered = function(){
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

Template.new_product.helpers({ 
    ratingAverage:  function(){
        if(this.nRating == 0){
            return 0;
        } else {
            let average = this.sumRating * 5.0 / this.nRating;
            return(average.toFixed(2));
        }
    }
}); 

Template.new_product.events({ 
    'submit .new-product-form': function(event, template){
        event.preventDefault();
        var productName = event.target.productName.value;
        var description = event.target.description.value;
        var code = new Date().getTime();
        console.log('code in new product');
        console.log(code);
        var hash = sha256('' + code);
        console.log('hash in new product');
        console.log(hash);
        var productManagement = new ProductManagement(ethContract.productABI, ethContract.productBytecode);
        productManagement.newProduct(productName, '0x' + hash, description, template.data.categoryAddress, ethContract.userAddress, ethContract.userPrivateKey, function(receipt){
            var productAddress = receipt.contractAddress;
            var url = host + 'feedback/category/' + template.data.categoryAddress + '/product/' + productAddress + '/code/' + code;
            console.log(url);
            $('#qrcode').qrcode(url);
        })
        // $('#qrcode').qrcode('' + code);
    }
}); 