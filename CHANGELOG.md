# Tab Override jQuery Plugin Changelog

## 4.0.0 (2013-08-27)
* Use `handlers` namespace
* Added hooks for extension system: `setDelegated`, `addDelegatedListeners`, `removeDelegatedListeners`
* Added `utils` namespace with `addDelegatedListeners()` and `removeDelegatedListeners()` methods

## 3.2.4 (2013-03-12)
* Added CommonJS module support
* Updated build process
  * Use JSHint for all js files
  * Generate API documentation with JSDoc 3

## 3.2.3 (2013-01-21)
* Improved description and dependencies in manifest file

## 3.2.2 (2013-01-19)
* Updated manifest file and registered on plugins.jquery.com

## 3.2.1 (2013-01-17)
* Register as an anonymous AMD module instead of a named one

## 3.2.0 (2012-12-12)
* Added `tabKey()` and `untabKey()`

## 3.1.0 (2012-11-12)
* Added event delegation support
* Added an example for delegated events

## 3.0.0 (2012-10-12)
* Removed `getTabSize()` and `setTabSize()` - use `tabSize()` instead
* Updated the `tabOverride()` method for Tab Override v3.0.0 compatibility

## 2.1.0 (2012-10-02)
* Added AMD support
* Added component.json for Bower support (registered as `jquery.taboverride`)
* Separated core and jQuery plugin into individual projects
* `jquery.taboverride.js` no longer includes the core dependency
(see [README](https://github.com/wjbryant/jquery.taboverride/blob/master/README.md#dependencies))
* Made style changes to better conform with the jQuery Core Style Guidelines

## 2.0.0 (2012-09-14)
* Separated the Tab Override core and jQuery code - 
  this allows easier integration with other JS libraries
* Changed `autoIndent` to a `function` -
  ex: `$.fn.tabOverride.autoIndent(true);`
* `autoIndent()` and `tabSize()` now return `$.fn.tabOverride` when used as setters
* Deprecated `getTabSize()` and `setTabSize()` - use `tabSize()` instead
* Bumped jQuery requirement from v1.3+ to v1.7+
* Created a build script - output is in the `build` directory

## 1.1.3 (2012-08-18)
* Minor code improvement (make sure `selectionStart` is a `number`) (core)
* Improved documentation formatting

## 1.1.2 (2012-07-14)
* Minor file size optimization (core)

## 1.1.1 (2012-06-14)
* Added `tabSize()` method to get and set tab size

## 1.1.0 (2011-06-02)
* Added auto indent feature
* Fixed some IE edge cases (core)
* Other minor improvements

## 1.0.0 (2010-05-18)
* Initial release