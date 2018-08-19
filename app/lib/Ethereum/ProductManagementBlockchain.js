var Tx = require('ethereumjs-tx');
// Constructor
function ProductManagementBlockchain(_productAbi, _productByteCode, _productAddress = null) {
    // always initialize all instance properties
    this.productAbi = _productAbi;
    this.productAddress = _productAddress; 
    this.productByteCode = _productByteCode;
    this.productContract = new web3.eth.Contract(_productAbi);
}
// get product information from blockchain
ProductManagementBlockchain.prototype.getProductInfo = function(address) {
  this.productContract.options.address = address;
  this.productContract.methods.getInfo().call(function(error, result){
      if(error){
          console.log('error');
          console.log(error);
      } else {
          console.log('result');
          console.log(result);
          callback(result);
      }
  });
};

// ProductManagementBlockchain.prototype.sendFeedback = function(_address, _rating1, _rating2, _rating3, _rating4, _comment, _code, _useAddress, _userPrivateKey, callback) {
ProductManagementBlockchain.prototype.sendFeedback = function(_address, _rating1, _comment, _code, _useAddress, _userPrivateKey, callback) {

    var gasPrice = 1100000000;
    var gasLimit = 4605201;
    var pdManagement = this;
    this.productContract.options.address = _address;

    web3.eth.getTransactionCount(_useAddress, function(err, result){
        count = result;
        console.log("count");
        console.log(count);
        tx = new Tx({
            value: '0x0', 
            from: _useAddress,
            nonce: count,
            gasPrice: "0x" + gasPrice.toString(16),
            gas: "0x" + gasLimit.toString(16),
            gasLimit: "0x" + gasLimit.toString(16),
            // data: pdManagement.productContract.methods.rate(_rating1, _rating2, _rating3, _rating4, _comment, _code).encodeABI(),  
            data: pdManagement.productContract.methods.rate(_rating1, _comment, _code).encodeABI(),  
            chainId: "0x03"
        })

        tx.sign(_userPrivateKey);
        var serializedTx = tx.serialize();

        web3.eth.sendSignedTransaction('0x' + serializedTx.toString('hex'))
        .on('transactionHash', function(hash){
            console.log("hash");
            console.log(hash);
            Bert.alert("<h1>Đang chờ xác nhận giao dịch!<h1>", "success", 'growth-top-right');
        })
        .on('receipt', function(receipt){
            callback(receipt);
        })
        .on('confirmation', function(confirmationNumber, receipt){ 
            // console.log("confirmation");
            // Bert.alert("The payment was success!", "success", 'growth-top-right');
            // count = count + 1;
         })
        .on('error', console.error);
    });     
};

ProductManagementBlockchain.prototype.checkCode = function(_address, _rating1, _comment, _code, _useAddress, _userPrivateKey, callback) {
    console.log('checkcode');
    console.log(_rating1);
    console.log(_comment);
    console.log(_code);
    this.productContract.options.address = _address;
    this.productContract.methods.rate(_rating1, _comment, _code).call(function(error, result){
        if(error){
            console.log('error');
            console.log(error);
        } else {
            console.log('result');
            console.log(result);
            callback(result);
        }
    });
};


ProductManagementBlockchain.prototype.getIsRated = function(_address, callback) {
    this.productContract.options.address = _address;
    this.productContract.methods.getIsRated().call(function(error, result){
        if(error){
            console.log('error');
            console.log(error);
        } else {
            console.log('result');
            console.log(result);
            callback(result);
        }
    });
};



ProductManagementBlockchain.prototype.getHash = function(_address, callback) {
    this.productContract.options.address = _address;
    this.productContract.methods.getCode().call(function(error, result){
        if(error){
            console.log('getHash error');
            console.log(error);
        } else {
            console.log('getHash result');
            console.log(result);
            callback(result);
        }
    });
};

ProductManagementBlockchain.prototype.newProduct = function(_name, _code, _description, _categoryAddress, _useAddress, _userPrivateKey, callback) {

    var gasPrice = 1100000000;
    var gasLimit = 4305201;
    // this.productContract.options.address = address;
    let deploy = this.productContract.deploy({
        data: this.productByteCode,
        arguments: [_name, _code, _description, _categoryAddress]
    }).encodeABI();
    web3.eth.getTransactionCount(_useAddress, function(err, result){
        count = result;
        console.log("count");
        console.log(count);
        tx = new Tx({
            value: '0x0', 
            from: _useAddress,
            nonce: count,
            gasPrice: "0x" + gasPrice.toString(16),
            gas: "0x" + gasLimit.toString(16),
            gasLimit: "0x" + gasLimit.toString(16),
            data: deploy,  
            chainId: "0x03"
        })

        tx.sign(_userPrivateKey);
        var serializedTx = tx.serialize();

        web3.eth.sendSignedTransaction('0x' + serializedTx.toString('hex'))
        .on('transactionHash', function(hash){
            console.log("hash");
            console.log(hash);
            Bert.alert("<h1>Đang chờ xác nhận giao dịch!<h1>", "success", 'growth-top-right');
        })
        .on('receipt', function(receipt){
            if(callback){
                callback(receipt)
            }
        })
        .on('confirmation', function(confirmationNumber, receipt){ 
            console.log("confirmation");
            // Bert.alert("The payment was success!", "success", 'growth-top-right');
            // count = count + 1;
         })
        .on('error', console.error);
    });     
};
  // export the class
module.exports = ProductManagementBlockchain;

