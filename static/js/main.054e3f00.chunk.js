(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{67:function(e,t,a){},68:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(1),o=a.n(r),c=a(8),s=a.n(c),i=a(10),l=a(4),u=a(5),m=a(7),h=a(6),d=a(19),g=a.n(d),p=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a="17935593-e396bfe1aec92e4aa57ec3c04";return g.a.get("https://pixabay.com/api/?q=".concat(e,"&page=").concat(t,"&key=").concat(a,"&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.data.hits}))},j=a(20),b=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={query:""},e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state.query),e.setState({query:""})},e.handleChange=function(t){var a=t.target,n=a.value,r=a.name;e.setState(Object(j.a)({},r,n))},e}return Object(u.a)(a,[{key:"render",value:function(){return Object(n.jsx)("header",{className:"Searchbar",children:Object(n.jsxs)("form",{className:"SearchForm",onSubmit:this.handleSubmit,children:[Object(n.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(n.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(n.jsx)("input",{className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",name:"query",value:this.state.query,onChange:this.handleChange})]})})}}]),a}(o.a.Component);function f(e){var t=e.src,a=e.srcOriginal,r=e.id,o=e.alt,c=e.getLargeImageURL;return Object(n.jsx)("li",{className:"ImageGalleryItem",children:Object(n.jsx)("img",{src:t,alt:o,"data-source":a,"data-id":r,className:"ImageGalleryItem-image",onClick:function(e){return c(e.target.dataset.source)}})})}function O(e){var t=e.images,a=e.onImageClick;return Object(n.jsx)("ul",{className:"ImageGallery",children:t.map((function(e){return Object(n.jsx)(f,{src:e.webformatURL,srcOriginal:e.largeImageURL,id:e.id,alt:e.tags,getLargeImageURL:a},e.id)}))})}function y(e){var t=e.onClick;return Object(n.jsx)("button",{className:"Button",onClick:t,children:"Load more"})}var v=document.querySelector("#modal-root"),S=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).onEscPress=function(t){"Escape"===t.code&&e.props.closeModal()},e.onCloseModal=function(t){t.target===t.currentTarget&&e.props.closeModal()},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.onEscPress)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.onEscPress)}},{key:"render",value:function(){return Object(c.createPortal)(Object(n.jsx)("div",{className:"Overlay",onClick:this.onCloseModal,children:Object(n.jsx)("div",{className:"Modal",children:Object(n.jsx)("img",{src:this.props.largeImageURL,alt:""})})}),v)}}]),a}(o.a.Component),x=a(21),I=a.n(x),k=(a(66),function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={images:[],isLoading:!1,query:"",page:1,error:null,showModal:!1,originalImageURL:""},e.fetchImages=function(){var t=e.state,a=t.query,n=t.page;e.setState({isLoading:!0}),p(a,n).then((function(t){return e.setState((function(e){return{images:[].concat(Object(i.a)(e.images),Object(i.a)(t)),page:e.page+1}}))})).catch((function(t){return e.setState({error:t})})).finally((function(){e.setState({isLoading:!1}),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}))},e.handleSubmitForm=function(t){e.setState({images:[],query:t,page:1})},e.handleClickImage=function(t){e.openModal(t)},e.openModal=function(t){return e.setState({showModal:!0,originalImageURL:t})},e.closeModal=function(){return e.setState({showModal:!1,originalImageURL:""})},e}return Object(u.a)(a,[{key:"componentDidUpdate",value:function(e,t){t.query!==this.state.query&&this.fetchImages()}},{key:"render",value:function(){var e=this.state,t=e.images,a=e.isLoading,r=e.showModal,o=e.originalImageURL;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(b,{onSubmit:this.handleSubmitForm}),Object(n.jsx)(O,{images:t,onImageClick:this.handleClickImage}),r&&Object(n.jsx)(S,{largeImageURL:o,closeModal:this.closeModal}),Object(n.jsxs)("div",{className:"Btnwrap",children:[a&&Object(n.jsx)(I.a,{type:"ThreeDots",color:"#303f9f",height:50,width:50,timeout:3e3}),t.length>0&&!a&&Object(n.jsx)(y,{onClick:this.fetchImages})]})]})}}]),a}(o.a.Component));a(67);s.a.render(Object(n.jsx)(k,{}),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.054e3f00.chunk.js.map