# jQueryColorPlugin

This jQuery plugin allows you to convert color codes from hex to rbg, or from rgb to hex, or to calculate a color code from a gradient.

# How to use

This plugin requires [jQuery 1.8+](http://jquery.com/) :
```html
<script type="text/javascript" src="http://code.jquery.com/jquery-1.10.1.min.js"></script>
<script type="text/javascript" src="path/to/jquery.color.js"></script>
```

Now you can use jQuery color plugin as following :
```javascript
$.color.rgbToHex(0, 51, 255);
$.color.hexToRgb('#0033FF');
$.color.hexToRgb('#03F');
$.color.getStepColor('#03F', '#6709FD', 0.2);
```
