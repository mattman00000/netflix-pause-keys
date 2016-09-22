// ==UserScript==
// @version            0.0.0.0
// @grant              none
// @match              *://www.netflix.com/watch*
// @connect            self
// @connect            *
// @run-at             document-end
// @name               netflix pause keys
// @description        add custom pause keys for netflix
// @author             Matthew James Burnham <mattman00000@gmail.com>
// @icon               ICON
// @icon64             ICON64
// @priority           9001
// @downloadURL        https://github.com/mattman00000/netflix-pause-keys/raw/master/netflix-pause-keys.user.js
// @updateURL          https://github.com/mattman00000/netflix-pause-keys/raw/master/netflix-pause-keys.user.js
// @supportURL         https://github.com/mattman00000/netflix-pause-keys/issues
// @homepageURL        https://github.com/mattman00000/userscripts
// @contributionURL    https://github.com/mattman00000/userscripts
// @namespace          https://github.com/mattman00000
// @license            MIT
// @copyright          2016+, Matthew James Burnham
// ==/UserScript==
/**
  The MIT License (MIT)

  Copyright © 2016 Matthew James Burnham

  Permission is hereby granted, free of charge, to any person obtaining a copy of
  this software and associated documentation files (the "Software"), to deal in
  the Software without restriction, including without limitation the rights to
  use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
  the Software, and to permit persons to whom the Software is furnished to do so,
  subject to the following conditions:

  The above copyright notice and this permission notice shall be included in all
  copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
  FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
  COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
  IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
  CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
**/
(function() {
	'use strict';
	//USERSCRIPT START
// F7 = 118
	// [Stop] = 178
	window.addEventListener("keydown",function(a)
	{
		console.debug("window keydown");
		console.debug(a);
		//TODO implement user mutable configs
		var stopKeys = [
			// "MediaStop",
			"F7",
			"F10"
		];
		if (stopKeys.includes(a.key))
		{
			var alertMsg = "Stop Key Pressed";
			var textBorder = 5;
			console.error("\r\n"+((("█".repeat(alertMsg.length+(textBorder*2))+"\r\n").repeat(2))+"█".repeat(textBorder)+alertMsg+"█".repeat(textBorder)+"\r\n"+(("█".repeat(alertMsg.length+(textBorder*2))+"\r\n").repeat(2)))+"\r\n");
			for (var i = 0; i < document.getElementsByTagName("video").length; i++)
			{
				document.getElementsByTagName("video")[i].pause();
			}
		}
	}
	);
	// var reps = 0;
	// var fuckYouTube = window.setInterval(function(){
		// reps++;
		// console.warn("fuckYouTube "+reps);
		// for (var i = 0; i < document.getElementsByTagName("video").length; i++)
		// {
			// document.getElementsByTagName("video")[i].pause();
		// }
		// if (reps >= 50)
		// {
			// window.clearInterval(fuckYouTube);
		// }
	// },100);
	//USERSCRIPT END
	//USERSCRIPT END
})();