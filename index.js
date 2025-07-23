"use strict";(()=>{var pl=Object.create;var bo=Object.defineProperty,ml=Object.defineProperties,bl=Object.getOwnPropertyDescriptor,yl=Object.getOwnPropertyDescriptors,gl=Object.getOwnPropertyNames,qn=Object.getOwnPropertySymbols,wl=Object.getPrototypeOf,yo=Object.prototype.hasOwnProperty,mi=Object.prototype.propertyIsEnumerable;var pi=(t,e,n)=>e in t?bo(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,go=(t,e)=>{for(var n in e||={})yo.call(e,n)&&pi(t,n,e[n]);if(qn)for(var n of qn(e))mi.call(e,n)&&pi(t,n,e[n]);return t},wo=(t,e)=>ml(t,yl(e));var bi=(t,e)=>{var n={};for(var r in t)yo.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&qn)for(var r of qn(t))e.indexOf(r)<0&&mi.call(t,r)&&(n[r]=t[r]);return n};var D=(t,e)=>()=>(t&&(e=t(t=0)),e);var ie=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var xl=(t,e,n,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let o of gl(e))!yo.call(t,o)&&o!==n&&bo(t,o,{get:()=>e[o],enumerable:!(r=bl(e,o))||r.enumerable});return t};var Xe=(t,e,n)=>(n=t!=null?pl(wl(t)):{},xl(e||!t||!t.__esModule?bo(n,"default",{value:t,enumerable:!0}):n,t));var O=(t,e,n)=>new Promise((r,o)=>{var s=c=>{try{a(n.next(c))}catch(d){o(d)}},i=c=>{try{a(n.throw(c))}catch(d){o(d)}},a=c=>c.done?r(c.value):Promise.resolve(c.value).then(s,i);a((n=n.apply(t,e)).next())});var yi=ie(()=>{});function xi(t){let{a:e,b:n}=F,r=x(t*t),o=x(r*t);return x(o+e*t+n)}function vi(t){if(!(t instanceof N))throw new TypeError("JacobianPoint expected")}function Yn(t,e){let n=e.negate();return t?n:e}function Ei(t){return Number.parseInt(t[0],16)>=8?"00"+t:t}function ki(t){if(t.length<2||t[0]!==2)throw new Error(`Invalid signature integer tag: ${qt(t)}`);let e=t[1],n=t.subarray(2,e+2);if(!e||n.length!==e)throw new Error("Invalid signature integer: wrong length");if(n[0]===0&&n[1]<=127)throw new Error("Invalid signature integer: trailing length");return{data:pe(n),left:t.subarray(e+2)}}function kl(t){if(t.length<2||t[0]!=48)throw new Error(`Invalid signature tag: ${qt(t)}`);if(t[1]!==t.length-2)throw new Error("Invalid signature: incorrect length");let{data:e,left:n}=ki(t.subarray(2)),{data:r,left:o}=ki(n);if(o.length)throw new Error(`Invalid signature: left bytes after parsing: ${qt(o)}`);return{r:e,s:r}}function Qe(...t){if(!t.every(r=>r instanceof Uint8Array))throw new Error("Uint8Array list expected");if(t.length===1)return t[0];let e=t.reduce((r,o)=>r+o.length,0),n=new Uint8Array(e);for(let r=0,o=0;r<t.length;r++){let s=t[r];n.set(s,o),o+=s.length}return n}function qt(t){if(!(t instanceof Uint8Array))throw new Error("Expected Uint8Array");let e="";for(let n=0;n<t.length;n++)e+=Al[t[n]];return e}function tt(t){if(typeof t!="bigint")throw new Error("Expected bigint");if(!($<=t&&t<Tl))throw new Error("Expected number 0 <= n < 2^256");return t.toString(16).padStart(64,"0")}function Vt(t){let e=nt(tt(t));if(e.length!==32)throw new Error("Error: expected 32 bytes");return e}function dn(t){let e=t.toString(16);return e.length&1?`0${e}`:e}function tr(t){if(typeof t!="string")throw new TypeError("hexToNumber: expected string, got "+typeof t);return BigInt(`0x${t}`)}function nt(t){if(typeof t!="string")throw new TypeError("hexToBytes: expected string, got "+typeof t);if(t.length%2)throw new Error("hexToBytes: received invalid unpadded hex"+t.length);let e=new Uint8Array(t.length/2);for(let n=0;n<e.length;n++){let r=n*2,o=t.slice(r,r+2),s=Number.parseInt(o,16);if(Number.isNaN(s)||s<0)throw new Error("Invalid byte sequence");e[n]=s}return e}function pe(t){return tr(qt(t))}function He(t){return t instanceof Uint8Array?Uint8Array.from(t):nt(t)}function Ai(t){if(typeof t=="number"&&Number.isSafeInteger(t)&&t>0)return BigInt(t);if(typeof t=="bigint"&&Zt(t))return t;throw new TypeError("Expected valid private scalar: 0 < scalar < curve.n")}function x(t,e=F.P){let n=t%e;return n>=$?n:e+n}function ye(t,e){let{P:n}=F,r=t;for(;e-- >$;)r*=r,r%=n;return r}function Sl(t){let{P:e}=F,n=BigInt(6),r=BigInt(11),o=BigInt(22),s=BigInt(23),i=BigInt(44),a=BigInt(88),c=t*t*t%e,d=c*c*t%e,l=ye(d,fn)*d%e,u=ye(l,fn)*d%e,h=ye(u,et)*c%e,p=ye(h,r)*h%e,m=ye(p,o)*p%e,b=ye(m,i)*m%e,g=ye(b,a)*b%e,k=ye(g,i)*m%e,L=ye(k,fn)*d%e,y=ye(L,s)*p%e,H=ye(y,n)*c%e,E=ye(H,et);if(E*E%e!==t)throw new Error("Cannot find square root");return E}function Yt(t,e=F.P){if(t===$||e<=$)throw new Error(`invert: expected positive integers, got n=${t} mod=${e}`);let n=x(t,e),r=e,o=$,s=K,i=K,a=$;for(;n!==$;){let d=r/n,l=r%n,u=o-i*d,h=s-a*d;r=n,n=l,o=i,s=a,i=u,a=h}if(r!==K)throw new Error("invert: does not exist");return x(o,e)}function Ll(t,e=F.P){let n=new Array(t.length),r=t.reduce((s,i,a)=>i===$?s:(n[a]=s,x(s*i,e)),K),o=Yt(r,e);return t.reduceRight((s,i,a)=>i===$?s:(n[a]=x(s*n[a],e),x(s*i,e)),o),n}function _l(t){let e=t.length*8-Kt*8,n=pe(t);return e>0?n>>BigInt(e):n}function Eo(t,e=!1){let n=_l(t);if(e)return n;let{n:r}=F;return n>=r?n-r:n}function Zt(t){return $<t&&t<F.n}function Jn(t){return $<t&&t<F.P}function Bl(t,e,n,r=!0){let{n:o}=F,s=Eo(t,!0);if(!Zt(s))return;let i=Yt(s,o),a=U.BASE.multiply(s),c=x(a.x,o);if(c===$)return;let d=x(i*x(e+n*c,o),o);if(d===$)return;let l=new ge(c,d),u=(a.x===l.r?0:2)|Number(a.y&K);return r&&l.hasHighS()&&(l=l.normalizeS(),u^=1),{sig:l,recovery:u}}function _t(t){let e;if(typeof t=="bigint")e=t;else if(typeof t=="number"&&Number.isSafeInteger(t)&&t>0)e=BigInt(t);else if(typeof t=="string"){if(t.length!==2*Kt)throw new Error("Expected 32 bytes of private key");e=tr(t)}else if(t instanceof Uint8Array){if(t.length!==Kt)throw new Error("Expected 32 bytes of private key");e=pe(t)}else throw new TypeError("Expected valid private key");if(!Zt(e))throw new Error("Expected private key: 0 < key < n");return e}function ko(t){return t instanceof U?(t.assertValidity(),t):U.fromHex(t)}function Si(t){if(t instanceof ge)return t.assertValidity(),t;try{return ge.fromDER(t)}catch{return ge.fromCompact(t)}}function Li(t,e=!1){return U.fromPrivateKey(t).toRawBytes(e)}function Ti(t){let e=t instanceof Uint8Array,n=typeof t=="string",r=(e||n)&&t.length;return e?r===Qn||r===er:n?r===Qn*2||r===er*2:t instanceof U}function Ao(t,e,n=!1){if(Ti(t))throw new TypeError("getSharedSecret: first arg must be private key");if(!Ti(e))throw new TypeError("getSharedSecret: second arg must be public key");let r=ko(e);return r.assertValidity(),r.multiply(_t(t)).toRawBytes(n)}function _i(t){let e=t.length>ke?t.slice(0,ke):t;return pe(e)}function Hl(t){let e=_i(t),n=x(e,F.n);return Bi(n<$?e:n)}function Bi(t){return Vt(t)}function Il(t,e,n){if(t==null)throw new Error(`sign: expected valid message hash, not "${t}"`);let r=He(t),o=_t(e),s=[Bi(o),Hl(r)];if(n!=null){n===!0&&(n=B.randomBytes(ke));let c=He(n);if(c.length!==ke)throw new Error(`sign: Expected ${ke} bytes of extra data`);s.push(c)}let i=Qe(...s),a=_i(r);return{seed:i,m:a,d:o}}function Cl(t,e){let{sig:n,recovery:r}=t,{der:o,recovered:s}=Object.assign({canonical:!0,der:!0},e),i=o?n.toDERRawBytes():n.toCompactRawBytes();return s?[i,r]:i}function Hi(t,e,n={}){let{seed:r,m:o,d:s}=Il(t,e,n.extraEntropy),i=new vo(El,Kt);i.reseedSync(r);let a;for(;!(a=Bl(i.generateSync(),o,s,n.canonical));)i.reseedSync();return Cl(a,n)}function Ii(t,e,n,r=Ml){let o;try{o=Si(t),e=He(e)}catch{return!1}let{r:s,s:i}=o;if(r.strict&&o.hasHighS())return!1;let a=Eo(e),c;try{c=ko(n)}catch{return!1}let{n:d}=F,l=Yt(i,d),u=x(a*l,d),h=x(s*l,d),p=U.BASE.multiplyAndAddUnsafe(c,u,h);return p?x(p.x,d)===s:!1}function nr(t){return x(pe(t),F.n)}function Rl(t){return U.fromPrivateKey(t).toRawX()}async function Dl(t,e,n){return new rr(t,e,n).calc()}function Ul(t,e,n){return new rr(t,e,n).calcSync()}function Ci(t,e,n){let r=t instanceof rt,o=r?t:rt.fromHex(t);return r&&o.assertValidity(),{...o,m:He(e),P:ko(n)}}function Mi(t,e,n,r){let o=U.BASE.multiplyAndAddUnsafe(e,_t(n),x(-r,F.n));return!(!o||!o.hasEvenY()||o.x!==t)}async function Ri(t,e,n){try{let{r,s:o,m:s,P:i}=Ci(t,e,n),a=nr(await B.taggedHash(Je.challenge,Vt(r),i.toRawX(),s));return Mi(r,i,o,a)}catch{return!1}}function Di(t,e,n){try{let{r,s:o,m:s,P:i}=Ci(t,e,n),a=nr(B.taggedHashSync(Je.challenge,Vt(r),i.toRawX(),s));return Mi(r,i,o,a)}catch(r){if(r instanceof pn)throw r;return!1}}var vl,$,K,et,fn,gi,F,wi,Vn,ke,Kt,El,Qn,er,Zn,pn,N,xo,U,ge,Al,Tl,Gt,hn,vo,Ml,rt,rr,Bt,he,Je,Xn,B,je=D(()=>{vl=Xe(yi(),1);$=BigInt(0),K=BigInt(1),et=BigInt(2),fn=BigInt(3),gi=BigInt(8),F=Object.freeze({a:$,b:BigInt(7),P:BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"),n:BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"),h:K,Gx:BigInt("55066263022277343669578718895168534326250603453777594175500187360389116729240"),Gy:BigInt("32670510020758816978083085130507043184471273380659243275938904335757337482424"),beta:BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee")}),wi=(t,e)=>(t+e/et)/e,Vn={beta:BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),splitScalar(t){let{n:e}=F,n=BigInt("0x3086d221a7d46bcde86c90e49284eb15"),r=-K*BigInt("0xe4437ed6010e88286f547fa90abfe4c3"),o=BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"),s=n,i=BigInt("0x100000000000000000000000000000000"),a=wi(s*t,e),c=wi(-r*t,e),d=x(t-a*n-c*o,e),l=x(-a*r-c*s,e),u=d>i,h=l>i;if(u&&(d=e-d),h&&(l=e-l),d>i||l>i)throw new Error("splitScalarEndo: Endomorphism failed, k="+t);return{k1neg:u,k1:d,k2neg:h,k2:l}}},ke=32,Kt=32,El=32,Qn=ke+1,er=2*ke+1;Zn=F.a===$,pn=class extends Error{constructor(e){super(e)}};N=class{constructor(e,n,r){this.x=e,this.y=n,this.z=r}static fromAffine(e){if(!(e instanceof U))throw new TypeError("JacobianPoint#fromAffine: expected Point");return e.equals(U.ZERO)?N.ZERO:new N(e.x,e.y,K)}static toAffineBatch(e){let n=Ll(e.map(r=>r.z));return e.map((r,o)=>r.toAffine(n[o]))}static normalizeZ(e){return N.toAffineBatch(e).map(N.fromAffine)}equals(e){vi(e);let{x:n,y:r,z:o}=this,{x:s,y:i,z:a}=e,c=x(o*o),d=x(a*a),l=x(n*d),u=x(s*c),h=x(x(r*a)*d),p=x(x(i*o)*c);return l===u&&h===p}negate(){return new N(this.x,x(-this.y),this.z)}double(){let{x:e,y:n,z:r}=this,o=x(e*e),s=x(n*n),i=x(s*s),a=e+s,c=x(et*(x(a*a)-o-i)),d=x(fn*o),l=x(d*d),u=x(l-et*c),h=x(d*(c-u)-gi*i),p=x(et*n*r);return new N(u,h,p)}add(e){vi(e);let{x:n,y:r,z:o}=this,{x:s,y:i,z:a}=e;if(s===$||i===$)return this;if(n===$||r===$)return e;let c=x(o*o),d=x(a*a),l=x(n*d),u=x(s*c),h=x(x(r*a)*d),p=x(x(i*o)*c),m=x(u-l),b=x(p-h);if(m===$)return b===$?this.double():N.ZERO;let g=x(m*m),k=x(m*g),L=x(l*g),y=x(b*b-k-et*L),H=x(b*(L-y)-h*k),E=x(o*a*m);return new N(y,H,E)}subtract(e){return this.add(e.negate())}multiplyUnsafe(e){let n=N.ZERO;if(typeof e=="bigint"&&e===$)return n;let r=Ai(e);if(r===K)return this;if(!Zn){let u=n,h=this;for(;r>$;)r&K&&(u=u.add(h)),h=h.double(),r>>=K;return u}let{k1neg:o,k1:s,k2neg:i,k2:a}=Vn.splitScalar(r),c=n,d=n,l=this;for(;s>$||a>$;)s&K&&(c=c.add(l)),a&K&&(d=d.add(l)),l=l.double(),s>>=K,a>>=K;return o&&(c=c.negate()),i&&(d=d.negate()),d=new N(x(d.x*Vn.beta),d.y,d.z),c.add(d)}precomputeWindow(e){let n=Zn?128/e+1:256/e+1,r=[],o=this,s=o;for(let i=0;i<n;i++){s=o,r.push(s);for(let a=1;a<2**(e-1);a++)s=s.add(o),r.push(s);o=s.double()}return r}wNAF(e,n){!n&&this.equals(N.BASE)&&(n=U.BASE);let r=n&&n._WINDOW_SIZE||1;if(256%r)throw new Error("Point#wNAF: Invalid precomputation window, must be power of 2");let o=n&&xo.get(n);o||(o=this.precomputeWindow(r),n&&r!==1&&(o=N.normalizeZ(o),xo.set(n,o)));let s=N.ZERO,i=N.BASE,a=1+(Zn?128/r:256/r),c=2**(r-1),d=BigInt(2**r-1),l=2**r,u=BigInt(r);for(let h=0;h<a;h++){let p=h*c,m=Number(e&d);e>>=u,m>c&&(m-=l,e+=K);let b=p,g=p+Math.abs(m)-1,k=h%2!==0,L=m<0;m===0?i=i.add(Yn(k,o[b])):s=s.add(Yn(L,o[g]))}return{p:s,f:i}}multiply(e,n){let r=Ai(e),o,s;if(Zn){let{k1neg:i,k1:a,k2neg:c,k2:d}=Vn.splitScalar(r),{p:l,f:u}=this.wNAF(a,n),{p:h,f:p}=this.wNAF(d,n);l=Yn(i,l),h=Yn(c,h),h=new N(x(h.x*Vn.beta),h.y,h.z),o=l.add(h),s=u.add(p)}else{let{p:i,f:a}=this.wNAF(r,n);o=i,s=a}return N.normalizeZ([o,s])[0]}toAffine(e){let{x:n,y:r,z:o}=this,s=this.equals(N.ZERO);e==null&&(e=s?gi:Yt(o));let i=e,a=x(i*i),c=x(a*i),d=x(n*a),l=x(r*c),u=x(o*i);if(s)return U.ZERO;if(u!==K)throw new Error("invZ was invalid");return new U(d,l)}};N.BASE=new N(F.Gx,F.Gy,K);N.ZERO=new N($,K,$);xo=new WeakMap,U=class{constructor(e,n){this.x=e,this.y=n}_setWindowSize(e){this._WINDOW_SIZE=e,xo.delete(this)}hasEvenY(){return this.y%et===$}static fromCompressedHex(e){let n=e.length===32,r=pe(n?e:e.subarray(1));if(!Jn(r))throw new Error("Point is not on curve");let o=xi(r),s=Sl(o),i=(s&K)===K;n?i&&(s=x(-s)):(e[0]&1)===1!==i&&(s=x(-s));let a=new U(r,s);return a.assertValidity(),a}static fromUncompressedHex(e){let n=pe(e.subarray(1,ke+1)),r=pe(e.subarray(ke+1,ke*2+1)),o=new U(n,r);return o.assertValidity(),o}static fromHex(e){let n=He(e),r=n.length,o=n[0];if(r===ke)return this.fromCompressedHex(n);if(r===Qn&&(o===2||o===3))return this.fromCompressedHex(n);if(r===er&&o===4)return this.fromUncompressedHex(n);throw new Error(`Point.fromHex: received invalid point. Expected 32-${Qn} compressed bytes or ${er} uncompressed bytes, not ${r}`)}static fromPrivateKey(e){return U.BASE.multiply(_t(e))}static fromSignature(e,n,r){let{r:o,s}=Si(n);if(![0,1,2,3].includes(r))throw new Error("Cannot recover: invalid recovery bit");let i=Eo(He(e)),{n:a}=F,c=r===2||r===3?o+a:o,d=Yt(c,a),l=x(-i*d,a),u=x(s*d,a),h=r&1?"03":"02",p=U.fromHex(h+tt(c)),m=U.BASE.multiplyAndAddUnsafe(p,l,u);if(!m)throw new Error("Cannot recover signature: point at infinify");return m.assertValidity(),m}toRawBytes(e=!1){return nt(this.toHex(e))}toHex(e=!1){let n=tt(this.x);return e?`${this.hasEvenY()?"02":"03"}${n}`:`04${n}${tt(this.y)}`}toHexX(){return this.toHex(!0).slice(2)}toRawX(){return this.toRawBytes(!0).slice(1)}assertValidity(){let e="Point is not on elliptic curve",{x:n,y:r}=this;if(!Jn(n)||!Jn(r))throw new Error(e);let o=x(r*r),s=xi(n);if(x(o-s)!==$)throw new Error(e)}equals(e){return this.x===e.x&&this.y===e.y}negate(){return new U(this.x,x(-this.y))}double(){return N.fromAffine(this).double().toAffine()}add(e){return N.fromAffine(this).add(N.fromAffine(e)).toAffine()}subtract(e){return this.add(e.negate())}multiply(e){return N.fromAffine(this).multiply(e,this).toAffine()}multiplyAndAddUnsafe(e,n,r){let o=N.fromAffine(this),s=n===$||n===K||this!==U.BASE?o.multiplyUnsafe(n):o.multiply(n),i=N.fromAffine(e).multiplyUnsafe(r),a=s.add(i);return a.equals(N.ZERO)?void 0:a.toAffine()}};U.BASE=new U(F.Gx,F.Gy);U.ZERO=new U($,$);ge=class{constructor(e,n){this.r=e,this.s=n,this.assertValidity()}static fromCompact(e){let n=e instanceof Uint8Array,r="Signature.fromCompact";if(typeof e!="string"&&!n)throw new TypeError(`${r}: Expected string or Uint8Array`);let o=n?qt(e):e;if(o.length!==128)throw new Error(`${r}: Expected 64-byte hex`);return new ge(tr(o.slice(0,64)),tr(o.slice(64,128)))}static fromDER(e){let n=e instanceof Uint8Array;if(typeof e!="string"&&!n)throw new TypeError("Signature.fromDER: Expected string or Uint8Array");let{r,s:o}=kl(n?e:nt(e));return new ge(r,o)}static fromHex(e){return this.fromDER(e)}assertValidity(){let{r:e,s:n}=this;if(!Zt(e))throw new Error("Invalid Signature: r must be 0 < r < n");if(!Zt(n))throw new Error("Invalid Signature: s must be 0 < s < n")}hasHighS(){let e=F.n>>K;return this.s>e}normalizeS(){return this.hasHighS()?new ge(this.r,x(-this.s,F.n)):this}toDERRawBytes(){return nt(this.toDERHex())}toDERHex(){let e=Ei(dn(this.s)),n=Ei(dn(this.r)),r=e.length/2,o=n.length/2,s=dn(r),i=dn(o);return`30${dn(o+r+4)}02${i}${n}02${s}${e}`}toRawBytes(){return this.toDERRawBytes()}toHex(){return this.toDERHex()}toCompactRawBytes(){return nt(this.toCompactHex())}toCompactHex(){return tt(this.r)+tt(this.s)}};Al=Array.from({length:256},(t,e)=>e.toString(16).padStart(2,"0"));Tl=BigInt("0x10000000000000000000000000000000000000000000000000000000000000000");vo=class{constructor(e,n){if(this.hashLen=e,this.qByteLen=n,typeof e!="number"||e<2)throw new Error("hashLen must be a number");if(typeof n!="number"||n<2)throw new Error("qByteLen must be a number");this.v=new Uint8Array(e).fill(1),this.k=new Uint8Array(e).fill(0),this.counter=0}hmac(...e){return B.hmacSha256(this.k,...e)}hmacSync(...e){return hn(this.k,...e)}checkSync(){if(typeof hn!="function")throw new pn("hmacSha256Sync needs to be set")}incr(){if(this.counter>=1e3)throw new Error("Tried 1,000 k values for sign(), all were invalid");this.counter+=1}async reseed(e=new Uint8Array){this.k=await this.hmac(this.v,Uint8Array.from([0]),e),this.v=await this.hmac(this.v),e.length!==0&&(this.k=await this.hmac(this.v,Uint8Array.from([1]),e),this.v=await this.hmac(this.v))}reseedSync(e=new Uint8Array){this.checkSync(),this.k=this.hmacSync(this.v,Uint8Array.from([0]),e),this.v=this.hmacSync(this.v),e.length!==0&&(this.k=this.hmacSync(this.v,Uint8Array.from([1]),e),this.v=this.hmacSync(this.v))}async generate(){this.incr();let e=0,n=[];for(;e<this.qByteLen;){this.v=await this.hmac(this.v);let r=this.v.slice();n.push(r),e+=this.v.length}return Qe(...n)}generateSync(){this.checkSync(),this.incr();let e=0,n=[];for(;e<this.qByteLen;){this.v=this.hmacSync(this.v);let r=this.v.slice();n.push(r),e+=this.v.length}return Qe(...n)}};Ml={strict:!0};rt=class{constructor(e,n){this.r=e,this.s=n,this.assertValidity()}static fromHex(e){let n=He(e);if(n.length!==64)throw new TypeError(`SchnorrSignature.fromHex: expected 64 bytes, not ${n.length}`);let r=pe(n.subarray(0,32)),o=pe(n.subarray(32,64));return new rt(r,o)}assertValidity(){let{r:e,s:n}=this;if(!Jn(e)||!Zt(n))throw new Error("Invalid signature")}toHex(){return tt(this.r)+tt(this.s)}toRawBytes(){return nt(this.toHex())}};rr=class{constructor(e,n,r=B.randomBytes()){if(e==null)throw new TypeError(`sign: Expected valid message, not "${e}"`);this.m=He(e);let{x:o,scalar:s}=this.getScalar(_t(n));if(this.px=o,this.d=s,this.rand=He(r),this.rand.length!==32)throw new TypeError("sign: Expected 32 bytes of aux randomness")}getScalar(e){let n=U.fromPrivateKey(e),r=n.hasEvenY()?e:F.n-e;return{point:n,scalar:r,x:n.toRawX()}}initNonce(e,n){return Vt(e^pe(n))}finalizeNonce(e){let n=x(pe(e),F.n);if(n===$)throw new Error("sign: Creation of signature failed. k is zero");let{point:r,x:o,scalar:s}=this.getScalar(n);return{R:r,rx:o,k:s}}finalizeSig(e,n,r,o){return new rt(e.x,x(n+r*o,F.n)).toRawBytes()}error(){throw new Error("sign: Invalid signature produced")}async calc(){let{m:e,d:n,px:r,rand:o}=this,s=B.taggedHash,i=this.initNonce(n,await s(Je.aux,o)),{R:a,rx:c,k:d}=this.finalizeNonce(await s(Je.nonce,i,r,e)),l=nr(await s(Je.challenge,c,r,e)),u=this.finalizeSig(a,d,l,n);return await Ri(u,e,r)||this.error(),u}calcSync(){let{m:e,d:n,px:r,rand:o}=this,s=B.taggedHashSync,i=this.initNonce(n,s(Je.aux,o)),{R:a,rx:c,k:d}=this.finalizeNonce(s(Je.nonce,i,r,e)),l=nr(s(Je.challenge,c,r,e)),u=this.finalizeSig(a,d,l,n);return Di(u,e,r)||this.error(),u}};Bt={Signature:rt,getPublicKey:Rl,sign:Dl,verify:Ri,signSync:Ul,verifySync:Di};U.BASE._setWindowSize(8);he={node:vl,web:typeof self=="object"&&"crypto"in self?self.crypto:void 0},Je={challenge:"BIP0340/challenge",aux:"BIP0340/aux",nonce:"BIP0340/nonce"},Xn={},B={bytesToHex:qt,hexToBytes:nt,concatBytes:Qe,mod:x,invert:Yt,isValidPrivateKey(t){try{return _t(t),!0}catch{return!1}},_bigintTo32Bytes:Vt,_normalizePrivateKey:_t,hashToPrivateKey:t=>{t=He(t);let e=Kt+8;if(t.length<e||t.length>1024)throw new Error("Expected valid bytes of private key as per FIPS 186");let n=x(pe(t),F.n-K)+K;return Vt(n)},randomBytes:(t=32)=>{if(he.web)return he.web.getRandomValues(new Uint8Array(t));if(he.node){let{randomBytes:e}=he.node;return Uint8Array.from(e(t))}else throw new Error("The environment doesn't have randomBytes function")},randomPrivateKey:()=>B.hashToPrivateKey(B.randomBytes(Kt+8)),precompute(t=8,e=U.BASE){let n=e===U.BASE?e:new U(e.x,e.y);return n._setWindowSize(t),n.multiply(fn),n},sha256:async(...t)=>{if(he.web){let e=await he.web.subtle.digest("SHA-256",Qe(...t));return new Uint8Array(e)}else if(he.node){let{createHash:e}=he.node,n=e("sha256");return t.forEach(r=>n.update(r)),Uint8Array.from(n.digest())}else throw new Error("The environment doesn't have sha256 function")},hmacSha256:async(t,...e)=>{if(he.web){let n=await he.web.subtle.importKey("raw",t,{name:"HMAC",hash:{name:"SHA-256"}},!1,["sign"]),r=Qe(...e),o=await he.web.subtle.sign("HMAC",n,r);return new Uint8Array(o)}else if(he.node){let{createHmac:n}=he.node,r=n("sha256",t);return e.forEach(o=>r.update(o)),Uint8Array.from(r.digest())}else throw new Error("The environment doesn't have hmac-sha256 function")},sha256Sync:void 0,hmacSha256Sync:void 0,taggedHash:async(t,...e)=>{let n=Xn[t];if(n===void 0){let r=await B.sha256(Uint8Array.from(t,o=>o.charCodeAt(0)));n=Qe(r,r),Xn[t]=n}return B.sha256(n,...e)},taggedHashSync:(t,...e)=>{if(typeof Gt!="function")throw new pn("sha256Sync is undefined, you need to set it");let n=Xn[t];if(n===void 0){let r=Gt(Uint8Array.from(t,o=>o.charCodeAt(0)));n=Qe(r,r),Xn[t]=n}return Gt(n,...e)},_JacobianPoint:N};Object.defineProperties(B,{sha256Sync:{configurable:!1,get(){return Gt},set(t){Gt||(Gt=t)}},hmacSha256Sync:{configurable:!1,get(){return hn},set(t){hn||(hn=t)}}})});var mn,Ui=D(()=>{mn={node:void 0,web:typeof self=="object"&&"crypto"in self?self.crypto:void 0}});function Ol(t){if(typeof t!="string")throw new TypeError(`utf8ToBytes expected string, got ${typeof t}`);return new TextEncoder().encode(t)}function bn(t){if(typeof t=="string"&&(t=Ol(t)),!(t instanceof Uint8Array))throw new TypeError(`Expected input type is Uint8Array (got ${typeof t})`);return t}function $i(t){if(!Number.isSafeInteger(t)||t<0)throw new Error(`Wrong positive integer: ${t}`)}function Oi(t){if(typeof t!="function"||typeof t.create!="function")throw new Error("Hash should be wrapped by utils.wrapConstructor");$i(t.outputLen),$i(t.blockLen)}function Ni(t){let e=r=>t().update(bn(r)).digest(),n=t();return e.outputLen=n.outputLen,e.blockLen=n.blockLen,e.create=()=>t(),e}function Pi(t=32){if(mn.web)return mn.web.getRandomValues(new Uint8Array(t));if(mn.node)return new Uint8Array(mn.node.randomBytes(t).buffer);throw new Error("The environment doesn't have randomBytes function")}var or,Ae,$l,Uh,$h,Ht,yn=D(()=>{Ui();or=t=>new DataView(t.buffer,t.byteOffset,t.byteLength),Ae=(t,e)=>t<<32-e|t>>>e,$l=new Uint8Array(new Uint32Array([287454020]).buffer)[0]===68;if(!$l)throw new Error("Non little-endian hardware is not supported");Uh=Array.from({length:256},(t,e)=>e.toString(16).padStart(2,"0")),$h=(()=>{let t=typeof module<"u"&&typeof module.require=="function"&&module.require.bind(module);try{if(t){let{setImmediate:e}=t("timers");return()=>new Promise(n=>e(n))}}catch{}return()=>new Promise(e=>setTimeout(e,0))})();Ht=class{clone(){return this._cloneInto()}}});function Nl(t,e,n,r){if(typeof t.setBigUint64=="function")return t.setBigUint64(e,n,r);let o=BigInt(32),s=BigInt(4294967295),i=Number(n>>o&s),a=Number(n&s),c=r?4:0,d=r?0:4;t.setUint32(e+c,i,r),t.setUint32(e+d,a,r)}var sr,Fi=D(()=>{yn();sr=class extends Ht{constructor(e,n,r,o){super(),this.blockLen=e,this.outputLen=n,this.padOffset=r,this.isLE=o,this.finished=!1,this.length=0,this.pos=0,this.destroyed=!1,this.buffer=new Uint8Array(e),this.view=or(this.buffer)}update(e){if(this.destroyed)throw new Error("instance is destroyed");let{view:n,buffer:r,blockLen:o,finished:s}=this;if(s)throw new Error("digest() was already called");e=bn(e);let i=e.length;for(let a=0;a<i;){let c=Math.min(o-this.pos,i-a);if(c===o){let d=or(e);for(;o<=i-a;a+=o)this.process(d,a);continue}r.set(e.subarray(a,a+c),this.pos),this.pos+=c,a+=c,this.pos===o&&(this.process(n,0),this.pos=0)}return this.length+=e.length,this.roundClean(),this}digestInto(e){if(this.destroyed)throw new Error("instance is destroyed");if(!(e instanceof Uint8Array)||e.length<this.outputLen)throw new Error("_Sha2: Invalid output buffer");if(this.finished)throw new Error("digest() was already called");this.finished=!0;let{buffer:n,view:r,blockLen:o,isLE:s}=this,{pos:i}=this;n[i++]=128,this.buffer.subarray(i).fill(0),this.padOffset>o-i&&(this.process(r,0),i=0);for(let c=i;c<o;c++)n[c]=0;Nl(r,o-8,BigInt(this.length*8),s),this.process(r,0);let a=or(e);this.get().forEach((c,d)=>a.setUint32(4*d,c,s))}digest(){let{buffer:e,outputLen:n}=this;this.digestInto(e);let r=e.slice(0,n);return this.destroy(),r}_cloneInto(e){e||(e=new this.constructor),e.set(...this.get());let{blockLen:n,buffer:r,length:o,finished:s,destroyed:i,pos:a}=this;return e.length=o,e.pos=a,e.finished=s,e.destroyed=i,o%n&&e.buffer.set(r),e}}});var Pl,Fl,jl,st,it,To,at,ir=D(()=>{Fi();yn();Pl=(t,e,n)=>t&e^~t&n,Fl=(t,e,n)=>t&e^t&n^e&n,jl=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),st=new Uint32Array([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]),it=new Uint32Array(64),To=class extends sr{constructor(){super(64,32,8,!1),this.A=st[0]|0,this.B=st[1]|0,this.C=st[2]|0,this.D=st[3]|0,this.E=st[4]|0,this.F=st[5]|0,this.G=st[6]|0,this.H=st[7]|0}get(){let{A:e,B:n,C:r,D:o,E:s,F:i,G:a,H:c}=this;return[e,n,r,o,s,i,a,c]}set(e,n,r,o,s,i,a,c){this.A=e|0,this.B=n|0,this.C=r|0,this.D=o|0,this.E=s|0,this.F=i|0,this.G=a|0,this.H=c|0}process(e,n){for(let u=0;u<16;u++,n+=4)it[u]=e.getUint32(n,!1);for(let u=16;u<64;u++){let h=it[u-15],p=it[u-2],m=Ae(h,7)^Ae(h,18)^h>>>3,b=Ae(p,17)^Ae(p,19)^p>>>10;it[u]=b+it[u-7]+m+it[u-16]|0}let{A:r,B:o,C:s,D:i,E:a,F:c,G:d,H:l}=this;for(let u=0;u<64;u++){let h=Ae(a,6)^Ae(a,11)^Ae(a,25),p=l+h+Pl(a,c,d)+jl[u]+it[u]|0,b=(Ae(r,2)^Ae(r,13)^Ae(r,22))+Fl(r,o,s)|0;l=d,d=c,c=a,a=i+p|0,i=s,s=o,o=r,r=p+b|0}r=r+this.A|0,o=o+this.B|0,s=s+this.C|0,i=i+this.D|0,a=a+this.E|0,c=c+this.F|0,d=d+this.G|0,l=l+this.H|0,this.set(r,o,s,i,a,c,d,l)}roundClean(){it.fill(0)}destroy(){this.set(0,0,0,0,0,0,0,0),this.buffer.fill(0)}},at=Ni(()=>new To)});function It(t){if(!Number.isSafeInteger(t))throw new Error(`Wrong integer: ${t}`)}function Ie(...t){let e=(o,s)=>i=>o(s(i)),n=Array.from(t).reverse().reduce((o,s)=>o?e(o,s.encode):s.encode,void 0),r=t.reduce((o,s)=>o?e(o,s.decode):s.decode,void 0);return{encode:n,decode:r}}function ze(t){return{encode:e=>{if(!Array.isArray(e)||e.length&&typeof e[0]!="number")throw new Error("alphabet.encode input should be an array of numbers");return e.map(n=>{if(It(n),n<0||n>=t.length)throw new Error(`Digit index outside alphabet: ${n} (alphabet: ${t.length})`);return t[n]})},decode:e=>{if(!Array.isArray(e)||e.length&&typeof e[0]!="string")throw new Error("alphabet.decode input should be array of strings");return e.map(n=>{if(typeof n!="string")throw new Error(`alphabet.decode: not string element=${n}`);let r=t.indexOf(n);if(r===-1)throw new Error(`Unknown letter: "${n}". Allowed: ${t}`);return r})}}}function We(t=""){if(typeof t!="string")throw new Error("join separator should be string");return{encode:e=>{if(!Array.isArray(e)||e.length&&typeof e[0]!="string")throw new Error("join.encode input should be array of strings");for(let n of e)if(typeof n!="string")throw new Error(`join.encode: non-string input=${n}`);return e.join(t)},decode:e=>{if(typeof e!="string")throw new Error("join.decode input should be string");return e.split(t)}}}function lr(t,e="="){if(It(t),typeof e!="string")throw new Error("padding chr should be string");return{encode(n){if(!Array.isArray(n)||n.length&&typeof n[0]!="string")throw new Error("padding.encode input should be array of strings");for(let r of n)if(typeof r!="string")throw new Error(`padding.encode: non-string input=${r}`);for(;n.length*t%8;)n.push(e);return n},decode(n){if(!Array.isArray(n)||n.length&&typeof n[0]!="string")throw new Error("padding.encode input should be array of strings");for(let o of n)if(typeof o!="string")throw new Error(`padding.decode: non-string input=${o}`);let r=n.length;if(r*t%8)throw new Error("Invalid padding: string should have whole number of bytes");for(;r>0&&n[r-1]===e;r--)if(!((r-1)*t%8))throw new Error("Invalid padding: string has too much padding");return n.slice(0,r)}}}function qi(t){if(typeof t!="function")throw new Error("normalize fn should be function");return{encode:e=>e,decode:e=>t(e)}}function ji(t,e,n){if(e<2)throw new Error(`convertRadix: wrong from=${e}, base cannot be less than 2`);if(n<2)throw new Error(`convertRadix: wrong to=${n}, base cannot be less than 2`);if(!Array.isArray(t))throw new Error("convertRadix: data should be array");if(!t.length)return[];let r=0,o=[],s=Array.from(t);for(s.forEach(i=>{if(It(i),i<0||i>=e)throw new Error(`Wrong integer: ${i}`)});;){let i=0,a=!0;for(let c=r;c<s.length;c++){let d=s[c],l=e*i+d;if(!Number.isSafeInteger(l)||e*i/e!==i||l-d!==e*i)throw new Error("convertRadix: carry overflow");if(i=l%n,s[c]=Math.floor(l/n),!Number.isSafeInteger(s[c])||s[c]*n+i!==l)throw new Error("convertRadix: carry overflow");if(a)s[c]?a=!1:r=c;else continue}if(o.push(i),a)break}for(let i=0;i<t.length-1&&t[i]===0;i++)o.push(0);return o.reverse()}function So(t,e,n,r){if(!Array.isArray(t))throw new Error("convertRadix2: data should be array");if(e<=0||e>32)throw new Error(`convertRadix2: wrong from=${e}`);if(n<=0||n>32)throw new Error(`convertRadix2: wrong to=${n}`);if(ar(e,n)>32)throw new Error(`convertRadix2: carry overflow from=${e} to=${n} carryBits=${ar(e,n)}`);let o=0,s=0,i=2**n-1,a=[];for(let c of t){if(It(c),c>=2**e)throw new Error(`convertRadix2: invalid data word=${c} from=${e}`);if(o=o<<e|c,s+e>32)throw new Error(`convertRadix2: carry overflow pos=${s} from=${e}`);for(s+=e;s>=n;s-=n)a.push((o>>s-n&i)>>>0);o&=2**s-1}if(o=o<<n-s&i,!r&&s>=e)throw new Error("Excess padding");if(!r&&o)throw new Error(`Non-zero padding: ${o}`);return r&&s>0&&a.push(o>>>0),a}function zl(t){return It(t),{encode:e=>{if(!(e instanceof Uint8Array))throw new Error("radix.encode input should be Uint8Array");return ji(Array.from(e),2**8,t)},decode:e=>{if(!Array.isArray(e)||e.length&&typeof e[0]!="number")throw new Error("radix.decode input should be array of strings");return Uint8Array.from(ji(e,t,2**8))}}}function ct(t,e=!1){if(It(t),t<=0||t>32)throw new Error("radix2: bits should be in (0..32]");if(ar(8,t)>32||ar(t,8)>32)throw new Error("radix2: carry overflow");return{encode:n=>{if(!(n instanceof Uint8Array))throw new Error("radix2.encode input should be Uint8Array");return So(Array.from(n),8,t,!e)},decode:n=>{if(!Array.isArray(n)||n.length&&typeof n[0]!="number")throw new Error("radix2.decode input should be array of strings");return Uint8Array.from(So(n,t,8,e))}}}function zi(t){if(typeof t!="function")throw new Error("unsafeWrapper fn should be function");return function(...e){try{return t.apply(null,e)}catch{}}}function Wl(t,e){if(It(t),typeof e!="function")throw new Error("checksum fn should be function");return{encode(n){if(!(n instanceof Uint8Array))throw new Error("checksum.encode: input should be Uint8Array");let r=e(n).slice(0,t),o=new Uint8Array(n.length+t);return o.set(n),o.set(r,n.length),o},decode(n){if(!(n instanceof Uint8Array))throw new Error("checksum.decode: input should be Uint8Array");let r=n.slice(0,-t),o=e(r).slice(0,t),s=n.slice(-t);for(let i=0;i<t;i++)if(o[i]!==s[i])throw new Error("Invalid checksum");return r}}}function gn(t){let e=t>>25,n=(t&33554431)<<5;for(let r=0;r<Gi.length;r++)(e>>r&1)===1&&(n^=Gi[r]);return n}function Ki(t,e,n=1){let r=t.length,o=1;for(let s=0;s<r;s++){let i=t.charCodeAt(s);if(i<33||i>126)throw new Error(`Invalid prefix (${t})`);o=gn(o)^i>>5}o=gn(o);for(let s=0;s<r;s++)o=gn(o)^t.charCodeAt(s)&31;for(let s of e)o=gn(o)^s;for(let s=0;s<6;s++)o=gn(o);return o^=n,Lo.encode(So([o%2**30],30,5,!1))}function Yi(t){let e=t==="bech32"?1:734539939,n=ct(5),r=n.decode,o=n.encode,s=zi(r);function i(l,u,h=90){if(typeof l!="string")throw new Error(`bech32.encode prefix should be string, not ${typeof l}`);if(!Array.isArray(u)||u.length&&typeof u[0]!="number")throw new Error(`bech32.encode words should be array of numbers, not ${typeof u}`);let p=l.length+7+u.length;if(h!==!1&&p>h)throw new TypeError(`Length ${p} exceeds limit ${h}`);return l=l.toLowerCase(),`${l}1${Lo.encode(u)}${Ki(l,u,e)}`}function a(l,u=90){if(typeof l!="string")throw new Error(`bech32.decode input should be string, not ${typeof l}`);if(l.length<8||u!==!1&&l.length>u)throw new TypeError(`Wrong string length: ${l.length} (${l}). Expected (8..${u})`);let h=l.toLowerCase();if(l!==h&&l!==l.toUpperCase())throw new Error("String must be lowercase or uppercase");l=h;let p=l.lastIndexOf("1");if(p===0||p===-1)throw new Error('Letter "1" must be present between prefix and data only');let m=l.slice(0,p),b=l.slice(p+1);if(b.length<6)throw new Error("Data must be at least 6 characters long");let g=Lo.decode(b).slice(0,-6),k=Ki(m,g,e);if(!b.endsWith(k))throw new Error(`Invalid checksum in ${l}: expected "${k}"`);return{prefix:m,words:g}}let c=zi(a);function d(l){let{prefix:u,words:h}=a(l,!1);return{prefix:u,words:h,bytes:r(h)}}return{encode:i,decode:a,decodeToBytes:d,decodeUnsafe:c,fromWords:r,fromWordsUnsafe:s,toWords:o}}var Vi,ar,Gl,Kl,Wh,Gh,Xt,ql,_o,cr,Kh,qh,Wi,Vl,Zi,Lo,Gi,ue,Vh,Zl,Yl,Xl,Zh,wn=D(()=>{Vi=(t,e)=>e?Vi(e,t%e):t,ar=(t,e)=>t+(e-Vi(t,e));Gl=Ie(ct(4),ze("0123456789ABCDEF"),We("")),Kl=Ie(ct(5),ze("ABCDEFGHIJKLMNOPQRSTUVWXYZ234567"),lr(5),We("")),Wh=Ie(ct(5),ze("0123456789ABCDEFGHIJKLMNOPQRSTUV"),lr(5),We("")),Gh=Ie(ct(5),ze("0123456789ABCDEFGHJKMNPQRSTVWXYZ"),We(""),qi(t=>t.toUpperCase().replace(/O/g,"0").replace(/[IL]/g,"1"))),Xt=Ie(ct(6),ze("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"),lr(6),We("")),ql=Ie(ct(6),ze("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"),lr(6),We("")),_o=t=>Ie(zl(58),ze(t),We("")),cr=_o("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"),Kh=_o("123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"),qh=_o("rpshnaf39wBUDNEGHJKLM4PQRST7VWXYZ2bcdeCg65jkm8oFqi1tuvAxyz"),Wi=[0,2,3,5,6,7,9,10,11],Vl={encode(t){let e="";for(let n=0;n<t.length;n+=8){let r=t.subarray(n,n+8);e+=cr.encode(r).padStart(Wi[r.length],"1")}return e},decode(t){let e=[];for(let n=0;n<t.length;n+=11){let r=t.slice(n,n+11),o=Wi.indexOf(r.length),s=cr.decode(r);for(let i=0;i<s.length-o;i++)if(s[i]!==0)throw new Error("base58xmr: wrong padding");e=e.concat(Array.from(s.slice(s.length-o)))}return Uint8Array.from(e)}},Zi=t=>Ie(Wl(4,e=>t(t(e))),cr),Lo=Ie(ze("qpzry9x8gf2tvdw0s3jn54khce6mua7l"),We("")),Gi=[996825010,642813549,513874426,1027748829,705979059];ue=Yi("bech32"),Vh=Yi("bech32m"),Zl={encode:t=>new TextDecoder().decode(t),decode:t=>new TextEncoder().encode(t)},Yl=Ie(ct(4),ze("0123456789abcdef"),We(""),qi(t=>{if(typeof t!="string"||t.length%2)throw new TypeError(`hex.decode: expected string, got ${typeof t} with length ${t.length}`);return t.toLowerCase()})),Xl={utf8:Zl,hex:Yl,base16:Gl,base32:Kl,base64:Xt,base64url:ql,base58:cr,base58xmr:Vl},Zh=`Invalid encoding type. Available types: ${Object.keys(Xl).join(", ")}`});var Xi=ie(ur=>{"use strict";Object.defineProperty(ur,"__esModule",{value:!0});ur.wordlist=void 0;ur.wordlist=`abandon
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
`)});var xn=ie(ce=>{"use strict";Object.defineProperty(ce,"__esModule",{value:!0});ce.output=ce.exists=ce.hash=ce.bytes=ce.bool=ce.number=void 0;function dr(t){if(!Number.isSafeInteger(t)||t<0)throw new Error(`Wrong positive integer: ${t}`)}ce.number=dr;function Ji(t){if(typeof t!="boolean")throw new Error(`Expected boolean, not ${t}`)}ce.bool=Ji;function Bo(t,...e){if(!(t instanceof Uint8Array))throw new TypeError("Expected Uint8Array");if(e.length>0&&!e.includes(t.length))throw new TypeError(`Expected Uint8Array of length ${e}, not of length=${t.length}`)}ce.bytes=Bo;function Qi(t){if(typeof t!="function"||typeof t.create!="function")throw new Error("Hash should be wrapped by utils.wrapConstructor");dr(t.outputLen),dr(t.blockLen)}ce.hash=Qi;function ea(t,e=!0){if(t.destroyed)throw new Error("Hash instance has been destroyed");if(e&&t.finished)throw new Error("Hash#digest() has already been called")}ce.exists=ea;function ta(t,e){Bo(t);let n=e.outputLen;if(t.length<n)throw new Error(`digestInto() expects output buffer of length at least ${n}`)}ce.output=ta;var Jl={number:dr,bool:Ji,bytes:Bo,hash:Qi,exists:ea,output:ta};ce.default=Jl});var na=ie(fr=>{"use strict";Object.defineProperty(fr,"__esModule",{value:!0});fr.crypto=void 0;fr.crypto={node:void 0,web:typeof self=="object"&&"crypto"in self?self.crypto:void 0}});var Ct=ie(R=>{"use strict";Object.defineProperty(R,"__esModule",{value:!0});R.randomBytes=R.wrapConstructorWithOpts=R.wrapConstructor=R.checkOpts=R.Hash=R.concatBytes=R.toBytes=R.utf8ToBytes=R.asyncLoop=R.nextTick=R.hexToBytes=R.bytesToHex=R.isLE=R.rotr=R.createView=R.u32=R.u8=void 0;var hr=na(),Ql=t=>new Uint8Array(t.buffer,t.byteOffset,t.byteLength);R.u8=Ql;var eu=t=>new Uint32Array(t.buffer,t.byteOffset,Math.floor(t.byteLength/4));R.u32=eu;var tu=t=>new DataView(t.buffer,t.byteOffset,t.byteLength);R.createView=tu;var nu=(t,e)=>t<<32-e|t>>>e;R.rotr=nu;R.isLE=new Uint8Array(new Uint32Array([287454020]).buffer)[0]===68;if(!R.isLE)throw new Error("Non little-endian hardware is not supported");var ru=Array.from({length:256},(t,e)=>e.toString(16).padStart(2,"0"));function ou(t){if(!(t instanceof Uint8Array))throw new Error("Uint8Array expected");let e="";for(let n=0;n<t.length;n++)e+=ru[t[n]];return e}R.bytesToHex=ou;function su(t){if(typeof t!="string")throw new TypeError("hexToBytes: expected string, got "+typeof t);if(t.length%2)throw new Error("hexToBytes: received invalid unpadded hex");let e=new Uint8Array(t.length/2);for(let n=0;n<e.length;n++){let r=n*2,o=t.slice(r,r+2),s=Number.parseInt(o,16);if(Number.isNaN(s)||s<0)throw new Error("Invalid byte sequence");e[n]=s}return e}R.hexToBytes=su;var iu=async()=>{};R.nextTick=iu;async function au(t,e,n){let r=Date.now();for(let o=0;o<t;o++){n(o);let s=Date.now()-r;s>=0&&s<e||(await(0,R.nextTick)(),r+=s)}}R.asyncLoop=au;function ra(t){if(typeof t!="string")throw new TypeError(`utf8ToBytes expected string, got ${typeof t}`);return new TextEncoder().encode(t)}R.utf8ToBytes=ra;function Io(t){if(typeof t=="string"&&(t=ra(t)),!(t instanceof Uint8Array))throw new TypeError(`Expected input type is Uint8Array (got ${typeof t})`);return t}R.toBytes=Io;function cu(...t){if(!t.every(r=>r instanceof Uint8Array))throw new Error("Uint8Array list expected");if(t.length===1)return t[0];let e=t.reduce((r,o)=>r+o.length,0),n=new Uint8Array(e);for(let r=0,o=0;r<t.length;r++){let s=t[r];n.set(s,o),o+=s.length}return n}R.concatBytes=cu;var Ho=class{clone(){return this._cloneInto()}};R.Hash=Ho;var lu=t=>Object.prototype.toString.call(t)==="[object Object]"&&t.constructor===Object;function uu(t,e){if(e!==void 0&&(typeof e!="object"||!lu(e)))throw new TypeError("Options should be object or undefined");return Object.assign(t,e)}R.checkOpts=uu;function du(t){let e=r=>t().update(Io(r)).digest(),n=t();return e.outputLen=n.outputLen,e.blockLen=n.blockLen,e.create=()=>t(),e}R.wrapConstructor=du;function fu(t){let e=(r,o)=>t(o).update(Io(r)).digest(),n=t({});return e.outputLen=n.outputLen,e.blockLen=n.blockLen,e.create=r=>t(r),e}R.wrapConstructorWithOpts=fu;function hu(t=32){if(hr.crypto.web)return hr.crypto.web.getRandomValues(new Uint8Array(t));if(hr.crypto.node)return new Uint8Array(hr.crypto.node.randomBytes(t).buffer);throw new Error("The environment doesn't have randomBytes function")}R.randomBytes=hu});var sa=ie(vn=>{"use strict";Object.defineProperty(vn,"__esModule",{value:!0});vn.hmac=void 0;var pr=xn(),oa=Ct(),mr=class extends oa.Hash{constructor(e,n){super(),this.finished=!1,this.destroyed=!1,pr.default.hash(e);let r=(0,oa.toBytes)(n);if(this.iHash=e.create(),typeof this.iHash.update!="function")throw new TypeError("Expected instance of class which extends utils.Hash");this.blockLen=this.iHash.blockLen,this.outputLen=this.iHash.outputLen;let o=this.blockLen,s=new Uint8Array(o);s.set(r.length>o?e.create().update(r).digest():r);for(let i=0;i<s.length;i++)s[i]^=54;this.iHash.update(s),this.oHash=e.create();for(let i=0;i<s.length;i++)s[i]^=106;this.oHash.update(s),s.fill(0)}update(e){return pr.default.exists(this),this.iHash.update(e),this}digestInto(e){pr.default.exists(this),pr.default.bytes(e,this.outputLen),this.finished=!0,this.iHash.digestInto(e),this.oHash.update(e),this.oHash.digestInto(e),this.destroy()}digest(){let e=new Uint8Array(this.oHash.outputLen);return this.digestInto(e),e}_cloneInto(e){e||(e=Object.create(Object.getPrototypeOf(this),{}));let{oHash:n,iHash:r,finished:o,destroyed:s,blockLen:i,outputLen:a}=this;return e=e,e.finished=o,e.destroyed=s,e.blockLen=i,e.outputLen=a,e.oHash=n._cloneInto(e.oHash),e.iHash=r._cloneInto(e.iHash),e}destroy(){this.destroyed=!0,this.oHash.destroy(),this.iHash.destroy()}},pu=(t,e,n)=>new mr(t,e).update(n).digest();vn.hmac=pu;vn.hmac.create=(t,e)=>new mr(t,e)});var ca=ie(Qt=>{"use strict";Object.defineProperty(Qt,"__esModule",{value:!0});Qt.pbkdf2Async=Qt.pbkdf2=void 0;var br=xn(),mu=sa(),Jt=Ct();function ia(t,e,n,r){br.default.hash(t);let o=(0,Jt.checkOpts)({dkLen:32,asyncTick:10},r),{c:s,dkLen:i,asyncTick:a}=o;if(br.default.number(s),br.default.number(i),br.default.number(a),s<1)throw new Error("PBKDF2: iterations (c) should be >= 1");let c=(0,Jt.toBytes)(e),d=(0,Jt.toBytes)(n),l=new Uint8Array(i),u=mu.hmac.create(t,c),h=u._cloneInto().update(d);return{c:s,dkLen:i,asyncTick:a,DK:l,PRF:u,PRFSalt:h}}function aa(t,e,n,r,o){return t.destroy(),e.destroy(),r&&r.destroy(),o.fill(0),n}function bu(t,e,n,r){let{c:o,dkLen:s,DK:i,PRF:a,PRFSalt:c}=ia(t,e,n,r),d,l=new Uint8Array(4),u=(0,Jt.createView)(l),h=new Uint8Array(a.outputLen);for(let p=1,m=0;m<s;p++,m+=a.outputLen){let b=i.subarray(m,m+a.outputLen);u.setInt32(0,p,!1),(d=c._cloneInto(d)).update(l).digestInto(h),b.set(h.subarray(0,b.length));for(let g=1;g<o;g++){a._cloneInto(d).update(h).digestInto(h);for(let k=0;k<b.length;k++)b[k]^=h[k]}}return aa(a,c,i,d,h)}Qt.pbkdf2=bu;async function yu(t,e,n,r){let{c:o,dkLen:s,asyncTick:i,DK:a,PRF:c,PRFSalt:d}=ia(t,e,n,r),l,u=new Uint8Array(4),h=(0,Jt.createView)(u),p=new Uint8Array(c.outputLen);for(let m=1,b=0;b<s;m++,b+=c.outputLen){let g=a.subarray(b,b+c.outputLen);h.setInt32(0,m,!1),(l=d._cloneInto(l)).update(u).digestInto(p),g.set(p.subarray(0,g.length)),await(0,Jt.asyncLoop)(o-1,i,k=>{c._cloneInto(l).update(p).digestInto(p);for(let L=0;L<g.length;L++)g[L]^=p[L]})}return aa(c,d,a,l,p)}Qt.pbkdf2Async=yu});var Ro=ie(yr=>{"use strict";Object.defineProperty(yr,"__esModule",{value:!0});yr.SHA2=void 0;var Co=xn(),En=Ct();function gu(t,e,n,r){if(typeof t.setBigUint64=="function")return t.setBigUint64(e,n,r);let o=BigInt(32),s=BigInt(4294967295),i=Number(n>>o&s),a=Number(n&s),c=r?4:0,d=r?0:4;t.setUint32(e+c,i,r),t.setUint32(e+d,a,r)}var Mo=class extends En.Hash{constructor(e,n,r,o){super(),this.blockLen=e,this.outputLen=n,this.padOffset=r,this.isLE=o,this.finished=!1,this.length=0,this.pos=0,this.destroyed=!1,this.buffer=new Uint8Array(e),this.view=(0,En.createView)(this.buffer)}update(e){Co.default.exists(this);let{view:n,buffer:r,blockLen:o}=this;e=(0,En.toBytes)(e);let s=e.length;for(let i=0;i<s;){let a=Math.min(o-this.pos,s-i);if(a===o){let c=(0,En.createView)(e);for(;o<=s-i;i+=o)this.process(c,i);continue}r.set(e.subarray(i,i+a),this.pos),this.pos+=a,i+=a,this.pos===o&&(this.process(n,0),this.pos=0)}return this.length+=e.length,this.roundClean(),this}digestInto(e){Co.default.exists(this),Co.default.output(e,this),this.finished=!0;let{buffer:n,view:r,blockLen:o,isLE:s}=this,{pos:i}=this;n[i++]=128,this.buffer.subarray(i).fill(0),this.padOffset>o-i&&(this.process(r,0),i=0);for(let u=i;u<o;u++)n[u]=0;gu(r,o-8,BigInt(this.length*8),s),this.process(r,0);let a=(0,En.createView)(e),c=this.outputLen;if(c%4)throw new Error("_sha2: outputLen should be aligned to 32bit");let d=c/4,l=this.get();if(d>l.length)throw new Error("_sha2: outputLen bigger than state");for(let u=0;u<d;u++)a.setUint32(4*u,l[u],s)}digest(){let{buffer:e,outputLen:n}=this;this.digestInto(e);let r=e.slice(0,n);return this.destroy(),r}_cloneInto(e){e||(e=new this.constructor),e.set(...this.get());let{blockLen:n,buffer:r,length:o,finished:s,destroyed:i,pos:a}=this;return e.length=o,e.pos=a,e.finished=s,e.destroyed=i,o%n&&e.buffer.set(r),e}};yr.SHA2=Mo});var la=ie(en=>{"use strict";Object.defineProperty(en,"__esModule",{value:!0});en.sha224=en.sha256=void 0;var wu=Ro(),we=Ct(),xu=(t,e,n)=>t&e^~t&n,vu=(t,e,n)=>t&e^t&n^e&n,Eu=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),lt=new Uint32Array([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]),ut=new Uint32Array(64),gr=class extends wu.SHA2{constructor(){super(64,32,8,!1),this.A=lt[0]|0,this.B=lt[1]|0,this.C=lt[2]|0,this.D=lt[3]|0,this.E=lt[4]|0,this.F=lt[5]|0,this.G=lt[6]|0,this.H=lt[7]|0}get(){let{A:e,B:n,C:r,D:o,E:s,F:i,G:a,H:c}=this;return[e,n,r,o,s,i,a,c]}set(e,n,r,o,s,i,a,c){this.A=e|0,this.B=n|0,this.C=r|0,this.D=o|0,this.E=s|0,this.F=i|0,this.G=a|0,this.H=c|0}process(e,n){for(let u=0;u<16;u++,n+=4)ut[u]=e.getUint32(n,!1);for(let u=16;u<64;u++){let h=ut[u-15],p=ut[u-2],m=(0,we.rotr)(h,7)^(0,we.rotr)(h,18)^h>>>3,b=(0,we.rotr)(p,17)^(0,we.rotr)(p,19)^p>>>10;ut[u]=b+ut[u-7]+m+ut[u-16]|0}let{A:r,B:o,C:s,D:i,E:a,F:c,G:d,H:l}=this;for(let u=0;u<64;u++){let h=(0,we.rotr)(a,6)^(0,we.rotr)(a,11)^(0,we.rotr)(a,25),p=l+h+xu(a,c,d)+Eu[u]+ut[u]|0,b=((0,we.rotr)(r,2)^(0,we.rotr)(r,13)^(0,we.rotr)(r,22))+vu(r,o,s)|0;l=d,d=c,c=a,a=i+p|0,i=s,s=o,o=r,r=p+b|0}r=r+this.A|0,o=o+this.B|0,s=s+this.C|0,i=i+this.D|0,a=a+this.E|0,c=c+this.F|0,d=d+this.G|0,l=l+this.H|0,this.set(r,o,s,i,a,c,d,l)}roundClean(){ut.fill(0)}destroy(){this.set(0,0,0,0,0,0,0,0),this.buffer.fill(0)}},Do=class extends gr{constructor(){super(),this.A=-1056596264,this.B=914150663,this.C=812702999,this.D=-150054599,this.E=-4191439,this.F=1750603025,this.G=1694076839,this.H=-1090891868,this.outputLen=28}};en.sha256=(0,we.wrapConstructor)(()=>new gr);en.sha224=(0,we.wrapConstructor)(()=>new Do)});var fa=ie(xe=>{"use strict";Object.defineProperty(xe,"__esModule",{value:!0});xe.add=xe.toBig=xe.split=xe.fromBig=void 0;var wr=BigInt(2**32-1),Uo=BigInt(32);function $o(t,e=!1){return e?{h:Number(t&wr),l:Number(t>>Uo&wr)}:{h:Number(t>>Uo&wr)|0,l:Number(t&wr)|0}}xe.fromBig=$o;function ua(t,e=!1){let n=new Uint32Array(t.length),r=new Uint32Array(t.length);for(let o=0;o<t.length;o++){let{h:s,l:i}=$o(t[o],e);[n[o],r[o]]=[s,i]}return[n,r]}xe.split=ua;var ku=(t,e)=>BigInt(t>>>0)<<Uo|BigInt(e>>>0);xe.toBig=ku;var Au=(t,e,n)=>t>>>n,Tu=(t,e,n)=>t<<32-n|e>>>n,Su=(t,e,n)=>t>>>n|e<<32-n,Lu=(t,e,n)=>t<<32-n|e>>>n,_u=(t,e,n)=>t<<64-n|e>>>n-32,Bu=(t,e,n)=>t>>>n-32|e<<64-n,Hu=(t,e)=>e,Iu=(t,e)=>t,Cu=(t,e,n)=>t<<n|e>>>32-n,Mu=(t,e,n)=>e<<n|t>>>32-n,Ru=(t,e,n)=>e<<n-32|t>>>64-n,Du=(t,e,n)=>t<<n-32|e>>>64-n;function da(t,e,n,r){let o=(e>>>0)+(r>>>0);return{h:t+n+(o/2**32|0)|0,l:o|0}}xe.add=da;var Uu=(t,e,n)=>(t>>>0)+(e>>>0)+(n>>>0),$u=(t,e,n,r)=>e+n+r+(t/2**32|0)|0,Ou=(t,e,n,r)=>(t>>>0)+(e>>>0)+(n>>>0)+(r>>>0),Nu=(t,e,n,r,o)=>e+n+r+o+(t/2**32|0)|0,Pu=(t,e,n,r,o)=>(t>>>0)+(e>>>0)+(n>>>0)+(r>>>0)+(o>>>0),Fu=(t,e,n,r,o,s)=>e+n+r+o+s+(t/2**32|0)|0,ju={fromBig:$o,split:ua,toBig:xe.toBig,shrSH:Au,shrSL:Tu,rotrSH:Su,rotrSL:Lu,rotrBH:_u,rotrBL:Bu,rotr32H:Hu,rotr32L:Iu,rotlSH:Cu,rotlSL:Mu,rotlBH:Ru,rotlBL:Du,add:da,add3L:Uu,add3H:$u,add4L:Ou,add4H:Nu,add5H:Fu,add5L:Pu};xe.default=ju});var ha=ie(ve=>{"use strict";Object.defineProperty(ve,"__esModule",{value:!0});ve.sha384=ve.sha512_256=ve.sha512_224=ve.sha512=ve.SHA512=void 0;var zu=Ro(),C=fa(),xr=Ct(),[Wu,Gu]=C.default.split(["0x428a2f98d728ae22","0x7137449123ef65cd","0xb5c0fbcfec4d3b2f","0xe9b5dba58189dbbc","0x3956c25bf348b538","0x59f111f1b605d019","0x923f82a4af194f9b","0xab1c5ed5da6d8118","0xd807aa98a3030242","0x12835b0145706fbe","0x243185be4ee4b28c","0x550c7dc3d5ffb4e2","0x72be5d74f27b896f","0x80deb1fe3b1696b1","0x9bdc06a725c71235","0xc19bf174cf692694","0xe49b69c19ef14ad2","0xefbe4786384f25e3","0x0fc19dc68b8cd5b5","0x240ca1cc77ac9c65","0x2de92c6f592b0275","0x4a7484aa6ea6e483","0x5cb0a9dcbd41fbd4","0x76f988da831153b5","0x983e5152ee66dfab","0xa831c66d2db43210","0xb00327c898fb213f","0xbf597fc7beef0ee4","0xc6e00bf33da88fc2","0xd5a79147930aa725","0x06ca6351e003826f","0x142929670a0e6e70","0x27b70a8546d22ffc","0x2e1b21385c26c926","0x4d2c6dfc5ac42aed","0x53380d139d95b3df","0x650a73548baf63de","0x766a0abb3c77b2a8","0x81c2c92e47edaee6","0x92722c851482353b","0xa2bfe8a14cf10364","0xa81a664bbc423001","0xc24b8b70d0f89791","0xc76c51a30654be30","0xd192e819d6ef5218","0xd69906245565a910","0xf40e35855771202a","0x106aa07032bbd1b8","0x19a4c116b8d2d0c8","0x1e376c085141ab53","0x2748774cdf8eeb99","0x34b0bcb5e19b48a8","0x391c0cb3c5c95a63","0x4ed8aa4ae3418acb","0x5b9cca4f7763e373","0x682e6ff3d6b2b8a3","0x748f82ee5defb2fc","0x78a5636f43172f60","0x84c87814a1f0ab72","0x8cc702081a6439ec","0x90befffa23631e28","0xa4506cebde82bde9","0xbef9a3f7b2c67915","0xc67178f2e372532b","0xca273eceea26619c","0xd186b8c721c0c207","0xeada7dd6cde0eb1e","0xf57d4f7fee6ed178","0x06f067aa72176fba","0x0a637dc5a2c898a6","0x113f9804bef90dae","0x1b710b35131c471b","0x28db77f523047d84","0x32caab7b40c72493","0x3c9ebe0a15c9bebc","0x431d67c49c100d4c","0x4cc5d4becb3e42b6","0x597f299cfc657e2a","0x5fcb6fab3ad6faec","0x6c44198c4a475817"].map(t=>BigInt(t))),dt=new Uint32Array(80),ft=new Uint32Array(80),Mt=class extends zu.SHA2{constructor(){super(128,64,16,!1),this.Ah=1779033703,this.Al=-205731576,this.Bh=-1150833019,this.Bl=-2067093701,this.Ch=1013904242,this.Cl=-23791573,this.Dh=-1521486534,this.Dl=1595750129,this.Eh=1359893119,this.El=-1377402159,this.Fh=-1694144372,this.Fl=725511199,this.Gh=528734635,this.Gl=-79577749,this.Hh=1541459225,this.Hl=327033209}get(){let{Ah:e,Al:n,Bh:r,Bl:o,Ch:s,Cl:i,Dh:a,Dl:c,Eh:d,El:l,Fh:u,Fl:h,Gh:p,Gl:m,Hh:b,Hl:g}=this;return[e,n,r,o,s,i,a,c,d,l,u,h,p,m,b,g]}set(e,n,r,o,s,i,a,c,d,l,u,h,p,m,b,g){this.Ah=e|0,this.Al=n|0,this.Bh=r|0,this.Bl=o|0,this.Ch=s|0,this.Cl=i|0,this.Dh=a|0,this.Dl=c|0,this.Eh=d|0,this.El=l|0,this.Fh=u|0,this.Fl=h|0,this.Gh=p|0,this.Gl=m|0,this.Hh=b|0,this.Hl=g|0}process(e,n){for(let y=0;y<16;y++,n+=4)dt[y]=e.getUint32(n),ft[y]=e.getUint32(n+=4);for(let y=16;y<80;y++){let H=dt[y-15]|0,E=ft[y-15]|0,V=C.default.rotrSH(H,E,1)^C.default.rotrSH(H,E,8)^C.default.shrSH(H,E,7),S=C.default.rotrSL(H,E,1)^C.default.rotrSL(H,E,8)^C.default.shrSL(H,E,7),j=dt[y-2]|0,M=ft[y-2]|0,se=C.default.rotrSH(j,M,19)^C.default.rotrBH(j,M,61)^C.default.shrSH(j,M,6),fe=C.default.rotrSL(j,M,19)^C.default.rotrBL(j,M,61)^C.default.shrSL(j,M,6),oe=C.default.add4L(S,fe,ft[y-7],ft[y-16]),Ne=C.default.add4H(oe,V,se,dt[y-7],dt[y-16]);dt[y]=Ne|0,ft[y]=oe|0}let{Ah:r,Al:o,Bh:s,Bl:i,Ch:a,Cl:c,Dh:d,Dl:l,Eh:u,El:h,Fh:p,Fl:m,Gh:b,Gl:g,Hh:k,Hl:L}=this;for(let y=0;y<80;y++){let H=C.default.rotrSH(u,h,14)^C.default.rotrSH(u,h,18)^C.default.rotrBH(u,h,41),E=C.default.rotrSL(u,h,14)^C.default.rotrSL(u,h,18)^C.default.rotrBL(u,h,41),V=u&p^~u&b,S=h&m^~h&g,j=C.default.add5L(L,E,S,Gu[y],ft[y]),M=C.default.add5H(j,k,H,V,Wu[y],dt[y]),se=j|0,fe=C.default.rotrSH(r,o,28)^C.default.rotrBH(r,o,34)^C.default.rotrBH(r,o,39),oe=C.default.rotrSL(r,o,28)^C.default.rotrBL(r,o,34)^C.default.rotrBL(r,o,39),Ne=r&s^r&a^s&a,kt=o&i^o&c^i&c;k=b|0,L=g|0,b=p|0,g=m|0,p=u|0,m=h|0,{h:u,l:h}=C.default.add(d|0,l|0,M|0,se|0),d=a|0,l=c|0,a=s|0,c=i|0,s=r|0,i=o|0;let At=C.default.add3L(se,oe,kt);r=C.default.add3H(At,M,fe,Ne),o=At|0}({h:r,l:o}=C.default.add(this.Ah|0,this.Al|0,r|0,o|0)),{h:s,l:i}=C.default.add(this.Bh|0,this.Bl|0,s|0,i|0),{h:a,l:c}=C.default.add(this.Ch|0,this.Cl|0,a|0,c|0),{h:d,l}=C.default.add(this.Dh|0,this.Dl|0,d|0,l|0),{h:u,l:h}=C.default.add(this.Eh|0,this.El|0,u|0,h|0),{h:p,l:m}=C.default.add(this.Fh|0,this.Fl|0,p|0,m|0),{h:b,l:g}=C.default.add(this.Gh|0,this.Gl|0,b|0,g|0),{h:k,l:L}=C.default.add(this.Hh|0,this.Hl|0,k|0,L|0),this.set(r,o,s,i,a,c,d,l,u,h,p,m,b,g,k,L)}roundClean(){dt.fill(0),ft.fill(0)}destroy(){this.buffer.fill(0),this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0)}};ve.SHA512=Mt;var Oo=class extends Mt{constructor(){super(),this.Ah=-1942145080,this.Al=424955298,this.Bh=1944164710,this.Bl=-1982016298,this.Ch=502970286,this.Cl=855612546,this.Dh=1738396948,this.Dl=1479516111,this.Eh=258812777,this.El=2077511080,this.Fh=2011393907,this.Fl=79989058,this.Gh=1067287976,this.Gl=1780299464,this.Hh=286451373,this.Hl=-1848208735,this.outputLen=28}},No=class extends Mt{constructor(){super(),this.Ah=573645204,this.Al=-64227540,this.Bh=-1621794909,this.Bl=-934517566,this.Ch=596883563,this.Cl=1867755857,this.Dh=-1774684391,this.Dl=1497426621,this.Eh=-1775747358,this.El=-1467023389,this.Fh=-1101128155,this.Fl=1401305490,this.Gh=721525244,this.Gl=746961066,this.Hh=246885852,this.Hl=-2117784414,this.outputLen=32}},Po=class extends Mt{constructor(){super(),this.Ah=-876896931,this.Al=-1056596264,this.Bh=1654270250,this.Bl=914150663,this.Ch=-1856437926,this.Cl=812702999,this.Dh=355462360,this.Dl=-150054599,this.Eh=1731405415,this.El=-4191439,this.Fh=-1900787065,this.Fl=1750603025,this.Gh=-619958771,this.Gl=1694076839,this.Hh=1203062813,this.Hl=-1090891868,this.outputLen=48}};ve.sha512=(0,xr.wrapConstructor)(()=>new Mt);ve.sha512_224=(0,xr.wrapConstructor)(()=>new Oo);ve.sha512_256=(0,xr.wrapConstructor)(()=>new No);ve.sha384=(0,xr.wrapConstructor)(()=>new Po)});var Ta=ie(A=>{"use strict";Object.defineProperty(A,"__esModule",{value:!0});A.bytes=A.stringToBytes=A.str=A.bytesToString=A.hex=A.utf8=A.bech32m=A.bech32=A.base58check=A.base58xmr=A.base58xrp=A.base58flickr=A.base58=A.base64url=A.base64=A.base32crockford=A.base32hex=A.base32=A.base16=A.utils=A.assertNumber=void 0;function ht(t){if(!Number.isSafeInteger(t))throw new Error(`Wrong integer: ${t}`)}A.assertNumber=ht;function Te(...t){let e=(o,s)=>i=>o(s(i)),n=Array.from(t).reverse().reduce((o,s)=>o?e(o,s.encode):s.encode,void 0),r=t.reduce((o,s)=>o?e(o,s.decode):s.decode,void 0);return{encode:n,decode:r}}function Ce(t){return{encode:e=>{if(!Array.isArray(e)||e.length&&typeof e[0]!="number")throw new Error("alphabet.encode input should be an array of numbers");return e.map(n=>{if(ht(n),n<0||n>=t.length)throw new Error(`Digit index outside alphabet: ${n} (alphabet: ${t.length})`);return t[n]})},decode:e=>{if(!Array.isArray(e)||e.length&&typeof e[0]!="string")throw new Error("alphabet.decode input should be array of strings");return e.map(n=>{if(typeof n!="string")throw new Error(`alphabet.decode: not string element=${n}`);let r=t.indexOf(n);if(r===-1)throw new Error(`Unknown letter: "${n}". Allowed: ${t}`);return r})}}}function Me(t=""){if(typeof t!="string")throw new Error("join separator should be string");return{encode:e=>{if(!Array.isArray(e)||e.length&&typeof e[0]!="string")throw new Error("join.encode input should be array of strings");for(let n of e)if(typeof n!="string")throw new Error(`join.encode: non-string input=${n}`);return e.join(t)},decode:e=>{if(typeof e!="string")throw new Error("join.decode input should be string");return e.split(t)}}}function Tn(t,e="="){if(ht(t),typeof e!="string")throw new Error("padding chr should be string");return{encode(n){if(!Array.isArray(n)||n.length&&typeof n[0]!="string")throw new Error("padding.encode input should be array of strings");for(let r of n)if(typeof r!="string")throw new Error(`padding.encode: non-string input=${r}`);for(;n.length*t%8;)n.push(e);return n},decode(n){if(!Array.isArray(n)||n.length&&typeof n[0]!="string")throw new Error("padding.encode input should be array of strings");for(let o of n)if(typeof o!="string")throw new Error(`padding.decode: non-string input=${o}`);let r=n.length;if(r*t%8)throw new Error("Invalid padding: string should have whole number of bytes");for(;r>0&&n[r-1]===e;r--)if(!((r-1)*t%8))throw new Error("Invalid padding: string has too much padding");return n.slice(0,r)}}}function wa(t){if(typeof t!="function")throw new Error("normalize fn should be function");return{encode:e=>e,decode:e=>t(e)}}function pa(t,e,n){if(e<2)throw new Error(`convertRadix: wrong from=${e}, base cannot be less than 2`);if(n<2)throw new Error(`convertRadix: wrong to=${n}, base cannot be less than 2`);if(!Array.isArray(t))throw new Error("convertRadix: data should be array");if(!t.length)return[];let r=0,o=[],s=Array.from(t);for(s.forEach(i=>{if(ht(i),i<0||i>=e)throw new Error(`Wrong integer: ${i}`)});;){let i=0,a=!0;for(let c=r;c<s.length;c++){let d=s[c],l=e*i+d;if(!Number.isSafeInteger(l)||e*i/e!==i||l-d!==e*i)throw new Error("convertRadix: carry overflow");if(i=l%n,s[c]=Math.floor(l/n),!Number.isSafeInteger(s[c])||s[c]*n+i!==l)throw new Error("convertRadix: carry overflow");if(a)s[c]?a=!1:r=c;else continue}if(o.push(i),a)break}for(let i=0;i<t.length-1&&t[i]===0;i++)o.push(0);return o.reverse()}var xa=(t,e)=>e?xa(e,t%e):t,vr=(t,e)=>t+(e-xa(t,e));function Fo(t,e,n,r){if(!Array.isArray(t))throw new Error("convertRadix2: data should be array");if(e<=0||e>32)throw new Error(`convertRadix2: wrong from=${e}`);if(n<=0||n>32)throw new Error(`convertRadix2: wrong to=${n}`);if(vr(e,n)>32)throw new Error(`convertRadix2: carry overflow from=${e} to=${n} carryBits=${vr(e,n)}`);let o=0,s=0,i=2**n-1,a=[];for(let c of t){if(ht(c),c>=2**e)throw new Error(`convertRadix2: invalid data word=${c} from=${e}`);if(o=o<<e|c,s+e>32)throw new Error(`convertRadix2: carry overflow pos=${s} from=${e}`);for(s+=e;s>=n;s-=n)a.push((o>>s-n&i)>>>0);o&=2**s-1}if(o=o<<n-s&i,!r&&s>=e)throw new Error("Excess padding");if(!r&&o)throw new Error(`Non-zero padding: ${o}`);return r&&s>0&&a.push(o>>>0),a}function va(t){return ht(t),{encode:e=>{if(!(e instanceof Uint8Array))throw new Error("radix.encode input should be Uint8Array");return pa(Array.from(e),2**8,t)},decode:e=>{if(!Array.isArray(e)||e.length&&typeof e[0]!="number")throw new Error("radix.decode input should be array of strings");return Uint8Array.from(pa(e,t,2**8))}}}function Ge(t,e=!1){if(ht(t),t<=0||t>32)throw new Error("radix2: bits should be in (0..32]");if(vr(8,t)>32||vr(t,8)>32)throw new Error("radix2: carry overflow");return{encode:n=>{if(!(n instanceof Uint8Array))throw new Error("radix2.encode input should be Uint8Array");return Fo(Array.from(n),8,t,!e)},decode:n=>{if(!Array.isArray(n)||n.length&&typeof n[0]!="number")throw new Error("radix2.decode input should be array of strings");return Uint8Array.from(Fo(n,t,8,e))}}}function ma(t){if(typeof t!="function")throw new Error("unsafeWrapper fn should be function");return function(...e){try{return t.apply(null,e)}catch{}}}function Ea(t,e){if(ht(t),typeof e!="function")throw new Error("checksum fn should be function");return{encode(n){if(!(n instanceof Uint8Array))throw new Error("checksum.encode: input should be Uint8Array");let r=e(n).slice(0,t),o=new Uint8Array(n.length+t);return o.set(n),o.set(r,n.length),o},decode(n){if(!(n instanceof Uint8Array))throw new Error("checksum.decode: input should be Uint8Array");let r=n.slice(0,-t),o=e(r).slice(0,t),s=n.slice(-t);for(let i=0;i<t;i++)if(o[i]!==s[i])throw new Error("Invalid checksum");return r}}}A.utils={alphabet:Ce,chain:Te,checksum:Ea,radix:va,radix2:Ge,join:Me,padding:Tn};A.base16=Te(Ge(4),Ce("0123456789ABCDEF"),Me(""));A.base32=Te(Ge(5),Ce("ABCDEFGHIJKLMNOPQRSTUVWXYZ234567"),Tn(5),Me(""));A.base32hex=Te(Ge(5),Ce("0123456789ABCDEFGHIJKLMNOPQRSTUV"),Tn(5),Me(""));A.base32crockford=Te(Ge(5),Ce("0123456789ABCDEFGHJKMNPQRSTVWXYZ"),Me(""),wa(t=>t.toUpperCase().replace(/O/g,"0").replace(/[IL]/g,"1")));A.base64=Te(Ge(6),Ce("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"),Tn(6),Me(""));A.base64url=Te(Ge(6),Ce("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"),Tn(6),Me(""));var zo=t=>Te(va(58),Ce(t),Me(""));A.base58=zo("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz");A.base58flickr=zo("123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ");A.base58xrp=zo("rpshnaf39wBUDNEGHJKLM4PQRST7VWXYZ2bcdeCg65jkm8oFqi1tuvAxyz");var ba=[0,2,3,5,6,7,9,10,11];A.base58xmr={encode(t){let e="";for(let n=0;n<t.length;n+=8){let r=t.subarray(n,n+8);e+=A.base58.encode(r).padStart(ba[r.length],"1")}return e},decode(t){let e=[];for(let n=0;n<t.length;n+=11){let r=t.slice(n,n+11),o=ba.indexOf(r.length),s=A.base58.decode(r);for(let i=0;i<s.length-o;i++)if(s[i]!==0)throw new Error("base58xmr: wrong padding");e=e.concat(Array.from(s.slice(s.length-o)))}return Uint8Array.from(e)}};var Ku=t=>Te(Ea(4,e=>t(t(e))),A.base58);A.base58check=Ku;var jo=Te(Ce("qpzry9x8gf2tvdw0s3jn54khce6mua7l"),Me("")),ya=[996825010,642813549,513874426,1027748829,705979059];function kn(t){let e=t>>25,n=(t&33554431)<<5;for(let r=0;r<ya.length;r++)(e>>r&1)===1&&(n^=ya[r]);return n}function ga(t,e,n=1){let r=t.length,o=1;for(let s=0;s<r;s++){let i=t.charCodeAt(s);if(i<33||i>126)throw new Error(`Invalid prefix (${t})`);o=kn(o)^i>>5}o=kn(o);for(let s=0;s<r;s++)o=kn(o)^t.charCodeAt(s)&31;for(let s of e)o=kn(o)^s;for(let s=0;s<6;s++)o=kn(o);return o^=n,jo.encode(Fo([o%2**30],30,5,!1))}function ka(t){let e=t==="bech32"?1:734539939,n=Ge(5),r=n.decode,o=n.encode,s=ma(r);function i(l,u,h=90){if(typeof l!="string")throw new Error(`bech32.encode prefix should be string, not ${typeof l}`);if(!Array.isArray(u)||u.length&&typeof u[0]!="number")throw new Error(`bech32.encode words should be array of numbers, not ${typeof u}`);let p=l.length+7+u.length;if(h!==!1&&p>h)throw new TypeError(`Length ${p} exceeds limit ${h}`);return l=l.toLowerCase(),`${l}1${jo.encode(u)}${ga(l,u,e)}`}function a(l,u=90){if(typeof l!="string")throw new Error(`bech32.decode input should be string, not ${typeof l}`);if(l.length<8||u!==!1&&l.length>u)throw new TypeError(`Wrong string length: ${l.length} (${l}). Expected (8..${u})`);let h=l.toLowerCase();if(l!==h&&l!==l.toUpperCase())throw new Error("String must be lowercase or uppercase");l=h;let p=l.lastIndexOf("1");if(p===0||p===-1)throw new Error('Letter "1" must be present between prefix and data only');let m=l.slice(0,p),b=l.slice(p+1);if(b.length<6)throw new Error("Data must be at least 6 characters long");let g=jo.decode(b).slice(0,-6),k=ga(m,g,e);if(!b.endsWith(k))throw new Error(`Invalid checksum in ${l}: expected "${k}"`);return{prefix:m,words:g}}let c=ma(a);function d(l){let{prefix:u,words:h}=a(l,!1);return{prefix:u,words:h,bytes:r(h)}}return{encode:i,decode:a,decodeToBytes:d,decodeUnsafe:c,fromWords:r,fromWordsUnsafe:s,toWords:o}}A.bech32=ka("bech32");A.bech32m=ka("bech32m");A.utf8={encode:t=>new TextDecoder().decode(t),decode:t=>new TextEncoder().encode(t)};A.hex=Te(Ge(4),Ce("0123456789abcdef"),Me(""),wa(t=>{if(typeof t!="string"||t.length%2)throw new TypeError(`hex.decode: expected string, got ${typeof t} with length ${t.length}`);return t.toLowerCase()}));var An={utf8:A.utf8,hex:A.hex,base16:A.base16,base32:A.base32,base64:A.base64,base64url:A.base64url,base58:A.base58,base58xmr:A.base58xmr},Aa=`Invalid encoding type. Available types: ${Object.keys(An).join(", ")}`,qu=(t,e)=>{if(typeof t!="string"||!An.hasOwnProperty(t))throw new TypeError(Aa);if(!(e instanceof Uint8Array))throw new TypeError("bytesToString() expects Uint8Array");return An[t].encode(e)};A.bytesToString=qu;A.str=A.bytesToString;var Vu=(t,e)=>{if(!An.hasOwnProperty(t))throw new TypeError(Aa);if(typeof e!="string")throw new TypeError("stringToBytes() expects string");return An[t].decode(e)};A.stringToBytes=Vu;A.bytes=A.stringToBytes});var Da=ie(de=>{"use strict";Object.defineProperty(de,"__esModule",{value:!0});de.mnemonicToSeedSync=de.mnemonicToSeed=de.validateMnemonic=de.entropyToMnemonic=de.mnemonicToEntropy=de.generateMnemonic=void 0;var Sa=xn(),La=ca(),Zu=la(),_a=ha(),Yu=Ct(),Er=Ta(),Xu=t=>t[0]==="\u3042\u3044\u3053\u304F\u3057\u3093";function Ba(t){if(typeof t!="string")throw new TypeError(`Invalid mnemonic type: ${typeof t}`);return t.normalize("NFKD")}function Wo(t){let e=Ba(t),n=e.split(" ");if(![12,15,18,21,24].includes(n.length))throw new Error("Invalid mnemonic");return{nfkd:e,words:n}}function Ha(t){Sa.default.bytes(t,16,20,24,28,32)}function Ju(t,e=128){if(Sa.default.number(e),e%32!==0||e>256)throw new TypeError("Invalid entropy");return Ma((0,Yu.randomBytes)(e/8),t)}de.generateMnemonic=Ju;var Qu=t=>{let e=8-t.length/4;return new Uint8Array([(0,Zu.sha256)(t)[0]>>e<<e])};function Ia(t){if(!Array.isArray(t)||t.length!==2048||typeof t[0]!="string")throw new Error("Worlist: expected array of 2048 strings");return t.forEach(e=>{if(typeof e!="string")throw new Error(`Wordlist: non-string element: ${e}`)}),Er.utils.chain(Er.utils.checksum(1,Qu),Er.utils.radix2(11,!0),Er.utils.alphabet(t))}function Ca(t,e){let{words:n}=Wo(t),r=Ia(e).decode(n);return Ha(r),r}de.mnemonicToEntropy=Ca;function Ma(t,e){return Ha(t),Ia(e).encode(t).join(Xu(e)?"\u3000":" ")}de.entropyToMnemonic=Ma;function ed(t,e){try{Ca(t,e)}catch{return!1}return!0}de.validateMnemonic=ed;var Ra=t=>Ba(`mnemonic${t}`);function td(t,e=""){return(0,La.pbkdf2Async)(_a.sha512,Wo(t).nfkd,Ra(e),{c:2048,dkLen:64})}de.mnemonicToSeed=td;function nd(t,e=""){return(0,La.pbkdf2)(_a.sha512,Wo(t).nfkd,Ra(e),{c:2048,dkLen:64})}de.mnemonicToSeedSync=nd});function Go(t){if(!Number.isSafeInteger(t)||t<0)throw new Error(`Wrong positive integer: ${t}`)}function rd(t){if(typeof t!="boolean")throw new Error(`Expected boolean, not ${t}`)}function pt(t,...e){if(!(t instanceof Uint8Array))throw new TypeError("Expected Uint8Array");if(e.length>0&&!e.includes(t.length))throw new TypeError(`Expected Uint8Array of length ${e}, not of length=${t.length}`)}function od(t){if(typeof t!="function"||typeof t.create!="function")throw new Error("Hash should be wrapped by utils.wrapConstructor");Go(t.outputLen),Go(t.blockLen)}function sd(t,e=!0){if(t.destroyed)throw new Error("Hash instance has been destroyed");if(e&&t.finished)throw new Error("Hash#digest() has already been called")}function id(t,e){pt(t);let n=e.outputLen;if(t.length<n)throw new Error(`digestInto() expects output buffer of length at least ${n}`)}var ad,Ke,kr=D(()=>{ad={number:Go,bool:rd,bytes:pt,hash:od,exists:sd,output:id},Ke=ad});var cd,Ua=D(()=>{cd={node:void 0,web:typeof self=="object"&&"crypto"in self?self.crypto:void 0}});function $a(t){if(!(t instanceof Uint8Array))throw new Error("Uint8Array expected");let e="";for(let n=0;n<t.length;n++)e+=ud[t[n]];return e}function Oa(t){if(typeof t!="string")throw new TypeError("hexToBytes: expected string, got "+typeof t);if(t.length%2)throw new Error("hexToBytes: received invalid unpadded hex");let e=new Uint8Array(t.length/2);for(let n=0;n<e.length;n++){let r=n*2,o=t.slice(r,r+2),s=Number.parseInt(o,16);if(Number.isNaN(s)||s<0)throw new Error("Invalid byte sequence");e[n]=s}return e}function Ko(t){if(typeof t!="string")throw new TypeError(`utf8ToBytes expected string, got ${typeof t}`);return new TextEncoder().encode(t)}function Sn(t){if(typeof t=="string"&&(t=Ko(t)),!(t instanceof Uint8Array))throw new TypeError(`Expected input type is Uint8Array (got ${typeof t})`);return t}function Ln(...t){if(!t.every(r=>r instanceof Uint8Array))throw new Error("Uint8Array list expected");if(t.length===1)return t[0];let e=t.reduce((r,o)=>r+o.length,0),n=new Uint8Array(e);for(let r=0,o=0;r<t.length;r++){let s=t[r];n.set(s,o),o+=s.length}return n}function Re(t){let e=r=>t().update(Sn(r)).digest(),n=t();return e.outputLen=n.outputLen,e.blockLen=n.blockLen,e.create=()=>t(),e}var mt,Se,ld,ud,tn,Rt=D(()=>{Ua();mt=t=>new DataView(t.buffer,t.byteOffset,t.byteLength),Se=(t,e)=>t<<32-e|t>>>e,ld=new Uint8Array(new Uint32Array([287454020]).buffer)[0]===68;if(!ld)throw new Error("Non little-endian hardware is not supported");ud=Array.from({length:256},(t,e)=>e.toString(16).padStart(2,"0"));tn=class{clone(){return this._cloneInto()}}});var Ar,_n,Na=D(()=>{kr();Rt();Ar=class extends tn{constructor(e,n){super(),this.finished=!1,this.destroyed=!1,Ke.hash(e);let r=Sn(n);if(this.iHash=e.create(),typeof this.iHash.update!="function")throw new TypeError("Expected instance of class which extends utils.Hash");this.blockLen=this.iHash.blockLen,this.outputLen=this.iHash.outputLen;let o=this.blockLen,s=new Uint8Array(o);s.set(r.length>o?e.create().update(r).digest():r);for(let i=0;i<s.length;i++)s[i]^=54;this.iHash.update(s),this.oHash=e.create();for(let i=0;i<s.length;i++)s[i]^=106;this.oHash.update(s),s.fill(0)}update(e){return Ke.exists(this),this.iHash.update(e),this}digestInto(e){Ke.exists(this),Ke.bytes(e,this.outputLen),this.finished=!0,this.iHash.digestInto(e),this.oHash.update(e),this.oHash.digestInto(e),this.destroy()}digest(){let e=new Uint8Array(this.oHash.outputLen);return this.digestInto(e),e}_cloneInto(e){e||(e=Object.create(Object.getPrototypeOf(this),{}));let{oHash:n,iHash:r,finished:o,destroyed:s,blockLen:i,outputLen:a}=this;return e=e,e.finished=o,e.destroyed=s,e.blockLen=i,e.outputLen=a,e.oHash=n._cloneInto(e.oHash),e.iHash=r._cloneInto(e.iHash),e}destroy(){this.destroyed=!0,this.oHash.destroy(),this.iHash.destroy()}},_n=(t,e,n)=>new Ar(t,e).update(n).digest();_n.create=(t,e)=>new Ar(t,e)});function dd(t,e,n,r){if(typeof t.setBigUint64=="function")return t.setBigUint64(e,n,r);let o=BigInt(32),s=BigInt(4294967295),i=Number(n>>o&s),a=Number(n&s),c=r?4:0,d=r?0:4;t.setUint32(e+c,i,r),t.setUint32(e+d,a,r)}var bt,Tr=D(()=>{kr();Rt();bt=class extends tn{constructor(e,n,r,o){super(),this.blockLen=e,this.outputLen=n,this.padOffset=r,this.isLE=o,this.finished=!1,this.length=0,this.pos=0,this.destroyed=!1,this.buffer=new Uint8Array(e),this.view=mt(this.buffer)}update(e){Ke.exists(this);let{view:n,buffer:r,blockLen:o}=this;e=Sn(e);let s=e.length;for(let i=0;i<s;){let a=Math.min(o-this.pos,s-i);if(a===o){let c=mt(e);for(;o<=s-i;i+=o)this.process(c,i);continue}r.set(e.subarray(i,i+a),this.pos),this.pos+=a,i+=a,this.pos===o&&(this.process(n,0),this.pos=0)}return this.length+=e.length,this.roundClean(),this}digestInto(e){Ke.exists(this),Ke.output(e,this),this.finished=!0;let{buffer:n,view:r,blockLen:o,isLE:s}=this,{pos:i}=this;n[i++]=128,this.buffer.subarray(i).fill(0),this.padOffset>o-i&&(this.process(r,0),i=0);for(let u=i;u<o;u++)n[u]=0;dd(r,o-8,BigInt(this.length*8),s),this.process(r,0);let a=mt(e),c=this.outputLen;if(c%4)throw new Error("_sha2: outputLen should be aligned to 32bit");let d=c/4,l=this.get();if(d>l.length)throw new Error("_sha2: outputLen bigger than state");for(let u=0;u<d;u++)a.setUint32(4*u,l[u],s)}digest(){let{buffer:e,outputLen:n}=this;this.digestInto(e);let r=e.slice(0,n);return this.destroy(),r}_cloneInto(e){e||(e=new this.constructor),e.set(...this.get());let{blockLen:n,buffer:r,length:o,finished:s,destroyed:i,pos:a}=this;return e.length=o,e.pos=a,e.finished=s,e.destroyed=i,o%n&&e.buffer.set(r),e}}});function Pa(t,e,n,r){return t===0?e^n^r:t===1?e&n|~e&r:t===2?(e|~n)^r:t===3?e&r|n&~r:e^(n|~r)}var fd,Fa,hd,Vo,Zo,ja,pd,md,bd,yd,Sr,Lr,qo,za,Wa=D(()=>{Tr();Rt();fd=new Uint8Array([7,4,13,1,10,6,15,3,12,0,9,5,2,14,11,8]),Fa=Uint8Array.from({length:16},(t,e)=>e),hd=Fa.map(t=>(9*t+5)%16),Vo=[Fa],Zo=[hd];for(let t=0;t<4;t++)for(let e of[Vo,Zo])e.push(e[t].map(n=>fd[n]));ja=[[11,14,15,12,5,8,7,9,11,13,14,15,6,7,9,8],[12,13,11,15,6,9,9,7,12,15,11,13,7,8,7,7],[13,15,14,11,7,7,6,8,13,14,13,12,5,5,6,9],[14,11,12,14,8,6,5,5,15,12,15,14,9,9,8,6],[15,12,13,13,9,5,8,6,14,11,12,11,8,6,5,5]].map(t=>new Uint8Array(t)),pd=Vo.map((t,e)=>t.map(n=>ja[e][n])),md=Zo.map((t,e)=>t.map(n=>ja[e][n])),bd=new Uint32Array([0,1518500249,1859775393,2400959708,2840853838]),yd=new Uint32Array([1352829926,1548603684,1836072691,2053994217,0]),Sr=(t,e)=>t<<e|t>>>32-e;Lr=new Uint32Array(16),qo=class extends bt{constructor(){super(64,20,8,!0),this.h0=1732584193,this.h1=-271733879,this.h2=-1732584194,this.h3=271733878,this.h4=-1009589776}get(){let{h0:e,h1:n,h2:r,h3:o,h4:s}=this;return[e,n,r,o,s]}set(e,n,r,o,s){this.h0=e|0,this.h1=n|0,this.h2=r|0,this.h3=o|0,this.h4=s|0}process(e,n){for(let p=0;p<16;p++,n+=4)Lr[p]=e.getUint32(n,!0);let r=this.h0|0,o=r,s=this.h1|0,i=s,a=this.h2|0,c=a,d=this.h3|0,l=d,u=this.h4|0,h=u;for(let p=0;p<5;p++){let m=4-p,b=bd[p],g=yd[p],k=Vo[p],L=Zo[p],y=pd[p],H=md[p];for(let E=0;E<16;E++){let V=Sr(r+Pa(p,s,a,d)+Lr[k[E]]+b,y[E])+u|0;r=u,u=d,d=Sr(a,10)|0,a=s,s=V}for(let E=0;E<16;E++){let V=Sr(o+Pa(m,i,c,l)+Lr[L[E]]+g,H[E])+h|0;o=h,h=l,l=Sr(c,10)|0,c=i,i=V}}this.set(this.h1+a+l|0,this.h2+d+h|0,this.h3+u+o|0,this.h4+r+i|0,this.h0+s+c|0)}roundClean(){Lr.fill(0)}destroy(){this.destroyed=!0,this.buffer.fill(0),this.set(0,0,0,0,0)}},za=Re(()=>new qo)});var gd,wd,xd,yt,gt,_r,Yo,Br,Ap,Ga=D(()=>{Tr();Rt();gd=(t,e,n)=>t&e^~t&n,wd=(t,e,n)=>t&e^t&n^e&n,xd=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),yt=new Uint32Array([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]),gt=new Uint32Array(64),_r=class extends bt{constructor(){super(64,32,8,!1),this.A=yt[0]|0,this.B=yt[1]|0,this.C=yt[2]|0,this.D=yt[3]|0,this.E=yt[4]|0,this.F=yt[5]|0,this.G=yt[6]|0,this.H=yt[7]|0}get(){let{A:e,B:n,C:r,D:o,E:s,F:i,G:a,H:c}=this;return[e,n,r,o,s,i,a,c]}set(e,n,r,o,s,i,a,c){this.A=e|0,this.B=n|0,this.C=r|0,this.D=o|0,this.E=s|0,this.F=i|0,this.G=a|0,this.H=c|0}process(e,n){for(let u=0;u<16;u++,n+=4)gt[u]=e.getUint32(n,!1);for(let u=16;u<64;u++){let h=gt[u-15],p=gt[u-2],m=Se(h,7)^Se(h,18)^h>>>3,b=Se(p,17)^Se(p,19)^p>>>10;gt[u]=b+gt[u-7]+m+gt[u-16]|0}let{A:r,B:o,C:s,D:i,E:a,F:c,G:d,H:l}=this;for(let u=0;u<64;u++){let h=Se(a,6)^Se(a,11)^Se(a,25),p=l+h+gd(a,c,d)+xd[u]+gt[u]|0,b=(Se(r,2)^Se(r,13)^Se(r,22))+wd(r,o,s)|0;l=d,d=c,c=a,a=i+p|0,i=s,s=o,o=r,r=p+b|0}r=r+this.A|0,o=o+this.B|0,s=s+this.C|0,i=i+this.D|0,a=a+this.E|0,c=c+this.F|0,d=d+this.G|0,l=l+this.H|0,this.set(r,o,s,i,a,c,d,l)}roundClean(){gt.fill(0)}destroy(){this.set(0,0,0,0,0,0,0,0),this.buffer.fill(0)}},Yo=class extends _r{constructor(){super(),this.A=-1056596264,this.B=914150663,this.C=812702999,this.D=-150054599,this.E=-4191439,this.F=1750603025,this.G=1694076839,this.H=-1090891868,this.outputLen=28}},Br=Re(()=>new _r),Ap=Re(()=>new Yo)});function Ka(t,e=!1){return e?{h:Number(t&Hr),l:Number(t>>Xo&Hr)}:{h:Number(t>>Xo&Hr)|0,l:Number(t&Hr)|0}}function vd(t,e=!1){let n=new Uint32Array(t.length),r=new Uint32Array(t.length);for(let o=0;o<t.length;o++){let{h:s,l:i}=Ka(t[o],e);[n[o],r[o]]=[s,i]}return[n,r]}function Dd(t,e,n,r){let o=(e>>>0)+(r>>>0);return{h:t+n+(o/2**32|0)|0,l:o|0}}var Hr,Xo,Ed,kd,Ad,Td,Sd,Ld,_d,Bd,Hd,Id,Cd,Md,Rd,Ud,$d,Od,Nd,Pd,Fd,jd,I,qa=D(()=>{Hr=BigInt(4294967295),Xo=BigInt(32);Ed=(t,e)=>BigInt(t>>>0)<<Xo|BigInt(e>>>0),kd=(t,e,n)=>t>>>n,Ad=(t,e,n)=>t<<32-n|e>>>n,Td=(t,e,n)=>t>>>n|e<<32-n,Sd=(t,e,n)=>t<<32-n|e>>>n,Ld=(t,e,n)=>t<<64-n|e>>>n-32,_d=(t,e,n)=>t>>>n-32|e<<64-n,Bd=(t,e)=>e,Hd=(t,e)=>t,Id=(t,e,n)=>t<<n|e>>>32-n,Cd=(t,e,n)=>e<<n|t>>>32-n,Md=(t,e,n)=>e<<n-32|t>>>64-n,Rd=(t,e,n)=>t<<n-32|e>>>64-n;Ud=(t,e,n)=>(t>>>0)+(e>>>0)+(n>>>0),$d=(t,e,n,r)=>e+n+r+(t/2**32|0)|0,Od=(t,e,n,r)=>(t>>>0)+(e>>>0)+(n>>>0)+(r>>>0),Nd=(t,e,n,r,o)=>e+n+r+o+(t/2**32|0)|0,Pd=(t,e,n,r,o)=>(t>>>0)+(e>>>0)+(n>>>0)+(r>>>0)+(o>>>0),Fd=(t,e,n,r,o,s)=>e+n+r+o+s+(t/2**32|0)|0,jd={fromBig:Ka,split:vd,toBig:Ed,shrSH:kd,shrSL:Ad,rotrSH:Td,rotrSL:Sd,rotrBH:Ld,rotrBL:_d,rotr32H:Bd,rotr32L:Hd,rotlSH:Id,rotlSL:Cd,rotlBH:Md,rotlBL:Rd,add:Dd,add3L:Ud,add3H:$d,add4L:Od,add4H:Nd,add5H:Fd,add5L:Pd},I=jd});var zd,Wd,wt,xt,nn,Jo,Qo,es,ts,Hp,Ip,Cp,Va=D(()=>{Tr();qa();Rt();[zd,Wd]=I.split(["0x428a2f98d728ae22","0x7137449123ef65cd","0xb5c0fbcfec4d3b2f","0xe9b5dba58189dbbc","0x3956c25bf348b538","0x59f111f1b605d019","0x923f82a4af194f9b","0xab1c5ed5da6d8118","0xd807aa98a3030242","0x12835b0145706fbe","0x243185be4ee4b28c","0x550c7dc3d5ffb4e2","0x72be5d74f27b896f","0x80deb1fe3b1696b1","0x9bdc06a725c71235","0xc19bf174cf692694","0xe49b69c19ef14ad2","0xefbe4786384f25e3","0x0fc19dc68b8cd5b5","0x240ca1cc77ac9c65","0x2de92c6f592b0275","0x4a7484aa6ea6e483","0x5cb0a9dcbd41fbd4","0x76f988da831153b5","0x983e5152ee66dfab","0xa831c66d2db43210","0xb00327c898fb213f","0xbf597fc7beef0ee4","0xc6e00bf33da88fc2","0xd5a79147930aa725","0x06ca6351e003826f","0x142929670a0e6e70","0x27b70a8546d22ffc","0x2e1b21385c26c926","0x4d2c6dfc5ac42aed","0x53380d139d95b3df","0x650a73548baf63de","0x766a0abb3c77b2a8","0x81c2c92e47edaee6","0x92722c851482353b","0xa2bfe8a14cf10364","0xa81a664bbc423001","0xc24b8b70d0f89791","0xc76c51a30654be30","0xd192e819d6ef5218","0xd69906245565a910","0xf40e35855771202a","0x106aa07032bbd1b8","0x19a4c116b8d2d0c8","0x1e376c085141ab53","0x2748774cdf8eeb99","0x34b0bcb5e19b48a8","0x391c0cb3c5c95a63","0x4ed8aa4ae3418acb","0x5b9cca4f7763e373","0x682e6ff3d6b2b8a3","0x748f82ee5defb2fc","0x78a5636f43172f60","0x84c87814a1f0ab72","0x8cc702081a6439ec","0x90befffa23631e28","0xa4506cebde82bde9","0xbef9a3f7b2c67915","0xc67178f2e372532b","0xca273eceea26619c","0xd186b8c721c0c207","0xeada7dd6cde0eb1e","0xf57d4f7fee6ed178","0x06f067aa72176fba","0x0a637dc5a2c898a6","0x113f9804bef90dae","0x1b710b35131c471b","0x28db77f523047d84","0x32caab7b40c72493","0x3c9ebe0a15c9bebc","0x431d67c49c100d4c","0x4cc5d4becb3e42b6","0x597f299cfc657e2a","0x5fcb6fab3ad6faec","0x6c44198c4a475817"].map(t=>BigInt(t))),wt=new Uint32Array(80),xt=new Uint32Array(80),nn=class extends bt{constructor(){super(128,64,16,!1),this.Ah=1779033703,this.Al=-205731576,this.Bh=-1150833019,this.Bl=-2067093701,this.Ch=1013904242,this.Cl=-23791573,this.Dh=-1521486534,this.Dl=1595750129,this.Eh=1359893119,this.El=-1377402159,this.Fh=-1694144372,this.Fl=725511199,this.Gh=528734635,this.Gl=-79577749,this.Hh=1541459225,this.Hl=327033209}get(){let{Ah:e,Al:n,Bh:r,Bl:o,Ch:s,Cl:i,Dh:a,Dl:c,Eh:d,El:l,Fh:u,Fl:h,Gh:p,Gl:m,Hh:b,Hl:g}=this;return[e,n,r,o,s,i,a,c,d,l,u,h,p,m,b,g]}set(e,n,r,o,s,i,a,c,d,l,u,h,p,m,b,g){this.Ah=e|0,this.Al=n|0,this.Bh=r|0,this.Bl=o|0,this.Ch=s|0,this.Cl=i|0,this.Dh=a|0,this.Dl=c|0,this.Eh=d|0,this.El=l|0,this.Fh=u|0,this.Fl=h|0,this.Gh=p|0,this.Gl=m|0,this.Hh=b|0,this.Hl=g|0}process(e,n){for(let y=0;y<16;y++,n+=4)wt[y]=e.getUint32(n),xt[y]=e.getUint32(n+=4);for(let y=16;y<80;y++){let H=wt[y-15]|0,E=xt[y-15]|0,V=I.rotrSH(H,E,1)^I.rotrSH(H,E,8)^I.shrSH(H,E,7),S=I.rotrSL(H,E,1)^I.rotrSL(H,E,8)^I.shrSL(H,E,7),j=wt[y-2]|0,M=xt[y-2]|0,se=I.rotrSH(j,M,19)^I.rotrBH(j,M,61)^I.shrSH(j,M,6),fe=I.rotrSL(j,M,19)^I.rotrBL(j,M,61)^I.shrSL(j,M,6),oe=I.add4L(S,fe,xt[y-7],xt[y-16]),Ne=I.add4H(oe,V,se,wt[y-7],wt[y-16]);wt[y]=Ne|0,xt[y]=oe|0}let{Ah:r,Al:o,Bh:s,Bl:i,Ch:a,Cl:c,Dh:d,Dl:l,Eh:u,El:h,Fh:p,Fl:m,Gh:b,Gl:g,Hh:k,Hl:L}=this;for(let y=0;y<80;y++){let H=I.rotrSH(u,h,14)^I.rotrSH(u,h,18)^I.rotrBH(u,h,41),E=I.rotrSL(u,h,14)^I.rotrSL(u,h,18)^I.rotrBL(u,h,41),V=u&p^~u&b,S=h&m^~h&g,j=I.add5L(L,E,S,Wd[y],xt[y]),M=I.add5H(j,k,H,V,zd[y],wt[y]),se=j|0,fe=I.rotrSH(r,o,28)^I.rotrBH(r,o,34)^I.rotrBH(r,o,39),oe=I.rotrSL(r,o,28)^I.rotrBL(r,o,34)^I.rotrBL(r,o,39),Ne=r&s^r&a^s&a,kt=o&i^o&c^i&c;k=b|0,L=g|0,b=p|0,g=m|0,p=u|0,m=h|0,{h:u,l:h}=I.add(d|0,l|0,M|0,se|0),d=a|0,l=c|0,a=s|0,c=i|0,s=r|0,i=o|0;let At=I.add3L(se,oe,kt);r=I.add3H(At,M,fe,Ne),o=At|0}({h:r,l:o}=I.add(this.Ah|0,this.Al|0,r|0,o|0)),{h:s,l:i}=I.add(this.Bh|0,this.Bl|0,s|0,i|0),{h:a,l:c}=I.add(this.Ch|0,this.Cl|0,a|0,c|0),{h:d,l}=I.add(this.Dh|0,this.Dl|0,d|0,l|0),{h:u,l:h}=I.add(this.Eh|0,this.El|0,u|0,h|0),{h:p,l:m}=I.add(this.Fh|0,this.Fl|0,p|0,m|0),{h:b,l:g}=I.add(this.Gh|0,this.Gl|0,b|0,g|0),{h:k,l:L}=I.add(this.Hh|0,this.Hl|0,k|0,L|0),this.set(r,o,s,i,a,c,d,l,u,h,p,m,b,g,k,L)}roundClean(){wt.fill(0),xt.fill(0)}destroy(){this.buffer.fill(0),this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0)}},Jo=class extends nn{constructor(){super(),this.Ah=-1942145080,this.Al=424955298,this.Bh=1944164710,this.Bl=-1982016298,this.Ch=502970286,this.Cl=855612546,this.Dh=1738396948,this.Dl=1479516111,this.Eh=258812777,this.El=2077511080,this.Fh=2011393907,this.Fl=79989058,this.Gh=1067287976,this.Gl=1780299464,this.Hh=286451373,this.Hl=-1848208735,this.outputLen=28}},Qo=class extends nn{constructor(){super(),this.Ah=573645204,this.Al=-64227540,this.Bh=-1621794909,this.Bl=-934517566,this.Ch=596883563,this.Cl=1867755857,this.Dh=-1774684391,this.Dl=1497426621,this.Eh=-1775747358,this.El=-1467023389,this.Fh=-1101128155,this.Fl=1401305490,this.Gh=721525244,this.Gl=746961066,this.Hh=246885852,this.Hl=-2117784414,this.outputLen=32}},es=class extends nn{constructor(){super(),this.Ah=-876896931,this.Al=-1056596264,this.Bh=1654270250,this.Bl=914150663,this.Ch=-1856437926,this.Cl=812702999,this.Dh=355462360,this.Dl=-150054599,this.Eh=1731405415,this.El=-4191439,this.Fh=-1900787065,this.Fl=1750603025,this.Gh=-619958771,this.Gl=1694076839,this.Hh=1203062813,this.Hl=-1090891868,this.outputLen=48}},ts=Re(()=>new nn),Hp=Re(()=>new Jo),Ip=Re(()=>new Qo),Cp=Re(()=>new es)});function Za(t){return BigInt(`0x${$a(t)}`)}function Gd(t){return Oa(t.toString(16).padStart(64,"0"))}var ns,Kd,rs,os,qd,Vd,Ir,De,Ya=D(()=>{Na();Wa();Ga();Va();kr();Rt();je();wn();B.hmacSha256Sync=(t,...e)=>_n(Br,t,B.concatBytes(...e));ns=Zi(Br);Kd=Ko("Bitcoin seed"),rs={private:76066276,public:76067358},os=2147483648,qd=t=>za(Br(t)),Vd=t=>mt(t).getUint32(0,!1),Ir=t=>{if(!Number.isSafeInteger(t)||t<0||t>2**32-1)throw new Error(`Invalid number=${t}. Should be from 0 to 2 ** 32 - 1`);let e=new Uint8Array(4);return mt(e).setUint32(0,t,!1),e},De=class{constructor(e){if(this.depth=0,this.index=0,this.chainCode=null,this.parentFingerprint=0,!e||typeof e!="object")throw new Error("HDKey.constructor must not be called directly");if(this.versions=e.versions||rs,this.depth=e.depth||0,this.chainCode=e.chainCode,this.index=e.index||0,this.parentFingerprint=e.parentFingerprint||0,!this.depth&&(this.parentFingerprint||this.index))throw new Error("HDKey: zero depth with non-zero index/parent fingerprint");if(e.publicKey&&e.privateKey)throw new Error("HDKey: publicKey and privateKey at same time.");if(e.privateKey){if(!B.isValidPrivateKey(e.privateKey))throw new Error("Invalid private key");this.privKey=typeof e.privateKey=="bigint"?e.privateKey:Za(e.privateKey),this.privKeyBytes=Gd(this.privKey),this.pubKey=Li(e.privateKey,!0)}else if(e.publicKey)this.pubKey=U.fromHex(e.publicKey).toRawBytes(!0);else throw new Error("HDKey: no public or private key provided");this.pubHash=qd(this.pubKey)}get fingerprint(){if(!this.pubHash)throw new Error("No publicKey set!");return Vd(this.pubHash)}get identifier(){return this.pubHash}get pubKeyHash(){return this.pubHash}get privateKey(){return this.privKeyBytes||null}get publicKey(){return this.pubKey||null}get privateExtendedKey(){let e=this.privateKey;if(!e)throw new Error("No private key");return ns.encode(this.serialize(this.versions.private,Ln(new Uint8Array([0]),e)))}get publicExtendedKey(){if(!this.pubKey)throw new Error("No public key");return ns.encode(this.serialize(this.versions.public,this.pubKey))}static fromMasterSeed(e,n=rs){if(pt(e),8*e.length<128||8*e.length>512)throw new Error(`HDKey: wrong seed length=${e.length}. Should be between 128 and 512 bits; 256 bits is advised)`);let r=_n(ts,Kd,e);return new De({versions:n,chainCode:r.slice(32),privateKey:r.slice(0,32)})}static fromExtendedKey(e,n=rs){let r=ns.decode(e),o=mt(r),s=o.getUint32(0,!1),i={versions:n,depth:r[4],parentFingerprint:o.getUint32(5,!1),index:o.getUint32(9,!1),chainCode:r.slice(13,45)},a=r.slice(45),c=a[0]===0;if(s!==n[c?"private":"public"])throw new Error("Version mismatch");return c?new De({...i,privateKey:a.slice(1)}):new De({...i,publicKey:a})}static fromJSON(e){return De.fromExtendedKey(e.xpriv)}derive(e){if(!/^[mM]'?/.test(e))throw new Error('Path must start with "m" or "M"');if(/^[mM]'?$/.test(e))return this;let n=e.replace(/^[mM]'?\//,"").split("/"),r=this;for(let o of n){let s=/^(\d+)('?)$/.exec(o);if(!s||s.length!==3)throw new Error(`Invalid child index: ${o}`);let i=+s[1];if(!Number.isSafeInteger(i)||i>=os)throw new Error("Invalid index");s[2]==="'"&&(i+=os),r=r.deriveChild(i)}return r}deriveChild(e){if(!this.pubKey||!this.chainCode)throw new Error("No publicKey or chainCode set");let n=Ir(e);if(e>=os){let a=this.privateKey;if(!a)throw new Error("Could not derive hardened child key");n=Ln(new Uint8Array([0]),a,n)}else n=Ln(this.pubKey,n);let r=_n(ts,this.chainCode,n),o=Za(r.slice(0,32)),s=r.slice(32);if(!B.isValidPrivateKey(o))throw new Error("Tweak bigger than curve order");let i={versions:this.versions,chainCode:s,depth:this.depth+1,parentFingerprint:this.fingerprint,index:e};try{if(this.privateKey){let a=B.mod(this.privKey+o,F.n);if(!B.isValidPrivateKey(a))throw new Error("The tweak was out of range or the resulted private key is invalid");i.privateKey=a}else{let a=U.fromHex(this.pubKey).add(U.fromPrivateKey(o));if(a.equals(U.ZERO))throw new Error("The tweak was equal to negative P, which made the result key invalid");i.publicKey=a.toRawBytes(!0)}return new De(i)}catch{return this.deriveChild(e+1)}}sign(e){if(!this.privateKey)throw new Error("No privateKey set!");return pt(e,32),Hi(e,this.privKey,{canonical:!0,der:!1})}verify(e,n){if(pt(e,32),pt(n,64),!this.publicKey)throw new Error("No publicKey set!");let r;try{r=ge.fromCompact(n)}catch{return!1}return Ii(r,e,this.publicKey)}wipePrivateData(){return this.privKey=void 0,this.privKeyBytes&&(this.privKeyBytes.fill(0),this.privKeyBytes=void 0),this}toJSON(){return{xpriv:this.privateExtendedKey,xpub:this.publicExtendedKey}}serialize(e,n){if(!this.chainCode)throw new Error("No chainCode set");return pt(n,33),Ln(Ir(e),new Uint8Array([this.depth]),Ir(this.parentFingerprint),Ir(this.index),this.chainCode,n)}}});var Cr,ss,Xa=D(()=>{yn();Cr=class extends Ht{constructor(e,n){super(),this.finished=!1,this.destroyed=!1,Oi(e);let r=bn(n);if(this.iHash=e.create(),!(this.iHash instanceof Ht))throw new TypeError("Expected instance of class which extends utils.Hash");let o=this.blockLen=this.iHash.blockLen;this.outputLen=this.iHash.outputLen;let s=new Uint8Array(o);s.set(r.length>this.iHash.blockLen?e.create().update(r).digest():r);for(let i=0;i<s.length;i++)s[i]^=54;this.iHash.update(s),this.oHash=e.create();for(let i=0;i<s.length;i++)s[i]^=106;this.oHash.update(s),s.fill(0)}update(e){if(this.destroyed)throw new Error("instance is destroyed");return this.iHash.update(e),this}digestInto(e){if(this.destroyed)throw new Error("instance is destroyed");if(!(e instanceof Uint8Array)||e.length!==this.outputLen)throw new Error("HMAC: Invalid output buffer");if(this.finished)throw new Error("digest() was already called");this.finished=!0,this.iHash.digestInto(e),this.oHash.update(e),this.oHash.digestInto(e),this.destroy()}digest(){let e=new Uint8Array(this.oHash.outputLen);return this.digestInto(e),e}_cloneInto(e){e||(e=Object.create(Object.getPrototypeOf(this),{}));let{oHash:n,iHash:r,finished:o,destroyed:s,blockLen:i,outputLen:a}=this;return e=e,e.finished=o,e.destroyed=s,e.blockLen=i,e.outputLen=a,e.oHash=n._cloneInto(e.oHash),e.iHash=r._cloneInto(e.iHash),e}destroy(){this.destroyed=!0,this.oHash.destroy(),this.iHash.destroy()}},ss=(t,e,n)=>new Cr(t,e).update(n).digest();ss.create=(t,e)=>new Cr(t,e)});function Yd(t){return B.bytesToHex(Bt.getPublicKey(t))}function Mr(t){let e=new URL(t);return e.pathname=e.pathname.replace(/\/+/g,"/"),e.pathname.endsWith("/")&&(e.pathname=e.pathname.slice(0,-1)),(e.port==="80"&&e.protocol==="ws:"||e.port==="443"&&e.protocol==="wss:")&&(e.port=""),e.searchParams.sort(),e.hash="",e.toString()}function Jd(t,e){let n=0,r=t.length-1,o,s=n;if(r<0)s=0;else if(e.created_at<t[r].created_at)s=r+1;else if(e.created_at>=t[n].created_at)s=n;else for(;;){if(r<=n+1){s=r;break}if(o=Math.floor(n+(r-n)/2),t[o].created_at>e.created_at)n=o;else if(t[o].created_at<e.created_at)r=o;else{s=o;break}}return t[s]?.id!==e.id?[...t.slice(0,s),e,...t.slice(s)]:t}function Qd(t,e){let n=0,r=t.length-1,o,s=n;if(r<0)s=0;else if(e.created_at>t[r].created_at)s=r+1;else if(e.created_at<=t[n].created_at)s=n;else for(;;){if(r<=n+1){s=r;break}if(o=Math.floor(n+(r-n)/2),t[o].created_at<e.created_at)n=o;else if(t[o].created_at>e.created_at)r=o;else{s=o;break}}return t[s]?.id!==e.id?[...t.slice(0,s),e,...t.slice(s)]:t}function ef(t){if(!as(t))throw new Error("can't serialize event with wrong or missing properties");return JSON.stringify([0,t.pubkey,t.created_at,t.kind,t.tags,t.content])}function tf(t){let e=at(qe.encode(ef(t)));return B.bytesToHex(e)}function as(t){if(typeof t!="object"||typeof t.kind!="number"||typeof t.content!="string"||typeof t.created_at!="number"||typeof t.pubkey!="string"||!t.pubkey.match(/^[a-f0-9]{64}$/)||!Array.isArray(t.tags))return!1;for(let e=0;e<t.tags.length;e++){let n=t.tags[e];if(!Array.isArray(n))return!1;for(let r=0;r<n.length;r++)if(typeof n[r]=="object")return!1}return!0}function Ja(t){return Bt.verifySync(t.sig,tf(t),t.pubkey)}function nf(t,e){if(t.ids&&t.ids.indexOf(e.id)===-1||t.kinds&&t.kinds.indexOf(e.kind)===-1||t.authors&&t.authors.indexOf(e.pubkey)===-1)return!1;for(let n in t)if(n[0]==="#"){let r=n.slice(1),o=t[`#${r}`];if(o&&!e.tags.find(([s,i])=>s===n.slice(1)&&o.indexOf(i)!==-1))return!1}return!(t.since&&e.created_at<t.since||t.until&&e.created_at>=t.until)}function rf(t,e){for(let n=0;n<t.length;n++)if(nf(t[n],e))return!0;return!1}function Rr(t,e){let n=e.length+3,r=t.indexOf(`"${e}":`)+n,o=t.slice(r).indexOf('"')+r+1;return t.slice(o,o+64)}function Qa(t,e){let n=e.length,r=t.indexOf(`"${e}":`)+n+3,o=t.slice(r),s=Math.min(o.indexOf(","),o.indexOf("}"));return parseInt(o.slice(0,s),10)}function ec(t){let e=t.slice(0,22).indexOf('"EVENT"');if(e===-1)return null;let n=t.slice(e+7+1).indexOf('"');if(n===-1)return null;let r=e+7+1+n,o=t.slice(r+1,80).indexOf('"');if(o===-1)return null;let s=r+1+o;return t.slice(r+1,s)}function sf(t,e){return e===Rr(t,"id")}function af(t,e){return e===Rr(t,"pubkey")}function cf(t,e){return e===Qa(t,"kind")}function lf(t,e={}){let{listTimeout:n=3e3,getTimeout:r=3e3}=e;var o,s={},i={connect:[],disconnect:[],error:[],notice:[]},a={},c={};async function d(){return new Promise((m,b)=>{o=new WebSocket(t),o.onopen=()=>{i.connect.forEach(y=>y()),m()},o.onerror=()=>{i.error.forEach(y=>y()),b()},o.onclose=async()=>{i.disconnect.forEach(y=>y())};let g=[],k;o.onmessage=y=>{g.push(y.data),k||(k=setInterval(L,0))};function L(){if(g.length===0){clearInterval(k),k=null;return}var y=g.shift();if(!y)return;let H=ec(y);if(H){let E=s[H];if(E&&E.alreadyHaveEvent&&E.alreadyHaveEvent(Rr(y,"id"),t))return}try{let E=JSON.parse(y);switch(E[0]){case"EVENT":let V=E[1],S=E[2];as(S)&&s[V]&&(s[V].skipVerification||Ja(S))&&rf(s[V].filters,S)&&(s[V],(a[V]?.event||[]).forEach(M=>M(S)));return;case"EOSE":{let M=E[1];M in a&&(a[M].eose.forEach(se=>se()),a[M].eose=[]);return}case"OK":{let M=E[1],se=E[2],fe=E[3]||"";M in c&&(se?c[M].ok.forEach(oe=>oe()):c[M].failed.forEach(oe=>oe(fe)),c[M].ok=[],c[M].failed=[]);return}case"NOTICE":let j=E[1];i.notice.forEach(M=>M(j));return}}catch{return}}})}function l(){return o?.readyState===1}async function u(){l()||await d()}async function h(m){let b=JSON.stringify(m);if(!(!l()&&(await new Promise(g=>setTimeout(g,1e3)),!l())))try{o.send(b)}catch(g){console.log(g)}}let p=(m,{skipVerification:b=!1,alreadyHaveEvent:g=null,id:k=Math.random().toString().slice(2)}={})=>{let L=k;return s[L]={id:L,filters:m,skipVerification:b,alreadyHaveEvent:g},h(["REQ",L,...m]),{sub:(y,H={})=>p(y||m,{skipVerification:H.skipVerification||b,alreadyHaveEvent:H.alreadyHaveEvent||g,id:L}),unsub:()=>{delete s[L],delete a[L],h(["CLOSE",L])},on:(y,H)=>{a[L]=a[L]||{event:[],eose:[]},a[L][y].push(H)},off:(y,H)=>{let E=a[L],V=E[y].indexOf(H);V>=0&&E[y].splice(V,1)}}};return{url:t,sub:p,on:(m,b)=>{i[m].push(b),m==="connect"&&o?.readyState===1&&b()},off:(m,b)=>{let g=i[m].indexOf(b);g!==-1&&i[m].splice(g,1)},list:(m,b)=>new Promise(g=>{let k=p(m,b),L=[],y=setTimeout(()=>{k.unsub(),g(L)},n);k.on("eose",()=>{k.unsub(),clearTimeout(y),g(L)}),k.on("event",H=>{L.push(H)})}),get:(m,b)=>new Promise(g=>{let k=p([m],b),L=setTimeout(()=>{k.unsub(),g(null)},r);k.on("event",y=>{k.unsub(),clearTimeout(L),g(y)})}),publish(m){if(!m.id)throw new Error(`event ${m} has no id`);let b=m.id;return h(["EVENT",m]),{on:(g,k)=>{c[b]=c[b]||{ok:[],failed:[]},c[b][g].push(k)},off:(g,k)=>{let L=c[b];if(!L)return;let y=L[g].indexOf(k);y>=0&&L[g].splice(y,1)}}},connect:u,close(){i={connect:[],disconnect:[],error:[],notice:[]},a={},c={},o?.close()},get status(){return o?.readyState??3}}}function uf(t){return{on(e,n){e==="failed"&&n(`relay ${t} not connected`)},off(){}}}async function ff(t,e,n){let r=Ao(t,"02"+e),o=nc(r),s=Uint8Array.from(Pi(16)),i=qe.encode(n),a=await crypto.subtle.importKey("raw",o,{name:"AES-CBC"},!1,["encrypt"]),c=await crypto.subtle.encrypt({name:"AES-CBC",iv:s},a,i),d=Xt.encode(new Uint8Array(c)),l=Xt.encode(new Uint8Array(s.buffer));return`${d}?iv=${l}`}async function hf(t,e,n){let[r,o]=n.split("?iv="),s=Ao(t,"02"+e),i=nc(s),a=await crypto.subtle.importKey("raw",i,{name:"AES-CBC"},!1,["decrypt"]),c=Xt.decode(r),d=Xt.decode(o),l=await crypto.subtle.decrypt({name:"AES-CBC",iv:d},a,c);return Dt.decode(l)}function nc(t){return t.slice(1,33)}function pf(t){Dr=t}async function mf(t,e=""){try{return(await(await Dr(`https://${t}/.well-known/nostr.json?name=${e}`)).json()).names}catch{return{}}}async function bf(t){let[e,n]=t.split("@");if(n||(n=e,e="_"),!e.match(/^[A-Za-z0-9-_]+$/))return null;let r;try{r=await(await Dr(`https://${n}/.well-known/nostr.json?name=${e}`)).json()}catch{return null}if(!r?.names?.[e])return null;let o=r.names[e],s=r.relays?.[o]||[];return{pubkey:o,relays:s}}function gf(t,e){let r=De.fromMasterSeed((0,rn.mnemonicToSeedSync)(t,e)).derive("m/44'/1237'/0'/0/0").privateKey;if(!r)throw new Error("could not derive private key");return B.bytesToHex(r)}function wf(){return(0,rn.generateMnemonic)(cs.wordlist)}function xf(t){return(0,rn.validateMnemonic)(t,cs.wordlist)}function vf(t){let{prefix:e,words:n}=ue.decode(t,Hn),r=new Uint8Array(ue.fromWords(n));switch(e){case"nprofile":{let o=is(r);if(!o[0]?.[0])throw new Error("missing TLV 0 for nprofile");if(o[0][0].length!==32)throw new Error("TLV 0 should be 32 bytes");return{type:"nprofile",data:{pubkey:B.bytesToHex(o[0][0]),relays:o[1]?o[1].map(s=>Dt.decode(s)):[]}}}case"nevent":{let o=is(r);if(!o[0]?.[0])throw new Error("missing TLV 0 for nevent");if(o[0][0].length!==32)throw new Error("TLV 0 should be 32 bytes");return{type:"nevent",data:{id:B.bytesToHex(o[0][0]),relays:o[1]?o[1].map(s=>Dt.decode(s)):[]}}}case"naddr":{let o=is(r);if(!o[0]?.[0])throw new Error("missing TLV 0 for naddr");if(!o[2]?.[0])throw new Error("missing TLV 2 for naddr");if(o[2][0].length!==32)throw new Error("TLV 2 should be 32 bytes");if(!o[3]?.[0])throw new Error("missing TLV 3 for naddr");if(o[3][0].length!==4)throw new Error("TLV 3 should be 4 bytes");return{type:"naddr",data:{identifier:Dt.decode(o[0][0]),pubkey:B.bytesToHex(o[2][0]),kind:parseInt(B.bytesToHex(o[3][0]),16),relays:o[1]?o[1].map(s=>Dt.decode(s)):[]}}}case"nsec":case"npub":case"note":return{type:e,data:B.bytesToHex(r)};default:throw new Error(`unknown prefix ${e}`)}}function is(t){let e={},n=t;for(;n.length>0;){let r=n[0],o=n[1],s=n.slice(2,2+o);n=n.slice(2+o),!(s.length<o)&&(e[r]=e[r]||[],e[r].push(s))}return e}function Ef(t){return ls("nsec",t)}function kf(t){return ls("npub",t)}function Af(t){return ls("note",t)}function ls(t,e){let n=B.hexToBytes(e),r=ue.toWords(n);return ue.encode(t,r,Hn)}function Tf(t){let e=us({0:[B.hexToBytes(t.pubkey)],1:(t.relays||[]).map(r=>qe.encode(r))}),n=ue.toWords(e);return ue.encode("nprofile",n,Hn)}function Sf(t){let e=us({0:[B.hexToBytes(t.id)],1:(t.relays||[]).map(r=>qe.encode(r))}),n=ue.toWords(e);return ue.encode("nevent",n,Hn)}function Lf(t){let e=new ArrayBuffer(4);new DataView(e).setUint32(0,t.kind,!1);let n=us({0:[qe.encode(t.identifier)],1:(t.relays||[]).map(o=>qe.encode(o)),2:[B.hexToBytes(t.pubkey)],3:[new Uint8Array(e)]}),r=ue.toWords(n);return ue.encode("naddr",r,Hn)}function us(t){let e=[];return Object.entries(t).forEach(([n,r])=>{r.forEach(o=>{let s=new Uint8Array(o.length+2);s.set([parseInt(n)],0),s.set([o.length],1),s.set(o,2),e.push(s)})}),B.concatBytes(...e)}function Bf(t,e){let n=[];(e.kind||-1)>=0&&n.push(`kind=${e.kind}`),e.until&&n.push(`created_at<${e.until}`),e.since&&n.push(`created_at>${e.since}`);let r=n.join("&");if(r==="")throw new Error("refusing to create a delegation without any conditions");let o=at(qe.encode(`nostr:delegation:${e.pubkey}:${r}`)),s=B.bytesToHex(Bt.signSync(o,t));return{from:Yd(t),to:e.pubkey,cond:r,sig:s}}function Hf(t){let e=t.tags.find(a=>a[0]==="delegation"&&a.length>=4);if(!e)return null;let n=e[1],r=e[2],o=e[3],s=r.split("&");for(let a=0;a<s.length;a++){let[c,d,l]=s[a].split(/\b/);if(!(c==="kind"&&d==="="&&t.kind===parseInt(l))){if(c==="created_at"&&d==="<"&&t.created_at<parseInt(l))continue;if(c==="created_at"&&d===">"&&t.created_at>parseInt(l))continue;return null}}let i=at(qe.encode(`nostr:delegation:${t.pubkey}:${r}`));return Bt.verifySync(o,i,n)?n:null}function Cf(t){ds=t}async function Mf(t){try{let e="",{lud06:n,lud16:r}=JSON.parse(t.content);if(n){let{words:i}=ue.decode(n,1e3),a=ue.fromWords(i);e=Dt.decode(a)}else if(r){let[i,a]=r.split("@");e=`https://${a}/.well-known/lnurlp/${i}`}else return null;let s=await(await ds(e)).json();if(s.allowsNostr&&s.nostrPubkey)return s.callback}catch{}return null}function Rf({profile:t,event:e,amount:n,relays:r,comment:o=""}){if(!n)throw new Error("amount not given");if(!t)throw new Error("profile not given");let s={kind:9734,created_at:Math.round(Date.now()/1e3),content:o,tags:[["p",t],["amount",n.toString()],["relays",...r]]};return e&&s.tags.push(["e",e]),s}function Df(t){let e;try{e=JSON.parse(t)}catch{return"Invalid zap request JSON."}if(!as(e))return"Zap request is not a valid Nostr event.";if(!Ja(e))return"Invalid signature on zap request.";let n=e.tags.find(([s,i])=>s==="p"&&i);if(!n)return"Zap request doesn't have a 'p' tag.";if(!n[1].match(/^[a-f0-9]{64}$/))return"Zap request 'p' tag is not valid hex.";let r=e.tags.find(([s,i])=>s==="e"&&i);return r&&!r[1].match(/^[a-f0-9]{64}$/)?"Zap request 'e' tag is not valid hex.":e.tags.find(([s,i])=>s==="relays"&&i)?null:"Zap request doesn't have a 'relays' tag."}function Uf({zapRequest:t,preimage:e,bolt11:n,paidAt:r}){let s=JSON.parse(t).tags.filter(([a])=>a==="e"||a==="p"||a==="a"),i={kind:9735,created_at:Math.round(r.getTime()/1e3),content:"",tags:[...s,["bolt11",n],["description",t]]};return e&&i.tags.push(["preimage",e]),i}var cs,rn,Zd,vt,Xd,Dt,qe,of,tc,df,Bn,Dr,yf,Ur,Hn,_f,If,ds,In=D(()=>{je();je();ir();yn();je();wn();je();cs=Xe(Xi(),1),rn=Xe(Da(),1);Ya();je();wn();je();ir();wn();je();Xa();ir();Zd=Object.defineProperty,vt=(t,e)=>{for(var n in e)Zd(t,n,{get:e[n],enumerable:!0})};Xd={};vt(Xd,{insertEventIntoAscendingList:()=>Qd,insertEventIntoDescendingList:()=>Jd,normalizeURL:()=>Mr,utf8Decoder:()=>Dt,utf8Encoder:()=>qe});Dt=new TextDecoder("utf-8"),qe=new TextEncoder;of={};vt(of,{getHex64:()=>Rr,getInt:()=>Qa,getSubscriptionId:()=>ec,matchEventId:()=>sf,matchEventKind:()=>cf,matchEventPubkey:()=>af});tc=class{_conn;_seenOn={};eoseSubTimeout;getTimeout;constructor(t={}){this._conn={},this.eoseSubTimeout=t.eoseSubTimeout||3400,this.getTimeout=t.getTimeout||3400}close(t){t.forEach(e=>{let n=this._conn[Mr(e)];n&&n.close()})}async ensureRelay(t){let e=Mr(t),n=this._conn[e];if(n)return n;let r=lf(e,{getTimeout:this.getTimeout*.9,listTimeout:this.getTimeout*.9});return this._conn[e]=r,await r.connect(),r}sub(t,e,n){let r=new Set,o=n||{};o.alreadyHaveEvent=(h,p)=>{let m=this._seenOn[h]||new Set;return m.add(p),this._seenOn[h]=m,r.has(h)};let s=[],i=new Set,a=new Set,c=t.length,d=!1,l=setTimeout(()=>{d=!0;for(let h of a.values())h()},this.eoseSubTimeout);t.forEach(async h=>{let p;try{p=await this.ensureRelay(h)}catch{b();return}if(!p)return;let m=p.sub(e,o);m.on("event",g=>{r.add(g.id);for(let k of i.values())k(g)}),m.on("eose",()=>{d||b()}),s.push(m);function b(){if(c--,c===0){clearTimeout(l);for(let g of a.values())g()}}});let u={sub(h,p){return s.forEach(m=>m.sub(h,p)),u},unsub(){s.forEach(h=>h.unsub())},on(h,p){switch(h){case"event":i.add(p);break;case"eose":a.add(p);break}},off(h,p){h==="event"?i.delete(p):h==="eose"&&a.delete(p)}};return u}get(t,e,n){return new Promise(r=>{let o=this.sub(t,[e],n),s=setTimeout(()=>{o.unsub(),r(null)},this.getTimeout);o.on("event",i=>{r(i),clearTimeout(s),o.unsub()})})}list(t,e,n){return new Promise(r=>{let o=[],s=this.sub(t,e,n);s.on("event",i=>{o.push(i)}),s.on("eose",()=>{s.unsub(),r(o)})})}publish(t,e){let n=t.map(r=>{let o=this._conn[Mr(r)];return o?o.publish(e):uf(r)});return{on(r,o){n.forEach((s,i)=>{s.on(r,()=>o(t[i]))})},off(){}}}seenOn(t){return Array.from(this._seenOn[t]?.values?.()||[])}};df={};vt(df,{decrypt:()=>hf,encrypt:()=>ff});Bn={};vt(Bn,{queryProfile:()=>bf,searchDomain:()=>mf,useFetchImplementation:()=>pf});try{Dr=fetch}catch{}yf={};vt(yf,{generateSeedWords:()=>wf,privateKeyFromSeedWords:()=>gf,validateWords:()=>xf});Ur={};vt(Ur,{decode:()=>vf,naddrEncode:()=>Lf,neventEncode:()=>Sf,noteEncode:()=>Af,nprofileEncode:()=>Tf,npubEncode:()=>kf,nsecEncode:()=>Ef});Hn=5e3;_f={};vt(_f,{createDelegation:()=>Bf,getDelegator:()=>Hf});If={};vt(If,{getZapEndpoint:()=>Mf,makeZapReceipt:()=>Uf,makeZapRequest:()=>Rf,useFetchImplementation:()=>Cf,validateZapRequest:()=>Df});try{ds=fetch}catch{}B.hmacSha256Sync=(t,...e)=>ss(at,t,B.concatBytes(...e));B.sha256Sync=(...t)=>at(B.concatBytes(...t))});var ps=ie((fs,hs)=>{(function(t,e){typeof fs=="object"&&typeof hs<"u"?hs.exports=e():typeof define=="function"&&define.amd?define(e):(t=typeof globalThis<"u"?globalThis:t||self,t.DOMPurify=e())})(fs,function(){"use strict";let{entries:t,setPrototypeOf:e,isFrozen:n,getPrototypeOf:r,getOwnPropertyDescriptor:o}=Object,{freeze:s,seal:i,create:a}=Object,{apply:c,construct:d}=typeof Reflect<"u"&&Reflect;c||(c=function(_,G,P){return _.apply(G,P)}),s||(s=function(_){return _}),i||(i=function(_){return _}),d||(d=function(_,G){return new _(...G)});let l=E(Array.prototype.forEach),u=E(Array.prototype.pop),h=E(Array.prototype.push),p=E(String.prototype.toLowerCase),m=E(String.prototype.toString),b=E(String.prototype.match),g=E(String.prototype.replace),k=E(String.prototype.indexOf),L=E(String.prototype.trim),y=E(RegExp.prototype.test),H=V(TypeError);function E(z){return function(_){for(var G=arguments.length,P=new Array(G>1?G-1:0),J=1;J<G;J++)P[J-1]=arguments[J];return c(z,_,P)}}function V(z){return function(){for(var _=arguments.length,G=new Array(_),P=0;P<_;P++)G[P]=arguments[P];return d(z,G)}}function S(z,_,G){var P;G=(P=G)!==null&&P!==void 0?P:p,e&&e(z,null);let J=_.length;for(;J--;){let Ee=_[J];if(typeof Ee=="string"){let Le=G(Ee);Le!==Ee&&(n(_)||(_[J]=Le),Ee=Le)}z[Ee]=!0}return z}function j(z){let _=a(null);for(let[G,P]of t(z))_[G]=P;return _}function M(z,_){for(;z!==null;){let P=o(z,_);if(P){if(P.get)return E(P.get);if(typeof P.value=="function")return E(P.value)}z=r(z)}function G(P){return console.warn("fallback value for",P),null}return G}let se=s(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),fe=s(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),oe=s(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),Ne=s(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),kt=s(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),At=s(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),$s=s(["#text"]),Os=s(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns","slot"]),Zr=s(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),Ns=s(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),On=s(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),Uc=i(/\{\{[\w\W]*|[\w\W]*\}\}/gm),$c=i(/<%[\w\W]*|[\w\W]*%>/gm),Oc=i(/\${[\w\W]*}/gm),Nc=i(/^data-[\-\w.\u00B7-\uFFFF]/),Pc=i(/^aria-[\-\w]+$/),Ps=i(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),Fc=i(/^(?:\w+script|data):/i),jc=i(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),Fs=i(/^html$/i);var js=Object.freeze({__proto__:null,MUSTACHE_EXPR:Uc,ERB_EXPR:$c,TMPLIT_EXPR:Oc,DATA_ATTR:Nc,ARIA_ATTR:Pc,IS_ALLOWED_URI:Ps,IS_SCRIPT_OR_DATA:Fc,ATTR_WHITESPACE:jc,DOCTYPE_NAME:Fs});let zc=()=>typeof window>"u"?null:window,Wc=function(_,G){if(typeof _!="object"||typeof _.createPolicy!="function")return null;let P=null,J="data-tt-policy-suffix";G&&G.hasAttribute(J)&&(P=G.getAttribute(J));let Ee="dompurify"+(P?"#"+P:"");try{return _.createPolicy(Ee,{createHTML(Le){return Le},createScriptURL(Le){return Le}})}catch{return console.warn("TrustedTypes policy "+Ee+" could not be created."),null}};function zs(){let z=arguments.length>0&&arguments[0]!==void 0?arguments[0]:zc(),_=T=>zs(T);if(_.version="3.0.3",_.removed=[],!z||!z.document||z.document.nodeType!==9)return _.isSupported=!1,_;let G=z.document,P=G.currentScript,{document:J}=z,{DocumentFragment:Ee,HTMLTemplateElement:Le,Node:Yr,Element:Ws,NodeFilter:Xr,NamedNodeMap:Kc=z.NamedNodeMap||z.MozNamedAttrMap,HTMLFormElement:qc,DOMParser:Vc,trustedTypes:Nn}=z,Pn=Ws.prototype,Zc=M(Pn,"cloneNode"),Yc=M(Pn,"nextSibling"),Xc=M(Pn,"childNodes"),Jr=M(Pn,"parentNode");if(typeof Le=="function"){let T=J.createElement("template");T.content&&T.content.ownerDocument&&(J=T.content.ownerDocument)}let ae,cn="",{implementation:Qr,createNodeIterator:Jc,createDocumentFragment:Qc,getElementsByTagName:el}=J,{importNode:tl}=G,_e={};_.isSupported=typeof t=="function"&&typeof Jr=="function"&&Qr&&Qr.createHTMLDocument!==void 0;let{MUSTACHE_EXPR:eo,ERB_EXPR:to,TMPLIT_EXPR:no,DATA_ATTR:nl,ARIA_ATTR:rl,IS_SCRIPT_OR_DATA:ol,ATTR_WHITESPACE:Gs}=js,{IS_ALLOWED_URI:Ks}=js,Q=null,qs=S({},[...se,...fe,...oe,...kt,...$s]),ee=null,Vs=S({},[...Os,...Zr,...Ns,...On]),X=Object.seal(Object.create(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),ln=null,ro=null,Zs=!0,oo=!0,Ys=!1,Xs=!0,Nt=!1,Tt=!1,so=!1,io=!1,Pt=!1,Fn=!1,jn=!1,Js=!0,Qs=!1,sl="user-content-",ao=!0,un=!1,Ft={},jt=null,ei=S({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]),ti=null,ni=S({},["audio","video","img","source","image","track"]),co=null,ri=S({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),zn="http://www.w3.org/1998/Math/MathML",Wn="http://www.w3.org/2000/svg",Pe="http://www.w3.org/1999/xhtml",zt=Pe,lo=!1,uo=null,il=S({},[zn,Wn,Pe],m),St,al=["application/xhtml+xml","text/html"],cl="text/html",te,Wt=null,ll=J.createElement("form"),oi=function(f){return f instanceof RegExp||f instanceof Function},fo=function(f){if(!(Wt&&Wt===f)){if((!f||typeof f!="object")&&(f={}),f=j(f),St=al.indexOf(f.PARSER_MEDIA_TYPE)===-1?St=cl:St=f.PARSER_MEDIA_TYPE,te=St==="application/xhtml+xml"?m:p,Q="ALLOWED_TAGS"in f?S({},f.ALLOWED_TAGS,te):qs,ee="ALLOWED_ATTR"in f?S({},f.ALLOWED_ATTR,te):Vs,uo="ALLOWED_NAMESPACES"in f?S({},f.ALLOWED_NAMESPACES,m):il,co="ADD_URI_SAFE_ATTR"in f?S(j(ri),f.ADD_URI_SAFE_ATTR,te):ri,ti="ADD_DATA_URI_TAGS"in f?S(j(ni),f.ADD_DATA_URI_TAGS,te):ni,jt="FORBID_CONTENTS"in f?S({},f.FORBID_CONTENTS,te):ei,ln="FORBID_TAGS"in f?S({},f.FORBID_TAGS,te):{},ro="FORBID_ATTR"in f?S({},f.FORBID_ATTR,te):{},Ft="USE_PROFILES"in f?f.USE_PROFILES:!1,Zs=f.ALLOW_ARIA_ATTR!==!1,oo=f.ALLOW_DATA_ATTR!==!1,Ys=f.ALLOW_UNKNOWN_PROTOCOLS||!1,Xs=f.ALLOW_SELF_CLOSE_IN_ATTR!==!1,Nt=f.SAFE_FOR_TEMPLATES||!1,Tt=f.WHOLE_DOCUMENT||!1,Pt=f.RETURN_DOM||!1,Fn=f.RETURN_DOM_FRAGMENT||!1,jn=f.RETURN_TRUSTED_TYPE||!1,io=f.FORCE_BODY||!1,Js=f.SANITIZE_DOM!==!1,Qs=f.SANITIZE_NAMED_PROPS||!1,ao=f.KEEP_CONTENT!==!1,un=f.IN_PLACE||!1,Ks=f.ALLOWED_URI_REGEXP||Ps,zt=f.NAMESPACE||Pe,X=f.CUSTOM_ELEMENT_HANDLING||{},f.CUSTOM_ELEMENT_HANDLING&&oi(f.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(X.tagNameCheck=f.CUSTOM_ELEMENT_HANDLING.tagNameCheck),f.CUSTOM_ELEMENT_HANDLING&&oi(f.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(X.attributeNameCheck=f.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),f.CUSTOM_ELEMENT_HANDLING&&typeof f.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(X.allowCustomizedBuiltInElements=f.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),Nt&&(oo=!1),Fn&&(Pt=!0),Ft&&(Q=S({},[...$s]),ee=[],Ft.html===!0&&(S(Q,se),S(ee,Os)),Ft.svg===!0&&(S(Q,fe),S(ee,Zr),S(ee,On)),Ft.svgFilters===!0&&(S(Q,oe),S(ee,Zr),S(ee,On)),Ft.mathMl===!0&&(S(Q,kt),S(ee,Ns),S(ee,On))),f.ADD_TAGS&&(Q===qs&&(Q=j(Q)),S(Q,f.ADD_TAGS,te)),f.ADD_ATTR&&(ee===Vs&&(ee=j(ee)),S(ee,f.ADD_ATTR,te)),f.ADD_URI_SAFE_ATTR&&S(co,f.ADD_URI_SAFE_ATTR,te),f.FORBID_CONTENTS&&(jt===ei&&(jt=j(jt)),S(jt,f.FORBID_CONTENTS,te)),ao&&(Q["#text"]=!0),Tt&&S(Q,["html","head","body"]),Q.table&&(S(Q,["tbody"]),delete ln.tbody),f.TRUSTED_TYPES_POLICY){if(typeof f.TRUSTED_TYPES_POLICY.createHTML!="function")throw H('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof f.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw H('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');ae=f.TRUSTED_TYPES_POLICY,cn=ae.createHTML("")}else ae===void 0&&(ae=Wc(Nn,P)),ae!==null&&typeof cn=="string"&&(cn=ae.createHTML(""));s&&s(f),Wt=f}},si=S({},["mi","mo","mn","ms","mtext"]),ii=S({},["foreignobject","desc","title","annotation-xml"]),ul=S({},["title","style","font","a","script"]),Gn=S({},fe);S(Gn,oe),S(Gn,Ne);let ho=S({},kt);S(ho,At);let dl=function(f){let w=Jr(f);(!w||!w.tagName)&&(w={namespaceURI:zt,tagName:"template"});let v=p(f.tagName),W=p(w.tagName);return uo[f.namespaceURI]?f.namespaceURI===Wn?w.namespaceURI===Pe?v==="svg":w.namespaceURI===zn?v==="svg"&&(W==="annotation-xml"||si[W]):!!Gn[v]:f.namespaceURI===zn?w.namespaceURI===Pe?v==="math":w.namespaceURI===Wn?v==="math"&&ii[W]:!!ho[v]:f.namespaceURI===Pe?w.namespaceURI===Wn&&!ii[W]||w.namespaceURI===zn&&!si[W]?!1:!ho[v]&&(ul[v]||!Gn[v]):!!(St==="application/xhtml+xml"&&uo[f.namespaceURI]):!1},Lt=function(f){h(_.removed,{element:f});try{f.parentNode.removeChild(f)}catch{f.remove()}},po=function(f,w){try{h(_.removed,{attribute:w.getAttributeNode(f),from:w})}catch{h(_.removed,{attribute:null,from:w})}if(w.removeAttribute(f),f==="is"&&!ee[f])if(Pt||Fn)try{Lt(w)}catch{}else try{w.setAttribute(f,"")}catch{}},ai=function(f){let w,v;if(io)f="<remove></remove>"+f;else{let be=b(f,/^[\r\n\t ]+/);v=be&&be[0]}St==="application/xhtml+xml"&&zt===Pe&&(f='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+f+"</body></html>");let W=ae?ae.createHTML(f):f;if(zt===Pe)try{w=new Vc().parseFromString(W,St)}catch{}if(!w||!w.documentElement){w=Qr.createDocument(zt,"template",null);try{w.documentElement.innerHTML=lo?cn:W}catch{}}let ne=w.body||w.documentElement;return f&&v&&ne.insertBefore(J.createTextNode(v),ne.childNodes[0]||null),zt===Pe?el.call(w,Tt?"html":"body")[0]:Tt?w.documentElement:ne},ci=function(f){return Jc.call(f.ownerDocument||f,f,Xr.SHOW_ELEMENT|Xr.SHOW_COMMENT|Xr.SHOW_TEXT,null,!1)},fl=function(f){return f instanceof qc&&(typeof f.nodeName!="string"||typeof f.textContent!="string"||typeof f.removeChild!="function"||!(f.attributes instanceof Kc)||typeof f.removeAttribute!="function"||typeof f.setAttribute!="function"||typeof f.namespaceURI!="string"||typeof f.insertBefore!="function"||typeof f.hasChildNodes!="function")},Kn=function(f){return typeof Yr=="object"?f instanceof Yr:f&&typeof f=="object"&&typeof f.nodeType=="number"&&typeof f.nodeName=="string"},Fe=function(f,w,v){_e[f]&&l(_e[f],W=>{W.call(_,w,v,Wt)})},li=function(f){let w;if(Fe("beforeSanitizeElements",f,null),fl(f))return Lt(f),!0;let v=te(f.nodeName);if(Fe("uponSanitizeElement",f,{tagName:v,allowedTags:Q}),f.hasChildNodes()&&!Kn(f.firstElementChild)&&(!Kn(f.content)||!Kn(f.content.firstElementChild))&&y(/<[/\w]/g,f.innerHTML)&&y(/<[/\w]/g,f.textContent))return Lt(f),!0;if(!Q[v]||ln[v]){if(!ln[v]&&di(v)&&(X.tagNameCheck instanceof RegExp&&y(X.tagNameCheck,v)||X.tagNameCheck instanceof Function&&X.tagNameCheck(v)))return!1;if(ao&&!jt[v]){let W=Jr(f)||f.parentNode,ne=Xc(f)||f.childNodes;if(ne&&W){let be=ne.length;for(let Z=be-1;Z>=0;--Z)W.insertBefore(Zc(ne[Z],!0),Yc(f))}}return Lt(f),!0}return f instanceof Ws&&!dl(f)||(v==="noscript"||v==="noembed")&&y(/<\/no(script|embed)/i,f.innerHTML)?(Lt(f),!0):(Nt&&f.nodeType===3&&(w=f.textContent,w=g(w,eo," "),w=g(w,to," "),w=g(w,no," "),f.textContent!==w&&(h(_.removed,{element:f.cloneNode()}),f.textContent=w)),Fe("afterSanitizeElements",f,null),!1)},ui=function(f,w,v){if(Js&&(w==="id"||w==="name")&&(v in J||v in ll))return!1;if(!(oo&&!ro[w]&&y(nl,w))){if(!(Zs&&y(rl,w))){if(!ee[w]||ro[w]){if(!(di(f)&&(X.tagNameCheck instanceof RegExp&&y(X.tagNameCheck,f)||X.tagNameCheck instanceof Function&&X.tagNameCheck(f))&&(X.attributeNameCheck instanceof RegExp&&y(X.attributeNameCheck,w)||X.attributeNameCheck instanceof Function&&X.attributeNameCheck(w))||w==="is"&&X.allowCustomizedBuiltInElements&&(X.tagNameCheck instanceof RegExp&&y(X.tagNameCheck,v)||X.tagNameCheck instanceof Function&&X.tagNameCheck(v))))return!1}else if(!co[w]){if(!y(Ks,g(v,Gs,""))){if(!((w==="src"||w==="xlink:href"||w==="href")&&f!=="script"&&k(v,"data:")===0&&ti[f])){if(!(Ys&&!y(ol,g(v,Gs,"")))){if(v)return!1}}}}}}return!0},di=function(f){return f.indexOf("-")>0},fi=function(f){let w,v,W,ne;Fe("beforeSanitizeAttributes",f,null);let{attributes:be}=f;if(!be)return;let Z={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:ee};for(ne=be.length;ne--;){w=be[ne];let{name:Be,namespaceURI:mo}=w;if(v=Be==="value"?w.value:L(w.value),W=te(Be),Z.attrName=W,Z.attrValue=v,Z.keepAttr=!0,Z.forceKeepAttr=void 0,Fe("uponSanitizeAttribute",f,Z),v=Z.attrValue,Z.forceKeepAttr||(po(Be,f),!Z.keepAttr))continue;if(!Xs&&y(/\/>/i,v)){po(Be,f);continue}Nt&&(v=g(v,eo," "),v=g(v,to," "),v=g(v,no," "));let hi=te(f.nodeName);if(ui(hi,W,v)){if(Qs&&(W==="id"||W==="name")&&(po(Be,f),v=sl+v),ae&&typeof Nn=="object"&&typeof Nn.getAttributeType=="function"&&!mo)switch(Nn.getAttributeType(hi,W)){case"TrustedHTML":{v=ae.createHTML(v);break}case"TrustedScriptURL":{v=ae.createScriptURL(v);break}}try{mo?f.setAttributeNS(mo,Be,v):f.setAttribute(Be,v),u(_.removed)}catch{}}}Fe("afterSanitizeAttributes",f,null)},hl=function T(f){let w,v=ci(f);for(Fe("beforeSanitizeShadowDOM",f,null);w=v.nextNode();)Fe("uponSanitizeShadowNode",w,null),!li(w)&&(w.content instanceof Ee&&T(w.content),fi(w));Fe("afterSanitizeShadowDOM",f,null)};return _.sanitize=function(T){let f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},w,v,W,ne;if(lo=!T,lo&&(T="<!-->"),typeof T!="string"&&!Kn(T))if(typeof T.toString=="function"){if(T=T.toString(),typeof T!="string")throw H("dirty is not a string, aborting")}else throw H("toString is not a function");if(!_.isSupported)return T;if(so||fo(f),_.removed=[],typeof T=="string"&&(un=!1),un){if(T.nodeName){let Be=te(T.nodeName);if(!Q[Be]||ln[Be])throw H("root node is forbidden and cannot be sanitized in-place")}}else if(T instanceof Yr)w=ai("<!---->"),v=w.ownerDocument.importNode(T,!0),v.nodeType===1&&v.nodeName==="BODY"||v.nodeName==="HTML"?w=v:w.appendChild(v);else{if(!Pt&&!Nt&&!Tt&&T.indexOf("<")===-1)return ae&&jn?ae.createHTML(T):T;if(w=ai(T),!w)return Pt?null:jn?cn:""}w&&io&&Lt(w.firstChild);let be=ci(un?T:w);for(;W=be.nextNode();)li(W)||(W.content instanceof Ee&&hl(W.content),fi(W));if(un)return T;if(Pt){if(Fn)for(ne=Qc.call(w.ownerDocument);w.firstChild;)ne.appendChild(w.firstChild);else ne=w;return(ee.shadowroot||ee.shadowrootmod)&&(ne=tl.call(G,ne,!0)),ne}let Z=Tt?w.outerHTML:w.innerHTML;return Tt&&Q["!doctype"]&&w.ownerDocument&&w.ownerDocument.doctype&&w.ownerDocument.doctype.name&&y(Fs,w.ownerDocument.doctype.name)&&(Z="<!DOCTYPE "+w.ownerDocument.doctype.name+`>
`+Z),Nt&&(Z=g(Z,eo," "),Z=g(Z,to," "),Z=g(Z,no," ")),ae&&jn?ae.createHTML(Z):Z},_.setConfig=function(T){fo(T),so=!0},_.clearConfig=function(){Wt=null,so=!1},_.isValidAttribute=function(T,f,w){Wt||fo({});let v=te(T),W=te(f);return ui(v,W,w)},_.addHook=function(T,f){typeof f=="function"&&(_e[T]=_e[T]||[],h(_e[T],f))},_.removeHook=function(T){if(_e[T])return u(_e[T])},_.removeHooks=function(T){_e[T]&&(_e[T]=[])},_.removeAllHooks=function(){_e={}},_}var Gc=zs();return Gc})});var on=ie((t0,rc)=>{rc.exports=window.DOMPurify||(window.DOMPurify=ps().default||ps())});var q,Ut,oc,Ue=D(()=>{"use strict";q=t=>localStorage.getItem(t),Ut=(t,e)=>{localStorage.setItem(t,e)},oc=()=>{localStorage.clear()}});var Cn,$f,sn,$r,ms,Or=D(()=>{"use strict";In();Cn=new tc,$f=new Set,sn=(t,e,n,r)=>O(void 0,null,function*(){let o=[...new Set(n)],s=Cn.sub(o,[{kinds:r,authors:t}]);return new Promise(i=>{s.on("event",a=>{t.indexOf(a.pubkey)!==-1&&r.indexOf(a.kind)!==-1&&e(a)}),s.on("eose",()=>{s.unsub(),i()})})}),$r=(t,e)=>O(void 0,null,function*(){let n=[...new Set(e)];try{let r=Cn.publish(n,t);return yield new Promise(o=>{let s=setTimeout(()=>o(!1),1e4);r.on("ok",()=>{clearTimeout(s),o(!0)}),r.on("failed",()=>{clearTimeout(s),o(!1)})})}catch(r){return console.error("Error publishing event:",r),!1}}),ms=()=>{try{Cn&&typeof Cn.close=="function"&&Cn.close()}catch(t){console.warn("Error closing relay connections:",t)}finally{$f.clear()}}});var $t,Ve,le,Of,sc,Nf,Pf,Ff,Pr,ic,bs,re,Y,Nr,Fr,jf,ac,ys,zf,Wf,cc,Mn,Gf,$e,Ze=D(()=>{"use strict";$t=Xe(on());Ue();Or();Ve={},le={},Of=()=>{let t=q("my-profile-last-fetch-date");return t===null?null:Number(t)},sc=!1,Nf=()=>{sc=!0,Ut("my-profile-last-fetch-date",Date.now().toString())},Pf=()=>{let t=q("my-profile-last-update-date");return t===null?null:Number(t)},Ff=()=>{Ut("my-profile-last-update-date",Date.now().toString())},Pr=()=>sc,ic=()=>{if(!Pr())return!1;let t=Of(),e=Pf();return!(e===null||t===null||e>t-1e4)},bs=t=>{if(q("pubkey")===null)throw new Error("storeMyProfileEvent no pubkey in localStorage");if(!(t.kind===0||t.kind===2||t.kind===10002||t.kind===3)||t.pubkey!==q("pubkey"))return!1;let e=`my-profile-event-${t.kind}`;if(!Ve[e]){let n=q(e);Ve[e]=n===null?[]:JSON.parse(n)}return Ve[e].some(n=>n.id===t.id)?!1:(Ve[e].push(t),Ut(e,JSON.stringify(Ve[e])),Ff(),!0)},re=t=>{let e=`my-profile-event-${t}`;if(!Ve[e]){let n=q(e);if(n===null)return null;Ve[e]=JSON.parse(n)}return Ve[e].length===0?null:Ve[e].sort((n,r)=>r.created_at-n.created_at)},Y=t=>{let e=re(t);return e===null?null:e[0]},Nr=()=>{let t=Y(10002),e=t?t.tags.filter(n=>n[0]==="r").map(n=>n[1]):[];return e.length>3?e:[...new Set([...e,"wss://hist.nostr.land","wss://relay.damus.io","wss://nostr-pub.wellorder.net","wss://purplepag.es","wss://relay.nos.social","wss://relay.nostr.band","wss://relay.snort.social"])].slice(0,3)},Fr=(t,e)=>O(void 0,null,function*(){if(Pr())[0,2,10002,3].forEach(n=>{let r=Y(n);r!==null&&e(r)});else{let n=Nr(),r=!1;if(yield sn([t],o=>{if(o.kind===10002){let s=new Set(n);o.tags.filter(a=>a[0]==="r"&&(!a[2]||a[2]==="write")).map(a=>a[1]).filter(a=>!s.has(a)).length>0&&(r=!0)}bs(o),e(o)},n,[0,2,10002,3]),r){let o=Nr();JSON.stringify(o)!==JSON.stringify(n)&&(yield sn([t],s=>{bs(s),e(s)},o,[0,2,10002,3]))}Nf()}}),jf=t=>{le[t.pubkey]||(le[t.pubkey]={}),(!le[t.pubkey][t.kind]||le[t.pubkey][t.kind].created_at<t.created_at)&&(le[t.pubkey][t.kind]=t)},ac=()=>O(void 0,null,function*(){let t=Y(3);if(!t||t.tags.length===0)return;let e=t.tags.filter(n=>n[0]==="p").map(n=>n[1]).filter(n=>!le[n]);e.length>0&&(yield sn(e,jf,Nr(),[0,10002,3]))}),ys=(t,e)=>q("pubkey")===t?Y(e):!le[t]||!le[t][e]?null:le[t][e],zf=t=>{let e=Object.keys(le).map(n=>{if(!le[n][3])return null;let r=le[n][3].tags.find(o=>o[1]===t&&o[3]);return r?(0,$t.sanitize)(r[3]):null}).reduce((n,r)=>r?n[r]?wo(go({},n),{[r]:n[r]+1}):wo(go({},n),{[r]:1}):n,{});return Object.keys(e).length===0?null:(0,$t.sanitize)(Object.keys(e).sort((n,r)=>e[r]-e[n])[0])},Wf=t=>{let e=Y(3);if(e){let n=e.tags.find(r=>r[1]===t&&r[3]);if(n)return(0,$t.sanitize)(n[3])}return null},cc=t=>{let e=Y(3);return e?!!e.tags.some(n=>n[1]===t):null},Mn=t=>{if(q("pubkey")===t){let n=Y(0);if(n){let{name:r}=JSON.parse(n.content);if(r)return(0,$t.sanitize)(r)}}else{let n=Wf(t);if(n)return n;if(le[t]&&le[t][0]){let{name:r,display_name:o}=JSON.parse(le[t][0].content);if(r)return(0,$t.sanitize)(r);if(o)return(0,$t.sanitize)(o)}}let e=zf(t);return e?`${e} (?)`:`${t.substring(0,10)}...`},Gf=t=>O(void 0,null,function*(){bs(t);let e=[...Nr(),"wss://nostr.mutinywallet.com","wss://purplepag.es","wss://relay.nos.social","wss://relay.nostr.band","wss://relay.snort.social"],n=[...new Set(e)];return $r(t,n)}),$e=(t,e,n="Update")=>O(void 0,null,function*(){let r=document.getElementById(e);if(!r)return!1;if(r.setAttribute("disabled",""),r.setAttribute("aria-busy","true"),r.innerHTML="Signing...",!window.nostr)return new Promise(o=>{o(!1)});try{let o=yield window.nostr.signEvent(t);r.innerHTML="Sending...";let s=yield Gf(o);return r.removeAttribute("aria-busy"),r.innerHTML="Received by Relays!",setTimeout(()=>{r.innerHTML=n,r.removeAttribute("disabled")},1e3),s}catch(o){return console.error("Error signing or publishing event:",o),r.removeAttribute("aria-busy"),r.removeAttribute("disabled"),r.innerHTML="Error! Try again",!1}})});function lc(t,e){if(e===0)return["just now","right now"];var n=Kf[Math.floor(e/2)];return t>1&&(n+="s"),[t+" "+n+" ago","in "+t+" "+n]}var Kf,uc=D(()=>{Kf=["second","minute","hour","day","week","month","year"]});function dc(t,e){if(e===0)return["\u521A\u521A","\u7247\u523B\u540E"];var n=qf[~~(e/2)];return[t+" "+n+"\u524D",t+" "+n+"\u540E"]}var qf,fc=D(()=>{qf=["\u79D2","\u5206\u949F","\u5C0F\u65F6","\u5929","\u5468","\u4E2A\u6708","\u5E74"]});var gs,ws,xs,jr=D(()=>{gs={},ws=function(t,e){gs[t]=e},xs=function(t){return gs[t]||gs.en_US}});function hc(t){return t instanceof Date?t:!isNaN(t)||/^\d+$/.test(t)?new Date(parseInt(t)):(t=(t||"").trim().replace(/\.\d+/,"").replace(/-/,"/").replace(/-/,"/").replace(/(\d)T(\d)/,"$1 $2").replace(/Z/," UTC").replace(/([+-]\d\d):?(\d\d)/," $1$2"),new Date(t))}function Es(t,e){var n=t<0?1:0;t=Math.abs(t);for(var r=t,o=0;t>=vs[o]&&o<vs.length;o++)t/=vs[o];return t=Math.floor(t),o*=2,t>(o===0?9:1)&&(o+=1),e(t,o,r)[n].replace("%s",t.toString())}function ks(t,e){var n=e?hc(e):new Date;return(+n-+hc(t))/1e3}var vs,As=D(()=>{vs=[60,60,24,7,4.345238095238096,12]});var Rn,pc=D(()=>{As();jr();Rn=function(t,e,n){var r=ks(t,n&&n.relativeDate);return Es(r,xs(e))}});var mc=D(()=>{});var bc=D(()=>{mc();As();jr()});var Ts=D(()=>{uc();fc();jr();pc();bc();ws("en_US",lc);ws("zh_CN",dc)});var Ss,Ye,Vf,Zf,gc,Et,Yf,Xf,Jf,Qf,eh,th,Oe,zr=D(()=>{"use strict";Ts();Ss=Xe(on());Ze();Ye=new Map,Vf=t=>`
    <table role="grid" class="historytable">
        <tbody>${t.map(e=>`
            <tr>
                <td><small>${Rn(e.ago*1e3)}</small></td>
                <td><ul>${e.changes.map(n=>`<li>${n}</li>`).join("")}</ul></td>
                <td>${e.option}</td>
            </tr>
        `).join("")}
        </tbody>
    </table>
`,Zf=t=>{let e=`metadata-${t.map(r=>`${r.id.substring(0,8)}-${r.created_at}`).join("|")}`;if(Ye.has(e))return Ye.get(e);let n=t.map((r,o,s)=>{let i=[],a=JSON.parse(r.content),c=d=>(0,Ss.sanitize)(typeof d=="string"?d.replace(/(\r\n|\n|\r)/gm," "):d.toString());if(o===s.length-1)Object.keys(a).forEach(d=>i.push(`${d}: ${c(a[d])}`));else{let d=JSON.parse(s[o+1].content);Object.keys(a).filter(l=>!Object.keys(d).some(u=>u===l)).forEach(l=>{i.push(`added ${l}: ${c(a[l])}`)}),Object.keys(a).filter(l=>Object.keys(d).some(u=>u===l&&d[l]!==a[l])).forEach(l=>{i.push(`modified ${l}: ${c(a[l])}`)}),Object.keys(d).filter(l=>!Object.keys(a).some(u=>u===l)).forEach(l=>{i.push(`removed ${c(d[l]).length===0?`blank ${l}`:`${l}: ${c(d[l])}`}`)})}return{ago:r.created_at,changes:i,option:o===0?"<ins>Backup Complete<ins>":`<a href="#" id="restore-${r.kind}-${o}" class="secondary" onclick="event.preventDefault();">Restore</a>`}});return Ye.set(e,n),n},gc=(t,e)=>!!(t[1]===e[1]||t[3]&&e[3]&&t[3]===e[3]),Et=t=>t[3]&&t[3].length>0?`<mark>${(0,Ss.sanitize)(t[3])}</mark>`:`<mark title="${t[1]}">${Mn(t[1])}</mark>`,Yf=t=>{let e=`contacts-${t.map(r=>`${r.id.substring(0,8)}-${r.created_at}`).join("|")}`;if(Ye.has(e))return Ye.get(e);let n=t.map((r,o,s)=>{let i=[],a=r.tags.filter(c=>c[0]==="p");if(o===s.length-1)i.push(a.map(Et).join(", "));else{let c=s[o+1].tags.filter(h=>h[0]==="p"),d=a.filter(h=>!c.some(p=>gc(h,p)));d.length>0&&i.push(`<div class="added">added ${d.map(Et).join(", ")}</div>`),a.filter(h=>c.filter(p=>p[1]===h[1]).some(p=>h[3]!==p[3])).forEach(h=>{let p=c.find(m=>m[1]===h[1]);return!p||!h[3]&&!p[3]?null:h[3]&&!p[3]?i.push(`added petname for ${Et(h)}`):!h[3]&&p[3]?i.push(`removed petname for ${Et(h)}, previously ${Et(p)}`):i.push(`modified petname for ${Et(h)}, previously ${Et(p)}`)});let u=c.filter(h=>!a.some(p=>gc(h,p)));u.length>0&&i.push(`<div class="removed">removed ${u.map(Et).join(", ")}</div>`)}return{ago:r.created_at,changes:i,option:o===0?"<ins>Backup Complete<ins>":`<a href="#" id="restore-${r.kind}-${o}" class="secondary" onclick="event.preventDefault()">Restore</a>`}});return Ye.set(e,n),n},Xf=t=>t[1]+(t[2]?` ${t[2]} only`:""),Jf=t=>{let e=`relays-${t.map(r=>`${r.id.substring(0,8)}-${r.created_at}`).join("|")}`;if(Ye.has(e))return Ye.get(e);let n=t.map((r,o,s)=>{let i=[],a=r.tags.filter(c=>c[0]==="r");if(o===s.length-1)a.forEach(c=>i.push(Xf(c)));else{let c=s[o+1].tags,d=(p,m)=>{let b=`<mark class="${m}">write</mark>`,g=`<mark class="${m}">read</mark>`,k=`${g} and ${b}`;return p[2]?p[2]==="write"?`${b} only`:`${g} only`:k},l=a.filter(p=>!c.some(m=>m[1]===p[1]));l.length>0&&l.forEach(p=>i.push(`<div>added <mark>${p[1]}</mark> as ${d(p,"added")}</div>`)),a.filter(p=>c.filter(m=>m[1]===p[1]).some(m=>p[2]!==m[2])).forEach(p=>{let m=c.find(g=>g[1]===p[1]),b;p[2]?p[2]==="read"?m?b='<mark class="added">read</mark> instead of <mark class="removed">write</mark>':b='only read and no longer <mark class="removed">write</mark>':m?b='<mark class="added">write</mark> instead of <mark class="removed">read</mark>':b='only write and no longer <mark class="removed">read</mark>':m&&m[2]==="read"?b='<mark class="added">write</mark> as well as read':b='<mark class="added">read</mark> as well as write',i.push(`<div class="modified">modified <mark>${p[1]}</mark> to ${b}</div>`)});let h=c.filter(p=>!a.some(m=>m[1]===p[1]));h.length>0&&h.forEach(p=>i.push(`<div>removed <mark>${p[1]}</mark> which was ${d(p,"removed")}</div>`))}return{ago:r.created_at,changes:i,option:o===0?"<ins>Backup Complete<ins>":`<a href="#" id="restore-${r.kind}-${o}" class="secondary" onclick="event.preventDefault()">Restore</a>`}});return Ye.set(e,n),n},Qf=t=>{if(!t||t.length===0)return"<p>none</p>";let e;return t[0].kind===0?e=Zf(t):t[0].kind===3?e=Yf(t):t[0].kind===10002?e=Jf(t):e=[],Vf(e)},eh=(t,e)=>{t.querySelectorAll("mark[title]").forEach(r=>{let o=r.getAttribute("title");if(o&&o.length===64){let s=o;r.classList.add("clickable-contact"),r.addEventListener("click",i=>{i.preventDefault(),i.stopPropagation(),e(s)})}})},th=(t,e)=>{t&&t.forEach((n,r)=>{if(r===0)return;let o=`restore-${n.kind}-${r}`,s=document.getElementById(o);if(!s)return;let d=n,{id:i,sig:a}=d,c=bi(d,["id","sig"]);c.created_at=Math.floor(Date.now()/1e3),s.onclick=l=>O(void 0,null,function*(){if(l.preventDefault(),s.setAttribute("aria-busy","true"),s.innerHTML="Restoring...",yield $e(c,o,"Restored!")){let h=s.closest("tr");if(h){let p=document.createElement("div");p.className="restore-success",p.innerHTML="<small>\u2713 Restored</small>",p.style.color="green",h.appendChild(p)}setTimeout(e,1e3)}})})},Oe=(t,e,n)=>{let r=document.getElementById(t);r&&(r.innerHTML='<h4>Backup History</h4><p aria-busy="true">Loading history...</p>',setTimeout(()=>{let o=re(e),s=Qf(o);if(r.innerHTML=`<h4>Backup History</h4>${s}`,e===3&&n&&eh(r,n),!document.getElementById("contact-history-styles")){let i=document.createElement("style");i.id="contact-history-styles",i.textContent=`
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
      `,document.head.appendChild(i)}th(o,()=>{Oe(t,e,n)})},0))}});var Gr,Wr,Dn,me,nh,Ls,rh,oh,Kr,_s=D(()=>{"use strict";In();Gr=Xe(on());Ze();zr();Ue();Wr={},Dn={},me=t=>{if(!Dn[t]){let e=document.getElementById(t);if(e)Dn[t]=e;else return null}return Dn[t]},nh=t=>{let e=ys(t,0);if(!e)return`
      <article>
        <strong>${Mn(t)}</strong>
        <p>loading user metadata...</p>
      </article>
    `;let n=JSON.parse(e.content),r=cc(t);return`
    <article>
      <div>
        ${n&&n.picture?`<img src="${(0,Gr.sanitize)(n.picture)}" /> `:""}
        <div class="contactdetailsmain">
          <strong>${Mn(t)}</strong>
          ${n.nip05?`<small id="nip05-${t}">${(0,Gr.sanitize)(n.nip05)} </small>`:""}<span id="nip05-${t}-verified"></span>
          <div><small>${n.about?(0,Gr.sanitize)(n.about):""}</small></div>
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
  `},Ls=t=>{let e=me("contactdetails");if(!e)return;e.innerHTML=nh(t),window.scrollTo(0,0),ys(t,0)||setTimeout(()=>Ls(t),500),(()=>O(void 0,null,function*(){let s=me(`nip05-${t}`);if(!s)return;let i=s.innerHTML.trim();if(Wr[i]!==void 0){let d=Wr[i]===t,l=me(`nip05-${t}-verified`);l&&(l.innerHTML=d?"<ins>&#10004; verified</ins>":"<del>&#10004; verified</del>");return}let a=!1;try{let d=yield Bn.queryProfile(i);a=!!d&&d.pubkey===t,Wr[i]=a?t:null}catch(d){Wr[i]=null}let c=me(`nip05-${t}-verified`);c&&(c.innerHTML=a?"<ins>&#10004; verified</ins>":"<del>&#10004; verified</del>")}))();let r=me(`back-to-history-${t}`);r&&(r.onclick=()=>{let s=me("contactsbackuphistory");s&&(s.style.display="block"),e&&(e.innerHTML="")});let o=me(`restore-contact-${t}`);o&&(o.onclick=()=>O(void 0,null,function*(){let s=Y(3);if(!s)return;let i=[...s.tags];if(!i.find(c=>c[1]===t)&&(i.push(["p",t,"",""]),yield $e({pubkey:q("pubkey"),kind:3,created_at:Math.floor(Date.now()/1e3),content:"",tags:i},`restore-contact-${t}`,"Contact Restored"),Oe("contactsbackuphistory",3),e)){e.innerHTML=`
            <div class="success-message">
              <h4>Contact Restored Successfully</h4>
              <p>The contact has been added back to your contact list.</p>
              <button id="back-to-history" class="secondary outline">Back to History</button>
            </div>
          `;let c=me("back-to-history");c&&(c.onclick=()=>{let d=me("contactsbackuphistory");d&&(d.style.display="block"),e&&(e.innerHTML="")})}}))},rh=()=>{let t=me("contactsbackuphistory");if(!t)return;t.querySelectorAll("mark[title]").forEach(n=>{let r=n.getAttribute("title");if(r&&r.length===64){let o=r;n.style.cursor="pointer",n.addEventListener("click",()=>{t.style.display="none",Ls(o)}),n.addEventListener("mouseover",()=>{n.style.textDecoration="underline"}),n.addEventListener("mouseout",()=>{n.style.textDecoration="none"})}})},oh=()=>{let t=me("PM-container");t&&(Object.keys(Dn).forEach(e=>delete Dn[e]),t.innerHTML=`
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
  `,setTimeout(()=>{let e=me("history-loading");e&&e.remove(),Oe("contactsbackuphistory",3,n=>{let r=me("contactsbackuphistory");r&&(r.style.display="none"),Ls(n)}),setTimeout(()=>rh(),100)},0))},Kr=oh});var Un,Ot,sh,Bs,ih,ah,wc,qr,Hs=D(()=>{"use strict";In();Un=Xe(on());Ze();zr();Ue();Ot=(t,e,n)=>`
    <label for="PM-form-${t}">
        ${n||t}
        <input
          type="text"
          name="PM-form-${t}"
          id="PM-form-${t}"
          placeholder="${n||t}" ${e&&e[t]?`value="${(0,Un.sanitize)(e[t])}"`:""}
        />
    </label>
`,sh=(t,e,n)=>`
    <label for="PM-form-${t}">
      ${n||t}
      <textarea
        id="PM-form-${t}"
        name="PM-form-${t}"
        placeholder="${n||t}"
      >${e&&e[t]?(0,Un.sanitize)(e[t]):""}</textarea>
    </label>
`,Bs=["name","nip05","about","picture","banner","lud06","lud16"],ih=t=>{let e=t?Object.keys(t).filter(n=>!Bs.some(r=>r===n)):[];return`<form id="metadatapageform">
    <div class="section-card">
      <div class="grid">
        ${Ot("name",t)}
        ${Ot("nip05",t)}
      </div>
      ${sh("about",t)}
      
      <div class="profile-images mt-2">
        <div class="mb-2">
          <label>Profile Picture</label>
          <img id="metadata-form-picture" src="${t&&t.picture?(0,Un.sanitize)(t.picture):""}">
          ${Ot("picture",t)}
        </div>
        
        <div class="mb-2">
          <label>Banner Image</label>
          <img id="metadata-form-banner" src="${t&&t.banner?(0,Un.sanitize)(t.banner):""}">
          ${Ot("banner",t)}
        </div>
      </div>
      
      <div class="lightning-section mt-2">
        <h4>Lightning Address</h4>
        <div class="grid">
          ${Ot("lud06",t,"lud06 (LNURL)")}
          ${Ot("lud16",t)}
        </div>
      </div>
      
      ${e.length>0?`
        <div class="custom-fields mt-2">
          <h4>Custom Fields</h4>
          <div class="grid">
            ${e.map(n=>Ot(n,t)).join("")}
          </div>
        </div>
      `:""}
      
      <div class="form-actions mt-3">
        <button id="metadatasubmitbutton" type="submit">${t?"Update":"Save"}</button>
        <button id="metadataresetbutton" class="secondary outline" type="reset">Reset Form</button>
      </div>
    </div>
  </form>`},ah=()=>O(void 0,null,function*(){let t=new FormData(document.getElementById("metadatapageform")),e={},n=Y(0);(n?[...Object.keys(JSON.parse(n.content)),...Bs]:Bs).forEach(o=>{let s=t.get(`PM-form-${o}`);s&&s!==""&&(e[o]=s)}),(yield $e({pubkey:q("pubkey"),kind:0,created_at:Math.floor(Date.now()/1e3),content:JSON.stringify(e),tags:[]},"metadatasubmitbutton"))&&Oe("metadatahistory",0)}),wc=t=>{let e=Y(0),n=e?JSON.parse(e.content):null;document.getElementById(t).innerHTML=`<div class="profileform">
    <h3>Metadata</h3>
    ${ih(n)}
  </div>`,["picture","banner"].forEach(s=>{let i=document.getElementById(`PM-form-${s}`);i.onchange=()=>{document.getElementById(`metadata-form-${s}`).setAttribute("src",i.value)}});let r=document.getElementById("PM-form-nip05"),o=()=>O(void 0,null,function*(){if(r.value==="")r.removeAttribute("aria-invalid");else{let s=!1;try{let i=yield Bn.queryProfile(r.value);s=!!i&&i.pubkey===q("pubkey")}catch(i){}r.setAttribute("aria-invalid",s?"false":"true")}});o(),r.onchange=o,document.getElementById("metadatasubmitbutton").onclick=s=>{ah(),s.preventDefault()},document.getElementById("metadataresetbutton").onclick=s=>{wc(t),s.preventDefault()}},qr=()=>{let t=document.getElementById("PM-container");t.innerHTML=`
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
  `,wc("metadataformcontainer"),Oe("metadatahistory",0)}});var xc,ch,lh,vc,uh,Vr,Is=D(()=>{"use strict";Ze();zr();Ue();xc=(t,e)=>`
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
`,ch=t=>`
  <form id="relaysform" class="relays-form">
    <div id="relay-list">
      ${t?t.tags.map((e,n)=>`<div id="relay-row-${n}">${xc(n,e)}</div>`).join(""):""}
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
`,lh=()=>O(void 0,null,function*(){let t=document.querySelectorAll(".relay-row"),e=[];t.forEach((n,r)=>{var d,l,u;let o=null,s=n.querySelector(".relay-url input");if(s?o=s.value.trim():o=((d=n.querySelector(".relay-url").textContent)==null?void 0:d.trim())||null,!o||o==="")return;let i=(l=n.querySelector(`#PM-form-relay-${r}-read`))==null?void 0:l.checked,a=(u=n.querySelector(`#PM-form-relay-${r}-write`))==null?void 0:u.checked,c=["r",o];i&&a?e.push(c):e.push(["r",o,i?"read":"write"])}),yield $e({pubkey:q("pubkey"),kind:10002,created_at:Math.floor(Date.now()/1e3),content:"",tags:e},"relayssubmitbutton"),Oe("relaysbackuphistory",10002)}),vc=t=>{let e=document.getElementById(t);if(!e)return;e.innerHTML=`<div class="relayform">
    <h3>RELAYS_</h3>
    ${ch(Y(10002))}
  </div>`;let n=document.getElementById("relayssubmitbutton");n&&(n.onclick=s=>{lh(),s.preventDefault()});let r=document.getElementById("relaysresetbutton");r&&(r.onclick=s=>{vc(t),s.preventDefault()});let o=document.getElementById("relaysaddbutton");o&&(o.onclick=s=>{let i=document.getElementById("new-relay-row");if(i){let a=document.querySelectorAll(".relay-row").length,c=document.createElement("div");c.id=`relay-row-${a}`,c.innerHTML=xc(a),i.before(c)}s.preventDefault()})},uh=()=>{let t=document.getElementById("PM-container");t&&(t.innerHTML=`
    <div class="container">
      <div id="relayforcontainer"></div>
      <div class="section-card mt-3">
        <h3>RELAY HISTORY_</h3>
        <div id="relaysbackuphistory"></div>
      <div>
    </div>
  `,vc("relayforcontainer"),Oe("relaysbackuphistory",10002))},Vr=uh});var Ec,an,dh,fh,hh,ph,kc,mh,$n,Ac=D(()=>{"use strict";In();Ze();_s();Hs();Is();Ue();Ec=()=>'<div class="text-center"><img class="hero-logo" src="./img/nostr-profile-manage-logo.png"></div>',an=(t=!0)=>`${t?'aria-busy="true"':""}`,dh=(t,e=!1)=>t==null?`<div>
      <button ${an(e)} class="outline contrast">No Metadata</button>
    </div>`:`<div>
    <button
      ${an(e)}
      class="outline"
      id="metadatabutton"
    >
      ${Object.keys(JSON.parse(t.content)).length} Metadata Fields
    </button>
  </div>`,fh=(t,e=!1)=>t==null?`<div><button
      ${an(e)}
      id="contactsbutton"
    >No Contacts</button></div>`:`<div>
    <button
      ${an(e)}
      id="contactsbutton"
    >${t.tags.length} Contacts</button>
  </div>`,hh=(t,e=!1)=>{if(t==null)return`<div>
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
    </button></div>`},ph=t=>{let e=JSON.parse(t.content),n=e.about?e.about.replace(/\r?\n|\r/,""):"";return n.length>50&&(n=`${n.substring(0,47)}...`),`
    <div class="profile-header">
      <img src="${e.picture?e.picture:"./img/nostr-profile-manage-logo.png"}" alt="Profile picture">
      <div class="profile-info">
        <h2>${e.name?e.name:"Anonymous"}</h2>
        ${e.nip05?`<p>${e.nip05}</p>`:""}
        ${n?`<p>${n}</p>`:""}
      </div>
    </div>
  `},kc=(t,e,n)=>{let r="";return t?e?r=`
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
      `,`<div class="backup-hero">${r}</div>`},mh=()=>{setTimeout(()=>{let n=document.getElementById("title-text"),r=document.getElementById("subtitle-text");n&&(typeWriter(n,"Nostr Profile Manager",50),setTimeout(()=>{r&&typeWriter(r,"Secure / Backup / Refine / Delete",30)},2e3))},500);let t=document.getElementById("login-extension");t&&(t.onclick=n=>O(void 0,null,function*(){if(n.preventDefault(),window.nostr)try{t.setAttribute("aria-busy","true"),t.textContent="Connecting...";let r=yield window.nostr.getPublicKey();Ut("pubkey",r),window.location.reload()}catch(r){console.error("Error connecting to Nostr extension:",r),t.removeAttribute("aria-busy"),t.textContent="Connection Failed. Retry"}else t.outerHTML=`
          <div class="error-message">
            <p class="code-font">NIP-07 browser extension not detected.</p>
            <p class="code-font">Install an extension like nos2x to proceed.</p>
            <a href="https://github.com/nostr-protocol/nips/blob/master/07.md" role="button" class="secondary code-font">Get Browser Extension</a>
          </div>
        `}));let e=document.getElementById("login-npub");e&&(e.onclick=n=>{n.preventDefault(),e.outerHTML=`
        <div class="npub-input-form">
          <input type="text" id="npub-input" placeholder="npub1... or hex pubkey" />
          <div class="button-group">
            <button id="npub-submit" class="secondary">Login</button>
            <button id="npub-cancel" class="outline">Cancel</button>
          </div>
        </div>
      `;let r=document.getElementById("npub-submit"),o=document.getElementById("npub-cancel"),s=document.getElementById("npub-input");s&&s.focus(),r&&(r.onclick=()=>{let i=s==null?void 0:s.value.trim();if(i)try{let a=i;if(i.startsWith("npub1")){let c=Ur.decode(i);if(c.type!=="npub")throw new Error("Invalid npub format");a=c.data}else if(i.length===64&&/^[0-9a-f]+$/i.test(i))a=i;else throw new Error("Invalid pubkey format");Ut("pubkey",a),window.location.reload()}catch(a){alert("Invalid pubkey format. Please enter a valid hex pubkey or npub.")}}),o&&(o.onclick=()=>{window.location.reload()}),s&&(s.onkeypress=i=>{i.key==="Enter"&&(r==null||r.click())})})},$n=()=>{let t=document.getElementById("PM-container");if(!localStorage.getItem("pubkey")){t.innerHTML=`
      <div class="container">
        <div class="profile-card">
          <div class="hero">
            ${Ec()}
            <div id="herocontent">
              <h1 id="title-text">Nostr Profile Manager</h1>
              <p id="subtitle-text">Secure / Backup / Refine / Delete</p>
              <div class="login-options">
                <button id="login-extension" class="contrast">Login with Extension</button>
                <button id="login-npub" class="secondary">Enter npub/pubkey</button>
              </div>
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
    `,mh();return}let n=!Y(0)&&!Y(3),r=Pr(),o=ic();n?t.innerHTML=`
      <div class="container">
        <div class="profile-card">
          <div class="hero">
            ${Ec()}
            ${kc(r,n,o)}
          </div>
        </div>
      </div>
    `:t.innerHTML=`
      <div class="container">
        <div class="profile-card">
          ${ph(Y(0))}
          
          <div class="profile-meta">
            ${dh(Y(0),!r)}
            ${fh(Y(3),!r)}
            ${hh(Y(10002),!r)}
          </div>
          
          ${kc(r,n,o)}
        </div>
      </div>
    `;let s=document.getElementById("metadatabutton");s&&(s.onclick=()=>qr());let i=document.getElementById("contactsbutton");i&&(i.onclick=()=>Kr());let a=document.getElementById("relaysbutton");a&&(a.onclick=()=>Vr());let c=document.getElementById("downloadprofile");c&&(c.onclick=d=>{d.preventDefault();let l=JSON.stringify([...re(0)||[],...re(2)||[],...re(10002)||[],...re(3)||[]]),u=document.createElement("a");u.setAttribute("href",`data:text/plain;charset=utf-8,${encodeURIComponent(l)}`),u.setAttribute("download",`my-nostr-profile-events-${Date.now()}.json`),u.style.display="none",document.body.appendChild(u),u.click(),document.body.removeChild(u)})}});var Rs,Cs,Ms,Tc,bh,yh,gh,wh,Sc,Lc=D(()=>{"use strict";Ue();Or();Ze();Rs=[],Cs=!1,Ms=!1,Tc=()=>{let t=Y(10002),e=t?t.tags.filter(n=>n[0]==="r").map(n=>n[1]):[];return[...new Set([...e,"wss://hist.nostr.land","wss://relay.damus.io","wss://nostr-pub.wellorder.net","wss://purplepag.es","wss://relay.nos.social","wss://relay.nostr.band","wss://relay.snort.social","wss://nostr.mutinywallet.com","wss://nos.lol","wss://relay.current.fyi","wss://eden.nostr.land","wss://nostr.wine"])]},bh=t=>O(void 0,null,function*(){let e=[],n=new Set,r=Tc();return yield sn([t],s=>{n.has(s.id)||(n.add(s.id),e.push(s))},r,[0,1,2,3,4,5,6,7,8,16,40,41,42,43,44,1984,9735,1e4,10002,3e4,30001,30023]),e.sort((s,i)=>i.created_at-s.created_at)}),yh=t=>{var o;let e={timestamp:Date.now(),pubkey:q("pubkey"),total_events:t.length,events_by_kind:t.reduce((s,i)=>(s[i.kind]=(s[i.kind]||0)+1,s),{}),events:t},n=JSON.stringify(e,null,2),r=document.createElement("a");r.setAttribute("href",`data:text/plain;charset=utf-8,${encodeURIComponent(n)}`),r.setAttribute("download",`nostr-backup-${(o=e.pubkey)==null?void 0:o.substring(0,8)}-${Date.now()}.json`),r.style.display="none",document.body.appendChild(r),r.click(),document.body.removeChild(r)},gh=()=>{let t=[];return document.querySelectorAll(".event-kind-checkbox:checked").forEach(n=>{let r=parseInt(n.value,10);Number.isNaN(r)||t.push(r)}),t},wh=()=>O(void 0,null,function*(){let t=gh();if(t.length===0){let c=document.getElementById("republish-status");c&&(c.innerHTML="\u26A0 Please select at least one event type to republish.");return}let e=[];[0,2,3,10002].forEach(c=>{let d=re(c);d&&e.push(...d)}),e.push(...Rs);let n=e.filter(c=>t.includes(c.kind)),r=Array.from(new Map(n.map(c=>[c.id,c])).values()),o=Tc(),s=0,i=r.length,a=document.getElementById("republish-status");yield Promise.allSettled(r.map((c,d)=>O(void 0,null,function*(){try{yield new Promise(u=>{setTimeout(u,d*50)});let l=yield $r(c,o);return l&&(s+=1),a&&(a.innerHTML=`Republishing... ${s}/${i} events published`),l}catch(l){return console.error("Error republishing event:",c.id,l),!1}}))),a&&(a.innerHTML=`Republishing complete! ${s}/${i} events published successfully.`)}),Sc=()=>{var i,a,c,d;let t=q("pubkey");if(!t)return;let e=document.getElementById("PM-container");if(!e)return;e.innerHTML=`
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
            <p>Backup events: ${Rs.length}</p>
          </div>
        </div>
      </div>
    </div>
  `;let n=document.getElementById("backup-button");n&&(n.onclick=()=>O(void 0,null,function*(){if(Cs)return;Cs=!0,n.setAttribute("aria-busy","true"),n.setAttribute("disabled",""),n.innerHTML="Fetching Events...";let l=document.getElementById("backup-status");l&&(l.innerHTML="Connecting to relays and fetching all your events...");try{let u=yield bh(t);Rs=u,l&&(l.innerHTML=`Found ${u.length} events. Creating archive...`),n.innerHTML="Downloading...",yh(u),l&&(l.innerHTML=`\u2713 Backup complete! Downloaded ${u.length} events.`),n.innerHTML="Backup Complete",setTimeout(()=>{n.innerHTML="Start Backup",n.removeAttribute("disabled")},3e3)}catch(u){console.error("Backup error:",u),l&&(l.innerHTML="\u2717 Backup failed. Please try again."),n.innerHTML="Backup Failed - Retry",n.removeAttribute("disabled")}finally{Cs=!1,n.removeAttribute("aria-busy")}}));let r=document.getElementById("republish-button");r&&(r.onclick=()=>O(void 0,null,function*(){if(!Ms&&confirm("This will republish all your cached events to all your relays. Continue?")){Ms=!0,r.setAttribute("aria-busy","true"),r.setAttribute("disabled",""),r.innerHTML="Starting Republish...";try{yield wh(),r.innerHTML="Republish Complete",setTimeout(()=>{r.innerHTML="Republish Selected Events",r.removeAttribute("disabled")},3e3)}catch(l){console.error("Republish error:",l);let u=document.getElementById("republish-status");u&&(u.innerHTML="\u2717 Republish failed. Please try again."),r.innerHTML="Republish Selected - Retry",r.removeAttribute("disabled")}finally{Ms=!1,r.removeAttribute("aria-busy")}}}));let o=document.getElementById("select-all-kinds");o&&(o.onclick=()=>{document.querySelectorAll(".event-kind-checkbox").forEach(u=>{u.checked=!0})});let s=document.getElementById("select-none-kinds");s&&(s.onclick=()=>{document.querySelectorAll(".event-kind-checkbox").forEach(u=>{u.checked=!1})})}});var Ds,xh,vh,Eh,kh,_c,Ah,Th,Sh,Bc,Hc=D(()=>{"use strict";Ds=Xe(on());Ts();Ze();Ue();xh=t=>{let e;try{t.kind===0?e=`Profile: ${JSON.parse(t.content).name||"Unnamed"}`:t.kind===3?e=`Contacts: ${t.tags.length} connection${t.tags.length!==1?"s":""}`:t.kind===10002?e=`Relays: ${t.tags.length} relay${t.tags.length!==1?"s":""}`:t.content.length>0?e=t.content.length>50?`${(0,Ds.sanitize)(t.content.substring(0,50))}...`:(0,Ds.sanitize)(t.content):e=`Event (kind: ${t.kind})`}catch(n){e=`Event (kind: ${t.kind})`}return`
    <div class="event-item" data-event-id="${t.id}">
      <div class="event-header">
        <span class="event-kind">Kind: ${t.kind}</span>
        <span class="event-date">${Rn(t.created_at*1e3)}</span>
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
  `,kh=t=>/^[0-9a-f]{64}$/i.test(t),_c=(t,e)=>O(void 0,null,function*(){let n={kind:5,pubkey:q("pubkey"),created_at:Math.floor(Date.now()/1e3),content:"",tags:[["e",t]]};return $e(n,e,"Deleted")}),Ah=t=>{t.forEach(n=>{let r=document.getElementById(`delete-btn-${n.id}`);r&&(r.onclick=()=>O(void 0,null,function*(){if(confirm("Are you sure you want to delete this event? This action cannot be undone.")&&(yield _c(n.id,`delete-btn-${n.id}`))){let s=document.getElementById("delete-status");s.innerHTML=`
              <div class="success-message">
                <p>Deletion event for event ${n.id.substring(0,8)}... has been published.</p>
                <p>Note that it may take some time for relays to process the deletion request.</p>
              </div>
            `}}))});let e=document.getElementById("delete-custom-event-btn");e&&(e.onclick=()=>O(void 0,null,function*(){let n=document.getElementById("custom-event-id"),r=n.value.trim(),o=document.getElementById("delete-status");if(!kh(r)){o.innerHTML=`
          <div class="error-message">
            <p>Invalid event ID format. Event IDs must be 64 hexadecimal characters.</p>
          </div>
        `;return}confirm(`Are you sure you want to delete event ${r.substring(0,8)}...? This action cannot be undone.`)&&((yield _c(r,"delete-custom-event-btn"))?(o.innerHTML=`
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
  `,yield Fr(e,()=>{});let n=Th();t.innerHTML=Eh(n),Ah(n)}),Bc=Sh});var Lh,Ic,Cc=D(()=>{"use strict";Ue();Lh=()=>{oc(),window.location.href="/"},Ic=Lh});var Bh=ie(Us=>{Ac();Ze();Ue();Hs();_s();Is();Lc();Hc();Cc();Or();var Dc=!1,Mc=t=>{Dc=t},_h=()=>O(Us,null,function*(){let t=q("pubkey");if(!t){$n();return}Mc(!0);try{$n();let e=document.getElementById("mainnav");e&&e.classList.remove("inactive");let n=(o,s)=>{let i=document.getElementById(o);i&&(i.onclick=a=>{a.preventDefault(),Dc||s()})};n("navhome",$n),n("navmetadata",qr),n("navcontacts",Kr),n("navrelays",Vr),n("navbackup",Sc),n("navdelete",Bc),n("navlogout",()=>{ms(),Ic()});let r=[Fr(t,()=>{})];yield Promise.all(r),$n(),ac().catch(o=>console.error("Error fetching contacts profile events:",o))}catch(e){console.error("Error loading profile:",e);let n=document.getElementById("PM-container");n&&(n.innerHTML=`
        <div class="container">
          <h3>Error Loading Profile</h3>
          <p>There was an error loading your profile. Please try again.</p>
          <button onclick="window.location.reload()">Reload</button>
        </div>
      `)}finally{Mc(!1)}}),Rc=()=>O(Us,null,function*(){_h()});document.getElementById("PM-container")!==null?Rc():document.addEventListener("DOMContentLoaded",()=>Rc());window.addEventListener("beforeunload",()=>{ms()})});Bh();})();
/*! Bundled license information:

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

dompurify/dist/purify.js:
  (*! @license DOMPurify 3.0.3 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.0.3/LICENSE *)
*/
