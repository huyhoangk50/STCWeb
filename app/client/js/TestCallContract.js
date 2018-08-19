// /*
//
//
// var Tx = require('ethereumjs-tx');
//
// var byteCode ='0x608060405234801561001057600080fd5b50604051610b4f380380610b4f8339810180604052810190808051820192919060200180518201929190505050336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508160019080519060200190610093929190610128565b5080600290805190602001906100aa929190610128565b50336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506000600560006101000a81548160ff0219169083151502179055506000600560016101000a81548160ff02191690831515021790555050506101cd565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061016957805160ff1916838001178555610197565b82800160010185558215610197579182015b8281111561019657825182559160200191906001019061017b565b5b5090506101a491906101a8565b5090565b6101ca91905b808211156101c65760008160009055506001016101ae565b5090565b90565b610973806101dc6000396000f300608060405260043610610078576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806310ae4c8d1461007d5780635a9b0b891461009f578063715018a6146101be5780638da5cb5b146101d5578063cdc1ebc11461022c578063f2fde38b146102ad575b600080fd5b6100856102f0565b604051808215151515815260200191505060405180910390f35b3480156100ab57600080fd5b506100b46103a0565b60405180806020018660ff1660ff168152602001806020018515151515815260200184151515158152602001838103835288818151815260200191508051906020019080838360005b838110156101185780820151818401526020810190506100fd565b50505050905090810190601f1680156101455780820380516001836020036101000a031916815260200191505b50838103825286818151815260200191508051906020019080838360005b8381101561017e578082015181840152602081019050610163565b50505050905090810190601f1680156101ab5780820380516001836020036101000a031916815260200191505b5097505050505050505060405180910390f35b3480156101ca57600080fd5b506101d3610526565b005b3480156101e157600080fd5b506101ea610628565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b610293600480360381019080803560ff169060200190929190803590602001908201803590602001908080601f016020809104026020016040519081016040528093929190818152602001838380828437820191505050505050919291929050505061064d565b604051808215151515815260200191505060405180910390f35b3480156102b957600080fd5b506102ee600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610741565b005b6000801515600560009054906101000a900460ff16151514151561031357600080fd5b6001600560006101000a81548160ff0219169083151502179055507fddddaedaf867e37981c7e363c32621702202b88fb367a5e955d070ddf5e438a63334604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060405180910390a16000905090565b6060600060606000806001600360009054906101000a900460ff166004600560009054906101000a900460ff16600560019054906101000a900460ff16848054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156104725780601f1061044757610100808354040283529160200191610472565b820191906000526020600020905b81548152906001019060200180831161045557829003601f168201915b50505050509450828054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561050e5780601f106104e35761010080835404028352916020019161050e565b820191906000526020600020905b8154815290600101906020018083116104f157829003601f168201915b50505050509250945094509450945094509091929394565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561058157600080fd5b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167ff8df31144d9c2f0f6b59d69b8b98abd5459d07f2742c4df920b25aae33c6482060405160405180910390a260008060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000801515600560019054906101000a900460ff16151514151561067057600080fd5b60003411151561067f57600080fd5b82600360006101000a81548160ff021916908360ff16021790555081600490805190602001906106b09291906108a2565b506001600560016101000a81548160ff0219169083151502179055507fb7f101d4f93a5ea015f5b32b9f247d105d4d5147fb45ace3745ee0b071935b573334604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060405180910390a16001905092915050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561079c57600080fd5b6107a5816107a8565b50565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141515156107e457600080fd5b8073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106108e357805160ff1916838001178555610911565b82800160010185558215610911579182015b828111156109105782518255916020019190600101906108f5565b5b50905061091e9190610922565b5090565b61094491905b80821115610940576000816000905550600101610928565b5090565b905600a165627a7a72305820d078a6627f4ffa47a416b2f627e43b8f49e18a9b4a6c517b7508fd40fc27daac0029';
//
// var tokenABI = [ { "constant": false, "inputs": [], "name": "renounceOwnership", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "owner", "outputs": [ { "name": "", "type": "address" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "_newOwner", "type": "address" } ], "name": "transferOwnership", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "name": "_name", "type": "string" }, { "name": "_code", "type": "string" } ], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [ { "indexed": false, "name": "from", "type": "address" }, { "indexed": false, "name": "value", "type": "uint256" } ], "name": "Rate", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "name": "from", "type": "address" }, { "indexed": false, "name": "value", "type": "uint256" } ], "name": "CheckCode", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "name": "previousOwner", "type": "address" } ], "name": "OwnershipRenounced", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "name": "previousOwner", "type": "address" }, { "indexed": true, "name": "newOwner", "type": "address" } ], "name": "OwnershipTransferred", "type": "event" }, { "constant": true, "inputs": [], "name": "getInfo", "outputs": [ { "name": "", "type": "string" }, { "name": "", "type": "uint8" }, { "name": "", "type": "string" }, { "name": "", "type": "bool" }, { "name": "", "type": "bool" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "_rating", "type": "uint8" }, { "name": "_comment", "type": "string" } ], "name": "rate", "outputs": [ { "name": "", "type": "bool" } ], "payable": true, "stateMutability": "payable", "type": "function" }, { "constant": false, "inputs": [], "name": "checkCode", "outputs": [ { "name": "", "type": "bool" } ], "payable": true, "stateMutability": "payable", "type": "function" } ];
//
// var ProductContract = new web3.eth.Contract(tokenABI, productAddress);
//
// var userAddress = "0xDca45834e3C319fb6069E136097f237F512A8Ca6";
// var privateKey = Buffer.from("3d0dad8dd6752db29049adb0fa911e742af1d67ef41472af48b5b334c37471ba", 'hex');
//
// var userAddress= "0xDca45834e3C319fb6069E136097f237F512A8Ca6";
// var privateKey = Buffer.from("3d0dad8dd6752db29049adb0fa911e742af1d67ef41472af48b5b334c37471ba", 'hex');
//
// web3 = new Web3(new Web3.providers.HttpProvider("https://ropsten.infura.io/" + "wpX77Y5cvP9fPe6Piv1k"));
//
// var gasPrice = 1100000000;
// var gasLimit = 4605201;
//
// var Contract = web3.eth.contract(tokenABI);
// var sContract = Contract.at("0x2085a7c4509b2cb8b3d1b60f14f5185b0c40b452");
//
//
//
//
// Template.TestCallContract.helpers({});
//
// Template.TestCallContract.events({
//
//     "submit .test": function (event) {
//         // let deploy = ProductContract.deploy({
//         //     data: byteCode,
//         //     arguments: ["iphone","163287423"]
//         // }).encodeABI();
//         // let checkCode = productContruct.methods.checkCode("163287423").encodeABI();
//
//         event.preventDefault();
//
//         console.log(sContract);
//
//         sContract.CheckCode({},{fromBlock: 0, toBlock: 'lastest'}).subscribe(function(e, log){
//             console.log("log: "+log);
//             if(!e) {
//                 console.log("From: " + log.args.from, log.args.value.toString(10));
//                 CheckCode.upsert('tx_'+log.transactionHash, {
//                     from: log.args.from,
//                     value:log.args.value.toString(10),
//                     blockNumber: log.blockNumber
//                 });
//             } else{
//                 console.log(e);
//             }
//         });
// // var contractInstance = GuessNumber.new({from: userAddress, gas: 200000, data: contractCode});
//         // web3.eth.getTransactionCount(userAddress, function(err, result){
//         //     count = result;
//         //     console.log("count");
//         //     console.log(count);
//         //     tx = new Tx({
//         //         value: '0x0',
//         //         from: userAddress,
//         //         nonce: count,
//         //         gasPrice: "0x" + gasPrice.toString(16),
//         //         gas: "0x" + gasLimit.toString(16),
//         //         data: deploy,
//         //         chainId: "0x03"
//         //     })
//         //     console.log("0x" + gasPrice.toString(16));
//         //     console.log("0x" + gasLimit.toString(16));
//         //     tx.sign(privateKey);
//         //     var serializedTx = tx.serialize();
//         //     console.log(serializedTx);
//         //     console.log(web3.eth);
//         //     web3.eth.sendRawTransaction('0x' + serializedTx.toString('hex'), function(err, hash) {
//         //       if (!err)
//         //           console.log(hash);
//         //     });
//         //
//         // });
//
//         sContract.getInfo(function(error, result){
//             if(!error)
//                 {
//                     console.log(result);
//                     console.log(result[1].toNumber())
//                 }
//             else
//                 console.error(error);
//         });
//
//
//     }
// })
// */
