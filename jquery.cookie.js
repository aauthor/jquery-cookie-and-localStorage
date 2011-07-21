/**
 * jQuery Cookie plugin
 *
 * Copyright (c) 2010 Klaus Hartl (stilbuero.de)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 */
(function( global, jQuery ) {
	jQuery.cookie = function( key, value, options ) {

		var days, time, result, decode;
		// key and at least value given, set cookie...
		if ( arguments.length > 1 && jQuery.type(value) !== "object" ) {
			options = jQuery.extend({}, options);

			if ( value == null ) {
				options.expires = -1;
			}

			if ( options.expires && jQuery.type(options.expires) === "number" ) {

				days = options.expires;
				time = options.expires = new Date();
				time.setDate( time.getDate() + days );
			}

			value = String(value);

			return (document.cookie = [
				encodeURIComponent(key), "=",
				options.raw ? value : encodeURIComponent(value),
				// use expires attribute, max-age is not supported by IE
				options.expires ? "; expires=" + options.expires.toUTCString() : "",
				options.path ? "; path=" + options.path : "",
				options.domain ? "; domain=" + options.domain : "",
				options.secure ? "; secure" : ""
			].join(""));
		}

		// key and possibly options given, get cookie...
		options = value || {};
		decode = options.raw ? function(s) { return s; } : decodeURIComponent;

		return (result = new RegExp("(?:^|; )" + encodeURIComponent(key) + "=([^;]*)").exec(document.cookie)) ? decode(result[1]) : null;
	};
})( this, this.jQuery );
