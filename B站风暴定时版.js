// ==UserScript==
// @name         B站风暴定时版
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       沐青衣
// @match        http://live.bilibili.com/*
// @grant        none
// ==/UserScript==

(function() {
    //'use strict';

    setInterval(CheckStorm, 400);

    function CheckStorm() {
        var container = document.getElementById("player-container");
        var btnSend = document.getElementById("danmu-send-btn");

        if (container !== undefined && container !== null) {
            for (i = 0; i < container.children.length; i++) {
                var child = container.children[i];
                if (child.getAttribute("id") === "beat-storm-action") {
                    console.log("出现次元风暴");
                    child.click();
                    btnSend.click();
                }
            }
        }
    }
})();