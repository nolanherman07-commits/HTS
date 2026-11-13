(()=>{var B_=Object.defineProperty;var z_=(s,t,e)=>t in s?B_(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var zt=(s,t,e)=>z_(s,typeof t!="symbol"?t+"":t,e);var dp=0,Pu=1,pp=2;var ma=1,mp=2,oo=3,Vs=0,gn=1,Wi=2,ur=0,ao=1,Iu=2,Lu=3,Du=4,gp=5;var fr=100,_p=101,xp=102,vp=103,yp=104,Sp=200,Mp=201,bp=202,Tp=203,Nu=204,Uu=205,wp=206,Ep=207,Ap=208,Cp=209,Rp=210,Pp=211,Ip=212,Lp=213,Dp=214,Dl=0,Nl=1,Ul=2,Qr=3,Ol=4,Fl=5,Bl=6,zl=7,fc=0,Np=1,Up=2,Xi=0,Ou=1,Fu=2,Bu=3,ga=4,zu=5,ku=6,Vu=7;var Gu=300,dr=301,lo=302,dc=303,pc=304,kl=1e3,zi=1001,Vl=1002,fn=1003,Op=1004;var _a=1005;var Fn=1006,mc=1007;var fs=1008;var Yn=1009,Hu=1010,Wu=1011,co=1012,gc=1013,Li=1014,xi=1015,Di=1016,_c=1017,xc=1018,pr=1020,Xu=35902,qu=35899,Yu=1021,Zu=1022,Ni=1023,ls=1026,ds=1027,vc=1028,yc=1029,Gs=1030,Sc=1031;var Mc=1033,xa=33776,va=33777,ya=33778,Sa=33779,bc=35840,Tc=35841,wc=35842,Ec=35843,Ac=36196,Cc=37492,Rc=37496,Pc=37488,Ic=37489,Ma=37490,Lc=37491,Dc=37808,Nc=37809,Uc=37810,Oc=37811,Fc=37812,Bc=37813,zc=37814,kc=37815,Vc=37816,Gc=37817,Hc=37818,Wc=37819,Xc=37820,qc=37821,Yc=36492,Zc=36494,Jc=36495,$c=36283,Kc=36284,ba=36285,Qc=36286;var Xo=2300,Gl=2301,Il=2302,Mu=2303,bu=2400,Tu=2401,wu=2402;var Fp=3200;var Ta=0,Bp=1,ps="",si="srgb",qo="srgb-linear",Yo="linear",_e="srgb";var Ll=7680;var zp=519,kp=512,Vp=513,Gp=514,Ju=515,Hp=516,Wp=517,$u=518,Ku=519,Xp=35044,jc=35048;var Qu="300 es",_i=2e3,jr=2001;function k_(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function V_(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Zo(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function qp(){let s=Zo("canvas");return s.style.display="block",s}var kd={},to=null;function ju(...s){let t="THREE."+s.shift();to?to("log",t,...s):console.log(t,...s)}function Yp(s){let t=s[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=s[1];e&&e.isStackTrace?s[0]+=" "+e.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Vt(...s){s=Yp(s);let t="THREE."+s.shift();if(to)to("warn",t,...s);else{let e=s[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...s)}}function Ht(...s){s=Yp(s);let t="THREE."+s.shift();if(to)to("error",t,...s);else{let e=s[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...s)}}function Wo(...s){let t=s.join(" ");t in kd||(kd[t]=!0,Vt(...s))}function Zp(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Jp={[Dl]:Dl,[Ul]:Bl,[Ol]:Ol,[Qr]:Fl,[Nl]:Nl,[Bl]:Ul,[zl]:zl,[Fl]:Qr},ki=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let i=n[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}},bn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Kh=Math.PI/180,Hl=180/Math.PI;function wa(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(bn[s&255]+bn[s>>8&255]+bn[s>>16&255]+bn[s>>24&255]+"-"+bn[t&255]+bn[t>>8&255]+"-"+bn[t>>16&15|64]+bn[t>>24&255]+"-"+bn[e&63|128]+bn[e>>8&255]+"-"+bn[e>>16&255]+bn[e>>24&255]+bn[n&255]+bn[n>>8&255]+bn[n>>16&255]+bn[n>>24&255]).toLowerCase()}function se(s,t,e){return Math.max(t,Math.min(e,s))}function G_(s,t){return(s%t+t)%t}function Qh(s,t,e){return(1-e)*s+e*t}function $p(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function tf(s){switch(s.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function H_(s,t){if(t.constructor===Float32Array)return s;let e=tf(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(s/e,-1)}function W_(s,t){if(t.constructor===Float32Array)return s;let e=tf(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(s*e)}var af=class af{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=se(this.x,t.x,e.x),this.y=se(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=se(this.x,t,e),this.y=se(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(se(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(se(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};af.prototype.isVector2=!0;var re=af,En=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3],f=r[o+0],u=r[o+1],m=r[o+2],_=r[o+3];if(d!==_||l!==f||c!==u||h!==m){let p=l*f+c*u+h*m+d*_;p<0&&(f=-f,u=-u,m=-m,_=-_,p=-p);let g=1-a;if(p<.9995){let v=Math.acos(p),E=Math.sin(v);g=Math.sin(g*v)/E,a=Math.sin(a*v)/E,l=l*g+f*a,c=c*g+u*a,h=h*g+m*a,d=d*g+_*a}else{l=l*g+f*a,c=c*g+u*a,h=h*g+m*a,d=d*g+_*a;let v=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=v,c*=v,h*=v,d*=v}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,r,o){let a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=r[o],f=r[o+1],u=r[o+2],m=r[o+3];return t[e]=a*m+h*d+l*u-c*f,t[e+1]=l*m+h*f+c*d-a*u,t[e+2]=c*m+h*u+a*f-l*d,t[e+3]=h*m-a*d-l*f-c*u,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),d=a(r/2),f=l(n/2),u=l(i/2),m=l(r/2);switch(o){case"XYZ":this._x=f*h*d+c*u*m,this._y=c*u*d-f*h*m,this._z=c*h*m+f*u*d,this._w=c*h*d-f*u*m;break;case"YXZ":this._x=f*h*d+c*u*m,this._y=c*u*d-f*h*m,this._z=c*h*m-f*u*d,this._w=c*h*d+f*u*m;break;case"ZXY":this._x=f*h*d-c*u*m,this._y=c*u*d+f*h*m,this._z=c*h*m+f*u*d,this._w=c*h*d-f*u*m;break;case"ZYX":this._x=f*h*d-c*u*m,this._y=c*u*d+f*h*m,this._z=c*h*m-f*u*d,this._w=c*h*d+f*u*m;break;case"YZX":this._x=f*h*d+c*u*m,this._y=c*u*d+f*h*m,this._z=c*h*m-f*u*d,this._w=c*h*d-f*u*m;break;case"XZY":this._x=f*h*d-c*u*m,this._y=c*u*d-f*h*m,this._z=c*h*m+f*u*d,this._w=c*h*d+f*u*m;break;default:Vt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],f=n+a+d;if(f>0){let u=.5/Math.sqrt(f+1);this._w=.25/u,this._x=(h-l)*u,this._y=(r-c)*u,this._z=(o-i)*u}else if(n>a&&n>d){let u=2*Math.sqrt(1+n-a-d);this._w=(h-l)/u,this._x=.25*u,this._y=(i+o)/u,this._z=(r+c)/u}else if(a>d){let u=2*Math.sqrt(1+a-n-d);this._w=(r-c)/u,this._x=(i+o)/u,this._y=.25*u,this._z=(l+h)/u}else{let u=2*Math.sqrt(1+d-n-a);this._w=(o-i)/u,this._x=(r+c)/u,this._y=(l+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(se(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,i=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,i=-i,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},lf=class lf{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Vd.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Vd.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-r*i),d=2*(r*n-o*e);return this.x=e+l*c+o*d-a*h,this.y=n+l*h+a*c-r*d,this.z=i+l*d+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=se(this.x,t.x,e.x),this.y=se(this.y,t.y,e.y),this.z=se(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=se(this.x,t,e),this.y=se(this.y,t,e),this.z=se(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(se(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return jh.copy(this).projectOnVector(t),this.sub(jh)}reflect(t){return this.sub(jh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(se(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};lf.prototype.isVector3=!0;var V=lf,jh=new V,Vd=new En,cf=class cf{constructor(t,e,n,i,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c)}set(t,e,n,i,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],f=n[2],u=n[5],m=n[8],_=i[0],p=i[3],g=i[6],v=i[1],E=i[4],y=i[7],T=i[2],w=i[5],x=i[8];return r[0]=o*_+a*v+l*T,r[3]=o*p+a*E+l*w,r[6]=o*g+a*y+l*x,r[1]=c*_+h*v+d*T,r[4]=c*p+h*E+d*w,r[7]=c*g+h*y+d*x,r[2]=f*_+u*v+m*T,r[5]=f*p+u*E+m*w,r[8]=f*g+u*y+m*x,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*o-a*c,f=a*l-h*r,u=c*r-o*l,m=e*d+n*f+i*u;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/m;return t[0]=d*_,t[1]=(i*c-h*n)*_,t[2]=(a*n-i*o)*_,t[3]=f*_,t[4]=(h*e-i*l)*_,t[5]=(i*r-a*e)*_,t[6]=u*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return Wo("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(tu.makeScale(t,e)),this}rotate(t){return Wo("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(tu.makeRotation(-t)),this}translate(t,e){return Wo("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(tu.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};cf.prototype.isMatrix3=!0;var Wt=cf,tu=new Wt,Gd=new Wt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Hd=new Wt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function X_(){let s={enabled:!0,workingColorSpace:qo,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===_e&&(i.r=as(i.r),i.g=as(i.g),i.b=as(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===_e&&(i.r=Kr(i.r),i.g=Kr(i.g),i.b=Kr(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ps?Yo:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[qo]:{primaries:t,whitePoint:n,transfer:Yo,toXYZ:Gd,fromXYZ:Hd,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:si},outputColorSpaceConfig:{drawingBufferColorSpace:si}},[si]:{primaries:t,whitePoint:n,transfer:_e,toXYZ:Gd,fromXYZ:Hd,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:si}}}),s}var le=X_();function as(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Kr(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Fr,Wl=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Fr===void 0&&(Fr=Zo("canvas")),Fr.width=t.width,Fr.height=t.height;let i=Fr.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=Fr}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=Zo("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=as(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(as(e[n]/255)*255):e[n]=as(e[n]);return{data:e,width:t.width,height:t.height}}else return Vt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},q_=0,eo=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:q_++}),this.uuid=wa(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement!="undefined"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame!="undefined"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(eu(i[o].image)):r.push(eu(i[o]))}else r=eu(i);n.url=r}return e||(t.images[this.uuid]=n),n}};function eu(s){return typeof HTMLImageElement!="undefined"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&s instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&s instanceof ImageBitmap?Wl.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Vt("Texture: Unable to serialize Texture."),{})}var Y_=0,nu=new V,qn=class s extends ki{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,n=zi,i=zi,r=Fn,o=fs,a=Ni,l=Yn,c=s.DEFAULT_ANISOTROPY,h=ps){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Y_++}),this.uuid=wa(),this.name="",this.source=new eo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new re(0,0),this.repeat=new re(1,1),this.center=new re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Wt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(nu).x}get height(){return this.source.getSize(nu).y}get depth(){return this.source.getSize(nu).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Vt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Vt(`Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Gu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case kl:t.x=t.x-Math.floor(t.x);break;case zi:t.x=t.x<0?0:1;break;case Vl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case kl:t.y=t.y-Math.floor(t.y);break;case zi:t.y=t.y<0?0:1;break;case Vl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};qn.DEFAULT_IMAGE=null;qn.DEFAULT_MAPPING=Gu;qn.DEFAULT_ANISOTROPY=1;var hf=class hf{constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r,l=t.elements,c=l[0],h=l[4],d=l[8],f=l[1],u=l[5],m=l[9],_=l[2],p=l[6],g=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-_)<.01&&Math.abs(m-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+_)<.1&&Math.abs(m+p)<.1&&Math.abs(c+u+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let E=(c+1)/2,y=(u+1)/2,T=(g+1)/2,w=(h+f)/4,x=(d+_)/4,M=(m+p)/4;return E>y&&E>T?E<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(E),i=w/n,r=x/n):y>T?y<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(y),n=w/i,r=M/i):T<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(T),n=x/r,i=M/r),this.set(n,i,r,e),this}let v=Math.sqrt((p-m)*(p-m)+(d-_)*(d-_)+(f-h)*(f-h));return Math.abs(v)<.001&&(v=1),this.x=(p-m)/v,this.y=(d-_)/v,this.z=(f-h)/v,this.w=Math.acos((c+u+g-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=se(this.x,t.x,e.x),this.y=se(this.y,t.y,e.y),this.z=se(this.z,t.z,e.z),this.w=se(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=se(this.x,t,e),this.y=se(this.y,t,e),this.z=se(this.z,t,e),this.w=se(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(se(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};hf.prototype.isVector4=!0;var Le=hf,Xl=class extends ki{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Fn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Le(0,0,t,e),this.scissorTest=!1,this.viewport=new Le(0,0,t,e),this.textures=[];let i=n.count;for(let r=0;r<i;r++)this.textures[r]=new qn({width:t,height:e,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Fn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let i=Object.assign({},t.textures[e].image);this.textures[e].source=new eo(i)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},ri=class extends Xl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Jo=class extends qn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=fn,this.minFilter=fn,this.wrapR=zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var ql=class extends qn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=fn,this.minFilter=fn,this.wrapR=zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var uc=class uc{constructor(t,e,n,i,r,o,a,l,c,h,d,f,u,m,_,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c,h,d,f,u,m,_,p)}set(t,e,n,i,r,o,a,l,c,h,d,f,u,m,_,p){let g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=i,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=h,g[10]=d,g[14]=f,g[3]=u,g[7]=m,g[11]=_,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new uc().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,i=1/Br.setFromMatrixColumn(t,0).length(),r=1/Br.setFromMatrixColumn(t,1).length(),o=1/Br.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let f=o*h,u=o*d,m=a*h,_=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=u+m*c,e[5]=f-_*c,e[9]=-a*l,e[2]=_-f*c,e[6]=m+u*c,e[10]=o*l}else if(t.order==="YXZ"){let f=l*h,u=l*d,m=c*h,_=c*d;e[0]=f+_*a,e[4]=m*a-u,e[8]=o*c,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=u*a-m,e[6]=_+f*a,e[10]=o*l}else if(t.order==="ZXY"){let f=l*h,u=l*d,m=c*h,_=c*d;e[0]=f-_*a,e[4]=-o*d,e[8]=m+u*a,e[1]=u+m*a,e[5]=o*h,e[9]=_-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let f=o*h,u=o*d,m=a*h,_=a*d;e[0]=l*h,e[4]=m*c-u,e[8]=f*c+_,e[1]=l*d,e[5]=_*c+f,e[9]=u*c-m,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let f=o*l,u=o*c,m=a*l,_=a*c;e[0]=l*h,e[4]=_-f*d,e[8]=m*d+u,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=u*d+m,e[10]=f-_*d}else if(t.order==="XZY"){let f=o*l,u=o*c,m=a*l,_=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=f*d+_,e[5]=o*h,e[9]=u*d-m,e[2]=m*d-u,e[6]=a*h,e[10]=_*d+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Z_,t,J_)}lookAt(t,e,n){let i=this.elements;return ni.subVectors(t,e),ni.lengthSq()===0&&(ni.z=1),ni.normalize(),Rs.crossVectors(n,ni),Rs.lengthSq()===0&&(Math.abs(n.z)===1?ni.x+=1e-4:ni.z+=1e-4,ni.normalize(),Rs.crossVectors(n,ni)),Rs.normalize(),hl.crossVectors(ni,Rs),i[0]=Rs.x,i[4]=hl.x,i[8]=ni.x,i[1]=Rs.y,i[5]=hl.y,i[9]=ni.y,i[2]=Rs.z,i[6]=hl.z,i[10]=ni.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],f=n[9],u=n[13],m=n[2],_=n[6],p=n[10],g=n[14],v=n[3],E=n[7],y=n[11],T=n[15],w=i[0],x=i[4],M=i[8],P=i[12],C=i[1],N=i[5],D=i[9],W=i[13],I=i[2],G=i[6],X=i[10],F=i[14],et=i[3],H=i[7],R=i[11],K=i[15];return r[0]=o*w+a*C+l*I+c*et,r[4]=o*x+a*N+l*G+c*H,r[8]=o*M+a*D+l*X+c*R,r[12]=o*P+a*W+l*F+c*K,r[1]=h*w+d*C+f*I+u*et,r[5]=h*x+d*N+f*G+u*H,r[9]=h*M+d*D+f*X+u*R,r[13]=h*P+d*W+f*F+u*K,r[2]=m*w+_*C+p*I+g*et,r[6]=m*x+_*N+p*G+g*H,r[10]=m*M+_*D+p*X+g*R,r[14]=m*P+_*W+p*F+g*K,r[3]=v*w+E*C+y*I+T*et,r[7]=v*x+E*N+y*G+T*H,r[11]=v*M+E*D+y*X+T*R,r[15]=v*P+E*W+y*F+T*K,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],f=t[10],u=t[14],m=t[3],_=t[7],p=t[11],g=t[15],v=l*u-c*f,E=a*u-c*d,y=a*f-l*d,T=o*u-c*h,w=o*f-l*h,x=o*d-a*h;return e*(_*v-p*E+g*y)-n*(m*v-p*T+g*w)+i*(m*E-_*T+g*x)-r*(m*y-_*w+p*x)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-n*(r*h-a*l)+i*(r*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],f=t[10],u=t[11],m=t[12],_=t[13],p=t[14],g=t[15],v=e*a-n*o,E=e*l-i*o,y=e*c-r*o,T=n*l-i*a,w=n*c-r*a,x=i*c-r*l,M=h*_-d*m,P=h*p-f*m,C=h*g-u*m,N=d*p-f*_,D=d*g-u*_,W=f*g-u*p,I=v*W-E*D+y*N+T*C-w*P+x*M;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let G=1/I;return t[0]=(a*W-l*D+c*N)*G,t[1]=(i*D-n*W-r*N)*G,t[2]=(_*x-p*w+g*T)*G,t[3]=(f*w-d*x-u*T)*G,t[4]=(l*C-o*W-c*P)*G,t[5]=(e*W-i*C+r*P)*G,t[6]=(p*y-m*x-g*E)*G,t[7]=(h*x-f*y+u*E)*G,t[8]=(o*D-a*C+c*M)*G,t[9]=(n*C-e*D-r*M)*G,t[10]=(m*w-_*y+g*v)*G,t[11]=(d*y-h*w-u*v)*G,t[12]=(a*P-o*N-l*M)*G,t[13]=(e*N-n*P+i*M)*G,t[14]=(_*E-m*T-p*v)*G,t[15]=(h*T-d*E+f*v)*G,this}scale(t){let e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,d=a+a,f=r*c,u=r*h,m=r*d,_=o*h,p=o*d,g=a*d,v=l*c,E=l*h,y=l*d,T=n.x,w=n.y,x=n.z;return i[0]=(1-(_+g))*T,i[1]=(u+y)*T,i[2]=(m-E)*T,i[3]=0,i[4]=(u-y)*w,i[5]=(1-(f+g))*w,i[6]=(p+v)*w,i[7]=0,i[8]=(m+E)*x,i[9]=(p-v)*x,i[10]=(1-(f+_))*x,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=Br.set(i[0],i[1],i[2]).length(),a=Br.set(i[4],i[5],i[6]).length(),l=Br.set(i[8],i[9],i[10]).length();r<0&&(o=-o),Ei.copy(this);let c=1/o,h=1/a,d=1/l;return Ei.elements[0]*=c,Ei.elements[1]*=c,Ei.elements[2]*=c,Ei.elements[4]*=h,Ei.elements[5]*=h,Ei.elements[6]*=h,Ei.elements[8]*=d,Ei.elements[9]*=d,Ei.elements[10]*=d,e.setFromRotationMatrix(Ei),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,i,r,o,a=_i,l=!1){let c=this.elements,h=2*r/(e-t),d=2*r/(n-i),f=(e+t)/(e-t),u=(n+i)/(n-i),m,_;if(l)m=r/(o-r),_=o*r/(o-r);else if(a===_i)m=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===jr)m=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=_i,l=!1){let c=this.elements,h=2/(e-t),d=2/(n-i),f=-(e+t)/(e-t),u=-(n+i)/(n-i),m,_;if(l)m=1/(o-r),_=o/(o-r);else if(a===_i)m=-2/(o-r),_=-(o+r)/(o-r);else if(a===jr)m=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=d,c[9]=0,c[13]=u,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};uc.prototype.isMatrix4=!0;var ye=uc,Br=new V,Ei=new ye,Z_=new V(0,0,0),J_=new V(1,1,1),Rs=new V,hl=new V,ni=new V,Wd=new ye,Xd=new En,oi=class s{constructor(t=0,e=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],d=i[2],f=i[6],u=i[10];switch(e){case"XYZ":this._y=Math.asin(se(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-se(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,u),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(se(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,u),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-se(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,u),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(se(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,u));break;case"XZY":this._z=Math.asin(-se(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,u),this._y=0);break;default:Vt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Wd.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Wd,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Xd.setFromEuler(this),this.setFromQuaternion(Xd,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};oi.DEFAULT_ORDER="XYZ";var $o=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},$_=0,qd=new V,zr=new En,es=new ye,ul=new V,Bo=new V,K_=new V,Q_=new En,Yd=new V(1,0,0),Zd=new V(0,1,0),Jd=new V(0,0,1),$d={type:"added"},j_={type:"removed"},kr={type:"childadded",child:null},iu={type:"childremoved",child:null},sn=class s extends ki{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$_++}),this.uuid=wa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new V,e=new oi,n=new En,i=new V(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ye},normalMatrix:{value:new Wt}}),this.matrix=new ye,this.matrixWorld=new ye,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new $o,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return zr.setFromAxisAngle(t,e),this.quaternion.multiply(zr),this}rotateOnWorldAxis(t,e){return zr.setFromAxisAngle(t,e),this.quaternion.premultiply(zr),this}rotateX(t){return this.rotateOnAxis(Yd,t)}rotateY(t){return this.rotateOnAxis(Zd,t)}rotateZ(t){return this.rotateOnAxis(Jd,t)}translateOnAxis(t,e){return qd.copy(t).applyQuaternion(this.quaternion),this.position.add(qd.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Yd,t)}translateY(t){return this.translateOnAxis(Zd,t)}translateZ(t){return this.translateOnAxis(Jd,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(es.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ul.copy(t):ul.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Bo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?es.lookAt(Bo,ul,this.up):es.lookAt(ul,Bo,this.up),this.quaternion.setFromRotationMatrix(es),i&&(es.extractRotation(i.matrixWorld),zr.setFromRotationMatrix(es),this.quaternion.premultiply(zr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Ht("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent($d),kr.child=t,this.dispatchEvent(kr),kr.child=null):Ht("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(j_),iu.child=t,this.dispatchEvent(iu),iu.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),es.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),es.multiply(t.parent.matrixWorld)),t.applyMatrix4(es),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent($d),kr.child=t,this.dispatchEvent(kr),kr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bo,t,K_),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bo,Q_,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,i=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*i,r[13]+=n-r[1]*e-r[5]*n-r[9]*i,r[14]+=i-r[2]*e-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),f=o(t.skeletons),u=o(t.animations),m=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),u.length>0&&(n.animations=u),m.length>0&&(n.nodes=m)}return n.object=i,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};sn.DEFAULT_UP=new V(0,1,0);sn.DEFAULT_MATRIX_AUTO_UPDATE=!0;sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var os=class extends sn{constructor(){super(),this.isGroup=!0,this.type="Group"}},t0={type:"move"},no=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new os,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new os,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new os,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let _ of t.hand.values()){let p=e.getJointPose(_,n),g=this._getHandJoint(c,_);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=p.radius),g.visible=p!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),u=.02,m=.005;c.inputState.pinching&&f>u+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=u-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(t0)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new os;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Kp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ps={h:0,s:0,l:0},fl={h:0,s:0,l:0};function su(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var Jt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=si){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,le.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=le.workingColorSpace){return this.r=t,this.g=e,this.b=n,le.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=le.workingColorSpace){if(t=G_(t,1),e=se(e,0,1),n=se(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=su(o,r,t+1/3),this.g=su(o,r,t),this.b=su(o,r,t-1/3)}return le.colorSpaceToWorking(this,i),this}setStyle(t,e=si){function n(r){r!==void 0&&parseFloat(r)<1&&Vt("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Vt("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);Vt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=si){let n=Kp[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Vt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=as(t.r),this.g=as(t.g),this.b=as(t.b),this}copyLinearToSRGB(t){return this.r=Kr(t.r),this.g=Kr(t.g),this.b=Kr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=si){return le.workingToColorSpace(Tn.copy(this),t),Math.round(se(Tn.r*255,0,255))*65536+Math.round(se(Tn.g*255,0,255))*256+Math.round(se(Tn.b*255,0,255))}getHexString(t=si){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=le.workingColorSpace){le.workingToColorSpace(Tn.copy(this),e);let n=Tn.r,i=Tn.g,r=Tn.b,o=Math.max(n,i,r),a=Math.min(n,i,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(i-r)/d+(i<r?6:0);break;case i:l=(r-n)/d+2;break;case r:l=(n-i)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=le.workingColorSpace){return le.workingToColorSpace(Tn.copy(this),e),t.r=Tn.r,t.g=Tn.g,t.b=Tn.b,t}getStyle(t=si){le.workingToColorSpace(Tn.copy(this),t);let e=Tn.r,n=Tn.g,i=Tn.b;return t!==si?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Ps),this.setHSL(Ps.h+t,Ps.s+e,Ps.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ps),t.getHSL(fl);let n=Qh(Ps.h,fl.h,e),i=Qh(Ps.s,fl.s,e),r=Qh(Ps.l,fl.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Tn=new Jt;Jt.NAMES=Kp;var hr=class extends sn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new oi,this.environmentIntensity=1,this.environmentRotation=new oi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Ai=new V,ns=new V,ru=new V,is=new V,Vr=new V,Gr=new V,Kd=new V,ou=new V,au=new V,lu=new V,cu=new Le,hu=new Le,uu=new Le,Ns=class s{constructor(t=new V,e=new V,n=new V){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Ai.subVectors(t,e),i.cross(Ai);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){Ai.subVectors(i,e),ns.subVectors(n,e),ru.subVectors(t,e);let o=Ai.dot(Ai),a=Ai.dot(ns),l=Ai.dot(ru),c=ns.dot(ns),h=ns.dot(ru),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let f=1/d,u=(c*l-a*h)*f,m=(o*h-a*l)*f;return r.set(1-u-m,m,u)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,is)===null?!1:is.x>=0&&is.y>=0&&is.x+is.y<=1}static getInterpolation(t,e,n,i,r,o,a,l){return this.getBarycoord(t,e,n,i,is)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,is.x),l.addScaledVector(o,is.y),l.addScaledVector(a,is.z),l)}static getInterpolatedAttribute(t,e,n,i,r,o){return cu.setScalar(0),hu.setScalar(0),uu.setScalar(0),cu.fromBufferAttribute(t,e),hu.fromBufferAttribute(t,n),uu.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(cu,r.x),o.addScaledVector(hu,r.y),o.addScaledVector(uu,r.z),o}static isFrontFacing(t,e,n,i){return Ai.subVectors(n,e),ns.subVectors(t,e),Ai.cross(ns).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ai.subVectors(this.c,this.b),ns.subVectors(this.a,this.b),Ai.cross(ns).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,r=this.c,o,a;Vr.subVectors(i,n),Gr.subVectors(r,n),ou.subVectors(t,n);let l=Vr.dot(ou),c=Gr.dot(ou);if(l<=0&&c<=0)return e.copy(n);au.subVectors(t,i);let h=Vr.dot(au),d=Gr.dot(au);if(h>=0&&d<=h)return e.copy(i);let f=l*d-h*c;if(f<=0&&l>=0&&h<=0&&l-h>0)return o=l/(l-h),e.copy(n).addScaledVector(Vr,o);lu.subVectors(t,r);let u=Vr.dot(lu),m=Gr.dot(lu);if(m>=0&&u<=m)return e.copy(r);let _=u*c-l*m;if(_<=0&&c>=0&&m<=0)return a=c/(c-m),e.copy(n).addScaledVector(Gr,a);let p=h*m-u*d;if(p<=0&&d-h>=0&&u-m>=0)return Kd.subVectors(r,i),a=(d-h)/(d-h+(u-m)),e.copy(i).addScaledVector(Kd,a);let g=1/(p+_+f);return o=_*g,a=f*g,e.copy(n).addScaledVector(Vr,o).addScaledVector(Gr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Vi=class{constructor(t=new V(1/0,1/0,1/0),e=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ci.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ci.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Ci.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Ci):Ci.fromBufferAttribute(r,o),Ci.applyMatrix4(t.matrixWorld),this.expandByPoint(Ci);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),dl.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),dl.copy(n.boundingBox)),dl.applyMatrix4(t.matrixWorld),this.union(dl)}let i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ci),Ci.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(zo),pl.subVectors(this.max,zo),Hr.subVectors(t.a,zo),Wr.subVectors(t.b,zo),Xr.subVectors(t.c,zo),Is.subVectors(Wr,Hr),Ls.subVectors(Xr,Wr),or.subVectors(Hr,Xr);let e=[0,-Is.z,Is.y,0,-Ls.z,Ls.y,0,-or.z,or.y,Is.z,0,-Is.x,Ls.z,0,-Ls.x,or.z,0,-or.x,-Is.y,Is.x,0,-Ls.y,Ls.x,0,-or.y,or.x,0];return!fu(e,Hr,Wr,Xr,pl)||(e=[1,0,0,0,1,0,0,0,1],!fu(e,Hr,Wr,Xr,pl))?!1:(ml.crossVectors(Is,Ls),e=[ml.x,ml.y,ml.z],fu(e,Hr,Wr,Xr,pl))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ci).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ci).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ss[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ss[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ss[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ss[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ss[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ss[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ss[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ss[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ss),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},ss=[new V,new V,new V,new V,new V,new V,new V,new V],Ci=new V,dl=new Vi,Hr=new V,Wr=new V,Xr=new V,Is=new V,Ls=new V,or=new V,zo=new V,pl=new V,ml=new V,ar=new V;function fu(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){ar.fromArray(s,r);let a=i.x*Math.abs(ar.x)+i.y*Math.abs(ar.y)+i.z*Math.abs(ar.z),l=t.dot(ar),c=e.dot(ar),h=n.dot(ar);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Je=new V,gl=new re,e0=0,Pi=class extends ki{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:e0++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Xp,this.updateRanges=[],this.gpuType=xi,this.version=0,this._normalizationScale=t!==void 0?tf(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)gl.fromBufferAttribute(this,e),gl.applyMatrix3(t),this.setXY(e,gl.x,gl.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Je.fromBufferAttribute(this,e),Je.applyMatrix3(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Je.fromBufferAttribute(this,e),Je.applyMatrix4(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Je.fromBufferAttribute(this,e),Je.applyNormalMatrix(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Je.fromBufferAttribute(this,e),Je.transformDirection(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),i=this._normalize(i)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):H_(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):W_(t,this.array)}};var Ko=class extends Pi{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Qo=class extends Pi{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var On=class extends Pi{constructor(t,e,n){super(new Float32Array(t),e,n)}},n0=new Vi,ko=new V,du=new V,Us=class{constructor(t=new V,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):n0.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ko.subVectors(t,this.center);let e=ko.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(ko,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(du.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ko.copy(t.center).add(du)),this.expandByPoint(ko.copy(t.center).sub(du))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},i0=0,gi=new ye,pu=new sn,qr=new V,ii=new Vi,Vo=new Vi,un=new V,cs=class s extends ki{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:i0++}),this.uuid=wa(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(k_(t)?Qo:Ko)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Wt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return gi.makeRotationFromQuaternion(t),this.applyMatrix4(gi),this}rotateX(t){return gi.makeRotationX(t),this.applyMatrix4(gi),this}rotateY(t){return gi.makeRotationY(t),this.applyMatrix4(gi),this}rotateZ(t){return gi.makeRotationZ(t),this.applyMatrix4(gi),this}translate(t,e,n){return gi.makeTranslation(t,e,n),this.applyMatrix4(gi),this}scale(t,e,n){return gi.makeScale(t,e,n),this.applyMatrix4(gi),this}lookAt(t){return pu.lookAt(t),pu.updateMatrix(),this.applyMatrix4(pu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qr).negate(),this.translate(qr.x,qr.y,qr.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,r=t.length;i<r;i++){let o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new On(n,3))}else{let n=Math.min(t.length,e.count);for(let i=0;i<n;i++){let r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&Vt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ht("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];ii.setFromBufferAttribute(r),this.morphTargetsRelative?(un.addVectors(this.boundingBox.min,ii.min),this.boundingBox.expandByPoint(un),un.addVectors(this.boundingBox.max,ii.max),this.boundingBox.expandByPoint(un)):(this.boundingBox.expandByPoint(ii.min),this.boundingBox.expandByPoint(ii.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ht('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Us);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ht("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(t){let n=this.boundingSphere.center;if(ii.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Vo.setFromBufferAttribute(a),this.morphTargetsRelative?(un.addVectors(ii.min,Vo.min),ii.expandByPoint(un),un.addVectors(ii.max,Vo.max),ii.expandByPoint(un)):(ii.expandByPoint(Vo.min),ii.expandByPoint(Vo.max))}ii.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)un.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(un));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)un.fromBufferAttribute(a,c),l&&(qr.fromBufferAttribute(t,c),un.add(qr)),i=Math.max(i,n.distanceToSquared(un))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Ht('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Ht("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Pi(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[],c=new Uint8Array(n.count);for(let P=0;P<n.count;P++)a[P]=new V,l[P]=new V;let h=new V,d=new V,f=new V,u=new re,m=new re,_=new re,p=new V,g=new V;function v(P,C,N){c[P]=c[C]=c[N]=1,h.fromBufferAttribute(n,P),d.fromBufferAttribute(n,C),f.fromBufferAttribute(n,N),u.fromBufferAttribute(r,P),m.fromBufferAttribute(r,C),_.fromBufferAttribute(r,N),d.sub(h),f.sub(h),m.sub(u),_.sub(u);let D=1/(m.x*_.y-_.x*m.y);isFinite(D)&&(p.copy(d).multiplyScalar(_.y).addScaledVector(f,-m.y).multiplyScalar(D),g.copy(f).multiplyScalar(m.x).addScaledVector(d,-_.x).multiplyScalar(D),a[P].add(p),a[C].add(p),a[N].add(p),l[P].add(g),l[C].add(g),l[N].add(g))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let P=0,C=E.length;P<C;++P){let N=E[P],D=N.start,W=N.count;for(let I=D,G=D+W;I<G;I+=3)v(t.getX(I+0),t.getX(I+1),t.getX(I+2))}let y=new V,T=new V,w=new V,x=new V;function M(P){w.fromBufferAttribute(i,P),x.copy(w);let C=a[P];y.copy(C),y.sub(w.multiplyScalar(w.dot(C))).normalize(),T.crossVectors(x,C);let D=T.dot(l[P])<0?-1:1;o.setXYZW(P,y.x,y.y,y.z,D)}for(let P=0,C=n.count;P<C;++P)c[P]&&M(P);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Pi(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,u=n.count;f<u;f++)n.setXYZ(f,0,0,0);let i=new V,r=new V,o=new V,a=new V,l=new V,c=new V,h=new V,d=new V;if(t)for(let f=0,u=t.count;f<u;f+=3){let m=t.getX(f+0),_=t.getX(f+1),p=t.getX(f+2);i.fromBufferAttribute(e,m),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,p),h.subVectors(o,r),d.subVectors(i,r),h.cross(d),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),a.add(h),l.add(h),c.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,u=e.count;f<u;f+=3)i.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),d.subVectors(i,r),h.cross(d),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)un.fromBufferAttribute(t,e),un.normalize(),t.setXYZ(e,un.x,un.y,un.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,d=a.normalized,f=new c.constructor(l.length*h),u=0,m=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?u=l[_]*a.data.stride+a.offset:u=l[_]*h;for(let g=0;g<h;g++)f[m++]=c[u++]}return new Pi(f,h,d)}if(this.index===null)return Vt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){let f=c[h],u=t(f,n);l.push(u)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){let u=c[d];h.push(u.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let i=t.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],d=r[c];for(let f=0,u=d.length;f<u;f++)h.push(d[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var mu=new V,s0=new V,r0=new Wt,Ri=class{constructor(t=new V(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=mu.subVectors(n,e).cross(s0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let i=t.delta(mu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(i,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||r0.getNormalMatrix(t),i=this.coplanarPoint(mu).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},o0=0,hs=class extends ki{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:o0++}),this.uuid=wa(),this.name="",this.type="Material",this.blending=ao,this.side=Vs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Nu,this.blendDst=Uu,this.blendEquation=fr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Jt(0,0,0),this.blendAlpha=0,this.depthFunc=Qr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=zp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ll,this.stencilZFail=Ll,this.stencilZPass=Ll,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Vt(`Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Vt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Jt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Ri().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new re().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new re().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var rs=new V,gu=new V,_l=new V,xl=new V,Yl=class{constructor(t=new V,e=new V(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,rs)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=rs.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(rs.copy(this.origin).addScaledVector(this.direction,e),rs.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){gu.copy(t).add(e).multiplyScalar(.5),_l.copy(e).sub(t).normalize(),xl.copy(this.origin).sub(gu);let r=t.distanceTo(e)*.5,o=-this.direction.dot(_l),a=xl.dot(this.direction),l=-xl.dot(_l),c=xl.lengthSq(),h=Math.abs(1-o*o),d,f,u,m;if(h>0)if(d=o*l-a,f=o*a-l,m=r*h,d>=0)if(f>=-m)if(f<=m){let _=1/h;d*=_,f*=_,u=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=r,d=Math.max(0,-(o*f+a)),u=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(o*f+a)),u=-d*d+f*(f+2*l)+c;else f<=-m?(d=Math.max(0,-(-o*r+a)),f=d>0?-r:Math.min(Math.max(-r,-l),r),u=-d*d+f*(f+2*l)+c):f<=m?(d=0,f=Math.min(Math.max(-r,-l),r),u=f*(f+2*l)+c):(d=Math.max(0,-(o*r+a)),f=d>0?r:Math.min(Math.max(-r,-l),r),u=-d*d+f*(f+2*l)+c);else f=o>0?-r:r,d=Math.max(0,-(o*f+a)),u=-d*d+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(gu).addScaledVector(_l,f),u}intersectSphere(t,e){if(t.radius<0)return null;rs.subVectors(t.center,this.origin);let n=rs.dot(this.direction),i=rs.dot(rs)-n*n,r=t.radius*t.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,i=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,i=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),d>=0?(a=(t.min.z-f.z)*d,l=(t.max.z-f.z)*d):(a=(t.max.z-f.z)*d,l=(t.min.z-f.z)*d),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,rs)!==null}intersectTriangle(t,e,n,i,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,d=t.x-o.x,f=t.y-o.y,u=t.z-o.z,m=e.x-o.x,_=e.y-o.y,p=e.z-o.z,g=n.x-o.x,v=n.y-o.y,E=n.z-o.z,y=Math.abs(l),T=Math.abs(c),w=Math.abs(h),x,M,P,C,N,D,W,I,G,X,F,et;if(y>=T&&y>=w?(P=l,D=d,G=m,et=g,l>=0?(x=c,M=h,C=f,N=u,W=_,I=p,X=v,F=E):(x=h,M=c,C=u,N=f,W=p,I=_,X=E,F=v)):T>=w?(P=c,D=f,G=_,et=v,c>=0?(x=h,M=l,C=u,N=d,W=p,I=m,X=E,F=g):(x=l,M=h,C=d,N=u,W=m,I=p,X=g,F=E)):(P=h,D=u,G=p,et=E,h>=0?(x=l,M=c,C=d,N=f,W=m,I=_,X=g,F=v):(x=c,M=l,C=f,N=d,W=_,I=m,X=v,F=g)),P===0)return null;let H=x/P,R=M/P,K=1/P,yt=C-H*D,kt=N-R*D,Y=W-H*G,ft=I-R*G,xt=X-H*et,Mt=F-R*et,dt=xt*ft-Mt*Y,Rt=yt*Mt-kt*xt,de=Y*kt-ft*yt;if(i){if(dt<0||Rt<0||de<0)return null}else if((dt<0||Rt<0||de<0)&&(dt>0||Rt>0||de>0))return null;let Ct=dt+Rt+de;if(Ct===0)return null;let Gt=K*(dt*D+Rt*G+de*et);return(Ct>0?Gt<0:Gt>0)?null:this.at(Gt/Ct,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Zl=class extends hs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new oi,this.combine=fc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Qd=new ye,lr=new Yl,vl=new Us,jd=new V,yl=new V,Sl=new V,Ml=new V,_u=new V,bl=new V,tp=new V,Tl=new V,$e=class extends sn{constructor(t=new cs,e=new Zl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(r&&a){bl.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],d=r[l];h!==0&&(_u.fromBufferAttribute(d,t),o?bl.addScaledVector(_u,h):bl.addScaledVector(_u.sub(e),h))}e.add(bl)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),vl.copy(n.boundingSphere),vl.applyMatrix4(r),lr.copy(t.ray).recast(t.near),!(vl.containsPoint(lr.origin)===!1&&(lr.intersectSphere(vl,jd)===null||lr.origin.distanceToSquared(jd)>(t.far-t.near)**2))&&(Qd.copy(r).invert(),lr.copy(t.ray).applyMatrix4(Qd),!(n.boundingBox!==null&&lr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,lr)))}_computeIntersections(t,e,n){let i,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,f=r.groups,u=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,_=f.length;m<_;m++){let p=f[m],g=o[p.materialIndex],v=Math.max(p.start,u.start),E=Math.min(a.count,Math.min(p.start+p.count,u.start+u.count));for(let y=v,T=E;y<T;y+=3){let w=a.getX(y),x=a.getX(y+1),M=a.getX(y+2);i=wl(this,g,t,n,c,h,d,w,x,M),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{let m=Math.max(0,u.start),_=Math.min(a.count,u.start+u.count);for(let p=m,g=_;p<g;p+=3){let v=a.getX(p),E=a.getX(p+1),y=a.getX(p+2);i=wl(this,o,t,n,c,h,d,v,E,y),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,_=f.length;m<_;m++){let p=f[m],g=o[p.materialIndex],v=Math.max(p.start,u.start),E=Math.min(l.count,Math.min(p.start+p.count,u.start+u.count));for(let y=v,T=E;y<T;y+=3){let w=y,x=y+1,M=y+2;i=wl(this,g,t,n,c,h,d,w,x,M),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{let m=Math.max(0,u.start),_=Math.min(l.count,u.start+u.count);for(let p=m,g=_;p<g;p+=3){let v=p,E=p+1,y=p+2;i=wl(this,o,t,n,c,h,d,v,E,y),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}}};function a0(s,t,e,n,i,r,o,a){let l;if(t.side===gn?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,t.side===Vs,a),l===null)return null;Tl.copy(a),Tl.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(Tl);return c<e.near||c>e.far?null:{distance:c,point:Tl.clone(),object:s}}function wl(s,t,e,n,i,r,o,a,l,c){s.getVertexPosition(a,yl),s.getVertexPosition(l,Sl),s.getVertexPosition(c,Ml);let h=a0(s,t,e,n,yl,Sl,Ml,tp);if(h){let d=new V;Ns.getBarycoord(tp,yl,Sl,Ml,d),i&&(h.uv=Ns.getInterpolatedAttribute(i,a,l,c,d,new re)),r&&(h.uv1=Ns.getInterpolatedAttribute(r,a,l,c,d,new re)),o&&(h.normal=Ns.getInterpolatedAttribute(o,a,l,c,d,new V),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new V,materialIndex:0};Ns.getNormal(yl,Sl,Ml,f.normal),h.face=f,h.barycoord=d}return h}var jo=class extends qn{constructor(t=null,e=1,n=1,i,r,o,a,l,c=fn,h=fn,d,f){super(null,o,a,l,c,h,i,r,d,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ta=class extends Pi{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Yr=new ye,ep=new ye,El=[],np=new Vi,l0=new ye,Go=new $e,Ho=new Us,Os=class extends $e{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new ta(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,l0)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Vi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Yr),np.copy(t.boundingBox).applyMatrix4(Yr),this.boundingBox.union(np)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Us),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Yr),Ho.copy(t.boundingSphere).applyMatrix4(Yr),this.boundingSphere.union(Ho)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){let n=this.matrixWorld,i=this.count;if(Go.geometry=this.geometry,Go.material=this.material,Go.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ho.copy(this.boundingSphere),Ho.applyMatrix4(n),t.ray.intersectsSphere(Ho)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Yr),ep.multiplyMatrices(n,Yr),Go.matrixWorld=ep,Go.raycast(t,El);for(let o=0,a=El.length;o<a;o++){let l=El[o];l.instanceId=r,l.object=this,e.push(l)}El.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new ta(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new jo(new Float32Array(i*this.count),i,this.count,vc,xi));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=i*t;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},cr=new Us,c0=new re(.5,.5),Al=new V,Fs=class{constructor(t=new Ri,e=new Ri,n=new Ri,i=new Ri,r=new Ri,o=new Ri){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=_i,n=!1){let i=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],d=r[5],f=r[6],u=r[7],m=r[8],_=r[9],p=r[10],g=r[11],v=r[12],E=r[13],y=r[14],T=r[15];if(i[0].setComponents(c-o,u-h,g-m,T-v).normalize(),i[1].setComponents(c+o,u+h,g+m,T+v).normalize(),i[2].setComponents(c+a,u+d,g+_,T+E).normalize(),i[3].setComponents(c-a,u-d,g-_,T-E).normalize(),n)i[4].setComponents(l,f,p,y).normalize(),i[5].setComponents(c-l,u-f,g-p,T-y).normalize();else if(i[4].setComponents(c-l,u-f,g-p,T-y).normalize(),e===_i)i[5].setComponents(c+l,u+f,g+p,T+y).normalize();else if(e===jr)i[5].setComponents(l,f,p,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),cr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),cr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(cr)}intersectsSprite(t){cr.center.set(0,0,0);let e=c0.distanceTo(t.center);return cr.radius=.7071067811865476+e,cr.applyMatrix4(t.matrixWorld),this.intersectsSphere(cr)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(Al.x=i.normal.x>0?t.max.x:t.min.x,Al.y=i.normal.y>0?t.max.y:t.min.y,Al.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Al)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},ip=new ye,Jl=class s{constructor(){this.coordinateSystem=_i,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,n=this._frustums;for(let i=0;i<e.length;i++){let r=e[i];ip.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[i]===void 0&&(n[i]=new Fs),n[i].setFromProjectionMatrix(ip,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,n=t._frustums;for(let i=0;i<t._count;i++)e[i]===void 0&&(e[i]=new Fs),e[i].copy(n[i]);return this._count=t._count,this}clone(){return new s().copy(this)}};var ea=class extends qn{constructor(t=[],e=dr,n,i,r,o,a,l,c,h){super(t,e,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}};var us=class extends qn{constructor(t,e,n=Li,i,r,o,a=fn,l=fn,c,h=ls,d=1){if(h!==ls&&h!==ds)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:d};super(f,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new eo(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},na=class extends us{constructor(t,e=Li,n=dr,i,r,o=fn,a=fn,l,c=ls){let h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,n,i,r,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},ia=class extends qn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Gi=class s extends cs{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],d=[],f=0,u=0;m("z","y","x",-1,-1,n,e,t,o,r,0),m("z","y","x",1,-1,n,e,-t,o,r,1),m("x","z","y",1,1,t,n,e,i,o,2),m("x","z","y",1,-1,t,n,-e,i,o,3),m("x","y","z",1,-1,t,e,n,i,r,4),m("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new On(c,3)),this.setAttribute("normal",new On(h,3)),this.setAttribute("uv",new On(d,2));function m(_,p,g,v,E,y,T,w,x,M,P){let C=y/x,N=T/M,D=y/2,W=T/2,I=w/2,G=x+1,X=M+1,F=0,et=0,H=new V;for(let R=0;R<X;R++){let K=R*N-W;for(let yt=0;yt<G;yt++){let kt=yt*C-D;H[_]=kt*v,H[p]=K*E,H[g]=I,c.push(H.x,H.y,H.z),H[_]=0,H[p]=0,H[g]=w>0?1:-1,h.push(H.x,H.y,H.z),d.push(yt/x),d.push(1-R/M),F+=1}}for(let R=0;R<M;R++)for(let K=0;K<x;K++){let yt=f+K+G*R,kt=f+K+G*(R+1),Y=f+(K+1)+G*(R+1),ft=f+(K+1)+G*R;l.push(yt,kt,ft),l.push(kt,Y,ft),et+=6}a.addGroup(u,et,P),u+=et,f+=F}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var $l=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Vt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,i=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),i=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);let h=n[i],f=n[i+1]-h,u=(o-h)/f;return(i+u)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);let o=this.getPoint(i),a=this.getPoint(r),l=e||(o.isVector2?new re:new V);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new V,i=[],r=[],o=[],a=new V,l=new ye;for(let u=0;u<=t;u++){let m=u/t;i[u]=this.getTangentAt(m,new V)}r[0]=new V,o[0]=new V;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),d=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let u=1;u<=t;u++){if(r[u]=r[u-1].clone(),o[u]=o[u-1].clone(),a.crossVectors(i[u-1],i[u]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(se(i[u-1].dot(i[u]),-1,1));r[u].applyMatrix4(l.makeRotationAxis(a,m))}o[u].crossVectors(i[u],r[u])}if(e===!0){let u=Math.acos(se(r[0].dot(r[t]),-1,1));u/=t,i[0].dot(a.crossVectors(r[0],r[t]))>0&&(u=-u);for(let m=1;m<=t;m++)r[m].applyMatrix4(l.makeRotationAxis(i[m],u*m)),o[m].crossVectors(i[m],r[m])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}};function ef(){let s=0,t=0,e=0,n=0;function i(r,o,a,l){s=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,d){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,u=(a-o)/h-(l-o)/(h+d)+(l-a)/d;f*=h,u*=h,i(o,a,f,u)},calc:function(r){let o=r*r,a=o*r;return s+t*r+e*o+n*a}}}var sp=new V,rp=new V,xu=new ef,vu=new ef,yu=new ef,sa=class extends $l{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new V){let n=e,i=this.points,r=i.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%r]:(rp.subVectors(i[0],i[1]).add(i[0]),c=rp);let d=i[a%r],f=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(sp.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=sp),this.curveType==="centripetal"||this.curveType==="chordal"){let u=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(d),u),_=Math.pow(d.distanceToSquared(f),u),p=Math.pow(f.distanceToSquared(h),u);_<1e-4&&(_=1),m<1e-4&&(m=_),p<1e-4&&(p=_),xu.initNonuniformCatmullRom(c.x,d.x,f.x,h.x,m,_,p),vu.initNonuniformCatmullRom(c.y,d.y,f.y,h.y,m,_,p),yu.initNonuniformCatmullRom(c.z,d.z,f.z,h.z,m,_,p)}else this.curveType==="catmullrom"&&(xu.initCatmullRom(c.x,d.x,f.x,h.x,this.tension),vu.initCatmullRom(c.y,d.y,f.y,h.y,this.tension),yu.initCatmullRom(c.z,d.z,f.z,h.z,this.tension));return n.set(xu.calc(l),vu.calc(l),yu.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new V().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};var ra=class s extends cs{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,d=t/a,f=e/l,u=[],m=[],_=[],p=[];for(let g=0;g<h;g++){let v=g*f-o;for(let E=0;E<c;E++){let y=E*d-r;m.push(y,-v,0),_.push(0,0,1),p.push(E/a),p.push(1-g/l)}}for(let g=0;g<l;g++)for(let v=0;v<a;v++){let E=v+c*g,y=v+c*(g+1),T=v+1+c*(g+1),w=v+1+c*g;u.push(E,y,w),u.push(y,T,w)}this.setIndex(u),this.setAttribute("position",new On(m,3)),this.setAttribute("normal",new On(_,3)),this.setAttribute("uv",new On(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}};var oa=class s extends cs{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),i=Math.floor(i);let l=[],c=[],h=[],d=[],f=new V,u=new V,m=new V;for(let _=0;_<=n;_++){let p=o+_/n*a;for(let g=0;g<=i;g++){let v=g/i*r;u.x=(t+e*Math.cos(p))*Math.cos(v),u.y=(t+e*Math.cos(p))*Math.sin(v),u.z=e*Math.sin(p),c.push(u.x,u.y,u.z),f.x=t*Math.cos(v),f.y=t*Math.sin(v),m.subVectors(u,f).normalize(),h.push(m.x,m.y,m.z),d.push(g/i),d.push(_/n)}}for(let _=1;_<=n;_++)for(let p=1;p<=i;p++){let g=(i+1)*_+p-1,v=(i+1)*(_-1)+p-1,E=(i+1)*(_-1)+p,y=(i+1)*_+p;l.push(g,v,y),l.push(v,E,y)}this.setIndex(l),this.setAttribute("position",new On(c,3)),this.setAttribute("normal",new On(h,3)),this.setAttribute("uv",new On(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function mr(s){let t={};for(let e in s){t[e]={};for(let n in s[e]){let i=s[e][n];if(op(i))i.isRenderTargetTexture?(Vt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone();else if(Array.isArray(i))if(op(i[0])){let r=[];for(let o=0,a=i.length;o<a;o++)r[o]=i[o].clone();t[e][n]=r}else t[e][n]=i.slice();else t[e][n]=i}}return t}function An(s){let t={};for(let e=0;e<s.length;e++){let n=mr(s[e]);for(let i in n)t[i]=n[i]}return t}function op(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function h0(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function nf(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:le.workingColorSpace}var Qp={clone:mr,merge:An},u0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,f0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Hi=class extends hs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=u0,this.fragmentShader=f0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=mr(t.uniforms),this.uniformsGroups=h0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let i=t.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=e[i.value]||null;break;case"c":this.uniforms[n].value=new Jt().setHex(i.value);break;case"v2":this.uniforms[n].value=new re().fromArray(i.value);break;case"v3":this.uniforms[n].value=new V().fromArray(i.value);break;case"v4":this.uniforms[n].value=new Le().fromArray(i.value);break;case"m3":this.uniforms[n].value=new Wt().fromArray(i.value);break;case"m4":this.uniforms[n].value=new ye().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Kl=class extends Hi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Ii=class extends hs{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Jt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Jt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ta,this.normalScale=new re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new oi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var aa=class extends hs{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Jt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ta,this.normalScale=new re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new oi,this.combine=fc,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Ql=class extends hs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Fp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},jl=class extends hs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Zr(s,t){return!s||s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function Cl(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}var Bs=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=e[++n],t<i)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let o=0;o!==i;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},tc=class extends Bs{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:bu,endingEnd:bu}}intervalChanged_(t,e,n){let i=this.parameterPositions,r=t-2,o=t+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Tu:r=t,a=2*e-n;break;case wu:r=i.length-2,a=e+i[r]-i[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Tu:o=t,l=2*n-e;break;case wu:o=1,l=n+i[1]-i[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,u=this._weightNext,m=(n-e)/(i-e),_=m*m,p=_*m,g=-f*p+2*f*_-f*m,v=(1+f)*p+(-1.5-2*f)*_+(-.5+f)*m+1,E=(-1-u)*p+(1.5+u)*_+.5*m,y=u*p-u*_;for(let T=0;T!==a;++T)r[T]=g*o[h+T]+v*o[c+T]+E*o[l+T]+y*o[d+T];return r}},ec=class extends Bs{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(i-e),d=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*d+o[l+f]*h;return r}},nc=class extends Bs{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},ic=class extends Bs{interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this.inTangents,d=this.outTangents;if(!h||!d){let m=(n-e)/(i-e),_=1-m;for(let p=0;p!==a;++p)r[p]=o[c+p]*_+o[l+p]*m;return r}let f=a*2,u=t-1;for(let m=0;m!==a;++m){let _=o[c+m],p=o[l+m],g=u*f+m*2,v=d[g],E=d[g+1],y=t*f+m*2,T=h[y],w=h[y+1],x=p0(n,e,v,T,i);r[m]=jp(x,_,E,w,p)}return r}};function jp(s,t,e,n,i){let r=1-s;return r*r*r*t+3*r*r*s*e+3*r*s*s*n+s*s*s*i}function d0(s,t,e,n,i){let r=1-s;return 3*r*r*(e-t)+6*r*s*(n-e)+3*s*s*(i-n)}function p0(s,t,e,n,i){let r=(s-t)/(i-t);for(let o=0;o<8;o++){let a=jp(r,t,e,n,i)-s;if(Math.abs(a)<1e-10)break;let l=d0(r,t,e,n,i);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var ai=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Zr(e,this.TimeBufferType),this.values=Zr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Zr(t.times,Array),values:Zr(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i),Cl(t.settings)&&(n.settings={inTangents:Zr(t.settings.inTangents,Array),outTangents:Zr(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new nc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new ec(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new tc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new ic(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Xo:e=this.InterpolantFactoryMethodDiscrete;break;case Gl:e=this.InterpolantFactoryMethodLinear;break;case Il:e=this.InterpolantFactoryMethodSmooth;break;case Mu:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Vt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Xo;case this.InterpolantFactoryMethodLinear:return Gl;case this.InterpolantFactoryMethodSmooth:return Il;case this.InterpolantFactoryMethodBezier:return Mu}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t;Cl(this.settings)&&(ap(this.settings.inTangents,t),ap(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t;Cl(this.settings)&&(lp(this.settings.inTangents,t),lp(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Ht("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(Ht("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){Ht("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){Ht("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(i!==void 0&&V_(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){Ht("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Il,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(i)l=!0;else{let d=a*n,f=d-n,u=d+n;for(let m=0;m!==n;++m){let _=e[d+m];if(_!==e[f+m]||_!==e[u+m]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let d=a*n,f=o*n;for(let u=0;u!==n;++u)e[f+u]=e[d+u]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,Cl(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};function ap(s,t){for(let e=0,n=s.length;e!==n;e+=2)s[e]+=t}function lp(s,t){for(let e=0,n=s.length;e!==n;e+=2)s[e]*=t}ai.prototype.ValueTypeName="";ai.prototype.TimeBufferType=Float32Array;ai.prototype.ValueBufferType=Float32Array;ai.prototype.DefaultInterpolation=Gl;var zs=class extends ai{constructor(t,e,n){super(t,e,n)}};zs.prototype.ValueTypeName="bool";zs.prototype.ValueBufferType=Array;zs.prototype.DefaultInterpolation=Xo;zs.prototype.InterpolantFactoryMethodLinear=void 0;zs.prototype.InterpolantFactoryMethodSmooth=void 0;var sc=class extends ai{constructor(t,e,n,i){super(t,e,n,i)}};sc.prototype.ValueTypeName="color";var rc=class extends ai{constructor(t,e,n,i){super(t,e,n,i)}};rc.prototype.ValueTypeName="number";var oc=class extends Bs{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(i-e),c=t*a;for(let h=c+a;c!==h;c+=4)En.slerpFlat(r,0,o,c-a,o,c,l);return r}},la=class extends ai{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new oc(this.times,this.values,this.getValueSize(),t)}};la.prototype.ValueTypeName="quaternion";la.prototype.InterpolantFactoryMethodSmooth=void 0;var ks=class extends ai{constructor(t,e,n){super(t,e,n)}};ks.prototype.ValueTypeName="string";ks.prototype.ValueBufferType=Array;ks.prototype.DefaultInterpolation=Xo;ks.prototype.InterpolantFactoryMethodLinear=void 0;ks.prototype.InterpolantFactoryMethodSmooth=void 0;var ac=class extends ai{constructor(t,e,n,i){super(t,e,n,i)}};ac.prototype.ValueTypeName="vector";var lc=class{constructor(t,e,n){let i=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,f=c.length;d<f;d+=2){let u=c[d],m=c[d+1];if(u.global&&(u.lastIndex=0),u.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},tm=new lc,cc=class{constructor(t){this.manager=t!==void 0?t:tm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};cc.DEFAULT_MATERIAL_NAME="__DEFAULT";var io=class extends sn{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Jt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}};var Su=new ye,cp=new V,hp=new V,ca=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new re(512,512),this.mapType=Yn,this.map=null,this.mapPass=null,this.matrix=new ye,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Fs,this._frameExtents=new re(1,1),this._viewportCount=1,this._viewports=[new Le(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;cp.setFromMatrixPosition(t.matrixWorld),e.position.copy(cp),hp.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(hp),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,i){Su.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Su,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=i?i.z/r.x:1,a=i?i.w/r.y:1,l=i?i.x/r.x:0,c=i?i.y/r.y:0;t.coordinateSystem===jr||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(Su)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Rl=new V,Pl=new En,Bi=new V,ha=class extends sn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ye,this.projectionMatrix=new ye,this.projectionMatrixInverse=new ye,this.coordinateSystem=_i,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Rl,Pl,Bi),Bi.x===1&&Bi.y===1&&Bi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Rl,Pl,Bi.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Rl,Pl,Bi),Bi.x===1&&Bi.y===1&&Bi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Rl,Pl,Bi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ds=new V,up=new re,fp=new re,wn=class extends ha{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Hl*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Kh*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Hl*2*Math.atan(Math.tan(Kh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ds.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ds.x,Ds.y).multiplyScalar(-t/Ds.z),Ds.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ds.x,Ds.y).multiplyScalar(-t/Ds.z)}getViewSize(t,e){return this.getViewBounds(t,up,fp),e.subVectors(fp,up)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Kh*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Eu=class extends ca{constructor(){super(new wn(90,1,.5,500)),this.isPointLightShadow=!0}},ua=class extends io{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Eu}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},fa=class extends ha{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Au=class extends ca{constructor(){super(new fa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},so=class extends io{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(sn.DEFAULT_UP),this.updateMatrix(),this.target=new sn,this.shadow=new Au}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}},da=class extends io{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var Jr=-90,$r=1,ro=class extends sn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new wn(Jr,$r,t,e);i.layers=this.layers,this.add(i);let r=new wn(Jr,$r,t,e);r.layers=this.layers,this.add(r);let o=new wn(Jr,$r,t,e);o.layers=this.layers,this.add(o);let a=new wn(Jr,$r,t,e);a.layers=this.layers,this.add(a);let l=new wn(Jr,$r,t,e);l.layers=this.layers,this.add(l);let c=new wn(Jr,$r,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===_i)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===jr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),u=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(n,0,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.mipmapsAutoUpdate=_,t.setRenderTarget(n,5,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,f,u),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},hc=class extends wn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};var sf="\\[\\]\\.:\\/",m0=new RegExp("["+sf+"]","g"),rf="[^"+sf+"]",g0="[^"+sf.replace("\\.","")+"]",_0=/((?:WC+[\/:])*)/.source.replace("WC",rf),x0=/(WCOD+)?/.source.replace("WCOD",g0),v0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",rf),y0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",rf),S0=new RegExp("^"+_0+x0+v0+y0+"$"),M0=["material","materials","bones","map"],Cu=class{constructor(t,e,n){let i=n||Re.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Re=class s{constructor(t,e,n){this.path=e,this.parsedPath=n||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,n):new s(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(m0,"")}static parseTrackName(t){let e=S0.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);M0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Vt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Ht("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Ht("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Ht("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Ht("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Ht("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Ht("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Ht("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[i];if(o===void 0){let c=e.nodeName;Ht("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){Ht("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Ht("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Re.Composite=Cu;Re.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Re.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Re.prototype.GetterByBindingType=[Re.prototype._getValue_direct,Re.prototype._getValue_array,Re.prototype._getValue_arrayElement,Re.prototype._getValue_toArray];Re.prototype.SetterByBindingTypeAndVersioning=[[Re.prototype._setValue_direct,Re.prototype._setValue_direct_setNeedsUpdate,Re.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Re.prototype._setValue_array,Re.prototype._setValue_array_setNeedsUpdate,Re.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Re.prototype._setValue_arrayElement,Re.prototype._setValue_arrayElement_setNeedsUpdate,Re.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Re.prototype._setValue_fromArray,Re.prototype._setValue_fromArray_setNeedsUpdate,Re.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var RT=new Float32Array(1);var pa=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Vt("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};var uf=class uf{constructor(t,e,n,i){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,i){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=i,this}};uf.prototype.isMatrix2=!0;var Ru=uf;function of(s,t,e,n){let i=b0(n);switch(e){case Yu:return s*t;case vc:return s*t/i.components*i.byteLength;case yc:return s*t/i.components*i.byteLength;case Gs:return s*t*2/i.components*i.byteLength;case Sc:return s*t*2/i.components*i.byteLength;case Zu:return s*t*3/i.components*i.byteLength;case Ni:return s*t*4/i.components*i.byteLength;case Mc:return s*t*4/i.components*i.byteLength;case xa:case va:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case ya:case Sa:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Tc:case Ec:return Math.max(s,16)*Math.max(t,8)/4;case bc:case wc:return Math.max(s,8)*Math.max(t,8)/2;case Ac:case Cc:case Pc:case Ic:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Rc:case Ma:case Lc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Dc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Nc:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Uc:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Oc:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Fc:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Bc:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case zc:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case kc:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Vc:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Gc:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Hc:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Wc:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Xc:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case qc:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Yc:case Zc:case Jc:return Math.ceil(s/4)*Math.ceil(t/4)*16;case $c:case Kc:return Math.ceil(s/4)*Math.ceil(t/4)*8;case ba:case Qc:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function b0(s){switch(s){case Yn:case Hu:return{byteLength:1,components:1};case co:case Wu:case Di:return{byteLength:2,components:1};case _c:case xc:return{byteLength:2,components:4};case Li:case gc:case xi:return{byteLength:4,components:1};case Xu:case qu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window!="undefined"&&(window.__THREE__?Vt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function Mm(){let s=null,t=!1,e=null,n=null;function i(r,o){n=s.requestAnimationFrame(i),e(r,o)}return{start:function(){t!==!0&&e!==null&&s!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function w0(s){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,d=c.byteLength,f=s.createBuffer();s.bindBuffer(l,f),s.bufferData(l,c,h),a.onUploadCallback();let u;if(c instanceof Float32Array)u=s.FLOAT;else if(typeof Float16Array!="undefined"&&c instanceof Float16Array)u=s.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?u=s.HALF_FLOAT:u=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)u=s.SHORT;else if(c instanceof Uint32Array)u=s.UNSIGNED_INT;else if(c instanceof Int32Array)u=s.INT;else if(c instanceof Int8Array)u=s.BYTE;else if(c instanceof Uint8Array)u=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)u=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:u,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){let h=l.array,d=l.updateRanges;if(s.bindBuffer(c,a),d.length===0)s.bufferSubData(c,0,h);else{d.sort((u,m)=>u.start-m.start);let f=0;for(let u=1;u<d.length;u++){let m=d[f],_=d[u];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++f,d[f]=_)}d.length=f+1;for(let u=0,m=d.length;u<m;u++){let _=d[u];s.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(s.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}var E0=`#ifdef USE_ALPHAHASH
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
}`,$t={alphahash_fragment:E0,alphahash_pars_fragment:A0,alphamap_fragment:C0,alphamap_pars_fragment:R0,alphatest_fragment:P0,alphatest_pars_fragment:I0,aomap_fragment:L0,aomap_pars_fragment:D0,batching_pars_vertex:N0,batching_vertex:U0,begin_vertex:O0,beginnormal_vertex:F0,bsdfs:B0,iridescence_fragment:z0,bumpmap_pars_fragment:k0,clipping_planes_fragment:V0,clipping_planes_pars_fragment:G0,clipping_planes_pars_vertex:H0,clipping_planes_vertex:W0,color_fragment:X0,color_pars_fragment:q0,color_pars_vertex:Y0,color_vertex:Z0,common:J0,defaultnormal_vertex:$0,displacementmap_pars_vertex:K0,displacementmap_vertex:Q0,emissivemap_fragment:j0,emissivemap_pars_fragment:tx,colorspace_fragment:ex,colorspace_pars_fragment:nx,envmap_fragment:ix,envmap_common_pars_fragment:sx,envmap_pars_fragment:rx,envmap_pars_vertex:ox,envmap_physical_pars_fragment:_x,envmap_vertex:ax,fog_vertex:lx,fog_pars_vertex:cx,fog_fragment:hx,fog_pars_fragment:ux,gradientmap_pars_fragment:fx,lightmap_pars_fragment:dx,lights_lambert_fragment:px,lights_lambert_pars_fragment:mx,lights_pars_begin:gx,lights_toon_fragment:xx,lights_toon_pars_fragment:vx,lights_phong_fragment:yx,lights_phong_pars_fragment:Sx,lights_physical_fragment:Mx,lights_physical_pars_fragment:bx,lights_fragment_begin:Tx,lights_fragment_maps:wx,lights_fragment_end:Ex,lightprobes_pars_fragment:Ax,logdepthbuf_fragment:Cx,logdepthbuf_pars_fragment:Rx,logdepthbuf_pars_vertex:Px,logdepthbuf_vertex:Ix,map_fragment:Lx,map_pars_fragment:Dx,map_particle_fragment:Nx,map_particle_pars_fragment:Ux,metalnessmap_fragment:Ox,metalnessmap_pars_fragment:Fx,morphinstance_vertex:Bx,morphcolor_vertex:zx,morphnormal_vertex:kx,morphtarget_pars_vertex:Vx,morphtarget_vertex:Gx,normal_fragment_begin:Hx,normal_fragment_maps:Wx,normal_pars_fragment:Xx,normal_pars_vertex:qx,normal_vertex:Yx,normalmap_pars_fragment:Zx,clearcoat_normal_fragment_begin:Jx,clearcoat_normal_fragment_maps:$x,clearcoat_pars_fragment:Kx,iridescence_pars_fragment:Qx,opaque_fragment:jx,packing:tv,premultiplied_alpha_fragment:ev,project_vertex:nv,dithering_fragment:iv,dithering_pars_fragment:sv,roughnessmap_fragment:rv,roughnessmap_pars_fragment:ov,shadowmap_pars_fragment:av,shadowmap_pars_vertex:lv,shadowmap_vertex:cv,shadowmask_pars_fragment:hv,skinbase_vertex:uv,skinning_pars_vertex:fv,skinning_vertex:dv,skinnormal_vertex:pv,specularmap_fragment:mv,specularmap_pars_fragment:gv,tonemapping_fragment:_v,tonemapping_pars_fragment:xv,transmission_fragment:vv,transmission_pars_fragment:yv,uv_pars_fragment:Sv,uv_pars_vertex:Mv,uv_vertex:bv,worldpos_vertex:Tv,background_vert:wv,background_frag:Ev,backgroundCube_vert:Av,backgroundCube_frag:Cv,cube_vert:Rv,cube_frag:Pv,depth_vert:Iv,depth_frag:Lv,distance_vert:Dv,distance_frag:Nv,equirect_vert:Uv,equirect_frag:Ov,linedashed_vert:Fv,linedashed_frag:Bv,meshbasic_vert:zv,meshbasic_frag:kv,meshlambert_vert:Vv,meshlambert_frag:Gv,meshmatcap_vert:Hv,meshmatcap_frag:Wv,meshnormal_vert:Xv,meshnormal_frag:qv,meshphong_vert:Yv,meshphong_frag:Zv,meshphysical_vert:Jv,meshphysical_frag:$v,meshtoon_vert:Kv,meshtoon_frag:Qv,points_vert:jv,points_frag:ty,shadow_vert:ey,shadow_frag:ny,sprite_vert:iy,sprite_frag:sy},Tt={common:{diffuse:{value:new Jt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Wt}},envmap:{envMap:{value:null},envMapRotation:{value:new Wt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Wt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Wt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Wt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Wt},normalScale:{value:new re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Wt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Wt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Wt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Wt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Jt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Jt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0},uvTransform:{value:new Wt}},sprite:{diffuse:{value:new Jt(16777215)},opacity:{value:1},center:{value:new re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}}},Yi={basic:{uniforms:An([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.fog]),vertexShader:$t.meshbasic_vert,fragmentShader:$t.meshbasic_frag},lambert:{uniforms:An([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,Tt.lights,{emissive:{value:new Jt(0)},envMapIntensity:{value:1}}]),vertexShader:$t.meshlambert_vert,fragmentShader:$t.meshlambert_frag},phong:{uniforms:An([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,Tt.lights,{emissive:{value:new Jt(0)},specular:{value:new Jt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:$t.meshphong_vert,fragmentShader:$t.meshphong_frag},standard:{uniforms:An([Tt.common,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.roughnessmap,Tt.metalnessmap,Tt.fog,Tt.lights,{emissive:{value:new Jt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag},toon:{uniforms:An([Tt.common,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.gradientmap,Tt.fog,Tt.lights,{emissive:{value:new Jt(0)}}]),vertexShader:$t.meshtoon_vert,fragmentShader:$t.meshtoon_frag},matcap:{uniforms:An([Tt.common,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,{matcap:{value:null}}]),vertexShader:$t.meshmatcap_vert,fragmentShader:$t.meshmatcap_frag},points:{uniforms:An([Tt.points,Tt.fog]),vertexShader:$t.points_vert,fragmentShader:$t.points_frag},dashed:{uniforms:An([Tt.common,Tt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$t.linedashed_vert,fragmentShader:$t.linedashed_frag},depth:{uniforms:An([Tt.common,Tt.displacementmap]),vertexShader:$t.depth_vert,fragmentShader:$t.depth_frag},normal:{uniforms:An([Tt.common,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,{opacity:{value:1}}]),vertexShader:$t.meshnormal_vert,fragmentShader:$t.meshnormal_frag},sprite:{uniforms:An([Tt.sprite,Tt.fog]),vertexShader:$t.sprite_vert,fragmentShader:$t.sprite_frag},background:{uniforms:{uvTransform:{value:new Wt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$t.background_vert,fragmentShader:$t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Wt}},vertexShader:$t.backgroundCube_vert,fragmentShader:$t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$t.cube_vert,fragmentShader:$t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$t.equirect_vert,fragmentShader:$t.equirect_frag},distance:{uniforms:An([Tt.common,Tt.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$t.distance_vert,fragmentShader:$t.distance_frag},shadow:{uniforms:An([Tt.lights,Tt.fog,{color:{value:new Jt(0)},opacity:{value:1}}]),vertexShader:$t.shadow_vert,fragmentShader:$t.shadow_frag}};Yi.physical={uniforms:An([Yi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Wt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Wt},clearcoatNormalScale:{value:new re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Wt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Wt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Wt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Wt},sheen:{value:0},sheenColor:{value:new Jt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Wt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Wt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Wt},transmissionSamplerSize:{value:new re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Wt},attenuationDistance:{value:0},attenuationColor:{value:new Jt(0)},specularColor:{value:new Jt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Wt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Wt},anisotropyVector:{value:new re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Wt}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag};var th={r:0,b:0,g:0},ry=new ye,bm=new Wt;bm.set(-1,0,0,0,1,0,0,0,1);function oy(s,t,e,n,i,r){let o=new Jt(0),a=i===!0?0:1,l,c,h=null,d=0,f=null;function u(v){let E=v.isScene===!0?v.background:null;if(E&&E.isTexture){let y=v.backgroundBlurriness>0;E=t.get(E,y)}return E}function m(v){let E=!1,y=u(v);y===null?p(o,a):y&&y.isColor&&(p(y,1),E=!0);let T=s.xr.getEnvironmentBlendMode();T==="additive"?e.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(s.autoClear||E)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function _(v,E){let y=u(E);y&&y.isCubeTexture?(c===void 0&&(c=new $e(new Gi(1,1,1),new Hi({name:"BackgroundCubeMaterial",uniforms:mr(Yi.backgroundCube.uniforms),vertexShader:Yi.backgroundCube.vertexShader,fragmentShader:Yi.backgroundCube.fragmentShader,side:gn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,w,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(ry.makeRotationFromEuler(E.backgroundRotation)).transpose(),y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(bm),c.material.toneMapped=le.getTransfer(y.colorSpace)!==_e,(h!==y||d!==y.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,h=y,d=y.version,f=s.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new $e(new ra(2,2),new Hi({name:"BackgroundMaterial",uniforms:mr(Yi.background.uniforms),vertexShader:Yi.background.vertexShader,fragmentShader:Yi.background.fragmentShader,side:Vs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=le.getTransfer(y.colorSpace)!==_e,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||d!==y.version||f!==s.toneMapping)&&(l.material.needsUpdate=!0,h=y,d=y.version,f=s.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function p(v,E){v.getRGB(th,nf(s)),e.buffers.color.setClear(th.r,th.g,th.b,E,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(v,E=1){o.set(v),a=E,p(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(v){a=v,p(o,a)},render:m,addToRenderList:_,dispose:g}}function ay(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null),r=i,o=!1;function a(N,D,W,I,G){let X=!1,F=d(N,I,W,D);r!==F&&(r=F,c(r.object)),X=u(N,I,W,G),X&&m(N,I,W,G),G!==null&&t.update(G,s.ELEMENT_ARRAY_BUFFER),(X||o)&&(o=!1,y(N,D,W,I),G!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function l(){return s.createVertexArray()}function c(N){return s.bindVertexArray(N)}function h(N){return s.deleteVertexArray(N)}function d(N,D,W,I){let G=I.wireframe===!0,X=n[D.id];X===void 0&&(X={},n[D.id]=X);let F=N.isInstancedMesh===!0?N.id:0,et=X[F];et===void 0&&(et={},X[F]=et);let H=et[W.id];H===void 0&&(H={},et[W.id]=H);let R=H[G];return R===void 0&&(R=f(l()),H[G]=R),R}function f(N){let D=[],W=[],I=[];for(let G=0;G<e;G++)D[G]=0,W[G]=0,I[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:W,attributeDivisors:I,object:N,attributes:{},index:null}}function u(N,D,W,I){let G=r.attributes,X=D.attributes,F=0,et=W.getAttributes();for(let H in et)if(et[H].location>=0){let K=G[H],yt=X[H];if(yt===void 0&&(H==="instanceMatrix"&&N.instanceMatrix&&(yt=N.instanceMatrix),H==="instanceColor"&&N.instanceColor&&(yt=N.instanceColor)),K===void 0||K.attribute!==yt||yt&&K.data!==yt.data)return!0;F++}return r.attributesNum!==F||r.index!==I}function m(N,D,W,I){let G={},X=D.attributes,F=0,et=W.getAttributes();for(let H in et)if(et[H].location>=0){let K=X[H];K===void 0&&(H==="instanceMatrix"&&N.instanceMatrix&&(K=N.instanceMatrix),H==="instanceColor"&&N.instanceColor&&(K=N.instanceColor));let yt={};yt.attribute=K,K&&K.data&&(yt.data=K.data),G[H]=yt,F++}r.attributes=G,r.attributesNum=F,r.index=I}function _(){let N=r.newAttributes;for(let D=0,W=N.length;D<W;D++)N[D]=0}function p(N){g(N,0)}function g(N,D){let W=r.newAttributes,I=r.enabledAttributes,G=r.attributeDivisors;W[N]=1,I[N]===0&&(s.enableVertexAttribArray(N),I[N]=1),G[N]!==D&&(s.vertexAttribDivisor(N,D),G[N]=D)}function v(){let N=r.newAttributes,D=r.enabledAttributes;for(let W=0,I=D.length;W<I;W++)D[W]!==N[W]&&(s.disableVertexAttribArray(W),D[W]=0)}function E(N,D,W,I,G,X,F){F===!0?s.vertexAttribIPointer(N,D,W,G,X):s.vertexAttribPointer(N,D,W,I,G,X)}function y(N,D,W,I){_();let G=I.attributes,X=W.getAttributes(),F=D.defaultAttributeValues;for(let et in X){let H=X[et];if(H.location>=0){let R=G[et];if(R===void 0&&(et==="instanceMatrix"&&N.instanceMatrix&&(R=N.instanceMatrix),et==="instanceColor"&&N.instanceColor&&(R=N.instanceColor)),R!==void 0){let K=R.normalized,yt=R.itemSize,kt=t.get(R);if(kt===void 0)continue;let Y=kt.buffer,ft=kt.type,xt=kt.bytesPerElement,Mt=ft===s.INT||ft===s.UNSIGNED_INT||R.gpuType===gc;if(R.isInterleavedBufferAttribute){let dt=R.data,Rt=dt.isInterleavedBuffer===!0?dt.stride:dt.itemSize,de=R.offset;if(dt.isInstancedInterleavedBuffer||dt.isInstancedBufferAttribute){for(let Ct=0;Ct<H.locationSize;Ct++)g(H.location+Ct,dt.meshPerAttribute);N.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=dt.meshPerAttribute*dt.count)}else for(let Ct=0;Ct<H.locationSize;Ct++)p(H.location+Ct);s.bindBuffer(s.ARRAY_BUFFER,Y);for(let Ct=0;Ct<H.locationSize;Ct++)E(H.location+Ct,yt/H.locationSize,ft,K,Rt*xt,(de+yt/H.locationSize*Ct)*xt,Mt)}else{if(R.isInstancedBufferAttribute){for(let dt=0;dt<H.locationSize;dt++)g(H.location+dt,R.meshPerAttribute);N.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=R.meshPerAttribute*R.count)}else for(let dt=0;dt<H.locationSize;dt++)p(H.location+dt);s.bindBuffer(s.ARRAY_BUFFER,Y);for(let dt=0;dt<H.locationSize;dt++)E(H.location+dt,yt/H.locationSize,ft,K,yt*xt,yt/H.locationSize*dt*xt,Mt)}}else if(F!==void 0){let K=F[et];if(K!==void 0)switch(K.length){case 2:s.vertexAttrib2fv(H.location,K);break;case 3:s.vertexAttrib3fv(H.location,K);break;case 4:s.vertexAttrib4fv(H.location,K);break;default:s.vertexAttrib1fv(H.location,K)}}}}v()}function T(){P();for(let N in n){let D=n[N];for(let W in D){let I=D[W];for(let G in I){let X=I[G];for(let F in X)h(X[F].object),delete X[F];delete I[G]}}delete n[N]}}function w(N){if(n[N.id]===void 0)return;let D=n[N.id];for(let W in D){let I=D[W];for(let G in I){let X=I[G];for(let F in X)h(X[F].object),delete X[F];delete I[G]}}delete n[N.id]}function x(N){for(let D in n){let W=n[D];for(let I in W){let G=W[I];if(G[N.id]===void 0)continue;let X=G[N.id];for(let F in X)h(X[F].object),delete X[F];delete G[N.id]}}}function M(N){for(let D in n){let W=n[D],I=N.isInstancedMesh===!0?N.id:0,G=W[I];if(G!==void 0){for(let X in G){let F=G[X];for(let et in F)h(F[et].object),delete F[et];delete G[X]}delete W[I],Object.keys(W).length===0&&delete n[D]}}}function P(){C(),o=!0,r!==i&&(r=i,c(r.object))}function C(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:P,resetDefaultState:C,dispose:T,releaseStatesOfGeometry:w,releaseStatesOfObject:M,releaseStatesOfProgram:x,initAttributes:_,enableAttribute:p,disableUnusedAttributes:v}}function ly(s,t,e){let n;function i(l){n=l}function r(l,c){s.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,h){h!==0&&(s.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let f=0;for(let u=0;u<h;u++)f+=c[u];e.update(f,n,1)}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function cy(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let x=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(x){return!(x!==Ni&&n.convert(x)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(x){let M=x===Di&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(x!==Yn&&x!==xi&&!M&&n.convert(x)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function l(x){if(x==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Vt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),f=e.logarithmicDepthBuffer===!0&&d===!1;e.reversedDepthBuffer===!0&&d===!1&&Vt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&d===!0&&Vt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let u=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),p=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),v=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),E=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),T=s.getParameter(s.MAX_SAMPLES),w=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:u,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:p,maxAttributes:g,maxVertexUniforms:v,maxVaryings:E,maxFragmentUniforms:y,maxSamples:T,samples:w}}function hy(s){let t=this,e=null,n=0,i=!1,r=!1,o=new Ri,a=new Wt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let u=d.length!==0||f||n!==0||i;return i=f,n=d.length,u},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){e=h(d,f,0)},this.setState=function(d,f,u){let m=d.clippingPlanes,_=d.clipIntersection,p=d.clipShadows,g=s.get(d);if(!i||m===null||m.length===0||r&&!p)r?h(null):c();else{let v=r?0:n,E=v*4,y=g.clippingState||null;l.value=y,y=h(m,f,E,u);for(let T=0;T!==E;++T)y[T]=e[T];g.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,f,u,m){let _=d!==null?d.length:0,p=null;if(_!==0){if(p=l.value,m!==!0||p===null){let g=u+_*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(p===null||p.length<g)&&(p=new Float32Array(g));for(let E=0,y=u;E!==_;++E,y+=4)o.copy(d[E]).applyMatrix4(v,a),o.normal.toArray(p,y),p[y+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,p}}var Ca=class extends ri{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new ea(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Gi(5,5,5),r=new Hi({name:"CubemapFromEquirect",uniforms:mr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:gn,blending:ur});r.uniforms.tEquirect.value=e;let o=new $e(i,r),a=e.minFilter;return e.minFilter===fs&&(e.minFilter=Fn),new ro(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}},em=256,uy=3,fy=20,Tm=256,wm=16,dy=3,py=new V,my=new Jt,uo=class s{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new ro(1,10,null),this._boxMesh=new $e(new Gi(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,i=100,r={}){let{size:o=256,position:a=py}=r,l=this._renderer;this._setSize(o);let c=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);let d=l.autoClear,f=l.autoClearColor,u=l.autoClearDepth,m=l.autoClearStencil,_=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,_===null&&(t.background=l.getClearColor(my));let p=new ro(n,i,h);return p.position.copy(a),p.update(l,t),l.autoClear=d,l.autoClearColor=f,l.autoClearDepth=u,l.autoClearStencil=m,t.background=_,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=sm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=im(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(em,$p(t))}_fromTexture(t,e){t.mapping===dr||t.mapping===lo?this._setSize(t.image.length===0?em:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){let t=this._cubeSize,e=nm(t,!1,!1),n=Math.log2(t)-uy;for(let i=0;i<=n;i++)e.texture.mipmaps.push({width:t>>i,height:t>>i});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=nm(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){let i=this._boxMesh,r=this._cubeCamera;i.material=n,r.renderTarget=t,r.activeMipmapLevel=e;let o=t.width>>e;t.viewport.set(0,0,o,o),r.update(this._renderer,i),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===dr||t.mapping===lo?(this._cubemapMaterial===null&&(this._cubemapMaterial=sm()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=im()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=gy(),this._integrationMaterial=_y());let e=this._cubeSize,n=t.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/wm);for(let o=0;o<=n;o++){let a=s.lodToRoughness(o,n);if(o>n-dy)r.roughness.value=a,this._renderCube(t,o,this._integrationMaterial);else{let l=a>0?Math.log2(e)+.5*Math.log2(6/(Tm*Math.pow(a,4)))+.5:0;i.roughness.value=a,i.lodBias.value=l,this._renderCube(t,o,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=xy());let n=this._blurMaterial,i=n.uniforms,r=this._sourceTarget;i.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,i.envMap.value=r.texture,this._renderCube(t,0,n),i.envMap.value=t.texture,this._renderCube(r,0,n)}};function nm(s,t,e){return new Ca(s,{minFilter:fs,generateMipmaps:t,type:Di,colorSpace:qo,depthBuffer:e})}function Ra(s,t,e){return new Hi({name:s,uniforms:t,vertexShader:$t.cube_vert,fragmentShader:e,side:gn,blending:ur,depthTest:!1,depthWrite:!1})}function gy(){return Ra("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Tm}u

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
	`)}function _y(){return Ra("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:wm}},`

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
	`)}function xy(){return Ra("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

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
	`)}function im(){return Ra("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function sm(){return Ra("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function vy(s){let t=new WeakMap,e=new WeakMap,n=null;function i(f,u=!1){return f==null?null:u?o(f):r(f)}function r(f){if(f&&f.isTexture){let u=f.mapping;if(u===dc||u===pc)if(t.has(f)){let m=t.get(f).texture;return a(m,f.mapping)}else{let m=f.image;if(m&&m.height>0){let _=new Ca(m.height);return _.fromEquirectangularTexture(s,f),t.set(f,_),f.addEventListener("dispose",c),a(_.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){let u=f.mapping,m=u===dc||u===pc,_=u===dr||u===lo;if(m||_){let p=e.get(f),g=p!==void 0?p.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==g)return n===null&&(n=new uo(s)),p=m?n.fromEquirectangular(f,p):n.fromCubemap(f,p),p.texture.pmremVersion=f.pmremVersion,e.set(f,p),p.texture;if(p!==void 0)return p.texture;{let v=f.image;return m&&v&&v.height>0||_&&v&&l(v)?(n===null&&(n=new uo(s)),p=m?n.fromEquirectangular(f):n.fromCubemap(f),p.texture.pmremVersion=f.pmremVersion,e.set(f,p),f.addEventListener("dispose",h),p.texture):null}}}return f}function a(f,u){return u===dc?f.mapping=dr:u===pc&&(f.mapping=lo),f}function l(f){let u=0,m=6;for(let _=0;_<m;_++)f[_]!==void 0&&u++;return u===m}function c(f){let u=f.target;u.removeEventListener("dispose",c);let m=t.get(u);m!==void 0&&(t.delete(u),m.dispose())}function h(f){let u=f.target;u.removeEventListener("dispose",h);let m=e.get(u);m!==void 0&&(e.delete(u),m.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:d}}function yy(s){let t={};function e(n){if(t[n]!==void 0)return t[n];let i=s.getExtension(n);return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&Wo("WebGLRenderer: "+n+" extension not supported."),i}}}function Sy(s,t,e,n){let i={},r=new WeakMap,o=new FinalizationRegistry(m=>delete i[m]);function a(m){l(m.target)}function l(m){m.index!==null&&t.remove(m.index);for(let p in m.attributes)t.remove(m.attributes[p]);m.removeEventListener("dispose",a),delete i[m.id],o.unregister(m);let _=r.get(m);_&&(t.remove(_),r.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,e.memory.geometries--}function c(m,_){return i[_.id]!==void 0||(_.addEventListener("dispose",a),i[_.id]=new WeakRef(_),o.register(_,_.id,_),e.memory.geometries++),_}function h(m){let _=m.attributes;for(let p in _)t.update(_[p],s.ARRAY_BUFFER)}function d(m){let _=m.index,p=m.attributes.position,g=0;if(p===void 0)return;let v=_!==null?_.array.length:p.array.length/3-1,E=p.count>=65535?Qo:Ko,y=new E(Math.ceil(v/3)*6,1),T=y.array;if(_!==null){let x=_.array;g=_.version;for(let M=0,P=0;M<v;M+=3){let C=x[M+0],N=x[M+1],D=x[M+2];T[P++]=C,T[P++]=N,T[P++]=N,T[P++]=D,T[P++]=D,T[P++]=C}}else{g=p.version;for(let x=0,M=0;x<v;x+=3){let P=x+0,C=x+1,N=x+2;T[M++]=P,T[M++]=C,T[M++]=C,T[M++]=N,T[M++]=N,T[M++]=P}}y.version=g;let w=r.get(m);w&&t.remove(w),r.set(m,y)}function f(m){let _=r.get(m);if(_){let p=m.index;p!==null&&_.version<p.version&&d(m)}else d(m);return r.get(m)}function u(){for(let m in i){let _=i[m].deref();_!==void 0&&l(_)}}return{get:c,update:h,getWireframeAttribute:f,dispose:u}}function My(s,t,e){let n;function i(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){s.drawElements(n,f,r,d*o),e.update(f,n,1)}function c(d,f,u){u!==0&&(s.drawElementsInstanced(n,f,r,d*o,u),e.update(f,n,u))}function h(d,f,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,u);let _=0;for(let p=0;p<u;p++)_+=f[p];e.update(_,n,1)}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function by(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:Ht("WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Ty(s,t,e){let n=new WeakMap,i=new Le;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,f=n.get(a);if(f===void 0||f.count!==d){let P=function(){x.dispose(),n.delete(a),a.removeEventListener("dispose",P)};f!==void 0&&f.texture.dispose();let u=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],E=0;u===!0&&(E=1),m===!0&&(E=2),_===!0&&(E=3);let y=a.attributes.position.count*E,T=1;y>t.maxTextureSize&&(T=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let w=new Float32Array(y*T*4*d),x=new Jo(w,y,T,d);x.type=xi,x.needsUpdate=!0;let M=E*4;for(let C=0;C<d;C++){let N=p[C],D=g[C],W=v[C],I=y*T*4*C;for(let G=0;G<N.count;G++){let X=G*M;u===!0&&(i.fromBufferAttribute(N,G),w[I+X+0]=i.x,w[I+X+1]=i.y,w[I+X+2]=i.z,w[I+X+3]=0),m===!0&&(i.fromBufferAttribute(D,G),w[I+X+4]=i.x,w[I+X+5]=i.y,w[I+X+6]=i.z,w[I+X+7]=0),_===!0&&(i.fromBufferAttribute(W,G),w[I+X+8]=i.x,w[I+X+9]=i.y,w[I+X+10]=i.z,w[I+X+11]=W.itemSize===4?i.w:1)}}f={count:d,texture:x,size:new re(y,T)},n.set(a,f),a.addEventListener("dispose",P)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let u=0;for(let _=0;_<c.length;_++)u+=c[_];let m=a.morphTargetsRelative?1:1-u;l.getUniforms().setValue(s,"morphTargetBaseInfluence",m),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function wy(s,t,e,n,i){let r=new WeakMap;function o(c){let h=i.render.frame,d=c.geometry,f=t.get(c,d);if(r.get(f)!==h&&(t.update(f),r.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let u=c.skeleton;r.get(u)!==h&&(u.update(),r.set(u,h))}return f}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}var Ey={[Ou]:"LINEAR_TONE_MAPPING",[Fu]:"REINHARD_TONE_MAPPING",[Bu]:"CINEON_TONE_MAPPING",[ga]:"ACES_FILMIC_TONE_MAPPING",[ku]:"AGX_TONE_MAPPING",[Vu]:"NEUTRAL_TONE_MAPPING",[zu]:"CUSTOM_TONE_MAPPING"};function Ay(s,t,e,n,i,r){let o=new ri(t,e,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,h=new cs;h.setAttribute("position",new On([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new On([0,2,0,0,2,0],2));let d=new Kl({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new $e(h,d),u=new fa(-1,1,1,-1,0,1),m=null,_=null,p=!1,g,v=null,E=[],y=!1;this.setSize=function(T,w){o.setSize(T,w),a!==null&&a.setSize(T,w),l!==null&&l.setSize(T,w);for(let x=0;x<E.length;x++){let M=E[x];M.setSize&&M.setSize(T,w)}},this.setEffects=function(T){E=T,y=E.length>0&&E[0].isRenderPass===!0;let w=o.width,x=o.height;E.length>0&&a===null&&(a=new ri(w,x,{type:Di,depthBuffer:!1,stencilBuffer:!1}),l=new ri(w,x,{type:Di,depthBuffer:!1,stencilBuffer:!1}));let M=i===!0&&E.some(P=>P.needsDepthTexture===!0);M!==(o.depthTexture!==null)&&(M===!0&&c===null&&(c=new us(w,x),r===!0&&(c.format=ds,c.type=pr)),o.dispose(),o.depthTexture=M?c:null,o.resolveDepthBuffer=M,o.storeMultisampledDepthBuffer=M);for(let P=0;P<E.length;P++){let C=E[P];C.setSize&&C.setSize(w,x),M&&C.needsDepthTexture===!0&&C.setDepthTexture&&C.setDepthTexture(c)}},this.begin=function(T,w){if(p||T.toneMapping===Xi&&E.length===0)return!1;if(v=w,w!==null){let x=w.width,M=w.height;(o.width!==x||o.height!==M)&&this.setSize(x,M)}return y===!1&&T.setRenderTarget(o),g=T.toneMapping,T.toneMapping=Xi,!0},this.hasRenderPass=function(){return y},this.end=function(T,w){T.toneMapping=g,p=!0;let x=o,M=a;for(let P=0;P<E.length;P++){let C=E[P];C.enabled!==!1&&(C.render(T,M,x,w),C.needsSwap!==!1&&(x=M,M=M===a?l:a))}if(m!==T.outputColorSpace||_!==T.toneMapping){m=T.outputColorSpace,_=T.toneMapping,d.defines={},le.getTransfer(m)===_e&&(d.defines.SRGB_TRANSFER="");let P=Ey[_];P&&(d.defines[P]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=x.texture,T.setRenderTarget(v),T.render(f,u),v=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),h.dispose(),d.dispose()}}var Em=new qn,Am=new us(1,1),Cm=new na(1),Rm=new Jo,Pm=new ql,Im=new ea,rm=[],om=[],am=new Float32Array(16),lm=new Float32Array(9),cm=new Float32Array(4);function fo(s,t,e){let n=s[0];if(n<=0||n>0)return s;let i=t*e,r=rm[i];if(r===void 0&&(r=new Float32Array(i),rm[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function rn(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function on(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function ih(s,t){let e=om[t];e===void 0&&(e=new Int32Array(t),om[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function Cy(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Ry(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(rn(e,t))return;s.uniform2fv(this.addr,t),on(e,t)}}function Py(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(rn(e,t))return;s.uniform3fv(this.addr,t),on(e,t)}}function Iy(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(rn(e,t))return;s.uniform4fv(this.addr,t),on(e,t)}}function Ly(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(rn(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),on(e,t)}else{if(rn(e,n))return;cm.set(n),s.uniformMatrix2fv(this.addr,!1,cm),on(e,n)}}function Dy(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(rn(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),on(e,t)}else{if(rn(e,n))return;lm.set(n),s.uniformMatrix3fv(this.addr,!1,lm),on(e,n)}}function Ny(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(rn(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),on(e,t)}else{if(rn(e,n))return;am.set(n),s.uniformMatrix4fv(this.addr,!1,am),on(e,n)}}function Uy(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Oy(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(rn(e,t))return;s.uniform2iv(this.addr,t),on(e,t)}}function Fy(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(rn(e,t))return;s.uniform3iv(this.addr,t),on(e,t)}}function By(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(rn(e,t))return;s.uniform4iv(this.addr,t),on(e,t)}}function zy(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function ky(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(rn(e,t))return;s.uniform2uiv(this.addr,t),on(e,t)}}function Vy(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(rn(e,t))return;s.uniform3uiv(this.addr,t),on(e,t)}}function Gy(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(rn(e,t))return;s.uniform4uiv(this.addr,t),on(e,t)}}function sh(s){return s.version===0&&(s.compareFunction=Ku,s.needsUpdate=!0),s}function Hy(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?r=sh(Am):r=Em,e.setTexture2D(t||r,i)}function Wy(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Pm,i)}function Xy(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_CUBE_SHADOW?r=sh(Cm):r=Im,e.setTextureCube(t||r,i)}function qy(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Rm,i)}function Yy(s){switch(s){case 5126:return Cy;case 35664:return Ry;case 35665:return Py;case 35666:return Iy;case 35674:return Ly;case 35675:return Dy;case 35676:return Ny;case 5124:case 35670:return Uy;case 35667:case 35671:return Oy;case 35668:case 35672:return Fy;case 35669:case 35673:return By;case 5125:return zy;case 36294:return ky;case 36295:return Vy;case 36296:return Gy;case 35678:case 36198:case 36298:case 36306:case 35682:return Hy;case 35679:case 36299:case 36307:return Wy;case 35680:case 36300:case 36308:case 36293:return Xy;case 36289:case 36303:case 36311:case 36292:return qy}}function Zy(s,t){s.uniform1fv(this.addr,t)}function Jy(s,t){let e=fo(t,this.size,2);s.uniform2fv(this.addr,e)}function $y(s,t){let e=fo(t,this.size,3);s.uniform3fv(this.addr,e)}function Ky(s,t){let e=fo(t,this.size,4);s.uniform4fv(this.addr,e)}function Qy(s,t){let e=fo(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function jy(s,t){let e=fo(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function tS(s,t){let e=fo(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function eS(s,t){s.uniform1iv(this.addr,t)}function nS(s,t){s.uniform2iv(this.addr,t)}function iS(s,t){s.uniform3iv(this.addr,t)}function sS(s,t){s.uniform4iv(this.addr,t)}function rS(s,t){s.uniform1uiv(this.addr,t)}function oS(s,t){s.uniform2uiv(this.addr,t)}function aS(s,t){s.uniform3uiv(this.addr,t)}function lS(s,t){s.uniform4uiv(this.addr,t)}function cS(s,t,e){let n=this.cache,i=t.length,r=ih(e,i);rn(n,r)||(s.uniform1iv(this.addr,r),on(n,r));let o;this.type===s.SAMPLER_2D_SHADOW?o=sh(Am):o=Em;for(let a=0;a!==i;++a)e.setTexture2D(t[a]||o,r[a])}function hS(s,t,e){let n=this.cache,i=t.length,r=ih(e,i);rn(n,r)||(s.uniform1iv(this.addr,r),on(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||Pm,r[o])}function uS(s,t,e){let n=this.cache,i=t.length,r=ih(e,i);rn(n,r)||(s.uniform1iv(this.addr,r),on(n,r));let o;this.type===s.SAMPLER_CUBE_SHADOW?o=sh(Cm):o=Im;for(let a=0;a!==i;++a)e.setTextureCube(t[a]||o,r[a])}function fS(s,t,e){let n=this.cache,i=t.length,r=ih(e,i);rn(n,r)||(s.uniform1iv(this.addr,r),on(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||Rm,r[o])}function dS(s){switch(s){case 5126:return Zy;case 35664:return Jy;case 35665:return $y;case 35666:return Ky;case 35674:return Qy;case 35675:return jy;case 35676:return tS;case 5124:case 35670:return eS;case 35667:case 35671:return nS;case 35668:case 35672:return iS;case 35669:case 35673:return sS;case 5125:return rS;case 36294:return oS;case 36295:return aS;case 36296:return lS;case 35678:case 36198:case 36298:case 36306:case 35682:return cS;case 35679:case 36299:case 36307:return hS;case 35680:case 36300:case 36308:case 36293:return uS;case 36289:case 36303:case 36311:case 36292:return fS}}var pf=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Yy(e.type)}},mf=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=dS(e.type)}},gf=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(t,e[a.id],n)}}},ff=/(\w+)(\])?(\[|\.)?/g;function hm(s,t){s.seq.push(t),s.map[t.id]=t}function pS(s,t,e){let n=s.name,i=n.length;for(ff.lastIndex=0;;){let r=ff.exec(n),o=ff.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){hm(e,c===void 0?new pf(a,s,t):new mf(a,s,t));break}else{let d=e.map[a];d===void 0&&(d=new gf(a),hm(e,d)),e=d}}}var ho=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);pS(a,l,this)}let i=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(o):r.push(o);i.length>0&&(this.seq=i.concat(r))}setValue(t,e,n,i){let r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,r=t.length;i!==r;++i){let o=t[i];o.id in e&&n.push(o)}return n}};function um(s,t,e){let n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}var mS=37297,gS=0;function _S(s,t){let e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var fm=new Wt;function xS(s){le._getMatrix(fm,le.workingColorSpace,s);let t=`mat3( ${fm.elements.map(e=>e.toFixed(4))} )`;switch(le.getTransfer(s)){case Yo:return[t,"LinearTransferOETF"];case _e:return[t,"sRGBTransferOETF"];default:return Vt("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function dm(s,t,e){let n=s.getShaderParameter(t,s.COMPILE_STATUS),r=(s.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+_S(s.getShaderSource(t),a)}else return r}function vS(s,t){let e=xS(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var yS={[Ou]:"Linear",[Fu]:"Reinhard",[Bu]:"Cineon",[ga]:"ACESFilmic",[ku]:"AgX",[Vu]:"Neutral",[zu]:"Custom"};function SS(s,t){let e=yS[t];return e===void 0?(Vt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var eh=new V;function MS(){le.getLuminanceCoefficients(eh);let s=eh.x.toFixed(4),t=eh.y.toFixed(4),e=eh.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function bS(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Aa).join(`
`)}function TS(s){let t=[];for(let e in s){let n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function wS(s,t){let e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(t,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function Aa(s){return s!==""}function pm(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function mm(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var ES=/^[ \t]*#include +<([\w\d./]+)>/gm;function _f(s){return s.replace(ES,AS)}function AS(s,t){let e=$t[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return _f(e)}var CS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function gm(s){return s.replace(CS,RS)}function RS(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function _m(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}var PS={[ma]:"SHADOWMAP_TYPE_PCF",[oo]:"SHADOWMAP_TYPE_VSM"};function IS(s){return PS[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var LS={[lo]:"ENVMAP_MODE_REFRACTION"};function DS(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":LS[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}var NS={[fc]:"ENVMAP_BLENDING_MULTIPLY",[Np]:"ENVMAP_BLENDING_MIX",[Up]:"ENVMAP_BLENDING_ADD"};function US(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":NS[s.combine]||"ENVMAP_BLENDING_NONE"}function OS(s,t,e,n){let i=s.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=IS(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=DS(e),d=US(e),f=bS(e),u=TS(r),m=i.createProgram(),_,p,g=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(_=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u].filter(Aa).join(`
`),_.length>0&&(_+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u].filter(Aa).join(`
`),p.length>0&&(p+=`
`)):(_=[_m(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Aa).join(`
`),p=[_m(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Xi?"#define TONE_MAPPING":"",e.toneMapping!==Xi?$t.tonemapping_pars_fragment:"",e.toneMapping!==Xi?SS("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",$t.colorspace_pars_fragment,vS("linearToOutputTexel",e.outputColorSpace),MS(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Aa).join(`
`)),o=_f(o),o=pm(o,e),o=mm(o,e),a=_f(a),a=pm(a,e),a=mm(a,e),o=gm(o),a=gm(a),e.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,_=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,p=["#define varying in",e.glslVersion===Qu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Qu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let v=g+_+o,E=g+p+a,y=um(i,i.VERTEX_SHADER,v),T=um(i,i.FRAGMENT_SHADER,E);i.attachShader(m,y),i.attachShader(m,T),e.index0AttributeName!==void 0?i.bindAttribLocation(m,0,e.index0AttributeName):e.hasPositionAttribute===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m);function w(C){if(s.debug.checkShaderErrors){let N=i.getProgramInfoLog(m)||"",D=i.getShaderInfoLog(y)||"",W=i.getShaderInfoLog(T)||"",I=N.trim(),G=D.trim(),X=W.trim(),F=!0,et=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(F=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,m,y,T);else{let H=dm(i,y,"vertex"),R=dm(i,T,"fragment");Ht("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+I+`
`+H+`
`+R)}else I!==""?Vt("WebGLProgram: Program Info Log:",I):(G===""||X==="")&&(et=!1);et&&(C.diagnostics={runnable:F,programLog:I,vertexShader:{log:G,prefix:_},fragmentShader:{log:X,prefix:p}})}i.deleteShader(y),i.deleteShader(T),x=new ho(i,m),M=wS(i,m)}let x;this.getUniforms=function(){return x===void 0&&w(this),x};let M;this.getAttributes=function(){return M===void 0&&w(this),M};let P=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=i.getProgramParameter(m,mS)),P},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=gS++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=y,this.fragmentShader=T,this}var FS=0,xf=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let i=this._getShaderCacheForMaterial(t);return i.has(e)===!1&&(i.add(e),e.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new vf(t),e.set(t,n)),n}},vf=class{constructor(t){this.id=FS++,this.code=t,this.usedTimes=0}};function BS(s){return s===Gs||s===Ma||s===ba}function zS(s,t,e,n,i,r){let o=new $o,a=new xf,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function u(x){return l.add(x),x===0?"uv":`uv${x}`}function m(x,M,P,C,N,D){let W=C.fog,I=N.geometry,G=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?C.environment:null,X=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,F=t.get(x.envMap||G,X),et=f[x.type],H=n.precision;x.precision!==null&&(H=n.getMaxPrecision(x.precision),H!==x.precision&&Vt("WebGLProgram.getParameters:",x.precision,"not supported, using",H,"instead."));let R=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,K=R!==void 0?R.length:0,yt=0;I.morphAttributes.position!==void 0&&(yt=1),I.morphAttributes.normal!==void 0&&(yt=2),I.morphAttributes.color!==void 0&&(yt=3);let kt,Y,ft,xt;if(et){let rt=Yi[et];kt=rt.vertexShader,Y=rt.fragmentShader}else{kt=x.vertexShader,Y=x.fragmentShader;let rt=a.getVertexShaderStage(x),Et=a.getFragmentShaderStage(x);a.update(x,rt,Et),ft=rt.id,xt=Et.id}let Mt=s.getRenderTarget(),dt=s.state.buffers.depth.getReversed(),Rt=N.isInstancedMesh===!0,de=N.isBatchedMesh===!0,Ct=!!x.map,Gt=!!x.matcap,Lt=!!F,Ft=Lt&&F.isPMREMTexture===!0,Qt=!!x.aoMap,he=!!x.lightMap,Z=!!x.bumpMap&&x.wireframe===!1,jt=!!x.normalMap,ze=!!x.displacementMap,me=!!x.emissiveMap,ne=!!x.metalnessMap,Ce=!!x.roughnessMap,Me=x.anisotropy>0,O=x.clearcoat>0,ue=x.diffuseRoughness>0,bt=x.dispersion>0,Nt=x.retroreflectivity>0,ot=x.iridescence>0,Xt=x.sheen>0,wt=x.transmission>0,Pt=Me&&!!x.anisotropyMap,A=O&&!!x.clearcoatMap,S=O&&!!x.clearcoatNormalMap,B=O&&!!x.clearcoatRoughnessMap,at=ue&&!!x.diffuseRoughnessMap,nt=ot&&!!x.iridescenceMap,ut=ot&&!!x.iridescenceThicknessMap,Q=Xt&&!!x.sheenColorMap,z=Xt&&!!x.sheenRoughnessMap,tt=!!x.specularMap,lt=!!x.specularColorMap,L=!!x.specularIntensityMap,j=wt&&!!x.transmissionMap,$=wt&&!!x.thicknessMap,pt=!!x.gradientMap,ht=!!x.alphaMap,mt=x.alphaTest>0,ct=!!x.alphaHash,gt=!!x.extensions,it=Xi;x.toneMapped&&(Mt===null||Mt.isXRRenderTarget===!0)&&(it=s.toneMapping);let st=Ft?F.isCompressedCubeTexture?F.image[0].mipmaps:F.mipmaps:null,_t={shaderID:et,shaderType:x.type,shaderName:x.name,vertexShader:kt,fragmentShader:Y,defines:x.defines,customVertexShaderID:ft,customFragmentShaderID:xt,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:H,batching:de,batchingColor:de&&N._colorsTexture!==null,instancing:Rt,instancingColor:Rt&&N.instanceColor!==null,instancingMorph:Rt&&N.morphTexture!==null,outputColorSpace:Mt===null?s.outputColorSpace:Mt.isXRRenderTarget===!0?Mt.texture.colorSpace:le.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Ct,matcap:Gt,envMap:Lt,envMapMode:Lt&&F.mapping,envMapPMREM:Ft,envMapMaxLod:Ft?st.length-1:null,envMapSize:Ft?st[0].width:null,aoMap:Qt,lightMap:he,bumpMap:Z,normalMap:jt,displacementMap:ze,emissiveMap:me,normalMapObjectSpace:jt&&x.normalMapType===Bp,normalMapTangentSpace:jt&&x.normalMapType===Ta,packedNormalMap:jt&&x.normalMapType===Ta&&BS(x.normalMap.format),metalnessMap:ne,roughnessMap:Ce,anisotropy:Me,anisotropyMap:Pt,clearcoat:O,clearcoatMap:A,clearcoatNormalMap:S,clearcoatRoughnessMap:B,diffuseRoughness:ue,diffuseRoughnessMap:at,dispersion:bt,retroreflection:Nt,iridescence:ot,iridescenceMap:nt,iridescenceThicknessMap:ut,sheen:Xt,sheenColorMap:Q,sheenRoughnessMap:z,specularMap:tt,specularColorMap:lt,specularIntensityMap:L,transmission:wt,transmissionMap:j,thicknessMap:$,gradientMap:pt,opaque:x.transparent===!1&&x.blending===ao&&x.alphaToCoverage===!1,alphaMap:ht,alphaTest:mt,alphaHash:ct,combine:x.combine,mapUv:Ct&&u(x.map.channel),aoMapUv:Qt&&u(x.aoMap.channel),lightMapUv:he&&u(x.lightMap.channel),bumpMapUv:Z&&u(x.bumpMap.channel),normalMapUv:jt&&u(x.normalMap.channel),displacementMapUv:ze&&u(x.displacementMap.channel),emissiveMapUv:me&&u(x.emissiveMap.channel),metalnessMapUv:ne&&u(x.metalnessMap.channel),roughnessMapUv:Ce&&u(x.roughnessMap.channel),anisotropyMapUv:Pt&&u(x.anisotropyMap.channel),clearcoatMapUv:A&&u(x.clearcoatMap.channel),clearcoatNormalMapUv:S&&u(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:B&&u(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:at&&u(x.diffuseRoughnessMap.channel),iridescenceMapUv:nt&&u(x.iridescenceMap.channel),iridescenceThicknessMapUv:ut&&u(x.iridescenceThicknessMap.channel),sheenColorMapUv:Q&&u(x.sheenColorMap.channel),sheenRoughnessMapUv:z&&u(x.sheenRoughnessMap.channel),specularMapUv:tt&&u(x.specularMap.channel),specularColorMapUv:lt&&u(x.specularColorMap.channel),specularIntensityMapUv:L&&u(x.specularIntensityMap.channel),transmissionMapUv:j&&u(x.transmissionMap.channel),thicknessMapUv:$&&u(x.thicknessMap.channel),alphaMapUv:ht&&u(x.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(jt||Me),vertexNormals:!!I.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!I.attributes.uv&&(Ct||ht),fog:!!W,useFog:x.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||I.attributes.normal===void 0&&jt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:dt,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:yt,numSunLights:M.sun.length,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numSunLightShadows:M.sunShadowMap.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numLightProbeGrids:D.filter(rt=>rt.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:s.shadowMap.enabled&&P.length>0,shadowMapType:s.shadowMap.type,toneMapping:it,decodeVideoTexture:Ct&&x.map.isVideoTexture===!0&&le.getTransfer(x.map.colorSpace)===_e,decodeVideoTextureEmissive:me&&x.emissiveMap.isVideoTexture===!0&&le.getTransfer(x.emissiveMap.colorSpace)===_e,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Wi,flipSided:x.side===gn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:gt&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(gt&&x.extensions.multiDraw===!0||de)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return _t.vertexUv1s=l.has(1),_t.vertexUv2s=l.has(2),_t.vertexUv3s=l.has(3),l.clear(),_t}function _(x){let M=[];if(x.shaderID?M.push(x.shaderID):(M.push(x.customVertexShaderID),M.push(x.customFragmentShaderID)),x.defines!==void 0)for(let P in x.defines)M.push(P),M.push(x.defines[P]);return x.isRawShaderMaterial===!1&&(p(M,x),g(M,x),M.push(s.outputColorSpace)),M.push(x.customProgramCacheKey),M.join()}function p(x,M){x.push(M.precision),x.push(M.outputColorSpace),x.push(M.envMapMode),x.push(M.envMapPMREM),x.push(M.envMapMaxLod),x.push(M.envMapSize),x.push(M.mapUv),x.push(M.alphaMapUv),x.push(M.lightMapUv),x.push(M.aoMapUv),x.push(M.bumpMapUv),x.push(M.normalMapUv),x.push(M.displacementMapUv),x.push(M.emissiveMapUv),x.push(M.metalnessMapUv),x.push(M.roughnessMapUv),x.push(M.anisotropyMapUv),x.push(M.clearcoatMapUv),x.push(M.clearcoatNormalMapUv),x.push(M.clearcoatRoughnessMapUv),x.push(M.diffuseRoughnessMapUv),x.push(M.iridescenceMapUv),x.push(M.iridescenceThicknessMapUv),x.push(M.sheenColorMapUv),x.push(M.sheenRoughnessMapUv),x.push(M.specularMapUv),x.push(M.specularColorMapUv),x.push(M.specularIntensityMapUv),x.push(M.transmissionMapUv),x.push(M.thicknessMapUv),x.push(M.combine),x.push(M.fogExp2),x.push(M.sizeAttenuation),x.push(M.morphTargetsCount),x.push(M.numSunLights),x.push(M.numDirLights),x.push(M.numPointLights),x.push(M.numSpotLights),x.push(M.numSpotLightMaps),x.push(M.numHemiLights),x.push(M.numRectAreaLights),x.push(M.numSunLightShadows),x.push(M.numDirLightShadows),x.push(M.numPointLightShadows),x.push(M.numSpotLightShadows),x.push(M.numSpotLightShadowsWithMaps),x.push(M.numLightProbes),x.push(M.numLightProbeGrids),x.push(M.shadowMapType),x.push(M.toneMapping),x.push(M.numClippingPlanes),x.push(M.numClipIntersection),x.push(M.depthPacking)}function g(x,M){o.disableAll(),M.instancing&&o.enable(0),M.instancingColor&&o.enable(1),M.instancingMorph&&o.enable(2),M.matcap&&o.enable(3),M.envMap&&o.enable(4),M.normalMapObjectSpace&&o.enable(5),M.normalMapTangentSpace&&o.enable(6),M.clearcoat&&o.enable(7),M.iridescence&&o.enable(8),M.alphaTest&&o.enable(9),M.vertexColors&&o.enable(10),M.vertexAlphas&&o.enable(11),M.vertexUv1s&&o.enable(12),M.vertexUv2s&&o.enable(13),M.vertexUv3s&&o.enable(14),M.vertexTangents&&o.enable(15),M.anisotropy&&o.enable(16),M.alphaHash&&o.enable(17),M.batching&&o.enable(18),M.dispersion&&o.enable(19),M.retroreflection&&o.enable(24),M.diffuseRoughness&&o.enable(25),M.batchingColor&&o.enable(20),M.gradientMap&&o.enable(21),M.packedNormalMap&&o.enable(22),M.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),M.numLightProbeGrids>0&&o.enable(22),M.hasPositionAttribute&&o.enable(23),x.push(o.mask)}function v(x){let M=f[x.type],P;if(M){let C=Yi[M];P=Qp.clone(C.uniforms)}else P=x.uniforms;return P}function E(x,M){let P=h.get(M);return P!==void 0?++P.usedTimes:(P=new OS(s,M,x,i),c.push(P),h.set(M,P)),P}function y(x){if(--x.usedTimes===0){let M=c.indexOf(x);c[M]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function T(x){a.remove(x)}function w(){a.dispose()}return{getParameters:m,getProgramCacheKey:_,getUniforms:v,acquireProgram:E,releaseProgram:y,releaseShaderCache:T,programs:c,dispose:w}}function kS(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function VS(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.materialVariant!==t.materialVariant?s.materialVariant-t.materialVariant:s.z!==t.z?s.z-t.z:s.id-t.id}function xm(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function vm(){let s=[],t=0,e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(f){let u=0;return f.isInstancedMesh&&(u+=2),f.isSkinnedMesh&&(u+=1),u}function a(f,u,m,_,p,g){let v=s[t];return v===void 0?(v={id:f.id,object:f,geometry:u,material:m,materialVariant:o(f),groupOrder:_,renderOrder:f.renderOrder,z:p,group:g},s[t]=v):(v.id=f.id,v.object=f,v.geometry=u,v.material=m,v.materialVariant=o(f),v.groupOrder=_,v.renderOrder=f.renderOrder,v.z=p,v.group=g),t++,v}function l(f,u,m,_,p,g,v){v.reversedDepth===!0&&(p=-p);let E=a(f,u,m,_,p,g);m.transmission>0?n.push(E):m.transparent===!0?i.push(E):e.push(E)}function c(f,u,m,_,p,g){let v=a(f,u,m,_,p,g);m.transmission>0?n.unshift(v):m.transparent===!0?i.unshift(v):e.unshift(v)}function h(f,u){e.length>1&&e.sort(f||VS),n.length>1&&n.sort(u||xm),i.length>1&&i.sort(u||xm)}function d(){for(let f=t,u=s.length;f<u;f++){let m=s[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:l,unshift:c,finish:d,sort:h}}function GS(){let s=new WeakMap;function t(n,i){let r=s.get(n),o;return r===void 0?(o=new vm,s.set(n,[o])):i>=r.length?(o=new vm,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function HS(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new V,color:new Jt};break;case"SpotLight":e={position:new V,direction:new V,color:new Jt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new V,color:new Jt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new V,skyColor:new Jt,groundColor:new Jt};break;case"RectAreaLight":e={color:new Jt,position:new V,halfWidth:new V,halfHeight:new V};break}return s[t.id]=e,e}}}function WS(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var XS=0;function qS(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function YS(s){let t=new HS,e=WS(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new V);let i=new V,r=new ye,o=new ye;function a(c){let h=0,d=0,f=0;for(let D=0;D<9;D++)n.probe[D].set(0,0,0);let u=0,m=0,_=0,p=0,g=0,v=0,E=0,y=0,T=0,w=0,x=0,M=0,P=0,C=0;c.sort(qS);for(let D=0,W=c.length;D<W;D++){let I=c[D],G=I.color,X=I.intensity,F=I.distance,et=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===Gs?et=I.shadow.map.texture:et=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=G.r*X,d+=G.g*X,f+=G.b*X;else if(I.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(I.sh.coefficients[H],X);C++}else if(I.isSunLight){let H=t.get(I);if(H.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let R=I.shadow,K=e.get(I);K.shadowIntensity=R.intensity,K.shadowBias=R.bias,K.shadowNormalBias=R.normalBias,K.shadowRadius=R.radius,K.shadowMapSize.copy(R.mapSize).multiply(R.getFrameExtents()),n.sunShadow[m]=K,n.sunShadowMap[m]=et;let yt=R.getViewportCount();for(let kt=0;kt<yt;kt++)n.sunShadowMatrix[_+kt]=R.getMatrix(kt),n.sunShadowCascade[_+kt]=R._cascadeData[kt];_+=yt,m++}n.sun[u]=H,u++}else if(I.isDirectionalLight){let H=t.get(I);if(H.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let R=I.shadow,K=e.get(I);K.shadowIntensity=R.intensity,K.shadowBias=R.bias,K.shadowNormalBias=R.normalBias,K.shadowRadius=R.radius,K.shadowMapSize=R.mapSize,n.directionalShadow[p]=K,n.directionalShadowMap[p]=et,n.directionalShadowMatrix[p]=I.shadow.matrix,T++}n.directional[p]=H,p++}else if(I.isSpotLight){let H=t.get(I);H.position.setFromMatrixPosition(I.matrixWorld),H.color.copy(G).multiplyScalar(X),H.distance=F,H.coneCos=Math.cos(I.angle),H.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),H.decay=I.decay,n.spot[v]=H;let R=I.shadow;if(I.map&&(n.spotLightMap[M]=I.map,M++,R.updateMatrices(I),I.castShadow&&P++),n.spotLightMatrix[v]=R.matrix,I.castShadow){let K=e.get(I);K.shadowIntensity=R.intensity,K.shadowBias=R.bias,K.shadowNormalBias=R.normalBias,K.shadowRadius=R.radius,K.shadowMapSize=R.mapSize,n.spotShadow[v]=K,n.spotShadowMap[v]=et,x++}v++}else if(I.isRectAreaLight){let H=t.get(I);H.color.copy(G).multiplyScalar(X),H.halfWidth.set(I.width*.5,0,0),H.halfHeight.set(0,I.height*.5,0),n.rectArea[E]=H,E++}else if(I.isPointLight){let H=t.get(I);if(H.color.copy(I.color).multiplyScalar(I.intensity),H.distance=I.distance,H.decay=I.decay,I.castShadow){let R=I.shadow,K=e.get(I);K.shadowIntensity=R.intensity,K.shadowBias=R.bias,K.shadowNormalBias=R.normalBias,K.shadowRadius=R.radius,K.shadowMapSize=R.mapSize,K.shadowCameraNear=R.camera.near,K.shadowCameraFar=R.camera.far,n.pointShadow[g]=K,n.pointShadowMap[g]=et,n.pointShadowMatrix[g]=I.shadow.matrix,w++}n.point[g]=H,g++}else if(I.isHemisphereLight){let H=t.get(I);H.skyColor.copy(I.color).multiplyScalar(X),H.groundColor.copy(I.groundColor).multiplyScalar(X),n.hemi[y]=H,y++}}E>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Tt.LTC_FLOAT_1,n.rectAreaLTC2=Tt.LTC_FLOAT_2):(n.rectAreaLTC1=Tt.LTC_HALF_1,n.rectAreaLTC2=Tt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=f;let N=n.hash;(N.sunLength!==u||N.directionalLength!==p||N.pointLength!==g||N.spotLength!==v||N.rectAreaLength!==E||N.hemiLength!==y||N.numSunShadows!==m||N.numDirectionalShadows!==T||N.numPointShadows!==w||N.numSpotShadows!==x||N.numSpotMaps!==M||N.numLightProbes!==C)&&(n.sun.length=u,n.directional.length=p,n.spot.length=v,n.rectArea.length=E,n.point.length=g,n.hemi.length=y,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.directionalShadowMatrix.length=T,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=x,n.spotShadowMap.length=x,n.spotLightMatrix.length=x+M-P,n.spotLightMap.length=M,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=C,N.sunLength=u,N.directionalLength=p,N.pointLength=g,N.spotLength=v,N.rectAreaLength=E,N.hemiLength=y,N.numSunShadows=m,N.numDirectionalShadows=T,N.numPointShadows=w,N.numSpotShadows=x,N.numSpotMaps=M,N.numLightProbes=C,n.version=XS++)}function l(c,h){let d=0,f=0,u=0,m=0,_=0,p=0,g=h.matrixWorldInverse;for(let v=0,E=c.length;v<E;v++){let y=c[v];if(y.isSunLight){let T=n.sun[d];T.direction.setFromMatrixPosition(y.matrixWorld),T.direction.transformDirection(g),d++}else if(y.isDirectionalLight){let T=n.directional[f];T.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(i),T.direction.transformDirection(g),f++}else if(y.isSpotLight){let T=n.spot[m];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(g),T.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(i),T.direction.transformDirection(g),m++}else if(y.isRectAreaLight){let T=n.rectArea[_];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(g),o.identity(),r.copy(y.matrixWorld),r.premultiply(g),o.extractRotation(r),T.halfWidth.set(y.width*.5,0,0),T.halfHeight.set(0,y.height*.5,0),T.halfWidth.applyMatrix4(o),T.halfHeight.applyMatrix4(o),_++}else if(y.isPointLight){let T=n.point[u];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(g),u++}else if(y.isHemisphereLight){let T=n.hemi[p];T.direction.setFromMatrixPosition(y.matrixWorld),T.direction.transformDirection(g),p++}}}return{setup:a,setupView:l,state:n}}function ym(s){let t=new YS(s),e=[],n=[],i=[];function r(d){h.camera=d,e.length=0,n.length=0,i.length=0}function o(d){d.isLightProbeGrid?i.push(d):e.push(d)}function a(d){n.push(d)}function l(){t.setup(e),i.sort((d,f)=>d.priority-f.priority||d.id-f.id)}function c(d){t.setupView(e,d)}let h={lightsArray:e,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function ZS(s){let t=new WeakMap;function e(i,r=0){let o=t.get(i),a;return o===void 0?(a=new ym(s),t.set(i,[a])):r>=o.length?(a=new ym(s),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var JS=`void main() {
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
}`,KS=[new V(1,0,0),new V(-1,0,0),new V(0,1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1)],QS=[new V(0,-1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1),new V(0,-1,0),new V(0,-1,0)],Sm=new ye,Ea=new V,df=new V;function jS(s,t,e){let n=new Fs,i=new re,r=new re,o=new Le,a=new Ql,l=new jl,c={},h=e.maxTextureSize,d={[Vs]:gn,[gn]:Vs,[Wi]:Wi},f=new Hi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new re},radius:{value:4}},vertexShader:JS,fragmentShader:$S}),u=f.clone();u.defines.HORIZONTAL_PASS=1;let m=new cs;m.setAttribute("position",new Pi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new $e(m,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ma;let g=this.type;this.render=function(w,x,M){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;this.type===mp&&(Vt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ma);let P=s.getRenderTarget(),C=s.getActiveCubeFace(),N=s.getActiveMipmapLevel(),D=s.state;D.setBlending(ur),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let W=g!==this.type;W&&x.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(G=>G.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,G=w.length;I<G;I++){let X=w[I],F=X.shadow;if(F===void 0){Vt("WebGLShadowMap:",X,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;i.copy(F.mapSize);let et=F.getFrameExtents();i.multiply(et),r.copy(F.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/et.x),i.x=r.x*et.x,F.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/et.y),i.y=r.y*et.y,F.mapSize.y=r.y));let H=s.state.buffers.depth.getReversed();if(F.camera._reversedDepth=H,F.map===null||W===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===oo){if(X.isPointLight){Vt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new ri(i.x,i.y,{format:Gs,type:Di,minFilter:Fn,magFilter:Fn,generateMipmaps:!1}),F.map.texture.name=X.name+".shadowMap",F.map.depthTexture=new us(i.x,i.y,xi),F.map.depthTexture.name=X.name+".shadowMapDepth",F.map.depthTexture.format=ls,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=fn,F.map.depthTexture.magFilter=fn}else X.isPointLight?(F.map=new Ca(i.x),F.map.depthTexture=new na(i.x,Li)):(F.map=new ri(i.x,i.y),F.map.depthTexture=new us(i.x,i.y,Li)),F.map.depthTexture.name=X.name+".shadowMap",F.map.depthTexture.format=ls,this.type===ma?(F.map.depthTexture.compareFunction=H?$u:Ju,F.map.depthTexture.minFilter=Fn,F.map.depthTexture.magFilter=Fn):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=fn,F.map.depthTexture.magFilter=fn);F.camera.updateProjectionMatrix()}F.map.isWebGLCubeRenderTarget!==!0&&(F.map.width!==i.x||F.map.height!==i.y)&&F.map.setSize(i.x,i.y);let R=F.map.isWebGLCubeRenderTarget?6:F.getViewportCount();X.isPointLight!==!0&&F.updateMatrices(X,M);let K=(F.camera.layers.mask&4294967294)!==0?F.camera.layers:M.layers;for(let yt=0;yt<R;yt++){let kt=F.getCamera(yt);if(X.isPointLight){let Y=F.camera,ft=F.matrix,xt=X.distance||Y.far;xt!==Y.far&&(Y.far=xt,Y.updateProjectionMatrix()),Ea.setFromMatrixPosition(X.matrixWorld),Y.position.copy(Ea),df.copy(Y.position),df.add(KS[yt]),Y.up.copy(QS[yt]),Y.lookAt(df),Y.updateMatrixWorld(),ft.makeTranslation(-Ea.x,-Ea.y,-Ea.z),Sm.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),F._frustum.setFromProjectionMatrix(Sm,Y.coordinateSystem,Y.reversedDepth)}if(F.map.isWebGLCubeRenderTarget)s.setRenderTarget(F.map,yt),s.clear();else{yt===0&&(s.setRenderTarget(F.map),s.clear());let Y=F.getViewport(yt);o.set(r.x*Y.x,r.y*Y.y,r.x*Y.z,r.y*Y.w),D.viewport(o)}n=F.getFrustum(yt),y(x,M,kt,X,K,this.type)}F.isPointLightShadow!==!0&&this.type===oo&&v(F,M),F.needsUpdate=!1}g=this.type,p.needsUpdate=!1,s.setRenderTarget(P,C,N)};function v(w,x){let M=t.update(_);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,u.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,u.needsUpdate=!0),w.mapPass===null?w.mapPass=new ri(i.x,i.y,{format:Gs,type:Di}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),f.uniforms.shadow_pass.value=w.map.depthTexture,f.uniforms.resolution.value.set(w.map.width,w.map.height),f.uniforms.radius.value=w.radius,s.setRenderTarget(w.mapPass),s.clear(),s.renderBufferDirect(x,null,M,f,_,null),u.uniforms.shadow_pass.value=w.mapPass.texture,u.uniforms.resolution.value.set(w.map.width,w.map.height),u.uniforms.radius.value=w.radius,s.setRenderTarget(w.map),s.clear(),s.renderBufferDirect(x,null,M,u,_,null)}function E(w,x,M,P){let C=null,N=M.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(N!==void 0)C=N;else if(C=M.isPointLight===!0?l:a,s.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){let D=C.uuid,W=x.uuid,I=c[D];I===void 0&&(I={},c[D]=I);let G=I[W];G===void 0&&(G=C.clone(),I[W]=G,x.addEventListener("dispose",T)),C=G}if(C.visible=x.visible,C.wireframe=x.wireframe,P===oo?C.side=x.shadowSide!==null?x.shadowSide:x.side:C.side=x.shadowSide!==null?x.shadowSide:d[x.side],C.alphaMap=x.alphaMap,C.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,C.map=x.map,C.clipShadows=x.clipShadows,C.clippingPlanes=x.clippingPlanes,C.clipIntersection=x.clipIntersection,C.displacementMap=x.displacementMap,C.displacementScale=x.displacementScale,C.displacementBias=x.displacementBias,C.wireframeLinewidth=x.wireframeLinewidth,C.linewidth=x.linewidth,M.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let D=s.properties.get(C);D.light=M}return C}function y(w,x,M,P,C,N){if(w.visible===!1)return;if(w.layers.test(C)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&N===oo)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,w.matrixWorld);let I=t.update(w),G=w.material;if(Array.isArray(G)){let X=I.groups;for(let F=0,et=X.length;F<et;F++){let H=X[F],R=G[H.materialIndex];if(R&&R.visible){let K=E(w,R,P,N);w.onBeforeShadow(s,w,x,M,I,K,H),s.renderBufferDirect(M,null,I,K,w,H),w.onAfterShadow(s,w,x,M,I,K,H)}}}else if(G.visible){let X=E(w,G,P,N);w.onBeforeShadow(s,w,x,M,I,X,null),s.renderBufferDirect(M,null,I,X,w,null),w.onAfterShadow(s,w,x,M,I,X,null)}}let W=w.children;for(let I=0,G=W.length;I<G;I++)y(W[I],x,M,P,C,N)}function T(w){w.target.removeEventListener("dispose",T);for(let M in c){let P=c[M],C=w.target.uuid;C in P&&(P[C].dispose(),delete P[C])}}}function tM(s,t){function e(){let L=!1,j=new Le,$=null,pt=new Le(0,0,0,0);return{setMask:function(ht){$!==ht&&!L&&(s.colorMask(ht,ht,ht,ht),$=ht)},setLocked:function(ht){L=ht},setClear:function(ht,mt,ct,gt,it){it===!0&&(ht*=gt,mt*=gt,ct*=gt),j.set(ht,mt,ct,gt),pt.equals(j)===!1&&(s.clearColor(ht,mt,ct,gt),pt.copy(j))},reset:function(){L=!1,$=null,pt.set(-1,0,0,0)}}}function n(){let L=!1,j=!1,$=null,pt=null,ht=null;return{setReversed:function(mt){if(j!==mt){let ct=t.get("EXT_clip_control");mt?ct.clipControlEXT(ct.LOWER_LEFT_EXT,ct.ZERO_TO_ONE_EXT):ct.clipControlEXT(ct.LOWER_LEFT_EXT,ct.NEGATIVE_ONE_TO_ONE_EXT),j=mt;let gt=ht;ht=null,this.setClear(gt)}},getReversed:function(){return j},setTest:function(mt){mt?dt(s.DEPTH_TEST):Rt(s.DEPTH_TEST)},setMask:function(mt){$!==mt&&!L&&(s.depthMask(mt),$=mt)},setFunc:function(mt){if(j&&(mt=Jp[mt]),pt!==mt){switch(mt){case Dl:s.depthFunc(s.NEVER);break;case Nl:s.depthFunc(s.ALWAYS);break;case Ul:s.depthFunc(s.LESS);break;case Qr:s.depthFunc(s.LEQUAL);break;case Ol:s.depthFunc(s.EQUAL);break;case Fl:s.depthFunc(s.GEQUAL);break;case Bl:s.depthFunc(s.GREATER);break;case zl:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}pt=mt}},setLocked:function(mt){L=mt},setClear:function(mt){ht!==mt&&(ht=mt,j&&(mt=1-mt),s.clearDepth(mt))},reset:function(){L=!1,$=null,pt=null,ht=null,j=!1}}}function i(){let L=!1,j=null,$=null,pt=null,ht=null,mt=null,ct=null,gt=null,it=null;return{setTest:function(st){L||(st?dt(s.STENCIL_TEST):Rt(s.STENCIL_TEST))},setMask:function(st){j!==st&&!L&&(s.stencilMask(st),j=st)},setFunc:function(st,_t,rt){($!==st||pt!==_t||ht!==rt)&&(s.stencilFunc(st,_t,rt),$=st,pt=_t,ht=rt)},setOp:function(st,_t,rt){(mt!==st||ct!==_t||gt!==rt)&&(s.stencilOp(st,_t,rt),mt=st,ct=_t,gt=rt)},setLocked:function(st){L=st},setClear:function(st){it!==st&&(s.clearStencil(st),it=st)},reset:function(){L=!1,j=null,$=null,pt=null,ht=null,mt=null,ct=null,gt=null,it=null}}}let r=new e,o=new n,a=new i,l={},c=new WeakMap,h={},d={},f={},u=new WeakMap,m=[],_=null,p=!1,g=null,v=null,E=null,y=null,T=null,w=null,x=null,M=new Jt(0,0,0),P=0,C=!1,N=null,D=null,W=null,I=null,G=null,X=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),F=!1,et=0,H=s.getParameter(s.VERSION);H.indexOf("WebGL")!==-1?(et=parseFloat(/^WebGL (\d)/.exec(H)[1]),F=et>=1):H.indexOf("OpenGL ES")!==-1&&(et=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),F=et>=2);let R=null,K={},yt=s.getParameter(s.SCISSOR_BOX),kt=s.getParameter(s.VIEWPORT),Y=new Le().fromArray(yt),ft=new Le().fromArray(kt);function xt(L,j,$,pt){let ht=new Uint8Array(4),mt=s.createTexture();s.bindTexture(L,mt),s.texParameteri(L,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(L,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ct=0;ct<$;ct++)L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY?s.texImage3D(j,0,s.RGBA,1,1,pt,0,s.RGBA,s.UNSIGNED_BYTE,ht):s.texImage2D(j+ct,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ht);return mt}let Mt={};Mt[s.TEXTURE_2D]=xt(s.TEXTURE_2D,s.TEXTURE_2D,1),Mt[s.TEXTURE_CUBE_MAP]=xt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Mt[s.TEXTURE_2D_ARRAY]=xt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Mt[s.TEXTURE_3D]=xt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),dt(s.DEPTH_TEST),o.setFunc(Qr),Z(!1),jt(Pu),dt(s.CULL_FACE),Qt(ur);function dt(L){h[L]!==!0&&(s.enable(L),h[L]=!0)}function Rt(L){h[L]!==!1&&(s.disable(L),h[L]=!1)}function de(L,j){return f[L]!==j?(s.bindFramebuffer(L,j),f[L]=j,L===s.DRAW_FRAMEBUFFER&&(f[s.FRAMEBUFFER]=j),L===s.FRAMEBUFFER&&(f[s.DRAW_FRAMEBUFFER]=j),!0):!1}function Ct(L,j){let $=m,pt=!1;if(L){$=u.get(j),$===void 0&&($=[],u.set(j,$));let ht=L.textures;if($.length!==ht.length||$[0]!==s.COLOR_ATTACHMENT0){for(let mt=0,ct=ht.length;mt<ct;mt++)$[mt]=s.COLOR_ATTACHMENT0+mt;$.length=ht.length,pt=!0}}else $[0]!==s.BACK&&($[0]=s.BACK,pt=!0);pt&&s.drawBuffers($)}function Gt(L){return _!==L?(s.useProgram(L),_=L,!0):!1}let Lt={[fr]:s.FUNC_ADD,[_p]:s.FUNC_SUBTRACT,[xp]:s.FUNC_REVERSE_SUBTRACT};Lt[vp]=s.MIN,Lt[yp]=s.MAX;let Ft={[Sp]:s.ZERO,[Mp]:s.ONE,[bp]:s.SRC_COLOR,[Nu]:s.SRC_ALPHA,[Rp]:s.SRC_ALPHA_SATURATE,[Ap]:s.DST_COLOR,[wp]:s.DST_ALPHA,[Tp]:s.ONE_MINUS_SRC_COLOR,[Uu]:s.ONE_MINUS_SRC_ALPHA,[Cp]:s.ONE_MINUS_DST_COLOR,[Ep]:s.ONE_MINUS_DST_ALPHA,[Pp]:s.CONSTANT_COLOR,[Ip]:s.ONE_MINUS_CONSTANT_COLOR,[Lp]:s.CONSTANT_ALPHA,[Dp]:s.ONE_MINUS_CONSTANT_ALPHA};function Qt(L,j,$,pt,ht,mt,ct,gt,it,st){if(L===ur){p===!0&&(Rt(s.BLEND),p=!1);return}if(p===!1&&(dt(s.BLEND),p=!0),L!==gp){if(L!==g||st!==C){if((v!==fr||T!==fr)&&(s.blendEquation(s.FUNC_ADD),v=fr,T=fr),st)switch(L){case ao:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Iu:s.blendFunc(s.ONE,s.ONE);break;case Lu:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Du:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Ht("WebGLState: Invalid blending: ",L);break}else switch(L){case ao:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Iu:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Lu:Ht("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Du:Ht("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ht("WebGLState: Invalid blending: ",L);break}E=null,y=null,w=null,x=null,M.set(0,0,0),P=0,g=L,C=st}return}ht=ht||j,mt=mt||$,ct=ct||pt,(j!==v||ht!==T)&&(s.blendEquationSeparate(Lt[j],Lt[ht]),v=j,T=ht),($!==E||pt!==y||mt!==w||ct!==x)&&(s.blendFuncSeparate(Ft[$],Ft[pt],Ft[mt],Ft[ct]),E=$,y=pt,w=mt,x=ct),(gt.equals(M)===!1||it!==P)&&(s.blendColor(gt.r,gt.g,gt.b,it),M.copy(gt),P=it),g=L,C=!1}function he(L,j){L.side===Wi?Rt(s.CULL_FACE):dt(s.CULL_FACE);let $=L.side===gn;j&&($=!$),Z($),L.blending===ao&&L.transparent===!1?Qt(ur):Qt(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),o.setFunc(L.depthFunc),o.setTest(L.depthTest),o.setMask(L.depthWrite),r.setMask(L.colorWrite);let pt=L.stencilWrite;a.setTest(pt),pt&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),me(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?dt(s.SAMPLE_ALPHA_TO_COVERAGE):Rt(s.SAMPLE_ALPHA_TO_COVERAGE)}function Z(L){N!==L&&(L?s.frontFace(s.CW):s.frontFace(s.CCW),N=L)}function jt(L){L!==dp?(dt(s.CULL_FACE),L!==D&&(L===Pu?s.cullFace(s.BACK):L===pp?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Rt(s.CULL_FACE),D=L}function ze(L){L!==W&&(F&&s.lineWidth(L),W=L)}function me(L,j,$){L?(dt(s.POLYGON_OFFSET_FILL),(I!==j||G!==$)&&(I=j,G=$,o.getReversed()&&(j=-j,$=-$),s.polygonOffset(j,$))):Rt(s.POLYGON_OFFSET_FILL)}function ne(L){L?dt(s.SCISSOR_TEST):Rt(s.SCISSOR_TEST)}function Ce(L){L===void 0&&(L=s.TEXTURE0+X-1),R!==L&&(s.activeTexture(L),R=L)}function Me(L,j,$){$===void 0&&(R===null?$=s.TEXTURE0+X-1:$=R);let pt=K[$];pt===void 0&&(pt={type:void 0,texture:void 0},K[$]=pt),(pt.type!==L||pt.texture!==j)&&(R!==$&&(s.activeTexture($),R=$),s.bindTexture(L,j||Mt[L]),pt.type=L,pt.texture=j)}function O(){let L=K[R];L!==void 0&&L.type!==void 0&&(s.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function ue(){try{s.compressedTexImage2D(...arguments)}catch(L){Ht("WebGLState:",L)}}function bt(){try{s.compressedTexImage3D(...arguments)}catch(L){Ht("WebGLState:",L)}}function Nt(){try{s.texSubImage2D(...arguments)}catch(L){Ht("WebGLState:",L)}}function ot(){try{s.texSubImage3D(...arguments)}catch(L){Ht("WebGLState:",L)}}function Xt(){try{s.compressedTexSubImage2D(...arguments)}catch(L){Ht("WebGLState:",L)}}function wt(){try{s.compressedTexSubImage3D(...arguments)}catch(L){Ht("WebGLState:",L)}}function Pt(){try{s.texStorage2D(...arguments)}catch(L){Ht("WebGLState:",L)}}function A(){try{s.texStorage3D(...arguments)}catch(L){Ht("WebGLState:",L)}}function S(){try{s.texImage2D(...arguments)}catch(L){Ht("WebGLState:",L)}}function B(){try{s.texImage3D(...arguments)}catch(L){Ht("WebGLState:",L)}}function at(L){return d[L]!==void 0?d[L]:s.getParameter(L)}function nt(L,j){d[L]!==j&&(s.pixelStorei(L,j),d[L]=j)}function ut(L){Y.equals(L)===!1&&(s.scissor(L.x,L.y,L.z,L.w),Y.copy(L))}function Q(L){ft.equals(L)===!1&&(s.viewport(L.x,L.y,L.z,L.w),ft.copy(L))}function z(L,j){let $=c.get(j);$===void 0&&($=new WeakMap,c.set(j,$));let pt=$.get(L);pt===void 0&&(pt=s.getUniformBlockIndex(j,L.name),s.uniformBlockBinding(j,pt,pt),$.set(L,pt))}function tt(L,j,$){let ht=c.get(j).get(L);l[ht]!==$&&(s.bindBufferBase(s.UNIFORM_BUFFER,ht,$),l[ht]=$)}function lt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},d={},R=null,K={},f={},l={},u=new WeakMap,m=[],_=null,p=!1,g=null,v=null,E=null,y=null,T=null,w=null,x=null,M=new Jt(0,0,0),P=0,C=!1,N=null,D=null,W=null,I=null,G=null,Y.set(0,0,s.canvas.width,s.canvas.height),ft.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:dt,disable:Rt,bindFramebuffer:de,drawBuffers:Ct,useProgram:Gt,setBlending:Qt,setMaterial:he,setFlipSided:Z,setCullFace:jt,setLineWidth:ze,setPolygonOffset:me,setScissorTest:ne,activeTexture:Ce,bindTexture:Me,unbindTexture:O,compressedTexImage2D:ue,compressedTexImage3D:bt,texImage2D:S,texImage3D:B,pixelStorei:nt,getParameter:at,updateUBOMapping:z,uniformBlockBinding:tt,texStorage2D:Pt,texStorage3D:A,texSubImage2D:Nt,texSubImage3D:ot,compressedTexSubImage2D:Xt,compressedTexSubImage3D:wt,scissor:ut,viewport:Q,reset:lt}}function eM(s,t,e,n,i,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new re,h=new WeakMap,d=new Set,f,u=new WeakMap,m=new Set,_=new FinalizationRegistry(A=>m.delete(A)),p=!1;try{p=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,S){return p?new OffscreenCanvas(A,S):Zo("canvas")}function v(A,S,B){let at=1,nt=Pt(A);if((nt.width>B||nt.height>B)&&(at=B/Math.max(nt.width,nt.height)),at<1)if(typeof HTMLImageElement!="undefined"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&A instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&A instanceof ImageBitmap||typeof VideoFrame!="undefined"&&A instanceof VideoFrame){let ut=Math.floor(at*nt.width),Q=Math.floor(at*nt.height);f===void 0&&(f=g(ut,Q));let z=S?g(ut,Q):f;return z.width=ut,z.height=Q,z.getContext("2d").drawImage(A,0,0,ut,Q),Vt("WebGLRenderer: Texture has been resized from ("+nt.width+"x"+nt.height+") to ("+ut+"x"+Q+")."),z}else return"data"in A&&Vt("WebGLRenderer: Image in DataTexture is too big ("+nt.width+"x"+nt.height+")."),A;return A}function E(A){return A.generateMipmaps}function y(A){s.generateMipmap(A)}function T(A){return A.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?s.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function w(A,S,B,at,nt,ut=!1){if(A!==null){if(s[A]!==void 0)return s[A];Vt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let Q;at&&(Q=t.get("EXT_texture_norm16"),Q||Vt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let z=S;if(S===s.RED&&(B===s.FLOAT&&(z=s.R32F),B===s.HALF_FLOAT&&(z=s.R16F),B===s.UNSIGNED_BYTE&&(z=s.R8),B===s.UNSIGNED_SHORT&&Q&&(z=Q.R16_EXT),B===s.SHORT&&Q&&(z=Q.R16_SNORM_EXT)),S===s.RED_INTEGER&&(B===s.UNSIGNED_BYTE&&(z=s.R8UI),B===s.UNSIGNED_SHORT&&(z=s.R16UI),B===s.UNSIGNED_INT&&(z=s.R32UI),B===s.BYTE&&(z=s.R8I),B===s.SHORT&&(z=s.R16I),B===s.INT&&(z=s.R32I)),S===s.RG&&(B===s.FLOAT&&(z=s.RG32F),B===s.HALF_FLOAT&&(z=s.RG16F),B===s.UNSIGNED_BYTE&&(z=s.RG8),B===s.UNSIGNED_SHORT&&Q&&(z=Q.RG16_EXT),B===s.SHORT&&Q&&(z=Q.RG16_SNORM_EXT)),S===s.RG_INTEGER&&(B===s.UNSIGNED_BYTE&&(z=s.RG8UI),B===s.UNSIGNED_SHORT&&(z=s.RG16UI),B===s.UNSIGNED_INT&&(z=s.RG32UI),B===s.BYTE&&(z=s.RG8I),B===s.SHORT&&(z=s.RG16I),B===s.INT&&(z=s.RG32I)),S===s.RGB_INTEGER&&(B===s.UNSIGNED_BYTE&&(z=s.RGB8UI),B===s.UNSIGNED_SHORT&&(z=s.RGB16UI),B===s.UNSIGNED_INT&&(z=s.RGB32UI),B===s.BYTE&&(z=s.RGB8I),B===s.SHORT&&(z=s.RGB16I),B===s.INT&&(z=s.RGB32I)),S===s.RGBA_INTEGER&&(B===s.UNSIGNED_BYTE&&(z=s.RGBA8UI),B===s.UNSIGNED_SHORT&&(z=s.RGBA16UI),B===s.UNSIGNED_INT&&(z=s.RGBA32UI),B===s.BYTE&&(z=s.RGBA8I),B===s.SHORT&&(z=s.RGBA16I),B===s.INT&&(z=s.RGBA32I)),S===s.RGB&&(B===s.UNSIGNED_SHORT&&Q&&(z=Q.RGB16_EXT),B===s.SHORT&&Q&&(z=Q.RGB16_SNORM_EXT),B===s.UNSIGNED_INT_5_9_9_9_REV&&(z=s.RGB9_E5),B===s.UNSIGNED_INT_10F_11F_11F_REV&&(z=s.R11F_G11F_B10F)),S===s.RGBA){let tt=ut?Yo:le.getTransfer(nt);B===s.FLOAT&&(z=s.RGBA32F),B===s.HALF_FLOAT&&(z=s.RGBA16F),B===s.UNSIGNED_BYTE&&(z=tt===_e?s.SRGB8_ALPHA8:s.RGBA8),B===s.UNSIGNED_SHORT&&Q&&(z=Q.RGBA16_EXT),B===s.SHORT&&Q&&(z=Q.RGBA16_SNORM_EXT),B===s.UNSIGNED_SHORT_4_4_4_4&&(z=s.RGBA4),B===s.UNSIGNED_SHORT_5_5_5_1&&(z=s.RGB5_A1)}return(z===s.R16F||z===s.R32F||z===s.RG16F||z===s.RG32F||z===s.RGBA16F||z===s.RGBA32F)&&t.get("EXT_color_buffer_float"),z}function x(A,S){let B;return A?S===null||S===Li||S===pr?B=s.DEPTH24_STENCIL8:S===xi?B=s.DEPTH32F_STENCIL8:S===co&&(B=s.DEPTH24_STENCIL8,Vt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Li||S===pr?B=s.DEPTH_COMPONENT24:S===xi?B=s.DEPTH_COMPONENT32F:S===co&&(B=s.DEPTH_COMPONENT16),B}function M(A,S){return E(A)===!0||A.isFramebufferTexture&&A.minFilter!==fn&&A.minFilter!==Fn?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function P(A){let S=new WeakRef(A);n.get(A).__ref=S,m.add(S),_.register(A,S,S)}function C(A){let S=n.get(A).__ref;S!==void 0&&(m.delete(S),_.unregister(S))}function N(A){W(A.target)}function D(A){I(A.target)}function W(A){A.removeEventListener("dispose",N),C(A),X(A),A.isVideoTexture&&h.delete(A),A.isHTMLTexture&&d.delete(A)}function I(A){A.removeEventListener("dispose",D),C(A),et(A)}function G(){for(let A of m){let S=A.deref();S!==void 0&&(S.isRenderTarget===!0?I(S):W(S))}m.clear(),d.clear()}function X(A){let S=n.get(A);if(S.__webglInit===void 0)return;let B=A.source,at=u.get(B);if(at){let nt=at[S.__cacheKey];nt.usedTimes--,nt.usedTimes===0&&F(A),Object.keys(at).length===0&&u.delete(B)}n.remove(A)}function F(A){let S=n.get(A);s.deleteTexture(S.__webglTexture);let B=A.source,at=u.get(B);delete at[S.__cacheKey],o.memory.textures--}function et(A){let S=n.get(A);S.__depthDisposeCallback&&S.__depthDisposeCallback();let B=A.depthTexture;if(B&&B.renderTarget===A&&W(B),A.isWebGLCubeRenderTarget)for(let nt=0;nt<6;nt++){if(Array.isArray(S.__webglFramebuffer[nt]))for(let ut=0;ut<S.__webglFramebuffer[nt].length;ut++)s.deleteFramebuffer(S.__webglFramebuffer[nt][ut]);else s.deleteFramebuffer(S.__webglFramebuffer[nt]);S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer[nt])}else{if(Array.isArray(S.__webglFramebuffer))for(let nt=0;nt<S.__webglFramebuffer.length;nt++)s.deleteFramebuffer(S.__webglFramebuffer[nt]);else s.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&s.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let nt=0;nt<S.__webglColorRenderbuffer.length;nt++)S.__webglColorRenderbuffer[nt]&&s.deleteRenderbuffer(S.__webglColorRenderbuffer[nt]);S.__webglDepthRenderbuffer&&s.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let at=A.textures;for(let nt=0,ut=at.length;nt<ut;nt++){let Q=n.get(at[nt]);Q.__webglTexture&&(s.deleteTexture(Q.__webglTexture),o.memory.textures--),n.remove(at[nt])}n.remove(A)}let H=0;function R(){H=0}function K(){return H}function yt(A){H=A}function kt(){let A=H;return A>=i.maxTextures&&Vt("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+i.maxTextures),H+=1,A}function Y(A){let S=[];return S.push(A.wrapS),S.push(A.wrapT),S.push(A.wrapR||0),S.push(A.magFilter),S.push(A.minFilter),S.push(A.anisotropy),S.push(A.internalFormat),S.push(A.format),S.push(A.type),S.push(A.generateMipmaps),S.push(A.mipmapsAutoUpdate),S.push(A.premultiplyAlpha),S.push(A.flipY),S.push(A.unpackAlignment),S.push(A.colorSpace),S.join()}function ft(A,S){let B=n.get(A);if(A.isVideoTexture&&Xt(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&B.__version!==A.version){let at=A.image;if(at===null)Vt("WebGLRenderer: Texture marked for update but no image data found.");else if(at.complete===!1)Vt("WebGLRenderer: Texture marked for update but image is incomplete");else{he(B,A,S);return}}else A.isExternalTexture&&(B.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,B.__webglTexture,s.TEXTURE0+S)}function xt(A,S){let B=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){he(B,A,S);return}else A.isExternalTexture&&(B.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(s.TEXTURE_2D_ARRAY,B.__webglTexture,s.TEXTURE0+S)}function Mt(A,S){let B=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){he(B,A,S);return}e.bindTexture(s.TEXTURE_3D,B.__webglTexture,s.TEXTURE0+S)}function dt(A,S){let B=n.get(A);if(A.version>0&&B.__version!==A.version){Z(B,A,S);return}e.bindTexture(s.TEXTURE_CUBE_MAP,B.__webglTexture,s.TEXTURE0+S)}let Rt={[kl]:s.REPEAT,[zi]:s.CLAMP_TO_EDGE,[Vl]:s.MIRRORED_REPEAT},de={[fn]:s.NEAREST,[Op]:s.NEAREST_MIPMAP_NEAREST,[_a]:s.NEAREST_MIPMAP_LINEAR,[Fn]:s.LINEAR,[mc]:s.LINEAR_MIPMAP_NEAREST,[fs]:s.LINEAR_MIPMAP_LINEAR},Ct={[kp]:s.NEVER,[Ku]:s.ALWAYS,[Vp]:s.LESS,[Ju]:s.LEQUAL,[Gp]:s.EQUAL,[$u]:s.GEQUAL,[Hp]:s.GREATER,[Wp]:s.NOTEQUAL};function Gt(A,S){if(S.type===xi&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===Fn||S.magFilter===mc||S.magFilter===_a||S.magFilter===fs||S.minFilter===Fn||S.minFilter===mc||S.minFilter===_a||S.minFilter===fs)&&Vt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(A,s.TEXTURE_WRAP_S,Rt[S.wrapS]),s.texParameteri(A,s.TEXTURE_WRAP_T,Rt[S.wrapT]),(A===s.TEXTURE_3D||A===s.TEXTURE_2D_ARRAY)&&s.texParameteri(A,s.TEXTURE_WRAP_R,Rt[S.wrapR]),s.texParameteri(A,s.TEXTURE_MAG_FILTER,de[S.magFilter]),s.texParameteri(A,s.TEXTURE_MIN_FILTER,de[S.minFilter]),S.compareFunction&&(s.texParameteri(A,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(A,s.TEXTURE_COMPARE_FUNC,Ct[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===fn||S.minFilter!==_a&&S.minFilter!==fs||S.type===xi&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){let B=t.get("EXT_texture_filter_anisotropic");s.texParameterf(A,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Lt(A,S){let B=!1;A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener("dispose",N),P(S));let at=S.source,nt=u.get(at);nt===void 0&&(nt={},u.set(at,nt));let ut=Y(S);if(ut!==A.__cacheKey){nt[ut]===void 0&&(nt[ut]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,B=!0),nt[ut].usedTimes++;let Q=nt[A.__cacheKey];Q!==void 0&&(nt[A.__cacheKey].usedTimes--,Q.usedTimes===0&&F(S)),A.__cacheKey=ut,A.__webglTexture=nt[ut].texture}return B}function Ft(A,S,B){return Math.floor(Math.floor(A/B)/S)}function Qt(A,S,B,at){let ut=A.updateRanges;if(ut.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,S.width,S.height,B,at,S.data);else{ut.sort((L,j)=>L.start-j.start);let Q=0;for(let L=1;L<ut.length;L++){let j=ut[Q],$=ut[L],pt=j.start+j.count,ht=Ft($.start,S.width,4),mt=Ft(j.start,S.width,4);$.start<=pt+1&&ht===mt&&Ft($.start+$.count-1,S.width,4)===ht?j.count=Math.max(j.count,$.start+$.count-j.start):(++Q,ut[Q]=$)}ut.length=Q+1;let z=e.getParameter(s.UNPACK_ROW_LENGTH),tt=e.getParameter(s.UNPACK_SKIP_PIXELS),lt=e.getParameter(s.UNPACK_SKIP_ROWS);e.pixelStorei(s.UNPACK_ROW_LENGTH,S.width);for(let L=0,j=ut.length;L<j;L++){let $=ut[L],pt=Math.floor($.start/4),ht=Math.ceil($.count/4),mt=pt%S.width,ct=Math.floor(pt/S.width),gt=ht,it=1;e.pixelStorei(s.UNPACK_SKIP_PIXELS,mt),e.pixelStorei(s.UNPACK_SKIP_ROWS,ct),e.texSubImage2D(s.TEXTURE_2D,0,mt,ct,gt,it,B,at,S.data)}A.clearUpdateRanges(),e.pixelStorei(s.UNPACK_ROW_LENGTH,z),e.pixelStorei(s.UNPACK_SKIP_PIXELS,tt),e.pixelStorei(s.UNPACK_SKIP_ROWS,lt)}}function he(A,S,B){let at=s.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(at=s.TEXTURE_2D_ARRAY),S.isData3DTexture&&(at=s.TEXTURE_3D);let nt=Lt(A,S),ut=S.source;e.bindTexture(at,A.__webglTexture,s.TEXTURE0+B);let Q=n.get(ut);if(ut.version!==Q.__version||nt===!0){if(e.activeTexture(s.TEXTURE0+B),(typeof ImageBitmap!="undefined"&&S.image instanceof ImageBitmap)===!1){let it=le.getPrimaries(le.workingColorSpace),st=S.colorSpace===ps?null:le.getPrimaries(S.colorSpace),_t=S.colorSpace===ps||it===st?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,_t)}e.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment);let tt=v(S.image,!1,i.maxTextureSize);tt=wt(S,tt);let lt=r.convert(S.format,S.colorSpace),L=r.convert(S.type),j=w(S.internalFormat,lt,L,S.normalized,S.colorSpace,S.isVideoTexture);Gt(at,S);let $,pt=S.mipmaps,ht=S.isVideoTexture!==!0,mt=Q.__version===void 0||nt===!0,ct=ut.dataReady,gt=M(S,tt);if(S.isDepthTexture)j=x(S.format===ds,S.type),mt&&(ht?e.texStorage2D(s.TEXTURE_2D,1,j,tt.width,tt.height):e.texImage2D(s.TEXTURE_2D,0,j,tt.width,tt.height,0,lt,L,null));else if(S.isDataTexture)if(pt.length>0){ht&&mt&&e.texStorage2D(s.TEXTURE_2D,gt,j,pt[0].width,pt[0].height);for(let it=0,st=pt.length;it<st;it++)$=pt[it],ht?ct&&e.texSubImage2D(s.TEXTURE_2D,it,0,0,$.width,$.height,lt,L,$.data):e.texImage2D(s.TEXTURE_2D,it,j,$.width,$.height,0,lt,L,$.data);S.generateMipmaps=!1}else ht?(mt&&e.texStorage2D(s.TEXTURE_2D,gt,j,tt.width,tt.height),ct&&Qt(S,tt,lt,L)):e.texImage2D(s.TEXTURE_2D,0,j,tt.width,tt.height,0,lt,L,tt.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){ht&&mt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,gt,j,pt[0].width,pt[0].height,tt.depth);for(let it=0,st=pt.length;it<st;it++)if($=pt[it],S.format!==Ni)if(lt!==null)if(ht){if(ct)if(S.layerUpdates.size>0){let _t=of($.width,$.height,S.format,S.type);for(let rt of S.layerUpdates){let Et=$.data.subarray(rt*_t/$.data.BYTES_PER_ELEMENT,(rt+1)*_t/$.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,it,0,0,rt,$.width,$.height,1,lt,Et)}}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,it,0,0,0,$.width,$.height,tt.depth,lt,$.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,it,j,$.width,$.height,tt.depth,0,$.data,0,0);else Vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ht?ct&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,it,0,0,0,$.width,$.height,tt.depth,lt,L,$.data):e.texImage3D(s.TEXTURE_2D_ARRAY,it,j,$.width,$.height,tt.depth,0,lt,L,$.data);S.layerUpdates.size>0&&S.clearLayerUpdates()}else{ht&&mt&&e.texStorage2D(s.TEXTURE_2D,gt,j,pt[0].width,pt[0].height);for(let it=0,st=pt.length;it<st;it++)$=pt[it],S.format!==Ni?lt!==null?ht?ct&&e.compressedTexSubImage2D(s.TEXTURE_2D,it,0,0,$.width,$.height,lt,$.data):e.compressedTexImage2D(s.TEXTURE_2D,it,j,$.width,$.height,0,$.data):Vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ht?ct&&e.texSubImage2D(s.TEXTURE_2D,it,0,0,$.width,$.height,lt,L,$.data):e.texImage2D(s.TEXTURE_2D,it,j,$.width,$.height,0,lt,L,$.data)}else if(S.isDataArrayTexture)if(ht){if(mt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,gt,j,tt.width,tt.height,tt.depth),ct)if(S.layerUpdates.size>0){let it=of(tt.width,tt.height,S.format,S.type);for(let st of S.layerUpdates){let _t=tt.data.subarray(st*it/tt.data.BYTES_PER_ELEMENT,(st+1)*it/tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,st,tt.width,tt.height,1,lt,L,_t)}S.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,lt,L,tt.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,j,tt.width,tt.height,tt.depth,0,lt,L,tt.data);else if(S.isData3DTexture)ht?(mt&&e.texStorage3D(s.TEXTURE_3D,gt,j,tt.width,tt.height,tt.depth),ct&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,lt,L,tt.data)):e.texImage3D(s.TEXTURE_3D,0,j,tt.width,tt.height,tt.depth,0,lt,L,tt.data);else if(S.isFramebufferTexture){if(mt)if(ht)e.texStorage2D(s.TEXTURE_2D,gt,j,tt.width,tt.height);else{let it=tt.width,st=tt.height;for(let _t=0;_t<gt;_t++)e.texImage2D(s.TEXTURE_2D,_t,j,it,st,0,lt,L,null),it>>=1,st>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in s){let it=s.canvas;if(it.hasAttribute("layoutsubtree")||it.setAttribute("layoutsubtree","true"),tt.parentNode!==it){it.appendChild(tt),d.add(S),it.onpaint=st=>{let _t=st.changedElements;for(let rt of d)_t.includes(rt.image)&&(rt.needsUpdate=!0)},it.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,tt);else{let _t=s.RGBA,rt=s.RGBA,Et=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,_t,rt,Et,tt)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(pt.length>0){if(ht&&mt){let it=Pt(pt[0]);e.texStorage2D(s.TEXTURE_2D,gt,j,it.width,it.height)}for(let it=0,st=pt.length;it<st;it++)$=pt[it],ht?ct&&e.texSubImage2D(s.TEXTURE_2D,it,0,0,lt,L,$):e.texImage2D(s.TEXTURE_2D,it,j,lt,L,$);S.generateMipmaps=!1}else if(ht){if(mt){let it=Pt(tt);e.texStorage2D(s.TEXTURE_2D,gt,j,it.width,it.height)}ct&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,lt,L,tt)}else e.texImage2D(s.TEXTURE_2D,0,j,lt,L,tt);E(S)&&S.mipmapsAutoUpdate===!0&&y(at),Q.__version=ut.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function Z(A,S,B){if(S.image.length!==6)return;let at=Lt(A,S),nt=S.source;e.bindTexture(s.TEXTURE_CUBE_MAP,A.__webglTexture,s.TEXTURE0+B);let ut=n.get(nt);if(nt.version!==ut.__version||at===!0){e.activeTexture(s.TEXTURE0+B);let Q=le.getPrimaries(le.workingColorSpace),z=S.colorSpace===ps?null:le.getPrimaries(S.colorSpace),tt=S.colorSpace===ps||Q===z?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,tt);let lt=S.isCompressedTexture||S.image[0].isCompressedTexture,L=S.image[0]&&S.image[0].isDataTexture,j=[];for(let rt=0;rt<6;rt++)!lt&&!L?j[rt]=v(S.image[rt],!0,i.maxCubemapSize):j[rt]=L?S.image[rt].image:S.image[rt],j[rt]=wt(S,j[rt]);let $=j[0],pt=r.convert(S.format,S.colorSpace),ht=r.convert(S.type),mt=w(S.internalFormat,pt,ht,S.normalized,S.colorSpace),ct=S.isVideoTexture!==!0,gt=ut.__version===void 0||at===!0,it=nt.dataReady,st=M(S,$);Gt(s.TEXTURE_CUBE_MAP,S);let _t;if(S.isDepthTexture){if(mt=x(S.format===ds,S.type),gt)if(ct)e.texStorage2D(s.TEXTURE_CUBE_MAP,1,mt,$.width,$.height);else for(let rt=0;rt<6;rt++)e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,mt,$.width,$.height,0,pt,ht,null)}else if(lt){ct&&gt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,st,mt,$.width,$.height);for(let rt=0;rt<6;rt++){_t=j[rt].mipmaps;for(let Et=0;Et<_t.length;Et++){let ie=_t[Et];S.format!==Ni?pt!==null?ct?it&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Et,0,0,ie.width,ie.height,pt,ie.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Et,mt,ie.width,ie.height,0,ie.data):Vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ct?it&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Et,0,0,ie.width,ie.height,pt,ht,ie.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Et,mt,ie.width,ie.height,0,pt,ht,ie.data)}}}else{if(_t=S.mipmaps,ct&&gt){_t.length>0&&st++;let rt=Pt(j[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,st,mt,rt.width,rt.height)}for(let rt=0;rt<6;rt++)if(L){ct?it&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,j[rt].width,j[rt].height,pt,ht,j[rt].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,mt,j[rt].width,j[rt].height,0,pt,ht,j[rt].data);for(let Et=0;Et<_t.length;Et++){let qt=_t[Et].image[rt].image;ct?it&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Et+1,0,0,qt.width,qt.height,pt,ht,qt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Et+1,mt,qt.width,qt.height,0,pt,ht,qt.data)}}else{ct?it&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,pt,ht,j[rt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,mt,pt,ht,j[rt]);for(let Et=0;Et<_t.length;Et++){let ie=_t[Et];ct?it&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Et+1,0,0,pt,ht,ie.image[rt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Et+1,mt,pt,ht,ie.image[rt])}}}E(S)&&S.mipmapsAutoUpdate===!0&&y(s.TEXTURE_CUBE_MAP),ut.__version=nt.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function jt(A,S,B,at,nt,ut){let Q=r.convert(B.format,B.colorSpace),z=r.convert(B.type),tt=w(B.internalFormat,Q,z,B.normalized,B.colorSpace),lt=n.get(S),L=n.get(B);if(L.__renderTarget=S,!lt.__hasExternalTextures){let j=Math.max(1,S.width>>ut),$=Math.max(1,S.height>>ut);nt===s.TEXTURE_3D||nt===s.TEXTURE_2D_ARRAY?e.texImage3D(nt,ut,tt,j,$,S.depth,0,Q,z,null):e.texImage2D(nt,ut,tt,j,$,0,Q,z,null)}e.bindFramebuffer(s.FRAMEBUFFER,A),ot(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,at,nt,L.__webglTexture,0,Nt(S)):(nt===s.TEXTURE_2D||nt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&nt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,at,nt,L.__webglTexture,ut),e.bindFramebuffer(s.FRAMEBUFFER,null)}function ze(A,S,B){if(s.bindRenderbuffer(s.RENDERBUFFER,A),S.depthBuffer){let at=S.depthTexture,nt=at&&at.isDepthTexture?at.type:null,ut=x(S.stencilBuffer,nt),Q=S.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;ot(S)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Nt(S),ut,S.width,S.height):B?s.renderbufferStorageMultisample(s.RENDERBUFFER,Nt(S),ut,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,ut,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Q,s.RENDERBUFFER,A)}else{let at=S.textures;for(let nt=0;nt<at.length;nt++){let ut=at[nt],Q=r.convert(ut.format,ut.colorSpace),z=r.convert(ut.type),tt=w(ut.internalFormat,Q,z,ut.normalized,ut.colorSpace);ot(S)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Nt(S),tt,S.width,S.height):B?s.renderbufferStorageMultisample(s.RENDERBUFFER,Nt(S),tt,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,tt,S.width,S.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function me(A,S,B){let at=S.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(s.FRAMEBUFFER,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let nt=n.get(S.depthTexture);nt.__renderTarget=S;let ut=at?S.depthTexture.image[0]:S.depthTexture.image;(!nt.__webglTexture||ut.width!==S.width||ut.height!==S.height)&&(ut.width=S.width,ut.height=S.height,S.depthTexture.needsUpdate=!0),at?dt(S.depthTexture,0):ft(S.depthTexture,0);let Q=nt.__webglTexture,z=Nt(S),tt=at?s.TEXTURE_CUBE_MAP_POSITIVE_X+B:s.TEXTURE_2D,lt=S.depthTexture.format===ds?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(S.depthTexture.format===ls)ot(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,lt,tt,Q,0,z):s.framebufferTexture2D(s.FRAMEBUFFER,lt,tt,Q,0);else if(S.depthTexture.format===ds)ot(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,lt,tt,Q,0,z):s.framebufferTexture2D(s.FRAMEBUFFER,lt,tt,Q,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ne(A){let S=n.get(A),B=A.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==A.depthTexture){let at=A.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),at){let nt=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,at.removeEventListener("dispose",nt)};at.addEventListener("dispose",nt),S.__depthDisposeCallback=nt}S.__boundDepthTexture=at}if(A.depthTexture&&!S.__autoAllocateDepthBuffer)if(B)for(let at=0;at<6;at++)me(S.__webglFramebuffer[at],A,at);else A.texture.mipmaps.length>0?me(S.__webglFramebuffer[0],A,0):me(S.__webglFramebuffer,A,0);else if(B){S.__webglDepthbuffer=[];for(let at=0;at<6;at++)if(e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[at]),S.__webglDepthbuffer[at]===void 0)S.__webglDepthbuffer[at]=s.createRenderbuffer(),ze(S.__webglDepthbuffer[at],A,!1);else{let nt=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ut=S.__webglDepthbuffer[at];s.bindRenderbuffer(s.RENDERBUFFER,ut),s.framebufferRenderbuffer(s.FRAMEBUFFER,nt,s.RENDERBUFFER,ut)}}else if(A.texture.mipmaps.length>0?e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=s.createRenderbuffer(),ze(S.__webglDepthbuffer,A,!1);else{let nt=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ut=S.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ut),s.framebufferRenderbuffer(s.FRAMEBUFFER,nt,s.RENDERBUFFER,ut)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Ce(A,S,B){let at=n.get(A);S!==void 0&&jt(at.__webglFramebuffer,A,A.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),B!==void 0&&ne(A)}function Me(A){let S=A.texture,B=n.get(A),at=n.get(S);A.addEventListener("dispose",D),P(A);let nt=A.textures,ut=A.isWebGLCubeRenderTarget===!0,Q=nt.length>1;if(Q||(at.__webglTexture===void 0&&(at.__webglTexture=s.createTexture()),at.__version=S.version,o.memory.textures++),ut){B.__webglFramebuffer=[];for(let z=0;z<6;z++)if(S.mipmaps.length>0){B.__webglFramebuffer[z]=[];for(let tt=0;tt<S.mipmaps.length;tt++)B.__webglFramebuffer[z][tt]=s.createFramebuffer()}else B.__webglFramebuffer[z]=s.createFramebuffer()}else{if(S.mipmaps.length>0){B.__webglFramebuffer=[];for(let z=0;z<S.mipmaps.length;z++)B.__webglFramebuffer[z]=s.createFramebuffer()}else B.__webglFramebuffer=s.createFramebuffer();if(Q)for(let z=0,tt=nt.length;z<tt;z++){let lt=n.get(nt[z]);lt.__webglTexture===void 0&&(lt.__webglTexture=s.createTexture(),o.memory.textures++)}if(A.samples>0&&ot(A)===!1){B.__webglMultisampledFramebuffer=s.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let z=0;z<nt.length;z++){let tt=nt[z];B.__webglColorRenderbuffer[z]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,B.__webglColorRenderbuffer[z]);let lt=r.convert(tt.format,tt.colorSpace),L=r.convert(tt.type),j=w(tt.internalFormat,lt,L,tt.normalized,tt.colorSpace,A.isXRRenderTarget===!0),$=Nt(A);s.renderbufferStorageMultisample(s.RENDERBUFFER,$,j,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+z,s.RENDERBUFFER,B.__webglColorRenderbuffer[z])}s.bindRenderbuffer(s.RENDERBUFFER,null),A.depthBuffer&&(B.__webglDepthRenderbuffer=s.createRenderbuffer(),ze(B.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ut){e.bindTexture(s.TEXTURE_CUBE_MAP,at.__webglTexture),Gt(s.TEXTURE_CUBE_MAP,S);for(let z=0;z<6;z++)if(S.mipmaps.length>0)for(let tt=0;tt<S.mipmaps.length;tt++)jt(B.__webglFramebuffer[z][tt],A,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+z,tt);else jt(B.__webglFramebuffer[z],A,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+z,0);E(S)?y(s.TEXTURE_CUBE_MAP):S.mipmaps.length>0&&s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),e.unbindTexture()}else if(Q){for(let z=0,tt=nt.length;z<tt;z++){let lt=nt[z],L=n.get(lt),j=s.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(j=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(j,L.__webglTexture),Gt(j,lt),jt(B.__webglFramebuffer,A,lt,s.COLOR_ATTACHMENT0+z,j,0),E(lt)&&y(j)}e.unbindTexture()}else{let z=s.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(z=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(z,at.__webglTexture),Gt(z,S),S.mipmaps.length>0)for(let tt=0;tt<S.mipmaps.length;tt++)jt(B.__webglFramebuffer[tt],A,S,s.COLOR_ATTACHMENT0,z,tt);else jt(B.__webglFramebuffer,A,S,s.COLOR_ATTACHMENT0,z,0);E(S)?y(z):S.mipmaps.length>0&&s.texParameteri(z,s.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),e.unbindTexture()}A.depthBuffer&&ne(A)}function O(A){let S=A.textures;for(let B=0,at=S.length;B<at;B++){let nt=S[B];if(E(nt)&&nt.mipmapsAutoUpdate===!0){let ut=T(A),Q=n.get(nt).__webglTexture;e.bindTexture(ut,Q),y(ut),e.unbindTexture()}}}let ue=[];function bt(A){if(A.samples>0){if(ot(A)===!1){let S=A.textures,B=A.width,at=A.height,nt=s.COLOR_BUFFER_BIT,ut=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Q=n.get(A),z=S.length>1;if(z)for(let lt=0;lt<S.length;lt++)e.bindFramebuffer(s.FRAMEBUFFER,Q.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+lt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,Q.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+lt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,Q.__webglMultisampledFramebuffer),A.texture.mipmaps.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Q.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Q.__webglFramebuffer);for(let lt=0;lt<S.length;lt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(nt|=s.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(nt|=s.STENCIL_BUFFER_BIT)),z){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Q.__webglColorRenderbuffer[lt]);let L=n.get(S[lt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,L,0)}s.blitFramebuffer(0,0,B,at,0,0,B,at,nt,s.NEAREST),l===!0&&(ue.length=0,ue.push(s.COLOR_ATTACHMENT0+lt),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&ue.push(ut),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ue))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),z)for(let lt=0;lt<S.length;lt++){e.bindFramebuffer(s.FRAMEBUFFER,Q.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+lt,s.RENDERBUFFER,Q.__webglColorRenderbuffer[lt]);let L=n.get(S[lt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,Q.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+lt,s.TEXTURE_2D,L,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Q.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&l){let S=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[S])}}}function Nt(A){return Math.min(i.maxSamples,A.samples)}function ot(A){let S=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Xt(A){let S=o.render.frame;h.get(A)!==S&&(h.set(A,S),A.update())}function wt(A,S){let B=A.colorSpace,at=A.format,nt=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||B!==qo&&B!==ps&&(le.getTransfer(B)===_e?(at!==Ni||nt!==Yn)&&Vt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ht("WebGLTextures: Unsupported texture color space:",B)),S}function Pt(A){return typeof HTMLImageElement!="undefined"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame!="undefined"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=kt,this.resetTextureUnits=R,this.getTextureUnits=K,this.setTextureUnits=yt,this.setTexture2D=ft,this.setTexture2DArray=xt,this.setTexture3D=Mt,this.setTextureCube=dt,this.rebindTextures=Ce,this.setupRenderTarget=Me,this.updateRenderTargetMipmap=O,this.updateMultisampleRenderTarget=bt,this.setupDepthRenderbuffer=ne,this.setupFrameBufferTexture=jt,this.useMultisampledRTT=ot,this.dispose=G}function nM(s,t){function e(n,i=ps){let r,o=le.getTransfer(i);if(n===Yn)return s.UNSIGNED_BYTE;if(n===_c)return s.UNSIGNED_SHORT_4_4_4_4;if(n===xc)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Xu)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===qu)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===Hu)return s.BYTE;if(n===Wu)return s.SHORT;if(n===co)return s.UNSIGNED_SHORT;if(n===gc)return s.INT;if(n===Li)return s.UNSIGNED_INT;if(n===xi)return s.FLOAT;if(n===Di)return s.HALF_FLOAT;if(n===Yu)return s.ALPHA;if(n===Zu)return s.RGB;if(n===Ni)return s.RGBA;if(n===ls)return s.DEPTH_COMPONENT;if(n===ds)return s.DEPTH_STENCIL;if(n===vc)return s.RED;if(n===yc)return s.RED_INTEGER;if(n===Gs)return s.RG;if(n===Sc)return s.RG_INTEGER;if(n===Mc)return s.RGBA_INTEGER;if(n===xa||n===va||n===ya||n===Sa)if(o===_e)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===xa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===va)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ya)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Sa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===xa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===va)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ya)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Sa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===bc||n===Tc||n===wc||n===Ec)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===bc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Tc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===wc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ec)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ac||n===Cc||n===Rc||n===Pc||n===Ic||n===Ma||n===Lc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ac||n===Cc)return o===_e?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Rc)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Pc)return r.COMPRESSED_R11_EAC;if(n===Ic)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Ma)return r.COMPRESSED_RG11_EAC;if(n===Lc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Dc||n===Nc||n===Uc||n===Oc||n===Fc||n===Bc||n===zc||n===kc||n===Vc||n===Gc||n===Hc||n===Wc||n===Xc||n===qc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Dc)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Nc)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Uc)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Oc)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Fc)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Bc)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===zc)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===kc)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Vc)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Gc)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Hc)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Wc)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Xc)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===qc)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Yc||n===Zc||n===Jc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Yc)return o===_e?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Zc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Jc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===$c||n===Kc||n===ba||n===Qc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===$c)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Kc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ba)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Qc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===pr?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}var iM=`
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

}`,yf=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new ia(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Hi({vertexShader:iM,fragmentShader:sM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new $e(new ra(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Sf=class extends ki{constructor(t,e){super();let n=this,i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,f=null,u=null,m=null,_=typeof XRWebGLBinding!="undefined",p=new yf,g={},v=e.getContextAttributes(),E=null,y=null,T=[],w=[],x=new re,M=null,P=null,C=new wn;C.viewport=new Le;let N=new wn;N.viewport=new Le;let D=[C,N],W=new hc,I=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let ft=T[Y];return ft===void 0&&(ft=new no,T[Y]=ft),ft.getTargetRaySpace()},this.getControllerGrip=function(Y){let ft=T[Y];return ft===void 0&&(ft=new no,T[Y]=ft),ft.getGripSpace()},this.getHand=function(Y){let ft=T[Y];return ft===void 0&&(ft=new no,T[Y]=ft),ft.getHandSpace()};function X(Y){let ft=w.indexOf(Y.inputSource);if(ft===-1)return;let xt=T[ft];xt!==void 0&&(xt.update(Y.inputSource,Y.frame,c||o),xt.dispatchEvent({type:Y.type,data:Y.inputSource}))}function F(){i.removeEventListener("select",X),i.removeEventListener("selectstart",X),i.removeEventListener("selectend",X),i.removeEventListener("squeeze",X),i.removeEventListener("squeezestart",X),i.removeEventListener("squeezeend",X),i.removeEventListener("end",F),i.removeEventListener("inputsourceschange",et);for(let Y=0;Y<T.length;Y++){let ft=w[Y];ft!==null&&(w[Y]=null,T[Y].disconnect(ft))}I=null,G=null,p.reset();for(let Y in g)delete g[Y];if(t.setRenderTarget(E),u=null,f=null,d=null,i=null,y=null,kt.stop(),n.isPresenting=!1,t.setPixelRatio(M),t.setSize(x.width,x.height,!1),P!==null){let Y=P.camera;Y.fov=P.fov,Y.zoom=P.zoom,Y.updateProjectionMatrix(),P=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&Vt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,n.isPresenting===!0&&Vt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return f!==null?f:u},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(i,e)),d},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(Y){if(i=Y,i!==null){if(E=t.getRenderTarget(),i.addEventListener("select",X),i.addEventListener("selectstart",X),i.addEventListener("selectend",X),i.addEventListener("squeeze",X),i.addEventListener("squeezestart",X),i.addEventListener("squeezeend",X),i.addEventListener("end",F),i.addEventListener("inputsourceschange",et),v.xrCompatible!==!0&&await e.makeXRCompatible(),M=t.getPixelRatio(),t.getSize(x),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let xt=null,Mt=null,dt=null;v.depth&&(dt=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,xt=v.stencil?ds:ls,Mt=v.stencil?pr:Li);let Rt={colorFormat:e.RGBA8,depthFormat:dt,scaleFactor:r};d=this.getBinding(),f=d.createProjectionLayer(Rt),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),y=new ri(f.textureWidth,f.textureHeight,{format:Ni,type:Yn,depthTexture:new us(f.textureWidth,f.textureHeight,Mt,void 0,void 0,void 0,void 0,void 0,void 0,xt),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let xt={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(i,e,xt),i.updateRenderState({baseLayer:u}),t.setPixelRatio(1),t.setSize(u.framebufferWidth,u.framebufferHeight,!1),y=new ri(u.framebufferWidth,u.framebufferHeight,{format:Ni,type:Yn,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),kt.setContext(i),kt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function et(Y){for(let ft=0;ft<Y.removed.length;ft++){let xt=Y.removed[ft],Mt=w.indexOf(xt);Mt>=0&&(w[Mt]=null,T[Mt].disconnect(xt))}for(let ft=0;ft<Y.added.length;ft++){let xt=Y.added[ft],Mt=w.indexOf(xt);if(Mt===-1){for(let Rt=0;Rt<T.length;Rt++)if(Rt>=w.length){w.push(xt),Mt=Rt;break}else if(w[Rt]===null){w[Rt]=xt,Mt=Rt;break}if(Mt===-1)break}let dt=T[Mt];dt&&dt.connect(xt)}}function H(Y,ft){ft===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(ft.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(i===null)return;let ft=Y.near,xt=Y.far;p.texture!==null&&(p.depthNear>0&&(ft=p.depthNear),p.depthFar>0&&(xt=p.depthFar)),W.near=N.near=C.near=ft,W.far=N.far=C.far=xt,(I!==W.near||G!==W.far)&&(i.updateRenderState({depthNear:W.near,depthFar:W.far}),I=W.near,G=W.far),W.layers.mask=Y.layers.mask|6,C.layers.mask=W.layers.mask&-5,N.layers.mask=W.layers.mask&-3;let Mt=Y.parent,dt=W.cameras;H(W,Mt);for(let Rt=0;Rt<dt.length;Rt++)H(dt[Rt],Mt);W.projectionMatrix.copy(C.projectionMatrix),W.projectionMatrixInverse.copy(C.projectionMatrixInverse),P===null&&Y.isPerspectiveCamera&&(P={camera:Y,fov:Y.fov,zoom:Y.zoom}),R(Y,W,Mt)};function R(Y,ft,xt){xt===null?Y.matrix.copy(ft.matrixWorld):(Y.matrix.copy(xt.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(ft.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(ft.projectionMatrix),Y.projectionMatrixInverse.copy(ft.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Hl*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return W},this.getFoveation=function(){if(!(f===null&&u===null))return l},this.setFoveation=function(Y){l=Y,f!==null&&(f.fixedFoveation=Y),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=Y)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(W)},this.getCameraTexture=function(Y){return g[Y]};let K=null;function yt(Y,ft){if(h=ft.getViewerPose(c||o),m=ft,h!==null){let xt=h.views;u!==null&&(t.setRenderTargetFramebuffer(y,u.framebuffer),t.setRenderTarget(y));let Mt=!1;xt.length!==W.cameras.length&&(W.cameras.length=0,Mt=!0);for(let Ct=0;Ct<xt.length;Ct++){let Gt=xt[Ct],Lt=null;if(u!==null)Lt=u.getViewport(Gt);else{let Qt=d.getViewSubImage(f,Gt);Lt=Qt.viewport,Ct===0&&(t.setRenderTargetTextures(y,Qt.colorTexture,Qt.depthStencilTexture),t.setRenderTarget(y))}let Ft=D[Ct];Ft===void 0&&(Ft=new wn,Ft.layers.enable(Ct),Ft.viewport=new Le,D[Ct]=Ft),Ft.matrix.fromArray(Gt.transform.matrix),Ft.matrix.decompose(Ft.position,Ft.quaternion,Ft.scale),Ft.projectionMatrix.fromArray(Gt.projectionMatrix),Ft.projectionMatrixInverse.copy(Ft.projectionMatrix).invert(),Ft.viewport.set(Lt.x,Lt.y,Lt.width,Lt.height),Ct===0&&(W.matrix.copy(Ft.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale)),Mt===!0&&W.cameras.push(Ft)}let dt=i.enabledFeatures;if(dt&&dt.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){d=n.getBinding();let Ct=d.getDepthInformation(xt[0]);Ct&&Ct.isValid&&Ct.texture&&p.init(Ct,i.renderState)}if(dt&&dt.includes("camera-access")&&_){t.state.unbindTexture(),d=n.getBinding();for(let Ct=0;Ct<xt.length;Ct++){let Gt=xt[Ct].camera;if(Gt){let Lt=g[Gt];Lt||(Lt=new ia,g[Gt]=Lt);let Ft=d.getCameraImage(Gt);Lt.sourceTexture=Ft}}}}for(let xt=0;xt<T.length;xt++){let Mt=w[xt],dt=T[xt];Mt!==null&&dt!==void 0&&dt.update(Mt,ft,c||o)}K&&K(Y,ft),ft.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ft}),m=null}let kt=new Mm;kt.setAnimationLoop(yt),this.setAnimationLoop=function(Y){K=Y},this.dispose=function(){}}},rM=new ye,Lm=new Wt;Lm.set(-1,0,0,0,1,0,0,0,1);function oM(s,t){function e(p,g){p.matrixAutoUpdate===!0&&p.updateMatrix(),g.value.copy(p.matrix)}function n(p,g){g.color.getRGB(p.fogColor.value,nf(s)),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function i(p,g,v,E,y){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(p,g):g.isMeshLambertMaterial?(r(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(p,g),d(p,g)):g.isMeshPhongMaterial?(r(p,g),h(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(p,g),f(p,g),g.isMeshPhysicalMaterial&&u(p,g,y)):g.isMeshMatcapMaterial?(r(p,g),m(p,g)):g.isMeshDepthMaterial?r(p,g):g.isMeshDistanceMaterial?(r(p,g),_(p,g)):g.isMeshNormalMaterial?r(p,g):g.isLineBasicMaterial?(o(p,g),g.isLineDashedMaterial&&a(p,g)):g.isPointsMaterial?l(p,g,v,E):g.isSpriteMaterial?c(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map,e(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.bumpMap&&(p.bumpMap.value=g.bumpMap,e(g.bumpMap,p.bumpMapTransform),p.bumpScale.value=g.bumpScale,g.side===gn&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,e(g.normalMap,p.normalMapTransform),p.normalScale.value.copy(g.normalScale),g.side===gn&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,e(g.displacementMap,p.displacementMapTransform),p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,p.emissiveMapTransform)),g.specularMap&&(p.specularMap.value=g.specularMap,e(g.specularMap,p.specularMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);let v=t.get(g),E=v.envMap,y=v.envMapRotation;E&&(p.envMap.value=E,p.envMapRotation.value.setFromMatrix4(rM.makeRotationFromEuler(y)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(Lm),p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap&&(p.lightMap.value=g.lightMap,p.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,p.lightMapTransform)),g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,p.aoMapTransform))}function o(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,g.map&&(p.map.value=g.map,e(g.map,p.mapTransform))}function a(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function l(p,g,v,E){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*v,p.scale.value=E*.5,g.map&&(p.map.value=g.map,e(g.map,p.uvTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function c(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map,e(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function h(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4)}function d(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap)}function f(p,g){p.metalness.value=g.metalness,g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,p.metalnessMapTransform)),p.roughness.value=g.roughness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,p.roughnessMapTransform)),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function u(p,g,v){p.ior.value=g.ior,g.diffuseRoughness>0&&(p.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=g.diffuseRoughnessMap,e(g.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,p.sheenColorMapTransform)),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,p.sheenRoughnessMapTransform))),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,p.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(p.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===gn&&p.clearcoatNormalScale.value.negate())),g.dispersion>0&&(p.dispersion.value=g.dispersion),g.retroreflectivity>0&&(p.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(p.iridescence.value=g.iridescence,p.iridescenceIOR.value=g.iridescenceIOR,p.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(p.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,p.iridescenceMapTransform)),g.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,p.transmissionMapTransform)),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(p.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(p.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,p.specularColorMapTransform)),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,g){g.matcap&&(p.matcap.value=g.matcap)}function _(p,g){let v=t.get(g).light;p.referencePosition.value.setFromMatrixPosition(v.matrixWorld),p.nearDistance.value=v.shadow.camera.near,p.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function aM(s,t,e,n){let i={},r={};function o(v,E){let y=E.program;n.uniformBlockBinding(v,y,i[v.id])}function a(v,E){let y=i[v.id];y===void 0&&(m(v),y=l(v),i[v.id]=y,v.addEventListener("dispose",p));let T=E.program;n.updateUBOMapping(v,T);let w=t.render.frame;r[v.id]!==w&&(c(v),r[v.id]=w)}function l(v){let E=s.createBuffer(),y=v.__size,T=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,E),s.bufferData(s.UNIFORM_BUFFER,y,T),s.bindBuffer(s.UNIFORM_BUFFER,null),E}function c(v){let E=i[v.id],y=v.uniforms,T=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,E);for(let w=0,x=y.length;w<x;w++){let M=y[w];if(Array.isArray(M))for(let P=0,C=M.length;P<C;P++)h(M[P],w,P,T);else h(M,w,0,T)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function h(v,E,y,T){if(f(v,E,y,T)===!0){let w=v.__offset,x=v.value;if(Array.isArray(x)){let M=0;for(let P=0;P<x.length;P++){let C=x[P],N=_(C,!0);d(C,v.__data,M),M+=N.storage/Float32Array.BYTES_PER_ELEMENT}}else d(x,v.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,w,v.__data)}}function d(v,E,y){typeof v=="number"||typeof v=="boolean"?E[y]=v:v.isMatrix3?(E[y]=v.elements[0],E[y+1]=v.elements[1],E[y+2]=v.elements[2],E[y+3]=0,E[y+4]=v.elements[3],E[y+5]=v.elements[4],E[y+6]=v.elements[5],E[y+7]=0,E[y+8]=v.elements[6],E[y+9]=v.elements[7],E[y+10]=v.elements[8],E[y+11]=0):ArrayBuffer.isView(v)?E.set(v.subarray(0,E.length-y),y):v.toArray(E,y)}function f(v,E,y,T){let w=v.value,x=E+"_"+y;if(Array.isArray(w)){T[x]===void 0&&(T[x]=[]);let M=T[x],P=!1;for(let C=0;C<w.length;C++)u(w[C],M,C)===!0&&(P=!0);return P}return u(w,T,x)}function u(v,E,y){if(E[y]===void 0)return typeof v=="number"||typeof v=="boolean"?E[y]=v:ArrayBuffer.isView(v)?E[y]=v.slice():E[y]=v.clone(),!0;{let T=E[y];if(typeof v=="number"||typeof v=="boolean"){if(T!==v)return E[y]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(T.equals(v)===!1)return T.copy(v),!0}}return!1}function m(v){let E=v.uniforms,y=0,T=16;for(let x=0,M=E.length;x<M;x++){let P=Array.isArray(E[x])?E[x]:[E[x]];for(let C=0,N=P.length;C<N;C++){let D=P[C],W=Array.isArray(D.value)?D.value:[D.value],I=Array.isArray(E[x])||Array.isArray(D.value),G=y;for(let F=0,et=W.length;F<et;F++){let H=W[F],R=_(H,I),K=y%T,yt=K%R.boundary,kt=K+yt;y+=yt,kt!==0&&T-kt<R.storage&&(y+=T-kt),F===0&&(G=y),y+=R.storage}let X=D.type==="int"?Int32Array:D.type==="uint"?Uint32Array:Float32Array;D.__data=new X((y-G)/Float32Array.BYTES_PER_ELEMENT),D.__offset=G}}let w=y%T;return w>0&&(y+=T-w),v.__size=y,v.__cache={},this}function _(v,E){let y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=16,y.storage=48):v.isMatrix4?(y.boundary=16,y.storage=64):v.isTexture?Vt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(y.boundary=16,y.storage=v.byteLength):Vt("WebGLRenderer: Unsupported uniform value type.",v),E===!0&&(y.boundary=16,y.storage=Math.ceil(y.storage/16)*16),y}function p(v){let E=v.target;E.removeEventListener("dispose",p),s.deleteBuffer(i[E.id]),delete i[E.id],delete r[E.id]}function g(){for(let v in i)s.deleteBuffer(i[v]);i={},r={}}return{bind:o,update:a,dispose:g}}var lM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),qi=null;function cM(){return qi===null&&(qi=new jo(lM,16,16,Gs,Di),qi.name="DFG_LUT",qi.minFilter=Fn,qi.magFilter=Fn,qi.wrapS=zi,qi.wrapT=zi,qi.generateMipmaps=!1,qi.needsUpdate=!0),qi}var nh=class{constructor(t={}){let{canvas:e=qp(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1,outputBufferType:u=Yn}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;let _=u,p=new Set([Mc,Sc,yc]),g=new Set([Yn,Li,co,pr,_c,xc]),v=new Uint32Array(4),E=new Int32Array(4),y={textures:[],min:[],max:[],resolution:[]},T=null,w=null,x=[],M=[],P=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Xi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,N=!1,D=null,W=null,I=null,G=null;this._outputColorSpace=si;let X=0,F=0,et=null,H=-1,R=null,K=new Le,yt=new Le,kt=null,Y=new Jt(0),ft=0,xt=e.width,Mt=e.height,dt=1,Rt=null,de=null,Ct=new Le(0,0,xt,Mt),Gt=new Le(0,0,xt,Mt),Lt=!1,Ft=new Fs,Qt=new Jl,he=!1,Z=!1,jt=new ye,ze=new V,me=new Le,ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ce=!1;function Me(){return et===null?dt:1}let O=n;function ue(b,U){return e.getContext(b,U)}let bt,Nt,ot,Xt,wt,Pt,A,S,B,at,nt,ut,Q,z,tt,lt,L,j,$,pt,ht,mt,ct;try{let b={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",st,!1),e.addEventListener("webglcontextrestored",_t,!1),e.addEventListener("webglcontextcreationerror",rt,!1),O===null){let U="webgl2";if(O=ue(U,b),O===null)throw ue(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}gt()}catch(b){throw e.removeEventListener("webglcontextlost",st,!1),e.removeEventListener("webglcontextrestored",_t,!1),e.removeEventListener("webglcontextcreationerror",rt,!1),Ht("WebGLRenderer: "+b.message),b}function gt(){bt=new yy(O),bt.init(),ht=new nM(O,bt),Nt=new cy(O,bt,t,ht),ot=new tM(O,bt),Nt.reversedDepthBuffer&&f&&ot.buffers.depth.setReversed(!0),W=O.createFramebuffer(),I=O.createFramebuffer(),G=O.createFramebuffer(),Xt=new by(O),wt=new kS,Pt=new eM(O,bt,ot,wt,Nt,ht,Xt),A=new vy(C),S=new w0(O),mt=new ay(O,S),B=new Sy(O,S,Xt,mt),at=new wy(O,B,S,mt,Xt),j=new Ty(O,Nt,Pt),tt=new hy(wt),nt=new zS(C,A,bt,Nt,mt,tt),ut=new oM(C,wt),Q=new GS,z=new ZS(bt),L=new oy(C,A,ot,at,m,l),lt=new jS(C,at,Nt),ct=new aM(O,Xt,Nt,ot),$=new ly(O,bt,Xt),pt=new My(O,bt,Xt),Xt.programs=nt.programs,C.capabilities=Nt,C.extensions=bt,C.properties=wt,C.renderLists=Q,C.shadowMap=lt,C.state=ot,C.info=Xt}_!==Yn&&(P=new Ay(_,e.width,e.height,a,i,r));let it=new Sf(C,O);this.xr=it,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let b=bt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=bt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return dt},this.setPixelRatio=function(b){b!==void 0&&(dt=b,this.setSize(xt,Mt,!1))},this.getSize=function(b){return b.set(xt,Mt)},this.setSize=function(b,U,J=!0){if(it.isPresenting){Vt("WebGLRenderer: Can't change size while VR device is presenting.");return}xt=b,Mt=U,e.width=Math.floor(b*dt),e.height=Math.floor(U*dt),J===!0&&(e.style.width=b+"px",e.style.height=U+"px"),P!==null&&P.setSize(e.width,e.height),this.setViewport(0,0,b,U)},this.getDrawingBufferSize=function(b){return b.set(xt*dt,Mt*dt).floor()},this.setDrawingBufferSize=function(b,U,J){xt=b,Mt=U,dt=J,e.width=Math.floor(b*J),e.height=Math.floor(U*J),this.setViewport(0,0,b,U)},this.setEffects=function(b){if(_===Yn){Ht("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let U=0;U<b.length;U++)if(b[U].isOutputPass===!0){Vt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}P.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(K)},this.getViewport=function(b){return b.copy(Ct)},this.setViewport=function(b,U,J,k){b.isVector4?Ct.set(b.x,b.y,b.z,b.w):Ct.set(b,U,J,k),ot.viewport(K.copy(Ct).multiplyScalar(Me()).round())},this.getScissor=function(b){return b.copy(Gt)},this.setScissor=function(b,U,J,k){b.isVector4?Gt.set(b.x,b.y,b.z,b.w):Gt.set(b,U,J,k),ot.scissor(yt.copy(Gt).multiplyScalar(Me()).round())},this.getScissorTest=function(){return Lt},this.setScissorTest=function(b){ot.setScissorTest(Lt=b)},this.setOpaqueSort=function(b){Rt=b},this.setTransparentSort=function(b){de=b},this.getClearColor=function(b){return b.copy(L.getClearColor())},this.setClearColor=function(){L.setClearColor(...arguments)},this.getClearAlpha=function(){return L.getClearAlpha()},this.setClearAlpha=function(){L.setClearAlpha(...arguments)},this.clear=function(b=!0,U=!0,J=!0){let k=0;if(b){let q=!1;if(et!==null){let St=et.texture.format;q=p.has(St)}if(q){let St=et.texture.type,Dt=g.has(St),vt=L.getClearColor(),At=L.getClearAlpha(),Bt=vt.r,Yt=vt.g,oe=vt.b;Dt?(v[0]=Bt,v[1]=Yt,v[2]=oe,v[3]=At,O.clearBufferuiv(O.COLOR,0,v)):(E[0]=Bt,E[1]=Yt,E[2]=oe,E[3]=At,O.clearBufferiv(O.COLOR,0,E))}else k|=O.COLOR_BUFFER_BIT}U&&(k|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),J&&(k|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k!==0&&O.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),D=b},this.dispose=function(){e.removeEventListener("webglcontextlost",st,!1),e.removeEventListener("webglcontextrestored",_t,!1),e.removeEventListener("webglcontextcreationerror",rt,!1),L.dispose(),Q.dispose(),z.dispose(),Pt.dispose(),wt.dispose(),A.dispose(),at.dispose(),B.dispose(),mt.dispose(),ct.dispose(),nt.dispose(),it.dispose(),it.removeEventListener("sessionstart",be),it.removeEventListener("sessionend",ge),tn.stop()};function st(b){b.preventDefault(),ju("WebGLRenderer: Context Lost."),N=!0}function _t(){ju("WebGLRenderer: Context Restored."),N=!1;let b=Xt.autoReset,U=lt.enabled,J=lt.autoUpdate,k=lt.needsUpdate,q=lt.type;gt(),Xt.autoReset=b,lt.enabled=U,lt.autoUpdate=J,lt.needsUpdate=k,lt.type=q}function rt(b){Ht("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Et(b){let U=b.target;U.removeEventListener("dispose",Et),ie(U)}function ie(b){qt(b),wt.remove(b)}function qt(b){let U=wt.get(b).programs;U!==void 0&&(U.forEach(function(J){nt.releaseProgram(J)}),b.isShaderMaterial&&nt.releaseShaderCache(b))}this.renderBufferDirect=function(b,U,J,k,q,St){U===null&&(U=ne);let Dt=q.isMesh&&q.matrixWorld.determinantAffine()<0,vt=mi(b,U,J,k,q);ot.setMaterial(k,Dt);let At=J.index,Bt=1;if(k.wireframe===!0){if(At=B.getWireframeAttribute(J),At===void 0)return;Bt=2}let Yt=J.drawRange,oe=J.attributes.position,Ut=Yt.start*Bt,ae=(Yt.start+Yt.count)*Bt;St!==null&&(Ut=Math.max(Ut,St.start*Bt),ae=Math.min(ae,(St.start+St.count)*Bt)),At!==null?(Ut=Math.max(Ut,0),ae=Math.min(ae,At.count)):oe!=null&&(Ut=Math.max(Ut,0),ae=Math.min(ae,oe.count));let Ze=ae-Ut;if(Ze<0||Ze===1/0)return;mt.setup(q,k,vt,J,At);let Ae,we=$;if(At!==null&&(Ae=S.get(At),we=pt,we.setIndex(Ae)),q.isMesh)k.wireframe===!0?(ot.setLineWidth(k.wireframeLinewidth*Me()),we.setMode(O.LINES)):we.setMode(O.TRIANGLES);else if(q.isLine){let Sn=k.linewidth;Sn===void 0&&(Sn=1),ot.setLineWidth(Sn*Me()),q.isLineSegments?we.setMode(O.LINES):q.isLineLoop?we.setMode(O.LINE_LOOP):we.setMode(O.LINE_STRIP)}else q.isPoints?we.setMode(O.POINTS):q.isSprite&&we.setMode(O.TRIANGLES);if(q.isBatchedMesh)if(bt.get("WEBGL_multi_draw"))we.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{let Sn=q._multiDrawStarts,Ot=q._multiDrawCounts,Un=q._multiDrawCount,pe=At?S.get(At).bytesPerElement:1,sr=wt.get(k).currentProgram.getUniforms();for(let Mn=0;Mn<Un;Mn++)sr.setValue(O,"_gl_DrawID",Mn),we.render(Sn[Mn]/pe,Ot[Mn])}else if(q.isInstancedMesh)we.renderInstances(Ut,Ze,q.count);else if(J.isInstancedBufferGeometry){let Sn=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,Ot=Math.min(J.instanceCount,Sn);we.renderInstances(Ut,Ze,Ot)}else we.render(Ut,Ze)};function Pe(b,U,J,k){D!==null&&b.isNodeMaterial&&D.setObject(k,b),he===!0&&tt.setState(b,J,!1),b.transparent===!0&&b.side===Wi&&b.forceSinglePass===!1?(b.side=gn,b.needsUpdate=!0,ei(b,U,k),b.side=Vs,b.needsUpdate=!0,ei(b,U,k),b.side=Wi):ei(b,U,k)}this.compile=function(b,U,J=null){J===null&&(J=b),D!==null&&D.renderStart(b,U,J),w=z.get(J),w.init(U),M.push(w),J.traverseVisible(function(q){q.isLight&&q.layers.test(U.layers)&&(w.pushLight(q),q.castShadow&&w.pushShadow(q))}),b!==J&&b.traverseVisible(function(q){q.isLight&&q.layers.test(U.layers)&&(w.pushLight(q),q.castShadow&&w.pushShadow(q))}),w.setupLights(),D!==null&&D.updateLights(w.state.lightsArray),Z=this.localClippingEnabled,he=tt.init(this.clippingPlanes,Z),he===!0&&tt.setGlobalState(this.clippingPlanes,U),D!==null&&lt.render(w.state.shadowsArray,J,U);let k=new Set;return b.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;let St=q.material;if(St)if(Array.isArray(St))for(let Dt=0;Dt<St.length;Dt++){let vt=St[Dt];Pe(vt,J,U,q),k.add(vt)}else Pe(St,J,U,q),k.add(St)}),w=M.pop(),D!==null&&D.renderEnd(),k},this.compileAsync=function(b,U,J=null){let k=this.compile(b,U,J);return new Promise(q=>{function St(){if(k.forEach(function(Dt){let At=wt.get(Dt).currentProgram;(At===void 0||At.isReady())&&k.delete(Dt)}),k.size===0){q(b);return}setTimeout(St,10)}bt.get("KHR_parallel_shader_compile")!==null?St():setTimeout(St,10)})};let qe=null;function Ie(b){qe&&qe(b)}function be(){tn.stop()}function ge(){tn.start()}let tn=new Mm;tn.setAnimationLoop(Ie),typeof self!="undefined"&&tn.setContext(self),this.setAnimationLoop=function(b){qe=b,it.setAnimationLoop(b),b===null?tn.stop():tn.start()},it.addEventListener("sessionstart",be),it.addEventListener("sessionend",ge),this.render=function(b,U){if(U!==void 0&&U.isCamera!==!0){Ht("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;D!==null&&D.renderStart(b,U);let J=it.enabled===!0&&it.isPresenting===!0,k=P!==null&&(et===null||J)&&P.begin(C,et);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),it.enabled===!0&&it.isPresenting===!0&&(P===null||P.isCompositing()===!1)&&(it.cameraAutoUpdate===!0&&it.updateCamera(U),U=it.getCamera()),b.isScene===!0&&b.onBeforeRender(C,b,U,et),w=z.get(b,M.length),w.init(U),w.state.textureUnits=Pt.getTextureUnits(),M.push(w),jt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),U.isArrayCamera?Qt.setFromArrayCamera(U):Ft.setFromProjectionMatrix(jt,_i,U.reversedDepth),Z=this.localClippingEnabled,he=tt.init(this.clippingPlanes,Z),T=Q.get(b,x.length),T.init(),x.push(T),this.info.render.frame++,it.enabled===!0&&it.isPresenting===!0){let Dt=C.xr.getDepthSensingMesh();Dt!==null&&Te(Dt,U,-1/0,C.sortObjects)}Te(b,U,0,C.sortObjects),T.finish(),D!==null&&D.updateLights(w.state.lightsArray),C.sortObjects===!0&&T.sort(Rt,de),Ce=it.enabled===!1||it.isPresenting===!1||it.hasDepthSensing()===!1,Ce&&L.addToRenderList(T,b),this.info.autoReset===!0&&this.info.reset(),he===!0&&tt.beginShadows();let q=w.state.shadowsArray;if(lt.render(q,b,U),he===!0&&tt.endShadows(),(k&&P.hasRenderPass())===!1){let Dt=T.opaque,vt=T.transmissive;if(w.setupLights(),U.isArrayCamera){let At=U.cameras;if(vt.length>0)for(let Bt=0,Yt=At.length;Bt<Yt;Bt++){let oe=At[Bt];ti(Dt,vt,b,oe)}Ce&&L.render(b);for(let Bt=0,Yt=At.length;Bt<Yt;Bt++){let oe=At[Bt];yn(T,b,oe,oe.viewport)}}else vt.length>0&&ti(Dt,vt,b,U),Ce&&L.render(b),yn(T,b,U)}et!==null&&F===0&&(Pt.updateMultisampleRenderTarget(et),Pt.updateRenderTargetMipmap(et)),k&&P.end(C),b.isScene===!0&&b.onAfterRender(C,b,U),mt.resetDefaultState(),H=-1,R=null,M.pop(),M.length>0?(w=M[M.length-1],Pt.setTextureUnits(w.state.textureUnits),he===!0&&tt.setGlobalState(C.clippingPlanes,w.state.camera)):w=null,x.pop(),x.length>0?T=x[x.length-1]:T=null,D!==null&&D.renderEnd()};function Te(b,U,J,k){if(b.visible===!1)return;if(b.layers.test(U.layers)){if(b.isGroup)J=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(U);else if(b.isLight)w.pushLight(b),b.castShadow&&w.pushShadow(b);else if(b.isSprite){let Dt=U.isArrayCamera?Qt:Ft;if(!b.frustumCulled||b.intersectsFrustum(Dt)){k&&me.setFromMatrixPosition(b.matrixWorld).applyMatrix4(jt);let vt=at.update(b),At=b.material;At.visible&&T.push(b,vt,At,J,me.z,null,U)}}else if(b.isMesh||b.isLine||b.isPoints){let Dt=U.isArrayCamera?Qt:Ft;if(!b.frustumCulled||b.intersectsFrustum(Dt)){let vt=at.update(b),At=b.material;if(k&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),me.copy(b.boundingSphere.center)):(vt.boundingSphere===null&&vt.computeBoundingSphere(),me.copy(vt.boundingSphere.center)),me.applyMatrix4(b.matrixWorld).applyMatrix4(jt)),Array.isArray(At)){let Bt=vt.groups;for(let Yt=0,oe=Bt.length;Yt<oe;Yt++){let Ut=Bt[Yt],ae=At[Ut.materialIndex];ae&&ae.visible&&T.push(b,vt,ae,J,me.z,Ut,U)}}else At.visible&&T.push(b,vt,At,J,me.z,null,U)}}}let St=b.children;for(let Dt=0,vt=St.length;Dt<vt;Dt++)Te(St[Dt],U,J,k)}function yn(b,U,J,k){let{opaque:q,transmissive:St,transparent:Dt}=b;w.setupLightsView(J),he===!0&&tt.setGlobalState(C.clippingPlanes,J),k&&ot.viewport(K.copy(k)),q.length>0&&ke(q,U,J),St.length>0&&ke(St,U,J),Dt.length>0&&ke(Dt,U,J),ot.buffers.depth.setTest(!0),ot.buffers.depth.setMask(!0),ot.buffers.color.setMask(!0),ot.setPolygonOffset(!1)}function ti(b,U,J,k){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[k.id]===void 0){let Ut=bt.has("EXT_color_buffer_half_float")||bt.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[k.id]=new ri(1,1,{generateMipmaps:!0,type:Ut?Di:Yn,minFilter:fs,samples:Math.max(4,Nt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:le.workingColorSpace})}let St=w.state.transmissionRenderTarget[k.id],Dt=k.viewport||K;St.setSize(Dt.z*C.transmissionResolutionScale,Dt.w*C.transmissionResolutionScale);let vt=C.getRenderTarget(),At=C.getActiveCubeFace(),Bt=C.getActiveMipmapLevel();C.setRenderTarget(St),C.getClearColor(Y),ft=C.getClearAlpha(),ft<1&&C.setClearColor(16777215,.5),C.clear(),Ce&&L.render(J);let Yt=C.toneMapping;C.toneMapping=Xi;let oe=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),w.setupLightsView(k),he===!0&&tt.setGlobalState(C.clippingPlanes,k),ke(b,J,k),Pt.updateMultisampleRenderTarget(St),Pt.updateRenderTargetMipmap(St),bt.has("WEBGL_multisampled_render_to_texture")===!1){let Ut=!1;for(let ae=0,Ze=U.length;ae<Ze;ae++){let Ae=U[ae],{object:we,geometry:Sn,material:Ot,group:Un}=Ae;if(Ot.side===Wi&&we.layers.test(k.layers)){let pe=Ot.side;Ot.side=gn,Ot.needsUpdate=!0,Ye(we,J,k,Sn,Ot,Un),Ot.side=pe,Ot.needsUpdate=!0,Ut=!0}}Ut===!0&&(Pt.updateMultisampleRenderTarget(St),Pt.updateRenderTargetMipmap(St))}C.setRenderTarget(vt,At,Bt),C.setClearColor(Y,ft),oe!==void 0&&(k.viewport=oe),C.toneMapping=Yt}function ke(b,U,J){let k=U.isScene===!0?U.overrideMaterial:null;for(let q=0,St=b.length;q<St;q++){let Dt=b[q],{object:vt,geometry:At,group:Bt}=Dt,Yt=Dt.material;Yt.allowOverride===!0&&k!==null&&(Yt=k),vt.layers.test(J.layers)&&Ye(vt,U,J,At,Yt,Bt)}}function Ye(b,U,J,k,q,St){D!==null&&q.isNodeMaterial&&D.setObject(b,q),b.onBeforeRender(C,U,J,k,q,St),b.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),q.onBeforeRender(C,U,J,k,b,St),q.transparent===!0&&q.side===Wi&&q.forceSinglePass===!1?(q.side=gn,q.needsUpdate=!0,C.renderBufferDirect(J,U,k,q,b,St),q.side=Vs,q.needsUpdate=!0,C.renderBufferDirect(J,U,k,q,b,St),q.side=Wi):C.renderBufferDirect(J,U,k,q,b,St),b.onAfterRender(C,U,J,k,q,St)}function en(b){let U=0;for(let J of b)J.texture!==null&&U++;return U}function ei(b,U,J){U.isScene!==!0&&(U=ne);let k=wt.get(b),q=w.state.lights,St=w.state.shadowsArray,Dt=q.state.version,vt=nt.getParameters(b,q.state,St,U,J,w.state.lightProbeGridArray),At=nt.getProgramCacheKey(vt),Bt=k.programs;k.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?U.environment:null,k.fog=U.fog;let Yt=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;k.envMap=A.get(b.envMap||k.environment,Yt),k.envMapRotation=k.environment!==null&&b.envMap===null?U.environmentRotation:b.envMapRotation,Bt===void 0&&(b.addEventListener("dispose",Et),Bt=new Map,k.programs=Bt,k.programVariants=new Map);let oe=Bt.get(At);if(oe!==void 0){if(k.currentProgram===oe&&k.lightsStateVersion===Dt)return Ve(b,vt),oe}else vt.uniforms=nt.getUniforms(b),D!==null&&b.isNodeMaterial&&D.build(b,J,vt),b.onBeforeCompile(vt,C),oe=nt.acquireProgram(vt,At),Bt.set(At,oe),k.uniforms=vt.uniforms;let Ut=k.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ut.clippingPlanes=tt.uniform),Ve(b,vt),k.needsLights=ll(b),k.lightsStateVersion=Dt,k.needsLights&&(Ut.ambientLightColor.value=q.state.ambient,Ut.lightProbe.value=q.state.probe,Ut.sunLights.value=q.state.sun,Ut.sunLightShadows.value=q.state.sunShadow,Ut.directionalLights.value=q.state.directional,Ut.directionalLightShadows.value=q.state.directionalShadow,Ut.spotLights.value=q.state.spot,Ut.spotLightShadows.value=q.state.spotShadow,Ut.rectAreaLights.value=q.state.rectArea,Ut.ltc_1.value=q.state.rectAreaLTC1,Ut.ltc_2.value=q.state.rectAreaLTC2,Ut.pointLights.value=q.state.point,Ut.pointLightShadows.value=q.state.pointShadow,Ut.hemisphereLights.value=q.state.hemi,Ut.sunShadowMatrix.value=q.state.sunShadowMatrix,Ut.sunShadowCascade.value=q.state.sunShadowCascade,Ut.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Ut.spotLightMatrix.value=q.state.spotLightMatrix,Ut.spotLightMap.value=q.state.spotLightMap,Ut.pointShadowMatrix.value=q.state.pointShadowMatrix),k.numLightProbeGrids=en(w.state.lightProbeGridArray),k.currentProgram=oe,k.uniformsList=null,oe}function Or(b,U,J,k,q){let St=wt.get(b),Dt=St.currentProgram.id+","+k+","+q,vt=St.programVariants.get(Dt);return vt===void 0?(vt=ei(b,U,J),St.programVariants.set(Dt,vt)):(St.currentProgram=vt,St.uniformsList=null,St.outputColorSpace=k,St.toneMapping=q),vt}function nn(b){if(b.uniformsList===null){let U=b.currentProgram.getUniforms();b.uniformsList=ho.seqWithValue(U.seq,b.uniforms)}return b.uniformsList}function Ve(b,U){let J=wt.get(b);J.outputColorSpace=U.outputColorSpace,J.batching=U.batching,J.batchingColor=U.batchingColor,J.instancing=U.instancing,J.instancingColor=U.instancingColor,J.instancingMorph=U.instancingMorph,J.skinning=U.skinning,J.morphTargets=U.morphTargets,J.morphNormals=U.morphNormals,J.morphColors=U.morphColors,J.morphTargetsCount=U.morphTargetsCount,J.numClippingPlanes=U.numClippingPlanes,J.numIntersection=U.numClipIntersection,J.vertexAlphas=U.vertexAlphas,J.vertexTangents=U.vertexTangents,J.toneMapping=U.toneMapping}function mi(b,U,J,k,q){U.isScene!==!0&&(U=ne),Pt.resetTextureUnits();let St=U.fog,Dt=k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial?U.environment:null,vt=et===null?C.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:le.workingColorSpace,At=k.isMeshStandardMaterial||k.isMeshLambertMaterial&&!k.envMap||k.isMeshPhongMaterial&&!k.envMap,Bt=A.get(k.envMap||Dt,At),Yt=k.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,oe=!!J.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Ut=!!J.morphAttributes.position,ae=!!J.morphAttributes.normal,Ze=!!J.morphAttributes.color,Ae=Xi;k.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(Ae=C.toneMapping);let we=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Sn=we!==void 0?we.length:0,Ot=wt.get(k),Un=w.state.lights;if(he===!0&&(Z===!0||b!==R)){let Ne=b===R&&k.id===H;tt.setState(k,b,Ne)}let pe=!1,sr=!1;k.version===Ot.__version?Ot.needsLights&&Ot.lightsStateVersion!==Un.state.version||q.isBatchedMesh&&Ot.batching===!1||!q.isBatchedMesh&&Ot.batching===!0||q.isBatchedMesh&&Ot.batchingColor===!0&&q._colorsTexture===null||q.isBatchedMesh&&Ot.batchingColor===!1&&q._colorsTexture!==null||q.isInstancedMesh&&Ot.instancing===!1||!q.isInstancedMesh&&Ot.instancing===!0||q.isSkinnedMesh&&Ot.skinning===!1||!q.isSkinnedMesh&&Ot.skinning===!0||q.isInstancedMesh&&Ot.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Ot.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Ot.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Ot.instancingMorph===!1&&q.morphTexture!==null||Ot.envMap!==Bt||k.fog===!0&&Ot.fog!==St||Ot.numClippingPlanes!==void 0&&(Ot.numClippingPlanes!==tt.numPlanes||Ot.numIntersection!==tt.numIntersection)||Ot.vertexAlphas!==Yt||Ot.vertexTangents!==oe||Ot.morphTargets!==Ut||Ot.morphNormals!==ae||Ot.morphColors!==Ze||Ot.morphTargetsCount!==Sn||Ot.numLightProbeGrids!==en(w.state.lightProbeGridArray)?pe=!0:(Ot.outputColorSpace!==vt||Ot.toneMapping!==Ae)&&(sr=!0):(pe=!0,Ot.__version=k.version);let Mn=Ot.currentProgram;(pe===!0||sr===!0)&&(Mn=sr===!0?Or(k,U,q,vt,Ae):ei(k,U,q),D&&k.isNodeMaterial&&D.onUpdateProgram(k,Mn,Ot));let cl=!1,Cs=!1,rr=!1,fe=Mn.getUniforms(),mn=Ot.uniforms;if(ot.useProgram(Mn.program)&&(cl=!0,Cs=!0,rr=!0),k.id!==H&&(H=k.id,Cs=!0),cl||R!==b){ot.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),fe.setValue(O,"projectionMatrix",b.projectionMatrix),fe.setValue(O,"viewMatrix",b.matrixWorldInverse);let hn=fe.map.cameraPosition;hn!==void 0&&hn.setValue(O,ze.setFromMatrixPosition(b.matrixWorld)),Nt.logarithmicDepthBuffer&&fe.setValue(O,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&fe.setValue(O,"isOrthographic",b.isOrthographicCamera===!0),R!==b&&(R=b,Cs=!0,rr=!0)}if(Ot.needsLights&&(Un.state.sunShadowMap.length>0&&fe.setValue(O,"sunShadowMap",Un.state.sunShadowMap,Pt),Un.state.directionalShadowMap.length>0&&fe.setValue(O,"directionalShadowMap",Un.state.directionalShadowMap,Pt),Un.state.spotShadowMap.length>0&&fe.setValue(O,"spotShadowMap",Un.state.spotShadowMap,Pt),Un.state.pointShadowMap.length>0&&fe.setValue(O,"pointShadowMap",Un.state.pointShadowMap,Pt)),q.isSkinnedMesh){fe.setOptional(O,q,"bindMatrix"),fe.setOptional(O,q,"bindMatrixInverse");let Ne=q.skeleton;Ne&&(Ne.boneTexture===null&&Ne.computeBoneTexture(),fe.setValue(O,"boneTexture",Ne.boneTexture,Pt))}q.isBatchedMesh&&(fe.setOptional(O,q,"batchingTexture"),fe.setValue(O,"batchingTexture",q._matricesTexture,Pt),fe.setOptional(O,q,"batchingIdTexture"),fe.setValue(O,"batchingIdTexture",q._indirectTexture,Pt),fe.setOptional(O,q,"batchingColorTexture"),q._colorsTexture!==null&&fe.setValue(O,"batchingColorTexture",q._colorsTexture,Pt));let wi=J.morphAttributes;if((wi.position!==void 0||wi.normal!==void 0||wi.color!==void 0)&&j.update(q,J,Mn),(Cs||Ot.receiveShadow!==q.receiveShadow)&&(Ot.receiveShadow=q.receiveShadow,fe.setValue(O,"receiveShadow",q.receiveShadow)),(k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial)&&k.envMap===null&&U.environment!==null&&(mn.envMapIntensity.value=U.environmentIntensity),mn.dfgLUT!==void 0&&(mn.dfgLUT.value=cM()),Cs){if(fe.setValue(O,"toneMappingExposure",C.toneMappingExposure),Ot.needsLights&&Fo(mn,rr),St&&k.fog===!0&&ut.refreshFogUniforms(mn,St),ut.refreshMaterialUniforms(mn,k,dt,Mt,w.state.transmissionRenderTarget[b.id]),Ot.needsLights&&Ot.numLightProbeGrids>0){let Ne=y,hn=0;for(let ts of w.state.lightProbeGridArray)ts.texture!==null&&(Ne.textures[hn]=ts.texture,Ne.min[hn]=ts.boundingBox.min,Ne.max[hn]=ts.boundingBox.max,Ne.resolution[hn]=ts.resolution,hn++);for(let ts in Ne)Ne[ts].length=hn;mn.probesSH.value=Ne.textures,mn.probesMin.value=Ne.min,mn.probesMax.value=Ne.max,mn.probesResolution.value=Ne.resolution}ho.upload(O,nn(Ot),mn,Pt)}if(k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(ho.upload(O,nn(Ot),mn,Pt),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&fe.setValue(O,"center",q.center),fe.setValue(O,"modelViewMatrix",q.modelViewMatrix),fe.setValue(O,"normalMatrix",q.normalMatrix),fe.setValue(O,"modelMatrix",q.matrixWorld),k.uniformsGroups!==void 0){let Ne=k.uniformsGroups;for(let hn=0,ts=Ne.length;hn<ts;hn++){let zd=Ne[hn];ct.update(zd,Mn),ct.bind(zd,Mn)}}return Mn}function Fo(b,U){b.ambientLightColor.needsUpdate=U,b.lightProbe.needsUpdate=U,b.sunLights.needsUpdate=U,b.sunLightShadows.needsUpdate=U,b.directionalLights.needsUpdate=U,b.directionalLightShadows.needsUpdate=U,b.pointLights.needsUpdate=U,b.pointLightShadows.needsUpdate=U,b.spotLights.needsUpdate=U,b.spotLightShadows.needsUpdate=U,b.rectAreaLights.needsUpdate=U,b.hemisphereLights.needsUpdate=U}function ll(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return et},this.setRenderTargetTextures=function(b,U,J){let k=wt.get(b);k.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),wt.get(b.texture).__webglTexture=U,wt.get(b.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:J,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,U){let J=wt.get(b);J.__webglFramebuffer=U,J.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(b,U=0,J=0){et=b,X=U,F=J;let k=null,q=!1,St=!1;if(b){let vt=wt.get(b);if(vt.__useDefaultFramebuffer!==void 0){ot.bindFramebuffer(O.FRAMEBUFFER,vt.__webglFramebuffer),K.copy(b.viewport),yt.copy(b.scissor),kt=b.scissorTest,ot.viewport(K),ot.scissor(yt),ot.setScissorTest(kt),H=-1;return}else if(vt.__webglFramebuffer===void 0)Pt.setupRenderTarget(b);else if(vt.__hasExternalTextures)Pt.rebindTextures(b,wt.get(b.texture).__webglTexture,wt.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let Yt=b.depthTexture;if(vt.__boundDepthTexture!==Yt){if(Yt!==null&&wt.has(Yt)&&(b.width!==Yt.image.width||b.height!==Yt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Pt.setupDepthRenderbuffer(b)}}let At=b.texture;(At.isData3DTexture||At.isDataArrayTexture||At.isCompressedArrayTexture)&&(St=!0);let Bt=wt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Bt[U])?k=Bt[U][J]:k=Bt[U],q=!0):b.samples>0&&Pt.useMultisampledRTT(b)===!1?k=wt.get(b).__webglMultisampledFramebuffer:Array.isArray(Bt)?k=Bt[J]:k=Bt,K.copy(b.viewport),yt.copy(b.scissor),kt=b.scissorTest}else K.copy(Ct).multiplyScalar(dt).floor(),yt.copy(Gt).multiplyScalar(dt).floor(),kt=Lt;if(J!==0&&(k=W),ot.bindFramebuffer(O.FRAMEBUFFER,k)&&ot.drawBuffers(b,k),ot.viewport(K),ot.scissor(yt),ot.setScissorTest(kt),q){let vt=wt.get(b.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+U,vt.__webglTexture,J)}else if(St){let vt=U;for(let At=0;At<b.textures.length;At++){let Bt=wt.get(b.textures[At]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+At,Bt.__webglTexture,J,vt)}}else if(b!==null&&J!==0){let vt=wt.get(b.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,vt.__webglTexture,J)}H=-1};function As(b){let U=wt.get(b);return(U.__readFormat!==b.format||U.__readType!==b.type)&&(U.__readFormat=b.format,U.__readType=b.type,U.__formatReadable=Nt.textureFormatReadable(b.format),U.__typeReadable=Nt.textureTypeReadable(b.type)),U}this.readRenderTargetPixels=function(b,U,J,k,q,St,Dt,vt=0){if(!(b&&b.isWebGLRenderTarget)){Ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let At=wt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Dt!==void 0&&(At=At[Dt],Array.isArray(At)&&(At=At[0])),At){ot.bindFramebuffer(O.FRAMEBUFFER,At);try{let Bt=b.textures[vt],Yt=Bt.format,oe=Bt.type;b.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+vt);let Ut=As(Bt);if(Ut.__formatReadable===!1){Ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ut.__typeReadable===!1){Ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=b.width-k&&J>=0&&J<=b.height-q&&O.readPixels(U,J,k,q,ht.convert(Yt),ht.convert(oe),St)}finally{let Bt=et!==null?wt.get(et).__webglFramebuffer:null;ot.bindFramebuffer(O.FRAMEBUFFER,Bt)}}},this.readRenderTargetPixelsAsync=async function(b,U,J,k,q,St,Dt,vt=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let At=wt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Dt!==void 0&&(At=At[Dt],Array.isArray(At)&&(At=At[0])),At)if(U>=0&&U<=b.width-k&&J>=0&&J<=b.height-q){ot.bindFramebuffer(O.FRAMEBUFFER,At);let Bt=b.textures[vt],Yt=Bt.format,oe=Bt.type;b.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+vt);let Ut=As(Bt);if(Ut.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ut.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ae=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,ae),O.bufferData(O.PIXEL_PACK_BUFFER,St.byteLength,O.STREAM_READ),O.readPixels(U,J,k,q,ht.convert(Yt),ht.convert(oe),0),O.bindBuffer(O.PIXEL_PACK_BUFFER,null);let Ze=et!==null?wt.get(et).__webglFramebuffer:null;ot.bindFramebuffer(O.FRAMEBUFFER,Ze);let Ae=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await Zp(O,Ae,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,ae),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,St),O.bindBuffer(O.PIXEL_PACK_BUFFER,null),O.deleteBuffer(ae),O.deleteSync(Ae),St}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,U=null,J=0){let k=Math.pow(2,-J),q=Math.floor(b.image.width*k),St=Math.floor(b.image.height*k),Dt=U!==null?U.x:0,vt=U!==null?U.y:0;Pt.setTexture2D(b,0),O.copyTexSubImage2D(O.TEXTURE_2D,J,0,0,Dt,vt,q,St),ot.unbindTexture()},this.copyTextureToTexture=function(b,U,J=null,k=null,q=0,St=0){let Dt,vt,At,Bt,Yt,oe,Ut,ae,Ze,Ae=b.isCompressedTexture?b.mipmaps[St]:b.image;if(J!==null)Dt=J.max.x-J.min.x,vt=J.max.y-J.min.y,At=J.isBox3?J.max.z-J.min.z:1,Bt=J.min.x,Yt=J.min.y,oe=J.isBox3?J.min.z:0;else{let fe=Math.pow(2,-q);Dt=Math.floor(Ae.width*fe),vt=Math.floor(Ae.height*fe),b.isDataArrayTexture?At=Ae.depth:b.isData3DTexture?At=Math.floor(Ae.depth*fe):At=1,Bt=0,Yt=0,oe=0}k!==null?(Ut=k.x,ae=k.y,Ze=k.z):(Ut=0,ae=0,Ze=0);let we=ht.convert(U.format),Sn=ht.convert(U.type),Ot;U.isData3DTexture?(Pt.setTexture3D(U,0),Ot=O.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(Pt.setTexture2DArray(U,0),Ot=O.TEXTURE_2D_ARRAY):(Pt.setTexture2D(U,0),Ot=O.TEXTURE_2D),ot.activeTexture(O.TEXTURE0),ot.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,U.flipY),ot.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),ot.pixelStorei(O.UNPACK_ALIGNMENT,U.unpackAlignment);let Un=ot.getParameter(O.UNPACK_ROW_LENGTH),pe=ot.getParameter(O.UNPACK_IMAGE_HEIGHT),sr=ot.getParameter(O.UNPACK_SKIP_PIXELS),Mn=ot.getParameter(O.UNPACK_SKIP_ROWS),cl=ot.getParameter(O.UNPACK_SKIP_IMAGES);ot.pixelStorei(O.UNPACK_ROW_LENGTH,Ae.width),ot.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Ae.height),ot.pixelStorei(O.UNPACK_SKIP_PIXELS,Bt),ot.pixelStorei(O.UNPACK_SKIP_ROWS,Yt),ot.pixelStorei(O.UNPACK_SKIP_IMAGES,oe);let Cs=b.isDataArrayTexture||b.isData3DTexture,rr=U.isDataArrayTexture||U.isData3DTexture;if(b.isDepthTexture){let fe=wt.get(b),mn=wt.get(U),wi=wt.get(fe.__renderTarget),Ne=wt.get(mn.__renderTarget);ot.bindFramebuffer(O.READ_FRAMEBUFFER,wi.__webglFramebuffer),ot.bindFramebuffer(O.DRAW_FRAMEBUFFER,Ne.__webglFramebuffer);for(let hn=0;hn<At;hn++)Cs&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,wt.get(b).__webglTexture,q,oe+hn),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,wt.get(U).__webglTexture,St,Ze+hn)),O.blitFramebuffer(Bt,Yt,Bt+Dt,Yt+vt,Ut,ae,Ut+Dt,ae+vt,O.DEPTH_BUFFER_BIT,O.NEAREST);ot.bindFramebuffer(O.READ_FRAMEBUFFER,null),ot.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(q!==0||b.isRenderTargetTexture||wt.has(b)){let fe=wt.get(b),mn=wt.get(U);ot.bindFramebuffer(O.READ_FRAMEBUFFER,I),ot.bindFramebuffer(O.DRAW_FRAMEBUFFER,G);for(let wi=0;wi<At;wi++)Cs?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,fe.__webglTexture,q,oe+wi):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,fe.__webglTexture,q),rr?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,mn.__webglTexture,St,Ze+wi):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,mn.__webglTexture,St),q!==0?O.blitFramebuffer(Bt,Yt,Bt+Dt,Yt+vt,Ut,ae,Ut+Dt,ae+vt,O.COLOR_BUFFER_BIT,O.NEAREST):rr?O.copyTexSubImage3D(Ot,St,Ut,ae,Ze+wi,Bt,Yt,Dt,vt):O.copyTexSubImage2D(Ot,St,Ut,ae,Bt,Yt,Dt,vt);ot.bindFramebuffer(O.READ_FRAMEBUFFER,null),ot.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else rr?b.isDataTexture||b.isData3DTexture?O.texSubImage3D(Ot,St,Ut,ae,Ze,Dt,vt,At,we,Sn,Ae.data):U.isCompressedArrayTexture?O.compressedTexSubImage3D(Ot,St,Ut,ae,Ze,Dt,vt,At,we,Ae.data):O.texSubImage3D(Ot,St,Ut,ae,Ze,Dt,vt,At,we,Sn,Ae):b.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,St,Ut,ae,Dt,vt,we,Sn,Ae.data):b.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,St,Ut,ae,Ae.width,Ae.height,we,Ae.data):O.texSubImage2D(O.TEXTURE_2D,St,Ut,ae,Dt,vt,we,Sn,Ae);ot.pixelStorei(O.UNPACK_ROW_LENGTH,Un),ot.pixelStorei(O.UNPACK_IMAGE_HEIGHT,pe),ot.pixelStorei(O.UNPACK_SKIP_PIXELS,sr),ot.pixelStorei(O.UNPACK_SKIP_ROWS,Mn),ot.pixelStorei(O.UNPACK_SKIP_IMAGES,cl),St===0&&U.generateMipmaps===!0&&U.mipmapsAutoUpdate===!0&&O.generateMipmap(Ot),ot.unbindTexture()},this.initRenderTarget=function(b){wt.get(b).__webglFramebuffer===void 0&&Pt.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?Pt.setTextureCube(b,0):b.isData3DTexture?Pt.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?Pt.setTexture2DArray(b,0):Pt.setTexture2D(b,0),ot.unbindTexture()},this.resetState=function(){X=0,F=0,et=null,ot.reset(),mt.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return _i}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=le._getDrawingBufferColorSpace(t),e.unpackColorSpace=le._getUnpackColorSpace()}};var rh=class extends hr{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let t=new Gi;t.deleteAttribute("uv");let e=new Ii({side:gn}),n=new Ii,i=new ua(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);let r=new $e(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new Os(t,n,6),a=new sn;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);let l=new $e(t,po(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new $e(t,po(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new $e(t,po(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let d=new $e(t,po(43));d.position.set(-.462,8.89,14.52),d.scale.set(4.38,5.441,.088),this.add(d);let f=new $e(t,po(20));f.position.set(3.235,11.486,-12.541),f.scale.set(2.5,2,.1),this.add(f);let u=new $e(t,po(100));u.position.set(0,20,0),u.scale.set(1,.1,1),this.add(u)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function po(s){return new aa({color:0,emissive:16777215,emissiveIntensity:s})}function Dm(s,t={}){let e=!!t.reduced,n=innerWidth<760,i;try{i=new nh({canvas:s,antialias:!0,alpha:!0,powerPreference:"high-performance"})}catch{return null}i.setPixelRatio(Math.min(devicePixelRatio,n?1.5:2)),i.setSize(innerWidth,innerHeight,!1),i.toneMapping=ga,i.toneMappingExposure=1.05;let r=new hr,o=new uo(i);r.environment=o.fromScene(new rh,.04).texture;let a=new wn(n?50:38,innerWidth/innerHeight,.1,100);a.position.set(0,0,14);let l=new so(16773590,2.2);l.position.set(5,6,8),r.add(l);let c=new so(4033535,1.6);c.position.set(-6,-2,-4),r.add(c),r.add(new da(1778752,.6));let h=new os;r.add(h);let d=n?170:300,f=n?1.75:2.75,u=new Ii({color:14264644,metalness:1,roughness:.26}),m=new Ii({color:2763569,metalness:.7,roughness:.28}),_=new Ii({color:1381914,metalness:.9,roughness:.35}),p=new Gi(1,1,1),g=[u,m,_],v=[Math.round(d*.34),Math.round(d*.4)];v.push(d-v[0]-v[1]);let E=g.map(bt=>bt.color.clone());g.forEach(bt=>bt.color.set(16777215));let y=g.map((bt,Nt)=>{let ot=new Os(p,bt,v[Nt]);for(let Xt=0;Xt<v[Nt];Xt++)ot.setColorAt(Xt,E[Nt]);return ot.instanceMatrix.setUsage(jc),h.add(ot),ot}),T=[],w=(bt,Nt)=>bt+Math.random()*(Nt-bt),x=0,M=[...Array(d).keys()].sort(()=>Math.random()-.5);y.forEach((bt,Nt)=>{for(let ot=0;ot<v[Nt];ot++,x++){let Xt=M[x]+.5,wt=Math.acos(1-2*Xt/d),Pt=Math.PI*(1+Math.sqrt(5))*Xt,A=new V(Math.cos(Pt)*Math.sin(wt),Math.sin(Pt)*Math.sin(wt),Math.cos(wt)).multiplyScalar(f),S=A.clone().normalize();T.push({mesh:bt,j:ot,base:E[Nt],sphere:A,dir:S,start:S.clone().multiplyScalar(w(14,26)).add(new V(w(-6,6),w(-6,6),w(-4,4))),scatter:new V(w(-11,11),w(-6.5,6.5),w(-7,3)),size:w(.28,.52)*(n?.9:1),rot:new oi(w(0,6.3),w(0,6.3),w(0,6.3)),spin:new V(w(-1,1),w(-1,1),w(-1,1)).multiplyScalar(.6),delay:w(0,.55),tumble:new V(w(-1,1),w(-1,1),w(-1,1)).normalize(),kick:w(.7,1.3),phase:w(0,6.3)})}});let P=new V(0,0,1);T.forEach(bt=>{bt.align=new En().setFromUnitVectors(P,bt.dir)});let C=5,N=[...Array(d).keys()].sort(()=>Math.random()-.5),D=1,W=.5;function I(){let bt=14-C,Nt=2*Math.tan(a.fov*Math.PI/360)*bt*1.08,ot=Nt*a.aspect;D=Math.max(4,Math.round(Math.sqrt(d*ot/Nt)));let Xt=Math.ceil(d/D),wt=Math.max(ot/D,Nt/Xt);W=wt*.9,T.forEach((Pt,A)=>{let S=N[A],B=S%D,at=Math.floor(S/D);Pt.grid=new V((B-(D-1)/2)*wt,((Xt-1)/2-at)*wt,C),Pt.col=B/Math.max(1,D-1),Pt.row=at/Math.max(1,Xt-1),Pt.center=Math.min(1,Math.hypot(Pt.grid.x/(ot/2),Pt.grid.y/(Nt/2))/1.2)})}let G=n?34:54,X=new oa(.34,.085,14,36);X.scale(1.55,1,1);let F=new Ii({color:15121756,metalness:1,roughness:.18}),et=new Os(X,F,G);et.instanceMatrix.setUsage(jc),r.add(et);let H=new sa([new V,new V,new V,new V]),R=new V(1,0,0),K=new sn,yt=new En,kt=new En,Y=new V,ft=new V,xt=0,Mt=0,dt=0,Rt=0,de=0,Ct=0,Gt=null,Lt=new pa,Ft=0,Qt=0,he=new V(0,1,0),Z=new En,jt=new En,ze=new Jt(16769162),me=new Jt,ne=bt=>Math.atan2(Math.sin(bt),Math.cos(bt));addEventListener("pointermove",bt=>{xt=bt.clientX/innerWidth*2-1,Mt=bt.clientY/innerHeight*2-1},{passive:!0}),addEventListener("scroll",()=>{de=Math.min(scrollY/innerHeight,2.2)},{passive:!0}),addEventListener("resize",()=>{a.aspect=innerWidth/innerHeight,a.updateProjectionMatrix(),I(),i.setSize(innerWidth,innerHeight,!1)}),I();let Ce=bt=>1-Math.pow(1-Math.min(Math.max(bt,0),1),4),Me=bt=>(bt=Math.min(Math.max(bt,0),1),bt*bt*(3-2*bt));function O(){let bt=Lt.getElapsedTime();dt+=(xt-dt)*.05,Rt+=(Mt-Rt)*.05,Ct+=(de-Ct)*.08;let Nt=Gt===null?0:e?1:(bt-Gt)/2.2,ot=Me(Ct/.9),Xt=n?2.5:2.9;Qt+=(Ft-Qt)*.14;let wt=Me(Qt/.32),Pt=(Qt-.32)/.24,A=(Qt-.56)/.3,S=1-wt;h.position.set(Xt*(1-ot*.6)*S,((n?3.4:0)+ot*(n?-3:.3))*S,0),h.rotation.y=ne(bt*.18+dt*.5)*S,h.rotation.x=(Math.sin(bt*.3)*.12+Rt*.3)*S;for(let Q of T){let z=Ce((Nt-Q.delay)/(1-Q.delay)),tt=1+Math.sin(bt*1.6+Q.phase)*.035*(1-ot);Y.copy(Q.start).lerp(Q.sphere,z).multiplyScalar(tt),Y.lerp(Q.scatter,ot),Y.y+=Math.sin(bt*.7+Q.phase)*.25*ot;let lt=Q.size*(.2+.8*z)*(1-ot*.25);if(yt.copy(Q.align),kt.setFromEuler(new oi(Q.rot.x+bt*Q.spin.x,Q.rot.y+bt*Q.spin.y,Q.rot.z+bt*Q.spin.z)),K.quaternion.copy(kt).slerp(yt,z*(1-ot)),Qt>.001){let L=Me(wt*1.25-Q.center*.25);Y.lerp(Q.grid,L);let j=Math.sin(Math.PI*Math.min(1,Math.max(0,Pt/.55)))*Math.pow(1-Q.center,2)*(Pt<.55?1:0),$=Me((Pt-.45)*2-Q.center*.45)*L,pt=Q.grid.x||.001,ht=Q.grid.y||.001,mt=Math.hypot(pt,ht)||1;Y.x+=pt/mt*$*(7+Q.center*9)*Q.kick,Y.y+=ht/mt*$*(5+Q.center*7)*Q.kick,Y.z+=j*1.6+$*(3+(1-Q.center)*6)*Q.kick,K.quaternion.slerp(jt,L),Z.setFromAxisAngle(Q.tumble,$*Math.PI*2.2*Q.kick),K.quaternion.multiply(Z);let ct=Me(A*1.5-Q.center*.5);Y.z+=ct*10;let gt=Math.sin(Math.PI*Math.min(1,$*1.4))*.8+j*.4;me.copy(Q.base).lerp(ze,Math.min(1,gt)),Q.mesh.setColorAt(Q.j,me),lt=lt+(W-lt)*L;let it=1-$*.35;K.scale.set(lt*it,lt*it,lt*(1-L*.55)*it)}else Q.mesh.setColorAt(Q.j,Q.base),K.scale.setScalar(lt);K.position.copy(Y),K.updateMatrix(),Q.mesh.setMatrixAt(Q.j,K.matrix)}y.forEach(Q=>{Q.instanceMatrix.needsUpdate=!0,Q.instanceColor&&(Q.instanceColor.needsUpdate=!0)});let B=Math.sin(bt*.8)*.6,nt=(1-Ce(Nt*1.2-.15))*16,ut=H.points;ut[0].set(-14-nt,-7.2+B*.3,-3),ut[1].set(-4-nt*.5,-5.4+B*.6,-1.6),ut[2].set(4.5+nt*.5,-1.4-B*.6,-1.2),ut[3].set(14+nt,3.4+B*.3,-3.5);for(let Q=0;Q<G;Q++){let z=Q/(G-1);H.getPointAt(z,K.position),K.position.y+=ot*-2.5+(n?-2.6:0)-wt*12,H.getTangentAt(z,ft),K.quaternion.setFromUnitVectors(R,ft),Q%2&&(yt.setFromAxisAngle(R,Math.PI/2),K.quaternion.multiply(yt)),K.scale.setScalar(n?.8:1),K.updateMatrix(),et.setMatrixAt(Q,K.matrix)}et.instanceMatrix.needsUpdate=!0,a.position.x=dt*.6,a.position.y=-Rt*.4,a.lookAt(0,0,0),i.render(r,a)}let ue=!0;return document.addEventListener("visibilitychange",()=>{ue=!document.hidden}),i.setAnimationLoop(()=>{ue&&O()}),{assemble(){Gt===null&&(Gt=Lt.getElapsedTime())},setGrid(bt){Ft=Math.min(1,Math.max(0,bt))}}}function ms(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function Gm(s,t){s.prototype=Object.create(t.prototype),s.prototype.constructor=s,s.__proto__=t}var Kn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Ua={duration:.5,overwrite:!1,delay:0},Ff,_n,De,yi=1e8,Se=1/yi,Rf=Math.PI*2,hM=Rf/4,uM=0,Hm=Math.sqrt,fM=Math.cos,dM=Math.sin,an=function(t){return typeof t=="string"},Ge=function(t){return typeof t=="function"},_s=function(t){return typeof t=="number"},_h=function(t){return typeof t=="undefined"},$i=function(t){return typeof t=="object"},$n=function(t){return t!==!1},Bf=function(){return typeof window!="undefined"},oh=function(t){return Ge(t)||an(t)},Wm=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Rn=Array.isArray,pM=/random\([^)]+\)/g,mM=/,\s*/g,Nm=/(?:-?\.?\d|\.)+/gi,zf=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,vr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Mf=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,kf=/[+-]=-?[.\d]+/,gM=/[^,'"\[\]\s]+/gi,_M=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Oe,Zi,Pf,Vf,ci={},hh={},Xm,qm=function(t){return(hh=go(t,ci))&&Pn},xh=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},Oa=function(t,e){return!e&&console.warn(t)},Ym=function(t,e){return t&&(ci[t]=e)&&hh&&(hh[t]=e)||ci},Fa=function(){return 0},xM={suppressEvents:!0,isStart:!0,kill:!1},ah={suppressEvents:!0,kill:!1},vM={suppressEvents:!0},Gf={},Ws=[],If={},Zm,Zn={},bf={},Um=30,lh=[],Hf="",Wf=function(t){var e=t[0],n,i;if($i(e)||Ge(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=lh.length;i--&&!lh[i].targetTest(e););n=lh[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new Zf(t[i],n)))||t.splice(i,1);return t},Xs=function(t){return t._gsap||Wf(Si(t))[0]._gsap},Xf=function(t,e,n){return(n=t[e])&&Ge(n)?t[e]():_h(n)&&t.getAttribute&&t.getAttribute(e)||n},Bn=function(t,e){return(t=t.split(",")).forEach(e)||t},He=function(t){return Math.round(t*1e5)/1e5||0},Ue=function(t){return Math.round(t*1e7)/1e7||0},yr=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},yM=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},uh=function(){var t=Ws.length,e=Ws.slice(0),n,i;for(If={},Ws.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},qf=function(t){return!!(t._initted||t._startAt||t.add)},Jm=function(t,e,n,i){Ws.length&&!_n&&uh(),t.render(e,n,i||!!(_n&&e<0&&qf(t))),Ws.length&&!_n&&uh()},$m=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(gM).length<2?e:an(t)?t.trim():t},Km=function(t){return t},hi=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},SM=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},go=function(t,e){for(var n in e)t[n]=e[n];return t},Om=function s(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=$i(e[n])?s(t[n]||(t[n]={}),e[n]):e[n]);return t},fh=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},La=function(t){var e=t.parent||Oe,n=t.keyframes?SM(Rn(t.keyframes)):hi;if($n(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},MM=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},Qm=function(t,e,n,i,r){n===void 0&&(n="_first"),i===void 0&&(i="_last");var o=t[i],a;if(r)for(a=e[r];o&&o[r]>a;)o=o._prev;return o?(e._next=o._next,o._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=o,e.parent=e._dp=t,e},vh=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=e._prev,o=e._next;r?r._next=o:t[n]===e&&(t[n]=o),o?o._prev=r:t[i]===e&&(t[i]=r),e._next=e._prev=e.parent=null},qs=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},gr=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},bM=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},Lf=function(t,e,n,i){return t._startAt&&(_n?t._startAt.revert(ah):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},TM=function s(t){return!t||t._ts&&s(t.parent)},Fm=function(t){return t._repeat?_o(t._tTime,t=t.duration()+t._rDelay)*t:0},_o=function(t,e){var n=Math.floor(t=Ue(t/e));return t&&n===t?n-1:n},dh=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},yh=function(t){return t._end=Ue(t._start+(t._tDur/Math.abs(t._ts||t._rts||Se)||0))},Sh=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=Ue(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),yh(t),n._dirty||gr(n,t)),t},jm=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=dh(t.rawTime(),e),(!e._dur||Va(0,e.totalDuration(),n)-e._tTime>Se)&&e.render(n,!0)),gr(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-Se}},Ji=function(t,e,n,i){return e.parent&&qs(e),e._start=Ue((_s(n)?n:!n&&ph(e)&&(!t._last||t._last._start>=t._time)?t._last?t._last._start:t._time:n||t!==Oe?vi(t,n,e):t._time)+e._delay),e._end=Ue(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),Qm(t,e,"_first","_last",t._sort?"_start":0),ph(e)||(t._recent=e),i||jm(t,e),t._ts<0&&Sh(t,t._tTime),t},tg=function(t,e){return(ci.ScrollTrigger||xh("scrollTrigger",e))&&ci.ScrollTrigger.create(e,t)},eg=function(t,e,n,i,r){if(Kf(t,e,r),!t._initted)return 1;if(!n&&t._pt&&!_n&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&Zm!==Jn.frame)return Ws.push(t),t._lazy=[r,i],1},wM=function s(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||s(e))},ph=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},EM=function(t,e,n,i){var r=t.ratio,o=e<0||!e&&(!t._start&&wM(t)&&!(!t._initted&&ph(t))||(t._ts<0||t._dp._ts<0)&&!ph(t))?0:1,a=t._rDelay,l=0,c,h,d;if(a&&t._repeat&&(l=Va(0,t._tDur,e),h=_o(l,a),t._yoyo&&h&1&&(o=1-o),h!==_o(t._tTime,a)&&(r=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==r||_n||i||t._zTime===Se||!e&&t._zTime){if(!t._initted&&eg(t,e,i,n,l))return;for(d=t._zTime,t._zTime=e||(n?Se:0),n||(n=e&&!d),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=l,c=t._pt;c;)c.r(o,c.d),c=c._next;e<0&&Lf(t,e,n,!0),t._onUpdate&&!n&&li(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&li(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===o&&(o&&qs(t,1),!n&&!_n&&(li(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},AM=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},xo=function(t,e,n,i){var r=t._repeat,o=Ue(e)||0,a=t._tTime/t._tDur;return a&&!i&&(t._time*=o/t._dur),t._dur=o,t._tDur=r?r<0?1e10:Ue(o*(r+1)+t._rDelay*r):o,a>0&&!i&&Sh(t,t._tTime=t._tDur*a),t.parent&&yh(t),n||gr(t.parent,t),t},Bm=function(t){return t instanceof Cn?gr(t):xo(t,t._dur)},CM={_start:0,endTime:Fa,totalDuration:Fa},vi=function s(t,e,n){var i=t.labels,r=t._recent||CM,o=t.duration()>=yi?r.endTime(!1):t._dur,a,l,c;return an(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",a=e.indexOf("="),l==="<"||l===">"?(a>=0&&(e=e.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(a<0?r:n).totalDuration()/100:1)):a<0?(e in i||(i[e]=o),i[e]):(l=parseFloat(e.charAt(a-1)+e.substr(a+1)),c&&n&&(l=l/100*(Rn(n)?n[0]:n).totalDuration()),a>1?s(t,e.substr(0,a-1),n)+l:o+l)):e==null?o:+e},Da=function(t,e,n){var i=_s(e[1]),r=(i?2:1)+(t<2?0:1),o=e[r],a,l;if(i&&(o.duration=e[1]),o.parent=n,t){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=$n(l.vars.inherit)&&l.parent;o.immediateRender=$n(a.immediateRender),t<2?o.runBackwards=1:o.startAt=e[r-1]}return new Xe(e[0],o,e[r+1])},Ys=function(t,e){return t||t===0?e(t):e},Va=function(t,e,n){return n<t?t:n>e?e:n},xn=function(t,e){return!an(t)||!(e=_M.exec(t))?"":e[1]},RM=function(t,e,n){return Ys(n,function(i){return Va(t,e,i)})},Df=[].slice,ng=function(t,e){return t&&$i(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&$i(t[0]))&&!t.nodeType&&t!==Zi},PM=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var r;return an(i)&&!e||ng(i,1)?(r=n).push.apply(r,Si(i)):n.push(i)})||n},Si=function(t,e,n){return De&&!e&&De.selector?De.selector(t):an(t)&&!n&&(Pf||!vo())?Df.call((e||Vf).querySelectorAll(t),0):Rn(t)?PM(t,n):ng(t)?Df.call(t,0):t?[t]:[]},Nf=function(t){return t=Si(t)[0]||Oa("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return Si(e,n.querySelectorAll?n:n===t?Oa("Invalid scope")||Vf.createElement("div"):t)}},ig=function(t){return t.sort(function(){return .5-Math.random()})},sg=function(t){if(Ge(t))return t;var e=$i(t)?t:{each:t},n=_r(e.ease),i=e.from||0,r=parseFloat(e.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=e.axis,h=i,d=i;return an(i)?h=d={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(h=i[0],d=i[1]),function(f,u,m){var _=(m||e).length,p=o[_],g,v,E,y,T,w,x,M,P;if(!p){if(P=e.grid==="auto"?0:(e.grid||[1,yi])[1],!P){for(x=-yi;x<(x=m[P++].getBoundingClientRect().left)&&P<_;);P<_&&P--}for(p=o[_]=[],g=l?Math.min(P,_)*h-.5:i%P,v=P===yi?0:l?_*d/P-.5:i/P|0,x=0,M=yi,w=0;w<_;w++)E=w%P-g,y=v-(w/P|0),p[w]=T=c?Math.abs(c==="y"?y:E):Hm(E*E+y*y),T>x&&(x=T),T<M&&(M=T);i==="random"&&ig(p),p.max=x-M,p.min=M,p.v=_=(parseFloat(e.amount)||parseFloat(e.each)*(P>_?_-1:c?c==="y"?_/P:P:Math.max(P,_/P))||0)*(i==="edges"?-1:1),p.b=_<0?r-_:r,p.u=xn(e.amount||e.each)||0,n=n&&_<0?HM(n):n}return _=(p[f]-p.min)/p.max||0,Ue(p.b+(n?n(_):_)*p.v)+p.u}},Uf=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=Ue(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(_s(n)?0:xn(n))}},rg=function(t,e){var n=Rn(t),i,r;return!n&&$i(t)&&(i=n=t.radius||yi,t.values?(t=Si(t.values),(r=!_s(t[0]))&&(i*=i)):t=Uf(t.increment)),Ys(e,n?Ge(t)?function(o){return r=t(o),Math.abs(r-o)<=i?r:o}:function(o){for(var a=parseFloat(r?o.x:o),l=parseFloat(r?o.y:0),c=yi,h=0,d=t.length,f,u;d--;)r?(f=t[d].x-a,u=t[d].y-l,f=f*f+u*u):f=Math.abs(t[d]-a),f<c&&(c=f,h=d);return h=!i||c<=i?t[h]:o,r||h===o||_s(o)?h:h+xn(o)}:Uf(t))},og=function(t,e,n,i){return Ys(Rn(t)?!e:n===!0?!!(n=0):!i,function(){return Rn(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},IM=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(r,o){return o(r)},i)}},LM=function(t,e){return function(n){return t(parseFloat(n))+(e||xn(n))}},DM=function(t,e,n){return lg(t,e,0,1,n)},ag=function(t,e,n){return Ys(n,function(i){return t[~~e(i)]})},NM=function s(t,e,n){var i=e-t;return Rn(t)?ag(t,s(0,t.length),e):Ys(n,function(r){return(i+(r-t)%i)%i+t})},UM=function s(t,e,n){var i=e-t,r=i*2;return Rn(t)?ag(t,s(0,t.length-1),e):Ys(n,function(o){return o=(r+(o-t)%r)%r||0,t+(o>i?r-o:o)})},yo=function(t){return t.replace(pM,function(e){var n=e.indexOf("[")+1,i=e.substring(n||7,n?e.indexOf("]"):e.length-1).split(mM);return og(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},lg=function(t,e,n,i,r){var o=e-t,a=i-n;return Ys(r,function(l){return n+((l-t)/o*a||0)})},OM=function s(t,e,n,i){var r=isNaN(t+e)?0:function(u){return(1-u)*t+u*e};if(!r){var o=an(t),a={},l,c,h,d,f;if(n===!0&&(i=1)&&(n=null),o)t={p:t},e={p:e};else if(Rn(t)&&!Rn(e)){for(h=[],d=t.length,f=d-2,c=1;c<d;c++)h.push(s(t[c-1],t[c]));d--,r=function(m){m*=d;var _=Math.min(f,~~m);return h[_](m-_)},n=e}else i||(t=go(Rn(t)?[]:{},t));if(!h){for(l in e)Jf.call(a,t,l,"get",e[l]);r=function(m){return td(m,a)||(o?t.p:t)}}}return Ys(n,r)},zm=function(t,e,n){var i=t.labels,r=yi,o,a,l;for(o in i)a=i[o]-e,a<0==!!n&&a&&r>(a=Math.abs(a))&&(l=o,r=a);return l},li=function(t,e,n){var i=t.vars,r=i[e],o=De,a=t._ctx,l,c,h;if(r)return l=i[e+"Params"],c=i.callbackScope||t,n&&Ws.length&&uh(),a&&(De=a),h=l?r.apply(c,l):r.call(c),De=o,h},Pa=function(t){return qs(t),t.scrollTrigger&&t.scrollTrigger.kill(!!_n),t.progress()<1&&li(t,"onInterrupt"),t},mo,cg=[],hg=function(t){if(t)if(t=!t.name&&t.default||t,Bf()||t.headless){var e=t.name,n=Ge(t),i=e&&!n&&t.init?function(){this._props=[]}:t,r={init:Fa,render:td,add:Jf,kill:jM,modifier:QM,rawVars:0},o={targetTest:0,get:0,getSetter:Mh,aliases:{},register:0};if(vo(),t!==i){if(Zn[e])return;hi(i,hi(fh(t,r),o)),go(i.prototype,go(r,fh(t,o))),Zn[i.prop=e]=i,t.targetTest&&(lh.push(i),Gf[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}Ym(e,i),t.register&&t.register(Pn,i,zn)}else cg.push(t)},Ee=255,Ia={aqua:[0,Ee,Ee],lime:[0,Ee,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Ee],navy:[0,0,128],white:[Ee,Ee,Ee],olive:[128,128,0],yellow:[Ee,Ee,0],orange:[Ee,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Ee,0,0],pink:[Ee,192,203],cyan:[0,Ee,Ee],transparent:[Ee,Ee,Ee,0]},Tf=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*Ee+.5|0},ug=function(t,e,n){var i=t?_s(t)?[t>>16,t>>8&Ee,t&Ee]:0:Ia.black,r,o,a,l,c,h,d,f,u,m;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Ia[t])i=Ia[t];else if(t.charAt(0)==="#"){if(t.length<6&&(r=t.charAt(1),o=t.charAt(2),a=t.charAt(3),t="#"+r+r+o+o+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&Ee,i&Ee,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&Ee,t&Ee]}else if(t.substr(0,3)==="hsl"){if(i=m=t.match(Nm),!e)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,o=h<=.5?h*(c+1):h+c-h*c,r=h*2-o,i.length>3&&(i[3]*=1),i[0]=Tf(l+1/3,r,o),i[1]=Tf(l,r,o),i[2]=Tf(l-1/3,r,o);else if(~t.indexOf("="))return i=t.match(zf),n&&i.length<4&&(i[3]=1),i}else i=t.match(Nm)||Ia.transparent;i=i.map(Number)}return e&&!m&&(r=i[0]/Ee,o=i[1]/Ee,a=i[2]/Ee,d=Math.max(r,o,a),f=Math.min(r,o,a),h=(d+f)/2,d===f?l=c=0:(u=d-f,c=h>.5?u/(2-d-f):u/(d+f),l=d===r?(o-a)/u+(o<a?6:0):d===o?(a-r)/u+2:(r-o)/u+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},fg=function(t){var e=[],n=[],i=-1;return t.split(gs).forEach(function(r){var o=r.match(vr)||[];e.push.apply(e,o),n.push(i+=o.length+1)}),e.c=n,e},km=function(t,e,n){var i="",r=(t+i).match(gs),o=e?"hsla(":"rgba(",a=0,l,c,h,d;if(!r)return t;if(r=r.map(function(f){return(f=ug(f,e,1))&&o+(e?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(h=fg(t),l=n.c,l.join(i)!==h.c.join(i)))for(c=t.replace(gs,"1").split(vr),d=c.length-1;a<d;a++)i+=c[a]+(~l.indexOf(a)?r.shift()||o+"0,0,0,0)":(h.length?h:r.length?r:n).shift());if(!c)for(c=t.split(gs),d=c.length-1;a<d;a++)i+=c[a]+r[a];return i+c[d]},gs=(function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Ia)s+="|"+t+"\\b";return new RegExp(s+")","gi")})(),FM=/hsl[a]?\(/,Yf=function(t){var e=t.join(" "),n;if(gs.lastIndex=0,gs.test(e))return n=FM.test(e),t[1]=km(t[1],n),t[0]=km(t[0],n,fg(t[1])),!0},Ba,Jn=(function(){var s=Date.now,t=500,e=33,n=s(),i=n,r=1e3/240,o=r,a=[],l,c,h,d,f,u,m=function _(p){var g=s()-i,v=p===!0,E,y,T,w;if((g>t||g<0)&&(n+=g-e),i+=g,T=i-n,E=T-o,(E>0||v)&&(w=++d.frame,f=T-d.time*1e3,d.time=T=T/1e3,o+=E+(E>=r?0:r-E),y=1),v||(l=c(_)),y)for(u=0;u<a.length;u++)a[u](T,f,w,p)};return d={time:0,frame:0,tick:function(){m(!0)},deltaRatio:function(p){return f/(1e3/(p||60))},wake:function(){Xm&&(!Pf&&Bf()&&(Zi=Pf=window,Vf=Zi.document||{},ci.gsap=Pn,(Zi.gsapVersions||(Zi.gsapVersions=[])).push(Pn.version),qm(hh||Zi.GreenSockGlobals||!Zi.gsap&&Zi||{}),cg.forEach(hg)),h=typeof requestAnimationFrame!="undefined"&&requestAnimationFrame,l&&d.sleep(),c=h||function(p){return setTimeout(p,o-d.time*1e3+1|0)},Ba=1,m(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),Ba=0,c=Fa},lagSmoothing:function(p,g){t=p||1/0,e=Math.min(g||33,t)},fps:function(p){r=1e3/(p||240),o=d.time*1e3+r},add:function(p,g,v){var E=g?function(y,T,w,x){p(y,T,w,x),d.remove(E)}:p;return d.remove(p),a[v?"unshift":"push"](E),vo(),E},remove:function(p,g){~(g=a.indexOf(p))&&a.splice(g,1)&&u>=g&&u--},_listeners:a},d})(),vo=function(){return!Ba&&Jn.wake()},ce={},BM=/^[\d.\-M][\d.\-,\s]/,zM=/["']/g,kM=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],r=1,o=n.length,a,l,c;r<o;r++)l=n[r],a=r!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),e[i]=isNaN(c)?c.replace(zM,"").trim():+c,i=l.substr(a+1).trim();return e},VM=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},GM=function(t){var e=(t+"").split("("),n=ce[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[kM(e[1])]:VM(t).split(",").map($m)):ce._CE&&BM.test(t)?ce._CE("",t):n},HM=function(t){return function(e){return 1-t(1-e)}},_r=function(t,e){return t&&(Ge(t)?t:ce[t]||GM(t))||e},Sr=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var r={easeIn:e,easeOut:n,easeInOut:i},o;return Bn(t,function(a){ce[a]=ci[a]=r,ce[o=a.toLowerCase()]=n;for(var l in r)ce[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ce[a+"."+l]=r[l]}),r},dg=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},wf=function s(t,e,n){var i=e>=1?e:1,r=(n||(t?.3:.45))/(e<1?e:1),o=r/Rf*(Math.asin(1/i)||0),a=function(h){return h===1?1:i*Math.pow(2,-10*h)*dM((h-o)*r)+1},l=t==="out"?a:t==="in"?function(c){return 1-a(1-c)}:dg(a);return r=Rf/r,l.config=function(c,h){return s(t,c,h)},l},Ef=function s(t,e){e===void 0&&(e=1.70158);var n=function(o){return o?--o*o*((e+1)*o+e)+1:0},i=t==="out"?n:t==="in"?function(r){return 1-n(1-r)}:dg(n);return i.config=function(r){return s(t,r)},i};Bn("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,t){var e=t<5?t+1:t;Sr(s+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});ce.Linear.easeNone=ce.none=ce.Linear.easeIn;Sr("Elastic",wf("in"),wf("out"),wf());(function(s,t){var e=1/t,n=2*e,i=2.5*e,r=function(a){return a<e?s*a*a:a<n?s*Math.pow(a-1.5/t,2)+.75:a<i?s*(a-=2.25/t)*a+.9375:s*Math.pow(a-2.625/t,2)+.984375};Sr("Bounce",function(o){return 1-r(1-o)},r)})(7.5625,2.75);Sr("Expo",function(s){return Math.pow(2,10*(s-1))*s+s*s*s*s*s*s*(1-s)});Sr("Circ",function(s){return-(Hm(1-s*s)-1)});Sr("Sine",function(s){return s===1?1:-fM(s*hM)+1});Sr("Back",Ef("in"),Ef("out"),Ef());ce.SteppedEase=ce.steps=ci.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),r=e?1:0,o=1-Se;return function(a){return((i*Va(0,o,a)|0)+r)*n}}};Ua.ease=ce["quad.out"];Bn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return Hf+=s+","+s+"Params,"});var Zf=function(t,e){this.id=uM++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:Xf,this.set=e?e.getSetter:Mh},za=(function(){function s(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,xo(this,+e.duration,1,1),this.data=e.data,De&&(this._ctx=De,De.data.push(this)),Ba||Jn.wake()}var t=s.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,xo(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(vo(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(Sh(this,n),!r._dp||r.parent||jm(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Ji(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Se||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Jm(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Fm(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Fm(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?_o(this._tTime,r)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-Se?0:this._rts;if(this._rts===n)return this;var r=this.parent&&this._ts?dh(this.parent._time,this):this._tTime,o=this._rts<0;this._rts=+n||0,this._ts=this._ps||n===-Se?0:this._rts;var a=this.totalDuration();return(o!==this._rts<0||r>0&&r<a)&&this.totalTime(Va(-Math.abs(this._delay),a,r),i!==!1),yh(this),bM(this)},t.paused=function(n){if(!arguments.length)return this._ps;if(this._ps!==n)if(this._ps=n,n)this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0;else{vo(),this._ts=this._rts;var i=this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,r=this.progress()===1&&Math.abs(this._zTime)!==Se,o;if(r)for(this._tTime-=Se,o=this._first;o;){if(!o._dur&&o._zTime<0&&o._ts&&o._start<=i+Se){r=!1;break}o=o._next}this.totalTime(i,r)}return this},t.startTime=function(n){if(arguments.length){this._start=Ue(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Ji(i,this,this._start-this._delay),this}return this._start},t.endTime=function(n){return this._start+($n(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?dh(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=vM);var i=_n;return _n=n,qf(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),_n=i,this},t.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):r},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Bm(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Bm(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(vi(this,n),$n(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,$n(i)),this._dur||(this._zTime=-Se),this},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Se:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-Se,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-Se)},t.eventCallback=function(n,i,r){var o=this.vars;return arguments.length>1?(i?(o[n]=i,r&&(o[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},t.then=function(n){var i=this,r=i._prom;return new Promise(function(o){var a=Ge(n)?n:Km,l=function(){var h=i.then;i.then=null,r&&r(),Ge(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=h),o(a),i.then=h};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},t.kill=function(){Pa(this)},s})();hi(za.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Se,_prom:0,_ps:!1,_rts:1});var Cn=(function(s){Gm(t,s);function t(n,i){var r;return n===void 0&&(n={}),r=s.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=$n(n.sortChildren),Oe&&Ji(n.parent||Oe,ms(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&tg(ms(r),n.scrollTrigger),r}var e=t.prototype;return e.to=function(i,r,o){return Da(0,arguments,this),this},e.from=function(i,r,o){return Da(1,arguments,this),this},e.fromTo=function(i,r,o,a){return Da(2,arguments,this),this},e.set=function(i,r,o){return r.duration=0,r.parent=this,La(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new Xe(i,r,vi(this,o),1),this},e.call=function(i,r,o){return Ji(this,Xe.delayedCall(0,i,r),o)},e.staggerTo=function(i,r,o,a,l,c,h){return o.duration=r,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=h,o.parent=this,new Xe(i,o,vi(this,l)),this},e.staggerFrom=function(i,r,o,a,l,c,h){return o.runBackwards=1,La(o).immediateRender=$n(o.immediateRender),this.staggerTo(i,r,o,a,l,c,h)},e.staggerFromTo=function(i,r,o,a,l,c,h,d){return a.startAt=o,La(a).immediateRender=$n(a.immediateRender),this.staggerTo(i,r,a,l,c,h,d)},e.render=function(i,r,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:Ue(i),d=this._zTime<0!=i<0&&(this._initted||!c),f,u,m,_,p,g,v,E,y,T,w,x;if(this!==Oe&&h>l&&i>=0&&(h=l),h!==this._tTime||o||d){if(a!==this._time&&c&&(h+=this._time-a,i+=this._time-a),f=h,y=this._start,E=this._ts,g=!E,d&&(c||(a=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(w=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,r,o);if(f=Ue(h%p),h===l?(_=this._repeat,f=c):(T=Ue(h/p),_=~~T,_&&_===T&&(f=c,_--),f>c&&(f=c)),T=_o(this._tTime,p),!a&&this._tTime&&T!==_&&this._tTime-T*p-this._dur<=0&&(T=_),w&&_&1&&(f=c-f,x=1),_!==T&&!this._lock){var M=w&&T&1,P=M===(w&&_&1);if(_<T&&(M=!M),a=M?0:h%c?c:h,this._lock=1,this.render(a||(x?0:Ue(_*p)),r,!c)._lock=0,this._tTime=h,!r&&this.parent&&li(this,"onRepeat"),this.vars.repeatRefresh&&!x&&(this.invalidate()._lock=1,T=_),a&&a!==this._time||g!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,P&&(this._lock=2,a=M?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!x&&this.invalidate()),this._lock=0,!this._ts&&!g)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=AM(this,Ue(a),Ue(f)),v&&(h-=f-(f=v._start))),this._tTime=h,this._time=f,this._act=!!E,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&h&&c&&!r&&!T&&(li(this,"onStart"),this._tTime!==h))return this;if(f>=a&&i>=0)for(u=this._first;u;){if(m=u._next,(u._act||f>=u._start)&&u._ts&&v!==u){if(u.parent!==this)return this.render(i,r,o);if(u.render(u._ts>0?(f-u._start)*u._ts:(u._dirty?u.totalDuration():u._tDur)+(f-u._start)*u._ts,r,o),f!==this._time||!this._ts&&!g){v=0,m&&(h+=this._zTime=-Se);break}}u=m}else{u=this._last;for(var C=i<0?i:f;u;){if(m=u._prev,(u._act||C<=u._end)&&u._ts&&v!==u){if(u.parent!==this)return this.render(i,r,o);if(u.render(u._ts>0?(C-u._start)*u._ts:(u._dirty?u.totalDuration():u._tDur)+(C-u._start)*u._ts,r,o||_n&&qf(u)),f!==this._time||!this._ts&&!g){v=0,m&&(h+=this._zTime=C?-Se:Se);break}}u=m}}if(v&&!r&&(this.pause(),v.render(f>=a?0:-Se)._zTime=f>=a?1:-1,this._ts))return this._start=y,yh(this),this.render(i,r,o);this._onUpdate&&!r&&li(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&a)&&(y===this._start||Math.abs(E)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&qs(this,1),!r&&!(i<0&&!a)&&(h||a||!l)&&(li(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,r){var o=this;if(_s(r)||(r=vi(this,r,i)),!(i instanceof za)){if(Rn(i))return i.forEach(function(a){return o.add(a,r)}),this;if(an(i))return this.addLabel(i,r);if(Ge(i))i=Xe.delayedCall(0,i);else return this}return this!==i?Ji(this,i,r):this},e.getChildren=function(i,r,o,a){i===void 0&&(i=!0),r===void 0&&(r=!0),o===void 0&&(o=!0),a===void 0&&(a=-yi);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Xe?r&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,r,o)))),c=c._next;return l},e.getById=function(i){for(var r=this.getChildren(1,1,1),o=r.length;o--;)if(r[o].vars.id===i)return r[o]},e.remove=function(i){return an(i)?this.removeLabel(i):Ge(i)?this.killTweensOf(i):(i.parent===this&&vh(this,i),i===this._recent&&(this._recent=this._last),gr(this))},e.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ue(Jn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),s.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},e.addLabel=function(i,r){return this.labels[i]=vi(this,r),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,r,o){var a=Xe.delayedCall(0,r||Fa,o);return a.data="isPause",this._hasPause=1,Ji(this,a,vi(this,i))},e.removePause=function(i){var r=this._first;for(i=vi(this,i);r;)r._start===i&&r.data==="isPause"&&qs(r),r=r._next},e.killTweensOf=function(i,r,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)Hs!==a[l]&&a[l].kill(i,r);return this},e.getTweensOf=function(i,r){for(var o=[],a=Si(i),l=this._first,c=_s(r),h;l;)l instanceof Xe?yM(l._targets,a)&&(c?(!Hs||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&o.push(l):(h=l.getTweensOf(a,r)).length&&o.push.apply(o,h),l=l._next;return o},e.tweenTo=function(i,r){r=r||{};var o=this,a=vi(o,i),l=r,c=l.startAt,h=l.onStart,d=l.onStartParams,f=l.immediateRender,u,m=Xe.to(o,hi({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||Se,onStart:function(){if(o.pause(),!u){var p=r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());m._dur!==p&&xo(m,p,0,1).render(m._time,!0,!0),u=1}h&&h.apply(m,d||[])}},r));return f?m.render(0):m},e.tweenFromTo=function(i,r,o){return this.tweenTo(r,hi({startAt:{time:vi(this,i)}},o))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),zm(this,vi(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),zm(this,vi(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Se)},e.shiftChildren=function(i,r,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(i=Ue(i);a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(r)for(c in l)l[c]>=o&&(l[c]+=i);return gr(this)},e.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return s.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,o;r;)o=r._next,this.remove(r),r=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),gr(this)},e.totalDuration=function(i){var r=0,o=this,a=o._last,l=yi,c,h,d;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(d=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),h=a._start,h>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Ji(o,a,h-a._delay,1)._lock=0):l=h,h<0&&a._ts&&(r-=h,(!d&&!o._dp||d&&d.smoothChildTiming)&&(o._start+=Ue(h/o._ts),o._time-=h,o._tTime-=h),o.shiftChildren(-h,!1,-1/0),l=0),a._end>r&&a._ts&&(r=a._end),a=c;xo(o,o===Oe&&o._time>r?o._time:r,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(i){if(Oe._ts&&(Jm(Oe,dh(i,Oe)),Zm=Jn.frame),Jn.frame>=Um){Um+=Kn.autoSleep||120;var r=Oe._first;if((!r||!r._ts)&&Kn.autoSleep&&Jn._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||Jn.sleep()}}},t})(za);hi(Cn.prototype,{_lock:0,_hasPause:0,_forcing:0});var WM=function(t,e,n,i,r,o,a){var l=new zn(this._pt,t,e,0,1,jf,null,r),c=0,h=0,d,f,u,m,_,p,g,v;for(l.b=n,l.e=i,n+="",i+="",(g=~i.indexOf("random("))&&(i=yo(i)),o&&(v=[n,i],o(v,t,e),n=v[0],i=v[1]),f=n.match(Mf)||[];d=Mf.exec(i);)m=d[0],_=i.substring(c,d.index),u?u=(u+1)%5:_.substr(-5)==="rgba("&&(u=1),m!==f[h++]&&(p=parseFloat(f[h-1])||0,l._pt={_next:l._pt,p:_||h===1?_:",",s:p,c:m.charAt(1)==="="?yr(p,m)-p:parseFloat(m)-p,m:u&&u<4?Math.round:0},c=Mf.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(kf.test(i)||g)&&(l.e=0),this._pt=l,l},Jf=function(t,e,n,i,r,o,a,l,c,h){Ge(i)&&(i=i(r||0,t,o));var d=t[e],f=n!=="get"?n:Ge(d)?c?t[e.indexOf("set")||!Ge(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():d,u=Ge(d)?c?JM:mg:Qf,m;if(an(i)&&(~i.indexOf("random(")&&(i=yo(i)),i.charAt(1)==="="&&(m=yr(f,i)+(xn(f)||0),(m||m===0)&&(i=m))),!h||f!==i||Of)return!isNaN(f*i)&&i!==""?(m=new zn(this._pt,t,e,+f||0,i-(f||0),typeof d=="boolean"?KM:gg,0,u),c&&(m.fp=c),a&&m.modifier(a,this,t),this._pt=m):(!d&&!(e in t)&&xh(e,i),WM.call(this,t,e,f,i,u,l||Kn.stringFilter,c))},XM=function(t,e,n,i,r){if(Ge(t)&&(t=Na(t,r,e,n,i)),!$i(t)||t.style&&t.nodeType||Rn(t)||Wm(t))return an(t)?Na(t,r,e,n,i):t;var o={},a;for(a in t)o[a]=Na(t[a],r,e,n,i);return o},$f=function(t,e,n,i,r,o){var a,l,c,h;if(Zn[t]&&(a=new Zn[t]).init(r,a.rawVars?e[t]:XM(e[t],i,r,o,n),n,i,o)!==!1&&(n._pt=l=new zn(n._pt,r,t,0,1,a.render,a,0,a.priority),n!==mo))for(c=n._ptLookup[n._targets.indexOf(r)],h=a._props.length;h--;)c[a._props[h]]=l;return a},Hs,Of,Kf=function s(t,e,n){var i=t.vars,r=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.runBackwards,d=i.yoyoEase,f=i.keyframes,u=i.autoRevert,m=t._dur,_=t._startAt,p=t._targets,g=t.parent,v=g&&g.data==="nested"?g.vars.targets:p,E=t._overwrite==="auto"&&!Ff,y=t.timeline,T=i.easeReverse||d,w,x,M,P,C,N,D,W,I,G,X,F,et;if(y&&(!f||!r)&&(r="none"),t._ease=_r(r,Ua.ease),t._rEase=T&&(_r(T)||t._ease),t._from=!y&&!!i.runBackwards,t._from&&(t.ratio=1),!y||f&&!i.stagger){if(W=p[0]?Xs(p[0]).harness:0,F=W&&i[W.prop],w=fh(i,Gf),_&&(_._zTime<0&&_.progress(1),e<0&&h&&a&&!u?_.render(-1,!0):_.revert(h&&m?ah:xM),_._lazy=0),o){if(qs(t._startAt=Xe.set(p,hi({data:"isStart",overwrite:!1,parent:g,immediateRender:!0,lazy:!_&&$n(l),startAt:null,delay:0,onUpdate:c&&function(){return li(t,"onUpdate")},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(_n||!a&&!u)&&t._startAt.revert(ah),a&&m&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(h&&m&&!_){if(e&&(a=!1),M=hi({overwrite:!1,data:"isFromStart",lazy:a&&!_&&$n(l),immediateRender:a,stagger:0,parent:g},w),F&&(M[W.prop]=F),qs(t._startAt=Xe.set(p,M)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(_n?t._startAt.revert(ah):t._startAt.render(-1,!0)),t._zTime=e,!a)s(t._startAt,Se,Se);else if(!e)return}for(t._pt=t._ptCache=0,l=m&&$n(l)||l&&!m,x=0;x<p.length;x++){if(C=p[x],D=C._gsap||Wf(p)[x]._gsap,t._ptLookup[x]=G={},If[D.id]&&Ws.length&&uh(),X=v===p?x:v.indexOf(C),W&&(I=new W).init(C,F||w,t,X,v)!==!1&&(t._pt=P=new zn(t._pt,C,I.name,0,1,I.render,I,0,I.priority),I._props.forEach(function(H){G[H]=P}),I.priority&&(N=1)),!W||F)for(M in w)Zn[M]&&(I=$f(M,w,t,X,C,v))?I.priority&&(N=1):G[M]=P=Jf.call(t,C,M,"get",w[M],X,v,0,i.stringFilter);t._op&&t._op[x]&&t.kill(C,t._op[x]),E&&t._pt&&(Hs=t,Oe.killTweensOf(C,G,t.globalTime(e)),et=!t.parent,Hs=0),t._pt&&l&&(If[D.id]=1)}N&&ed(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!et,f&&e<=0&&y.render(yi,!0,!0)},qM=function(t,e,n,i,r,o,a,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],h,d,f,u;if(!c)for(c=t._ptCache[e]=[],f=t._ptLookup,u=t._targets.length;u--;){if(h=f[u][e],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==e&&h.fp!==e;)h=h._next;if(!h)return Of=1,t.vars[e]="+=0",Kf(t,a),Of=0,l?Oa(e+" not eligible for reset. Try splitting into individual properties"):1;c.push(h)}for(u=c.length;u--;)d=c[u],h=d._pt||d,h.s=(i||i===0)&&!r?i:h.s+(i||0)+o*h.c,h.c=n-h.s,d.e&&(d.e=He(n)+xn(d.e)),d.b&&(d.b=h.s+xn(d.b))},YM=function(t,e){var n=t[0]?Xs(t[0]).harness:0,i=n&&n.aliases,r,o,a,l;if(!i)return e;r=go({},e);for(o in i)if(o in r)for(l=i[o].split(","),a=l.length;a--;)r[l[a]]=r[o];return r},ZM=function(t,e,n,i){var r=e.ease||i||"power1.inOut",o,a;if(Rn(e))a=n[t]||(n[t]=[]),e.forEach(function(l,c){return a.push({t:c/(e.length-1)*100,v:l,e:r})});else for(o in e)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(t),v:e[o],e:r})},Na=function(t,e,n,i,r){return Ge(t)?t.call(e,n,i,r):an(t)&&~t.indexOf("random(")?yo(t):t},mh=Hf+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",pg={};Bn(mh+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return pg[s]=1});mh=mh.split(",");var Xe=(function(s){Gm(t,s);function t(n,i,r,o){var a;typeof i=="number"&&(r.duration=i,i=r,r=null),a=s.call(this,o?i:La(i))||this;var l=a.vars,c=l.duration,h=l.delay,d=l.immediateRender,f=l.stagger,u=l.overwrite,m=l.keyframes,_=l.defaults,p=l.scrollTrigger,g=i.parent||Oe,v=(Rn(n)||Wm(n)?_s(n[0]):"length"in i)?[n]:Si(n),E,y,T,w,x,M,P,C;if(a._targets=v.length?Wf(v):Oa("GSAP target "+n+" not found. https://gsap.com",!Kn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=u,m||f||oh(c)||oh(h)){i=a.vars;var N=i.easeReverse||i.yoyoEase;if(E=a.timeline=new Cn({data:"nested",defaults:_||{},targets:g&&g.data==="nested"?g.vars.targets:v}),E.kill(),E.parent=E._dp=ms(a),E._start=0,f||oh(c)||oh(h)){if(w=v.length,P=f&&sg(f),$i(f))for(x in f)~mh.indexOf(x)&&(C||(C={}),C[x]=f[x]);for(y=0;y<w;y++)T=fh(i,pg),T.stagger=0,N&&(T.easeReverse=N),C&&go(T,C),M=v[y],T.duration=+Na(c,ms(a),y,M,v),T.delay=(+Na(h,ms(a),y,M,v)||0)-a._delay,!f&&w===1&&T.delay&&(a._delay=h=T.delay,a._start+=h,T.delay=0),E.to(M,T,P?P(y,M,v):0),E._ease=ce.none;E.duration()?c=h=0:a.timeline=0}else if(m){La(hi(E.vars.defaults,{ease:"none"})),E._ease=_r(m.ease||i.ease||"none");var D=0,W,I,G;if(Rn(m))m.forEach(function(X){return E.to(v,X,">")}),E.duration();else{T={};for(x in m)x==="ease"||x==="easeEach"||ZM(x,m[x],T,m.easeEach);for(x in T)for(W=T[x].sort(function(X,F){return X.t-F.t}),D=0,y=0;y<W.length;y++)I=W[y],G={ease:I.e,duration:(I.t-(y?W[y-1].t:0))/100*c},G[x]=I.v,E.to(v,G,D),D+=G.duration;E.duration()<c&&E.to({},{duration:c-E.duration()})}}c||a.duration(c=E.duration())}else a.timeline=0;return u===!0&&!Ff&&(Hs=ms(a),Oe.killTweensOf(v),Hs=0),Ji(g,ms(a),r),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(d||!c&&!m&&a._start===Ue(g._time)&&$n(d)&&TM(ms(a))&&g.data!=="nested")&&(a._tTime=-Se,a.render(Math.max(0,-h)||0)),p&&tg(ms(a),p),a}var e=t.prototype;return e.render=function(i,r,o){var a=this._time,l=this._tDur,c=this._dur,h=i<0,d=i>l-Se&&!h?l:i<Se?0:i,f,u,m,_,p,g,v,E;if(!c)EM(this,i,r,o);else if(d!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(f=d,E=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(_*100+i,r,o);if(f=Ue(d%_),d===l?(m=this._repeat,f=c):(p=Ue(d/_),m=~~p,m&&m===p?(f=c,m--):f>c&&(f=c)),g=this._yoyo&&m&1,g&&(f=c-f),p=_o(this._tTime,_),f===a&&!o&&this._initted&&m===p)return this._tTime=d,this;m!==p&&this.vars.repeatRefresh&&!g&&!this._lock&&f!==_&&this._initted&&(this._lock=o=1,this.render(Ue(_*m),!0).invalidate()._lock=0)}if(!this._initted){if(eg(this,h?i:f,o,r,d))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&m!==p))return this;if(c!==this._dur)return this.render(i,r,o)}if(this._rEase){var y=f<a;if(y!==this._inv){var T=y?a:c-a;this._inv=y,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=T?(y?-1:1)/T:0,this._invScale=y?-this.ratio:1-this.ratio,this._invEase=y?this._rEase:this._ease}this.ratio=v=this._invRatio+this._invScale*this._invEase((f-this._invTime)*this._invRecip)}else this.ratio=v=this._ease(f/c);if(this._from&&(this.ratio=v=1-v),this._tTime=d,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&d&&!r&&!p&&(li(this,"onStart"),this._tTime!==d))return this;for(u=this._pt;u;)u.r(v,u.d),u=u._next;E&&E.render(i<0?i:E._dur*E._ease(f/this._dur),r,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(h&&Lf(this,i,r,o),li(this,"onUpdate")),this._repeat&&m!==p&&this.vars.onRepeat&&!r&&this.parent&&li(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(h&&!this._onUpdate&&Lf(this,i,!0,!0),(i||!c)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&qs(this,1),!r&&!(h&&!a)&&(d||a||g)&&(li(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),s.prototype.invalidate.call(this,i)},e.resetTo=function(i,r,o,a,l){Ba||Jn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||Kf(this,c),h=this._ease(c/this._dur),qM(this,i,r,o,a,h,c,l)?this.resetTo(i,r,o,a,1):(Sh(this,0),this.parent||Qm(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?Pa(this):this.scrollTrigger&&this.scrollTrigger.kill(!!_n),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,Hs&&Hs.vars.overwrite!==!0)._first||Pa(this),this.parent&&o!==this.timeline.totalDuration()&&xo(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?Si(i):a,c=this._ptLookup,h=this._pt,d,f,u,m,_,p,g;if((!r||r==="all")&&MM(a,l))return r==="all"&&(this._pt=0),Pa(this);for(d=this._op=this._op||[],r!=="all"&&(an(r)&&(_={},Bn(r,function(v){return _[v]=1}),r=_),r=YM(a,r)),g=a.length;g--;)if(~l.indexOf(a[g])){f=c[g],r==="all"?(d[g]=r,m=f,u={}):(u=d[g]=d[g]||{},m=r);for(_ in m)p=f&&f[_],p&&((!("kill"in p.d)||p.d.kill(_)===!0)&&vh(this,p,"_pt"),delete f[_]),u!=="all"&&(u[_]=1)}return this._initted&&!this._pt&&h&&Pa(this),this},t.to=function(i,r){return new t(i,r,arguments[2])},t.from=function(i,r){return Da(1,arguments)},t.delayedCall=function(i,r,o,a){return new t(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},t.fromTo=function(i,r,o){return Da(2,arguments)},t.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new t(i,r)},t.killTweensOf=function(i,r,o){return Oe.killTweensOf(i,r,o)},t})(za);hi(Xe.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Bn("staggerTo,staggerFrom,staggerFromTo",function(s){Xe[s]=function(){var t=new Cn,e=Df.call(arguments,0);return e.splice(s==="staggerFromTo"?5:4,0,0),t[s].apply(t,e)}});var Qf=function(t,e,n){return t[e]=n},mg=function(t,e,n){return t[e](n)},JM=function(t,e,n,i){return t[e](i.fp,n)},$M=function(t,e,n){return t.setAttribute(e,n)},Mh=function(t,e){return Ge(t[e])?mg:_h(t[e])&&t.setAttribute?$M:Qf},gg=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},KM=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},jf=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},td=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},QM=function(t,e,n,i){for(var r=this._pt,o;r;)o=r._next,r.p===i&&r.modifier(t,e,n),r=o},jM=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?vh(this,e,"_pt"):e.dep||(n=1),e=i;return!n},tb=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},ed=function(t){for(var e=t._pt,n,i,r,o;e;){for(n=e._next,i=r;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:o)?e._prev._next=e:r=e,(e._next=i)?i._prev=e:o=e,e=n}t._pt=r},zn=(function(){function s(e,n,i,r,o,a,l,c,h){this.t=n,this.s=r,this.c=o,this.p=i,this.r=a||gg,this.d=l||this,this.set=c||Qf,this.pr=h||0,this._next=e,e&&(e._prev=this)}var t=s.prototype;return t.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=tb,this.m=n,this.mt=r,this.tween=i},s})();Bn(Hf+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(s){return Gf[s]=1});ci.TweenMax=ci.TweenLite=Xe;ci.TimelineLite=ci.TimelineMax=Cn;Oe=new Cn({sortChildren:!1,defaults:Ua,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Kn.stringFilter=Yf;var xr=[],ch={},eb=[],Vm=0,nb=0,Af=function(t){return(ch[t]||eb).map(function(e){return e()})},ka=function(){var t=Date.now(),e=[];t-Vm>2&&(Af("matchMediaInit"),xr.forEach(function(n){var i=n.queries,r=n.conditions,o,a,l,c;for(a in i)o=Zi.matchMedia(i[a]).matches,o&&(l=1),o!==r[a]&&(r[a]=o,c=1);c&&(n.revert(),l&&e.push(n))}),Af("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Vm=t,Af("matchMedia"))},_g=(function(){function s(e,n){this.selector=n&&Nf(n),this.data=[],this._r=[],this.isReverted=!1,this.id=nb++,e&&this.add(e)}var t=s.prototype;return t.add=function(n,i,r){Ge(n)&&(r=i,i=n,n=Ge);var o=this,a=function(){var c=De,h=o.selector,d;return c&&c!==o&&c.data.push(o),r&&(o.selector=Nf(r)),De=o,d=i.apply(o,arguments),Ge(d)&&o._r.push(d),De=c,o.selector=h,o.isReverted=!1,d};return o.last=a,n===Ge?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},t.ignore=function(n){var i=De;De=null,n(this),De=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof s?n.push.apply(n,i.getTweens()):i instanceof Xe&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var r=this;if(n?(function(){for(var a=r.getTweens(),l=r.data.length,c;l--;)c=r.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return a.splice(a.indexOf(h),1)}));for(a.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,d){return d.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=r.data.length;l--;)c=r.data[l],c instanceof Cn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Xe)&&c.revert&&c.revert(n);r._r.forEach(function(h){return h(n,r)}),r.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i){for(var o=xr.length;o--;)xr[o].id===this.id&&xr.splice(o,1);this._mqs&&this._mqs.forEach(function(a){return a.removeListener?a.removeListener(ka):a.removeEventListener("change",ka)}),this._mqs=null}},t.revert=function(n){this.kill(n||{})},s})(),ib=(function(){function s(e){this.contexts=[],this.scope=e,De&&De.data.push(this)}var t=s.prototype;return t.add=function(n,i,r){$i(n)||(n={matches:n});var o=new _g(0,r||this.scope),a=o.conditions={},l,c,h;De&&!o.selector&&(o.selector=De.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?h=1:(l=Zi.matchMedia(n[c]),l&&(xr.indexOf(o)<0&&xr.push(o),(a[c]=l.matches)&&(h=1),l.addListener?l.addListener(ka):l.addEventListener("change",ka),(o._mqs||(o._mqs=[])).push(l)));return h&&i(o,function(d){return o.add(null,d)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},s})(),gh={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return hg(i)})},timeline:function(t){return new Cn(t)},getTweensOf:function(t,e){return Oe.getTweensOf(t,e)},getProperty:function(t,e,n,i){an(t)&&(t=Si(t)[0]);var r=Xs(t||{}).get,o=n?Km:$m;return n==="native"&&(n=""),t&&(e?o((Zn[e]&&Zn[e].get||r)(t,e,n,i)):function(a,l,c){return o((Zn[a]&&Zn[a].get||r)(t,a,l,c))})},quickSetter:function(t,e,n){if(t=Si(t),t.length>1){var i=t.map(function(h){return Pn.quickSetter(h,e,n)}),r=i.length;return function(h){for(var d=r;d--;)i[d](h)}}t=t[0]||{};var o=Zn[e],a=Xs(t),l=a.harness&&(a.harness.aliases||{})[e]||e,c=o?function(h){var d=new o;mo._pt=0,d.init(t,n?h+n:h,mo,0,[t]),d.render(1,d),mo._pt&&td(1,mo)}:a.set(t,l);return o?c:function(h){return c(t,l,n?h+n:h,a,1)}},quickTo:function(t,e,n){var i,r=Pn.to(t,hi((i={},i[e]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,c,h){return r.resetTo(e,l,c,h)};return o.tween=r,o},isTweening:function(t){return Oe.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=_r(t.ease,Ua.ease)),Om(Ua,t||{})},config:function(t){return Om(Kn,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,r=t.defaults,o=t.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!Zn[a]&&!ci[a]&&Oa(e+" effect requires "+a+" plugin.")}),bf[e]=function(a,l,c){return n(Si(a),hi(l||{},r),c)},o&&(Cn.prototype[e]=function(a,l,c){return this.add(bf[e](a,$i(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){ce[t]=_r(e)},parseEase:function(t,e){return arguments.length?_r(t,e):ce},getById:function(t){return Oe.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new Cn(t),i,r;for(n.smoothChildTiming=$n(t.smoothChildTiming),Oe.remove(n),n._dp=0,n._time=n._tTime=Oe._time,i=Oe._first;i;)r=i._next,(e||!(!i._dur&&i instanceof Xe&&i.vars.onComplete===i._targets[0]))&&Ji(n,i,i._start-i._delay),i=r;return Ji(Oe,n,0),n},context:function(t,e){return t?new _g(t,e):De},matchMedia:function(t){return new ib(t)},matchMediaRefresh:function(){return xr.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||ka()},addEventListener:function(t,e){var n=ch[t]||(ch[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=ch[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:NM,wrapYoyo:UM,distribute:sg,random:og,snap:rg,normalize:DM,getUnit:xn,clamp:RM,splitColor:ug,toArray:Si,selector:Nf,mapRange:lg,pipe:IM,unitize:LM,interpolate:OM,shuffle:ig},install:qm,effects:bf,ticker:Jn,updateRoot:Cn.updateRoot,plugins:Zn,globalTimeline:Oe,core:{PropTween:zn,globals:Ym,Tween:Xe,Timeline:Cn,Animation:za,getCache:Xs,_removeLinkedListItem:vh,reverting:function(){return _n},context:function(t){return t&&De&&(De.data.push(t),t._ctx=De),De},suppressOverwrites:function(t){return Ff=t}}};Bn("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return gh[s]=Xe[s]});Jn.add(Cn.updateRoot);mo=gh.to({},{duration:0});var sb=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},rb=function(t,e){var n=t._targets,i,r,o;for(i in e)for(r=n.length;r--;)o=t._ptLookup[r][i],o&&(o=o.d)&&(o._pt&&(o=sb(o,i)),o&&o.modifier&&o.modifier(e[i],t,n[r],i))},Cf=function(t,e){return{name:t,headless:1,rawVars:1,init:function(i,r,o){o._onInit=function(a){var l,c;if(an(r)&&(l={},Bn(r,function(h){return l[h]=1}),r=l),e){l={};for(c in r)l[c]=e(r[c]);r=l}rb(a,r)}}}},Pn=gh.registerPlugin({name:"attr",init:function(t,e,n,i,r){var o,a,l;this.tween=n;for(o in e)l=t.getAttribute(o)||"",a=this.add(t,"setAttribute",(l||0)+"",e[o],i,r,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(t,e){for(var n=e._pt;n;)_n?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",headless:1,init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},Cf("roundProps",Uf),Cf("modifiers"),Cf("snap",rg))||gh;Xe.version=Cn.version=Pn.version="3.15.1";Xm=1;Bf()&&vo();var ob=ce.Power0,ab=ce.Power1,lb=ce.Power2,cb=ce.Power3,hb=ce.Power4,ub=ce.Linear,fb=ce.Quad,db=ce.Cubic,pb=ce.Quart,mb=ce.Quint,gb=ce.Strong,_b=ce.Elastic,xb=ce.Back,vb=ce.SteppedEase,yb=ce.Bounce,Sb=ce.Sine,Mb=ce.Expo,bb=ce.Circ;var xg,Zs,Mo,ad,wr,Tb,vg,ld,wb=function(){return typeof window!="undefined"},vs={},Tr=180/Math.PI,bo=Math.PI/180,So=Math.atan2,yg=1e8,cd=/([A-Z])/g,Eb=/(left|right|width|margin|padding|x)/i,Ab=/[\s,\(]\S/,Ki={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},id=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},Cb=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},Rb=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},Pb=function(t,e){return e.set(e.t,e.p,t===1?e.e:t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},Ib=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},Cg=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},Rg=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},Lb=function(t,e,n){return t.style[e]=n},Db=function(t,e,n){return t.style.setProperty(e,n)},Nb=function(t,e,n){return t._gsap[e]=n},Ub=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},Ob=function(t,e,n,i,r){var o=t._gsap;o.scaleX=o.scaleY=n,o.renderTransform(r,o)},Fb=function(t,e,n,i,r){var o=t._gsap;o[e]=n,o.renderTransform(r,o)},Fe="transform",Qn=Fe+"Origin",Bb=function s(t,e){var n=this,i=this.target,r=i.style,o=i._gsap;if(t in vs&&r){if(this.tfm=this.tfm||{},t!=="transform")t=Ki[t]||t,~t.indexOf(",")?t.split(",").forEach(function(a){return n.tfm[a]=xs(i,a)}):this.tfm[t]=o.x?o[t]:xs(i,t),t===Qn&&(this.tfm.zOrigin=o.zOrigin);else return Ki.transform.split(",").forEach(function(a){return s.call(n,a,e)});if(this.props.indexOf(Fe)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Qn,e,"")),t=Fe}(r||e)&&this.props.push(t,e,r[t])},Pg=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},zb=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,r,o;for(r=0;r<t.length;r+=3)t[r+1]?t[r+1]===2?e[t[r]](t[r+2]):e[t[r]]=t[r+2]:t[r+2]?n[t[r]]=t[r+2]:n.removeProperty(t[r].substr(0,2)==="--"?t[r]:t[r].replace(cd,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),r=ld(),(!r||!r.isStart)&&!n[Fe]&&(Pg(n),i.zOrigin&&n[Qn]&&(n[Qn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Ig=function(t,e){var n={target:t,props:[],revert:zb,save:Bb};return t._gsap||Pn.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(i){return n.save(i)}),n},Lg,sd=function(t,e){var n=Zs.createElementNS?Zs.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Zs.createElement(t);return n&&n.style?n:Zs.createElement(t)},ui=function s(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(cd,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&s(t,To(e)||e,1)||""},Sg="O,Moz,ms,Ms,Webkit".split(","),To=function(t,e,n){var i=e||wr,r=i.style,o=5;if(t in r&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(Sg[o]+t in r););return o<0?null:(o===3?"ms":o>=0?Sg[o]:"")+t},rd=function(){wb()&&window.document&&(xg=window,Zs=xg.document,Mo=Zs.documentElement,wr=sd("div")||{style:{}},Tb=sd("div"),Fe=To(Fe),Qn=Fe+"Origin",wr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Lg=!!To("perspective"),ld=Pn.core.reverting,ad=1)},Mg=function(t){var e=t.ownerSVGElement,n=sd("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=t.cloneNode(!0),r;i.style.display="block",n.appendChild(i),Mo.appendChild(n);try{r=i.getBBox()}catch{}return n.removeChild(i),Mo.removeChild(n),r},bg=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},Dg=function(t){var e,n;try{e=t.getBBox()}catch{e=Mg(t),n=1}return e&&(e.width||e.height)||n||(e=Mg(t)),e&&!e.width&&!e.x&&!e.y?{x:+bg(t,["x","cx","x1"])||0,y:+bg(t,["y","cy","y1"])||0,width:0,height:0}:e},Ng=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&Dg(t))},$s=function(t,e){if(e){var n=t.style,i;e in vs&&e!==Qn&&(e=Fe),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(cd,"-$1").toLowerCase())):n.removeAttribute(e)}},Js=function(t,e,n,i,r,o){var a=new zn(t._pt,e,n,0,1,o?Rg:Cg);return t._pt=a,a.b=i,a.e=r,t._props.push(n),a},Tg={deg:1,rad:1,turn:1},kb={grid:1,flex:1},Ks=function s(t,e,n,i){var r=parseFloat(n)||0,o=(n+"").trim().substr((r+"").length)||"px",a=wr.style,l=Eb.test(e),c=t.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),d=100,f=i==="px",u=i==="%",m,_,p,g;if(i===o||!r||Tg[i]||Tg[o])return r;if(o!=="px"&&!f&&(r=s(t,e,n,"px")),g=t.getCTM&&Ng(t),(u||o==="%")&&(vs[e]||~e.indexOf("adius")))return m=g?t.getBBox()[l?"width":"height"]:t[h],He(u?r/m*d:r/100*m);if(a[l?"width":"height"]=d+(f?o:i),_=i!=="rem"&&~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,g&&(_=(t.ownerSVGElement||{}).parentNode),(!_||_===Zs||!_.appendChild)&&(_=Zs.body),p=_._gsap,p&&u&&p.width&&l&&p.time===Jn.time&&!p.uncache)return He(r/p.width*d);if(u&&(e==="height"||e==="width")){var v=t.style[e];t.style[e]=d+i,m=t[h],v?t.style[e]=v:$s(t,e)}else(u||o==="%")&&!kb[ui(_,"display")]&&(a.position=ui(t,"position")),_===t&&(a.position="static"),_.appendChild(wr),m=wr[h],_.removeChild(wr),a.position="absolute";return l&&u&&(p=Xs(_),p.time=Jn.time,p.width=_[h]),He(f?m*r/d:m&&r?d/m*r:0)},xs=function(t,e,n,i){var r;return ad||rd(),e in Ki&&e!=="transform"&&(e=Ki[e],~e.indexOf(",")&&(e=e.split(",")[0])),vs[e]&&e!=="transform"?(r=Wa(t,i),r=e!=="transformOrigin"?r[e]:r.svg?r.origin:Th(ui(t,Qn))+" "+r.zOrigin+"px"):(r=t.style[e],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=bh[e]&&bh[e](t,e,n)||ui(t,e)||Xf(t,e)||(e==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?Ks(t,e,r,n)+n:r},Vb=function(t,e,n,i){if(!n||n==="none"){var r=To(e,t,1),o=r&&ui(t,r,1);o&&o!==n?(e=r,n=o):e==="borderColor"&&(n=ui(t,"borderTopColor"))}var a=new zn(this._pt,t.style,e,0,1,jf),l=0,c=0,h,d,f,u,m,_,p,g,v,E,y,T;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=ui(t,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=t.style[e],t.style[e]=i,i=ui(t,e)||i,_?t.style[e]=_:$s(t,e)),h=[n,i],Yf(h),n=h[0],i=h[1],f=n.match(vr)||[],T=i.match(vr)||[],T.length){for(;d=vr.exec(i);)p=d[0],v=i.substring(l,d.index),m?m=(m+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(m=1),p!==(_=f[c++]||"")&&(u=parseFloat(_)||0,y=_.substr((u+"").length),p.charAt(1)==="="&&(p=yr(u,p)+y),g=parseFloat(p),E=p.substr((g+"").length),l=vr.lastIndex-E.length,E||(E=E||Kn.units[e]||y,l===i.length&&(i+=E,a.e+=E)),y!==E&&(u=Ks(t,e,_,E)||0),a._pt={_next:a._pt,p:v||c===1?v:",",s:u,c:g-u,m:m&&m<4||e==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=e==="display"&&i==="none"?Rg:Cg;return kf.test(i)&&(a.e=0),this._pt=a,a},wg={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Gb=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=wg[n]||n,e[1]=wg[i]||i,e.join(" ")},Hb=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,r=e.u,o=n._gsap,a,l,c;if(r==="all"||r===!0)i.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)a=r[c],vs[a]&&(l=1,a=a==="transformOrigin"?Qn:Fe),$s(n,a);l&&($s(n,Fe),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Wa(n,1),o.uncache=1,Pg(i)))}},bh={clearProps:function(t,e,n,i,r){if(r.data!=="isFromStart"){var o=t._pt=new zn(t._pt,e,n,0,0,Hb);return o.u=i,o.pr=-10,o.tween=r,t._props.push(n),1}}},Ha=[1,0,0,1,0,0],Ug={},Og=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},Eg=function(t){var e=ui(t,Fe);return Og(e)?Ha:e.substr(7).match(zf).map(He)},hd=function(t,e){var n=t._gsap||Xs(t),i=t.style,r=Eg(t),o,a,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?Ha:r):(r===Ha&&!t.offsetParent&&t!==Mo&&!n.svg&&(l=i.display,i.display="block",o=t.parentNode,(!o||!t.offsetParent&&!t.getBoundingClientRect().width)&&(c=1,a=t.nextElementSibling,Mo.appendChild(t)),r=Eg(t),l?i.display=l:$s(t,"display"),c&&(a?o.insertBefore(t,a):o?o.appendChild(t):Mo.removeChild(t))),e&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},od=function(t,e,n,i,r,o){var a=t._gsap,l=r||hd(t,!0),c=a.xOrigin||0,h=a.yOrigin||0,d=a.xOffset||0,f=a.yOffset||0,u=l[0],m=l[1],_=l[2],p=l[3],g=l[4],v=l[5],E=e.split(" "),y=parseFloat(E[0])||0,T=parseFloat(E[1])||0,w,x,M,P;n?l!==Ha&&(x=u*p-m*_)&&(M=y*(p/x)+T*(-_/x)+(_*v-p*g)/x,P=y*(-m/x)+T*(u/x)-(u*v-m*g)/x,y=M,T=P):(w=Dg(t),y=w.x+(~E[0].indexOf("%")?y/100*w.width:y),T=w.y+(~(E[1]||E[0]).indexOf("%")?T/100*w.height:T)),i||i!==!1&&a.smooth?(g=y-c,v=T-h,a.xOffset=d+(g*u+v*_)-g,a.yOffset=f+(g*m+v*p)-v):a.xOffset=a.yOffset=0,a.xOrigin=y,a.yOrigin=T,a.smooth=!!i,a.origin=e,a.originIsAbsolute=!!n,t.style[Qn]="0px 0px",o&&(Js(o,a,"xOrigin",c,y),Js(o,a,"yOrigin",h,T),Js(o,a,"xOffset",d,a.xOffset),Js(o,a,"yOffset",f,a.yOffset)),t.setAttribute("data-svg-origin",y+" "+T)},Wa=function(t,e){var n=t._gsap||new Zf(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,r=n.scaleX<0,o="px",a="deg",l=getComputedStyle(t),c=ui(t,Qn)||"0",h,d,f,u,m,_,p,g,v,E,y,T,w,x,M,P,C,N,D,W,I,G,X,F,et,H,R,K,yt,kt,Y,ft;return h=d=f=_=p=g=v=E=y=0,u=m=1,n.svg=!!(t.getCTM&&Ng(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Fe]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Fe]!=="none"?l[Fe]:"")),i.scale=i.rotate=i.translate="none"),x=hd(t,n.svg),n.svg&&(n.uncache?(et=t.getBBox(),c=n.xOrigin-et.x+"px "+(n.yOrigin-et.y)+"px",F=""):F=!e&&t.getAttribute("data-svg-origin"),od(t,F||c,!!F||n.originIsAbsolute,n.smooth!==!1,x)),T=n.xOrigin||0,w=n.yOrigin||0,x!==Ha&&(N=x[0],D=x[1],W=x[2],I=x[3],h=G=x[4],d=X=x[5],x.length===6?(u=Math.sqrt(N*N+D*D),m=Math.sqrt(I*I+W*W),_=N||D?So(D,N)*Tr:0,v=W||I?So(W,I)*Tr+_:0,v&&(m*=Math.abs(Math.cos(v*bo))),n.svg&&(h-=T-(T*N+w*W),d-=w-(T*D+w*I))):(ft=x[6],kt=x[7],R=x[8],K=x[9],yt=x[10],Y=x[11],h=x[12],d=x[13],f=x[14],M=So(ft,yt),p=M*Tr,M&&(P=Math.cos(-M),C=Math.sin(-M),F=G*P+R*C,et=X*P+K*C,H=ft*P+yt*C,R=G*-C+R*P,K=X*-C+K*P,yt=ft*-C+yt*P,Y=kt*-C+Y*P,G=F,X=et,ft=H),M=So(-W,yt),g=M*Tr,M&&(P=Math.cos(-M),C=Math.sin(-M),F=N*P-R*C,et=D*P-K*C,H=W*P-yt*C,Y=I*C+Y*P,N=F,D=et,W=H),M=So(D,N),_=M*Tr,M&&(P=Math.cos(M),C=Math.sin(M),F=N*P+D*C,et=G*P+X*C,D=D*P-N*C,X=X*P-G*C,N=F,G=et),p&&Math.abs(p)+Math.abs(_)>359.9&&(p=_=0,g=180-g),u=He(Math.sqrt(N*N+D*D+W*W)),m=He(Math.sqrt(X*X+ft*ft)),M=So(G,X),v=Math.abs(M)>2e-4?M*Tr:0,y=Y?1/(Y<0?-Y:Y):0),n.svg&&(F=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!Og(ui(t,Fe)),F&&t.setAttribute("transform",F))),Math.abs(v)>90&&Math.abs(v)<270&&(r?(u*=-1,v+=_<=0?180:-180,_+=_<=0?180:-180):(m*=-1,v+=v<=0?180:-180)),e=e||n.uncache,n.x=h-((n.xPercent=h&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-h)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+o,n.y=d-((n.yPercent=d&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-d)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+o,n.z=f+o,n.scaleX=He(u),n.scaleY=He(m),n.rotation=He(_)+a,n.rotationX=He(p)+a,n.rotationY=He(g)+a,n.skewX=v+a,n.skewY=E+a,n.transformPerspective=y+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(i[Qn]=Th(c)),n.xOffset=n.yOffset=0,n.force3D=Kn.force3D,n.renderTransform=n.svg?Xb:Lg?Fg:Wb,n.uncache=0,n},Th=function(t){return(t=t.split(" "))[0]+" "+t[1]},nd=function(t,e,n){var i=xn(e);return He(parseFloat(e)+parseFloat(Ks(t,"x",n+"px",i)))+i},Wb=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,Fg(t,e)},Mr="0deg",Ga="0px",br=") ",Fg=function(t,e){var n=e||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,h=n.rotationY,d=n.rotationX,f=n.skewX,u=n.skewY,m=n.scaleX,_=n.scaleY,p=n.transformPerspective,g=n.force3D,v=n.target,E=n.zOrigin,y="",T=g==="auto"&&t&&t!==1||g===!0;if(E&&(d!==Mr||h!==Mr)){var w=parseFloat(h)*bo,x=Math.sin(w),M=Math.cos(w),P;w=parseFloat(d)*bo,P=Math.cos(w),o=nd(v,o,x*P*-E),a=nd(v,a,-Math.sin(w)*-E),l=nd(v,l,M*P*-E+E)}p!==Ga&&(y+="perspective("+p+br),(i||r)&&(y+="translate("+i+"%, "+r+"%) "),(T||o!==Ga||a!==Ga||l!==Ga)&&(y+=l!==Ga||T?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+br),c!==Mr&&(y+="rotate("+c+br),h!==Mr&&(y+="rotateY("+h+br),d!==Mr&&(y+="rotateX("+d+br),(f!==Mr||u!==Mr)&&(y+="skew("+f+", "+u+br),(m!==1||_!==1)&&(y+="scale("+m+", "+_+br),v.style[Fe]=y||"translate(0, 0)"},Xb=function(t,e){var n=e||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,h=n.skewY,d=n.scaleX,f=n.scaleY,u=n.target,m=n.xOrigin,_=n.yOrigin,p=n.xOffset,g=n.yOffset,v=n.forceCSS,E=parseFloat(o),y=parseFloat(a),T,w,x,M,P;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=bo,c*=bo,T=Math.cos(l)*d,w=Math.sin(l)*d,x=Math.sin(l-c)*-f,M=Math.cos(l-c)*f,c&&(h*=bo,P=Math.tan(c-h),P=Math.sqrt(1+P*P),x*=P,M*=P,h&&(P=Math.tan(h),P=Math.sqrt(1+P*P),T*=P,w*=P)),T=He(T),w=He(w),x=He(x),M=He(M)):(T=d,M=f,w=x=0),(E&&!~(o+"").indexOf("px")||y&&!~(a+"").indexOf("px"))&&(E=Ks(u,"x",o,"px"),y=Ks(u,"y",a,"px")),(m||_||p||g)&&(E=He(E+m-(m*T+_*x)+p),y=He(y+_-(m*w+_*M)+g)),(i||r)&&(P=u.getBBox(),E=He(E+i/100*P.width),y=He(y+r/100*P.height)),P="matrix("+T+","+w+","+x+","+M+","+E+","+y+")",u.setAttribute("transform",P),v&&(u.style[Fe]=P)},qb=function(t,e,n,i,r){var o=360,a=an(r),l=parseFloat(r)*(a&&~r.indexOf("rad")?Tr:1),c=l-i,h=i+c+"deg",d,f;return a&&(d=r.split("_")[1],d==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),d==="cw"&&c<0?c=(c+o*yg)%o-~~(c/o)*o:d==="ccw"&&c>0&&(c=(c-o*yg)%o-~~(c/o)*o)),t._pt=f=new zn(t._pt,e,n,i,c,Cb),f.e=h,f.u="deg",t._props.push(n),f},Ag=function(t,e){for(var n in e)t[n]=e[n];return t},Yb=function(t,e,n){var i=Ag({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,h,d,f,u,m;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Fe]=e,a=Wa(n,1),$s(n,Fe),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Fe],o[Fe]=e,a=Wa(n,1),o[Fe]=c);for(l in vs)c=i[l],h=a[l],c!==h&&r.indexOf(l)<0&&(u=xn(c),m=xn(h),d=u!==m?Ks(n,l,c,m):parseFloat(c),f=parseFloat(h),t._pt=new zn(t._pt,a,l,d,f-d,id),t._pt.u=m||0,t._props.push(l));Ag(a,i)};Bn("padding,margin,Width,Radius",function(s,t){var e="Top",n="Right",i="Bottom",r="Left",o=(t<3?[e,n,i,r]:[e+r,e+n,i+n,i+r]).map(function(a){return t<2?s+a:"border"+a+s});bh[t>1?"border"+s:s]=function(a,l,c,h,d){var f,u;if(arguments.length<4)return f=o.map(function(m){return xs(a,m,c)}),u=f.join(" "),u.split(f[0]).length===5?f[0]:u;f=(h+"").split(" "),u={},o.forEach(function(m,_){return u[m]=f[_]=f[_]||f[(_-1)/2|0]}),a.init(l,u,d)}});var ud={name:"css",register:rd,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,r){var o=this._props,a=t.style,l=n.vars.startAt,c,h,d,f,u,m,_,p,g,v,E,y,T,w,x,M,P;ad||rd(),this.styles=this.styles||Ig(t),M=this.styles.props,this.tween=n;for(_ in e)if(_!=="autoRound"&&(h=e[_],!(Zn[_]&&$f(_,e,n,i,t,r)))){if(u=typeof h,m=bh[_],u==="function"&&(h=h.call(n,i,t,r),u=typeof h),u==="string"&&~h.indexOf("random(")&&(h=yo(h)),m)m(this,t,_,h,n)&&(x=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(_)+"").trim(),h+="",gs.lastIndex=0,gs.test(c)||(p=xn(c),g=xn(h),g?p!==g&&(c=Ks(t,_,c,g)+g):p&&(h+=p)),this.add(a,"setProperty",c,h,i,r,0,0,_),o.push(_),M.push(_,0,a[_]);else if(u!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,t,r):l[_],an(c)&&~c.indexOf("random(")&&(c=yo(c)),xn(c+"")||c==="auto"||(c+=Kn.units[_]||xn(xs(t,_))||""),(c+"").charAt(1)==="="&&(c=xs(t,_))):c=xs(t,_),f=parseFloat(c),v=u==="string"&&h.charAt(1)==="="&&h.substr(0,2),v&&(h=h.substr(2)),d=parseFloat(h),_ in Ki&&(_==="autoAlpha"&&(f===1&&xs(t,"visibility")==="hidden"&&d&&(f=0),M.push("visibility",0,a.visibility),Js(this,a,"visibility",f?"inherit":"hidden",d?"inherit":"hidden",!d)),_!=="scale"&&_!=="transform"&&(_=Ki[_],~_.indexOf(",")&&(_=_.split(",")[0]))),E=_ in vs,E){if(this.styles.save(_),P=h,u==="string"&&h.substring(0,6)==="var(--"){if(h=ui(t,h.substring(4,h.indexOf(")"))),h.substring(0,5)==="calc("){var C=t.style.perspective;t.style.perspective=h,h=ui(t,"perspective"),C?t.style.perspective=C:$s(t,"perspective")}d=parseFloat(h)}if(y||(T=t._gsap,T.renderTransform&&!e.parseTransform||Wa(t,e.parseTransform),w=e.smoothOrigin!==!1&&T.smooth,y=this._pt=new zn(this._pt,a,Fe,0,1,T.renderTransform,T,0,-1),y.dep=1),_==="scale")this._pt=new zn(this._pt,T,"scaleY",T.scaleY,(v?yr(T.scaleY,v+d):d)-T.scaleY||0,id),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){M.push(Qn,0,a[Qn]),h=Gb(h),T.svg?od(t,h,0,w,0,this):(g=parseFloat(h.split(" ")[2])||0,g!==T.zOrigin&&Js(this,T,"zOrigin",T.zOrigin,g),Js(this,a,_,Th(c),Th(h)));continue}else if(_==="svgOrigin"){od(t,h,1,w,0,this);continue}else if(_ in Ug){qb(this,T,_,f,v?yr(f,v+h):h);continue}else if(_==="smoothOrigin"){Js(this,T,"smooth",T.smooth,h);continue}else if(_==="force3D"){T[_]=h;continue}else if(_==="transform"){Yb(this,h,t);continue}}else _ in a||(_=To(_)||_);if(E||(d||d===0)&&(f||f===0)&&!Ab.test(h)&&_ in a)p=(c+"").substr((f+"").length),d||(d=0),g=xn(h)||(_ in Kn.units?Kn.units[_]:p),p!==g&&(f=Ks(t,_,c,g)),this._pt=new zn(this._pt,E?T:a,_,f,(v?yr(f,v+d):d)-f,!E&&(g==="px"||_==="zIndex")&&e.autoRound!==!1?Ib:id),this._pt.u=g||0,E&&P!==h?(this._pt.b=c,this._pt.e=P,this._pt.r=Pb):p!==g&&g!=="%"&&(this._pt.b=c,this._pt.r=Rb);else if(_ in a)Vb.call(this,t,_,c,v?v+h:h);else if(_ in t)this.add(t,_,c||t[_],v?v+h:h,i,r);else if(_!=="parseTransform"){xh(_,h);continue}E||(_ in a?M.push(_,0,a[_]):typeof t[_]=="function"?M.push(_,2,t[_]()):M.push(_,1,c||t[_])),o.push(_)}}x&&ed(this)},render:function(t,e){if(e.tween._time||!ld())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:xs,aliases:Ki,getSetter:function(t,e,n){var i=Ki[e];return i&&i.indexOf(",")<0&&(e=i),e in vs&&e!==Qn&&(t._gsap.x||xs(t,"x"))?n&&vg===n?e==="scale"?Ub:Nb:(vg=n||{})&&(e==="scale"?Ob:Fb):t.style&&!_h(t.style[e])?Lb:~e.indexOf("-")?Db:Mh(t,e)},core:{_removeProperty:$s,_getMatrix:hd}};Pn.utils.checkPrefix=To;Pn.core.getStyleSaver=Ig;(function(s,t,e,n){var i=Bn(s+","+t+","+e,function(r){vs[r]=1});Bn(t,function(r){Kn.units[r]="deg",Ug[r]=1}),Ki[i[13]]=s+","+t,Bn(n,function(r){var o=r.split(":");Ki[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Bn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){Kn.units[s]="px"});Pn.registerPlugin(ud);var Be=Pn.registerPlugin(ud)||Pn,xA=Be.core.Tween;function Bg(s,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(s,n.key,n)}}function Zb(s,t,e){return t&&Bg(s.prototype,t),e&&Bg(s,e),s}var vn,Ah,Jb,jn,Qs,js,Eo,kg,Er,Ao,Vg,ys,Ui,Gg,Hg=function(){return vn||typeof window!="undefined"&&(vn=window.gsap)&&vn.registerPlugin&&vn},Wg=1,wo=[],Kt=[],Oi=[],qa=Date.now,fd=function(t,e){return e},$b=function(){var t=Ao.core,e=t.bridge||{},n=t._scrollers,i=t._proxies;n.push.apply(n,Kt),i.push.apply(i,Oi),Kt=n,Oi=i,fd=function(o,a){return e[o](a)}},Ms=function(t,e){return~Oi.indexOf(t)&&Oi[Oi.indexOf(t)+1][e]},Ya=function(t){return!!~Vg.indexOf(t)},Vn=function(t,e,n,i,r){return t.addEventListener(e,n,{passive:i!==!1,capture:!!r})},kn=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},wh="scrollLeft",Eh="scrollTop",dd=function(){return ys&&ys.isPressed||Kt.cache++},Ch=function(t,e){var n=function i(r){if(r||r===0){Wg&&jn.history.scrollRestoration!=="manual"&&(jn.history.scrollRestoration="manual");var o=ys&&ys.isPressed;r=i.v=Math.round(r)||(ys&&ys.iOS?1:0),t(r),i.cacheID=Kt.cache,o&&fd("ss",r)}else(e||Kt.cache!==i.cacheID||fd("ref"))&&(i.cacheID=Kt.cache,i.v=t());return i.v+i.offset};return n.offset=0,t&&n},In={s:wh,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Ch(function(s){return arguments.length?jn.scrollTo(s,Ke.sc()):jn.pageXOffset||Qs[wh]||js[wh]||Eo[wh]||0})},Ke={s:Eh,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:In,sc:Ch(function(s){return arguments.length?jn.scrollTo(In.sc(),s):jn.pageYOffset||Qs[Eh]||js[Eh]||Eo[Eh]||0})},Gn=function(t,e){return(e&&e._ctx&&e._ctx.selector||vn.utils.toArray)(t)[0]||(typeof t=="string"&&vn.config().nullTargetWarn!==!1?console.warn("Element not found:",t):null)},Kb=function(t,e){for(var n=e.length;n--;)if(e[n]===t||e[n].contains(t))return!0;return!1},Ss=function(t,e){var n=e.s,i=e.sc;Ya(t)&&(t=Qs.scrollingElement||js);var r=Kt.indexOf(t),o=i===Ke.sc?1:2;!~r&&(r=Kt.push(t)-1),Kt[r+o]||Vn(t,"scroll",dd);var a=Kt[r+o],l=a||(Kt[r+o]=Ch(Ms(t,n),!0)||(Ya(t)?i:Ch(function(c){return arguments.length?t[n]=c:t[n]})));return l.target=t,a||(l.smooth=vn.getProperty(t,"scrollBehavior")==="smooth"),l},Rh=function(t,e,n){var i=t,r=t,o=qa(),a=o,l=e||50,c=Math.max(500,l*3),h=function(m,_){var p=qa();_||p-o>l?(r=i,i=m,a=o,o=p):n?i+=m:i=r+(m-r)/(p-a)*(o-a)},d=function(){r=i=n?0:i,a=o=0},f=function(m){var _=a,p=r,g=qa();return(m||m===0)&&m!==i&&h(m),o===a||g-a>c?0:(i+(n?p:-p))/((n?g:o)-_)*1e3};return{update:h,reset:d,getVelocity:f}},Xa=function(t,e){return e&&!t._gsapAllow&&t.cancelable!==!1&&t.preventDefault(),t.changedTouches?t.changedTouches[0]:t},zg=function(t){var e=Math.max.apply(Math,t),n=Math.min.apply(Math,t);return Math.abs(e)>=Math.abs(n)?e:n},Xg=function(){Ao=vn.core.globals().ScrollTrigger,Ao&&Ao.core&&$b()},qg=function(t){return vn=t||Hg(),!Ah&&vn&&typeof document!="undefined"&&document.body&&(jn=window,Qs=document,js=Qs.documentElement,Eo=Qs.body,Vg=[jn,Qs,js,Eo],Jb=vn.utils.clamp,Gg=vn.core.context||function(){},Er="onpointerenter"in Eo?"pointer":"mouse",kg=We.isTouch=jn.matchMedia&&jn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in jn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Ui=We.eventTypes=("ontouchstart"in js?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in js?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return Wg=0},500),Ah=1),Ao||Xg(),Ah};In.op=Ke;Kt.cache=0;var We=(function(){function s(e){this.init(e)}var t=s.prototype;return t.init=function(n){Ah||qg(vn)||console.warn("Please gsap.registerPlugin(Observer)"),Ao||Xg();var i=n.tolerance,r=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,h=n.preventDefault,d=n.onStop,f=n.onStopDelay,u=n.ignore,m=n.wheelSpeed,_=n.event,p=n.onDragStart,g=n.onDragEnd,v=n.onDrag,E=n.onPress,y=n.onRelease,T=n.onRight,w=n.onLeft,x=n.onUp,M=n.onDown,P=n.onChangeX,C=n.onChangeY,N=n.onChange,D=n.onToggleX,W=n.onToggleY,I=n.onHover,G=n.onHoverEnd,X=n.onMove,F=n.ignoreCheck,et=n.isNormalizer,H=n.onGestureStart,R=n.onGestureEnd,K=n.onWheel,yt=n.onEnable,kt=n.onDisable,Y=n.onClick,ft=n.scrollSpeed,xt=n.capture,Mt=n.allowClicks,dt=n.lockAxis,Rt=n.onLockAxis;this.target=a=Gn(a)||js,this.vars=n,u&&(u=vn.utils.toArray(u)),i=i||1e-9,r=r||0,m=m||1,ft=ft||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(jn.getComputedStyle(Eo).lineHeight)||22);var de,Ct,Gt,Lt,Ft,Qt,he,Z=this,jt=0,ze=0,me=n.passive||!h&&n.passive!==!1,ne=Ss(a,In),Ce=Ss(a,Ke),Me=ne(),O=Ce(),ue=~o.indexOf("touch")&&!~o.indexOf("pointer")&&Ui[0]==="pointerdown",bt=Ya(a),Nt=a.ownerDocument||Qs,ot=[0,0,0],Xt=[0,0,0],wt=0,Pt=function(){return wt=qa()},A=function(gt,it){return(Z.event=gt)&&u&&Kb(gt.target,u)||it&&ue&&gt.pointerType!=="touch"||F&&F(gt,it)},S=function(){Z._vx.reset(),Z._vy.reset(),Ct.pause(),d&&d(Z)},B=function(){var gt=Z.deltaX=zg(ot),it=Z.deltaY=zg(Xt),st=Math.abs(gt)>=i,_t=Math.abs(it)>=i;N&&(st||_t)&&N(Z,gt,it,ot,Xt),st&&(T&&Z.deltaX>0&&T(Z),w&&Z.deltaX<0&&w(Z),P&&P(Z),D&&Z.deltaX<0!=jt<0&&D(Z),jt=Z.deltaX,ot[0]=ot[1]=ot[2]=0),_t&&(M&&Z.deltaY>0&&M(Z),x&&Z.deltaY<0&&x(Z),C&&C(Z),W&&Z.deltaY<0!=ze<0&&W(Z),ze=Z.deltaY,Xt[0]=Xt[1]=Xt[2]=0),(Lt||Gt)&&(X&&X(Z),Gt&&(p&&Gt===1&&p(Z),v&&v(Z),Gt=0),Lt=!1),Qt&&!(Qt=!1)&&Rt&&Rt(Z),Ft&&(K(Z),Ft=!1),de=0},at=function(gt,it,st){ot[st]+=gt,Xt[st]+=it,Z._vx.update(gt),Z._vy.update(it),c?de||(de=requestAnimationFrame(B)):B()},nt=function(gt,it){dt&&!he&&(Z.axis=he=Math.abs(gt)>Math.abs(it)?"x":"y",Qt=!0),he!=="y"&&(ot[2]+=gt,Z._vx.update(gt,!0)),he!=="x"&&(Xt[2]+=it,Z._vy.update(it,!0)),c?de||(de=requestAnimationFrame(B)):B()},ut=function(gt){if(!A(gt,1)){gt=Xa(gt,h);var it=gt.clientX,st=gt.clientY,_t=it-Z.x,rt=st-Z.y,Et=Z.isDragging;Z.x=it,Z.y=st,(Et||(_t||rt)&&(Math.abs(Z.startX-it)>=r||Math.abs(Z.startY-st)>=r))&&(Gt||(Gt=Et?2:1),Et||(Z.isDragging=!0),nt(_t,rt))}},Q=Z.onPress=function(ct){A(ct,1)||ct&&ct.button||(Z.axis=he=null,Ct.pause(),Z.isPressed=!0,ct=Xa(ct),jt=ze=0,Z.startX=Z.x=ct.clientX,Z.startY=Z.y=ct.clientY,Z._vx.reset(),Z._vy.reset(),Vn(et?a:Nt,Ui[1],ut,me,!0),Z.deltaX=Z.deltaY=0,E&&E(Z))},z=Z.onRelease=function(ct){if(!A(ct,1)){kn(et?a:Nt,Ui[1],ut,!0);var gt=!isNaN(Z.y-Z.startY),it=Z.isDragging,st=it&&(Math.abs(Z.x-Z.startX)>3||Math.abs(Z.y-Z.startY)>3),_t=Xa(ct);!st&&gt&&(Z._vx.reset(),Z._vy.reset(),h&&Mt&&vn.delayedCall(.08,function(){if(qa()-wt>300&&!ct.defaultPrevented){if(ct.target.click)ct.target.click();else if(Nt.createEvent){var rt=Nt.createEvent("MouseEvents");rt.initMouseEvent("click",!0,!0,jn,1,_t.screenX,_t.screenY,_t.clientX,_t.clientY,!1,!1,!1,!1,0,null),ct.target.dispatchEvent(rt)}}})),Z.isDragging=Z.isGesturing=Z.isPressed=!1,d&&it&&!et&&Ct.restart(!0),Gt&&B(),g&&it&&g(Z),y&&y(Z,st)}},tt=function(gt){return gt.touches&&gt.touches.length>1&&(Z.isGesturing=!0)&&H(gt,Z.isDragging)},lt=function(){return(Z.isGesturing=!1)||R(Z)},L=function(gt){if(!A(gt)){var it=ne(),st=Ce();at((it-Me)*ft,(st-O)*ft,1),Me=it,O=st,d&&Ct.restart(!0)}},j=function(gt){if(!A(gt)){gt=Xa(gt,h),K&&(Ft=!0);var it=(gt.deltaMode===1?l:gt.deltaMode===2?jn.innerHeight:1)*m;at(gt.deltaX*it,gt.deltaY*it,0),d&&!et&&Ct.restart(!0)}},$=function(gt){if(!A(gt)){var it=gt.clientX,st=gt.clientY,_t=it-Z.x,rt=st-Z.y;Z.x=it,Z.y=st,Lt=!0,d&&Ct.restart(!0),(_t||rt)&&nt(_t,rt)}},pt=function(gt){Z.event=gt,I(Z)},ht=function(gt){Z.event=gt,G(Z)},mt=function(gt){return A(gt)||Xa(gt,h)&&Y(Z)};Ct=Z._dc=vn.delayedCall(f||.25,S).pause(),Z.deltaX=Z.deltaY=0,Z._vx=Rh(0,50,!0),Z._vy=Rh(0,50,!0),Z.scrollX=ne,Z.scrollY=Ce,Z.isDragging=Z.isGesturing=Z.isPressed=!1,Gg(this),Z.enable=function(ct){return Z.isEnabled||(Vn(bt?Nt:a,"scroll",dd),o.indexOf("scroll")>=0&&Vn(bt?Nt:a,"scroll",L,me,xt),o.indexOf("wheel")>=0&&Vn(a,"wheel",j,me,xt),(o.indexOf("touch")>=0&&kg||o.indexOf("pointer")>=0)&&(Vn(a,Ui[0],Q,me,xt),Vn(Nt,Ui[2],z),Vn(Nt,Ui[3],z),Mt&&Vn(a,"click",Pt,!0,!0),Y&&Vn(a,"click",mt),H&&Vn(Nt,"gesturestart",tt),R&&Vn(Nt,"gestureend",lt),I&&Vn(a,Er+"enter",pt),G&&Vn(a,Er+"leave",ht),X&&Vn(a,Er+"move",$)),Z.isEnabled=!0,Z.isDragging=Z.isGesturing=Z.isPressed=Lt=Gt=!1,Z._vx.reset(),Z._vy.reset(),Me=ne(),O=Ce(),ct&&ct.type&&Q(ct),yt&&yt(Z)),Z},Z.disable=function(){Z.isEnabled&&(wo.filter(function(ct){return ct!==Z&&Ya(ct.target)}).length||kn(bt?Nt:a,"scroll",dd),Z.isPressed&&(Z._vx.reset(),Z._vy.reset(),kn(et?a:Nt,Ui[1],ut,!0)),kn(bt?Nt:a,"scroll",L,xt),kn(a,"wheel",j,xt),kn(a,Ui[0],Q,xt),kn(Nt,Ui[2],z),kn(Nt,Ui[3],z),kn(a,"click",Pt,!0),kn(a,"click",mt),kn(Nt,"gesturestart",tt),kn(Nt,"gestureend",lt),kn(a,Er+"enter",pt),kn(a,Er+"leave",ht),kn(a,Er+"move",$),Z.isEnabled=Z.isPressed=Z.isDragging=!1,kt&&kt(Z))},Z.kill=Z.revert=function(){Z.disable();var ct=wo.indexOf(Z);ct>=0&&wo.splice(ct,1),ys===Z&&(ys=0)},wo.push(Z),et&&Ya(a)&&(ys=Z),Z.enable(_)},Zb(s,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),s})();We.version="3.15.1";We.create=function(s){return new We(s)};We.register=qg;We.getAll=function(){return wo.slice()};We.getById=function(s){return wo.filter(function(t){return t.vars.id===s})[0]};Hg()&&vn.registerPlugin(We);var It,Io,ee,ve,pi,xe,Ad,Xh,ol,tl,Ja,Ph,Ln,Zh,yd,Wn,Yg,Zg,Lo,h_,pd,u_,Hn,Sd,f_,d_,tr,Md,Cd,Do,Rd,er,bd,md,Ih=1,Dn=Date.now,gd=Dn(),Ti=0,$a=0,Jg=function(t,e,n){var i=di(t)&&(t.substr(0,6)==="clamp("||t.indexOf("max")>-1);return n["_"+e+"Clamp"]=i,i?t.substr(6,t.length-7):t},$g=function(t,e){return e&&(!di(t)||t.substr(0,6)!=="clamp(")?"clamp("+t+")":t},Qb=function s(){return $a&&requestAnimationFrame(s)},Kg=function(){return Zh=1},Qg=function(){return Zh=0},Qi=function(t){return t},Ka=function(t){return Math.round(t*1e5)/1e5||0},p_=function(){return typeof window!="undefined"},m_=function(){return It||p_()&&(It=window.gsap)&&It.registerPlugin&&It},Lr=function(t){return!!~Ad.indexOf(t)},g_=function(t){return(t==="Height"?Rd:ee["inner"+t])||pi["client"+t]||xe["client"+t]},__=function(t){return Ms(t,"getBoundingClientRect")||(Lr(t)?function(){return Wh.width=ee.innerWidth,Wh.height=Rd,Wh}:function(){return bs(t)})},jb=function(t,e,n){var i=n.d,r=n.d2,o=n.a;return(o=Ms(t,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(e?g_(r):t["client"+r])||0}},tT=function(t,e){return!e||~Oi.indexOf(t)?__(t):function(){return Wh}},ji=function(t,e){var n=e.s,i=e.d2,r=e.d,o=e.a;return Math.max(0,(n="scroll"+i)&&(o=Ms(t,n))?o()-__(t)()[r]:Lr(t)?(pi[n]||xe[n])-g_(i):t[n]-t["offset"+i])},Lh=function(t,e){for(var n=0;n<Lo.length;n+=3)(!e||~e.indexOf(Lo[n+1]))&&t(Lo[n],Lo[n+1],Lo[n+2])},di=function(t){return typeof t=="string"},Nn=function(t){return typeof t=="function"},Qa=function(t){return typeof t=="number"},Ar=function(t){return typeof t=="object"},Za=function(t,e,n){return t&&t.progress(e?0:1)&&n&&t.pause()},Co=function(t,e,n){if(t.enabled){var i=t._ctx?t._ctx.add(function(){return e(t,n)}):e(t,n);i&&i.totalTime&&(t.callbackAnimation=i)}},Ro=Math.abs,x_="left",v_="top",Pd="right",Id="bottom",Rr="width",Pr="height",el="Right",nl="Left",il="Top",sl="Bottom",Qe="padding",Mi="margin",Uo="Width",Ld="Height",ln="px",bi=function(t){return ee.getComputedStyle(t.nodeType===Node.DOCUMENT_NODE?t.scrollingElement:t)},eT=function(t){var e=bi(t).position;t.style.position=e==="absolute"||e==="fixed"?e:"relative"},jg=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},bs=function(t,e){var n=e&&bi(t)[yd]!=="matrix(1, 0, 0, 1, 0, 0)"&&It.to(t,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=t.getBoundingClientRect?t.getBoundingClientRect():t.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),i},qh=function(t,e){var n=e.d2;return t["offset"+n]||t["client"+n]||0},y_=function(t){var e=[],n=t.labels,i=t.duration(),r;for(r in n)e.push(n[r]/i);return e},nT=function(t){return function(e){return It.utils.snap(y_(t),e)}},Dd=function(t){var e=It.utils.snap(t),n=Array.isArray(t)&&t.slice(0).sort(function(i,r){return i-r});return n?function(i,r,o){o===void 0&&(o=.001);var a;if(!r)return e(i);if(r>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,r,o){o===void 0&&(o=.001);var a=e(i);return!r||Math.abs(a-i)<o||a-i<0==r<0?a:e(r<0?i-t:i+t)}},iT=function(t){return function(e,n){return Dd(y_(t))(e,n.direction)}},Dh=function(t,e,n,i){return n.split(",").forEach(function(r){return t(e,r,i)})},pn=function(t,e,n,i,r){return t.addEventListener(e,n,{passive:!i,capture:!!r})},dn=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},Nh=function(t,e,n){n=n&&n.wheelHandler,n&&(t(e,"wheel",n),t(e,"touchmove",n))},t_={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Uh={toggleActions:"play",anticipatePin:0},Yh={top:0,left:0,center:.5,bottom:1,right:1},kh=function(t,e){if(di(t)){var n=t.indexOf("="),i=~n?+(t.charAt(n-1)+1)*parseFloat(t.substr(n+1)):0;~n&&(t.indexOf("%")>n&&(i*=e/100),t=t.substr(0,n-1)),t=i+(t in Yh?Yh[t]*e:~t.indexOf("%")?parseFloat(t)*e/100:parseFloat(t)||0)}return t},Oh=function(t,e,n,i,r,o,a,l){var c=r.startColor,h=r.endColor,d=r.fontSize,f=r.indent,u=r.fontWeight,m=ve.createElement("div"),_=Lr(n)||Ms(n,"pinType")==="fixed",p=t.indexOf("scroller")!==-1,g=_?xe:n.tagName==="IFRAME"?n.contentDocument.body:n,v=t.indexOf("start")!==-1,E=v?c:h,y="border-color:"+E+";font-size:"+d+";color:"+E+";font-weight:"+u+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return y+="position:"+((p||l)&&_?"fixed;":"absolute;"),(p||l||!_)&&(y+=(i===Ke?Pd:Id)+":"+(o+parseFloat(f))+"px;"),a&&(y+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),m._isStart=v,m.setAttribute("class","gsap-marker-"+t+(e?" marker-"+e:"")),m.style.cssText=y,m.innerText=e||e===0?t+"-"+e:t,g.children[0]?g.insertBefore(m,g.children[0]):g.appendChild(m),m._offset=m["offset"+i.op.d2],Vh(m,0,i,v),m},Vh=function(t,e,n,i){var r={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];t._isFlipped=i,r[n.a+"Percent"]=i?-100:0,r[n.a]=i?"1px":0,r["border"+o+Uo]=1,r["border"+a+Uo]=0,r[n.p]=e+"px",It.set(t,r)},te=[],Td={},al,e_=function(){return Dn()-Ti>34&&(al||(al=requestAnimationFrame(Ts)))},Po=function(){(!Hn||!Hn.isPressed||Hn.startX>xe.clientWidth)&&(Kt.cache++,Hn?al||(al=requestAnimationFrame(Ts)):Ts(),Ti||Nr("scrollStart"),Ti=Dn())},_d=function(){d_=ee.innerWidth,f_=ee.innerHeight},ja=function(t){Kt.cache++,(t===!0||!Ln&&!u_&&!ve.fullscreenElement&&!ve.webkitFullscreenElement&&(!Sd||d_!==ee.innerWidth||Math.abs(ee.innerHeight-f_)>ee.innerHeight*.25))&&Xh.restart(!0)},Dr={},sT=[],S_=function s(){return dn(Zt,"scrollEnd",s)||Cr(!0)},Nr=function(t){return Dr[t]&&Dr[t].map(function(e){return e()})||sT},fi=[],M_=function(t){for(var e=0;e<fi.length;e+=5)(!t||fi[e+4]&&fi[e+4].query===t)&&(fi[e].style.cssText=fi[e+1],fi[e].getBBox&&fi[e].setAttribute("transform",fi[e+2]||""),fi[e+3].uncache=1)},b_=function(){Kt.cache++,Kt.forEach(function(t){return Nn(t)&&(t.rec=t())})},Nd=function(t,e){var n;for(Wn=0;Wn<te.length;Wn++)n=te[Wn],n&&(!e||n._ctx===e)&&(t?n.kill(1):n.revert(!0,!0));er=!0,e&&M_(e),e||Nr("revert")},T_=function(t,e){Kt.cache++,(e||!Xn)&&Kt.forEach(function(n){return Nn(n)&&n.cacheID++&&(n.rec=0)}),di(t)&&(Cd=t,ee.history.scrollRestoration!==t&&(ee.history.scrollRestoration=t))},Xn,Ir=0,n_,rT=function(){if(n_!==Ir){var t=n_=Ir;requestAnimationFrame(function(){return t===Ir&&Cr(!0)})}},w_=function(){xe.appendChild(Do),Rd=!Hn&&Do.offsetHeight||ee.innerHeight,xe.removeChild(Do)},i_=function(t){return ol(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(e){return e.style.display=t?"none":"block"})},Cr=function(t,e){if(pi=ve.documentElement,xe=ve.body,Ad=[ee,ve,pi,xe],Ti&&!t&&!er){pn(Zt,"scrollEnd",S_);return}w_(),Xn=Zt.isRefreshing=!0,er||b_();var n=Nr("refreshInit");h_&&Zt.sort(),e||Nd(),Kt.forEach(function(i){Nn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),te.slice(0).forEach(function(i){return i.refresh()}),er=!1,te.forEach(function(i){if(i._subPinOffset&&i.pin){var r=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[r];i.revert(!0,1),i.adjustPinSpacing(i.pin[r]-o),i.refresh()}}),bd=1,i_(!0),te.forEach(function(i){var r=ji(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>r,a=i._startClamp&&i.start>=r;(o||a)&&i.setPositions(a?r-1:i.start,o?Math.max(a?r:i.start+1,r):i.end,!0)}),i_(!1),bd=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),Kt.forEach(function(i){Nn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),T_(Cd,1),Xh.pause(),Ir++,Xn=2,Ts(2),te.forEach(function(i){return Nn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),Xn=Zt.isRefreshing=!1,Nr("refresh")},wd=0,Gh=1,rl,Ts=function(t){if(t===2||!Xn&&!er){Zt.isUpdating=!0,rl&&rl.update(0);var e=te.length,n=Dn(),i=n-gd>=50,r=e&&te[0].scroll();if(Gh=wd>r?-1:1,Xn||(wd=r),i&&(Ti&&!Zh&&n-Ti>200&&(Ti=0,Nr("scrollEnd")),Ja=gd,gd=n),Gh<0){for(Wn=e;Wn-- >0;)te[Wn]&&te[Wn].update(0,i);Gh=1}else for(Wn=0;Wn<e;Wn++)te[Wn]&&te[Wn].update(0,i);Zt.isUpdating=!1}al=0},Ed=[x_,v_,Id,Pd,Mi+sl,Mi+el,Mi+il,Mi+nl,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Hh=Ed.concat([Rr,Pr,"boxSizing","max"+Uo,"max"+Ld,"position",Mi,Qe,Qe+il,Qe+el,Qe+sl,Qe+nl]),oT=function(t,e,n){No(n);var i=t._gsap;if(i.spacerIsNative)No(i.spacerState);else if(t._gsap.swappedIn){var r=e.parentNode;r&&(r.insertBefore(t,e),r.removeChild(e))}t._gsap.swappedIn=!1},xd=function(t,e,n,i){if(!t._gsap.swappedIn){for(var r=Ed.length,o=e.style,a=t.style,l;r--;)l=Ed[r],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[Id]=a[Pd]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[Rr]=qh(t,In)+ln,o[Pr]=qh(t,Ke)+ln,o[Qe]=a[Mi]=a[v_]=a[x_]="0",No(i),a[Rr]=a["max"+Uo]=n[Rr],a[Pr]=a["max"+Ld]=n[Pr],a[Qe]=n[Qe],t.parentNode!==e&&(t.parentNode.insertBefore(e,t),e.appendChild(t)),t._gsap.swappedIn=!0}},aT=/([A-Z])/g,No=function(t){if(t){var e=t.t.style,n=t.length,i=0,r,o;for((t.t._gsap||It.core.getCache(t.t)).uncache=1;i<n;i+=2)o=t[i+1],r=t[i],o?e[r]=o:e[r]&&e.removeProperty(r.replace(aT,"-$1").toLowerCase())}},Fh=function(t){for(var e=Hh.length,n=t.style,i=[],r=0;r<e;r++)i.push(Hh[r],n[Hh[r]]);return i.t=t,i},lT=function(t,e,n){for(var i=[],r=t.length,o=n?8:0,a;o<r;o+=2)a=t[o],i.push(a,a in e?e[a]:t[o+1]);return i.t=t.t,i},Wh={left:0,top:0},s_=function(t,e,n,i,r,o,a,l,c,h,d,f,u,m){Nn(t)&&(t=t(l)),di(t)&&t.substr(0,3)==="max"&&(t=f+(t.charAt(4)==="="?kh("0"+t.substr(3),n):0));var _=u?u.time():0,p,g,v;if(u&&u.seek(0),isNaN(t)||(t=+t),Qa(t))u&&(t=It.utils.mapRange(u.scrollTrigger.start,u.scrollTrigger.end,0,f,t)),a&&Vh(a,n,i,!0);else{Nn(e)&&(e=e(l));var E=(t||"0").split(" "),y,T,w,x;v=Gn(e,l)||xe,y=bs(v)||{},(!y||!y.left&&!y.top)&&bi(v).display==="none"&&(x=v.style.display,v.style.display="block",y=bs(v),x?v.style.display=x:v.style.removeProperty("display")),T=kh(E[0],y[i.d]),w=kh(E[1]||"0",n),t=y[i.p]-c[i.p]-h+T+r-w,a&&Vh(a,w,i,n-w<20||a._isStart&&w>20),n-=n-w}if(m&&(l[m]=t||-.001,t<0&&(t=0)),o){var M=t+n,P=o._isStart;p="scroll"+i.d2,Vh(o,M,i,P&&M>20||!P&&(d?Math.max(xe[p],pi[p]):o.parentNode[p])<=M+1),d&&(c=bs(a),d&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+ln))}return u&&v&&(p=bs(v),u.seek(f),g=bs(v),u._caScrollDist=p[i.p]-g[i.p],t=t/u._caScrollDist*f),u&&u.seek(_),u?t:Math.round(t)},cT=/(webkit|moz|length|cssText|inset)/i,r_=function(t,e,n,i){if(t.parentNode!==e){var r=t.style,o,a;if(e===xe){t._stOrig=r.cssText,a=bi(t);for(o in a)!+o&&!cT.test(o)&&a[o]&&typeof r[o]=="string"&&o!=="0"&&(r[o]=a[o]);r.top=n,r.left=i}else r.cssText=t._stOrig;It.core.getCache(t).uncache=1,e.appendChild(t)}},E_=function(t,e,n){var i=e,r=i;return function(o){var a=Math.round(t());return a!==i&&a!==r&&Math.abs(a-i)>3&&Math.abs(a-r)>3&&(o=a,n&&n()),r=i,i=Math.round(o),i}},Bh=function(t,e,n){var i={};i[e.p]="+="+n,It.set(t,i)},o_=function(t,e){var n=Ss(t,e),i="_scroll"+e.p2,r=function o(a,l,c,h,d){var f=o.tween,u=l.onComplete,m={};c=c||n();var _=E_(n,c,function(){f.kill(),o.tween=0});return d=h&&d||0,h=h||a-c,f&&f.kill(),l[i]=a,l.inherit=!1,l.modifiers=m,m[i]=function(){return _(c+h*f.ratio+d*f.ratio*f.ratio)},l.onUpdate=function(){Kt.cache++,o.tween&&Ts()},l.onComplete=function(){o.tween=0,u&&u.call(f)},f=o.tween=It.to(t,l),f};return t[i]=n,n.wheelHandler=function(){return r.tween&&r.tween.kill()&&(r.tween=0)},pn(t,"wheel",n.wheelHandler),Zt.isTouch&&pn(t,"touchmove",n.wheelHandler),r},Zt=(function(){function s(e,n){Io||s.register(It)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Md(this),this.init(e,n)}var t=s.prototype;return t.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!$a){this.update=this.refresh=this.kill=Qi;return}n=jg(di(n)||Qa(n)||n.nodeType?{trigger:n}:n,Uh);var r=n,o=r.onUpdate,a=r.toggleClass,l=r.id,c=r.onToggle,h=r.onRefresh,d=r.scrub,f=r.trigger,u=r.pin,m=r.pinSpacing,_=r.invalidateOnRefresh,p=r.anticipatePin,g=r.onScrubComplete,v=r.onSnapComplete,E=r.once,y=r.snap,T=r.pinReparent,w=r.pinSpacer,x=r.containerAnimation,M=r.fastScrollEnd,P=r.preventOverlaps,C=n.horizontal||n.containerAnimation&&n.horizontal!==!1?In:Ke,N=!d&&d!==0,D=Gn(n.scroller||ee),W=It.core.getCache(D),I=Lr(D),G=("pinType"in n?n.pinType:Ms(D,"pinType")||I&&"fixed")==="fixed",X=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],F=N&&n.toggleActions.split(" "),et="markers"in n?n.markers:Uh.markers,H=I?0:parseFloat(bi(D)["border"+C.p2+Uo])||0,R=this,K=n.onRefreshInit&&function(){return n.onRefreshInit(R)},yt=jb(D,I,C),kt=tT(D,I),Y=0,ft=0,xt=0,Mt=Ss(D,C),dt,Rt,de,Ct,Gt,Lt,Ft,Qt,he,Z,jt,ze,me,ne,Ce,Me,O,ue,bt,Nt,ot,Xt,wt,Pt,A,S,B,at,nt,ut,Q,z,tt,lt,L,j,$,pt,ht;if(R._startClamp=R._endClamp=!1,R._dir=C,p*=45,R.scroller=D,R.scroll=x?x.time.bind(x):Mt,Ct=Mt(),er&&Mt.rec==null&&(Mt.rec=Ct),R.vars=n,i=i||n.animation,"refreshPriority"in n&&(h_=1,n.refreshPriority===-9999&&(rl=R)),W.tweenScroll=W.tweenScroll||{top:o_(D,Ke),left:o_(D,In)},R.tweenTo=dt=W.tweenScroll[C.p],R.scrubDuration=function(st){tt=Qa(st)&&st,tt?z?z.duration(st):z=It.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:tt,paused:!0,onComplete:function(){return g&&g(R)}}):(z&&z.progress(1).kill(),z=0)},i&&(i.vars.lazy=!1,i._initted&&!R.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),R.animation=i.pause(),i.scrollTrigger=R,R.scrubDuration(d),ut=0,l||(l=i.vars.id)),y&&((!Ar(y)||y.push)&&(y={snapTo:y}),"scrollBehavior"in xe.style&&It.set(I?[xe,pi]:D,{scrollBehavior:"auto"}),Kt.forEach(function(st){return Nn(st)&&st.target===(I?ve.scrollingElement||pi:D)&&(st.smooth=!1)}),de=Nn(y.snapTo)?y.snapTo:y.snapTo==="labels"?nT(i):y.snapTo==="labelsDirectional"?iT(i):y.directional!==!1?function(st,_t){return Dd(y.snapTo)(st,Dn()-ft<500?0:_t.direction)}:It.utils.snap(y.snapTo),lt=y.duration||{min:.1,max:2},lt=Ar(lt)?tl(lt.min,lt.max):tl(lt,lt),L=It.delayedCall(y.delay||tt/2||.1,function(){var st=Mt(),_t=Dn()-ft<500,rt=dt.tween;if((_t||Math.abs(R.getVelocity())<10)&&!rt&&!Zh&&Y!==st){var Et=(st-Lt)/ne,ie=i&&!N?i.totalProgress():Et,qt=_t?0:(ie-Q)/(Dn()-Ja)*1e3||0,Pe=It.utils.clamp(-Et,1-Et,Ro(qt/2)*qt/.185),qe=Et+(y.inertia===!1?0:Pe),Ie,be,ge=y,tn=ge.onStart,Te=ge.onInterrupt,yn=ge.onComplete;if(Ie=de(qe,R),Qa(Ie)||(Ie=qe),be=Math.max(0,Math.round(Lt+Ie*ne)),st<=Ft&&st>=Lt&&be!==st){if(rt&&!rt._initted&&rt.data<=Ro(be-st))return;y.inertia===!1&&(Pe=Ie-Et),dt(be,{duration:lt(Ro(Math.max(Ro(qe-ie),Ro(Ie-ie))*.185/qt/.05||0)),ease:y.ease||"power3",data:Ro(be-st),onInterrupt:function(){return L.restart(!0)&&Te&&Co(R,Te)},onComplete:function(){R.update(),Y=Mt(),i&&!N&&(z?z.resetTo("totalProgress",Ie,i._tTime/i._tDur):i.progress(Ie)),ut=Q=i&&!N?i.totalProgress():R.progress,v&&v(R),yn&&Co(R,yn)}},st,Pe*ne,be-st-Pe*ne),tn&&Co(R,tn,dt.tween)}}else R.isActive&&Y!==st&&L.restart(!0)}).pause()),l&&(Td[l]=R),f=R.trigger=Gn(f||u!==!0&&u),ht=f&&f._gsap&&f._gsap.stRevert,ht&&(ht=ht(R)),u=u===!0?f:Gn(u),di(a)&&(a={targets:f,className:a}),u&&(m===!1||m===Mi||(m=!m&&u.parentNode&&u.parentNode.style&&bi(u.parentNode).display==="flex"?!1:Qe),R.pin=u,Rt=It.core.getCache(u),Rt.spacer?Ce=Rt.pinState:(w&&(w=Gn(w),w&&!w.nodeType&&(w=w.current||w.nativeElement),Rt.spacerIsNative=!!w,w&&(Rt.spacerState=Fh(w))),Rt.spacer=ue=w||ve.createElement("div"),ue.classList.add("pin-spacer"),l&&ue.classList.add("pin-spacer-"+l),Rt.pinState=Ce=Fh(u)),n.force3D!==!1&&It.set(u,{force3D:!0}),R.spacer=ue=Rt.spacer,nt=bi(u),Pt=nt[m+C.os2],Nt=It.getProperty(u),ot=It.quickSetter(u,C.a,ln),xd(u,ue,nt),O=Fh(u)),et){ze=Ar(et)?jg(et,t_):t_,Z=Oh("scroller-start",l,D,C,ze,0),jt=Oh("scroller-end",l,D,C,ze,0,Z),bt=Z["offset"+C.op.d2];var mt=Gn(Ms(D,"content")||D);Qt=this.markerStart=Oh("start",l,mt,C,ze,bt,0,x),he=this.markerEnd=Oh("end",l,mt,C,ze,bt,0,x),x&&(pt=It.quickSetter([Qt,he],C.a,ln)),!G&&!(Oi.length&&Ms(D,"fixedMarkers")===!0)&&(eT(I?xe:D),It.set([Z,jt],{force3D:!0}),S=It.quickSetter(Z,C.a,ln),at=It.quickSetter(jt,C.a,ln))}if(x){var ct=x.vars.onUpdate,gt=x.vars.onUpdateParams;x.eventCallback("onUpdate",function(){R.update(0,0,1),ct&&ct.apply(x,gt||[])})}if(R.previous=function(){return te[te.indexOf(R)-1]},R.next=function(){return te[te.indexOf(R)+1]},R.revert=function(st,_t){if(!_t)return R.kill(!0);var rt=st!==!1||!R.enabled,Et=Ln;rt!==R.isReverted&&(rt&&(j=Math.max(Mt(),R.scroll.rec||0),xt=R.progress,$=i&&i.progress()),Qt&&[Qt,he,Z,jt].forEach(function(ie){return ie.style.display=rt?"none":"block"}),rt&&(Ln=R,R.update(rt)),u&&(!T||!R.isActive)&&(rt?oT(u,ue,Ce):xd(u,ue,bi(u),A)),rt||R.update(rt),Ln=Et,R.isReverted=rt)},R.refresh=function(st,_t,rt,Et){if(!((Ln||!R.enabled)&&!_t)){if(u&&st&&Ti){pn(s,"scrollEnd",S_);return}!Xn&&K&&K(R),Ln=R,dt.tween&&!rt&&(dt.tween.kill(),dt.tween=0),z&&z.pause(),_&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(k){return k.vars.immediateRender&&k.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),R.isReverted||R.revert(!0,!0),R._subPinOffset=!1;var ie=yt(),qt=kt(),Pe=x?x.duration():ji(D,C),qe=ne<=.01||!ne,Ie=0,be=Et||0,ge=Ar(rt)?rt.end:n.end,tn=n.endTrigger||f,Te=Ar(rt)?rt.start:n.start||(n.start===0||!f?0:u?"0 0":"0 100%"),yn=R.pinnedContainer=n.pinnedContainer&&Gn(n.pinnedContainer,R),ti=f&&Math.max(0,te.indexOf(R))||0,ke=ti,Ye,en,ei,Or,nn,Ve,mi,Fo,ll,As,b,U,J;for(et&&Ar(rt)&&(U=It.getProperty(Z,C.p),J=It.getProperty(jt,C.p));ke-- >0;)Ve=te[ke],Ve.end||Ve.refresh(0,1)||(Ln=R),mi=Ve.pin,mi&&(mi===f||mi===u||mi===yn)&&!Ve.isReverted&&(As||(As=[]),As.unshift(Ve),Ve.revert(!0,!0)),Ve!==te[ke]&&(ti--,ke--);for(Nn(Te)&&(Te=Te(R)),Te=Jg(Te,"start",R),Lt=s_(Te,f,ie,C,Mt(),Qt,Z,R,qt,H,G,Pe,x,R._startClamp&&"_startClamp")||(u?-.001:0),Nn(ge)&&(ge=ge(R)),di(ge)&&!ge.indexOf("+=")&&(~ge.indexOf(" ")?ge=(di(Te)?Te.split(" ")[0]:"")+ge:(Ie=kh(ge.substr(2),ie),ge=di(Te)?Te:(x?It.utils.mapRange(0,x.duration(),x.scrollTrigger.start,x.scrollTrigger.end,Lt):Lt)+Ie,tn=f)),ge=Jg(ge,"end",R),Ft=Math.max(Lt,s_(ge||(tn?"100% 0":Pe),tn,ie,C,Mt()+Ie,he,jt,R,qt,H,G,Pe,x,R._endClamp&&"_endClamp"))||-.001,Ie=0,ke=ti;ke--;)Ve=te[ke]||{},mi=Ve.pin,mi&&Ve.start-Ve._pinPush<=Lt&&!x&&Ve.end>0&&(Ye=Ve.end-(R._startClamp?Math.max(0,Ve.start):Ve.start),(mi===f&&Ve.start-Ve._pinPush<Lt||mi===yn)&&isNaN(Te)&&(Ie+=Ye*(1-Ve.progress)),mi===u&&(be+=Ye));if(Lt+=Ie,Ft+=Ie,R._startClamp&&(R._startClamp+=Ie),R._endClamp&&!Xn&&(R._endClamp=Ft||-.001,Ft=Math.min(Ft,ji(D,C))),ne=Ft-Lt||(Lt-=.01)&&.001,qe&&(xt=It.utils.clamp(0,1,It.utils.normalize(Lt,Ft,j))),R._pinPush=be,Qt&&Ie&&(Ye={},Ye[C.a]="+="+Ie,yn&&(Ye[C.p]="-="+Mt()),It.set([Qt,he],Ye)),u&&!(bd&&R.end>=ji(D,C)))Ye=bi(u),Or=C===Ke,ei=Mt(),Xt=parseFloat(Nt(C.a))+be,!Pe&&Ft>1&&(b=(I?ve.scrollingElement||pi:D).style,b={style:b,value:b["overflow"+C.a.toUpperCase()]},I&&bi(xe)["overflow"+C.a.toUpperCase()]!=="scroll"&&(b.style["overflow"+C.a.toUpperCase()]="scroll")),xd(u,ue,Ye),O=Fh(u),en=bs(u,!0),Fo=G&&Ss(D,Or?In:Ke)(),m?(A=[m+C.os2,ne+be+ln],A.t=ue,ke=m===Qe?qh(u,C)+ne+be:0,ke&&(A.push(C.d,ke+ln),ue.style.flexBasis!=="auto"&&(ue.style.flexBasis=ke+ln)),No(A),yn&&te.forEach(function(k){k.pin===yn&&k.vars.pinSpacing!==!1&&(k._subPinOffset=!0)}),G&&Mt(j)):(ke=qh(u,C),ke&&ue.style.flexBasis!=="auto"&&(ue.style.flexBasis=ke+ln)),G&&(nn={top:en.top+(Or?ei-Lt:Fo)+ln,left:en.left+(Or?Fo:ei-Lt)+ln,boxSizing:"border-box",position:"fixed"},nn[Rr]=nn["max"+Uo]=Math.ceil(en.width)+ln,nn[Pr]=nn["max"+Ld]=Math.ceil(en.height)+ln,nn[Mi]=nn[Mi+il]=nn[Mi+el]=nn[Mi+sl]=nn[Mi+nl]="0",nn[Qe]=Ye[Qe],nn[Qe+il]=Ye[Qe+il],nn[Qe+el]=Ye[Qe+el],nn[Qe+sl]=Ye[Qe+sl],nn[Qe+nl]=Ye[Qe+nl],Me=lT(Ce,nn,T),Xn&&Mt(0)),i?(ll=i._initted,pd(1),i.render(i.duration(),!0,!0),wt=Nt(C.a)-Xt+ne+be,B=Math.abs(ne-wt)>1,G&&B&&Me.splice(Me.length-2,2),i.render(0,!0,!0),ll||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),pd(0)):wt=ne,b&&(b.value?b.style["overflow"+C.a.toUpperCase()]=b.value:b.style.removeProperty("overflow-"+C.a));else if(f&&Mt()&&!x)for(en=f.parentNode;en&&en!==xe;)en._pinOffset&&(Lt-=en._pinOffset,Ft-=en._pinOffset),en=en.parentNode;As&&As.forEach(function(k){return k.revert(!1,!0)}),R.start=Lt,R.end=Ft,Ct=Gt=Xn?j:Mt(),!x&&!Xn&&!er&&(Ct<j&&Mt(j),R.scroll.rec=0),R.revert(!1,!0),ft=Dn(),L&&(Y=-1,L.restart(!0)),Ln=0,i&&N&&(i._initted||$)&&i.progress()!==$&&i.progress($||0,!0).render(i.time(),!0,!0),(qe||xt!==R.progress||x||_||i&&!i._initted)&&(i&&!N&&(i._initted||xt||i.vars.immediateRender!==!1)&&i.totalProgress(x&&Lt<-.001&&!xt?It.utils.normalize(Lt,Ft,0):xt,!0),R.progress=qe||(Ct-Lt)/ne===xt?0:xt),u&&m&&(ue._pinOffset=Math.round(R.progress*wt)),z&&z.invalidate(),isNaN(U)||(U-=It.getProperty(Z,C.p),J-=It.getProperty(jt,C.p),Bh(Z,C,U),Bh(Qt,C,U-(Et||0)),Bh(jt,C,J),Bh(he,C,J-(Et||0))),qe&&!Xn&&R.update(),h&&!Xn&&!me&&(me=!0,h(R),me=!1)}},R.getVelocity=function(){return(Mt()-Gt)/(Dn()-Ja)*1e3||0},R.endAnimation=function(){Za(R.callbackAnimation),i&&(z?z.progress(1):i.paused()?N||Za(i,R.direction<0,1):Za(i,i.reversed()))},R.labelToScroll=function(st){return i&&i.labels&&(Lt||R.refresh()||Lt)+i.labels[st]/i.duration()*ne||0},R.getTrailing=function(st){var _t=te.indexOf(R),rt=R.direction>0?te.slice(0,_t).reverse():te.slice(_t+1);return(di(st)?rt.filter(function(Et){return Et.vars.preventOverlaps===st}):rt).filter(function(Et){return R.direction>0?Et.end<=Lt:Et.start>=Ft})},R.update=function(st,_t,rt){if(!(x&&!rt&&!st)){var Et=Xn===!0?j:R.scroll(),ie=st?0:(Et-Lt)/ne,qt=ie<0?0:ie>1?1:ie||0,Pe=R.progress,qe,Ie,be,ge,tn,Te,yn,ti;if(_t&&(Gt=Ct,Ct=x?Mt():Et,y&&(Q=ut,ut=i&&!N?i.totalProgress():qt)),p&&u&&!Ln&&!Ih&&Ti&&(!qt&&Lt<Et+(Et-Gt)/(Dn()-Ja)*p?qt=1e-4:qt===1&&Ft>Et+(Et-Gt)/(Dn()-Ja)*p&&(qt=.9999)),qt!==Pe&&R.enabled){if(qe=R.isActive=!!qt&&qt<1,Ie=!!Pe&&Pe<1,Te=qe!==Ie,tn=Te||!!qt!=!!Pe,R.direction=qt>Pe?1:-1,R.progress=qt,tn&&!Ln&&(be=qt&&!Pe?0:qt===1?1:Pe===1?2:3,N&&(ge=!Te&&F[be+1]!=="none"&&F[be+1]||F[be],ti=i&&(ge==="complete"||ge==="reset"||ge in i))),P&&(Te||ti)&&(ti||d||!i)&&(Nn(P)?P(R):R.getTrailing(P).forEach(function(ei){return ei.endAnimation()})),N||(z&&!Ln&&!Ih?(z._dp._time-z._start!==z._time&&z.render(z._dp._time-z._start),z.resetTo?z.resetTo("totalProgress",qt,i._tTime/i._tDur):(z.vars.totalProgress=qt,z.invalidate().restart())):i&&i.totalProgress(qt,!!(Ln&&(ft||st)))),u){if(st&&m&&(ue.style[m+C.os2]=Pt),!G)ot(Ka(Xt+wt*qt));else if(tn){if(yn=!st&&qt>Pe&&Ft+1>Et&&Et+1>=ji(D,C),T)if(!st&&(qe||yn)){var ke=bs(u,!0),Ye=Et-Lt;r_(u,xe,ke.top+(C===Ke?Ye:0)+ln,ke.left+(C===Ke?0:Ye)+ln)}else r_(u,ue);No(qe||yn?Me:O),B&&qt<1&&qe||ot(Xt+(qt===1&&!yn?wt:0))}}y&&!dt.tween&&!Ln&&!Ih&&L.restart(!0),a&&(Te||E&&qt&&(qt<1||!md))&&ol(a.targets).forEach(function(ei){return ei.classList[qe||E?"add":"remove"](a.className)}),o&&!N&&!st&&o(R),tn&&!Ln?(N&&(ti&&(ge==="complete"?i.pause().totalProgress(1):ge==="reset"?i.restart(!0).pause():ge==="restart"?i.restart(!0):i[ge]()),o&&o(R)),(Te||!md)&&(c&&Te&&Co(R,c),X[be]&&Co(R,X[be]),E&&(qt===1?R.kill(!1,1):X[be]=0),Te||(be=qt===1?1:3,X[be]&&Co(R,X[be]))),M&&!qe&&Math.abs(R.getVelocity())>(Qa(M)?M:2500)&&(Za(R.callbackAnimation),z?z.progress(1):Za(i,ge==="reverse"?1:!qt,1))):N&&o&&!Ln&&o(R)}if(at){var en=x?Et/x.duration()*(x._caScrollDist||0):Et;S(en+(Z._isFlipped?1:0)),at(en)}pt&&pt(-Et/x.duration()*(x._caScrollDist||0))}},R.enable=function(st,_t){R.enabled||(R.enabled=!0,pn(D,"resize",ja),I||pn(D,"scroll",Po),K&&pn(s,"refreshInit",K),st!==!1&&(R.progress=xt=0,Ct=Gt=Y=Mt()),_t!==!1&&R.refresh())},R.getTween=function(st){return st&&dt?dt.tween:z},R.setPositions=function(st,_t,rt,Et){if(x){var ie=x.scrollTrigger,qt=x.duration(),Pe=ie.end-ie.start;st=ie.start+Pe*st/qt,_t=ie.start+Pe*_t/qt}R.refresh(!1,!1,{start:$g(st,rt&&!!R._startClamp),end:$g(_t,rt&&!!R._endClamp)},Et),R.update()},R.adjustPinSpacing=function(st){if(A&&st){var _t=A.indexOf(C.d)+1;A[_t]=parseFloat(A[_t])+st+ln,A[1]=parseFloat(A[1])+st+ln,No(A)}},R.disable=function(st,_t){if(st!==!1&&R.revert(!0,!0),R.enabled&&(R.enabled=R.isActive=!1,_t||z&&z.pause(),j=0,Rt&&(Rt.uncache=1),K&&dn(s,"refreshInit",K),L&&(L.pause(),dt.tween&&dt.tween.kill()&&(dt.tween=0)),!I)){for(var rt=te.length;rt--;)if(te[rt].scroller===D&&te[rt]!==R)return;dn(D,"resize",ja),I||dn(D,"scroll",Po)}},R.kill=function(st,_t){R.disable(st,_t),z&&!_t&&z.kill(),l&&delete Td[l];var rt=te.indexOf(R);rt>=0&&te.splice(rt,1),rt===Wn&&Gh>0&&Wn--,rt=0,te.forEach(function(Et){return Et.scroller===R.scroller&&(rt=1)}),rt||Xn||er||(R.scroll.rec=0),i&&(i.scrollTrigger=null,st&&i.revert({kill:!1}),_t||i.kill()),Qt&&[Qt,he,Z,jt].forEach(function(Et){return Et.parentNode&&Et.parentNode.removeChild(Et)}),rl===R&&(rl=0),u&&(Rt&&(Rt.uncache=1),rt=0,te.forEach(function(Et){return Et.pin===u&&rt++}),rt||(Rt.spacer=0)),n.onKill&&n.onKill(R)},te.push(R),R.enable(!1,!1),ht&&ht(R),i&&i.add&&!ne){var it=R.update;R.update=function(){R.update=it,Kt.cache++,Lt||Ft||R.refresh()},It.delayedCall(.01,R.update),ne=.01,Lt=Ft=0}else R.refresh();u&&rT()},s.register=function(n){return Io||(It=n||m_(),p_()&&window.document&&s.enable(),Io=$a),Io},s.defaults=function(n){if(n)for(var i in n)Uh[i]=n[i];return Uh},s.disable=function(n,i){$a=0,te.forEach(function(o){return o[i?"kill":"disable"](n)}),dn(ee,"wheel",Po),dn(ve,"scroll",Po),clearInterval(Ph),dn(ve,"touchcancel",Qi),dn(xe,"touchstart",Qi),Dh(dn,ve,"pointerdown,touchstart,mousedown",Kg),Dh(dn,ve,"pointerup,touchend,mouseup",Qg),Xh.kill(),Lh(dn);for(var r=0;r<Kt.length;r+=3)Nh(dn,Kt[r],Kt[r+1]),Nh(dn,Kt[r],Kt[r+2])},s.enable=function(){if(ee=window,ve=document,pi=ve.documentElement,xe=ve.body,It){if(ol=It.utils.toArray,tl=It.utils.clamp,Md=It.core.context||Qi,pd=It.core.suppressOverwrites||Qi,Cd=ee.history.scrollRestoration||"auto",wd=ee.pageYOffset||0,It.core.globals("ScrollTrigger",s),xe){$a=1,Do=document.createElement("div"),Do.style.height="100vh",Do.style.position="absolute",w_(),Qb(),We.register(It),s.isTouch=We.isTouch,tr=We.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Sd=We.isTouch===1,pn(ee,"wheel",Po),Ad=[ee,ve,pi,xe],It.matchMedia?(s.matchMedia=function(h){var d=It.matchMedia(),f;for(f in h)d.add(f,h[f]);return d},It.addEventListener("matchMediaInit",function(){b_(),Nd()}),It.addEventListener("matchMediaRevert",function(){return M_()}),It.addEventListener("matchMedia",function(){Cr(0,1),Nr("matchMedia")}),It.matchMedia().add("(orientation: portrait)",function(){return _d(),_d})):console.warn("Requires GSAP 3.11.0 or later"),_d(),pn(ve,"scroll",Po);var n=xe.hasAttribute("style"),i=xe.style,r=i.borderTopStyle,o=It.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",a=bs(xe),Ke.m=Math.round(a.top+Ke.sc())||0,In.m=Math.round(a.left+In.sc())||0,r?i.borderTopStyle=r:i.removeProperty("border-top-style"),n||(xe.setAttribute("style",""),xe.removeAttribute("style")),Ph=setInterval(e_,250),It.delayedCall(.5,function(){return Ih=0}),pn(ve,"touchcancel",Qi),pn(xe,"touchstart",Qi),Dh(pn,ve,"pointerdown,touchstart,mousedown",Kg),Dh(pn,ve,"pointerup,touchend,mouseup",Qg),yd=It.utils.checkPrefix("transform"),Hh.push(yd),Io=Dn(),Xh=It.delayedCall(.2,Cr).pause(),Lo=[ve,"visibilitychange",function(){var h=ee.innerWidth,d=ee.innerHeight;ve.hidden?(Yg=h,Zg=d):(Yg!==h||Zg!==d)&&ja()},ve,"DOMContentLoaded",Cr,ee,"load",Cr,ee,"resize",ja],Lh(pn),te.forEach(function(h){return h.enable(0,1)}),l=0;l<Kt.length;l+=3)Nh(dn,Kt[l],Kt[l+1]),Nh(dn,Kt[l],Kt[l+2])}else if(ve){var c=function h(){s.enable(),ve.removeEventListener("DOMContentLoaded",h)};ve.addEventListener("DOMContentLoaded",c)}}},s.config=function(n){"limitCallbacks"in n&&(md=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(Ph)||(Ph=i)&&setInterval(e_,i),"ignoreMobileResize"in n&&(Sd=s.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(Lh(dn)||Lh(pn,n.autoRefreshEvents||"none"),u_=(n.autoRefreshEvents+"").indexOf("resize")===-1)},s.scrollerProxy=function(n,i){var r=Gn(n),o=Kt.indexOf(r),a=Lr(r);~o&&Kt.splice(o,a?6:2),i&&(a?Oi.unshift(ee,i,xe,i,pi,i):Oi.unshift(r,i))},s.clearMatchMedia=function(n){te.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},s.isInViewport=function(n,i,r){var o=(di(n)?Gn(n):n).getBoundingClientRect(),a=o[r?Rr:Pr]*i||0;return r?o.right-a>0&&o.left+a<ee.innerWidth:o.bottom-a>0&&o.top+a<ee.innerHeight},s.positionInViewport=function(n,i,r){di(n)&&(n=Gn(n));var o=n.getBoundingClientRect(),a=o[r?Rr:Pr],l=i==null?a/2:i in Yh?Yh[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return r?(o.left+l)/ee.innerWidth:(o.top+l)/ee.innerHeight},s.killAll=function(n){if(te.slice(0).forEach(function(r){return r.vars.id!=="ScrollSmoother"&&r.kill()}),n!==!0){var i=Dr.killAll||[];Dr={},i.forEach(function(r){return r()})}},s})();Zt.version="3.15.1";Zt.saveStyles=function(s){return s?ol(s).forEach(function(t){if(t&&t.style){var e=fi.indexOf(t);e>=0&&fi.splice(e,5),fi.push(t,t.style.cssText,t.getBBox&&t.getAttribute("transform"),It.core.getCache(t),Md())}}):fi};Zt.revert=function(s,t){return Nd(!s,t)};Zt.create=function(s,t){return new Zt(s,t)};Zt.refresh=function(s){return s?ja(!0):(Io||Zt.register())&&Cr(!0)};Zt.update=function(s){return++Kt.cache&&Ts(s===!0?2:0)};Zt.clearScrollMemory=T_;Zt.maxScroll=function(s,t){return ji(s,t?In:Ke)};Zt.getScrollFunc=function(s,t){return Ss(Gn(s),t?In:Ke)};Zt.getById=function(s){return Td[s]};Zt.getAll=function(){return te.filter(function(s){return s.vars.id!=="ScrollSmoother"})};Zt.isScrolling=function(){return!!Ti};Zt.snapDirectional=Dd;Zt.addEventListener=function(s,t){var e=Dr[s]||(Dr[s]=[]);~e.indexOf(t)||e.push(t)};Zt.removeEventListener=function(s,t){var e=Dr[s],n=e&&e.indexOf(t);n>=0&&e.splice(n,1)};Zt.batch=function(s,t){var e=[],n={},i=t.interval||.016,r=t.batchMax||1e9,o=function(c,h){var d=[],f=[],u=It.delayedCall(i,function(){h(d,f),d=[],f=[]}).pause();return function(m){d.length||u.restart(!0),d.push(m.trigger),f.push(m),r<=d.length&&u.progress(1)}},a;for(a in t)n[a]=a.substr(0,2)==="on"&&Nn(t[a])&&a!=="onRefreshInit"?o(a,t[a]):t[a];return Nn(r)&&(r=r(),pn(Zt,"refresh",function(){return r=t.batchMax()})),ol(s).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,e.push(Zt.create(c))}),e};var a_=function(t,e,n,i){return e>i?t(i):e<0&&t(0),n>i?(i-e)/(n-e):n<0?e/(e-n):1},vd=function s(t,e){e===!0?t.style.removeProperty("touch-action"):t.style.touchAction=e===!0?"auto":e?"pan-"+e+(We.isTouch?" pinch-zoom":""):"none",t===pi&&s(xe,e)},zh={auto:1,scroll:1},hT=function(t){var e=t.event,n=t.target,i=t.axis,r=(e.changedTouches?e.changedTouches[0]:e).target,o=r._gsap||It.core.getCache(r),a=Dn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;r&&r!==xe&&(r.scrollHeight<=r.clientHeight&&r.scrollWidth<=r.clientWidth||!(zh[(l=bi(r)).overflowY]||zh[l.overflowX]));)r=r.parentNode;o._isScroll=r&&r!==n&&!Lr(r)&&(zh[(l=bi(r)).overflowY]||zh[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(e.stopPropagation(),e._gsapAllow=!0)},A_=function(t,e,n,i){return We.create({target:t,capture:!0,debounce:!1,lockAxis:!0,type:e,onWheel:i=i&&hT,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&pn(ve,We.eventTypes[0],c_,!1,!0)},onDisable:function(){return dn(ve,We.eventTypes[0],c_,!0)}})},uT=/(input|label|select|textarea)/i,l_,c_=function(t){var e=uT.test(t.target.tagName);(e||l_)&&(t._gsapAllow=!0,l_=e)},fT=function(t){Ar(t)||(t={}),t.preventDefault=t.isNormalizer=t.allowClicks=!0,t.type||(t.type="wheel,touch"),t.debounce=!!t.debounce,t.id=t.id||"normalizer";var e=t,n=e.normalizeScrollX,i=e.momentum,r=e.allowNestedScroll,o=e.onRelease,a,l,c=Gn(t.target)||pi,h=It.core.globals().ScrollSmoother,d=h&&h.get(),f=tr&&(t.content&&Gn(t.content)||d&&t.content!==!1&&!d.smooth()&&d.content()),u=Ss(c,Ke),m=Ss(c,In),_=1,p=(We.isTouch&&ee.visualViewport?ee.visualViewport.scale*ee.visualViewport.width:ee.outerWidth)/ee.innerWidth,g=0,v=Nn(i)?function(){return i(a)}:function(){return i||2.8},E,y,T=A_(c,t.type,!0,r),w=function(){return y=!1},x=Qi,M=Qi,P=function(){l=ji(c,Ke),M=tl(tr?1:0,l),n&&(x=tl(0,ji(c,In))),E=Ir},C=function(){f._gsap.y=Ka(parseFloat(f._gsap.y)+u.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",u.offset=u.cacheID=0},N=function(){if(y){requestAnimationFrame(w);var et=Ka(a.deltaY/2),H=M(u.v-et);if(f&&H!==u.v+u.offset){u.offset=H-u.v;var R=Ka((parseFloat(f&&f._gsap.y)||0)-u.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+R+", 0, 1)",f._gsap.y=R+"px",u.cacheID=Kt.cache,Ts()}return!0}u.offset&&C(),y=!0},D,W,I,G,X=function(){P(),D.isActive()&&D.vars.scrollY>l&&(u()>l?D.progress(1)&&u(l):D.resetTo("scrollY",l))};return f&&It.set(f,{y:"+=0"}),t.ignoreCheck=function(F){return tr&&F.type==="touchmove"&&N(F)||_>1.05&&F.type!=="touchstart"||a.isGesturing||F.touches&&F.touches.length>1},t.onPress=function(){y=!1;var F=_;_=Ka((ee.visualViewport&&ee.visualViewport.scale||1)/p),D.pause(),F!==_&&vd(c,_>1.01?!0:n?!1:"x"),W=m(),I=u(),P(),E=Ir},t.onRelease=t.onGestureStart=function(F,et){if(u.offset&&C(),!et)G.restart(!0);else{Kt.cache++;var H=v(),R,K;n&&(R=m(),K=R+H*.05*-F.velocityX/.227,H*=a_(m,R,K,ji(c,In)),D.vars.scrollX=x(K)),R=u(),K=R+H*.05*-F.velocityY/.227,H*=a_(u,R,K,ji(c,Ke)),D.vars.scrollY=M(K),D.invalidate().duration(H).play(.01),(tr&&D.vars.scrollY>=l||R>=l-1)&&It.to({},{onUpdate:X,duration:H})}o&&o(F)},t.onWheel=function(){D._ts&&D.pause(),Dn()-g>1e3&&(E=0,g=Dn())},t.onChange=function(F,et,H,R,K){if(Ir!==E&&P(),et&&n&&m(x(R[2]===et?W+(F.startX-F.x):m()+et-R[1])),H){u.offset&&C();var yt=K[2]===H,kt=yt?I+F.startY-F.y:u()+H-K[1],Y=M(kt);yt&&kt!==Y&&(I+=Y-kt),u(Y)}(H||et)&&Ts()},t.onEnable=function(){vd(c,n?!1:"x"),Zt.addEventListener("refresh",X),pn(ee,"resize",X),u.smooth&&(u.target.style.scrollBehavior="auto",u.smooth=m.smooth=!1),T.enable()},t.onDisable=function(){vd(c,!0),dn(ee,"resize",X),Zt.removeEventListener("refresh",X),T.kill()},t.lockAxis=t.lockAxis!==!1,a=new We(t),a.iOS=tr,tr&&!u()&&u(1),tr&&It.ticker.add(Qi),G=a._dc,D=It.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:E_(u,u(),function(){return D.pause()})},onUpdate:Ts,onComplete:G.vars.onComplete}),a};Zt.sort=function(s){if(Nn(s))return te.sort(s);var t=ee.pageYOffset||0;return Zt.getAll().forEach(function(e){return e._sortY=e.trigger?t+e.trigger.getBoundingClientRect().top:e.start+ee.innerHeight}),te.sort(s||function(e,n){return(e.vars.refreshPriority||0)*-1e6+(e.vars.containerAnimation?1e6:e._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};Zt.observe=function(s){return new We(s)};Zt.normalizeScroll=function(s){if(typeof s=="undefined")return Hn;if(s===!0&&Hn)return Hn.enable();if(s===!1){Hn&&Hn.kill(),Hn=s;return}var t=s instanceof We?s:fT(s);return Hn&&Hn.target===t.target&&Hn.kill(),Lr(t.target)&&(Hn=t),t};Zt.core={_getVelocityProp:Rh,_inputObserver:A_,_scrollers:Kt,_proxies:Oi,bridge:{ss:function(){Ti||Nr("scrollStart"),Ti=Dn()},ref:function(){return Ln}}};m_()&&It.registerPlugin(Zt);var C_="1.3.27";function I_(s,t,e){return Math.max(s,Math.min(t,e))}function dT(s,t,e){return(1-e)*s+e*t}function pT(s,t,e,n){return dT(s,t,1-Math.exp(-e*n))}function mT(s,t){return(s%t+t)%t}var gT=class{constructor(){zt(this,"isRunning",!1);zt(this,"value",0);zt(this,"from",0);zt(this,"to",0);zt(this,"currentTime",0);zt(this,"lerp");zt(this,"duration");zt(this,"easing");zt(this,"onUpdate")}advance(s){var e;if(!this.isRunning)return;let t=!1;if(this.duration&&this.easing){this.currentTime+=s;let n=I_(0,this.currentTime/this.duration,1);t=n>=1;let i=t?1:this.easing(n);this.value=this.from+(this.to-this.from)*i}else this.lerp?(this.value=pT(this.value,this.to,this.lerp*60,s),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,t=!0)):(this.value=this.to,t=!0);t&&this.stop(),(e=this.onUpdate)==null||e.call(this,this.value,t)}stop(){this.isRunning=!1}fromTo(s,t,{lerp:e,duration:n,easing:i,onStart:r,onUpdate:o}){this.from=this.value=s,this.to=t,this.lerp=e,this.duration=n,this.easing=i,this.currentTime=0,this.isRunning=!0,r==null||r(),this.onUpdate=o}};function _T(s,t){let e;return function(...n){clearTimeout(e),e=setTimeout(()=>{e=void 0,s.apply(this,n)},t)}}var xT=class{constructor(s,t,{autoResize:e=!0,debounce:n=250}={}){zt(this,"width",0);zt(this,"height",0);zt(this,"scrollHeight",0);zt(this,"scrollWidth",0);zt(this,"debouncedResize");zt(this,"wrapperResizeObserver");zt(this,"contentResizeObserver");zt(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});zt(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});zt(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=s,this.content=t,e&&(this.debouncedResize=_T(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var s,t;(s=this.wrapperResizeObserver)==null||s.disconnect(),(t=this.contentResizeObserver)==null||t.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},L_=class{constructor(){zt(this,"events",{})}emit(s,...t){var n;let e=this.events[s]||[];for(let i=0,r=e.length;i<r;i++)(n=e[i])==null||n.call(e,...t)}on(s,t){return this.events[s]?this.events[s].push(t):this.events[s]=[t],()=>{var e;this.events[s]=(e=this.events[s])==null?void 0:e.filter(n=>t!==n)}}off(s,t){var e;this.events[s]=(e=this.events[s])==null?void 0:e.filter(n=>t!==n)}destroy(){this.events={}}},vT=100/6,nr={passive:!1};function R_(s,t){return s===1?vT:s===2?t:1}var yT=class{constructor(s,t={wheelMultiplier:1,touchMultiplier:1}){zt(this,"touchStart",{x:0,y:0});zt(this,"lastDelta",{x:0,y:0});zt(this,"window",{width:0,height:0});zt(this,"emitter",new L_);zt(this,"onTouchStart",s=>{let{clientX:t,clientY:e}=s.targetTouches?s.targetTouches[0]:s;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:s})});zt(this,"onTouchMove",s=>{let{clientX:t,clientY:e}=s.targetTouches?s.targetTouches[0]:s,n=-(t-this.touchStart.x)*this.options.touchMultiplier,i=-(e-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:n,y:i},this.emitter.emit("scroll",{deltaX:n,deltaY:i,event:s})});zt(this,"onTouchEnd",s=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:s})});zt(this,"onWheel",s=>{let{deltaX:t,deltaY:e,deltaMode:n}=s,i=R_(n,this.window.width),r=R_(n,this.window.height);t*=i,e*=r,t*=this.options.wheelMultiplier,e*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:t,deltaY:e,event:s})});zt(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=s,this.options=t,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,nr),this.element.addEventListener("touchstart",this.onTouchStart,nr),this.element.addEventListener("touchmove",this.onTouchMove,nr),this.element.addEventListener("touchend",this.onTouchEnd,nr)}on(s,t){return this.emitter.on(s,t)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,nr),this.element.removeEventListener("touchstart",this.onTouchStart,nr),this.element.removeEventListener("touchmove",this.onTouchMove,nr),this.element.removeEventListener("touchend",this.onTouchEnd,nr)}},P_=s=>Math.min(1,1.001-2**(-10*s)),D_=class{constructor({wrapper:s=window,content:t=document.documentElement,eventsTarget:e=s,smoothWheel:n=!0,syncTouch:i=!1,syncTouchLerp:r=.075,touchInertiaExponent:o=1.7,duration:a,easing:l,lerp:c=.1,infinite:h=!1,orientation:d="vertical",gestureOrientation:f=d==="horizontal"?"both":"vertical",touchMultiplier:u=1,wheelMultiplier:m=1,autoResize:_=!0,prevent:p,virtualScroll:g,overscroll:v=!0,autoRaf:E=!1,anchors:y=!1,autoToggle:T=!1,allowNestedScroll:w=!1,__experimental__naiveDimensions:x=!1,naiveDimensions:M=x,stopInertiaOnNavigate:P=!1,respectReducedMotion:C=!0}={}){zt(this,"_isScrolling",!1);zt(this,"_isStopped",!1);zt(this,"_isLocked",!1);zt(this,"_preventNextNativeScrollEvent",!1);zt(this,"_resetVelocityTimeout",null);zt(this,"_rafId",null);zt(this,"_isDraggingSelection",!1);zt(this,"reducedMotionMediaQuery",window.matchMedia("(prefers-reduced-motion: reduce)"));zt(this,"isTouching");zt(this,"isIos");zt(this,"time",0);zt(this,"userData",{});zt(this,"lastVelocity",0);zt(this,"velocity",0);zt(this,"direction",0);zt(this,"options");zt(this,"targetScroll");zt(this,"animatedScroll");zt(this,"animate",new gT);zt(this,"emitter",new L_);zt(this,"dimensions");zt(this,"virtualScroll");zt(this,"onScrollEnd",s=>{s instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&s.stopPropagation()});zt(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});zt(this,"onTransitionEnd",s=>{var t;(t=s.propertyName)!=null&&t.includes("overflow")&&s.target===this.rootElement&&this.checkOverflow()});zt(this,"onClick",s=>{let t=s.composedPath().filter(n=>n instanceof HTMLAnchorElement&&n.href).map(n=>new URL(n.href)),e=new URL(window.location.href);if(this.options.anchors){let n=t.find(i=>e.host===i.host&&e.pathname===i.pathname&&i.hash);if(n){let i=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,r=decodeURIComponent(n.hash);this.scrollTo(r,i);return}}if(this.options.stopInertiaOnNavigate&&t.some(n=>e.host===n.host&&e.pathname!==n.pathname)){this.reset();return}});zt(this,"onPointerDown",s=>{s.button===1&&this.reset()});zt(this,"onVirtualScroll",s=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(s)===!1)return;let{deltaX:t,deltaY:e,event:n}=s;if(this.emitter.emit("virtual-scroll",{deltaX:t,deltaY:e,event:n}),n.ctrlKey||n.lenisStopPropagation)return;let i=n.type.includes("touch"),r=n.type.includes("wheel");if(i&&this.isIos&&(n.type==="touchstart"&&(this._isDraggingSelection=this.isTouchOnSelectionHandle(n)),this._isDraggingSelection)){n.type==="touchend"&&(this._isDraggingSelection=!1);return}this.isTouching=n.type==="touchstart"||n.type==="touchmove";let o=t===0&&e===0;if(this.options.syncTouch&&i&&n.type==="touchstart"&&o&&!this.isStopped&&!this.isLocked){this.reset();return}let a=this.options.gestureOrientation==="vertical"&&e===0||this.options.gestureOrientation==="horizontal"&&t===0;if(o||a)return;let l=n.composedPath();l=l.slice(0,l.indexOf(this.rootElement));let c=this.options.prevent,h=Math.abs(t)>=Math.abs(e)?"horizontal":"vertical";if(l.find(m=>{var _,p,g,v,E;return m instanceof HTMLElement&&(typeof c=="function"&&(c==null?void 0:c(m))||((_=m.hasAttribute)==null?void 0:_.call(m,"data-lenis-prevent"))||h==="vertical"&&((p=m.hasAttribute)==null?void 0:p.call(m,"data-lenis-prevent-vertical"))||h==="horizontal"&&((g=m.hasAttribute)==null?void 0:g.call(m,"data-lenis-prevent-horizontal"))||i&&((v=m.hasAttribute)==null?void 0:v.call(m,"data-lenis-prevent-touch"))||r&&((E=m.hasAttribute)==null?void 0:E.call(m,"data-lenis-prevent-wheel"))||this.options.allowNestedScroll&&this.hasNestedScroll(m,{deltaX:t,deltaY:e}))}))return;if(this.isStopped||this.isLocked){n.cancelable&&n.preventDefault();return}if(!(this.options.syncTouch&&i||this.options.smoothWheel&&r)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let d=e;this.options.gestureOrientation==="both"?d=Math.abs(e)>Math.abs(t)?e:t:this.options.gestureOrientation==="horizontal"&&(d=t),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&e>0||this.animatedScroll===this.limit&&e<0))&&(n.lenisStopPropagation=!0),n.cancelable&&n.preventDefault();let f=i&&this.options.syncTouch,u=i&&n.type==="touchend";u&&(d=Math.sign(d)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+d,{programmatic:!1,...f?{lerp:u?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});zt(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){let s=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-s,this.direction=Math.sign(this.animatedScroll-s),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});zt(this,"raf",s=>{let t=s-(this.time||s);this.time=s,this.animate.advance(t*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))});window.lenisVersion=C_,window.lenis||(window.lenis={}),window.lenis.version=C_,d==="horizontal"&&(window.lenis.horizontal=!0),i===!0&&(window.lenis.touch=!0),this.isIos=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),(!s||s===document.documentElement)&&(s=window),typeof a=="number"&&typeof l!="function"?l=P_:typeof l=="function"&&typeof a!="number"&&(a=1),this.options={wrapper:s,content:t,eventsTarget:e,smoothWheel:n,syncTouch:i,syncTouchLerp:r,touchInertiaExponent:o,duration:a,easing:l,lerp:c,infinite:h,gestureOrientation:f,orientation:d,touchMultiplier:u,wheelMultiplier:m,autoResize:_,prevent:p,virtualScroll:g,overscroll:v,autoRaf:E,anchors:y,autoToggle:T,allowNestedScroll:w,naiveDimensions:M,stopInertiaOnNavigate:P,respectReducedMotion:C},this.dimensions=new xT(s,t,{autoResize:_}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new yT(e,{touchMultiplier:u,wheelMultiplier:m}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(s,t){return this.emitter.on(s,t)}off(s,t){return this.emitter.off(s,t)}get overflow(){let s=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[s]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}setScroll(s){this.isHorizontal?this.options.wrapper.scrollTo({left:s,behavior:"instant"}):this.options.wrapper.scrollTo({top:s,behavior:"instant"})}isTouchOnSelectionHandle(s){var c;let t=window.getSelection();if(!t||t.isCollapsed||t.rangeCount===0)return!1;let e=(c=s.targetTouches[0])!=null?c:s.changedTouches[0];if(!e)return!1;let n=t.getRangeAt(0).getClientRects();if(n.length===0)return!1;let i=n[0],r=n[n.length-1],o=40,a=Math.hypot(e.clientX-i.left,e.clientY-i.top)<=o,l=Math.hypot(e.clientX-r.right,e.clientY-r.bottom)<=o;return a||l}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(s,{offset:t=0,immediate:e=!1,lock:n=!1,programmatic:i=!0,lerp:r=i?this.options.lerp:void 0,duration:o=i?this.options.duration:void 0,easing:a=i?this.options.easing:void 0,onStart:l,onComplete:c,force:h=!1,userData:d}={}){if(this.prefersReducedMotion&&(i?e=!0:(r=1,o=void 0,a=void 0)),(this.isStopped||this.isLocked)&&!h)return;let f=s,u=t;if(typeof f=="string"&&["top","left","start","#"].includes(f))f=0;else if(typeof f=="string"&&["bottom","right","end"].includes(f))f=this.limit;else{let m=null;if(typeof f=="string"?(m=f.startsWith("#")?document.getElementById(f.slice(1)):document.querySelector(f),m||(f==="#top"?f=0:console.warn("Lenis: Target not found",f))):f instanceof Element&&(m=f),m){if(this.options.wrapper!==window){let y=this.rootElement.getBoundingClientRect();u-=this.isHorizontal?y.left:y.top}let _=m.getBoundingClientRect(),p=getComputedStyle(m),g=this.isHorizontal?Number.parseFloat(p.scrollMarginLeft):Number.parseFloat(p.scrollMarginTop),v=getComputedStyle(this.rootElement),E=this.isHorizontal?Number.parseFloat(v.scrollPaddingLeft):Number.parseFloat(v.scrollPaddingTop);f=(this.isHorizontal?_.left:_.top)+this.animatedScroll-(Number.isNaN(g)?0:g)-(Number.isNaN(E)?0:E)}}if(typeof f=="number"){if(f+=u,this.options.infinite){if(i){this.targetScroll=this.animatedScroll=this.scroll;let m=f-this.animatedScroll;m>this.limit/2?f-=this.limit:m<-this.limit/2&&(f+=this.limit)}}else f=I_(0,f,this.limit);if(f===this.targetScroll){l==null||l(this),c==null||c(this);return}if(this.userData=d!=null?d:{},e){this.animatedScroll=this.targetScroll=f,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c==null||c(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}i||(this.targetScroll=f),typeof o=="number"&&typeof a!="function"?a=P_:typeof a=="function"&&typeof o!="number"&&(o=1),this.animate.fromTo(this.animatedScroll,f,{duration:o,easing:a,lerp:r,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",l==null||l(this)},onUpdate:(m,_)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=m-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=m,this.setScroll(this.scroll),i&&(this.targetScroll=m),_||this.emit(),_&&(this.reset(),this.emit(),c==null||c(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(s,{deltaX:t,deltaY:e}){var w;let n=Date.now();s._lenis||(s._lenis={});let i=s._lenis,r,o,a,l,c,h,d,f,u,m;if(n-((w=i.time)!=null?w:0)>2e3){i.time=Date.now();let x=window.getComputedStyle(s);if(i.computedStyle=x,r=["auto","overlay","scroll"].includes(x.overflowX),o=["auto","overlay","scroll"].includes(x.overflowY),c=["auto"].includes(x.overscrollBehaviorX),h=["auto"].includes(x.overscrollBehaviorY),i.hasOverflowX=r,i.hasOverflowY=o,!(r||o))return!1;d=s.scrollWidth,f=s.scrollHeight,u=s.clientWidth,m=s.clientHeight,a=d>u,l=f>m,i.isScrollableX=a,i.isScrollableY=l,i.scrollWidth=d,i.scrollHeight=f,i.clientWidth=u,i.clientHeight=m,i.hasOverscrollBehaviorX=c,i.hasOverscrollBehaviorY=h}else a=i.isScrollableX,l=i.isScrollableY,r=i.hasOverflowX,o=i.hasOverflowY,d=i.scrollWidth,f=i.scrollHeight,u=i.clientWidth,m=i.clientHeight,c=i.hasOverscrollBehaviorX,h=i.hasOverscrollBehaviorY;if(!(r&&a||o&&l))return!1;let _=Math.abs(t)>=Math.abs(e)?"horizontal":"vertical",p,g,v,E,y,T;if(_==="horizontal")p=Math.round(s.scrollLeft),g=d-u,v=t,E=r,y=a,T=c;else if(_==="vertical")p=Math.round(s.scrollTop),g=f-m,v=e,E=o,y=l,T=h;else return!1;return!T&&(p>=g||p<=0)?!0:(v>0?p<g:p>0)&&E&&y}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){var t,e;let s=this.options.wrapper;return this.isHorizontal?(t=s.scrollX)!=null?t:s.scrollLeft:(e=s.scrollY)!=null?e:s.scrollTop}get scroll(){return this.options.infinite?mT(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(s){this._isScrolling!==s&&(this._isScrolling=s,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(s){this._isStopped!==s&&(this._isStopped=s,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(s){this._isLocked!==s&&(this._isLocked=s,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get prefersReducedMotion(){return this.options.respectReducedMotion&&this.reducedMotionMediaQuery.matches}get className(){let s="lenis";return this.options.autoToggle&&(s+=" lenis-autoToggle"),this.isStopped&&(s+=" lenis-stopped"),this.isLocked&&(s+=" lenis-locked"),this.isScrolling&&(s+=" lenis-scrolling"),this.isScrolling==="smooth"&&(s+=" lenis-smooth"),s}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(s=>{this.rootElement.classList.add(s)})}cleanUpClassName(){for(let s of Array.from(this.rootElement.classList))(s==="lenis"||s.startsWith("lenis-"))&&this.rootElement.classList.remove(s)}};Be.registerPlugin(Zt);var ST="nolan@nestlewoodrealty.com",MT="https://formsubmit.co/ajax/"+ST,cn=(s,t=document)=>t.querySelector(s),Es=(s,t=document)=>[...t.querySelectorAll(s)],Ur=matchMedia("(prefers-reduced-motion: reduce)").matches,Fi=document.documentElement,bT=84,je=null;Ur||(je=new D_({lerp:.1,smoothWheel:!0}),je.on("scroll",Zt.update),Be.ticker.add(s=>je.raf(s*1e3)),Be.ticker.lagSmoothing(0));var Jh=!1,TT=s=>{Jh=!0,setTimeout(()=>{Jh=!1},2200),je?je.scrollTo(s,{offset:s===0?0:-bT+1,duration:1.4,onComplete:()=>{Jh=!1}}):s===0?scrollTo({top:0}):s.scrollIntoView({behavior:"auto"})},ws=null;try{ws=Dm(cn("#bg"),{reduced:Ur})}catch{ws=null}ws||Fi.classList.add("no-webgl");function Ud(){Fi.classList.contains("opened")||(Fi.classList.add("opened"),ws&&ws.assemble(),setTimeout(()=>{Fi.classList.add("intro-done"),je&&je.start()},1400))}var wT=sessionStorage.getItem("hts-intro");Ur||wT?(Fi.classList.add("skip-intro"),Ud()):(sessionStorage.setItem("hts-intro","1"),Fi.classList.add("intro-run"),je&&je.stop(),setTimeout(Ud,2500),cn("#intro").addEventListener("click",Ud,{once:!0}));var ET=cn("#top"),U_=()=>ET.classList.toggle("scrolled",scrollY>40);addEventListener("scroll",U_,{passive:!0});U_();Es('a[href^="#"]').forEach(s=>s.addEventListener("click",t=>{let e=s.getAttribute("href"),n=e==="#"||e==="#top"?0:cn(e);n!==null&&(t.preventDefault(),O_(),TT(n),n!==0&&history.replaceState(null,"",e))}));var Od=cn("#menuBtn"),$h=cn("#mobileMenu");function O_(){$h.classList.contains("open")&&($h.classList.remove("open"),Od.setAttribute("aria-expanded","false"),Fi.classList.remove("menu-open"),je&&je.start())}Od.addEventListener("click",()=>{let s=$h.classList.toggle("open");Od.setAttribute("aria-expanded",String(s)),Fi.classList.toggle("menu-open",s),s?(je&&je.stop(),cn("a",$h).focus()):je&&je.start()});addEventListener("keydown",s=>{s.key==="Escape"&&O_()});var AT=0;function F_(s){[...s.childNodes].forEach(t=>{if(t.nodeType===3){let e=document.createDocumentFragment();t.textContent.split(/(\s+)/).forEach(n=>{if(!n)return;if(!n.trim()){e.appendChild(document.createTextNode(n));return}let i=document.createElement("span");i.className="w";let r=document.createElement("span");r.style.setProperty("--i",AT++),r.textContent=n,i.appendChild(r),e.appendChild(i)}),t.replaceWith(e)}else t.nodeType===1&&F_(t)})}Es("[data-split]").forEach(F_);if(Ur)Es(".reveal").forEach(s=>s.classList.add("in"));else{Zt.batch(".reveal",{start:"top 88%",once:!0,onEnter:o=>{o.forEach(a=>a.classList.add("in")),Be.to(o,{opacity:1,y:0,duration:1,ease:"power3.out",stagger:.1,overwrite:!0})}}),Be.to(".hero-inner",{yPercent:-18,opacity:0,ease:"none",scrollTrigger:{trigger:".hero",start:"top top",end:"bottom top",scrub:!0}}),Be.to(".giant span",{yPercent:-25,ease:"none",scrollTrigger:{trigger:".hero",start:"top top",end:"bottom top",scrub:!0}}),N_=!1;let s=[.3,.62],t=o=>o<.26?o/.26*.31:o<.4?.31:o<.58?.31+(o-.4)/.18*.25:o<.72?.56:.56+(o-.72)/.28*.44,e=0,n=!1,i=s.map(()=>!1);Be.timeline({defaults:{ease:"none"},scrollTrigger:{trigger:"#warp",pin:".warp-pin",start:"top top",end:()=>"+="+innerHeight*3.6,scrub:.5,invalidateOnRefresh:!0,onUpdate:o=>{let a=o.progress;ws&&ws.setGrid(t(a)),s.forEach((l,c)=>{if(a<l-.06&&(i[c]=!1),Jh){a>=l&&(i[c]=!0);return}if(!n&&!i[c]&&e<l&&a>=l){i[c]=!0,n=!0;let h=o.start+(o.end-o.start)*(l+.02);je?(je.scrollTo(h,{immediate:!0,force:!0}),je.stop()):scrollTo(0,h),setTimeout(()=>{n=!1,je&&!N_&&!Fi.classList.contains("menu-open")&&je.start()},750)}}),e=a},onLeaveBack:()=>ws&&ws.setGrid(0)}}).to(".warp-line.l1",{opacity:1,filter:"blur(0px)",duration:.12},.12).to(".warp-hint.h1",{opacity:1,duration:.04},.3).to(".warp-hint.h1",{opacity:0,duration:.03},.39).to(".warp-line.l1",{opacity:0,filter:"blur(14px)",y:-30,duration:.05},.4).fromTo(".warp-line.l2",{opacity:0,scale:.18,filter:"blur(10px)"},{opacity:.55,scale:.42,filter:"blur(4px)",duration:.07},.41).to(".warp-line.l2",{opacity:1,scale:1,filter:"blur(0px)",ease:"power3.in",duration:.05},.48).fromTo(".warp-pin",{x:0},{x:10,duration:.006,yoyo:!0,repeat:5,ease:"none"},.525).to(".warp-rays",{opacity:1,rotate:25,duration:.05},.515).to(".warp-rays",{opacity:0,rotate:45,duration:.12},.56).to(".warp-hint.h2",{opacity:1,duration:.04},.62).to(".warp-hint.h2",{opacity:0,duration:.03},.71).to(".warp-line.l2",{opacity:0,scale:1.25,filter:"blur(10px)",duration:.06},.72).set({},{},1),Zt.matchMedia({"(min-width: 900px)":()=>{Fi.classList.add("zoomfx");let o=cn("#track"),a=cn(".work-pin"),l=cn(".zoom"),c=Es(".shot",o).pop(),h=cn(".frame img",c),d=()=>Math.max(0,o.scrollWidth-innerWidth+80),f=()=>{let C=Be.getProperty(o,"x");Be.set(o,{x:-d()});let N=h.getBoundingClientRect(),D=a.getBoundingClientRect();return Be.set(o,{x:C}),{left:N.left-D.left,top:N.top-D.top,width:N.width,height:N.height}},u=null,m=C=>()=>(u||(u=f()))[C];Zt.addEventListener("refreshInit",()=>{u=null});let _=cn(".zhead");_.dataset.done||(_.dataset.done=1,_.innerHTML=_.innerHTML.split(/(<em>.*?<\/em>|\s+)/).filter(C=>C&&C.trim()).map(C=>C.startsWith("<em>")?`<em>${C.slice(4,-5).split(" ").map(N=>`<span class="zw">${N}</span>`).join(" ")}</em>`:`<span class="zw">${C}</span>`).join(" "));let p=1,g=innerHeight/Math.max(1,d()),v=1*g,E=.35*g,y=.6*g,T=.7*g,w=.6*g,x=p+v+E+y+T+w,M=Be.timeline({defaults:{ease:"none"},scrollTrigger:{trigger:"#work",pin:".work-pin",start:"top top",end:()=>"+="+(d()+innerHeight*(1+.35+.6+.7+.6)),scrub:.6,invalidateOnRefresh:!0,onUpdate:C=>Be.set("#workBar",{scaleX:Math.min(1,C.progress*x/p)})}}),P=0;return M.to(o,{x:()=>-d(),duration:p},P),P+=p,M.set(l,{visibility:"visible"},P).fromTo(l,{left:m("left"),top:m("top"),width:m("width"),height:m("height"),borderRadius:6},{left:0,top:0,width:()=>a.offsetWidth,height:()=>a.offsetHeight,borderRadius:0,ease:"power2.inOut",duration:v,immediateRender:!1},P).to([".work-head",".work-bar"],{autoAlpha:0,duration:v*.4},P),P+=v,M.fromTo(".zoom img",{scale:1},{scale:1.18,ease:"power1.in",duration:E+y*.6,immediateRender:!1},P),P+=E,M.to(".zgrid i",{opacity:1,duration:y*.5,stagger:{grid:[7,12],from:"center",amount:y*.5}},P),P+=y,M.set(".zpanel",{visibility:"visible"},P).fromTo(".zpanel",{yPercent:100},{yPercent:0,ease:"power2.out",duration:T*.55,immediateRender:!1},P).to(".zhead .zw",{opacity:1,filter:"blur(0px)",duration:T*.25,stagger:T*.03},P+T*.35),P+=T,M.set({},{},P+w),()=>{Fi.classList.remove("zoomfx"),M.kill()}}}),Es(".parallax").forEach(o=>Be.fromTo(o,{yPercent:6},{yPercent:-6,ease:"none",scrollTrigger:{trigger:o,start:"top bottom",end:"bottom top",scrub:!0}}))}var N_;addEventListener("load",()=>Zt.refresh());Es("[data-count]").forEach(s=>{let t=+s.dataset.count,e=s.dataset.pre||"",n=s.dataset.suf||"";if(Ur){s.textContent=e+t+n;return}let i={v:0};Zt.create({trigger:s,start:"top 85%",once:!0,onEnter:()=>Be.to(i,{v:t,duration:1.4,ease:"power3.out",onUpdate:()=>{s.textContent=e+Math.round(i.v)+n}})})});if(matchMedia("(hover: hover) and (pointer: fine)").matches&&!Ur){Es(".tilt").forEach(n=>{n.addEventListener("pointermove",i=>{let r=n.getBoundingClientRect(),o=(i.clientX-r.left)/r.width-.5,a=(i.clientY-r.top)/r.height-.5;Be.to(n,{rotateY:o*7,rotateX:-a*7,y:-4,transformPerspective:900,duration:.4,ease:"power2.out"}),n.style.setProperty("--mx",(o+.5)*100+"%"),n.style.setProperty("--my",(a+.5)*100+"%")}),n.addEventListener("pointerleave",()=>Be.to(n,{rotateY:0,rotateX:0,y:0,duration:.6,ease:"power3.out"}))}),Es(".btn.gold").forEach(n=>{n.addEventListener("pointermove",i=>{let r=n.getBoundingClientRect();Be.to(n,{x:(i.clientX-r.left-r.width/2)*.18,y:(i.clientY-r.top-r.height/2)*.25,duration:.4,ease:"power2.out"})}),n.addEventListener("pointerleave",()=>Be.to(n,{x:0,y:0,duration:.6,ease:"elastic.out(1, 0.4)"}))});let s=cn("#cursor"),t=Be.quickTo(s,"x",{duration:.25,ease:"power3"}),e=Be.quickTo(s,"y",{duration:.25,ease:"power3"});addEventListener("pointermove",n=>{n.pointerType!=="mouse"||!n.clientX&&!n.clientY||(t(n.clientX),e(n.clientY),s.classList.add("on"))},{passive:!0}),Es("a, button, .tilt, input, select, textarea").forEach(n=>{n.addEventListener("pointerenter",()=>s.classList.add("big")),n.addEventListener("pointerleave",()=>s.classList.remove("big"))})}var ir=cn("#leadForm"),Oo=cn("#formNote"),Bd={name:s=>s.trim().length>=2||"Please add your name.",phone:s=>s.replace(/\D/g,"").length>=10||"Please add a 10-digit phone number.",email:s=>!s.trim()||/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s.trim())||"That email doesn\u2019t look right."};function Fd(s){let t=Bd[s.name];if(!t)return!0;let e=t(s.value),n=cn(`#err-${s.name}`),i=e===!0;return s.setAttribute("aria-invalid",String(!i)),n.textContent=i?"":e,i}Object.keys(Bd).forEach(s=>{let t=ir.elements[s];t.addEventListener("blur",()=>{t.value&&Fd(t)}),t.addEventListener("input",()=>{t.getAttribute("aria-invalid")==="true"&&Fd(t)})});ir.addEventListener("submit",async s=>{if(s.preventDefault(),ir._honey.value)return;let t=Object.keys(Bd).map(r=>ir.elements[r]).filter(r=>!Fd(r));if(t.length){t[0].focus(),Ur||Be.fromTo(t[0],{x:-8},{x:0,duration:.5,ease:"elastic.out(1, 0.3)"}),Oo.textContent="Please fix the highlighted field.",Oo.className="fine err";return}let e=ir.querySelector("button[type=submit]"),n=e.innerHTML;e.disabled=!0,e.classList.add("loading"),e.innerHTML='<span class="spin" aria-hidden="true"></span>Sending\u2026',Oo.textContent="",Oo.className="fine";let i=Object.fromEntries(new FormData(ir));delete i._honey;try{let r=await fetch(MT,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({...i,_subject:"HTS website lead: "+i.name,_template:"table",_captcha:"false"})}),o=await r.json().catch(()=>({}));if(!r.ok||String(o.success)!=="true")throw new Error(o.message||"not delivered");ir.reset(),ir.classList.add("sent"),cn("#formDone").hidden=!1,cn("#formDone").focus()}catch{e.innerHTML=n,e.disabled=!1,e.classList.remove("loading"),Oo.className="fine err",Oo.innerHTML='Couldn\u2019t send just now. Call or text <a href="tel:+18284045335">828-404-5335</a>.'}});cn("#yr").textContent=new Date().getFullYear();})();
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
