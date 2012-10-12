# Tab Override jQuery Plugin

This plugin makes it easy to use [Tab Override](https://github.com/wjbryant/taboverride)
with jQuery by mapping the Tab Override API to jQuery methods. Code
documentation is available at
[wjbryant.github.com/jquery.taboverride/](http://wjbryant.github.com/jquery.taboverride/ "Tab Override jQuery Plugin Code Documentation").

## Dependencies

The latest version of the plugin requires:

* [jQuery](http://jquery.com/) v1.7.0+
* [Tab Override](https://github.com/wjbryant/taboverride) v3.0.0+

**Important:** The `jquery.taboverride.js` file no longer includes the taboverride
core dependency. The [`taboverride.js`](https://github.com/wjbryant/taboverride/downloads "Download Tab Override")
file must be included in the page before `jquery.taboverride.js`. Alternatively,
the files may be concatenated together.

### Bower

This plugin is registered as `jquery.taboverride` in the global [Bower](http://twitter.github.com/bower/)
registry. Install Bower via [npm](https://npmjs.org/doc/README.html) and then
run this command from the root directory of your project to install the plugin:

```
bower install jquery.taboverride
```

This will download the Tab Override jQuery plugin and all of its dependencies
into a `components` directory in your project.

### AMD

This plugin is [AMD](https://github.com/amdjs/amdjs-api/wiki/AMD) compatible and
can be loaded using a script loader such as [RequireJS](http://requirejs.org/).
It is defined as a module named `jquery.taboverride`. The script loader will
automatically load all available dependencies when `jquery.taboverride` is
required.

#### Optimization

The plugin is defined as a named module to allow for easy concatenation with the
`taboverride` core module. Using the RequireJS optimization tool,
[r.js](https://github.com/jrburke/r.js), is not strictly necessary in this case,
but may still be used like so:

```
r.js -o name=jquery.taboverride out=jquery.taboverride.combined.min.js paths.jquery=empty:
```

*Note: The above command assumes both files are in the same directory. On Windows,
you may have to use `r.js.cmd` instead.*

## Usage

The jQuery plugin is simply a wrapper for the Tab Override public API. It can be
used as follows:

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

### Get/Set Auto Indent

```javascript
// get the current auto indent setting
var autoIndentEnabled = $.fn.tabOverride.autoIndent();
```

```javascript
// enable auto indent
$.fn.tabOverride.autoIndent(true);

// disable auto indent (default)
$.fn.tabOverride.autoIndent(false);
```

### Additional Notes

When used as setters, the settings methods can be chained together:

```javascript
// set up Tab Override
$.fn.tabOverride.tabSize(4).autoIndent(true);
```

## License

MIT license - http://opensource.org/licenses/mit