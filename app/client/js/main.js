import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';


// import '../templates/dashboard.html';
import '../templates/overview.html';
import '../templates/login.html';
import '../templates/reports.html';
import '../templates/main.html';
import '../templates/topbar.html';
import '../templates/slider.html';
import '../templates/footer.html';
import '../templates/contact.html';
import '../templates/testCallContract.html';

import '../../lib/routes/Routes';
import '../../lib/EthereumConnector';
import '../../lib/EthereumContracts';
// import '../templates/dashboard';
import '../templates/overview';
import '../templates/login';
import '../templates/Home/home';
import '../templates/loading/loading';
import '../templates/User/feedback/feedback';
import '../templates/Supplier/CategoryItem/categoryItem';
import '../templates/Supplier/Supplier/supplier';
import '../templates/reports';
import './TestCallContract';
import '../js/plugins';

import '../templates/Supplier/NewProduct/product';
import '../templates/ExpiredProduct/expiredProduct';
import '../templates/Supplier/NewProduct/newProduct';
import '../templates/Supplier/Category/category';
import '../../lib/EthereumConnector';
import '../js/jqueryqrcode.min';


/*

Template 2089 Meteor

http://www.tooplate.com/view/2089-meteor

*/

jQuery(document).ready(function($) {

    'use strict';


    $('.counter').each(function() {
        var $this = $(this),
            countTo = $this.attr('data-count');

        $({ countNum: $this.text()}).animate({
                countNum: countTo
            },

            {

                duration: 8000,
                easing:'linear',
                step: function() {
                    $this.text(Math.floor(this.countNum));
                },
                complete: function() {
                    $this.text(this.countNum);
                    //alert('finished');
                }

            });

    });



    $(".b1").click(function () {
        $(".pop").fadeIn(300);

    });

    $(".b2").click(function () {
        $(".pop2").fadeIn(300);

    });

    $(".b3").click(function () {
        $(".pop3").fadeIn(300);

    });

    $(".pop > span, .pop").click(function () {
        $(".pop").fadeOut(300);
    });

    $(".pop2 > span, .pop2").click(function () {
        $(".pop2").fadeOut(300);
    });

    $(".pop3 > span, .pop3").click(function () {
        $(".pop3").fadeOut(300);
    });


    $(window).on("scroll", function() {
        if($(window).scrollTop() > 100) {
            $(".header").addClass("active");
        } else {
            //remove the background property so it comes transparent again (defined in your css)
            $(".header").removeClass("active");
        }
    });


    /************** Mixitup (Filter Projects) *********************/
    // $('.projects-holder').mixitup({
    //     effects: ['fade','grayscale'],
    //     easing: 'snap',
    //     transitionSpeed: 400
    // });

});