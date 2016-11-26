// ==UserScript==
// @name         B站风暴
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       沐青衣
// @match        http://live.bilibili.com/*
// @grant        none
// ==/UserScript==

(function () {
    //'use strict';
    var EventUtil = {
        addHandler: function (element, type, handler) {
            if (element.addEventListener) {
                element.addEventListener(type, handler, false);
            } else if (element.attachEvent) {
                element.attachEvent("on" + type, handler);
            } else {
                element["on" + type] = handler;
            }
        },
        removeHandler: function (element, type, handler) {
            if (element.removeEventListener) {
                element.removeEventListener(type, handler, false);
            } else if (element.detachEvent) {
                element.detachEvent("on" + type, handler);
            } else {
                element["on" + type] = null;
            }
        }
    };

    var container = document.getElementById("player-container");
    var btnSend = document.getElementById("danmu-send-btn");
    var stormNode = null;

    if (container !== null) {
        console.log("player-container已经就绪");

        EventUtil.addHandler(container, "DOMNodeInserted", function (event) {
            stormNode = event.target;
            if (stormNode.id === "beat-storm-action") {
                stormNode.focus();
                stormNode.click();                
                btnSend.click();
            }
        });

        for (i = 0; i < container.childElementCount; i++) {
            var child = container.children[i];
            if (child.id === "beat-storm-action") {
                child.focus();
                child.click();                
                btnSend.click();
            }
        }

    } else {
        console.log("player-container还未就绪");
    }

})();