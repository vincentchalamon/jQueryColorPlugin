/**
 * jQuery color Plugin
 *
 * Version 1.0, September 19th 2013, by Vincent Chalamon <vincent@ylly.fr>
 *
 * Usage :
 *      $.color.rgbToHex(0, 51, 255);
 *      $.color.hexToRgb('#0033FF');
 *      $.color.hexToRgb('#03F');
 *      $.color.getStepColor('#03F', '#6709FD', 0.2);
 */
(function($) {

    $.color = {
        rgbToHex: function (r, g, b) {
            r = r.toString(16);
            g = g.toString(16);
            b = b.toString(16);

            return '#' + (r.length == 1 ? '0' + r : r) + (g.length == 1 ? '0' + g : g) + (b.length == 1 ? '0' + b : b);
        },
        hexToRgb: function (hex) {
            var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function(m, r, g, b) {
                return r + r + g + g + b + b;
            }));

            return result ? {
                r: parseInt(result[1], 16),
                g: parseInt(result[2], 16),
                b: parseInt(result[3], 16)
            } : null;
        },
        getStepColor: function (start, end, ratio) {
            var rgb = $.map($.color.hexToRgb(start), function (color, i) {
                return (color + ratio * ($.color.hexToRgb(end)[i] - color)) & 255;
            });

            return $.color.rgbToHex(rgb[0], rgb[1], rgb[2]);
        }
    }

})(jQuery);