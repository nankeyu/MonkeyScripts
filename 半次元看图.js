// ==UserScript==
// @name         半次元看图
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       沐青衣
// @match        http://bcy.net/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var items = document.getElementsByClassName("detail_std detail_clickable");
    for (var i = 0; i < items.length; i++) {

        var img=items[i];
        var originUrl = img.getAttribute("src");
        var url=originUrl.replace("/w650","");

        var downNode=document.createElement("a");
        downNode.target="_blank";
        downNode.href=url;
        downNode.innerText="查看原图";

        img.parentNode.parentNode.appendChild(downNode);
    }
})()