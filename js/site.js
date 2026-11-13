(()=>{var B_=Object.defineProperty;var z_=(s,t,e)=>t in s?B_(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var zt=(s,t,e)=>z_(s,typeof t!="symbol"?t+"":t,e);var pp=0,Iu=1,mp=2;var ga=1,gp=2,ao=3,Vs=0,gn=1,Wi=2,ur=0,lo=1,Lu=2,Du=3,Nu=4,_p=5;var fr=100,xp=101,vp=102,yp=103,Sp=104,Mp=200,bp=201,Tp=202,wp=203,Uu=204,Ou=205,Ep=206,Ap=207,Cp=208,Rp=209,Pp=210,Ip=211,Lp=212,Dp=213,Np=214,Nl=0,Ul=1,Ol=2,jr=3,Fl=4,Bl=5,zl=6,kl=7,dc=0,Up=1,Op=2,Xi=0,Fu=1,Bu=2,zu=3,_a=4,ku=5,Vu=6,Gu=7;var Hu=300,dr=301,co=302,pc=303,mc=304,Vl=1e3,zi=1001,Gl=1002,fn=1003,Fp=1004;var xa=1005;var Fn=1006,gc=1007;var fs=1008;var Yn=1009,Wu=1010,Xu=1011,ho=1012,_c=1013,Li=1014,xi=1015,Di=1016,xc=1017,vc=1018,pr=1020,qu=35902,Yu=35899,Zu=1021,Ju=1022,Ni=1023,ls=1026,ds=1027,yc=1028,Sc=1029,Gs=1030,Mc=1031;var bc=1033,va=33776,ya=33777,Sa=33778,Ma=33779,Tc=35840,wc=35841,Ec=35842,Ac=35843,Cc=36196,Rc=37492,Pc=37496,Ic=37488,Lc=37489,ba=37490,Dc=37491,Nc=37808,Uc=37809,Oc=37810,Fc=37811,Bc=37812,zc=37813,kc=37814,Vc=37815,Gc=37816,Hc=37817,Wc=37818,Xc=37819,qc=37820,Yc=37821,Zc=36492,Jc=36494,$c=36495,Kc=36283,Qc=36284,Ta=36285,jc=36286;var qo=2300,Hl=2301,Ll=2302,bu=2303,Tu=2400,wu=2401,Eu=2402;var Bp=3200;var wa=0,zp=1,ps="",si="srgb",Yo="srgb-linear",Zo="linear",xe="srgb";var Dl=7680;var kp=519,Vp=512,Gp=513,Hp=514,$u=515,Wp=516,Xp=517,Ku=518,Qu=519,qp=35044,th=35048;var ju="300 es",_i=2e3,to=2001;function k_(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function V_(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Jo(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Yp(){let s=Jo("canvas");return s.style.display="block",s}var Vd={},eo=null;function tf(...s){let t="THREE."+s.shift();eo?eo("log",t,...s):console.log(t,...s)}function Zp(s){let t=s[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=s[1];e&&e.isStackTrace?s[0]+=" "+e.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Vt(...s){s=Zp(s);let t="THREE."+s.shift();if(eo)eo("warn",t,...s);else{let e=s[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...s)}}function Ht(...s){s=Zp(s);let t="THREE."+s.shift();if(eo)eo("error",t,...s);else{let e=s[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...s)}}function Xo(...s){let t=s.join(" ");t in Vd||(Vd[t]=!0,Vt(...s))}function Jp(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var $p={[Nl]:Nl,[Ol]:zl,[Fl]:Fl,[jr]:Bl,[Ul]:Ul,[zl]:Ol,[kl]:kl,[Bl]:jr},ki=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let i=n[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}},bn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Qh=Math.PI/180,Wl=180/Math.PI;function Ea(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(bn[s&255]+bn[s>>8&255]+bn[s>>16&255]+bn[s>>24&255]+"-"+bn[t&255]+bn[t>>8&255]+"-"+bn[t>>16&15|64]+bn[t>>24&255]+"-"+bn[e&63|128]+bn[e>>8&255]+"-"+bn[e>>16&255]+bn[e>>24&255]+bn[n&255]+bn[n>>8&255]+bn[n>>16&255]+bn[n>>24&255]).toLowerCase()}function se(s,t,e){return Math.max(t,Math.min(e,s))}function G_(s,t){return(s%t+t)%t}function jh(s,t,e){return(1-e)*s+e*t}function Kp(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function ef(s){switch(s.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function H_(s,t){if(t.constructor===Float32Array)return s;let e=ef(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(s/e,-1)}function W_(s,t){if(t.constructor===Float32Array)return s;let e=ef(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(s*e)}var lf=class lf{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=se(this.x,t.x,e.x),this.y=se(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=se(this.x,t,e),this.y=se(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(se(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(se(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};lf.prototype.isVector2=!0;var re=lf,En=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3],u=r[o+0],f=r[o+1],m=r[o+2],_=r[o+3];if(d!==_||l!==u||c!==f||h!==m){let p=l*u+c*f+h*m+d*_;p<0&&(u=-u,f=-f,m=-m,_=-_,p=-p);let g=1-a;if(p<.9995){let v=Math.acos(p),T=Math.sin(v);g=Math.sin(g*v)/T,a=Math.sin(a*v)/T,l=l*g+u*a,c=c*g+f*a,h=h*g+m*a,d=d*g+_*a}else{l=l*g+u*a,c=c*g+f*a,h=h*g+m*a,d=d*g+_*a;let v=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=v,c*=v,h*=v,d*=v}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,r,o){let a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=r[o],u=r[o+1],f=r[o+2],m=r[o+3];return t[e]=a*m+h*d+l*f-c*u,t[e+1]=l*m+h*u+c*d-a*f,t[e+2]=c*m+h*f+a*u-l*d,t[e+3]=h*m-a*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),d=a(r/2),u=l(n/2),f=l(i/2),m=l(r/2);switch(o){case"XYZ":this._x=u*h*d+c*f*m,this._y=c*f*d-u*h*m,this._z=c*h*m+u*f*d,this._w=c*h*d-u*f*m;break;case"YXZ":this._x=u*h*d+c*f*m,this._y=c*f*d-u*h*m,this._z=c*h*m-u*f*d,this._w=c*h*d+u*f*m;break;case"ZXY":this._x=u*h*d-c*f*m,this._y=c*f*d+u*h*m,this._z=c*h*m+u*f*d,this._w=c*h*d-u*f*m;break;case"ZYX":this._x=u*h*d-c*f*m,this._y=c*f*d+u*h*m,this._z=c*h*m-u*f*d,this._w=c*h*d+u*f*m;break;case"YZX":this._x=u*h*d+c*f*m,this._y=c*f*d+u*h*m,this._z=c*h*m-u*f*d,this._w=c*h*d-u*f*m;break;case"XZY":this._x=u*h*d-c*f*m,this._y=c*f*d-u*h*m,this._z=c*h*m+u*f*d,this._w=c*h*d+u*f*m;break;default:Vt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+a+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-i)*f}else if(n>a&&n>d){let f=2*Math.sqrt(1+n-a-d);this._w=(h-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+c)/f}else if(a>d){let f=2*Math.sqrt(1+a-n-d);this._w=(r-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-n-a);this._w=(o-i)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(se(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,i=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,i=-i,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},cf=class cf{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Gd.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Gd.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-r*i),d=2*(r*n-o*e);return this.x=e+l*c+o*d-a*h,this.y=n+l*h+a*c-r*d,this.z=i+l*d+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=se(this.x,t.x,e.x),this.y=se(this.y,t.y,e.y),this.z=se(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=se(this.x,t,e),this.y=se(this.y,t,e),this.z=se(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(se(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return tu.copy(this).projectOnVector(t),this.sub(tu)}reflect(t){return this.sub(tu.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(se(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};cf.prototype.isVector3=!0;var G=cf,tu=new G,Gd=new En,hf=class hf{constructor(t,e,n,i,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c)}set(t,e,n,i,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],m=n[8],_=i[0],p=i[3],g=i[6],v=i[1],T=i[4],y=i[7],w=i[2],E=i[5],x=i[8];return r[0]=o*_+a*v+l*w,r[3]=o*p+a*T+l*E,r[6]=o*g+a*y+l*x,r[1]=c*_+h*v+d*w,r[4]=c*p+h*T+d*E,r[7]=c*g+h*y+d*x,r[2]=u*_+f*v+m*w,r[5]=u*p+f*T+m*E,r[8]=u*g+f*y+m*x,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*o-a*c,u=a*l-h*r,f=c*r-o*l,m=e*d+n*u+i*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/m;return t[0]=d*_,t[1]=(i*c-h*n)*_,t[2]=(a*n-i*o)*_,t[3]=u*_,t[4]=(h*e-i*l)*_,t[5]=(i*r-a*e)*_,t[6]=f*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return Xo("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(eu.makeScale(t,e)),this}rotate(t){return Xo("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(eu.makeRotation(-t)),this}translate(t,e){return Xo("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(eu.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};hf.prototype.isMatrix3=!0;var Wt=hf,eu=new Wt,Hd=new Wt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Wd=new Wt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function X_(){let s={enabled:!0,workingColorSpace:Yo,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===xe&&(i.r=as(i.r),i.g=as(i.g),i.b=as(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===xe&&(i.r=Qr(i.r),i.g=Qr(i.g),i.b=Qr(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ps?Zo:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Yo]:{primaries:t,whitePoint:n,transfer:Zo,toXYZ:Hd,fromXYZ:Wd,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:si},outputColorSpaceConfig:{drawingBufferColorSpace:si}},[si]:{primaries:t,whitePoint:n,transfer:xe,toXYZ:Hd,fromXYZ:Wd,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:si}}}),s}var le=X_();function as(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Qr(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Br,Xl=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Br===void 0&&(Br=Jo("canvas")),Br.width=t.width,Br.height=t.height;let i=Br.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=Br}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=Jo("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=as(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(as(e[n]/255)*255):e[n]=as(e[n]);return{data:e,width:t.width,height:t.height}}else return Vt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},q_=0,no=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:q_++}),this.uuid=Ea(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement!="undefined"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame!="undefined"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(nu(i[o].image)):r.push(nu(i[o]))}else r=nu(i);n.url=r}return e||(t.images[this.uuid]=n),n}};function nu(s){return typeof HTMLImageElement!="undefined"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&s instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&s instanceof ImageBitmap?Xl.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Vt("Texture: Unable to serialize Texture."),{})}var Y_=0,iu=new G,qn=class s extends ki{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,n=zi,i=zi,r=Fn,o=fs,a=Ni,l=Yn,c=s.DEFAULT_ANISOTROPY,h=ps){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Y_++}),this.uuid=Ea(),this.name="",this.source=new no(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new re(0,0),this.repeat=new re(1,1),this.center=new re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Wt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(iu).x}get height(){return this.source.getSize(iu).y}get depth(){return this.source.getSize(iu).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Vt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Vt(`Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Hu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Vl:t.x=t.x-Math.floor(t.x);break;case zi:t.x=t.x<0?0:1;break;case Gl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Vl:t.y=t.y-Math.floor(t.y);break;case zi:t.y=t.y<0?0:1;break;case Gl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};qn.DEFAULT_IMAGE=null;qn.DEFAULT_MAPPING=Hu;qn.DEFAULT_ANISOTROPY=1;var uf=class uf{constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r,l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],m=l[9],_=l[2],p=l[6],g=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-_)<.01&&Math.abs(m-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+_)<.1&&Math.abs(m+p)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let T=(c+1)/2,y=(f+1)/2,w=(g+1)/2,E=(h+u)/4,x=(d+_)/4,b=(m+p)/4;return T>y&&T>w?T<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(T),i=E/n,r=x/n):y>w?y<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(y),n=E/i,r=b/i):w<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(w),n=x/r,i=b/r),this.set(n,i,r,e),this}let v=Math.sqrt((p-m)*(p-m)+(d-_)*(d-_)+(u-h)*(u-h));return Math.abs(v)<.001&&(v=1),this.x=(p-m)/v,this.y=(d-_)/v,this.z=(u-h)/v,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=se(this.x,t.x,e.x),this.y=se(this.y,t.y,e.y),this.z=se(this.z,t.z,e.z),this.w=se(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=se(this.x,t,e),this.y=se(this.y,t,e),this.z=se(this.z,t,e),this.w=se(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(se(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};uf.prototype.isVector4=!0;var Ue=uf,ql=class extends ki{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Fn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Ue(0,0,t,e),this.scissorTest=!1,this.viewport=new Ue(0,0,t,e),this.textures=[];let i=n.count;for(let r=0;r<i;r++)this.textures[r]=new qn({width:t,height:e,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Fn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let i=Object.assign({},t.textures[e].image);this.textures[e].source=new no(i)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},ri=class extends ql{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},$o=class extends qn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=fn,this.minFilter=fn,this.wrapR=zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Yl=class extends qn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=fn,this.minFilter=fn,this.wrapR=zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var fc=class fc{constructor(t,e,n,i,r,o,a,l,c,h,d,u,f,m,_,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c,h,d,u,f,m,_,p)}set(t,e,n,i,r,o,a,l,c,h,d,u,f,m,_,p){let g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=i,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=h,g[10]=d,g[14]=u,g[3]=f,g[7]=m,g[11]=_,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new fc().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,i=1/zr.setFromMatrixColumn(t,0).length(),r=1/zr.setFromMatrixColumn(t,1).length(),o=1/zr.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let u=o*h,f=o*d,m=a*h,_=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+m*c,e[5]=u-_*c,e[9]=-a*l,e[2]=_-u*c,e[6]=m+f*c,e[10]=o*l}else if(t.order==="YXZ"){let u=l*h,f=l*d,m=c*h,_=c*d;e[0]=u+_*a,e[4]=m*a-f,e[8]=o*c,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=f*a-m,e[6]=_+u*a,e[10]=o*l}else if(t.order==="ZXY"){let u=l*h,f=l*d,m=c*h,_=c*d;e[0]=u-_*a,e[4]=-o*d,e[8]=m+f*a,e[1]=f+m*a,e[5]=o*h,e[9]=_-u*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let u=o*h,f=o*d,m=a*h,_=a*d;e[0]=l*h,e[4]=m*c-f,e[8]=u*c+_,e[1]=l*d,e[5]=_*c+u,e[9]=f*c-m,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let u=o*l,f=o*c,m=a*l,_=a*c;e[0]=l*h,e[4]=_-u*d,e[8]=m*d+f,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*d+m,e[10]=u-_*d}else if(t.order==="XZY"){let u=o*l,f=o*c,m=a*l,_=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+_,e[5]=o*h,e[9]=f*d-m,e[2]=m*d-f,e[6]=a*h,e[10]=_*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Z_,t,J_)}lookAt(t,e,n){let i=this.elements;return ni.subVectors(t,e),ni.lengthSq()===0&&(ni.z=1),ni.normalize(),Rs.crossVectors(n,ni),Rs.lengthSq()===0&&(Math.abs(n.z)===1?ni.x+=1e-4:ni.z+=1e-4,ni.normalize(),Rs.crossVectors(n,ni)),Rs.normalize(),ul.crossVectors(ni,Rs),i[0]=Rs.x,i[4]=ul.x,i[8]=ni.x,i[1]=Rs.y,i[5]=ul.y,i[9]=ni.y,i[2]=Rs.z,i[6]=ul.z,i[10]=ni.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],m=n[2],_=n[6],p=n[10],g=n[14],v=n[3],T=n[7],y=n[11],w=n[15],E=i[0],x=i[4],b=i[8],P=i[12],C=i[1],N=i[5],D=i[9],W=i[13],I=i[2],B=i[6],H=i[10],F=i[14],tt=i[3],X=i[7],R=i[11],K=i[15];return r[0]=o*E+a*C+l*I+c*tt,r[4]=o*x+a*N+l*B+c*X,r[8]=o*b+a*D+l*H+c*R,r[12]=o*P+a*W+l*F+c*K,r[1]=h*E+d*C+u*I+f*tt,r[5]=h*x+d*N+u*B+f*X,r[9]=h*b+d*D+u*H+f*R,r[13]=h*P+d*W+u*F+f*K,r[2]=m*E+_*C+p*I+g*tt,r[6]=m*x+_*N+p*B+g*X,r[10]=m*b+_*D+p*H+g*R,r[14]=m*P+_*W+p*F+g*K,r[3]=v*E+T*C+y*I+w*tt,r[7]=v*x+T*N+y*B+w*X,r[11]=v*b+T*D+y*H+w*R,r[15]=v*P+T*W+y*F+w*K,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],m=t[3],_=t[7],p=t[11],g=t[15],v=l*f-c*u,T=a*f-c*d,y=a*u-l*d,w=o*f-c*h,E=o*u-l*h,x=o*d-a*h;return e*(_*v-p*T+g*y)-n*(m*v-p*w+g*E)+i*(m*T-_*w+g*x)-r*(m*y-_*E+p*x)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-n*(r*h-a*l)+i*(r*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],m=t[12],_=t[13],p=t[14],g=t[15],v=e*a-n*o,T=e*l-i*o,y=e*c-r*o,w=n*l-i*a,E=n*c-r*a,x=i*c-r*l,b=h*_-d*m,P=h*p-u*m,C=h*g-f*m,N=d*p-u*_,D=d*g-f*_,W=u*g-f*p,I=v*W-T*D+y*N+w*C-E*P+x*b;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let B=1/I;return t[0]=(a*W-l*D+c*N)*B,t[1]=(i*D-n*W-r*N)*B,t[2]=(_*x-p*E+g*w)*B,t[3]=(u*E-d*x-f*w)*B,t[4]=(l*C-o*W-c*P)*B,t[5]=(e*W-i*C+r*P)*B,t[6]=(p*y-m*x-g*T)*B,t[7]=(h*x-u*y+f*T)*B,t[8]=(o*D-a*C+c*b)*B,t[9]=(n*C-e*D-r*b)*B,t[10]=(m*E-_*y+g*v)*B,t[11]=(d*y-h*E-f*v)*B,t[12]=(a*P-o*N-l*b)*B,t[13]=(e*N-n*P+i*b)*B,t[14]=(_*T-m*w-p*v)*B,t[15]=(h*w-d*T+u*v)*B,this}scale(t){let e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,d=a+a,u=r*c,f=r*h,m=r*d,_=o*h,p=o*d,g=a*d,v=l*c,T=l*h,y=l*d,w=n.x,E=n.y,x=n.z;return i[0]=(1-(_+g))*w,i[1]=(f+y)*w,i[2]=(m-T)*w,i[3]=0,i[4]=(f-y)*E,i[5]=(1-(u+g))*E,i[6]=(p+v)*E,i[7]=0,i[8]=(m+T)*x,i[9]=(p-v)*x,i[10]=(1-(u+_))*x,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=zr.set(i[0],i[1],i[2]).length(),a=zr.set(i[4],i[5],i[6]).length(),l=zr.set(i[8],i[9],i[10]).length();r<0&&(o=-o),Ei.copy(this);let c=1/o,h=1/a,d=1/l;return Ei.elements[0]*=c,Ei.elements[1]*=c,Ei.elements[2]*=c,Ei.elements[4]*=h,Ei.elements[5]*=h,Ei.elements[6]*=h,Ei.elements[8]*=d,Ei.elements[9]*=d,Ei.elements[10]*=d,e.setFromRotationMatrix(Ei),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,i,r,o,a=_i,l=!1){let c=this.elements,h=2*r/(e-t),d=2*r/(n-i),u=(e+t)/(e-t),f=(n+i)/(n-i),m,_;if(l)m=r/(o-r),_=o*r/(o-r);else if(a===_i)m=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===to)m=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=_i,l=!1){let c=this.elements,h=2/(e-t),d=2/(n-i),u=-(e+t)/(e-t),f=-(n+i)/(n-i),m,_;if(l)m=1/(o-r),_=o/(o-r);else if(a===_i)m=-2/(o-r),_=-(o+r)/(o-r);else if(a===to)m=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};fc.prototype.isMatrix4=!0;var Se=fc,zr=new G,Ei=new Se,Z_=new G(0,0,0),J_=new G(1,1,1),Rs=new G,ul=new G,ni=new G,Xd=new Se,qd=new En,oi=class s{constructor(t=0,e=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],d=i[2],u=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(se(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-se(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(se(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-se(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(se(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-se(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Vt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Xd.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Xd,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return qd.setFromEuler(this),this.setFromQuaternion(qd,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};oi.DEFAULT_ORDER="XYZ";var Ko=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},$_=0,Yd=new G,kr=new En,es=new Se,fl=new G,zo=new G,K_=new G,Q_=new En,Zd=new G(1,0,0),Jd=new G(0,1,0),$d=new G(0,0,1),Kd={type:"added"},j_={type:"removed"},Vr={type:"childadded",child:null},su={type:"childremoved",child:null},rn=class s extends ki{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$_++}),this.uuid=Ea(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new G,e=new oi,n=new En,i=new G(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Se},normalMatrix:{value:new Wt}}),this.matrix=new Se,this.matrixWorld=new Se,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ko,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return kr.setFromAxisAngle(t,e),this.quaternion.multiply(kr),this}rotateOnWorldAxis(t,e){return kr.setFromAxisAngle(t,e),this.quaternion.premultiply(kr),this}rotateX(t){return this.rotateOnAxis(Zd,t)}rotateY(t){return this.rotateOnAxis(Jd,t)}rotateZ(t){return this.rotateOnAxis($d,t)}translateOnAxis(t,e){return Yd.copy(t).applyQuaternion(this.quaternion),this.position.add(Yd.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Zd,t)}translateY(t){return this.translateOnAxis(Jd,t)}translateZ(t){return this.translateOnAxis($d,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(es.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?fl.copy(t):fl.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),zo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?es.lookAt(zo,fl,this.up):es.lookAt(fl,zo,this.up),this.quaternion.setFromRotationMatrix(es),i&&(es.extractRotation(i.matrixWorld),kr.setFromRotationMatrix(es),this.quaternion.premultiply(kr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Ht("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Kd),Vr.child=t,this.dispatchEvent(Vr),Vr.child=null):Ht("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(j_),su.child=t,this.dispatchEvent(su),su.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),es.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),es.multiply(t.parent.matrixWorld)),t.applyMatrix4(es),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Kd),Vr.child=t,this.dispatchEvent(Vr),Vr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zo,t,K_),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zo,Q_,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,i=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*i,r[13]+=n-r[1]*e-r[5]*n-r[9]*i,r[14]+=i-r[2]*e-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),u=o(t.skeletons),f=o(t.animations),m=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=i,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};rn.DEFAULT_UP=new G(0,1,0);rn.DEFAULT_MATRIX_AUTO_UPDATE=!0;rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var os=class extends rn{constructor(){super(),this.isGroup=!0,this.type="Group"}},t0={type:"move"},io=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new os,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new os,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new os,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let _ of t.hand.values()){let p=e.getJointPose(_,n),g=this._getHandJoint(c,_);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=p.radius),g.visible=p!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,m=.005;c.inputState.pinching&&u>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(t0)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new os;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Qp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ps={h:0,s:0,l:0},dl={h:0,s:0,l:0};function ru(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var Jt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=si){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,le.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=le.workingColorSpace){return this.r=t,this.g=e,this.b=n,le.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=le.workingColorSpace){if(t=G_(t,1),e=se(e,0,1),n=se(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=ru(o,r,t+1/3),this.g=ru(o,r,t),this.b=ru(o,r,t-1/3)}return le.colorSpaceToWorking(this,i),this}setStyle(t,e=si){function n(r){r!==void 0&&parseFloat(r)<1&&Vt("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Vt("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);Vt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=si){let n=Qp[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Vt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=as(t.r),this.g=as(t.g),this.b=as(t.b),this}copyLinearToSRGB(t){return this.r=Qr(t.r),this.g=Qr(t.g),this.b=Qr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=si){return le.workingToColorSpace(Tn.copy(this),t),Math.round(se(Tn.r*255,0,255))*65536+Math.round(se(Tn.g*255,0,255))*256+Math.round(se(Tn.b*255,0,255))}getHexString(t=si){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=le.workingColorSpace){le.workingToColorSpace(Tn.copy(this),e);let n=Tn.r,i=Tn.g,r=Tn.b,o=Math.max(n,i,r),a=Math.min(n,i,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(i-r)/d+(i<r?6:0);break;case i:l=(r-n)/d+2;break;case r:l=(n-i)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=le.workingColorSpace){return le.workingToColorSpace(Tn.copy(this),e),t.r=Tn.r,t.g=Tn.g,t.b=Tn.b,t}getStyle(t=si){le.workingToColorSpace(Tn.copy(this),t);let e=Tn.r,n=Tn.g,i=Tn.b;return t!==si?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Ps),this.setHSL(Ps.h+t,Ps.s+e,Ps.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ps),t.getHSL(dl);let n=jh(Ps.h,dl.h,e),i=jh(Ps.s,dl.s,e),r=jh(Ps.l,dl.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Tn=new Jt;Jt.NAMES=Qp;var hr=class extends rn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new oi,this.environmentIntensity=1,this.environmentRotation=new oi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Ai=new G,ns=new G,ou=new G,is=new G,Gr=new G,Hr=new G,Qd=new G,au=new G,lu=new G,cu=new G,hu=new Ue,uu=new Ue,fu=new Ue,Ns=class s{constructor(t=new G,e=new G,n=new G){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Ai.subVectors(t,e),i.cross(Ai);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){Ai.subVectors(i,e),ns.subVectors(n,e),ou.subVectors(t,e);let o=Ai.dot(Ai),a=Ai.dot(ns),l=Ai.dot(ou),c=ns.dot(ns),h=ns.dot(ou),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(c*l-a*h)*u,m=(o*h-a*l)*u;return r.set(1-f-m,m,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,is)===null?!1:is.x>=0&&is.y>=0&&is.x+is.y<=1}static getInterpolation(t,e,n,i,r,o,a,l){return this.getBarycoord(t,e,n,i,is)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,is.x),l.addScaledVector(o,is.y),l.addScaledVector(a,is.z),l)}static getInterpolatedAttribute(t,e,n,i,r,o){return hu.setScalar(0),uu.setScalar(0),fu.setScalar(0),hu.fromBufferAttribute(t,e),uu.fromBufferAttribute(t,n),fu.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(hu,r.x),o.addScaledVector(uu,r.y),o.addScaledVector(fu,r.z),o}static isFrontFacing(t,e,n,i){return Ai.subVectors(n,e),ns.subVectors(t,e),Ai.cross(ns).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ai.subVectors(this.c,this.b),ns.subVectors(this.a,this.b),Ai.cross(ns).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,r=this.c,o,a;Gr.subVectors(i,n),Hr.subVectors(r,n),au.subVectors(t,n);let l=Gr.dot(au),c=Hr.dot(au);if(l<=0&&c<=0)return e.copy(n);lu.subVectors(t,i);let h=Gr.dot(lu),d=Hr.dot(lu);if(h>=0&&d<=h)return e.copy(i);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0&&l-h>0)return o=l/(l-h),e.copy(n).addScaledVector(Gr,o);cu.subVectors(t,r);let f=Gr.dot(cu),m=Hr.dot(cu);if(m>=0&&f<=m)return e.copy(r);let _=f*c-l*m;if(_<=0&&c>=0&&m<=0)return a=c/(c-m),e.copy(n).addScaledVector(Hr,a);let p=h*m-f*d;if(p<=0&&d-h>=0&&f-m>=0)return Qd.subVectors(r,i),a=(d-h)/(d-h+(f-m)),e.copy(i).addScaledVector(Qd,a);let g=1/(p+_+u);return o=_*g,a=u*g,e.copy(n).addScaledVector(Gr,o).addScaledVector(Hr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Vi=class{constructor(t=new G(1/0,1/0,1/0),e=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ci.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ci.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Ci.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Ci):Ci.fromBufferAttribute(r,o),Ci.applyMatrix4(t.matrixWorld),this.expandByPoint(Ci);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),pl.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),pl.copy(n.boundingBox)),pl.applyMatrix4(t.matrixWorld),this.union(pl)}let i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ci),Ci.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ko),ml.subVectors(this.max,ko),Wr.subVectors(t.a,ko),Xr.subVectors(t.b,ko),qr.subVectors(t.c,ko),Is.subVectors(Xr,Wr),Ls.subVectors(qr,Xr),or.subVectors(Wr,qr);let e=[0,-Is.z,Is.y,0,-Ls.z,Ls.y,0,-or.z,or.y,Is.z,0,-Is.x,Ls.z,0,-Ls.x,or.z,0,-or.x,-Is.y,Is.x,0,-Ls.y,Ls.x,0,-or.y,or.x,0];return!du(e,Wr,Xr,qr,ml)||(e=[1,0,0,0,1,0,0,0,1],!du(e,Wr,Xr,qr,ml))?!1:(gl.crossVectors(Is,Ls),e=[gl.x,gl.y,gl.z],du(e,Wr,Xr,qr,ml))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ci).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ci).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ss[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ss[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ss[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ss[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ss[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ss[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ss[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ss[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ss),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},ss=[new G,new G,new G,new G,new G,new G,new G,new G],Ci=new G,pl=new Vi,Wr=new G,Xr=new G,qr=new G,Is=new G,Ls=new G,or=new G,ko=new G,ml=new G,gl=new G,ar=new G;function du(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){ar.fromArray(s,r);let a=i.x*Math.abs(ar.x)+i.y*Math.abs(ar.y)+i.z*Math.abs(ar.z),l=t.dot(ar),c=e.dot(ar),h=n.dot(ar);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Ke=new G,_l=new re,e0=0,Pi=class extends ki{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:e0++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=qp,this.updateRanges=[],this.gpuType=xi,this.version=0,this._normalizationScale=t!==void 0?ef(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)_l.fromBufferAttribute(this,e),_l.applyMatrix3(t),this.setXY(e,_l.x,_l.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ke.fromBufferAttribute(this,e),Ke.applyMatrix3(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ke.fromBufferAttribute(this,e),Ke.applyMatrix4(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ke.fromBufferAttribute(this,e),Ke.applyNormalMatrix(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ke.fromBufferAttribute(this,e),Ke.transformDirection(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),i=this._normalize(i)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):H_(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):W_(t,this.array)}};var Qo=class extends Pi{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var jo=class extends Pi{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var On=class extends Pi{constructor(t,e,n){super(new Float32Array(t),e,n)}},n0=new Vi,Vo=new G,pu=new G,Us=class{constructor(t=new G,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):n0.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Vo.subVectors(t,this.center);let e=Vo.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Vo,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(pu.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Vo.copy(t.center).add(pu)),this.expandByPoint(Vo.copy(t.center).sub(pu))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},i0=0,gi=new Se,mu=new rn,Yr=new G,ii=new Vi,Go=new Vi,un=new G,cs=class s extends ki{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:i0++}),this.uuid=Ea(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(k_(t)?jo:Qo)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Wt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return gi.makeRotationFromQuaternion(t),this.applyMatrix4(gi),this}rotateX(t){return gi.makeRotationX(t),this.applyMatrix4(gi),this}rotateY(t){return gi.makeRotationY(t),this.applyMatrix4(gi),this}rotateZ(t){return gi.makeRotationZ(t),this.applyMatrix4(gi),this}translate(t,e,n){return gi.makeTranslation(t,e,n),this.applyMatrix4(gi),this}scale(t,e,n){return gi.makeScale(t,e,n),this.applyMatrix4(gi),this}lookAt(t){return mu.lookAt(t),mu.updateMatrix(),this.applyMatrix4(mu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Yr).negate(),this.translate(Yr.x,Yr.y,Yr.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,r=t.length;i<r;i++){let o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new On(n,3))}else{let n=Math.min(t.length,e.count);for(let i=0;i<n;i++){let r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&Vt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ht("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];ii.setFromBufferAttribute(r),this.morphTargetsRelative?(un.addVectors(this.boundingBox.min,ii.min),this.boundingBox.expandByPoint(un),un.addVectors(this.boundingBox.max,ii.max),this.boundingBox.expandByPoint(un)):(this.boundingBox.expandByPoint(ii.min),this.boundingBox.expandByPoint(ii.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ht('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Us);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ht("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(t){let n=this.boundingSphere.center;if(ii.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Go.setFromBufferAttribute(a),this.morphTargetsRelative?(un.addVectors(ii.min,Go.min),ii.expandByPoint(un),un.addVectors(ii.max,Go.max),ii.expandByPoint(un)):(ii.expandByPoint(Go.min),ii.expandByPoint(Go.max))}ii.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)un.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(un));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)un.fromBufferAttribute(a,c),l&&(Yr.fromBufferAttribute(t,c),un.add(Yr)),i=Math.max(i,n.distanceToSquared(un))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Ht('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Ht("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Pi(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[],c=new Uint8Array(n.count);for(let P=0;P<n.count;P++)a[P]=new G,l[P]=new G;let h=new G,d=new G,u=new G,f=new re,m=new re,_=new re,p=new G,g=new G;function v(P,C,N){c[P]=c[C]=c[N]=1,h.fromBufferAttribute(n,P),d.fromBufferAttribute(n,C),u.fromBufferAttribute(n,N),f.fromBufferAttribute(r,P),m.fromBufferAttribute(r,C),_.fromBufferAttribute(r,N),d.sub(h),u.sub(h),m.sub(f),_.sub(f);let D=1/(m.x*_.y-_.x*m.y);isFinite(D)&&(p.copy(d).multiplyScalar(_.y).addScaledVector(u,-m.y).multiplyScalar(D),g.copy(u).multiplyScalar(m.x).addScaledVector(d,-_.x).multiplyScalar(D),a[P].add(p),a[C].add(p),a[N].add(p),l[P].add(g),l[C].add(g),l[N].add(g))}let T=this.groups;T.length===0&&(T=[{start:0,count:t.count}]);for(let P=0,C=T.length;P<C;++P){let N=T[P],D=N.start,W=N.count;for(let I=D,B=D+W;I<B;I+=3)v(t.getX(I+0),t.getX(I+1),t.getX(I+2))}let y=new G,w=new G,E=new G,x=new G;function b(P){E.fromBufferAttribute(i,P),x.copy(E);let C=a[P];y.copy(C),y.sub(E.multiplyScalar(E.dot(C))).normalize(),w.crossVectors(x,C);let D=w.dot(l[P])<0?-1:1;o.setXYZW(P,y.x,y.y,y.z,D)}for(let P=0,C=n.count;P<C;++P)c[P]&&b(P);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Pi(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let i=new G,r=new G,o=new G,a=new G,l=new G,c=new G,h=new G,d=new G;if(t)for(let u=0,f=t.count;u<f;u+=3){let m=t.getX(u+0),_=t.getX(u+1),p=t.getX(u+2);i.fromBufferAttribute(e,m),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,p),h.subVectors(o,r),d.subVectors(i,r),h.cross(d),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),a.add(h),l.add(h),c.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)i.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,r),d.subVectors(i,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)un.fromBufferAttribute(t,e),un.normalize(),t.setXYZ(e,un.x,un.y,un.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h),f=0,m=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*h;for(let g=0;g<h;g++)u[m++]=c[f++]}return new Pi(u,h,d)}if(this.index===null)return Vt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=t(u,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let i=t.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var gu=new G,s0=new G,r0=new Wt,Ri=class{constructor(t=new G(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=gu.subVectors(n,e).cross(s0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let i=t.delta(gu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(i,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||r0.getNormalMatrix(t),i=this.coplanarPoint(gu).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},o0=0,hs=class extends ki{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:o0++}),this.uuid=Ea(),this.name="",this.type="Material",this.blending=lo,this.side=Vs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Uu,this.blendDst=Ou,this.blendEquation=fr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Jt(0,0,0),this.blendAlpha=0,this.depthFunc=jr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=kp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Dl,this.stencilZFail=Dl,this.stencilZPass=Dl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Vt(`Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Vt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Jt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Ri().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new re().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new re().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var rs=new G,_u=new G,xl=new G,vl=new G,Zl=class{constructor(t=new G,e=new G(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,rs)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=rs.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(rs.copy(this.origin).addScaledVector(this.direction,e),rs.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){_u.copy(t).add(e).multiplyScalar(.5),xl.copy(e).sub(t).normalize(),vl.copy(this.origin).sub(_u);let r=t.distanceTo(e)*.5,o=-this.direction.dot(xl),a=vl.dot(this.direction),l=-vl.dot(xl),c=vl.lengthSq(),h=Math.abs(1-o*o),d,u,f,m;if(h>0)if(d=o*l-a,u=o*a-l,m=r*h,d>=0)if(u>=-m)if(u<=m){let _=1/h;d*=_,u*=_,f=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u<=-m?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=m?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(_u).addScaledVector(xl,u),f}intersectSphere(t,e){if(t.radius<0)return null;rs.subVectors(t.center,this.origin);let n=rs.dot(this.direction),i=rs.dot(rs)-n*n,r=t.radius*t.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,i=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,i=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),d>=0?(a=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,rs)!==null}intersectTriangle(t,e,n,i,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,d=t.x-o.x,u=t.y-o.y,f=t.z-o.z,m=e.x-o.x,_=e.y-o.y,p=e.z-o.z,g=n.x-o.x,v=n.y-o.y,T=n.z-o.z,y=Math.abs(l),w=Math.abs(c),E=Math.abs(h),x,b,P,C,N,D,W,I,B,H,F,tt;if(y>=w&&y>=E?(P=l,D=d,B=m,tt=g,l>=0?(x=c,b=h,C=u,N=f,W=_,I=p,H=v,F=T):(x=h,b=c,C=f,N=u,W=p,I=_,H=T,F=v)):w>=E?(P=c,D=u,B=_,tt=v,c>=0?(x=h,b=l,C=f,N=d,W=p,I=m,H=T,F=g):(x=l,b=h,C=d,N=f,W=m,I=p,H=g,F=T)):(P=h,D=f,B=p,tt=T,h>=0?(x=l,b=c,C=d,N=u,W=m,I=_,H=g,F=v):(x=c,b=l,C=u,N=d,W=_,I=m,H=v,F=g)),P===0)return null;let X=x/P,R=b/P,K=1/P,yt=C-X*D,kt=N-R*D,Y=W-X*B,ft=I-R*B,xt=H-X*tt,Mt=F-R*tt,dt=xt*ft-Mt*Y,Rt=yt*Mt-kt*xt,pe=Y*kt-ft*yt;if(i){if(dt<0||Rt<0||pe<0)return null}else if((dt<0||Rt<0||pe<0)&&(dt>0||Rt>0||pe>0))return null;let Ct=dt+Rt+pe;if(Ct===0)return null;let Gt=K*(dt*D+Rt*B+pe*tt);return(Ct>0?Gt<0:Gt>0)?null:this.at(Gt/Ct,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Jl=class extends hs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new oi,this.combine=dc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},jd=new Se,lr=new Zl,yl=new Us,tp=new G,Sl=new G,Ml=new G,bl=new G,xu=new G,Tl=new G,ep=new G,wl=new G,Qe=class extends rn{constructor(t=new cs,e=new Jl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(r&&a){Tl.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],d=r[l];h!==0&&(xu.fromBufferAttribute(d,t),o?Tl.addScaledVector(xu,h):Tl.addScaledVector(xu.sub(e),h))}e.add(Tl)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),yl.copy(n.boundingSphere),yl.applyMatrix4(r),lr.copy(t.ray).recast(t.near),!(yl.containsPoint(lr.origin)===!1&&(lr.intersectSphere(yl,tp)===null||lr.origin.distanceToSquared(tp)>(t.far-t.near)**2))&&(jd.copy(r).invert(),lr.copy(t.ray).applyMatrix4(jd),!(n.boundingBox!==null&&lr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,lr)))}_computeIntersections(t,e,n){let i,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,_=u.length;m<_;m++){let p=u[m],g=o[p.materialIndex],v=Math.max(p.start,f.start),T=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let y=v,w=T;y<w;y+=3){let E=a.getX(y),x=a.getX(y+1),b=a.getX(y+2);i=El(this,g,t,n,c,h,d,E,x,b),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{let m=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let p=m,g=_;p<g;p+=3){let v=a.getX(p),T=a.getX(p+1),y=a.getX(p+2);i=El(this,o,t,n,c,h,d,v,T,y),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,_=u.length;m<_;m++){let p=u[m],g=o[p.materialIndex],v=Math.max(p.start,f.start),T=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let y=v,w=T;y<w;y+=3){let E=y,x=y+1,b=y+2;i=El(this,g,t,n,c,h,d,E,x,b),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{let m=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let p=m,g=_;p<g;p+=3){let v=p,T=p+1,y=p+2;i=El(this,o,t,n,c,h,d,v,T,y),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}}};function a0(s,t,e,n,i,r,o,a){let l;if(t.side===gn?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,t.side===Vs,a),l===null)return null;wl.copy(a),wl.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(wl);return c<e.near||c>e.far?null:{distance:c,point:wl.clone(),object:s}}function El(s,t,e,n,i,r,o,a,l,c){s.getVertexPosition(a,Sl),s.getVertexPosition(l,Ml),s.getVertexPosition(c,bl);let h=a0(s,t,e,n,Sl,Ml,bl,ep);if(h){let d=new G;Ns.getBarycoord(ep,Sl,Ml,bl,d),i&&(h.uv=Ns.getInterpolatedAttribute(i,a,l,c,d,new re)),r&&(h.uv1=Ns.getInterpolatedAttribute(r,a,l,c,d,new re)),o&&(h.normal=Ns.getInterpolatedAttribute(o,a,l,c,d,new G),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new G,materialIndex:0};Ns.getNormal(Sl,Ml,bl,u.normal),h.face=u,h.barycoord=d}return h}var ta=class extends qn{constructor(t=null,e=1,n=1,i,r,o,a,l,c=fn,h=fn,d,u){super(null,o,a,l,c,h,i,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ea=class extends Pi{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Zr=new Se,np=new Se,Al=[],ip=new Vi,l0=new Se,Ho=new Qe,Wo=new Us,Os=class extends Qe{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new ea(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,l0)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Vi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Zr),ip.copy(t.boundingBox).applyMatrix4(Zr),this.boundingBox.union(ip)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Us),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Zr),Wo.copy(t.boundingSphere).applyMatrix4(Zr),this.boundingSphere.union(Wo)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){let n=this.matrixWorld,i=this.count;if(Ho.geometry=this.geometry,Ho.material=this.material,Ho.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Wo.copy(this.boundingSphere),Wo.applyMatrix4(n),t.ray.intersectsSphere(Wo)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Zr),np.multiplyMatrices(n,Zr),Ho.matrixWorld=np,Ho.raycast(t,Al);for(let o=0,a=Al.length;o<a;o++){let l=Al[o];l.instanceId=r,l.object=this,e.push(l)}Al.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new ea(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new ta(new Float32Array(i*this.count),i,this.count,yc,xi));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=i*t;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},cr=new Us,c0=new re(.5,.5),Cl=new G,Fs=class{constructor(t=new Ri,e=new Ri,n=new Ri,i=new Ri,r=new Ri,o=new Ri){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=_i,n=!1){let i=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],m=r[8],_=r[9],p=r[10],g=r[11],v=r[12],T=r[13],y=r[14],w=r[15];if(i[0].setComponents(c-o,f-h,g-m,w-v).normalize(),i[1].setComponents(c+o,f+h,g+m,w+v).normalize(),i[2].setComponents(c+a,f+d,g+_,w+T).normalize(),i[3].setComponents(c-a,f-d,g-_,w-T).normalize(),n)i[4].setComponents(l,u,p,y).normalize(),i[5].setComponents(c-l,f-u,g-p,w-y).normalize();else if(i[4].setComponents(c-l,f-u,g-p,w-y).normalize(),e===_i)i[5].setComponents(c+l,f+u,g+p,w+y).normalize();else if(e===to)i[5].setComponents(l,u,p,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),cr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),cr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(cr)}intersectsSprite(t){cr.center.set(0,0,0);let e=c0.distanceTo(t.center);return cr.radius=.7071067811865476+e,cr.applyMatrix4(t.matrixWorld),this.intersectsSphere(cr)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(Cl.x=i.normal.x>0?t.max.x:t.min.x,Cl.y=i.normal.y>0?t.max.y:t.min.y,Cl.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Cl)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},sp=new Se,$l=class s{constructor(){this.coordinateSystem=_i,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,n=this._frustums;for(let i=0;i<e.length;i++){let r=e[i];sp.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[i]===void 0&&(n[i]=new Fs),n[i].setFromProjectionMatrix(sp,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,n=t._frustums;for(let i=0;i<t._count;i++)e[i]===void 0&&(e[i]=new Fs),e[i].copy(n[i]);return this._count=t._count,this}clone(){return new s().copy(this)}};var na=class extends qn{constructor(t=[],e=dr,n,i,r,o,a,l,c,h){super(t,e,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}};var us=class extends qn{constructor(t,e,n=Li,i,r,o,a=fn,l=fn,c,h=ls,d=1){if(h!==ls&&h!==ds)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:d};super(u,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new no(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},ia=class extends us{constructor(t,e=Li,n=dr,i,r,o=fn,a=fn,l,c=ls){let h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,n,i,r,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},sa=class extends qn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Gi=class s extends cs{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],d=[],u=0,f=0;m("z","y","x",-1,-1,n,e,t,o,r,0),m("z","y","x",1,-1,n,e,-t,o,r,1),m("x","z","y",1,1,t,n,e,i,o,2),m("x","z","y",1,-1,t,n,-e,i,o,3),m("x","y","z",1,-1,t,e,n,i,r,4),m("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new On(c,3)),this.setAttribute("normal",new On(h,3)),this.setAttribute("uv",new On(d,2));function m(_,p,g,v,T,y,w,E,x,b,P){let C=y/x,N=w/b,D=y/2,W=w/2,I=E/2,B=x+1,H=b+1,F=0,tt=0,X=new G;for(let R=0;R<H;R++){let K=R*N-W;for(let yt=0;yt<B;yt++){let kt=yt*C-D;X[_]=kt*v,X[p]=K*T,X[g]=I,c.push(X.x,X.y,X.z),X[_]=0,X[p]=0,X[g]=E>0?1:-1,h.push(X.x,X.y,X.z),d.push(yt/x),d.push(1-R/b),F+=1}}for(let R=0;R<b;R++)for(let K=0;K<x;K++){let yt=u+K+B*R,kt=u+K+B*(R+1),Y=u+(K+1)+B*(R+1),ft=u+(K+1)+B*R;l.push(yt,kt,ft),l.push(kt,Y,ft),tt+=6}a.addGroup(f,tt,P),f+=tt,u+=F}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Kl=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Vt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,i=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),i=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);let h=n[i],u=n[i+1]-h,f=(o-h)/u;return(i+f)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);let o=this.getPoint(i),a=this.getPoint(r),l=e||(o.isVector2?new re:new G);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new G,i=[],r=[],o=[],a=new G,l=new Se;for(let f=0;f<=t;f++){let m=f/t;i[f]=this.getTangentAt(m,new G)}r[0]=new G,o[0]=new G;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),d=Math.abs(i[0].y),u=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(se(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,m))}o[f].crossVectors(i[f],r[f])}if(e===!0){let f=Math.acos(se(r[0].dot(r[t]),-1,1));f/=t,i[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let m=1;m<=t;m++)r[m].applyMatrix4(l.makeRotationAxis(i[m],f*m)),o[m].crossVectors(i[m],r[m])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}};function nf(){let s=0,t=0,e=0,n=0;function i(r,o,a,l){s=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,d){let u=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+d)+(l-a)/d;u*=h,f*=h,i(o,a,u,f)},calc:function(r){let o=r*r,a=o*r;return s+t*r+e*o+n*a}}}var rp=new G,op=new G,vu=new nf,yu=new nf,Su=new nf,ra=class extends Kl{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new G){let n=e,i=this.points,r=i.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%r]:(op.subVectors(i[0],i[1]).add(i[0]),c=op);let d=i[a%r],u=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(rp.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=rp),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(d),f),_=Math.pow(d.distanceToSquared(u),f),p=Math.pow(u.distanceToSquared(h),f);_<1e-4&&(_=1),m<1e-4&&(m=_),p<1e-4&&(p=_),vu.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,m,_,p),yu.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,m,_,p),Su.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,m,_,p)}else this.curveType==="catmullrom"&&(vu.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),yu.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),Su.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return n.set(vu.calc(l),yu.calc(l),Su.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new G().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};var oa=class s extends cs{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,d=t/a,u=e/l,f=[],m=[],_=[],p=[];for(let g=0;g<h;g++){let v=g*u-o;for(let T=0;T<c;T++){let y=T*d-r;m.push(y,-v,0),_.push(0,0,1),p.push(T/a),p.push(1-g/l)}}for(let g=0;g<l;g++)for(let v=0;v<a;v++){let T=v+c*g,y=v+c*(g+1),w=v+1+c*(g+1),E=v+1+c*g;f.push(T,y,E),f.push(y,w,E)}this.setIndex(f),this.setAttribute("position",new On(m,3)),this.setAttribute("normal",new On(_,3)),this.setAttribute("uv",new On(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}};var aa=class s extends cs{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),i=Math.floor(i);let l=[],c=[],h=[],d=[],u=new G,f=new G,m=new G;for(let _=0;_<=n;_++){let p=o+_/n*a;for(let g=0;g<=i;g++){let v=g/i*r;f.x=(t+e*Math.cos(p))*Math.cos(v),f.y=(t+e*Math.cos(p))*Math.sin(v),f.z=e*Math.sin(p),c.push(f.x,f.y,f.z),u.x=t*Math.cos(v),u.y=t*Math.sin(v),m.subVectors(f,u).normalize(),h.push(m.x,m.y,m.z),d.push(g/i),d.push(_/n)}}for(let _=1;_<=n;_++)for(let p=1;p<=i;p++){let g=(i+1)*_+p-1,v=(i+1)*(_-1)+p-1,T=(i+1)*(_-1)+p,y=(i+1)*_+p;l.push(g,v,y),l.push(v,T,y)}this.setIndex(l),this.setAttribute("position",new On(c,3)),this.setAttribute("normal",new On(h,3)),this.setAttribute("uv",new On(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function mr(s){let t={};for(let e in s){t[e]={};for(let n in s[e]){let i=s[e][n];if(ap(i))i.isRenderTargetTexture?(Vt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone();else if(Array.isArray(i))if(ap(i[0])){let r=[];for(let o=0,a=i.length;o<a;o++)r[o]=i[o].clone();t[e][n]=r}else t[e][n]=i.slice();else t[e][n]=i}}return t}function An(s){let t={};for(let e=0;e<s.length;e++){let n=mr(s[e]);for(let i in n)t[i]=n[i]}return t}function ap(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function h0(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function sf(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:le.workingColorSpace}var jp={clone:mr,merge:An},u0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,f0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Hi=class extends hs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=u0,this.fragmentShader=f0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=mr(t.uniforms),this.uniformsGroups=h0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let i=t.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=e[i.value]||null;break;case"c":this.uniforms[n].value=new Jt().setHex(i.value);break;case"v2":this.uniforms[n].value=new re().fromArray(i.value);break;case"v3":this.uniforms[n].value=new G().fromArray(i.value);break;case"v4":this.uniforms[n].value=new Ue().fromArray(i.value);break;case"m3":this.uniforms[n].value=new Wt().fromArray(i.value);break;case"m4":this.uniforms[n].value=new Se().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Ql=class extends Hi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Ii=class extends hs{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Jt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Jt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wa,this.normalScale=new re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new oi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var la=class extends hs{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Jt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wa,this.normalScale=new re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new oi,this.combine=dc,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},jl=class extends hs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Bp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},tc=class extends hs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Jr(s,t){return!s||s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function Rl(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}var Bs=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=e[++n],t<i)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let o=0;o!==i;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},ec=class extends Bs{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Tu,endingEnd:Tu}}intervalChanged_(t,e,n){let i=this.parameterPositions,r=t-2,o=t+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case wu:r=t,a=2*e-n;break;case Eu:r=i.length-2,a=e+i[r]-i[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case wu:o=t,l=2*n-e;break;case Eu:o=1,l=n+i[1]-i[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,m=(n-e)/(i-e),_=m*m,p=_*m,g=-u*p+2*u*_-u*m,v=(1+u)*p+(-1.5-2*u)*_+(-.5+u)*m+1,T=(-1-f)*p+(1.5+f)*_+.5*m,y=f*p-f*_;for(let w=0;w!==a;++w)r[w]=g*o[h+w]+v*o[c+w]+T*o[l+w]+y*o[d+w];return r}},nc=class extends Bs{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(i-e),d=1-h;for(let u=0;u!==a;++u)r[u]=o[c+u]*d+o[l+u]*h;return r}},ic=class extends Bs{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},sc=class extends Bs{interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this.inTangents,d=this.outTangents;if(!h||!d){let m=(n-e)/(i-e),_=1-m;for(let p=0;p!==a;++p)r[p]=o[c+p]*_+o[l+p]*m;return r}let u=a*2,f=t-1;for(let m=0;m!==a;++m){let _=o[c+m],p=o[l+m],g=f*u+m*2,v=d[g],T=d[g+1],y=t*u+m*2,w=h[y],E=h[y+1],x=p0(n,e,v,w,i);r[m]=tm(x,_,T,E,p)}return r}};function tm(s,t,e,n,i){let r=1-s;return r*r*r*t+3*r*r*s*e+3*r*s*s*n+s*s*s*i}function d0(s,t,e,n,i){let r=1-s;return 3*r*r*(e-t)+6*r*s*(n-e)+3*s*s*(i-n)}function p0(s,t,e,n,i){let r=(s-t)/(i-t);for(let o=0;o<8;o++){let a=tm(r,t,e,n,i)-s;if(Math.abs(a)<1e-10)break;let l=d0(r,t,e,n,i);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var ai=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Jr(e,this.TimeBufferType),this.values=Jr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Jr(t.times,Array),values:Jr(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i),Rl(t.settings)&&(n.settings={inTangents:Jr(t.settings.inTangents,Array),outTangents:Jr(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new ic(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new nc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new ec(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new sc(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case qo:e=this.InterpolantFactoryMethodDiscrete;break;case Hl:e=this.InterpolantFactoryMethodLinear;break;case Ll:e=this.InterpolantFactoryMethodSmooth;break;case bu:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Vt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return qo;case this.InterpolantFactoryMethodLinear:return Hl;case this.InterpolantFactoryMethodSmooth:return Ll;case this.InterpolantFactoryMethodBezier:return bu}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t;Rl(this.settings)&&(lp(this.settings.inTangents,t),lp(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t;Rl(this.settings)&&(cp(this.settings.inTangents,t),cp(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Ht("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(Ht("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){Ht("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){Ht("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(i!==void 0&&V_(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){Ht("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Ll,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(i)l=!0;else{let d=a*n,u=d-n,f=d+n;for(let m=0;m!==n;++m){let _=e[d+m];if(_!==e[u+m]||_!==e[f+m]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let d=a*n,u=o*n;for(let f=0;f!==n;++f)e[u+f]=e[d+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,Rl(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};function lp(s,t){for(let e=0,n=s.length;e!==n;e+=2)s[e]+=t}function cp(s,t){for(let e=0,n=s.length;e!==n;e+=2)s[e]*=t}ai.prototype.ValueTypeName="";ai.prototype.TimeBufferType=Float32Array;ai.prototype.ValueBufferType=Float32Array;ai.prototype.DefaultInterpolation=Hl;var zs=class extends ai{constructor(t,e,n){super(t,e,n)}};zs.prototype.ValueTypeName="bool";zs.prototype.ValueBufferType=Array;zs.prototype.DefaultInterpolation=qo;zs.prototype.InterpolantFactoryMethodLinear=void 0;zs.prototype.InterpolantFactoryMethodSmooth=void 0;var rc=class extends ai{constructor(t,e,n,i){super(t,e,n,i)}};rc.prototype.ValueTypeName="color";var oc=class extends ai{constructor(t,e,n,i){super(t,e,n,i)}};oc.prototype.ValueTypeName="number";var ac=class extends Bs{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(i-e),c=t*a;for(let h=c+a;c!==h;c+=4)En.slerpFlat(r,0,o,c-a,o,c,l);return r}},ca=class extends ai{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new ac(this.times,this.values,this.getValueSize(),t)}};ca.prototype.ValueTypeName="quaternion";ca.prototype.InterpolantFactoryMethodSmooth=void 0;var ks=class extends ai{constructor(t,e,n){super(t,e,n)}};ks.prototype.ValueTypeName="string";ks.prototype.ValueBufferType=Array;ks.prototype.DefaultInterpolation=qo;ks.prototype.InterpolantFactoryMethodLinear=void 0;ks.prototype.InterpolantFactoryMethodSmooth=void 0;var lc=class extends ai{constructor(t,e,n,i){super(t,e,n,i)}};lc.prototype.ValueTypeName="vector";var cc=class{constructor(t,e,n){let i=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],m=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},em=new cc,hc=class{constructor(t){this.manager=t!==void 0?t:em,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};hc.DEFAULT_MATERIAL_NAME="__DEFAULT";var so=class extends rn{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Jt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}};var Mu=new Se,hp=new G,up=new G,ha=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new re(512,512),this.mapType=Yn,this.map=null,this.mapPass=null,this.matrix=new Se,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Fs,this._frameExtents=new re(1,1),this._viewportCount=1,this._viewports=[new Ue(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;hp.setFromMatrixPosition(t.matrixWorld),e.position.copy(hp),up.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(up),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,i){Mu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Mu,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=i?i.z/r.x:1,a=i?i.w/r.y:1,l=i?i.x/r.x:0,c=i?i.y/r.y:0;t.coordinateSystem===to||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(Mu)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Pl=new G,Il=new En,Bi=new G,ua=class extends rn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Se,this.projectionMatrix=new Se,this.projectionMatrixInverse=new Se,this.coordinateSystem=_i,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Pl,Il,Bi),Bi.x===1&&Bi.y===1&&Bi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Pl,Il,Bi.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Pl,Il,Bi),Bi.x===1&&Bi.y===1&&Bi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Pl,Il,Bi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ds=new G,fp=new re,dp=new re,wn=class extends ua{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Wl*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Qh*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Wl*2*Math.atan(Math.tan(Qh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ds.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ds.x,Ds.y).multiplyScalar(-t/Ds.z),Ds.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ds.x,Ds.y).multiplyScalar(-t/Ds.z)}getViewSize(t,e){return this.getViewBounds(t,fp,dp),e.subVectors(dp,fp)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Qh*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Au=class extends ha{constructor(){super(new wn(90,1,.5,500)),this.isPointLightShadow=!0}},fa=class extends so{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Au}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},da=class extends ua{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Cu=class extends ha{constructor(){super(new da(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ro=class extends so{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(rn.DEFAULT_UP),this.updateMatrix(),this.target=new rn,this.shadow=new Cu}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}},pa=class extends so{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var $r=-90,Kr=1,oo=class extends rn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new wn($r,Kr,t,e);i.layers=this.layers,this.add(i);let r=new wn($r,Kr,t,e);r.layers=this.layers,this.add(r);let o=new wn($r,Kr,t,e);o.layers=this.layers,this.add(o);let a=new wn($r,Kr,t,e);a.layers=this.layers,this.add(a);let l=new wn($r,Kr,t,e);l.layers=this.layers,this.add(l);let c=new wn($r,Kr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===_i)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===to)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(n,0,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.mipmapsAutoUpdate=_,t.setRenderTarget(n,5,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},uc=class extends wn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};var rf="\\[\\]\\.:\\/",m0=new RegExp("["+rf+"]","g"),of="[^"+rf+"]",g0="[^"+rf.replace("\\.","")+"]",_0=/((?:WC+[\/:])*)/.source.replace("WC",of),x0=/(WCOD+)?/.source.replace("WCOD",g0),v0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",of),y0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",of),S0=new RegExp("^"+_0+x0+v0+y0+"$"),M0=["material","materials","bones","map"],Ru=class{constructor(t,e,n){let i=n||Le.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Le=class s{constructor(t,e,n){this.path=e,this.parsedPath=n||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,n):new s(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(m0,"")}static parseTrackName(t){let e=S0.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);M0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Vt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Ht("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Ht("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Ht("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Ht("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Ht("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Ht("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Ht("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[i];if(o===void 0){let c=e.nodeName;Ht("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){Ht("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Ht("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Le.Composite=Ru;Le.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Le.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Le.prototype.GetterByBindingType=[Le.prototype._getValue_direct,Le.prototype._getValue_array,Le.prototype._getValue_arrayElement,Le.prototype._getValue_toArray];Le.prototype.SetterByBindingTypeAndVersioning=[[Le.prototype._setValue_direct,Le.prototype._setValue_direct_setNeedsUpdate,Le.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Le.prototype._setValue_array,Le.prototype._setValue_array_setNeedsUpdate,Le.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Le.prototype._setValue_arrayElement,Le.prototype._setValue_arrayElement_setNeedsUpdate,Le.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Le.prototype._setValue_fromArray,Le.prototype._setValue_fromArray_setNeedsUpdate,Le.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var RT=new Float32Array(1);var ma=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Vt("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};var ff=class ff{constructor(t,e,n,i){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,i){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=i,this}};ff.prototype.isMatrix2=!0;var Pu=ff;function af(s,t,e,n){let i=b0(n);switch(e){case Zu:return s*t;case yc:return s*t/i.components*i.byteLength;case Sc:return s*t/i.components*i.byteLength;case Gs:return s*t*2/i.components*i.byteLength;case Mc:return s*t*2/i.components*i.byteLength;case Ju:return s*t*3/i.components*i.byteLength;case Ni:return s*t*4/i.components*i.byteLength;case bc:return s*t*4/i.components*i.byteLength;case va:case ya:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Sa:case Ma:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case wc:case Ac:return Math.max(s,16)*Math.max(t,8)/4;case Tc:case Ec:return Math.max(s,8)*Math.max(t,8)/2;case Cc:case Rc:case Ic:case Lc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Pc:case ba:case Dc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Nc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Uc:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Oc:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Fc:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Bc:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case zc:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case kc:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Vc:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Gc:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Hc:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Wc:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Xc:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case qc:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Yc:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Zc:case Jc:case $c:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Kc:case Qc:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Ta:case jc:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function b0(s){switch(s){case Yn:case Wu:return{byteLength:1,components:1};case ho:case Xu:case Di:return{byteLength:2,components:1};case xc:case vc:return{byteLength:2,components:4};case Li:case _c:case xi:return{byteLength:4,components:1};case qu:case Yu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window!="undefined"&&(window.__THREE__?Vt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function bm(){let s=null,t=!1,e=null,n=null;function i(r,o){n=s.requestAnimationFrame(i),e(r,o)}return{start:function(){t!==!0&&e!==null&&s!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function w0(s){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,d=c.byteLength,u=s.createBuffer();s.bindBuffer(l,u),s.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array!="undefined"&&c instanceof Float16Array)f=s.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){let h=l.array,d=l.updateRanges;if(s.bindBuffer(c,a),d.length===0)s.bufferSubData(c,0,h);else{d.sort((f,m)=>f.start-m.start);let u=0;for(let f=1;f<d.length;f++){let m=d[u],_=d[f];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++u,d[u]=_)}d.length=u+1;for(let f=0,m=d.length;f<m;f++){let _=d[f];s.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(s.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}var E0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,A0=`#ifdef USE_ALPHAHASH
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
#endif`,C0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,R0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,P0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,I0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,L0=`#ifdef USE_AOMAP
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
#endif`,D0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,N0=`#ifdef USE_BATCHING
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
#endif`,U0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,O0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,F0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,B0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,z0=`#ifdef USE_IRIDESCENCE
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
#endif`,k0=`#ifdef USE_BUMPMAP
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
#endif`,V0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,G0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,H0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,W0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,X0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,q0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Y0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Z0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,J0=`#define PI 3.141592653589793
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
} // validated`,$0=`vec3 transformedNormal = objectNormal;
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
#endif`,K0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Q0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,j0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,tx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ex="gl_FragColor = linearToOutputTexel( gl_FragColor );",nx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ix=`#ifdef USE_ENVMAP
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
#endif`,sx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,rx=`#ifdef USE_ENVMAP
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
#endif`,ox=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ax=`#ifdef USE_ENVMAP
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
#endif`,lx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,cx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,hx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ux=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,fx=`#ifdef USE_GRADIENTMAP
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
}`,dx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,px=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,mx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,gx=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,_x=`#ifdef USE_ENVMAP
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
#endif`,xx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,vx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,yx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Sx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Mx=`PhysicalMaterial material;
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
#endif`,bx=`uniform sampler2D dfgLUT;
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
}`,Tx=`
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
#endif`,wx=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ex=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ax=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,Cx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Rx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Px=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ix=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Lx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Dx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Nx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ux=`#if defined( USE_POINTS_UV )
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
#endif`,Ox=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Fx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Bx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,zx=`#if defined( USE_MORPHCOLORS )
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
#endif`,kx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vx=`#ifdef USE_MORPHTARGETS
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
#endif`,Gx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Wx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Xx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Zx=`#ifdef USE_NORMALMAP
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
#endif`,Jx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,$x=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Kx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Qx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,jx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,tv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ev=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,nv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,iv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,sv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,rv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ov=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,av=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,lv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,cv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,hv=`float getShadowMask() {
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
}`,uv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,fv=`#ifdef USE_SKINNING
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
#endif`,dv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,pv=`#ifdef USE_SKINNING
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
#endif`,mv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,gv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,_v=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,xv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,vv=`#ifdef USE_TRANSMISSION
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
#endif`,yv=`#ifdef USE_TRANSMISSION
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
#endif`,Sv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Mv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Tv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,wv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ev=`uniform sampler2D t2D;
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
}`,Av=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cv=`uniform float backgroundBlurriness;
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
}`,Rv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Pv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Iv=`#include <common>
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
}`,Lv=`#if DEPTH_PACKING == 3200
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
}`,Dv=`#define DISTANCE
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
}`,Nv=`#define DISTANCE
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
}`,Uv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ov=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fv=`uniform float scale;
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
}`,Bv=`uniform vec3 diffuse;
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
}`,zv=`#include <common>
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
}`,kv=`uniform vec3 diffuse;
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
}`,Vv=`#define LAMBERT
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
}`,Gv=`#define LAMBERT
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
}`,Hv=`#define MATCAP
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
}`,Wv=`#define MATCAP
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
}`,Xv=`#define NORMAL
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
}`,qv=`#define NORMAL
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
}`,Yv=`#define PHONG
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
}`,Zv=`#define PHONG
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
}`,Jv=`#define STANDARD
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
}`,$v=`#define STANDARD
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
}`,Kv=`#define TOON
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
}`,Qv=`#define TOON
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
}`,jv=`uniform float size;
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
}`,ty=`uniform vec3 diffuse;
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
}`,ey=`#include <common>
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
}`,ny=`uniform vec3 color;
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
}`,iy=`uniform float rotation;
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
}`,sy=`uniform vec3 diffuse;
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
}`,Kt={alphahash_fragment:E0,alphahash_pars_fragment:A0,alphamap_fragment:C0,alphamap_pars_fragment:R0,alphatest_fragment:P0,alphatest_pars_fragment:I0,aomap_fragment:L0,aomap_pars_fragment:D0,batching_pars_vertex:N0,batching_vertex:U0,begin_vertex:O0,beginnormal_vertex:F0,bsdfs:B0,iridescence_fragment:z0,bumpmap_pars_fragment:k0,clipping_planes_fragment:V0,clipping_planes_pars_fragment:G0,clipping_planes_pars_vertex:H0,clipping_planes_vertex:W0,color_fragment:X0,color_pars_fragment:q0,color_pars_vertex:Y0,color_vertex:Z0,common:J0,defaultnormal_vertex:$0,displacementmap_pars_vertex:K0,displacementmap_vertex:Q0,emissivemap_fragment:j0,emissivemap_pars_fragment:tx,colorspace_fragment:ex,colorspace_pars_fragment:nx,envmap_fragment:ix,envmap_common_pars_fragment:sx,envmap_pars_fragment:rx,envmap_pars_vertex:ox,envmap_physical_pars_fragment:_x,envmap_vertex:ax,fog_vertex:lx,fog_pars_vertex:cx,fog_fragment:hx,fog_pars_fragment:ux,gradientmap_pars_fragment:fx,lightmap_pars_fragment:dx,lights_lambert_fragment:px,lights_lambert_pars_fragment:mx,lights_pars_begin:gx,lights_toon_fragment:xx,lights_toon_pars_fragment:vx,lights_phong_fragment:yx,lights_phong_pars_fragment:Sx,lights_physical_fragment:Mx,lights_physical_pars_fragment:bx,lights_fragment_begin:Tx,lights_fragment_maps:wx,lights_fragment_end:Ex,lightprobes_pars_fragment:Ax,logdepthbuf_fragment:Cx,logdepthbuf_pars_fragment:Rx,logdepthbuf_pars_vertex:Px,logdepthbuf_vertex:Ix,map_fragment:Lx,map_pars_fragment:Dx,map_particle_fragment:Nx,map_particle_pars_fragment:Ux,metalnessmap_fragment:Ox,metalnessmap_pars_fragment:Fx,morphinstance_vertex:Bx,morphcolor_vertex:zx,morphnormal_vertex:kx,morphtarget_pars_vertex:Vx,morphtarget_vertex:Gx,normal_fragment_begin:Hx,normal_fragment_maps:Wx,normal_pars_fragment:Xx,normal_pars_vertex:qx,normal_vertex:Yx,normalmap_pars_fragment:Zx,clearcoat_normal_fragment_begin:Jx,clearcoat_normal_fragment_maps:$x,clearcoat_pars_fragment:Kx,iridescence_pars_fragment:Qx,opaque_fragment:jx,packing:tv,premultiplied_alpha_fragment:ev,project_vertex:nv,dithering_fragment:iv,dithering_pars_fragment:sv,roughnessmap_fragment:rv,roughnessmap_pars_fragment:ov,shadowmap_pars_fragment:av,shadowmap_pars_vertex:lv,shadowmap_vertex:cv,shadowmask_pars_fragment:hv,skinbase_vertex:uv,skinning_pars_vertex:fv,skinning_vertex:dv,skinnormal_vertex:pv,specularmap_fragment:mv,specularmap_pars_fragment:gv,tonemapping_fragment:_v,tonemapping_pars_fragment:xv,transmission_fragment:vv,transmission_pars_fragment:yv,uv_pars_fragment:Sv,uv_pars_vertex:Mv,uv_vertex:bv,worldpos_vertex:Tv,background_vert:wv,background_frag:Ev,backgroundCube_vert:Av,backgroundCube_frag:Cv,cube_vert:Rv,cube_frag:Pv,depth_vert:Iv,depth_frag:Lv,distance_vert:Dv,distance_frag:Nv,equirect_vert:Uv,equirect_frag:Ov,linedashed_vert:Fv,linedashed_frag:Bv,meshbasic_vert:zv,meshbasic_frag:kv,meshlambert_vert:Vv,meshlambert_frag:Gv,meshmatcap_vert:Hv,meshmatcap_frag:Wv,meshnormal_vert:Xv,meshnormal_frag:qv,meshphong_vert:Yv,meshphong_frag:Zv,meshphysical_vert:Jv,meshphysical_frag:$v,meshtoon_vert:Kv,meshtoon_frag:Qv,points_vert:jv,points_frag:ty,shadow_vert:ey,shadow_frag:ny,sprite_vert:iy,sprite_frag:sy},Tt={common:{diffuse:{value:new Jt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Wt}},envmap:{envMap:{value:null},envMapRotation:{value:new Wt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Wt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Wt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Wt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Wt},normalScale:{value:new re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Wt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Wt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Wt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Wt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Jt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Jt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0},uvTransform:{value:new Wt}},sprite:{diffuse:{value:new Jt(16777215)},opacity:{value:1},center:{value:new re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}}},Yi={basic:{uniforms:An([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.fog]),vertexShader:Kt.meshbasic_vert,fragmentShader:Kt.meshbasic_frag},lambert:{uniforms:An([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,Tt.lights,{emissive:{value:new Jt(0)},envMapIntensity:{value:1}}]),vertexShader:Kt.meshlambert_vert,fragmentShader:Kt.meshlambert_frag},phong:{uniforms:An([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,Tt.lights,{emissive:{value:new Jt(0)},specular:{value:new Jt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Kt.meshphong_vert,fragmentShader:Kt.meshphong_frag},standard:{uniforms:An([Tt.common,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.roughnessmap,Tt.metalnessmap,Tt.fog,Tt.lights,{emissive:{value:new Jt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag},toon:{uniforms:An([Tt.common,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.gradientmap,Tt.fog,Tt.lights,{emissive:{value:new Jt(0)}}]),vertexShader:Kt.meshtoon_vert,fragmentShader:Kt.meshtoon_frag},matcap:{uniforms:An([Tt.common,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,{matcap:{value:null}}]),vertexShader:Kt.meshmatcap_vert,fragmentShader:Kt.meshmatcap_frag},points:{uniforms:An([Tt.points,Tt.fog]),vertexShader:Kt.points_vert,fragmentShader:Kt.points_frag},dashed:{uniforms:An([Tt.common,Tt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Kt.linedashed_vert,fragmentShader:Kt.linedashed_frag},depth:{uniforms:An([Tt.common,Tt.displacementmap]),vertexShader:Kt.depth_vert,fragmentShader:Kt.depth_frag},normal:{uniforms:An([Tt.common,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,{opacity:{value:1}}]),vertexShader:Kt.meshnormal_vert,fragmentShader:Kt.meshnormal_frag},sprite:{uniforms:An([Tt.sprite,Tt.fog]),vertexShader:Kt.sprite_vert,fragmentShader:Kt.sprite_frag},background:{uniforms:{uvTransform:{value:new Wt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Kt.background_vert,fragmentShader:Kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Wt}},vertexShader:Kt.backgroundCube_vert,fragmentShader:Kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Kt.cube_vert,fragmentShader:Kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Kt.equirect_vert,fragmentShader:Kt.equirect_frag},distance:{uniforms:An([Tt.common,Tt.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Kt.distance_vert,fragmentShader:Kt.distance_frag},shadow:{uniforms:An([Tt.lights,Tt.fog,{color:{value:new Jt(0)},opacity:{value:1}}]),vertexShader:Kt.shadow_vert,fragmentShader:Kt.shadow_frag}};Yi.physical={uniforms:An([Yi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Wt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Wt},clearcoatNormalScale:{value:new re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Wt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Wt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Wt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Wt},sheen:{value:0},sheenColor:{value:new Jt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Wt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Wt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Wt},transmissionSamplerSize:{value:new re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Wt},attenuationDistance:{value:0},attenuationColor:{value:new Jt(0)},specularColor:{value:new Jt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Wt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Wt},anisotropyVector:{value:new re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Wt}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag};var eh={r:0,b:0,g:0},ry=new Se,Tm=new Wt;Tm.set(-1,0,0,0,1,0,0,0,1);function oy(s,t,e,n,i,r){let o=new Jt(0),a=i===!0?0:1,l,c,h=null,d=0,u=null;function f(v){let T=v.isScene===!0?v.background:null;if(T&&T.isTexture){let y=v.backgroundBlurriness>0;T=t.get(T,y)}return T}function m(v){let T=!1,y=f(v);y===null?p(o,a):y&&y.isColor&&(p(y,1),T=!0);let w=s.xr.getEnvironmentBlendMode();w==="additive"?e.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(s.autoClear||T)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function _(v,T){let y=f(T);y&&y.isCubeTexture?(c===void 0&&(c=new Qe(new Gi(1,1,1),new Hi({name:"BackgroundCubeMaterial",uniforms:mr(Yi.backgroundCube.uniforms),vertexShader:Yi.backgroundCube.vertexShader,fragmentShader:Yi.backgroundCube.fragmentShader,side:gn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,E,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(ry.makeRotationFromEuler(T.backgroundRotation)).transpose(),y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Tm),c.material.toneMapped=le.getTransfer(y.colorSpace)!==xe,(h!==y||d!==y.version||u!==s.toneMapping)&&(c.material.needsUpdate=!0,h=y,d=y.version,u=s.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Qe(new oa(2,2),new Hi({name:"BackgroundMaterial",uniforms:mr(Yi.background.uniforms),vertexShader:Yi.background.vertexShader,fragmentShader:Yi.background.fragmentShader,side:Vs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.toneMapped=le.getTransfer(y.colorSpace)!==xe,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||d!==y.version||u!==s.toneMapping)&&(l.material.needsUpdate=!0,h=y,d=y.version,u=s.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function p(v,T){v.getRGB(eh,sf(s)),e.buffers.color.setClear(eh.r,eh.g,eh.b,T,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(v,T=1){o.set(v),a=T,p(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(v){a=v,p(o,a)},render:m,addToRenderList:_,dispose:g}}function ay(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=u(null),r=i,o=!1;function a(N,D,W,I,B){let H=!1,F=d(N,I,W,D);r!==F&&(r=F,c(r.object)),H=f(N,I,W,B),H&&m(N,I,W,B),B!==null&&t.update(B,s.ELEMENT_ARRAY_BUFFER),(H||o)&&(o=!1,y(N,D,W,I),B!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function l(){return s.createVertexArray()}function c(N){return s.bindVertexArray(N)}function h(N){return s.deleteVertexArray(N)}function d(N,D,W,I){let B=I.wireframe===!0,H=n[D.id];H===void 0&&(H={},n[D.id]=H);let F=N.isInstancedMesh===!0?N.id:0,tt=H[F];tt===void 0&&(tt={},H[F]=tt);let X=tt[W.id];X===void 0&&(X={},tt[W.id]=X);let R=X[B];return R===void 0&&(R=u(l()),X[B]=R),R}function u(N){let D=[],W=[],I=[];for(let B=0;B<e;B++)D[B]=0,W[B]=0,I[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:W,attributeDivisors:I,object:N,attributes:{},index:null}}function f(N,D,W,I){let B=r.attributes,H=D.attributes,F=0,tt=W.getAttributes();for(let X in tt)if(tt[X].location>=0){let K=B[X],yt=H[X];if(yt===void 0&&(X==="instanceMatrix"&&N.instanceMatrix&&(yt=N.instanceMatrix),X==="instanceColor"&&N.instanceColor&&(yt=N.instanceColor)),K===void 0||K.attribute!==yt||yt&&K.data!==yt.data)return!0;F++}return r.attributesNum!==F||r.index!==I}function m(N,D,W,I){let B={},H=D.attributes,F=0,tt=W.getAttributes();for(let X in tt)if(tt[X].location>=0){let K=H[X];K===void 0&&(X==="instanceMatrix"&&N.instanceMatrix&&(K=N.instanceMatrix),X==="instanceColor"&&N.instanceColor&&(K=N.instanceColor));let yt={};yt.attribute=K,K&&K.data&&(yt.data=K.data),B[X]=yt,F++}r.attributes=B,r.attributesNum=F,r.index=I}function _(){let N=r.newAttributes;for(let D=0,W=N.length;D<W;D++)N[D]=0}function p(N){g(N,0)}function g(N,D){let W=r.newAttributes,I=r.enabledAttributes,B=r.attributeDivisors;W[N]=1,I[N]===0&&(s.enableVertexAttribArray(N),I[N]=1),B[N]!==D&&(s.vertexAttribDivisor(N,D),B[N]=D)}function v(){let N=r.newAttributes,D=r.enabledAttributes;for(let W=0,I=D.length;W<I;W++)D[W]!==N[W]&&(s.disableVertexAttribArray(W),D[W]=0)}function T(N,D,W,I,B,H,F){F===!0?s.vertexAttribIPointer(N,D,W,B,H):s.vertexAttribPointer(N,D,W,I,B,H)}function y(N,D,W,I){_();let B=I.attributes,H=W.getAttributes(),F=D.defaultAttributeValues;for(let tt in H){let X=H[tt];if(X.location>=0){let R=B[tt];if(R===void 0&&(tt==="instanceMatrix"&&N.instanceMatrix&&(R=N.instanceMatrix),tt==="instanceColor"&&N.instanceColor&&(R=N.instanceColor)),R!==void 0){let K=R.normalized,yt=R.itemSize,kt=t.get(R);if(kt===void 0)continue;let Y=kt.buffer,ft=kt.type,xt=kt.bytesPerElement,Mt=ft===s.INT||ft===s.UNSIGNED_INT||R.gpuType===_c;if(R.isInterleavedBufferAttribute){let dt=R.data,Rt=dt.isInterleavedBuffer===!0?dt.stride:dt.itemSize,pe=R.offset;if(dt.isInstancedInterleavedBuffer||dt.isInstancedBufferAttribute){for(let Ct=0;Ct<X.locationSize;Ct++)g(X.location+Ct,dt.meshPerAttribute);N.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=dt.meshPerAttribute*dt.count)}else for(let Ct=0;Ct<X.locationSize;Ct++)p(X.location+Ct);s.bindBuffer(s.ARRAY_BUFFER,Y);for(let Ct=0;Ct<X.locationSize;Ct++)T(X.location+Ct,yt/X.locationSize,ft,K,Rt*xt,(pe+yt/X.locationSize*Ct)*xt,Mt)}else{if(R.isInstancedBufferAttribute){for(let dt=0;dt<X.locationSize;dt++)g(X.location+dt,R.meshPerAttribute);N.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=R.meshPerAttribute*R.count)}else for(let dt=0;dt<X.locationSize;dt++)p(X.location+dt);s.bindBuffer(s.ARRAY_BUFFER,Y);for(let dt=0;dt<X.locationSize;dt++)T(X.location+dt,yt/X.locationSize,ft,K,yt*xt,yt/X.locationSize*dt*xt,Mt)}}else if(F!==void 0){let K=F[tt];if(K!==void 0)switch(K.length){case 2:s.vertexAttrib2fv(X.location,K);break;case 3:s.vertexAttrib3fv(X.location,K);break;case 4:s.vertexAttrib4fv(X.location,K);break;default:s.vertexAttrib1fv(X.location,K)}}}}v()}function w(){P();for(let N in n){let D=n[N];for(let W in D){let I=D[W];for(let B in I){let H=I[B];for(let F in H)h(H[F].object),delete H[F];delete I[B]}}delete n[N]}}function E(N){if(n[N.id]===void 0)return;let D=n[N.id];for(let W in D){let I=D[W];for(let B in I){let H=I[B];for(let F in H)h(H[F].object),delete H[F];delete I[B]}}delete n[N.id]}function x(N){for(let D in n){let W=n[D];for(let I in W){let B=W[I];if(B[N.id]===void 0)continue;let H=B[N.id];for(let F in H)h(H[F].object),delete H[F];delete B[N.id]}}}function b(N){for(let D in n){let W=n[D],I=N.isInstancedMesh===!0?N.id:0,B=W[I];if(B!==void 0){for(let H in B){let F=B[H];for(let tt in F)h(F[tt].object),delete F[tt];delete B[H]}delete W[I],Object.keys(W).length===0&&delete n[D]}}}function P(){C(),o=!0,r!==i&&(r=i,c(r.object))}function C(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:P,resetDefaultState:C,dispose:w,releaseStatesOfGeometry:E,releaseStatesOfObject:b,releaseStatesOfProgram:x,initAttributes:_,enableAttribute:p,disableUnusedAttributes:v}}function ly(s,t,e){let n;function i(l){n=l}function r(l,c){s.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,h){h!==0&&(s.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];e.update(u,n,1)}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function cy(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let x=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(x){return!(x!==Ni&&n.convert(x)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(x){let b=x===Di&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(x!==Yn&&x!==xi&&!b&&n.convert(x)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function l(x){if(x==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Vt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),u=e.logarithmicDepthBuffer===!0&&d===!1;e.reversedDepthBuffer===!0&&d===!1&&Vt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&d===!0&&Vt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),p=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),v=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),T=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),w=s.getParameter(s.MAX_SAMPLES),E=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:p,maxAttributes:g,maxVertexUniforms:v,maxVaryings:T,maxFragmentUniforms:y,maxSamples:w,samples:E}}function hy(s){let t=this,e=null,n=0,i=!1,r=!1,o=new Ri,a=new Wt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||i;return i=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){let m=d.clippingPlanes,_=d.clipIntersection,p=d.clipShadows,g=s.get(d);if(!i||m===null||m.length===0||r&&!p)r?h(null):c();else{let v=r?0:n,T=v*4,y=g.clippingState||null;l.value=y,y=h(m,u,T,f);for(let w=0;w!==T;++w)y[w]=e[w];g.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,m){let _=d!==null?d.length:0,p=null;if(_!==0){if(p=l.value,m!==!0||p===null){let g=f+_*4,v=u.matrixWorldInverse;a.getNormalMatrix(v),(p===null||p.length<g)&&(p=new Float32Array(g));for(let T=0,y=f;T!==_;++T,y+=4)o.copy(d[T]).applyMatrix4(v,a),o.normal.toArray(p,y),p[y+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,p}}var Ra=class extends ri{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new na(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Gi(5,5,5),r=new Hi({name:"CubemapFromEquirect",uniforms:mr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:gn,blending:ur});r.uniforms.tEquirect.value=e;let o=new Qe(i,r),a=e.minFilter;return e.minFilter===fs&&(e.minFilter=Fn),new oo(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}},nm=256,uy=3,fy=20,wm=256,Em=16,dy=3,py=new G,my=new Jt,fo=class s{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new oo(1,10,null),this._boxMesh=new Qe(new Gi(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,i=100,r={}){let{size:o=256,position:a=py}=r,l=this._renderer;this._setSize(o);let c=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);let d=l.autoClear,u=l.autoClearColor,f=l.autoClearDepth,m=l.autoClearStencil,_=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,_===null&&(t.background=l.getClearColor(my));let p=new oo(n,i,h);return p.position.copy(a),p.update(l,t),l.autoClear=d,l.autoClearColor=u,l.autoClearDepth=f,l.autoClearStencil=m,t.background=_,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=rm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=sm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(nm,Kp(t))}_fromTexture(t,e){t.mapping===dr||t.mapping===co?this._setSize(t.image.length===0?nm:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){let t=this._cubeSize,e=im(t,!1,!1),n=Math.log2(t)-uy;for(let i=0;i<=n;i++)e.texture.mipmaps.push({width:t>>i,height:t>>i});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=im(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){let i=this._boxMesh,r=this._cubeCamera;i.material=n,r.renderTarget=t,r.activeMipmapLevel=e;let o=t.width>>e;t.viewport.set(0,0,o,o),r.update(this._renderer,i),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===dr||t.mapping===co?(this._cubemapMaterial===null&&(this._cubemapMaterial=rm()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=sm()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=gy(),this._integrationMaterial=_y());let e=this._cubeSize,n=t.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/Em);for(let o=0;o<=n;o++){let a=s.lodToRoughness(o,n);if(o>n-dy)r.roughness.value=a,this._renderCube(t,o,this._integrationMaterial);else{let l=a>0?Math.log2(e)+.5*Math.log2(6/(wm*Math.pow(a,4)))+.5:0;i.roughness.value=a,i.lodBias.value=l,this._renderCube(t,o,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=xy());let n=this._blurMaterial,i=n.uniforms,r=this._sourceTarget;i.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,i.envMap.value=r.texture,this._renderCube(t,0,n),i.envMap.value=t.texture,this._renderCube(r,0,n)}};function im(s,t,e){return new Ra(s,{minFilter:fs,generateMipmaps:t,type:Di,colorSpace:Yo,depthBuffer:e})}function Pa(s,t,e){return new Hi({name:s,uniforms:t,vertexShader:Kt.cube_vert,fragmentShader:e,side:gn,blending:ur,depthTest:!1,depthWrite:!1})}function gy(){return Pa("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${wm}u

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
	`)}function _y(){return Pa("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Em}},`

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
	`)}function xy(){return Pa("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${fy}
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
	`)}function sm(){return Pa("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function rm(){return Pa("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function vy(s){let t=new WeakMap,e=new WeakMap,n=null;function i(u,f=!1){return u==null?null:f?o(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===pc||f===mc)if(t.has(u)){let m=t.get(u).texture;return a(m,u.mapping)}else{let m=u.image;if(m&&m.height>0){let _=new Ra(m.height);return _.fromEquirectangularTexture(s,u),t.set(u,_),u.addEventListener("dispose",c),a(_.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){let f=u.mapping,m=f===pc||f===mc,_=f===dr||f===co;if(m||_){let p=e.get(u),g=p!==void 0?p.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==g)return n===null&&(n=new fo(s)),p=m?n.fromEquirectangular(u,p):n.fromCubemap(u,p),p.texture.pmremVersion=u.pmremVersion,e.set(u,p),p.texture;if(p!==void 0)return p.texture;{let v=u.image;return m&&v&&v.height>0||_&&v&&l(v)?(n===null&&(n=new fo(s)),p=m?n.fromEquirectangular(u):n.fromCubemap(u),p.texture.pmremVersion=u.pmremVersion,e.set(u,p),u.addEventListener("dispose",h),p.texture):null}}}return u}function a(u,f){return f===pc?u.mapping=dr:f===mc&&(u.mapping=co),u}function l(u){let f=0,m=6;for(let _=0;_<m;_++)u[_]!==void 0&&f++;return f===m}function c(u){let f=u.target;f.removeEventListener("dispose",c);let m=t.get(f);m!==void 0&&(t.delete(f),m.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let m=e.get(f);m!==void 0&&(e.delete(f),m.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:d}}function yy(s){let t={};function e(n){if(t[n]!==void 0)return t[n];let i=s.getExtension(n);return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&Xo("WebGLRenderer: "+n+" extension not supported."),i}}}function Sy(s,t,e,n){let i={},r=new WeakMap,o=new FinalizationRegistry(m=>delete i[m]);function a(m){l(m.target)}function l(m){m.index!==null&&t.remove(m.index);for(let p in m.attributes)t.remove(m.attributes[p]);m.removeEventListener("dispose",a),delete i[m.id],o.unregister(m);let _=r.get(m);_&&(t.remove(_),r.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,e.memory.geometries--}function c(m,_){return i[_.id]!==void 0||(_.addEventListener("dispose",a),i[_.id]=new WeakRef(_),o.register(_,_.id,_),e.memory.geometries++),_}function h(m){let _=m.attributes;for(let p in _)t.update(_[p],s.ARRAY_BUFFER)}function d(m){let _=m.index,p=m.attributes.position,g=0;if(p===void 0)return;let v=_!==null?_.array.length:p.array.length/3-1,T=p.count>=65535?jo:Qo,y=new T(Math.ceil(v/3)*6,1),w=y.array;if(_!==null){let x=_.array;g=_.version;for(let b=0,P=0;b<v;b+=3){let C=x[b+0],N=x[b+1],D=x[b+2];w[P++]=C,w[P++]=N,w[P++]=N,w[P++]=D,w[P++]=D,w[P++]=C}}else{g=p.version;for(let x=0,b=0;x<v;x+=3){let P=x+0,C=x+1,N=x+2;w[b++]=P,w[b++]=C,w[b++]=C,w[b++]=N,w[b++]=N,w[b++]=P}}y.version=g;let E=r.get(m);E&&t.remove(E),r.set(m,y)}function u(m){let _=r.get(m);if(_){let p=m.index;p!==null&&_.version<p.version&&d(m)}else d(m);return r.get(m)}function f(){for(let m in i){let _=i[m].deref();_!==void 0&&l(_)}}return{get:c,update:h,getWireframeAttribute:u,dispose:f}}function My(s,t,e){let n;function i(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,u){s.drawElements(n,u,r,d*o),e.update(u,n,1)}function c(d,u,f){f!==0&&(s.drawElementsInstanced(n,u,r,d*o,f),e.update(u,n,f))}function h(d,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,f);let _=0;for(let p=0;p<f;p++)_+=u[p];e.update(_,n,1)}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function by(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:Ht("WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Ty(s,t,e){let n=new WeakMap,i=new Ue;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(a);if(u===void 0||u.count!==d){let P=function(){x.dispose(),n.delete(a),a.removeEventListener("dispose",P)};u!==void 0&&u.texture.dispose();let f=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],T=0;f===!0&&(T=1),m===!0&&(T=2),_===!0&&(T=3);let y=a.attributes.position.count*T,w=1;y>t.maxTextureSize&&(w=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let E=new Float32Array(y*w*4*d),x=new $o(E,y,w,d);x.type=xi,x.needsUpdate=!0;let b=T*4;for(let C=0;C<d;C++){let N=p[C],D=g[C],W=v[C],I=y*w*4*C;for(let B=0;B<N.count;B++){let H=B*b;f===!0&&(i.fromBufferAttribute(N,B),E[I+H+0]=i.x,E[I+H+1]=i.y,E[I+H+2]=i.z,E[I+H+3]=0),m===!0&&(i.fromBufferAttribute(D,B),E[I+H+4]=i.x,E[I+H+5]=i.y,E[I+H+6]=i.z,E[I+H+7]=0),_===!0&&(i.fromBufferAttribute(W,B),E[I+H+8]=i.x,E[I+H+9]=i.y,E[I+H+10]=i.z,E[I+H+11]=W.itemSize===4?i.w:1)}}u={count:d,texture:x,size:new re(y,w)},n.set(a,u),a.addEventListener("dispose",P)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];let m=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(s,"morphTargetBaseInfluence",m),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}return{update:r}}function wy(s,t,e,n,i){let r=new WeakMap;function o(c){let h=i.render.frame,d=c.geometry,u=t.get(c,d);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}var Ey={[Fu]:"LINEAR_TONE_MAPPING",[Bu]:"REINHARD_TONE_MAPPING",[zu]:"CINEON_TONE_MAPPING",[_a]:"ACES_FILMIC_TONE_MAPPING",[Vu]:"AGX_TONE_MAPPING",[Gu]:"NEUTRAL_TONE_MAPPING",[ku]:"CUSTOM_TONE_MAPPING"};function Ay(s,t,e,n,i,r){let o=new ri(t,e,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,h=new cs;h.setAttribute("position",new On([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new On([0,2,0,0,2,0],2));let d=new Ql({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new Qe(h,d),f=new da(-1,1,1,-1,0,1),m=null,_=null,p=!1,g,v=null,T=[],y=!1;this.setSize=function(w,E){o.setSize(w,E),a!==null&&a.setSize(w,E),l!==null&&l.setSize(w,E);for(let x=0;x<T.length;x++){let b=T[x];b.setSize&&b.setSize(w,E)}},this.setEffects=function(w){T=w,y=T.length>0&&T[0].isRenderPass===!0;let E=o.width,x=o.height;T.length>0&&a===null&&(a=new ri(E,x,{type:Di,depthBuffer:!1,stencilBuffer:!1}),l=new ri(E,x,{type:Di,depthBuffer:!1,stencilBuffer:!1}));let b=i===!0&&T.some(P=>P.needsDepthTexture===!0);b!==(o.depthTexture!==null)&&(b===!0&&c===null&&(c=new us(E,x),r===!0&&(c.format=ds,c.type=pr)),o.dispose(),o.depthTexture=b?c:null,o.resolveDepthBuffer=b,o.storeMultisampledDepthBuffer=b);for(let P=0;P<T.length;P++){let C=T[P];C.setSize&&C.setSize(E,x),b&&C.needsDepthTexture===!0&&C.setDepthTexture&&C.setDepthTexture(c)}},this.begin=function(w,E){if(p||w.toneMapping===Xi&&T.length===0)return!1;if(v=E,E!==null){let x=E.width,b=E.height;(o.width!==x||o.height!==b)&&this.setSize(x,b)}return y===!1&&w.setRenderTarget(o),g=w.toneMapping,w.toneMapping=Xi,!0},this.hasRenderPass=function(){return y},this.end=function(w,E){w.toneMapping=g,p=!0;let x=o,b=a;for(let P=0;P<T.length;P++){let C=T[P];C.enabled!==!1&&(C.render(w,b,x,E),C.needsSwap!==!1&&(x=b,b=b===a?l:a))}if(m!==w.outputColorSpace||_!==w.toneMapping){m=w.outputColorSpace,_=w.toneMapping,d.defines={},le.getTransfer(m)===xe&&(d.defines.SRGB_TRANSFER="");let P=Ey[_];P&&(d.defines[P]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=x.texture,w.setRenderTarget(v),w.render(u,f),v=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),h.dispose(),d.dispose()}}var Am=new qn,Cm=new us(1,1),Rm=new ia(1),Pm=new $o,Im=new Yl,Lm=new na,om=[],am=[],lm=new Float32Array(16),cm=new Float32Array(9),hm=new Float32Array(4);function po(s,t,e){let n=s[0];if(n<=0||n>0)return s;let i=t*e,r=om[i];if(r===void 0&&(r=new Float32Array(i),om[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function on(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function an(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function sh(s,t){let e=am[t];e===void 0&&(e=new Int32Array(t),am[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function Cy(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Ry(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(on(e,t))return;s.uniform2fv(this.addr,t),an(e,t)}}function Py(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(on(e,t))return;s.uniform3fv(this.addr,t),an(e,t)}}function Iy(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(on(e,t))return;s.uniform4fv(this.addr,t),an(e,t)}}function Ly(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(on(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),an(e,t)}else{if(on(e,n))return;hm.set(n),s.uniformMatrix2fv(this.addr,!1,hm),an(e,n)}}function Dy(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(on(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),an(e,t)}else{if(on(e,n))return;cm.set(n),s.uniformMatrix3fv(this.addr,!1,cm),an(e,n)}}function Ny(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(on(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),an(e,t)}else{if(on(e,n))return;lm.set(n),s.uniformMatrix4fv(this.addr,!1,lm),an(e,n)}}function Uy(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Oy(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(on(e,t))return;s.uniform2iv(this.addr,t),an(e,t)}}function Fy(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(on(e,t))return;s.uniform3iv(this.addr,t),an(e,t)}}function By(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(on(e,t))return;s.uniform4iv(this.addr,t),an(e,t)}}function zy(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function ky(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(on(e,t))return;s.uniform2uiv(this.addr,t),an(e,t)}}function Vy(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(on(e,t))return;s.uniform3uiv(this.addr,t),an(e,t)}}function Gy(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(on(e,t))return;s.uniform4uiv(this.addr,t),an(e,t)}}function rh(s){return s.version===0&&(s.compareFunction=Qu,s.needsUpdate=!0),s}function Hy(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?r=rh(Cm):r=Am,e.setTexture2D(t||r,i)}function Wy(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Im,i)}function Xy(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_CUBE_SHADOW?r=rh(Rm):r=Lm,e.setTextureCube(t||r,i)}function qy(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Pm,i)}function Yy(s){switch(s){case 5126:return Cy;case 35664:return Ry;case 35665:return Py;case 35666:return Iy;case 35674:return Ly;case 35675:return Dy;case 35676:return Ny;case 5124:case 35670:return Uy;case 35667:case 35671:return Oy;case 35668:case 35672:return Fy;case 35669:case 35673:return By;case 5125:return zy;case 36294:return ky;case 36295:return Vy;case 36296:return Gy;case 35678:case 36198:case 36298:case 36306:case 35682:return Hy;case 35679:case 36299:case 36307:return Wy;case 35680:case 36300:case 36308:case 36293:return Xy;case 36289:case 36303:case 36311:case 36292:return qy}}function Zy(s,t){s.uniform1fv(this.addr,t)}function Jy(s,t){let e=po(t,this.size,2);s.uniform2fv(this.addr,e)}function $y(s,t){let e=po(t,this.size,3);s.uniform3fv(this.addr,e)}function Ky(s,t){let e=po(t,this.size,4);s.uniform4fv(this.addr,e)}function Qy(s,t){let e=po(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function jy(s,t){let e=po(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function tS(s,t){let e=po(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function eS(s,t){s.uniform1iv(this.addr,t)}function nS(s,t){s.uniform2iv(this.addr,t)}function iS(s,t){s.uniform3iv(this.addr,t)}function sS(s,t){s.uniform4iv(this.addr,t)}function rS(s,t){s.uniform1uiv(this.addr,t)}function oS(s,t){s.uniform2uiv(this.addr,t)}function aS(s,t){s.uniform3uiv(this.addr,t)}function lS(s,t){s.uniform4uiv(this.addr,t)}function cS(s,t,e){let n=this.cache,i=t.length,r=sh(e,i);on(n,r)||(s.uniform1iv(this.addr,r),an(n,r));let o;this.type===s.SAMPLER_2D_SHADOW?o=rh(Cm):o=Am;for(let a=0;a!==i;++a)e.setTexture2D(t[a]||o,r[a])}function hS(s,t,e){let n=this.cache,i=t.length,r=sh(e,i);on(n,r)||(s.uniform1iv(this.addr,r),an(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||Im,r[o])}function uS(s,t,e){let n=this.cache,i=t.length,r=sh(e,i);on(n,r)||(s.uniform1iv(this.addr,r),an(n,r));let o;this.type===s.SAMPLER_CUBE_SHADOW?o=rh(Rm):o=Lm;for(let a=0;a!==i;++a)e.setTextureCube(t[a]||o,r[a])}function fS(s,t,e){let n=this.cache,i=t.length,r=sh(e,i);on(n,r)||(s.uniform1iv(this.addr,r),an(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||Pm,r[o])}function dS(s){switch(s){case 5126:return Zy;case 35664:return Jy;case 35665:return $y;case 35666:return Ky;case 35674:return Qy;case 35675:return jy;case 35676:return tS;case 5124:case 35670:return eS;case 35667:case 35671:return nS;case 35668:case 35672:return iS;case 35669:case 35673:return sS;case 5125:return rS;case 36294:return oS;case 36295:return aS;case 36296:return lS;case 35678:case 36198:case 36298:case 36306:case 35682:return cS;case 35679:case 36299:case 36307:return hS;case 35680:case 36300:case 36308:case 36293:return uS;case 36289:case 36303:case 36311:case 36292:return fS}}var mf=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Yy(e.type)}},gf=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=dS(e.type)}},_f=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(t,e[a.id],n)}}},df=/(\w+)(\])?(\[|\.)?/g;function um(s,t){s.seq.push(t),s.map[t.id]=t}function pS(s,t,e){let n=s.name,i=n.length;for(df.lastIndex=0;;){let r=df.exec(n),o=df.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){um(e,c===void 0?new mf(a,s,t):new gf(a,s,t));break}else{let d=e.map[a];d===void 0&&(d=new _f(a),um(e,d)),e=d}}}var uo=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);pS(a,l,this)}let i=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(o):r.push(o);i.length>0&&(this.seq=i.concat(r))}setValue(t,e,n,i){let r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,r=t.length;i!==r;++i){let o=t[i];o.id in e&&n.push(o)}return n}};function fm(s,t,e){let n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}var mS=37297,gS=0;function _S(s,t){let e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var dm=new Wt;function xS(s){le._getMatrix(dm,le.workingColorSpace,s);let t=`mat3( ${dm.elements.map(e=>e.toFixed(4))} )`;switch(le.getTransfer(s)){case Zo:return[t,"LinearTransferOETF"];case xe:return[t,"sRGBTransferOETF"];default:return Vt("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function pm(s,t,e){let n=s.getShaderParameter(t,s.COMPILE_STATUS),r=(s.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+_S(s.getShaderSource(t),a)}else return r}function vS(s,t){let e=xS(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var yS={[Fu]:"Linear",[Bu]:"Reinhard",[zu]:"Cineon",[_a]:"ACESFilmic",[Vu]:"AgX",[Gu]:"Neutral",[ku]:"Custom"};function SS(s,t){let e=yS[t];return e===void 0?(Vt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var nh=new G;function MS(){le.getLuminanceCoefficients(nh);let s=nh.x.toFixed(4),t=nh.y.toFixed(4),e=nh.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function bS(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ca).join(`
`)}function TS(s){let t=[];for(let e in s){let n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function wS(s,t){let e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(t,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function Ca(s){return s!==""}function mm(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function gm(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var ES=/^[ \t]*#include +<([\w\d./]+)>/gm;function xf(s){return s.replace(ES,AS)}function AS(s,t){let e=Kt[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return xf(e)}var CS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _m(s){return s.replace(CS,RS)}function RS(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function xm(s){let t=`precision ${s.precision} float;
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
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var PS={[ga]:"SHADOWMAP_TYPE_PCF",[ao]:"SHADOWMAP_TYPE_VSM"};function IS(s){return PS[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var LS={[co]:"ENVMAP_MODE_REFRACTION"};function DS(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":LS[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}var NS={[dc]:"ENVMAP_BLENDING_MULTIPLY",[Up]:"ENVMAP_BLENDING_MIX",[Op]:"ENVMAP_BLENDING_ADD"};function US(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":NS[s.combine]||"ENVMAP_BLENDING_NONE"}function OS(s,t,e,n){let i=s.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=IS(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=DS(e),d=US(e),u=bS(e),f=TS(r),m=i.createProgram(),_,p,g=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(_=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(Ca).join(`
`),_.length>0&&(_+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(Ca).join(`
`),p.length>0&&(p+=`
`)):(_=[xm(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ca).join(`
`),p=[xm(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Xi?"#define TONE_MAPPING":"",e.toneMapping!==Xi?Kt.tonemapping_pars_fragment:"",e.toneMapping!==Xi?SS("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Kt.colorspace_pars_fragment,vS("linearToOutputTexel",e.outputColorSpace),MS(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ca).join(`
`)),o=xf(o),o=mm(o,e),o=gm(o,e),a=xf(a),a=mm(a,e),a=gm(a,e),o=_m(o),a=_m(a),e.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,_=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,p=["#define varying in",e.glslVersion===ju?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ju?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let v=g+_+o,T=g+p+a,y=fm(i,i.VERTEX_SHADER,v),w=fm(i,i.FRAGMENT_SHADER,T);i.attachShader(m,y),i.attachShader(m,w),e.index0AttributeName!==void 0?i.bindAttribLocation(m,0,e.index0AttributeName):e.hasPositionAttribute===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m);function E(C){if(s.debug.checkShaderErrors){let N=i.getProgramInfoLog(m)||"",D=i.getShaderInfoLog(y)||"",W=i.getShaderInfoLog(w)||"",I=N.trim(),B=D.trim(),H=W.trim(),F=!0,tt=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(F=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,m,y,w);else{let X=pm(i,y,"vertex"),R=pm(i,w,"fragment");Ht("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+I+`
`+X+`
`+R)}else I!==""?Vt("WebGLProgram: Program Info Log:",I):(B===""||H==="")&&(tt=!1);tt&&(C.diagnostics={runnable:F,programLog:I,vertexShader:{log:B,prefix:_},fragmentShader:{log:H,prefix:p}})}i.deleteShader(y),i.deleteShader(w),x=new uo(i,m),b=wS(i,m)}let x;this.getUniforms=function(){return x===void 0&&E(this),x};let b;this.getAttributes=function(){return b===void 0&&E(this),b};let P=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=i.getProgramParameter(m,mS)),P},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=gS++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=y,this.fragmentShader=w,this}var FS=0,vf=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let i=this._getShaderCacheForMaterial(t);return i.has(e)===!1&&(i.add(e),e.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new yf(t),e.set(t,n)),n}},yf=class{constructor(t){this.id=FS++,this.code=t,this.usedTimes=0}};function BS(s){return s===Gs||s===ba||s===Ta}function zS(s,t,e,n,i,r){let o=new Ko,a=new vf,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(x){return l.add(x),x===0?"uv":`uv${x}`}function m(x,b,P,C,N,D){let W=C.fog,I=N.geometry,B=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?C.environment:null,H=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,F=t.get(x.envMap||B,H),tt=u[x.type],X=n.precision;x.precision!==null&&(X=n.getMaxPrecision(x.precision),X!==x.precision&&Vt("WebGLProgram.getParameters:",x.precision,"not supported, using",X,"instead."));let R=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,K=R!==void 0?R.length:0,yt=0;I.morphAttributes.position!==void 0&&(yt=1),I.morphAttributes.normal!==void 0&&(yt=2),I.morphAttributes.color!==void 0&&(yt=3);let kt,Y,ft,xt;if(tt){let st=Yi[tt];kt=st.vertexShader,Y=st.fragmentShader}else{kt=x.vertexShader,Y=x.fragmentShader;let st=a.getVertexShaderStage(x),Et=a.getFragmentShaderStage(x);a.update(x,st,Et),ft=st.id,xt=Et.id}let Mt=s.getRenderTarget(),dt=s.state.buffers.depth.getReversed(),Rt=N.isInstancedMesh===!0,pe=N.isBatchedMesh===!0,Ct=!!x.map,Gt=!!x.matcap,It=!!F,Ft=It&&F.isPMREMTexture===!0,jt=!!x.aoMap,ce=!!x.lightMap,Z=!!x.bumpMap&&x.wireframe===!1,$t=!!x.normalMap,Ve=!!x.displacementMap,ge=!!x.emissiveMap,ne=!!x.metalnessMap,Ie=!!x.roughnessMap,Te=x.anisotropy>0,O=x.clearcoat>0,ue=x.diffuseRoughness>0,bt=x.dispersion>0,Dt=x.retroreflectivity>0,ot=x.iridescence>0,Xt=x.sheen>0,wt=x.transmission>0,Nt=Te&&!!x.anisotropyMap,A=O&&!!x.clearcoatMap,S=O&&!!x.clearcoatNormalMap,z=O&&!!x.clearcoatRoughnessMap,at=ue&&!!x.diffuseRoughnessMap,et=ot&&!!x.iridescenceMap,ht=ot&&!!x.iridescenceThicknessMap,nt=Xt&&!!x.sheenColorMap,k=Xt&&!!x.sheenRoughnessMap,j=!!x.specularMap,lt=!!x.specularColorMap,L=!!x.specularIntensityMap,Q=wt&&!!x.transmissionMap,$=wt&&!!x.thicknessMap,pt=!!x.gradientMap,ut=!!x.alphaMap,mt=x.alphaTest>0,ct=!!x.alphaHash,gt=!!x.extensions,rt=Xi;x.toneMapped&&(Mt===null||Mt.isXRRenderTarget===!0)&&(rt=s.toneMapping);let it=Ft?F.isCompressedCubeTexture?F.image[0].mipmaps:F.mipmaps:null,_t={shaderID:tt,shaderType:x.type,shaderName:x.name,vertexShader:kt,fragmentShader:Y,defines:x.defines,customVertexShaderID:ft,customFragmentShaderID:xt,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:X,batching:pe,batchingColor:pe&&N._colorsTexture!==null,instancing:Rt,instancingColor:Rt&&N.instanceColor!==null,instancingMorph:Rt&&N.morphTexture!==null,outputColorSpace:Mt===null?s.outputColorSpace:Mt.isXRRenderTarget===!0?Mt.texture.colorSpace:le.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Ct,matcap:Gt,envMap:It,envMapMode:It&&F.mapping,envMapPMREM:Ft,envMapMaxLod:Ft?it.length-1:null,envMapSize:Ft?it[0].width:null,aoMap:jt,lightMap:ce,bumpMap:Z,normalMap:$t,displacementMap:Ve,emissiveMap:ge,normalMapObjectSpace:$t&&x.normalMapType===zp,normalMapTangentSpace:$t&&x.normalMapType===wa,packedNormalMap:$t&&x.normalMapType===wa&&BS(x.normalMap.format),metalnessMap:ne,roughnessMap:Ie,anisotropy:Te,anisotropyMap:Nt,clearcoat:O,clearcoatMap:A,clearcoatNormalMap:S,clearcoatRoughnessMap:z,diffuseRoughness:ue,diffuseRoughnessMap:at,dispersion:bt,retroreflection:Dt,iridescence:ot,iridescenceMap:et,iridescenceThicknessMap:ht,sheen:Xt,sheenColorMap:nt,sheenRoughnessMap:k,specularMap:j,specularColorMap:lt,specularIntensityMap:L,transmission:wt,transmissionMap:Q,thicknessMap:$,gradientMap:pt,opaque:x.transparent===!1&&x.blending===lo&&x.alphaToCoverage===!1,alphaMap:ut,alphaTest:mt,alphaHash:ct,combine:x.combine,mapUv:Ct&&f(x.map.channel),aoMapUv:jt&&f(x.aoMap.channel),lightMapUv:ce&&f(x.lightMap.channel),bumpMapUv:Z&&f(x.bumpMap.channel),normalMapUv:$t&&f(x.normalMap.channel),displacementMapUv:Ve&&f(x.displacementMap.channel),emissiveMapUv:ge&&f(x.emissiveMap.channel),metalnessMapUv:ne&&f(x.metalnessMap.channel),roughnessMapUv:Ie&&f(x.roughnessMap.channel),anisotropyMapUv:Nt&&f(x.anisotropyMap.channel),clearcoatMapUv:A&&f(x.clearcoatMap.channel),clearcoatNormalMapUv:S&&f(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:z&&f(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:at&&f(x.diffuseRoughnessMap.channel),iridescenceMapUv:et&&f(x.iridescenceMap.channel),iridescenceThicknessMapUv:ht&&f(x.iridescenceThicknessMap.channel),sheenColorMapUv:nt&&f(x.sheenColorMap.channel),sheenRoughnessMapUv:k&&f(x.sheenRoughnessMap.channel),specularMapUv:j&&f(x.specularMap.channel),specularColorMapUv:lt&&f(x.specularColorMap.channel),specularIntensityMapUv:L&&f(x.specularIntensityMap.channel),transmissionMapUv:Q&&f(x.transmissionMap.channel),thicknessMapUv:$&&f(x.thicknessMap.channel),alphaMapUv:ut&&f(x.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&($t||Te),vertexNormals:!!I.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!I.attributes.uv&&(Ct||ut),fog:!!W,useFog:x.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||I.attributes.normal===void 0&&$t===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:dt,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:yt,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:D.filter(st=>st.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:s.shadowMap.enabled&&P.length>0,shadowMapType:s.shadowMap.type,toneMapping:rt,decodeVideoTexture:Ct&&x.map.isVideoTexture===!0&&le.getTransfer(x.map.colorSpace)===xe,decodeVideoTextureEmissive:ge&&x.emissiveMap.isVideoTexture===!0&&le.getTransfer(x.emissiveMap.colorSpace)===xe,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Wi,flipSided:x.side===gn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:gt&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(gt&&x.extensions.multiDraw===!0||pe)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return _t.vertexUv1s=l.has(1),_t.vertexUv2s=l.has(2),_t.vertexUv3s=l.has(3),l.clear(),_t}function _(x){let b=[];if(x.shaderID?b.push(x.shaderID):(b.push(x.customVertexShaderID),b.push(x.customFragmentShaderID)),x.defines!==void 0)for(let P in x.defines)b.push(P),b.push(x.defines[P]);return x.isRawShaderMaterial===!1&&(p(b,x),g(b,x),b.push(s.outputColorSpace)),b.push(x.customProgramCacheKey),b.join()}function p(x,b){x.push(b.precision),x.push(b.outputColorSpace),x.push(b.envMapMode),x.push(b.envMapPMREM),x.push(b.envMapMaxLod),x.push(b.envMapSize),x.push(b.mapUv),x.push(b.alphaMapUv),x.push(b.lightMapUv),x.push(b.aoMapUv),x.push(b.bumpMapUv),x.push(b.normalMapUv),x.push(b.displacementMapUv),x.push(b.emissiveMapUv),x.push(b.metalnessMapUv),x.push(b.roughnessMapUv),x.push(b.anisotropyMapUv),x.push(b.clearcoatMapUv),x.push(b.clearcoatNormalMapUv),x.push(b.clearcoatRoughnessMapUv),x.push(b.diffuseRoughnessMapUv),x.push(b.iridescenceMapUv),x.push(b.iridescenceThicknessMapUv),x.push(b.sheenColorMapUv),x.push(b.sheenRoughnessMapUv),x.push(b.specularMapUv),x.push(b.specularColorMapUv),x.push(b.specularIntensityMapUv),x.push(b.transmissionMapUv),x.push(b.thicknessMapUv),x.push(b.combine),x.push(b.fogExp2),x.push(b.sizeAttenuation),x.push(b.morphTargetsCount),x.push(b.numSunLights),x.push(b.numDirLights),x.push(b.numPointLights),x.push(b.numSpotLights),x.push(b.numSpotLightMaps),x.push(b.numHemiLights),x.push(b.numRectAreaLights),x.push(b.numSunLightShadows),x.push(b.numDirLightShadows),x.push(b.numPointLightShadows),x.push(b.numSpotLightShadows),x.push(b.numSpotLightShadowsWithMaps),x.push(b.numLightProbes),x.push(b.numLightProbeGrids),x.push(b.shadowMapType),x.push(b.toneMapping),x.push(b.numClippingPlanes),x.push(b.numClipIntersection),x.push(b.depthPacking)}function g(x,b){o.disableAll(),b.instancing&&o.enable(0),b.instancingColor&&o.enable(1),b.instancingMorph&&o.enable(2),b.matcap&&o.enable(3),b.envMap&&o.enable(4),b.normalMapObjectSpace&&o.enable(5),b.normalMapTangentSpace&&o.enable(6),b.clearcoat&&o.enable(7),b.iridescence&&o.enable(8),b.alphaTest&&o.enable(9),b.vertexColors&&o.enable(10),b.vertexAlphas&&o.enable(11),b.vertexUv1s&&o.enable(12),b.vertexUv2s&&o.enable(13),b.vertexUv3s&&o.enable(14),b.vertexTangents&&o.enable(15),b.anisotropy&&o.enable(16),b.alphaHash&&o.enable(17),b.batching&&o.enable(18),b.dispersion&&o.enable(19),b.retroreflection&&o.enable(24),b.diffuseRoughness&&o.enable(25),b.batchingColor&&o.enable(20),b.gradientMap&&o.enable(21),b.packedNormalMap&&o.enable(22),b.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),b.numLightProbeGrids>0&&o.enable(22),b.hasPositionAttribute&&o.enable(23),x.push(o.mask)}function v(x){let b=u[x.type],P;if(b){let C=Yi[b];P=jp.clone(C.uniforms)}else P=x.uniforms;return P}function T(x,b){let P=h.get(b);return P!==void 0?++P.usedTimes:(P=new OS(s,b,x,i),c.push(P),h.set(b,P)),P}function y(x){if(--x.usedTimes===0){let b=c.indexOf(x);c[b]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function w(x){a.remove(x)}function E(){a.dispose()}return{getParameters:m,getProgramCacheKey:_,getUniforms:v,acquireProgram:T,releaseProgram:y,releaseShaderCache:w,programs:c,dispose:E}}function kS(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function VS(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.materialVariant!==t.materialVariant?s.materialVariant-t.materialVariant:s.z!==t.z?s.z-t.z:s.id-t.id}function vm(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function ym(){let s=[],t=0,e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function a(u,f,m,_,p,g){let v=s[t];return v===void 0?(v={id:u.id,object:u,geometry:f,material:m,materialVariant:o(u),groupOrder:_,renderOrder:u.renderOrder,z:p,group:g},s[t]=v):(v.id=u.id,v.object=u,v.geometry=f,v.material=m,v.materialVariant=o(u),v.groupOrder=_,v.renderOrder=u.renderOrder,v.z=p,v.group=g),t++,v}function l(u,f,m,_,p,g,v){v.reversedDepth===!0&&(p=-p);let T=a(u,f,m,_,p,g);m.transmission>0?n.push(T):m.transparent===!0?i.push(T):e.push(T)}function c(u,f,m,_,p,g){let v=a(u,f,m,_,p,g);m.transmission>0?n.unshift(v):m.transparent===!0?i.unshift(v):e.unshift(v)}function h(u,f){e.length>1&&e.sort(u||VS),n.length>1&&n.sort(f||vm),i.length>1&&i.sort(f||vm)}function d(){for(let u=t,f=s.length;u<f;u++){let m=s[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:l,unshift:c,finish:d,sort:h}}function GS(){let s=new WeakMap;function t(n,i){let r=s.get(n),o;return r===void 0?(o=new ym,s.set(n,[o])):i>=r.length?(o=new ym,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function HS(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new G,color:new Jt};break;case"SpotLight":e={position:new G,direction:new G,color:new Jt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new G,color:new Jt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new G,skyColor:new Jt,groundColor:new Jt};break;case"RectAreaLight":e={color:new Jt,position:new G,halfWidth:new G,halfHeight:new G};break}return s[t.id]=e,e}}}function WS(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var XS=0;function qS(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function YS(s){let t=new HS,e=WS(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new G);let i=new G,r=new Se,o=new Se;function a(c){let h=0,d=0,u=0;for(let D=0;D<9;D++)n.probe[D].set(0,0,0);let f=0,m=0,_=0,p=0,g=0,v=0,T=0,y=0,w=0,E=0,x=0,b=0,P=0,C=0;c.sort(qS);for(let D=0,W=c.length;D<W;D++){let I=c[D],B=I.color,H=I.intensity,F=I.distance,tt=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===Gs?tt=I.shadow.map.texture:tt=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=B.r*H,d+=B.g*H,u+=B.b*H;else if(I.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(I.sh.coefficients[X],H);C++}else if(I.isSunLight){let X=t.get(I);if(X.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let R=I.shadow,K=e.get(I);K.shadowIntensity=R.intensity,K.shadowBias=R.bias,K.shadowNormalBias=R.normalBias,K.shadowRadius=R.radius,K.shadowMapSize.copy(R.mapSize).multiply(R.getFrameExtents()),n.sunShadow[m]=K,n.sunShadowMap[m]=tt;let yt=R.getViewportCount();for(let kt=0;kt<yt;kt++)n.sunShadowMatrix[_+kt]=R.getMatrix(kt),n.sunShadowCascade[_+kt]=R._cascadeData[kt];_+=yt,m++}n.sun[f]=X,f++}else if(I.isDirectionalLight){let X=t.get(I);if(X.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let R=I.shadow,K=e.get(I);K.shadowIntensity=R.intensity,K.shadowBias=R.bias,K.shadowNormalBias=R.normalBias,K.shadowRadius=R.radius,K.shadowMapSize=R.mapSize,n.directionalShadow[p]=K,n.directionalShadowMap[p]=tt,n.directionalShadowMatrix[p]=I.shadow.matrix,w++}n.directional[p]=X,p++}else if(I.isSpotLight){let X=t.get(I);X.position.setFromMatrixPosition(I.matrixWorld),X.color.copy(B).multiplyScalar(H),X.distance=F,X.coneCos=Math.cos(I.angle),X.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),X.decay=I.decay,n.spot[v]=X;let R=I.shadow;if(I.map&&(n.spotLightMap[b]=I.map,b++,R.updateMatrices(I),I.castShadow&&P++),n.spotLightMatrix[v]=R.matrix,I.castShadow){let K=e.get(I);K.shadowIntensity=R.intensity,K.shadowBias=R.bias,K.shadowNormalBias=R.normalBias,K.shadowRadius=R.radius,K.shadowMapSize=R.mapSize,n.spotShadow[v]=K,n.spotShadowMap[v]=tt,x++}v++}else if(I.isRectAreaLight){let X=t.get(I);X.color.copy(B).multiplyScalar(H),X.halfWidth.set(I.width*.5,0,0),X.halfHeight.set(0,I.height*.5,0),n.rectArea[T]=X,T++}else if(I.isPointLight){let X=t.get(I);if(X.color.copy(I.color).multiplyScalar(I.intensity),X.distance=I.distance,X.decay=I.decay,I.castShadow){let R=I.shadow,K=e.get(I);K.shadowIntensity=R.intensity,K.shadowBias=R.bias,K.shadowNormalBias=R.normalBias,K.shadowRadius=R.radius,K.shadowMapSize=R.mapSize,K.shadowCameraNear=R.camera.near,K.shadowCameraFar=R.camera.far,n.pointShadow[g]=K,n.pointShadowMap[g]=tt,n.pointShadowMatrix[g]=I.shadow.matrix,E++}n.point[g]=X,g++}else if(I.isHemisphereLight){let X=t.get(I);X.skyColor.copy(I.color).multiplyScalar(H),X.groundColor.copy(I.groundColor).multiplyScalar(H),n.hemi[y]=X,y++}}T>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Tt.LTC_FLOAT_1,n.rectAreaLTC2=Tt.LTC_FLOAT_2):(n.rectAreaLTC1=Tt.LTC_HALF_1,n.rectAreaLTC2=Tt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let N=n.hash;(N.sunLength!==f||N.directionalLength!==p||N.pointLength!==g||N.spotLength!==v||N.rectAreaLength!==T||N.hemiLength!==y||N.numSunShadows!==m||N.numDirectionalShadows!==w||N.numPointShadows!==E||N.numSpotShadows!==x||N.numSpotMaps!==b||N.numLightProbes!==C)&&(n.sun.length=f,n.directional.length=p,n.spot.length=v,n.rectArea.length=T,n.point.length=g,n.hemi.length=y,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.directionalShadowMatrix.length=w,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=x,n.spotShadowMap.length=x,n.spotLightMatrix.length=x+b-P,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=C,N.sunLength=f,N.directionalLength=p,N.pointLength=g,N.spotLength=v,N.rectAreaLength=T,N.hemiLength=y,N.numSunShadows=m,N.numDirectionalShadows=w,N.numPointShadows=E,N.numSpotShadows=x,N.numSpotMaps=b,N.numLightProbes=C,n.version=XS++)}function l(c,h){let d=0,u=0,f=0,m=0,_=0,p=0,g=h.matrixWorldInverse;for(let v=0,T=c.length;v<T;v++){let y=c[v];if(y.isSunLight){let w=n.sun[d];w.direction.setFromMatrixPosition(y.matrixWorld),w.direction.transformDirection(g),d++}else if(y.isDirectionalLight){let w=n.directional[u];w.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(i),w.direction.transformDirection(g),u++}else if(y.isSpotLight){let w=n.spot[m];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(g),w.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(i),w.direction.transformDirection(g),m++}else if(y.isRectAreaLight){let w=n.rectArea[_];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(g),o.identity(),r.copy(y.matrixWorld),r.premultiply(g),o.extractRotation(r),w.halfWidth.set(y.width*.5,0,0),w.halfHeight.set(0,y.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),_++}else if(y.isPointLight){let w=n.point[f];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(g),f++}else if(y.isHemisphereLight){let w=n.hemi[p];w.direction.setFromMatrixPosition(y.matrixWorld),w.direction.transformDirection(g),p++}}}return{setup:a,setupView:l,state:n}}function Sm(s){let t=new YS(s),e=[],n=[],i=[];function r(d){h.camera=d,e.length=0,n.length=0,i.length=0}function o(d){d.isLightProbeGrid?i.push(d):e.push(d)}function a(d){n.push(d)}function l(){t.setup(e),i.sort((d,u)=>d.priority-u.priority||d.id-u.id)}function c(d){t.setupView(e,d)}let h={lightsArray:e,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function ZS(s){let t=new WeakMap;function e(i,r=0){let o=t.get(i),a;return o===void 0?(a=new Sm(s),t.set(i,[a])):r>=o.length?(a=new Sm(s),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var JS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$S=`uniform sampler2D shadow_pass;
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
}`,KS=[new G(1,0,0),new G(-1,0,0),new G(0,1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1)],QS=[new G(0,-1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1),new G(0,-1,0),new G(0,-1,0)],Mm=new Se,Aa=new G,pf=new G;function jS(s,t,e){let n=new Fs,i=new re,r=new re,o=new Ue,a=new jl,l=new tc,c={},h=e.maxTextureSize,d={[Vs]:gn,[gn]:Vs,[Wi]:Wi},u=new Hi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new re},radius:{value:4}},vertexShader:JS,fragmentShader:$S}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let m=new cs;m.setAttribute("position",new Pi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Qe(m,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ga;let g=this.type;this.render=function(E,x,b){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||E.length===0)return;this.type===gp&&(Vt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ga);let P=s.getRenderTarget(),C=s.getActiveCubeFace(),N=s.getActiveMipmapLevel(),D=s.state;D.setBlending(ur),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let W=g!==this.type;W&&x.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(B=>B.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,B=E.length;I<B;I++){let H=E[I],F=H.shadow;if(F===void 0){Vt("WebGLShadowMap:",H,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;i.copy(F.mapSize);let tt=F.getFrameExtents();i.multiply(tt),r.copy(F.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/tt.x),i.x=r.x*tt.x,F.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/tt.y),i.y=r.y*tt.y,F.mapSize.y=r.y));let X=s.state.buffers.depth.getReversed();if(F.camera._reversedDepth=X,F.map===null||W===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===ao){if(H.isPointLight){Vt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new ri(i.x,i.y,{format:Gs,type:Di,minFilter:Fn,magFilter:Fn,generateMipmaps:!1}),F.map.texture.name=H.name+".shadowMap",F.map.depthTexture=new us(i.x,i.y,xi),F.map.depthTexture.name=H.name+".shadowMapDepth",F.map.depthTexture.format=ls,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=fn,F.map.depthTexture.magFilter=fn}else H.isPointLight?(F.map=new Ra(i.x),F.map.depthTexture=new ia(i.x,Li)):(F.map=new ri(i.x,i.y),F.map.depthTexture=new us(i.x,i.y,Li)),F.map.depthTexture.name=H.name+".shadowMap",F.map.depthTexture.format=ls,this.type===ga?(F.map.depthTexture.compareFunction=X?Ku:$u,F.map.depthTexture.minFilter=Fn,F.map.depthTexture.magFilter=Fn):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=fn,F.map.depthTexture.magFilter=fn);F.camera.updateProjectionMatrix()}F.map.isWebGLCubeRenderTarget!==!0&&(F.map.width!==i.x||F.map.height!==i.y)&&F.map.setSize(i.x,i.y);let R=F.map.isWebGLCubeRenderTarget?6:F.getViewportCount();H.isPointLight!==!0&&F.updateMatrices(H,b);let K=(F.camera.layers.mask&4294967294)!==0?F.camera.layers:b.layers;for(let yt=0;yt<R;yt++){let kt=F.getCamera(yt);if(H.isPointLight){let Y=F.camera,ft=F.matrix,xt=H.distance||Y.far;xt!==Y.far&&(Y.far=xt,Y.updateProjectionMatrix()),Aa.setFromMatrixPosition(H.matrixWorld),Y.position.copy(Aa),pf.copy(Y.position),pf.add(KS[yt]),Y.up.copy(QS[yt]),Y.lookAt(pf),Y.updateMatrixWorld(),ft.makeTranslation(-Aa.x,-Aa.y,-Aa.z),Mm.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),F._frustum.setFromProjectionMatrix(Mm,Y.coordinateSystem,Y.reversedDepth)}if(F.map.isWebGLCubeRenderTarget)s.setRenderTarget(F.map,yt),s.clear();else{yt===0&&(s.setRenderTarget(F.map),s.clear());let Y=F.getViewport(yt);o.set(r.x*Y.x,r.y*Y.y,r.x*Y.z,r.y*Y.w),D.viewport(o)}n=F.getFrustum(yt),y(x,b,kt,H,K,this.type)}F.isPointLightShadow!==!0&&this.type===ao&&v(F,b),F.needsUpdate=!1}g=this.type,p.needsUpdate=!1,s.setRenderTarget(P,C,N)};function v(E,x){let b=t.update(_);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null?E.mapPass=new ri(i.x,i.y,{format:Gs,type:Di}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),u.uniforms.shadow_pass.value=E.map.depthTexture,u.uniforms.resolution.value.set(E.map.width,E.map.height),u.uniforms.radius.value=E.radius,s.setRenderTarget(E.mapPass),s.clear(),s.renderBufferDirect(x,null,b,u,_,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value.set(E.map.width,E.map.height),f.uniforms.radius.value=E.radius,s.setRenderTarget(E.map),s.clear(),s.renderBufferDirect(x,null,b,f,_,null)}function T(E,x,b,P){let C=null,N=b.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(N!==void 0)C=N;else if(C=b.isPointLight===!0?l:a,s.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){let D=C.uuid,W=x.uuid,I=c[D];I===void 0&&(I={},c[D]=I);let B=I[W];B===void 0&&(B=C.clone(),I[W]=B,x.addEventListener("dispose",w)),C=B}if(C.visible=x.visible,C.wireframe=x.wireframe,P===ao?C.side=x.shadowSide!==null?x.shadowSide:x.side:C.side=x.shadowSide!==null?x.shadowSide:d[x.side],C.alphaMap=x.alphaMap,C.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,C.map=x.map,C.clipShadows=x.clipShadows,C.clippingPlanes=x.clippingPlanes,C.clipIntersection=x.clipIntersection,C.displacementMap=x.displacementMap,C.displacementScale=x.displacementScale,C.displacementBias=x.displacementBias,C.wireframeLinewidth=x.wireframeLinewidth,C.linewidth=x.linewidth,b.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let D=s.properties.get(C);D.light=b}return C}function y(E,x,b,P,C,N){if(E.visible===!1)return;if(E.layers.test(C)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&N===ao)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,E.matrixWorld);let I=t.update(E),B=E.material;if(Array.isArray(B)){let H=I.groups;for(let F=0,tt=H.length;F<tt;F++){let X=H[F],R=B[X.materialIndex];if(R&&R.visible){let K=T(E,R,P,N);E.onBeforeShadow(s,E,x,b,I,K,X),s.renderBufferDirect(b,null,I,K,E,X),E.onAfterShadow(s,E,x,b,I,K,X)}}}else if(B.visible){let H=T(E,B,P,N);E.onBeforeShadow(s,E,x,b,I,H,null),s.renderBufferDirect(b,null,I,H,E,null),E.onAfterShadow(s,E,x,b,I,H,null)}}let W=E.children;for(let I=0,B=W.length;I<B;I++)y(W[I],x,b,P,C,N)}function w(E){E.target.removeEventListener("dispose",w);for(let b in c){let P=c[b],C=E.target.uuid;C in P&&(P[C].dispose(),delete P[C])}}}function tM(s,t){function e(){let L=!1,Q=new Ue,$=null,pt=new Ue(0,0,0,0);return{setMask:function(ut){$!==ut&&!L&&(s.colorMask(ut,ut,ut,ut),$=ut)},setLocked:function(ut){L=ut},setClear:function(ut,mt,ct,gt,rt){rt===!0&&(ut*=gt,mt*=gt,ct*=gt),Q.set(ut,mt,ct,gt),pt.equals(Q)===!1&&(s.clearColor(ut,mt,ct,gt),pt.copy(Q))},reset:function(){L=!1,$=null,pt.set(-1,0,0,0)}}}function n(){let L=!1,Q=!1,$=null,pt=null,ut=null;return{setReversed:function(mt){if(Q!==mt){let ct=t.get("EXT_clip_control");mt?ct.clipControlEXT(ct.LOWER_LEFT_EXT,ct.ZERO_TO_ONE_EXT):ct.clipControlEXT(ct.LOWER_LEFT_EXT,ct.NEGATIVE_ONE_TO_ONE_EXT),Q=mt;let gt=ut;ut=null,this.setClear(gt)}},getReversed:function(){return Q},setTest:function(mt){mt?dt(s.DEPTH_TEST):Rt(s.DEPTH_TEST)},setMask:function(mt){$!==mt&&!L&&(s.depthMask(mt),$=mt)},setFunc:function(mt){if(Q&&(mt=$p[mt]),pt!==mt){switch(mt){case Nl:s.depthFunc(s.NEVER);break;case Ul:s.depthFunc(s.ALWAYS);break;case Ol:s.depthFunc(s.LESS);break;case jr:s.depthFunc(s.LEQUAL);break;case Fl:s.depthFunc(s.EQUAL);break;case Bl:s.depthFunc(s.GEQUAL);break;case zl:s.depthFunc(s.GREATER);break;case kl:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}pt=mt}},setLocked:function(mt){L=mt},setClear:function(mt){ut!==mt&&(ut=mt,Q&&(mt=1-mt),s.clearDepth(mt))},reset:function(){L=!1,$=null,pt=null,ut=null,Q=!1}}}function i(){let L=!1,Q=null,$=null,pt=null,ut=null,mt=null,ct=null,gt=null,rt=null;return{setTest:function(it){L||(it?dt(s.STENCIL_TEST):Rt(s.STENCIL_TEST))},setMask:function(it){Q!==it&&!L&&(s.stencilMask(it),Q=it)},setFunc:function(it,_t,st){($!==it||pt!==_t||ut!==st)&&(s.stencilFunc(it,_t,st),$=it,pt=_t,ut=st)},setOp:function(it,_t,st){(mt!==it||ct!==_t||gt!==st)&&(s.stencilOp(it,_t,st),mt=it,ct=_t,gt=st)},setLocked:function(it){L=it},setClear:function(it){rt!==it&&(s.clearStencil(it),rt=it)},reset:function(){L=!1,Q=null,$=null,pt=null,ut=null,mt=null,ct=null,gt=null,rt=null}}}let r=new e,o=new n,a=new i,l={},c=new WeakMap,h={},d={},u={},f=new WeakMap,m=[],_=null,p=!1,g=null,v=null,T=null,y=null,w=null,E=null,x=null,b=new Jt(0,0,0),P=0,C=!1,N=null,D=null,W=null,I=null,B=null,H=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),F=!1,tt=0,X=s.getParameter(s.VERSION);X.indexOf("WebGL")!==-1?(tt=parseFloat(/^WebGL (\d)/.exec(X)[1]),F=tt>=1):X.indexOf("OpenGL ES")!==-1&&(tt=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),F=tt>=2);let R=null,K={},yt=s.getParameter(s.SCISSOR_BOX),kt=s.getParameter(s.VIEWPORT),Y=new Ue().fromArray(yt),ft=new Ue().fromArray(kt);function xt(L,Q,$,pt){let ut=new Uint8Array(4),mt=s.createTexture();s.bindTexture(L,mt),s.texParameteri(L,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(L,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ct=0;ct<$;ct++)L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY?s.texImage3D(Q,0,s.RGBA,1,1,pt,0,s.RGBA,s.UNSIGNED_BYTE,ut):s.texImage2D(Q+ct,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ut);return mt}let Mt={};Mt[s.TEXTURE_2D]=xt(s.TEXTURE_2D,s.TEXTURE_2D,1),Mt[s.TEXTURE_CUBE_MAP]=xt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Mt[s.TEXTURE_2D_ARRAY]=xt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Mt[s.TEXTURE_3D]=xt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),dt(s.DEPTH_TEST),o.setFunc(jr),Z(!1),$t(Iu),dt(s.CULL_FACE),jt(ur);function dt(L){h[L]!==!0&&(s.enable(L),h[L]=!0)}function Rt(L){h[L]!==!1&&(s.disable(L),h[L]=!1)}function pe(L,Q){return u[L]!==Q?(s.bindFramebuffer(L,Q),u[L]=Q,L===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=Q),L===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=Q),!0):!1}function Ct(L,Q){let $=m,pt=!1;if(L){$=f.get(Q),$===void 0&&($=[],f.set(Q,$));let ut=L.textures;if($.length!==ut.length||$[0]!==s.COLOR_ATTACHMENT0){for(let mt=0,ct=ut.length;mt<ct;mt++)$[mt]=s.COLOR_ATTACHMENT0+mt;$.length=ut.length,pt=!0}}else $[0]!==s.BACK&&($[0]=s.BACK,pt=!0);pt&&s.drawBuffers($)}function Gt(L){return _!==L?(s.useProgram(L),_=L,!0):!1}let It={[fr]:s.FUNC_ADD,[xp]:s.FUNC_SUBTRACT,[vp]:s.FUNC_REVERSE_SUBTRACT};It[yp]=s.MIN,It[Sp]=s.MAX;let Ft={[Mp]:s.ZERO,[bp]:s.ONE,[Tp]:s.SRC_COLOR,[Uu]:s.SRC_ALPHA,[Pp]:s.SRC_ALPHA_SATURATE,[Cp]:s.DST_COLOR,[Ep]:s.DST_ALPHA,[wp]:s.ONE_MINUS_SRC_COLOR,[Ou]:s.ONE_MINUS_SRC_ALPHA,[Rp]:s.ONE_MINUS_DST_COLOR,[Ap]:s.ONE_MINUS_DST_ALPHA,[Ip]:s.CONSTANT_COLOR,[Lp]:s.ONE_MINUS_CONSTANT_COLOR,[Dp]:s.CONSTANT_ALPHA,[Np]:s.ONE_MINUS_CONSTANT_ALPHA};function jt(L,Q,$,pt,ut,mt,ct,gt,rt,it){if(L===ur){p===!0&&(Rt(s.BLEND),p=!1);return}if(p===!1&&(dt(s.BLEND),p=!0),L!==_p){if(L!==g||it!==C){if((v!==fr||w!==fr)&&(s.blendEquation(s.FUNC_ADD),v=fr,w=fr),it)switch(L){case lo:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Lu:s.blendFunc(s.ONE,s.ONE);break;case Du:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Nu:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Ht("WebGLState: Invalid blending: ",L);break}else switch(L){case lo:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Lu:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Du:Ht("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Nu:Ht("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ht("WebGLState: Invalid blending: ",L);break}T=null,y=null,E=null,x=null,b.set(0,0,0),P=0,g=L,C=it}return}ut=ut||Q,mt=mt||$,ct=ct||pt,(Q!==v||ut!==w)&&(s.blendEquationSeparate(It[Q],It[ut]),v=Q,w=ut),($!==T||pt!==y||mt!==E||ct!==x)&&(s.blendFuncSeparate(Ft[$],Ft[pt],Ft[mt],Ft[ct]),T=$,y=pt,E=mt,x=ct),(gt.equals(b)===!1||rt!==P)&&(s.blendColor(gt.r,gt.g,gt.b,rt),b.copy(gt),P=rt),g=L,C=!1}function ce(L,Q){L.side===Wi?Rt(s.CULL_FACE):dt(s.CULL_FACE);let $=L.side===gn;Q&&($=!$),Z($),L.blending===lo&&L.transparent===!1?jt(ur):jt(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),o.setFunc(L.depthFunc),o.setTest(L.depthTest),o.setMask(L.depthWrite),r.setMask(L.colorWrite);let pt=L.stencilWrite;a.setTest(pt),pt&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),ge(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?dt(s.SAMPLE_ALPHA_TO_COVERAGE):Rt(s.SAMPLE_ALPHA_TO_COVERAGE)}function Z(L){N!==L&&(L?s.frontFace(s.CW):s.frontFace(s.CCW),N=L)}function $t(L){L!==pp?(dt(s.CULL_FACE),L!==D&&(L===Iu?s.cullFace(s.BACK):L===mp?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Rt(s.CULL_FACE),D=L}function Ve(L){L!==W&&(F&&s.lineWidth(L),W=L)}function ge(L,Q,$){L?(dt(s.POLYGON_OFFSET_FILL),(I!==Q||B!==$)&&(I=Q,B=$,o.getReversed()&&(Q=-Q,$=-$),s.polygonOffset(Q,$))):Rt(s.POLYGON_OFFSET_FILL)}function ne(L){L?dt(s.SCISSOR_TEST):Rt(s.SCISSOR_TEST)}function Ie(L){L===void 0&&(L=s.TEXTURE0+H-1),R!==L&&(s.activeTexture(L),R=L)}function Te(L,Q,$){$===void 0&&(R===null?$=s.TEXTURE0+H-1:$=R);let pt=K[$];pt===void 0&&(pt={type:void 0,texture:void 0},K[$]=pt),(pt.type!==L||pt.texture!==Q)&&(R!==$&&(s.activeTexture($),R=$),s.bindTexture(L,Q||Mt[L]),pt.type=L,pt.texture=Q)}function O(){let L=K[R];L!==void 0&&L.type!==void 0&&(s.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function ue(){try{s.compressedTexImage2D(...arguments)}catch(L){Ht("WebGLState:",L)}}function bt(){try{s.compressedTexImage3D(...arguments)}catch(L){Ht("WebGLState:",L)}}function Dt(){try{s.texSubImage2D(...arguments)}catch(L){Ht("WebGLState:",L)}}function ot(){try{s.texSubImage3D(...arguments)}catch(L){Ht("WebGLState:",L)}}function Xt(){try{s.compressedTexSubImage2D(...arguments)}catch(L){Ht("WebGLState:",L)}}function wt(){try{s.compressedTexSubImage3D(...arguments)}catch(L){Ht("WebGLState:",L)}}function Nt(){try{s.texStorage2D(...arguments)}catch(L){Ht("WebGLState:",L)}}function A(){try{s.texStorage3D(...arguments)}catch(L){Ht("WebGLState:",L)}}function S(){try{s.texImage2D(...arguments)}catch(L){Ht("WebGLState:",L)}}function z(){try{s.texImage3D(...arguments)}catch(L){Ht("WebGLState:",L)}}function at(L){return d[L]!==void 0?d[L]:s.getParameter(L)}function et(L,Q){d[L]!==Q&&(s.pixelStorei(L,Q),d[L]=Q)}function ht(L){Y.equals(L)===!1&&(s.scissor(L.x,L.y,L.z,L.w),Y.copy(L))}function nt(L){ft.equals(L)===!1&&(s.viewport(L.x,L.y,L.z,L.w),ft.copy(L))}function k(L,Q){let $=c.get(Q);$===void 0&&($=new WeakMap,c.set(Q,$));let pt=$.get(L);pt===void 0&&(pt=s.getUniformBlockIndex(Q,L.name),s.uniformBlockBinding(Q,pt,pt),$.set(L,pt))}function j(L,Q,$){let ut=c.get(Q).get(L);l[ut]!==$&&(s.bindBufferBase(s.UNIFORM_BUFFER,ut,$),l[ut]=$)}function lt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},d={},R=null,K={},u={},l={},f=new WeakMap,m=[],_=null,p=!1,g=null,v=null,T=null,y=null,w=null,E=null,x=null,b=new Jt(0,0,0),P=0,C=!1,N=null,D=null,W=null,I=null,B=null,Y.set(0,0,s.canvas.width,s.canvas.height),ft.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:dt,disable:Rt,bindFramebuffer:pe,drawBuffers:Ct,useProgram:Gt,setBlending:jt,setMaterial:ce,setFlipSided:Z,setCullFace:$t,setLineWidth:Ve,setPolygonOffset:ge,setScissorTest:ne,activeTexture:Ie,bindTexture:Te,unbindTexture:O,compressedTexImage2D:ue,compressedTexImage3D:bt,texImage2D:S,texImage3D:z,pixelStorei:et,getParameter:at,updateUBOMapping:k,uniformBlockBinding:j,texStorage2D:Nt,texStorage3D:A,texSubImage2D:Dt,texSubImage3D:ot,compressedTexSubImage2D:Xt,compressedTexSubImage3D:wt,scissor:ht,viewport:nt,reset:lt}}function eM(s,t,e,n,i,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new re,h=new WeakMap,d=new Set,u,f=new WeakMap,m=new Set,_=new FinalizationRegistry(A=>m.delete(A)),p=!1;try{p=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,S){return p?new OffscreenCanvas(A,S):Jo("canvas")}function v(A,S,z){let at=1,et=Nt(A);if((et.width>z||et.height>z)&&(at=z/Math.max(et.width,et.height)),at<1)if(typeof HTMLImageElement!="undefined"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&A instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&A instanceof ImageBitmap||typeof VideoFrame!="undefined"&&A instanceof VideoFrame){let ht=Math.floor(at*et.width),nt=Math.floor(at*et.height);u===void 0&&(u=g(ht,nt));let k=S?g(ht,nt):u;return k.width=ht,k.height=nt,k.getContext("2d").drawImage(A,0,0,ht,nt),Vt("WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+ht+"x"+nt+")."),k}else return"data"in A&&Vt("WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),A;return A}function T(A){return A.generateMipmaps}function y(A){s.generateMipmap(A)}function w(A){return A.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?s.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function E(A,S,z,at,et,ht=!1){if(A!==null){if(s[A]!==void 0)return s[A];Vt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let nt;at&&(nt=t.get("EXT_texture_norm16"),nt||Vt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let k=S;if(S===s.RED&&(z===s.FLOAT&&(k=s.R32F),z===s.HALF_FLOAT&&(k=s.R16F),z===s.UNSIGNED_BYTE&&(k=s.R8),z===s.UNSIGNED_SHORT&&nt&&(k=nt.R16_EXT),z===s.SHORT&&nt&&(k=nt.R16_SNORM_EXT)),S===s.RED_INTEGER&&(z===s.UNSIGNED_BYTE&&(k=s.R8UI),z===s.UNSIGNED_SHORT&&(k=s.R16UI),z===s.UNSIGNED_INT&&(k=s.R32UI),z===s.BYTE&&(k=s.R8I),z===s.SHORT&&(k=s.R16I),z===s.INT&&(k=s.R32I)),S===s.RG&&(z===s.FLOAT&&(k=s.RG32F),z===s.HALF_FLOAT&&(k=s.RG16F),z===s.UNSIGNED_BYTE&&(k=s.RG8),z===s.UNSIGNED_SHORT&&nt&&(k=nt.RG16_EXT),z===s.SHORT&&nt&&(k=nt.RG16_SNORM_EXT)),S===s.RG_INTEGER&&(z===s.UNSIGNED_BYTE&&(k=s.RG8UI),z===s.UNSIGNED_SHORT&&(k=s.RG16UI),z===s.UNSIGNED_INT&&(k=s.RG32UI),z===s.BYTE&&(k=s.RG8I),z===s.SHORT&&(k=s.RG16I),z===s.INT&&(k=s.RG32I)),S===s.RGB_INTEGER&&(z===s.UNSIGNED_BYTE&&(k=s.RGB8UI),z===s.UNSIGNED_SHORT&&(k=s.RGB16UI),z===s.UNSIGNED_INT&&(k=s.RGB32UI),z===s.BYTE&&(k=s.RGB8I),z===s.SHORT&&(k=s.RGB16I),z===s.INT&&(k=s.RGB32I)),S===s.RGBA_INTEGER&&(z===s.UNSIGNED_BYTE&&(k=s.RGBA8UI),z===s.UNSIGNED_SHORT&&(k=s.RGBA16UI),z===s.UNSIGNED_INT&&(k=s.RGBA32UI),z===s.BYTE&&(k=s.RGBA8I),z===s.SHORT&&(k=s.RGBA16I),z===s.INT&&(k=s.RGBA32I)),S===s.RGB&&(z===s.UNSIGNED_SHORT&&nt&&(k=nt.RGB16_EXT),z===s.SHORT&&nt&&(k=nt.RGB16_SNORM_EXT),z===s.UNSIGNED_INT_5_9_9_9_REV&&(k=s.RGB9_E5),z===s.UNSIGNED_INT_10F_11F_11F_REV&&(k=s.R11F_G11F_B10F)),S===s.RGBA){let j=ht?Zo:le.getTransfer(et);z===s.FLOAT&&(k=s.RGBA32F),z===s.HALF_FLOAT&&(k=s.RGBA16F),z===s.UNSIGNED_BYTE&&(k=j===xe?s.SRGB8_ALPHA8:s.RGBA8),z===s.UNSIGNED_SHORT&&nt&&(k=nt.RGBA16_EXT),z===s.SHORT&&nt&&(k=nt.RGBA16_SNORM_EXT),z===s.UNSIGNED_SHORT_4_4_4_4&&(k=s.RGBA4),z===s.UNSIGNED_SHORT_5_5_5_1&&(k=s.RGB5_A1)}return(k===s.R16F||k===s.R32F||k===s.RG16F||k===s.RG32F||k===s.RGBA16F||k===s.RGBA32F)&&t.get("EXT_color_buffer_float"),k}function x(A,S){let z;return A?S===null||S===Li||S===pr?z=s.DEPTH24_STENCIL8:S===xi?z=s.DEPTH32F_STENCIL8:S===ho&&(z=s.DEPTH24_STENCIL8,Vt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Li||S===pr?z=s.DEPTH_COMPONENT24:S===xi?z=s.DEPTH_COMPONENT32F:S===ho&&(z=s.DEPTH_COMPONENT16),z}function b(A,S){return T(A)===!0||A.isFramebufferTexture&&A.minFilter!==fn&&A.minFilter!==Fn?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function P(A){let S=new WeakRef(A);n.get(A).__ref=S,m.add(S),_.register(A,S,S)}function C(A){let S=n.get(A).__ref;S!==void 0&&(m.delete(S),_.unregister(S))}function N(A){W(A.target)}function D(A){I(A.target)}function W(A){A.removeEventListener("dispose",N),C(A),H(A),A.isVideoTexture&&h.delete(A),A.isHTMLTexture&&d.delete(A)}function I(A){A.removeEventListener("dispose",D),C(A),tt(A)}function B(){for(let A of m){let S=A.deref();S!==void 0&&(S.isRenderTarget===!0?I(S):W(S))}m.clear(),d.clear()}function H(A){let S=n.get(A);if(S.__webglInit===void 0)return;let z=A.source,at=f.get(z);if(at){let et=at[S.__cacheKey];et.usedTimes--,et.usedTimes===0&&F(A),Object.keys(at).length===0&&f.delete(z)}n.remove(A)}function F(A){let S=n.get(A);s.deleteTexture(S.__webglTexture);let z=A.source,at=f.get(z);delete at[S.__cacheKey],o.memory.textures--}function tt(A){let S=n.get(A);S.__depthDisposeCallback&&S.__depthDisposeCallback();let z=A.depthTexture;if(z&&z.renderTarget===A&&W(z),A.isWebGLCubeRenderTarget)for(let et=0;et<6;et++){if(Array.isArray(S.__webglFramebuffer[et]))for(let ht=0;ht<S.__webglFramebuffer[et].length;ht++)s.deleteFramebuffer(S.__webglFramebuffer[et][ht]);else s.deleteFramebuffer(S.__webglFramebuffer[et]);S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer[et])}else{if(Array.isArray(S.__webglFramebuffer))for(let et=0;et<S.__webglFramebuffer.length;et++)s.deleteFramebuffer(S.__webglFramebuffer[et]);else s.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&s.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let et=0;et<S.__webglColorRenderbuffer.length;et++)S.__webglColorRenderbuffer[et]&&s.deleteRenderbuffer(S.__webglColorRenderbuffer[et]);S.__webglDepthRenderbuffer&&s.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let at=A.textures;for(let et=0,ht=at.length;et<ht;et++){let nt=n.get(at[et]);nt.__webglTexture&&(s.deleteTexture(nt.__webglTexture),o.memory.textures--),n.remove(at[et])}n.remove(A)}let X=0;function R(){X=0}function K(){return X}function yt(A){X=A}function kt(){let A=X;return A>=i.maxTextures&&Vt("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+i.maxTextures),X+=1,A}function Y(A){let S=[];return S.push(A.wrapS),S.push(A.wrapT),S.push(A.wrapR||0),S.push(A.magFilter),S.push(A.minFilter),S.push(A.anisotropy),S.push(A.internalFormat),S.push(A.format),S.push(A.type),S.push(A.generateMipmaps),S.push(A.mipmapsAutoUpdate),S.push(A.premultiplyAlpha),S.push(A.flipY),S.push(A.unpackAlignment),S.push(A.colorSpace),S.join()}function ft(A,S){let z=n.get(A);if(A.isVideoTexture&&Xt(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&z.__version!==A.version){let at=A.image;if(at===null)Vt("WebGLRenderer: Texture marked for update but no image data found.");else if(at.complete===!1)Vt("WebGLRenderer: Texture marked for update but image is incomplete");else{ce(z,A,S);return}}else A.isExternalTexture&&(z.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,z.__webglTexture,s.TEXTURE0+S)}function xt(A,S){let z=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&z.__version!==A.version){ce(z,A,S);return}else A.isExternalTexture&&(z.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(s.TEXTURE_2D_ARRAY,z.__webglTexture,s.TEXTURE0+S)}function Mt(A,S){let z=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&z.__version!==A.version){ce(z,A,S);return}e.bindTexture(s.TEXTURE_3D,z.__webglTexture,s.TEXTURE0+S)}function dt(A,S){let z=n.get(A);if(A.version>0&&z.__version!==A.version){Z(z,A,S);return}e.bindTexture(s.TEXTURE_CUBE_MAP,z.__webglTexture,s.TEXTURE0+S)}let Rt={[Vl]:s.REPEAT,[zi]:s.CLAMP_TO_EDGE,[Gl]:s.MIRRORED_REPEAT},pe={[fn]:s.NEAREST,[Fp]:s.NEAREST_MIPMAP_NEAREST,[xa]:s.NEAREST_MIPMAP_LINEAR,[Fn]:s.LINEAR,[gc]:s.LINEAR_MIPMAP_NEAREST,[fs]:s.LINEAR_MIPMAP_LINEAR},Ct={[Vp]:s.NEVER,[Qu]:s.ALWAYS,[Gp]:s.LESS,[$u]:s.LEQUAL,[Hp]:s.EQUAL,[Ku]:s.GEQUAL,[Wp]:s.GREATER,[Xp]:s.NOTEQUAL};function Gt(A,S){if(S.type===xi&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===Fn||S.magFilter===gc||S.magFilter===xa||S.magFilter===fs||S.minFilter===Fn||S.minFilter===gc||S.minFilter===xa||S.minFilter===fs)&&Vt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(A,s.TEXTURE_WRAP_S,Rt[S.wrapS]),s.texParameteri(A,s.TEXTURE_WRAP_T,Rt[S.wrapT]),(A===s.TEXTURE_3D||A===s.TEXTURE_2D_ARRAY)&&s.texParameteri(A,s.TEXTURE_WRAP_R,Rt[S.wrapR]),s.texParameteri(A,s.TEXTURE_MAG_FILTER,pe[S.magFilter]),s.texParameteri(A,s.TEXTURE_MIN_FILTER,pe[S.minFilter]),S.compareFunction&&(s.texParameteri(A,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(A,s.TEXTURE_COMPARE_FUNC,Ct[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===fn||S.minFilter!==xa&&S.minFilter!==fs||S.type===xi&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){let z=t.get("EXT_texture_filter_anisotropic");s.texParameterf(A,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function It(A,S){let z=!1;A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener("dispose",N),P(S));let at=S.source,et=f.get(at);et===void 0&&(et={},f.set(at,et));let ht=Y(S);if(ht!==A.__cacheKey){et[ht]===void 0&&(et[ht]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,z=!0),et[ht].usedTimes++;let nt=et[A.__cacheKey];nt!==void 0&&(et[A.__cacheKey].usedTimes--,nt.usedTimes===0&&F(S)),A.__cacheKey=ht,A.__webglTexture=et[ht].texture}return z}function Ft(A,S,z){return Math.floor(Math.floor(A/z)/S)}function jt(A,S,z,at){let ht=A.updateRanges;if(ht.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,S.width,S.height,z,at,S.data);else{ht.sort((L,Q)=>L.start-Q.start);let nt=0;for(let L=1;L<ht.length;L++){let Q=ht[nt],$=ht[L],pt=Q.start+Q.count,ut=Ft($.start,S.width,4),mt=Ft(Q.start,S.width,4);$.start<=pt+1&&ut===mt&&Ft($.start+$.count-1,S.width,4)===ut?Q.count=Math.max(Q.count,$.start+$.count-Q.start):(++nt,ht[nt]=$)}ht.length=nt+1;let k=e.getParameter(s.UNPACK_ROW_LENGTH),j=e.getParameter(s.UNPACK_SKIP_PIXELS),lt=e.getParameter(s.UNPACK_SKIP_ROWS);e.pixelStorei(s.UNPACK_ROW_LENGTH,S.width);for(let L=0,Q=ht.length;L<Q;L++){let $=ht[L],pt=Math.floor($.start/4),ut=Math.ceil($.count/4),mt=pt%S.width,ct=Math.floor(pt/S.width),gt=ut,rt=1;e.pixelStorei(s.UNPACK_SKIP_PIXELS,mt),e.pixelStorei(s.UNPACK_SKIP_ROWS,ct),e.texSubImage2D(s.TEXTURE_2D,0,mt,ct,gt,rt,z,at,S.data)}A.clearUpdateRanges(),e.pixelStorei(s.UNPACK_ROW_LENGTH,k),e.pixelStorei(s.UNPACK_SKIP_PIXELS,j),e.pixelStorei(s.UNPACK_SKIP_ROWS,lt)}}function ce(A,S,z){let at=s.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(at=s.TEXTURE_2D_ARRAY),S.isData3DTexture&&(at=s.TEXTURE_3D);let et=It(A,S),ht=S.source;e.bindTexture(at,A.__webglTexture,s.TEXTURE0+z);let nt=n.get(ht);if(ht.version!==nt.__version||et===!0){if(e.activeTexture(s.TEXTURE0+z),(typeof ImageBitmap!="undefined"&&S.image instanceof ImageBitmap)===!1){let rt=le.getPrimaries(le.workingColorSpace),it=S.colorSpace===ps?null:le.getPrimaries(S.colorSpace),_t=S.colorSpace===ps||rt===it?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,_t)}e.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment);let j=v(S.image,!1,i.maxTextureSize);j=wt(S,j);let lt=r.convert(S.format,S.colorSpace),L=r.convert(S.type),Q=E(S.internalFormat,lt,L,S.normalized,S.colorSpace,S.isVideoTexture);Gt(at,S);let $,pt=S.mipmaps,ut=S.isVideoTexture!==!0,mt=nt.__version===void 0||et===!0,ct=ht.dataReady,gt=b(S,j);if(S.isDepthTexture)Q=x(S.format===ds,S.type),mt&&(ut?e.texStorage2D(s.TEXTURE_2D,1,Q,j.width,j.height):e.texImage2D(s.TEXTURE_2D,0,Q,j.width,j.height,0,lt,L,null));else if(S.isDataTexture)if(pt.length>0){ut&&mt&&e.texStorage2D(s.TEXTURE_2D,gt,Q,pt[0].width,pt[0].height);for(let rt=0,it=pt.length;rt<it;rt++)$=pt[rt],ut?ct&&e.texSubImage2D(s.TEXTURE_2D,rt,0,0,$.width,$.height,lt,L,$.data):e.texImage2D(s.TEXTURE_2D,rt,Q,$.width,$.height,0,lt,L,$.data);S.generateMipmaps=!1}else ut?(mt&&e.texStorage2D(s.TEXTURE_2D,gt,Q,j.width,j.height),ct&&jt(S,j,lt,L)):e.texImage2D(s.TEXTURE_2D,0,Q,j.width,j.height,0,lt,L,j.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){ut&&mt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,gt,Q,pt[0].width,pt[0].height,j.depth);for(let rt=0,it=pt.length;rt<it;rt++)if($=pt[rt],S.format!==Ni)if(lt!==null)if(ut){if(ct)if(S.layerUpdates.size>0){let _t=af($.width,$.height,S.format,S.type);for(let st of S.layerUpdates){let Et=$.data.subarray(st*_t/$.data.BYTES_PER_ELEMENT,(st+1)*_t/$.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,rt,0,0,st,$.width,$.height,1,lt,Et)}}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,rt,0,0,0,$.width,$.height,j.depth,lt,$.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,rt,Q,$.width,$.height,j.depth,0,$.data,0,0);else Vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ut?ct&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,rt,0,0,0,$.width,$.height,j.depth,lt,L,$.data):e.texImage3D(s.TEXTURE_2D_ARRAY,rt,Q,$.width,$.height,j.depth,0,lt,L,$.data);S.layerUpdates.size>0&&S.clearLayerUpdates()}else{ut&&mt&&e.texStorage2D(s.TEXTURE_2D,gt,Q,pt[0].width,pt[0].height);for(let rt=0,it=pt.length;rt<it;rt++)$=pt[rt],S.format!==Ni?lt!==null?ut?ct&&e.compressedTexSubImage2D(s.TEXTURE_2D,rt,0,0,$.width,$.height,lt,$.data):e.compressedTexImage2D(s.TEXTURE_2D,rt,Q,$.width,$.height,0,$.data):Vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ut?ct&&e.texSubImage2D(s.TEXTURE_2D,rt,0,0,$.width,$.height,lt,L,$.data):e.texImage2D(s.TEXTURE_2D,rt,Q,$.width,$.height,0,lt,L,$.data)}else if(S.isDataArrayTexture)if(ut){if(mt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,gt,Q,j.width,j.height,j.depth),ct)if(S.layerUpdates.size>0){let rt=af(j.width,j.height,S.format,S.type);for(let it of S.layerUpdates){let _t=j.data.subarray(it*rt/j.data.BYTES_PER_ELEMENT,(it+1)*rt/j.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,it,j.width,j.height,1,lt,L,_t)}S.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,lt,L,j.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Q,j.width,j.height,j.depth,0,lt,L,j.data);else if(S.isData3DTexture)ut?(mt&&e.texStorage3D(s.TEXTURE_3D,gt,Q,j.width,j.height,j.depth),ct&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,lt,L,j.data)):e.texImage3D(s.TEXTURE_3D,0,Q,j.width,j.height,j.depth,0,lt,L,j.data);else if(S.isFramebufferTexture){if(mt)if(ut)e.texStorage2D(s.TEXTURE_2D,gt,Q,j.width,j.height);else{let rt=j.width,it=j.height;for(let _t=0;_t<gt;_t++)e.texImage2D(s.TEXTURE_2D,_t,Q,rt,it,0,lt,L,null),rt>>=1,it>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in s){let rt=s.canvas;if(rt.hasAttribute("layoutsubtree")||rt.setAttribute("layoutsubtree","true"),j.parentNode!==rt){rt.appendChild(j),d.add(S),rt.onpaint=it=>{let _t=it.changedElements;for(let st of d)_t.includes(st.image)&&(st.needsUpdate=!0)},rt.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,j);else{let _t=s.RGBA,st=s.RGBA,Et=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,_t,st,Et,j)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(pt.length>0){if(ut&&mt){let rt=Nt(pt[0]);e.texStorage2D(s.TEXTURE_2D,gt,Q,rt.width,rt.height)}for(let rt=0,it=pt.length;rt<it;rt++)$=pt[rt],ut?ct&&e.texSubImage2D(s.TEXTURE_2D,rt,0,0,lt,L,$):e.texImage2D(s.TEXTURE_2D,rt,Q,lt,L,$);S.generateMipmaps=!1}else if(ut){if(mt){let rt=Nt(j);e.texStorage2D(s.TEXTURE_2D,gt,Q,rt.width,rt.height)}ct&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,lt,L,j)}else e.texImage2D(s.TEXTURE_2D,0,Q,lt,L,j);T(S)&&S.mipmapsAutoUpdate===!0&&y(at),nt.__version=ht.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function Z(A,S,z){if(S.image.length!==6)return;let at=It(A,S),et=S.source;e.bindTexture(s.TEXTURE_CUBE_MAP,A.__webglTexture,s.TEXTURE0+z);let ht=n.get(et);if(et.version!==ht.__version||at===!0){e.activeTexture(s.TEXTURE0+z);let nt=le.getPrimaries(le.workingColorSpace),k=S.colorSpace===ps?null:le.getPrimaries(S.colorSpace),j=S.colorSpace===ps||nt===k?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,j);let lt=S.isCompressedTexture||S.image[0].isCompressedTexture,L=S.image[0]&&S.image[0].isDataTexture,Q=[];for(let st=0;st<6;st++)!lt&&!L?Q[st]=v(S.image[st],!0,i.maxCubemapSize):Q[st]=L?S.image[st].image:S.image[st],Q[st]=wt(S,Q[st]);let $=Q[0],pt=r.convert(S.format,S.colorSpace),ut=r.convert(S.type),mt=E(S.internalFormat,pt,ut,S.normalized,S.colorSpace),ct=S.isVideoTexture!==!0,gt=ht.__version===void 0||at===!0,rt=et.dataReady,it=b(S,$);Gt(s.TEXTURE_CUBE_MAP,S);let _t;if(S.isDepthTexture){if(mt=x(S.format===ds,S.type),gt)if(ct)e.texStorage2D(s.TEXTURE_CUBE_MAP,1,mt,$.width,$.height);else for(let st=0;st<6;st++)e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,mt,$.width,$.height,0,pt,ut,null)}else if(lt){ct&&gt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,it,mt,$.width,$.height);for(let st=0;st<6;st++){_t=Q[st].mipmaps;for(let Et=0;Et<_t.length;Et++){let ie=_t[Et];S.format!==Ni?pt!==null?ct?rt&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,Et,0,0,ie.width,ie.height,pt,ie.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,Et,mt,ie.width,ie.height,0,ie.data):Vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ct?rt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,Et,0,0,ie.width,ie.height,pt,ut,ie.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,Et,mt,ie.width,ie.height,0,pt,ut,ie.data)}}}else{if(_t=S.mipmaps,ct&&gt){_t.length>0&&it++;let st=Nt(Q[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,it,mt,st.width,st.height)}for(let st=0;st<6;st++)if(L){ct?rt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,Q[st].width,Q[st].height,pt,ut,Q[st].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,mt,Q[st].width,Q[st].height,0,pt,ut,Q[st].data);for(let Et=0;Et<_t.length;Et++){let qt=_t[Et].image[st].image;ct?rt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,Et+1,0,0,qt.width,qt.height,pt,ut,qt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,Et+1,mt,qt.width,qt.height,0,pt,ut,qt.data)}}else{ct?rt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,pt,ut,Q[st]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,mt,pt,ut,Q[st]);for(let Et=0;Et<_t.length;Et++){let ie=_t[Et];ct?rt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,Et+1,0,0,pt,ut,ie.image[st]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,Et+1,mt,pt,ut,ie.image[st])}}}T(S)&&S.mipmapsAutoUpdate===!0&&y(s.TEXTURE_CUBE_MAP),ht.__version=et.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function $t(A,S,z,at,et,ht){let nt=r.convert(z.format,z.colorSpace),k=r.convert(z.type),j=E(z.internalFormat,nt,k,z.normalized,z.colorSpace),lt=n.get(S),L=n.get(z);if(L.__renderTarget=S,!lt.__hasExternalTextures){let Q=Math.max(1,S.width>>ht),$=Math.max(1,S.height>>ht);et===s.TEXTURE_3D||et===s.TEXTURE_2D_ARRAY?e.texImage3D(et,ht,j,Q,$,S.depth,0,nt,k,null):e.texImage2D(et,ht,j,Q,$,0,nt,k,null)}e.bindFramebuffer(s.FRAMEBUFFER,A),ot(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,at,et,L.__webglTexture,0,Dt(S)):(et===s.TEXTURE_2D||et>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,at,et,L.__webglTexture,ht),e.bindFramebuffer(s.FRAMEBUFFER,null)}function Ve(A,S,z){if(s.bindRenderbuffer(s.RENDERBUFFER,A),S.depthBuffer){let at=S.depthTexture,et=at&&at.isDepthTexture?at.type:null,ht=x(S.stencilBuffer,et),nt=S.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;ot(S)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Dt(S),ht,S.width,S.height):z?s.renderbufferStorageMultisample(s.RENDERBUFFER,Dt(S),ht,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,ht,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,nt,s.RENDERBUFFER,A)}else{let at=S.textures;for(let et=0;et<at.length;et++){let ht=at[et],nt=r.convert(ht.format,ht.colorSpace),k=r.convert(ht.type),j=E(ht.internalFormat,nt,k,ht.normalized,ht.colorSpace);ot(S)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Dt(S),j,S.width,S.height):z?s.renderbufferStorageMultisample(s.RENDERBUFFER,Dt(S),j,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,j,S.width,S.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ge(A,S,z){let at=S.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(s.FRAMEBUFFER,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let et=n.get(S.depthTexture);et.__renderTarget=S;let ht=at?S.depthTexture.image[0]:S.depthTexture.image;(!et.__webglTexture||ht.width!==S.width||ht.height!==S.height)&&(ht.width=S.width,ht.height=S.height,S.depthTexture.needsUpdate=!0),at?dt(S.depthTexture,0):ft(S.depthTexture,0);let nt=et.__webglTexture,k=Dt(S),j=at?s.TEXTURE_CUBE_MAP_POSITIVE_X+z:s.TEXTURE_2D,lt=S.depthTexture.format===ds?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(S.depthTexture.format===ls)ot(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,lt,j,nt,0,k):s.framebufferTexture2D(s.FRAMEBUFFER,lt,j,nt,0);else if(S.depthTexture.format===ds)ot(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,lt,j,nt,0,k):s.framebufferTexture2D(s.FRAMEBUFFER,lt,j,nt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ne(A){let S=n.get(A),z=A.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==A.depthTexture){let at=A.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),at){let et=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,at.removeEventListener("dispose",et)};at.addEventListener("dispose",et),S.__depthDisposeCallback=et}S.__boundDepthTexture=at}if(A.depthTexture&&!S.__autoAllocateDepthBuffer)if(z)for(let at=0;at<6;at++)ge(S.__webglFramebuffer[at],A,at);else A.texture.mipmaps.length>0?ge(S.__webglFramebuffer[0],A,0):ge(S.__webglFramebuffer,A,0);else if(z){S.__webglDepthbuffer=[];for(let at=0;at<6;at++)if(e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[at]),S.__webglDepthbuffer[at]===void 0)S.__webglDepthbuffer[at]=s.createRenderbuffer(),Ve(S.__webglDepthbuffer[at],A,!1);else{let et=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ht=S.__webglDepthbuffer[at];s.bindRenderbuffer(s.RENDERBUFFER,ht),s.framebufferRenderbuffer(s.FRAMEBUFFER,et,s.RENDERBUFFER,ht)}}else if(A.texture.mipmaps.length>0?e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=s.createRenderbuffer(),Ve(S.__webglDepthbuffer,A,!1);else{let et=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ht=S.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ht),s.framebufferRenderbuffer(s.FRAMEBUFFER,et,s.RENDERBUFFER,ht)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Ie(A,S,z){let at=n.get(A);S!==void 0&&$t(at.__webglFramebuffer,A,A.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),z!==void 0&&ne(A)}function Te(A){let S=A.texture,z=n.get(A),at=n.get(S);A.addEventListener("dispose",D),P(A);let et=A.textures,ht=A.isWebGLCubeRenderTarget===!0,nt=et.length>1;if(nt||(at.__webglTexture===void 0&&(at.__webglTexture=s.createTexture()),at.__version=S.version,o.memory.textures++),ht){z.__webglFramebuffer=[];for(let k=0;k<6;k++)if(S.mipmaps.length>0){z.__webglFramebuffer[k]=[];for(let j=0;j<S.mipmaps.length;j++)z.__webglFramebuffer[k][j]=s.createFramebuffer()}else z.__webglFramebuffer[k]=s.createFramebuffer()}else{if(S.mipmaps.length>0){z.__webglFramebuffer=[];for(let k=0;k<S.mipmaps.length;k++)z.__webglFramebuffer[k]=s.createFramebuffer()}else z.__webglFramebuffer=s.createFramebuffer();if(nt)for(let k=0,j=et.length;k<j;k++){let lt=n.get(et[k]);lt.__webglTexture===void 0&&(lt.__webglTexture=s.createTexture(),o.memory.textures++)}if(A.samples>0&&ot(A)===!1){z.__webglMultisampledFramebuffer=s.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let k=0;k<et.length;k++){let j=et[k];z.__webglColorRenderbuffer[k]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,z.__webglColorRenderbuffer[k]);let lt=r.convert(j.format,j.colorSpace),L=r.convert(j.type),Q=E(j.internalFormat,lt,L,j.normalized,j.colorSpace,A.isXRRenderTarget===!0),$=Dt(A);s.renderbufferStorageMultisample(s.RENDERBUFFER,$,Q,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+k,s.RENDERBUFFER,z.__webglColorRenderbuffer[k])}s.bindRenderbuffer(s.RENDERBUFFER,null),A.depthBuffer&&(z.__webglDepthRenderbuffer=s.createRenderbuffer(),Ve(z.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ht){e.bindTexture(s.TEXTURE_CUBE_MAP,at.__webglTexture),Gt(s.TEXTURE_CUBE_MAP,S);for(let k=0;k<6;k++)if(S.mipmaps.length>0)for(let j=0;j<S.mipmaps.length;j++)$t(z.__webglFramebuffer[k][j],A,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+k,j);else $t(z.__webglFramebuffer[k],A,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+k,0);T(S)?y(s.TEXTURE_CUBE_MAP):S.mipmaps.length>0&&s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),e.unbindTexture()}else if(nt){for(let k=0,j=et.length;k<j;k++){let lt=et[k],L=n.get(lt),Q=s.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Q=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(Q,L.__webglTexture),Gt(Q,lt),$t(z.__webglFramebuffer,A,lt,s.COLOR_ATTACHMENT0+k,Q,0),T(lt)&&y(Q)}e.unbindTexture()}else{let k=s.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(k=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(k,at.__webglTexture),Gt(k,S),S.mipmaps.length>0)for(let j=0;j<S.mipmaps.length;j++)$t(z.__webglFramebuffer[j],A,S,s.COLOR_ATTACHMENT0,k,j);else $t(z.__webglFramebuffer,A,S,s.COLOR_ATTACHMENT0,k,0);T(S)?y(k):S.mipmaps.length>0&&s.texParameteri(k,s.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),e.unbindTexture()}A.depthBuffer&&ne(A)}function O(A){let S=A.textures;for(let z=0,at=S.length;z<at;z++){let et=S[z];if(T(et)&&et.mipmapsAutoUpdate===!0){let ht=w(A),nt=n.get(et).__webglTexture;e.bindTexture(ht,nt),y(ht),e.unbindTexture()}}}let ue=[];function bt(A){if(A.samples>0){if(ot(A)===!1){let S=A.textures,z=A.width,at=A.height,et=s.COLOR_BUFFER_BIT,ht=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,nt=n.get(A),k=S.length>1;if(k)for(let lt=0;lt<S.length;lt++)e.bindFramebuffer(s.FRAMEBUFFER,nt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+lt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,nt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+lt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,nt.__webglMultisampledFramebuffer),A.texture.mipmaps.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,nt.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,nt.__webglFramebuffer);for(let lt=0;lt<S.length;lt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(et|=s.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(et|=s.STENCIL_BUFFER_BIT)),k){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,nt.__webglColorRenderbuffer[lt]);let L=n.get(S[lt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,L,0)}s.blitFramebuffer(0,0,z,at,0,0,z,at,et,s.NEAREST),l===!0&&(ue.length=0,ue.push(s.COLOR_ATTACHMENT0+lt),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&ue.push(ht),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ue))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),k)for(let lt=0;lt<S.length;lt++){e.bindFramebuffer(s.FRAMEBUFFER,nt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+lt,s.RENDERBUFFER,nt.__webglColorRenderbuffer[lt]);let L=n.get(S[lt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,nt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+lt,s.TEXTURE_2D,L,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,nt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&l){let S=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[S])}}}function Dt(A){return Math.min(i.maxSamples,A.samples)}function ot(A){let S=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Xt(A){let S=o.render.frame;h.get(A)!==S&&(h.set(A,S),A.update())}function wt(A,S){let z=A.colorSpace,at=A.format,et=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||z!==Yo&&z!==ps&&(le.getTransfer(z)===xe?(at!==Ni||et!==Yn)&&Vt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ht("WebGLTextures: Unsupported texture color space:",z)),S}function Nt(A){return typeof HTMLImageElement!="undefined"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame!="undefined"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=kt,this.resetTextureUnits=R,this.getTextureUnits=K,this.setTextureUnits=yt,this.setTexture2D=ft,this.setTexture2DArray=xt,this.setTexture3D=Mt,this.setTextureCube=dt,this.rebindTextures=Ie,this.setupRenderTarget=Te,this.updateRenderTargetMipmap=O,this.updateMultisampleRenderTarget=bt,this.setupDepthRenderbuffer=ne,this.setupFrameBufferTexture=$t,this.useMultisampledRTT=ot,this.dispose=B}function nM(s,t){function e(n,i=ps){let r,o=le.getTransfer(i);if(n===Yn)return s.UNSIGNED_BYTE;if(n===xc)return s.UNSIGNED_SHORT_4_4_4_4;if(n===vc)return s.UNSIGNED_SHORT_5_5_5_1;if(n===qu)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Yu)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===Wu)return s.BYTE;if(n===Xu)return s.SHORT;if(n===ho)return s.UNSIGNED_SHORT;if(n===_c)return s.INT;if(n===Li)return s.UNSIGNED_INT;if(n===xi)return s.FLOAT;if(n===Di)return s.HALF_FLOAT;if(n===Zu)return s.ALPHA;if(n===Ju)return s.RGB;if(n===Ni)return s.RGBA;if(n===ls)return s.DEPTH_COMPONENT;if(n===ds)return s.DEPTH_STENCIL;if(n===yc)return s.RED;if(n===Sc)return s.RED_INTEGER;if(n===Gs)return s.RG;if(n===Mc)return s.RG_INTEGER;if(n===bc)return s.RGBA_INTEGER;if(n===va||n===ya||n===Sa||n===Ma)if(o===xe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===va)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ya)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Sa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ma)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===va)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ya)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Sa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ma)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Tc||n===wc||n===Ec||n===Ac)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Tc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===wc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ec)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ac)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Cc||n===Rc||n===Pc||n===Ic||n===Lc||n===ba||n===Dc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Cc||n===Rc)return o===xe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Pc)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ic)return r.COMPRESSED_R11_EAC;if(n===Lc)return r.COMPRESSED_SIGNED_R11_EAC;if(n===ba)return r.COMPRESSED_RG11_EAC;if(n===Dc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Nc||n===Uc||n===Oc||n===Fc||n===Bc||n===zc||n===kc||n===Vc||n===Gc||n===Hc||n===Wc||n===Xc||n===qc||n===Yc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Nc)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Uc)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Oc)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Fc)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Bc)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===zc)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===kc)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Vc)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Gc)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Hc)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Wc)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Xc)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===qc)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Yc)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Zc||n===Jc||n===$c)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Zc)return o===xe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Jc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===$c)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Kc||n===Qc||n===Ta||n===jc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Kc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Qc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ta)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===jc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===pr?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}var iM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,sM=`
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

}`,Sf=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new sa(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Hi({vertexShader:iM,fragmentShader:sM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Qe(new oa(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Mf=class extends ki{constructor(t,e){super();let n=this,i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,m=null,_=typeof XRWebGLBinding!="undefined",p=new Sf,g={},v=e.getContextAttributes(),T=null,y=null,w=[],E=[],x=new re,b=null,P=null,C=new wn;C.viewport=new Ue;let N=new wn;N.viewport=new Ue;let D=[C,N],W=new uc,I=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let ft=w[Y];return ft===void 0&&(ft=new io,w[Y]=ft),ft.getTargetRaySpace()},this.getControllerGrip=function(Y){let ft=w[Y];return ft===void 0&&(ft=new io,w[Y]=ft),ft.getGripSpace()},this.getHand=function(Y){let ft=w[Y];return ft===void 0&&(ft=new io,w[Y]=ft),ft.getHandSpace()};function H(Y){let ft=E.indexOf(Y.inputSource);if(ft===-1)return;let xt=w[ft];xt!==void 0&&(xt.update(Y.inputSource,Y.frame,c||o),xt.dispatchEvent({type:Y.type,data:Y.inputSource}))}function F(){i.removeEventListener("select",H),i.removeEventListener("selectstart",H),i.removeEventListener("selectend",H),i.removeEventListener("squeeze",H),i.removeEventListener("squeezestart",H),i.removeEventListener("squeezeend",H),i.removeEventListener("end",F),i.removeEventListener("inputsourceschange",tt);for(let Y=0;Y<w.length;Y++){let ft=E[Y];ft!==null&&(E[Y]=null,w[Y].disconnect(ft))}I=null,B=null,p.reset();for(let Y in g)delete g[Y];if(t.setRenderTarget(T),f=null,u=null,d=null,i=null,y=null,kt.stop(),n.isPresenting=!1,t.setPixelRatio(b),t.setSize(x.width,x.height,!1),P!==null){let Y=P.camera;Y.fov=P.fov,Y.zoom=P.zoom,Y.updateProjectionMatrix(),P=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&Vt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,n.isPresenting===!0&&Vt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(i,e)),d},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(Y){if(i=Y,i!==null){if(T=t.getRenderTarget(),i.addEventListener("select",H),i.addEventListener("selectstart",H),i.addEventListener("selectend",H),i.addEventListener("squeeze",H),i.addEventListener("squeezestart",H),i.addEventListener("squeezeend",H),i.addEventListener("end",F),i.addEventListener("inputsourceschange",tt),v.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(x),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let xt=null,Mt=null,dt=null;v.depth&&(dt=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,xt=v.stencil?ds:ls,Mt=v.stencil?pr:Li);let Rt={colorFormat:e.RGBA8,depthFormat:dt,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(Rt),i.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),y=new ri(u.textureWidth,u.textureHeight,{format:Ni,type:Yn,depthTexture:new us(u.textureWidth,u.textureHeight,Mt,void 0,void 0,void 0,void 0,void 0,void 0,xt),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let xt={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,e,xt),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new ri(f.framebufferWidth,f.framebufferHeight,{format:Ni,type:Yn,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),kt.setContext(i),kt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function tt(Y){for(let ft=0;ft<Y.removed.length;ft++){let xt=Y.removed[ft],Mt=E.indexOf(xt);Mt>=0&&(E[Mt]=null,w[Mt].disconnect(xt))}for(let ft=0;ft<Y.added.length;ft++){let xt=Y.added[ft],Mt=E.indexOf(xt);if(Mt===-1){for(let Rt=0;Rt<w.length;Rt++)if(Rt>=E.length){E.push(xt),Mt=Rt;break}else if(E[Rt]===null){E[Rt]=xt,Mt=Rt;break}if(Mt===-1)break}let dt=w[Mt];dt&&dt.connect(xt)}}function X(Y,ft){ft===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(ft.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(i===null)return;let ft=Y.near,xt=Y.far;p.texture!==null&&(p.depthNear>0&&(ft=p.depthNear),p.depthFar>0&&(xt=p.depthFar)),W.near=N.near=C.near=ft,W.far=N.far=C.far=xt,(I!==W.near||B!==W.far)&&(i.updateRenderState({depthNear:W.near,depthFar:W.far}),I=W.near,B=W.far),W.layers.mask=Y.layers.mask|6,C.layers.mask=W.layers.mask&-5,N.layers.mask=W.layers.mask&-3;let Mt=Y.parent,dt=W.cameras;X(W,Mt);for(let Rt=0;Rt<dt.length;Rt++)X(dt[Rt],Mt);W.projectionMatrix.copy(C.projectionMatrix),W.projectionMatrixInverse.copy(C.projectionMatrixInverse),P===null&&Y.isPerspectiveCamera&&(P={camera:Y,fov:Y.fov,zoom:Y.zoom}),R(Y,W,Mt)};function R(Y,ft,xt){xt===null?Y.matrix.copy(ft.matrixWorld):(Y.matrix.copy(xt.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(ft.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(ft.projectionMatrix),Y.projectionMatrixInverse.copy(ft.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Wl*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return W},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(Y){l=Y,u!==null&&(u.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(W)},this.getCameraTexture=function(Y){return g[Y]};let K=null;function yt(Y,ft){if(h=ft.getViewerPose(c||o),m=ft,h!==null){let xt=h.views;f!==null&&(t.setRenderTargetFramebuffer(y,f.framebuffer),t.setRenderTarget(y));let Mt=!1;xt.length!==W.cameras.length&&(W.cameras.length=0,Mt=!0);for(let Ct=0;Ct<xt.length;Ct++){let Gt=xt[Ct],It=null;if(f!==null)It=f.getViewport(Gt);else{let jt=d.getViewSubImage(u,Gt);It=jt.viewport,Ct===0&&(t.setRenderTargetTextures(y,jt.colorTexture,jt.depthStencilTexture),t.setRenderTarget(y))}let Ft=D[Ct];Ft===void 0&&(Ft=new wn,Ft.layers.enable(Ct),Ft.viewport=new Ue,D[Ct]=Ft),Ft.matrix.fromArray(Gt.transform.matrix),Ft.matrix.decompose(Ft.position,Ft.quaternion,Ft.scale),Ft.projectionMatrix.fromArray(Gt.projectionMatrix),Ft.projectionMatrixInverse.copy(Ft.projectionMatrix).invert(),Ft.viewport.set(It.x,It.y,It.width,It.height),Ct===0&&(W.matrix.copy(Ft.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale)),Mt===!0&&W.cameras.push(Ft)}let dt=i.enabledFeatures;if(dt&&dt.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){d=n.getBinding();let Ct=d.getDepthInformation(xt[0]);Ct&&Ct.isValid&&Ct.texture&&p.init(Ct,i.renderState)}if(dt&&dt.includes("camera-access")&&_){t.state.unbindTexture(),d=n.getBinding();for(let Ct=0;Ct<xt.length;Ct++){let Gt=xt[Ct].camera;if(Gt){let It=g[Gt];It||(It=new sa,g[Gt]=It);let Ft=d.getCameraImage(Gt);It.sourceTexture=Ft}}}}for(let xt=0;xt<w.length;xt++){let Mt=E[xt],dt=w[xt];Mt!==null&&dt!==void 0&&dt.update(Mt,ft,c||o)}K&&K(Y,ft),ft.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ft}),m=null}let kt=new bm;kt.setAnimationLoop(yt),this.setAnimationLoop=function(Y){K=Y},this.dispose=function(){}}},rM=new Se,Dm=new Wt;Dm.set(-1,0,0,0,1,0,0,0,1);function oM(s,t){function e(p,g){p.matrixAutoUpdate===!0&&p.updateMatrix(),g.value.copy(p.matrix)}function n(p,g){g.color.getRGB(p.fogColor.value,sf(s)),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function i(p,g,v,T,y){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(p,g):g.isMeshLambertMaterial?(r(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(p,g),d(p,g)):g.isMeshPhongMaterial?(r(p,g),h(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(p,g),u(p,g),g.isMeshPhysicalMaterial&&f(p,g,y)):g.isMeshMatcapMaterial?(r(p,g),m(p,g)):g.isMeshDepthMaterial?r(p,g):g.isMeshDistanceMaterial?(r(p,g),_(p,g)):g.isMeshNormalMaterial?r(p,g):g.isLineBasicMaterial?(o(p,g),g.isLineDashedMaterial&&a(p,g)):g.isPointsMaterial?l(p,g,v,T):g.isSpriteMaterial?c(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map,e(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.bumpMap&&(p.bumpMap.value=g.bumpMap,e(g.bumpMap,p.bumpMapTransform),p.bumpScale.value=g.bumpScale,g.side===gn&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,e(g.normalMap,p.normalMapTransform),p.normalScale.value.copy(g.normalScale),g.side===gn&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,e(g.displacementMap,p.displacementMapTransform),p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,p.emissiveMapTransform)),g.specularMap&&(p.specularMap.value=g.specularMap,e(g.specularMap,p.specularMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);let v=t.get(g),T=v.envMap,y=v.envMapRotation;T&&(p.envMap.value=T,p.envMapRotation.value.setFromMatrix4(rM.makeRotationFromEuler(y)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(Dm),p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap&&(p.lightMap.value=g.lightMap,p.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,p.lightMapTransform)),g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,p.aoMapTransform))}function o(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,g.map&&(p.map.value=g.map,e(g.map,p.mapTransform))}function a(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function l(p,g,v,T){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*v,p.scale.value=T*.5,g.map&&(p.map.value=g.map,e(g.map,p.uvTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function c(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map,e(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function h(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4)}function d(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap)}function u(p,g){p.metalness.value=g.metalness,g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,p.metalnessMapTransform)),p.roughness.value=g.roughness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,p.roughnessMapTransform)),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function f(p,g,v){p.ior.value=g.ior,g.diffuseRoughness>0&&(p.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=g.diffuseRoughnessMap,e(g.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,p.sheenColorMapTransform)),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,p.sheenRoughnessMapTransform))),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,p.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(p.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===gn&&p.clearcoatNormalScale.value.negate())),g.dispersion>0&&(p.dispersion.value=g.dispersion),g.retroreflectivity>0&&(p.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(p.iridescence.value=g.iridescence,p.iridescenceIOR.value=g.iridescenceIOR,p.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(p.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,p.iridescenceMapTransform)),g.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,p.transmissionMapTransform)),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(p.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(p.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,p.specularColorMapTransform)),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,g){g.matcap&&(p.matcap.value=g.matcap)}function _(p,g){let v=t.get(g).light;p.referencePosition.value.setFromMatrixPosition(v.matrixWorld),p.nearDistance.value=v.shadow.camera.near,p.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function aM(s,t,e,n){let i={},r={};function o(v,T){let y=T.program;n.uniformBlockBinding(v,y,i[v.id])}function a(v,T){let y=i[v.id];y===void 0&&(m(v),y=l(v),i[v.id]=y,v.addEventListener("dispose",p));let w=T.program;n.updateUBOMapping(v,w);let E=t.render.frame;r[v.id]!==E&&(c(v),r[v.id]=E)}function l(v){let T=s.createBuffer(),y=v.__size,w=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,T),s.bufferData(s.UNIFORM_BUFFER,y,w),s.bindBuffer(s.UNIFORM_BUFFER,null),T}function c(v){let T=i[v.id],y=v.uniforms,w=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,T);for(let E=0,x=y.length;E<x;E++){let b=y[E];if(Array.isArray(b))for(let P=0,C=b.length;P<C;P++)h(b[P],E,P,w);else h(b,E,0,w)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function h(v,T,y,w){if(u(v,T,y,w)===!0){let E=v.__offset,x=v.value;if(Array.isArray(x)){let b=0;for(let P=0;P<x.length;P++){let C=x[P],N=_(C,!0);d(C,v.__data,b),b+=N.storage/Float32Array.BYTES_PER_ELEMENT}}else d(x,v.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,E,v.__data)}}function d(v,T,y){typeof v=="number"||typeof v=="boolean"?T[y]=v:v.isMatrix3?(T[y]=v.elements[0],T[y+1]=v.elements[1],T[y+2]=v.elements[2],T[y+3]=0,T[y+4]=v.elements[3],T[y+5]=v.elements[4],T[y+6]=v.elements[5],T[y+7]=0,T[y+8]=v.elements[6],T[y+9]=v.elements[7],T[y+10]=v.elements[8],T[y+11]=0):ArrayBuffer.isView(v)?T.set(v.subarray(0,T.length-y),y):v.toArray(T,y)}function u(v,T,y,w){let E=v.value,x=T+"_"+y;if(Array.isArray(E)){w[x]===void 0&&(w[x]=[]);let b=w[x],P=!1;for(let C=0;C<E.length;C++)f(E[C],b,C)===!0&&(P=!0);return P}return f(E,w,x)}function f(v,T,y){if(T[y]===void 0)return typeof v=="number"||typeof v=="boolean"?T[y]=v:ArrayBuffer.isView(v)?T[y]=v.slice():T[y]=v.clone(),!0;{let w=T[y];if(typeof v=="number"||typeof v=="boolean"){if(w!==v)return T[y]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(w.equals(v)===!1)return w.copy(v),!0}}return!1}function m(v){let T=v.uniforms,y=0,w=16;for(let x=0,b=T.length;x<b;x++){let P=Array.isArray(T[x])?T[x]:[T[x]];for(let C=0,N=P.length;C<N;C++){let D=P[C],W=Array.isArray(D.value)?D.value:[D.value],I=Array.isArray(T[x])||Array.isArray(D.value),B=y;for(let F=0,tt=W.length;F<tt;F++){let X=W[F],R=_(X,I),K=y%w,yt=K%R.boundary,kt=K+yt;y+=yt,kt!==0&&w-kt<R.storage&&(y+=w-kt),F===0&&(B=y),y+=R.storage}let H=D.type==="int"?Int32Array:D.type==="uint"?Uint32Array:Float32Array;D.__data=new H((y-B)/Float32Array.BYTES_PER_ELEMENT),D.__offset=B}}let E=y%w;return E>0&&(y+=w-E),v.__size=y,v.__cache={},this}function _(v,T){let y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=16,y.storage=48):v.isMatrix4?(y.boundary=16,y.storage=64):v.isTexture?Vt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(y.boundary=16,y.storage=v.byteLength):Vt("WebGLRenderer: Unsupported uniform value type.",v),T===!0&&(y.boundary=16,y.storage=Math.ceil(y.storage/16)*16),y}function p(v){let T=v.target;T.removeEventListener("dispose",p),s.deleteBuffer(i[T.id]),delete i[T.id],delete r[T.id]}function g(){for(let v in i)s.deleteBuffer(i[v]);i={},r={}}return{bind:o,update:a,dispose:g}}var lM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),qi=null;function cM(){return qi===null&&(qi=new ta(lM,16,16,Gs,Di),qi.name="DFG_LUT",qi.minFilter=Fn,qi.magFilter=Fn,qi.wrapS=zi,qi.wrapT=zi,qi.generateMipmaps=!1,qi.needsUpdate=!0),qi}var ih=class{constructor(t={}){let{canvas:e=Yp(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=Yn}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;let _=f,p=new Set([bc,Mc,Sc]),g=new Set([Yn,Li,ho,pr,xc,vc]),v=new Uint32Array(4),T=new Int32Array(4),y={textures:[],min:[],max:[],resolution:[]},w=null,E=null,x=[],b=[],P=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Xi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,N=!1,D=null,W=null,I=null,B=null;this._outputColorSpace=si;let H=0,F=0,tt=null,X=-1,R=null,K=new Ue,yt=new Ue,kt=null,Y=new Jt(0),ft=0,xt=e.width,Mt=e.height,dt=1,Rt=null,pe=null,Ct=new Ue(0,0,xt,Mt),Gt=new Ue(0,0,xt,Mt),It=!1,Ft=new Fs,jt=new $l,ce=!1,Z=!1,$t=new Se,Ve=new G,ge=new Ue,ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ie=!1;function Te(){return tt===null?dt:1}let O=n;function ue(M,U){return e.getContext(M,U)}let bt,Dt,ot,Xt,wt,Nt,A,S,z,at,et,ht,nt,k,j,lt,L,Q,$,pt,ut,mt,ct;try{let M={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",it,!1),e.addEventListener("webglcontextrestored",_t,!1),e.addEventListener("webglcontextcreationerror",st,!1),O===null){let U="webgl2";if(O=ue(U,M),O===null)throw ue(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}gt()}catch(M){throw e.removeEventListener("webglcontextlost",it,!1),e.removeEventListener("webglcontextrestored",_t,!1),e.removeEventListener("webglcontextcreationerror",st,!1),Ht("WebGLRenderer: "+M.message),M}function gt(){bt=new yy(O),bt.init(),ut=new nM(O,bt),Dt=new cy(O,bt,t,ut),ot=new tM(O,bt),Dt.reversedDepthBuffer&&u&&ot.buffers.depth.setReversed(!0),W=O.createFramebuffer(),I=O.createFramebuffer(),B=O.createFramebuffer(),Xt=new by(O),wt=new kS,Nt=new eM(O,bt,ot,wt,Dt,ut,Xt),A=new vy(C),S=new w0(O),mt=new ay(O,S),z=new Sy(O,S,Xt,mt),at=new wy(O,z,S,mt,Xt),Q=new Ty(O,Dt,Nt),j=new hy(wt),et=new zS(C,A,bt,Dt,mt,j),ht=new oM(C,wt),nt=new GS,k=new ZS(bt),L=new oy(C,A,ot,at,m,l),lt=new jS(C,at,Dt),ct=new aM(O,Xt,Dt,ot),$=new ly(O,bt,Xt),pt=new My(O,bt,Xt),Xt.programs=et.programs,C.capabilities=Dt,C.extensions=bt,C.properties=wt,C.renderLists=nt,C.shadowMap=lt,C.state=ot,C.info=Xt}_!==Yn&&(P=new Ay(_,e.width,e.height,a,i,r));let rt=new Mf(C,O);this.xr=rt,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let M=bt.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=bt.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return dt},this.setPixelRatio=function(M){M!==void 0&&(dt=M,this.setSize(xt,Mt,!1))},this.getSize=function(M){return M.set(xt,Mt)},this.setSize=function(M,U,J=!0){if(rt.isPresenting){Vt("WebGLRenderer: Can't change size while VR device is presenting.");return}xt=M,Mt=U,e.width=Math.floor(M*dt),e.height=Math.floor(U*dt),J===!0&&(e.style.width=M+"px",e.style.height=U+"px"),P!==null&&P.setSize(e.width,e.height),this.setViewport(0,0,M,U)},this.getDrawingBufferSize=function(M){return M.set(xt*dt,Mt*dt).floor()},this.setDrawingBufferSize=function(M,U,J){xt=M,Mt=U,dt=J,e.width=Math.floor(M*J),e.height=Math.floor(U*J),this.setViewport(0,0,M,U)},this.setEffects=function(M){if(_===Yn){Ht("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let U=0;U<M.length;U++)if(M[U].isOutputPass===!0){Vt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}P.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(K)},this.getViewport=function(M){return M.copy(Ct)},this.setViewport=function(M,U,J,V){M.isVector4?Ct.set(M.x,M.y,M.z,M.w):Ct.set(M,U,J,V),ot.viewport(K.copy(Ct).multiplyScalar(Te()).round())},this.getScissor=function(M){return M.copy(Gt)},this.setScissor=function(M,U,J,V){M.isVector4?Gt.set(M.x,M.y,M.z,M.w):Gt.set(M,U,J,V),ot.scissor(yt.copy(Gt).multiplyScalar(Te()).round())},this.getScissorTest=function(){return It},this.setScissorTest=function(M){ot.setScissorTest(It=M)},this.setOpaqueSort=function(M){Rt=M},this.setTransparentSort=function(M){pe=M},this.getClearColor=function(M){return M.copy(L.getClearColor())},this.setClearColor=function(){L.setClearColor(...arguments)},this.getClearAlpha=function(){return L.getClearAlpha()},this.setClearAlpha=function(){L.setClearAlpha(...arguments)},this.clear=function(M=!0,U=!0,J=!0){let V=0;if(M){let q=!1;if(tt!==null){let St=tt.texture.format;q=p.has(St)}if(q){let St=tt.texture.type,Lt=g.has(St),vt=L.getClearColor(),At=L.getClearAlpha(),Bt=vt.r,Yt=vt.g,oe=vt.b;Lt?(v[0]=Bt,v[1]=Yt,v[2]=oe,v[3]=At,O.clearBufferuiv(O.COLOR,0,v)):(T[0]=Bt,T[1]=Yt,T[2]=oe,T[3]=At,O.clearBufferiv(O.COLOR,0,T))}else V|=O.COLOR_BUFFER_BIT}U&&(V|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),J&&(V|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&O.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),D=M},this.dispose=function(){e.removeEventListener("webglcontextlost",it,!1),e.removeEventListener("webglcontextrestored",_t,!1),e.removeEventListener("webglcontextcreationerror",st,!1),L.dispose(),nt.dispose(),k.dispose(),Nt.dispose(),wt.dispose(),A.dispose(),at.dispose(),z.dispose(),mt.dispose(),ct.dispose(),et.dispose(),rt.dispose(),rt.removeEventListener("sessionstart",we),rt.removeEventListener("sessionend",_e),en.stop()};function it(M){M.preventDefault(),tf("WebGLRenderer: Context Lost."),N=!0}function _t(){tf("WebGLRenderer: Context Restored."),N=!1;let M=Xt.autoReset,U=lt.enabled,J=lt.autoUpdate,V=lt.needsUpdate,q=lt.type;gt(),Xt.autoReset=M,lt.enabled=U,lt.autoUpdate=J,lt.needsUpdate=V,lt.type=q}function st(M){Ht("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Et(M){let U=M.target;U.removeEventListener("dispose",Et),ie(U)}function ie(M){qt(M),wt.remove(M)}function qt(M){let U=wt.get(M).programs;U!==void 0&&(U.forEach(function(J){et.releaseProgram(J)}),M.isShaderMaterial&&et.releaseShaderCache(M))}this.renderBufferDirect=function(M,U,J,V,q,St){U===null&&(U=ne);let Lt=q.isMesh&&q.matrixWorld.determinantAffine()<0,vt=mi(M,U,J,V,q);ot.setMaterial(V,Lt);let At=J.index,Bt=1;if(V.wireframe===!0){if(At=z.getWireframeAttribute(J),At===void 0)return;Bt=2}let Yt=J.drawRange,oe=J.attributes.position,Ut=Yt.start*Bt,ae=(Yt.start+Yt.count)*Bt;St!==null&&(Ut=Math.max(Ut,St.start*Bt),ae=Math.min(ae,(St.start+St.count)*Bt)),At!==null?(Ut=Math.max(Ut,0),ae=Math.min(ae,At.count)):oe!=null&&(Ut=Math.max(Ut,0),ae=Math.min(ae,oe.count));let $e=ae-Ut;if($e<0||$e===1/0)return;mt.setup(q,V,vt,J,At);let Pe,Ae=$;if(At!==null&&(Pe=S.get(At),Ae=pt,Ae.setIndex(Pe)),q.isMesh)V.wireframe===!0?(ot.setLineWidth(V.wireframeLinewidth*Te()),Ae.setMode(O.LINES)):Ae.setMode(O.TRIANGLES);else if(q.isLine){let Sn=V.linewidth;Sn===void 0&&(Sn=1),ot.setLineWidth(Sn*Te()),q.isLineSegments?Ae.setMode(O.LINES):q.isLineLoop?Ae.setMode(O.LINE_LOOP):Ae.setMode(O.LINE_STRIP)}else q.isPoints?Ae.setMode(O.POINTS):q.isSprite&&Ae.setMode(O.TRIANGLES);if(q.isBatchedMesh)if(bt.get("WEBGL_multi_draw"))Ae.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{let Sn=q._multiDrawStarts,Ot=q._multiDrawCounts,Un=q._multiDrawCount,me=At?S.get(At).bytesPerElement:1,sr=wt.get(V).currentProgram.getUniforms();for(let Mn=0;Mn<Un;Mn++)sr.setValue(O,"_gl_DrawID",Mn),Ae.render(Sn[Mn]/me,Ot[Mn])}else if(q.isInstancedMesh)Ae.renderInstances(Ut,$e,q.count);else if(J.isInstancedBufferGeometry){let Sn=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,Ot=Math.min(J.instanceCount,Sn);Ae.renderInstances(Ut,$e,Ot)}else Ae.render(Ut,$e)};function De(M,U,J,V){D!==null&&M.isNodeMaterial&&D.setObject(V,M),ce===!0&&j.setState(M,J,!1),M.transparent===!0&&M.side===Wi&&M.forceSinglePass===!1?(M.side=gn,M.needsUpdate=!0,ei(M,U,V),M.side=Vs,M.needsUpdate=!0,ei(M,U,V),M.side=Wi):ei(M,U,V)}this.compile=function(M,U,J=null){J===null&&(J=M),D!==null&&D.renderStart(M,U,J),E=k.get(J),E.init(U),b.push(E),J.traverseVisible(function(q){q.isLight&&q.layers.test(U.layers)&&(E.pushLight(q),q.castShadow&&E.pushShadow(q))}),M!==J&&M.traverseVisible(function(q){q.isLight&&q.layers.test(U.layers)&&(E.pushLight(q),q.castShadow&&E.pushShadow(q))}),E.setupLights(),D!==null&&D.updateLights(E.state.lightsArray),Z=this.localClippingEnabled,ce=j.init(this.clippingPlanes,Z),ce===!0&&j.setGlobalState(this.clippingPlanes,U),D!==null&&lt.render(E.state.shadowsArray,J,U);let V=new Set;return M.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;let St=q.material;if(St)if(Array.isArray(St))for(let Lt=0;Lt<St.length;Lt++){let vt=St[Lt];De(vt,J,U,q),V.add(vt)}else De(St,J,U,q),V.add(St)}),E=b.pop(),D!==null&&D.renderEnd(),V},this.compileAsync=function(M,U,J=null){let V=this.compile(M,U,J);return new Promise(q=>{function St(){if(V.forEach(function(Lt){let At=wt.get(Lt).currentProgram;(At===void 0||At.isReady())&&V.delete(Lt)}),V.size===0){q(M);return}setTimeout(St,10)}bt.get("KHR_parallel_shader_compile")!==null?St():setTimeout(St,10)})};let Ze=null;function Ne(M){Ze&&Ze(M)}function we(){en.stop()}function _e(){en.start()}let en=new bm;en.setAnimationLoop(Ne),typeof self!="undefined"&&en.setContext(self),this.setAnimationLoop=function(M){Ze=M,rt.setAnimationLoop(M),M===null?en.stop():en.start()},rt.addEventListener("sessionstart",we),rt.addEventListener("sessionend",_e),this.render=function(M,U){if(U!==void 0&&U.isCamera!==!0){Ht("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;D!==null&&D.renderStart(M,U);let J=rt.enabled===!0&&rt.isPresenting===!0,V=P!==null&&(tt===null||J)&&P.begin(C,tt);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),rt.enabled===!0&&rt.isPresenting===!0&&(P===null||P.isCompositing()===!1)&&(rt.cameraAutoUpdate===!0&&rt.updateCamera(U),U=rt.getCamera()),M.isScene===!0&&M.onBeforeRender(C,M,U,tt),E=k.get(M,b.length),E.init(U),E.state.textureUnits=Nt.getTextureUnits(),b.push(E),$t.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),U.isArrayCamera?jt.setFromArrayCamera(U):Ft.setFromProjectionMatrix($t,_i,U.reversedDepth),Z=this.localClippingEnabled,ce=j.init(this.clippingPlanes,Z),w=nt.get(M,x.length),w.init(),x.push(w),this.info.render.frame++,rt.enabled===!0&&rt.isPresenting===!0){let Lt=C.xr.getDepthSensingMesh();Lt!==null&&Ee(Lt,U,-1/0,C.sortObjects)}Ee(M,U,0,C.sortObjects),w.finish(),D!==null&&D.updateLights(E.state.lightsArray),C.sortObjects===!0&&w.sort(Rt,pe),Ie=rt.enabled===!1||rt.isPresenting===!1||rt.hasDepthSensing()===!1,Ie&&L.addToRenderList(w,M),this.info.autoReset===!0&&this.info.reset(),ce===!0&&j.beginShadows();let q=E.state.shadowsArray;if(lt.render(q,M,U),ce===!0&&j.endShadows(),(V&&P.hasRenderPass())===!1){let Lt=w.opaque,vt=w.transmissive;if(E.setupLights(),U.isArrayCamera){let At=U.cameras;if(vt.length>0)for(let Bt=0,Yt=At.length;Bt<Yt;Bt++){let oe=At[Bt];ti(Lt,vt,M,oe)}Ie&&L.render(M);for(let Bt=0,Yt=At.length;Bt<Yt;Bt++){let oe=At[Bt];yn(w,M,oe,oe.viewport)}}else vt.length>0&&ti(Lt,vt,M,U),Ie&&L.render(M),yn(w,M,U)}tt!==null&&F===0&&(Nt.updateMultisampleRenderTarget(tt),Nt.updateRenderTargetMipmap(tt)),V&&P.end(C),M.isScene===!0&&M.onAfterRender(C,M,U),mt.resetDefaultState(),X=-1,R=null,b.pop(),b.length>0?(E=b[b.length-1],Nt.setTextureUnits(E.state.textureUnits),ce===!0&&j.setGlobalState(C.clippingPlanes,E.state.camera)):E=null,x.pop(),x.length>0?w=x[x.length-1]:w=null,D!==null&&D.renderEnd()};function Ee(M,U,J,V){if(M.visible===!1)return;if(M.layers.test(U.layers)){if(M.isGroup)J=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(U);else if(M.isLight)E.pushLight(M),M.castShadow&&E.pushShadow(M);else if(M.isSprite){let Lt=U.isArrayCamera?jt:Ft;if(!M.frustumCulled||M.intersectsFrustum(Lt)){V&&ge.setFromMatrixPosition(M.matrixWorld).applyMatrix4($t);let vt=at.update(M),At=M.material;At.visible&&w.push(M,vt,At,J,ge.z,null,U)}}else if(M.isMesh||M.isLine||M.isPoints){let Lt=U.isArrayCamera?jt:Ft;if(!M.frustumCulled||M.intersectsFrustum(Lt)){let vt=at.update(M),At=M.material;if(V&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),ge.copy(M.boundingSphere.center)):(vt.boundingSphere===null&&vt.computeBoundingSphere(),ge.copy(vt.boundingSphere.center)),ge.applyMatrix4(M.matrixWorld).applyMatrix4($t)),Array.isArray(At)){let Bt=vt.groups;for(let Yt=0,oe=Bt.length;Yt<oe;Yt++){let Ut=Bt[Yt],ae=At[Ut.materialIndex];ae&&ae.visible&&w.push(M,vt,ae,J,ge.z,Ut,U)}}else At.visible&&w.push(M,vt,At,J,ge.z,null,U)}}}let St=M.children;for(let Lt=0,vt=St.length;Lt<vt;Lt++)Ee(St[Lt],U,J,V)}function yn(M,U,J,V){let{opaque:q,transmissive:St,transparent:Lt}=M;E.setupLightsView(J),ce===!0&&j.setGlobalState(C.clippingPlanes,J),V&&ot.viewport(K.copy(V)),q.length>0&&Ge(q,U,J),St.length>0&&Ge(St,U,J),Lt.length>0&&Ge(Lt,U,J),ot.buffers.depth.setTest(!0),ot.buffers.depth.setMask(!0),ot.buffers.color.setMask(!0),ot.setPolygonOffset(!1)}function ti(M,U,J,V){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[V.id]===void 0){let Ut=bt.has("EXT_color_buffer_half_float")||bt.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[V.id]=new ri(1,1,{generateMipmaps:!0,type:Ut?Di:Yn,minFilter:fs,samples:Math.max(4,Dt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:le.workingColorSpace})}let St=E.state.transmissionRenderTarget[V.id],Lt=V.viewport||K;St.setSize(Lt.z*C.transmissionResolutionScale,Lt.w*C.transmissionResolutionScale);let vt=C.getRenderTarget(),At=C.getActiveCubeFace(),Bt=C.getActiveMipmapLevel();C.setRenderTarget(St),C.getClearColor(Y),ft=C.getClearAlpha(),ft<1&&C.setClearColor(16777215,.5),C.clear(),Ie&&L.render(J);let Yt=C.toneMapping;C.toneMapping=Xi;let oe=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),E.setupLightsView(V),ce===!0&&j.setGlobalState(C.clippingPlanes,V),Ge(M,J,V),Nt.updateMultisampleRenderTarget(St),Nt.updateRenderTargetMipmap(St),bt.has("WEBGL_multisampled_render_to_texture")===!1){let Ut=!1;for(let ae=0,$e=U.length;ae<$e;ae++){let Pe=U[ae],{object:Ae,geometry:Sn,material:Ot,group:Un}=Pe;if(Ot.side===Wi&&Ae.layers.test(V.layers)){let me=Ot.side;Ot.side=gn,Ot.needsUpdate=!0,Je(Ae,J,V,Sn,Ot,Un),Ot.side=me,Ot.needsUpdate=!0,Ut=!0}}Ut===!0&&(Nt.updateMultisampleRenderTarget(St),Nt.updateRenderTargetMipmap(St))}C.setRenderTarget(vt,At,Bt),C.setClearColor(Y,ft),oe!==void 0&&(V.viewport=oe),C.toneMapping=Yt}function Ge(M,U,J){let V=U.isScene===!0?U.overrideMaterial:null;for(let q=0,St=M.length;q<St;q++){let Lt=M[q],{object:vt,geometry:At,group:Bt}=Lt,Yt=Lt.material;Yt.allowOverride===!0&&V!==null&&(Yt=V),vt.layers.test(J.layers)&&Je(vt,U,J,At,Yt,Bt)}}function Je(M,U,J,V,q,St){D!==null&&q.isNodeMaterial&&D.setObject(M,q),M.onBeforeRender(C,U,J,V,q,St),M.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),q.onBeforeRender(C,U,J,V,M,St),q.transparent===!0&&q.side===Wi&&q.forceSinglePass===!1?(q.side=gn,q.needsUpdate=!0,C.renderBufferDirect(J,U,V,q,M,St),q.side=Vs,q.needsUpdate=!0,C.renderBufferDirect(J,U,V,q,M,St),q.side=Wi):C.renderBufferDirect(J,U,V,q,M,St),M.onAfterRender(C,U,J,V,q,St)}function nn(M){let U=0;for(let J of M)J.texture!==null&&U++;return U}function ei(M,U,J){U.isScene!==!0&&(U=ne);let V=wt.get(M),q=E.state.lights,St=E.state.shadowsArray,Lt=q.state.version,vt=et.getParameters(M,q.state,St,U,J,E.state.lightProbeGridArray),At=et.getProgramCacheKey(vt),Bt=V.programs;V.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?U.environment:null,V.fog=U.fog;let Yt=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;V.envMap=A.get(M.envMap||V.environment,Yt),V.envMapRotation=V.environment!==null&&M.envMap===null?U.environmentRotation:M.envMapRotation,Bt===void 0&&(M.addEventListener("dispose",Et),Bt=new Map,V.programs=Bt,V.programVariants=new Map);let oe=Bt.get(At);if(oe!==void 0){if(V.currentProgram===oe&&V.lightsStateVersion===Lt)return He(M,vt),oe}else vt.uniforms=et.getUniforms(M),D!==null&&M.isNodeMaterial&&D.build(M,J,vt),M.onBeforeCompile(vt,C),oe=et.acquireProgram(vt,At),Bt.set(At,oe),V.uniforms=vt.uniforms;let Ut=V.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Ut.clippingPlanes=j.uniform),He(M,vt),V.needsLights=cl(M),V.lightsStateVersion=Lt,V.needsLights&&(Ut.ambientLightColor.value=q.state.ambient,Ut.lightProbe.value=q.state.probe,Ut.sunLights.value=q.state.sun,Ut.sunLightShadows.value=q.state.sunShadow,Ut.directionalLights.value=q.state.directional,Ut.directionalLightShadows.value=q.state.directionalShadow,Ut.spotLights.value=q.state.spot,Ut.spotLightShadows.value=q.state.spotShadow,Ut.rectAreaLights.value=q.state.rectArea,Ut.ltc_1.value=q.state.rectAreaLTC1,Ut.ltc_2.value=q.state.rectAreaLTC2,Ut.pointLights.value=q.state.point,Ut.pointLightShadows.value=q.state.pointShadow,Ut.hemisphereLights.value=q.state.hemi,Ut.sunShadowMatrix.value=q.state.sunShadowMatrix,Ut.sunShadowCascade.value=q.state.sunShadowCascade,Ut.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Ut.spotLightMatrix.value=q.state.spotLightMatrix,Ut.spotLightMap.value=q.state.spotLightMap,Ut.pointShadowMatrix.value=q.state.pointShadowMatrix),V.numLightProbeGrids=nn(E.state.lightProbeGridArray),V.currentProgram=oe,V.uniformsList=null,oe}function Fr(M,U,J,V,q){let St=wt.get(M),Lt=St.currentProgram.id+","+V+","+q,vt=St.programVariants.get(Lt);return vt===void 0?(vt=ei(M,U,J),St.programVariants.set(Lt,vt)):(St.currentProgram=vt,St.uniformsList=null,St.outputColorSpace=V,St.toneMapping=q),vt}function sn(M){if(M.uniformsList===null){let U=M.currentProgram.getUniforms();M.uniformsList=uo.seqWithValue(U.seq,M.uniforms)}return M.uniformsList}function He(M,U){let J=wt.get(M);J.outputColorSpace=U.outputColorSpace,J.batching=U.batching,J.batchingColor=U.batchingColor,J.instancing=U.instancing,J.instancingColor=U.instancingColor,J.instancingMorph=U.instancingMorph,J.skinning=U.skinning,J.morphTargets=U.morphTargets,J.morphNormals=U.morphNormals,J.morphColors=U.morphColors,J.morphTargetsCount=U.morphTargetsCount,J.numClippingPlanes=U.numClippingPlanes,J.numIntersection=U.numClipIntersection,J.vertexAlphas=U.vertexAlphas,J.vertexTangents=U.vertexTangents,J.toneMapping=U.toneMapping}function mi(M,U,J,V,q){U.isScene!==!0&&(U=ne),Nt.resetTextureUnits();let St=U.fog,Lt=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?U.environment:null,vt=tt===null?C.outputColorSpace:tt.isXRRenderTarget===!0?tt.texture.colorSpace:le.workingColorSpace,At=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,Bt=A.get(V.envMap||Lt,At),Yt=V.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,oe=!!J.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Ut=!!J.morphAttributes.position,ae=!!J.morphAttributes.normal,$e=!!J.morphAttributes.color,Pe=Xi;V.toneMapped&&(tt===null||tt.isXRRenderTarget===!0)&&(Pe=C.toneMapping);let Ae=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Sn=Ae!==void 0?Ae.length:0,Ot=wt.get(V),Un=E.state.lights;if(ce===!0&&(Z===!0||M!==R)){let Fe=M===R&&V.id===X;j.setState(V,M,Fe)}let me=!1,sr=!1;V.version===Ot.__version?Ot.needsLights&&Ot.lightsStateVersion!==Un.state.version||q.isBatchedMesh&&Ot.batching===!1||!q.isBatchedMesh&&Ot.batching===!0||q.isBatchedMesh&&Ot.batchingColor===!0&&q._colorsTexture===null||q.isBatchedMesh&&Ot.batchingColor===!1&&q._colorsTexture!==null||q.isInstancedMesh&&Ot.instancing===!1||!q.isInstancedMesh&&Ot.instancing===!0||q.isSkinnedMesh&&Ot.skinning===!1||!q.isSkinnedMesh&&Ot.skinning===!0||q.isInstancedMesh&&Ot.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Ot.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Ot.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Ot.instancingMorph===!1&&q.morphTexture!==null||Ot.envMap!==Bt||V.fog===!0&&Ot.fog!==St||Ot.numClippingPlanes!==void 0&&(Ot.numClippingPlanes!==j.numPlanes||Ot.numIntersection!==j.numIntersection)||Ot.vertexAlphas!==Yt||Ot.vertexTangents!==oe||Ot.morphTargets!==Ut||Ot.morphNormals!==ae||Ot.morphColors!==$e||Ot.morphTargetsCount!==Sn||Ot.numLightProbeGrids!==nn(E.state.lightProbeGridArray)?me=!0:(Ot.outputColorSpace!==vt||Ot.toneMapping!==Pe)&&(sr=!0):(me=!0,Ot.__version=V.version);let Mn=Ot.currentProgram;(me===!0||sr===!0)&&(Mn=sr===!0?Fr(V,U,q,vt,Pe):ei(V,U,q),D&&V.isNodeMaterial&&D.onUpdateProgram(V,Mn,Ot));let hl=!1,Cs=!1,rr=!1,fe=Mn.getUniforms(),mn=Ot.uniforms;if(ot.useProgram(Mn.program)&&(hl=!0,Cs=!0,rr=!0),V.id!==X&&(X=V.id,Cs=!0),hl||R!==M){ot.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),fe.setValue(O,"projectionMatrix",M.projectionMatrix),fe.setValue(O,"viewMatrix",M.matrixWorldInverse);let hn=fe.map.cameraPosition;hn!==void 0&&hn.setValue(O,Ve.setFromMatrixPosition(M.matrixWorld)),Dt.logarithmicDepthBuffer&&fe.setValue(O,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&fe.setValue(O,"isOrthographic",M.isOrthographicCamera===!0),R!==M&&(R=M,Cs=!0,rr=!0)}if(Ot.needsLights&&(Un.state.sunShadowMap.length>0&&fe.setValue(O,"sunShadowMap",Un.state.sunShadowMap,Nt),Un.state.directionalShadowMap.length>0&&fe.setValue(O,"directionalShadowMap",Un.state.directionalShadowMap,Nt),Un.state.spotShadowMap.length>0&&fe.setValue(O,"spotShadowMap",Un.state.spotShadowMap,Nt),Un.state.pointShadowMap.length>0&&fe.setValue(O,"pointShadowMap",Un.state.pointShadowMap,Nt)),q.isSkinnedMesh){fe.setOptional(O,q,"bindMatrix"),fe.setOptional(O,q,"bindMatrixInverse");let Fe=q.skeleton;Fe&&(Fe.boneTexture===null&&Fe.computeBoneTexture(),fe.setValue(O,"boneTexture",Fe.boneTexture,Nt))}q.isBatchedMesh&&(fe.setOptional(O,q,"batchingTexture"),fe.setValue(O,"batchingTexture",q._matricesTexture,Nt),fe.setOptional(O,q,"batchingIdTexture"),fe.setValue(O,"batchingIdTexture",q._indirectTexture,Nt),fe.setOptional(O,q,"batchingColorTexture"),q._colorsTexture!==null&&fe.setValue(O,"batchingColorTexture",q._colorsTexture,Nt));let wi=J.morphAttributes;if((wi.position!==void 0||wi.normal!==void 0||wi.color!==void 0)&&Q.update(q,J,Mn),(Cs||Ot.receiveShadow!==q.receiveShadow)&&(Ot.receiveShadow=q.receiveShadow,fe.setValue(O,"receiveShadow",q.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&U.environment!==null&&(mn.envMapIntensity.value=U.environmentIntensity),mn.dfgLUT!==void 0&&(mn.dfgLUT.value=cM()),Cs){if(fe.setValue(O,"toneMappingExposure",C.toneMappingExposure),Ot.needsLights&&Bo(mn,rr),St&&V.fog===!0&&ht.refreshFogUniforms(mn,St),ht.refreshMaterialUniforms(mn,V,dt,Mt,E.state.transmissionRenderTarget[M.id]),Ot.needsLights&&Ot.numLightProbeGrids>0){let Fe=y,hn=0;for(let ts of E.state.lightProbeGridArray)ts.texture!==null&&(Fe.textures[hn]=ts.texture,Fe.min[hn]=ts.boundingBox.min,Fe.max[hn]=ts.boundingBox.max,Fe.resolution[hn]=ts.resolution,hn++);for(let ts in Fe)Fe[ts].length=hn;mn.probesSH.value=Fe.textures,mn.probesMin.value=Fe.min,mn.probesMax.value=Fe.max,mn.probesResolution.value=Fe.resolution}uo.upload(O,sn(Ot),mn,Nt)}if(V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(uo.upload(O,sn(Ot),mn,Nt),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&fe.setValue(O,"center",q.center),fe.setValue(O,"modelViewMatrix",q.modelViewMatrix),fe.setValue(O,"normalMatrix",q.normalMatrix),fe.setValue(O,"modelMatrix",q.matrixWorld),V.uniformsGroups!==void 0){let Fe=V.uniformsGroups;for(let hn=0,ts=Fe.length;hn<ts;hn++){let kd=Fe[hn];ct.update(kd,Mn),ct.bind(kd,Mn)}}return Mn}function Bo(M,U){M.ambientLightColor.needsUpdate=U,M.lightProbe.needsUpdate=U,M.sunLights.needsUpdate=U,M.sunLightShadows.needsUpdate=U,M.directionalLights.needsUpdate=U,M.directionalLightShadows.needsUpdate=U,M.pointLights.needsUpdate=U,M.pointLightShadows.needsUpdate=U,M.spotLights.needsUpdate=U,M.spotLightShadows.needsUpdate=U,M.rectAreaLights.needsUpdate=U,M.hemisphereLights.needsUpdate=U}function cl(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return tt},this.setRenderTargetTextures=function(M,U,J){let V=wt.get(M);V.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),wt.get(M.texture).__webglTexture=U,wt.get(M.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:J,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,U){let J=wt.get(M);J.__webglFramebuffer=U,J.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(M,U=0,J=0){tt=M,H=U,F=J;let V=null,q=!1,St=!1;if(M){let vt=wt.get(M);if(vt.__useDefaultFramebuffer!==void 0){ot.bindFramebuffer(O.FRAMEBUFFER,vt.__webglFramebuffer),K.copy(M.viewport),yt.copy(M.scissor),kt=M.scissorTest,ot.viewport(K),ot.scissor(yt),ot.setScissorTest(kt),X=-1;return}else if(vt.__webglFramebuffer===void 0)Nt.setupRenderTarget(M);else if(vt.__hasExternalTextures)Nt.rebindTextures(M,wt.get(M.texture).__webglTexture,wt.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let Yt=M.depthTexture;if(vt.__boundDepthTexture!==Yt){if(Yt!==null&&wt.has(Yt)&&(M.width!==Yt.image.width||M.height!==Yt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Nt.setupDepthRenderbuffer(M)}}let At=M.texture;(At.isData3DTexture||At.isDataArrayTexture||At.isCompressedArrayTexture)&&(St=!0);let Bt=wt.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Bt[U])?V=Bt[U][J]:V=Bt[U],q=!0):M.samples>0&&Nt.useMultisampledRTT(M)===!1?V=wt.get(M).__webglMultisampledFramebuffer:Array.isArray(Bt)?V=Bt[J]:V=Bt,K.copy(M.viewport),yt.copy(M.scissor),kt=M.scissorTest}else K.copy(Ct).multiplyScalar(dt).floor(),yt.copy(Gt).multiplyScalar(dt).floor(),kt=It;if(J!==0&&(V=W),ot.bindFramebuffer(O.FRAMEBUFFER,V)&&ot.drawBuffers(M,V),ot.viewport(K),ot.scissor(yt),ot.setScissorTest(kt),q){let vt=wt.get(M.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+U,vt.__webglTexture,J)}else if(St){let vt=U;for(let At=0;At<M.textures.length;At++){let Bt=wt.get(M.textures[At]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+At,Bt.__webglTexture,J,vt)}}else if(M!==null&&J!==0){let vt=wt.get(M.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,vt.__webglTexture,J)}X=-1};function As(M){let U=wt.get(M);return(U.__readFormat!==M.format||U.__readType!==M.type)&&(U.__readFormat=M.format,U.__readType=M.type,U.__formatReadable=Dt.textureFormatReadable(M.format),U.__typeReadable=Dt.textureTypeReadable(M.type)),U}this.readRenderTargetPixels=function(M,U,J,V,q,St,Lt,vt=0){if(!(M&&M.isWebGLRenderTarget)){Ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let At=wt.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Lt!==void 0&&(At=At[Lt],Array.isArray(At)&&(At=At[0])),At){ot.bindFramebuffer(O.FRAMEBUFFER,At);try{let Bt=M.textures[vt],Yt=Bt.format,oe=Bt.type;M.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+vt);let Ut=As(Bt);if(Ut.__formatReadable===!1){Ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ut.__typeReadable===!1){Ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=M.width-V&&J>=0&&J<=M.height-q&&O.readPixels(U,J,V,q,ut.convert(Yt),ut.convert(oe),St)}finally{let Bt=tt!==null?wt.get(tt).__webglFramebuffer:null;ot.bindFramebuffer(O.FRAMEBUFFER,Bt)}}},this.readRenderTargetPixelsAsync=async function(M,U,J,V,q,St,Lt,vt=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let At=wt.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Lt!==void 0&&(At=At[Lt],Array.isArray(At)&&(At=At[0])),At)if(U>=0&&U<=M.width-V&&J>=0&&J<=M.height-q){ot.bindFramebuffer(O.FRAMEBUFFER,At);let Bt=M.textures[vt],Yt=Bt.format,oe=Bt.type;M.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+vt);let Ut=As(Bt);if(Ut.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ut.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ae=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,ae),O.bufferData(O.PIXEL_PACK_BUFFER,St.byteLength,O.STREAM_READ),O.readPixels(U,J,V,q,ut.convert(Yt),ut.convert(oe),0),O.bindBuffer(O.PIXEL_PACK_BUFFER,null);let $e=tt!==null?wt.get(tt).__webglFramebuffer:null;ot.bindFramebuffer(O.FRAMEBUFFER,$e);let Pe=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await Jp(O,Pe,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,ae),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,St),O.bindBuffer(O.PIXEL_PACK_BUFFER,null),O.deleteBuffer(ae),O.deleteSync(Pe),St}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,U=null,J=0){let V=Math.pow(2,-J),q=Math.floor(M.image.width*V),St=Math.floor(M.image.height*V),Lt=U!==null?U.x:0,vt=U!==null?U.y:0;Nt.setTexture2D(M,0),O.copyTexSubImage2D(O.TEXTURE_2D,J,0,0,Lt,vt,q,St),ot.unbindTexture()},this.copyTextureToTexture=function(M,U,J=null,V=null,q=0,St=0){let Lt,vt,At,Bt,Yt,oe,Ut,ae,$e,Pe=M.isCompressedTexture?M.mipmaps[St]:M.image;if(J!==null)Lt=J.max.x-J.min.x,vt=J.max.y-J.min.y,At=J.isBox3?J.max.z-J.min.z:1,Bt=J.min.x,Yt=J.min.y,oe=J.isBox3?J.min.z:0;else{let fe=Math.pow(2,-q);Lt=Math.floor(Pe.width*fe),vt=Math.floor(Pe.height*fe),M.isDataArrayTexture?At=Pe.depth:M.isData3DTexture?At=Math.floor(Pe.depth*fe):At=1,Bt=0,Yt=0,oe=0}V!==null?(Ut=V.x,ae=V.y,$e=V.z):(Ut=0,ae=0,$e=0);let Ae=ut.convert(U.format),Sn=ut.convert(U.type),Ot;U.isData3DTexture?(Nt.setTexture3D(U,0),Ot=O.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(Nt.setTexture2DArray(U,0),Ot=O.TEXTURE_2D_ARRAY):(Nt.setTexture2D(U,0),Ot=O.TEXTURE_2D),ot.activeTexture(O.TEXTURE0),ot.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,U.flipY),ot.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),ot.pixelStorei(O.UNPACK_ALIGNMENT,U.unpackAlignment);let Un=ot.getParameter(O.UNPACK_ROW_LENGTH),me=ot.getParameter(O.UNPACK_IMAGE_HEIGHT),sr=ot.getParameter(O.UNPACK_SKIP_PIXELS),Mn=ot.getParameter(O.UNPACK_SKIP_ROWS),hl=ot.getParameter(O.UNPACK_SKIP_IMAGES);ot.pixelStorei(O.UNPACK_ROW_LENGTH,Pe.width),ot.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Pe.height),ot.pixelStorei(O.UNPACK_SKIP_PIXELS,Bt),ot.pixelStorei(O.UNPACK_SKIP_ROWS,Yt),ot.pixelStorei(O.UNPACK_SKIP_IMAGES,oe);let Cs=M.isDataArrayTexture||M.isData3DTexture,rr=U.isDataArrayTexture||U.isData3DTexture;if(M.isDepthTexture){let fe=wt.get(M),mn=wt.get(U),wi=wt.get(fe.__renderTarget),Fe=wt.get(mn.__renderTarget);ot.bindFramebuffer(O.READ_FRAMEBUFFER,wi.__webglFramebuffer),ot.bindFramebuffer(O.DRAW_FRAMEBUFFER,Fe.__webglFramebuffer);for(let hn=0;hn<At;hn++)Cs&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,wt.get(M).__webglTexture,q,oe+hn),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,wt.get(U).__webglTexture,St,$e+hn)),O.blitFramebuffer(Bt,Yt,Bt+Lt,Yt+vt,Ut,ae,Ut+Lt,ae+vt,O.DEPTH_BUFFER_BIT,O.NEAREST);ot.bindFramebuffer(O.READ_FRAMEBUFFER,null),ot.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(q!==0||M.isRenderTargetTexture||wt.has(M)){let fe=wt.get(M),mn=wt.get(U);ot.bindFramebuffer(O.READ_FRAMEBUFFER,I),ot.bindFramebuffer(O.DRAW_FRAMEBUFFER,B);for(let wi=0;wi<At;wi++)Cs?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,fe.__webglTexture,q,oe+wi):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,fe.__webglTexture,q),rr?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,mn.__webglTexture,St,$e+wi):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,mn.__webglTexture,St),q!==0?O.blitFramebuffer(Bt,Yt,Bt+Lt,Yt+vt,Ut,ae,Ut+Lt,ae+vt,O.COLOR_BUFFER_BIT,O.NEAREST):rr?O.copyTexSubImage3D(Ot,St,Ut,ae,$e+wi,Bt,Yt,Lt,vt):O.copyTexSubImage2D(Ot,St,Ut,ae,Bt,Yt,Lt,vt);ot.bindFramebuffer(O.READ_FRAMEBUFFER,null),ot.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else rr?M.isDataTexture||M.isData3DTexture?O.texSubImage3D(Ot,St,Ut,ae,$e,Lt,vt,At,Ae,Sn,Pe.data):U.isCompressedArrayTexture?O.compressedTexSubImage3D(Ot,St,Ut,ae,$e,Lt,vt,At,Ae,Pe.data):O.texSubImage3D(Ot,St,Ut,ae,$e,Lt,vt,At,Ae,Sn,Pe):M.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,St,Ut,ae,Lt,vt,Ae,Sn,Pe.data):M.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,St,Ut,ae,Pe.width,Pe.height,Ae,Pe.data):O.texSubImage2D(O.TEXTURE_2D,St,Ut,ae,Lt,vt,Ae,Sn,Pe);ot.pixelStorei(O.UNPACK_ROW_LENGTH,Un),ot.pixelStorei(O.UNPACK_IMAGE_HEIGHT,me),ot.pixelStorei(O.UNPACK_SKIP_PIXELS,sr),ot.pixelStorei(O.UNPACK_SKIP_ROWS,Mn),ot.pixelStorei(O.UNPACK_SKIP_IMAGES,hl),St===0&&U.generateMipmaps===!0&&U.mipmapsAutoUpdate===!0&&O.generateMipmap(Ot),ot.unbindTexture()},this.initRenderTarget=function(M){wt.get(M).__webglFramebuffer===void 0&&Nt.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?Nt.setTextureCube(M,0):M.isData3DTexture?Nt.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?Nt.setTexture2DArray(M,0):Nt.setTexture2D(M,0),ot.unbindTexture()},this.resetState=function(){H=0,F=0,tt=null,ot.reset(),mt.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return _i}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=le._getDrawingBufferColorSpace(t),e.unpackColorSpace=le._getUnpackColorSpace()}};var oh=class extends hr{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let t=new Gi;t.deleteAttribute("uv");let e=new Ii({side:gn}),n=new Ii,i=new fa(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);let r=new Qe(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new Os(t,n,6),a=new rn;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);let l=new Qe(t,mo(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new Qe(t,mo(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new Qe(t,mo(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let d=new Qe(t,mo(43));d.position.set(-.462,8.89,14.52),d.scale.set(4.38,5.441,.088),this.add(d);let u=new Qe(t,mo(20));u.position.set(3.235,11.486,-12.541),u.scale.set(2.5,2,.1),this.add(u);let f=new Qe(t,mo(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function mo(s){return new la({color:0,emissive:16777215,emissiveIntensity:s})}function Nm(s,t={}){let e=!!t.reduced,n=innerWidth<760,i;try{i=new ih({canvas:s,antialias:!0,alpha:!0,powerPreference:"high-performance"})}catch{return null}i.setPixelRatio(Math.min(devicePixelRatio,n?1.5:2)),i.setSize(innerWidth,innerHeight,!1),i.toneMapping=_a,i.toneMappingExposure=1.05;let r=new hr,o=new fo(i);r.environment=o.fromScene(new oh,.04).texture;let a=new wn(n?50:38,innerWidth/innerHeight,.1,100);a.position.set(0,0,14);let l=new ro(16773590,2.2);l.position.set(5,6,8),r.add(l);let c=new ro(4033535,1.6);c.position.set(-6,-2,-4),r.add(c),r.add(new pa(1778752,.6));let h=new os;r.add(h);let d=n?170:300,u=n?1.75:2.75,f=new Ii({color:14264644,metalness:1,roughness:.26}),m=new Ii({color:2763569,metalness:.7,roughness:.28}),_=new Ii({color:1381914,metalness:.9,roughness:.35}),p=new Gi(1,1,1),g=[f,m,_],v=[Math.round(d*.34),Math.round(d*.4)];v.push(d-v[0]-v[1]);let T=g.map(bt=>bt.color.clone());g.forEach(bt=>bt.color.set(16777215));let y=g.map((bt,Dt)=>{let ot=new Os(p,bt,v[Dt]);for(let Xt=0;Xt<v[Dt];Xt++)ot.setColorAt(Xt,T[Dt]);return ot.instanceMatrix.setUsage(th),h.add(ot),ot}),w=[],E=(bt,Dt)=>bt+Math.random()*(Dt-bt),x=0,b=[...Array(d).keys()].sort(()=>Math.random()-.5);y.forEach((bt,Dt)=>{for(let ot=0;ot<v[Dt];ot++,x++){let Xt=b[x]+.5,wt=Math.acos(1-2*Xt/d),Nt=Math.PI*(1+Math.sqrt(5))*Xt,A=new G(Math.cos(Nt)*Math.sin(wt),Math.sin(Nt)*Math.sin(wt),Math.cos(wt)).multiplyScalar(u),S=A.clone().normalize();w.push({mesh:bt,j:ot,base:T[Dt],sphere:A,dir:S,start:S.clone().multiplyScalar(E(14,26)).add(new G(E(-6,6),E(-6,6),E(-4,4))),scatter:new G(E(-11,11),E(-6.5,6.5),E(-7,3)),size:E(.28,.52)*(n?.9:1),rot:new oi(E(0,6.3),E(0,6.3),E(0,6.3)),spin:new G(E(-1,1),E(-1,1),E(-1,1)).multiplyScalar(.6),delay:E(0,.55),phase:E(0,6.3)})}});let P=new G(0,0,1);w.forEach(bt=>{bt.align=new En().setFromUnitVectors(P,bt.dir)});let C=5,N=[...Array(d).keys()].sort(()=>Math.random()-.5),D=1,W=.5;function I(){let bt=14-C,Dt=2*Math.tan(a.fov*Math.PI/360)*bt*1.08,ot=Dt*a.aspect;D=Math.max(4,Math.round(Math.sqrt(d*ot/Dt)));let Xt=Math.ceil(d/D),wt=Math.max(ot/D,Dt/Xt);W=wt*.9,w.forEach((Nt,A)=>{let S=N[A],z=S%D,at=Math.floor(S/D);Nt.grid=new G((z-(D-1)/2)*wt,((Xt-1)/2-at)*wt,C),Nt.col=z/Math.max(1,D-1),Nt.row=at/Math.max(1,Xt-1),Nt.center=Math.min(1,Math.hypot(Nt.grid.x/(ot/2),Nt.grid.y/(Dt/2))/1.2)})}let B=n?34:54,H=new aa(.34,.085,14,36);H.scale(1.55,1,1);let F=new Ii({color:15121756,metalness:1,roughness:.18}),tt=new Os(H,F,B);tt.instanceMatrix.setUsage(th),r.add(tt);let X=new ra([new G,new G,new G,new G]),R=new G(1,0,0),K=new rn,yt=new En,kt=new En,Y=new G,ft=new G,xt=0,Mt=0,dt=0,Rt=0,pe=0,Ct=0,Gt=null,It=new ma,Ft=0,jt=0,ce=new G(0,1,0),Z=new En,$t=new En,Ve=new Jt(16769162),ge=new Jt,ne=bt=>Math.atan2(Math.sin(bt),Math.cos(bt));addEventListener("pointermove",bt=>{xt=bt.clientX/innerWidth*2-1,Mt=bt.clientY/innerHeight*2-1},{passive:!0}),addEventListener("scroll",()=>{pe=Math.min(scrollY/innerHeight,2.2)},{passive:!0}),addEventListener("resize",()=>{a.aspect=innerWidth/innerHeight,a.updateProjectionMatrix(),I(),i.setSize(innerWidth,innerHeight,!1)}),I();let Ie=bt=>1-Math.pow(1-Math.min(Math.max(bt,0),1),4),Te=bt=>(bt=Math.min(Math.max(bt,0),1),bt*bt*(3-2*bt));function O(){let bt=It.getElapsedTime();dt+=(xt-dt)*.05,Rt+=(Mt-Rt)*.05,Ct+=(pe-Ct)*.08;let Dt=Gt===null?0:e?1:(bt-Gt)/2.2,ot=Te(Ct/.9),Xt=n?2.5:2.9;jt+=(Ft-jt)*.14;let wt=Te(jt/.32),Nt=(jt-.32)/.24,A=(jt-.56)/.3,S=1-wt;h.position.set(Xt*(1-ot*.6)*S,((n?3.4:0)+ot*(n?-3:.3))*S,0),h.rotation.y=ne(bt*.18+dt*.5)*S,h.rotation.x=(Math.sin(bt*.3)*.12+Rt*.3)*S;for(let nt of w){let k=Ie((Dt-nt.delay)/(1-nt.delay)),j=1+Math.sin(bt*1.6+nt.phase)*.035*(1-ot);Y.copy(nt.start).lerp(nt.sphere,k).multiplyScalar(j),Y.lerp(nt.scatter,ot),Y.y+=Math.sin(bt*.7+nt.phase)*.25*ot;let lt=nt.size*(.2+.8*k)*(1-ot*.25);if(yt.copy(nt.align),kt.setFromEuler(new oi(nt.rot.x+bt*nt.spin.x,nt.rot.y+bt*nt.spin.y,nt.rot.z+bt*nt.spin.z)),K.quaternion.copy(kt).slerp(yt,k*(1-ot)),jt>.001){let L=Te(wt*1.25-nt.center*.25);Y.lerp(nt.grid,L);let Q=Te(Nt*1.7-nt.col*.7);Z.setFromAxisAngle(ce,Math.PI*Q),K.quaternion.slerp($t,L).multiply(Z.slerp($t,1-L));let $=Te(A*1.5-nt.center*.5);Y.z+=$*(12+nt.center*6),Y.x*=1+$*.6,Y.y*=1+$*.6;let pt=Math.sin(Math.PI*Math.min(Q,.5))*L;ge.copy(nt.base).lerp(Ve,Math.min(1,pt*.6+$*.3)),nt.mesh.setColorAt(nt.j,ge),lt=lt+(W-lt)*L,K.scale.set(lt*(1+pt*.12),lt*(1+pt*.12),lt*(1-L*.55))}else nt.mesh.setColorAt(nt.j,nt.base),K.scale.setScalar(lt);K.position.copy(Y),K.updateMatrix(),nt.mesh.setMatrixAt(nt.j,K.matrix)}y.forEach(nt=>{nt.instanceMatrix.needsUpdate=!0,nt.instanceColor&&(nt.instanceColor.needsUpdate=!0)});let z=Math.sin(bt*.8)*.6,et=(1-Ie(Dt*1.2-.15))*16,ht=X.points;ht[0].set(-14-et,-7.2+z*.3,-3),ht[1].set(-4-et*.5,-5.4+z*.6,-1.6),ht[2].set(4.5+et*.5,-1.4-z*.6,-1.2),ht[3].set(14+et,3.4+z*.3,-3.5);for(let nt=0;nt<B;nt++){let k=nt/(B-1);X.getPointAt(k,K.position),K.position.y+=ot*-2.5+(n?-2.6:0)-wt*12,X.getTangentAt(k,ft),K.quaternion.setFromUnitVectors(R,ft),nt%2&&(yt.setFromAxisAngle(R,Math.PI/2),K.quaternion.multiply(yt)),K.scale.setScalar(n?.8:1),K.updateMatrix(),tt.setMatrixAt(nt,K.matrix)}tt.instanceMatrix.needsUpdate=!0,a.position.x=dt*.6,a.position.y=-Rt*.4,a.lookAt(0,0,0),i.render(r,a)}let ue=!0;return document.addEventListener("visibilitychange",()=>{ue=!document.hidden}),i.setAnimationLoop(()=>{ue&&O()}),{assemble(){Gt===null&&(Gt=It.getElapsedTime())},setGrid(bt){Ft=Math.min(1,Math.max(0,bt))}}}function ms(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function Hm(s,t){s.prototype=Object.create(t.prototype),s.prototype.constructor=s,s.__proto__=t}var Kn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Oa={duration:.5,overwrite:!1,delay:0},Bf,_n,Oe,yi=1e8,Me=1/yi,Pf=Math.PI*2,hM=Pf/4,uM=0,Wm=Math.sqrt,fM=Math.cos,dM=Math.sin,ln=function(t){return typeof t=="string"},We=function(t){return typeof t=="function"},_s=function(t){return typeof t=="number"},xh=function(t){return typeof t=="undefined"},$i=function(t){return typeof t=="object"},$n=function(t){return t!==!1},zf=function(){return typeof window!="undefined"},ah=function(t){return We(t)||ln(t)},Xm=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Rn=Array.isArray,pM=/random\([^)]+\)/g,mM=/,\s*/g,Um=/(?:-?\.?\d|\.)+/gi,kf=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,vr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,bf=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Vf=/[+-]=-?[.\d]+/,gM=/[^,'"\[\]\s]+/gi,_M=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,ze,Zi,If,Gf,ci={},uh={},qm,Ym=function(t){return(uh=_o(t,ci))&&Pn},vh=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},Fa=function(t,e){return!e&&console.warn(t)},Zm=function(t,e){return t&&(ci[t]=e)&&uh&&(uh[t]=e)||ci},Ba=function(){return 0},xM={suppressEvents:!0,isStart:!0,kill:!1},lh={suppressEvents:!0,kill:!1},vM={suppressEvents:!0},Hf={},Ws=[],Lf={},Jm,Zn={},Tf={},Om=30,ch=[],Wf="",Xf=function(t){var e=t[0],n,i;if($i(e)||We(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=ch.length;i--&&!ch[i].targetTest(e););n=ch[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new Jf(t[i],n)))||t.splice(i,1);return t},Xs=function(t){return t._gsap||Xf(Si(t))[0]._gsap},qf=function(t,e,n){return(n=t[e])&&We(n)?t[e]():xh(n)&&t.getAttribute&&t.getAttribute(e)||n},Bn=function(t,e){return(t=t.split(",")).forEach(e)||t},Xe=function(t){return Math.round(t*1e5)/1e5||0},Be=function(t){return Math.round(t*1e7)/1e7||0},yr=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},yM=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},fh=function(){var t=Ws.length,e=Ws.slice(0),n,i;for(Lf={},Ws.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Yf=function(t){return!!(t._initted||t._startAt||t.add)},$m=function(t,e,n,i){Ws.length&&!_n&&fh(),t.render(e,n,i||!!(_n&&e<0&&Yf(t))),Ws.length&&!_n&&fh()},Km=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(gM).length<2?e:ln(t)?t.trim():t},Qm=function(t){return t},hi=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},SM=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},_o=function(t,e){for(var n in e)t[n]=e[n];return t},Fm=function s(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=$i(e[n])?s(t[n]||(t[n]={}),e[n]):e[n]);return t},dh=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},Da=function(t){var e=t.parent||ze,n=t.keyframes?SM(Rn(t.keyframes)):hi;if($n(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},MM=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},jm=function(t,e,n,i,r){n===void 0&&(n="_first"),i===void 0&&(i="_last");var o=t[i],a;if(r)for(a=e[r];o&&o[r]>a;)o=o._prev;return o?(e._next=o._next,o._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=o,e.parent=e._dp=t,e},yh=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=e._prev,o=e._next;r?r._next=o:t[n]===e&&(t[n]=o),o?o._prev=r:t[i]===e&&(t[i]=r),e._next=e._prev=e.parent=null},qs=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},gr=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},bM=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},Df=function(t,e,n,i){return t._startAt&&(_n?t._startAt.revert(lh):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},TM=function s(t){return!t||t._ts&&s(t.parent)},Bm=function(t){return t._repeat?xo(t._tTime,t=t.duration()+t._rDelay)*t:0},xo=function(t,e){var n=Math.floor(t=Be(t/e));return t&&n===t?n-1:n},ph=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},Sh=function(t){return t._end=Be(t._start+(t._tDur/Math.abs(t._ts||t._rts||Me)||0))},Mh=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=Be(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),Sh(t),n._dirty||gr(n,t)),t},tg=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=ph(t.rawTime(),e),(!e._dur||Ga(0,e.totalDuration(),n)-e._tTime>Me)&&e.render(n,!0)),gr(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-Me}},Ji=function(t,e,n,i){return e.parent&&qs(e),e._start=Be((_s(n)?n:!n&&mh(e)&&(!t._last||t._last._start>=t._time)?t._last?t._last._start:t._time:n||t!==ze?vi(t,n,e):t._time)+e._delay),e._end=Be(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),jm(t,e,"_first","_last",t._sort?"_start":0),mh(e)||(t._recent=e),i||tg(t,e),t._ts<0&&Mh(t,t._tTime),t},eg=function(t,e){return(ci.ScrollTrigger||vh("scrollTrigger",e))&&ci.ScrollTrigger.create(e,t)},ng=function(t,e,n,i,r){if(Qf(t,e,r),!t._initted)return 1;if(!n&&t._pt&&!_n&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&Jm!==Jn.frame)return Ws.push(t),t._lazy=[r,i],1},wM=function s(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||s(e))},mh=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},EM=function(t,e,n,i){var r=t.ratio,o=e<0||!e&&(!t._start&&wM(t)&&!(!t._initted&&mh(t))||(t._ts<0||t._dp._ts<0)&&!mh(t))?0:1,a=t._rDelay,l=0,c,h,d;if(a&&t._repeat&&(l=Ga(0,t._tDur,e),h=xo(l,a),t._yoyo&&h&1&&(o=1-o),h!==xo(t._tTime,a)&&(r=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==r||_n||i||t._zTime===Me||!e&&t._zTime){if(!t._initted&&ng(t,e,i,n,l))return;for(d=t._zTime,t._zTime=e||(n?Me:0),n||(n=e&&!d),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=l,c=t._pt;c;)c.r(o,c.d),c=c._next;e<0&&Df(t,e,n,!0),t._onUpdate&&!n&&li(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&li(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===o&&(o&&qs(t,1),!n&&!_n&&(li(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},AM=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},vo=function(t,e,n,i){var r=t._repeat,o=Be(e)||0,a=t._tTime/t._tDur;return a&&!i&&(t._time*=o/t._dur),t._dur=o,t._tDur=r?r<0?1e10:Be(o*(r+1)+t._rDelay*r):o,a>0&&!i&&Mh(t,t._tTime=t._tDur*a),t.parent&&Sh(t),n||gr(t.parent,t),t},zm=function(t){return t instanceof Cn?gr(t):vo(t,t._dur)},CM={_start:0,endTime:Ba,totalDuration:Ba},vi=function s(t,e,n){var i=t.labels,r=t._recent||CM,o=t.duration()>=yi?r.endTime(!1):t._dur,a,l,c;return ln(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",a=e.indexOf("="),l==="<"||l===">"?(a>=0&&(e=e.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(a<0?r:n).totalDuration()/100:1)):a<0?(e in i||(i[e]=o),i[e]):(l=parseFloat(e.charAt(a-1)+e.substr(a+1)),c&&n&&(l=l/100*(Rn(n)?n[0]:n).totalDuration()),a>1?s(t,e.substr(0,a-1),n)+l:o+l)):e==null?o:+e},Na=function(t,e,n){var i=_s(e[1]),r=(i?2:1)+(t<2?0:1),o=e[r],a,l;if(i&&(o.duration=e[1]),o.parent=n,t){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=$n(l.vars.inherit)&&l.parent;o.immediateRender=$n(a.immediateRender),t<2?o.runBackwards=1:o.startAt=e[r-1]}return new Ye(e[0],o,e[r+1])},Ys=function(t,e){return t||t===0?e(t):e},Ga=function(t,e,n){return n<t?t:n>e?e:n},xn=function(t,e){return!ln(t)||!(e=_M.exec(t))?"":e[1]},RM=function(t,e,n){return Ys(n,function(i){return Ga(t,e,i)})},Nf=[].slice,ig=function(t,e){return t&&$i(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&$i(t[0]))&&!t.nodeType&&t!==Zi},PM=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var r;return ln(i)&&!e||ig(i,1)?(r=n).push.apply(r,Si(i)):n.push(i)})||n},Si=function(t,e,n){return Oe&&!e&&Oe.selector?Oe.selector(t):ln(t)&&!n&&(If||!yo())?Nf.call((e||Gf).querySelectorAll(t),0):Rn(t)?PM(t,n):ig(t)?Nf.call(t,0):t?[t]:[]},Uf=function(t){return t=Si(t)[0]||Fa("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return Si(e,n.querySelectorAll?n:n===t?Fa("Invalid scope")||Gf.createElement("div"):t)}},sg=function(t){return t.sort(function(){return .5-Math.random()})},rg=function(t){if(We(t))return t;var e=$i(t)?t:{each:t},n=_r(e.ease),i=e.from||0,r=parseFloat(e.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=e.axis,h=i,d=i;return ln(i)?h=d={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(h=i[0],d=i[1]),function(u,f,m){var _=(m||e).length,p=o[_],g,v,T,y,w,E,x,b,P;if(!p){if(P=e.grid==="auto"?0:(e.grid||[1,yi])[1],!P){for(x=-yi;x<(x=m[P++].getBoundingClientRect().left)&&P<_;);P<_&&P--}for(p=o[_]=[],g=l?Math.min(P,_)*h-.5:i%P,v=P===yi?0:l?_*d/P-.5:i/P|0,x=0,b=yi,E=0;E<_;E++)T=E%P-g,y=v-(E/P|0),p[E]=w=c?Math.abs(c==="y"?y:T):Wm(T*T+y*y),w>x&&(x=w),w<b&&(b=w);i==="random"&&sg(p),p.max=x-b,p.min=b,p.v=_=(parseFloat(e.amount)||parseFloat(e.each)*(P>_?_-1:c?c==="y"?_/P:P:Math.max(P,_/P))||0)*(i==="edges"?-1:1),p.b=_<0?r-_:r,p.u=xn(e.amount||e.each)||0,n=n&&_<0?HM(n):n}return _=(p[u]-p.min)/p.max||0,Be(p.b+(n?n(_):_)*p.v)+p.u}},Of=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=Be(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(_s(n)?0:xn(n))}},og=function(t,e){var n=Rn(t),i,r;return!n&&$i(t)&&(i=n=t.radius||yi,t.values?(t=Si(t.values),(r=!_s(t[0]))&&(i*=i)):t=Of(t.increment)),Ys(e,n?We(t)?function(o){return r=t(o),Math.abs(r-o)<=i?r:o}:function(o){for(var a=parseFloat(r?o.x:o),l=parseFloat(r?o.y:0),c=yi,h=0,d=t.length,u,f;d--;)r?(u=t[d].x-a,f=t[d].y-l,u=u*u+f*f):u=Math.abs(t[d]-a),u<c&&(c=u,h=d);return h=!i||c<=i?t[h]:o,r||h===o||_s(o)?h:h+xn(o)}:Of(t))},ag=function(t,e,n,i){return Ys(Rn(t)?!e:n===!0?!!(n=0):!i,function(){return Rn(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},IM=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(r,o){return o(r)},i)}},LM=function(t,e){return function(n){return t(parseFloat(n))+(e||xn(n))}},DM=function(t,e,n){return cg(t,e,0,1,n)},lg=function(t,e,n){return Ys(n,function(i){return t[~~e(i)]})},NM=function s(t,e,n){var i=e-t;return Rn(t)?lg(t,s(0,t.length),e):Ys(n,function(r){return(i+(r-t)%i)%i+t})},UM=function s(t,e,n){var i=e-t,r=i*2;return Rn(t)?lg(t,s(0,t.length-1),e):Ys(n,function(o){return o=(r+(o-t)%r)%r||0,t+(o>i?r-o:o)})},So=function(t){return t.replace(pM,function(e){var n=e.indexOf("[")+1,i=e.substring(n||7,n?e.indexOf("]"):e.length-1).split(mM);return ag(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},cg=function(t,e,n,i,r){var o=e-t,a=i-n;return Ys(r,function(l){return n+((l-t)/o*a||0)})},OM=function s(t,e,n,i){var r=isNaN(t+e)?0:function(f){return(1-f)*t+f*e};if(!r){var o=ln(t),a={},l,c,h,d,u;if(n===!0&&(i=1)&&(n=null),o)t={p:t},e={p:e};else if(Rn(t)&&!Rn(e)){for(h=[],d=t.length,u=d-2,c=1;c<d;c++)h.push(s(t[c-1],t[c]));d--,r=function(m){m*=d;var _=Math.min(u,~~m);return h[_](m-_)},n=e}else i||(t=_o(Rn(t)?[]:{},t));if(!h){for(l in e)$f.call(a,t,l,"get",e[l]);r=function(m){return ed(m,a)||(o?t.p:t)}}}return Ys(n,r)},km=function(t,e,n){var i=t.labels,r=yi,o,a,l;for(o in i)a=i[o]-e,a<0==!!n&&a&&r>(a=Math.abs(a))&&(l=o,r=a);return l},li=function(t,e,n){var i=t.vars,r=i[e],o=Oe,a=t._ctx,l,c,h;if(r)return l=i[e+"Params"],c=i.callbackScope||t,n&&Ws.length&&fh(),a&&(Oe=a),h=l?r.apply(c,l):r.call(c),Oe=o,h},Ia=function(t){return qs(t),t.scrollTrigger&&t.scrollTrigger.kill(!!_n),t.progress()<1&&li(t,"onInterrupt"),t},go,hg=[],ug=function(t){if(t)if(t=!t.name&&t.default||t,zf()||t.headless){var e=t.name,n=We(t),i=e&&!n&&t.init?function(){this._props=[]}:t,r={init:Ba,render:ed,add:$f,kill:jM,modifier:QM,rawVars:0},o={targetTest:0,get:0,getSetter:bh,aliases:{},register:0};if(yo(),t!==i){if(Zn[e])return;hi(i,hi(dh(t,r),o)),_o(i.prototype,_o(r,dh(t,o))),Zn[i.prop=e]=i,t.targetTest&&(ch.push(i),Hf[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}Zm(e,i),t.register&&t.register(Pn,i,zn)}else hg.push(t)},Ce=255,La={aqua:[0,Ce,Ce],lime:[0,Ce,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Ce],navy:[0,0,128],white:[Ce,Ce,Ce],olive:[128,128,0],yellow:[Ce,Ce,0],orange:[Ce,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Ce,0,0],pink:[Ce,192,203],cyan:[0,Ce,Ce],transparent:[Ce,Ce,Ce,0]},wf=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*Ce+.5|0},fg=function(t,e,n){var i=t?_s(t)?[t>>16,t>>8&Ce,t&Ce]:0:La.black,r,o,a,l,c,h,d,u,f,m;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),La[t])i=La[t];else if(t.charAt(0)==="#"){if(t.length<6&&(r=t.charAt(1),o=t.charAt(2),a=t.charAt(3),t="#"+r+r+o+o+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&Ce,i&Ce,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&Ce,t&Ce]}else if(t.substr(0,3)==="hsl"){if(i=m=t.match(Um),!e)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,o=h<=.5?h*(c+1):h+c-h*c,r=h*2-o,i.length>3&&(i[3]*=1),i[0]=wf(l+1/3,r,o),i[1]=wf(l,r,o),i[2]=wf(l-1/3,r,o);else if(~t.indexOf("="))return i=t.match(kf),n&&i.length<4&&(i[3]=1),i}else i=t.match(Um)||La.transparent;i=i.map(Number)}return e&&!m&&(r=i[0]/Ce,o=i[1]/Ce,a=i[2]/Ce,d=Math.max(r,o,a),u=Math.min(r,o,a),h=(d+u)/2,d===u?l=c=0:(f=d-u,c=h>.5?f/(2-d-u):f/(d+u),l=d===r?(o-a)/f+(o<a?6:0):d===o?(a-r)/f+2:(r-o)/f+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},dg=function(t){var e=[],n=[],i=-1;return t.split(gs).forEach(function(r){var o=r.match(vr)||[];e.push.apply(e,o),n.push(i+=o.length+1)}),e.c=n,e},Vm=function(t,e,n){var i="",r=(t+i).match(gs),o=e?"hsla(":"rgba(",a=0,l,c,h,d;if(!r)return t;if(r=r.map(function(u){return(u=fg(u,e,1))&&o+(e?u[0]+","+u[1]+"%,"+u[2]+"%,"+u[3]:u.join(","))+")"}),n&&(h=dg(t),l=n.c,l.join(i)!==h.c.join(i)))for(c=t.replace(gs,"1").split(vr),d=c.length-1;a<d;a++)i+=c[a]+(~l.indexOf(a)?r.shift()||o+"0,0,0,0)":(h.length?h:r.length?r:n).shift());if(!c)for(c=t.split(gs),d=c.length-1;a<d;a++)i+=c[a]+r[a];return i+c[d]},gs=(function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in La)s+="|"+t+"\\b";return new RegExp(s+")","gi")})(),FM=/hsl[a]?\(/,Zf=function(t){var e=t.join(" "),n;if(gs.lastIndex=0,gs.test(e))return n=FM.test(e),t[1]=Vm(t[1],n),t[0]=Vm(t[0],n,dg(t[1])),!0},za,Jn=(function(){var s=Date.now,t=500,e=33,n=s(),i=n,r=1e3/240,o=r,a=[],l,c,h,d,u,f,m=function _(p){var g=s()-i,v=p===!0,T,y,w,E;if((g>t||g<0)&&(n+=g-e),i+=g,w=i-n,T=w-o,(T>0||v)&&(E=++d.frame,u=w-d.time*1e3,d.time=w=w/1e3,o+=T+(T>=r?0:r-T),y=1),v||(l=c(_)),y)for(f=0;f<a.length;f++)a[f](w,u,E,p)};return d={time:0,frame:0,tick:function(){m(!0)},deltaRatio:function(p){return u/(1e3/(p||60))},wake:function(){qm&&(!If&&zf()&&(Zi=If=window,Gf=Zi.document||{},ci.gsap=Pn,(Zi.gsapVersions||(Zi.gsapVersions=[])).push(Pn.version),Ym(uh||Zi.GreenSockGlobals||!Zi.gsap&&Zi||{}),hg.forEach(ug)),h=typeof requestAnimationFrame!="undefined"&&requestAnimationFrame,l&&d.sleep(),c=h||function(p){return setTimeout(p,o-d.time*1e3+1|0)},za=1,m(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),za=0,c=Ba},lagSmoothing:function(p,g){t=p||1/0,e=Math.min(g||33,t)},fps:function(p){r=1e3/(p||240),o=d.time*1e3+r},add:function(p,g,v){var T=g?function(y,w,E,x){p(y,w,E,x),d.remove(T)}:p;return d.remove(p),a[v?"unshift":"push"](T),yo(),T},remove:function(p,g){~(g=a.indexOf(p))&&a.splice(g,1)&&f>=g&&f--},_listeners:a},d})(),yo=function(){return!za&&Jn.wake()},he={},BM=/^[\d.\-M][\d.\-,\s]/,zM=/["']/g,kM=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],r=1,o=n.length,a,l,c;r<o;r++)l=n[r],a=r!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),e[i]=isNaN(c)?c.replace(zM,"").trim():+c,i=l.substr(a+1).trim();return e},VM=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},GM=function(t){var e=(t+"").split("("),n=he[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[kM(e[1])]:VM(t).split(",").map(Km)):he._CE&&BM.test(t)?he._CE("",t):n},HM=function(t){return function(e){return 1-t(1-e)}},_r=function(t,e){return t&&(We(t)?t:he[t]||GM(t))||e},Sr=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var r={easeIn:e,easeOut:n,easeInOut:i},o;return Bn(t,function(a){he[a]=ci[a]=r,he[o=a.toLowerCase()]=n;for(var l in r)he[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=he[a+"."+l]=r[l]}),r},pg=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},Ef=function s(t,e,n){var i=e>=1?e:1,r=(n||(t?.3:.45))/(e<1?e:1),o=r/Pf*(Math.asin(1/i)||0),a=function(h){return h===1?1:i*Math.pow(2,-10*h)*dM((h-o)*r)+1},l=t==="out"?a:t==="in"?function(c){return 1-a(1-c)}:pg(a);return r=Pf/r,l.config=function(c,h){return s(t,c,h)},l},Af=function s(t,e){e===void 0&&(e=1.70158);var n=function(o){return o?--o*o*((e+1)*o+e)+1:0},i=t==="out"?n:t==="in"?function(r){return 1-n(1-r)}:pg(n);return i.config=function(r){return s(t,r)},i};Bn("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,t){var e=t<5?t+1:t;Sr(s+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});he.Linear.easeNone=he.none=he.Linear.easeIn;Sr("Elastic",Ef("in"),Ef("out"),Ef());(function(s,t){var e=1/t,n=2*e,i=2.5*e,r=function(a){return a<e?s*a*a:a<n?s*Math.pow(a-1.5/t,2)+.75:a<i?s*(a-=2.25/t)*a+.9375:s*Math.pow(a-2.625/t,2)+.984375};Sr("Bounce",function(o){return 1-r(1-o)},r)})(7.5625,2.75);Sr("Expo",function(s){return Math.pow(2,10*(s-1))*s+s*s*s*s*s*s*(1-s)});Sr("Circ",function(s){return-(Wm(1-s*s)-1)});Sr("Sine",function(s){return s===1?1:-fM(s*hM)+1});Sr("Back",Af("in"),Af("out"),Af());he.SteppedEase=he.steps=ci.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),r=e?1:0,o=1-Me;return function(a){return((i*Ga(0,o,a)|0)+r)*n}}};Oa.ease=he["quad.out"];Bn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return Wf+=s+","+s+"Params,"});var Jf=function(t,e){this.id=uM++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:qf,this.set=e?e.getSetter:bh},ka=(function(){function s(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,vo(this,+e.duration,1,1),this.data=e.data,Oe&&(this._ctx=Oe,Oe.data.push(this)),za||Jn.wake()}var t=s.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,vo(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(yo(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(Mh(this,n),!r._dp||r.parent||tg(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Ji(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Me||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),$m(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Bm(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Bm(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?xo(this._tTime,r)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-Me?0:this._rts;if(this._rts===n)return this;var r=this.parent&&this._ts?ph(this.parent._time,this):this._tTime,o=this._rts<0;this._rts=+n||0,this._ts=this._ps||n===-Me?0:this._rts;var a=this.totalDuration();return(o!==this._rts<0||r>0&&r<a)&&this.totalTime(Ga(-Math.abs(this._delay),a,r),i!==!1),Sh(this),bM(this)},t.paused=function(n){if(!arguments.length)return this._ps;if(this._ps!==n)if(this._ps=n,n)this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0;else{yo(),this._ts=this._rts;var i=this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,r=this.progress()===1&&Math.abs(this._zTime)!==Me,o;if(r)for(this._tTime-=Me,o=this._first;o;){if(!o._dur&&o._zTime<0&&o._ts&&o._start<=i+Me){r=!1;break}o=o._next}this.totalTime(i,r)}return this},t.startTime=function(n){if(arguments.length){this._start=Be(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Ji(i,this,this._start-this._delay),this}return this._start},t.endTime=function(n){return this._start+($n(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?ph(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=vM);var i=_n;return _n=n,Yf(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),_n=i,this},t.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):r},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,zm(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,zm(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(vi(this,n),$n(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,$n(i)),this._dur||(this._zTime=-Me),this},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Me:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-Me,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-Me)},t.eventCallback=function(n,i,r){var o=this.vars;return arguments.length>1?(i?(o[n]=i,r&&(o[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},t.then=function(n){var i=this,r=i._prom;return new Promise(function(o){var a=We(n)?n:Qm,l=function(){var h=i.then;i.then=null,r&&r(),We(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=h),o(a),i.then=h};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},t.kill=function(){Ia(this)},s})();hi(ka.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Me,_prom:0,_ps:!1,_rts:1});var Cn=(function(s){Hm(t,s);function t(n,i){var r;return n===void 0&&(n={}),r=s.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=$n(n.sortChildren),ze&&Ji(n.parent||ze,ms(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&eg(ms(r),n.scrollTrigger),r}var e=t.prototype;return e.to=function(i,r,o){return Na(0,arguments,this),this},e.from=function(i,r,o){return Na(1,arguments,this),this},e.fromTo=function(i,r,o,a){return Na(2,arguments,this),this},e.set=function(i,r,o){return r.duration=0,r.parent=this,Da(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new Ye(i,r,vi(this,o),1),this},e.call=function(i,r,o){return Ji(this,Ye.delayedCall(0,i,r),o)},e.staggerTo=function(i,r,o,a,l,c,h){return o.duration=r,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=h,o.parent=this,new Ye(i,o,vi(this,l)),this},e.staggerFrom=function(i,r,o,a,l,c,h){return o.runBackwards=1,Da(o).immediateRender=$n(o.immediateRender),this.staggerTo(i,r,o,a,l,c,h)},e.staggerFromTo=function(i,r,o,a,l,c,h,d){return a.startAt=o,Da(a).immediateRender=$n(a.immediateRender),this.staggerTo(i,r,a,l,c,h,d)},e.render=function(i,r,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:Be(i),d=this._zTime<0!=i<0&&(this._initted||!c),u,f,m,_,p,g,v,T,y,w,E,x;if(this!==ze&&h>l&&i>=0&&(h=l),h!==this._tTime||o||d){if(a!==this._time&&c&&(h+=this._time-a,i+=this._time-a),u=h,y=this._start,T=this._ts,g=!T,d&&(c||(a=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(E=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,r,o);if(u=Be(h%p),h===l?(_=this._repeat,u=c):(w=Be(h/p),_=~~w,_&&_===w&&(u=c,_--),u>c&&(u=c)),w=xo(this._tTime,p),!a&&this._tTime&&w!==_&&this._tTime-w*p-this._dur<=0&&(w=_),E&&_&1&&(u=c-u,x=1),_!==w&&!this._lock){var b=E&&w&1,P=b===(E&&_&1);if(_<w&&(b=!b),a=b?0:h%c?c:h,this._lock=1,this.render(a||(x?0:Be(_*p)),r,!c)._lock=0,this._tTime=h,!r&&this.parent&&li(this,"onRepeat"),this.vars.repeatRefresh&&!x&&(this.invalidate()._lock=1,w=_),a&&a!==this._time||g!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,P&&(this._lock=2,a=b?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!x&&this.invalidate()),this._lock=0,!this._ts&&!g)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=AM(this,Be(a),Be(u)),v&&(h-=u-(u=v._start))),this._tTime=h,this._time=u,this._act=!!T,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&h&&c&&!r&&!w&&(li(this,"onStart"),this._tTime!==h))return this;if(u>=a&&i>=0)for(f=this._first;f;){if(m=f._next,(f._act||u>=f._start)&&f._ts&&v!==f){if(f.parent!==this)return this.render(i,r,o);if(f.render(f._ts>0?(u-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(u-f._start)*f._ts,r,o),u!==this._time||!this._ts&&!g){v=0,m&&(h+=this._zTime=-Me);break}}f=m}else{f=this._last;for(var C=i<0?i:u;f;){if(m=f._prev,(f._act||C<=f._end)&&f._ts&&v!==f){if(f.parent!==this)return this.render(i,r,o);if(f.render(f._ts>0?(C-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(C-f._start)*f._ts,r,o||_n&&Yf(f)),u!==this._time||!this._ts&&!g){v=0,m&&(h+=this._zTime=C?-Me:Me);break}}f=m}}if(v&&!r&&(this.pause(),v.render(u>=a?0:-Me)._zTime=u>=a?1:-1,this._ts))return this._start=y,Sh(this),this.render(i,r,o);this._onUpdate&&!r&&li(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&a)&&(y===this._start||Math.abs(T)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&qs(this,1),!r&&!(i<0&&!a)&&(h||a||!l)&&(li(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,r){var o=this;if(_s(r)||(r=vi(this,r,i)),!(i instanceof ka)){if(Rn(i))return i.forEach(function(a){return o.add(a,r)}),this;if(ln(i))return this.addLabel(i,r);if(We(i))i=Ye.delayedCall(0,i);else return this}return this!==i?Ji(this,i,r):this},e.getChildren=function(i,r,o,a){i===void 0&&(i=!0),r===void 0&&(r=!0),o===void 0&&(o=!0),a===void 0&&(a=-yi);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Ye?r&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,r,o)))),c=c._next;return l},e.getById=function(i){for(var r=this.getChildren(1,1,1),o=r.length;o--;)if(r[o].vars.id===i)return r[o]},e.remove=function(i){return ln(i)?this.removeLabel(i):We(i)?this.killTweensOf(i):(i.parent===this&&yh(this,i),i===this._recent&&(this._recent=this._last),gr(this))},e.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Be(Jn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),s.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},e.addLabel=function(i,r){return this.labels[i]=vi(this,r),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,r,o){var a=Ye.delayedCall(0,r||Ba,o);return a.data="isPause",this._hasPause=1,Ji(this,a,vi(this,i))},e.removePause=function(i){var r=this._first;for(i=vi(this,i);r;)r._start===i&&r.data==="isPause"&&qs(r),r=r._next},e.killTweensOf=function(i,r,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)Hs!==a[l]&&a[l].kill(i,r);return this},e.getTweensOf=function(i,r){for(var o=[],a=Si(i),l=this._first,c=_s(r),h;l;)l instanceof Ye?yM(l._targets,a)&&(c?(!Hs||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&o.push(l):(h=l.getTweensOf(a,r)).length&&o.push.apply(o,h),l=l._next;return o},e.tweenTo=function(i,r){r=r||{};var o=this,a=vi(o,i),l=r,c=l.startAt,h=l.onStart,d=l.onStartParams,u=l.immediateRender,f,m=Ye.to(o,hi({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||Me,onStart:function(){if(o.pause(),!f){var p=r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());m._dur!==p&&vo(m,p,0,1).render(m._time,!0,!0),f=1}h&&h.apply(m,d||[])}},r));return u?m.render(0):m},e.tweenFromTo=function(i,r,o){return this.tweenTo(r,hi({startAt:{time:vi(this,i)}},o))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),km(this,vi(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),km(this,vi(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Me)},e.shiftChildren=function(i,r,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(i=Be(i);a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(r)for(c in l)l[c]>=o&&(l[c]+=i);return gr(this)},e.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return s.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,o;r;)o=r._next,this.remove(r),r=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),gr(this)},e.totalDuration=function(i){var r=0,o=this,a=o._last,l=yi,c,h,d;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(d=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),h=a._start,h>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Ji(o,a,h-a._delay,1)._lock=0):l=h,h<0&&a._ts&&(r-=h,(!d&&!o._dp||d&&d.smoothChildTiming)&&(o._start+=Be(h/o._ts),o._time-=h,o._tTime-=h),o.shiftChildren(-h,!1,-1/0),l=0),a._end>r&&a._ts&&(r=a._end),a=c;vo(o,o===ze&&o._time>r?o._time:r,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(i){if(ze._ts&&($m(ze,ph(i,ze)),Jm=Jn.frame),Jn.frame>=Om){Om+=Kn.autoSleep||120;var r=ze._first;if((!r||!r._ts)&&Kn.autoSleep&&Jn._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||Jn.sleep()}}},t})(ka);hi(Cn.prototype,{_lock:0,_hasPause:0,_forcing:0});var WM=function(t,e,n,i,r,o,a){var l=new zn(this._pt,t,e,0,1,td,null,r),c=0,h=0,d,u,f,m,_,p,g,v;for(l.b=n,l.e=i,n+="",i+="",(g=~i.indexOf("random("))&&(i=So(i)),o&&(v=[n,i],o(v,t,e),n=v[0],i=v[1]),u=n.match(bf)||[];d=bf.exec(i);)m=d[0],_=i.substring(c,d.index),f?f=(f+1)%5:_.substr(-5)==="rgba("&&(f=1),m!==u[h++]&&(p=parseFloat(u[h-1])||0,l._pt={_next:l._pt,p:_||h===1?_:",",s:p,c:m.charAt(1)==="="?yr(p,m)-p:parseFloat(m)-p,m:f&&f<4?Math.round:0},c=bf.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(Vf.test(i)||g)&&(l.e=0),this._pt=l,l},$f=function(t,e,n,i,r,o,a,l,c,h){We(i)&&(i=i(r||0,t,o));var d=t[e],u=n!=="get"?n:We(d)?c?t[e.indexOf("set")||!We(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():d,f=We(d)?c?JM:gg:jf,m;if(ln(i)&&(~i.indexOf("random(")&&(i=So(i)),i.charAt(1)==="="&&(m=yr(u,i)+(xn(u)||0),(m||m===0)&&(i=m))),!h||u!==i||Ff)return!isNaN(u*i)&&i!==""?(m=new zn(this._pt,t,e,+u||0,i-(u||0),typeof d=="boolean"?KM:_g,0,f),c&&(m.fp=c),a&&m.modifier(a,this,t),this._pt=m):(!d&&!(e in t)&&vh(e,i),WM.call(this,t,e,u,i,f,l||Kn.stringFilter,c))},XM=function(t,e,n,i,r){if(We(t)&&(t=Ua(t,r,e,n,i)),!$i(t)||t.style&&t.nodeType||Rn(t)||Xm(t))return ln(t)?Ua(t,r,e,n,i):t;var o={},a;for(a in t)o[a]=Ua(t[a],r,e,n,i);return o},Kf=function(t,e,n,i,r,o){var a,l,c,h;if(Zn[t]&&(a=new Zn[t]).init(r,a.rawVars?e[t]:XM(e[t],i,r,o,n),n,i,o)!==!1&&(n._pt=l=new zn(n._pt,r,t,0,1,a.render,a,0,a.priority),n!==go))for(c=n._ptLookup[n._targets.indexOf(r)],h=a._props.length;h--;)c[a._props[h]]=l;return a},Hs,Ff,Qf=function s(t,e,n){var i=t.vars,r=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.runBackwards,d=i.yoyoEase,u=i.keyframes,f=i.autoRevert,m=t._dur,_=t._startAt,p=t._targets,g=t.parent,v=g&&g.data==="nested"?g.vars.targets:p,T=t._overwrite==="auto"&&!Bf,y=t.timeline,w=i.easeReverse||d,E,x,b,P,C,N,D,W,I,B,H,F,tt;if(y&&(!u||!r)&&(r="none"),t._ease=_r(r,Oa.ease),t._rEase=w&&(_r(w)||t._ease),t._from=!y&&!!i.runBackwards,t._from&&(t.ratio=1),!y||u&&!i.stagger){if(W=p[0]?Xs(p[0]).harness:0,F=W&&i[W.prop],E=dh(i,Hf),_&&(_._zTime<0&&_.progress(1),e<0&&h&&a&&!f?_.render(-1,!0):_.revert(h&&m?lh:xM),_._lazy=0),o){if(qs(t._startAt=Ye.set(p,hi({data:"isStart",overwrite:!1,parent:g,immediateRender:!0,lazy:!_&&$n(l),startAt:null,delay:0,onUpdate:c&&function(){return li(t,"onUpdate")},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(_n||!a&&!f)&&t._startAt.revert(lh),a&&m&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(h&&m&&!_){if(e&&(a=!1),b=hi({overwrite:!1,data:"isFromStart",lazy:a&&!_&&$n(l),immediateRender:a,stagger:0,parent:g},E),F&&(b[W.prop]=F),qs(t._startAt=Ye.set(p,b)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(_n?t._startAt.revert(lh):t._startAt.render(-1,!0)),t._zTime=e,!a)s(t._startAt,Me,Me);else if(!e)return}for(t._pt=t._ptCache=0,l=m&&$n(l)||l&&!m,x=0;x<p.length;x++){if(C=p[x],D=C._gsap||Xf(p)[x]._gsap,t._ptLookup[x]=B={},Lf[D.id]&&Ws.length&&fh(),H=v===p?x:v.indexOf(C),W&&(I=new W).init(C,F||E,t,H,v)!==!1&&(t._pt=P=new zn(t._pt,C,I.name,0,1,I.render,I,0,I.priority),I._props.forEach(function(X){B[X]=P}),I.priority&&(N=1)),!W||F)for(b in E)Zn[b]&&(I=Kf(b,E,t,H,C,v))?I.priority&&(N=1):B[b]=P=$f.call(t,C,b,"get",E[b],H,v,0,i.stringFilter);t._op&&t._op[x]&&t.kill(C,t._op[x]),T&&t._pt&&(Hs=t,ze.killTweensOf(C,B,t.globalTime(e)),tt=!t.parent,Hs=0),t._pt&&l&&(Lf[D.id]=1)}N&&nd(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!tt,u&&e<=0&&y.render(yi,!0,!0)},qM=function(t,e,n,i,r,o,a,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],h,d,u,f;if(!c)for(c=t._ptCache[e]=[],u=t._ptLookup,f=t._targets.length;f--;){if(h=u[f][e],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==e&&h.fp!==e;)h=h._next;if(!h)return Ff=1,t.vars[e]="+=0",Qf(t,a),Ff=0,l?Fa(e+" not eligible for reset. Try splitting into individual properties"):1;c.push(h)}for(f=c.length;f--;)d=c[f],h=d._pt||d,h.s=(i||i===0)&&!r?i:h.s+(i||0)+o*h.c,h.c=n-h.s,d.e&&(d.e=Xe(n)+xn(d.e)),d.b&&(d.b=h.s+xn(d.b))},YM=function(t,e){var n=t[0]?Xs(t[0]).harness:0,i=n&&n.aliases,r,o,a,l;if(!i)return e;r=_o({},e);for(o in i)if(o in r)for(l=i[o].split(","),a=l.length;a--;)r[l[a]]=r[o];return r},ZM=function(t,e,n,i){var r=e.ease||i||"power1.inOut",o,a;if(Rn(e))a=n[t]||(n[t]=[]),e.forEach(function(l,c){return a.push({t:c/(e.length-1)*100,v:l,e:r})});else for(o in e)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(t),v:e[o],e:r})},Ua=function(t,e,n,i,r){return We(t)?t.call(e,n,i,r):ln(t)&&~t.indexOf("random(")?So(t):t},gh=Wf+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",mg={};Bn(gh+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return mg[s]=1});gh=gh.split(",");var Ye=(function(s){Hm(t,s);function t(n,i,r,o){var a;typeof i=="number"&&(r.duration=i,i=r,r=null),a=s.call(this,o?i:Da(i))||this;var l=a.vars,c=l.duration,h=l.delay,d=l.immediateRender,u=l.stagger,f=l.overwrite,m=l.keyframes,_=l.defaults,p=l.scrollTrigger,g=i.parent||ze,v=(Rn(n)||Xm(n)?_s(n[0]):"length"in i)?[n]:Si(n),T,y,w,E,x,b,P,C;if(a._targets=v.length?Xf(v):Fa("GSAP target "+n+" not found. https://gsap.com",!Kn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=f,m||u||ah(c)||ah(h)){i=a.vars;var N=i.easeReverse||i.yoyoEase;if(T=a.timeline=new Cn({data:"nested",defaults:_||{},targets:g&&g.data==="nested"?g.vars.targets:v}),T.kill(),T.parent=T._dp=ms(a),T._start=0,u||ah(c)||ah(h)){if(E=v.length,P=u&&rg(u),$i(u))for(x in u)~gh.indexOf(x)&&(C||(C={}),C[x]=u[x]);for(y=0;y<E;y++)w=dh(i,mg),w.stagger=0,N&&(w.easeReverse=N),C&&_o(w,C),b=v[y],w.duration=+Ua(c,ms(a),y,b,v),w.delay=(+Ua(h,ms(a),y,b,v)||0)-a._delay,!u&&E===1&&w.delay&&(a._delay=h=w.delay,a._start+=h,w.delay=0),T.to(b,w,P?P(y,b,v):0),T._ease=he.none;T.duration()?c=h=0:a.timeline=0}else if(m){Da(hi(T.vars.defaults,{ease:"none"})),T._ease=_r(m.ease||i.ease||"none");var D=0,W,I,B;if(Rn(m))m.forEach(function(H){return T.to(v,H,">")}),T.duration();else{w={};for(x in m)x==="ease"||x==="easeEach"||ZM(x,m[x],w,m.easeEach);for(x in w)for(W=w[x].sort(function(H,F){return H.t-F.t}),D=0,y=0;y<W.length;y++)I=W[y],B={ease:I.e,duration:(I.t-(y?W[y-1].t:0))/100*c},B[x]=I.v,T.to(v,B,D),D+=B.duration;T.duration()<c&&T.to({},{duration:c-T.duration()})}}c||a.duration(c=T.duration())}else a.timeline=0;return f===!0&&!Bf&&(Hs=ms(a),ze.killTweensOf(v),Hs=0),Ji(g,ms(a),r),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(d||!c&&!m&&a._start===Be(g._time)&&$n(d)&&TM(ms(a))&&g.data!=="nested")&&(a._tTime=-Me,a.render(Math.max(0,-h)||0)),p&&eg(ms(a),p),a}var e=t.prototype;return e.render=function(i,r,o){var a=this._time,l=this._tDur,c=this._dur,h=i<0,d=i>l-Me&&!h?l:i<Me?0:i,u,f,m,_,p,g,v,T;if(!c)EM(this,i,r,o);else if(d!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(u=d,T=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(_*100+i,r,o);if(u=Be(d%_),d===l?(m=this._repeat,u=c):(p=Be(d/_),m=~~p,m&&m===p?(u=c,m--):u>c&&(u=c)),g=this._yoyo&&m&1,g&&(u=c-u),p=xo(this._tTime,_),u===a&&!o&&this._initted&&m===p)return this._tTime=d,this;m!==p&&this.vars.repeatRefresh&&!g&&!this._lock&&u!==_&&this._initted&&(this._lock=o=1,this.render(Be(_*m),!0).invalidate()._lock=0)}if(!this._initted){if(ng(this,h?i:u,o,r,d))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&m!==p))return this;if(c!==this._dur)return this.render(i,r,o)}if(this._rEase){var y=u<a;if(y!==this._inv){var w=y?a:c-a;this._inv=y,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=w?(y?-1:1)/w:0,this._invScale=y?-this.ratio:1-this.ratio,this._invEase=y?this._rEase:this._ease}this.ratio=v=this._invRatio+this._invScale*this._invEase((u-this._invTime)*this._invRecip)}else this.ratio=v=this._ease(u/c);if(this._from&&(this.ratio=v=1-v),this._tTime=d,this._time=u,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&d&&!r&&!p&&(li(this,"onStart"),this._tTime!==d))return this;for(f=this._pt;f;)f.r(v,f.d),f=f._next;T&&T.render(i<0?i:T._dur*T._ease(u/this._dur),r,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(h&&Df(this,i,r,o),li(this,"onUpdate")),this._repeat&&m!==p&&this.vars.onRepeat&&!r&&this.parent&&li(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(h&&!this._onUpdate&&Df(this,i,!0,!0),(i||!c)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&qs(this,1),!r&&!(h&&!a)&&(d||a||g)&&(li(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),s.prototype.invalidate.call(this,i)},e.resetTo=function(i,r,o,a,l){za||Jn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||Qf(this,c),h=this._ease(c/this._dur),qM(this,i,r,o,a,h,c,l)?this.resetTo(i,r,o,a,1):(Mh(this,0),this.parent||jm(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?Ia(this):this.scrollTrigger&&this.scrollTrigger.kill(!!_n),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,Hs&&Hs.vars.overwrite!==!0)._first||Ia(this),this.parent&&o!==this.timeline.totalDuration()&&vo(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?Si(i):a,c=this._ptLookup,h=this._pt,d,u,f,m,_,p,g;if((!r||r==="all")&&MM(a,l))return r==="all"&&(this._pt=0),Ia(this);for(d=this._op=this._op||[],r!=="all"&&(ln(r)&&(_={},Bn(r,function(v){return _[v]=1}),r=_),r=YM(a,r)),g=a.length;g--;)if(~l.indexOf(a[g])){u=c[g],r==="all"?(d[g]=r,m=u,f={}):(f=d[g]=d[g]||{},m=r);for(_ in m)p=u&&u[_],p&&((!("kill"in p.d)||p.d.kill(_)===!0)&&yh(this,p,"_pt"),delete u[_]),f!=="all"&&(f[_]=1)}return this._initted&&!this._pt&&h&&Ia(this),this},t.to=function(i,r){return new t(i,r,arguments[2])},t.from=function(i,r){return Na(1,arguments)},t.delayedCall=function(i,r,o,a){return new t(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},t.fromTo=function(i,r,o){return Na(2,arguments)},t.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new t(i,r)},t.killTweensOf=function(i,r,o){return ze.killTweensOf(i,r,o)},t})(ka);hi(Ye.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Bn("staggerTo,staggerFrom,staggerFromTo",function(s){Ye[s]=function(){var t=new Cn,e=Nf.call(arguments,0);return e.splice(s==="staggerFromTo"?5:4,0,0),t[s].apply(t,e)}});var jf=function(t,e,n){return t[e]=n},gg=function(t,e,n){return t[e](n)},JM=function(t,e,n,i){return t[e](i.fp,n)},$M=function(t,e,n){return t.setAttribute(e,n)},bh=function(t,e){return We(t[e])?gg:xh(t[e])&&t.setAttribute?$M:jf},_g=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},KM=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},td=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},ed=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},QM=function(t,e,n,i){for(var r=this._pt,o;r;)o=r._next,r.p===i&&r.modifier(t,e,n),r=o},jM=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?yh(this,e,"_pt"):e.dep||(n=1),e=i;return!n},tb=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},nd=function(t){for(var e=t._pt,n,i,r,o;e;){for(n=e._next,i=r;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:o)?e._prev._next=e:r=e,(e._next=i)?i._prev=e:o=e,e=n}t._pt=r},zn=(function(){function s(e,n,i,r,o,a,l,c,h){this.t=n,this.s=r,this.c=o,this.p=i,this.r=a||_g,this.d=l||this,this.set=c||jf,this.pr=h||0,this._next=e,e&&(e._prev=this)}var t=s.prototype;return t.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=tb,this.m=n,this.mt=r,this.tween=i},s})();Bn(Wf+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(s){return Hf[s]=1});ci.TweenMax=ci.TweenLite=Ye;ci.TimelineLite=ci.TimelineMax=Cn;ze=new Cn({sortChildren:!1,defaults:Oa,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Kn.stringFilter=Zf;var xr=[],hh={},eb=[],Gm=0,nb=0,Cf=function(t){return(hh[t]||eb).map(function(e){return e()})},Va=function(){var t=Date.now(),e=[];t-Gm>2&&(Cf("matchMediaInit"),xr.forEach(function(n){var i=n.queries,r=n.conditions,o,a,l,c;for(a in i)o=Zi.matchMedia(i[a]).matches,o&&(l=1),o!==r[a]&&(r[a]=o,c=1);c&&(n.revert(),l&&e.push(n))}),Cf("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Gm=t,Cf("matchMedia"))},xg=(function(){function s(e,n){this.selector=n&&Uf(n),this.data=[],this._r=[],this.isReverted=!1,this.id=nb++,e&&this.add(e)}var t=s.prototype;return t.add=function(n,i,r){We(n)&&(r=i,i=n,n=We);var o=this,a=function(){var c=Oe,h=o.selector,d;return c&&c!==o&&c.data.push(o),r&&(o.selector=Uf(r)),Oe=o,d=i.apply(o,arguments),We(d)&&o._r.push(d),Oe=c,o.selector=h,o.isReverted=!1,d};return o.last=a,n===We?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},t.ignore=function(n){var i=Oe;Oe=null,n(this),Oe=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof s?n.push.apply(n,i.getTweens()):i instanceof Ye&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var r=this;if(n?(function(){for(var a=r.getTweens(),l=r.data.length,c;l--;)c=r.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return a.splice(a.indexOf(h),1)}));for(a.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,d){return d.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=r.data.length;l--;)c=r.data[l],c instanceof Cn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Ye)&&c.revert&&c.revert(n);r._r.forEach(function(h){return h(n,r)}),r.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i){for(var o=xr.length;o--;)xr[o].id===this.id&&xr.splice(o,1);this._mqs&&this._mqs.forEach(function(a){return a.removeListener?a.removeListener(Va):a.removeEventListener("change",Va)}),this._mqs=null}},t.revert=function(n){this.kill(n||{})},s})(),ib=(function(){function s(e){this.contexts=[],this.scope=e,Oe&&Oe.data.push(this)}var t=s.prototype;return t.add=function(n,i,r){$i(n)||(n={matches:n});var o=new xg(0,r||this.scope),a=o.conditions={},l,c,h;Oe&&!o.selector&&(o.selector=Oe.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?h=1:(l=Zi.matchMedia(n[c]),l&&(xr.indexOf(o)<0&&xr.push(o),(a[c]=l.matches)&&(h=1),l.addListener?l.addListener(Va):l.addEventListener("change",Va),(o._mqs||(o._mqs=[])).push(l)));return h&&i(o,function(d){return o.add(null,d)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},s})(),_h={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return ug(i)})},timeline:function(t){return new Cn(t)},getTweensOf:function(t,e){return ze.getTweensOf(t,e)},getProperty:function(t,e,n,i){ln(t)&&(t=Si(t)[0]);var r=Xs(t||{}).get,o=n?Qm:Km;return n==="native"&&(n=""),t&&(e?o((Zn[e]&&Zn[e].get||r)(t,e,n,i)):function(a,l,c){return o((Zn[a]&&Zn[a].get||r)(t,a,l,c))})},quickSetter:function(t,e,n){if(t=Si(t),t.length>1){var i=t.map(function(h){return Pn.quickSetter(h,e,n)}),r=i.length;return function(h){for(var d=r;d--;)i[d](h)}}t=t[0]||{};var o=Zn[e],a=Xs(t),l=a.harness&&(a.harness.aliases||{})[e]||e,c=o?function(h){var d=new o;go._pt=0,d.init(t,n?h+n:h,go,0,[t]),d.render(1,d),go._pt&&ed(1,go)}:a.set(t,l);return o?c:function(h){return c(t,l,n?h+n:h,a,1)}},quickTo:function(t,e,n){var i,r=Pn.to(t,hi((i={},i[e]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,c,h){return r.resetTo(e,l,c,h)};return o.tween=r,o},isTweening:function(t){return ze.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=_r(t.ease,Oa.ease)),Fm(Oa,t||{})},config:function(t){return Fm(Kn,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,r=t.defaults,o=t.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!Zn[a]&&!ci[a]&&Fa(e+" effect requires "+a+" plugin.")}),Tf[e]=function(a,l,c){return n(Si(a),hi(l||{},r),c)},o&&(Cn.prototype[e]=function(a,l,c){return this.add(Tf[e](a,$i(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){he[t]=_r(e)},parseEase:function(t,e){return arguments.length?_r(t,e):he},getById:function(t){return ze.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new Cn(t),i,r;for(n.smoothChildTiming=$n(t.smoothChildTiming),ze.remove(n),n._dp=0,n._time=n._tTime=ze._time,i=ze._first;i;)r=i._next,(e||!(!i._dur&&i instanceof Ye&&i.vars.onComplete===i._targets[0]))&&Ji(n,i,i._start-i._delay),i=r;return Ji(ze,n,0),n},context:function(t,e){return t?new xg(t,e):Oe},matchMedia:function(t){return new ib(t)},matchMediaRefresh:function(){return xr.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||Va()},addEventListener:function(t,e){var n=hh[t]||(hh[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=hh[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:NM,wrapYoyo:UM,distribute:rg,random:ag,snap:og,normalize:DM,getUnit:xn,clamp:RM,splitColor:fg,toArray:Si,selector:Uf,mapRange:cg,pipe:IM,unitize:LM,interpolate:OM,shuffle:sg},install:Ym,effects:Tf,ticker:Jn,updateRoot:Cn.updateRoot,plugins:Zn,globalTimeline:ze,core:{PropTween:zn,globals:Zm,Tween:Ye,Timeline:Cn,Animation:ka,getCache:Xs,_removeLinkedListItem:yh,reverting:function(){return _n},context:function(t){return t&&Oe&&(Oe.data.push(t),t._ctx=Oe),Oe},suppressOverwrites:function(t){return Bf=t}}};Bn("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return _h[s]=Ye[s]});Jn.add(Cn.updateRoot);go=_h.to({},{duration:0});var sb=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},rb=function(t,e){var n=t._targets,i,r,o;for(i in e)for(r=n.length;r--;)o=t._ptLookup[r][i],o&&(o=o.d)&&(o._pt&&(o=sb(o,i)),o&&o.modifier&&o.modifier(e[i],t,n[r],i))},Rf=function(t,e){return{name:t,headless:1,rawVars:1,init:function(i,r,o){o._onInit=function(a){var l,c;if(ln(r)&&(l={},Bn(r,function(h){return l[h]=1}),r=l),e){l={};for(c in r)l[c]=e(r[c]);r=l}rb(a,r)}}}},Pn=_h.registerPlugin({name:"attr",init:function(t,e,n,i,r){var o,a,l;this.tween=n;for(o in e)l=t.getAttribute(o)||"",a=this.add(t,"setAttribute",(l||0)+"",e[o],i,r,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(t,e){for(var n=e._pt;n;)_n?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",headless:1,init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},Rf("roundProps",Of),Rf("modifiers"),Rf("snap",og))||_h;Ye.version=Cn.version=Pn.version="3.15.1";qm=1;zf()&&yo();var ob=he.Power0,ab=he.Power1,lb=he.Power2,cb=he.Power3,hb=he.Power4,ub=he.Linear,fb=he.Quad,db=he.Cubic,pb=he.Quart,mb=he.Quint,gb=he.Strong,_b=he.Elastic,xb=he.Back,vb=he.SteppedEase,yb=he.Bounce,Sb=he.Sine,Mb=he.Expo,bb=he.Circ;var vg,Zs,bo,ld,wr,Tb,yg,cd,wb=function(){return typeof window!="undefined"},vs={},Tr=180/Math.PI,To=Math.PI/180,Mo=Math.atan2,Sg=1e8,hd=/([A-Z])/g,Eb=/(left|right|width|margin|padding|x)/i,Ab=/[\s,\(]\S/,Ki={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},sd=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},Cb=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},Rb=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},Pb=function(t,e){return e.set(e.t,e.p,t===1?e.e:t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},Ib=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},Rg=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},Pg=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},Lb=function(t,e,n){return t.style[e]=n},Db=function(t,e,n){return t.style.setProperty(e,n)},Nb=function(t,e,n){return t._gsap[e]=n},Ub=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},Ob=function(t,e,n,i,r){var o=t._gsap;o.scaleX=o.scaleY=n,o.renderTransform(r,o)},Fb=function(t,e,n,i,r){var o=t._gsap;o[e]=n,o.renderTransform(r,o)},ke="transform",Qn=ke+"Origin",Bb=function s(t,e){var n=this,i=this.target,r=i.style,o=i._gsap;if(t in vs&&r){if(this.tfm=this.tfm||{},t!=="transform")t=Ki[t]||t,~t.indexOf(",")?t.split(",").forEach(function(a){return n.tfm[a]=xs(i,a)}):this.tfm[t]=o.x?o[t]:xs(i,t),t===Qn&&(this.tfm.zOrigin=o.zOrigin);else return Ki.transform.split(",").forEach(function(a){return s.call(n,a,e)});if(this.props.indexOf(ke)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Qn,e,"")),t=ke}(r||e)&&this.props.push(t,e,r[t])},Ig=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},zb=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,r,o;for(r=0;r<t.length;r+=3)t[r+1]?t[r+1]===2?e[t[r]](t[r+2]):e[t[r]]=t[r+2]:t[r+2]?n[t[r]]=t[r+2]:n.removeProperty(t[r].substr(0,2)==="--"?t[r]:t[r].replace(hd,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),r=cd(),(!r||!r.isStart)&&!n[ke]&&(Ig(n),i.zOrigin&&n[Qn]&&(n[Qn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Lg=function(t,e){var n={target:t,props:[],revert:zb,save:Bb};return t._gsap||Pn.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(i){return n.save(i)}),n},Dg,rd=function(t,e){var n=Zs.createElementNS?Zs.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Zs.createElement(t);return n&&n.style?n:Zs.createElement(t)},ui=function s(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(hd,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&s(t,wo(e)||e,1)||""},Mg="O,Moz,ms,Ms,Webkit".split(","),wo=function(t,e,n){var i=e||wr,r=i.style,o=5;if(t in r&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(Mg[o]+t in r););return o<0?null:(o===3?"ms":o>=0?Mg[o]:"")+t},od=function(){wb()&&window.document&&(vg=window,Zs=vg.document,bo=Zs.documentElement,wr=rd("div")||{style:{}},Tb=rd("div"),ke=wo(ke),Qn=ke+"Origin",wr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Dg=!!wo("perspective"),cd=Pn.core.reverting,ld=1)},bg=function(t){var e=t.ownerSVGElement,n=rd("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=t.cloneNode(!0),r;i.style.display="block",n.appendChild(i),bo.appendChild(n);try{r=i.getBBox()}catch{}return n.removeChild(i),bo.removeChild(n),r},Tg=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},Ng=function(t){var e,n;try{e=t.getBBox()}catch{e=bg(t),n=1}return e&&(e.width||e.height)||n||(e=bg(t)),e&&!e.width&&!e.x&&!e.y?{x:+Tg(t,["x","cx","x1"])||0,y:+Tg(t,["y","cy","y1"])||0,width:0,height:0}:e},Ug=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&Ng(t))},$s=function(t,e){if(e){var n=t.style,i;e in vs&&e!==Qn&&(e=ke),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(hd,"-$1").toLowerCase())):n.removeAttribute(e)}},Js=function(t,e,n,i,r,o){var a=new zn(t._pt,e,n,0,1,o?Pg:Rg);return t._pt=a,a.b=i,a.e=r,t._props.push(n),a},wg={deg:1,rad:1,turn:1},kb={grid:1,flex:1},Ks=function s(t,e,n,i){var r=parseFloat(n)||0,o=(n+"").trim().substr((r+"").length)||"px",a=wr.style,l=Eb.test(e),c=t.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),d=100,u=i==="px",f=i==="%",m,_,p,g;if(i===o||!r||wg[i]||wg[o])return r;if(o!=="px"&&!u&&(r=s(t,e,n,"px")),g=t.getCTM&&Ug(t),(f||o==="%")&&(vs[e]||~e.indexOf("adius")))return m=g?t.getBBox()[l?"width":"height"]:t[h],Xe(f?r/m*d:r/100*m);if(a[l?"width":"height"]=d+(u?o:i),_=i!=="rem"&&~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,g&&(_=(t.ownerSVGElement||{}).parentNode),(!_||_===Zs||!_.appendChild)&&(_=Zs.body),p=_._gsap,p&&f&&p.width&&l&&p.time===Jn.time&&!p.uncache)return Xe(r/p.width*d);if(f&&(e==="height"||e==="width")){var v=t.style[e];t.style[e]=d+i,m=t[h],v?t.style[e]=v:$s(t,e)}else(f||o==="%")&&!kb[ui(_,"display")]&&(a.position=ui(t,"position")),_===t&&(a.position="static"),_.appendChild(wr),m=wr[h],_.removeChild(wr),a.position="absolute";return l&&f&&(p=Xs(_),p.time=Jn.time,p.width=_[h]),Xe(u?m*r/d:m&&r?d/m*r:0)},xs=function(t,e,n,i){var r;return ld||od(),e in Ki&&e!=="transform"&&(e=Ki[e],~e.indexOf(",")&&(e=e.split(",")[0])),vs[e]&&e!=="transform"?(r=Xa(t,i),r=e!=="transformOrigin"?r[e]:r.svg?r.origin:wh(ui(t,Qn))+" "+r.zOrigin+"px"):(r=t.style[e],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=Th[e]&&Th[e](t,e,n)||ui(t,e)||qf(t,e)||(e==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?Ks(t,e,r,n)+n:r},Vb=function(t,e,n,i){if(!n||n==="none"){var r=wo(e,t,1),o=r&&ui(t,r,1);o&&o!==n?(e=r,n=o):e==="borderColor"&&(n=ui(t,"borderTopColor"))}var a=new zn(this._pt,t.style,e,0,1,td),l=0,c=0,h,d,u,f,m,_,p,g,v,T,y,w;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=ui(t,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=t.style[e],t.style[e]=i,i=ui(t,e)||i,_?t.style[e]=_:$s(t,e)),h=[n,i],Zf(h),n=h[0],i=h[1],u=n.match(vr)||[],w=i.match(vr)||[],w.length){for(;d=vr.exec(i);)p=d[0],v=i.substring(l,d.index),m?m=(m+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(m=1),p!==(_=u[c++]||"")&&(f=parseFloat(_)||0,y=_.substr((f+"").length),p.charAt(1)==="="&&(p=yr(f,p)+y),g=parseFloat(p),T=p.substr((g+"").length),l=vr.lastIndex-T.length,T||(T=T||Kn.units[e]||y,l===i.length&&(i+=T,a.e+=T)),y!==T&&(f=Ks(t,e,_,T)||0),a._pt={_next:a._pt,p:v||c===1?v:",",s:f,c:g-f,m:m&&m<4||e==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=e==="display"&&i==="none"?Pg:Rg;return Vf.test(i)&&(a.e=0),this._pt=a,a},Eg={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Gb=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=Eg[n]||n,e[1]=Eg[i]||i,e.join(" ")},Hb=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,r=e.u,o=n._gsap,a,l,c;if(r==="all"||r===!0)i.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)a=r[c],vs[a]&&(l=1,a=a==="transformOrigin"?Qn:ke),$s(n,a);l&&($s(n,ke),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Xa(n,1),o.uncache=1,Ig(i)))}},Th={clearProps:function(t,e,n,i,r){if(r.data!=="isFromStart"){var o=t._pt=new zn(t._pt,e,n,0,0,Hb);return o.u=i,o.pr=-10,o.tween=r,t._props.push(n),1}}},Wa=[1,0,0,1,0,0],Og={},Fg=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},Ag=function(t){var e=ui(t,ke);return Fg(e)?Wa:e.substr(7).match(kf).map(Xe)},ud=function(t,e){var n=t._gsap||Xs(t),i=t.style,r=Ag(t),o,a,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?Wa:r):(r===Wa&&!t.offsetParent&&t!==bo&&!n.svg&&(l=i.display,i.display="block",o=t.parentNode,(!o||!t.offsetParent&&!t.getBoundingClientRect().width)&&(c=1,a=t.nextElementSibling,bo.appendChild(t)),r=Ag(t),l?i.display=l:$s(t,"display"),c&&(a?o.insertBefore(t,a):o?o.appendChild(t):bo.removeChild(t))),e&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},ad=function(t,e,n,i,r,o){var a=t._gsap,l=r||ud(t,!0),c=a.xOrigin||0,h=a.yOrigin||0,d=a.xOffset||0,u=a.yOffset||0,f=l[0],m=l[1],_=l[2],p=l[3],g=l[4],v=l[5],T=e.split(" "),y=parseFloat(T[0])||0,w=parseFloat(T[1])||0,E,x,b,P;n?l!==Wa&&(x=f*p-m*_)&&(b=y*(p/x)+w*(-_/x)+(_*v-p*g)/x,P=y*(-m/x)+w*(f/x)-(f*v-m*g)/x,y=b,w=P):(E=Ng(t),y=E.x+(~T[0].indexOf("%")?y/100*E.width:y),w=E.y+(~(T[1]||T[0]).indexOf("%")?w/100*E.height:w)),i||i!==!1&&a.smooth?(g=y-c,v=w-h,a.xOffset=d+(g*f+v*_)-g,a.yOffset=u+(g*m+v*p)-v):a.xOffset=a.yOffset=0,a.xOrigin=y,a.yOrigin=w,a.smooth=!!i,a.origin=e,a.originIsAbsolute=!!n,t.style[Qn]="0px 0px",o&&(Js(o,a,"xOrigin",c,y),Js(o,a,"yOrigin",h,w),Js(o,a,"xOffset",d,a.xOffset),Js(o,a,"yOffset",u,a.yOffset)),t.setAttribute("data-svg-origin",y+" "+w)},Xa=function(t,e){var n=t._gsap||new Jf(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,r=n.scaleX<0,o="px",a="deg",l=getComputedStyle(t),c=ui(t,Qn)||"0",h,d,u,f,m,_,p,g,v,T,y,w,E,x,b,P,C,N,D,W,I,B,H,F,tt,X,R,K,yt,kt,Y,ft;return h=d=u=_=p=g=v=T=y=0,f=m=1,n.svg=!!(t.getCTM&&Ug(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[ke]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[ke]!=="none"?l[ke]:"")),i.scale=i.rotate=i.translate="none"),x=ud(t,n.svg),n.svg&&(n.uncache?(tt=t.getBBox(),c=n.xOrigin-tt.x+"px "+(n.yOrigin-tt.y)+"px",F=""):F=!e&&t.getAttribute("data-svg-origin"),ad(t,F||c,!!F||n.originIsAbsolute,n.smooth!==!1,x)),w=n.xOrigin||0,E=n.yOrigin||0,x!==Wa&&(N=x[0],D=x[1],W=x[2],I=x[3],h=B=x[4],d=H=x[5],x.length===6?(f=Math.sqrt(N*N+D*D),m=Math.sqrt(I*I+W*W),_=N||D?Mo(D,N)*Tr:0,v=W||I?Mo(W,I)*Tr+_:0,v&&(m*=Math.abs(Math.cos(v*To))),n.svg&&(h-=w-(w*N+E*W),d-=E-(w*D+E*I))):(ft=x[6],kt=x[7],R=x[8],K=x[9],yt=x[10],Y=x[11],h=x[12],d=x[13],u=x[14],b=Mo(ft,yt),p=b*Tr,b&&(P=Math.cos(-b),C=Math.sin(-b),F=B*P+R*C,tt=H*P+K*C,X=ft*P+yt*C,R=B*-C+R*P,K=H*-C+K*P,yt=ft*-C+yt*P,Y=kt*-C+Y*P,B=F,H=tt,ft=X),b=Mo(-W,yt),g=b*Tr,b&&(P=Math.cos(-b),C=Math.sin(-b),F=N*P-R*C,tt=D*P-K*C,X=W*P-yt*C,Y=I*C+Y*P,N=F,D=tt,W=X),b=Mo(D,N),_=b*Tr,b&&(P=Math.cos(b),C=Math.sin(b),F=N*P+D*C,tt=B*P+H*C,D=D*P-N*C,H=H*P-B*C,N=F,B=tt),p&&Math.abs(p)+Math.abs(_)>359.9&&(p=_=0,g=180-g),f=Xe(Math.sqrt(N*N+D*D+W*W)),m=Xe(Math.sqrt(H*H+ft*ft)),b=Mo(B,H),v=Math.abs(b)>2e-4?b*Tr:0,y=Y?1/(Y<0?-Y:Y):0),n.svg&&(F=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!Fg(ui(t,ke)),F&&t.setAttribute("transform",F))),Math.abs(v)>90&&Math.abs(v)<270&&(r?(f*=-1,v+=_<=0?180:-180,_+=_<=0?180:-180):(m*=-1,v+=v<=0?180:-180)),e=e||n.uncache,n.x=h-((n.xPercent=h&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-h)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+o,n.y=d-((n.yPercent=d&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-d)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+o,n.z=u+o,n.scaleX=Xe(f),n.scaleY=Xe(m),n.rotation=Xe(_)+a,n.rotationX=Xe(p)+a,n.rotationY=Xe(g)+a,n.skewX=v+a,n.skewY=T+a,n.transformPerspective=y+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(i[Qn]=wh(c)),n.xOffset=n.yOffset=0,n.force3D=Kn.force3D,n.renderTransform=n.svg?Xb:Dg?Bg:Wb,n.uncache=0,n},wh=function(t){return(t=t.split(" "))[0]+" "+t[1]},id=function(t,e,n){var i=xn(e);return Xe(parseFloat(e)+parseFloat(Ks(t,"x",n+"px",i)))+i},Wb=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,Bg(t,e)},Mr="0deg",Ha="0px",br=") ",Bg=function(t,e){var n=e||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,h=n.rotationY,d=n.rotationX,u=n.skewX,f=n.skewY,m=n.scaleX,_=n.scaleY,p=n.transformPerspective,g=n.force3D,v=n.target,T=n.zOrigin,y="",w=g==="auto"&&t&&t!==1||g===!0;if(T&&(d!==Mr||h!==Mr)){var E=parseFloat(h)*To,x=Math.sin(E),b=Math.cos(E),P;E=parseFloat(d)*To,P=Math.cos(E),o=id(v,o,x*P*-T),a=id(v,a,-Math.sin(E)*-T),l=id(v,l,b*P*-T+T)}p!==Ha&&(y+="perspective("+p+br),(i||r)&&(y+="translate("+i+"%, "+r+"%) "),(w||o!==Ha||a!==Ha||l!==Ha)&&(y+=l!==Ha||w?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+br),c!==Mr&&(y+="rotate("+c+br),h!==Mr&&(y+="rotateY("+h+br),d!==Mr&&(y+="rotateX("+d+br),(u!==Mr||f!==Mr)&&(y+="skew("+u+", "+f+br),(m!==1||_!==1)&&(y+="scale("+m+", "+_+br),v.style[ke]=y||"translate(0, 0)"},Xb=function(t,e){var n=e||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,h=n.skewY,d=n.scaleX,u=n.scaleY,f=n.target,m=n.xOrigin,_=n.yOrigin,p=n.xOffset,g=n.yOffset,v=n.forceCSS,T=parseFloat(o),y=parseFloat(a),w,E,x,b,P;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=To,c*=To,w=Math.cos(l)*d,E=Math.sin(l)*d,x=Math.sin(l-c)*-u,b=Math.cos(l-c)*u,c&&(h*=To,P=Math.tan(c-h),P=Math.sqrt(1+P*P),x*=P,b*=P,h&&(P=Math.tan(h),P=Math.sqrt(1+P*P),w*=P,E*=P)),w=Xe(w),E=Xe(E),x=Xe(x),b=Xe(b)):(w=d,b=u,E=x=0),(T&&!~(o+"").indexOf("px")||y&&!~(a+"").indexOf("px"))&&(T=Ks(f,"x",o,"px"),y=Ks(f,"y",a,"px")),(m||_||p||g)&&(T=Xe(T+m-(m*w+_*x)+p),y=Xe(y+_-(m*E+_*b)+g)),(i||r)&&(P=f.getBBox(),T=Xe(T+i/100*P.width),y=Xe(y+r/100*P.height)),P="matrix("+w+","+E+","+x+","+b+","+T+","+y+")",f.setAttribute("transform",P),v&&(f.style[ke]=P)},qb=function(t,e,n,i,r){var o=360,a=ln(r),l=parseFloat(r)*(a&&~r.indexOf("rad")?Tr:1),c=l-i,h=i+c+"deg",d,u;return a&&(d=r.split("_")[1],d==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),d==="cw"&&c<0?c=(c+o*Sg)%o-~~(c/o)*o:d==="ccw"&&c>0&&(c=(c-o*Sg)%o-~~(c/o)*o)),t._pt=u=new zn(t._pt,e,n,i,c,Cb),u.e=h,u.u="deg",t._props.push(n),u},Cg=function(t,e){for(var n in e)t[n]=e[n];return t},Yb=function(t,e,n){var i=Cg({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,h,d,u,f,m;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[ke]=e,a=Xa(n,1),$s(n,ke),n.setAttribute("transform",c)):(c=getComputedStyle(n)[ke],o[ke]=e,a=Xa(n,1),o[ke]=c);for(l in vs)c=i[l],h=a[l],c!==h&&r.indexOf(l)<0&&(f=xn(c),m=xn(h),d=f!==m?Ks(n,l,c,m):parseFloat(c),u=parseFloat(h),t._pt=new zn(t._pt,a,l,d,u-d,sd),t._pt.u=m||0,t._props.push(l));Cg(a,i)};Bn("padding,margin,Width,Radius",function(s,t){var e="Top",n="Right",i="Bottom",r="Left",o=(t<3?[e,n,i,r]:[e+r,e+n,i+n,i+r]).map(function(a){return t<2?s+a:"border"+a+s});Th[t>1?"border"+s:s]=function(a,l,c,h,d){var u,f;if(arguments.length<4)return u=o.map(function(m){return xs(a,m,c)}),f=u.join(" "),f.split(u[0]).length===5?u[0]:f;u=(h+"").split(" "),f={},o.forEach(function(m,_){return f[m]=u[_]=u[_]||u[(_-1)/2|0]}),a.init(l,f,d)}});var fd={name:"css",register:od,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,r){var o=this._props,a=t.style,l=n.vars.startAt,c,h,d,u,f,m,_,p,g,v,T,y,w,E,x,b,P;ld||od(),this.styles=this.styles||Lg(t),b=this.styles.props,this.tween=n;for(_ in e)if(_!=="autoRound"&&(h=e[_],!(Zn[_]&&Kf(_,e,n,i,t,r)))){if(f=typeof h,m=Th[_],f==="function"&&(h=h.call(n,i,t,r),f=typeof h),f==="string"&&~h.indexOf("random(")&&(h=So(h)),m)m(this,t,_,h,n)&&(x=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(_)+"").trim(),h+="",gs.lastIndex=0,gs.test(c)||(p=xn(c),g=xn(h),g?p!==g&&(c=Ks(t,_,c,g)+g):p&&(h+=p)),this.add(a,"setProperty",c,h,i,r,0,0,_),o.push(_),b.push(_,0,a[_]);else if(f!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,t,r):l[_],ln(c)&&~c.indexOf("random(")&&(c=So(c)),xn(c+"")||c==="auto"||(c+=Kn.units[_]||xn(xs(t,_))||""),(c+"").charAt(1)==="="&&(c=xs(t,_))):c=xs(t,_),u=parseFloat(c),v=f==="string"&&h.charAt(1)==="="&&h.substr(0,2),v&&(h=h.substr(2)),d=parseFloat(h),_ in Ki&&(_==="autoAlpha"&&(u===1&&xs(t,"visibility")==="hidden"&&d&&(u=0),b.push("visibility",0,a.visibility),Js(this,a,"visibility",u?"inherit":"hidden",d?"inherit":"hidden",!d)),_!=="scale"&&_!=="transform"&&(_=Ki[_],~_.indexOf(",")&&(_=_.split(",")[0]))),T=_ in vs,T){if(this.styles.save(_),P=h,f==="string"&&h.substring(0,6)==="var(--"){if(h=ui(t,h.substring(4,h.indexOf(")"))),h.substring(0,5)==="calc("){var C=t.style.perspective;t.style.perspective=h,h=ui(t,"perspective"),C?t.style.perspective=C:$s(t,"perspective")}d=parseFloat(h)}if(y||(w=t._gsap,w.renderTransform&&!e.parseTransform||Xa(t,e.parseTransform),E=e.smoothOrigin!==!1&&w.smooth,y=this._pt=new zn(this._pt,a,ke,0,1,w.renderTransform,w,0,-1),y.dep=1),_==="scale")this._pt=new zn(this._pt,w,"scaleY",w.scaleY,(v?yr(w.scaleY,v+d):d)-w.scaleY||0,sd),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){b.push(Qn,0,a[Qn]),h=Gb(h),w.svg?ad(t,h,0,E,0,this):(g=parseFloat(h.split(" ")[2])||0,g!==w.zOrigin&&Js(this,w,"zOrigin",w.zOrigin,g),Js(this,a,_,wh(c),wh(h)));continue}else if(_==="svgOrigin"){ad(t,h,1,E,0,this);continue}else if(_ in Og){qb(this,w,_,u,v?yr(u,v+h):h);continue}else if(_==="smoothOrigin"){Js(this,w,"smooth",w.smooth,h);continue}else if(_==="force3D"){w[_]=h;continue}else if(_==="transform"){Yb(this,h,t);continue}}else _ in a||(_=wo(_)||_);if(T||(d||d===0)&&(u||u===0)&&!Ab.test(h)&&_ in a)p=(c+"").substr((u+"").length),d||(d=0),g=xn(h)||(_ in Kn.units?Kn.units[_]:p),p!==g&&(u=Ks(t,_,c,g)),this._pt=new zn(this._pt,T?w:a,_,u,(v?yr(u,v+d):d)-u,!T&&(g==="px"||_==="zIndex")&&e.autoRound!==!1?Ib:sd),this._pt.u=g||0,T&&P!==h?(this._pt.b=c,this._pt.e=P,this._pt.r=Pb):p!==g&&g!=="%"&&(this._pt.b=c,this._pt.r=Rb);else if(_ in a)Vb.call(this,t,_,c,v?v+h:h);else if(_ in t)this.add(t,_,c||t[_],v?v+h:h,i,r);else if(_!=="parseTransform"){vh(_,h);continue}T||(_ in a?b.push(_,0,a[_]):typeof t[_]=="function"?b.push(_,2,t[_]()):b.push(_,1,c||t[_])),o.push(_)}}x&&nd(this)},render:function(t,e){if(e.tween._time||!cd())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:xs,aliases:Ki,getSetter:function(t,e,n){var i=Ki[e];return i&&i.indexOf(",")<0&&(e=i),e in vs&&e!==Qn&&(t._gsap.x||xs(t,"x"))?n&&yg===n?e==="scale"?Ub:Nb:(yg=n||{})&&(e==="scale"?Ob:Fb):t.style&&!xh(t.style[e])?Lb:~e.indexOf("-")?Db:bh(t,e)},core:{_removeProperty:$s,_getMatrix:ud}};Pn.utils.checkPrefix=wo;Pn.core.getStyleSaver=Lg;(function(s,t,e,n){var i=Bn(s+","+t+","+e,function(r){vs[r]=1});Bn(t,function(r){Kn.units[r]="deg",Og[r]=1}),Ki[i[13]]=s+","+t,Bn(n,function(r){var o=r.split(":");Ki[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Bn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){Kn.units[s]="px"});Pn.registerPlugin(fd);var de=Pn.registerPlugin(fd)||Pn,xA=de.core.Tween;function zg(s,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(s,n.key,n)}}function Zb(s,t,e){return t&&zg(s.prototype,t),e&&zg(s,e),s}var vn,Ch,Jb,jn,Qs,js,Ao,Vg,Er,Co,Gg,ys,Ui,Hg,Wg=function(){return vn||typeof window!="undefined"&&(vn=window.gsap)&&vn.registerPlugin&&vn},Xg=1,Eo=[],Qt=[],Oi=[],Ya=Date.now,dd=function(t,e){return e},$b=function(){var t=Co.core,e=t.bridge||{},n=t._scrollers,i=t._proxies;n.push.apply(n,Qt),i.push.apply(i,Oi),Qt=n,Oi=i,dd=function(o,a){return e[o](a)}},Ms=function(t,e){return~Oi.indexOf(t)&&Oi[Oi.indexOf(t)+1][e]},Za=function(t){return!!~Gg.indexOf(t)},Vn=function(t,e,n,i,r){return t.addEventListener(e,n,{passive:i!==!1,capture:!!r})},kn=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},Eh="scrollLeft",Ah="scrollTop",pd=function(){return ys&&ys.isPressed||Qt.cache++},Rh=function(t,e){var n=function i(r){if(r||r===0){Xg&&jn.history.scrollRestoration!=="manual"&&(jn.history.scrollRestoration="manual");var o=ys&&ys.isPressed;r=i.v=Math.round(r)||(ys&&ys.iOS?1:0),t(r),i.cacheID=Qt.cache,o&&dd("ss",r)}else(e||Qt.cache!==i.cacheID||dd("ref"))&&(i.cacheID=Qt.cache,i.v=t());return i.v+i.offset};return n.offset=0,t&&n},In={s:Eh,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Rh(function(s){return arguments.length?jn.scrollTo(s,je.sc()):jn.pageXOffset||Qs[Eh]||js[Eh]||Ao[Eh]||0})},je={s:Ah,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:In,sc:Rh(function(s){return arguments.length?jn.scrollTo(In.sc(),s):jn.pageYOffset||Qs[Ah]||js[Ah]||Ao[Ah]||0})},Gn=function(t,e){return(e&&e._ctx&&e._ctx.selector||vn.utils.toArray)(t)[0]||(typeof t=="string"&&vn.config().nullTargetWarn!==!1?console.warn("Element not found:",t):null)},Kb=function(t,e){for(var n=e.length;n--;)if(e[n]===t||e[n].contains(t))return!0;return!1},Ss=function(t,e){var n=e.s,i=e.sc;Za(t)&&(t=Qs.scrollingElement||js);var r=Qt.indexOf(t),o=i===je.sc?1:2;!~r&&(r=Qt.push(t)-1),Qt[r+o]||Vn(t,"scroll",pd);var a=Qt[r+o],l=a||(Qt[r+o]=Rh(Ms(t,n),!0)||(Za(t)?i:Rh(function(c){return arguments.length?t[n]=c:t[n]})));return l.target=t,a||(l.smooth=vn.getProperty(t,"scrollBehavior")==="smooth"),l},Ph=function(t,e,n){var i=t,r=t,o=Ya(),a=o,l=e||50,c=Math.max(500,l*3),h=function(m,_){var p=Ya();_||p-o>l?(r=i,i=m,a=o,o=p):n?i+=m:i=r+(m-r)/(p-a)*(o-a)},d=function(){r=i=n?0:i,a=o=0},u=function(m){var _=a,p=r,g=Ya();return(m||m===0)&&m!==i&&h(m),o===a||g-a>c?0:(i+(n?p:-p))/((n?g:o)-_)*1e3};return{update:h,reset:d,getVelocity:u}},qa=function(t,e){return e&&!t._gsapAllow&&t.cancelable!==!1&&t.preventDefault(),t.changedTouches?t.changedTouches[0]:t},kg=function(t){var e=Math.max.apply(Math,t),n=Math.min.apply(Math,t);return Math.abs(e)>=Math.abs(n)?e:n},qg=function(){Co=vn.core.globals().ScrollTrigger,Co&&Co.core&&$b()},Yg=function(t){return vn=t||Wg(),!Ch&&vn&&typeof document!="undefined"&&document.body&&(jn=window,Qs=document,js=Qs.documentElement,Ao=Qs.body,Gg=[jn,Qs,js,Ao],Jb=vn.utils.clamp,Hg=vn.core.context||function(){},Er="onpointerenter"in Ao?"pointer":"mouse",Vg=qe.isTouch=jn.matchMedia&&jn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in jn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Ui=qe.eventTypes=("ontouchstart"in js?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in js?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return Xg=0},500),Ch=1),Co||qg(),Ch};In.op=je;Qt.cache=0;var qe=(function(){function s(e){this.init(e)}var t=s.prototype;return t.init=function(n){Ch||Yg(vn)||console.warn("Please gsap.registerPlugin(Observer)"),Co||qg();var i=n.tolerance,r=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,h=n.preventDefault,d=n.onStop,u=n.onStopDelay,f=n.ignore,m=n.wheelSpeed,_=n.event,p=n.onDragStart,g=n.onDragEnd,v=n.onDrag,T=n.onPress,y=n.onRelease,w=n.onRight,E=n.onLeft,x=n.onUp,b=n.onDown,P=n.onChangeX,C=n.onChangeY,N=n.onChange,D=n.onToggleX,W=n.onToggleY,I=n.onHover,B=n.onHoverEnd,H=n.onMove,F=n.ignoreCheck,tt=n.isNormalizer,X=n.onGestureStart,R=n.onGestureEnd,K=n.onWheel,yt=n.onEnable,kt=n.onDisable,Y=n.onClick,ft=n.scrollSpeed,xt=n.capture,Mt=n.allowClicks,dt=n.lockAxis,Rt=n.onLockAxis;this.target=a=Gn(a)||js,this.vars=n,f&&(f=vn.utils.toArray(f)),i=i||1e-9,r=r||0,m=m||1,ft=ft||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(jn.getComputedStyle(Ao).lineHeight)||22);var pe,Ct,Gt,It,Ft,jt,ce,Z=this,$t=0,Ve=0,ge=n.passive||!h&&n.passive!==!1,ne=Ss(a,In),Ie=Ss(a,je),Te=ne(),O=Ie(),ue=~o.indexOf("touch")&&!~o.indexOf("pointer")&&Ui[0]==="pointerdown",bt=Za(a),Dt=a.ownerDocument||Qs,ot=[0,0,0],Xt=[0,0,0],wt=0,Nt=function(){return wt=Ya()},A=function(gt,rt){return(Z.event=gt)&&f&&Kb(gt.target,f)||rt&&ue&&gt.pointerType!=="touch"||F&&F(gt,rt)},S=function(){Z._vx.reset(),Z._vy.reset(),Ct.pause(),d&&d(Z)},z=function(){var gt=Z.deltaX=kg(ot),rt=Z.deltaY=kg(Xt),it=Math.abs(gt)>=i,_t=Math.abs(rt)>=i;N&&(it||_t)&&N(Z,gt,rt,ot,Xt),it&&(w&&Z.deltaX>0&&w(Z),E&&Z.deltaX<0&&E(Z),P&&P(Z),D&&Z.deltaX<0!=$t<0&&D(Z),$t=Z.deltaX,ot[0]=ot[1]=ot[2]=0),_t&&(b&&Z.deltaY>0&&b(Z),x&&Z.deltaY<0&&x(Z),C&&C(Z),W&&Z.deltaY<0!=Ve<0&&W(Z),Ve=Z.deltaY,Xt[0]=Xt[1]=Xt[2]=0),(It||Gt)&&(H&&H(Z),Gt&&(p&&Gt===1&&p(Z),v&&v(Z),Gt=0),It=!1),jt&&!(jt=!1)&&Rt&&Rt(Z),Ft&&(K(Z),Ft=!1),pe=0},at=function(gt,rt,it){ot[it]+=gt,Xt[it]+=rt,Z._vx.update(gt),Z._vy.update(rt),c?pe||(pe=requestAnimationFrame(z)):z()},et=function(gt,rt){dt&&!ce&&(Z.axis=ce=Math.abs(gt)>Math.abs(rt)?"x":"y",jt=!0),ce!=="y"&&(ot[2]+=gt,Z._vx.update(gt,!0)),ce!=="x"&&(Xt[2]+=rt,Z._vy.update(rt,!0)),c?pe||(pe=requestAnimationFrame(z)):z()},ht=function(gt){if(!A(gt,1)){gt=qa(gt,h);var rt=gt.clientX,it=gt.clientY,_t=rt-Z.x,st=it-Z.y,Et=Z.isDragging;Z.x=rt,Z.y=it,(Et||(_t||st)&&(Math.abs(Z.startX-rt)>=r||Math.abs(Z.startY-it)>=r))&&(Gt||(Gt=Et?2:1),Et||(Z.isDragging=!0),et(_t,st))}},nt=Z.onPress=function(ct){A(ct,1)||ct&&ct.button||(Z.axis=ce=null,Ct.pause(),Z.isPressed=!0,ct=qa(ct),$t=Ve=0,Z.startX=Z.x=ct.clientX,Z.startY=Z.y=ct.clientY,Z._vx.reset(),Z._vy.reset(),Vn(tt?a:Dt,Ui[1],ht,ge,!0),Z.deltaX=Z.deltaY=0,T&&T(Z))},k=Z.onRelease=function(ct){if(!A(ct,1)){kn(tt?a:Dt,Ui[1],ht,!0);var gt=!isNaN(Z.y-Z.startY),rt=Z.isDragging,it=rt&&(Math.abs(Z.x-Z.startX)>3||Math.abs(Z.y-Z.startY)>3),_t=qa(ct);!it&&gt&&(Z._vx.reset(),Z._vy.reset(),h&&Mt&&vn.delayedCall(.08,function(){if(Ya()-wt>300&&!ct.defaultPrevented){if(ct.target.click)ct.target.click();else if(Dt.createEvent){var st=Dt.createEvent("MouseEvents");st.initMouseEvent("click",!0,!0,jn,1,_t.screenX,_t.screenY,_t.clientX,_t.clientY,!1,!1,!1,!1,0,null),ct.target.dispatchEvent(st)}}})),Z.isDragging=Z.isGesturing=Z.isPressed=!1,d&&rt&&!tt&&Ct.restart(!0),Gt&&z(),g&&rt&&g(Z),y&&y(Z,it)}},j=function(gt){return gt.touches&&gt.touches.length>1&&(Z.isGesturing=!0)&&X(gt,Z.isDragging)},lt=function(){return(Z.isGesturing=!1)||R(Z)},L=function(gt){if(!A(gt)){var rt=ne(),it=Ie();at((rt-Te)*ft,(it-O)*ft,1),Te=rt,O=it,d&&Ct.restart(!0)}},Q=function(gt){if(!A(gt)){gt=qa(gt,h),K&&(Ft=!0);var rt=(gt.deltaMode===1?l:gt.deltaMode===2?jn.innerHeight:1)*m;at(gt.deltaX*rt,gt.deltaY*rt,0),d&&!tt&&Ct.restart(!0)}},$=function(gt){if(!A(gt)){var rt=gt.clientX,it=gt.clientY,_t=rt-Z.x,st=it-Z.y;Z.x=rt,Z.y=it,It=!0,d&&Ct.restart(!0),(_t||st)&&et(_t,st)}},pt=function(gt){Z.event=gt,I(Z)},ut=function(gt){Z.event=gt,B(Z)},mt=function(gt){return A(gt)||qa(gt,h)&&Y(Z)};Ct=Z._dc=vn.delayedCall(u||.25,S).pause(),Z.deltaX=Z.deltaY=0,Z._vx=Ph(0,50,!0),Z._vy=Ph(0,50,!0),Z.scrollX=ne,Z.scrollY=Ie,Z.isDragging=Z.isGesturing=Z.isPressed=!1,Hg(this),Z.enable=function(ct){return Z.isEnabled||(Vn(bt?Dt:a,"scroll",pd),o.indexOf("scroll")>=0&&Vn(bt?Dt:a,"scroll",L,ge,xt),o.indexOf("wheel")>=0&&Vn(a,"wheel",Q,ge,xt),(o.indexOf("touch")>=0&&Vg||o.indexOf("pointer")>=0)&&(Vn(a,Ui[0],nt,ge,xt),Vn(Dt,Ui[2],k),Vn(Dt,Ui[3],k),Mt&&Vn(a,"click",Nt,!0,!0),Y&&Vn(a,"click",mt),X&&Vn(Dt,"gesturestart",j),R&&Vn(Dt,"gestureend",lt),I&&Vn(a,Er+"enter",pt),B&&Vn(a,Er+"leave",ut),H&&Vn(a,Er+"move",$)),Z.isEnabled=!0,Z.isDragging=Z.isGesturing=Z.isPressed=It=Gt=!1,Z._vx.reset(),Z._vy.reset(),Te=ne(),O=Ie(),ct&&ct.type&&nt(ct),yt&&yt(Z)),Z},Z.disable=function(){Z.isEnabled&&(Eo.filter(function(ct){return ct!==Z&&Za(ct.target)}).length||kn(bt?Dt:a,"scroll",pd),Z.isPressed&&(Z._vx.reset(),Z._vy.reset(),kn(tt?a:Dt,Ui[1],ht,!0)),kn(bt?Dt:a,"scroll",L,xt),kn(a,"wheel",Q,xt),kn(a,Ui[0],nt,xt),kn(Dt,Ui[2],k),kn(Dt,Ui[3],k),kn(a,"click",Nt,!0),kn(a,"click",mt),kn(Dt,"gesturestart",j),kn(Dt,"gestureend",lt),kn(a,Er+"enter",pt),kn(a,Er+"leave",ut),kn(a,Er+"move",$),Z.isEnabled=Z.isPressed=Z.isDragging=!1,kt&&kt(Z))},Z.kill=Z.revert=function(){Z.disable();var ct=Eo.indexOf(Z);ct>=0&&Eo.splice(ct,1),ys===Z&&(ys=0)},Eo.push(Z),tt&&Za(a)&&(ys=Z),Z.enable(_)},Zb(s,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),s})();qe.version="3.15.1";qe.create=function(s){return new qe(s)};qe.register=Yg;qe.getAll=function(){return Eo.slice()};qe.getById=function(s){return Eo.filter(function(t){return t.vars.id===s})[0]};Wg()&&vn.registerPlugin(qe);var Pt,Lo,ee,ye,pi,ve,Cd,qh,al,el,$a,Ih,Ln,Jh,Sd,Wn,Zg,Jg,Do,u_,md,f_,Hn,Md,d_,p_,tr,bd,Rd,No,Pd,er,Td,gd,Lh=1,Dn=Date.now,_d=Dn(),Ti=0,Ka=0,$g=function(t,e,n){var i=di(t)&&(t.substr(0,6)==="clamp("||t.indexOf("max")>-1);return n["_"+e+"Clamp"]=i,i?t.substr(6,t.length-7):t},Kg=function(t,e){return e&&(!di(t)||t.substr(0,6)!=="clamp(")?"clamp("+t+")":t},Qb=function s(){return Ka&&requestAnimationFrame(s)},Qg=function(){return Jh=1},jg=function(){return Jh=0},Qi=function(t){return t},Qa=function(t){return Math.round(t*1e5)/1e5||0},m_=function(){return typeof window!="undefined"},g_=function(){return Pt||m_()&&(Pt=window.gsap)&&Pt.registerPlugin&&Pt},Lr=function(t){return!!~Cd.indexOf(t)},__=function(t){return(t==="Height"?Pd:ee["inner"+t])||pi["client"+t]||ve["client"+t]},x_=function(t){return Ms(t,"getBoundingClientRect")||(Lr(t)?function(){return Xh.width=ee.innerWidth,Xh.height=Pd,Xh}:function(){return bs(t)})},jb=function(t,e,n){var i=n.d,r=n.d2,o=n.a;return(o=Ms(t,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(e?__(r):t["client"+r])||0}},tT=function(t,e){return!e||~Oi.indexOf(t)?x_(t):function(){return Xh}},ji=function(t,e){var n=e.s,i=e.d2,r=e.d,o=e.a;return Math.max(0,(n="scroll"+i)&&(o=Ms(t,n))?o()-x_(t)()[r]:Lr(t)?(pi[n]||ve[n])-__(i):t[n]-t["offset"+i])},Dh=function(t,e){for(var n=0;n<Do.length;n+=3)(!e||~e.indexOf(Do[n+1]))&&t(Do[n],Do[n+1],Do[n+2])},di=function(t){return typeof t=="string"},Nn=function(t){return typeof t=="function"},ja=function(t){return typeof t=="number"},Ar=function(t){return typeof t=="object"},Ja=function(t,e,n){return t&&t.progress(e?0:1)&&n&&t.pause()},Ro=function(t,e,n){if(t.enabled){var i=t._ctx?t._ctx.add(function(){return e(t,n)}):e(t,n);i&&i.totalTime&&(t.callbackAnimation=i)}},Po=Math.abs,v_="left",y_="top",Id="right",Ld="bottom",Rr="width",Pr="height",nl="Right",il="Left",sl="Top",rl="Bottom",tn="padding",Mi="margin",Oo="Width",Dd="Height",cn="px",bi=function(t){return ee.getComputedStyle(t.nodeType===Node.DOCUMENT_NODE?t.scrollingElement:t)},eT=function(t){var e=bi(t).position;t.style.position=e==="absolute"||e==="fixed"?e:"relative"},t_=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},bs=function(t,e){var n=e&&bi(t)[Sd]!=="matrix(1, 0, 0, 1, 0, 0)"&&Pt.to(t,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=t.getBoundingClientRect?t.getBoundingClientRect():t.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),i},Yh=function(t,e){var n=e.d2;return t["offset"+n]||t["client"+n]||0},S_=function(t){var e=[],n=t.labels,i=t.duration(),r;for(r in n)e.push(n[r]/i);return e},nT=function(t){return function(e){return Pt.utils.snap(S_(t),e)}},Nd=function(t){var e=Pt.utils.snap(t),n=Array.isArray(t)&&t.slice(0).sort(function(i,r){return i-r});return n?function(i,r,o){o===void 0&&(o=.001);var a;if(!r)return e(i);if(r>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,r,o){o===void 0&&(o=.001);var a=e(i);return!r||Math.abs(a-i)<o||a-i<0==r<0?a:e(r<0?i-t:i+t)}},iT=function(t){return function(e,n){return Nd(S_(t))(e,n.direction)}},Nh=function(t,e,n,i){return n.split(",").forEach(function(r){return t(e,r,i)})},pn=function(t,e,n,i,r){return t.addEventListener(e,n,{passive:!i,capture:!!r})},dn=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},Uh=function(t,e,n){n=n&&n.wheelHandler,n&&(t(e,"wheel",n),t(e,"touchmove",n))},e_={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Oh={toggleActions:"play",anticipatePin:0},Zh={top:0,left:0,center:.5,bottom:1,right:1},Vh=function(t,e){if(di(t)){var n=t.indexOf("="),i=~n?+(t.charAt(n-1)+1)*parseFloat(t.substr(n+1)):0;~n&&(t.indexOf("%")>n&&(i*=e/100),t=t.substr(0,n-1)),t=i+(t in Zh?Zh[t]*e:~t.indexOf("%")?parseFloat(t)*e/100:parseFloat(t)||0)}return t},Fh=function(t,e,n,i,r,o,a,l){var c=r.startColor,h=r.endColor,d=r.fontSize,u=r.indent,f=r.fontWeight,m=ye.createElement("div"),_=Lr(n)||Ms(n,"pinType")==="fixed",p=t.indexOf("scroller")!==-1,g=_?ve:n.tagName==="IFRAME"?n.contentDocument.body:n,v=t.indexOf("start")!==-1,T=v?c:h,y="border-color:"+T+";font-size:"+d+";color:"+T+";font-weight:"+f+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return y+="position:"+((p||l)&&_?"fixed;":"absolute;"),(p||l||!_)&&(y+=(i===je?Id:Ld)+":"+(o+parseFloat(u))+"px;"),a&&(y+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),m._isStart=v,m.setAttribute("class","gsap-marker-"+t+(e?" marker-"+e:"")),m.style.cssText=y,m.innerText=e||e===0?t+"-"+e:t,g.children[0]?g.insertBefore(m,g.children[0]):g.appendChild(m),m._offset=m["offset"+i.op.d2],Gh(m,0,i,v),m},Gh=function(t,e,n,i){var r={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];t._isFlipped=i,r[n.a+"Percent"]=i?-100:0,r[n.a]=i?"1px":0,r["border"+o+Oo]=1,r["border"+a+Oo]=0,r[n.p]=e+"px",Pt.set(t,r)},te=[],wd={},ll,n_=function(){return Dn()-Ti>34&&(ll||(ll=requestAnimationFrame(Ts)))},Io=function(){(!Hn||!Hn.isPressed||Hn.startX>ve.clientWidth)&&(Qt.cache++,Hn?ll||(ll=requestAnimationFrame(Ts)):Ts(),Ti||Nr("scrollStart"),Ti=Dn())},xd=function(){p_=ee.innerWidth,d_=ee.innerHeight},tl=function(t){Qt.cache++,(t===!0||!Ln&&!f_&&!ye.fullscreenElement&&!ye.webkitFullscreenElement&&(!Md||p_!==ee.innerWidth||Math.abs(ee.innerHeight-d_)>ee.innerHeight*.25))&&qh.restart(!0)},Dr={},sT=[],M_=function s(){return dn(Zt,"scrollEnd",s)||Cr(!0)},Nr=function(t){return Dr[t]&&Dr[t].map(function(e){return e()})||sT},fi=[],b_=function(t){for(var e=0;e<fi.length;e+=5)(!t||fi[e+4]&&fi[e+4].query===t)&&(fi[e].style.cssText=fi[e+1],fi[e].getBBox&&fi[e].setAttribute("transform",fi[e+2]||""),fi[e+3].uncache=1)},T_=function(){Qt.cache++,Qt.forEach(function(t){return Nn(t)&&(t.rec=t())})},Ud=function(t,e){var n;for(Wn=0;Wn<te.length;Wn++)n=te[Wn],n&&(!e||n._ctx===e)&&(t?n.kill(1):n.revert(!0,!0));er=!0,e&&b_(e),e||Nr("revert")},w_=function(t,e){Qt.cache++,(e||!Xn)&&Qt.forEach(function(n){return Nn(n)&&n.cacheID++&&(n.rec=0)}),di(t)&&(Rd=t,ee.history.scrollRestoration!==t&&(ee.history.scrollRestoration=t))},Xn,Ir=0,i_,rT=function(){if(i_!==Ir){var t=i_=Ir;requestAnimationFrame(function(){return t===Ir&&Cr(!0)})}},E_=function(){ve.appendChild(No),Pd=!Hn&&No.offsetHeight||ee.innerHeight,ve.removeChild(No)},s_=function(t){return al(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(e){return e.style.display=t?"none":"block"})},Cr=function(t,e){if(pi=ye.documentElement,ve=ye.body,Cd=[ee,ye,pi,ve],Ti&&!t&&!er){pn(Zt,"scrollEnd",M_);return}E_(),Xn=Zt.isRefreshing=!0,er||T_();var n=Nr("refreshInit");u_&&Zt.sort(),e||Ud(),Qt.forEach(function(i){Nn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),te.slice(0).forEach(function(i){return i.refresh()}),er=!1,te.forEach(function(i){if(i._subPinOffset&&i.pin){var r=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[r];i.revert(!0,1),i.adjustPinSpacing(i.pin[r]-o),i.refresh()}}),Td=1,s_(!0),te.forEach(function(i){var r=ji(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>r,a=i._startClamp&&i.start>=r;(o||a)&&i.setPositions(a?r-1:i.start,o?Math.max(a?r:i.start+1,r):i.end,!0)}),s_(!1),Td=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),Qt.forEach(function(i){Nn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),w_(Rd,1),qh.pause(),Ir++,Xn=2,Ts(2),te.forEach(function(i){return Nn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),Xn=Zt.isRefreshing=!1,Nr("refresh")},Ed=0,Hh=1,ol,Ts=function(t){if(t===2||!Xn&&!er){Zt.isUpdating=!0,ol&&ol.update(0);var e=te.length,n=Dn(),i=n-_d>=50,r=e&&te[0].scroll();if(Hh=Ed>r?-1:1,Xn||(Ed=r),i&&(Ti&&!Jh&&n-Ti>200&&(Ti=0,Nr("scrollEnd")),$a=_d,_d=n),Hh<0){for(Wn=e;Wn-- >0;)te[Wn]&&te[Wn].update(0,i);Hh=1}else for(Wn=0;Wn<e;Wn++)te[Wn]&&te[Wn].update(0,i);Zt.isUpdating=!1}ll=0},Ad=[v_,y_,Ld,Id,Mi+rl,Mi+nl,Mi+sl,Mi+il,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Wh=Ad.concat([Rr,Pr,"boxSizing","max"+Oo,"max"+Dd,"position",Mi,tn,tn+sl,tn+nl,tn+rl,tn+il]),oT=function(t,e,n){Uo(n);var i=t._gsap;if(i.spacerIsNative)Uo(i.spacerState);else if(t._gsap.swappedIn){var r=e.parentNode;r&&(r.insertBefore(t,e),r.removeChild(e))}t._gsap.swappedIn=!1},vd=function(t,e,n,i){if(!t._gsap.swappedIn){for(var r=Ad.length,o=e.style,a=t.style,l;r--;)l=Ad[r],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[Ld]=a[Id]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[Rr]=Yh(t,In)+cn,o[Pr]=Yh(t,je)+cn,o[tn]=a[Mi]=a[y_]=a[v_]="0",Uo(i),a[Rr]=a["max"+Oo]=n[Rr],a[Pr]=a["max"+Dd]=n[Pr],a[tn]=n[tn],t.parentNode!==e&&(t.parentNode.insertBefore(e,t),e.appendChild(t)),t._gsap.swappedIn=!0}},aT=/([A-Z])/g,Uo=function(t){if(t){var e=t.t.style,n=t.length,i=0,r,o;for((t.t._gsap||Pt.core.getCache(t.t)).uncache=1;i<n;i+=2)o=t[i+1],r=t[i],o?e[r]=o:e[r]&&e.removeProperty(r.replace(aT,"-$1").toLowerCase())}},Bh=function(t){for(var e=Wh.length,n=t.style,i=[],r=0;r<e;r++)i.push(Wh[r],n[Wh[r]]);return i.t=t,i},lT=function(t,e,n){for(var i=[],r=t.length,o=n?8:0,a;o<r;o+=2)a=t[o],i.push(a,a in e?e[a]:t[o+1]);return i.t=t.t,i},Xh={left:0,top:0},r_=function(t,e,n,i,r,o,a,l,c,h,d,u,f,m){Nn(t)&&(t=t(l)),di(t)&&t.substr(0,3)==="max"&&(t=u+(t.charAt(4)==="="?Vh("0"+t.substr(3),n):0));var _=f?f.time():0,p,g,v;if(f&&f.seek(0),isNaN(t)||(t=+t),ja(t))f&&(t=Pt.utils.mapRange(f.scrollTrigger.start,f.scrollTrigger.end,0,u,t)),a&&Gh(a,n,i,!0);else{Nn(e)&&(e=e(l));var T=(t||"0").split(" "),y,w,E,x;v=Gn(e,l)||ve,y=bs(v)||{},(!y||!y.left&&!y.top)&&bi(v).display==="none"&&(x=v.style.display,v.style.display="block",y=bs(v),x?v.style.display=x:v.style.removeProperty("display")),w=Vh(T[0],y[i.d]),E=Vh(T[1]||"0",n),t=y[i.p]-c[i.p]-h+w+r-E,a&&Gh(a,E,i,n-E<20||a._isStart&&E>20),n-=n-E}if(m&&(l[m]=t||-.001,t<0&&(t=0)),o){var b=t+n,P=o._isStart;p="scroll"+i.d2,Gh(o,b,i,P&&b>20||!P&&(d?Math.max(ve[p],pi[p]):o.parentNode[p])<=b+1),d&&(c=bs(a),d&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+cn))}return f&&v&&(p=bs(v),f.seek(u),g=bs(v),f._caScrollDist=p[i.p]-g[i.p],t=t/f._caScrollDist*u),f&&f.seek(_),f?t:Math.round(t)},cT=/(webkit|moz|length|cssText|inset)/i,o_=function(t,e,n,i){if(t.parentNode!==e){var r=t.style,o,a;if(e===ve){t._stOrig=r.cssText,a=bi(t);for(o in a)!+o&&!cT.test(o)&&a[o]&&typeof r[o]=="string"&&o!=="0"&&(r[o]=a[o]);r.top=n,r.left=i}else r.cssText=t._stOrig;Pt.core.getCache(t).uncache=1,e.appendChild(t)}},A_=function(t,e,n){var i=e,r=i;return function(o){var a=Math.round(t());return a!==i&&a!==r&&Math.abs(a-i)>3&&Math.abs(a-r)>3&&(o=a,n&&n()),r=i,i=Math.round(o),i}},zh=function(t,e,n){var i={};i[e.p]="+="+n,Pt.set(t,i)},a_=function(t,e){var n=Ss(t,e),i="_scroll"+e.p2,r=function o(a,l,c,h,d){var u=o.tween,f=l.onComplete,m={};c=c||n();var _=A_(n,c,function(){u.kill(),o.tween=0});return d=h&&d||0,h=h||a-c,u&&u.kill(),l[i]=a,l.inherit=!1,l.modifiers=m,m[i]=function(){return _(c+h*u.ratio+d*u.ratio*u.ratio)},l.onUpdate=function(){Qt.cache++,o.tween&&Ts()},l.onComplete=function(){o.tween=0,f&&f.call(u)},u=o.tween=Pt.to(t,l),u};return t[i]=n,n.wheelHandler=function(){return r.tween&&r.tween.kill()&&(r.tween=0)},pn(t,"wheel",n.wheelHandler),Zt.isTouch&&pn(t,"touchmove",n.wheelHandler),r},Zt=(function(){function s(e,n){Lo||s.register(Pt)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),bd(this),this.init(e,n)}var t=s.prototype;return t.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Ka){this.update=this.refresh=this.kill=Qi;return}n=t_(di(n)||ja(n)||n.nodeType?{trigger:n}:n,Oh);var r=n,o=r.onUpdate,a=r.toggleClass,l=r.id,c=r.onToggle,h=r.onRefresh,d=r.scrub,u=r.trigger,f=r.pin,m=r.pinSpacing,_=r.invalidateOnRefresh,p=r.anticipatePin,g=r.onScrubComplete,v=r.onSnapComplete,T=r.once,y=r.snap,w=r.pinReparent,E=r.pinSpacer,x=r.containerAnimation,b=r.fastScrollEnd,P=r.preventOverlaps,C=n.horizontal||n.containerAnimation&&n.horizontal!==!1?In:je,N=!d&&d!==0,D=Gn(n.scroller||ee),W=Pt.core.getCache(D),I=Lr(D),B=("pinType"in n?n.pinType:Ms(D,"pinType")||I&&"fixed")==="fixed",H=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],F=N&&n.toggleActions.split(" "),tt="markers"in n?n.markers:Oh.markers,X=I?0:parseFloat(bi(D)["border"+C.p2+Oo])||0,R=this,K=n.onRefreshInit&&function(){return n.onRefreshInit(R)},yt=jb(D,I,C),kt=tT(D,I),Y=0,ft=0,xt=0,Mt=Ss(D,C),dt,Rt,pe,Ct,Gt,It,Ft,jt,ce,Z,$t,Ve,ge,ne,Ie,Te,O,ue,bt,Dt,ot,Xt,wt,Nt,A,S,z,at,et,ht,nt,k,j,lt,L,Q,$,pt,ut;if(R._startClamp=R._endClamp=!1,R._dir=C,p*=45,R.scroller=D,R.scroll=x?x.time.bind(x):Mt,Ct=Mt(),er&&Mt.rec==null&&(Mt.rec=Ct),R.vars=n,i=i||n.animation,"refreshPriority"in n&&(u_=1,n.refreshPriority===-9999&&(ol=R)),W.tweenScroll=W.tweenScroll||{top:a_(D,je),left:a_(D,In)},R.tweenTo=dt=W.tweenScroll[C.p],R.scrubDuration=function(it){j=ja(it)&&it,j?k?k.duration(it):k=Pt.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:j,paused:!0,onComplete:function(){return g&&g(R)}}):(k&&k.progress(1).kill(),k=0)},i&&(i.vars.lazy=!1,i._initted&&!R.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),R.animation=i.pause(),i.scrollTrigger=R,R.scrubDuration(d),ht=0,l||(l=i.vars.id)),y&&((!Ar(y)||y.push)&&(y={snapTo:y}),"scrollBehavior"in ve.style&&Pt.set(I?[ve,pi]:D,{scrollBehavior:"auto"}),Qt.forEach(function(it){return Nn(it)&&it.target===(I?ye.scrollingElement||pi:D)&&(it.smooth=!1)}),pe=Nn(y.snapTo)?y.snapTo:y.snapTo==="labels"?nT(i):y.snapTo==="labelsDirectional"?iT(i):y.directional!==!1?function(it,_t){return Nd(y.snapTo)(it,Dn()-ft<500?0:_t.direction)}:Pt.utils.snap(y.snapTo),lt=y.duration||{min:.1,max:2},lt=Ar(lt)?el(lt.min,lt.max):el(lt,lt),L=Pt.delayedCall(y.delay||j/2||.1,function(){var it=Mt(),_t=Dn()-ft<500,st=dt.tween;if((_t||Math.abs(R.getVelocity())<10)&&!st&&!Jh&&Y!==it){var Et=(it-It)/ne,ie=i&&!N?i.totalProgress():Et,qt=_t?0:(ie-nt)/(Dn()-$a)*1e3||0,De=Pt.utils.clamp(-Et,1-Et,Po(qt/2)*qt/.185),Ze=Et+(y.inertia===!1?0:De),Ne,we,_e=y,en=_e.onStart,Ee=_e.onInterrupt,yn=_e.onComplete;if(Ne=pe(Ze,R),ja(Ne)||(Ne=Ze),we=Math.max(0,Math.round(It+Ne*ne)),it<=Ft&&it>=It&&we!==it){if(st&&!st._initted&&st.data<=Po(we-it))return;y.inertia===!1&&(De=Ne-Et),dt(we,{duration:lt(Po(Math.max(Po(Ze-ie),Po(Ne-ie))*.185/qt/.05||0)),ease:y.ease||"power3",data:Po(we-it),onInterrupt:function(){return L.restart(!0)&&Ee&&Ro(R,Ee)},onComplete:function(){R.update(),Y=Mt(),i&&!N&&(k?k.resetTo("totalProgress",Ne,i._tTime/i._tDur):i.progress(Ne)),ht=nt=i&&!N?i.totalProgress():R.progress,v&&v(R),yn&&Ro(R,yn)}},it,De*ne,we-it-De*ne),en&&Ro(R,en,dt.tween)}}else R.isActive&&Y!==it&&L.restart(!0)}).pause()),l&&(wd[l]=R),u=R.trigger=Gn(u||f!==!0&&f),ut=u&&u._gsap&&u._gsap.stRevert,ut&&(ut=ut(R)),f=f===!0?u:Gn(f),di(a)&&(a={targets:u,className:a}),f&&(m===!1||m===Mi||(m=!m&&f.parentNode&&f.parentNode.style&&bi(f.parentNode).display==="flex"?!1:tn),R.pin=f,Rt=Pt.core.getCache(f),Rt.spacer?Ie=Rt.pinState:(E&&(E=Gn(E),E&&!E.nodeType&&(E=E.current||E.nativeElement),Rt.spacerIsNative=!!E,E&&(Rt.spacerState=Bh(E))),Rt.spacer=ue=E||ye.createElement("div"),ue.classList.add("pin-spacer"),l&&ue.classList.add("pin-spacer-"+l),Rt.pinState=Ie=Bh(f)),n.force3D!==!1&&Pt.set(f,{force3D:!0}),R.spacer=ue=Rt.spacer,et=bi(f),Nt=et[m+C.os2],Dt=Pt.getProperty(f),ot=Pt.quickSetter(f,C.a,cn),vd(f,ue,et),O=Bh(f)),tt){Ve=Ar(tt)?t_(tt,e_):e_,Z=Fh("scroller-start",l,D,C,Ve,0),$t=Fh("scroller-end",l,D,C,Ve,0,Z),bt=Z["offset"+C.op.d2];var mt=Gn(Ms(D,"content")||D);jt=this.markerStart=Fh("start",l,mt,C,Ve,bt,0,x),ce=this.markerEnd=Fh("end",l,mt,C,Ve,bt,0,x),x&&(pt=Pt.quickSetter([jt,ce],C.a,cn)),!B&&!(Oi.length&&Ms(D,"fixedMarkers")===!0)&&(eT(I?ve:D),Pt.set([Z,$t],{force3D:!0}),S=Pt.quickSetter(Z,C.a,cn),at=Pt.quickSetter($t,C.a,cn))}if(x){var ct=x.vars.onUpdate,gt=x.vars.onUpdateParams;x.eventCallback("onUpdate",function(){R.update(0,0,1),ct&&ct.apply(x,gt||[])})}if(R.previous=function(){return te[te.indexOf(R)-1]},R.next=function(){return te[te.indexOf(R)+1]},R.revert=function(it,_t){if(!_t)return R.kill(!0);var st=it!==!1||!R.enabled,Et=Ln;st!==R.isReverted&&(st&&(Q=Math.max(Mt(),R.scroll.rec||0),xt=R.progress,$=i&&i.progress()),jt&&[jt,ce,Z,$t].forEach(function(ie){return ie.style.display=st?"none":"block"}),st&&(Ln=R,R.update(st)),f&&(!w||!R.isActive)&&(st?oT(f,ue,Ie):vd(f,ue,bi(f),A)),st||R.update(st),Ln=Et,R.isReverted=st)},R.refresh=function(it,_t,st,Et){if(!((Ln||!R.enabled)&&!_t)){if(f&&it&&Ti){pn(s,"scrollEnd",M_);return}!Xn&&K&&K(R),Ln=R,dt.tween&&!st&&(dt.tween.kill(),dt.tween=0),k&&k.pause(),_&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(V){return V.vars.immediateRender&&V.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),R.isReverted||R.revert(!0,!0),R._subPinOffset=!1;var ie=yt(),qt=kt(),De=x?x.duration():ji(D,C),Ze=ne<=.01||!ne,Ne=0,we=Et||0,_e=Ar(st)?st.end:n.end,en=n.endTrigger||u,Ee=Ar(st)?st.start:n.start||(n.start===0||!u?0:f?"0 0":"0 100%"),yn=R.pinnedContainer=n.pinnedContainer&&Gn(n.pinnedContainer,R),ti=u&&Math.max(0,te.indexOf(R))||0,Ge=ti,Je,nn,ei,Fr,sn,He,mi,Bo,cl,As,M,U,J;for(tt&&Ar(st)&&(U=Pt.getProperty(Z,C.p),J=Pt.getProperty($t,C.p));Ge-- >0;)He=te[Ge],He.end||He.refresh(0,1)||(Ln=R),mi=He.pin,mi&&(mi===u||mi===f||mi===yn)&&!He.isReverted&&(As||(As=[]),As.unshift(He),He.revert(!0,!0)),He!==te[Ge]&&(ti--,Ge--);for(Nn(Ee)&&(Ee=Ee(R)),Ee=$g(Ee,"start",R),It=r_(Ee,u,ie,C,Mt(),jt,Z,R,qt,X,B,De,x,R._startClamp&&"_startClamp")||(f?-.001:0),Nn(_e)&&(_e=_e(R)),di(_e)&&!_e.indexOf("+=")&&(~_e.indexOf(" ")?_e=(di(Ee)?Ee.split(" ")[0]:"")+_e:(Ne=Vh(_e.substr(2),ie),_e=di(Ee)?Ee:(x?Pt.utils.mapRange(0,x.duration(),x.scrollTrigger.start,x.scrollTrigger.end,It):It)+Ne,en=u)),_e=$g(_e,"end",R),Ft=Math.max(It,r_(_e||(en?"100% 0":De),en,ie,C,Mt()+Ne,ce,$t,R,qt,X,B,De,x,R._endClamp&&"_endClamp"))||-.001,Ne=0,Ge=ti;Ge--;)He=te[Ge]||{},mi=He.pin,mi&&He.start-He._pinPush<=It&&!x&&He.end>0&&(Je=He.end-(R._startClamp?Math.max(0,He.start):He.start),(mi===u&&He.start-He._pinPush<It||mi===yn)&&isNaN(Ee)&&(Ne+=Je*(1-He.progress)),mi===f&&(we+=Je));if(It+=Ne,Ft+=Ne,R._startClamp&&(R._startClamp+=Ne),R._endClamp&&!Xn&&(R._endClamp=Ft||-.001,Ft=Math.min(Ft,ji(D,C))),ne=Ft-It||(It-=.01)&&.001,Ze&&(xt=Pt.utils.clamp(0,1,Pt.utils.normalize(It,Ft,Q))),R._pinPush=we,jt&&Ne&&(Je={},Je[C.a]="+="+Ne,yn&&(Je[C.p]="-="+Mt()),Pt.set([jt,ce],Je)),f&&!(Td&&R.end>=ji(D,C)))Je=bi(f),Fr=C===je,ei=Mt(),Xt=parseFloat(Dt(C.a))+we,!De&&Ft>1&&(M=(I?ye.scrollingElement||pi:D).style,M={style:M,value:M["overflow"+C.a.toUpperCase()]},I&&bi(ve)["overflow"+C.a.toUpperCase()]!=="scroll"&&(M.style["overflow"+C.a.toUpperCase()]="scroll")),vd(f,ue,Je),O=Bh(f),nn=bs(f,!0),Bo=B&&Ss(D,Fr?In:je)(),m?(A=[m+C.os2,ne+we+cn],A.t=ue,Ge=m===tn?Yh(f,C)+ne+we:0,Ge&&(A.push(C.d,Ge+cn),ue.style.flexBasis!=="auto"&&(ue.style.flexBasis=Ge+cn)),Uo(A),yn&&te.forEach(function(V){V.pin===yn&&V.vars.pinSpacing!==!1&&(V._subPinOffset=!0)}),B&&Mt(Q)):(Ge=Yh(f,C),Ge&&ue.style.flexBasis!=="auto"&&(ue.style.flexBasis=Ge+cn)),B&&(sn={top:nn.top+(Fr?ei-It:Bo)+cn,left:nn.left+(Fr?Bo:ei-It)+cn,boxSizing:"border-box",position:"fixed"},sn[Rr]=sn["max"+Oo]=Math.ceil(nn.width)+cn,sn[Pr]=sn["max"+Dd]=Math.ceil(nn.height)+cn,sn[Mi]=sn[Mi+sl]=sn[Mi+nl]=sn[Mi+rl]=sn[Mi+il]="0",sn[tn]=Je[tn],sn[tn+sl]=Je[tn+sl],sn[tn+nl]=Je[tn+nl],sn[tn+rl]=Je[tn+rl],sn[tn+il]=Je[tn+il],Te=lT(Ie,sn,w),Xn&&Mt(0)),i?(cl=i._initted,md(1),i.render(i.duration(),!0,!0),wt=Dt(C.a)-Xt+ne+we,z=Math.abs(ne-wt)>1,B&&z&&Te.splice(Te.length-2,2),i.render(0,!0,!0),cl||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),md(0)):wt=ne,M&&(M.value?M.style["overflow"+C.a.toUpperCase()]=M.value:M.style.removeProperty("overflow-"+C.a));else if(u&&Mt()&&!x)for(nn=u.parentNode;nn&&nn!==ve;)nn._pinOffset&&(It-=nn._pinOffset,Ft-=nn._pinOffset),nn=nn.parentNode;As&&As.forEach(function(V){return V.revert(!1,!0)}),R.start=It,R.end=Ft,Ct=Gt=Xn?Q:Mt(),!x&&!Xn&&!er&&(Ct<Q&&Mt(Q),R.scroll.rec=0),R.revert(!1,!0),ft=Dn(),L&&(Y=-1,L.restart(!0)),Ln=0,i&&N&&(i._initted||$)&&i.progress()!==$&&i.progress($||0,!0).render(i.time(),!0,!0),(Ze||xt!==R.progress||x||_||i&&!i._initted)&&(i&&!N&&(i._initted||xt||i.vars.immediateRender!==!1)&&i.totalProgress(x&&It<-.001&&!xt?Pt.utils.normalize(It,Ft,0):xt,!0),R.progress=Ze||(Ct-It)/ne===xt?0:xt),f&&m&&(ue._pinOffset=Math.round(R.progress*wt)),k&&k.invalidate(),isNaN(U)||(U-=Pt.getProperty(Z,C.p),J-=Pt.getProperty($t,C.p),zh(Z,C,U),zh(jt,C,U-(Et||0)),zh($t,C,J),zh(ce,C,J-(Et||0))),Ze&&!Xn&&R.update(),h&&!Xn&&!ge&&(ge=!0,h(R),ge=!1)}},R.getVelocity=function(){return(Mt()-Gt)/(Dn()-$a)*1e3||0},R.endAnimation=function(){Ja(R.callbackAnimation),i&&(k?k.progress(1):i.paused()?N||Ja(i,R.direction<0,1):Ja(i,i.reversed()))},R.labelToScroll=function(it){return i&&i.labels&&(It||R.refresh()||It)+i.labels[it]/i.duration()*ne||0},R.getTrailing=function(it){var _t=te.indexOf(R),st=R.direction>0?te.slice(0,_t).reverse():te.slice(_t+1);return(di(it)?st.filter(function(Et){return Et.vars.preventOverlaps===it}):st).filter(function(Et){return R.direction>0?Et.end<=It:Et.start>=Ft})},R.update=function(it,_t,st){if(!(x&&!st&&!it)){var Et=Xn===!0?Q:R.scroll(),ie=it?0:(Et-It)/ne,qt=ie<0?0:ie>1?1:ie||0,De=R.progress,Ze,Ne,we,_e,en,Ee,yn,ti;if(_t&&(Gt=Ct,Ct=x?Mt():Et,y&&(nt=ht,ht=i&&!N?i.totalProgress():qt)),p&&f&&!Ln&&!Lh&&Ti&&(!qt&&It<Et+(Et-Gt)/(Dn()-$a)*p?qt=1e-4:qt===1&&Ft>Et+(Et-Gt)/(Dn()-$a)*p&&(qt=.9999)),qt!==De&&R.enabled){if(Ze=R.isActive=!!qt&&qt<1,Ne=!!De&&De<1,Ee=Ze!==Ne,en=Ee||!!qt!=!!De,R.direction=qt>De?1:-1,R.progress=qt,en&&!Ln&&(we=qt&&!De?0:qt===1?1:De===1?2:3,N&&(_e=!Ee&&F[we+1]!=="none"&&F[we+1]||F[we],ti=i&&(_e==="complete"||_e==="reset"||_e in i))),P&&(Ee||ti)&&(ti||d||!i)&&(Nn(P)?P(R):R.getTrailing(P).forEach(function(ei){return ei.endAnimation()})),N||(k&&!Ln&&!Lh?(k._dp._time-k._start!==k._time&&k.render(k._dp._time-k._start),k.resetTo?k.resetTo("totalProgress",qt,i._tTime/i._tDur):(k.vars.totalProgress=qt,k.invalidate().restart())):i&&i.totalProgress(qt,!!(Ln&&(ft||it)))),f){if(it&&m&&(ue.style[m+C.os2]=Nt),!B)ot(Qa(Xt+wt*qt));else if(en){if(yn=!it&&qt>De&&Ft+1>Et&&Et+1>=ji(D,C),w)if(!it&&(Ze||yn)){var Ge=bs(f,!0),Je=Et-It;o_(f,ve,Ge.top+(C===je?Je:0)+cn,Ge.left+(C===je?0:Je)+cn)}else o_(f,ue);Uo(Ze||yn?Te:O),z&&qt<1&&Ze||ot(Xt+(qt===1&&!yn?wt:0))}}y&&!dt.tween&&!Ln&&!Lh&&L.restart(!0),a&&(Ee||T&&qt&&(qt<1||!gd))&&al(a.targets).forEach(function(ei){return ei.classList[Ze||T?"add":"remove"](a.className)}),o&&!N&&!it&&o(R),en&&!Ln?(N&&(ti&&(_e==="complete"?i.pause().totalProgress(1):_e==="reset"?i.restart(!0).pause():_e==="restart"?i.restart(!0):i[_e]()),o&&o(R)),(Ee||!gd)&&(c&&Ee&&Ro(R,c),H[we]&&Ro(R,H[we]),T&&(qt===1?R.kill(!1,1):H[we]=0),Ee||(we=qt===1?1:3,H[we]&&Ro(R,H[we]))),b&&!Ze&&Math.abs(R.getVelocity())>(ja(b)?b:2500)&&(Ja(R.callbackAnimation),k?k.progress(1):Ja(i,_e==="reverse"?1:!qt,1))):N&&o&&!Ln&&o(R)}if(at){var nn=x?Et/x.duration()*(x._caScrollDist||0):Et;S(nn+(Z._isFlipped?1:0)),at(nn)}pt&&pt(-Et/x.duration()*(x._caScrollDist||0))}},R.enable=function(it,_t){R.enabled||(R.enabled=!0,pn(D,"resize",tl),I||pn(D,"scroll",Io),K&&pn(s,"refreshInit",K),it!==!1&&(R.progress=xt=0,Ct=Gt=Y=Mt()),_t!==!1&&R.refresh())},R.getTween=function(it){return it&&dt?dt.tween:k},R.setPositions=function(it,_t,st,Et){if(x){var ie=x.scrollTrigger,qt=x.duration(),De=ie.end-ie.start;it=ie.start+De*it/qt,_t=ie.start+De*_t/qt}R.refresh(!1,!1,{start:Kg(it,st&&!!R._startClamp),end:Kg(_t,st&&!!R._endClamp)},Et),R.update()},R.adjustPinSpacing=function(it){if(A&&it){var _t=A.indexOf(C.d)+1;A[_t]=parseFloat(A[_t])+it+cn,A[1]=parseFloat(A[1])+it+cn,Uo(A)}},R.disable=function(it,_t){if(it!==!1&&R.revert(!0,!0),R.enabled&&(R.enabled=R.isActive=!1,_t||k&&k.pause(),Q=0,Rt&&(Rt.uncache=1),K&&dn(s,"refreshInit",K),L&&(L.pause(),dt.tween&&dt.tween.kill()&&(dt.tween=0)),!I)){for(var st=te.length;st--;)if(te[st].scroller===D&&te[st]!==R)return;dn(D,"resize",tl),I||dn(D,"scroll",Io)}},R.kill=function(it,_t){R.disable(it,_t),k&&!_t&&k.kill(),l&&delete wd[l];var st=te.indexOf(R);st>=0&&te.splice(st,1),st===Wn&&Hh>0&&Wn--,st=0,te.forEach(function(Et){return Et.scroller===R.scroller&&(st=1)}),st||Xn||er||(R.scroll.rec=0),i&&(i.scrollTrigger=null,it&&i.revert({kill:!1}),_t||i.kill()),jt&&[jt,ce,Z,$t].forEach(function(Et){return Et.parentNode&&Et.parentNode.removeChild(Et)}),ol===R&&(ol=0),f&&(Rt&&(Rt.uncache=1),st=0,te.forEach(function(Et){return Et.pin===f&&st++}),st||(Rt.spacer=0)),n.onKill&&n.onKill(R)},te.push(R),R.enable(!1,!1),ut&&ut(R),i&&i.add&&!ne){var rt=R.update;R.update=function(){R.update=rt,Qt.cache++,It||Ft||R.refresh()},Pt.delayedCall(.01,R.update),ne=.01,It=Ft=0}else R.refresh();f&&rT()},s.register=function(n){return Lo||(Pt=n||g_(),m_()&&window.document&&s.enable(),Lo=Ka),Lo},s.defaults=function(n){if(n)for(var i in n)Oh[i]=n[i];return Oh},s.disable=function(n,i){Ka=0,te.forEach(function(o){return o[i?"kill":"disable"](n)}),dn(ee,"wheel",Io),dn(ye,"scroll",Io),clearInterval(Ih),dn(ye,"touchcancel",Qi),dn(ve,"touchstart",Qi),Nh(dn,ye,"pointerdown,touchstart,mousedown",Qg),Nh(dn,ye,"pointerup,touchend,mouseup",jg),qh.kill(),Dh(dn);for(var r=0;r<Qt.length;r+=3)Uh(dn,Qt[r],Qt[r+1]),Uh(dn,Qt[r],Qt[r+2])},s.enable=function(){if(ee=window,ye=document,pi=ye.documentElement,ve=ye.body,Pt){if(al=Pt.utils.toArray,el=Pt.utils.clamp,bd=Pt.core.context||Qi,md=Pt.core.suppressOverwrites||Qi,Rd=ee.history.scrollRestoration||"auto",Ed=ee.pageYOffset||0,Pt.core.globals("ScrollTrigger",s),ve){Ka=1,No=document.createElement("div"),No.style.height="100vh",No.style.position="absolute",E_(),Qb(),qe.register(Pt),s.isTouch=qe.isTouch,tr=qe.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Md=qe.isTouch===1,pn(ee,"wheel",Io),Cd=[ee,ye,pi,ve],Pt.matchMedia?(s.matchMedia=function(h){var d=Pt.matchMedia(),u;for(u in h)d.add(u,h[u]);return d},Pt.addEventListener("matchMediaInit",function(){T_(),Ud()}),Pt.addEventListener("matchMediaRevert",function(){return b_()}),Pt.addEventListener("matchMedia",function(){Cr(0,1),Nr("matchMedia")}),Pt.matchMedia().add("(orientation: portrait)",function(){return xd(),xd})):console.warn("Requires GSAP 3.11.0 or later"),xd(),pn(ye,"scroll",Io);var n=ve.hasAttribute("style"),i=ve.style,r=i.borderTopStyle,o=Pt.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",a=bs(ve),je.m=Math.round(a.top+je.sc())||0,In.m=Math.round(a.left+In.sc())||0,r?i.borderTopStyle=r:i.removeProperty("border-top-style"),n||(ve.setAttribute("style",""),ve.removeAttribute("style")),Ih=setInterval(n_,250),Pt.delayedCall(.5,function(){return Lh=0}),pn(ye,"touchcancel",Qi),pn(ve,"touchstart",Qi),Nh(pn,ye,"pointerdown,touchstart,mousedown",Qg),Nh(pn,ye,"pointerup,touchend,mouseup",jg),Sd=Pt.utils.checkPrefix("transform"),Wh.push(Sd),Lo=Dn(),qh=Pt.delayedCall(.2,Cr).pause(),Do=[ye,"visibilitychange",function(){var h=ee.innerWidth,d=ee.innerHeight;ye.hidden?(Zg=h,Jg=d):(Zg!==h||Jg!==d)&&tl()},ye,"DOMContentLoaded",Cr,ee,"load",Cr,ee,"resize",tl],Dh(pn),te.forEach(function(h){return h.enable(0,1)}),l=0;l<Qt.length;l+=3)Uh(dn,Qt[l],Qt[l+1]),Uh(dn,Qt[l],Qt[l+2])}else if(ye){var c=function h(){s.enable(),ye.removeEventListener("DOMContentLoaded",h)};ye.addEventListener("DOMContentLoaded",c)}}},s.config=function(n){"limitCallbacks"in n&&(gd=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(Ih)||(Ih=i)&&setInterval(n_,i),"ignoreMobileResize"in n&&(Md=s.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(Dh(dn)||Dh(pn,n.autoRefreshEvents||"none"),f_=(n.autoRefreshEvents+"").indexOf("resize")===-1)},s.scrollerProxy=function(n,i){var r=Gn(n),o=Qt.indexOf(r),a=Lr(r);~o&&Qt.splice(o,a?6:2),i&&(a?Oi.unshift(ee,i,ve,i,pi,i):Oi.unshift(r,i))},s.clearMatchMedia=function(n){te.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},s.isInViewport=function(n,i,r){var o=(di(n)?Gn(n):n).getBoundingClientRect(),a=o[r?Rr:Pr]*i||0;return r?o.right-a>0&&o.left+a<ee.innerWidth:o.bottom-a>0&&o.top+a<ee.innerHeight},s.positionInViewport=function(n,i,r){di(n)&&(n=Gn(n));var o=n.getBoundingClientRect(),a=o[r?Rr:Pr],l=i==null?a/2:i in Zh?Zh[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return r?(o.left+l)/ee.innerWidth:(o.top+l)/ee.innerHeight},s.killAll=function(n){if(te.slice(0).forEach(function(r){return r.vars.id!=="ScrollSmoother"&&r.kill()}),n!==!0){var i=Dr.killAll||[];Dr={},i.forEach(function(r){return r()})}},s})();Zt.version="3.15.1";Zt.saveStyles=function(s){return s?al(s).forEach(function(t){if(t&&t.style){var e=fi.indexOf(t);e>=0&&fi.splice(e,5),fi.push(t,t.style.cssText,t.getBBox&&t.getAttribute("transform"),Pt.core.getCache(t),bd())}}):fi};Zt.revert=function(s,t){return Ud(!s,t)};Zt.create=function(s,t){return new Zt(s,t)};Zt.refresh=function(s){return s?tl(!0):(Lo||Zt.register())&&Cr(!0)};Zt.update=function(s){return++Qt.cache&&Ts(s===!0?2:0)};Zt.clearScrollMemory=w_;Zt.maxScroll=function(s,t){return ji(s,t?In:je)};Zt.getScrollFunc=function(s,t){return Ss(Gn(s),t?In:je)};Zt.getById=function(s){return wd[s]};Zt.getAll=function(){return te.filter(function(s){return s.vars.id!=="ScrollSmoother"})};Zt.isScrolling=function(){return!!Ti};Zt.snapDirectional=Nd;Zt.addEventListener=function(s,t){var e=Dr[s]||(Dr[s]=[]);~e.indexOf(t)||e.push(t)};Zt.removeEventListener=function(s,t){var e=Dr[s],n=e&&e.indexOf(t);n>=0&&e.splice(n,1)};Zt.batch=function(s,t){var e=[],n={},i=t.interval||.016,r=t.batchMax||1e9,o=function(c,h){var d=[],u=[],f=Pt.delayedCall(i,function(){h(d,u),d=[],u=[]}).pause();return function(m){d.length||f.restart(!0),d.push(m.trigger),u.push(m),r<=d.length&&f.progress(1)}},a;for(a in t)n[a]=a.substr(0,2)==="on"&&Nn(t[a])&&a!=="onRefreshInit"?o(a,t[a]):t[a];return Nn(r)&&(r=r(),pn(Zt,"refresh",function(){return r=t.batchMax()})),al(s).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,e.push(Zt.create(c))}),e};var l_=function(t,e,n,i){return e>i?t(i):e<0&&t(0),n>i?(i-e)/(n-e):n<0?e/(e-n):1},yd=function s(t,e){e===!0?t.style.removeProperty("touch-action"):t.style.touchAction=e===!0?"auto":e?"pan-"+e+(qe.isTouch?" pinch-zoom":""):"none",t===pi&&s(ve,e)},kh={auto:1,scroll:1},hT=function(t){var e=t.event,n=t.target,i=t.axis,r=(e.changedTouches?e.changedTouches[0]:e).target,o=r._gsap||Pt.core.getCache(r),a=Dn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;r&&r!==ve&&(r.scrollHeight<=r.clientHeight&&r.scrollWidth<=r.clientWidth||!(kh[(l=bi(r)).overflowY]||kh[l.overflowX]));)r=r.parentNode;o._isScroll=r&&r!==n&&!Lr(r)&&(kh[(l=bi(r)).overflowY]||kh[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(e.stopPropagation(),e._gsapAllow=!0)},C_=function(t,e,n,i){return qe.create({target:t,capture:!0,debounce:!1,lockAxis:!0,type:e,onWheel:i=i&&hT,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&pn(ye,qe.eventTypes[0],h_,!1,!0)},onDisable:function(){return dn(ye,qe.eventTypes[0],h_,!0)}})},uT=/(input|label|select|textarea)/i,c_,h_=function(t){var e=uT.test(t.target.tagName);(e||c_)&&(t._gsapAllow=!0,c_=e)},fT=function(t){Ar(t)||(t={}),t.preventDefault=t.isNormalizer=t.allowClicks=!0,t.type||(t.type="wheel,touch"),t.debounce=!!t.debounce,t.id=t.id||"normalizer";var e=t,n=e.normalizeScrollX,i=e.momentum,r=e.allowNestedScroll,o=e.onRelease,a,l,c=Gn(t.target)||pi,h=Pt.core.globals().ScrollSmoother,d=h&&h.get(),u=tr&&(t.content&&Gn(t.content)||d&&t.content!==!1&&!d.smooth()&&d.content()),f=Ss(c,je),m=Ss(c,In),_=1,p=(qe.isTouch&&ee.visualViewport?ee.visualViewport.scale*ee.visualViewport.width:ee.outerWidth)/ee.innerWidth,g=0,v=Nn(i)?function(){return i(a)}:function(){return i||2.8},T,y,w=C_(c,t.type,!0,r),E=function(){return y=!1},x=Qi,b=Qi,P=function(){l=ji(c,je),b=el(tr?1:0,l),n&&(x=el(0,ji(c,In))),T=Ir},C=function(){u._gsap.y=Qa(parseFloat(u._gsap.y)+f.offset)+"px",u.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(u._gsap.y)+", 0, 1)",f.offset=f.cacheID=0},N=function(){if(y){requestAnimationFrame(E);var tt=Qa(a.deltaY/2),X=b(f.v-tt);if(u&&X!==f.v+f.offset){f.offset=X-f.v;var R=Qa((parseFloat(u&&u._gsap.y)||0)-f.offset);u.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+R+", 0, 1)",u._gsap.y=R+"px",f.cacheID=Qt.cache,Ts()}return!0}f.offset&&C(),y=!0},D,W,I,B,H=function(){P(),D.isActive()&&D.vars.scrollY>l&&(f()>l?D.progress(1)&&f(l):D.resetTo("scrollY",l))};return u&&Pt.set(u,{y:"+=0"}),t.ignoreCheck=function(F){return tr&&F.type==="touchmove"&&N(F)||_>1.05&&F.type!=="touchstart"||a.isGesturing||F.touches&&F.touches.length>1},t.onPress=function(){y=!1;var F=_;_=Qa((ee.visualViewport&&ee.visualViewport.scale||1)/p),D.pause(),F!==_&&yd(c,_>1.01?!0:n?!1:"x"),W=m(),I=f(),P(),T=Ir},t.onRelease=t.onGestureStart=function(F,tt){if(f.offset&&C(),!tt)B.restart(!0);else{Qt.cache++;var X=v(),R,K;n&&(R=m(),K=R+X*.05*-F.velocityX/.227,X*=l_(m,R,K,ji(c,In)),D.vars.scrollX=x(K)),R=f(),K=R+X*.05*-F.velocityY/.227,X*=l_(f,R,K,ji(c,je)),D.vars.scrollY=b(K),D.invalidate().duration(X).play(.01),(tr&&D.vars.scrollY>=l||R>=l-1)&&Pt.to({},{onUpdate:H,duration:X})}o&&o(F)},t.onWheel=function(){D._ts&&D.pause(),Dn()-g>1e3&&(T=0,g=Dn())},t.onChange=function(F,tt,X,R,K){if(Ir!==T&&P(),tt&&n&&m(x(R[2]===tt?W+(F.startX-F.x):m()+tt-R[1])),X){f.offset&&C();var yt=K[2]===X,kt=yt?I+F.startY-F.y:f()+X-K[1],Y=b(kt);yt&&kt!==Y&&(I+=Y-kt),f(Y)}(X||tt)&&Ts()},t.onEnable=function(){yd(c,n?!1:"x"),Zt.addEventListener("refresh",H),pn(ee,"resize",H),f.smooth&&(f.target.style.scrollBehavior="auto",f.smooth=m.smooth=!1),w.enable()},t.onDisable=function(){yd(c,!0),dn(ee,"resize",H),Zt.removeEventListener("refresh",H),w.kill()},t.lockAxis=t.lockAxis!==!1,a=new qe(t),a.iOS=tr,tr&&!f()&&f(1),tr&&Pt.ticker.add(Qi),B=a._dc,D=Pt.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:A_(f,f(),function(){return D.pause()})},onUpdate:Ts,onComplete:B.vars.onComplete}),a};Zt.sort=function(s){if(Nn(s))return te.sort(s);var t=ee.pageYOffset||0;return Zt.getAll().forEach(function(e){return e._sortY=e.trigger?t+e.trigger.getBoundingClientRect().top:e.start+ee.innerHeight}),te.sort(s||function(e,n){return(e.vars.refreshPriority||0)*-1e6+(e.vars.containerAnimation?1e6:e._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};Zt.observe=function(s){return new qe(s)};Zt.normalizeScroll=function(s){if(typeof s=="undefined")return Hn;if(s===!0&&Hn)return Hn.enable();if(s===!1){Hn&&Hn.kill(),Hn=s;return}var t=s instanceof qe?s:fT(s);return Hn&&Hn.target===t.target&&Hn.kill(),Lr(t.target)&&(Hn=t),t};Zt.core={_getVelocityProp:Ph,_inputObserver:C_,_scrollers:Qt,_proxies:Oi,bridge:{ss:function(){Ti||Nr("scrollStart"),Ti=Dn()},ref:function(){return Ln}}};g_()&&Pt.registerPlugin(Zt);var R_="1.3.27";function L_(s,t,e){return Math.max(s,Math.min(t,e))}function dT(s,t,e){return(1-e)*s+e*t}function pT(s,t,e,n){return dT(s,t,1-Math.exp(-e*n))}function mT(s,t){return(s%t+t)%t}var gT=class{constructor(){zt(this,"isRunning",!1);zt(this,"value",0);zt(this,"from",0);zt(this,"to",0);zt(this,"currentTime",0);zt(this,"lerp");zt(this,"duration");zt(this,"easing");zt(this,"onUpdate")}advance(s){var e;if(!this.isRunning)return;let t=!1;if(this.duration&&this.easing){this.currentTime+=s;let n=L_(0,this.currentTime/this.duration,1);t=n>=1;let i=t?1:this.easing(n);this.value=this.from+(this.to-this.from)*i}else this.lerp?(this.value=pT(this.value,this.to,this.lerp*60,s),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,t=!0)):(this.value=this.to,t=!0);t&&this.stop(),(e=this.onUpdate)==null||e.call(this,this.value,t)}stop(){this.isRunning=!1}fromTo(s,t,{lerp:e,duration:n,easing:i,onStart:r,onUpdate:o}){this.from=this.value=s,this.to=t,this.lerp=e,this.duration=n,this.easing=i,this.currentTime=0,this.isRunning=!0,r==null||r(),this.onUpdate=o}};function _T(s,t){let e;return function(...n){clearTimeout(e),e=setTimeout(()=>{e=void 0,s.apply(this,n)},t)}}var xT=class{constructor(s,t,{autoResize:e=!0,debounce:n=250}={}){zt(this,"width",0);zt(this,"height",0);zt(this,"scrollHeight",0);zt(this,"scrollWidth",0);zt(this,"debouncedResize");zt(this,"wrapperResizeObserver");zt(this,"contentResizeObserver");zt(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});zt(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});zt(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=s,this.content=t,e&&(this.debouncedResize=_T(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var s,t;(s=this.wrapperResizeObserver)==null||s.disconnect(),(t=this.contentResizeObserver)==null||t.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},D_=class{constructor(){zt(this,"events",{})}emit(s,...t){var n;let e=this.events[s]||[];for(let i=0,r=e.length;i<r;i++)(n=e[i])==null||n.call(e,...t)}on(s,t){return this.events[s]?this.events[s].push(t):this.events[s]=[t],()=>{var e;this.events[s]=(e=this.events[s])==null?void 0:e.filter(n=>t!==n)}}off(s,t){var e;this.events[s]=(e=this.events[s])==null?void 0:e.filter(n=>t!==n)}destroy(){this.events={}}},vT=100/6,nr={passive:!1};function P_(s,t){return s===1?vT:s===2?t:1}var yT=class{constructor(s,t={wheelMultiplier:1,touchMultiplier:1}){zt(this,"touchStart",{x:0,y:0});zt(this,"lastDelta",{x:0,y:0});zt(this,"window",{width:0,height:0});zt(this,"emitter",new D_);zt(this,"onTouchStart",s=>{let{clientX:t,clientY:e}=s.targetTouches?s.targetTouches[0]:s;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:s})});zt(this,"onTouchMove",s=>{let{clientX:t,clientY:e}=s.targetTouches?s.targetTouches[0]:s,n=-(t-this.touchStart.x)*this.options.touchMultiplier,i=-(e-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:n,y:i},this.emitter.emit("scroll",{deltaX:n,deltaY:i,event:s})});zt(this,"onTouchEnd",s=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:s})});zt(this,"onWheel",s=>{let{deltaX:t,deltaY:e,deltaMode:n}=s,i=P_(n,this.window.width),r=P_(n,this.window.height);t*=i,e*=r,t*=this.options.wheelMultiplier,e*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:t,deltaY:e,event:s})});zt(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=s,this.options=t,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,nr),this.element.addEventListener("touchstart",this.onTouchStart,nr),this.element.addEventListener("touchmove",this.onTouchMove,nr),this.element.addEventListener("touchend",this.onTouchEnd,nr)}on(s,t){return this.emitter.on(s,t)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,nr),this.element.removeEventListener("touchstart",this.onTouchStart,nr),this.element.removeEventListener("touchmove",this.onTouchMove,nr),this.element.removeEventListener("touchend",this.onTouchEnd,nr)}},I_=s=>Math.min(1,1.001-2**(-10*s)),N_=class{constructor({wrapper:s=window,content:t=document.documentElement,eventsTarget:e=s,smoothWheel:n=!0,syncTouch:i=!1,syncTouchLerp:r=.075,touchInertiaExponent:o=1.7,duration:a,easing:l,lerp:c=.1,infinite:h=!1,orientation:d="vertical",gestureOrientation:u=d==="horizontal"?"both":"vertical",touchMultiplier:f=1,wheelMultiplier:m=1,autoResize:_=!0,prevent:p,virtualScroll:g,overscroll:v=!0,autoRaf:T=!1,anchors:y=!1,autoToggle:w=!1,allowNestedScroll:E=!1,__experimental__naiveDimensions:x=!1,naiveDimensions:b=x,stopInertiaOnNavigate:P=!1,respectReducedMotion:C=!0}={}){zt(this,"_isScrolling",!1);zt(this,"_isStopped",!1);zt(this,"_isLocked",!1);zt(this,"_preventNextNativeScrollEvent",!1);zt(this,"_resetVelocityTimeout",null);zt(this,"_rafId",null);zt(this,"_isDraggingSelection",!1);zt(this,"reducedMotionMediaQuery",window.matchMedia("(prefers-reduced-motion: reduce)"));zt(this,"isTouching");zt(this,"isIos");zt(this,"time",0);zt(this,"userData",{});zt(this,"lastVelocity",0);zt(this,"velocity",0);zt(this,"direction",0);zt(this,"options");zt(this,"targetScroll");zt(this,"animatedScroll");zt(this,"animate",new gT);zt(this,"emitter",new D_);zt(this,"dimensions");zt(this,"virtualScroll");zt(this,"onScrollEnd",s=>{s instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&s.stopPropagation()});zt(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});zt(this,"onTransitionEnd",s=>{var t;(t=s.propertyName)!=null&&t.includes("overflow")&&s.target===this.rootElement&&this.checkOverflow()});zt(this,"onClick",s=>{let t=s.composedPath().filter(n=>n instanceof HTMLAnchorElement&&n.href).map(n=>new URL(n.href)),e=new URL(window.location.href);if(this.options.anchors){let n=t.find(i=>e.host===i.host&&e.pathname===i.pathname&&i.hash);if(n){let i=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,r=decodeURIComponent(n.hash);this.scrollTo(r,i);return}}if(this.options.stopInertiaOnNavigate&&t.some(n=>e.host===n.host&&e.pathname!==n.pathname)){this.reset();return}});zt(this,"onPointerDown",s=>{s.button===1&&this.reset()});zt(this,"onVirtualScroll",s=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(s)===!1)return;let{deltaX:t,deltaY:e,event:n}=s;if(this.emitter.emit("virtual-scroll",{deltaX:t,deltaY:e,event:n}),n.ctrlKey||n.lenisStopPropagation)return;let i=n.type.includes("touch"),r=n.type.includes("wheel");if(i&&this.isIos&&(n.type==="touchstart"&&(this._isDraggingSelection=this.isTouchOnSelectionHandle(n)),this._isDraggingSelection)){n.type==="touchend"&&(this._isDraggingSelection=!1);return}this.isTouching=n.type==="touchstart"||n.type==="touchmove";let o=t===0&&e===0;if(this.options.syncTouch&&i&&n.type==="touchstart"&&o&&!this.isStopped&&!this.isLocked){this.reset();return}let a=this.options.gestureOrientation==="vertical"&&e===0||this.options.gestureOrientation==="horizontal"&&t===0;if(o||a)return;let l=n.composedPath();l=l.slice(0,l.indexOf(this.rootElement));let c=this.options.prevent,h=Math.abs(t)>=Math.abs(e)?"horizontal":"vertical";if(l.find(m=>{var _,p,g,v,T;return m instanceof HTMLElement&&(typeof c=="function"&&(c==null?void 0:c(m))||((_=m.hasAttribute)==null?void 0:_.call(m,"data-lenis-prevent"))||h==="vertical"&&((p=m.hasAttribute)==null?void 0:p.call(m,"data-lenis-prevent-vertical"))||h==="horizontal"&&((g=m.hasAttribute)==null?void 0:g.call(m,"data-lenis-prevent-horizontal"))||i&&((v=m.hasAttribute)==null?void 0:v.call(m,"data-lenis-prevent-touch"))||r&&((T=m.hasAttribute)==null?void 0:T.call(m,"data-lenis-prevent-wheel"))||this.options.allowNestedScroll&&this.hasNestedScroll(m,{deltaX:t,deltaY:e}))}))return;if(this.isStopped||this.isLocked){n.cancelable&&n.preventDefault();return}if(!(this.options.syncTouch&&i||this.options.smoothWheel&&r)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let d=e;this.options.gestureOrientation==="both"?d=Math.abs(e)>Math.abs(t)?e:t:this.options.gestureOrientation==="horizontal"&&(d=t),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&e>0||this.animatedScroll===this.limit&&e<0))&&(n.lenisStopPropagation=!0),n.cancelable&&n.preventDefault();let u=i&&this.options.syncTouch,f=i&&n.type==="touchend";f&&(d=Math.sign(d)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+d,{programmatic:!1,...u?{lerp:f?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});zt(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){let s=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-s,this.direction=Math.sign(this.animatedScroll-s),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});zt(this,"raf",s=>{let t=s-(this.time||s);this.time=s,this.animate.advance(t*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))});window.lenisVersion=R_,window.lenis||(window.lenis={}),window.lenis.version=R_,d==="horizontal"&&(window.lenis.horizontal=!0),i===!0&&(window.lenis.touch=!0),this.isIos=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),(!s||s===document.documentElement)&&(s=window),typeof a=="number"&&typeof l!="function"?l=I_:typeof l=="function"&&typeof a!="number"&&(a=1),this.options={wrapper:s,content:t,eventsTarget:e,smoothWheel:n,syncTouch:i,syncTouchLerp:r,touchInertiaExponent:o,duration:a,easing:l,lerp:c,infinite:h,gestureOrientation:u,orientation:d,touchMultiplier:f,wheelMultiplier:m,autoResize:_,prevent:p,virtualScroll:g,overscroll:v,autoRaf:T,anchors:y,autoToggle:w,allowNestedScroll:E,naiveDimensions:b,stopInertiaOnNavigate:P,respectReducedMotion:C},this.dimensions=new xT(s,t,{autoResize:_}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new yT(e,{touchMultiplier:f,wheelMultiplier:m}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(s,t){return this.emitter.on(s,t)}off(s,t){return this.emitter.off(s,t)}get overflow(){let s=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[s]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}setScroll(s){this.isHorizontal?this.options.wrapper.scrollTo({left:s,behavior:"instant"}):this.options.wrapper.scrollTo({top:s,behavior:"instant"})}isTouchOnSelectionHandle(s){var c;let t=window.getSelection();if(!t||t.isCollapsed||t.rangeCount===0)return!1;let e=(c=s.targetTouches[0])!=null?c:s.changedTouches[0];if(!e)return!1;let n=t.getRangeAt(0).getClientRects();if(n.length===0)return!1;let i=n[0],r=n[n.length-1],o=40,a=Math.hypot(e.clientX-i.left,e.clientY-i.top)<=o,l=Math.hypot(e.clientX-r.right,e.clientY-r.bottom)<=o;return a||l}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(s,{offset:t=0,immediate:e=!1,lock:n=!1,programmatic:i=!0,lerp:r=i?this.options.lerp:void 0,duration:o=i?this.options.duration:void 0,easing:a=i?this.options.easing:void 0,onStart:l,onComplete:c,force:h=!1,userData:d}={}){if(this.prefersReducedMotion&&(i?e=!0:(r=1,o=void 0,a=void 0)),(this.isStopped||this.isLocked)&&!h)return;let u=s,f=t;if(typeof u=="string"&&["top","left","start","#"].includes(u))u=0;else if(typeof u=="string"&&["bottom","right","end"].includes(u))u=this.limit;else{let m=null;if(typeof u=="string"?(m=u.startsWith("#")?document.getElementById(u.slice(1)):document.querySelector(u),m||(u==="#top"?u=0:console.warn("Lenis: Target not found",u))):u instanceof Element&&(m=u),m){if(this.options.wrapper!==window){let y=this.rootElement.getBoundingClientRect();f-=this.isHorizontal?y.left:y.top}let _=m.getBoundingClientRect(),p=getComputedStyle(m),g=this.isHorizontal?Number.parseFloat(p.scrollMarginLeft):Number.parseFloat(p.scrollMarginTop),v=getComputedStyle(this.rootElement),T=this.isHorizontal?Number.parseFloat(v.scrollPaddingLeft):Number.parseFloat(v.scrollPaddingTop);u=(this.isHorizontal?_.left:_.top)+this.animatedScroll-(Number.isNaN(g)?0:g)-(Number.isNaN(T)?0:T)}}if(typeof u=="number"){if(u+=f,this.options.infinite){if(i){this.targetScroll=this.animatedScroll=this.scroll;let m=u-this.animatedScroll;m>this.limit/2?u-=this.limit:m<-this.limit/2&&(u+=this.limit)}}else u=L_(0,u,this.limit);if(u===this.targetScroll){l==null||l(this),c==null||c(this);return}if(this.userData=d!=null?d:{},e){this.animatedScroll=this.targetScroll=u,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c==null||c(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}i||(this.targetScroll=u),typeof o=="number"&&typeof a!="function"?a=I_:typeof a=="function"&&typeof o!="number"&&(o=1),this.animate.fromTo(this.animatedScroll,u,{duration:o,easing:a,lerp:r,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",l==null||l(this)},onUpdate:(m,_)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=m-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=m,this.setScroll(this.scroll),i&&(this.targetScroll=m),_||this.emit(),_&&(this.reset(),this.emit(),c==null||c(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(s,{deltaX:t,deltaY:e}){var E;let n=Date.now();s._lenis||(s._lenis={});let i=s._lenis,r,o,a,l,c,h,d,u,f,m;if(n-((E=i.time)!=null?E:0)>2e3){i.time=Date.now();let x=window.getComputedStyle(s);if(i.computedStyle=x,r=["auto","overlay","scroll"].includes(x.overflowX),o=["auto","overlay","scroll"].includes(x.overflowY),c=["auto"].includes(x.overscrollBehaviorX),h=["auto"].includes(x.overscrollBehaviorY),i.hasOverflowX=r,i.hasOverflowY=o,!(r||o))return!1;d=s.scrollWidth,u=s.scrollHeight,f=s.clientWidth,m=s.clientHeight,a=d>f,l=u>m,i.isScrollableX=a,i.isScrollableY=l,i.scrollWidth=d,i.scrollHeight=u,i.clientWidth=f,i.clientHeight=m,i.hasOverscrollBehaviorX=c,i.hasOverscrollBehaviorY=h}else a=i.isScrollableX,l=i.isScrollableY,r=i.hasOverflowX,o=i.hasOverflowY,d=i.scrollWidth,u=i.scrollHeight,f=i.clientWidth,m=i.clientHeight,c=i.hasOverscrollBehaviorX,h=i.hasOverscrollBehaviorY;if(!(r&&a||o&&l))return!1;let _=Math.abs(t)>=Math.abs(e)?"horizontal":"vertical",p,g,v,T,y,w;if(_==="horizontal")p=Math.round(s.scrollLeft),g=d-f,v=t,T=r,y=a,w=c;else if(_==="vertical")p=Math.round(s.scrollTop),g=u-m,v=e,T=o,y=l,w=h;else return!1;return!w&&(p>=g||p<=0)?!0:(v>0?p<g:p>0)&&T&&y}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){var t,e;let s=this.options.wrapper;return this.isHorizontal?(t=s.scrollX)!=null?t:s.scrollLeft:(e=s.scrollY)!=null?e:s.scrollTop}get scroll(){return this.options.infinite?mT(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(s){this._isScrolling!==s&&(this._isScrolling=s,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(s){this._isStopped!==s&&(this._isStopped=s,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(s){this._isLocked!==s&&(this._isLocked=s,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get prefersReducedMotion(){return this.options.respectReducedMotion&&this.reducedMotionMediaQuery.matches}get className(){let s="lenis";return this.options.autoToggle&&(s+=" lenis-autoToggle"),this.isStopped&&(s+=" lenis-stopped"),this.isLocked&&(s+=" lenis-locked"),this.isScrolling&&(s+=" lenis-scrolling"),this.isScrolling==="smooth"&&(s+=" lenis-smooth"),s}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(s=>{this.rootElement.classList.add(s)})}cleanUpClassName(){for(let s of Array.from(this.rootElement.classList))(s==="lenis"||s.startsWith("lenis-"))&&this.rootElement.classList.remove(s)}};de.registerPlugin(Zt);var ST="nolan@nestlewoodrealty.com",MT="https://formsubmit.co/ajax/"+ST,Re=(s,t=document)=>t.querySelector(s),Es=(s,t=document)=>[...t.querySelectorAll(s)],Or=matchMedia("(prefers-reduced-motion: reduce)").matches,Fi=document.documentElement,bT=84,be=null;Or||(be=new N_({lerp:.1,smoothWheel:!0}),be.on("scroll",Zt.update),de.ticker.add(s=>be.raf(s*1e3)),de.ticker.lagSmoothing(0));var TT=s=>{be?be.scrollTo(s,{offset:s===0?0:-bT+1,duration:1.4}):s===0?scrollTo({top:0}):s.scrollIntoView({behavior:"auto"})},ws=null;try{ws=Nm(Re("#bg"),{reduced:Or})}catch{ws=null}ws||Fi.classList.add("no-webgl");function Od(){Fi.classList.contains("opened")||(Fi.classList.add("opened"),ws&&ws.assemble(),setTimeout(()=>{Fi.classList.add("intro-done"),be&&be.start()},1400))}var wT=sessionStorage.getItem("hts-intro");Or||wT?(Fi.classList.add("skip-intro"),Od()):(sessionStorage.setItem("hts-intro","1"),Fi.classList.add("intro-run"),be&&be.stop(),setTimeout(Od,2500),Re("#intro").addEventListener("click",Od,{once:!0}));var ET=Re("#top"),U_=()=>ET.classList.toggle("scrolled",scrollY>40);addEventListener("scroll",U_,{passive:!0});U_();Es('a[href^="#"]').forEach(s=>s.addEventListener("click",t=>{let e=s.getAttribute("href"),n=e==="#"||e==="#top"?0:Re(e);n!==null&&(t.preventDefault(),O_(),TT(n),n!==0&&history.replaceState(null,"",e))}));var Fd=Re("#menuBtn"),Kh=Re("#mobileMenu");function O_(){Kh.classList.contains("open")&&(Kh.classList.remove("open"),Fd.setAttribute("aria-expanded","false"),Fi.classList.remove("menu-open"),be&&be.start())}Fd.addEventListener("click",()=>{let s=Kh.classList.toggle("open");Fd.setAttribute("aria-expanded",String(s)),Fi.classList.toggle("menu-open",s),s?(be&&be.stop(),Re("a",Kh).focus()):be&&be.start()});addEventListener("keydown",s=>{s.key==="Escape"&&O_()});var AT=0;function F_(s){[...s.childNodes].forEach(t=>{if(t.nodeType===3){let e=document.createDocumentFragment();t.textContent.split(/(\s+)/).forEach(n=>{if(!n)return;if(!n.trim()){e.appendChild(document.createTextNode(n));return}let i=document.createElement("span");i.className="w";let r=document.createElement("span");r.style.setProperty("--i",AT++),r.textContent=n,i.appendChild(r),e.appendChild(i)}),t.replaceWith(e)}else t.nodeType===1&&F_(t)})}Es("[data-split]").forEach(F_);if(Or)Es(".reveal").forEach(s=>s.classList.add("in"));else{let r=function(){let g=Zt.getById("work");return g?g.start+2:Re("#work").getBoundingClientRect().top+scrollY},o=function(){if(!Ur)return;i&&i.kill();let g=r();be?be.scrollTo(g,{immediate:!0,force:!0}):scrollTo(0,g),de.to(t,{opacity:0,duration:.6,ease:"power2.out",onComplete:()=>{t.classList.remove("on"),de.set(t,{opacity:1}),Fi.classList.remove("movie-on"),Ur=!1,be&&be.start()}})},a=function(){Ur=!0,$h=!0,be&&be.stop(),Fi.classList.add("movie-on"),t.classList.add("on"),e.textContent="";let g=Es(".mv-scene",t),v=Re(".mv-cursor",t),T=Re(".mv-cursor i",t);de.set(g,{autoAlpha:0,scale:1,y:0,filter:"blur(0px)"}),de.set(".mv-card",{autoAlpha:0,y:30,scale:.94}),de.set(".mv-hit",{autoAlpha:0,y:24}),de.set([".mv-mini",".mv-tabs",".mv-imgs img"],{autoAlpha:0}),de.set(v,{autoAlpha:0,x:innerWidth*.7,y:innerHeight*.75}),de.set(".mv-flash",{opacity:0});let y={n:0},w=Re(".mv-go",t),E=Re(".mv-hit.top",t),x=B=>{let H=B.getBoundingClientRect();return{x:H.left+H.width*.5,y:H.top+H.height*.55}},b=()=>de.fromTo(T,{scale:.3,opacity:1},{scale:1.6,opacity:0,duration:.45,ease:"power2.out"}),P=Re(".mv-cam",t),C=Re(".mv-caret",t),N=Re(".mv-search .mv-box",t),D=innerWidth<760?2.1:2.6,W=B=>{let H=0,F=0;for(;B&&B!==P;)H+=B.offsetLeft,F+=B.offsetTop,B=B.offsetParent;return{x:H,y:F}},I=()=>{let B=W(C);de.set(P,{transformOrigin:`${B.x}px ${B.y+12}px`})};de.set(P,{scale:D}),I(),i=de.timeline({onComplete:o}).fromTo(g[0],{autoAlpha:0},{autoAlpha:1,duration:.4}).to(y,{n:n.length,duration:2.6,ease:"none",onUpdate:()=>{e.textContent=n.slice(0,Math.round(y.n)),I()}},"+=0.2").to(P,{scale:1,duration:.9,ease:"power3.inOut"},"+=0.25").to(v,{autoAlpha:1,duration:.2},"-=0.3").to(v,{x:()=>x(N).x+N.offsetWidth*.3,y:()=>x(N).y,duration:.5,ease:"power2.inOut"}).add(b).to(N,{scale:.97,duration:.1,yoyo:!0,repeat:1},"<").to(g[0],{autoAlpha:0,y:-40,filter:"blur(8px)",duration:.4,ease:"power2.in"},"+=0.1").set(g[1],{autoAlpha:1}).fromTo([".mv-mini",".mv-tabs"],{autoAlpha:0,y:-16},{autoAlpha:1,y:0,duration:.35,stagger:.08}).fromTo(".mv-imgs img",{autoAlpha:0,scale:.85},{autoAlpha:1,scale:1,duration:.45,stagger:.1,ease:"back.out(1.6)"},"-=0.1").to(".mv-hit",{autoAlpha:1,y:0,duration:.45,stagger:.12,ease:"power3.out"},"-=0.15").to(v,{autoAlpha:1,x:()=>x(E).x,y:()=>x(E).y,duration:.8,ease:"power2.inOut"},"+=0.7").to(E,{scale:1.02,duration:.2,yoyo:!0,repeat:1}).add(b,"<").to(v,{autoAlpha:0,duration:.2}).to(g[1],{scale:1.6,autoAlpha:0,filter:"blur(6px)",duration:.6,ease:"power2.in",transformOrigin:()=>{let B=x(E);return`${B.x}px ${B.y}px`}},"<").fromTo(g[2],{autoAlpha:0,scale:.92},{autoAlpha:1,scale:1,duration:.6,ease:"power3.out"}).to(".mv-card",{autoAlpha:1,y:0,scale:1,duration:.5,stagger:.14,ease:"back.out(1.6)"},"-=0.2").to(g[2],{scale:1.04,duration:1.6,ease:"none"},"+=0.1").to(".mv-card",{autoAlpha:0,y:-60,scale:.9,duration:.4,stagger:.04,ease:"power2.in"}).to(".mv-flash",{opacity:1,duration:.25,ease:"power1.in"},"-=0.15").add(()=>{let B=r();be?be.scrollTo(B,{immediate:!0,force:!0}):scrollTo(0,B)}).to(".mv-flash",{opacity:0,duration:.5,ease:"power1.out"},"+=0.1").set(g,{autoAlpha:0},"<")};Zt.batch(".reveal",{start:"top 88%",once:!0,onEnter:g=>{g.forEach(v=>v.classList.add("in")),de.to(g,{opacity:1,y:0,duration:1,ease:"power3.out",stagger:.1,overwrite:!0})}}),de.to(".hero-inner",{yPercent:-18,opacity:0,ease:"none",scrollTrigger:{trigger:".hero",start:"top top",end:"bottom top",scrub:!0}}),de.to(".giant span",{yPercent:-25,ease:"none",scrollTrigger:{trigger:".hero",start:"top top",end:"bottom top",scrub:!0}}),Ur=!1,$h=!1;let s=.74,t=Re("#movie"),e=Re("#mvTyped"),n=e.dataset.text,i=null;Re(".mv-skip").addEventListener("click",o),addEventListener("keydown",g=>{Ur&&g.key==="Escape"&&o()});let l=[.3,.62],c=g=>g<.26?g/.26*.31:g<.4?.31:g<.58?.31+(g-.4)/.18*.25:g<.72?.56:.56+(g-.72)/.28*.44,h=0,d=!1,u=l.map(()=>!1);de.timeline({defaults:{ease:"none"},scrollTrigger:{trigger:"#warp",pin:".warp-pin",start:"top top",end:()=>"+="+innerHeight*3.6,scrub:.5,invalidateOnRefresh:!0,onUpdate:g=>{let v=g.progress;ws&&ws.setGrid(c(v)),l.forEach((T,y)=>{if(v<T-.06&&(u[y]=!1),!d&&!u[y]&&h<T&&v>=T){u[y]=!0,d=!0;let w=g.start+(g.end-g.start)*(T+.02);be?(be.scrollTo(w,{immediate:!0,force:!0}),be.stop()):scrollTo(0,w),setTimeout(()=>{d=!1,be&&!Ur&&!Fi.classList.contains("menu-open")&&be.start()},750)}}),!Ur&&!$h&&h<s&&v>=s&&a(),v<.6&&($h=!1),h=v},onLeaveBack:()=>ws&&ws.setGrid(0)}}).to(".warp-line.l1",{opacity:1,filter:"blur(0px)",duration:.12},.12).to(".warp-hint.h1",{opacity:1,duration:.04},.3).to(".warp-hint.h1",{opacity:0,duration:.03},.39).to(".warp-line.l1",{opacity:0,filter:"blur(14px)",y:-30,duration:.05},.4).to(".warp-rays",{opacity:1,rotate:25,duration:.1},.44).to(".warp-line.l2",{opacity:1,filter:"blur(0px)",duration:.08},.52).to(".warp-hint.h2",{opacity:1,duration:.04},.62).to(".warp-hint.h2",{opacity:0,duration:.03},.71).to(".warp-rays",{opacity:0,rotate:45,duration:.1},.72).to(".warp-line.l2",{opacity:0,scale:1.25,filter:"blur(10px)",duration:.06},.72).set({},{},1),Zt.matchMedia({"(min-width: 900px)":()=>{let g=Re("#track"),v=()=>Math.max(0,g.scrollWidth-innerWidth+80),T=de.to(g,{x:()=>-v(),ease:"none",scrollTrigger:{id:"work",trigger:"#work",pin:".work-pin",start:"top top",end:()=>"+="+v(),scrub:.6,invalidateOnRefresh:!0,onUpdate:y=>de.set("#workBar",{scaleX:y.progress})}});return()=>T.kill()}});let m=Re("#diveTyped"),_=m.dataset.text,p={n:0};de.timeline({defaults:{ease:"none"},scrollTrigger:{trigger:"#dive",pin:".dive-pin",start:"top top",end:()=>"+="+innerHeight*2.6,scrub:.5,invalidateOnRefresh:!0}}).fromTo(".dive-screen",{scale:.42,borderRadius:28,opacity:.2},{scale:1,borderRadius:0,opacity:1,ease:"power2.inOut",duration:.34},0).fromTo(".dive-label",{opacity:1},{opacity:0,duration:.1},.14).to(".dive-flash",{opacity:.55,duration:.05},.36).to(".dive-flash",{opacity:0,duration:.08},.41).to(".dive-strip:nth-child(odd)",{yPercent:-101,ease:"power2.in",duration:.2,stagger:.025},.42).to(".dive-strip:nth-child(even)",{yPercent:101,ease:"power2.in",duration:.2,stagger:.025},.435).fromTo(".dive-next",{scale:.9,opacity:0},{scale:1,opacity:1,duration:.18},.46).to(p,{n:_.length,duration:.2,onUpdate:()=>{m.textContent=_.slice(0,Math.round(p.n))}},.62).fromTo(".dive-results i",{opacity:0,y:14},{opacity:1,y:0,duration:.05,stagger:.03},.82).set({},{},1),Es(".parallax").forEach(g=>de.fromTo(g,{yPercent:6},{yPercent:-6,ease:"none",scrollTrigger:{trigger:g,start:"top bottom",end:"bottom top",scrub:!0}}))}var Ur,$h;addEventListener("load",()=>Zt.refresh());Es("[data-count]").forEach(s=>{let t=+s.dataset.count,e=s.dataset.pre||"",n=s.dataset.suf||"";if(Or){s.textContent=e+t+n;return}let i={v:0};Zt.create({trigger:s,start:"top 85%",once:!0,onEnter:()=>de.to(i,{v:t,duration:1.4,ease:"power3.out",onUpdate:()=>{s.textContent=e+Math.round(i.v)+n}})})});if(matchMedia("(hover: hover) and (pointer: fine)").matches&&!Or){Es(".tilt").forEach(n=>{n.addEventListener("pointermove",i=>{let r=n.getBoundingClientRect(),o=(i.clientX-r.left)/r.width-.5,a=(i.clientY-r.top)/r.height-.5;de.to(n,{rotateY:o*7,rotateX:-a*7,y:-4,transformPerspective:900,duration:.4,ease:"power2.out"}),n.style.setProperty("--mx",(o+.5)*100+"%"),n.style.setProperty("--my",(a+.5)*100+"%")}),n.addEventListener("pointerleave",()=>de.to(n,{rotateY:0,rotateX:0,y:0,duration:.6,ease:"power3.out"}))}),Es(".btn.gold").forEach(n=>{n.addEventListener("pointermove",i=>{let r=n.getBoundingClientRect();de.to(n,{x:(i.clientX-r.left-r.width/2)*.18,y:(i.clientY-r.top-r.height/2)*.25,duration:.4,ease:"power2.out"})}),n.addEventListener("pointerleave",()=>de.to(n,{x:0,y:0,duration:.6,ease:"elastic.out(1, 0.4)"}))});let s=Re("#cursor"),t=de.quickTo(s,"x",{duration:.25,ease:"power3"}),e=de.quickTo(s,"y",{duration:.25,ease:"power3"});addEventListener("pointermove",n=>{n.pointerType!=="mouse"||!n.clientX&&!n.clientY||(t(n.clientX),e(n.clientY),s.classList.add("on"))},{passive:!0}),Es("a, button, .tilt, input, select, textarea").forEach(n=>{n.addEventListener("pointerenter",()=>s.classList.add("big")),n.addEventListener("pointerleave",()=>s.classList.remove("big"))})}var ir=Re("#leadForm"),Fo=Re("#formNote"),zd={name:s=>s.trim().length>=2||"Please add your name.",phone:s=>s.replace(/\D/g,"").length>=10||"Please add a 10-digit phone number.",email:s=>!s.trim()||/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s.trim())||"That email doesn\u2019t look right."};function Bd(s){let t=zd[s.name];if(!t)return!0;let e=t(s.value),n=Re(`#err-${s.name}`),i=e===!0;return s.setAttribute("aria-invalid",String(!i)),n.textContent=i?"":e,i}Object.keys(zd).forEach(s=>{let t=ir.elements[s];t.addEventListener("blur",()=>{t.value&&Bd(t)}),t.addEventListener("input",()=>{t.getAttribute("aria-invalid")==="true"&&Bd(t)})});ir.addEventListener("submit",async s=>{if(s.preventDefault(),ir._honey.value)return;let t=Object.keys(zd).map(r=>ir.elements[r]).filter(r=>!Bd(r));if(t.length){t[0].focus(),Or||de.fromTo(t[0],{x:-8},{x:0,duration:.5,ease:"elastic.out(1, 0.3)"}),Fo.textContent="Please fix the highlighted field.",Fo.className="fine err";return}let e=ir.querySelector("button[type=submit]"),n=e.innerHTML;e.disabled=!0,e.classList.add("loading"),e.innerHTML='<span class="spin" aria-hidden="true"></span>Sending\u2026',Fo.textContent="",Fo.className="fine";let i=Object.fromEntries(new FormData(ir));delete i._honey;try{let r=await fetch(MT,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({...i,_subject:"HTS website lead: "+i.name,_template:"table",_captcha:"false"})}),o=await r.json().catch(()=>({}));if(!r.ok||String(o.success)!=="true")throw new Error(o.message||"not delivered");ir.reset(),ir.classList.add("sent"),Re("#formDone").hidden=!1,Re("#formDone").focus()}catch{e.innerHTML=n,e.disabled=!1,e.classList.remove("loading"),Fo.className="fine err",Fo.innerHTML='Couldn\u2019t send just now. Call or text <a href="tel:+18284045335">828-404-5335</a>.'}});Re("#yr").textContent=new Date().getFullYear();})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)

gsap/gsap-core.js:
  (*!
   * GSAP 3.15.1
   * https://gsap.com
   *
   * @license Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/CSSPlugin.js:
  (*!
   * CSSPlugin 3.15.1
   * https://gsap.com
   *
   * Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/Observer.js:
  (*!
   * Observer 3.15.1
   * https://gsap.com
   *
   * @license Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/ScrollTrigger.js:
  (*!
   * ScrollTrigger 3.15.1
   * https://gsap.com
   *
   * @license Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)
*/
