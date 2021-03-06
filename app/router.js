import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('aluminium');
  this.route('aluminium/windows', {path: '/aluminium/windows'});
  this.route('aluminium/doors', {path: '/aluminium/doors'});
  this.route('aluminium/sliding-windows' , {path: '/aluminium/sliding-windows'});
  this.route('wood');
  this.route('wood/doors', {path: 'wood/doors'});
  this.route('wood/doors/front-doors', {path: 'wood/doors/front-doors'});
  this.route('wood/doors/interior-doors', {path: 'wood/doors/interior-doors'});
  this.route('wood/sliding-windows', {path: 'wood/sliding-windows'});
  this.route('wood/windows', {path: 'wood/windows'});
  this.route('curtain-wall');
  this.route('composite-panel');
  this.route('projects');
  this.route('about-us');
  this.route('m-sora');
  this.route('alucobond');
  this.route('windows/blk', {path: '/aluminium/windows/blk'});
  this.route('windows/brokelmann', {path: '/aluminium/windows/brokelmann'});
  this.route('doors/blk' , {path: '/aluminium/doors/blk'});
  this.route('doors/brokelmann' , {path: '/aluminium/doors/brokelmann'});
  this.route('sliding-windows/blk' , {path: '/aluminium/sliding-windows/blk'});
  this.route('blk-brand', {path: '/blk'});
  this.route('blk/windows', {path: '/blk/windows'});
  this.route('blk/doors', {path: '/blk/doors'});
  this.route('blk/sliding-windows', {path: '/blk/sliding-windows'});

  this.route('brokelmann', {path: '/brokelmann'});
  this.route('brokelmann/windows', {path: '/brokelmann/windows'});
  this.route('brokelmann/doors', {path: '/brokelmann/doors'});
  this.route('brokelmann/curtain-wall', {path: '/brokelmann/curtain-wall'});

});

export default Router;
$(function () {
    $('.ea-top').click(function () {
        TweenMax.to(window, 1, { scrollTo: 0 }, Power2.easeOut);
    });



    $('[data-nav-toggle]').click(function () {
        $('#ea-nav-menu').toggleClass('in');

        if ($('#ea-nav-menu').hasClass('in')) {
            setCookie("menustate", "in", 1);
        }
        else {
            setCookie("menustate", "", 1);
        }
    });


    $('body').click(function (e) {
        if ($('#ea-nav-menu').hasClass('in') && !$.contains(document.getElementById('ea-nav-menu'), e.target) && $(e.target).attr("id") != "ea-nav-menu" && !$(e.target).hasClass('ea-menu-toggle') && !$(e.target).parent().hasClass('ea-menu-toggle'))
            $('#ea-nav-menu').removeClass('in');
    });

//     $('[data-video]').click(function () {
//         var videoUrl = $(this).data('video');
//
//         if (videoUrl.length > 0) {
//             var modalBody = document.createElement('div');
//             modalBody.className = "modal-body ea-video-modal";
//             var embedResponsive = document.createElement('div');
//             embedResponsive.className = "embed-responsive embed-responsive-16by9";
//             var embedResponsiveItem = document.createElement('iframe');
//             embedResponsiveItem.className = "embed-responsive-item";
//             embedResponsiveItem.src = videoUrl;
//
//             embedResponsive.appendChild(embedResponsiveItem);
//             modalBody.appendChild(embedResponsive);
//
//             $('#ea-modal .modal-content').append($(modalBody));
//             $('#ea-modal').modal('show');
//         }
//     });

    // $('#ea-modal').on('hidden.bs.modal', function () {
    //     $('#ea-modal .modal-content').empty();
    // });


//
//     $('.ea-resource-hub-select select').on('change', function () {
//         $(this).closest('form').submit();
//     });
//
//     $('.copyright-hover').mouseover(function () {
//         $('.copyright-message', $(this)).show();
//     });
//
//     $('.copyright-hover').mouseout(function () {
//         $('.copyright-message', $(this)).hide();
//     });
//
//     $('.ea-tweet-this').each(function (index, value) {
//         var parent = $(value).closest('.ea-tweet-section');
//         var id = parent.attr("id");
//
//         var a = $('a', $(value));
//         var href = a.attr("href");
//         href += "%23" + id;
//         a.attr("href", href);
//     });
//
    // $('header .ea-search-icon').click(function () {
    //     var searchBar = $('#ea-header-search-bar');
    //     searchBar.toggleClass('in');
    // });
//
//     $('.tracked-download').click(function (event) {
//         var link = $(this).closest('a');
//
//         if (link.length > 0) {
//             ga('send', {
//                 hitType: 'event',
//                 eventCategory: 'Downloads',
//                 eventAction: 'Download',
//                 eventLabel: link[0].href
//             });
//         }
//     });
});
//
// function setCookie(cname, cvalue, exdays) {
//     var d = new Date();
//     d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
//     var expires = "expires=" + d.toUTCString();
//     document.cookie = cname + "=" + cvalue + "; " + expires + "; path=/";
// }
