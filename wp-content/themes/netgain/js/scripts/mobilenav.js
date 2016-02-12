//Hide Container if outside is clicked.
//jQuery(document).mouseup(function (e) {
jQuery(document).on('click' , function (e) {
  var container = jQuery(".mobile__nav--wrapper");

  if (!container.is(e.target) && container.has(e.target).length === 0) {
    jQuery('#nav-icon2, #mobile__nav').removeClass('open');
    jQuery('.mobile__site_title, #header__full_viewport, .page__main_content, .learn__more--background, footer').removeClass('shimmer');
    jQuery('#header__full_viewport, .page__main_content, .learn__more--background, footer').removeClass('pointer');
  }
});

//Hide Fixed nav bar while we're in the header region
function fixed_nav_hide() {
  var windowTop = jQuery(window).scrollTop();
  var headerHeight = jQuery('#header__full_viewport').height();

  if (windowTop < headerHeight) {
    jQuery('.mobile__nav--wrapper').addClass('nav-white');
  } else {
    jQuery('.mobile__nav--wrapper').removeClass('nav-white');
  }
}

function nav_colour() {
  var windowTop = jQuery(window).scrollTop();
  var headerHeight = jQuery('#header__full_viewport').height();
  var scrollPos = jQuery(".page__main_content").outerHeight() + jQuery('header').outerHeight();

  if (windowTop > headerHeight) {
      jQuery('#nav-icon2').addClass('colour');
      jQuery('#mobile__nav').addClass('colour-bg');
  } else {
      jQuery('#nav-icon2').removeClass('colour');
      jQuery('#mobile__nav').removeClass('colour-bg');
  }
}

function nav_uncolour() {
  var windowTop = jQuery(window).scrollTop();
  var headerHeight = jQuery('#header__full_viewport').height();
  var scrollPos = jQuery(".page__main_content").outerHeight() + jQuery('header').outerHeight();
  
  if (windowTop > scrollPos) {
    jQuery('#mobile__nav').removeClass('colour-bg');
    //jQuery('#nav-icon2').removeClass('colour');
  } else if (windowTop < scrollPos && windowTop > headerHeight) {
    jQuery('#mobile__nav').addClass('colour-bg');
    jQuery('#nav-icon2').addClass('colour');
  }
}

//Adding class of "Open" to the mobile nav to apply CSS styles.
jQuery(document).ready(function(){
  jQuery('#nav-icon2').click(function(){
    jQuery(this).toggleClass('open');
    jQuery('#mobile__nav').toggleClass('open');
    jQuery('#header__full_viewport, .page__main_content, .learn__more--background, footer').toggleClass('pointer');
    jQuery('.mobile__site_title, #header__full_viewport, .page__main_content, .learn__more--background, footer').toggleClass('shimmer');
  });
  fixed_nav_hide();
});

jQuery(window).scroll(function(){
  nav_colour();
  nav_uncolour();
  fixed_nav_hide();
});

jQuery(window).resize(function(){
  jQuery('.mobile__site_title, #header__full_viewport, .page__main_content, .learn__more--background, footer').removeClass('shimmer');
});
