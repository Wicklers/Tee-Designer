jquery-ui-rotatable is a plugin for jQuery UI that works in a similar way to Draggable and Resizable, without being as full-featured (please fork and send me pull requests!). By default, it puts a small rotation icon in the bottom left of whatever element you want to make rotatable.

#### CDN
```html
<link rel="stylesheet" href="//cdn.jsdelivr.net/gh/godswearhats/jquery-ui-rotatable@1.1/jquery.ui.rotatable.css">
<script src="https://cdn.jsdelivr.net/gh/godswearhats/jquery-ui-rotatable@1.1/jquery.ui.rotatable.min.js"></script>
```

### Usage

Somewhere in your HTML ...

```html
<!-- prerequisites -->
<link rel="stylesheet" href="http://code.jquery.com/ui/1.10.3/themes/smoothness/jquery-ui.css">
<script src="http://code.jquery.com/jquery-1.11.3.js"></script>
<script src="http://code.jquery.com/ui/1.11.4/jquery-ui.js"></script>

<script src="jquery.ui.rotatable.js"></script>
<!-- this is small and will allow you to override look/feel of handle -->
<link rel="stylesheet" href="jquery.ui.rotatable.css">

<script type="text/javascript">
    $(document).ready(function() {
        var params = {
            // Callback fired on rotation start.
            start: function(event, ui) {
            },
            // Callback fired during rotation.
            rotate: function(event, ui) {
            },
            // Callback fired on rotation end.
            stop: function(event, ui) {
            },
            // Set the rotation center
            rotationCenterOffset: {
                top: 20,
                left: 20
            },
            transforms: {
                translate: '(50%, 50%)',
                scale: '(2)'
                //any other transforms
            }
        };
        $('#target').rotatable(params);
    });
</script>

<div id="target">Rotate me!</div>
```



Options that can be set when you call `.rotatable()` are:

* `angle`: __the starting rotation for the element (deprecated in favor of `radians` and `degrees`)__
* `degrees`: starting rotation in degrees (default 0)
* `handle`: url to a custom image for the handle
* `handleOffset`: offset in format `{top: 0, left: 0}` for where the handle should be placed
* `radians`: starting rotation in radians (default 0)
* `rotationCenterOffset`: offset in format `{top: 0, left: 0}` to the center of rotation
* `snap`: snaps to `step` in degrees (default: false)
* `step`: an angle in degrees that the rotation will snap to if the shift key is held (default 22.5&deg;)
* `start`, `stop`, `rotate`: callbacks when those events occur
* `transforms`: an object with css transforms you would like to apply to the rotatable element (except "rotate"). They will be applied on each rotation (default: NULL)
* `wheelRotate`: enable/disable mouse wheel to rotate element (default: true)

The start, rotate and stop callbacks provide the following in the ui argument of the callback:

* `element`: The jQuery element being rotated.
* `angle`: An object containing information about the rotation angle, with the following keys:
  * `start`: The angle at the beginning of the rotation.
  * `current`: The current angle of the rotation in radians.
  * `degrees`: The current angle of the rotation in degrees.
  * `stop`: The angle at the end of the rotation.

Note that you should define a height and width for anything that you make rotatable, as the rotation happens around the center point of the element, and when you don't define these things, it could look and feel a little a strange. Alternatively, specify the center of rotation as mentioned earlier.

You can also combine this plugin with the jQuery UI built-in `resizable()` and `draggable()`, although the latter works best when applied to a container with the rotatable inside it. See the Demo page for some examples.

You can disable/enable the rotation using `$('#target').rotatable('enable');` and `$('#target').rotatable('disable');`.

Hovering over an element and rotating the scroll wheel (or equivalent) will cause the element to rotate.

### Demo

A simple demo is in the source code, but can be visited [here](http://godswearhats.com/jquery-ui-rotatable/demo.html). Note that the minified version only gets updated at release time.

### Thanks

Many thanks to those of you who have reported issues and helped me diagnose and fix them! Also, thank you to all the contributors who have sent pull requests and put up with my laziness :-)

### License

Released under the [MIT license](http://jquery.org/license), like jQuery.
