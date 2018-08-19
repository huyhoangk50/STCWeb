var Product = artifacts.require("./Product.sol");
var ProductCategory = artifacts.require("./ProductCategory.sol");
var Supplier = artifacts.require("./Supplier.sol");
var sha256 = require('sha256');

module.exports = function(deployer) {
    var supplierName = 'STC';
    var supplierCode = 'STCV1';
    var supplierLocation = 'Hai Ba Trung, Ha Noi';
    var supplierDescription = 'Song Tinh Cam';
    deployer.deploy(Supplier, supplierName, supplierCode, supplierLocation, supplierDescription)
    .then(function(supplierInstance){
        console.log(supplierInstance.address);
    });
    let supplierAddress = '0xc67bd9ff6752ec33da5c418babed47a4eb69dc21';
    // ropsten
    // let supplierAddress = '0xade306345ffa9ef9624074974ca77271f8e794b7';
    let categoryName2 = "Nước siêu năng lực Marvel";
    let url2 = 'https://image.ibb.co/fXiW2e/marvel_absolut_02.jpg';
    let categoryDescription2 = "Chất lượng tuyệt hảo";
    deployer.deploy(
        ProductCategory, 
        categoryName2, 
        url2, 
        categoryDescription2, 
        supplierAddress
    ).then(function(categoryInstance2){
        console.log(categoryInstance2.address);
        let addess = "0xb3877f4345a290d85366e42380ca43094ac16b79"
    });
    
    let categoryName1 = "Vodka cá sấu";
    let url1 = 'http://img.21food.com/20110609/product/1305260353125.jpg';
    let categoryDescription1 = "Rượu thượng hạng";
    deployer.deploy(
        ProductCategory, 
        categoryName1, 
        url1, 
        categoryDescription1, 
        supplierAddress
    ).then(function(categoryInstance1){
        console.log(categoryInstance1.address);
        let addess = "0xe5f77b1b826fa3fef93acd1569f15e8ab4efd592"
    });

    // for(var i = 0; i < 1; i ++){
    //     let name = 'IphoneXNum' + i;
    //     let code = name;
    //     let hash = '0x' + sha256(code);
    //     let description = "San pham so " + i;
    //     let categoryAddress = "0x928892ad7e2fd6745a5b37732d647904dc3d6d6a";
    //     deployer.deploy(
    //         Product, 
    //         name, 
    //         hash, 
    //         description, 
    //         categoryAddress
    //     ).then(function(productInstance){
    //         console.log(productInstance.address);
    //     });

    //     let name2 = 'GalaxyNode9Num' + i;
    //     let code2 = name2;
    //     let hash2 = '0x' + sha256(code2);
    //     let description2 = "San pham so " + i;
    //     let categoryAddress2 = "0x4c236da33d204d91c1a2526877e18fc3970edadd";
    //     deployer.deploy(
    //         Product, 
    //         name2, 
    //         hash2, 
    //         description2, 
    //         categoryAddress2
    //     ).then(function(productInstance){
    //         console.log(productInstance.address);
    //     });
    // }

    // iphoneAddress:
    // category 0x928892ad7e2fd6745a5b37732d647904dc3d6d6a
    // code IphoneXNum0 -->9

    // 0x4a1b3d10842ee106e5dad9090bce5866891a619c
    // 0x3d6eea01dd8772477c33b4c408f2deb97bd84f1b
    // 0x932dfd38f32cacefffb96b113e6eec4c52f1c872
    // 0x4b9bd8733ac762197ab971ecbdbe733dd2807289
    // 0x8888540c19eb5cead2346600b3316149ed153db9
    // 0x5499d7042279fd1947701e676308d821264552a8
    // 0x13afae683fe19915a419d8605f95a77765e144bc
    // 0xc0410a2f95ff5e1738b023b8ea2fa5d194c61d01
    // 0x3465af8258d2e7c1c33367117c86f3046783f021
    // 0xdf67e81313b2826f8d698614ebabe9d11709ba7d

    // galaxy address

    // category: 0xe94fa3040d20a01a1b8f42de7c430a11c27e2524
    // code
    // Galaxy node 9 Num
    // 0xb379d32dc006dab39b6374ba9ca728b0f67ce52d
    // 0xe0ec3802c21034f645eaf1dde39ed72381b6faaa
    // 0x19c7decfe4bf58bf355f8b43e4a13d801a263c36
    // 0x845fafcd631a6c9766ebb242b0f5e44b40223d53
    // 0x91916e3393d39e883008d7d193d3b7045ec3cb8e
    // 0xd0ddfadf751539a9e99b8b49c741126ceeb23cad
    // 0xdfdd19f11bc9a0cd9758cb111cd443c6aa23dd21
    // 0xe0fcbabceae3acc23f4379339c31e44158e9486e
    // 0xd882a464856701f85f0ae90ffa6e9c576aadc5e4
    // 0xa51c1691db341435b86e006110d38878f129d870

};
