webpackJsonp([1],{"/15G":function(t,e){},0:function(t,e,a){t.exports=a("NHnr")},"12Wb":function(t,e){},"7a6W":function(t,e,a){t.exports=a.p+"img/RedMusicClean.b5cd6569.jpg"},D4uH:function(t,e,a){"use strict";a("VjuZ"),a("EuXz");var s={},n={name:"icon",props:{name:{type:String,validator:function(t){return t?t in s||(console.warn('Invalid prop: prop "name" is referring to an unregistered icon "'.concat(t,'".')+"\nPlesase make sure you have imported this icon before using it."),!1):(console.warn('Invalid prop: prop "name" is required.'),!1)}},scale:[Number,String],spin:Boolean,inverse:Boolean,pulse:Boolean,flip:{validator:function(t){return"horizontal"===t||"vertical"===t}},label:String},data:function(){return{x:!1,y:!1,childrenWidth:0,childrenHeight:0,outerScale:1}},computed:{normalizedScale:function(){var t=this.scale;return t="undefined"===typeof t?1:Number(t),isNaN(t)||t<=0?(console.warn('Invalid prop: prop "scale" should be a number over 0.',this),this.outerScale):t*this.outerScale},klass:function(){return{"fa-icon":!0,"fa-spin":this.spin,"fa-flip-horizontal":"horizontal"===this.flip,"fa-flip-vertical":"vertical"===this.flip,"fa-inverse":this.inverse,"fa-pulse":this.pulse}},icon:function(){return this.name?s[this.name]:null},box:function(){return this.icon?"0 0 ".concat(this.icon.width," ").concat(this.icon.height):"0 0 ".concat(this.width," ").concat(this.height)},ratio:function(){if(!this.icon)return 1;var t=this.icon,e=t.width,a=t.height;return Math.max(e,a)/16},width:function(){return this.childrenWidth||this.icon&&this.icon.width/this.ratio*this.normalizedScale||0},height:function(){return this.childrenHeight||this.icon&&this.icon.height/this.ratio*this.normalizedScale||0},style:function(){return 1!==this.normalizedScale&&{fontSize:this.normalizedScale+"em"}},raw:function(){if(!this.icon||!this.icon.raw)return null;var t=this.icon.raw,e={};return t=t.replace(/\s(?:xml:)?id=["']?([^"')\s]+)/g,function(t,a){var s=r();return e[a]=s,' id="'.concat(s,'"')}),t=t.replace(/#(?:([^'")\s]+)|xpointer\(id\((['"]?)([^')]+)\2\)\))/g,function(t,a,s,n){var i=a||n;return i&&e[i]?"#".concat(e[i]):t}),t}},mounted:function(){var t=this;if(!this.icon){this.$children.forEach(function(e){e.outerScale=t.normalizedScale});var e=0,a=0;this.$children.forEach(function(t){e=Math.max(e,t.width),a=Math.max(a,t.height)}),this.childrenWidth=e,this.childrenHeight=a,this.$children.forEach(function(t){t.x=(e-t.width)/2,t.y=(a-t.height)/2})}},register:function(t){for(var e in t){var a=t[e];a.paths||(a.paths=[]),a.d&&a.paths.push({d:a.d}),a.polygons||(a.polygons=[]),a.points&&a.polygons.push({points:a.points}),s[e]=a}},icons:s},i=870711;function r(){return"fa-".concat((i++).toString(16))}var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("svg",{class:t.klass,style:t.style,attrs:{version:"1.1",role:t.label?"img":"presentation","aria-label":t.label,x:t.x,y:t.y,width:t.width,height:t.height,viewBox:t.box}},[t._t("default",[t.icon&&t.icon.paths?t._l(t.icon.paths,function(e,s){return a("path",t._b({key:"path-"+s},"path",e,!1))}):t._e(),t._v(" "),t.icon&&t.icon.polygons?t._l(t.icon.polygons,function(e,s){return a("polygon",t._b({key:"polygon-"+s},"polygon",e,!1))}):t._e(),t._v("\b\n    "),t.icon&&t.icon.raw?[a("g",{domProps:{innerHTML:t._s(t.raw)}})]:t._e()])],2)},c=[],l=a("XyMi");function u(t){a("cR4U")}var d=!1,g=u,p=null,h=null,v=Object(l["a"])(n,o,c,d,g,p,h);e["a"]=v.exports},"E4Y+":function(t,e){},"H/6o":function(t,e){},HufJ:function(t,e){},LTER:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAlgAAAJYCAMAAACJuGjuAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTExIDc5LjE1ODMyNSwgMjAxNS8wOS8xMC0wMToxMDoyMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NDVERjQyMUIyQjJFMTFFNjlGNjFCNUMwMDEyNURBRjAiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NDVERjQyMUMyQjJFMTFFNjlGNjFCNUMwMDEyNURBRjAiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0NURGNDIxOTJCMkUxMUU2OUY2MUI1QzAwMTI1REFGMCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0NURGNDIxQTJCMkUxMUU2OUY2MUI1QzAwMTI1REFGMCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PkeLuqAAAAAGUExURdzc3PX19fcPU7IAAAdUSURBVHja7N1RbttAEETB4f0vnR8jCYLYQaBta3u33gU40hRkiSKteaRA4ykQWAJLYElgCSyBJYElsASWBJbAElgSWAJLYElgCSyBJYElsASWBJbAElgSWAJLYElgCSyBJYElsASWBJbAElgSWAJLYElgCSyBJYElsASWBJbAElgSWAJLYElgCSyBJYElsASWBJbAElgSWAJLYElgCSyBJYElsASWBJbAElgSWAJLYElgCSyBJYElsASWBJbAElgSWAJLYAksCSyBJbAksASWwJLAElgCSwJLYAksCSyBJbAksASWwJLAElgCSwJLYAksCSyBJbAksASWwJLAElgCSwJLYAksCSyBJbAksASWwJLAElgCSwJLYAksCSyBJbAksASWwJLAElgCSwJLYAksCazWFX0Elpaj6rMFVo2qLlpgFalqkgVWEaomWWBVqeqRBVaXqhpZYJWpapEFVhmqFllg1akCSxFVHbLA6lMFlhKowFJGVYUssApVgaWIKrCUQAWWMqrAUkQVWIqoAksJVGBRFQssqsBSiSqwoAJLParAogos9agCCyqw1KMKLKrAUo8qsKACSz2qwKIKLPWoAgsqsNSjCiyqwFKPKrCgAks9qsCiCiz1qAILKrDUowosqsCiqiqwsAILK7DAutsVWFyBxRVYYF3uCiyuwAILLLAudwUWWGBxBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYJ8B6wAIr8rIEFliRv3VggRV5BwUWWJH35WCBFfm0BxZYkVMIYIEVOTEFFliR051ggRU5iQ4WWJFvZsACK/J9H1hgRb5FBgusyLUJYIEVueAFLLAil1GBBVbk4jywwIpc8gkWWJHriMECK0IALLAi+wcLrMjywQIrsnmwwIpsHSywIisHC6zIvsEC6zsnBOsSWN89IVg3wHrDhGAdD+s9E4J1Nqy3TQjWubDeOiFYh8J694RgnQhrgwnBOg7WHhOCdRSsfSYE6xxYW00I1iGwdpsQrBNgbTghWO2wNp0QrGpY+04IVi+srScEqxTW7hOCVQnLhGCBBRZYYIFlQrDAAgsssMAyIVhggQUWWGCZECywwLI2sMAyIVhggWVtYIFlQrDAAsvawALLhGCBBZa1gQWWCcECCyxrAwssE4IFFljWBhZYJgQLLLCsDSywTAgWWGBZG1hgmRAssMCyNrDAMiFYYIFlbWCBZUKwwALL2sACy4RggQWWtYEFFlhggQXW2Wub34/85RLAAuuFA35+XLDAesnUZ8cGC6zXUf3l+GCBtQbVHzOABdZCVb+mAAustaw+BgELrNWq/vPzI1hXwJoBC6zla5sBC6zla5sBC6zla5sBC6zla5sBC6z1sAYssAKwBiywArAGLLACsAYssAKwBiywArAGLLACsAYssAKwBiywArAGLLDAAqsF1oAFFlhgtcAasMACC6wWWAMWWGCBBRZYYIEF1mpYAxZYYIEFFlhggQUWWGCBBRZYYIEFFlhOkIIFFldggQUWWGDdCcutFGCBBVYRLLerXgRrnvn3o+uE9YC1y0vQZ9vovGEVrD1IfbGSSlgPWFuh+tteGv8pyAPWfqj+XM7C3XF1EqxX97NyeVydAmvBjpZuD6wjYG24Pa7qYW26Pqy6Ye37usBVMayt/+Bw1Qpr+3fIXFXCKvhMj1UfrJKTkFiVwer51uR6V1Wwqr6Ou5tVFay26wcuVlUFq/HClGtZFcEqvZLuTlVFsJqv/b1PVQ+s9psV7kLVA+uI26vuQQXW92/3BlM9sOYcWD+f9t8OduQteGAd/9oB1jauwAILLLB6XIEFFlhggQXW5a7AAgsssMACCyyBBRZYYIEFlsACCyywwAJLB8NycQNYYAkssMDiCqwTZFEBFlhg1ciCAiywwKqRxcRFsPy2FljlsIi4C5YfbQOrWhYQ18F6uAKrVRYOV8Lyo21gNdJi4WJYD1dgVckC4XZYGVocgBWgRQFYAVoMgBWgRQBY621ZP1jradk9WAFbNg/Wcly2DtZyXDYO1mpclg3Wa48IKbAElgSWwBJYElgCS2BJYAksgSWBJbAElgSWwBJYElgCS2BJYAksgSWBJbAElgSWwBJYElgCS2BJYAksgSWBJbAElgSWwBJYElgCS2BJYAksgSWwJLAElsCSwBJYAksCS2AJLAksgSWwJLAElsCSwBJYAksCS2AJLAksgSWwJLAElsCSwBJYAksCS2AJLAksgSWwJLAElsCSwBJYAksCS2AJLAksgSWwJLAElsCSwBJYAksCS2AJLAksgSWwJLAElsCSwBJYAksCS2AJLAksgSWwJLAElsCSwBJYAksCS2AJLAksgSWwBJanQGAJLIElgSWwBJYElsASWBJYAktgSWAJLIElgaV9+yHAAKuN9kl7KubPAAAAAElFTkSuQmCC"},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("/5sW"),n={name:"NavBar",data:function(){return{projectName:"MyMelody"}}},i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"container"},[a("h1",[t._v(t._s(t.projectName))])])},r=[],o=a("XyMi");function c(t){a("/15G")}var l=!1,u=c,d="data-v-429ec676",g=null,p=Object(o["a"])(n,i,r,l,u,d,g),h=p.exports,v={name:"BotNavBar",data:function(){return{aboutMessage:"About",teamMessage:"Team",projectMessage:"Vibe 2018"}}},A=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"botNavBarContainer"},[a("div",{staticClass:"pageLinksContainer"},[a("router-link",{staticClass:"pageLinks",attrs:{to:"about"}},[t._v(t._s(t.aboutMessage))]),t._v(" "),a("router-link",{staticClass:"pageLinks",attrs:{to:"team"}},[t._v(t._s(t.teamMessage))])],1),t._v(" "),a("header",[t._v(t._s(t.projectMessage))])])},m=[];function f(t){a("PHs3")}var _=!1,C=f,b="data-v-4367e58b",S=null,w=Object(o["a"])(v,A,m,_,C,b,S),B=w.exports,W={components:{NavBar:h,botNavBar:B}},y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view"),t._v(" "),a("botNavBar")],1)},k=[];function E(t){a("OIM7")}var Y=!1,M=E,J=null,L=null,F=Object(o["a"])(W,y,k,Y,M,J,L),I=F.exports,U=a("/ocq"),G={name:"track-card",props:{title:String,artist:String,albumArt:{default:a("LTER"),type:String}}},R=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("img",{attrs:{src:t.albumArt,alt:t.title}}),t._v(" "),a("h1",[t._v(t._s(t.title))]),t._v(" "),a("h2",[t._v(t._s(t.artist))])])},j=[];function N(t){a("Y5rK")}var V=!1,x=N,Z="data-v-8346f932",D=null,P=Object(o["a"])(G,R,j,V,x,Z,D),Q=P.exports,T=a("mtWM"),O=a.n(T),$={name:"search-dialog",components:{TrackCard:Q},data:function(){return{query:null,noResults:!1,tracks:null,selectedTrack:null}},methods:{search:function(){var t=this;this.selectedTrack=null,O.a.get("".concat(this.$state.getters.baseApiUrl,"/spotify/search?q=").concat(this.query)).then(function(e){e.data.length<1&&(t.noResults=!0),t.tracks=e.data}).catch(function(t){return console.error(t)})},select:function(t){this.selectedTrack=t},commit:function(){this.$store.commit("selectTrack",this.selectedTrack),this.$store.commit("postModalState","add")}}},H=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.query,expression:"query"}],staticClass:"search-box",attrs:{placeholder:"Search"},domProps:{value:t.query},on:{input:function(e){e.target.composing||(t.query=e.target.value)}}}),a("button",{staticClass:"search-btn",on:{click:t.search}},[a("icon",{attrs:{name:"search"}})],1),t._v(" "),a("div",{staticClass:"results"},[t.tracks?t._e():a("p",[t._v("Search for a song or artist.")]),t._v(" "),t.noResults?a("div",{staticClass:"noresults"},[a("p",[t._v("No results found.")])]):t._e(),t._v(" "),a("transition-group",{staticClass:"transition",attrs:{name:"fade"}},t._l(t.tracks,function(e){return a("div",{key:e.trackId,staticClass:"result"},[a("track-card",{attrs:{title:e.title,artist:e.artist,albumArt:e.albumArt}}),t._v(" "),a("button",{staticClass:"select",on:{click:function(a){t.select(e)}}},[t._v("Select")])],1)}))],1),t._v(" "),a("button",{staticClass:"continue",attrs:{disabled:!t.selectedTrack},on:{click:t.commit}},[t._v("Continue")])])},q=[];function z(t){a("aPPp")}var X=!1,K=z,tt="data-v-1fe32652",et=null,at=Object(o["a"])($,H,q,X,K,tt,et),st=at.exports,nt={name:"add-post-dialog",data:function(){return{caption:null}},computed:{track:function(){return this.$store.getters.selectedTrack}},methods:{addPost:function(){var t=this;console.log({track:this.$store.getters.selectedTrack,caption:this.caption}),O.a.post("${this.$state.getters.baseApiUrl}/posts/",{username:this.$store.getters.currentUser,caption:this.caption,track:this.track}).then(function(e){console.log(e),t.$store.dispatch("getPosts"),t.$store.commit("postModalState",null)}).catch(function(t){return console.error(t)})},back:function(){this.$store.commit("postModalState","search")}},components:{TrackCard:Q}},it=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("track-card",{attrs:{title:t.track.title,artist:t.track.artist,albumArt:t.track.albumArt}}),t._v(" "),a("div",{staticClass:"caption"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.caption,expression:"caption"}],attrs:{placeholder:"Add a caption..."},domProps:{value:t.caption},on:{input:function(e){e.target.composing||(t.caption=e.target.value)}}}),t._v(" "),a("div",[a("button",{on:{click:t.back}},[t._v("Back")]),t._v(" "),a("button",{on:{click:t.addPost}},[t._v("Add Post")])])])],1)},rt=[];function ot(t){a("H/6o")}var ct=!1,lt=ot,ut="data-v-0ee2d6c5",dt=null,gt=Object(o["a"])(nt,it,rt,ct,lt,ut,dt),pt=gt.exports,ht={name:"home",data:function(){return{}},computed:{dialogState:function(){return this.$store.getters.postModalState},posts:function(){return this.$store.getters.posts}},created:function(){this.$store.dispatch("getPosts")},components:{SearchDialog:st,AddPostDialog:pt,TrackCard:Q},methods:{toggleModal:function(){var t=null;this.dialogState||(t="search"),this.$store.commit("postModalState",t)}}},vt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("button",{on:{click:t.toggleModal}},[t._v("Add Post")]),t._v(" "),t._l(t.posts,function(e){return a("div",{key:e._id,staticClass:"post"},[a("track-card",{attrs:{title:e.track.title,artist:e.track.artist,albumArt:e.track.albumArt}}),t._v(" "),a("p",[t._v("CAPTION: "+t._s(e.caption))])],1)}),t._v(" "),a("transition",{attrs:{name:"fade"}},[t.dialogState?a("div",{staticClass:"modal"},[a("button",{staticClass:"close",on:{click:t.toggleModal}},[t._v("×")]),t._v(" "),a("transition",{attrs:{name:"fade",mode:"out-in"}},["search"===t.dialogState?a("search-dialog"):t._e(),t._v(" "),"add"===t.dialogState?a("add-post-dialog"):t._e()],1)],1):t._e()])],2)},At=[];function mt(t){a("UhcL")}var ft=!1,_t=mt,Ct="data-v-3e7690c5",bt=null,St=Object(o["a"])(ht,vt,At,ft,_t,Ct,bt),wt=St.exports,Bt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Wt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"about"},[a("h1",[t._v("This is an about page")]),t._v(" "),a("div",[a("header",[t._v("Music")]),t._v(" "),a("div",{attrs:{id:"music"}},[a("ul",[a("div",[a("li",{attrs:{id:"pads"}},[t._v(" Daisy by Zedd")])]),t._v(" "),a("div",[a("li",{attrs:{id:"pads"}},[t._v(" Starboy by Weeknd")])]),t._v(" "),a("div",[a("li",{attrs:{id:"pads"}},[t._v(" Fractures by Illenium")])]),t._v(" "),a("div",[a("li",{attrs:{id:"pads"}},[t._v(" Illusion by Zedd")])])])])])])}];function yt(t){a("t7h4")}var kt=null,Et=!1,Yt=yt,Mt="data-v-4a9b457b",Jt=null,Lt=Object(o["a"])(kt,Bt,Wt,Et,Yt,Mt,Jt),Ft=Lt.exports,It={name:"team",components:{}},Ut=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Gt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("header",{attrs:{id:"topHeader"}},[t._v("The Team")]),t._v(" "),a("p",{attrs:{id:"topParagraph"}},[t._v("We are a close team of dedicated developers and designers based out of Seattle. We are passionate about solving problems for people by providing them with applications they can use in their daily lives.")]),t._v(" "),a("div",{attrs:{id:"row1"}},[a("div",{attrs:{className:"profileCards"}},[a("img",{attrs:{src:"https://scontent.ford1-1.fna.fbcdn.net/v/t1.0-9/20258149_1762883797059979_2271180749826725740_n.jpg?oh=862e49b11d09b483ee51d9ea6fb21226&oe=5B0CDCE7"}}),t._v(" "),a("header",[t._v("Aneesh Vempaty")]),t._v(" "),a("p",[t._v("Developer")])]),t._v(" "),a("div",{attrs:{className:"profileCards"}},[a("img",{attrs:{src:"https://scontent.ford1-1.fna.fbcdn.net/v/t1.0-0/p206x206/13432372_10201768002359361_1644264331503287404_n.jpg?oh=0cf93b63a70e3cc89cbd56d8dd31adb7&oe=5B174AF9"}}),t._v(" "),a("header",[t._v("Pranav Shekar")]),t._v(" "),a("p",[t._v("Backend Developer")])]),t._v(" "),a("div",{attrs:{className:"profileCards"}},[a("img",{attrs:{src:"https://scontent.ford1-1.fna.fbcdn.net/v/t1.0-9/10730970_996434900389560_6144339044351560451_n.jpg?oh=81c2fb3df93cf3425a4bee241643bf21&oe=5ADADF22"}}),t._v(" "),a("header",[t._v("Vincent Jiang")]),t._v(" "),a("p",[t._v("Frontend Developer")])]),t._v(" "),a("div",{attrs:{className:"profileCards"}},[a("img",{attrs:{src:"https://scontent.ford1-1.fna.fbcdn.net/v/t1.0-0/p206x206/19511049_10209555918996490_1540856195408613407_n.jpg?oh=aa840e32639eb1acf037c85c62e58702&oe=5B1C48FF"}}),t._v(" "),a("header",[t._v("Marlo Delatorre")]),t._v(" "),a("p",[t._v("Developer")])]),t._v(" "),a("div",{attrs:{className:"profileCards"}},[a("img",{attrs:{src:"https://scontent.ford1-1.fna.fbcdn.net/v/t1.0-0/p206x206/17264190_10208848380102679_7872838750100870624_n.jpg?oh=5c00292d4e4de0cdbd640498c09441dc&oe=5B1E3666"}}),t._v(" "),a("header",[t._v("Peter Farmer")]),t._v(" "),a("p",[t._v("Developer")])])])])}];function Rt(t){a("zPgH")}var jt=!1,Nt=Rt,Vt="data-v-b18ec98a",xt=null,Zt=Object(o["a"])(It,Ut,Gt,jt,Nt,Vt,xt),Dt=Zt.exports,Pt=a("jVco"),Qt=a.n(Pt),Tt={name:"landingPage",data:function(){return{landingMessage:Qt.a}},methods:{login:function(){this.$router.push("login")},register:function(){this.$router.push("register")}}},Ot=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"landingPageContainer"},[s("header",[s("header",{staticClass:"navLogo"},[t._v(t._s(t.landingMessage.projectNameMessage))]),t._v(" "),s("h1",{staticClass:"headline"},[t._v(t._s(t.landingMessage.headlineMessage))]),t._v(" "),s("h2",{staticClass:"subhead"},[t._v(t._s(t.landingMessage.subheadMessage))])]),t._v(" "),s("div",{staticClass:"auth"},[s("button",{staticClass:"signup",on:{click:t.register}},[t._v(t._s(t.landingMessage.signupMessage))]),t._v(" "),s("div",{staticClass:"divider"},[s("hr"),t._v(" "),s("p",{staticClass:"alreadyHaveAccount"},[t._v(t._s(t.landingMessage.alreadyHaveAccountMessage))]),t._v(" "),s("hr")]),t._v(" "),s("button",{staticClass:"login",on:{click:t.login}},[t._v(t._s(t.landingMessage.loginMessage))])]),t._v(" "),s("img",{staticClass:"background",attrs:{src:a("7a6W")}})])},$t=[];function Ht(t){a("hpQy")}var qt=!1,zt=Ht,Xt="data-v-50bc2882",Kt=null,te=Object(o["a"])(Tt,Ot,$t,qt,zt,Xt,Kt),ee=te.exports,ae={name:"NavBarLogin",data:function(){return{projectNameMessage:"Vibe"}}},se=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"navBarLoginContainer"},[a("header",{staticClass:"projectLogo"},[t._v(t._s(t.projectNameMessage))])])},ne=[];function ie(t){a("HufJ")}var re=!1,oe=ie,ce="data-v-e1b55bee",le=null,ue=Object(o["a"])(ae,se,ne,re,oe,ce,le),de=ue.exports,ge=a("c+fU"),pe=a.n(ge),he={name:"login",components:{navBarLogin:de},data:function(){return{message:"",password:"",loginMessage:pe.a}},methods:{login:function(){this.$router.push("home")},facebook:function(){console.log("this is username: "+this.$data.message+", this is password: "+this.$data.password)}}},ve=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("navBarLogin"),t._v(" "),a("div",{attrs:{id:"full"}},[a("div",{staticClass:"loginForm"},[a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.message,expression:"message"}],attrs:{type:"text",placeholder:t.loginMessage.usernameField},domProps:{value:t.message},on:{input:function(e){e.target.composing||(t.message=e.target.value)}}})]),t._v(" "),a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",placeholder:t.loginMessage.passwordField},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),t._v(" "),a("div",[a("button",{staticClass:"loginButton",on:{click:t.login}},[t._v(t._s(t.loginMessage.login))])])])]),t._v(" "),a("div",{staticClass:"background"})],1)},Ae=[];function me(t){a("E4Y+")}var fe=!1,_e=me,Ce="data-v-582dd90c",be=null,Se=Object(o["a"])(he,ve,Ae,fe,_e,Ce,be),we=Se.exports,Be={name:"register",components:{navBarLogin:de},methods:{register:function(){this.$router.push("home")}}},We=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"register"},[a("navBarLogin"),t._v(" "),a("div",{staticClass:"signupForm"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),a("button",{staticClass:"registerButton",on:{click:t.register}},[t._v("Register")])]),t._v(" "),a("div",{staticClass:"background"})],1)},ye=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("input",{attrs:{type:"text",placeholder:"First name"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("input",{attrs:{type:"text",placeholder:"Last name"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("input",{attrs:{type:"text",placeholder:"Username"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("input",{attrs:{type:"password",placeholder:"Password"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("input",{attrs:{type:"password",placeholder:"Confirm password"}})])}];function ke(t){a("12Wb")}var Ee=!1,Ye=ke,Me="data-v-ad5df70c",Je=null,Le=Object(o["a"])(Be,We,ye,Ee,Ye,Me,Je),Fe=Le.exports;s["a"].use(U["a"]);var Ie=new U["a"]({mode:"history",routes:[{path:"/",name:"landingPage",component:ee},{path:"/home",name:"home",component:wt},{path:"/about",name:"about",component:Ft},{path:"/team",name:"team",component:Dt},{path:"/login",name:"login",component:we},{path:"/register",name:"register",component:Fe}]}),Ue=a("NYxO");s["a"].use(Ue["a"]);var Ge=new Ue["a"].Store({state:{spotifyToken:null,selectedTrack:{title:null,artist:null},postModalState:null,postModalOpen:!1,currentUser:"avempaty",baseApiUrl:"https://mymelody.herokuapp.com/api",posts:[]},mutations:{selectTrack:function(t,e){t.selectedTrack=e},postModalState:function(t,e){t.postModalState=e},spotifyToken:function(t,e){t.spotifyToken=e},setPosts:function(t,e){t.posts=e}},actions:{getPosts:function(t){return O.a.get("".concat(t.getters.currentUser,"/posts/").concat(t.getters.currentUser)).then(function(e){t.commit("setPosts",e.data)}).catch(function(t){return console.error(t)})}},getters:{selectedTrack:function(t){return t.selectedTrack},postModalState:function(t){return t.postModalState},spotifyToken:function(t){return t.spotifyToken},currentUser:function(t){return t.currentUser},posts:function(t){return t.posts},baseApiUrl:function(t){return t.baseApiUrl}}}),Re=(a("D/PP"),a("D4uH"));s["a"].config.productionTip=!1,s["a"].component("icon",Re["a"]),new s["a"]({router:Ie,store:Ge,render:function(t){return t(I)}}).$mount("#app")},OIM7:function(t,e){},PHs3:function(t,e){},UhcL:function(t,e){},Y5rK:function(t,e){},aPPp:function(t,e){},"c+fU":function(t,e){t.exports={projectName:"Vibe",usernameField:"Username",passwordField:"Password",login:"Login",signUp:"Sign Up"}},cR4U:function(t,e){},hpQy:function(t,e){},jVco:function(t,e){t.exports={projectNameMessage:"Vibe",headlineMessage:"Discover and share music with your friends.",subheadMessage:"The easiest way to search for your favorite melodies.",signupMessage:"Sign Up",alreadyHaveAccountMessage:"Already have an account?",loginMessage:"Log In"}},t7h4:function(t,e){},zPgH:function(t,e){}},[0]);
//# sourceMappingURL=app.2f219dcf.js.map