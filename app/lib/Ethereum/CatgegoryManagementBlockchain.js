// Constructor
// const 
function CategoryManagementBlockchain(_categoryAbi, _categoryByteCode = null, _categoryAddress = null) {
    this.categoryAbi = _categoryAbi;
    this.categoryAddress = _categoryAddress; 
    this.categoryByteCode = _categoryByteCode;
    this.categoryContract = new web3.eth.Contract(_categoryAbi);
}
// get category information from blockchain
CategoryManagementBlockchain.prototype.getCategoryInfo = function(address, callback) {
    this.categoryContract.options.address = address;
    this.categoryContract.methods.getInfo().call(function(error, result){
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
  // export the class
module.exports = CategoryManagementBlockchain;