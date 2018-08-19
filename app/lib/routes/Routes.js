const CatManagement = require('../Ethereum/CatgegoryManagementBlockchain');
const ProductManagement = require('../Ethereum/ProductManagementBlockchain');
const ethContract = require('../EthereumContracts');
const sha256 = require('sha256');

Router.route('/index', function () {
    this.layout('application_layout');
    this.render('TopBar', {to: 'menu'});
    this.render('home');
    this.render('Footer', {to: 'footer'});
});

Router.route('/new-product', function () {
    this.layout('application_layout');
    this.render('TopBar', {to: 'menu'});
    this.render('product');
    this.render('Footer', {to: 'footer'});
});


Router.route('/new-product/:categoryAddress', function () {
    _router = this;
    this.layout('application_layout');
    var categoryAddress = this.params.categoryAddress;
    catManagement = new CatManagement(ethContract.categoryABI)
    catManagement.getCategoryInfo(categoryAddress, function(result){
        
        _router.render('TopBar', {to: 'menu'});
        
        _router.render('Footer', {to: 'footer'});
        _router.render('new_product', {
            data: {
                categoryName: result[0],
                imageUrl: result[1],
                categoryDescription: result[2],
                sumRating: result[3],
                nRating: result[4],
                categoryAddress: categoryAddress
            }
        });
    });
});

Router.route('/supplier/:supplierAddress', function () {
    marvel = {
        url: 'https://image.ibb.co/fXiW2e/marvel_absolut_02.jpg',
        name: 'Nước siêu năng lực Marvel',
        description: 'Đạt tiêu chuẩn ISO 9001:2000',
        address: ''
    }

    vodka = {
        url: 'http://img.21food.com/20110609/product/1305260353125.jpg',
        name: 'Vodka cá sấu',
        description: 'Hàng nhập khẩu chất lượng cao',
        address: ''
    }

    this.layout('application_layout');
    this.render('TopBar', {to: 'menu'});
    this.render('supplier', {
        data: {categories: [marvel, vodka]}
    });
    this.render('Footer', {to: 'footer'});
});

Router.route('/expired-product', function(){
    // this.layout('application_layout');
    this.render('expired_product');
})

Router.route('/feedback/category/:categoryAddress/product/:productAddress/code/:code', function () {
    this.layout('application_layout');
    // this.render('loading');
    _router = this;
    var categoryAddress = this.params.categoryAddress;
    var productAddress = this.params.productAddress;
    var code = this.params.code;
    var productManagement = new ProductManagement(ethContract.productABI, ethContract.productBytecode);
    productManagement.getIsRated(productAddress, function(receipt){
        if(receipt != false){
            // TODO: di toi trang hang gia
            Router.go('/expired-product');
        }
    });

    productManagement.getHash(productAddress, function(receipt){
        console.log('code im params');
        console.log(code);
        var hash = '0x' + sha256(code);
        console.log('hash receive from blockchain');
        console.log(hash);
        console.log(receipt);
        if(hash != receipt) {
            Router.go('/expired-product');
        }
    });


    catManagement = new CatManagement(ethContract.categoryABI)
    catManagement.getCategoryInfo(categoryAddress, function(result){
        
        _router.render('TopBar', {to: 'menu'});
        
        _router.render('Footer', {to: 'footer'});
        _router.render('feedback', {
            data: {
                categoryName: result[0],
                imageUrl: result[1],
                categoryDescription: result[2],
                sumRating: result[3],
                nRating: result[4],
                code: code,
                productAddress: productAddress,
                categoryAddress: categoryAddress
            }
        });
    });
    // console.log(categoryAddress);
    // console.log(productAddress);
    // console.log(code);
});

// Router.route('/feedback', function () {
//     this.layout('application_layout');
//     this.render('TopBar', {to: 'menu'});
//     // var categoryAddress = this.params.categoryAddress;
//     // var productAddress = this.params.productAddress;
//     // var code = this.params.code;
//     // console.log(categoryAddress);
//     // console.log(productAddress);
//     // console.log(code);
//     this.render('feedback');
//     this.render('Footer', {to: 'footer'});
// });

// Router.route('/index', function () {
//     // use the template named ApplicationLayout for our layout
//     this.layout('main_layout');

//     // render the Post template into the "main" region
//     // {{> yield}}
//     // this.render('tobba');

//     // render the PostAside template into the yield region named "aside"
//     // {{> yield "aside"}}
    
//     this.render('TopBar', {to: 'topBar'});
//     this.render('Slider', {to: 'slider'});
//     this.render('Footer', {to: 'footer'});
//     this.render('Contact', {to: 'contact'});
//     this.render("TestCallContract",{to: 'testCallContract'})
//     this.render("Product",{to: 'product'})

//     // render the PostFooter template into the yield region named "footer"
//     // {{> yield "footer"}}
//     // this.render('PostFooter', {to: 'footer'});
// });


// Router.configure({
//     layoutTemplate: 'main_layout'
// })

// HomeController = RouteController.extend({
//     onBeforeAction: function () {
//         this.redirect('/index');
//     }
// });

// LoginController = RouteController.extend({
//     onBeforeAction: function () {
//         this.next();
//     },
//     onAfterAction: function(){

//     }
// });

// OverviewController = RouteController.extend({
//     onBeforeAction: function () {
//         this.next();
//     }
// });

// ReportsController = RouteController.extend({
//     onBeforeAction: function () {
//         this.next();
//     }
// });

// Router.route('home', {
//     path: '/'
// });
//
// Router.route('dashboard', {
//     path: '/dashboard'
// });
//
// Router.route('overview', {
//     layoutTemplate: 'dashboard',
//     path: '/dashboard/overview'
// });
//
// Router.route('reports', {
//     layoutTemplate: 'dashboard',
//     path: '/dashboard/reports'
// });
//
// Router.route('login', {
//     path: '/login'
// });

// Router.map(function(){
//     // log in
//     this.route('make-invoice', {
//         path: '/make-invoice',
//         template: 'make_invoice'
//     });
//
//     // payment
//     this.route('payment', {
//         path: '/payment',
//         template: 'user_payment'
//     });
//
//     // // profile
//     // this.route('profile', {
//     //     path: '/profile',
//     //     template: 'profile'
//     // });
//
//     // // modern slavery score
//     // this.route('slavery', {
//     //     path: '/slavery',
//     //     template: 'modern_slavery'
//     // });
//
//     // // modern slavery calculation
//     // this.route('slavery-cal', {
//     //     path: '/modern-slavery-cal',
//     //     template: 'modern_slavery_cal'
//     // });
//
//     // // ser value
//     // this.route('ser-value', {
//     //     path: '/ser-value',
//     //     template: 'ser_value'
//     // });
//
//     // // ser value calculation
//     // this.route('ser-value-cal', {
//     //     path: '/ser-value-cal',
//     //     template: 'ser_value_cal'
//     // });
//
//     // // personal value score
//     // this.route('personalvalue', {
//     //     path: '/personal-value',
//     //     template: 'personal_value'
//     // });
//
//     // // personal value calculation
//     // this.route('personalvaluecal', {
//     //     path: '/personal-value-cal',
//     //     template: 'personal_value_cal'
//     // });
//
//     // // home
//     // this.route('home', {
//     //     path: '/',
//     //     template: 'home'
//     // });
// });