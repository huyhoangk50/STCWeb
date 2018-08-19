import './product.html';

import {Template} from 'meteor/templating';
import {ReactiveVar} from 'meteor/reactive-var';
import Images from '../../../../lib/images.collection.js';
import '../../../../lib/EthereumConnector.js';
var Web3 = require('web3');

var byteCode = '0x608060405234801561001057600080fd5b50604051610c80380380610c80833981018060405281019080805182019291906020018051820192919060200180518201929190505050336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550826001908051906020019061009d92919061014a565b5081600290805190602001906100b492919061014a565b50336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550806006908051906020019061010b92919061014a565b506000600560006101000a81548160ff0219169083151502179055506000600560016101000a81548160ff0219169083151502179055505050506101ef565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061018b57805160ff19168380011785556101b9565b828001600101855582156101b9579182015b828111156101b857825182559160200191906001019061019d565b5b5090506101c691906101ca565b5090565b6101ec91905b808211156101e85760008160009055506001016101d0565b5090565b90565b610a82806101fe6000396000f300608060405260043610610078576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806310ae4c8d1461007d5780635a9b0b891461009f578063715018a61461022a5780638da5cb5b14610241578063cdc1ebc114610298578063f2fde38b14610319575b600080fd5b61008561035c565b604051808215151515815260200191505060405180910390f35b3480156100ab57600080fd5b506100b461040c565b60405180806020018760ff1660ff1681526020018060200186151515158152602001851515151581526020018060200184810384528a818151815260200191508051906020019080838360005b8381101561011c578082015181840152602081019050610101565b50505050905090810190601f1680156101495780820380516001836020036101000a031916815260200191505b50848103835288818151815260200191508051906020019080838360005b83811015610182578082015181840152602081019050610167565b50505050905090810190601f1680156101af5780820380516001836020036101000a031916815260200191505b50848103825285818151815260200191508051906020019080838360005b838110156101e85780820151818401526020810190506101cd565b50505050905090810190601f1680156102155780820380516001836020036101000a031916815260200191505b50995050505050505050505060405180910390f35b34801561023657600080fd5b5061023f610635565b005b34801561024d57600080fd5b50610256610737565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6102ff600480360381019080803560ff169060200190929190803590602001908201803590602001908080601f016020809104026020016040519081016040528093929190818152602001838380828437820191505050505050919291929050505061075c565b604051808215151515815260200191505060405180910390f35b34801561032557600080fd5b5061035a600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610850565b005b6000801515600560009054906101000a900460ff16151514151561037f57600080fd5b6001600560006101000a81548160ff0219169083151502179055507fddddaedaf867e37981c7e363c32621702202b88fb367a5e955d070ddf5e438a63334604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060405180910390a16000905090565b60606000606060008060606001600360009054906101000a900460ff166004600560009054906101000a900460ff16600560019054906101000a900460ff166006858054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156104e25780601f106104b7576101008083540402835291602001916104e2565b820191906000526020600020905b8154815290600101906020018083116104c557829003601f168201915b50505050509550838054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561057e5780601f106105535761010080835404028352916020019161057e565b820191906000526020600020905b81548152906001019060200180831161056157829003601f168201915b50505050509350808054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561061a5780601f106105ef5761010080835404028352916020019161061a565b820191906000526020600020905b8154815290600101906020018083116105fd57829003601f168201915b50505050509050955095509550955095509550909192939495565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561069057600080fd5b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167ff8df31144d9c2f0f6b59d69b8b98abd5459d07f2742c4df920b25aae33c6482060405160405180910390a260008060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000801515600560019054906101000a900460ff16151514151561077f57600080fd5b60003411151561078e57600080fd5b82600360006101000a81548160ff021916908360ff16021790555081600490805190602001906107bf9291906109b1565b506001600560016101000a81548160ff0219169083151502179055507fb7f101d4f93a5ea015f5b32b9f247d105d4d5147fb45ace3745ee0b071935b573334604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060405180910390a16001905092915050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156108ab57600080fd5b6108b4816108b7565b50565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141515156108f357600080fd5b8073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106109f257805160ff1916838001178555610a20565b82800160010185558215610a20579182015b82811115610a1f578251825591602001919060010190610a04565b5b509050610a2d9190610a31565b5090565b610a5391905b80821115610a4f576000816000905550600101610a37565b5090565b905600a165627a7a7230582078b9142a919aaea7f646ce86f712deb17225a9bf8a0c4edbd133500a3093c2dc0029';

var tokenABI = [
    {
        "constant": false,
        "inputs": [],
        "name": "renounceOwnership",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "owner",
        "outputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_newOwner",
                "type": "address"
            }
        ],
        "name": "transferOwnership",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "name": "_name",
                "type": "string"
            },
            {
                "name": "_code",
                "type": "string"
            },
            {
                "name": "_image",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "name": "from",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "Rate",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "name": "from",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "CheckCode",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "previousOwner",
                "type": "address"
            }
        ],
        "name": "OwnershipRenounced",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "previousOwner",
                "type": "address"
            },
            {
                "indexed": true,
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "getInfo",
        "outputs": [
            {
                "name": "",
                "type": "string"
            },
            {
                "name": "",
                "type": "uint8"
            },
            {
                "name": "",
                "type": "string"
            },
            {
                "name": "",
                "type": "bool"
            },
            {
                "name": "",
                "type": "bool"
            },
            {
                "name": "",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_rating",
                "type": "uint8"
            },
            {
                "name": "_comment",
                "type": "string"
            }
        ],
        "name": "rate",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": true,
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [],
        "name": "checkCode",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": true,
        "stateMutability": "payable",
        "type": "function"
    }
];


