(function(t){function e(e){for(var a,s,o=e[0],c=e[1],l=e[2],h=0,d=[];h<o.length;h++)s=o[h],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&d.push(n[s][0]),n[s]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(d.length)d.shift()();return r.push.apply(r,l||[]),i()}function i(){for(var t,e=0;e<r.length;e++){for(var i=r[e],a=!0,o=1;o<i.length;o++){var c=i[o];0!==n[c]&&(a=!1)}a&&(r.splice(e--,1),t=s(s.s=i[0]))}return t}var a={},n={app:0},r=[];function s(e){if(a[e])return a[e].exports;var i=a[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,s),i.l=!0,i.exports}s.m=t,s.c=a,s.d=function(t,e,i){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(i,a,function(e){return t[e]}.bind(null,a));return i},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/flappy-learning/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;r.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("cd49")},1:function(t,e){},2:function(t,e){},3:function(t,e){},4:function(t,e){},5:function(t,e){},"5c0b":function(t,e,i){"use strict";var a=i("e332"),n=i.n(a);n.a},6:function(t,e){},7:function(t,e){},8:function(t,e){},b07e:function(t,e,i){},cd49:function(t,e,i){"use strict";i.r(e);i("14c6"),i("08c1"),i("4842"),i("d9fc");var a,n=i("2b0e"),r=i("5c96"),s=i.n(r),o=(i("0fae"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("el-alert",{attrs:{title:"教学模式下，按J跳跃，该模式将录入游戏数据，作为AI的训练数据",type:"info",center:"","show-icon":""}}),i("el-container",{staticStyle:{"margin-top":"8px"}},[i("el-aside",{attrs:{width:"540px"}},[i("canvas",{attrs:{id:"flappy",width:"500",height:"512","data-v-step":"3"}}),i("br"),i("el-radio-group",{attrs:{"data-v-step":"4"},on:{change:t.handleSpeedChange},model:{value:t.speedLevel,callback:function(e){t.speedLevel=e},expression:"speedLevel"}},[i("el-radio-button",{attrs:{label:"低速"}}),i("el-radio-button",{attrs:{label:"中速"}}),i("el-radio-button",{attrs:{label:"快速"}})],1)],1),i("el-container",[i("div",{staticStyle:{width:"100%"}},[i("span",{staticStyle:{"margin-right":"8px"}},[t._v("训练模型列表")]),i("el-tooltip",{attrs:{content:"查看新手引导",placement:"top"}},[i("i",{staticClass:"el-icon-question flappy-bird-help",on:{click:t.help}})]),i("el-button",{staticStyle:{"margin-left":"8px"},attrs:{icon:"el-icon-add","data-v-step":"1"},on:{click:function(e){t.createBirdModalVisible=!0}}},[t._v("创建一个新的模型")]),i("el-divider"),i("el-table",{staticStyle:{width:"100%"},attrs:{data:t.birds}},[i("el-table-column",{attrs:{prop:"createAt",label:"创建日期",align:"center",width:"180px"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("i",{staticClass:"el-icon-time"}),i("span",{staticStyle:{"margin-left":"10px"}},[t._v(t._s(t.$dayjs(e.row.createAt).format("YYYY-MM-DD HH:mm:ss")))])]}}])}),i("el-table-column",{attrs:{label:"最高得分",align:"center"}},[i("el-table-column",{attrs:{prop:"aiMaxScore",label:"电脑",align:"center",width:"120"}}),i("el-table-column",{attrs:{prop:"maxScore",label:"玩家",align:"center",width:"120"}})],1),i("el-table-column",{attrs:{label:"模型训练",align:"center"}},[i("el-table-column",{attrs:{prop:"trainCnt",label:"次数",align:"center",width:"90px"}}),i("el-table-column",{attrs:{prop:"trainDataCnt",label:"数据量",align:"center",width:"120px"}})],1),i("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-button",{attrs:{size:"mini",type:"success","data-v-step":"2"},on:{click:function(i){return t.teachBird(e.row)}}},[t._v("教学")]),i("el-button",{attrs:{size:"mini",type:"primary",loading:e.row.trainLoading,disabled:e.row.trainDataCnt<1,"data-v-step":"5"},on:{click:function(i){return t.trainBird(e.row)}}},[t._v("训练")]),i("el-button",{attrs:{size:"mini",type:"primary",disabled:e.row.trainCnt<1,"data-v-step":"7"},on:{click:function(i){return t.testBird(e.row)}}},[t._v("测试")]),i("el-button",{attrs:{size:"mini",type:"primary",disabled:e.row.trainCnt<1,"data-v-step":"6"},on:{click:function(i){return t.predictData(e.row)}}},[t._v("数据预测")]),i("el-button",{attrs:{size:"mini",type:"danger","data-v-step":"8"},on:{click:function(i){return t.removeBird(e.row)}}},[t._v("删除")])]}}])})],1)],1)])],1),i("bird-dialog",{on:{"on-bird-create":t.createBird},model:{value:t.createBirdModalVisible,callback:function(e){t.createBirdModalVisible=e},expression:"createBirdModalVisible"}}),i("predict-data",{attrs:{bird:t.currentBird},model:{value:t.predictDataVisible,callback:function(e){t.predictDataVisible=e},expression:"predictDataVisible"}}),i("v-tour",{attrs:{name:"myTour",steps:t.steps,callbacks:t.tourCallbacks}})],1)}),c=[],l=(i("96cf"),i("3b8d")),u=i("d225"),h=i("b0b4"),d=i("308d"),p=i("6bb5"),v=i("4e2b"),f=i("9ab4"),g=i("60a3"),b=function(){function t(e){Object(u["a"])(this,t),this.x=0,this.y=0,this.width=50,this.height=40,this.speed=3,Object.assign(this,e)}return Object(h["a"])(t,[{key:"update",value:function(){this.x-=this.speed}},{key:"isOut",value:function(){return this.x+this.width<0}}]),t}(),m=(i("ac6a"),i("013f")),y=function(){function t(e){Object(u["a"])(this,t),this.elements=new Array}return Object(h["a"])(t,[{key:"push",value:function(t){this.elements.push(t)}},{key:"pop",value:function(){if(this.elements.length>0){var t=this.elements[0];return this.elements.splice(0,1),t}}},{key:"size",value:function(){return this.elements.length}},{key:"empty",value:function(){return 0===this.size()}},{key:"clear",value:function(){delete this.elements,this.elements=new Array}}]),t}();(function(t){t[t["Memmory"]=0]="Memmory",t[t["LocalStorage"]=1]="LocalStorage",t[t["SessionStorage"]=2]="SessionStorage",t[t["IndexedDB"]=3]="IndexedDB"})(a||(a={}));var w=function(){function t(){Object(u["a"])(this,t)}return Object(h["a"])(t,[{key:"getId",value:function(){return this.id}},{key:"setId",value:function(t){this.id=t}},{key:"update",value:function(t){var e=this.getId();Object.assign(this,t),void 0!==e&&null!==e&&this.setId(e)}}]),t}(),S=function(t){function e(){var t,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return Object(u["a"])(this,e),t=Object(d["a"])(this,Object(p["a"])(e).call(this)),t.data=[],t.data=i,t}return Object(v["a"])(e,t),Object(h["a"])(e,null,[{key:"parse",value:function(t){var i=new e(t.data);return i.update(t),i}}]),e}(w),k=(i("7f7f"),i("7514"),i("20d6"),i("6b54"),function(){function t(e,i){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};Object(u["a"])(this,t),this.caches=[],this.lazy=!1,this.debounceTimeout=null,this.parse=function(t){return t},this.sequence=function(t){return t},this.name=e,this.type=i,Object.assign(this,a),this.syncStorageToCache()}return Object(h["a"])(t,[{key:"save",value:function(t){if(void 0===t.getId()||null===t.getId()){var e=this.caches[this.caches.length-1].getId(),i=e?parseInt(e.toString(),10):this.caches.length;t.setId(i+1)}try{this.findIndexById(t.getId()),this.update(t)}catch(a){this.caches.push(t)}return this.syncCacheToStorage(),t}},{key:"update",value:function(t){var e=this.findIndexById(t.getId()),i=this.caches[e];return i.update(t),this.caches.splice(e,1,i),this.syncCacheToStorage(),i}},{key:"remove",value:function(t){var e=this.findIndexById(t.getId());this.caches.splice(e,1),this.syncCacheToStorage()}},{key:"removeById",value:function(t){var e=this.findIndexById(t);this.caches.splice(e,1),this.syncCacheToStorage()}},{key:"findById",value:function(t){var e=this.findIndexById(t);return this.caches[e]}},{key:"findFirst",value:function(){return this.caches.length>0?this.caches[0]:null}},{key:"findLast",value:function(){return this.caches.length>0?this.caches[this.caches.length-1]:null}},{key:"findAll",value:function(){return this.caches}},{key:"size",value:function(){return this.caches.length}},{key:"clear",value:function(){this.caches=[],this.syncCacheToStorage()}},{key:"syncStorageToCache",value:function(){var t=this;this.caches=this.loadStorageData().map((function(e){return t.parse(e)}))}},{key:"syncCacheToStorage",value:function(){var t=this,e=function(){return t.saveStorageData(t.caches.map((function(e){return t.sequence(e)})))};this.lazy?(this.debounceTimeout&&clearTimeout(this.debounceTimeout),this.debounceTimeout=setTimeout(e,200)):e()}},{key:"findIndexById",value:function(t){if(void 0===t)throw new Error("CacheStore(".concat(this.name,") can not find with id undefined"));var e=this.caches.findIndex((function(e){return e.getId()===t}));if(e<0)throw new Error("CacheStore(".concat(this.name,") can not found item(").concat(t,"), it is not exist"));return e}}]),t}()),x=function(t){function e(t,i){return Object(u["a"])(this,e),Object(d["a"])(this,Object(p["a"])(e).call(this,t,a.Memmory,i))}return Object(v["a"])(e,t),Object(h["a"])(e,[{key:"loadStorageData",value:function(){return this.caches}},{key:"saveStorageData",value:function(t){}}]),e}(k),O=function(t){function e(t,i){return Object(u["a"])(this,e),Object(d["a"])(this,Object(p["a"])(e).call(this,t,a.LocalStorage,Object.assign({lazy:!0},i)))}return Object(v["a"])(e,t),Object(h["a"])(e,[{key:"loadStorageData",value:function(){var t=localStorage.getItem(this.name);if(t){var e=JSON.parse(t);return Array.isArray(e)?e:[]}return[]}},{key:"saveStorageData",value:function(t){t&&t.length>0?localStorage.setItem(this.name,JSON.stringify(t)):localStorage.removeItem(this.name)}}]),e}(k),j=function(t){function e(t,i){return Object(u["a"])(this,e),Object(d["a"])(this,Object(p["a"])(e).call(this,t,a.LocalStorage,Object.assign({lazy:!0},i)))}return Object(v["a"])(e,t),Object(h["a"])(e,[{key:"loadStorageData",value:function(){var t=sessionStorage.getItem(this.name);if(t){var e=JSON.parse(t);return Array.isArray(e)?e:[]}return[]}},{key:"saveStorageData",value:function(t){t&&t.length>0?sessionStorage.setItem(this.name,JSON.stringify(t)):sessionStorage.removeItem(this.name)}}]),e}(k),I=function(){function t(){Object(u["a"])(this,t)}return Object(h["a"])(t,null,[{key:"createMemmoryStore",value:function(e){return t.loadStore(e,a.Memmory,{})}},{key:"createStore",value:function(e,i,a){return t.loadStore(e,i,a)}},{key:"loadStore",value:function(e,i,n){var r=t.storeCaches.find((function(t){return t.name===e&&t.type===i}));if(r)return r;switch(i){case a.Memmory:r=new x(e,n);break;case a.LocalStorage:r=new O(e,n);break;case a.SessionStorage:r=new j(e,n);break;default:throw new Error("Store not support type:".concat(i,", see spports ").concat(JSON.stringify(a)))}return t.storeCaches.push(r),r}}]),t}();I.storeCaches=[];var C=i("0b53"),D=i("75f0"),B="bird-train-data",M="bird-model",T=3,_=function(t){function e(){var t,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(u["a"])(this,e),t=Object(d["a"])(this,Object(p["a"])(e).call(this)),t.x=80,t.y=250,t.width=40,t.height=30,t.alive=!0,t.gravity=0,t.velocity=.3,t.jump=-6,t.isdump=!1,t.score=0,t.maxScore=0,t.aiMaxScore=0,t.formatTrainData=null,t.useAI=!1,t.createAt=(new Date).getTime(),t.trainCnt=0,t.trainDataCnt=0,t.modelOptions=[{useBias:!0,units:4}],t.epochs=10,t.modelLoading=!1,t.trainLoading=!1,t.trainDataQueue=new y,t.throwTrainDataCount=260,t.init(),Object.assign(Object(m["a"])(t),i),i.id&&(t.setId(i.id),t.getModel()),t}return Object(v["a"])(e,t),Object(h["a"])(e,[{key:"init",value:function(){this.x=80,this.y=250,this.width=40,this.height=30,this.alive=!0,this.gravity=0,this.velocity=.3,this.jump=-6,this.isdump=!1}},{key:"flap",value:function(){this.isdump=!0,this.gravity=this.jump}},{key:"update",value:function(){this.gravity+=this.velocity,this.y+=this.gravity,this.isdump=!1}},{key:"isDead",value:function(t,e){var i=!1;for(var a in(this.y>=t||this.y+this.height<=0)&&(i=!0),e)this.x>e[a].x+e[a].width||this.x+this.width<e[a].x||this.y>e[a].y+e[a].height||this.y+this.height<e[a].y||(i=!0,this.trainDataQueue=new y);return i}},{key:"saveTrainData",value:function(t){if(!this.useAI&&(this.trainDataQueue.push(new S(t)),this.trainDataQueue.size()>this.throwTrainDataCount)){var e=this.trainDataQueue.pop();e&&(this.getTrainStorage().save(e),this.trainDataCnt++)}}},{key:"predict",value:function(t){var e=C["tensor2d"](t.slice(0,T),[1,T]);return this.model.predict(e).dataSync()}},{key:"judge",value:function(t){if(this.alive&&this.useAI&&this.model){var e=this.predict(t);return e[0]>e[1]}return!1}},{key:"train",value:function(){var t=Object(l["a"])(regeneratorRuntime.mark((function t(){var e,i,a,n,r,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.trainLoading=!0,e=this.createModel(),D["visor"]().open(),D["show"].modelSummary({name:"Modal Summary"},e),i=this.generatorTrainData(),a=i.inputs,n=i.labels,e.compile({optimizer:C["train"].adam(),loss:C["losses"].meanSquaredError,metrics:["mse"]}),r=this.epochs,t.next=9,e.fit(a,n,{epochs:r,shuffle:!0,callbacks:D["show"].fitCallbacks({name:"Training Performance"},["loss"],{height:200,callbacks:["onEpochEnd"]})});case 9:return s=t.sent,C["io"].removeModel("indexeddb://".concat(M,"-").concat(this.getId())),t.next=13,e.save("indexeddb://".concat(M,"-").concat(this.getId()));case 13:return this.trainCnt++,D["visor"]().isOpen()&&D["visor"]().close(),this.trainLoading=!1,this.model=e,t.abrupt("return",s);case 18:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"getTrainStorage",value:function(){return this.trainStorage?this.trainStorage:this.getId()?(this.trainStorage=I.createStore("".concat(B,"-").concat(this.getId()),a.LocalStorage,{parse:S.parse}),this.trainDataCnt=this.trainStorage.size(),this.trainStorage):(console.warn("load train storage failed, bird id is invalid"),I.createMemmoryStore(B))}},{key:"getModel",value:function(){var t=Object(l["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!this.model){t.next=2;break}return t.abrupt("return",this.model);case 2:if(this.modelLoading=!0,e=null,!this.getId()){t.next=14;break}return t.prev=5,t.next=8,C["loadLayersModel"]("indexeddb://".concat(M,"-").concat(this.getId()));case 8:e=t.sent,t.next=14;break;case 11:t.prev=11,t.t0=t["catch"](5),console.warn("load bird model failed with id = ".concat(this.getId()),t.t0);case 14:return null==e&&(e=this.createModel()),this.model=e,this.modelLoading=!1,t.abrupt("return",e);case 18:case"end":return t.stop()}}),t,this,[[5,11]])})));function e(){return t.apply(this,arguments)}return e}()},{key:"createModel",value:function(){var t=C["sequential"]();return t.add(C["layers"].dense({units:2,inputShape:[T],useBias:!0})),this.modelOptions.forEach((function(e){return t.add(C["layers"].dense(e))})),t.add(C["layers"].dense({units:2,useBias:!0})),t}},{key:"generatorTrainData",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(this.getTrainStorage(),null!==this.formatTrainData&&t)return this.formatTrainData;var e=this.getTrainStorage().findAll().map((function(t){return t.data}));if(e.length<1)throw new Error("训练数据不足");return C["tidy"]((function(){var t=function(t){var e=t.filter((function(t){return 0===t[3]})),i=t.filter((function(t){return 1===t[3]})),a=t.filter((function(t){return 0===t[3]}));return a.forEach((function(t,a){e.push(i[a%i.length])})),e},i=t(e);C["util"].shuffle(i);var a=i.map((function(t){return t.slice(0,T)})),n=i.map((function(t){return 1===t[3]?[1,0]:[0,1]})),r=C["tensor2d"](a,[a.length,T]),s=C["tensor2d"](n,[n.length,2]);return{inputs:r,labels:s}}))}}],[{key:"parse",value:function(t){return new e({id:t.id,maxScore:t.maxScore||0,aiMaxScore:t.aiMaxScore||0,createAt:t.createAt||(new Date).getTime(),trainCnt:t.trainCnt||0,trainDataCnt:t.trainDataCnt||0,modelOptions:t.modelOptions,epochs:t.epochs})}},{key:"sequence",value:function(t){return{id:t.getId(),maxScore:t.maxScore,aiMaxScore:t.aiMaxScore,createAt:t.createAt,trainCnt:t.trainCnt,trainDataCnt:t.trainDataCnt,modelOptions:t.modelOptions,epochs:t.epochs}}}]),e}(w),A=function t(){Object(u["a"])(this,t),this.width=500,this.height=512,this.spawnInterval=90,this.backgroundSpeed=.5,this.fps=60,this.birdImgUrl="./img/bird.png",this.backgroundImgUrl="./img/background.png",this.pipetopImgUrl="./img/pipetop.png",this.pipebottomImgUrl="./img/pipebottom.png"},z="flappy-bird-game-engine-birds",L=function(){function t(){var e=this,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"flappyBird",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new _({}),r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:new A;Object(u["a"])(this,t),this.birdStore=I.createStore(z,a.LocalStorage,{parse:_.parse,sequence:_.sequence,lazy:!1}),this.options=new A,this.width=0,this.height=0,this.pipes=[],this.interval=0,this.backgroundx=0,this.running=!1,this.initialized=!1,this.bird=n,this.options=r,Object.assign(this.options),this.domId=i,document.onkeydown=function(t){var i=window.event?t.keyCode:t.which;e.bird.alive&&74===i&&e.bird.flap()},this.canvas=document.querySelector("#".concat(this.domId)),this.canvas?(this.loadImages(),this.ctx=this.canvas.getContext("2d"),this.width=this.canvas.width,this.height=this.canvas.height):console.error("Load canvas error with dom id ".concat(this.domId))}return Object(h["a"])(t,[{key:"setBird",value:function(t){this.bird=t}},{key:"start",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],i=setInterval((function(){t.initialized&&(t.init(),t.running=!0,t.update(),t.display(),t.bird.useAI=e,clearInterval(i))}),100)}},{key:"stop",value:function(){this.running=!1,this.birdStore.save(this.bird)}},{key:"init",value:function(){this.interval=0,this.bird.score=0,this.pipes=[],this.bird.init()}},{key:"update",value:function(){var t=this,e=this.running,i=this.pipes,a=this.bird,n=this.options.spawnInterval,r=this.options.backgroundSpeed,s=this.options.height,o=this.options.width,c=this.options.fps;if(!1!==e){if(this.backgroundx+=r,a.alive){if(i.length>0){var l=this.generatorTrainData();a.judge(l)&&a.flap(),l.push(a.isdump?1:0),a.saveTrainData(l)}a.update(),a.isDead(s,i)&&(a.alive=!1,this.stop())}for(var u=0;u<i.length;u++)i[u].update(),i[u].isOut()&&(i.splice(u,1),u--);if(0===this.interval){var h=50,d=120,p=Math.round(Math.random()*(s-2*h-d))+h;i.push(new b({x:o,y:0,height:p})),i.push(new b({x:o,y:p+d,height:s}))}this.interval++,this.interval===n&&(this.interval=0),a.useAI?a.aiMaxScore=Math.max(++a.score,a.aiMaxScore):a.maxScore=Math.max(++a.score,a.maxScore),a.isdump=!1,setTimeout((function(){return t.update()}),1e3/c)}}},{key:"display",value:function(){var t=this,e=this.options.width,i=this.options.height,a=this.options.fps,n=this.backgroundImg,r=this.pipetopImg,s=this.pipebottomImg,o=this.birdImg,c=this.backgroundx,l=this.pipes,u=this.bird,h=this.ctx;h.clearRect(0,0,e,i);for(var d=0;d<Math.ceil(e/n.width)+1;d++)h.drawImage(n,d*n.width-Math.floor(c%n.width),0);for(var p=0;p<l.length;p++)p%2===0?h.drawImage(r,l[p].x,l[p].y+l[p].height-r.height,l[p].width,r.height):h.drawImage(s,l[p].x,l[p].y,l[p].width,r.height);h.fillStyle="#FFC600",h.strokeStyle="#CE9E00",u.alive&&(h.save(),h.translate(u.x+u.width/2,u.y+u.height/2),h.rotate(Math.PI/2*u.gravity/20),h.drawImage(o,-u.width/2,-u.height/2,u.width,u.height),h.restore()),h.fillStyle="white",h.font="20px Oswald, sans-serif",h.fillText("Score : "+u.score,10,25),h.fillText("Max Score : "+(u.useAI?u.aiMaxScore:u.maxScore),10,50),h.fillText("FPS : "+a,10,75),!1!==this.running&&requestAnimationFrame((function(){return t.display()}))}},{key:"findAllBirds",value:function(){return this.birdStore.findAll()}},{key:"removeBird",value:function(t){t.getTrainStorage().clear(),this.birdStore.remove(t)}},{key:"loadImages",value:function(){var t=this,e={birdImg:this.options.birdImgUrl,backgroundImg:this.options.backgroundImgUrl,pipetopImg:this.options.pipetopImgUrl,pipebottomImg:this.options.pipebottomImgUrl},i={},a=0,n=0;for(var r in e){a++;var s=new Image;s.src=e[r],s.onload=function(){n++,n===a&&(Object.assign(t,i),t.initialized=!0,t.display())},i[r]=s}}},{key:"generatorTrainData",value:function(){for(var t=this.pipes,e=this.bird.x,i=this.bird.y,a=t[0],n=0;n<t.length;n+=2)if(t[n].x+t[n].width>e){a=t[n];break}return[i/this.height,a.height/this.height,e/(a.x+a.width)]}}]),t}(),E=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("el-dialog",{attrs:{title:"\b模型配置",visible:t.visible,"before-close":function(){return t.visible=!1}}},[i("el-steps",{attrs:{active:t.step,"align-center":""}},[i("el-step",{attrs:{title:"神经网络模型配置",description:"配置机器学习模型的隐藏层数目与其神经元数量",icon:"el-icon-setting"}}),i("el-step",{attrs:{title:"训练迭代次数配置",description:"配置机器学习的迭代次数，次数越多训练所消耗的时间越长",icon:"el-icon-refresh"}})],1),i("div",{staticClass:"bird-dialog-content"},[i("div",{directives:[{name:"show",rawName:"v-show",value:1===t.step,expression:"step === 1"}]}),i("div",{directives:[{name:"show",rawName:"v-show",value:2===t.step,expression:"step === 2"}]},[i("span",[t._v("请设置迭代次数：")]),i("el-input-number",{attrs:{size:"small",min:10,max:100,step:5},model:{value:t.epochs,callback:function(e){t.epochs=e},expression:"epochs"}})],1)]),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(e){t.visible=!1}}},[t._v("取 消")]),i("el-button",{directives:[{name:"show",rawName:"v-show",value:t.step>1,expression:"step > 1"}],attrs:{type:"primary",disabled:t.step<=1},on:{click:t.prev}},[t._v("上一步")]),i("el-button",{directives:[{name:"show",rawName:"v-show",value:t.step<t.maxStep,expression:"step < maxStep"}],attrs:{type:"primary",disabled:t.step>=t.maxStep},on:{click:t.next}},[t._v("下一步")]),i("el-button",{directives:[{name:"show",rawName:"v-show",value:t.step===t.maxStep,expression:"step === maxStep"}],attrs:{type:"success"},on:{click:t.complete}},[t._v("完成")])],1)],1)},N=[],P=function(t){function e(){var t;return Object(u["a"])(this,e),t=Object(d["a"])(this,Object(p["a"])(e).apply(this,arguments)),t.value=!1,t.visible=!1,t.step=1,t.maxStep=2,t.epochs=10,t.drawerVisible=!0,t.unitForm={},t}return Object(v["a"])(e,t),Object(h["a"])(e,[{key:"valueChange",value:function(t){t&&(this.step=1),this.visible=t}},{key:"visibleChange",value:function(t){this.$emit("input",t)}},{key:"prev",value:function(){this.step--}},{key:"next",value:function(){this.step++}},{key:"complete",value:function(){this.visible=!1,this.$emit("on-bird-create",new _({epochs:this.epochs,modelOptions:[{useBias:!0,units:4}]}))}}]),e}(g["c"]);Object(f["b"])([Object(g["b"])(Boolean)],P.prototype,"value",void 0),Object(f["b"])([Object(g["d"])("value")],P.prototype,"valueChange",null),Object(f["b"])([Object(g["d"])("visible")],P.prototype,"visibleChange",null),P=Object(f["b"])([g["a"]],P);var V=P,q=V,$=(i("e1ba"),i("2877")),J=Object($["a"])(q,E,N,!1,null,null,null),U=J.exports,R=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("el-drawer",{attrs:{visible:t.visible,size:"45%"},on:{"update:visible":function(e){t.visible=e}}},[i("div",{attrs:{slot:"title"},slot:"title"},[i("span",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}]},[t._v("正在执行预测")]),i("span",{directives:[{name:"show",rawName:"v-show",value:!t.loading,expression:"!loading"}]},[t._v("预测完成，共采用"+t._s(t.sampleSize)+"条预测样本，成功预测"+t._s(t.sampleSize-t.predictData.length)+"条，以下是错误的预测结果数据")])]),i("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],attrs:{data:t.predictData,"max-height":"580"}},[i("el-table-column",{attrs:{label:"输入值",align:"center"}},[i("el-table-column",{attrs:{prop:"x1",label:"小鸟高度",align:"center"}}),i("el-table-column",{attrs:{prop:"x2",label:"障碍高度",align:"center"}}),i("el-table-column",{attrs:{prop:"x3",label:"障碍距离",align:"center"}})],1),i("el-table-column",{attrs:{label:"预测值",align:"center"}},[i("el-table-column",{attrs:{prop:"y1",label:"跳跃概率",align:"center"}}),i("el-table-column",{attrs:{prop:"y2",label:"不变概率",align:"center"}})],1),i("el-table-column",{attrs:{label:"正确操作",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("span",[t._v(t._s(1===e.row.correct?"应该跳跃":"应该保持"))])]}}])})],1)],1)},F=[],Q=function(t){function e(){var t;return Object(u["a"])(this,e),t=Object(d["a"])(this,Object(p["a"])(e).apply(this,arguments)),t.value=!1,t.sampleSize=0,t.visible=!1,t.loading=!1,t.predictData=[],t}return Object(v["a"])(e,t),Object(h["a"])(e,[{key:"valueChange",value:function(t){var e=this;this.visible=t,t&&(this.loading=!0,setTimeout((function(){e.loadPredictData()}),100))}},{key:"visibleChange",value:function(t){this.$emit("input",t)}},{key:"loadPredictData",value:function(){var t=this,e=this.bird.getTrainStorage().findAll(),i=[],a=2e3;if(this.sampleSize=a,e.length<a)this.sampleSize=e.length,i=e;else for(var n=0;n<a;n++){var r=Math.floor(Math.random()*e.length);i.push(e[r]),e.splice(r,1)}this.predictData=i.map((function(e){var i=e.data,a=t.bird.predict([i[0],i[1],i[2]]);return{x1:i[0],x2:i[1],x3:i[2],y1:a[0],y2:a[1],correct:i[3],prediction:a[0]>a[1]?1:0}})).filter((function(t){return t.correct!==t.prediction})),this.loading=!1}}]),e}(g["c"]);Object(f["b"])([Object(g["b"])(Boolean)],Q.prototype,"value",void 0),Object(f["b"])([Object(g["b"])(_)],Q.prototype,"bird",void 0),Object(f["b"])([Object(g["d"])("value")],Q.prototype,"valueChange",null),Object(f["b"])([Object(g["d"])("visible")],Q.prototype,"visibleChange",null),Q=Object(f["b"])([g["a"]],Q);var Y=Q,H=Y,G=Object($["a"])(H,R,F,!1,null,null,null),K=G.exports,W=function(t){function e(){var t;return Object(u["a"])(this,e),t=Object(d["a"])(this,Object(p["a"])(e).apply(this,arguments)),t.game=null,t.birds=[],t.speedLevel="低速",t.createBirdModalVisible=!1,t.systemCreateBird=null,t.predictDataVisible=!1,t.currentBird=null,t.tourCallbacks={onStart:function(){if(t.birds.length<1){var e=new _;t.createBird(e),t.systemCreateBird=e}},onStop:function(e){localStorage.setItem("guide","true"),t.systemCreateBird&&(t.removeBird(t.systemCreateBird),t.systemCreateBird=null)}},t.steps=[{target:'[data-v-step="1"]',content:"首先，<strong>点击此处创建一个新的机器模型</strong>!"},{target:'[data-v-step="2"]',content:"<strong>开始一局游戏教学<br>将生产一些游戏数据提供给机器学习</strong>"},{target:'[data-v-step="3"]',content:"按J使小鸟跳跃避免撞击障碍物!<br>建议至少产生3,000条的数据提供给机器学习"},{target:'[data-v-step="4"]',content:"点此调整游戏运行的速度"},{target:'[data-v-step="5"]',content:"点此基于当前的数据进行模型训练<br>训练完成后将自动使用该模型测试游戏"},{target:'[data-v-step="6"]',content:"点此使用样本数据测试训练完成的模型"},{target:'[data-v-step="7"]',content:"点此使训练完成的机器开始一轮新的游戏"},{target:'[data-v-step="8"]',content:"点此从本地存储中删除此模型"}],t}return Object(v["a"])(e,t),Object(h["a"])(e,[{key:"help",value:function(){this.$tours["myTour"].start()}},{key:"predictData",value:function(t){this.currentBird=t,this.predictDataVisible=!0}},{key:"start",value:function(){this.game.start()}},{key:"handleSpeedChange",value:function(t){switch(t){case"中速":return 8e3;case"快速":return 800;default:return 60}this.game.display()}},{key:"createBird",value:function(t){this.game.birdStore.save(t)}},{key:"teachBird",value:function(t){this.game.setBird(t),this.game.start(!1)}},{key:"trainBird",value:function(){var t=Object(l["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.train();case 2:this.game.setBird(e),this.game.start(!0);case 4:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()},{key:"testBird",value:function(t){this.game.setBird(t),this.game.start(!0)}},{key:"removeBird",value:function(t){this.game.removeBird(t)}},{key:"mounted",value:function(){this.game=new L("flappy"),this.birds=this.game.findAllBirds(),localStorage.getItem("guide")||this.help()}}]),e}(g["c"]);W=Object(f["b"])([Object(g["a"])({components:{BirdDialog:U,PredictData:K}})],W);var X=W,Z=X,tt=(i("5c0b"),Object($["a"])(Z,o,c,!1,null,null,null)),et=tt.exports,it=i("5a0c"),at=i.n(it),nt=i("2536"),rt=i.n(nt);i("2440"),n["default"].config.productionTip=!1,n["default"].use(s.a),n["default"].use(rt.a),n["default"].prototype.$dayjs=at.a,new n["default"]({render:function(t){return t(et)}}).$mount("#app")},e1ba:function(t,e,i){"use strict";var a=i("b07e"),n=i.n(a);n.a},e332:function(t,e,i){}});
//# sourceMappingURL=app.e15d94bf.js.map