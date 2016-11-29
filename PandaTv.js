// ==UserScript==
// @name         熊猫TV
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://www.panda.tv/*
// @grant        none
// ==/UserScript==

(function () {
    var chatRooms = document.getElementsByClassName("room-chat-box");
    for (i = 0; i < chatRooms.length; i++) {
        var chatRoom = chatRooms[i];
        chatRoom.style.display = "none";
    }
})();