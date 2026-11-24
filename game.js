(()=>{var Wd=0,$l=1,qd=2;var os=1,Xd=2,tr=3,Yn=0,fn=1,Ve=2,cs=0,nr=1,Ql=2,eh=3,th=4,jd=5;var ls=100,Kd=101,Jd=102,Yd=103,Zd=104,$d=200,Qd=201,ef=202,tf=203,nh=204,ih=205,nf=206,sf=207,rf=208,af=209,of=210,cf=211,lf=212,hf=213,uf=214,uo=0,fo=1,po=2,Us=3,mo=4,go=5,bo=6,xo=7,Ho=0,df=1,ff=2,Zn=0,sh=1,rh=2,ah=3,fa=4,oh=5,ch=6,lh=7,Ul="attached",pf="detached",hh=300,hs=301,ir=302,sr=303,Vo=304,Ut=1e3,Rn=1001,Os=1002,Ot=1003,Wo=1004;var us=1005;var qt=1006,rr=1007;var Pn=1008;var _n=1009,uh=1010,dh=1011,ar=1012,qo=1013,Bn=1014,Tn=1015,zn=1016,Xo=1017,jo=1018,ds=1020,fh=35902,ph=35899,mh=1021,gh=1022,In=1023,hi=1026,xi=1027,Ko=1028,Jo=1029,Fi=1030,Yo=1031;var Zo=1033,pa=33776,ma=33777,ga=33778,ba=33779,$o=35840,Qo=35841,ec=35842,tc=35843,nc=36196,ic=37492,sc=37496,rc=37488,ac=37489,xa=37490,oc=37491,cc=37808,lc=37809,hc=37810,uc=37811,dc=37812,fc=37813,pc=37814,mc=37815,gc=37816,bc=37817,xc=37818,_c=37819,vc=37820,yc=37821,Mc=36492,Sc=36494,wc=36495,Tc=36283,Ac=36284,_a=36285,Ec=36286;var ji=2300,Ki=2301,lo=2302,Ol=2303,kl=2400,Bl=2401,zl=2402,mf=2500;var bh=0,va=1,or=2,gf=3200;var ya=0,bf=1,_i="",Je="srgb",ln="srgb-linear",Dr="linear",_t="srgb";var ho=7680;var xf=519,_f=512,vf=513,yf=514,xh=515,Mf=516,Sf=517,_h=518,vh=519,yh=35044;var Mh="300 es",Cn=2e3,ks=2001;function Em(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Rm(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Bs(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function wf(){let s=Bs("canvas");return s.style.display="block",s}var $u={},zs=null;function Lr(...s){let e="THREE."+s.shift();zs?zs("log",e,...s):console.log(e,...s)}function Tf(s){let e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Ue(...s){s=Tf(s);let e="THREE."+s.shift();if(zs)zs("warn",e,...s);else{let t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function We(...s){s=Tf(s);let e="THREE."+s.shift();if(zs)zs("error",e,...s);else{let t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function Xi(...s){let e=s.join(" ");e in $u||($u[e]=!0,Ue(...s))}function Af(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var Ef={[uo]:uo,[po]:bo,[mo]:mo,[Us]:go,[fo]:fo,[bo]:po,[xo]:xo,[go]:Us},qn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let i=n[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}},nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Qu=1234567,Rr=Math.PI/180,Ji=180/Math.PI;function Gn(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(nn[s&255]+nn[s>>8&255]+nn[s>>16&255]+nn[s>>24&255]+"-"+nn[e&255]+nn[e>>8&255]+"-"+nn[e>>16&15|64]+nn[e>>24&255]+"-"+nn[t&63|128]+nn[t>>8&255]+"-"+nn[t>>16&255]+nn[t>>24&255]+nn[n&255]+nn[n>>8&255]+nn[n>>16&255]+nn[n>>24&255]).toLowerCase()}function st(s,e,t){return Math.max(e,Math.min(t,s))}function Sh(s,e){return(s%e+e)%e}function Cm(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function Pm(s,e,t){return s!==e?(t-s)/(e-s):0}function Cr(s,e,t){return(1-t)*s+t*e}function Im(s,e,t,n){return Cr(s,e,1-Math.exp(-t*n))}function Dm(s,e=1){return e-Math.abs(Sh(s,e*2)-e)}function Lm(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Nm(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Fm(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Um(s,e){return s+Math.random()*(e-s)}function Om(s){return s*(.5-Math.random())}function km(s){s!==void 0&&(Qu=s);let e=Qu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Bm(s){return s*Rr}function zm(s){return s*Ji}function Gm(s){return s>0&&Number.isInteger(s)&&2**Math.round(Math.log2(s))===s}function Hm(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function wh(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Vm(s,e,t,n,i){let r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+n)/2),u=a((e+n)/2),h=r((e-n)/2),d=a((e-n)/2),f=r((n-e)/2),m=a((n-e)/2);switch(i){case"XYX":s.set(o*u,c*h,c*d,o*l);break;case"YZY":s.set(c*d,o*u,c*h,o*l);break;case"ZXZ":s.set(c*h,c*d,o*u,o*l);break;case"XZX":s.set(o*u,c*m,c*f,o*l);break;case"YXY":s.set(c*f,o*u,c*m,o*l);break;case"ZYZ":s.set(c*m,c*f,o*u,o*l);break;default:Ue("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Rc(s){switch(s.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Th(s,e){if(e.constructor===Float32Array)return s;let t=Rc(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(s/t,-1)}function Ah(s,e){if(e.constructor===Float32Array)return s;let t=Rc(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(s*t)}var vn={DEG2RAD:Rr,RAD2DEG:Ji,generateUUID:Gn,clamp:st,euclideanModulo:Sh,mapLinear:Cm,inverseLerp:Pm,lerp:Cr,damp:Im,pingpong:Dm,smoothstep:Lm,smootherstep:Nm,randInt:Fm,randFloat:Um,randFloatSpread:Om,seededRandom:km,degToRad:Bm,radToDeg:zm,isPowerOfTwo:Gm,ceilPowerOfTwo:Hm,floorPowerOfTwo:wh,setQuaternionFromProperEuler:Vm,normalize:Ah,denormalize:Th},ae=class{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(st(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(st(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Gt=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let c=n[i+0],l=n[i+1],u=n[i+2],h=n[i+3],d=r[a+0],f=r[a+1],m=r[a+2],x=r[a+3];if(h!==x||c!==d||l!==f||u!==m){let g=c*d+l*f+u*m+h*x;g<0&&(d=-d,f=-f,m=-m,x=-x,g=-g);let p=1-o;if(g<.9995){let v=Math.acos(g),y=Math.sin(v);p=Math.sin(p*v)/y,o=Math.sin(o*v)/y,c=c*p+d*o,l=l*p+f*o,u=u*p+m*o,h=h*p+x*o}else{c=c*p+d*o,l=l*p+f*o,u=u*p+m*o,h=h*p+x*o;let v=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=v,l*=v,u*=v,h*=v}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,r,a){let o=n[i],c=n[i+1],l=n[i+2],u=n[i+3],h=r[a],d=r[a+1],f=r[a+2],m=r[a+3];return e[t]=o*m+u*h+c*f-l*d,e[t+1]=c*m+u*d+l*h-o*f,e[t+2]=l*m+u*f+o*d-c*h,e[t+3]=u*m-o*h-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(i/2),h=o(r/2),d=c(n/2),f=c(i/2),m=c(r/2);switch(a){case"XYZ":this._x=d*u*h+l*f*m,this._y=l*f*h-d*u*m,this._z=l*u*m+d*f*h,this._w=l*u*h-d*f*m;break;case"YXZ":this._x=d*u*h+l*f*m,this._y=l*f*h-d*u*m,this._z=l*u*m-d*f*h,this._w=l*u*h+d*f*m;break;case"ZXY":this._x=d*u*h-l*f*m,this._y=l*f*h+d*u*m,this._z=l*u*m+d*f*h,this._w=l*u*h-d*f*m;break;case"ZYX":this._x=d*u*h-l*f*m,this._y=l*f*h+d*u*m,this._z=l*u*m-d*f*h,this._w=l*u*h+d*f*m;break;case"YZX":this._x=d*u*h+l*f*m,this._y=l*f*h+d*u*m,this._z=l*u*m-d*f*h,this._w=l*u*h-d*f*m;break;case"XZY":this._x=d*u*h-l*f*m,this._y=l*f*h-d*u*m,this._z=l*u*m+d*f*h,this._w=l*u*h+d*f*m;break;default:Ue("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],h=t[10],d=n+o+h;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-c)*f,this._y=(r-l)*f,this._z=(a-i)*f}else if(n>o&&n>h){let f=2*Math.sqrt(1+n-o-h);this._w=(u-c)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(r+l)/f}else if(o>h){let f=2*Math.sqrt(1+o-n-h);this._w=(r-l)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(c+u)/f}else{let f=2*Math.sqrt(1+h-n-o);this._w=(a-i)/f,this._x=(r+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(st(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+a*o+i*l-r*c,this._y=i*u+a*c+r*o-n*l,this._z=r*u+a*l+n*c-i*o,this._w=a*u-n*o-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,i=-i,r=-r,a=-a,o=-o);let c=1-t;if(o<.9995){let l=Math.acos(o),u=Math.sin(l);c=Math.sin(c*l)/u,t=Math.sin(t*l)/u,this._x=this._x*c+n*t,this._y=this._y*c+i*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+i*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class{static{this.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ed.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ed.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*i-o*n),u=2*(o*t-r*i),h=2*(r*n-a*t);return this.x=t+c*l+a*h-o*u,this.y=n+c*u+o*l-r*h,this.z=i+c*h+r*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this.z=st(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this.z=st(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(st(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=i*c-r*o,this.y=r*a-n*c,this.z=n*o-i*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ll.copy(this).projectOnVector(e),this.sub(ll)}reflect(e){return this.sub(ll.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(st(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ll=new L,ed=new Gt,je=class{static{this.prototype.isMatrix3=!0}constructor(e,t,n,i,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,c,l)}set(e,t,n,i,r,a,o,c,l){let u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=r,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],u=n[4],h=n[7],d=n[2],f=n[5],m=n[8],x=i[0],g=i[3],p=i[6],v=i[1],y=i[4],_=i[7],w=i[2],M=i[5],b=i[8];return r[0]=a*x+o*v+c*w,r[3]=a*g+o*y+c*M,r[6]=a*p+o*_+c*b,r[1]=l*x+u*v+h*w,r[4]=l*g+u*y+h*M,r[7]=l*p+u*_+h*b,r[2]=d*x+f*v+m*w,r[5]=d*g+f*y+m*M,r[8]=d*p+f*_+m*b,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-n*r*u+n*o*c+i*r*l-i*a*c}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=u*a-o*l,d=o*c-u*r,f=l*r-a*c,m=t*h+n*d+i*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/m;return e[0]=h*x,e[1]=(i*l-u*n)*x,e[2]=(o*n-i*a)*x,e[3]=d*x,e[4]=(u*t-i*c)*x,e[5]=(i*r-o*t)*x,e[6]=f*x,e[7]=(n*c-l*t)*x,e[8]=(a*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-i*l,i*c,-i*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return Xi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(hl.makeScale(e,t)),this}rotate(e){return Xi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(hl.makeRotation(-e)),this}translate(e,t){return Xi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(hl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},hl=new je,td=new je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),nd=new je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Wm(){let s={enabled:!0,workingColorSpace:ln,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===_t&&(i.r=li(i.r),i.g=li(i.g),i.b=li(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===_t&&(i.r=Fs(i.r),i.g=Fs(i.g),i.b=Fs(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===_i?Dr:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[ln]:{primaries:e,whitePoint:n,transfer:Dr,toXYZ:td,fromXYZ:nd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Je},outputColorSpaceConfig:{drawingBufferColorSpace:Je}},[Je]:{primaries:e,whitePoint:n,transfer:_t,toXYZ:td,fromXYZ:nd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Je}}}),s}var it=Wm();function li(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Fs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var ys,_o=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ys===void 0&&(ys=Bs("canvas")),ys.width=e.width,ys.height=e.height;let i=ys.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=ys}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Bs("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=li(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(li(t[n]/255)*255):t[n]=li(t[n]);return{data:t,width:e.width,height:e.height}}else return Ue("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},qm=0,Gs=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:qm++}),this.uuid=Gn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(ul(i[a].image)):r.push(ul(i[a]))}else r=ul(i);n.url=r}return t||(e.images[this.uuid]=n),n}};function ul(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?_o.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Ue("Texture: Unable to serialize Texture."),{})}var Xm=0,dl=new L,Xt=class s extends qn{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,n=Rn,i=Rn,r=qt,a=Pn,o=In,c=_n,l=s.DEFAULT_ANISOTROPY,u=_i){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Xm++}),this.uuid=Gn(),this.name="",this.source=new Gs(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new ae(0,0),this.repeat=new ae(1,1),this.center=new ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new je,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(dl).x}get height(){return this.source.getSize(dl).y}get depth(){return this.source.getSize(dl).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Ue(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){Ue(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==hh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ut:e.x=e.x-Math.floor(e.x);break;case Rn:e.x=e.x<0?0:1;break;case Os:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ut:e.y=e.y-Math.floor(e.y);break;case Rn:e.y=e.y<0?0:1;break;case Os:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Xt.DEFAULT_IMAGE=null;Xt.DEFAULT_MAPPING=hh;Xt.DEFAULT_ANISOTROPY=1;var yt=class{static{this.prototype.isVector4=!0}constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r,c=e.elements,l=c[0],u=c[4],h=c[8],d=c[1],f=c[5],m=c[9],x=c[2],g=c[6],p=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-x)<.01&&Math.abs(m-g)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+x)<.1&&Math.abs(m+g)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let y=(l+1)/2,_=(f+1)/2,w=(p+1)/2,M=(u+d)/4,b=(h+x)/4,S=(m+g)/4;return y>_&&y>w?y<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(y),i=M/n,r=b/n):_>w?_<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(_),n=M/i,r=S/i):w<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(w),n=b/r,i=S/r),this.set(n,i,r,t),this}let v=Math.sqrt((g-m)*(g-m)+(h-x)*(h-x)+(d-u)*(d-u));return Math.abs(v)<.001&&(v=1),this.x=(g-m)/v,this.y=(h-x)/v,this.z=(d-u)/v,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this.z=st(this.z,e.z,t.z),this.w=st(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this.z=st(this.z,e,t),this.w=st(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(st(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},vo=class extends qn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new yt(0,0,e,t),this.scissorTest=!1,this.viewport=new yt(0,0,e,t),this.textures=[];let i=n.count;for(let r=0;r<i;r++)this.textures[r]=new Xt({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:qt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let i=Object.assign({},e.textures[t].image);this.textures[t].source=new Gs(i)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Sn=class extends vo{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Nr=class extends Xt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ot,this.minFilter=Ot,this.wrapR=Rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var yo=class extends Xt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ot,this.minFilter=Ot,this.wrapR=Rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Xe=class s{static{this.prototype.isMatrix4=!0}constructor(e,t,n,i,r,a,o,c,l,u,h,d,f,m,x,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,c,l,u,h,d,f,m,x,g)}set(e,t,n,i,r,a,o,c,l,u,h,d,f,m,x,g){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=m,p[11]=x,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,i=1/Ms.setFromMatrixColumn(e,0).length(),r=1/Ms.setFromMatrixColumn(e,1).length(),a=1/Ms.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let d=a*u,f=a*h,m=o*u,x=o*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=f+m*l,t[5]=d-x*l,t[9]=-o*c,t[2]=x-d*l,t[6]=m+f*l,t[10]=a*c}else if(e.order==="YXZ"){let d=c*u,f=c*h,m=l*u,x=l*h;t[0]=d+x*o,t[4]=m*o-f,t[8]=a*l,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=f*o-m,t[6]=x+d*o,t[10]=a*c}else if(e.order==="ZXY"){let d=c*u,f=c*h,m=l*u,x=l*h;t[0]=d-x*o,t[4]=-a*h,t[8]=m+f*o,t[1]=f+m*o,t[5]=a*u,t[9]=x-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let d=a*u,f=a*h,m=o*u,x=o*h;t[0]=c*u,t[4]=m*l-f,t[8]=d*l+x,t[1]=c*h,t[5]=x*l+d,t[9]=f*l-m,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let d=a*c,f=a*l,m=o*c,x=o*l;t[0]=c*u,t[4]=x-d*h,t[8]=m*h+f,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=f*h+m,t[10]=d-x*h}else if(e.order==="XZY"){let d=a*c,f=a*l,m=o*c,x=o*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=d*h+x,t[5]=a*u,t[9]=f*h-m,t[2]=m*h-f,t[6]=o*u,t[10]=x*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(jm,e,Km)}lookAt(e,t,n){let i=this.elements;return yn.subVectors(e,t),yn.lengthSq()===0&&(yn.z=1),yn.normalize(),Ti.crossVectors(n,yn),Ti.lengthSq()===0&&(Math.abs(n.z)===1?yn.x+=1e-4:yn.z+=1e-4,yn.normalize(),Ti.crossVectors(n,yn)),Ti.normalize(),Ua.crossVectors(yn,Ti),i[0]=Ti.x,i[4]=Ua.x,i[8]=yn.x,i[1]=Ti.y,i[5]=Ua.y,i[9]=yn.y,i[2]=Ti.z,i[6]=Ua.z,i[10]=yn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],u=n[1],h=n[5],d=n[9],f=n[13],m=n[2],x=n[6],g=n[10],p=n[14],v=n[3],y=n[7],_=n[11],w=n[15],M=i[0],b=i[4],S=i[8],E=i[12],T=i[1],R=i[5],D=i[9],U=i[13],P=i[2],O=i[6],H=i[10],F=i[14],J=i[3],B=i[7],z=i[11],W=i[15];return r[0]=a*M+o*T+c*P+l*J,r[4]=a*b+o*R+c*O+l*B,r[8]=a*S+o*D+c*H+l*z,r[12]=a*E+o*U+c*F+l*W,r[1]=u*M+h*T+d*P+f*J,r[5]=u*b+h*R+d*O+f*B,r[9]=u*S+h*D+d*H+f*z,r[13]=u*E+h*U+d*F+f*W,r[2]=m*M+x*T+g*P+p*J,r[6]=m*b+x*R+g*O+p*B,r[10]=m*S+x*D+g*H+p*z,r[14]=m*E+x*U+g*F+p*W,r[3]=v*M+y*T+_*P+w*J,r[7]=v*b+y*R+_*O+w*B,r[11]=v*S+y*D+_*H+w*z,r[15]=v*E+y*U+_*F+w*W,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],h=e[6],d=e[10],f=e[14],m=e[3],x=e[7],g=e[11],p=e[15],v=c*f-l*d,y=o*f-l*h,_=o*d-c*h,w=a*f-l*u,M=a*d-c*u,b=a*h-o*u;return t*(x*v-g*y+p*_)-n*(m*v-g*w+p*M)+i*(m*y-x*w+p*b)-r*(m*_-x*M+g*b)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[1],a=e[5],o=e[9],c=e[2],l=e[6],u=e[10];return t*(a*u-o*l)-n*(r*u-o*c)+i*(r*l-a*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=e[9],d=e[10],f=e[11],m=e[12],x=e[13],g=e[14],p=e[15],v=t*o-n*a,y=t*c-i*a,_=t*l-r*a,w=n*c-i*o,M=n*l-r*o,b=i*l-r*c,S=u*x-h*m,E=u*g-d*m,T=u*p-f*m,R=h*g-d*x,D=h*p-f*x,U=d*p-f*g,P=v*U-y*D+_*R+w*T-M*E+b*S;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let O=1/P;return e[0]=(o*U-c*D+l*R)*O,e[1]=(i*D-n*U-r*R)*O,e[2]=(x*b-g*M+p*w)*O,e[3]=(d*M-h*b-f*w)*O,e[4]=(c*T-a*U-l*E)*O,e[5]=(t*U-i*T+r*E)*O,e[6]=(g*_-m*b-p*y)*O,e[7]=(u*b-d*_+f*y)*O,e[8]=(a*D-o*T+l*S)*O,e[9]=(n*T-t*D-r*S)*O,e[10]=(m*M-x*_+p*v)*O,e[11]=(h*_-u*M-f*v)*O,e[12]=(o*E-a*R-c*S)*O,e[13]=(t*R-n*E+i*S)*O,e[14]=(x*y-m*w-g*v)*O,e[15]=(u*w-h*y+d*v)*O,this}scale(e){let t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,u=r*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,u*o+n,u*c-i*a,0,l*c-i*o,u*c+i*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,u=a+a,h=o+o,d=r*l,f=r*u,m=r*h,x=a*u,g=a*h,p=o*h,v=c*l,y=c*u,_=c*h,w=n.x,M=n.y,b=n.z;return i[0]=(1-(x+p))*w,i[1]=(f+_)*w,i[2]=(m-y)*w,i[3]=0,i[4]=(f-_)*M,i[5]=(1-(d+p))*M,i[6]=(g+v)*M,i[7]=0,i[8]=(m+y)*b,i[9]=(g-v)*b,i[10]=(1-(d+x))*b,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=Ms.set(i[0],i[1],i[2]).length(),o=Ms.set(i[4],i[5],i[6]).length(),c=Ms.set(i[8],i[9],i[10]).length();r<0&&(a=-a),Fn.copy(this);let l=1/a,u=1/o,h=1/c;return Fn.elements[0]*=l,Fn.elements[1]*=l,Fn.elements[2]*=l,Fn.elements[4]*=u,Fn.elements[5]*=u,Fn.elements[6]*=u,Fn.elements[8]*=h,Fn.elements[9]*=h,Fn.elements[10]*=h,t.setFromRotationMatrix(Fn),n.x=a,n.y=o,n.z=c,this}makePerspective(e,t,n,i,r,a,o=Cn,c=!1){let l=this.elements,u=2*r/(t-e),h=2*r/(n-i),d=(t+e)/(t-e),f=(n+i)/(n-i),m,x;if(c)m=r/(a-r),x=a*r/(a-r);else if(o===Cn)m=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===ks)m=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=Cn,c=!1){let l=this.elements,u=2/(t-e),h=2/(n-i),d=-(t+e)/(t-e),f=-(n+i)/(n-i),m,x;if(c)m=1/(a-r),x=a/(a-r);else if(o===Cn)m=-2/(a-r),x=-(a+r)/(a-r);else if(o===ks)m=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=h,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=m,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Ms=new L,Fn=new Xe,jm=new L(0,0,0),Km=new L(1,1,1),Ti=new L,Ua=new L,yn=new L,id=new Xe,sd=new Gt,Xn=class s{constructor(e=0,t=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,r=i[0],a=i[4],o=i[8],c=i[1],l=i[5],u=i[9],h=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(st(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-st(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(st(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-st(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(st(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-st(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:Ue("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return id.makeRotationFromQuaternion(e),this.setFromRotationMatrix(id,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return sd.setFromEuler(this),this.setFromQuaternion(sd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Xn.DEFAULT_ORDER="XYZ";var Fr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Jm=0,rd=new L,Ss=new Gt,ii=new Xe,Oa=new L,xr=new L,Ym=new L,Zm=new Gt,ad=new L(1,0,0),od=new L(0,1,0),cd=new L(0,0,1),ld={type:"added"},$m={type:"removed"},ws={type:"childadded",child:null},fl={type:"childremoved",child:null},Et=class s extends qn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Jm++}),this.uuid=Gn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new L,t=new Xn,n=new Gt,i=new L(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Xe},normalMatrix:{value:new je}}),this.matrix=new Xe,this.matrixWorld=new Xe,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Fr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ss.setFromAxisAngle(e,t),this.quaternion.multiply(Ss),this}rotateOnWorldAxis(e,t){return Ss.setFromAxisAngle(e,t),this.quaternion.premultiply(Ss),this}rotateX(e){return this.rotateOnAxis(ad,e)}rotateY(e){return this.rotateOnAxis(od,e)}rotateZ(e){return this.rotateOnAxis(cd,e)}translateOnAxis(e,t){return rd.copy(e).applyQuaternion(this.quaternion),this.position.add(rd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ad,e)}translateY(e){return this.translateOnAxis(od,e)}translateZ(e){return this.translateOnAxis(cd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ii.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Oa.copy(e):Oa.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),xr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ii.lookAt(xr,Oa,this.up):ii.lookAt(Oa,xr,this.up),this.quaternion.setFromRotationMatrix(ii),i&&(ii.extractRotation(i.matrixWorld),Ss.setFromRotationMatrix(ii),this.quaternion.premultiply(Ss.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(We("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ld),ws.child=e,this.dispatchEvent(ws),ws.child=null):We("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent($m),fl.child=e,this.dispatchEvent(fl),fl.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ii.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ii.multiply(e.parent.matrixWorld)),e.applyMatrix4(ii),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ld),ws.child=e,this.dispatchEvent(ws),ws.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xr,e,Ym),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xr,Zm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,i=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*i,r[13]+=n-r[1]*t-r[5]*n-r[9]*i,r[14]+=i-r[2]*t-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){let h=c[l];r(e.shapes,h)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];i.animations.push(r(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),h=a(e.shapes),d=a(e.skeletons),f=a(e.animations),m=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=i,n;function a(o){let c=[];for(let l in o){let u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Et.DEFAULT_UP=new L(0,1,0);Et.DEFAULT_MATRIX_AUTO_UPDATE=!0;Et.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var rt=class extends Et{constructor(){super(),this.isGroup=!0,this.type="Group"}},Qm={type:"move"},Hs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new rt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new rt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new rt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let x of e.hand.values()){let g=t.getJointPose(x,n),p=this._getHandJoint(l,x);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.quaternion,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,m=.005;l.inputState.pinching&&d>f+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Qm)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new rt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Rf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ai={h:0,s:0,l:0},ka={h:0,s:0,l:0};function pl(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}var Ne=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Je){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,it.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=it.workingColorSpace){return this.r=e,this.g=t,this.b=n,it.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=it.workingColorSpace){if(e=Sh(e,1),t=st(t,0,1),n=st(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=pl(a,r,e+1/3),this.g=pl(a,r,e),this.b=pl(a,r,e-1/3)}return it.colorSpaceToWorking(this,i),this}setStyle(e,t=Je){function n(r){r!==void 0&&parseFloat(r)<1&&Ue("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ue("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Ue("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Je){let n=Rf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ue("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=li(e.r),this.g=li(e.g),this.b=li(e.b),this}copyLinearToSRGB(e){return this.r=Fs(e.r),this.g=Fs(e.g),this.b=Fs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Je){return it.workingToColorSpace(sn.copy(this),e),Math.round(st(sn.r*255,0,255))*65536+Math.round(st(sn.g*255,0,255))*256+Math.round(st(sn.b*255,0,255))}getHexString(e=Je){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=it.workingColorSpace){it.workingToColorSpace(sn.copy(this),t);let n=sn.r,i=sn.g,r=sn.b,a=Math.max(n,i,r),o=Math.min(n,i,r),c,l,u=(o+a)/2;if(o===a)c=0,l=0;else{let h=a-o;switch(l=u<=.5?h/(a+o):h/(2-a-o),a){case n:c=(i-r)/h+(i<r?6:0);break;case i:c=(r-n)/h+2;break;case r:c=(n-i)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=it.workingColorSpace){return it.workingToColorSpace(sn.copy(this),t),e.r=sn.r,e.g=sn.g,e.b=sn.b,e}getStyle(e=Je){it.workingToColorSpace(sn.copy(this),e);let t=sn.r,n=sn.g,i=sn.b;return e!==Je?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Ai),this.setHSL(Ai.h+e,Ai.s+t,Ai.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ai),e.getHSL(ka);let n=Cr(Ai.h,ka.h,t),i=Cr(Ai.s,ka.s,t),r=Cr(Ai.l,ka.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},sn=new Ne;Ne.NAMES=Rf;var Ur=class s{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ne(e),this.density=t}clone(){return new s(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Or=class extends Et{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Xn,this.environmentIntensity=1,this.environmentRotation=new Xn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Un=new L,si=new L,ml=new L,ri=new L,Ts=new L,As=new L,hd=new L,gl=new L,bl=new L,xl=new L,_l=new yt,vl=new yt,yl=new yt,Ii=class s{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Un.subVectors(e,t),i.cross(Un);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Un.subVectors(i,t),si.subVectors(n,t),ml.subVectors(e,t);let a=Un.dot(Un),o=Un.dot(si),c=Un.dot(ml),l=si.dot(si),u=si.dot(ml),h=a*l-o*o;if(h===0)return r.set(0,0,0),null;let d=1/h,f=(l*c-o*u)*d,m=(a*u-o*c)*d;return r.set(1-f-m,m,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,ri)===null?!1:ri.x>=0&&ri.y>=0&&ri.x+ri.y<=1}static getInterpolation(e,t,n,i,r,a,o,c){return this.getBarycoord(e,t,n,i,ri)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,ri.x),c.addScaledVector(a,ri.y),c.addScaledVector(o,ri.z),c)}static getInterpolatedAttribute(e,t,n,i,r,a){return _l.setScalar(0),vl.setScalar(0),yl.setScalar(0),_l.fromBufferAttribute(e,t),vl.fromBufferAttribute(e,n),yl.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(_l,r.x),a.addScaledVector(vl,r.y),a.addScaledVector(yl,r.z),a}static isFrontFacing(e,t,n,i){return Un.subVectors(n,t),si.subVectors(e,t),Un.cross(si).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Un.subVectors(this.c,this.b),si.subVectors(this.a,this.b),Un.cross(si).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,r=this.c,a,o;Ts.subVectors(i,n),As.subVectors(r,n),gl.subVectors(e,n);let c=Ts.dot(gl),l=As.dot(gl);if(c<=0&&l<=0)return t.copy(n);bl.subVectors(e,i);let u=Ts.dot(bl),h=As.dot(bl);if(u>=0&&h<=u)return t.copy(i);let d=c*h-u*l;if(d<=0&&c>=0&&u<=0&&c-u>0)return a=c/(c-u),t.copy(n).addScaledVector(Ts,a);xl.subVectors(e,r);let f=Ts.dot(xl),m=As.dot(xl);if(m>=0&&f<=m)return t.copy(r);let x=f*l-c*m;if(x<=0&&l>=0&&m<=0)return o=l/(l-m),t.copy(n).addScaledVector(As,o);let g=u*m-f*h;if(g<=0&&h-u>=0&&f-m>=0)return hd.subVectors(r,i),o=(h-u)/(h-u+(f-m)),t.copy(i).addScaledVector(hd,o);let p=1/(g+x+d);return a=x*p,o=d*p,t.copy(n).addScaledVector(Ts,a).addScaledVector(As,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},hn=class{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(On.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(On.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=On.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,On):On.fromBufferAttribute(r,a),On.applyMatrix4(e.matrixWorld),this.expandByPoint(On);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ba.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ba.copy(n.boundingBox)),Ba.applyMatrix4(e.matrixWorld),this.union(Ba)}let i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,On),On.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(_r),za.subVectors(this.max,_r),Es.subVectors(e.a,_r),Rs.subVectors(e.b,_r),Cs.subVectors(e.c,_r),Ei.subVectors(Rs,Es),Ri.subVectors(Cs,Rs),Hi.subVectors(Es,Cs);let t=[0,-Ei.z,Ei.y,0,-Ri.z,Ri.y,0,-Hi.z,Hi.y,Ei.z,0,-Ei.x,Ri.z,0,-Ri.x,Hi.z,0,-Hi.x,-Ei.y,Ei.x,0,-Ri.y,Ri.x,0,-Hi.y,Hi.x,0];return!Ml(t,Es,Rs,Cs,za)||(t=[1,0,0,0,1,0,0,0,1],!Ml(t,Es,Rs,Cs,za))?!1:(Ga.crossVectors(Ei,Ri),t=[Ga.x,Ga.y,Ga.z],Ml(t,Es,Rs,Cs,za))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,On).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(On).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ai[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ai[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ai[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ai[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ai[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ai[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ai[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ai[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ai),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},ai=[new L,new L,new L,new L,new L,new L,new L,new L],On=new L,Ba=new hn,Es=new L,Rs=new L,Cs=new L,Ei=new L,Ri=new L,Hi=new L,_r=new L,za=new L,Ga=new L,Vi=new L;function Ml(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){Vi.fromArray(s,r);let o=i.x*Math.abs(Vi.x)+i.y*Math.abs(Vi.y)+i.z*Math.abs(Vi.z),c=e.dot(Vi),l=t.dot(Vi),u=n.dot(Vi);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}var zt=new L,Ha=new ae,eg=0,Mt=class extends qn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:eg++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=yh,this.updateRanges=[],this.gpuType=Tn,this.version=0,this._normalizationScale=e!==void 0?Rc(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ha.fromBufferAttribute(this,t),Ha.applyMatrix3(e),this.setXY(t,Ha.x,Ha.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix3(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix4(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyNormalMatrix(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.transformDirection(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Th(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Ah(e,this.array)}};var kr=class extends Mt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Br=class extends Mt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Le=class extends Mt{constructor(e,t,n){super(new Float32Array(e),t,n)}},tg=new hn,vr=new L,Sl=new L,pn=class{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):tg.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;vr.subVectors(e,this.center);let t=vr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(vr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Sl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(vr.copy(e.center).add(Sl)),this.expandByPoint(vr.copy(e.center).sub(Sl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},ng=0,En=new Xe,wl=new Et,Ps=new L,Mn=new hn,yr=new hn,Zt=new L,Ye=class s extends qn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ng++}),this.uuid=Gn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Em(e)?Br:kr)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new je().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return En.makeRotationFromQuaternion(e),this.applyMatrix4(En),this}rotateX(e){return En.makeRotationX(e),this.applyMatrix4(En),this}rotateY(e){return En.makeRotationY(e),this.applyMatrix4(En),this}rotateZ(e){return En.makeRotationZ(e),this.applyMatrix4(En),this}translate(e,t,n){return En.makeTranslation(e,t,n),this.applyMatrix4(En),this}scale(e,t,n){return En.makeScale(e,t,n),this.applyMatrix4(En),this}lookAt(e){return wl.lookAt(e),wl.updateMatrix(),this.applyMatrix4(wl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ps).negate(),this.translate(Ps.x,Ps.y,Ps.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,r=e.length;i<r;i++){let a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Le(n,3))}else{let n=Math.min(e.length,t.count);for(let i=0;i<n;i++){let r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&Ue("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new hn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){We("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let r=t[n];Mn.setFromBufferAttribute(r),this.morphTargetsRelative?(Zt.addVectors(this.boundingBox.min,Mn.min),this.boundingBox.expandByPoint(Zt),Zt.addVectors(this.boundingBox.max,Mn.max),this.boundingBox.expandByPoint(Zt)):(this.boundingBox.expandByPoint(Mn.min),this.boundingBox.expandByPoint(Mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&We('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new pn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){We("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){let n=this.boundingSphere.center;if(Mn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];yr.setFromBufferAttribute(o),this.morphTargetsRelative?(Zt.addVectors(Mn.min,yr.min),Mn.expandByPoint(Zt),Zt.addVectors(Mn.max,yr.max),Mn.expandByPoint(Zt)):(Mn.expandByPoint(yr.min),Mn.expandByPoint(yr.max))}Mn.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)Zt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Zt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)Zt.fromBufferAttribute(o,l),c&&(Ps.fromBufferAttribute(e,l),Zt.add(Ps)),i=Math.max(i,n.distanceToSquared(Zt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&We('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){We("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Mt(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],c=[],l=new Uint8Array(n.count);for(let E=0;E<n.count;E++)o[E]=new L,c[E]=new L;let u=new L,h=new L,d=new L,f=new ae,m=new ae,x=new ae,g=new L,p=new L;function v(E,T,R){l[E]=l[T]=l[R]=1,u.fromBufferAttribute(n,E),h.fromBufferAttribute(n,T),d.fromBufferAttribute(n,R),f.fromBufferAttribute(r,E),m.fromBufferAttribute(r,T),x.fromBufferAttribute(r,R),h.sub(u),d.sub(u),m.sub(f),x.sub(f);let D=1/(m.x*x.y-x.x*m.y);isFinite(D)&&(g.copy(h).multiplyScalar(x.y).addScaledVector(d,-m.y).multiplyScalar(D),p.copy(d).multiplyScalar(m.x).addScaledVector(h,-x.x).multiplyScalar(D),o[E].add(g),o[T].add(g),o[R].add(g),c[E].add(p),c[T].add(p),c[R].add(p))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let E=0,T=y.length;E<T;++E){let R=y[E],D=R.start,U=R.count;for(let P=D,O=D+U;P<O;P+=3)v(e.getX(P+0),e.getX(P+1),e.getX(P+2))}let _=new L,w=new L,M=new L,b=new L;function S(E){M.fromBufferAttribute(i,E),b.copy(M);let T=o[E];_.copy(T),_.sub(M.multiplyScalar(M.dot(T))).normalize(),w.crossVectors(b,T);let D=w.dot(c[E])<0?-1:1;a.setXYZW(E,_.x,_.y,_.z,D)}for(let E=0,T=n.count;E<T;++E)l[E]&&S(E);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Mt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let i=new L,r=new L,a=new L,o=new L,c=new L,l=new L,u=new L,h=new L;if(e)for(let d=0,f=e.count;d<f;d+=3){let m=e.getX(d+0),x=e.getX(d+1),g=e.getX(d+2);i.fromBufferAttribute(t,m),r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,g),u.subVectors(a,r),h.subVectors(i,r),u.cross(h),o.fromBufferAttribute(n,m),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,g),o.add(u),c.add(u),l.add(u),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,r),h.subVectors(i,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Zt.fromBufferAttribute(e,t),Zt.normalize(),e.setXYZ(t,Zt.x,Zt.y,Zt.z)}toNonIndexed(){function e(o,c){let l=o.array,u=o.itemSize,h=o.normalized,d=new l.constructor(c.length*u),f=0,m=0;for(let x=0,g=c.length;x<g;x++){o.isInterleavedBufferAttribute?f=c[x]*o.data.stride+o.offset:f=c[x]*u;for(let p=0;p<u;p++)d[m++]=l[f++]}return new Mt(d,u,h)}if(this.index===null)return Ue("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,n=this.index.array,i=this.attributes;for(let o in i){let c=i[o],l=e(c,n);t.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let u=0,h=l.length;u<h;u++){let d=l[u],f=e(d,n);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let i={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){let f=l[h];u.push(f.toJSON(e.data))}u.length>0&&(i[c]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let i=e.attributes;for(let l in i){let u=i[l];this.setAttribute(l,u.clone(t))}let r=e.morphAttributes;for(let l in r){let u=[],h=r[l];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,u=a.length;l<u;l++){let h=a[l];this.addGroup(h.start,h.count,h.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Vs=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=yh,this.updateRanges=[],this.version=0,this.uuid=Gn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=ud(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let n=new this.array.constructor(e.arrayBuffers[t]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=ud(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};function ud(s){return s.buffer._uuid===void 0&&(s.buffer._uuid=Gn()),s.byteOffset===0&&s.byteLength===s.buffer.byteLength?s.buffer._uuid:s.buffer._uuid+":"+s.byteOffset+":"+s.byteLength}var cn=new L,Ws=class s{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i,this._normalizationScale=e!==void 0?Rc(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)cn.fromBufferAttribute(this,t),cn.applyMatrix4(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)cn.fromBufferAttribute(this,t),cn.applyNormalMatrix(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)cn.fromBufferAttribute(this,t),cn.transformDirection(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Lr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Mt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new s(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Lr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Th(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Ah(e,this.data.array)}},Tl=new L,ig=new L,sg=new je,kn=class{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=Tl.subVectors(n,t).cross(ig.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let i=e.delta(Tl),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||sg.getNormalMatrix(e),i=this.coplanarPoint(Tl).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},rg=0,un=class extends qn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:rg++}),this.uuid=Gn(),this.name="",this.type="Material",this.blending=nr,this.side=Yn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=nh,this.blendDst=ih,this.blendEquation=ls,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ne(0,0,0),this.blendAlpha=0,this.depthFunc=Us,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=xf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ho,this.stencilZFail=ho,this.stencilZPass=ho,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Ue(`Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){Ue(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(t){let r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ne().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new kn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ae().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ae().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var oi=new L,Al=new L,Va=new L,Wa=new L,Yi=class{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,oi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=oi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(oi.copy(this.origin).addScaledVector(this.direction,t),oi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Al.copy(e).add(t).multiplyScalar(.5),Va.copy(t).sub(e).normalize(),Wa.copy(this.origin).sub(Al);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Va),o=Wa.dot(this.direction),c=-Wa.dot(Va),l=Wa.lengthSq(),u=Math.abs(1-a*a),h,d,f,m;if(u>0)if(h=a*c-o,d=a*o-c,m=r*u,h>=0)if(d>=-m)if(d<=m){let x=1/u;h*=x,d*=x,f=h*(h+a*d+2*o)+d*(a*h+d+2*c)+l}else d=r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*c)+l;else d=-r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*c)+l;else d<=-m?(h=Math.max(0,-(-a*r+o)),d=h>0?-r:Math.min(Math.max(-r,-c),r),f=-h*h+d*(d+2*c)+l):d<=m?(h=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(h=Math.max(0,-(a*r+o)),d=h>0?r:Math.min(Math.max(-r,-c),r),f=-h*h+d*(d+2*c)+l);else d=a>0?-r:r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(Al).addScaledVector(Va,d),f}intersectSphere(e,t){if(e.radius<0)return null;oi.subVectors(e.center,this.origin);let n=oi.dot(this.direction),i=oi.dot(oi)-n*n,r=e.radius*e.radius;if(i>r)return null;let a=Math.sqrt(r-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,c,l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,i=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,i=(e.min.x-d.x)*l),u>=0?(r=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),h>=0?(o=(e.min.z-d.z)*h,c=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,c=(e.min.z-d.z)*h),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,oi)!==null}intersectTriangle(e,t,n,i,r){let a=this.origin,o=this.direction,c=o.x,l=o.y,u=o.z,h=e.x-a.x,d=e.y-a.y,f=e.z-a.z,m=t.x-a.x,x=t.y-a.y,g=t.z-a.z,p=n.x-a.x,v=n.y-a.y,y=n.z-a.z,_=Math.abs(c),w=Math.abs(l),M=Math.abs(u),b,S,E,T,R,D,U,P,O,H,F,J;if(_>=w&&_>=M?(E=c,D=h,O=m,J=p,c>=0?(b=l,S=u,T=d,R=f,U=x,P=g,H=v,F=y):(b=u,S=l,T=f,R=d,U=g,P=x,H=y,F=v)):w>=M?(E=l,D=d,O=x,J=v,l>=0?(b=u,S=c,T=f,R=h,U=g,P=m,H=y,F=p):(b=c,S=u,T=h,R=f,U=m,P=g,H=p,F=y)):(E=u,D=f,O=g,J=y,u>=0?(b=c,S=l,T=h,R=d,U=m,P=x,H=p,F=v):(b=l,S=c,T=d,R=h,U=x,P=m,H=v,F=p)),E===0)return null;let B=b/E,z=S/E,W=1/E,K=T-B*D,se=R-z*D,V=U-B*O,Q=P-z*O,re=H-B*J,Ce=F-z*J,ue=re*Q-Ce*V,De=K*Ce-se*re,ft=V*se-Q*K;if(i){if(ue<0||De<0||ft<0)return null}else if((ue<0||De<0||ft<0)&&(ue>0||De>0||ft>0))return null;let ke=ue+De+ft;if(ke===0)return null;let $e=W*(ue*D+De*O+ft*J);return(ke>0?$e<0:$e>0)?null:this.at($e/ke,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ht=class extends un{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xn,this.combine=Ho,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},dd=new Xe,Wi=new Yi,qa=new pn,fd=new L,Xa=new L,ja=new L,Ka=new L,El=new L,Ja=new L,pd=new L,Ya=new L,Ee=class extends Et{constructor(e=new Ye,t=new Ht){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let o=this.morphTargetInfluences;if(r&&o){Ja.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let u=o[c],h=r[c];u!==0&&(El.fromBufferAttribute(h,e),a?Ja.addScaledVector(El,u):Ja.addScaledVector(El.sub(t),u))}t.add(Ja)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),qa.copy(n.boundingSphere),qa.applyMatrix4(r),Wi.copy(e.ray).recast(e.near),!(qa.containsPoint(Wi.origin)===!1&&(Wi.intersectSphere(qa,fd)===null||Wi.origin.distanceToSquared(fd)>(e.far-e.near)**2))&&(dd.copy(r).invert(),Wi.copy(e.ray).applyMatrix4(dd),!(n.boundingBox!==null&&Wi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Wi)))}_computeIntersections(e,t,n){let i,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,x=d.length;m<x;m++){let g=d[m],p=a[g.materialIndex],v=Math.max(g.start,f.start),y=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let _=v,w=y;_<w;_+=3){let M=o.getX(_),b=o.getX(_+1),S=o.getX(_+2);i=Za(this,p,e,n,l,u,h,M,b,S),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{let m=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let g=m,p=x;g<p;g+=3){let v=o.getX(g),y=o.getX(g+1),_=o.getX(g+2);i=Za(this,a,e,n,l,u,h,v,y,_),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let m=0,x=d.length;m<x;m++){let g=d[m],p=a[g.materialIndex],v=Math.max(g.start,f.start),y=Math.min(c.count,Math.min(g.start+g.count,f.start+f.count));for(let _=v,w=y;_<w;_+=3){let M=_,b=_+1,S=_+2;i=Za(this,p,e,n,l,u,h,M,b,S),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{let m=Math.max(0,f.start),x=Math.min(c.count,f.start+f.count);for(let g=m,p=x;g<p;g+=3){let v=g,y=g+1,_=g+2;i=Za(this,a,e,n,l,u,h,v,y,_),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}}};function ag(s,e,t,n,i,r,a,o){let c;if(e.side===fn?c=n.intersectTriangle(a,r,i,!0,o):c=n.intersectTriangle(i,r,a,e.side===Yn,o),c===null)return null;Ya.copy(o),Ya.applyMatrix4(s.matrixWorld);let l=t.ray.origin.distanceTo(Ya);return l<t.near||l>t.far?null:{distance:l,point:Ya.clone(),object:s}}function Za(s,e,t,n,i,r,a,o,c,l){s.getVertexPosition(o,Xa),s.getVertexPosition(c,ja),s.getVertexPosition(l,Ka);let u=ag(s,e,t,n,Xa,ja,Ka,pd);if(u){let h=new L;Ii.getBarycoord(pd,Xa,ja,Ka,h),i&&(u.uv=Ii.getInterpolatedAttribute(i,o,c,l,h,new ae)),r&&(u.uv1=Ii.getInterpolatedAttribute(r,o,c,l,h,new ae)),a&&(u.normal=Ii.getInterpolatedAttribute(a,o,c,l,h,new L),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let d={a:o,b:c,c:l,normal:new L,materialIndex:0};Ii.getNormal(Xa,ja,Ka,d.normal),u.face=d,u.barycoord=h}return u}var Mr=new yt,md=new yt,gd=new yt,og=new yt,bd=new Xe,$a=new L,Rl=new pn,xd=new Xe,Cl=new Yi,zr=class extends Ee{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Ul,this.bindMatrix=new Xe,this.bindMatrixInverse=new Xe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new hn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,$a),this.boundingBox.expandByPoint($a)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new pn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,$a),this.boundingSphere.expandByPoint($a)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}raycast(e,t){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Rl.copy(this.boundingSphere),Rl.applyMatrix4(i),e.ray.intersectsSphere(Rl)!==!1&&(xd.copy(i).invert(),Cl.copy(e.ray).applyMatrix4(xd),!(this.boundingBox!==null&&Cl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Cl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new yt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Ul?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===pf?this.bindMatrixInverse.copy(this.bindMatrix).invert():Ue("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,i=this.geometry;md.fromBufferAttribute(i.attributes.skinIndex,e),gd.fromBufferAttribute(i.attributes.skinWeight,e),t.isVector4?(Mr.copy(t),t.set(0,0,0,0)):(Mr.set(t.x,t.y,t.z,1),t.set(0,0,0)),Mr.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let a=gd.getComponent(r);if(a!==0){let o=md.getComponent(r);bd.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(og.copy(Mr).applyMatrix4(bd),a)}}return t.isVector4&&(t.w=Mr.w),t.applyMatrix4(this.bindMatrixInverse)}},qs=class extends Et{constructor(){super(),this.isBone=!0,this.type="Bone"}},Xs=class extends Xt{constructor(e=null,t=1,n=1,i,r,a,o,c,l=Ot,u=Ot,h,d){super(null,a,o,c,l,u,i,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},_d=new Xe,cg=new Xe,Gr=class s{constructor(e=[],t=[]){this.uuid=Gn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.previousBoneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Ue("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Xe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Xe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:cg;_d.multiplyMatrices(o,t[r]),_d.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new s(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Xs(t,e,e,In,Tn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null),this.previousBoneTexture!==null&&(this.previousBoneTexture.dispose(),this.previousBoneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let r=e.bones[n],a=t[r];a===void 0&&(Ue("Skeleton: No bone found with UUID:",r),a=new qs),this.bones.push(a),this.boneInverses.push(new Xe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){let a=t[i];e.bones.push(a.uuid);let o=n[i];e.boneInverses.push(o.toArray())}return e}},ui=class extends Mt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Is=new Xe,vd=new Xe,Qa=[],yd=new hn,lg=new Xe,Sr=new Ee,wr=new pn,Hr=class extends Ee{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ui(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,lg)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new hn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Is),yd.copy(e.boundingBox).applyMatrix4(Is),this.boundingBox.union(yd)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new pn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Is),wr.copy(e.boundingSphere).applyMatrix4(Is),this.boundingSphere.union(wr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){let n=this.matrixWorld,i=this.count;if(Sr.geometry=this.geometry,Sr.material=this.material,Sr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),wr.copy(this.boundingSphere),wr.applyMatrix4(n),e.ray.intersectsSphere(wr)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Is),vd.multiplyMatrices(n,Is),Sr.matrixWorld=vd,Sr.raycast(e,Qa);for(let a=0,o=Qa.length;a<o;a++){let c=Qa[a];c.instanceId=r,c.object=this,t.push(c)}Qa.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new ui(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Xs(new Float32Array(i*this.count),i,this.count,Ko,Tn));let r=this.morphTexture.source.data.data,a=0;for(let l=0;l<n.length;l++)a+=n[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=i*e;return r[c]=o,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},qi=new pn,hg=new ae(.5,.5),eo=new L,Di=class{constructor(e=new kn,t=new kn,n=new kn,i=new kn,r=new kn,a=new kn){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Cn,n=!1){let i=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],u=r[4],h=r[5],d=r[6],f=r[7],m=r[8],x=r[9],g=r[10],p=r[11],v=r[12],y=r[13],_=r[14],w=r[15];if(i[0].setComponents(l-a,f-u,p-m,w-v).normalize(),i[1].setComponents(l+a,f+u,p+m,w+v).normalize(),i[2].setComponents(l+o,f+h,p+x,w+y).normalize(),i[3].setComponents(l-o,f-h,p-x,w-y).normalize(),n)i[4].setComponents(c,d,g,_).normalize(),i[5].setComponents(l-c,f-d,p-g,w-_).normalize();else if(i[4].setComponents(l-c,f-d,p-g,w-_).normalize(),t===Cn)i[5].setComponents(l+c,f+d,p+g,w+_).normalize();else if(t===ks)i[5].setComponents(c,d,g,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),qi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),qi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(qi)}intersectsSprite(e){qi.center.set(0,0,0);let t=hg.distanceTo(e.center);return qi.radius=.7071067811865476+t,qi.applyMatrix4(e.matrixWorld),this.intersectsSphere(qi)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(eo.x=i.normal.x>0?e.max.x:e.min.x,eo.y=i.normal.y>0?e.max.y:e.min.y,eo.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(eo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Md=new Xe,Mo=class s{constructor(){this.coordinateSystem=Cn,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let i=0;i<t.length;i++){let r=t[i];Md.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[i]===void 0&&(n[i]=new Di),n[i].setFromProjectionMatrix(Md,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let i=0;i<e._count;i++)t[i]===void 0&&(t[i]=new Di),t[i].copy(n[i]);return this._count=e._count,this}clone(){return new s().copy(this)}};var js=class extends un{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ne(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},So=new L,wo=new L,Sd=new Xe,Tr=new Yi,to=new pn,Pl=new L,wd=new L,Zi=class extends Et{constructor(e=new Ye,t=new js){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)So.fromBufferAttribute(t,i-1),wo.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=So.distanceTo(wo);e.setAttribute("lineDistance",new Le(n,1))}else Ue("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),to.copy(n.boundingSphere),to.applyMatrix4(i),to.radius+=r,e.ray.intersectsSphere(to)===!1)return;Sd.copy(i).invert(),Tr.copy(e.ray).applyMatrix4(Sd);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){let f=Math.max(0,a.start),m=Math.min(u.count,a.start+a.count);for(let x=f,g=m-1;x<g;x+=l){let p=u.getX(x),v=u.getX(x+1),y=no(this,e,Tr,c,p,v,x);y&&t.push(y)}if(this.isLineLoop){let x=u.getX(m-1),g=u.getX(f),p=no(this,e,Tr,c,x,g,m-1);p&&t.push(p)}}else{let f=Math.max(0,a.start),m=Math.min(d.count,a.start+a.count);for(let x=f,g=m-1;x<g;x+=l){let p=no(this,e,Tr,c,x,x+1,x);p&&t.push(p)}if(this.isLineLoop){let x=no(this,e,Tr,c,m-1,f,m-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function no(s,e,t,n,i,r,a){let o=s.geometry.attributes.position;if(So.fromBufferAttribute(o,i),wo.fromBufferAttribute(o,r),t.distanceSqToSegment(So,wo,Pl,wd)>n)return;Pl.applyMatrix4(s.matrixWorld);let l=e.ray.origin.distanceTo(Pl);if(!(l<e.near||l>e.far))return{distance:l,point:wd.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}var Td=new L,Ad=new L,Vr=class extends Zi{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Td.fromBufferAttribute(t,i),Ad.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Td.distanceTo(Ad);e.setAttribute("lineDistance",new Le(n,1))}else Ue("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Wr=class extends Zi{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Ks=class extends un{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ne(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Ed=new Xe,Gl=new Yi,io=new pn,so=new L,qr=class extends Et{constructor(e=new Ye,t=new Ks){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),io.copy(n.boundingSphere),io.applyMatrix4(i),io.radius+=r,e.ray.intersectsSphere(io)===!1)return;Ed.copy(i).invert(),Gl.copy(e.ray).applyMatrix4(Ed);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,h=n.attributes.position;if(l!==null){let d=Math.max(0,a.start),f=Math.min(l.count,a.start+a.count);for(let m=d,x=f;m<x;m++){let g=l.getX(m);so.fromBufferAttribute(h,g),Rd(so,g,c,i,e,t,this)}}else{let d=Math.max(0,a.start),f=Math.min(h.count,a.start+a.count);for(let m=d,x=f;m<x;m++)so.fromBufferAttribute(h,m),Rd(so,m,c,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Rd(s,e,t,n,i,r,a){let o=Gl.distanceSqToPoint(s);if(o<t){let c=new L;Gl.closestPointToPoint(s,c),c.applyMatrix4(n);let l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Xr=class extends Xt{constructor(e=[],t=hs,n,i,r,a,o,c,l,u){super(e,t,n,i,r,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},mn=class extends Xt{constructor(e,t,n,i,r,a,o,c,l){super(e,t,n,i,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var di=class extends Xt{constructor(e,t,n=Bn,i,r,a,o=Ot,c=Ot,l,u=hi,h=1){if(u!==hi&&u!==xi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:h};super(d,i,r,a,o,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Gs(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},jr=class extends di{constructor(e,t=Bn,n=hs,i,r,a=Ot,o=Ot,c,l=hi){let u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,t,n,i,r,a,o,c,l),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Kr=class extends Xt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Ft=class s extends Ye{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};let o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],u=[],h=[],d=0,f=0;m("z","y","x",-1,-1,n,t,e,a,r,0),m("z","y","x",1,-1,n,t,-e,a,r,1),m("x","z","y",1,1,e,n,t,i,a,2),m("x","z","y",1,-1,e,n,-t,i,a,3),m("x","y","z",1,-1,e,t,n,i,r,4),m("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new Le(l,3)),this.setAttribute("normal",new Le(u,3)),this.setAttribute("uv",new Le(h,2));function m(x,g,p,v,y,_,w,M,b,S,E){let T=_/b,R=w/S,D=_/2,U=w/2,P=M/2,O=b+1,H=S+1,F=0,J=0,B=new L;for(let z=0;z<H;z++){let W=z*R-U;for(let K=0;K<O;K++){let se=K*T-D;B[x]=se*v,B[g]=W*y,B[p]=P,l.push(B.x,B.y,B.z),B[x]=0,B[g]=0,B[p]=M>0?1:-1,u.push(B.x,B.y,B.z),h.push(K/b),h.push(1-z/S),F+=1}}for(let z=0;z<S;z++)for(let W=0;W<b;W++){let K=d+W+O*z,se=d+W+O*(z+1),V=d+(W+1)+O*(z+1),Q=d+(W+1)+O*z;c.push(K,se,Q),c.push(se,V,Q),J+=6}o.addGroup(f,J,E),f+=J,d+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var $i=class s extends Ye{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);let r=[],a=[],o=[],c=[],l=new L,u=new ae;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let h=0,d=3;h<=t;h++,d+=3){let f=n+h/t*i;l.x=e*Math.cos(f),l.y=e*Math.sin(f),a.push(l.x,l.y,l.z),o.push(0,0,1),u.x=(a[d]/e+1)/2,u.y=(a[d+1]/e+1)/2,c.push(u.x,u.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new Le(a,3)),this.setAttribute("normal",new Le(o,3)),this.setAttribute("uv",new Le(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.segments,e.thetaStart,e.thetaLength)}},gn=class s extends Ye{constructor(e=1,t=1,n=1,i=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;i=Math.floor(i),r=Math.floor(r);let u=[],h=[],d=[],f=[],m=0,x=[],g=n/2,p=0;v(),a===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(u),this.setAttribute("position",new Le(h,3)),this.setAttribute("normal",new Le(d,3)),this.setAttribute("uv",new Le(f,2));function v(){let _=new L,w=new L,M=0,b=(t-e)/n;for(let S=0;S<=r;S++){let E=[],T=S/r,R=T*(t-e)+e;for(let D=0;D<=i;D++){let U=D/i,P=U*c+o,O=Math.sin(P),H=Math.cos(P);w.x=R*O,w.y=-T*n+g,w.z=R*H,h.push(w.x,w.y,w.z),_.set(O,b,H).normalize(),d.push(_.x,_.y,_.z),f.push(U,1-T),E.push(m++)}x.push(E)}for(let S=0;S<i;S++)for(let E=0;E<r;E++){let T=x[E][S],R=x[E+1][S],D=x[E+1][S+1],U=x[E][S+1];(e>0||E!==0)&&(u.push(T,R,U),M+=3),(t>0||E!==r-1)&&(u.push(R,D,U),M+=3)}l.addGroup(p,M,0),p+=M}function y(_){let w=m,M=new ae,b=new L,S=0,E=_===!0?e:t,T=_===!0?1:-1;for(let D=1;D<=i;D++)h.push(0,g*T,0),d.push(0,T,0),f.push(.5,.5),m++;let R=m;for(let D=0;D<=i;D++){let P=D/i*c+o,O=Math.cos(P),H=Math.sin(P);b.x=E*H,b.y=g*T,b.z=E*O,h.push(b.x,b.y,b.z),d.push(0,T,0),M.x=O*.5+.5,M.y=H*.5*T+.5,f.push(M.x,M.y),m++}for(let D=0;D<i;D++){let U=w+D,P=R+D;_===!0?u.push(P,P+1,U):u.push(P+1,P,U),S+=3}l.addGroup(p,S,_===!0?1:2),p+=S}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Jr=class s extends gn{constructor(e=1,t=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new s(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Yr=class s extends Ye{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};let r=[],a=[];o(i),l(n),u(),this.setAttribute("position",new Le(r,3)),this.setAttribute("normal",new Le(r.slice(),3)),this.setAttribute("uv",new Le(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(v){let y=new L,_=new L,w=new L;for(let M=0;M<t.length;M+=3)f(t[M+0],y),f(t[M+1],_),f(t[M+2],w),c(y,_,w,v)}function c(v,y,_,w){let M=w+1,b=[];for(let S=0;S<=M;S++){b[S]=[];let E=v.clone().lerp(_,S/M),T=y.clone().lerp(_,S/M),R=M-S;for(let D=0;D<=R;D++)D===0&&S===M?b[S][D]=E:b[S][D]=E.clone().lerp(T,D/R)}for(let S=0;S<M;S++)for(let E=0;E<2*(M-S)-1;E++){let T=Math.floor(E/2);E%2===0?(d(b[S][T+1]),d(b[S+1][T]),d(b[S][T])):(d(b[S][T+1]),d(b[S+1][T+1]),d(b[S+1][T]))}}function l(v){let y=new L;for(let _=0;_<r.length;_+=3)y.x=r[_+0],y.y=r[_+1],y.z=r[_+2],y.normalize().multiplyScalar(v),r[_+0]=y.x,r[_+1]=y.y,r[_+2]=y.z}function u(){let v=new L;for(let y=0;y<r.length;y+=3){v.x=r[y+0],v.y=r[y+1],v.z=r[y+2];let _=g(v)/2/Math.PI+.5,w=p(v)/Math.PI+.5;a.push(_,1-w)}m(),h()}function h(){for(let v=0;v<a.length;v+=6){let y=a[v+0],_=a[v+2],w=a[v+4],M=Math.max(y,_,w),b=Math.min(y,_,w);M>.9&&b<.1&&(y<.2&&(a[v+0]+=1),_<.2&&(a[v+2]+=1),w<.2&&(a[v+4]+=1))}}function d(v){r.push(v.x,v.y,v.z)}function f(v,y){let _=v*3;y.x=e[_+0],y.y=e[_+1],y.z=e[_+2]}function m(){let v=new L,y=new L,_=new L,w=new L,M=new ae,b=new ae,S=new ae;for(let E=0,T=0;E<r.length;E+=9,T+=6){v.set(r[E+0],r[E+1],r[E+2]),y.set(r[E+3],r[E+4],r[E+5]),_.set(r[E+6],r[E+7],r[E+8]),M.set(a[T+0],a[T+1]),b.set(a[T+2],a[T+3]),S.set(a[T+4],a[T+5]),w.copy(v).add(y).add(_).divideScalar(3);let R=g(w);x(M,T+0,v,R),x(b,T+2,y,R),x(S,T+4,_,R)}}function x(v,y,_,w){w<0&&v.x===1&&(a[y]=v.x-1),_.x===0&&_.z===0&&(a[y]=w/2/Math.PI+.5)}function g(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.vertices,e.indices,e.radius,e.detail)}};var wn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ue("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),i=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(i=Math.floor(o+(c-o)/2),l=n[i]-a,l<0)o=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===a)return i/(r-1);let u=n[i],d=n[i+1]-u,f=(a-u)/d;return(i+f)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);let a=this.getPoint(i),o=this.getPoint(r),c=t||(a.isVector2?new ae:new L);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new L,i=[],r=[],a=[],o=new L,c=new Xe;for(let f=0;f<=e;f++){let m=f/e;i[f]=this.getTangentAt(m,new L)}r[0]=new L,a[0]=new L;let l=Number.MAX_VALUE,u=Math.abs(i[0].x),h=Math.abs(i[0].y),d=Math.abs(i[0].z);u<=l&&(l=u,n.set(1,0,0)),h<=l&&(l=h,n.set(0,1,0)),d<=l&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(i[f-1],i[f]),o.length()>Number.EPSILON){o.normalize();let m=Math.acos(st(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(o,m))}a[f].crossVectors(i[f],r[f])}if(t===!0){let f=Math.acos(st(r[0].dot(r[e]),-1,1));f/=e,i[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let m=1;m<=e;m++)r[m].applyMatrix4(c.makeRotationAxis(i[m],f*m)),a[m].crossVectors(i[m],r[m])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},Js=class extends wn{constructor(e=0,t=0,n=1,i=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new ae){let n=t,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(a?r=0:r=i),this.aClockwise===!0&&!a&&(r===i?r=-i:r=r-i);let o=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*u-f*h+this.aX,l=d*h+f*u+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},To=class extends Js{constructor(e,t,n,i,r,a){super(e,t,n,n,i,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Eh(){let s=0,e=0,t=0,n=0;function i(r,a,o,c){s=r,e=o,t=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){i(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,u,h){let d=(a-r)/l-(o-r)/(l+u)+(o-a)/u,f=(o-a)/u-(c-a)/(u+h)+(c-o)/h;d*=u,f*=u,i(a,o,d,f)},calc:function(r){let a=r*r,o=a*r;return s+e*r+t*a+n*o}}}var Cd=new L,Pd=new L,Il=new Eh,Dl=new Eh,Ll=new Eh,Ao=class extends wn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new L){let n=t,i=this.points,r=i.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,u;this.closed||o>0?l=i[(o-1)%r]:(Pd.subVectors(i[0],i[1]).add(i[0]),l=Pd);let h=i[o%r],d=i[(o+1)%r];if(this.closed||o+2<r?u=i[(o+2)%r]:(Cd.subVectors(i[r-1],i[r-2]).add(i[r-1]),u=Cd),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,m=Math.pow(l.distanceToSquared(h),f),x=Math.pow(h.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(u),f);x<1e-4&&(x=1),m<1e-4&&(m=x),g<1e-4&&(g=x),Il.initNonuniformCatmullRom(l.x,h.x,d.x,u.x,m,x,g),Dl.initNonuniformCatmullRom(l.y,h.y,d.y,u.y,m,x,g),Ll.initNonuniformCatmullRom(l.z,h.z,d.z,u.z,m,x,g)}else this.curveType==="catmullrom"&&(Il.initCatmullRom(l.x,h.x,d.x,u.x,this.tension),Dl.initCatmullRom(l.y,h.y,d.y,u.y,this.tension),Ll.initCatmullRom(l.z,h.z,d.z,u.z,this.tension));return n.set(Il.calc(c),Dl.calc(c),Ll.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new L().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Id(s,e,t,n,i){let r=(n-e)*.5,a=(i-t)*.5,o=s*s,c=s*o;return(2*t-2*n+r+a)*c+(-3*t+3*n-2*r-a)*o+r*s+t}function ug(s,e){let t=1-s;return t*t*e}function dg(s,e){return 2*(1-s)*s*e}function fg(s,e){return s*s*e}function Pr(s,e,t,n){return ug(s,e)+dg(s,t)+fg(s,n)}function pg(s,e){let t=1-s;return t*t*t*e}function mg(s,e){let t=1-s;return 3*t*t*s*e}function gg(s,e){return 3*(1-s)*s*s*e}function bg(s,e){return s*s*s*e}function Ir(s,e,t,n,i){return pg(s,e)+mg(s,t)+gg(s,n)+bg(s,i)}var Zr=class extends wn{constructor(e=new ae,t=new ae,n=new ae,i=new ae){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new ae){let n=t,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ir(e,i.x,r.x,a.x,o.x),Ir(e,i.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Eo=class extends wn{constructor(e=new L,t=new L,n=new L,i=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new L){let n=t,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ir(e,i.x,r.x,a.x,o.x),Ir(e,i.y,r.y,a.y,o.y),Ir(e,i.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},$r=class extends wn{constructor(e=new ae,t=new ae){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ae){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ae){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ro=class extends wn{constructor(e=new L,t=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new L){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new L){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Qr=class extends wn{constructor(e=new ae,t=new ae,n=new ae){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ae){let n=t,i=this.v0,r=this.v1,a=this.v2;return n.set(Pr(e,i.x,r.x,a.x),Pr(e,i.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Co=class extends wn{constructor(e=new L,t=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new L){let n=t,i=this.v0,r=this.v1,a=this.v2;return n.set(Pr(e,i.x,r.x,a.x),Pr(e,i.y,r.y,a.y),Pr(e,i.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ea=class extends wn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ae){let n=t,i=this.points,r=(i.length-1)*e,a=Math.floor(r),o=r-a,c=i[a===0?a:a-1],l=i[a],u=i[a>i.length-2?i.length-1:a+1],h=i[a>i.length-3?i.length-1:a+2];return n.set(Id(o,c.x,l.x,u.x,h.x),Id(o,c.y,l.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new ae().fromArray(i))}return this}},Hl=Object.freeze({__proto__:null,ArcCurve:To,CatmullRomCurve3:Ao,CubicBezierCurve:Zr,CubicBezierCurve3:Eo,EllipseCurve:Js,LineCurve:$r,LineCurve3:Ro,QuadraticBezierCurve:Qr,QuadraticBezierCurve3:Co,SplineCurve:ea}),Po=class extends wn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Hl[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=n){let a=i[r]-n,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let i=0,r=this.curves;i<r.length;i++){let a=r[i],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,c=a.getPoints(o);for(let l=0;l<c.length;l++){let u=c[l];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(new Hl[i.type]().fromJSON(i))}return this.cacheLengths=null,this}},ta=class extends Po{constructor(e){super(),this.type="Path",this.currentPoint=new ae,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new $r(this.currentPoint.clone(),new ae(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){let r=new Qr(this.currentPoint.clone(),new ae(e,t),new ae(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,a){let o=new Zr(this.currentPoint.clone(),new ae(e,t),new ae(n,i),new ae(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new ea(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,a){let o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,n,i,r,a),this}absarc(e,t,n,i,r,a){return this.absellipse(e,t,n,n,i,r,a),this}ellipse(e,t,n,i,r,a,o,c){let l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+l,t+u,n,i,r,a,o,c),this}absellipse(e,t,n,i,r,a,o,c){let l=new Js(e,t,n,i,r,a,o,c);if(this.curves.length>0){let h=l.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(l);let u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Qi=class extends ta{constructor(e){super(e),this.uuid=Gn(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(new ta().fromJSON(i))}return this}};function xg(s,e,t=2){let n=e&&e.length,i=n?e[0]*t:s.length,r=Cf(s,0,i,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,c,l;if(n&&(r=Sg(s,e,r,t)),s.length>80*t){o=s[0],c=s[1];let u=o,h=c;for(let d=t;d<i;d+=t){let f=s[d],m=s[d+1];f<o&&(o=f),m<c&&(c=m),f>u&&(u=f),m>h&&(h=m)}l=Math.max(u-o,h-c),l=l!==0?32767/l:0}return na(r,a,t,o,c,l,0),a}function Cf(s,e,t,n,i){let r;if(i===Ng(s,e,t,n)>0)for(let a=e;a<t;a+=n)r=Dd(a/n|0,s[a],s[a+1],r);else for(let a=t-n;a>=e;a-=n)r=Dd(a/n|0,s[a],s[a+1],r);return r&&Ys(r,r.next)&&(sa(r),r=r.next),r}function es(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(Ys(t,t.next)||Pt(t.prev,t,t.next)===0)){if(sa(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function na(s,e,t,n,i,r,a){if(!s)return;!a&&r&&Rg(s,n,i,r);let o=s;for(;s.prev!==s.next;){let c=s.prev,l=s.next;if(r?vg(s,n,i,r):_g(s)){e.push(c.i,s.i,l.i),sa(s),s=l.next,o=l.next;continue}if(s=l,s===o){a?a===1?(s=yg(es(s),e),na(s,e,t,n,i,r,2)):a===2&&Mg(s,e,t,n,i,r):na(es(s),e,t,n,i,r,1);break}}}function _g(s){let e=s.prev,t=s,n=s.next;if(Pt(e,t,n)>=0)return!1;let i=e.x,r=t.x,a=n.x,o=e.y,c=t.y,l=n.y,u=Math.min(i,r,a),h=Math.min(o,c,l),d=Math.max(i,r,a),f=Math.max(o,c,l),m=n.next;for(;m!==e;){if(m.x>=u&&m.x<=d&&m.y>=h&&m.y<=f&&Ar(i,o,r,c,a,l,m.x,m.y)&&Pt(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function vg(s,e,t,n){let i=s.prev,r=s,a=s.next;if(Pt(i,r,a)>=0)return!1;let o=i.x,c=r.x,l=a.x,u=i.y,h=r.y,d=a.y,f=Math.min(o,c,l),m=Math.min(u,h,d),x=Math.max(o,c,l),g=Math.max(u,h,d),p=Vl(f,m,e,t,n),v=Vl(x,g,e,t,n),y=s.prevZ,_=s.nextZ;for(;y&&y.z>=p&&_&&_.z<=v;){if(y.x>=f&&y.x<=x&&y.y>=m&&y.y<=g&&y!==i&&y!==a&&Ar(o,u,c,h,l,d,y.x,y.y)&&Pt(y.prev,y,y.next)>=0||(y=y.prevZ,_.x>=f&&_.x<=x&&_.y>=m&&_.y<=g&&_!==i&&_!==a&&Ar(o,u,c,h,l,d,_.x,_.y)&&Pt(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;y&&y.z>=p;){if(y.x>=f&&y.x<=x&&y.y>=m&&y.y<=g&&y!==i&&y!==a&&Ar(o,u,c,h,l,d,y.x,y.y)&&Pt(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;_&&_.z<=v;){if(_.x>=f&&_.x<=x&&_.y>=m&&_.y<=g&&_!==i&&_!==a&&Ar(o,u,c,h,l,d,_.x,_.y)&&Pt(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function yg(s,e){let t=s;do{let n=t.prev,i=t.next.next;!Ys(n,i)&&If(n,t,t.next,i)&&ia(n,i)&&ia(i,n)&&(e.push(n.i,t.i,i.i),sa(t),sa(t.next),t=s=i),t=t.next}while(t!==s);return es(t)}function Mg(s,e,t,n,i,r){let a=s;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Ig(a,o)){let c=Df(a,o);a=es(a,a.next),c=es(c,c.next),na(a,e,t,n,i,r,0),na(c,e,t,n,i,r,0);return}o=o.next}a=a.next}while(a!==s)}function Sg(s,e,t,n){let i=[];for(let r=0,a=e.length;r<a;r++){let o=e[r]*n,c=r<a-1?e[r+1]*n:s.length,l=Cf(s,o,c,n,!1);l===l.next&&(l.steiner=!0),i.push(Pg(l))}i.sort(wg);for(let r=0;r<i.length;r++)t=Tg(i[r],t);return t}function wg(s,e){let t=s.x-e.x;if(t===0&&(t=s.y-e.y,t===0)){let n=(s.next.y-s.y)/(s.next.x-s.x),i=(e.next.y-e.y)/(e.next.x-e.x);t=n-i}return t}function Tg(s,e){let t=Ag(s,e);if(!t)return e;let n=Df(t,s);return es(n,n.next),es(t,t.next)}function Ag(s,e){let t=e,n=s.x,i=s.y,r=-1/0,a;if(Ys(s,t))return t;do{if(Ys(s,t.next))return t.next;if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){let h=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=n&&h>r&&(r=h,a=t.x<t.next.x?t:t.next,h===n))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,c=a.x,l=a.y,u=1/0;t=a;do{if(n>=t.x&&t.x>=c&&n!==t.x&&Pf(i<l?n:r,i,c,l,i<l?r:n,i,t.x,t.y)){let h=Math.abs(i-t.y)/(n-t.x);ia(t,s)&&(h<u||h===u&&(t.x>a.x||t.x===a.x&&Eg(a,t)))&&(a=t,u=h)}t=t.next}while(t!==o);return a}function Eg(s,e){return Pt(s.prev,s,e.prev)<0&&Pt(e.next,s,s.next)<0}function Rg(s,e,t,n){let i=s;do i.z===0&&(i.z=Vl(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,Cg(i)}function Cg(s){let e,t=1;do{let n=s,i;s=null;let r=null;for(e=0;n;){e++;let a=n,o=0;for(let l=0;l<t&&(o++,a=a.nextZ,!!a);l++);let c=t;for(;o>0||c>0&&a;)o!==0&&(c===0||!a||n.z<=a.z)?(i=n,n=n.nextZ,o--):(i=a,a=a.nextZ,c--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;n=a}r.nextZ=null,t*=2}while(e>1);return s}function Vl(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function Pg(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function Pf(s,e,t,n,i,r,a,o){return(i-a)*(e-o)>=(s-a)*(r-o)&&(s-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(i-a)*(n-o)}function Ar(s,e,t,n,i,r,a,o){return!(s===a&&e===o)&&Pf(s,e,t,n,i,r,a,o)}function Ig(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!Dg(s,e)&&(ia(s,e)&&ia(e,s)&&Lg(s,e)&&(Pt(s.prev,s,e.prev)||Pt(s,e.prev,e))||Ys(s,e)&&Pt(s.prev,s,s.next)>0&&Pt(e.prev,e,e.next)>0)}function Pt(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function Ys(s,e){return s.x===e.x&&s.y===e.y}function If(s,e,t,n){let i=ao(Pt(s,e,t)),r=ao(Pt(s,e,n)),a=ao(Pt(t,n,s)),o=ao(Pt(t,n,e));return!!(i!==r&&a!==o||i===0&&ro(s,t,e)||r===0&&ro(s,n,e)||a===0&&ro(t,s,n)||o===0&&ro(t,e,n))}function ro(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function ao(s){return s>0?1:s<0?-1:0}function Dg(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&If(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function ia(s,e){return Pt(s.prev,s,s.next)<0?Pt(s,e,s.next)>=0&&Pt(s,s.prev,e)>=0:Pt(s,e,s.prev)<0||Pt(s,s.next,e)<0}function Lg(s,e){let t=s,n=!1,i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function Df(s,e){let t=Wl(s.i,s.x,s.y),n=Wl(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Dd(s,e,t,n){let i=Wl(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function sa(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Wl(s,e,t){return{i:s,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Ng(s,e,t,n){let i=0;for(let r=e,a=t-n;r<t;r+=n)i+=(s[a]-s[r])*(s[r+1]+s[a+1]),a=r;return i}var ql=class{static triangulate(e,t,n=2){return xg(e,t,n)}},rn=class s{static area(e){let t=e.length,n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return s.area(e)<0}static triangulateShape(e,t){let n=[],i=[],r=[];Ld(e),Nd(n,e);let a=e.length;t.forEach(Ld);for(let c=0;c<t.length;c++)i.push(a),a+=t[c].length,Nd(n,t[c]);let o=ql.triangulate(n,i);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}};function Ld(s){let e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function Nd(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}var Zs=class s extends Ye{constructor(e=new Qi([new ae(.5,.5),new ae(-.5,.5),new ae(-.5,-.5),new ae(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,i=[],r=[];for(let o=0,c=e.length;o<c;o++){let l=e[o];a(l)}this.setAttribute("position",new Le(i,3)),this.setAttribute("uv",new Le(r,2)),this.computeVertexNormals();function a(o){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:f-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3,p=t.extrudePath,v=t.UVGenerator!==void 0?t.UVGenerator:Fg,y,_=!1,w,M,b,S;if(p){y=p.getSpacedPoints(u),_=!0,d=!1;let ne=p.isCatmullRomCurve3?p.closed:!1;w=p.computeFrenetFrames(u,ne),M=new L,b=new L,S=new L}d||(g=0,f=0,m=0,x=0);let E=o.extractPoints(l),T=E.shape,R=E.holes;if(!rn.isClockWise(T)){T=T.reverse();for(let ne=0,de=R.length;ne<de;ne++){let he=R[ne];rn.isClockWise(he)&&(R[ne]=he.reverse())}}function U(ne){let he=10000000000000001e-36,Ae=ne[0];for(let ye=1;ye<=ne.length;ye++){let Ze=ye%ne.length,Oe=ne[Ze],ct=Oe.x-Ae.x,lt=Oe.y-Ae.y,bt=ct*ct+lt*lt,G=Math.max(Math.abs(Oe.x),Math.abs(Oe.y),Math.abs(Ae.x),Math.abs(Ae.y)),kt=he*G*G;if(bt<=kt){ne.splice(Ze,1),ye--;continue}Ae=Oe}}U(T),R.forEach(U);let P=R.length,O=T;for(let ne=0;ne<P;ne++){let de=R[ne];T=T.concat(de)}function H(ne,de,he){return de||We("ExtrudeGeometry: vec does not exist"),ne.clone().addScaledVector(de,he)}let F=T.length;function J(ne,de,he){let Ae,ye,Ze,Oe=ne.x-de.x,ct=ne.y-de.y,lt=he.x-ne.x,bt=he.y-ne.y,G=Oe*Oe+ct*ct,kt=Oe*bt-ct*lt;if(Math.abs(kt)>Number.EPSILON){let ot=Math.sqrt(G),St=Math.sqrt(lt*lt+bt*bt),xe=de.x-ct/ot,Nt=de.y+Oe/ot,Ge=he.x-bt/St,qe=he.y+lt/St,I=((Ge-xe)*bt-(qe-Nt)*lt)/(Oe*bt-ct*lt);Ae=xe+Oe*I-ne.x,ye=Nt+ct*I-ne.y;let A=Ae*Ae+ye*ye;if(A<=2)return new ae(Ae,ye);Ze=Math.sqrt(A/2)}else{let ot=!1;Oe>Number.EPSILON?lt>Number.EPSILON&&(ot=!0):Oe<-Number.EPSILON?lt<-Number.EPSILON&&(ot=!0):Math.sign(ct)===Math.sign(bt)&&(ot=!0),ot?(Ae=-ct,ye=Oe,Ze=Math.sqrt(G)):(Ae=Oe,ye=ct,Ze=Math.sqrt(G/2))}return new ae(Ae/Ze,ye/Ze)}let B=[];for(let ne=0,de=O.length,he=de-1,Ae=ne+1;ne<de;ne++,he++,Ae++)he===de&&(he=0),Ae===de&&(Ae=0),B[ne]=J(O[ne],O[he],O[Ae]);let z=[],W,K=B.concat();for(let ne=0,de=P;ne<de;ne++){let he=R[ne];W=[];for(let Ae=0,ye=he.length,Ze=ye-1,Oe=Ae+1;Ae<ye;Ae++,Ze++,Oe++)Ze===ye&&(Ze=0),Oe===ye&&(Oe=0),W[Ae]=J(he[Ae],he[Ze],he[Oe]);z.push(W),K=K.concat(W)}let se;if(g===0)se=rn.triangulateShape(O,R);else{let ne=[],de=[];for(let he=0;he<g;he++){let Ae=he/g,ye=f*Math.cos(Ae*Math.PI/2),Ze=m*Math.sin(Ae*Math.PI/2)+x;for(let Oe=0,ct=O.length;Oe<ct;Oe++){let lt=H(O[Oe],B[Oe],Ze);De(lt.x,lt.y,-ye),Ae===0&&ne.push(lt)}for(let Oe=0,ct=P;Oe<ct;Oe++){let lt=R[Oe];W=z[Oe];let bt=[];for(let G=0,kt=lt.length;G<kt;G++){let ot=H(lt[G],W[G],Ze);De(ot.x,ot.y,-ye),Ae===0&&bt.push(ot)}Ae===0&&de.push(bt)}}se=rn.triangulateShape(ne,de)}let V=se.length,Q=m+x;for(let ne=0;ne<F;ne++){let de=d?H(T[ne],K[ne],Q):T[ne];_?(b.copy(w.normals[0]).multiplyScalar(de.x),M.copy(w.binormals[0]).multiplyScalar(de.y),S.copy(y[0]).add(b).add(M),De(S.x,S.y,S.z)):De(de.x,de.y,0)}for(let ne=1;ne<=u;ne++)for(let de=0;de<F;de++){let he=d?H(T[de],K[de],Q):T[de];_?(b.copy(w.normals[ne]).multiplyScalar(he.x),M.copy(w.binormals[ne]).multiplyScalar(he.y),S.copy(y[ne]).add(b).add(M),De(S.x,S.y,S.z)):De(he.x,he.y,h/u*ne)}for(let ne=g-1;ne>=0;ne--){let de=ne/g,he=f*Math.cos(de*Math.PI/2),Ae=m*Math.sin(de*Math.PI/2)+x;for(let ye=0,Ze=O.length;ye<Ze;ye++){let Oe=H(O[ye],B[ye],Ae);De(Oe.x,Oe.y,h+he)}for(let ye=0,Ze=R.length;ye<Ze;ye++){let Oe=R[ye];W=z[ye];for(let ct=0,lt=Oe.length;ct<lt;ct++){let bt=H(Oe[ct],W[ct],Ae);_?De(bt.x,bt.y+y[u-1].y,y[u-1].x+he):De(bt.x,bt.y,h+he)}}}re(),Ce();function re(){let ne=i.length/3;if(d){let de=0,he=F*de;for(let Ae=0;Ae<V;Ae++){let ye=se[Ae];ft(ye[2]+he,ye[1]+he,ye[0]+he)}de=u+g*2,he=F*de;for(let Ae=0;Ae<V;Ae++){let ye=se[Ae];ft(ye[0]+he,ye[1]+he,ye[2]+he)}}else{for(let de=0;de<V;de++){let he=se[de];ft(he[2],he[1],he[0])}for(let de=0;de<V;de++){let he=se[de];ft(he[0]+F*u,he[1]+F*u,he[2]+F*u)}}n.addGroup(ne,i.length/3-ne,0)}function Ce(){let ne=i.length/3,de=0;ue(O,de),de+=O.length;for(let he=0,Ae=R.length;he<Ae;he++){let ye=R[he];ue(ye,de),de+=ye.length}n.addGroup(ne,i.length/3-ne,1)}function ue(ne,de){let he=ne.length;for(;--he>=0;){let Ae=he,ye=he-1;ye<0&&(ye=ne.length-1);for(let Ze=0,Oe=u+g*2;Ze<Oe;Ze++){let ct=F*Ze,lt=F*(Ze+1),bt=de+Ae+ct,G=de+ye+ct,kt=de+ye+lt,ot=de+Ae+lt;ke(bt,G,kt,ot)}}}function De(ne,de,he){c.push(ne),c.push(de),c.push(he)}function ft(ne,de,he){$e(ne),$e(de),$e(he);let Ae=i.length/3,ye=v.generateTopUV(n,i,Ae-3,Ae-2,Ae-1);tt(ye[0]),tt(ye[1]),tt(ye[2])}function ke(ne,de,he,Ae){$e(ne),$e(de),$e(Ae),$e(de),$e(he),$e(Ae);let ye=i.length/3,Ze=v.generateSideWallUV(n,i,ye-6,ye-3,ye-2,ye-1);tt(Ze[0]),tt(Ze[1]),tt(Ze[3]),tt(Ze[1]),tt(Ze[2]),tt(Ze[3])}function $e(ne){i.push(c[ne*3+0]),i.push(c[ne*3+1]),i.push(c[ne*3+2])}function tt(ne){r.push(ne.x),r.push(ne.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Ug(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];n.push(o)}let i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new Hl[i.type]().fromJSON(i)),new s(n,e.options)}},Fg={generateTopUV:function(s,e,t,n,i){let r=e[t*3],a=e[t*3+1],o=e[n*3],c=e[n*3+1],l=e[i*3],u=e[i*3+1];return[new ae(r,a),new ae(o,c),new ae(l,u)]},generateSideWallUV:function(s,e,t,n,i,r){let a=e[t*3],o=e[t*3+1],c=e[t*3+2],l=e[n*3],u=e[n*3+1],h=e[n*3+2],d=e[i*3],f=e[i*3+1],m=e[i*3+2],x=e[r*3],g=e[r*3+1],p=e[r*3+2];return Math.abs(o-u)<Math.abs(a-l)?[new ae(a,1-c),new ae(l,1-h),new ae(d,1-m),new ae(x,1-p)]:[new ae(o,1-c),new ae(u,1-h),new ae(f,1-m),new ae(g,1-p)]}};function Ug(s,e,t){if(t.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){let r=s[n];t.shapes.push(r.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var ra=class s extends Yr{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}};var aa=class s extends Yr{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}},dn=class s extends Ye{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(i),l=o+1,u=c+1,h=e/o,d=t/c,f=[],m=[],x=[],g=[];for(let p=0;p<u;p++){let v=p*d-a;for(let y=0;y<l;y++){let _=y*h-r;m.push(_,-v,0),x.push(0,0,1),g.push(y/o),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let v=0;v<o;v++){let y=v+l*p,_=v+l*(p+1),w=v+1+l*(p+1),M=v+1+l*p;f.push(y,_,M),f.push(_,w,M)}this.setIndex(f),this.setAttribute("position",new Le(m,3)),this.setAttribute("normal",new Le(x,3)),this.setAttribute("uv",new Le(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}},oa=class s extends Ye{constructor(e=.5,t=1,n=32,i=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);let o=[],c=[],l=[],u=[],h=e,d=(t-e)/i,f=new L,m=new ae;for(let x=0;x<=i;x++){for(let g=0;g<=n;g++){let p=r+g/n*a;f.x=h*Math.cos(p),f.y=h*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),m.x=(f.x/t+1)/2,m.y=(f.y/t+1)/2,u.push(m.x,m.y)}h+=d}for(let x=0;x<i;x++){let g=x*(n+1);for(let p=0;p<n;p++){let v=p+g,y=v,_=v+n+1,w=v+n+2,M=v+1;o.push(y,_,M),o.push(_,w,M)}}this.setIndex(o),this.setAttribute("position",new Le(c,3)),this.setAttribute("normal",new Le(l,3)),this.setAttribute("uv",new Le(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var bn=class s extends Ye{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,u=[],h=new L,d=new L,f=[],m=[],x=[],g=[];for(let p=0;p<=n;p++){let v=[],y=p/n,_=a+y*o,w=e*Math.cos(_),M=Math.sqrt(e*e-w*w),b=0;p===0&&a===0?b=.5/t:p===n&&c===Math.PI&&(b=-.5/t);for(let S=0;S<=t;S++){let E=S/t,T=i+E*r;h.x=-M*Math.cos(T),h.y=w,h.z=M*Math.sin(T),m.push(h.x,h.y,h.z),d.copy(h).normalize(),x.push(d.x,d.y,d.z),g.push(E+b,1-y),v.push(l++)}u.push(v)}for(let p=0;p<n;p++)for(let v=0;v<t;v++){let y=u[p][v+1],_=u[p][v],w=u[p+1][v],M=u[p+1][v+1];(p!==0||a>0)&&f.push(y,_,M),(p!==n-1||c<Math.PI)&&f.push(_,w,M)}this.setIndex(f),this.setAttribute("position",new Le(m,3)),this.setAttribute("normal",new Le(x,3)),this.setAttribute("uv",new Le(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Li=class s extends Ye{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),i=Math.floor(i);let c=[],l=[],u=[],h=[],d=new L,f=new L,m=new L;for(let x=0;x<=n;x++){let g=a+x/n*o;for(let p=0;p<=i;p++){let v=p/i*r;f.x=(e+t*Math.cos(g))*Math.cos(v),f.y=(e+t*Math.cos(g))*Math.sin(v),f.z=t*Math.sin(g),l.push(f.x,f.y,f.z),d.x=e*Math.cos(v),d.y=e*Math.sin(v),m.subVectors(f,d).normalize(),u.push(m.x,m.y,m.z),h.push(p/i),h.push(x/n)}}for(let x=1;x<=n;x++)for(let g=1;g<=i;g++){let p=(i+1)*x+g-1,v=(i+1)*(x-1)+g-1,y=(i+1)*(x-1)+g,_=(i+1)*x+g;c.push(p,v,_),c.push(v,y,_)}this.setIndex(c),this.setAttribute("position",new Le(l,3)),this.setAttribute("normal",new Le(u,3)),this.setAttribute("uv",new Le(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function fs(s){let e={};for(let t in s){e[t]={};for(let n in s[t]){let i=s[t][n];if(Fd(i))i.isRenderTargetTexture?(Ue("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if(Fd(i[0])){let r=[];for(let a=0,o=i.length;a<o;a++)r[a]=i[a].clone();e[t][n]=r}else e[t][n]=i.slice();else e[t][n]=i}}return e}function an(s){let e={};for(let t=0;t<s.length;t++){let n=fs(s[t]);for(let i in n)e[i]=n[i]}return e}function Fd(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function Og(s){let e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Rh(s){let e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:it.workingColorSpace}var Lf={clone:fs,merge:an},kg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Bg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,jn=class extends un{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=kg,this.fragmentShader=Bg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=fs(e.uniforms),this.uniformsGroups=Og(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let i=e.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=t[i.value]||null;break;case"c":this.uniforms[n].value=new Ne().setHex(i.value);break;case"v2":this.uniforms[n].value=new ae().fromArray(i.value);break;case"v3":this.uniforms[n].value=new L().fromArray(i.value);break;case"v4":this.uniforms[n].value=new yt().fromArray(i.value);break;case"m3":this.uniforms[n].value=new je().fromArray(i.value);break;case"m4":this.uniforms[n].value=new Xe().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Io=class extends jn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},He=class extends un{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ne(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ya,this.normalScale=new ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Qt=class extends He{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ae(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return st(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Ne(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ne(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ne(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return Xi('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){Xi('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var ts=class extends un{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ya,this.normalScale=new ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xn,this.combine=Ho,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Do=class extends un{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=gf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Lo=class extends un{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Pi(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function Er(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}function zg(s){function e(i,r){return s[i]-s[r]}let t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Ud(s,e,t){let n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){let o=t[r]*e;for(let c=0;c!==e;++c)i[a++]=s[o+c]}return i}function Gg(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push(...a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=s[i++];while(r!==void 0)}var Kn=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},No=class extends Kn{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:kl,endingEnd:kl}}intervalChanged_(e,t,n){let i=this.parameterPositions,r=e-2,a=e+1,o=i[r],c=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Bl:r=e,o=2*t-n;break;case zl:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Bl:a=e,c=2*n-t;break;case zl:a=1,c=n+i[1]-i[0];break;default:a=e-1,c=t}let l=(n-t)*.5,u=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(n-t)/(i-t),x=m*m,g=x*m,p=-d*g+2*d*x-d*m,v=(1+d)*g+(-1.5-2*d)*x+(-.5+d)*m+1,y=(-1-f)*g+(1.5+f)*x+.5*m,_=f*g-f*x;for(let w=0;w!==o;++w)r[w]=p*a[u+w]+v*a[l+w]+y*a[c+w]+_*a[h+w];return r}},Fo=class extends Kn{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=(n-t)/(i-t),h=1-u;for(let d=0;d!==o;++d)r[d]=a[l+d]*h+a[c+d]*u;return r}},Uo=class extends Kn{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},Oo=class extends Kn{interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=this.inTangents,h=this.outTangents;if(!u||!h){let m=(n-t)/(i-t),x=1-m;for(let g=0;g!==o;++g)r[g]=a[l+g]*x+a[c+g]*m;return r}let d=o*2,f=e-1;for(let m=0;m!==o;++m){let x=a[l+m],g=a[c+m],p=f*d+m*2,v=h[p],y=h[p+1],_=e*d+m*2,w=u[_],M=u[_+1],b=Vg(n,t,v,w,i);r[m]=Nf(b,x,y,M,g)}return r}};function Nf(s,e,t,n,i){let r=1-s;return r*r*r*e+3*r*r*s*t+3*r*s*s*n+s*s*s*i}function Hg(s,e,t,n,i){let r=1-s;return 3*r*r*(t-e)+6*r*s*(n-t)+3*s*s*(i-n)}function Vg(s,e,t,n,i){let r=(s-e)/(i-e);for(let a=0;a<8;a++){let o=Nf(r,e,t,n,i)-s;if(Math.abs(o)<1e-10)break;let c=Hg(r,e,t,n,i);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-o/c))}return r}var xn=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Pi(t,this.TimeBufferType),this.values=Pi(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Pi(e.times,Array),values:Pi(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i),Er(e.settings)&&(n.settings={inTangents:Pi(e.settings.inTangents,Array),outTangents:Pi(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Uo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Fo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new No(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Oo(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case ji:t=this.InterpolantFactoryMethodDiscrete;break;case Ki:t=this.InterpolantFactoryMethodLinear;break;case lo:t=this.InterpolantFactoryMethodSmooth;break;case Ol:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ue("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ji;case this.InterpolantFactoryMethodLinear:return Ki;case this.InterpolantFactoryMethodSmooth:return lo;case this.InterpolantFactoryMethodBezier:return Ol}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e;Er(this.settings)&&(Od(this.settings.inTangents,e),Od(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e;Er(this.settings)&&(kd(this.settings.inTangents,e),kd(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,i=n.length,r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(We("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,r=n.length;r===0&&(We("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){We("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){We("KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(i!==void 0&&Rm(i))for(let o=0,c=i.length;o!==c;++o){let l=i[o];if(isNaN(l)){We("KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===lo,r=e.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=e[o],u=e[o+1];if(l!==u&&(o!==1||l!==e[0]))if(i)c=!0;else{let h=o*n,d=h-n,f=h+n;for(let m=0;m!==n;++m){let x=t[h+m];if(x!==t[d+m]||x!==t[f+m]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let h=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[h+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,Er(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};function Od(s,e){for(let t=0,n=s.length;t!==n;t+=2)s[t]+=e}function kd(s,e){for(let t=0,n=s.length;t!==n;t+=2)s[t]*=e}xn.prototype.ValueTypeName="";xn.prototype.TimeBufferType=Float32Array;xn.prototype.ValueBufferType=Float32Array;xn.prototype.DefaultInterpolation=Ki;var fi=class extends xn{constructor(e,t,n){super(e,t,n)}};fi.prototype.ValueTypeName="bool";fi.prototype.ValueBufferType=Array;fi.prototype.DefaultInterpolation=ji;fi.prototype.InterpolantFactoryMethodLinear=void 0;fi.prototype.InterpolantFactoryMethodSmooth=void 0;var ca=class extends xn{constructor(e,t,n,i){super(e,t,n,i)}};ca.prototype.ValueTypeName="color";var pi=class extends xn{constructor(e,t,n,i){super(e,t,n,i)}};pi.prototype.ValueTypeName="number";var ko=class extends Kn{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(i-t),l=e*o;for(let u=l+o;l!==u;l+=4)Gt.slerpFlat(r,0,a,l-o,a,l,c);return r}},mi=class extends xn{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new ko(this.times,this.values,this.getValueSize(),e)}};mi.prototype.ValueTypeName="quaternion";mi.prototype.InterpolantFactoryMethodSmooth=void 0;var gi=class extends xn{constructor(e,t,n){super(e,t,n)}};gi.prototype.ValueTypeName="string";gi.prototype.ValueBufferType=Array;gi.prototype.DefaultInterpolation=ji;gi.prototype.InterpolantFactoryMethodLinear=void 0;gi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ni=class extends xn{constructor(e,t,n,i){super(e,t,n,i)}};Ni.prototype.ValueTypeName="vector";var la=class{constructor(e="",t=-1,n=[],i=mf){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Gn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(qg(n[a]).scale(i));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=n.length;r!==a;++r)t.push(xn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let r=t.length,a=[];for(let o=0;o<r;o++){let c=[],l=[];c.push((o+r-1)%r,o,(o+1)%r),l.push(0,1,0);let u=zg(c);c=Ud(c,1,u),l=Ud(l,1,u),!i&&c[0]===0&&(c.push(r),l.push(l[0])),a.push(new pi(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){let l=e[o],u=l.name.match(r);if(u&&u.length>1){let h=u[1],d=i[h];d||(i[h]=d=[]),d.push(l)}}let a=[];for(let o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function Wg(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return pi;case"vector":case"vector2":case"vector3":case"vector4":return Ni;case"color":return ca;case"quaternion":return mi;case"bool":case"boolean":return fi;case"string":return gi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function qg(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=Wg(s.type);if(s.times===void 0){let n=[],i=[];Gg(s.keys,n,i,"value"),s.times=n,s.values=i}let t;return e.parse!==void 0?t=e.parse(s):t=new e(s.name,s.times,s.values,s.interpolation),Er(s.settings)&&(t.settings={inTangents:Pi(s.settings.inTangents,Float32Array),outTangents:Pi(s.settings.outTangents,Float32Array)}),t}var Wn={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(Bd(s)||(this.files[s]=e))},get:function(s){if(this.enabled!==!1&&!Bd(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function Bd(s){try{let e=s.slice(s.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var Bo=class{constructor(e,t,n){let i=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,r===!1&&i.onStart!==void 0&&i.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,i.onProgress!==void 0&&i.onProgress(u,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){let h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=l.length;h<d;h+=2){let f=l[h],m=l[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Cc=new Bo,Jn=class{constructor(e){this.manager=e!==void 0?e:Cc,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};Jn.DEFAULT_MATERIAL_NAME="__DEFAULT";var ci={},Xl=class extends Error{constructor(e,t){super(e),this.response=t}},$s=class extends Jn{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Wn.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(ci[e]!==void 0){ci[e].push({onLoad:t,onProgress:n,onError:i});return}ci[e]=[],ci[e].push({onLoad:t,onProgress:n,onError:i});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&Ue("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let u=ci[e],h=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,m=f!==0,x=0,g=new ReadableStream({start(p){v();function v(){h.read().then(({done:y,value:_})=>{if(y)p.close();else{x+=_.byteLength;let w=new ProgressEvent("progress",{lengthComputable:m,loaded:x,total:f});for(let M=0,b=u.length;M<b;M++){let S=u[M];S.onProgress&&S.onProgress(w)}p.enqueue(_),v()}},y=>{p.error(y)})}}});return new Response(g)}else throw new Xl(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return l.json();default:if(o==="")return l.text();{let h=/charset="?([^;"\s]*)"?/i.exec(o),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(m=>f.decode(m))}}}).then(l=>{Wn.add(`file:${e}`,l);let u=ci[e];delete ci[e];for(let h=0,d=u.length;h<d;h++){let f=u[h];f.onLoad&&f.onLoad(l)}}).catch(l=>{let u=ci[e];if(u===void 0)throw this.manager.itemError(e),l;delete ci[e];for(let h=0,d=u.length;h<d;h++){let f=u[h];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Ds=new WeakMap,zo=class extends Jn{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Wn.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let h=Ds.get(a);h===void 0&&(h=[],Ds.set(a,h)),h.push({onLoad:t,onError:i})}return a}let o=Bs("img");function c(){u(),t&&t(this);let h=Ds.get(this)||[];for(let d=0;d<h.length;d++){let f=h[d];f.onLoad&&f.onLoad(this)}Ds.delete(this),r.manager.itemEnd(e)}function l(h){u(),i&&i(h),Wn.remove(`image:${e}`);let d=Ds.get(this)||[];for(let f=0;f<d.length;f++){let m=d[f];m.onError&&m.onError(h)}Ds.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Wn.add(`image:${e}`,o),r.manager.itemStart(e),o.fetchPriority=this.priority,o.src=e,o}};var Rt=class extends Jn{constructor(e){super(e)}load(e,t,n,i){let r=new Xt,a=new zo(this.manager);return a.setPriority(this.priority),a.setCache(this.cache),a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}},ns=class extends Et{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ne(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},ha=class extends ns{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Et.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ne(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Nl=new Xe,zd=new L,Gd=new L,Qs=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ae(512,512),this.mapType=_n,this.map=null,this.mapPass=null,this.matrix=new Xe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Di,this._frameExtents=new ae(1,1),this._viewportCount=1,this._viewports=[new yt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;zd.setFromMatrixPosition(e.matrixWorld),t.position.copy(zd),Gd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Gd),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,i){Nl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Nl,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=i?i.z/r.x:1,o=i?i.w/r.y:1,c=i?i.x/r.x:0,l=i?i.y/r.y:0;e.coordinateSystem===ks||e.reversedDepth?t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),t.multiply(Nl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},oo=new L,co=new Gt,Vn=new L,ua=class extends Et{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Xe,this.projectionMatrix=new Xe,this.projectionMatrixInverse=new Xe,this.coordinateSystem=Cn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(oo,co,Vn),Vn.x===1&&Vn.y===1&&Vn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(oo,co,Vn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(oo,co,Vn),Vn.x===1&&Vn.y===1&&Vn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(oo,co,Vn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ci=new L,Hd=new ae,Vd=new ae,Wt=class extends ua{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ji*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Rr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ji*2*Math.atan(Math.tan(Rr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ci.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ci.x,Ci.y).multiplyScalar(-e/Ci.z),Ci.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ci.x,Ci.y).multiplyScalar(-e/Ci.z)}getViewSize(e,t){return this.getViewBounds(e,Hd,Vd),t.subVectors(Vd,Hd)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Rr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*i/c,t-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},jl=class extends Qs{constructor(){super(new Wt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=Ji*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},is=class extends ns{constructor(e,t,n=0,i=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Et.DEFAULT_UP),this.updateMatrix(),this.target=new Et,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new jl}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},Kl=class extends Qs{constructor(){super(new Wt(90,1,.5,500)),this.isPointLightShadow=!0}},ss=class extends ns{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Kl}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},rs=class extends ua{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-e,a=n+e,o=i+t,c=i-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Jl=class extends Qs{constructor(){super(new rs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},as=class extends ns{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Et.DEFAULT_UP),this.updateMatrix(),this.target=new Et,this.shadow=new Jl}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var bi=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Fl=new WeakMap,da=class extends Jn{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Ue("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Ue("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Wn.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(l=>{Fl.has(a)===!0?(i&&i(Fl.get(a)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(l),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);return}let o={};o.credentials=this.withCredentials||this.crossOrigin!=="anonymous"?"include":"same-origin",o.headers=this.requestHeader,o.priority=this.priority,o.cache=this.cache,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(l){return Wn.add(`image-bitmap:${e}`,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){i&&i(l),Fl.set(c,l),Wn.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Wn.add(`image-bitmap:${e}`,c),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Ls=-90,Ns=1,er=class extends Et{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Wt(Ls,Ns,e,t);i.layers=this.layers,this.add(i);let r=new Wt(Ls,Ns,e,t);r.layers=this.layers,this.add(r);let a=new Wt(Ls,Ns,e,t);a.layers=this.layers,this.add(a);let o=new Wt(Ls,Ns,e,t);o.layers=this.layers,this.add(o);let c=new Wt(Ls,Ns,e,t);c.layers=this.layers,this.add(c);let l=new Wt(Ls,Ns,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,c]=t;for(let l of t)this.remove(l);if(e===Cn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===ks)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.mipmapsAutoUpdate=x,e.setRenderTarget(n,5,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},Go=class extends Wt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var Ch="\\[\\]\\.:\\/",Xg=new RegExp("["+Ch+"]","g"),Ph="[^"+Ch+"]",jg="[^"+Ch.replace("\\.","")+"]",Kg=/((?:WC+[\/:])*)/.source.replace("WC",Ph),Jg=/(WCOD+)?/.source.replace("WCOD",jg),Yg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ph),Zg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ph),$g=new RegExp("^"+Kg+Jg+Yg+Zg+"$"),Qg=["material","materials","bones","map"],Yl=class{constructor(e,t,n){let i=n||Tt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Tt=class s{constructor(e,t,n){this.path=t,this.parsedPath=n||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,n):new s(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Xg,"")}static parseTrackName(e){let t=$g.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);Qg.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ue("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){We("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){We("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){We("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){We("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){We("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){We("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){We("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[i];if(a===void 0){let l=t.nodeName;We("PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){We("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){We("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Tt.Composite=Yl;Tt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Tt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Tt.prototype.GetterByBindingType=[Tt.prototype._getValue_direct,Tt.prototype._getValue_array,Tt.prototype._getValue_arrayElement,Tt.prototype._getValue_toArray];Tt.prototype.SetterByBindingTypeAndVersioning=[[Tt.prototype._setValue_direct,Tt.prototype._setValue_direct_setNeedsUpdate,Tt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_array,Tt.prototype._setValue_array_setNeedsUpdate,Tt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_arrayElement,Tt.prototype._setValue_arrayElement_setNeedsUpdate,Tt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_fromArray,Tt.prototype._setValue_fromArray_setNeedsUpdate,Tt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var tM=new Float32Array(1);var Zl=class{static{this.prototype.isMatrix2=!0}constructor(e,t,n,i){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=i,this}};function Ih(s,e,t,n){let i=e0(n);switch(t){case mh:return s*e;case Ko:return s*e/i.components*i.byteLength;case Jo:return s*e/i.components*i.byteLength;case Fi:return s*e*2/i.components*i.byteLength;case Yo:return s*e*2/i.components*i.byteLength;case gh:return s*e*3/i.components*i.byteLength;case In:return s*e*4/i.components*i.byteLength;case Zo:return s*e*4/i.components*i.byteLength;case pa:case ma:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case ga:case ba:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Qo:case tc:return Math.max(s,16)*Math.max(e,8)/4;case $o:case ec:return Math.max(s,8)*Math.max(e,8)/2;case nc:case ic:case rc:case ac:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case sc:case xa:case oc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case cc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case lc:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case hc:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case uc:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case dc:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case fc:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case pc:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case mc:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case gc:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case bc:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case xc:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case _c:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case vc:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case yc:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Mc:case Sc:case wc:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Tc:case Ac:return Math.ceil(s/4)*Math.ceil(e/4)*8;case _a:case Ec:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function e0(s){switch(s){case _n:case uh:return{byteLength:1,components:1};case ar:case dh:case zn:return{byteLength:2,components:1};case Xo:case jo:return{byteLength:2,components:4};case Bn:case qo:case Tn:return{byteLength:4,components:1};case fh:case ph:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Ue("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function np(){let s=null,e=!1,t=null,n=null;function i(r,a){n=s.requestAnimationFrame(i),t(r,a)}return{start:function(){e!==!0&&t!==null&&s!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function n0(s){let e=new WeakMap;function t(o,c){let l=o.array,u=o.usage,h=l.byteLength,d=s.createBuffer();s.bindBuffer(c,d),s.bufferData(c,l,u),o.onUploadCallback();let f;if(l instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=s.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=s.SHORT;else if(l instanceof Uint32Array)f=s.UNSIGNED_INT;else if(l instanceof Int32Array)f=s.INT;else if(l instanceof Int8Array)f=s.BYTE;else if(l instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,c,l){let u=c.array,h=c.updateRanges;if(s.bindBuffer(l,o),h.length===0)s.bufferSubData(l,0,u);else{h.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<h.length;f++){let m=h[d],x=h[f];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++d,h[d]=x)}h.length=d+1;for(let f=0,m=h.length;f<m;f++){let x=h[f];s.bufferSubData(l,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(s.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:i,remove:r,update:a}}var i0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,s0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,r0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,a0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,o0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,c0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,l0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,h0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,u0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,d0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,f0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,p0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,m0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,g0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,b0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,x0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,_0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,v0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,y0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,M0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,S0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,w0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,T0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,A0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,E0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,R0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,C0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,P0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,I0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,D0="gl_FragColor = linearToOutputTexel( gl_FragColor );",L0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,N0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,F0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,U0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,O0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,k0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,B0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,z0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,G0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,H0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,V0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,W0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,q0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,X0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,j0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,K0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,J0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Y0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Z0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Q0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,eb=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,tb=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,nb=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ib=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,sb=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,rb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ab=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ob=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,lb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,hb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ub=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,db=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,pb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,mb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,gb=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,bb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xb=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,_b=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,yb=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Mb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Tb=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Ab=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Eb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Rb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Cb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Pb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ib=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Db=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Lb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Nb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Fb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ub=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ob=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,kb=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Bb=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,zb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Gb=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Hb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Vb=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Wb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,qb=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Xb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,jb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Kb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Jb=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Yb=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Zb=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,$b=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Qb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ex=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,tx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,nx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ix=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rx=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ax=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ox=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,lx=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,hx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,ux=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,dx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,fx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,px=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,mx=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,gx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,bx=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xx=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_x=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vx=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,yx=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mx=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Sx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,wx=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Tx=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ax=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Ex=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rx=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Cx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Px=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Ix=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Dx=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Lx=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Nx=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Fx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Qe={alphahash_fragment:i0,alphahash_pars_fragment:s0,alphamap_fragment:r0,alphamap_pars_fragment:a0,alphatest_fragment:o0,alphatest_pars_fragment:c0,aomap_fragment:l0,aomap_pars_fragment:h0,batching_pars_vertex:u0,batching_vertex:d0,begin_vertex:f0,beginnormal_vertex:p0,bsdfs:m0,iridescence_fragment:g0,bumpmap_pars_fragment:b0,clipping_planes_fragment:x0,clipping_planes_pars_fragment:_0,clipping_planes_pars_vertex:v0,clipping_planes_vertex:y0,color_fragment:M0,color_pars_fragment:S0,color_pars_vertex:w0,color_vertex:T0,common:A0,defaultnormal_vertex:E0,displacementmap_pars_vertex:R0,displacementmap_vertex:C0,emissivemap_fragment:P0,emissivemap_pars_fragment:I0,colorspace_fragment:D0,colorspace_pars_fragment:L0,envmap_fragment:N0,envmap_common_pars_fragment:F0,envmap_pars_fragment:U0,envmap_pars_vertex:O0,envmap_physical_pars_fragment:K0,envmap_vertex:k0,fog_vertex:B0,fog_pars_vertex:z0,fog_fragment:G0,fog_pars_fragment:H0,gradientmap_pars_fragment:V0,lightmap_pars_fragment:W0,lights_lambert_fragment:q0,lights_lambert_pars_fragment:X0,lights_pars_begin:j0,lights_toon_fragment:J0,lights_toon_pars_fragment:Y0,lights_phong_fragment:Z0,lights_phong_pars_fragment:$0,lights_physical_fragment:Q0,lights_physical_pars_fragment:eb,lights_fragment_begin:tb,lights_fragment_maps:nb,lights_fragment_end:ib,lightprobes_pars_fragment:sb,logdepthbuf_fragment:rb,logdepthbuf_pars_fragment:ab,logdepthbuf_pars_vertex:ob,logdepthbuf_vertex:cb,map_fragment:lb,map_pars_fragment:hb,map_particle_fragment:ub,map_particle_pars_fragment:db,metalnessmap_fragment:fb,metalnessmap_pars_fragment:pb,morphinstance_vertex:mb,morphcolor_vertex:gb,morphnormal_vertex:bb,morphtarget_pars_vertex:xb,morphtarget_vertex:_b,normal_fragment_begin:vb,normal_fragment_maps:yb,normal_pars_fragment:Mb,normal_pars_vertex:Sb,normal_vertex:wb,normalmap_pars_fragment:Tb,clearcoat_normal_fragment_begin:Ab,clearcoat_normal_fragment_maps:Eb,clearcoat_pars_fragment:Rb,iridescence_pars_fragment:Cb,opaque_fragment:Pb,packing:Ib,premultiplied_alpha_fragment:Db,project_vertex:Lb,dithering_fragment:Nb,dithering_pars_fragment:Fb,roughnessmap_fragment:Ub,roughnessmap_pars_fragment:Ob,shadowmap_pars_fragment:kb,shadowmap_pars_vertex:Bb,shadowmap_vertex:zb,shadowmask_pars_fragment:Gb,skinbase_vertex:Hb,skinning_pars_vertex:Vb,skinning_vertex:Wb,skinnormal_vertex:qb,specularmap_fragment:Xb,specularmap_pars_fragment:jb,tonemapping_fragment:Kb,tonemapping_pars_fragment:Jb,transmission_fragment:Yb,transmission_pars_fragment:Zb,uv_pars_fragment:$b,uv_pars_vertex:Qb,uv_vertex:ex,worldpos_vertex:tx,background_vert:nx,background_frag:ix,backgroundCube_vert:sx,backgroundCube_frag:rx,cube_vert:ax,cube_frag:ox,depth_vert:cx,depth_frag:lx,distance_vert:hx,distance_frag:ux,equirect_vert:dx,equirect_frag:fx,linedashed_vert:px,linedashed_frag:mx,meshbasic_vert:gx,meshbasic_frag:bx,meshlambert_vert:xx,meshlambert_frag:_x,meshmatcap_vert:vx,meshmatcap_frag:yx,meshnormal_vert:Mx,meshnormal_frag:Sx,meshphong_vert:wx,meshphong_frag:Tx,meshphysical_vert:Ax,meshphysical_frag:Ex,meshtoon_vert:Rx,meshtoon_frag:Cx,points_vert:Px,points_frag:Ix,shadow_vert:Dx,shadow_frag:Lx,sprite_vert:Nx,sprite_frag:Fx},Se={common:{diffuse:{value:new Ne(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new je}},envmap:{envMap:{value:null},envMapRotation:{value:new je},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new je},normalScale:{value:new ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Ne(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0},uvTransform:{value:new je}},sprite:{diffuse:{value:new Ne(16777215)},opacity:{value:1},center:{value:new ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}}},Qn={basic:{uniforms:an([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.fog]),vertexShader:Qe.meshbasic_vert,fragmentShader:Qe.meshbasic_frag},lambert:{uniforms:an([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new Ne(0)},envMapIntensity:{value:1}}]),vertexShader:Qe.meshlambert_vert,fragmentShader:Qe.meshlambert_frag},phong:{uniforms:an([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new Ne(0)},specular:{value:new Ne(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphong_vert,fragmentShader:Qe.meshphong_frag},standard:{uniforms:an([Se.common,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.roughnessmap,Se.metalnessmap,Se.fog,Se.lights,{emissive:{value:new Ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag},toon:{uniforms:an([Se.common,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.gradientmap,Se.fog,Se.lights,{emissive:{value:new Ne(0)}}]),vertexShader:Qe.meshtoon_vert,fragmentShader:Qe.meshtoon_frag},matcap:{uniforms:an([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,{matcap:{value:null}}]),vertexShader:Qe.meshmatcap_vert,fragmentShader:Qe.meshmatcap_frag},points:{uniforms:an([Se.points,Se.fog]),vertexShader:Qe.points_vert,fragmentShader:Qe.points_frag},dashed:{uniforms:an([Se.common,Se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qe.linedashed_vert,fragmentShader:Qe.linedashed_frag},depth:{uniforms:an([Se.common,Se.displacementmap]),vertexShader:Qe.depth_vert,fragmentShader:Qe.depth_frag},normal:{uniforms:an([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,{opacity:{value:1}}]),vertexShader:Qe.meshnormal_vert,fragmentShader:Qe.meshnormal_frag},sprite:{uniforms:an([Se.sprite,Se.fog]),vertexShader:Qe.sprite_vert,fragmentShader:Qe.sprite_frag},background:{uniforms:{uvTransform:{value:new je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qe.background_vert,fragmentShader:Qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new je}},vertexShader:Qe.backgroundCube_vert,fragmentShader:Qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qe.cube_vert,fragmentShader:Qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qe.equirect_vert,fragmentShader:Qe.equirect_frag},distance:{uniforms:an([Se.common,Se.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qe.distance_vert,fragmentShader:Qe.distance_frag},shadow:{uniforms:an([Se.lights,Se.fog,{color:{value:new Ne(0)},opacity:{value:1}}]),vertexShader:Qe.shadow_vert,fragmentShader:Qe.shadow_frag}};Qn.physical={uniforms:an([Qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new je},clearcoatNormalScale:{value:new ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new je},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new je},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new je},sheen:{value:0},sheenColor:{value:new Ne(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new je},transmissionSamplerSize:{value:new ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new je},attenuationDistance:{value:0},attenuationColor:{value:new Ne(0)},specularColor:{value:new Ne(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new je},anisotropyVector:{value:new ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new je}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag};var Pc={r:0,b:0,g:0},Ux=new Xe,ip=new je;ip.set(-1,0,0,0,1,0,0,0,1);function Ox(s,e,t,n,i,r){let a=new Ne(0),o=i===!0?0:1,c,l,u=null,h=0,d=null;function f(v){let y=v.isScene===!0?v.background:null;if(y&&y.isTexture){let _=v.backgroundBlurriness>0;y=e.get(y,_)}return y}function m(v){let y=!1,_=f(v);_===null?g(a,o):_&&_.isColor&&(g(_,1),y=!0);let w=s.xr.getEnvironmentBlendMode();w==="additive"?t.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(s.autoClear||y)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function x(v,y){let _=f(y);_&&_.isCubeTexture?(l===void 0&&(l=new Ee(new Ft(1,1,1),new jn({name:"BackgroundCubeMaterial",uniforms:fs(Qn.backgroundCube.uniforms),vertexShader:Qn.backgroundCube.vertexShader,fragmentShader:Qn.backgroundCube.fragmentShader,side:fn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(w,M,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=_,l.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Ux.makeRotationFromEuler(y.backgroundRotation)).transpose(),_.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(ip),l.material.toneMapped=it.getTransfer(_.colorSpace)!==_t,(u!==_||h!==_.version||d!==s.toneMapping)&&(l.material.needsUpdate=!0,u=_,h=_.version,d=s.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new Ee(new dn(2,2),new jn({name:"BackgroundMaterial",uniforms:fs(Qn.background.uniforms),vertexShader:Qn.background.vertexShader,fragmentShader:Qn.background.fragmentShader,side:Yn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=it.getTransfer(_.colorSpace)!==_t,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||h!==_.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,u=_,h=_.version,d=s.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function g(v,y){v.getRGB(Pc,Rh(s)),t.buffers.color.setClear(Pc.r,Pc.g,Pc.b,y,r)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,y=1){a.set(v),o=y,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,g(a,o)},render:m,addToRenderList:x,dispose:p}}function kx(s,e){let t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null),r=i,a=!1;function o(R,D,U,P,O){let H=!1,F=h(R,P,U,D);r!==F&&(r=F,l(r.object)),H=f(R,P,U,O),H&&m(R,P,U,O),O!==null&&e.update(O,s.ELEMENT_ARRAY_BUFFER),(H||a)&&(a=!1,_(R,D,U,P),O!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function c(){return s.createVertexArray()}function l(R){return s.bindVertexArray(R)}function u(R){return s.deleteVertexArray(R)}function h(R,D,U,P){let O=P.wireframe===!0,H=n[D.id];H===void 0&&(H={},n[D.id]=H);let F=R.isInstancedMesh===!0?R.id:0,J=H[F];J===void 0&&(J={},H[F]=J);let B=J[U.id];B===void 0&&(B={},J[U.id]=B);let z=B[O];return z===void 0&&(z=d(c()),B[O]=z),z}function d(R){let D=[],U=[],P=[];for(let O=0;O<t;O++)D[O]=0,U[O]=0,P[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:U,attributeDivisors:P,object:R,attributes:{},index:null}}function f(R,D,U,P){let O=r.attributes,H=D.attributes,F=0,J=U.getAttributes();for(let B in J)if(J[B].location>=0){let W=O[B],K=H[B];if(K===void 0&&(B==="instanceMatrix"&&R.instanceMatrix&&(K=R.instanceMatrix),B==="instanceColor"&&R.instanceColor&&(K=R.instanceColor)),W===void 0||W.attribute!==K||K&&W.data!==K.data)return!0;F++}return r.attributesNum!==F||r.index!==P}function m(R,D,U,P){let O={},H=D.attributes,F=0,J=U.getAttributes();for(let B in J)if(J[B].location>=0){let W=H[B];W===void 0&&(B==="instanceMatrix"&&R.instanceMatrix&&(W=R.instanceMatrix),B==="instanceColor"&&R.instanceColor&&(W=R.instanceColor));let K={};K.attribute=W,W&&W.data&&(K.data=W.data),O[B]=K,F++}r.attributes=O,r.attributesNum=F,r.index=P}function x(){let R=r.newAttributes;for(let D=0,U=R.length;D<U;D++)R[D]=0}function g(R){p(R,0)}function p(R,D){let U=r.newAttributes,P=r.enabledAttributes,O=r.attributeDivisors;U[R]=1,P[R]===0&&(s.enableVertexAttribArray(R),P[R]=1),O[R]!==D&&(s.vertexAttribDivisor(R,D),O[R]=D)}function v(){let R=r.newAttributes,D=r.enabledAttributes;for(let U=0,P=D.length;U<P;U++)D[U]!==R[U]&&(s.disableVertexAttribArray(U),D[U]=0)}function y(R,D,U,P,O,H,F){F===!0?s.vertexAttribIPointer(R,D,U,O,H):s.vertexAttribPointer(R,D,U,P,O,H)}function _(R,D,U,P){x();let O=P.attributes,H=U.getAttributes(),F=D.defaultAttributeValues;for(let J in H){let B=H[J];if(B.location>=0){let z=O[J];if(z===void 0&&(J==="instanceMatrix"&&R.instanceMatrix&&(z=R.instanceMatrix),J==="instanceColor"&&R.instanceColor&&(z=R.instanceColor)),z!==void 0){let W=z.normalized,K=z.itemSize,se=e.get(z);if(se===void 0)continue;let V=se.buffer,Q=se.type,re=se.bytesPerElement,Ce=Q===s.INT||Q===s.UNSIGNED_INT||z.gpuType===qo;if(z.isInterleavedBufferAttribute){let ue=z.data,De=ue.isInterleavedBuffer===!0?ue.stride:ue.itemSize,ft=z.offset;if(ue.isInstancedInterleavedBuffer||ue.isInstancedBufferAttribute){for(let ke=0;ke<B.locationSize;ke++)p(B.location+ke,ue.meshPerAttribute);R.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let ke=0;ke<B.locationSize;ke++)g(B.location+ke);s.bindBuffer(s.ARRAY_BUFFER,V);for(let ke=0;ke<B.locationSize;ke++)y(B.location+ke,K/B.locationSize,Q,W,De*re,(ft+K/B.locationSize*ke)*re,Ce)}else{if(z.isInstancedBufferAttribute){for(let ue=0;ue<B.locationSize;ue++)p(B.location+ue,z.meshPerAttribute);R.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=z.meshPerAttribute*z.count)}else for(let ue=0;ue<B.locationSize;ue++)g(B.location+ue);s.bindBuffer(s.ARRAY_BUFFER,V);for(let ue=0;ue<B.locationSize;ue++)y(B.location+ue,K/B.locationSize,Q,W,K*re,K/B.locationSize*ue*re,Ce)}}else if(F!==void 0){let W=F[J];if(W!==void 0)switch(W.length){case 2:s.vertexAttrib2fv(B.location,W);break;case 3:s.vertexAttrib3fv(B.location,W);break;case 4:s.vertexAttrib4fv(B.location,W);break;default:s.vertexAttrib1fv(B.location,W)}}}}v()}function w(){E();for(let R in n){let D=n[R];for(let U in D){let P=D[U];for(let O in P){let H=P[O];for(let F in H)u(H[F].object),delete H[F];delete P[O]}}delete n[R]}}function M(R){if(n[R.id]===void 0)return;let D=n[R.id];for(let U in D){let P=D[U];for(let O in P){let H=P[O];for(let F in H)u(H[F].object),delete H[F];delete P[O]}}delete n[R.id]}function b(R){for(let D in n){let U=n[D];for(let P in U){let O=U[P];if(O[R.id]===void 0)continue;let H=O[R.id];for(let F in H)u(H[F].object),delete H[F];delete O[R.id]}}}function S(R){for(let D in n){let U=n[D],P=R.isInstancedMesh===!0?R.id:0,O=U[P];if(O!==void 0){for(let H in O){let F=O[H];for(let J in F)u(F[J].object),delete F[J];delete O[H]}delete U[P],Object.keys(U).length===0&&delete n[D]}}}function E(){T(),a=!0,r!==i&&(r=i,l(r.object))}function T(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:E,resetDefaultState:T,dispose:w,releaseStatesOfGeometry:M,releaseStatesOfObject:S,releaseStatesOfProgram:b,initAttributes:x,enableAttribute:g,disableUnusedAttributes:v}}function Bx(s,e,t){let n;function i(c){n=c}function r(c,l){s.drawArrays(n,c,l),t.update(l,n,1)}function a(c,l,u){u!==0&&(s.drawArraysInstanced(n,c,l,u),t.update(l,n,u))}function o(c,l,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,u);let d=0;for(let f=0;f<u;f++)d+=l[f];t.update(d,n,1)}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function zx(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let b=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(b){return!(b!==In&&n.convert(b)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(b){let S=b===zn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(b!==_n&&b!==Tn&&!S&&n.convert(b)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function c(b){if(b==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",u=c(l);u!==l&&(Ue("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=t.logarithmicDepthBuffer===!0&&h===!1;t.reversedDepthBuffer===!0&&h===!1&&Ue("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&h===!0&&Ue("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),v=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),y=s.getParameter(s.MAX_VARYING_VECTORS),_=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),w=s.getParameter(s.MAX_SAMPLES),M=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:_,maxSamples:w,samples:M}}function Gx(s){let e=this,t=null,n=0,i=!1,r=!1,a=new kn,o=new je,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){let f=h.length!==0||d||n!==0||i;return i=d,n=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){let m=h.clippingPlanes,x=h.clipIntersection,g=h.clipShadows,p=s.get(h);if(!i||m===null||m.length===0||r&&!g)r?u(null):l();else{let v=r?0:n,y=v*4,_=p.clippingState||null;c.value=_,_=u(m,d,y,f);for(let w=0;w!==y;++w)_[w]=t[w];p.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,m){let x=h!==null?h.length:0,g=null;if(x!==0){if(g=c.value,m!==!0||g===null){let p=f+x*4,v=d.matrixWorldInverse;o.getNormalMatrix(v),(g===null||g.length<p)&&(g=new Float32Array(p));for(let y=0,_=f;y!==x;++y,_+=4)a.copy(h[y]).applyMatrix4(v,o),a.normal.toArray(g,_),g[_+3]=a.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,g}}var wa=class extends Sn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Xr(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Ft(5,5,5),r=new jn({name:"CubemapFromEquirect",uniforms:fs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:fn,blending:cs});r.uniforms.tEquirect.value=t;let a=new Ee(i,r),o=t.minFilter;return t.minFilter===Pn&&(t.minFilter=qt),new er(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}},Ff=256,Hx=3,Vx=20,sp=256,rp=16,Wx=3,qx=new L,Xx=new Ne,Dc=class s{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new er(1,10,null),this._boxMesh=new Ee(new Ft(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,i=100,r={}){let{size:a=256,position:o=qx}=r,c=this._renderer;this._setSize(a);let l=this._allocateTarget(),u=this._getSourceTarget(!0);t>0&&(u.texture.mipmapsAutoUpdate=!1);let h=c.autoClear,d=c.autoClearColor,f=c.autoClearDepth,m=c.autoClearStencil,x=e.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,x===null&&(e.background=c.getClearColor(Xx));let g=new er(n,i,u);return g.position.copy(o),g.update(c,e),c.autoClear=h,c.autoClearColor=d,c.autoClearDepth=f,c.autoClearStencil=m,e.background=x,t>0&&(u.texture.mipmapsAutoUpdate=!0,this._blur(l,t)),this._applyPMREM(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=kf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Of(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Ff,wh(e))}_fromTexture(e,t){e.mapping===hs||e.mapping===ir?this._setSize(e.image.length===0?Ff:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=Uf(e,!1,!1),n=Math.log2(e)-Hx;for(let i=0;i<=n;i++)t.texture.mipmaps.push({width:e>>i,height:e>>i});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Uf(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let i=this._boxMesh,r=this._cubeCamera;i.material=n,r.renderTarget=e,r.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),r.update(this._renderer,i),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===hs||e.mapping===ir?(this._cubemapMaterial===null&&(this._cubemapMaterial=kf()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Of()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=jx(),this._integrationMaterial=Kx());let t=this._cubeSize,n=e.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/rp);for(let a=0;a<=n;a++){let o=s.lodToRoughness(a,n);if(a>n-Wx)r.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{let c=o>0?Math.log2(t)+.5*Math.log2(6/(sp*Math.pow(o,4)))+.5:0;i.roughness.value=o,i.lodBias.value=c,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=Jx());let n=this._blurMaterial,i=n.uniforms,r=this._sourceTarget;i.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,i.envMap.value=r.texture,this._renderCube(e,0,n),i.envMap.value=e.texture,this._renderCube(r,0,n)}};function Uf(s,e,t){return new wa(s,{minFilter:Pn,generateMipmaps:e,type:zn,colorSpace:ln,depthBuffer:t})}function Ta(s,e,t){return new jn({name:s,uniforms:e,vertexShader:Qe.cube_vert,fragmentShader:t,side:fn,blending:cs,depthTest:!1,depthWrite:!1})}function jx(){return Ta("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${sp}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Kx(){return Ta("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:rp}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Jx(){return Ta("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Vx}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function Of(){return Ta("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function kf(){return Ta("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Yx(s){let e=new WeakMap,t=new WeakMap,n=null;function i(d,f=!1){return d==null?null:f?a(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===sr||f===Vo)if(e.has(d)){let m=e.get(d).texture;return o(m,d.mapping)}else{let m=d.image;if(m&&m.height>0){let x=new wa(m.height);return x.fromEquirectangularTexture(s,d),e.set(d,x),d.addEventListener("dispose",l),o(x.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){let f=d.mapping,m=f===sr||f===Vo,x=f===hs||f===ir;if(m||x){let g=t.get(d),p=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==p)return n===null&&(n=new Dc(s)),g=m?n.fromEquirectangular(d,g):n.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),g.texture;if(g!==void 0)return g.texture;{let v=d.image;return m&&v&&v.height>0||x&&v&&c(v)?(n===null&&(n=new Dc(s)),g=m?n.fromEquirectangular(d):n.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),d.addEventListener("dispose",u),g.texture):null}}}return d}function o(d,f){return f===sr?d.mapping=hs:f===Vo&&(d.mapping=ir),d}function c(d){let f=0,m=6;for(let x=0;x<m;x++)d[x]!==void 0&&f++;return f===m}function l(d){let f=d.target;f.removeEventListener("dispose",l);let m=e.get(f);m!==void 0&&(e.delete(f),m.dispose())}function u(d){let f=d.target;f.removeEventListener("dispose",u);let m=t.get(f);m!==void 0&&(t.delete(f),m.dispose())}function h(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:h}}function Zx(s){let e={};function t(n){if(e[n]!==void 0)return e[n];let i=s.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&Xi("WebGLRenderer: "+n+" extension not supported."),i}}}function $x(s,e,t,n){let i={},r=new WeakMap,a=new FinalizationRegistry(m=>delete i[m]);function o(m){c(m.target)}function c(m){m.index!==null&&e.remove(m.index);for(let g in m.attributes)e.remove(m.attributes[g]);m.removeEventListener("dispose",o),delete i[m.id],a.unregister(m);let x=r.get(m);x&&(e.remove(x),r.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function l(m,x){return i[x.id]!==void 0||(x.addEventListener("dispose",o),i[x.id]=new WeakRef(x),a.register(x,x.id,x),t.memory.geometries++),x}function u(m){let x=m.attributes;for(let g in x)e.update(x[g],s.ARRAY_BUFFER)}function h(m){let x=m.index,g=m.attributes.position,p=0;if(g===void 0)return;let v=x!==null?x.array.length:g.array.length/3-1,y=g.count>=65535?Br:kr,_=new y(Math.ceil(v/3)*6,1),w=_.array;if(x!==null){let b=x.array;p=x.version;for(let S=0,E=0;S<v;S+=3){let T=b[S+0],R=b[S+1],D=b[S+2];w[E++]=T,w[E++]=R,w[E++]=R,w[E++]=D,w[E++]=D,w[E++]=T}}else{p=g.version;for(let b=0,S=0;b<v;b+=3){let E=b+0,T=b+1,R=b+2;w[S++]=E,w[S++]=T,w[S++]=T,w[S++]=R,w[S++]=R,w[S++]=E}}_.version=p;let M=r.get(m);M&&e.remove(M),r.set(m,_)}function d(m){let x=r.get(m);if(x){let g=m.index;g!==null&&x.version<g.version&&h(m)}else h(m);return r.get(m)}function f(){for(let m in i){let x=i[m].deref();x!==void 0&&c(x)}}return{get:l,update:u,getWireframeAttribute:d,dispose:f}}function Qx(s,e,t){let n;function i(h){n=h}let r,a;function o(h){r=h.type,a=h.bytesPerElement}function c(h,d){s.drawElements(n,d,r,h*a),t.update(d,n,1)}function l(h,d,f){f!==0&&(s.drawElementsInstanced(n,d,r,h*a,f),t.update(d,n,f))}function u(h,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,h,0,f);let x=0;for(let g=0;g<f;g++)x+=d[g];t.update(x,n,1)}this.setMode=i,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function e_(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:We("WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function t_(s,e,t){let n=new WeakMap,i=new yt;function r(a,o,c){let l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0,d=n.get(o);if(d===void 0||d.count!==h){let E=function(){b.dispose(),n.delete(o),o.removeEventListener("dispose",E)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],v=o.morphAttributes.color||[],y=0;f===!0&&(y=1),m===!0&&(y=2),x===!0&&(y=3);let _=o.attributes.position.count*y,w=1;_>e.maxTextureSize&&(w=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);let M=new Float32Array(_*w*4*h),b=new Nr(M,_,w,h);b.type=Tn,b.needsUpdate=!0;let S=y*4;for(let T=0;T<h;T++){let R=g[T],D=p[T],U=v[T],P=_*w*4*T;for(let O=0;O<R.count;O++){let H=O*S;f===!0&&(i.fromBufferAttribute(R,O),M[P+H+0]=i.x,M[P+H+1]=i.y,M[P+H+2]=i.z,M[P+H+3]=0),m===!0&&(i.fromBufferAttribute(D,O),M[P+H+4]=i.x,M[P+H+5]=i.y,M[P+H+6]=i.z,M[P+H+7]=0),x===!0&&(i.fromBufferAttribute(U,O),M[P+H+8]=i.x,M[P+H+9]=i.y,M[P+H+10]=i.z,M[P+H+11]=U.itemSize===4?i.w:1)}}d={count:h,texture:b,size:new ae(_,w)},n.set(o,d),o.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",a.morphTexture,t);else{let f=0;for(let x=0;x<l.length;x++)f+=l[x];let m=o.morphTargetsRelative?1:1-f;c.getUniforms().setValue(s,"morphTargetBaseInfluence",m),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function n_(s,e,t,n,i){let r=new WeakMap;function a(l){let u=i.render.frame,h=l.geometry,d=e.get(l,h);if(r.get(d)!==u&&(e.update(d),r.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==u&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){let f=l.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return d}function o(){r=new WeakMap}function c(l){let u=l.target;u.removeEventListener("dispose",c),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}var i_={[sh]:"LINEAR_TONE_MAPPING",[rh]:"REINHARD_TONE_MAPPING",[ah]:"CINEON_TONE_MAPPING",[fa]:"ACES_FILMIC_TONE_MAPPING",[ch]:"AGX_TONE_MAPPING",[lh]:"NEUTRAL_TONE_MAPPING",[oh]:"CUSTOM_TONE_MAPPING"};function s_(s,e,t,n,i,r){let a=new Sn(e,t,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,l=null,u=new Ye;u.setAttribute("position",new Le([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new Le([0,2,0,0,2,0],2));let h=new Io({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new Ee(u,h),f=new rs(-1,1,1,-1,0,1),m=null,x=null,g=!1,p,v=null,y=[],_=!1;this.setSize=function(w,M){a.setSize(w,M),o!==null&&o.setSize(w,M),c!==null&&c.setSize(w,M);for(let b=0;b<y.length;b++){let S=y[b];S.setSize&&S.setSize(w,M)}},this.setEffects=function(w){y=w,_=y.length>0&&y[0].isRenderPass===!0;let M=a.width,b=a.height;y.length>0&&o===null&&(o=new Sn(M,b,{type:zn,depthBuffer:!1,stencilBuffer:!1}),c=new Sn(M,b,{type:zn,depthBuffer:!1,stencilBuffer:!1}));let S=i===!0&&y.some(E=>E.needsDepthTexture===!0);S!==(a.depthTexture!==null)&&(S===!0&&l===null&&(l=new di(M,b),r===!0&&(l.format=xi,l.type=ds)),a.dispose(),a.depthTexture=S?l:null,a.resolveDepthBuffer=S,a.storeMultisampledDepthBuffer=S);for(let E=0;E<y.length;E++){let T=y[E];T.setSize&&T.setSize(M,b),S&&T.needsDepthTexture===!0&&T.setDepthTexture&&T.setDepthTexture(l)}},this.begin=function(w,M){if(g||w.toneMapping===Zn&&y.length===0)return!1;if(v=M,M!==null){let b=M.width,S=M.height;(a.width!==b||a.height!==S)&&this.setSize(b,S)}return _===!1&&w.setRenderTarget(a),p=w.toneMapping,w.toneMapping=Zn,!0},this.hasRenderPass=function(){return _},this.end=function(w,M){w.toneMapping=p,g=!0;let b=a,S=o;for(let E=0;E<y.length;E++){let T=y[E];T.enabled!==!1&&(T.render(w,S,b,M),T.needsSwap!==!1&&(b=S,S=S===o?c:o))}if(m!==w.outputColorSpace||x!==w.toneMapping){m=w.outputColorSpace,x=w.toneMapping,h.defines={},it.getTransfer(m)===_t&&(h.defines.SRGB_TRANSFER="");let E=i_[x];E&&(h.defines[E]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=b.texture,w.setRenderTarget(v),w.render(d,f),v=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),u.dispose(),h.dispose()}}var ap=new Xt,op=new di(1,1),cp=new jr(1),lp=new Nr,hp=new yo,up=new Xr,Bf=[],zf=[],Gf=new Float32Array(16),Hf=new Float32Array(9),Vf=new Float32Array(4);function lr(s,e,t){let n=s[0];if(n<=0||n>0)return s;let i=e*t,r=Bf[i];if(r===void 0&&(r=new Float32Array(i),Bf[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function jt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Kt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Nc(s,e){let t=zf[e];t===void 0&&(t=new Int32Array(e),zf[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function r_(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function a_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;s.uniform2fv(this.addr,e),Kt(t,e)}}function o_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(jt(t,e))return;s.uniform3fv(this.addr,e),Kt(t,e)}}function c_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;s.uniform4fv(this.addr,e),Kt(t,e)}}function l_(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(jt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Kt(t,e)}else{if(jt(t,n))return;Vf.set(n),s.uniformMatrix2fv(this.addr,!1,Vf),Kt(t,n)}}function h_(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(jt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Kt(t,e)}else{if(jt(t,n))return;Hf.set(n),s.uniformMatrix3fv(this.addr,!1,Hf),Kt(t,n)}}function u_(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(jt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Kt(t,e)}else{if(jt(t,n))return;Gf.set(n),s.uniformMatrix4fv(this.addr,!1,Gf),Kt(t,n)}}function d_(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function f_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;s.uniform2iv(this.addr,e),Kt(t,e)}}function p_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(jt(t,e))return;s.uniform3iv(this.addr,e),Kt(t,e)}}function m_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;s.uniform4iv(this.addr,e),Kt(t,e)}}function g_(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function b_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;s.uniform2uiv(this.addr,e),Kt(t,e)}}function x_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(jt(t,e))return;s.uniform3uiv(this.addr,e),Kt(t,e)}}function __(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;s.uniform4uiv(this.addr,e),Kt(t,e)}}function Fc(s){return s.version===0&&(s.compareFunction=vh,s.needsUpdate=!0),s}function v_(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?r=Fc(op):r=ap,t.setTexture2D(e||r,i)}function y_(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||hp,i)}function M_(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_CUBE_SHADOW?r=Fc(cp):r=up,t.setTextureCube(e||r,i)}function S_(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||lp,i)}function w_(s){switch(s){case 5126:return r_;case 35664:return a_;case 35665:return o_;case 35666:return c_;case 35674:return l_;case 35675:return h_;case 35676:return u_;case 5124:case 35670:return d_;case 35667:case 35671:return f_;case 35668:case 35672:return p_;case 35669:case 35673:return m_;case 5125:return g_;case 36294:return b_;case 36295:return x_;case 36296:return __;case 35678:case 36198:case 36298:case 36306:case 35682:return v_;case 35679:case 36299:case 36307:return y_;case 35680:case 36300:case 36308:case 36293:return M_;case 36289:case 36303:case 36311:case 36292:return S_}}function T_(s,e){s.uniform1fv(this.addr,e)}function A_(s,e){let t=lr(e,this.size,2);s.uniform2fv(this.addr,t)}function E_(s,e){let t=lr(e,this.size,3);s.uniform3fv(this.addr,t)}function R_(s,e){let t=lr(e,this.size,4);s.uniform4fv(this.addr,t)}function C_(s,e){let t=lr(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function P_(s,e){let t=lr(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function I_(s,e){let t=lr(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function D_(s,e){s.uniform1iv(this.addr,e)}function L_(s,e){s.uniform2iv(this.addr,e)}function N_(s,e){s.uniform3iv(this.addr,e)}function F_(s,e){s.uniform4iv(this.addr,e)}function U_(s,e){s.uniform1uiv(this.addr,e)}function O_(s,e){s.uniform2uiv(this.addr,e)}function k_(s,e){s.uniform3uiv(this.addr,e)}function B_(s,e){s.uniform4uiv(this.addr,e)}function z_(s,e,t){let n=this.cache,i=e.length,r=Nc(t,i);jt(n,r)||(s.uniform1iv(this.addr,r),Kt(n,r));let a;this.type===s.SAMPLER_2D_SHADOW?a=Fc(op):a=ap;for(let o=0;o!==i;++o)t.setTexture2D(e[o]||a,r[o])}function G_(s,e,t){let n=this.cache,i=e.length,r=Nc(t,i);jt(n,r)||(s.uniform1iv(this.addr,r),Kt(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||hp,r[a])}function H_(s,e,t){let n=this.cache,i=e.length,r=Nc(t,i);jt(n,r)||(s.uniform1iv(this.addr,r),Kt(n,r));let a;this.type===s.SAMPLER_CUBE_SHADOW?a=Fc(cp):a=up;for(let o=0;o!==i;++o)t.setTextureCube(e[o]||a,r[o])}function V_(s,e,t){let n=this.cache,i=e.length,r=Nc(t,i);jt(n,r)||(s.uniform1iv(this.addr,r),Kt(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||lp,r[a])}function W_(s){switch(s){case 5126:return T_;case 35664:return A_;case 35665:return E_;case 35666:return R_;case 35674:return C_;case 35675:return P_;case 35676:return I_;case 5124:case 35670:return D_;case 35667:case 35671:return L_;case 35668:case 35672:return N_;case 35669:case 35673:return F_;case 5125:return U_;case 36294:return O_;case 36295:return k_;case 36296:return B_;case 35678:case 36198:case 36298:case 36306:case 35682:return z_;case 35679:case 36299:case 36307:return G_;case 35680:case 36300:case 36308:case 36293:return H_;case 36289:case 36303:case 36311:case 36292:return V_}}var Nh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=w_(t.type)}},Fh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=W_(t.type)}},Uh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let r=0,a=i.length;r!==a;++r){let o=i[r];o.setValue(e,t[o.id],n)}}},Dh=/(\w+)(\])?(\[|\.)?/g;function Wf(s,e){s.seq.push(e),s.map[e.id]=e}function q_(s,e,t){let n=s.name,i=n.length;for(Dh.lastIndex=0;;){let r=Dh.exec(n),a=Dh.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===i){Wf(t,l===void 0?new Nh(o,s,e):new Fh(o,s,e));break}else{let h=t.map[o];h===void 0&&(h=new Uh(o),Wf(t,h)),t=h}}}var cr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);q_(o,c,this)}let i=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(a):r.push(a);i.length>0&&(this.seq=i.concat(r))}setValue(e,t,n,i){let r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){let o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,r=e.length;i!==r;++i){let a=e[i];a.id in t&&n.push(a)}return n}};function qf(s,e,t){let n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}var X_=37297,j_=0;function K_(s,e){let t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var Xf=new je;function J_(s){it._getMatrix(Xf,it.workingColorSpace,s);let e=`mat3( ${Xf.elements.map(t=>t.toFixed(4))} )`;switch(it.getTransfer(s)){case Dr:return[e,"LinearTransferOETF"];case _t:return[e,"sRGBTransferOETF"];default:return Ue("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function jf(s,e,t){let n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+K_(s.getShaderSource(e),o)}else return r}function Y_(s,e){let t=J_(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var Z_={[sh]:"Linear",[rh]:"Reinhard",[ah]:"Cineon",[fa]:"ACESFilmic",[ch]:"AgX",[lh]:"Neutral",[oh]:"Custom"};function $_(s,e){let t=Z_[e];return t===void 0?(Ue("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Ic=new L;function Q_(){it.getLuminanceCoefficients(Ic);let s=Ic.x.toFixed(4),e=Ic.y.toFixed(4),t=Ic.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ev(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Sa).join(`
`)}function tv(s){let e=[];for(let t in s){let n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function nv(s,e){let t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(e,i),a=r.name,o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function Sa(s){return s!==""}function Kf(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Jf(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var iv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Oh(s){return s.replace(iv,sv)}function sv(s,e){let t=Qe[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Oh(t)}var rv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Yf(s){return s.replace(rv,av)}function av(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Zf(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var ov={[os]:"SHADOWMAP_TYPE_PCF",[tr]:"SHADOWMAP_TYPE_VSM"};function cv(s){return ov[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var lv={[ir]:"ENVMAP_MODE_REFRACTION"};function hv(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":lv[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}var uv={[Ho]:"ENVMAP_BLENDING_MULTIPLY",[df]:"ENVMAP_BLENDING_MIX",[ff]:"ENVMAP_BLENDING_ADD"};function dv(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":uv[s.combine]||"ENVMAP_BLENDING_NONE"}function fv(s,e,t,n){let i=s.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,c=cv(t),l=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=hv(t),h=dv(t),d=ev(t),f=tv(r),m=i.createProgram(),x,g,p=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(Sa).join(`
`),x.length>0&&(x+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(Sa).join(`
`),g.length>0&&(g+=`
`)):(x=[Zf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Sa).join(`
`),g=[Zf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Zn?"#define TONE_MAPPING":"",t.toneMapping!==Zn?Qe.tonemapping_pars_fragment:"",t.toneMapping!==Zn?$_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Qe.colorspace_pars_fragment,Y_("linearToOutputTexel",t.outputColorSpace),Q_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Sa).join(`
`)),a=Oh(a),a=Kf(a,t),a=Jf(a,t),o=Oh(o),o=Kf(o,t),o=Jf(o,t),a=Yf(a),o=Yf(o),t.isRawShaderMaterial!==!0&&(p=`#version 300 es
`,x=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,g=["#define varying in",t.glslVersion===Mh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Mh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let v=p+x+a,y=p+g+o,_=qf(i,i.VERTEX_SHADER,v),w=qf(i,i.FRAGMENT_SHADER,y);i.attachShader(m,_),i.attachShader(m,w),t.index0AttributeName!==void 0?i.bindAttribLocation(m,0,t.index0AttributeName):t.hasPositionAttribute===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m);function M(T){if(s.debug.checkShaderErrors){let R=i.getProgramInfoLog(m)||"",D=i.getShaderInfoLog(_)||"",U=i.getShaderInfoLog(w)||"",P=R.trim(),O=D.trim(),H=U.trim(),F=!0,J=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(F=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,m,_,w);else{let B=jf(i,_,"vertex"),z=jf(i,w,"fragment");We("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+P+`
`+B+`
`+z)}else P!==""?Ue("WebGLProgram: Program Info Log:",P):(O===""||H==="")&&(J=!1);J&&(T.diagnostics={runnable:F,programLog:P,vertexShader:{log:O,prefix:x},fragmentShader:{log:H,prefix:g}})}i.deleteShader(_),i.deleteShader(w),b=new cr(i,m),S=nv(i,m)}let b;this.getUniforms=function(){return b===void 0&&M(this),b};let S;this.getAttributes=function(){return S===void 0&&M(this),S};let E=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(m,X_)),E},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=j_++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=_,this.fragmentShader=w,this}var pv=0,kh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let i=this._getShaderCacheForMaterial(e);return i.has(t)===!1&&(i.add(t),t.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Bh(e),t.set(e,n)),n}},Bh=class{constructor(e){this.id=pv++,this.code=e,this.usedTimes=0}};function mv(s){return s===Fi||s===xa||s===_a}function gv(s,e,t,n,i,r){let a=new Fr,o=new kh,c=new Set,l=[],u=new Map,h=n.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(b){return c.add(b),b===0?"uv":`uv${b}`}function m(b,S,E,T,R,D){let U=T.fog,P=R.geometry,O=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?T.environment:null,H=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap,F=e.get(b.envMap||O,H),J=d[b.type],B=n.precision;b.precision!==null&&(B=n.getMaxPrecision(b.precision),B!==b.precision&&Ue("WebGLProgram.getParameters:",b.precision,"not supported, using",B,"instead."));let z=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,W=z!==void 0?z.length:0,K=0;P.morphAttributes.position!==void 0&&(K=1),P.morphAttributes.normal!==void 0&&(K=2),P.morphAttributes.color!==void 0&&(K=3);let se,V,Q,re;if(J){let Me=Qn[J];se=Me.vertexShader,V=Me.fragmentShader}else{se=b.vertexShader,V=b.fragmentShader;let Me=o.getVertexShaderStage(b),vt=o.getFragmentShaderStage(b);o.update(b,Me,vt),Q=Me.id,re=vt.id}let Ce=s.getRenderTarget(),ue=s.state.buffers.depth.getReversed(),De=R.isInstancedMesh===!0,ft=R.isBatchedMesh===!0,ke=!!b.map,$e=!!b.matcap,tt=!!F,ne=tt&&F.isPMREMTexture===!0,de=!!b.aoMap,he=!!b.lightMap,Ae=!!b.bumpMap&&b.wireframe===!1,ye=!!b.normalMap,Ze=!!b.displacementMap,Oe=!!b.emissiveMap,ct=!!b.metalnessMap,lt=!!b.roughnessMap,bt=b.anisotropy>0,G=b.clearcoat>0,kt=b.diffuseRoughness>0,ot=b.dispersion>0,St=b.retroreflectivity>0,xe=b.iridescence>0,Nt=b.sheen>0,Ge=b.transmission>0,qe=bt&&!!b.anisotropyMap,I=G&&!!b.clearcoatMap,A=G&&!!b.clearcoatNormalMap,X=G&&!!b.clearcoatRoughnessMap,oe=kt&&!!b.diffuseRoughnessMap,ie=xe&&!!b.iridescenceMap,fe=xe&&!!b.iridescenceThicknessMap,_e=Nt&&!!b.sheenColorMap,$=Nt&&!!b.sheenRoughnessMap,ee=!!b.specularMap,me=!!b.specularColorMap,N=!!b.specularIntensityMap,te=Ge&&!!b.transmissionMap,Z=Ge&&!!b.thicknessMap,ge=!!b.gradientMap,le=!!b.alphaMap,pe=b.alphaTest>0,Be=!!b.alphaHash,nt=!!b.extensions,ce=Zn;b.toneMapped&&(Ce===null||Ce.isXRRenderTarget===!0)&&(ce=s.toneMapping);let ze=ne?F.isCompressedCubeTexture?F.image[0].mipmaps:F.mipmaps:null,et={shaderID:J,shaderType:b.type,shaderName:b.name,vertexShader:se,fragmentShader:V,defines:b.defines,customVertexShaderID:Q,customFragmentShaderID:re,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:B,batching:ft,batchingColor:ft&&R._colorsTexture!==null,instancing:De,instancingColor:De&&R.instanceColor!==null,instancingMorph:De&&R.morphTexture!==null,outputColorSpace:Ce===null?s.outputColorSpace:Ce.isXRRenderTarget===!0?Ce.texture.colorSpace:it.workingColorSpace,alphaToCoverage:!!b.alphaToCoverage,map:ke,matcap:$e,envMap:tt,envMapMode:tt&&F.mapping,envMapPMREM:ne,envMapMaxLod:ne?ze.length-1:null,envMapSize:ne?ze[0].width:null,aoMap:de,lightMap:he,bumpMap:Ae,normalMap:ye,displacementMap:Ze,emissiveMap:Oe,normalMapObjectSpace:ye&&b.normalMapType===bf,normalMapTangentSpace:ye&&b.normalMapType===ya,packedNormalMap:ye&&b.normalMapType===ya&&mv(b.normalMap.format),metalnessMap:ct,roughnessMap:lt,anisotropy:bt,anisotropyMap:qe,clearcoat:G,clearcoatMap:I,clearcoatNormalMap:A,clearcoatRoughnessMap:X,diffuseRoughness:kt,diffuseRoughnessMap:oe,dispersion:ot,retroreflection:St,iridescence:xe,iridescenceMap:ie,iridescenceThicknessMap:fe,sheen:Nt,sheenColorMap:_e,sheenRoughnessMap:$,specularMap:ee,specularColorMap:me,specularIntensityMap:N,transmission:Ge,transmissionMap:te,thicknessMap:Z,gradientMap:ge,opaque:b.transparent===!1&&b.blending===nr&&b.alphaToCoverage===!1,alphaMap:le,alphaTest:pe,alphaHash:Be,combine:b.combine,mapUv:ke&&f(b.map.channel),aoMapUv:de&&f(b.aoMap.channel),lightMapUv:he&&f(b.lightMap.channel),bumpMapUv:Ae&&f(b.bumpMap.channel),normalMapUv:ye&&f(b.normalMap.channel),displacementMapUv:Ze&&f(b.displacementMap.channel),emissiveMapUv:Oe&&f(b.emissiveMap.channel),metalnessMapUv:ct&&f(b.metalnessMap.channel),roughnessMapUv:lt&&f(b.roughnessMap.channel),anisotropyMapUv:qe&&f(b.anisotropyMap.channel),clearcoatMapUv:I&&f(b.clearcoatMap.channel),clearcoatNormalMapUv:A&&f(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:X&&f(b.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:oe&&f(b.diffuseRoughnessMap.channel),iridescenceMapUv:ie&&f(b.iridescenceMap.channel),iridescenceThicknessMapUv:fe&&f(b.iridescenceThicknessMap.channel),sheenColorMapUv:_e&&f(b.sheenColorMap.channel),sheenRoughnessMapUv:$&&f(b.sheenRoughnessMap.channel),specularMapUv:ee&&f(b.specularMap.channel),specularColorMapUv:me&&f(b.specularColorMap.channel),specularIntensityMapUv:N&&f(b.specularIntensityMap.channel),transmissionMapUv:te&&f(b.transmissionMap.channel),thicknessMapUv:Z&&f(b.thicknessMap.channel),alphaMapUv:le&&f(b.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(ye||bt),vertexNormals:!!P.attributes.normal,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:R.isPoints===!0&&!!P.attributes.uv&&(ke||le),fog:!!U,useFog:b.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:b.wireframe===!1&&(b.flatShading===!0||P.attributes.normal===void 0&&ye===!1&&(b.isMeshLambertMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isMeshPhysicalMaterial)),sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:ue,skinning:R.isSkinnedMesh===!0,hasPositionAttribute:P.attributes.position!==void 0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:W,morphTextureStride:K,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:D.filter(Me=>Me.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:b.dithering,shadowMapEnabled:s.shadowMap.enabled&&E.length>0,shadowMapType:s.shadowMap.type,toneMapping:ce,decodeVideoTexture:ke&&b.map.isVideoTexture===!0&&it.getTransfer(b.map.colorSpace)===_t,decodeVideoTextureEmissive:Oe&&b.emissiveMap.isVideoTexture===!0&&it.getTransfer(b.emissiveMap.colorSpace)===_t,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Ve,flipSided:b.side===fn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:nt&&b.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(nt&&b.extensions.multiDraw===!0||ft)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return et.vertexUv1s=c.has(1),et.vertexUv2s=c.has(2),et.vertexUv3s=c.has(3),c.clear(),et}function x(b){let S=[];if(b.shaderID?S.push(b.shaderID):(S.push(b.customVertexShaderID),S.push(b.customFragmentShaderID)),b.defines!==void 0)for(let E in b.defines)S.push(E),S.push(b.defines[E]);return b.isRawShaderMaterial===!1&&(g(S,b),p(S,b),S.push(s.outputColorSpace)),S.push(b.customProgramCacheKey),S.join()}function g(b,S){b.push(S.precision),b.push(S.outputColorSpace),b.push(S.envMapMode),b.push(S.envMapPMREM),b.push(S.envMapMaxLod),b.push(S.envMapSize),b.push(S.mapUv),b.push(S.alphaMapUv),b.push(S.lightMapUv),b.push(S.aoMapUv),b.push(S.bumpMapUv),b.push(S.normalMapUv),b.push(S.displacementMapUv),b.push(S.emissiveMapUv),b.push(S.metalnessMapUv),b.push(S.roughnessMapUv),b.push(S.anisotropyMapUv),b.push(S.clearcoatMapUv),b.push(S.clearcoatNormalMapUv),b.push(S.clearcoatRoughnessMapUv),b.push(S.diffuseRoughnessMapUv),b.push(S.iridescenceMapUv),b.push(S.iridescenceThicknessMapUv),b.push(S.sheenColorMapUv),b.push(S.sheenRoughnessMapUv),b.push(S.specularMapUv),b.push(S.specularColorMapUv),b.push(S.specularIntensityMapUv),b.push(S.transmissionMapUv),b.push(S.thicknessMapUv),b.push(S.combine),b.push(S.fogExp2),b.push(S.sizeAttenuation),b.push(S.morphTargetsCount),b.push(S.numSunLights),b.push(S.numDirLights),b.push(S.numPointLights),b.push(S.numSpotLights),b.push(S.numSpotLightMaps),b.push(S.numHemiLights),b.push(S.numRectAreaLights),b.push(S.numSunLightShadows),b.push(S.numDirLightShadows),b.push(S.numPointLightShadows),b.push(S.numSpotLightShadows),b.push(S.numSpotLightShadowsWithMaps),b.push(S.numLightProbes),b.push(S.numLightProbeGrids),b.push(S.shadowMapType),b.push(S.toneMapping),b.push(S.numClippingPlanes),b.push(S.numClipIntersection),b.push(S.depthPacking)}function p(b,S){a.disableAll(),S.instancing&&a.enable(0),S.instancingColor&&a.enable(1),S.instancingMorph&&a.enable(2),S.matcap&&a.enable(3),S.envMap&&a.enable(4),S.normalMapObjectSpace&&a.enable(5),S.normalMapTangentSpace&&a.enable(6),S.clearcoat&&a.enable(7),S.iridescence&&a.enable(8),S.alphaTest&&a.enable(9),S.vertexColors&&a.enable(10),S.vertexAlphas&&a.enable(11),S.vertexUv1s&&a.enable(12),S.vertexUv2s&&a.enable(13),S.vertexUv3s&&a.enable(14),S.vertexTangents&&a.enable(15),S.anisotropy&&a.enable(16),S.alphaHash&&a.enable(17),S.batching&&a.enable(18),S.dispersion&&a.enable(19),S.retroreflection&&a.enable(24),S.diffuseRoughness&&a.enable(25),S.batchingColor&&a.enable(20),S.gradientMap&&a.enable(21),S.packedNormalMap&&a.enable(22),S.vertexNormals&&a.enable(23),b.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),S.numLightProbeGrids>0&&a.enable(22),S.hasPositionAttribute&&a.enable(23),b.push(a.mask)}function v(b){let S=d[b.type],E;if(S){let T=Qn[S];E=Lf.clone(T.uniforms)}else E=b.uniforms;return E}function y(b,S){let E=u.get(S);return E!==void 0?++E.usedTimes:(E=new fv(s,S,b,i),l.push(E),u.set(S,E)),E}function _(b){if(--b.usedTimes===0){let S=l.indexOf(b);l[S]=l[l.length-1],l.pop(),u.delete(b.cacheKey),b.destroy()}}function w(b){o.remove(b)}function M(){o.dispose()}return{getParameters:m,getProgramCacheKey:x,getUniforms:v,acquireProgram:y,releaseProgram:_,releaseShaderCache:w,programs:l,dispose:M}}function bv(){let s=new WeakMap;function e(a){return s.has(a)}function t(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,c){s.get(a)[o]=c}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function xv(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function $f(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Qf(){let s=[],e=0,t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function o(d,f,m,x,g,p){let v=s[e];return v===void 0?(v={id:d.id,object:d,geometry:f,material:m,materialVariant:a(d),groupOrder:x,renderOrder:d.renderOrder,z:g,group:p},s[e]=v):(v.id=d.id,v.object=d,v.geometry=f,v.material=m,v.materialVariant=a(d),v.groupOrder=x,v.renderOrder=d.renderOrder,v.z=g,v.group=p),e++,v}function c(d,f,m,x,g,p,v){v.reversedDepth===!0&&(g=-g);let y=o(d,f,m,x,g,p);m.transmission>0?n.push(y):m.transparent===!0?i.push(y):t.push(y)}function l(d,f,m,x,g,p){let v=o(d,f,m,x,g,p);m.transmission>0?n.unshift(v):m.transparent===!0?i.unshift(v):t.unshift(v)}function u(d,f){t.length>1&&t.sort(d||xv),n.length>1&&n.sort(f||$f),i.length>1&&i.sort(f||$f)}function h(){for(let d=e,f=s.length;d<f;d++){let m=s[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:c,unshift:l,finish:h,sort:u}}function _v(){let s=new WeakMap;function e(n,i){let r=s.get(n),a;return r===void 0?(a=new Qf,s.set(n,[a])):i>=r.length?(a=new Qf,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function vv(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new L,color:new Ne};break;case"SpotLight":t={position:new L,direction:new L,color:new Ne,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new Ne,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new Ne,groundColor:new Ne};break;case"RectAreaLight":t={color:new Ne,position:new L,halfWidth:new L,halfHeight:new L};break}return s[e.id]=t,t}}}function yv(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}var Mv=0;function Sv(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function wv(s){let e=new vv,t=yv(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new L);let i=new L,r=new Xe,a=new Xe;function o(l){let u=0,h=0,d=0;for(let D=0;D<9;D++)n.probe[D].set(0,0,0);let f=0,m=0,x=0,g=0,p=0,v=0,y=0,_=0,w=0,M=0,b=0,S=0,E=0,T=0;l.sort(Sv);for(let D=0,U=l.length;D<U;D++){let P=l[D],O=P.color,H=P.intensity,F=P.distance,J=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===Fi?J=P.shadow.map.texture:J=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)u+=O.r*H,h+=O.g*H,d+=O.b*H;else if(P.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(P.sh.coefficients[B],H);T++}else if(P.isSunLight){let B=e.get(P);if(B.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let z=P.shadow,W=t.get(P);W.shadowIntensity=z.intensity,W.shadowBias=z.bias,W.shadowNormalBias=z.normalBias,W.shadowRadius=z.radius,W.shadowMapSize.copy(z.mapSize).multiply(z.getFrameExtents()),n.sunShadow[m]=W,n.sunShadowMap[m]=J;let K=z.getViewportCount();for(let se=0;se<K;se++)n.sunShadowMatrix[x+se]=z.getMatrix(se),n.sunShadowCascade[x+se]=z._cascadeData[se];x+=K,m++}n.sun[f]=B,f++}else if(P.isDirectionalLight){let B=e.get(P);if(B.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let z=P.shadow,W=t.get(P);W.shadowIntensity=z.intensity,W.shadowBias=z.bias,W.shadowNormalBias=z.normalBias,W.shadowRadius=z.radius,W.shadowMapSize=z.mapSize,n.directionalShadow[g]=W,n.directionalShadowMap[g]=J,n.directionalShadowMatrix[g]=P.shadow.matrix,w++}n.directional[g]=B,g++}else if(P.isSpotLight){let B=e.get(P);B.position.setFromMatrixPosition(P.matrixWorld),B.color.copy(O).multiplyScalar(H),B.distance=F,B.coneCos=Math.cos(P.angle),B.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),B.decay=P.decay,n.spot[v]=B;let z=P.shadow;if(P.map&&(n.spotLightMap[S]=P.map,S++,z.updateMatrices(P),P.castShadow&&E++),n.spotLightMatrix[v]=z.matrix,P.castShadow){let W=t.get(P);W.shadowIntensity=z.intensity,W.shadowBias=z.bias,W.shadowNormalBias=z.normalBias,W.shadowRadius=z.radius,W.shadowMapSize=z.mapSize,n.spotShadow[v]=W,n.spotShadowMap[v]=J,b++}v++}else if(P.isRectAreaLight){let B=e.get(P);B.color.copy(O).multiplyScalar(H),B.halfWidth.set(P.width*.5,0,0),B.halfHeight.set(0,P.height*.5,0),n.rectArea[y]=B,y++}else if(P.isPointLight){let B=e.get(P);if(B.color.copy(P.color).multiplyScalar(P.intensity),B.distance=P.distance,B.decay=P.decay,P.castShadow){let z=P.shadow,W=t.get(P);W.shadowIntensity=z.intensity,W.shadowBias=z.bias,W.shadowNormalBias=z.normalBias,W.shadowRadius=z.radius,W.shadowMapSize=z.mapSize,W.shadowCameraNear=z.camera.near,W.shadowCameraFar=z.camera.far,n.pointShadow[p]=W,n.pointShadowMap[p]=J,n.pointShadowMatrix[p]=P.shadow.matrix,M++}n.point[p]=B,p++}else if(P.isHemisphereLight){let B=e.get(P);B.skyColor.copy(P.color).multiplyScalar(H),B.groundColor.copy(P.groundColor).multiplyScalar(H),n.hemi[_]=B,_++}}y>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Se.LTC_FLOAT_1,n.rectAreaLTC2=Se.LTC_FLOAT_2):(n.rectAreaLTC1=Se.LTC_HALF_1,n.rectAreaLTC2=Se.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;let R=n.hash;(R.sunLength!==f||R.directionalLength!==g||R.pointLength!==p||R.spotLength!==v||R.rectAreaLength!==y||R.hemiLength!==_||R.numSunShadows!==m||R.numDirectionalShadows!==w||R.numPointShadows!==M||R.numSpotShadows!==b||R.numSpotMaps!==S||R.numLightProbes!==T)&&(n.sun.length=f,n.directional.length=g,n.spot.length=v,n.rectArea.length=y,n.point.length=p,n.hemi.length=_,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.directionalShadowMatrix.length=w,n.pointShadow.length=M,n.pointShadowMap.length=M,n.pointShadowMatrix.length=M,n.spotShadow.length=b,n.spotShadowMap.length=b,n.spotLightMatrix.length=b+S-E,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=T,R.sunLength=f,R.directionalLength=g,R.pointLength=p,R.spotLength=v,R.rectAreaLength=y,R.hemiLength=_,R.numSunShadows=m,R.numDirectionalShadows=w,R.numPointShadows=M,R.numSpotShadows=b,R.numSpotMaps=S,R.numLightProbes=T,n.version=Mv++)}function c(l,u){let h=0,d=0,f=0,m=0,x=0,g=0,p=u.matrixWorldInverse;for(let v=0,y=l.length;v<y;v++){let _=l[v];if(_.isSunLight){let w=n.sun[h];w.direction.setFromMatrixPosition(_.matrixWorld),w.direction.transformDirection(p),h++}else if(_.isDirectionalLight){let w=n.directional[d];w.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),w.direction.sub(i),w.direction.transformDirection(p),d++}else if(_.isSpotLight){let w=n.spot[m];w.position.setFromMatrixPosition(_.matrixWorld),w.position.applyMatrix4(p),w.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),w.direction.sub(i),w.direction.transformDirection(p),m++}else if(_.isRectAreaLight){let w=n.rectArea[x];w.position.setFromMatrixPosition(_.matrixWorld),w.position.applyMatrix4(p),a.identity(),r.copy(_.matrixWorld),r.premultiply(p),a.extractRotation(r),w.halfWidth.set(_.width*.5,0,0),w.halfHeight.set(0,_.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),x++}else if(_.isPointLight){let w=n.point[f];w.position.setFromMatrixPosition(_.matrixWorld),w.position.applyMatrix4(p),f++}else if(_.isHemisphereLight){let w=n.hemi[g];w.direction.setFromMatrixPosition(_.matrixWorld),w.direction.transformDirection(p),g++}}}return{setup:o,setupView:c,state:n}}function ep(s){let e=new wv(s),t=[],n=[],i=[];function r(h){u.camera=h,t.length=0,n.length=0,i.length=0}function a(h){h.isLightProbeGrid?i.push(h):t.push(h)}function o(h){n.push(h)}function c(){e.setup(t),i.sort((h,d)=>h.priority-d.priority||h.id-d.id)}function l(h){e.setupView(t,h)}let u={lightsArray:t,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function Tv(s){let e=new WeakMap;function t(i,r=0){let a=e.get(i),o;return a===void 0?(o=new ep(s),e.set(i,[o])):r>=a.length?(o=new ep(s),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var Av=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ev=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Rv=[new L(1,0,0),new L(-1,0,0),new L(0,1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1)],Cv=[new L(0,-1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1),new L(0,-1,0),new L(0,-1,0)],tp=new Xe,Ma=new L,Lh=new L;function Pv(s,e,t){let n=new Di,i=new ae,r=new ae,a=new yt,o=new Do,c=new Lo,l={},u=t.maxTextureSize,h={[Yn]:fn,[fn]:Yn,[Ve]:Ve},d=new jn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ae},radius:{value:4}},vertexShader:Av,fragmentShader:Ev}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let m=new Ye;m.setAttribute("position",new Mt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Ee(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=os;let p=this.type;this.render=function(M,b,S){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||M.length===0)return;this.type===Xd&&(Ue("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=os);let E=s.getRenderTarget(),T=s.getActiveCubeFace(),R=s.getActiveMipmapLevel(),D=s.state;D.setBlending(cs),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let U=p!==this.type;U&&b.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(O=>O.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,O=M.length;P<O;P++){let H=M[P],F=H.shadow;if(F===void 0){Ue("WebGLShadowMap:",H,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;i.copy(F.mapSize);let J=F.getFrameExtents();i.multiply(J),r.copy(F.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/J.x),i.x=r.x*J.x,F.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/J.y),i.y=r.y*J.y,F.mapSize.y=r.y));let B=s.state.buffers.depth.getReversed();if(F.camera._reversedDepth=B,F.map===null||U===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===tr){if(H.isPointLight){Ue("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new Sn(i.x,i.y,{format:Fi,type:zn,minFilter:qt,magFilter:qt,generateMipmaps:!1}),F.map.texture.name=H.name+".shadowMap",F.map.depthTexture=new di(i.x,i.y,Tn),F.map.depthTexture.name=H.name+".shadowMapDepth",F.map.depthTexture.format=hi,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Ot,F.map.depthTexture.magFilter=Ot}else H.isPointLight?(F.map=new wa(i.x),F.map.depthTexture=new jr(i.x,Bn)):(F.map=new Sn(i.x,i.y),F.map.depthTexture=new di(i.x,i.y,Bn)),F.map.depthTexture.name=H.name+".shadowMap",F.map.depthTexture.format=hi,this.type===os?(F.map.depthTexture.compareFunction=B?_h:xh,F.map.depthTexture.minFilter=qt,F.map.depthTexture.magFilter=qt):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Ot,F.map.depthTexture.magFilter=Ot);F.camera.updateProjectionMatrix()}F.map.isWebGLCubeRenderTarget!==!0&&(F.map.width!==i.x||F.map.height!==i.y)&&F.map.setSize(i.x,i.y);let z=F.map.isWebGLCubeRenderTarget?6:F.getViewportCount();H.isPointLight!==!0&&F.updateMatrices(H,S);let W=(F.camera.layers.mask&4294967294)!==0?F.camera.layers:S.layers;for(let K=0;K<z;K++){let se=F.getCamera(K);if(H.isPointLight){let V=F.camera,Q=F.matrix,re=H.distance||V.far;re!==V.far&&(V.far=re,V.updateProjectionMatrix()),Ma.setFromMatrixPosition(H.matrixWorld),V.position.copy(Ma),Lh.copy(V.position),Lh.add(Rv[K]),V.up.copy(Cv[K]),V.lookAt(Lh),V.updateMatrixWorld(),Q.makeTranslation(-Ma.x,-Ma.y,-Ma.z),tp.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),F._frustum.setFromProjectionMatrix(tp,V.coordinateSystem,V.reversedDepth)}if(F.map.isWebGLCubeRenderTarget)s.setRenderTarget(F.map,K),s.clear();else{K===0&&(s.setRenderTarget(F.map),s.clear());let V=F.getViewport(K);a.set(r.x*V.x,r.y*V.y,r.x*V.z,r.y*V.w),D.viewport(a)}n=F.getFrustum(K),_(b,S,se,H,W,this.type)}F.isPointLightShadow!==!0&&this.type===tr&&v(F,S),F.needsUpdate=!1}p=this.type,g.needsUpdate=!1,s.setRenderTarget(E,T,R)};function v(M,b){let S=e.update(x);d.defines.VSM_SAMPLES!==M.blurSamples&&(d.defines.VSM_SAMPLES=M.blurSamples,f.defines.VSM_SAMPLES=M.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),M.mapPass===null?M.mapPass=new Sn(i.x,i.y,{format:Fi,type:zn}):(M.mapPass.width!==M.map.width||M.mapPass.height!==M.map.height)&&M.mapPass.setSize(M.map.width,M.map.height),d.uniforms.shadow_pass.value=M.map.depthTexture,d.uniforms.resolution.value.set(M.map.width,M.map.height),d.uniforms.radius.value=M.radius,s.setRenderTarget(M.mapPass),s.clear(),s.renderBufferDirect(b,null,S,d,x,null),f.uniforms.shadow_pass.value=M.mapPass.texture,f.uniforms.resolution.value.set(M.map.width,M.map.height),f.uniforms.radius.value=M.radius,s.setRenderTarget(M.map),s.clear(),s.renderBufferDirect(b,null,S,f,x,null)}function y(M,b,S,E){let T=null,R=S.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(R!==void 0)T=R;else if(T=S.isPointLight===!0?c:o,s.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0||b.alphaToCoverage===!0){let D=T.uuid,U=b.uuid,P=l[D];P===void 0&&(P={},l[D]=P);let O=P[U];O===void 0&&(O=T.clone(),P[U]=O,b.addEventListener("dispose",w)),T=O}if(T.visible=b.visible,T.wireframe=b.wireframe,E===tr?T.side=b.shadowSide!==null?b.shadowSide:b.side:T.side=b.shadowSide!==null?b.shadowSide:h[b.side],T.alphaMap=b.alphaMap,T.alphaTest=b.alphaToCoverage===!0?.5:b.alphaTest,T.map=b.map,T.clipShadows=b.clipShadows,T.clippingPlanes=b.clippingPlanes,T.clipIntersection=b.clipIntersection,T.displacementMap=b.displacementMap,T.displacementScale=b.displacementScale,T.displacementBias=b.displacementBias,T.wireframeLinewidth=b.wireframeLinewidth,T.linewidth=b.linewidth,S.isPointLight===!0&&T.isMeshDistanceMaterial===!0){let D=s.properties.get(T);D.light=S}return T}function _(M,b,S,E,T,R){if(M.visible===!1)return;if(M.layers.test(T)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&R===tr)&&(!M.frustumCulled||M.intersectsFrustum(n))){M.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,M.matrixWorld);let P=e.update(M),O=M.material;if(Array.isArray(O)){let H=P.groups;for(let F=0,J=H.length;F<J;F++){let B=H[F],z=O[B.materialIndex];if(z&&z.visible){let W=y(M,z,E,R);M.onBeforeShadow(s,M,b,S,P,W,B),s.renderBufferDirect(S,null,P,W,M,B),M.onAfterShadow(s,M,b,S,P,W,B)}}}else if(O.visible){let H=y(M,O,E,R);M.onBeforeShadow(s,M,b,S,P,H,null),s.renderBufferDirect(S,null,P,H,M,null),M.onAfterShadow(s,M,b,S,P,H,null)}}let U=M.children;for(let P=0,O=U.length;P<O;P++)_(U[P],b,S,E,T,R)}function w(M){M.target.removeEventListener("dispose",w);for(let S in l){let E=l[S],T=M.target.uuid;T in E&&(E[T].dispose(),delete E[T])}}}function Iv(s,e){function t(){let N=!1,te=new yt,Z=null,ge=new yt(0,0,0,0);return{setMask:function(le){Z!==le&&!N&&(s.colorMask(le,le,le,le),Z=le)},setLocked:function(le){N=le},setClear:function(le,pe,Be,nt,ce){ce===!0&&(le*=nt,pe*=nt,Be*=nt),te.set(le,pe,Be,nt),ge.equals(te)===!1&&(s.clearColor(le,pe,Be,nt),ge.copy(te))},reset:function(){N=!1,Z=null,ge.set(-1,0,0,0)}}}function n(){let N=!1,te=!1,Z=null,ge=null,le=null;return{setReversed:function(pe){if(te!==pe){let Be=e.get("EXT_clip_control");pe?Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.ZERO_TO_ONE_EXT):Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.NEGATIVE_ONE_TO_ONE_EXT),te=pe;let nt=le;le=null,this.setClear(nt)}},getReversed:function(){return te},setTest:function(pe){pe?ue(s.DEPTH_TEST):De(s.DEPTH_TEST)},setMask:function(pe){Z!==pe&&!N&&(s.depthMask(pe),Z=pe)},setFunc:function(pe){if(te&&(pe=Ef[pe]),ge!==pe){switch(pe){case uo:s.depthFunc(s.NEVER);break;case fo:s.depthFunc(s.ALWAYS);break;case po:s.depthFunc(s.LESS);break;case Us:s.depthFunc(s.LEQUAL);break;case mo:s.depthFunc(s.EQUAL);break;case go:s.depthFunc(s.GEQUAL);break;case bo:s.depthFunc(s.GREATER);break;case xo:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ge=pe}},setLocked:function(pe){N=pe},setClear:function(pe){le!==pe&&(le=pe,te&&(pe=1-pe),s.clearDepth(pe))},reset:function(){N=!1,Z=null,ge=null,le=null,te=!1}}}function i(){let N=!1,te=null,Z=null,ge=null,le=null,pe=null,Be=null,nt=null,ce=null;return{setTest:function(ze){N||(ze?ue(s.STENCIL_TEST):De(s.STENCIL_TEST))},setMask:function(ze){te!==ze&&!N&&(s.stencilMask(ze),te=ze)},setFunc:function(ze,et,Me){(Z!==ze||ge!==et||le!==Me)&&(s.stencilFunc(ze,et,Me),Z=ze,ge=et,le=Me)},setOp:function(ze,et,Me){(pe!==ze||Be!==et||nt!==Me)&&(s.stencilOp(ze,et,Me),pe=ze,Be=et,nt=Me)},setLocked:function(ze){N=ze},setClear:function(ze){ce!==ze&&(s.clearStencil(ze),ce=ze)},reset:function(){N=!1,te=null,Z=null,ge=null,le=null,pe=null,Be=null,nt=null,ce=null}}}let r=new t,a=new n,o=new i,c={},l=new WeakMap,u={},h={},d={},f=new WeakMap,m=[],x=null,g=!1,p=null,v=null,y=null,_=null,w=null,M=null,b=null,S=new Ne(0,0,0),E=0,T=!1,R=null,D=null,U=null,P=null,O=null,H=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),F=!1,J=0,B=s.getParameter(s.VERSION);B.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(B)[1]),F=J>=1):B.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),F=J>=2);let z=null,W={},K=s.getParameter(s.SCISSOR_BOX),se=s.getParameter(s.VIEWPORT),V=new yt().fromArray(K),Q=new yt().fromArray(se);function re(N,te,Z,ge){let le=new Uint8Array(4),pe=s.createTexture();s.bindTexture(N,pe),s.texParameteri(N,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(N,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Be=0;Be<Z;Be++)N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY?s.texImage3D(te,0,s.RGBA,1,1,ge,0,s.RGBA,s.UNSIGNED_BYTE,le):s.texImage2D(te+Be,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,le);return pe}let Ce={};Ce[s.TEXTURE_2D]=re(s.TEXTURE_2D,s.TEXTURE_2D,1),Ce[s.TEXTURE_CUBE_MAP]=re(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ce[s.TEXTURE_2D_ARRAY]=re(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Ce[s.TEXTURE_3D]=re(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ue(s.DEPTH_TEST),a.setFunc(Us),Ae(!1),ye($l),ue(s.CULL_FACE),de(cs);function ue(N){u[N]!==!0&&(s.enable(N),u[N]=!0)}function De(N){u[N]!==!1&&(s.disable(N),u[N]=!1)}function ft(N,te){return d[N]!==te?(s.bindFramebuffer(N,te),d[N]=te,N===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=te),N===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=te),!0):!1}function ke(N,te){let Z=m,ge=!1;if(N){Z=f.get(te),Z===void 0&&(Z=[],f.set(te,Z));let le=N.textures;if(Z.length!==le.length||Z[0]!==s.COLOR_ATTACHMENT0){for(let pe=0,Be=le.length;pe<Be;pe++)Z[pe]=s.COLOR_ATTACHMENT0+pe;Z.length=le.length,ge=!0}}else Z[0]!==s.BACK&&(Z[0]=s.BACK,ge=!0);ge&&s.drawBuffers(Z)}function $e(N){return x!==N?(s.useProgram(N),x=N,!0):!1}let tt={[ls]:s.FUNC_ADD,[Kd]:s.FUNC_SUBTRACT,[Jd]:s.FUNC_REVERSE_SUBTRACT};tt[Yd]=s.MIN,tt[Zd]=s.MAX;let ne={[$d]:s.ZERO,[Qd]:s.ONE,[ef]:s.SRC_COLOR,[nh]:s.SRC_ALPHA,[of]:s.SRC_ALPHA_SATURATE,[rf]:s.DST_COLOR,[nf]:s.DST_ALPHA,[tf]:s.ONE_MINUS_SRC_COLOR,[ih]:s.ONE_MINUS_SRC_ALPHA,[af]:s.ONE_MINUS_DST_COLOR,[sf]:s.ONE_MINUS_DST_ALPHA,[cf]:s.CONSTANT_COLOR,[lf]:s.ONE_MINUS_CONSTANT_COLOR,[hf]:s.CONSTANT_ALPHA,[uf]:s.ONE_MINUS_CONSTANT_ALPHA};function de(N,te,Z,ge,le,pe,Be,nt,ce,ze){if(N===cs){g===!0&&(De(s.BLEND),g=!1);return}if(g===!1&&(ue(s.BLEND),g=!0),N!==jd){if(N!==p||ze!==T){if((v!==ls||w!==ls)&&(s.blendEquation(s.FUNC_ADD),v=ls,w=ls),ze)switch(N){case nr:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ql:s.blendFunc(s.ONE,s.ONE);break;case eh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case th:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:We("WebGLState: Invalid blending: ",N);break}else switch(N){case nr:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ql:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case eh:We("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case th:We("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:We("WebGLState: Invalid blending: ",N);break}y=null,_=null,M=null,b=null,S.set(0,0,0),E=0,p=N,T=ze}return}le=le||te,pe=pe||Z,Be=Be||ge,(te!==v||le!==w)&&(s.blendEquationSeparate(tt[te],tt[le]),v=te,w=le),(Z!==y||ge!==_||pe!==M||Be!==b)&&(s.blendFuncSeparate(ne[Z],ne[ge],ne[pe],ne[Be]),y=Z,_=ge,M=pe,b=Be),(nt.equals(S)===!1||ce!==E)&&(s.blendColor(nt.r,nt.g,nt.b,ce),S.copy(nt),E=ce),p=N,T=!1}function he(N,te){N.side===Ve?De(s.CULL_FACE):ue(s.CULL_FACE);let Z=N.side===fn;te&&(Z=!Z),Ae(Z),N.blending===nr&&N.transparent===!1?de(cs):de(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),r.setMask(N.colorWrite);let ge=N.stencilWrite;o.setTest(ge),ge&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Oe(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?ue(s.SAMPLE_ALPHA_TO_COVERAGE):De(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ae(N){R!==N&&(N?s.frontFace(s.CW):s.frontFace(s.CCW),R=N)}function ye(N){N!==Wd?(ue(s.CULL_FACE),N!==D&&(N===$l?s.cullFace(s.BACK):N===qd?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):De(s.CULL_FACE),D=N}function Ze(N){N!==U&&(F&&s.lineWidth(N),U=N)}function Oe(N,te,Z){N?(ue(s.POLYGON_OFFSET_FILL),(P!==te||O!==Z)&&(P=te,O=Z,a.getReversed()&&(te=-te,Z=-Z),s.polygonOffset(te,Z))):De(s.POLYGON_OFFSET_FILL)}function ct(N){N?ue(s.SCISSOR_TEST):De(s.SCISSOR_TEST)}function lt(N){N===void 0&&(N=s.TEXTURE0+H-1),z!==N&&(s.activeTexture(N),z=N)}function bt(N,te,Z){Z===void 0&&(z===null?Z=s.TEXTURE0+H-1:Z=z);let ge=W[Z];ge===void 0&&(ge={type:void 0,texture:void 0},W[Z]=ge),(ge.type!==N||ge.texture!==te)&&(z!==Z&&(s.activeTexture(Z),z=Z),s.bindTexture(N,te||Ce[N]),ge.type=N,ge.texture=te)}function G(){let N=W[z];N!==void 0&&N.type!==void 0&&(s.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function kt(){try{s.compressedTexImage2D(...arguments)}catch(N){We("WebGLState:",N)}}function ot(){try{s.compressedTexImage3D(...arguments)}catch(N){We("WebGLState:",N)}}function St(){try{s.texSubImage2D(...arguments)}catch(N){We("WebGLState:",N)}}function xe(){try{s.texSubImage3D(...arguments)}catch(N){We("WebGLState:",N)}}function Nt(){try{s.compressedTexSubImage2D(...arguments)}catch(N){We("WebGLState:",N)}}function Ge(){try{s.compressedTexSubImage3D(...arguments)}catch(N){We("WebGLState:",N)}}function qe(){try{s.texStorage2D(...arguments)}catch(N){We("WebGLState:",N)}}function I(){try{s.texStorage3D(...arguments)}catch(N){We("WebGLState:",N)}}function A(){try{s.texImage2D(...arguments)}catch(N){We("WebGLState:",N)}}function X(){try{s.texImage3D(...arguments)}catch(N){We("WebGLState:",N)}}function oe(N){return h[N]!==void 0?h[N]:s.getParameter(N)}function ie(N,te){h[N]!==te&&(s.pixelStorei(N,te),h[N]=te)}function fe(N){V.equals(N)===!1&&(s.scissor(N.x,N.y,N.z,N.w),V.copy(N))}function _e(N){Q.equals(N)===!1&&(s.viewport(N.x,N.y,N.z,N.w),Q.copy(N))}function $(N,te){let Z=l.get(te);Z===void 0&&(Z=new WeakMap,l.set(te,Z));let ge=Z.get(N);ge===void 0&&(ge=s.getUniformBlockIndex(te,N.name),s.uniformBlockBinding(te,ge,ge),Z.set(N,ge))}function ee(N,te,Z){let le=l.get(te).get(N);c[le]!==Z&&(s.bindBufferBase(s.UNIFORM_BUFFER,le,Z),c[le]=Z)}function me(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),u={},h={},z=null,W={},d={},c={},f=new WeakMap,m=[],x=null,g=!1,p=null,v=null,y=null,_=null,w=null,M=null,b=null,S=new Ne(0,0,0),E=0,T=!1,R=null,D=null,U=null,P=null,O=null,V.set(0,0,s.canvas.width,s.canvas.height),Q.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ue,disable:De,bindFramebuffer:ft,drawBuffers:ke,useProgram:$e,setBlending:de,setMaterial:he,setFlipSided:Ae,setCullFace:ye,setLineWidth:Ze,setPolygonOffset:Oe,setScissorTest:ct,activeTexture:lt,bindTexture:bt,unbindTexture:G,compressedTexImage2D:kt,compressedTexImage3D:ot,texImage2D:A,texImage3D:X,pixelStorei:ie,getParameter:oe,updateUBOMapping:$,uniformBlockBinding:ee,texStorage2D:qe,texStorage3D:I,texSubImage2D:St,texSubImage3D:xe,compressedTexSubImage2D:Nt,compressedTexSubImage3D:Ge,scissor:fe,viewport:_e,reset:me}}function Dv(s,e,t,n,i,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ae,u=new WeakMap,h=new Set,d,f=new WeakMap,m=new Set,x=new FinalizationRegistry(I=>m.delete(I)),g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(I,A){return g?new OffscreenCanvas(I,A):Bs("canvas")}function v(I,A,X){let oe=1,ie=qe(I);if((ie.width>X||ie.height>X)&&(oe=X/Math.max(ie.width,ie.height)),oe<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){let fe=Math.floor(oe*ie.width),_e=Math.floor(oe*ie.height);d===void 0&&(d=p(fe,_e));let $=A?p(fe,_e):d;return $.width=fe,$.height=_e,$.getContext("2d").drawImage(I,0,0,fe,_e),Ue("WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+fe+"x"+_e+")."),$}else return"data"in I&&Ue("WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),I;return I}function y(I){return I.generateMipmaps}function _(I){s.generateMipmap(I)}function w(I){return I.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?s.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function M(I,A,X,oe,ie,fe=!1){if(I!==null){if(s[I]!==void 0)return s[I];Ue("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let _e;oe&&(_e=e.get("EXT_texture_norm16"),_e||Ue("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let $=A;if(A===s.RED&&(X===s.FLOAT&&($=s.R32F),X===s.HALF_FLOAT&&($=s.R16F),X===s.UNSIGNED_BYTE&&($=s.R8),X===s.UNSIGNED_SHORT&&_e&&($=_e.R16_EXT),X===s.SHORT&&_e&&($=_e.R16_SNORM_EXT)),A===s.RED_INTEGER&&(X===s.UNSIGNED_BYTE&&($=s.R8UI),X===s.UNSIGNED_SHORT&&($=s.R16UI),X===s.UNSIGNED_INT&&($=s.R32UI),X===s.BYTE&&($=s.R8I),X===s.SHORT&&($=s.R16I),X===s.INT&&($=s.R32I)),A===s.RG&&(X===s.FLOAT&&($=s.RG32F),X===s.HALF_FLOAT&&($=s.RG16F),X===s.UNSIGNED_BYTE&&($=s.RG8),X===s.UNSIGNED_SHORT&&_e&&($=_e.RG16_EXT),X===s.SHORT&&_e&&($=_e.RG16_SNORM_EXT)),A===s.RG_INTEGER&&(X===s.UNSIGNED_BYTE&&($=s.RG8UI),X===s.UNSIGNED_SHORT&&($=s.RG16UI),X===s.UNSIGNED_INT&&($=s.RG32UI),X===s.BYTE&&($=s.RG8I),X===s.SHORT&&($=s.RG16I),X===s.INT&&($=s.RG32I)),A===s.RGB_INTEGER&&(X===s.UNSIGNED_BYTE&&($=s.RGB8UI),X===s.UNSIGNED_SHORT&&($=s.RGB16UI),X===s.UNSIGNED_INT&&($=s.RGB32UI),X===s.BYTE&&($=s.RGB8I),X===s.SHORT&&($=s.RGB16I),X===s.INT&&($=s.RGB32I)),A===s.RGBA_INTEGER&&(X===s.UNSIGNED_BYTE&&($=s.RGBA8UI),X===s.UNSIGNED_SHORT&&($=s.RGBA16UI),X===s.UNSIGNED_INT&&($=s.RGBA32UI),X===s.BYTE&&($=s.RGBA8I),X===s.SHORT&&($=s.RGBA16I),X===s.INT&&($=s.RGBA32I)),A===s.RGB&&(X===s.UNSIGNED_SHORT&&_e&&($=_e.RGB16_EXT),X===s.SHORT&&_e&&($=_e.RGB16_SNORM_EXT),X===s.UNSIGNED_INT_5_9_9_9_REV&&($=s.RGB9_E5),X===s.UNSIGNED_INT_10F_11F_11F_REV&&($=s.R11F_G11F_B10F)),A===s.RGBA){let ee=fe?Dr:it.getTransfer(ie);X===s.FLOAT&&($=s.RGBA32F),X===s.HALF_FLOAT&&($=s.RGBA16F),X===s.UNSIGNED_BYTE&&($=ee===_t?s.SRGB8_ALPHA8:s.RGBA8),X===s.UNSIGNED_SHORT&&_e&&($=_e.RGBA16_EXT),X===s.SHORT&&_e&&($=_e.RGBA16_SNORM_EXT),X===s.UNSIGNED_SHORT_4_4_4_4&&($=s.RGBA4),X===s.UNSIGNED_SHORT_5_5_5_1&&($=s.RGB5_A1)}return($===s.R16F||$===s.R32F||$===s.RG16F||$===s.RG32F||$===s.RGBA16F||$===s.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function b(I,A){let X;return I?A===null||A===Bn||A===ds?X=s.DEPTH24_STENCIL8:A===Tn?X=s.DEPTH32F_STENCIL8:A===ar&&(X=s.DEPTH24_STENCIL8,Ue("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===Bn||A===ds?X=s.DEPTH_COMPONENT24:A===Tn?X=s.DEPTH_COMPONENT32F:A===ar&&(X=s.DEPTH_COMPONENT16),X}function S(I,A){return y(I)===!0||I.isFramebufferTexture&&I.minFilter!==Ot&&I.minFilter!==qt?Math.log2(Math.max(A.width,A.height))+1:I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?A.mipmaps.length:1}function E(I){let A=new WeakRef(I);n.get(I).__ref=A,m.add(A),x.register(I,A,A)}function T(I){let A=n.get(I).__ref;A!==void 0&&(m.delete(A),x.unregister(A))}function R(I){U(I.target)}function D(I){P(I.target)}function U(I){I.removeEventListener("dispose",R),T(I),H(I),I.isVideoTexture&&u.delete(I),I.isHTMLTexture&&h.delete(I)}function P(I){I.removeEventListener("dispose",D),T(I),J(I)}function O(){for(let I of m){let A=I.deref();A!==void 0&&(A.isRenderTarget===!0?P(A):U(A))}m.clear(),h.clear()}function H(I){let A=n.get(I);if(A.__webglInit===void 0)return;let X=I.source,oe=f.get(X);if(oe){let ie=oe[A.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&F(I),Object.keys(oe).length===0&&f.delete(X)}n.remove(I)}function F(I){let A=n.get(I);s.deleteTexture(A.__webglTexture);let X=I.source,oe=f.get(X);delete oe[A.__cacheKey],a.memory.textures--}function J(I){let A=n.get(I);A.__depthDisposeCallback&&A.__depthDisposeCallback();let X=I.depthTexture;if(X&&X.renderTarget===I&&U(X),I.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++){if(Array.isArray(A.__webglFramebuffer[ie]))for(let fe=0;fe<A.__webglFramebuffer[ie].length;fe++)s.deleteFramebuffer(A.__webglFramebuffer[ie][fe]);else s.deleteFramebuffer(A.__webglFramebuffer[ie]);A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer[ie])}else{if(Array.isArray(A.__webglFramebuffer))for(let ie=0;ie<A.__webglFramebuffer.length;ie++)s.deleteFramebuffer(A.__webglFramebuffer[ie]);else s.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&s.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let ie=0;ie<A.__webglColorRenderbuffer.length;ie++)A.__webglColorRenderbuffer[ie]&&s.deleteRenderbuffer(A.__webglColorRenderbuffer[ie]);A.__webglDepthRenderbuffer&&s.deleteRenderbuffer(A.__webglDepthRenderbuffer)}let oe=I.textures;for(let ie=0,fe=oe.length;ie<fe;ie++){let _e=n.get(oe[ie]);_e.__webglTexture&&(s.deleteTexture(_e.__webglTexture),a.memory.textures--),n.remove(oe[ie])}n.remove(I)}let B=0;function z(){B=0}function W(){return B}function K(I){B=I}function se(){let I=B;return I>=i.maxTextures&&Ue("WebGLTextures: Trying to use "+(I+1)+" texture units while this GPU supports only "+i.maxTextures),B+=1,I}function V(I){let A=[];return A.push(I.wrapS),A.push(I.wrapT),A.push(I.wrapR||0),A.push(I.magFilter),A.push(I.minFilter),A.push(I.anisotropy),A.push(I.internalFormat),A.push(I.format),A.push(I.type),A.push(I.generateMipmaps),A.push(I.mipmapsAutoUpdate),A.push(I.premultiplyAlpha),A.push(I.flipY),A.push(I.unpackAlignment),A.push(I.colorSpace),A.join()}function Q(I,A){let X=n.get(I);if(I.isVideoTexture&&Nt(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&X.__version!==I.version){let oe=I.image;if(oe===null)Ue("WebGLRenderer: Texture marked for update but no image data found.");else if(oe.complete===!1)Ue("WebGLRenderer: Texture marked for update but image is incomplete");else{he(X,I,A);return}}else I.isExternalTexture&&(X.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,X.__webglTexture,s.TEXTURE0+A)}function re(I,A){let X=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&X.__version!==I.version){he(X,I,A);return}else I.isExternalTexture&&(X.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,X.__webglTexture,s.TEXTURE0+A)}function Ce(I,A){let X=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&X.__version!==I.version){he(X,I,A);return}t.bindTexture(s.TEXTURE_3D,X.__webglTexture,s.TEXTURE0+A)}function ue(I,A){let X=n.get(I);if(I.version>0&&X.__version!==I.version){Ae(X,I,A);return}t.bindTexture(s.TEXTURE_CUBE_MAP,X.__webglTexture,s.TEXTURE0+A)}let De={[Ut]:s.REPEAT,[Rn]:s.CLAMP_TO_EDGE,[Os]:s.MIRRORED_REPEAT},ft={[Ot]:s.NEAREST,[Wo]:s.NEAREST_MIPMAP_NEAREST,[us]:s.NEAREST_MIPMAP_LINEAR,[qt]:s.LINEAR,[rr]:s.LINEAR_MIPMAP_NEAREST,[Pn]:s.LINEAR_MIPMAP_LINEAR},ke={[_f]:s.NEVER,[vh]:s.ALWAYS,[vf]:s.LESS,[xh]:s.LEQUAL,[yf]:s.EQUAL,[_h]:s.GEQUAL,[Mf]:s.GREATER,[Sf]:s.NOTEQUAL};function $e(I,A){if(A.type===Tn&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===qt||A.magFilter===rr||A.magFilter===us||A.magFilter===Pn||A.minFilter===qt||A.minFilter===rr||A.minFilter===us||A.minFilter===Pn)&&Ue("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(I,s.TEXTURE_WRAP_S,De[A.wrapS]),s.texParameteri(I,s.TEXTURE_WRAP_T,De[A.wrapT]),(I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY)&&s.texParameteri(I,s.TEXTURE_WRAP_R,De[A.wrapR]),s.texParameteri(I,s.TEXTURE_MAG_FILTER,ft[A.magFilter]),s.texParameteri(I,s.TEXTURE_MIN_FILTER,ft[A.minFilter]),A.compareFunction&&(s.texParameteri(I,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(I,s.TEXTURE_COMPARE_FUNC,ke[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===Ot||A.minFilter!==us&&A.minFilter!==Pn||A.type===Tn&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||n.get(A).__currentAnisotropy){let X=e.get("EXT_texture_filter_anisotropic");s.texParameterf(I,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,i.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy}}}function tt(I,A){let X=!1;I.__webglInit===void 0&&(I.__webglInit=!0,A.addEventListener("dispose",R),E(A));let oe=A.source,ie=f.get(oe);ie===void 0&&(ie={},f.set(oe,ie));let fe=V(A);if(fe!==I.__cacheKey){ie[fe]===void 0&&(ie[fe]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,X=!0),ie[fe].usedTimes++;let _e=ie[I.__cacheKey];_e!==void 0&&(ie[I.__cacheKey].usedTimes--,_e.usedTimes===0&&F(A)),I.__cacheKey=fe,I.__webglTexture=ie[fe].texture}return X}function ne(I,A,X){return Math.floor(Math.floor(I/X)/A)}function de(I,A,X,oe){let fe=I.updateRanges;if(fe.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,A.width,A.height,X,oe,A.data);else{fe.sort((N,te)=>N.start-te.start);let _e=0;for(let N=1;N<fe.length;N++){let te=fe[_e],Z=fe[N],ge=te.start+te.count,le=ne(Z.start,A.width,4),pe=ne(te.start,A.width,4);Z.start<=ge+1&&le===pe&&ne(Z.start+Z.count-1,A.width,4)===le?te.count=Math.max(te.count,Z.start+Z.count-te.start):(++_e,fe[_e]=Z)}fe.length=_e+1;let $=t.getParameter(s.UNPACK_ROW_LENGTH),ee=t.getParameter(s.UNPACK_SKIP_PIXELS),me=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,A.width);for(let N=0,te=fe.length;N<te;N++){let Z=fe[N],ge=Math.floor(Z.start/4),le=Math.ceil(Z.count/4),pe=ge%A.width,Be=Math.floor(ge/A.width),nt=le,ce=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,pe),t.pixelStorei(s.UNPACK_SKIP_ROWS,Be),t.texSubImage2D(s.TEXTURE_2D,0,pe,Be,nt,ce,X,oe,A.data)}I.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,$),t.pixelStorei(s.UNPACK_SKIP_PIXELS,ee),t.pixelStorei(s.UNPACK_SKIP_ROWS,me)}}function he(I,A,X){let oe=s.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(oe=s.TEXTURE_2D_ARRAY),A.isData3DTexture&&(oe=s.TEXTURE_3D);let ie=tt(I,A),fe=A.source;t.bindTexture(oe,I.__webglTexture,s.TEXTURE0+X);let _e=n.get(fe);if(fe.version!==_e.__version||ie===!0){if(t.activeTexture(s.TEXTURE0+X),(typeof ImageBitmap<"u"&&A.image instanceof ImageBitmap)===!1){let ce=it.getPrimaries(it.workingColorSpace),ze=A.colorSpace===_i?null:it.getPrimaries(A.colorSpace),et=A.colorSpace===_i||ce===ze?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,et)}t.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment);let ee=v(A.image,!1,i.maxTextureSize);ee=Ge(A,ee);let me=r.convert(A.format,A.colorSpace),N=r.convert(A.type),te=M(A.internalFormat,me,N,A.normalized,A.colorSpace,A.isVideoTexture);$e(oe,A);let Z,ge=A.mipmaps,le=A.isVideoTexture!==!0,pe=_e.__version===void 0||ie===!0,Be=fe.dataReady,nt=S(A,ee);if(A.isDepthTexture)te=b(A.format===xi,A.type),pe&&(le?t.texStorage2D(s.TEXTURE_2D,1,te,ee.width,ee.height):t.texImage2D(s.TEXTURE_2D,0,te,ee.width,ee.height,0,me,N,null));else if(A.isDataTexture)if(ge.length>0){le&&pe&&t.texStorage2D(s.TEXTURE_2D,nt,te,ge[0].width,ge[0].height);for(let ce=0,ze=ge.length;ce<ze;ce++)Z=ge[ce],le?Be&&t.texSubImage2D(s.TEXTURE_2D,ce,0,0,Z.width,Z.height,me,N,Z.data):t.texImage2D(s.TEXTURE_2D,ce,te,Z.width,Z.height,0,me,N,Z.data);A.generateMipmaps=!1}else le?(pe&&t.texStorage2D(s.TEXTURE_2D,nt,te,ee.width,ee.height),Be&&de(A,ee,me,N)):t.texImage2D(s.TEXTURE_2D,0,te,ee.width,ee.height,0,me,N,ee.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){le&&pe&&t.texStorage3D(s.TEXTURE_2D_ARRAY,nt,te,ge[0].width,ge[0].height,ee.depth);for(let ce=0,ze=ge.length;ce<ze;ce++)if(Z=ge[ce],A.format!==In)if(me!==null)if(le){if(Be)if(A.layerUpdates.size>0){let et=Ih(Z.width,Z.height,A.format,A.type);for(let Me of A.layerUpdates){let vt=Z.data.subarray(Me*et/Z.data.BYTES_PER_ELEMENT,(Me+1)*et/Z.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ce,0,0,Me,Z.width,Z.height,1,me,vt)}}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ce,0,0,0,Z.width,Z.height,ee.depth,me,Z.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ce,te,Z.width,Z.height,ee.depth,0,Z.data,0,0);else Ue("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else le?Be&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,ce,0,0,0,Z.width,Z.height,ee.depth,me,N,Z.data):t.texImage3D(s.TEXTURE_2D_ARRAY,ce,te,Z.width,Z.height,ee.depth,0,me,N,Z.data);A.layerUpdates.size>0&&A.clearLayerUpdates()}else{le&&pe&&t.texStorage2D(s.TEXTURE_2D,nt,te,ge[0].width,ge[0].height);for(let ce=0,ze=ge.length;ce<ze;ce++)Z=ge[ce],A.format!==In?me!==null?le?Be&&t.compressedTexSubImage2D(s.TEXTURE_2D,ce,0,0,Z.width,Z.height,me,Z.data):t.compressedTexImage2D(s.TEXTURE_2D,ce,te,Z.width,Z.height,0,Z.data):Ue("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):le?Be&&t.texSubImage2D(s.TEXTURE_2D,ce,0,0,Z.width,Z.height,me,N,Z.data):t.texImage2D(s.TEXTURE_2D,ce,te,Z.width,Z.height,0,me,N,Z.data)}else if(A.isDataArrayTexture)if(le){if(pe&&t.texStorage3D(s.TEXTURE_2D_ARRAY,nt,te,ee.width,ee.height,ee.depth),Be)if(A.layerUpdates.size>0){let ce=Ih(ee.width,ee.height,A.format,A.type);for(let ze of A.layerUpdates){let et=ee.data.subarray(ze*ce/ee.data.BYTES_PER_ELEMENT,(ze+1)*ce/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,ze,ee.width,ee.height,1,me,N,et)}A.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,me,N,ee.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,te,ee.width,ee.height,ee.depth,0,me,N,ee.data);else if(A.isData3DTexture)le?(pe&&t.texStorage3D(s.TEXTURE_3D,nt,te,ee.width,ee.height,ee.depth),Be&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,me,N,ee.data)):t.texImage3D(s.TEXTURE_3D,0,te,ee.width,ee.height,ee.depth,0,me,N,ee.data);else if(A.isFramebufferTexture){if(pe)if(le)t.texStorage2D(s.TEXTURE_2D,nt,te,ee.width,ee.height);else{let ce=ee.width,ze=ee.height;for(let et=0;et<nt;et++)t.texImage2D(s.TEXTURE_2D,et,te,ce,ze,0,me,N,null),ce>>=1,ze>>=1}}else if(A.isHTMLTexture){if("texElementImage2D"in s){let ce=s.canvas;if(ce.hasAttribute("layoutsubtree")||ce.setAttribute("layoutsubtree","true"),ee.parentNode!==ce){ce.appendChild(ee),h.add(A),ce.onpaint=ze=>{let et=ze.changedElements;for(let Me of h)et.includes(Me.image)&&(Me.needsUpdate=!0)},ce.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,ee);else{let et=s.RGBA,Me=s.RGBA,vt=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,et,Me,vt,ee)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(ge.length>0){if(le&&pe){let ce=qe(ge[0]);t.texStorage2D(s.TEXTURE_2D,nt,te,ce.width,ce.height)}for(let ce=0,ze=ge.length;ce<ze;ce++)Z=ge[ce],le?Be&&t.texSubImage2D(s.TEXTURE_2D,ce,0,0,me,N,Z):t.texImage2D(s.TEXTURE_2D,ce,te,me,N,Z);A.generateMipmaps=!1}else if(le){if(pe){let ce=qe(ee);t.texStorage2D(s.TEXTURE_2D,nt,te,ce.width,ce.height)}Be&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,me,N,ee)}else t.texImage2D(s.TEXTURE_2D,0,te,me,N,ee);y(A)&&A.mipmapsAutoUpdate===!0&&_(oe),_e.__version=fe.version,A.onUpdate&&A.onUpdate(A)}I.__version=A.version}function Ae(I,A,X){if(A.image.length!==6)return;let oe=tt(I,A),ie=A.source;t.bindTexture(s.TEXTURE_CUBE_MAP,I.__webglTexture,s.TEXTURE0+X);let fe=n.get(ie);if(ie.version!==fe.__version||oe===!0){t.activeTexture(s.TEXTURE0+X);let _e=it.getPrimaries(it.workingColorSpace),$=A.colorSpace===_i?null:it.getPrimaries(A.colorSpace),ee=A.colorSpace===_i||_e===$?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);let me=A.isCompressedTexture||A.image[0].isCompressedTexture,N=A.image[0]&&A.image[0].isDataTexture,te=[];for(let Me=0;Me<6;Me++)!me&&!N?te[Me]=v(A.image[Me],!0,i.maxCubemapSize):te[Me]=N?A.image[Me].image:A.image[Me],te[Me]=Ge(A,te[Me]);let Z=te[0],ge=r.convert(A.format,A.colorSpace),le=r.convert(A.type),pe=M(A.internalFormat,ge,le,A.normalized,A.colorSpace),Be=A.isVideoTexture!==!0,nt=fe.__version===void 0||oe===!0,ce=ie.dataReady,ze=S(A,Z);$e(s.TEXTURE_CUBE_MAP,A);let et;if(A.isDepthTexture){if(pe=b(A.format===xi,A.type),nt)if(Be)t.texStorage2D(s.TEXTURE_CUBE_MAP,1,pe,Z.width,Z.height);else for(let Me=0;Me<6;Me++)t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,pe,Z.width,Z.height,0,ge,le,null)}else if(me){Be&&nt&&t.texStorage2D(s.TEXTURE_CUBE_MAP,ze,pe,Z.width,Z.height);for(let Me=0;Me<6;Me++){et=te[Me].mipmaps;for(let vt=0;vt<et.length;vt++){let Jt=et[vt];A.format!==In?ge!==null?Be?ce&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,vt,0,0,Jt.width,Jt.height,ge,Jt.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,vt,pe,Jt.width,Jt.height,0,Jt.data):Ue("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Be?ce&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,vt,0,0,Jt.width,Jt.height,ge,le,Jt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,vt,pe,Jt.width,Jt.height,0,ge,le,Jt.data)}}}else{if(et=A.mipmaps,Be&&nt){et.length>0&&ze++;let Me=qe(te[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,ze,pe,Me.width,Me.height)}for(let Me=0;Me<6;Me++)if(N){Be?ce&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,te[Me].width,te[Me].height,ge,le,te[Me].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,pe,te[Me].width,te[Me].height,0,ge,le,te[Me].data);for(let vt=0;vt<et.length;vt++){let Si=et[vt].image[Me].image;Be?ce&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,vt+1,0,0,Si.width,Si.height,ge,le,Si.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,vt+1,pe,Si.width,Si.height,0,ge,le,Si.data)}}else{Be?ce&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,ge,le,te[Me]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,pe,ge,le,te[Me]);for(let vt=0;vt<et.length;vt++){let Jt=et[vt];Be?ce&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,vt+1,0,0,ge,le,Jt.image[Me]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,vt+1,pe,ge,le,Jt.image[Me])}}}y(A)&&A.mipmapsAutoUpdate===!0&&_(s.TEXTURE_CUBE_MAP),fe.__version=ie.version,A.onUpdate&&A.onUpdate(A)}I.__version=A.version}function ye(I,A,X,oe,ie,fe){let _e=r.convert(X.format,X.colorSpace),$=r.convert(X.type),ee=M(X.internalFormat,_e,$,X.normalized,X.colorSpace),me=n.get(A),N=n.get(X);if(N.__renderTarget=A,!me.__hasExternalTextures){let te=Math.max(1,A.width>>fe),Z=Math.max(1,A.height>>fe);ie===s.TEXTURE_3D||ie===s.TEXTURE_2D_ARRAY?t.texImage3D(ie,fe,ee,te,Z,A.depth,0,_e,$,null):t.texImage2D(ie,fe,ee,te,Z,0,_e,$,null)}t.bindFramebuffer(s.FRAMEBUFFER,I),xe(A)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,oe,ie,N.__webglTexture,0,St(A)):(ie===s.TEXTURE_2D||ie>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,oe,ie,N.__webglTexture,fe),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ze(I,A,X){if(s.bindRenderbuffer(s.RENDERBUFFER,I),A.depthBuffer){let oe=A.depthTexture,ie=oe&&oe.isDepthTexture?oe.type:null,fe=b(A.stencilBuffer,ie),_e=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;xe(A)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,St(A),fe,A.width,A.height):X?s.renderbufferStorageMultisample(s.RENDERBUFFER,St(A),fe,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,fe,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,_e,s.RENDERBUFFER,I)}else{let oe=A.textures;for(let ie=0;ie<oe.length;ie++){let fe=oe[ie],_e=r.convert(fe.format,fe.colorSpace),$=r.convert(fe.type),ee=M(fe.internalFormat,_e,$,fe.normalized,fe.colorSpace);xe(A)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,St(A),ee,A.width,A.height):X?s.renderbufferStorageMultisample(s.RENDERBUFFER,St(A),ee,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,ee,A.width,A.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Oe(I,A,X){let oe=A.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,I),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ie=n.get(A.depthTexture);ie.__renderTarget=A;let fe=oe?A.depthTexture.image[0]:A.depthTexture.image;(!ie.__webglTexture||fe.width!==A.width||fe.height!==A.height)&&(fe.width=A.width,fe.height=A.height,A.depthTexture.needsUpdate=!0),oe?ue(A.depthTexture,0):Q(A.depthTexture,0);let _e=ie.__webglTexture,$=St(A),ee=oe?s.TEXTURE_CUBE_MAP_POSITIVE_X+X:s.TEXTURE_2D,me=A.depthTexture.format===xi?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(A.depthTexture.format===hi)xe(A)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,me,ee,_e,0,$):s.framebufferTexture2D(s.FRAMEBUFFER,me,ee,_e,0);else if(A.depthTexture.format===xi)xe(A)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,me,ee,_e,0,$):s.framebufferTexture2D(s.FRAMEBUFFER,me,ee,_e,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ct(I){let A=n.get(I),X=I.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==I.depthTexture){let oe=I.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),oe){let ie=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,oe.removeEventListener("dispose",ie)};oe.addEventListener("dispose",ie),A.__depthDisposeCallback=ie}A.__boundDepthTexture=oe}if(I.depthTexture&&!A.__autoAllocateDepthBuffer)if(X)for(let oe=0;oe<6;oe++)Oe(A.__webglFramebuffer[oe],I,oe);else I.texture.mipmaps.length>0?Oe(A.__webglFramebuffer[0],I,0):Oe(A.__webglFramebuffer,I,0);else if(X){A.__webglDepthbuffer=[];for(let oe=0;oe<6;oe++)if(t.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer[oe]),A.__webglDepthbuffer[oe]===void 0)A.__webglDepthbuffer[oe]=s.createRenderbuffer(),Ze(A.__webglDepthbuffer[oe],I,!1);else{let ie=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,fe=A.__webglDepthbuffer[oe];s.bindRenderbuffer(s.RENDERBUFFER,fe),s.framebufferRenderbuffer(s.FRAMEBUFFER,ie,s.RENDERBUFFER,fe)}}else if(I.texture.mipmaps.length>0?t.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=s.createRenderbuffer(),Ze(A.__webglDepthbuffer,I,!1);else{let ie=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,fe=A.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,fe),s.framebufferRenderbuffer(s.FRAMEBUFFER,ie,s.RENDERBUFFER,fe)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function lt(I,A,X){let oe=n.get(I);A!==void 0&&ye(oe.__webglFramebuffer,I,I.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),X!==void 0&&ct(I)}function bt(I){let A=I.texture,X=n.get(I),oe=n.get(A);I.addEventListener("dispose",D),E(I);let ie=I.textures,fe=I.isWebGLCubeRenderTarget===!0,_e=ie.length>1;if(_e||(oe.__webglTexture===void 0&&(oe.__webglTexture=s.createTexture()),oe.__version=A.version,a.memory.textures++),fe){X.__webglFramebuffer=[];for(let $=0;$<6;$++)if(A.mipmaps.length>0){X.__webglFramebuffer[$]=[];for(let ee=0;ee<A.mipmaps.length;ee++)X.__webglFramebuffer[$][ee]=s.createFramebuffer()}else X.__webglFramebuffer[$]=s.createFramebuffer()}else{if(A.mipmaps.length>0){X.__webglFramebuffer=[];for(let $=0;$<A.mipmaps.length;$++)X.__webglFramebuffer[$]=s.createFramebuffer()}else X.__webglFramebuffer=s.createFramebuffer();if(_e)for(let $=0,ee=ie.length;$<ee;$++){let me=n.get(ie[$]);me.__webglTexture===void 0&&(me.__webglTexture=s.createTexture(),a.memory.textures++)}if(I.samples>0&&xe(I)===!1){X.__webglMultisampledFramebuffer=s.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let $=0;$<ie.length;$++){let ee=ie[$];X.__webglColorRenderbuffer[$]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,X.__webglColorRenderbuffer[$]);let me=r.convert(ee.format,ee.colorSpace),N=r.convert(ee.type),te=M(ee.internalFormat,me,N,ee.normalized,ee.colorSpace,I.isXRRenderTarget===!0),Z=St(I);s.renderbufferStorageMultisample(s.RENDERBUFFER,Z,te,I.width,I.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+$,s.RENDERBUFFER,X.__webglColorRenderbuffer[$])}s.bindRenderbuffer(s.RENDERBUFFER,null),I.depthBuffer&&(X.__webglDepthRenderbuffer=s.createRenderbuffer(),Ze(X.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(fe){t.bindTexture(s.TEXTURE_CUBE_MAP,oe.__webglTexture),$e(s.TEXTURE_CUBE_MAP,A);for(let $=0;$<6;$++)if(A.mipmaps.length>0)for(let ee=0;ee<A.mipmaps.length;ee++)ye(X.__webglFramebuffer[$][ee],I,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ee);else ye(X.__webglFramebuffer[$],I,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0);y(A)?_(s.TEXTURE_CUBE_MAP):A.mipmaps.length>0&&s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_MAX_LEVEL,A.mipmaps.length-1),t.unbindTexture()}else if(_e){for(let $=0,ee=ie.length;$<ee;$++){let me=ie[$],N=n.get(me),te=s.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(te=I.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(te,N.__webglTexture),$e(te,me),ye(X.__webglFramebuffer,I,me,s.COLOR_ATTACHMENT0+$,te,0),y(me)&&_(te)}t.unbindTexture()}else{let $=s.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&($=I.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture($,oe.__webglTexture),$e($,A),A.mipmaps.length>0)for(let ee=0;ee<A.mipmaps.length;ee++)ye(X.__webglFramebuffer[ee],I,A,s.COLOR_ATTACHMENT0,$,ee);else ye(X.__webglFramebuffer,I,A,s.COLOR_ATTACHMENT0,$,0);y(A)?_($):A.mipmaps.length>0&&s.texParameteri($,s.TEXTURE_MAX_LEVEL,A.mipmaps.length-1),t.unbindTexture()}I.depthBuffer&&ct(I)}function G(I){let A=I.textures;for(let X=0,oe=A.length;X<oe;X++){let ie=A[X];if(y(ie)&&ie.mipmapsAutoUpdate===!0){let fe=w(I),_e=n.get(ie).__webglTexture;t.bindTexture(fe,_e),_(fe),t.unbindTexture()}}}let kt=[];function ot(I){if(I.samples>0){if(xe(I)===!1){let A=I.textures,X=I.width,oe=I.height,ie=s.COLOR_BUFFER_BIT,fe=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,_e=n.get(I),$=A.length>1;if($)for(let me=0;me<A.length;me++)t.bindFramebuffer(s.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+me,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,_e.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+me,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,_e.__webglMultisampledFramebuffer),I.texture.mipmaps.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,_e.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,_e.__webglFramebuffer);for(let me=0;me<A.length;me++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(ie|=s.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(ie|=s.STENCIL_BUFFER_BIT)),$){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,_e.__webglColorRenderbuffer[me]);let N=n.get(A[me]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,N,0)}s.blitFramebuffer(0,0,X,oe,0,0,X,oe,ie,s.NEAREST),c===!0&&(kt.length=0,kt.push(s.COLOR_ATTACHMENT0+me),I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&kt.push(fe),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,kt))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),$)for(let me=0;me<A.length;me++){t.bindFramebuffer(s.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+me,s.RENDERBUFFER,_e.__webglColorRenderbuffer[me]);let N=n.get(A[me]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,_e.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+me,s.TEXTURE_2D,N,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,_e.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&c){let A=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[A])}}}function St(I){return Math.min(i.maxSamples,I.samples)}function xe(I){let A=n.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Nt(I){let A=a.render.frame;u.get(I)!==A&&(u.set(I,A),I.update())}function Ge(I,A){let X=I.colorSpace,oe=I.format,ie=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||X!==ln&&X!==_i&&(it.getTransfer(X)===_t?(oe!==In||ie!==_n)&&Ue("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):We("WebGLTextures: Unsupported texture color space:",X)),A}function qe(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(l.width=I.naturalWidth||I.width,l.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(l.width=I.displayWidth,l.height=I.displayHeight):(l.width=I.width,l.height=I.height),l}this.allocateTextureUnit=se,this.resetTextureUnits=z,this.getTextureUnits=W,this.setTextureUnits=K,this.setTexture2D=Q,this.setTexture2DArray=re,this.setTexture3D=Ce,this.setTextureCube=ue,this.rebindTextures=lt,this.setupRenderTarget=bt,this.updateRenderTargetMipmap=G,this.updateMultisampleRenderTarget=ot,this.setupDepthRenderbuffer=ct,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=xe,this.dispose=O}function Lv(s,e){function t(n,i=_i){let r,a=it.getTransfer(i);if(n===_n)return s.UNSIGNED_BYTE;if(n===Xo)return s.UNSIGNED_SHORT_4_4_4_4;if(n===jo)return s.UNSIGNED_SHORT_5_5_5_1;if(n===fh)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===ph)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===uh)return s.BYTE;if(n===dh)return s.SHORT;if(n===ar)return s.UNSIGNED_SHORT;if(n===qo)return s.INT;if(n===Bn)return s.UNSIGNED_INT;if(n===Tn)return s.FLOAT;if(n===zn)return s.HALF_FLOAT;if(n===mh)return s.ALPHA;if(n===gh)return s.RGB;if(n===In)return s.RGBA;if(n===hi)return s.DEPTH_COMPONENT;if(n===xi)return s.DEPTH_STENCIL;if(n===Ko)return s.RED;if(n===Jo)return s.RED_INTEGER;if(n===Fi)return s.RG;if(n===Yo)return s.RG_INTEGER;if(n===Zo)return s.RGBA_INTEGER;if(n===pa||n===ma||n===ga||n===ba)if(a===_t)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===pa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ma)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ga)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ba)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===pa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ma)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ga)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ba)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===$o||n===Qo||n===ec||n===tc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===$o)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Qo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ec)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===tc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===nc||n===ic||n===sc||n===rc||n===ac||n===xa||n===oc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===nc||n===ic)return a===_t?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===sc)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===rc)return r.COMPRESSED_R11_EAC;if(n===ac)return r.COMPRESSED_SIGNED_R11_EAC;if(n===xa)return r.COMPRESSED_RG11_EAC;if(n===oc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===cc||n===lc||n===hc||n===uc||n===dc||n===fc||n===pc||n===mc||n===gc||n===bc||n===xc||n===_c||n===vc||n===yc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===cc)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===lc)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===hc)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===uc)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===dc)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===fc)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===pc)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===mc)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===gc)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===bc)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===xc)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===_c)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===vc)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===yc)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Mc||n===Sc||n===wc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Mc)return a===_t?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Sc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===wc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Tc||n===Ac||n===_a||n===Ec)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Tc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ac)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===_a)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ec)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ds?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}var Nv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Fv=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,zh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Kr(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new jn({vertexShader:Nv,fragmentShader:Fv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ee(new dn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Gh=class extends qn{constructor(e,t){super();let n=this,i=null,r=1,a=null,o="local-floor",c=1,l=null,u=null,h=null,d=null,f=null,m=null,x=typeof XRWebGLBinding<"u",g=new zh,p={},v=t.getContextAttributes(),y=null,_=null,w=[],M=[],b=new ae,S=null,E=null,T=new Wt;T.viewport=new yt;let R=new Wt;R.viewport=new yt;let D=[T,R],U=new Go,P=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let Q=w[V];return Q===void 0&&(Q=new Hs,w[V]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(V){let Q=w[V];return Q===void 0&&(Q=new Hs,w[V]=Q),Q.getGripSpace()},this.getHand=function(V){let Q=w[V];return Q===void 0&&(Q=new Hs,w[V]=Q),Q.getHandSpace()};function H(V){let Q=M.indexOf(V.inputSource);if(Q===-1)return;let re=w[Q];re!==void 0&&(re.update(V.inputSource,V.frame,l||a),re.dispatchEvent({type:V.type,data:V.inputSource}))}function F(){i.removeEventListener("select",H),i.removeEventListener("selectstart",H),i.removeEventListener("selectend",H),i.removeEventListener("squeeze",H),i.removeEventListener("squeezestart",H),i.removeEventListener("squeezeend",H),i.removeEventListener("end",F),i.removeEventListener("inputsourceschange",J);for(let V=0;V<w.length;V++){let Q=M[V];Q!==null&&(M[V]=null,w[V].disconnect(Q))}P=null,O=null,g.reset();for(let V in p)delete p[V];if(e.setRenderTarget(y),f=null,d=null,h=null,i=null,_=null,se.stop(),n.isPresenting=!1,e.setPixelRatio(S),e.setSize(b.width,b.height,!1),E!==null){let V=E.camera;V.fov=E.fov,V.zoom=E.zoom,V.updateProjectionMatrix(),E=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){r=V,n.isPresenting===!0&&Ue("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){o=V,n.isPresenting===!0&&Ue("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(V){l=V},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h===null&&x&&(h=new XRWebGLBinding(i,t)),h},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(V){if(i=V,i!==null){if(y=e.getRenderTarget(),i.addEventListener("select",H),i.addEventListener("selectstart",H),i.addEventListener("selectend",H),i.addEventListener("squeeze",H),i.addEventListener("squeezestart",H),i.addEventListener("squeezeend",H),i.addEventListener("end",F),i.addEventListener("inputsourceschange",J),v.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(b),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let re=null,Ce=null,ue=null;v.depth&&(ue=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,re=v.stencil?xi:hi,Ce=v.stencil?ds:Bn);let De={colorFormat:t.RGBA8,depthFormat:ue,scaleFactor:r};h=this.getBinding(),d=h.createProjectionLayer(De),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),_=new Sn(d.textureWidth,d.textureHeight,{format:In,type:_n,depthTexture:new di(d.textureWidth,d.textureHeight,Ce,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let re={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,re),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new Sn(f.framebufferWidth,f.framebufferHeight,{format:In,type:_n,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(o),se.setContext(i),se.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function J(V){for(let Q=0;Q<V.removed.length;Q++){let re=V.removed[Q],Ce=M.indexOf(re);Ce>=0&&(M[Ce]=null,w[Ce].disconnect(re))}for(let Q=0;Q<V.added.length;Q++){let re=V.added[Q],Ce=M.indexOf(re);if(Ce===-1){for(let De=0;De<w.length;De++)if(De>=M.length){M.push(re),Ce=De;break}else if(M[De]===null){M[De]=re,Ce=De;break}if(Ce===-1)break}let ue=w[Ce];ue&&ue.connect(re)}}function B(V,Q){Q===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(Q.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(i===null)return;let Q=V.near,re=V.far;g.texture!==null&&(g.depthNear>0&&(Q=g.depthNear),g.depthFar>0&&(re=g.depthFar)),U.near=R.near=T.near=Q,U.far=R.far=T.far=re,(P!==U.near||O!==U.far)&&(i.updateRenderState({depthNear:U.near,depthFar:U.far}),P=U.near,O=U.far),U.layers.mask=V.layers.mask|6,T.layers.mask=U.layers.mask&-5,R.layers.mask=U.layers.mask&-3;let Ce=V.parent,ue=U.cameras;B(U,Ce);for(let De=0;De<ue.length;De++)B(ue[De],Ce);U.projectionMatrix.copy(T.projectionMatrix),U.projectionMatrixInverse.copy(T.projectionMatrixInverse),E===null&&V.isPerspectiveCamera&&(E={camera:V,fov:V.fov,zoom:V.zoom}),z(V,U,Ce)};function z(V,Q,re){re===null?V.matrix.copy(Q.matrixWorld):(V.matrix.copy(re.matrixWorld),V.matrix.invert(),V.matrix.multiply(Q.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(Q.projectionMatrix),V.projectionMatrixInverse.copy(Q.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=Ji*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(V){c=V,d!==null&&(d.fixedFoveation=V),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=V)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(U)},this.getCameraTexture=function(V){return p[V]};let W=null;function K(V,Q){if(u=Q.getViewerPose(l||a),m=Q,u!==null){let re=u.views;f!==null&&(e.setRenderTargetFramebuffer(_,f.framebuffer),e.setRenderTarget(_));let Ce=!1;re.length!==U.cameras.length&&(U.cameras.length=0,Ce=!0);for(let ke=0;ke<re.length;ke++){let $e=re[ke],tt=null;if(f!==null)tt=f.getViewport($e);else{let de=h.getViewSubImage(d,$e);tt=de.viewport,ke===0&&(e.setRenderTargetTextures(_,de.colorTexture,de.depthStencilTexture),e.setRenderTarget(_))}let ne=D[ke];ne===void 0&&(ne=new Wt,ne.layers.enable(ke),ne.viewport=new yt,D[ke]=ne),ne.matrix.fromArray($e.transform.matrix),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.projectionMatrix.fromArray($e.projectionMatrix),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert(),ne.viewport.set(tt.x,tt.y,tt.width,tt.height),ke===0&&(U.matrix.copy(ne.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),Ce===!0&&U.cameras.push(ne)}let ue=i.enabledFeatures;if(ue&&ue.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&x){h=n.getBinding();let ke=h.getDepthInformation(re[0]);ke&&ke.isValid&&ke.texture&&g.init(ke,i.renderState)}if(ue&&ue.includes("camera-access")&&x){e.state.unbindTexture(),h=n.getBinding();for(let ke=0;ke<re.length;ke++){let $e=re[ke].camera;if($e){let tt=p[$e];tt||(tt=new Kr,p[$e]=tt);let ne=h.getCameraImage($e);tt.sourceTexture=ne}}}}for(let re=0;re<w.length;re++){let Ce=M[re],ue=w[re];Ce!==null&&ue!==void 0&&ue.update(Ce,Q,l||a)}W&&W(V,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),m=null}let se=new np;se.setAnimationLoop(K),this.setAnimationLoop=function(V){W=V},this.dispose=function(){}}},Uv=new Xe,dp=new je;dp.set(-1,0,0,0,1,0,0,0,1);function Ov(s,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,Rh(s)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function i(g,p,v,y,_){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(g,p):p.isMeshLambertMaterial?(r(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(g,p),h(g,p)):p.isMeshPhongMaterial?(r(g,p),u(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(g,p),d(g,p),p.isMeshPhysicalMaterial&&f(g,p,_)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),x(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?c(g,p,v,y):p.isSpriteMaterial?l(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===fn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===fn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let v=e.get(p),y=v.envMap,_=v.envMapRotation;y&&(g.envMap.value=y,g.envMapRotation.value.setFromMatrix4(Uv.makeRotationFromEuler(_)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(dp),g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,v,y){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*v,g.scale.value=y*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function h(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,v){g.ior.value=p.ior,p.diffuseRoughness>0&&(g.diffuseRoughness.value=p.diffuseRoughness,p.diffuseRoughnessMap&&(g.diffuseRoughnessMap.value=p.diffuseRoughnessMap,t(p.diffuseRoughnessMap,g.diffuseRoughnessMapTransform))),p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===fn&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.retroreflectivity>0&&(g.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessMinimum,g.iridescenceThicknessMaximum.value=p.iridescenceThicknessMaximum,p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function x(g,p){let v=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function kv(s,e,t,n){let i={},r={};function a(v,y){let _=y.program;n.uniformBlockBinding(v,_,i[v.id])}function o(v,y){let _=i[v.id];_===void 0&&(m(v),_=c(v),i[v.id]=_,v.addEventListener("dispose",g));let w=y.program;n.updateUBOMapping(v,w);let M=e.render.frame;r[v.id]!==M&&(l(v),r[v.id]=M)}function c(v){let y=s.createBuffer(),_=v.__size,w=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,y),s.bufferData(s.UNIFORM_BUFFER,_,w),s.bindBuffer(s.UNIFORM_BUFFER,null),y}function l(v){let y=i[v.id],_=v.uniforms,w=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,y);for(let M=0,b=_.length;M<b;M++){let S=_[M];if(Array.isArray(S))for(let E=0,T=S.length;E<T;E++)u(S[E],M,E,w);else u(S,M,0,w)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function u(v,y,_,w){if(d(v,y,_,w)===!0){let M=v.__offset,b=v.value;if(Array.isArray(b)){let S=0;for(let E=0;E<b.length;E++){let T=b[E],R=x(T,!0);h(T,v.__data,S),S+=R.storage/Float32Array.BYTES_PER_ELEMENT}}else h(b,v.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,M,v.__data)}}function h(v,y,_){typeof v=="number"||typeof v=="boolean"?y[_]=v:v.isMatrix3?(y[_]=v.elements[0],y[_+1]=v.elements[1],y[_+2]=v.elements[2],y[_+3]=0,y[_+4]=v.elements[3],y[_+5]=v.elements[4],y[_+6]=v.elements[5],y[_+7]=0,y[_+8]=v.elements[6],y[_+9]=v.elements[7],y[_+10]=v.elements[8],y[_+11]=0):ArrayBuffer.isView(v)?y.set(v.subarray(0,y.length-_),_):v.toArray(y,_)}function d(v,y,_,w){let M=v.value,b=y+"_"+_;if(Array.isArray(M)){w[b]===void 0&&(w[b]=[]);let S=w[b],E=!1;for(let T=0;T<M.length;T++)f(M[T],S,T)===!0&&(E=!0);return E}return f(M,w,b)}function f(v,y,_){if(y[_]===void 0)return typeof v=="number"||typeof v=="boolean"?y[_]=v:ArrayBuffer.isView(v)?y[_]=v.slice():y[_]=v.clone(),!0;{let w=y[_];if(typeof v=="number"||typeof v=="boolean"){if(w!==v)return y[_]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(w.equals(v)===!1)return w.copy(v),!0}}return!1}function m(v){let y=v.uniforms,_=0,w=16;for(let b=0,S=y.length;b<S;b++){let E=Array.isArray(y[b])?y[b]:[y[b]];for(let T=0,R=E.length;T<R;T++){let D=E[T],U=Array.isArray(D.value)?D.value:[D.value],P=Array.isArray(y[b])||Array.isArray(D.value),O=_;for(let F=0,J=U.length;F<J;F++){let B=U[F],z=x(B,P),W=_%w,K=W%z.boundary,se=W+K;_+=K,se!==0&&w-se<z.storage&&(_+=w-se),F===0&&(O=_),_+=z.storage}let H=D.type==="int"?Int32Array:D.type==="uint"?Uint32Array:Float32Array;D.__data=new H((_-O)/Float32Array.BYTES_PER_ELEMENT),D.__offset=O}}let M=_%w;return M>0&&(_+=w-M),v.__size=_,v.__cache={},this}function x(v,y){let _={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(_.boundary=4,_.storage=4):v.isVector2?(_.boundary=8,_.storage=8):v.isVector3||v.isColor?(_.boundary=16,_.storage=12):v.isVector4?(_.boundary=16,_.storage=16):v.isMatrix3?(_.boundary=16,_.storage=48):v.isMatrix4?(_.boundary=16,_.storage=64):v.isTexture?Ue("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(_.boundary=16,_.storage=v.byteLength):Ue("WebGLRenderer: Unsupported uniform value type.",v),y===!0&&(_.boundary=16,_.storage=Math.ceil(_.storage/16)*16),_}function g(v){let y=v.target;y.removeEventListener("dispose",g),s.deleteBuffer(i[y.id]),delete i[y.id],delete r[y.id]}function p(){for(let v in i)s.deleteBuffer(i[v]);i={},r={}}return{bind:a,update:o,dispose:p}}var Bv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),$n=null;function zv(){return $n===null&&($n=new Xs(Bv,16,16,Fi,zn),$n.name="DFG_LUT",$n.minFilter=qt,$n.magFilter=qt,$n.wrapS=Rn,$n.wrapT=Rn,$n.generateMipmaps=!1,$n.needsUpdate=!0),$n}var Lc=class{constructor(e={}){let{canvas:t=wf(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1,outputBufferType:f=_n}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;let x=f,g=new Set([Zo,Yo,Jo]),p=new Set([_n,Bn,ar,ds,Xo,jo]),v=new Uint32Array(4),y=new Int32Array(4),_={textures:[],min:[],max:[],resolution:[]},w=null,M=null,b=[],S=[],E=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Zn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let T=this,R=!1,D=null,U=null,P=null,O=null;this._outputColorSpace=Je;let H=0,F=0,J=null,B=-1,z=null,W=new yt,K=new yt,se=null,V=new Ne(0),Q=0,re=t.width,Ce=t.height,ue=1,De=null,ft=null,ke=new yt(0,0,re,Ce),$e=new yt(0,0,re,Ce),tt=!1,ne=new Di,de=new Mo,he=!1,Ae=!1,ye=new Xe,Ze=new L,Oe=new yt,ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},lt=!1;function bt(){return J===null?ue:1}let G=n;function kt(C,k){return t.getContext(C,k)}let ot,St,xe,Nt,Ge,qe,I,A,X,oe,ie,fe,_e,$,ee,me,N,te,Z,ge,le,pe,Be;try{let C={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",ze,!1),t.addEventListener("webglcontextrestored",et,!1),t.addEventListener("webglcontextcreationerror",Me,!1),G===null){let k="webgl2";if(G=kt(k,C),G===null)throw kt(k)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}nt()}catch(C){throw t.removeEventListener("webglcontextlost",ze,!1),t.removeEventListener("webglcontextrestored",et,!1),t.removeEventListener("webglcontextcreationerror",Me,!1),We("WebGLRenderer: "+C.message),C}function nt(){ot=new Zx(G),ot.init(),le=new Lv(G,ot),St=new zx(G,ot,e,le),xe=new Iv(G,ot),St.reversedDepthBuffer&&d&&xe.buffers.depth.setReversed(!0),U=G.createFramebuffer(),P=G.createFramebuffer(),O=G.createFramebuffer(),Nt=new e_(G),Ge=new bv,qe=new Dv(G,ot,xe,Ge,St,le,Nt),I=new Yx(T),A=new n0(G),pe=new kx(G,A),X=new $x(G,A,Nt,pe),oe=new n_(G,X,A,pe,Nt),te=new t_(G,St,qe),ee=new Gx(Ge),ie=new gv(T,I,ot,St,pe,ee),fe=new Ov(T,Ge),_e=new _v,$=new Tv(ot),N=new Ox(T,I,xe,oe,m,c),me=new Pv(T,oe,St),Be=new kv(G,Nt,St,xe),Z=new Bx(G,ot,Nt),ge=new Qx(G,ot,Nt),Nt.programs=ie.programs,T.capabilities=St,T.extensions=ot,T.properties=Ge,T.renderLists=_e,T.shadowMap=me,T.state=xe,T.info=Nt}x!==_n&&(E=new s_(x,t.width,t.height,o,i,r));let ce=new Gh(T,G);this.xr=ce,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){let C=ot.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){let C=ot.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return ue},this.setPixelRatio=function(C){C!==void 0&&(ue=C,this.setSize(re,Ce,!1))},this.getSize=function(C){return C.set(re,Ce)},this.setSize=function(C,k,Y=!0){if(ce.isPresenting){Ue("WebGLRenderer: Can't change size while VR device is presenting.");return}re=C,Ce=k,t.width=Math.floor(C*ue),t.height=Math.floor(k*ue),Y===!0&&(t.style.width=C+"px",t.style.height=k+"px"),E!==null&&E.setSize(t.width,t.height),this.setViewport(0,0,C,k)},this.getDrawingBufferSize=function(C){return C.set(re*ue,Ce*ue).floor()},this.setDrawingBufferSize=function(C,k,Y){re=C,Ce=k,ue=Y,t.width=Math.floor(C*Y),t.height=Math.floor(k*Y),this.setViewport(0,0,C,k)},this.setEffects=function(C){if(x===_n){We("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let k=0;k<C.length;k++)if(C[k].isOutputPass===!0){Ue("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(W)},this.getViewport=function(C){return C.copy(ke)},this.setViewport=function(C,k,Y,q){C.isVector4?ke.set(C.x,C.y,C.z,C.w):ke.set(C,k,Y,q),xe.viewport(W.copy(ke).multiplyScalar(bt()).round())},this.getScissor=function(C){return C.copy($e)},this.setScissor=function(C,k,Y,q){C.isVector4?$e.set(C.x,C.y,C.z,C.w):$e.set(C,k,Y,q),xe.scissor(K.copy($e).multiplyScalar(bt()).round())},this.getScissorTest=function(){return tt},this.setScissorTest=function(C){xe.setScissorTest(tt=C)},this.setOpaqueSort=function(C){De=C},this.setTransparentSort=function(C){ft=C},this.getClearColor=function(C){return C.copy(N.getClearColor())},this.setClearColor=function(){N.setClearColor(...arguments)},this.getClearAlpha=function(){return N.getClearAlpha()},this.setClearAlpha=function(){N.setClearAlpha(...arguments)},this.clear=function(C=!0,k=!0,Y=!0){let q=0;if(C){let j=!1;if(J!==null){let ve=J.texture.format;j=g.has(ve)}if(j){let ve=J.texture.type,Re=p.has(ve),be=N.getClearColor(),we=N.getClearAlpha(),Fe=be.r,Ke=be.g,ht=be.b;Re?(v[0]=Fe,v[1]=Ke,v[2]=ht,v[3]=we,G.clearBufferuiv(G.COLOR,0,v)):(y[0]=Fe,y[1]=Ke,y[2]=ht,y[3]=we,G.clearBufferiv(G.COLOR,0,y))}else q|=G.COLOR_BUFFER_BIT}k&&(q|=G.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Y&&(q|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),q!==0&&G.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(C){C.setRenderer(this),D=C},this.dispose=function(){t.removeEventListener("webglcontextlost",ze,!1),t.removeEventListener("webglcontextrestored",et,!1),t.removeEventListener("webglcontextcreationerror",Me,!1),N.dispose(),_e.dispose(),$.dispose(),qe.dispose(),Ge.dispose(),I.dispose(),oe.dispose(),X.dispose(),pe.dispose(),Be.dispose(),ie.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",Hu),ce.removeEventListener("sessionend",Vu),Bi.stop()};function ze(C){C.preventDefault(),Lr("WebGLRenderer: Context Lost."),R=!0}function et(){Lr("WebGLRenderer: Context Restored."),R=!1;let C=Nt.autoReset,k=me.enabled,Y=me.autoUpdate,q=me.needsUpdate,j=me.type;nt(),Nt.autoReset=C,me.enabled=k,me.autoUpdate=Y,me.needsUpdate=q,me.type=j}function Me(C){We("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function vt(C){let k=C.target;k.removeEventListener("dispose",vt),Jt(k)}function Jt(C){Si(C),Ge.remove(C)}function Si(C){let k=Ge.get(C).programs;k!==void 0&&(k.forEach(function(Y){ie.releaseProgram(Y)}),C.isShaderMaterial&&ie.releaseShaderCache(C))}this.renderBufferDirect=function(C,k,Y,q,j,ve){k===null&&(k=ct);let Re=j.isMesh&&j.matrixWorld.determinantAffine()<0,be=wm(C,k,Y,q,j);xe.setMaterial(q,Re);let we=Y.index,Fe=1;if(q.wireframe===!0){if(we=X.getWireframeAttribute(Y),we===void 0)return;Fe=2}let Ke=Y.drawRange,ht=Y.attributes.position,Pe=Ke.start*Fe,ut=(Ke.start+Ke.count)*Fe;ve!==null&&(Pe=Math.max(Pe,ve.start*Fe),ut=Math.min(ut,(ve.start+ve.count)*Fe)),we!==null?(Pe=Math.max(Pe,0),ut=Math.min(ut,we.count)):ht!=null&&(Pe=Math.max(Pe,0),ut=Math.min(ut,ht.count));let Bt=ut-Pe;if(Bt<0||Bt===1/0)return;pe.setup(j,q,be,Y,we);let At,wt=Z;if(we!==null&&(At=A.get(we),wt=ge,wt.setIndex(At)),j.isMesh)q.wireframe===!0?(xe.setLineWidth(q.wireframeLinewidth*bt()),wt.setMode(G.LINES)):wt.setMode(G.TRIANGLES);else if(j.isLine){let en=q.linewidth;en===void 0&&(en=1),xe.setLineWidth(en*bt()),j.isLineSegments?wt.setMode(G.LINES):j.isLineLoop?wt.setMode(G.LINE_LOOP):wt.setMode(G.LINE_STRIP)}else j.isPoints?wt.setMode(G.POINTS):j.isSprite&&wt.setMode(G.TRIANGLES);if(j.isBatchedMesh)if(ot.get("WEBGL_multi_draw"))wt.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{let en=j._multiDrawStarts,Ie=j._multiDrawCounts,on=j._multiDrawCount,xt=we?A.get(we).bytesPerElement:1,zi=Ge.get(q).currentProgram.getUniforms();for(let tn=0;tn<on;tn++)zi.setValue(G,"_gl_DrawID",tn),wt.render(en[tn]/xt,Ie[tn])}else if(j.isInstancedMesh)wt.renderInstances(Pe,Bt,j.count);else if(Y.isInstancedBufferGeometry){let en=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Ie=Math.min(Y.instanceCount,en);wt.renderInstances(Pe,Bt,Ie)}else wt.render(Pe,Bt)};function Gu(C,k,Y,q){D!==null&&C.isNodeMaterial&&D.setObject(q,C),he===!0&&ee.setState(C,Y,!1),C.transparent===!0&&C.side===Ve&&C.forceSinglePass===!1?(C.side=fn,C.needsUpdate=!0,br(C,k,q),C.side=Yn,C.needsUpdate=!0,br(C,k,q),C.side=Ve):br(C,k,q)}this.compile=function(C,k,Y=null){Y===null&&(Y=C),D!==null&&D.renderStart(C,k,Y),M=$.get(Y),M.init(k),S.push(M),Y.traverseVisible(function(j){j.isLight&&j.layers.test(k.layers)&&(M.pushLight(j),j.castShadow&&M.pushShadow(j))}),C!==Y&&C.traverseVisible(function(j){j.isLight&&j.layers.test(k.layers)&&(M.pushLight(j),j.castShadow&&M.pushShadow(j))}),M.setupLights(),D!==null&&D.updateLights(M.state.lightsArray),Ae=this.localClippingEnabled,he=ee.init(this.clippingPlanes,Ae),he===!0&&ee.setGlobalState(this.clippingPlanes,k),D!==null&&me.render(M.state.shadowsArray,Y,k);let q=new Set;return C.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;let ve=j.material;if(ve)if(Array.isArray(ve))for(let Re=0;Re<ve.length;Re++){let be=ve[Re];Gu(be,Y,k,j),q.add(be)}else Gu(ve,Y,k,j),q.add(ve)}),M=S.pop(),D!==null&&D.renderEnd(),q},this.compileAsync=function(C,k,Y=null){let q=this.compile(C,k,Y);return new Promise(j=>{function ve(){if(q.forEach(function(Re){let we=Ge.get(Re).currentProgram;(we===void 0||we.isReady())&&q.delete(Re)}),q.size===0){j(C);return}setTimeout(ve,10)}ot.get("KHR_parallel_shader_compile")!==null?ve():setTimeout(ve,10)})};let ol=null;function Mm(C){ol&&ol(C)}function Hu(){Bi.stop()}function Vu(){Bi.start()}let Bi=new np;Bi.setAnimationLoop(Mm),typeof self<"u"&&Bi.setContext(self),this.setAnimationLoop=function(C){ol=C,ce.setAnimationLoop(C),C===null?Bi.stop():Bi.start()},ce.addEventListener("sessionstart",Hu),ce.addEventListener("sessionend",Vu),this.render=function(C,k){if(k!==void 0&&k.isCamera!==!0){We("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;D!==null&&D.renderStart(C,k);let Y=ce.enabled===!0&&ce.isPresenting===!0,q=E!==null&&(J===null||Y)&&E.begin(T,J);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(ce.cameraAutoUpdate===!0&&ce.updateCamera(k),k=ce.getCamera()),C.isScene===!0&&C.onBeforeRender(T,C,k,J),M=$.get(C,S.length),M.init(k),M.state.textureUnits=qe.getTextureUnits(),S.push(M),ye.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),k.isArrayCamera?de.setFromArrayCamera(k):ne.setFromProjectionMatrix(ye,Cn,k.reversedDepth),Ae=this.localClippingEnabled,he=ee.init(this.clippingPlanes,Ae),w=_e.get(C,b.length),w.init(),b.push(w),this.info.render.frame++,ce.enabled===!0&&ce.isPresenting===!0){let Re=T.xr.getDepthSensingMesh();Re!==null&&cl(Re,k,-1/0,T.sortObjects)}cl(C,k,0,T.sortObjects),w.finish(),D!==null&&D.updateLights(M.state.lightsArray),T.sortObjects===!0&&w.sort(De,ft),lt=ce.enabled===!1||ce.isPresenting===!1||ce.hasDepthSensing()===!1,lt&&N.addToRenderList(w,C),this.info.autoReset===!0&&this.info.reset(),he===!0&&ee.beginShadows();let j=M.state.shadowsArray;if(me.render(j,C,k),he===!0&&ee.endShadows(),(q&&E.hasRenderPass())===!1){let Re=w.opaque,be=w.transmissive;if(M.setupLights(),k.isArrayCamera){let we=k.cameras;if(be.length>0)for(let Fe=0,Ke=we.length;Fe<Ke;Fe++){let ht=we[Fe];qu(Re,be,C,ht)}lt&&N.render(C);for(let Fe=0,Ke=we.length;Fe<Ke;Fe++){let ht=we[Fe];Wu(w,C,ht,ht.viewport)}}else be.length>0&&qu(Re,be,C,k),lt&&N.render(C),Wu(w,C,k)}J!==null&&F===0&&(qe.updateMultisampleRenderTarget(J),qe.updateRenderTargetMipmap(J)),q&&E.end(T),C.isScene===!0&&C.onAfterRender(T,C,k),pe.resetDefaultState(),B=-1,z=null,S.pop(),S.length>0?(M=S[S.length-1],qe.setTextureUnits(M.state.textureUnits),he===!0&&ee.setGlobalState(T.clippingPlanes,M.state.camera)):M=null,b.pop(),b.length>0?w=b[b.length-1]:w=null,D!==null&&D.renderEnd()};function cl(C,k,Y,q){if(C.visible===!1)return;if(C.layers.test(k.layers)){if(C.isGroup)Y=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(k);else if(C.isLight)M.pushLight(C),C.castShadow&&M.pushShadow(C);else if(C.isSprite){let Re=k.isArrayCamera?de:ne;if(!C.frustumCulled||C.intersectsFrustum(Re)){q&&Oe.setFromMatrixPosition(C.matrixWorld).applyMatrix4(ye);let be=oe.update(C),we=C.material;we.visible&&w.push(C,be,we,Y,Oe.z,null,k)}}else if(C.isMesh||C.isLine||C.isPoints){let Re=k.isArrayCamera?de:ne;if(!C.frustumCulled||C.intersectsFrustum(Re)){let be=oe.update(C),we=C.material;if(q&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Oe.copy(C.boundingSphere.center)):(be.boundingSphere===null&&be.computeBoundingSphere(),Oe.copy(be.boundingSphere.center)),Oe.applyMatrix4(C.matrixWorld).applyMatrix4(ye)),Array.isArray(we)){let Fe=be.groups;for(let Ke=0,ht=Fe.length;Ke<ht;Ke++){let Pe=Fe[Ke],ut=we[Pe.materialIndex];ut&&ut.visible&&w.push(C,be,ut,Y,Oe.z,Pe,k)}}else we.visible&&w.push(C,be,we,Y,Oe.z,null,k)}}}let ve=C.children;for(let Re=0,be=ve.length;Re<be;Re++)cl(ve[Re],k,Y,q)}function Wu(C,k,Y,q){let{opaque:j,transmissive:ve,transparent:Re}=C;M.setupLightsView(Y),he===!0&&ee.setGlobalState(T.clippingPlanes,Y),q&&xe.viewport(W.copy(q)),j.length>0&&Na(j,k,Y),ve.length>0&&Na(ve,k,Y),Re.length>0&&Na(Re,k,Y),xe.buffers.depth.setTest(!0),xe.buffers.depth.setMask(!0),xe.buffers.color.setMask(!0),xe.setPolygonOffset(!1)}function qu(C,k,Y,q){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[q.id]===void 0){let Pe=ot.has("EXT_color_buffer_half_float")||ot.has("EXT_color_buffer_float");M.state.transmissionRenderTarget[q.id]=new Sn(1,1,{generateMipmaps:!0,type:Pe?zn:_n,minFilter:Pn,samples:Math.max(4,St.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:it.workingColorSpace})}let ve=M.state.transmissionRenderTarget[q.id],Re=q.viewport||W;ve.setSize(Re.z*T.transmissionResolutionScale,Re.w*T.transmissionResolutionScale);let be=T.getRenderTarget(),we=T.getActiveCubeFace(),Fe=T.getActiveMipmapLevel();T.setRenderTarget(ve),T.getClearColor(V),Q=T.getClearAlpha(),Q<1&&T.setClearColor(16777215,.5),T.clear(),lt&&N.render(Y);let Ke=T.toneMapping;T.toneMapping=Zn;let ht=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),M.setupLightsView(q),he===!0&&ee.setGlobalState(T.clippingPlanes,q),Na(C,Y,q),qe.updateMultisampleRenderTarget(ve),qe.updateRenderTargetMipmap(ve),ot.has("WEBGL_multisampled_render_to_texture")===!1){let Pe=!1;for(let ut=0,Bt=k.length;ut<Bt;ut++){let At=k[ut],{object:wt,geometry:en,material:Ie,group:on}=At;if(Ie.side===Ve&&wt.layers.test(q.layers)){let xt=Ie.side;Ie.side=fn,Ie.needsUpdate=!0,Xu(wt,Y,q,en,Ie,on),Ie.side=xt,Ie.needsUpdate=!0,Pe=!0}}Pe===!0&&(qe.updateMultisampleRenderTarget(ve),qe.updateRenderTargetMipmap(ve))}T.setRenderTarget(be,we,Fe),T.setClearColor(V,Q),ht!==void 0&&(q.viewport=ht),T.toneMapping=Ke}function Na(C,k,Y){let q=k.isScene===!0?k.overrideMaterial:null;for(let j=0,ve=C.length;j<ve;j++){let Re=C[j],{object:be,geometry:we,group:Fe}=Re,Ke=Re.material;Ke.allowOverride===!0&&q!==null&&(Ke=q),be.layers.test(Y.layers)&&Xu(be,k,Y,we,Ke,Fe)}}function Xu(C,k,Y,q,j,ve){D!==null&&j.isNodeMaterial&&D.setObject(C,j),C.onBeforeRender(T,k,Y,q,j,ve),C.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),j.onBeforeRender(T,k,Y,q,C,ve),j.transparent===!0&&j.side===Ve&&j.forceSinglePass===!1?(j.side=fn,j.needsUpdate=!0,T.renderBufferDirect(Y,k,q,j,C,ve),j.side=Yn,j.needsUpdate=!0,T.renderBufferDirect(Y,k,q,j,C,ve),j.side=Ve):T.renderBufferDirect(Y,k,q,j,C,ve),C.onAfterRender(T,k,Y,q,j,ve)}function ju(C){let k=0;for(let Y of C)Y.texture!==null&&k++;return k}function br(C,k,Y){k.isScene!==!0&&(k=ct);let q=Ge.get(C),j=M.state.lights,ve=M.state.shadowsArray,Re=j.state.version,be=ie.getParameters(C,j.state,ve,k,Y,M.state.lightProbeGridArray),we=ie.getProgramCacheKey(be),Fe=q.programs;q.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?k.environment:null,q.fog=k.fog;let Ke=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;q.envMap=I.get(C.envMap||q.environment,Ke),q.envMapRotation=q.environment!==null&&C.envMap===null?k.environmentRotation:C.envMapRotation,Fe===void 0&&(C.addEventListener("dispose",vt),Fe=new Map,q.programs=Fe,q.programVariants=new Map);let ht=Fe.get(we);if(ht!==void 0){if(q.currentProgram===ht&&q.lightsStateVersion===Re)return Ju(C,be),ht}else be.uniforms=ie.getUniforms(C),D!==null&&C.isNodeMaterial&&D.build(C,Y,be),C.onBeforeCompile(be,T),ht=ie.acquireProgram(be,we),Fe.set(we,ht),q.uniforms=be.uniforms;let Pe=q.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Pe.clippingPlanes=ee.uniform),Ju(C,be),q.needsLights=Am(C),q.lightsStateVersion=Re,q.needsLights&&(Pe.ambientLightColor.value=j.state.ambient,Pe.lightProbe.value=j.state.probe,Pe.sunLights.value=j.state.sun,Pe.sunLightShadows.value=j.state.sunShadow,Pe.directionalLights.value=j.state.directional,Pe.directionalLightShadows.value=j.state.directionalShadow,Pe.spotLights.value=j.state.spot,Pe.spotLightShadows.value=j.state.spotShadow,Pe.rectAreaLights.value=j.state.rectArea,Pe.ltc_1.value=j.state.rectAreaLTC1,Pe.ltc_2.value=j.state.rectAreaLTC2,Pe.pointLights.value=j.state.point,Pe.pointLightShadows.value=j.state.pointShadow,Pe.hemisphereLights.value=j.state.hemi,Pe.sunShadowMatrix.value=j.state.sunShadowMatrix,Pe.sunShadowCascade.value=j.state.sunShadowCascade,Pe.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Pe.spotLightMatrix.value=j.state.spotLightMatrix,Pe.spotLightMap.value=j.state.spotLightMap,Pe.pointShadowMatrix.value=j.state.pointShadowMatrix),q.numLightProbeGrids=ju(M.state.lightProbeGridArray),q.currentProgram=ht,q.uniformsList=null,ht}function Sm(C,k,Y,q,j){let ve=Ge.get(C),Re=ve.currentProgram.id+","+q+","+j,be=ve.programVariants.get(Re);return be===void 0?(be=br(C,k,Y),ve.programVariants.set(Re,be)):(ve.currentProgram=be,ve.uniformsList=null,ve.outputColorSpace=q,ve.toneMapping=j),be}function Ku(C){if(C.uniformsList===null){let k=C.currentProgram.getUniforms();C.uniformsList=cr.seqWithValue(k.seq,C.uniforms)}return C.uniformsList}function Ju(C,k){let Y=Ge.get(C);Y.outputColorSpace=k.outputColorSpace,Y.batching=k.batching,Y.batchingColor=k.batchingColor,Y.instancing=k.instancing,Y.instancingColor=k.instancingColor,Y.instancingMorph=k.instancingMorph,Y.skinning=k.skinning,Y.morphTargets=k.morphTargets,Y.morphNormals=k.morphNormals,Y.morphColors=k.morphColors,Y.morphTargetsCount=k.morphTargetsCount,Y.numClippingPlanes=k.numClippingPlanes,Y.numIntersection=k.numClipIntersection,Y.vertexAlphas=k.vertexAlphas,Y.vertexTangents=k.vertexTangents,Y.toneMapping=k.toneMapping}function wm(C,k,Y,q,j){k.isScene!==!0&&(k=ct),qe.resetTextureUnits();let ve=k.fog,Re=q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial?k.environment:null,be=J===null?T.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:it.workingColorSpace,we=q.isMeshStandardMaterial||q.isMeshLambertMaterial&&!q.envMap||q.isMeshPhongMaterial&&!q.envMap,Fe=I.get(q.envMap||Re,we),Ke=q.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,ht=!!Y.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Pe=!!Y.morphAttributes.position,ut=!!Y.morphAttributes.normal,Bt=!!Y.morphAttributes.color,At=Zn;q.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(At=T.toneMapping);let wt=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,en=wt!==void 0?wt.length:0,Ie=Ge.get(q),on=M.state.lights;if(he===!0&&(Ae===!0||C!==z)){let Ct=C===z&&q.id===B;ee.setState(q,C,Ct)}let xt=!1,zi=!1;q.version===Ie.__version?Ie.needsLights&&Ie.lightsStateVersion!==on.state.version||j.isBatchedMesh&&Ie.batching===!1||!j.isBatchedMesh&&Ie.batching===!0||j.isBatchedMesh&&Ie.batchingColor===!0&&j._colorsTexture===null||j.isBatchedMesh&&Ie.batchingColor===!1&&j._colorsTexture!==null||j.isInstancedMesh&&Ie.instancing===!1||!j.isInstancedMesh&&Ie.instancing===!0||j.isSkinnedMesh&&Ie.skinning===!1||!j.isSkinnedMesh&&Ie.skinning===!0||j.isInstancedMesh&&Ie.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Ie.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&Ie.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&Ie.instancingMorph===!1&&j.morphTexture!==null||Ie.envMap!==Fe||q.fog===!0&&Ie.fog!==ve||Ie.numClippingPlanes!==void 0&&(Ie.numClippingPlanes!==ee.numPlanes||Ie.numIntersection!==ee.numIntersection)||Ie.vertexAlphas!==Ke||Ie.vertexTangents!==ht||Ie.morphTargets!==Pe||Ie.morphNormals!==ut||Ie.morphColors!==Bt||Ie.morphTargetsCount!==en||Ie.numLightProbeGrids!==ju(M.state.lightProbeGridArray)?xt=!0:(Ie.outputColorSpace!==be||Ie.toneMapping!==At)&&(zi=!0):(xt=!0,Ie.__version=q.version);let tn=Ie.currentProgram;(xt===!0||zi===!0)&&(tn=zi===!0?Sm(q,k,j,be,At):br(q,k,j),D&&q.isNodeMaterial&&D.onUpdateProgram(q,tn,Ie));let Fa=!1,wi=!1,Gi=!1,mt=tn.getUniforms(),$t=Ie.uniforms;if(xe.useProgram(tn.program)&&(Fa=!0,wi=!0,Gi=!0),q.id!==B&&(B=q.id,wi=!0),Fa||z!==C){xe.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),mt.setValue(G,"projectionMatrix",C.projectionMatrix),mt.setValue(G,"viewMatrix",C.matrixWorldInverse);let Yt=mt.map.cameraPosition;Yt!==void 0&&Yt.setValue(G,Ze.setFromMatrixPosition(C.matrixWorld)),St.logarithmicDepthBuffer&&mt.setValue(G,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&mt.setValue(G,"isOrthographic",C.isOrthographicCamera===!0),z!==C&&(z=C,wi=!0,Gi=!0)}if(Ie.needsLights&&(on.state.sunShadowMap.length>0&&mt.setValue(G,"sunShadowMap",on.state.sunShadowMap,qe),on.state.directionalShadowMap.length>0&&mt.setValue(G,"directionalShadowMap",on.state.directionalShadowMap,qe),on.state.spotShadowMap.length>0&&mt.setValue(G,"spotShadowMap",on.state.spotShadowMap,qe),on.state.pointShadowMap.length>0&&mt.setValue(G,"pointShadowMap",on.state.pointShadowMap,qe)),j.isSkinnedMesh){mt.setOptional(G,j,"bindMatrix"),mt.setOptional(G,j,"bindMatrixInverse");let Ct=j.skeleton;Ct&&(Ct.boneTexture===null&&Ct.computeBoneTexture(),mt.setValue(G,"boneTexture",Ct.boneTexture,qe))}j.isBatchedMesh&&(mt.setOptional(G,j,"batchingTexture"),mt.setValue(G,"batchingTexture",j._matricesTexture,qe),mt.setOptional(G,j,"batchingIdTexture"),mt.setValue(G,"batchingIdTexture",j._indirectTexture,qe),mt.setOptional(G,j,"batchingColorTexture"),j._colorsTexture!==null&&mt.setValue(G,"batchingColorTexture",j._colorsTexture,qe));let Nn=Y.morphAttributes;if((Nn.position!==void 0||Nn.normal!==void 0||Nn.color!==void 0)&&te.update(j,Y,tn),(wi||Ie.receiveShadow!==j.receiveShadow)&&(Ie.receiveShadow=j.receiveShadow,mt.setValue(G,"receiveShadow",j.receiveShadow)),(q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial)&&q.envMap===null&&k.environment!==null&&($t.envMapIntensity.value=k.environmentIntensity),$t.dfgLUT!==void 0&&($t.dfgLUT.value=zv()),wi){if(mt.setValue(G,"toneMappingExposure",T.toneMappingExposure),Ie.needsLights&&Tm($t,Gi),ve&&q.fog===!0&&fe.refreshFogUniforms($t,ve),fe.refreshMaterialUniforms($t,q,ue,Ce,M.state.transmissionRenderTarget[C.id]),Ie.needsLights&&Ie.numLightProbeGrids>0){let Ct=_,Yt=0;for(let ni of M.state.lightProbeGridArray)ni.texture!==null&&(Ct.textures[Yt]=ni.texture,Ct.min[Yt]=ni.boundingBox.min,Ct.max[Yt]=ni.boundingBox.max,Ct.resolution[Yt]=ni.resolution,Yt++);for(let ni in Ct)Ct[ni].length=Yt;$t.probesSH.value=Ct.textures,$t.probesMin.value=Ct.min,$t.probesMax.value=Ct.max,$t.probesResolution.value=Ct.resolution}cr.upload(G,Ku(Ie),$t,qe)}if(q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(cr.upload(G,Ku(Ie),$t,qe),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&mt.setValue(G,"center",j.center),mt.setValue(G,"modelViewMatrix",j.modelViewMatrix),mt.setValue(G,"normalMatrix",j.normalMatrix),mt.setValue(G,"modelMatrix",j.matrixWorld),q.uniformsGroups!==void 0){let Ct=q.uniformsGroups;for(let Yt=0,ni=Ct.length;Yt<ni;Yt++){let Zu=Ct[Yt];Be.update(Zu,tn),Be.bind(Zu,tn)}}return tn}function Tm(C,k){C.ambientLightColor.needsUpdate=k,C.lightProbe.needsUpdate=k,C.sunLights.needsUpdate=k,C.sunLightShadows.needsUpdate=k,C.directionalLights.needsUpdate=k,C.directionalLightShadows.needsUpdate=k,C.pointLights.needsUpdate=k,C.pointLightShadows.needsUpdate=k,C.spotLights.needsUpdate=k,C.spotLightShadows.needsUpdate=k,C.rectAreaLights.needsUpdate=k,C.hemisphereLights.needsUpdate=k}function Am(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return J},this.setRenderTargetTextures=function(C,k,Y){let q=Ge.get(C);q.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),Ge.get(C.texture).__webglTexture=k,Ge.get(C.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:Y,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,k){let Y=Ge.get(C);Y.__webglFramebuffer=k,Y.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(C,k=0,Y=0){J=C,H=k,F=Y;let q=null,j=!1,ve=!1;if(C){let be=Ge.get(C);if(be.__useDefaultFramebuffer!==void 0){xe.bindFramebuffer(G.FRAMEBUFFER,be.__webglFramebuffer),W.copy(C.viewport),K.copy(C.scissor),se=C.scissorTest,xe.viewport(W),xe.scissor(K),xe.setScissorTest(se),B=-1;return}else if(be.__webglFramebuffer===void 0)qe.setupRenderTarget(C);else if(be.__hasExternalTextures)qe.rebindTextures(C,Ge.get(C.texture).__webglTexture,Ge.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){let Ke=C.depthTexture;if(be.__boundDepthTexture!==Ke){if(Ke!==null&&Ge.has(Ke)&&(C.width!==Ke.image.width||C.height!==Ke.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");qe.setupDepthRenderbuffer(C)}}let we=C.texture;(we.isData3DTexture||we.isDataArrayTexture||we.isCompressedArrayTexture)&&(ve=!0);let Fe=Ge.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Fe[k])?q=Fe[k][Y]:q=Fe[k],j=!0):C.samples>0&&qe.useMultisampledRTT(C)===!1?q=Ge.get(C).__webglMultisampledFramebuffer:Array.isArray(Fe)?q=Fe[Y]:q=Fe,W.copy(C.viewport),K.copy(C.scissor),se=C.scissorTest}else W.copy(ke).multiplyScalar(ue).floor(),K.copy($e).multiplyScalar(ue).floor(),se=tt;if(Y!==0&&(q=U),xe.bindFramebuffer(G.FRAMEBUFFER,q)&&xe.drawBuffers(C,q),xe.viewport(W),xe.scissor(K),xe.setScissorTest(se),j){let be=Ge.get(C.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+k,be.__webglTexture,Y)}else if(ve){let be=k;for(let we=0;we<C.textures.length;we++){let Fe=Ge.get(C.textures[we]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+we,Fe.__webglTexture,Y,be)}}else if(C!==null&&Y!==0){let be=Ge.get(C.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,be.__webglTexture,Y)}B=-1};function Yu(C){let k=Ge.get(C);return(k.__readFormat!==C.format||k.__readType!==C.type)&&(k.__readFormat=C.format,k.__readType=C.type,k.__formatReadable=St.textureFormatReadable(C.format),k.__typeReadable=St.textureTypeReadable(C.type)),k}this.readRenderTargetPixels=function(C,k,Y,q,j,ve,Re,be=0){if(!(C&&C.isWebGLRenderTarget)){We("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=Ge.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Re!==void 0&&(we=we[Re],Array.isArray(we)&&(we=we[0])),we){xe.bindFramebuffer(G.FRAMEBUFFER,we);try{let Fe=C.textures[be],Ke=Fe.format,ht=Fe.type;C.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+be);let Pe=Yu(Fe);if(Pe.__formatReadable===!1){We("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Pe.__typeReadable===!1){We("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=C.width-q&&Y>=0&&Y<=C.height-j&&G.readPixels(k,Y,q,j,le.convert(Ke),le.convert(ht),ve)}finally{let Fe=J!==null?Ge.get(J).__webglFramebuffer:null;xe.bindFramebuffer(G.FRAMEBUFFER,Fe)}}},this.readRenderTargetPixelsAsync=async function(C,k,Y,q,j,ve,Re,be=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=Ge.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Re!==void 0&&(we=we[Re],Array.isArray(we)&&(we=we[0])),we)if(k>=0&&k<=C.width-q&&Y>=0&&Y<=C.height-j){xe.bindFramebuffer(G.FRAMEBUFFER,we);let Fe=C.textures[be],Ke=Fe.format,ht=Fe.type;C.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+be);let Pe=Yu(Fe);if(Pe.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Pe.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ut=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,ut),G.bufferData(G.PIXEL_PACK_BUFFER,ve.byteLength,G.STREAM_READ),G.readPixels(k,Y,q,j,le.convert(Ke),le.convert(ht),0),G.bindBuffer(G.PIXEL_PACK_BUFFER,null);let Bt=J!==null?Ge.get(J).__webglFramebuffer:null;xe.bindFramebuffer(G.FRAMEBUFFER,Bt);let At=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await Af(G,At,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,ut),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,ve),G.bindBuffer(G.PIXEL_PACK_BUFFER,null),G.deleteBuffer(ut),G.deleteSync(At),ve}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,k=null,Y=0){let q=Math.pow(2,-Y),j=Math.floor(C.image.width*q),ve=Math.floor(C.image.height*q),Re=k!==null?k.x:0,be=k!==null?k.y:0;qe.setTexture2D(C,0),G.copyTexSubImage2D(G.TEXTURE_2D,Y,0,0,Re,be,j,ve),xe.unbindTexture()},this.copyTextureToTexture=function(C,k,Y=null,q=null,j=0,ve=0){let Re,be,we,Fe,Ke,ht,Pe,ut,Bt,At=C.isCompressedTexture?C.mipmaps[ve]:C.image;if(Y!==null)Re=Y.max.x-Y.min.x,be=Y.max.y-Y.min.y,we=Y.isBox3?Y.max.z-Y.min.z:1,Fe=Y.min.x,Ke=Y.min.y,ht=Y.isBox3?Y.min.z:0;else{let mt=Math.pow(2,-j);Re=Math.floor(At.width*mt),be=Math.floor(At.height*mt),C.isDataArrayTexture?we=At.depth:C.isData3DTexture?we=Math.floor(At.depth*mt):we=1,Fe=0,Ke=0,ht=0}q!==null?(Pe=q.x,ut=q.y,Bt=q.z):(Pe=0,ut=0,Bt=0);let wt=le.convert(k.format),en=le.convert(k.type),Ie;k.isData3DTexture?(qe.setTexture3D(k,0),Ie=G.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(qe.setTexture2DArray(k,0),Ie=G.TEXTURE_2D_ARRAY):(qe.setTexture2D(k,0),Ie=G.TEXTURE_2D),xe.activeTexture(G.TEXTURE0),xe.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,k.flipY),xe.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),xe.pixelStorei(G.UNPACK_ALIGNMENT,k.unpackAlignment);let on=xe.getParameter(G.UNPACK_ROW_LENGTH),xt=xe.getParameter(G.UNPACK_IMAGE_HEIGHT),zi=xe.getParameter(G.UNPACK_SKIP_PIXELS),tn=xe.getParameter(G.UNPACK_SKIP_ROWS),Fa=xe.getParameter(G.UNPACK_SKIP_IMAGES);xe.pixelStorei(G.UNPACK_ROW_LENGTH,At.width),xe.pixelStorei(G.UNPACK_IMAGE_HEIGHT,At.height),xe.pixelStorei(G.UNPACK_SKIP_PIXELS,Fe),xe.pixelStorei(G.UNPACK_SKIP_ROWS,Ke),xe.pixelStorei(G.UNPACK_SKIP_IMAGES,ht);let wi=C.isDataArrayTexture||C.isData3DTexture,Gi=k.isDataArrayTexture||k.isData3DTexture;if(C.isDepthTexture){let mt=Ge.get(C),$t=Ge.get(k),Nn=Ge.get(mt.__renderTarget),Ct=Ge.get($t.__renderTarget);xe.bindFramebuffer(G.READ_FRAMEBUFFER,Nn.__webglFramebuffer),xe.bindFramebuffer(G.DRAW_FRAMEBUFFER,Ct.__webglFramebuffer);for(let Yt=0;Yt<we;Yt++)wi&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Ge.get(C).__webglTexture,j,ht+Yt),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Ge.get(k).__webglTexture,ve,Bt+Yt)),G.blitFramebuffer(Fe,Ke,Fe+Re,Ke+be,Pe,ut,Pe+Re,ut+be,G.DEPTH_BUFFER_BIT,G.NEAREST);xe.bindFramebuffer(G.READ_FRAMEBUFFER,null),xe.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(j!==0||C.isRenderTargetTexture||Ge.has(C)){let mt=Ge.get(C),$t=Ge.get(k);xe.bindFramebuffer(G.READ_FRAMEBUFFER,P),xe.bindFramebuffer(G.DRAW_FRAMEBUFFER,O);for(let Nn=0;Nn<we;Nn++)wi?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,mt.__webglTexture,j,ht+Nn):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,mt.__webglTexture,j),Gi?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,$t.__webglTexture,ve,Bt+Nn):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,$t.__webglTexture,ve),j!==0?G.blitFramebuffer(Fe,Ke,Fe+Re,Ke+be,Pe,ut,Pe+Re,ut+be,G.COLOR_BUFFER_BIT,G.NEAREST):Gi?G.copyTexSubImage3D(Ie,ve,Pe,ut,Bt+Nn,Fe,Ke,Re,be):G.copyTexSubImage2D(Ie,ve,Pe,ut,Fe,Ke,Re,be);xe.bindFramebuffer(G.READ_FRAMEBUFFER,null),xe.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else Gi?C.isDataTexture||C.isData3DTexture?G.texSubImage3D(Ie,ve,Pe,ut,Bt,Re,be,we,wt,en,At.data):k.isCompressedArrayTexture?G.compressedTexSubImage3D(Ie,ve,Pe,ut,Bt,Re,be,we,wt,At.data):G.texSubImage3D(Ie,ve,Pe,ut,Bt,Re,be,we,wt,en,At):C.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,ve,Pe,ut,Re,be,wt,en,At.data):C.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,ve,Pe,ut,At.width,At.height,wt,At.data):G.texSubImage2D(G.TEXTURE_2D,ve,Pe,ut,Re,be,wt,en,At);xe.pixelStorei(G.UNPACK_ROW_LENGTH,on),xe.pixelStorei(G.UNPACK_IMAGE_HEIGHT,xt),xe.pixelStorei(G.UNPACK_SKIP_PIXELS,zi),xe.pixelStorei(G.UNPACK_SKIP_ROWS,tn),xe.pixelStorei(G.UNPACK_SKIP_IMAGES,Fa),ve===0&&k.generateMipmaps===!0&&k.mipmapsAutoUpdate===!0&&G.generateMipmap(Ie),xe.unbindTexture()},this.initRenderTarget=function(C){Ge.get(C).__webglFramebuffer===void 0&&qe.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?qe.setTextureCube(C,0):C.isData3DTexture?qe.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?qe.setTexture2DArray(C,0):qe.setTexture2D(C,0),xe.unbindTexture()},this.resetState=function(){H=0,F=0,J=null,xe.reset(),pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Cn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=it._getDrawingBufferColorSpace(e),t.unpackColorSpace=it._getUnpackColorSpace()}};var fp={"data/architecture/HABS-0258.png":"data/stream/architecture-HABS-0258.png.webp","data/architecture/HABS-0261.png":"data/stream/architecture-HABS-0261.png.webp","data/architecture/HABS-0263.png":"data/stream/architecture-HABS-0263.png.webp","data/architecture/HABS-0265.png":"data/stream/architecture-HABS-0265.png.webp","data/architecture/HABS-0266.png":"data/stream/architecture-HABS-0266.png.webp","data/architecture/HABS-0267.png":"data/stream/architecture-HABS-0267.png.webp","data/architecture/board.jpg":"data/stream/architecture-board.jpg.webp","data/architecture/brick-height.jpg":"data/stream/architecture-brick-height.jpg.webp","data/architecture/lap.jpg":"data/stream/architecture-lap.jpg.webp","data/architecture/metal.jpg":"data/stream/architecture-metal.jpg.webp","data/architecture/stjohn-center.png":"data/stream/architecture-stjohn-center.png.webp","data/architecture/stjohn-left.png":"data/stream/architecture-stjohn-left.png.webp","data/architecture/stjohn-right.png":"data/stream/architecture-stjohn-right.png.webp","data/asphalt.jpg":"data/stream/asphalt.jpg.webp","data/brick.jpg":"data/stream/brick.jpg.webp","data/commercial0.jpg":"data/stream/commercial0.jpg.webp","data/commercial1.jpg":"data/stream/commercial1.jpg.webp","data/commercial2.jpg":"data/stream/commercial2.jpg.webp","data/commercial3.jpg":"data/stream/commercial3.jpg.webp","data/concrete.jpg":"data/stream/concrete.jpg.webp","data/grass.jpg":"data/stream/grass.jpg.webp","data/ground-painterly.jpg":"data/stream/ground-painterly.jpg.webp","data/house1.jpg":"data/stream/house1.jpg.webp","data/house2.jpg":"data/stream/house2.jpg.webp","data/house3.jpg":"data/stream/house3.jpg.webp","data/landrys.png":"data/stream/landrys.png.webp","data/lighting/oxford-twilight.jpg":"data/stream/lighting-oxford-twilight.jpg.webp","data/lighting/painterly-day.jpg":"data/stream/lighting-painterly-day.jpg.webp","data/lighting/painterly-dusk.jpg":"data/stream/lighting-painterly-dusk.jpg.webp","data/off-square.png":"data/stream/off-square.png.webp","data/square-books.png":"data/stream/square-books.png.webp","data/store0.jpg":"data/stream/store0.jpg.webp","data/store1.jpg":"data/stream/store1.jpg.webp","data/store2.jpg":"data/stream/store2.jpg.webp","data/store3.jpg":"data/stream/store3.jpg.webp","data/tree0.png":"data/stream/tree0.png.webp","data/tree1.png":"data/stream/tree1.png.webp","data/tree2.png":"data/stream/tree2.png.webp","data/tree3.png":"data/stream/tree3.png.webp","data/ventress-front.jpg":"data/stream/ventress-front.jpg.webp"};async function pp(s){let e=await fetch(s);if(!e.ok)throw Error("Map asset "+e.status+" "+s);return new Response(e.body.pipeThrough(new DecompressionStream("gzip")))}async function mp(){return(await pp("data/stream/city.json.gz")).json()}async function gp(s){let e=new Uint8Array(await(await pp("data/stream/height.delta.gz")).arrayBuffer()),t=e.length/2,n=new Int16Array(t);for(let i=0;i<t;i++){let r=i%s?n[i-1]:0,a=i>=s?n[i-s]:0,o=i>=s&&i%s?n[i-s-1]:0,c=Math.max(Math.min(r,a),Math.min(Math.max(r,a),r+a-o));n[i]=c+(e[i]|e[i+t]<<8)}return n}var dt=(s,e)=>Math.hypot(s[0]-e[0],s[1]-e[1]),Hn=(s,e,t)=>Math.max(e,Math.min(t,s)),bp=s=>Math.atan2(Math.sin(s),Math.cos(s)),ps=new Set([624121519,624121520]),ms=111.72;function gs(s,e,t){let n=t[0]-e[0],i=t[1]-e[1],r=Hn(((s[0]-e[0])*n+(s[1]-e[1])*i)/(n*n+i*i||1),0,1);return[e[0]+n*r,e[1]+i*r,r]}var Uc=class s{static async load(){let e=fetch("data/terrain.json").then(r=>r.json()),[t,n,i]=await Promise.all([mp(),e,e.then(r=>gp(r.width))]);return new s(t,n,i)}constructor(e,t,n){Object.assign(this,e,{dem:t,heights:n}),this.tileSet=new Set(this.tiles),this.edges=this.nodes.map(()=>[]),this.roadTiles=new Map,this.cells=new Map,this.rules=new Map;for(let[r,a,o,c]of this.restrictions){let l=a+"/"+o,u=this.rules.get(l)||[];u.push([r,c]),this.rules.set(l,u)}let i=(r,a,o)=>{r.has(a)?r.get(a).push(o):r.set(a,[o])};this.roads.forEach((r,a)=>{r.index=a,r.length=0,r.along=[0];for(let o=1;o<r.p.length;o++){let c=r.p[o-1],l=r.p[o],u=this.nodes[c],h=this.nodes[l],d=dt(u,h);if(d<.01){r.along.push(r.length);continue}r.length+=d,r.along.push(r.length),r.d&&(this.edges[c].push([l,a,d]),r.o||this.edges[l].push([c,a,d]));let f=[a,o];for(let[m,x]of[[512,this.roadTiles],[48,this.cells]])for(let g=Math.floor((Math.min(u[0],h[0])-r.w)/m);g<=Math.floor((Math.max(u[0],h[0])+r.w)/m);g++)for(let p=Math.floor((Math.min(u[1],h[1])-r.w)/m);p<=Math.floor((Math.max(u[1],h[1])+r.w)/m);p++)i(x,g+"_"+p,f)}})}ground(e,t){let{bounds:n,step:i,width:r,height:a}=this.dem,o=Hn((e-n[0])/i,0,r-1.00001),c=Hn((t-n[1])/i,0,a-1.00001),l=Math.floor(o),u=Math.floor(c),h=o-l,d=c-u,f=l+u*r,m=this.heights;return(h+d<=1?m[f]+(m[f+1]-m[f])*h+(m[f+r]-m[f])*d:m[f+r+1]+(m[f+r]-m[f+r+1])*(1-h)+(m[f+1]-m[f+r+1])*(1-d))*.01}surface(e,t,n,i,r){if(ps.has(e.id))return ms;if(!e.bridge)return this.ground(i,r);let a=this.nodes[e.p[0]],o=this.nodes[e.p.at(-1)],c=(e.along[t-1]+n*(e.along[t]-e.along[t-1]))/e.length;return Math.max(this.ground(i,r),this.ground(...a)*(1-c)+this.ground(...o)*c+Math.sin(c*Math.PI)*Math.min(4,e.length*.04))}nearest(e,t=()=>!0,n=85){let i=null,r=n;for(let a=Math.floor((e[0]-n)/48);a<=Math.floor((e[0]+n)/48);a++)for(let o=Math.floor((e[1]-n)/48);o<=Math.floor((e[1]+n)/48);o++)for(let[c,l]of this.cells.get(a+"_"+o)||[]){let u=this.roads[c];if(!t(u))continue;let h=this.nodes[u.p[l-1]],d=this.nodes[u.p[l]],f=gs(e,h,d),m=dt(e,f);m<r&&(r=m,i={r:u,i:l,q:f,d:m,a:h,b:d,yaw:Math.atan2(d[0]-h[0],d[1]-h[1])})}return i}legal(e,t,n){return t<0?!0:(this.rules.get(this.roads[t].id+"/"+e)||[]).every(([r,a])=>r.startsWith("only_")?n.id===a:n.id!==a)}route(e,t){let n=this.nearest(e,d=>d.d,220),i=this.nearest(t,d=>d.d,220);if(!n||!i)return[];let r=i.q,a=[],o=new Map,c=new Map,l=d=>{a.push(d);let f=a.length-1;for(;f;){let m=f-1>>1;if(a[m].f<=d.f)break;a[f]=a[m],f=m}a[f]=d},u=()=>{let d=a[0],f=a.pop();if(a.length){let m=0;for(;m*2+1<a.length;){let x=m*2+1;if(x+1<a.length&&a[x+1].f<a[x].f&&x++,a[x].f>=f.f)break;a[m]=a[x],m=x}a[m]=f}return d},h=(d,f,m,x)=>{let g=d+"/"+f;m>=(o.get(g)??1/0)||(o.set(g,m),c.set(g,x),l({n:d,ri:f,g:m,f:m+dt(this.nodes[d],r),key:g}))};if(n.r===i.r&&n.i===i.i&&(!n.r.o||i.q[2]>=n.q[2]))return[[...n.q.slice(0,2),n.r.index],[...i.q.slice(0,2),i.r.index]];for(h(n.r.p[n.i],n.r.index,dt(n.q,n.b),null),n.r.o||h(n.r.p[n.i-1],n.r.index,dt(n.q,n.a),null);a.length;){let d=u();if(d.g===o.get(d.key)){if((d.n===i.r.p[i.i-1]||!i.r.o&&d.n===i.r.p[i.i])&&this.legal(d.n,d.ri,i.r)){let f=[[...r.slice(0,2),i.r.index]],m=d.key;for(;m;){let[x,g]=m.split("/").map(Number);f.push([...this.nodes[x].slice(0,2),g]),m=c.get(m)}return f.push([...n.q.slice(0,2),n.r.index]),f.reverse().filter((x,g,p)=>g===0||dt(x,p[g-1])>.12)}for(let[f,m,x]of this.edges[d.n]){let g=this.roads[m];this.legal(d.n,d.ri,g)&&h(f,m,d.g+x*(g.k==="service"?1.06:1),d.key)}}}return[]}};var Ui=class{constructor(){this.pos=[],this.uv=[],this.colors=[]}tri(e,t,n,i=[0,0],r=[1,0],a=[1,1]){if(this.pos.push(...e,...t,...n),this.uv.push(...i,...r,...a),this.tint)for(let o=0;o<3;o++)this.colors.push(this.tint.r,this.tint.g,this.tint.b)}quad(e,t,n,i,r=1,a=1){this.tri(e,t,n,[0,0],[r,0],[r,a]),this.tri(e,n,i,[0,0],[r,a],[0,a])}mesh(e){let t=new Ye,n=new Float32Array(this.pos),i=new Float32Array(n.length);for(let r=0;r<n.length;r+=9){let a=n[r+3]-n[r],o=n[r+4]-n[r+1],c=n[r+5]-n[r+2],l=n[r+6]-n[r],u=n[r+7]-n[r+1],h=n[r+8]-n[r+2],d=o*h-c*u,f=c*l-a*h,m=a*u-o*l,x=1/(Math.sqrt(d*d+f*f+m*m)||1);d*=x,f*=x,m*=x;for(let g=r;g<r+9;g+=3)i[g]=d,i[g+1]=f,i[g+2]=m}return t.setAttribute("position",new Mt(n,3)),t.setAttribute("normal",new Mt(i,3)),t.setAttribute("uv",new Le(this.uv,2)),this.colors.length&&t.setAttribute("color",new Le(this.colors,3)),new Ee(t,e)}};function Dn(s,e,t){let n=!1;for(let i=0,r=t.length-1;i<t.length;r=i++){let a=t[i],o=t[r];a[1]>e!=o[1]>e&&s<(o[0]-a[0])*(e-a[1])/(o[1]-a[1])+a[0]&&(n=!n)}return n}function xp(s,e,t,n){let i=e.concat(...t),r=a=>a.map(o=>new ae(...o));for(let[a,o,c]of rn.triangulateShape(r(e),t.map(r))){let l=[i[a],i[o],i[c]].map(([u,h])=>[u,n,h]);s.tri(l[2],l[1],l[0])}}function Te(s,e,t,n,i,r,a,o){let c=new Ee(new Ft(e,t,n),o);return c.position.set(i,r,a),c.castShadow=c.receiveShadow=!0,s.add(c),c}function It(s,e,t,n,i,r,a,o,c=16){let l=new Ee(new gn(e,t,n,c),o);return l.position.set(i,r,a),l.castShadow=l.receiveShadow=!0,s.add(l),l}var gt=(s,e=.82)=>new He({color:s,roughness:e});function _p(s,e){let t=[[[-740.82,179.19],[-734.61,179.55]],[[-734.79,182.38],[-721.6,183.15]],[[-721.43,180.33],[-716.85,180.59]]],n=e.ground(-728.3,180);for(let[i,[r,a]]of t.entries()){let o=a[0]-r[0],c=a[1]-r[1],l=Math.hypot(o,c),u=c/l,h=-o/l,d=(v,y,_)=>[r[0]+o*v+u*_,n+y,r[1]+c*v+h*_],f=i===1?34.65:31.7,m=i===1?[9.5,12.7,9.5]:i===0?[4.45,6.97]:[6.97,4.45],x=["left","center","right"][i],g=i===1?"wall-stone":"wall-brick",p=Math.max(...m);s("stjohn-"+x).quad(d(0,.08,-.08),d(1,.08,-.08),d(1,p,-.08),d(0,p,-.08));for(let v=0;v<m.length-1;v++){let y=v/(m.length-1),_=(v+1)/(m.length-1),w=m[v],M=m[v+1];s("historic-roof").quad(d(y,w,0),d(_,M,0),d(_,M,f),d(y,w,f)),s(g).quad(d(y,-.15,f),d(_,-.15,f),d(_,M,f),d(y,w,f),l/3,p/3)}for(let v of[0,1]){let y=m[v===0?0:m.length-1];if(s(g).quad(d(v,-.2,0),d(v,-.2,f),d(v,y,f),d(v,y,0),f/3,y/3),i!==1)for(let _=1;_<6;_++){let w=_*f/6;s("glass-sash").quad(d(v===0?-.01:1.01,1,w-.65),d(v===0?-.01:1.01,1,w+.65),d(v===0?-.01:1.01,3.3,w+.65),d(v===0?-.01:1.01,3.3,w-.65))}}i===1&&(s("frame").quad(d(.494,12.65,0),d(.51,12.65,0),d(.51,14.48,0),d(.494,14.48,0)),s("frame").quad(d(.456,13.91,0),d(.548,13.91,0),d(.548,14.06,0),d(.456,14.06,0)))}}var Hv={museum:"UNIVERSITY MUSEUM",fire:"OXFORD FIRE DEPARTMENT"};function vp(s,e){for(let[t,n]of Object.entries(Hv)){let i=e(n,t==="fire"?"#533b32":"#875b48","#eee7d5",1024);s["inscription-"+t]=new He({map:i,roughness:.88,side:Ve})}}function yp(s,e,t,n,i){let r=t.roof[2];function a(o,c){let l=null,u=1/0;for(let h=0;h<e.length;h++){let d=e[h],f=e[(h+1)%e.length],m=n(d,f);if(m.len<3)continue;let x=Math.hypot(o-m.mid[0],c-m.mid[1]);x<u&&(l=m,u=x)}return l}if(s===188827132){let o=a(-933,165);if(!o)return;let c=o.ground,l=Math.min(18,o.len*.96),u=c+Math.min(12,Math.max(8,r-c-.35)),h=2.05;o.panel("glass-shop",-l*.46,l*.46,c+.5,u-.38,.16,[4,1]);for(let d=0;d<4;d++){let f=o.post((-.42+d*.28)*l,h-.25,.24);f!==null&&o.box("frame",f-.24,f+.24,c+.42,u-.28,h,h-.5)}o.box("ledge",-l*.54,l*.54,u-.35,u,h+.12,-.28),i("frame").tri(o.pt(-l*.56,u,h+.12),o.pt(l*.56,u,h+.12),o.pt(0,u+l*.24,h+.12)),i("historic-roof").quad(o.pt(-l*.56,u,h+.12),o.pt(0,u+l*.24,h+.12),o.pt(0,u+l*.24,-2.5),o.pt(-l*.56,u,-2.5)),i("historic-roof").quad(o.pt(0,u+l*.24,h+.12),o.pt(l*.56,u,h+.12),o.pt(l*.56,u,-2.5),o.pt(0,u+l*.24,-2.5));for(let d=0;d<4;d++)o.box("ledge",-l*.54,l*.54,c+d*.11,c+(d+1)*.11,h+1.35-d*.33)}else if(s===318264954){let o=a(-617,242);if(!o)return;o.panel("wall-brick",-o.len*.499,o.len*.499,o.ground-.05,r,.41,[o.len/3,(r-o.ground)/3]),o.box("ledge",-o.len*.5,o.len*.5,r-.14,r+.055,.51);let c=Math.min(r-.6,o.ground+3.85),l=Math.min(10,o.len*.68);o.panel("inscription-museum",-l/2,l/2,c-.49,c+.48,.445)}else if(s===318275096||s===318274786)for(let o=0;o<e.length;o++){let c=n(e[o],e[(o+1)%e.length]);if(c.len<18||s===318275096&&c.mid[0]<-1157)continue;c.panel("wall-brick",-c.len/2,c.len/2,c.ground-.18,r,.21,[c.len/3,(r-c.ground)/3]);let l=Math.round(c.len/3.65),u=r-c.ground;for(let h=0;h<l;h++){let d=((h+.5)/l-.5)*c.len;c.panel("reveal",d-.57,d+.57,c.ground+.72,r-.34,.24);for(let f=0;f<4;f++){let m=c.ground+.82+f*(u-.95)/4;c.panel("glass-shop",d-.46,d+.46,m,m+(u-.95)*.204,.26)}}c.box("ledge",-c.len/2,c.len/2,r-.14,r+.08,.37)}else if(s===264946753){let o=a(-190,-66);if(!o)return;let c=o.len,l=o.ground,u=10,h=c/u;o.panel("glass-shop",-c*.496,c*.496,l+.14,l+3.54,.17,[u,1]);for(let d=0;d<=u;d++){let f=-c*.5+d*h;o.box("ledge",f-.25,f+.25,l+.12,l+3.5,.85,-.03)}for(let d=0;d<u;d++){let f=-c*.5+(d+.5)*h;for(let m=0;m<10;m++){let x=Math.PI*m/10,g=Math.PI*(m+1)/10,p=(v,y,_)=>o.pt(f+Math.cos(v)*y,l+3.08+Math.sin(v)*_,.86);i("ledge").quad(p(x,h*.46,.53),p(g,h*.46,.53),p(g,h*.49,.83),p(x,h*.49,.83))}}}else if(s===590970626){let o=a(295,3571);if(!o)return;let c=o.ground,l=o.len;o.box("awning",-l*.56,l*.56,c+2.85,c+3.12,1.6),o.panel("inscription-fire",-l*.48,l*.48,c+2.85,c+3.13,1.615)}}function Vv(s,e){let t=[];for(let n=0;n<s.length;n++){let i=s[n],r=s[(n+1)%s.length],a=e(i),o=e(r);if(a>=-1e-7&&t.push(i),a>1e-7&&o<-1e-7||a<-1e-7&&o>1e-7){let c=a/(a-o);t.push([i[0]+c*(r[0]-i[0]),i[1]+c*(r[1]-i[1])])}}return t}function Mp(s,e,t,n,i){let[r,a,o,c,l,u]=n,h=Math.cos(a),d=Math.sin(a),f=T=>h*T[0]+d*T[1],m=T=>h*T[1]-d*T[0],x=e.map(f),g=e.map(m),p=Math.min(...x),v=Math.max(...x),y=Math.min(...g),_=Math.max(...g),w=2*c/Math.max(.2,_-y),M=[];r==="flat"||c<.05?M=[()=>0]:r==="shed"?M=[T=>(m(T)-y)*w*.5]:(M=[T=>(m(T)-y)*w,T=>(_-m(T))*w],(r==="hip"||r==="mansard")&&M.push(T=>(f(T)-p)*w,T=>(v-f(T))*w),(r==="mansard"||r==="gambrel")&&(M=M.map(T=>R=>T(R)*2.7),M.push(()=>c)));let b=e.concat(...t),S=T=>T.map(R=>new ae(...R)),E=s("surface-"+l);E.tint=new Ne(u);for(let T of rn.triangulateShape(S(e),t.map(S))){let R=T.map(D=>b[D]);for(let D=0;D<M.length;D++){let U=R;for(let P=0;P<M.length&&U.length;P++)P!==D&&(U=Vv(U,O=>M[P](O)-M[D](O)));for(let P=1;P+1<U.length;P++){let O=[U[0],U[P+1],U[P]];E.tri(...O.map(H=>[H[0],o+M[D](H),H[1]]),...O.map(H=>[f(H)/3,m(H)/3]))}}}if(M.length>1||r==="shed"){let T=s(i);for(let R of[e,...t])for(let D=0;D<R.length;D++){let U=R[D],P=R[(D+1)%R.length],O=[0,1];for(let F=0;F<M.length;F++)for(let J=F+1;J<M.length;J++){let B=M[F](U)-M[J](U),z=M[F](P)-M[J](P);B*z<0&&O.push(B/(B-z))}O.sort((F,J)=>F-J);let H=F=>[U[0]+(P[0]-U[0])*F,U[1]+(P[1]-U[1])*F];for(let F=1;F<O.length;F++){let J=H(O[F-1]),B=H(O[F]),z=Math.min(...M.map(K=>K(J))),W=Math.min(...M.map(K=>K(B)));Math.max(z,W)<.035||T.quad([J[0],o,J[1]],[B[0],o,B[1]],[B[0],o+W,B[1]],[J[0],o+z,J[1]],Math.hypot(B[0]-J[0],B[1]-J[1])/3,Math.max(z,W)/3)}}}}var Sp=[{id:451755565,name:"Neilson\u2019s Department Store",photo:"0258",edge:[[44.84,65.37],[39.49,91.48]],side:"west",aspect:2.967741935483871,form:"shopfront",wall:"brick",widthM:26.65,source:"https://www.loc.gov/pictures/collection/hh/item/ms0258.photos.093438p/",creator:"Boucher, Jack E.",date:"1975",image:"https://tile.loc.gov/storage-services/service/pnp/habshaer/ms/ms0200/ms0258/photos/093438pv.jpg",license:"U.S. government HABS photograph, Library of Congress; no known restrictions",adaptation:"Traced silhouette, cropped, and lightly toned from grayscale. Non-frontal faces reconstructed."},{id:451755566,name:"Oxford City Hall",photo:"0267",edge:[[51.75,43.57],[55.97,23.11]],side:"west",aspect:1.1071428571428572,form:"double gable",wall:"brick",widthM:20.89,source:"https://www.loc.gov/pictures/collection/hh/item/ms0267.photos.093412p/",creator:"Boucher, Jack E.",date:"1975",image:"https://tile.loc.gov/storage-services/service/pnp/habshaer/ms/ms0200/ms0267/photos/093412pv.jpg",license:"U.S. government HABS photograph, Library of Congress; no known restrictions",adaptation:"Traced silhouette, cropped, and lightly toned from grayscale. Non-frontal faces reconstructed."},{id:421471601,name:"St. Peter\u2019s Episcopal Church",photo:"0261",edge:[[-242.91,-24.8],[-246.02,-9.5]],side:"west",aspect:.5257214554579673,form:"spire",wall:"brick",widthM:15.61,source:"https://www.loc.gov/pictures/collection/hh/item/ms0261.photos.093377p/",creator:"Boucher, Jack E.",date:"1975",image:"https://tile.loc.gov/storage-services/service/pnp/habshaer/ms/ms0200/ms0261/photos/093377pv.jpg",license:"U.S. government HABS photograph, Library of Congress; no known restrictions",adaptation:"Traced silhouette, cropped, and lightly toned from grayscale. Non-frontal faces reconstructed."},{id:627882381,name:"Howry\u2013Hull House (Fiddler\u2019s Folly)",photo:"0263",edge:[[114.69,-419.09],[117.3,-432.47]],side:"west",aspect:1.3744493392070485,form:"gallery",wall:"lap",widthM:13.63,source:"https://www.loc.gov/pictures/collection/hh/item/ms0263.photos.093418p/",creator:"Boucher, Jack E.",date:"1975",image:"https://tile.loc.gov/storage-services/service/pnp/habshaer/ms/ms0200/ms0263/photos/093418pv.jpg",license:"U.S. government HABS photograph, Library of Congress; no known restrictions",adaptation:"Traced silhouette, cropped, and lightly toned from grayscale. Non-frontal faces reconstructed."},{id:625160900,name:"Isom Place",photo:"0265",edge:[[-108.64,-259.93],[-87.79,-255.94]],side:"south",aspect:2.2,form:"portico",wall:"lap",widthM:21.23,source:"https://www.loc.gov/pictures/collection/hh/item/ms0265.photos.093428p/",creator:"Boucher, Jack E.",date:"1975",image:"https://tile.loc.gov/storage-services/service/pnp/habshaer/ms/ms0200/ms0265/photos/093428pv.jpg",license:"U.S. government HABS photograph, Library of Congress; no known restrictions",adaptation:"Traced silhouette, cropped, and lightly toned from grayscale. Non-frontal faces reconstructed."},{id:451773164,name:"Sullivan Law Office",photo:"0266",edge:[[-95.71,-45.5],[-85.14,-43.77]],side:"south",aspect:1.083916083916084,form:"turret",wall:"lap",widthM:10.71,source:"https://www.loc.gov/pictures/collection/hh/item/ms0266.photos.093425p/",creator:"Boucher, Jack E.",date:"1975",image:"https://tile.loc.gov/storage-services/service/pnp/habshaer/ms/ms0200/ms0266/photos/093425pv.jpg",license:"U.S. government HABS photograph, Library of Congress; no known restrictions",adaptation:"Traced silhouette, cropped, and lightly toned from grayscale. Non-frontal faces reconstructed."}];var wp=new Map(Sp.map(s=>[s.id,s]));function Tp(s,e,t){let n=t.side==="west"?[-1,0]:[0,1],i=t.edge.slice().sort((w,M)=>(w[0]-M[0])*n[1]-(w[1]-M[1])*n[0]),[r,a]=i,o=a[0]-r[0],c=a[1]-r[1],l=Math.hypot(o,c),u=l/t.aspect,h=-c/l,d=o/l,f=h*n[0]+d*n[1]>0?1:-1,m=h*f,x=d*f,g=e.ground((a[0]+r[0])/2,(a[1]+r[1])/2)+.09,p=(w,M,b)=>[r[0]+o*w+m*b,g+M,r[1]+c*w+x*b],v=s("habs-"+t.photo),y=t.photo==="0261"?.72:.37;v.quad(p(0,0,y),p(1,0,y),p(1,u,y),p(0,u,y));let _=(w,M,b,S,E)=>{let T=(w+M)/2,R=p(w,b,.21),D=p(M,b,.21),U=p(T,S,.21);s("wall-"+t.wall).tri(R,D,U),s("historic-roof").quad(R,U,p(T,S,-E),p(w,b,-E)),s("historic-roof").quad(U,D,p(M,b,-E),p(T,S,-E))};if(t.form==="double gable"&&(_(.56,.98,u*.78,u*.995,6.5),_(.025,.295,u*.58,u*.749,4.2)),t.form==="spire"||t.form==="turret"){let w=t.form==="spire",M=w?.22:.25,b=l*(w?.124:.225),S=u*(w?.46:.62),E=p(M,0,-b+.1),T=s("wall-"+t.wall),R=s("historic-roof"),D=w?4:8,U=Math.atan2(c,o),P=(O,H,F=1)=>[E[0]+b*F*Math.cos(U+(O+.5)*Math.PI*2/D),g+H,E[2]+b*F*Math.sin(U+(O+.5)*Math.PI*2/D)];for(let O=0;O<D;O++)T.quad(P(O,0),P(O+1,0),P(O+1,S),P(O,S),2,S/3),R.tri(P(O,S,1.08),P(O+1,S,1.08),[E[0],g+u,E[2]])}if(t.form==="gallery"||t.form==="portico"){let w=u*(t.form==="gallery"?.5:.78);s("ledge").quad(p(.02,w,.24),p(.98,w,.24),p(.98,w,-1.65),p(.02,w,-1.65))}}function Oc(s,e,t,n,i,r,a,o,c=!0){let{panel:l,box:u,pt:h}=s,d=t-i/2,f=t+i/2,m=(Math.imul(Math.round(s.mid[0]*10)|0,73856093)^Math.imul(Math.round(s.mid[1]*10)|0,19349663))>>>0,x=a==="display"?"glass-display-"+m%3:a==="picture"?"glass-shop":a==="stained"?"stained":"glass-sash",g=a==="arched"||a==="stained",p=Math.max(.055,Math.min(.105,Math.min(i,r)*.055)),v=.085;if(l("reveal",d-.075,f+.075,n-.055,n+r+.075,.018,[i/2,r/2]),l(x,d+.025,f-.025,n+.025,n+r-.025,.043,[i/1.55,r/1.55]),u("frame",d-.105,d-.035,n-.08,n+r+.08,v,.035),u("frame",f+.035,f+.105,n-.08,n+r+.08,v,.035),u("frame",d-.035,f+.035,n+r+.035,n+r+.105,v,.035),u("frame",d-.035,f+.035,n-.105,n-.035,v,.035),a!=="display"&&a!=="picture"&&(u("frame",t-p/2,t+p/2,n+.015,n+r-.015,.071,.043),u("frame",d+.02,f-.02,n+r*.49-p/2,n+r*.49+p/2,.071,.043)),a==="display"&&i>2&&u("frame",t-.035,t+.035,n,n+r,.078,.043),u("ledge",d-.17,f+.17,n-.19,n-.105,.17,.025),g){let y=h(t,n+r,.074),_=[],w=[];for(let M=0;M<=12;M++){let b=Math.PI*M/12;_.push(h(t+Math.cos(b)*(i*.5+.06),n+r+Math.sin(b)*i*.34,.075)),w.push(h(t+Math.cos(b)*(i*.5-.035),n+r+Math.sin(b)*i*.28,.079))}for(let M=0;M<12;M++)e("frame").quad(w[M],w[M+1],_[M+1],_[M]),e("glass-shop").tri(y,h(t+Math.cos(Math.PI*M/12)*i*.46,n+r+Math.sin(Math.PI*M/12)*i*.27,.081),h(t+Math.cos(Math.PI*(M+1)/12)*i*.46,n+r+Math.sin(Math.PI*(M+1)/12)*i*.27,.081))}if(o)for(let y of[-1,1]){let _=y<0?d-i*.29:f+.1,w=y<0?d-.1:f+i*.29;l("shutter",_,w,n,n+r,.064,[.8,r/1.7]);let M=Math.min(6,Math.max(1,Math.floor(r/.32)));for(let b=0;b<M;b++){let S=n+.12+(b+.5)*(r-.24)/M;e("frame").quad(h(_,S,.071),h(w,S,.071),h(w,S+.018,.071),h(_,S+.018,.071))}}if(c){let _=d-.115,w=f+.115,M=n-.115,b=n+r+.115,S=.118,E=e("ink");E.quad(h(_,M,S),h(w,M,S),h(w,M+.026,S),h(_,M+.026,S)),E.quad(h(_,b-.026,S),h(w,b-.026,S),h(w,b,S),h(_,b,S)),E.quad(h(_,M+.026,S),h(_+.026,M+.026,S),h(_+.026,b-.026,S),h(_,b-.026,S)),E.quad(h(w-.026,M+.026,S),h(w,M+.026,S),h(w,b-.026,S),h(w-.026,b-.026,S))}}function Ap(s,e,t,n,i,r,a,o,c,l){let u=Math.cos(t)*s[0]+Math.sin(t)*s[1],h=Math.cos(t)*s[1]-Math.sin(t)*s[0];if(e==="shed")return n+(h-r)*l*.5;let d=Math.min((h-r)*l,(a-h)*l);return e==="hip"&&(d=Math.min(d,(u-o)*l,(c-u)*l)),(e==="gambrel"||e==="mansard")&&(d=Math.min(i,Math.max(0,d*2.7))),n+Math.max(0,Math.min(i,d))}function Ep(s,e,t){let[n,i,r,a]=t.roof;if(!["gable","hip","shed","gambrel","mansard"].includes(n)||a<.22)return;let o=Math.cos(i),c=Math.sin(i),l=e.map(_=>o*_[0]+c*_[1]),u=e.map(_=>o*_[1]-c*_[0]),h=Math.min(...l),d=Math.max(...l),f=Math.min(...u),m=Math.max(...u),x=2*a/Math.max(.2,m-f),g=s("ledge"),p=s("porch"),v=s("surface-"+t.roof[4]),y=s("ink");for(let _=0;_<e.length;_++){let w=e[_],M=e[(_+1)%e.length],b=M[0]-w[0],S=M[1]-w[1],E=Math.hypot(b,S)||1,T=b/E,R=S/E,D=[(w[0]+M[0])/2,(w[1]+M[1])/2],P=Dn(D[0]-R*.04,D[1]+T*.04,e)?-1:1,O=-R*P,H=T*P,F=Math.abs(T*o+R*c);if(n==="gable"&&F<.66||n==="shed"&&F<.66)continue;let J=Ap(w,n,i,r,a,f,m,h,d,x),B=Ap(M,n,i,r,a,f,m,h,d,x),z=.24,W=.115,K=(se,V,Q)=>[se[0]+O*Q,V,se[1]+H*Q];v.quad(K(w,J,0),K(M,B,0),K(M,B,z),K(w,J,z),E/3,z/3),p.quad(K(w,J-.035,0),K(M,B-.035,0),K(M,B-.035,z),K(w,J-.035,z),E/2,z/.3),g.quad(K(w,J,z),K(M,B,z),K(M,B-W,z),K(w,J-W,z),E/2,W/.15),y.quad(K(w,J-W*.22,z+.006),K(M,B-W*.22,z+.006),K(M,B-W*.22+.024,z+.006),K(w,J-W*.22+.024,z+.006))}}function Rp(s,e){let t=String(s?.[5]??""),n=s?.[0];if(!t||!Array.isArray(n)||!n.length)return null;let i=n[0];return(e instanceof Map?e.get(t):e?.filter(a=>String(a.id)===t))?.find(a=>Math.abs(a.anchor?.[0]-i[0])<.005&&Math.abs(a.anchor?.[1]-i[1])<.005)||null}function Cp(s){let e=new Map;for(let t of s||[]){let n=String(t.id),i=e.get(n)||[];i.push(t),e.set(n,i)}return e}function qv(s,e,t){let n=e[0],i=t?.[0],r=t?.[1];if(!i||!r)return null;let a=r[0]-i[0],o=r[1]-i[1],c=Math.hypot(a,o);if(c<1.3)return null;let l=a/c,u=o/c,h=[(i[0]+r[0])/2,(i[1]+r[1])/2],d=Dn(h[0]-u*.04,h[1]+l*.04,n),f=d?-1:1,m=-u*f,x=l*f;return{len:c,mid:h,ground:s.ground(...h),pt:(g,p,v=0)=>[h[0]+l*g+m*v,p,h[1]+u*g+x*v]}}function Xv(s,e,t,n){if(!e||t-e.ground<1.8)return 0;let{len:i,ground:r,pt:a}=e,o=s("ink"),c=0;if(n==="horizontal-lap"||n==="board-course"){let l=n==="horizontal-lap"?.23:.31,u=.018,h=.013,d=s(n==="horizontal-lap"?"wall-lap":"wall-board");for(let f=r+.24;f<t-.08&&c<24;f+=l)d.quad(a(-i/2,f,u),a(i/2,f,u),a(i/2,f+h,u),a(-i/2,f+h,u),i/3,h/.06),d.quad(a(-i/2,f,u-.012),a(i/2,f,u-.012),a(i/2,f,u),a(-i/2,f,u),i/3,.012),c++}else if(n==="brick-running-bond"||n==="wood-shingle"||n==="stone-joint"||n==="block-joint"){let l=n==="brick-running-bond"?.075:n==="wood-shingle"?.19:n==="stone-joint"?.31:.39,u=n==="brick-running-bond"?.62:n==="wood-shingle"?.48:n==="stone-joint"?.85:1,h=.014,d=.022,f=0;for(let m=r+.12;m<t-.05&&f<48;m+=l,f++){o.quad(a(-i/2,m,d),a(i/2,m,d),a(i/2,m+h,d),a(-i/2,m+h,d),i/3,h/.08),c++;let x=f%2?u*.5:0;for(let g=-i/2+x+u;g<i/2;g+=u)o.quad(a(g-h/2,m+h,d),a(g+h/2,m+h,d),a(g+h/2,m+l-h,d),a(g-h/2,m+l-h,d),h/.08,(l-h)/.2),c++}}return c}function jv(s,e,t){if(!e||!Number.isFinite(t.eaveHeight)||!Number.isFinite(t.roofRise)||t.roofRise<.25)return 0;let{len:n,pt:i}=e,r=t.eaveHeight,a=t.roofRise,o=t.wall||"board",c=s(`wall-${o}`),l=s("ink");c.tri(i(-n/2,r,.035),i(n/2,r,.035),i(0,r+a,.035),[0,0],[n/3,0],[n/6,a/3]);let u=.035;function h(d,f,m,x){let g=m-d,p=x-f,v=Math.hypot(g,p)||1,y=-p/v*u,_=g/v*u;l.quad(i(d-y,f-_,.052),i(m-y,x-_,.052),i(m+y,x+_,.052),i(d+y,f+_,.052))}return h(-n/2,r,0,r+a),h(0,r+a,n/2,r+a),h(-n/2,r,n/2,r),4}function Pp(s,e,t,n){if(!n||!t||String(t[5])!==String(n.id))return{courses:0,gable:0};let i=t[7]||{},r=n.frontEdge||i.front?.edge,a=qv(e,t,r);if(!a)return{courses:0,gable:0};let o=Number.isFinite(n.eaveHeight)?n.eaveHeight:i.roof?.[2]??a.ground+3.2,c=n.wallPattern?Xv(s,a,o,n.wallPattern):0,l=n.gableFront?jv(s,a,n):0;return{courses:c,gable:l}}function Aa(s,e,t,n,i,r,a=0,o=null){let c=n[0]-t[0],l=n[1]-t[1],u=Math.hypot(c,l)||1,h=c/u,d=l/u,f=[(t[0]+n[0])/2,(t[1]+n[1])/2],m=Dn(f[0]-d*.06,f[1]+h*.06,i)?-r:r,x=-d*m,g=h*m,p=(w,M,b=0)=>[f[0]+h*w+x*(b+a),M,f[1]+d*w+g*(b+a)],v=(w,M,b,S,E,T=0,R=[1,1])=>s(w).quad(p(M,S,T),p(b,S,T),p(b,E,T),p(M,E,T),...R);return{len:u,mid:f,pt:p,panel:v,box:(w,M,b,S,E,T,R=0)=>{v(w,M,b,S,E,T);let D=s(w);D.quad(p(M,E,R),p(M,E,T),p(b,E,T),p(b,E,R)),D.quad(p(M,S,R),p(M,S,T),p(M,E,T),p(M,E,R)),D.quad(p(b,S,T),p(b,S,R),p(b,E,R),p(b,E,T)),D.quad(p(M,S,T),p(M,S,R),p(b,S,R),p(b,S,T))},post:(w,M,b)=>{for(let S of[0,.45,-.45,.85,-.85,1.35,-1.35]){let E=w+S;if(Math.abs(E)+b>u*.5)continue;let[T,,R]=p(E,0,M);if(!(e.cells.get(Math.floor(T/48)+"_"+Math.floor(R/48))||[]).some(([P,O])=>{let H=e.roads[P],F=gs([T,R],e.nodes[H.p[O-1]],e.nodes[H.p[O]]);return Math.hypot(T-F[0],R-F[1])<b+.54}))return o&&o.push([T,R,b]),E}return null},ground:e.ground(...f)}}function Ip(s,e,t,n,i,r,a){let{len:o,box:c,panel:l,pt:u}=s,h=t.flags||[],d=t.use==="shop",f=t.use==="campus"||t.use==="civic",m=t.stories,x=i-a;if(x<1.9||o<1.65)return;let g=r?(t.door??.5)*o-o/2:null,p=Math.max(1,Math.min(28,r&&t.bays?t.bays:Math.round(o/(d?4.3:f?3.9:4.8)))),v=o/p,y=Math.max(1,Math.min(m,Math.floor(x/2.05))),_=Math.min(f?2.3:1.65,x/y*.57);for(let E=0;E<y;E++){let T=a+.15+(E+.28)*x/y;for(let R=0;R<p;R++){let D=-o/2+(R+.5)*v;if(E===0&&g!==null&&Math.abs(D-g)<(d?1.65:1.4))continue;let U=r&&d&&E===0,P=r&&h.includes("picture")&&E===0,O=Math.min(v*.68,U?3.7:P?2.7:f?1.52:1.24);O<.55||Oc(s,e,D,U?a+.5:T,O,U?Math.min(x/y*.8,3.05):_,U?"display":P?"picture":h.includes("stained")?"stained":h.includes("arches")?"arched":"sash",r&&h.includes("shutters"))}}if(h.includes("wainscot")&&l("wall-brick",-o/2,o/2,a+.035,a+Math.min(1.05,x*.25),.035,[o/3,.35]),!r)return;if(h.includes("glassentry")&&l("glass-shop",-Math.min(3.6,o*.26),Math.min(3.6,o*.26),a+.15,Math.min(i-.35,a+x*.81),.09),h.includes("brickpilaster")||h.includes("buttress")){let E=Math.max(2,Math.min(10,p+1));for(let T=0;T<E;T++){let R=-o*.485+T*o*.97/(E-1),D=h.includes("buttress")?.31:.19;c("wall-brick",R-D,R+D,a+.03,i-.26,h.includes("buttress")?.46:.18),c("ledge",R-D-.03,R+D+.03,i-.43,i-.26,.38)}}if(h.includes("dormer")&&o>4){let T=i+.02,R=Math.min(2.6,o*.25);c("wall-"+t.wall,0-R/2,0+R/2,T,T+1.45,.02,-1.6),l("glass-sash",0-R*.25,0+R*.25,T+.18,T+1.28,.06),e("frame").tri(u(0-R*.52,T+1.42,.08),u(0+R*.52,T+1.42,.08),u(0,T+2.25,.08)),e("historic-roof").quad(u(0-R*.57,T+1.45,.12),u(0,T+2.26,.12),u(0,T+2.26,-1.7),u(0-R*.57,T+1.45,-1.7)),e("historic-roof").quad(u(0,T+2.26,.12),u(0+R*.57,T+1.45,.12),u(0+R*.57,T+1.45,-1.7),u(0,T+2.26,-1.7))}let w=d||f?1.55:1.04,M=a+Math.min(x-.16,f?2.9:2.29);c("frame",g-w*.5-.09,g+w*.5+.09,a+.08,M+.12,.105),l(d?"glass-shop":"door",g-w*.5,g+w*.5,a+.1,M,.12),c("hardware",g+w*.3-.025,g+w*.3+.025,a+1.03,a+1.09,.175,.115),c("hardware",g+w*.3-.018,g+w*.3+.018,a+1.19,a+1.226,.164,.12),h.includes("transom")&&l("glass-shop",g-w*.5,g+w*.5,M+.15,Math.min(i-.12,M+.65),.13);let b=t.clearance??0;if(b>.55&&c("ledge",g-w*.72,g+w*.72,a+.04,a+.145,Math.min(.52,b*.55)),(h.includes("cornice")||h.includes("parapet"))&&(c("ledge",-o*.5,o*.5,i-.3,i-.07,.18),c("frame",-o*.5,o*.5,i-.07,i+.12,.27)),h.some(E=>["porch","columns","balcony","awning","pediment"].includes(E))&&b>.8&&!t.planPorch){let E=t.columns??(h.includes("awning")?0:2),T=h.includes("fullwidth")||h.includes("balcony"),R=Math.min(o*.93,T?o:Math.max(4,E*1.55)),D=Math.min(b*.7,f?3.5:2.05),U=Math.max(-o*.5+R*.5,Math.min(o*.5-R*.5,g)),P=Math.min(i-.38,a+(f?Math.min(8,x*.82):2.82));c(h.includes("awning")?"awning":"ledge",U-R/2,U+R/2,P-.16,P,D),e("porch").quad(u(U-R/2,P-.055,.015),u(U+R/2,P-.055,.015),u(U+R/2,P-.055,D),u(U-R/2,P-.055,D),R/3,D/3);for(let O=0;O<E;O++){let H=f?.22:.086,F=s.post(U-R*.44+O*R*.88/Math.max(1,E-1),D-H,H);F!==null&&(s.box("ledge",F-H*1.65,F+H*1.65,a+.08,a+.22,D-H*1.25,D-2*H),c("frame",F-H,F+H,a+.16,P-.15,D,D-2*H),s.box("ledge",F-H*1.55,F+H*1.55,P-.24,P-.12,D-H*1.25,D-2*H),f&&c("ledge",F-H*1.4,F+H*1.4,P-.3,P-.13,D+.05,D-2*H-.05))}if(h.includes("pediment")&&e("frame").tri(u(U-R*.5,P,D),u(U+R*.5,P,D),u(U,P+Math.min(1.8,R*.19),D)),h.includes("balcony")){c("frame",U-R*.5,U+R*.5,P+.94,P+1.03,D,D-.09);for(let O=U-R*.46;O<U+R*.49;O+=.42)l("rail",O-.025,O+.025,P+.02,P+.96,D)}}}function Dp(s,e,t,n,i){if(t[5]===318265043){_p(s,e);return}let[r,a,,,,,,o]=t,{roof:c,wall:l,front:u}=o,h=c[2],d=Math.min(...r.map(p=>e.ground(...p)))-.16,f="wall-"+l,m=o.shells||[[r,...a]];for(let p of m)for(let[v,y]of p.entries())for(let _=0;_<y.length;_++){let w=y[_],M=y[(_+1)%y.length],b=Aa(s,e,w,M,y,v===0?1:-1,0,n);b.panel(f,-b.len/2,b.len/2,d,h,0,[b.len/3,(h-d)/3]);let S=u?.edge,E=v===0&&S&&Hh(w,M,S,.85);o.party?.some(T=>Hh(w,M,T,1))||(o.plan||[]).some(T=>T.kind==="garage"&&Hh(w,M,T.edge,1))||o.homeModel&&E||Ip(b,s,o,d,h,E,Math.min(b.ground,h-2.1))}for(let p of o.plan||[]){let[v,y]=p.edge,_=Aa(s,e,v,y,r,1,0,n),w=_.ground,M=_.len;if(p.kind==="garage"){let b=Math.min(M*.84,5.9);_.panel("frame",-b/2-.09,b/2+.09,w+.07,w+2.35,.08),_.panel("garage",-b/2,b/2,w+.08,w+2.24,.12);continue}for(let b of[-M*.44,M*.44]){let S=_.post(b,0,.09);S!==null&&_.box("frame",S-.09,S+.09,w+.1,Math.min(h,w+2.7),.1,-.1)}p.kind==="screen porch"&&_.panel("screen",-M*.48,M*.48,w+.76,Math.min(h-.15,w+2.48),.01),_.box("ledge",-M/2,M/2,w+.045,w+.19,.08,-.12)}if(o.homeModel){let[p,v]=o.front.edge,y=Aa(s,e,p,v,r,1,.12,n),_=p[1]<v[1]?1:-1,w=b=>(b-.5)*y.len*_,M=y.ground;if(o.homeModel==="628157057"){for(let S of[.16,.41,.64])Oc(y,s,w(S),M+.82,1.23,1.39,"sash",!0);let b=w(.83);y.box("frame",b-.55,b+.55,M+.1,M+2.34,.06),y.panel("door",b-.49,b+.49,M+.12,M+2.26,.075),y.box("ledge",b-1.1,b+1.1,M+.04,M+.2,.86),y.box("frame",b-1.21,b+1.21,M+2.61,M+2.72,.94);for(let S of[-1,1]){let E=y.post(b+S*1.04,.835,.06);E!==null&&y.box("frame",E-.06,E+.06,M+.15,M+2.61,.9,.77)}}else{let[b,S]=[w(.008),w(.815)].sort((T,R)=>T-R);y.panel("wall-brick",b,S,M+.02,M+1,.16,[y.len*.8/3,.34]);for(let T of[.24,.64])Oc(y,s,w(T),M+1.02,2.64,1.25,"picture",!1);let E=w(.45);y.box("frame",E-.56,E+.56,M+.18,M+2.42,.19),y.panel("door",E-.48,E+.48,M+.2,M+2.34,.21);for(let T=0;T<3;T++)y.box("ledge",E-.85,E+.85,M+.08*T,M+.08*(T+1),.91-T*.18)}}for(let p of o.frontages||[]){let[v,y]=p.edge,_=Aa(s,e,v,y,r,1,.22,n);_.panel("wall-"+p.wall,-_.len*.5,_.len*.5,d,h,0,[_.len/3,(h-d)/3]),Ip(_,s,p,d,h,!0,Math.min(_.ground,h-2.1))}yp(t[5],r,o,(p,v)=>Aa(s,e,p,v,r,1,0,n),s);let x=wp.get(t[5]);Mp(s,r,a,c,f),x||Ep(s,r,o),x&&(t[5]!==451755565||r.some(([p])=>p>80))&&Tp(s,e,x);let g=Rp(t,i);g&&Pp(s,e,t,g)}function Hh(s,e,t,n){if(!t)return!1;let[i,r]=t,a=r[0]-i[0],o=r[1]-i[1],c=Math.hypot(a,o)||1,l=(s[0]+e[0])/2-i[0],u=(s[1]+e[1])/2-i[1],h=(l*a+u*o)/c;return Math.abs(l*o-u*a)/c<n&&h>-.2&&h<c+.2&&Math.abs((s[0]-e[0])*o-(s[1]-e[1])*a)/c<n}function Lp(s,e,t,n){let[i,r,a,o,c]=t,l=e.ground(i,r),u=Math.sin(a),h=Math.cos(a),d=(x,g,p)=>[i+h*x+u*p,l+g,r-u*x+h*p],f=(x,g,p,v,y,_)=>s(x).quad(d(g,v,_),d(p,v,_),d(p,y,_),d(g,y,_));f("door",-.54,.54,.1,2.35,.06);let m=(x,g,p,v,y)=>{s(x).quad(d(-g/2,y,.01),d(-g/2,y,v),d(g/2,y,v),d(g/2,y,.01)),f(x,-g/2,g/2,y-p,y,v)};if(m("path",1.55,.14,.85,.16),!(!c||Math.abs(n)%3===1)){m("porch",o,.15,1.65,2.62),m("path",o,.25,1.65,.26);for(let x of[-o*.44,o*.44]){let g=s("white");g.quad(d(x-.06,.18,1.45),d(x+.06,.18,1.45),d(x+.06,2.56,1.45),d(x-.06,2.56,1.45)),g.quad(d(x,.18,1.39),d(x,.18,1.51),d(x,2.56,1.51),d(x,2.56,1.39))}}}var Kv=[[3493176,5401667,7504465],[3953469,6059077,8491095],[3164984,4810565,7176528],[3427899,5138760,7635802]];function Vh(s,e,t,n,i,r){let a=new ra(1,1),o=a.attributes.position,c=a.attributes.normal,l=a.index?Array.from(a.index.array):Array.from({length:o.count},(f,m)=>m),u=new Xe().makeScale(...n).setPosition(...t),h=new Ne,d=new L(.42,.82,.39).normalize();for(let f=0;f<l.length;f++){let m=l[f],x=new L().fromBufferAttribute(o,m).applyMatrix4(u);s.push(x.x,x.y,x.z);let g=Math.floor(f/3),p=new L().fromBufferAttribute(c,m).normalize(),v=Math.abs(Math.sin((g+1)*12.9898+(i+1)*78.233)*43758.5453)%1,y=p.dot(d),_=y>.28&&v>.18?2:y<-.22||v<.24?0:1;h.setHex(r[_]),e.push(h.r,h.g,h.b)}a.dispose()}function hr(s,e,t,n,i){let r=new L(...e),a=new L(...t),o=a.clone().sub(r),c=o.length(),l=new gn(i,n,c,5,1,!1),u=new Gt().setFromUnitVectors(new L(0,1,0),o.normalize());l.applyMatrix4(new Xe().compose(r.add(a).multiplyScalar(.5),u,new L(1,1,1)));let h=l.attributes.position,d=l.index?l.index.array:null;if(d)for(let f=0;f<d.length;f++){let m=d[f];s.push(h.getX(m),h.getY(m),h.getZ(m))}else for(let f=0;f<h.count;f++)s.push(h.getX(f),h.getY(f),h.getZ(f));l.dispose()}function Jv(s){let e=[],t=[],n=[],i=()=>{let h=Math.sin((e.length+n.length+s*41)*12.9898)*43758.5453;return h-Math.floor(h)},r=Kv[s];if(s===3){hr(n,[0,0,0],[0,.7,0],.052,.015);for(let d=0;d<8;d++){let f=.26+d*.085,m=.36*(1-d/10);for(let x=0;x<3;x++){let g=x*2*Math.PI/3+d*1.11,p=Math.cos(g)*m,v=Math.sin(g)*m;hr(n,[0,f,0],[p,f+.035,v],.013,.004),Vh(e,t,[p*.65,f+.055,v*.65],[.1+m*.28,.055+m*.11,.1+m*.28],d*3+x,r)}}}else{hr(n,[0,0,0],[0,.72,0],.055,.016);let h=s===0?7:s===1?9:8;for(let d=0;d<h;d++){let f=d/h*Math.PI*2+s*.47+d%2*.14,m=d===0?0:.27,x=d===0?.835:.56+d%3*.124,g=Math.cos(f)*m,p=Math.sin(f)*m,v=(d===0?.24:.19)+(i()-.5)*.035,y=v*(.88+i()*.22),_=(d===0?.19:.165)+(i()-.5)*.025;if(Vh(e,t,[g,x,p],[v,_,y],d,r),d){let w=[g*.56,.47+d%3*.04,p*.56];hr(n,[0,.33,0],w,.028,.016),hr(n,w,[g,x-.04,p],.016,.005);let M=Math.sin(f)*.09,b=-Math.cos(f)*.09;hr(n,w,[g+M,x-.13,p+b],.012,.004),Vh(e,t,[g+M,x-.085,p+b],[v*.53,_*.52,y*.56],d+20,r)}}}let a=new Ye;a.setAttribute("position",new Le(e,3)),a.setAttribute("color",new Le(t,3)),a.computeVertexNormals();let o=new Ye;o.setAttribute("position",new Le(n,3)),o.computeVertexNormals();let c=new rt,l=new Ee(a,new He({vertexColors:!0,roughness:1,flatShading:!0})),u=new Ee(o,new He({color:7493692,roughness:1,flatShading:!0}));for(let h of[l.material,u.material])h.alphaToCoverage=!0,h.onBeforeCompile=d=>{d.vertexShader=`varying float crownCoverage;
`+d.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
 crownCoverage=1.0-smoothstep(23.0,31.9,distance(modelMatrix[3].xz,cameraPosition.xz));`),d.fragmentShader=`varying float crownCoverage;
`+d.fragmentShader.replace("#include <opaque_fragment>",`#include <opaque_fragment>
 gl_FragColor.a *= crownCoverage;`)},h.customProgramCacheKey=()=>"oxford-near-crown-coverage-v1";return l.castShadow=!0,l.receiveShadow=!0,u.castShadow=!0,u.receiveShadow=!0,c.add(u,l),{template:c,width:1,depth:1}}var kc=class{constructor(e,t){this.world=t,this.scene=e,this.models=[0,1,2,3].map(Jv),this.crownMaterials=this.models.map(n=>n.template.children[1].material),this.cardMaterials=[0,1,2,3].map(n=>t.mat["tree"+n]),this.living=new Map,this.last=[1/0,1/0],this.setDusk(!1);for(let n=0;n<4;n++){let i=t.mat["tree"+n];i.onBeforeCompile=r=>{r.vertexShader=`varying vec2 treeWorldPosition;
`+r.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
 treeWorldPosition=(modelMatrix*vec4(transformed,1.0)).xz;`),r.fragmentShader=`varying vec2 treeWorldPosition;
`+r.fragmentShader.replace("#include <alphatest_fragment>",`diffuseColor.a*=smoothstep(22.0,31.0,distance(treeWorldPosition,cameraPosition.xz));
 #include <alphatest_fragment>`)},i.customProgramCacheKey=()=>`oxford-tree-crossfade-${n}-v2`,i.needsUpdate=!0}}setDusk(e){let t=e?8174543:16777215;for(let n of[...this.cardMaterials,...this.crownMaterials])n.color.setHex(t),n.emissive.setHex(e?1194821:0),n.emissiveIntensity=e?.38:0}addTree(e,t,n,i){let r=n+"_"+i;if(this.living.has(r))return;let[a,o,c,l]=e.data.trees[t],u=l===3?3:c<9?0:l%3,h=this.models[u],d=h.template.clone(),f=this.world.ecology.crownRadius(e,t,c),m=(a+o)*1.63;d.position.set(a,this.world.city.ground(a,o),o),d.rotation.y=m,d.scale.set(f*2/h.width,c,f*2/h.depth),this.scene.add(d),this.living.set(r,d)}tileLoaded(e,t,n){for(let i=0;i<(e.data?.trees?.length||0);i++){let[r,a]=e.data.trees[i];Math.hypot(r-t,a-n)<=32&&this.addTree(e,i,r,a)}}tick(e,t){if(Math.hypot(e-this.last[0],t-this.last[1])<1.8)return;this.last=[e,t];let n=new Set;for(let i=Math.floor((e-36)/512);i<=Math.floor((e+36)/512);i++)for(let r=Math.floor((t-36)/512);r<=Math.floor((t+36)/512);r++){let a=this.world.tiles.get(i+"_"+r);for(let o=0;o<(a?.data?.trees?.length||0);o++){let[c,l,u,h]=a.data.trees[o];if(Math.hypot(c-e,l-t)>32)continue;let d=c+"_"+l;n.add(d),this.addTree(a,o,c,l)}}for(let[i,r]of this.living)n.has(i)||(this.scene.remove(r),this.living.delete(i))}};var Np=s=>()=>(s=Math.imul(s,1664525)+1013904223>>>0)/4294967296,Bc=class{constructor(){this.waterMaterial=new Qt({roughness:.62,metalness:.015,clearcoat:.12,clearcoatRoughness:.5,emissive:462868,emissiveIntensity:.08,transparent:!0,depthWrite:!1,side:Ve}),this.waterClock={value:0},this.waterMaterial.onBeforeCompile=e=>{e.uniforms.waterTime=this.waterClock,e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
attribute float shoreDistance; varying float vShoreDistance; varying vec2 vWaterWorld;`),e.vertexShader=e.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
 vWaterWorld=position.xz; vShoreDistance=shoreDistance;`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
uniform float waterTime; varying float vShoreDistance; varying vec2 vWaterWorld;`),e.fragmentShader=e.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
    float shoreFade=smoothstep(0.0,3.2,vShoreDistance);
    float deepFade=smoothstep(3.0,20.0,vShoreDistance);
    vec3 shoreColor=vec3(0.48,0.59,0.53);
    vec3 middleColor=vec3(0.25,0.40,0.38);
    vec3 deepColor=vec3(0.09,0.22,0.25);
    diffuseColor.rgb=mix(shoreColor,middleColor,shoreFade);
    diffuseColor.rgb=mix(diffuseColor.rgb,deepColor,deepFade);
    diffuseColor.a*=mix(0.16,0.91,smoothstep(0.0,2.6,vShoreDistance));
    float waveFade=(1.0-smoothstep(72.0,148.0,distance(cameraPosition.xz,vWaterWorld)))*smoothstep(0.5,4.0,vShoreDistance);
    float phaseA=dot(vWaterWorld,vec2(0.155,0.096))+waterTime*0.62;
    float phaseB=dot(vWaterWorld,vec2(-0.071,0.188))-waterTime*0.43;
    float phaseC=dot(vWaterWorld,vec2(0.24,-0.14))+waterTime*0.31;
    float shimmer=pow(max(0.0,0.5+0.5*sin(phaseA+phaseB*0.72+phaseC*0.38)),10.0)*waveFade;
    float brushA=sin(dot(vWaterWorld,vec2(.039,.018))+1.35*sin(dot(vWaterWorld,vec2(-.012,.047))));
    float brushB=sin(dot(vWaterWorld,vec2(-.026,.033))+waterTime*.025);
    float paintedWash=smoothstep(-.12,.38,brushA*.72+brushB*.28);
    diffuseColor.rgb=mix(diffuseColor.rgb,diffuseColor.rgb*vec3(.86,.99,.94)+vec3(.025,.045,.035),.115*paintedWash);
    diffuseColor.rgb+=vec3(0.055,0.072,0.066)*shimmer;`),e.fragmentShader=e.fragmentShader.replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
    float phaseN1=dot(vWaterWorld,vec2(0.155,0.096))+waterTime*0.62;
    float phaseN2=dot(vWaterWorld,vec2(-0.071,0.188))-waterTime*0.43;
    float phaseN3=dot(vWaterWorld,vec2(0.24,-0.14))+waterTime*0.31;
    vec2 slope=vec2(0.013*cos(phaseN1)*0.155-0.009*cos(phaseN2)*0.071+0.005*cos(phaseN3)*0.24,
                    0.013*cos(phaseN1)*0.096+0.009*cos(phaseN2)*0.188-0.005*cos(phaseN3)*0.14);
    vec3 waveNormal=normalize(mat3(viewMatrix)*normalize(vec3(-slope.x,1.0,-slope.y)));
    float normalFade=(1.0-smoothstep(72.0,148.0,distance(cameraPosition.xz,vWaterWorld)))*smoothstep(0.5,4.0,vShoreDistance);
    normal=normalize(mix(normal,waveNormal,0.36*normalFade));`)},this.waterMaterial.customProgramCacheKey=()=>"oxford-water-painterly-v3",this.litterMaterial=new He({map:this.leafLitterTexture(),transparent:!0,alphaTest:.025,depthWrite:!1,roughness:1,side:Ve}),this.shrubMaterial=new He({map:this.shrubTexture(),transparent:!0,alphaTest:.32,depthWrite:!1,roughness:1,side:Ve})}tick(e){this.waterClock.value=e}leafLitterTexture(){let e=document.createElement("canvas");e.width=e.height=128;let t=e.getContext("2d"),n=Np(1279607110);for(let r=0;r<460;r++){let a=n()*Math.PI*2,o=Math.sqrt(n())*59,c=64+Math.cos(a)*o,l=64+Math.sin(a)*o,u=Math.max(0,1-o/67),h=["#514938","#665b42","#726744","#4e5638","#858052"];t.save(),t.translate(c,l),t.rotate(n()*Math.PI),t.globalAlpha=(.24+n()*.44)*u,t.fillStyle=h[Math.floor(n()*h.length)],t.beginPath(),t.ellipse(0,0,1.2+n()*3.4,.5+n()*1.1,0,0,Math.PI*2),t.fill(),t.restore()}let i=new mn(e);return i.colorSpace=Je,i.anisotropy=4,i}shrubTexture(){let e=document.createElement("canvas");e.width=128,e.height=96;let t=e.getContext("2d"),n=Np(1397248597),i=["#455b36","#526940","#65754a","#788252","#394d33"];for(let a=0;a<270;a++){let o=8+n()*112,c=19+n()*67,l=Math.abs(o-64)/64;c<24+l*25&&n()<.76||(t.save(),t.translate(o,c),t.rotate(n()*Math.PI),t.globalAlpha=.62+n()*.36,t.fillStyle=i[Math.floor(n()*i.length)],t.beginPath(),t.ellipse(0,0,2+n()*4,.8+n()*2,0,0,Math.PI*2),t.fill(),t.restore())}let r=new mn(e);return r.colorSpace=Je,r.anisotropy=4,r}crownRadius(e,t,n){let i=e?.ecology?.treeRadiusDm?.[t];return Number.isFinite(i)&&i>0?i*.1:vn.clamp(n*.28,1.45,8.5)}understory(e,t){if(!t?.length)return null;let n=[],i=[],r=[],a=[],o=(u,h,d,f,m,x)=>{u.push(...d,...f,...m,...x),h.push(0,0,1,0,1,1,0,1)};for(let[u,h,d,f]of t){let m=d*.1,x=f*.001,g=Math.cos(x),p=Math.sin(x),v=[[-m,-m],[m,-m],[m,m],[-m,m]].map(([w,M])=>{let b=u+w*g-M*p,S=h+w*p+M*g;return[b,e.ground(b,S)+.028,S]});o(n,i,...v);let y=m*.86,_=.36+m*.3;for(let w of[x,x+Math.PI/2]){let M=Math.cos(w)*y,b=Math.sin(w)*y,S=e.ground(u-M,h-b)+.02,E=e.ground(u+M,h+b)+.02;o(r,a,[u-M,S,h-b],[u+M,E,h+b],[u+M,E+_,h+b],[u-M,S+_,h-b])}}let c=(u,h,d)=>{let f=new Ye,m=[];for(let g=0;g<u.length/3;g+=4)m.push(g,g+1,g+2,g,g+2,g+3);f.setAttribute("position",new Le(u,3)),f.setAttribute("uv",new Le(h,2)),f.setIndex(m),f.computeVertexNormals();let x=new Ee(f,d);return x.castShadow=!1,x.receiveShadow=!1,x},l=new rt;return l.add(c(n,i,this.litterMaterial)),l.add(c(r,a,this.shrubMaterial)),l}waterSurface(e,t,n=[]){if(t.length<3)return null;let i=[t,...n],r=[];for(let y of i)for(let _=0;_<y.length;_++){let w=y[_],M=y[(_+1)%y.length];for(let b=0;b<4;b++){let S=b/4;r.push(e.ground(w[0]+(M[0]-w[0])*S,w[1]+(M[1]-w[1])*S))}}r.sort((y,_)=>y-_);let a=r[0],o=r[Math.floor((r.length-1)*.05)],c=Math.min(o-.05,a+.18)+.04,l=i.map(y=>y.map(([_,w])=>new ae(_,w))),u=rn.triangulateShape(l[0],l.slice(1)),h=l.flat(),d=[],f=[],m=(y,_)=>{let w=1/0;for(let M of i)for(let b=0;b<M.length;b++){let S=M[b],E=M[(b+1)%M.length],T=E[0]-S[0],R=E[1]-S[1],D=vn.clamp(((y-S[0])*T+(_-S[1])*R)/(T*T+R*R||1),0,1);w=Math.min(w,Math.hypot(y-S[0]-T*D,_-S[1]-R*D))}return w},x=y=>{d.push(y.x,c,y.y),f.push(m(y.x,y.y))},g=(y,_,w,M=0)=>{let b=y.distanceTo(_),S=_.distanceTo(w),E=w.distanceTo(y);if(Math.max(b,S,E)<=10||M>=14){x(y),x(_),x(w);return}if(b>=S&&b>=E){let R=y.clone().add(_).multiplyScalar(.5);g(y,R,w,M+1),g(R,_,w,M+1)}else if(S>=E){let R=_.clone().add(w).multiplyScalar(.5);g(y,_,R,M+1),g(y,R,w,M+1)}else{let R=w.clone().add(y).multiplyScalar(.5);g(y,_,R,M+1),g(R,_,w,M+1)}};for(let y of u)g(h[y[0]],h[y[1]],h[y[2]]);let p=new Ye;p.setAttribute("position",new Le(d,3)),p.setAttribute("shoreDistance",new Le(f,1)),p.computeVertexNormals();let v=new Ee(p,this.waterMaterial);return v.receiveShadow=!0,v.userData.waterLevel=c,v}};var zc=[];function Fp(s){let e=[16760438,16765069,16755298],t=[.32,.27,.39];for(let n=0;n<zc.length;n++){let i=zc[n];i.emissive.setHex(s?e[n]:4471341),i.emissiveIntensity=s?t[n]:.012}}function Gc(s){let e=s>>>0;return()=>(e=Math.imul(e,1664525)+1013904223>>>0)/4294967296}function Wh(s,e,t,n=!0){let i=document.createElement("canvas");i.width=s,i.height=e,t(i.getContext("2d"),s,e);let r=new mn(i);return r.colorSpace=Je,r.anisotropy=8,n&&(r.wrapS=r.wrapT=Ut),r}function bs(s,e,t,n=512){return Wh(n,128,(i,r,a)=>{e&&(i.fillStyle=e,i.fillRect(0,0,r,a)),i.fillStyle=t,i.font="bold 62px Georgia",i.textAlign="center",i.textBaseline="middle",i.fillText(s,r/2,a/2,r*.93)},!1)}function vi(s){let e=new Rt().load("data/"+s);return e.colorSpace=Je,e.anisotropy=8,e.wrapS=e.wrapT=Ut,e}function Up(){let s={},e=(t,n)=>s[t]=new He({roughness:.91,side:Ve,...n});e("dirt",{color:11836542}),e("edge",{color:10657163}),e("yellow",{color:14858580}),e("white",{color:13947578}),e("roof",{color:6907745}),e("shingle",{map:vi("illustration/roof-shingle.png"),color:6841438}),e("water",{color:6523274,metalness:.25,roughness:.38});for(let t=0;t<4;t++)s["shingle"+t]=s.shingle.clone(),s["shingle"+t].color.set([10063490,13548714,15261885,16447457][t]);e("porch",{color:7634546}),e("door",{map:Wh(96,192,t=>{t.fillStyle="#ded7c3",t.fillRect(0,0,96,192),t.fillStyle="#435f56",t.fillRect(7,6,82,186),t.fillStyle="#658081",t.fillRect(17,18,63,73),t.fillStyle="#d5c8ad",t.fillRect(47,18,2,73),t.fillRect(17,53,63,2),t.fillStyle="#354b42",t.strokeStyle="#76857a";for(let n of[15,51])t.fillRect(n,108,28,63),t.strokeRect(n,108,28,63);t.fillStyle="#cbb887",t.fillRect(76,94,5,8)})});for(let t of["house","commercial","campus","store"])for(let n=0;n<4;n++)e(t+n,{map:vi(t+n+".jpg")});for(let t=0;t<4;t++){let n=new Rt().load("data/tree"+t+".png");n.colorSpace=Je,s["tree"+t]=new ts({map:n,alphaTest:.33,side:Ve,emissive:2370331,emissiveIntensity:.28})}for(let t of["brick","lap","board","metal","stucco","block","stone","painted"]){let n=vi("illustration/wall-"+t+".png"),i=new Rt().load("data/architecture/"+t+"-height.jpg");i.wrapS=i.wrapT=Ut,i.anisotropy=4;let r=t==="brick"||t==="stone"||t==="block"?.026:t==="stucco"?.012:.017;e("wall-"+t,{map:n,bumpMap:i,bumpScale:r,roughness:.96})}zc=[];for(let[t,n]of[["glass-sash","sash"],["glass-shop","shopglass"],["garage","garage"],["shutter","shutter"],["screen","screen"]]){let i=vi("architecture/"+n+".jpg"),r=t==="glass-sash"||t==="glass-shop";e(t,{map:i,roughness:r?.38:.88,metalness:r?.08:0})}for(let t=0;t<3;t++){let n=new He({map:vi("illustration/commercial-display-"+t+".png"),emissiveMap:vi("illustration/commercial-glow.png"),emissive:4471341,emissiveIntensity:.012,roughness:.58,metalness:.03,side:Ve});s["glass-display-"+t]=n,zc.push(n)}for(let[t,n]of[["reveal",4210230],["frame",15391158],["ledge",13216121],["awning",6715756],["rail",4475207]])e(t,{color:n,roughness:t==="frame"||t==="ledge"?.82:.92});s.frame.map=vi("illustration/trim-painted.png"),s.ledge.map=vi("illustration/wood-grain.png"),s.ink=new Ht({color:3419947,transparent:!0,opacity:.88,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,side:Ve}),s.ink.onBeforeCompile=t=>{t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
varying float vOxfordInkDistance;`),t.vertexShader=t.vertexShader.replace("#include <project_vertex>",`#include <project_vertex>
vOxfordInkDistance = length(mvPosition.xyz);`),t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
varying float vOxfordInkDistance;`),t.fragmentShader=t.fragmentShader.replace("#include <opaque_fragment>",`diffuseColor.a *= 1.0 - smoothstep(24.0, 82.0, vOxfordInkDistance);
#include <opaque_fragment>`)},s.ink.customProgramCacheKey=()=>"oxford-illustrated-ink-v1",s.rail=s.ink.clone(),s.rail.color.setHex(5523517),s.rail.opacity=.96,e("hardware",{color:9140048,metalness:.68,roughness:.32});for(let t of["shingle","metal","membrane","tile"]){let n=vi("illustration/roof-"+t+".png");e("surface-"+t,{vertexColors:!0,map:n,roughness:t==="metal"?.7:.94,metalness:t==="metal"?.18:0})}for(let t of["0258","0261","0263","0265","0266","0267"]){let n=new Rt().load("data/architecture/HABS-"+t+".png");n.colorSpace=Je,n.anisotropy=8,e("habs-"+t,{map:n,alphaTest:.48,polygonOffset:!0,polygonOffsetFactor:-1})}e("stained",{map:Wh(120,192,t=>{t.fillStyle="#494942",t.fillRect(0,0,120,192);for(let n=-24;n<210;n+=24)for(let i=-12;i<135;i+=24)t.fillStyle=["#9b7863","#93a2a6","#766c85","#c2aa72","#668194"][Math.abs(i*7+n*3)%5],t.beginPath(),t.moveTo(i+11,n),t.lineTo(i+21,n+11),t.lineTo(i+11,n+22),t.lineTo(i+1,n+11),t.fill()})}),e("historic-roof",{color:6514019});for(let t of["left","center","right"]){let n=new Rt().load("data/architecture/stjohn-"+t+".png");n.colorSpace=Je,n.anisotropy=8,e("stjohn-"+t,{map:n,alphaTest:.4})}return vp(s,bs),s}function xs(s,e=!1){let t=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},a={},o=s[0].morphTargetsRelative,c=new Ye;c.morphTargetsRelative=o;let l=0;for(let u=0;u<s.length;++u){let h=s[u],d=0,f=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let m in h.attributes){if(!n.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+m+'" attribute exists among all geometries, or in none of them.'),null;r[m]===void 0&&(r[m]=[]),r[m].push(h.attributes[m]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(o!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let m in h.morphAttributes){if(!i.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;if(h.morphAttributes[m].length!==s[0].morphAttributes[m].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have the same number of morph targets for the "'+m+'" morph attribute.'),null;a[m]===void 0&&(a[m]=[]),a[m].push(h.morphAttributes[m]),f++}if(f!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of morph attributes."),null;if(e){let m;if(t)m=h.index.count;else if(h.attributes.position!==void 0)m=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,m,u),l+=m}}if(t){let u=0,h=[];for(let d=0;d<s.length;++d){let f=s[d].index;for(let m=0;m<f.count;++m)h.push(f.getX(m)+u);u+=s[d].attributes.position.count}c.setIndex(h)}for(let u in r){let h=Op(r[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;c.setAttribute(u,h)}for(let u in a){let h=a[u][0].length;if(h!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[u]=[];for(let d=0;d<h;++d){let f=[];for(let x=0;x<a[u].length;++x)f.push(a[u][x][d]);let m=Op(f);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;c.morphAttributes[u].push(m)}}}return c}function Op(s){let e,t,n,i=-1,r=0;for(let l=0;l<s.length;++l){let u=s[l];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=u.gpuType),i!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*t}let a=new e(r),o=new Mt(a,t,n),c=0;for(let l=0;l<s.length;++l){let u=s[l];if(u.isInterleavedBufferAttribute){let h=c/t;for(let d=0,f=u.count;d<f;d++)for(let m=0;m<t;m++){let x=u.getComponent(d,m);o.setComponent(d+h,m,x)}}else a.set(u.array,c);c+=u.count*t}return i!==void 0&&(o.gpuType=i),o}function qh(s,e){if(e===bh)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===or||e===va){let t=s.getIndex();if(t===null){let r=[],a=s.getAttribute("position");if(a!==void 0){for(let o=0;o<a.count;o++)r.push(o);s.setIndex(r),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}let n=t.count-2,i=[];if(e===or)for(let r=1;r<=n;r++)i.push(t.getX(0)),i.push(t.getX(r)),i.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(i.push(t.getX(r)),i.push(t.getX(r+1)),i.push(t.getX(r+2))):(i.push(t.getX(r+2)),i.push(t.getX(r+1)),i.push(t.getX(r)));return i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}var An=gt(15262671),ei=gt(15985882),yi=gt(9789001),kp=gt(4347991,.36),Ea=gt(3491134),Xh=gt(6850684),Ra=gt(8947068),Yv=gt(9519936);function jh(s,e,t,n,i,r,a,o,c,l=0){let u=new Ee(new dn(r,a),new He({map:bs(e,o,c),side:Ve,transparent:!o}));u.position.set(t,n,i),u.rotation.y=l,s.add(u)}function ur(s,e,t,n){for(let[i,r]of[[.22,.45],[.18,.8],[.24,1.1]])Te(s,e+r,i,t+r,0,n,0,ei),n+=i}function _s(s,e,t,n,i,r){It(s,r*.79,r,i,e,n+i/2,t,ei,14),Te(s,r*2.45,.28,r*2.45,e,n+.14,t,An),Te(s,r*2.6,.32,r*2.6,e,n+i-.16,t,An)}function Oi(s,e,t,n,i,r){Te(s,i+.32,r+.36,.22,e,t,n,ei),Te(s,i,r,.26,e,t,n,kp),Te(s,.07,r,.28,e,t,n,An),Te(s,i,.07,.29,e,t,n,An)}function Hc(s,e,t,n,i){let r=new Qi;r.moveTo(-e/2,0),r.lineTo(e/2,0),r.lineTo(0,e*.18),r.closePath();let a=new Ee(new Zs(r,{depth:i,bevelEnabled:!1}),An);a.position.set(0,t,n),s.add(a)}function Zv(){let s=document.createElement("canvas");s.width=s.height=256;let e=s.getContext("2d");e.fillStyle="#f5ecda",e.fillRect(0,0,256,256),e.strokeStyle="#36403e",e.lineWidth=7,e.beginPath(),e.arc(128,128,117,0,Math.PI*2),e.stroke(),e.font="bold 22px Georgia",e.fillStyle="#394440",e.textAlign="center",e.textBaseline="middle",["XII","I","II","III","IV","V","VI","VII","VIII","IX","X","XI"].forEach((i,r)=>e.fillText(i,128+Math.sin(r*Math.PI/6)*89,128-Math.cos(r*Math.PI/6)*89)),e.beginPath(),e.moveTo(76,92),e.lineTo(128,128),e.lineTo(190,75),e.stroke();let n=new mn(s);return n.colorSpace=Je,new He({map:n})}function $v(s){Te(s,43,8.4,16.8,0,4.1,0,An),ur(s,43,16.8,8.35);let e=new Qi;e.moveTo(-8.85,0),e.lineTo(8.85,0),e.lineTo(0,2.1),e.closePath();let t=new Ee(new Zs(e,{depth:43.8,bevelEnabled:!1}),Ra);t.rotation.y=Math.PI/2,t.position.set(-21.9,8.88,0),s.add(t);for(let r of[-1,1]){let a=new rt;a.position.x=r*21.51,a.rotation.y=r*Math.PI/2;for(let o of[-5.2,0,5.2])for(let c of[2.5,6.3])Oi(a,o,c,0,1.6,2.65);s.add(a)}for(let r of[-1,1]){for(let a=-18;a<=18;a+=4.5)Oi(s,a,2.45,r*8.47,1.65,2.9),Oi(s,a,6.3,r*8.47,1.65,2.65);for(let a of[-6,-2,2,6])_s(s,a,r*11.5,0,8.2,.55);Te(s,15,1,4.5,0,8.3,r*10.1,ei),Hc(s,15,8.7,r*10.2-1.8,3.6)}Te(s,6.8,4.1,6.8,0,11.4,0,ei),ur(s,6.8,6.8,13.35),Te(s,5.6,5.5,5.6,0,16.2,0,An);let n=Zv();for(let r=0;r<4;r++){let a=new rt;a.rotation.y=r*Math.PI/2,s.add(a);for(let c of[-2.25,2.25])_s(a,c,2.91,13.75,4.7,.2);Te(a,2.45,2.35,.1,0,12.25,3.47,Ea);for(let c=0;c<7;c++)Te(a,2.5,.12,.18,0,11.25+c*.3,3.57,Ra);let o=new Ee(new $i(1.66,40),n);o.position.set(0,16.4,2.86),a.add(o)}ur(s,5.6,5.6,18.85);let i=new Ee(new bn(3.53,32,16,0,Math.PI*2,0,Math.PI/2),Xh);i.position.y=19.4,i.scale.y=1.18,s.add(i),It(s,.04,.19,2,0,24,0,Ea)}function Qv(s){Te(s,47,13.5,24,0,6.6,0,yi),ur(s,47,24,13.4);for(let e=-19;e<=19;e+=4.75)for(let t of[3,7.2,11.1])Oi(s,e,t,12.06,1.55,2.45);for(let e=0;e<6;e++)_s(s,-10+e*4,16,1.1,12,.62);for(let e=0;e<5;e++)Te(s,25-e*.3,.24,5.5-e*.7,0,.12+e*.24,15,An);Te(s,24,1.1,6.2,0,13.7,14.2,ei),Hc(s,24,14.25,11.2,6.1)}function ey(s){let e=gt(8932155),t=gt(10639429);Te(s,22,9.7,10.6,0,4.8,0,e),ur(s,22,10.6,9.65);let n=new Rt().load("data/ventress-front.jpg");n.colorSpace=Je;let i=new Ee(new dn(11,8.7),new He({map:n}));i.position.set(4.5,4.65,5.34),s.add(i);for(let a of[-10,10]){let o=It(s,3.15,3.15,9.6,a,4.8,0,e,24);It(s,.05,3.55,1.5,a,10.3,0,t,24)}let r=-2.8;Te(s,6.3,14.7,6,r,7.35,2.6,e),Hc(s,6.4,14.6,.25,5.4);for(let[a,o,c]of[[r-2.7,1.65,16.4],[r+2.8,.8,14.9]])It(s,o,o,c,a,c/2,5.15,e,20),It(s,o*1.06,o,.35,a,c,5.15,An,20),It(s,.08,o*1.07,o*2.9,a,c+o*1.45,5.15,t,20);for(let a of[3.2,7.1,12.2])Oi(s,r,a,5.65,1.25,2.6);jh(s,"VENTRESS HALL",4.6,4.7,5.4,3.6,.38,"#894e3e","#f0d9af")}function ty(s){Te(s,48,6.45,14,0,3.15,0,yi);for(let e of[-21.5,0,21.5]){Te(s,9.7,7.3,18,e,3.6,0,yi),It(s,4.2,4.3,2.7,e,8.45,0,An,24);let t=new Ee(new bn(4.35,24,10,0,Math.PI*2,0,Math.PI/2),Ra);t.scale.y=.26,t.position.set(e,9.8,0),s.add(t)}for(let e=-19;e<=19;e+=4.75)Oi(s,e,3,7.04,1.35,2.8);for(let e of[-4.2,-1.4,1.4,4.2])_s(s,e,11.5,.35,6.6,.43);Te(s,10.8,.6,4.9,0,7.15,9.75,An),Hc(s,11,7.45,7.5,4.7)}function ny(s){Te(s,17,1.15,16,0,.5,0,yi);for(let t of[-7,0,7])for(let n of[-6,6])_s(s,t,n,.95,4.2,.25);let e=It(s,0,12.7,2.8,0,6.5,0,Xh,4);e.rotation.y=Math.PI/4}function iy(s){let e=(t,n,i,r,a,o,c)=>{let l=[];for(let h=0;h<64;h++){let d=g=>{let p=g*Math.PI/32;return[Math.sign(Math.cos(p))*Math.abs(Math.cos(p))**.55,Math.sign(Math.sin(p))*Math.abs(Math.sin(p))**.55]},f=d(h),m=d(h+1),x=[[f[0]*t,o,f[1]*n],[m[0]*t,o,m[1]*n],[m[0]*i,a,m[1]*r],[f[0]*i,a,f[1]*r]];l.push(...x[0],...x[1],...x[2],...x[0],...x[2],...x[3])}let u=new Ye;u.setAttribute("position",new Le(l,3)),u.computeVertexNormals(),c.side=Ve,s.add(new Ee(u,c))};e(99,113,99,113,0,19,yi);for(let t=0;t<15;t++)e(45+(t+1)*3.6,69+(t+1)*2.93,45+t*3.6,69+t*2.93,1.2+t*1.2,2.4+t*1.2,t%4===0?Yv:Ra);Te(s,48.8,.12,109.73,-3.55,.12,-9.31,gt(5406802));for(let t=-5;t<=5;t++)Te(s,48.8,.06,.2,-3.55,.2,-9.31+t*9.14,ei);Te(s,10,13,83,-96,23,0,yi),Te(s,10.3,4,83,-96,25,0,kp);for(let t of[-87,87])for(let n of[-63,63])It(s,.38,.75,35,t,17.5,n,Ra),Te(s,12,2.2,.7,t,35,n,An);jh(s,"VAUGHT\u2013HEMINGWAY STADIUM",0,13,-113.4,55,4.5,"#764839","#fff3df",Math.PI)}function sy(s){Te(s,7,11,7,0,5.5,0,yi);for(let t of[-2.7,2.7])for(let n of[-2.7,2.7])_s(s,t,n,11,4,.4);Te(s,7.4,.55,7.4,0,15.1,0,ei);let e=It(s,0,5.5,3,0,16.8,0,Xh,4);e.rotation.y=Math.PI/4}function ry(s){for(let e of[-2.3,2.3])Te(s,.72,3.8,.85,e,1.9,0,yi),Te(s,.9,.22,1,e,3.8,0,An);Te(s,5.6,.68,.25,0,3.86,0,Ea),jh(s,"WALK OF CHAMPIONS",0,3.88,.15,5.25,.48,"#34483e","#f1dfaf")}function Kh(s,e,t,n,i,r,a,o=0){let c=new Rt().load("data/"+e+".png");c.colorSpace=Je,c.anisotropy=8;let l=new He({map:c,alphaTest:.45,roughness:.94,side:Ve}),u=new Ee(new dn(t,n),l);u.position.set(i,r,a),u.rotation.y=o,s.add(u)}function ay(s){Te(s,6.65,8.7,30.8,0,4.32,0,yi),ur(s,6.65,30.8,8.67),Kh(s,"square-books",6.7,8.68,0,4.39,15.45);for(let e=-12;e<14;e+=4){let t=new rt;t.position.set(-3.36,0,e),t.rotation.y=-Math.PI/2,Oi(t,0,6.48,0,1.52,2.4),Oi(t,0,1.71,0,2.4,2.85),s.add(t)}Te(s,2.4,.22,30.8,-4.5,3.62,0,ei),Te(s,2.45,.22,30.8,-4.5,8.1,0,ei);for(let e=-15;e<15.5;e+=.5)Te(s,.055,.98,.055,-5.6,4.16,e,Ea);for(let e=-14.5;e<=15;e+=3.65)_s(s,-5.6,e,0,8.02,.083);Te(s,.09,.11,30.8,-5.6,4.69,0,Ea)}function oy(s){Kh(s,"off-square",8.1,7.15,0,3.65,0)}function cy(s){Kh(s,"landrys",30.7,4.15,0,2.14,0)}function Ca(s){s.updateWorldMatrix(!0,!0);let e=s.matrixWorld.clone().invert(),t=new Map,n=[];s.traverse(i=>{if(!i.isMesh||i===s||i.userData.contactDecal)return;let r=i.geometry.index?i.geometry.toNonIndexed():i.geometry.clone();r.applyMatrix4(e.clone().multiply(i.matrixWorld)),r.attributes.uv||r.setAttribute("uv",new Le(new Float32Array(r.attributes.position.count*2),2));let a=t.get(i.material)||[];a.push(r),t.set(i.material,a),n.push(i)});for(let i of n)i.removeFromParent(),i.geometry.dispose();for(let[i,r]of t){let a=xs(r);for(let c of r)c.dispose();let o=new Ee(a,i);o.castShadow=o.receiveShadow=!0,s.add(o)}}var Bp=new Set([188828391,187869639,313153529,3273781,599810022,318274467,16256538]);function zp(s,e){for(let[t,n,i,r]of[[-9.7,46,-.18,$v],[-1605,109,1.73,Qv],[-1340,97,-.17,ny],[-1386,116,-.17,ey],[-1355,-73,-.17,ty],[-1441.47,508.22,-.60003,iy],[-1369.42,372.05,-.17,sy],[-1376,-10,-.17,ry],[-32.2,111.65,Math.PI-.195,ay],[34.85,107.37,Math.PI-.2,oy],[-41.1,160.5,Math.PI*.5-.18,cy]]){let a=new rt;r(a),Ca(a),a.position.set(t,e.ground(t,n),n),a.rotation.y=i,s.add(a)}}var Gp=gt(6844257),Hp=gt(15065293),ly=gt(10236968),hy=gt(4540737),vw=gt(13870656),Jh=new Map;function Vp(s,e,t,n,i,r,a,o,c){let l=e+r;Jh.has(l)||Jh.set(l,new He({map:bs(e,r,i),side:Ve}));let u=new Ee(new dn(t,n),Jh.get(l));u.position.set(a,o,c),s.add(u)}function Wp(s,e,t,n={}){let i=new Set,r=new rt,a=[],o=n.markWhite||Hp;function c(u,h,d=e.ground.bind(e)){let f=[];for(let[g,p]of u)f.push(g,d(g,p)+.315,p);let m=new Ye;m.setAttribute("position",new Le([...f.slice(0,3),...f.slice(3,6),...f.slice(6,9),...f.slice(0,3),...f.slice(6,9),...f.slice(9,12)],3)),m.computeVertexNormals();let x=new Ee(m,h);x.material=h,r.add(x)}function l(u,h,d,f,m,x,g,p,v){let y=(_,w)=>[u[0]+h[0]*_+d[0]*w,u[1]+h[1]*_+d[1]*w];c([y(f,x),y(f,g),y(m,g),y(m,x)],p,v)}for(let[u,h]of e.roadTiles.get(s.key)||[]){let d=e.roads[u];if(d.d)for(let[f,m]of[[d.p[h-1],d.p[h]],[d.p[h],d.p[h-1]]]){let x=e.nodes[f],g=e.nodes[m],p=f+"-"+u;if(i.has(p)||Math.floor(x[0]/512)!==s.xx||Math.floor(x[1]/512)!==s.zz||d.o&&f!==d.p[h]||!x[2])continue;i.add(p);let v=Math.hypot(x[0]-g[0],x[1]-g[1]);if(v<2)continue;let y=(x[0]-g[0])/v,_=(x[1]-g[1])/v,w=[-_,y],M=[y,_],b=e.nodes[d.p[h-1]],S=e.nodes[d.p[h]],E=S[0]-b[0],T=S[1]-b[1],R=E*E+T*T,D=(K,se)=>e.surface(d,h,Math.max(0,Math.min(1,((K-b[0])*E+(se-b[1])*T)/(R||1))),K,se);if(x[2]==="crossing"){if(i.has("cross"+f))continue;i.add("cross"+f);let K=Math.min(d.w*.82,7.2),se=K/2;for(let V=-se;V<=se-.001;V+=.72){let Q=Math.min(se,V+.34);l(x,M,w,-.62,.62,V,Q,o,D)}continue}if(x[2]!=="stop"&&x[2]!=="traffic_signals"&&x[2]!=="give_way")continue;let U=[x[0]-y*2.25,x[1]-_*2.25],P=d.w/2,O=d.o?-P:.1,H=d.o?P:Math.max(.9,P-.12);l(U,M,w,-.17,.17,O,H,o,D);let F=new rt,J=x[0]-_*(d.w*.5+.62)-y*3.8,B=x[1]+y*(d.w*.5+.62)-_*3.8;F.position.set(J,e.ground(J,B)+.21,B),F.rotation.y=Math.atan2(-y,-_);let z=x[2]==="traffic_signals",W=z?5.7:2.45;if(It(F,.045,.065,W,0,W/2,0,Gp,8),z){let K=d.w*.52;Te(F,K,.085,.085,K/2,W,0,Gp),Te(F,.45,1.19,.34,K,W-.55,0,hy);let se=[];for(let V=0;V<3;V++){let Q=new Ht({color:3356973}),re=new Ee(new $i(.135,12),Q);re.position.set(K,W-.2-V*.35,.18),F.add(re),se.push(Q)}a.push({u:f,axis:Math.abs(y)>Math.abs(_),lamps:se})}else{let K=It(F,.405,.405,.05,0,W-.2,0,Hp,8);K.rotation.x=Math.PI/2,K.rotation.y=Math.PI/8,It(F,.374,.374,.055,0,W-.2,.025,ly,8).rotation.copy(K.rotation),Vp(F,x[2]==="stop"?"STOP":"YIELD",.6,.26,"#fff","#9e352a",0,W-.2,.062);let V=[...new Set(e.edges[f].map(Q=>e.roads[Q[1]].n).filter(Q=>Q&&Q!==d.n))];V.length&&Vp(F,V[0],1.72,.29,"#f6f2dc","#355c4a",0,W+.38,0)}r.add(F)}}r.children.length&&(Ca(r),t.add(r)),s.signals=a}var qp=(function(){var s="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuixkbeeeddddillviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WboY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbrl79IV9Rbwq:VZkdbk:XYi5ud9:du8Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaicefhxcj;abad9Uc;WFbGcjdadca0EhmaialfgPar9Rgoadfhsavaoadz:jjjjbgzceVhHcbhOdndninaeaO9nmeaPax9RaD6mdamaeaO9RaOamfgoae6EgAcsfglc9WGhCabaOad2fhXaAcethQaxaDfhiaOaeaoaeao6E9RhLalcl4cifcd4hKazcj;cbfaAfhYcbh8AazcjdfhEaHh3incbh5dnawTmbaxa8Acd4fRbbh5kcbh8Eazcj;cbfhqinaih8Fdndndndna5a8Ecet4ciGgoc9:fPdebdkaPa8F9RaA6mrazcj;cbfa8EaA2fa8FaAz:jjjjb8Aa8FaAfhixdkazcj;cbfa8EaA2fcbaAz:kjjjb8Aa8FhixekaPa8F9RaK6mva8FaKfhidnaCTmbaPai9RcK6mbaocdtc:q:G:cjbfcj:G:cjbawEhaczhrcbhlinargoc9Wfghaqfhrdndndndndndnaaa8Fahco4fRbbalcoG4ciGcdtfydbPDbedvivvvlvkar9cb83bwar9cb83bbxlkarcbaiRbdai8Xbb9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbaqaofgrcGfcbaicdfa8J9c8N1:NfghRbbag9cjjjjjw:dg8J9qE86bbarcVfcbaha8J9c8M1:NfghRbbag9cjjjjjl:dg8J9qE86bbarc7fcbaha8J9c8L1:NfghRbbag9cjjjjjd:dg8J9qE86bbarctfcbaha8J9c8K1:NfghRbbag9cjjjjje:dg8J9qE86bbarc91fcbaha8J9c8J1:NfghRbbag9cjjjj;ab:dg8J9qE86bbarc4fcbaha8J9cg1:NfghRbbag9cjjjja:dg8J9qE86bbarc93fcbaha8J9ch1:NfghRbbag9cjjjjz:dgg9qE86bbarc94fcbahag9ca1:NfghRbbai8Xbe9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbarc95fcbaha8J9c8N1:NfgiRbbag9cjjjjjw:dg8J9qE86bbarc96fcbaia8J9c8M1:NfgiRbbag9cjjjjjl:dg8J9qE86bbarc97fcbaia8J9c8L1:NfgiRbbag9cjjjjjd:dg8J9qE86bbarc98fcbaia8J9c8K1:NfgiRbbag9cjjjjje:dg8J9qE86bbarc99fcbaia8J9c8J1:NfgiRbbag9cjjjj;ab:dg8J9qE86bbarc9:fcbaia8J9cg1:NfgiRbbag9cjjjja:dg8J9qE86bbarcufcbaia8J9ch1:NfgiRbbag9cjjjjz:dgg9qE86bbaiag9ca1:NfhixikaraiRblaiRbbghco4g8Ka8KciSg8KE86bbaqaofgrcGfaiclfa8Kfg8KRbbahcl4ciGg8La8LciSg8LE86bbarcVfa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc7fa8Ka8Lfg8KRbbahciGghahciSghE86bbarctfa8Kahfg8KRbbaiRbeghco4g8La8LciSg8LE86bbarc91fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc4fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc93fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc94fa8Kahfg8KRbbaiRbdghco4g8La8LciSg8LE86bbarc95fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc96fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc97fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc98fa8KahfghRbbaiRbigico4g8Ka8KciSg8KE86bbarc99faha8KfghRbbaicl4ciGg8Ka8KciSg8KE86bbarc9:faha8KfghRbbaicd4ciGg8Ka8KciSg8KE86bbarcufaha8KfgrRbbaiciGgiaiciSgiE86bbaraifhixdkaraiRbwaiRbbghcl4g8Ka8KcsSg8KE86bbaqaofgrcGfaicwfa8Kfg8KRbbahcsGghahcsSghE86bbarcVfa8KahfghRbbaiRbeg8Kcl4g8La8LcsSg8LE86bbarc7faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarctfaha8KfghRbbaiRbdg8Kcl4g8La8LcsSg8LE86bbarc91faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc4faha8KfghRbbaiRbig8Kcl4g8La8LcsSg8LE86bbarc93faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc94faha8KfghRbbaiRblg8Kcl4g8La8LcsSg8LE86bbarc95faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc96faha8KfghRbbaiRbvg8Kcl4g8La8LcsSg8LE86bbarc97faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc98faha8KfghRbbaiRbog8Kcl4g8La8LcsSg8LE86bbarc99faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc9:faha8KfghRbbaiRbrgicl4g8Ka8KcsSg8KE86bbarcufaha8KfgrRbbaicsGgiaicsSgiE86bbaraifhixekarai8Pbw83bwarai8Pbb83bbaiczfhikdnaoaC9pmbalcdfhlaoczfhraPai9RcL0mekkaoaC6moaimexokaCmva8FTmvkaqaAfhqa8Ecefg8Ecl9hmbkdndndndnawTmbasa8Acd4fRbbgociGPlbedrbkaATmdaza8Afh8Fazcj;cbfhhcbh8EaEhaina8FRbbhraahocbhlinaoahalfRbbgqce4cbaqceG9R7arfgr86bbaoadfhoaAalcefgl9hmbkaacefhaa8Fcefh8FahaAfhha8Ecefg8Ecl9hmbxikkaATmeaza8Afhaazcj;cbfhhcbhoceh8EaYh8FinaEaofhlaa8Vbbhrcbhoinala8FaofRbbcwtahaofRbbgqVc;:FiGce4cbaqceG9R7arfgr87bbaladfhlaLaocefgofmbka8FaQfh8FcdhoaacdfhaahaQfhha8EceGhlcbh8EalmbxdkkaATmbaocl4h8Eaza8AfRbbhqcwhoa3hlinalRbbaotaqVhqalcefhlaocwfgoca9hmbkcbhhaEh8FaYhainazcj;cbfahfRbbhrcwhoaahlinalRbbaotarVhralaAfhlaocwfgoca9hmbkara8E94aq7hqcbhoa8Fhlinalaqao486bbalcefhlaocwfgoca9hmbka8Fadfh8FaacefhaahcefghaA9hmbkkaEclfhEa3clfh3a8Aclfg8Aad6mbkaXazcjdfaAad2z:jjjjb8AazazcjdfaAcufad2fadz:jjjjb8AaAaOfhOaihxaimbkc9:hoxdkcbc99aPax9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaok:ysezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:kjjjb8Aav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk:4ioiue99dud99dud99dnaeTmbcbhiabhlindndnal8Uebgv:YgoJ:ji:1Salcof8UebgrciVgw:Y:vgDNJbbbZJbbb:;avcu9kEMgq:lJbbb9p9DTmbaq:Ohkxekcjjjj94hkkalclf8Uebhvalcdf8UebhxalarcefciGcetfak87ebdndnax:YgqaDNJbbbZJbbb:;axcu9kEMgm:lJbbb9p9DTmbam:Ohxxekcjjjj94hxkabaiarciGgkfcd7cetfax87ebdndnav:YgmaDNJbbbZJbbb:;avcu9kEMgP:lJbbb9p9DTmbaP:Ohvxekcjjjj94hvkalarcufciGcetfav87ebdndnawaw2:ZgPaPMaoaoN:taqaqN:tamamN:tgoJbbbbaoJbbbb9GE:raDNJbbbZMgD:lJbbb9p9DTmbaD:Ohrxekcjjjj94hrkalakcetfar87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2gdTmbinababydbgecwtcw91:Yaece91cjjj98Gcjjj;8if::NUdbabclfhbadcufgdmbkkk:Tvirud99eudndnadcl9hmbaeTmeindndnabRbbgiabcefgl8Sbbgvabcdfgo8Sbbgrf9R:YJbbuJabcifgwRbbgdce4adVgDcd4aDVgDcl4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax86bbdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao86bbdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai86bbdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad86bbabclfhbaecufgembxdkkaeTmbindndnab8Vebgiabcdfgl8Uebgvabclfgo8Uebgrf9R:YJbFu9habcofgw8Vebgdce4adVgDcd4aDVgDcl4aDVgDcw4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax87ebdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao87ebdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai87ebdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad87ebabcwfhbaecufgembkkk9teiucbcbyd:K:G:cjbgeabcifc98GfgbBd:K:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaeczfheaiczfhiadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkk83dbcj:Gdk8Kbbbbdbbblbbbwbbbbbbbebbbdbbblbbbwbbbbc:K:Gdkl8W:qbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuixkbbebeeddddilve9Weeeviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WbwY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbDl79IV9Rbqq:W9Dklbzik94evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaeai86b:q:W:cjbaecitab8Piw83i:q:G:cjbaecefgecjd9hmbkk:JBl8Aud97dur978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaialfgxar9RhodnadTgmmbavaoad;8qbbkaicefhPcj;abad9Uc;WFbGcjdadca0EhsdndndnadTmbaoadfhzcbhHinaeaH9nmdaxaP9RaD6miabaHad2fhOaPaDfhAasaeaH9RaHasfae6EgCcsfgocl4cifcd4hXavcj;cbfaoc9WGgQcetfhLavcj;cbfaQci2fhKavcj;cbfaQfhYcbh8Aaoc;ab6hEincbh3dnawTmbaPa8Acd4fRbbh3kcbh5avcj;cbfh8Eindndndndna3a5cet4ciGgoc9:fPdebdkaxaA9RaQ6mwdnaQTmbavcj;cbfa5aQ2faAaQ;8qbbkaAaCfhAxdkaQTmeavcj;cbfa5aQ2fcbaQ;8kbxekaxaA9RaX6moaoclVcbawEhraAaXfhocbhidnaEmbaxao9Rc;Gb6mbcbhlina8EalfhidndndndndndnaAalco4fRbbgqciGarfPDbedibledibkaipxbbbbbbbbbbbbbbbbpklbxlkaiaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiaopbbbpklbaoczfhoxekaiaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcd4ciGarfPDbedibledibkaiczfpxbbbbbbbbbbbbbbbbpklbxlkaiczfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiczfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiczfaopbbbpklbaoczfhoxekaiczfaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcl4ciGarfPDbedibledibkaicafpxbbbbbbbbbbbbbbbbpklbxlkaicafaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaicafaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaicafaopbbbpklbaoczfhoxekaicafaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqco4arfPDbedibledibkaic8Wfpxbbbbbbbbbbbbbbbbpklbxlkaic8Wfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaoclffaqRb:q:W:cjbfhoxikaic8Wfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaocwffaqRb:q:W:cjbfhoxdkaic8Wfaopbbbpklbaoczfhoxekaic8WfaopbbdaoRbbgicitpbi:q:G:cjbaiRb:q:W:cjbgipsaoRbegqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbaiaocdffaqRb:q:W:cjbfhokalc;abfhialcjefaQ0meaihlaxao9Rc;Fb0mbkkdnaiaQ9pmbaici4hlinaxao9RcK6mwa8EaifhqdndndndndndnaAaico4fRbbalcoG4ciGarfPDbedibledibkaqpxbbbbbbbbbbbbbbbbpkbbxlkaqaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaoclffagRb:q:W:cjbfhoxikaqaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaocwffagRb:q:W:cjbfhoxdkaqaopbbbpkbbaoczfhoxekaqaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpkbbahaocdffagRb:q:W:cjbfhokalcdfhlaiczfgiaQ6mbkkaohAaoTmoka8EaQfh8Ea5cefg5cl9hmbkdndndndnawTmbaza8Acd4fRbbglciGPlbedwbkaQTmdavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep9Ta8Fpxeeeeeeeeeeeeeeeegap9op9Hp9rg8Fa8Jp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ugap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp9Ugap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp9Ugap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9AbbbaladfhlaoczfgoaQ6mbxikkaQTmeavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep:nea8Fpxebebebebebebebebgap9op:bep9rg8Fa8Jp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oegap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp:oegap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp:oegap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9AbbbaladfhlaoczfgoaQ6mbxdkkaQTmbcbhocbalcl4gl9Rc8FGhiavcjdfa8Afhrava8Afpbdbhainaravcj;cbfaofpblbg8JaYaofpblbg8KpmbzeHdOiAlCvXoQrLg8LaLaofpblbg8MaKaofpblbg8NpmbzeHdOiAlCvXoQrLgypmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Faap9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8LaypmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwKDYq8AkEx3m5P8Es8Fg8Ja8Ma8NpmwKDYq8AkEx3m5P8Es8Fg8KpmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9AbbbaradfhraoczfgoaQ6mbkka8Aclfg8Aad6mbkdnaCad2goTmbaOavcjdfao;8qbbkdnammbavavcjdfaCcufad2fad;8qbbkaCaHfhHc9:hoaAhPaAmbxlkkaeTmbaDalfhrcbhocuhlinaralaD9RglfaD6mdasaeao9Raoasfae6Eaofgoae6mbkaial9RhPkcbc99axaP9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaokwbz:bjjjbkNsezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk;Toio97eue97aec98Ghedndnadcl9hmbaeTmecbhdinababpbbbgicKp:RecKp:Sep;6eglaicwp:RecKp:Sep;6ealp;Geaiczp:RecKp:Sep;6egvp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgwp9op9rp;Keglpxbb;:9cbb;:9cbb;:9cbb;:9calalp;Meaoaop;Meavaravawp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFbbbFbbbFbbbFbbbp9oaipxbbbFbbbFbbbFbbbFp9op9qalavp;Mearp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaoavp;Mearp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgDaDpbbbgipxbbbbbbFFbbbbbbFFgwp9oabpbbbgoaipmbediwDqkzHOAKY8AEgvczp:Reczp:Sep;6eglaoaipmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eavczp:Sep;6egvp;Gealp;Gep;Kep;Legipxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgqp9op9rp;Keglpxb;:FSb;:FSb;:FSb;:FSalalp;Meaiaip;Meavaravaqp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbp9oaiavp;Mearp;Keczp:Rep9qgialavp;Mearp;KepxFFbbFFbbFFbbFFbbp9oglpmwDKYqk8AExm35Ps8E8Fp9qpkbbabaoawp9oaialpmbezHdiOAlvCXorQLp9qpkbbabcafhbadclfgdae6mbkkk;2ileue97euo97dnaec98GgiTmbcbheinabcKfpx:ji:1S:ji:1S:ji:1S:ji:1SabpbbbglabczfgvpbbbgopmlvorxmPsCXQL358E8Fgrczp:Segwpxibbbibbbibbbibbbp9qp;6egDp;NegqaDaDp;MegDaDp;KealaopmbediwDqkzHOAKY8AEgDczp:Reczp:Sep;6eglalp;MeaDczp:Sep;6egoaop;Mearczp:Reczp:Sep;6egrarp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jep;Mepxbbn0bbn0bbn0bbn0gDp;KepxFFbbFFbbFFbbFFbbgkp9oaqaop;MeaDp;Keczp:Rep9qgoaqalp;MeaDp;Keakp9oaqarp;MeaDp;Keczp:Rep9qgDpmwDKYqk8AExm35Ps8E8Fglp5eawclp:RegqpEi:T:j83ibavalp5baqpEd:T:j83ibabcwfaoaDpmbezHdiOAlvCXorQLgDp5eaqpEe:T:j83ibabaDp5baqpEb:T:j83ibabcafhbaeclfgeai6mbkkkuee97dnadcd4ae2c98GgeTmbcbhdinababpbbbgicwp:Recwp:Sep;6eaicep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepkbbabczfhbadclfgdae6mbkkk:Sodw97euaec98Ghedndnadcl9hmbaeTmecbhdinabpxbbuJbbuJbbuJbbuJabpbbbgicKp:TeglaicYp:Tep9qgvcdp:Teavp9qgvclp:Teavp9qgop;6ep;Negvaicwp:RecKp:SegraipxFbbbFbbbFbbbFbbbgwp9ogDp:Uep;6ep;Mepxbbn0bbn0bbn0bbn0gqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9oavaDarp:Xeaiczp:RecKp:Segip:Uep;6ep;Meaqp;Keawp9op9qavaDaraip:Uep:Xep;6ep;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qavaoalcep:Rep9oalpxebbbebbbebbbebbbp9op9qp;6ep;Meaqp;KecKp:Rep9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgkpxbFu9hbFu9hbFu9hbFu9habpbbbglakpbbbgrpmlvorxmPsCXQL358E8Fgvczp:TegqavcHp:Tep9qgicdp:Teaip9qgiclp:Teaip9qgicwp:Teaip9qgop;6ep;NegialarpmbediwDqkzHOAKY8AEgDpxFFbbFFbbFFbbFFbbglp9ograDczp:Segwp:Ueavczp:Reczp:SegDp:Xep;6ep;Mepxbbn0bbn0bbn0bbn0gvp;Kealp9oaiarawaDp:Uep:Xep;6ep;Meavp;Keczp:Rep9qgwaiaoaqcep:Rep9oaqpxebbbebbbebbbebbbp9op9qp;6ep;Meavp;Keczp:ReaiaDarp:Uep;6ep;Meavp;Kealp9op9qgipmwDKYqk8AExm35Ps8E8FpkbbabawaipmbezHdiOAlvCXorQLpkbbabcafhbadclfgdae6mbkkk9teiucbcbydj:G:cjbgeabcifc98GfgbBdj:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkxebcj:Gdklz:zbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var i=WebAssembly.validate(t)?o(e):o(s),r,a=WebAssembly.instantiate(i,{}).then(function(p){r=p.instance,r.exports.__wasm_call_ctors()});function o(p){for(var v=new Uint8Array(p.length),y=0;y<p.length;++y){var _=p.charCodeAt(y);v[y]=_>96?_-97:_>64?_-39:_+4}for(var w=0,y=0;y<p.length;++y)v[w++]=v[y]<60?n[v[y]]:(v[y]-60)*64+v[++y];return v.buffer.slice(0,w)}function c(p,v,y,_,w,M,b){var S=p.exports.sbrk,E=_+3&-4,T=S(E*w),R=S(M.length),D=new Uint8Array(p.exports.memory.buffer);D.set(M,R);var U=v(T,_,w,R,M.length);if(U==0&&b&&b(T,E,w),y.set(D.subarray(T,T+_*w)),S(T-S(0)),U!=0)throw new Error("Malformed buffer data: "+U)}var l={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp",COLOR:"meshopt_decodeFilterColor"},u={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},h=[],d=0;function f(p){var v={object:new Worker(p),pending:0,requests:{}};return v.object.onmessage=function(y){var _=y.data;v.pending-=_.count,v.requests[_.id][_.action](_.value),delete v.requests[_.id]},v}function m(p){for(var v="self.ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(i)+"]), {}).then(function(result) { result.instance.exports.__wasm_call_ctors(); return result.instance; });self.onmessage = "+g.name+";"+c.toString()+g.toString(),y=new Blob([v],{type:"text/javascript"}),_=URL.createObjectURL(y),w=h.length;w<p;++w)h[w]=f(_);for(var w=p;w<h.length;++w)h[w].object.postMessage({});h.length=p,URL.revokeObjectURL(_)}function x(p,v,y,_,w){for(var M=h[0],b=1;b<h.length;++b)h[b].pending<M.pending&&(M=h[b]);return new Promise(function(S,E){var T=new Uint8Array(y),R=++d;M.pending+=p,M.requests[R]={resolve:S,reject:E},M.object.postMessage({id:R,count:p,size:v,source:T,mode:_,filter:w},[T.buffer])})}function g(p){var v=p.data;self.ready.then(function(y){if(!v.id)return self.close();try{var _=new Uint8Array(v.count*v.size);c(y,y.exports[v.mode],_,v.count,v.size,v.source,y.exports[v.filter]),self.postMessage({id:v.id,count:v.count,action:"resolve",value:_},[_.buffer])}catch(w){self.postMessage({id:v.id,count:v.count,action:"reject",value:w})}})}return{ready:a,supported:!0,useWorkers:function(p){m(p)},decodeVertexBuffer:function(p,v,y,_,w){c(r,r.exports.meshopt_decodeVertexBuffer,p,v,y,_,r.exports[l[w]])},decodeIndexBuffer:function(p,v,y,_){c(r,r.exports.meshopt_decodeIndexBuffer,p,v,y,_)},decodeIndexSequence:function(p,v,y,_){c(r,r.exports.meshopt_decodeIndexSequence,p,v,y,_)},decodeGltfBuffer:function(p,v,y,_,w,M){c(r,r.exports[u[w]],p,v,y,_,r.exports[l[M]])},decodeGltfBufferAsync:function(p,v,y,_,w){return h.length>0?x(p,v,y,u[_],l[w]):a.then(function(){var M=new Uint8Array(p*v);return c(r,r.exports[u[_]],M,p,v,y,r.exports[l[w]]),M})}}})();function Xp(s){let e=new Map,t=new Map,n=s.clone();return jp(s,n,function(i,r){e.set(r,i),t.set(i,r)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;let r=i,a=e.get(i),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(c){return t.get(c)}),r.bind(r.skeleton,r.bindMatrix)}),n}function jp(s,e,t){t(s,e);for(let n=0;n<s.children.length;n++)jp(s.children[n],e.children[n],t)}var Vc=class extends Jn{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new nu(t)}),this.register(function(t){return new iu(t)}),this.register(function(t){return new su(t)}),this.register(function(t){return new fu(t)}),this.register(function(t){return new pu(t)}),this.register(function(t){return new mu(t)}),this.register(function(t){return new au(t)}),this.register(function(t){return new ou(t)}),this.register(function(t){return new cu(t)}),this.register(function(t){return new lu(t)}),this.register(function(t){return new tu(t)}),this.register(function(t){return new hu(t)}),this.register(function(t){return new ru(t)}),this.register(function(t){return new du(t)}),this.register(function(t){return new uu(t)}),this.register(function(t){return new Qh(t)}),this.register(function(t){return new Wc(t,at.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new Wc(t,at.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new gu(t)})}load(e,t,n,i){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let l=bi.extractUrlBase(e);a=bi.resolveURL(l,this.path)}else a=bi.extractUrlBase(e);this.manager.itemStart(e);let o=function(l){i?i(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new $s(this.manager);c.setPriority(this.priority),c.setCache(this.cache),c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,a,function(u){t(u),r.manager.itemEnd(e)},o)}catch(u){o(u)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r,a={},o={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===$p){try{a[at.KHR_BINARY_GLTF]=new bu(e)}catch(h){i&&i(h);return}r=JSON.parse(a[at.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new wu(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,priority:this.priority,cache:this.cache,withCredentials:this.withCredentials,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){let h=this.pluginCallbacks[u](l);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[h.name]=h,a[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){let h=r.extensionsUsed[u],d=r.extensionsRequired||[];switch(h){case at.KHR_MATERIALS_UNLIT:a[h]=new eu;break;case at.KHR_DRACO_MESH_COMPRESSION:a[h]=new xu(r,this.dracoLoader);break;case at.KHR_TEXTURE_TRANSFORM:a[h]=new _u;break;case at.KHR_MESH_QUANTIZATION:a[h]=new vu;break;default:d.indexOf(h)>=0&&o[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(n,i)}parseAsync(e,t){let n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}};function uy(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}function Dt(s,e,t){let n=s.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}var at={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DIFFUSE_ROUGHNESS:"KHR_materials_diffuse_roughness",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Qh=class{constructor(e){this.parser=e,this.name=at.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,i=t.cache.get(n);if(i)return i;let r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],l,u=new Ne(16777215);c.color!==void 0&&u.setRGB(c.color[0],c.color[1],c.color[2],ln);let h=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new as(u),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new ss(u),l.distance=h;break;case"spot":l=new is(u),l.distance=h,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),ti(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}},eu=class{constructor(){this.name=at.KHR_MATERIALS_UNLIT}getMaterialType(){return Ht}extendParams(e,t,n){let i=[];e.color=new Ne(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],ln),e.opacity=a[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,Je))}return Promise.all(i)}},tu=class{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=Dt(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},nu=class{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Dt(this.parser,e,this.name)!==null?Qt:null}extendMaterialParams(e,t){let n=Dt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(i.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ae(r,r)}return Promise.all(i)}},iu=class{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_DIFFUSE_ROUGHNESS}getMaterialType(e){return Dt(this.parser,e,this.name)!==null?Qt:null}extendMaterialParams(e,t){let n=Dt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return t.diffuseRoughness=n.diffuseRoughnessFactor!==void 0?n.diffuseRoughnessFactor:0,n.diffuseRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"diffuseRoughnessMap",n.diffuseRoughnessTexture)),Promise.all(i)}},su=class{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Dt(this.parser,e,this.name)!==null?Qt:null}extendMaterialParams(e,t){let n=Dt(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},ru=class{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Dt(this.parser,e,this.name)!==null?Qt:null}extendMaterialParams(e,t){let n=Dt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessMinimum=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessMaximum=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(i)}},au=class{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_SHEEN}getMaterialType(e){return Dt(this.parser,e,this.name)!==null?Qt:null}extendMaterialParams(e,t){let n=Dt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];if(t.sheenColor=new Ne(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],ln)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,Je)),n.sheenRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(i)}},ou=class{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Dt(this.parser,e,this.name)!==null?Qt:null}extendMaterialParams(e,t){let n=Dt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&i.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(i)}},cu=class{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_VOLUME}getMaterialType(e){return Dt(this.parser,e,this.name)!==null?Qt:null}extendMaterialParams(e,t){let n=Dt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let r=n.attenuationColor||[1,1,1];return t.attenuationColor=new Ne().setRGB(r[0],r[1],r[2],ln),Promise.all(i)}},lu=class{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_IOR}getMaterialType(e){return Dt(this.parser,e,this.name)!==null?Qt:null}extendMaterialParams(e,t){let n=Dt(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},hu=class{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Dt(this.parser,e,this.name)!==null?Qt:null}extendMaterialParams(e,t){let n=Dt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let r=n.specularColorFactor||[1,1,1];return t.specularColor=new Ne().setRGB(r[0],r[1],r[2],ln),n.specularColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,Je)),Promise.all(i)}},uu=class{constructor(e){this.parser=e,this.name=at.EXT_MATERIALS_BUMP}getMaterialType(e){return Dt(this.parser,e,this.name)!==null?Qt:null}extendMaterialParams(e,t){let n=Dt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&i.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(i)}},du=class{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Dt(this.parser,e,this.name)!==null?Qt:null}extendMaterialParams(e,t){let n=Dt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&i.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(i)}},fu=class{constructor(e){this.parser=e,this.name=at.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;let r=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}},pu=class{constructor(e){this.parser=e,this.name=at.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=i.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}},mu=class{constructor(e){this.parser=e,this.name=at.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=i.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}},Wc=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let c=i.byteOffset||0,l=i.byteLength||0,u=i.count,h=i.byteStride,d=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(u,h,d,i.mode,i.filter).then(function(f){return f.buffer}):a.ready.then(function(){let f=new ArrayBuffer(u*h);return a.decodeGltfBuffer(new Uint8Array(f),u,h,d,i.mode,i.filter),f})})}else return null}},gu=class{constructor(e){this.name=at.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=t.meshes[n.mesh];for(let l of i.primitives)if(l.mode!==Ln.TRIANGLES&&l.mode!==Ln.TRIANGLE_STRIP&&l.mode!==Ln.TRIANGLE_FAN&&l.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],c={};for(let l in a)o.push(this.parser.getDependency("accessor",a[l]).then(u=>(c[l]=u,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{let u=l.pop(),h=u.isGroup?u.children:[u],d=l[0].count,f=[];for(let m of h){let x=new Xe,g=new L,p=new Gt,v=new L(1,1,1),y=new Hr(m.geometry,m.material,d);for(let w=0;w<d;w++)c.TRANSLATION&&g.fromBufferAttribute(c.TRANSLATION,w),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,w),c.SCALE&&v.fromBufferAttribute(c.SCALE,w),y.setMatrixAt(w,x.compose(g,p,v));let _=null;for(let w in c)if(w==="_COLOR_0"){let M=c[w];y.instanceColor=new ui(M.array,M.itemSize,M.normalized)}else if(w!=="TRANSLATION"&&w!=="ROTATION"&&w!=="SCALE"){if(_===null){let b=y.geometry;_=new Ye,_.name=b.name;for(let S in b.attributes)_.setAttribute(S,b.attributes[S]);for(let S in b.morphAttributes)_.morphAttributes[S]=b.morphAttributes[S];b.index!==null&&_.setIndex(b.index),_.morphTargetsRelative=b.morphTargetsRelative;for(let S of b.groups)_.addGroup(S.start,S.count,S.materialIndex);b.boundingBox!==null&&(_.boundingBox=b.boundingBox.clone()),b.boundingSphere!==null&&(_.boundingSphere=b.boundingSphere.clone()),_.drawRange.start=b.drawRange.start,_.drawRange.count=b.drawRange.count,_.userData=Object.assign({},b.userData),y.geometry=_}let M=c[w];_.setAttribute(w,new ui(M.array,M.itemSize,M.normalized))}Et.prototype.copy.call(y,m),this.parser.assignFinalMaterial(y),f.push(y)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}},$p="glTF",Pa=12,Kp={JSON:1313821514,BIN:5130562},bu=class{constructor(e){this.name=at.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Pa),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==$p)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-Pa,r=new DataView(e,Pa),a=0;for(;a<i;){let o=r.getUint32(a,!0);a+=4;let c=r.getUint32(a,!0);if(a+=4,c===Kp.JSON){let l=new Uint8Array(e,Pa+a,o);this.content=n.decode(l)}else if(c===Kp.BIN){let l=Pa+a;this.body=e.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},xu=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=at.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},l={};for(let u in a){let h=Mu[u]||u.toLowerCase();o[h]=a[u]}for(let u in e.attributes){let h=Mu[u]||u.toLowerCase();if(a[u]!==void 0){let d=n.accessors[e.attributes[u]],f=dr[d.componentType];l[h]=f.name,c[h]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,d){i.decodeDracoFile(u,function(f){for(let m in f.attributes){let x=f.attributes[m],g=c[m];g!==void 0&&(x.normalized=g)}h(f)},o,l,ln,d)})})}},_u=class{constructor(){this.name=at.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let n=Math.cos(e.rotation),i=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*i,e.offset.x,-e.repeat.x*i,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},vu=class{constructor(){this.name=at.KHR_MESH_QUANTIZATION}},qc=class extends Kn{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,u=i-t,h=(n-t)/u,d=h*h,f=d*h,m=e*l,x=m-l,g=-2*f+3*d,p=f-d,v=1-g,y=p-d+h;for(let _=0;_!==o;_++){let w=a[x+_+o],M=a[x+_+c]*u,b=a[m+_+o],S=a[m+_]*u;r[_]=v*w+y*M+g*b+p*S}return r}},dy=new Gt,yu=class extends qc{interpolate_(e,t,n,i){let r=super.interpolate_(e,t,n,i);return dy.fromArray(r).normalize().toArray(r),r}},Ln={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},dr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Jp={9728:Ot,9729:qt,9984:Wo,9985:rr,9986:us,9987:Pn},Yp={33071:Rn,33648:Os,10497:Ut},Yh={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Mu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ki={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},fy={CUBICSPLINE:void 0,LINEAR:Ki,STEP:ji},Zh={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function py(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new He({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Yn})),s.DefaultMaterial}function vs(s,e,t){for(let n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function ti(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function my(s,e,t){let n=!1,i=!1,r=!1;for(let l=0,u=e.length;l<u;l++){let h=e[l];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);let a=[],o=[],c=[];for(let l=0,u=e.length;l<u;l++){let h=e[l];if(n){let d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):s.attributes.position;a.push(d)}if(i){let d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):s.attributes.normal;o.push(d)}if(r){let d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):s.attributes.color;c.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){let u=l[0],h=l[1],d=l[2];return n&&(s.morphAttributes.position=u),i&&(s.morphAttributes.normal=h),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function gy(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function by(s){let e,t=s.extensions&&s.extensions[at.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+$h(t.attributes):e=s.indices+":"+$h(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+$h(s.targets[n]);return e}function $h(s){let e="",t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function Su(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function xy(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var _y=new Xe,wu=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new uy,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,a=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let c=o.match(/Version\/(\d+)/);i=n&&c?parseInt(c[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&a<98?(this.textureLoader=new Rt(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)):(this.textureLoader=new da(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setWithCredentials(this.options.withCredentials),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new $s(this.options.manager),this.fileLoader.setPriority(this.options.priority),this.fileLoader.setCache(this.options.cache),this.fileLoader.setResponseType("arraybuffer"),(this.options.withCredentials||this.options.crossOrigin==="use-credentials")&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return vs(r,o,i),ti(o,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(let c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){let a=t[i].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let i=0,r=e.length;i<r;i++){let a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let i=n.clone(),r=(a,o)=>{let c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(let[l,u]of a.children.entries())r(u,o.children[l])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let i=e(t[n]);if(i)return i}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let i=0;i<t.length;i++){let r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[at.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(r,a){n.load(bi.resolveURL(t.uri,i.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){let t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){let a=Yh[i.type],o=dr[i.componentType],c=i.normalized===!0,l=new o(i.count*a);return Promise.resolve(new Mt(l,a,c))}let r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],c=Yh[i.type],l=dr[i.componentType],u=l.BYTES_PER_ELEMENT,h=u*c,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,m=i.normalized===!0,x,g;if(f&&f!==h){let p=Math.floor(d/f),v="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count,y=t.cache.get(v);y||(x=new l(o,p*f,i.count*f/u),y=new Vs(x,f/u),t.cache.add(v,y)),g=new Ws(y,c,d%f/u,m)}else o===null?x=new l(i.count*c):x=new l(o,d,i.count*c),g=new Mt(x,c,m);if(i.sparse!==void 0){let p=Yh.SCALAR,v=dr[i.sparse.indices.componentType],y=i.sparse.indices.byteOffset||0,_=i.sparse.values.byteOffset||0,w=new v(a[1],y,i.sparse.count*p),M=new l(a[2],_,i.sparse.count*c);o!==null&&(g=new Mt(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let b=0,S=w.length;b<S;b++){let E=w[b];if(g.setX(E,M[b*c]),c>=2&&g.setY(E,M[b*c+1]),c>=3&&g.setZ(E,M[b*c+2]),c>=4&&g.setW(E,M[b*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=m}return g})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r],o=this.textureLoader;if(a.uri){let c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){let i=this,r=this.json,a=r.textures[e],o=r.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=a.name||o.name||"",u.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(u.name=o.uri);let d=(r.samplers||{})[a.sampler]||{};return u.magFilter=Jp[d.magFilter]||qt,u.minFilter=Jp[d.minFilter]||Pn,u.wrapS=Yp[d.wrapS]||Ut,u.wrapT=Yp[d.wrapT]||Ut,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==Ot&&u.minFilter!==qt,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());let a=i.images[e],o=self.URL||self.webkitURL,c=a.uri||"",l=!1,u;if(t.isKTX2Loader===!0&&a.bufferView!==void 0)u=n.getDependency("bufferView",a.bufferView).then(function(d){return new Promise(function(f,m){t.parse(d,f,m)})});else{if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(d){l=!0;let f=new Blob([d],{type:a.mimeType});return c=o.createObjectURL(f),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");u=Promise.resolve(c).then(function(d){return new Promise(function(f,m){let x=f;t.isImageBitmapLoader===!0&&(x=function(g){let p=new Xt(g);p.needsUpdate=!0,f(p)}),t.load(bi.resolveURL(d,r.path),x,void 0,m)})})}let h=u.then(function(d){return l===!0&&o.revokeObjectURL(c),ti(d,a),d.userData.mimeType=a.mimeType||xy(a.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),d});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){let r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[at.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[at.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let c=r.associations.get(a);a=r.extensions[at.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,c)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new Ks,un.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new js,un.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(i||r||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),r&&(c.vertexColors=!0),a&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return He}loadMaterial(e){let t=this,n=this.json,i=this.extensions,r=n.materials[e],a,o={},c=r.extensions||{},l=[];if(c[at.KHR_MATERIALS_UNLIT]){let h=i[at.KHR_MATERIALS_UNLIT];a=h.getMaterialType(),l.push(h.extendParams(o,r,t))}else{let h=r.pbrMetallicRoughness||{};if(o.color=new Ne(1,1,1),o.opacity=1,Array.isArray(h.baseColorFactor)){let d=h.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],ln),o.opacity=d[3]}h.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",h.baseColorTexture,Je)),o.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,o.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",h.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",h.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=Ve);let u=r.alphaMode||Zh.OPAQUE;if(u===Zh.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===Zh.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==Ht&&(l.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new ae(1,1),r.normalTexture.scale!==void 0)){let h=r.normalTexture.scale;o.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&a!==Ht&&(l.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==Ht){let h=r.emissiveFactor;o.emissive=new Ne().setRGB(h[0],h[1],h[2],ln)}return r.emissiveTexture!==void 0&&a!==Ht&&l.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,Je)),Promise.all(l).then(function(){let h=new a(o);return r.name&&(h.name=r.name),ti(h,r),t.associations.set(h,{materials:e}),r.extensions&&vs(i,h,r),h})}createUniqueName(e){let t=Tt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,i=this.primitiveCache;function r(o){return n[at.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return Zp(c,o,t)})}let a=[];for(let o=0,c=e.length;o<c;o++){let l=e[o],u=by(l),h=i[u];if(h)a.push(h.promise);else{let d;l.extensions&&l.extensions[at.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=Zp(new Ye,l,t),l.mode===Ln.TRIANGLE_STRIP?d=d.then(f=>qh(f,va)):l.mode===Ln.TRIANGLE_FAN&&(d=d.then(f=>qh(f,or))),i[u]={primitive:l,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,i=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let c=0,l=a.length;c<l;c++){let u=a[c].material===void 0?py(this.cache):this.getDependency("material",a[c].material);o.push(u)}return o.push(t.loadGeometries(a)),Promise.all(o).then(async function(c){let l=c.slice(0,c.length-1),u=c[c.length-1],h=[];for(let f=0,m=u.length;f<m;f++){let x=u[f],g=a[f],p,v=l[f];if(g.mode===Ln.TRIANGLES||g.mode===Ln.TRIANGLE_STRIP||g.mode===Ln.TRIANGLE_FAN||g.mode===void 0){let y=r.isSkinnedMesh===!0,_=x.hasAttribute("skinIndex")&&x.hasAttribute("skinWeight");y&&_===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),p=y&&_?new zr(x,v):new Ee(x,v),p.isSkinnedMesh===!0&&p.normalizeSkinWeights()}else if(g.mode===Ln.LINES)p=new Vr(x,v);else if(g.mode===Ln.LINE_STRIP)p=new Zi(x,v);else if(g.mode===Ln.LINE_LOOP)p=new Wr(x,v);else if(g.mode===Ln.POINTS)p=new qr(x,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(p.geometry.morphAttributes).length>0&&gy(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),ti(p,r),g.extensions&&vs(i,p,g),t.assignFinalMaterial(p),h.push(p)}for(let f=0,m=h.length;f<m;f++)t.associations.set(h[f],{meshes:e,primitives:f});if(h.length===1)return r.extensions&&vs(i,h[0],r),h[0];let d=new rt;r.extensions&&vs(i,d,r),t.associations.set(d,{meshes:e});for(let f=0,m=h.length;f<m;f++)d.add(h[f]);return d})}loadCamera(e){let t,n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Wt(vn.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new rs(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),ti(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let r=i.pop(),a=i,o=[],c=[];for(let l=0,u=a.length;l<u;l++){let h=a[l];if(h){o.push(h);let d=new Xe;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Gr(o,c)})}loadAnimation(e){let t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,a=[],o=[],c=[],l=[],u=[];for(let h=0,d=i.channels.length;h<d;h++){let f=i.channels[h],m=i.samplers[f.sampler],x=f.target,g=x.node,p=i.parameters!==void 0?i.parameters[m.input]:m.input,v=i.parameters!==void 0?i.parameters[m.output]:m.output;x.node!==void 0&&(a.push(this.getDependency("node",g)),o.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",v)),l.push(m),u.push(x))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(u)]).then(function(h){let d=h[0],f=h[1],m=h[2],x=h[3],g=h[4],p=[];for(let y=0,_=d.length;y<_;y++){let w=d[y],M=f[y],b=m[y],S=x[y],E=g[y];if(w===void 0)continue;w.updateMatrix&&w.updateMatrix();let T=n._createAnimationTracks(w,M,b,S,E);if(T)for(let R=0;R<T.length;R++)p.push(T[R])}let v=new la(r,void 0,p);return ti(v,i),v})}createNodeMesh(e){let t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){let a=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=i.weights.length;c<l;c++)o.morphTargetInfluences[c]=i.weights[c]}),a})}loadNode(e){let t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=i.children||[];for(let l=0,u=o.length;l<u;l++)a.push(n.getDependency("node",o[l]));let c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(a),c]).then(function(l){let u=l[0],h=l[1],d=l[2];d!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(d,_y)});for(let f=0,m=h.length;f<m;f++)u.add(h[f]);if(u.userData.pivot!==void 0&&h.length>0){let f=u.userData.pivot,m=h[0];u.pivot=new L().fromArray(f),u.position.x-=f[0],u.position.y-=f[1],u.position.z-=f[2],m.position.set(0,0,0),delete u.userData.pivot}return u})}_loadNodeShallow(e){let t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],a=r.name?i.createUniqueName(r.name):"",o=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),r.camera!==void 0&&o.push(i.getDependency("camera",r.camera).then(function(l){return i._getNodeRef(i.cameraCache,r.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let u;if(r.isBone===!0?u=new qs:l.length>1?u=new rt:l.length===1?u=l[0]:u=new Et,u!==l[0])for(let h=0,d=l.length;h<d;h++)u.add(l[h]);if(r.name&&(u.userData.name=r.name,u.name=a),ti(u,r),r.extensions&&vs(n,u,r),r.matrix!==void 0){let h=new Xe;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);if(!i.associations.has(u))i.associations.set(u,{});else if(r.mesh!==void 0&&i.meshCache.refs[r.mesh]>1){let h=i.associations.get(u);i.associations.set(u,{...h})}return i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],i=this,r=new rt;n.name&&(r.name=i.createUniqueName(n.name)),ti(r,n),n.extensions&&vs(t,r,n);let a=n.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(i.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let u=0,h=c.length;u<h;u++){let d=c[u];d.parent!==null?r.add(Xp(d)):r.add(d)}let l=u=>{let h=new Map;for(let[d,f]of i.associations)(d instanceof un||d instanceof Xt)&&h.set(d,f);return u.traverse(d=>{let f=i.associations.get(d);f!=null&&h.set(d,f)}),h};return i.associations=l(r),r})}_createAnimationTracks(e,t,n,i,r){let a=[],o=e.name?e.name:e.uuid,c=[];function l(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}ki[r.path]===ki.weights?(l(e),e.isGroup&&e.children.forEach(l)):c.push(o);let u;switch(ki[r.path]){case ki.weights:u=pi;break;case ki.rotation:u=mi;break;case ki.translation:case ki.scale:u=Ni;break;default:n.itemSize===1?u=pi:u=Ni;break}let h=i.interpolation!==void 0?fy[i.interpolation]:Ki,d=this._getArrayFromAccessor(n);for(let f=0,m=c.length;f<m;f++){let x=new u(c[f]+"."+ki[r.path],t.array,d,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(x),a.push(x)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Su(t.constructor),i=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let i=this instanceof mi?yu:qc;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function vy(s,e,t){let n=e.attributes,i=new hn;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(i.set(new L(c[0],c[1],c[2]),new L(l[0],l[1],l[2])),o.normalized){let u=Su(dr[o.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let o=new L,c=new L;for(let l=0,u=r.length;l<u;l++){let h=r[l];if(h.POSITION!==void 0){let d=t.json.accessors[h.POSITION],f=d.min,m=d.max;if(f!==void 0&&m!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(m[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(m[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(m[2]))),d.normalized){let x=Su(dr[d.componentType]);c.multiplyScalar(x)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}s.boundingBox=i;let a=new pn;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=a}function Zp(s,e,t){let n=e.attributes,i=[];function r(a,o){return t.getDependency("accessor",a).then(function(c){s.setAttribute(o,c)})}for(let a in n){let o=Mu[a]||a.toLowerCase();o in s.attributes||i.push(r(n[a],o))}if(e.indices!==void 0&&!s.index){let a=t.getDependency("accessor",e.indices).then(function(o){s.setIndex(o)});i.push(a)}return it.workingColorSpace!==ln&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${it.workingColorSpace}" not supported.`),ti(s,e),vy(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?my(s,e.targets,t):s})}var yy=new He({vertexColors:!0,roughness:.86}),Lt=new bn(1,12,9),My=[{coat:4810618,shirt:14142386,pants:3490122,shoe:4209720,accent:12822389},{coat:9654083,shirt:15063234,pants:4344144,shoe:4931640,accent:5074280},{coat:5401424,shirt:13752008,pants:5326911,shoe:3815732,accent:13940847},{coat:6445176,shirt:14931399,pants:3423309,shoe:4932160,accent:11058626},{coat:9205848,shirt:4217194,pants:6050374,shoe:5653560,accent:15655624},{coat:5857638,shirt:13071448,pants:4539208,shoe:3619643,accent:13873519},{coat:3690326,shirt:14275261,pants:6710867,shoe:4340531,accent:12154971},{coat:10587240,shirt:5071731,pants:3752779,shoe:4866104,accent:12100797}];function Mi(s,e=12){let t=[],n=[];for(let[r,a,o,c=0]of s)for(let l=0;l<e;l++){let u=2*Math.PI*l/e;t.push(Math.cos(u)*a,r,Math.sin(u)*o+c)}for(let r=0;r<s.length-1;r++)for(let a=0;a<e;a++){let o=r*e+a,c=r*e+(a+1)%e;n.push(o,o+e,c,c,o+e,c+e)}let i=new Ye;return i.setAttribute("position",new Le(t,3)),i.setIndex(n),i.computeVertexNormals(),i}function Xc(){let s=[];function e(t,n,i=0,r=0,a=0,o=1,c=1,l=1,u=0,h=0,d=0){let f=t.index?t.toNonIndexed():t.clone();f.deleteAttribute("uv"),f.scale(o,c,l),u&&f.rotateZ(u),h&&f.rotateY(h),d&&f.rotateX(d),f.translate(i,r,a);let m=new Ne(n),x=new Float32Array(f.attributes.position.count*3);for(let g=0;g<x.length;g+=3)m.toArray(x,g);f.setAttribute("color",new Mt(x,3)),s.push(f)}return{add:e,finish(){let t=xs(s);for(let i of s)i.dispose();let n=new Ee(t,yy);return n.castShadow=n.receiveShadow=!0,n}}}var jc=Mi([[.82,.146,.105],[.91,.169,.12],[1.08,.171,.116],[1.29,.209,.132],[1.37,.198,.11],[1.43,.078,.063]]),Sy=Mi([[.88,.135,.1],[.97,.148,.107],[1.18,.155,.104],[1.31,.18,.105],[1.36,.08,.063]]),wy=Mi([[.53,.192,.125],[.59,.184,.12],[.79,.132,.097],[.9,.143,.107]]),Ty=new bn(1,10,8),Ay=new Li(.024,.0035,4,12),Ey=new Li(.079,.022,6,18);function Qp(s){let e=Gc(s),t=v=>v[Math.floor(e()*v.length)],n=v=>e()<v,i=t([10777686,9593927,13604724,7293240,14856850,8412239,12158054,15252892]),r=t([3484197,6308659,9989452,4601906,2040867,7889742,3814720]),a=t(My),o=Math.floor(e()*6),c=Math.floor(e()*6),l=new rt,u=Xc();if(u.add(Sy,a.shirt),o===0||o===4)u.add(jc,a.coat),u.add(new Ft(.095,.28,.028),a.accent,-.072,1.245,.113,.78,1,.55,.28),u.add(new Ft(.095,.28,.028),a.accent,.072,1.245,.113,.78,1,-.55,.28),u.add(new Ft(.018,.34,.012),a.accent,0,1.1,.119,1,1,1);else if(o===1)u.add(jc,a.coat),u.add(new Ft(.115,.29,.075),a.accent,0,1.225,.129,.82,1,0,.08),u.add(Ey,a.accent,0,1.405,-.004,1,1,1,0,0,Math.PI/2);else if(o===2)u.add(jc,a.coat),u.add(new bn(1,12,8),a.coat,0,1.42,-.047,.106,.102,.085),u.add(new Ft(.018,.3,.012),a.accent,0,1.12,.116);else if(o===3)u.add(wy,a.coat),u.add(new Ft(.25,.045,.025),a.accent,0,.88,.105);else if(o===5){u.add(jc,a.coat),u.add(new Ft(.035,.3,.024),a.accent,0,1.16,.132);for(let v of[.99,1.12,1.25])u.add(Lt,a.accent,0,v,.151,.011,.011,.006)}u.add(Mi([[1.365,.058,.054],[1.48,.06,.055]]),i);let h=.091+e()*.016,d=.123+e()*.02,f=.088+e()*.018;if(u.add(Lt,i,0,1.581,.008,h,d,f),c===0)u.add(Lt,r,0,1.661,-.009,h*1.04,.064,f*1.04),u.add(Lt,r,0,1.606,-.061,h*.98,.073,.043);else if(c===1){u.add(Lt,r,0,1.659,-.012,h*1.05,.067,f*1.04);for(let v of[-1,1])u.add(Lt,r,v*h*.86,1.541,-.015,.033,.105,.067)}else if(c===2){u.add(Lt,r,0,1.655,-.005,h*1.18,.085,f*1.16),u.add(Lt,r,0,1.621,-.098,.042,.05,.043);for(let v=0;v<8;v++){let y=v*Math.PI/4;u.add(Lt,r,Math.cos(y)*h*.92,1.64+Math.sin(y)*.052,-.006+Math.sin(y)*.025,.026,.031,.025)}}else if(c===3){u.add(Lt,r,0,1.66,-.01,h*1.02,.062,f*1.03),u.add(Lt,r,0,1.692,-.091,.046,.043,.047);for(let v of[-1,1])u.add(Lt,r,v*h*.9,1.558,-.012,.028,.076,.048)}else c===4?(u.add(Lt,r,0,1.648,-.005,h*1.1,.075,f*1.1),u.add(new gn(h*.99,h*1.09,.075,12),t([5401458,10116939,7627848,5794636]),0,1.674,-.008,1,1,1),u.add(Lt,a.accent,0,1.719,-.008,.026,.012,.024)):(u.add(Lt,r,0,1.649,-.012,h*1.06,.072,f*1.06),u.add(new gn(h*1.35,h*1.35,.018,14),a.accent,0,1.626,.008),u.add(new Jr(h*.78,.087,12),r,0,1.69,.008));let m=.008+f*.92,x=new Ne(i).lerp(new Ne(15843746),.15).getHex();for(let v of[-1,1])u.add(Lt,x,v*h*.47,1.555,.008+f*.8,.034,.024,.013);for(let v of[-1,1])u.add(Lt,15785928,v*h*.34,1.597,m,.02,.014,.008),u.add(Lt,3682091,v*h*.34,1.597,m+.007,.008,.01,.005),u.add(new Ft(.04,.009,.008),r,v*h*.34,1.622,m-.005,1,1,1,-.08*v);if(u.add(Lt,i,0,1.565,.008+f*.99,.018,.026,.018),u.add(Lt,5848376,0,1.531,.008+f*.91,.032,.007,.006),n(.24)){for(let v of[-1,1])u.add(Ay,4538938,v*h*.34,1.595,m+.011,.8,.7,.75);u.add(new Ft(.028,.004,.004),4538938,0,1.595,m+.012)}if(n(.17))for(let v of[-1,1])u.add(Lt,14005358,v*h*.96,1.555,.023,.009,.014,.009);if(n(.43)){let v=t([4937294,6968387,4414314,5984350]);u.add(Ty,v,0,1.105,-.14,.147,.206,.078);for(let y of[-1,1])u.add(new Ft(.027,.36,.019),a.accent,y*.106,1.185,.098,.88,1,1,-y*.13)}else if(n(.28)){let v=n(.5)?-1:1;u.add(new Ft(.17,.21,.09),a.accent,v*.228,.977,-.015),u.add(new Ft(.026,.43,.018),a.coat,v*.12,1.19,.09,1,1,1,-v*.32)}let g=u.finish();l.add(g);let p=[];for(let v of[-1,1]){let y=Xc();y.add(Mi([[-.385,.071,.067],[-.18,.083,.088],[-.015,.094,.101],[.04,.087,.083]]),a.pants);let _=y.finish();_.position.set(v*.084,.884,0),g.add(_);let w=Xc();w.add(Mi([[-.39,.051,.046],[-.3,.053,.05],[-.14,.071,.075],[-.016,.067,.065],[.025,.061,.059]]),a.pants),w.add(Lt,a.shoe,0,-.422,.05,.068,.052,.145),w.add(new Ft(.12,.024,.24),a.accent,0,-.454,.065);let M=w.finish();M.position.y=-.39,_.add(M);let b=Xc();b.add(Mi([[-.18,.054,.058],[-.09,.062,.072],[.012,.069,.074],[.04,.05,.049]]),a.coat),b.add(Mi([[-.43,.034,.032,.045],[-.28,.044,.045,.029],[-.16,.049,.05],[-.12,.042,.046]]),i),b.add(Lt,i,0,-.451,.05,.039,.056,.035),b.add(Mi([[-.19,.057,.06],[-.155,.058,.061]]),a.accent);let S=b.finish();S.position.set(v*.205,1.355,0),S.rotation.z=v*.075,g.add(S),p.push({hip:_,knee:M,shoulder:S})}return l.userData.gait={upper:g,limbs:p,cadence:.85+e()*.3,offset:e()*Math.PI*2,stride:.36+e()*.12,knee:.42+e()*.28,armSwing:.22+e()*.13,bounce:.012+e()*.012,sway:.7+e()*.7,lean:.01+e()*.02},l.scale.set(.92+e()*.14,.94+e()*.13,.92+e()*.14),l}function em(s,e){let t=s.userData.gait,n=e*t.cadence+t.offset,i=1-Math.cos(n*2);t.upper.position.set(Math.sin(n)*.013*t.sway,-.004+t.bounce*i,0),t.upper.rotation.set(t.lean,Math.sin(n)*.036,Math.sin(n)*.018*t.sway),t.limbs.forEach(({hip:r,knee:a,shoulder:o},c)=>{let l=n+c*Math.PI,u=Math.sin(l),h=Math.max(0,Math.cos(l));r.rotation.x=u*t.stride-.045,r.rotation.z=(c===0?-1:1)*.015*Math.abs(u),a.rotation.x=.045+h*t.knee,o.rotation.x=-u*t.armSwing-.035,o.rotation.z=(c===0?-1:1)*.06+Math.sin(l+.4)*.025})}var Tu,fr;function Ry(){return fr||(fr=new He({color:3951689,metalness:.28,roughness:.5,transparent:!0,opacity:.88,depthWrite:!1,side:Ve,polygonOffset:!0,polygonOffsetFactor:-2}),fr.onBeforeCompile=s=>{s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
varying float vOxfordTrimDistance;`),s.vertexShader=s.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
 vec3 trimWorld=(modelMatrix*vec4(transformed,1.0)).xyz; vOxfordTrimDistance=distance(trimWorld,cameraPosition);`),s.fragmentShader=s.fragmentShader.replace("#include <common>",`#include <common>
varying float vOxfordTrimDistance;`),s.fragmentShader=s.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
 diffuseColor.a *= 1.0 - smoothstep(18.0, 39.0, vOxfordTrimDistance);`)},fr.customProgramCacheKey=()=>"oxford-wheel-arch-distance-fade-v1",fr)}function Au(s,e){if(!e?.length||s.userData.archTrim)return;s.updateWorldMatrix(!0,!0);let t=new Li(.382,.019,5,26,Math.PI);t.rotateY(Math.PI/2);let n=[];for(let a of e){let o=new L;a.o.getWorldPosition(o),s.worldToLocal(o);let c=t.clone();c.translate(o.x,o.y,o.z),n.push(c)}t.dispose();let i=xs(n,!1);for(let a of n)a.dispose();if(!i)return;let r=new Ee(i,Ry());r.castShadow=!1,r.receiveShadow=!0,r.renderOrder=2,s.add(r),s.userData.archTrim=r}var tm={value:null};function nm(s){tm.value=s}function Kc(s){s.normalMap=null,s.onBeforeCompile=e=>{e.uniforms.courierSky=tm,e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
 uniform sampler2D courierSky;`),e.fragmentShader=e.fragmentShader.replace("#include <opaque_fragment>",`
   vec3 reflectedView=reflect(-normalize(vViewPosition),normal);
   vec3 skyRay=inverseTransformDirection(reflectedView,viewMatrix);
   float skyShelf=0.32+0.10*skyRay.x-0.07*skyRay.z;
   float ribbon=1.0-smoothstep(0.025,0.19,abs(skyRay.y-skyShelf));
   vec3 sampleRay=normalize(vec3(skyRay.x,0.07+0.13*skyRay.y,skyRay.z));
   vec3 skyPigment=texture2D(courierSky,equirectUv(sampleRay),2.0).rgb;
   outgoingLight*=vec3(.88,1.02,1.02);
   outgoingLight+=skyPigment*ribbon*0.65;
   #include <opaque_fragment>
  `)},s.customProgramCacheKey=()=>"oxford-reflected-sky-enamel-v1"}function Eu(s){if(!Tu){let t=document.createElement("canvas");t.width=t.height=96;let n=t.getContext("2d"),i=n.createImageData(96,96);for(let r=0;r<9216;r++){let a=(r%96-47.5)/47.5,o=(Math.floor(r/96)-47.5)/47.5,c=Math.max(0,1-(a*a)**1.7-(o*o)**2.6);i.data.set([27,30,31,Math.round(104*c*c)],r*4)}n.putImageData(i,0,0),Tu=new Ht({map:new mn(t),transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1})}let e=new Ee(new dn(2.54,5.05),Tu);e.rotation.x=-Math.PI/2,e.position.y=.024,e.userData.contactDecal=!0,e.castShadow=!1,e.receiveShadow=!1,s.add(e)}function Ru(s){let e=new Map;for(let t of s.children.slice()){if(!t.isMesh)continue;let n=t.geometry.index?t.geometry.toNonIndexed():t.geometry.clone();t.updateMatrix(),n.applyMatrix4(t.matrix),n.attributes.uv||n.setAttribute("uv",new Le(new Float32Array(n.attributes.position.count*2),2)),e.has(t.material)||e.set(t.material,[]),e.get(t.material).push(n),s.remove(t)}for(let[t,n]of e){let i=new Ee(xs(n),t);i.castShadow=i.receiveShadow=!0,s.add(i);for(let r of n)r.dispose()}}function Cu(s,e,t){let n=s.parent.getWorldQuaternion(new Gt).invert().multiply(e.getWorldQuaternion(new Gt));return{o:s,front:t,base:s.quaternion.clone(),axle:new L(1,0,0).applyQuaternion(n),up:new L(0,1,0).applyQuaternion(n)}}var Cy=new Gt,Py=new Gt;function pr(s,e,t,n,i,r){let a=s.userData;if(a.vehicleArt){a.spin=((a.spin||0)+e*r/(a.detailed?.52:.345))%(Math.PI*2);for(let o of a.wheels||[])o.o.quaternion.copy(o.base).premultiply(Cy.setFromAxisAngle(o.axle,a.spin)),o.front&&o.o.quaternion.premultiply(Py.setFromAxisAngle(o.up,t));a.wasBraking===n&&a.wasDusk===i||(a.wasBraking=n,a.wasDusk=i,a.tail&&(a.tail.emissive.setHex(16720660),a.tail.emissiveIntensity=n?3.1:i?.54:.055),a.head&&(a.head.emissive.setHex(16773332),a.head.emissiveIntensity=i?2.1:.14))}}function im(){let s=document.createElement("canvas");s.width=256,s.height=128;let e=s.getContext("2d"),t=e.createImageData(s.width,s.height);for(let i=0;i<s.height;i++)for(let r=0;r<s.width;r++){let a=(r+.5)/s.width*2-1,o=(i+.5)/s.height*2-1,c=-.09+.045*Math.tanh(4*a),l=vn.smoothstep(o,c-.045,c+.045),u=.78*Math.exp(-3.2*a*a-((o+.012)/.068)**2),h=.19*Math.exp(-1.8*a*a-((o-.068)/.155)**2),d=.03*Math.exp(-1.2*a*a-((o-.34)/.44)**2),f=Math.round(255*l*Math.min(1,u+h+d)),m=(i*s.width+r)*4;t.data.set([f,f,f,255],m)}return e.putImageData(t,0,0),new mn(s)}function sm(s){let{scene:e,sun:t,env:n,dusk:i,renderer:r}=s,a=i?s.twilightSky:s.daySky;a&&(e.background=a,e.environment=a,nm(a)),e.backgroundIntensity=i?1.03:.97,e.backgroundBlurriness=0,e.environmentIntensity=i?.62:.67,r.toneMappingExposure=i?1.16:1.04,t.color.set(i?16753785:16770488),t.intensity=i?.98:2.56,n.color.set(i?11324653:12640241),n.groundColor.set(i?8090488:9667694),n.intensity=i?.89:1.28,e.fog.color.set(i?12948878:11914699),e.fog.density=i?94e-5:66e-5,s.lightVector.set(...i?[-.957,.145,-.24]:[.535,.744,.398]).normalize();for(let o of s.car.userData.beams)o.visible=i;s.life.dusk=i,r.shadowMap.needsUpdate=!0}function rm(s,e,t,n){let{sun:i,lightVector:r}=s,a=r,o=s.shadowRight.set(a.z,0,-a.x).normalize(),c=s.shadowUp.crossVectors(a,o),l=s.shadowCenter.set(e,t,n),u=140/2048,h=l.dot(o),d=l.dot(c);l.addScaledVector(o,Math.round(h/u)*u-h),l.addScaledVector(c,Math.round(d/u)*u-d),i.target.position.copy(l),i.position.copy(l).addScaledVector(a,132)}var Iy=gt(2435883),am=gt(11383982,.4),Jc=gt(2635831,.45),Dy=gt(5467767,.22),Ly=gt(10067862,.4),Ny=new He({color:12205618,emissive:6034443}),Fy=new He({color:16773833,emissive:14470560,emissiveIntensity:.65}),Uy;function Ia(s,e=!1){let t=new rt,n=new He({color:s,metalness:.56,roughness:.26}),i=Ny.clone(),r=Fy.clone();t.userData.vehicleArt=!0,t.userData.tail=i,t.userData.head=r,t.userData.wheels=[];let a=!e&&s%3===0,o=a?1.67:1.54;function c(l,u){let h=[],d=[];for(let[g,p,v,y,_]of l)h.push(-y,p,g,y,p,g,_,v,g,-_,v,g);for(let g=0;g<l.length-1;g++)for(let p=0;p<4;p++){let v=g*4+p,y=g*4+(p+1)%4;d.push(v,v+4,y,y,v+4,y+4)}let f=(l.length-1)*4;d.push(0,1,3,1,2,3,f,f+3,f+1,f+1,f+3,f+2);let m=new Ye;m.setAttribute("position",new Le(h,3)),m.setIndex(d),m.computeVertexNormals(),u.side=Ve;let x=new Ee(m,u);x.castShadow=!0,t.add(x)}c([[-2.19,.44,.8,.78,.84],[-1.91,.36,.97,.91,.86],[-1.11,.36,1.04,.94,.88],[1.16,.36,.98,.94,.87],[1.91,.41,.87,.89,.81],[2.19,.49,.75,.77,.74]],n),c([[-1.49,1,a?1.4:1.07,.81,.73],[a?-1.3:-.87,1.01,o,.83,.68],[.5,1.01,o,.84,.68],[1.18,.97,1.02,.81,.77]],Dy),Te(t,1.39,.075,a?1.79:1.36,0,o,-(a?.4:.19),n);for(let l of[-.847,.847]){Te(t,.055,.45,.095,l,1.25,-.17,Jc),Te(t,.1,.12,.25,l*1.16,1.08,.67,n);for(let u of[-.63,.54])Te(t,.04,.04,.16,l*1.09,.9,u,Ly)}for(let l of[-.57,.57])Te(t,.43,.108,.068,l,.774,2.09,r),Te(t,.43,.132,.08,l,.786,-2.12,i);Te(t,1.46,.1,.14,0,.49,-2.17,Jc),Te(t,.4,.17,.02,0,.68,-2.205,Oy),Te(t,.89,.13,.05,0,.59,2.14,Jc),Ru(t);for(let l of[-.91,.91])for(let u of[-1.4,1.32]){let h=new rt;h.position.set(l,.347,u),t.add(h);let d=It(h,.343,.343,.19,0,0,0,Iy,22);d.rotation.z=Math.PI/2;let f=Math.sign(l),m=It(h,.218,.218,.012,f*.103,0,0,Jc,16);m.rotation.z=Math.PI/2;for(let g=0;g<5;g++){let p=g*2*Math.PI/5,v=Te(h,.018,.047,.166,f*.113,-Math.sin(p)*.102,Math.cos(p)*.102,am);v.rotation.x=p}let x=It(h,.057,.057,.015,f*.125,0,0,am,12);x.rotation.z=Math.PI/2,Ru(h),t.userData.wheels.push(Cu(h,t,u>0))}if(e||Eu(t),pr(t,0,0,!1,!1,0),e){t.userData.beams=[],Kc(n),Au(t,t.userData.wheels);let l=[...t.children],u=()=>new Vc().setMeshoptDecoder(qp).load("data/stream/courier.glb",h=>{let d=h.scene,f=new hn().setFromObject(d),m=f.getSize(new L),x=4.46/m.z;d.scale.setScalar(x),d.position.set(-(f.min.x+f.max.x)*.5*x,-f.min.y*x,-(f.min.z+f.max.z)*.5*x),d.traverse(g=>{if(!g.isMesh)return;g.castShadow=g.receiveShadow=!0;let p=g.material;p.name==="Glass"&&(p.transmission=0,p.transparent=!0,p.opacity=.68,p.roughness=.12,p.color.set(7505028)),p.name==="Paint 1 Carmine"&&(Kc(p),p.color.set(3497561),p.metalness=.56,p.roughness=.23,p.clearcoat=1,p.clearcoatRoughness=.12),p.name==="Paint 2 Carmine"&&(Kc(p),p.color.set(2178630),p.metalness=.48,p.roughness=.27,p.clearcoat=.82,p.clearcoatRoughness=.16),p.name==="Brakelight"&&(p.color.set(8921115),p.roughness=.31,p.metalness=.12,p.toneMapped=!1,t.userData.tail=p),p.name==="Headlight"&&(t.userData.head=p),(p.name==="Tireside"||p.name==="Tiretread")&&(p.roughness=.87,p.envMapIntensity=.38)});for(let g of l)t.remove(g);t.add(d),t.userData.detailed=!0,t.userData.wheels=[],delete t.userData.archTrim,d.updateWorldMatrix(!0,!0),d.traverse(g=>{/^Wheel(Front|Rear)[LR]$/.test(g.name)&&t.userData.wheels.push(Cu(g,t,g.name.includes("Front")))}),Au(t,t.userData.wheels),Eu(t),t.userData.wasDusk=null});t.userData.loadDetailed=u;for(let h of[-.63,.63]){let d=new is(16773079,720,82,.5,.62,1.3);d.map=Uy??=im(),d.position.set(h,.82,2.02),d.target.position.set(h*1.8,-.64,40),t.add(d,d.target),d.visible=!1,t.userData.beams.push(d)}}return t}var Oy=gt(15065030),Yc=class{constructor(e,t){this.scene=e,this.city=t,this.random=Gc(246),this.cars=[],this.people=[],this.elapsed=0,this.claim=new Map,this.pool={cars:[],people:[]}}signal(e,t){return(t+e%23)%22}validTurn(e,t){let[n,i]=t;return this.city.legal(e.to,e.ri,this.city.roads[i])?n!==e.from&&this.city.roads[i].k!=="track":!1}spawn(e,t){let n=t?this.people:this.cars,i=this.random()*Math.PI*2,r=(t?12:48)+this.random()*(t?110:160),a=[e[0]+Math.sin(i)*r,e[1]+Math.cos(i)*r],o=this.city.nearest(a,m=>t?["footway","pedestrian","path"].includes(m.k):m.d&&m.n&&m.k!=="service",t?45:80);if(!o||dt(o.q,e)<(t?10:33)||n.some(m=>dt([m.mesh.position.x,m.mesh.position.z],o.q)<(t?6:18)))return;let c=o.r,l=!c.o&&this.random()<.5,u=c.p[o.i-(l?0:1)],h=c.p[o.i-(l?1:0)],f=(t?this.pool.people:this.pool.cars).pop()||(t?Qp(Math.floor(this.random()*999)):Ia([7174519,14999506,5661038,8605249,4218228][Math.floor(this.random()*5)]));this.scene.add(f),n.push({mesh:f,ri:c.index,from:u,to:h,progress:(l?1-o.q[2]:o.q[2])*dt(o.a,o.b),speed:t?1+this.random()*.5:4.5,wait:0,stopped:-1,phase:this.random()*6})}tick(e,t,n,i){this.elapsed+=e;for(let r of[!1,!0]){let a=r?this.people:this.cars;a.length<(r?10:7)&&this.random()<e*10&&this.spawn(t,r);for(let o=a.length-1;o>=0;o--){let c=a[o],l=c.mesh,u=this.city.roads[c.ri],h=this.city.nodes[c.from],d=this.city.nodes[c.to],f=dt(h,d),m=(d[0]-h[0])/(f||1),x=(d[1]-h[1])/(f||1),g=r||u.o?0:Math.min(u.w*.24,2),p=h[0]+m*c.progress-x*g,v=h[1]+x*c.progress+m*g;if(dt(t,[p,v])>(r?210:340)){this.scene.remove(l),(r?this.pool.people:this.pool.cars).push(l),a.splice(o,1);continue}let y=r?1.35:Math.min(u.k==="residential"?8:11,c.speed+e*1.8),_=f-c.progress,w=c.speed;if(r)c.speed=y;else{let M=(t[0]-p)*m+(t[1]-v)*x;Math.abs(Math.cos(i)*x+Math.sin(i)*m)>.72&&M>0&&M<9+c.speed&&Math.abs((t[0]-p)*x-(t[1]-v)*m)<2.1&&(y=Math.min(y,Math.max(0,(M-5)*.5)));for(let O of this.cars){if(O===c||Math.cos(O.mesh.rotation.y)*x+Math.sin(O.mesh.rotation.y)*m<.65)continue;let H=O.mesh.position,F=(H.x-p)*m+(H.z-v)*x;F>0&&F<15&&Math.abs((H.x-p)*x-(H.z-v)*m)<1.9&&(y=Math.min(y,Math.max(0,(F-5)*.65)))}let b=d[2]==="traffic_signals",S=d[2]==="stop",E=Math.abs(m)>Math.abs(x),T=this.signal(c.to,this.elapsed),R=b&&(E?T>9:T<11||T>20),D=new Set(this.city.edges[c.to].map(O=>O[0])).size>2,U=this.claim.get(c.to),P=D&&U&&U.actor!==c&&U.until>this.elapsed;_<18&&(R||P||S&&c.stopped!==c.to)?(y=Math.min(y,Math.sqrt(6*Math.max(0,_-2.1))),_<2.3&&(y=0,c.wait+=e,c.wait>1.2&&!R&&!P&&(c.stopped=c.to,c.wait=0))):D&&_<8&&this.claim.set(c.to,{actor:c,until:this.elapsed+2.8}),c.speed+=Hn(y-c.speed,-e*4,e*2)}if(c.progress+=c.speed*e,c.phase+=c.speed*e*4,l.position.set(p,this.city.ground(p,v)+(r?.21:.29),v),l.rotation.y=Math.atan2(m,x),r?em(l,c.phase):(l.rotation.x=-Math.atan2(this.city.ground(p+m*1.2,v+x*1.2)-this.city.ground(p-m*1.2,v-x*1.2),2.4),pr(l,c.speed,0,c.speed<w-.08*e||_<3&&c.speed<.2,!!this.dusk,e)),c.progress>=f){let M=r?[]:this.city.edges[c.to].filter(S=>this.validTurn(c,S));if(r){let S=u.p.indexOf(c.to),E=u.p.indexOf(c.from),T=S+Math.sign(S-E);M=[[u.p[T]??c.from,c.ri]]}if(!M.length)if(!u.o||r)M=[[c.from,c.ri]];else{this.scene.remove(l),(r?this.pool.people:this.pool.cars).push(l),a.splice(o,1);continue}let b=M[Math.floor(this.random()*M.length)];c.from=c.to,c.to=b[0],c.ri=b[1],c.progress=0}}}}};var $c=new Rt().load("data/illustration/awning.png");$c.colorSpace=Je;$c.wrapS=$c.wrapT=Ut;var ky=new He({map:$c,roughness:.82,side:Ve}),By=[0,1,2].map(s=>{let e=new Rt().load("data/illustration/commercial-display-"+s+".png");return e.colorSpace=Je,e.wrapS=e.wrapT=Ut,e}),Qc=new Rt().load("data/illustration/commercial-glow.png");Qc.colorSpace=Je;Qc.wrapS=Qc.wrapT=Ut;var Pu=gt(3688768),Yw=gt(11248012),zy=gt(7888200);function om(s,e,t){let n=new rt,i=new Ui,r=new Ui,a=new Ui,o=[],c=.18,l=Math.cos(c),u=Math.sin(c),h=(x,g)=>[-9.7+x*l-g*u,46+x*u+g*l],d=(x,g,p)=>{let[v,y]=h(x,g);return[v,e.ground(v,y)+p,y]};function f(x,g,p,v,y,_){for(let w=g;w<v;w+=4)for(let M=p;M<y;M+=4){let b=Math.min(w+4,v),S=Math.min(M+4,y);x.quad(d(w,M,_),d(w,S,_),d(b,S,_),d(b,M,_),(S-M)/3,(b-w)/3)}}f(i,-50,-46,-24,43,.125),f(i,23,-44,47,43,.125),f(i,-49,-48,47,-25,.125),f(i,-50,26,46,44,.125),f(a,-53,-47,-50,43,.15),f(a,47,-46,50,43,.15);let m=0;for(let x of[-38.5,34])for(let g=-28;g<30;g+=3.35){let p=null,v=-1/0;for(let b=-6;b<=6;b+=.6){let S=h(x+b,g),E=e.nearest(S,R=>R.d,15);if(!E)continue;let T=E.d-E.r.w*.5;T>v&&(p=[x+b,...S],v=T)}if(!p||v<2.65)continue;let[y,_,w]=p;if(f(r,y-2.5,g-1.45,y+2.3,g-1.35,.174),m++%5===1||Math.hypot(_+46.2,w-69.1)<6)continue;let M=Ia([8620678,8731959,12303789,4148312,5534601,5396825][m%6]);M.position.set(_,e.ground(_,w)+.15,w),M.rotation.y=(x<0?1:-1)*1.3-c,n.add(M),o.push([_,w,M.rotation.y])}s.userData.squareLamps=[],s.userData.lampGlass=gt(16050115,.48);for(let x of[-23,23])for(let g of[-24,-4,20]){let[p,v]=h(x,g),y=e.ground(p,v);It(n,.095,.17,4,p,y+2,v,Pu),It(n,.28,.43,.45,p,y+.22,v,Pu);let _=new Ee(new bn(.36,12,10),s.userData.lampGlass);_.position.set(p,y+4.21,v),n.add(_),s.userData.squareLamps.push(_.position.clone())}for(let[x,g]of[[-16,-20],[16,-20],[-16,21],[16,21]]){let[p,v]=h(x,g),y=e.ground(p,v);Te(n,2.2,.13,.65,p,y+.49,v,zy);for(let _ of[-.78,.78])Te(n,.12,.48,.36,p+_,y+.23,v,Pu)}for(let[x,g]of[[i,t.road],[r,t.white],[a,t.path]]){let p=x.mesh(g);p.receiveShadow=!0,s.add(p)}return Ca(n),s.add(n),o}var Iu=new Map([["City Grocery","#3e4134"],["Southside Gallery","#394c43"],["Ajax Diner","#a65039"],["Neilson's","#404b49"],["Square Books Jr","#485f66"],["Boure","#3f4b4e"],["University Sporting Goods","#745648"],["The Blind Pig Pub","#42504c"],["End of All Music","#77513c"]]),Zc=new Map,mr=!1,cm=new Map([["City Grocery",[16760168,.42]],["Southside Gallery",[16764803,.34]],["Ajax Diner",[16749904,.54]],["Neilson's",[16761462,.47]],["Square Books Jr",[16763513,.5]],["Boure",[16758123,.4]],["University Sporting Goods",[16763267,.39]],["The Blind Pig Pub",[16754523,.46]],["End of All Music",[16760178,.44]]]);function Gy(s){if(Zc.has(s))return Zc.get(s);let[e,t]=cm.get(s)||[16759664,.42],n=Iu.get(s),i=Array.from(s).reduce((o,c)=>(o+c.charCodeAt(0))%3,0),r=new He({map:By[i],emissiveMap:Qc,color:16777215,emissive:mr?e:2103054,emissiveIntensity:mr?t:.018,roughness:.52,metalness:.02}),a={outline:gt(3419947),paint:gt(n),cream:gt(15259053),glass:r,signMaterial:new He({map:bs(s.toUpperCase(),n,"#fff0c9"),side:Ve})};return Zc.set(s,a),a}function lm(s){mr=!!s;for(let[e,t]of Zc){let[n,i]=cm.get(e)||[16759664,.42];t.glass.emissive.setHex(mr?n:2103054),t.glass.emissiveIntensity=mr?i:.018}Fp(mr)}function hm(s,e,t){let n=e.places.filter(([i,r,a])=>Iu.has(i)&&Math.floor(r/512)===s.xx&&Math.floor(a/512)===s.zz);for(let[i,r,a]of n){let o=1/0,c;for(let[R]of s.data.buildings)for(let D=0;D<R.length;D++){let U=R[D],P=R[(D+1)%R.length],O=gs([r,a],U,P),H=dt(O,[r,a]);H<o&&dt(U,P)>2.8&&(o=H,c={p:O,a:U,b:P})}if(!c||o>12)continue;let{p:l,a:u,b:h}=c,d=Math.atan2(h[1]-u[1],u[0]-h[0]),f=e.nearest(l,R=>R.d,55);if(!f)continue;(f.q[0]-l[0])*Math.sin(d)+(f.q[1]-l[1])*Math.cos(d)<0&&(d+=Math.PI);let m=new rt;m.position.set(l[0],e.ground(...l),l[1]),m.rotation.y=d;let x=Math.min(7.7,Math.max(3.2,dt(u,h)*.78)),g=Iu.get(i),{outline:p,paint:v,cream:y,glass:_,signMaterial:w}=Gy(i);Te(m,x,2.72,.16,0,1.52,.055,v),Te(m,x,.13,.2,0,.27,.11,p),Te(m,x*.91,.12,.22,0,.4,.13,y);let M=Math.max(.72,(x-1.86)*.5),b=1.54;for(let R of[-M*.55-.46,M*.55+.46])Te(m,M+.18,b+.18,.11,R,1.66,.17,p),Te(m,M,b,.08,R,1.66,.235,_),Te(m,M,.055,.035,R,2.3,.282,y),Te(m,.045,b,.035,R-M*.28,1.66,.282,y);Te(m,1.02,2.05,.18,0,1.37,.18,p),Te(m,.82,1.84,.075,0,1.37,.28,_),Te(m,.045,1.82,.035,0,1.37,.324,y),Te(m,x*.8,.78,.18,0,3.63,.17,p);let S=Te(m,x,.24,1.62,0,2.88,.91,ky);S.rotation.x=.12;let E=Math.max(8,Math.round(x/.43));for(let R=0;R<E;R++){let D=-x/2+(R+.5)*x/E;Te(m,x/E*.84,.13,.08,D,2.68,1.705,R%2?y:p)}Te(m,x*.78,.72,.13,0,3.63,.245,y);let T=new Ee(new dn(x*.75,.58),w);T.position.set(0,3.63,.318),m.add(T);for(let R of[-x*.5,x*.5])Te(m,.035,2.78,.035,R,1.52,.151,p);Te(m,x,.032,.03,0,4.07,.1,p),t.add(m)}}function Du(s){let e=new Rt().load("data/"+s);return e.colorSpace=Je,e.wrapS=e.wrapT=Ut,e.anisotropy=8,e}function Da(s,e,t=.96){return new He({map:s,color:e,roughness:t,side:Ve})}function um(s){for(let i of["road","path"])s[i]?.map?.dispose(),s[i]?.dispose();let e=Du("illustration/road-asphalt.png"),t=Du("illustration/road-parking.png"),n=Du("illustration/road-concrete.png");return s.road=Da(e,16777215,.99),s.road.onBeforeCompile=i=>{i.fragmentShader=i.fragmentShader.replace("#include <map_fragment>",`#include <map_fragment>
   vec2 roadMeters=vMapUv*4.0;
   float along=roadMeters.y;
   float across=roadMeters.x;
   float track=abs(fract((across+.77)/1.65)-.5)*1.65;
   float tirePath=1.0-smoothstep(.12,.46,track);
   float meander=.09*sin(along*.73)+.055*sin(along*2.15);
   float lengthwise=abs(mod(across+meander+2.0,4.0)-2.0);
   float px=max(fwidth(lengthwise),.012);
   float tar=(1.0-smoothstep(.016,.016+px,lengthwise))*smoothstep(-.35,.55,sin(along*.103+across*.51));
   float patch=smoothstep(.76,.81,sin(along*.091+across*.033))*smoothstep(.0,.065,across-.34)*smoothstep(.0,.085,2.72-across);
   diffuseColor.rgb*=1.16-.16*tirePath-.22*tar-.14*patch;
   diffuseColor.rgb+=vec3(.009,.008,.006)*(1.0-tirePath);
  `)},s.road.customProgramCacheKey=()=>"oxford-road-wheel-wear-v1",s.parking=Da(t,16777215,.99),s.path=Da(n,16777215,.94),s.curb=Da(n,15918278,.91),s.curbFace=Da(n,13812901,.94),s.edge=new He({color:6712168,roughness:.98,side:Ve}),s.markYellow=new He({color:15847803,emissive:2759430,emissiveIntensity:.24,roughness:.72,side:Ve}),s.markWhite=new He({color:15855328,emissive:2434075,emissiveIntensity:.22,roughness:.72,side:Ve}),s}var dm=ms+.19,Hy=111.08,Lu=new He({color:4868415,roughness:.9,side:Ve}),Vy=new He({color:4014137,roughness:.94,side:Ve});function el(s,e,t){let n=[];for(let a of s){let[o,c]=a.center,[l,u]=a.tangent,h=-u,d=l,f=a.length/2,m=a.width/2,x=[[-f,-m],[f,-m],[f,m],[-f,m]],g=x.map(([y,_])=>[o+l*y+h*_,a.bottom,c+u*y+d*_]),p=x.map(([y,_])=>[o+l*y+h*_,a.top,c+u*y+d*_]),v=[[...p].reverse(),g,[g[0],g[1],p[1],p[0]],[g[1],g[2],p[2],p[1]],[g[2],g[3],p[3],p[2]],[g[3],g[0],p[0],p[3]]];for(let y of v)for(let _ of[0,1,2,0,2,3])n.push(...y[_])}if(!n.length)return;let i=new Ye;i.setAttribute("position",new Le(n,3)),i.computeVertexNormals();let r=new Ee(i,e);r.castShadow=!0,r.receiveShadow=!0,t.add(r)}function Nu(s,e){let t=s.along,n=1;for(;n<t.length-1&&t[n]<e;)n++;let i=s.p[n-1],r=s.p[n],a=s._nodes[i],o=s._nodes[r],c=t[n]-t[n-1]||1,l=Math.max(0,Math.min(1,(e-t[n-1])/c)),u=(o[0]-a[0])/c,h=(o[1]-a[1])/c;return{x:a[0]+(o[0]-a[0])*l,z:a[1]+(o[1]-a[1])*l,tangent:[u,h]}}function Wy(s,e){let t=e.map(([r,a])=>[Math.max(0,Math.min(s,r)),Math.max(0,Math.min(s,a))]).filter(([r,a])=>a>r).sort((r,a)=>r[0]-a[0]),n=[],i=0;for(let[r,a]of t)r>i&&n.push([i,r]),i=Math.max(i,a);return i<s&&n.push([i,s]),n}function fm(s,e,t){if(!(e.roadTiles.get(s.key)||[]).some(([h])=>ps.has(e.roads[h].id)))return!1;let i=e.roads.filter(h=>ps.has(h.id));if(i.length!==2)return!1;for(let h of i)h._nodes=e.nodes;let r=i[0].p.find(h=>i[1].p.includes(h));if(r===void 0)return!1;let a=[],o=[],c=[],l=[],u=new Set;for(let h of i){let d=h.along.at(-1),f=h.p.indexOf(r),m=h.along[f],x=[[m-1.35,m+1.35]],g=h.p.map(_=>e.ground(...e.nodes[_])),p=g.indexOf(Math.max(...g));if(Math.max(...g)-Math.min(...g)>.22){let _=h.along[p];x.push(p===0?[0,2]:[d-2,d])}let v=Wy(d,x),y=h.w/2-.045;for(let[_,w]of v)for(let M of[-1,1]){let b=(_+w)/2,S=Nu(h,b),E=[-S.tangent[1],S.tangent[0]],T=S.x+E[0]*M*y,R=S.z+E[1]*M*y;a.push({center:[T,R],tangent:S.tangent,length:w-_,width:.09,bottom:ms-.4,top:dm-.055});let D=h.w/2+.055,U=dm;o.push({center:[S.x+E[0]*M*D,R+E[1]*M*(D-y)],tangent:S.tangent,length:w-_,width:.075,bottom:U+.4,top:U+.47}),o.push({center:[S.x+E[0]*M*D,R+E[1]*M*(D-y)],tangent:S.tangent,length:w-_,width:.075,bottom:U+.78,top:U+.86});let P=[_,w];for(let O=Math.ceil((_+.02)/1.9)*1.9;O<w-.02;O+=1.9)P.push(O);for(let O of P){let H=Nu(h,O),F=Math.round(H.x*5)+"_"+Math.round(H.z*5)+"_"+M;u.has(F)||(u.add(F),c.push({center:[H.x+E[0]*M*D,H.z+E[1]*M*D],tangent:S.tangent,length:.085,width:.085,bottom:U,top:U+.86}))}for(let O=Math.max(1.8,Math.ceil(_/3.8)*3.8);O<w-1.1;O+=3.8){let H=Nu(h,O),F=Math.round(H.x*2)+"_"+Math.round(H.z*2)+"_"+M;u.has("pile_"+F)||(u.add("pile_"+F),l.push({center:[H.x+E[0]*M*.48,H.z+E[1]*M*.48],tangent:S.tangent,length:.16,width:.16,bottom:Hy-.44,top:ms-.39}))}}}return el(a,Lu,t),el(o,Lu,t),el(c,Lu,t),el(l,Vy,t),!0}function Fu(s){let e=new Ye;for(let[t,{array:n,size:i}]of Object.entries(s))e.setAttribute(t,new Mt(n,i));return e}var tl=class{constructor(e){this.next=0,this.pending=new Map,this.worker=new Worker("tile-worker.js"),this.worker.onmessage=({data:t})=>{let n=this.pending.get(t.id);n&&(this.pending.delete(t.id),t.error?n.reject(Error(t.error)):n.resolve(t))},this.worker.onerror=t=>{this.failure=Error(t.message||"Terrain worker stopped");for(let n of this.pending.values())n.reject(this.failure);this.pending.clear()},this.worker.postMessage({dem:e.dem,heights:e.heights})}build(e,t,n){if(this.failure)return Promise.reject(this.failure);let i=++this.next;return new Promise((r,a)=>{this.pending.set(i,{resolve:r,reject:a}),this.worker.postMessage({id:i,xx:e.xx,zz:e.zz,buildings:t.buildings,trees:t.trees,ecology:{treeRadiusDm:n?.treeRadiusDm}})})}};var qy=new Map([[729667689,"square"],[729667685,"square"],[729667690,"square"],[645334019,"campus"],[645334020,"campus"],[645334012,"campus"],[645334011,"campus"],[318716688,"campus"],[673931449,"residential"],[731111316,"historic"],[731111317,"historic"],[640957678,"courtyard"],[640957681,"courtyard"],[296969170,"shore"]]),mm=new Map([[25420088,"commercial"],[546276016,"commercial"],[308322540,"courtyard"],[308322699,"courtyard"],[308322705,"courtyard"]]),Xy=new Map([[1334530637,"residential"]]),gm={square:8944488,campus:8551789,residential:7829871,historic:8746589,courtyard:7632238,shore:7565150,commercial:14209201},jy={square:1.55,campus:3.1,residential:2.25,historic:1.6,courtyard:2.55,shore:1.8,commercial:2.65},Uu=new WeakMap;function pm(s){let e=Uu.get(s);return e||(e=new Map(Object.entries(gm).map(([t,n])=>[t,new Ht({color:n,transparent:!0,opacity:t==="commercial"?.62:.34,depthWrite:!1,side:Ve,polygonOffset:!0,polygonOffsetFactor:-2})])),Uu.set(s,e),e)}function Ou(s,e,t,n,i){s.push(...e,...t,...n,...i)}function Ky(s,e,t,n){let i=s.nodes[e.p[t-1]],r=s.nodes[e.p[t]],a=Math.hypot(r[0]-i[0],r[1]-i[1])||1,o=vn.clamp(n/a,0,1),c=(r[0]-i[0])/a,l=(r[1]-i[1])/a,u=i[0]+c*n,h=i[1]+l*n;return[u,s.surface(e,t,o,u,h),h,c,l,a]}function Jy(s,e,t){for(let[n,i]of s.roadTiles.get(e.key)||[]){let r=s.roads[n],a=qy.get(Number(r.id));if(!a||!["footway","path","pedestrian"].includes(r.k))continue;let o=s.nodes[r.p[i-1]],c=s.nodes[r.p[i]],l=Math.hypot(c[0]-o[0],c[1]-o[1]);if(l<.25)continue;let u=r.along?.[i-1]||0,h=r.along?.[i]??u+l,d=Math.max(.8,Math.min(4.5,r.w||1.8)),f=jy[a]||2.35,m=Math.ceil((u+.15)/f)*f;for(let x=m;x<h-.1;x+=f){let g=x-u,p=Ky(s,r,i,g),v=d*.5,y=[-p[4],p[3]],_=.026,w=p[1]+.194,M=(S,E)=>[p[0]+y[0]*E+p[3]*S*_*.5,w,p[2]+y[1]*E+p[4]*S*_*.5],b=t.get(a);Ou(b,M(-1,-v),M(1,-v),M(1,v),M(-1,v))}}}function Yy(s,e,t){let n=e.data.buildings||[],i=e.data.trees||[];for(let[r,a]of s.roadTiles.get(e.key)||[]){let o=s.roads[r],c=Xy.get(Number(o.id));if(!c)continue;let l=s.nodes[o.p[a-1]],u=s.nodes[o.p[a]],h=Math.hypot(u[0]-l[0],u[1]-l[1]);if(h<1)continue;let d=(u[0]-l[0])/h,f=(u[1]-l[1])/h,m=Math.max(2.2,(o.w||6.6)*.5),x=.34;for(let g of[-1,1])for(let p=1.3;p<h-1;p+=3.4){let v=l[0]+d*p-f*g*(m+x*.5),y=l[1]+f*p+d*g*(m+x*.5);if(s.nearest([v,y],S=>["footway","path","pedestrian","cycleway"].includes(S.k),1.15)||i.some(S=>Math.hypot(S[0]-v,S[1]-y)<1.05)||n.some(S=>nl(v,y,S[0])&&!S[1].some(E=>nl(v,y,E))))continue;let _=s.ground(v,y)+.025,w=.9,M=x*.5,b=(S,E)=>[v+d*S-f*g*E,_,y+f*S+d*g*E];Ou(t.get(c),b(-w,-M),b(w,-M),b(w,M),b(-w,M))}}}function nl(s,e,t){let n=!1;for(let i=0,r=t.length-1;i<t.length;r=i++){let a=t[i],o=t[r];a[1]>e!=o[1]>e&&s<(o[0]-a[0])*(e-a[1])/(o[1]-a[1])+a[0]&&(n=!n)}return n}function Zy(s,e,t,n){let i=1/0,r=null;for(let a of n){let o=mm.get(Number(a.id));if(o)for(let c=1;c<a.p.length;c++){let l=s.nodes[a.p[c-1]],u=s.nodes[a.p[c]],h=u[0]-l[0],d=u[1]-l[1],f=h*h+d*d||1,m=vn.clamp(((e-l[0])*h+(t-l[1])*d)/f,0,1),x=Math.hypot(e-l[0]-h*m,t-l[1]-d*m);x<i&&(i=x,r=o)}}return i<115?r:null}function $y(s,e,t,n){for(let[i,r,a]of e.data.surfaces||[]){if(i!=="parking"||r.length<3)continue;let o=r.reduce((y,_)=>y+_[0],0)/r.length,c=r.reduce((y,_)=>y+_[1],0)/r.length,l=Zy(s,o,c,n);if(!l)continue;let u=Math.min(...r.map(y=>y[0])),h=Math.max(...r.map(y=>y[0])),d=Math.min(...r.map(y=>y[1])),f=Math.max(...r.map(y=>y[1]));if(h-u<4||f-d<2)continue;let m=h-u>=f-d,x=m?u:d,g=m?h:f,p=m?d:u,v=m?f:h;for(let y=Math.ceil(x/2.65)*2.65;y<g-1;y+=2.65){let _=[],w=null,M=null,b=Math.ceil((v-p)/.38);for(let S=0;S<=b;S++){let E=p+(v-p)*S/b,T=m?y:E,R=m?E:y,D=nl(T,R,r)&&!a.some(U=>nl(T,R,U));D&&w===null&&(w=[T,R]),!D&&w&&(M&&_.push([w,M]),w=null),D&&(M=[T,R])}w&&M&&_.push([w,M]);for(let[[S,E],[T,R]]of _){let D=T-S,U=R-E,P=Math.hypot(D,U)||1,O=-U/P*.025,H=D/P*.025,F=s.ground(S,E)+.252,J=s.ground(T,R)+.252;Ou(t.get(l),[S+O,F,E+H],[T+O,J,R+H],[T-O,J,R-H],[S-O,F,E-H])}}}}function bm(s,e){let t=new rt;t.name="Mapped district surface art "+e.key;let n=new Map(Object.keys(gm).map(r=>[r,[]]));Jy(s,e,n),Yy(s,e,n);let i=Uu.get(s)?.parkingRoads;if(!i){i=s.roads.filter(a=>mm.has(Number(a.id)));let r=pm(s);r.parkingRoads=i}$y(s,e,n,i);for(let[r,a]of n){if(!a.length)continue;let o=new Ye;o.setAttribute("position",new Le(a,3)),o.computeVertexNormals();let c=pm(s).get(r),l=new Ee(o,c);l.name="source-aligned "+r+" surface joints",l.renderOrder=3,l.castShadow=!1,l.receiveShadow=!1,t.add(l)}return t}function xm(s,{landCover:e,grassDetail:t,pavedDetail:n,painterlyDetail:i}){s.onBeforeCompile=r=>{r.uniforms.landCover={value:e},r.uniforms.grassDetail={value:t},r.uniforms.pavedDetail={value:n},r.uniforms.painterlyDetail={value:i},r.vertexShader=r.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vGroundWorld;`),r.vertexShader=r.vertexShader.replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vGroundWorld = (modelMatrix * vec4(transformed, 1.0)).xyz;`),r.fragmentShader=r.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vGroundWorld;
uniform sampler2D landCover;
uniform sampler2D grassDetail;
uniform sampler2D pavedDetail;
uniform sampler2D painterlyDetail;`),r.fragmentShader=r.fragmentShader.replace("#include <map_fragment>",`#include <map_fragment>
    // cover.r marks ESA/WorldCover classes 10,20,30,40,90; .g is class 80 water;
    // .b is 8 m mean of a max-filtered 2018 LiDAR canopy-height raster / 16 m.
    vec3 lc = texture2D(landCover, vMapUv).rgb;
    vec3 aerial = diffuseColor.rgb;
    float luminance = dot(aerial, vec3(.2126,.7152,.0722));
    float exGreen = aerial.g - aerial.r*.83 - aerial.b*.17;
    // WorldCover class 50 (built-up) is folded into the binary nonvegetation
    // mask, so local NAIP greenness must be allowed to recover campus lawns.
    float greenSignal = smoothstep(-.004,.042,exGreen);
    float visibleGreen = greenSignal * (1.0-lc.g);
    float canopy = smoothstep(.16,.52,lc.b);
    float canopyGround = smoothstep(.08,.28,lc.b) * (1.0-lc.g);
    float grass = clamp(max(lc.r*.86,visibleGreen*.83)+lc.b*.46,0.0,1.0)*(1.0-lc.g);
    // Trees over city lawns still cast shade on turf. Dense, continuous crowns
    // introduce leaf litter; a single high tree cell does not turn a lawn brown.
    float understory = canopyGround*canopy*(.16+.14*(1.0-greenSignal));

    // World coordinates keep the repeat phase continuous across streamed tile edges.
    vec2 detailUv = vGroundWorld.xz * .2265625;
    vec3 grassGrain = texture2D(grassDetail, detailUv).rgb;
    vec3 asphaltGrain = texture2D(pavedDetail, detailUv*.91).rgb;
    vec3 brushPigment = texture2D(painterlyDetail, vGroundWorld.xz*.021).rgb;
    float fineSoil = .58 + grassGrain.r*.42;

    float warmSoil = smoothstep(.006,.072,(aerial.r-aerial.g)*.58+(aerial.g-aerial.b)*.24);
    float soilLight = smoothstep(.035,.19,luminance) * (1.0-smoothstep(.72,.92,luminance));
    float unclassified = (1.0-max(max(lc.r,visibleGreen*.92),canopyGround*.78)) * (1.0-lc.g);
    float exposedSoil = unclassified * warmSoil * soilLight;
    float chroma = max(max(aerial.r,aerial.g),aerial.b)-min(min(aerial.r,aerial.g),aerial.b);
    float neutral = 1.0-smoothstep(.028,.14,chroma);
    float pavementLight = smoothstep(.055,.20,luminance) * (1.0-smoothstep(.78,.96,luminance));
    float paved = unclassified * (1.0-exposedSoil) * neutral * pavementLight;

    vec3 grassTone=vec3(.125,.173,.065)*(.50+grassGrain*.94);
    vec3 litterTone=vec3(.135,.112,.067)*fineSoil;
    vec3 soilTone=vec3(.18,.133,.077)*fineSoil;
    vec3 pavedTone=mix(vec3(.066,.070,.068),vec3(.205,.210,.185),smoothstep(.06,.56,luminance))*(.62+asphaltGrain*.90);
    vec3 upland=mix(pavedTone,soilTone,exposedSoil);
    // Photographic tonal variation is retained within a daylight reflectance
    // range; the white and blue pixels in NAIP are often roofs or sky glare.
    vec3 shade=clamp(aerial*1.4+.78,vec3(.79),vec3(1.13));
    upland=mix(upland,grassTone,grass);
    upland=mix(upland,litterTone,understory*(1.0-paved));
    diffuseColor.rgb=upland*shade;
    // Coarse water cells straddle the wet bank. Limit the reflection captured in
    // the overhead photograph before it becomes ground albedo in this camera.
    vec3 wetBank = mix(vec3(.052,.083,.078),vec3(.116,.131,.074),smoothstep(.055,.35,luminance));
    wetBank *= (.78+.38*grassGrain.g)*shade;
    diffuseColor.rgb = mix(diffuseColor.rgb,wetBank,clamp(lc.g,0.0,1.0));
    diffuseColor.rgb += (brushPigment-vec3(.5))*vec3(.047,.051,.038);`)},s.customProgramCacheKey=()=>"oxford-ground-surface-painterly-v2"}var Qy=new ts({vertexColors:!0,side:Ve}),gr=512,La=65,ku=new Float32Array(La*La*2),_m=new Uint16Array(4096*6);for(let s=0,e=0;s<La;s++)for(let t=0;t<La;t++){let n=s*La+t;ku[n*2]=t/64,ku[n*2+1]=1-s/64,t<64&&s<64&&(_m.set([n,n+65,n+1,n+1,n+65,n+66],e),e+=6)}var il=class{constructor(e,t){this.scene=e,this.city=t,this.terrainWorker=new tl(t),this.mat=um(Up()),this.tiles=new Map,this.active=new Set,this.loader=new Rt,this.focus=[0,0],this.grass=this.loader.load("data/grass.jpg"),this.grass.colorSpace=Je,this.grass.wrapS=this.grass.wrapT=Ut,this.grass.anisotropy=8,this.groundPaint=this.loader.load("data/ground-painterly.jpg"),this.groundPaint.colorSpace=Je,this.groundPaint.wrapS=this.groundPaint.wrapT=Ut,this.groundPaint.anisotropy=4,this.recordExteriorsPromise=fetch("data/record-exteriors.json").then(n=>n.ok?n.json():null).then(n=>Cp(n?.records||[])).catch(n=>(console.warn("Record exterior details unavailable",n),new Map)),this.starting=!0,this.launchKeys=[],this.streamStats={requested:0,completed:0,discarded:0,evicted:0,drains:0,peakLoads:0},this.pending=[],this.loading=0,this.detailQueue=[],this.detailFrame=0,this.failed=[],this.completed=0,zp(e,t),this.parkedCars=om(e,t,this.mat),this.ecology=new Bc,this.nearTrees=new kc(e,this),this.paving=this.mat.road.map}update(e,t){let n=Math.floor(e/gr),i=Math.floor(t/gr),r=n+"_"+i;if(this.focus=[e,t],this.ecology.tick(performance.now()*.001),this.nearTrees.tick(e,t),this.center===r)return;this.center=r;let a=[],[o,c,l,u]=this.city.dem.bounds;for(let h=-2;h<=2;h++)for(let d=-2;d<=2;d++){let f=n+h,m=i+d;f*512<o||f*512>=l||m*512<c||m*512>=u||a.push({xx:f,zz:m,key:f+"_"+m,near:Math.abs(h)<=1&&Math.abs(d)<=1,dist:h*h+d*d})}if(this.starting)for(let h of a){let d=Math.max(h.xx*gr-e,0,e-(h.xx+1)*gr),f=Math.max(h.zz*gr-t,0,t-(h.zz+1)*gr);h.launch=Math.hypot(d,f)<90}this.starting&&(this.launchKeys=a.filter(h=>h.launch).map(h=>h.key)),this.active=new Set(a.map(h=>h.key));for(let[h,d]of this.tiles)this.active.has(h)||(d.group&&(this.scene.remove(d.group),this.dispose(d.group)),this.tiles.delete(h),this.streamStats.evicted++);this.pending=[];for(let h of a.sort((d,f)=>+!!f.launch-+!!d.launch||d.dist-f.dist)){let d=this.tiles.get(h.key);if(d){d.near=h.near,d.detail&&(d.detail.visible=h.near),d.far&&(d.far.visible=!h.near||!d.detail),h.near&&d.far&&!d.detail&&this.detail(d);continue}this.pending.push(h)}this.pump()}dispose(e){e.traverse(t=>{t.geometry?.dispose(),t.userData.tileMat&&(t.userData.cover?.dispose(),t.material.map?.dispose(),t.material.dispose())})}get launchReady(){return this.launchKeys.length>0&&this.launchKeys.every(e=>this.tiles.get(e)?.detail)}resumeStreaming(){this.starting=!1,this.pump()}get running(){return this.loading+this.detailQueue.length+(this.starting?0:this.pending.length)}pump(){for(;this.loading<3&&this.pending.length&&(!this.starting||this.pending[0].launch);){let e=this.pending.shift();this.tiles.set(e.key,e),this.loading++,this.streamStats.requested++,this.streamStats.peakLoads=Math.max(this.streamStats.peakLoads,this.loading),this.load(e).catch(t=>{console.error("Tile "+e.key,t),this.failed.push(e.key)}).finally(()=>{this.loading--,this.pump()})}}async load(e){let[t,n,i,r,a]=await Promise.all([this.loader.loadAsync("data/cover/"+e.key+".png"),this.loader.loadAsync("data/aerial/"+e.key+".jpg"),this.city.tileSet.has(e.key)?fetch("data/tiles/"+e.key+".json").then(d=>d.json()):Promise.resolve({buildings:[],trees:[],surfaces:[]}),fetch("data/ecology/"+e.key+".json").then(d=>d.ok?d.json():null),this.recordExteriorsPromise]);if(this.tiles.get(e.key)!==e){n.dispose(),t.dispose(),this.streamStats.discarded++;return}e.group=new rt,e.group.userData.tileKey=e.key,e.data=i,e.ecology=r,e.recordExteriors=a,n.colorSpace=Je,n.anisotropy=8;let o=await this.terrainWorker.build(e,i,r);if(this.tiles.get(e.key)!==e){n.dispose(),t.dispose(),this.streamStats.discarded++;return}let c=Fu(o.ground);c.setAttribute("uv",new Mt(ku,2)),c.setIndex(new Mt(_m,1));let l=new He({map:n,roughness:1});xm(l,{landCover:t,grassDetail:this.grass,pavedDetail:this.paving,painterlyDetail:this.groundPaint});let u=new Ee(c,l);u.userData.cover=t,u.receiveShadow=!0,u.userData.tileMat=!0,e.group.add(u);let h=new rt;for(let d of o.meshes)h.add(new Ee(Fu(d.attrs),d.material==="building"?Qy:this.mat[d.material]));e.group.add(h),e.far=h,h.visible=!0,this.scene.add(e.group),this.nearTrees.tileLoaded(e,...this.focus),e.near&&this.detail(e),this.completed++,this.streamStats.completed++,this.lastStream=performance.now()}detail(e){e.builder||e.detail||(e.builder=this.buildDetail(e),this.detailQueue.push(e),this.detailFrame||(this.detailFrame=requestAnimationFrame(()=>this.advanceDetails())))}advanceDetails(){this.detailFrame=0;let e=performance.now()+(this.starting?4:1.6);for(this.detailQueue.sort((t,n)=>+(n.key===this.center)-+(t.key===this.center));this.detailQueue.length&&performance.now()<e;){let t=this.detailQueue[0];if(this.tiles.get(t.key)!==t){t.builder.return(),t.staging&&this.dispose(t.staging),this.detailQueue.shift();continue}try{if(!t.builder.next().done)continue}catch(n){this.failed.push(t.key),console.error("Detail "+t.key,n),t.staging&&this.dispose(t.staging)}this.detailQueue.shift(),t.builder=null,t.staging=null,this.lastStream=performance.now()}this.detailQueue.length?this.detailFrame=requestAnimationFrame(()=>this.advanceDetails()):this.streamStats.drains++}*buildDetail(e){let t=0,n=new Map,i=u=>(n.has(u)||n.set(u,new Ui),n.get(u)),r=this.city,a=(u,h)=>r.ground(u,h),o=new rt;e.staging=o,e.buildingPosts=[];for(let u of e.data.buildings){++t%4===0&&(yield);let[h,d,f,m,x,g,p,v]=u;if(Bp.has(g)||v?.fragment)continue;if(v){Dp(i,r,u,e.buildingPosts,e.recordExteriors);continue}p&&Lp(i,r,p,g);let y=h.map(b=>a(...b)),_=Math.min(...y)-.12,w=Math.max(...y)+f,M=i(m+Math.abs(g%4));for(let b of[h,...d])for(let S=0;S<b.length;S++){let E=b[S],T=b[(S+1)%b.length],R=dt(E,T)/(m==="store"?8.5:6.8),D=m==="store"?1:Math.max(1,Math.round(f/3.7));M.quad([E[0],_,E[1]],[T[0],_,T[1]],[T[0],w,T[1]],[E[0],w,E[1]],R,D)}if(m==="house"&&h.length>=4&&!d.length){let b=0,S=0;for(let F=0;F<h.length;F++){let J=h[F],B=h[(F+1)%h.length],z=dt(J,B);z>b&&(b=z,S=Math.atan2(B[1]-J[1],B[0]-J[0]))}let E=Math.cos(S),T=Math.sin(S),R=h.map(([F,J])=>-T*F+E*J),D=Math.min(...R),U=Math.max(...R),P=(U+D)/2,O=Math.min((U-D)*.22,3.8),H=i("shingle"+(p?.[5]??1));for(let F=0;F<2;F++){let J=[];for(let z=0;z<h.length;z++){let W=(z+1)%h.length,K=h[z],se=h[W],V=R[z],Q=R[W];if((F?V>=P:V<=P)&&J.push(K),V<P&&Q>P||V>P&&Q<P){let re=(P-V)/(Q-V);J.push([K[0]+re*(se[0]-K[0]),K[1]+re*(se[1]-K[1])])}}if(J.length<3)continue;let B=z=>w+O*(1-Math.abs((-T*z[0]+E*z[1]-P)/((U-D)/2||1)));for(let z of rn.triangulateShape(J.map(W=>new ae(...W)),[])){let W=z.map(K=>J[K]);H.tri(...W.map(K=>[K[0],B(K),K[1]]),...W.map(K=>[K[0]/3,K[1]/3]))}for(let z=0;z<J.length;z++){let W=J[z],K=J[(z+1)%J.length];(Math.abs(B(W)-w)>.04||Math.abs(B(K)-w)>.04)&&H.quad([W[0],w,W[1]],[K[0],w,K[1]],[K[0],B(K),K[1]],[W[0],B(W),W[1]])}}}else xp(i("roof"),h,d,w)}for(let u=0;u<e.data.trees.length;u++){++t%64===0&&(yield);let[h,d,f,m]=e.data.trees[u],x=a(h,d),g=i("tree"+m),p=this.ecology.crownRadius(e,u,f);for(let v=0;v<3;v++){let y=v*Math.PI/3+h%7*.3,_=Math.cos(y)*p,w=Math.sin(y)*p;g.quad([h-_,x,d-w],[h+_,x,d+w],[h+_,x+f,d+w],[h-_,x+f,d-w])}}let c=new Set;for(let[u,h]of r.roadTiles.get(e.key)||[]){let b=function(B,z,W){let K=B/x,se=f[0]+g*B+(w[0]*(1-K)+M[0]*K)*z,V=f[1]+p*B+(w[1]*(1-K)+M[1]*K)*z;return[se,r.surface(d,h,K,se,V)+W,V]},S=function(B,z,W,K,se,V){let Q=i(V);for(let re=B;re<z-.001;re+=3.8){let Ce=Math.min(z,re+3.8),ue=b(re,W,se),De=b(re,K,se),ft=b(Ce,K,se),ke=b(Ce,W,se);if(V==="road"){let $e=(d.along[h-1]+re)/4,tt=(d.along[h-1]+Ce)/4,ne=[W/4,$e],de=[K/4,$e],he=[K/4,tt],Ae=[W/4,tt];Q.tri(ue,De,ft,ne,de,he),Q.tri(ue,ft,ke,ne,he,Ae)}else Q.quad(ue,De,ft,ke,(K-W)/4,(Ce-re)/4)}};++t%32===0&&(yield);let d=r.roads[u],f=r.nodes[d.p[h-1]],m=r.nodes[d.p[h]];if(Math.floor((f[0]+m[0])/1024)!==e.xx||Math.floor((f[1]+m[1])/1024)!==e.zz)continue;let x=dt(f,m),g=(m[0]-f[0])/x,p=(m[1]-f[1])/x,v=(B,z)=>{let W=dt(B,z)||1;return[-(z[1]-B[1])/W,(z[0]-B[0])/W]},y=(B,z)=>{let W=B[0]+z[0],K=B[1]+z[1],se=W*z[0]+K*z[1];return se>.6?[W/se,K/se]:z},_=[-p,g],w=h>1?y(v(r.nodes[d.p[h-2]],f),_):_,M=h+1<d.p.length?y(_,v(m,r.nodes[d.p[h+1]])):_;if(d.d)for(let B of[d.p[h-1],d.p[h]]){if(c.has(B))continue;let z=r.nodes[B];if(Math.floor(z[0]/512)!==e.xx||Math.floor(z[1]/512)!==e.zz)continue;let W=new Map;for(let[se,V]of r.cells.get(Math.floor(z[0]/48)+"_"+Math.floor(z[1]/48))||[]){let Q=r.roads[se];if(!Q.d)continue;let re=Q.p[V]===B?Q.p[V-1]:Q.p[V-1]===B?Q.p[V]:-1;re>=0&&W.set(re,Q)}if(W.size<3)continue;c.add(B);let K=[];for(let[se,V]of W){let Q=r.nodes[se],re=dt(z,Q)||1,Ce=(Q[0]-z[0])/re,ue=(Q[1]-z[1])/re,De=V.w*.5;for(let ft of[-1,1]){let ke=Math.min(re*.43,Math.max(2.3,Math.min(7,De*1.1)));K.push([z[0]+Ce*ke+ft*ue*De,z[1]+ue*ke-ft*Ce*De])}}K.sort((se,V)=>Math.atan2(se[1]-z[1],se[0]-z[0])-Math.atan2(V[1]-z[1],V[0]-z[0]));for(let se=0;se<K.length;se++){let V=[z,K[se],K[(se+1)%K.length]];i("road").tri(...V.map(([Q,re])=>[Q,a(Q,re)+.294,re]),...V.map(([Q,re])=>[Q*.22,re*.22]))}}let E=["footway","steps","path","cycleway","pedestrian","bridleway","corridor"].includes(d.k),T=d.w/2,R=E?.19:.27;!E&&d.d&&d.k!=="track"&&S(0,x,-T-.32,T+.32,.23,"edge");let D=["gravel","fine_gravel","dirt","earth","unpaved","ground","mud","sand","compacted"].includes(d.s)||!d.s&&d.k==="track",U=["concrete","paving_stones","cobblestone","sett"].includes(d.s),P=E||U?"path":D?"dirt":"road";if(S(0,x,-T,T,R,P),["primary","secondary","tertiary","trunk","motorway"].includes(d.k)&&d.w>=6.5){let B=r.edges[d.p[h-1]].length>2?Math.min(5,x*.4):0,z=r.edges[d.p[h]].length>2?Math.min(5,x*.4):0;if(!d.o)S(B,x-z,-.17,-.055,R+.035,"markYellow"),S(B,x-z,.055,.17,R+.035,"markYellow");else for(let W=-(d.along[h-1]%10);W<x;W+=10)W+3>0&&S(Math.max(B,W),Math.min(x-z,W+3),-.075,.075,R+.035,"markWhite")}let H=d.d&&["residential","tertiary","secondary","unclassified"].includes(d.k)&&d.w<10,F=[];for(let B of[-1,1]){let z=d.sidewalk==="both"||d.sidewalk===(B===1?"right":"left"),W=!1;if(!z&&H){let K=b(x*.5,B*(T+1.12),0),se=r.nearest(K,V=>["footway","pedestrian","path"].includes(V.k),4.5);if(se){let V=r.nodes[se.r.p[se.i-1]],Q=r.nodes[se.r.p[se.i]],re=dt(V,Q)||1;W=se.d<1.9&&Math.abs(g*(Q[0]-V[0])/re+p*(Q[1]-V[1])/re)>.84}}(z||W)&&F.push({side:B,explicit:z})}let J=B=>r.edges[B]?.some(([,z])=>r.roads[z].k==="service")||!1;for(let{side:B,explicit:z}of F){let W=J(d.p[h-1])?Math.min(3.1,x*.28):0,K=x-(J(d.p[h])?Math.min(3.1,x*.28):0);if(K<=W)continue;S(W,K,B*(T+.02),B*(T+.25),.285,"curb");let se=i("curbFace"),V=B*(T+.025);for(let Q=W;Q<K-.01;Q+=3.8){let re=Math.min(K,Q+3.8),Ce=b(Q,V,.19),ue=b(re,V,.19),De=b(Q,V,.285),ft=b(re,V,.285);se.quad(De,ft,ue,Ce,(re-Q)/3,.095/3)}z&&S(W,K,B*(T+.25),B*(T+2.05),.2,"path")}}for(let[u,h,d]of e.data.surfaces){if(u!=="parking"||h.length<3)continue;++t%32===0&&(yield);let f=h.concat(...d),m=p=>p.map(v=>new ae(v[0],v[1])),x=rn.triangulateShape(m(h),d.map(m)),g=i("parking");for(let p of x){let v=[f[p[2]],f[p[1]],f[p[0]]];g.tri(...v.map(([y,_])=>[y,a(y,_)+.245,_]),...v.map(([y,_])=>[y/4,_/4]))}}for(let u=0;u<(e.data.sidewalks||[]).length;u++){u%24===0&&(yield);let[h,d]=e.data.sidewalks[u];if(!h||h.length<2)continue;let f=d*.5,m=i("path"),x=[];for(let g=0;g<h.length;g++){let p=h[Math.max(0,g-1)],v=h[Math.min(h.length-1,g+1)],y=v[0]-p[0],_=v[1]-p[1],w=Math.hypot(y,_)||1;x.push([-_/w,y/w])}for(let g=0;g<h.length-1;g++){let M=function(b,S){let E=x[b],T=Math.max(.42,Math.abs(E[0]*w[0]+E[1]*w[1])),R=Math.min(f/T,f*2.2)*S,D=h[b],U=D[0]+E[0]*R,P=D[1]+E[1]*R;return[U,a(U,P)+.215,P]},p=h[g],v=h[g+1],y=[v[0]-p[0],v[1]-p[1]],_=Math.hypot(...y)||1,w=[-y[1]/_,y[0]/_];m.quad(M(g,-1),M(g,1),M(g+1,1),M(g+1,-1),1,Math.hypot(v[0]-p[0],v[1]-p[1])/3)}}for(let[u,h,d]of e.data.surfaces)if(u==="water"){yield;let f=this.ecology.waterSurface(r,h,d);f&&o.add(f)}e.ecology?.understory?.length&&(yield,o.add(this.ecology.understory(r,e.ecology.understory)));for(let[u,h]of n){if(yield,!h.pos.length)continue;let d=h.mesh(this.mat[u]);d.receiveShadow=!u.startsWith("tree"),d.castShadow=u.startsWith("tree")||/house|store|commercial|campus|shingle|roof|wall-|surface-|ledge/.test(u),o.add(d)}let l=bm(r,e);l.children.length&&o.add(l),yield,fm(e,r,o)&&(yield),Wp(e,r,o,this.mat),hm(e,r,o),e.group.add(o),e.detail=o,o.visible=e.near,e.far.visible=!e.near}walkSurface(e,t){if(e<-2726.6||e>-2695.4||t<-1256.6||t>-1231.3)return this.city.ground(e,t);let n=this.city.nearest([e,t],i=>ps.has(i.id),3);return n&&n.d<=Math.min(.95,n.r.w*.5)?ms:this.city.ground(e,t)}obstructed(e,t,n=.36,i=!1,r=!1){let a=Math.floor(e/512)+"_"+Math.floor(t/512),o=this.tiles.get(a);if(!o?.data)return!0;if(Math.abs(e)<90&&Math.abs(t)<120)for(let[c,l,u]of this.parkedCars){let h=e-c,d=t-l;if(Math.abs(h*Math.cos(u)-d*Math.sin(u))<.91+n&&Math.abs(h*Math.sin(u)+d*Math.cos(u))<2.1+n)return!0}for(let c=-1;c<=1;c++)for(let l=-1;l<=1;l++){let u=this.tiles.get(o.xx+c+"_"+(o.zz+l)),h=u?.data;if(h){for(let[d,f,m]of u.buildingPosts||[])if(Math.abs(d-e)<m+n&&Math.abs(f-t)<m+n)return!0;for(let[d,f,,,,,,m]of h.buildings)if(!(m?.fragment||!Dn(e,t,d)||f.some(x=>Dn(e,t,x)))&&!m?.open?.some(x=>Dn(e,t,x)))return!0}}if(r&&e>=-2726.6&&e<=-2695.4&&t>=-1256.6&&t<=-1231.3){let c=this.city.nearest([e,t],l=>ps.has(l.id),3);c&&c.d<=Math.min(.95,c.r.w*.5)&&(i=!0)}for(let[c,l,u]of o.data.surfaces)if(!i&&c==="water"&&Dn(e,t,l)&&!u.some(h=>Dn(e,t,h)))return!0;for(let[c,l]of o.data.trees)if(Math.abs(c-e)<n+.2&&Math.hypot(c-e,l-t)<n+.2)return!0;return!1}};var sl=class{constructor(e,t){this.scene=e,this.city=t,this.fixtures=[...e.userData.squareLamps||[]],this.pool=[],this.glass=e.userData.lampGlass,this.dusk=!1,this.x=1/0,this.z=1/0;for(let n=0;n<3;n++){let i=new ss(16765348,0,27,2);i.visible=!1,e.add(i),this.pool.push(i)}fetch("data/lighting/fixtures.json").then(n=>n.json()).then(n=>this.install(n))}install(e){let t=new He({color:6844783,roughness:.77,metalness:.32});for(let[,n,i,r]of e){let a=r||6.5,o=this.city.ground(n,i),c=new Ee(new gn(.085,.16,a,8),t);c.position.set(n,o+a/2,i),c.castShadow=!0,this.scene.add(c);let l=new Ee(new gn(.5,.38,.22,12),t);l.position.set(n,o+a,i),this.scene.add(l);let u=new Ee(new bn(.33,12,7),this.glass);u.scale.y=.4,u.position.set(n,o+a-.11,i),this.scene.add(u),this.fixtures.push(u.position.clone())}this.x=1/0}setDusk(e){this.dusk=e,this.glass.emissive.setHex(16764049),this.glass.emissiveIntensity=e?2.7:0;for(let t of this.pool)t.visible=e;this.x=1/0}tick(e,t){if(!this.dusk||Math.hypot(this.x-e,this.z-t)<1.5)return;this.x=e,this.z=t;let n=this.fixtures.map(i=>({p:i,d:Math.hypot(i.x-e,i.z-t)})).filter(i=>i.d<45).sort((i,r)=>i.d-r.d);this.pool.forEach((i,r)=>{let a=n[r];i.intensity=a?98*(1-vn.smoothstep(a.d,28,45)):0,a&&i.position.copy(a.p)})}};function vm(){Qe.lights_fragment_end+=`
    vec3 paintDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
    const vec3 paintWeights = vec3(0.2126, 0.7152, 0.0722);
    float paintIntensity = dot(paintDiffuse, paintWeights) /
                           max(dot(diffuseColor.rgb, paintWeights), 0.015);
    float paintLevels = 0.21 + 0.23 * smoothstep(0.16, 0.35, paintIntensity)
                            + 0.38 * smoothstep(0.45, 0.70, paintIntensity)
                            + 0.37 * smoothstep(0.85, 1.18, paintIntensity)
                            + max(0.0, paintIntensity - 1.25);
    float paintScale = mix(1.0, clamp(paintLevels / max(paintIntensity, 0.07), 0.7, 1.3), 0.72);
    vec3 paintTint = mix(vec3(0.75, 0.97, 1.10), vec3(1.06, 1.00, 0.93),
                         smoothstep(0.23, 0.97, paintIntensity));
    reflectedLight.directDiffuse *= paintScale * paintTint;
    reflectedLight.indirectDiffuse *= paintScale * paintTint;
  `}var eM=new Set(["motorway","trunk","primary","secondary","tertiary"]);function Bu(s){let e=new Path2D;for(let t of s)if(t.length){e.moveTo(t[0][0],t[0][1]);for(let n=1;n<t.length;n++)e.lineTo(t[n][0],t[n][1]);e.closePath()}return e}var ym={full:{base:"#f0dfbf",campus:"#d9c89e",field:"#b9c890",wood:"#8da78c",park:"#b4c798",water:"#70a9aa",building:"#bf927a",street:"#fff5da",main:"#ecc47e",edge:"#8c846e",trail:"#889a82",ink:"#193c40"},mini:{base:"#203d43",campus:"#2d4c4c",field:"#42645a",wood:"#153f3f",park:"#335948",water:"#387a88",building:"#736661",street:"#9faea3",main:"#dbc39e",edge:"#384840",trail:"#657b6c",ink:"#f4f3e3"}},rl=class{constructor(e){this.city=e,this.center=[-1200,600],this.scale=.06,this.path=[],this.roads=new Map,this.buckets=new Map,this.areas=[],this.buildings={},fetch("data/atlas-context.json").then(t=>t.json()).then(t=>{this.areas=t.areas.map(([n,i,r,a])=>({kind:n,bounds:i,path:Bu(r),name:a})),this.buildings=t.buildings,this.contextReady=!0}).catch(t=>console.error("Atlas context",t))}paint(e,t,n,i=!1){if(!e)return;let r=e.getContext("2d"),a=e.width,o=e.height,c=i?1.3:this.scale,l=i?t:this.center,u=i?ym.mini:ym.full,h=l[0]-a/(2*c),d=l[1]-o/(2*c),f=h+a/c,m=d+o/c,x=([M,b])=>[(M-h)*c,(b-d)*c];r.setTransform(1,0,0,1,0,0),r.fillStyle=u.base,r.fillRect(0,0,a,o),r.save(),r.setTransform(c,0,0,c,-h*c,-d*c);for(let M of this.areas)M.bounds[0]>f||M.bounds[2]<h||M.bounds[1]>m||M.bounds[3]<d||(r.fillStyle=u[M.kind],r.fill(M.path,"evenodd"));let g=new Set;for(let M=Math.floor(h/512);M<=Math.floor(f/512);M++)for(let b=Math.floor(d/512);b<=Math.floor(m/512);b++){let S=M+"_"+b;this.buckets.has(S)||this.buckets.set(S,[...new Set((this.city.roadTiles.get(S)||[]).map(E=>E[0]))]);for(let E of this.buckets.get(S))g.add(E);if(c>.37&&this.buildings[S]){let E=this.buildings[S];if(Array.isArray(E)){let T=new Path2D;for(let R of E)T.addPath(Bu(R));this.buildings[S]=E=T}r.fillStyle=u.building,r.fill(E,"evenodd")}}let p=[[],[],[]],v=[];for(let M of g){let b=this.city.roads[M],S=eM.has(b.k);if(!(c<.2&&(!b.d||b.k==="service"))){if(!this.roads.has(M)){let E=new Path2D;b.p.forEach((T,R)=>{let[D,U]=this.city.nodes[T];R?E.lineTo(D,U):E.moveTo(D,U)}),this.roads.set(M,E)}p[S?2:b.d?1:0].push([this.roads.get(M),b]),!i&&b.n&&b.length>65&&c>.11&&v.push([b.n,this.city.nodes[b.p[Math.floor(b.p.length/2)]]])}}r.lineJoin="round",r.lineCap="round",p.forEach((M,b)=>{for(let S of b===0?[!1]:[!0,!1]){r.strokeStyle=S?u.edge:b===2?u.main:b===1?u.street:u.trail,r.setLineDash(b===0&&c>.3?[2/c,2/c]:[]);for(let[E,T]of M){let R=Math.max(b===2?1.7:.78,Math.min(13,T.w*c*.65));r.lineWidth=(R+(S?1.3:0))/c,r.stroke(E)}}}),r.setLineDash([]);let y=new Path2D;this.path.forEach(([M,b],S)=>{S?y.lineTo(M,b):y.moveTo(M,b)});for(let[M,b]of[["#49322e",6],["#ffac4c",3.4]])r.lineWidth=b/c,r.strokeStyle=M,r.stroke(y);if(i||(this.boundary||(this.boundary=Bu([this.city.boundary])),r.lineWidth=1.45/c,r.strokeStyle="#7b8477",r.setLineDash([5/c,4/c]),r.stroke(this.boundary)),r.restore(),r.fillStyle=u.ink,!i){r.font='13px "Helvetica Neue", sans-serif',r.textAlign="center";let M=[],b=(S,E,T)=>{let R=r.measureText(S).width/2;E-R<3||E+R>a-3||T<15||T>o-6||M.some(D=>Math.abs(D[0]-E)<D[2]+R+9&&Math.abs(D[1]-T)<16)||(M.push([E,T,R]),r.lineWidth=4,r.strokeStyle=u.base,r.strokeText(S,E,T),r.fillText(S,E,T))};for(let[S,E,T]of[["The Square",-10,46],["The Grove",-1300,80],["Vaught-Hemingway Stadium",-1442,508],["Lamar Park",-2500,-1300],["University of Mississippi",-1970,84],["Avent Park",1210,-870],["Rowan Oak",-575,760]])b(S,...x([E,T]));for(let[S,E]of v)b(S,...x(E))}for(let[M,b]of[[this.target,"#b84832"],[this.car,"#226c77"]]){if(!M)continue;let[S,E]=x(M);r.fillStyle=b,r.strokeStyle="#fff9ec",r.lineWidth=1.7,r.beginPath(),r.arc(S,E,i?4.5:5.6,0,Math.PI*2),r.fill(),r.stroke()}let[_,w]=x(t);if(r.save(),r.translate(_,w),r.rotate(-n+Math.PI),r.lineWidth=2.4,r.strokeStyle=i?"#17342c":"#fff8e7",r.fillStyle=i?"#ffcf7b":"#174e58",r.beginPath(),r.moveTo(0,-10),r.lineTo(6.4,6.6),r.lineTo(0,3.7),r.lineTo(-6.4,6.6),r.closePath(),r.stroke(),r.fill(),r.restore(),r.font='600 12px "Helvetica Neue", sans-serif',r.textAlign="right",r.fillStyle=u.ink,r.fillText("N \u2191",a-9,17),!i){let M=10**Math.floor(Math.log10(110/c)),b=M*c;r.fillStyle=u.ink,r.fillRect(a-14-b,o-13,b,2),r.fillText(M>=1e3?M/1e3+" km":M+" m",a-14,o-18)}}open(e,t,n){let i=()=>{e.width=e.clientWidth*1.4,e.height=e.clientHeight*1.4,this.paint(e,t,n)};i();let r=o=>{this.scale=Hn(this.scale*o,.035,3.5),i()},a=null;e.onpointerdown=o=>{e.setPointerCapture(o.pointerId),a=[o.clientX,o.clientY]},e.onpointermove=o=>{a&&(this.center[0]-=(o.clientX-a[0])*1.4/this.scale,this.center[1]-=(o.clientY-a[1])*1.4/this.scale,a=[o.clientX,o.clientY],i())},e.onpointerup=()=>a=null,e.onwheel=o=>{o.preventDefault(),r(o.deltaY<0?1.3:1/1.3)},document.querySelector("#zoomIn").onclick=()=>r(1.5),document.querySelector("#zoomOut").onclick=()=>r(1/1.5),document.querySelector("#locate").onclick=()=>{this.center=[...t],this.scale=.7,i()},document.querySelector("#fit").onclick=()=>{this.center=[-1500,950],this.scale=Math.min(e.width/12500,e.height/14200),i()}}};vm();var pt=s=>document.querySelector(s),zu=[{id:"grove",name:"The Grove",district:"University of Mississippi",parcel:"Stage crew packet",park:[-1337,145.1],drop:[-1327.6,105.4],note:"Park along University Avenue and carry the packet to the east side of the Grove Pavilion.",points:200},{id:"square",name:"Square Books",district:"Courthouse Square",parcel:"Bookshop proofs",park:[-46.2,69.1],drop:[-32,93.4],note:"Use the parking area on the southwest side of the Square. Take the proofs to the bookstore balcony entrance.",points:150},{id:"park",name:"Lamar Park",district:"Country Club neighborhood",parcel:"Park field notes",park:[-2635.5,-1088],drop:[-2590,-1207],note:"Drive through the residential streets to the south lot. Carry the field notes to the park path by the pavilion.",points:300}],al=class{constructor(e){this.city=e,this.scene=new Or,this.scene.fog=new Ur(12702931,92e-5),this.renderer=new Lc({antialias:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(1.35,devicePixelRatio)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.autoUpdate=!1,this.renderer.shadowMap.type=os,this.renderer.toneMapping=fa,this.renderer.toneMappingExposure=1.08,pt("#view").append(this.renderer.domElement),this.camera=new Wt(64,1,.12,3100),this.lightVector=new L(.535,.744,.398).normalize(),this.shadowRight=new L,this.shadowUp=new L,this.shadowCenter=new L,this.lastShadow=0;let t=new Rt;for(let[a,o]of[["daySky","day"],["twilightSky","dusk"]])t.load("data/lighting/painterly-"+o+".jpg",c=>{c.colorSpace=Je,c.mapping=sr,this[a]=c,this.lighting()});this.env=new ha(13953274,10196595,1.65),this.scene.add(this.env),this.sun=new as(16770490,2.55),this.sun.castShadow=!0,Object.assign(this.sun.shadow.camera,{left:-70,right:70,top:70,bottom:-70,near:2,far:290}),this.sun.shadow.mapSize.set(2048,2048),this.sun.shadow.bias=-23e-5,this.sun.shadow.normalBias=.06,this.scene.add(this.sun,this.sun.target),this.world=new il(this.scene,e),this.streetLights=new sl(this.scene,e),this.life=new Yc(this.scene,e),this.map=new rl(e),this.car=Ia(4220506,!0),this.scene.add(this.car),this.p=[4,-35];let n=e.nearest(this.p,a=>a.n==="North Lamar Boulevard");this.yaw=n.yaw+(Math.cos(n.yaw)<0?Math.PI:0),this.p=[n.q[0]-Math.cos(this.yaw)*1.3,n.q[1]+Math.sin(this.yaw)*1.3],this.carPos=[...this.p],this.carYaw=this.yaw,this.speed=0,this.steer=0,this.driving=!0,this.first=!1,this.orbit=0,this.pitch=.02,this.keys=new Set,this.input={},this.time=0,this.distance=0,this.walkDistance=0,this.dusk=!1,this.nav=!0,this.shift=null,this.job=null,this.cursor=0,this.route=[],this.parked=!1,this.recentHit=-5,this.frames=[],this.streamingFrames=[],this.slowestFrame=null,this.slowestStream=null,this.collisions=0,this.ready=!1,this.marker=new rt;let i=new Ee(new oa(1.35,1.55,50),new Ht({color:16041845,transparent:!0,opacity:.9,side:Ve}));i.rotation.x=-Math.PI/2,this.marker.add(i);let r=new Ee(new aa(.33),new He({color:16041845,emissive:9991234}));r.position.y=2.8,this.marker.add(r),this.scene.add(this.marker),this.marker.visible=!1,this.lighting(),this.bind(),this.world.update(...this.p),this.tickPosition(1),this.cameraUpdate(1),window.addEventListener("resize",()=>this.resize()),this.resize()}resize(){this.renderer.setSize(innerWidth,innerHeight),this.camera.aspect=innerWidth/innerHeight,this.camera.updateProjectionMatrix()}notify(e){pt("#notice").textContent=e,pt("#notice").style.display="block",clearTimeout(this.noticeTimer),this.noticeTimer=setTimeout(()=>pt("#notice").style.display="none",2600)}bind(){let e={KeyE:"use",KeyJ:"shift",KeyM:"map",KeyN:"navigation",KeyT:"time",KeyC:"camera",KeyF:"deliver",Slash:"help",KeyR:"recover",KeyH:"unlabeled"};window.addEventListener("keydown",i=>{if(["Space","ArrowUp","ArrowLeft","ArrowRight","ArrowDown","Tab"].includes(i.code)&&!pt("#panel").open&&i.preventDefault(),pt("#panel").open){["KeyJ","KeyM","Slash"].includes(i.code)&&pt("#panel").close();return}this.keys.add(i.code),!i.repeat&&e[i.code]&&this.action(e[i.code])}),window.addEventListener("keyup",i=>this.keys.delete(i.code)),window.addEventListener("blur",()=>this.keys.clear());for(let i of document.querySelectorAll("nav button"))i.onclick=()=>this.action(i.dataset.action);pt("#close").onclick=()=>pt("#panel").close(),pt("#panel").addEventListener("close",()=>this.keys.clear());let t=this.renderer.domElement,n=!1;t.onpointerdown=i=>{n=!0,t.setPointerCapture(i.pointerId)},t.onpointerup=()=>n=!1,t.onpointermove=i=>{n&&(this.driving?this.orbit-=i.movementX*.007:this.yaw-=i.movementX*.006,this.pitch=Hn(this.pitch-i.movementY*.004,-.58,.55))}}panel(e,t,n=""){this.keys.clear();let i=pt("#panel");i.className=n,pt("#dialogContent").innerHTML="<h2>"+e+"</h2>"+t,i.open||i.showModal()}action(e){if(e==="unlabeled"){document.body.classList.toggle("unlabeled");return}if(e==="use")if(this.driving){if(Math.abs(this.speed)>1){this.notify("Stop the car to get out.");return}let n=null;for(let[i,r]of[[1.45,0],[-1.45,0],[0,-2.8],[0,2.8]]){let a=[this.p[0]+Math.cos(this.yaw)*i+Math.sin(this.yaw)*r,this.p[1]-Math.sin(this.yaw)*i+Math.cos(this.yaw)*r];if(!this.world.obstructed(...a)){n=a;break}}if(!n){this.notify("Move the car to make room for the door.");return}this.carPos=[...this.p],this.carYaw=this.yaw,this.p=n,this.speed=0,this.driving=!1,this.orbit=0,this.parked=!!this.job&&dt(this.carPos,this.job.park)<8,this.notify(this.parked?"Parked \xB7 finish the delivery on foot.":"On foot \xB7 E near the car to drive.")}else dt(this.p,this.carPos)<4.6?(this.p=[...this.carPos],this.yaw=this.carYaw,this.driving=!0,this.parked=!1,this.orbit=0,this.pitch=.02,this.plan()):this.notify("Return to your car to drive.");else if(e==="shift")this.dispatch();else if(e==="map")this.panel("Oxford street atlas",'<div class="mapcontrols"><button id="zoomIn">+</button><button id="zoomOut">\u2212</button><button id="locate">My location</button><button id="fit">Entire city</button></div><canvas id="atlas"></canvas><p class="legend">Gold route \xB7 Red destination \xB7 Green parked car \xB7 Dashed city limits</p>',"atlas"),this.map.open(pt("#atlas"),this.p,this.yaw);else if(e==="help")this.panel("Controls",'<div class="controls">'+[["W / \u2191","Accelerate or walk forward"],["S / \u2193","Brake, reverse or step back"],["A D / \u2190 \u2192","Steer or turn on foot"],["Space","Brake"],["Shift","Walk faster"],["Drag","Look around"],["E","Park and exit / enter car"],["F","Hand over parcel"],["J","Open dispatch"],["M / N","Atlas / toggle guidance"],["T / C","Day or dusk / driving camera"],["H","Hide or show street labels, map and navigation"],["R","Return to nearest street"]].map(([n,i])=>"<div><b>"+n+"</b><br>"+i+"</div>").join("")+'</div><p class="creditsline">Map data \xA9 OpenStreetMap contributors \xB7 <button id="credits">Credits</button></p>');else if(e==="navigation")this.nav=!this.nav,this.notify("Guidance "+(this.nav?"on":"off"));else if(e==="time")this.dusk=!this.dusk,this.lighting();else if(e==="camera")this.first=!this.first,this.orbit=0,this.pitch=.02;else if(e==="deliver")this.deliver();else if(e==="recover"){if(!this.driving){this.notify("Enter the car to recover it.");return}let n=this.city.nearest(this.p,i=>i.d,400);n&&(this.p=n.q.slice(0,2),this.yaw=n.yaw,this.speed=0,this.plan(),this.notify("Car returned to the street."))}let t=pt("#credits");t&&(t.onclick=()=>this.panel("Data and asset credits",'<iframe title="Data and asset credits" style="width:100%;height:55vh;border:0" src="credits.html"></iframe>')),this.hud()}lighting(){sm(this),lm(this.dusk),this.world.nearTrees.setDusk(this.dusk),this.streetLights.setDusk(this.dusk)}dispatch(){if(!this.shift){this.panel("Courier dispatch",'<p>Your car is loaded with three local parcels. Choose the order of your stops. Park at each marked location and finish on foot.</p><button class="primary" id="begin">Begin shift</button>'),pt("#begin").onclick=()=>{this.shift={start:this.time,score:0,done:[],hits:this.collisions},this.dispatch()};return}this.panel("Choose a delivery","<p>"+this.shift.done.length+" of 3 delivered \xB7 "+this.shift.score+" points</p>"+zu.filter(e=>!this.shift.done.includes(e.id)).map(e=>'<button class="job" data-job="'+e.id+'"><strong>'+e.name+"</strong><span>"+e.parcel+" \xB7 "+e.district+" \xB7 "+e.points+" pts</span></button>").join("")),document.querySelectorAll(".job").forEach(e=>e.onclick=()=>{this.job=zu.find(t=>t.id===e.dataset.job),this.parked=!this.driving&&dt(this.carPos,this.job.park)<8,this.plan(),pt("#panel").close(),this.notify(this.job.parcel+" aboard."),this.hud()})}plan(){this.job&&(this.route=this.city.route(this.driving?this.p:this.carPos,this.job.park),this.cursor=0,this.lastPlan=this.time,this.routeProgress())}routeProgress(){if(!this.route.length||!this.driving)return;let e=1/0,t=this.cursor;for(let n=Math.max(0,this.cursor-1);n<Math.min(this.route.length-1,this.cursor+12);n++){let i=gs(this.p,this.route[n],this.route[n+1]),r=dt(this.p,i);r<e&&(e=r,t=n)}this.cursor=t,e>32&&this.time-this.lastPlan>2&&this.plan()}deliver(){if(!this.job){this.notify("Choose a parcel in dispatch first.");return}if(this.driving||!this.parked){this.notify("Park in the marked area and get out.");return}if(dt(this.p,this.job.drop)>4){this.notify("Walk to the handoff marker.");return}if(this.shift.score+=this.job.points,this.shift.done.push(this.job.id),this.notify("Delivered \xB7 +"+this.job.points+" points"),this.job=null,this.route=[],this.parked=!1,this.shift.done.length===3){let e={...this.shift,duration:this.time-this.shift.start,penalty:Math.min(this.shift.score,10*(this.collisions-this.shift.hits))};e.total=e.score-e.penalty,this.lastResult=e,this.shift=null,this.panel("Shift complete","<p>All three parcels delivered. Your score is <b>"+e.total+"</b> points.</p><p>"+Math.round(e.duration/60)+" minutes \xB7 "+e.score+" delivery points \xB7 "+e.penalty+' collision penalty</p><button class="primary" id="roam">Return to Oxford</button>'),pt("#roam").onclick=()=>pt("#panel").close()}else this.dispatch()}controls(){let e=this.keys;return{gas:+(e.has("KeyW")||e.has("ArrowUp")),back:+(e.has("KeyS")||e.has("ArrowDown")),steer:+(e.has("KeyA")||e.has("ArrowLeft"))-+(e.has("KeyD")||e.has("ArrowRight")),brake:+e.has("Space"),run:+(e.has("ShiftLeft")||e.has("ShiftRight")),...this.input}}tickPosition(e){this.driving&&(this.carPos=[...this.p],this.carYaw=this.yaw);let[t,n]=this.carPos,i=this.roadNear,r=this.city.ground(t,n),a=i?.r.bridge&&i.d<i.r.w*.7?this.city.surface(i.r,i.i,i.q[2],t,n):r;this.car.position.set(t,a+.29,n),this.car.rotation.order="YXZ",this.car.rotation.y=this.carYaw;let o=Math.sin(this.carYaw),c=Math.cos(this.carYaw);this.car.rotation.x=-Math.atan2(this.city.ground(t+o*1.6,n+c*1.6)-this.city.ground(t-o*1.6,n-c*1.6),3.2)}step(e){this.time+=e;let t=this.controls(),n=[...this.p],i;if(this.driving){let m=(this.roadNear?.d??30)>(this.roadNear?.r.w??0)*.5+1,x=t.gas*(this.speed<-.3?7.8:4.45*Math.max(.08,1-Math.abs(this.speed)/39)),g=t.back*(this.speed>.35?8.6:2.7),p=(m?1.15:.2)+this.speed*this.speed*.0017,v=-Math.sin(this.car.rotation.x);this.speed+=e*(x-g-(Math.abs(this.speed)>.35?9.81*v:0)),this.speed-=Math.sign(this.speed)*Math.min(Math.abs(this.speed),e*(p+(t.brake?12:0))),this.speed=Hn(this.speed,-6,m?11:39);let y=t.steer*Hn(.52/(1+Math.abs(this.speed)*.045),.14,.52);this.steer+=(y-this.steer)*(1-Math.exp(-e*7)),this.yaw+=this.speed/2.65*Math.tan(this.steer)*e,i=this.speed}else this.yaw+=t.steer*e*2.25,i=(t.gas-t.back)*(t.run?4.25:1.75);let r=Math.sin(this.yaw),a=Math.cos(this.yaw),o=this.p[0]+r*i*e,c=this.p[1]+a*i*e,[l,u,h,d]=this.city.dem.bounds,f=o<l+2||o>h-2||c<u+2||c>d-2;if(Math.abs(i)>.01&&!f){let m=this.driving?Math.sign(i)*1.85:0;if(f=this.world.obstructed(o+r*m,c+a*m,this.driving?.7:.2,this.roadNear?.r.bridge&&this.roadNear.d<this.roadNear.r.w*.65,!this.driving),this.driving&&!f)for(let x of[...this.life.cars,...this.life.people]){let g=x.mesh.position;if(Math.hypot(o+r*m-g.x,c+a*m-g.z)<(this.life.cars.includes(x)?1.48:.85)){f=!0;break}}}f?(this.driving&&Math.abs(i)>1.8&&this.time-this.recentHit>1&&(this.recentHit=this.time,this.collisions++),this.speed=0):(this.p=[o,c],this.driving?this.distance+=dt(n,this.p):this.walkDistance+=dt(n,this.p)),this.world.update(...this.p),this.tickPosition(e),pr(this.car,this.speed,this.steer,this.driving&&!!(t.brake||t.back&&this.speed>.1),this.dusk,e),this.life.tick(e,this.p,this.speed,this.yaw)}cameraUpdate(e){let[t,n]=this.p,i=this.driving?this.car.position.y:this.world.walkSurface(t,n)+.19,r=this.yaw+this.orbit,a=Math.sin(r),o=Math.cos(r);if(this.driving&&!this.first){let l=new L(t-a*7.3,Math.max(i+3.05+this.pitch*3,this.city.ground(t-a*7.3,n-o*7.3)+1),n-o*7.3);this.camera.position.lerp(l,Math.min(1,e*10)),this.camera.lookAt(t+a*6,i+1.05,n+o*6)}else this.camera.position.set(t+(this.driving?.55:0)*a,i+(this.driving?1.58:1.72),n+(this.driving?.55:0)*o),this.camera.lookAt(this.camera.position.x+a,this.camera.position.y+Math.sin(this.pitch),this.camera.position.z+o);rm(this,t,i,n),this.streetLights.tick(t,n)}hud(){for(let h of this.world.tiles.values())for(let d of h.signals||[]){let f=this.life.signal(d.u,this.life.elapsed),m=d.axis?f<8?2:f<10?1:0:f>=11&&f<19?2:f>=19&&f<21?1:0;d.lamps.forEach((x,g)=>x.color.set(g===m?[15223602,15776599,7390875][g]:3685429))}this.roadNear=this.city.nearest(this.p,h=>h.d,65);let e=this.roadNear?.r.n||this.city.nearest(this.p,h=>h.d&&h.n,120)?.r.n,[t,n]=this.p,i=Math.hypot(t,n-46)<250,r=t<-1e3&&t>-2650&&n>-500&&n<1100,a=dt(this.p,zu[2].drop)<350;if(pt("#district").textContent=i?"Courthouse Square":r?"University of Mississippi":a?"Lamar Park":"Oxford, Mississippi",pt("#street").textContent=!this.driving&&this.job&&this.parked?this.job.name:e||pt("#district").textContent,pt("#state").textContent=this.shift?"COURIER SHIFT   /   "+this.shift.done.length+" OF 3 DELIVERED":"FREE EXPLORATION",pt("#hint").textContent=this.job?this.parked?"Walk to the handoff and press F.":this.job.parcel+" \u2192 "+this.job.name:this.shift?"Open dispatch to choose a parcel.":"Drive through Oxford or pick up a courier shift.",pt("#mode").textContent=this.driving?this.speed<-.2?"REVERSE":"DRIVE":"ON FOOT",pt("#useLabel").textContent=this.driving?"Exit car":"Enter car",pt("#speed").textContent=this.driving?Math.round(Math.abs(this.speed)*2.23694):"\u2014",this.map.car=this.driving?null:this.carPos,this.map.target=this.job?this.parked?this.job.drop:this.job.park:null,this.map.path=this.job&&this.nav&&this.driving?this.route.slice(this.cursor):[],document.body.classList.contains("unlabeled")||this.map.paint(pt("#mini"),this.p,this.yaw,!0),pt("#route").classList.toggle("hidden",!(this.job&&this.nav)),this.marker.visible=!!(this.job&&this.nav&&!document.body.classList.contains("unlabeled")),!this.job)return;let o=this.parked?this.job.drop:this.job.park;this.marker.position.set(o[0],this.city.ground(...o)+.35,o[1]),this.marker.children[1].rotation.y=this.time*.8;let c,l,u;if(!this.driving)c=this.parked?"Deliver "+this.job.parcel.toLowerCase():"Return to your car",l=this.parked?Math.round(dt(this.p,o))+" m on foot \xB7 F to hand over":"Park in the designated area",u="\u25C7";else if(dt(this.p,o)<35)c="Park at the gold marker",l=Math.round(dt(this.p,o))+" m \xB7 stop, then press E",u="P";else{this.routeProgress();let h=0,d=null;for(let f=this.cursor+1;f<this.route.length;f++){let m=this.route[f-1],x=this.route[f];if(h+=dt(f===this.cursor+1?this.p:m,x),!d&&f+1<this.route.length){let g=this.route[f+1],p=bp(Math.atan2(g[0]-x[0],g[1]-x[1])-Math.atan2(x[0]-m[0],x[1]-m[1]));Math.abs(p)>.48&&this.city.roads[g[2]].n!==this.city.roads[x[2]].n&&(d={len:h,ang:p,name:this.city.roads[g[2]].n||"access road"})}}c=d?(d.ang>0?"Left on ":"Right on ")+d.name:"Continue to "+this.job.name,l=(d?Math.round(d.len)+" m to turn \xB7 ":"")+(h/1e3).toFixed(1)+" km remaining",u=d?d.ang>0?"\u21B0":"\u21B1":"\u2191"}pt("#turn").textContent=u,pt("#instruction").textContent=c,pt("#remaining").textContent=l,pt("#routelabel").textContent=this.job.name.toUpperCase()}start(){let e=performance.now(),t=0,n=i=>{let r=(i-e)/1e3;if(e=i,!this.ready&&this.world.launchReady&&(this.ready=!0,this.world.resumeStreaming(),this.car.userData.loadDetailed(),pt("#loading").remove(),this.hud(),this.cameraUpdate(1)),this.ready&&!pt("#panel").open){this.frames.length||(this.slowestFrame=null,this.slowestStream=null);let a=r*1e3,o=this.world.running||performance.now()-(this.world.lastStream||0)<250;this.frames.push(a),(!this.slowestFrame||a>this.slowestFrame.ms)&&(this.slowestFrame={ms:a,p:[...this.p],tile:this.world.center}),o&&(this.streamingFrames.push(a),(!this.slowestStream||a>this.slowestStream.ms)&&(this.slowestStream={ms:a,p:[...this.p],tile:this.world.center})),this.frames.length>1e5&&this.frames.splice(0,2e4),this.streamingFrames.length>1e5&&this.streamingFrames.splice(0,2e4);let c=Math.min(.13,r);for(;c>1e-4;){let l=Math.min(c,.022222222222222223);this.step(l),c-=l}this.cameraUpdate(Math.min(.1,r)),t+=r,t>.12&&(this.hud(),t=0)}i-this.lastShadow>=42&&(this.renderer.shadowMap.needsUpdate=!0,this.lastShadow=i),this.renderer.render(this.scene,this.camera),requestAnimationFrame(n)};requestAnimationFrame(n)}};Cc.setURLModifier(s=>fp[s]||s);(async()=>{try{let s=new al(await Uc.load());window.oxford=s,s.start()}catch(s){console.error(s),document.querySelector("#loading p").textContent="Could not load Oxford: "+s.message}})();})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
