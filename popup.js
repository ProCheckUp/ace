// Copyright 2019 ProCheckUp

'use strict';

let jstxt = document.getElementById('javascripttxt');
let runjs = document.getElementById('runjs');



runjs.onclick = function(element) {
	console.log('runjs called');
	chrome.tabs.query({}, function (tabs) {
            for (var i = 0; i < tabs.length; i++) {
                chrome.tabs.executeScript(tabs[i].id, {code: jstxt.value});
            }
        }
    );
};

