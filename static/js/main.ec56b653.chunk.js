(this.webpackJsonptrybetunes=this.webpackJsonptrybetunes||[]).push([[0],{23:function(t,e,a){},42:function(t,e,a){"use strict";a.r(e);var n=a(1),i=a.n(n),r=a(24),s=a.n(r),c=(a(23),a(7)),o=a(2),u=a(3),l=a(5),d=a(4),j=a(13),m=a(6),b=a(9),h=a.n(b),p=a(14),O=a(15),f=a(21),v="user",g=function(t){return localStorage.setItem(v,JSON.stringify(t))},x=function(t){return function(e){setTimeout((function(){e(t)}),1500)}},k=function(){return new Promise((function(t){var e=JSON.parse(localStorage.getItem(v));null===e&&(e={}),x(e)(t)}))},N=function(t){return new Promise((function(e){g(Object(c.a)(Object(c.a)({},{name:"",email:"",image:"",description:""}),t)),x("OK")(e)}))},y=a(0),I=function(t){Object(l.a)(a,t);var e=Object(d.a)(a);function a(){return Object(o.a)(this,a),e.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return Object(y.jsx)("p",{className:"loading",children:"Carregando..."})}}]),a}(i.a.Component),S=I,C=a.p+"static/media/LogoTrybeTunes.396d23d3.svg",F=function(t){Object(l.a)(a,t);var e=Object(d.a)(a);function a(){var t;return Object(o.a)(this,a),(t=e.call(this)).isMount=!1,t.handleInput=function(e){var a=e.target;t.setState(Object(O.a)({},a.name,a.value))},t.saveUserOnClick=function(){var e=Object(p.a)(h.a.mark((function e(a){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.setState({saveUserIsloading:!0}),e.next=3,N({name:a});case 3:n=e.sent,t.isMount&&t.setState({saveUserIsFinished:"OK"===n});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t.state={loginName:"",saveUserIsloading:!1,saveUserIsFinished:!1},t}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.isMount=!0}},{key:"componentWillUnmount",value:function(){this.isMount=!1}},{key:"render",value:function(){var t=this,e=this.state,a=e.loginName,n=e.saveUserIsloading,i=e.saveUserIsFinished,r=Object.assign({},this.props);return Object(y.jsx)(f.Route,Object(c.a)(Object(c.a)({},r),{},{children:i?Object(y.jsx)(f.Redirect,{to:"/search"}):Object(y.jsxs)("div",{"data-testid":"page-login",className:"page-login",children:[Object(y.jsx)("img",{src:C,alt:"Logo TrybeTunes",className:"logo"}),n?Object(y.jsx)(S,{}):Object(y.jsxs)("form",{className:"form-box",children:[Object(y.jsx)("input",{type:"text","data-testid":"login-name-input",id:"login-name-input",name:"loginName",value:a,onChange:this.handleInput,placeholder:"Nome de usu\xe1rio",className:"input-field"}),Object(y.jsx)("button",{type:"button","data-testid":"login-submit-button",disabled:a.length<3,onClick:function(){return t.saveUserOnClick(a)},className:"btn",children:"Entrar"})]})]})}))}}]),a}(i.a.Component),L=F,w=a.p+"static/media/LogoHeader.ee1ea554.svg",M=function(t){Object(l.a)(a,t);var e=Object(d.a)(a);function a(){var t;return Object(o.a)(this,a),(t=e.call(this)).state={user:!1},t}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var t=this;k().then((function(e){t.setState({user:e})}))}},{key:"render",value:function(){var t=this.state.user;return Object(y.jsx)("div",{children:t?Object(y.jsxs)(y.Fragment,{children:[Object(y.jsxs)("header",{"data-testid":"header-component",className:"header",children:[Object(y.jsx)("img",{src:w,alt:"Logo TrybeTunes",className:"logo-header"}),Object(y.jsxs)("div",{className:"user-box-header",children:[Object(y.jsx)("div",{className:"header-user-image"}),Object(y.jsx)("p",{"data-testid":"header-user-name",className:"header-user-name",children:t.name})]})]}),Object(y.jsxs)("nav",{className:"nav-bar",children:[Object(y.jsx)(j.b,{to:"/search","data-testid":"link-to-search",className:"nav-link",children:"Pesquisa"}),Object(y.jsx)(j.b,{to:"/favorites","data-testid":"link-to-favorites",className:"nav-link",children:"Favoritas"}),Object(y.jsx)(j.b,{to:"/profile","data-testid":"link-to-profile",className:"nav-link",children:"Perfil"})]})]}):Object(y.jsx)(S,{})})}}]),a}(i.a.Component),U=function(){var t=Object(p.a)(h.a.mark((function t(e){var a,n,i,r,s,c;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=encodeURI(e).replaceAll("%20","+"),n="https://itunes.apple.com/search?entity=album&term=".concat(a,"&attribute=allArtistTerm"),t.next=4,fetch(n);case 4:return i=t.sent,t.next=7,i.json();case 7:return r=t.sent,s=r.results,c=s.map((function(t){return{artistId:t.artistId,artistName:t.artistName,collectionId:t.collectionId,collectionName:t.collectionName,collectionPrice:t.collectionPrice,artworkUrl100:t.artworkUrl100,releaseDate:t.releaseDate,trackCount:t.trackCount}})),t.abrupt("return",c);case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),D=U,A=a(16),P=function(t){Object(l.a)(a,t);var e=Object(d.a)(a);function a(){return Object(o.a)(this,a),e.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var t=this.props,e=t.artistName,a=t.collectionName,n=t.artworkUrl100;return Object(y.jsxs)("div",{children:[Object(y.jsx)("img",{src:n,alt:a}),Object(y.jsx)("h3",{"data-testid":"album-name",children:a}),Object(y.jsx)("p",{"data-testid":"artist-name",children:e})]})}}]),a}(i.a.Component);P.defaultProps={artworkUrl100:""};var R=P,T=["collectionId"],J=function(t){Object(l.a)(a,t);var e=Object(d.a)(a);function a(){return Object(o.a)(this,a),e.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var t=this.props.albumData;return Object(y.jsx)("div",{children:t.length>0?t.map((function(t){var e=t.collectionId,a=Object(A.a)(t,T);return Object(y.jsx)(j.b,{to:"/album/".concat(e),"data-testid":"link-to-album-".concat(e),children:Object(y.jsx)(R,Object(c.a)({},a))},e)})):Object(y.jsx)("span",{children:"Nenhum \xe1lbum foi encontrado"})})}}]),a}(i.a.Component),K=J,W=function(t){Object(l.a)(a,t);var e=Object(d.a)(a);function a(){var t;return Object(o.a)(this,a),(t=e.call(this)).isMount=!1,t.handleInput=function(e){var a=e.target,n=a.name,i=a.value;t.setState(Object(O.a)({},n,i))},t.searchArtist=function(){var e=Object(p.a)(h.a.mark((function e(a){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.setState({artistName:"",searchArtistIsLoading:!0,saveArtistName:a}),e.next=3,D(a);case 3:n=e.sent,t.isMount&&t.setState({searchArtistIsLoading:!1,searchArtistIsFinished:!0,albumData:n});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t.state={artistName:"",searchArtistIsLoading:!1,searchArtistIsFinished:!1,albumData:[],saveArtistName:""},t}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.isMount=!0}},{key:"componentWillUnmount",value:function(){this.isMount=!1}},{key:"render",value:function(){var t=this,e=this.state,a=e.artistName,n=e.searchArtistIsLoading,i=e.searchArtistIsFinished,r=e.albumData,s=e.saveArtistName;return Object(y.jsxs)("div",{"data-testid":"page-search",children:[Object(y.jsx)(M,{}),n?Object(y.jsx)(S,{}):Object(y.jsxs)(y.Fragment,{children:[Object(y.jsxs)("form",{className:"search-box",children:[Object(y.jsx)("input",{type:"text","data-testid":"search-artist-input",id:"search-artist-input",name:"artistName",value:a,onChange:this.handleInput,placeholder:"Nome do Artista",className:"input-field"}),Object(y.jsx)("button",{type:"button","data-testid":"search-artist-button",onClick:function(){return t.searchArtist(a)},disabled:a.length<2,className:"btn",children:"Pesquisar"})]}),i?Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)("p",{children:"Resultado de \xe1lbuns de: ".concat(s)}),Object(y.jsx)(K,{albumData:r})]}):""]})]})}}]),a}(i.a.Component),E=W,q=function(){var t=Object(p.a)(h.a.mark((function t(e){var a,n;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://itunes.apple.com/lookup?id=".concat(e,"&entity=song"));case 2:return a=t.sent,t.next=5,a.json();case 5:return n=t.sent,t.abrupt("return",n.results);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),B=q,H=a(27),_="favorite_songs";JSON.parse(localStorage.getItem(_))||localStorage.setItem(_,JSON.stringify([]));var z=function(){return JSON.parse(localStorage.getItem(_))},G=function(t){return localStorage.setItem(_,JSON.stringify(t))},Q=function(t){return function(e){setTimeout((function(){e(t)}),500)}},V=function(){return new Promise((function(t){var e=z();Q(e)(t)}))},X=function(t){return new Promise((function(e){if(t){var a=z();G([].concat(Object(H.a)(a),[t]))}Q("OK")(e)}))},Y=function(t){return new Promise((function(e){var a=z();G(a.filter((function(e){return e.trackId!==t.trackId}))),Q("OK")(e)}))},Z=function(t){Object(l.a)(a,t);var e=Object(d.a)(a);function a(){var t;return Object(o.a)(this,a),(t=e.call(this)).isMount=!1,t.checkFavoriteSong=function(){var e=Object(p.a)(h.a.mark((function e(a){var n,i,r,s,c,o;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=a.target.checked,t.setState({favoriteSong:n,addSongIsLoading:!0}),i=t.props,r=i.trackName,s=i.previewUrl,c=i.trackId,o=i.removeFromFavorites,!n){e.next=8;break}return e.next=6,X({trackName:r,previewUrl:s,trackId:c});case 6:e.next=11;break;case 8:return e.next=10,Y({trackName:r,previewUrl:s,trackId:c});case 10:o(c);case 11:t.isMount&&t.setState({addSongIsLoading:!1});case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t.state={favoriteSong:!1,addSongIsLoading:!1},t}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var t=this;this.isMount=!0;var e=this.props.trackId;V().then((function(a){t.isMount&&t.setState({favoriteSong:a.map((function(t){return t.trackId})).includes(e)})}))}},{key:"componentWillUnmount",value:function(){this.isMount=!1}},{key:"render",value:function(){var t=this.props,e=t.trackName,a=t.previewUrl,n=t.trackId,i=this.state,r=i.favoriteSong,s=i.addSongIsLoading;return Object(y.jsx)("div",{children:s?Object(y.jsx)(S,{}):Object(y.jsxs)("div",{children:[Object(y.jsx)("h3",{children:e}),Object(y.jsxs)("audio",{"data-testid":"audio-component",src:a,controls:!0,children:[Object(y.jsx)("track",{kind:"captions"}),"O seu navegador n\xe3o suporta o elemento",Object(y.jsx)("code",{children:"audio"}),"."]}),Object(y.jsxs)("label",{htmlFor:"checkbox-music-".concat(n),children:["Favorita",Object(y.jsx)("input",{type:"checkbox",id:"checkbox-music-".concat(n),"data-testid":"checkbox-music-".concat(n),checked:r,onChange:this.checkFavoriteSong})]})]})})}}]),a}(i.a.Component),$=Z,tt=["songsList"],et=["trackId"],at=function(t){Object(l.a)(a,t);var e=Object(d.a)(a);function a(){var t;return Object(o.a)(this,a),(t=e.call(this)).state={songsList:[],artistName:"",collectionName:"",artworkUrl100:""},t}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var t=this,e=this.props.id;B(e).then((function(e){t.setState({songsList:e.filter((function(t){return"song"===t.kind})),artistName:e[0].artistName,collectionName:e[0].collectionName,artworkUrl100:e[0].artworkUrl100})}))}},{key:"render",value:function(){var t=this.state,e=t.songsList,a=Object(A.a)(t,tt);return Object(y.jsxs)("div",{"data-testid":"page-album",children:[Object(y.jsx)(M,{}),Object(y.jsx)(R,Object(c.a)({},a)),e.map((function(t){var e=t.trackId,a=Object(A.a)(t,et);return Object(y.jsx)($,Object(c.a)(Object(c.a)({},a),{},{trackId:e,removeFromFavorites:function(){}}),e)}))]})}}]),a}(i.a.Component),nt=["trackId"],it=function(t){Object(l.a)(a,t);var e=Object(d.a)(a);function a(){var t;return Object(o.a)(this,a),(t=e.call(this)).isMount=!1,t.removeFromFavorites=function(e){t.setState((function(t){return{favoriteSongsList:t.favoriteSongsList.filter((function(t){return t.trackId!==e}))}}))},t.state={favoriteSongsList:[],isLoading:!1},t}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var t=this;this.isMount=!0,this.setState({isLoading:!0}),V().then((function(e){t.isMount&&t.setState({favoriteSongsList:e,isLoading:!1})}))}},{key:"componentWillUnmount",value:function(){this.isMount=!1}},{key:"render",value:function(){var t=this,e=this.state,a=e.favoriteSongsList,i=e.isLoading;return Object(y.jsxs)("div",{"data-testid":"page-favorites",children:[Object(y.jsx)(M,{}),i?Object(y.jsx)(S,{}):a.map((function(e){var a=e.trackId,i=Object(A.a)(e,nt);return Object(n.createElement)($,Object(c.a)(Object(c.a)({},i),{},{key:a,trackId:parseInt(a,10),removeFromFavorites:t.removeFromFavorites}))}))]})}}]),a}(i.a.Component),rt=function(t){Object(l.a)(a,t);var e=Object(d.a)(a);function a(){var t;return Object(o.a)(this,a),(t=e.call(this)).state={isLoading:!0},t}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var t=this;k().then((function(e){var a=e.name,n=e.email,i=e.image,r=e.description;t.setState({userName:a,email:n,image:i,description:r,isLoading:!1})}))}},{key:"render",value:function(){var t=this.state,e=t.isLoading,a=t.userName,n=t.email,i=t.image,r=t.description;return Object(y.jsxs)("div",{"data-testid":"page-profile",children:[Object(y.jsx)(M,{}),e?Object(y.jsx)(S,{}):Object(y.jsxs)("div",{children:[Object(y.jsx)("img",{"data-testid":"profile-image",src:i,alt:"Imagem do usu\xe1rio"}),Object(y.jsx)("h2",{children:a}),Object(y.jsx)("p",{children:n}),Object(y.jsx)("p",{children:r}),Object(y.jsx)(j.b,{to:"/profile/edit",children:"Editar perfil"})]})]})}}]),a}(i.a.Component),st=function(t){Object(l.a)(a,t);var e=Object(d.a)(a);function a(){var t;return Object(o.a)(this,a),(t=e.call(this)).isMount=!1,t.handleChange=function(e){var a=e.target,n=a.name,i=a.value;t.setState(Object(O.a)({},n,i))},t.handleClick=function(){var e,a=t.state,n=a.userName,i=a.email,r=a.image,s=a.description;t.setState({isLoading:!0}),(e={name:n,email:i,image:r,description:s},new Promise((function(t){g(Object(c.a)({},e)),x("OK")(t)}))).then((function(){t.isMount&&t.setState({isLoading:!1,editFinished:!0})}))},t.validForm=function(){var e=t.state,a=e.userName,n=e.email,i=e.image,r=e.description;return a.trim().length>0&&i.trim().length>0&&r.trim().length>0&&/\S+@\S+\.com/.test(n)},t.state={isLoading:!0,editFinished:!1,userName:"",email:"",image:"",description:""},t}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var t=this;this.isMount=!0,k().then((function(e){var a=e.name,n=e.email,i=e.image,r=e.description;t.setState({userName:a,email:n,image:i,description:r,isLoading:!1})}))}},{key:"componentWillUnmount",value:function(){this.isMount=!1}},{key:"render",value:function(){var t=this.state,e=t.editFinished,a=t.isLoading,n=t.userName,i=t.email,r=t.image,s=t.description,o=Object.assign({},this.props);return Object(y.jsx)(m.Route,Object(c.a)(Object(c.a)({},o),{},{children:e?Object(y.jsx)(m.Redirect,{to:"/profile"}):Object(y.jsxs)("div",{"data-testid":"page-profile-edit",children:[Object(y.jsx)(M,{}),a?Object(y.jsx)(S,{}):Object(y.jsx)("div",{className:"page-profile",children:Object(y.jsxs)("form",{className:"form-box",children:[Object(y.jsx)("img",{"data-testid":"profile-image",src:r,alt:"Imagem do usu\xe1rio",className:"user-image"}),Object(y.jsxs)("label",{htmlFor:"edit-input-name",className:"label-box",children:["Nome de usu\xe1rio",Object(y.jsx)("input",{type:"text",name:"userName",id:"edit-input-name","data-testid":"edit-input-name",value:n,onChange:this.handleChange,className:"input-field"})]}),Object(y.jsxs)("label",{htmlFor:"edit-input-email",className:"label-box",children:["e-mail",Object(y.jsx)("input",{type:"text",name:"email",id:"edit-input-email","data-testid":"edit-input-email",value:i,onChange:this.handleChange,className:"input-field"})]}),Object(y.jsxs)("label",{htmlFor:"edit-input-image",className:"label-box",children:["Url da imagem",Object(y.jsx)("input",{type:"text",name:"image",id:"edit-input-image","data-testid":"edit-input-image",value:r,onChange:this.handleChange,className:"input-field"})]}),Object(y.jsxs)("label",{htmlFor:"edit-input-description",className:"label-box description",children:["Descri\xe7\xe3o",Object(y.jsx)("textarea",{name:"description",id:"edit-input-description","data-testid":"edit-input-description",onChange:this.handleChange,className:"input-field",value:s})]}),Object(y.jsx)("button",{type:"button","data-testid":"edit-button-save",disabled:!this.validForm(),className:"btn",onClick:this.handleClick,children:"Salvar"})]})})]})}))}}]),a}(i.a.Component),ct=function(t){Object(l.a)(a,t);var e=Object(d.a)(a);function a(){return Object(o.a)(this,a),e.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return Object(y.jsx)("div",{"data-testid":"page-not-found",children:"Not Found"})}}]),a}(i.a.Component),ot=ct,ut=function(t){Object(l.a)(a,t);var e=Object(d.a)(a);function a(){return Object(o.a)(this,a),e.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return Object(y.jsx)(j.a,{children:Object(y.jsxs)(m.Switch,{children:[Object(y.jsx)(L,{exact:!0,path:"/"}),Object(y.jsx)(m.Route,{exact:!0,path:"/search",render:function(){return Object(y.jsx)(E,{})}}),Object(y.jsx)(m.Route,{path:"/album/:id",render:function(t){var e=t.match;return Object(y.jsx)(at,Object(c.a)({},e.params))}}),Object(y.jsx)(m.Route,{exact:!0,path:"/favorites",render:function(){return Object(y.jsx)(it,{})}}),Object(y.jsx)(m.Route,{exact:!0,path:"/profile",render:function(){return Object(y.jsx)(rt,{})}}),Object(y.jsx)(st,{exact:!0,path:"/profile/edit"}),Object(y.jsx)(m.Route,{path:"*",render:function(){return Object(y.jsx)(ot,{})}})]})})}}]),a}(i.a.Component),lt=ut;s.a.render(Object(y.jsx)(i.a.StrictMode,{children:Object(y.jsx)(lt,{})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.ec56b653.chunk.js.map