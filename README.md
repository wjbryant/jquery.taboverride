# Tab Override jQuery Plugin

This plugin makes it easy to use [Tab Override](https://github.com/wjbryant/taboverride "Tab Override")
with jQuery by providing jQuery methods for the Tab Override API. Code
documentation is available at
[wjbryant.github.com/jquery.taboverride/](http://wjbryant.github.com/jquery.taboverride/ "Tab Override jQuery Plugin Documentation").

## Dependencies

The Tab Override jQuery plugin requires jQuery version 1.7.0 or newer and
[Tab Override](https://github.com/wjbryant/taboverride "Tab Override")
version 2.1.0 or newer.

**Important:** The `jquery.taboverride.js` file no longer includes the taboverride
core dependency. The `taboverride.js` file must be included in the page before
`jquery.taboverride.js`. Alternatively, the files may be concatenated together.

### Bower

This plugin is registered as `jquery.taboverride` in the global [Bower](http://twitter.github.com/bower/)
registry. Install Bower via NPM and then run this command from the root directory
of your project to install `jquery.taboverride`:

```
bower install jquery.taboverride
```

This will download the `jquery.taboverride` plugin and all of its dependencies
(`jquery` and `taboverride`) into a `components` directory in your project.

### AMD

This plugin is AMD compatible and can be loaded using a script loader such as
[RequireJS](http://requirejs.org/). This is convenient since it will automatically
load the taboverride core dependency for you.

#### Optimization

The plugin is defined as a named module to allow for easy concatenation with the
taboverride core module. Using the RequireJS optimization tool, [r.js](https://github.com/jrburke/r.js),
is not strictly necessary in this case, but may still be used like so:

```
r.js -o name=jquery.taboverride out=jquery.taboverride.all.min.js paths.jquery=empty:
```

*Note: The above command assumes both files are in the same directory. On Windows,
you may have to use `r.js.cmd` instead.*

## Usage

The jQuery plugin is simply a wrapper for the Tab Override API with the addition
of a method to easily enable or disable the plugin for certain elements.

### Enable/Disable Tab Override

```javascript
// enable Tab Override by calling tabOverride() with no arguments
$('textarea').tabOverride();

// or any truthy argument
$('textarea').tabOverride(true);
```

```javascript
// disable Tab Override using any falsy argument
$('textarea').tabOverride(false);
```

### Get/Set Tab Size

```javascript
// get the current tab size (0 represents the tab character)
var tabSize = $.fn.tabOverride.tabSize();
```

```javascript
// set the tab size to the tab character (default)
$.fn.tabOverride.tabSize(0);

// set the tab size to 4 spaces
$.fn.tabOverride.tabSize(4);
```

### Enable/Disable Auto Indent

```javascript
// enable auto indent
$.fn.tabOverride.autoIndent(true);
```

```javascript
// disable auto indent (default)
$.fn.tabOverride.autoIndent(false);
```

### Additional Notes

Calls to the settings functions can be chained together:

```javascript
// set up Tab Override
$.fn.tabOverride.tabSize(4).autoIndent(true);
```

## License

MIT license - http://opensource.org/licenses/mit