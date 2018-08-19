const Product = artifacts.require('Product');
const mineTx = require("./helpers/mineTx.js");
console.log(this);
import assertRevert from './helpers/assertRevert';
var sha256 = require('sha256');

// let Web3 = require('web3');
// var window ={};
// window.web3 = undefined;

// console.log(Web3.currentProvider)
// let truffle_config = require('../truffle-config');
// console.log(truffle_config);
// var web3 = new Web3(truffle_config.network.provider);
// console.log(truffle_config.network.provider);
contract('Product', accounts => {
    let product;

    const creator = accounts[0];

    let name = "iphone x";
    let image = "abc";
    let code = "hello";
    
//
    // console.log('Estimated gas for FinancialReportInYear contract is: ' + web3.eth.estimateGas({ data: FinancialReportInYear.bytecode }));

    beforeEach(async function () {
        let hash = sha256(code);
        console.log('hash');
        console.log(hash);
        product = await Product
        .new(
            name,
            '0x' + hash,
            image,
            { from: creator });
        console.log('product.address');
        console.log(product.address);
    });
    
    
    it('check rating funciton', async function () {
        // radom a fake acount
        let fakeAccount = accounts[2];
        // get data from the ethereum block chain
        console.log('here');
        let codeFromBlockchain = await product.getCode();
        console.log(codeFromBlockchain);
        let isRated = await product.getIsRated();
        assert.equal(isRated, false);
        let hashCodeFromBlockchain = await product.getHashCode('hello');
        console.log(hashCodeFromBlockchain);
        let isRatedSuccessfully = await product.rate(5, 'good', 'hello');
        // console.log('isRatedSuccessfully');
        // console.log(isRatedSuccessfully);
        // let isMined;

        // // while (!isMined){
        //     let temp = await  web3.eth.getTransactionReceipt(isRatedSuccessfully.receipt.transactionHash);
            
        //     console.log('isMined------------------------------------');
        //     // console.log(temp);
        //     web3.eth.getTransactionReceipt('0x24b75aaa95b1ce9b0187e5832e26b84e1258a9d03ca8704a9e98d1b1ad2e42bc').then(function(result){
        //         console.log(result);
        //     })
        //     // console.log('isMined------------------------------------');
        //     // console.log(isMined);
        // // }
        // // await mineTx.mineTx(isRatedSuccessfully)
        // // let isRatedAfter = await product.getIsRated();
        // // assert.equal(isRated, true);
        
    });
    
});
