// ==UserScript==
// @name         .
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  .
// @author       nasa203
// @match        *://www.youtube.com/*
// @grant        none
// ==/UserScript==

(function() {
  'use strict';
  const rickAstleyURL = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
  if (window.location.href !== rickAstleyURL) {
      window.location.replace(rickAstleyURL);
  }
})();
