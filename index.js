"use strict";(()=>{var ml=Object.create;var yo=Object.defineProperty,yl=Object.defineProperties,bl=Object.getOwnPropertyDescriptor,gl=Object.getOwnPropertyDescriptors,wl=Object.getOwnPropertyNames,Wn=Object.getOwnPropertySymbols,xl=Object.getPrototypeOf,bo=Object.prototype.hasOwnProperty,yi=Object.prototype.propertyIsEnumerable;var mi=(t,e,n)=>e in t?yo(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,go=(t,e)=>{for(var n in e||={})bo.call(e,n)&&mi(t,n,e[n]);if(Wn)for(var n of Wn(e))yi.call(e,n)&&mi(t,n,e[n]);return t},wo=(t,e)=>yl(t,gl(e));var bi=(t,e)=>{var n={};for(var r in t)bo.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&Wn)for(var r of Wn(t))e.indexOf(r)<0&&yi.call(t,r)&&(n[r]=t[r]);return n};var D=(t,e)=>()=>(t&&(e=t(t=0)),e);var ie=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var vl=(t,e,n,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let o of wl(e))!bo.call(t,o)&&o!==n&&yo(t,o,{get:()=>e[o],enumerable:!(r=bl(e,o))||r.enumerable});return t};var Xe=(t,e,n)=>(n=t!=null?ml(xl(t)):{},vl(e||!t||!t.__esModule?yo(n,"default",{value:t,enumerable:!0}):n,t));var O=(t,e,n)=>new Promise((r,o)=>{var s=c=>{try{a(n.next(c))}catch(d){o(d)}},i=c=>{try{a(n.throw(c))}catch(d){o(d)}},a=c=>c.done?r(c.value):Promise.resolve(c.value).then(s,i);a((n=n.apply(t,e)).next())});var Eo=ie((xo,vo)=>{(function(t,e){typeof xo=="object"&&typeof vo<"u"?vo.exports=e():typeof define=="function"&&define.amd?define(e):(t=typeof globalThis<"u"?globalThis:t||self,t.DOMPurify=e())})(xo,function(){"use strict";let{entries:t,setPrototypeOf:e,isFrozen:n,getPrototypeOf:r,getOwnPropertyDescriptor:o}=Object,{freeze:s,seal:i,create:a}=Object,{apply:c,construct:d}=typeof Reflect<"u"&&Reflect;c||(c=function(_,G,P){return _.apply(G,P)}),s||(s=function(_){return _}),i||(i=function(_){return _}),d||(d=function(_,G){return new _(...G)});let l=E(Array.prototype.forEach),u=E(Array.prototype.pop),h=E(Array.prototype.push),p=E(String.prototype.toLowerCase),m=E(String.prototype.toString),y=E(String.prototype.match),g=E(String.prototype.replace),k=E(String.prototype.indexOf),L=E(String.prototype.trim),b=E(RegExp.prototype.test),H=V(TypeError);function E(z){return function(_){for(var G=arguments.length,P=new Array(G>1?G-1:0),J=1;J<G;J++)P[J-1]=arguments[J];return c(z,_,P)}}function V(z){return function(){for(var _=arguments.length,G=new Array(_),P=0;P<_;P++)G[P]=arguments[P];return d(z,G)}}function S(z,_,G){var P;G=(P=G)!==null&&P!==void 0?P:p,e&&e(z,null);let J=_.length;for(;J--;){let Ee=_[J];if(typeof Ee=="string"){let Le=G(Ee);Le!==Ee&&(n(_)||(_[J]=Le),Ee=Le)}z[Ee]=!0}return z}function j(z){let _=a(null);for(let[G,P]of t(z))_[G]=P;return _}function M(z,_){for(;z!==null;){let P=o(z,_);if(P){if(P.get)return E(P.get);if(typeof P.value=="function")return E(P.value)}z=r(z)}function G(P){return console.warn("fallback value for",P),null}return G}let se=s(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),fe=s(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),oe=s(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),Oe=s(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),kt=s(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),At=s(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),Os=s(["#text"]),Ns=s(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns","slot"]),Zr=s(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),Ps=s(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),Dn=s(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),Uc=i(/\{\{[\w\W]*|[\w\W]*\}\}/gm),Oc=i(/<%[\w\W]*|[\w\W]*%>/gm),Nc=i(/\${[\w\W]*}/gm),Pc=i(/^data-[\-\w.\u00B7-\uFFFF]/),Fc=i(/^aria-[\-\w]+$/),Fs=i(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),jc=i(/^(?:\w+script|data):/i),zc=i(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),js=i(/^html$/i);var zs=Object.freeze({__proto__:null,MUSTACHE_EXPR:Uc,ERB_EXPR:Oc,TMPLIT_EXPR:Nc,DATA_ATTR:Pc,ARIA_ATTR:Fc,IS_ALLOWED_URI:Fs,IS_SCRIPT_OR_DATA:jc,ATTR_WHITESPACE:zc,DOCTYPE_NAME:js});let Wc=()=>typeof window>"u"?null:window,Gc=function(_,G){if(typeof _!="object"||typeof _.createPolicy!="function")return null;let P=null,J="data-tt-policy-suffix";G&&G.hasAttribute(J)&&(P=G.getAttribute(J));let Ee="dompurify"+(P?"#"+P:"");try{return _.createPolicy(Ee,{createHTML(Le){return Le},createScriptURL(Le){return Le}})}catch{return console.warn("TrustedTypes policy "+Ee+" could not be created."),null}};function Ws(){let z=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Wc(),_=T=>Ws(T);if(_.version="3.0.3",_.removed=[],!z||!z.document||z.document.nodeType!==9)return _.isSupported=!1,_;let G=z.document,P=G.currentScript,{document:J}=z,{DocumentFragment:Ee,HTMLTemplateElement:Le,Node:Yr,Element:Gs,NodeFilter:Xr,NamedNodeMap:Kc=z.NamedNodeMap||z.MozNamedAttrMap,HTMLFormElement:Vc,DOMParser:Zc,trustedTypes:$n}=z,Un=Gs.prototype,Yc=M(Un,"cloneNode"),Xc=M(Un,"nextSibling"),Jc=M(Un,"childNodes"),Jr=M(Un,"parentNode");if(typeof Le=="function"){let T=J.createElement("template");T.content&&T.content.ownerDocument&&(J=T.content.ownerDocument)}let ae,cn="",{implementation:Qr,createNodeIterator:Qc,createDocumentFragment:el,getElementsByTagName:tl}=J,{importNode:nl}=G,_e={};_.isSupported=typeof t=="function"&&typeof Jr=="function"&&Qr&&Qr.createHTMLDocument!==void 0;let{MUSTACHE_EXPR:eo,ERB_EXPR:to,TMPLIT_EXPR:no,DATA_ATTR:rl,ARIA_ATTR:ol,IS_SCRIPT_OR_DATA:sl,ATTR_WHITESPACE:qs}=zs,{IS_ALLOWED_URI:Ks}=zs,Q=null,Vs=S({},[...se,...fe,...oe,...kt,...Os]),ee=null,Zs=S({},[...Ns,...Zr,...Ps,...Dn]),X=Object.seal(Object.create(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),ln=null,ro=null,Ys=!0,oo=!0,Xs=!1,Js=!0,Ot=!1,Tt=!1,so=!1,io=!1,Nt=!1,On=!1,Nn=!1,Qs=!0,ei=!1,il="user-content-",ao=!0,un=!1,Pt={},Ft=null,ti=S({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]),ni=null,ri=S({},["audio","video","img","source","image","track"]),co=null,oi=S({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),Pn="http://www.w3.org/1998/Math/MathML",Fn="http://www.w3.org/2000/svg",Ne="http://www.w3.org/1999/xhtml",jt=Ne,lo=!1,uo=null,al=S({},[Pn,Fn,Ne],m),St,cl=["application/xhtml+xml","text/html"],ll="text/html",te,zt=null,ul=J.createElement("form"),si=function(f){return f instanceof RegExp||f instanceof Function},fo=function(f){if(!(zt&&zt===f)){if((!f||typeof f!="object")&&(f={}),f=j(f),St=cl.indexOf(f.PARSER_MEDIA_TYPE)===-1?St=ll:St=f.PARSER_MEDIA_TYPE,te=St==="application/xhtml+xml"?m:p,Q="ALLOWED_TAGS"in f?S({},f.ALLOWED_TAGS,te):Vs,ee="ALLOWED_ATTR"in f?S({},f.ALLOWED_ATTR,te):Zs,uo="ALLOWED_NAMESPACES"in f?S({},f.ALLOWED_NAMESPACES,m):al,co="ADD_URI_SAFE_ATTR"in f?S(j(oi),f.ADD_URI_SAFE_ATTR,te):oi,ni="ADD_DATA_URI_TAGS"in f?S(j(ri),f.ADD_DATA_URI_TAGS,te):ri,Ft="FORBID_CONTENTS"in f?S({},f.FORBID_CONTENTS,te):ti,ln="FORBID_TAGS"in f?S({},f.FORBID_TAGS,te):{},ro="FORBID_ATTR"in f?S({},f.FORBID_ATTR,te):{},Pt="USE_PROFILES"in f?f.USE_PROFILES:!1,Ys=f.ALLOW_ARIA_ATTR!==!1,oo=f.ALLOW_DATA_ATTR!==!1,Xs=f.ALLOW_UNKNOWN_PROTOCOLS||!1,Js=f.ALLOW_SELF_CLOSE_IN_ATTR!==!1,Ot=f.SAFE_FOR_TEMPLATES||!1,Tt=f.WHOLE_DOCUMENT||!1,Nt=f.RETURN_DOM||!1,On=f.RETURN_DOM_FRAGMENT||!1,Nn=f.RETURN_TRUSTED_TYPE||!1,io=f.FORCE_BODY||!1,Qs=f.SANITIZE_DOM!==!1,ei=f.SANITIZE_NAMED_PROPS||!1,ao=f.KEEP_CONTENT!==!1,un=f.IN_PLACE||!1,Ks=f.ALLOWED_URI_REGEXP||Fs,jt=f.NAMESPACE||Ne,X=f.CUSTOM_ELEMENT_HANDLING||{},f.CUSTOM_ELEMENT_HANDLING&&si(f.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(X.tagNameCheck=f.CUSTOM_ELEMENT_HANDLING.tagNameCheck),f.CUSTOM_ELEMENT_HANDLING&&si(f.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(X.attributeNameCheck=f.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),f.CUSTOM_ELEMENT_HANDLING&&typeof f.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(X.allowCustomizedBuiltInElements=f.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),Ot&&(oo=!1),On&&(Nt=!0),Pt&&(Q=S({},[...Os]),ee=[],Pt.html===!0&&(S(Q,se),S(ee,Ns)),Pt.svg===!0&&(S(Q,fe),S(ee,Zr),S(ee,Dn)),Pt.svgFilters===!0&&(S(Q,oe),S(ee,Zr),S(ee,Dn)),Pt.mathMl===!0&&(S(Q,kt),S(ee,Ps),S(ee,Dn))),f.ADD_TAGS&&(Q===Vs&&(Q=j(Q)),S(Q,f.ADD_TAGS,te)),f.ADD_ATTR&&(ee===Zs&&(ee=j(ee)),S(ee,f.ADD_ATTR,te)),f.ADD_URI_SAFE_ATTR&&S(co,f.ADD_URI_SAFE_ATTR,te),f.FORBID_CONTENTS&&(Ft===ti&&(Ft=j(Ft)),S(Ft,f.FORBID_CONTENTS,te)),ao&&(Q["#text"]=!0),Tt&&S(Q,["html","head","body"]),Q.table&&(S(Q,["tbody"]),delete ln.tbody),f.TRUSTED_TYPES_POLICY){if(typeof f.TRUSTED_TYPES_POLICY.createHTML!="function")throw H('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof f.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw H('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');ae=f.TRUSTED_TYPES_POLICY,cn=ae.createHTML("")}else ae===void 0&&(ae=Gc($n,P)),ae!==null&&typeof cn=="string"&&(cn=ae.createHTML(""));s&&s(f),zt=f}},ii=S({},["mi","mo","mn","ms","mtext"]),ai=S({},["foreignobject","desc","title","annotation-xml"]),dl=S({},["title","style","font","a","script"]),jn=S({},fe);S(jn,oe),S(jn,Oe);let ho=S({},kt);S(ho,At);let fl=function(f){let w=Jr(f);(!w||!w.tagName)&&(w={namespaceURI:jt,tagName:"template"});let v=p(f.tagName),W=p(w.tagName);return uo[f.namespaceURI]?f.namespaceURI===Fn?w.namespaceURI===Ne?v==="svg":w.namespaceURI===Pn?v==="svg"&&(W==="annotation-xml"||ii[W]):!!jn[v]:f.namespaceURI===Pn?w.namespaceURI===Ne?v==="math":w.namespaceURI===Fn?v==="math"&&ai[W]:!!ho[v]:f.namespaceURI===Ne?w.namespaceURI===Fn&&!ai[W]||w.namespaceURI===Pn&&!ii[W]?!1:!ho[v]&&(dl[v]||!jn[v]):!!(St==="application/xhtml+xml"&&uo[f.namespaceURI]):!1},Lt=function(f){h(_.removed,{element:f});try{f.parentNode.removeChild(f)}catch{f.remove()}},po=function(f,w){try{h(_.removed,{attribute:w.getAttributeNode(f),from:w})}catch{h(_.removed,{attribute:null,from:w})}if(w.removeAttribute(f),f==="is"&&!ee[f])if(Nt||On)try{Lt(w)}catch{}else try{w.setAttribute(f,"")}catch{}},ci=function(f){let w,v;if(io)f="<remove></remove>"+f;else{let ye=y(f,/^[\r\n\t ]+/);v=ye&&ye[0]}St==="application/xhtml+xml"&&jt===Ne&&(f='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+f+"</body></html>");let W=ae?ae.createHTML(f):f;if(jt===Ne)try{w=new Zc().parseFromString(W,St)}catch{}if(!w||!w.documentElement){w=Qr.createDocument(jt,"template",null);try{w.documentElement.innerHTML=lo?cn:W}catch{}}let ne=w.body||w.documentElement;return f&&v&&ne.insertBefore(J.createTextNode(v),ne.childNodes[0]||null),jt===Ne?tl.call(w,Tt?"html":"body")[0]:Tt?w.documentElement:ne},li=function(f){return Qc.call(f.ownerDocument||f,f,Xr.SHOW_ELEMENT|Xr.SHOW_COMMENT|Xr.SHOW_TEXT,null,!1)},hl=function(f){return f instanceof Vc&&(typeof f.nodeName!="string"||typeof f.textContent!="string"||typeof f.removeChild!="function"||!(f.attributes instanceof Kc)||typeof f.removeAttribute!="function"||typeof f.setAttribute!="function"||typeof f.namespaceURI!="string"||typeof f.insertBefore!="function"||typeof f.hasChildNodes!="function")},zn=function(f){return typeof Yr=="object"?f instanceof Yr:f&&typeof f=="object"&&typeof f.nodeType=="number"&&typeof f.nodeName=="string"},Pe=function(f,w,v){_e[f]&&l(_e[f],W=>{W.call(_,w,v,zt)})},ui=function(f){let w;if(Pe("beforeSanitizeElements",f,null),hl(f))return Lt(f),!0;let v=te(f.nodeName);if(Pe("uponSanitizeElement",f,{tagName:v,allowedTags:Q}),f.hasChildNodes()&&!zn(f.firstElementChild)&&(!zn(f.content)||!zn(f.content.firstElementChild))&&b(/<[/\w]/g,f.innerHTML)&&b(/<[/\w]/g,f.textContent))return Lt(f),!0;if(!Q[v]||ln[v]){if(!ln[v]&&fi(v)&&(X.tagNameCheck instanceof RegExp&&b(X.tagNameCheck,v)||X.tagNameCheck instanceof Function&&X.tagNameCheck(v)))return!1;if(ao&&!Ft[v]){let W=Jr(f)||f.parentNode,ne=Jc(f)||f.childNodes;if(ne&&W){let ye=ne.length;for(let Z=ye-1;Z>=0;--Z)W.insertBefore(Yc(ne[Z],!0),Xc(f))}}return Lt(f),!0}return f instanceof Gs&&!fl(f)||(v==="noscript"||v==="noembed")&&b(/<\/no(script|embed)/i,f.innerHTML)?(Lt(f),!0):(Ot&&f.nodeType===3&&(w=f.textContent,w=g(w,eo," "),w=g(w,to," "),w=g(w,no," "),f.textContent!==w&&(h(_.removed,{element:f.cloneNode()}),f.textContent=w)),Pe("afterSanitizeElements",f,null),!1)},di=function(f,w,v){if(Qs&&(w==="id"||w==="name")&&(v in J||v in ul))return!1;if(!(oo&&!ro[w]&&b(rl,w))){if(!(Ys&&b(ol,w))){if(!ee[w]||ro[w]){if(!(fi(f)&&(X.tagNameCheck instanceof RegExp&&b(X.tagNameCheck,f)||X.tagNameCheck instanceof Function&&X.tagNameCheck(f))&&(X.attributeNameCheck instanceof RegExp&&b(X.attributeNameCheck,w)||X.attributeNameCheck instanceof Function&&X.attributeNameCheck(w))||w==="is"&&X.allowCustomizedBuiltInElements&&(X.tagNameCheck instanceof RegExp&&b(X.tagNameCheck,v)||X.tagNameCheck instanceof Function&&X.tagNameCheck(v))))return!1}else if(!co[w]){if(!b(Ks,g(v,qs,""))){if(!((w==="src"||w==="xlink:href"||w==="href")&&f!=="script"&&k(v,"data:")===0&&ni[f])){if(!(Xs&&!b(sl,g(v,qs,"")))){if(v)return!1}}}}}}return!0},fi=function(f){return f.indexOf("-")>0},hi=function(f){let w,v,W,ne;Pe("beforeSanitizeAttributes",f,null);let{attributes:ye}=f;if(!ye)return;let Z={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:ee};for(ne=ye.length;ne--;){w=ye[ne];let{name:Be,namespaceURI:mo}=w;if(v=Be==="value"?w.value:L(w.value),W=te(Be),Z.attrName=W,Z.attrValue=v,Z.keepAttr=!0,Z.forceKeepAttr=void 0,Pe("uponSanitizeAttribute",f,Z),v=Z.attrValue,Z.forceKeepAttr||(po(Be,f),!Z.keepAttr))continue;if(!Js&&b(/\/>/i,v)){po(Be,f);continue}Ot&&(v=g(v,eo," "),v=g(v,to," "),v=g(v,no," "));let pi=te(f.nodeName);if(di(pi,W,v)){if(ei&&(W==="id"||W==="name")&&(po(Be,f),v=il+v),ae&&typeof $n=="object"&&typeof $n.getAttributeType=="function"&&!mo)switch($n.getAttributeType(pi,W)){case"TrustedHTML":{v=ae.createHTML(v);break}case"TrustedScriptURL":{v=ae.createScriptURL(v);break}}try{mo?f.setAttributeNS(mo,Be,v):f.setAttribute(Be,v),u(_.removed)}catch{}}}Pe("afterSanitizeAttributes",f,null)},pl=function T(f){let w,v=li(f);for(Pe("beforeSanitizeShadowDOM",f,null);w=v.nextNode();)Pe("uponSanitizeShadowNode",w,null),!ui(w)&&(w.content instanceof Ee&&T(w.content),hi(w));Pe("afterSanitizeShadowDOM",f,null)};return _.sanitize=function(T){let f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},w,v,W,ne;if(lo=!T,lo&&(T="<!-->"),typeof T!="string"&&!zn(T))if(typeof T.toString=="function"){if(T=T.toString(),typeof T!="string")throw H("dirty is not a string, aborting")}else throw H("toString is not a function");if(!_.isSupported)return T;if(so||fo(f),_.removed=[],typeof T=="string"&&(un=!1),un){if(T.nodeName){let Be=te(T.nodeName);if(!Q[Be]||ln[Be])throw H("root node is forbidden and cannot be sanitized in-place")}}else if(T instanceof Yr)w=ci("<!---->"),v=w.ownerDocument.importNode(T,!0),v.nodeType===1&&v.nodeName==="BODY"||v.nodeName==="HTML"?w=v:w.appendChild(v);else{if(!Nt&&!Ot&&!Tt&&T.indexOf("<")===-1)return ae&&Nn?ae.createHTML(T):T;if(w=ci(T),!w)return Nt?null:Nn?cn:""}w&&io&&Lt(w.firstChild);let ye=li(un?T:w);for(;W=ye.nextNode();)ui(W)||(W.content instanceof Ee&&pl(W.content),hi(W));if(un)return T;if(Nt){if(On)for(ne=el.call(w.ownerDocument);w.firstChild;)ne.appendChild(w.firstChild);else ne=w;return(ee.shadowroot||ee.shadowrootmod)&&(ne=nl.call(G,ne,!0)),ne}let Z=Tt?w.outerHTML:w.innerHTML;return Tt&&Q["!doctype"]&&w.ownerDocument&&w.ownerDocument.doctype&&w.ownerDocument.doctype.name&&b(js,w.ownerDocument.doctype.name)&&(Z="<!DOCTYPE "+w.ownerDocument.doctype.name+`>
`+Z),Ot&&(Z=g(Z,eo," "),Z=g(Z,to," "),Z=g(Z,no," ")),ae&&Nn?ae.createHTML(Z):Z},_.setConfig=function(T){fo(T),so=!0},_.clearConfig=function(){zt=null,so=!1},_.isValidAttribute=function(T,f,w){zt||fo({});let v=te(T),W=te(f);return di(v,W,w)},_.addHook=function(T,f){typeof f=="function"&&(_e[T]=_e[T]||[],h(_e[T],f))},_.removeHook=function(T){if(_e[T])return u(_e[T])},_.removeHooks=function(T){_e[T]&&(_e[T]=[])},_.removeAllHooks=function(){_e={}},_}var qc=Ws();return qc})});var Wt=ie((Ch,gi)=>{gi.exports=window.DOMPurify||(window.DOMPurify=Eo().default||Eo())});var q,Gt,wi,Fe=D(()=>{"use strict";q=t=>localStorage.getItem(t),Gt=(t,e)=>{localStorage.setItem(t,e)},wi=()=>{localStorage.clear()}});var xi=ie(()=>{});function ki(t){let{a:e,b:n}=F,r=x(t*t),o=x(r*t);return x(o+e*t+n)}function Ai(t){if(!(t instanceof N))throw new TypeError("JacobianPoint expected")}function Kn(t,e){let n=e.negate();return t?n:e}function Ti(t){return Number.parseInt(t[0],16)>=8?"00"+t:t}function Si(t){if(t.length<2||t[0]!==2)throw new Error(`Invalid signature integer tag: ${Vt(t)}`);let e=t[1],n=t.subarray(2,e+2);if(!e||n.length!==e)throw new Error("Invalid signature integer: wrong length");if(n[0]===0&&n[1]<=127)throw new Error("Invalid signature integer: trailing length");return{data:pe(n),left:t.subarray(e+2)}}function Al(t){if(t.length<2||t[0]!=48)throw new Error(`Invalid signature tag: ${Vt(t)}`);if(t[1]!==t.length-2)throw new Error("Invalid signature: incorrect length");let{data:e,left:n}=Si(t.subarray(2)),{data:r,left:o}=Si(n);if(o.length)throw new Error(`Invalid signature: left bytes after parsing: ${Vt(o)}`);return{r:e,s:r}}function Qe(...t){if(!t.every(r=>r instanceof Uint8Array))throw new Error("Uint8Array list expected");if(t.length===1)return t[0];let e=t.reduce((r,o)=>r+o.length,0),n=new Uint8Array(e);for(let r=0,o=0;r<t.length;r++){let s=t[r];n.set(s,o),o+=s.length}return n}function Vt(t){if(!(t instanceof Uint8Array))throw new Error("Expected Uint8Array");let e="";for(let n=0;n<t.length;n++)e+=Tl[t[n]];return e}function tt(t){if(typeof t!="bigint")throw new Error("Expected bigint");if(!(U<=t&&t<Sl))throw new Error("Expected number 0 <= n < 2^256");return t.toString(16).padStart(64,"0")}function Zt(t){let e=nt(tt(t));if(e.length!==32)throw new Error("Error: expected 32 bytes");return e}function dn(t){let e=t.toString(16);return e.length&1?`0${e}`:e}function Jn(t){if(typeof t!="string")throw new TypeError("hexToNumber: expected string, got "+typeof t);return BigInt(`0x${t}`)}function nt(t){if(typeof t!="string")throw new TypeError("hexToBytes: expected string, got "+typeof t);if(t.length%2)throw new Error("hexToBytes: received invalid unpadded hex"+t.length);let e=new Uint8Array(t.length/2);for(let n=0;n<e.length;n++){let r=n*2,o=t.slice(r,r+2),s=Number.parseInt(o,16);if(Number.isNaN(s)||s<0)throw new Error("Invalid byte sequence");e[n]=s}return e}function pe(t){return Jn(Vt(t))}function He(t){return t instanceof Uint8Array?Uint8Array.from(t):nt(t)}function Li(t){if(typeof t=="number"&&Number.isSafeInteger(t)&&t>0)return BigInt(t);if(typeof t=="bigint"&&Yt(t))return t;throw new TypeError("Expected valid private scalar: 0 < scalar < curve.n")}function x(t,e=F.P){let n=t%e;return n>=U?n:e+n}function be(t,e){let{P:n}=F,r=t;for(;e-- >U;)r*=r,r%=n;return r}function Ll(t){let{P:e}=F,n=BigInt(6),r=BigInt(11),o=BigInt(22),s=BigInt(23),i=BigInt(44),a=BigInt(88),c=t*t*t%e,d=c*c*t%e,l=be(d,fn)*d%e,u=be(l,fn)*d%e,h=be(u,et)*c%e,p=be(h,r)*h%e,m=be(p,o)*p%e,y=be(m,i)*m%e,g=be(y,a)*y%e,k=be(g,i)*m%e,L=be(k,fn)*d%e,b=be(L,s)*p%e,H=be(b,n)*c%e,E=be(H,et);if(E*E%e!==t)throw new Error("Cannot find square root");return E}function Xt(t,e=F.P){if(t===U||e<=U)throw new Error(`invert: expected positive integers, got n=${t} mod=${e}`);let n=x(t,e),r=e,o=U,s=K,i=K,a=U;for(;n!==U;){let d=r/n,l=r%n,u=o-i*d,h=s-a*d;r=n,n=l,o=i,s=a,i=u,a=h}if(r!==K)throw new Error("invert: does not exist");return x(o,e)}function _l(t,e=F.P){let n=new Array(t.length),r=t.reduce((s,i,a)=>i===U?s:(n[a]=s,x(s*i,e)),K),o=Xt(r,e);return t.reduceRight((s,i,a)=>i===U?s:(n[a]=x(s*n[a],e),x(s*i,e)),o),n}function Bl(t){let e=t.length*8-Kt*8,n=pe(t);return e>0?n>>BigInt(e):n}function To(t,e=!1){let n=Bl(t);if(e)return n;let{n:r}=F;return n>=r?n-r:n}function Yt(t){return U<t&&t<F.n}function Zn(t){return U<t&&t<F.P}function Hl(t,e,n,r=!0){let{n:o}=F,s=To(t,!0);if(!Yt(s))return;let i=Xt(s,o),a=$.BASE.multiply(s),c=x(a.x,o);if(c===U)return;let d=x(i*x(e+n*c,o),o);if(d===U)return;let l=new ge(c,d),u=(a.x===l.r?0:2)|Number(a.y&K);return r&&l.hasHighS()&&(l=l.normalizeS(),u^=1),{sig:l,recovery:u}}function _t(t){let e;if(typeof t=="bigint")e=t;else if(typeof t=="number"&&Number.isSafeInteger(t)&&t>0)e=BigInt(t);else if(typeof t=="string"){if(t.length!==2*Kt)throw new Error("Expected 32 bytes of private key");e=Jn(t)}else if(t instanceof Uint8Array){if(t.length!==Kt)throw new Error("Expected 32 bytes of private key");e=pe(t)}else throw new TypeError("Expected valid private key");if(!Yt(e))throw new Error("Expected private key: 0 < key < n");return e}function So(t){return t instanceof $?(t.assertValidity(),t):$.fromHex(t)}function Bi(t){if(t instanceof ge)return t.assertValidity(),t;try{return ge.fromDER(t)}catch{return ge.fromCompact(t)}}function Hi(t,e=!1){return $.fromPrivateKey(t).toRawBytes(e)}function _i(t){let e=t instanceof Uint8Array,n=typeof t=="string",r=(e||n)&&t.length;return e?r===Yn||r===Xn:n?r===Yn*2||r===Xn*2:t instanceof $}function Lo(t,e,n=!1){if(_i(t))throw new TypeError("getSharedSecret: first arg must be private key");if(!_i(e))throw new TypeError("getSharedSecret: second arg must be public key");let r=So(e);return r.assertValidity(),r.multiply(_t(t)).toRawBytes(n)}function Ii(t){let e=t.length>ke?t.slice(0,ke):t;return pe(e)}function Il(t){let e=Ii(t),n=x(e,F.n);return Ci(n<U?e:n)}function Ci(t){return Zt(t)}function Cl(t,e,n){if(t==null)throw new Error(`sign: expected valid message hash, not "${t}"`);let r=He(t),o=_t(e),s=[Ci(o),Il(r)];if(n!=null){n===!0&&(n=B.randomBytes(ke));let c=He(n);if(c.length!==ke)throw new Error(`sign: Expected ${ke} bytes of extra data`);s.push(c)}let i=Qe(...s),a=Ii(r);return{seed:i,m:a,d:o}}function Ml(t,e){let{sig:n,recovery:r}=t,{der:o,recovered:s}=Object.assign({canonical:!0,der:!0},e),i=o?n.toDERRawBytes():n.toCompactRawBytes();return s?[i,r]:i}function Mi(t,e,n={}){let{seed:r,m:o,d:s}=Cl(t,e,n.extraEntropy),i=new Ao(kl,Kt);i.reseedSync(r);let a;for(;!(a=Hl(i.generateSync(),o,s,n.canonical));)i.reseedSync();return Ml(a,n)}function Ri(t,e,n,r=Rl){let o;try{o=Bi(t),e=He(e)}catch{return!1}let{r:s,s:i}=o;if(r.strict&&o.hasHighS())return!1;let a=To(e),c;try{c=So(n)}catch{return!1}let{n:d}=F,l=Xt(i,d),u=x(a*l,d),h=x(s*l,d),p=$.BASE.multiplyAndAddUnsafe(c,u,h);return p?x(p.x,d)===s:!1}function Qn(t){return x(pe(t),F.n)}function Dl(t){return $.fromPrivateKey(t).toRawX()}async function $l(t,e,n){return new er(t,e,n).calc()}function Ul(t,e,n){return new er(t,e,n).calcSync()}function Di(t,e,n){let r=t instanceof rt,o=r?t:rt.fromHex(t);return r&&o.assertValidity(),{...o,m:He(e),P:So(n)}}function $i(t,e,n,r){let o=$.BASE.multiplyAndAddUnsafe(e,_t(n),x(-r,F.n));return!(!o||!o.hasEvenY()||o.x!==t)}async function Ui(t,e,n){try{let{r,s:o,m:s,P:i}=Di(t,e,n),a=Qn(await B.taggedHash(Je.challenge,Zt(r),i.toRawX(),s));return $i(r,i,o,a)}catch{return!1}}function Oi(t,e,n){try{let{r,s:o,m:s,P:i}=Di(t,e,n),a=Qn(B.taggedHashSync(Je.challenge,Zt(r),i.toRawX(),s));return $i(r,i,o,a)}catch(r){if(r instanceof pn)throw r;return!1}}var El,U,K,et,fn,vi,F,Ei,Gn,ke,Kt,kl,Yn,Xn,qn,pn,N,ko,$,ge,Tl,Sl,qt,hn,Ao,Rl,rt,er,Bt,he,Je,Vn,B,je=D(()=>{El=Xe(xi(),1);U=BigInt(0),K=BigInt(1),et=BigInt(2),fn=BigInt(3),vi=BigInt(8),F=Object.freeze({a:U,b:BigInt(7),P:BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"),n:BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"),h:K,Gx:BigInt("55066263022277343669578718895168534326250603453777594175500187360389116729240"),Gy:BigInt("32670510020758816978083085130507043184471273380659243275938904335757337482424"),beta:BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee")}),Ei=(t,e)=>(t+e/et)/e,Gn={beta:BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),splitScalar(t){let{n:e}=F,n=BigInt("0x3086d221a7d46bcde86c90e49284eb15"),r=-K*BigInt("0xe4437ed6010e88286f547fa90abfe4c3"),o=BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"),s=n,i=BigInt("0x100000000000000000000000000000000"),a=Ei(s*t,e),c=Ei(-r*t,e),d=x(t-a*n-c*o,e),l=x(-a*r-c*s,e),u=d>i,h=l>i;if(u&&(d=e-d),h&&(l=e-l),d>i||l>i)throw new Error("splitScalarEndo: Endomorphism failed, k="+t);return{k1neg:u,k1:d,k2neg:h,k2:l}}},ke=32,Kt=32,kl=32,Yn=ke+1,Xn=2*ke+1;qn=F.a===U,pn=class extends Error{constructor(e){super(e)}};N=class{constructor(e,n,r){this.x=e,this.y=n,this.z=r}static fromAffine(e){if(!(e instanceof $))throw new TypeError("JacobianPoint#fromAffine: expected Point");return e.equals($.ZERO)?N.ZERO:new N(e.x,e.y,K)}static toAffineBatch(e){let n=_l(e.map(r=>r.z));return e.map((r,o)=>r.toAffine(n[o]))}static normalizeZ(e){return N.toAffineBatch(e).map(N.fromAffine)}equals(e){Ai(e);let{x:n,y:r,z:o}=this,{x:s,y:i,z:a}=e,c=x(o*o),d=x(a*a),l=x(n*d),u=x(s*c),h=x(x(r*a)*d),p=x(x(i*o)*c);return l===u&&h===p}negate(){return new N(this.x,x(-this.y),this.z)}double(){let{x:e,y:n,z:r}=this,o=x(e*e),s=x(n*n),i=x(s*s),a=e+s,c=x(et*(x(a*a)-o-i)),d=x(fn*o),l=x(d*d),u=x(l-et*c),h=x(d*(c-u)-vi*i),p=x(et*n*r);return new N(u,h,p)}add(e){Ai(e);let{x:n,y:r,z:o}=this,{x:s,y:i,z:a}=e;if(s===U||i===U)return this;if(n===U||r===U)return e;let c=x(o*o),d=x(a*a),l=x(n*d),u=x(s*c),h=x(x(r*a)*d),p=x(x(i*o)*c),m=x(u-l),y=x(p-h);if(m===U)return y===U?this.double():N.ZERO;let g=x(m*m),k=x(m*g),L=x(l*g),b=x(y*y-k-et*L),H=x(y*(L-b)-h*k),E=x(o*a*m);return new N(b,H,E)}subtract(e){return this.add(e.negate())}multiplyUnsafe(e){let n=N.ZERO;if(typeof e=="bigint"&&e===U)return n;let r=Li(e);if(r===K)return this;if(!qn){let u=n,h=this;for(;r>U;)r&K&&(u=u.add(h)),h=h.double(),r>>=K;return u}let{k1neg:o,k1:s,k2neg:i,k2:a}=Gn.splitScalar(r),c=n,d=n,l=this;for(;s>U||a>U;)s&K&&(c=c.add(l)),a&K&&(d=d.add(l)),l=l.double(),s>>=K,a>>=K;return o&&(c=c.negate()),i&&(d=d.negate()),d=new N(x(d.x*Gn.beta),d.y,d.z),c.add(d)}precomputeWindow(e){let n=qn?128/e+1:256/e+1,r=[],o=this,s=o;for(let i=0;i<n;i++){s=o,r.push(s);for(let a=1;a<2**(e-1);a++)s=s.add(o),r.push(s);o=s.double()}return r}wNAF(e,n){!n&&this.equals(N.BASE)&&(n=$.BASE);let r=n&&n._WINDOW_SIZE||1;if(256%r)throw new Error("Point#wNAF: Invalid precomputation window, must be power of 2");let o=n&&ko.get(n);o||(o=this.precomputeWindow(r),n&&r!==1&&(o=N.normalizeZ(o),ko.set(n,o)));let s=N.ZERO,i=N.BASE,a=1+(qn?128/r:256/r),c=2**(r-1),d=BigInt(2**r-1),l=2**r,u=BigInt(r);for(let h=0;h<a;h++){let p=h*c,m=Number(e&d);e>>=u,m>c&&(m-=l,e+=K);let y=p,g=p+Math.abs(m)-1,k=h%2!==0,L=m<0;m===0?i=i.add(Kn(k,o[y])):s=s.add(Kn(L,o[g]))}return{p:s,f:i}}multiply(e,n){let r=Li(e),o,s;if(qn){let{k1neg:i,k1:a,k2neg:c,k2:d}=Gn.splitScalar(r),{p:l,f:u}=this.wNAF(a,n),{p:h,f:p}=this.wNAF(d,n);l=Kn(i,l),h=Kn(c,h),h=new N(x(h.x*Gn.beta),h.y,h.z),o=l.add(h),s=u.add(p)}else{let{p:i,f:a}=this.wNAF(r,n);o=i,s=a}return N.normalizeZ([o,s])[0]}toAffine(e){let{x:n,y:r,z:o}=this,s=this.equals(N.ZERO);e==null&&(e=s?vi:Xt(o));let i=e,a=x(i*i),c=x(a*i),d=x(n*a),l=x(r*c),u=x(o*i);if(s)return $.ZERO;if(u!==K)throw new Error("invZ was invalid");return new $(d,l)}};N.BASE=new N(F.Gx,F.Gy,K);N.ZERO=new N(U,K,U);ko=new WeakMap,$=class{constructor(e,n){this.x=e,this.y=n}_setWindowSize(e){this._WINDOW_SIZE=e,ko.delete(this)}hasEvenY(){return this.y%et===U}static fromCompressedHex(e){let n=e.length===32,r=pe(n?e:e.subarray(1));if(!Zn(r))throw new Error("Point is not on curve");let o=ki(r),s=Ll(o),i=(s&K)===K;n?i&&(s=x(-s)):(e[0]&1)===1!==i&&(s=x(-s));let a=new $(r,s);return a.assertValidity(),a}static fromUncompressedHex(e){let n=pe(e.subarray(1,ke+1)),r=pe(e.subarray(ke+1,ke*2+1)),o=new $(n,r);return o.assertValidity(),o}static fromHex(e){let n=He(e),r=n.length,o=n[0];if(r===ke)return this.fromCompressedHex(n);if(r===Yn&&(o===2||o===3))return this.fromCompressedHex(n);if(r===Xn&&o===4)return this.fromUncompressedHex(n);throw new Error(`Point.fromHex: received invalid point. Expected 32-${Yn} compressed bytes or ${Xn} uncompressed bytes, not ${r}`)}static fromPrivateKey(e){return $.BASE.multiply(_t(e))}static fromSignature(e,n,r){let{r:o,s}=Bi(n);if(![0,1,2,3].includes(r))throw new Error("Cannot recover: invalid recovery bit");let i=To(He(e)),{n:a}=F,c=r===2||r===3?o+a:o,d=Xt(c,a),l=x(-i*d,a),u=x(s*d,a),h=r&1?"03":"02",p=$.fromHex(h+tt(c)),m=$.BASE.multiplyAndAddUnsafe(p,l,u);if(!m)throw new Error("Cannot recover signature: point at infinify");return m.assertValidity(),m}toRawBytes(e=!1){return nt(this.toHex(e))}toHex(e=!1){let n=tt(this.x);return e?`${this.hasEvenY()?"02":"03"}${n}`:`04${n}${tt(this.y)}`}toHexX(){return this.toHex(!0).slice(2)}toRawX(){return this.toRawBytes(!0).slice(1)}assertValidity(){let e="Point is not on elliptic curve",{x:n,y:r}=this;if(!Zn(n)||!Zn(r))throw new Error(e);let o=x(r*r),s=ki(n);if(x(o-s)!==U)throw new Error(e)}equals(e){return this.x===e.x&&this.y===e.y}negate(){return new $(this.x,x(-this.y))}double(){return N.fromAffine(this).double().toAffine()}add(e){return N.fromAffine(this).add(N.fromAffine(e)).toAffine()}subtract(e){return this.add(e.negate())}multiply(e){return N.fromAffine(this).multiply(e,this).toAffine()}multiplyAndAddUnsafe(e,n,r){let o=N.fromAffine(this),s=n===U||n===K||this!==$.BASE?o.multiplyUnsafe(n):o.multiply(n),i=N.fromAffine(e).multiplyUnsafe(r),a=s.add(i);return a.equals(N.ZERO)?void 0:a.toAffine()}};$.BASE=new $(F.Gx,F.Gy);$.ZERO=new $(U,U);ge=class{constructor(e,n){this.r=e,this.s=n,this.assertValidity()}static fromCompact(e){let n=e instanceof Uint8Array,r="Signature.fromCompact";if(typeof e!="string"&&!n)throw new TypeError(`${r}: Expected string or Uint8Array`);let o=n?Vt(e):e;if(o.length!==128)throw new Error(`${r}: Expected 64-byte hex`);return new ge(Jn(o.slice(0,64)),Jn(o.slice(64,128)))}static fromDER(e){let n=e instanceof Uint8Array;if(typeof e!="string"&&!n)throw new TypeError("Signature.fromDER: Expected string or Uint8Array");let{r,s:o}=Al(n?e:nt(e));return new ge(r,o)}static fromHex(e){return this.fromDER(e)}assertValidity(){let{r:e,s:n}=this;if(!Yt(e))throw new Error("Invalid Signature: r must be 0 < r < n");if(!Yt(n))throw new Error("Invalid Signature: s must be 0 < s < n")}hasHighS(){let e=F.n>>K;return this.s>e}normalizeS(){return this.hasHighS()?new ge(this.r,x(-this.s,F.n)):this}toDERRawBytes(){return nt(this.toDERHex())}toDERHex(){let e=Ti(dn(this.s)),n=Ti(dn(this.r)),r=e.length/2,o=n.length/2,s=dn(r),i=dn(o);return`30${dn(o+r+4)}02${i}${n}02${s}${e}`}toRawBytes(){return this.toDERRawBytes()}toHex(){return this.toDERHex()}toCompactRawBytes(){return nt(this.toCompactHex())}toCompactHex(){return tt(this.r)+tt(this.s)}};Tl=Array.from({length:256},(t,e)=>e.toString(16).padStart(2,"0"));Sl=BigInt("0x10000000000000000000000000000000000000000000000000000000000000000");Ao=class{constructor(e,n){if(this.hashLen=e,this.qByteLen=n,typeof e!="number"||e<2)throw new Error("hashLen must be a number");if(typeof n!="number"||n<2)throw new Error("qByteLen must be a number");this.v=new Uint8Array(e).fill(1),this.k=new Uint8Array(e).fill(0),this.counter=0}hmac(...e){return B.hmacSha256(this.k,...e)}hmacSync(...e){return hn(this.k,...e)}checkSync(){if(typeof hn!="function")throw new pn("hmacSha256Sync needs to be set")}incr(){if(this.counter>=1e3)throw new Error("Tried 1,000 k values for sign(), all were invalid");this.counter+=1}async reseed(e=new Uint8Array){this.k=await this.hmac(this.v,Uint8Array.from([0]),e),this.v=await this.hmac(this.v),e.length!==0&&(this.k=await this.hmac(this.v,Uint8Array.from([1]),e),this.v=await this.hmac(this.v))}reseedSync(e=new Uint8Array){this.checkSync(),this.k=this.hmacSync(this.v,Uint8Array.from([0]),e),this.v=this.hmacSync(this.v),e.length!==0&&(this.k=this.hmacSync(this.v,Uint8Array.from([1]),e),this.v=this.hmacSync(this.v))}async generate(){this.incr();let e=0,n=[];for(;e<this.qByteLen;){this.v=await this.hmac(this.v);let r=this.v.slice();n.push(r),e+=this.v.length}return Qe(...n)}generateSync(){this.checkSync(),this.incr();let e=0,n=[];for(;e<this.qByteLen;){this.v=this.hmacSync(this.v);let r=this.v.slice();n.push(r),e+=this.v.length}return Qe(...n)}};Rl={strict:!0};rt=class{constructor(e,n){this.r=e,this.s=n,this.assertValidity()}static fromHex(e){let n=He(e);if(n.length!==64)throw new TypeError(`SchnorrSignature.fromHex: expected 64 bytes, not ${n.length}`);let r=pe(n.subarray(0,32)),o=pe(n.subarray(32,64));return new rt(r,o)}assertValidity(){let{r:e,s:n}=this;if(!Zn(e)||!Yt(n))throw new Error("Invalid signature")}toHex(){return tt(this.r)+tt(this.s)}toRawBytes(){return nt(this.toHex())}};er=class{constructor(e,n,r=B.randomBytes()){if(e==null)throw new TypeError(`sign: Expected valid message, not "${e}"`);this.m=He(e);let{x:o,scalar:s}=this.getScalar(_t(n));if(this.px=o,this.d=s,this.rand=He(r),this.rand.length!==32)throw new TypeError("sign: Expected 32 bytes of aux randomness")}getScalar(e){let n=$.fromPrivateKey(e),r=n.hasEvenY()?e:F.n-e;return{point:n,scalar:r,x:n.toRawX()}}initNonce(e,n){return Zt(e^pe(n))}finalizeNonce(e){let n=x(pe(e),F.n);if(n===U)throw new Error("sign: Creation of signature failed. k is zero");let{point:r,x:o,scalar:s}=this.getScalar(n);return{R:r,rx:o,k:s}}finalizeSig(e,n,r,o){return new rt(e.x,x(n+r*o,F.n)).toRawBytes()}error(){throw new Error("sign: Invalid signature produced")}async calc(){let{m:e,d:n,px:r,rand:o}=this,s=B.taggedHash,i=this.initNonce(n,await s(Je.aux,o)),{R:a,rx:c,k:d}=this.finalizeNonce(await s(Je.nonce,i,r,e)),l=Qn(await s(Je.challenge,c,r,e)),u=this.finalizeSig(a,d,l,n);return await Ui(u,e,r)||this.error(),u}calcSync(){let{m:e,d:n,px:r,rand:o}=this,s=B.taggedHashSync,i=this.initNonce(n,s(Je.aux,o)),{R:a,rx:c,k:d}=this.finalizeNonce(s(Je.nonce,i,r,e)),l=Qn(s(Je.challenge,c,r,e)),u=this.finalizeSig(a,d,l,n);return Oi(u,e,r)||this.error(),u}};Bt={Signature:rt,getPublicKey:Dl,sign:$l,verify:Ui,signSync:Ul,verifySync:Oi};$.BASE._setWindowSize(8);he={node:El,web:typeof self=="object"&&"crypto"in self?self.crypto:void 0},Je={challenge:"BIP0340/challenge",aux:"BIP0340/aux",nonce:"BIP0340/nonce"},Vn={},B={bytesToHex:Vt,hexToBytes:nt,concatBytes:Qe,mod:x,invert:Xt,isValidPrivateKey(t){try{return _t(t),!0}catch{return!1}},_bigintTo32Bytes:Zt,_normalizePrivateKey:_t,hashToPrivateKey:t=>{t=He(t);let e=Kt+8;if(t.length<e||t.length>1024)throw new Error("Expected valid bytes of private key as per FIPS 186");let n=x(pe(t),F.n-K)+K;return Zt(n)},randomBytes:(t=32)=>{if(he.web)return he.web.getRandomValues(new Uint8Array(t));if(he.node){let{randomBytes:e}=he.node;return Uint8Array.from(e(t))}else throw new Error("The environment doesn't have randomBytes function")},randomPrivateKey:()=>B.hashToPrivateKey(B.randomBytes(Kt+8)),precompute(t=8,e=$.BASE){let n=e===$.BASE?e:new $(e.x,e.y);return n._setWindowSize(t),n.multiply(fn),n},sha256:async(...t)=>{if(he.web){let e=await he.web.subtle.digest("SHA-256",Qe(...t));return new Uint8Array(e)}else if(he.node){let{createHash:e}=he.node,n=e("sha256");return t.forEach(r=>n.update(r)),Uint8Array.from(n.digest())}else throw new Error("The environment doesn't have sha256 function")},hmacSha256:async(t,...e)=>{if(he.web){let n=await he.web.subtle.importKey("raw",t,{name:"HMAC",hash:{name:"SHA-256"}},!1,["sign"]),r=Qe(...e),o=await he.web.subtle.sign("HMAC",n,r);return new Uint8Array(o)}else if(he.node){let{createHmac:n}=he.node,r=n("sha256",t);return e.forEach(o=>r.update(o)),Uint8Array.from(r.digest())}else throw new Error("The environment doesn't have hmac-sha256 function")},sha256Sync:void 0,hmacSha256Sync:void 0,taggedHash:async(t,...e)=>{let n=Vn[t];if(n===void 0){let r=await B.sha256(Uint8Array.from(t,o=>o.charCodeAt(0)));n=Qe(r,r),Vn[t]=n}return B.sha256(n,...e)},taggedHashSync:(t,...e)=>{if(typeof qt!="function")throw new pn("sha256Sync is undefined, you need to set it");let n=Vn[t];if(n===void 0){let r=qt(Uint8Array.from(t,o=>o.charCodeAt(0)));n=Qe(r,r),Vn[t]=n}return qt(n,...e)},_JacobianPoint:N};Object.defineProperties(B,{sha256Sync:{configurable:!1,get(){return qt},set(t){qt||(qt=t)}},hmacSha256Sync:{configurable:!1,get(){return hn},set(t){hn||(hn=t)}}})});var mn,Ni=D(()=>{mn={node:void 0,web:typeof self=="object"&&"crypto"in self?self.crypto:void 0}});function Nl(t){if(typeof t!="string")throw new TypeError(`utf8ToBytes expected string, got ${typeof t}`);return new TextEncoder().encode(t)}function yn(t){if(typeof t=="string"&&(t=Nl(t)),!(t instanceof Uint8Array))throw new TypeError(`Expected input type is Uint8Array (got ${typeof t})`);return t}function Pi(t){if(!Number.isSafeInteger(t)||t<0)throw new Error(`Wrong positive integer: ${t}`)}function Fi(t){if(typeof t!="function"||typeof t.create!="function")throw new Error("Hash should be wrapped by utils.wrapConstructor");Pi(t.outputLen),Pi(t.blockLen)}function ji(t){let e=r=>t().update(yn(r)).digest(),n=t();return e.outputLen=n.outputLen,e.blockLen=n.blockLen,e.create=()=>t(),e}function zi(t=32){if(mn.web)return mn.web.getRandomValues(new Uint8Array(t));if(mn.node)return new Uint8Array(mn.node.randomBytes(t).buffer);throw new Error("The environment doesn't have randomBytes function")}var tr,Ae,Ol,Oh,Nh,Ht,bn=D(()=>{Ni();tr=t=>new DataView(t.buffer,t.byteOffset,t.byteLength),Ae=(t,e)=>t<<32-e|t>>>e,Ol=new Uint8Array(new Uint32Array([287454020]).buffer)[0]===68;if(!Ol)throw new Error("Non little-endian hardware is not supported");Oh=Array.from({length:256},(t,e)=>e.toString(16).padStart(2,"0")),Nh=(()=>{let t=typeof module<"u"&&typeof module.require=="function"&&module.require.bind(module);try{if(t){let{setImmediate:e}=t("timers");return()=>new Promise(n=>e(n))}}catch{}return()=>new Promise(e=>setTimeout(e,0))})();Ht=class{clone(){return this._cloneInto()}}});function Pl(t,e,n,r){if(typeof t.setBigUint64=="function")return t.setBigUint64(e,n,r);let o=BigInt(32),s=BigInt(4294967295),i=Number(n>>o&s),a=Number(n&s),c=r?4:0,d=r?0:4;t.setUint32(e+c,i,r),t.setUint32(e+d,a,r)}var nr,Wi=D(()=>{bn();nr=class extends Ht{constructor(e,n,r,o){super(),this.blockLen=e,this.outputLen=n,this.padOffset=r,this.isLE=o,this.finished=!1,this.length=0,this.pos=0,this.destroyed=!1,this.buffer=new Uint8Array(e),this.view=tr(this.buffer)}update(e){if(this.destroyed)throw new Error("instance is destroyed");let{view:n,buffer:r,blockLen:o,finished:s}=this;if(s)throw new Error("digest() was already called");e=yn(e);let i=e.length;for(let a=0;a<i;){let c=Math.min(o-this.pos,i-a);if(c===o){let d=tr(e);for(;o<=i-a;a+=o)this.process(d,a);continue}r.set(e.subarray(a,a+c),this.pos),this.pos+=c,a+=c,this.pos===o&&(this.process(n,0),this.pos=0)}return this.length+=e.length,this.roundClean(),this}digestInto(e){if(this.destroyed)throw new Error("instance is destroyed");if(!(e instanceof Uint8Array)||e.length<this.outputLen)throw new Error("_Sha2: Invalid output buffer");if(this.finished)throw new Error("digest() was already called");this.finished=!0;let{buffer:n,view:r,blockLen:o,isLE:s}=this,{pos:i}=this;n[i++]=128,this.buffer.subarray(i).fill(0),this.padOffset>o-i&&(this.process(r,0),i=0);for(let c=i;c<o;c++)n[c]=0;Pl(r,o-8,BigInt(this.length*8),s),this.process(r,0);let a=tr(e);this.get().forEach((c,d)=>a.setUint32(4*d,c,s))}digest(){let{buffer:e,outputLen:n}=this;this.digestInto(e);let r=e.slice(0,n);return this.destroy(),r}_cloneInto(e){e||(e=new this.constructor),e.set(...this.get());let{blockLen:n,buffer:r,length:o,finished:s,destroyed:i,pos:a}=this;return e.length=o,e.pos=a,e.finished=s,e.destroyed=i,o%n&&e.buffer.set(r),e}}});var Fl,jl,zl,st,it,_o,at,rr=D(()=>{Wi();bn();Fl=(t,e,n)=>t&e^~t&n,jl=(t,e,n)=>t&e^t&n^e&n,zl=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),st=new Uint32Array([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]),it=new Uint32Array(64),_o=class extends nr{constructor(){super(64,32,8,!1),this.A=st[0]|0,this.B=st[1]|0,this.C=st[2]|0,this.D=st[3]|0,this.E=st[4]|0,this.F=st[5]|0,this.G=st[6]|0,this.H=st[7]|0}get(){let{A:e,B:n,C:r,D:o,E:s,F:i,G:a,H:c}=this;return[e,n,r,o,s,i,a,c]}set(e,n,r,o,s,i,a,c){this.A=e|0,this.B=n|0,this.C=r|0,this.D=o|0,this.E=s|0,this.F=i|0,this.G=a|0,this.H=c|0}process(e,n){for(let u=0;u<16;u++,n+=4)it[u]=e.getUint32(n,!1);for(let u=16;u<64;u++){let h=it[u-15],p=it[u-2],m=Ae(h,7)^Ae(h,18)^h>>>3,y=Ae(p,17)^Ae(p,19)^p>>>10;it[u]=y+it[u-7]+m+it[u-16]|0}let{A:r,B:o,C:s,D:i,E:a,F:c,G:d,H:l}=this;for(let u=0;u<64;u++){let h=Ae(a,6)^Ae(a,11)^Ae(a,25),p=l+h+Fl(a,c,d)+zl[u]+it[u]|0,y=(Ae(r,2)^Ae(r,13)^Ae(r,22))+jl(r,o,s)|0;l=d,d=c,c=a,a=i+p|0,i=s,s=o,o=r,r=p+y|0}r=r+this.A|0,o=o+this.B|0,s=s+this.C|0,i=i+this.D|0,a=a+this.E|0,c=c+this.F|0,d=d+this.G|0,l=l+this.H|0,this.set(r,o,s,i,a,c,d,l)}roundClean(){it.fill(0)}destroy(){this.set(0,0,0,0,0,0,0,0),this.buffer.fill(0)}},at=ji(()=>new _o)});function It(t){if(!Number.isSafeInteger(t))throw new Error(`Wrong integer: ${t}`)}function Ie(...t){let e=(o,s)=>i=>o(s(i)),n=Array.from(t).reverse().reduce((o,s)=>o?e(o,s.encode):s.encode,void 0),r=t.reduce((o,s)=>o?e(o,s.decode):s.decode,void 0);return{encode:n,decode:r}}function ze(t){return{encode:e=>{if(!Array.isArray(e)||e.length&&typeof e[0]!="number")throw new Error("alphabet.encode input should be an array of numbers");return e.map(n=>{if(It(n),n<0||n>=t.length)throw new Error(`Digit index outside alphabet: ${n} (alphabet: ${t.length})`);return t[n]})},decode:e=>{if(!Array.isArray(e)||e.length&&typeof e[0]!="string")throw new Error("alphabet.decode input should be array of strings");return e.map(n=>{if(typeof n!="string")throw new Error(`alphabet.decode: not string element=${n}`);let r=t.indexOf(n);if(r===-1)throw new Error(`Unknown letter: "${n}". Allowed: ${t}`);return r})}}}function We(t=""){if(typeof t!="string")throw new Error("join separator should be string");return{encode:e=>{if(!Array.isArray(e)||e.length&&typeof e[0]!="string")throw new Error("join.encode input should be array of strings");for(let n of e)if(typeof n!="string")throw new Error(`join.encode: non-string input=${n}`);return e.join(t)},decode:e=>{if(typeof e!="string")throw new Error("join.decode input should be string");return e.split(t)}}}function ir(t,e="="){if(It(t),typeof e!="string")throw new Error("padding chr should be string");return{encode(n){if(!Array.isArray(n)||n.length&&typeof n[0]!="string")throw new Error("padding.encode input should be array of strings");for(let r of n)if(typeof r!="string")throw new Error(`padding.encode: non-string input=${r}`);for(;n.length*t%8;)n.push(e);return n},decode(n){if(!Array.isArray(n)||n.length&&typeof n[0]!="string")throw new Error("padding.encode input should be array of strings");for(let o of n)if(typeof o!="string")throw new Error(`padding.decode: non-string input=${o}`);let r=n.length;if(r*t%8)throw new Error("Invalid padding: string should have whole number of bytes");for(;r>0&&n[r-1]===e;r--)if(!((r-1)*t%8))throw new Error("Invalid padding: string has too much padding");return n.slice(0,r)}}}function Yi(t){if(typeof t!="function")throw new Error("normalize fn should be function");return{encode:e=>e,decode:e=>t(e)}}function Gi(t,e,n){if(e<2)throw new Error(`convertRadix: wrong from=${e}, base cannot be less than 2`);if(n<2)throw new Error(`convertRadix: wrong to=${n}, base cannot be less than 2`);if(!Array.isArray(t))throw new Error("convertRadix: data should be array");if(!t.length)return[];let r=0,o=[],s=Array.from(t);for(s.forEach(i=>{if(It(i),i<0||i>=e)throw new Error(`Wrong integer: ${i}`)});;){let i=0,a=!0;for(let c=r;c<s.length;c++){let d=s[c],l=e*i+d;if(!Number.isSafeInteger(l)||e*i/e!==i||l-d!==e*i)throw new Error("convertRadix: carry overflow");if(i=l%n,s[c]=Math.floor(l/n),!Number.isSafeInteger(s[c])||s[c]*n+i!==l)throw new Error("convertRadix: carry overflow");if(a)s[c]?a=!1:r=c;else continue}if(o.push(i),a)break}for(let i=0;i<t.length-1&&t[i]===0;i++)o.push(0);return o.reverse()}function Bo(t,e,n,r){if(!Array.isArray(t))throw new Error("convertRadix2: data should be array");if(e<=0||e>32)throw new Error(`convertRadix2: wrong from=${e}`);if(n<=0||n>32)throw new Error(`convertRadix2: wrong to=${n}`);if(or(e,n)>32)throw new Error(`convertRadix2: carry overflow from=${e} to=${n} carryBits=${or(e,n)}`);let o=0,s=0,i=2**n-1,a=[];for(let c of t){if(It(c),c>=2**e)throw new Error(`convertRadix2: invalid data word=${c} from=${e}`);if(o=o<<e|c,s+e>32)throw new Error(`convertRadix2: carry overflow pos=${s} from=${e}`);for(s+=e;s>=n;s-=n)a.push((o>>s-n&i)>>>0);o&=2**s-1}if(o=o<<n-s&i,!r&&s>=e)throw new Error("Excess padding");if(!r&&o)throw new Error(`Non-zero padding: ${o}`);return r&&s>0&&a.push(o>>>0),a}function Wl(t){return It(t),{encode:e=>{if(!(e instanceof Uint8Array))throw new Error("radix.encode input should be Uint8Array");return Gi(Array.from(e),2**8,t)},decode:e=>{if(!Array.isArray(e)||e.length&&typeof e[0]!="number")throw new Error("radix.decode input should be array of strings");return Uint8Array.from(Gi(e,t,2**8))}}}function ct(t,e=!1){if(It(t),t<=0||t>32)throw new Error("radix2: bits should be in (0..32]");if(or(8,t)>32||or(t,8)>32)throw new Error("radix2: carry overflow");return{encode:n=>{if(!(n instanceof Uint8Array))throw new Error("radix2.encode input should be Uint8Array");return Bo(Array.from(n),8,t,!e)},decode:n=>{if(!Array.isArray(n)||n.length&&typeof n[0]!="number")throw new Error("radix2.decode input should be array of strings");return Uint8Array.from(Bo(n,t,8,e))}}}function qi(t){if(typeof t!="function")throw new Error("unsafeWrapper fn should be function");return function(...e){try{return t.apply(null,e)}catch{}}}function Gl(t,e){if(It(t),typeof e!="function")throw new Error("checksum fn should be function");return{encode(n){if(!(n instanceof Uint8Array))throw new Error("checksum.encode: input should be Uint8Array");let r=e(n).slice(0,t),o=new Uint8Array(n.length+t);return o.set(n),o.set(r,n.length),o},decode(n){if(!(n instanceof Uint8Array))throw new Error("checksum.decode: input should be Uint8Array");let r=n.slice(0,-t),o=e(r).slice(0,t),s=n.slice(-t);for(let i=0;i<t;i++)if(o[i]!==s[i])throw new Error("Invalid checksum");return r}}}function gn(t){let e=t>>25,n=(t&33554431)<<5;for(let r=0;r<Vi.length;r++)(e>>r&1)===1&&(n^=Vi[r]);return n}function Zi(t,e,n=1){let r=t.length,o=1;for(let s=0;s<r;s++){let i=t.charCodeAt(s);if(i<33||i>126)throw new Error(`Invalid prefix (${t})`);o=gn(o)^i>>5}o=gn(o);for(let s=0;s<r;s++)o=gn(o)^t.charCodeAt(s)&31;for(let s of e)o=gn(o)^s;for(let s=0;s<6;s++)o=gn(o);return o^=n,Ho.encode(Bo([o%2**30],30,5,!1))}function Qi(t){let e=t==="bech32"?1:734539939,n=ct(5),r=n.decode,o=n.encode,s=qi(r);function i(l,u,h=90){if(typeof l!="string")throw new Error(`bech32.encode prefix should be string, not ${typeof l}`);if(!Array.isArray(u)||u.length&&typeof u[0]!="number")throw new Error(`bech32.encode words should be array of numbers, not ${typeof u}`);let p=l.length+7+u.length;if(h!==!1&&p>h)throw new TypeError(`Length ${p} exceeds limit ${h}`);return l=l.toLowerCase(),`${l}1${Ho.encode(u)}${Zi(l,u,e)}`}function a(l,u=90){if(typeof l!="string")throw new Error(`bech32.decode input should be string, not ${typeof l}`);if(l.length<8||u!==!1&&l.length>u)throw new TypeError(`Wrong string length: ${l.length} (${l}). Expected (8..${u})`);let h=l.toLowerCase();if(l!==h&&l!==l.toUpperCase())throw new Error("String must be lowercase or uppercase");l=h;let p=l.lastIndexOf("1");if(p===0||p===-1)throw new Error('Letter "1" must be present between prefix and data only');let m=l.slice(0,p),y=l.slice(p+1);if(y.length<6)throw new Error("Data must be at least 6 characters long");let g=Ho.decode(y).slice(0,-6),k=Zi(m,g,e);if(!y.endsWith(k))throw new Error(`Invalid checksum in ${l}: expected "${k}"`);return{prefix:m,words:g}}let c=qi(a);function d(l){let{prefix:u,words:h}=a(l,!1);return{prefix:u,words:h,bytes:r(h)}}return{encode:i,decode:a,decodeToBytes:d,decodeUnsafe:c,fromWords:r,fromWordsUnsafe:s,toWords:o}}var Xi,or,ql,Kl,qh,Kh,Jt,Vl,Io,sr,Vh,Zh,Ki,Zl,Ji,Ho,Vi,ue,Yh,Yl,Xl,Jl,Xh,wn=D(()=>{Xi=(t,e)=>e?Xi(e,t%e):t,or=(t,e)=>t+(e-Xi(t,e));ql=Ie(ct(4),ze("0123456789ABCDEF"),We("")),Kl=Ie(ct(5),ze("ABCDEFGHIJKLMNOPQRSTUVWXYZ234567"),ir(5),We("")),qh=Ie(ct(5),ze("0123456789ABCDEFGHIJKLMNOPQRSTUV"),ir(5),We("")),Kh=Ie(ct(5),ze("0123456789ABCDEFGHJKMNPQRSTVWXYZ"),We(""),Yi(t=>t.toUpperCase().replace(/O/g,"0").replace(/[IL]/g,"1"))),Jt=Ie(ct(6),ze("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"),ir(6),We("")),Vl=Ie(ct(6),ze("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"),ir(6),We("")),Io=t=>Ie(Wl(58),ze(t),We("")),sr=Io("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"),Vh=Io("123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"),Zh=Io("rpshnaf39wBUDNEGHJKLM4PQRST7VWXYZ2bcdeCg65jkm8oFqi1tuvAxyz"),Ki=[0,2,3,5,6,7,9,10,11],Zl={encode(t){let e="";for(let n=0;n<t.length;n+=8){let r=t.subarray(n,n+8);e+=sr.encode(r).padStart(Ki[r.length],"1")}return e},decode(t){let e=[];for(let n=0;n<t.length;n+=11){let r=t.slice(n,n+11),o=Ki.indexOf(r.length),s=sr.decode(r);for(let i=0;i<s.length-o;i++)if(s[i]!==0)throw new Error("base58xmr: wrong padding");e=e.concat(Array.from(s.slice(s.length-o)))}return Uint8Array.from(e)}},Ji=t=>Ie(Gl(4,e=>t(t(e))),sr),Ho=Ie(ze("qpzry9x8gf2tvdw0s3jn54khce6mua7l"),We("")),Vi=[996825010,642813549,513874426,1027748829,705979059];ue=Qi("bech32"),Yh=Qi("bech32m"),Yl={encode:t=>new TextDecoder().decode(t),decode:t=>new TextEncoder().encode(t)},Xl=Ie(ct(4),ze("0123456789abcdef"),We(""),Yi(t=>{if(typeof t!="string"||t.length%2)throw new TypeError(`hex.decode: expected string, got ${typeof t} with length ${t.length}`);return t.toLowerCase()})),Jl={utf8:Yl,hex:Xl,base16:ql,base32:Kl,base64:Jt,base64url:Vl,base58:sr,base58xmr:Zl},Xh=`Invalid encoding type. Available types: ${Object.keys(Jl).join(", ")}`});var ea=ie(ar=>{"use strict";Object.defineProperty(ar,"__esModule",{value:!0});ar.wordlist=void 0;ar.wordlist=`abandon
ability
able
about
above
absent
absorb
abstract
absurd
abuse
access
accident
account
accuse
achieve
acid
acoustic
acquire
across
act
action
actor
actress
actual
adapt
add
addict
address
adjust
admit
adult
advance
advice
aerobic
affair
afford
afraid
again
age
agent
agree
ahead
aim
air
airport
aisle
alarm
album
alcohol
alert
alien
all
alley
allow
almost
alone
alpha
already
also
alter
always
amateur
amazing
among
amount
amused
analyst
anchor
ancient
anger
angle
angry
animal
ankle
announce
annual
another
answer
antenna
antique
anxiety
any
apart
apology
appear
apple
approve
april
arch
arctic
area
arena
argue
arm
armed
armor
army
around
arrange
arrest
arrive
arrow
art
artefact
artist
artwork
ask
aspect
assault
asset
assist
assume
asthma
athlete
atom
attack
attend
attitude
attract
auction
audit
august
aunt
author
auto
autumn
average
avocado
avoid
awake
aware
away
awesome
awful
awkward
axis
baby
bachelor
bacon
badge
bag
balance
balcony
ball
bamboo
banana
banner
bar
barely
bargain
barrel
base
basic
basket
battle
beach
bean
beauty
because
become
beef
before
begin
behave
behind
believe
below
belt
bench
benefit
best
betray
better
between
beyond
bicycle
bid
bike
bind
biology
bird
birth
bitter
black
blade
blame
blanket
blast
bleak
bless
blind
blood
blossom
blouse
blue
blur
blush
board
boat
body
boil
bomb
bone
bonus
book
boost
border
boring
borrow
boss
bottom
bounce
box
boy
bracket
brain
brand
brass
brave
bread
breeze
brick
bridge
brief
bright
bring
brisk
broccoli
broken
bronze
broom
brother
brown
brush
bubble
buddy
budget
buffalo
build
bulb
bulk
bullet
bundle
bunker
burden
burger
burst
bus
business
busy
butter
buyer
buzz
cabbage
cabin
cable
cactus
cage
cake
call
calm
camera
camp
can
canal
cancel
candy
cannon
canoe
canvas
canyon
capable
capital
captain
car
carbon
card
cargo
carpet
carry
cart
case
cash
casino
castle
casual
cat
catalog
catch
category
cattle
caught
cause
caution
cave
ceiling
celery
cement
census
century
cereal
certain
chair
chalk
champion
change
chaos
chapter
charge
chase
chat
cheap
check
cheese
chef
cherry
chest
chicken
chief
child
chimney
choice
choose
chronic
chuckle
chunk
churn
cigar
cinnamon
circle
citizen
city
civil
claim
clap
clarify
claw
clay
clean
clerk
clever
click
client
cliff
climb
clinic
clip
clock
clog
close
cloth
cloud
clown
club
clump
cluster
clutch
coach
coast
coconut
code
coffee
coil
coin
collect
color
column
combine
come
comfort
comic
common
company
concert
conduct
confirm
congress
connect
consider
control
convince
cook
cool
copper
copy
coral
core
corn
correct
cost
cotton
couch
country
couple
course
cousin
cover
coyote
crack
cradle
craft
cram
crane
crash
crater
crawl
crazy
cream
credit
creek
crew
cricket
crime
crisp
critic
crop
cross
crouch
crowd
crucial
cruel
cruise
crumble
crunch
crush
cry
crystal
cube
culture
cup
cupboard
curious
current
curtain
curve
cushion
custom
cute
cycle
dad
damage
damp
dance
danger
daring
dash
daughter
dawn
day
deal
debate
debris
decade
december
decide
decline
decorate
decrease
deer
defense
define
defy
degree
delay
deliver
demand
demise
denial
dentist
deny
depart
depend
deposit
depth
deputy
derive
describe
desert
design
desk
despair
destroy
detail
detect
develop
device
devote
diagram
dial
diamond
diary
dice
diesel
diet
differ
digital
dignity
dilemma
dinner
dinosaur
direct
dirt
disagree
discover
disease
dish
dismiss
disorder
display
distance
divert
divide
divorce
dizzy
doctor
document
dog
doll
dolphin
domain
donate
donkey
donor
door
dose
double
dove
draft
dragon
drama
drastic
draw
dream
dress
drift
drill
drink
drip
drive
drop
drum
dry
duck
dumb
dune
during
dust
dutch
duty
dwarf
dynamic
eager
eagle
early
earn
earth
easily
east
easy
echo
ecology
economy
edge
edit
educate
effort
egg
eight
either
elbow
elder
electric
elegant
element
elephant
elevator
elite
else
embark
embody
embrace
emerge
emotion
employ
empower
empty
enable
enact
end
endless
endorse
enemy
energy
enforce
engage
engine
enhance
enjoy
enlist
enough
enrich
enroll
ensure
enter
entire
entry
envelope
episode
equal
equip
era
erase
erode
erosion
error
erupt
escape
essay
essence
estate
eternal
ethics
evidence
evil
evoke
evolve
exact
example
excess
exchange
excite
exclude
excuse
execute
exercise
exhaust
exhibit
exile
exist
exit
exotic
expand
expect
expire
explain
expose
express
extend
extra
eye
eyebrow
fabric
face
faculty
fade
faint
faith
fall
false
fame
family
famous
fan
fancy
fantasy
farm
fashion
fat
fatal
father
fatigue
fault
favorite
feature
february
federal
fee
feed
feel
female
fence
festival
fetch
fever
few
fiber
fiction
field
figure
file
film
filter
final
find
fine
finger
finish
fire
firm
first
fiscal
fish
fit
fitness
fix
flag
flame
flash
flat
flavor
flee
flight
flip
float
flock
floor
flower
fluid
flush
fly
foam
focus
fog
foil
fold
follow
food
foot
force
forest
forget
fork
fortune
forum
forward
fossil
foster
found
fox
fragile
frame
frequent
fresh
friend
fringe
frog
front
frost
frown
frozen
fruit
fuel
fun
funny
furnace
fury
future
gadget
gain
galaxy
gallery
game
gap
garage
garbage
garden
garlic
garment
gas
gasp
gate
gather
gauge
gaze
general
genius
genre
gentle
genuine
gesture
ghost
giant
gift
giggle
ginger
giraffe
girl
give
glad
glance
glare
glass
glide
glimpse
globe
gloom
glory
glove
glow
glue
goat
goddess
gold
good
goose
gorilla
gospel
gossip
govern
gown
grab
grace
grain
grant
grape
grass
gravity
great
green
grid
grief
grit
grocery
group
grow
grunt
guard
guess
guide
guilt
guitar
gun
gym
habit
hair
half
hammer
hamster
hand
happy
harbor
hard
harsh
harvest
hat
have
hawk
hazard
head
health
heart
heavy
hedgehog
height
hello
helmet
help
hen
hero
hidden
high
hill
hint
hip
hire
history
hobby
hockey
hold
hole
holiday
hollow
home
honey
hood
hope
horn
horror
horse
hospital
host
hotel
hour
hover
hub
huge
human
humble
humor
hundred
hungry
hunt
hurdle
hurry
hurt
husband
hybrid
ice
icon
idea
identify
idle
ignore
ill
illegal
illness
image
imitate
immense
immune
impact
impose
improve
impulse
inch
include
income
increase
index
indicate
indoor
industry
infant
inflict
inform
inhale
inherit
initial
inject
injury
inmate
inner
innocent
input
inquiry
insane
insect
inside
inspire
install
intact
interest
into
invest
invite
involve
iron
island
isolate
issue
item
ivory
jacket
jaguar
jar
jazz
jealous
jeans
jelly
jewel
job
join
joke
journey
joy
judge
juice
jump
jungle
junior
junk
just
kangaroo
keen
keep
ketchup
key
kick
kid
kidney
kind
kingdom
kiss
kit
kitchen
kite
kitten
kiwi
knee
knife
knock
know
lab
label
labor
ladder
lady
lake
lamp
language
laptop
large
later
latin
laugh
laundry
lava
law
lawn
lawsuit
layer
lazy
leader
leaf
learn
leave
lecture
left
leg
legal
legend
leisure
lemon
lend
length
lens
leopard
lesson
letter
level
liar
liberty
library
license
life
lift
light
like
limb
limit
link
lion
liquid
list
little
live
lizard
load
loan
lobster
local
lock
logic
lonely
long
loop
lottery
loud
lounge
love
loyal
lucky
luggage
lumber
lunar
lunch
luxury
lyrics
machine
mad
magic
magnet
maid
mail
main
major
make
mammal
man
manage
mandate
mango
mansion
manual
maple
marble
march
margin
marine
market
marriage
mask
mass
master
match
material
math
matrix
matter
maximum
maze
meadow
mean
measure
meat
mechanic
medal
media
melody
melt
member
memory
mention
menu
mercy
merge
merit
merry
mesh
message
metal
method
middle
midnight
milk
million
mimic
mind
minimum
minor
minute
miracle
mirror
misery
miss
mistake
mix
mixed
mixture
mobile
model
modify
mom
moment
monitor
monkey
monster
month
moon
moral
more
morning
mosquito
mother
motion
motor
mountain
mouse
move
movie
much
muffin
mule
multiply
muscle
museum
mushroom
music
must
mutual
myself
mystery
myth
naive
name
napkin
narrow
nasty
nation
nature
near
neck
need
negative
neglect
neither
nephew
nerve
nest
net
network
neutral
never
news
next
nice
night
noble
noise
nominee
noodle
normal
north
nose
notable
note
nothing
notice
novel
now
nuclear
number
nurse
nut
oak
obey
object
oblige
obscure
observe
obtain
obvious
occur
ocean
october
odor
off
offer
office
often
oil
okay
old
olive
olympic
omit
once
one
onion
online
only
open
opera
opinion
oppose
option
orange
orbit
orchard
order
ordinary
organ
orient
original
orphan
ostrich
other
outdoor
outer
output
outside
oval
oven
over
own
owner
oxygen
oyster
ozone
pact
paddle
page
pair
palace
palm
panda
panel
panic
panther
paper
parade
parent
park
parrot
party
pass
patch
path
patient
patrol
pattern
pause
pave
payment
peace
peanut
pear
peasant
pelican
pen
penalty
pencil
people
pepper
perfect
permit
person
pet
phone
photo
phrase
physical
piano
picnic
picture
piece
pig
pigeon
pill
pilot
pink
pioneer
pipe
pistol
pitch
pizza
place
planet
plastic
plate
play
please
pledge
pluck
plug
plunge
poem
poet
point
polar
pole
police
pond
pony
pool
popular
portion
position
possible
post
potato
pottery
poverty
powder
power
practice
praise
predict
prefer
prepare
present
pretty
prevent
price
pride
primary
print
priority
prison
private
prize
problem
process
produce
profit
program
project
promote
proof
property
prosper
protect
proud
provide
public
pudding
pull
pulp
pulse
pumpkin
punch
pupil
puppy
purchase
purity
purpose
purse
push
put
puzzle
pyramid
quality
quantum
quarter
question
quick
quit
quiz
quote
rabbit
raccoon
race
rack
radar
radio
rail
rain
raise
rally
ramp
ranch
random
range
rapid
rare
rate
rather
raven
raw
razor
ready
real
reason
rebel
rebuild
recall
receive
recipe
record
recycle
reduce
reflect
reform
refuse
region
regret
regular
reject
relax
release
relief
rely
remain
remember
remind
remove
render
renew
rent
reopen
repair
repeat
replace
report
require
rescue
resemble
resist
resource
response
result
retire
retreat
return
reunion
reveal
review
reward
rhythm
rib
ribbon
rice
rich
ride
ridge
rifle
right
rigid
ring
riot
ripple
risk
ritual
rival
river
road
roast
robot
robust
rocket
romance
roof
rookie
room
rose
rotate
rough
round
route
royal
rubber
rude
rug
rule
run
runway
rural
sad
saddle
sadness
safe
sail
salad
salmon
salon
salt
salute
same
sample
sand
satisfy
satoshi
sauce
sausage
save
say
scale
scan
scare
scatter
scene
scheme
school
science
scissors
scorpion
scout
scrap
screen
script
scrub
sea
search
season
seat
second
secret
section
security
seed
seek
segment
select
sell
seminar
senior
sense
sentence
series
service
session
settle
setup
seven
shadow
shaft
shallow
share
shed
shell
sheriff
shield
shift
shine
ship
shiver
shock
shoe
shoot
shop
short
shoulder
shove
shrimp
shrug
shuffle
shy
sibling
sick
side
siege
sight
sign
silent
silk
silly
silver
similar
simple
since
sing
siren
sister
situate
six
size
skate
sketch
ski
skill
skin
skirt
skull
slab
slam
sleep
slender
slice
slide
slight
slim
slogan
slot
slow
slush
small
smart
smile
smoke
smooth
snack
snake
snap
sniff
snow
soap
soccer
social
sock
soda
soft
solar
soldier
solid
solution
solve
someone
song
soon
sorry
sort
soul
sound
soup
source
south
space
spare
spatial
spawn
speak
special
speed
spell
spend
sphere
spice
spider
spike
spin
spirit
split
spoil
sponsor
spoon
sport
spot
spray
spread
spring
spy
square
squeeze
squirrel
stable
stadium
staff
stage
stairs
stamp
stand
start
state
stay
steak
steel
stem
step
stereo
stick
still
sting
stock
stomach
stone
stool
story
stove
strategy
street
strike
strong
struggle
student
stuff
stumble
style
subject
submit
subway
success
such
sudden
suffer
sugar
suggest
suit
summer
sun
sunny
sunset
super
supply
supreme
sure
surface
surge
surprise
surround
survey
suspect
sustain
swallow
swamp
swap
swarm
swear
sweet
swift
swim
swing
switch
sword
symbol
symptom
syrup
system
table
tackle
tag
tail
talent
talk
tank
tape
target
task
taste
tattoo
taxi
teach
team
tell
ten
tenant
tennis
tent
term
test
text
thank
that
theme
then
theory
there
they
thing
this
thought
three
thrive
throw
thumb
thunder
ticket
tide
tiger
tilt
timber
time
tiny
tip
tired
tissue
title
toast
tobacco
today
toddler
toe
together
toilet
token
tomato
tomorrow
tone
tongue
tonight
tool
tooth
top
topic
topple
torch
tornado
tortoise
toss
total
tourist
toward
tower
town
toy
track
trade
traffic
tragic
train
transfer
trap
trash
travel
tray
treat
tree
trend
trial
tribe
trick
trigger
trim
trip
trophy
trouble
truck
true
truly
trumpet
trust
truth
try
tube
tuition
tumble
tuna
tunnel
turkey
turn
turtle
twelve
twenty
twice
twin
twist
two
type
typical
ugly
umbrella
unable
unaware
uncle
uncover
under
undo
unfair
unfold
unhappy
uniform
unique
unit
universe
unknown
unlock
until
unusual
unveil
update
upgrade
uphold
upon
upper
upset
urban
urge
usage
use
used
useful
useless
usual
utility
vacant
vacuum
vague
valid
valley
valve
van
vanish
vapor
various
vast
vault
vehicle
velvet
vendor
venture
venue
verb
verify
version
very
vessel
veteran
viable
vibrant
vicious
victory
video
view
village
vintage
violin
virtual
virus
visa
visit
visual
vital
vivid
vocal
voice
void
volcano
volume
vote
voyage
wage
wagon
wait
walk
wall
walnut
want
warfare
warm
warrior
wash
wasp
waste
water
wave
way
wealth
weapon
wear
weasel
weather
web
wedding
weekend
weird
welcome
west
wet
whale
what
wheat
wheel
when
where
whip
whisper
wide
width
wife
wild
will
win
window
wine
wing
wink
winner
winter
wire
wisdom
wise
wish
witness
wolf
woman
wonder
wood
wool
word
work
world
worry
worth
wrap
wreck
wrestle
wrist
write
wrong
yard
year
yellow
you
young
youth
zebra
zero
zone
zoo`.split(`
`)});var xn=ie(ce=>{"use strict";Object.defineProperty(ce,"__esModule",{value:!0});ce.output=ce.exists=ce.hash=ce.bytes=ce.bool=ce.number=void 0;function cr(t){if(!Number.isSafeInteger(t)||t<0)throw new Error(`Wrong positive integer: ${t}`)}ce.number=cr;function ta(t){if(typeof t!="boolean")throw new Error(`Expected boolean, not ${t}`)}ce.bool=ta;function Co(t,...e){if(!(t instanceof Uint8Array))throw new TypeError("Expected Uint8Array");if(e.length>0&&!e.includes(t.length))throw new TypeError(`Expected Uint8Array of length ${e}, not of length=${t.length}`)}ce.bytes=Co;function na(t){if(typeof t!="function"||typeof t.create!="function")throw new Error("Hash should be wrapped by utils.wrapConstructor");cr(t.outputLen),cr(t.blockLen)}ce.hash=na;function ra(t,e=!0){if(t.destroyed)throw new Error("Hash instance has been destroyed");if(e&&t.finished)throw new Error("Hash#digest() has already been called")}ce.exists=ra;function oa(t,e){Co(t);let n=e.outputLen;if(t.length<n)throw new Error(`digestInto() expects output buffer of length at least ${n}`)}ce.output=oa;var Ql={number:cr,bool:ta,bytes:Co,hash:na,exists:ra,output:oa};ce.default=Ql});var sa=ie(lr=>{"use strict";Object.defineProperty(lr,"__esModule",{value:!0});lr.crypto=void 0;lr.crypto={node:void 0,web:typeof self=="object"&&"crypto"in self?self.crypto:void 0}});var Ct=ie(R=>{"use strict";Object.defineProperty(R,"__esModule",{value:!0});R.randomBytes=R.wrapConstructorWithOpts=R.wrapConstructor=R.checkOpts=R.Hash=R.concatBytes=R.toBytes=R.utf8ToBytes=R.asyncLoop=R.nextTick=R.hexToBytes=R.bytesToHex=R.isLE=R.rotr=R.createView=R.u32=R.u8=void 0;var ur=sa(),eu=t=>new Uint8Array(t.buffer,t.byteOffset,t.byteLength);R.u8=eu;var tu=t=>new Uint32Array(t.buffer,t.byteOffset,Math.floor(t.byteLength/4));R.u32=tu;var nu=t=>new DataView(t.buffer,t.byteOffset,t.byteLength);R.createView=nu;var ru=(t,e)=>t<<32-e|t>>>e;R.rotr=ru;R.isLE=new Uint8Array(new Uint32Array([287454020]).buffer)[0]===68;if(!R.isLE)throw new Error("Non little-endian hardware is not supported");var ou=Array.from({length:256},(t,e)=>e.toString(16).padStart(2,"0"));function su(t){if(!(t instanceof Uint8Array))throw new Error("Uint8Array expected");let e="";for(let n=0;n<t.length;n++)e+=ou[t[n]];return e}R.bytesToHex=su;function iu(t){if(typeof t!="string")throw new TypeError("hexToBytes: expected string, got "+typeof t);if(t.length%2)throw new Error("hexToBytes: received invalid unpadded hex");let e=new Uint8Array(t.length/2);for(let n=0;n<e.length;n++){let r=n*2,o=t.slice(r,r+2),s=Number.parseInt(o,16);if(Number.isNaN(s)||s<0)throw new Error("Invalid byte sequence");e[n]=s}return e}R.hexToBytes=iu;var au=async()=>{};R.nextTick=au;async function cu(t,e,n){let r=Date.now();for(let o=0;o<t;o++){n(o);let s=Date.now()-r;s>=0&&s<e||(await(0,R.nextTick)(),r+=s)}}R.asyncLoop=cu;function ia(t){if(typeof t!="string")throw new TypeError(`utf8ToBytes expected string, got ${typeof t}`);return new TextEncoder().encode(t)}R.utf8ToBytes=ia;function Ro(t){if(typeof t=="string"&&(t=ia(t)),!(t instanceof Uint8Array))throw new TypeError(`Expected input type is Uint8Array (got ${typeof t})`);return t}R.toBytes=Ro;function lu(...t){if(!t.every(r=>r instanceof Uint8Array))throw new Error("Uint8Array list expected");if(t.length===1)return t[0];let e=t.reduce((r,o)=>r+o.length,0),n=new Uint8Array(e);for(let r=0,o=0;r<t.length;r++){let s=t[r];n.set(s,o),o+=s.length}return n}R.concatBytes=lu;var Mo=class{clone(){return this._cloneInto()}};R.Hash=Mo;var uu=t=>Object.prototype.toString.call(t)==="[object Object]"&&t.constructor===Object;function du(t,e){if(e!==void 0&&(typeof e!="object"||!uu(e)))throw new TypeError("Options should be object or undefined");return Object.assign(t,e)}R.checkOpts=du;function fu(t){let e=r=>t().update(Ro(r)).digest(),n=t();return e.outputLen=n.outputLen,e.blockLen=n.blockLen,e.create=()=>t(),e}R.wrapConstructor=fu;function hu(t){let e=(r,o)=>t(o).update(Ro(r)).digest(),n=t({});return e.outputLen=n.outputLen,e.blockLen=n.blockLen,e.create=r=>t(r),e}R.wrapConstructorWithOpts=hu;function pu(t=32){if(ur.crypto.web)return ur.crypto.web.getRandomValues(new Uint8Array(t));if(ur.crypto.node)return new Uint8Array(ur.crypto.node.randomBytes(t).buffer);throw new Error("The environment doesn't have randomBytes function")}R.randomBytes=pu});var ca=ie(vn=>{"use strict";Object.defineProperty(vn,"__esModule",{value:!0});vn.hmac=void 0;var dr=xn(),aa=Ct(),fr=class extends aa.Hash{constructor(e,n){super(),this.finished=!1,this.destroyed=!1,dr.default.hash(e);let r=(0,aa.toBytes)(n);if(this.iHash=e.create(),typeof this.iHash.update!="function")throw new TypeError("Expected instance of class which extends utils.Hash");this.blockLen=this.iHash.blockLen,this.outputLen=this.iHash.outputLen;let o=this.blockLen,s=new Uint8Array(o);s.set(r.length>o?e.create().update(r).digest():r);for(let i=0;i<s.length;i++)s[i]^=54;this.iHash.update(s),this.oHash=e.create();for(let i=0;i<s.length;i++)s[i]^=106;this.oHash.update(s),s.fill(0)}update(e){return dr.default.exists(this),this.iHash.update(e),this}digestInto(e){dr.default.exists(this),dr.default.bytes(e,this.outputLen),this.finished=!0,this.iHash.digestInto(e),this.oHash.update(e),this.oHash.digestInto(e),this.destroy()}digest(){let e=new Uint8Array(this.oHash.outputLen);return this.digestInto(e),e}_cloneInto(e){e||(e=Object.create(Object.getPrototypeOf(this),{}));let{oHash:n,iHash:r,finished:o,destroyed:s,blockLen:i,outputLen:a}=this;return e=e,e.finished=o,e.destroyed=s,e.blockLen=i,e.outputLen=a,e.oHash=n._cloneInto(e.oHash),e.iHash=r._cloneInto(e.iHash),e}destroy(){this.destroyed=!0,this.oHash.destroy(),this.iHash.destroy()}},mu=(t,e,n)=>new fr(t,e).update(n).digest();vn.hmac=mu;vn.hmac.create=(t,e)=>new fr(t,e)});var da=ie(en=>{"use strict";Object.defineProperty(en,"__esModule",{value:!0});en.pbkdf2Async=en.pbkdf2=void 0;var hr=xn(),yu=ca(),Qt=Ct();function la(t,e,n,r){hr.default.hash(t);let o=(0,Qt.checkOpts)({dkLen:32,asyncTick:10},r),{c:s,dkLen:i,asyncTick:a}=o;if(hr.default.number(s),hr.default.number(i),hr.default.number(a),s<1)throw new Error("PBKDF2: iterations (c) should be >= 1");let c=(0,Qt.toBytes)(e),d=(0,Qt.toBytes)(n),l=new Uint8Array(i),u=yu.hmac.create(t,c),h=u._cloneInto().update(d);return{c:s,dkLen:i,asyncTick:a,DK:l,PRF:u,PRFSalt:h}}function ua(t,e,n,r,o){return t.destroy(),e.destroy(),r&&r.destroy(),o.fill(0),n}function bu(t,e,n,r){let{c:o,dkLen:s,DK:i,PRF:a,PRFSalt:c}=la(t,e,n,r),d,l=new Uint8Array(4),u=(0,Qt.createView)(l),h=new Uint8Array(a.outputLen);for(let p=1,m=0;m<s;p++,m+=a.outputLen){let y=i.subarray(m,m+a.outputLen);u.setInt32(0,p,!1),(d=c._cloneInto(d)).update(l).digestInto(h),y.set(h.subarray(0,y.length));for(let g=1;g<o;g++){a._cloneInto(d).update(h).digestInto(h);for(let k=0;k<y.length;k++)y[k]^=h[k]}}return ua(a,c,i,d,h)}en.pbkdf2=bu;async function gu(t,e,n,r){let{c:o,dkLen:s,asyncTick:i,DK:a,PRF:c,PRFSalt:d}=la(t,e,n,r),l,u=new Uint8Array(4),h=(0,Qt.createView)(u),p=new Uint8Array(c.outputLen);for(let m=1,y=0;y<s;m++,y+=c.outputLen){let g=a.subarray(y,y+c.outputLen);h.setInt32(0,m,!1),(l=d._cloneInto(l)).update(u).digestInto(p),g.set(p.subarray(0,g.length)),await(0,Qt.asyncLoop)(o-1,i,k=>{c._cloneInto(l).update(p).digestInto(p);for(let L=0;L<g.length;L++)g[L]^=p[L]})}return ua(c,d,a,l,p)}en.pbkdf2Async=gu});var Uo=ie(pr=>{"use strict";Object.defineProperty(pr,"__esModule",{value:!0});pr.SHA2=void 0;var Do=xn(),En=Ct();function wu(t,e,n,r){if(typeof t.setBigUint64=="function")return t.setBigUint64(e,n,r);let o=BigInt(32),s=BigInt(4294967295),i=Number(n>>o&s),a=Number(n&s),c=r?4:0,d=r?0:4;t.setUint32(e+c,i,r),t.setUint32(e+d,a,r)}var $o=class extends En.Hash{constructor(e,n,r,o){super(),this.blockLen=e,this.outputLen=n,this.padOffset=r,this.isLE=o,this.finished=!1,this.length=0,this.pos=0,this.destroyed=!1,this.buffer=new Uint8Array(e),this.view=(0,En.createView)(this.buffer)}update(e){Do.default.exists(this);let{view:n,buffer:r,blockLen:o}=this;e=(0,En.toBytes)(e);let s=e.length;for(let i=0;i<s;){let a=Math.min(o-this.pos,s-i);if(a===o){let c=(0,En.createView)(e);for(;o<=s-i;i+=o)this.process(c,i);continue}r.set(e.subarray(i,i+a),this.pos),this.pos+=a,i+=a,this.pos===o&&(this.process(n,0),this.pos=0)}return this.length+=e.length,this.roundClean(),this}digestInto(e){Do.default.exists(this),Do.default.output(e,this),this.finished=!0;let{buffer:n,view:r,blockLen:o,isLE:s}=this,{pos:i}=this;n[i++]=128,this.buffer.subarray(i).fill(0),this.padOffset>o-i&&(this.process(r,0),i=0);for(let u=i;u<o;u++)n[u]=0;wu(r,o-8,BigInt(this.length*8),s),this.process(r,0);let a=(0,En.createView)(e),c=this.outputLen;if(c%4)throw new Error("_sha2: outputLen should be aligned to 32bit");let d=c/4,l=this.get();if(d>l.length)throw new Error("_sha2: outputLen bigger than state");for(let u=0;u<d;u++)a.setUint32(4*u,l[u],s)}digest(){let{buffer:e,outputLen:n}=this;this.digestInto(e);let r=e.slice(0,n);return this.destroy(),r}_cloneInto(e){e||(e=new this.constructor),e.set(...this.get());let{blockLen:n,buffer:r,length:o,finished:s,destroyed:i,pos:a}=this;return e.length=o,e.pos=a,e.finished=s,e.destroyed=i,o%n&&e.buffer.set(r),e}};pr.SHA2=$o});var fa=ie(tn=>{"use strict";Object.defineProperty(tn,"__esModule",{value:!0});tn.sha224=tn.sha256=void 0;var xu=Uo(),we=Ct(),vu=(t,e,n)=>t&e^~t&n,Eu=(t,e,n)=>t&e^t&n^e&n,ku=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),lt=new Uint32Array([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]),ut=new Uint32Array(64),mr=class extends xu.SHA2{constructor(){super(64,32,8,!1),this.A=lt[0]|0,this.B=lt[1]|0,this.C=lt[2]|0,this.D=lt[3]|0,this.E=lt[4]|0,this.F=lt[5]|0,this.G=lt[6]|0,this.H=lt[7]|0}get(){let{A:e,B:n,C:r,D:o,E:s,F:i,G:a,H:c}=this;return[e,n,r,o,s,i,a,c]}set(e,n,r,o,s,i,a,c){this.A=e|0,this.B=n|0,this.C=r|0,this.D=o|0,this.E=s|0,this.F=i|0,this.G=a|0,this.H=c|0}process(e,n){for(let u=0;u<16;u++,n+=4)ut[u]=e.getUint32(n,!1);for(let u=16;u<64;u++){let h=ut[u-15],p=ut[u-2],m=(0,we.rotr)(h,7)^(0,we.rotr)(h,18)^h>>>3,y=(0,we.rotr)(p,17)^(0,we.rotr)(p,19)^p>>>10;ut[u]=y+ut[u-7]+m+ut[u-16]|0}let{A:r,B:o,C:s,D:i,E:a,F:c,G:d,H:l}=this;for(let u=0;u<64;u++){let h=(0,we.rotr)(a,6)^(0,we.rotr)(a,11)^(0,we.rotr)(a,25),p=l+h+vu(a,c,d)+ku[u]+ut[u]|0,y=((0,we.rotr)(r,2)^(0,we.rotr)(r,13)^(0,we.rotr)(r,22))+Eu(r,o,s)|0;l=d,d=c,c=a,a=i+p|0,i=s,s=o,o=r,r=p+y|0}r=r+this.A|0,o=o+this.B|0,s=s+this.C|0,i=i+this.D|0,a=a+this.E|0,c=c+this.F|0,d=d+this.G|0,l=l+this.H|0,this.set(r,o,s,i,a,c,d,l)}roundClean(){ut.fill(0)}destroy(){this.set(0,0,0,0,0,0,0,0),this.buffer.fill(0)}},Oo=class extends mr{constructor(){super(),this.A=-1056596264,this.B=914150663,this.C=812702999,this.D=-150054599,this.E=-4191439,this.F=1750603025,this.G=1694076839,this.H=-1090891868,this.outputLen=28}};tn.sha256=(0,we.wrapConstructor)(()=>new mr);tn.sha224=(0,we.wrapConstructor)(()=>new Oo)});var ma=ie(xe=>{"use strict";Object.defineProperty(xe,"__esModule",{value:!0});xe.add=xe.toBig=xe.split=xe.fromBig=void 0;var yr=BigInt(2**32-1),No=BigInt(32);function Po(t,e=!1){return e?{h:Number(t&yr),l:Number(t>>No&yr)}:{h:Number(t>>No&yr)|0,l:Number(t&yr)|0}}xe.fromBig=Po;function ha(t,e=!1){let n=new Uint32Array(t.length),r=new Uint32Array(t.length);for(let o=0;o<t.length;o++){let{h:s,l:i}=Po(t[o],e);[n[o],r[o]]=[s,i]}return[n,r]}xe.split=ha;var Au=(t,e)=>BigInt(t>>>0)<<No|BigInt(e>>>0);xe.toBig=Au;var Tu=(t,e,n)=>t>>>n,Su=(t,e,n)=>t<<32-n|e>>>n,Lu=(t,e,n)=>t>>>n|e<<32-n,_u=(t,e,n)=>t<<32-n|e>>>n,Bu=(t,e,n)=>t<<64-n|e>>>n-32,Hu=(t,e,n)=>t>>>n-32|e<<64-n,Iu=(t,e)=>e,Cu=(t,e)=>t,Mu=(t,e,n)=>t<<n|e>>>32-n,Ru=(t,e,n)=>e<<n|t>>>32-n,Du=(t,e,n)=>e<<n-32|t>>>64-n,$u=(t,e,n)=>t<<n-32|e>>>64-n;function pa(t,e,n,r){let o=(e>>>0)+(r>>>0);return{h:t+n+(o/2**32|0)|0,l:o|0}}xe.add=pa;var Uu=(t,e,n)=>(t>>>0)+(e>>>0)+(n>>>0),Ou=(t,e,n,r)=>e+n+r+(t/2**32|0)|0,Nu=(t,e,n,r)=>(t>>>0)+(e>>>0)+(n>>>0)+(r>>>0),Pu=(t,e,n,r,o)=>e+n+r+o+(t/2**32|0)|0,Fu=(t,e,n,r,o)=>(t>>>0)+(e>>>0)+(n>>>0)+(r>>>0)+(o>>>0),ju=(t,e,n,r,o,s)=>e+n+r+o+s+(t/2**32|0)|0,zu={fromBig:Po,split:ha,toBig:xe.toBig,shrSH:Tu,shrSL:Su,rotrSH:Lu,rotrSL:_u,rotrBH:Bu,rotrBL:Hu,rotr32H:Iu,rotr32L:Cu,rotlSH:Mu,rotlSL:Ru,rotlBH:Du,rotlBL:$u,add:pa,add3L:Uu,add3H:Ou,add4L:Nu,add4H:Pu,add5H:ju,add5L:Fu};xe.default=zu});var ya=ie(ve=>{"use strict";Object.defineProperty(ve,"__esModule",{value:!0});ve.sha384=ve.sha512_256=ve.sha512_224=ve.sha512=ve.SHA512=void 0;var Wu=Uo(),C=ma(),br=Ct(),[Gu,qu]=C.default.split(["0x428a2f98d728ae22","0x7137449123ef65cd","0xb5c0fbcfec4d3b2f","0xe9b5dba58189dbbc","0x3956c25bf348b538","0x59f111f1b605d019","0x923f82a4af194f9b","0xab1c5ed5da6d8118","0xd807aa98a3030242","0x12835b0145706fbe","0x243185be4ee4b28c","0x550c7dc3d5ffb4e2","0x72be5d74f27b896f","0x80deb1fe3b1696b1","0x9bdc06a725c71235","0xc19bf174cf692694","0xe49b69c19ef14ad2","0xefbe4786384f25e3","0x0fc19dc68b8cd5b5","0x240ca1cc77ac9c65","0x2de92c6f592b0275","0x4a7484aa6ea6e483","0x5cb0a9dcbd41fbd4","0x76f988da831153b5","0x983e5152ee66dfab","0xa831c66d2db43210","0xb00327c898fb213f","0xbf597fc7beef0ee4","0xc6e00bf33da88fc2","0xd5a79147930aa725","0x06ca6351e003826f","0x142929670a0e6e70","0x27b70a8546d22ffc","0x2e1b21385c26c926","0x4d2c6dfc5ac42aed","0x53380d139d95b3df","0x650a73548baf63de","0x766a0abb3c77b2a8","0x81c2c92e47edaee6","0x92722c851482353b","0xa2bfe8a14cf10364","0xa81a664bbc423001","0xc24b8b70d0f89791","0xc76c51a30654be30","0xd192e819d6ef5218","0xd69906245565a910","0xf40e35855771202a","0x106aa07032bbd1b8","0x19a4c116b8d2d0c8","0x1e376c085141ab53","0x2748774cdf8eeb99","0x34b0bcb5e19b48a8","0x391c0cb3c5c95a63","0x4ed8aa4ae3418acb","0x5b9cca4f7763e373","0x682e6ff3d6b2b8a3","0x748f82ee5defb2fc","0x78a5636f43172f60","0x84c87814a1f0ab72","0x8cc702081a6439ec","0x90befffa23631e28","0xa4506cebde82bde9","0xbef9a3f7b2c67915","0xc67178f2e372532b","0xca273eceea26619c","0xd186b8c721c0c207","0xeada7dd6cde0eb1e","0xf57d4f7fee6ed178","0x06f067aa72176fba","0x0a637dc5a2c898a6","0x113f9804bef90dae","0x1b710b35131c471b","0x28db77f523047d84","0x32caab7b40c72493","0x3c9ebe0a15c9bebc","0x431d67c49c100d4c","0x4cc5d4becb3e42b6","0x597f299cfc657e2a","0x5fcb6fab3ad6faec","0x6c44198c4a475817"].map(t=>BigInt(t))),dt=new Uint32Array(80),ft=new Uint32Array(80),Mt=class extends Wu.SHA2{constructor(){super(128,64,16,!1),this.Ah=1779033703,this.Al=-205731576,this.Bh=-1150833019,this.Bl=-2067093701,this.Ch=1013904242,this.Cl=-23791573,this.Dh=-1521486534,this.Dl=1595750129,this.Eh=1359893119,this.El=-1377402159,this.Fh=-1694144372,this.Fl=725511199,this.Gh=528734635,this.Gl=-79577749,this.Hh=1541459225,this.Hl=327033209}get(){let{Ah:e,Al:n,Bh:r,Bl:o,Ch:s,Cl:i,Dh:a,Dl:c,Eh:d,El:l,Fh:u,Fl:h,Gh:p,Gl:m,Hh:y,Hl:g}=this;return[e,n,r,o,s,i,a,c,d,l,u,h,p,m,y,g]}set(e,n,r,o,s,i,a,c,d,l,u,h,p,m,y,g){this.Ah=e|0,this.Al=n|0,this.Bh=r|0,this.Bl=o|0,this.Ch=s|0,this.Cl=i|0,this.Dh=a|0,this.Dl=c|0,this.Eh=d|0,this.El=l|0,this.Fh=u|0,this.Fl=h|0,this.Gh=p|0,this.Gl=m|0,this.Hh=y|0,this.Hl=g|0}process(e,n){for(let b=0;b<16;b++,n+=4)dt[b]=e.getUint32(n),ft[b]=e.getUint32(n+=4);for(let b=16;b<80;b++){let H=dt[b-15]|0,E=ft[b-15]|0,V=C.default.rotrSH(H,E,1)^C.default.rotrSH(H,E,8)^C.default.shrSH(H,E,7),S=C.default.rotrSL(H,E,1)^C.default.rotrSL(H,E,8)^C.default.shrSL(H,E,7),j=dt[b-2]|0,M=ft[b-2]|0,se=C.default.rotrSH(j,M,19)^C.default.rotrBH(j,M,61)^C.default.shrSH(j,M,6),fe=C.default.rotrSL(j,M,19)^C.default.rotrBL(j,M,61)^C.default.shrSL(j,M,6),oe=C.default.add4L(S,fe,ft[b-7],ft[b-16]),Oe=C.default.add4H(oe,V,se,dt[b-7],dt[b-16]);dt[b]=Oe|0,ft[b]=oe|0}let{Ah:r,Al:o,Bh:s,Bl:i,Ch:a,Cl:c,Dh:d,Dl:l,Eh:u,El:h,Fh:p,Fl:m,Gh:y,Gl:g,Hh:k,Hl:L}=this;for(let b=0;b<80;b++){let H=C.default.rotrSH(u,h,14)^C.default.rotrSH(u,h,18)^C.default.rotrBH(u,h,41),E=C.default.rotrSL(u,h,14)^C.default.rotrSL(u,h,18)^C.default.rotrBL(u,h,41),V=u&p^~u&y,S=h&m^~h&g,j=C.default.add5L(L,E,S,qu[b],ft[b]),M=C.default.add5H(j,k,H,V,Gu[b],dt[b]),se=j|0,fe=C.default.rotrSH(r,o,28)^C.default.rotrBH(r,o,34)^C.default.rotrBH(r,o,39),oe=C.default.rotrSL(r,o,28)^C.default.rotrBL(r,o,34)^C.default.rotrBL(r,o,39),Oe=r&s^r&a^s&a,kt=o&i^o&c^i&c;k=y|0,L=g|0,y=p|0,g=m|0,p=u|0,m=h|0,{h:u,l:h}=C.default.add(d|0,l|0,M|0,se|0),d=a|0,l=c|0,a=s|0,c=i|0,s=r|0,i=o|0;let At=C.default.add3L(se,oe,kt);r=C.default.add3H(At,M,fe,Oe),o=At|0}({h:r,l:o}=C.default.add(this.Ah|0,this.Al|0,r|0,o|0)),{h:s,l:i}=C.default.add(this.Bh|0,this.Bl|0,s|0,i|0),{h:a,l:c}=C.default.add(this.Ch|0,this.Cl|0,a|0,c|0),{h:d,l}=C.default.add(this.Dh|0,this.Dl|0,d|0,l|0),{h:u,l:h}=C.default.add(this.Eh|0,this.El|0,u|0,h|0),{h:p,l:m}=C.default.add(this.Fh|0,this.Fl|0,p|0,m|0),{h:y,l:g}=C.default.add(this.Gh|0,this.Gl|0,y|0,g|0),{h:k,l:L}=C.default.add(this.Hh|0,this.Hl|0,k|0,L|0),this.set(r,o,s,i,a,c,d,l,u,h,p,m,y,g,k,L)}roundClean(){dt.fill(0),ft.fill(0)}destroy(){this.buffer.fill(0),this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0)}};ve.SHA512=Mt;var Fo=class extends Mt{constructor(){super(),this.Ah=-1942145080,this.Al=424955298,this.Bh=1944164710,this.Bl=-1982016298,this.Ch=502970286,this.Cl=855612546,this.Dh=1738396948,this.Dl=1479516111,this.Eh=258812777,this.El=2077511080,this.Fh=2011393907,this.Fl=79989058,this.Gh=1067287976,this.Gl=1780299464,this.Hh=286451373,this.Hl=-1848208735,this.outputLen=28}},jo=class extends Mt{constructor(){super(),this.Ah=573645204,this.Al=-64227540,this.Bh=-1621794909,this.Bl=-934517566,this.Ch=596883563,this.Cl=1867755857,this.Dh=-1774684391,this.Dl=1497426621,this.Eh=-1775747358,this.El=-1467023389,this.Fh=-1101128155,this.Fl=1401305490,this.Gh=721525244,this.Gl=746961066,this.Hh=246885852,this.Hl=-2117784414,this.outputLen=32}},zo=class extends Mt{constructor(){super(),this.Ah=-876896931,this.Al=-1056596264,this.Bh=1654270250,this.Bl=914150663,this.Ch=-1856437926,this.Cl=812702999,this.Dh=355462360,this.Dl=-150054599,this.Eh=1731405415,this.El=-4191439,this.Fh=-1900787065,this.Fl=1750603025,this.Gh=-619958771,this.Gl=1694076839,this.Hh=1203062813,this.Hl=-1090891868,this.outputLen=48}};ve.sha512=(0,br.wrapConstructor)(()=>new Mt);ve.sha512_224=(0,br.wrapConstructor)(()=>new Fo);ve.sha512_256=(0,br.wrapConstructor)(()=>new jo);ve.sha384=(0,br.wrapConstructor)(()=>new zo)});var _a=ie(A=>{"use strict";Object.defineProperty(A,"__esModule",{value:!0});A.bytes=A.stringToBytes=A.str=A.bytesToString=A.hex=A.utf8=A.bech32m=A.bech32=A.base58check=A.base58xmr=A.base58xrp=A.base58flickr=A.base58=A.base64url=A.base64=A.base32crockford=A.base32hex=A.base32=A.base16=A.utils=A.assertNumber=void 0;function ht(t){if(!Number.isSafeInteger(t))throw new Error(`Wrong integer: ${t}`)}A.assertNumber=ht;function Te(...t){let e=(o,s)=>i=>o(s(i)),n=Array.from(t).reverse().reduce((o,s)=>o?e(o,s.encode):s.encode,void 0),r=t.reduce((o,s)=>o?e(o,s.decode):s.decode,void 0);return{encode:n,decode:r}}function Ce(t){return{encode:e=>{if(!Array.isArray(e)||e.length&&typeof e[0]!="number")throw new Error("alphabet.encode input should be an array of numbers");return e.map(n=>{if(ht(n),n<0||n>=t.length)throw new Error(`Digit index outside alphabet: ${n} (alphabet: ${t.length})`);return t[n]})},decode:e=>{if(!Array.isArray(e)||e.length&&typeof e[0]!="string")throw new Error("alphabet.decode input should be array of strings");return e.map(n=>{if(typeof n!="string")throw new Error(`alphabet.decode: not string element=${n}`);let r=t.indexOf(n);if(r===-1)throw new Error(`Unknown letter: "${n}". Allowed: ${t}`);return r})}}}function Me(t=""){if(typeof t!="string")throw new Error("join separator should be string");return{encode:e=>{if(!Array.isArray(e)||e.length&&typeof e[0]!="string")throw new Error("join.encode input should be array of strings");for(let n of e)if(typeof n!="string")throw new Error(`join.encode: non-string input=${n}`);return e.join(t)},decode:e=>{if(typeof e!="string")throw new Error("join.decode input should be string");return e.split(t)}}}function Tn(t,e="="){if(ht(t),typeof e!="string")throw new Error("padding chr should be string");return{encode(n){if(!Array.isArray(n)||n.length&&typeof n[0]!="string")throw new Error("padding.encode input should be array of strings");for(let r of n)if(typeof r!="string")throw new Error(`padding.encode: non-string input=${r}`);for(;n.length*t%8;)n.push(e);return n},decode(n){if(!Array.isArray(n)||n.length&&typeof n[0]!="string")throw new Error("padding.encode input should be array of strings");for(let o of n)if(typeof o!="string")throw new Error(`padding.decode: non-string input=${o}`);let r=n.length;if(r*t%8)throw new Error("Invalid padding: string should have whole number of bytes");for(;r>0&&n[r-1]===e;r--)if(!((r-1)*t%8))throw new Error("Invalid padding: string has too much padding");return n.slice(0,r)}}}function Ea(t){if(typeof t!="function")throw new Error("normalize fn should be function");return{encode:e=>e,decode:e=>t(e)}}function ba(t,e,n){if(e<2)throw new Error(`convertRadix: wrong from=${e}, base cannot be less than 2`);if(n<2)throw new Error(`convertRadix: wrong to=${n}, base cannot be less than 2`);if(!Array.isArray(t))throw new Error("convertRadix: data should be array");if(!t.length)return[];let r=0,o=[],s=Array.from(t);for(s.forEach(i=>{if(ht(i),i<0||i>=e)throw new Error(`Wrong integer: ${i}`)});;){let i=0,a=!0;for(let c=r;c<s.length;c++){let d=s[c],l=e*i+d;if(!Number.isSafeInteger(l)||e*i/e!==i||l-d!==e*i)throw new Error("convertRadix: carry overflow");if(i=l%n,s[c]=Math.floor(l/n),!Number.isSafeInteger(s[c])||s[c]*n+i!==l)throw new Error("convertRadix: carry overflow");if(a)s[c]?a=!1:r=c;else continue}if(o.push(i),a)break}for(let i=0;i<t.length-1&&t[i]===0;i++)o.push(0);return o.reverse()}var ka=(t,e)=>e?ka(e,t%e):t,gr=(t,e)=>t+(e-ka(t,e));function Wo(t,e,n,r){if(!Array.isArray(t))throw new Error("convertRadix2: data should be array");if(e<=0||e>32)throw new Error(`convertRadix2: wrong from=${e}`);if(n<=0||n>32)throw new Error(`convertRadix2: wrong to=${n}`);if(gr(e,n)>32)throw new Error(`convertRadix2: carry overflow from=${e} to=${n} carryBits=${gr(e,n)}`);let o=0,s=0,i=2**n-1,a=[];for(let c of t){if(ht(c),c>=2**e)throw new Error(`convertRadix2: invalid data word=${c} from=${e}`);if(o=o<<e|c,s+e>32)throw new Error(`convertRadix2: carry overflow pos=${s} from=${e}`);for(s+=e;s>=n;s-=n)a.push((o>>s-n&i)>>>0);o&=2**s-1}if(o=o<<n-s&i,!r&&s>=e)throw new Error("Excess padding");if(!r&&o)throw new Error(`Non-zero padding: ${o}`);return r&&s>0&&a.push(o>>>0),a}function Aa(t){return ht(t),{encode:e=>{if(!(e instanceof Uint8Array))throw new Error("radix.encode input should be Uint8Array");return ba(Array.from(e),2**8,t)},decode:e=>{if(!Array.isArray(e)||e.length&&typeof e[0]!="number")throw new Error("radix.decode input should be array of strings");return Uint8Array.from(ba(e,t,2**8))}}}function Ge(t,e=!1){if(ht(t),t<=0||t>32)throw new Error("radix2: bits should be in (0..32]");if(gr(8,t)>32||gr(t,8)>32)throw new Error("radix2: carry overflow");return{encode:n=>{if(!(n instanceof Uint8Array))throw new Error("radix2.encode input should be Uint8Array");return Wo(Array.from(n),8,t,!e)},decode:n=>{if(!Array.isArray(n)||n.length&&typeof n[0]!="number")throw new Error("radix2.decode input should be array of strings");return Uint8Array.from(Wo(n,t,8,e))}}}function ga(t){if(typeof t!="function")throw new Error("unsafeWrapper fn should be function");return function(...e){try{return t.apply(null,e)}catch{}}}function Ta(t,e){if(ht(t),typeof e!="function")throw new Error("checksum fn should be function");return{encode(n){if(!(n instanceof Uint8Array))throw new Error("checksum.encode: input should be Uint8Array");let r=e(n).slice(0,t),o=new Uint8Array(n.length+t);return o.set(n),o.set(r,n.length),o},decode(n){if(!(n instanceof Uint8Array))throw new Error("checksum.decode: input should be Uint8Array");let r=n.slice(0,-t),o=e(r).slice(0,t),s=n.slice(-t);for(let i=0;i<t;i++)if(o[i]!==s[i])throw new Error("Invalid checksum");return r}}}A.utils={alphabet:Ce,chain:Te,checksum:Ta,radix:Aa,radix2:Ge,join:Me,padding:Tn};A.base16=Te(Ge(4),Ce("0123456789ABCDEF"),Me(""));A.base32=Te(Ge(5),Ce("ABCDEFGHIJKLMNOPQRSTUVWXYZ234567"),Tn(5),Me(""));A.base32hex=Te(Ge(5),Ce("0123456789ABCDEFGHIJKLMNOPQRSTUV"),Tn(5),Me(""));A.base32crockford=Te(Ge(5),Ce("0123456789ABCDEFGHJKMNPQRSTVWXYZ"),Me(""),Ea(t=>t.toUpperCase().replace(/O/g,"0").replace(/[IL]/g,"1")));A.base64=Te(Ge(6),Ce("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"),Tn(6),Me(""));A.base64url=Te(Ge(6),Ce("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"),Tn(6),Me(""));var qo=t=>Te(Aa(58),Ce(t),Me(""));A.base58=qo("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz");A.base58flickr=qo("123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ");A.base58xrp=qo("rpshnaf39wBUDNEGHJKLM4PQRST7VWXYZ2bcdeCg65jkm8oFqi1tuvAxyz");var wa=[0,2,3,5,6,7,9,10,11];A.base58xmr={encode(t){let e="";for(let n=0;n<t.length;n+=8){let r=t.subarray(n,n+8);e+=A.base58.encode(r).padStart(wa[r.length],"1")}return e},decode(t){let e=[];for(let n=0;n<t.length;n+=11){let r=t.slice(n,n+11),o=wa.indexOf(r.length),s=A.base58.decode(r);for(let i=0;i<s.length-o;i++)if(s[i]!==0)throw new Error("base58xmr: wrong padding");e=e.concat(Array.from(s.slice(s.length-o)))}return Uint8Array.from(e)}};var Ku=t=>Te(Ta(4,e=>t(t(e))),A.base58);A.base58check=Ku;var Go=Te(Ce("qpzry9x8gf2tvdw0s3jn54khce6mua7l"),Me("")),xa=[996825010,642813549,513874426,1027748829,705979059];function kn(t){let e=t>>25,n=(t&33554431)<<5;for(let r=0;r<xa.length;r++)(e>>r&1)===1&&(n^=xa[r]);return n}function va(t,e,n=1){let r=t.length,o=1;for(let s=0;s<r;s++){let i=t.charCodeAt(s);if(i<33||i>126)throw new Error(`Invalid prefix (${t})`);o=kn(o)^i>>5}o=kn(o);for(let s=0;s<r;s++)o=kn(o)^t.charCodeAt(s)&31;for(let s of e)o=kn(o)^s;for(let s=0;s<6;s++)o=kn(o);return o^=n,Go.encode(Wo([o%2**30],30,5,!1))}function Sa(t){let e=t==="bech32"?1:734539939,n=Ge(5),r=n.decode,o=n.encode,s=ga(r);function i(l,u,h=90){if(typeof l!="string")throw new Error(`bech32.encode prefix should be string, not ${typeof l}`);if(!Array.isArray(u)||u.length&&typeof u[0]!="number")throw new Error(`bech32.encode words should be array of numbers, not ${typeof u}`);let p=l.length+7+u.length;if(h!==!1&&p>h)throw new TypeError(`Length ${p} exceeds limit ${h}`);return l=l.toLowerCase(),`${l}1${Go.encode(u)}${va(l,u,e)}`}function a(l,u=90){if(typeof l!="string")throw new Error(`bech32.decode input should be string, not ${typeof l}`);if(l.length<8||u!==!1&&l.length>u)throw new TypeError(`Wrong string length: ${l.length} (${l}). Expected (8..${u})`);let h=l.toLowerCase();if(l!==h&&l!==l.toUpperCase())throw new Error("String must be lowercase or uppercase");l=h;let p=l.lastIndexOf("1");if(p===0||p===-1)throw new Error('Letter "1" must be present between prefix and data only');let m=l.slice(0,p),y=l.slice(p+1);if(y.length<6)throw new Error("Data must be at least 6 characters long");let g=Go.decode(y).slice(0,-6),k=va(m,g,e);if(!y.endsWith(k))throw new Error(`Invalid checksum in ${l}: expected "${k}"`);return{prefix:m,words:g}}let c=ga(a);function d(l){let{prefix:u,words:h}=a(l,!1);return{prefix:u,words:h,bytes:r(h)}}return{encode:i,decode:a,decodeToBytes:d,decodeUnsafe:c,fromWords:r,fromWordsUnsafe:s,toWords:o}}A.bech32=Sa("bech32");A.bech32m=Sa("bech32m");A.utf8={encode:t=>new TextDecoder().decode(t),decode:t=>new TextEncoder().encode(t)};A.hex=Te(Ge(4),Ce("0123456789abcdef"),Me(""),Ea(t=>{if(typeof t!="string"||t.length%2)throw new TypeError(`hex.decode: expected string, got ${typeof t} with length ${t.length}`);return t.toLowerCase()}));var An={utf8:A.utf8,hex:A.hex,base16:A.base16,base32:A.base32,base64:A.base64,base64url:A.base64url,base58:A.base58,base58xmr:A.base58xmr},La=`Invalid encoding type. Available types: ${Object.keys(An).join(", ")}`,Vu=(t,e)=>{if(typeof t!="string"||!An.hasOwnProperty(t))throw new TypeError(La);if(!(e instanceof Uint8Array))throw new TypeError("bytesToString() expects Uint8Array");return An[t].encode(e)};A.bytesToString=Vu;A.str=A.bytesToString;var Zu=(t,e)=>{if(!An.hasOwnProperty(t))throw new TypeError(La);if(typeof e!="string")throw new TypeError("stringToBytes() expects string");return An[t].decode(e)};A.stringToBytes=Zu;A.bytes=A.stringToBytes});var Oa=ie(de=>{"use strict";Object.defineProperty(de,"__esModule",{value:!0});de.mnemonicToSeedSync=de.mnemonicToSeed=de.validateMnemonic=de.entropyToMnemonic=de.mnemonicToEntropy=de.generateMnemonic=void 0;var Ba=xn(),Ha=da(),Yu=fa(),Ia=ya(),Xu=Ct(),wr=_a(),Ju=t=>t[0]==="\u3042\u3044\u3053\u304F\u3057\u3093";function Ca(t){if(typeof t!="string")throw new TypeError(`Invalid mnemonic type: ${typeof t}`);return t.normalize("NFKD")}function Ko(t){let e=Ca(t),n=e.split(" ");if(![12,15,18,21,24].includes(n.length))throw new Error("Invalid mnemonic");return{nfkd:e,words:n}}function Ma(t){Ba.default.bytes(t,16,20,24,28,32)}function Qu(t,e=128){if(Ba.default.number(e),e%32!==0||e>256)throw new TypeError("Invalid entropy");return $a((0,Xu.randomBytes)(e/8),t)}de.generateMnemonic=Qu;var ed=t=>{let e=8-t.length/4;return new Uint8Array([(0,Yu.sha256)(t)[0]>>e<<e])};function Ra(t){if(!Array.isArray(t)||t.length!==2048||typeof t[0]!="string")throw new Error("Worlist: expected array of 2048 strings");return t.forEach(e=>{if(typeof e!="string")throw new Error(`Wordlist: non-string element: ${e}`)}),wr.utils.chain(wr.utils.checksum(1,ed),wr.utils.radix2(11,!0),wr.utils.alphabet(t))}function Da(t,e){let{words:n}=Ko(t),r=Ra(e).decode(n);return Ma(r),r}de.mnemonicToEntropy=Da;function $a(t,e){return Ma(t),Ra(e).encode(t).join(Ju(e)?"\u3000":" ")}de.entropyToMnemonic=$a;function td(t,e){try{Da(t,e)}catch{return!1}return!0}de.validateMnemonic=td;var Ua=t=>Ca(`mnemonic${t}`);function nd(t,e=""){return(0,Ha.pbkdf2Async)(Ia.sha512,Ko(t).nfkd,Ua(e),{c:2048,dkLen:64})}de.mnemonicToSeed=nd;function rd(t,e=""){return(0,Ha.pbkdf2)(Ia.sha512,Ko(t).nfkd,Ua(e),{c:2048,dkLen:64})}de.mnemonicToSeedSync=rd});function Vo(t){if(!Number.isSafeInteger(t)||t<0)throw new Error(`Wrong positive integer: ${t}`)}function od(t){if(typeof t!="boolean")throw new Error(`Expected boolean, not ${t}`)}function pt(t,...e){if(!(t instanceof Uint8Array))throw new TypeError("Expected Uint8Array");if(e.length>0&&!e.includes(t.length))throw new TypeError(`Expected Uint8Array of length ${e}, not of length=${t.length}`)}function sd(t){if(typeof t!="function"||typeof t.create!="function")throw new Error("Hash should be wrapped by utils.wrapConstructor");Vo(t.outputLen),Vo(t.blockLen)}function id(t,e=!0){if(t.destroyed)throw new Error("Hash instance has been destroyed");if(e&&t.finished)throw new Error("Hash#digest() has already been called")}function ad(t,e){pt(t);let n=e.outputLen;if(t.length<n)throw new Error(`digestInto() expects output buffer of length at least ${n}`)}var cd,qe,xr=D(()=>{cd={number:Vo,bool:od,bytes:pt,hash:sd,exists:id,output:ad},qe=cd});var ld,Na=D(()=>{ld={node:void 0,web:typeof self=="object"&&"crypto"in self?self.crypto:void 0}});function Pa(t){if(!(t instanceof Uint8Array))throw new Error("Uint8Array expected");let e="";for(let n=0;n<t.length;n++)e+=dd[t[n]];return e}function Fa(t){if(typeof t!="string")throw new TypeError("hexToBytes: expected string, got "+typeof t);if(t.length%2)throw new Error("hexToBytes: received invalid unpadded hex");let e=new Uint8Array(t.length/2);for(let n=0;n<e.length;n++){let r=n*2,o=t.slice(r,r+2),s=Number.parseInt(o,16);if(Number.isNaN(s)||s<0)throw new Error("Invalid byte sequence");e[n]=s}return e}function Zo(t){if(typeof t!="string")throw new TypeError(`utf8ToBytes expected string, got ${typeof t}`);return new TextEncoder().encode(t)}function Sn(t){if(typeof t=="string"&&(t=Zo(t)),!(t instanceof Uint8Array))throw new TypeError(`Expected input type is Uint8Array (got ${typeof t})`);return t}function Ln(...t){if(!t.every(r=>r instanceof Uint8Array))throw new Error("Uint8Array list expected");if(t.length===1)return t[0];let e=t.reduce((r,o)=>r+o.length,0),n=new Uint8Array(e);for(let r=0,o=0;r<t.length;r++){let s=t[r];n.set(s,o),o+=s.length}return n}function Re(t){let e=r=>t().update(Sn(r)).digest(),n=t();return e.outputLen=n.outputLen,e.blockLen=n.blockLen,e.create=()=>t(),e}var mt,Se,ud,dd,nn,Rt=D(()=>{Na();mt=t=>new DataView(t.buffer,t.byteOffset,t.byteLength),Se=(t,e)=>t<<32-e|t>>>e,ud=new Uint8Array(new Uint32Array([287454020]).buffer)[0]===68;if(!ud)throw new Error("Non little-endian hardware is not supported");dd=Array.from({length:256},(t,e)=>e.toString(16).padStart(2,"0"));nn=class{clone(){return this._cloneInto()}}});var vr,_n,ja=D(()=>{xr();Rt();vr=class extends nn{constructor(e,n){super(),this.finished=!1,this.destroyed=!1,qe.hash(e);let r=Sn(n);if(this.iHash=e.create(),typeof this.iHash.update!="function")throw new TypeError("Expected instance of class which extends utils.Hash");this.blockLen=this.iHash.blockLen,this.outputLen=this.iHash.outputLen;let o=this.blockLen,s=new Uint8Array(o);s.set(r.length>o?e.create().update(r).digest():r);for(let i=0;i<s.length;i++)s[i]^=54;this.iHash.update(s),this.oHash=e.create();for(let i=0;i<s.length;i++)s[i]^=106;this.oHash.update(s),s.fill(0)}update(e){return qe.exists(this),this.iHash.update(e),this}digestInto(e){qe.exists(this),qe.bytes(e,this.outputLen),this.finished=!0,this.iHash.digestInto(e),this.oHash.update(e),this.oHash.digestInto(e),this.destroy()}digest(){let e=new Uint8Array(this.oHash.outputLen);return this.digestInto(e),e}_cloneInto(e){e||(e=Object.create(Object.getPrototypeOf(this),{}));let{oHash:n,iHash:r,finished:o,destroyed:s,blockLen:i,outputLen:a}=this;return e=e,e.finished=o,e.destroyed=s,e.blockLen=i,e.outputLen=a,e.oHash=n._cloneInto(e.oHash),e.iHash=r._cloneInto(e.iHash),e}destroy(){this.destroyed=!0,this.oHash.destroy(),this.iHash.destroy()}},_n=(t,e,n)=>new vr(t,e).update(n).digest();_n.create=(t,e)=>new vr(t,e)});function fd(t,e,n,r){if(typeof t.setBigUint64=="function")return t.setBigUint64(e,n,r);let o=BigInt(32),s=BigInt(4294967295),i=Number(n>>o&s),a=Number(n&s),c=r?4:0,d=r?0:4;t.setUint32(e+c,i,r),t.setUint32(e+d,a,r)}var yt,Er=D(()=>{xr();Rt();yt=class extends nn{constructor(e,n,r,o){super(),this.blockLen=e,this.outputLen=n,this.padOffset=r,this.isLE=o,this.finished=!1,this.length=0,this.pos=0,this.destroyed=!1,this.buffer=new Uint8Array(e),this.view=mt(this.buffer)}update(e){qe.exists(this);let{view:n,buffer:r,blockLen:o}=this;e=Sn(e);let s=e.length;for(let i=0;i<s;){let a=Math.min(o-this.pos,s-i);if(a===o){let c=mt(e);for(;o<=s-i;i+=o)this.process(c,i);continue}r.set(e.subarray(i,i+a),this.pos),this.pos+=a,i+=a,this.pos===o&&(this.process(n,0),this.pos=0)}return this.length+=e.length,this.roundClean(),this}digestInto(e){qe.exists(this),qe.output(e,this),this.finished=!0;let{buffer:n,view:r,blockLen:o,isLE:s}=this,{pos:i}=this;n[i++]=128,this.buffer.subarray(i).fill(0),this.padOffset>o-i&&(this.process(r,0),i=0);for(let u=i;u<o;u++)n[u]=0;fd(r,o-8,BigInt(this.length*8),s),this.process(r,0);let a=mt(e),c=this.outputLen;if(c%4)throw new Error("_sha2: outputLen should be aligned to 32bit");let d=c/4,l=this.get();if(d>l.length)throw new Error("_sha2: outputLen bigger than state");for(let u=0;u<d;u++)a.setUint32(4*u,l[u],s)}digest(){let{buffer:e,outputLen:n}=this;this.digestInto(e);let r=e.slice(0,n);return this.destroy(),r}_cloneInto(e){e||(e=new this.constructor),e.set(...this.get());let{blockLen:n,buffer:r,length:o,finished:s,destroyed:i,pos:a}=this;return e.length=o,e.pos=a,e.finished=s,e.destroyed=i,o%n&&e.buffer.set(r),e}}});function za(t,e,n,r){return t===0?e^n^r:t===1?e&n|~e&r:t===2?(e|~n)^r:t===3?e&r|n&~r:e^(n|~r)}var hd,Wa,pd,Xo,Jo,Ga,md,yd,bd,gd,kr,Ar,Yo,qa,Ka=D(()=>{Er();Rt();hd=new Uint8Array([7,4,13,1,10,6,15,3,12,0,9,5,2,14,11,8]),Wa=Uint8Array.from({length:16},(t,e)=>e),pd=Wa.map(t=>(9*t+5)%16),Xo=[Wa],Jo=[pd];for(let t=0;t<4;t++)for(let e of[Xo,Jo])e.push(e[t].map(n=>hd[n]));Ga=[[11,14,15,12,5,8,7,9,11,13,14,15,6,7,9,8],[12,13,11,15,6,9,9,7,12,15,11,13,7,8,7,7],[13,15,14,11,7,7,6,8,13,14,13,12,5,5,6,9],[14,11,12,14,8,6,5,5,15,12,15,14,9,9,8,6],[15,12,13,13,9,5,8,6,14,11,12,11,8,6,5,5]].map(t=>new Uint8Array(t)),md=Xo.map((t,e)=>t.map(n=>Ga[e][n])),yd=Jo.map((t,e)=>t.map(n=>Ga[e][n])),bd=new Uint32Array([0,1518500249,1859775393,2400959708,2840853838]),gd=new Uint32Array([1352829926,1548603684,1836072691,2053994217,0]),kr=(t,e)=>t<<e|t>>>32-e;Ar=new Uint32Array(16),Yo=class extends yt{constructor(){super(64,20,8,!0),this.h0=1732584193,this.h1=-271733879,this.h2=-1732584194,this.h3=271733878,this.h4=-1009589776}get(){let{h0:e,h1:n,h2:r,h3:o,h4:s}=this;return[e,n,r,o,s]}set(e,n,r,o,s){this.h0=e|0,this.h1=n|0,this.h2=r|0,this.h3=o|0,this.h4=s|0}process(e,n){for(let p=0;p<16;p++,n+=4)Ar[p]=e.getUint32(n,!0);let r=this.h0|0,o=r,s=this.h1|0,i=s,a=this.h2|0,c=a,d=this.h3|0,l=d,u=this.h4|0,h=u;for(let p=0;p<5;p++){let m=4-p,y=bd[p],g=gd[p],k=Xo[p],L=Jo[p],b=md[p],H=yd[p];for(let E=0;E<16;E++){let V=kr(r+za(p,s,a,d)+Ar[k[E]]+y,b[E])+u|0;r=u,u=d,d=kr(a,10)|0,a=s,s=V}for(let E=0;E<16;E++){let V=kr(o+za(m,i,c,l)+Ar[L[E]]+g,H[E])+h|0;o=h,h=l,l=kr(c,10)|0,c=i,i=V}}this.set(this.h1+a+l|0,this.h2+d+h|0,this.h3+u+o|0,this.h4+r+i|0,this.h0+s+c|0)}roundClean(){Ar.fill(0)}destroy(){this.destroyed=!0,this.buffer.fill(0),this.set(0,0,0,0,0)}},qa=Re(()=>new Yo)});var wd,xd,vd,bt,gt,Tr,Qo,Sr,Sp,Va=D(()=>{Er();Rt();wd=(t,e,n)=>t&e^~t&n,xd=(t,e,n)=>t&e^t&n^e&n,vd=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),bt=new Uint32Array([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]),gt=new Uint32Array(64),Tr=class extends yt{constructor(){super(64,32,8,!1),this.A=bt[0]|0,this.B=bt[1]|0,this.C=bt[2]|0,this.D=bt[3]|0,this.E=bt[4]|0,this.F=bt[5]|0,this.G=bt[6]|0,this.H=bt[7]|0}get(){let{A:e,B:n,C:r,D:o,E:s,F:i,G:a,H:c}=this;return[e,n,r,o,s,i,a,c]}set(e,n,r,o,s,i,a,c){this.A=e|0,this.B=n|0,this.C=r|0,this.D=o|0,this.E=s|0,this.F=i|0,this.G=a|0,this.H=c|0}process(e,n){for(let u=0;u<16;u++,n+=4)gt[u]=e.getUint32(n,!1);for(let u=16;u<64;u++){let h=gt[u-15],p=gt[u-2],m=Se(h,7)^Se(h,18)^h>>>3,y=Se(p,17)^Se(p,19)^p>>>10;gt[u]=y+gt[u-7]+m+gt[u-16]|0}let{A:r,B:o,C:s,D:i,E:a,F:c,G:d,H:l}=this;for(let u=0;u<64;u++){let h=Se(a,6)^Se(a,11)^Se(a,25),p=l+h+wd(a,c,d)+vd[u]+gt[u]|0,y=(Se(r,2)^Se(r,13)^Se(r,22))+xd(r,o,s)|0;l=d,d=c,c=a,a=i+p|0,i=s,s=o,o=r,r=p+y|0}r=r+this.A|0,o=o+this.B|0,s=s+this.C|0,i=i+this.D|0,a=a+this.E|0,c=c+this.F|0,d=d+this.G|0,l=l+this.H|0,this.set(r,o,s,i,a,c,d,l)}roundClean(){gt.fill(0)}destroy(){this.set(0,0,0,0,0,0,0,0),this.buffer.fill(0)}},Qo=class extends Tr{constructor(){super(),this.A=-1056596264,this.B=914150663,this.C=812702999,this.D=-150054599,this.E=-4191439,this.F=1750603025,this.G=1694076839,this.H=-1090891868,this.outputLen=28}},Sr=Re(()=>new Tr),Sp=Re(()=>new Qo)});function Za(t,e=!1){return e?{h:Number(t&Lr),l:Number(t>>es&Lr)}:{h:Number(t>>es&Lr)|0,l:Number(t&Lr)|0}}function Ed(t,e=!1){let n=new Uint32Array(t.length),r=new Uint32Array(t.length);for(let o=0;o<t.length;o++){let{h:s,l:i}=Za(t[o],e);[n[o],r[o]]=[s,i]}return[n,r]}function $d(t,e,n,r){let o=(e>>>0)+(r>>>0);return{h:t+n+(o/2**32|0)|0,l:o|0}}var Lr,es,kd,Ad,Td,Sd,Ld,_d,Bd,Hd,Id,Cd,Md,Rd,Dd,Ud,Od,Nd,Pd,Fd,jd,zd,I,Ya=D(()=>{Lr=BigInt(4294967295),es=BigInt(32);kd=(t,e)=>BigInt(t>>>0)<<es|BigInt(e>>>0),Ad=(t,e,n)=>t>>>n,Td=(t,e,n)=>t<<32-n|e>>>n,Sd=(t,e,n)=>t>>>n|e<<32-n,Ld=(t,e,n)=>t<<32-n|e>>>n,_d=(t,e,n)=>t<<64-n|e>>>n-32,Bd=(t,e,n)=>t>>>n-32|e<<64-n,Hd=(t,e)=>e,Id=(t,e)=>t,Cd=(t,e,n)=>t<<n|e>>>32-n,Md=(t,e,n)=>e<<n|t>>>32-n,Rd=(t,e,n)=>e<<n-32|t>>>64-n,Dd=(t,e,n)=>t<<n-32|e>>>64-n;Ud=(t,e,n)=>(t>>>0)+(e>>>0)+(n>>>0),Od=(t,e,n,r)=>e+n+r+(t/2**32|0)|0,Nd=(t,e,n,r)=>(t>>>0)+(e>>>0)+(n>>>0)+(r>>>0),Pd=(t,e,n,r,o)=>e+n+r+o+(t/2**32|0)|0,Fd=(t,e,n,r,o)=>(t>>>0)+(e>>>0)+(n>>>0)+(r>>>0)+(o>>>0),jd=(t,e,n,r,o,s)=>e+n+r+o+s+(t/2**32|0)|0,zd={fromBig:Za,split:Ed,toBig:kd,shrSH:Ad,shrSL:Td,rotrSH:Sd,rotrSL:Ld,rotrBH:_d,rotrBL:Bd,rotr32H:Hd,rotr32L:Id,rotlSH:Cd,rotlSL:Md,rotlBH:Rd,rotlBL:Dd,add:$d,add3L:Ud,add3H:Od,add4L:Nd,add4H:Pd,add5H:jd,add5L:Fd},I=zd});var Wd,Gd,wt,xt,rn,ts,ns,rs,os,Cp,Mp,Rp,Xa=D(()=>{Er();Ya();Rt();[Wd,Gd]=I.split(["0x428a2f98d728ae22","0x7137449123ef65cd","0xb5c0fbcfec4d3b2f","0xe9b5dba58189dbbc","0x3956c25bf348b538","0x59f111f1b605d019","0x923f82a4af194f9b","0xab1c5ed5da6d8118","0xd807aa98a3030242","0x12835b0145706fbe","0x243185be4ee4b28c","0x550c7dc3d5ffb4e2","0x72be5d74f27b896f","0x80deb1fe3b1696b1","0x9bdc06a725c71235","0xc19bf174cf692694","0xe49b69c19ef14ad2","0xefbe4786384f25e3","0x0fc19dc68b8cd5b5","0x240ca1cc77ac9c65","0x2de92c6f592b0275","0x4a7484aa6ea6e483","0x5cb0a9dcbd41fbd4","0x76f988da831153b5","0x983e5152ee66dfab","0xa831c66d2db43210","0xb00327c898fb213f","0xbf597fc7beef0ee4","0xc6e00bf33da88fc2","0xd5a79147930aa725","0x06ca6351e003826f","0x142929670a0e6e70","0x27b70a8546d22ffc","0x2e1b21385c26c926","0x4d2c6dfc5ac42aed","0x53380d139d95b3df","0x650a73548baf63de","0x766a0abb3c77b2a8","0x81c2c92e47edaee6","0x92722c851482353b","0xa2bfe8a14cf10364","0xa81a664bbc423001","0xc24b8b70d0f89791","0xc76c51a30654be30","0xd192e819d6ef5218","0xd69906245565a910","0xf40e35855771202a","0x106aa07032bbd1b8","0x19a4c116b8d2d0c8","0x1e376c085141ab53","0x2748774cdf8eeb99","0x34b0bcb5e19b48a8","0x391c0cb3c5c95a63","0x4ed8aa4ae3418acb","0x5b9cca4f7763e373","0x682e6ff3d6b2b8a3","0x748f82ee5defb2fc","0x78a5636f43172f60","0x84c87814a1f0ab72","0x8cc702081a6439ec","0x90befffa23631e28","0xa4506cebde82bde9","0xbef9a3f7b2c67915","0xc67178f2e372532b","0xca273eceea26619c","0xd186b8c721c0c207","0xeada7dd6cde0eb1e","0xf57d4f7fee6ed178","0x06f067aa72176fba","0x0a637dc5a2c898a6","0x113f9804bef90dae","0x1b710b35131c471b","0x28db77f523047d84","0x32caab7b40c72493","0x3c9ebe0a15c9bebc","0x431d67c49c100d4c","0x4cc5d4becb3e42b6","0x597f299cfc657e2a","0x5fcb6fab3ad6faec","0x6c44198c4a475817"].map(t=>BigInt(t))),wt=new Uint32Array(80),xt=new Uint32Array(80),rn=class extends yt{constructor(){super(128,64,16,!1),this.Ah=1779033703,this.Al=-205731576,this.Bh=-1150833019,this.Bl=-2067093701,this.Ch=1013904242,this.Cl=-23791573,this.Dh=-1521486534,this.Dl=1595750129,this.Eh=1359893119,this.El=-1377402159,this.Fh=-1694144372,this.Fl=725511199,this.Gh=528734635,this.Gl=-79577749,this.Hh=1541459225,this.Hl=327033209}get(){let{Ah:e,Al:n,Bh:r,Bl:o,Ch:s,Cl:i,Dh:a,Dl:c,Eh:d,El:l,Fh:u,Fl:h,Gh:p,Gl:m,Hh:y,Hl:g}=this;return[e,n,r,o,s,i,a,c,d,l,u,h,p,m,y,g]}set(e,n,r,o,s,i,a,c,d,l,u,h,p,m,y,g){this.Ah=e|0,this.Al=n|0,this.Bh=r|0,this.Bl=o|0,this.Ch=s|0,this.Cl=i|0,this.Dh=a|0,this.Dl=c|0,this.Eh=d|0,this.El=l|0,this.Fh=u|0,this.Fl=h|0,this.Gh=p|0,this.Gl=m|0,this.Hh=y|0,this.Hl=g|0}process(e,n){for(let b=0;b<16;b++,n+=4)wt[b]=e.getUint32(n),xt[b]=e.getUint32(n+=4);for(let b=16;b<80;b++){let H=wt[b-15]|0,E=xt[b-15]|0,V=I.rotrSH(H,E,1)^I.rotrSH(H,E,8)^I.shrSH(H,E,7),S=I.rotrSL(H,E,1)^I.rotrSL(H,E,8)^I.shrSL(H,E,7),j=wt[b-2]|0,M=xt[b-2]|0,se=I.rotrSH(j,M,19)^I.rotrBH(j,M,61)^I.shrSH(j,M,6),fe=I.rotrSL(j,M,19)^I.rotrBL(j,M,61)^I.shrSL(j,M,6),oe=I.add4L(S,fe,xt[b-7],xt[b-16]),Oe=I.add4H(oe,V,se,wt[b-7],wt[b-16]);wt[b]=Oe|0,xt[b]=oe|0}let{Ah:r,Al:o,Bh:s,Bl:i,Ch:a,Cl:c,Dh:d,Dl:l,Eh:u,El:h,Fh:p,Fl:m,Gh:y,Gl:g,Hh:k,Hl:L}=this;for(let b=0;b<80;b++){let H=I.rotrSH(u,h,14)^I.rotrSH(u,h,18)^I.rotrBH(u,h,41),E=I.rotrSL(u,h,14)^I.rotrSL(u,h,18)^I.rotrBL(u,h,41),V=u&p^~u&y,S=h&m^~h&g,j=I.add5L(L,E,S,Gd[b],xt[b]),M=I.add5H(j,k,H,V,Wd[b],wt[b]),se=j|0,fe=I.rotrSH(r,o,28)^I.rotrBH(r,o,34)^I.rotrBH(r,o,39),oe=I.rotrSL(r,o,28)^I.rotrBL(r,o,34)^I.rotrBL(r,o,39),Oe=r&s^r&a^s&a,kt=o&i^o&c^i&c;k=y|0,L=g|0,y=p|0,g=m|0,p=u|0,m=h|0,{h:u,l:h}=I.add(d|0,l|0,M|0,se|0),d=a|0,l=c|0,a=s|0,c=i|0,s=r|0,i=o|0;let At=I.add3L(se,oe,kt);r=I.add3H(At,M,fe,Oe),o=At|0}({h:r,l:o}=I.add(this.Ah|0,this.Al|0,r|0,o|0)),{h:s,l:i}=I.add(this.Bh|0,this.Bl|0,s|0,i|0),{h:a,l:c}=I.add(this.Ch|0,this.Cl|0,a|0,c|0),{h:d,l}=I.add(this.Dh|0,this.Dl|0,d|0,l|0),{h:u,l:h}=I.add(this.Eh|0,this.El|0,u|0,h|0),{h:p,l:m}=I.add(this.Fh|0,this.Fl|0,p|0,m|0),{h:y,l:g}=I.add(this.Gh|0,this.Gl|0,y|0,g|0),{h:k,l:L}=I.add(this.Hh|0,this.Hl|0,k|0,L|0),this.set(r,o,s,i,a,c,d,l,u,h,p,m,y,g,k,L)}roundClean(){wt.fill(0),xt.fill(0)}destroy(){this.buffer.fill(0),this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0)}},ts=class extends rn{constructor(){super(),this.Ah=-1942145080,this.Al=424955298,this.Bh=1944164710,this.Bl=-1982016298,this.Ch=502970286,this.Cl=855612546,this.Dh=1738396948,this.Dl=1479516111,this.Eh=258812777,this.El=2077511080,this.Fh=2011393907,this.Fl=79989058,this.Gh=1067287976,this.Gl=1780299464,this.Hh=286451373,this.Hl=-1848208735,this.outputLen=28}},ns=class extends rn{constructor(){super(),this.Ah=573645204,this.Al=-64227540,this.Bh=-1621794909,this.Bl=-934517566,this.Ch=596883563,this.Cl=1867755857,this.Dh=-1774684391,this.Dl=1497426621,this.Eh=-1775747358,this.El=-1467023389,this.Fh=-1101128155,this.Fl=1401305490,this.Gh=721525244,this.Gl=746961066,this.Hh=246885852,this.Hl=-2117784414,this.outputLen=32}},rs=class extends rn{constructor(){super(),this.Ah=-876896931,this.Al=-1056596264,this.Bh=1654270250,this.Bl=914150663,this.Ch=-1856437926,this.Cl=812702999,this.Dh=355462360,this.Dl=-150054599,this.Eh=1731405415,this.El=-4191439,this.Fh=-1900787065,this.Fl=1750603025,this.Gh=-619958771,this.Gl=1694076839,this.Hh=1203062813,this.Hl=-1090891868,this.outputLen=48}},os=Re(()=>new rn),Cp=Re(()=>new ts),Mp=Re(()=>new ns),Rp=Re(()=>new rs)});function Ja(t){return BigInt(`0x${Pa(t)}`)}function qd(t){return Fa(t.toString(16).padStart(64,"0"))}var ss,Kd,is,as,Vd,Zd,_r,De,Qa=D(()=>{ja();Ka();Va();Xa();xr();Rt();je();wn();B.hmacSha256Sync=(t,...e)=>_n(Sr,t,B.concatBytes(...e));ss=Ji(Sr);Kd=Zo("Bitcoin seed"),is={private:76066276,public:76067358},as=2147483648,Vd=t=>qa(Sr(t)),Zd=t=>mt(t).getUint32(0,!1),_r=t=>{if(!Number.isSafeInteger(t)||t<0||t>2**32-1)throw new Error(`Invalid number=${t}. Should be from 0 to 2 ** 32 - 1`);let e=new Uint8Array(4);return mt(e).setUint32(0,t,!1),e},De=class{constructor(e){if(this.depth=0,this.index=0,this.chainCode=null,this.parentFingerprint=0,!e||typeof e!="object")throw new Error("HDKey.constructor must not be called directly");if(this.versions=e.versions||is,this.depth=e.depth||0,this.chainCode=e.chainCode,this.index=e.index||0,this.parentFingerprint=e.parentFingerprint||0,!this.depth&&(this.parentFingerprint||this.index))throw new Error("HDKey: zero depth with non-zero index/parent fingerprint");if(e.publicKey&&e.privateKey)throw new Error("HDKey: publicKey and privateKey at same time.");if(e.privateKey){if(!B.isValidPrivateKey(e.privateKey))throw new Error("Invalid private key");this.privKey=typeof e.privateKey=="bigint"?e.privateKey:Ja(e.privateKey),this.privKeyBytes=qd(this.privKey),this.pubKey=Hi(e.privateKey,!0)}else if(e.publicKey)this.pubKey=$.fromHex(e.publicKey).toRawBytes(!0);else throw new Error("HDKey: no public or private key provided");this.pubHash=Vd(this.pubKey)}get fingerprint(){if(!this.pubHash)throw new Error("No publicKey set!");return Zd(this.pubHash)}get identifier(){return this.pubHash}get pubKeyHash(){return this.pubHash}get privateKey(){return this.privKeyBytes||null}get publicKey(){return this.pubKey||null}get privateExtendedKey(){let e=this.privateKey;if(!e)throw new Error("No private key");return ss.encode(this.serialize(this.versions.private,Ln(new Uint8Array([0]),e)))}get publicExtendedKey(){if(!this.pubKey)throw new Error("No public key");return ss.encode(this.serialize(this.versions.public,this.pubKey))}static fromMasterSeed(e,n=is){if(pt(e),8*e.length<128||8*e.length>512)throw new Error(`HDKey: wrong seed length=${e.length}. Should be between 128 and 512 bits; 256 bits is advised)`);let r=_n(os,Kd,e);return new De({versions:n,chainCode:r.slice(32),privateKey:r.slice(0,32)})}static fromExtendedKey(e,n=is){let r=ss.decode(e),o=mt(r),s=o.getUint32(0,!1),i={versions:n,depth:r[4],parentFingerprint:o.getUint32(5,!1),index:o.getUint32(9,!1),chainCode:r.slice(13,45)},a=r.slice(45),c=a[0]===0;if(s!==n[c?"private":"public"])throw new Error("Version mismatch");return c?new De({...i,privateKey:a.slice(1)}):new De({...i,publicKey:a})}static fromJSON(e){return De.fromExtendedKey(e.xpriv)}derive(e){if(!/^[mM]'?/.test(e))throw new Error('Path must start with "m" or "M"');if(/^[mM]'?$/.test(e))return this;let n=e.replace(/^[mM]'?\//,"").split("/"),r=this;for(let o of n){let s=/^(\d+)('?)$/.exec(o);if(!s||s.length!==3)throw new Error(`Invalid child index: ${o}`);let i=+s[1];if(!Number.isSafeInteger(i)||i>=as)throw new Error("Invalid index");s[2]==="'"&&(i+=as),r=r.deriveChild(i)}return r}deriveChild(e){if(!this.pubKey||!this.chainCode)throw new Error("No publicKey or chainCode set");let n=_r(e);if(e>=as){let a=this.privateKey;if(!a)throw new Error("Could not derive hardened child key");n=Ln(new Uint8Array([0]),a,n)}else n=Ln(this.pubKey,n);let r=_n(os,this.chainCode,n),o=Ja(r.slice(0,32)),s=r.slice(32);if(!B.isValidPrivateKey(o))throw new Error("Tweak bigger than curve order");let i={versions:this.versions,chainCode:s,depth:this.depth+1,parentFingerprint:this.fingerprint,index:e};try{if(this.privateKey){let a=B.mod(this.privKey+o,F.n);if(!B.isValidPrivateKey(a))throw new Error("The tweak was out of range or the resulted private key is invalid");i.privateKey=a}else{let a=$.fromHex(this.pubKey).add($.fromPrivateKey(o));if(a.equals($.ZERO))throw new Error("The tweak was equal to negative P, which made the result key invalid");i.publicKey=a.toRawBytes(!0)}return new De(i)}catch{return this.deriveChild(e+1)}}sign(e){if(!this.privateKey)throw new Error("No privateKey set!");return pt(e,32),Mi(e,this.privKey,{canonical:!0,der:!1})}verify(e,n){if(pt(e,32),pt(n,64),!this.publicKey)throw new Error("No publicKey set!");let r;try{r=ge.fromCompact(n)}catch{return!1}return Ri(r,e,this.publicKey)}wipePrivateData(){return this.privKey=void 0,this.privKeyBytes&&(this.privKeyBytes.fill(0),this.privKeyBytes=void 0),this}toJSON(){return{xpriv:this.privateExtendedKey,xpub:this.publicExtendedKey}}serialize(e,n){if(!this.chainCode)throw new Error("No chainCode set");return pt(n,33),Ln(_r(e),new Uint8Array([this.depth]),_r(this.parentFingerprint),_r(this.index),this.chainCode,n)}}});var Br,cs,ec=D(()=>{bn();Br=class extends Ht{constructor(e,n){super(),this.finished=!1,this.destroyed=!1,Fi(e);let r=yn(n);if(this.iHash=e.create(),!(this.iHash instanceof Ht))throw new TypeError("Expected instance of class which extends utils.Hash");let o=this.blockLen=this.iHash.blockLen;this.outputLen=this.iHash.outputLen;let s=new Uint8Array(o);s.set(r.length>this.iHash.blockLen?e.create().update(r).digest():r);for(let i=0;i<s.length;i++)s[i]^=54;this.iHash.update(s),this.oHash=e.create();for(let i=0;i<s.length;i++)s[i]^=106;this.oHash.update(s),s.fill(0)}update(e){if(this.destroyed)throw new Error("instance is destroyed");return this.iHash.update(e),this}digestInto(e){if(this.destroyed)throw new Error("instance is destroyed");if(!(e instanceof Uint8Array)||e.length!==this.outputLen)throw new Error("HMAC: Invalid output buffer");if(this.finished)throw new Error("digest() was already called");this.finished=!0,this.iHash.digestInto(e),this.oHash.update(e),this.oHash.digestInto(e),this.destroy()}digest(){let e=new Uint8Array(this.oHash.outputLen);return this.digestInto(e),e}_cloneInto(e){e||(e=Object.create(Object.getPrototypeOf(this),{}));let{oHash:n,iHash:r,finished:o,destroyed:s,blockLen:i,outputLen:a}=this;return e=e,e.finished=o,e.destroyed=s,e.blockLen=i,e.outputLen=a,e.oHash=n._cloneInto(e.oHash),e.iHash=r._cloneInto(e.iHash),e}destroy(){this.destroyed=!0,this.oHash.destroy(),this.iHash.destroy()}},cs=(t,e,n)=>new Br(t,e).update(n).digest();cs.create=(t,e)=>new Br(t,e)});function Xd(t){return B.bytesToHex(Bt.getPublicKey(t))}function Hr(t){let e=new URL(t);return e.pathname=e.pathname.replace(/\/+/g,"/"),e.pathname.endsWith("/")&&(e.pathname=e.pathname.slice(0,-1)),(e.port==="80"&&e.protocol==="ws:"||e.port==="443"&&e.protocol==="wss:")&&(e.port=""),e.searchParams.sort(),e.hash="",e.toString()}function Qd(t,e){let n=0,r=t.length-1,o,s=n;if(r<0)s=0;else if(e.created_at<t[r].created_at)s=r+1;else if(e.created_at>=t[n].created_at)s=n;else for(;;){if(r<=n+1){s=r;break}if(o=Math.floor(n+(r-n)/2),t[o].created_at>e.created_at)n=o;else if(t[o].created_at<e.created_at)r=o;else{s=o;break}}return t[s]?.id!==e.id?[...t.slice(0,s),e,...t.slice(s)]:t}function ef(t,e){let n=0,r=t.length-1,o,s=n;if(r<0)s=0;else if(e.created_at>t[r].created_at)s=r+1;else if(e.created_at<=t[n].created_at)s=n;else for(;;){if(r<=n+1){s=r;break}if(o=Math.floor(n+(r-n)/2),t[o].created_at<e.created_at)n=o;else if(t[o].created_at>e.created_at)r=o;else{s=o;break}}return t[s]?.id!==e.id?[...t.slice(0,s),e,...t.slice(s)]:t}function tf(t){if(!us(t))throw new Error("can't serialize event with wrong or missing properties");return JSON.stringify([0,t.pubkey,t.created_at,t.kind,t.tags,t.content])}function nf(t){let e=at(Ke.encode(tf(t)));return B.bytesToHex(e)}function us(t){if(typeof t!="object"||typeof t.kind!="number"||typeof t.content!="string"||typeof t.created_at!="number"||typeof t.pubkey!="string"||!t.pubkey.match(/^[a-f0-9]{64}$/)||!Array.isArray(t.tags))return!1;for(let e=0;e<t.tags.length;e++){let n=t.tags[e];if(!Array.isArray(n))return!1;for(let r=0;r<n.length;r++)if(typeof n[r]=="object")return!1}return!0}function tc(t){return Bt.verifySync(t.sig,nf(t),t.pubkey)}function rf(t,e){if(t.ids&&t.ids.indexOf(e.id)===-1||t.kinds&&t.kinds.indexOf(e.kind)===-1||t.authors&&t.authors.indexOf(e.pubkey)===-1)return!1;for(let n in t)if(n[0]==="#"){let r=n.slice(1),o=t[`#${r}`];if(o&&!e.tags.find(([s,i])=>s===n.slice(1)&&o.indexOf(i)!==-1))return!1}return!(t.since&&e.created_at<t.since||t.until&&e.created_at>=t.until)}function of(t,e){for(let n=0;n<t.length;n++)if(rf(t[n],e))return!0;return!1}function Ir(t,e){let n=e.length+3,r=t.indexOf(`"${e}":`)+n,o=t.slice(r).indexOf('"')+r+1;return t.slice(o,o+64)}function nc(t,e){let n=e.length,r=t.indexOf(`"${e}":`)+n+3,o=t.slice(r),s=Math.min(o.indexOf(","),o.indexOf("}"));return parseInt(o.slice(0,s),10)}function rc(t){let e=t.slice(0,22).indexOf('"EVENT"');if(e===-1)return null;let n=t.slice(e+7+1).indexOf('"');if(n===-1)return null;let r=e+7+1+n,o=t.slice(r+1,80).indexOf('"');if(o===-1)return null;let s=r+1+o;return t.slice(r+1,s)}function af(t,e){return e===Ir(t,"id")}function cf(t,e){return e===Ir(t,"pubkey")}function lf(t,e){return e===nc(t,"kind")}function uf(t,e={}){let{listTimeout:n=3e3,getTimeout:r=3e3}=e;var o,s={},i={connect:[],disconnect:[],error:[],notice:[]},a={},c={};async function d(){return new Promise((m,y)=>{o=new WebSocket(t),o.onopen=()=>{i.connect.forEach(b=>b()),m()},o.onerror=()=>{i.error.forEach(b=>b()),y()},o.onclose=async()=>{i.disconnect.forEach(b=>b())};let g=[],k;o.onmessage=b=>{g.push(b.data),k||(k=setInterval(L,0))};function L(){if(g.length===0){clearInterval(k),k=null;return}var b=g.shift();if(!b)return;let H=rc(b);if(H){let E=s[H];if(E&&E.alreadyHaveEvent&&E.alreadyHaveEvent(Ir(b,"id"),t))return}try{let E=JSON.parse(b);switch(E[0]){case"EVENT":let V=E[1],S=E[2];us(S)&&s[V]&&(s[V].skipVerification||tc(S))&&of(s[V].filters,S)&&(s[V],(a[V]?.event||[]).forEach(M=>M(S)));return;case"EOSE":{let M=E[1];M in a&&(a[M].eose.forEach(se=>se()),a[M].eose=[]);return}case"OK":{let M=E[1],se=E[2],fe=E[3]||"";M in c&&(se?c[M].ok.forEach(oe=>oe()):c[M].failed.forEach(oe=>oe(fe)),c[M].ok=[],c[M].failed=[]);return}case"NOTICE":let j=E[1];i.notice.forEach(M=>M(j));return}}catch{return}}})}function l(){return o?.readyState===1}async function u(){l()||await d()}async function h(m){let y=JSON.stringify(m);if(!(!l()&&(await new Promise(g=>setTimeout(g,1e3)),!l())))try{o.send(y)}catch(g){console.log(g)}}let p=(m,{skipVerification:y=!1,alreadyHaveEvent:g=null,id:k=Math.random().toString().slice(2)}={})=>{let L=k;return s[L]={id:L,filters:m,skipVerification:y,alreadyHaveEvent:g},h(["REQ",L,...m]),{sub:(b,H={})=>p(b||m,{skipVerification:H.skipVerification||y,alreadyHaveEvent:H.alreadyHaveEvent||g,id:L}),unsub:()=>{delete s[L],delete a[L],h(["CLOSE",L])},on:(b,H)=>{a[L]=a[L]||{event:[],eose:[]},a[L][b].push(H)},off:(b,H)=>{let E=a[L],V=E[b].indexOf(H);V>=0&&E[b].splice(V,1)}}};return{url:t,sub:p,on:(m,y)=>{i[m].push(y),m==="connect"&&o?.readyState===1&&y()},off:(m,y)=>{let g=i[m].indexOf(y);g!==-1&&i[m].splice(g,1)},list:(m,y)=>new Promise(g=>{let k=p(m,y),L=[],b=setTimeout(()=>{k.unsub(),g(L)},n);k.on("eose",()=>{k.unsub(),clearTimeout(b),g(L)}),k.on("event",H=>{L.push(H)})}),get:(m,y)=>new Promise(g=>{let k=p([m],y),L=setTimeout(()=>{k.unsub(),g(null)},r);k.on("event",b=>{k.unsub(),clearTimeout(L),g(b)})}),publish(m){if(!m.id)throw new Error(`event ${m} has no id`);let y=m.id;return h(["EVENT",m]),{on:(g,k)=>{c[y]=c[y]||{ok:[],failed:[]},c[y][g].push(k)},off:(g,k)=>{let L=c[y];if(!L)return;let b=L[g].indexOf(k);b>=0&&L[g].splice(b,1)}}},connect:u,close(){i={connect:[],disconnect:[],error:[],notice:[]},a={},c={},o?.close()},get status(){return o?.readyState??3}}}function df(t){return{on(e,n){e==="failed"&&n(`relay ${t} not connected`)},off(){}}}async function hf(t,e,n){let r=Lo(t,"02"+e),o=sc(r),s=Uint8Array.from(zi(16)),i=Ke.encode(n),a=await crypto.subtle.importKey("raw",o,{name:"AES-CBC"},!1,["encrypt"]),c=await crypto.subtle.encrypt({name:"AES-CBC",iv:s},a,i),d=Jt.encode(new Uint8Array(c)),l=Jt.encode(new Uint8Array(s.buffer));return`${d}?iv=${l}`}async function pf(t,e,n){let[r,o]=n.split("?iv="),s=Lo(t,"02"+e),i=sc(s),a=await crypto.subtle.importKey("raw",i,{name:"AES-CBC"},!1,["decrypt"]),c=Jt.decode(r),d=Jt.decode(o),l=await crypto.subtle.decrypt({name:"AES-CBC",iv:d},a,c);return Dt.decode(l)}function sc(t){return t.slice(1,33)}function mf(t){Cr=t}async function yf(t,e=""){try{return(await(await Cr(`https://${t}/.well-known/nostr.json?name=${e}`)).json()).names}catch{return{}}}async function bf(t){let[e,n]=t.split("@");if(n||(n=e,e="_"),!e.match(/^[A-Za-z0-9-_]+$/))return null;let r;try{r=await(await Cr(`https://${n}/.well-known/nostr.json?name=${e}`)).json()}catch{return null}if(!r?.names?.[e])return null;let o=r.names[e],s=r.relays?.[o]||[];return{pubkey:o,relays:s}}function wf(t,e){let r=De.fromMasterSeed((0,on.mnemonicToSeedSync)(t,e)).derive("m/44'/1237'/0'/0/0").privateKey;if(!r)throw new Error("could not derive private key");return B.bytesToHex(r)}function xf(){return(0,on.generateMnemonic)(ds.wordlist)}function vf(t){return(0,on.validateMnemonic)(t,ds.wordlist)}function Ef(t){let{prefix:e,words:n}=ue.decode(t,Hn),r=new Uint8Array(ue.fromWords(n));switch(e){case"nprofile":{let o=ls(r);if(!o[0]?.[0])throw new Error("missing TLV 0 for nprofile");if(o[0][0].length!==32)throw new Error("TLV 0 should be 32 bytes");return{type:"nprofile",data:{pubkey:B.bytesToHex(o[0][0]),relays:o[1]?o[1].map(s=>Dt.decode(s)):[]}}}case"nevent":{let o=ls(r);if(!o[0]?.[0])throw new Error("missing TLV 0 for nevent");if(o[0][0].length!==32)throw new Error("TLV 0 should be 32 bytes");return{type:"nevent",data:{id:B.bytesToHex(o[0][0]),relays:o[1]?o[1].map(s=>Dt.decode(s)):[]}}}case"naddr":{let o=ls(r);if(!o[0]?.[0])throw new Error("missing TLV 0 for naddr");if(!o[2]?.[0])throw new Error("missing TLV 2 for naddr");if(o[2][0].length!==32)throw new Error("TLV 2 should be 32 bytes");if(!o[3]?.[0])throw new Error("missing TLV 3 for naddr");if(o[3][0].length!==4)throw new Error("TLV 3 should be 4 bytes");return{type:"naddr",data:{identifier:Dt.decode(o[0][0]),pubkey:B.bytesToHex(o[2][0]),kind:parseInt(B.bytesToHex(o[3][0]),16),relays:o[1]?o[1].map(s=>Dt.decode(s)):[]}}}case"nsec":case"npub":case"note":return{type:e,data:B.bytesToHex(r)};default:throw new Error(`unknown prefix ${e}`)}}function ls(t){let e={},n=t;for(;n.length>0;){let r=n[0],o=n[1],s=n.slice(2,2+o);n=n.slice(2+o),!(s.length<o)&&(e[r]=e[r]||[],e[r].push(s))}return e}function kf(t){return fs("nsec",t)}function Af(t){return fs("npub",t)}function Tf(t){return fs("note",t)}function fs(t,e){let n=B.hexToBytes(e),r=ue.toWords(n);return ue.encode(t,r,Hn)}function Sf(t){let e=hs({0:[B.hexToBytes(t.pubkey)],1:(t.relays||[]).map(r=>Ke.encode(r))}),n=ue.toWords(e);return ue.encode("nprofile",n,Hn)}function Lf(t){let e=hs({0:[B.hexToBytes(t.id)],1:(t.relays||[]).map(r=>Ke.encode(r))}),n=ue.toWords(e);return ue.encode("nevent",n,Hn)}function _f(t){let e=new ArrayBuffer(4);new DataView(e).setUint32(0,t.kind,!1);let n=hs({0:[Ke.encode(t.identifier)],1:(t.relays||[]).map(o=>Ke.encode(o)),2:[B.hexToBytes(t.pubkey)],3:[new Uint8Array(e)]}),r=ue.toWords(n);return ue.encode("naddr",r,Hn)}function hs(t){let e=[];return Object.entries(t).forEach(([n,r])=>{r.forEach(o=>{let s=new Uint8Array(o.length+2);s.set([parseInt(n)],0),s.set([o.length],1),s.set(o,2),e.push(s)})}),B.concatBytes(...e)}function Hf(t,e){let n=[];(e.kind||-1)>=0&&n.push(`kind=${e.kind}`),e.until&&n.push(`created_at<${e.until}`),e.since&&n.push(`created_at>${e.since}`);let r=n.join("&");if(r==="")throw new Error("refusing to create a delegation without any conditions");let o=at(Ke.encode(`nostr:delegation:${e.pubkey}:${r}`)),s=B.bytesToHex(Bt.signSync(o,t));return{from:Xd(t),to:e.pubkey,cond:r,sig:s}}function If(t){let e=t.tags.find(a=>a[0]==="delegation"&&a.length>=4);if(!e)return null;let n=e[1],r=e[2],o=e[3],s=r.split("&");for(let a=0;a<s.length;a++){let[c,d,l]=s[a].split(/\b/);if(!(c==="kind"&&d==="="&&t.kind===parseInt(l))){if(c==="created_at"&&d==="<"&&t.created_at<parseInt(l))continue;if(c==="created_at"&&d===">"&&t.created_at>parseInt(l))continue;return null}}let i=at(Ke.encode(`nostr:delegation:${t.pubkey}:${r}`));return Bt.verifySync(o,i,n)?n:null}function Mf(t){ps=t}async function Rf(t){try{let e="",{lud06:n,lud16:r}=JSON.parse(t.content);if(n){let{words:i}=ue.decode(n,1e3),a=ue.fromWords(i);e=Dt.decode(a)}else if(r){let[i,a]=r.split("@");e=`https://${a}/.well-known/lnurlp/${i}`}else return null;let s=await(await ps(e)).json();if(s.allowsNostr&&s.nostrPubkey)return s.callback}catch{}return null}function Df({profile:t,event:e,amount:n,relays:r,comment:o=""}){if(!n)throw new Error("amount not given");if(!t)throw new Error("profile not given");let s={kind:9734,created_at:Math.round(Date.now()/1e3),content:o,tags:[["p",t],["amount",n.toString()],["relays",...r]]};return e&&s.tags.push(["e",e]),s}function $f(t){let e;try{e=JSON.parse(t)}catch{return"Invalid zap request JSON."}if(!us(e))return"Zap request is not a valid Nostr event.";if(!tc(e))return"Invalid signature on zap request.";let n=e.tags.find(([s,i])=>s==="p"&&i);if(!n)return"Zap request doesn't have a 'p' tag.";if(!n[1].match(/^[a-f0-9]{64}$/))return"Zap request 'p' tag is not valid hex.";let r=e.tags.find(([s,i])=>s==="e"&&i);return r&&!r[1].match(/^[a-f0-9]{64}$/)?"Zap request 'e' tag is not valid hex.":e.tags.find(([s,i])=>s==="relays"&&i)?null:"Zap request doesn't have a 'relays' tag."}function Uf({zapRequest:t,preimage:e,bolt11:n,paidAt:r}){let s=JSON.parse(t).tags.filter(([a])=>a==="e"||a==="p"||a==="a"),i={kind:9735,created_at:Math.round(r.getTime()/1e3),content:"",tags:[...s,["bolt11",n],["description",t]]};return e&&i.tags.push(["preimage",e]),i}var ds,on,Yd,vt,Jd,Dt,Ke,sf,oc,ff,Bn,Cr,gf,ic,Hn,Bf,Cf,ps,Mr=D(()=>{je();je();rr();bn();je();wn();je();ds=Xe(ea(),1),on=Xe(Oa(),1);Qa();je();wn();je();rr();wn();je();ec();rr();Yd=Object.defineProperty,vt=(t,e)=>{for(var n in e)Yd(t,n,{get:e[n],enumerable:!0})};Jd={};vt(Jd,{insertEventIntoAscendingList:()=>ef,insertEventIntoDescendingList:()=>Qd,normalizeURL:()=>Hr,utf8Decoder:()=>Dt,utf8Encoder:()=>Ke});Dt=new TextDecoder("utf-8"),Ke=new TextEncoder;sf={};vt(sf,{getHex64:()=>Ir,getInt:()=>nc,getSubscriptionId:()=>rc,matchEventId:()=>af,matchEventKind:()=>lf,matchEventPubkey:()=>cf});oc=class{_conn;_seenOn={};eoseSubTimeout;getTimeout;constructor(t={}){this._conn={},this.eoseSubTimeout=t.eoseSubTimeout||3400,this.getTimeout=t.getTimeout||3400}close(t){t.forEach(e=>{let n=this._conn[Hr(e)];n&&n.close()})}async ensureRelay(t){let e=Hr(t),n=this._conn[e];if(n)return n;let r=uf(e,{getTimeout:this.getTimeout*.9,listTimeout:this.getTimeout*.9});return this._conn[e]=r,await r.connect(),r}sub(t,e,n){let r=new Set,o=n||{};o.alreadyHaveEvent=(h,p)=>{let m=this._seenOn[h]||new Set;return m.add(p),this._seenOn[h]=m,r.has(h)};let s=[],i=new Set,a=new Set,c=t.length,d=!1,l=setTimeout(()=>{d=!0;for(let h of a.values())h()},this.eoseSubTimeout);t.forEach(async h=>{let p;try{p=await this.ensureRelay(h)}catch{y();return}if(!p)return;let m=p.sub(e,o);m.on("event",g=>{r.add(g.id);for(let k of i.values())k(g)}),m.on("eose",()=>{d||y()}),s.push(m);function y(){if(c--,c===0){clearTimeout(l);for(let g of a.values())g()}}});let u={sub(h,p){return s.forEach(m=>m.sub(h,p)),u},unsub(){s.forEach(h=>h.unsub())},on(h,p){switch(h){case"event":i.add(p);break;case"eose":a.add(p);break}},off(h,p){h==="event"?i.delete(p):h==="eose"&&a.delete(p)}};return u}get(t,e,n){return new Promise(r=>{let o=this.sub(t,[e],n),s=setTimeout(()=>{o.unsub(),r(null)},this.getTimeout);o.on("event",i=>{r(i),clearTimeout(s),o.unsub()})})}list(t,e,n){return new Promise(r=>{let o=[],s=this.sub(t,e,n);s.on("event",i=>{o.push(i)}),s.on("eose",()=>{s.unsub(),r(o)})})}publish(t,e){let n=t.map(r=>{let o=this._conn[Hr(r)];return o?o.publish(e):df(r)});return{on(r,o){n.forEach((s,i)=>{s.on(r,()=>o(t[i]))})},off(){}}}seenOn(t){return Array.from(this._seenOn[t]?.values?.()||[])}};ff={};vt(ff,{decrypt:()=>pf,encrypt:()=>hf});Bn={};vt(Bn,{queryProfile:()=>bf,searchDomain:()=>yf,useFetchImplementation:()=>mf});try{Cr=fetch}catch{}gf={};vt(gf,{generateSeedWords:()=>xf,privateKeyFromSeedWords:()=>wf,validateWords:()=>vf});ic={};vt(ic,{decode:()=>Ef,naddrEncode:()=>_f,neventEncode:()=>Lf,noteEncode:()=>Tf,nprofileEncode:()=>Sf,npubEncode:()=>Af,nsecEncode:()=>kf});Hn=5e3;Bf={};vt(Bf,{createDelegation:()=>Hf,getDelegator:()=>If});Cf={};vt(Cf,{getZapEndpoint:()=>Rf,makeZapReceipt:()=>Uf,makeZapRequest:()=>Df,useFetchImplementation:()=>Mf,validateZapRequest:()=>$f});try{ps=fetch}catch{}B.hmacSha256Sync=(t,...e)=>cs(at,t,B.concatBytes(...e));B.sha256Sync=(...t)=>at(B.concatBytes(...t))});var ms,Of,sn,Rr,ys,Dr=D(()=>{"use strict";Mr();ms=new oc,Of=new Set,sn=(t,e,n,r)=>O(void 0,null,function*(){let o=[...new Set(n)],s=ms.sub(o,[{kinds:r,authors:t}]);return new Promise(i=>{s.on("event",a=>{t.indexOf(a.pubkey)!==-1&&r.indexOf(a.kind)!==-1&&e(a)}),s.on("eose",()=>{s.unsub(),i()})})}),Rr=(t,e)=>O(void 0,null,function*(){let n=[...new Set(e)];try{let r=ms.publish(n,t);return yield new Promise(o=>{let s=setTimeout(()=>o(!1),1e4);r.on("ok",()=>{clearTimeout(s),o(!0)}),r.on("failed",()=>{clearTimeout(s),o(!1)})})}catch(r){return console.error("Error publishing event:",r),!1}}),ys=()=>{ms.close(),Of.clear()}});var $t,Ve,le,Nf,ac,Pf,Ff,jf,Ur,cc,bs,re,Y,$r,Or,zf,lc,gs,Wf,Gf,uc,In,qf,$e,Ze=D(()=>{"use strict";$t=Xe(Wt());Fe();Dr();Ve={},le={},Nf=()=>{let t=q("my-profile-last-fetch-date");return t===null?null:Number(t)},ac=!1,Pf=()=>{ac=!0,Gt("my-profile-last-fetch-date",Date.now().toString())},Ff=()=>{let t=q("my-profile-last-update-date");return t===null?null:Number(t)},jf=()=>{Gt("my-profile-last-update-date",Date.now().toString())},Ur=()=>ac,cc=()=>{if(!Ur())return!1;let t=Nf(),e=Ff();return!(e===null||t===null||e>t-1e4)},bs=t=>{if(q("pubkey")===null)throw new Error("storeMyProfileEvent no pubkey in localStorage");if(!(t.kind===0||t.kind===2||t.kind===10002||t.kind===3)||t.pubkey!==q("pubkey"))return!1;let e=`my-profile-event-${t.kind}`;if(!Ve[e]){let n=q(e);Ve[e]=n===null?[]:JSON.parse(n)}return Ve[e].some(n=>n.id===t.id)?!1:(Ve[e].push(t),Gt(e,JSON.stringify(Ve[e])),jf(),!0)},re=t=>{let e=`my-profile-event-${t}`;if(!Ve[e]){let n=q(e);if(n===null)return null;Ve[e]=JSON.parse(n)}return Ve[e].length===0?null:Ve[e].sort((n,r)=>r.created_at-n.created_at)},Y=t=>{let e=re(t);return e===null?null:e[0]},$r=()=>{let t=Y(10002),e=t?t.tags.filter(n=>n[0]==="r").map(n=>n[1]):[];return e.length>3?e:[...new Set([...e,"wss://hist.nostr.land","wss://relay.damus.io","wss://nostr-pub.wellorder.net","wss://purplepag.es","wss://relay.nos.social","wss://relay.nostr.band","wss://relay.snort.social"])].slice(0,3)},Or=(t,e)=>O(void 0,null,function*(){if(Ur())[0,2,10002,3].forEach(n=>{let r=Y(n);r!==null&&e(r)});else{let n=$r(),r=!1;if(yield sn([t],o=>{if(o.kind===10002){let s=new Set(n);o.tags.filter(a=>a[0]==="r"&&(!a[2]||a[2]==="write")).map(a=>a[1]).filter(a=>!s.has(a)).length>0&&(r=!0)}bs(o),e(o)},n,[0,2,10002,3]),r){let o=$r();JSON.stringify(o)!==JSON.stringify(n)&&(yield sn([t],s=>{bs(s),e(s)},o,[0,2,10002,3]))}Pf()}}),zf=t=>{le[t.pubkey]||(le[t.pubkey]={}),(!le[t.pubkey][t.kind]||le[t.pubkey][t.kind].created_at<t.created_at)&&(le[t.pubkey][t.kind]=t)},lc=()=>O(void 0,null,function*(){let t=Y(3);if(!t||t.tags.length===0)return;let e=t.tags.filter(n=>n[0]==="p").map(n=>n[1]).filter(n=>!le[n]);e.length>0&&(yield sn(e,zf,$r(),[0,10002,3]))}),gs=(t,e)=>q("pubkey")===t?Y(e):!le[t]||!le[t][e]?null:le[t][e],Wf=t=>{let e=Object.keys(le).map(n=>{if(!le[n][3])return null;let r=le[n][3].tags.find(o=>o[1]===t&&o[3]);return r?(0,$t.sanitize)(r[3]):null}).reduce((n,r)=>r?n[r]?wo(go({},n),{[r]:n[r]+1}):wo(go({},n),{[r]:1}):n,{});return Object.keys(e).length===0?null:(0,$t.sanitize)(Object.keys(e).sort((n,r)=>e[r]-e[n])[0])},Gf=t=>{let e=Y(3);if(e){let n=e.tags.find(r=>r[1]===t&&r[3]);if(n)return(0,$t.sanitize)(n[3])}return null},uc=t=>{let e=Y(3);return e?!!e.tags.some(n=>n[1]===t):null},In=t=>{if(q("pubkey")===t){let n=Y(0);if(n){let{name:r}=JSON.parse(n.content);if(r)return(0,$t.sanitize)(r)}}else{let n=Gf(t);if(n)return n;if(le[t]&&le[t][0]){let{name:r,display_name:o}=JSON.parse(le[t][0].content);if(r)return(0,$t.sanitize)(r);if(o)return(0,$t.sanitize)(o)}}let e=Wf(t);return e?`${e} (?)`:`${t.substring(0,10)}...`},qf=t=>O(void 0,null,function*(){bs(t);let e=[...$r(),"wss://nostr.mutinywallet.com","wss://purplepag.es","wss://relay.nos.social","wss://relay.nostr.band","wss://relay.snort.social"],n=[...new Set(e)];return Rr(t,n)}),$e=(t,e,n="Update")=>O(void 0,null,function*(){let r=document.getElementById(e);if(!r)return!1;if(r.setAttribute("disabled",""),r.setAttribute("aria-busy","true"),r.innerHTML="Signing...",!window.nostr)return new Promise(o=>{o(!1)});try{let o=yield window.nostr.signEvent(t);r.innerHTML="Sending...";let s=yield qf(o);return r.removeAttribute("aria-busy"),r.innerHTML="Received by Relays!",setTimeout(()=>{r.innerHTML=n,r.removeAttribute("disabled")},1e3),s}catch(o){return console.error("Error signing or publishing event:",o),r.removeAttribute("aria-busy"),r.removeAttribute("disabled"),r.innerHTML="Error! Try again",!1}})});function dc(t,e){if(e===0)return["just now","right now"];var n=Kf[Math.floor(e/2)];return t>1&&(n+="s"),[t+" "+n+" ago","in "+t+" "+n]}var Kf,fc=D(()=>{Kf=["second","minute","hour","day","week","month","year"]});function hc(t,e){if(e===0)return["\u521A\u521A","\u7247\u523B\u540E"];var n=Vf[~~(e/2)];return[t+" "+n+"\u524D",t+" "+n+"\u540E"]}var Vf,pc=D(()=>{Vf=["\u79D2","\u5206\u949F","\u5C0F\u65F6","\u5929","\u5468","\u4E2A\u6708","\u5E74"]});var ws,xs,vs,Nr=D(()=>{ws={},xs=function(t,e){ws[t]=e},vs=function(t){return ws[t]||ws.en_US}});function mc(t){return t instanceof Date?t:!isNaN(t)||/^\d+$/.test(t)?new Date(parseInt(t)):(t=(t||"").trim().replace(/\.\d+/,"").replace(/-/,"/").replace(/-/,"/").replace(/(\d)T(\d)/,"$1 $2").replace(/Z/," UTC").replace(/([+-]\d\d):?(\d\d)/," $1$2"),new Date(t))}function ks(t,e){var n=t<0?1:0;t=Math.abs(t);for(var r=t,o=0;t>=Es[o]&&o<Es.length;o++)t/=Es[o];return t=Math.floor(t),o*=2,t>(o===0?9:1)&&(o+=1),e(t,o,r)[n].replace("%s",t.toString())}function As(t,e){var n=e?mc(e):new Date;return(+n-+mc(t))/1e3}var Es,Ts=D(()=>{Es=[60,60,24,7,4.345238095238096,12]});var Cn,yc=D(()=>{Ts();Nr();Cn=function(t,e,n){var r=As(t,n&&n.relativeDate);return ks(r,vs(e))}});var bc=D(()=>{});var gc=D(()=>{bc();Ts();Nr()});var Ss=D(()=>{fc();pc();Nr();yc();gc();xs("en_US",dc);xs("zh_CN",hc)});var Ls,Ye,Zf,Yf,xc,Et,Xf,Jf,Qf,eh,th,nh,Ue,Pr=D(()=>{"use strict";Ss();Ls=Xe(Wt());Ze();Ye=new Map,Zf=t=>`
    <table role="grid" class="historytable">
        <tbody>${t.map(e=>`
            <tr>
                <td><small>${Cn(e.ago*1e3)}</small></td>
                <td><ul>${e.changes.map(n=>`<li>${n}</li>`).join("")}</ul></td>
                <td>${e.option}</td>
            </tr>
        `).join("")}
        </tbody>
    </table>
`,Yf=t=>{let e=`metadata-${t.map(r=>`${r.id.substring(0,8)}-${r.created_at}`).join("|")}`;if(Ye.has(e))return Ye.get(e);let n=t.map((r,o,s)=>{let i=[],a=JSON.parse(r.content),c=d=>(0,Ls.sanitize)(typeof d=="string"?d.replace(/(\r\n|\n|\r)/gm," "):d.toString());if(o===s.length-1)Object.keys(a).forEach(d=>i.push(`${d}: ${c(a[d])}`));else{let d=JSON.parse(s[o+1].content);Object.keys(a).filter(l=>!Object.keys(d).some(u=>u===l)).forEach(l=>{i.push(`added ${l}: ${c(a[l])}`)}),Object.keys(a).filter(l=>Object.keys(d).some(u=>u===l&&d[l]!==a[l])).forEach(l=>{i.push(`modified ${l}: ${c(a[l])}`)}),Object.keys(d).filter(l=>!Object.keys(a).some(u=>u===l)).forEach(l=>{i.push(`removed ${c(d[l]).length===0?`blank ${l}`:`${l}: ${c(d[l])}`}`)})}return{ago:r.created_at,changes:i,option:o===0?"<ins>Backup Complete<ins>":`<a href="#" id="restore-${r.kind}-${o}" class="secondary" onclick="event.preventDefault();">Restore</a>`}});return Ye.set(e,n),n},xc=(t,e)=>!!(t[1]===e[1]||t[3]&&e[3]&&t[3]===e[3]),Et=t=>t[3]&&t[3].length>0?`<mark>${(0,Ls.sanitize)(t[3])}</mark>`:`<mark title="${t[1]}">${In(t[1])}</mark>`,Xf=t=>{let e=`contacts-${t.map(r=>`${r.id.substring(0,8)}-${r.created_at}`).join("|")}`;if(Ye.has(e))return Ye.get(e);let n=t.map((r,o,s)=>{let i=[],a=r.tags.filter(c=>c[0]==="p");if(o===s.length-1)i.push(a.map(Et).join(", "));else{let c=s[o+1].tags.filter(h=>h[0]==="p"),d=a.filter(h=>!c.some(p=>xc(h,p)));d.length>0&&i.push(`<div class="added">added ${d.map(Et).join(", ")}</div>`),a.filter(h=>c.filter(p=>p[1]===h[1]).some(p=>h[3]!==p[3])).forEach(h=>{let p=c.find(m=>m[1]===h[1]);return!p||!h[3]&&!p[3]?null:h[3]&&!p[3]?i.push(`added petname for ${Et(h)}`):!h[3]&&p[3]?i.push(`removed petname for ${Et(h)}, previously ${Et(p)}`):i.push(`modified petname for ${Et(h)}, previously ${Et(p)}`)});let u=c.filter(h=>!a.some(p=>xc(h,p)));u.length>0&&i.push(`<div class="removed">removed ${u.map(Et).join(", ")}</div>`)}return{ago:r.created_at,changes:i,option:o===0?"<ins>Backup Complete<ins>":`<a href="#" id="restore-${r.kind}-${o}" class="secondary" onclick="event.preventDefault()">Restore</a>`}});return Ye.set(e,n),n},Jf=t=>t[1]+(t[2]?` ${t[2]} only`:""),Qf=t=>{let e=`relays-${t.map(r=>`${r.id.substring(0,8)}-${r.created_at}`).join("|")}`;if(Ye.has(e))return Ye.get(e);let n=t.map((r,o,s)=>{let i=[],a=r.tags.filter(c=>c[0]==="r");if(o===s.length-1)a.forEach(c=>i.push(Jf(c)));else{let c=s[o+1].tags,d=(p,m)=>{let y=`<mark class="${m}">write</mark>`,g=`<mark class="${m}">read</mark>`,k=`${g} and ${y}`;return p[2]?p[2]==="write"?`${y} only`:`${g} only`:k},l=a.filter(p=>!c.some(m=>m[1]===p[1]));l.length>0&&l.forEach(p=>i.push(`<div>added <mark>${p[1]}</mark> as ${d(p,"added")}</div>`)),a.filter(p=>c.filter(m=>m[1]===p[1]).some(m=>p[2]!==m[2])).forEach(p=>{let m=c.find(g=>g[1]===p[1]),y;p[2]?p[2]==="read"?m?y='<mark class="added">read</mark> instead of <mark class="removed">write</mark>':y='only read and no longer <mark class="removed">write</mark>':m?y='<mark class="added">write</mark> instead of <mark class="removed">read</mark>':y='only write and no longer <mark class="removed">read</mark>':m&&m[2]==="read"?y='<mark class="added">write</mark> as well as read':y='<mark class="added">read</mark> as well as write',i.push(`<div class="modified">modified <mark>${p[1]}</mark> to ${y}</div>`)});let h=c.filter(p=>!a.some(m=>m[1]===p[1]));h.length>0&&h.forEach(p=>i.push(`<div>removed <mark>${p[1]}</mark> which was ${d(p,"removed")}</div>`))}return{ago:r.created_at,changes:i,option:o===0?"<ins>Backup Complete<ins>":`<a href="#" id="restore-${r.kind}-${o}" class="secondary" onclick="event.preventDefault()">Restore</a>`}});return Ye.set(e,n),n},eh=t=>{if(!t||t.length===0)return"<p>none</p>";let e;return t[0].kind===0?e=Yf(t):t[0].kind===3?e=Xf(t):t[0].kind===10002?e=Qf(t):e=[],Zf(e)},th=(t,e)=>{t.querySelectorAll("mark[title]").forEach(r=>{let o=r.getAttribute("title");if(o&&o.length===64){let s=o;r.classList.add("clickable-contact"),r.addEventListener("click",i=>{i.preventDefault(),i.stopPropagation(),e(s)})}})},nh=(t,e)=>{t&&t.forEach((n,r)=>{if(r===0)return;let o=`restore-${n.kind}-${r}`,s=document.getElementById(o);if(!s)return;let d=n,{id:i,sig:a}=d,c=bi(d,["id","sig"]);c.created_at=Math.floor(Date.now()/1e3),s.onclick=l=>O(void 0,null,function*(){if(l.preventDefault(),s.setAttribute("aria-busy","true"),s.innerHTML="Restoring...",yield $e(c,o,"Restored!")){let h=s.closest("tr");if(h){let p=document.createElement("div");p.className="restore-success",p.innerHTML="<small>\u2713 Restored</small>",p.style.color="green",h.appendChild(p)}setTimeout(e,1e3)}})})},Ue=(t,e,n)=>{let r=document.getElementById(t);r&&(r.innerHTML='<h4>Backup History</h4><p aria-busy="true">Loading history...</p>',setTimeout(()=>{let o=re(e),s=eh(o);if(r.innerHTML=`<h4>Backup History</h4>${s}`,e===3&&n&&th(r,n),!document.getElementById("contact-history-styles")){let i=document.createElement("style");i.id="contact-history-styles",i.textContent=`
        .clickable-contact {
          cursor: pointer;
          text-decoration: none;
        }
        .clickable-contact:hover {
          text-decoration: underline;
        }
        .restore-success {
          margin-top: 5px;
        }
      `,document.head.appendChild(i)}nh(o,()=>{Ue(t,e,n)})},0))}});var jr,Fr,Mn,me,rh,_s,oh,sh,zr,Bs=D(()=>{"use strict";Mr();jr=Xe(Wt());Ze();Pr();Fe();Fr={},Mn={},me=t=>{if(!Mn[t]){let e=document.getElementById(t);if(e)Mn[t]=e;else return null}return Mn[t]},rh=t=>{let e=gs(t,0);if(!e)return`
      <article>
        <strong>${In(t)}</strong>
        <p>loading user metadata...</p>
      </article>
    `;let n=JSON.parse(e.content),r=uc(t);return`
    <article>
      <div>
        ${n&&n.picture?`<img src="${(0,jr.sanitize)(n.picture)}" /> `:""}
        <div class="contactdetailsmain">
          <strong>${In(t)}</strong>
          ${n.nip05?`<small id="nip05-${t}">${(0,jr.sanitize)(n.nip05)} </small>`:""}<span id="nip05-${t}-verified"></span>
          <div><small>${n.about?(0,jr.sanitize)(n.about):""}</small></div>
        </div>
      </div>
      <footer>
        <div class="grid">
          <div class="contact-actions">
            <button id="back-to-history-${t}" class="secondary outline">Back to History</button>
            ${r?"":`<button id="restore-contact-${t}" class="secondary">Restore Contact</button>`}
          </div>
        </div>
      </footer>
    </article>
  `},_s=t=>{let e=me("contactdetails");if(!e)return;e.innerHTML=rh(t),window.scrollTo(0,0),gs(t,0)||setTimeout(()=>_s(t),500),(()=>O(void 0,null,function*(){let s=me(`nip05-${t}`);if(!s)return;let i=s.innerHTML.trim();if(Fr[i]!==void 0){let d=Fr[i]===t,l=me(`nip05-${t}-verified`);l&&(l.innerHTML=d?"<ins>&#10004; verified</ins>":"<del>&#10004; verified</del>");return}let a=!1;try{let d=yield Bn.queryProfile(i);a=!!d&&d.pubkey===t,Fr[i]=a?t:null}catch(d){Fr[i]=null}let c=me(`nip05-${t}-verified`);c&&(c.innerHTML=a?"<ins>&#10004; verified</ins>":"<del>&#10004; verified</del>")}))();let r=me(`back-to-history-${t}`);r&&(r.onclick=()=>{let s=me("contactsbackuphistory");s&&(s.style.display="block"),e&&(e.innerHTML="")});let o=me(`restore-contact-${t}`);o&&(o.onclick=()=>O(void 0,null,function*(){let s=Y(3);if(!s)return;let i=[...s.tags];if(!i.find(c=>c[1]===t)&&(i.push(["p",t,"",""]),yield $e({pubkey:q("pubkey"),kind:3,created_at:Math.floor(Date.now()/1e3),content:"",tags:i},`restore-contact-${t}`,"Contact Restored"),Ue("contactsbackuphistory",3),e)){e.innerHTML=`
            <div class="success-message">
              <h4>Contact Restored Successfully</h4>
              <p>The contact has been added back to your contact list.</p>
              <button id="back-to-history" class="secondary outline">Back to History</button>
            </div>
          `;let c=me("back-to-history");c&&(c.onclick=()=>{let d=me("contactsbackuphistory");d&&(d.style.display="block"),e&&(e.innerHTML="")})}}))},oh=()=>{let t=me("contactsbackuphistory");if(!t)return;t.querySelectorAll("mark[title]").forEach(n=>{let r=n.getAttribute("title");if(r&&r.length===64){let o=r;n.style.cursor="pointer",n.addEventListener("click",()=>{t.style.display="none",_s(o)}),n.addEventListener("mouseover",()=>{n.style.textDecoration="underline"}),n.addEventListener("mouseout",()=>{n.style.textDecoration="none"})}})},sh=()=>{let t=me("PM-container");t&&(Object.keys(Mn).forEach(e=>delete Mn[e]),t.innerHTML=`
    <div class="container">
      <div class="profile-card">
        <h3>Contacts</h3>
        <p>View and manage your Nostr contacts.</p>
        <div id="contactdetails"></div>
      </div>
      
      <div class="section-card">
        <h3>Contact List History</h3>
        <p>View the history of changes to your contact list. Click on a contact name to view details.</p>
        <div id="contactsbackuphistory">
          <div id="history-loading" aria-busy="true">Loading contact history...</div>
        </div>
      </div>
    </div>
  `,setTimeout(()=>{let e=me("history-loading");e&&e.remove(),Ue("contactsbackuphistory",3,n=>{let r=me("contactsbackuphistory");r&&(r.style.display="none"),_s(n)}),setTimeout(()=>oh(),100)},0))},zr=sh});var Rn,Ut,ih,Hs,ah,ch,vc,Wr,Is=D(()=>{"use strict";Mr();Rn=Xe(Wt());Ze();Pr();Fe();Ut=(t,e,n)=>`
    <label for="PM-form-${t}">
        ${n||t}
        <input
          type="text"
          name="PM-form-${t}"
          id="PM-form-${t}"
          placeholder="${n||t}" ${e&&e[t]?`value="${(0,Rn.sanitize)(e[t])}"`:""}
        />
    </label>
`,ih=(t,e,n)=>`
    <label for="PM-form-${t}">
      ${n||t}
      <textarea
        id="PM-form-${t}"
        name="PM-form-${t}"
        placeholder="${n||t}"
      >${e&&e[t]?(0,Rn.sanitize)(e[t]):""}</textarea>
    </label>
`,Hs=["name","nip05","about","picture","banner","lud06","lud16"],ah=t=>{let e=t?Object.keys(t).filter(n=>!Hs.some(r=>r===n)):[];return`<form id="metadatapageform">
    <div class="section-card">
      <div class="grid">
        ${Ut("name",t)}
        ${Ut("nip05",t)}
      </div>
      ${ih("about",t)}
      
      <div class="profile-images mt-2">
        <div class="mb-2">
          <label>Profile Picture</label>
          <img id="metadata-form-picture" src="${t&&t.picture?(0,Rn.sanitize)(t.picture):""}">
          ${Ut("picture",t)}
        </div>
        
        <div class="mb-2">
          <label>Banner Image</label>
          <img id="metadata-form-banner" src="${t&&t.banner?(0,Rn.sanitize)(t.banner):""}">
          ${Ut("banner",t)}
        </div>
      </div>
      
      <div class="lightning-section mt-2">
        <h4>Lightning Address</h4>
        <div class="grid">
          ${Ut("lud06",t,"lud06 (LNURL)")}
          ${Ut("lud16",t)}
        </div>
      </div>
      
      ${e.length>0?`
        <div class="custom-fields mt-2">
          <h4>Custom Fields</h4>
          <div class="grid">
            ${e.map(n=>Ut(n,t)).join("")}
          </div>
        </div>
      `:""}
      
      <div class="form-actions mt-3">
        <button id="metadatasubmitbutton" type="submit">${t?"Update":"Save"}</button>
        <button id="metadataresetbutton" class="secondary outline" type="reset">Reset Form</button>
      </div>
    </div>
  </form>`},ch=()=>O(void 0,null,function*(){let t=new FormData(document.getElementById("metadatapageform")),e={},n=Y(0);(n?[...Object.keys(JSON.parse(n.content)),...Hs]:Hs).forEach(o=>{let s=t.get(`PM-form-${o}`);s&&s!==""&&(e[o]=s)}),(yield $e({pubkey:q("pubkey"),kind:0,created_at:Math.floor(Date.now()/1e3),content:JSON.stringify(e),tags:[]},"metadatasubmitbutton"))&&Ue("metadatahistory",0)}),vc=t=>{let e=Y(0),n=e?JSON.parse(e.content):null;document.getElementById(t).innerHTML=`<div class="profileform">
    <h3>Metadata</h3>
    ${ah(n)}
  </div>`,["picture","banner"].forEach(s=>{let i=document.getElementById(`PM-form-${s}`);i.onchange=()=>{document.getElementById(`metadata-form-${s}`).setAttribute("src",i.value)}});let r=document.getElementById("PM-form-nip05"),o=()=>O(void 0,null,function*(){if(r.value==="")r.removeAttribute("aria-invalid");else{let s=!1;try{let i=yield Bn.queryProfile(r.value);s=!!i&&i.pubkey===q("pubkey")}catch(i){}r.setAttribute("aria-invalid",s?"false":"true")}});o(),r.onchange=o,document.getElementById("metadatasubmitbutton").onclick=s=>{ch(),s.preventDefault()},document.getElementById("metadataresetbutton").onclick=s=>{vc(t),s.preventDefault()}},Wr=()=>{let t=document.getElementById("PM-container");t.innerHTML=`
    <div class="container">
      <div class="profile-card">
        <h3>Metadata</h3>
        <p>Edit your profile information and customize how others see you on Nostr.</p>
        <div id="metadataformcontainer"></div>
      </div>
      
      <div class="section-card">
        <h3>Backup History</h3>
        <p>View your profile's history and restore previous versions if needed.</p>
        <div id="metadatahistory"></div>
      </div>
    </div>
  `,vc("metadataformcontainer"),Ue("metadatahistory",0)}});var Ec,lh,uh,kc,dh,Gr,Cs=D(()=>{"use strict";Ze();Pr();Fe();Ec=(t,e)=>`
  <div class="relay-row">
    <div class="relay-url">
      ${e?e[1]:'<input type="text" name="PM-form-relay-new-address" id="PM-form-relay-new-address" placeholder="wss://..." />'}
    </div>
    <div class="relay-permissions">
      <label>
        <input
          type="checkbox"
          id="PM-form-relay-${t}-read"
          name="PM-form-relay-${t}-read"
          ${!e||!e[2]||e[2]==="read"?'checked="checked"':""}
        >
        <span>read</span>
      </label>
      <label>
        <input
          type="checkbox"
          id="PM-form-relay-${t}-write"
          name="PM-form-relay-${t}-write"
          ${!e||!e[2]||e[2]==="write"?'checked="checked"':""}
        >
        <span>write</span>
      </label>
    </div>
    <div class="relay-actions">
      <button 
        type="button" 
        class="remove-btn" 
        onclick="document.getElementById('relay-row-${t}').remove();"
      >
        REMOVE
      </button>
    </div>
  </div>
`,lh=t=>`
  <form id="relaysform" class="relays-form">
    <div id="relay-list">
      ${t?t.tags.map((e,n)=>`<div id="relay-row-${n}">${Ec(n,e)}</div>`).join(""):""}
      <div id="new-relay-row"></div>
    </div>
    <div class="form-actions">
      <button id="relaysaddbutton" type="button" class="add-btn">+ ADD RELAY</button>
      <div class="button-group mt-2">
        <button id="relayssubmitbutton" type="button">${t?"UPDATE":"SAVE"}</button>
        <button id="relaysresetbutton" class="secondary outline" type="reset">RESET</button>
      </div>
    </div>
  </form>
`,uh=()=>O(void 0,null,function*(){let t=document.querySelectorAll(".relay-row"),e=[];t.forEach((n,r)=>{var d,l,u;let o=null,s=n.querySelector(".relay-url input");if(s?o=s.value.trim():o=((d=n.querySelector(".relay-url").textContent)==null?void 0:d.trim())||null,!o||o==="")return;let i=(l=n.querySelector(`#PM-form-relay-${r}-read`))==null?void 0:l.checked,a=(u=n.querySelector(`#PM-form-relay-${r}-write`))==null?void 0:u.checked,c=["r",o];i&&a?e.push(c):e.push(["r",o,i?"read":"write"])}),yield $e({pubkey:q("pubkey"),kind:10002,created_at:Math.floor(Date.now()/1e3),content:"",tags:e},"relayssubmitbutton"),Ue("relaysbackuphistory",10002)}),kc=t=>{let e=document.getElementById(t);if(!e)return;e.innerHTML=`<div class="relayform">
    <h3>RELAYS_</h3>
    ${lh(Y(10002))}
  </div>`;let n=document.getElementById("relayssubmitbutton");n&&(n.onclick=s=>{uh(),s.preventDefault()});let r=document.getElementById("relaysresetbutton");r&&(r.onclick=s=>{kc(t),s.preventDefault()});let o=document.getElementById("relaysaddbutton");o&&(o.onclick=s=>{let i=document.getElementById("new-relay-row");if(i){let a=document.querySelectorAll(".relay-row").length,c=document.createElement("div");c.id=`relay-row-${a}`,c.innerHTML=Ec(a),i.before(c)}s.preventDefault()})},dh=()=>{let t=document.getElementById("PM-container");t&&(t.innerHTML=`
    <div class="container">
      <div id="relayforcontainer"></div>
      <div class="section-card mt-3">
        <h3>RELAY HISTORY_</h3>
        <div id="relaysbackuphistory"></div>
      <div>
    </div>
  `,kc("relayforcontainer"),Ue("relaysbackuphistory",10002))},Gr=dh});var Ms,an,fh,hh,ph,mh,Ac,qr,Tc=D(()=>{"use strict";Ze();Bs();Is();Cs();Ms=()=>'<div class="text-center"><img class="hero-logo" src="./img/nostr-profile-manage-logo.png"></div>',an=(t=!0)=>`${t?'aria-busy="true"':""}`,fh=(t,e=!1)=>t==null?`<div>
      <button ${an(e)} class="outline contrast">No Metadata</button>
    </div>`:`<div>
    <button
      ${an(e)}
      class="outline"
      id="metadatabutton"
    >
      ${Object.keys(JSON.parse(t.content)).length} Metadata Fields
    </button>
  </div>`,hh=(t,e=!1)=>t==null?`<div><button
      ${an(e)}
      id="contactsbutton"
    >No Contacts</button></div>`:`<div>
    <button
      ${an(e)}
      id="contactsbutton"
    >${t.tags.length} Contacts</button>
  </div>`,ph=(t,e=!1)=>{if(t==null)return`<div>
      <button
        ${an(e)}
        id="relaysbutton"
        class="outline secondary"
      >No Relays</button>
    </div>`;let n=t.tags.filter(o=>typeof o[2]=="undefined"||o[2]==="read").length,r=t.tags.filter(o=>typeof o[2]=="undefined"||o[2]==="write").length;return`<div><button
    ${an(e)}
    id="relaysbutton"
    class="outline secondary"
  >
    ${t.tags.length} Relay${t.tags.length===1?"":"s"} (${n} read ${r} write)
    </button></div>`},mh=t=>{let e=JSON.parse(t.content),n=e.about?e.about.replace(/\r?\n|\r/,""):"";return n.length>50&&(n=`${n.substring(0,47)}...`),`
    <div class="profile-header">
      <img src="${e.picture?e.picture:"./img/nostr-profile-manage-logo.png"}" alt="Profile picture">
      <div class="profile-info">
        <h2>${e.name?e.name:"Anonymous"}</h2>
        ${e.nip05?`<p>${e.nip05}</p>`:""}
        ${n?`<p>${n}</p>`:""}
      </div>
    </div>
  `},Ac=(t,e,n)=>{let r="";return t?e?r=`
      <h1>No Profile Events Found</h1>
      <p>We didn't find any profile info for you. Either we didn't look on the right relays or you have just created a key pair.</p>
      <p>Only proceed if you are setting your profile up for the first time.</p>
    `:n?r=`
      <h1>Backup is up to date!</h1>
      <p>
        We already had backed up your profile to your offline browser data.
        <a href="#" class="secondary" id="downloadprofile">Download</a> for safe keeping.
      </p>
      <p>If your profile ever gets wiped by a nostr client, come back here on this device to restore. Come back from time to time to update your backup.</p>
    `:r=`
      <h1>Profile Backed Up!</h1>
      <p>
        We just backed up your latest profile to your offline browser data.
        <a id="downloadprofile" href="#" class="secondary">Download</a> for safe keeping.
      </p>
      <p>If your profile ever gets wiped by a nostr client, come back here on this device to restore. Come back from time to time to update your backup.</p>
    `:e?r=`
        <h1 aria-busy="true">Finding Profile...</h1>
        <p>It's your first time here and we are backing up your metadata, contacts and relays to your offline browser data.</p>
      `:r=`
        <h1 aria-busy="true">Finding Latest Profile...</h1>
        <p>We are backing up your latest metadata, contacts and relays to your offline browser data.</p>
      `,`<div class="backup-hero">${r}</div>`},qr=()=>{let t=!Y(0)&&!Y(3),e=Ur(),n=cc(),r=document.getElementById("PM-container");t?r.innerHTML=`
      <div class="container">
        <div class="profile-card">
          <div class="hero">
            ${Ms()}
            ${Ac(e,t,n)}
          </div>
        </div>
      </div>
    `:r.innerHTML=`
      <div class="container">
        <div class="profile-card">
          ${mh(Y(0))}
          
          <div class="profile-meta">
            ${fh(Y(0),!e)}
            ${hh(Y(3),!e)}
            ${ph(Y(10002),!e)}
          </div>
          
          ${Ac(e,t,n)}
        </div>
      </div>
    `;let o=document.getElementById("metadatabutton");o&&(o.onclick=()=>Wr());let s=document.getElementById("contactsbutton");s&&(s.onclick=()=>zr());let i=document.getElementById("relaysbutton");i&&(i.onclick=()=>Gr());let a=document.getElementById("downloadprofile");a&&(a.onclick=c=>{c.preventDefault();let d=JSON.stringify([...re(0)||[],...re(2)||[],...re(10002)||[],...re(3)||[]]),l=document.createElement("a");l.setAttribute("href",`data:text/plain;charset=utf-8,${encodeURIComponent(d)}`),l.setAttribute("download",`my-nostr-profile-events-${Date.now()}.json`),l.style.display="none",document.body.appendChild(l),l.click(),document.body.removeChild(l)})}});var $s,Rs,Ds,Sc,yh,bh,gh,wh,Lc,_c=D(()=>{"use strict";Fe();Dr();Ze();$s=[],Rs=!1,Ds=!1,Sc=()=>{let t=Y(10002),e=t?t.tags.filter(n=>n[0]==="r").map(n=>n[1]):[];return[...new Set([...e,"wss://hist.nostr.land","wss://relay.damus.io","wss://nostr-pub.wellorder.net","wss://purplepag.es","wss://relay.nos.social","wss://relay.nostr.band","wss://relay.snort.social","wss://nostr.mutinywallet.com","wss://nos.lol","wss://relay.current.fyi","wss://eden.nostr.land","wss://nostr.wine"])]},yh=t=>O(void 0,null,function*(){let e=[],n=new Set,r=Sc();return yield sn([t],s=>{n.has(s.id)||(n.add(s.id),e.push(s))},r,[0,1,2,3,4,5,6,7,8,16,40,41,42,43,44,1984,9735,1e4,10002,3e4,30001,30023]),e.sort((s,i)=>i.created_at-s.created_at)}),bh=t=>{var o;let e={timestamp:Date.now(),pubkey:q("pubkey"),total_events:t.length,events_by_kind:t.reduce((s,i)=>(s[i.kind]=(s[i.kind]||0)+1,s),{}),events:t},n=JSON.stringify(e,null,2),r=document.createElement("a");r.setAttribute("href",`data:text/plain;charset=utf-8,${encodeURIComponent(n)}`),r.setAttribute("download",`nostr-backup-${(o=e.pubkey)==null?void 0:o.substring(0,8)}-${Date.now()}.json`),r.style.display="none",document.body.appendChild(r),r.click(),document.body.removeChild(r)},gh=()=>{let t=[];return document.querySelectorAll(".event-kind-checkbox:checked").forEach(n=>{let r=parseInt(n.value,10);Number.isNaN(r)||t.push(r)}),t},wh=()=>O(void 0,null,function*(){let t=gh();if(t.length===0){let c=document.getElementById("republish-status");c&&(c.innerHTML="\u26A0 Please select at least one event type to republish.");return}let e=[];[0,2,3,10002].forEach(c=>{let d=re(c);d&&e.push(...d)}),e.push(...$s);let n=e.filter(c=>t.includes(c.kind)),r=Array.from(new Map(n.map(c=>[c.id,c])).values()),o=Sc(),s=0,i=r.length,a=document.getElementById("republish-status");yield Promise.allSettled(r.map((c,d)=>O(void 0,null,function*(){try{yield new Promise(u=>{setTimeout(u,d*50)});let l=yield Rr(c,o);return l&&(s+=1),a&&(a.innerHTML=`Republishing... ${s}/${i} events published`),l}catch(l){return console.error("Error republishing event:",c.id,l),!1}}))),a&&(a.innerHTML=`Republishing complete! ${s}/${i} events published successfully.`)}),Lc=()=>{var i,a,c,d;let t=q("pubkey");if(!t)return;let e=document.getElementById("PM-container");if(!e)return;e.innerHTML=`
    <div class="container">
      <div class="profile-card">
        <div class="hero">
          <h1>Backup & Republish</h1>
          <p>Backup all your Nostr data or republish your events to all relays</p>
        </div>
        
        <div class="section-card">
          <h3>Backup All Data</h3>
          <p>Download a complete backup of all your Nostr events from all relays. This includes notes, profile data, contacts, relays, and more.</p>
          <div class="grid">
            <button id="backup-button" class="contrast">
              Start Backup
            </button>
            <div id="backup-status" class="status-text"></div>
          </div>
        </div>
        
        <div class="section-card">
          <h3>Republish Events</h3>
          <p>Select which types of events to republish to all your current relays.</p>
          
          <div class="event-kinds-selection">
            <fieldset>
              <legend>Profile Data</legend>
              <label><input type="checkbox" class="event-kind-checkbox" value="0" checked> Metadata (profile info)</label>
              <label><input type="checkbox" class="event-kind-checkbox" value="10002" checked> Relay List</label>
            </fieldset>
            
            <fieldset>
              <legend>Social Content</legend>
              <label><input type="checkbox" class="event-kind-checkbox" value="1" checked> Notes (posts)</label>
              <label><input type="checkbox" class="event-kind-checkbox" value="3"> Contacts (following list)</label>
              <label><input type="checkbox" class="event-kind-checkbox" value="6" checked> Reposts</label>
              <label><input type="checkbox" class="event-kind-checkbox" value="7" checked> Reactions (likes)</label>
            </fieldset>
            
            <fieldset>
              <legend>Communication</legend>
              <label><input type="checkbox" class="event-kind-checkbox" value="4"> Direct Messages</label>
              <label><input type="checkbox" class="event-kind-checkbox" value="40"> Channel Creation</label>
              <label><input type="checkbox" class="event-kind-checkbox" value="41"> Channel Metadata</label>
              <label><input type="checkbox" class="event-kind-checkbox" value="42"> Channel Messages</label>
            </fieldset>
            
            <fieldset>
              <legend>Other</legend>
              <label><input type="checkbox" class="event-kind-checkbox" value="5" checked> Event Deletion</label>
              <label><input type="checkbox" class="event-kind-checkbox" value="8" checked> Badge Awards</label>
              <label><input type="checkbox" class="event-kind-checkbox" value="1984" checked> Reports</label>
              <label><input type="checkbox" class="event-kind-checkbox" value="9735" checked> Zap Requests</label>
              <label><input type="checkbox" class="event-kind-checkbox" value="30000" checked> Follow Sets</label>
              <label><input type="checkbox" class="event-kind-checkbox" value="30001" checked> Generic Lists</label>
              <label><input type="checkbox" class="event-kind-checkbox" value="30023" checked> Long-form Articles</label>
            </fieldset>
          </div>
          
          <div class="republish-controls">
            <div class="grid">
              <div>
                <button id="select-all-kinds" class="outline">Select All</button>
                <button id="select-none-kinds" class="outline">Select None</button>
              </div>
              <button id="republish-button" class="secondary">
                Republish Selected Events
              </button>
            </div>
            <div id="republish-status" class="status-text"></div>
          </div>
        </div>
        
        <div class="section-card">
          <h3>Current Cache Info</h3>
          <div id="cache-info">
            <p>Profile events: ${(((i=re(0))==null?void 0:i.length)||0)+(((a=re(2))==null?void 0:a.length)||0)+(((c=re(3))==null?void 0:c.length)||0)+(((d=re(10002))==null?void 0:d.length)||0)}</p>
            <p>Backup events: ${$s.length}</p>
          </div>
        </div>
      </div>
    </div>
  `;let n=document.getElementById("backup-button");n&&(n.onclick=()=>O(void 0,null,function*(){if(Rs)return;Rs=!0,n.setAttribute("aria-busy","true"),n.setAttribute("disabled",""),n.innerHTML="Fetching Events...";let l=document.getElementById("backup-status");l&&(l.innerHTML="Connecting to relays and fetching all your events...");try{let u=yield yh(t);$s=u,l&&(l.innerHTML=`Found ${u.length} events. Creating archive...`),n.innerHTML="Downloading...",bh(u),l&&(l.innerHTML=`\u2713 Backup complete! Downloaded ${u.length} events.`),n.innerHTML="Backup Complete",setTimeout(()=>{n.innerHTML="Start Backup",n.removeAttribute("disabled")},3e3)}catch(u){console.error("Backup error:",u),l&&(l.innerHTML="\u2717 Backup failed. Please try again."),n.innerHTML="Backup Failed - Retry",n.removeAttribute("disabled")}finally{Rs=!1,n.removeAttribute("aria-busy")}}));let r=document.getElementById("republish-button");r&&(r.onclick=()=>O(void 0,null,function*(){if(!Ds&&confirm("This will republish all your cached events to all your relays. Continue?")){Ds=!0,r.setAttribute("aria-busy","true"),r.setAttribute("disabled",""),r.innerHTML="Starting Republish...";try{yield wh(),r.innerHTML="Republish Complete",setTimeout(()=>{r.innerHTML="Republish Selected Events",r.removeAttribute("disabled")},3e3)}catch(l){console.error("Republish error:",l);let u=document.getElementById("republish-status");u&&(u.innerHTML="\u2717 Republish failed. Please try again."),r.innerHTML="Republish Selected - Retry",r.removeAttribute("disabled")}finally{Ds=!1,r.removeAttribute("aria-busy")}}}));let o=document.getElementById("select-all-kinds");o&&(o.onclick=()=>{document.querySelectorAll(".event-kind-checkbox").forEach(u=>{u.checked=!0})});let s=document.getElementById("select-none-kinds");s&&(s.onclick=()=>{document.querySelectorAll(".event-kind-checkbox").forEach(u=>{u.checked=!1})})}});var Us,xh,vh,Eh,kh,Bc,Ah,Th,Sh,Hc,Ic=D(()=>{"use strict";Us=Xe(Wt());Ss();Ze();Fe();xh=t=>{let e;try{t.kind===0?e=`Profile: ${JSON.parse(t.content).name||"Unnamed"}`:t.kind===3?e=`Contacts: ${t.tags.length} connection${t.tags.length!==1?"s":""}`:t.kind===10002?e=`Relays: ${t.tags.length} relay${t.tags.length!==1?"s":""}`:t.content.length>0?e=t.content.length>50?`${(0,Us.sanitize)(t.content.substring(0,50))}...`:(0,Us.sanitize)(t.content):e=`Event (kind: ${t.kind})`}catch(n){e=`Event (kind: ${t.kind})`}return`
    <div class="event-item" data-event-id="${t.id}">
      <div class="event-header">
        <span class="event-kind">Kind: ${t.kind}</span>
        <span class="event-date">${Cn(t.created_at*1e3)}</span>
      </div>
      <div class="event-content">${e}</div>
      <div class="event-id"><small>ID: ${t.id}</small></div>
      <div class="event-actions">
        <button id="delete-btn-${t.id}" class="secondary outline">Delete Event</button>
      </div>
    </div>
  `},vh=t=>!t||t.length===0?"<p>No events found.</p>":`
    <div class="event-list">
      ${[...t].sort((n,r)=>r.created_at-n.created_at).map(xh).join("")}
    </div>
  `,Eh=t=>`
    <div class="container">
      <h3>Delete Events</h3>
      <p>Select events to delete or enter an event ID to delete a specific event. This will publish a deletion request (kind 5) to your relays.</p>
      
      <!-- New section for deleting events by ID -->
      <div class="delete-by-id-section">
        <h4>Delete Event by ID</h4>
        <div class="grid">
          <input type="text" id="custom-event-id" placeholder="Enter the event ID (64 character hex)" />
          <button id="delete-custom-event-btn" class="secondary">Delete by ID</button>
        </div>
        <small>Note: You can only delete events that you authored.</small>
      </div>
      
      <h4>Your Known Events</h4>
      <div id="delete-event-list">
        ${vh(t)}
      </div>
      <div id="delete-status"></div>
    </div>
  `,kh=t=>/^[0-9a-f]{64}$/i.test(t),Bc=(t,e)=>O(void 0,null,function*(){let n={kind:5,pubkey:q("pubkey"),created_at:Math.floor(Date.now()/1e3),content:"",tags:[["e",t]]};return $e(n,e,"Deleted")}),Ah=t=>{t.forEach(n=>{let r=document.getElementById(`delete-btn-${n.id}`);r&&(r.onclick=()=>O(void 0,null,function*(){if(confirm("Are you sure you want to delete this event? This action cannot be undone.")&&(yield Bc(n.id,`delete-btn-${n.id}`))){let s=document.getElementById("delete-status");s.innerHTML=`
              <div class="success-message">
                <p>Deletion event for event ${n.id.substring(0,8)}... has been published.</p>
                <p>Note that it may take some time for relays to process the deletion request.</p>
              </div>
            `}}))});let e=document.getElementById("delete-custom-event-btn");e&&(e.onclick=()=>O(void 0,null,function*(){let n=document.getElementById("custom-event-id"),r=n.value.trim(),o=document.getElementById("delete-status");if(!kh(r)){o.innerHTML=`
          <div class="error-message">
            <p>Invalid event ID format. Event IDs must be 64 hexadecimal characters.</p>
          </div>
        `;return}confirm(`Are you sure you want to delete event ${r.substring(0,8)}...? This action cannot be undone.`)&&((yield Bc(r,"delete-custom-event-btn"))?(o.innerHTML=`
            <div class="success-message">
              <p>Deletion event for event ${r.substring(0,8)}... has been published.</p>
              <p>Note that it may take some time for relays to process the deletion request.</p>
            </div>
          `,n.value=""):o.innerHTML=`
            <div class="error-message">
              <p>Failed to publish deletion event. Please make sure you have permission to delete this event.</p>
            </div>
          `)}))},Th=()=>{let t=re(0)||[],e=re(3)||[],n=re(10002)||[];return[...t,...e,...n]},Sh=()=>O(void 0,null,function*(){let t=document.getElementById("PM-container"),e=q("pubkey");if(!e){t.innerHTML="<p>No public key found. Please log in first.</p>";return}t.innerHTML=`
    <div class="container">
      <h3>Delete Events</h3>
      <p aria-busy="true">Loading your events...</p>
    </div>
  `,yield Or(e,()=>{});let n=Th();t.innerHTML=Eh(n),Ah(n)}),Hc=Sh});var Lh,Cc,Mc=D(()=>{"use strict";Fe();Lh=()=>{wi(),window.location.href="/"},Cc=Lh});var Bh=ie(Vr=>{Tc();Ze();Fe();Is();Bs();Cs();_c();Ic();Mc();Dr();var Dc=!1,Kr=t=>{Dc=t;let e=document.getElementById("PM-container");if(e&&t){if(!document.getElementById("page-loading-indicator")){let n=document.createElement("div");n.id="page-loading-indicator",n.setAttribute("aria-busy","true"),n.style.position="fixed",n.style.top="10px",n.style.right="10px",e.appendChild(n)}}else if(e&&!t){let n=document.getElementById("page-loading-indicator");n&&n.remove()}},$c=()=>O(Vr,null,function*(){Kr(!0);try{qr();let t=document.getElementById("mainnav");t&&t.classList.remove("inactive");let e=(r,o)=>{let s=document.getElementById(r);s&&(s.onclick=i=>{i.preventDefault(),Dc||o()})};e("navhome",qr),e("navmetadata",Wr),e("navcontacts",zr),e("navrelays",Gr),e("navbackup",Lc),e("navdelete",Hc),e("navlogout",()=>{ys(),Cc()});let n=[Or(q("pubkey"),()=>{})];yield Promise.all(n),qr(),lc().catch(r=>console.error("Error fetching contacts profile events:",r))}catch(t){console.error("Error loading profile:",t);let e=document.getElementById("PM-container");e&&(e.innerHTML=`
        <div class="container">
          <h3>Error Loading Profile</h3>
          <p>There was an error loading your profile. Please try again.</p>
          <button onclick="window.location.reload()">Reload</button>
        </div>
      `)}finally{Kr(!1)}}),_h=()=>{let t=`
    <div class="container">
      <div class="profile-card">
        <div class="hero">
          ${Ms()}
          <div id="herocontent">
            <h1 id="title-text">Nostr Profile Manager</h1>
            <p id="subtitle-text">Secure / Backup / Refine / Delete</p>
            <a id="loadextension" href="#" onclick="return false;" role="button" class="contrast">Initialize Connection</a>
          </div>
        </div>
      </div>
      
      <div class="section-card">
        <div class="grid">
          <article>
            <h4>> Backup</h4>
            <p class="code-font">Store profile data in local storage. Protect against relay failures.</p>
          </article>
          <article>
            <h4>> Refine</h4>
            <p class="code-font">Optimize your profile. Configure relays. Manage contact list.</p>
          </article>
          <article>
            <h4>> Restore</h4>
            <p class="code-font">Recover previous profile states. View backup history.</p>
          </article>
          <article>
            <h4>> Delete</h4>
            <p class="code-font">Remove unwanted data. Broadcast deletion requests to the network.</p>
          </article>
        </div>
      </div>
    </div>
  `,e=document.getElementById("PM-container");if(!e)return;e.innerHTML=t,setTimeout(()=>{let r=document.getElementById("title-text"),o=document.getElementById("subtitle-text");r&&(typeWriter(r,"Nostr Profile Manager",50),setTimeout(()=>{o&&typeWriter(o,"Secure / Backup / Refine / Delete",30)},2e3))},500);let n=document.getElementById("loadextension");n&&(n.onclick=r=>O(Vr,null,function*(){if(r.preventDefault(),window.nostr)try{Kr(!0),n.setAttribute("aria-busy","true"),n.textContent="Connecting...";let o=yield window.nostr.getPublicKey();Gt("pubkey",o),$c()}catch(o){console.error("Error connecting to Nostr extension:",o),n.removeAttribute("aria-busy"),n.textContent="Connection Failed. Retry"}finally{Kr(!1)}else n.outerHTML=`
          <div class="error-message">
            <p class="code-font">NIP-07 browser extension not detected.</p>
            <p class="code-font">Install an extension like nos2x to proceed.</p>
            <a href="https://github.com/nostr-protocol/nips/blob/master/07.md" role="button" class="secondary code-font">Get Browser Extension</a>
          </div>
        `}))},Rc=()=>O(Vr,null,function*(){q("pubkey")?$c():_h()});document.getElementById("PM-container")!==null?Rc():document.addEventListener("DOMContentLoaded",()=>Rc());window.addEventListener("beforeunload",()=>{ys()})});Bh();})();
/*! Bundled license information:

dompurify/dist/purify.js:
  (*! @license DOMPurify 3.0.3 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.0.3/LICENSE *)

@noble/secp256k1/lib/esm/index.js:
  (*! noble-secp256k1 - MIT License (c) 2019 Paul Miller (paulmillr.com) *)

@noble/hashes/esm/utils.js:
  (*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) *)

@scure/base/lib/esm/index.js:
  (*! scure-base - MIT License (c) 2022 Paul Miller (paulmillr.com) *)

@noble/hashes/utils.js:
  (*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) *)

@scure/base/lib/index.js:
  (*! scure-base - MIT License (c) 2022 Paul Miller (paulmillr.com) *)

@scure/bip39/index.js:
  (*! scure-bip39 - MIT License (c) 2022 Patricio Palladino, Paul Miller (paulmillr.com) *)

@noble/hashes/esm/utils.js:
  (*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) *)
*/
