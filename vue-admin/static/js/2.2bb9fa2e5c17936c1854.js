webpackJsonp([2],{931:function(e,a,s){function t(e){s(972)}var l=s(17)(s(951),s(991),t,null,null);e.exports=l.exports},935:function(e,a,s){"use strict";a.a={name:"panelBlurBgStyle",bind:function(e,a,s,t){console.log(e),console.log(a),console.log(s),console.log(t)}}},936:function(e,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var t=s(935);a.default={name:"vuePanel",directives:{panelBlurBgStyle:t.a},methods:{getBodyBgImageSizes:function(){var e=getComputedStyle(document.body,":before"),a=new Image;a.src=e.backgroundImage.replace(/url\((['"])?(.*?)\1\)/gi,"$2");var s=document.documentElement.clientWidth,t=document.documentElement.clientHeight;if(!(s<=640)){var l=a.height/a.width,n=t/s,i=void 0,o=void 0;return n>l?(i=t,o=t/l):(o=s,i=s*l),{backgroundSize:o+"px "+i+"px",backgroundPosition:(s-o)/2+"px "+(t-i)/2+"px"}}}},data:function(){return{bgStyle:this.getBodyBgImageSizes()}},props:["vuePanelTitle"]}},937:function(e,a,s){a=e.exports=s(921)(!0),a.push([e.i,"","",{version:3,sources:[],names:[],mappings:"",file:"vuePanels.vue",sourceRoot:""}])},938:function(e,a,s){var t=s(937);"string"==typeof t&&(t=[[e.i,t,""]]),t.locals&&(e.exports=t.locals);s(922)("380f0e33",t,!0,{})},939:function(e,a,s){function t(e){s(938)}var l=s(17)(s(936),s(940),t,null,null);e.exports=l.exports},940:function(e,a){e.exports={render:function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("div",{staticClass:"panel panel-blur",style:e.bgStyle},[s("div",{directives:[{name:"show",rawName:"v-show",value:null!=e.vuePanelTitle,expression:"vuePanelTitle!=null"}],staticClass:"panel-heading clearfix"},[s("h3",{staticClass:"panel-title"},[e._v(e._s(e.vuePanelTitle))])]),e._v(" "),s("div",{staticClass:"panel-body"},[e._t("default")],2)])},staticRenderFns:[]}},941:function(e,a,s){"use strict";var t=s(939),l=s.n(t);s.d(a,"a",function(){return l.a})},951:function(e,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var t=s(941);a.default={components:{vuePanel:t.a}}},962:function(e,a,s){a=e.exports=s(921)(!0),a.push([e.i,"","",{version:3,sources:[],names:[],mappings:"",file:"panels.vue",sourceRoot:""}])},972:function(e,a,s){var t=s(962);"string"==typeof t&&(t=[[e.i,t,""]]),t.locals&&(e.exports=t.locals);s(922)("10ceff96",t,!0,{})},991:function(e,a){e.exports={render:function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("div",[s("h2",[e._v("Default panels")]),e._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12 col-lg-4"},[s("vue-panel",{staticClass:"xsmall-panel light-text"},[e._v("\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac mi erat. Phasellus placerat, elit a laoreet\n        semper, enim ipsum ultricies orci, ac tincidunt tellus massa eu est. Nam non porta purus, sed facilisis justo. Nam\n        pulvinar sagittis quam.\n      ")])],1),e._v(" "),s("div",{staticClass:"col-md-12 col-lg-4"},[s("vue-panel",{staticClass:"xsmall-panel light-text",attrs:{"vue-panel-title":"Panel with header"}},[e._v("\n        Phasellus maximus venenatis augue, et vestibulum neque aliquam ut. Morbi mattis libero vitae vulputate dignissim.\n        Praesent placerat, sem non dapibus cursus, lacus nisi blandit quam, vitae porttitor lectus lacus non turpis. Donec\n        suscipit consequat tellus.\n      ")])],1),e._v(" "),s("div",{staticClass:"col-md-12 col-lg-4"},[s("vue-panel",{staticClass:"xsmall-panel with-scroll light-text",attrs:{"vue-panel-title":"Panel with header & scroll"}},[s("p",[e._v("\n          Suspendisse nec tellus urna. Sed id est metus. Nullam sit amet dolor nec ipsum dictum suscipit. Mauris sed nisi\n          mauris. Nulla iaculis nisl ut velit ornare imperdiet. Suspendisse potenti. In tempor leo sed sem malesuada\n          pellentesque. Maecenas faucibus metus lacus, ac egestas diam vulputate vitae.\n        ")]),e._v(" "),s("p",[e._v("\n          Sed dapibus, purus vel hendrerit consectetur, lectus orci gravida massa, sed bibendum dui mauris et eros. Nulla\n          dolor massa, posuere et dictum sit amet, dignissim quis odio. Fusce mollis finibus dignissim. Integer sodales\n          augue erat. Pellentesque laoreet vestibulum urna at iaculis. Nulla libero augue, euismod at diam eget, aliquam\n          condimentum ligula. Donec a leo eu est molestie lacinia hendrerit sed lorem. Duis id diam eu metus sodales\n          consequat vel eu elit. Praesent dolor nibh, convallis eleifend feugiat a, finibus porttitor nibh. Ut non libero\n          vel velit pulvinar scelerisque non vel lorem. Integer porta tempor nulla. Sed nibh erat, ultrices vel lorem eu,\n          rutrum vehicula sem.\n        ")]),e._v(" "),s("p",[e._v("\n          Donec nec tellus urna. Sed id est metus. Nullam sit amet dolor nec ipsum dictum suscipit. Mauris sed nisi\n          mauris. Nulla iaculis nisl ut velit ornare imperdiet. Suspendisse potenti. In tempor leo sed sem malesuada\n          pellentesque. Maecenas faucibus metus lacus, ac egestas diam vulputate vitae.\n        ")]),e._v(" "),s("p",[e._v("\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fermentum nec ligula egestas rhoncus. Sed\n          dignissim, augue vel scelerisque vulputate, nisi ante posuere lorem, quis iaculis eros dolor eu nisl. Etiam\n          sagittis, ipsum ac tempor iaculis, justo neque mattis ante, ac maximus sapien risus eu sapien. Morbi erat urna,\n          varius et lectus vel, porta dictum orci. Duis bibendum euismod elit, et lobortis purus venenatis in. Mauris eget\n          lacus enim. Cras quis sem et magna fringilla convallis. Proin hendrerit nulla vel gravida mollis. Interdum et\n          malesuada fames ac ante ipsum primis in faucibus. Vestibulum consectetur quis purus vel aliquam.\n        ")])])],1)]),e._v(" "),s("h2",[e._v("Bootstrap panels")]),e._v(" "),e._m(0),e._v(" "),s("h2",[e._v("Panels with Contextual Classes")]),e._v(" "),e._m(1),e._v(" "),e._m(2)])},staticRenderFns:[function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12 col-lg-4"},[s("div",{staticClass:"panel panel-default bootstrap-panel xsmall-panel"},[s("div",{staticClass:"panel-body"},[s("p",[e._v("A panel in bootstrap is a bordered box with some padding around its content.")]),e._v(" "),s("p",{staticClass:"p-with-code"},[e._v("Panels are created with the "),s("code",[e._v(".panel")]),e._v(" class, and content inside the panel has a\n            "),s("code",[e._v(".panel-body")]),e._v(" class. The "),s("code",[e._v(".panel-default .panel-primary .panel-danger")]),e._v(" and other classes\n            are used to style the color of the\n            panel. See the next example on this page for more contextual classes.")])])])]),e._v(" "),s("div",{staticClass:"col-md-12 col-lg-4"},[s("div",{staticClass:"panel panel-default bootstrap-panel xsmall-panel"},[s("div",{staticClass:"panel-heading"},[e._v("Panel Heading")]),e._v(" "),s("div",{staticClass:"panel-body"},[s("p",{staticClass:"p-with-code"},[e._v("The "),s("code",[e._v(".panel-heading")]),e._v(" class adds a heading to the panel.Easily add a heading\n            container to your\n            panel with .panel-heading. You may also include any\n            "),s("code",[e._v("h1-h6")]),e._v(" with a "),s("code",[e._v(".panel-title")]),e._v(" class to add a pre-styled heading.\n          ")])])])]),e._v(" "),s("div",{staticClass:"col-md-12 col-lg-4"},[s("div",{staticClass:"panel panel-default bootstrap-panel"},[s("div",{staticClass:"panel-body footer-panel"},[s("p",{staticClass:"p-with-code"},[e._v("\n            Wrap buttons or secondary text in "),s("code",[e._v(".panel-footer")]),e._v(". Note that panel footers do not inherit colors\n            and\n            borders when\n            using contextual variations as they are not meant to be in the foreground.\n          ")])]),e._v(" "),s("div",{staticClass:"panel-footer"},[e._v("Panel Footer")])])])])},function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-6 col-lg-4"},[s("div",{staticClass:"panel panel-default contextual-example-panel bootstrap-panel"},[s("div",{staticClass:"panel-heading"},[e._v("Panel with panel-default class")]),e._v(" "),s("div",{staticClass:"panel-body"},[e._v("To color the panel, use contextual classes. This is sample "),s("code",[e._v(".panel-default")]),e._v("\n          panel\n        ")])])]),e._v(" "),s("div",{staticClass:"col-md-6 col-lg-4"},[s("div",{staticClass:"panel panel-primary contextual-example-panel bootstrap-panel"},[s("div",{staticClass:"panel-heading"},[e._v("Panel with panel-primary class")]),e._v(" "),s("div",{staticClass:"panel-body"},[e._v("Sample "),s("code",[e._v(".panel-primary")]),e._v(" panel")])])]),e._v(" "),s("div",{staticClass:"col-md-6 col-lg-4"},[s("div",{staticClass:"panel panel-success contextual-example-panel bootstrap-panel"},[s("div",{staticClass:"panel-heading"},[e._v("Panel with panel-success class")]),e._v(" "),s("div",{staticClass:"panel-body"},[e._v("Sample "),s("code",[e._v(".panel-success")]),e._v(" panel")])])]),e._v(" "),s("div",{staticClass:"col-md-6 col-lg-4"},[s("div",{staticClass:"panel panel-info contextual-example-panel bootstrap-panel"},[s("div",{staticClass:"panel-heading"},[e._v("Panel with panel-info class")]),e._v(" "),s("div",{staticClass:"panel-body"},[e._v("Sample "),s("code",[e._v(".panel-info")]),e._v(" panel")])])]),e._v(" "),s("div",{staticClass:"col-md-6 col-lg-4"},[s("div",{staticClass:"panel panel-warning contextual-example-panel bootstrap-panel"},[s("div",{staticClass:"panel-heading"},[e._v("Panel with panel-warning class")]),e._v(" "),s("div",{staticClass:"panel-body"},[e._v("Sample "),s("code",[e._v(".panel-warning")]),e._v(" panel")])])]),e._v(" "),s("div",{staticClass:"col-md-6 col-lg-4"},[s("div",{staticClass:"panel panel-danger contextual-example-panel bootstrap-panel"},[s("div",{staticClass:"panel-heading"},[e._v("Panel with panel-danger class")]),e._v(" "),s("div",{staticClass:"panel-body"},[e._v("Sample "),s("code",[e._v(".panel-danger")]),e._v(" panel")])])])])},function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12"},[s("h2",[e._v("Panel Group")]),e._v(" "),s("div",{staticClass:"panel-group"},[s("div",{staticClass:"panel panel-default bootstrap-panel"},[s("div",{staticClass:"panel-heading"},[e._v("Panel group 1")]),e._v(" "),s("div",{staticClass:"panel-body"},[s("p",[e._v("To group many panels together, wrap a "),s("code",[e._v("<div>")]),e._v(" with class "),s("code",[e._v("\n              .panel-group")]),e._v(" around them.")])])]),e._v(" "),s("div",{staticClass:"panel panel-default bootstrap-panel"},[s("div",{staticClass:"panel-heading"},[e._v("Panel group 2")]),e._v(" "),s("div",{staticClass:"panel-body"},[s("p",[e._v("The "),s("code",[e._v(".panel-group")]),e._v(" class clears the bottom-margin of each panel.")])])])])])])}]}}});
//# sourceMappingURL=2.2bb9fa2e5c17936c1854.js.map