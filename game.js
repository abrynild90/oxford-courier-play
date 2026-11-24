(()=>{var dt=(s,e)=>Math.hypot(s[0]-e[0],s[1]-e[1]),Nn=(s,e,t)=>Math.max(e,Math.min(t,s)),Xu=s=>Math.atan2(Math.sin(s),Math.cos(s)),Vi=new Set([624121519,624121520]),Hi=111.72;function Wi(s,e,t){let n=t[0]-e[0],i=t[1]-e[1],r=Nn(((s[0]-e[0])*n+(s[1]-e[1])*i)/(n*n+i*i||1),0,1);return[e[0]+n*r,e[1]+i*r,r]}var No=class s{static async load(){let[e,t,n]=await Promise.all([fetch("data/city.json").then(i=>i.json()),fetch("data/terrain.json").then(i=>i.json()),fetch("data/height.bin").then(i=>i.arrayBuffer())]);return new s(e,t,new Int16Array(n))}constructor(e,t,n){Object.assign(this,e,{dem:t,heights:n}),this.tileSet=new Set(this.tiles),this.edges=this.nodes.map(()=>[]),this.roadTiles=new Map,this.cells=new Map,this.rules=new Map;for(let[r,o,a,l]of this.restrictions){let c=o+"/"+a,h=this.rules.get(c)||[];h.push([r,l]),this.rules.set(c,h)}let i=(r,o,a)=>{r.has(o)?r.get(o).push(a):r.set(o,[a])};this.roads.forEach((r,o)=>{r.index=o,r.length=0,r.along=[0];for(let a=1;a<r.p.length;a++){let l=r.p[a-1],c=r.p[a],h=this.nodes[l],u=this.nodes[c],d=dt(h,u);if(d<.01){r.along.push(r.length);continue}r.length+=d,r.along.push(r.length),r.d&&(this.edges[l].push([c,o,d]),r.o||this.edges[c].push([l,o,d]));let f=[o,a];for(let[p,x]of[[512,this.roadTiles],[48,this.cells]])for(let m=Math.floor((Math.min(h[0],u[0])-r.w)/p);m<=Math.floor((Math.max(h[0],u[0])+r.w)/p);m++)for(let g=Math.floor((Math.min(h[1],u[1])-r.w)/p);g<=Math.floor((Math.max(h[1],u[1])+r.w)/p);g++)i(x,m+"_"+g,f)}})}ground(e,t){let{bounds:n,step:i,width:r,height:o}=this.dem,a=Nn((e-n[0])/i,0,r-1.00001),l=Nn((t-n[1])/i,0,o-1.00001),c=Math.floor(a),h=Math.floor(l),u=a-c,d=l-h,f=c+h*r,p=this.heights;return(u+d<=1?p[f]+(p[f+1]-p[f])*u+(p[f+r]-p[f])*d:p[f+r+1]+(p[f+r]-p[f+r+1])*(1-u)+(p[f+1]-p[f+r+1])*(1-d))*.01}surface(e,t,n,i,r){if(Vi.has(e.id))return Hi;if(!e.bridge)return this.ground(i,r);let o=this.nodes[e.p[0]],a=this.nodes[e.p.at(-1)],l=(e.along[t-1]+n*(e.along[t]-e.along[t-1]))/e.length;return Math.max(this.ground(i,r),this.ground(...o)*(1-l)+this.ground(...a)*l+Math.sin(l*Math.PI)*Math.min(4,e.length*.04))}nearest(e,t=()=>!0,n=85){let i=null,r=n;for(let o=Math.floor((e[0]-n)/48);o<=Math.floor((e[0]+n)/48);o++)for(let a=Math.floor((e[1]-n)/48);a<=Math.floor((e[1]+n)/48);a++)for(let[l,c]of this.cells.get(o+"_"+a)||[]){let h=this.roads[l];if(!t(h))continue;let u=this.nodes[h.p[c-1]],d=this.nodes[h.p[c]],f=Wi(e,u,d),p=dt(e,f);p<r&&(r=p,i={r:h,i:c,q:f,d:p,a:u,b:d,yaw:Math.atan2(d[0]-u[0],d[1]-u[1])})}return i}legal(e,t,n){return t<0?!0:(this.rules.get(this.roads[t].id+"/"+e)||[]).every(([r,o])=>r.startsWith("only_")?n.id===o:n.id!==o)}route(e,t){let n=this.nearest(e,d=>d.d,220),i=this.nearest(t,d=>d.d,220);if(!n||!i)return[];let r=i.q,o=[],a=new Map,l=new Map,c=d=>{o.push(d);let f=o.length-1;for(;f;){let p=f-1>>1;if(o[p].f<=d.f)break;o[f]=o[p],f=p}o[f]=d},h=()=>{let d=o[0],f=o.pop();if(o.length){let p=0;for(;p*2+1<o.length;){let x=p*2+1;if(x+1<o.length&&o[x+1].f<o[x].f&&x++,o[x].f>=f.f)break;o[p]=o[x],p=x}o[p]=f}return d},u=(d,f,p,x)=>{let m=d+"/"+f;p>=(a.get(m)??1/0)||(a.set(m,p),l.set(m,x),c({n:d,ri:f,g:p,f:p+dt(this.nodes[d],r),key:m}))};if(n.r===i.r&&n.i===i.i&&(!n.r.o||i.q[2]>=n.q[2]))return[[...n.q.slice(0,2),n.r.index],[...i.q.slice(0,2),i.r.index]];for(u(n.r.p[n.i],n.r.index,dt(n.q,n.b),null),n.r.o||u(n.r.p[n.i-1],n.r.index,dt(n.q,n.a),null);o.length;){let d=h();if(d.g===a.get(d.key)){if((d.n===i.r.p[i.i-1]||!i.r.o&&d.n===i.r.p[i.i])&&this.legal(d.n,d.ri,i.r)){let f=[[...r.slice(0,2),i.r.index]],p=d.key;for(;p;){let[x,m]=p.split("/").map(Number);f.push([...this.nodes[x].slice(0,2),m]),p=l.get(p)}return f.push([...n.q.slice(0,2),n.r.index]),f.reverse().filter((x,m,g)=>m===0||dt(x,g[m-1])>.12)}for(let[f,p,x]of this.edges[d.n]){let m=this.roads[p];this.legal(d.n,d.ri,m)&&u(f,p,d.g+x*(m.k==="service"?1.06:1),d.key)}}}return[]}};var Bd=0,$c=1,kd=2;var hs=1,zd=2,tr=3,Jn=0,fn=1,We=2,us=0,nr=1,jc=2,Qc=3,eh=4,Gd=5;var ds=100,Vd=101,Hd=102,Wd=103,Xd=104,qd=200,Yd=201,Kd=202,Zd=203,th=204,nh=205,Jd=206,$d=207,jd=208,Qd=209,ef=210,tf=211,nf=212,sf=213,rf=214,ha=0,ua=1,da=2,Fs=3,fa=4,pa=5,ma=6,ga=7,za=0,of=1,af=2,$n=0,ih=1,sh=2,rh=3,uo=4,oh=5,ah=6,lh=7,Uc="attached",lf="detached",ch=300,fs=301,ir=302,sr=303,Ga=304,Nt=1e3,En=1001,Os=1002,Ft=1003,Va=1004;var ps=1005;var Ht=1006,rr=1007;var Cn=1008;var yn=1009,hh=1010,uh=1011,or=1012,Ha=1013,kn=1014,Tn=1015,zn=1016,Wa=1017,Xa=1018,ms=1020,dh=35902,fh=35899,ph=1021,mh=1022,In=1023,di=1026,vi=1027,qa=1028,Ya=1029,Fi=1030,Ka=1031;var Za=1033,fo=33776,po=33777,mo=33778,go=33779,Ja=35840,$a=35841,ja=35842,Qa=35843,el=36196,tl=37492,nl=37496,il=37488,sl=37489,xo=37490,rl=37491,ol=37808,al=37809,ll=37810,cl=37811,hl=37812,ul=37813,dl=37814,fl=37815,pl=37816,ml=37817,gl=37818,xl=37819,_l=37820,yl=37821,vl=36492,Ml=36494,Sl=36495,bl=36283,Tl=36284,_o=36285,wl=36286;var Ji=2300,$i=2301,la=2302,Fc=2303,Oc=2400,Bc=2401,kc=2402,cf=2500;var gh=0,yo=1,ar=2,hf=3200;var vo=0,uf=1,Mi="",Ke="srgb",cn="srgb-linear",Ir="linear",_t="srgb";var ca=7680;var df=519,ff=512,pf=513,mf=514,xh=515,gf=516,xf=517,_h=518,yh=519,vh=35044;var Mh="300 es",Rn=2e3,Bs=2001;function am(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function lm(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function ks(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function _f(){let s=ks("canvas");return s.style.display="block",s}var qu={},zs=null;function Pr(...s){let e="THREE."+s.shift();zs?zs("log",e,...s):console.log(e,...s)}function yf(s){let e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Ne(...s){s=yf(s);let e="THREE."+s.shift();if(zs)zs("warn",e,...s);else{let t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function He(...s){s=yf(s);let e="THREE."+s.shift();if(zs)zs("error",e,...s);else{let t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function Zi(...s){let e=s.join(" ");e in qu||(qu[e]=!0,Ne(...s))}function vf(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var Mf={[ha]:ha,[da]:ma,[fa]:fa,[Fs]:pa,[ua]:ua,[ma]:da,[ga]:ga,[pa]:Fs},Xn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let i=n[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}},nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Yu=1234567,Ar=Math.PI/180,ji=180/Math.PI;function Gn(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(nn[s&255]+nn[s>>8&255]+nn[s>>16&255]+nn[s>>24&255]+"-"+nn[e&255]+nn[e>>8&255]+"-"+nn[e>>16&15|64]+nn[e>>24&255]+"-"+nn[t&63|128]+nn[t>>8&255]+"-"+nn[t>>16&255]+nn[t>>24&255]+nn[n&255]+nn[n>>8&255]+nn[n>>16&255]+nn[n>>24&255]).toLowerCase()}function it(s,e,t){return Math.max(e,Math.min(t,s))}function Sh(s,e){return(s%e+e)%e}function cm(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function hm(s,e,t){return s!==e?(t-s)/(e-s):0}function Er(s,e,t){return(1-t)*s+t*e}function um(s,e,t,n){return Er(s,e,1-Math.exp(-t*n))}function dm(s,e=1){return e-Math.abs(Sh(s,e*2)-e)}function fm(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function pm(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function mm(s,e){return s+Math.floor(Math.random()*(e-s+1))}function gm(s,e){return s+Math.random()*(e-s)}function xm(s){return s*(.5-Math.random())}function _m(s){s!==void 0&&(Yu=s);let e=Yu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function ym(s){return s*Ar}function vm(s){return s*ji}function Mm(s){return s>0&&Number.isInteger(s)&&2**Math.round(Math.log2(s))===s}function Sm(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function bh(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function bm(s,e,t,n,i){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),p=o((n-e)/2);switch(i){case"XYX":s.set(a*h,l*u,l*d,a*c);break;case"YZY":s.set(l*d,a*h,l*u,a*c);break;case"ZXZ":s.set(l*u,l*d,a*h,a*c);break;case"XZX":s.set(a*h,l*p,l*f,a*c);break;case"YXY":s.set(l*f,a*h,l*p,a*c);break;case"ZYZ":s.set(l*p,l*f,a*h,a*c);break;default:Ne("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Al(s){switch(s.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Th(s,e){if(e.constructor===Float32Array)return s;let t=Al(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(s/t,-1)}function wh(s,e){if(e.constructor===Float32Array)return s;let t=Al(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(s*t)}var Vn={DEG2RAD:Ar,RAD2DEG:ji,generateUUID:Gn,clamp:it,euclideanModulo:Sh,mapLinear:cm,inverseLerp:hm,lerp:Er,damp:um,pingpong:dm,smoothstep:fm,smootherstep:pm,randInt:mm,randFloat:gm,randFloatSpread:xm,seededRandom:_m,degToRad:ym,radToDeg:vm,isPowerOfTwo:Mm,ceilPowerOfTwo:Sm,floorPowerOfTwo:bh,setQuaternionFromProperEuler:bm,normalize:wh,denormalize:Th},re=class{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(it(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(it(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Gt=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],d=r[o+0],f=r[o+1],p=r[o+2],x=r[o+3];if(u!==x||l!==d||c!==f||h!==p){let m=l*d+c*f+h*p+u*x;m<0&&(d=-d,f=-f,p=-p,x=-x,m=-m);let g=1-a;if(m<.9995){let v=Math.acos(m),M=Math.sin(v);g=Math.sin(g*v)/M,a=Math.sin(a*v)/M,l=l*g+d*a,c=c*g+f*a,h=h*g+p*a,u=u*g+x*a}else{l=l*g+d*a,c=c*g+f*a,h=h*g+p*a,u=u*g+x*a;let v=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=v,c*=v,h*=v,u*=v}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,o){let a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[o],d=r[o+1],f=r[o+2],p=r[o+3];return e[t]=a*p+h*u+l*f-c*d,e[t+1]=l*p+h*d+c*u-a*f,e[t+2]=c*p+h*f+a*d-l*u,e[t+3]=h*p-a*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(r/2),d=l(n/2),f=l(i/2),p=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"YXZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"ZXY":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"ZYX":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"YZX":this._x=d*h*u+c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u-d*f*p;break;case"XZY":this._x=d*h*u-c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u+d*f*p;break;default:Ne("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-i)*f}else if(n>a&&n>u){let f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+c)/f}else if(a>u){let f=2*Math.sqrt(1+a-n-u);this._w=(r-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-n-a);this._w=(o-i)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(it(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,i=-i,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},U=class{static{this.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ku.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ku.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),h=2*(a*t-r*i),u=2*(r*n-o*t);return this.x=t+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=i+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this.z=it(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this.z=it(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(it(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return lc.copy(this).projectOnVector(e),this.sub(lc)}reflect(e){return this.sub(lc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(it(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},lc=new U,Ku=new Gt,Ye=class{static{this.prototype.isMatrix3=!0}constructor(e,t,n,i,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c)}set(e,t,n,i,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],p=n[8],x=i[0],m=i[3],g=i[6],v=i[1],M=i[4],y=i[7],T=i[2],S=i[5],_=i[8];return r[0]=o*x+a*v+l*T,r[3]=o*m+a*M+l*S,r[6]=o*g+a*y+l*_,r[1]=c*x+h*v+u*T,r[4]=c*m+h*M+u*S,r[7]=c*g+h*y+u*_,r[2]=d*x+f*v+p*T,r[5]=d*m+f*M+p*S,r[8]=d*g+f*y+p*_,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,p=t*u+n*d+i*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return e[0]=u*x,e[1]=(i*c-h*n)*x,e[2]=(a*n-i*o)*x,e[3]=d*x,e[4]=(h*t-i*l)*x,e[5]=(i*r-a*t)*x,e[6]=f*x,e[7]=(n*l-c*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return Zi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(cc.makeScale(e,t)),this}rotate(e){return Zi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(cc.makeRotation(-e)),this}translate(e,t){return Zi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(cc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},cc=new Ye,Zu=new Ye().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ju=new Ye().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Tm(){let s={enabled:!0,workingColorSpace:cn,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===_t&&(i.r=ui(i.r),i.g=ui(i.g),i.b=ui(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===_t&&(i.r=Us(i.r),i.g=Us(i.g),i.b=Us(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Mi?Ir:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[cn]:{primaries:e,whitePoint:n,transfer:Ir,toXYZ:Zu,fromXYZ:Ju,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ke},outputColorSpaceConfig:{drawingBufferColorSpace:Ke}},[Ke]:{primaries:e,whitePoint:n,transfer:_t,toXYZ:Zu,fromXYZ:Ju,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ke}}}),s}var nt=Tm();function ui(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Us(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Ms,xa=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ms===void 0&&(Ms=ks("canvas")),Ms.width=e.width,Ms.height=e.height;let i=Ms.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Ms}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ks("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=ui(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ui(t[n]/255)*255):t[n]=ui(t[n]);return{data:t,width:e.width,height:e.height}}else return Ne("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},wm=0,Gs=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:wm++}),this.uuid=Gn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(hc(i[o].image)):r.push(hc(i[o]))}else r=hc(i);n.url=r}return t||(e.images[this.uuid]=n),n}};function hc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?xa.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Ne("Texture: Unable to serialize Texture."),{})}var Am=0,uc=new U,Wt=class s extends Xn{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,n=En,i=En,r=Ht,o=Cn,a=In,l=yn,c=s.DEFAULT_ANISOTROPY,h=Mi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Am++}),this.uuid=Gn(),this.name="",this.source=new Gs(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new re(0,0),this.repeat=new re(1,1),this.center=new re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(uc).x}get height(){return this.source.getSize(uc).y}get depth(){return this.source.getSize(uc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Ne(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){Ne(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ch)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Nt:e.x=e.x-Math.floor(e.x);break;case En:e.x=e.x<0?0:1;break;case Os:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Nt:e.y=e.y-Math.floor(e.y);break;case En:e.y=e.y<0?0:1;break;case Os:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Wt.DEFAULT_IMAGE=null;Wt.DEFAULT_MAPPING=ch;Wt.DEFAULT_ANISOTROPY=1;var vt=class{static{this.prototype.isVector4=!0}constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],p=l[9],x=l[2],m=l[6],g=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(p+m)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let M=(c+1)/2,y=(f+1)/2,T=(g+1)/2,S=(h+d)/4,_=(u+x)/4,b=(p+m)/4;return M>y&&M>T?M<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(M),i=S/n,r=_/n):y>T?y<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(y),n=S/i,r=b/i):T<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(T),n=_/r,i=b/r),this.set(n,i,r,t),this}let v=Math.sqrt((m-p)*(m-p)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(m-p)/v,this.y=(u-x)/v,this.z=(d-h)/v,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this.z=it(this.z,e.z,t.z),this.w=it(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this.z=it(this.z,e,t),this.w=it(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(it(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},_a=class extends Xn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ht,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new vt(0,0,e,t),this.scissorTest=!1,this.viewport=new vt(0,0,e,t),this.textures=[];let i=n.count;for(let r=0;r<i;r++)this.textures[r]=new Wt({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Ht,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let i=Object.assign({},e.textures[t].image);this.textures[t].source=new Gs(i)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Sn=class extends _a{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Lr=class extends Wt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ft,this.minFilter=Ft,this.wrapR=En,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var ya=class extends Wt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ft,this.minFilter=Ft,this.wrapR=En,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var qe=class s{static{this.prototype.isMatrix4=!0}constructor(e,t,n,i,r,o,a,l,c,h,u,d,f,p,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c,h,u,d,f,p,x,m)}set(e,t,n,i,r,o,a,l,c,h,u,d,f,p,x,m){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=i,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=h,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=x,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,i=1/Ss.setFromMatrixColumn(e,0).length(),r=1/Ss.setFromMatrixColumn(e,1).length(),o=1/Ss.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=o*h,f=o*u,p=a*h,x=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+p*c,t[5]=d-x*c,t[9]=-a*l,t[2]=x-d*c,t[6]=p+f*c,t[10]=o*l}else if(e.order==="YXZ"){let d=l*h,f=l*u,p=c*h,x=c*u;t[0]=d+x*a,t[4]=p*a-f,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-p,t[6]=x+d*a,t[10]=o*l}else if(e.order==="ZXY"){let d=l*h,f=l*u,p=c*h,x=c*u;t[0]=d-x*a,t[4]=-o*u,t[8]=p+f*a,t[1]=f+p*a,t[5]=o*h,t[9]=x-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let d=o*h,f=o*u,p=a*h,x=a*u;t[0]=l*h,t[4]=p*c-f,t[8]=d*c+x,t[1]=l*u,t[5]=x*c+d,t[9]=f*c-p,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let d=o*l,f=o*c,p=a*l,x=a*c;t[0]=l*h,t[4]=x-d*u,t[8]=p*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=f*u+p,t[10]=d-x*u}else if(e.order==="XZY"){let d=o*l,f=o*c,p=a*l,x=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+x,t[5]=o*h,t[9]=f*u-p,t[2]=p*u-f,t[6]=a*h,t[10]=x*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Em,e,Rm)}lookAt(e,t,n){let i=this.elements;return vn.subVectors(e,t),vn.lengthSq()===0&&(vn.z=1),vn.normalize(),Ai.crossVectors(n,vn),Ai.lengthSq()===0&&(Math.abs(n.z)===1?vn.x+=1e-4:vn.z+=1e-4,vn.normalize(),Ai.crossVectors(n,vn)),Ai.normalize(),Uo.crossVectors(vn,Ai),i[0]=Ai.x,i[4]=Uo.x,i[8]=vn.x,i[1]=Ai.y,i[5]=Uo.y,i[9]=vn.y,i[2]=Ai.z,i[6]=Uo.z,i[10]=vn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],p=n[2],x=n[6],m=n[10],g=n[14],v=n[3],M=n[7],y=n[11],T=n[15],S=i[0],_=i[4],b=i[8],C=i[12],w=i[1],R=i[5],L=i[9],B=i[13],I=i[2],O=i[6],G=i[10],D=i[14],W=i[3],N=i[7],V=i[11],H=i[15];return r[0]=o*S+a*w+l*I+c*W,r[4]=o*_+a*R+l*O+c*N,r[8]=o*b+a*L+l*G+c*V,r[12]=o*C+a*B+l*D+c*H,r[1]=h*S+u*w+d*I+f*W,r[5]=h*_+u*R+d*O+f*N,r[9]=h*b+u*L+d*G+f*V,r[13]=h*C+u*B+d*D+f*H,r[2]=p*S+x*w+m*I+g*W,r[6]=p*_+x*R+m*O+g*N,r[10]=p*b+x*L+m*G+g*V,r[14]=p*C+x*B+m*D+g*H,r[3]=v*S+M*w+y*I+T*W,r[7]=v*_+M*R+y*O+T*N,r[11]=v*b+M*L+y*G+T*V,r[15]=v*C+M*B+y*D+T*H,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],p=e[3],x=e[7],m=e[11],g=e[15],v=l*f-c*d,M=a*f-c*u,y=a*d-l*u,T=o*f-c*h,S=o*d-l*h,_=o*u-a*h;return t*(x*v-m*M+g*y)-n*(p*v-m*T+g*S)+i*(p*M-x*T+g*_)-r*(p*y-x*S+m*_)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[1],o=e[5],a=e[9],l=e[2],c=e[6],h=e[10];return t*(o*h-a*c)-n*(r*h-a*l)+i*(r*c-o*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],p=e[12],x=e[13],m=e[14],g=e[15],v=t*a-n*o,M=t*l-i*o,y=t*c-r*o,T=n*l-i*a,S=n*c-r*a,_=i*c-r*l,b=h*x-u*p,C=h*m-d*p,w=h*g-f*p,R=u*m-d*x,L=u*g-f*x,B=d*g-f*m,I=v*B-M*L+y*R+T*w-S*C+_*b;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let O=1/I;return e[0]=(a*B-l*L+c*R)*O,e[1]=(i*L-n*B-r*R)*O,e[2]=(x*_-m*S+g*T)*O,e[3]=(d*S-u*_-f*T)*O,e[4]=(l*w-o*B-c*C)*O,e[5]=(t*B-i*w+r*C)*O,e[6]=(m*y-p*_-g*M)*O,e[7]=(h*_-d*y+f*M)*O,e[8]=(o*L-a*w+c*b)*O,e[9]=(n*w-t*L-r*b)*O,e[10]=(p*S-x*y+g*v)*O,e[11]=(u*y-h*S-f*v)*O,e[12]=(a*C-o*R-l*b)*O,e[13]=(t*R-n*C+i*b)*O,e[14]=(x*M-p*T-m*v)*O,e[15]=(h*T-u*M+d*v)*O,this}scale(e){let t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,p=r*u,x=o*h,m=o*u,g=a*u,v=l*c,M=l*h,y=l*u,T=n.x,S=n.y,_=n.z;return i[0]=(1-(x+g))*T,i[1]=(f+y)*T,i[2]=(p-M)*T,i[3]=0,i[4]=(f-y)*S,i[5]=(1-(d+g))*S,i[6]=(m+v)*S,i[7]=0,i[8]=(p+M)*_,i[9]=(m-v)*_,i[10]=(1-(d+x))*_,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let o=Ss.set(i[0],i[1],i[2]).length(),a=Ss.set(i[4],i[5],i[6]).length(),l=Ss.set(i[8],i[9],i[10]).length();r<0&&(o=-o),Un.copy(this);let c=1/o,h=1/a,u=1/l;return Un.elements[0]*=c,Un.elements[1]*=c,Un.elements[2]*=c,Un.elements[4]*=h,Un.elements[5]*=h,Un.elements[6]*=h,Un.elements[8]*=u,Un.elements[9]*=u,Un.elements[10]*=u,t.setFromRotationMatrix(Un),n.x=o,n.y=a,n.z=l,this}makePerspective(e,t,n,i,r,o,a=Rn,l=!1){let c=this.elements,h=2*r/(t-e),u=2*r/(n-i),d=(t+e)/(t-e),f=(n+i)/(n-i),p,x;if(l)p=r/(o-r),x=o*r/(o-r);else if(a===Rn)p=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===Bs)p=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=Rn,l=!1){let c=this.elements,h=2/(t-e),u=2/(n-i),d=-(t+e)/(t-e),f=-(n+i)/(n-i),p,x;if(l)p=1/(o-r),x=o/(o-r);else if(a===Rn)p=-2/(o-r),x=-(o+r)/(o-r);else if(a===Bs)p=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Ss=new U,Un=new qe,Em=new U(0,0,0),Rm=new U(1,1,1),Ai=new U,Uo=new U,vn=new U,$u=new qe,ju=new Gt,qn=class s{constructor(e=0,t=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(it(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-it(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(it(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-it(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(it(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-it(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Ne("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return $u.makeRotationFromQuaternion(e),this.setFromRotationMatrix($u,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ju.setFromEuler(this),this.setFromQuaternion(ju,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};qn.DEFAULT_ORDER="XYZ";var Dr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Cm=0,Qu=new U,bs=new Gt,ri=new qe,Fo=new U,gr=new U,Im=new U,Pm=new Gt,ed=new U(1,0,0),td=new U(0,1,0),nd=new U(0,0,1),id={type:"added"},Lm={type:"removed"},Ts={type:"childadded",child:null},dc={type:"childremoved",child:null},Et=class s extends Xn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Cm++}),this.uuid=Gn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new U,t=new qn,n=new Gt,i=new U(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new qe},normalMatrix:{value:new Ye}}),this.matrix=new qe,this.matrixWorld=new qe,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Dr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return bs.setFromAxisAngle(e,t),this.quaternion.multiply(bs),this}rotateOnWorldAxis(e,t){return bs.setFromAxisAngle(e,t),this.quaternion.premultiply(bs),this}rotateX(e){return this.rotateOnAxis(ed,e)}rotateY(e){return this.rotateOnAxis(td,e)}rotateZ(e){return this.rotateOnAxis(nd,e)}translateOnAxis(e,t){return Qu.copy(e).applyQuaternion(this.quaternion),this.position.add(Qu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ed,e)}translateY(e){return this.translateOnAxis(td,e)}translateZ(e){return this.translateOnAxis(nd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ri.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Fo.copy(e):Fo.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),gr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ri.lookAt(gr,Fo,this.up):ri.lookAt(Fo,gr,this.up),this.quaternion.setFromRotationMatrix(ri),i&&(ri.extractRotation(i.matrixWorld),bs.setFromRotationMatrix(ri),this.quaternion.premultiply(bs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(He("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(id),Ts.child=e,this.dispatchEvent(Ts),Ts.child=null):He("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Lm),dc.child=e,this.dispatchEvent(dc),dc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ri.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ri.multiply(e.parent.matrixWorld)),e.applyMatrix4(ri),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(id),Ts.child=e,this.dispatchEvent(Ts),Ts.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gr,e,Im),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gr,Pm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,i=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*i,r[13]+=n-r[1]*t-r[5]*n-r[9]*i,r[14]+=i-r[2]*t-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),p=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=i,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Et.DEFAULT_UP=new U(0,1,0);Et.DEFAULT_MATRIX_AUTO_UPDATE=!0;Et.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ot=class extends Et{constructor(){super(),this.isGroup=!0,this.type="Group"}},Dm={type:"move"},Vs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ot,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ot,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ot,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,n),g=this._getHandJoint(c,x);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,p=.005;c.inputState.pinching&&d>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Dm)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new ot;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Sf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ei={h:0,s:0,l:0},Oo={h:0,s:0,l:0};function fc(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}var Re=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ke){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=nt.workingColorSpace){return this.r=e,this.g=t,this.b=n,nt.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=nt.workingColorSpace){if(e=Sh(e,1),t=it(t,0,1),n=it(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=fc(o,r,e+1/3),this.g=fc(o,r,e),this.b=fc(o,r,e-1/3)}return nt.colorSpaceToWorking(this,i),this}setStyle(e,t=Ke){function n(r){r!==void 0&&parseFloat(r)<1&&Ne("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ne("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);Ne("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ke){let n=Sf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ne("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ui(e.r),this.g=ui(e.g),this.b=ui(e.b),this}copyLinearToSRGB(e){return this.r=Us(e.r),this.g=Us(e.g),this.b=Us(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ke){return nt.workingToColorSpace(sn.copy(this),e),Math.round(it(sn.r*255,0,255))*65536+Math.round(it(sn.g*255,0,255))*256+Math.round(it(sn.b*255,0,255))}getHexString(e=Ke){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=nt.workingColorSpace){nt.workingToColorSpace(sn.copy(this),t);let n=sn.r,i=sn.g,r=sn.b,o=Math.max(n,i,r),a=Math.min(n,i,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=nt.workingColorSpace){return nt.workingToColorSpace(sn.copy(this),t),e.r=sn.r,e.g=sn.g,e.b=sn.b,e}getStyle(e=Ke){nt.workingToColorSpace(sn.copy(this),e);let t=sn.r,n=sn.g,i=sn.b;return e!==Ke?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Ei),this.setHSL(Ei.h+e,Ei.s+t,Ei.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ei),e.getHSL(Oo);let n=Er(Ei.h,Oo.h,t),i=Er(Ei.s,Oo.s,t),r=Er(Ei.l,Oo.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},sn=new Re;Re.NAMES=Sf;var Nr=class s{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Re(e),this.density=t}clone(){return new s(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Ur=class extends Et{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new qn,this.environmentIntensity=1,this.environmentRotation=new qn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Fn=new U,oi=new U,pc=new U,ai=new U,ws=new U,As=new U,sd=new U,mc=new U,gc=new U,xc=new U,_c=new vt,yc=new vt,vc=new vt,Li=class s{constructor(e=new U,t=new U,n=new U){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Fn.subVectors(e,t),i.cross(Fn);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Fn.subVectors(i,t),oi.subVectors(n,t),pc.subVectors(e,t);let o=Fn.dot(Fn),a=Fn.dot(oi),l=Fn.dot(pc),c=oi.dot(oi),h=oi.dot(pc),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-a*h)*d,p=(o*h-a*l)*d;return r.set(1-f-p,p,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,ai)===null?!1:ai.x>=0&&ai.y>=0&&ai.x+ai.y<=1}static getInterpolation(e,t,n,i,r,o,a,l){return this.getBarycoord(e,t,n,i,ai)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ai.x),l.addScaledVector(o,ai.y),l.addScaledVector(a,ai.z),l)}static getInterpolatedAttribute(e,t,n,i,r,o){return _c.setScalar(0),yc.setScalar(0),vc.setScalar(0),_c.fromBufferAttribute(e,t),yc.fromBufferAttribute(e,n),vc.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(_c,r.x),o.addScaledVector(yc,r.y),o.addScaledVector(vc,r.z),o}static isFrontFacing(e,t,n,i){return Fn.subVectors(n,t),oi.subVectors(e,t),Fn.cross(oi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Fn.subVectors(this.c,this.b),oi.subVectors(this.a,this.b),Fn.cross(oi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,r=this.c,o,a;ws.subVectors(i,n),As.subVectors(r,n),mc.subVectors(e,n);let l=ws.dot(mc),c=As.dot(mc);if(l<=0&&c<=0)return t.copy(n);gc.subVectors(e,i);let h=ws.dot(gc),u=As.dot(gc);if(h>=0&&u<=h)return t.copy(i);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0&&l-h>0)return o=l/(l-h),t.copy(n).addScaledVector(ws,o);xc.subVectors(e,r);let f=ws.dot(xc),p=As.dot(xc);if(p>=0&&f<=p)return t.copy(r);let x=f*c-l*p;if(x<=0&&c>=0&&p<=0)return a=c/(c-p),t.copy(n).addScaledVector(As,a);let m=h*p-f*u;if(m<=0&&u-h>=0&&f-p>=0)return sd.subVectors(r,i),a=(u-h)/(u-h+(f-p)),t.copy(i).addScaledVector(sd,a);let g=1/(m+x+d);return o=x*g,a=d*g,t.copy(n).addScaledVector(ws,o).addScaledVector(As,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},hn=class{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(On.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(On.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=On.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,On):On.fromBufferAttribute(r,o),On.applyMatrix4(e.matrixWorld),this.expandByPoint(On);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Bo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Bo.copy(n.boundingBox)),Bo.applyMatrix4(e.matrixWorld),this.union(Bo)}let i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,On),On.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(xr),ko.subVectors(this.max,xr),Es.subVectors(e.a,xr),Rs.subVectors(e.b,xr),Cs.subVectors(e.c,xr),Ri.subVectors(Rs,Es),Ci.subVectors(Cs,Rs),Xi.subVectors(Es,Cs);let t=[0,-Ri.z,Ri.y,0,-Ci.z,Ci.y,0,-Xi.z,Xi.y,Ri.z,0,-Ri.x,Ci.z,0,-Ci.x,Xi.z,0,-Xi.x,-Ri.y,Ri.x,0,-Ci.y,Ci.x,0,-Xi.y,Xi.x,0];return!Mc(t,Es,Rs,Cs,ko)||(t=[1,0,0,0,1,0,0,0,1],!Mc(t,Es,Rs,Cs,ko))?!1:(zo.crossVectors(Ri,Ci),t=[zo.x,zo.y,zo.z],Mc(t,Es,Rs,Cs,ko))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,On).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(On).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(li),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},li=[new U,new U,new U,new U,new U,new U,new U,new U],On=new U,Bo=new hn,Es=new U,Rs=new U,Cs=new U,Ri=new U,Ci=new U,Xi=new U,xr=new U,ko=new U,zo=new U,qi=new U;function Mc(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){qi.fromArray(s,r);let a=i.x*Math.abs(qi.x)+i.y*Math.abs(qi.y)+i.z*Math.abs(qi.z),l=e.dot(qi),c=t.dot(qi),h=n.dot(qi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var kt=new U,Go=new re,Nm=0,zt=class extends Xn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Nm++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=vh,this.updateRanges=[],this.gpuType=Tn,this.version=0,this._normalizationScale=e!==void 0?Al(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Go.fromBufferAttribute(this,t),Go.applyMatrix3(e),this.setXY(t,Go.x,Go.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix3(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix4(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyNormalMatrix(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.transformDirection(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Th(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):wh(e,this.array)}};var Fr=class extends zt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Or=class extends zt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Ce=class extends zt{constructor(e,t,n){super(new Float32Array(e),t,n)}},Um=new hn,_r=new U,Sc=new U,pn=class{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Um.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;_r.subVectors(e,this.center);let t=_r.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(_r,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Sc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(_r.copy(e.center).add(Sc)),this.expandByPoint(_r.copy(e.center).sub(Sc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Fm=0,An=new qe,bc=new Et,Is=new U,Mn=new hn,yr=new hn,Jt=new U,$e=class s extends Xn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Fm++}),this.uuid=Gn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(am(e)?Or:Fr)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ye().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return An.makeRotationFromQuaternion(e),this.applyMatrix4(An),this}rotateX(e){return An.makeRotationX(e),this.applyMatrix4(An),this}rotateY(e){return An.makeRotationY(e),this.applyMatrix4(An),this}rotateZ(e){return An.makeRotationZ(e),this.applyMatrix4(An),this}translate(e,t,n){return An.makeTranslation(e,t,n),this.applyMatrix4(An),this}scale(e,t,n){return An.makeScale(e,t,n),this.applyMatrix4(An),this}lookAt(e){return bc.lookAt(e),bc.updateMatrix(),this.applyMatrix4(bc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Is).negate(),this.translate(Is.x,Is.y,Is.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,r=e.length;i<r;i++){let o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ce(n,3))}else{let n=Math.min(e.length,t.count);for(let i=0;i<n;i++){let r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&Ne("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new hn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){He("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let r=t[n];Mn.setFromBufferAttribute(r),this.morphTargetsRelative?(Jt.addVectors(this.boundingBox.min,Mn.min),this.boundingBox.expandByPoint(Jt),Jt.addVectors(this.boundingBox.max,Mn.max),this.boundingBox.expandByPoint(Jt)):(this.boundingBox.expandByPoint(Mn.min),this.boundingBox.expandByPoint(Mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&He('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new pn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){He("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){let n=this.boundingSphere.center;if(Mn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];yr.setFromBufferAttribute(a),this.morphTargetsRelative?(Jt.addVectors(Mn.min,yr.min),Mn.expandByPoint(Jt),Jt.addVectors(Mn.max,yr.max),Mn.expandByPoint(Jt)):(Mn.expandByPoint(yr.min),Mn.expandByPoint(yr.max))}Mn.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)Jt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Jt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Jt.fromBufferAttribute(a,c),l&&(Is.fromBufferAttribute(e,c),Jt.add(Is)),i=Math.max(i,n.distanceToSquared(Jt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&He('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){He("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new zt(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[],c=new Uint8Array(n.count);for(let C=0;C<n.count;C++)a[C]=new U,l[C]=new U;let h=new U,u=new U,d=new U,f=new re,p=new re,x=new re,m=new U,g=new U;function v(C,w,R){c[C]=c[w]=c[R]=1,h.fromBufferAttribute(n,C),u.fromBufferAttribute(n,w),d.fromBufferAttribute(n,R),f.fromBufferAttribute(r,C),p.fromBufferAttribute(r,w),x.fromBufferAttribute(r,R),u.sub(h),d.sub(h),p.sub(f),x.sub(f);let L=1/(p.x*x.y-x.x*p.y);isFinite(L)&&(m.copy(u).multiplyScalar(x.y).addScaledVector(d,-p.y).multiplyScalar(L),g.copy(d).multiplyScalar(p.x).addScaledVector(u,-x.x).multiplyScalar(L),a[C].add(m),a[w].add(m),a[R].add(m),l[C].add(g),l[w].add(g),l[R].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let C=0,w=M.length;C<w;++C){let R=M[C],L=R.start,B=R.count;for(let I=L,O=L+B;I<O;I+=3)v(e.getX(I+0),e.getX(I+1),e.getX(I+2))}let y=new U,T=new U,S=new U,_=new U;function b(C){S.fromBufferAttribute(i,C),_.copy(S);let w=a[C];y.copy(w),y.sub(S.multiplyScalar(S.dot(w))).normalize(),T.crossVectors(_,w);let L=T.dot(l[C])<0?-1:1;o.setXYZW(C,y.x,y.y,y.z,L)}for(let C=0,w=n.count;C<w;++C)c[C]&&b(C);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new zt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let i=new U,r=new U,o=new U,a=new U,l=new U,c=new U,h=new U,u=new U;if(e)for(let d=0,f=e.count;d<f;d+=3){let p=e.getX(d+0),x=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,p),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Jt.fromBufferAttribute(e,t),Jt.normalize(),e.setXYZ(t,Jt.x,Jt.y,Jt.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h),f=0,p=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?f=l[x]*a.data.stride+a.offset:f=l[x]*h;for(let g=0;g<h;g++)d[p++]=c[f++]}return new zt(d,h,u)}if(this.index===null)return Ne("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=e(d,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(i[l]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let i=e.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Hs=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=vh,this.updateRanges=[],this.version=0,this.uuid=Gn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=rd(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let n=new this.array.constructor(e.arrayBuffers[t]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=rd(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};function rd(s){return s.buffer._uuid===void 0&&(s.buffer._uuid=Gn()),s.byteOffset===0&&s.byteLength===s.buffer.byteLength?s.buffer._uuid:s.buffer._uuid+":"+s.byteOffset+":"+s.byteLength}var ln=new U,Ws=class s{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i,this._normalizationScale=e!==void 0?Al(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)ln.fromBufferAttribute(this,t),ln.applyMatrix4(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ln.fromBufferAttribute(this,t),ln.applyNormalMatrix(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ln.fromBufferAttribute(this,t),ln.transformDirection(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Pr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new zt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new s(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Pr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Th(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):wh(e,this.data.array)}},Tc=new U,Om=new U,Bm=new Ye,Bn=class{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=Tc.subVectors(n,t).cross(Om.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let i=e.delta(Tc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(i,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Bm.getNormalMatrix(e),i=this.coplanarPoint(Tc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},km=0,un=class extends Xn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:km++}),this.uuid=Gn(),this.name="",this.type="Material",this.blending=nr,this.side=Jn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=th,this.blendDst=nh,this.blendEquation=ds,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Re(0,0,0),this.blendAlpha=0,this.depthFunc=Fs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=df,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ca,this.stencilZFail=ca,this.stencilZPass=ca,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Ne(`Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){Ne(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Re().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Bn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new re().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new re().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var ci=new U,wc=new U,Vo=new U,Ho=new U,Qi=class{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ci)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ci.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ci.copy(this.origin).addScaledVector(this.direction,t),ci.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){wc.copy(e).add(t).multiplyScalar(.5),Vo.copy(t).sub(e).normalize(),Ho.copy(this.origin).sub(wc);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Vo),a=Ho.dot(this.direction),l=-Ho.dot(Vo),c=Ho.lengthSq(),h=Math.abs(1-o*o),u,d,f,p;if(h>0)if(u=o*l-a,d=o*a-l,p=r*h,u>=0)if(d>=-p)if(d<=p){let x=1/h;u*=x,d*=x,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-p?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=p?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(wc).addScaledVector(Vo,d),f}intersectSphere(e,t){if(e.radius<0)return null;ci.subVectors(e.center,this.origin);let n=ci.dot(this.direction),i=ci.dot(ci)-n*n,r=e.radius*e.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,ci)!==null}intersectTriangle(e,t,n,i,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,u=e.x-o.x,d=e.y-o.y,f=e.z-o.z,p=t.x-o.x,x=t.y-o.y,m=t.z-o.z,g=n.x-o.x,v=n.y-o.y,M=n.z-o.z,y=Math.abs(l),T=Math.abs(c),S=Math.abs(h),_,b,C,w,R,L,B,I,O,G,D,W;if(y>=T&&y>=S?(C=l,L=u,O=p,W=g,l>=0?(_=c,b=h,w=d,R=f,B=x,I=m,G=v,D=M):(_=h,b=c,w=f,R=d,B=m,I=x,G=M,D=v)):T>=S?(C=c,L=d,O=x,W=v,c>=0?(_=h,b=l,w=f,R=u,B=m,I=p,G=M,D=g):(_=l,b=h,w=u,R=f,B=p,I=m,G=g,D=M)):(C=h,L=f,O=m,W=M,h>=0?(_=l,b=c,w=u,R=d,B=p,I=x,G=g,D=v):(_=c,b=l,w=d,R=u,B=x,I=p,G=v,D=g)),C===0)return null;let N=_/C,V=b/C,H=1/C,J=w-N*L,se=R-V*L,X=B-N*O,te=I-V*O,Me=G-N*W,Ue=D-V*W,me=Me*te-Ue*X,Fe=J*Ue-se*Me,Mt=X*se-te*J;if(i){if(me<0||Fe<0||Mt<0)return null}else if((me<0||Fe<0||Mt<0)&&(me>0||Fe>0||Mt>0))return null;let Ve=me+Fe+Mt;if(Ve===0)return null;let tt=H*(me*L+Fe*O+Mt*W);return(Ve>0?tt<0:tt>0)?null:this.at(tt/Ve,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},$t=class extends un{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qn,this.combine=za,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},od=new qe,Yi=new Qi,Wo=new pn,ad=new U,Xo=new U,qo=new U,Yo=new U,Ac=new U,Ko=new U,ld=new U,Zo=new U,Le=class extends Et{constructor(e=new $e,t=new $t){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let a=this.morphTargetInfluences;if(r&&a){Ko.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(Ac.fromBufferAttribute(u,e),o?Ko.addScaledVector(Ac,h):Ko.addScaledVector(Ac.sub(t),h))}t.add(Ko)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Wo.copy(n.boundingSphere),Wo.applyMatrix4(r),Yi.copy(e.ray).recast(e.near),!(Wo.containsPoint(Yi.origin)===!1&&(Yi.intersectSphere(Wo,ad)===null||Yi.origin.distanceToSquared(ad)>(e.far-e.near)**2))&&(od.copy(r).invert(),Yi.copy(e.ray).applyMatrix4(od),!(n.boundingBox!==null&&Yi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Yi)))}_computeIntersections(e,t,n){let i,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,x=d.length;p<x;p++){let m=d[p],g=o[m.materialIndex],v=Math.max(m.start,f.start),M=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let y=v,T=M;y<T;y+=3){let S=a.getX(y),_=a.getX(y+1),b=a.getX(y+2);i=Jo(this,g,e,n,c,h,u,S,_,b),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let p=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let m=p,g=x;m<g;m+=3){let v=a.getX(m),M=a.getX(m+1),y=a.getX(m+2);i=Jo(this,o,e,n,c,h,u,v,M,y),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,x=d.length;p<x;p++){let m=d[p],g=o[m.materialIndex],v=Math.max(m.start,f.start),M=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let y=v,T=M;y<T;y+=3){let S=y,_=y+1,b=y+2;i=Jo(this,g,e,n,c,h,u,S,_,b),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let p=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let m=p,g=x;m<g;m+=3){let v=m,M=m+1,y=m+2;i=Jo(this,o,e,n,c,h,u,v,M,y),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}};function zm(s,e,t,n,i,r,o,a){let l;if(e.side===fn?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,e.side===Jn,a),l===null)return null;Zo.copy(a),Zo.applyMatrix4(s.matrixWorld);let c=t.ray.origin.distanceTo(Zo);return c<t.near||c>t.far?null:{distance:c,point:Zo.clone(),object:s}}function Jo(s,e,t,n,i,r,o,a,l,c){s.getVertexPosition(a,Xo),s.getVertexPosition(l,qo),s.getVertexPosition(c,Yo);let h=zm(s,e,t,n,Xo,qo,Yo,ld);if(h){let u=new U;Li.getBarycoord(ld,Xo,qo,Yo,u),i&&(h.uv=Li.getInterpolatedAttribute(i,a,l,c,u,new re)),r&&(h.uv1=Li.getInterpolatedAttribute(r,a,l,c,u,new re)),o&&(h.normal=Li.getInterpolatedAttribute(o,a,l,c,u,new U),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new U,materialIndex:0};Li.getNormal(Xo,qo,Yo,d.normal),h.face=d,h.barycoord=u}return h}var vr=new vt,cd=new vt,hd=new vt,Gm=new vt,ud=new qe,$o=new U,Ec=new pn,dd=new qe,Rc=new Qi,Br=class extends Le{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Uc,this.bindMatrix=new qe,this.bindMatrixInverse=new qe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new hn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,$o),this.boundingBox.expandByPoint($o)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new pn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,$o),this.boundingSphere.expandByPoint($o)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}raycast(e,t){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ec.copy(this.boundingSphere),Ec.applyMatrix4(i),e.ray.intersectsSphere(Ec)!==!1&&(dd.copy(i).invert(),Rc.copy(e.ray).applyMatrix4(dd),!(this.boundingBox!==null&&Rc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Rc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new vt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Uc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===lf?this.bindMatrixInverse.copy(this.bindMatrix).invert():Ne("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,i=this.geometry;cd.fromBufferAttribute(i.attributes.skinIndex,e),hd.fromBufferAttribute(i.attributes.skinWeight,e),t.isVector4?(vr.copy(t),t.set(0,0,0,0)):(vr.set(t.x,t.y,t.z,1),t.set(0,0,0)),vr.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let o=hd.getComponent(r);if(o!==0){let a=cd.getComponent(r);ud.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(Gm.copy(vr).applyMatrix4(ud),o)}}return t.isVector4&&(t.w=vr.w),t.applyMatrix4(this.bindMatrixInverse)}},Xs=class extends Et{constructor(){super(),this.isBone=!0,this.type="Bone"}},qs=class extends Wt{constructor(e=null,t=1,n=1,i,r,o,a,l,c=Ft,h=Ft,u,d){super(null,o,a,l,c,h,i,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},fd=new qe,Vm=new qe,kr=class s{constructor(e=[],t=[]){this.uuid=Gn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.previousBoneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Ne("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new qe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new qe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:Vm;fd.multiplyMatrices(a,t[r]),fd.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new s(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new qs(t,e,e,In,Tn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null),this.previousBoneTexture!==null&&(this.previousBoneTexture.dispose(),this.previousBoneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let r=e.bones[n],o=t[r];o===void 0&&(Ne("Skeleton: No bone found with UUID:",r),o=new Xs),this.bones.push(o),this.boneInverses.push(new qe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){let o=t[i];e.bones.push(o.uuid);let a=n[i];e.boneInverses.push(a.toArray())}return e}},fi=class extends zt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Ps=new qe,pd=new qe,jo=[],md=new hn,Hm=new qe,Mr=new Le,Sr=new pn,zr=class extends Le{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new fi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Hm)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new hn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ps),md.copy(e.boundingBox).applyMatrix4(Ps),this.boundingBox.union(md)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new pn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ps),Sr.copy(e.boundingSphere).applyMatrix4(Ps),this.boundingSphere.union(Sr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){let n=this.matrixWorld,i=this.count;if(Mr.geometry=this.geometry,Mr.material=this.material,Mr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Sr.copy(this.boundingSphere),Sr.applyMatrix4(n),e.ray.intersectsSphere(Sr)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Ps),pd.multiplyMatrices(n,Ps),Mr.matrixWorld=pd,Mr.raycast(e,jo);for(let o=0,a=jo.length;o<a;o++){let l=jo[o];l.instanceId=r,l.object=this,t.push(l)}jo.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new fi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new qs(new Float32Array(i*this.count),i,this.count,qa,Tn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=i*e;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ki=new pn,Wm=new re(.5,.5),Qo=new U,Di=class{constructor(e=new Bn,t=new Bn,n=new Bn,i=new Bn,r=new Bn,o=new Bn){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Rn,n=!1){let i=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],f=r[7],p=r[8],x=r[9],m=r[10],g=r[11],v=r[12],M=r[13],y=r[14],T=r[15];if(i[0].setComponents(c-o,f-h,g-p,T-v).normalize(),i[1].setComponents(c+o,f+h,g+p,T+v).normalize(),i[2].setComponents(c+a,f+u,g+x,T+M).normalize(),i[3].setComponents(c-a,f-u,g-x,T-M).normalize(),n)i[4].setComponents(l,d,m,y).normalize(),i[5].setComponents(c-l,f-d,g-m,T-y).normalize();else if(i[4].setComponents(c-l,f-d,g-m,T-y).normalize(),t===Rn)i[5].setComponents(c+l,f+d,g+m,T+y).normalize();else if(t===Bs)i[5].setComponents(l,d,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ki.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ki.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ki)}intersectsSprite(e){Ki.center.set(0,0,0);let t=Wm.distanceTo(e.center);return Ki.radius=.7071067811865476+t,Ki.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ki)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(Qo.x=i.normal.x>0?e.max.x:e.min.x,Qo.y=i.normal.y>0?e.max.y:e.min.y,Qo.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Qo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},gd=new qe,va=class s{constructor(){this.coordinateSystem=Rn,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let i=0;i<t.length;i++){let r=t[i];gd.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[i]===void 0&&(n[i]=new Di),n[i].setFromProjectionMatrix(gd,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let i=0;i<e._count;i++)t[i]===void 0&&(t[i]=new Di),t[i].copy(n[i]);return this._count=e._count,this}clone(){return new s().copy(this)}};var Ys=class extends un{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Re(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Ma=new U,Sa=new U,xd=new qe,br=new Qi,ea=new pn,Cc=new U,_d=new U,es=class extends Et{constructor(e=new $e,t=new Ys){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Ma.fromBufferAttribute(t,i-1),Sa.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Ma.distanceTo(Sa);e.setAttribute("lineDistance",new Ce(n,1))}else Ne("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ea.copy(n.boundingSphere),ea.applyMatrix4(i),ea.radius+=r,e.ray.intersectsSphere(ea)===!1)return;xd.copy(i).invert(),br.copy(e.ray).applyMatrix4(xd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let f=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let x=f,m=p-1;x<m;x+=c){let g=h.getX(x),v=h.getX(x+1),M=ta(this,e,br,l,g,v,x);M&&t.push(M)}if(this.isLineLoop){let x=h.getX(p-1),m=h.getX(f),g=ta(this,e,br,l,x,m,p-1);g&&t.push(g)}}else{let f=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let x=f,m=p-1;x<m;x+=c){let g=ta(this,e,br,l,x,x+1,x);g&&t.push(g)}if(this.isLineLoop){let x=ta(this,e,br,l,p-1,f,p-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function ta(s,e,t,n,i,r,o){let a=s.geometry.attributes.position;if(Ma.fromBufferAttribute(a,i),Sa.fromBufferAttribute(a,r),t.distanceSqToSegment(Ma,Sa,Cc,_d)>n)return;Cc.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(Cc);if(!(c<e.near||c>e.far))return{distance:c,point:_d.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}var yd=new U,vd=new U,Gr=class extends es{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)yd.fromBufferAttribute(t,i),vd.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+yd.distanceTo(vd);e.setAttribute("lineDistance",new Ce(n,1))}else Ne("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Vr=class extends es{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Ks=class extends un{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Re(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Md=new qe,zc=new Qi,na=new pn,ia=new U,Hr=class extends Et{constructor(e=new $e,t=new Ks){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),na.copy(n.boundingSphere),na.applyMatrix4(i),na.radius+=r,e.ray.intersectsSphere(na)===!1)return;Md.copy(i).invert(),zc.copy(e.ray).applyMatrix4(Md);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){let d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let p=d,x=f;p<x;p++){let m=c.getX(p);ia.fromBufferAttribute(u,m),Sd(ia,m,l,i,e,t,this)}}else{let d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let p=d,x=f;p<x;p++)ia.fromBufferAttribute(u,p),Sd(ia,p,l,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Sd(s,e,t,n,i,r,o){let a=zc.distanceSqToPoint(s);if(a<t){let l=new U;zc.closestPointToPoint(s,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Wr=class extends Wt{constructor(e=[],t=fs,n,i,r,o,a,l,c,h){super(e,t,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},mn=class extends Wt{constructor(e,t,n,i,r,o,a,l,c){super(e,t,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var pi=class extends Wt{constructor(e,t,n=kn,i,r,o,a=Ft,l=Ft,c,h=di,u=1){if(h!==di&&h!==vi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:u};super(d,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Gs(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Xr=class extends pi{constructor(e,t=kn,n=fs,i,r,o=Ft,a=Ft,l,c=di){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,n,i,r,o,a,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},qr=class extends Wt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Ut=class s extends $e{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],d=0,f=0;p("z","y","x",-1,-1,n,t,e,o,r,0),p("z","y","x",1,-1,n,t,-e,o,r,1),p("x","z","y",1,1,e,n,t,i,o,2),p("x","z","y",1,-1,e,n,-t,i,o,3),p("x","y","z",1,-1,e,t,n,i,r,4),p("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Ce(c,3)),this.setAttribute("normal",new Ce(h,3)),this.setAttribute("uv",new Ce(u,2));function p(x,m,g,v,M,y,T,S,_,b,C){let w=y/_,R=T/b,L=y/2,B=T/2,I=S/2,O=_+1,G=b+1,D=0,W=0,N=new U;for(let V=0;V<G;V++){let H=V*R-B;for(let J=0;J<O;J++){let se=J*w-L;N[x]=se*v,N[m]=H*M,N[g]=I,c.push(N.x,N.y,N.z),N[x]=0,N[m]=0,N[g]=S>0?1:-1,h.push(N.x,N.y,N.z),u.push(J/_),u.push(1-V/b),D+=1}}for(let V=0;V<b;V++)for(let H=0;H<_;H++){let J=d+H+O*V,se=d+H+O*(V+1),X=d+(H+1)+O*(V+1),te=d+(H+1)+O*V;l.push(J,se,te),l.push(se,X,te),W+=6}a.addGroup(f,W,C),f+=W,d+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var ts=class s extends $e{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new U,h=new re;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let f=n+u/t*i;c.x=e*Math.cos(f),c.y=e*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/e+1)/2,h.y=(o[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Ce(o,3)),this.setAttribute("normal",new Ce(a,3)),this.setAttribute("uv",new Ce(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.segments,e.thetaStart,e.thetaLength)}},gn=class s extends $e{constructor(e=1,t=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;i=Math.floor(i),r=Math.floor(r);let h=[],u=[],d=[],f=[],p=0,x=[],m=n/2,g=0;v(),o===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new Ce(u,3)),this.setAttribute("normal",new Ce(d,3)),this.setAttribute("uv",new Ce(f,2));function v(){let y=new U,T=new U,S=0,_=(t-e)/n;for(let b=0;b<=r;b++){let C=[],w=b/r,R=w*(t-e)+e;for(let L=0;L<=i;L++){let B=L/i,I=B*l+a,O=Math.sin(I),G=Math.cos(I);T.x=R*O,T.y=-w*n+m,T.z=R*G,u.push(T.x,T.y,T.z),y.set(O,_,G).normalize(),d.push(y.x,y.y,y.z),f.push(B,1-w),C.push(p++)}x.push(C)}for(let b=0;b<i;b++)for(let C=0;C<r;C++){let w=x[C][b],R=x[C+1][b],L=x[C+1][b+1],B=x[C][b+1];(e>0||C!==0)&&(h.push(w,R,B),S+=3),(t>0||C!==r-1)&&(h.push(R,L,B),S+=3)}c.addGroup(g,S,0),g+=S}function M(y){let T=p,S=new re,_=new U,b=0,C=y===!0?e:t,w=y===!0?1:-1;for(let L=1;L<=i;L++)u.push(0,m*w,0),d.push(0,w,0),f.push(.5,.5),p++;let R=p;for(let L=0;L<=i;L++){let I=L/i*l+a,O=Math.cos(I),G=Math.sin(I);_.x=C*G,_.y=m*w,_.z=C*O,u.push(_.x,_.y,_.z),d.push(0,w,0),S.x=O*.5+.5,S.y=G*.5*w+.5,f.push(S.x,S.y),p++}for(let L=0;L<i;L++){let B=T+L,I=R+L;y===!0?h.push(I,I+1,B):h.push(I+1,I,B),b+=3}c.addGroup(g,b,y===!0?1:2),g+=b}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Yr=class s extends gn{constructor(e=1,t=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new s(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Kr=class s extends $e{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};let r=[],o=[];a(i),c(n),h(),this.setAttribute("position",new Ce(r,3)),this.setAttribute("normal",new Ce(r.slice(),3)),this.setAttribute("uv",new Ce(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(v){let M=new U,y=new U,T=new U;for(let S=0;S<t.length;S+=3)f(t[S+0],M),f(t[S+1],y),f(t[S+2],T),l(M,y,T,v)}function l(v,M,y,T){let S=T+1,_=[];for(let b=0;b<=S;b++){_[b]=[];let C=v.clone().lerp(y,b/S),w=M.clone().lerp(y,b/S),R=S-b;for(let L=0;L<=R;L++)L===0&&b===S?_[b][L]=C:_[b][L]=C.clone().lerp(w,L/R)}for(let b=0;b<S;b++)for(let C=0;C<2*(S-b)-1;C++){let w=Math.floor(C/2);C%2===0?(d(_[b][w+1]),d(_[b+1][w]),d(_[b][w])):(d(_[b][w+1]),d(_[b+1][w+1]),d(_[b+1][w]))}}function c(v){let M=new U;for(let y=0;y<r.length;y+=3)M.x=r[y+0],M.y=r[y+1],M.z=r[y+2],M.normalize().multiplyScalar(v),r[y+0]=M.x,r[y+1]=M.y,r[y+2]=M.z}function h(){let v=new U;for(let M=0;M<r.length;M+=3){v.x=r[M+0],v.y=r[M+1],v.z=r[M+2];let y=m(v)/2/Math.PI+.5,T=g(v)/Math.PI+.5;o.push(y,1-T)}p(),u()}function u(){for(let v=0;v<o.length;v+=6){let M=o[v+0],y=o[v+2],T=o[v+4],S=Math.max(M,y,T),_=Math.min(M,y,T);S>.9&&_<.1&&(M<.2&&(o[v+0]+=1),y<.2&&(o[v+2]+=1),T<.2&&(o[v+4]+=1))}}function d(v){r.push(v.x,v.y,v.z)}function f(v,M){let y=v*3;M.x=e[y+0],M.y=e[y+1],M.z=e[y+2]}function p(){let v=new U,M=new U,y=new U,T=new U,S=new re,_=new re,b=new re;for(let C=0,w=0;C<r.length;C+=9,w+=6){v.set(r[C+0],r[C+1],r[C+2]),M.set(r[C+3],r[C+4],r[C+5]),y.set(r[C+6],r[C+7],r[C+8]),S.set(o[w+0],o[w+1]),_.set(o[w+2],o[w+3]),b.set(o[w+4],o[w+5]),T.copy(v).add(M).add(y).divideScalar(3);let R=m(T);x(S,w+0,v,R),x(_,w+2,M,R),x(b,w+4,y,R)}}function x(v,M,y,T){T<0&&v.x===1&&(o[M]=v.x-1),y.x===0&&y.z===0&&(o[M]=T/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function g(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.vertices,e.indices,e.radius,e.detail)}};var bn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ne("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),i=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);let h=n[i],d=n[i+1]-h,f=(o-h)/d;return(i+f)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);let o=this.getPoint(i),a=this.getPoint(r),l=t||(o.isVector2?new re:new U);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new U,i=[],r=[],o=[],a=new U,l=new qe;for(let f=0;f<=e;f++){let p=f/e;i[f]=this.getTangentAt(p,new U)}r[0]=new U,o[0]=new U;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(it(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,p))}o[f].crossVectors(i[f],r[f])}if(t===!0){let f=Math.acos(it(r[0].dot(r[e]),-1,1));f/=e,i[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let p=1;p<=e;p++)r[p].applyMatrix4(l.makeRotationAxis(i[p],f*p)),o[p].crossVectors(i[p],r[p])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},Zs=class extends bn{constructor(e=0,t=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new re){let n=t,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},ba=class extends Zs{constructor(e,t,n,i,r,o){super(e,t,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Ah(){let s=0,e=0,t=0,n=0;function i(r,o,a,l){s=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,f*=h,i(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return s+e*r+t*o+n*a}}}var bd=new U,Td=new U,Ic=new Ah,Pc=new Ah,Lc=new Ah,Ta=class extends bn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new U){let n=t,i=this.points,r=i.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%r]:(Td.subVectors(i[0],i[1]).add(i[0]),c=Td);let u=i[a%r],d=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(bd.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=bd),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(u),f),x=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);x<1e-4&&(x=1),p<1e-4&&(p=x),m<1e-4&&(m=x),Ic.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,p,x,m),Pc.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,p,x,m),Lc.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,p,x,m)}else this.curveType==="catmullrom"&&(Ic.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Pc.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Lc.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Ic.calc(l),Pc.calc(l),Lc.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new U().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function wd(s,e,t,n,i){let r=(n-e)*.5,o=(i-t)*.5,a=s*s,l=s*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*s+t}function Xm(s,e){let t=1-s;return t*t*e}function qm(s,e){return 2*(1-s)*s*e}function Ym(s,e){return s*s*e}function Rr(s,e,t,n){return Xm(s,e)+qm(s,t)+Ym(s,n)}function Km(s,e){let t=1-s;return t*t*t*e}function Zm(s,e){let t=1-s;return 3*t*t*s*e}function Jm(s,e){return 3*(1-s)*s*s*e}function $m(s,e){return s*s*s*e}function Cr(s,e,t,n,i){return Km(s,e)+Zm(s,t)+Jm(s,n)+$m(s,i)}var Zr=class extends bn{constructor(e=new re,t=new re,n=new re,i=new re){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new re){let n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Cr(e,i.x,r.x,o.x,a.x),Cr(e,i.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},wa=class extends bn{constructor(e=new U,t=new U,n=new U,i=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new U){let n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Cr(e,i.x,r.x,o.x,a.x),Cr(e,i.y,r.y,o.y,a.y),Cr(e,i.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Jr=class extends bn{constructor(e=new re,t=new re){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new re){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new re){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Aa=class extends bn{constructor(e=new U,t=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new U){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new U){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},$r=class extends bn{constructor(e=new re,t=new re,n=new re){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new re){let n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(Rr(e,i.x,r.x,o.x),Rr(e,i.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ea=class extends bn{constructor(e=new U,t=new U,n=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new U){let n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(Rr(e,i.x,r.x,o.x),Rr(e,i.y,r.y,o.y),Rr(e,i.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},jr=class extends bn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new re){let n=t,i=this.points,r=(i.length-1)*e,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(wd(a,l.x,c.x,h.x,u.x),wd(a,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new re().fromArray(i))}return this}},Gc=Object.freeze({__proto__:null,ArcCurve:ba,CatmullRomCurve3:Ta,CubicBezierCurve:Zr,CubicBezierCurve3:wa,EllipseCurve:Zs,LineCurve:Jr,LineCurve3:Aa,QuadraticBezierCurve:$r,QuadraticBezierCurve3:Ea,SplineCurve:jr}),Ra=class extends bn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Gc[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=n){let o=i[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let i=0,r=this.curves;i<r.length;i++){let o=r[i],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(new Gc[i.type]().fromJSON(i))}return this.cacheLengths=null,this}},Qr=class extends Ra{constructor(e){super(),this.type="Path",this.currentPoint=new re,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Jr(this.currentPoint.clone(),new re(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){let r=new $r(this.currentPoint.clone(),new re(e,t),new re(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,o){let a=new Zr(this.currentPoint.clone(),new re(e,t),new re(n,i),new re(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new jr(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,i,r,o),this}absarc(e,t,n,i,r,o){return this.absellipse(e,t,n,n,i,r,o),this}ellipse(e,t,n,i,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,i,r,o,a,l),this}absellipse(e,t,n,i,r,o,a,l){let c=new Zs(e,t,n,i,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},ns=class extends Qr{constructor(e){super(e),this.uuid=Gn(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(new Qr().fromJSON(i))}return this}};function jm(s,e,t=2){let n=e&&e.length,i=n?e[0]*t:s.length,r=bf(s,0,i,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=ig(s,e,r,t)),s.length>80*t){a=s[0],l=s[1];let h=a,u=l;for(let d=t;d<i;d+=t){let f=s[d],p=s[d+1];f<a&&(a=f),p<l&&(l=p),f>h&&(h=f),p>u&&(u=p)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return eo(r,o,t,a,l,c,0),o}function bf(s,e,t,n,i){let r;if(i===pg(s,e,t,n)>0)for(let o=e;o<t;o+=n)r=Ad(o/n|0,s[o],s[o+1],r);else for(let o=t-n;o>=e;o-=n)r=Ad(o/n|0,s[o],s[o+1],r);return r&&Js(r,r.next)&&(no(r),r=r.next),r}function is(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(Js(t,t.next)||Ct(t.prev,t,t.next)===0)){if(no(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function eo(s,e,t,n,i,r,o){if(!s)return;!o&&r&&lg(s,n,i,r);let a=s;for(;s.prev!==s.next;){let l=s.prev,c=s.next;if(r?eg(s,n,i,r):Qm(s)){e.push(l.i,s.i,c.i),no(s),s=c.next,a=c.next;continue}if(s=c,s===a){o?o===1?(s=tg(is(s),e),eo(s,e,t,n,i,r,2)):o===2&&ng(s,e,t,n,i,r):eo(is(s),e,t,n,i,r,1);break}}}function Qm(s){let e=s.prev,t=s,n=s.next;if(Ct(e,t,n)>=0)return!1;let i=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,h=Math.min(i,r,o),u=Math.min(a,l,c),d=Math.max(i,r,o),f=Math.max(a,l,c),p=n.next;for(;p!==e;){if(p.x>=h&&p.x<=d&&p.y>=u&&p.y<=f&&Tr(i,a,r,l,o,c,p.x,p.y)&&Ct(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function eg(s,e,t,n){let i=s.prev,r=s,o=s.next;if(Ct(i,r,o)>=0)return!1;let a=i.x,l=r.x,c=o.x,h=i.y,u=r.y,d=o.y,f=Math.min(a,l,c),p=Math.min(h,u,d),x=Math.max(a,l,c),m=Math.max(h,u,d),g=Vc(f,p,e,t,n),v=Vc(x,m,e,t,n),M=s.prevZ,y=s.nextZ;for(;M&&M.z>=g&&y&&y.z<=v;){if(M.x>=f&&M.x<=x&&M.y>=p&&M.y<=m&&M!==i&&M!==o&&Tr(a,h,l,u,c,d,M.x,M.y)&&Ct(M.prev,M,M.next)>=0||(M=M.prevZ,y.x>=f&&y.x<=x&&y.y>=p&&y.y<=m&&y!==i&&y!==o&&Tr(a,h,l,u,c,d,y.x,y.y)&&Ct(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;M&&M.z>=g;){if(M.x>=f&&M.x<=x&&M.y>=p&&M.y<=m&&M!==i&&M!==o&&Tr(a,h,l,u,c,d,M.x,M.y)&&Ct(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;y&&y.z<=v;){if(y.x>=f&&y.x<=x&&y.y>=p&&y.y<=m&&y!==i&&y!==o&&Tr(a,h,l,u,c,d,y.x,y.y)&&Ct(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function tg(s,e){let t=s;do{let n=t.prev,i=t.next.next;!Js(n,i)&&wf(n,t,t.next,i)&&to(n,i)&&to(i,n)&&(e.push(n.i,t.i,i.i),no(t),no(t.next),t=s=i),t=t.next}while(t!==s);return is(t)}function ng(s,e,t,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&ug(o,a)){let l=Af(o,a);o=is(o,o.next),l=is(l,l.next),eo(o,e,t,n,i,r,0),eo(l,e,t,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function ig(s,e,t,n){let i=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*n,l=r<o-1?e[r+1]*n:s.length,c=bf(s,a,l,n,!1);c===c.next&&(c.steiner=!0),i.push(hg(c))}i.sort(sg);for(let r=0;r<i.length;r++)t=rg(i[r],t);return t}function sg(s,e){let t=s.x-e.x;if(t===0&&(t=s.y-e.y,t===0)){let n=(s.next.y-s.y)/(s.next.x-s.x),i=(e.next.y-e.y)/(e.next.x-e.x);t=n-i}return t}function rg(s,e){let t=og(s,e);if(!t)return e;let n=Af(t,s);return is(n,n.next),is(t,t.next)}function og(s,e){let t=e,n=s.x,i=s.y,r=-1/0,o;if(Js(s,t))return t;do{if(Js(s,t.next))return t.next;if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){let u=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>r&&(r=u,o=t.x<t.next.x?t:t.next,u===n))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;t=o;do{if(n>=t.x&&t.x>=l&&n!==t.x&&Tf(i<c?n:r,i,l,c,i<c?r:n,i,t.x,t.y)){let u=Math.abs(i-t.y)/(n-t.x);to(t,s)&&(u<h||u===h&&(t.x>o.x||t.x===o.x&&ag(o,t)))&&(o=t,h=u)}t=t.next}while(t!==a);return o}function ag(s,e){return Ct(s.prev,s,e.prev)<0&&Ct(e.next,s,s.next)<0}function lg(s,e,t,n){let i=s;do i.z===0&&(i.z=Vc(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,cg(i)}function cg(s){let e,t=1;do{let n=s,i;s=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(i=n,n=n.nextZ,a--):(i=o,o=o.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;n=o}r.nextZ=null,t*=2}while(e>1);return s}function Vc(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function hg(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function Tf(s,e,t,n,i,r,o,a){return(i-o)*(e-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(i-o)*(n-a)}function Tr(s,e,t,n,i,r,o,a){return!(s===o&&e===a)&&Tf(s,e,t,n,i,r,o,a)}function ug(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!dg(s,e)&&(to(s,e)&&to(e,s)&&fg(s,e)&&(Ct(s.prev,s,e.prev)||Ct(s,e.prev,e))||Js(s,e)&&Ct(s.prev,s,s.next)>0&&Ct(e.prev,e,e.next)>0)}function Ct(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function Js(s,e){return s.x===e.x&&s.y===e.y}function wf(s,e,t,n){let i=ra(Ct(s,e,t)),r=ra(Ct(s,e,n)),o=ra(Ct(t,n,s)),a=ra(Ct(t,n,e));return!!(i!==r&&o!==a||i===0&&sa(s,t,e)||r===0&&sa(s,n,e)||o===0&&sa(t,s,n)||a===0&&sa(t,e,n))}function sa(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function ra(s){return s>0?1:s<0?-1:0}function dg(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&wf(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function to(s,e){return Ct(s.prev,s,s.next)<0?Ct(s,e,s.next)>=0&&Ct(s,s.prev,e)>=0:Ct(s,e,s.prev)<0||Ct(s,s.next,e)<0}function fg(s,e){let t=s,n=!1,i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function Af(s,e){let t=Hc(s.i,s.x,s.y),n=Hc(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Ad(s,e,t,n){let i=Hc(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function no(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Hc(s,e,t){return{i:s,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function pg(s,e,t,n){let i=0;for(let r=e,o=t-n;r<t;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}var Wc=class{static triangulate(e,t,n=2){return jm(e,t,n)}},rn=class s{static area(e){let t=e.length,n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return s.area(e)<0}static triangulateShape(e,t){let n=[],i=[],r=[];Ed(e),Rd(n,e);let o=e.length;t.forEach(Ed);for(let l=0;l<t.length;l++)i.push(o),o+=t[l].length,Rd(n,t[l]);let a=Wc.triangulate(n,i);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Ed(s){let e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function Rd(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}var $s=class s extends $e{constructor(e=new ns([new re(.5,.5),new re(-.5,.5),new re(-.5,-.5),new re(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,i=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new Ce(i,3)),this.setAttribute("uv",new Ce(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:f-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,g=t.extrudePath,v=t.UVGenerator!==void 0?t.UVGenerator:mg,M,y=!1,T,S,_,b;if(g){M=g.getSpacedPoints(h),y=!0,d=!1;let ie=g.isCatmullRomCurve3?g.closed:!1;T=g.computeFrenetFrames(h,ie),S=new U,_=new U,b=new U}d||(m=0,f=0,p=0,x=0);let C=a.extractPoints(c),w=C.shape,R=C.holes;if(!rn.isClockWise(w)){w=w.reverse();for(let ie=0,de=R.length;ie<de;ie++){let ce=R[ie];rn.isClockWise(ce)&&(R[ie]=ce.reverse())}}function B(ie){let ce=10000000000000001e-36,Ae=ie[0];for(let ve=1;ve<=ie.length;ve++){let Je=ve%ie.length,Oe=ie[Je],lt=Oe.x-Ae.x,ct=Oe.y-Ae.y,gt=lt*lt+ct*ct,z=Math.max(Math.abs(Oe.x),Math.abs(Oe.y),Math.abs(Ae.x),Math.abs(Ae.y)),Ot=ce*z*z;if(gt<=Ot){ie.splice(Je,1),ve--;continue}Ae=Oe}}B(w),R.forEach(B);let I=R.length,O=w;for(let ie=0;ie<I;ie++){let de=R[ie];w=w.concat(de)}function G(ie,de,ce){return de||He("ExtrudeGeometry: vec does not exist"),ie.clone().addScaledVector(de,ce)}let D=w.length;function W(ie,de,ce){let Ae,ve,Je,Oe=ie.x-de.x,lt=ie.y-de.y,ct=ce.x-ie.x,gt=ce.y-ie.y,z=Oe*Oe+lt*lt,Ot=Oe*gt-lt*ct;if(Math.abs(Ot)>Number.EPSILON){let rt=Math.sqrt(z),St=Math.sqrt(ct*ct+gt*gt),xe=de.x-lt/rt,Dt=de.y+Oe/rt,ze=ce.x-gt/St,Xe=ce.y+ct/St,P=((ze-xe)*gt-(Xe-Dt)*ct)/(Oe*gt-lt*ct);Ae=xe+Oe*P-ie.x,ve=Dt+lt*P-ie.y;let A=Ae*Ae+ve*ve;if(A<=2)return new re(Ae,ve);Je=Math.sqrt(A/2)}else{let rt=!1;Oe>Number.EPSILON?ct>Number.EPSILON&&(rt=!0):Oe<-Number.EPSILON?ct<-Number.EPSILON&&(rt=!0):Math.sign(lt)===Math.sign(gt)&&(rt=!0),rt?(Ae=-lt,ve=Oe,Je=Math.sqrt(z)):(Ae=Oe,ve=lt,Je=Math.sqrt(z/2))}return new re(Ae/Je,ve/Je)}let N=[];for(let ie=0,de=O.length,ce=de-1,Ae=ie+1;ie<de;ie++,ce++,Ae++)ce===de&&(ce=0),Ae===de&&(Ae=0),N[ie]=W(O[ie],O[ce],O[Ae]);let V=[],H,J=N.concat();for(let ie=0,de=I;ie<de;ie++){let ce=R[ie];H=[];for(let Ae=0,ve=ce.length,Je=ve-1,Oe=Ae+1;Ae<ve;Ae++,Je++,Oe++)Je===ve&&(Je=0),Oe===ve&&(Oe=0),H[Ae]=W(ce[Ae],ce[Je],ce[Oe]);V.push(H),J=J.concat(H)}let se;if(m===0)se=rn.triangulateShape(O,R);else{let ie=[],de=[];for(let ce=0;ce<m;ce++){let Ae=ce/m,ve=f*Math.cos(Ae*Math.PI/2),Je=p*Math.sin(Ae*Math.PI/2)+x;for(let Oe=0,lt=O.length;Oe<lt;Oe++){let ct=G(O[Oe],N[Oe],Je);Fe(ct.x,ct.y,-ve),Ae===0&&ie.push(ct)}for(let Oe=0,lt=I;Oe<lt;Oe++){let ct=R[Oe];H=V[Oe];let gt=[];for(let z=0,Ot=ct.length;z<Ot;z++){let rt=G(ct[z],H[z],Je);Fe(rt.x,rt.y,-ve),Ae===0&&gt.push(rt)}Ae===0&&de.push(gt)}}se=rn.triangulateShape(ie,de)}let X=se.length,te=p+x;for(let ie=0;ie<D;ie++){let de=d?G(w[ie],J[ie],te):w[ie];y?(_.copy(T.normals[0]).multiplyScalar(de.x),S.copy(T.binormals[0]).multiplyScalar(de.y),b.copy(M[0]).add(_).add(S),Fe(b.x,b.y,b.z)):Fe(de.x,de.y,0)}for(let ie=1;ie<=h;ie++)for(let de=0;de<D;de++){let ce=d?G(w[de],J[de],te):w[de];y?(_.copy(T.normals[ie]).multiplyScalar(ce.x),S.copy(T.binormals[ie]).multiplyScalar(ce.y),b.copy(M[ie]).add(_).add(S),Fe(b.x,b.y,b.z)):Fe(ce.x,ce.y,u/h*ie)}for(let ie=m-1;ie>=0;ie--){let de=ie/m,ce=f*Math.cos(de*Math.PI/2),Ae=p*Math.sin(de*Math.PI/2)+x;for(let ve=0,Je=O.length;ve<Je;ve++){let Oe=G(O[ve],N[ve],Ae);Fe(Oe.x,Oe.y,u+ce)}for(let ve=0,Je=R.length;ve<Je;ve++){let Oe=R[ve];H=V[ve];for(let lt=0,ct=Oe.length;lt<ct;lt++){let gt=G(Oe[lt],H[lt],Ae);y?Fe(gt.x,gt.y+M[h-1].y,M[h-1].x+ce):Fe(gt.x,gt.y,u+ce)}}}Me(),Ue();function Me(){let ie=i.length/3;if(d){let de=0,ce=D*de;for(let Ae=0;Ae<X;Ae++){let ve=se[Ae];Mt(ve[2]+ce,ve[1]+ce,ve[0]+ce)}de=h+m*2,ce=D*de;for(let Ae=0;Ae<X;Ae++){let ve=se[Ae];Mt(ve[0]+ce,ve[1]+ce,ve[2]+ce)}}else{for(let de=0;de<X;de++){let ce=se[de];Mt(ce[2],ce[1],ce[0])}for(let de=0;de<X;de++){let ce=se[de];Mt(ce[0]+D*h,ce[1]+D*h,ce[2]+D*h)}}n.addGroup(ie,i.length/3-ie,0)}function Ue(){let ie=i.length/3,de=0;me(O,de),de+=O.length;for(let ce=0,Ae=R.length;ce<Ae;ce++){let ve=R[ce];me(ve,de),de+=ve.length}n.addGroup(ie,i.length/3-ie,1)}function me(ie,de){let ce=ie.length;for(;--ce>=0;){let Ae=ce,ve=ce-1;ve<0&&(ve=ie.length-1);for(let Je=0,Oe=h+m*2;Je<Oe;Je++){let lt=D*Je,ct=D*(Je+1),gt=de+Ae+lt,z=de+ve+lt,Ot=de+ve+ct,rt=de+Ae+ct;Ve(gt,z,Ot,rt)}}}function Fe(ie,de,ce){l.push(ie),l.push(de),l.push(ce)}function Mt(ie,de,ce){tt(ie),tt(de),tt(ce);let Ae=i.length/3,ve=v.generateTopUV(n,i,Ae-3,Ae-2,Ae-1);at(ve[0]),at(ve[1]),at(ve[2])}function Ve(ie,de,ce,Ae){tt(ie),tt(de),tt(Ae),tt(de),tt(ce),tt(Ae);let ve=i.length/3,Je=v.generateSideWallUV(n,i,ve-6,ve-3,ve-2,ve-1);at(Je[0]),at(Je[1]),at(Je[3]),at(Je[1]),at(Je[2]),at(Je[3])}function tt(ie){i.push(l[ie*3+0]),i.push(l[ie*3+1]),i.push(l[ie*3+2])}function at(ie){r.push(ie.x),r.push(ie.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return gg(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new Gc[i.type]().fromJSON(i)),new s(n,e.options)}},mg={generateTopUV:function(s,e,t,n,i){let r=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[i*3],h=e[i*3+1];return[new re(r,o),new re(a,l),new re(c,h)]},generateSideWallUV:function(s,e,t,n,i,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],u=e[n*3+2],d=e[i*3],f=e[i*3+1],p=e[i*3+2],x=e[r*3],m=e[r*3+1],g=e[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new re(o,1-l),new re(c,1-u),new re(d,1-p),new re(x,1-g)]:[new re(a,1-l),new re(h,1-u),new re(f,1-p),new re(m,1-g)]}};function gg(s,e,t){if(t.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){let r=s[n];t.shapes.push(r.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var io=class s extends Kr{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}};var so=class s extends Kr{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}},dn=class s extends $e{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=e/a,d=t/l,f=[],p=[],x=[],m=[];for(let g=0;g<h;g++){let v=g*d-o;for(let M=0;M<c;M++){let y=M*u-r;p.push(y,-v,0),x.push(0,0,1),m.push(M/a),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let v=0;v<a;v++){let M=v+c*g,y=v+c*(g+1),T=v+1+c*(g+1),S=v+1+c*g;f.push(M,y,S),f.push(y,T,S)}this.setIndex(f),this.setAttribute("position",new Ce(p,3)),this.setAttribute("normal",new Ce(x,3)),this.setAttribute("uv",new Ce(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}},ro=class s extends $e{constructor(e=.5,t=1,n=32,i=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);let a=[],l=[],c=[],h=[],u=e,d=(t-e)/i,f=new U,p=new re;for(let x=0;x<=i;x++){for(let m=0;m<=n;m++){let g=r+m/n*o;f.x=u*Math.cos(g),f.y=u*Math.sin(g),l.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,h.push(p.x,p.y)}u+=d}for(let x=0;x<i;x++){let m=x*(n+1);for(let g=0;g<n;g++){let v=g+m,M=v,y=v+n+1,T=v+n+2,S=v+1;a.push(M,y,S),a.push(y,T,S)}}this.setIndex(a),this.setAttribute("position",new Ce(l,3)),this.setAttribute("normal",new Ce(c,3)),this.setAttribute("uv",new Ce(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var xn=class s extends $e{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new U,d=new U,f=[],p=[],x=[],m=[];for(let g=0;g<=n;g++){let v=[],M=g/n,y=o+M*a,T=e*Math.cos(y),S=Math.sqrt(e*e-T*T),_=0;g===0&&o===0?_=.5/t:g===n&&l===Math.PI&&(_=-.5/t);for(let b=0;b<=t;b++){let C=b/t,w=i+C*r;u.x=-S*Math.cos(w),u.y=T,u.z=S*Math.sin(w),p.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),m.push(C+_,1-M),v.push(c++)}h.push(v)}for(let g=0;g<n;g++)for(let v=0;v<t;v++){let M=h[g][v+1],y=h[g][v],T=h[g+1][v],S=h[g+1][v+1];(g!==0||o>0)&&f.push(M,y,S),(g!==n-1||l<Math.PI)&&f.push(y,T,S)}this.setIndex(f),this.setAttribute("position",new Ce(p,3)),this.setAttribute("normal",new Ce(x,3)),this.setAttribute("uv",new Ce(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Ni=class s extends $e{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),i=Math.floor(i);let l=[],c=[],h=[],u=[],d=new U,f=new U,p=new U;for(let x=0;x<=n;x++){let m=o+x/n*a;for(let g=0;g<=i;g++){let v=g/i*r;f.x=(e+t*Math.cos(m))*Math.cos(v),f.y=(e+t*Math.cos(m))*Math.sin(v),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),d.x=e*Math.cos(v),d.y=e*Math.sin(v),p.subVectors(f,d).normalize(),h.push(p.x,p.y,p.z),u.push(g/i),u.push(x/n)}}for(let x=1;x<=n;x++)for(let m=1;m<=i;m++){let g=(i+1)*x+m-1,v=(i+1)*(x-1)+m-1,M=(i+1)*(x-1)+m,y=(i+1)*x+m;l.push(g,v,y),l.push(v,M,y)}this.setIndex(l),this.setAttribute("position",new Ce(c,3)),this.setAttribute("normal",new Ce(h,3)),this.setAttribute("uv",new Ce(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function gs(s){let e={};for(let t in s){e[t]={};for(let n in s[t]){let i=s[t][n];if(Cd(i))i.isRenderTargetTexture?(Ne("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if(Cd(i[0])){let r=[];for(let o=0,a=i.length;o<a;o++)r[o]=i[o].clone();e[t][n]=r}else e[t][n]=i.slice();else e[t][n]=i}}return e}function on(s){let e={};for(let t=0;t<s.length;t++){let n=gs(s[t]);for(let i in n)e[i]=n[i]}return e}function Cd(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function xg(s){let e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Eh(s){let e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:nt.workingColorSpace}var Ef={clone:gs,merge:on},_g=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,yg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Yn=class extends un{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_g,this.fragmentShader=yg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=gs(e.uniforms),this.uniformsGroups=xg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let i=e.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=t[i.value]||null;break;case"c":this.uniforms[n].value=new Re().setHex(i.value);break;case"v2":this.uniforms[n].value=new re().fromArray(i.value);break;case"v3":this.uniforms[n].value=new U().fromArray(i.value);break;case"v4":this.uniforms[n].value=new vt().fromArray(i.value);break;case"m3":this.uniforms[n].value=new Ye().fromArray(i.value);break;case"m4":this.uniforms[n].value=new qe().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Ca=class extends Yn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Ge=class extends un{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Re(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vo,this.normalScale=new re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Qt=class extends Ge{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new re(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return it(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Re(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Re(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Re(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return Zi('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){Zi('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var ss=class extends un{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vo,this.normalScale=new re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qn,this.combine=za,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Ia=class extends un{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=hf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Pa=class extends un{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Pi(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function wr(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}function vg(s){function e(i,r){return s[i]-s[r]}let t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Id(s,e,t){let n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let l=0;l!==e;++l)i[o++]=s[a+l]}return i}function Mg(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push(...o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}var Kn=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},La=class extends Kn{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Oc,endingEnd:Oc}}intervalChanged_(e,t,n){let i=this.parameterPositions,r=e-2,o=e+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Bc:r=e,a=2*t-n;break;case kc:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Bc:o=e,l=2*n-t;break;case kc:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(i-t),x=p*p,m=x*p,g=-d*m+2*d*x-d*p,v=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*p+1,M=(-1-f)*m+(1.5+f)*x+.5*p,y=f*m-f*x;for(let T=0;T!==a;++T)r[T]=g*o[h+T]+v*o[c+T]+M*o[l+T]+y*o[u+T];return r}},Da=class extends Kn{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}},Na=class extends Kn{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},Ua=class extends Kn{interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this.inTangents,u=this.outTangents;if(!h||!u){let p=(n-t)/(i-t),x=1-p;for(let m=0;m!==a;++m)r[m]=o[c+m]*x+o[l+m]*p;return r}let d=a*2,f=e-1;for(let p=0;p!==a;++p){let x=o[c+p],m=o[l+p],g=f*d+p*2,v=u[g],M=u[g+1],y=e*d+p*2,T=h[y],S=h[y+1],_=bg(n,t,v,T,i);r[p]=Rf(_,x,M,S,m)}return r}};function Rf(s,e,t,n,i){let r=1-s;return r*r*r*e+3*r*r*s*t+3*r*s*s*n+s*s*s*i}function Sg(s,e,t,n,i){let r=1-s;return 3*r*r*(t-e)+6*r*s*(n-t)+3*s*s*(i-n)}function bg(s,e,t,n,i){let r=(s-e)/(i-e);for(let o=0;o<8;o++){let a=Rf(r,e,t,n,i)-s;if(Math.abs(a)<1e-10)break;let l=Sg(r,e,t,n,i);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var _n=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Pi(t,this.TimeBufferType),this.values=Pi(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Pi(e.times,Array),values:Pi(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i),wr(e.settings)&&(n.settings={inTangents:Pi(e.settings.inTangents,Array),outTangents:Pi(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Na(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Da(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new La(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Ua(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Ji:t=this.InterpolantFactoryMethodDiscrete;break;case $i:t=this.InterpolantFactoryMethodLinear;break;case la:t=this.InterpolantFactoryMethodSmooth;break;case Fc:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ne("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ji;case this.InterpolantFactoryMethodLinear:return $i;case this.InterpolantFactoryMethodSmooth:return la;case this.InterpolantFactoryMethodBezier:return Fc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e;wr(this.settings)&&(Pd(this.settings.inTangents,e),Pd(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e;wr(this.settings)&&(Ld(this.settings.inTangents,e),Ld(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(He("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,r=n.length;r===0&&(He("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){He("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){He("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&lm(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){He("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===la,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(i)l=!0;else{let u=a*n,d=u-n,f=u+n;for(let p=0;p!==n;++p){let x=t[u+p];if(x!==t[d+p]||x!==t[f+p]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let u=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,wr(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};function Pd(s,e){for(let t=0,n=s.length;t!==n;t+=2)s[t]+=e}function Ld(s,e){for(let t=0,n=s.length;t!==n;t+=2)s[t]*=e}_n.prototype.ValueTypeName="";_n.prototype.TimeBufferType=Float32Array;_n.prototype.ValueBufferType=Float32Array;_n.prototype.DefaultInterpolation=$i;var mi=class extends _n{constructor(e,t,n){super(e,t,n)}};mi.prototype.ValueTypeName="bool";mi.prototype.ValueBufferType=Array;mi.prototype.DefaultInterpolation=Ji;mi.prototype.InterpolantFactoryMethodLinear=void 0;mi.prototype.InterpolantFactoryMethodSmooth=void 0;var oo=class extends _n{constructor(e,t,n,i){super(e,t,n,i)}};oo.prototype.ValueTypeName="color";var gi=class extends _n{constructor(e,t,n,i){super(e,t,n,i)}};gi.prototype.ValueTypeName="number";var Fa=class extends Kn{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t),c=e*a;for(let h=c+a;c!==h;c+=4)Gt.slerpFlat(r,0,o,c-a,o,c,l);return r}},xi=class extends _n{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new Fa(this.times,this.values,this.getValueSize(),e)}};xi.prototype.ValueTypeName="quaternion";xi.prototype.InterpolantFactoryMethodSmooth=void 0;var _i=class extends _n{constructor(e,t,n){super(e,t,n)}};_i.prototype.ValueTypeName="string";_i.prototype.ValueBufferType=Array;_i.prototype.DefaultInterpolation=Ji;_i.prototype.InterpolantFactoryMethodLinear=void 0;_i.prototype.InterpolantFactoryMethodSmooth=void 0;var Ui=class extends _n{constructor(e,t,n,i){super(e,t,n,i)}};Ui.prototype.ValueTypeName="vector";var ao=class{constructor(e="",t=-1,n=[],i=cf){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Gn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(wg(n[o]).scale(i));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,o=n.length;r!==o;++r)t.push(_n.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);let h=vg(l);l=Id(l,1,h),c=Id(c,1,h),!i&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new gi(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){let c=e[a],h=c.name.match(r);if(h&&h.length>1){let u=h[1],d=i[u];d||(i[u]=d=[]),d.push(c)}}let o=[];for(let a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function Tg(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return gi;case"vector":case"vector2":case"vector3":case"vector4":return Ui;case"color":return oo;case"quaternion":return xi;case"bool":case"boolean":return mi;case"string":return _i}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function wg(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=Tg(s.type);if(s.times===void 0){let n=[],i=[];Mg(s.keys,n,i,"value"),s.times=n,s.values=i}let t;return e.parse!==void 0?t=e.parse(s):t=new e(s.name,s.times,s.values,s.interpolation),wr(s.settings)&&(t.settings={inTangents:Pi(s.settings.inTangents,Float32Array),outTangents:Pi(s.settings.outTangents,Float32Array)}),t}var Wn={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(Dd(s)||(this.files[s]=e))},get:function(s){if(this.enabled!==!1&&!Dd(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function Dd(s){try{let e=s.slice(s.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var Oa=class{constructor(e,t,n){let i=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],p=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Cf=new Oa,Zn=class{constructor(e){this.manager=e!==void 0?e:Cf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};Zn.DEFAULT_MATERIAL_NAME="__DEFAULT";var hi={},Xc=class extends Error{constructor(e,t){super(e),this.response=t}},js=class extends Zn{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Wn.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(hi[e]!==void 0){hi[e].push({onLoad:t,onProgress:n,onError:i});return}hi[e]=[],hi[e].push({onLoad:t,onProgress:n,onError:i});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Ne("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=hi[e],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,p=f!==0,x=0,m=new ReadableStream({start(g){v();function v(){u.read().then(({done:M,value:y})=>{if(M)g.close();else{x+=y.byteLength;let T=new ProgressEvent("progress",{lengthComputable:p,loaded:x,total:f});for(let S=0,_=h.length;S<_;S++){let b=h[S];b.onProgress&&b.onProgress(T)}g.enqueue(y),v()}},M=>{g.error(M)})}}});return new Response(m)}else throw new Xc(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a==="")return c.text();{let u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(p=>f.decode(p))}}}).then(c=>{Wn.add(`file:${e}`,c);let h=hi[e];delete hi[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{let h=hi[e];if(h===void 0)throw this.manager.itemError(e),c;delete hi[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Ls=new WeakMap,Ba=class extends Zn{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Wn.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let u=Ls.get(o);u===void 0&&(u=[],Ls.set(o,u)),u.push({onLoad:t,onError:i})}return o}let a=ks("img");function l(){h(),t&&t(this);let u=Ls.get(this)||[];for(let d=0;d<u.length;d++){let f=u[d];f.onLoad&&f.onLoad(this)}Ls.delete(this),r.manager.itemEnd(e)}function c(u){h(),i&&i(u),Wn.remove(`image:${e}`);let d=Ls.get(this)||[];for(let f=0;f<d.length;f++){let p=d[f];p.onError&&p.onError(u)}Ls.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Wn.add(`image:${e}`,a),r.manager.itemStart(e),a.fetchPriority=this.priority,a.src=e,a}};var At=class extends Zn{constructor(e){super(e)}load(e,t,n,i){let r=new Wt,o=new Ba(this.manager);return o.setPriority(this.priority),o.setCache(this.cache),o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}},rs=class extends Et{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Re(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},lo=class extends rs{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Et.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Re(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Dc=new qe,Nd=new U,Ud=new U,Qs=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new re(512,512),this.mapType=yn,this.map=null,this.mapPass=null,this.matrix=new qe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Di,this._frameExtents=new re(1,1),this._viewportCount=1,this._viewports=[new vt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Nd.setFromMatrixPosition(e.matrixWorld),t.position.copy(Nd),Ud.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ud),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,i){Dc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Dc,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,o=i?i.z/r.x:1,a=i?i.w/r.y:1,l=i?i.x/r.x:0,c=i?i.y/r.y:0;e.coordinateSystem===Bs||e.reversedDepth?t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),t.multiply(Dc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},oa=new U,aa=new Gt,Hn=new U,co=class extends Et{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qe,this.projectionMatrix=new qe,this.projectionMatrixInverse=new qe,this.coordinateSystem=Rn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(oa,aa,Hn),Hn.x===1&&Hn.y===1&&Hn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(oa,aa,Hn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(oa,aa,Hn),Hn.x===1&&Hn.y===1&&Hn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(oa,aa,Hn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ii=new U,Fd=new re,Od=new re,Vt=class extends co{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ji*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ar*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ji*2*Math.atan(Math.tan(Ar*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ii.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ii.x,Ii.y).multiplyScalar(-e/Ii.z),Ii.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ii.x,Ii.y).multiplyScalar(-e/Ii.z)}getViewSize(e,t){return this.getViewBounds(e,Fd,Od),t.subVectors(Od,Fd)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ar*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},qc=class extends Qs{constructor(){super(new Vt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=ji*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},os=class extends rs{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Et.DEFAULT_UP),this.updateMatrix(),this.target=new Et,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new qc}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},Yc=class extends Qs{constructor(){super(new Vt(90,1,.5,500)),this.isPointLightShadow=!0}},as=class extends rs{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Yc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},ls=class extends co{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Kc=class extends Qs{constructor(){super(new ls(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},cs=class extends rs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Et.DEFAULT_UP),this.updateMatrix(),this.target=new Et,this.shadow=new Kc}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var yi=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Nc=new WeakMap,ho=class extends Zn{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Ne("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Ne("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Wn.get(`image-bitmap:${e}`);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{Nc.has(o)===!0?(i&&i(Nc.get(o)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(c),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);return}let a={};a.credentials=this.withCredentials||this.crossOrigin!=="anonymous"?"include":"same-origin",a.headers=this.requestHeader,a.priority=this.priority,a.cache=this.cache,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Wn.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){i&&i(c),Nc.set(l,c),Wn.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Wn.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Ds=-90,Ns=1,er=class extends Et{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Vt(Ds,Ns,e,t);i.layers=this.layers,this.add(i);let r=new Vt(Ds,Ns,e,t);r.layers=this.layers,this.add(r);let o=new Vt(Ds,Ns,e,t);o.layers=this.layers,this.add(o);let a=new Vt(Ds,Ns,e,t);a.layers=this.layers,this.add(a);let l=new Vt(Ds,Ns,e,t);l.layers=this.layers,this.add(l);let c=new Vt(Ds,Ns,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===Rn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Bs)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=x,e.setRenderTarget(n,5,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},ka=class extends Vt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var Rh="\\[\\]\\.:\\/",Ag=new RegExp("["+Rh+"]","g"),Ch="[^"+Rh+"]",Eg="[^"+Rh.replace("\\.","")+"]",Rg=/((?:WC+[\/:])*)/.source.replace("WC",Ch),Cg=/(WCOD+)?/.source.replace("WCOD",Eg),Ig=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ch),Pg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ch),Lg=new RegExp("^"+Rg+Cg+Ig+Pg+"$"),Dg=["material","materials","bones","map"],Zc=class{constructor(e,t,n){let i=n||Tt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Tt=class s{constructor(e,t,n){this.path=t,this.parsedPath=n||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,n):new s(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Ag,"")}static parseTrackName(e){let t=Lg.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);Dg.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ne("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){He("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){He("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){He("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){He("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){He("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){He("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){He("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[i];if(o===void 0){let c=t.nodeName;He("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){He("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){He("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Tt.Composite=Zc;Tt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Tt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Tt.prototype.GetterByBindingType=[Tt.prototype._getValue_direct,Tt.prototype._getValue_array,Tt.prototype._getValue_arrayElement,Tt.prototype._getValue_toArray];Tt.prototype.SetterByBindingTypeAndVersioning=[[Tt.prototype._setValue_direct,Tt.prototype._setValue_direct_setNeedsUpdate,Tt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_array,Tt.prototype._setValue_array_setNeedsUpdate,Tt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_arrayElement,Tt.prototype._setValue_arrayElement_setNeedsUpdate,Tt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_fromArray,Tt.prototype._setValue_fromArray_setNeedsUpdate,Tt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var wM=new Float32Array(1);var Jc=class{static{this.prototype.isMatrix2=!0}constructor(e,t,n,i){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=i,this}};function Ih(s,e,t,n){let i=Ng(n);switch(t){case ph:return s*e;case qa:return s*e/i.components*i.byteLength;case Ya:return s*e/i.components*i.byteLength;case Fi:return s*e*2/i.components*i.byteLength;case Ka:return s*e*2/i.components*i.byteLength;case mh:return s*e*3/i.components*i.byteLength;case In:return s*e*4/i.components*i.byteLength;case Za:return s*e*4/i.components*i.byteLength;case fo:case po:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case mo:case go:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case $a:case Qa:return Math.max(s,16)*Math.max(e,8)/4;case Ja:case ja:return Math.max(s,8)*Math.max(e,8)/2;case el:case tl:case il:case sl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case nl:case xo:case rl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case ol:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case al:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case ll:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case cl:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case hl:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case ul:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case dl:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case fl:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case pl:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case ml:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case gl:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case xl:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case _l:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case yl:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case vl:case Ml:case Sl:return Math.ceil(s/4)*Math.ceil(e/4)*16;case bl:case Tl:return Math.ceil(s/4)*Math.ceil(e/4)*8;case _o:case wl:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Ng(s){switch(s){case yn:case hh:return{byteLength:1,components:1};case or:case uh:case zn:return{byteLength:2,components:1};case Wa:case Xa:return{byteLength:2,components:4};case kn:case Ha:case Tn:return{byteLength:4,components:1};case dh:case fh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Ne("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function $f(){let s=null,e=!1,t=null,n=null;function i(r,o){n=s.requestAnimationFrame(i),t(r,o)}return{start:function(){e!==!0&&t!==null&&s!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Fg(s){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,u=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=s.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(s.bindBuffer(c,a),u.length===0)s.bufferSubData(c,0,h);else{u.sort((f,p)=>f.start-p.start);let d=0;for(let f=1;f<u.length;f++){let p=u[d],x=u[f];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++d,u[d]=x)}u.length=d+1;for(let f=0,p=u.length;f<p;f++){let x=u[f];s.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(s.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}var Og=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Bg=`#ifdef USE_ALPHAHASH
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
#endif`,kg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,zg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Gg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Vg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Hg=`#ifdef USE_AOMAP
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
#endif`,Wg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Xg=`#ifdef USE_BATCHING
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
#endif`,qg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Yg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Kg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Zg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Jg=`#ifdef USE_IRIDESCENCE
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
#endif`,$g=`#ifdef USE_BUMPMAP
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
#endif`,jg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Qg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,e0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,t0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,n0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,i0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,s0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,r0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,o0=`#define PI 3.141592653589793
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
} // validated`,a0=`vec3 transformedNormal = objectNormal;
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
#endif`,l0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,c0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,h0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,u0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,d0="gl_FragColor = linearToOutputTexel( gl_FragColor );",f0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,p0=`#ifdef USE_ENVMAP
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
#endif`,m0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,g0=`#ifdef USE_ENVMAP
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
#endif`,x0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_0=`#ifdef USE_ENVMAP
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
#endif`,y0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,v0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,M0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,S0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,b0=`#ifdef USE_GRADIENTMAP
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
}`,T0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,w0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,A0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,E0=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,R0=`#ifdef USE_ENVMAP
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
#endif`,C0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,I0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,P0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,L0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,D0=`PhysicalMaterial material;
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
#endif`,N0=`uniform sampler2D dfgLUT;
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
}`,U0=`
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
#endif`,F0=`#if defined( RE_IndirectDiffuse )
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
#endif`,O0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,B0=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,k0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,z0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,G0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,V0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,H0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,W0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,X0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,q0=`#if defined( USE_POINTS_UV )
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
#endif`,Y0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,K0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Z0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,J0=`#if defined( USE_MORPHCOLORS )
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
#endif`,$0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,j0=`#ifdef USE_MORPHTARGETS
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
#endif`,Q0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ex=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,tx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,nx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ix=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,rx=`#ifdef USE_NORMALMAP
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
#endif`,ox=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ax=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,lx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,cx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,hx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ux=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,dx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,fx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,px=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,mx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,gx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,xx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,_x=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,yx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,vx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Mx=`float getShadowMask() {
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
}`,Sx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,bx=`#ifdef USE_SKINNING
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
#endif`,Tx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,wx=`#ifdef USE_SKINNING
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
#endif`,Ax=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ex=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Rx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Cx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ix=`#ifdef USE_TRANSMISSION
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
#endif`,Px=`#ifdef USE_TRANSMISSION
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
#endif`,Lx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Dx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Nx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ux=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Fx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ox=`uniform sampler2D t2D;
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
}`,Bx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kx=`uniform float backgroundBlurriness;
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
}`,zx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vx=`#include <common>
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
}`,Hx=`#if DEPTH_PACKING == 3200
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
}`,Wx=`#define DISTANCE
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
}`,Xx=`#define DISTANCE
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
}`,qx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Yx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kx=`uniform float scale;
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
}`,Zx=`uniform vec3 diffuse;
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
}`,Jx=`#include <common>
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
}`,$x=`uniform vec3 diffuse;
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
}`,jx=`#define LAMBERT
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
}`,Qx=`#define LAMBERT
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
}`,e_=`#define MATCAP
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
}`,t_=`#define MATCAP
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
}`,n_=`#define NORMAL
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
}`,i_=`#define NORMAL
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
}`,s_=`#define PHONG
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
}`,r_=`#define PHONG
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
}`,o_=`#define STANDARD
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
}`,a_=`#define STANDARD
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
}`,l_=`#define TOON
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
}`,c_=`#define TOON
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
}`,h_=`uniform float size;
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
}`,u_=`uniform vec3 diffuse;
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
}`,d_=`#include <common>
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
}`,f_=`uniform vec3 color;
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
}`,p_=`uniform float rotation;
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
}`,m_=`uniform vec3 diffuse;
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
}`,je={alphahash_fragment:Og,alphahash_pars_fragment:Bg,alphamap_fragment:kg,alphamap_pars_fragment:zg,alphatest_fragment:Gg,alphatest_pars_fragment:Vg,aomap_fragment:Hg,aomap_pars_fragment:Wg,batching_pars_vertex:Xg,batching_vertex:qg,begin_vertex:Yg,beginnormal_vertex:Kg,bsdfs:Zg,iridescence_fragment:Jg,bumpmap_pars_fragment:$g,clipping_planes_fragment:jg,clipping_planes_pars_fragment:Qg,clipping_planes_pars_vertex:e0,clipping_planes_vertex:t0,color_fragment:n0,color_pars_fragment:i0,color_pars_vertex:s0,color_vertex:r0,common:o0,defaultnormal_vertex:a0,displacementmap_pars_vertex:l0,displacementmap_vertex:c0,emissivemap_fragment:h0,emissivemap_pars_fragment:u0,colorspace_fragment:d0,colorspace_pars_fragment:f0,envmap_fragment:p0,envmap_common_pars_fragment:m0,envmap_pars_fragment:g0,envmap_pars_vertex:x0,envmap_physical_pars_fragment:R0,envmap_vertex:_0,fog_vertex:y0,fog_pars_vertex:v0,fog_fragment:M0,fog_pars_fragment:S0,gradientmap_pars_fragment:b0,lightmap_pars_fragment:T0,lights_lambert_fragment:w0,lights_lambert_pars_fragment:A0,lights_pars_begin:E0,lights_toon_fragment:C0,lights_toon_pars_fragment:I0,lights_phong_fragment:P0,lights_phong_pars_fragment:L0,lights_physical_fragment:D0,lights_physical_pars_fragment:N0,lights_fragment_begin:U0,lights_fragment_maps:F0,lights_fragment_end:O0,lightprobes_pars_fragment:B0,logdepthbuf_fragment:k0,logdepthbuf_pars_fragment:z0,logdepthbuf_pars_vertex:G0,logdepthbuf_vertex:V0,map_fragment:H0,map_pars_fragment:W0,map_particle_fragment:X0,map_particle_pars_fragment:q0,metalnessmap_fragment:Y0,metalnessmap_pars_fragment:K0,morphinstance_vertex:Z0,morphcolor_vertex:J0,morphnormal_vertex:$0,morphtarget_pars_vertex:j0,morphtarget_vertex:Q0,normal_fragment_begin:ex,normal_fragment_maps:tx,normal_pars_fragment:nx,normal_pars_vertex:ix,normal_vertex:sx,normalmap_pars_fragment:rx,clearcoat_normal_fragment_begin:ox,clearcoat_normal_fragment_maps:ax,clearcoat_pars_fragment:lx,iridescence_pars_fragment:cx,opaque_fragment:hx,packing:ux,premultiplied_alpha_fragment:dx,project_vertex:fx,dithering_fragment:px,dithering_pars_fragment:mx,roughnessmap_fragment:gx,roughnessmap_pars_fragment:xx,shadowmap_pars_fragment:_x,shadowmap_pars_vertex:yx,shadowmap_vertex:vx,shadowmask_pars_fragment:Mx,skinbase_vertex:Sx,skinning_pars_vertex:bx,skinning_vertex:Tx,skinnormal_vertex:wx,specularmap_fragment:Ax,specularmap_pars_fragment:Ex,tonemapping_fragment:Rx,tonemapping_pars_fragment:Cx,transmission_fragment:Ix,transmission_pars_fragment:Px,uv_pars_fragment:Lx,uv_pars_vertex:Dx,uv_vertex:Nx,worldpos_vertex:Ux,background_vert:Fx,background_frag:Ox,backgroundCube_vert:Bx,backgroundCube_frag:kx,cube_vert:zx,cube_frag:Gx,depth_vert:Vx,depth_frag:Hx,distance_vert:Wx,distance_frag:Xx,equirect_vert:qx,equirect_frag:Yx,linedashed_vert:Kx,linedashed_frag:Zx,meshbasic_vert:Jx,meshbasic_frag:$x,meshlambert_vert:jx,meshlambert_frag:Qx,meshmatcap_vert:e_,meshmatcap_frag:t_,meshnormal_vert:n_,meshnormal_frag:i_,meshphong_vert:s_,meshphong_frag:r_,meshphysical_vert:o_,meshphysical_frag:a_,meshtoon_vert:l_,meshtoon_frag:c_,points_vert:h_,points_frag:u_,shadow_vert:d_,shadow_frag:f_,sprite_vert:p_,sprite_frag:m_},be={common:{diffuse:{value:new Re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},envMapRotation:{value:new Ye},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new Re(16777215)},opacity:{value:1},center:{value:new re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},Qn={basic:{uniforms:on([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:je.meshbasic_vert,fragmentShader:je.meshbasic_frag},lambert:{uniforms:on([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new Re(0)},envMapIntensity:{value:1}}]),vertexShader:je.meshlambert_vert,fragmentShader:je.meshlambert_frag},phong:{uniforms:on([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new Re(0)},specular:{value:new Re(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:je.meshphong_vert,fragmentShader:je.meshphong_frag},standard:{uniforms:on([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new Re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag},toon:{uniforms:on([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new Re(0)}}]),vertexShader:je.meshtoon_vert,fragmentShader:je.meshtoon_frag},matcap:{uniforms:on([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:je.meshmatcap_vert,fragmentShader:je.meshmatcap_frag},points:{uniforms:on([be.points,be.fog]),vertexShader:je.points_vert,fragmentShader:je.points_frag},dashed:{uniforms:on([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:je.linedashed_vert,fragmentShader:je.linedashed_frag},depth:{uniforms:on([be.common,be.displacementmap]),vertexShader:je.depth_vert,fragmentShader:je.depth_frag},normal:{uniforms:on([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:je.meshnormal_vert,fragmentShader:je.meshnormal_frag},sprite:{uniforms:on([be.sprite,be.fog]),vertexShader:je.sprite_vert,fragmentShader:je.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:je.background_vert,fragmentShader:je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ye}},vertexShader:je.backgroundCube_vert,fragmentShader:je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:je.cube_vert,fragmentShader:je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:je.equirect_vert,fragmentShader:je.equirect_frag},distance:{uniforms:on([be.common,be.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:je.distance_vert,fragmentShader:je.distance_frag},shadow:{uniforms:on([be.lights,be.fog,{color:{value:new Re(0)},opacity:{value:1}}]),vertexShader:je.shadow_vert,fragmentShader:je.shadow_frag}};Qn.physical={uniforms:on([Qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Ye},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new Re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new Re(0)},specularColor:{value:new Re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag};var El={r:0,b:0,g:0},g_=new qe,jf=new Ye;jf.set(-1,0,0,0,1,0,0,0,1);function x_(s,e,t,n,i,r){let o=new Re(0),a=i===!0?0:1,l,c,h=null,u=0,d=null;function f(v){let M=v.isScene===!0?v.background:null;if(M&&M.isTexture){let y=v.backgroundBlurriness>0;M=e.get(M,y)}return M}function p(v){let M=!1,y=f(v);y===null?m(o,a):y&&y.isColor&&(m(y,1),M=!0);let T=s.xr.getEnvironmentBlendMode();T==="additive"?t.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(s.autoClear||M)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function x(v,M){let y=f(M);y&&y.isCubeTexture?(c===void 0&&(c=new Le(new Ut(1,1,1),new Yn({name:"BackgroundCubeMaterial",uniforms:gs(Qn.backgroundCube.uniforms),vertexShader:Qn.backgroundCube.vertexShader,fragmentShader:Qn.backgroundCube.fragmentShader,side:fn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,S,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(g_.makeRotationFromEuler(M.backgroundRotation)).transpose(),y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(jf),c.material.toneMapped=nt.getTransfer(y.colorSpace)!==_t,(h!==y||u!==y.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,h=y,u=y.version,d=s.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Le(new dn(2,2),new Yn({name:"BackgroundMaterial",uniforms:gs(Qn.background.uniforms),vertexShader:Qn.background.vertexShader,fragmentShader:Qn.background.fragmentShader,side:Jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=nt.getTransfer(y.colorSpace)!==_t,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||u!==y.version||d!==s.toneMapping)&&(l.material.needsUpdate=!0,h=y,u=y.version,d=s.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function m(v,M){v.getRGB(El,Eh(s)),t.buffers.color.setClear(El.r,El.g,El.b,M,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(v,M=1){o.set(v),a=M,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(v){a=v,m(o,a)},render:p,addToRenderList:x,dispose:g}}function __(s,e){let t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null),r=i,o=!1;function a(R,L,B,I,O){let G=!1,D=u(R,I,B,L);r!==D&&(r=D,c(r.object)),G=f(R,I,B,O),G&&p(R,I,B,O),O!==null&&e.update(O,s.ELEMENT_ARRAY_BUFFER),(G||o)&&(o=!1,y(R,L,B,I),O!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function l(){return s.createVertexArray()}function c(R){return s.bindVertexArray(R)}function h(R){return s.deleteVertexArray(R)}function u(R,L,B,I){let O=I.wireframe===!0,G=n[L.id];G===void 0&&(G={},n[L.id]=G);let D=R.isInstancedMesh===!0?R.id:0,W=G[D];W===void 0&&(W={},G[D]=W);let N=W[B.id];N===void 0&&(N={},W[B.id]=N);let V=N[O];return V===void 0&&(V=d(l()),N[O]=V),V}function d(R){let L=[],B=[],I=[];for(let O=0;O<t;O++)L[O]=0,B[O]=0,I[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:B,attributeDivisors:I,object:R,attributes:{},index:null}}function f(R,L,B,I){let O=r.attributes,G=L.attributes,D=0,W=B.getAttributes();for(let N in W)if(W[N].location>=0){let H=O[N],J=G[N];if(J===void 0&&(N==="instanceMatrix"&&R.instanceMatrix&&(J=R.instanceMatrix),N==="instanceColor"&&R.instanceColor&&(J=R.instanceColor)),H===void 0||H.attribute!==J||J&&H.data!==J.data)return!0;D++}return r.attributesNum!==D||r.index!==I}function p(R,L,B,I){let O={},G=L.attributes,D=0,W=B.getAttributes();for(let N in W)if(W[N].location>=0){let H=G[N];H===void 0&&(N==="instanceMatrix"&&R.instanceMatrix&&(H=R.instanceMatrix),N==="instanceColor"&&R.instanceColor&&(H=R.instanceColor));let J={};J.attribute=H,H&&H.data&&(J.data=H.data),O[N]=J,D++}r.attributes=O,r.attributesNum=D,r.index=I}function x(){let R=r.newAttributes;for(let L=0,B=R.length;L<B;L++)R[L]=0}function m(R){g(R,0)}function g(R,L){let B=r.newAttributes,I=r.enabledAttributes,O=r.attributeDivisors;B[R]=1,I[R]===0&&(s.enableVertexAttribArray(R),I[R]=1),O[R]!==L&&(s.vertexAttribDivisor(R,L),O[R]=L)}function v(){let R=r.newAttributes,L=r.enabledAttributes;for(let B=0,I=L.length;B<I;B++)L[B]!==R[B]&&(s.disableVertexAttribArray(B),L[B]=0)}function M(R,L,B,I,O,G,D){D===!0?s.vertexAttribIPointer(R,L,B,O,G):s.vertexAttribPointer(R,L,B,I,O,G)}function y(R,L,B,I){x();let O=I.attributes,G=B.getAttributes(),D=L.defaultAttributeValues;for(let W in G){let N=G[W];if(N.location>=0){let V=O[W];if(V===void 0&&(W==="instanceMatrix"&&R.instanceMatrix&&(V=R.instanceMatrix),W==="instanceColor"&&R.instanceColor&&(V=R.instanceColor)),V!==void 0){let H=V.normalized,J=V.itemSize,se=e.get(V);if(se===void 0)continue;let X=se.buffer,te=se.type,Me=se.bytesPerElement,Ue=te===s.INT||te===s.UNSIGNED_INT||V.gpuType===Ha;if(V.isInterleavedBufferAttribute){let me=V.data,Fe=me.isInterleavedBuffer===!0?me.stride:me.itemSize,Mt=V.offset;if(me.isInstancedInterleavedBuffer||me.isInstancedBufferAttribute){for(let Ve=0;Ve<N.locationSize;Ve++)g(N.location+Ve,me.meshPerAttribute);R.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let Ve=0;Ve<N.locationSize;Ve++)m(N.location+Ve);s.bindBuffer(s.ARRAY_BUFFER,X);for(let Ve=0;Ve<N.locationSize;Ve++)M(N.location+Ve,J/N.locationSize,te,H,Fe*Me,(Mt+J/N.locationSize*Ve)*Me,Ue)}else{if(V.isInstancedBufferAttribute){for(let me=0;me<N.locationSize;me++)g(N.location+me,V.meshPerAttribute);R.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let me=0;me<N.locationSize;me++)m(N.location+me);s.bindBuffer(s.ARRAY_BUFFER,X);for(let me=0;me<N.locationSize;me++)M(N.location+me,J/N.locationSize,te,H,J*Me,J/N.locationSize*me*Me,Ue)}}else if(D!==void 0){let H=D[W];if(H!==void 0)switch(H.length){case 2:s.vertexAttrib2fv(N.location,H);break;case 3:s.vertexAttrib3fv(N.location,H);break;case 4:s.vertexAttrib4fv(N.location,H);break;default:s.vertexAttrib1fv(N.location,H)}}}}v()}function T(){C();for(let R in n){let L=n[R];for(let B in L){let I=L[B];for(let O in I){let G=I[O];for(let D in G)h(G[D].object),delete G[D];delete I[O]}}delete n[R]}}function S(R){if(n[R.id]===void 0)return;let L=n[R.id];for(let B in L){let I=L[B];for(let O in I){let G=I[O];for(let D in G)h(G[D].object),delete G[D];delete I[O]}}delete n[R.id]}function _(R){for(let L in n){let B=n[L];for(let I in B){let O=B[I];if(O[R.id]===void 0)continue;let G=O[R.id];for(let D in G)h(G[D].object),delete G[D];delete O[R.id]}}}function b(R){for(let L in n){let B=n[L],I=R.isInstancedMesh===!0?R.id:0,O=B[I];if(O!==void 0){for(let G in O){let D=O[G];for(let W in D)h(D[W].object),delete D[W];delete O[G]}delete B[I],Object.keys(B).length===0&&delete n[L]}}}function C(){w(),o=!0,r!==i&&(r=i,c(r.object))}function w(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:C,resetDefaultState:w,dispose:T,releaseStatesOfGeometry:S,releaseStatesOfObject:b,releaseStatesOfProgram:_,initAttributes:x,enableAttribute:m,disableUnusedAttributes:v}}function y_(s,e,t){let n;function i(l){n=l}function r(l,c){s.drawArrays(n,l,c),t.update(c,n,1)}function o(l,c,h){h!==0&&(s.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function a(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let d=0;for(let f=0;f<h;f++)d+=c[f];t.update(d,n,1)}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function v_(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let _=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(_){return!(_!==In&&n.convert(_)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(_){let b=_===zn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(_!==yn&&_!==Tn&&!b&&n.convert(_)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function l(_){if(_==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(Ne("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=t.logarithmicDepthBuffer===!0&&u===!1;t.reversedDepthBuffer===!0&&u===!1&&Ne("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&u===!0&&Ne("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),v=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),M=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),T=s.getParameter(s.MAX_SAMPLES),S=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:v,maxVaryings:M,maxFragmentUniforms:y,maxSamples:T,samples:S}}function M_(s){let e=this,t=null,n=0,i=!1,r=!1,o=new Bn,a=new Ye,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let p=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,g=s.get(u);if(!i||p===null||p.length===0||r&&!m)r?h(null):c();else{let v=r?0:n,M=v*4,y=g.clippingState||null;l.value=y,y=h(p,d,M,f);for(let T=0;T!==M;++T)y[T]=t[T];g.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,p){let x=u!==null?u.length:0,m=null;if(x!==0){if(m=l.value,p!==!0||m===null){let g=f+x*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<g)&&(m=new Float32Array(g));for(let M=0,y=f;M!==x;++M,y+=4)o.copy(u[M]).applyMatrix4(v,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}var bo=class extends Sn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Wr(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Ut(5,5,5),r=new Yn({name:"CubemapFromEquirect",uniforms:gs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:fn,blending:us});r.uniforms.tEquirect.value=t;let o=new Le(i,r),a=t.minFilter;return t.minFilter===Cn&&(t.minFilter=Ht),new er(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}},If=256,S_=3,b_=20,Qf=256,ep=16,T_=3,w_=new U,A_=new Re,Cl=class s{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new er(1,10,null),this._boxMesh=new Le(new Ut(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,i=100,r={}){let{size:o=256,position:a=w_}=r,l=this._renderer;this._setSize(o);let c=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let u=l.autoClear,d=l.autoClearColor,f=l.autoClearDepth,p=l.autoClearStencil,x=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,x===null&&(e.background=l.getClearColor(A_));let m=new er(n,i,h);return m.position.copy(a),m.update(l,e),l.autoClear=u,l.autoClearColor=d,l.autoClearDepth=f,l.autoClearStencil=p,e.background=x,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Df(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Lf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(If,bh(e))}_fromTexture(e,t){e.mapping===fs||e.mapping===ir?this._setSize(e.image.length===0?If:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=Pf(e,!1,!1),n=Math.log2(e)-S_;for(let i=0;i<=n;i++)t.texture.mipmaps.push({width:e>>i,height:e>>i});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Pf(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let i=this._boxMesh,r=this._cubeCamera;i.material=n,r.renderTarget=e,r.activeMipmapLevel=t;let o=e.width>>t;e.viewport.set(0,0,o,o),r.update(this._renderer,i),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===fs||e.mapping===ir?(this._cubemapMaterial===null&&(this._cubemapMaterial=Df()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Lf()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=E_(),this._integrationMaterial=R_());let t=this._cubeSize,n=e.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/ep);for(let o=0;o<=n;o++){let a=s.lodToRoughness(o,n);if(o>n-T_)r.roughness.value=a,this._renderCube(e,o,this._integrationMaterial);else{let l=a>0?Math.log2(t)+.5*Math.log2(6/(Qf*Math.pow(a,4)))+.5:0;i.roughness.value=a,i.lodBias.value=l,this._renderCube(e,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=C_());let n=this._blurMaterial,i=n.uniforms,r=this._sourceTarget;i.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,i.envMap.value=r.texture,this._renderCube(e,0,n),i.envMap.value=e.texture,this._renderCube(r,0,n)}};function Pf(s,e,t){return new bo(s,{minFilter:Cn,generateMipmaps:e,type:zn,colorSpace:cn,depthBuffer:t})}function To(s,e,t){return new Yn({name:s,uniforms:e,vertexShader:je.cube_vert,fragmentShader:t,side:fn,blending:us,depthTest:!1,depthWrite:!1})}function E_(){return To("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Qf}u

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
	`)}function R_(){return To("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:ep}},`

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
	`)}function C_(){return To("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${b_}
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
	`)}function Lf(){return To("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Df(){return To("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function I_(s){let e=new WeakMap,t=new WeakMap,n=null;function i(d,f=!1){return d==null?null:f?o(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===sr||f===Ga)if(e.has(d)){let p=e.get(d).texture;return a(p,d.mapping)}else{let p=d.image;if(p&&p.height>0){let x=new bo(p.height);return x.fromEquirectangularTexture(s,d),e.set(d,x),d.addEventListener("dispose",c),a(x.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){let f=d.mapping,p=f===sr||f===Ga,x=f===fs||f===ir;if(p||x){let m=t.get(d),g=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==g)return n===null&&(n=new Cl(s)),m=p?n.fromEquirectangular(d,m):n.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),m.texture;if(m!==void 0)return m.texture;{let v=d.image;return p&&v&&v.height>0||x&&v&&l(v)?(n===null&&(n=new Cl(s)),m=p?n.fromEquirectangular(d):n.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),d.addEventListener("dispose",h),m.texture):null}}}return d}function a(d,f){return f===sr?d.mapping=fs:f===Ga&&(d.mapping=ir),d}function l(d){let f=0,p=6;for(let x=0;x<p;x++)d[x]!==void 0&&f++;return f===p}function c(d){let f=d.target;f.removeEventListener("dispose",c);let p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function h(d){let f=d.target;f.removeEventListener("dispose",h);let p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function u(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:u}}function P_(s){let e={};function t(n){if(e[n]!==void 0)return e[n];let i=s.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&Zi("WebGLRenderer: "+n+" extension not supported."),i}}}function L_(s,e,t,n){let i={},r=new WeakMap,o=new FinalizationRegistry(p=>delete i[p]);function a(p){l(p.target)}function l(p){p.index!==null&&e.remove(p.index);for(let m in p.attributes)e.remove(p.attributes[m]);p.removeEventListener("dispose",a),delete i[p.id],o.unregister(p);let x=r.get(p);x&&(e.remove(x),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function c(p,x){return i[x.id]!==void 0||(x.addEventListener("dispose",a),i[x.id]=new WeakRef(x),o.register(x,x.id,x),t.memory.geometries++),x}function h(p){let x=p.attributes;for(let m in x)e.update(x[m],s.ARRAY_BUFFER)}function u(p){let x=p.index,m=p.attributes.position,g=0;if(m===void 0)return;let v=x!==null?x.array.length:m.array.length/3-1,M=m.count>=65535?Or:Fr,y=new M(Math.ceil(v/3)*6,1),T=y.array;if(x!==null){let _=x.array;g=x.version;for(let b=0,C=0;b<v;b+=3){let w=_[b+0],R=_[b+1],L=_[b+2];T[C++]=w,T[C++]=R,T[C++]=R,T[C++]=L,T[C++]=L,T[C++]=w}}else{g=m.version;for(let _=0,b=0;_<v;_+=3){let C=_+0,w=_+1,R=_+2;T[b++]=C,T[b++]=w,T[b++]=w,T[b++]=R,T[b++]=R,T[b++]=C}}y.version=g;let S=r.get(p);S&&e.remove(S),r.set(p,y)}function d(p){let x=r.get(p);if(x){let m=p.index;m!==null&&x.version<m.version&&u(p)}else u(p);return r.get(p)}function f(){for(let p in i){let x=i[p].deref();x!==void 0&&l(x)}}return{get:c,update:h,getWireframeAttribute:d,dispose:f}}function D_(s,e,t){let n;function i(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,d){s.drawElements(n,d,r,u*o),t.update(d,n,1)}function c(u,d,f){f!==0&&(s.drawElementsInstanced(n,d,r,u*o,f),t.update(d,n,f))}function h(u,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,u,0,f);let x=0;for(let m=0;m<f;m++)x+=d[m];t.update(x,n,1)}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function N_(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:He("WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function U_(s,e,t){let n=new WeakMap,i=new vt;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==u){let C=function(){_.dispose(),n.delete(a),a.removeEventListener("dispose",C)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],M=0;f===!0&&(M=1),p===!0&&(M=2),x===!0&&(M=3);let y=a.attributes.position.count*M,T=1;y>e.maxTextureSize&&(T=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let S=new Float32Array(y*T*4*u),_=new Lr(S,y,T,u);_.type=Tn,_.needsUpdate=!0;let b=M*4;for(let w=0;w<u;w++){let R=m[w],L=g[w],B=v[w],I=y*T*4*w;for(let O=0;O<R.count;O++){let G=O*b;f===!0&&(i.fromBufferAttribute(R,O),S[I+G+0]=i.x,S[I+G+1]=i.y,S[I+G+2]=i.z,S[I+G+3]=0),p===!0&&(i.fromBufferAttribute(L,O),S[I+G+4]=i.x,S[I+G+5]=i.y,S[I+G+6]=i.z,S[I+G+7]=0),x===!0&&(i.fromBufferAttribute(B,O),S[I+G+8]=i.x,S[I+G+9]=i.y,S[I+G+10]=i.z,S[I+G+11]=B.itemSize===4?i.w:1)}}d={count:u,texture:_,size:new re(y,T)},n.set(a,d),a.addEventListener("dispose",C)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];let p=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(s,"morphTargetBaseInfluence",p),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function F_(s,e,t,n,i){let r=new WeakMap;function o(c){let h=i.render.frame,u=c.geometry,d=e.get(c,u);if(r.get(d)!==h&&(e.update(d),r.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return d}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:a}}var O_={[ih]:"LINEAR_TONE_MAPPING",[sh]:"REINHARD_TONE_MAPPING",[rh]:"CINEON_TONE_MAPPING",[uo]:"ACES_FILMIC_TONE_MAPPING",[ah]:"AGX_TONE_MAPPING",[lh]:"NEUTRAL_TONE_MAPPING",[oh]:"CUSTOM_TONE_MAPPING"};function B_(s,e,t,n,i,r){let o=new Sn(e,t,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,h=new $e;h.setAttribute("position",new Ce([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Ce([0,2,0,0,2,0],2));let u=new Ca({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new Le(h,u),f=new ls(-1,1,1,-1,0,1),p=null,x=null,m=!1,g,v=null,M=[],y=!1;this.setSize=function(T,S){o.setSize(T,S),a!==null&&a.setSize(T,S),l!==null&&l.setSize(T,S);for(let _=0;_<M.length;_++){let b=M[_];b.setSize&&b.setSize(T,S)}},this.setEffects=function(T){M=T,y=M.length>0&&M[0].isRenderPass===!0;let S=o.width,_=o.height;M.length>0&&a===null&&(a=new Sn(S,_,{type:zn,depthBuffer:!1,stencilBuffer:!1}),l=new Sn(S,_,{type:zn,depthBuffer:!1,stencilBuffer:!1}));let b=i===!0&&M.some(C=>C.needsDepthTexture===!0);b!==(o.depthTexture!==null)&&(b===!0&&c===null&&(c=new pi(S,_),r===!0&&(c.format=vi,c.type=ms)),o.dispose(),o.depthTexture=b?c:null,o.resolveDepthBuffer=b,o.storeMultisampledDepthBuffer=b);for(let C=0;C<M.length;C++){let w=M[C];w.setSize&&w.setSize(S,_),b&&w.needsDepthTexture===!0&&w.setDepthTexture&&w.setDepthTexture(c)}},this.begin=function(T,S){if(m||T.toneMapping===$n&&M.length===0)return!1;if(v=S,S!==null){let _=S.width,b=S.height;(o.width!==_||o.height!==b)&&this.setSize(_,b)}return y===!1&&T.setRenderTarget(o),g=T.toneMapping,T.toneMapping=$n,!0},this.hasRenderPass=function(){return y},this.end=function(T,S){T.toneMapping=g,m=!0;let _=o,b=a;for(let C=0;C<M.length;C++){let w=M[C];w.enabled!==!1&&(w.render(T,b,_,S),w.needsSwap!==!1&&(_=b,b=b===a?l:a))}if(p!==T.outputColorSpace||x!==T.toneMapping){p=T.outputColorSpace,x=T.toneMapping,u.defines={},nt.getTransfer(p)===_t&&(u.defines.SRGB_TRANSFER="");let C=O_[x];C&&(u.defines[C]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=_.texture,T.setRenderTarget(v),T.render(d,f),v=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),h.dispose(),u.dispose()}}var tp=new Wt,np=new pi(1,1),ip=new Xr(1),sp=new Lr,rp=new ya,op=new Wr,Nf=[],Uf=[],Ff=new Float32Array(16),Of=new Float32Array(9),Bf=new Float32Array(4);function cr(s,e,t){let n=s[0];if(n<=0||n>0)return s;let i=e*t,r=Nf[i];if(r===void 0&&(r=new Float32Array(i),Nf[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function Xt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function qt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Pl(s,e){let t=Uf[e];t===void 0&&(t=new Int32Array(e),Uf[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function k_(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function z_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;s.uniform2fv(this.addr,e),qt(t,e)}}function G_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Xt(t,e))return;s.uniform3fv(this.addr,e),qt(t,e)}}function V_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;s.uniform4fv(this.addr,e),qt(t,e)}}function H_(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Xt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),qt(t,e)}else{if(Xt(t,n))return;Bf.set(n),s.uniformMatrix2fv(this.addr,!1,Bf),qt(t,n)}}function W_(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Xt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),qt(t,e)}else{if(Xt(t,n))return;Of.set(n),s.uniformMatrix3fv(this.addr,!1,Of),qt(t,n)}}function X_(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Xt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),qt(t,e)}else{if(Xt(t,n))return;Ff.set(n),s.uniformMatrix4fv(this.addr,!1,Ff),qt(t,n)}}function q_(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Y_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;s.uniform2iv(this.addr,e),qt(t,e)}}function K_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Xt(t,e))return;s.uniform3iv(this.addr,e),qt(t,e)}}function Z_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;s.uniform4iv(this.addr,e),qt(t,e)}}function J_(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function $_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;s.uniform2uiv(this.addr,e),qt(t,e)}}function j_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Xt(t,e))return;s.uniform3uiv(this.addr,e),qt(t,e)}}function Q_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;s.uniform4uiv(this.addr,e),qt(t,e)}}function Ll(s){return s.version===0&&(s.compareFunction=yh,s.needsUpdate=!0),s}function ey(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?r=Ll(np):r=tp,t.setTexture2D(e||r,i)}function ty(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||rp,i)}function ny(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_CUBE_SHADOW?r=Ll(ip):r=op,t.setTextureCube(e||r,i)}function iy(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||sp,i)}function sy(s){switch(s){case 5126:return k_;case 35664:return z_;case 35665:return G_;case 35666:return V_;case 35674:return H_;case 35675:return W_;case 35676:return X_;case 5124:case 35670:return q_;case 35667:case 35671:return Y_;case 35668:case 35672:return K_;case 35669:case 35673:return Z_;case 5125:return J_;case 36294:return $_;case 36295:return j_;case 36296:return Q_;case 35678:case 36198:case 36298:case 36306:case 35682:return ey;case 35679:case 36299:case 36307:return ty;case 35680:case 36300:case 36308:case 36293:return ny;case 36289:case 36303:case 36311:case 36292:return iy}}function ry(s,e){s.uniform1fv(this.addr,e)}function oy(s,e){let t=cr(e,this.size,2);s.uniform2fv(this.addr,t)}function ay(s,e){let t=cr(e,this.size,3);s.uniform3fv(this.addr,t)}function ly(s,e){let t=cr(e,this.size,4);s.uniform4fv(this.addr,t)}function cy(s,e){let t=cr(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function hy(s,e){let t=cr(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function uy(s,e){let t=cr(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function dy(s,e){s.uniform1iv(this.addr,e)}function fy(s,e){s.uniform2iv(this.addr,e)}function py(s,e){s.uniform3iv(this.addr,e)}function my(s,e){s.uniform4iv(this.addr,e)}function gy(s,e){s.uniform1uiv(this.addr,e)}function xy(s,e){s.uniform2uiv(this.addr,e)}function _y(s,e){s.uniform3uiv(this.addr,e)}function yy(s,e){s.uniform4uiv(this.addr,e)}function vy(s,e,t){let n=this.cache,i=e.length,r=Pl(t,i);Xt(n,r)||(s.uniform1iv(this.addr,r),qt(n,r));let o;this.type===s.SAMPLER_2D_SHADOW?o=Ll(np):o=tp;for(let a=0;a!==i;++a)t.setTexture2D(e[a]||o,r[a])}function My(s,e,t){let n=this.cache,i=e.length,r=Pl(t,i);Xt(n,r)||(s.uniform1iv(this.addr,r),qt(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||rp,r[o])}function Sy(s,e,t){let n=this.cache,i=e.length,r=Pl(t,i);Xt(n,r)||(s.uniform1iv(this.addr,r),qt(n,r));let o;this.type===s.SAMPLER_CUBE_SHADOW?o=Ll(ip):o=op;for(let a=0;a!==i;++a)t.setTextureCube(e[a]||o,r[a])}function by(s,e,t){let n=this.cache,i=e.length,r=Pl(t,i);Xt(n,r)||(s.uniform1iv(this.addr,r),qt(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||sp,r[o])}function Ty(s){switch(s){case 5126:return ry;case 35664:return oy;case 35665:return ay;case 35666:return ly;case 35674:return cy;case 35675:return hy;case 35676:return uy;case 5124:case 35670:return dy;case 35667:case 35671:return fy;case 35668:case 35672:return py;case 35669:case 35673:return my;case 5125:return gy;case 36294:return xy;case 36295:return _y;case 36296:return yy;case 35678:case 36198:case 36298:case 36306:case 35682:return vy;case 35679:case 36299:case 36307:return My;case 35680:case 36300:case 36308:case 36293:return Sy;case 36289:case 36303:case 36311:case 36292:return by}}var Dh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=sy(t.type)}},Nh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ty(t.type)}},Uh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(e,t[a.id],n)}}},Ph=/(\w+)(\])?(\[|\.)?/g;function kf(s,e){s.seq.push(e),s.map[e.id]=e}function wy(s,e,t){let n=s.name,i=n.length;for(Ph.lastIndex=0;;){let r=Ph.exec(n),o=Ph.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){kf(t,c===void 0?new Dh(a,s,e):new Nh(a,s,e));break}else{let u=t.map[a];u===void 0&&(u=new Uh(a),kf(t,u)),t=u}}}var lr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);wy(a,l,this)}let i=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(o):r.push(o);i.length>0&&(this.seq=i.concat(r))}setValue(e,t,n,i){let r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,r=e.length;i!==r;++i){let o=e[i];o.id in t&&n.push(o)}return n}};function zf(s,e,t){let n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}var Ay=37297,Ey=0;function Ry(s,e){let t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var Gf=new Ye;function Cy(s){nt._getMatrix(Gf,nt.workingColorSpace,s);let e=`mat3( ${Gf.elements.map(t=>t.toFixed(4))} )`;switch(nt.getTransfer(s)){case Ir:return[e,"LinearTransferOETF"];case _t:return[e,"sRGBTransferOETF"];default:return Ne("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Vf(s,e,t){let n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+Ry(s.getShaderSource(e),a)}else return r}function Iy(s,e){let t=Cy(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var Py={[ih]:"Linear",[sh]:"Reinhard",[rh]:"Cineon",[uo]:"ACESFilmic",[ah]:"AgX",[lh]:"Neutral",[oh]:"Custom"};function Ly(s,e){let t=Py[e];return t===void 0?(Ne("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Rl=new U;function Dy(){nt.getLuminanceCoefficients(Rl);let s=Rl.x.toFixed(4),e=Rl.y.toFixed(4),t=Rl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ny(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(So).join(`
`)}function Uy(s){let e=[];for(let t in s){let n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Fy(s,e){let t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(e,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function So(s){return s!==""}function Hf(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Wf(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Oy=/^[ \t]*#include +<([\w\d./]+)>/gm;function Fh(s){return s.replace(Oy,By)}function By(s,e){let t=je[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Fh(t)}var ky=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Xf(s){return s.replace(ky,zy)}function zy(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function qf(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}var Gy={[hs]:"SHADOWMAP_TYPE_PCF",[tr]:"SHADOWMAP_TYPE_VSM"};function Vy(s){return Gy[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Hy={[ir]:"ENVMAP_MODE_REFRACTION"};function Wy(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":Hy[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Xy={[za]:"ENVMAP_BLENDING_MULTIPLY",[of]:"ENVMAP_BLENDING_MIX",[af]:"ENVMAP_BLENDING_ADD"};function qy(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":Xy[s.combine]||"ENVMAP_BLENDING_NONE"}function Yy(s,e,t,n){let i=s.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=Vy(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=Wy(t),u=qy(t),d=Ny(t),f=Uy(r),p=i.createProgram(),x,m,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(So).join(`
`),x.length>0&&(x+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(So).join(`
`),m.length>0&&(m+=`
`)):(x=[qf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(So).join(`
`),m=[qf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==$n?"#define TONE_MAPPING":"",t.toneMapping!==$n?je.tonemapping_pars_fragment:"",t.toneMapping!==$n?Ly("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",je.colorspace_pars_fragment,Iy("linearToOutputTexel",t.outputColorSpace),Dy(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(So).join(`
`)),o=Fh(o),o=Hf(o,t),o=Wf(o,t),a=Fh(a),a=Hf(a,t),a=Wf(a,t),o=Xf(o),a=Xf(a),t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,x=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,m=["#define varying in",t.glslVersion===Mh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Mh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let v=g+x+o,M=g+m+a,y=zf(i,i.VERTEX_SHADER,v),T=zf(i,i.FRAGMENT_SHADER,M);i.attachShader(p,y),i.attachShader(p,T),t.index0AttributeName!==void 0?i.bindAttribLocation(p,0,t.index0AttributeName):t.hasPositionAttribute===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p);function S(w){if(s.debug.checkShaderErrors){let R=i.getProgramInfoLog(p)||"",L=i.getShaderInfoLog(y)||"",B=i.getShaderInfoLog(T)||"",I=R.trim(),O=L.trim(),G=B.trim(),D=!0,W=!0;if(i.getProgramParameter(p,i.LINK_STATUS)===!1)if(D=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,p,y,T);else{let N=Vf(i,y,"vertex"),V=Vf(i,T,"fragment");He("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,i.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+I+`
`+N+`
`+V)}else I!==""?Ne("WebGLProgram: Program Info Log:",I):(O===""||G==="")&&(W=!1);W&&(w.diagnostics={runnable:D,programLog:I,vertexShader:{log:O,prefix:x},fragmentShader:{log:G,prefix:m}})}i.deleteShader(y),i.deleteShader(T),_=new lr(i,p),b=Fy(i,p)}let _;this.getUniforms=function(){return _===void 0&&S(this),_};let b;this.getAttributes=function(){return b===void 0&&S(this),b};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=i.getProgramParameter(p,Ay)),C},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Ey++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=y,this.fragmentShader=T,this}var Ky=0,Oh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let i=this._getShaderCacheForMaterial(e);return i.has(t)===!1&&(i.add(t),t.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Bh(e),t.set(e,n)),n}},Bh=class{constructor(e){this.id=Ky++,this.code=e,this.usedTimes=0}};function Zy(s){return s===Fi||s===xo||s===_o}function Jy(s,e,t,n,i,r){let o=new Dr,a=new Oh,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(_){return l.add(_),_===0?"uv":`uv${_}`}function p(_,b,C,w,R,L){let B=w.fog,I=R.geometry,O=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?w.environment:null,G=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,D=e.get(_.envMap||O,G),W=d[_.type],N=n.precision;_.precision!==null&&(N=n.getMaxPrecision(_.precision),N!==_.precision&&Ne("WebGLProgram.getParameters:",_.precision,"not supported, using",N,"instead."));let V=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,H=V!==void 0?V.length:0,J=0;I.morphAttributes.position!==void 0&&(J=1),I.morphAttributes.normal!==void 0&&(J=2),I.morphAttributes.color!==void 0&&(J=3);let se,X,te,Me;if(W){let Se=Qn[W];se=Se.vertexShader,X=Se.fragmentShader}else{se=_.vertexShader,X=_.fragmentShader;let Se=a.getVertexShaderStage(_),yt=a.getFragmentShaderStage(_);a.update(_,Se,yt),te=Se.id,Me=yt.id}let Ue=s.getRenderTarget(),me=s.state.buffers.depth.getReversed(),Fe=R.isInstancedMesh===!0,Mt=R.isBatchedMesh===!0,Ve=!!_.map,tt=!!_.matcap,at=!!D,ie=at&&D.isPMREMTexture===!0,de=!!_.aoMap,ce=!!_.lightMap,Ae=!!_.bumpMap&&_.wireframe===!1,ve=!!_.normalMap,Je=!!_.displacementMap,Oe=!!_.emissiveMap,lt=!!_.metalnessMap,ct=!!_.roughnessMap,gt=_.anisotropy>0,z=_.clearcoat>0,Ot=_.diffuseRoughness>0,rt=_.dispersion>0,St=_.retroreflectivity>0,xe=_.iridescence>0,Dt=_.sheen>0,ze=_.transmission>0,Xe=gt&&!!_.anisotropyMap,P=z&&!!_.clearcoatMap,A=z&&!!_.clearcoatNormalMap,Y=z&&!!_.clearcoatRoughnessMap,oe=Ot&&!!_.diffuseRoughnessMap,ne=xe&&!!_.iridescenceMap,he=xe&&!!_.iridescenceThicknessMap,_e=Dt&&!!_.sheenColorMap,j=Dt&&!!_.sheenRoughnessMap,Q=!!_.specularMap,fe=!!_.specularColorMap,F=!!_.specularIntensityMap,ee=ze&&!!_.transmissionMap,$=ze&&!!_.thicknessMap,pe=!!_.gradientMap,le=!!_.alphaMap,ue=_.alphaTest>0,Be=!!_.alphaHash,et=!!_.extensions,ae=$n;_.toneMapped&&(Ue===null||Ue.isXRRenderTarget===!0)&&(ae=s.toneMapping);let ke=ie?D.isCompressedCubeTexture?D.image[0].mipmaps:D.mipmaps:null,Qe={shaderID:W,shaderType:_.type,shaderName:_.name,vertexShader:se,fragmentShader:X,defines:_.defines,customVertexShaderID:te,customFragmentShaderID:Me,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:N,batching:Mt,batchingColor:Mt&&R._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&R.instanceColor!==null,instancingMorph:Fe&&R.morphTexture!==null,outputColorSpace:Ue===null?s.outputColorSpace:Ue.isXRRenderTarget===!0?Ue.texture.colorSpace:nt.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Ve,matcap:tt,envMap:at,envMapMode:at&&D.mapping,envMapPMREM:ie,envMapMaxLod:ie?ke.length-1:null,envMapSize:ie?ke[0].width:null,aoMap:de,lightMap:ce,bumpMap:Ae,normalMap:ve,displacementMap:Je,emissiveMap:Oe,normalMapObjectSpace:ve&&_.normalMapType===uf,normalMapTangentSpace:ve&&_.normalMapType===vo,packedNormalMap:ve&&_.normalMapType===vo&&Zy(_.normalMap.format),metalnessMap:lt,roughnessMap:ct,anisotropy:gt,anisotropyMap:Xe,clearcoat:z,clearcoatMap:P,clearcoatNormalMap:A,clearcoatRoughnessMap:Y,diffuseRoughness:Ot,diffuseRoughnessMap:oe,dispersion:rt,retroreflection:St,iridescence:xe,iridescenceMap:ne,iridescenceThicknessMap:he,sheen:Dt,sheenColorMap:_e,sheenRoughnessMap:j,specularMap:Q,specularColorMap:fe,specularIntensityMap:F,transmission:ze,transmissionMap:ee,thicknessMap:$,gradientMap:pe,opaque:_.transparent===!1&&_.blending===nr&&_.alphaToCoverage===!1,alphaMap:le,alphaTest:ue,alphaHash:Be,combine:_.combine,mapUv:Ve&&f(_.map.channel),aoMapUv:de&&f(_.aoMap.channel),lightMapUv:ce&&f(_.lightMap.channel),bumpMapUv:Ae&&f(_.bumpMap.channel),normalMapUv:ve&&f(_.normalMap.channel),displacementMapUv:Je&&f(_.displacementMap.channel),emissiveMapUv:Oe&&f(_.emissiveMap.channel),metalnessMapUv:lt&&f(_.metalnessMap.channel),roughnessMapUv:ct&&f(_.roughnessMap.channel),anisotropyMapUv:Xe&&f(_.anisotropyMap.channel),clearcoatMapUv:P&&f(_.clearcoatMap.channel),clearcoatNormalMapUv:A&&f(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Y&&f(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:oe&&f(_.diffuseRoughnessMap.channel),iridescenceMapUv:ne&&f(_.iridescenceMap.channel),iridescenceThicknessMapUv:he&&f(_.iridescenceThicknessMap.channel),sheenColorMapUv:_e&&f(_.sheenColorMap.channel),sheenRoughnessMapUv:j&&f(_.sheenRoughnessMap.channel),specularMapUv:Q&&f(_.specularMap.channel),specularColorMapUv:fe&&f(_.specularColorMap.channel),specularIntensityMapUv:F&&f(_.specularIntensityMap.channel),transmissionMapUv:ee&&f(_.transmissionMap.channel),thicknessMapUv:$&&f(_.thicknessMap.channel),alphaMapUv:le&&f(_.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(ve||gt),vertexNormals:!!I.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:R.isPoints===!0&&!!I.attributes.uv&&(Ve||le),fog:!!B,useFog:_.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||I.attributes.normal===void 0&&ve===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:me,skinning:R.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:H,morphTextureStride:J,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:L.filter(Se=>Se.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:s.shadowMap.enabled&&C.length>0,shadowMapType:s.shadowMap.type,toneMapping:ae,decodeVideoTexture:Ve&&_.map.isVideoTexture===!0&&nt.getTransfer(_.map.colorSpace)===_t,decodeVideoTextureEmissive:Oe&&_.emissiveMap.isVideoTexture===!0&&nt.getTransfer(_.emissiveMap.colorSpace)===_t,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===We,flipSided:_.side===fn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:et&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(et&&_.extensions.multiDraw===!0||Mt)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Qe.vertexUv1s=l.has(1),Qe.vertexUv2s=l.has(2),Qe.vertexUv3s=l.has(3),l.clear(),Qe}function x(_){let b=[];if(_.shaderID?b.push(_.shaderID):(b.push(_.customVertexShaderID),b.push(_.customFragmentShaderID)),_.defines!==void 0)for(let C in _.defines)b.push(C),b.push(_.defines[C]);return _.isRawShaderMaterial===!1&&(m(b,_),g(b,_),b.push(s.outputColorSpace)),b.push(_.customProgramCacheKey),b.join()}function m(_,b){_.push(b.precision),_.push(b.outputColorSpace),_.push(b.envMapMode),_.push(b.envMapPMREM),_.push(b.envMapMaxLod),_.push(b.envMapSize),_.push(b.mapUv),_.push(b.alphaMapUv),_.push(b.lightMapUv),_.push(b.aoMapUv),_.push(b.bumpMapUv),_.push(b.normalMapUv),_.push(b.displacementMapUv),_.push(b.emissiveMapUv),_.push(b.metalnessMapUv),_.push(b.roughnessMapUv),_.push(b.anisotropyMapUv),_.push(b.clearcoatMapUv),_.push(b.clearcoatNormalMapUv),_.push(b.clearcoatRoughnessMapUv),_.push(b.diffuseRoughnessMapUv),_.push(b.iridescenceMapUv),_.push(b.iridescenceThicknessMapUv),_.push(b.sheenColorMapUv),_.push(b.sheenRoughnessMapUv),_.push(b.specularMapUv),_.push(b.specularColorMapUv),_.push(b.specularIntensityMapUv),_.push(b.transmissionMapUv),_.push(b.thicknessMapUv),_.push(b.combine),_.push(b.fogExp2),_.push(b.sizeAttenuation),_.push(b.morphTargetsCount),_.push(b.numSunLights),_.push(b.numDirLights),_.push(b.numPointLights),_.push(b.numSpotLights),_.push(b.numSpotLightMaps),_.push(b.numHemiLights),_.push(b.numRectAreaLights),_.push(b.numSunLightShadows),_.push(b.numDirLightShadows),_.push(b.numPointLightShadows),_.push(b.numSpotLightShadows),_.push(b.numSpotLightShadowsWithMaps),_.push(b.numLightProbes),_.push(b.numLightProbeGrids),_.push(b.shadowMapType),_.push(b.toneMapping),_.push(b.numClippingPlanes),_.push(b.numClipIntersection),_.push(b.depthPacking)}function g(_,b){o.disableAll(),b.instancing&&o.enable(0),b.instancingColor&&o.enable(1),b.instancingMorph&&o.enable(2),b.matcap&&o.enable(3),b.envMap&&o.enable(4),b.normalMapObjectSpace&&o.enable(5),b.normalMapTangentSpace&&o.enable(6),b.clearcoat&&o.enable(7),b.iridescence&&o.enable(8),b.alphaTest&&o.enable(9),b.vertexColors&&o.enable(10),b.vertexAlphas&&o.enable(11),b.vertexUv1s&&o.enable(12),b.vertexUv2s&&o.enable(13),b.vertexUv3s&&o.enable(14),b.vertexTangents&&o.enable(15),b.anisotropy&&o.enable(16),b.alphaHash&&o.enable(17),b.batching&&o.enable(18),b.dispersion&&o.enable(19),b.retroreflection&&o.enable(24),b.diffuseRoughness&&o.enable(25),b.batchingColor&&o.enable(20),b.gradientMap&&o.enable(21),b.packedNormalMap&&o.enable(22),b.vertexNormals&&o.enable(23),_.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),b.numLightProbeGrids>0&&o.enable(22),b.hasPositionAttribute&&o.enable(23),_.push(o.mask)}function v(_){let b=d[_.type],C;if(b){let w=Qn[b];C=Ef.clone(w.uniforms)}else C=_.uniforms;return C}function M(_,b){let C=h.get(b);return C!==void 0?++C.usedTimes:(C=new Yy(s,b,_,i),c.push(C),h.set(b,C)),C}function y(_){if(--_.usedTimes===0){let b=c.indexOf(_);c[b]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function T(_){a.remove(_)}function S(){a.dispose()}return{getParameters:p,getProgramCacheKey:x,getUniforms:v,acquireProgram:M,releaseProgram:y,releaseShaderCache:T,programs:c,dispose:S}}function $y(){let s=new WeakMap;function e(o){return s.has(o)}function t(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function jy(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function Yf(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Kf(){let s=[],e=0,t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function a(d,f,p,x,m,g){let v=s[e];return v===void 0?(v={id:d.id,object:d,geometry:f,material:p,materialVariant:o(d),groupOrder:x,renderOrder:d.renderOrder,z:m,group:g},s[e]=v):(v.id=d.id,v.object=d,v.geometry=f,v.material=p,v.materialVariant=o(d),v.groupOrder=x,v.renderOrder=d.renderOrder,v.z=m,v.group=g),e++,v}function l(d,f,p,x,m,g,v){v.reversedDepth===!0&&(m=-m);let M=a(d,f,p,x,m,g);p.transmission>0?n.push(M):p.transparent===!0?i.push(M):t.push(M)}function c(d,f,p,x,m,g){let v=a(d,f,p,x,m,g);p.transmission>0?n.unshift(v):p.transparent===!0?i.unshift(v):t.unshift(v)}function h(d,f){t.length>1&&t.sort(d||jy),n.length>1&&n.sort(f||Yf),i.length>1&&i.sort(f||Yf)}function u(){for(let d=e,f=s.length;d<f;d++){let p=s[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:l,unshift:c,finish:u,sort:h}}function Qy(){let s=new WeakMap;function e(n,i){let r=s.get(n),o;return r===void 0?(o=new Kf,s.set(n,[o])):i>=r.length?(o=new Kf,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function ev(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new U,color:new Re};break;case"SpotLight":t={position:new U,direction:new U,color:new Re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new Re,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new Re,groundColor:new Re};break;case"RectAreaLight":t={color:new Re,position:new U,halfWidth:new U,halfHeight:new U};break}return s[e.id]=t,t}}}function tv(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}var nv=0;function iv(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function sv(s){let e=new ev,t=tv(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new U);let i=new U,r=new qe,o=new qe;function a(c){let h=0,u=0,d=0;for(let L=0;L<9;L++)n.probe[L].set(0,0,0);let f=0,p=0,x=0,m=0,g=0,v=0,M=0,y=0,T=0,S=0,_=0,b=0,C=0,w=0;c.sort(iv);for(let L=0,B=c.length;L<B;L++){let I=c[L],O=I.color,G=I.intensity,D=I.distance,W=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===Fi?W=I.shadow.map.texture:W=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=O.r*G,u+=O.g*G,d+=O.b*G;else if(I.isLightProbe){for(let N=0;N<9;N++)n.probe[N].addScaledVector(I.sh.coefficients[N],G);w++}else if(I.isSunLight){let N=e.get(I);if(N.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let V=I.shadow,H=t.get(I);H.shadowIntensity=V.intensity,H.shadowBias=V.bias,H.shadowNormalBias=V.normalBias,H.shadowRadius=V.radius,H.shadowMapSize.copy(V.mapSize).multiply(V.getFrameExtents()),n.sunShadow[p]=H,n.sunShadowMap[p]=W;let J=V.getViewportCount();for(let se=0;se<J;se++)n.sunShadowMatrix[x+se]=V.getMatrix(se),n.sunShadowCascade[x+se]=V._cascadeData[se];x+=J,p++}n.sun[f]=N,f++}else if(I.isDirectionalLight){let N=e.get(I);if(N.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let V=I.shadow,H=t.get(I);H.shadowIntensity=V.intensity,H.shadowBias=V.bias,H.shadowNormalBias=V.normalBias,H.shadowRadius=V.radius,H.shadowMapSize=V.mapSize,n.directionalShadow[m]=H,n.directionalShadowMap[m]=W,n.directionalShadowMatrix[m]=I.shadow.matrix,T++}n.directional[m]=N,m++}else if(I.isSpotLight){let N=e.get(I);N.position.setFromMatrixPosition(I.matrixWorld),N.color.copy(O).multiplyScalar(G),N.distance=D,N.coneCos=Math.cos(I.angle),N.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),N.decay=I.decay,n.spot[v]=N;let V=I.shadow;if(I.map&&(n.spotLightMap[b]=I.map,b++,V.updateMatrices(I),I.castShadow&&C++),n.spotLightMatrix[v]=V.matrix,I.castShadow){let H=t.get(I);H.shadowIntensity=V.intensity,H.shadowBias=V.bias,H.shadowNormalBias=V.normalBias,H.shadowRadius=V.radius,H.shadowMapSize=V.mapSize,n.spotShadow[v]=H,n.spotShadowMap[v]=W,_++}v++}else if(I.isRectAreaLight){let N=e.get(I);N.color.copy(O).multiplyScalar(G),N.halfWidth.set(I.width*.5,0,0),N.halfHeight.set(0,I.height*.5,0),n.rectArea[M]=N,M++}else if(I.isPointLight){let N=e.get(I);if(N.color.copy(I.color).multiplyScalar(I.intensity),N.distance=I.distance,N.decay=I.decay,I.castShadow){let V=I.shadow,H=t.get(I);H.shadowIntensity=V.intensity,H.shadowBias=V.bias,H.shadowNormalBias=V.normalBias,H.shadowRadius=V.radius,H.shadowMapSize=V.mapSize,H.shadowCameraNear=V.camera.near,H.shadowCameraFar=V.camera.far,n.pointShadow[g]=H,n.pointShadowMap[g]=W,n.pointShadowMatrix[g]=I.shadow.matrix,S++}n.point[g]=N,g++}else if(I.isHemisphereLight){let N=e.get(I);N.skyColor.copy(I.color).multiplyScalar(G),N.groundColor.copy(I.groundColor).multiplyScalar(G),n.hemi[y]=N,y++}}M>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=be.LTC_FLOAT_1,n.rectAreaLTC2=be.LTC_FLOAT_2):(n.rectAreaLTC1=be.LTC_HALF_1,n.rectAreaLTC2=be.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let R=n.hash;(R.sunLength!==f||R.directionalLength!==m||R.pointLength!==g||R.spotLength!==v||R.rectAreaLength!==M||R.hemiLength!==y||R.numSunShadows!==p||R.numDirectionalShadows!==T||R.numPointShadows!==S||R.numSpotShadows!==_||R.numSpotMaps!==b||R.numLightProbes!==w)&&(n.sun.length=f,n.directional.length=m,n.spot.length=v,n.rectArea.length=M,n.point.length=g,n.hemi.length=y,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.directionalShadowMatrix.length=T,n.pointShadow.length=S,n.pointShadowMap.length=S,n.pointShadowMatrix.length=S,n.spotShadow.length=_,n.spotShadowMap.length=_,n.spotLightMatrix.length=_+b-C,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=w,R.sunLength=f,R.directionalLength=m,R.pointLength=g,R.spotLength=v,R.rectAreaLength=M,R.hemiLength=y,R.numSunShadows=p,R.numDirectionalShadows=T,R.numPointShadows=S,R.numSpotShadows=_,R.numSpotMaps=b,R.numLightProbes=w,n.version=nv++)}function l(c,h){let u=0,d=0,f=0,p=0,x=0,m=0,g=h.matrixWorldInverse;for(let v=0,M=c.length;v<M;v++){let y=c[v];if(y.isSunLight){let T=n.sun[u];T.direction.setFromMatrixPosition(y.matrixWorld),T.direction.transformDirection(g),u++}else if(y.isDirectionalLight){let T=n.directional[d];T.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(i),T.direction.transformDirection(g),d++}else if(y.isSpotLight){let T=n.spot[p];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(g),T.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(i),T.direction.transformDirection(g),p++}else if(y.isRectAreaLight){let T=n.rectArea[x];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(g),o.identity(),r.copy(y.matrixWorld),r.premultiply(g),o.extractRotation(r),T.halfWidth.set(y.width*.5,0,0),T.halfHeight.set(0,y.height*.5,0),T.halfWidth.applyMatrix4(o),T.halfHeight.applyMatrix4(o),x++}else if(y.isPointLight){let T=n.point[f];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(g),f++}else if(y.isHemisphereLight){let T=n.hemi[m];T.direction.setFromMatrixPosition(y.matrixWorld),T.direction.transformDirection(g),m++}}}return{setup:a,setupView:l,state:n}}function Zf(s){let e=new sv(s),t=[],n=[],i=[];function r(u){h.camera=u,t.length=0,n.length=0,i.length=0}function o(u){u.isLightProbeGrid?i.push(u):t.push(u)}function a(u){n.push(u)}function l(){e.setup(t),i.sort((u,d)=>u.priority-d.priority||u.id-d.id)}function c(u){e.setupView(t,u)}let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function rv(s){let e=new WeakMap;function t(i,r=0){let o=e.get(i),a;return o===void 0?(a=new Zf(s),e.set(i,[a])):r>=o.length?(a=new Zf(s),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var ov=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,av=`uniform sampler2D shadow_pass;
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
}`,lv=[new U(1,0,0),new U(-1,0,0),new U(0,1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1)],cv=[new U(0,-1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1),new U(0,-1,0),new U(0,-1,0)],Jf=new qe,Mo=new U,Lh=new U;function hv(s,e,t){let n=new Di,i=new re,r=new re,o=new vt,a=new Ia,l=new Pa,c={},h=t.maxTextureSize,u={[Jn]:fn,[fn]:Jn,[We]:We},d=new Yn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new re},radius:{value:4}},vertexShader:ov,fragmentShader:av}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let p=new $e;p.setAttribute("position",new zt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Le(p,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=hs;let g=this.type;this.render=function(S,_,b){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;this.type===zd&&(Ne("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=hs);let C=s.getRenderTarget(),w=s.getActiveCubeFace(),R=s.getActiveMipmapLevel(),L=s.state;L.setBlending(us),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let B=g!==this.type;B&&_.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(O=>O.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,O=S.length;I<O;I++){let G=S[I],D=G.shadow;if(D===void 0){Ne("WebGLShadowMap:",G,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;i.copy(D.mapSize);let W=D.getFrameExtents();i.multiply(W),r.copy(D.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/W.x),i.x=r.x*W.x,D.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/W.y),i.y=r.y*W.y,D.mapSize.y=r.y));let N=s.state.buffers.depth.getReversed();if(D.camera._reversedDepth=N,D.map===null||B===!0){if(D.map!==null&&(D.map.depthTexture!==null&&(D.map.depthTexture.dispose(),D.map.depthTexture=null),D.map.dispose()),this.type===tr){if(G.isPointLight){Ne("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}D.map=new Sn(i.x,i.y,{format:Fi,type:zn,minFilter:Ht,magFilter:Ht,generateMipmaps:!1}),D.map.texture.name=G.name+".shadowMap",D.map.depthTexture=new pi(i.x,i.y,Tn),D.map.depthTexture.name=G.name+".shadowMapDepth",D.map.depthTexture.format=di,D.map.depthTexture.compareFunction=null,D.map.depthTexture.minFilter=Ft,D.map.depthTexture.magFilter=Ft}else G.isPointLight?(D.map=new bo(i.x),D.map.depthTexture=new Xr(i.x,kn)):(D.map=new Sn(i.x,i.y),D.map.depthTexture=new pi(i.x,i.y,kn)),D.map.depthTexture.name=G.name+".shadowMap",D.map.depthTexture.format=di,this.type===hs?(D.map.depthTexture.compareFunction=N?_h:xh,D.map.depthTexture.minFilter=Ht,D.map.depthTexture.magFilter=Ht):(D.map.depthTexture.compareFunction=null,D.map.depthTexture.minFilter=Ft,D.map.depthTexture.magFilter=Ft);D.camera.updateProjectionMatrix()}D.map.isWebGLCubeRenderTarget!==!0&&(D.map.width!==i.x||D.map.height!==i.y)&&D.map.setSize(i.x,i.y);let V=D.map.isWebGLCubeRenderTarget?6:D.getViewportCount();G.isPointLight!==!0&&D.updateMatrices(G,b);let H=(D.camera.layers.mask&4294967294)!==0?D.camera.layers:b.layers;for(let J=0;J<V;J++){let se=D.getCamera(J);if(G.isPointLight){let X=D.camera,te=D.matrix,Me=G.distance||X.far;Me!==X.far&&(X.far=Me,X.updateProjectionMatrix()),Mo.setFromMatrixPosition(G.matrixWorld),X.position.copy(Mo),Lh.copy(X.position),Lh.add(lv[J]),X.up.copy(cv[J]),X.lookAt(Lh),X.updateMatrixWorld(),te.makeTranslation(-Mo.x,-Mo.y,-Mo.z),Jf.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),D._frustum.setFromProjectionMatrix(Jf,X.coordinateSystem,X.reversedDepth)}if(D.map.isWebGLCubeRenderTarget)s.setRenderTarget(D.map,J),s.clear();else{J===0&&(s.setRenderTarget(D.map),s.clear());let X=D.getViewport(J);o.set(r.x*X.x,r.y*X.y,r.x*X.z,r.y*X.w),L.viewport(o)}n=D.getFrustum(J),y(_,b,se,G,H,this.type)}D.isPointLightShadow!==!0&&this.type===tr&&v(D,b),D.needsUpdate=!1}g=this.type,m.needsUpdate=!1,s.setRenderTarget(C,w,R)};function v(S,_){let b=e.update(x);d.defines.VSM_SAMPLES!==S.blurSamples&&(d.defines.VSM_SAMPLES=S.blurSamples,f.defines.VSM_SAMPLES=S.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),S.mapPass===null?S.mapPass=new Sn(i.x,i.y,{format:Fi,type:zn}):(S.mapPass.width!==S.map.width||S.mapPass.height!==S.map.height)&&S.mapPass.setSize(S.map.width,S.map.height),d.uniforms.shadow_pass.value=S.map.depthTexture,d.uniforms.resolution.value.set(S.map.width,S.map.height),d.uniforms.radius.value=S.radius,s.setRenderTarget(S.mapPass),s.clear(),s.renderBufferDirect(_,null,b,d,x,null),f.uniforms.shadow_pass.value=S.mapPass.texture,f.uniforms.resolution.value.set(S.map.width,S.map.height),f.uniforms.radius.value=S.radius,s.setRenderTarget(S.map),s.clear(),s.renderBufferDirect(_,null,b,f,x,null)}function M(S,_,b,C){let w=null,R=b.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(R!==void 0)w=R;else if(w=b.isPointLight===!0?l:a,s.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){let L=w.uuid,B=_.uuid,I=c[L];I===void 0&&(I={},c[L]=I);let O=I[B];O===void 0&&(O=w.clone(),I[B]=O,_.addEventListener("dispose",T)),w=O}if(w.visible=_.visible,w.wireframe=_.wireframe,C===tr?w.side=_.shadowSide!==null?_.shadowSide:_.side:w.side=_.shadowSide!==null?_.shadowSide:u[_.side],w.alphaMap=_.alphaMap,w.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,w.map=_.map,w.clipShadows=_.clipShadows,w.clippingPlanes=_.clippingPlanes,w.clipIntersection=_.clipIntersection,w.displacementMap=_.displacementMap,w.displacementScale=_.displacementScale,w.displacementBias=_.displacementBias,w.wireframeLinewidth=_.wireframeLinewidth,w.linewidth=_.linewidth,b.isPointLight===!0&&w.isMeshDistanceMaterial===!0){let L=s.properties.get(w);L.light=b}return w}function y(S,_,b,C,w,R){if(S.visible===!1)return;if(S.layers.test(w)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&R===tr)&&(!S.frustumCulled||S.intersectsFrustum(n))){S.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,S.matrixWorld);let I=e.update(S),O=S.material;if(Array.isArray(O)){let G=I.groups;for(let D=0,W=G.length;D<W;D++){let N=G[D],V=O[N.materialIndex];if(V&&V.visible){let H=M(S,V,C,R);S.onBeforeShadow(s,S,_,b,I,H,N),s.renderBufferDirect(b,null,I,H,S,N),S.onAfterShadow(s,S,_,b,I,H,N)}}}else if(O.visible){let G=M(S,O,C,R);S.onBeforeShadow(s,S,_,b,I,G,null),s.renderBufferDirect(b,null,I,G,S,null),S.onAfterShadow(s,S,_,b,I,G,null)}}let B=S.children;for(let I=0,O=B.length;I<O;I++)y(B[I],_,b,C,w,R)}function T(S){S.target.removeEventListener("dispose",T);for(let b in c){let C=c[b],w=S.target.uuid;w in C&&(C[w].dispose(),delete C[w])}}}function uv(s,e){function t(){let F=!1,ee=new vt,$=null,pe=new vt(0,0,0,0);return{setMask:function(le){$!==le&&!F&&(s.colorMask(le,le,le,le),$=le)},setLocked:function(le){F=le},setClear:function(le,ue,Be,et,ae){ae===!0&&(le*=et,ue*=et,Be*=et),ee.set(le,ue,Be,et),pe.equals(ee)===!1&&(s.clearColor(le,ue,Be,et),pe.copy(ee))},reset:function(){F=!1,$=null,pe.set(-1,0,0,0)}}}function n(){let F=!1,ee=!1,$=null,pe=null,le=null;return{setReversed:function(ue){if(ee!==ue){let Be=e.get("EXT_clip_control");ue?Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.ZERO_TO_ONE_EXT):Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.NEGATIVE_ONE_TO_ONE_EXT),ee=ue;let et=le;le=null,this.setClear(et)}},getReversed:function(){return ee},setTest:function(ue){ue?me(s.DEPTH_TEST):Fe(s.DEPTH_TEST)},setMask:function(ue){$!==ue&&!F&&(s.depthMask(ue),$=ue)},setFunc:function(ue){if(ee&&(ue=Mf[ue]),pe!==ue){switch(ue){case ha:s.depthFunc(s.NEVER);break;case ua:s.depthFunc(s.ALWAYS);break;case da:s.depthFunc(s.LESS);break;case Fs:s.depthFunc(s.LEQUAL);break;case fa:s.depthFunc(s.EQUAL);break;case pa:s.depthFunc(s.GEQUAL);break;case ma:s.depthFunc(s.GREATER);break;case ga:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}pe=ue}},setLocked:function(ue){F=ue},setClear:function(ue){le!==ue&&(le=ue,ee&&(ue=1-ue),s.clearDepth(ue))},reset:function(){F=!1,$=null,pe=null,le=null,ee=!1}}}function i(){let F=!1,ee=null,$=null,pe=null,le=null,ue=null,Be=null,et=null,ae=null;return{setTest:function(ke){F||(ke?me(s.STENCIL_TEST):Fe(s.STENCIL_TEST))},setMask:function(ke){ee!==ke&&!F&&(s.stencilMask(ke),ee=ke)},setFunc:function(ke,Qe,Se){($!==ke||pe!==Qe||le!==Se)&&(s.stencilFunc(ke,Qe,Se),$=ke,pe=Qe,le=Se)},setOp:function(ke,Qe,Se){(ue!==ke||Be!==Qe||et!==Se)&&(s.stencilOp(ke,Qe,Se),ue=ke,Be=Qe,et=Se)},setLocked:function(ke){F=ke},setClear:function(ke){ae!==ke&&(s.clearStencil(ke),ae=ke)},reset:function(){F=!1,ee=null,$=null,pe=null,le=null,ue=null,Be=null,et=null,ae=null}}}let r=new t,o=new n,a=new i,l={},c=new WeakMap,h={},u={},d={},f=new WeakMap,p=[],x=null,m=!1,g=null,v=null,M=null,y=null,T=null,S=null,_=null,b=new Re(0,0,0),C=0,w=!1,R=null,L=null,B=null,I=null,O=null,G=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),D=!1,W=0,N=s.getParameter(s.VERSION);N.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(N)[1]),D=W>=1):N.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),D=W>=2);let V=null,H={},J=s.getParameter(s.SCISSOR_BOX),se=s.getParameter(s.VIEWPORT),X=new vt().fromArray(J),te=new vt().fromArray(se);function Me(F,ee,$,pe){let le=new Uint8Array(4),ue=s.createTexture();s.bindTexture(F,ue),s.texParameteri(F,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(F,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Be=0;Be<$;Be++)F===s.TEXTURE_3D||F===s.TEXTURE_2D_ARRAY?s.texImage3D(ee,0,s.RGBA,1,1,pe,0,s.RGBA,s.UNSIGNED_BYTE,le):s.texImage2D(ee+Be,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,le);return ue}let Ue={};Ue[s.TEXTURE_2D]=Me(s.TEXTURE_2D,s.TEXTURE_2D,1),Ue[s.TEXTURE_CUBE_MAP]=Me(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ue[s.TEXTURE_2D_ARRAY]=Me(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Ue[s.TEXTURE_3D]=Me(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),me(s.DEPTH_TEST),o.setFunc(Fs),Ae(!1),ve($c),me(s.CULL_FACE),de(us);function me(F){h[F]!==!0&&(s.enable(F),h[F]=!0)}function Fe(F){h[F]!==!1&&(s.disable(F),h[F]=!1)}function Mt(F,ee){return d[F]!==ee?(s.bindFramebuffer(F,ee),d[F]=ee,F===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=ee),F===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=ee),!0):!1}function Ve(F,ee){let $=p,pe=!1;if(F){$=f.get(ee),$===void 0&&($=[],f.set(ee,$));let le=F.textures;if($.length!==le.length||$[0]!==s.COLOR_ATTACHMENT0){for(let ue=0,Be=le.length;ue<Be;ue++)$[ue]=s.COLOR_ATTACHMENT0+ue;$.length=le.length,pe=!0}}else $[0]!==s.BACK&&($[0]=s.BACK,pe=!0);pe&&s.drawBuffers($)}function tt(F){return x!==F?(s.useProgram(F),x=F,!0):!1}let at={[ds]:s.FUNC_ADD,[Vd]:s.FUNC_SUBTRACT,[Hd]:s.FUNC_REVERSE_SUBTRACT};at[Wd]=s.MIN,at[Xd]=s.MAX;let ie={[qd]:s.ZERO,[Yd]:s.ONE,[Kd]:s.SRC_COLOR,[th]:s.SRC_ALPHA,[ef]:s.SRC_ALPHA_SATURATE,[jd]:s.DST_COLOR,[Jd]:s.DST_ALPHA,[Zd]:s.ONE_MINUS_SRC_COLOR,[nh]:s.ONE_MINUS_SRC_ALPHA,[Qd]:s.ONE_MINUS_DST_COLOR,[$d]:s.ONE_MINUS_DST_ALPHA,[tf]:s.CONSTANT_COLOR,[nf]:s.ONE_MINUS_CONSTANT_COLOR,[sf]:s.CONSTANT_ALPHA,[rf]:s.ONE_MINUS_CONSTANT_ALPHA};function de(F,ee,$,pe,le,ue,Be,et,ae,ke){if(F===us){m===!0&&(Fe(s.BLEND),m=!1);return}if(m===!1&&(me(s.BLEND),m=!0),F!==Gd){if(F!==g||ke!==w){if((v!==ds||T!==ds)&&(s.blendEquation(s.FUNC_ADD),v=ds,T=ds),ke)switch(F){case nr:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case jc:s.blendFunc(s.ONE,s.ONE);break;case Qc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case eh:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:He("WebGLState: Invalid blending: ",F);break}else switch(F){case nr:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case jc:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Qc:He("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case eh:He("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:He("WebGLState: Invalid blending: ",F);break}M=null,y=null,S=null,_=null,b.set(0,0,0),C=0,g=F,w=ke}return}le=le||ee,ue=ue||$,Be=Be||pe,(ee!==v||le!==T)&&(s.blendEquationSeparate(at[ee],at[le]),v=ee,T=le),($!==M||pe!==y||ue!==S||Be!==_)&&(s.blendFuncSeparate(ie[$],ie[pe],ie[ue],ie[Be]),M=$,y=pe,S=ue,_=Be),(et.equals(b)===!1||ae!==C)&&(s.blendColor(et.r,et.g,et.b,ae),b.copy(et),C=ae),g=F,w=!1}function ce(F,ee){F.side===We?Fe(s.CULL_FACE):me(s.CULL_FACE);let $=F.side===fn;ee&&($=!$),Ae($),F.blending===nr&&F.transparent===!1?de(us):de(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),r.setMask(F.colorWrite);let pe=F.stencilWrite;a.setTest(pe),pe&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Oe(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?me(s.SAMPLE_ALPHA_TO_COVERAGE):Fe(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ae(F){R!==F&&(F?s.frontFace(s.CW):s.frontFace(s.CCW),R=F)}function ve(F){F!==Bd?(me(s.CULL_FACE),F!==L&&(F===$c?s.cullFace(s.BACK):F===kd?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Fe(s.CULL_FACE),L=F}function Je(F){F!==B&&(D&&s.lineWidth(F),B=F)}function Oe(F,ee,$){F?(me(s.POLYGON_OFFSET_FILL),(I!==ee||O!==$)&&(I=ee,O=$,o.getReversed()&&(ee=-ee,$=-$),s.polygonOffset(ee,$))):Fe(s.POLYGON_OFFSET_FILL)}function lt(F){F?me(s.SCISSOR_TEST):Fe(s.SCISSOR_TEST)}function ct(F){F===void 0&&(F=s.TEXTURE0+G-1),V!==F&&(s.activeTexture(F),V=F)}function gt(F,ee,$){$===void 0&&(V===null?$=s.TEXTURE0+G-1:$=V);let pe=H[$];pe===void 0&&(pe={type:void 0,texture:void 0},H[$]=pe),(pe.type!==F||pe.texture!==ee)&&(V!==$&&(s.activeTexture($),V=$),s.bindTexture(F,ee||Ue[F]),pe.type=F,pe.texture=ee)}function z(){let F=H[V];F!==void 0&&F.type!==void 0&&(s.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function Ot(){try{s.compressedTexImage2D(...arguments)}catch(F){He("WebGLState:",F)}}function rt(){try{s.compressedTexImage3D(...arguments)}catch(F){He("WebGLState:",F)}}function St(){try{s.texSubImage2D(...arguments)}catch(F){He("WebGLState:",F)}}function xe(){try{s.texSubImage3D(...arguments)}catch(F){He("WebGLState:",F)}}function Dt(){try{s.compressedTexSubImage2D(...arguments)}catch(F){He("WebGLState:",F)}}function ze(){try{s.compressedTexSubImage3D(...arguments)}catch(F){He("WebGLState:",F)}}function Xe(){try{s.texStorage2D(...arguments)}catch(F){He("WebGLState:",F)}}function P(){try{s.texStorage3D(...arguments)}catch(F){He("WebGLState:",F)}}function A(){try{s.texImage2D(...arguments)}catch(F){He("WebGLState:",F)}}function Y(){try{s.texImage3D(...arguments)}catch(F){He("WebGLState:",F)}}function oe(F){return u[F]!==void 0?u[F]:s.getParameter(F)}function ne(F,ee){u[F]!==ee&&(s.pixelStorei(F,ee),u[F]=ee)}function he(F){X.equals(F)===!1&&(s.scissor(F.x,F.y,F.z,F.w),X.copy(F))}function _e(F){te.equals(F)===!1&&(s.viewport(F.x,F.y,F.z,F.w),te.copy(F))}function j(F,ee){let $=c.get(ee);$===void 0&&($=new WeakMap,c.set(ee,$));let pe=$.get(F);pe===void 0&&(pe=s.getUniformBlockIndex(ee,F.name),s.uniformBlockBinding(ee,pe,pe),$.set(F,pe))}function Q(F,ee,$){let le=c.get(ee).get(F);l[le]!==$&&(s.bindBufferBase(s.UNIFORM_BUFFER,le,$),l[le]=$)}function fe(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},u={},V=null,H={},d={},l={},f=new WeakMap,p=[],x=null,m=!1,g=null,v=null,M=null,y=null,T=null,S=null,_=null,b=new Re(0,0,0),C=0,w=!1,R=null,L=null,B=null,I=null,O=null,X.set(0,0,s.canvas.width,s.canvas.height),te.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:me,disable:Fe,bindFramebuffer:Mt,drawBuffers:Ve,useProgram:tt,setBlending:de,setMaterial:ce,setFlipSided:Ae,setCullFace:ve,setLineWidth:Je,setPolygonOffset:Oe,setScissorTest:lt,activeTexture:ct,bindTexture:gt,unbindTexture:z,compressedTexImage2D:Ot,compressedTexImage3D:rt,texImage2D:A,texImage3D:Y,pixelStorei:ne,getParameter:oe,updateUBOMapping:j,uniformBlockBinding:Q,texStorage2D:Xe,texStorage3D:P,texSubImage2D:St,texSubImage3D:xe,compressedTexSubImage2D:Dt,compressedTexSubImage3D:ze,scissor:he,viewport:_e,reset:fe}}function dv(s,e,t,n,i,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new re,h=new WeakMap,u=new Set,d,f=new WeakMap,p=new Set,x=new FinalizationRegistry(P=>p.delete(P)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,A){return m?new OffscreenCanvas(P,A):ks("canvas")}function v(P,A,Y){let oe=1,ne=Xe(P);if((ne.width>Y||ne.height>Y)&&(oe=Y/Math.max(ne.width,ne.height)),oe<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let he=Math.floor(oe*ne.width),_e=Math.floor(oe*ne.height);d===void 0&&(d=g(he,_e));let j=A?g(he,_e):d;return j.width=he,j.height=_e,j.getContext("2d").drawImage(P,0,0,he,_e),Ne("WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+he+"x"+_e+")."),j}else return"data"in P&&Ne("WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),P;return P}function M(P){return P.generateMipmaps}function y(P){s.generateMipmap(P)}function T(P){return P.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?s.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function S(P,A,Y,oe,ne,he=!1){if(P!==null){if(s[P]!==void 0)return s[P];Ne("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let _e;oe&&(_e=e.get("EXT_texture_norm16"),_e||Ne("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let j=A;if(A===s.RED&&(Y===s.FLOAT&&(j=s.R32F),Y===s.HALF_FLOAT&&(j=s.R16F),Y===s.UNSIGNED_BYTE&&(j=s.R8),Y===s.UNSIGNED_SHORT&&_e&&(j=_e.R16_EXT),Y===s.SHORT&&_e&&(j=_e.R16_SNORM_EXT)),A===s.RED_INTEGER&&(Y===s.UNSIGNED_BYTE&&(j=s.R8UI),Y===s.UNSIGNED_SHORT&&(j=s.R16UI),Y===s.UNSIGNED_INT&&(j=s.R32UI),Y===s.BYTE&&(j=s.R8I),Y===s.SHORT&&(j=s.R16I),Y===s.INT&&(j=s.R32I)),A===s.RG&&(Y===s.FLOAT&&(j=s.RG32F),Y===s.HALF_FLOAT&&(j=s.RG16F),Y===s.UNSIGNED_BYTE&&(j=s.RG8),Y===s.UNSIGNED_SHORT&&_e&&(j=_e.RG16_EXT),Y===s.SHORT&&_e&&(j=_e.RG16_SNORM_EXT)),A===s.RG_INTEGER&&(Y===s.UNSIGNED_BYTE&&(j=s.RG8UI),Y===s.UNSIGNED_SHORT&&(j=s.RG16UI),Y===s.UNSIGNED_INT&&(j=s.RG32UI),Y===s.BYTE&&(j=s.RG8I),Y===s.SHORT&&(j=s.RG16I),Y===s.INT&&(j=s.RG32I)),A===s.RGB_INTEGER&&(Y===s.UNSIGNED_BYTE&&(j=s.RGB8UI),Y===s.UNSIGNED_SHORT&&(j=s.RGB16UI),Y===s.UNSIGNED_INT&&(j=s.RGB32UI),Y===s.BYTE&&(j=s.RGB8I),Y===s.SHORT&&(j=s.RGB16I),Y===s.INT&&(j=s.RGB32I)),A===s.RGBA_INTEGER&&(Y===s.UNSIGNED_BYTE&&(j=s.RGBA8UI),Y===s.UNSIGNED_SHORT&&(j=s.RGBA16UI),Y===s.UNSIGNED_INT&&(j=s.RGBA32UI),Y===s.BYTE&&(j=s.RGBA8I),Y===s.SHORT&&(j=s.RGBA16I),Y===s.INT&&(j=s.RGBA32I)),A===s.RGB&&(Y===s.UNSIGNED_SHORT&&_e&&(j=_e.RGB16_EXT),Y===s.SHORT&&_e&&(j=_e.RGB16_SNORM_EXT),Y===s.UNSIGNED_INT_5_9_9_9_REV&&(j=s.RGB9_E5),Y===s.UNSIGNED_INT_10F_11F_11F_REV&&(j=s.R11F_G11F_B10F)),A===s.RGBA){let Q=he?Ir:nt.getTransfer(ne);Y===s.FLOAT&&(j=s.RGBA32F),Y===s.HALF_FLOAT&&(j=s.RGBA16F),Y===s.UNSIGNED_BYTE&&(j=Q===_t?s.SRGB8_ALPHA8:s.RGBA8),Y===s.UNSIGNED_SHORT&&_e&&(j=_e.RGBA16_EXT),Y===s.SHORT&&_e&&(j=_e.RGBA16_SNORM_EXT),Y===s.UNSIGNED_SHORT_4_4_4_4&&(j=s.RGBA4),Y===s.UNSIGNED_SHORT_5_5_5_1&&(j=s.RGB5_A1)}return(j===s.R16F||j===s.R32F||j===s.RG16F||j===s.RG32F||j===s.RGBA16F||j===s.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function _(P,A){let Y;return P?A===null||A===kn||A===ms?Y=s.DEPTH24_STENCIL8:A===Tn?Y=s.DEPTH32F_STENCIL8:A===or&&(Y=s.DEPTH24_STENCIL8,Ne("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===kn||A===ms?Y=s.DEPTH_COMPONENT24:A===Tn?Y=s.DEPTH_COMPONENT32F:A===or&&(Y=s.DEPTH_COMPONENT16),Y}function b(P,A){return M(P)===!0||P.isFramebufferTexture&&P.minFilter!==Ft&&P.minFilter!==Ht?Math.log2(Math.max(A.width,A.height))+1:P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?A.mipmaps.length:1}function C(P){let A=new WeakRef(P);n.get(P).__ref=A,p.add(A),x.register(P,A,A)}function w(P){let A=n.get(P).__ref;A!==void 0&&(p.delete(A),x.unregister(A))}function R(P){B(P.target)}function L(P){I(P.target)}function B(P){P.removeEventListener("dispose",R),w(P),G(P),P.isVideoTexture&&h.delete(P),P.isHTMLTexture&&u.delete(P)}function I(P){P.removeEventListener("dispose",L),w(P),W(P)}function O(){for(let P of p){let A=P.deref();A!==void 0&&(A.isRenderTarget===!0?I(A):B(A))}p.clear(),u.clear()}function G(P){let A=n.get(P);if(A.__webglInit===void 0)return;let Y=P.source,oe=f.get(Y);if(oe){let ne=oe[A.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&D(P),Object.keys(oe).length===0&&f.delete(Y)}n.remove(P)}function D(P){let A=n.get(P);s.deleteTexture(A.__webglTexture);let Y=P.source,oe=f.get(Y);delete oe[A.__cacheKey],o.memory.textures--}function W(P){let A=n.get(P);A.__depthDisposeCallback&&A.__depthDisposeCallback();let Y=P.depthTexture;if(Y&&Y.renderTarget===P&&B(Y),P.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(A.__webglFramebuffer[ne]))for(let he=0;he<A.__webglFramebuffer[ne].length;he++)s.deleteFramebuffer(A.__webglFramebuffer[ne][he]);else s.deleteFramebuffer(A.__webglFramebuffer[ne]);A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer[ne])}else{if(Array.isArray(A.__webglFramebuffer))for(let ne=0;ne<A.__webglFramebuffer.length;ne++)s.deleteFramebuffer(A.__webglFramebuffer[ne]);else s.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&s.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let ne=0;ne<A.__webglColorRenderbuffer.length;ne++)A.__webglColorRenderbuffer[ne]&&s.deleteRenderbuffer(A.__webglColorRenderbuffer[ne]);A.__webglDepthRenderbuffer&&s.deleteRenderbuffer(A.__webglDepthRenderbuffer)}let oe=P.textures;for(let ne=0,he=oe.length;ne<he;ne++){let _e=n.get(oe[ne]);_e.__webglTexture&&(s.deleteTexture(_e.__webglTexture),o.memory.textures--),n.remove(oe[ne])}n.remove(P)}let N=0;function V(){N=0}function H(){return N}function J(P){N=P}function se(){let P=N;return P>=i.maxTextures&&Ne("WebGLTextures: Trying to use "+(P+1)+" texture units while this GPU supports only "+i.maxTextures),N+=1,P}function X(P){let A=[];return A.push(P.wrapS),A.push(P.wrapT),A.push(P.wrapR||0),A.push(P.magFilter),A.push(P.minFilter),A.push(P.anisotropy),A.push(P.internalFormat),A.push(P.format),A.push(P.type),A.push(P.generateMipmaps),A.push(P.mipmapsAutoUpdate),A.push(P.premultiplyAlpha),A.push(P.flipY),A.push(P.unpackAlignment),A.push(P.colorSpace),A.join()}function te(P,A){let Y=n.get(P);if(P.isVideoTexture&&Dt(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&Y.__version!==P.version){let oe=P.image;if(oe===null)Ne("WebGLRenderer: Texture marked for update but no image data found.");else if(oe.complete===!1)Ne("WebGLRenderer: Texture marked for update but image is incomplete");else{ce(Y,P,A);return}}else P.isExternalTexture&&(Y.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,Y.__webglTexture,s.TEXTURE0+A)}function Me(P,A){let Y=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&Y.__version!==P.version){ce(Y,P,A);return}else P.isExternalTexture&&(Y.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,Y.__webglTexture,s.TEXTURE0+A)}function Ue(P,A){let Y=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&Y.__version!==P.version){ce(Y,P,A);return}t.bindTexture(s.TEXTURE_3D,Y.__webglTexture,s.TEXTURE0+A)}function me(P,A){let Y=n.get(P);if(P.version>0&&Y.__version!==P.version){Ae(Y,P,A);return}t.bindTexture(s.TEXTURE_CUBE_MAP,Y.__webglTexture,s.TEXTURE0+A)}let Fe={[Nt]:s.REPEAT,[En]:s.CLAMP_TO_EDGE,[Os]:s.MIRRORED_REPEAT},Mt={[Ft]:s.NEAREST,[Va]:s.NEAREST_MIPMAP_NEAREST,[ps]:s.NEAREST_MIPMAP_LINEAR,[Ht]:s.LINEAR,[rr]:s.LINEAR_MIPMAP_NEAREST,[Cn]:s.LINEAR_MIPMAP_LINEAR},Ve={[ff]:s.NEVER,[yh]:s.ALWAYS,[pf]:s.LESS,[xh]:s.LEQUAL,[mf]:s.EQUAL,[_h]:s.GEQUAL,[gf]:s.GREATER,[xf]:s.NOTEQUAL};function tt(P,A){if(A.type===Tn&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===Ht||A.magFilter===rr||A.magFilter===ps||A.magFilter===Cn||A.minFilter===Ht||A.minFilter===rr||A.minFilter===ps||A.minFilter===Cn)&&Ne("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(P,s.TEXTURE_WRAP_S,Fe[A.wrapS]),s.texParameteri(P,s.TEXTURE_WRAP_T,Fe[A.wrapT]),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,Fe[A.wrapR]),s.texParameteri(P,s.TEXTURE_MAG_FILTER,Mt[A.magFilter]),s.texParameteri(P,s.TEXTURE_MIN_FILTER,Mt[A.minFilter]),A.compareFunction&&(s.texParameteri(P,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(P,s.TEXTURE_COMPARE_FUNC,Ve[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===Ft||A.minFilter!==ps&&A.minFilter!==Cn||A.type===Tn&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||n.get(A).__currentAnisotropy){let Y=e.get("EXT_texture_filter_anisotropic");s.texParameterf(P,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,i.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy}}}function at(P,A){let Y=!1;P.__webglInit===void 0&&(P.__webglInit=!0,A.addEventListener("dispose",R),C(A));let oe=A.source,ne=f.get(oe);ne===void 0&&(ne={},f.set(oe,ne));let he=X(A);if(he!==P.__cacheKey){ne[he]===void 0&&(ne[he]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,Y=!0),ne[he].usedTimes++;let _e=ne[P.__cacheKey];_e!==void 0&&(ne[P.__cacheKey].usedTimes--,_e.usedTimes===0&&D(A)),P.__cacheKey=he,P.__webglTexture=ne[he].texture}return Y}function ie(P,A,Y){return Math.floor(Math.floor(P/Y)/A)}function de(P,A,Y,oe){let he=P.updateRanges;if(he.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,A.width,A.height,Y,oe,A.data);else{he.sort((F,ee)=>F.start-ee.start);let _e=0;for(let F=1;F<he.length;F++){let ee=he[_e],$=he[F],pe=ee.start+ee.count,le=ie($.start,A.width,4),ue=ie(ee.start,A.width,4);$.start<=pe+1&&le===ue&&ie($.start+$.count-1,A.width,4)===le?ee.count=Math.max(ee.count,$.start+$.count-ee.start):(++_e,he[_e]=$)}he.length=_e+1;let j=t.getParameter(s.UNPACK_ROW_LENGTH),Q=t.getParameter(s.UNPACK_SKIP_PIXELS),fe=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,A.width);for(let F=0,ee=he.length;F<ee;F++){let $=he[F],pe=Math.floor($.start/4),le=Math.ceil($.count/4),ue=pe%A.width,Be=Math.floor(pe/A.width),et=le,ae=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,ue),t.pixelStorei(s.UNPACK_SKIP_ROWS,Be),t.texSubImage2D(s.TEXTURE_2D,0,ue,Be,et,ae,Y,oe,A.data)}P.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,j),t.pixelStorei(s.UNPACK_SKIP_PIXELS,Q),t.pixelStorei(s.UNPACK_SKIP_ROWS,fe)}}function ce(P,A,Y){let oe=s.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(oe=s.TEXTURE_2D_ARRAY),A.isData3DTexture&&(oe=s.TEXTURE_3D);let ne=at(P,A),he=A.source;t.bindTexture(oe,P.__webglTexture,s.TEXTURE0+Y);let _e=n.get(he);if(he.version!==_e.__version||ne===!0){if(t.activeTexture(s.TEXTURE0+Y),(typeof ImageBitmap<"u"&&A.image instanceof ImageBitmap)===!1){let ae=nt.getPrimaries(nt.workingColorSpace),ke=A.colorSpace===Mi?null:nt.getPrimaries(A.colorSpace),Qe=A.colorSpace===Mi||ae===ke?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qe)}t.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment);let Q=v(A.image,!1,i.maxTextureSize);Q=ze(A,Q);let fe=r.convert(A.format,A.colorSpace),F=r.convert(A.type),ee=S(A.internalFormat,fe,F,A.normalized,A.colorSpace,A.isVideoTexture);tt(oe,A);let $,pe=A.mipmaps,le=A.isVideoTexture!==!0,ue=_e.__version===void 0||ne===!0,Be=he.dataReady,et=b(A,Q);if(A.isDepthTexture)ee=_(A.format===vi,A.type),ue&&(le?t.texStorage2D(s.TEXTURE_2D,1,ee,Q.width,Q.height):t.texImage2D(s.TEXTURE_2D,0,ee,Q.width,Q.height,0,fe,F,null));else if(A.isDataTexture)if(pe.length>0){le&&ue&&t.texStorage2D(s.TEXTURE_2D,et,ee,pe[0].width,pe[0].height);for(let ae=0,ke=pe.length;ae<ke;ae++)$=pe[ae],le?Be&&t.texSubImage2D(s.TEXTURE_2D,ae,0,0,$.width,$.height,fe,F,$.data):t.texImage2D(s.TEXTURE_2D,ae,ee,$.width,$.height,0,fe,F,$.data);A.generateMipmaps=!1}else le?(ue&&t.texStorage2D(s.TEXTURE_2D,et,ee,Q.width,Q.height),Be&&de(A,Q,fe,F)):t.texImage2D(s.TEXTURE_2D,0,ee,Q.width,Q.height,0,fe,F,Q.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){le&&ue&&t.texStorage3D(s.TEXTURE_2D_ARRAY,et,ee,pe[0].width,pe[0].height,Q.depth);for(let ae=0,ke=pe.length;ae<ke;ae++)if($=pe[ae],A.format!==In)if(fe!==null)if(le){if(Be)if(A.layerUpdates.size>0){let Qe=Ih($.width,$.height,A.format,A.type);for(let Se of A.layerUpdates){let yt=$.data.subarray(Se*Qe/$.data.BYTES_PER_ELEMENT,(Se+1)*Qe/$.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ae,0,0,Se,$.width,$.height,1,fe,yt)}}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ae,0,0,0,$.width,$.height,Q.depth,fe,$.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ae,ee,$.width,$.height,Q.depth,0,$.data,0,0);else Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else le?Be&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,ae,0,0,0,$.width,$.height,Q.depth,fe,F,$.data):t.texImage3D(s.TEXTURE_2D_ARRAY,ae,ee,$.width,$.height,Q.depth,0,fe,F,$.data);A.layerUpdates.size>0&&A.clearLayerUpdates()}else{le&&ue&&t.texStorage2D(s.TEXTURE_2D,et,ee,pe[0].width,pe[0].height);for(let ae=0,ke=pe.length;ae<ke;ae++)$=pe[ae],A.format!==In?fe!==null?le?Be&&t.compressedTexSubImage2D(s.TEXTURE_2D,ae,0,0,$.width,$.height,fe,$.data):t.compressedTexImage2D(s.TEXTURE_2D,ae,ee,$.width,$.height,0,$.data):Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):le?Be&&t.texSubImage2D(s.TEXTURE_2D,ae,0,0,$.width,$.height,fe,F,$.data):t.texImage2D(s.TEXTURE_2D,ae,ee,$.width,$.height,0,fe,F,$.data)}else if(A.isDataArrayTexture)if(le){if(ue&&t.texStorage3D(s.TEXTURE_2D_ARRAY,et,ee,Q.width,Q.height,Q.depth),Be)if(A.layerUpdates.size>0){let ae=Ih(Q.width,Q.height,A.format,A.type);for(let ke of A.layerUpdates){let Qe=Q.data.subarray(ke*ae/Q.data.BYTES_PER_ELEMENT,(ke+1)*ae/Q.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,ke,Q.width,Q.height,1,fe,F,Qe)}A.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,fe,F,Q.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,ee,Q.width,Q.height,Q.depth,0,fe,F,Q.data);else if(A.isData3DTexture)le?(ue&&t.texStorage3D(s.TEXTURE_3D,et,ee,Q.width,Q.height,Q.depth),Be&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,fe,F,Q.data)):t.texImage3D(s.TEXTURE_3D,0,ee,Q.width,Q.height,Q.depth,0,fe,F,Q.data);else if(A.isFramebufferTexture){if(ue)if(le)t.texStorage2D(s.TEXTURE_2D,et,ee,Q.width,Q.height);else{let ae=Q.width,ke=Q.height;for(let Qe=0;Qe<et;Qe++)t.texImage2D(s.TEXTURE_2D,Qe,ee,ae,ke,0,fe,F,null),ae>>=1,ke>>=1}}else if(A.isHTMLTexture){if("texElementImage2D"in s){let ae=s.canvas;if(ae.hasAttribute("layoutsubtree")||ae.setAttribute("layoutsubtree","true"),Q.parentNode!==ae){ae.appendChild(Q),u.add(A),ae.onpaint=ke=>{let Qe=ke.changedElements;for(let Se of u)Qe.includes(Se.image)&&(Se.needsUpdate=!0)},ae.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,Q);else{let Qe=s.RGBA,Se=s.RGBA,yt=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,Qe,Se,yt,Q)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(pe.length>0){if(le&&ue){let ae=Xe(pe[0]);t.texStorage2D(s.TEXTURE_2D,et,ee,ae.width,ae.height)}for(let ae=0,ke=pe.length;ae<ke;ae++)$=pe[ae],le?Be&&t.texSubImage2D(s.TEXTURE_2D,ae,0,0,fe,F,$):t.texImage2D(s.TEXTURE_2D,ae,ee,fe,F,$);A.generateMipmaps=!1}else if(le){if(ue){let ae=Xe(Q);t.texStorage2D(s.TEXTURE_2D,et,ee,ae.width,ae.height)}Be&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,fe,F,Q)}else t.texImage2D(s.TEXTURE_2D,0,ee,fe,F,Q);M(A)&&A.mipmapsAutoUpdate===!0&&y(oe),_e.__version=he.version,A.onUpdate&&A.onUpdate(A)}P.__version=A.version}function Ae(P,A,Y){if(A.image.length!==6)return;let oe=at(P,A),ne=A.source;t.bindTexture(s.TEXTURE_CUBE_MAP,P.__webglTexture,s.TEXTURE0+Y);let he=n.get(ne);if(ne.version!==he.__version||oe===!0){t.activeTexture(s.TEXTURE0+Y);let _e=nt.getPrimaries(nt.workingColorSpace),j=A.colorSpace===Mi?null:nt.getPrimaries(A.colorSpace),Q=A.colorSpace===Mi||_e===j?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);let fe=A.isCompressedTexture||A.image[0].isCompressedTexture,F=A.image[0]&&A.image[0].isDataTexture,ee=[];for(let Se=0;Se<6;Se++)!fe&&!F?ee[Se]=v(A.image[Se],!0,i.maxCubemapSize):ee[Se]=F?A.image[Se].image:A.image[Se],ee[Se]=ze(A,ee[Se]);let $=ee[0],pe=r.convert(A.format,A.colorSpace),le=r.convert(A.type),ue=S(A.internalFormat,pe,le,A.normalized,A.colorSpace),Be=A.isVideoTexture!==!0,et=he.__version===void 0||oe===!0,ae=ne.dataReady,ke=b(A,$);tt(s.TEXTURE_CUBE_MAP,A);let Qe;if(A.isDepthTexture){if(ue=_(A.format===vi,A.type),et)if(Be)t.texStorage2D(s.TEXTURE_CUBE_MAP,1,ue,$.width,$.height);else for(let Se=0;Se<6;Se++)t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,ue,$.width,$.height,0,pe,le,null)}else if(fe){Be&&et&&t.texStorage2D(s.TEXTURE_CUBE_MAP,ke,ue,$.width,$.height);for(let Se=0;Se<6;Se++){Qe=ee[Se].mipmaps;for(let yt=0;yt<Qe.length;yt++){let Kt=Qe[yt];A.format!==In?pe!==null?Be?ae&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,yt,0,0,Kt.width,Kt.height,pe,Kt.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,yt,ue,Kt.width,Kt.height,0,Kt.data):Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Be?ae&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,yt,0,0,Kt.width,Kt.height,pe,le,Kt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,yt,ue,Kt.width,Kt.height,0,pe,le,Kt.data)}}}else{if(Qe=A.mipmaps,Be&&et){Qe.length>0&&ke++;let Se=Xe(ee[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,ke,ue,Se.width,Se.height)}for(let Se=0;Se<6;Se++)if(F){Be?ae&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,ee[Se].width,ee[Se].height,pe,le,ee[Se].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,ue,ee[Se].width,ee[Se].height,0,pe,le,ee[Se].data);for(let yt=0;yt<Qe.length;yt++){let Ti=Qe[yt].image[Se].image;Be?ae&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,yt+1,0,0,Ti.width,Ti.height,pe,le,Ti.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,yt+1,ue,Ti.width,Ti.height,0,pe,le,Ti.data)}}else{Be?ae&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,pe,le,ee[Se]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,ue,pe,le,ee[Se]);for(let yt=0;yt<Qe.length;yt++){let Kt=Qe[yt];Be?ae&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,yt+1,0,0,pe,le,Kt.image[Se]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,yt+1,ue,pe,le,Kt.image[Se])}}}M(A)&&A.mipmapsAutoUpdate===!0&&y(s.TEXTURE_CUBE_MAP),he.__version=ne.version,A.onUpdate&&A.onUpdate(A)}P.__version=A.version}function ve(P,A,Y,oe,ne,he){let _e=r.convert(Y.format,Y.colorSpace),j=r.convert(Y.type),Q=S(Y.internalFormat,_e,j,Y.normalized,Y.colorSpace),fe=n.get(A),F=n.get(Y);if(F.__renderTarget=A,!fe.__hasExternalTextures){let ee=Math.max(1,A.width>>he),$=Math.max(1,A.height>>he);ne===s.TEXTURE_3D||ne===s.TEXTURE_2D_ARRAY?t.texImage3D(ne,he,Q,ee,$,A.depth,0,_e,j,null):t.texImage2D(ne,he,Q,ee,$,0,_e,j,null)}t.bindFramebuffer(s.FRAMEBUFFER,P),xe(A)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,oe,ne,F.__webglTexture,0,St(A)):(ne===s.TEXTURE_2D||ne>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,oe,ne,F.__webglTexture,he),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Je(P,A,Y){if(s.bindRenderbuffer(s.RENDERBUFFER,P),A.depthBuffer){let oe=A.depthTexture,ne=oe&&oe.isDepthTexture?oe.type:null,he=_(A.stencilBuffer,ne),_e=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;xe(A)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,St(A),he,A.width,A.height):Y?s.renderbufferStorageMultisample(s.RENDERBUFFER,St(A),he,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,he,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,_e,s.RENDERBUFFER,P)}else{let oe=A.textures;for(let ne=0;ne<oe.length;ne++){let he=oe[ne],_e=r.convert(he.format,he.colorSpace),j=r.convert(he.type),Q=S(he.internalFormat,_e,j,he.normalized,he.colorSpace);xe(A)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,St(A),Q,A.width,A.height):Y?s.renderbufferStorageMultisample(s.RENDERBUFFER,St(A),Q,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,Q,A.width,A.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Oe(P,A,Y){let oe=A.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,P),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ne=n.get(A.depthTexture);ne.__renderTarget=A;let he=oe?A.depthTexture.image[0]:A.depthTexture.image;(!ne.__webglTexture||he.width!==A.width||he.height!==A.height)&&(he.width=A.width,he.height=A.height,A.depthTexture.needsUpdate=!0),oe?me(A.depthTexture,0):te(A.depthTexture,0);let _e=ne.__webglTexture,j=St(A),Q=oe?s.TEXTURE_CUBE_MAP_POSITIVE_X+Y:s.TEXTURE_2D,fe=A.depthTexture.format===vi?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(A.depthTexture.format===di)xe(A)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,fe,Q,_e,0,j):s.framebufferTexture2D(s.FRAMEBUFFER,fe,Q,_e,0);else if(A.depthTexture.format===vi)xe(A)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,fe,Q,_e,0,j):s.framebufferTexture2D(s.FRAMEBUFFER,fe,Q,_e,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function lt(P){let A=n.get(P),Y=P.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==P.depthTexture){let oe=P.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),oe){let ne=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,oe.removeEventListener("dispose",ne)};oe.addEventListener("dispose",ne),A.__depthDisposeCallback=ne}A.__boundDepthTexture=oe}if(P.depthTexture&&!A.__autoAllocateDepthBuffer)if(Y)for(let oe=0;oe<6;oe++)Oe(A.__webglFramebuffer[oe],P,oe);else P.texture.mipmaps.length>0?Oe(A.__webglFramebuffer[0],P,0):Oe(A.__webglFramebuffer,P,0);else if(Y){A.__webglDepthbuffer=[];for(let oe=0;oe<6;oe++)if(t.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer[oe]),A.__webglDepthbuffer[oe]===void 0)A.__webglDepthbuffer[oe]=s.createRenderbuffer(),Je(A.__webglDepthbuffer[oe],P,!1);else{let ne=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,he=A.__webglDepthbuffer[oe];s.bindRenderbuffer(s.RENDERBUFFER,he),s.framebufferRenderbuffer(s.FRAMEBUFFER,ne,s.RENDERBUFFER,he)}}else if(P.texture.mipmaps.length>0?t.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=s.createRenderbuffer(),Je(A.__webglDepthbuffer,P,!1);else{let ne=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,he=A.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,he),s.framebufferRenderbuffer(s.FRAMEBUFFER,ne,s.RENDERBUFFER,he)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function ct(P,A,Y){let oe=n.get(P);A!==void 0&&ve(oe.__webglFramebuffer,P,P.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),Y!==void 0&&lt(P)}function gt(P){let A=P.texture,Y=n.get(P),oe=n.get(A);P.addEventListener("dispose",L),C(P);let ne=P.textures,he=P.isWebGLCubeRenderTarget===!0,_e=ne.length>1;if(_e||(oe.__webglTexture===void 0&&(oe.__webglTexture=s.createTexture()),oe.__version=A.version,o.memory.textures++),he){Y.__webglFramebuffer=[];for(let j=0;j<6;j++)if(A.mipmaps.length>0){Y.__webglFramebuffer[j]=[];for(let Q=0;Q<A.mipmaps.length;Q++)Y.__webglFramebuffer[j][Q]=s.createFramebuffer()}else Y.__webglFramebuffer[j]=s.createFramebuffer()}else{if(A.mipmaps.length>0){Y.__webglFramebuffer=[];for(let j=0;j<A.mipmaps.length;j++)Y.__webglFramebuffer[j]=s.createFramebuffer()}else Y.__webglFramebuffer=s.createFramebuffer();if(_e)for(let j=0,Q=ne.length;j<Q;j++){let fe=n.get(ne[j]);fe.__webglTexture===void 0&&(fe.__webglTexture=s.createTexture(),o.memory.textures++)}if(P.samples>0&&xe(P)===!1){Y.__webglMultisampledFramebuffer=s.createFramebuffer(),Y.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let j=0;j<ne.length;j++){let Q=ne[j];Y.__webglColorRenderbuffer[j]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,Y.__webglColorRenderbuffer[j]);let fe=r.convert(Q.format,Q.colorSpace),F=r.convert(Q.type),ee=S(Q.internalFormat,fe,F,Q.normalized,Q.colorSpace,P.isXRRenderTarget===!0),$=St(P);s.renderbufferStorageMultisample(s.RENDERBUFFER,$,ee,P.width,P.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+j,s.RENDERBUFFER,Y.__webglColorRenderbuffer[j])}s.bindRenderbuffer(s.RENDERBUFFER,null),P.depthBuffer&&(Y.__webglDepthRenderbuffer=s.createRenderbuffer(),Je(Y.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(he){t.bindTexture(s.TEXTURE_CUBE_MAP,oe.__webglTexture),tt(s.TEXTURE_CUBE_MAP,A);for(let j=0;j<6;j++)if(A.mipmaps.length>0)for(let Q=0;Q<A.mipmaps.length;Q++)ve(Y.__webglFramebuffer[j][Q],P,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+j,Q);else ve(Y.__webglFramebuffer[j],P,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0);M(A)?y(s.TEXTURE_CUBE_MAP):A.mipmaps.length>0&&s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_MAX_LEVEL,A.mipmaps.length-1),t.unbindTexture()}else if(_e){for(let j=0,Q=ne.length;j<Q;j++){let fe=ne[j],F=n.get(fe),ee=s.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ee=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ee,F.__webglTexture),tt(ee,fe),ve(Y.__webglFramebuffer,P,fe,s.COLOR_ATTACHMENT0+j,ee,0),M(fe)&&y(ee)}t.unbindTexture()}else{let j=s.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(j=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(j,oe.__webglTexture),tt(j,A),A.mipmaps.length>0)for(let Q=0;Q<A.mipmaps.length;Q++)ve(Y.__webglFramebuffer[Q],P,A,s.COLOR_ATTACHMENT0,j,Q);else ve(Y.__webglFramebuffer,P,A,s.COLOR_ATTACHMENT0,j,0);M(A)?y(j):A.mipmaps.length>0&&s.texParameteri(j,s.TEXTURE_MAX_LEVEL,A.mipmaps.length-1),t.unbindTexture()}P.depthBuffer&&lt(P)}function z(P){let A=P.textures;for(let Y=0,oe=A.length;Y<oe;Y++){let ne=A[Y];if(M(ne)&&ne.mipmapsAutoUpdate===!0){let he=T(P),_e=n.get(ne).__webglTexture;t.bindTexture(he,_e),y(he),t.unbindTexture()}}}let Ot=[];function rt(P){if(P.samples>0){if(xe(P)===!1){let A=P.textures,Y=P.width,oe=P.height,ne=s.COLOR_BUFFER_BIT,he=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,_e=n.get(P),j=A.length>1;if(j)for(let fe=0;fe<A.length;fe++)t.bindFramebuffer(s.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+fe,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,_e.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+fe,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,_e.__webglMultisampledFramebuffer),P.texture.mipmaps.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,_e.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,_e.__webglFramebuffer);for(let fe=0;fe<A.length;fe++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(ne|=s.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(ne|=s.STENCIL_BUFFER_BIT)),j){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,_e.__webglColorRenderbuffer[fe]);let F=n.get(A[fe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,F,0)}s.blitFramebuffer(0,0,Y,oe,0,0,Y,oe,ne,s.NEAREST),l===!0&&(Ot.length=0,Ot.push(s.COLOR_ATTACHMENT0+fe),P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&Ot.push(he),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Ot))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),j)for(let fe=0;fe<A.length;fe++){t.bindFramebuffer(s.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+fe,s.RENDERBUFFER,_e.__webglColorRenderbuffer[fe]);let F=n.get(A[fe]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,_e.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+fe,s.TEXTURE_2D,F,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,_e.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&l){let A=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[A])}}}function St(P){return Math.min(i.maxSamples,P.samples)}function xe(P){let A=n.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Dt(P){let A=o.render.frame;h.get(P)!==A&&(h.set(P,A),P.update())}function ze(P,A){let Y=P.colorSpace,oe=P.format,ne=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||Y!==cn&&Y!==Mi&&(nt.getTransfer(Y)===_t?(oe!==In||ne!==yn)&&Ne("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):He("WebGLTextures: Unsupported texture color space:",Y)),A}function Xe(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=se,this.resetTextureUnits=V,this.getTextureUnits=H,this.setTextureUnits=J,this.setTexture2D=te,this.setTexture2DArray=Me,this.setTexture3D=Ue,this.setTextureCube=me,this.rebindTextures=ct,this.setupRenderTarget=gt,this.updateRenderTargetMipmap=z,this.updateMultisampleRenderTarget=rt,this.setupDepthRenderbuffer=lt,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=xe,this.dispose=O}function fv(s,e){function t(n,i=Mi){let r,o=nt.getTransfer(i);if(n===yn)return s.UNSIGNED_BYTE;if(n===Wa)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Xa)return s.UNSIGNED_SHORT_5_5_5_1;if(n===dh)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===fh)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===hh)return s.BYTE;if(n===uh)return s.SHORT;if(n===or)return s.UNSIGNED_SHORT;if(n===Ha)return s.INT;if(n===kn)return s.UNSIGNED_INT;if(n===Tn)return s.FLOAT;if(n===zn)return s.HALF_FLOAT;if(n===ph)return s.ALPHA;if(n===mh)return s.RGB;if(n===In)return s.RGBA;if(n===di)return s.DEPTH_COMPONENT;if(n===vi)return s.DEPTH_STENCIL;if(n===qa)return s.RED;if(n===Ya)return s.RED_INTEGER;if(n===Fi)return s.RG;if(n===Ka)return s.RG_INTEGER;if(n===Za)return s.RGBA_INTEGER;if(n===fo||n===po||n===mo||n===go)if(o===_t)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===fo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===po)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===mo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===go)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===fo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===po)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===mo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===go)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ja||n===$a||n===ja||n===Qa)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ja)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===$a)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ja)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Qa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===el||n===tl||n===nl||n===il||n===sl||n===xo||n===rl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===el||n===tl)return o===_t?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===nl)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===il)return r.COMPRESSED_R11_EAC;if(n===sl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===xo)return r.COMPRESSED_RG11_EAC;if(n===rl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===ol||n===al||n===ll||n===cl||n===hl||n===ul||n===dl||n===fl||n===pl||n===ml||n===gl||n===xl||n===_l||n===yl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ol)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===al)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ll)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===cl)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===hl)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ul)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===dl)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===fl)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===pl)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ml)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===gl)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===xl)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===_l)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===yl)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===vl||n===Ml||n===Sl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===vl)return o===_t?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ml)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Sl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===bl||n===Tl||n===_o||n===wl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===bl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Tl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===_o)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===wl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ms?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}var pv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,mv=`
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

}`,kh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new qr(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Yn({vertexShader:pv,fragmentShader:mv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Le(new dn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},zh=class extends Xn{constructor(e,t){super();let n=this,i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,p=null,x=typeof XRWebGLBinding<"u",m=new kh,g={},v=t.getContextAttributes(),M=null,y=null,T=[],S=[],_=new re,b=null,C=null,w=new Vt;w.viewport=new vt;let R=new Vt;R.viewport=new vt;let L=[w,R],B=new ka,I=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let te=T[X];return te===void 0&&(te=new Vs,T[X]=te),te.getTargetRaySpace()},this.getControllerGrip=function(X){let te=T[X];return te===void 0&&(te=new Vs,T[X]=te),te.getGripSpace()},this.getHand=function(X){let te=T[X];return te===void 0&&(te=new Vs,T[X]=te),te.getHandSpace()};function G(X){let te=S.indexOf(X.inputSource);if(te===-1)return;let Me=T[te];Me!==void 0&&(Me.update(X.inputSource,X.frame,c||o),Me.dispatchEvent({type:X.type,data:X.inputSource}))}function D(){i.removeEventListener("select",G),i.removeEventListener("selectstart",G),i.removeEventListener("selectend",G),i.removeEventListener("squeeze",G),i.removeEventListener("squeezestart",G),i.removeEventListener("squeezeend",G),i.removeEventListener("end",D),i.removeEventListener("inputsourceschange",W);for(let X=0;X<T.length;X++){let te=S[X];te!==null&&(S[X]=null,T[X].disconnect(te))}I=null,O=null,m.reset();for(let X in g)delete g[X];if(e.setRenderTarget(M),f=null,d=null,u=null,i=null,y=null,se.stop(),n.isPresenting=!1,e.setPixelRatio(b),e.setSize(_.width,_.height,!1),C!==null){let X=C.camera;X.fov=C.fov,X.zoom=C.zoom,X.updateProjectionMatrix(),C=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&Ne("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,n.isPresenting===!0&&Ne("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(i,t)),u},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(X){if(i=X,i!==null){if(M=e.getRenderTarget(),i.addEventListener("select",G),i.addEventListener("selectstart",G),i.addEventListener("selectend",G),i.addEventListener("squeeze",G),i.addEventListener("squeezestart",G),i.addEventListener("squeezeend",G),i.addEventListener("end",D),i.addEventListener("inputsourceschange",W),v.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(_),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let Me=null,Ue=null,me=null;v.depth&&(me=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Me=v.stencil?vi:di,Ue=v.stencil?ms:kn);let Fe={colorFormat:t.RGBA8,depthFormat:me,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(Fe),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new Sn(d.textureWidth,d.textureHeight,{format:In,type:yn,depthTexture:new pi(d.textureWidth,d.textureHeight,Ue,void 0,void 0,void 0,void 0,void 0,void 0,Me),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let Me={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,Me),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Sn(f.framebufferWidth,f.framebufferHeight,{format:In,type:yn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),se.setContext(i),se.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function W(X){for(let te=0;te<X.removed.length;te++){let Me=X.removed[te],Ue=S.indexOf(Me);Ue>=0&&(S[Ue]=null,T[Ue].disconnect(Me))}for(let te=0;te<X.added.length;te++){let Me=X.added[te],Ue=S.indexOf(Me);if(Ue===-1){for(let Fe=0;Fe<T.length;Fe++)if(Fe>=S.length){S.push(Me),Ue=Fe;break}else if(S[Fe]===null){S[Fe]=Me,Ue=Fe;break}if(Ue===-1)break}let me=T[Ue];me&&me.connect(Me)}}function N(X,te){te===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(te.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(i===null)return;let te=X.near,Me=X.far;m.texture!==null&&(m.depthNear>0&&(te=m.depthNear),m.depthFar>0&&(Me=m.depthFar)),B.near=R.near=w.near=te,B.far=R.far=w.far=Me,(I!==B.near||O!==B.far)&&(i.updateRenderState({depthNear:B.near,depthFar:B.far}),I=B.near,O=B.far),B.layers.mask=X.layers.mask|6,w.layers.mask=B.layers.mask&-5,R.layers.mask=B.layers.mask&-3;let Ue=X.parent,me=B.cameras;N(B,Ue);for(let Fe=0;Fe<me.length;Fe++)N(me[Fe],Ue);B.projectionMatrix.copy(w.projectionMatrix),B.projectionMatrixInverse.copy(w.projectionMatrixInverse),C===null&&X.isPerspectiveCamera&&(C={camera:X,fov:X.fov,zoom:X.zoom}),V(X,B,Ue)};function V(X,te,Me){Me===null?X.matrix.copy(te.matrixWorld):(X.matrix.copy(Me.matrixWorld),X.matrix.invert(),X.matrix.multiply(te.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(te.projectionMatrix),X.projectionMatrixInverse.copy(te.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=ji*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(X){l=X,d!==null&&(d.fixedFoveation=X),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=X)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(B)},this.getCameraTexture=function(X){return g[X]};let H=null;function J(X,te){if(h=te.getViewerPose(c||o),p=te,h!==null){let Me=h.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let Ue=!1;Me.length!==B.cameras.length&&(B.cameras.length=0,Ue=!0);for(let Ve=0;Ve<Me.length;Ve++){let tt=Me[Ve],at=null;if(f!==null)at=f.getViewport(tt);else{let de=u.getViewSubImage(d,tt);at=de.viewport,Ve===0&&(e.setRenderTargetTextures(y,de.colorTexture,de.depthStencilTexture),e.setRenderTarget(y))}let ie=L[Ve];ie===void 0&&(ie=new Vt,ie.layers.enable(Ve),ie.viewport=new vt,L[Ve]=ie),ie.matrix.fromArray(tt.transform.matrix),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.projectionMatrix.fromArray(tt.projectionMatrix),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert(),ie.viewport.set(at.x,at.y,at.width,at.height),Ve===0&&(B.matrix.copy(ie.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),Ue===!0&&B.cameras.push(ie)}let me=i.enabledFeatures;if(me&&me.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&x){u=n.getBinding();let Ve=u.getDepthInformation(Me[0]);Ve&&Ve.isValid&&Ve.texture&&m.init(Ve,i.renderState)}if(me&&me.includes("camera-access")&&x){e.state.unbindTexture(),u=n.getBinding();for(let Ve=0;Ve<Me.length;Ve++){let tt=Me[Ve].camera;if(tt){let at=g[tt];at||(at=new qr,g[tt]=at);let ie=u.getCameraImage(tt);at.sourceTexture=ie}}}}for(let Me=0;Me<T.length;Me++){let Ue=S[Me],me=T[Me];Ue!==null&&me!==void 0&&me.update(Ue,te,c||o)}H&&H(X,te),te.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:te}),p=null}let se=new $f;se.setAnimationLoop(J),this.setAnimationLoop=function(X){H=X},this.dispose=function(){}}},gv=new qe,ap=new Ye;ap.set(-1,0,0,0,1,0,0,0,1);function xv(s,e){function t(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,Eh(s)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function i(m,g,v,M,y){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(m,g),u(m,g)):g.isMeshPhongMaterial?(r(m,g),h(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(m,g),d(m,g),g.isMeshPhysicalMaterial&&f(m,g,y)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),x(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?l(m,g,v,M):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,t(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===fn&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,t(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===fn&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,t(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,t(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let v=e.get(g),M=v.envMap,y=v.envMapRotation;M&&(m.envMap.value=M,m.envMapRotation.value.setFromMatrix4(gv.makeRotationFromEuler(y)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(ap),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,v,M){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*v,m.scale.value=M*.5,g.map&&(m.map.value=g.map,t(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function u(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function d(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function f(m,g,v){m.ior.value=g.ior,g.diffuseRoughness>0&&(m.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=g.diffuseRoughnessMap,t(g.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===fn&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function x(m,g){let v=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function _v(s,e,t,n){let i={},r={};function o(v,M){let y=M.program;n.uniformBlockBinding(v,y,i[v.id])}function a(v,M){let y=i[v.id];y===void 0&&(p(v),y=l(v),i[v.id]=y,v.addEventListener("dispose",m));let T=M.program;n.updateUBOMapping(v,T);let S=e.render.frame;r[v.id]!==S&&(c(v),r[v.id]=S)}function l(v){let M=s.createBuffer(),y=v.__size,T=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,M),s.bufferData(s.UNIFORM_BUFFER,y,T),s.bindBuffer(s.UNIFORM_BUFFER,null),M}function c(v){let M=i[v.id],y=v.uniforms,T=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,M);for(let S=0,_=y.length;S<_;S++){let b=y[S];if(Array.isArray(b))for(let C=0,w=b.length;C<w;C++)h(b[C],S,C,T);else h(b,S,0,T)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function h(v,M,y,T){if(d(v,M,y,T)===!0){let S=v.__offset,_=v.value;if(Array.isArray(_)){let b=0;for(let C=0;C<_.length;C++){let w=_[C],R=x(w,!0);u(w,v.__data,b),b+=R.storage/Float32Array.BYTES_PER_ELEMENT}}else u(_,v.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,S,v.__data)}}function u(v,M,y){typeof v=="number"||typeof v=="boolean"?M[y]=v:v.isMatrix3?(M[y]=v.elements[0],M[y+1]=v.elements[1],M[y+2]=v.elements[2],M[y+3]=0,M[y+4]=v.elements[3],M[y+5]=v.elements[4],M[y+6]=v.elements[5],M[y+7]=0,M[y+8]=v.elements[6],M[y+9]=v.elements[7],M[y+10]=v.elements[8],M[y+11]=0):ArrayBuffer.isView(v)?M.set(v.subarray(0,M.length-y),y):v.toArray(M,y)}function d(v,M,y,T){let S=v.value,_=M+"_"+y;if(Array.isArray(S)){T[_]===void 0&&(T[_]=[]);let b=T[_],C=!1;for(let w=0;w<S.length;w++)f(S[w],b,w)===!0&&(C=!0);return C}return f(S,T,_)}function f(v,M,y){if(M[y]===void 0)return typeof v=="number"||typeof v=="boolean"?M[y]=v:ArrayBuffer.isView(v)?M[y]=v.slice():M[y]=v.clone(),!0;{let T=M[y];if(typeof v=="number"||typeof v=="boolean"){if(T!==v)return M[y]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(T.equals(v)===!1)return T.copy(v),!0}}return!1}function p(v){let M=v.uniforms,y=0,T=16;for(let _=0,b=M.length;_<b;_++){let C=Array.isArray(M[_])?M[_]:[M[_]];for(let w=0,R=C.length;w<R;w++){let L=C[w],B=Array.isArray(L.value)?L.value:[L.value],I=Array.isArray(M[_])||Array.isArray(L.value),O=y;for(let D=0,W=B.length;D<W;D++){let N=B[D],V=x(N,I),H=y%T,J=H%V.boundary,se=H+J;y+=J,se!==0&&T-se<V.storage&&(y+=T-se),D===0&&(O=y),y+=V.storage}let G=L.type==="int"?Int32Array:L.type==="uint"?Uint32Array:Float32Array;L.__data=new G((y-O)/Float32Array.BYTES_PER_ELEMENT),L.__offset=O}}let S=y%T;return S>0&&(y+=T-S),v.__size=y,v.__cache={},this}function x(v,M){let y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=16,y.storage=48):v.isMatrix4?(y.boundary=16,y.storage=64):v.isTexture?Ne("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(y.boundary=16,y.storage=v.byteLength):Ne("WebGLRenderer: Unsupported uniform value type.",v),M===!0&&(y.boundary=16,y.storage=Math.ceil(y.storage/16)*16),y}function m(v){let M=v.target;M.removeEventListener("dispose",m),s.deleteBuffer(i[M.id]),delete i[M.id],delete r[M.id]}function g(){for(let v in i)s.deleteBuffer(i[v]);i={},r={}}return{bind:o,update:a,dispose:g}}var yv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),jn=null;function vv(){return jn===null&&(jn=new qs(yv,16,16,Fi,zn),jn.name="DFG_LUT",jn.minFilter=Ht,jn.magFilter=Ht,jn.wrapS=En,jn.wrapT=En,jn.generateMipmaps=!1,jn.needsUpdate=!0),jn}var Il=class{constructor(e={}){let{canvas:t=_f(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=yn}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let x=f,m=new Set([Za,Ka,Ya]),g=new Set([yn,kn,or,ms,Wa,Xa]),v=new Uint32Array(4),M=new Int32Array(4),y={textures:[],min:[],max:[],resolution:[]},T=null,S=null,_=[],b=[],C=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=$n,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let w=this,R=!1,L=null,B=null,I=null,O=null;this._outputColorSpace=Ke;let G=0,D=0,W=null,N=-1,V=null,H=new vt,J=new vt,se=null,X=new Re(0),te=0,Me=t.width,Ue=t.height,me=1,Fe=null,Mt=null,Ve=new vt(0,0,Me,Ue),tt=new vt(0,0,Me,Ue),at=!1,ie=new Di,de=new va,ce=!1,Ae=!1,ve=new qe,Je=new U,Oe=new vt,lt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ct=!1;function gt(){return W===null?me:1}let z=n;function Ot(E,k){return t.getContext(E,k)}let rt,St,xe,Dt,ze,Xe,P,A,Y,oe,ne,he,_e,j,Q,fe,F,ee,$,pe,le,ue,Be;try{let E={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",ke,!1),t.addEventListener("webglcontextrestored",Qe,!1),t.addEventListener("webglcontextcreationerror",Se,!1),z===null){let k="webgl2";if(z=Ot(k,E),z===null)throw Ot(k)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}et()}catch(E){throw t.removeEventListener("webglcontextlost",ke,!1),t.removeEventListener("webglcontextrestored",Qe,!1),t.removeEventListener("webglcontextcreationerror",Se,!1),He("WebGLRenderer: "+E.message),E}function et(){rt=new P_(z),rt.init(),le=new fv(z,rt),St=new v_(z,rt,e,le),xe=new uv(z,rt),St.reversedDepthBuffer&&d&&xe.buffers.depth.setReversed(!0),B=z.createFramebuffer(),I=z.createFramebuffer(),O=z.createFramebuffer(),Dt=new N_(z),ze=new $y,Xe=new dv(z,rt,xe,ze,St,le,Dt),P=new I_(w),A=new Fg(z),ue=new __(z,A),Y=new L_(z,A,Dt,ue),oe=new F_(z,Y,A,ue,Dt),ee=new U_(z,St,Xe),Q=new M_(ze),ne=new Jy(w,P,rt,St,ue,Q),he=new xv(w,ze),_e=new Qy,j=new rv(rt),F=new x_(w,P,xe,oe,p,l),fe=new hv(w,oe,St),Be=new _v(z,Dt,St,xe),$=new y_(z,rt,Dt),pe=new D_(z,rt,Dt),Dt.programs=ne.programs,w.capabilities=St,w.extensions=rt,w.properties=ze,w.renderLists=_e,w.shadowMap=fe,w.state=xe,w.info=Dt}x!==yn&&(C=new B_(x,t.width,t.height,a,i,r));let ae=new zh(w,z);this.xr=ae,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){let E=rt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=rt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return me},this.setPixelRatio=function(E){E!==void 0&&(me=E,this.setSize(Me,Ue,!1))},this.getSize=function(E){return E.set(Me,Ue)},this.setSize=function(E,k,Z=!0){if(ae.isPresenting){Ne("WebGLRenderer: Can't change size while VR device is presenting.");return}Me=E,Ue=k,t.width=Math.floor(E*me),t.height=Math.floor(k*me),Z===!0&&(t.style.width=E+"px",t.style.height=k+"px"),C!==null&&C.setSize(t.width,t.height),this.setViewport(0,0,E,k)},this.getDrawingBufferSize=function(E){return E.set(Me*me,Ue*me).floor()},this.setDrawingBufferSize=function(E,k,Z){Me=E,Ue=k,me=Z,t.width=Math.floor(E*Z),t.height=Math.floor(k*Z),this.setViewport(0,0,E,k)},this.setEffects=function(E){if(x===yn){He("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let k=0;k<E.length;k++)if(E[k].isOutputPass===!0){Ne("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}C.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(H)},this.getViewport=function(E){return E.copy(Ve)},this.setViewport=function(E,k,Z,q){E.isVector4?Ve.set(E.x,E.y,E.z,E.w):Ve.set(E,k,Z,q),xe.viewport(H.copy(Ve).multiplyScalar(gt()).round())},this.getScissor=function(E){return E.copy(tt)},this.setScissor=function(E,k,Z,q){E.isVector4?tt.set(E.x,E.y,E.z,E.w):tt.set(E,k,Z,q),xe.scissor(J.copy(tt).multiplyScalar(gt()).round())},this.getScissorTest=function(){return at},this.setScissorTest=function(E){xe.setScissorTest(at=E)},this.setOpaqueSort=function(E){Fe=E},this.setTransparentSort=function(E){Mt=E},this.getClearColor=function(E){return E.copy(F.getClearColor())},this.setClearColor=function(){F.setClearColor(...arguments)},this.getClearAlpha=function(){return F.getClearAlpha()},this.setClearAlpha=function(){F.setClearAlpha(...arguments)},this.clear=function(E=!0,k=!0,Z=!0){let q=0;if(E){let K=!1;if(W!==null){let ye=W.texture.format;K=m.has(ye)}if(K){let ye=W.texture.type,Ee=g.has(ye),ge=F.getClearColor(),Te=F.getClearAlpha(),De=ge.r,Ze=ge.g,ht=ge.b;Ee?(v[0]=De,v[1]=Ze,v[2]=ht,v[3]=Te,z.clearBufferuiv(z.COLOR,0,v)):(M[0]=De,M[1]=Ze,M[2]=ht,M[3]=Te,z.clearBufferiv(z.COLOR,0,M))}else q|=z.COLOR_BUFFER_BIT}k&&(q|=z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Z&&(q|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),q!==0&&z.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),L=E},this.dispose=function(){t.removeEventListener("webglcontextlost",ke,!1),t.removeEventListener("webglcontextrestored",Qe,!1),t.removeEventListener("webglcontextcreationerror",Se,!1),F.dispose(),_e.dispose(),j.dispose(),Xe.dispose(),ze.dispose(),P.dispose(),oe.dispose(),Y.dispose(),ue.dispose(),Be.dispose(),ne.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",Uu),ae.removeEventListener("sessionend",Fu),ki.stop()};function ke(E){E.preventDefault(),Pr("WebGLRenderer: Context Lost."),R=!0}function Qe(){Pr("WebGLRenderer: Context Restored."),R=!1;let E=Dt.autoReset,k=fe.enabled,Z=fe.autoUpdate,q=fe.needsUpdate,K=fe.type;et(),Dt.autoReset=E,fe.enabled=k,fe.autoUpdate=Z,fe.needsUpdate=q,fe.type=K}function Se(E){He("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function yt(E){let k=E.target;k.removeEventListener("dispose",yt),Kt(k)}function Kt(E){Ti(E),ze.remove(E)}function Ti(E){let k=ze.get(E).programs;k!==void 0&&(k.forEach(function(Z){ne.releaseProgram(Z)}),E.isShaderMaterial&&ne.releaseShaderCache(E))}this.renderBufferDirect=function(E,k,Z,q,K,ye){k===null&&(k=lt);let Ee=K.isMesh&&K.matrixWorld.determinantAffine()<0,ge=sm(E,k,Z,q,K);xe.setMaterial(q,Ee);let Te=Z.index,De=1;if(q.wireframe===!0){if(Te=Y.getWireframeAttribute(Z),Te===void 0)return;De=2}let Ze=Z.drawRange,ht=Z.attributes.position,Ie=Ze.start*De,ut=(Ze.start+Ze.count)*De;ye!==null&&(Ie=Math.max(Ie,ye.start*De),ut=Math.min(ut,(ye.start+ye.count)*De)),Te!==null?(Ie=Math.max(Ie,0),ut=Math.min(ut,Te.count)):ht!=null&&(Ie=Math.max(Ie,0),ut=Math.min(ut,ht.count));let Bt=ut-Ie;if(Bt<0||Bt===1/0)return;ue.setup(K,q,ge,Z,Te);let wt,bt=$;if(Te!==null&&(wt=A.get(Te),bt=pe,bt.setIndex(wt)),K.isMesh)q.wireframe===!0?(xe.setLineWidth(q.wireframeLinewidth*gt()),bt.setMode(z.LINES)):bt.setMode(z.TRIANGLES);else if(K.isLine){let en=q.linewidth;en===void 0&&(en=1),xe.setLineWidth(en*gt()),K.isLineSegments?bt.setMode(z.LINES):K.isLineLoop?bt.setMode(z.LINE_LOOP):bt.setMode(z.LINE_STRIP)}else K.isPoints?bt.setMode(z.POINTS):K.isSprite&&bt.setMode(z.TRIANGLES);if(K.isBatchedMesh)if(rt.get("WEBGL_multi_draw"))bt.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{let en=K._multiDrawStarts,Pe=K._multiDrawCounts,an=K._multiDrawCount,xt=Te?A.get(Te).bytesPerElement:1,zi=ze.get(q).currentProgram.getUniforms();for(let tn=0;tn<an;tn++)zi.setValue(z,"_gl_DrawID",tn),bt.render(en[tn]/xt,Pe[tn])}else if(K.isInstancedMesh)bt.renderInstances(Ie,Bt,K.count);else if(Z.isInstancedBufferGeometry){let en=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,Pe=Math.min(Z.instanceCount,en);bt.renderInstances(Ie,Bt,Pe)}else bt.render(Ie,Bt)};function Nu(E,k,Z,q){L!==null&&E.isNodeMaterial&&L.setObject(q,E),ce===!0&&Q.setState(E,Z,!1),E.transparent===!0&&E.side===We&&E.forceSinglePass===!1?(E.side=fn,E.needsUpdate=!0,mr(E,k,q),E.side=Jn,E.needsUpdate=!0,mr(E,k,q),E.side=We):mr(E,k,q)}this.compile=function(E,k,Z=null){Z===null&&(Z=E),L!==null&&L.renderStart(E,k,Z),S=j.get(Z),S.init(k),b.push(S),Z.traverseVisible(function(K){K.isLight&&K.layers.test(k.layers)&&(S.pushLight(K),K.castShadow&&S.pushShadow(K))}),E!==Z&&E.traverseVisible(function(K){K.isLight&&K.layers.test(k.layers)&&(S.pushLight(K),K.castShadow&&S.pushShadow(K))}),S.setupLights(),L!==null&&L.updateLights(S.state.lightsArray),Ae=this.localClippingEnabled,ce=Q.init(this.clippingPlanes,Ae),ce===!0&&Q.setGlobalState(this.clippingPlanes,k),L!==null&&fe.render(S.state.shadowsArray,Z,k);let q=new Set;return E.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;let ye=K.material;if(ye)if(Array.isArray(ye))for(let Ee=0;Ee<ye.length;Ee++){let ge=ye[Ee];Nu(ge,Z,k,K),q.add(ge)}else Nu(ye,Z,k,K),q.add(ye)}),S=b.pop(),L!==null&&L.renderEnd(),q},this.compileAsync=function(E,k,Z=null){let q=this.compile(E,k,Z);return new Promise(K=>{function ye(){if(q.forEach(function(Ee){let Te=ze.get(Ee).currentProgram;(Te===void 0||Te.isReady())&&q.delete(Ee)}),q.size===0){K(E);return}setTimeout(ye,10)}rt.get("KHR_parallel_shader_compile")!==null?ye():setTimeout(ye,10)})};let oc=null;function nm(E){oc&&oc(E)}function Uu(){ki.stop()}function Fu(){ki.start()}let ki=new $f;ki.setAnimationLoop(nm),typeof self<"u"&&ki.setContext(self),this.setAnimationLoop=function(E){oc=E,ae.setAnimationLoop(E),E===null?ki.stop():ki.start()},ae.addEventListener("sessionstart",Uu),ae.addEventListener("sessionend",Fu),this.render=function(E,k){if(k!==void 0&&k.isCamera!==!0){He("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;L!==null&&L.renderStart(E,k);let Z=ae.enabled===!0&&ae.isPresenting===!0,q=C!==null&&(W===null||Z)&&C.begin(w,W);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(C===null||C.isCompositing()===!1)&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(k),k=ae.getCamera()),E.isScene===!0&&E.onBeforeRender(w,E,k,W),S=j.get(E,b.length),S.init(k),S.state.textureUnits=Xe.getTextureUnits(),b.push(S),ve.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),k.isArrayCamera?de.setFromArrayCamera(k):ie.setFromProjectionMatrix(ve,Rn,k.reversedDepth),Ae=this.localClippingEnabled,ce=Q.init(this.clippingPlanes,Ae),T=_e.get(E,_.length),T.init(),_.push(T),this.info.render.frame++,ae.enabled===!0&&ae.isPresenting===!0){let Ee=w.xr.getDepthSensingMesh();Ee!==null&&ac(Ee,k,-1/0,w.sortObjects)}ac(E,k,0,w.sortObjects),T.finish(),L!==null&&L.updateLights(S.state.lightsArray),w.sortObjects===!0&&T.sort(Fe,Mt),ct=ae.enabled===!1||ae.isPresenting===!1||ae.hasDepthSensing()===!1,ct&&F.addToRenderList(T,E),this.info.autoReset===!0&&this.info.reset(),ce===!0&&Q.beginShadows();let K=S.state.shadowsArray;if(fe.render(K,E,k),ce===!0&&Q.endShadows(),(q&&C.hasRenderPass())===!1){let Ee=T.opaque,ge=T.transmissive;if(S.setupLights(),k.isArrayCamera){let Te=k.cameras;if(ge.length>0)for(let De=0,Ze=Te.length;De<Ze;De++){let ht=Te[De];Bu(Ee,ge,E,ht)}ct&&F.render(E);for(let De=0,Ze=Te.length;De<Ze;De++){let ht=Te[De];Ou(T,E,ht,ht.viewport)}}else ge.length>0&&Bu(Ee,ge,E,k),ct&&F.render(E),Ou(T,E,k)}W!==null&&D===0&&(Xe.updateMultisampleRenderTarget(W),Xe.updateRenderTargetMipmap(W)),q&&C.end(w),E.isScene===!0&&E.onAfterRender(w,E,k),ue.resetDefaultState(),N=-1,V=null,b.pop(),b.length>0?(S=b[b.length-1],Xe.setTextureUnits(S.state.textureUnits),ce===!0&&Q.setGlobalState(w.clippingPlanes,S.state.camera)):S=null,_.pop(),_.length>0?T=_[_.length-1]:T=null,L!==null&&L.renderEnd()};function ac(E,k,Z,q){if(E.visible===!1)return;if(E.layers.test(k.layers)){if(E.isGroup)Z=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(k);else if(E.isLight)S.pushLight(E),E.castShadow&&S.pushShadow(E);else if(E.isSprite){let Ee=k.isArrayCamera?de:ie;if(!E.frustumCulled||E.intersectsFrustum(Ee)){q&&Oe.setFromMatrixPosition(E.matrixWorld).applyMatrix4(ve);let ge=oe.update(E),Te=E.material;Te.visible&&T.push(E,ge,Te,Z,Oe.z,null,k)}}else if(E.isMesh||E.isLine||E.isPoints){let Ee=k.isArrayCamera?de:ie;if(!E.frustumCulled||E.intersectsFrustum(Ee)){let ge=oe.update(E),Te=E.material;if(q&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Oe.copy(E.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),Oe.copy(ge.boundingSphere.center)),Oe.applyMatrix4(E.matrixWorld).applyMatrix4(ve)),Array.isArray(Te)){let De=ge.groups;for(let Ze=0,ht=De.length;Ze<ht;Ze++){let Ie=De[Ze],ut=Te[Ie.materialIndex];ut&&ut.visible&&T.push(E,ge,ut,Z,Oe.z,Ie,k)}}else Te.visible&&T.push(E,ge,Te,Z,Oe.z,null,k)}}}let ye=E.children;for(let Ee=0,ge=ye.length;Ee<ge;Ee++)ac(ye[Ee],k,Z,q)}function Ou(E,k,Z,q){let{opaque:K,transmissive:ye,transparent:Ee}=E;S.setupLightsView(Z),ce===!0&&Q.setGlobalState(w.clippingPlanes,Z),q&&xe.viewport(H.copy(q)),K.length>0&&Lo(K,k,Z),ye.length>0&&Lo(ye,k,Z),Ee.length>0&&Lo(Ee,k,Z),xe.buffers.depth.setTest(!0),xe.buffers.depth.setMask(!0),xe.buffers.color.setMask(!0),xe.setPolygonOffset(!1)}function Bu(E,k,Z,q){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[q.id]===void 0){let Ie=rt.has("EXT_color_buffer_half_float")||rt.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[q.id]=new Sn(1,1,{generateMipmaps:!0,type:Ie?zn:yn,minFilter:Cn,samples:Math.max(4,St.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:nt.workingColorSpace})}let ye=S.state.transmissionRenderTarget[q.id],Ee=q.viewport||H;ye.setSize(Ee.z*w.transmissionResolutionScale,Ee.w*w.transmissionResolutionScale);let ge=w.getRenderTarget(),Te=w.getActiveCubeFace(),De=w.getActiveMipmapLevel();w.setRenderTarget(ye),w.getClearColor(X),te=w.getClearAlpha(),te<1&&w.setClearColor(16777215,.5),w.clear(),ct&&F.render(Z);let Ze=w.toneMapping;w.toneMapping=$n;let ht=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),S.setupLightsView(q),ce===!0&&Q.setGlobalState(w.clippingPlanes,q),Lo(E,Z,q),Xe.updateMultisampleRenderTarget(ye),Xe.updateRenderTargetMipmap(ye),rt.has("WEBGL_multisampled_render_to_texture")===!1){let Ie=!1;for(let ut=0,Bt=k.length;ut<Bt;ut++){let wt=k[ut],{object:bt,geometry:en,material:Pe,group:an}=wt;if(Pe.side===We&&bt.layers.test(q.layers)){let xt=Pe.side;Pe.side=fn,Pe.needsUpdate=!0,ku(bt,Z,q,en,Pe,an),Pe.side=xt,Pe.needsUpdate=!0,Ie=!0}}Ie===!0&&(Xe.updateMultisampleRenderTarget(ye),Xe.updateRenderTargetMipmap(ye))}w.setRenderTarget(ge,Te,De),w.setClearColor(X,te),ht!==void 0&&(q.viewport=ht),w.toneMapping=Ze}function Lo(E,k,Z){let q=k.isScene===!0?k.overrideMaterial:null;for(let K=0,ye=E.length;K<ye;K++){let Ee=E[K],{object:ge,geometry:Te,group:De}=Ee,Ze=Ee.material;Ze.allowOverride===!0&&q!==null&&(Ze=q),ge.layers.test(Z.layers)&&ku(ge,k,Z,Te,Ze,De)}}function ku(E,k,Z,q,K,ye){L!==null&&K.isNodeMaterial&&L.setObject(E,K),E.onBeforeRender(w,k,Z,q,K,ye),E.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),K.onBeforeRender(w,k,Z,q,E,ye),K.transparent===!0&&K.side===We&&K.forceSinglePass===!1?(K.side=fn,K.needsUpdate=!0,w.renderBufferDirect(Z,k,q,K,E,ye),K.side=Jn,K.needsUpdate=!0,w.renderBufferDirect(Z,k,q,K,E,ye),K.side=We):w.renderBufferDirect(Z,k,q,K,E,ye),E.onAfterRender(w,k,Z,q,K,ye)}function zu(E){let k=0;for(let Z of E)Z.texture!==null&&k++;return k}function mr(E,k,Z){k.isScene!==!0&&(k=lt);let q=ze.get(E),K=S.state.lights,ye=S.state.shadowsArray,Ee=K.state.version,ge=ne.getParameters(E,K.state,ye,k,Z,S.state.lightProbeGridArray),Te=ne.getProgramCacheKey(ge),De=q.programs;q.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?k.environment:null,q.fog=k.fog;let Ze=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;q.envMap=P.get(E.envMap||q.environment,Ze),q.envMapRotation=q.environment!==null&&E.envMap===null?k.environmentRotation:E.envMapRotation,De===void 0&&(E.addEventListener("dispose",yt),De=new Map,q.programs=De,q.programVariants=new Map);let ht=De.get(Te);if(ht!==void 0){if(q.currentProgram===ht&&q.lightsStateVersion===Ee)return Vu(E,ge),ht}else ge.uniforms=ne.getUniforms(E),L!==null&&E.isNodeMaterial&&L.build(E,Z,ge),E.onBeforeCompile(ge,w),ht=ne.acquireProgram(ge,Te),De.set(Te,ht),q.uniforms=ge.uniforms;let Ie=q.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ie.clippingPlanes=Q.uniform),Vu(E,ge),q.needsLights=om(E),q.lightsStateVersion=Ee,q.needsLights&&(Ie.ambientLightColor.value=K.state.ambient,Ie.lightProbe.value=K.state.probe,Ie.sunLights.value=K.state.sun,Ie.sunLightShadows.value=K.state.sunShadow,Ie.directionalLights.value=K.state.directional,Ie.directionalLightShadows.value=K.state.directionalShadow,Ie.spotLights.value=K.state.spot,Ie.spotLightShadows.value=K.state.spotShadow,Ie.rectAreaLights.value=K.state.rectArea,Ie.ltc_1.value=K.state.rectAreaLTC1,Ie.ltc_2.value=K.state.rectAreaLTC2,Ie.pointLights.value=K.state.point,Ie.pointLightShadows.value=K.state.pointShadow,Ie.hemisphereLights.value=K.state.hemi,Ie.sunShadowMatrix.value=K.state.sunShadowMatrix,Ie.sunShadowCascade.value=K.state.sunShadowCascade,Ie.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Ie.spotLightMatrix.value=K.state.spotLightMatrix,Ie.spotLightMap.value=K.state.spotLightMap,Ie.pointShadowMatrix.value=K.state.pointShadowMatrix),q.numLightProbeGrids=zu(S.state.lightProbeGridArray),q.currentProgram=ht,q.uniformsList=null,ht}function im(E,k,Z,q,K){let ye=ze.get(E),Ee=ye.currentProgram.id+","+q+","+K,ge=ye.programVariants.get(Ee);return ge===void 0?(ge=mr(E,k,Z),ye.programVariants.set(Ee,ge)):(ye.currentProgram=ge,ye.uniformsList=null,ye.outputColorSpace=q,ye.toneMapping=K),ge}function Gu(E){if(E.uniformsList===null){let k=E.currentProgram.getUniforms();E.uniformsList=lr.seqWithValue(k.seq,E.uniforms)}return E.uniformsList}function Vu(E,k){let Z=ze.get(E);Z.outputColorSpace=k.outputColorSpace,Z.batching=k.batching,Z.batchingColor=k.batchingColor,Z.instancing=k.instancing,Z.instancingColor=k.instancingColor,Z.instancingMorph=k.instancingMorph,Z.skinning=k.skinning,Z.morphTargets=k.morphTargets,Z.morphNormals=k.morphNormals,Z.morphColors=k.morphColors,Z.morphTargetsCount=k.morphTargetsCount,Z.numClippingPlanes=k.numClippingPlanes,Z.numIntersection=k.numClipIntersection,Z.vertexAlphas=k.vertexAlphas,Z.vertexTangents=k.vertexTangents,Z.toneMapping=k.toneMapping}function sm(E,k,Z,q,K){k.isScene!==!0&&(k=lt),Xe.resetTextureUnits();let ye=k.fog,Ee=q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial?k.environment:null,ge=W===null?w.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:nt.workingColorSpace,Te=q.isMeshStandardMaterial||q.isMeshLambertMaterial&&!q.envMap||q.isMeshPhongMaterial&&!q.envMap,De=P.get(q.envMap||Ee,Te),Ze=q.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,ht=!!Z.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Ie=!!Z.morphAttributes.position,ut=!!Z.morphAttributes.normal,Bt=!!Z.morphAttributes.color,wt=$n;q.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(wt=w.toneMapping);let bt=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,en=bt!==void 0?bt.length:0,Pe=ze.get(q),an=S.state.lights;if(ce===!0&&(Ae===!0||E!==V)){let Rt=E===V&&q.id===N;Q.setState(q,E,Rt)}let xt=!1,zi=!1;q.version===Pe.__version?Pe.needsLights&&Pe.lightsStateVersion!==an.state.version||K.isBatchedMesh&&Pe.batching===!1||!K.isBatchedMesh&&Pe.batching===!0||K.isBatchedMesh&&Pe.batchingColor===!0&&K._colorsTexture===null||K.isBatchedMesh&&Pe.batchingColor===!1&&K._colorsTexture!==null||K.isInstancedMesh&&Pe.instancing===!1||!K.isInstancedMesh&&Pe.instancing===!0||K.isSkinnedMesh&&Pe.skinning===!1||!K.isSkinnedMesh&&Pe.skinning===!0||K.isInstancedMesh&&Pe.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&Pe.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&Pe.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&Pe.instancingMorph===!1&&K.morphTexture!==null||Pe.envMap!==De||q.fog===!0&&Pe.fog!==ye||Pe.numClippingPlanes!==void 0&&(Pe.numClippingPlanes!==Q.numPlanes||Pe.numIntersection!==Q.numIntersection)||Pe.vertexAlphas!==Ze||Pe.vertexTangents!==ht||Pe.morphTargets!==Ie||Pe.morphNormals!==ut||Pe.morphColors!==Bt||Pe.morphTargetsCount!==en||Pe.numLightProbeGrids!==zu(S.state.lightProbeGridArray)?xt=!0:(Pe.outputColorSpace!==ge||Pe.toneMapping!==wt)&&(zi=!0):(xt=!0,Pe.__version=q.version);let tn=Pe.currentProgram;(xt===!0||zi===!0)&&(tn=zi===!0?im(q,k,K,ge,wt):mr(q,k,K),L&&q.isNodeMaterial&&L.onUpdateProgram(q,tn,Pe));let Do=!1,wi=!1,Gi=!1,pt=tn.getUniforms(),jt=Pe.uniforms;if(xe.useProgram(tn.program)&&(Do=!0,wi=!0,Gi=!0),q.id!==N&&(N=q.id,wi=!0),Do||V!==E){xe.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),pt.setValue(z,"projectionMatrix",E.projectionMatrix),pt.setValue(z,"viewMatrix",E.matrixWorldInverse);let Zt=pt.map.cameraPosition;Zt!==void 0&&Zt.setValue(z,Je.setFromMatrixPosition(E.matrixWorld)),St.logarithmicDepthBuffer&&pt.setValue(z,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&pt.setValue(z,"isOrthographic",E.isOrthographicCamera===!0),V!==E&&(V=E,wi=!0,Gi=!0)}if(Pe.needsLights&&(an.state.sunShadowMap.length>0&&pt.setValue(z,"sunShadowMap",an.state.sunShadowMap,Xe),an.state.directionalShadowMap.length>0&&pt.setValue(z,"directionalShadowMap",an.state.directionalShadowMap,Xe),an.state.spotShadowMap.length>0&&pt.setValue(z,"spotShadowMap",an.state.spotShadowMap,Xe),an.state.pointShadowMap.length>0&&pt.setValue(z,"pointShadowMap",an.state.pointShadowMap,Xe)),K.isSkinnedMesh){pt.setOptional(z,K,"bindMatrix"),pt.setOptional(z,K,"bindMatrixInverse");let Rt=K.skeleton;Rt&&(Rt.boneTexture===null&&Rt.computeBoneTexture(),pt.setValue(z,"boneTexture",Rt.boneTexture,Xe))}K.isBatchedMesh&&(pt.setOptional(z,K,"batchingTexture"),pt.setValue(z,"batchingTexture",K._matricesTexture,Xe),pt.setOptional(z,K,"batchingIdTexture"),pt.setValue(z,"batchingIdTexture",K._indirectTexture,Xe),pt.setOptional(z,K,"batchingColorTexture"),K._colorsTexture!==null&&pt.setValue(z,"batchingColorTexture",K._colorsTexture,Xe));let Dn=Z.morphAttributes;if((Dn.position!==void 0||Dn.normal!==void 0||Dn.color!==void 0)&&ee.update(K,Z,tn),(wi||Pe.receiveShadow!==K.receiveShadow)&&(Pe.receiveShadow=K.receiveShadow,pt.setValue(z,"receiveShadow",K.receiveShadow)),(q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial)&&q.envMap===null&&k.environment!==null&&(jt.envMapIntensity.value=k.environmentIntensity),jt.dfgLUT!==void 0&&(jt.dfgLUT.value=vv()),wi){if(pt.setValue(z,"toneMappingExposure",w.toneMappingExposure),Pe.needsLights&&rm(jt,Gi),ye&&q.fog===!0&&he.refreshFogUniforms(jt,ye),he.refreshMaterialUniforms(jt,q,me,Ue,S.state.transmissionRenderTarget[E.id]),Pe.needsLights&&Pe.numLightProbeGrids>0){let Rt=y,Zt=0;for(let si of S.state.lightProbeGridArray)si.texture!==null&&(Rt.textures[Zt]=si.texture,Rt.min[Zt]=si.boundingBox.min,Rt.max[Zt]=si.boundingBox.max,Rt.resolution[Zt]=si.resolution,Zt++);for(let si in Rt)Rt[si].length=Zt;jt.probesSH.value=Rt.textures,jt.probesMin.value=Rt.min,jt.probesMax.value=Rt.max,jt.probesResolution.value=Rt.resolution}lr.upload(z,Gu(Pe),jt,Xe)}if(q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(lr.upload(z,Gu(Pe),jt,Xe),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&pt.setValue(z,"center",K.center),pt.setValue(z,"modelViewMatrix",K.modelViewMatrix),pt.setValue(z,"normalMatrix",K.normalMatrix),pt.setValue(z,"modelMatrix",K.matrixWorld),q.uniformsGroups!==void 0){let Rt=q.uniformsGroups;for(let Zt=0,si=Rt.length;Zt<si;Zt++){let Wu=Rt[Zt];Be.update(Wu,tn),Be.bind(Wu,tn)}}return tn}function rm(E,k){E.ambientLightColor.needsUpdate=k,E.lightProbe.needsUpdate=k,E.sunLights.needsUpdate=k,E.sunLightShadows.needsUpdate=k,E.directionalLights.needsUpdate=k,E.directionalLightShadows.needsUpdate=k,E.pointLights.needsUpdate=k,E.pointLightShadows.needsUpdate=k,E.spotLights.needsUpdate=k,E.spotLightShadows.needsUpdate=k,E.rectAreaLights.needsUpdate=k,E.hemisphereLights.needsUpdate=k}function om(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return W},this.setRenderTargetTextures=function(E,k,Z){let q=ze.get(E);q.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),ze.get(E.texture).__webglTexture=k,ze.get(E.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:Z,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,k){let Z=ze.get(E);Z.__webglFramebuffer=k,Z.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(E,k=0,Z=0){W=E,G=k,D=Z;let q=null,K=!1,ye=!1;if(E){let ge=ze.get(E);if(ge.__useDefaultFramebuffer!==void 0){xe.bindFramebuffer(z.FRAMEBUFFER,ge.__webglFramebuffer),H.copy(E.viewport),J.copy(E.scissor),se=E.scissorTest,xe.viewport(H),xe.scissor(J),xe.setScissorTest(se),N=-1;return}else if(ge.__webglFramebuffer===void 0)Xe.setupRenderTarget(E);else if(ge.__hasExternalTextures)Xe.rebindTextures(E,ze.get(E.texture).__webglTexture,ze.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let Ze=E.depthTexture;if(ge.__boundDepthTexture!==Ze){if(Ze!==null&&ze.has(Ze)&&(E.width!==Ze.image.width||E.height!==Ze.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Xe.setupDepthRenderbuffer(E)}}let Te=E.texture;(Te.isData3DTexture||Te.isDataArrayTexture||Te.isCompressedArrayTexture)&&(ye=!0);let De=ze.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(De[k])?q=De[k][Z]:q=De[k],K=!0):E.samples>0&&Xe.useMultisampledRTT(E)===!1?q=ze.get(E).__webglMultisampledFramebuffer:Array.isArray(De)?q=De[Z]:q=De,H.copy(E.viewport),J.copy(E.scissor),se=E.scissorTest}else H.copy(Ve).multiplyScalar(me).floor(),J.copy(tt).multiplyScalar(me).floor(),se=at;if(Z!==0&&(q=B),xe.bindFramebuffer(z.FRAMEBUFFER,q)&&xe.drawBuffers(E,q),xe.viewport(H),xe.scissor(J),xe.setScissorTest(se),K){let ge=ze.get(E.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+k,ge.__webglTexture,Z)}else if(ye){let ge=k;for(let Te=0;Te<E.textures.length;Te++){let De=ze.get(E.textures[Te]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+Te,De.__webglTexture,Z,ge)}}else if(E!==null&&Z!==0){let ge=ze.get(E.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,ge.__webglTexture,Z)}N=-1};function Hu(E){let k=ze.get(E);return(k.__readFormat!==E.format||k.__readType!==E.type)&&(k.__readFormat=E.format,k.__readType=E.type,k.__formatReadable=St.textureFormatReadable(E.format),k.__typeReadable=St.textureTypeReadable(E.type)),k}this.readRenderTargetPixels=function(E,k,Z,q,K,ye,Ee,ge=0){if(!(E&&E.isWebGLRenderTarget)){He("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=ze.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ee!==void 0&&(Te=Te[Ee],Array.isArray(Te)&&(Te=Te[0])),Te){xe.bindFramebuffer(z.FRAMEBUFFER,Te);try{let De=E.textures[ge],Ze=De.format,ht=De.type;E.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+ge);let Ie=Hu(De);if(Ie.__formatReadable===!1){He("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ie.__typeReadable===!1){He("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=E.width-q&&Z>=0&&Z<=E.height-K&&z.readPixels(k,Z,q,K,le.convert(Ze),le.convert(ht),ye)}finally{let De=W!==null?ze.get(W).__webglFramebuffer:null;xe.bindFramebuffer(z.FRAMEBUFFER,De)}}},this.readRenderTargetPixelsAsync=async function(E,k,Z,q,K,ye,Ee,ge=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=ze.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ee!==void 0&&(Te=Te[Ee],Array.isArray(Te)&&(Te=Te[0])),Te)if(k>=0&&k<=E.width-q&&Z>=0&&Z<=E.height-K){xe.bindFramebuffer(z.FRAMEBUFFER,Te);let De=E.textures[ge],Ze=De.format,ht=De.type;E.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+ge);let Ie=Hu(De);if(Ie.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ie.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ut=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,ut),z.bufferData(z.PIXEL_PACK_BUFFER,ye.byteLength,z.STREAM_READ),z.readPixels(k,Z,q,K,le.convert(Ze),le.convert(ht),0),z.bindBuffer(z.PIXEL_PACK_BUFFER,null);let Bt=W!==null?ze.get(W).__webglFramebuffer:null;xe.bindFramebuffer(z.FRAMEBUFFER,Bt);let wt=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await vf(z,wt,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,ut),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,ye),z.bindBuffer(z.PIXEL_PACK_BUFFER,null),z.deleteBuffer(ut),z.deleteSync(wt),ye}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,k=null,Z=0){let q=Math.pow(2,-Z),K=Math.floor(E.image.width*q),ye=Math.floor(E.image.height*q),Ee=k!==null?k.x:0,ge=k!==null?k.y:0;Xe.setTexture2D(E,0),z.copyTexSubImage2D(z.TEXTURE_2D,Z,0,0,Ee,ge,K,ye),xe.unbindTexture()},this.copyTextureToTexture=function(E,k,Z=null,q=null,K=0,ye=0){let Ee,ge,Te,De,Ze,ht,Ie,ut,Bt,wt=E.isCompressedTexture?E.mipmaps[ye]:E.image;if(Z!==null)Ee=Z.max.x-Z.min.x,ge=Z.max.y-Z.min.y,Te=Z.isBox3?Z.max.z-Z.min.z:1,De=Z.min.x,Ze=Z.min.y,ht=Z.isBox3?Z.min.z:0;else{let pt=Math.pow(2,-K);Ee=Math.floor(wt.width*pt),ge=Math.floor(wt.height*pt),E.isDataArrayTexture?Te=wt.depth:E.isData3DTexture?Te=Math.floor(wt.depth*pt):Te=1,De=0,Ze=0,ht=0}q!==null?(Ie=q.x,ut=q.y,Bt=q.z):(Ie=0,ut=0,Bt=0);let bt=le.convert(k.format),en=le.convert(k.type),Pe;k.isData3DTexture?(Xe.setTexture3D(k,0),Pe=z.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(Xe.setTexture2DArray(k,0),Pe=z.TEXTURE_2D_ARRAY):(Xe.setTexture2D(k,0),Pe=z.TEXTURE_2D),xe.activeTexture(z.TEXTURE0),xe.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,k.flipY),xe.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),xe.pixelStorei(z.UNPACK_ALIGNMENT,k.unpackAlignment);let an=xe.getParameter(z.UNPACK_ROW_LENGTH),xt=xe.getParameter(z.UNPACK_IMAGE_HEIGHT),zi=xe.getParameter(z.UNPACK_SKIP_PIXELS),tn=xe.getParameter(z.UNPACK_SKIP_ROWS),Do=xe.getParameter(z.UNPACK_SKIP_IMAGES);xe.pixelStorei(z.UNPACK_ROW_LENGTH,wt.width),xe.pixelStorei(z.UNPACK_IMAGE_HEIGHT,wt.height),xe.pixelStorei(z.UNPACK_SKIP_PIXELS,De),xe.pixelStorei(z.UNPACK_SKIP_ROWS,Ze),xe.pixelStorei(z.UNPACK_SKIP_IMAGES,ht);let wi=E.isDataArrayTexture||E.isData3DTexture,Gi=k.isDataArrayTexture||k.isData3DTexture;if(E.isDepthTexture){let pt=ze.get(E),jt=ze.get(k),Dn=ze.get(pt.__renderTarget),Rt=ze.get(jt.__renderTarget);xe.bindFramebuffer(z.READ_FRAMEBUFFER,Dn.__webglFramebuffer),xe.bindFramebuffer(z.DRAW_FRAMEBUFFER,Rt.__webglFramebuffer);for(let Zt=0;Zt<Te;Zt++)wi&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,ze.get(E).__webglTexture,K,ht+Zt),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,ze.get(k).__webglTexture,ye,Bt+Zt)),z.blitFramebuffer(De,Ze,De+Ee,Ze+ge,Ie,ut,Ie+Ee,ut+ge,z.DEPTH_BUFFER_BIT,z.NEAREST);xe.bindFramebuffer(z.READ_FRAMEBUFFER,null),xe.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(K!==0||E.isRenderTargetTexture||ze.has(E)){let pt=ze.get(E),jt=ze.get(k);xe.bindFramebuffer(z.READ_FRAMEBUFFER,I),xe.bindFramebuffer(z.DRAW_FRAMEBUFFER,O);for(let Dn=0;Dn<Te;Dn++)wi?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,pt.__webglTexture,K,ht+Dn):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,pt.__webglTexture,K),Gi?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,jt.__webglTexture,ye,Bt+Dn):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,jt.__webglTexture,ye),K!==0?z.blitFramebuffer(De,Ze,De+Ee,Ze+ge,Ie,ut,Ie+Ee,ut+ge,z.COLOR_BUFFER_BIT,z.NEAREST):Gi?z.copyTexSubImage3D(Pe,ye,Ie,ut,Bt+Dn,De,Ze,Ee,ge):z.copyTexSubImage2D(Pe,ye,Ie,ut,De,Ze,Ee,ge);xe.bindFramebuffer(z.READ_FRAMEBUFFER,null),xe.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else Gi?E.isDataTexture||E.isData3DTexture?z.texSubImage3D(Pe,ye,Ie,ut,Bt,Ee,ge,Te,bt,en,wt.data):k.isCompressedArrayTexture?z.compressedTexSubImage3D(Pe,ye,Ie,ut,Bt,Ee,ge,Te,bt,wt.data):z.texSubImage3D(Pe,ye,Ie,ut,Bt,Ee,ge,Te,bt,en,wt):E.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,ye,Ie,ut,Ee,ge,bt,en,wt.data):E.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,ye,Ie,ut,wt.width,wt.height,bt,wt.data):z.texSubImage2D(z.TEXTURE_2D,ye,Ie,ut,Ee,ge,bt,en,wt);xe.pixelStorei(z.UNPACK_ROW_LENGTH,an),xe.pixelStorei(z.UNPACK_IMAGE_HEIGHT,xt),xe.pixelStorei(z.UNPACK_SKIP_PIXELS,zi),xe.pixelStorei(z.UNPACK_SKIP_ROWS,tn),xe.pixelStorei(z.UNPACK_SKIP_IMAGES,Do),ye===0&&k.generateMipmaps===!0&&k.mipmapsAutoUpdate===!0&&z.generateMipmap(Pe),xe.unbindTexture()},this.initRenderTarget=function(E){ze.get(E).__webglFramebuffer===void 0&&Xe.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?Xe.setTextureCube(E,0):E.isData3DTexture?Xe.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Xe.setTexture2DArray(E,0):Xe.setTexture2D(E,0),xe.unbindTexture()},this.resetState=function(){G=0,D=0,W=null,xe.reset(),ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Rn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=nt._getDrawingBufferColorSpace(e),t.unpackColorSpace=nt._getUnpackColorSpace()}};var Pn=class{constructor(){this.pos=[],this.uv=[],this.colors=[]}tri(e,t,n,i=[0,0],r=[1,0],o=[1,1]){if(this.pos.push(...e,...t,...n),this.uv.push(...i,...r,...o),this.tint)for(let a=0;a<3;a++)this.colors.push(this.tint.r,this.tint.g,this.tint.b)}quad(e,t,n,i,r=1,o=1){this.tri(e,t,n,[0,0],[r,0],[r,o]),this.tri(e,n,i,[0,0],[r,o],[0,o])}mesh(e){let t=new $e;return t.setAttribute("position",new Ce(this.pos,3)),t.setAttribute("uv",new Ce(this.uv,2)),this.colors.length&&t.setAttribute("color",new Ce(this.colors,3)),t.computeVertexNormals(),new Le(t,e)}};function ei(s,e,t){let n=!1;for(let i=0,r=t.length-1;i<t.length;r=i++){let o=t[i],a=t[r];o[1]>e!=a[1]>e&&s<(a[0]-o[0])*(e-o[1])/(a[1]-o[1])+o[0]&&(n=!n)}return n}function Dl(s,e,t,n){let i=e.concat(...t),r=o=>o.map(a=>new re(...a));for(let[o,a,l]of rn.triangulateShape(r(e),t.map(r))){let c=[i[o],i[a],i[l]].map(([h,u])=>[h,n,u]);s.tri(c[2],c[1],c[0])}}function we(s,e,t,n,i,r,o,a){let l=new Le(new Ut(e,t,n),a);return l.position.set(i,r,o),l.castShadow=l.receiveShadow=!0,s.add(l),l}function It(s,e,t,n,i,r,o,a,l=16){let c=new Le(new gn(e,t,n,l),a);return c.position.set(i,r,o),c.castShadow=c.receiveShadow=!0,s.add(c),c}var mt=(s,e=.82)=>new Ge({color:s,roughness:e});function lp(s,e){let t=[[[-740.82,179.19],[-734.61,179.55]],[[-734.79,182.38],[-721.6,183.15]],[[-721.43,180.33],[-716.85,180.59]]],n=e.ground(-728.3,180);for(let[i,[r,o]]of t.entries()){let a=o[0]-r[0],l=o[1]-r[1],c=Math.hypot(a,l),h=l/c,u=-a/c,d=(v,M,y)=>[r[0]+a*v+h*y,n+M,r[1]+l*v+u*y],f=i===1?34.65:31.7,p=i===1?[9.5,12.7,9.5]:i===0?[4.45,6.97]:[6.97,4.45],x=["left","center","right"][i],m=i===1?"wall-stone":"wall-brick",g=Math.max(...p);s("stjohn-"+x).quad(d(0,.08,-.08),d(1,.08,-.08),d(1,g,-.08),d(0,g,-.08));for(let v=0;v<p.length-1;v++){let M=v/(p.length-1),y=(v+1)/(p.length-1),T=p[v],S=p[v+1];s("historic-roof").quad(d(M,T,0),d(y,S,0),d(y,S,f),d(M,T,f)),s(m).quad(d(M,-.15,f),d(y,-.15,f),d(y,S,f),d(M,T,f),c/3,g/3)}for(let v of[0,1]){let M=p[v===0?0:p.length-1];if(s(m).quad(d(v,-.2,0),d(v,-.2,f),d(v,M,f),d(v,M,0),f/3,M/3),i!==1)for(let y=1;y<6;y++){let T=y*f/6;s("glass-sash").quad(d(v===0?-.01:1.01,1,T-.65),d(v===0?-.01:1.01,1,T+.65),d(v===0?-.01:1.01,3.3,T+.65),d(v===0?-.01:1.01,3.3,T-.65))}}i===1&&(s("frame").quad(d(.494,12.65,0),d(.51,12.65,0),d(.51,14.48,0),d(.494,14.48,0)),s("frame").quad(d(.456,13.91,0),d(.548,13.91,0),d(.548,14.06,0),d(.456,14.06,0)))}}var Mv={museum:"UNIVERSITY MUSEUM",fire:"OXFORD FIRE DEPARTMENT"};function cp(s,e){for(let[t,n]of Object.entries(Mv)){let i=e(n,t==="fire"?"#533b32":"#875b48","#eee7d5",1024);s["inscription-"+t]=new Ge({map:i,roughness:.88,side:We})}}function hp(s,e,t,n,i){let r=t.roof[2];function o(a,l){let c=null,h=1/0;for(let u=0;u<e.length;u++){let d=e[u],f=e[(u+1)%e.length],p=n(d,f);if(p.len<3)continue;let x=Math.hypot(a-p.mid[0],l-p.mid[1]);x<h&&(c=p,h=x)}return c}if(s===188827132){let a=o(-933,165);if(!a)return;let l=a.ground,c=Math.min(18,a.len*.96),h=l+Math.min(12,Math.max(8,r-l-.35)),u=2.05;a.panel("glass-shop",-c*.46,c*.46,l+.5,h-.38,.16,[4,1]);for(let d=0;d<4;d++){let f=a.post((-.42+d*.28)*c,u-.25,.24);f!==null&&a.box("frame",f-.24,f+.24,l+.42,h-.28,u,u-.5)}a.box("ledge",-c*.54,c*.54,h-.35,h,u+.12,-.28),i("frame").tri(a.pt(-c*.56,h,u+.12),a.pt(c*.56,h,u+.12),a.pt(0,h+c*.24,u+.12)),i("historic-roof").quad(a.pt(-c*.56,h,u+.12),a.pt(0,h+c*.24,u+.12),a.pt(0,h+c*.24,-2.5),a.pt(-c*.56,h,-2.5)),i("historic-roof").quad(a.pt(0,h+c*.24,u+.12),a.pt(c*.56,h,u+.12),a.pt(c*.56,h,-2.5),a.pt(0,h+c*.24,-2.5));for(let d=0;d<4;d++)a.box("ledge",-c*.54,c*.54,l+d*.11,l+(d+1)*.11,u+1.35-d*.33)}else if(s===318264954){let a=o(-617,242);if(!a)return;a.panel("wall-brick",-a.len*.499,a.len*.499,a.ground-.05,r,.41,[a.len/3,(r-a.ground)/3]),a.box("ledge",-a.len*.5,a.len*.5,r-.14,r+.055,.51);let l=Math.min(r-.6,a.ground+3.85),c=Math.min(10,a.len*.68);a.panel("inscription-museum",-c/2,c/2,l-.49,l+.48,.445)}else if(s===318275096||s===318274786)for(let a=0;a<e.length;a++){let l=n(e[a],e[(a+1)%e.length]);if(l.len<18||s===318275096&&l.mid[0]<-1157)continue;l.panel("wall-brick",-l.len/2,l.len/2,l.ground-.18,r,.21,[l.len/3,(r-l.ground)/3]);let c=Math.round(l.len/3.65),h=r-l.ground;for(let u=0;u<c;u++){let d=((u+.5)/c-.5)*l.len;l.panel("reveal",d-.57,d+.57,l.ground+.72,r-.34,.24);for(let f=0;f<4;f++){let p=l.ground+.82+f*(h-.95)/4;l.panel("glass-shop",d-.46,d+.46,p,p+(h-.95)*.204,.26)}}l.box("ledge",-l.len/2,l.len/2,r-.14,r+.08,.37)}else if(s===264946753){let a=o(-190,-66);if(!a)return;let l=a.len,c=a.ground,h=10,u=l/h;a.panel("glass-shop",-l*.496,l*.496,c+.14,c+3.54,.17,[h,1]);for(let d=0;d<=h;d++){let f=-l*.5+d*u;a.box("ledge",f-.25,f+.25,c+.12,c+3.5,.85,-.03)}for(let d=0;d<h;d++){let f=-l*.5+(d+.5)*u;for(let p=0;p<10;p++){let x=Math.PI*p/10,m=Math.PI*(p+1)/10,g=(v,M,y)=>a.pt(f+Math.cos(v)*M,c+3.08+Math.sin(v)*y,.86);i("ledge").quad(g(x,u*.46,.53),g(m,u*.46,.53),g(m,u*.49,.83),g(x,u*.49,.83))}}}else if(s===590970626){let a=o(295,3571);if(!a)return;let l=a.ground,c=a.len;a.box("awning",-c*.56,c*.56,l+2.85,l+3.12,1.6),a.panel("inscription-fire",-c*.48,c*.48,l+2.85,l+3.13,1.615)}}function Sv(s,e){let t=[];for(let n=0;n<s.length;n++){let i=s[n],r=s[(n+1)%s.length],o=e(i),a=e(r);if(o>=-1e-7&&t.push(i),o>1e-7&&a<-1e-7||o<-1e-7&&a>1e-7){let l=o/(o-a);t.push([i[0]+l*(r[0]-i[0]),i[1]+l*(r[1]-i[1])])}}return t}function Nl(s,e,t,n,i){let[r,o,a,l,c,h]=n,u=Math.cos(o),d=Math.sin(o),f=w=>u*w[0]+d*w[1],p=w=>u*w[1]-d*w[0],x=e.map(f),m=e.map(p),g=Math.min(...x),v=Math.max(...x),M=Math.min(...m),y=Math.max(...m),T=2*l/Math.max(.2,y-M),S=[];r==="flat"||l<.05?S=[()=>0]:r==="shed"?S=[w=>(p(w)-M)*T*.5]:(S=[w=>(p(w)-M)*T,w=>(y-p(w))*T],(r==="hip"||r==="mansard")&&S.push(w=>(f(w)-g)*T,w=>(v-f(w))*T),(r==="mansard"||r==="gambrel")&&(S=S.map(w=>R=>w(R)*2.7),S.push(()=>l)));let _=e.concat(...t),b=w=>w.map(R=>new re(...R)),C=s("surface-"+c);C.tint=new Re(h);for(let w of rn.triangulateShape(b(e),t.map(b))){let R=w.map(L=>_[L]);for(let L=0;L<S.length;L++){let B=R;for(let I=0;I<S.length&&B.length;I++)I!==L&&(B=Sv(B,O=>S[I](O)-S[L](O)));for(let I=1;I+1<B.length;I++){let O=[B[0],B[I+1],B[I]];C.tri(...O.map(G=>[G[0],a+S[L](G),G[1]]),...O.map(G=>[f(G)/3,p(G)/3]))}}}if(S.length>1||r==="shed"){let w=s(i);for(let R of[e,...t])for(let L=0;L<R.length;L++){let B=R[L],I=R[(L+1)%R.length],O=[0,1];for(let D=0;D<S.length;D++)for(let W=D+1;W<S.length;W++){let N=S[D](B)-S[W](B),V=S[D](I)-S[W](I);N*V<0&&O.push(N/(N-V))}O.sort((D,W)=>D-W);let G=D=>[B[0]+(I[0]-B[0])*D,B[1]+(I[1]-B[1])*D];for(let D=1;D<O.length;D++){let W=G(O[D-1]),N=G(O[D]),V=Math.min(...S.map(J=>J(W))),H=Math.min(...S.map(J=>J(N)));Math.max(V,H)<.035||w.quad([W[0],a,W[1]],[N[0],a,N[1]],[N[0],a+H,N[1]],[W[0],a+V,W[1]],Math.hypot(N[0]-W[0],N[1]-W[1])/3,Math.max(V,H)/3)}}}}var up=[{id:451755565,name:"Neilson\u2019s Department Store",photo:"0258",edge:[[44.84,65.37],[39.49,91.48]],side:"west",aspect:2.967741935483871,form:"shopfront",wall:"brick",widthM:26.65,source:"https://www.loc.gov/pictures/collection/hh/item/ms0258.photos.093438p/",creator:"Boucher, Jack E.",date:"1975",image:"https://tile.loc.gov/storage-services/service/pnp/habshaer/ms/ms0200/ms0258/photos/093438pv.jpg",license:"U.S. government HABS photograph, Library of Congress; no known restrictions",adaptation:"Traced silhouette, cropped, and lightly toned from grayscale. Non-frontal faces reconstructed."},{id:451755566,name:"Oxford City Hall",photo:"0267",edge:[[51.75,43.57],[55.97,23.11]],side:"west",aspect:1.1071428571428572,form:"double gable",wall:"brick",widthM:20.89,source:"https://www.loc.gov/pictures/collection/hh/item/ms0267.photos.093412p/",creator:"Boucher, Jack E.",date:"1975",image:"https://tile.loc.gov/storage-services/service/pnp/habshaer/ms/ms0200/ms0267/photos/093412pv.jpg",license:"U.S. government HABS photograph, Library of Congress; no known restrictions",adaptation:"Traced silhouette, cropped, and lightly toned from grayscale. Non-frontal faces reconstructed."},{id:421471601,name:"St. Peter\u2019s Episcopal Church",photo:"0261",edge:[[-242.91,-24.8],[-246.02,-9.5]],side:"west",aspect:.5257214554579673,form:"spire",wall:"brick",widthM:15.61,source:"https://www.loc.gov/pictures/collection/hh/item/ms0261.photos.093377p/",creator:"Boucher, Jack E.",date:"1975",image:"https://tile.loc.gov/storage-services/service/pnp/habshaer/ms/ms0200/ms0261/photos/093377pv.jpg",license:"U.S. government HABS photograph, Library of Congress; no known restrictions",adaptation:"Traced silhouette, cropped, and lightly toned from grayscale. Non-frontal faces reconstructed."},{id:627882381,name:"Howry\u2013Hull House (Fiddler\u2019s Folly)",photo:"0263",edge:[[114.69,-419.09],[117.3,-432.47]],side:"west",aspect:1.3744493392070485,form:"gallery",wall:"lap",widthM:13.63,source:"https://www.loc.gov/pictures/collection/hh/item/ms0263.photos.093418p/",creator:"Boucher, Jack E.",date:"1975",image:"https://tile.loc.gov/storage-services/service/pnp/habshaer/ms/ms0200/ms0263/photos/093418pv.jpg",license:"U.S. government HABS photograph, Library of Congress; no known restrictions",adaptation:"Traced silhouette, cropped, and lightly toned from grayscale. Non-frontal faces reconstructed."},{id:625160900,name:"Isom Place",photo:"0265",edge:[[-108.64,-259.93],[-87.79,-255.94]],side:"south",aspect:2.2,form:"portico",wall:"lap",widthM:21.23,source:"https://www.loc.gov/pictures/collection/hh/item/ms0265.photos.093428p/",creator:"Boucher, Jack E.",date:"1975",image:"https://tile.loc.gov/storage-services/service/pnp/habshaer/ms/ms0200/ms0265/photos/093428pv.jpg",license:"U.S. government HABS photograph, Library of Congress; no known restrictions",adaptation:"Traced silhouette, cropped, and lightly toned from grayscale. Non-frontal faces reconstructed."},{id:451773164,name:"Sullivan Law Office",photo:"0266",edge:[[-95.71,-45.5],[-85.14,-43.77]],side:"south",aspect:1.083916083916084,form:"turret",wall:"lap",widthM:10.71,source:"https://www.loc.gov/pictures/collection/hh/item/ms0266.photos.093425p/",creator:"Boucher, Jack E.",date:"1975",image:"https://tile.loc.gov/storage-services/service/pnp/habshaer/ms/ms0200/ms0266/photos/093425pv.jpg",license:"U.S. government HABS photograph, Library of Congress; no known restrictions",adaptation:"Traced silhouette, cropped, and lightly toned from grayscale. Non-frontal faces reconstructed."}];var dp=new Map(up.map(s=>[s.id,s]));function fp(s,e,t){let n=t.side==="west"?[-1,0]:[0,1],i=t.edge.slice().sort((T,S)=>(T[0]-S[0])*n[1]-(T[1]-S[1])*n[0]),[r,o]=i,a=o[0]-r[0],l=o[1]-r[1],c=Math.hypot(a,l),h=c/t.aspect,u=-l/c,d=a/c,f=u*n[0]+d*n[1]>0?1:-1,p=u*f,x=d*f,m=e.ground((o[0]+r[0])/2,(o[1]+r[1])/2)+.09,g=(T,S,_)=>[r[0]+a*T+p*_,m+S,r[1]+l*T+x*_],v=s("habs-"+t.photo),M=t.photo==="0261"?.72:.37;v.quad(g(0,0,M),g(1,0,M),g(1,h,M),g(0,h,M));let y=(T,S,_,b,C)=>{let w=(T+S)/2,R=g(T,_,.21),L=g(S,_,.21),B=g(w,b,.21);s("wall-"+t.wall).tri(R,L,B),s("historic-roof").quad(R,B,g(w,b,-C),g(T,_,-C)),s("historic-roof").quad(B,L,g(S,_,-C),g(w,b,-C))};if(t.form==="double gable"&&(y(.56,.98,h*.78,h*.995,6.5),y(.025,.295,h*.58,h*.749,4.2)),t.form==="spire"||t.form==="turret"){let T=t.form==="spire",S=T?.22:.25,_=c*(T?.124:.225),b=h*(T?.46:.62),C=g(S,0,-_+.1),w=s("wall-"+t.wall),R=s("historic-roof"),L=T?4:8,B=Math.atan2(l,a),I=(O,G,D=1)=>[C[0]+_*D*Math.cos(B+(O+.5)*Math.PI*2/L),m+G,C[2]+_*D*Math.sin(B+(O+.5)*Math.PI*2/L)];for(let O=0;O<L;O++)w.quad(I(O,0),I(O+1,0),I(O+1,b),I(O,b),2,b/3),R.tri(I(O,b,1.08),I(O+1,b,1.08),[C[0],m+h,C[2]])}if(t.form==="gallery"||t.form==="portico"){let T=h*(t.form==="gallery"?.5:.78);s("ledge").quad(g(.02,T,.24),g(.98,T,.24),g(.98,T,-1.65),g(.02,T,-1.65))}}function Ul(s,e,t,n,i,r,o,a,l=!0){let{panel:c,box:h,pt:u}=s,d=t-i/2,f=t+i/2,p=(Math.imul(Math.round(s.mid[0]*10)|0,73856093)^Math.imul(Math.round(s.mid[1]*10)|0,19349663))>>>0,x=o==="display"?"glass-display-"+p%3:o==="picture"?"glass-shop":o==="stained"?"stained":"glass-sash",m=o==="arched"||o==="stained",g=Math.max(.055,Math.min(.105,Math.min(i,r)*.055)),v=.085;if(c("reveal",d-.075,f+.075,n-.055,n+r+.075,.018,[i/2,r/2]),c(x,d+.025,f-.025,n+.025,n+r-.025,.043,[i/1.55,r/1.55]),h("frame",d-.105,d-.035,n-.08,n+r+.08,v,.035),h("frame",f+.035,f+.105,n-.08,n+r+.08,v,.035),h("frame",d-.035,f+.035,n+r+.035,n+r+.105,v,.035),h("frame",d-.035,f+.035,n-.105,n-.035,v,.035),o!=="display"&&o!=="picture"&&(h("frame",t-g/2,t+g/2,n+.015,n+r-.015,.071,.043),h("frame",d+.02,f-.02,n+r*.49-g/2,n+r*.49+g/2,.071,.043)),o==="display"&&i>2&&h("frame",t-.035,t+.035,n,n+r,.078,.043),h("ledge",d-.17,f+.17,n-.19,n-.105,.17,.025),m){let M=u(t,n+r,.074),y=[],T=[];for(let S=0;S<=12;S++){let _=Math.PI*S/12;y.push(u(t+Math.cos(_)*(i*.5+.06),n+r+Math.sin(_)*i*.34,.075)),T.push(u(t+Math.cos(_)*(i*.5-.035),n+r+Math.sin(_)*i*.28,.079))}for(let S=0;S<12;S++)e("frame").quad(T[S],T[S+1],y[S+1],y[S]),e("glass-shop").tri(M,u(t+Math.cos(Math.PI*S/12)*i*.46,n+r+Math.sin(Math.PI*S/12)*i*.27,.081),u(t+Math.cos(Math.PI*(S+1)/12)*i*.46,n+r+Math.sin(Math.PI*(S+1)/12)*i*.27,.081))}if(a)for(let M of[-1,1]){let y=M<0?d-i*.29:f+.1,T=M<0?d-.1:f+i*.29;c("shutter",y,T,n,n+r,.064,[.8,r/1.7]);let S=Math.min(6,Math.max(1,Math.floor(r/.32)));for(let _=0;_<S;_++){let b=n+.12+(_+.5)*(r-.24)/S;e("frame").quad(u(y,b,.071),u(T,b,.071),u(T,b+.018,.071),u(y,b+.018,.071))}}if(l){let y=d-.115,T=f+.115,S=n-.115,_=n+r+.115,b=.118,C=e("ink");C.quad(u(y,S,b),u(T,S,b),u(T,S+.026,b),u(y,S+.026,b)),C.quad(u(y,_-.026,b),u(T,_-.026,b),u(T,_,b),u(y,_,b)),C.quad(u(y,S+.026,b),u(y+.026,S+.026,b),u(y+.026,_-.026,b),u(y,_-.026,b)),C.quad(u(T-.026,S+.026,b),u(T,S+.026,b),u(T,_-.026,b),u(T-.026,_-.026,b))}}function pp(s,e,t,n,i,r,o,a,l,c){let h=Math.cos(t)*s[0]+Math.sin(t)*s[1],u=Math.cos(t)*s[1]-Math.sin(t)*s[0];if(e==="shed")return n+(u-r)*c*.5;let d=Math.min((u-r)*c,(o-u)*c);return e==="hip"&&(d=Math.min(d,(h-a)*c,(l-h)*c)),(e==="gambrel"||e==="mansard")&&(d=Math.min(i,Math.max(0,d*2.7))),n+Math.max(0,Math.min(i,d))}function mp(s,e,t){let[n,i,r,o]=t.roof;if(!["gable","hip","shed","gambrel","mansard"].includes(n)||o<.22)return;let a=Math.cos(i),l=Math.sin(i),c=e.map(y=>a*y[0]+l*y[1]),h=e.map(y=>a*y[1]-l*y[0]),u=Math.min(...c),d=Math.max(...c),f=Math.min(...h),p=Math.max(...h),x=2*o/Math.max(.2,p-f),m=s("ledge"),g=s("porch"),v=s("surface-"+t.roof[4]),M=s("ink");for(let y=0;y<e.length;y++){let T=e[y],S=e[(y+1)%e.length],_=S[0]-T[0],b=S[1]-T[1],C=Math.hypot(_,b)||1,w=_/C,R=b/C,L=[(T[0]+S[0])/2,(T[1]+S[1])/2],I=ei(L[0]-R*.04,L[1]+w*.04,e)?-1:1,O=-R*I,G=w*I,D=Math.abs(w*a+R*l);if(n==="gable"&&D<.66||n==="shed"&&D<.66)continue;let W=pp(T,n,i,r,o,f,p,u,d,x),N=pp(S,n,i,r,o,f,p,u,d,x),V=.24,H=.115,J=(se,X,te)=>[se[0]+O*te,X,se[1]+G*te];v.quad(J(T,W,0),J(S,N,0),J(S,N,V),J(T,W,V),C/3,V/3),g.quad(J(T,W-.035,0),J(S,N-.035,0),J(S,N-.035,V),J(T,W-.035,V),C/2,V/.3),m.quad(J(T,W,V),J(S,N,V),J(S,N-H,V),J(T,W-H,V),C/2,H/.15),M.quad(J(T,W-H*.22,V+.006),J(S,N-H*.22,V+.006),J(S,N-H*.22+.024,V+.006),J(T,W-H*.22+.024,V+.006))}}function wo(s,e,t,n,i,r,o=0,a=null){let l=n[0]-t[0],c=n[1]-t[1],h=Math.hypot(l,c)||1,u=l/h,d=c/h,f=[(t[0]+n[0])/2,(t[1]+n[1])/2],p=ei(f[0]-d*.06,f[1]+u*.06,i)?-r:r,x=-d*p,m=u*p,g=(T,S,_=0)=>[f[0]+u*T+x*(_+o),S,f[1]+d*T+m*(_+o)],v=(T,S,_,b,C,w=0,R=[1,1])=>s(T).quad(g(S,b,w),g(_,b,w),g(_,C,w),g(S,C,w),...R);return{len:h,mid:f,pt:g,panel:v,box:(T,S,_,b,C,w,R=0)=>{v(T,S,_,b,C,w);let L=s(T);L.quad(g(S,C,R),g(S,C,w),g(_,C,w),g(_,C,R)),L.quad(g(S,b,R),g(S,b,w),g(S,C,w),g(S,C,R)),L.quad(g(_,b,w),g(_,b,R),g(_,C,R),g(_,C,w)),L.quad(g(S,b,w),g(S,b,R),g(_,b,R),g(_,b,w))},post:(T,S,_)=>{for(let b of[0,.45,-.45,.85,-.85,1.35,-1.35]){let C=T+b;if(Math.abs(C)+_>h*.5)continue;let[w,,R]=g(C,0,S);if(!(e.cells.get(Math.floor(w/48)+"_"+Math.floor(R/48))||[]).some(([I,O])=>{let G=e.roads[I],D=Wi([w,R],e.nodes[G.p[O-1]],e.nodes[G.p[O]]);return Math.hypot(w-D[0],R-D[1])<_+.54}))return a&&a.push([w,R,_]),C}return null},ground:e.ground(...f)}}function gp(s,e,t,n,i,r,o){let{len:a,box:l,panel:c,pt:h}=s,u=t.flags||[],d=t.use==="shop",f=t.use==="campus"||t.use==="civic",p=t.stories,x=i-o;if(x<1.9||a<1.65)return;let m=r?(t.door??.5)*a-a/2:null,g=Math.max(1,Math.min(28,r&&t.bays?t.bays:Math.round(a/(d?4.3:f?3.9:4.8)))),v=a/g,M=Math.max(1,Math.min(p,Math.floor(x/2.05))),y=Math.min(f?2.3:1.65,x/M*.57);for(let C=0;C<M;C++){let w=o+.15+(C+.28)*x/M;for(let R=0;R<g;R++){let L=-a/2+(R+.5)*v;if(C===0&&m!==null&&Math.abs(L-m)<(d?1.65:1.4))continue;let B=r&&d&&C===0,I=r&&u.includes("picture")&&C===0,O=Math.min(v*.68,B?3.7:I?2.7:f?1.52:1.24);O<.55||Ul(s,e,L,B?o+.5:w,O,B?Math.min(x/M*.8,3.05):y,B?"display":I?"picture":u.includes("stained")?"stained":u.includes("arches")?"arched":"sash",r&&u.includes("shutters"))}}if(u.includes("wainscot")&&c("wall-brick",-a/2,a/2,o+.035,o+Math.min(1.05,x*.25),.035,[a/3,.35]),!r)return;if(u.includes("glassentry")&&c("glass-shop",-Math.min(3.6,a*.26),Math.min(3.6,a*.26),o+.15,Math.min(i-.35,o+x*.81),.09),u.includes("brickpilaster")||u.includes("buttress")){let C=Math.max(2,Math.min(10,g+1));for(let w=0;w<C;w++){let R=-a*.485+w*a*.97/(C-1),L=u.includes("buttress")?.31:.19;l("wall-brick",R-L,R+L,o+.03,i-.26,u.includes("buttress")?.46:.18),l("ledge",R-L-.03,R+L+.03,i-.43,i-.26,.38)}}if(u.includes("dormer")&&a>4){let w=i+.02,R=Math.min(2.6,a*.25);l("wall-"+t.wall,0-R/2,0+R/2,w,w+1.45,.02,-1.6),c("glass-sash",0-R*.25,0+R*.25,w+.18,w+1.28,.06),e("frame").tri(h(0-R*.52,w+1.42,.08),h(0+R*.52,w+1.42,.08),h(0,w+2.25,.08)),e("historic-roof").quad(h(0-R*.57,w+1.45,.12),h(0,w+2.26,.12),h(0,w+2.26,-1.7),h(0-R*.57,w+1.45,-1.7)),e("historic-roof").quad(h(0,w+2.26,.12),h(0+R*.57,w+1.45,.12),h(0+R*.57,w+1.45,-1.7),h(0,w+2.26,-1.7))}let T=d||f?1.55:1.04,S=o+Math.min(x-.16,f?2.9:2.29);l("frame",m-T*.5-.09,m+T*.5+.09,o+.08,S+.12,.105),c(d?"glass-shop":"door",m-T*.5,m+T*.5,o+.1,S,.12),l("hardware",m+T*.3-.025,m+T*.3+.025,o+1.03,o+1.09,.175,.115),l("hardware",m+T*.3-.018,m+T*.3+.018,o+1.19,o+1.226,.164,.12),u.includes("transom")&&c("glass-shop",m-T*.5,m+T*.5,S+.15,Math.min(i-.12,S+.65),.13);let _=t.clearance??0;if(_>.55&&l("ledge",m-T*.72,m+T*.72,o+.04,o+.145,Math.min(.52,_*.55)),(u.includes("cornice")||u.includes("parapet"))&&(l("ledge",-a*.5,a*.5,i-.3,i-.07,.18),l("frame",-a*.5,a*.5,i-.07,i+.12,.27)),u.some(C=>["porch","columns","balcony","awning","pediment"].includes(C))&&_>.8&&!t.planPorch){let C=t.columns??(u.includes("awning")?0:2),w=u.includes("fullwidth")||u.includes("balcony"),R=Math.min(a*.93,w?a:Math.max(4,C*1.55)),L=Math.min(_*.7,f?3.5:2.05),B=Math.max(-a*.5+R*.5,Math.min(a*.5-R*.5,m)),I=Math.min(i-.38,o+(f?Math.min(8,x*.82):2.82));l(u.includes("awning")?"awning":"ledge",B-R/2,B+R/2,I-.16,I,L),e("porch").quad(h(B-R/2,I-.055,.015),h(B+R/2,I-.055,.015),h(B+R/2,I-.055,L),h(B-R/2,I-.055,L),R/3,L/3);for(let O=0;O<C;O++){let G=f?.22:.086,D=s.post(B-R*.44+O*R*.88/Math.max(1,C-1),L-G,G);D!==null&&(s.box("ledge",D-G*1.65,D+G*1.65,o+.08,o+.22,L-G*1.25,L-2*G),l("frame",D-G,D+G,o+.16,I-.15,L,L-2*G),s.box("ledge",D-G*1.55,D+G*1.55,I-.24,I-.12,L-G*1.25,L-2*G),f&&l("ledge",D-G*1.4,D+G*1.4,I-.3,I-.13,L+.05,L-2*G-.05))}if(u.includes("pediment")&&e("frame").tri(h(B-R*.5,I,L),h(B+R*.5,I,L),h(B,I+Math.min(1.8,R*.19),L)),u.includes("balcony")){l("frame",B-R*.5,B+R*.5,I+.94,I+1.03,L,L-.09);for(let O=B-R*.46;O<B+R*.49;O+=.42)c("rail",O-.025,O+.025,I+.02,I+.96,L)}}}function xp(s,e,t,n){if(t[5]===318265043){lp(s,e);return}let[i,r,,,,,,o]=t,{roof:a,wall:l,front:c}=o,h=a[2],u=Math.min(...i.map(x=>e.ground(...x)))-.16,d="wall-"+l,f=o.shells||[[i,...r]];for(let x of f)for(let[m,g]of x.entries())for(let v=0;v<g.length;v++){let M=g[v],y=g[(v+1)%g.length],T=wo(s,e,M,y,g,m===0?1:-1,0,n);T.panel(d,-T.len/2,T.len/2,u,h,0,[T.len/3,(h-u)/3]);let S=c?.edge,_=m===0&&S&&Gh(M,y,S,.85);o.party?.some(b=>Gh(M,y,b,1))||(o.plan||[]).some(b=>b.kind==="garage"&&Gh(M,y,b.edge,1))||o.homeModel&&_||gp(T,s,o,u,h,_,Math.min(T.ground,h-2.1))}for(let x of o.plan||[]){let[m,g]=x.edge,v=wo(s,e,m,g,i,1,0,n),M=v.ground,y=v.len;if(x.kind==="garage"){let T=Math.min(y*.84,5.9);v.panel("frame",-T/2-.09,T/2+.09,M+.07,M+2.35,.08),v.panel("garage",-T/2,T/2,M+.08,M+2.24,.12);continue}for(let T of[-y*.44,y*.44]){let S=v.post(T,0,.09);S!==null&&v.box("frame",S-.09,S+.09,M+.1,Math.min(h,M+2.7),.1,-.1)}x.kind==="screen porch"&&v.panel("screen",-y*.48,y*.48,M+.76,Math.min(h-.15,M+2.48),.01),v.box("ledge",-y/2,y/2,M+.045,M+.19,.08,-.12)}if(o.homeModel){let[x,m]=o.front.edge,g=wo(s,e,x,m,i,1,.12,n),v=x[1]<m[1]?1:-1,M=T=>(T-.5)*g.len*v,y=g.ground;if(o.homeModel==="628157057"){for(let S of[.16,.41,.64])Ul(g,s,M(S),y+.82,1.23,1.39,"sash",!0);let T=M(.83);g.box("frame",T-.55,T+.55,y+.1,y+2.34,.06),g.panel("door",T-.49,T+.49,y+.12,y+2.26,.075),g.box("ledge",T-1.1,T+1.1,y+.04,y+.2,.86),g.box("frame",T-1.21,T+1.21,y+2.61,y+2.72,.94);for(let S of[-1,1]){let _=g.post(T+S*1.04,.835,.06);_!==null&&g.box("frame",_-.06,_+.06,y+.15,y+2.61,.9,.77)}}else{let[T,S]=[M(.008),M(.815)].sort((b,C)=>b-C);g.panel("wall-brick",T,S,y+.02,y+1,.16,[g.len*.8/3,.34]);for(let b of[.24,.64])Ul(g,s,M(b),y+1.02,2.64,1.25,"picture",!1);let _=M(.45);g.box("frame",_-.56,_+.56,y+.18,y+2.42,.19),g.panel("door",_-.48,_+.48,y+.2,y+2.34,.21);for(let b=0;b<3;b++)g.box("ledge",_-.85,_+.85,y+.08*b,y+.08*(b+1),.91-b*.18)}}for(let x of o.frontages||[]){let[m,g]=x.edge,v=wo(s,e,m,g,i,1,.22,n);v.panel("wall-"+x.wall,-v.len*.5,v.len*.5,u,h,0,[v.len/3,(h-u)/3]),gp(v,s,x,u,h,!0,Math.min(v.ground,h-2.1))}hp(t[5],i,o,(x,m)=>wo(s,e,x,m,i,1,0,n),s);let p=dp.get(t[5]);Nl(s,i,r,a,d),p||mp(s,i,o),p&&(t[5]!==451755565||i.some(([x])=>x>80))&&fp(s,e,p)}function Gh(s,e,t,n){if(!t)return!1;let[i,r]=t,o=r[0]-i[0],a=r[1]-i[1],l=Math.hypot(o,a)||1,c=(s[0]+e[0])/2-i[0],h=(s[1]+e[1])/2-i[1],u=(c*o+h*a)/l;return Math.abs(c*a-h*o)/l<n&&u>-.2&&u<l+.2&&Math.abs((s[0]-e[0])*a-(s[1]-e[1])*o)/l<n}function _p(s,e,t,n){let[i,r,o,a,l]=t,c=e.ground(i,r),h=Math.sin(o),u=Math.cos(o),d=(x,m,g)=>[i+u*x+h*g,c+m,r-h*x+u*g],f=(x,m,g,v,M,y)=>s(x).quad(d(m,v,y),d(g,v,y),d(g,M,y),d(m,M,y));f("door",-.54,.54,.1,2.35,.06);let p=(x,m,g,v,M)=>{s(x).quad(d(-m/2,M,.01),d(-m/2,M,v),d(m/2,M,v),d(m/2,M,.01)),f(x,-m/2,m/2,M-g,M,v)};if(p("path",1.55,.14,.85,.16),!(!l||Math.abs(n)%3===1)){p("porch",a,.15,1.65,2.62),p("path",a,.25,1.65,.26);for(let x of[-a*.44,a*.44]){let m=s("white");m.quad(d(x-.06,.18,1.45),d(x+.06,.18,1.45),d(x+.06,2.56,1.45),d(x-.06,2.56,1.45)),m.quad(d(x,.18,1.39),d(x,.18,1.51),d(x,2.56,1.51),d(x,2.56,1.39))}}}var Tv=[[3493176,5401667,7504465],[3953469,6059077,8491095],[3164984,4810565,7176528],[3427899,5138760,7635802]];function yp(s,e,t,n,i,r){let o=new io(1,1),a=o.attributes.position,l=o.attributes.normal,c=o.index?Array.from(o.index.array):Array.from({length:a.count},(f,p)=>p),h=new qe().makeScale(...n).setPosition(...t),u=new Re,d=new U(.42,.82,.39).normalize();for(let f=0;f<c.length;f++){let p=c[f],x=new U().fromBufferAttribute(a,p).applyMatrix4(h);s.push(x.x,x.y,x.z);let m=Math.floor(f/3),g=new U().fromBufferAttribute(l,p).normalize(),v=Math.abs(Math.sin((m+1)*12.9898+(i+1)*78.233)*43758.5453)%1,M=g.dot(d),y=M>.28&&v>.18?2:M<-.22||v<.24?0:1;u.setHex(r[y]),e.push(u.r,u.g,u.b)}o.dispose()}function Fl(s,e,t,n,i){let r=new U(...e),o=new U(...t),a=o.clone().sub(r),l=a.length(),c=new gn(i,n,l,5,1,!1),h=new Gt().setFromUnitVectors(new U(0,1,0),a.normalize());c.applyMatrix4(new qe().compose(r.add(o).multiplyScalar(.5),h,new U(1,1,1)));let u=c.attributes.position,d=c.index?c.index.array:null;if(d)for(let f=0;f<d.length;f++){let p=d[f];s.push(u.getX(p),u.getY(p),u.getZ(p))}else for(let f=0;f<u.count;f++)s.push(u.getX(f),u.getY(f),u.getZ(f));c.dispose()}function wv(s){let e=[],t=[],n=[],i=()=>{let u=Math.sin((e.length+n.length+s*41)*12.9898)*43758.5453;return u-Math.floor(u)},r=Tv[s];if(s===3){Fl(n,[0,0,0],[0,.7,0],.052,.015);for(let d=0;d<8;d++){let f=.23+d*.085,p=.12+d*.045,x=d%2?.045:-.045;for(let m of[-1,1])Fl(n,[0,f,x*.3],[m*p,f+.08,x],.018,.006),yp(e,t,[m*p*.57,f+.08,x],[p*.58,.055,p*.48],d+(m>0?7:0),r)}}else{Fl(n,[0,0,0],[0,.72,0],.055,.016);let u=s===0?7:s===1?9:8;for(let d=0;d<u;d++){let f=d/u*Math.PI*2+s*.47,p=d===0?0:.24,x=d===0?.79:.61+d%3*.105,m=Math.cos(f)*p,g=Math.sin(f)*p,v=(d===0?.27:.235)+(i()-.5)*.035,M=v*(.88+i()*.22),y=(d===0?.19:.165)+(i()-.5)*.025;yp(e,t,[m,x,g],[v,y,M],d,r),d%2===0&&Fl(n,[0,.43,0],[m*.72,x-.045,g*.72],.018,.006)}}let o=new $e;o.setAttribute("position",new Ce(e,3)),o.setAttribute("color",new Ce(t,3)),o.computeVertexNormals();let a=new $e;a.setAttribute("position",new Ce(n,3)),a.computeVertexNormals();let l=new ot,c=new Le(o,new Ge({vertexColors:!0,roughness:1,flatShading:!0})),h=new Le(a,new Ge({color:7493692,roughness:1,flatShading:!0}));for(let u of[c.material,h.material])u.alphaToCoverage=!0,u.onBeforeCompile=d=>{d.vertexShader=`varying float crownCoverage;
`+d.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
 crownCoverage=1.0-smoothstep(23.0,31.9,distance(modelMatrix[3].xz,cameraPosition.xz));`),d.fragmentShader=`varying float crownCoverage;
`+d.fragmentShader.replace("#include <opaque_fragment>",`#include <opaque_fragment>
 gl_FragColor.a *= crownCoverage;`)},u.customProgramCacheKey=()=>"oxford-near-crown-coverage-v1";return c.castShadow=!0,c.receiveShadow=!0,h.castShadow=!0,h.receiveShadow=!0,l.add(h,c),{template:l,width:1,depth:1}}var Ol=class{constructor(e,t){this.world=t,this.scene=e,this.models=[0,1,2,3].map(wv),this.crownMaterials=this.models.map(n=>n.template.children[1].material),this.cardMaterials=[0,1,2,3].map(n=>t.mat["tree"+n]),this.living=new Map,this.last=[1/0,1/0],this.setDusk(!1);for(let n=0;n<4;n++){let i=t.mat["tree"+n];i.onBeforeCompile=r=>{r.vertexShader=`varying vec2 treeWorldPosition;
`+r.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
 treeWorldPosition=(modelMatrix*vec4(transformed,1.0)).xz;`),r.fragmentShader=`varying vec2 treeWorldPosition;
`+r.fragmentShader.replace("#include <alphatest_fragment>",`diffuseColor.a*=smoothstep(22.0,31.0,distance(treeWorldPosition,cameraPosition.xz));
 #include <alphatest_fragment>`)},i.customProgramCacheKey=()=>`oxford-tree-crossfade-${n}-v2`,i.needsUpdate=!0}}setDusk(e){let t=e?8174543:16777215;for(let n of[...this.cardMaterials,...this.crownMaterials])n.color.setHex(t),n.emissive.setHex(e?1194821:0),n.emissiveIntensity=e?.38:0}addTree(e,t,n,i){let r=n+"_"+i;if(this.living.has(r))return;let[o,a,l,c]=e.data.trees[t],h=c===3?3:l<9?0:c%3,u=this.models[h],d=u.template.clone(),f=this.world.ecology.crownRadius(e,t,l),p=(o+a)*1.63;d.position.set(o,this.world.city.ground(o,a),a),d.rotation.y=p,d.scale.set(f*2/u.width,l,f*2/u.depth),this.scene.add(d),this.living.set(r,d)}tileLoaded(e,t,n){for(let i=0;i<(e.data?.trees?.length||0);i++){let[r,o]=e.data.trees[i];Math.hypot(r-t,o-n)<=32&&this.addTree(e,i,r,o)}}tick(e,t){if(Math.hypot(e-this.last[0],t-this.last[1])<1.8)return;this.last=[e,t];let n=new Set;for(let i=Math.floor((e-36)/512);i<=Math.floor((e+36)/512);i++)for(let r=Math.floor((t-36)/512);r<=Math.floor((t+36)/512);r++){let o=this.world.tiles.get(i+"_"+r);for(let a=0;a<(o?.data?.trees?.length||0);a++){let[l,c,h,u]=o.data.trees[a];if(Math.hypot(l-e,c-t)>32)continue;let d=l+"_"+c;n.add(d),this.addTree(o,a,l,c)}}for(let[i,r]of this.living)n.has(i)||(this.scene.remove(r),this.living.delete(i))}};var vp=s=>()=>(s=Math.imul(s,1664525)+1013904223>>>0)/4294967296,Bl=class{constructor(){this.waterMaterial=new Qt({roughness:.62,metalness:.015,clearcoat:.12,clearcoatRoughness:.5,emissive:462868,emissiveIntensity:.08,transparent:!0,depthWrite:!1,side:We}),this.waterClock={value:0},this.waterMaterial.onBeforeCompile=e=>{e.uniforms.waterTime=this.waterClock,e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
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
    normal=normalize(mix(normal,waveNormal,0.36*normalFade));`)},this.waterMaterial.customProgramCacheKey=()=>"oxford-water-painterly-v3",this.litterMaterial=new Ge({map:this.leafLitterTexture(),transparent:!0,alphaTest:.025,depthWrite:!1,roughness:1,side:We}),this.shrubMaterial=new Ge({map:this.shrubTexture(),transparent:!0,alphaTest:.32,depthWrite:!1,roughness:1,side:We})}tick(e){this.waterClock.value=e}leafLitterTexture(){let e=document.createElement("canvas");e.width=e.height=128;let t=e.getContext("2d"),n=vp(1279607110);for(let r=0;r<460;r++){let o=n()*Math.PI*2,a=Math.sqrt(n())*59,l=64+Math.cos(o)*a,c=64+Math.sin(o)*a,h=Math.max(0,1-a/67),u=["#514938","#665b42","#726744","#4e5638","#858052"];t.save(),t.translate(l,c),t.rotate(n()*Math.PI),t.globalAlpha=(.24+n()*.44)*h,t.fillStyle=u[Math.floor(n()*u.length)],t.beginPath(),t.ellipse(0,0,1.2+n()*3.4,.5+n()*1.1,0,0,Math.PI*2),t.fill(),t.restore()}let i=new mn(e);return i.colorSpace=Ke,i.anisotropy=4,i}shrubTexture(){let e=document.createElement("canvas");e.width=128,e.height=96;let t=e.getContext("2d"),n=vp(1397248597),i=["#455b36","#526940","#65754a","#788252","#394d33"];for(let o=0;o<270;o++){let a=8+n()*112,l=19+n()*67,c=Math.abs(a-64)/64;l<24+c*25&&n()<.76||(t.save(),t.translate(a,l),t.rotate(n()*Math.PI),t.globalAlpha=.62+n()*.36,t.fillStyle=i[Math.floor(n()*i.length)],t.beginPath(),t.ellipse(0,0,2+n()*4,.8+n()*2,0,0,Math.PI*2),t.fill(),t.restore())}let r=new mn(e);return r.colorSpace=Ke,r.anisotropy=4,r}crownRadius(e,t,n){let i=e?.ecology?.treeRadiusDm?.[t];return Number.isFinite(i)&&i>0?i*.1:Vn.clamp(n*.28,1.45,8.5)}understory(e,t){if(!t?.length)return null;let n=[],i=[],r=[],o=[],a=(h,u,d,f,p,x)=>{h.push(...d,...f,...p,...x),u.push(0,0,1,0,1,1,0,1)};for(let[h,u,d,f]of t){let p=d*.1,x=f*.001,m=Math.cos(x),g=Math.sin(x),v=[[-p,-p],[p,-p],[p,p],[-p,p]].map(([T,S])=>{let _=h+T*m-S*g,b=u+T*g+S*m;return[_,e.ground(_,b)+.028,b]});a(n,i,...v);let M=p*.86,y=.36+p*.3;for(let T of[x,x+Math.PI/2]){let S=Math.cos(T)*M,_=Math.sin(T)*M,b=e.ground(h-S,u-_)+.02,C=e.ground(h+S,u+_)+.02;a(r,o,[h-S,b,u-_],[h+S,C,u+_],[h+S,C+y,u+_],[h-S,b+y,u-_])}}let l=(h,u,d)=>{let f=new $e,p=[];for(let m=0;m<h.length/3;m+=4)p.push(m,m+1,m+2,m,m+2,m+3);f.setAttribute("position",new Ce(h,3)),f.setAttribute("uv",new Ce(u,2)),f.setIndex(p),f.computeVertexNormals();let x=new Le(f,d);return x.castShadow=!1,x.receiveShadow=!1,x},c=new ot;return c.add(l(n,i,this.litterMaterial)),c.add(l(r,o,this.shrubMaterial)),c}waterSurface(e,t,n=[]){if(t.length<3)return null;let i=[t,...n],r=[];for(let M of i)for(let y=0;y<M.length;y++){let T=M[y],S=M[(y+1)%M.length];for(let _=0;_<4;_++){let b=_/4;r.push(e.ground(T[0]+(S[0]-T[0])*b,T[1]+(S[1]-T[1])*b))}}r.sort((M,y)=>M-y);let o=r[0],a=r[Math.floor((r.length-1)*.05)],l=Math.min(a-.05,o+.18)+.04,c=i.map(M=>M.map(([y,T])=>new re(y,T))),h=rn.triangulateShape(c[0],c.slice(1)),u=c.flat(),d=[],f=[],p=(M,y)=>{let T=1/0;for(let S of i)for(let _=0;_<S.length;_++){let b=S[_],C=S[(_+1)%S.length],w=C[0]-b[0],R=C[1]-b[1],L=Vn.clamp(((M-b[0])*w+(y-b[1])*R)/(w*w+R*R||1),0,1);T=Math.min(T,Math.hypot(M-b[0]-w*L,y-b[1]-R*L))}return T},x=M=>{d.push(M.x,l,M.y),f.push(p(M.x,M.y))},m=(M,y,T,S=0)=>{let _=M.distanceTo(y),b=y.distanceTo(T),C=T.distanceTo(M);if(Math.max(_,b,C)<=10||S>=14){x(M),x(y),x(T);return}if(_>=b&&_>=C){let R=M.clone().add(y).multiplyScalar(.5);m(M,R,T,S+1),m(R,y,T,S+1)}else if(b>=C){let R=y.clone().add(T).multiplyScalar(.5);m(M,y,R,S+1),m(M,R,T,S+1)}else{let R=T.clone().add(M).multiplyScalar(.5);m(M,y,R,S+1),m(R,y,T,S+1)}};for(let M of h)m(u[M[0]],u[M[1]],u[M[2]]);let g=new $e;g.setAttribute("position",new Ce(d,3)),g.setAttribute("shoreDistance",new Ce(f,1)),g.computeVertexNormals();let v=new Le(g,this.waterMaterial);return v.receiveShadow=!0,v.userData.waterLevel=l,v}};var kl=[];function Mp(s){let e=[16760438,16765069,16755298],t=[.32,.27,.39];for(let n=0;n<kl.length;n++){let i=kl[n];i.emissive.setHex(s?e[n]:4471341),i.emissiveIntensity=s?t[n]:.012}}function zl(s){let e=s>>>0;return()=>(e=Math.imul(e,1664525)+1013904223>>>0)/4294967296}function Vh(s,e,t,n=!0){let i=document.createElement("canvas");i.width=s,i.height=e,t(i.getContext("2d"),s,e);let r=new mn(i);return r.colorSpace=Ke,r.anisotropy=8,n&&(r.wrapS=r.wrapT=Nt),r}function xs(s,e,t,n=512){return Vh(n,128,(i,r,o)=>{e&&(i.fillStyle=e,i.fillRect(0,0,r,o)),i.fillStyle=t,i.font="bold 62px Georgia",i.textAlign="center",i.textBaseline="middle",i.fillText(s,r/2,o/2,r*.93)},!1)}function ti(s){let e=new At().load("data/"+s);return e.colorSpace=Ke,e.anisotropy=8,e.wrapS=e.wrapT=Nt,e}function Sp(){let s={},e=(n,i)=>s[n]=new Ge({roughness:.91,side:We,...i}),t=new At().load("data/asphalt.jpg");t.colorSpace=Ke,t.wrapS=t.wrapT=Nt,t.anisotropy=8,e("road",{map:t,color:11645869}),e("path",{map:ti("concrete.jpg"),color:13551797}),e("dirt",{color:11836542}),e("edge",{color:10657163}),e("yellow",{color:14858580}),e("white",{color:13947578}),e("roof",{color:6907745}),e("shingle",{map:ti("illustration/roof-shingle.png"),color:6841438}),e("water",{color:6523274,metalness:.25,roughness:.38});for(let n=0;n<4;n++)s["shingle"+n]=s.shingle.clone(),s["shingle"+n].color.set([10063490,13548714,15261885,16447457][n]);e("porch",{color:7634546}),e("door",{map:Vh(96,192,n=>{n.fillStyle="#ded7c3",n.fillRect(0,0,96,192),n.fillStyle="#435f56",n.fillRect(7,6,82,186),n.fillStyle="#658081",n.fillRect(17,18,63,73),n.fillStyle="#d5c8ad",n.fillRect(47,18,2,73),n.fillRect(17,53,63,2),n.fillStyle="#354b42",n.strokeStyle="#76857a";for(let i of[15,51])n.fillRect(i,108,28,63),n.strokeRect(i,108,28,63);n.fillStyle="#cbb887",n.fillRect(76,94,5,8)})});for(let n of["house","commercial","campus","store"])for(let i=0;i<4;i++)e(n+i,{map:ti(n+i+".jpg")});for(let n=0;n<4;n++){let i=new At().load("data/tree"+n+".png");i.colorSpace=Ke,s["tree"+n]=new ss({map:i,alphaTest:.33,side:We,emissive:2370331,emissiveIntensity:.28})}for(let n of["brick","lap","board","metal","stucco","block","stone","painted"]){let i=ti("illustration/wall-"+n+".png"),r=new At().load("data/architecture/"+n+"-height.jpg");r.wrapS=r.wrapT=Nt,r.anisotropy=4;let o=n==="brick"||n==="stone"||n==="block"?.026:n==="stucco"?.012:.017;e("wall-"+n,{map:i,bumpMap:r,bumpScale:o,roughness:.96})}kl=[];for(let[n,i]of[["glass-sash","sash"],["glass-shop","shopglass"],["garage","garage"],["shutter","shutter"],["screen","screen"]]){let r=ti("architecture/"+i+".jpg"),o=n==="glass-sash"||n==="glass-shop";e(n,{map:r,roughness:o?.38:.88,metalness:o?.08:0})}for(let n=0;n<3;n++){let i=new Ge({map:ti("illustration/commercial-display-"+n+".png"),emissiveMap:ti("illustration/commercial-glow.png"),emissive:4471341,emissiveIntensity:.012,roughness:.58,metalness:.03,side:We});s["glass-display-"+n]=i,kl.push(i)}for(let[n,i]of[["reveal",4210230],["frame",15391158],["ledge",13216121],["awning",6715756],["rail",4475207]])e(n,{color:i,roughness:n==="frame"||n==="ledge"?.82:.92});s.frame.map=ti("illustration/trim-painted.png"),s.ledge.map=ti("illustration/wood-grain.png"),s.ink=new $t({color:3419947,transparent:!0,opacity:.88,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,side:We}),s.ink.onBeforeCompile=n=>{n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
varying float vOxfordInkDistance;`),n.vertexShader=n.vertexShader.replace("#include <project_vertex>",`#include <project_vertex>
vOxfordInkDistance = length(mvPosition.xyz);`),n.fragmentShader=n.fragmentShader.replace("#include <common>",`#include <common>
varying float vOxfordInkDistance;`),n.fragmentShader=n.fragmentShader.replace("#include <opaque_fragment>",`diffuseColor.a *= 1.0 - smoothstep(24.0, 82.0, vOxfordInkDistance);
#include <opaque_fragment>`)},s.ink.customProgramCacheKey=()=>"oxford-illustrated-ink-v1",s.rail=s.ink.clone(),s.rail.color.setHex(5523517),s.rail.opacity=.96,e("hardware",{color:9140048,metalness:.68,roughness:.32});for(let n of["shingle","metal","membrane","tile"]){let i=ti("illustration/roof-"+n+".png");e("surface-"+n,{vertexColors:!0,map:i,roughness:n==="metal"?.7:.94,metalness:n==="metal"?.18:0})}for(let n of["0258","0261","0263","0265","0266","0267"]){let i=new At().load("data/architecture/HABS-"+n+".png");i.colorSpace=Ke,i.anisotropy=8,e("habs-"+n,{map:i,alphaTest:.48,polygonOffset:!0,polygonOffsetFactor:-1})}e("stained",{map:Vh(120,192,n=>{n.fillStyle="#494942",n.fillRect(0,0,120,192);for(let i=-24;i<210;i+=24)for(let r=-12;r<135;r+=24)n.fillStyle=["#9b7863","#93a2a6","#766c85","#c2aa72","#668194"][Math.abs(r*7+i*3)%5],n.beginPath(),n.moveTo(r+11,i),n.lineTo(r+21,i+11),n.lineTo(r+11,i+22),n.lineTo(r+1,i+11),n.fill()})}),e("historic-roof",{color:6514019});for(let n of["left","center","right"]){let i=new At().load("data/architecture/stjohn-"+n+".png");i.colorSpace=Ke,i.anisotropy=8,e("stjohn-"+n,{map:i,alphaTest:.4})}return cp(s,xs),s}function _s(s,e=!1){let t=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},o={},a=s[0].morphTargetsRelative,l=new $e;l.morphTargetsRelative=a;let c=0;for(let h=0;h<s.length;++h){let u=s[h],d=0,f=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in u.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(u.attributes[p]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in u.morphAttributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(u.morphAttributes[p].length!==s[0].morphAttributes[p].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have the same number of morph targets for the "'+p+'" morph attribute.'),null;o[p]===void 0&&(o[p]=[]),o[p].push(u.morphAttributes[p]),f++}if(f!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of morph attributes."),null;if(e){let p;if(t)p=u.index.count;else if(u.attributes.position!==void 0)p=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,h),c+=p}}if(t){let h=0,u=[];for(let d=0;d<s.length;++d){let f=s[d].index;for(let p=0;p<f.count;++p)u.push(f.getX(p)+h);h+=s[d].attributes.position.count}l.setIndex(u)}for(let h in r){let u=bp(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let x=0;x<o[h].length;++x)f.push(o[h][x][d]);let p=bp(f);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(p)}}}return l}function bp(s){let e,t,n,i=-1,r=0;for(let c=0;c<s.length;++c){let h=s[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let o=new e(r),a=new zt(o,t,n),l=0;for(let c=0;c<s.length;++c){let h=s[c];if(h.isInterleavedBufferAttribute){let u=l/t;for(let d=0,f=h.count;d<f;d++)for(let p=0;p<t;p++){let x=h.getComponent(d,p);a.setComponent(d+u,p,x)}}else o.set(h.array,l);l+=h.count*t}return i!==void 0&&(a.gpuType=i),a}function Hh(s,e){if(e===gh)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===ar||e===yo){let t=s.getIndex();if(t===null){let r=[],o=s.getAttribute("position");if(o!==void 0){for(let a=0;a<o.count;a++)r.push(a);s.setIndex(r),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}let n=t.count-2,i=[];if(e===ar)for(let r=1;r<=n;r++)i.push(t.getX(0)),i.push(t.getX(r)),i.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(i.push(t.getX(r)),i.push(t.getX(r+1)),i.push(t.getX(r+2))):(i.push(t.getX(r+2)),i.push(t.getX(r+1)),i.push(t.getX(r)));return i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}var wn=mt(15262671),ni=mt(15985882),Si=mt(9789001),Tp=mt(4347991,.36),Ao=mt(3491134),Wh=mt(6850684),Eo=mt(8947068),Av=mt(9519936);function Xh(s,e,t,n,i,r,o,a,l,c=0){let h=new Le(new dn(r,o),new Ge({map:xs(e,a,l),side:We,transparent:!a}));h.position.set(t,n,i),h.rotation.y=c,s.add(h)}function hr(s,e,t,n){for(let[i,r]of[[.22,.45],[.18,.8],[.24,1.1]])we(s,e+r,i,t+r,0,n,0,ni),n+=i}function ys(s,e,t,n,i,r){It(s,r*.79,r,i,e,n+i/2,t,ni,14),we(s,r*2.45,.28,r*2.45,e,n+.14,t,wn),we(s,r*2.6,.32,r*2.6,e,n+i-.16,t,wn)}function Oi(s,e,t,n,i,r){we(s,i+.32,r+.36,.22,e,t,n,ni),we(s,i,r,.26,e,t,n,Tp),we(s,.07,r,.28,e,t,n,wn),we(s,i,.07,.29,e,t,n,wn)}function Gl(s,e,t,n,i){let r=new ns;r.moveTo(-e/2,0),r.lineTo(e/2,0),r.lineTo(0,e*.18),r.closePath();let o=new Le(new $s(r,{depth:i,bevelEnabled:!1}),wn);o.position.set(0,t,n),s.add(o)}function Ev(){let s=document.createElement("canvas");s.width=s.height=256;let e=s.getContext("2d");e.fillStyle="#f5ecda",e.fillRect(0,0,256,256),e.strokeStyle="#36403e",e.lineWidth=7,e.beginPath(),e.arc(128,128,117,0,Math.PI*2),e.stroke(),e.font="bold 22px Georgia",e.fillStyle="#394440",e.textAlign="center",e.textBaseline="middle",["XII","I","II","III","IV","V","VI","VII","VIII","IX","X","XI"].forEach((i,r)=>e.fillText(i,128+Math.sin(r*Math.PI/6)*89,128-Math.cos(r*Math.PI/6)*89)),e.beginPath(),e.moveTo(76,92),e.lineTo(128,128),e.lineTo(190,75),e.stroke();let n=new mn(s);return n.colorSpace=Ke,new Ge({map:n})}function Rv(s){we(s,43,8.4,16.8,0,4.1,0,wn),hr(s,43,16.8,8.35);let e=new ns;e.moveTo(-8.85,0),e.lineTo(8.85,0),e.lineTo(0,2.1),e.closePath();let t=new Le(new $s(e,{depth:43.8,bevelEnabled:!1}),Eo);t.rotation.y=Math.PI/2,t.position.set(-21.9,8.88,0),s.add(t);for(let r of[-1,1]){let o=new ot;o.position.x=r*21.51,o.rotation.y=r*Math.PI/2;for(let a of[-5.2,0,5.2])for(let l of[2.5,6.3])Oi(o,a,l,0,1.6,2.65);s.add(o)}for(let r of[-1,1]){for(let o=-18;o<=18;o+=4.5)Oi(s,o,2.45,r*8.47,1.65,2.9),Oi(s,o,6.3,r*8.47,1.65,2.65);for(let o of[-6,-2,2,6])ys(s,o,r*11.5,0,8.2,.55);we(s,15,1,4.5,0,8.3,r*10.1,ni),Gl(s,15,8.7,r*10.2-1.8,3.6)}we(s,6.8,4.1,6.8,0,11.4,0,ni),hr(s,6.8,6.8,13.35),we(s,5.6,5.5,5.6,0,16.2,0,wn);let n=Ev();for(let r=0;r<4;r++){let o=new ot;o.rotation.y=r*Math.PI/2,s.add(o);for(let l of[-2.25,2.25])ys(o,l,2.91,13.75,4.7,.2);we(o,2.45,2.35,.1,0,12.25,3.47,Ao);for(let l=0;l<7;l++)we(o,2.5,.12,.18,0,11.25+l*.3,3.57,Eo);let a=new Le(new ts(1.66,40),n);a.position.set(0,16.4,2.86),o.add(a)}hr(s,5.6,5.6,18.85);let i=new Le(new xn(3.53,32,16,0,Math.PI*2,0,Math.PI/2),Wh);i.position.y=19.4,i.scale.y=1.18,s.add(i),It(s,.04,.19,2,0,24,0,Ao)}function Cv(s){we(s,47,13.5,24,0,6.6,0,Si),hr(s,47,24,13.4);for(let e=-19;e<=19;e+=4.75)for(let t of[3,7.2,11.1])Oi(s,e,t,12.06,1.55,2.45);for(let e=0;e<6;e++)ys(s,-10+e*4,16,1.1,12,.62);for(let e=0;e<5;e++)we(s,25-e*.3,.24,5.5-e*.7,0,.12+e*.24,15,wn);we(s,24,1.1,6.2,0,13.7,14.2,ni),Gl(s,24,14.25,11.2,6.1)}function Iv(s){let e=mt(8932155),t=mt(10639429);we(s,22,9.7,10.6,0,4.8,0,e),hr(s,22,10.6,9.65);let n=new At().load("data/ventress-front.jpg");n.colorSpace=Ke;let i=new Le(new dn(11,8.7),new Ge({map:n}));i.position.set(4.5,4.65,5.34),s.add(i);for(let o of[-10,10]){let a=It(s,3.15,3.15,9.6,o,4.8,0,e,24);It(s,.05,3.55,1.5,o,10.3,0,t,24)}let r=-2.8;we(s,6.3,14.7,6,r,7.35,2.6,e),Gl(s,6.4,14.6,.25,5.4);for(let[o,a,l]of[[r-2.7,1.65,16.4],[r+2.8,.8,14.9]])It(s,a,a,l,o,l/2,5.15,e,20),It(s,a*1.06,a,.35,o,l,5.15,wn,20),It(s,.08,a*1.07,a*2.9,o,l+a*1.45,5.15,t,20);for(let o of[3.2,7.1,12.2])Oi(s,r,o,5.65,1.25,2.6);Xh(s,"VENTRESS HALL",4.6,4.7,5.4,3.6,.38,"#894e3e","#f0d9af")}function Pv(s){we(s,48,6.45,14,0,3.15,0,Si);for(let e of[-21.5,0,21.5]){we(s,9.7,7.3,18,e,3.6,0,Si),It(s,4.2,4.3,2.7,e,8.45,0,wn,24);let t=new Le(new xn(4.35,24,10,0,Math.PI*2,0,Math.PI/2),Eo);t.scale.y=.26,t.position.set(e,9.8,0),s.add(t)}for(let e=-19;e<=19;e+=4.75)Oi(s,e,3,7.04,1.35,2.8);for(let e of[-4.2,-1.4,1.4,4.2])ys(s,e,11.5,.35,6.6,.43);we(s,10.8,.6,4.9,0,7.15,9.75,wn),Gl(s,11,7.45,7.5,4.7)}function Lv(s){we(s,17,1.15,16,0,.5,0,Si);for(let t of[-7,0,7])for(let n of[-6,6])ys(s,t,n,.95,4.2,.25);let e=It(s,0,12.7,2.8,0,6.5,0,Wh,4);e.rotation.y=Math.PI/4}function Dv(s){let e=(t,n,i,r,o,a,l)=>{let c=[];for(let u=0;u<64;u++){let d=m=>{let g=m*Math.PI/32;return[Math.sign(Math.cos(g))*Math.abs(Math.cos(g))**.55,Math.sign(Math.sin(g))*Math.abs(Math.sin(g))**.55]},f=d(u),p=d(u+1),x=[[f[0]*t,a,f[1]*n],[p[0]*t,a,p[1]*n],[p[0]*i,o,p[1]*r],[f[0]*i,o,f[1]*r]];c.push(...x[0],...x[1],...x[2],...x[0],...x[2],...x[3])}let h=new $e;h.setAttribute("position",new Ce(c,3)),h.computeVertexNormals(),l.side=We,s.add(new Le(h,l))};e(99,113,99,113,0,19,Si);for(let t=0;t<15;t++)e(45+(t+1)*3.6,69+(t+1)*2.93,45+t*3.6,69+t*2.93,1.2+t*1.2,2.4+t*1.2,t%4===0?Av:Eo);we(s,48.8,.12,109.73,-3.55,.12,-9.31,mt(5406802));for(let t=-5;t<=5;t++)we(s,48.8,.06,.2,-3.55,.2,-9.31+t*9.14,ni);we(s,10,13,83,-96,23,0,Si),we(s,10.3,4,83,-96,25,0,Tp);for(let t of[-87,87])for(let n of[-63,63])It(s,.38,.75,35,t,17.5,n,Eo),we(s,12,2.2,.7,t,35,n,wn);Xh(s,"VAUGHT\u2013HEMINGWAY STADIUM",0,13,-113.4,55,4.5,"#764839","#fff3df",Math.PI)}function Nv(s){we(s,7,11,7,0,5.5,0,Si);for(let t of[-2.7,2.7])for(let n of[-2.7,2.7])ys(s,t,n,11,4,.4);we(s,7.4,.55,7.4,0,15.1,0,ni);let e=It(s,0,5.5,3,0,16.8,0,Wh,4);e.rotation.y=Math.PI/4}function Uv(s){for(let e of[-2.3,2.3])we(s,.72,3.8,.85,e,1.9,0,Si),we(s,.9,.22,1,e,3.8,0,wn);we(s,5.6,.68,.25,0,3.86,0,Ao),Xh(s,"WALK OF CHAMPIONS",0,3.88,.15,5.25,.48,"#34483e","#f1dfaf")}function qh(s,e,t,n,i,r,o,a=0){let l=new At().load("data/"+e+".png");l.colorSpace=Ke,l.anisotropy=8;let c=new Ge({map:l,alphaTest:.45,roughness:.94,side:We}),h=new Le(new dn(t,n),c);h.position.set(i,r,o),h.rotation.y=a,s.add(h)}function Fv(s){we(s,6.65,8.7,30.8,0,4.32,0,Si),hr(s,6.65,30.8,8.67),qh(s,"square-books",6.7,8.68,0,4.39,15.45);for(let e=-12;e<14;e+=4){let t=new ot;t.position.set(-3.36,0,e),t.rotation.y=-Math.PI/2,Oi(t,0,6.48,0,1.52,2.4),Oi(t,0,1.71,0,2.4,2.85),s.add(t)}we(s,2.4,.22,30.8,-4.5,3.62,0,ni),we(s,2.45,.22,30.8,-4.5,8.1,0,ni);for(let e=-15;e<15.5;e+=.5)we(s,.055,.98,.055,-5.6,4.16,e,Ao);for(let e=-14.5;e<=15;e+=3.65)ys(s,-5.6,e,0,8.02,.083);we(s,.09,.11,30.8,-5.6,4.69,0,Ao)}function Ov(s){qh(s,"off-square",8.1,7.15,0,3.65,0)}function Bv(s){qh(s,"landrys",30.7,4.15,0,2.14,0)}function Ro(s){s.updateWorldMatrix(!0,!0);let e=s.matrixWorld.clone().invert(),t=new Map,n=[];s.traverse(i=>{if(!i.isMesh||i===s||i.userData.contactDecal)return;let r=i.geometry.index?i.geometry.toNonIndexed():i.geometry.clone();r.applyMatrix4(e.clone().multiply(i.matrixWorld)),r.attributes.uv||r.setAttribute("uv",new Ce(new Float32Array(r.attributes.position.count*2),2));let o=t.get(i.material)||[];o.push(r),t.set(i.material,o),n.push(i)});for(let i of n)i.removeFromParent(),i.geometry.dispose();for(let[i,r]of t){let o=_s(r);for(let l of r)l.dispose();let a=new Le(o,i);a.castShadow=a.receiveShadow=!0,s.add(a)}}var Vl=new Set([188828391,187869639,313153529,3273781,599810022,318274467,16256538]);function wp(s,e){for(let[t,n,i,r]of[[-9.7,46,-.18,Rv],[-1605,109,1.73,Cv],[-1340,97,-.17,Lv],[-1386,116,-.17,Iv],[-1355,-73,-.17,Pv],[-1441.47,508.22,-.60003,Dv],[-1369.42,372.05,-.17,Nv],[-1376,-10,-.17,Uv],[-32.2,111.65,Math.PI-.195,Fv],[34.85,107.37,Math.PI-.2,Ov],[-41.1,160.5,Math.PI*.5-.18,Bv]]){let o=new ot;r(o),Ro(o),o.position.set(t,e.ground(t,n),n),o.rotation.y=i,s.add(o)}}var Ap=mt(6844257),Ep=mt(15065293),kv=mt(10236968),zv=mt(4540737),Ob=mt(13870656),Yh=new Map;function Rp(s,e,t,n,i,r,o,a,l){let c=e+r;Yh.has(c)||Yh.set(c,new Ge({map:xs(e,r,i),side:We}));let h=new Le(new dn(t,n),Yh.get(c));h.position.set(o,a,l),s.add(h)}function Cp(s,e,t,n={}){let i=new Set,r=new ot,o=[],a=n.markWhite||Ep;function l(h,u,d=e.ground.bind(e)){let f=[];for(let[m,g]of h)f.push(m,d(m,g)+.315,g);let p=new $e;p.setAttribute("position",new Ce([...f.slice(0,3),...f.slice(3,6),...f.slice(6,9),...f.slice(0,3),...f.slice(6,9),...f.slice(9,12)],3)),p.computeVertexNormals();let x=new Le(p,u);x.material=u,r.add(x)}function c(h,u,d,f,p,x,m,g,v){let M=(y,T)=>[h[0]+u[0]*y+d[0]*T,h[1]+u[1]*y+d[1]*T];l([M(f,x),M(f,m),M(p,m),M(p,x)],g,v)}for(let[h,u]of e.roadTiles.get(s.key)||[]){let d=e.roads[h];if(d.d)for(let[f,p]of[[d.p[u-1],d.p[u]],[d.p[u],d.p[u-1]]]){let x=e.nodes[f],m=e.nodes[p],g=f+"-"+h;if(i.has(g)||Math.floor(x[0]/512)!==s.xx||Math.floor(x[1]/512)!==s.zz||d.o&&f!==d.p[u]||!x[2])continue;i.add(g);let v=Math.hypot(x[0]-m[0],x[1]-m[1]);if(v<2)continue;let M=(x[0]-m[0])/v,y=(x[1]-m[1])/v,T=[-y,M],S=[M,y],_=e.nodes[d.p[u-1]],b=e.nodes[d.p[u]],C=b[0]-_[0],w=b[1]-_[1],R=C*C+w*w,L=(J,se)=>e.surface(d,u,Math.max(0,Math.min(1,((J-_[0])*C+(se-_[1])*w)/(R||1))),J,se);if(x[2]==="crossing"){if(i.has("cross"+f))continue;i.add("cross"+f);let J=Math.min(d.w*.82,7.2),se=J/2;for(let X=-se;X<=se-.001;X+=.72){let te=Math.min(se,X+.34);c(x,S,T,-.62,.62,X,te,a,L)}continue}if(x[2]!=="stop"&&x[2]!=="traffic_signals"&&x[2]!=="give_way")continue;let B=[x[0]-M*2.25,x[1]-y*2.25],I=d.w/2,O=d.o?-I:.1,G=d.o?I:Math.max(.9,I-.12);c(B,S,T,-.17,.17,O,G,a,L);let D=new ot,W=x[0]-y*(d.w*.5+.62)-M*3.8,N=x[1]+M*(d.w*.5+.62)-y*3.8;D.position.set(W,e.ground(W,N)+.21,N),D.rotation.y=Math.atan2(-M,-y);let V=x[2]==="traffic_signals",H=V?5.7:2.45;if(It(D,.045,.065,H,0,H/2,0,Ap,8),V){let J=d.w*.52;we(D,J,.085,.085,J/2,H,0,Ap),we(D,.45,1.19,.34,J,H-.55,0,zv);let se=[];for(let X=0;X<3;X++){let te=new $t({color:3356973}),Me=new Le(new ts(.135,12),te);Me.position.set(J,H-.2-X*.35,.18),D.add(Me),se.push(te)}o.push({u:f,axis:Math.abs(M)>Math.abs(y),lamps:se})}else{let J=It(D,.405,.405,.05,0,H-.2,0,Ep,8);J.rotation.x=Math.PI/2,J.rotation.y=Math.PI/8,It(D,.374,.374,.055,0,H-.2,.025,kv,8).rotation.copy(J.rotation),Rp(D,x[2]==="stop"?"STOP":"YIELD",.6,.26,"#fff","#9e352a",0,H-.2,.062);let X=[...new Set(e.edges[f].map(te=>e.roads[te[1]].n).filter(te=>te&&te!==d.n))];X.length&&Rp(D,X[0],1.72,.29,"#f6f2dc","#355c4a",0,H+.38,0)}r.add(D)}}r.children.length&&(Ro(r),t.add(r)),s.signals=o}function Ip(s){let e=new Map,t=new Map,n=s.clone();return Pp(s,n,function(i,r){e.set(r,i),t.set(i,r)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;let r=i,o=e.get(i),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function Pp(s,e,t){t(s,e);for(let n=0;n<s.children.length;n++)Pp(s.children[n],e.children[n],t)}var Hl=class extends Zn{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new eu(t)}),this.register(function(t){return new tu(t)}),this.register(function(t){return new nu(t)}),this.register(function(t){return new uu(t)}),this.register(function(t){return new du(t)}),this.register(function(t){return new fu(t)}),this.register(function(t){return new su(t)}),this.register(function(t){return new ru(t)}),this.register(function(t){return new ou(t)}),this.register(function(t){return new au(t)}),this.register(function(t){return new Qh(t)}),this.register(function(t){return new lu(t)}),this.register(function(t){return new iu(t)}),this.register(function(t){return new hu(t)}),this.register(function(t){return new cu(t)}),this.register(function(t){return new $h(t)}),this.register(function(t){return new Wl(t,st.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new Wl(t,st.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new pu(t)})}load(e,t,n,i){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let c=yi.extractUrlBase(e);o=yi.resolveURL(c,this.path)}else o=yi.extractUrlBase(e);this.manager.itemStart(e);let a=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new js(this.manager);l.setPriority(this.priority),l.setCache(this.cache),l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r,o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Fp){try{o[st.KHR_BINARY_GLTF]=new mu(e)}catch(u){i&&i(u);return}r=JSON.parse(o[st.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new Su(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,priority:this.priority,cache:this.cache,withCredentials:this.withCredentials,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case st.KHR_MATERIALS_UNLIT:o[u]=new jh;break;case st.KHR_DRACO_MESH_COMPRESSION:o[u]=new gu(r,this.dracoLoader);break;case st.KHR_TEXTURE_TRANSFORM:o[u]=new xu;break;case st.KHR_MESH_QUANTIZATION:o[u]=new _u;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}parseAsync(e,t){let n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}};function Gv(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}function Pt(s,e,t){let n=s.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}var st={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DIFFUSE_ROUGHNESS:"KHR_materials_diffuse_roughness",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},$h=class{constructor(e){this.parser=e,this.name=st.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,i=t.cache.get(n);if(i)return i;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,h=new Re(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],cn);let u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new cs(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new as(h),c.distance=u;break;case"spot":c=new os(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),ii(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}},jh=class{constructor(){this.name=st.KHR_MATERIALS_UNLIT}getMaterialType(){return $t}extendParams(e,t,n){let i=[];e.color=new Re(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],cn),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,Ke))}return Promise.all(i)}},Qh=class{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=Pt(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},eu=class{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Pt(this.parser,e,this.name)!==null?Qt:null}extendMaterialParams(e,t){let n=Pt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(i.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new re(r,r)}return Promise.all(i)}},tu=class{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_DIFFUSE_ROUGHNESS}getMaterialType(e){return Pt(this.parser,e,this.name)!==null?Qt:null}extendMaterialParams(e,t){let n=Pt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return t.diffuseRoughness=n.diffuseRoughnessFactor!==void 0?n.diffuseRoughnessFactor:0,n.diffuseRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"diffuseRoughnessMap",n.diffuseRoughnessTexture)),Promise.all(i)}},nu=class{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Pt(this.parser,e,this.name)!==null?Qt:null}extendMaterialParams(e,t){let n=Pt(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},iu=class{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Pt(this.parser,e,this.name)!==null?Qt:null}extendMaterialParams(e,t){let n=Pt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessMinimum=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessMaximum=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(i)}},su=class{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_SHEEN}getMaterialType(e){return Pt(this.parser,e,this.name)!==null?Qt:null}extendMaterialParams(e,t){let n=Pt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];if(t.sheenColor=new Re(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],cn)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,Ke)),n.sheenRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(i)}},ru=class{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Pt(this.parser,e,this.name)!==null?Qt:null}extendMaterialParams(e,t){let n=Pt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&i.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(i)}},ou=class{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_VOLUME}getMaterialType(e){return Pt(this.parser,e,this.name)!==null?Qt:null}extendMaterialParams(e,t){let n=Pt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let r=n.attenuationColor||[1,1,1];return t.attenuationColor=new Re().setRGB(r[0],r[1],r[2],cn),Promise.all(i)}},au=class{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_IOR}getMaterialType(e){return Pt(this.parser,e,this.name)!==null?Qt:null}extendMaterialParams(e,t){let n=Pt(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},lu=class{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Pt(this.parser,e,this.name)!==null?Qt:null}extendMaterialParams(e,t){let n=Pt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let r=n.specularColorFactor||[1,1,1];return t.specularColor=new Re().setRGB(r[0],r[1],r[2],cn),n.specularColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,Ke)),Promise.all(i)}},cu=class{constructor(e){this.parser=e,this.name=st.EXT_MATERIALS_BUMP}getMaterialType(e){return Pt(this.parser,e,this.name)!==null?Qt:null}extendMaterialParams(e,t){let n=Pt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&i.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(i)}},hu=class{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Pt(this.parser,e,this.name)!==null?Qt:null}extendMaterialParams(e,t){let n=Pt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&i.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(i)}},uu=class{constructor(e){this.parser=e,this.name=st.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;let r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},du=class{constructor(e){this.parser=e,this.name=st.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=i.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}},fu=class{constructor(e){this.parser=e,this.name=st.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=i.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}},Wl=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let l=i.byteOffset||0,c=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(f){return f.buffer}):o.ready.then(function(){let f=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(f),h,u,d,i.mode,i.filter),f})})}else return null}},pu=class{constructor(e){this.name=st.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=t.meshes[n.mesh];for(let c of i.primitives)if(c.mode!==Ln.TRIANGLES&&c.mode!==Ln.TRIANGLE_STRIP&&c.mode!==Ln.TRIANGLE_FAN&&c.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],l={};for(let c in o)a.push(this.parser.getDependency("accessor",o[c]).then(h=>(l[c]=h,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{let h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,f=[];for(let p of u){let x=new qe,m=new U,g=new Gt,v=new U(1,1,1),M=new zr(p.geometry,p.material,d);for(let T=0;T<d;T++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,T),l.ROTATION&&g.fromBufferAttribute(l.ROTATION,T),l.SCALE&&v.fromBufferAttribute(l.SCALE,T),M.setMatrixAt(T,x.compose(m,g,v));let y=null;for(let T in l)if(T==="_COLOR_0"){let S=l[T];M.instanceColor=new fi(S.array,S.itemSize,S.normalized)}else if(T!=="TRANSLATION"&&T!=="ROTATION"&&T!=="SCALE"){if(y===null){let _=M.geometry;y=new $e,y.name=_.name;for(let b in _.attributes)y.setAttribute(b,_.attributes[b]);for(let b in _.morphAttributes)y.morphAttributes[b]=_.morphAttributes[b];_.index!==null&&y.setIndex(_.index),y.morphTargetsRelative=_.morphTargetsRelative;for(let b of _.groups)y.addGroup(b.start,b.count,b.materialIndex);_.boundingBox!==null&&(y.boundingBox=_.boundingBox.clone()),_.boundingSphere!==null&&(y.boundingSphere=_.boundingSphere.clone()),y.drawRange.start=_.drawRange.start,y.drawRange.count=_.drawRange.count,y.userData=Object.assign({},_.userData),M.geometry=y}let S=l[T];y.setAttribute(T,new fi(S.array,S.itemSize,S.normalized))}Et.prototype.copy.call(M,p),this.parser.assignFinalMaterial(M),f.push(M)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}},Fp="glTF",Co=12,Lp={JSON:1313821514,BIN:5130562},mu=class{constructor(e){this.name=st.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Co),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Fp)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-Co,r=new DataView(e,Co),o=0;for(;o<i;){let a=r.getUint32(o,!0);o+=4;let l=r.getUint32(o,!0);if(o+=4,l===Lp.JSON){let c=new Uint8Array(e,Co+o,a);this.content=n.decode(c)}else if(l===Lp.BIN){let c=Co+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},gu=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=st.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(let h in o){let u=vu[h]||h.toLowerCase();a[u]=o[h]}for(let h in e.attributes){let u=vu[h]||h.toLowerCase();if(o[h]!==void 0){let d=n.accessors[e.attributes[h]],f=ur[d.componentType];c[u]=f.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){i.decodeDracoFile(h,function(f){for(let p in f.attributes){let x=f.attributes[p],m=l[p];m!==void 0&&(x.normalized=m)}u(f)},a,c,cn,d)})})}},xu=class{constructor(){this.name=st.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let n=Math.cos(e.rotation),i=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*i,e.offset.x,-e.repeat.x*i,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},_u=class{constructor(){this.name=st.KHR_MESH_QUANTIZATION}},Xl=class extends Kn{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,h=i-t,u=(n-t)/h,d=u*u,f=d*u,p=e*c,x=p-c,m=-2*f+3*d,g=f-d,v=1-m,M=g-d+u;for(let y=0;y!==a;y++){let T=o[x+y+a],S=o[x+y+l]*h,_=o[p+y+a],b=o[p+y]*h;r[y]=v*T+M*S+m*_+g*b}return r}},Vv=new Gt,yu=class extends Xl{interpolate_(e,t,n,i){let r=super.interpolate_(e,t,n,i);return Vv.fromArray(r).normalize().toArray(r),r}},Ln={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},ur={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Dp={9728:Ft,9729:Ht,9984:Va,9985:rr,9986:ps,9987:Cn},Np={33071:En,33648:Os,10497:Nt},Kh={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},vu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Bi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Hv={CUBICSPLINE:void 0,LINEAR:$i,STEP:Ji},Zh={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Wv(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Ge({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Jn})),s.DefaultMaterial}function vs(s,e,t){for(let n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function ii(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Xv(s,e,t){let n=!1,i=!1,r=!1;for(let c=0,h=e.length;c<h;c++){let u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);let o=[],a=[],l=[];for(let c=0,h=e.length;c<h;c++){let u=e[c];if(n){let d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):s.attributes.position;o.push(d)}if(i){let d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):s.attributes.normal;a.push(d)}if(r){let d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):s.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){let h=c[0],u=c[1],d=c[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=u),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function qv(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Yv(s){let e,t=s.extensions&&s.extensions[st.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Jh(t.attributes):e=s.indices+":"+Jh(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+Jh(s.targets[n]);return e}function Jh(s){let e="",t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function Mu(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Kv(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var Zv=new qe,Su=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Gv,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,o=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let l=a.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&o<98?(this.textureLoader=new At(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)):(this.textureLoader=new ho(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setWithCredentials(this.options.withCredentials),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new js(this.options.manager),this.fileLoader.setPriority(this.options.priority),this.fileLoader.setCache(this.options.cache),this.fileLoader.setResponseType("arraybuffer"),(this.options.withCredentials||this.options.crossOrigin==="use-credentials")&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return vs(r,a,i),ii(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(let l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){let o=t[i].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){let o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let i=n.clone(),r=(o,a)=>{let l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(let[c,h]of o.children.entries())r(h,a.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let i=e(t[n]);if(i)return i}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let i=0;i<t.length;i++){let r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[st.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(r,o){n.load(yi.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){let t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){let o=Kh[i.type],a=ur[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new zt(c,o,l))}let r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],l=Kh[i.type],c=ur[i.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,p=i.normalized===!0,x,m;if(f&&f!==u){let g=Math.floor(d/f),v="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+g+":"+i.count,M=t.cache.get(v);M||(x=new c(a,g*f,i.count*f/h),M=new Hs(x,f/h),t.cache.add(v,M)),m=new Ws(M,l,d%f/h,p)}else a===null?x=new c(i.count*l):x=new c(a,d,i.count*l),m=new zt(x,l,p);if(i.sparse!==void 0){let g=Kh.SCALAR,v=ur[i.sparse.indices.componentType],M=i.sparse.indices.byteOffset||0,y=i.sparse.values.byteOffset||0,T=new v(o[1],M,i.sparse.count*g),S=new c(o[2],y,i.sparse.count*l);a!==null&&(m=new zt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let _=0,b=T.length;_<b;_++){let C=T[_];if(m.setX(C,S[_*l]),l>=2&&m.setY(C,S[_*l+1]),l>=3&&m.setZ(C,S[_*l+2]),l>=4&&m.setW(C,S[_*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=p}return m})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let i=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);let d=(r.samplers||{})[o.sampler]||{};return h.magFilter=Dp[d.magFilter]||Ht,h.minFilter=Dp[d.minFilter]||Cn,h.wrapS=Np[d.wrapS]||Nt,h.wrapT=Np[d.wrapT]||Nt,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Ft&&h.minFilter!==Ht,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());let o=i.images[e],a=self.URL||self.webkitURL,l=o.uri||"",c=!1,h;if(t.isKTX2Loader===!0&&o.bufferView!==void 0)h=n.getDependency("bufferView",o.bufferView).then(function(d){return new Promise(function(f,p){t.parse(d,f,p)})});else{if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(d){c=!0;let f=new Blob([d],{type:o.mimeType});return l=a.createObjectURL(f),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");h=Promise.resolve(l).then(function(d){return new Promise(function(f,p){let x=f;t.isImageBitmapLoader===!0&&(x=function(m){let g=new Wt(m);g.needsUpdate=!0,f(g)}),t.load(yi.resolveURL(d,r.path),x,void 0,p)})})}let u=h.then(function(d){return c===!0&&a.revokeObjectURL(l),ii(d,o),d.userData.mimeType=o.mimeType||Kv(o.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),d});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[st.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[st.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let l=r.associations.get(o);o=r.extensions[st.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new Ks,un.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new Ys,un.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Ge}loadMaterial(e){let t=this,n=this.json,i=this.extensions,r=n.materials[e],o,a={},l=r.extensions||{},c=[];if(l[st.KHR_MATERIALS_UNLIT]){let u=i[st.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),c.push(u.extendParams(a,r,t))}else{let u=r.pbrMetallicRoughness||{};if(a.color=new Re(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],cn),a.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",u.baseColorTexture,Ke)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=We);let h=r.alphaMode||Zh.OPAQUE;if(h===Zh.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===Zh.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==$t&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new re(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==$t&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==$t){let u=r.emissiveFactor;a.emissive=new Re().setRGB(u[0],u[1],u[2],cn)}return r.emissiveTexture!==void 0&&o!==$t&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Ke)),Promise.all(c).then(function(){let u=new o(a);return r.name&&(u.name=r.name),ii(u,r),t.associations.set(u,{materials:e}),r.extensions&&vs(i,u,r),u})}createUniqueName(e){let t=Tt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[st.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Up(l,a,t)})}let o=[];for(let a=0,l=e.length;a<l;a++){let c=e[a],h=Yv(c),u=i[h];if(u)o.push(u.promise);else{let d;c.extensions&&c.extensions[st.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=Up(new $e,c,t),c.mode===Ln.TRIANGLE_STRIP?d=d.then(f=>Hh(f,yo)):c.mode===Ln.TRIANGLE_FAN&&(d=d.then(f=>Hh(f,ar))),i[h]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){let h=o[l].material===void 0?Wv(this.cache):this.getDependency("material",o[l].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(async function(l){let c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let f=0,p=h.length;f<p;f++){let x=h[f],m=o[f],g,v=c[f];if(m.mode===Ln.TRIANGLES||m.mode===Ln.TRIANGLE_STRIP||m.mode===Ln.TRIANGLE_FAN||m.mode===void 0){let M=r.isSkinnedMesh===!0,y=x.hasAttribute("skinIndex")&&x.hasAttribute("skinWeight");M&&y===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),g=M&&y?new Br(x,v):new Le(x,v),g.isSkinnedMesh===!0&&g.normalizeSkinWeights()}else if(m.mode===Ln.LINES)g=new Gr(x,v);else if(m.mode===Ln.LINE_STRIP)g=new es(x,v);else if(m.mode===Ln.LINE_LOOP)g=new Vr(x,v);else if(m.mode===Ln.POINTS)g=new Hr(x,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(g.geometry.morphAttributes).length>0&&qv(g,r),g.name=t.createUniqueName(r.name||"mesh_"+e),ii(g,r),m.extensions&&vs(i,g,m),t.assignFinalMaterial(g),u.push(g)}for(let f=0,p=u.length;f<p;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&vs(i,u[0],r),u[0];let d=new ot;r.extensions&&vs(i,d,r),t.associations.set(d,{meshes:e});for(let f=0,p=u.length;f<p;f++)d.add(u[f]);return d})}loadCamera(e){let t,n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Vt(Vn.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new ls(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),ii(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let r=i.pop(),o=i,a=[],l=[];for(let c=0,h=o.length;c<h;c++){let u=o[c];if(u){a.push(u);let d=new qe;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new kr(a,l)})}loadAnimation(e){let t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,o=[],a=[],l=[],c=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){let f=i.channels[u],p=i.samplers[f.sampler],x=f.target,m=x.node,g=i.parameters!==void 0?i.parameters[p.input]:p.input,v=i.parameters!==void 0?i.parameters[p.output]:p.output;x.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",g)),l.push(this.getDependency("accessor",v)),c.push(p),h.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){let d=u[0],f=u[1],p=u[2],x=u[3],m=u[4],g=[];for(let M=0,y=d.length;M<y;M++){let T=d[M],S=f[M],_=p[M],b=x[M],C=m[M];if(T===void 0)continue;T.updateMatrix&&T.updateMatrix();let w=n._createAnimationTracks(T,S,_,b,C);if(w)for(let R=0;R<w.length;R++)g.push(w[R])}let v=new ao(r,void 0,g);return ii(v,i),v})}createNodeMesh(e){let t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(e){let t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=i.children||[];for(let c=0,h=a.length;c<h;c++)o.push(n.getDependency("node",a[c]));let l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){let h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,Zv)});for(let f=0,p=u.length;f<p;f++)h.add(u[f]);if(h.userData.pivot!==void 0&&u.length>0){let f=h.userData.pivot,p=u[0];h.pivot=new U().fromArray(f),h.position.x-=f[0],h.position.y-=f[1],h.position.z-=f[2],p.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let h;if(r.isBone===!0?h=new Xs:c.length>1?h=new ot:c.length===1?h=c[0]:h=new Et,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=o),ii(h,r),r.extensions&&vs(n,h,r),r.matrix!==void 0){let u=new qe;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!i.associations.has(h))i.associations.set(h,{});else if(r.mesh!==void 0&&i.meshCache.refs[r.mesh]>1){let u=i.associations.get(h);i.associations.set(h,{...u})}return i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],i=this,r=new ot;n.name&&(r.name=i.createUniqueName(n.name)),ii(r,n),n.extensions&&vs(t,r,n);let o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let h=0,u=l.length;h<u;h++){let d=l[h];d.parent!==null?r.add(Ip(d)):r.add(d)}let c=h=>{let u=new Map;for(let[d,f]of i.associations)(d instanceof un||d instanceof Wt)&&u.set(d,f);return h.traverse(d=>{let f=i.associations.get(d);f!=null&&u.set(d,f)}),u};return i.associations=c(r),r})}_createAnimationTracks(e,t,n,i,r){let o=[],a=e.name?e.name:e.uuid,l=[];function c(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}Bi[r.path]===Bi.weights?(c(e),e.isGroup&&e.children.forEach(c)):l.push(a);let h;switch(Bi[r.path]){case Bi.weights:h=gi;break;case Bi.rotation:h=xi;break;case Bi.translation:case Bi.scale:h=Ui;break;default:n.itemSize===1?h=gi:h=Ui;break}let u=i.interpolation!==void 0?Hv[i.interpolation]:$i,d=this._getArrayFromAccessor(n);for(let f=0,p=l.length;f<p;f++){let x=new h(l[f]+"."+Bi[r.path],t.array,d,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(x),o.push(x)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Mu(t.constructor),i=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let i=this instanceof xi?yu:Xl;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function Jv(s,e,t){let n=e.attributes,i=new hn;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new U(l[0],l[1],l[2]),new U(c[0],c[1],c[2])),a.normalized){let h=Mu(ur[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new U,l=new U;for(let c=0,h=r.length;c<h;c++){let u=r[c];if(u.POSITION!==void 0){let d=t.json.accessors[u.POSITION],f=d.min,p=d.max;if(f!==void 0&&p!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(p[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(p[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(p[2]))),d.normalized){let x=Mu(ur[d.componentType]);l.multiplyScalar(x)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;let o=new pn;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function Up(s,e,t){let n=e.attributes,i=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){s.setAttribute(a,l)})}for(let o in n){let a=vu[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!s.index){let o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});i.push(o)}return nt.workingColorSpace!==cn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${nt.workingColorSpace}" not supported.`),ii(s,e),Jv(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?Xv(s,e.targets,t):s})}var $v=new Ge({vertexColors:!0,roughness:.86}),Lt=new xn(1,12,9),jv=[{coat:4810618,shirt:14142386,pants:3490122,shoe:4209720,accent:12822389},{coat:9654083,shirt:15063234,pants:4344144,shoe:4931640,accent:5074280},{coat:5401424,shirt:13752008,pants:5326911,shoe:3815732,accent:13940847},{coat:6445176,shirt:14931399,pants:3423309,shoe:4932160,accent:11058626},{coat:9205848,shirt:4217194,pants:6050374,shoe:5653560,accent:15655624},{coat:5857638,shirt:13071448,pants:4539208,shoe:3619643,accent:13873519},{coat:3690326,shirt:14275261,pants:6710867,shoe:4340531,accent:12154971},{coat:10587240,shirt:5071731,pants:3752779,shoe:4866104,accent:12100797}];function bi(s,e=12){let t=[],n=[];for(let[r,o,a,l=0]of s)for(let c=0;c<e;c++){let h=2*Math.PI*c/e;t.push(Math.cos(h)*o,r,Math.sin(h)*a+l)}for(let r=0;r<s.length-1;r++)for(let o=0;o<e;o++){let a=r*e+o,l=r*e+(o+1)%e;n.push(a,a+e,l,l,a+e,l+e)}let i=new $e;return i.setAttribute("position",new Ce(t,3)),i.setIndex(n),i.computeVertexNormals(),i}function ql(){let s=[];function e(t,n,i=0,r=0,o=0,a=1,l=1,c=1,h=0,u=0,d=0){let f=t.index?t.toNonIndexed():t.clone();f.deleteAttribute("uv"),f.scale(a,l,c),h&&f.rotateZ(h),u&&f.rotateY(u),d&&f.rotateX(d),f.translate(i,r,o);let p=new Re(n),x=new Float32Array(f.attributes.position.count*3);for(let m=0;m<x.length;m+=3)p.toArray(x,m);f.setAttribute("color",new zt(x,3)),s.push(f)}return{add:e,finish(){let t=_s(s);for(let i of s)i.dispose();let n=new Le(t,$v);return n.castShadow=n.receiveShadow=!0,n}}}var Yl=bi([[.82,.146,.105],[.91,.169,.12],[1.08,.171,.116],[1.29,.209,.132],[1.37,.198,.11],[1.43,.078,.063]]),Qv=bi([[.88,.135,.1],[.97,.148,.107],[1.18,.155,.104],[1.31,.18,.105],[1.36,.08,.063]]),eM=bi([[.53,.192,.125],[.59,.184,.12],[.79,.132,.097],[.9,.143,.107]]),tM=new xn(1,10,8),nM=new Ni(.024,.0035,4,12),iM=new Ni(.079,.022,6,18);function Op(s){let e=zl(s),t=v=>v[Math.floor(e()*v.length)],n=v=>e()<v,i=t([10777686,9593927,13604724,7293240,14856850,8412239,12158054,15252892]),r=t([3484197,6308659,9989452,4601906,2040867,7889742,3814720]),o=t(jv),a=Math.floor(e()*6),l=Math.floor(e()*6),c=new ot,h=ql();if(h.add(Qv,o.shirt),a===0||a===4)h.add(Yl,o.coat),h.add(new Ut(.095,.28,.028),o.accent,-.072,1.245,.113,.78,1,.55,.28),h.add(new Ut(.095,.28,.028),o.accent,.072,1.245,.113,.78,1,-.55,.28),h.add(new Ut(.018,.34,.012),o.accent,0,1.1,.119,1,1,1);else if(a===1)h.add(Yl,o.coat),h.add(new Ut(.115,.29,.075),o.accent,0,1.225,.129,.82,1,0,.08),h.add(iM,o.accent,0,1.405,-.004,1,1,1,0,0,Math.PI/2);else if(a===2)h.add(Yl,o.coat),h.add(new xn(1,12,8),o.coat,0,1.42,-.047,.106,.102,.085),h.add(new Ut(.018,.3,.012),o.accent,0,1.12,.116);else if(a===3)h.add(eM,o.coat),h.add(new Ut(.25,.045,.025),o.accent,0,.88,.105);else if(a===5){h.add(Yl,o.coat),h.add(new Ut(.035,.3,.024),o.accent,0,1.16,.132);for(let v of[.99,1.12,1.25])h.add(Lt,o.accent,0,v,.151,.011,.011,.006)}h.add(bi([[1.365,.058,.054],[1.48,.06,.055]]),i);let u=.091+e()*.016,d=.123+e()*.02,f=.088+e()*.018;if(h.add(Lt,i,0,1.581,.008,u,d,f),l===0)h.add(Lt,r,0,1.661,-.009,u*1.04,.064,f*1.04),h.add(Lt,r,0,1.606,-.061,u*.98,.073,.043);else if(l===1){h.add(Lt,r,0,1.659,-.012,u*1.05,.067,f*1.04);for(let v of[-1,1])h.add(Lt,r,v*u*.86,1.541,-.015,.033,.105,.067)}else if(l===2){h.add(Lt,r,0,1.655,-.005,u*1.18,.085,f*1.16),h.add(Lt,r,0,1.621,-.098,.042,.05,.043);for(let v=0;v<8;v++){let M=v*Math.PI/4;h.add(Lt,r,Math.cos(M)*u*.92,1.64+Math.sin(M)*.052,-.006+Math.sin(M)*.025,.026,.031,.025)}}else if(l===3){h.add(Lt,r,0,1.66,-.01,u*1.02,.062,f*1.03),h.add(Lt,r,0,1.692,-.091,.046,.043,.047);for(let v of[-1,1])h.add(Lt,r,v*u*.9,1.558,-.012,.028,.076,.048)}else l===4?(h.add(Lt,r,0,1.648,-.005,u*1.1,.075,f*1.1),h.add(new gn(u*.99,u*1.09,.075,12),t([5401458,10116939,7627848,5794636]),0,1.674,-.008,1,1,1),h.add(Lt,o.accent,0,1.719,-.008,.026,.012,.024)):(h.add(Lt,r,0,1.649,-.012,u*1.06,.072,f*1.06),h.add(new gn(u*1.35,u*1.35,.018,14),o.accent,0,1.626,.008),h.add(new Yr(u*.78,.087,12),r,0,1.69,.008));let p=.008+f*.92,x=new Re(i).lerp(new Re(15843746),.15).getHex();for(let v of[-1,1])h.add(Lt,x,v*u*.47,1.555,.008+f*.8,.034,.024,.013);for(let v of[-1,1])h.add(Lt,15785928,v*u*.34,1.597,p,.02,.014,.008),h.add(Lt,3682091,v*u*.34,1.597,p+.007,.008,.01,.005),h.add(new Ut(.04,.009,.008),r,v*u*.34,1.622,p-.005,1,1,1,-.08*v);if(h.add(Lt,i,0,1.565,.008+f*.99,.018,.026,.018),h.add(Lt,5848376,0,1.531,.008+f*.91,.032,.007,.006),n(.24)){for(let v of[-1,1])h.add(nM,4538938,v*u*.34,1.595,p+.011,.8,.7,.75);h.add(new Ut(.028,.004,.004),4538938,0,1.595,p+.012)}if(n(.17))for(let v of[-1,1])h.add(Lt,14005358,v*u*.96,1.555,.023,.009,.014,.009);if(n(.43)){let v=t([4937294,6968387,4414314,5984350]);h.add(tM,v,0,1.105,-.14,.147,.206,.078);for(let M of[-1,1])h.add(new Ut(.027,.36,.019),o.accent,M*.106,1.185,.098,.88,1,1,-M*.13)}else if(n(.28)){let v=n(.5)?-1:1;h.add(new Ut(.17,.21,.09),o.accent,v*.228,.977,-.015),h.add(new Ut(.026,.43,.018),o.coat,v*.12,1.19,.09,1,1,1,-v*.32)}let m=h.finish();c.add(m);let g=[];for(let v of[-1,1]){let M=ql();M.add(bi([[-.385,.071,.067],[-.18,.083,.088],[-.015,.094,.101],[.04,.087,.083]]),o.pants);let y=M.finish();y.position.set(v*.084,.884,0),m.add(y);let T=ql();T.add(bi([[-.39,.051,.046],[-.3,.053,.05],[-.14,.071,.075],[-.016,.067,.065],[.025,.061,.059]]),o.pants),T.add(Lt,o.shoe,0,-.422,.05,.068,.052,.145),T.add(new Ut(.12,.024,.24),o.accent,0,-.454,.065);let S=T.finish();S.position.y=-.39,y.add(S);let _=ql();_.add(bi([[-.18,.054,.058],[-.09,.062,.072],[.012,.069,.074],[.04,.05,.049]]),o.coat),_.add(bi([[-.43,.034,.032,.045],[-.28,.044,.045,.029],[-.16,.049,.05],[-.12,.042,.046]]),i),_.add(Lt,i,0,-.451,.05,.039,.056,.035),_.add(bi([[-.19,.057,.06],[-.155,.058,.061]]),o.accent);let b=_.finish();b.position.set(v*.205,1.355,0),b.rotation.z=v*.075,m.add(b),g.push({hip:y,knee:S,shoulder:b})}return c.userData.gait={upper:m,limbs:g,cadence:.85+e()*.3,offset:e()*Math.PI*2,stride:.36+e()*.12,knee:.42+e()*.28,armSwing:.22+e()*.13,bounce:.012+e()*.012,sway:.7+e()*.7,lean:.01+e()*.02},c.scale.set(.92+e()*.14,.94+e()*.13,.92+e()*.14),c}function Bp(s,e){let t=s.userData.gait,n=e*t.cadence+t.offset,i=1-Math.cos(n*2);t.upper.position.set(Math.sin(n)*.013*t.sway,-.004+t.bounce*i,0),t.upper.rotation.set(t.lean,Math.sin(n)*.036,Math.sin(n)*.018*t.sway),t.limbs.forEach(({hip:r,knee:o,shoulder:a},l)=>{let c=n+l*Math.PI,h=Math.sin(c),u=Math.max(0,Math.cos(c));r.rotation.x=h*t.stride-.045,r.rotation.z=(l===0?-1:1)*.015*Math.abs(h),o.rotation.x=.045+u*t.knee,a.rotation.x=-h*t.armSwing-.035,a.rotation.z=(l===0?-1:1)*.06+Math.sin(c+.4)*.025})}var bu,dr;function sM(){return dr||(dr=new Ge({color:3951689,metalness:.28,roughness:.5,transparent:!0,opacity:.88,depthWrite:!1,side:We,polygonOffset:!0,polygonOffsetFactor:-2}),dr.onBeforeCompile=s=>{s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
varying float vOxfordTrimDistance;`),s.vertexShader=s.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
 vec3 trimWorld=(modelMatrix*vec4(transformed,1.0)).xyz; vOxfordTrimDistance=distance(trimWorld,cameraPosition);`),s.fragmentShader=s.fragmentShader.replace("#include <common>",`#include <common>
varying float vOxfordTrimDistance;`),s.fragmentShader=s.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
 diffuseColor.a *= 1.0 - smoothstep(18.0, 39.0, vOxfordTrimDistance);`)},dr.customProgramCacheKey=()=>"oxford-wheel-arch-distance-fade-v1",dr)}function Tu(s,e){if(!e?.length||s.userData.archTrim)return;s.updateWorldMatrix(!0,!0);let t=new Ni(.382,.019,5,26,Math.PI);t.rotateY(Math.PI/2);let n=[];for(let o of e){let a=new U;o.o.getWorldPosition(a),s.worldToLocal(a);let l=t.clone();l.translate(a.x,a.y,a.z),n.push(l)}t.dispose();let i=_s(n,!1);for(let o of n)o.dispose();if(!i)return;let r=new Le(i,sM());r.castShadow=!1,r.receiveShadow=!0,r.renderOrder=2,s.add(r),s.userData.archTrim=r}var kp={value:null};function zp(s){kp.value=s}function Kl(s){s.normalMap=null,s.onBeforeCompile=e=>{e.uniforms.courierSky=kp,e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
 uniform sampler2D courierSky;`),e.fragmentShader=e.fragmentShader.replace("#include <opaque_fragment>",`
   vec3 reflectedView=reflect(-normalize(vViewPosition),normal);
   vec3 skyRay=inverseTransformDirection(reflectedView,viewMatrix);
   float skyShelf=0.32+0.10*skyRay.x-0.07*skyRay.z;
   float ribbon=1.0-smoothstep(0.025,0.19,abs(skyRay.y-skyShelf));
   vec3 sampleRay=normalize(vec3(skyRay.x,0.07+0.13*skyRay.y,skyRay.z));
   vec3 skyPigment=texture2D(courierSky,equirectUv(sampleRay),2.0).rgb;
   outgoingLight+=skyPigment*ribbon*0.74;
   #include <opaque_fragment>
  `)},s.customProgramCacheKey=()=>"oxford-reflected-sky-enamel-v1"}function wu(s){if(!bu){let t=document.createElement("canvas");t.width=t.height=96;let n=t.getContext("2d"),i=n.createImageData(96,96);for(let r=0;r<9216;r++){let o=(r%96-47.5)/47.5,a=(Math.floor(r/96)-47.5)/47.5,l=Math.max(0,1-(o*o)**1.7-(a*a)**2.6);i.data.set([27,30,31,Math.round(104*l*l)],r*4)}n.putImageData(i,0,0),bu=new $t({map:new mn(t),transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1})}let e=new Le(new dn(2.54,5.05),bu);e.rotation.x=-Math.PI/2,e.position.y=.024,e.userData.contactDecal=!0,e.castShadow=!1,e.receiveShadow=!1,s.add(e)}function Au(s){let e=new Map;for(let t of s.children.slice()){if(!t.isMesh)continue;let n=t.geometry.index?t.geometry.toNonIndexed():t.geometry.clone();t.updateMatrix(),n.applyMatrix4(t.matrix),n.attributes.uv||n.setAttribute("uv",new Ce(new Float32Array(n.attributes.position.count*2),2)),e.has(t.material)||e.set(t.material,[]),e.get(t.material).push(n),s.remove(t)}for(let[t,n]of e){let i=new Le(_s(n),t);i.castShadow=i.receiveShadow=!0,s.add(i);for(let r of n)r.dispose()}}function Eu(s,e,t){let n=s.parent.getWorldQuaternion(new Gt).invert().multiply(e.getWorldQuaternion(new Gt));return{o:s,front:t,base:s.quaternion.clone(),axle:new U(1,0,0).applyQuaternion(n),up:new U(0,1,0).applyQuaternion(n)}}var rM=new Gt,oM=new Gt;function fr(s,e,t,n,i,r){let o=s.userData;if(o.vehicleArt){o.spin=((o.spin||0)+e*r/(o.detailed?.52:.345))%(Math.PI*2);for(let a of o.wheels||[])a.o.quaternion.copy(a.base).premultiply(rM.setFromAxisAngle(a.axle,o.spin)),a.front&&a.o.quaternion.premultiply(oM.setFromAxisAngle(a.up,t));o.wasBraking===n&&o.wasDusk===i||(o.wasBraking=n,o.wasDusk=i,o.tail&&(o.tail.emissive.setHex(16720660),o.tail.emissiveIntensity=n?3.1:i?.54:.055),o.head&&(o.head.emissive.setHex(16773332),o.head.emissiveIntensity=i?2.1:.14))}}function Gp(){let s=document.createElement("canvas");s.width=256,s.height=128;let e=s.getContext("2d"),t=e.createImageData(s.width,s.height);for(let i=0;i<s.height;i++)for(let r=0;r<s.width;r++){let o=(r+.5)/s.width*2-1,a=(i+.5)/s.height*2-1,l=-.09+.045*Math.tanh(4*o),c=Vn.smoothstep(a,l-.045,l+.045),h=.78*Math.exp(-3.2*o*o-((a+.012)/.068)**2),u=.19*Math.exp(-1.8*o*o-((a-.068)/.155)**2),d=.03*Math.exp(-1.2*o*o-((a-.34)/.44)**2),f=Math.round(255*c*Math.min(1,h+u+d)),p=(i*s.width+r)*4;t.data.set([f,f,f,255],p)}return e.putImageData(t,0,0),new mn(s)}function Vp(s){let{scene:e,sun:t,env:n,dusk:i,renderer:r}=s,o=i?s.twilightSky:s.daySky;o&&(e.background=o,e.environment=o,zp(o)),e.backgroundIntensity=i?1.03:.97,e.backgroundBlurriness=0,e.environmentIntensity=i?.62:.67,r.toneMappingExposure=i?1.16:1.04,t.color.set(i?16753785:16770488),t.intensity=i?.98:2.56,n.color.set(i?11324653:12640241),n.groundColor.set(i?8090488:9667694),n.intensity=i?.89:1.28,e.fog.color.set(i?12948878:11914699),e.fog.density=i?94e-5:66e-5,s.lightVector.set(...i?[-.957,.145,-.24]:[.535,.744,.398]).normalize();for(let a of s.car.userData.beams)a.visible=i;s.life.dusk=i,r.shadowMap.needsUpdate=!0}function Hp(s,e,t,n){let{sun:i,lightVector:r}=s,o=r,a=s.shadowRight.set(o.z,0,-o.x).normalize(),l=s.shadowUp.crossVectors(o,a),c=s.shadowCenter.set(e,t,n),h=140/2048,u=c.dot(a),d=c.dot(l);c.addScaledVector(a,Math.round(u/h)*h-u),c.addScaledVector(l,Math.round(d/h)*h-d),i.target.position.copy(c),i.position.copy(c).addScaledVector(o,132)}var aM=mt(2435883),Wp=mt(11383982,.4),Zl=mt(2635831,.45),lM=mt(5467767,.22),cM=mt(10067862,.4),hM=new Ge({color:12205618,emissive:6034443}),uM=new Ge({color:16773833,emissive:14470560,emissiveIntensity:.65}),dM;function Io(s,e=!1){let t=new ot,n=new Ge({color:s,metalness:.56,roughness:.26}),i=hM.clone(),r=uM.clone();t.userData.vehicleArt=!0,t.userData.tail=i,t.userData.head=r,t.userData.wheels=[];let o=!e&&s%3===0,a=o?1.67:1.54;function l(c,h){let u=[],d=[];for(let[m,g,v,M,y]of c)u.push(-M,g,m,M,g,m,y,v,m,-y,v,m);for(let m=0;m<c.length-1;m++)for(let g=0;g<4;g++){let v=m*4+g,M=m*4+(g+1)%4;d.push(v,v+4,M,M,v+4,M+4)}let f=(c.length-1)*4;d.push(0,1,3,1,2,3,f,f+3,f+1,f+1,f+3,f+2);let p=new $e;p.setAttribute("position",new Ce(u,3)),p.setIndex(d),p.computeVertexNormals(),h.side=We;let x=new Le(p,h);x.castShadow=!0,t.add(x)}l([[-2.19,.44,.8,.78,.84],[-1.91,.36,.97,.91,.86],[-1.11,.36,1.04,.94,.88],[1.16,.36,.98,.94,.87],[1.91,.41,.87,.89,.81],[2.19,.49,.75,.77,.74]],n),l([[-1.49,1,o?1.4:1.07,.81,.73],[o?-1.3:-.87,1.01,a,.83,.68],[.5,1.01,a,.84,.68],[1.18,.97,1.02,.81,.77]],lM),we(t,1.39,.075,o?1.79:1.36,0,a,-(o?.4:.19),n);for(let c of[-.847,.847]){we(t,.055,.45,.095,c,1.25,-.17,Zl),we(t,.1,.12,.25,c*1.16,1.08,.67,n);for(let h of[-.63,.54])we(t,.04,.04,.16,c*1.09,.9,h,cM)}for(let c of[-.57,.57])we(t,.43,.108,.068,c,.774,2.09,r),we(t,.43,.132,.08,c,.786,-2.12,i);we(t,1.46,.1,.14,0,.49,-2.17,Zl),we(t,.4,.17,.02,0,.68,-2.205,fM),we(t,.89,.13,.05,0,.59,2.14,Zl),Au(t);for(let c of[-.91,.91])for(let h of[-1.4,1.32]){let u=new ot;u.position.set(c,.347,h),t.add(u);let d=It(u,.343,.343,.19,0,0,0,aM,22);d.rotation.z=Math.PI/2;let f=Math.sign(c),p=It(u,.218,.218,.012,f*.103,0,0,Zl,16);p.rotation.z=Math.PI/2;for(let m=0;m<5;m++){let g=m*2*Math.PI/5,v=we(u,.018,.047,.166,f*.113,-Math.sin(g)*.102,Math.cos(g)*.102,Wp);v.rotation.x=g}let x=It(u,.057,.057,.015,f*.125,0,0,Wp,12);x.rotation.z=Math.PI/2,Au(u),t.userData.wheels.push(Eu(u,t,h>0))}if(e||wu(t),fr(t,0,0,!1,!1,0),e){t.userData.beams=[],Kl(n),Tu(t,t.userData.wheels);let c=[...t.children];new Hl().load("data/courier.glb",h=>{let u=h.scene,d=new hn().setFromObject(u),f=d.getSize(new U),p=4.46/f.z;u.scale.setScalar(p),u.position.set(-(d.min.x+d.max.x)*.5*p,-d.min.y*p,-(d.min.z+d.max.z)*.5*p),u.traverse(x=>{if(!x.isMesh)return;x.castShadow=x.receiveShadow=!0;let m=x.material;m.name==="Glass"&&(m.transmission=0,m.transparent=!0,m.opacity=.68,m.roughness=.12,m.color.set(7505028)),m.name==="Paint 1 Carmine"&&(Kl(m),m.color.set(3497561),m.metalness=.56,m.roughness=.23,m.clearcoat=1,m.clearcoatRoughness=.12),m.name==="Paint 2 Carmine"&&(Kl(m),m.color.set(2178630),m.metalness=.48,m.roughness=.27,m.clearcoat=.82,m.clearcoatRoughness=.16),m.name==="Brakelight"&&(m.color.set(8921115),m.roughness=.31,m.metalness=.12,m.toneMapped=!1,t.userData.tail=m),m.name==="Headlight"&&(t.userData.head=m),(m.name==="Tireside"||m.name==="Tiretread")&&(m.roughness=.87,m.envMapIntensity=.38)});for(let x of c)t.remove(x);t.add(u),t.userData.detailed=!0,t.userData.wheels=[],delete t.userData.archTrim,u.updateWorldMatrix(!0,!0),u.traverse(x=>{/^Wheel(Front|Rear)[LR]$/.test(x.name)&&t.userData.wheels.push(Eu(x,t,x.name.includes("Front")))}),Tu(t,t.userData.wheels),wu(t),t.userData.wasDusk=null});for(let h of[-.63,.63]){let u=new os(16773079,720,82,.5,.62,1.3);u.map=dM??=Gp(),u.position.set(h,.82,2.02),u.target.position.set(h*1.8,-.64,40),t.add(u,u.target),u.visible=!1,t.userData.beams.push(u)}}return t}var fM=mt(15065030),Jl=class{constructor(e,t){this.scene=e,this.city=t,this.random=zl(246),this.cars=[],this.people=[],this.elapsed=0,this.claim=new Map,this.pool={cars:[],people:[]}}signal(e,t){return(t+e%23)%22}validTurn(e,t){let[n,i]=t;return this.city.legal(e.to,e.ri,this.city.roads[i])?n!==e.from&&this.city.roads[i].k!=="track":!1}spawn(e,t){let n=t?this.people:this.cars,i=this.random()*Math.PI*2,r=(t?12:48)+this.random()*(t?110:160),o=[e[0]+Math.sin(i)*r,e[1]+Math.cos(i)*r],a=this.city.nearest(o,p=>t?["footway","pedestrian","path"].includes(p.k):p.d&&p.n&&p.k!=="service",t?45:80);if(!a||dt(a.q,e)<(t?10:33)||n.some(p=>dt([p.mesh.position.x,p.mesh.position.z],a.q)<(t?6:18)))return;let l=a.r,c=!l.o&&this.random()<.5,h=l.p[a.i-(c?0:1)],u=l.p[a.i-(c?1:0)],f=(t?this.pool.people:this.pool.cars).pop()||(t?Op(Math.floor(this.random()*999)):Io([7174519,14999506,5661038,8605249,4218228][Math.floor(this.random()*5)]));this.scene.add(f),n.push({mesh:f,ri:l.index,from:h,to:u,progress:(c?1-a.q[2]:a.q[2])*dt(a.a,a.b),speed:t?1+this.random()*.5:4.5,wait:0,stopped:-1,phase:this.random()*6})}tick(e,t,n,i){this.elapsed+=e;for(let r of[!1,!0]){let o=r?this.people:this.cars;o.length<(r?10:7)&&this.random()<e*10&&this.spawn(t,r);for(let a=o.length-1;a>=0;a--){let l=o[a],c=l.mesh,h=this.city.roads[l.ri],u=this.city.nodes[l.from],d=this.city.nodes[l.to],f=dt(u,d),p=(d[0]-u[0])/(f||1),x=(d[1]-u[1])/(f||1),m=r||h.o?0:Math.min(h.w*.24,2),g=u[0]+p*l.progress-x*m,v=u[1]+x*l.progress+p*m;if(dt(t,[g,v])>(r?210:340)){this.scene.remove(c),(r?this.pool.people:this.pool.cars).push(c),o.splice(a,1);continue}let M=r?1.35:Math.min(h.k==="residential"?8:11,l.speed+e*1.8),y=f-l.progress,T=l.speed;if(r)l.speed=M;else{let S=(t[0]-g)*p+(t[1]-v)*x;Math.abs(Math.cos(i)*x+Math.sin(i)*p)>.72&&S>0&&S<9+l.speed&&Math.abs((t[0]-g)*x-(t[1]-v)*p)<2.1&&(M=Math.min(M,Math.max(0,(S-5)*.5)));for(let O of this.cars){if(O===l||Math.cos(O.mesh.rotation.y)*x+Math.sin(O.mesh.rotation.y)*p<.65)continue;let G=O.mesh.position,D=(G.x-g)*p+(G.z-v)*x;D>0&&D<15&&Math.abs((G.x-g)*x-(G.z-v)*p)<1.9&&(M=Math.min(M,Math.max(0,(D-5)*.65)))}let _=d[2]==="traffic_signals",b=d[2]==="stop",C=Math.abs(p)>Math.abs(x),w=this.signal(l.to,this.elapsed),R=_&&(C?w>9:w<11||w>20),L=new Set(this.city.edges[l.to].map(O=>O[0])).size>2,B=this.claim.get(l.to),I=L&&B&&B.actor!==l&&B.until>this.elapsed;y<18&&(R||I||b&&l.stopped!==l.to)?(M=Math.min(M,Math.sqrt(6*Math.max(0,y-2.1))),y<2.3&&(M=0,l.wait+=e,l.wait>1.2&&!R&&!I&&(l.stopped=l.to,l.wait=0))):L&&y<8&&this.claim.set(l.to,{actor:l,until:this.elapsed+2.8}),l.speed+=Nn(M-l.speed,-e*4,e*2)}if(l.progress+=l.speed*e,l.phase+=l.speed*e*4,c.position.set(g,this.city.ground(g,v)+(r?.21:.29),v),c.rotation.y=Math.atan2(p,x),r?Bp(c,l.phase):(c.rotation.x=-Math.atan2(this.city.ground(g+p*1.2,v+x*1.2)-this.city.ground(g-p*1.2,v-x*1.2),2.4),fr(c,l.speed,0,l.speed<T-.08*e||y<3&&l.speed<.2,!!this.dusk,e)),l.progress>=f){let S=r?[]:this.city.edges[l.to].filter(b=>this.validTurn(l,b));if(r){let b=h.p.indexOf(l.to),C=h.p.indexOf(l.from),w=b+Math.sign(b-C);S=[[h.p[w]??l.from,l.ri]]}if(!S.length)if(!h.o||r)S=[[l.from,l.ri]];else{this.scene.remove(c),(r?this.pool.people:this.pool.cars).push(c),o.splice(a,1);continue}let _=S[Math.floor(this.random()*S.length)];l.from=l.to,l.to=_[0],l.ri=_[1],l.progress=0}}}}};var jl=new At().load("data/illustration/awning.png");jl.colorSpace=Ke;jl.wrapS=jl.wrapT=Nt;var pM=new Ge({map:jl,roughness:.82,side:We}),mM=[0,1,2].map(s=>{let e=new At().load("data/illustration/commercial-display-"+s+".png");return e.colorSpace=Ke,e.wrapS=e.wrapT=Nt,e}),Ql=new At().load("data/illustration/commercial-glow.png");Ql.colorSpace=Ke;Ql.wrapS=Ql.wrapT=Nt;var Ru=mt(3688768),uT=mt(11248012),gM=mt(7888200);function Xp(s,e,t){let n=new ot,i=new Pn,r=new Pn,o=new Pn,a=[],l=.18,c=Math.cos(l),h=Math.sin(l),u=(x,m)=>[-9.7+x*c-m*h,46+x*h+m*c],d=(x,m,g)=>{let[v,M]=u(x,m);return[v,e.ground(v,M)+g,M]};function f(x,m,g,v,M,y){for(let T=m;T<v;T+=4)for(let S=g;S<M;S+=4){let _=Math.min(T+4,v),b=Math.min(S+4,M);x.quad(d(T,S,y),d(T,b,y),d(_,b,y),d(_,S,y),(b-S)/3,(_-T)/3)}}f(i,-50,-46,-24,43,.125),f(i,23,-44,47,43,.125),f(i,-49,-48,47,-25,.125),f(i,-50,26,46,44,.125),f(o,-53,-47,-50,43,.15),f(o,47,-46,50,43,.15);let p=0;for(let x of[-38.5,34])for(let m=-28;m<30;m+=3.35){let g=null,v=-1/0;for(let _=-6;_<=6;_+=.6){let b=u(x+_,m),C=e.nearest(b,R=>R.d,15);if(!C)continue;let w=C.d-C.r.w*.5;w>v&&(g=[x+_,...b],v=w)}if(!g||v<2.65)continue;let[M,y,T]=g;if(f(r,M-2.5,m-1.45,M+2.3,m-1.35,.174),p++%5===1||Math.hypot(y+46.2,T-69.1)<6)continue;let S=Io([8620678,8731959,12303789,4148312,5534601,5396825][p%6]);S.position.set(y,e.ground(y,T)+.15,T),S.rotation.y=(x<0?1:-1)*1.3-l,n.add(S),a.push([y,T,S.rotation.y])}s.userData.squareLamps=[],s.userData.lampGlass=mt(16050115,.48);for(let x of[-23,23])for(let m of[-24,-4,20]){let[g,v]=u(x,m),M=e.ground(g,v);It(n,.095,.17,4,g,M+2,v,Ru),It(n,.28,.43,.45,g,M+.22,v,Ru);let y=new Le(new xn(.36,12,10),s.userData.lampGlass);y.position.set(g,M+4.21,v),n.add(y),s.userData.squareLamps.push(y.position.clone())}for(let[x,m]of[[-16,-20],[16,-20],[-16,21],[16,21]]){let[g,v]=u(x,m),M=e.ground(g,v);we(n,2.2,.13,.65,g,M+.49,v,gM);for(let y of[-.78,.78])we(n,.12,.48,.36,g+y,M+.23,v,Ru)}for(let[x,m]of[[i,t.road],[r,t.white],[o,t.path]]){let g=x.mesh(m);g.receiveShadow=!0,s.add(g)}return Ro(n),s.add(n),a}var Cu=new Map([["City Grocery","#3e4134"],["Southside Gallery","#394c43"],["Ajax Diner","#a65039"],["Neilson's","#404b49"],["Square Books Jr","#485f66"],["Boure","#3f4b4e"],["University Sporting Goods","#745648"],["The Blind Pig Pub","#42504c"],["End of All Music","#77513c"]]),$l=new Map,pr=!1,qp=new Map([["City Grocery",[16760168,.42]],["Southside Gallery",[16764803,.34]],["Ajax Diner",[16749904,.54]],["Neilson's",[16761462,.47]],["Square Books Jr",[16763513,.5]],["Boure",[16758123,.4]],["University Sporting Goods",[16763267,.39]],["The Blind Pig Pub",[16754523,.46]],["End of All Music",[16760178,.44]]]);function xM(s){if($l.has(s))return $l.get(s);let[e,t]=qp.get(s)||[16759664,.42],n=Cu.get(s),i=Array.from(s).reduce((a,l)=>(a+l.charCodeAt(0))%3,0),r=new Ge({map:mM[i],emissiveMap:Ql,color:16777215,emissive:pr?e:2103054,emissiveIntensity:pr?t:.018,roughness:.52,metalness:.02}),o={outline:mt(3419947),paint:mt(n),cream:mt(15259053),glass:r,signMaterial:new Ge({map:xs(s.toUpperCase(),n,"#fff0c9"),side:We})};return $l.set(s,o),o}function Yp(s){pr=!!s;for(let[e,t]of $l){let[n,i]=qp.get(e)||[16759664,.42];t.glass.emissive.setHex(pr?n:2103054),t.glass.emissiveIntensity=pr?i:.018}Mp(pr)}function Kp(s,e,t){let n=e.places.filter(([i,r,o])=>Cu.has(i)&&Math.floor(r/512)===s.xx&&Math.floor(o/512)===s.zz);for(let[i,r,o]of n){let a=1/0,l;for(let[R]of s.data.buildings)for(let L=0;L<R.length;L++){let B=R[L],I=R[(L+1)%R.length],O=Wi([r,o],B,I),G=dt(O,[r,o]);G<a&&dt(B,I)>2.8&&(a=G,l={p:O,a:B,b:I})}if(!l||a>12)continue;let{p:c,a:h,b:u}=l,d=Math.atan2(u[1]-h[1],h[0]-u[0]),f=e.nearest(c,R=>R.d,55);if(!f)continue;(f.q[0]-c[0])*Math.sin(d)+(f.q[1]-c[1])*Math.cos(d)<0&&(d+=Math.PI);let p=new ot;p.position.set(c[0],e.ground(...c),c[1]),p.rotation.y=d;let x=Math.min(7.7,Math.max(3.2,dt(h,u)*.78)),m=Cu.get(i),{outline:g,paint:v,cream:M,glass:y,signMaterial:T}=xM(i);we(p,x,2.72,.16,0,1.52,.055,v),we(p,x,.13,.2,0,.27,.11,g),we(p,x*.91,.12,.22,0,.4,.13,M);let S=Math.max(.72,(x-1.86)*.5),_=1.54;for(let R of[-S*.55-.46,S*.55+.46])we(p,S+.18,_+.18,.11,R,1.66,.17,g),we(p,S,_,.08,R,1.66,.235,y),we(p,S,.055,.035,R,2.3,.282,M),we(p,.045,_,.035,R-S*.28,1.66,.282,M);we(p,1.02,2.05,.18,0,1.37,.18,g),we(p,.82,1.84,.075,0,1.37,.28,y),we(p,.045,1.82,.035,0,1.37,.324,M),we(p,x*.8,.78,.18,0,3.63,.17,g);let b=we(p,x,.24,1.62,0,2.88,.91,pM);b.rotation.x=.12;let C=Math.max(8,Math.round(x/.43));for(let R=0;R<C;R++){let L=-x/2+(R+.5)*x/C;we(p,x/C*.84,.13,.08,L,2.68,1.705,R%2?M:g)}we(p,x*.78,.72,.13,0,3.63,.245,M);let w=new Le(new dn(x*.75,.58),T);w.position.set(0,3.63,.318),p.add(w);for(let R of[-x*.5,x*.5])we(p,.035,2.78,.035,R,1.52,.151,g);we(p,x,.032,.03,0,4.07,.1,g),t.add(p)}}function Iu(s){let e=new At().load("data/"+s);return e.colorSpace=Ke,e.wrapS=e.wrapT=Nt,e.anisotropy=8,e}function Po(s,e,t=.96){return new Ge({map:s,color:e,roughness:t,side:We})}function Zp(s){for(let i of["road","path"])s[i]?.map?.dispose(),s[i]?.dispose();let e=Iu("illustration/road-asphalt.png"),t=Iu("illustration/road-parking.png"),n=Iu("illustration/road-concrete.png");return s.road=Po(e,16777215,.99),s.parking=Po(t,16777215,.99),s.path=Po(n,16777215,.94),s.curb=Po(n,15918278,.91),s.curbFace=Po(n,13812901,.94),s.edge=new Ge({color:6712168,roughness:.98,side:We}),s.markYellow=new Ge({color:15847803,emissive:2759430,emissiveIntensity:.24,roughness:.72,side:We}),s.markWhite=new Ge({color:15855328,emissive:2434075,emissiveIntensity:.22,roughness:.72,side:We}),s}var Jp=Hi+.19,_M=111.08;function ec(s,e,t){let n=[];for(let o of s){let[a,l]=o.center,[c,h]=o.tangent,u=-h,d=c,f=o.length/2,p=o.width/2,x=[[-f,-p],[f,-p],[f,p],[-f,p]],m=x.map(([M,y])=>[a+c*M+u*y,o.bottom,l+h*M+d*y]),g=x.map(([M,y])=>[a+c*M+u*y,o.top,l+h*M+d*y]),v=[[...g].reverse(),m,[m[0],m[1],g[1],g[0]],[m[1],m[2],g[2],g[1]],[m[2],m[3],g[3],g[2]],[m[3],m[0],g[0],g[3]]];for(let M of v)for(let y of[0,1,2,0,2,3])n.push(...M[y])}if(!n.length)return;let i=new $e;i.setAttribute("position",new Ce(n,3)),i.computeVertexNormals();let r=new Le(i,e);r.castShadow=!0,r.receiveShadow=!0,t.add(r)}function Pu(s,e){let t=s.along,n=1;for(;n<t.length-1&&t[n]<e;)n++;let i=s.p[n-1],r=s.p[n],o=s._nodes[i],a=s._nodes[r],l=t[n]-t[n-1]||1,c=Math.max(0,Math.min(1,(e-t[n-1])/l)),h=(a[0]-o[0])/l,u=(a[1]-o[1])/l;return{x:o[0]+(a[0]-o[0])*c,z:o[1]+(a[1]-o[1])*c,tangent:[h,u]}}function yM(s,e){let t=e.map(([r,o])=>[Math.max(0,Math.min(s,r)),Math.max(0,Math.min(s,o))]).filter(([r,o])=>o>r).sort((r,o)=>r[0]-o[0]),n=[],i=0;for(let[r,o]of t)r>i&&n.push([i,r]),i=Math.max(i,o);return i<s&&n.push([i,s]),n}function $p(s,e,t){if(!(e.roadTiles.get(s.key)||[]).some(([f])=>Vi.has(e.roads[f].id)))return!1;let i=e.roads.filter(f=>Vi.has(f.id));if(i.length!==2)return!1;for(let f of i)f._nodes=e.nodes;let r=i[0].p.find(f=>i[1].p.includes(f));if(r===void 0)return!1;let o=[],a=[],l=[],c=[],h=new Set;for(let f of i){let p=f.along.at(-1),x=f.p.indexOf(r),m=f.along[x],g=[[m-1.35,m+1.35]],v=f.p.map(S=>e.ground(...e.nodes[S])),M=v.indexOf(Math.max(...v));if(Math.max(...v)-Math.min(...v)>.22){let S=f.along[M];g.push(M===0?[0,2]:[p-2,p])}let y=yM(p,g),T=f.w/2-.045;for(let[S,_]of y)for(let b of[-1,1]){let C=(S+_)/2,w=Pu(f,C),R=[-w.tangent[1],w.tangent[0]],L=w.x+R[0]*b*T,B=w.z+R[1]*b*T;o.push({center:[L,B],tangent:w.tangent,length:_-S,width:.09,bottom:Hi-.4,top:Jp-.055});let I=f.w/2+.055,O=Jp;a.push({center:[w.x+R[0]*b*I,B+R[1]*b*(I-T)],tangent:w.tangent,length:_-S,width:.075,bottom:O+.4,top:O+.47}),a.push({center:[w.x+R[0]*b*I,B+R[1]*b*(I-T)],tangent:w.tangent,length:_-S,width:.075,bottom:O+.78,top:O+.86});let G=[S,_];for(let D=Math.ceil((S+.02)/1.9)*1.9;D<_-.02;D+=1.9)G.push(D);for(let D of G){let W=Pu(f,D),N=Math.round(W.x*5)+"_"+Math.round(W.z*5)+"_"+b;h.has(N)||(h.add(N),l.push({center:[W.x+R[0]*b*I,W.z+R[1]*b*I],tangent:w.tangent,length:.085,width:.085,bottom:O,top:O+.86}))}for(let D=Math.max(1.8,Math.ceil(S/3.8)*3.8);D<_-1.1;D+=3.8){let W=Pu(f,D),N=Math.round(W.x*2)+"_"+Math.round(W.z*2)+"_"+b;h.has("pile_"+N)||(h.add("pile_"+N),c.push({center:[W.x+R[0]*b*.48,W.z+R[1]*b*.48],tangent:w.tangent,length:.16,width:.16,bottom:_M-.44,top:Hi-.39}))}}}let u=new Ge({color:4868415,roughness:.9,side:We}),d=new Ge({color:4014137,roughness:.94,side:We});return ec(o,u,t),ec(a,u,t),ec(l,u,t),ec(c,d,t),!0}var vM={brick:10845031,lap:12499364,board:10986132,metal:10132631,stucco:13023647,block:10789017,stone:11512218,painted:12696490},MM={house:12893609,store:10454128,commercial:11971489,campus:11633778},SM=new ss({vertexColors:!0,side:We});function jp(s,e){let t=new Pn,n=new Pn,i=new ot,r=new Re;for(let[o,a,l,c,,h,,u]of s){if(Vl.has(h)||u?.fragment)continue;let d=e.ground(...o[0]),f=u?.roof?.[2]??d+l;t.tint=r.setHex(vM[u?.wall]??MM[c]??11248792);for(let p of[o,...a])for(let x=0;x<p.length;x++){let m=p[x],g=p[(x+1)%p.length];t.quad([m[0],d-2,m[1]],[g[0],d-2,g[1]],[g[0],f,g[1]],[m[0],f,m[1]])}u?.roof?Nl(p=>p==="wall"?t:n,o,a,u.roof,"wall"):(n.tint=new Re(7828587),Dl(n,o,a,f))}for(let o of[t,n])o.pos.length&&i.add(o.mesh(SM));return i}function Qp(s,{landCover:e,grassDetail:t,pavedDetail:n,painterlyDetail:i}){s.onBeforeCompile=r=>{r.uniforms.landCover={value:e},r.uniforms.grassDetail={value:t},r.uniforms.pavedDetail={value:n},r.uniforms.painterlyDetail={value:i},r.vertexShader=r.vertexShader.replace("#include <common>",`#include <common>
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
    diffuseColor.rgb += (brushPigment-vec3(.5))*vec3(.047,.051,.038);`)},s.customProgramCacheKey=()=>"oxford-ground-surface-painterly-v2"}var tc=512,nc=class{constructor(e,t){this.scene=e,this.city=t,this.mat=Zp(Sp()),this.tiles=new Map,this.active=new Set,this.loader=new At,this.focus=[0,0],this.grass=this.loader.load("data/grass.jpg"),this.grass.colorSpace=Ke,this.grass.wrapS=this.grass.wrapT=Nt,this.grass.anisotropy=8,this.groundPaint=this.loader.load("data/ground-painterly.jpg"),this.groundPaint.colorSpace=Ke,this.groundPaint.wrapS=this.groundPaint.wrapT=Nt,this.groundPaint.anisotropy=4,this.pending=[],this.loading=0,this.detailQueue=[],this.detailFrame=0,this.failed=[],this.completed=0,wp(e,t),this.parkedCars=Xp(e,t,this.mat),this.ecology=new Bl,this.nearTrees=new Ol(e,this),this.paving=this.mat.road.map}update(e,t){let n=Math.floor(e/tc),i=Math.floor(t/tc),r=n+"_"+i;if(this.focus=[e,t],this.ecology.tick(performance.now()*.001),this.nearTrees.tick(e,t),this.center===r)return;this.center=r;let o=[],[a,l,c,h]=this.city.dem.bounds;for(let u=-2;u<=2;u++)for(let d=-2;d<=2;d++){let f=n+u,p=i+d;f*512<a||f*512>=c||p*512<l||p*512>=h||o.push({xx:f,zz:p,key:f+"_"+p,near:Math.abs(u)<=1&&Math.abs(d)<=1,dist:u*u+d*d})}this.active=new Set(o.map(u=>u.key));for(let[u,d]of this.tiles)this.active.has(u)||(d.group&&(this.scene.remove(d.group),this.dispose(d.group)),this.tiles.delete(u));this.pending=[];for(let u of o.sort((d,f)=>d.dist-f.dist)){let d=this.tiles.get(u.key);if(d){d.near=u.near,d.detail&&(d.detail.visible=u.near),d.far&&(d.far.visible=!u.near||!d.detail),u.near&&d.group&&!d.detail&&this.detail(d);continue}this.pending.push(u)}this.pump()}dispose(e){e.traverse(t=>{t.geometry?.dispose(),t.userData.tileMat&&(t.userData.cover?.dispose(),t.material.map?.dispose(),t.material.dispose())})}get running(){return this.loading+this.detailQueue.length}pump(){for(;this.loading<3&&this.pending.length;){let e=this.pending.shift();this.tiles.set(e.key,e),this.loading++,this.load(e).catch(t=>{console.error("Tile "+e.key,t),this.failed.push(e.key)}).finally(()=>{this.loading--,this.pump()})}}async load(e){let[t,n,i,r]=await Promise.all([this.loader.loadAsync("data/cover/"+e.key+".png"),this.loader.loadAsync("data/aerial/"+e.key+".jpg"),this.city.tileSet.has(e.key)?fetch("data/tiles/"+e.key+".json").then(m=>m.json()):Promise.resolve({buildings:[],trees:[],surfaces:[]}),fetch("data/ecology/"+e.key+".json").then(m=>m.ok?m.json():null)]);if(this.tiles.get(e.key)!==e){n.dispose(),t.dispose();return}e.group=new ot,e.data=i,e.ecology=r,n.colorSpace=Ke,n.anisotropy=8;let o=new $e,a=[],l=[],c=[],h=8,u=512/h;for(let m=0;m<=u;m++)for(let g=0;g<=u;g++){let v=e.xx*tc+g*h,M=e.zz*tc+m*h;if(a.push(v,this.city.ground(v,M),M),l.push(g/u,1-m/u),g<u&&m<u){let y=m*(u+1)+g;c.push(y,y+u+1,y+1,y+1,y+u+1,y+u+2)}}o.setAttribute("position",new Ce(a,3)),o.setAttribute("uv",new Ce(l,2)),o.setIndex(c),o.computeVertexNormals();let d=new Ge({map:n,roughness:1});Qp(d,{landCover:t,grassDetail:this.grass,pavedDetail:this.paving,painterlyDetail:this.groundPaint});let f=new Le(o,d);f.userData.cover=t,f.receiveShadow=!0,f.userData.tileMat=!0,e.group.add(f);let p=jp(i.buildings,this.city),x=[0,1,2,3].map(()=>new Pn);for(let m=0;m<i.trees.length;m+=3){let[g,v,M,y]=i.trees[m],T=this.city.ground(g,v),S=this.ecology.crownRadius(e,m,M),_=x[y]||x[1];for(let b of[0,Math.PI/2]){let C=Math.cos(b)*S,w=Math.sin(b)*S;_.quad([g-C,T,v-w],[g+C,T,v+w],[g+C,T+M,v+w],[g-C,T+M,v-w])}}for(let m=0;m<x.length;m++)x[m].pos.length&&p.add(x[m].mesh(this.mat["tree"+m]));e.group.add(p),e.far=p,p.visible=!0,this.scene.add(e.group),this.nearTrees.tileLoaded(e,...this.focus),e.near&&this.detail(e),this.completed++,this.lastStream=performance.now()}detail(e){e.builder||e.detail||(e.builder=this.buildDetail(e),this.detailQueue.push(e),this.detailFrame||(this.detailFrame=requestAnimationFrame(()=>this.advanceDetails())))}advanceDetails(){this.detailFrame=0;let e=performance.now()+4;for(this.detailQueue.sort((t,n)=>+(n.key===this.center)-+(t.key===this.center));this.detailQueue.length&&performance.now()<e;){let t=this.detailQueue[0];if(this.tiles.get(t.key)!==t){t.builder.return(),t.staging&&this.dispose(t.staging),this.detailQueue.shift();continue}try{if(!t.builder.next().done)continue}catch(n){this.failed.push(t.key),console.error("Detail "+t.key,n),t.staging&&this.dispose(t.staging)}this.detailQueue.shift(),t.builder=null,t.staging=null,this.lastStream=performance.now()}this.detailQueue.length&&(this.detailFrame=requestAnimationFrame(()=>this.advanceDetails()))}*buildDetail(e){let t=0,n=new Map,i=c=>(n.has(c)||n.set(c,new Pn),n.get(c)),r=this.city,o=(c,h)=>r.ground(c,h),a=new ot;e.staging=a,e.buildingPosts=[];for(let c of e.data.buildings){++t%4===0&&(yield);let[h,u,d,f,p,x,m,g]=c;if(Vl.has(x)||g?.fragment)continue;if(g){xp(i,r,c,e.buildingPosts);continue}m&&_p(i,r,m,x);let v=h.map(S=>o(...S)),M=Math.min(...v)-.12,y=Math.max(...v)+d,T=i(f+Math.abs(x%4));for(let S of[h,...u])for(let _=0;_<S.length;_++){let b=S[_],C=S[(_+1)%S.length],w=dt(b,C)/(f==="store"?8.5:6.8),R=f==="store"?1:Math.max(1,Math.round(d/3.7));T.quad([b[0],M,b[1]],[C[0],M,C[1]],[C[0],y,C[1]],[b[0],y,b[1]],w,R)}if(f==="house"&&h.length>=4&&!u.length){let S=0,_=0;for(let G=0;G<h.length;G++){let D=h[G],W=h[(G+1)%h.length],N=dt(D,W);N>S&&(S=N,_=Math.atan2(W[1]-D[1],W[0]-D[0]))}let b=Math.cos(_),C=Math.sin(_),w=h.map(([G,D])=>-C*G+b*D),R=Math.min(...w),L=Math.max(...w),B=(L+R)/2,I=Math.min((L-R)*.22,3.8),O=i("shingle"+(m?.[5]??1));for(let G=0;G<2;G++){let D=[];for(let N=0;N<h.length;N++){let V=(N+1)%h.length,H=h[N],J=h[V],se=w[N],X=w[V];if((G?se>=B:se<=B)&&D.push(H),se<B&&X>B||se>B&&X<B){let te=(B-se)/(X-se);D.push([H[0]+te*(J[0]-H[0]),H[1]+te*(J[1]-H[1])])}}if(D.length<3)continue;let W=N=>y+I*(1-Math.abs((-C*N[0]+b*N[1]-B)/((L-R)/2||1)));for(let N of rn.triangulateShape(D.map(V=>new re(...V)),[])){let V=N.map(H=>D[H]);O.tri(...V.map(H=>[H[0],W(H),H[1]]),...V.map(H=>[H[0]/3,H[1]/3]))}for(let N=0;N<D.length;N++){let V=D[N],H=D[(N+1)%D.length];(Math.abs(W(V)-y)>.04||Math.abs(W(H)-y)>.04)&&O.quad([V[0],y,V[1]],[H[0],y,H[1]],[H[0],W(H),H[1]],[V[0],W(V),V[1]])}}}else Dl(i("roof"),h,u,y)}for(let c=0;c<e.data.trees.length;c++){++t%64===0&&(yield);let[h,u,d,f]=e.data.trees[c],p=o(h,u),x=i("tree"+f),m=this.ecology.crownRadius(e,c,d);for(let g=0;g<3;g++){let v=g*Math.PI/3+h%7*.3,M=Math.cos(v)*m,y=Math.sin(v)*m;x.quad([h-M,p,u-y],[h+M,p,u+y],[h+M,p+d,u+y],[h-M,p+d,u-y])}}let l=new Set;for(let[c,h]of r.roadTiles.get(e.key)||[]){let S=function(W,N,V){let H=W/p,J=d[0]+x*W+(y[0]*(1-H)+T[0]*H)*N,se=d[1]+m*W+(y[1]*(1-H)+T[1]*H)*N;return[J,r.surface(u,h,H,J,se)+V,se]},_=function(W,N,V,H,J,se){let X=i(se);for(let te=W;te<N-.001;te+=3.8){let Me=Math.min(N,te+3.8);X.quad(S(te,V,J),S(te,H,J),S(Me,H,J),S(Me,V,J),(H-V)/4,(Me-te)/4)}};++t%32===0&&(yield);let u=r.roads[c],d=r.nodes[u.p[h-1]],f=r.nodes[u.p[h]];if(Math.floor((d[0]+f[0])/1024)!==e.xx||Math.floor((d[1]+f[1])/1024)!==e.zz)continue;let p=dt(d,f),x=(f[0]-d[0])/p,m=(f[1]-d[1])/p,g=(W,N)=>{let V=dt(W,N)||1;return[-(N[1]-W[1])/V,(N[0]-W[0])/V]},v=(W,N)=>{let V=W[0]+N[0],H=W[1]+N[1],J=V*N[0]+H*N[1];return J>.6?[V/J,H/J]:N},M=[-m,x],y=h>1?v(g(r.nodes[u.p[h-2]],d),M):M,T=h+1<u.p.length?v(M,g(f,r.nodes[u.p[h+1]])):M;if(u.d)for(let W of[u.p[h-1],u.p[h]]){if(l.has(W))continue;let N=r.nodes[W];if(Math.floor(N[0]/512)!==e.xx||Math.floor(N[1]/512)!==e.zz)continue;let V=new Map;for(let[J,se]of r.cells.get(Math.floor(N[0]/48)+"_"+Math.floor(N[1]/48))||[]){let X=r.roads[J];if(!X.d)continue;let te=X.p[se]===W?X.p[se-1]:X.p[se-1]===W?X.p[se]:-1;te>=0&&V.set(te,X)}if(V.size<3)continue;l.add(W);let H=[];for(let[J,se]of V){let X=r.nodes[J],te=dt(N,X)||1,Me=(X[0]-N[0])/te,Ue=(X[1]-N[1])/te,me=se.w*.5;for(let Fe of[-1,1]){let Mt=Math.min(te*.43,Math.max(2.3,Math.min(7,me*1.1)));H.push([N[0]+Me*Mt+Fe*Ue*me,N[1]+Ue*Mt-Fe*Me*me])}}H.sort((J,se)=>Math.atan2(J[1]-N[1],J[0]-N[0])-Math.atan2(se[1]-N[1],se[0]-N[0]));for(let J=0;J<H.length;J++){let se=[N,H[J],H[(J+1)%H.length]];i("road").tri(...se.map(([X,te])=>[X,o(X,te)+.294,te]),...se.map(([X,te])=>[X*.22,te*.22]))}}let b=["footway","steps","path","cycleway","pedestrian","bridleway","corridor"].includes(u.k),C=u.w/2,w=b?.19:.27;!b&&u.d&&u.k!=="track"&&_(0,p,-C-.32,C+.32,.23,"edge");let R=["gravel","fine_gravel","dirt","earth","unpaved","ground","mud","sand","compacted"].includes(u.s)||!u.s&&u.k==="track",L=["concrete","paving_stones","cobblestone","sett"].includes(u.s),B=b||L?"path":R?"dirt":"road";if(_(0,p,-C,C,w,B),["primary","secondary","tertiary","trunk","motorway"].includes(u.k)&&u.w>=6.5){let W=r.edges[u.p[h-1]].length>2?Math.min(5,p*.4):0,N=r.edges[u.p[h]].length>2?Math.min(5,p*.4):0;if(!u.o)_(W,p-N,-.17,-.055,w+.035,"markYellow"),_(W,p-N,.055,.17,w+.035,"markYellow");else for(let V=-(u.along[h-1]%10);V<p;V+=10)V+3>0&&_(Math.max(W,V),Math.min(p-N,V+3),-.075,.075,w+.035,"markWhite")}let O=u.d&&["residential","tertiary","secondary","unclassified"].includes(u.k)&&u.w<10,G=[];for(let W of[-1,1]){let N=u.sidewalk==="both"||u.sidewalk===(W===1?"right":"left"),V=!1;if(!N&&O){let H=S(p*.5,W*(C+1.12),0),J=r.nearest(H,se=>["footway","pedestrian","path"].includes(se.k),4.5);if(J){let se=r.nodes[J.r.p[J.i-1]],X=r.nodes[J.r.p[J.i]],te=dt(se,X)||1;V=J.d<1.9&&Math.abs(x*(X[0]-se[0])/te+m*(X[1]-se[1])/te)>.84}}(N||V)&&G.push({side:W,explicit:N})}let D=W=>r.edges[W]?.some(([,N])=>r.roads[N].k==="service")||!1;for(let{side:W,explicit:N}of G){let V=D(u.p[h-1])?Math.min(3.1,p*.28):0,H=p-(D(u.p[h])?Math.min(3.1,p*.28):0);if(H<=V)continue;_(V,H,W*(C+.02),W*(C+.25),.285,"curb");let J=i("curbFace"),se=W*(C+.025);for(let X=V;X<H-.01;X+=3.8){let te=Math.min(H,X+3.8),Me=S(X,se,.19),Ue=S(te,se,.19),me=S(X,se,.285),Fe=S(te,se,.285);J.quad(me,Fe,Ue,Me,(te-X)/3,.095/3)}N&&_(V,H,W*(C+.25),W*(C+2.05),.2,"path")}}for(let[c,h,u]of e.data.surfaces){if(c!=="parking"||h.length<3)continue;++t%32===0&&(yield);let d=h.concat(...u),f=m=>m.map(g=>new re(g[0],g[1])),p=rn.triangulateShape(f(h),u.map(f)),x=i("parking");for(let m of p){let g=[d[m[2]],d[m[1]],d[m[0]]];x.tri(...g.map(([v,M])=>[v,o(v,M)+.245,M]),...g.map(([v,M])=>[v/4,M/4]))}}for(let c=0;c<(e.data.sidewalks||[]).length;c++){c%24===0&&(yield);let[h,u]=e.data.sidewalks[c];if(!h||h.length<2)continue;let d=u*.5,f=i("path"),p=[];for(let x=0;x<h.length;x++){let m=h[Math.max(0,x-1)],g=h[Math.min(h.length-1,x+1)],v=g[0]-m[0],M=g[1]-m[1],y=Math.hypot(v,M)||1;p.push([-M/y,v/y])}for(let x=0;x<h.length-1;x++){let T=function(S,_){let b=p[S],C=Math.max(.42,Math.abs(b[0]*y[0]+b[1]*y[1])),w=Math.min(d/C,d*2.2)*_,R=h[S],L=R[0]+b[0]*w,B=R[1]+b[1]*w;return[L,o(L,B)+.215,B]},m=h[x],g=h[x+1],v=[g[0]-m[0],g[1]-m[1]],M=Math.hypot(...v)||1,y=[-v[1]/M,v[0]/M];f.quad(T(x,-1),T(x,1),T(x+1,1),T(x+1,-1),1,Math.hypot(g[0]-m[0],g[1]-m[1])/3)}}for(let[c,h,u]of e.data.surfaces)if(c==="water"){yield;let d=this.ecology.waterSurface(r,h,u);d&&a.add(d)}e.ecology?.understory?.length&&(yield,a.add(this.ecology.understory(r,e.ecology.understory)));for(let[c,h]of n){if(yield,!h.pos.length)continue;let u=h.mesh(this.mat[c]);u.receiveShadow=!c.startsWith("tree"),u.castShadow=c.startsWith("tree")||/house|store|commercial|campus|shingle|roof|wall-|surface-|ledge/.test(c),a.add(u)}$p(e,r,a)&&(yield),Cp(e,r,a,this.mat),Kp(e,r,a),e.group.add(a),e.detail=a,a.visible=e.near,e.far.visible=!e.near}walkSurface(e,t){if(e<-2726.6||e>-2695.4||t<-1256.6||t>-1231.3)return this.city.ground(e,t);let n=this.city.nearest([e,t],i=>Vi.has(i.id),3);return n&&n.d<=Math.min(.95,n.r.w*.5)?Hi:this.city.ground(e,t)}obstructed(e,t,n=.36,i=!1,r=!1){let o=Math.floor(e/512)+"_"+Math.floor(t/512),a=this.tiles.get(o);if(!a?.data)return!0;if(Math.abs(e)<90&&Math.abs(t)<120)for(let[l,c,h]of this.parkedCars){let u=e-l,d=t-c;if(Math.abs(u*Math.cos(h)-d*Math.sin(h))<.91+n&&Math.abs(u*Math.sin(h)+d*Math.cos(h))<2.1+n)return!0}for(let l=-1;l<=1;l++)for(let c=-1;c<=1;c++){let h=this.tiles.get(a.xx+l+"_"+(a.zz+c)),u=h?.data;if(u){for(let[d,f,p]of h.buildingPosts||[])if(Math.abs(d-e)<p+n&&Math.abs(f-t)<p+n)return!0;for(let[d,f,,,,,,p]of u.buildings)if(!(p?.fragment||!ei(e,t,d)||f.some(x=>ei(e,t,x)))&&!p?.open?.some(x=>ei(e,t,x)))return!0}}if(r&&e>=-2726.6&&e<=-2695.4&&t>=-1256.6&&t<=-1231.3){let l=this.city.nearest([e,t],c=>Vi.has(c.id),3);l&&l.d<=Math.min(.95,l.r.w*.5)&&(i=!0)}for(let[l,c,h]of a.data.surfaces)if(!i&&l==="water"&&ei(e,t,c)&&!h.some(u=>ei(e,t,u)))return!0;for(let[l,c]of a.data.trees)if(Math.abs(l-e)<n+.2&&Math.hypot(l-e,c-t)<n+.2)return!0;return!1}};var ic=class{constructor(e,t){this.scene=e,this.city=t,this.fixtures=[...e.userData.squareLamps||[]],this.pool=[],this.glass=e.userData.lampGlass,this.dusk=!1,this.x=1/0,this.z=1/0;for(let n=0;n<3;n++){let i=new as(16765348,0,27,2);i.visible=!1,e.add(i),this.pool.push(i)}fetch("data/lighting/fixtures.json").then(n=>n.json()).then(n=>this.install(n))}install(e){let t=new Ge({color:6844783,roughness:.77,metalness:.32});for(let[,n,i,r]of e){let o=r||6.5,a=this.city.ground(n,i),l=new Le(new gn(.085,.16,o,8),t);l.position.set(n,a+o/2,i),l.castShadow=!0,this.scene.add(l);let c=new Le(new gn(.5,.38,.22,12),t);c.position.set(n,a+o,i),this.scene.add(c);let h=new Le(new xn(.33,12,7),this.glass);h.scale.y=.4,h.position.set(n,a+o-.11,i),this.scene.add(h),this.fixtures.push(h.position.clone())}this.x=1/0}setDusk(e){this.dusk=e,this.glass.emissive.setHex(16764049),this.glass.emissiveIntensity=e?2.7:0;for(let t of this.pool)t.visible=e;this.x=1/0}tick(e,t){if(!this.dusk||Math.hypot(this.x-e,this.z-t)<1.5)return;this.x=e,this.z=t;let n=this.fixtures.map(i=>({p:i,d:Math.hypot(i.x-e,i.z-t)})).filter(i=>i.d<45).sort((i,r)=>i.d-r.d);this.pool.forEach((i,r)=>{let o=n[r];i.intensity=o?98*(1-Vn.smoothstep(o.d,28,45)):0,o&&i.position.copy(o.p)})}};function em(){je.lights_fragment_end+=`
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
  `}var bM=new Set(["motorway","trunk","primary","secondary","tertiary"]);function Lu(s){let e=new Path2D;for(let t of s)if(t.length){e.moveTo(t[0][0],t[0][1]);for(let n=1;n<t.length;n++)e.lineTo(t[n][0],t[n][1]);e.closePath()}return e}var tm={full:{base:"#f0dfbf",campus:"#d9c89e",field:"#b9c890",wood:"#8da78c",park:"#b4c798",water:"#70a9aa",building:"#bf927a",street:"#fff5da",main:"#ecc47e",edge:"#8c846e",trail:"#889a82",ink:"#193c40"},mini:{base:"#203d43",campus:"#2d4c4c",field:"#42645a",wood:"#153f3f",park:"#335948",water:"#387a88",building:"#736661",street:"#9faea3",main:"#dbc39e",edge:"#384840",trail:"#657b6c",ink:"#f4f3e3"}},sc=class{constructor(e){this.city=e,this.center=[-1200,600],this.scale=.06,this.path=[],this.roads=new Map,this.buckets=new Map,this.areas=[],this.buildings={},fetch("data/atlas-context.json").then(t=>t.json()).then(t=>{this.areas=t.areas.map(([n,i,r,o])=>({kind:n,bounds:i,path:Lu(r),name:o})),this.buildings=t.buildings,this.contextReady=!0}).catch(t=>console.error("Atlas context",t))}paint(e,t,n,i=!1){if(!e)return;let r=e.getContext("2d"),o=e.width,a=e.height,l=i?1.3:this.scale,c=i?t:this.center,h=i?tm.mini:tm.full,u=c[0]-o/(2*l),d=c[1]-a/(2*l),f=u+o/l,p=d+a/l,x=([S,_])=>[(S-u)*l,(_-d)*l];r.setTransform(1,0,0,1,0,0),r.fillStyle=h.base,r.fillRect(0,0,o,a),r.save(),r.setTransform(l,0,0,l,-u*l,-d*l);for(let S of this.areas)S.bounds[0]>f||S.bounds[2]<u||S.bounds[1]>p||S.bounds[3]<d||(r.fillStyle=h[S.kind],r.fill(S.path,"evenodd"));let m=new Set;for(let S=Math.floor(u/512);S<=Math.floor(f/512);S++)for(let _=Math.floor(d/512);_<=Math.floor(p/512);_++){let b=S+"_"+_;this.buckets.has(b)||this.buckets.set(b,[...new Set((this.city.roadTiles.get(b)||[]).map(C=>C[0]))]);for(let C of this.buckets.get(b))m.add(C);if(l>.37&&this.buildings[b]){let C=this.buildings[b];if(Array.isArray(C)){let w=new Path2D;for(let R of C)w.addPath(Lu(R));this.buildings[b]=C=w}r.fillStyle=h.building,r.fill(C,"evenodd")}}let g=[[],[],[]],v=[];for(let S of m){let _=this.city.roads[S],b=bM.has(_.k);if(!(l<.2&&(!_.d||_.k==="service"))){if(!this.roads.has(S)){let C=new Path2D;_.p.forEach((w,R)=>{let[L,B]=this.city.nodes[w];R?C.lineTo(L,B):C.moveTo(L,B)}),this.roads.set(S,C)}g[b?2:_.d?1:0].push([this.roads.get(S),_]),!i&&_.n&&_.length>65&&l>.11&&v.push([_.n,this.city.nodes[_.p[Math.floor(_.p.length/2)]]])}}r.lineJoin="round",r.lineCap="round",g.forEach((S,_)=>{for(let b of _===0?[!1]:[!0,!1]){r.strokeStyle=b?h.edge:_===2?h.main:_===1?h.street:h.trail,r.setLineDash(_===0&&l>.3?[2/l,2/l]:[]);for(let[C,w]of S){let R=Math.max(_===2?1.7:.78,Math.min(13,w.w*l*.65));r.lineWidth=(R+(b?1.3:0))/l,r.stroke(C)}}}),r.setLineDash([]);let M=new Path2D;this.path.forEach(([S,_],b)=>{b?M.lineTo(S,_):M.moveTo(S,_)});for(let[S,_]of[["#49322e",6],["#ffac4c",3.4]])r.lineWidth=_/l,r.strokeStyle=S,r.stroke(M);if(i||(this.boundary||(this.boundary=Lu([this.city.boundary])),r.lineWidth=1.45/l,r.strokeStyle="#7b8477",r.setLineDash([5/l,4/l]),r.stroke(this.boundary)),r.restore(),r.fillStyle=h.ink,!i){r.font='13px "Helvetica Neue", sans-serif',r.textAlign="center";let S=[],_=(b,C,w)=>{let R=r.measureText(b).width/2;C-R<3||C+R>o-3||w<15||w>a-6||S.some(L=>Math.abs(L[0]-C)<L[2]+R+9&&Math.abs(L[1]-w)<16)||(S.push([C,w,R]),r.lineWidth=4,r.strokeStyle=h.base,r.strokeText(b,C,w),r.fillText(b,C,w))};for(let[b,C,w]of[["The Square",-10,46],["The Grove",-1300,80],["Vaught-Hemingway Stadium",-1442,508],["Lamar Park",-2500,-1300],["University of Mississippi",-1970,84],["Avent Park",1210,-870],["Rowan Oak",-575,760]])_(b,...x([C,w]));for(let[b,C]of v)_(b,...x(C))}for(let[S,_]of[[this.target,"#b84832"],[this.car,"#226c77"]]){if(!S)continue;let[b,C]=x(S);r.fillStyle=_,r.strokeStyle="#fff9ec",r.lineWidth=1.7,r.beginPath(),r.arc(b,C,i?4.5:5.6,0,Math.PI*2),r.fill(),r.stroke()}let[y,T]=x(t);if(r.save(),r.translate(y,T),r.rotate(-n+Math.PI),r.lineWidth=2.4,r.strokeStyle=i?"#17342c":"#fff8e7",r.fillStyle=i?"#ffcf7b":"#174e58",r.beginPath(),r.moveTo(0,-10),r.lineTo(6.4,6.6),r.lineTo(0,3.7),r.lineTo(-6.4,6.6),r.closePath(),r.stroke(),r.fill(),r.restore(),r.font='600 12px "Helvetica Neue", sans-serif',r.textAlign="right",r.fillStyle=h.ink,r.fillText("N \u2191",o-9,17),!i){let S=10**Math.floor(Math.log10(110/l)),_=S*l;r.fillStyle=h.ink,r.fillRect(o-14-_,a-13,_,2),r.fillText(S>=1e3?S/1e3+" km":S+" m",o-14,a-18)}}open(e,t,n){let i=()=>{e.width=e.clientWidth*1.4,e.height=e.clientHeight*1.4,this.paint(e,t,n)};i();let r=a=>{this.scale=Nn(this.scale*a,.035,3.5),i()},o=null;e.onpointerdown=a=>{e.setPointerCapture(a.pointerId),o=[a.clientX,a.clientY]},e.onpointermove=a=>{o&&(this.center[0]-=(a.clientX-o[0])*1.4/this.scale,this.center[1]-=(a.clientY-o[1])*1.4/this.scale,o=[a.clientX,a.clientY],i())},e.onpointerup=()=>o=null,e.onwheel=a=>{a.preventDefault(),r(a.deltaY<0?1.3:1/1.3)},document.querySelector("#zoomIn").onclick=()=>r(1.5),document.querySelector("#zoomOut").onclick=()=>r(1/1.5),document.querySelector("#locate").onclick=()=>{this.center=[...t],this.scale=.7,i()},document.querySelector("#fit").onclick=()=>{this.center=[-1500,950],this.scale=Math.min(e.width/12500,e.height/14200),i()}}};em();var ft=s=>document.querySelector(s),Du=[{id:"grove",name:"The Grove",district:"University of Mississippi",parcel:"Stage crew packet",park:[-1337,145.1],drop:[-1327.6,105.4],note:"Park along University Avenue and carry the packet to the east side of the Grove Pavilion.",points:200},{id:"square",name:"Square Books",district:"Courthouse Square",parcel:"Bookshop proofs",park:[-46.2,69.1],drop:[-32,93.4],note:"Use the parking area on the southwest side of the Square. Take the proofs to the bookstore balcony entrance.",points:150},{id:"park",name:"Lamar Park",district:"Country Club neighborhood",parcel:"Park field notes",park:[-2635.5,-1088],drop:[-2590,-1207],note:"Drive through the residential streets to the south lot. Carry the field notes to the park path by the pavilion.",points:300}],rc=class{constructor(e){this.city=e,this.scene=new Ur,this.scene.fog=new Nr(12702931,92e-5),this.renderer=new Il({antialias:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(1.35,devicePixelRatio)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.autoUpdate=!1,this.renderer.shadowMap.type=hs,this.renderer.toneMapping=uo,this.renderer.toneMappingExposure=1.08,ft("#view").append(this.renderer.domElement),this.camera=new Vt(64,1,.12,3100),this.lightVector=new U(.535,.744,.398).normalize(),this.shadowRight=new U,this.shadowUp=new U,this.shadowCenter=new U,this.lastShadow=0;let t=new At;for(let[o,a]of[["daySky","day"],["twilightSky","dusk"]])t.load("data/lighting/painterly-"+a+".jpg",l=>{l.colorSpace=Ke,l.mapping=sr,this[o]=l,this.lighting()});this.env=new lo(13953274,10196595,1.65),this.scene.add(this.env),this.sun=new cs(16770490,2.55),this.sun.castShadow=!0,Object.assign(this.sun.shadow.camera,{left:-70,right:70,top:70,bottom:-70,near:2,far:290}),this.sun.shadow.mapSize.set(2048,2048),this.sun.shadow.bias=-23e-5,this.sun.shadow.normalBias=.06,this.scene.add(this.sun,this.sun.target),this.world=new nc(this.scene,e),this.streetLights=new ic(this.scene,e),this.life=new Jl(this.scene,e),this.map=new sc(e),this.car=Io(4220506,!0),this.scene.add(this.car),this.p=[4,-35];let n=e.nearest(this.p,o=>o.n==="North Lamar Boulevard");this.yaw=n.yaw+(Math.cos(n.yaw)<0?Math.PI:0),this.p=[n.q[0]-Math.cos(this.yaw)*1.3,n.q[1]+Math.sin(this.yaw)*1.3],this.carPos=[...this.p],this.carYaw=this.yaw,this.speed=0,this.steer=0,this.driving=!0,this.first=!1,this.orbit=0,this.pitch=.02,this.keys=new Set,this.input={},this.time=0,this.distance=0,this.walkDistance=0,this.dusk=!1,this.nav=!0,this.shift=null,this.job=null,this.cursor=0,this.route=[],this.parked=!1,this.recentHit=-5,this.frames=[],this.streamingFrames=[],this.collisions=0,this.ready=!1,this.marker=new ot;let i=new Le(new ro(1.35,1.55,50),new $t({color:16041845,transparent:!0,opacity:.9,side:We}));i.rotation.x=-Math.PI/2,this.marker.add(i);let r=new Le(new so(.33),new Ge({color:16041845,emissive:9991234}));r.position.y=2.8,this.marker.add(r),this.scene.add(this.marker),this.marker.visible=!1,this.lighting(),this.bind(),this.world.update(...this.p),this.tickPosition(1),this.cameraUpdate(1),window.addEventListener("resize",()=>this.resize()),this.resize()}resize(){this.renderer.setSize(innerWidth,innerHeight),this.camera.aspect=innerWidth/innerHeight,this.camera.updateProjectionMatrix()}notify(e){ft("#notice").textContent=e,ft("#notice").style.display="block",clearTimeout(this.noticeTimer),this.noticeTimer=setTimeout(()=>ft("#notice").style.display="none",2600)}bind(){let e={KeyE:"use",KeyJ:"shift",KeyM:"map",KeyN:"navigation",KeyT:"time",KeyC:"camera",KeyF:"deliver",Slash:"help",KeyR:"recover",KeyH:"unlabeled"};window.addEventListener("keydown",i=>{if(["Space","ArrowUp","ArrowLeft","ArrowRight","ArrowDown","Tab"].includes(i.code)&&!ft("#panel").open&&i.preventDefault(),ft("#panel").open){["KeyJ","KeyM","Slash"].includes(i.code)&&ft("#panel").close();return}this.keys.add(i.code),!i.repeat&&e[i.code]&&this.action(e[i.code])}),window.addEventListener("keyup",i=>this.keys.delete(i.code)),window.addEventListener("blur",()=>this.keys.clear());for(let i of document.querySelectorAll("nav button"))i.onclick=()=>this.action(i.dataset.action);ft("#close").onclick=()=>ft("#panel").close(),ft("#panel").addEventListener("close",()=>this.keys.clear());let t=this.renderer.domElement,n=!1;t.onpointerdown=i=>{n=!0,t.setPointerCapture(i.pointerId)},t.onpointerup=()=>n=!1,t.onpointermove=i=>{n&&(this.driving?this.orbit-=i.movementX*.007:this.yaw-=i.movementX*.006,this.pitch=Nn(this.pitch-i.movementY*.004,-.58,.55))}}panel(e,t,n=""){this.keys.clear();let i=ft("#panel");i.className=n,ft("#dialogContent").innerHTML="<h2>"+e+"</h2>"+t,i.open||i.showModal()}action(e){if(e==="unlabeled"){document.body.classList.toggle("unlabeled");return}if(e==="use")if(this.driving){if(Math.abs(this.speed)>1){this.notify("Stop the car to get out.");return}let n=null;for(let[i,r]of[[1.45,0],[-1.45,0],[0,-2.8],[0,2.8]]){let o=[this.p[0]+Math.cos(this.yaw)*i+Math.sin(this.yaw)*r,this.p[1]-Math.sin(this.yaw)*i+Math.cos(this.yaw)*r];if(!this.world.obstructed(...o)){n=o;break}}if(!n){this.notify("Move the car to make room for the door.");return}this.carPos=[...this.p],this.carYaw=this.yaw,this.p=n,this.speed=0,this.driving=!1,this.orbit=0,this.parked=!!this.job&&dt(this.carPos,this.job.park)<8,this.notify(this.parked?"Parked \xB7 finish the delivery on foot.":"On foot \xB7 E near the car to drive.")}else dt(this.p,this.carPos)<4.6?(this.p=[...this.carPos],this.yaw=this.carYaw,this.driving=!0,this.parked=!1,this.orbit=0,this.pitch=.02,this.plan()):this.notify("Return to your car to drive.");else if(e==="shift")this.dispatch();else if(e==="map")this.panel("Oxford street atlas",'<div class="mapcontrols"><button id="zoomIn">+</button><button id="zoomOut">\u2212</button><button id="locate">My location</button><button id="fit">Entire city</button></div><canvas id="atlas"></canvas><p class="legend">Gold route \xB7 Red destination \xB7 Green parked car \xB7 Dashed city limits</p>',"atlas"),this.map.open(ft("#atlas"),this.p,this.yaw);else if(e==="help")this.panel("Controls",'<div class="controls">'+[["W / \u2191","Accelerate or walk forward"],["S / \u2193","Brake, reverse or step back"],["A D / \u2190 \u2192","Steer or turn on foot"],["Space","Brake"],["Shift","Walk faster"],["Drag","Look around"],["E","Park and exit / enter car"],["F","Hand over parcel"],["J","Open dispatch"],["M / N","Atlas / toggle guidance"],["T / C","Day or dusk / driving camera"],["H","Hide or show street labels, map and navigation"],["R","Return to nearest street"]].map(([n,i])=>"<div><b>"+n+"</b><br>"+i+"</div>").join("")+'</div><p class="creditsline">Map data \xA9 OpenStreetMap contributors \xB7 <button id="credits">Credits</button></p>');else if(e==="navigation")this.nav=!this.nav,this.notify("Guidance "+(this.nav?"on":"off"));else if(e==="time")this.dusk=!this.dusk,this.lighting();else if(e==="camera")this.first=!this.first,this.orbit=0,this.pitch=.02;else if(e==="deliver")this.deliver();else if(e==="recover"){if(!this.driving){this.notify("Enter the car to recover it.");return}let n=this.city.nearest(this.p,i=>i.d,400);n&&(this.p=n.q.slice(0,2),this.yaw=n.yaw,this.speed=0,this.plan(),this.notify("Car returned to the street."))}let t=ft("#credits");t&&(t.onclick=()=>this.panel("Data and asset credits",'<iframe title="Data and asset credits" style="width:100%;height:55vh;border:0" src="credits.html"></iframe>')),this.hud()}lighting(){Vp(this),Yp(this.dusk),this.world.nearTrees.setDusk(this.dusk),this.streetLights.setDusk(this.dusk)}dispatch(){if(!this.shift){this.panel("Courier dispatch",'<p>Your car is loaded with three local parcels. Choose the order of your stops. Park at each marked location and finish on foot.</p><button class="primary" id="begin">Begin shift</button>'),ft("#begin").onclick=()=>{this.shift={start:this.time,score:0,done:[],hits:this.collisions},this.dispatch()};return}this.panel("Choose a delivery","<p>"+this.shift.done.length+" of 3 delivered \xB7 "+this.shift.score+" points</p>"+Du.filter(e=>!this.shift.done.includes(e.id)).map(e=>'<button class="job" data-job="'+e.id+'"><strong>'+e.name+"</strong><span>"+e.parcel+" \xB7 "+e.district+" \xB7 "+e.points+" pts</span></button>").join("")),document.querySelectorAll(".job").forEach(e=>e.onclick=()=>{this.job=Du.find(t=>t.id===e.dataset.job),this.parked=!this.driving&&dt(this.carPos,this.job.park)<8,this.plan(),ft("#panel").close(),this.notify(this.job.parcel+" aboard."),this.hud()})}plan(){this.job&&(this.route=this.city.route(this.driving?this.p:this.carPos,this.job.park),this.cursor=0,this.lastPlan=this.time,this.routeProgress())}routeProgress(){if(!this.route.length||!this.driving)return;let e=1/0,t=this.cursor;for(let n=Math.max(0,this.cursor-1);n<Math.min(this.route.length-1,this.cursor+12);n++){let i=Wi(this.p,this.route[n],this.route[n+1]),r=dt(this.p,i);r<e&&(e=r,t=n)}this.cursor=t,e>32&&this.time-this.lastPlan>2&&this.plan()}deliver(){if(!this.job){this.notify("Choose a parcel in dispatch first.");return}if(this.driving||!this.parked){this.notify("Park in the marked area and get out.");return}if(dt(this.p,this.job.drop)>4){this.notify("Walk to the handoff marker.");return}if(this.shift.score+=this.job.points,this.shift.done.push(this.job.id),this.notify("Delivered \xB7 +"+this.job.points+" points"),this.job=null,this.route=[],this.parked=!1,this.shift.done.length===3){let e={...this.shift,duration:this.time-this.shift.start,penalty:Math.min(this.shift.score,10*(this.collisions-this.shift.hits))};e.total=e.score-e.penalty,this.lastResult=e,this.shift=null,this.panel("Shift complete","<p>All three parcels delivered. Your score is <b>"+e.total+"</b> points.</p><p>"+Math.round(e.duration/60)+" minutes \xB7 "+e.score+" delivery points \xB7 "+e.penalty+' collision penalty</p><button class="primary" id="roam">Return to Oxford</button>'),ft("#roam").onclick=()=>ft("#panel").close()}else this.dispatch()}controls(){let e=this.keys;return{gas:+(e.has("KeyW")||e.has("ArrowUp")),back:+(e.has("KeyS")||e.has("ArrowDown")),steer:+(e.has("KeyA")||e.has("ArrowLeft"))-+(e.has("KeyD")||e.has("ArrowRight")),brake:+e.has("Space"),run:+(e.has("ShiftLeft")||e.has("ShiftRight")),...this.input}}tickPosition(e){this.driving&&(this.carPos=[...this.p],this.carYaw=this.yaw);let[t,n]=this.carPos,i=this.roadNear,r=this.city.ground(t,n),o=i?.r.bridge&&i.d<i.r.w*.7?this.city.surface(i.r,i.i,i.q[2],t,n):r;this.car.position.set(t,o+.29,n),this.car.rotation.order="YXZ",this.car.rotation.y=this.carYaw;let a=Math.sin(this.carYaw),l=Math.cos(this.carYaw);this.car.rotation.x=-Math.atan2(this.city.ground(t+a*1.6,n+l*1.6)-this.city.ground(t-a*1.6,n-l*1.6),3.2)}step(e){this.time+=e;let t=this.controls(),n=[...this.p],i;if(this.driving){let p=(this.roadNear?.d??30)>(this.roadNear?.r.w??0)*.5+1,x=t.gas*(this.speed<-.3?7.8:4.45*Math.max(.08,1-Math.abs(this.speed)/39)),m=t.back*(this.speed>.35?8.6:2.7),g=(p?1.15:.2)+this.speed*this.speed*.0017,v=-Math.sin(this.car.rotation.x);this.speed+=e*(x-m-(Math.abs(this.speed)>.35?9.81*v:0)),this.speed-=Math.sign(this.speed)*Math.min(Math.abs(this.speed),e*(g+(t.brake?12:0))),this.speed=Nn(this.speed,-6,p?11:39);let M=t.steer*Nn(.52/(1+Math.abs(this.speed)*.045),.14,.52);this.steer+=(M-this.steer)*(1-Math.exp(-e*7)),this.yaw+=this.speed/2.65*Math.tan(this.steer)*e,i=this.speed}else this.yaw+=t.steer*e*2.25,i=(t.gas-t.back)*(t.run?4.25:1.75);let r=Math.sin(this.yaw),o=Math.cos(this.yaw),a=this.p[0]+r*i*e,l=this.p[1]+o*i*e,[c,h,u,d]=this.city.dem.bounds,f=a<c+2||a>u-2||l<h+2||l>d-2;if(Math.abs(i)>.01&&!f){let p=this.driving?Math.sign(i)*1.85:0;if(f=this.world.obstructed(a+r*p,l+o*p,this.driving?.7:.2,this.roadNear?.r.bridge&&this.roadNear.d<this.roadNear.r.w*.65,!this.driving),this.driving&&!f)for(let x of[...this.life.cars,...this.life.people]){let m=x.mesh.position;if(Math.hypot(a+r*p-m.x,l+o*p-m.z)<(this.life.cars.includes(x)?1.48:.85)){f=!0;break}}}f?(this.driving&&Math.abs(i)>1.8&&this.time-this.recentHit>1&&(this.recentHit=this.time,this.collisions++),this.speed=0):(this.p=[a,l],this.driving?this.distance+=dt(n,this.p):this.walkDistance+=dt(n,this.p)),this.world.update(...this.p),this.tickPosition(e),fr(this.car,this.speed,this.steer,this.driving&&!!(t.brake||t.back&&this.speed>.1),this.dusk,e),this.life.tick(e,this.p,this.speed,this.yaw)}cameraUpdate(e){let[t,n]=this.p,i=this.driving?this.car.position.y:this.world.walkSurface(t,n)+.19,r=this.yaw+this.orbit,o=Math.sin(r),a=Math.cos(r);if(this.driving&&!this.first){let c=new U(t-o*7.3,Math.max(i+3.05+this.pitch*3,this.city.ground(t-o*7.3,n-a*7.3)+1),n-a*7.3);this.camera.position.lerp(c,Math.min(1,e*10)),this.camera.lookAt(t+o*6,i+1.05,n+a*6)}else this.camera.position.set(t+(this.driving?.55:0)*o,i+(this.driving?1.58:1.72),n+(this.driving?.55:0)*a),this.camera.lookAt(this.camera.position.x+o,this.camera.position.y+Math.sin(this.pitch),this.camera.position.z+a);Hp(this,t,i,n),this.streetLights.tick(t,n)}hud(){for(let u of this.world.tiles.values())for(let d of u.signals||[]){let f=this.life.signal(d.u,this.life.elapsed),p=d.axis?f<8?2:f<10?1:0:f>=11&&f<19?2:f>=19&&f<21?1:0;d.lamps.forEach((x,m)=>x.color.set(m===p?[15223602,15776599,7390875][m]:3685429))}this.roadNear=this.city.nearest(this.p,u=>u.d,65);let e=this.roadNear?.r.n||this.city.nearest(this.p,u=>u.d&&u.n,120)?.r.n,[t,n]=this.p,i=Math.hypot(t,n-46)<250,r=t<-1e3&&t>-2650&&n>-500&&n<1100,o=dt(this.p,Du[2].drop)<350;if(ft("#district").textContent=i?"Courthouse Square":r?"University of Mississippi":o?"Lamar Park":"Oxford, Mississippi",ft("#street").textContent=!this.driving&&this.job&&this.parked?this.job.name:e||ft("#district").textContent,ft("#state").textContent=this.shift?"COURIER SHIFT   /   "+this.shift.done.length+" OF 3 DELIVERED":"FREE EXPLORATION",ft("#hint").textContent=this.job?this.parked?"Walk to the handoff and press F.":this.job.parcel+" \u2192 "+this.job.name:this.shift?"Open dispatch to choose a parcel.":"Drive through Oxford or pick up a courier shift.",ft("#mode").textContent=this.driving?this.speed<-.2?"REVERSE":"DRIVE":"ON FOOT",ft("#useLabel").textContent=this.driving?"Exit car":"Enter car",ft("#speed").textContent=this.driving?Math.round(Math.abs(this.speed)*2.23694):"\u2014",this.map.car=this.driving?null:this.carPos,this.map.target=this.job?this.parked?this.job.drop:this.job.park:null,this.map.path=this.job&&this.nav&&this.driving?this.route.slice(this.cursor):[],document.body.classList.contains("unlabeled")||this.map.paint(ft("#mini"),this.p,this.yaw,!0),ft("#route").classList.toggle("hidden",!(this.job&&this.nav)),this.marker.visible=!!(this.job&&this.nav&&!document.body.classList.contains("unlabeled")),!this.job)return;let a=this.parked?this.job.drop:this.job.park;this.marker.position.set(a[0],this.city.ground(...a)+.35,a[1]),this.marker.children[1].rotation.y=this.time*.8;let l,c,h;if(!this.driving)l=this.parked?"Deliver "+this.job.parcel.toLowerCase():"Return to your car",c=this.parked?Math.round(dt(this.p,a))+" m on foot \xB7 F to hand over":"Park in the designated area",h="\u25C7";else if(dt(this.p,a)<35)l="Park at the gold marker",c=Math.round(dt(this.p,a))+" m \xB7 stop, then press E",h="P";else{this.routeProgress();let u=0,d=null;for(let f=this.cursor+1;f<this.route.length;f++){let p=this.route[f-1],x=this.route[f];if(u+=dt(f===this.cursor+1?this.p:p,x),!d&&f+1<this.route.length){let m=this.route[f+1],g=Xu(Math.atan2(m[0]-x[0],m[1]-x[1])-Math.atan2(x[0]-p[0],x[1]-p[1]));Math.abs(g)>.48&&this.city.roads[m[2]].n!==this.city.roads[x[2]].n&&(d={len:u,ang:g,name:this.city.roads[m[2]].n||"access road"})}}l=d?(d.ang>0?"Left on ":"Right on ")+d.name:"Continue to "+this.job.name,c=(d?Math.round(d.len)+" m to turn \xB7 ":"")+(u/1e3).toFixed(1)+" km remaining",h=d?d.ang>0?"\u21B0":"\u21B1":"\u2191"}ft("#turn").textContent=h,ft("#instruction").textContent=l,ft("#remaining").textContent=c,ft("#routelabel").textContent=this.job.name.toUpperCase()}start(){let e=performance.now(),t=0,n=i=>{let r=(i-e)/1e3;if(e=i,!this.ready&&this.world.tiles.get(this.world.center)?.detail&&this.world.running===0&&(this.ready=!0,ft("#loading").remove(),this.hud(),this.cameraUpdate(1)),this.ready&&!ft("#panel").open){this.frames.push(r*1e3),(this.world.running||performance.now()-(this.world.lastStream||0)<250)&&this.streamingFrames.push(r*1e3),this.frames.length>1e5&&this.frames.splice(0,2e4);let o=Math.min(.13,r);for(;o>1e-4;){let a=Math.min(o,.022222222222222223);this.step(a),o-=a}this.cameraUpdate(Math.min(.1,r)),t+=r,t>.12&&(this.hud(),t=0)}i-this.lastShadow>=42&&(this.renderer.shadowMap.needsUpdate=!0,this.lastShadow=i),this.renderer.render(this.scene,this.camera),requestAnimationFrame(n)};requestAnimationFrame(n)}};(async()=>{try{let s=new rc(await No.load());window.oxford=s,s.start()}catch(s){console.error(s),document.querySelector("#loading p").textContent="Could not load Oxford: "+s.message}})();})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
