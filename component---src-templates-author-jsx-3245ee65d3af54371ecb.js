(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{177:function(e,t,n){"use strict";n.r(t);n(181);var a=n(5),r=n.n(a),o=n(0),s=n.n(o),i=n(56),l=n.n(i),c=n(197),u=n(17),p=n.n(u),m=n(226),h=n(227),f=n(228),d=n(230),E=n(215),g=n(217),y=n(255),v=n(182),N=n.n(v),k=(n(373),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.children,n=e.className,a=N()("author-profile",n);return s.a.createElement("section",{className:a},t)},t}(s.a.Component)),C=(n(374),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.name;return e?s.a.createElement("h1",{className:"author-title"},e):null},t}(s.a.Component)),b=(n(375),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.bio;return e?s.a.createElement("h2",{className:"author-bio"},e):null},t}(s.a.Component)),w=n(257),A=n(259),M=n(260),O=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.postEdges;return s.a.createElement("span",{className:"author-stats"},s.a.createElement("i",{className:"icon-stats"})," ",e?e.length>1?e.length+" posts":e.length+" post":"No posts")},t}(s.a.Component),R=n(229),x=n(376),L=(n(382),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.urls,n=e.color;return t&&t.length>0?s.a.createElement("div",{className:"social-media-icons"},t.map(function(e){return s.a.createElement(x.SocialIcon,{key:e,className:"social-media-icon",url:e,color:n,style:{height:null,width:null}})})):null},t}(s.a.Component)),S=n(81);n.d(t,"pageQuery",function(){return T});var J=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).state={menuOpen:!1},t.handleOnClick=function(e){e.stopPropagation(),t.state.menuOpen?t.closeMenu():t.openMenu()},t.handleOnClose=function(e){e.stopPropagation(),t.closeMenu()},t.openMenu=function(){t.setState({menuOpen:!0})},t.closeMenu=function(){t.setState({menuOpen:!1})},t}return r()(t,e),t.prototype.render=function(){var e=this.props.pageContext,t=e.author,n=e.cover,a=this.props.data.allMarkdownRemark&&this.props.data.allMarkdownRemark.edges?this.props.data.allMarkdownRemark.edges:[],r=this.props.data.allAuthorsJson&&this.props.data.allAuthorsJson.edges?this.props.data.allAuthorsJson.edges:[],o=function(){return r[0].node};return s.a.createElement(S.default,{location:this.props.location},s.a.createElement(m.a,{className:"author-template",isOpen:this.state.menuOpen},s.a.createElement(l.a,{title:'Posts by "'+t+'" | '+p.a.siteTitle}),s.a.createElement(f.a,null,s.a.createElement(d.a,{className:"author-head",cover:n},s.a.createElement(E.a,null,s.a.createElement(g.a,{logo:p.a.siteLogo,title:p.a.siteTitle}),p.a.siteNavigation?s.a.createElement(h.a,null):"")),s.a.createElement(k,{className:"inner"},s.a.createElement(y.a,{author:o()}),s.a.createElement(C,{name:o().name}),s.a.createElement(b,{bio:o().bio}),s.a.createElement(w.a,null,s.a.createElement(A.a,{location:o().location}),s.a.createElement(M.a,{url:o().url})),s.a.createElement(O,{postEdges:a})),s.a.createElement(c.a,{postEdges:a,postAuthors:r}),s.a.createElement(L,{urls:o().socialUrls}),s.a.createElement(R.a,{copyright:p.a.copyright,promoteGatsby:p.a.promoteGatsby}))))},t}(s.a.Component),T="87297870";t.default=J},193:function(e,t,n){},194:function(e,t,n){},197:function(e,t,n){"use strict";n(181);var a=n(5),r=n.n(a),o=n(0),s=n.n(o),i=n(36),l=(n(193),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.avatar,n=e.name;return t&&n?s.a.createElement("img",{className:"author-thumb",src:t,alt:n,"data-pin-nopin":"true"}):null},t}(s.a.Component)),c=n(198),u=n(17),p=n.n(u),m=n(199),h=n(200),f=n(201),d=n(202),E=n(203),g=(n(194),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e,t,n=(e=this.props.postEdges,t=this.props.postAuthors,e.map(function(e){return{path:e.node.fields.slug,tags:e.node.frontmatter.tags,cover:e.node.frontmatter.cover,title:e.node.frontmatter.title,date:e.node.frontmatter.date,author:E.a.getAuthor(t,e.node.frontmatter.author,p.a.blogAuthorId),excerpt:e.node.excerpt,timeToRead:e.node.timeToRead}}));return s.a.createElement("div",null,n.map(function(e){var t=e.title,n=e.path,a=e.excerpt,r=e.author,o=e.tags,u=e.date,p=e.timeToRead,E=e.post_class?e.post_class:"post";return s.a.createElement(h.a,{className:E,key:t},s.a.createElement(f.a,null,s.a.createElement("h2",{className:"post-title"},s.a.createElement(i.Link,{to:n},t))),s.a.createElement("section",{className:"post-excerpt"},s.a.createElement("p",null,a," ",s.a.createElement(i.Link,{className:"read-more",to:n},"»"))),s.a.createElement("footer",{className:"post-meta"},s.a.createElement(l,{avatar:r.image,name:r.name}),s.a.createElement(m.a,{url:"/author/"+r.uid,name:r.name}),s.a.createElement(c.a,{prefix:" on ",tags:o}),s.a.createElement("span",{style:{paddingLeft:6,paddingRight:6,fontSize:13}},"•"),s.a.createElement(d.a,{date:u}),s.a.createElement("span",{style:{paddingLeft:6,paddingRight:6,fontSize:13}},"•"),s.a.createElement("span",{style:{fontSize:13}},p+" min read")))}))},t}(s.a.Component));t.a=g},215:function(e,t,n){"use strict";var a=n(5),r=n.n(a),o=n(0),s=n.n(o),i=n(182),l=n.n(i),c=(n(216),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.children,n=e.className,a=l()("main-nav",["overlay","clearfix"],n);return s.a.createElement("nav",{className:a},t)},t}(s.a.Component));t.a=c},216:function(e,t,n){},217:function(e,t,n){"use strict";var a=n(5),r=n.n(a),o=n(0),s=n.n(o),i=n(36),l=(n(218),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.logo,n=e.url,a=e.title;return t?s.a.createElement(i.Link,{className:"blog-logo",to:n||"/"},s.a.createElement("img",{src:t,alt:a})):null},t}(o.Component));t.a=l},218:function(e,t,n){},255:function(e,t,n){"use strict";n(181);var a=n(5),r=n.n(a),o=n(0),s=n.n(o),i=(n(256),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.author,t=e.name,n=e.image,a=e.url;return n?s.a.createElement("figure",{className:"author-image"},s.a.createElement("a",{className:"img",href:a,style:{backgroundImage:'url("'+n+'")'}},s.a.createElement("span",{className:"hidden"},t+"'s Picture"))):null},t}(s.a.Component));t.a=i},256:function(e,t,n){},257:function(e,t,n){"use strict";var a=n(5),r=n.n(a),o=n(0),s=n.n(o),i=n(182),l=n.n(i),c=(n(258),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.children,n=e.className,a=l()("author-meta",n);return s.a.createElement("div",{className:a},t)},t}(s.a.Component));t.a=c},258:function(e,t,n){},259:function(e,t,n){"use strict";var a=n(5),r=n.n(a),o=n(0),s=n.n(o),i=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.location;return e?s.a.createElement("span",{className:"author-location icon-location"},e):null},t}(s.a.Component);t.a=i},260:function(e,t,n){"use strict";var a=n(5),r=n.n(a),o=n(0),s=n.n(o),i=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.url;return e?s.a.createElement("span",{className:"author-link icon-link"},s.a.createElement("a",{href:e},e)):null},t}(s.a.Component);t.a=i},373:function(e,t,n){},374:function(e,t,n){},375:function(e,t,n){},382:function(e,t,n){}}]);
//# sourceMappingURL=component---src-templates-author-jsx-3245ee65d3af54371ecb.js.map