var privateKey = Buffer.from("3d0dad8dd6752db29049adb0fa911e742af1d67ef41472af48b5b334c37471ba", 'hex');
web3 = new Web3(new Web3.providers.HttpProvider("https://ropsten.infura.io/" + "wpX77Y5cvP9fPe6Piv1k"));
var gasPrice = 1100000000;
var gasLimit = 4605201;

var Tx = require('ethereumjs-tx');

var image;

var productAddress = "0xf2caed886b616e93c6a88f0fd98269aec688410e";
console.log(web3.version);

var ProductContract = new web3.eth.Contract(tokenABI, productAddress);

// Template.uploadedFiles.helpers({
//     uploadedFiles: function () {
//         return Images.find();
//     }
// });

// Template.uploadForm.onCreated(function () {
//     this.currentUpload = new ReactiveVar(false);
// });

// Template.uploadForm.helpers({
//     currentUpload: function () {
//         return Template.instance().currentUpload.get();
//     }
// });

// Template.uploadForm.events({
//     'change #fileInput': function (e, template) {
//         if (e.currentTarget.files && e.currentTarget.files[0]) {
//             // We upload only one file, in case
//             // there was multiple files selected
//             var file = e.currentTarget.files[0];
//             console.log("file:" + file);
//             var FR = new FileReader();
//             console.log("fr: " + FR);
//             FR.addEventListener("load", function (ev) {
//                 // console.log("image: " + ev.target.result);
//                 image = ev.target.result;
//             });
//             // console.log("image: " + image);
//             FR.readAsDataURL(file);
//         }
//     }
// });

Template.product.events({
    'click #addProduct': function (e) {
        e.preventDefault();
        var count;
        var tx;
        // console.log("image: " + image);

        console.log(ProductContract)
        let deploy = ProductContract.deploy({
            data: byteCode,
            arguments: ["iphone", "163287423", "image"]
        }).encodeABI();
        console.log(ProductContract)

        // var contractInstance = GuessNumber.new({from: userAddress, gas: 200000, data: contractCode});
        console.log(web3.eth);
        console.log(web3.currentProvider);
        var userAddress = "0xDca45834e3C319fb6069E136097f237F512A8Ca6";
        console.log(userAddress)


        web3.eth.getTransactionCount(userAddress, function (err, result) {
            if(err) {
                console.log("err");
                console.log(err);

            } else {
                count = result;
                console.log("count");
                console.log(count);
                tx = new Tx({
                    value: '0x0',
                    from: userAddress,
                    nonce: count,
                    gasPrice: "0x" + gasPrice.toString(16),
                    gas: "0x" + gasLimit.toString(16),
                    data: deploy,
                    chainId: "0x03"
                });
                console.log("0x" + gasPrice.toString(16));
                console.log("0x" + gasLimit.toString(16));
                tx.sign(privateKey);
                var serializedTx = tx.serialize();
                console.log(serializedTx);
                console.log(web3.eth);
                // web3.eth.sendRawTransaction('0x' + serializedTx.toString('hex'), function (err, hash) {
                //     if (!err)
                //         console.log(hash);
                // });
                web3.eth.sendSignedTransaction('0x' + serializedTx.toString('hex'))
                    .on('transactionHash', function(hash){
                        console.log("hash");
                        console.log(hash);
                    })
                    .on('receipt', function(receipt){
                        console.log("receipt");
                        console.log(receipt);
                        console.log(receipt.address)
                    })
                    .on('confirmation', function(confirmationNumber, receipt){
                        console.log("confirmation");
                        Bert.alert("The payment was success!", "success", 'growth-top-right');
                        count = count + 1;
                    })
                    .on('error', console.error);

            }

        });
    }
});

// import './main.html';

Template.uploadedFiles.helpers({
  uploadedFiles: function () {
    return Images.find();
  }
});

Template.uploadForm.onCreated(function () {
  this.currentUpload = new ReactiveVar(false);
});

Template.uploadForm.helpers({
  currentUpload: function () {
    return Template.instance().currentUpload.get();
  }
});

Template.uploadForm.events({
  'change #fileInput': function (e, template) {
    if (e.currentTarget.files && e.currentTarget.files[0]) {
      // We upload only one file, in case
      // there was multiple files selected
      var file = e.currentTarget.files[0];
      if (file) {
        var uploadInstance = Images.insert({
          file: file,
          streams: 'dynamic',
          chunkSize: 'dynamic',
          transport: 'DDP'
        }, false);

        uploadInstance.on('start', function() {
          template.currentUpload.set(this);
        });

        uploadInstance.on('end', function(error, fileObj) {
          if (error) {
            window.alert('Error during upload: ' + error.reason);
          } else {
            window.alert('File "' + fileObj.name + '" successfully uploaded');
          }
          template.currentUpload.set(false);
        });

        uploadInstance.start();
      }
    }
  }
});
