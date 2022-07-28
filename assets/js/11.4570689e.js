(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{425:function(t,s,a){"use strict";a.r(s);var e=a(62),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"⚙️-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#⚙️-configuration"}},[t._v("#")]),t._v(" ⚙️ Configuration")]),t._v(" "),a("h2",{attrs:{id:"file-based"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#file-based"}},[t._v("#")]),t._v(" File-based")]),t._v(" "),a("p",[t._v("Configure XR Debug by creating a file named "),a("code",[t._v("xr.php")]),t._v(" in your project root directory with the following options:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Property")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Effect")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("enable")]),t._v(" "),a("td",[t._v("bool")]),t._v(" "),a("td",[t._v("Controls sending messages to the server")])]),t._v(" "),a("tr",[a("td",[t._v("host")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("The host where XR Debug server is running")])]),t._v(" "),a("tr",[a("td",[t._v("port")]),t._v(" "),a("td",[t._v("int")]),t._v(" "),a("td",[t._v("The Port to connect to the "),a("code",[t._v("host")])])])])]),t._v(" "),a("p",[t._v("The following example is a "),a("code",[t._v("xr.php")]),t._v(" file with default settings.")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token php language-php"}},[a("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'enable'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'host'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'localhost'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'port'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("27420")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])]),a("blockquote",[a("p",[t._v("We recommend adding "),a("code",[t._v("xr.php")]),t._v(" to your "),a("code",[t._v(".gitignore")]),t._v(".")])]),t._v(" "),a("h2",{attrs:{id:"code-based"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#code-based"}},[t._v("#")]),t._v(" Code-based")]),t._v(" "),a("p",[t._v("If you want to handle XR Debug settings somewhere within your existing application logic and not depend on the "),a("code",[t._v("xr.php")]),t._v(" file:")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[t._v("Chevere"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Xr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Xr")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[t._v("Chevere"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Xr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("XrInstance")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$host")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'localhost'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("XrInstance")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Xr")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token argument-name"}},[t._v("enable")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$enable")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token argument-name"}},[t._v("host")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$host")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token argument-name"}},[t._v("port")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$port")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);