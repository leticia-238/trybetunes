(this.webpackJsonptrybetunes=this.webpackJsonptrybetunes||[]).push([[0],{32:function(e,t,a){},34:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){"use strict";a.r(t);var n=a(1),i=a.n(n),s=a(23),r=a.n(s),c=a(7),o=a(2),u=a(3),l=a(5),d=a(4),j=a(13),m=a(6),b=a(9),h=a.n(b),p=a(14),O=a(15),f=a(21),v="user",g=function(e){return localStorage.setItem(v,JSON.stringify(e))},x=function(e){return function(t){setTimeout((function(){t(e)}),1500)}},N=function(){return new Promise((function(e){var t=JSON.parse(localStorage.getItem(v));null===t&&(t={}),x(t)(e)}))},k=function(e){return new Promise((function(t){g(Object(c.a)(Object(c.a)({},{name:"",email:"",image:"",description:""}),e)),x("OK")(t)}))},y=(a(32),a(0)),I=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return Object(y.jsx)("p",{className:"loading",children:"Carregando..."})}}]),a}(i.a.Component),S=I,C=a.p+"static/media/LogoTrybeTunes.396d23d3.svg",F=(a(34),function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).isMount=!1,e.handleInput=function(t){var a=t.target;e.setState(Object(O.a)({},a.name,a.value))},e.saveUserOnClick=function(){var t=Object(p.a)(h.a.mark((function t(a){var n;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({saveUserIsloading:!0}),t.next=3,k({name:a});case 3:n=t.sent,e.isMount&&e.setState({saveUserIsFinished:"OK"===n});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.state={loginName:"",saveUserIsloading:!1,saveUserIsFinished:!1},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.isMount=!0}},{key:"componentWillUnmount",value:function(){this.isMount=!1}},{key:"render",value:function(){var e=this,t=this.state,a=t.loginName,n=t.saveUserIsloading,i=t.saveUserIsFinished,s=Object.assign({},this.props);return Object(y.jsx)(f.Route,Object(c.a)(Object(c.a)({},s),{},{children:i?Object(y.jsx)(f.Redirect,{to:"".concat(le,"/search")}):Object(y.jsxs)("div",{"data-testid":"page-login",className:"page-login",children:[Object(y.jsx)("img",{src:C,alt:"Logo TrybeTunes",className:"logo"}),n?Object(y.jsx)(S,{}):Object(y.jsxs)("form",{className:"form-box",children:[Object(y.jsx)("input",{type:"text","data-testid":"login-name-input",id:"login-name-input",name:"loginName",value:a,onChange:this.handleInput,placeholder:"Nome de usu\xe1rio",className:"input-field"}),Object(y.jsx)("button",{type:"button","data-testid":"login-submit-button",disabled:a.length<3,onClick:function(){return e.saveUserOnClick(a)},className:"btn",children:"Entrar"})]})]})}))}}]),a}(i.a.Component)),L=F,w=a.p+"static/media/LogoHeader.ee1ea554.svg",M=(a(43),a.p+"static/media/user-icon.ef664ff5.png"),U=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).state={user:!1},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;N().then((function(t){e.setState({user:t})}))}},{key:"render",value:function(){var e=this.state.user;return Object(y.jsx)("div",{children:e?Object(y.jsxs)(y.Fragment,{children:[Object(y.jsxs)("header",{"data-testid":"header-component",className:"header",children:[Object(y.jsx)("img",{src:w,alt:"Logo TrybeTunes",className:"logo-header"}),Object(y.jsxs)("div",{className:"user-box-header",children:[Object(y.jsx)("div",{className:"header-user-image",children:Object(y.jsx)("img",{src:e.image?e.image:M,alt:"Imagem do usu\xe1rio"})}),Object(y.jsx)("p",{"data-testid":"header-user-name",className:"header-user-name",children:e.name})]})]}),Object(y.jsxs)("nav",{className:"nav-bar",children:[Object(y.jsx)(j.b,{to:"".concat(le,"/search"),"data-testid":"link-to-search",className:"nav-link",children:"Pesquisa"}),Object(y.jsx)(j.b,{to:"".concat(le,"/favorites"),"data-testid":"link-to-favorites",className:"nav-link",children:"Favoritas"}),Object(y.jsx)(j.b,{to:"".concat(le,"/profile"),"data-testid":"link-to-profile",className:"nav-link",children:"Perfil"})]})]}):Object(y.jsx)(S,{})})}}]),a}(i.a.Component),D=function(){var e=Object(p.a)(h.a.mark((function e(t){var a,n,i,s,r,c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=encodeURI(t).replaceAll("%20","+"),n="https://itunes.apple.com/search?entity=album&term=".concat(a,"&attribute=allArtistTerm"),e.next=4,fetch(n);case 4:return i=e.sent,e.next=7,i.json();case 7:return s=e.sent,r=s.results,c=r.map((function(e){return{artistId:e.artistId,artistName:e.artistName,collectionId:e.collectionId,collectionName:e.collectionName,collectionPrice:e.collectionPrice,artworkUrl100:e.artworkUrl100,releaseDate:e.releaseDate,trackCount:e.trackCount}})),e.abrupt("return",c);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),A=D,P=a(16),R=(a(44),function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var e=this.props,t=e.artistName,a=e.collectionName,n=e.artworkUrl100;return Object(y.jsxs)("div",{className:"album-card",children:[Object(y.jsx)("img",{src:n,alt:a,className:"album-image"}),Object(y.jsxs)("div",{className:"album-info",children:[Object(y.jsx)("h3",{"data-testid":"album-name",className:"album-name",children:a}),Object(y.jsx)("p",{"data-testid":"artist-name",className:"artist-name",children:t})]})]})}}]),a}(i.a.Component));R.defaultProps={artworkUrl100:""};var T=R,J=["collectionId"],K=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var e=this.props.albumData;return Object(y.jsx)("div",{className:"container",children:e.length>0?e.map((function(e){var t=e.collectionId,a=Object(P.a)(e,J);return Object(y.jsx)(j.b,{to:"".concat(le,"/album/").concat(t),"data-testid":"link-to-album-".concat(t),children:Object(y.jsx)(T,Object(c.a)({},a))},t)})):Object(y.jsx)("span",{children:"Nenhum \xe1lbum foi encontrado"})})}}]),a}(i.a.Component),W=K,E=(a(45),function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).isMount=!1,e.handleInput=function(t){var a=t.target,n=a.name,i=a.value;e.setState(Object(O.a)({},n,i))},e.searchArtist=function(){var t=Object(p.a)(h.a.mark((function t(a){var n;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({artistName:"",searchArtistIsLoading:!0,saveArtistName:a}),t.next=3,A(a);case 3:n=t.sent,e.isMount&&e.setState({searchArtistIsLoading:!1,searchArtistIsFinished:!0,albumData:n});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.state={artistName:"",searchArtistIsLoading:!1,searchArtistIsFinished:!1,albumData:[],saveArtistName:""},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.isMount=!0}},{key:"componentWillUnmount",value:function(){this.isMount=!1}},{key:"render",value:function(){var e=this,t=this.state,a=t.artistName,n=t.searchArtistIsLoading,i=t.searchArtistIsFinished,s=t.albumData,r=t.saveArtistName;return Object(y.jsxs)("div",{"data-testid":"page-search",children:[Object(y.jsx)(U,{}),n?Object(y.jsx)(S,{}):Object(y.jsxs)(y.Fragment,{children:[Object(y.jsxs)("form",{className:"search-box",children:[Object(y.jsx)("input",{type:"text","data-testid":"search-artist-input",id:"search-artist-input",name:"artistName",value:a,onChange:this.handleInput,placeholder:"Nome do Artista",className:"input-field"}),Object(y.jsx)("button",{type:"button","data-testid":"search-artist-button",onClick:function(){return e.searchArtist(a)},disabled:a.length<2,className:"btn",children:"Pesquisar"})]}),i?Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)("p",{children:"Resultado de \xe1lbuns de: ".concat(r)}),Object(y.jsx)(W,{albumData:s})]}):""]})]})}}]),a}(i.a.Component)),q=E,B=function(){var e=Object(p.a)(h.a.mark((function e(t){var a,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://itunes.apple.com/lookup?id=".concat(t,"&entity=song"));case 2:return a=e.sent,e.next=5,a.json();case 5:return n=e.sent,e.abrupt("return",n.results);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),H=B,_=a(26),z="favorite_songs";JSON.parse(localStorage.getItem(z))||localStorage.setItem(z,JSON.stringify([]));var G=function(){return JSON.parse(localStorage.getItem(z))},Q=function(e){return localStorage.setItem(z,JSON.stringify(e))},V=function(e){return function(t){setTimeout((function(){t(e)}),500)}},X=function(){return new Promise((function(e){var t=G();V(t)(e)}))},Y=function(e){return new Promise((function(t){if(e){var a=G();Q([].concat(Object(_.a)(a),[e]))}V("OK")(t)}))},Z=function(e){return new Promise((function(t){var a=G();Q(a.filter((function(t){return t.trackId!==e.trackId}))),V("OK")(t)}))},$=(a(46),function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).isMount=!1,e.checkFavoriteSong=function(){var t=Object(p.a)(h.a.mark((function t(a){var n,i,s,r,c,o;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=a.target.checked,e.setState({favoriteSong:n,addSongIsLoading:!0}),i=e.props,s=i.trackName,r=i.previewUrl,c=i.trackId,o=i.removeFromFavorites,!n){t.next=8;break}return t.next=6,Y({trackName:s,previewUrl:r,trackId:c});case 6:t.next=11;break;case 8:return t.next=10,Z({trackName:s,previewUrl:r,trackId:c});case 10:o(c);case 11:e.isMount&&e.setState({addSongIsLoading:!1});case 12:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.state={favoriteSong:!1,addSongIsLoading:!1},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.isMount=!0;var t=this.props.trackId;X().then((function(a){e.isMount&&e.setState({favoriteSong:a.map((function(e){return e.trackId})).includes(t)})}))}},{key:"componentWillUnmount",value:function(){this.isMount=!1}},{key:"render",value:function(){var e=this.props,t=e.trackName,a=e.previewUrl,n=e.trackId,i=this.state,s=i.favoriteSong,r=i.addSongIsLoading;return Object(y.jsx)("div",{children:r?Object(y.jsx)(S,{}):Object(y.jsxs)("div",{className:"music-card",children:[Object(y.jsx)("h3",{className:"music-name",children:t}),Object(y.jsxs)("audio",{"data-testid":"audio-component",src:a,controls:!0,children:[Object(y.jsx)("track",{kind:"captions"}),"O seu navegador n\xe3o suporta o elemento",Object(y.jsx)("code",{children:"audio"}),"."]}),Object(y.jsxs)("label",{className:"label-favorite",htmlFor:"checkbox-music-".concat(n),children:[Object(y.jsx)("span",{children:"Favorita"}),Object(y.jsx)("input",{type:"checkbox",id:"checkbox-music-".concat(n),"data-testid":"checkbox-music-".concat(n),checked:s,onChange:this.checkFavoriteSong,className:"checkbox-favorite"})]})]})})}}]),a}(i.a.Component)),ee=$,te=["songsList"],ae=["trackId"],ne=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).state={songsList:[],artistName:"",collectionName:"",artworkUrl100:""},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.id;H(t).then((function(t){e.setState({songsList:t.filter((function(e){return"song"===e.kind})),artistName:t[0].artistName,collectionName:t[0].collectionName,artworkUrl100:t[0].artworkUrl100})}))}},{key:"render",value:function(){var e=this.state,t=e.songsList,a=Object(P.a)(e,te);return Object(y.jsxs)("div",{"data-testid":"page-album",children:[Object(y.jsx)(U,{}),Object(y.jsx)(T,Object(c.a)({},a)),Object(y.jsx)("div",{className:"container",children:t.map((function(e){var t=e.trackId,a=Object(P.a)(e,ae);return Object(y.jsx)(ee,Object(c.a)(Object(c.a)({},a),{},{trackId:t,removeFromFavorites:function(){}}),t)}))})]})}}]),a}(i.a.Component),ie=["trackId"],se=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).isMount=!1,e.removeFromFavorites=function(t){e.setState((function(e){return{favoriteSongsList:e.favoriteSongsList.filter((function(e){return e.trackId!==t}))}}))},e.state={favoriteSongsList:[],isLoading:!1},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.isMount=!0,this.setState({isLoading:!0}),X().then((function(t){e.isMount&&e.setState({favoriteSongsList:t,isLoading:!1})}))}},{key:"componentWillUnmount",value:function(){this.isMount=!1}},{key:"render",value:function(){var e=this,t=this.state,a=t.favoriteSongsList,i=t.isLoading;return Object(y.jsxs)("div",{"data-testid":"page-favorites",children:[Object(y.jsx)(U,{}),i?Object(y.jsx)(S,{}):Object(y.jsx)("div",{className:"container",children:a.map((function(t){var a=t.trackId,i=Object(P.a)(t,ie);return Object(n.createElement)(ee,Object(c.a)(Object(c.a)({},i),{},{key:a,trackId:parseInt(a,10),removeFromFavorites:e.removeFromFavorites}))}))})]})}}]),a}(i.a.Component),re=(a(47),function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).state={isLoading:!0},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;N().then((function(t){var a=t.name,n=t.email,i=t.image,s=t.description;e.setState({userName:a,email:n,image:i,description:s,isLoading:!1})}))}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.userName,n=e.email,i=e.image,s=e.description;return Object(y.jsxs)("div",{"data-testid":"page-profile",children:[Object(y.jsx)(U,{}),t?Object(y.jsx)(S,{}):Object(y.jsxs)("div",{className:"page-profile",children:[Object(y.jsx)("img",{className:"profile-image",src:i||M,alt:"Imagem do usu\xe1rio"}),Object(y.jsx)("h2",{className:"user-name",children:a}),Object(y.jsx)("p",{className:"user-email",children:n}),Object(y.jsx)("p",{className:"user-description",children:s}),Object(y.jsx)(j.b,{to:"".concat(le,"/profile/edit"),className:"btn",children:"Editar perfil"})]})]})}}]),a}(i.a.Component)),ce=(a(48),function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).isMount=!1,e.handleChange=function(t){var a=t.target,n=a.name,i=a.value;e.setState(Object(O.a)({},n,i))},e.handleClick=function(){var t,a=e.state,n=a.userName,i=a.email,s=a.image,r=a.description;e.setState({isLoading:!0}),(t={name:n,email:i,image:s,description:r},new Promise((function(e){g(Object(c.a)({},t)),x("OK")(e)}))).then((function(){e.isMount&&e.setState({isLoading:!1,editFinished:!0})}))},e.validForm=function(){var t=e.state,a=t.userName,n=t.email,i=t.image,s=t.description;return a.trim().length>0&&i.trim().length>0&&s.trim().length>0&&/\S+@\S+\.com/.test(n)},e.state={isLoading:!0,editFinished:!1,userName:"",email:"",image:"",description:""},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.isMount=!0,N().then((function(t){var a=t.name,n=t.email,i=t.image,s=t.description;e.setState({userName:a,email:n,image:i,description:s,isLoading:!1})}))}},{key:"componentWillUnmount",value:function(){this.isMount=!1}},{key:"render",value:function(){var e=this.state,t=e.editFinished,a=e.isLoading,n=e.userName,i=e.email,s=e.image,r=e.description,o=Object.assign({},this.props);return Object(y.jsx)(m.Route,Object(c.a)(Object(c.a)({},o),{},{children:t?Object(y.jsx)(m.Redirect,{to:"".concat(le,"/profile")}):Object(y.jsxs)("div",{"data-testid":"page-profile-edit",children:[Object(y.jsx)(U,{}),a?Object(y.jsx)(S,{}):Object(y.jsx)("div",{className:"page-profile-edit",children:Object(y.jsxs)("form",{className:"form-box",children:[Object(y.jsx)("img",{"data-testid":"profile-image",src:s,alt:"Imagem do usu\xe1rio",className:"user-image"}),Object(y.jsxs)("label",{htmlFor:"edit-input-name",className:"label-box",children:["Nome de usu\xe1rio",Object(y.jsx)("input",{type:"text",name:"userName",id:"edit-input-name","data-testid":"edit-input-name",value:n,onChange:this.handleChange,className:"input-field"})]}),Object(y.jsxs)("label",{htmlFor:"edit-input-email",className:"label-box",children:["e-mail",Object(y.jsx)("input",{type:"text",name:"email",id:"edit-input-email","data-testid":"edit-input-email",value:i,onChange:this.handleChange,className:"input-field"})]}),Object(y.jsxs)("label",{htmlFor:"edit-input-image",className:"label-box",children:["Url da imagem",Object(y.jsx)("input",{type:"text",name:"image",id:"edit-input-image","data-testid":"edit-input-image",value:s,onChange:this.handleChange,className:"input-field"})]}),Object(y.jsxs)("label",{htmlFor:"edit-input-description",className:"label-box description",children:["Descri\xe7\xe3o",Object(y.jsx)("textarea",{name:"description",id:"edit-input-description","data-testid":"edit-input-description",onChange:this.handleChange,className:"input-field",value:r})]}),Object(y.jsx)("button",{type:"button","data-testid":"edit-button-save",disabled:!this.validForm(),className:"btn",onClick:this.handleClick,children:"Salvar"})]})})]})}))}}]),a}(i.a.Component)),oe=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return Object(y.jsx)("div",{"data-testid":"page-not-found",children:"Not Found"})}}]),a}(i.a.Component),ue=oe,le=(a(49),"/trybetunes"),de=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return Object(y.jsx)(j.a,{children:Object(y.jsxs)(m.Switch,{children:[Object(y.jsx)(L,{exact:!0,path:le}),Object(y.jsx)(m.Route,{exact:!0,path:"".concat(le,"/search"),render:function(){return Object(y.jsx)(q,{})}}),Object(y.jsx)(m.Route,{path:"".concat(le,"/album/:id"),render:function(e){var t=e.match;return Object(y.jsx)(ne,Object(c.a)({},t.params))}}),Object(y.jsx)(m.Route,{exact:!0,path:"".concat(le,"/favorites"),render:function(){return Object(y.jsx)(se,{})}}),Object(y.jsx)(m.Route,{exact:!0,path:"".concat(le,"/profile"),render:function(){return Object(y.jsx)(re,{})}}),Object(y.jsx)(ce,{exact:!0,path:"".concat(le,"/profile/edit")}),Object(y.jsx)(m.Route,{path:"*",render:function(){return Object(y.jsx)(ue,{})}})]})})}}]),a}(i.a.Component),je=de;r.a.render(Object(y.jsx)(i.a.StrictMode,{children:Object(y.jsx)(je,{})}),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.5eb3f8bb.chunk.js.map