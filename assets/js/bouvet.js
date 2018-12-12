(function ($) {
    Drupal.behaviors.unit = {
        attach: function (context, settings) {
          if(drupalSettings.unit !== undefined && drupalSettings.unit.search_phrase !== undefined) {
            var searchFilterListItem = $('<li class="facet-item"><a href="' + drupalSettings.unit.search_phrase + '">Alle ' + drupalSettings.unit.total_results + '</a></li>');
            searchFilterListItem.prependTo('.facets .item-list__links');
          }
        }
    }

  // Scroll to top
  $(window).scroll(function () {
    if ($(this).scrollTop() + $(window).height() > $(document).height() - 100) {
      $('.backtotop').fadeIn();
    }
    else {
      $('.backtotop').fadeOut();
    }
  });

  $('.backtotop').click(function () {
    $('html, body').animate({scrollTop: 0}, 800);
    return false;
  });

  $('.header__button--menu').click(function() {
    var mainMenuContainer = $('.main-menu__container');

    $(this).toggleClass("is-active");
    if($('.main-menu__container').is(":visible")) {
      $('.hamburger-text').text(Drupal.t('Menu'));
    } else {
      $('.hamburger-text').text(Drupal.t('Close menu'));
    }
    $('.main-menu__container').fadeToggle();

    return false;
  });


})(jQuery);
