// @fileOverview: main.js @ Tue 13 Nov 2012 10:42:42 PM PST 执行测试js引擎多多余逗号的处理
// @author: Ice_G

/*jshint browser: true, nomen: true, indent: 4, maxlen: 80, strict: true, curly: true */
/*global define: true, $: true, _: true */

// DEBUG MODE
/*jshint devel: true */

// @description: redundant comma in diff script engine
//      -- js中多余的逗号在不同浏览器下面的解析情况
(function () {
    'use strict';
    
    // 逗号是多个属性值之间的分隔符

    // JSON -- default
    //      -- 全浏览器支持
    var json_defaul = {
        id: 'aa',
        name: 'aaName'
    };

    //  JSON -- special
    //       -- IE6,7会报错，IE8+,other都支持
    var json_special = {
        id: 'a',
        name: 'a.name',
    };

    // ARRAY -- default
    var string_default = [1, 2, 3];

    // ARRAY -- special
    //       -- 浏览器都支持，但是解析不一样
    var arr = [1, 2, 3,];
    for (var i = 0; i < arr.length; i++) {
        alert(arr[i]);
    }
    //  output: 1, 2, 3 , undefined @ IE
    //          1, 2, 3 @ other broswer

    var arr = [1, 2, , 3,];
    for (var i = 0; i < arr.length; i++) {
        alert(arr[i]);
    }
    //  output: 1, 2, undefined, 3 @ all broswer

    //  根据对数据的多余逗号解析处理不同
    //  可以判断是否为IE浏览器(目前世界上最短的ie判断方法)
    //  更多浏览器判断可见JS/broswer
    var ie = !-[1,];
    alert(ie);

}());
