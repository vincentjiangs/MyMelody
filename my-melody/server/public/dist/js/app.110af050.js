webpackJsonp([1],{0:function(t,e,i){t.exports=i("NHnr")},D4uH:function(t,e,i){"use strict";i("VjuZ"),i("EuXz");var s={},a={name:"icon",props:{name:{type:String,validator:function(t){return t?t in s||(console.warn('Invalid prop: prop "name" is referring to an unregistered icon "'.concat(t,'".')+"\nPlesase make sure you have imported this icon before using it."),!1):(console.warn('Invalid prop: prop "name" is required.'),!1)}},scale:[Number,String],spin:Boolean,inverse:Boolean,pulse:Boolean,flip:{validator:function(t){return"horizontal"===t||"vertical"===t}},label:String},data:function(){return{x:!1,y:!1,childrenWidth:0,childrenHeight:0,outerScale:1}},computed:{normalizedScale:function(){var t=this.scale;return t="undefined"===typeof t?1:Number(t),isNaN(t)||t<=0?(console.warn('Invalid prop: prop "scale" should be a number over 0.',this),this.outerScale):t*this.outerScale},klass:function(){return{"fa-icon":!0,"fa-spin":this.spin,"fa-flip-horizontal":"horizontal"===this.flip,"fa-flip-vertical":"vertical"===this.flip,"fa-inverse":this.inverse,"fa-pulse":this.pulse}},icon:function(){return this.name?s[this.name]:null},box:function(){return this.icon?"0 0 ".concat(this.icon.width," ").concat(this.icon.height):"0 0 ".concat(this.width," ").concat(this.height)},ratio:function(){if(!this.icon)return 1;var t=this.icon,e=t.width,i=t.height;return Math.max(e,i)/16},width:function(){return this.childrenWidth||this.icon&&this.icon.width/this.ratio*this.normalizedScale||0},height:function(){return this.childrenHeight||this.icon&&this.icon.height/this.ratio*this.normalizedScale||0},style:function(){return 1!==this.normalizedScale&&{fontSize:this.normalizedScale+"em"}},raw:function(){if(!this.icon||!this.icon.raw)return null;var t=this.icon.raw,e={};return t=t.replace(/\s(?:xml:)?id=["']?([^"')\s]+)/g,function(t,i){var s=r();return e[i]=s,' id="'.concat(s,'"')}),t=t.replace(/#(?:([^'")\s]+)|xpointer\(id\((['"]?)([^')]+)\2\)\))/g,function(t,i,s,a){var n=i||a;return n&&e[n]?"#".concat(e[n]):t}),t}},mounted:function(){var t=this;if(!this.icon){this.$children.forEach(function(e){e.outerScale=t.normalizedScale});var e=0,i=0;this.$children.forEach(function(t){e=Math.max(e,t.width),i=Math.max(i,t.height)}),this.childrenWidth=e,this.childrenHeight=i,this.$children.forEach(function(t){t.x=(e-t.width)/2,t.y=(i-t.height)/2})}},register:function(t){for(var e in t){var i=t[e];i.paths||(i.paths=[]),i.d&&i.paths.push({d:i.d}),i.polygons||(i.polygons=[]),i.points&&i.polygons.push({points:i.points}),s[e]=i}},icons:s},n=870711;function r(){return"fa-".concat((n++).toString(16))}var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("svg",{class:t.klass,style:t.style,attrs:{version:"1.1",role:t.label?"img":"presentation","aria-label":t.label,x:t.x,y:t.y,width:t.width,height:t.height,viewBox:t.box}},[t._t("default",[t.icon&&t.icon.paths?t._l(t.icon.paths,function(e,s){return i("path",t._b({key:"path-"+s},"path",e,!1))}):t._e(),t._v(" "),t.icon&&t.icon.polygons?t._l(t.icon.polygons,function(e,s){return i("polygon",t._b({key:"polygon-"+s},"polygon",e,!1))}):t._e(),t._v("\b\n    "),t.icon&&t.icon.raw?[i("g",{domProps:{innerHTML:t._s(t.raw)}})]:t._e()])],2)},l=[],u=i("XyMi");function c(t){i("ts02")}var d=!1,m=c,h=null,g=null,A=Object(u["a"])(a,o,l,d,m,h,g);e["a"]=A.exports},ImIo:function(t,e){},KwYN:function(t,e){},LTER:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAlgAAAJYCAMAAACJuGjuAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTExIDc5LjE1ODMyNSwgMjAxNS8wOS8xMC0wMToxMDoyMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NDVERjQyMUIyQjJFMTFFNjlGNjFCNUMwMDEyNURBRjAiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NDVERjQyMUMyQjJFMTFFNjlGNjFCNUMwMDEyNURBRjAiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0NURGNDIxOTJCMkUxMUU2OUY2MUI1QzAwMTI1REFGMCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0NURGNDIxQTJCMkUxMUU2OUY2MUI1QzAwMTI1REFGMCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PkeLuqAAAAAGUExURdzc3PX19fcPU7IAAAdUSURBVHja7N1RbttAEETB4f0vnR8jCYLYQaBta3u33gU40hRkiSKteaRA4ykQWAJLYElgCSyBJYElsASWBJbAElgSWAJLYElgCSyBJYElsASWBJbAElgSWAJLYElgCSyBJYElsASWBJbAElgSWAJLYElgCSyBJYElsASWBJbAElgSWAJLYElgCSyBJYElsASWBJbAElgSWAJLYElgCSyBJYElsASWBJbAElgSWAJLYElgCSyBJYElsASWBJbAElgSWAJLYAksCSyBJbAksASWwJLAElgCSwJLYAksCSyBJbAksASWwJLAElgCSwJLYAksCSyBJbAksASWwJLAElgCSwJLYAksCSyBJbAksASWwJLAElgCSwJLYAksCSyBJbAksASWwJLAElgCSwJLYAksCazWFX0Elpaj6rMFVo2qLlpgFalqkgVWEaomWWBVqeqRBVaXqhpZYJWpapEFVhmqFllg1akCSxFVHbLA6lMFlhKowFJGVYUssApVgaWIKrCUQAWWMqrAUkQVWIqoAksJVGBRFQssqsBSiSqwoAJLParAogos9agCCyqw1KMKLKrAUo8qsKACSz2qwKIKLPWoAgsqsNSjCiyqwFKPKrCgAks9qsCiCiz1qAILKrDUowosqsCiqiqwsAILK7DAutsVWFyBxRVYYF3uCiyuwAILLLAudwUWWGBxBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYJ8B6wAIr8rIEFliRv3VggRV5BwUWWJH35WCBFfm0BxZYkVMIYIEVOTEFFliR051ggRU5iQ4WWJFvZsACK/J9H1hgRb5FBgusyLUJYIEVueAFLLAil1GBBVbk4jywwIpc8gkWWJHriMECK0IALLAi+wcLrMjywQIrsnmwwIpsHSywIisHC6zIvsEC6zsnBOsSWN89IVg3wHrDhGAdD+s9E4J1Nqy3TQjWubDeOiFYh8J694RgnQhrgwnBOg7WHhOCdRSsfSYE6xxYW00I1iGwdpsQrBNgbTghWO2wNp0QrGpY+04IVi+srScEqxTW7hOCVQnLhGCBBRZYYIFlQrDAAgsssMAyIVhggQUWWGCZECywwLI2sMAyIVhggWVtYIFlQrDAAsvawALLhGCBBZa1gQWWCcECCyxrAwssE4IFFljWBhZYJgQLLLCsDSywTAgWWGBZG1hgmRAssMCyNrDAMiFYYIFlbWCBZUKwwALL2sACy4RggQWWtYEFFlhggQXW2Wub34/85RLAAuuFA35+XLDAesnUZ8cGC6zXUf3l+GCBtQbVHzOABdZCVb+mAAustaw+BgELrNWq/vPzI1hXwJoBC6zla5sBC6zla5sBC6zla5sBC6zla5sBC6z1sAYssAKwBiywArAGLLACsAYssAKwBiywArAGLLACsAYssAKwBiywArAGLLDAAqsF1oAFFlhgtcAasMACC6wWWAMWWGCBBRZYYIEF1mpYAxZYYIEFFlhggQUWWGCBBRZYYIEFFlhOkIIFFldggQUWWGDdCcutFGCBBVYRLLerXgRrnvn3o+uE9YC1y0vQZ9vovGEVrD1IfbGSSlgPWFuh+tteGv8pyAPWfqj+XM7C3XF1EqxX97NyeVydAmvBjpZuD6wjYG24Pa7qYW26Pqy6Ye37usBVMayt/+Bw1Qpr+3fIXFXCKvhMj1UfrJKTkFiVwer51uR6V1Wwqr6Ou5tVFay26wcuVlUFq/HClGtZFcEqvZLuTlVFsJqv/b1PVQ+s9psV7kLVA+uI26vuQQXW92/3BlM9sOYcWD+f9t8OduQteGAd/9oB1jauwAILLLB6XIEFFlhggQXW5a7AAgsssMACCyyBBRZYYIEFlsACCyywwAJLB8NycQNYYAkssMDiCqwTZFEBFlhg1ciCAiywwKqRxcRFsPy2FljlsIi4C5YfbQOrWhYQ18F6uAKrVRYOV8Lyo21gNdJi4WJYD1dgVckC4XZYGVocgBWgRQFYAVoMgBWgRQBY621ZP1jradk9WAFbNg/Wcly2DtZyXDYO1mpclg3Wa48IKbAElgSWwBJYElgCS2BJYAksgSWBJbAElgSWwBJYElgCS2BJYAksgSWBJbAElgSWwBJYElgCS2BJYAksgSWBJbAElgSWwBJYElgCS2BJYAksgSWwJLAElsCSwBJYAksCS2AJLAksgSWwJLAElsCSwBJYAksCS2AJLAksgSWwJLAElsCSwBJYAksCS2AJLAksgSWwJLAElsCSwBJYAksCS2AJLAksgSWwJLAElsCSwBJYAksCS2AJLAksgSWwJLAElsCSwBJYAksCS2AJLAksgSWwJLAElsCSwBJYAksCS2AJLAksgSWwBJanQGAJLIElgSWwBJYElsASWBJYAktgSWAJLIElgaV9+yHAAKuN9kl7KubPAAAAAElFTkSuQmCC"},NAB4:function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("/5sW"),a={name:"NavBar",data:function(){return{projectName:"MyMelody"}}},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("nav",{staticClass:"container"},[i("h1",[t._v(t._s(t.projectName))]),t._v(" "),i("router-link",{attrs:{to:"/about"}},[t._v("About")]),t._v(" "),i("router-link",{attrs:{to:"/team"}},[t._v("Team")])],1)},r=[],o=i("XyMi");function l(t){i("ImIo")}var u=!1,c=l,d="data-v-054748db",m=null,h=Object(o["a"])(a,n,r,u,c,d,m),g=h.exports,A={components:{NavBar:g}},p=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("NavBar"),t._v(" "),i("router-view")],1)},v=[];function f(t){i("Wlo7")}var b=!1,S=f,C=null,W=null,B=Object(o["a"])(A,p,v,b,S,C,W),w=B.exports,Y=i("/ocq"),E=(i("EuXz"),{name:"track-card",props:{title:String,artist:String,albumArt:{default:i("LTER"),type:String}}}),J=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("img",{attrs:{src:t.albumArt,alt:t.title}}),t._v(" "),i("h1",[t._v(t._s(t.title))]),t._v(" "),i("h2",[t._v(t._s(t.artist))])])},k=[];function y(t){i("KwYN")}var L=!1,I=y,_="data-v-6252e866",M=null,F=Object(o["a"])(E,J,k,L,I,_,M),G=F.exports,R=i("mtWM"),q=i.n(R),N={name:"search-dialog",components:{TrackCard:G},data:function(){return{query:null,noResults:!1,tracks:null,selectedTrack:null}},methods:{search:function(){var t=this;this.selectedTrack=null;var e="BQB5GSPqv7FgunxGnMngtq2xxrJ085eeuCTCSrucraDqy1IJUTwWntpLibIoAUtN06q1fcKP4oQqjTLMTQ0lEmldG7N-1JAjmbMFhjinoG8LGNgM4hQou0XoX9UUrkta2h-bTmHfyTmRUz6U";q.a.get("https://api.spotify.com/v1/search?q=".concat(this.query,"&type=track"),{headers:{Accept:"application/json",Authorization:"Bearer ".concat(e)}}).then(function(e){var i=e.data.tracks.items;t.noResults=!(i.length>0),t.tracks=i.map(function(t){return{service:"Spotify",title:t.name,artist:t.artists.map(function(t){return t.name}).join(", "),albumArt:t.album.images?t.album.images[0].url:null,id:t.id}})}).catch(function(t){return console.error(t)})},select:function(t){this.selectedTrack=t},commit:function(){this.$store.commit("selectTrack",this.selectedTrack),this.$store.commit("postModalState","add")}}},U=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.query,expression:"query"}],staticClass:"search-box",attrs:{placeholder:"Search"},domProps:{value:t.query},on:{input:function(e){e.target.composing||(t.query=e.target.value)}}}),i("button",{staticClass:"search-btn",on:{click:t.search}},[i("icon",{attrs:{name:"search"}})],1),t._v(" "),i("div",{staticClass:"results"},[t.tracks?t._e():i("p",[t._v("Search for a song or artist.")]),t._v(" "),t.noResults?i("div",{staticClass:"noresults"},[i("p",[t._v("No results found.")])]):t._e(),t._v(" "),i("transition-group",{staticClass:"transition",attrs:{name:"fade"}},t._l(t.tracks,function(e){return i("div",{key:e.id,staticClass:"result"},[i("track-card",{attrs:{title:e.title,artist:e.artist,albumArt:e.albumArt}}),t._v(" "),i("button",{staticClass:"select",on:{click:function(i){t.select(e)}}},[t._v("Select")])],1)}))],1),t._v(" "),i("button",{staticClass:"continue",attrs:{disabled:!t.selectedTrack},on:{click:t.commit}},[t._v("Continue")])])},V=[];function Z(t){i("oJBa")}var j=!1,Q=Z,x="data-v-549fb0d0",D=null,T=Object(o["a"])(N,U,V,j,Q,x,D),P=T.exports,z={name:"add-post-dialog",data:function(){return{caption:null}},computed:{track:function(){return this.$store.getters.selectedTrack}},methods:{post:function(){console.log({track:this.$store.getters.selectedTrack,caption:this.caption}),this.$store.commit("postModalState",null)},back:function(){this.$store.commit("postModalState","search")}},components:{TrackCard:G}},O=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container"},[i("track-card",{attrs:{title:t.track.title,artist:t.track.artist,albumArt:t.track.albumArt}}),t._v(" "),i("div",{staticClass:"caption"},[i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.caption,expression:"caption"}],attrs:{placeholder:"Add a caption..."},domProps:{value:t.caption},on:{input:function(e){e.target.composing||(t.caption=e.target.value)}}}),t._v(" "),i("div",[i("button",{on:{click:t.back}},[t._v("Back")]),t._v(" "),i("button",{on:{click:t.post}},[t._v("Add Post")])])])],1)},X=[];function H(t){i("NxZd")}var K=!1,$=H,tt="data-v-f7315990",et=null,it=Object(o["a"])(z,O,X,K,$,tt,et),st=it.exports,at={name:"home",data:function(){return{}},computed:{dialogState:function(){return this.$store.getters.postModalState}},components:{SearchDialog:P,AddPostDialog:st},methods:{toggleModal:function(){var t=null;this.dialogState||(t="search"),this.$store.commit("postModalState",t)}}},nt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"home"},[i("button",{on:{click:t.toggleModal}},[t._v("Add Post")]),t._v(" "),i("p",[t._v("\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis finibus quam. In quis hendrerit sapien, sit amet consectetur nulla. Donec sed purus id mauris lacinia tincidunt in volutpat tortor. Sed vitae nulla ex. Vestibulum faucibus justo at posuere laoreet. Sed quis pulvinar dolor. Curabitur tristique scelerisque mauris, ut hendrerit leo ultricies a. Ut gravida interdum elit. Nullam quis leo condimentum, cursus libero non, tincidunt nibh. Sed at massa purus. Etiam risus elit, condimentum eget risus tincidunt, finibus cursus odio. Morbi sem odio, malesuada quis lacinia at, congue eu risus.\n\nMaecenas ut metus at felis accumsan elementum. Donec ac rhoncus eros. Nullam et luctus ipsum. Praesent eros purus, auctor euismod leo eget, accumsan varius nibh. Etiam mollis diam maximus eros gravida vestibulum. Vestibulum ut facilisis enim, vitae bibendum justo. Morbi ac eros mauris. Cras nec molestie nibh, vitae commodo dolor.\n\nSuspendisse ut aliquet sapien, at hendrerit lorem. Donec lobortis mattis erat, quis accumsan nulla aliquet sed. Nunc elementum dolor eget imperdiet tempor. Phasellus ornare neque justo, ac tempor velit cursus id. Maecenas rutrum est nisl, eu commodo eros interdum in. Duis vel lobortis enim. Vivamus dolor velit, mattis vel nulla non, dignissim bibendum libero. Etiam vestibulum viverra turpis, id congue mi congue nec. Suspendisse vitae aliquam risus. Cras ut est ut eros auctor sagittis. Integer gravida nunc risus, eget eleifend mi auctor eu.\n\nSed volutpat faucibus porta. Phasellus pretium sapien tellus, ac tristique eros varius sit amet. Aenean a tellus convallis, porta nisi id, venenatis arcu. Suspendisse faucibus molestie nibh, non eleifend massa cursus bibendum. Phasellus feugiat semper tortor, sit amet feugiat lacus laoreet sed. Nulla scelerisque dui quis consectetur hendrerit. Praesent facilisis, odio ut tempus condimentum, quam nisi efficitur leo, in ultricies eros turpis vitae est. Duis scelerisque dignissim tempus. Vestibulum scelerisque ante ut arcu mattis vehicula.\n\nVestibulum odio mauris, rutrum eu dapibus non, consectetur consequat dui. Donec lobortis ligula et tellus accumsan convallis et sed dolor. Nam sapien est, feugiat sed ex sit amet, tristique bibendum massa. Nam sed augue mollis sem lobortis tincidunt vel at nisi. Maecenas ac ante id odio accumsan semper eget ut tellus. Aliquam gravida tempus diam, eu vehicula tortor rutrum vitae. Praesent faucibus non libero vitae rhoncus. Proin laoreet neque ut faucibus molestie. Quisque vitae diam odio. Aenean semper orci id tellus convallis, nec rutrum lectus molestie. Maecenas magna nisl, congue vitae congue sed, molestie ut lectus. Vestibulum in cursus diam. Pellentesque rutrum nibh sem, ac fringilla augue molestie at.")]),t._v(" "),i("transition",{attrs:{name:"fade"}},[t.dialogState?i("div",{staticClass:"modal"},[i("button",{staticClass:"close",on:{click:t.toggleModal}},[t._v("×")]),t._v(" "),i("transition",{attrs:{name:"fade",mode:"out-in"}},["search"===t.dialogState?i("search-dialog"):t._e(),t._v(" "),"add"===t.dialogState?i("add-post-dialog"):t._e()],1)],1):t._e()])],1)},rt=[];function ot(t){i("nr/U")}var lt=!1,ut=ot,ct="data-v-6d3ed8dc",dt=null,mt=Object(o["a"])(at,nt,rt,lt,ut,ct,dt),ht=mt.exports,gt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},At=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"about"},[i("h1",[t._v("This is an about page")])])}],pt=null,vt=!1,ft=null,bt=null,St=null,Ct=Object(o["a"])(pt,gt,At,vt,ft,bt,St),Wt=Ct.exports,Bt={name:"team",components:{}},wt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Yt=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"about"},[i("h1",[t._v("This is a team page")])])}],Et=!1,Jt=null,kt=null,yt=null,Lt=Object(o["a"])(Bt,wt,Yt,Et,Jt,kt,yt),It=Lt.exports,_t={name:"landing",data:function(){return{headline:"Discover and share music with your friends.",subhead:"The easiest way to search for your favorite melodies."}}},Mt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("header",[s("h1",[t._v(t._s(t.headline))]),t._v(" "),s("h2",[t._v(t._s(t.subhead))])]),t._v(" "),t._m(0),t._v(" "),s("img",{staticClass:"background",attrs:{src:i("uGhQ")}})])},Ft=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"auth"},[i("button",{staticClass:"signup"},[t._v("Sign Up")]),t._v(" "),i("div",{staticClass:"divider"},[i("hr"),t._v(" "),i("p",[t._v("Already have an account?")]),t._v(" "),i("hr")]),t._v(" "),i("button",{staticClass:"login"},[t._v("Log In")])])}];function Gt(t){i("NAB4")}var Rt=!1,qt=Gt,Nt="data-v-634d2f5c",Ut=null,Vt=Object(o["a"])(_t,Mt,Ft,Rt,qt,Nt,Ut),Zt=Vt.exports;s["a"].use(Y["a"]);var jt=new Y["a"]({mode:"history",routes:[{path:"/",name:"landing",component:Zt},{path:"/home",name:"home",component:ht},{path:"/about",name:"about",component:Wt},{path:"/team",name:"team",component:It}]}),Qt=i("NYxO");s["a"].use(Qt["a"]);var xt=new Qt["a"].Store({state:{selectedTrack:{title:null,artist:null},postModalState:null,postModalOpen:!1},mutations:{selectTrack:function(t,e){t.selectedTrack=e},postModalState:function(t,e){t.postModalState=e}},actions:{},getters:{selectedTrack:function(t){return t.selectedTrack},postModalState:function(t){return t.postModalState}}}),Dt=(i("D/PP"),i("D4uH"));s["a"].config.productionTip=!1,s["a"].component("icon",Dt["a"]),new s["a"]({router:jt,store:xt,render:function(t){return t(w)}}).$mount("#app")},NxZd:function(t,e){},Wlo7:function(t,e){},"nr/U":function(t,e){},oJBa:function(t,e){},ts02:function(t,e){},uGhQ:function(t,e,i){t.exports=i.p+"img/PersonMusic.95d357af.png"}},[0]);
//# sourceMappingURL=app.110af050.js.map