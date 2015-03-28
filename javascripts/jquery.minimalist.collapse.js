(function($) {
  $.fn.mcollapse = function(options) {
        var delayDuration = 0;

        // This is the easiest way to have default options.
        var settings = $.extend({
            // These are the defaults.
            shadowEffect: true,
            contentFocus: true,
            delay: 'walker'
        }, options );

        switch (settings.delay) {
            case "runner":
                delayDuration = 100;
                break;

            case "faster":
                delayDuration = 200;
                break;

            case "walker":
                delayDuration = 300;
                break;

            case "slowly":
                delayDuration = 400;
                break;

            default:
                delayDuration = 200;
        }

      if(settings.shadowEffect == true) {
          this.find('.m-result').addClass('shadow-effect');
      }
      if(settings.contentFocus == true) {
          this.find('.m-result').addClass('content-focus');
      }

    var getPlugin = $('[data-collapse=m-collapse]');

    getPlugin.click(function(e) {
    var getTarget = $(this).data('target');
    var getResult = $(getTarget).parent();

        if(getResult.hasClass('active')) {
            $(getTarget+':visible').slideUp(delayDuration);
            getResult.removeClass('active');
        } else {
            $(getTarget).not(':visible').slideDown(delayDuration);
            getResult.addClass('active');
        }

      e.preventDefault();
    });
    return this;
  };
}(jQuery));