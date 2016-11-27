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

    if (container !== null) {
        console.log("player-container已经就绪");

        EventUtil.addHandler(container, "DOMNodeInserted", function (event) {
            BeatStorm(event.target);
        });

        for (i = 0; i < container.childElementCount; i++) {
            var child = container.children[i];
            BeatStorm(child);
        }

    } else {
        console.log("player-container还未就绪");
    }

    function BeatStorm(stormElement) {
        if (stormElement.id === "beat-storm-action") {
            setTimeout(function () {
                stormElement.click();
                setTimeout(function () {
                    var btnSend = document.getElementById("danmu-send-btn");
                    btnSend.click();
                }, 100);
            }, 100);
        }
    }

    var chatList = document.getElementById("chat-msg-list");
    EventUtil.addHandler(chatList, "DOMNodeInserted", function (event) {
        var chatNode=event.target;
        if(chatNode.className===""){
            chatNode.style.display="none";
        }
    });

})();