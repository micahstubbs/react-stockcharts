webpackJsonp([0],{0:function(t,e,a){"use strict";var o=a(1),n=a(2);a(32),a(30);var c=a(45);document.getElementById("content").innerHTML=c;var r=n.time.format("%Y-%m-%d").parse;n.tsv("data/data.tsv",function(t,e){e.forEach(function(t){t.date=new Date(r(t.date).getTime()),t.open=+t.open,t.high=+t.high,t.low=+t.low,t.close=+t.close,t.volume=+t.volume});var n=a(15).init(e);o.render(o.createElement(n,null),document.getElementById("area"))})},45:function(t){t.exports='<h1>React Stockcharts</h1><p>Highly customizable stock charts built with <a href="http://facebook.github.io/react/">React JS</a> and <a href="http://d3js.org/">d3</a></p>'}});
//# sourceMappingURL=react-stockcharts-home.js.map