(()=>{var O_=Object.defineProperty;var F_=(s,t,e)=>t in s?O_(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var Bt=(s,t,e)=>F_(s,typeof t!="symbol"?t+"":t,e);var fp=0,Ru=1,dp=2;var pa=1,pp=2,ro=3,Bs=0,pn=1,Hi=2,hr=0,oo=1,Pu=2,Iu=3,Lu=4,mp=5;var ur=100,gp=101,_p=102,xp=103,vp=104,yp=200,Sp=201,Mp=202,bp=203,Du=204,Nu=205,Tp=206,wp=207,Ep=208,Ap=209,Cp=210,Rp=211,Pp=212,Ip=213,Lp=214,Dl=0,Nl=1,Ul=2,Kr=3,Ol=4,Fl=5,Bl=6,zl=7,fc=0,Dp=1,Np=2,Wi=0,Uu=1,Ou=2,Fu=3,ma=4,Bu=5,zu=6,ku=7;var Vu=300,fr=301,ao=302,dc=303,pc=304,kl=1e3,Bi=1001,Vl=1002,hn=1003,Up=1004;var ga=1005;var Nn=1006,mc=1007;var us=1008;var Yn=1009,Gu=1010,Hu=1011,lo=1012,gc=1013,Li=1014,xi=1015,Di=1016,_c=1017,xc=1018,dr=1020,Wu=35902,Xu=35899,qu=1021,Yu=1022,Ni=1023,as=1026,fs=1027,vc=1028,yc=1029,zs=1030,Sc=1031;var Mc=1033,_a=33776,xa=33777,va=33778,ya=33779,bc=35840,Tc=35841,wc=35842,Ec=35843,Ac=36196,Cc=37492,Rc=37496,Pc=37488,Ic=37489,Sa=37490,Lc=37491,Dc=37808,Nc=37809,Uc=37810,Oc=37811,Fc=37812,Bc=37813,zc=37814,kc=37815,Vc=37816,Gc=37817,Hc=37818,Wc=37819,Xc=37820,qc=37821,Yc=36492,Zc=36494,Jc=36495,$c=36283,Kc=36284,Ma=36285,Qc=36286;var Wo=2300,Gl=2301,Il=2302,Su=2303,Mu=2400,bu=2401,Tu=2402;var Op=3200;var ba=0,Fp=1,ds="",si="srgb",Xo="srgb-linear",qo="linear",_e="srgb";var Ll=7680;var Bp=519,zp=512,kp=513,Vp=514,Zu=515,Gp=516,Hp=517,Ju=518,$u=519,Wp=35044,jc=35048;var Ku="300 es",_i=2e3,Qr=2001;function B_(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function z_(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Yo(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Xp(){let s=Yo("canvas");return s.style.display="block",s}var zd={},jr=null;function Qu(...s){let t="THREE."+s.shift();jr?jr("log",t,...s):console.log(t,...s)}function qp(s){let t=s[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=s[1];e&&e.isStackTrace?s[0]+=" "+e.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Vt(...s){s=qp(s);let t="THREE."+s.shift();if(jr)jr("warn",t,...s);else{let e=s[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...s)}}function Gt(...s){s=qp(s);let t="THREE."+s.shift();if(jr)jr("error",t,...s);else{let e=s[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...s)}}function Ho(...s){let t=s.join(" ");t in zd||(zd[t]=!0,Vt(...s))}function Yp(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Zp={[Dl]:Dl,[Ul]:Bl,[Ol]:Ol,[Kr]:Fl,[Nl]:Nl,[Bl]:Ul,[zl]:zl,[Fl]:Kr},zi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let i=n[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}},Sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var $h=Math.PI/180,Hl=180/Math.PI;function Ta(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Sn[s&255]+Sn[s>>8&255]+Sn[s>>16&255]+Sn[s>>24&255]+"-"+Sn[t&255]+Sn[t>>8&255]+"-"+Sn[t>>16&15|64]+Sn[t>>24&255]+"-"+Sn[e&63|128]+Sn[e>>8&255]+"-"+Sn[e>>16&255]+Sn[e>>24&255]+Sn[n&255]+Sn[n>>8&255]+Sn[n>>16&255]+Sn[n>>24&255]).toLowerCase()}function se(s,t,e){return Math.max(t,Math.min(e,s))}function k_(s,t){return(s%t+t)%t}function Kh(s,t,e){return(1-e)*s+e*t}function Jp(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function ju(s){switch(s.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function V_(s,t){if(t.constructor===Float32Array)return s;let e=ju(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(s/e,-1)}function G_(s,t){if(t.constructor===Float32Array)return s;let e=ju(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(s*e)}var of=class of{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=se(this.x,t.x,e.x),this.y=se(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=se(this.x,t,e),this.y=se(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(se(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(se(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};of.prototype.isVector2=!0;var re=of,Xn=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3],f=r[o+0],u=r[o+1],m=r[o+2],_=r[o+3];if(d!==_||l!==f||c!==u||h!==m){let p=l*f+c*u+h*m+d*_;p<0&&(f=-f,u=-u,m=-m,_=-_,p=-p);let g=1-a;if(p<.9995){let v=Math.acos(p),w=Math.sin(v);g=Math.sin(g*v)/w,a=Math.sin(a*v)/w,l=l*g+f*a,c=c*g+u*a,h=h*g+m*a,d=d*g+_*a}else{l=l*g+f*a,c=c*g+u*a,h=h*g+m*a,d=d*g+_*a;let v=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=v,c*=v,h*=v,d*=v}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,r,o){let a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=r[o],f=r[o+1],u=r[o+2],m=r[o+3];return t[e]=a*m+h*d+l*u-c*f,t[e+1]=l*m+h*f+c*d-a*u,t[e+2]=c*m+h*u+a*f-l*d,t[e+3]=h*m-a*d-l*f-c*u,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),d=a(r/2),f=l(n/2),u=l(i/2),m=l(r/2);switch(o){case"XYZ":this._x=f*h*d+c*u*m,this._y=c*u*d-f*h*m,this._z=c*h*m+f*u*d,this._w=c*h*d-f*u*m;break;case"YXZ":this._x=f*h*d+c*u*m,this._y=c*u*d-f*h*m,this._z=c*h*m-f*u*d,this._w=c*h*d+f*u*m;break;case"ZXY":this._x=f*h*d-c*u*m,this._y=c*u*d+f*h*m,this._z=c*h*m+f*u*d,this._w=c*h*d-f*u*m;break;case"ZYX":this._x=f*h*d-c*u*m,this._y=c*u*d+f*h*m,this._z=c*h*m-f*u*d,this._w=c*h*d+f*u*m;break;case"YZX":this._x=f*h*d+c*u*m,this._y=c*u*d+f*h*m,this._z=c*h*m-f*u*d,this._w=c*h*d-f*u*m;break;case"XZY":this._x=f*h*d-c*u*m,this._y=c*u*d-f*h*m,this._z=c*h*m+f*u*d,this._w=c*h*d+f*u*m;break;default:Vt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],f=n+a+d;if(f>0){let u=.5/Math.sqrt(f+1);this._w=.25/u,this._x=(h-l)*u,this._y=(r-c)*u,this._z=(o-i)*u}else if(n>a&&n>d){let u=2*Math.sqrt(1+n-a-d);this._w=(h-l)/u,this._x=.25*u,this._y=(i+o)/u,this._z=(r+c)/u}else if(a>d){let u=2*Math.sqrt(1+a-n-d);this._w=(r-c)/u,this._x=(i+o)/u,this._y=.25*u,this._z=(l+h)/u}else{let u=2*Math.sqrt(1+d-n-a);this._w=(o-i)/u,this._x=(r+c)/u,this._y=(l+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(se(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,i=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,i=-i,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},af=class af{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(kd.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(kd.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-r*i),d=2*(r*n-o*e);return this.x=e+l*c+o*d-a*h,this.y=n+l*h+a*c-r*d,this.z=i+l*d+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=se(this.x,t.x,e.x),this.y=se(this.y,t.y,e.y),this.z=se(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=se(this.x,t,e),this.y=se(this.y,t,e),this.z=se(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(se(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Qh.copy(this).projectOnVector(t),this.sub(Qh)}reflect(t){return this.sub(Qh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(se(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};af.prototype.isVector3=!0;var V=af,Qh=new V,kd=new Xn,lf=class lf{constructor(t,e,n,i,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c)}set(t,e,n,i,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],f=n[2],u=n[5],m=n[8],_=i[0],p=i[3],g=i[6],v=i[1],w=i[4],y=i[7],T=i[2],E=i[5],x=i[8];return r[0]=o*_+a*v+l*T,r[3]=o*p+a*w+l*E,r[6]=o*g+a*y+l*x,r[1]=c*_+h*v+d*T,r[4]=c*p+h*w+d*E,r[7]=c*g+h*y+d*x,r[2]=f*_+u*v+m*T,r[5]=f*p+u*w+m*E,r[8]=f*g+u*y+m*x,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*o-a*c,f=a*l-h*r,u=c*r-o*l,m=e*d+n*f+i*u;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/m;return t[0]=d*_,t[1]=(i*c-h*n)*_,t[2]=(a*n-i*o)*_,t[3]=f*_,t[4]=(h*e-i*l)*_,t[5]=(i*r-a*e)*_,t[6]=u*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return Ho("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(jh.makeScale(t,e)),this}rotate(t){return Ho("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(jh.makeRotation(-t)),this}translate(t,e){return Ho("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(jh.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};lf.prototype.isMatrix3=!0;var Wt=lf,jh=new Wt,Vd=new Wt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Gd=new Wt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function H_(){let s={enabled:!0,workingColorSpace:Xo,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===_e&&(i.r=os(i.r),i.g=os(i.g),i.b=os(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===_e&&(i.r=$r(i.r),i.g=$r(i.g),i.b=$r(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ds?qo:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Xo]:{primaries:t,whitePoint:n,transfer:qo,toXYZ:Vd,fromXYZ:Gd,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:si},outputColorSpaceConfig:{drawingBufferColorSpace:si}},[si]:{primaries:t,whitePoint:n,transfer:_e,toXYZ:Vd,fromXYZ:Gd,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:si}}}),s}var le=H_();function os(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function $r(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Or,Wl=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Or===void 0&&(Or=Yo("canvas")),Or.width=t.width,Or.height=t.height;let i=Or.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=Or}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=Yo("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=os(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(os(e[n]/255)*255):e[n]=os(e[n]);return{data:e,width:t.width,height:t.height}}else return Vt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},W_=0,to=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:W_++}),this.uuid=Ta(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement!="undefined"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame!="undefined"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(tu(i[o].image)):r.push(tu(i[o]))}else r=tu(i);n.url=r}return e||(t.images[this.uuid]=n),n}};function tu(s){return typeof HTMLImageElement!="undefined"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&s instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&s instanceof ImageBitmap?Wl.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Vt("Texture: Unable to serialize Texture."),{})}var X_=0,eu=new V,qn=class s extends zi{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,n=Bi,i=Bi,r=Nn,o=us,a=Ni,l=Yn,c=s.DEFAULT_ANISOTROPY,h=ds){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:X_++}),this.uuid=Ta(),this.name="",this.source=new to(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new re(0,0),this.repeat=new re(1,1),this.center=new re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Wt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(eu).x}get height(){return this.source.getSize(eu).y}get depth(){return this.source.getSize(eu).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Vt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Vt(`Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Vu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case kl:t.x=t.x-Math.floor(t.x);break;case Bi:t.x=t.x<0?0:1;break;case Vl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case kl:t.y=t.y-Math.floor(t.y);break;case Bi:t.y=t.y<0?0:1;break;case Vl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};qn.DEFAULT_IMAGE=null;qn.DEFAULT_MAPPING=Vu;qn.DEFAULT_ANISOTROPY=1;var cf=class cf{constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r,l=t.elements,c=l[0],h=l[4],d=l[8],f=l[1],u=l[5],m=l[9],_=l[2],p=l[6],g=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-_)<.01&&Math.abs(m-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+_)<.1&&Math.abs(m+p)<.1&&Math.abs(c+u+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let w=(c+1)/2,y=(u+1)/2,T=(g+1)/2,E=(h+f)/4,x=(d+_)/4,b=(m+p)/4;return w>y&&w>T?w<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(w),i=E/n,r=x/n):y>T?y<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(y),n=E/i,r=b/i):T<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(T),n=x/r,i=b/r),this.set(n,i,r,e),this}let v=Math.sqrt((p-m)*(p-m)+(d-_)*(d-_)+(f-h)*(f-h));return Math.abs(v)<.001&&(v=1),this.x=(p-m)/v,this.y=(d-_)/v,this.z=(f-h)/v,this.w=Math.acos((c+u+g-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=se(this.x,t.x,e.x),this.y=se(this.y,t.y,e.y),this.z=se(this.z,t.z,e.z),this.w=se(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=se(this.x,t,e),this.y=se(this.y,t,e),this.z=se(this.z,t,e),this.w=se(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(se(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};cf.prototype.isVector4=!0;var Le=cf,Xl=class extends zi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Nn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Le(0,0,t,e),this.scissorTest=!1,this.viewport=new Le(0,0,t,e),this.textures=[];let i=n.count;for(let r=0;r<i;r++)this.textures[r]=new qn({width:t,height:e,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Nn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let i=Object.assign({},t.textures[e].image);this.textures[e].source=new to(i)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},ri=class extends Xl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Zo=class extends qn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=hn,this.minFilter=hn,this.wrapR=Bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var ql=class extends qn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=hn,this.minFilter=hn,this.wrapR=Bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var uc=class uc{constructor(t,e,n,i,r,o,a,l,c,h,d,f,u,m,_,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c,h,d,f,u,m,_,p)}set(t,e,n,i,r,o,a,l,c,h,d,f,u,m,_,p){let g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=i,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=h,g[10]=d,g[14]=f,g[3]=u,g[7]=m,g[11]=_,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new uc().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,i=1/Fr.setFromMatrixColumn(t,0).length(),r=1/Fr.setFromMatrixColumn(t,1).length(),o=1/Fr.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let f=o*h,u=o*d,m=a*h,_=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=u+m*c,e[5]=f-_*c,e[9]=-a*l,e[2]=_-f*c,e[6]=m+u*c,e[10]=o*l}else if(t.order==="YXZ"){let f=l*h,u=l*d,m=c*h,_=c*d;e[0]=f+_*a,e[4]=m*a-u,e[8]=o*c,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=u*a-m,e[6]=_+f*a,e[10]=o*l}else if(t.order==="ZXY"){let f=l*h,u=l*d,m=c*h,_=c*d;e[0]=f-_*a,e[4]=-o*d,e[8]=m+u*a,e[1]=u+m*a,e[5]=o*h,e[9]=_-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let f=o*h,u=o*d,m=a*h,_=a*d;e[0]=l*h,e[4]=m*c-u,e[8]=f*c+_,e[1]=l*d,e[5]=_*c+f,e[9]=u*c-m,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let f=o*l,u=o*c,m=a*l,_=a*c;e[0]=l*h,e[4]=_-f*d,e[8]=m*d+u,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=u*d+m,e[10]=f-_*d}else if(t.order==="XZY"){let f=o*l,u=o*c,m=a*l,_=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=f*d+_,e[5]=o*h,e[9]=u*d-m,e[2]=m*d-u,e[6]=a*h,e[10]=_*d+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(q_,t,Y_)}lookAt(t,e,n){let i=this.elements;return ni.subVectors(t,e),ni.lengthSq()===0&&(ni.z=1),ni.normalize(),Es.crossVectors(n,ni),Es.lengthSq()===0&&(Math.abs(n.z)===1?ni.x+=1e-4:ni.z+=1e-4,ni.normalize(),Es.crossVectors(n,ni)),Es.normalize(),hl.crossVectors(ni,Es),i[0]=Es.x,i[4]=hl.x,i[8]=ni.x,i[1]=Es.y,i[5]=hl.y,i[9]=ni.y,i[2]=Es.z,i[6]=hl.z,i[10]=ni.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],f=n[9],u=n[13],m=n[2],_=n[6],p=n[10],g=n[14],v=n[3],w=n[7],y=n[11],T=n[15],E=i[0],x=i[4],b=i[8],P=i[12],C=i[1],N=i[5],D=i[9],H=i[13],I=i[2],B=i[6],X=i[10],F=i[14],Q=i[3],W=i[7],R=i[11],tt=i[15];return r[0]=o*E+a*C+l*I+c*Q,r[4]=o*x+a*N+l*B+c*W,r[8]=o*b+a*D+l*X+c*R,r[12]=o*P+a*H+l*F+c*tt,r[1]=h*E+d*C+f*I+u*Q,r[5]=h*x+d*N+f*B+u*W,r[9]=h*b+d*D+f*X+u*R,r[13]=h*P+d*H+f*F+u*tt,r[2]=m*E+_*C+p*I+g*Q,r[6]=m*x+_*N+p*B+g*W,r[10]=m*b+_*D+p*X+g*R,r[14]=m*P+_*H+p*F+g*tt,r[3]=v*E+w*C+y*I+T*Q,r[7]=v*x+w*N+y*B+T*W,r[11]=v*b+w*D+y*X+T*R,r[15]=v*P+w*H+y*F+T*tt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],f=t[10],u=t[14],m=t[3],_=t[7],p=t[11],g=t[15],v=l*u-c*f,w=a*u-c*d,y=a*f-l*d,T=o*u-c*h,E=o*f-l*h,x=o*d-a*h;return e*(_*v-p*w+g*y)-n*(m*v-p*T+g*E)+i*(m*w-_*T+g*x)-r*(m*y-_*E+p*x)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-n*(r*h-a*l)+i*(r*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],f=t[10],u=t[11],m=t[12],_=t[13],p=t[14],g=t[15],v=e*a-n*o,w=e*l-i*o,y=e*c-r*o,T=n*l-i*a,E=n*c-r*a,x=i*c-r*l,b=h*_-d*m,P=h*p-f*m,C=h*g-u*m,N=d*p-f*_,D=d*g-u*_,H=f*g-u*p,I=v*H-w*D+y*N+T*C-E*P+x*b;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let B=1/I;return t[0]=(a*H-l*D+c*N)*B,t[1]=(i*D-n*H-r*N)*B,t[2]=(_*x-p*E+g*T)*B,t[3]=(f*E-d*x-u*T)*B,t[4]=(l*C-o*H-c*P)*B,t[5]=(e*H-i*C+r*P)*B,t[6]=(p*y-m*x-g*w)*B,t[7]=(h*x-f*y+u*w)*B,t[8]=(o*D-a*C+c*b)*B,t[9]=(n*C-e*D-r*b)*B,t[10]=(m*E-_*y+g*v)*B,t[11]=(d*y-h*E-u*v)*B,t[12]=(a*P-o*N-l*b)*B,t[13]=(e*N-n*P+i*b)*B,t[14]=(_*w-m*T-p*v)*B,t[15]=(h*T-d*w+f*v)*B,this}scale(t){let e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,d=a+a,f=r*c,u=r*h,m=r*d,_=o*h,p=o*d,g=a*d,v=l*c,w=l*h,y=l*d,T=n.x,E=n.y,x=n.z;return i[0]=(1-(_+g))*T,i[1]=(u+y)*T,i[2]=(m-w)*T,i[3]=0,i[4]=(u-y)*E,i[5]=(1-(f+g))*E,i[6]=(p+v)*E,i[7]=0,i[8]=(m+w)*x,i[9]=(p-v)*x,i[10]=(1-(f+_))*x,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=Fr.set(i[0],i[1],i[2]).length(),a=Fr.set(i[4],i[5],i[6]).length(),l=Fr.set(i[8],i[9],i[10]).length();r<0&&(o=-o),Ei.copy(this);let c=1/o,h=1/a,d=1/l;return Ei.elements[0]*=c,Ei.elements[1]*=c,Ei.elements[2]*=c,Ei.elements[4]*=h,Ei.elements[5]*=h,Ei.elements[6]*=h,Ei.elements[8]*=d,Ei.elements[9]*=d,Ei.elements[10]*=d,e.setFromRotationMatrix(Ei),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,i,r,o,a=_i,l=!1){let c=this.elements,h=2*r/(e-t),d=2*r/(n-i),f=(e+t)/(e-t),u=(n+i)/(n-i),m,_;if(l)m=r/(o-r),_=o*r/(o-r);else if(a===_i)m=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Qr)m=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=_i,l=!1){let c=this.elements,h=2/(e-t),d=2/(n-i),f=-(e+t)/(e-t),u=-(n+i)/(n-i),m,_;if(l)m=1/(o-r),_=o/(o-r);else if(a===_i)m=-2/(o-r),_=-(o+r)/(o-r);else if(a===Qr)m=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=d,c[9]=0,c[13]=u,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};uc.prototype.isMatrix4=!0;var Se=uc,Fr=new V,Ei=new Se,q_=new V(0,0,0),Y_=new V(1,1,1),Es=new V,hl=new V,ni=new V,Hd=new Se,Wd=new Xn,oi=class s{constructor(t=0,e=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],d=i[2],f=i[6],u=i[10];switch(e){case"XYZ":this._y=Math.asin(se(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-se(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,u),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(se(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,u),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-se(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,u),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(se(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,u));break;case"XZY":this._z=Math.asin(-se(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,u),this._y=0);break;default:Vt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Hd.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Hd,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Wd.setFromEuler(this),this.setFromQuaternion(Wd,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};oi.DEFAULT_ORDER="XYZ";var Jo=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Z_=0,Xd=new V,Br=new Xn,ts=new Se,ul=new V,Fo=new V,J_=new V,$_=new Xn,qd=new V(1,0,0),Yd=new V(0,1,0),Zd=new V(0,0,1),Jd={type:"added"},K_={type:"removed"},zr={type:"childadded",child:null},nu={type:"childremoved",child:null},en=class s extends zi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Z_++}),this.uuid=Ta(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new V,e=new oi,n=new Xn,i=new V(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Se},normalMatrix:{value:new Wt}}),this.matrix=new Se,this.matrixWorld=new Se,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Jo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Br.setFromAxisAngle(t,e),this.quaternion.multiply(Br),this}rotateOnWorldAxis(t,e){return Br.setFromAxisAngle(t,e),this.quaternion.premultiply(Br),this}rotateX(t){return this.rotateOnAxis(qd,t)}rotateY(t){return this.rotateOnAxis(Yd,t)}rotateZ(t){return this.rotateOnAxis(Zd,t)}translateOnAxis(t,e){return Xd.copy(t).applyQuaternion(this.quaternion),this.position.add(Xd.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(qd,t)}translateY(t){return this.translateOnAxis(Yd,t)}translateZ(t){return this.translateOnAxis(Zd,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ts.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ul.copy(t):ul.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Fo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ts.lookAt(Fo,ul,this.up):ts.lookAt(ul,Fo,this.up),this.quaternion.setFromRotationMatrix(ts),i&&(ts.extractRotation(i.matrixWorld),Br.setFromRotationMatrix(ts),this.quaternion.premultiply(Br.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Gt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Jd),zr.child=t,this.dispatchEvent(zr),zr.child=null):Gt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(K_),nu.child=t,this.dispatchEvent(nu),nu.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ts.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ts.multiply(t.parent.matrixWorld)),t.applyMatrix4(ts),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Jd),zr.child=t,this.dispatchEvent(zr),zr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fo,t,J_),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fo,$_,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,i=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*i,r[13]+=n-r[1]*e-r[5]*n-r[9]*i,r[14]+=i-r[2]*e-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),f=o(t.skeletons),u=o(t.animations),m=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),u.length>0&&(n.animations=u),m.length>0&&(n.nodes=m)}return n.object=i,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};en.DEFAULT_UP=new V(0,1,0);en.DEFAULT_MATRIX_AUTO_UPDATE=!0;en.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var rs=class extends en{constructor(){super(),this.isGroup=!0,this.type="Group"}},Q_={type:"move"},eo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new rs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new rs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new rs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let _ of t.hand.values()){let p=e.getJointPose(_,n),g=this._getHandJoint(c,_);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=p.radius),g.visible=p!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),u=.02,m=.005;c.inputState.pinching&&f>u+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=u-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Q_)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new rs;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},$p={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},As={h:0,s:0,l:0},fl={h:0,s:0,l:0};function iu(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var ee=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=si){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,le.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=le.workingColorSpace){return this.r=t,this.g=e,this.b=n,le.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=le.workingColorSpace){if(t=k_(t,1),e=se(e,0,1),n=se(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=iu(o,r,t+1/3),this.g=iu(o,r,t),this.b=iu(o,r,t-1/3)}return le.colorSpaceToWorking(this,i),this}setStyle(t,e=si){function n(r){r!==void 0&&parseFloat(r)<1&&Vt("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Vt("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);Vt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=si){let n=$p[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Vt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=os(t.r),this.g=os(t.g),this.b=os(t.b),this}copyLinearToSRGB(t){return this.r=$r(t.r),this.g=$r(t.g),this.b=$r(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=si){return le.workingToColorSpace(Mn.copy(this),t),Math.round(se(Mn.r*255,0,255))*65536+Math.round(se(Mn.g*255,0,255))*256+Math.round(se(Mn.b*255,0,255))}getHexString(t=si){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=le.workingColorSpace){le.workingToColorSpace(Mn.copy(this),e);let n=Mn.r,i=Mn.g,r=Mn.b,o=Math.max(n,i,r),a=Math.min(n,i,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(i-r)/d+(i<r?6:0);break;case i:l=(r-n)/d+2;break;case r:l=(n-i)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=le.workingColorSpace){return le.workingToColorSpace(Mn.copy(this),e),t.r=Mn.r,t.g=Mn.g,t.b=Mn.b,t}getStyle(t=si){le.workingToColorSpace(Mn.copy(this),t);let e=Mn.r,n=Mn.g,i=Mn.b;return t!==si?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(As),this.setHSL(As.h+t,As.s+e,As.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(As),t.getHSL(fl);let n=Kh(As.h,fl.h,e),i=Kh(As.s,fl.s,e),r=Kh(As.l,fl.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Mn=new ee;ee.NAMES=$p;var cr=class extends en{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new oi,this.environmentIntensity=1,this.environmentRotation=new oi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Ai=new V,es=new V,su=new V,ns=new V,kr=new V,Vr=new V,$d=new V,ru=new V,ou=new V,au=new V,lu=new Le,cu=new Le,hu=new Le,Is=class s{constructor(t=new V,e=new V,n=new V){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Ai.subVectors(t,e),i.cross(Ai);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){Ai.subVectors(i,e),es.subVectors(n,e),su.subVectors(t,e);let o=Ai.dot(Ai),a=Ai.dot(es),l=Ai.dot(su),c=es.dot(es),h=es.dot(su),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let f=1/d,u=(c*l-a*h)*f,m=(o*h-a*l)*f;return r.set(1-u-m,m,u)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,ns)===null?!1:ns.x>=0&&ns.y>=0&&ns.x+ns.y<=1}static getInterpolation(t,e,n,i,r,o,a,l){return this.getBarycoord(t,e,n,i,ns)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ns.x),l.addScaledVector(o,ns.y),l.addScaledVector(a,ns.z),l)}static getInterpolatedAttribute(t,e,n,i,r,o){return lu.setScalar(0),cu.setScalar(0),hu.setScalar(0),lu.fromBufferAttribute(t,e),cu.fromBufferAttribute(t,n),hu.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(lu,r.x),o.addScaledVector(cu,r.y),o.addScaledVector(hu,r.z),o}static isFrontFacing(t,e,n,i){return Ai.subVectors(n,e),es.subVectors(t,e),Ai.cross(es).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ai.subVectors(this.c,this.b),es.subVectors(this.a,this.b),Ai.cross(es).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,r=this.c,o,a;kr.subVectors(i,n),Vr.subVectors(r,n),ru.subVectors(t,n);let l=kr.dot(ru),c=Vr.dot(ru);if(l<=0&&c<=0)return e.copy(n);ou.subVectors(t,i);let h=kr.dot(ou),d=Vr.dot(ou);if(h>=0&&d<=h)return e.copy(i);let f=l*d-h*c;if(f<=0&&l>=0&&h<=0&&l-h>0)return o=l/(l-h),e.copy(n).addScaledVector(kr,o);au.subVectors(t,r);let u=kr.dot(au),m=Vr.dot(au);if(m>=0&&u<=m)return e.copy(r);let _=u*c-l*m;if(_<=0&&c>=0&&m<=0)return a=c/(c-m),e.copy(n).addScaledVector(Vr,a);let p=h*m-u*d;if(p<=0&&d-h>=0&&u-m>=0)return $d.subVectors(r,i),a=(d-h)/(d-h+(u-m)),e.copy(i).addScaledVector($d,a);let g=1/(p+_+f);return o=_*g,a=f*g,e.copy(n).addScaledVector(kr,o).addScaledVector(Vr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},ki=class{constructor(t=new V(1/0,1/0,1/0),e=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ci.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ci.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Ci.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Ci):Ci.fromBufferAttribute(r,o),Ci.applyMatrix4(t.matrixWorld),this.expandByPoint(Ci);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),dl.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),dl.copy(n.boundingBox)),dl.applyMatrix4(t.matrixWorld),this.union(dl)}let i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ci),Ci.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Bo),pl.subVectors(this.max,Bo),Gr.subVectors(t.a,Bo),Hr.subVectors(t.b,Bo),Wr.subVectors(t.c,Bo),Cs.subVectors(Hr,Gr),Rs.subVectors(Wr,Hr),rr.subVectors(Gr,Wr);let e=[0,-Cs.z,Cs.y,0,-Rs.z,Rs.y,0,-rr.z,rr.y,Cs.z,0,-Cs.x,Rs.z,0,-Rs.x,rr.z,0,-rr.x,-Cs.y,Cs.x,0,-Rs.y,Rs.x,0,-rr.y,rr.x,0];return!uu(e,Gr,Hr,Wr,pl)||(e=[1,0,0,0,1,0,0,0,1],!uu(e,Gr,Hr,Wr,pl))?!1:(ml.crossVectors(Cs,Rs),e=[ml.x,ml.y,ml.z],uu(e,Gr,Hr,Wr,pl))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ci).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ci).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(is[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),is[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),is[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),is[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),is[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),is[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),is[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),is[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(is),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},is=[new V,new V,new V,new V,new V,new V,new V,new V],Ci=new V,dl=new ki,Gr=new V,Hr=new V,Wr=new V,Cs=new V,Rs=new V,rr=new V,Bo=new V,pl=new V,ml=new V,or=new V;function uu(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){or.fromArray(s,r);let a=i.x*Math.abs(or.x)+i.y*Math.abs(or.y)+i.z*Math.abs(or.z),l=t.dot(or),c=e.dot(or),h=n.dot(or);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Ze=new V,gl=new re,j_=0,Pi=class extends zi{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:j_++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Wp,this.updateRanges=[],this.gpuType=xi,this.version=0,this._normalizationScale=t!==void 0?ju(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)gl.fromBufferAttribute(this,e),gl.applyMatrix3(t),this.setXY(e,gl.x,gl.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ze.fromBufferAttribute(this,e),Ze.applyMatrix3(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ze.fromBufferAttribute(this,e),Ze.applyMatrix4(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ze.fromBufferAttribute(this,e),Ze.applyNormalMatrix(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ze.fromBufferAttribute(this,e),Ze.transformDirection(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),i=this._normalize(i)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):V_(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):G_(t,this.array)}};var $o=class extends Pi{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Ko=class extends Pi{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Dn=class extends Pi{constructor(t,e,n){super(new Float32Array(t),e,n)}},t0=new ki,zo=new V,fu=new V,Ls=class{constructor(t=new V,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):t0.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;zo.subVectors(t,this.center);let e=zo.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(zo,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(fu.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(zo.copy(t.center).add(fu)),this.expandByPoint(zo.copy(t.center).sub(fu))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},e0=0,gi=new Se,du=new en,Xr=new V,ii=new ki,ko=new ki,cn=new V,ls=class s extends zi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:e0++}),this.uuid=Ta(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(B_(t)?Ko:$o)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Wt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return gi.makeRotationFromQuaternion(t),this.applyMatrix4(gi),this}rotateX(t){return gi.makeRotationX(t),this.applyMatrix4(gi),this}rotateY(t){return gi.makeRotationY(t),this.applyMatrix4(gi),this}rotateZ(t){return gi.makeRotationZ(t),this.applyMatrix4(gi),this}translate(t,e,n){return gi.makeTranslation(t,e,n),this.applyMatrix4(gi),this}scale(t,e,n){return gi.makeScale(t,e,n),this.applyMatrix4(gi),this}lookAt(t){return du.lookAt(t),du.updateMatrix(),this.applyMatrix4(du.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xr).negate(),this.translate(Xr.x,Xr.y,Xr.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,r=t.length;i<r;i++){let o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Dn(n,3))}else{let n=Math.min(t.length,e.count);for(let i=0;i<n;i++){let r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&Vt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ki);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Gt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];ii.setFromBufferAttribute(r),this.morphTargetsRelative?(cn.addVectors(this.boundingBox.min,ii.min),this.boundingBox.expandByPoint(cn),cn.addVectors(this.boundingBox.max,ii.max),this.boundingBox.expandByPoint(cn)):(this.boundingBox.expandByPoint(ii.min),this.boundingBox.expandByPoint(ii.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Gt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ls);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Gt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(t){let n=this.boundingSphere.center;if(ii.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];ko.setFromBufferAttribute(a),this.morphTargetsRelative?(cn.addVectors(ii.min,ko.min),ii.expandByPoint(cn),cn.addVectors(ii.max,ko.max),ii.expandByPoint(cn)):(ii.expandByPoint(ko.min),ii.expandByPoint(ko.max))}ii.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)cn.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(cn));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)cn.fromBufferAttribute(a,c),l&&(Xr.fromBufferAttribute(t,c),cn.add(Xr)),i=Math.max(i,n.distanceToSquared(cn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Gt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Gt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Pi(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[],c=new Uint8Array(n.count);for(let P=0;P<n.count;P++)a[P]=new V,l[P]=new V;let h=new V,d=new V,f=new V,u=new re,m=new re,_=new re,p=new V,g=new V;function v(P,C,N){c[P]=c[C]=c[N]=1,h.fromBufferAttribute(n,P),d.fromBufferAttribute(n,C),f.fromBufferAttribute(n,N),u.fromBufferAttribute(r,P),m.fromBufferAttribute(r,C),_.fromBufferAttribute(r,N),d.sub(h),f.sub(h),m.sub(u),_.sub(u);let D=1/(m.x*_.y-_.x*m.y);isFinite(D)&&(p.copy(d).multiplyScalar(_.y).addScaledVector(f,-m.y).multiplyScalar(D),g.copy(f).multiplyScalar(m.x).addScaledVector(d,-_.x).multiplyScalar(D),a[P].add(p),a[C].add(p),a[N].add(p),l[P].add(g),l[C].add(g),l[N].add(g))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let P=0,C=w.length;P<C;++P){let N=w[P],D=N.start,H=N.count;for(let I=D,B=D+H;I<B;I+=3)v(t.getX(I+0),t.getX(I+1),t.getX(I+2))}let y=new V,T=new V,E=new V,x=new V;function b(P){E.fromBufferAttribute(i,P),x.copy(E);let C=a[P];y.copy(C),y.sub(E.multiplyScalar(E.dot(C))).normalize(),T.crossVectors(x,C);let D=T.dot(l[P])<0?-1:1;o.setXYZW(P,y.x,y.y,y.z,D)}for(let P=0,C=n.count;P<C;++P)c[P]&&b(P);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Pi(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,u=n.count;f<u;f++)n.setXYZ(f,0,0,0);let i=new V,r=new V,o=new V,a=new V,l=new V,c=new V,h=new V,d=new V;if(t)for(let f=0,u=t.count;f<u;f+=3){let m=t.getX(f+0),_=t.getX(f+1),p=t.getX(f+2);i.fromBufferAttribute(e,m),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,p),h.subVectors(o,r),d.subVectors(i,r),h.cross(d),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),a.add(h),l.add(h),c.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,u=e.count;f<u;f+=3)i.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),d.subVectors(i,r),h.cross(d),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)cn.fromBufferAttribute(t,e),cn.normalize(),t.setXYZ(e,cn.x,cn.y,cn.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,d=a.normalized,f=new c.constructor(l.length*h),u=0,m=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?u=l[_]*a.data.stride+a.offset:u=l[_]*h;for(let g=0;g<h;g++)f[m++]=c[u++]}return new Pi(f,h,d)}if(this.index===null)return Vt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){let f=c[h],u=t(f,n);l.push(u)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){let u=c[d];h.push(u.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let i=t.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],d=r[c];for(let f=0,u=d.length;f<u;f++)h.push(d[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var pu=new V,n0=new V,i0=new Wt,Ri=class{constructor(t=new V(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=pu.subVectors(n,e).cross(n0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let i=t.delta(pu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(i,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||i0.getNormalMatrix(t),i=this.coplanarPoint(pu).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},s0=0,cs=class extends zi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:s0++}),this.uuid=Ta(),this.name="",this.type="Material",this.blending=oo,this.side=Bs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Du,this.blendDst=Nu,this.blendEquation=ur,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ee(0,0,0),this.blendAlpha=0,this.depthFunc=Kr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Bp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ll,this.stencilZFail=Ll,this.stencilZPass=Ll,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Vt(`Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Vt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new ee().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Ri().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new re().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new re().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var ss=new V,mu=new V,_l=new V,xl=new V,Yl=class{constructor(t=new V,e=new V(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ss)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ss.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ss.copy(this.origin).addScaledVector(this.direction,e),ss.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){mu.copy(t).add(e).multiplyScalar(.5),_l.copy(e).sub(t).normalize(),xl.copy(this.origin).sub(mu);let r=t.distanceTo(e)*.5,o=-this.direction.dot(_l),a=xl.dot(this.direction),l=-xl.dot(_l),c=xl.lengthSq(),h=Math.abs(1-o*o),d,f,u,m;if(h>0)if(d=o*l-a,f=o*a-l,m=r*h,d>=0)if(f>=-m)if(f<=m){let _=1/h;d*=_,f*=_,u=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=r,d=Math.max(0,-(o*f+a)),u=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(o*f+a)),u=-d*d+f*(f+2*l)+c;else f<=-m?(d=Math.max(0,-(-o*r+a)),f=d>0?-r:Math.min(Math.max(-r,-l),r),u=-d*d+f*(f+2*l)+c):f<=m?(d=0,f=Math.min(Math.max(-r,-l),r),u=f*(f+2*l)+c):(d=Math.max(0,-(o*r+a)),f=d>0?r:Math.min(Math.max(-r,-l),r),u=-d*d+f*(f+2*l)+c);else f=o>0?-r:r,d=Math.max(0,-(o*f+a)),u=-d*d+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(mu).addScaledVector(_l,f),u}intersectSphere(t,e){if(t.radius<0)return null;ss.subVectors(t.center,this.origin);let n=ss.dot(this.direction),i=ss.dot(ss)-n*n,r=t.radius*t.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,i=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,i=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),d>=0?(a=(t.min.z-f.z)*d,l=(t.max.z-f.z)*d):(a=(t.max.z-f.z)*d,l=(t.min.z-f.z)*d),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,ss)!==null}intersectTriangle(t,e,n,i,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,d=t.x-o.x,f=t.y-o.y,u=t.z-o.z,m=e.x-o.x,_=e.y-o.y,p=e.z-o.z,g=n.x-o.x,v=n.y-o.y,w=n.z-o.z,y=Math.abs(l),T=Math.abs(c),E=Math.abs(h),x,b,P,C,N,D,H,I,B,X,F,Q;if(y>=T&&y>=E?(P=l,D=d,B=m,Q=g,l>=0?(x=c,b=h,C=f,N=u,H=_,I=p,X=v,F=w):(x=h,b=c,C=u,N=f,H=p,I=_,X=w,F=v)):T>=E?(P=c,D=f,B=_,Q=v,c>=0?(x=h,b=l,C=u,N=d,H=p,I=m,X=w,F=g):(x=l,b=h,C=d,N=u,H=m,I=p,X=g,F=w)):(P=h,D=u,B=p,Q=w,h>=0?(x=l,b=c,C=d,N=f,H=m,I=_,X=g,F=v):(x=c,b=l,C=f,N=d,H=_,I=m,X=v,F=g)),P===0)return null;let W=x/P,R=b/P,tt=1/P,yt=C-W*D,Ut=N-R*D,J=H-W*B,lt=I-R*B,_t=X-W*Q,Mt=F-R*Q,ut=_t*lt-Mt*J,Nt=yt*Mt-Ut*_t,de=J*Ut-lt*yt;if(i){if(ut<0||Nt<0||de<0)return null}else if((ut<0||Nt<0||de<0)&&(ut>0||Nt>0||de>0))return null;let Rt=ut+Nt+de;if(Rt===0)return null;let bt=tt*(ut*D+Nt*B+de*Q);return(Rt>0?bt<0:bt>0)?null:this.at(bt/Rt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Zl=class extends cs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ee(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new oi,this.combine=fc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Kd=new Se,ar=new Yl,vl=new Ls,Qd=new V,yl=new V,Sl=new V,Ml=new V,gu=new V,bl=new V,jd=new V,Tl=new V,Je=class extends en{constructor(t=new ls,e=new Zl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(r&&a){bl.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],d=r[l];h!==0&&(gu.fromBufferAttribute(d,t),o?bl.addScaledVector(gu,h):bl.addScaledVector(gu.sub(e),h))}e.add(bl)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),vl.copy(n.boundingSphere),vl.applyMatrix4(r),ar.copy(t.ray).recast(t.near),!(vl.containsPoint(ar.origin)===!1&&(ar.intersectSphere(vl,Qd)===null||ar.origin.distanceToSquared(Qd)>(t.far-t.near)**2))&&(Kd.copy(r).invert(),ar.copy(t.ray).applyMatrix4(Kd),!(n.boundingBox!==null&&ar.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ar)))}_computeIntersections(t,e,n){let i,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,f=r.groups,u=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,_=f.length;m<_;m++){let p=f[m],g=o[p.materialIndex],v=Math.max(p.start,u.start),w=Math.min(a.count,Math.min(p.start+p.count,u.start+u.count));for(let y=v,T=w;y<T;y+=3){let E=a.getX(y),x=a.getX(y+1),b=a.getX(y+2);i=wl(this,g,t,n,c,h,d,E,x,b),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{let m=Math.max(0,u.start),_=Math.min(a.count,u.start+u.count);for(let p=m,g=_;p<g;p+=3){let v=a.getX(p),w=a.getX(p+1),y=a.getX(p+2);i=wl(this,o,t,n,c,h,d,v,w,y),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,_=f.length;m<_;m++){let p=f[m],g=o[p.materialIndex],v=Math.max(p.start,u.start),w=Math.min(l.count,Math.min(p.start+p.count,u.start+u.count));for(let y=v,T=w;y<T;y+=3){let E=y,x=y+1,b=y+2;i=wl(this,g,t,n,c,h,d,E,x,b),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{let m=Math.max(0,u.start),_=Math.min(l.count,u.start+u.count);for(let p=m,g=_;p<g;p+=3){let v=p,w=p+1,y=p+2;i=wl(this,o,t,n,c,h,d,v,w,y),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}}};function r0(s,t,e,n,i,r,o,a){let l;if(t.side===pn?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,t.side===Bs,a),l===null)return null;Tl.copy(a),Tl.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(Tl);return c<e.near||c>e.far?null:{distance:c,point:Tl.clone(),object:s}}function wl(s,t,e,n,i,r,o,a,l,c){s.getVertexPosition(a,yl),s.getVertexPosition(l,Sl),s.getVertexPosition(c,Ml);let h=r0(s,t,e,n,yl,Sl,Ml,jd);if(h){let d=new V;Is.getBarycoord(jd,yl,Sl,Ml,d),i&&(h.uv=Is.getInterpolatedAttribute(i,a,l,c,d,new re)),r&&(h.uv1=Is.getInterpolatedAttribute(r,a,l,c,d,new re)),o&&(h.normal=Is.getInterpolatedAttribute(o,a,l,c,d,new V),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new V,materialIndex:0};Is.getNormal(yl,Sl,Ml,f.normal),h.face=f,h.barycoord=d}return h}var Qo=class extends qn{constructor(t=null,e=1,n=1,i,r,o,a,l,c=hn,h=hn,d,f){super(null,o,a,l,c,h,i,r,d,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var jo=class extends Pi{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},qr=new Se,tp=new Se,El=[],ep=new ki,o0=new Se,Vo=new Je,Go=new Ls,Ds=class extends Je{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new jo(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,o0)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ki),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,qr),ep.copy(t.boundingBox).applyMatrix4(qr),this.boundingBox.union(ep)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ls),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,qr),Go.copy(t.boundingSphere).applyMatrix4(qr),this.boundingSphere.union(Go)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){let n=this.matrixWorld,i=this.count;if(Vo.geometry=this.geometry,Vo.material=this.material,Vo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Go.copy(this.boundingSphere),Go.applyMatrix4(n),t.ray.intersectsSphere(Go)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,qr),tp.multiplyMatrices(n,qr),Vo.matrixWorld=tp,Vo.raycast(t,El);for(let o=0,a=El.length;o<a;o++){let l=El[o];l.instanceId=r,l.object=this,e.push(l)}El.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new jo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Qo(new Float32Array(i*this.count),i,this.count,vc,xi));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=i*t;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},lr=new Ls,a0=new re(.5,.5),Al=new V,Ns=class{constructor(t=new Ri,e=new Ri,n=new Ri,i=new Ri,r=new Ri,o=new Ri){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=_i,n=!1){let i=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],d=r[5],f=r[6],u=r[7],m=r[8],_=r[9],p=r[10],g=r[11],v=r[12],w=r[13],y=r[14],T=r[15];if(i[0].setComponents(c-o,u-h,g-m,T-v).normalize(),i[1].setComponents(c+o,u+h,g+m,T+v).normalize(),i[2].setComponents(c+a,u+d,g+_,T+w).normalize(),i[3].setComponents(c-a,u-d,g-_,T-w).normalize(),n)i[4].setComponents(l,f,p,y).normalize(),i[5].setComponents(c-l,u-f,g-p,T-y).normalize();else if(i[4].setComponents(c-l,u-f,g-p,T-y).normalize(),e===_i)i[5].setComponents(c+l,u+f,g+p,T+y).normalize();else if(e===Qr)i[5].setComponents(l,f,p,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),lr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),lr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(lr)}intersectsSprite(t){lr.center.set(0,0,0);let e=a0.distanceTo(t.center);return lr.radius=.7071067811865476+e,lr.applyMatrix4(t.matrixWorld),this.intersectsSphere(lr)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(Al.x=i.normal.x>0?t.max.x:t.min.x,Al.y=i.normal.y>0?t.max.y:t.min.y,Al.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Al)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},np=new Se,Jl=class s{constructor(){this.coordinateSystem=_i,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,n=this._frustums;for(let i=0;i<e.length;i++){let r=e[i];np.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[i]===void 0&&(n[i]=new Ns),n[i].setFromProjectionMatrix(np,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,n=t._frustums;for(let i=0;i<t._count;i++)e[i]===void 0&&(e[i]=new Ns),e[i].copy(n[i]);return this._count=t._count,this}clone(){return new s().copy(this)}};var ta=class extends qn{constructor(t=[],e=fr,n,i,r,o,a,l,c,h){super(t,e,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}};var hs=class extends qn{constructor(t,e,n=Li,i,r,o,a=hn,l=hn,c,h=as,d=1){if(h!==as&&h!==fs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:d};super(f,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new to(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},ea=class extends hs{constructor(t,e=Li,n=fr,i,r,o=hn,a=hn,l,c=as){let h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,n,i,r,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},na=class extends qn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Vi=class s extends ls{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],d=[],f=0,u=0;m("z","y","x",-1,-1,n,e,t,o,r,0),m("z","y","x",1,-1,n,e,-t,o,r,1),m("x","z","y",1,1,t,n,e,i,o,2),m("x","z","y",1,-1,t,n,-e,i,o,3),m("x","y","z",1,-1,t,e,n,i,r,4),m("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Dn(c,3)),this.setAttribute("normal",new Dn(h,3)),this.setAttribute("uv",new Dn(d,2));function m(_,p,g,v,w,y,T,E,x,b,P){let C=y/x,N=T/b,D=y/2,H=T/2,I=E/2,B=x+1,X=b+1,F=0,Q=0,W=new V;for(let R=0;R<X;R++){let tt=R*N-H;for(let yt=0;yt<B;yt++){let Ut=yt*C-D;W[_]=Ut*v,W[p]=tt*w,W[g]=I,c.push(W.x,W.y,W.z),W[_]=0,W[p]=0,W[g]=E>0?1:-1,h.push(W.x,W.y,W.z),d.push(yt/x),d.push(1-R/b),F+=1}}for(let R=0;R<b;R++)for(let tt=0;tt<x;tt++){let yt=f+tt+B*R,Ut=f+tt+B*(R+1),J=f+(tt+1)+B*(R+1),lt=f+(tt+1)+B*R;l.push(yt,Ut,lt),l.push(Ut,J,lt),Q+=6}a.addGroup(u,Q,P),u+=Q,f+=F}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var $l=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Vt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,i=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),i=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);let h=n[i],f=n[i+1]-h,u=(o-h)/f;return(i+u)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);let o=this.getPoint(i),a=this.getPoint(r),l=e||(o.isVector2?new re:new V);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new V,i=[],r=[],o=[],a=new V,l=new Se;for(let u=0;u<=t;u++){let m=u/t;i[u]=this.getTangentAt(m,new V)}r[0]=new V,o[0]=new V;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),d=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let u=1;u<=t;u++){if(r[u]=r[u-1].clone(),o[u]=o[u-1].clone(),a.crossVectors(i[u-1],i[u]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(se(i[u-1].dot(i[u]),-1,1));r[u].applyMatrix4(l.makeRotationAxis(a,m))}o[u].crossVectors(i[u],r[u])}if(e===!0){let u=Math.acos(se(r[0].dot(r[t]),-1,1));u/=t,i[0].dot(a.crossVectors(r[0],r[t]))>0&&(u=-u);for(let m=1;m<=t;m++)r[m].applyMatrix4(l.makeRotationAxis(i[m],u*m)),o[m].crossVectors(i[m],r[m])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}};function tf(){let s=0,t=0,e=0,n=0;function i(r,o,a,l){s=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,d){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,u=(a-o)/h-(l-o)/(h+d)+(l-a)/d;f*=h,u*=h,i(o,a,f,u)},calc:function(r){let o=r*r,a=o*r;return s+t*r+e*o+n*a}}}var ip=new V,sp=new V,_u=new tf,xu=new tf,vu=new tf,ia=class extends $l{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new V){let n=e,i=this.points,r=i.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%r]:(sp.subVectors(i[0],i[1]).add(i[0]),c=sp);let d=i[a%r],f=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(ip.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=ip),this.curveType==="centripetal"||this.curveType==="chordal"){let u=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(d),u),_=Math.pow(d.distanceToSquared(f),u),p=Math.pow(f.distanceToSquared(h),u);_<1e-4&&(_=1),m<1e-4&&(m=_),p<1e-4&&(p=_),_u.initNonuniformCatmullRom(c.x,d.x,f.x,h.x,m,_,p),xu.initNonuniformCatmullRom(c.y,d.y,f.y,h.y,m,_,p),vu.initNonuniformCatmullRom(c.z,d.z,f.z,h.z,m,_,p)}else this.curveType==="catmullrom"&&(_u.initCatmullRom(c.x,d.x,f.x,h.x,this.tension),xu.initCatmullRom(c.y,d.y,f.y,h.y,this.tension),vu.initCatmullRom(c.z,d.z,f.z,h.z,this.tension));return n.set(_u.calc(l),xu.calc(l),vu.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new V().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};var sa=class s extends ls{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,d=t/a,f=e/l,u=[],m=[],_=[],p=[];for(let g=0;g<h;g++){let v=g*f-o;for(let w=0;w<c;w++){let y=w*d-r;m.push(y,-v,0),_.push(0,0,1),p.push(w/a),p.push(1-g/l)}}for(let g=0;g<l;g++)for(let v=0;v<a;v++){let w=v+c*g,y=v+c*(g+1),T=v+1+c*(g+1),E=v+1+c*g;u.push(w,y,E),u.push(y,T,E)}this.setIndex(u),this.setAttribute("position",new Dn(m,3)),this.setAttribute("normal",new Dn(_,3)),this.setAttribute("uv",new Dn(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}};var ra=class s extends ls{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),i=Math.floor(i);let l=[],c=[],h=[],d=[],f=new V,u=new V,m=new V;for(let _=0;_<=n;_++){let p=o+_/n*a;for(let g=0;g<=i;g++){let v=g/i*r;u.x=(t+e*Math.cos(p))*Math.cos(v),u.y=(t+e*Math.cos(p))*Math.sin(v),u.z=e*Math.sin(p),c.push(u.x,u.y,u.z),f.x=t*Math.cos(v),f.y=t*Math.sin(v),m.subVectors(u,f).normalize(),h.push(m.x,m.y,m.z),d.push(g/i),d.push(_/n)}}for(let _=1;_<=n;_++)for(let p=1;p<=i;p++){let g=(i+1)*_+p-1,v=(i+1)*(_-1)+p-1,w=(i+1)*(_-1)+p,y=(i+1)*_+p;l.push(g,v,y),l.push(v,w,y)}this.setIndex(l),this.setAttribute("position",new Dn(c,3)),this.setAttribute("normal",new Dn(h,3)),this.setAttribute("uv",new Dn(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function pr(s){let t={};for(let e in s){t[e]={};for(let n in s[e]){let i=s[e][n];if(rp(i))i.isRenderTargetTexture?(Vt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone();else if(Array.isArray(i))if(rp(i[0])){let r=[];for(let o=0,a=i.length;o<a;o++)r[o]=i[o].clone();t[e][n]=r}else t[e][n]=i.slice();else t[e][n]=i}}return t}function Tn(s){let t={};for(let e=0;e<s.length;e++){let n=pr(s[e]);for(let i in n)t[i]=n[i]}return t}function rp(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function l0(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function ef(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:le.workingColorSpace}var Kp={clone:pr,merge:Tn},c0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,h0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Gi=class extends cs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=c0,this.fragmentShader=h0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=pr(t.uniforms),this.uniformsGroups=l0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let i=t.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=e[i.value]||null;break;case"c":this.uniforms[n].value=new ee().setHex(i.value);break;case"v2":this.uniforms[n].value=new re().fromArray(i.value);break;case"v3":this.uniforms[n].value=new V().fromArray(i.value);break;case"v4":this.uniforms[n].value=new Le().fromArray(i.value);break;case"m3":this.uniforms[n].value=new Wt().fromArray(i.value);break;case"m4":this.uniforms[n].value=new Se().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Kl=class extends Gi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Ii=class extends cs{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ee(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ee(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ba,this.normalScale=new re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new oi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var oa=class extends cs{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ee(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ee(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ba,this.normalScale=new re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new oi,this.combine=fc,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Ql=class extends cs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Op,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},jl=class extends cs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Yr(s,t){return!s||s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function Cl(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}var Us=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=e[++n],t<i)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let o=0;o!==i;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},tc=class extends Us{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Mu,endingEnd:Mu}}intervalChanged_(t,e,n){let i=this.parameterPositions,r=t-2,o=t+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case bu:r=t,a=2*e-n;break;case Tu:r=i.length-2,a=e+i[r]-i[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case bu:o=t,l=2*n-e;break;case Tu:o=1,l=n+i[1]-i[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,u=this._weightNext,m=(n-e)/(i-e),_=m*m,p=_*m,g=-f*p+2*f*_-f*m,v=(1+f)*p+(-1.5-2*f)*_+(-.5+f)*m+1,w=(-1-u)*p+(1.5+u)*_+.5*m,y=u*p-u*_;for(let T=0;T!==a;++T)r[T]=g*o[h+T]+v*o[c+T]+w*o[l+T]+y*o[d+T];return r}},ec=class extends Us{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(i-e),d=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*d+o[l+f]*h;return r}},nc=class extends Us{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},ic=class extends Us{interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this.inTangents,d=this.outTangents;if(!h||!d){let m=(n-e)/(i-e),_=1-m;for(let p=0;p!==a;++p)r[p]=o[c+p]*_+o[l+p]*m;return r}let f=a*2,u=t-1;for(let m=0;m!==a;++m){let _=o[c+m],p=o[l+m],g=u*f+m*2,v=d[g],w=d[g+1],y=t*f+m*2,T=h[y],E=h[y+1],x=f0(n,e,v,T,i);r[m]=Qp(x,_,w,E,p)}return r}};function Qp(s,t,e,n,i){let r=1-s;return r*r*r*t+3*r*r*s*e+3*r*s*s*n+s*s*s*i}function u0(s,t,e,n,i){let r=1-s;return 3*r*r*(e-t)+6*r*s*(n-e)+3*s*s*(i-n)}function f0(s,t,e,n,i){let r=(s-t)/(i-t);for(let o=0;o<8;o++){let a=Qp(r,t,e,n,i)-s;if(Math.abs(a)<1e-10)break;let l=u0(r,t,e,n,i);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var ai=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Yr(e,this.TimeBufferType),this.values=Yr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Yr(t.times,Array),values:Yr(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i),Cl(t.settings)&&(n.settings={inTangents:Yr(t.settings.inTangents,Array),outTangents:Yr(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new nc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new ec(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new tc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new ic(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Wo:e=this.InterpolantFactoryMethodDiscrete;break;case Gl:e=this.InterpolantFactoryMethodLinear;break;case Il:e=this.InterpolantFactoryMethodSmooth;break;case Su:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Vt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Wo;case this.InterpolantFactoryMethodLinear:return Gl;case this.InterpolantFactoryMethodSmooth:return Il;case this.InterpolantFactoryMethodBezier:return Su}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t;Cl(this.settings)&&(op(this.settings.inTangents,t),op(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t;Cl(this.settings)&&(ap(this.settings.inTangents,t),ap(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Gt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(Gt("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){Gt("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){Gt("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(i!==void 0&&z_(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){Gt("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Il,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(i)l=!0;else{let d=a*n,f=d-n,u=d+n;for(let m=0;m!==n;++m){let _=e[d+m];if(_!==e[f+m]||_!==e[u+m]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let d=a*n,f=o*n;for(let u=0;u!==n;++u)e[f+u]=e[d+u]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,Cl(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};function op(s,t){for(let e=0,n=s.length;e!==n;e+=2)s[e]+=t}function ap(s,t){for(let e=0,n=s.length;e!==n;e+=2)s[e]*=t}ai.prototype.ValueTypeName="";ai.prototype.TimeBufferType=Float32Array;ai.prototype.ValueBufferType=Float32Array;ai.prototype.DefaultInterpolation=Gl;var Os=class extends ai{constructor(t,e,n){super(t,e,n)}};Os.prototype.ValueTypeName="bool";Os.prototype.ValueBufferType=Array;Os.prototype.DefaultInterpolation=Wo;Os.prototype.InterpolantFactoryMethodLinear=void 0;Os.prototype.InterpolantFactoryMethodSmooth=void 0;var sc=class extends ai{constructor(t,e,n,i){super(t,e,n,i)}};sc.prototype.ValueTypeName="color";var rc=class extends ai{constructor(t,e,n,i){super(t,e,n,i)}};rc.prototype.ValueTypeName="number";var oc=class extends Us{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(i-e),c=t*a;for(let h=c+a;c!==h;c+=4)Xn.slerpFlat(r,0,o,c-a,o,c,l);return r}},aa=class extends ai{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new oc(this.times,this.values,this.getValueSize(),t)}};aa.prototype.ValueTypeName="quaternion";aa.prototype.InterpolantFactoryMethodSmooth=void 0;var Fs=class extends ai{constructor(t,e,n){super(t,e,n)}};Fs.prototype.ValueTypeName="string";Fs.prototype.ValueBufferType=Array;Fs.prototype.DefaultInterpolation=Wo;Fs.prototype.InterpolantFactoryMethodLinear=void 0;Fs.prototype.InterpolantFactoryMethodSmooth=void 0;var ac=class extends ai{constructor(t,e,n,i){super(t,e,n,i)}};ac.prototype.ValueTypeName="vector";var lc=class{constructor(t,e,n){let i=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,f=c.length;d<f;d+=2){let u=c[d],m=c[d+1];if(u.global&&(u.lastIndex=0),u.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},jp=new lc,cc=class{constructor(t){this.manager=t!==void 0?t:jp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};cc.DEFAULT_MATERIAL_NAME="__DEFAULT";var no=class extends en{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ee(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}};var yu=new Se,lp=new V,cp=new V,la=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new re(512,512),this.mapType=Yn,this.map=null,this.mapPass=null,this.matrix=new Se,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ns,this._frameExtents=new re(1,1),this._viewportCount=1,this._viewports=[new Le(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;lp.setFromMatrixPosition(t.matrixWorld),e.position.copy(lp),cp.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(cp),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,i){yu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(yu,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=i?i.z/r.x:1,a=i?i.w/r.y:1,l=i?i.x/r.x:0,c=i?i.y/r.y:0;t.coordinateSystem===Qr||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(yu)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Rl=new V,Pl=new Xn,Fi=new V,ca=class extends en{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Se,this.projectionMatrix=new Se,this.projectionMatrixInverse=new Se,this.coordinateSystem=_i,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Rl,Pl,Fi),Fi.x===1&&Fi.y===1&&Fi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Rl,Pl,Fi.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Rl,Pl,Fi),Fi.x===1&&Fi.y===1&&Fi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Rl,Pl,Fi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ps=new V,hp=new re,up=new re,bn=class extends ca{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Hl*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan($h*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Hl*2*Math.atan(Math.tan($h*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ps.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ps.x,Ps.y).multiplyScalar(-t/Ps.z),Ps.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ps.x,Ps.y).multiplyScalar(-t/Ps.z)}getViewSize(t,e){return this.getViewBounds(t,hp,up),e.subVectors(up,hp)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan($h*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var wu=class extends la{constructor(){super(new bn(90,1,.5,500)),this.isPointLightShadow=!0}},ha=class extends no{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new wu}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},ua=class extends ca{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Eu=class extends la{constructor(){super(new ua(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},io=class extends no{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(en.DEFAULT_UP),this.updateMatrix(),this.target=new en,this.shadow=new Eu}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}},fa=class extends no{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var Zr=-90,Jr=1,so=class extends en{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new bn(Zr,Jr,t,e);i.layers=this.layers,this.add(i);let r=new bn(Zr,Jr,t,e);r.layers=this.layers,this.add(r);let o=new bn(Zr,Jr,t,e);o.layers=this.layers,this.add(o);let a=new bn(Zr,Jr,t,e);a.layers=this.layers,this.add(a);let l=new bn(Zr,Jr,t,e);l.layers=this.layers,this.add(l);let c=new bn(Zr,Jr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===_i)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Qr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),u=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(n,0,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.mipmapsAutoUpdate=_,t.setRenderTarget(n,5,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,f,u),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},hc=class extends bn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};var nf="\\[\\]\\.:\\/",d0=new RegExp("["+nf+"]","g"),sf="[^"+nf+"]",p0="[^"+nf.replace("\\.","")+"]",m0=/((?:WC+[\/:])*)/.source.replace("WC",sf),g0=/(WCOD+)?/.source.replace("WCOD",p0),_0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",sf),x0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",sf),v0=new RegExp("^"+m0+g0+_0+x0+"$"),y0=["material","materials","bones","map"],Au=class{constructor(t,e,n){let i=n||Ce.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ce=class s{constructor(t,e,n){this.path=e,this.parsedPath=n||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,n):new s(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(d0,"")}static parseTrackName(t){let e=v0.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);y0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Vt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Gt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Gt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Gt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Gt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Gt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Gt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Gt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[i];if(o===void 0){let c=e.nodeName;Gt("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){Gt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Gt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ce.Composite=Au;Ce.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ce.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ce.prototype.GetterByBindingType=[Ce.prototype._getValue_direct,Ce.prototype._getValue_array,Ce.prototype._getValue_arrayElement,Ce.prototype._getValue_toArray];Ce.prototype.SetterByBindingTypeAndVersioning=[[Ce.prototype._setValue_direct,Ce.prototype._setValue_direct_setNeedsUpdate,Ce.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ce.prototype._setValue_array,Ce.prototype._setValue_array_setNeedsUpdate,Ce.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ce.prototype._setValue_arrayElement,Ce.prototype._setValue_arrayElement_setNeedsUpdate,Ce.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ce.prototype._setValue_fromArray,Ce.prototype._setValue_fromArray_setNeedsUpdate,Ce.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var AT=new Float32Array(1);var da=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Vt("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};var hf=class hf{constructor(t,e,n,i){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,i){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=i,this}};hf.prototype.isMatrix2=!0;var Cu=hf;function rf(s,t,e,n){let i=S0(n);switch(e){case qu:return s*t;case vc:return s*t/i.components*i.byteLength;case yc:return s*t/i.components*i.byteLength;case zs:return s*t*2/i.components*i.byteLength;case Sc:return s*t*2/i.components*i.byteLength;case Yu:return s*t*3/i.components*i.byteLength;case Ni:return s*t*4/i.components*i.byteLength;case Mc:return s*t*4/i.components*i.byteLength;case _a:case xa:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case va:case ya:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Tc:case Ec:return Math.max(s,16)*Math.max(t,8)/4;case bc:case wc:return Math.max(s,8)*Math.max(t,8)/2;case Ac:case Cc:case Pc:case Ic:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Rc:case Sa:case Lc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Dc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Nc:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Uc:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Oc:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Fc:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Bc:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case zc:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case kc:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Vc:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Gc:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Hc:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Wc:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Xc:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case qc:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Yc:case Zc:case Jc:return Math.ceil(s/4)*Math.ceil(t/4)*16;case $c:case Kc:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Ma:case Qc:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function S0(s){switch(s){case Yn:case Gu:return{byteLength:1,components:1};case lo:case Hu:case Di:return{byteLength:2,components:1};case _c:case xc:return{byteLength:2,components:4};case Li:case gc:case xi:return{byteLength:4,components:1};case Wu:case Xu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window!="undefined"&&(window.__THREE__?Vt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function Sm(){let s=null,t=!1,e=null,n=null;function i(r,o){n=s.requestAnimationFrame(i),e(r,o)}return{start:function(){t!==!0&&e!==null&&s!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function b0(s){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,d=c.byteLength,f=s.createBuffer();s.bindBuffer(l,f),s.bufferData(l,c,h),a.onUploadCallback();let u;if(c instanceof Float32Array)u=s.FLOAT;else if(typeof Float16Array!="undefined"&&c instanceof Float16Array)u=s.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?u=s.HALF_FLOAT:u=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)u=s.SHORT;else if(c instanceof Uint32Array)u=s.UNSIGNED_INT;else if(c instanceof Int32Array)u=s.INT;else if(c instanceof Int8Array)u=s.BYTE;else if(c instanceof Uint8Array)u=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)u=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:u,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){let h=l.array,d=l.updateRanges;if(s.bindBuffer(c,a),d.length===0)s.bufferSubData(c,0,h);else{d.sort((u,m)=>u.start-m.start);let f=0;for(let u=1;u<d.length;u++){let m=d[f],_=d[u];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++f,d[f]=_)}d.length=f+1;for(let u=0,m=d.length;u<m;u++){let _=d[u];s.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(s.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}var T0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,w0=`#ifdef USE_ALPHAHASH
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
#endif`,E0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,A0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,C0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,R0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,P0=`#ifdef USE_AOMAP
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
#endif`,I0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,L0=`#ifdef USE_BATCHING
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
#endif`,D0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,N0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,U0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,O0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,F0=`#ifdef USE_IRIDESCENCE
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
#endif`,B0=`#ifdef USE_BUMPMAP
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
#endif`,z0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,k0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,V0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,G0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,H0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,W0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,X0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,q0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Y0=`#define PI 3.141592653589793
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
} // validated`,Z0=`vec3 transformedNormal = objectNormal;
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
#endif`,J0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,K0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Q0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,j0="gl_FragColor = linearToOutputTexel( gl_FragColor );",tx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ex=`#ifdef USE_ENVMAP
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
#endif`,nx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,ix=`#ifdef USE_ENVMAP
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
#endif`,sx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,rx=`#ifdef USE_ENVMAP
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
#endif`,ox=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ax=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,lx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,cx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,hx=`#ifdef USE_GRADIENTMAP
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
}`,ux=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,fx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,dx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,px=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,mx=`#ifdef USE_ENVMAP
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
#endif`,gx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_x=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,xx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,vx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,yx=`PhysicalMaterial material;
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
#endif`,Sx=`uniform sampler2D dfgLUT;
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
}`,Mx=`
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
#endif`,bx=`#if defined( RE_IndirectDiffuse )
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
#endif`,Tx=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,wx=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,Ex=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ax=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Px=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ix=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Lx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Dx=`#if defined( USE_POINTS_UV )
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
#endif`,Nx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ux=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ox=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Fx=`#if defined( USE_MORPHCOLORS )
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
#endif`,Bx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zx=`#ifdef USE_MORPHTARGETS
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
#endif`,kx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Gx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Hx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,qx=`#ifdef USE_NORMALMAP
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
#endif`,Yx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Zx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Jx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$x=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Kx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Qx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,jx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,tv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ev=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,nv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,iv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,sv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,rv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ov=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,av=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,lv=`float getShadowMask() {
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
}`,cv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,hv=`#ifdef USE_SKINNING
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
#endif`,uv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,fv=`#ifdef USE_SKINNING
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
#endif`,dv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,pv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,mv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,gv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,_v=`#ifdef USE_TRANSMISSION
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
#endif`,xv=`#ifdef USE_TRANSMISSION
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
#endif`,vv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Sv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Mv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,bv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Tv=`uniform sampler2D t2D;
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
}`,wv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ev=`uniform float backgroundBlurriness;
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
}`,Av=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rv=`#include <common>
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
}`,Pv=`#if DEPTH_PACKING == 3200
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
}`,Iv=`#define DISTANCE
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
}`,Lv=`#define DISTANCE
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
}`,Dv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Nv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Uv=`uniform float scale;
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
}`,Ov=`uniform vec3 diffuse;
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
}`,Fv=`#include <common>
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
}`,Bv=`uniform vec3 diffuse;
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
}`,zv=`#define LAMBERT
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
}`,kv=`#define LAMBERT
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
}`,Vv=`#define MATCAP
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
}`,Gv=`#define MATCAP
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
}`,Hv=`#define NORMAL
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
}`,Wv=`#define NORMAL
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
}`,Xv=`#define PHONG
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
}`,qv=`#define PHONG
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
}`,Yv=`#define STANDARD
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
}`,Zv=`#define STANDARD
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
}`,Jv=`#define TOON
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
}`,$v=`#define TOON
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
}`,Kv=`uniform float size;
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
}`,Qv=`uniform vec3 diffuse;
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
}`,jv=`#include <common>
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
}`,ty=`uniform vec3 color;
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
}`,ey=`uniform float rotation;
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
}`,ny=`uniform vec3 diffuse;
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
}`,Kt={alphahash_fragment:T0,alphahash_pars_fragment:w0,alphamap_fragment:E0,alphamap_pars_fragment:A0,alphatest_fragment:C0,alphatest_pars_fragment:R0,aomap_fragment:P0,aomap_pars_fragment:I0,batching_pars_vertex:L0,batching_vertex:D0,begin_vertex:N0,beginnormal_vertex:U0,bsdfs:O0,iridescence_fragment:F0,bumpmap_pars_fragment:B0,clipping_planes_fragment:z0,clipping_planes_pars_fragment:k0,clipping_planes_pars_vertex:V0,clipping_planes_vertex:G0,color_fragment:H0,color_pars_fragment:W0,color_pars_vertex:X0,color_vertex:q0,common:Y0,defaultnormal_vertex:Z0,displacementmap_pars_vertex:J0,displacementmap_vertex:$0,emissivemap_fragment:K0,emissivemap_pars_fragment:Q0,colorspace_fragment:j0,colorspace_pars_fragment:tx,envmap_fragment:ex,envmap_common_pars_fragment:nx,envmap_pars_fragment:ix,envmap_pars_vertex:sx,envmap_physical_pars_fragment:mx,envmap_vertex:rx,fog_vertex:ox,fog_pars_vertex:ax,fog_fragment:lx,fog_pars_fragment:cx,gradientmap_pars_fragment:hx,lightmap_pars_fragment:ux,lights_lambert_fragment:fx,lights_lambert_pars_fragment:dx,lights_pars_begin:px,lights_toon_fragment:gx,lights_toon_pars_fragment:_x,lights_phong_fragment:xx,lights_phong_pars_fragment:vx,lights_physical_fragment:yx,lights_physical_pars_fragment:Sx,lights_fragment_begin:Mx,lights_fragment_maps:bx,lights_fragment_end:Tx,lightprobes_pars_fragment:wx,logdepthbuf_fragment:Ex,logdepthbuf_pars_fragment:Ax,logdepthbuf_pars_vertex:Cx,logdepthbuf_vertex:Rx,map_fragment:Px,map_pars_fragment:Ix,map_particle_fragment:Lx,map_particle_pars_fragment:Dx,metalnessmap_fragment:Nx,metalnessmap_pars_fragment:Ux,morphinstance_vertex:Ox,morphcolor_vertex:Fx,morphnormal_vertex:Bx,morphtarget_pars_vertex:zx,morphtarget_vertex:kx,normal_fragment_begin:Vx,normal_fragment_maps:Gx,normal_pars_fragment:Hx,normal_pars_vertex:Wx,normal_vertex:Xx,normalmap_pars_fragment:qx,clearcoat_normal_fragment_begin:Yx,clearcoat_normal_fragment_maps:Zx,clearcoat_pars_fragment:Jx,iridescence_pars_fragment:$x,opaque_fragment:Kx,packing:Qx,premultiplied_alpha_fragment:jx,project_vertex:tv,dithering_fragment:ev,dithering_pars_fragment:nv,roughnessmap_fragment:iv,roughnessmap_pars_fragment:sv,shadowmap_pars_fragment:rv,shadowmap_pars_vertex:ov,shadowmap_vertex:av,shadowmask_pars_fragment:lv,skinbase_vertex:cv,skinning_pars_vertex:hv,skinning_vertex:uv,skinnormal_vertex:fv,specularmap_fragment:dv,specularmap_pars_fragment:pv,tonemapping_fragment:mv,tonemapping_pars_fragment:gv,transmission_fragment:_v,transmission_pars_fragment:xv,uv_pars_fragment:vv,uv_pars_vertex:yv,uv_vertex:Sv,worldpos_vertex:Mv,background_vert:bv,background_frag:Tv,backgroundCube_vert:wv,backgroundCube_frag:Ev,cube_vert:Av,cube_frag:Cv,depth_vert:Rv,depth_frag:Pv,distance_vert:Iv,distance_frag:Lv,equirect_vert:Dv,equirect_frag:Nv,linedashed_vert:Uv,linedashed_frag:Ov,meshbasic_vert:Fv,meshbasic_frag:Bv,meshlambert_vert:zv,meshlambert_frag:kv,meshmatcap_vert:Vv,meshmatcap_frag:Gv,meshnormal_vert:Hv,meshnormal_frag:Wv,meshphong_vert:Xv,meshphong_frag:qv,meshphysical_vert:Yv,meshphysical_frag:Zv,meshtoon_vert:Jv,meshtoon_frag:$v,points_vert:Kv,points_frag:Qv,shadow_vert:jv,shadow_frag:ty,sprite_vert:ey,sprite_frag:ny},wt={common:{diffuse:{value:new ee(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Wt}},envmap:{envMap:{value:null},envMapRotation:{value:new Wt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Wt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Wt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Wt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Wt},normalScale:{value:new re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Wt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Wt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Wt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Wt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ee(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new ee(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0},uvTransform:{value:new Wt}},sprite:{diffuse:{value:new ee(16777215)},opacity:{value:1},center:{value:new re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}}},qi={basic:{uniforms:Tn([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.fog]),vertexShader:Kt.meshbasic_vert,fragmentShader:Kt.meshbasic_frag},lambert:{uniforms:Tn([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,wt.lights,{emissive:{value:new ee(0)},envMapIntensity:{value:1}}]),vertexShader:Kt.meshlambert_vert,fragmentShader:Kt.meshlambert_frag},phong:{uniforms:Tn([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,wt.lights,{emissive:{value:new ee(0)},specular:{value:new ee(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Kt.meshphong_vert,fragmentShader:Kt.meshphong_frag},standard:{uniforms:Tn([wt.common,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.roughnessmap,wt.metalnessmap,wt.fog,wt.lights,{emissive:{value:new ee(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag},toon:{uniforms:Tn([wt.common,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.gradientmap,wt.fog,wt.lights,{emissive:{value:new ee(0)}}]),vertexShader:Kt.meshtoon_vert,fragmentShader:Kt.meshtoon_frag},matcap:{uniforms:Tn([wt.common,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,{matcap:{value:null}}]),vertexShader:Kt.meshmatcap_vert,fragmentShader:Kt.meshmatcap_frag},points:{uniforms:Tn([wt.points,wt.fog]),vertexShader:Kt.points_vert,fragmentShader:Kt.points_frag},dashed:{uniforms:Tn([wt.common,wt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Kt.linedashed_vert,fragmentShader:Kt.linedashed_frag},depth:{uniforms:Tn([wt.common,wt.displacementmap]),vertexShader:Kt.depth_vert,fragmentShader:Kt.depth_frag},normal:{uniforms:Tn([wt.common,wt.bumpmap,wt.normalmap,wt.displacementmap,{opacity:{value:1}}]),vertexShader:Kt.meshnormal_vert,fragmentShader:Kt.meshnormal_frag},sprite:{uniforms:Tn([wt.sprite,wt.fog]),vertexShader:Kt.sprite_vert,fragmentShader:Kt.sprite_frag},background:{uniforms:{uvTransform:{value:new Wt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Kt.background_vert,fragmentShader:Kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Wt}},vertexShader:Kt.backgroundCube_vert,fragmentShader:Kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Kt.cube_vert,fragmentShader:Kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Kt.equirect_vert,fragmentShader:Kt.equirect_frag},distance:{uniforms:Tn([wt.common,wt.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Kt.distance_vert,fragmentShader:Kt.distance_frag},shadow:{uniforms:Tn([wt.lights,wt.fog,{color:{value:new ee(0)},opacity:{value:1}}]),vertexShader:Kt.shadow_vert,fragmentShader:Kt.shadow_frag}};qi.physical={uniforms:Tn([qi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Wt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Wt},clearcoatNormalScale:{value:new re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Wt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Wt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Wt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Wt},sheen:{value:0},sheenColor:{value:new ee(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Wt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Wt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Wt},transmissionSamplerSize:{value:new re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Wt},attenuationDistance:{value:0},attenuationColor:{value:new ee(0)},specularColor:{value:new ee(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Wt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Wt},anisotropyVector:{value:new re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Wt}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag};var th={r:0,b:0,g:0},iy=new Se,Mm=new Wt;Mm.set(-1,0,0,0,1,0,0,0,1);function sy(s,t,e,n,i,r){let o=new ee(0),a=i===!0?0:1,l,c,h=null,d=0,f=null;function u(v){let w=v.isScene===!0?v.background:null;if(w&&w.isTexture){let y=v.backgroundBlurriness>0;w=t.get(w,y)}return w}function m(v){let w=!1,y=u(v);y===null?p(o,a):y&&y.isColor&&(p(y,1),w=!0);let T=s.xr.getEnvironmentBlendMode();T==="additive"?e.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(s.autoClear||w)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function _(v,w){let y=u(w);y&&y.isCubeTexture?(c===void 0&&(c=new Je(new Vi(1,1,1),new Gi({name:"BackgroundCubeMaterial",uniforms:pr(qi.backgroundCube.uniforms),vertexShader:qi.backgroundCube.vertexShader,fragmentShader:qi.backgroundCube.fragmentShader,side:pn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,E,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(iy.makeRotationFromEuler(w.backgroundRotation)).transpose(),y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Mm),c.material.toneMapped=le.getTransfer(y.colorSpace)!==_e,(h!==y||d!==y.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,h=y,d=y.version,f=s.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Je(new sa(2,2),new Gi({name:"BackgroundMaterial",uniforms:pr(qi.background.uniforms),vertexShader:qi.background.vertexShader,fragmentShader:qi.background.fragmentShader,side:Bs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=le.getTransfer(y.colorSpace)!==_e,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||d!==y.version||f!==s.toneMapping)&&(l.material.needsUpdate=!0,h=y,d=y.version,f=s.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function p(v,w){v.getRGB(th,ef(s)),e.buffers.color.setClear(th.r,th.g,th.b,w,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(v,w=1){o.set(v),a=w,p(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(v){a=v,p(o,a)},render:m,addToRenderList:_,dispose:g}}function ry(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null),r=i,o=!1;function a(N,D,H,I,B){let X=!1,F=d(N,I,H,D);r!==F&&(r=F,c(r.object)),X=u(N,I,H,B),X&&m(N,I,H,B),B!==null&&t.update(B,s.ELEMENT_ARRAY_BUFFER),(X||o)&&(o=!1,y(N,D,H,I),B!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function l(){return s.createVertexArray()}function c(N){return s.bindVertexArray(N)}function h(N){return s.deleteVertexArray(N)}function d(N,D,H,I){let B=I.wireframe===!0,X=n[D.id];X===void 0&&(X={},n[D.id]=X);let F=N.isInstancedMesh===!0?N.id:0,Q=X[F];Q===void 0&&(Q={},X[F]=Q);let W=Q[H.id];W===void 0&&(W={},Q[H.id]=W);let R=W[B];return R===void 0&&(R=f(l()),W[B]=R),R}function f(N){let D=[],H=[],I=[];for(let B=0;B<e;B++)D[B]=0,H[B]=0,I[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:H,attributeDivisors:I,object:N,attributes:{},index:null}}function u(N,D,H,I){let B=r.attributes,X=D.attributes,F=0,Q=H.getAttributes();for(let W in Q)if(Q[W].location>=0){let tt=B[W],yt=X[W];if(yt===void 0&&(W==="instanceMatrix"&&N.instanceMatrix&&(yt=N.instanceMatrix),W==="instanceColor"&&N.instanceColor&&(yt=N.instanceColor)),tt===void 0||tt.attribute!==yt||yt&&tt.data!==yt.data)return!0;F++}return r.attributesNum!==F||r.index!==I}function m(N,D,H,I){let B={},X=D.attributes,F=0,Q=H.getAttributes();for(let W in Q)if(Q[W].location>=0){let tt=X[W];tt===void 0&&(W==="instanceMatrix"&&N.instanceMatrix&&(tt=N.instanceMatrix),W==="instanceColor"&&N.instanceColor&&(tt=N.instanceColor));let yt={};yt.attribute=tt,tt&&tt.data&&(yt.data=tt.data),B[W]=yt,F++}r.attributes=B,r.attributesNum=F,r.index=I}function _(){let N=r.newAttributes;for(let D=0,H=N.length;D<H;D++)N[D]=0}function p(N){g(N,0)}function g(N,D){let H=r.newAttributes,I=r.enabledAttributes,B=r.attributeDivisors;H[N]=1,I[N]===0&&(s.enableVertexAttribArray(N),I[N]=1),B[N]!==D&&(s.vertexAttribDivisor(N,D),B[N]=D)}function v(){let N=r.newAttributes,D=r.enabledAttributes;for(let H=0,I=D.length;H<I;H++)D[H]!==N[H]&&(s.disableVertexAttribArray(H),D[H]=0)}function w(N,D,H,I,B,X,F){F===!0?s.vertexAttribIPointer(N,D,H,B,X):s.vertexAttribPointer(N,D,H,I,B,X)}function y(N,D,H,I){_();let B=I.attributes,X=H.getAttributes(),F=D.defaultAttributeValues;for(let Q in X){let W=X[Q];if(W.location>=0){let R=B[Q];if(R===void 0&&(Q==="instanceMatrix"&&N.instanceMatrix&&(R=N.instanceMatrix),Q==="instanceColor"&&N.instanceColor&&(R=N.instanceColor)),R!==void 0){let tt=R.normalized,yt=R.itemSize,Ut=t.get(R);if(Ut===void 0)continue;let J=Ut.buffer,lt=Ut.type,_t=Ut.bytesPerElement,Mt=lt===s.INT||lt===s.UNSIGNED_INT||R.gpuType===gc;if(R.isInterleavedBufferAttribute){let ut=R.data,Nt=ut.isInterleavedBuffer===!0?ut.stride:ut.itemSize,de=R.offset;if(ut.isInstancedInterleavedBuffer||ut.isInstancedBufferAttribute){for(let Rt=0;Rt<W.locationSize;Rt++)g(W.location+Rt,ut.meshPerAttribute);N.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let Rt=0;Rt<W.locationSize;Rt++)p(W.location+Rt);s.bindBuffer(s.ARRAY_BUFFER,J);for(let Rt=0;Rt<W.locationSize;Rt++)w(W.location+Rt,yt/W.locationSize,lt,tt,Nt*_t,(de+yt/W.locationSize*Rt)*_t,Mt)}else{if(R.isInstancedBufferAttribute){for(let ut=0;ut<W.locationSize;ut++)g(W.location+ut,R.meshPerAttribute);N.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=R.meshPerAttribute*R.count)}else for(let ut=0;ut<W.locationSize;ut++)p(W.location+ut);s.bindBuffer(s.ARRAY_BUFFER,J);for(let ut=0;ut<W.locationSize;ut++)w(W.location+ut,yt/W.locationSize,lt,tt,yt*_t,yt/W.locationSize*ut*_t,Mt)}}else if(F!==void 0){let tt=F[Q];if(tt!==void 0)switch(tt.length){case 2:s.vertexAttrib2fv(W.location,tt);break;case 3:s.vertexAttrib3fv(W.location,tt);break;case 4:s.vertexAttrib4fv(W.location,tt);break;default:s.vertexAttrib1fv(W.location,tt)}}}}v()}function T(){P();for(let N in n){let D=n[N];for(let H in D){let I=D[H];for(let B in I){let X=I[B];for(let F in X)h(X[F].object),delete X[F];delete I[B]}}delete n[N]}}function E(N){if(n[N.id]===void 0)return;let D=n[N.id];for(let H in D){let I=D[H];for(let B in I){let X=I[B];for(let F in X)h(X[F].object),delete X[F];delete I[B]}}delete n[N.id]}function x(N){for(let D in n){let H=n[D];for(let I in H){let B=H[I];if(B[N.id]===void 0)continue;let X=B[N.id];for(let F in X)h(X[F].object),delete X[F];delete B[N.id]}}}function b(N){for(let D in n){let H=n[D],I=N.isInstancedMesh===!0?N.id:0,B=H[I];if(B!==void 0){for(let X in B){let F=B[X];for(let Q in F)h(F[Q].object),delete F[Q];delete B[X]}delete H[I],Object.keys(H).length===0&&delete n[D]}}}function P(){C(),o=!0,r!==i&&(r=i,c(r.object))}function C(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:P,resetDefaultState:C,dispose:T,releaseStatesOfGeometry:E,releaseStatesOfObject:b,releaseStatesOfProgram:x,initAttributes:_,enableAttribute:p,disableUnusedAttributes:v}}function oy(s,t,e){let n;function i(l){n=l}function r(l,c){s.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,h){h!==0&&(s.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let f=0;for(let u=0;u<h;u++)f+=c[u];e.update(f,n,1)}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function ay(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let x=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(x){return!(x!==Ni&&n.convert(x)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(x){let b=x===Di&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(x!==Yn&&x!==xi&&!b&&n.convert(x)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function l(x){if(x==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Vt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),f=e.logarithmicDepthBuffer===!0&&d===!1;e.reversedDepthBuffer===!0&&d===!1&&Vt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&d===!0&&Vt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let u=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),p=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),v=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),w=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),T=s.getParameter(s.MAX_SAMPLES),E=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:u,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:p,maxAttributes:g,maxVertexUniforms:v,maxVaryings:w,maxFragmentUniforms:y,maxSamples:T,samples:E}}function ly(s){let t=this,e=null,n=0,i=!1,r=!1,o=new Ri,a=new Wt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let u=d.length!==0||f||n!==0||i;return i=f,n=d.length,u},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){e=h(d,f,0)},this.setState=function(d,f,u){let m=d.clippingPlanes,_=d.clipIntersection,p=d.clipShadows,g=s.get(d);if(!i||m===null||m.length===0||r&&!p)r?h(null):c();else{let v=r?0:n,w=v*4,y=g.clippingState||null;l.value=y,y=h(m,f,w,u);for(let T=0;T!==w;++T)y[T]=e[T];g.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,f,u,m){let _=d!==null?d.length:0,p=null;if(_!==0){if(p=l.value,m!==!0||p===null){let g=u+_*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(p===null||p.length<g)&&(p=new Float32Array(g));for(let w=0,y=u;w!==_;++w,y+=4)o.copy(d[w]).applyMatrix4(v,a),o.normal.toArray(p,y),p[y+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,p}}var Aa=class extends ri{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new ta(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Vi(5,5,5),r=new Gi({name:"CubemapFromEquirect",uniforms:pr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:pn,blending:hr});r.uniforms.tEquirect.value=e;let o=new Je(i,r),a=e.minFilter;return e.minFilter===us&&(e.minFilter=Nn),new so(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}},tm=256,cy=3,hy=20,bm=256,Tm=16,uy=3,fy=new V,dy=new ee,ho=class s{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new so(1,10,null),this._boxMesh=new Je(new Vi(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,i=100,r={}){let{size:o=256,position:a=fy}=r,l=this._renderer;this._setSize(o);let c=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);let d=l.autoClear,f=l.autoClearColor,u=l.autoClearDepth,m=l.autoClearStencil,_=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,_===null&&(t.background=l.getClearColor(dy));let p=new so(n,i,h);return p.position.copy(a),p.update(l,t),l.autoClear=d,l.autoClearColor=f,l.autoClearDepth=u,l.autoClearStencil=m,t.background=_,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=im(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=nm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(tm,Jp(t))}_fromTexture(t,e){t.mapping===fr||t.mapping===ao?this._setSize(t.image.length===0?tm:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){let t=this._cubeSize,e=em(t,!1,!1),n=Math.log2(t)-cy;for(let i=0;i<=n;i++)e.texture.mipmaps.push({width:t>>i,height:t>>i});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=em(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){let i=this._boxMesh,r=this._cubeCamera;i.material=n,r.renderTarget=t,r.activeMipmapLevel=e;let o=t.width>>e;t.viewport.set(0,0,o,o),r.update(this._renderer,i),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===fr||t.mapping===ao?(this._cubemapMaterial===null&&(this._cubemapMaterial=im()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=nm()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=py(),this._integrationMaterial=my());let e=this._cubeSize,n=t.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/Tm);for(let o=0;o<=n;o++){let a=s.lodToRoughness(o,n);if(o>n-uy)r.roughness.value=a,this._renderCube(t,o,this._integrationMaterial);else{let l=a>0?Math.log2(e)+.5*Math.log2(6/(bm*Math.pow(a,4)))+.5:0;i.roughness.value=a,i.lodBias.value=l,this._renderCube(t,o,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=gy());let n=this._blurMaterial,i=n.uniforms,r=this._sourceTarget;i.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,i.envMap.value=r.texture,this._renderCube(t,0,n),i.envMap.value=t.texture,this._renderCube(r,0,n)}};function em(s,t,e){return new Aa(s,{minFilter:us,generateMipmaps:t,type:Di,colorSpace:Xo,depthBuffer:e})}function Ca(s,t,e){return new Gi({name:s,uniforms:t,vertexShader:Kt.cube_vert,fragmentShader:e,side:pn,blending:hr,depthTest:!1,depthWrite:!1})}function py(){return Ca("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${bm}u

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
	`)}function my(){return Ca("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Tm}},`

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
	`)}function gy(){return Ca("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${hy}
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
	`)}function nm(){return Ca("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function im(){return Ca("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function _y(s){let t=new WeakMap,e=new WeakMap,n=null;function i(f,u=!1){return f==null?null:u?o(f):r(f)}function r(f){if(f&&f.isTexture){let u=f.mapping;if(u===dc||u===pc)if(t.has(f)){let m=t.get(f).texture;return a(m,f.mapping)}else{let m=f.image;if(m&&m.height>0){let _=new Aa(m.height);return _.fromEquirectangularTexture(s,f),t.set(f,_),f.addEventListener("dispose",c),a(_.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){let u=f.mapping,m=u===dc||u===pc,_=u===fr||u===ao;if(m||_){let p=e.get(f),g=p!==void 0?p.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==g)return n===null&&(n=new ho(s)),p=m?n.fromEquirectangular(f,p):n.fromCubemap(f,p),p.texture.pmremVersion=f.pmremVersion,e.set(f,p),p.texture;if(p!==void 0)return p.texture;{let v=f.image;return m&&v&&v.height>0||_&&v&&l(v)?(n===null&&(n=new ho(s)),p=m?n.fromEquirectangular(f):n.fromCubemap(f),p.texture.pmremVersion=f.pmremVersion,e.set(f,p),f.addEventListener("dispose",h),p.texture):null}}}return f}function a(f,u){return u===dc?f.mapping=fr:u===pc&&(f.mapping=ao),f}function l(f){let u=0,m=6;for(let _=0;_<m;_++)f[_]!==void 0&&u++;return u===m}function c(f){let u=f.target;u.removeEventListener("dispose",c);let m=t.get(u);m!==void 0&&(t.delete(u),m.dispose())}function h(f){let u=f.target;u.removeEventListener("dispose",h);let m=e.get(u);m!==void 0&&(e.delete(u),m.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:d}}function xy(s){let t={};function e(n){if(t[n]!==void 0)return t[n];let i=s.getExtension(n);return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&Ho("WebGLRenderer: "+n+" extension not supported."),i}}}function vy(s,t,e,n){let i={},r=new WeakMap,o=new FinalizationRegistry(m=>delete i[m]);function a(m){l(m.target)}function l(m){m.index!==null&&t.remove(m.index);for(let p in m.attributes)t.remove(m.attributes[p]);m.removeEventListener("dispose",a),delete i[m.id],o.unregister(m);let _=r.get(m);_&&(t.remove(_),r.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,e.memory.geometries--}function c(m,_){return i[_.id]!==void 0||(_.addEventListener("dispose",a),i[_.id]=new WeakRef(_),o.register(_,_.id,_),e.memory.geometries++),_}function h(m){let _=m.attributes;for(let p in _)t.update(_[p],s.ARRAY_BUFFER)}function d(m){let _=m.index,p=m.attributes.position,g=0;if(p===void 0)return;let v=_!==null?_.array.length:p.array.length/3-1,w=p.count>=65535?Ko:$o,y=new w(Math.ceil(v/3)*6,1),T=y.array;if(_!==null){let x=_.array;g=_.version;for(let b=0,P=0;b<v;b+=3){let C=x[b+0],N=x[b+1],D=x[b+2];T[P++]=C,T[P++]=N,T[P++]=N,T[P++]=D,T[P++]=D,T[P++]=C}}else{g=p.version;for(let x=0,b=0;x<v;x+=3){let P=x+0,C=x+1,N=x+2;T[b++]=P,T[b++]=C,T[b++]=C,T[b++]=N,T[b++]=N,T[b++]=P}}y.version=g;let E=r.get(m);E&&t.remove(E),r.set(m,y)}function f(m){let _=r.get(m);if(_){let p=m.index;p!==null&&_.version<p.version&&d(m)}else d(m);return r.get(m)}function u(){for(let m in i){let _=i[m].deref();_!==void 0&&l(_)}}return{get:c,update:h,getWireframeAttribute:f,dispose:u}}function yy(s,t,e){let n;function i(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){s.drawElements(n,f,r,d*o),e.update(f,n,1)}function c(d,f,u){u!==0&&(s.drawElementsInstanced(n,f,r,d*o,u),e.update(f,n,u))}function h(d,f,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,u);let _=0;for(let p=0;p<u;p++)_+=f[p];e.update(_,n,1)}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Sy(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:Gt("WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function My(s,t,e){let n=new WeakMap,i=new Le;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,f=n.get(a);if(f===void 0||f.count!==d){let P=function(){x.dispose(),n.delete(a),a.removeEventListener("dispose",P)};f!==void 0&&f.texture.dispose();let u=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],w=0;u===!0&&(w=1),m===!0&&(w=2),_===!0&&(w=3);let y=a.attributes.position.count*w,T=1;y>t.maxTextureSize&&(T=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let E=new Float32Array(y*T*4*d),x=new Zo(E,y,T,d);x.type=xi,x.needsUpdate=!0;let b=w*4;for(let C=0;C<d;C++){let N=p[C],D=g[C],H=v[C],I=y*T*4*C;for(let B=0;B<N.count;B++){let X=B*b;u===!0&&(i.fromBufferAttribute(N,B),E[I+X+0]=i.x,E[I+X+1]=i.y,E[I+X+2]=i.z,E[I+X+3]=0),m===!0&&(i.fromBufferAttribute(D,B),E[I+X+4]=i.x,E[I+X+5]=i.y,E[I+X+6]=i.z,E[I+X+7]=0),_===!0&&(i.fromBufferAttribute(H,B),E[I+X+8]=i.x,E[I+X+9]=i.y,E[I+X+10]=i.z,E[I+X+11]=H.itemSize===4?i.w:1)}}f={count:d,texture:x,size:new re(y,T)},n.set(a,f),a.addEventListener("dispose",P)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let u=0;for(let _=0;_<c.length;_++)u+=c[_];let m=a.morphTargetsRelative?1:1-u;l.getUniforms().setValue(s,"morphTargetBaseInfluence",m),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function by(s,t,e,n,i){let r=new WeakMap;function o(c){let h=i.render.frame,d=c.geometry,f=t.get(c,d);if(r.get(f)!==h&&(t.update(f),r.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let u=c.skeleton;r.get(u)!==h&&(u.update(),r.set(u,h))}return f}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}var Ty={[Uu]:"LINEAR_TONE_MAPPING",[Ou]:"REINHARD_TONE_MAPPING",[Fu]:"CINEON_TONE_MAPPING",[ma]:"ACES_FILMIC_TONE_MAPPING",[zu]:"AGX_TONE_MAPPING",[ku]:"NEUTRAL_TONE_MAPPING",[Bu]:"CUSTOM_TONE_MAPPING"};function wy(s,t,e,n,i,r){let o=new ri(t,e,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,h=new ls;h.setAttribute("position",new Dn([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Dn([0,2,0,0,2,0],2));let d=new Kl({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new Je(h,d),u=new ua(-1,1,1,-1,0,1),m=null,_=null,p=!1,g,v=null,w=[],y=!1;this.setSize=function(T,E){o.setSize(T,E),a!==null&&a.setSize(T,E),l!==null&&l.setSize(T,E);for(let x=0;x<w.length;x++){let b=w[x];b.setSize&&b.setSize(T,E)}},this.setEffects=function(T){w=T,y=w.length>0&&w[0].isRenderPass===!0;let E=o.width,x=o.height;w.length>0&&a===null&&(a=new ri(E,x,{type:Di,depthBuffer:!1,stencilBuffer:!1}),l=new ri(E,x,{type:Di,depthBuffer:!1,stencilBuffer:!1}));let b=i===!0&&w.some(P=>P.needsDepthTexture===!0);b!==(o.depthTexture!==null)&&(b===!0&&c===null&&(c=new hs(E,x),r===!0&&(c.format=fs,c.type=dr)),o.dispose(),o.depthTexture=b?c:null,o.resolveDepthBuffer=b,o.storeMultisampledDepthBuffer=b);for(let P=0;P<w.length;P++){let C=w[P];C.setSize&&C.setSize(E,x),b&&C.needsDepthTexture===!0&&C.setDepthTexture&&C.setDepthTexture(c)}},this.begin=function(T,E){if(p||T.toneMapping===Wi&&w.length===0)return!1;if(v=E,E!==null){let x=E.width,b=E.height;(o.width!==x||o.height!==b)&&this.setSize(x,b)}return y===!1&&T.setRenderTarget(o),g=T.toneMapping,T.toneMapping=Wi,!0},this.hasRenderPass=function(){return y},this.end=function(T,E){T.toneMapping=g,p=!0;let x=o,b=a;for(let P=0;P<w.length;P++){let C=w[P];C.enabled!==!1&&(C.render(T,b,x,E),C.needsSwap!==!1&&(x=b,b=b===a?l:a))}if(m!==T.outputColorSpace||_!==T.toneMapping){m=T.outputColorSpace,_=T.toneMapping,d.defines={},le.getTransfer(m)===_e&&(d.defines.SRGB_TRANSFER="");let P=Ty[_];P&&(d.defines[P]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=x.texture,T.setRenderTarget(v),T.render(f,u),v=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),h.dispose(),d.dispose()}}var wm=new qn,Em=new hs(1,1),Am=new ea(1),Cm=new Zo,Rm=new ql,Pm=new ta,sm=[],rm=[],om=new Float32Array(16),am=new Float32Array(9),lm=new Float32Array(4);function uo(s,t,e){let n=s[0];if(n<=0||n>0)return s;let i=t*e,r=sm[i];if(r===void 0&&(r=new Float32Array(i),sm[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function nn(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function sn(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function ih(s,t){let e=rm[t];e===void 0&&(e=new Int32Array(t),rm[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function Ey(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Ay(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(nn(e,t))return;s.uniform2fv(this.addr,t),sn(e,t)}}function Cy(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(nn(e,t))return;s.uniform3fv(this.addr,t),sn(e,t)}}function Ry(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(nn(e,t))return;s.uniform4fv(this.addr,t),sn(e,t)}}function Py(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(nn(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),sn(e,t)}else{if(nn(e,n))return;lm.set(n),s.uniformMatrix2fv(this.addr,!1,lm),sn(e,n)}}function Iy(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(nn(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),sn(e,t)}else{if(nn(e,n))return;am.set(n),s.uniformMatrix3fv(this.addr,!1,am),sn(e,n)}}function Ly(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(nn(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),sn(e,t)}else{if(nn(e,n))return;om.set(n),s.uniformMatrix4fv(this.addr,!1,om),sn(e,n)}}function Dy(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Ny(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(nn(e,t))return;s.uniform2iv(this.addr,t),sn(e,t)}}function Uy(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(nn(e,t))return;s.uniform3iv(this.addr,t),sn(e,t)}}function Oy(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(nn(e,t))return;s.uniform4iv(this.addr,t),sn(e,t)}}function Fy(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function By(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(nn(e,t))return;s.uniform2uiv(this.addr,t),sn(e,t)}}function zy(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(nn(e,t))return;s.uniform3uiv(this.addr,t),sn(e,t)}}function ky(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(nn(e,t))return;s.uniform4uiv(this.addr,t),sn(e,t)}}function sh(s){return s.version===0&&(s.compareFunction=$u,s.needsUpdate=!0),s}function Vy(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?r=sh(Em):r=wm,e.setTexture2D(t||r,i)}function Gy(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Rm,i)}function Hy(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_CUBE_SHADOW?r=sh(Am):r=Pm,e.setTextureCube(t||r,i)}function Wy(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Cm,i)}function Xy(s){switch(s){case 5126:return Ey;case 35664:return Ay;case 35665:return Cy;case 35666:return Ry;case 35674:return Py;case 35675:return Iy;case 35676:return Ly;case 5124:case 35670:return Dy;case 35667:case 35671:return Ny;case 35668:case 35672:return Uy;case 35669:case 35673:return Oy;case 5125:return Fy;case 36294:return By;case 36295:return zy;case 36296:return ky;case 35678:case 36198:case 36298:case 36306:case 35682:return Vy;case 35679:case 36299:case 36307:return Gy;case 35680:case 36300:case 36308:case 36293:return Hy;case 36289:case 36303:case 36311:case 36292:return Wy}}function qy(s,t){s.uniform1fv(this.addr,t)}function Yy(s,t){let e=uo(t,this.size,2);s.uniform2fv(this.addr,e)}function Zy(s,t){let e=uo(t,this.size,3);s.uniform3fv(this.addr,e)}function Jy(s,t){let e=uo(t,this.size,4);s.uniform4fv(this.addr,e)}function $y(s,t){let e=uo(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Ky(s,t){let e=uo(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Qy(s,t){let e=uo(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function jy(s,t){s.uniform1iv(this.addr,t)}function tS(s,t){s.uniform2iv(this.addr,t)}function eS(s,t){s.uniform3iv(this.addr,t)}function nS(s,t){s.uniform4iv(this.addr,t)}function iS(s,t){s.uniform1uiv(this.addr,t)}function sS(s,t){s.uniform2uiv(this.addr,t)}function rS(s,t){s.uniform3uiv(this.addr,t)}function oS(s,t){s.uniform4uiv(this.addr,t)}function aS(s,t,e){let n=this.cache,i=t.length,r=ih(e,i);nn(n,r)||(s.uniform1iv(this.addr,r),sn(n,r));let o;this.type===s.SAMPLER_2D_SHADOW?o=sh(Em):o=wm;for(let a=0;a!==i;++a)e.setTexture2D(t[a]||o,r[a])}function lS(s,t,e){let n=this.cache,i=t.length,r=ih(e,i);nn(n,r)||(s.uniform1iv(this.addr,r),sn(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||Rm,r[o])}function cS(s,t,e){let n=this.cache,i=t.length,r=ih(e,i);nn(n,r)||(s.uniform1iv(this.addr,r),sn(n,r));let o;this.type===s.SAMPLER_CUBE_SHADOW?o=sh(Am):o=Pm;for(let a=0;a!==i;++a)e.setTextureCube(t[a]||o,r[a])}function hS(s,t,e){let n=this.cache,i=t.length,r=ih(e,i);nn(n,r)||(s.uniform1iv(this.addr,r),sn(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||Cm,r[o])}function uS(s){switch(s){case 5126:return qy;case 35664:return Yy;case 35665:return Zy;case 35666:return Jy;case 35674:return $y;case 35675:return Ky;case 35676:return Qy;case 5124:case 35670:return jy;case 35667:case 35671:return tS;case 35668:case 35672:return eS;case 35669:case 35673:return nS;case 5125:return iS;case 36294:return sS;case 36295:return rS;case 36296:return oS;case 35678:case 36198:case 36298:case 36306:case 35682:return aS;case 35679:case 36299:case 36307:return lS;case 35680:case 36300:case 36308:case 36293:return cS;case 36289:case 36303:case 36311:case 36292:return hS}}var df=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Xy(e.type)}},pf=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=uS(e.type)}},mf=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(t,e[a.id],n)}}},uf=/(\w+)(\])?(\[|\.)?/g;function cm(s,t){s.seq.push(t),s.map[t.id]=t}function fS(s,t,e){let n=s.name,i=n.length;for(uf.lastIndex=0;;){let r=uf.exec(n),o=uf.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){cm(e,c===void 0?new df(a,s,t):new pf(a,s,t));break}else{let d=e.map[a];d===void 0&&(d=new mf(a),cm(e,d)),e=d}}}var co=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);fS(a,l,this)}let i=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(o):r.push(o);i.length>0&&(this.seq=i.concat(r))}setValue(t,e,n,i){let r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,r=t.length;i!==r;++i){let o=t[i];o.id in e&&n.push(o)}return n}};function hm(s,t,e){let n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}var dS=37297,pS=0;function mS(s,t){let e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var um=new Wt;function gS(s){le._getMatrix(um,le.workingColorSpace,s);let t=`mat3( ${um.elements.map(e=>e.toFixed(4))} )`;switch(le.getTransfer(s)){case qo:return[t,"LinearTransferOETF"];case _e:return[t,"sRGBTransferOETF"];default:return Vt("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function fm(s,t,e){let n=s.getShaderParameter(t,s.COMPILE_STATUS),r=(s.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+mS(s.getShaderSource(t),a)}else return r}function _S(s,t){let e=gS(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var xS={[Uu]:"Linear",[Ou]:"Reinhard",[Fu]:"Cineon",[ma]:"ACESFilmic",[zu]:"AgX",[ku]:"Neutral",[Bu]:"Custom"};function vS(s,t){let e=xS[t];return e===void 0?(Vt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var eh=new V;function yS(){le.getLuminanceCoefficients(eh);let s=eh.x.toFixed(4),t=eh.y.toFixed(4),e=eh.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function SS(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ea).join(`
`)}function MS(s){let t=[];for(let e in s){let n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function bS(s,t){let e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(t,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function Ea(s){return s!==""}function dm(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function pm(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var TS=/^[ \t]*#include +<([\w\d./]+)>/gm;function gf(s){return s.replace(TS,wS)}function wS(s,t){let e=Kt[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return gf(e)}var ES=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function mm(s){return s.replace(ES,AS)}function AS(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function gm(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}var CS={[pa]:"SHADOWMAP_TYPE_PCF",[ro]:"SHADOWMAP_TYPE_VSM"};function RS(s){return CS[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var PS={[ao]:"ENVMAP_MODE_REFRACTION"};function IS(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":PS[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}var LS={[fc]:"ENVMAP_BLENDING_MULTIPLY",[Dp]:"ENVMAP_BLENDING_MIX",[Np]:"ENVMAP_BLENDING_ADD"};function DS(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":LS[s.combine]||"ENVMAP_BLENDING_NONE"}function NS(s,t,e,n){let i=s.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=RS(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=IS(e),d=DS(e),f=SS(e),u=MS(r),m=i.createProgram(),_,p,g=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(_=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u].filter(Ea).join(`
`),_.length>0&&(_+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u].filter(Ea).join(`
`),p.length>0&&(p+=`
`)):(_=[gm(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ea).join(`
`),p=[gm(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Wi?"#define TONE_MAPPING":"",e.toneMapping!==Wi?Kt.tonemapping_pars_fragment:"",e.toneMapping!==Wi?vS("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Kt.colorspace_pars_fragment,_S("linearToOutputTexel",e.outputColorSpace),yS(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ea).join(`
`)),o=gf(o),o=dm(o,e),o=pm(o,e),a=gf(a),a=dm(a,e),a=pm(a,e),o=mm(o),a=mm(a),e.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,_=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,p=["#define varying in",e.glslVersion===Ku?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ku?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let v=g+_+o,w=g+p+a,y=hm(i,i.VERTEX_SHADER,v),T=hm(i,i.FRAGMENT_SHADER,w);i.attachShader(m,y),i.attachShader(m,T),e.index0AttributeName!==void 0?i.bindAttribLocation(m,0,e.index0AttributeName):e.hasPositionAttribute===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m);function E(C){if(s.debug.checkShaderErrors){let N=i.getProgramInfoLog(m)||"",D=i.getShaderInfoLog(y)||"",H=i.getShaderInfoLog(T)||"",I=N.trim(),B=D.trim(),X=H.trim(),F=!0,Q=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(F=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,m,y,T);else{let W=fm(i,y,"vertex"),R=fm(i,T,"fragment");Gt("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+I+`
`+W+`
`+R)}else I!==""?Vt("WebGLProgram: Program Info Log:",I):(B===""||X==="")&&(Q=!1);Q&&(C.diagnostics={runnable:F,programLog:I,vertexShader:{log:B,prefix:_},fragmentShader:{log:X,prefix:p}})}i.deleteShader(y),i.deleteShader(T),x=new co(i,m),b=bS(i,m)}let x;this.getUniforms=function(){return x===void 0&&E(this),x};let b;this.getAttributes=function(){return b===void 0&&E(this),b};let P=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=i.getProgramParameter(m,dS)),P},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=pS++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=y,this.fragmentShader=T,this}var US=0,_f=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let i=this._getShaderCacheForMaterial(t);return i.has(e)===!1&&(i.add(e),e.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new xf(t),e.set(t,n)),n}},xf=class{constructor(t){this.id=US++,this.code=t,this.usedTimes=0}};function OS(s){return s===zs||s===Sa||s===Ma}function FS(s,t,e,n,i,r){let o=new Jo,a=new _f,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function u(x){return l.add(x),x===0?"uv":`uv${x}`}function m(x,b,P,C,N,D){let H=C.fog,I=N.geometry,B=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?C.environment:null,X=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,F=t.get(x.envMap||B,X),Q=f[x.type],W=n.precision;x.precision!==null&&(W=n.getMaxPrecision(x.precision),W!==x.precision&&Vt("WebGLProgram.getParameters:",x.precision,"not supported, using",W,"instead."));let R=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,tt=R!==void 0?R.length:0,yt=0;I.morphAttributes.position!==void 0&&(yt=1),I.morphAttributes.normal!==void 0&&(yt=2),I.morphAttributes.color!==void 0&&(yt=3);let Ut,J,lt,_t;if(Q){let nt=qi[Q];Ut=nt.vertexShader,J=nt.fragmentShader}else{Ut=x.vertexShader,J=x.fragmentShader;let nt=a.getVertexShaderStage(x),Et=a.getFragmentShaderStage(x);a.update(x,nt,Et),lt=nt.id,_t=Et.id}let Mt=s.getRenderTarget(),ut=s.state.buffers.depth.getReversed(),Nt=N.isInstancedMesh===!0,de=N.isBatchedMesh===!0,Rt=!!x.map,bt=!!x.matcap,Ct=!!F,Tt=Ct&&F.isPMREMTexture===!0,ne=!!x.aoMap,Jt=!!x.lightMap,Y=!!x.bumpMap&&x.wireframe===!1,Xt=!!x.normalMap,ye=!!x.displacementMap,zt=!!x.emissiveMap,$t=!!x.metalnessMap,Re=!!x.roughnessMap,Ne=x.anisotropy>0,O=x.clearcoat>0,pe=x.diffuseRoughness>0,he=x.dispersion>0,Ht=x.retroreflectivity>0,ft=x.iridescence>0,fe=x.sheen>0,Ot=x.transmission>0,kt=Ne&&!!x.anisotropyMap,A=O&&!!x.clearcoatMap,S=O&&!!x.clearcoatNormalMap,k=O&&!!x.clearcoatRoughnessMap,rt=pe&&!!x.diffuseRoughnessMap,it=ft&&!!x.iridescenceMap,ht=ft&&!!x.iridescenceThicknessMap,gt=fe&&!!x.sheenColorMap,G=fe&&!!x.sheenRoughnessMap,j=!!x.specularMap,ct=!!x.specularColorMap,L=!!x.specularIntensityMap,K=Ot&&!!x.transmissionMap,$=Ot&&!!x.thicknessMap,dt=!!x.gradientMap,at=!!x.alphaMap,pt=x.alphaTest>0,ot=!!x.alphaHash,mt=!!x.extensions,st=Wi;x.toneMapped&&(Mt===null||Mt.isXRRenderTarget===!0)&&(st=s.toneMapping);let et=Tt?F.isCompressedCubeTexture?F.image[0].mipmaps:F.mipmaps:null,xt={shaderID:Q,shaderType:x.type,shaderName:x.name,vertexShader:Ut,fragmentShader:J,defines:x.defines,customVertexShaderID:lt,customFragmentShaderID:_t,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:W,batching:de,batchingColor:de&&N._colorsTexture!==null,instancing:Nt,instancingColor:Nt&&N.instanceColor!==null,instancingMorph:Nt&&N.morphTexture!==null,outputColorSpace:Mt===null?s.outputColorSpace:Mt.isXRRenderTarget===!0?Mt.texture.colorSpace:le.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Rt,matcap:bt,envMap:Ct,envMapMode:Ct&&F.mapping,envMapPMREM:Tt,envMapMaxLod:Tt?et.length-1:null,envMapSize:Tt?et[0].width:null,aoMap:ne,lightMap:Jt,bumpMap:Y,normalMap:Xt,displacementMap:ye,emissiveMap:zt,normalMapObjectSpace:Xt&&x.normalMapType===Fp,normalMapTangentSpace:Xt&&x.normalMapType===ba,packedNormalMap:Xt&&x.normalMapType===ba&&OS(x.normalMap.format),metalnessMap:$t,roughnessMap:Re,anisotropy:Ne,anisotropyMap:kt,clearcoat:O,clearcoatMap:A,clearcoatNormalMap:S,clearcoatRoughnessMap:k,diffuseRoughness:pe,diffuseRoughnessMap:rt,dispersion:he,retroreflection:Ht,iridescence:ft,iridescenceMap:it,iridescenceThicknessMap:ht,sheen:fe,sheenColorMap:gt,sheenRoughnessMap:G,specularMap:j,specularColorMap:ct,specularIntensityMap:L,transmission:Ot,transmissionMap:K,thicknessMap:$,gradientMap:dt,opaque:x.transparent===!1&&x.blending===oo&&x.alphaToCoverage===!1,alphaMap:at,alphaTest:pt,alphaHash:ot,combine:x.combine,mapUv:Rt&&u(x.map.channel),aoMapUv:ne&&u(x.aoMap.channel),lightMapUv:Jt&&u(x.lightMap.channel),bumpMapUv:Y&&u(x.bumpMap.channel),normalMapUv:Xt&&u(x.normalMap.channel),displacementMapUv:ye&&u(x.displacementMap.channel),emissiveMapUv:zt&&u(x.emissiveMap.channel),metalnessMapUv:$t&&u(x.metalnessMap.channel),roughnessMapUv:Re&&u(x.roughnessMap.channel),anisotropyMapUv:kt&&u(x.anisotropyMap.channel),clearcoatMapUv:A&&u(x.clearcoatMap.channel),clearcoatNormalMapUv:S&&u(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:k&&u(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:rt&&u(x.diffuseRoughnessMap.channel),iridescenceMapUv:it&&u(x.iridescenceMap.channel),iridescenceThicknessMapUv:ht&&u(x.iridescenceThicknessMap.channel),sheenColorMapUv:gt&&u(x.sheenColorMap.channel),sheenRoughnessMapUv:G&&u(x.sheenRoughnessMap.channel),specularMapUv:j&&u(x.specularMap.channel),specularColorMapUv:ct&&u(x.specularColorMap.channel),specularIntensityMapUv:L&&u(x.specularIntensityMap.channel),transmissionMapUv:K&&u(x.transmissionMap.channel),thicknessMapUv:$&&u(x.thicknessMap.channel),alphaMapUv:at&&u(x.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(Xt||Ne),vertexNormals:!!I.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!I.attributes.uv&&(Rt||at),fog:!!H,useFog:x.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||I.attributes.normal===void 0&&Xt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ut,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:tt,morphTextureStride:yt,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:D.filter(nt=>nt.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:s.shadowMap.enabled&&P.length>0,shadowMapType:s.shadowMap.type,toneMapping:st,decodeVideoTexture:Rt&&x.map.isVideoTexture===!0&&le.getTransfer(x.map.colorSpace)===_e,decodeVideoTextureEmissive:zt&&x.emissiveMap.isVideoTexture===!0&&le.getTransfer(x.emissiveMap.colorSpace)===_e,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Hi,flipSided:x.side===pn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:mt&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(mt&&x.extensions.multiDraw===!0||de)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return xt.vertexUv1s=l.has(1),xt.vertexUv2s=l.has(2),xt.vertexUv3s=l.has(3),l.clear(),xt}function _(x){let b=[];if(x.shaderID?b.push(x.shaderID):(b.push(x.customVertexShaderID),b.push(x.customFragmentShaderID)),x.defines!==void 0)for(let P in x.defines)b.push(P),b.push(x.defines[P]);return x.isRawShaderMaterial===!1&&(p(b,x),g(b,x),b.push(s.outputColorSpace)),b.push(x.customProgramCacheKey),b.join()}function p(x,b){x.push(b.precision),x.push(b.outputColorSpace),x.push(b.envMapMode),x.push(b.envMapPMREM),x.push(b.envMapMaxLod),x.push(b.envMapSize),x.push(b.mapUv),x.push(b.alphaMapUv),x.push(b.lightMapUv),x.push(b.aoMapUv),x.push(b.bumpMapUv),x.push(b.normalMapUv),x.push(b.displacementMapUv),x.push(b.emissiveMapUv),x.push(b.metalnessMapUv),x.push(b.roughnessMapUv),x.push(b.anisotropyMapUv),x.push(b.clearcoatMapUv),x.push(b.clearcoatNormalMapUv),x.push(b.clearcoatRoughnessMapUv),x.push(b.diffuseRoughnessMapUv),x.push(b.iridescenceMapUv),x.push(b.iridescenceThicknessMapUv),x.push(b.sheenColorMapUv),x.push(b.sheenRoughnessMapUv),x.push(b.specularMapUv),x.push(b.specularColorMapUv),x.push(b.specularIntensityMapUv),x.push(b.transmissionMapUv),x.push(b.thicknessMapUv),x.push(b.combine),x.push(b.fogExp2),x.push(b.sizeAttenuation),x.push(b.morphTargetsCount),x.push(b.numSunLights),x.push(b.numDirLights),x.push(b.numPointLights),x.push(b.numSpotLights),x.push(b.numSpotLightMaps),x.push(b.numHemiLights),x.push(b.numRectAreaLights),x.push(b.numSunLightShadows),x.push(b.numDirLightShadows),x.push(b.numPointLightShadows),x.push(b.numSpotLightShadows),x.push(b.numSpotLightShadowsWithMaps),x.push(b.numLightProbes),x.push(b.numLightProbeGrids),x.push(b.shadowMapType),x.push(b.toneMapping),x.push(b.numClippingPlanes),x.push(b.numClipIntersection),x.push(b.depthPacking)}function g(x,b){o.disableAll(),b.instancing&&o.enable(0),b.instancingColor&&o.enable(1),b.instancingMorph&&o.enable(2),b.matcap&&o.enable(3),b.envMap&&o.enable(4),b.normalMapObjectSpace&&o.enable(5),b.normalMapTangentSpace&&o.enable(6),b.clearcoat&&o.enable(7),b.iridescence&&o.enable(8),b.alphaTest&&o.enable(9),b.vertexColors&&o.enable(10),b.vertexAlphas&&o.enable(11),b.vertexUv1s&&o.enable(12),b.vertexUv2s&&o.enable(13),b.vertexUv3s&&o.enable(14),b.vertexTangents&&o.enable(15),b.anisotropy&&o.enable(16),b.alphaHash&&o.enable(17),b.batching&&o.enable(18),b.dispersion&&o.enable(19),b.retroreflection&&o.enable(24),b.diffuseRoughness&&o.enable(25),b.batchingColor&&o.enable(20),b.gradientMap&&o.enable(21),b.packedNormalMap&&o.enable(22),b.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),b.numLightProbeGrids>0&&o.enable(22),b.hasPositionAttribute&&o.enable(23),x.push(o.mask)}function v(x){let b=f[x.type],P;if(b){let C=qi[b];P=Kp.clone(C.uniforms)}else P=x.uniforms;return P}function w(x,b){let P=h.get(b);return P!==void 0?++P.usedTimes:(P=new NS(s,b,x,i),c.push(P),h.set(b,P)),P}function y(x){if(--x.usedTimes===0){let b=c.indexOf(x);c[b]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function T(x){a.remove(x)}function E(){a.dispose()}return{getParameters:m,getProgramCacheKey:_,getUniforms:v,acquireProgram:w,releaseProgram:y,releaseShaderCache:T,programs:c,dispose:E}}function BS(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function zS(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.materialVariant!==t.materialVariant?s.materialVariant-t.materialVariant:s.z!==t.z?s.z-t.z:s.id-t.id}function _m(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function xm(){let s=[],t=0,e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(f){let u=0;return f.isInstancedMesh&&(u+=2),f.isSkinnedMesh&&(u+=1),u}function a(f,u,m,_,p,g){let v=s[t];return v===void 0?(v={id:f.id,object:f,geometry:u,material:m,materialVariant:o(f),groupOrder:_,renderOrder:f.renderOrder,z:p,group:g},s[t]=v):(v.id=f.id,v.object=f,v.geometry=u,v.material=m,v.materialVariant=o(f),v.groupOrder=_,v.renderOrder=f.renderOrder,v.z=p,v.group=g),t++,v}function l(f,u,m,_,p,g,v){v.reversedDepth===!0&&(p=-p);let w=a(f,u,m,_,p,g);m.transmission>0?n.push(w):m.transparent===!0?i.push(w):e.push(w)}function c(f,u,m,_,p,g){let v=a(f,u,m,_,p,g);m.transmission>0?n.unshift(v):m.transparent===!0?i.unshift(v):e.unshift(v)}function h(f,u){e.length>1&&e.sort(f||zS),n.length>1&&n.sort(u||_m),i.length>1&&i.sort(u||_m)}function d(){for(let f=t,u=s.length;f<u;f++){let m=s[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:l,unshift:c,finish:d,sort:h}}function kS(){let s=new WeakMap;function t(n,i){let r=s.get(n),o;return r===void 0?(o=new xm,s.set(n,[o])):i>=r.length?(o=new xm,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function VS(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new V,color:new ee};break;case"SpotLight":e={position:new V,direction:new V,color:new ee,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new V,color:new ee,distance:0,decay:0};break;case"HemisphereLight":e={direction:new V,skyColor:new ee,groundColor:new ee};break;case"RectAreaLight":e={color:new ee,position:new V,halfWidth:new V,halfHeight:new V};break}return s[t.id]=e,e}}}function GS(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var HS=0;function WS(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function XS(s){let t=new VS,e=GS(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new V);let i=new V,r=new Se,o=new Se;function a(c){let h=0,d=0,f=0;for(let D=0;D<9;D++)n.probe[D].set(0,0,0);let u=0,m=0,_=0,p=0,g=0,v=0,w=0,y=0,T=0,E=0,x=0,b=0,P=0,C=0;c.sort(WS);for(let D=0,H=c.length;D<H;D++){let I=c[D],B=I.color,X=I.intensity,F=I.distance,Q=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===zs?Q=I.shadow.map.texture:Q=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=B.r*X,d+=B.g*X,f+=B.b*X;else if(I.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(I.sh.coefficients[W],X);C++}else if(I.isSunLight){let W=t.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let R=I.shadow,tt=e.get(I);tt.shadowIntensity=R.intensity,tt.shadowBias=R.bias,tt.shadowNormalBias=R.normalBias,tt.shadowRadius=R.radius,tt.shadowMapSize.copy(R.mapSize).multiply(R.getFrameExtents()),n.sunShadow[m]=tt,n.sunShadowMap[m]=Q;let yt=R.getViewportCount();for(let Ut=0;Ut<yt;Ut++)n.sunShadowMatrix[_+Ut]=R.getMatrix(Ut),n.sunShadowCascade[_+Ut]=R._cascadeData[Ut];_+=yt,m++}n.sun[u]=W,u++}else if(I.isDirectionalLight){let W=t.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let R=I.shadow,tt=e.get(I);tt.shadowIntensity=R.intensity,tt.shadowBias=R.bias,tt.shadowNormalBias=R.normalBias,tt.shadowRadius=R.radius,tt.shadowMapSize=R.mapSize,n.directionalShadow[p]=tt,n.directionalShadowMap[p]=Q,n.directionalShadowMatrix[p]=I.shadow.matrix,T++}n.directional[p]=W,p++}else if(I.isSpotLight){let W=t.get(I);W.position.setFromMatrixPosition(I.matrixWorld),W.color.copy(B).multiplyScalar(X),W.distance=F,W.coneCos=Math.cos(I.angle),W.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),W.decay=I.decay,n.spot[v]=W;let R=I.shadow;if(I.map&&(n.spotLightMap[b]=I.map,b++,R.updateMatrices(I),I.castShadow&&P++),n.spotLightMatrix[v]=R.matrix,I.castShadow){let tt=e.get(I);tt.shadowIntensity=R.intensity,tt.shadowBias=R.bias,tt.shadowNormalBias=R.normalBias,tt.shadowRadius=R.radius,tt.shadowMapSize=R.mapSize,n.spotShadow[v]=tt,n.spotShadowMap[v]=Q,x++}v++}else if(I.isRectAreaLight){let W=t.get(I);W.color.copy(B).multiplyScalar(X),W.halfWidth.set(I.width*.5,0,0),W.halfHeight.set(0,I.height*.5,0),n.rectArea[w]=W,w++}else if(I.isPointLight){let W=t.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),W.distance=I.distance,W.decay=I.decay,I.castShadow){let R=I.shadow,tt=e.get(I);tt.shadowIntensity=R.intensity,tt.shadowBias=R.bias,tt.shadowNormalBias=R.normalBias,tt.shadowRadius=R.radius,tt.shadowMapSize=R.mapSize,tt.shadowCameraNear=R.camera.near,tt.shadowCameraFar=R.camera.far,n.pointShadow[g]=tt,n.pointShadowMap[g]=Q,n.pointShadowMatrix[g]=I.shadow.matrix,E++}n.point[g]=W,g++}else if(I.isHemisphereLight){let W=t.get(I);W.skyColor.copy(I.color).multiplyScalar(X),W.groundColor.copy(I.groundColor).multiplyScalar(X),n.hemi[y]=W,y++}}w>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=wt.LTC_FLOAT_1,n.rectAreaLTC2=wt.LTC_FLOAT_2):(n.rectAreaLTC1=wt.LTC_HALF_1,n.rectAreaLTC2=wt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=f;let N=n.hash;(N.sunLength!==u||N.directionalLength!==p||N.pointLength!==g||N.spotLength!==v||N.rectAreaLength!==w||N.hemiLength!==y||N.numSunShadows!==m||N.numDirectionalShadows!==T||N.numPointShadows!==E||N.numSpotShadows!==x||N.numSpotMaps!==b||N.numLightProbes!==C)&&(n.sun.length=u,n.directional.length=p,n.spot.length=v,n.rectArea.length=w,n.point.length=g,n.hemi.length=y,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.directionalShadowMatrix.length=T,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=x,n.spotShadowMap.length=x,n.spotLightMatrix.length=x+b-P,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=C,N.sunLength=u,N.directionalLength=p,N.pointLength=g,N.spotLength=v,N.rectAreaLength=w,N.hemiLength=y,N.numSunShadows=m,N.numDirectionalShadows=T,N.numPointShadows=E,N.numSpotShadows=x,N.numSpotMaps=b,N.numLightProbes=C,n.version=HS++)}function l(c,h){let d=0,f=0,u=0,m=0,_=0,p=0,g=h.matrixWorldInverse;for(let v=0,w=c.length;v<w;v++){let y=c[v];if(y.isSunLight){let T=n.sun[d];T.direction.setFromMatrixPosition(y.matrixWorld),T.direction.transformDirection(g),d++}else if(y.isDirectionalLight){let T=n.directional[f];T.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(i),T.direction.transformDirection(g),f++}else if(y.isSpotLight){let T=n.spot[m];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(g),T.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(i),T.direction.transformDirection(g),m++}else if(y.isRectAreaLight){let T=n.rectArea[_];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(g),o.identity(),r.copy(y.matrixWorld),r.premultiply(g),o.extractRotation(r),T.halfWidth.set(y.width*.5,0,0),T.halfHeight.set(0,y.height*.5,0),T.halfWidth.applyMatrix4(o),T.halfHeight.applyMatrix4(o),_++}else if(y.isPointLight){let T=n.point[u];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(g),u++}else if(y.isHemisphereLight){let T=n.hemi[p];T.direction.setFromMatrixPosition(y.matrixWorld),T.direction.transformDirection(g),p++}}}return{setup:a,setupView:l,state:n}}function vm(s){let t=new XS(s),e=[],n=[],i=[];function r(d){h.camera=d,e.length=0,n.length=0,i.length=0}function o(d){d.isLightProbeGrid?i.push(d):e.push(d)}function a(d){n.push(d)}function l(){t.setup(e),i.sort((d,f)=>d.priority-f.priority||d.id-f.id)}function c(d){t.setupView(e,d)}let h={lightsArray:e,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function qS(s){let t=new WeakMap;function e(i,r=0){let o=t.get(i),a;return o===void 0?(a=new vm(s),t.set(i,[a])):r>=o.length?(a=new vm(s),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var YS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ZS=`uniform sampler2D shadow_pass;
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
}`,JS=[new V(1,0,0),new V(-1,0,0),new V(0,1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1)],$S=[new V(0,-1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1),new V(0,-1,0),new V(0,-1,0)],ym=new Se,wa=new V,ff=new V;function KS(s,t,e){let n=new Ns,i=new re,r=new re,o=new Le,a=new Ql,l=new jl,c={},h=e.maxTextureSize,d={[Bs]:pn,[pn]:Bs,[Hi]:Hi},f=new Gi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new re},radius:{value:4}},vertexShader:YS,fragmentShader:ZS}),u=f.clone();u.defines.HORIZONTAL_PASS=1;let m=new ls;m.setAttribute("position",new Pi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Je(m,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=pa;let g=this.type;this.render=function(E,x,b){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||E.length===0)return;this.type===pp&&(Vt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=pa);let P=s.getRenderTarget(),C=s.getActiveCubeFace(),N=s.getActiveMipmapLevel(),D=s.state;D.setBlending(hr),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let H=g!==this.type;H&&x.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(B=>B.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,B=E.length;I<B;I++){let X=E[I],F=X.shadow;if(F===void 0){Vt("WebGLShadowMap:",X,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;i.copy(F.mapSize);let Q=F.getFrameExtents();i.multiply(Q),r.copy(F.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/Q.x),i.x=r.x*Q.x,F.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/Q.y),i.y=r.y*Q.y,F.mapSize.y=r.y));let W=s.state.buffers.depth.getReversed();if(F.camera._reversedDepth=W,F.map===null||H===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===ro){if(X.isPointLight){Vt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new ri(i.x,i.y,{format:zs,type:Di,minFilter:Nn,magFilter:Nn,generateMipmaps:!1}),F.map.texture.name=X.name+".shadowMap",F.map.depthTexture=new hs(i.x,i.y,xi),F.map.depthTexture.name=X.name+".shadowMapDepth",F.map.depthTexture.format=as,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=hn,F.map.depthTexture.magFilter=hn}else X.isPointLight?(F.map=new Aa(i.x),F.map.depthTexture=new ea(i.x,Li)):(F.map=new ri(i.x,i.y),F.map.depthTexture=new hs(i.x,i.y,Li)),F.map.depthTexture.name=X.name+".shadowMap",F.map.depthTexture.format=as,this.type===pa?(F.map.depthTexture.compareFunction=W?Ju:Zu,F.map.depthTexture.minFilter=Nn,F.map.depthTexture.magFilter=Nn):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=hn,F.map.depthTexture.magFilter=hn);F.camera.updateProjectionMatrix()}F.map.isWebGLCubeRenderTarget!==!0&&(F.map.width!==i.x||F.map.height!==i.y)&&F.map.setSize(i.x,i.y);let R=F.map.isWebGLCubeRenderTarget?6:F.getViewportCount();X.isPointLight!==!0&&F.updateMatrices(X,b);let tt=(F.camera.layers.mask&4294967294)!==0?F.camera.layers:b.layers;for(let yt=0;yt<R;yt++){let Ut=F.getCamera(yt);if(X.isPointLight){let J=F.camera,lt=F.matrix,_t=X.distance||J.far;_t!==J.far&&(J.far=_t,J.updateProjectionMatrix()),wa.setFromMatrixPosition(X.matrixWorld),J.position.copy(wa),ff.copy(J.position),ff.add(JS[yt]),J.up.copy($S[yt]),J.lookAt(ff),J.updateMatrixWorld(),lt.makeTranslation(-wa.x,-wa.y,-wa.z),ym.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),F._frustum.setFromProjectionMatrix(ym,J.coordinateSystem,J.reversedDepth)}if(F.map.isWebGLCubeRenderTarget)s.setRenderTarget(F.map,yt),s.clear();else{yt===0&&(s.setRenderTarget(F.map),s.clear());let J=F.getViewport(yt);o.set(r.x*J.x,r.y*J.y,r.x*J.z,r.y*J.w),D.viewport(o)}n=F.getFrustum(yt),y(x,b,Ut,X,tt,this.type)}F.isPointLightShadow!==!0&&this.type===ro&&v(F,b),F.needsUpdate=!1}g=this.type,p.needsUpdate=!1,s.setRenderTarget(P,C,N)};function v(E,x){let b=t.update(_);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,u.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,u.needsUpdate=!0),E.mapPass===null?E.mapPass=new ri(i.x,i.y,{format:zs,type:Di}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),f.uniforms.shadow_pass.value=E.map.depthTexture,f.uniforms.resolution.value.set(E.map.width,E.map.height),f.uniforms.radius.value=E.radius,s.setRenderTarget(E.mapPass),s.clear(),s.renderBufferDirect(x,null,b,f,_,null),u.uniforms.shadow_pass.value=E.mapPass.texture,u.uniforms.resolution.value.set(E.map.width,E.map.height),u.uniforms.radius.value=E.radius,s.setRenderTarget(E.map),s.clear(),s.renderBufferDirect(x,null,b,u,_,null)}function w(E,x,b,P){let C=null,N=b.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(N!==void 0)C=N;else if(C=b.isPointLight===!0?l:a,s.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){let D=C.uuid,H=x.uuid,I=c[D];I===void 0&&(I={},c[D]=I);let B=I[H];B===void 0&&(B=C.clone(),I[H]=B,x.addEventListener("dispose",T)),C=B}if(C.visible=x.visible,C.wireframe=x.wireframe,P===ro?C.side=x.shadowSide!==null?x.shadowSide:x.side:C.side=x.shadowSide!==null?x.shadowSide:d[x.side],C.alphaMap=x.alphaMap,C.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,C.map=x.map,C.clipShadows=x.clipShadows,C.clippingPlanes=x.clippingPlanes,C.clipIntersection=x.clipIntersection,C.displacementMap=x.displacementMap,C.displacementScale=x.displacementScale,C.displacementBias=x.displacementBias,C.wireframeLinewidth=x.wireframeLinewidth,C.linewidth=x.linewidth,b.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let D=s.properties.get(C);D.light=b}return C}function y(E,x,b,P,C,N){if(E.visible===!1)return;if(E.layers.test(C)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&N===ro)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,E.matrixWorld);let I=t.update(E),B=E.material;if(Array.isArray(B)){let X=I.groups;for(let F=0,Q=X.length;F<Q;F++){let W=X[F],R=B[W.materialIndex];if(R&&R.visible){let tt=w(E,R,P,N);E.onBeforeShadow(s,E,x,b,I,tt,W),s.renderBufferDirect(b,null,I,tt,E,W),E.onAfterShadow(s,E,x,b,I,tt,W)}}}else if(B.visible){let X=w(E,B,P,N);E.onBeforeShadow(s,E,x,b,I,X,null),s.renderBufferDirect(b,null,I,X,E,null),E.onAfterShadow(s,E,x,b,I,X,null)}}let H=E.children;for(let I=0,B=H.length;I<B;I++)y(H[I],x,b,P,C,N)}function T(E){E.target.removeEventListener("dispose",T);for(let b in c){let P=c[b],C=E.target.uuid;C in P&&(P[C].dispose(),delete P[C])}}}function QS(s,t){function e(){let L=!1,K=new Le,$=null,dt=new Le(0,0,0,0);return{setMask:function(at){$!==at&&!L&&(s.colorMask(at,at,at,at),$=at)},setLocked:function(at){L=at},setClear:function(at,pt,ot,mt,st){st===!0&&(at*=mt,pt*=mt,ot*=mt),K.set(at,pt,ot,mt),dt.equals(K)===!1&&(s.clearColor(at,pt,ot,mt),dt.copy(K))},reset:function(){L=!1,$=null,dt.set(-1,0,0,0)}}}function n(){let L=!1,K=!1,$=null,dt=null,at=null;return{setReversed:function(pt){if(K!==pt){let ot=t.get("EXT_clip_control");pt?ot.clipControlEXT(ot.LOWER_LEFT_EXT,ot.ZERO_TO_ONE_EXT):ot.clipControlEXT(ot.LOWER_LEFT_EXT,ot.NEGATIVE_ONE_TO_ONE_EXT),K=pt;let mt=at;at=null,this.setClear(mt)}},getReversed:function(){return K},setTest:function(pt){pt?ut(s.DEPTH_TEST):Nt(s.DEPTH_TEST)},setMask:function(pt){$!==pt&&!L&&(s.depthMask(pt),$=pt)},setFunc:function(pt){if(K&&(pt=Zp[pt]),dt!==pt){switch(pt){case Dl:s.depthFunc(s.NEVER);break;case Nl:s.depthFunc(s.ALWAYS);break;case Ul:s.depthFunc(s.LESS);break;case Kr:s.depthFunc(s.LEQUAL);break;case Ol:s.depthFunc(s.EQUAL);break;case Fl:s.depthFunc(s.GEQUAL);break;case Bl:s.depthFunc(s.GREATER);break;case zl:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}dt=pt}},setLocked:function(pt){L=pt},setClear:function(pt){at!==pt&&(at=pt,K&&(pt=1-pt),s.clearDepth(pt))},reset:function(){L=!1,$=null,dt=null,at=null,K=!1}}}function i(){let L=!1,K=null,$=null,dt=null,at=null,pt=null,ot=null,mt=null,st=null;return{setTest:function(et){L||(et?ut(s.STENCIL_TEST):Nt(s.STENCIL_TEST))},setMask:function(et){K!==et&&!L&&(s.stencilMask(et),K=et)},setFunc:function(et,xt,nt){($!==et||dt!==xt||at!==nt)&&(s.stencilFunc(et,xt,nt),$=et,dt=xt,at=nt)},setOp:function(et,xt,nt){(pt!==et||ot!==xt||mt!==nt)&&(s.stencilOp(et,xt,nt),pt=et,ot=xt,mt=nt)},setLocked:function(et){L=et},setClear:function(et){st!==et&&(s.clearStencil(et),st=et)},reset:function(){L=!1,K=null,$=null,dt=null,at=null,pt=null,ot=null,mt=null,st=null}}}let r=new e,o=new n,a=new i,l={},c=new WeakMap,h={},d={},f={},u=new WeakMap,m=[],_=null,p=!1,g=null,v=null,w=null,y=null,T=null,E=null,x=null,b=new ee(0,0,0),P=0,C=!1,N=null,D=null,H=null,I=null,B=null,X=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),F=!1,Q=0,W=s.getParameter(s.VERSION);W.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(W)[1]),F=Q>=1):W.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),F=Q>=2);let R=null,tt={},yt=s.getParameter(s.SCISSOR_BOX),Ut=s.getParameter(s.VIEWPORT),J=new Le().fromArray(yt),lt=new Le().fromArray(Ut);function _t(L,K,$,dt){let at=new Uint8Array(4),pt=s.createTexture();s.bindTexture(L,pt),s.texParameteri(L,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(L,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ot=0;ot<$;ot++)L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY?s.texImage3D(K,0,s.RGBA,1,1,dt,0,s.RGBA,s.UNSIGNED_BYTE,at):s.texImage2D(K+ot,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,at);return pt}let Mt={};Mt[s.TEXTURE_2D]=_t(s.TEXTURE_2D,s.TEXTURE_2D,1),Mt[s.TEXTURE_CUBE_MAP]=_t(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Mt[s.TEXTURE_2D_ARRAY]=_t(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Mt[s.TEXTURE_3D]=_t(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ut(s.DEPTH_TEST),o.setFunc(Kr),Y(!1),Xt(Ru),ut(s.CULL_FACE),ne(hr);function ut(L){h[L]!==!0&&(s.enable(L),h[L]=!0)}function Nt(L){h[L]!==!1&&(s.disable(L),h[L]=!1)}function de(L,K){return f[L]!==K?(s.bindFramebuffer(L,K),f[L]=K,L===s.DRAW_FRAMEBUFFER&&(f[s.FRAMEBUFFER]=K),L===s.FRAMEBUFFER&&(f[s.DRAW_FRAMEBUFFER]=K),!0):!1}function Rt(L,K){let $=m,dt=!1;if(L){$=u.get(K),$===void 0&&($=[],u.set(K,$));let at=L.textures;if($.length!==at.length||$[0]!==s.COLOR_ATTACHMENT0){for(let pt=0,ot=at.length;pt<ot;pt++)$[pt]=s.COLOR_ATTACHMENT0+pt;$.length=at.length,dt=!0}}else $[0]!==s.BACK&&($[0]=s.BACK,dt=!0);dt&&s.drawBuffers($)}function bt(L){return _!==L?(s.useProgram(L),_=L,!0):!1}let Ct={[ur]:s.FUNC_ADD,[gp]:s.FUNC_SUBTRACT,[_p]:s.FUNC_REVERSE_SUBTRACT};Ct[xp]=s.MIN,Ct[vp]=s.MAX;let Tt={[yp]:s.ZERO,[Sp]:s.ONE,[Mp]:s.SRC_COLOR,[Du]:s.SRC_ALPHA,[Cp]:s.SRC_ALPHA_SATURATE,[Ep]:s.DST_COLOR,[Tp]:s.DST_ALPHA,[bp]:s.ONE_MINUS_SRC_COLOR,[Nu]:s.ONE_MINUS_SRC_ALPHA,[Ap]:s.ONE_MINUS_DST_COLOR,[wp]:s.ONE_MINUS_DST_ALPHA,[Rp]:s.CONSTANT_COLOR,[Pp]:s.ONE_MINUS_CONSTANT_COLOR,[Ip]:s.CONSTANT_ALPHA,[Lp]:s.ONE_MINUS_CONSTANT_ALPHA};function ne(L,K,$,dt,at,pt,ot,mt,st,et){if(L===hr){p===!0&&(Nt(s.BLEND),p=!1);return}if(p===!1&&(ut(s.BLEND),p=!0),L!==mp){if(L!==g||et!==C){if((v!==ur||T!==ur)&&(s.blendEquation(s.FUNC_ADD),v=ur,T=ur),et)switch(L){case oo:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Pu:s.blendFunc(s.ONE,s.ONE);break;case Iu:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Lu:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Gt("WebGLState: Invalid blending: ",L);break}else switch(L){case oo:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Pu:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Iu:Gt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Lu:Gt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Gt("WebGLState: Invalid blending: ",L);break}w=null,y=null,E=null,x=null,b.set(0,0,0),P=0,g=L,C=et}return}at=at||K,pt=pt||$,ot=ot||dt,(K!==v||at!==T)&&(s.blendEquationSeparate(Ct[K],Ct[at]),v=K,T=at),($!==w||dt!==y||pt!==E||ot!==x)&&(s.blendFuncSeparate(Tt[$],Tt[dt],Tt[pt],Tt[ot]),w=$,y=dt,E=pt,x=ot),(mt.equals(b)===!1||st!==P)&&(s.blendColor(mt.r,mt.g,mt.b,st),b.copy(mt),P=st),g=L,C=!1}function Jt(L,K){L.side===Hi?Nt(s.CULL_FACE):ut(s.CULL_FACE);let $=L.side===pn;K&&($=!$),Y($),L.blending===oo&&L.transparent===!1?ne(hr):ne(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),o.setFunc(L.depthFunc),o.setTest(L.depthTest),o.setMask(L.depthWrite),r.setMask(L.colorWrite);let dt=L.stencilWrite;a.setTest(dt),dt&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),zt(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?ut(s.SAMPLE_ALPHA_TO_COVERAGE):Nt(s.SAMPLE_ALPHA_TO_COVERAGE)}function Y(L){N!==L&&(L?s.frontFace(s.CW):s.frontFace(s.CCW),N=L)}function Xt(L){L!==fp?(ut(s.CULL_FACE),L!==D&&(L===Ru?s.cullFace(s.BACK):L===dp?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Nt(s.CULL_FACE),D=L}function ye(L){L!==H&&(F&&s.lineWidth(L),H=L)}function zt(L,K,$){L?(ut(s.POLYGON_OFFSET_FILL),(I!==K||B!==$)&&(I=K,B=$,o.getReversed()&&(K=-K,$=-$),s.polygonOffset(K,$))):Nt(s.POLYGON_OFFSET_FILL)}function $t(L){L?ut(s.SCISSOR_TEST):Nt(s.SCISSOR_TEST)}function Re(L){L===void 0&&(L=s.TEXTURE0+X-1),R!==L&&(s.activeTexture(L),R=L)}function Ne(L,K,$){$===void 0&&(R===null?$=s.TEXTURE0+X-1:$=R);let dt=tt[$];dt===void 0&&(dt={type:void 0,texture:void 0},tt[$]=dt),(dt.type!==L||dt.texture!==K)&&(R!==$&&(s.activeTexture($),R=$),s.bindTexture(L,K||Mt[L]),dt.type=L,dt.texture=K)}function O(){let L=tt[R];L!==void 0&&L.type!==void 0&&(s.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function pe(){try{s.compressedTexImage2D(...arguments)}catch(L){Gt("WebGLState:",L)}}function he(){try{s.compressedTexImage3D(...arguments)}catch(L){Gt("WebGLState:",L)}}function Ht(){try{s.texSubImage2D(...arguments)}catch(L){Gt("WebGLState:",L)}}function ft(){try{s.texSubImage3D(...arguments)}catch(L){Gt("WebGLState:",L)}}function fe(){try{s.compressedTexSubImage2D(...arguments)}catch(L){Gt("WebGLState:",L)}}function Ot(){try{s.compressedTexSubImage3D(...arguments)}catch(L){Gt("WebGLState:",L)}}function kt(){try{s.texStorage2D(...arguments)}catch(L){Gt("WebGLState:",L)}}function A(){try{s.texStorage3D(...arguments)}catch(L){Gt("WebGLState:",L)}}function S(){try{s.texImage2D(...arguments)}catch(L){Gt("WebGLState:",L)}}function k(){try{s.texImage3D(...arguments)}catch(L){Gt("WebGLState:",L)}}function rt(L){return d[L]!==void 0?d[L]:s.getParameter(L)}function it(L,K){d[L]!==K&&(s.pixelStorei(L,K),d[L]=K)}function ht(L){J.equals(L)===!1&&(s.scissor(L.x,L.y,L.z,L.w),J.copy(L))}function gt(L){lt.equals(L)===!1&&(s.viewport(L.x,L.y,L.z,L.w),lt.copy(L))}function G(L,K){let $=c.get(K);$===void 0&&($=new WeakMap,c.set(K,$));let dt=$.get(L);dt===void 0&&(dt=s.getUniformBlockIndex(K,L.name),s.uniformBlockBinding(K,dt,dt),$.set(L,dt))}function j(L,K,$){let at=c.get(K).get(L);l[at]!==$&&(s.bindBufferBase(s.UNIFORM_BUFFER,at,$),l[at]=$)}function ct(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},d={},R=null,tt={},f={},l={},u=new WeakMap,m=[],_=null,p=!1,g=null,v=null,w=null,y=null,T=null,E=null,x=null,b=new ee(0,0,0),P=0,C=!1,N=null,D=null,H=null,I=null,B=null,J.set(0,0,s.canvas.width,s.canvas.height),lt.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ut,disable:Nt,bindFramebuffer:de,drawBuffers:Rt,useProgram:bt,setBlending:ne,setMaterial:Jt,setFlipSided:Y,setCullFace:Xt,setLineWidth:ye,setPolygonOffset:zt,setScissorTest:$t,activeTexture:Re,bindTexture:Ne,unbindTexture:O,compressedTexImage2D:pe,compressedTexImage3D:he,texImage2D:S,texImage3D:k,pixelStorei:it,getParameter:rt,updateUBOMapping:G,uniformBlockBinding:j,texStorage2D:kt,texStorage3D:A,texSubImage2D:Ht,texSubImage3D:ft,compressedTexSubImage2D:fe,compressedTexSubImage3D:Ot,scissor:ht,viewport:gt,reset:ct}}function jS(s,t,e,n,i,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new re,h=new WeakMap,d=new Set,f,u=new WeakMap,m=new Set,_=new FinalizationRegistry(A=>m.delete(A)),p=!1;try{p=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,S){return p?new OffscreenCanvas(A,S):Yo("canvas")}function v(A,S,k){let rt=1,it=kt(A);if((it.width>k||it.height>k)&&(rt=k/Math.max(it.width,it.height)),rt<1)if(typeof HTMLImageElement!="undefined"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&A instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&A instanceof ImageBitmap||typeof VideoFrame!="undefined"&&A instanceof VideoFrame){let ht=Math.floor(rt*it.width),gt=Math.floor(rt*it.height);f===void 0&&(f=g(ht,gt));let G=S?g(ht,gt):f;return G.width=ht,G.height=gt,G.getContext("2d").drawImage(A,0,0,ht,gt),Vt("WebGLRenderer: Texture has been resized from ("+it.width+"x"+it.height+") to ("+ht+"x"+gt+")."),G}else return"data"in A&&Vt("WebGLRenderer: Image in DataTexture is too big ("+it.width+"x"+it.height+")."),A;return A}function w(A){return A.generateMipmaps}function y(A){s.generateMipmap(A)}function T(A){return A.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?s.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function E(A,S,k,rt,it,ht=!1){if(A!==null){if(s[A]!==void 0)return s[A];Vt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let gt;rt&&(gt=t.get("EXT_texture_norm16"),gt||Vt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let G=S;if(S===s.RED&&(k===s.FLOAT&&(G=s.R32F),k===s.HALF_FLOAT&&(G=s.R16F),k===s.UNSIGNED_BYTE&&(G=s.R8),k===s.UNSIGNED_SHORT&&gt&&(G=gt.R16_EXT),k===s.SHORT&&gt&&(G=gt.R16_SNORM_EXT)),S===s.RED_INTEGER&&(k===s.UNSIGNED_BYTE&&(G=s.R8UI),k===s.UNSIGNED_SHORT&&(G=s.R16UI),k===s.UNSIGNED_INT&&(G=s.R32UI),k===s.BYTE&&(G=s.R8I),k===s.SHORT&&(G=s.R16I),k===s.INT&&(G=s.R32I)),S===s.RG&&(k===s.FLOAT&&(G=s.RG32F),k===s.HALF_FLOAT&&(G=s.RG16F),k===s.UNSIGNED_BYTE&&(G=s.RG8),k===s.UNSIGNED_SHORT&&gt&&(G=gt.RG16_EXT),k===s.SHORT&&gt&&(G=gt.RG16_SNORM_EXT)),S===s.RG_INTEGER&&(k===s.UNSIGNED_BYTE&&(G=s.RG8UI),k===s.UNSIGNED_SHORT&&(G=s.RG16UI),k===s.UNSIGNED_INT&&(G=s.RG32UI),k===s.BYTE&&(G=s.RG8I),k===s.SHORT&&(G=s.RG16I),k===s.INT&&(G=s.RG32I)),S===s.RGB_INTEGER&&(k===s.UNSIGNED_BYTE&&(G=s.RGB8UI),k===s.UNSIGNED_SHORT&&(G=s.RGB16UI),k===s.UNSIGNED_INT&&(G=s.RGB32UI),k===s.BYTE&&(G=s.RGB8I),k===s.SHORT&&(G=s.RGB16I),k===s.INT&&(G=s.RGB32I)),S===s.RGBA_INTEGER&&(k===s.UNSIGNED_BYTE&&(G=s.RGBA8UI),k===s.UNSIGNED_SHORT&&(G=s.RGBA16UI),k===s.UNSIGNED_INT&&(G=s.RGBA32UI),k===s.BYTE&&(G=s.RGBA8I),k===s.SHORT&&(G=s.RGBA16I),k===s.INT&&(G=s.RGBA32I)),S===s.RGB&&(k===s.UNSIGNED_SHORT&&gt&&(G=gt.RGB16_EXT),k===s.SHORT&&gt&&(G=gt.RGB16_SNORM_EXT),k===s.UNSIGNED_INT_5_9_9_9_REV&&(G=s.RGB9_E5),k===s.UNSIGNED_INT_10F_11F_11F_REV&&(G=s.R11F_G11F_B10F)),S===s.RGBA){let j=ht?qo:le.getTransfer(it);k===s.FLOAT&&(G=s.RGBA32F),k===s.HALF_FLOAT&&(G=s.RGBA16F),k===s.UNSIGNED_BYTE&&(G=j===_e?s.SRGB8_ALPHA8:s.RGBA8),k===s.UNSIGNED_SHORT&&gt&&(G=gt.RGBA16_EXT),k===s.SHORT&&gt&&(G=gt.RGBA16_SNORM_EXT),k===s.UNSIGNED_SHORT_4_4_4_4&&(G=s.RGBA4),k===s.UNSIGNED_SHORT_5_5_5_1&&(G=s.RGB5_A1)}return(G===s.R16F||G===s.R32F||G===s.RG16F||G===s.RG32F||G===s.RGBA16F||G===s.RGBA32F)&&t.get("EXT_color_buffer_float"),G}function x(A,S){let k;return A?S===null||S===Li||S===dr?k=s.DEPTH24_STENCIL8:S===xi?k=s.DEPTH32F_STENCIL8:S===lo&&(k=s.DEPTH24_STENCIL8,Vt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Li||S===dr?k=s.DEPTH_COMPONENT24:S===xi?k=s.DEPTH_COMPONENT32F:S===lo&&(k=s.DEPTH_COMPONENT16),k}function b(A,S){return w(A)===!0||A.isFramebufferTexture&&A.minFilter!==hn&&A.minFilter!==Nn?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function P(A){let S=new WeakRef(A);n.get(A).__ref=S,m.add(S),_.register(A,S,S)}function C(A){let S=n.get(A).__ref;S!==void 0&&(m.delete(S),_.unregister(S))}function N(A){H(A.target)}function D(A){I(A.target)}function H(A){A.removeEventListener("dispose",N),C(A),X(A),A.isVideoTexture&&h.delete(A),A.isHTMLTexture&&d.delete(A)}function I(A){A.removeEventListener("dispose",D),C(A),Q(A)}function B(){for(let A of m){let S=A.deref();S!==void 0&&(S.isRenderTarget===!0?I(S):H(S))}m.clear(),d.clear()}function X(A){let S=n.get(A);if(S.__webglInit===void 0)return;let k=A.source,rt=u.get(k);if(rt){let it=rt[S.__cacheKey];it.usedTimes--,it.usedTimes===0&&F(A),Object.keys(rt).length===0&&u.delete(k)}n.remove(A)}function F(A){let S=n.get(A);s.deleteTexture(S.__webglTexture);let k=A.source,rt=u.get(k);delete rt[S.__cacheKey],o.memory.textures--}function Q(A){let S=n.get(A);S.__depthDisposeCallback&&S.__depthDisposeCallback();let k=A.depthTexture;if(k&&k.renderTarget===A&&H(k),A.isWebGLCubeRenderTarget)for(let it=0;it<6;it++){if(Array.isArray(S.__webglFramebuffer[it]))for(let ht=0;ht<S.__webglFramebuffer[it].length;ht++)s.deleteFramebuffer(S.__webglFramebuffer[it][ht]);else s.deleteFramebuffer(S.__webglFramebuffer[it]);S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer[it])}else{if(Array.isArray(S.__webglFramebuffer))for(let it=0;it<S.__webglFramebuffer.length;it++)s.deleteFramebuffer(S.__webglFramebuffer[it]);else s.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&s.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let it=0;it<S.__webglColorRenderbuffer.length;it++)S.__webglColorRenderbuffer[it]&&s.deleteRenderbuffer(S.__webglColorRenderbuffer[it]);S.__webglDepthRenderbuffer&&s.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let rt=A.textures;for(let it=0,ht=rt.length;it<ht;it++){let gt=n.get(rt[it]);gt.__webglTexture&&(s.deleteTexture(gt.__webglTexture),o.memory.textures--),n.remove(rt[it])}n.remove(A)}let W=0;function R(){W=0}function tt(){return W}function yt(A){W=A}function Ut(){let A=W;return A>=i.maxTextures&&Vt("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+i.maxTextures),W+=1,A}function J(A){let S=[];return S.push(A.wrapS),S.push(A.wrapT),S.push(A.wrapR||0),S.push(A.magFilter),S.push(A.minFilter),S.push(A.anisotropy),S.push(A.internalFormat),S.push(A.format),S.push(A.type),S.push(A.generateMipmaps),S.push(A.mipmapsAutoUpdate),S.push(A.premultiplyAlpha),S.push(A.flipY),S.push(A.unpackAlignment),S.push(A.colorSpace),S.join()}function lt(A,S){let k=n.get(A);if(A.isVideoTexture&&fe(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&k.__version!==A.version){let rt=A.image;if(rt===null)Vt("WebGLRenderer: Texture marked for update but no image data found.");else if(rt.complete===!1)Vt("WebGLRenderer: Texture marked for update but image is incomplete");else{Jt(k,A,S);return}}else A.isExternalTexture&&(k.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,k.__webglTexture,s.TEXTURE0+S)}function _t(A,S){let k=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&k.__version!==A.version){Jt(k,A,S);return}else A.isExternalTexture&&(k.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(s.TEXTURE_2D_ARRAY,k.__webglTexture,s.TEXTURE0+S)}function Mt(A,S){let k=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&k.__version!==A.version){Jt(k,A,S);return}e.bindTexture(s.TEXTURE_3D,k.__webglTexture,s.TEXTURE0+S)}function ut(A,S){let k=n.get(A);if(A.version>0&&k.__version!==A.version){Y(k,A,S);return}e.bindTexture(s.TEXTURE_CUBE_MAP,k.__webglTexture,s.TEXTURE0+S)}let Nt={[kl]:s.REPEAT,[Bi]:s.CLAMP_TO_EDGE,[Vl]:s.MIRRORED_REPEAT},de={[hn]:s.NEAREST,[Up]:s.NEAREST_MIPMAP_NEAREST,[ga]:s.NEAREST_MIPMAP_LINEAR,[Nn]:s.LINEAR,[mc]:s.LINEAR_MIPMAP_NEAREST,[us]:s.LINEAR_MIPMAP_LINEAR},Rt={[zp]:s.NEVER,[$u]:s.ALWAYS,[kp]:s.LESS,[Zu]:s.LEQUAL,[Vp]:s.EQUAL,[Ju]:s.GEQUAL,[Gp]:s.GREATER,[Hp]:s.NOTEQUAL};function bt(A,S){if(S.type===xi&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===Nn||S.magFilter===mc||S.magFilter===ga||S.magFilter===us||S.minFilter===Nn||S.minFilter===mc||S.minFilter===ga||S.minFilter===us)&&Vt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(A,s.TEXTURE_WRAP_S,Nt[S.wrapS]),s.texParameteri(A,s.TEXTURE_WRAP_T,Nt[S.wrapT]),(A===s.TEXTURE_3D||A===s.TEXTURE_2D_ARRAY)&&s.texParameteri(A,s.TEXTURE_WRAP_R,Nt[S.wrapR]),s.texParameteri(A,s.TEXTURE_MAG_FILTER,de[S.magFilter]),s.texParameteri(A,s.TEXTURE_MIN_FILTER,de[S.minFilter]),S.compareFunction&&(s.texParameteri(A,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(A,s.TEXTURE_COMPARE_FUNC,Rt[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===hn||S.minFilter!==ga&&S.minFilter!==us||S.type===xi&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){let k=t.get("EXT_texture_filter_anisotropic");s.texParameterf(A,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Ct(A,S){let k=!1;A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener("dispose",N),P(S));let rt=S.source,it=u.get(rt);it===void 0&&(it={},u.set(rt,it));let ht=J(S);if(ht!==A.__cacheKey){it[ht]===void 0&&(it[ht]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,k=!0),it[ht].usedTimes++;let gt=it[A.__cacheKey];gt!==void 0&&(it[A.__cacheKey].usedTimes--,gt.usedTimes===0&&F(S)),A.__cacheKey=ht,A.__webglTexture=it[ht].texture}return k}function Tt(A,S,k){return Math.floor(Math.floor(A/k)/S)}function ne(A,S,k,rt){let ht=A.updateRanges;if(ht.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,S.width,S.height,k,rt,S.data);else{ht.sort((L,K)=>L.start-K.start);let gt=0;for(let L=1;L<ht.length;L++){let K=ht[gt],$=ht[L],dt=K.start+K.count,at=Tt($.start,S.width,4),pt=Tt(K.start,S.width,4);$.start<=dt+1&&at===pt&&Tt($.start+$.count-1,S.width,4)===at?K.count=Math.max(K.count,$.start+$.count-K.start):(++gt,ht[gt]=$)}ht.length=gt+1;let G=e.getParameter(s.UNPACK_ROW_LENGTH),j=e.getParameter(s.UNPACK_SKIP_PIXELS),ct=e.getParameter(s.UNPACK_SKIP_ROWS);e.pixelStorei(s.UNPACK_ROW_LENGTH,S.width);for(let L=0,K=ht.length;L<K;L++){let $=ht[L],dt=Math.floor($.start/4),at=Math.ceil($.count/4),pt=dt%S.width,ot=Math.floor(dt/S.width),mt=at,st=1;e.pixelStorei(s.UNPACK_SKIP_PIXELS,pt),e.pixelStorei(s.UNPACK_SKIP_ROWS,ot),e.texSubImage2D(s.TEXTURE_2D,0,pt,ot,mt,st,k,rt,S.data)}A.clearUpdateRanges(),e.pixelStorei(s.UNPACK_ROW_LENGTH,G),e.pixelStorei(s.UNPACK_SKIP_PIXELS,j),e.pixelStorei(s.UNPACK_SKIP_ROWS,ct)}}function Jt(A,S,k){let rt=s.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(rt=s.TEXTURE_2D_ARRAY),S.isData3DTexture&&(rt=s.TEXTURE_3D);let it=Ct(A,S),ht=S.source;e.bindTexture(rt,A.__webglTexture,s.TEXTURE0+k);let gt=n.get(ht);if(ht.version!==gt.__version||it===!0){if(e.activeTexture(s.TEXTURE0+k),(typeof ImageBitmap!="undefined"&&S.image instanceof ImageBitmap)===!1){let st=le.getPrimaries(le.workingColorSpace),et=S.colorSpace===ds?null:le.getPrimaries(S.colorSpace),xt=S.colorSpace===ds||st===et?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt)}e.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment);let j=v(S.image,!1,i.maxTextureSize);j=Ot(S,j);let ct=r.convert(S.format,S.colorSpace),L=r.convert(S.type),K=E(S.internalFormat,ct,L,S.normalized,S.colorSpace,S.isVideoTexture);bt(rt,S);let $,dt=S.mipmaps,at=S.isVideoTexture!==!0,pt=gt.__version===void 0||it===!0,ot=ht.dataReady,mt=b(S,j);if(S.isDepthTexture)K=x(S.format===fs,S.type),pt&&(at?e.texStorage2D(s.TEXTURE_2D,1,K,j.width,j.height):e.texImage2D(s.TEXTURE_2D,0,K,j.width,j.height,0,ct,L,null));else if(S.isDataTexture)if(dt.length>0){at&&pt&&e.texStorage2D(s.TEXTURE_2D,mt,K,dt[0].width,dt[0].height);for(let st=0,et=dt.length;st<et;st++)$=dt[st],at?ot&&e.texSubImage2D(s.TEXTURE_2D,st,0,0,$.width,$.height,ct,L,$.data):e.texImage2D(s.TEXTURE_2D,st,K,$.width,$.height,0,ct,L,$.data);S.generateMipmaps=!1}else at?(pt&&e.texStorage2D(s.TEXTURE_2D,mt,K,j.width,j.height),ot&&ne(S,j,ct,L)):e.texImage2D(s.TEXTURE_2D,0,K,j.width,j.height,0,ct,L,j.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){at&&pt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,mt,K,dt[0].width,dt[0].height,j.depth);for(let st=0,et=dt.length;st<et;st++)if($=dt[st],S.format!==Ni)if(ct!==null)if(at){if(ot)if(S.layerUpdates.size>0){let xt=rf($.width,$.height,S.format,S.type);for(let nt of S.layerUpdates){let Et=$.data.subarray(nt*xt/$.data.BYTES_PER_ELEMENT,(nt+1)*xt/$.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,st,0,0,nt,$.width,$.height,1,ct,Et)}}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,st,0,0,0,$.width,$.height,j.depth,ct,$.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,st,K,$.width,$.height,j.depth,0,$.data,0,0);else Vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else at?ot&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,st,0,0,0,$.width,$.height,j.depth,ct,L,$.data):e.texImage3D(s.TEXTURE_2D_ARRAY,st,K,$.width,$.height,j.depth,0,ct,L,$.data);S.layerUpdates.size>0&&S.clearLayerUpdates()}else{at&&pt&&e.texStorage2D(s.TEXTURE_2D,mt,K,dt[0].width,dt[0].height);for(let st=0,et=dt.length;st<et;st++)$=dt[st],S.format!==Ni?ct!==null?at?ot&&e.compressedTexSubImage2D(s.TEXTURE_2D,st,0,0,$.width,$.height,ct,$.data):e.compressedTexImage2D(s.TEXTURE_2D,st,K,$.width,$.height,0,$.data):Vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):at?ot&&e.texSubImage2D(s.TEXTURE_2D,st,0,0,$.width,$.height,ct,L,$.data):e.texImage2D(s.TEXTURE_2D,st,K,$.width,$.height,0,ct,L,$.data)}else if(S.isDataArrayTexture)if(at){if(pt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,mt,K,j.width,j.height,j.depth),ot)if(S.layerUpdates.size>0){let st=rf(j.width,j.height,S.format,S.type);for(let et of S.layerUpdates){let xt=j.data.subarray(et*st/j.data.BYTES_PER_ELEMENT,(et+1)*st/j.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,et,j.width,j.height,1,ct,L,xt)}S.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,ct,L,j.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,K,j.width,j.height,j.depth,0,ct,L,j.data);else if(S.isData3DTexture)at?(pt&&e.texStorage3D(s.TEXTURE_3D,mt,K,j.width,j.height,j.depth),ot&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,ct,L,j.data)):e.texImage3D(s.TEXTURE_3D,0,K,j.width,j.height,j.depth,0,ct,L,j.data);else if(S.isFramebufferTexture){if(pt)if(at)e.texStorage2D(s.TEXTURE_2D,mt,K,j.width,j.height);else{let st=j.width,et=j.height;for(let xt=0;xt<mt;xt++)e.texImage2D(s.TEXTURE_2D,xt,K,st,et,0,ct,L,null),st>>=1,et>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in s){let st=s.canvas;if(st.hasAttribute("layoutsubtree")||st.setAttribute("layoutsubtree","true"),j.parentNode!==st){st.appendChild(j),d.add(S),st.onpaint=et=>{let xt=et.changedElements;for(let nt of d)xt.includes(nt.image)&&(nt.needsUpdate=!0)},st.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,j);else{let xt=s.RGBA,nt=s.RGBA,Et=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,xt,nt,Et,j)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(dt.length>0){if(at&&pt){let st=kt(dt[0]);e.texStorage2D(s.TEXTURE_2D,mt,K,st.width,st.height)}for(let st=0,et=dt.length;st<et;st++)$=dt[st],at?ot&&e.texSubImage2D(s.TEXTURE_2D,st,0,0,ct,L,$):e.texImage2D(s.TEXTURE_2D,st,K,ct,L,$);S.generateMipmaps=!1}else if(at){if(pt){let st=kt(j);e.texStorage2D(s.TEXTURE_2D,mt,K,st.width,st.height)}ot&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,ct,L,j)}else e.texImage2D(s.TEXTURE_2D,0,K,ct,L,j);w(S)&&S.mipmapsAutoUpdate===!0&&y(rt),gt.__version=ht.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function Y(A,S,k){if(S.image.length!==6)return;let rt=Ct(A,S),it=S.source;e.bindTexture(s.TEXTURE_CUBE_MAP,A.__webglTexture,s.TEXTURE0+k);let ht=n.get(it);if(it.version!==ht.__version||rt===!0){e.activeTexture(s.TEXTURE0+k);let gt=le.getPrimaries(le.workingColorSpace),G=S.colorSpace===ds?null:le.getPrimaries(S.colorSpace),j=S.colorSpace===ds||gt===G?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,j);let ct=S.isCompressedTexture||S.image[0].isCompressedTexture,L=S.image[0]&&S.image[0].isDataTexture,K=[];for(let nt=0;nt<6;nt++)!ct&&!L?K[nt]=v(S.image[nt],!0,i.maxCubemapSize):K[nt]=L?S.image[nt].image:S.image[nt],K[nt]=Ot(S,K[nt]);let $=K[0],dt=r.convert(S.format,S.colorSpace),at=r.convert(S.type),pt=E(S.internalFormat,dt,at,S.normalized,S.colorSpace),ot=S.isVideoTexture!==!0,mt=ht.__version===void 0||rt===!0,st=it.dataReady,et=b(S,$);bt(s.TEXTURE_CUBE_MAP,S);let xt;if(S.isDepthTexture){if(pt=x(S.format===fs,S.type),mt)if(ot)e.texStorage2D(s.TEXTURE_CUBE_MAP,1,pt,$.width,$.height);else for(let nt=0;nt<6;nt++)e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,pt,$.width,$.height,0,dt,at,null)}else if(ct){ot&&mt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,et,pt,$.width,$.height);for(let nt=0;nt<6;nt++){xt=K[nt].mipmaps;for(let Et=0;Et<xt.length;Et++){let ie=xt[Et];S.format!==Ni?dt!==null?ot?st&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Et,0,0,ie.width,ie.height,dt,ie.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Et,pt,ie.width,ie.height,0,ie.data):Vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ot?st&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Et,0,0,ie.width,ie.height,dt,at,ie.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Et,pt,ie.width,ie.height,0,dt,at,ie.data)}}}else{if(xt=S.mipmaps,ot&&mt){xt.length>0&&et++;let nt=kt(K[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,et,pt,nt.width,nt.height)}for(let nt=0;nt<6;nt++)if(L){ot?st&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,K[nt].width,K[nt].height,dt,at,K[nt].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,pt,K[nt].width,K[nt].height,0,dt,at,K[nt].data);for(let Et=0;Et<xt.length;Et++){let qt=xt[Et].image[nt].image;ot?st&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Et+1,0,0,qt.width,qt.height,dt,at,qt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Et+1,pt,qt.width,qt.height,0,dt,at,qt.data)}}else{ot?st&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,dt,at,K[nt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,pt,dt,at,K[nt]);for(let Et=0;Et<xt.length;Et++){let ie=xt[Et];ot?st&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Et+1,0,0,dt,at,ie.image[nt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Et+1,pt,dt,at,ie.image[nt])}}}w(S)&&S.mipmapsAutoUpdate===!0&&y(s.TEXTURE_CUBE_MAP),ht.__version=it.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function Xt(A,S,k,rt,it,ht){let gt=r.convert(k.format,k.colorSpace),G=r.convert(k.type),j=E(k.internalFormat,gt,G,k.normalized,k.colorSpace),ct=n.get(S),L=n.get(k);if(L.__renderTarget=S,!ct.__hasExternalTextures){let K=Math.max(1,S.width>>ht),$=Math.max(1,S.height>>ht);it===s.TEXTURE_3D||it===s.TEXTURE_2D_ARRAY?e.texImage3D(it,ht,j,K,$,S.depth,0,gt,G,null):e.texImage2D(it,ht,j,K,$,0,gt,G,null)}e.bindFramebuffer(s.FRAMEBUFFER,A),ft(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,rt,it,L.__webglTexture,0,Ht(S)):(it===s.TEXTURE_2D||it>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&it<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,rt,it,L.__webglTexture,ht),e.bindFramebuffer(s.FRAMEBUFFER,null)}function ye(A,S,k){if(s.bindRenderbuffer(s.RENDERBUFFER,A),S.depthBuffer){let rt=S.depthTexture,it=rt&&rt.isDepthTexture?rt.type:null,ht=x(S.stencilBuffer,it),gt=S.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;ft(S)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ht(S),ht,S.width,S.height):k?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ht(S),ht,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,ht,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,gt,s.RENDERBUFFER,A)}else{let rt=S.textures;for(let it=0;it<rt.length;it++){let ht=rt[it],gt=r.convert(ht.format,ht.colorSpace),G=r.convert(ht.type),j=E(ht.internalFormat,gt,G,ht.normalized,ht.colorSpace);ft(S)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ht(S),j,S.width,S.height):k?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ht(S),j,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,j,S.width,S.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function zt(A,S,k){let rt=S.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(s.FRAMEBUFFER,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let it=n.get(S.depthTexture);it.__renderTarget=S;let ht=rt?S.depthTexture.image[0]:S.depthTexture.image;(!it.__webglTexture||ht.width!==S.width||ht.height!==S.height)&&(ht.width=S.width,ht.height=S.height,S.depthTexture.needsUpdate=!0),rt?ut(S.depthTexture,0):lt(S.depthTexture,0);let gt=it.__webglTexture,G=Ht(S),j=rt?s.TEXTURE_CUBE_MAP_POSITIVE_X+k:s.TEXTURE_2D,ct=S.depthTexture.format===fs?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(S.depthTexture.format===as)ft(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ct,j,gt,0,G):s.framebufferTexture2D(s.FRAMEBUFFER,ct,j,gt,0);else if(S.depthTexture.format===fs)ft(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ct,j,gt,0,G):s.framebufferTexture2D(s.FRAMEBUFFER,ct,j,gt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function $t(A){let S=n.get(A),k=A.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==A.depthTexture){let rt=A.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),rt){let it=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,rt.removeEventListener("dispose",it)};rt.addEventListener("dispose",it),S.__depthDisposeCallback=it}S.__boundDepthTexture=rt}if(A.depthTexture&&!S.__autoAllocateDepthBuffer)if(k)for(let rt=0;rt<6;rt++)zt(S.__webglFramebuffer[rt],A,rt);else A.texture.mipmaps.length>0?zt(S.__webglFramebuffer[0],A,0):zt(S.__webglFramebuffer,A,0);else if(k){S.__webglDepthbuffer=[];for(let rt=0;rt<6;rt++)if(e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[rt]),S.__webglDepthbuffer[rt]===void 0)S.__webglDepthbuffer[rt]=s.createRenderbuffer(),ye(S.__webglDepthbuffer[rt],A,!1);else{let it=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ht=S.__webglDepthbuffer[rt];s.bindRenderbuffer(s.RENDERBUFFER,ht),s.framebufferRenderbuffer(s.FRAMEBUFFER,it,s.RENDERBUFFER,ht)}}else if(A.texture.mipmaps.length>0?e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=s.createRenderbuffer(),ye(S.__webglDepthbuffer,A,!1);else{let it=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ht=S.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ht),s.framebufferRenderbuffer(s.FRAMEBUFFER,it,s.RENDERBUFFER,ht)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Re(A,S,k){let rt=n.get(A);S!==void 0&&Xt(rt.__webglFramebuffer,A,A.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),k!==void 0&&$t(A)}function Ne(A){let S=A.texture,k=n.get(A),rt=n.get(S);A.addEventListener("dispose",D),P(A);let it=A.textures,ht=A.isWebGLCubeRenderTarget===!0,gt=it.length>1;if(gt||(rt.__webglTexture===void 0&&(rt.__webglTexture=s.createTexture()),rt.__version=S.version,o.memory.textures++),ht){k.__webglFramebuffer=[];for(let G=0;G<6;G++)if(S.mipmaps.length>0){k.__webglFramebuffer[G]=[];for(let j=0;j<S.mipmaps.length;j++)k.__webglFramebuffer[G][j]=s.createFramebuffer()}else k.__webglFramebuffer[G]=s.createFramebuffer()}else{if(S.mipmaps.length>0){k.__webglFramebuffer=[];for(let G=0;G<S.mipmaps.length;G++)k.__webglFramebuffer[G]=s.createFramebuffer()}else k.__webglFramebuffer=s.createFramebuffer();if(gt)for(let G=0,j=it.length;G<j;G++){let ct=n.get(it[G]);ct.__webglTexture===void 0&&(ct.__webglTexture=s.createTexture(),o.memory.textures++)}if(A.samples>0&&ft(A)===!1){k.__webglMultisampledFramebuffer=s.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let G=0;G<it.length;G++){let j=it[G];k.__webglColorRenderbuffer[G]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,k.__webglColorRenderbuffer[G]);let ct=r.convert(j.format,j.colorSpace),L=r.convert(j.type),K=E(j.internalFormat,ct,L,j.normalized,j.colorSpace,A.isXRRenderTarget===!0),$=Ht(A);s.renderbufferStorageMultisample(s.RENDERBUFFER,$,K,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+G,s.RENDERBUFFER,k.__webglColorRenderbuffer[G])}s.bindRenderbuffer(s.RENDERBUFFER,null),A.depthBuffer&&(k.__webglDepthRenderbuffer=s.createRenderbuffer(),ye(k.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ht){e.bindTexture(s.TEXTURE_CUBE_MAP,rt.__webglTexture),bt(s.TEXTURE_CUBE_MAP,S);for(let G=0;G<6;G++)if(S.mipmaps.length>0)for(let j=0;j<S.mipmaps.length;j++)Xt(k.__webglFramebuffer[G][j],A,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+G,j);else Xt(k.__webglFramebuffer[G],A,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+G,0);w(S)?y(s.TEXTURE_CUBE_MAP):S.mipmaps.length>0&&s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),e.unbindTexture()}else if(gt){for(let G=0,j=it.length;G<j;G++){let ct=it[G],L=n.get(ct),K=s.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(K=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(K,L.__webglTexture),bt(K,ct),Xt(k.__webglFramebuffer,A,ct,s.COLOR_ATTACHMENT0+G,K,0),w(ct)&&y(K)}e.unbindTexture()}else{let G=s.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(G=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(G,rt.__webglTexture),bt(G,S),S.mipmaps.length>0)for(let j=0;j<S.mipmaps.length;j++)Xt(k.__webglFramebuffer[j],A,S,s.COLOR_ATTACHMENT0,G,j);else Xt(k.__webglFramebuffer,A,S,s.COLOR_ATTACHMENT0,G,0);w(S)?y(G):S.mipmaps.length>0&&s.texParameteri(G,s.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),e.unbindTexture()}A.depthBuffer&&$t(A)}function O(A){let S=A.textures;for(let k=0,rt=S.length;k<rt;k++){let it=S[k];if(w(it)&&it.mipmapsAutoUpdate===!0){let ht=T(A),gt=n.get(it).__webglTexture;e.bindTexture(ht,gt),y(ht),e.unbindTexture()}}}let pe=[];function he(A){if(A.samples>0){if(ft(A)===!1){let S=A.textures,k=A.width,rt=A.height,it=s.COLOR_BUFFER_BIT,ht=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,gt=n.get(A),G=S.length>1;if(G)for(let ct=0;ct<S.length;ct++)e.bindFramebuffer(s.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ct,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,gt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ct,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,gt.__webglMultisampledFramebuffer),A.texture.mipmaps.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,gt.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,gt.__webglFramebuffer);for(let ct=0;ct<S.length;ct++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(it|=s.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(it|=s.STENCIL_BUFFER_BIT)),G){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,gt.__webglColorRenderbuffer[ct]);let L=n.get(S[ct]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,L,0)}s.blitFramebuffer(0,0,k,rt,0,0,k,rt,it,s.NEAREST),l===!0&&(pe.length=0,pe.push(s.COLOR_ATTACHMENT0+ct),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&pe.push(ht),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,pe))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),G)for(let ct=0;ct<S.length;ct++){e.bindFramebuffer(s.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ct,s.RENDERBUFFER,gt.__webglColorRenderbuffer[ct]);let L=n.get(S[ct]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,gt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ct,s.TEXTURE_2D,L,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,gt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&l){let S=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[S])}}}function Ht(A){return Math.min(i.maxSamples,A.samples)}function ft(A){let S=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function fe(A){let S=o.render.frame;h.get(A)!==S&&(h.set(A,S),A.update())}function Ot(A,S){let k=A.colorSpace,rt=A.format,it=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||k!==Xo&&k!==ds&&(le.getTransfer(k)===_e?(rt!==Ni||it!==Yn)&&Vt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Gt("WebGLTextures: Unsupported texture color space:",k)),S}function kt(A){return typeof HTMLImageElement!="undefined"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame!="undefined"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=Ut,this.resetTextureUnits=R,this.getTextureUnits=tt,this.setTextureUnits=yt,this.setTexture2D=lt,this.setTexture2DArray=_t,this.setTexture3D=Mt,this.setTextureCube=ut,this.rebindTextures=Re,this.setupRenderTarget=Ne,this.updateRenderTargetMipmap=O,this.updateMultisampleRenderTarget=he,this.setupDepthRenderbuffer=$t,this.setupFrameBufferTexture=Xt,this.useMultisampledRTT=ft,this.dispose=B}function tM(s,t){function e(n,i=ds){let r,o=le.getTransfer(i);if(n===Yn)return s.UNSIGNED_BYTE;if(n===_c)return s.UNSIGNED_SHORT_4_4_4_4;if(n===xc)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Wu)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Xu)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===Gu)return s.BYTE;if(n===Hu)return s.SHORT;if(n===lo)return s.UNSIGNED_SHORT;if(n===gc)return s.INT;if(n===Li)return s.UNSIGNED_INT;if(n===xi)return s.FLOAT;if(n===Di)return s.HALF_FLOAT;if(n===qu)return s.ALPHA;if(n===Yu)return s.RGB;if(n===Ni)return s.RGBA;if(n===as)return s.DEPTH_COMPONENT;if(n===fs)return s.DEPTH_STENCIL;if(n===vc)return s.RED;if(n===yc)return s.RED_INTEGER;if(n===zs)return s.RG;if(n===Sc)return s.RG_INTEGER;if(n===Mc)return s.RGBA_INTEGER;if(n===_a||n===xa||n===va||n===ya)if(o===_e)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===_a)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===xa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===va)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ya)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===_a)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===xa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===va)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ya)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===bc||n===Tc||n===wc||n===Ec)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===bc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Tc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===wc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ec)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ac||n===Cc||n===Rc||n===Pc||n===Ic||n===Sa||n===Lc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ac||n===Cc)return o===_e?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Rc)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Pc)return r.COMPRESSED_R11_EAC;if(n===Ic)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Sa)return r.COMPRESSED_RG11_EAC;if(n===Lc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Dc||n===Nc||n===Uc||n===Oc||n===Fc||n===Bc||n===zc||n===kc||n===Vc||n===Gc||n===Hc||n===Wc||n===Xc||n===qc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Dc)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Nc)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Uc)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Oc)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Fc)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Bc)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===zc)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===kc)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Vc)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Gc)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Hc)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Wc)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Xc)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===qc)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Yc||n===Zc||n===Jc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Yc)return o===_e?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Zc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Jc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===$c||n===Kc||n===Ma||n===Qc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===$c)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Kc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ma)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Qc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===dr?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}var eM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,nM=`
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

}`,vf=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new na(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Gi({vertexShader:eM,fragmentShader:nM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Je(new sa(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},yf=class extends zi{constructor(t,e){super();let n=this,i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,f=null,u=null,m=null,_=typeof XRWebGLBinding!="undefined",p=new vf,g={},v=e.getContextAttributes(),w=null,y=null,T=[],E=[],x=new re,b=null,P=null,C=new bn;C.viewport=new Le;let N=new bn;N.viewport=new Le;let D=[C,N],H=new hc,I=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let lt=T[J];return lt===void 0&&(lt=new eo,T[J]=lt),lt.getTargetRaySpace()},this.getControllerGrip=function(J){let lt=T[J];return lt===void 0&&(lt=new eo,T[J]=lt),lt.getGripSpace()},this.getHand=function(J){let lt=T[J];return lt===void 0&&(lt=new eo,T[J]=lt),lt.getHandSpace()};function X(J){let lt=E.indexOf(J.inputSource);if(lt===-1)return;let _t=T[lt];_t!==void 0&&(_t.update(J.inputSource,J.frame,c||o),_t.dispatchEvent({type:J.type,data:J.inputSource}))}function F(){i.removeEventListener("select",X),i.removeEventListener("selectstart",X),i.removeEventListener("selectend",X),i.removeEventListener("squeeze",X),i.removeEventListener("squeezestart",X),i.removeEventListener("squeezeend",X),i.removeEventListener("end",F),i.removeEventListener("inputsourceschange",Q);for(let J=0;J<T.length;J++){let lt=E[J];lt!==null&&(E[J]=null,T[J].disconnect(lt))}I=null,B=null,p.reset();for(let J in g)delete g[J];if(t.setRenderTarget(w),u=null,f=null,d=null,i=null,y=null,Ut.stop(),n.isPresenting=!1,t.setPixelRatio(b),t.setSize(x.width,x.height,!1),P!==null){let J=P.camera;J.fov=P.fov,J.zoom=P.zoom,J.updateProjectionMatrix(),P=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,n.isPresenting===!0&&Vt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,n.isPresenting===!0&&Vt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return f!==null?f:u},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(i,e)),d},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(J){if(i=J,i!==null){if(w=t.getRenderTarget(),i.addEventListener("select",X),i.addEventListener("selectstart",X),i.addEventListener("selectend",X),i.addEventListener("squeeze",X),i.addEventListener("squeezestart",X),i.addEventListener("squeezeend",X),i.addEventListener("end",F),i.addEventListener("inputsourceschange",Q),v.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(x),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let _t=null,Mt=null,ut=null;v.depth&&(ut=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,_t=v.stencil?fs:as,Mt=v.stencil?dr:Li);let Nt={colorFormat:e.RGBA8,depthFormat:ut,scaleFactor:r};d=this.getBinding(),f=d.createProjectionLayer(Nt),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),y=new ri(f.textureWidth,f.textureHeight,{format:Ni,type:Yn,depthTexture:new hs(f.textureWidth,f.textureHeight,Mt,void 0,void 0,void 0,void 0,void 0,void 0,_t),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let _t={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(i,e,_t),i.updateRenderState({baseLayer:u}),t.setPixelRatio(1),t.setSize(u.framebufferWidth,u.framebufferHeight,!1),y=new ri(u.framebufferWidth,u.framebufferHeight,{format:Ni,type:Yn,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Ut.setContext(i),Ut.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function Q(J){for(let lt=0;lt<J.removed.length;lt++){let _t=J.removed[lt],Mt=E.indexOf(_t);Mt>=0&&(E[Mt]=null,T[Mt].disconnect(_t))}for(let lt=0;lt<J.added.length;lt++){let _t=J.added[lt],Mt=E.indexOf(_t);if(Mt===-1){for(let Nt=0;Nt<T.length;Nt++)if(Nt>=E.length){E.push(_t),Mt=Nt;break}else if(E[Nt]===null){E[Nt]=_t,Mt=Nt;break}if(Mt===-1)break}let ut=T[Mt];ut&&ut.connect(_t)}}function W(J,lt){lt===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(lt.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(i===null)return;let lt=J.near,_t=J.far;p.texture!==null&&(p.depthNear>0&&(lt=p.depthNear),p.depthFar>0&&(_t=p.depthFar)),H.near=N.near=C.near=lt,H.far=N.far=C.far=_t,(I!==H.near||B!==H.far)&&(i.updateRenderState({depthNear:H.near,depthFar:H.far}),I=H.near,B=H.far),H.layers.mask=J.layers.mask|6,C.layers.mask=H.layers.mask&-5,N.layers.mask=H.layers.mask&-3;let Mt=J.parent,ut=H.cameras;W(H,Mt);for(let Nt=0;Nt<ut.length;Nt++)W(ut[Nt],Mt);H.projectionMatrix.copy(C.projectionMatrix),H.projectionMatrixInverse.copy(C.projectionMatrixInverse),P===null&&J.isPerspectiveCamera&&(P={camera:J,fov:J.fov,zoom:J.zoom}),R(J,H,Mt)};function R(J,lt,_t){_t===null?J.matrix.copy(lt.matrixWorld):(J.matrix.copy(_t.matrixWorld),J.matrix.invert(),J.matrix.multiply(lt.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(lt.projectionMatrix),J.projectionMatrixInverse.copy(lt.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Hl*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(f===null&&u===null))return l},this.setFoveation=function(J){l=J,f!==null&&(f.fixedFoveation=J),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=J)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(H)},this.getCameraTexture=function(J){return g[J]};let tt=null;function yt(J,lt){if(h=lt.getViewerPose(c||o),m=lt,h!==null){let _t=h.views;u!==null&&(t.setRenderTargetFramebuffer(y,u.framebuffer),t.setRenderTarget(y));let Mt=!1;_t.length!==H.cameras.length&&(H.cameras.length=0,Mt=!0);for(let Rt=0;Rt<_t.length;Rt++){let bt=_t[Rt],Ct=null;if(u!==null)Ct=u.getViewport(bt);else{let ne=d.getViewSubImage(f,bt);Ct=ne.viewport,Rt===0&&(t.setRenderTargetTextures(y,ne.colorTexture,ne.depthStencilTexture),t.setRenderTarget(y))}let Tt=D[Rt];Tt===void 0&&(Tt=new bn,Tt.layers.enable(Rt),Tt.viewport=new Le,D[Rt]=Tt),Tt.matrix.fromArray(bt.transform.matrix),Tt.matrix.decompose(Tt.position,Tt.quaternion,Tt.scale),Tt.projectionMatrix.fromArray(bt.projectionMatrix),Tt.projectionMatrixInverse.copy(Tt.projectionMatrix).invert(),Tt.viewport.set(Ct.x,Ct.y,Ct.width,Ct.height),Rt===0&&(H.matrix.copy(Tt.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),Mt===!0&&H.cameras.push(Tt)}let ut=i.enabledFeatures;if(ut&&ut.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){d=n.getBinding();let Rt=d.getDepthInformation(_t[0]);Rt&&Rt.isValid&&Rt.texture&&p.init(Rt,i.renderState)}if(ut&&ut.includes("camera-access")&&_){t.state.unbindTexture(),d=n.getBinding();for(let Rt=0;Rt<_t.length;Rt++){let bt=_t[Rt].camera;if(bt){let Ct=g[bt];Ct||(Ct=new na,g[bt]=Ct);let Tt=d.getCameraImage(bt);Ct.sourceTexture=Tt}}}}for(let _t=0;_t<T.length;_t++){let Mt=E[_t],ut=T[_t];Mt!==null&&ut!==void 0&&ut.update(Mt,lt,c||o)}tt&&tt(J,lt),lt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:lt}),m=null}let Ut=new Sm;Ut.setAnimationLoop(yt),this.setAnimationLoop=function(J){tt=J},this.dispose=function(){}}},iM=new Se,Im=new Wt;Im.set(-1,0,0,0,1,0,0,0,1);function sM(s,t){function e(p,g){p.matrixAutoUpdate===!0&&p.updateMatrix(),g.value.copy(p.matrix)}function n(p,g){g.color.getRGB(p.fogColor.value,ef(s)),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function i(p,g,v,w,y){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(p,g):g.isMeshLambertMaterial?(r(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(p,g),d(p,g)):g.isMeshPhongMaterial?(r(p,g),h(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(p,g),f(p,g),g.isMeshPhysicalMaterial&&u(p,g,y)):g.isMeshMatcapMaterial?(r(p,g),m(p,g)):g.isMeshDepthMaterial?r(p,g):g.isMeshDistanceMaterial?(r(p,g),_(p,g)):g.isMeshNormalMaterial?r(p,g):g.isLineBasicMaterial?(o(p,g),g.isLineDashedMaterial&&a(p,g)):g.isPointsMaterial?l(p,g,v,w):g.isSpriteMaterial?c(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map,e(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.bumpMap&&(p.bumpMap.value=g.bumpMap,e(g.bumpMap,p.bumpMapTransform),p.bumpScale.value=g.bumpScale,g.side===pn&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,e(g.normalMap,p.normalMapTransform),p.normalScale.value.copy(g.normalScale),g.side===pn&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,e(g.displacementMap,p.displacementMapTransform),p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,p.emissiveMapTransform)),g.specularMap&&(p.specularMap.value=g.specularMap,e(g.specularMap,p.specularMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);let v=t.get(g),w=v.envMap,y=v.envMapRotation;w&&(p.envMap.value=w,p.envMapRotation.value.setFromMatrix4(iM.makeRotationFromEuler(y)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(Im),p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap&&(p.lightMap.value=g.lightMap,p.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,p.lightMapTransform)),g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,p.aoMapTransform))}function o(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,g.map&&(p.map.value=g.map,e(g.map,p.mapTransform))}function a(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function l(p,g,v,w){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*v,p.scale.value=w*.5,g.map&&(p.map.value=g.map,e(g.map,p.uvTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function c(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map,e(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function h(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4)}function d(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap)}function f(p,g){p.metalness.value=g.metalness,g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,p.metalnessMapTransform)),p.roughness.value=g.roughness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,p.roughnessMapTransform)),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function u(p,g,v){p.ior.value=g.ior,g.diffuseRoughness>0&&(p.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=g.diffuseRoughnessMap,e(g.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,p.sheenColorMapTransform)),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,p.sheenRoughnessMapTransform))),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,p.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(p.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===pn&&p.clearcoatNormalScale.value.negate())),g.dispersion>0&&(p.dispersion.value=g.dispersion),g.retroreflectivity>0&&(p.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(p.iridescence.value=g.iridescence,p.iridescenceIOR.value=g.iridescenceIOR,p.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(p.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,p.iridescenceMapTransform)),g.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,p.transmissionMapTransform)),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(p.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(p.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,p.specularColorMapTransform)),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,g){g.matcap&&(p.matcap.value=g.matcap)}function _(p,g){let v=t.get(g).light;p.referencePosition.value.setFromMatrixPosition(v.matrixWorld),p.nearDistance.value=v.shadow.camera.near,p.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function rM(s,t,e,n){let i={},r={};function o(v,w){let y=w.program;n.uniformBlockBinding(v,y,i[v.id])}function a(v,w){let y=i[v.id];y===void 0&&(m(v),y=l(v),i[v.id]=y,v.addEventListener("dispose",p));let T=w.program;n.updateUBOMapping(v,T);let E=t.render.frame;r[v.id]!==E&&(c(v),r[v.id]=E)}function l(v){let w=s.createBuffer(),y=v.__size,T=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,w),s.bufferData(s.UNIFORM_BUFFER,y,T),s.bindBuffer(s.UNIFORM_BUFFER,null),w}function c(v){let w=i[v.id],y=v.uniforms,T=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,w);for(let E=0,x=y.length;E<x;E++){let b=y[E];if(Array.isArray(b))for(let P=0,C=b.length;P<C;P++)h(b[P],E,P,T);else h(b,E,0,T)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function h(v,w,y,T){if(f(v,w,y,T)===!0){let E=v.__offset,x=v.value;if(Array.isArray(x)){let b=0;for(let P=0;P<x.length;P++){let C=x[P],N=_(C,!0);d(C,v.__data,b),b+=N.storage/Float32Array.BYTES_PER_ELEMENT}}else d(x,v.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,E,v.__data)}}function d(v,w,y){typeof v=="number"||typeof v=="boolean"?w[y]=v:v.isMatrix3?(w[y]=v.elements[0],w[y+1]=v.elements[1],w[y+2]=v.elements[2],w[y+3]=0,w[y+4]=v.elements[3],w[y+5]=v.elements[4],w[y+6]=v.elements[5],w[y+7]=0,w[y+8]=v.elements[6],w[y+9]=v.elements[7],w[y+10]=v.elements[8],w[y+11]=0):ArrayBuffer.isView(v)?w.set(v.subarray(0,w.length-y),y):v.toArray(w,y)}function f(v,w,y,T){let E=v.value,x=w+"_"+y;if(Array.isArray(E)){T[x]===void 0&&(T[x]=[]);let b=T[x],P=!1;for(let C=0;C<E.length;C++)u(E[C],b,C)===!0&&(P=!0);return P}return u(E,T,x)}function u(v,w,y){if(w[y]===void 0)return typeof v=="number"||typeof v=="boolean"?w[y]=v:ArrayBuffer.isView(v)?w[y]=v.slice():w[y]=v.clone(),!0;{let T=w[y];if(typeof v=="number"||typeof v=="boolean"){if(T!==v)return w[y]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(T.equals(v)===!1)return T.copy(v),!0}}return!1}function m(v){let w=v.uniforms,y=0,T=16;for(let x=0,b=w.length;x<b;x++){let P=Array.isArray(w[x])?w[x]:[w[x]];for(let C=0,N=P.length;C<N;C++){let D=P[C],H=Array.isArray(D.value)?D.value:[D.value],I=Array.isArray(w[x])||Array.isArray(D.value),B=y;for(let F=0,Q=H.length;F<Q;F++){let W=H[F],R=_(W,I),tt=y%T,yt=tt%R.boundary,Ut=tt+yt;y+=yt,Ut!==0&&T-Ut<R.storage&&(y+=T-Ut),F===0&&(B=y),y+=R.storage}let X=D.type==="int"?Int32Array:D.type==="uint"?Uint32Array:Float32Array;D.__data=new X((y-B)/Float32Array.BYTES_PER_ELEMENT),D.__offset=B}}let E=y%T;return E>0&&(y+=T-E),v.__size=y,v.__cache={},this}function _(v,w){let y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=16,y.storage=48):v.isMatrix4?(y.boundary=16,y.storage=64):v.isTexture?Vt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(y.boundary=16,y.storage=v.byteLength):Vt("WebGLRenderer: Unsupported uniform value type.",v),w===!0&&(y.boundary=16,y.storage=Math.ceil(y.storage/16)*16),y}function p(v){let w=v.target;w.removeEventListener("dispose",p),s.deleteBuffer(i[w.id]),delete i[w.id],delete r[w.id]}function g(){for(let v in i)s.deleteBuffer(i[v]);i={},r={}}return{bind:o,update:a,dispose:g}}var oM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Xi=null;function aM(){return Xi===null&&(Xi=new Qo(oM,16,16,zs,Di),Xi.name="DFG_LUT",Xi.minFilter=Nn,Xi.magFilter=Nn,Xi.wrapS=Bi,Xi.wrapT=Bi,Xi.generateMipmaps=!1,Xi.needsUpdate=!0),Xi}var nh=class{constructor(t={}){let{canvas:e=Xp(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1,outputBufferType:u=Yn}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;let _=u,p=new Set([Mc,Sc,yc]),g=new Set([Yn,Li,lo,dr,_c,xc]),v=new Uint32Array(4),w=new Int32Array(4),y={textures:[],min:[],max:[],resolution:[]},T=null,E=null,x=[],b=[],P=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Wi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,N=!1,D=null,H=null,I=null,B=null;this._outputColorSpace=si;let X=0,F=0,Q=null,W=-1,R=null,tt=new Le,yt=new Le,Ut=null,J=new ee(0),lt=0,_t=e.width,Mt=e.height,ut=1,Nt=null,de=null,Rt=new Le(0,0,_t,Mt),bt=new Le(0,0,_t,Mt),Ct=!1,Tt=new Ns,ne=new Jl,Jt=!1,Y=!1,Xt=new Se,ye=new V,zt=new Le,$t={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Re=!1;function Ne(){return Q===null?ut:1}let O=n;function pe(M,U){return e.getContext(M,U)}let he,Ht,ft,fe,Ot,kt,A,S,k,rt,it,ht,gt,G,j,ct,L,K,$,dt,at,pt,ot;try{let M={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",et,!1),e.addEventListener("webglcontextrestored",xt,!1),e.addEventListener("webglcontextcreationerror",nt,!1),O===null){let U="webgl2";if(O=pe(U,M),O===null)throw pe(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}mt()}catch(M){throw e.removeEventListener("webglcontextlost",et,!1),e.removeEventListener("webglcontextrestored",xt,!1),e.removeEventListener("webglcontextcreationerror",nt,!1),Gt("WebGLRenderer: "+M.message),M}function mt(){he=new xy(O),he.init(),at=new tM(O,he),Ht=new ay(O,he,t,at),ft=new QS(O,he),Ht.reversedDepthBuffer&&f&&ft.buffers.depth.setReversed(!0),H=O.createFramebuffer(),I=O.createFramebuffer(),B=O.createFramebuffer(),fe=new Sy(O),Ot=new BS,kt=new jS(O,he,ft,Ot,Ht,at,fe),A=new _y(C),S=new b0(O),pt=new ry(O,S),k=new vy(O,S,fe,pt),rt=new by(O,k,S,pt,fe),K=new My(O,Ht,kt),j=new ly(Ot),it=new FS(C,A,he,Ht,pt,j),ht=new sM(C,Ot),gt=new kS,G=new qS(he),L=new sy(C,A,ft,rt,m,l),ct=new KS(C,rt,Ht),ot=new rM(O,fe,Ht,ft),$=new oy(O,he,fe),dt=new yy(O,he,fe),fe.programs=it.programs,C.capabilities=Ht,C.extensions=he,C.properties=Ot,C.renderLists=gt,C.shadowMap=ct,C.state=ft,C.info=fe}_!==Yn&&(P=new wy(_,e.width,e.height,a,i,r));let st=new yf(C,O);this.xr=st,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let M=he.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=he.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return ut},this.setPixelRatio=function(M){M!==void 0&&(ut=M,this.setSize(_t,Mt,!1))},this.getSize=function(M){return M.set(_t,Mt)},this.setSize=function(M,U,Z=!0){if(st.isPresenting){Vt("WebGLRenderer: Can't change size while VR device is presenting.");return}_t=M,Mt=U,e.width=Math.floor(M*ut),e.height=Math.floor(U*ut),Z===!0&&(e.style.width=M+"px",e.style.height=U+"px"),P!==null&&P.setSize(e.width,e.height),this.setViewport(0,0,M,U)},this.getDrawingBufferSize=function(M){return M.set(_t*ut,Mt*ut).floor()},this.setDrawingBufferSize=function(M,U,Z){_t=M,Mt=U,ut=Z,e.width=Math.floor(M*Z),e.height=Math.floor(U*Z),this.setViewport(0,0,M,U)},this.setEffects=function(M){if(_===Yn){Gt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let U=0;U<M.length;U++)if(M[U].isOutputPass===!0){Vt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}P.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(tt)},this.getViewport=function(M){return M.copy(Rt)},this.setViewport=function(M,U,Z,z){M.isVector4?Rt.set(M.x,M.y,M.z,M.w):Rt.set(M,U,Z,z),ft.viewport(tt.copy(Rt).multiplyScalar(Ne()).round())},this.getScissor=function(M){return M.copy(bt)},this.setScissor=function(M,U,Z,z){M.isVector4?bt.set(M.x,M.y,M.z,M.w):bt.set(M,U,Z,z),ft.scissor(yt.copy(bt).multiplyScalar(Ne()).round())},this.getScissorTest=function(){return Ct},this.setScissorTest=function(M){ft.setScissorTest(Ct=M)},this.setOpaqueSort=function(M){Nt=M},this.setTransparentSort=function(M){de=M},this.getClearColor=function(M){return M.copy(L.getClearColor())},this.setClearColor=function(){L.setClearColor(...arguments)},this.getClearAlpha=function(){return L.getClearAlpha()},this.setClearAlpha=function(){L.setClearAlpha(...arguments)},this.clear=function(M=!0,U=!0,Z=!0){let z=0;if(M){let q=!1;if(Q!==null){let St=Q.texture.format;q=p.has(St)}if(q){let St=Q.texture.type,It=g.has(St),vt=L.getClearColor(),At=L.getClearAlpha(),Ft=vt.r,Yt=vt.g,oe=vt.b;It?(v[0]=Ft,v[1]=Yt,v[2]=oe,v[3]=At,O.clearBufferuiv(O.COLOR,0,v)):(w[0]=Ft,w[1]=Yt,w[2]=oe,w[3]=At,O.clearBufferiv(O.COLOR,0,w))}else z|=O.COLOR_BUFFER_BIT}U&&(z|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Z&&(z|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z!==0&&O.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),D=M},this.dispose=function(){e.removeEventListener("webglcontextlost",et,!1),e.removeEventListener("webglcontextrestored",xt,!1),e.removeEventListener("webglcontextcreationerror",nt,!1),L.dispose(),gt.dispose(),G.dispose(),kt.dispose(),Ot.dispose(),A.dispose(),rt.dispose(),k.dispose(),pt.dispose(),ot.dispose(),it.dispose(),st.dispose(),st.removeEventListener("sessionstart",be),st.removeEventListener("sessionend",ge),Qe.stop()};function et(M){M.preventDefault(),Qu("WebGLRenderer: Context Lost."),N=!0}function xt(){Qu("WebGLRenderer: Context Restored."),N=!1;let M=fe.autoReset,U=ct.enabled,Z=ct.autoUpdate,z=ct.needsUpdate,q=ct.type;mt(),fe.autoReset=M,ct.enabled=U,ct.autoUpdate=Z,ct.needsUpdate=z,ct.type=q}function nt(M){Gt("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Et(M){let U=M.target;U.removeEventListener("dispose",Et),ie(U)}function ie(M){qt(M),Ot.remove(M)}function qt(M){let U=Ot.get(M).programs;U!==void 0&&(U.forEach(function(Z){it.releaseProgram(Z)}),M.isShaderMaterial&&it.releaseShaderCache(M))}this.renderBufferDirect=function(M,U,Z,z,q,St){U===null&&(U=$t);let It=q.isMesh&&q.matrixWorld.determinantAffine()<0,vt=mi(M,U,Z,z,q);ft.setMaterial(z,It);let At=Z.index,Ft=1;if(z.wireframe===!0){if(At=k.getWireframeAttribute(Z),At===void 0)return;Ft=2}let Yt=Z.drawRange,oe=Z.attributes.position,Lt=Yt.start*Ft,ae=(Yt.start+Yt.count)*Ft;St!==null&&(Lt=Math.max(Lt,St.start*Ft),ae=Math.min(ae,(St.start+St.count)*Ft)),At!==null?(Lt=Math.max(Lt,0),ae=Math.min(ae,At.count)):oe!=null&&(Lt=Math.max(Lt,0),ae=Math.min(ae,oe.count));let Ye=ae-Lt;if(Ye<0||Ye===1/0)return;pt.setup(q,z,vt,Z,At);let Ae,we=$;if(At!==null&&(Ae=S.get(At),we=dt,we.setIndex(Ae)),q.isMesh)z.wireframe===!0?(ft.setLineWidth(z.wireframeLinewidth*Ne()),we.setMode(O.LINES)):we.setMode(O.TRIANGLES);else if(q.isLine){let vn=z.linewidth;vn===void 0&&(vn=1),ft.setLineWidth(vn*Ne()),q.isLineSegments?we.setMode(O.LINES):q.isLineLoop?we.setMode(O.LINE_LOOP):we.setMode(O.LINE_STRIP)}else q.isPoints?we.setMode(O.POINTS):q.isSprite&&we.setMode(O.TRIANGLES);if(q.isBatchedMesh)if(he.get("WEBGL_multi_draw"))we.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{let vn=q._multiDrawStarts,Dt=q._multiDrawCounts,Ln=q._multiDrawCount,me=At?S.get(At).bytesPerElement:1,ir=Ot.get(z).currentProgram.getUniforms();for(let yn=0;yn<Ln;yn++)ir.setValue(O,"_gl_DrawID",yn),we.render(vn[yn]/me,Dt[yn])}else if(q.isInstancedMesh)we.renderInstances(Lt,Ye,q.count);else if(Z.isInstancedBufferGeometry){let vn=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,Dt=Math.min(Z.instanceCount,vn);we.renderInstances(Lt,Ye,Dt)}else we.render(Lt,Ye)};function Pe(M,U,Z,z){D!==null&&M.isNodeMaterial&&D.setObject(z,M),Jt===!0&&j.setState(M,Z,!1),M.transparent===!0&&M.side===Hi&&M.forceSinglePass===!1?(M.side=pn,M.needsUpdate=!0,ei(M,U,z),M.side=Bs,M.needsUpdate=!0,ei(M,U,z),M.side=Hi):ei(M,U,z)}this.compile=function(M,U,Z=null){Z===null&&(Z=M),D!==null&&D.renderStart(M,U,Z),E=G.get(Z),E.init(U),b.push(E),Z.traverseVisible(function(q){q.isLight&&q.layers.test(U.layers)&&(E.pushLight(q),q.castShadow&&E.pushShadow(q))}),M!==Z&&M.traverseVisible(function(q){q.isLight&&q.layers.test(U.layers)&&(E.pushLight(q),q.castShadow&&E.pushShadow(q))}),E.setupLights(),D!==null&&D.updateLights(E.state.lightsArray),Y=this.localClippingEnabled,Jt=j.init(this.clippingPlanes,Y),Jt===!0&&j.setGlobalState(this.clippingPlanes,U),D!==null&&ct.render(E.state.shadowsArray,Z,U);let z=new Set;return M.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;let St=q.material;if(St)if(Array.isArray(St))for(let It=0;It<St.length;It++){let vt=St[It];Pe(vt,Z,U,q),z.add(vt)}else Pe(St,Z,U,q),z.add(St)}),E=b.pop(),D!==null&&D.renderEnd(),z},this.compileAsync=function(M,U,Z=null){let z=this.compile(M,U,Z);return new Promise(q=>{function St(){if(z.forEach(function(It){let At=Ot.get(It).currentProgram;(At===void 0||At.isReady())&&z.delete(It)}),z.size===0){q(M);return}setTimeout(St,10)}he.get("KHR_parallel_shader_compile")!==null?St():setTimeout(St,10)})};let Xe=null;function Ie(M){Xe&&Xe(M)}function be(){Qe.stop()}function ge(){Qe.start()}let Qe=new Sm;Qe.setAnimationLoop(Ie),typeof self!="undefined"&&Qe.setContext(self),this.setAnimationLoop=function(M){Xe=M,st.setAnimationLoop(M),M===null?Qe.stop():Qe.start()},st.addEventListener("sessionstart",be),st.addEventListener("sessionend",ge),this.render=function(M,U){if(U!==void 0&&U.isCamera!==!0){Gt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;D!==null&&D.renderStart(M,U);let Z=st.enabled===!0&&st.isPresenting===!0,z=P!==null&&(Q===null||Z)&&P.begin(C,Q);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),st.enabled===!0&&st.isPresenting===!0&&(P===null||P.isCompositing()===!1)&&(st.cameraAutoUpdate===!0&&st.updateCamera(U),U=st.getCamera()),M.isScene===!0&&M.onBeforeRender(C,M,U,Q),E=G.get(M,b.length),E.init(U),E.state.textureUnits=kt.getTextureUnits(),b.push(E),Xt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),U.isArrayCamera?ne.setFromArrayCamera(U):Tt.setFromProjectionMatrix(Xt,_i,U.reversedDepth),Y=this.localClippingEnabled,Jt=j.init(this.clippingPlanes,Y),T=gt.get(M,x.length),T.init(),x.push(T),this.info.render.frame++,st.enabled===!0&&st.isPresenting===!0){let It=C.xr.getDepthSensingMesh();It!==null&&Te(It,U,-1/0,C.sortObjects)}Te(M,U,0,C.sortObjects),T.finish(),D!==null&&D.updateLights(E.state.lightsArray),C.sortObjects===!0&&T.sort(Nt,de),Re=st.enabled===!1||st.isPresenting===!1||st.hasDepthSensing()===!1,Re&&L.addToRenderList(T,M),this.info.autoReset===!0&&this.info.reset(),Jt===!0&&j.beginShadows();let q=E.state.shadowsArray;if(ct.render(q,M,U),Jt===!0&&j.endShadows(),(z&&P.hasRenderPass())===!1){let It=T.opaque,vt=T.transmissive;if(E.setupLights(),U.isArrayCamera){let At=U.cameras;if(vt.length>0)for(let Ft=0,Yt=At.length;Ft<Yt;Ft++){let oe=At[Ft];ti(It,vt,M,oe)}Re&&L.render(M);for(let Ft=0,Yt=At.length;Ft<Yt;Ft++){let oe=At[Ft];xn(T,M,oe,oe.viewport)}}else vt.length>0&&ti(It,vt,M,U),Re&&L.render(M),xn(T,M,U)}Q!==null&&F===0&&(kt.updateMultisampleRenderTarget(Q),kt.updateRenderTargetMipmap(Q)),z&&P.end(C),M.isScene===!0&&M.onAfterRender(C,M,U),pt.resetDefaultState(),W=-1,R=null,b.pop(),b.length>0?(E=b[b.length-1],kt.setTextureUnits(E.state.textureUnits),Jt===!0&&j.setGlobalState(C.clippingPlanes,E.state.camera)):E=null,x.pop(),x.length>0?T=x[x.length-1]:T=null,D!==null&&D.renderEnd()};function Te(M,U,Z,z){if(M.visible===!1)return;if(M.layers.test(U.layers)){if(M.isGroup)Z=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(U);else if(M.isLight)E.pushLight(M),M.castShadow&&E.pushShadow(M);else if(M.isSprite){let It=U.isArrayCamera?ne:Tt;if(!M.frustumCulled||M.intersectsFrustum(It)){z&&zt.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Xt);let vt=rt.update(M),At=M.material;At.visible&&T.push(M,vt,At,Z,zt.z,null,U)}}else if(M.isMesh||M.isLine||M.isPoints){let It=U.isArrayCamera?ne:Tt;if(!M.frustumCulled||M.intersectsFrustum(It)){let vt=rt.update(M),At=M.material;if(z&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),zt.copy(M.boundingSphere.center)):(vt.boundingSphere===null&&vt.computeBoundingSphere(),zt.copy(vt.boundingSphere.center)),zt.applyMatrix4(M.matrixWorld).applyMatrix4(Xt)),Array.isArray(At)){let Ft=vt.groups;for(let Yt=0,oe=Ft.length;Yt<oe;Yt++){let Lt=Ft[Yt],ae=At[Lt.materialIndex];ae&&ae.visible&&T.push(M,vt,ae,Z,zt.z,Lt,U)}}else At.visible&&T.push(M,vt,At,Z,zt.z,null,U)}}}let St=M.children;for(let It=0,vt=St.length;It<vt;It++)Te(St[It],U,Z,z)}function xn(M,U,Z,z){let{opaque:q,transmissive:St,transparent:It}=M;E.setupLightsView(Z),Jt===!0&&j.setGlobalState(C.clippingPlanes,Z),z&&ft.viewport(tt.copy(z)),q.length>0&&ze(q,U,Z),St.length>0&&ze(St,U,Z),It.length>0&&ze(It,U,Z),ft.buffers.depth.setTest(!0),ft.buffers.depth.setMask(!0),ft.buffers.color.setMask(!0),ft.setPolygonOffset(!1)}function ti(M,U,Z,z){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[z.id]===void 0){let Lt=he.has("EXT_color_buffer_half_float")||he.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[z.id]=new ri(1,1,{generateMipmaps:!0,type:Lt?Di:Yn,minFilter:us,samples:Math.max(4,Ht.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:le.workingColorSpace})}let St=E.state.transmissionRenderTarget[z.id],It=z.viewport||tt;St.setSize(It.z*C.transmissionResolutionScale,It.w*C.transmissionResolutionScale);let vt=C.getRenderTarget(),At=C.getActiveCubeFace(),Ft=C.getActiveMipmapLevel();C.setRenderTarget(St),C.getClearColor(J),lt=C.getClearAlpha(),lt<1&&C.setClearColor(16777215,.5),C.clear(),Re&&L.render(Z);let Yt=C.toneMapping;C.toneMapping=Wi;let oe=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),E.setupLightsView(z),Jt===!0&&j.setGlobalState(C.clippingPlanes,z),ze(M,Z,z),kt.updateMultisampleRenderTarget(St),kt.updateRenderTargetMipmap(St),he.has("WEBGL_multisampled_render_to_texture")===!1){let Lt=!1;for(let ae=0,Ye=U.length;ae<Ye;ae++){let Ae=U[ae],{object:we,geometry:vn,material:Dt,group:Ln}=Ae;if(Dt.side===Hi&&we.layers.test(z.layers)){let me=Dt.side;Dt.side=pn,Dt.needsUpdate=!0,qe(we,Z,z,vn,Dt,Ln),Dt.side=me,Dt.needsUpdate=!0,Lt=!0}}Lt===!0&&(kt.updateMultisampleRenderTarget(St),kt.updateRenderTargetMipmap(St))}C.setRenderTarget(vt,At,Ft),C.setClearColor(J,lt),oe!==void 0&&(z.viewport=oe),C.toneMapping=Yt}function ze(M,U,Z){let z=U.isScene===!0?U.overrideMaterial:null;for(let q=0,St=M.length;q<St;q++){let It=M[q],{object:vt,geometry:At,group:Ft}=It,Yt=It.material;Yt.allowOverride===!0&&z!==null&&(Yt=z),vt.layers.test(Z.layers)&&qe(vt,U,Z,At,Yt,Ft)}}function qe(M,U,Z,z,q,St){D!==null&&q.isNodeMaterial&&D.setObject(M,q),M.onBeforeRender(C,U,Z,z,q,St),M.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),q.onBeforeRender(C,U,Z,z,M,St),q.transparent===!0&&q.side===Hi&&q.forceSinglePass===!1?(q.side=pn,q.needsUpdate=!0,C.renderBufferDirect(Z,U,z,q,M,St),q.side=Bs,q.needsUpdate=!0,C.renderBufferDirect(Z,U,z,q,M,St),q.side=Hi):C.renderBufferDirect(Z,U,z,q,M,St),M.onAfterRender(C,U,Z,z,q,St)}function je(M){let U=0;for(let Z of M)Z.texture!==null&&U++;return U}function ei(M,U,Z){U.isScene!==!0&&(U=$t);let z=Ot.get(M),q=E.state.lights,St=E.state.shadowsArray,It=q.state.version,vt=it.getParameters(M,q.state,St,U,Z,E.state.lightProbeGridArray),At=it.getProgramCacheKey(vt),Ft=z.programs;z.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?U.environment:null,z.fog=U.fog;let Yt=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;z.envMap=A.get(M.envMap||z.environment,Yt),z.envMapRotation=z.environment!==null&&M.envMap===null?U.environmentRotation:M.envMapRotation,Ft===void 0&&(M.addEventListener("dispose",Et),Ft=new Map,z.programs=Ft,z.programVariants=new Map);let oe=Ft.get(At);if(oe!==void 0){if(z.currentProgram===oe&&z.lightsStateVersion===It)return ke(M,vt),oe}else vt.uniforms=it.getUniforms(M),D!==null&&M.isNodeMaterial&&D.build(M,Z,vt),M.onBeforeCompile(vt,C),oe=it.acquireProgram(vt,At),Ft.set(At,oe),z.uniforms=vt.uniforms;let Lt=z.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Lt.clippingPlanes=j.uniform),ke(M,vt),z.needsLights=ll(M),z.lightsStateVersion=It,z.needsLights&&(Lt.ambientLightColor.value=q.state.ambient,Lt.lightProbe.value=q.state.probe,Lt.sunLights.value=q.state.sun,Lt.sunLightShadows.value=q.state.sunShadow,Lt.directionalLights.value=q.state.directional,Lt.directionalLightShadows.value=q.state.directionalShadow,Lt.spotLights.value=q.state.spot,Lt.spotLightShadows.value=q.state.spotShadow,Lt.rectAreaLights.value=q.state.rectArea,Lt.ltc_1.value=q.state.rectAreaLTC1,Lt.ltc_2.value=q.state.rectAreaLTC2,Lt.pointLights.value=q.state.point,Lt.pointLightShadows.value=q.state.pointShadow,Lt.hemisphereLights.value=q.state.hemi,Lt.sunShadowMatrix.value=q.state.sunShadowMatrix,Lt.sunShadowCascade.value=q.state.sunShadowCascade,Lt.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Lt.spotLightMatrix.value=q.state.spotLightMatrix,Lt.spotLightMap.value=q.state.spotLightMap,Lt.pointShadowMatrix.value=q.state.pointShadowMatrix),z.numLightProbeGrids=je(E.state.lightProbeGridArray),z.currentProgram=oe,z.uniformsList=null,oe}function Ur(M,U,Z,z,q){let St=Ot.get(M),It=St.currentProgram.id+","+z+","+q,vt=St.programVariants.get(It);return vt===void 0?(vt=ei(M,U,Z),St.programVariants.set(It,vt)):(St.currentProgram=vt,St.uniformsList=null,St.outputColorSpace=z,St.toneMapping=q),vt}function tn(M){if(M.uniformsList===null){let U=M.currentProgram.getUniforms();M.uniformsList=co.seqWithValue(U.seq,M.uniforms)}return M.uniformsList}function ke(M,U){let Z=Ot.get(M);Z.outputColorSpace=U.outputColorSpace,Z.batching=U.batching,Z.batchingColor=U.batchingColor,Z.instancing=U.instancing,Z.instancingColor=U.instancingColor,Z.instancingMorph=U.instancingMorph,Z.skinning=U.skinning,Z.morphTargets=U.morphTargets,Z.morphNormals=U.morphNormals,Z.morphColors=U.morphColors,Z.morphTargetsCount=U.morphTargetsCount,Z.numClippingPlanes=U.numClippingPlanes,Z.numIntersection=U.numClipIntersection,Z.vertexAlphas=U.vertexAlphas,Z.vertexTangents=U.vertexTangents,Z.toneMapping=U.toneMapping}function mi(M,U,Z,z,q){U.isScene!==!0&&(U=$t),kt.resetTextureUnits();let St=U.fog,It=z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial?U.environment:null,vt=Q===null?C.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:le.workingColorSpace,At=z.isMeshStandardMaterial||z.isMeshLambertMaterial&&!z.envMap||z.isMeshPhongMaterial&&!z.envMap,Ft=A.get(z.envMap||It,At),Yt=z.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,oe=!!Z.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Lt=!!Z.morphAttributes.position,ae=!!Z.morphAttributes.normal,Ye=!!Z.morphAttributes.color,Ae=Wi;z.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Ae=C.toneMapping);let we=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,vn=we!==void 0?we.length:0,Dt=Ot.get(z),Ln=E.state.lights;if(Jt===!0&&(Y===!0||M!==R)){let Ue=M===R&&z.id===W;j.setState(z,M,Ue)}let me=!1,ir=!1;z.version===Dt.__version?Dt.needsLights&&Dt.lightsStateVersion!==Ln.state.version||q.isBatchedMesh&&Dt.batching===!1||!q.isBatchedMesh&&Dt.batching===!0||q.isBatchedMesh&&Dt.batchingColor===!0&&q._colorsTexture===null||q.isBatchedMesh&&Dt.batchingColor===!1&&q._colorsTexture!==null||q.isInstancedMesh&&Dt.instancing===!1||!q.isInstancedMesh&&Dt.instancing===!0||q.isSkinnedMesh&&Dt.skinning===!1||!q.isSkinnedMesh&&Dt.skinning===!0||q.isInstancedMesh&&Dt.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Dt.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Dt.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Dt.instancingMorph===!1&&q.morphTexture!==null||Dt.envMap!==Ft||z.fog===!0&&Dt.fog!==St||Dt.numClippingPlanes!==void 0&&(Dt.numClippingPlanes!==j.numPlanes||Dt.numIntersection!==j.numIntersection)||Dt.vertexAlphas!==Yt||Dt.vertexTangents!==oe||Dt.morphTargets!==Lt||Dt.morphNormals!==ae||Dt.morphColors!==Ye||Dt.morphTargetsCount!==vn||Dt.numLightProbeGrids!==je(E.state.lightProbeGridArray)?me=!0:(Dt.outputColorSpace!==vt||Dt.toneMapping!==Ae)&&(ir=!0):(me=!0,Dt.__version=z.version);let yn=Dt.currentProgram;(me===!0||ir===!0)&&(yn=ir===!0?Ur(z,U,q,vt,Ae):ei(z,U,q),D&&z.isNodeMaterial&&D.onUpdateProgram(z,yn,Dt));let cl=!1,ws=!1,sr=!1,ue=yn.getUniforms(),dn=Dt.uniforms;if(ft.useProgram(yn.program)&&(cl=!0,ws=!0,sr=!0),z.id!==W&&(W=z.id,ws=!0),cl||R!==M){ft.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),ue.setValue(O,"projectionMatrix",M.projectionMatrix),ue.setValue(O,"viewMatrix",M.matrixWorldInverse);let ln=ue.map.cameraPosition;ln!==void 0&&ln.setValue(O,ye.setFromMatrixPosition(M.matrixWorld)),Ht.logarithmicDepthBuffer&&ue.setValue(O,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&ue.setValue(O,"isOrthographic",M.isOrthographicCamera===!0),R!==M&&(R=M,ws=!0,sr=!0)}if(Dt.needsLights&&(Ln.state.sunShadowMap.length>0&&ue.setValue(O,"sunShadowMap",Ln.state.sunShadowMap,kt),Ln.state.directionalShadowMap.length>0&&ue.setValue(O,"directionalShadowMap",Ln.state.directionalShadowMap,kt),Ln.state.spotShadowMap.length>0&&ue.setValue(O,"spotShadowMap",Ln.state.spotShadowMap,kt),Ln.state.pointShadowMap.length>0&&ue.setValue(O,"pointShadowMap",Ln.state.pointShadowMap,kt)),q.isSkinnedMesh){ue.setOptional(O,q,"bindMatrix"),ue.setOptional(O,q,"bindMatrixInverse");let Ue=q.skeleton;Ue&&(Ue.boneTexture===null&&Ue.computeBoneTexture(),ue.setValue(O,"boneTexture",Ue.boneTexture,kt))}q.isBatchedMesh&&(ue.setOptional(O,q,"batchingTexture"),ue.setValue(O,"batchingTexture",q._matricesTexture,kt),ue.setOptional(O,q,"batchingIdTexture"),ue.setValue(O,"batchingIdTexture",q._indirectTexture,kt),ue.setOptional(O,q,"batchingColorTexture"),q._colorsTexture!==null&&ue.setValue(O,"batchingColorTexture",q._colorsTexture,kt));let wi=Z.morphAttributes;if((wi.position!==void 0||wi.normal!==void 0||wi.color!==void 0)&&K.update(q,Z,yn),(ws||Dt.receiveShadow!==q.receiveShadow)&&(Dt.receiveShadow=q.receiveShadow,ue.setValue(O,"receiveShadow",q.receiveShadow)),(z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial)&&z.envMap===null&&U.environment!==null&&(dn.envMapIntensity.value=U.environmentIntensity),dn.dfgLUT!==void 0&&(dn.dfgLUT.value=aM()),ws){if(ue.setValue(O,"toneMappingExposure",C.toneMappingExposure),Dt.needsLights&&Oo(dn,sr),St&&z.fog===!0&&ht.refreshFogUniforms(dn,St),ht.refreshMaterialUniforms(dn,z,ut,Mt,E.state.transmissionRenderTarget[M.id]),Dt.needsLights&&Dt.numLightProbeGrids>0){let Ue=y,ln=0;for(let ji of E.state.lightProbeGridArray)ji.texture!==null&&(Ue.textures[ln]=ji.texture,Ue.min[ln]=ji.boundingBox.min,Ue.max[ln]=ji.boundingBox.max,Ue.resolution[ln]=ji.resolution,ln++);for(let ji in Ue)Ue[ji].length=ln;dn.probesSH.value=Ue.textures,dn.probesMin.value=Ue.min,dn.probesMax.value=Ue.max,dn.probesResolution.value=Ue.resolution}co.upload(O,tn(Dt),dn,kt)}if(z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(co.upload(O,tn(Dt),dn,kt),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&ue.setValue(O,"center",q.center),ue.setValue(O,"modelViewMatrix",q.modelViewMatrix),ue.setValue(O,"normalMatrix",q.normalMatrix),ue.setValue(O,"modelMatrix",q.matrixWorld),z.uniformsGroups!==void 0){let Ue=z.uniformsGroups;for(let ln=0,ji=Ue.length;ln<ji;ln++){let Bd=Ue[ln];ot.update(Bd,yn),ot.bind(Bd,yn)}}return yn}function Oo(M,U){M.ambientLightColor.needsUpdate=U,M.lightProbe.needsUpdate=U,M.sunLights.needsUpdate=U,M.sunLightShadows.needsUpdate=U,M.directionalLights.needsUpdate=U,M.directionalLightShadows.needsUpdate=U,M.pointLights.needsUpdate=U,M.pointLightShadows.needsUpdate=U,M.spotLights.needsUpdate=U,M.spotLightShadows.needsUpdate=U,M.rectAreaLights.needsUpdate=U,M.hemisphereLights.needsUpdate=U}function ll(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return Q},this.setRenderTargetTextures=function(M,U,Z){let z=Ot.get(M);z.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),Ot.get(M.texture).__webglTexture=U,Ot.get(M.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:Z,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,U){let Z=Ot.get(M);Z.__webglFramebuffer=U,Z.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(M,U=0,Z=0){Q=M,X=U,F=Z;let z=null,q=!1,St=!1;if(M){let vt=Ot.get(M);if(vt.__useDefaultFramebuffer!==void 0){ft.bindFramebuffer(O.FRAMEBUFFER,vt.__webglFramebuffer),tt.copy(M.viewport),yt.copy(M.scissor),Ut=M.scissorTest,ft.viewport(tt),ft.scissor(yt),ft.setScissorTest(Ut),W=-1;return}else if(vt.__webglFramebuffer===void 0)kt.setupRenderTarget(M);else if(vt.__hasExternalTextures)kt.rebindTextures(M,Ot.get(M.texture).__webglTexture,Ot.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let Yt=M.depthTexture;if(vt.__boundDepthTexture!==Yt){if(Yt!==null&&Ot.has(Yt)&&(M.width!==Yt.image.width||M.height!==Yt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");kt.setupDepthRenderbuffer(M)}}let At=M.texture;(At.isData3DTexture||At.isDataArrayTexture||At.isCompressedArrayTexture)&&(St=!0);let Ft=Ot.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Ft[U])?z=Ft[U][Z]:z=Ft[U],q=!0):M.samples>0&&kt.useMultisampledRTT(M)===!1?z=Ot.get(M).__webglMultisampledFramebuffer:Array.isArray(Ft)?z=Ft[Z]:z=Ft,tt.copy(M.viewport),yt.copy(M.scissor),Ut=M.scissorTest}else tt.copy(Rt).multiplyScalar(ut).floor(),yt.copy(bt).multiplyScalar(ut).floor(),Ut=Ct;if(Z!==0&&(z=H),ft.bindFramebuffer(O.FRAMEBUFFER,z)&&ft.drawBuffers(M,z),ft.viewport(tt),ft.scissor(yt),ft.setScissorTest(Ut),q){let vt=Ot.get(M.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+U,vt.__webglTexture,Z)}else if(St){let vt=U;for(let At=0;At<M.textures.length;At++){let Ft=Ot.get(M.textures[At]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+At,Ft.__webglTexture,Z,vt)}}else if(M!==null&&Z!==0){let vt=Ot.get(M.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,vt.__webglTexture,Z)}W=-1};function Ts(M){let U=Ot.get(M);return(U.__readFormat!==M.format||U.__readType!==M.type)&&(U.__readFormat=M.format,U.__readType=M.type,U.__formatReadable=Ht.textureFormatReadable(M.format),U.__typeReadable=Ht.textureTypeReadable(M.type)),U}this.readRenderTargetPixels=function(M,U,Z,z,q,St,It,vt=0){if(!(M&&M.isWebGLRenderTarget)){Gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let At=Ot.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&It!==void 0&&(At=At[It],Array.isArray(At)&&(At=At[0])),At){ft.bindFramebuffer(O.FRAMEBUFFER,At);try{let Ft=M.textures[vt],Yt=Ft.format,oe=Ft.type;M.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+vt);let Lt=Ts(Ft);if(Lt.__formatReadable===!1){Gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Lt.__typeReadable===!1){Gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=M.width-z&&Z>=0&&Z<=M.height-q&&O.readPixels(U,Z,z,q,at.convert(Yt),at.convert(oe),St)}finally{let Ft=Q!==null?Ot.get(Q).__webglFramebuffer:null;ft.bindFramebuffer(O.FRAMEBUFFER,Ft)}}},this.readRenderTargetPixelsAsync=async function(M,U,Z,z,q,St,It,vt=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let At=Ot.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&It!==void 0&&(At=At[It],Array.isArray(At)&&(At=At[0])),At)if(U>=0&&U<=M.width-z&&Z>=0&&Z<=M.height-q){ft.bindFramebuffer(O.FRAMEBUFFER,At);let Ft=M.textures[vt],Yt=Ft.format,oe=Ft.type;M.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+vt);let Lt=Ts(Ft);if(Lt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Lt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ae=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,ae),O.bufferData(O.PIXEL_PACK_BUFFER,St.byteLength,O.STREAM_READ),O.readPixels(U,Z,z,q,at.convert(Yt),at.convert(oe),0),O.bindBuffer(O.PIXEL_PACK_BUFFER,null);let Ye=Q!==null?Ot.get(Q).__webglFramebuffer:null;ft.bindFramebuffer(O.FRAMEBUFFER,Ye);let Ae=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await Yp(O,Ae,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,ae),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,St),O.bindBuffer(O.PIXEL_PACK_BUFFER,null),O.deleteBuffer(ae),O.deleteSync(Ae),St}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,U=null,Z=0){let z=Math.pow(2,-Z),q=Math.floor(M.image.width*z),St=Math.floor(M.image.height*z),It=U!==null?U.x:0,vt=U!==null?U.y:0;kt.setTexture2D(M,0),O.copyTexSubImage2D(O.TEXTURE_2D,Z,0,0,It,vt,q,St),ft.unbindTexture()},this.copyTextureToTexture=function(M,U,Z=null,z=null,q=0,St=0){let It,vt,At,Ft,Yt,oe,Lt,ae,Ye,Ae=M.isCompressedTexture?M.mipmaps[St]:M.image;if(Z!==null)It=Z.max.x-Z.min.x,vt=Z.max.y-Z.min.y,At=Z.isBox3?Z.max.z-Z.min.z:1,Ft=Z.min.x,Yt=Z.min.y,oe=Z.isBox3?Z.min.z:0;else{let ue=Math.pow(2,-q);It=Math.floor(Ae.width*ue),vt=Math.floor(Ae.height*ue),M.isDataArrayTexture?At=Ae.depth:M.isData3DTexture?At=Math.floor(Ae.depth*ue):At=1,Ft=0,Yt=0,oe=0}z!==null?(Lt=z.x,ae=z.y,Ye=z.z):(Lt=0,ae=0,Ye=0);let we=at.convert(U.format),vn=at.convert(U.type),Dt;U.isData3DTexture?(kt.setTexture3D(U,0),Dt=O.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(kt.setTexture2DArray(U,0),Dt=O.TEXTURE_2D_ARRAY):(kt.setTexture2D(U,0),Dt=O.TEXTURE_2D),ft.activeTexture(O.TEXTURE0),ft.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,U.flipY),ft.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),ft.pixelStorei(O.UNPACK_ALIGNMENT,U.unpackAlignment);let Ln=ft.getParameter(O.UNPACK_ROW_LENGTH),me=ft.getParameter(O.UNPACK_IMAGE_HEIGHT),ir=ft.getParameter(O.UNPACK_SKIP_PIXELS),yn=ft.getParameter(O.UNPACK_SKIP_ROWS),cl=ft.getParameter(O.UNPACK_SKIP_IMAGES);ft.pixelStorei(O.UNPACK_ROW_LENGTH,Ae.width),ft.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Ae.height),ft.pixelStorei(O.UNPACK_SKIP_PIXELS,Ft),ft.pixelStorei(O.UNPACK_SKIP_ROWS,Yt),ft.pixelStorei(O.UNPACK_SKIP_IMAGES,oe);let ws=M.isDataArrayTexture||M.isData3DTexture,sr=U.isDataArrayTexture||U.isData3DTexture;if(M.isDepthTexture){let ue=Ot.get(M),dn=Ot.get(U),wi=Ot.get(ue.__renderTarget),Ue=Ot.get(dn.__renderTarget);ft.bindFramebuffer(O.READ_FRAMEBUFFER,wi.__webglFramebuffer),ft.bindFramebuffer(O.DRAW_FRAMEBUFFER,Ue.__webglFramebuffer);for(let ln=0;ln<At;ln++)ws&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ot.get(M).__webglTexture,q,oe+ln),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ot.get(U).__webglTexture,St,Ye+ln)),O.blitFramebuffer(Ft,Yt,Ft+It,Yt+vt,Lt,ae,Lt+It,ae+vt,O.DEPTH_BUFFER_BIT,O.NEAREST);ft.bindFramebuffer(O.READ_FRAMEBUFFER,null),ft.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(q!==0||M.isRenderTargetTexture||Ot.has(M)){let ue=Ot.get(M),dn=Ot.get(U);ft.bindFramebuffer(O.READ_FRAMEBUFFER,I),ft.bindFramebuffer(O.DRAW_FRAMEBUFFER,B);for(let wi=0;wi<At;wi++)ws?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,ue.__webglTexture,q,oe+wi):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,ue.__webglTexture,q),sr?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,dn.__webglTexture,St,Ye+wi):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,dn.__webglTexture,St),q!==0?O.blitFramebuffer(Ft,Yt,Ft+It,Yt+vt,Lt,ae,Lt+It,ae+vt,O.COLOR_BUFFER_BIT,O.NEAREST):sr?O.copyTexSubImage3D(Dt,St,Lt,ae,Ye+wi,Ft,Yt,It,vt):O.copyTexSubImage2D(Dt,St,Lt,ae,Ft,Yt,It,vt);ft.bindFramebuffer(O.READ_FRAMEBUFFER,null),ft.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else sr?M.isDataTexture||M.isData3DTexture?O.texSubImage3D(Dt,St,Lt,ae,Ye,It,vt,At,we,vn,Ae.data):U.isCompressedArrayTexture?O.compressedTexSubImage3D(Dt,St,Lt,ae,Ye,It,vt,At,we,Ae.data):O.texSubImage3D(Dt,St,Lt,ae,Ye,It,vt,At,we,vn,Ae):M.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,St,Lt,ae,It,vt,we,vn,Ae.data):M.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,St,Lt,ae,Ae.width,Ae.height,we,Ae.data):O.texSubImage2D(O.TEXTURE_2D,St,Lt,ae,It,vt,we,vn,Ae);ft.pixelStorei(O.UNPACK_ROW_LENGTH,Ln),ft.pixelStorei(O.UNPACK_IMAGE_HEIGHT,me),ft.pixelStorei(O.UNPACK_SKIP_PIXELS,ir),ft.pixelStorei(O.UNPACK_SKIP_ROWS,yn),ft.pixelStorei(O.UNPACK_SKIP_IMAGES,cl),St===0&&U.generateMipmaps===!0&&U.mipmapsAutoUpdate===!0&&O.generateMipmap(Dt),ft.unbindTexture()},this.initRenderTarget=function(M){Ot.get(M).__webglFramebuffer===void 0&&kt.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?kt.setTextureCube(M,0):M.isData3DTexture?kt.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?kt.setTexture2DArray(M,0):kt.setTexture2D(M,0),ft.unbindTexture()},this.resetState=function(){X=0,F=0,Q=null,ft.reset(),pt.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return _i}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=le._getDrawingBufferColorSpace(t),e.unpackColorSpace=le._getUnpackColorSpace()}};var rh=class extends cr{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let t=new Vi;t.deleteAttribute("uv");let e=new Ii({side:pn}),n=new Ii,i=new ha(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);let r=new Je(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new Ds(t,n,6),a=new en;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);let l=new Je(t,fo(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new Je(t,fo(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new Je(t,fo(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let d=new Je(t,fo(43));d.position.set(-.462,8.89,14.52),d.scale.set(4.38,5.441,.088),this.add(d);let f=new Je(t,fo(20));f.position.set(3.235,11.486,-12.541),f.scale.set(2.5,2,.1),this.add(f);let u=new Je(t,fo(100));u.position.set(0,20,0),u.scale.set(1,.1,1),this.add(u)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function fo(s){return new oa({color:0,emissive:16777215,emissiveIntensity:s})}function Lm(s,t={}){let e=!!t.reduced,n=innerWidth<760,i;try{i=new nh({canvas:s,antialias:!0,alpha:!0,powerPreference:"high-performance"})}catch{return null}i.setPixelRatio(Math.min(devicePixelRatio,n?1.5:2)),i.setSize(innerWidth,innerHeight,!1),i.toneMapping=ma,i.toneMappingExposure=1.05;let r=new cr,o=new ho(i);r.environment=o.fromScene(new rh,.04).texture;let a=new bn(n?50:38,innerWidth/innerHeight,.1,100);a.position.set(0,0,14);let l=new io(16769955,2.2);l.position.set(5,6,8),r.add(l);let c=new io(5995775,1.6);c.position.set(-6,-2,-4),r.add(c),r.add(new fa(2240602,.6));let h=new rs;r.add(h);let d=n?170:300,f=n?1.75:2.75,u=new Ii({color:13938487,metalness:1,roughness:.22}),m=new Ii({color:1780821,metalness:.7,roughness:.28}),_=new Ii({color:659746,metalness:.9,roughness:.35}),p=new Vi(1,1,1),g=[u,m,_],v=[Math.round(d*.34),Math.round(d*.4)];v.push(d-v[0]-v[1]);let w=g.map((bt,Ct)=>{let Tt=new Ds(p,bt,v[Ct]);return Tt.instanceMatrix.setUsage(jc),h.add(Tt),Tt}),y=[],T=(bt,Ct)=>bt+Math.random()*(Ct-bt),E=0,x=[...Array(d).keys()].sort(()=>Math.random()-.5);w.forEach((bt,Ct)=>{for(let Tt=0;Tt<v[Ct];Tt++,E++){let ne=x[E]+.5,Jt=Math.acos(1-2*ne/d),Y=Math.PI*(1+Math.sqrt(5))*ne,Xt=new V(Math.cos(Y)*Math.sin(Jt),Math.sin(Y)*Math.sin(Jt),Math.cos(Jt)).multiplyScalar(f),ye=Xt.clone().normalize();y.push({mesh:bt,j:Tt,sphere:Xt,dir:ye,start:ye.clone().multiplyScalar(T(14,26)).add(new V(T(-6,6),T(-6,6),T(-4,4))),scatter:new V(T(-11,11),T(-6.5,6.5),T(-7,3)),size:T(.28,.52)*(n?.9:1),rot:new oi(T(0,6.3),T(0,6.3),T(0,6.3)),spin:new V(T(-1,1),T(-1,1),T(-1,1)).multiplyScalar(.6),delay:T(0,.55),phase:T(0,6.3)})}});let b=new V(0,0,1);y.forEach(bt=>{bt.align=new Xn().setFromUnitVectors(b,bt.dir)});let P=n?34:54,C=new ra(.34,.085,14,36);C.scale(1.55,1,1);let N=new Ii({color:14728522,metalness:1,roughness:.18}),D=new Ds(C,N,P);D.instanceMatrix.setUsage(jc),r.add(D);let H=new ia([new V,new V,new V,new V]),I=new V(1,0,0),B=new en,X=new Xn,F=new Xn,Q=new V,W=new V,R=0,tt=0,yt=0,Ut=0,J=0,lt=0,_t=null,Mt=new da;addEventListener("pointermove",bt=>{R=bt.clientX/innerWidth*2-1,tt=bt.clientY/innerHeight*2-1},{passive:!0}),addEventListener("scroll",()=>{J=Math.min(scrollY/innerHeight,2.2)},{passive:!0}),addEventListener("resize",()=>{a.aspect=innerWidth/innerHeight,a.updateProjectionMatrix(),i.setSize(innerWidth,innerHeight,!1)});let ut=bt=>1-Math.pow(1-Math.min(Math.max(bt,0),1),4),Nt=bt=>(bt=Math.min(Math.max(bt,0),1),bt*bt*(3-2*bt));function de(){let bt=Mt.getElapsedTime();yt+=(R-yt)*.05,Ut+=(tt-Ut)*.05,lt+=(J-lt)*.08;let Ct=_t===null?0:e?1:(bt-_t)/2.2,Tt=Nt(lt/.9),ne=n?2.5:2.9;h.position.set(ne*(1-Tt*.6),(n?3.4:0)+Tt*(n?-3:.3),0),h.rotation.y=bt*.18+yt*.5,h.rotation.x=Math.sin(bt*.3)*.12+Ut*.3;for(let zt of y){let $t=ut((Ct-zt.delay)/(1-zt.delay)),Re=1+Math.sin(bt*1.6+zt.phase)*.035*(1-Tt);Q.copy(zt.start).lerp(zt.sphere,$t).multiplyScalar(Re),Q.lerp(zt.scatter,Tt),Q.y+=Math.sin(bt*.7+zt.phase)*.25*Tt,B.position.copy(Q),X.copy(zt.align),F.setFromEuler(new oi(zt.rot.x+bt*zt.spin.x,zt.rot.y+bt*zt.spin.y,zt.rot.z+bt*zt.spin.z)),B.quaternion.copy(F).slerp(X,$t*(1-Tt));let Ne=zt.size*(.2+.8*$t)*(1-Tt*.25);B.scale.setScalar(Ne),B.updateMatrix(),zt.mesh.setMatrixAt(zt.j,B.matrix)}w.forEach(zt=>{zt.instanceMatrix.needsUpdate=!0});let Jt=Math.sin(bt*.8)*.6,Xt=(1-ut(Ct*1.2-.15))*16,ye=H.points;ye[0].set(-14-Xt,-7.2+Jt*.3,-3),ye[1].set(-4-Xt*.5,-5.4+Jt*.6,-1.6),ye[2].set(4.5+Xt*.5,-1.4-Jt*.6,-1.2),ye[3].set(14+Xt,3.4+Jt*.3,-3.5);for(let zt=0;zt<P;zt++){let $t=zt/(P-1);H.getPointAt($t,B.position),B.position.y+=Tt*-2.5+(n?-2.6:0),H.getTangentAt($t,W),B.quaternion.setFromUnitVectors(I,W),zt%2&&(X.setFromAxisAngle(I,Math.PI/2),B.quaternion.multiply(X)),B.scale.setScalar(n?.8:1),B.updateMatrix(),D.setMatrixAt(zt,B.matrix)}D.instanceMatrix.needsUpdate=!0,a.position.x=yt*.6,a.position.y=-Ut*.4,a.lookAt(0,0,0),i.render(r,a)}let Rt=!0;return document.addEventListener("visibilitychange",()=>{Rt=!document.hidden}),i.setAnimationLoop(()=>{Rt&&de()}),{assemble(){_t===null&&(_t=Mt.getElapsedTime())}}}function ps(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function Vm(s,t){s.prototype=Object.create(t.prototype),s.prototype.constructor=s,s.__proto__=t}var Kn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Na={duration:.5,overwrite:!1,delay:0},Of,mn,De,yi=1e8,Me=1/yi,Cf=Math.PI*2,lM=Cf/4,cM=0,Gm=Math.sqrt,hM=Math.cos,uM=Math.sin,rn=function(t){return typeof t=="string"},Ve=function(t){return typeof t=="function"},gs=function(t){return typeof t=="number"},_h=function(t){return typeof t=="undefined"},Ji=function(t){return typeof t=="object"},$n=function(t){return t!==!1},Ff=function(){return typeof window!="undefined"},oh=function(t){return Ve(t)||rn(t)},Hm=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},En=Array.isArray,fM=/random\([^)]+\)/g,dM=/,\s*/g,Dm=/(?:-?\.?\d|\.)+/gi,Bf=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,xr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Sf=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,zf=/[+-]=-?[.\d]+/,pM=/[^,'"\[\]\s]+/gi,mM=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Fe,Yi,Rf,kf,ci={},hh={},Wm,Xm=function(t){return(hh=mo(t,ci))&&An},xh=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},Ua=function(t,e){return!e&&console.warn(t)},qm=function(t,e){return t&&(ci[t]=e)&&hh&&(hh[t]=e)||ci},Oa=function(){return 0},gM={suppressEvents:!0,isStart:!0,kill:!1},ah={suppressEvents:!0,kill:!1},_M={suppressEvents:!0},Vf={},Vs=[],Pf={},Ym,Zn={},Mf={},Nm=30,lh=[],Gf="",Hf=function(t){var e=t[0],n,i;if(Ji(e)||Ve(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=lh.length;i--&&!lh[i].targetTest(e););n=lh[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new Yf(t[i],n)))||t.splice(i,1);return t},Gs=function(t){return t._gsap||Hf(Si(t))[0]._gsap},Wf=function(t,e,n){return(n=t[e])&&Ve(n)?t[e]():_h(n)&&t.getAttribute&&t.getAttribute(e)||n},Un=function(t,e){return(t=t.split(",")).forEach(e)||t},Ge=function(t){return Math.round(t*1e5)/1e5||0},Oe=function(t){return Math.round(t*1e7)/1e7||0},vr=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},xM=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},uh=function(){var t=Vs.length,e=Vs.slice(0),n,i;for(Pf={},Vs.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Xf=function(t){return!!(t._initted||t._startAt||t.add)},Zm=function(t,e,n,i){Vs.length&&!mn&&uh(),t.render(e,n,i||!!(mn&&e<0&&Xf(t))),Vs.length&&!mn&&uh()},Jm=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(pM).length<2?e:rn(t)?t.trim():t},$m=function(t){return t},hi=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},vM=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},mo=function(t,e){for(var n in e)t[n]=e[n];return t},Um=function s(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=Ji(e[n])?s(t[n]||(t[n]={}),e[n]):e[n]);return t},fh=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},Ia=function(t){var e=t.parent||Fe,n=t.keyframes?vM(En(t.keyframes)):hi;if($n(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},yM=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},Km=function(t,e,n,i,r){n===void 0&&(n="_first"),i===void 0&&(i="_last");var o=t[i],a;if(r)for(a=e[r];o&&o[r]>a;)o=o._prev;return o?(e._next=o._next,o._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=o,e.parent=e._dp=t,e},vh=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=e._prev,o=e._next;r?r._next=o:t[n]===e&&(t[n]=o),o?o._prev=r:t[i]===e&&(t[i]=r),e._next=e._prev=e.parent=null},Hs=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},mr=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},SM=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},If=function(t,e,n,i){return t._startAt&&(mn?t._startAt.revert(ah):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},MM=function s(t){return!t||t._ts&&s(t.parent)},Om=function(t){return t._repeat?go(t._tTime,t=t.duration()+t._rDelay)*t:0},go=function(t,e){var n=Math.floor(t=Oe(t/e));return t&&n===t?n-1:n},dh=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},yh=function(t){return t._end=Oe(t._start+(t._tDur/Math.abs(t._ts||t._rts||Me)||0))},Sh=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=Oe(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),yh(t),n._dirty||mr(n,t)),t},Qm=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=dh(t.rawTime(),e),(!e._dur||ka(0,e.totalDuration(),n)-e._tTime>Me)&&e.render(n,!0)),mr(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-Me}},Zi=function(t,e,n,i){return e.parent&&Hs(e),e._start=Oe((gs(n)?n:!n&&ph(e)&&(!t._last||t._last._start>=t._time)?t._last?t._last._start:t._time:n||t!==Fe?vi(t,n,e):t._time)+e._delay),e._end=Oe(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),Km(t,e,"_first","_last",t._sort?"_start":0),ph(e)||(t._recent=e),i||Qm(t,e),t._ts<0&&Sh(t,t._tTime),t},jm=function(t,e){return(ci.ScrollTrigger||xh("scrollTrigger",e))&&ci.ScrollTrigger.create(e,t)},tg=function(t,e,n,i,r){if($f(t,e,r),!t._initted)return 1;if(!n&&t._pt&&!mn&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&Ym!==Jn.frame)return Vs.push(t),t._lazy=[r,i],1},bM=function s(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||s(e))},ph=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},TM=function(t,e,n,i){var r=t.ratio,o=e<0||!e&&(!t._start&&bM(t)&&!(!t._initted&&ph(t))||(t._ts<0||t._dp._ts<0)&&!ph(t))?0:1,a=t._rDelay,l=0,c,h,d;if(a&&t._repeat&&(l=ka(0,t._tDur,e),h=go(l,a),t._yoyo&&h&1&&(o=1-o),h!==go(t._tTime,a)&&(r=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==r||mn||i||t._zTime===Me||!e&&t._zTime){if(!t._initted&&tg(t,e,i,n,l))return;for(d=t._zTime,t._zTime=e||(n?Me:0),n||(n=e&&!d),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=l,c=t._pt;c;)c.r(o,c.d),c=c._next;e<0&&If(t,e,n,!0),t._onUpdate&&!n&&li(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&li(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===o&&(o&&Hs(t,1),!n&&!mn&&(li(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},wM=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},_o=function(t,e,n,i){var r=t._repeat,o=Oe(e)||0,a=t._tTime/t._tDur;return a&&!i&&(t._time*=o/t._dur),t._dur=o,t._tDur=r?r<0?1e10:Oe(o*(r+1)+t._rDelay*r):o,a>0&&!i&&Sh(t,t._tTime=t._tDur*a),t.parent&&yh(t),n||mr(t.parent,t),t},Fm=function(t){return t instanceof wn?mr(t):_o(t,t._dur)},EM={_start:0,endTime:Oa,totalDuration:Oa},vi=function s(t,e,n){var i=t.labels,r=t._recent||EM,o=t.duration()>=yi?r.endTime(!1):t._dur,a,l,c;return rn(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",a=e.indexOf("="),l==="<"||l===">"?(a>=0&&(e=e.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(a<0?r:n).totalDuration()/100:1)):a<0?(e in i||(i[e]=o),i[e]):(l=parseFloat(e.charAt(a-1)+e.substr(a+1)),c&&n&&(l=l/100*(En(n)?n[0]:n).totalDuration()),a>1?s(t,e.substr(0,a-1),n)+l:o+l)):e==null?o:+e},La=function(t,e,n){var i=gs(e[1]),r=(i?2:1)+(t<2?0:1),o=e[r],a,l;if(i&&(o.duration=e[1]),o.parent=n,t){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=$n(l.vars.inherit)&&l.parent;o.immediateRender=$n(a.immediateRender),t<2?o.runBackwards=1:o.startAt=e[r-1]}return new We(e[0],o,e[r+1])},Ws=function(t,e){return t||t===0?e(t):e},ka=function(t,e,n){return n<t?t:n>e?e:n},gn=function(t,e){return!rn(t)||!(e=mM.exec(t))?"":e[1]},AM=function(t,e,n){return Ws(n,function(i){return ka(t,e,i)})},Lf=[].slice,eg=function(t,e){return t&&Ji(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&Ji(t[0]))&&!t.nodeType&&t!==Yi},CM=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var r;return rn(i)&&!e||eg(i,1)?(r=n).push.apply(r,Si(i)):n.push(i)})||n},Si=function(t,e,n){return De&&!e&&De.selector?De.selector(t):rn(t)&&!n&&(Rf||!xo())?Lf.call((e||kf).querySelectorAll(t),0):En(t)?CM(t,n):eg(t)?Lf.call(t,0):t?[t]:[]},Df=function(t){return t=Si(t)[0]||Ua("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return Si(e,n.querySelectorAll?n:n===t?Ua("Invalid scope")||kf.createElement("div"):t)}},ng=function(t){return t.sort(function(){return .5-Math.random()})},ig=function(t){if(Ve(t))return t;var e=Ji(t)?t:{each:t},n=gr(e.ease),i=e.from||0,r=parseFloat(e.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=e.axis,h=i,d=i;return rn(i)?h=d={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(h=i[0],d=i[1]),function(f,u,m){var _=(m||e).length,p=o[_],g,v,w,y,T,E,x,b,P;if(!p){if(P=e.grid==="auto"?0:(e.grid||[1,yi])[1],!P){for(x=-yi;x<(x=m[P++].getBoundingClientRect().left)&&P<_;);P<_&&P--}for(p=o[_]=[],g=l?Math.min(P,_)*h-.5:i%P,v=P===yi?0:l?_*d/P-.5:i/P|0,x=0,b=yi,E=0;E<_;E++)w=E%P-g,y=v-(E/P|0),p[E]=T=c?Math.abs(c==="y"?y:w):Gm(w*w+y*y),T>x&&(x=T),T<b&&(b=T);i==="random"&&ng(p),p.max=x-b,p.min=b,p.v=_=(parseFloat(e.amount)||parseFloat(e.each)*(P>_?_-1:c?c==="y"?_/P:P:Math.max(P,_/P))||0)*(i==="edges"?-1:1),p.b=_<0?r-_:r,p.u=gn(e.amount||e.each)||0,n=n&&_<0?VM(n):n}return _=(p[f]-p.min)/p.max||0,Oe(p.b+(n?n(_):_)*p.v)+p.u}},Nf=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=Oe(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(gs(n)?0:gn(n))}},sg=function(t,e){var n=En(t),i,r;return!n&&Ji(t)&&(i=n=t.radius||yi,t.values?(t=Si(t.values),(r=!gs(t[0]))&&(i*=i)):t=Nf(t.increment)),Ws(e,n?Ve(t)?function(o){return r=t(o),Math.abs(r-o)<=i?r:o}:function(o){for(var a=parseFloat(r?o.x:o),l=parseFloat(r?o.y:0),c=yi,h=0,d=t.length,f,u;d--;)r?(f=t[d].x-a,u=t[d].y-l,f=f*f+u*u):f=Math.abs(t[d]-a),f<c&&(c=f,h=d);return h=!i||c<=i?t[h]:o,r||h===o||gs(o)?h:h+gn(o)}:Nf(t))},rg=function(t,e,n,i){return Ws(En(t)?!e:n===!0?!!(n=0):!i,function(){return En(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},RM=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(r,o){return o(r)},i)}},PM=function(t,e){return function(n){return t(parseFloat(n))+(e||gn(n))}},IM=function(t,e,n){return ag(t,e,0,1,n)},og=function(t,e,n){return Ws(n,function(i){return t[~~e(i)]})},LM=function s(t,e,n){var i=e-t;return En(t)?og(t,s(0,t.length),e):Ws(n,function(r){return(i+(r-t)%i)%i+t})},DM=function s(t,e,n){var i=e-t,r=i*2;return En(t)?og(t,s(0,t.length-1),e):Ws(n,function(o){return o=(r+(o-t)%r)%r||0,t+(o>i?r-o:o)})},vo=function(t){return t.replace(fM,function(e){var n=e.indexOf("[")+1,i=e.substring(n||7,n?e.indexOf("]"):e.length-1).split(dM);return rg(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},ag=function(t,e,n,i,r){var o=e-t,a=i-n;return Ws(r,function(l){return n+((l-t)/o*a||0)})},NM=function s(t,e,n,i){var r=isNaN(t+e)?0:function(u){return(1-u)*t+u*e};if(!r){var o=rn(t),a={},l,c,h,d,f;if(n===!0&&(i=1)&&(n=null),o)t={p:t},e={p:e};else if(En(t)&&!En(e)){for(h=[],d=t.length,f=d-2,c=1;c<d;c++)h.push(s(t[c-1],t[c]));d--,r=function(m){m*=d;var _=Math.min(f,~~m);return h[_](m-_)},n=e}else i||(t=mo(En(t)?[]:{},t));if(!h){for(l in e)Zf.call(a,t,l,"get",e[l]);r=function(m){return jf(m,a)||(o?t.p:t)}}}return Ws(n,r)},Bm=function(t,e,n){var i=t.labels,r=yi,o,a,l;for(o in i)a=i[o]-e,a<0==!!n&&a&&r>(a=Math.abs(a))&&(l=o,r=a);return l},li=function(t,e,n){var i=t.vars,r=i[e],o=De,a=t._ctx,l,c,h;if(r)return l=i[e+"Params"],c=i.callbackScope||t,n&&Vs.length&&uh(),a&&(De=a),h=l?r.apply(c,l):r.call(c),De=o,h},Ra=function(t){return Hs(t),t.scrollTrigger&&t.scrollTrigger.kill(!!mn),t.progress()<1&&li(t,"onInterrupt"),t},po,lg=[],cg=function(t){if(t)if(t=!t.name&&t.default||t,Ff()||t.headless){var e=t.name,n=Ve(t),i=e&&!n&&t.init?function(){this._props=[]}:t,r={init:Oa,render:jf,add:Zf,kill:KM,modifier:$M,rawVars:0},o={targetTest:0,get:0,getSetter:Mh,aliases:{},register:0};if(xo(),t!==i){if(Zn[e])return;hi(i,hi(fh(t,r),o)),mo(i.prototype,mo(r,fh(t,o))),Zn[i.prop=e]=i,t.targetTest&&(lh.push(i),Vf[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}qm(e,i),t.register&&t.register(An,i,On)}else lg.push(t)},Ee=255,Pa={aqua:[0,Ee,Ee],lime:[0,Ee,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Ee],navy:[0,0,128],white:[Ee,Ee,Ee],olive:[128,128,0],yellow:[Ee,Ee,0],orange:[Ee,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Ee,0,0],pink:[Ee,192,203],cyan:[0,Ee,Ee],transparent:[Ee,Ee,Ee,0]},bf=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*Ee+.5|0},hg=function(t,e,n){var i=t?gs(t)?[t>>16,t>>8&Ee,t&Ee]:0:Pa.black,r,o,a,l,c,h,d,f,u,m;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Pa[t])i=Pa[t];else if(t.charAt(0)==="#"){if(t.length<6&&(r=t.charAt(1),o=t.charAt(2),a=t.charAt(3),t="#"+r+r+o+o+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&Ee,i&Ee,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&Ee,t&Ee]}else if(t.substr(0,3)==="hsl"){if(i=m=t.match(Dm),!e)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,o=h<=.5?h*(c+1):h+c-h*c,r=h*2-o,i.length>3&&(i[3]*=1),i[0]=bf(l+1/3,r,o),i[1]=bf(l,r,o),i[2]=bf(l-1/3,r,o);else if(~t.indexOf("="))return i=t.match(Bf),n&&i.length<4&&(i[3]=1),i}else i=t.match(Dm)||Pa.transparent;i=i.map(Number)}return e&&!m&&(r=i[0]/Ee,o=i[1]/Ee,a=i[2]/Ee,d=Math.max(r,o,a),f=Math.min(r,o,a),h=(d+f)/2,d===f?l=c=0:(u=d-f,c=h>.5?u/(2-d-f):u/(d+f),l=d===r?(o-a)/u+(o<a?6:0):d===o?(a-r)/u+2:(r-o)/u+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},ug=function(t){var e=[],n=[],i=-1;return t.split(ms).forEach(function(r){var o=r.match(xr)||[];e.push.apply(e,o),n.push(i+=o.length+1)}),e.c=n,e},zm=function(t,e,n){var i="",r=(t+i).match(ms),o=e?"hsla(":"rgba(",a=0,l,c,h,d;if(!r)return t;if(r=r.map(function(f){return(f=hg(f,e,1))&&o+(e?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(h=ug(t),l=n.c,l.join(i)!==h.c.join(i)))for(c=t.replace(ms,"1").split(xr),d=c.length-1;a<d;a++)i+=c[a]+(~l.indexOf(a)?r.shift()||o+"0,0,0,0)":(h.length?h:r.length?r:n).shift());if(!c)for(c=t.split(ms),d=c.length-1;a<d;a++)i+=c[a]+r[a];return i+c[d]},ms=(function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Pa)s+="|"+t+"\\b";return new RegExp(s+")","gi")})(),UM=/hsl[a]?\(/,qf=function(t){var e=t.join(" "),n;if(ms.lastIndex=0,ms.test(e))return n=UM.test(e),t[1]=zm(t[1],n),t[0]=zm(t[0],n,ug(t[1])),!0},Fa,Jn=(function(){var s=Date.now,t=500,e=33,n=s(),i=n,r=1e3/240,o=r,a=[],l,c,h,d,f,u,m=function _(p){var g=s()-i,v=p===!0,w,y,T,E;if((g>t||g<0)&&(n+=g-e),i+=g,T=i-n,w=T-o,(w>0||v)&&(E=++d.frame,f=T-d.time*1e3,d.time=T=T/1e3,o+=w+(w>=r?0:r-w),y=1),v||(l=c(_)),y)for(u=0;u<a.length;u++)a[u](T,f,E,p)};return d={time:0,frame:0,tick:function(){m(!0)},deltaRatio:function(p){return f/(1e3/(p||60))},wake:function(){Wm&&(!Rf&&Ff()&&(Yi=Rf=window,kf=Yi.document||{},ci.gsap=An,(Yi.gsapVersions||(Yi.gsapVersions=[])).push(An.version),Xm(hh||Yi.GreenSockGlobals||!Yi.gsap&&Yi||{}),lg.forEach(cg)),h=typeof requestAnimationFrame!="undefined"&&requestAnimationFrame,l&&d.sleep(),c=h||function(p){return setTimeout(p,o-d.time*1e3+1|0)},Fa=1,m(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),Fa=0,c=Oa},lagSmoothing:function(p,g){t=p||1/0,e=Math.min(g||33,t)},fps:function(p){r=1e3/(p||240),o=d.time*1e3+r},add:function(p,g,v){var w=g?function(y,T,E,x){p(y,T,E,x),d.remove(w)}:p;return d.remove(p),a[v?"unshift":"push"](w),xo(),w},remove:function(p,g){~(g=a.indexOf(p))&&a.splice(g,1)&&u>=g&&u--},_listeners:a},d})(),xo=function(){return!Fa&&Jn.wake()},ce={},OM=/^[\d.\-M][\d.\-,\s]/,FM=/["']/g,BM=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],r=1,o=n.length,a,l,c;r<o;r++)l=n[r],a=r!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),e[i]=isNaN(c)?c.replace(FM,"").trim():+c,i=l.substr(a+1).trim();return e},zM=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},kM=function(t){var e=(t+"").split("("),n=ce[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[BM(e[1])]:zM(t).split(",").map(Jm)):ce._CE&&OM.test(t)?ce._CE("",t):n},VM=function(t){return function(e){return 1-t(1-e)}},gr=function(t,e){return t&&(Ve(t)?t:ce[t]||kM(t))||e},yr=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var r={easeIn:e,easeOut:n,easeInOut:i},o;return Un(t,function(a){ce[a]=ci[a]=r,ce[o=a.toLowerCase()]=n;for(var l in r)ce[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ce[a+"."+l]=r[l]}),r},fg=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},Tf=function s(t,e,n){var i=e>=1?e:1,r=(n||(t?.3:.45))/(e<1?e:1),o=r/Cf*(Math.asin(1/i)||0),a=function(h){return h===1?1:i*Math.pow(2,-10*h)*uM((h-o)*r)+1},l=t==="out"?a:t==="in"?function(c){return 1-a(1-c)}:fg(a);return r=Cf/r,l.config=function(c,h){return s(t,c,h)},l},wf=function s(t,e){e===void 0&&(e=1.70158);var n=function(o){return o?--o*o*((e+1)*o+e)+1:0},i=t==="out"?n:t==="in"?function(r){return 1-n(1-r)}:fg(n);return i.config=function(r){return s(t,r)},i};Un("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,t){var e=t<5?t+1:t;yr(s+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});ce.Linear.easeNone=ce.none=ce.Linear.easeIn;yr("Elastic",Tf("in"),Tf("out"),Tf());(function(s,t){var e=1/t,n=2*e,i=2.5*e,r=function(a){return a<e?s*a*a:a<n?s*Math.pow(a-1.5/t,2)+.75:a<i?s*(a-=2.25/t)*a+.9375:s*Math.pow(a-2.625/t,2)+.984375};yr("Bounce",function(o){return 1-r(1-o)},r)})(7.5625,2.75);yr("Expo",function(s){return Math.pow(2,10*(s-1))*s+s*s*s*s*s*s*(1-s)});yr("Circ",function(s){return-(Gm(1-s*s)-1)});yr("Sine",function(s){return s===1?1:-hM(s*lM)+1});yr("Back",wf("in"),wf("out"),wf());ce.SteppedEase=ce.steps=ci.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),r=e?1:0,o=1-Me;return function(a){return((i*ka(0,o,a)|0)+r)*n}}};Na.ease=ce["quad.out"];Un("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return Gf+=s+","+s+"Params,"});var Yf=function(t,e){this.id=cM++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:Wf,this.set=e?e.getSetter:Mh},Ba=(function(){function s(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,_o(this,+e.duration,1,1),this.data=e.data,De&&(this._ctx=De,De.data.push(this)),Fa||Jn.wake()}var t=s.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,_o(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(xo(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(Sh(this,n),!r._dp||r.parent||Qm(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Zi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Me||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Zm(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Om(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Om(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?go(this._tTime,r)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-Me?0:this._rts;if(this._rts===n)return this;var r=this.parent&&this._ts?dh(this.parent._time,this):this._tTime,o=this._rts<0;this._rts=+n||0,this._ts=this._ps||n===-Me?0:this._rts;var a=this.totalDuration();return(o!==this._rts<0||r>0&&r<a)&&this.totalTime(ka(-Math.abs(this._delay),a,r),i!==!1),yh(this),SM(this)},t.paused=function(n){if(!arguments.length)return this._ps;if(this._ps!==n)if(this._ps=n,n)this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0;else{xo(),this._ts=this._rts;var i=this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,r=this.progress()===1&&Math.abs(this._zTime)!==Me,o;if(r)for(this._tTime-=Me,o=this._first;o;){if(!o._dur&&o._zTime<0&&o._ts&&o._start<=i+Me){r=!1;break}o=o._next}this.totalTime(i,r)}return this},t.startTime=function(n){if(arguments.length){this._start=Oe(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Zi(i,this,this._start-this._delay),this}return this._start},t.endTime=function(n){return this._start+($n(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?dh(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=_M);var i=mn;return mn=n,Xf(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),mn=i,this},t.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):r},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Fm(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Fm(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(vi(this,n),$n(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,$n(i)),this._dur||(this._zTime=-Me),this},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Me:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-Me,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-Me)},t.eventCallback=function(n,i,r){var o=this.vars;return arguments.length>1?(i?(o[n]=i,r&&(o[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},t.then=function(n){var i=this,r=i._prom;return new Promise(function(o){var a=Ve(n)?n:$m,l=function(){var h=i.then;i.then=null,r&&r(),Ve(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=h),o(a),i.then=h};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},t.kill=function(){Ra(this)},s})();hi(Ba.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Me,_prom:0,_ps:!1,_rts:1});var wn=(function(s){Vm(t,s);function t(n,i){var r;return n===void 0&&(n={}),r=s.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=$n(n.sortChildren),Fe&&Zi(n.parent||Fe,ps(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&jm(ps(r),n.scrollTrigger),r}var e=t.prototype;return e.to=function(i,r,o){return La(0,arguments,this),this},e.from=function(i,r,o){return La(1,arguments,this),this},e.fromTo=function(i,r,o,a){return La(2,arguments,this),this},e.set=function(i,r,o){return r.duration=0,r.parent=this,Ia(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new We(i,r,vi(this,o),1),this},e.call=function(i,r,o){return Zi(this,We.delayedCall(0,i,r),o)},e.staggerTo=function(i,r,o,a,l,c,h){return o.duration=r,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=h,o.parent=this,new We(i,o,vi(this,l)),this},e.staggerFrom=function(i,r,o,a,l,c,h){return o.runBackwards=1,Ia(o).immediateRender=$n(o.immediateRender),this.staggerTo(i,r,o,a,l,c,h)},e.staggerFromTo=function(i,r,o,a,l,c,h,d){return a.startAt=o,Ia(a).immediateRender=$n(a.immediateRender),this.staggerTo(i,r,a,l,c,h,d)},e.render=function(i,r,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:Oe(i),d=this._zTime<0!=i<0&&(this._initted||!c),f,u,m,_,p,g,v,w,y,T,E,x;if(this!==Fe&&h>l&&i>=0&&(h=l),h!==this._tTime||o||d){if(a!==this._time&&c&&(h+=this._time-a,i+=this._time-a),f=h,y=this._start,w=this._ts,g=!w,d&&(c||(a=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(E=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,r,o);if(f=Oe(h%p),h===l?(_=this._repeat,f=c):(T=Oe(h/p),_=~~T,_&&_===T&&(f=c,_--),f>c&&(f=c)),T=go(this._tTime,p),!a&&this._tTime&&T!==_&&this._tTime-T*p-this._dur<=0&&(T=_),E&&_&1&&(f=c-f,x=1),_!==T&&!this._lock){var b=E&&T&1,P=b===(E&&_&1);if(_<T&&(b=!b),a=b?0:h%c?c:h,this._lock=1,this.render(a||(x?0:Oe(_*p)),r,!c)._lock=0,this._tTime=h,!r&&this.parent&&li(this,"onRepeat"),this.vars.repeatRefresh&&!x&&(this.invalidate()._lock=1,T=_),a&&a!==this._time||g!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,P&&(this._lock=2,a=b?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!x&&this.invalidate()),this._lock=0,!this._ts&&!g)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=wM(this,Oe(a),Oe(f)),v&&(h-=f-(f=v._start))),this._tTime=h,this._time=f,this._act=!!w,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&h&&c&&!r&&!T&&(li(this,"onStart"),this._tTime!==h))return this;if(f>=a&&i>=0)for(u=this._first;u;){if(m=u._next,(u._act||f>=u._start)&&u._ts&&v!==u){if(u.parent!==this)return this.render(i,r,o);if(u.render(u._ts>0?(f-u._start)*u._ts:(u._dirty?u.totalDuration():u._tDur)+(f-u._start)*u._ts,r,o),f!==this._time||!this._ts&&!g){v=0,m&&(h+=this._zTime=-Me);break}}u=m}else{u=this._last;for(var C=i<0?i:f;u;){if(m=u._prev,(u._act||C<=u._end)&&u._ts&&v!==u){if(u.parent!==this)return this.render(i,r,o);if(u.render(u._ts>0?(C-u._start)*u._ts:(u._dirty?u.totalDuration():u._tDur)+(C-u._start)*u._ts,r,o||mn&&Xf(u)),f!==this._time||!this._ts&&!g){v=0,m&&(h+=this._zTime=C?-Me:Me);break}}u=m}}if(v&&!r&&(this.pause(),v.render(f>=a?0:-Me)._zTime=f>=a?1:-1,this._ts))return this._start=y,yh(this),this.render(i,r,o);this._onUpdate&&!r&&li(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&a)&&(y===this._start||Math.abs(w)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&Hs(this,1),!r&&!(i<0&&!a)&&(h||a||!l)&&(li(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,r){var o=this;if(gs(r)||(r=vi(this,r,i)),!(i instanceof Ba)){if(En(i))return i.forEach(function(a){return o.add(a,r)}),this;if(rn(i))return this.addLabel(i,r);if(Ve(i))i=We.delayedCall(0,i);else return this}return this!==i?Zi(this,i,r):this},e.getChildren=function(i,r,o,a){i===void 0&&(i=!0),r===void 0&&(r=!0),o===void 0&&(o=!0),a===void 0&&(a=-yi);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof We?r&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,r,o)))),c=c._next;return l},e.getById=function(i){for(var r=this.getChildren(1,1,1),o=r.length;o--;)if(r[o].vars.id===i)return r[o]},e.remove=function(i){return rn(i)?this.removeLabel(i):Ve(i)?this.killTweensOf(i):(i.parent===this&&vh(this,i),i===this._recent&&(this._recent=this._last),mr(this))},e.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Oe(Jn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),s.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},e.addLabel=function(i,r){return this.labels[i]=vi(this,r),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,r,o){var a=We.delayedCall(0,r||Oa,o);return a.data="isPause",this._hasPause=1,Zi(this,a,vi(this,i))},e.removePause=function(i){var r=this._first;for(i=vi(this,i);r;)r._start===i&&r.data==="isPause"&&Hs(r),r=r._next},e.killTweensOf=function(i,r,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)ks!==a[l]&&a[l].kill(i,r);return this},e.getTweensOf=function(i,r){for(var o=[],a=Si(i),l=this._first,c=gs(r),h;l;)l instanceof We?xM(l._targets,a)&&(c?(!ks||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&o.push(l):(h=l.getTweensOf(a,r)).length&&o.push.apply(o,h),l=l._next;return o},e.tweenTo=function(i,r){r=r||{};var o=this,a=vi(o,i),l=r,c=l.startAt,h=l.onStart,d=l.onStartParams,f=l.immediateRender,u,m=We.to(o,hi({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||Me,onStart:function(){if(o.pause(),!u){var p=r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());m._dur!==p&&_o(m,p,0,1).render(m._time,!0,!0),u=1}h&&h.apply(m,d||[])}},r));return f?m.render(0):m},e.tweenFromTo=function(i,r,o){return this.tweenTo(r,hi({startAt:{time:vi(this,i)}},o))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),Bm(this,vi(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),Bm(this,vi(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Me)},e.shiftChildren=function(i,r,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(i=Oe(i);a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(r)for(c in l)l[c]>=o&&(l[c]+=i);return mr(this)},e.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return s.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,o;r;)o=r._next,this.remove(r),r=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),mr(this)},e.totalDuration=function(i){var r=0,o=this,a=o._last,l=yi,c,h,d;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(d=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),h=a._start,h>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Zi(o,a,h-a._delay,1)._lock=0):l=h,h<0&&a._ts&&(r-=h,(!d&&!o._dp||d&&d.smoothChildTiming)&&(o._start+=Oe(h/o._ts),o._time-=h,o._tTime-=h),o.shiftChildren(-h,!1,-1/0),l=0),a._end>r&&a._ts&&(r=a._end),a=c;_o(o,o===Fe&&o._time>r?o._time:r,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(i){if(Fe._ts&&(Zm(Fe,dh(i,Fe)),Ym=Jn.frame),Jn.frame>=Nm){Nm+=Kn.autoSleep||120;var r=Fe._first;if((!r||!r._ts)&&Kn.autoSleep&&Jn._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||Jn.sleep()}}},t})(Ba);hi(wn.prototype,{_lock:0,_hasPause:0,_forcing:0});var GM=function(t,e,n,i,r,o,a){var l=new On(this._pt,t,e,0,1,Qf,null,r),c=0,h=0,d,f,u,m,_,p,g,v;for(l.b=n,l.e=i,n+="",i+="",(g=~i.indexOf("random("))&&(i=vo(i)),o&&(v=[n,i],o(v,t,e),n=v[0],i=v[1]),f=n.match(Sf)||[];d=Sf.exec(i);)m=d[0],_=i.substring(c,d.index),u?u=(u+1)%5:_.substr(-5)==="rgba("&&(u=1),m!==f[h++]&&(p=parseFloat(f[h-1])||0,l._pt={_next:l._pt,p:_||h===1?_:",",s:p,c:m.charAt(1)==="="?vr(p,m)-p:parseFloat(m)-p,m:u&&u<4?Math.round:0},c=Sf.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(zf.test(i)||g)&&(l.e=0),this._pt=l,l},Zf=function(t,e,n,i,r,o,a,l,c,h){Ve(i)&&(i=i(r||0,t,o));var d=t[e],f=n!=="get"?n:Ve(d)?c?t[e.indexOf("set")||!Ve(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():d,u=Ve(d)?c?YM:pg:Kf,m;if(rn(i)&&(~i.indexOf("random(")&&(i=vo(i)),i.charAt(1)==="="&&(m=vr(f,i)+(gn(f)||0),(m||m===0)&&(i=m))),!h||f!==i||Uf)return!isNaN(f*i)&&i!==""?(m=new On(this._pt,t,e,+f||0,i-(f||0),typeof d=="boolean"?JM:mg,0,u),c&&(m.fp=c),a&&m.modifier(a,this,t),this._pt=m):(!d&&!(e in t)&&xh(e,i),GM.call(this,t,e,f,i,u,l||Kn.stringFilter,c))},HM=function(t,e,n,i,r){if(Ve(t)&&(t=Da(t,r,e,n,i)),!Ji(t)||t.style&&t.nodeType||En(t)||Hm(t))return rn(t)?Da(t,r,e,n,i):t;var o={},a;for(a in t)o[a]=Da(t[a],r,e,n,i);return o},Jf=function(t,e,n,i,r,o){var a,l,c,h;if(Zn[t]&&(a=new Zn[t]).init(r,a.rawVars?e[t]:HM(e[t],i,r,o,n),n,i,o)!==!1&&(n._pt=l=new On(n._pt,r,t,0,1,a.render,a,0,a.priority),n!==po))for(c=n._ptLookup[n._targets.indexOf(r)],h=a._props.length;h--;)c[a._props[h]]=l;return a},ks,Uf,$f=function s(t,e,n){var i=t.vars,r=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.runBackwards,d=i.yoyoEase,f=i.keyframes,u=i.autoRevert,m=t._dur,_=t._startAt,p=t._targets,g=t.parent,v=g&&g.data==="nested"?g.vars.targets:p,w=t._overwrite==="auto"&&!Of,y=t.timeline,T=i.easeReverse||d,E,x,b,P,C,N,D,H,I,B,X,F,Q;if(y&&(!f||!r)&&(r="none"),t._ease=gr(r,Na.ease),t._rEase=T&&(gr(T)||t._ease),t._from=!y&&!!i.runBackwards,t._from&&(t.ratio=1),!y||f&&!i.stagger){if(H=p[0]?Gs(p[0]).harness:0,F=H&&i[H.prop],E=fh(i,Vf),_&&(_._zTime<0&&_.progress(1),e<0&&h&&a&&!u?_.render(-1,!0):_.revert(h&&m?ah:gM),_._lazy=0),o){if(Hs(t._startAt=We.set(p,hi({data:"isStart",overwrite:!1,parent:g,immediateRender:!0,lazy:!_&&$n(l),startAt:null,delay:0,onUpdate:c&&function(){return li(t,"onUpdate")},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(mn||!a&&!u)&&t._startAt.revert(ah),a&&m&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(h&&m&&!_){if(e&&(a=!1),b=hi({overwrite:!1,data:"isFromStart",lazy:a&&!_&&$n(l),immediateRender:a,stagger:0,parent:g},E),F&&(b[H.prop]=F),Hs(t._startAt=We.set(p,b)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(mn?t._startAt.revert(ah):t._startAt.render(-1,!0)),t._zTime=e,!a)s(t._startAt,Me,Me);else if(!e)return}for(t._pt=t._ptCache=0,l=m&&$n(l)||l&&!m,x=0;x<p.length;x++){if(C=p[x],D=C._gsap||Hf(p)[x]._gsap,t._ptLookup[x]=B={},Pf[D.id]&&Vs.length&&uh(),X=v===p?x:v.indexOf(C),H&&(I=new H).init(C,F||E,t,X,v)!==!1&&(t._pt=P=new On(t._pt,C,I.name,0,1,I.render,I,0,I.priority),I._props.forEach(function(W){B[W]=P}),I.priority&&(N=1)),!H||F)for(b in E)Zn[b]&&(I=Jf(b,E,t,X,C,v))?I.priority&&(N=1):B[b]=P=Zf.call(t,C,b,"get",E[b],X,v,0,i.stringFilter);t._op&&t._op[x]&&t.kill(C,t._op[x]),w&&t._pt&&(ks=t,Fe.killTweensOf(C,B,t.globalTime(e)),Q=!t.parent,ks=0),t._pt&&l&&(Pf[D.id]=1)}N&&td(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!Q,f&&e<=0&&y.render(yi,!0,!0)},WM=function(t,e,n,i,r,o,a,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],h,d,f,u;if(!c)for(c=t._ptCache[e]=[],f=t._ptLookup,u=t._targets.length;u--;){if(h=f[u][e],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==e&&h.fp!==e;)h=h._next;if(!h)return Uf=1,t.vars[e]="+=0",$f(t,a),Uf=0,l?Ua(e+" not eligible for reset. Try splitting into individual properties"):1;c.push(h)}for(u=c.length;u--;)d=c[u],h=d._pt||d,h.s=(i||i===0)&&!r?i:h.s+(i||0)+o*h.c,h.c=n-h.s,d.e&&(d.e=Ge(n)+gn(d.e)),d.b&&(d.b=h.s+gn(d.b))},XM=function(t,e){var n=t[0]?Gs(t[0]).harness:0,i=n&&n.aliases,r,o,a,l;if(!i)return e;r=mo({},e);for(o in i)if(o in r)for(l=i[o].split(","),a=l.length;a--;)r[l[a]]=r[o];return r},qM=function(t,e,n,i){var r=e.ease||i||"power1.inOut",o,a;if(En(e))a=n[t]||(n[t]=[]),e.forEach(function(l,c){return a.push({t:c/(e.length-1)*100,v:l,e:r})});else for(o in e)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(t),v:e[o],e:r})},Da=function(t,e,n,i,r){return Ve(t)?t.call(e,n,i,r):rn(t)&&~t.indexOf("random(")?vo(t):t},mh=Gf+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",dg={};Un(mh+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return dg[s]=1});mh=mh.split(",");var We=(function(s){Vm(t,s);function t(n,i,r,o){var a;typeof i=="number"&&(r.duration=i,i=r,r=null),a=s.call(this,o?i:Ia(i))||this;var l=a.vars,c=l.duration,h=l.delay,d=l.immediateRender,f=l.stagger,u=l.overwrite,m=l.keyframes,_=l.defaults,p=l.scrollTrigger,g=i.parent||Fe,v=(En(n)||Hm(n)?gs(n[0]):"length"in i)?[n]:Si(n),w,y,T,E,x,b,P,C;if(a._targets=v.length?Hf(v):Ua("GSAP target "+n+" not found. https://gsap.com",!Kn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=u,m||f||oh(c)||oh(h)){i=a.vars;var N=i.easeReverse||i.yoyoEase;if(w=a.timeline=new wn({data:"nested",defaults:_||{},targets:g&&g.data==="nested"?g.vars.targets:v}),w.kill(),w.parent=w._dp=ps(a),w._start=0,f||oh(c)||oh(h)){if(E=v.length,P=f&&ig(f),Ji(f))for(x in f)~mh.indexOf(x)&&(C||(C={}),C[x]=f[x]);for(y=0;y<E;y++)T=fh(i,dg),T.stagger=0,N&&(T.easeReverse=N),C&&mo(T,C),b=v[y],T.duration=+Da(c,ps(a),y,b,v),T.delay=(+Da(h,ps(a),y,b,v)||0)-a._delay,!f&&E===1&&T.delay&&(a._delay=h=T.delay,a._start+=h,T.delay=0),w.to(b,T,P?P(y,b,v):0),w._ease=ce.none;w.duration()?c=h=0:a.timeline=0}else if(m){Ia(hi(w.vars.defaults,{ease:"none"})),w._ease=gr(m.ease||i.ease||"none");var D=0,H,I,B;if(En(m))m.forEach(function(X){return w.to(v,X,">")}),w.duration();else{T={};for(x in m)x==="ease"||x==="easeEach"||qM(x,m[x],T,m.easeEach);for(x in T)for(H=T[x].sort(function(X,F){return X.t-F.t}),D=0,y=0;y<H.length;y++)I=H[y],B={ease:I.e,duration:(I.t-(y?H[y-1].t:0))/100*c},B[x]=I.v,w.to(v,B,D),D+=B.duration;w.duration()<c&&w.to({},{duration:c-w.duration()})}}c||a.duration(c=w.duration())}else a.timeline=0;return u===!0&&!Of&&(ks=ps(a),Fe.killTweensOf(v),ks=0),Zi(g,ps(a),r),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(d||!c&&!m&&a._start===Oe(g._time)&&$n(d)&&MM(ps(a))&&g.data!=="nested")&&(a._tTime=-Me,a.render(Math.max(0,-h)||0)),p&&jm(ps(a),p),a}var e=t.prototype;return e.render=function(i,r,o){var a=this._time,l=this._tDur,c=this._dur,h=i<0,d=i>l-Me&&!h?l:i<Me?0:i,f,u,m,_,p,g,v,w;if(!c)TM(this,i,r,o);else if(d!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(f=d,w=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(_*100+i,r,o);if(f=Oe(d%_),d===l?(m=this._repeat,f=c):(p=Oe(d/_),m=~~p,m&&m===p?(f=c,m--):f>c&&(f=c)),g=this._yoyo&&m&1,g&&(f=c-f),p=go(this._tTime,_),f===a&&!o&&this._initted&&m===p)return this._tTime=d,this;m!==p&&this.vars.repeatRefresh&&!g&&!this._lock&&f!==_&&this._initted&&(this._lock=o=1,this.render(Oe(_*m),!0).invalidate()._lock=0)}if(!this._initted){if(tg(this,h?i:f,o,r,d))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&m!==p))return this;if(c!==this._dur)return this.render(i,r,o)}if(this._rEase){var y=f<a;if(y!==this._inv){var T=y?a:c-a;this._inv=y,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=T?(y?-1:1)/T:0,this._invScale=y?-this.ratio:1-this.ratio,this._invEase=y?this._rEase:this._ease}this.ratio=v=this._invRatio+this._invScale*this._invEase((f-this._invTime)*this._invRecip)}else this.ratio=v=this._ease(f/c);if(this._from&&(this.ratio=v=1-v),this._tTime=d,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&d&&!r&&!p&&(li(this,"onStart"),this._tTime!==d))return this;for(u=this._pt;u;)u.r(v,u.d),u=u._next;w&&w.render(i<0?i:w._dur*w._ease(f/this._dur),r,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(h&&If(this,i,r,o),li(this,"onUpdate")),this._repeat&&m!==p&&this.vars.onRepeat&&!r&&this.parent&&li(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(h&&!this._onUpdate&&If(this,i,!0,!0),(i||!c)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&Hs(this,1),!r&&!(h&&!a)&&(d||a||g)&&(li(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),s.prototype.invalidate.call(this,i)},e.resetTo=function(i,r,o,a,l){Fa||Jn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||$f(this,c),h=this._ease(c/this._dur),WM(this,i,r,o,a,h,c,l)?this.resetTo(i,r,o,a,1):(Sh(this,0),this.parent||Km(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?Ra(this):this.scrollTrigger&&this.scrollTrigger.kill(!!mn),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,ks&&ks.vars.overwrite!==!0)._first||Ra(this),this.parent&&o!==this.timeline.totalDuration()&&_o(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?Si(i):a,c=this._ptLookup,h=this._pt,d,f,u,m,_,p,g;if((!r||r==="all")&&yM(a,l))return r==="all"&&(this._pt=0),Ra(this);for(d=this._op=this._op||[],r!=="all"&&(rn(r)&&(_={},Un(r,function(v){return _[v]=1}),r=_),r=XM(a,r)),g=a.length;g--;)if(~l.indexOf(a[g])){f=c[g],r==="all"?(d[g]=r,m=f,u={}):(u=d[g]=d[g]||{},m=r);for(_ in m)p=f&&f[_],p&&((!("kill"in p.d)||p.d.kill(_)===!0)&&vh(this,p,"_pt"),delete f[_]),u!=="all"&&(u[_]=1)}return this._initted&&!this._pt&&h&&Ra(this),this},t.to=function(i,r){return new t(i,r,arguments[2])},t.from=function(i,r){return La(1,arguments)},t.delayedCall=function(i,r,o,a){return new t(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},t.fromTo=function(i,r,o){return La(2,arguments)},t.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new t(i,r)},t.killTweensOf=function(i,r,o){return Fe.killTweensOf(i,r,o)},t})(Ba);hi(We.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Un("staggerTo,staggerFrom,staggerFromTo",function(s){We[s]=function(){var t=new wn,e=Lf.call(arguments,0);return e.splice(s==="staggerFromTo"?5:4,0,0),t[s].apply(t,e)}});var Kf=function(t,e,n){return t[e]=n},pg=function(t,e,n){return t[e](n)},YM=function(t,e,n,i){return t[e](i.fp,n)},ZM=function(t,e,n){return t.setAttribute(e,n)},Mh=function(t,e){return Ve(t[e])?pg:_h(t[e])&&t.setAttribute?ZM:Kf},mg=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},JM=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},Qf=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},jf=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},$M=function(t,e,n,i){for(var r=this._pt,o;r;)o=r._next,r.p===i&&r.modifier(t,e,n),r=o},KM=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?vh(this,e,"_pt"):e.dep||(n=1),e=i;return!n},QM=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},td=function(t){for(var e=t._pt,n,i,r,o;e;){for(n=e._next,i=r;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:o)?e._prev._next=e:r=e,(e._next=i)?i._prev=e:o=e,e=n}t._pt=r},On=(function(){function s(e,n,i,r,o,a,l,c,h){this.t=n,this.s=r,this.c=o,this.p=i,this.r=a||mg,this.d=l||this,this.set=c||Kf,this.pr=h||0,this._next=e,e&&(e._prev=this)}var t=s.prototype;return t.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=QM,this.m=n,this.mt=r,this.tween=i},s})();Un(Gf+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(s){return Vf[s]=1});ci.TweenMax=ci.TweenLite=We;ci.TimelineLite=ci.TimelineMax=wn;Fe=new wn({sortChildren:!1,defaults:Na,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Kn.stringFilter=qf;var _r=[],ch={},jM=[],km=0,tb=0,Ef=function(t){return(ch[t]||jM).map(function(e){return e()})},za=function(){var t=Date.now(),e=[];t-km>2&&(Ef("matchMediaInit"),_r.forEach(function(n){var i=n.queries,r=n.conditions,o,a,l,c;for(a in i)o=Yi.matchMedia(i[a]).matches,o&&(l=1),o!==r[a]&&(r[a]=o,c=1);c&&(n.revert(),l&&e.push(n))}),Ef("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),km=t,Ef("matchMedia"))},gg=(function(){function s(e,n){this.selector=n&&Df(n),this.data=[],this._r=[],this.isReverted=!1,this.id=tb++,e&&this.add(e)}var t=s.prototype;return t.add=function(n,i,r){Ve(n)&&(r=i,i=n,n=Ve);var o=this,a=function(){var c=De,h=o.selector,d;return c&&c!==o&&c.data.push(o),r&&(o.selector=Df(r)),De=o,d=i.apply(o,arguments),Ve(d)&&o._r.push(d),De=c,o.selector=h,o.isReverted=!1,d};return o.last=a,n===Ve?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},t.ignore=function(n){var i=De;De=null,n(this),De=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof s?n.push.apply(n,i.getTweens()):i instanceof We&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var r=this;if(n?(function(){for(var a=r.getTweens(),l=r.data.length,c;l--;)c=r.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return a.splice(a.indexOf(h),1)}));for(a.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,d){return d.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=r.data.length;l--;)c=r.data[l],c instanceof wn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof We)&&c.revert&&c.revert(n);r._r.forEach(function(h){return h(n,r)}),r.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i){for(var o=_r.length;o--;)_r[o].id===this.id&&_r.splice(o,1);this._mqs&&this._mqs.forEach(function(a){return a.removeListener?a.removeListener(za):a.removeEventListener("change",za)}),this._mqs=null}},t.revert=function(n){this.kill(n||{})},s})(),eb=(function(){function s(e){this.contexts=[],this.scope=e,De&&De.data.push(this)}var t=s.prototype;return t.add=function(n,i,r){Ji(n)||(n={matches:n});var o=new gg(0,r||this.scope),a=o.conditions={},l,c,h;De&&!o.selector&&(o.selector=De.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?h=1:(l=Yi.matchMedia(n[c]),l&&(_r.indexOf(o)<0&&_r.push(o),(a[c]=l.matches)&&(h=1),l.addListener?l.addListener(za):l.addEventListener("change",za),(o._mqs||(o._mqs=[])).push(l)));return h&&i(o,function(d){return o.add(null,d)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},s})(),gh={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return cg(i)})},timeline:function(t){return new wn(t)},getTweensOf:function(t,e){return Fe.getTweensOf(t,e)},getProperty:function(t,e,n,i){rn(t)&&(t=Si(t)[0]);var r=Gs(t||{}).get,o=n?$m:Jm;return n==="native"&&(n=""),t&&(e?o((Zn[e]&&Zn[e].get||r)(t,e,n,i)):function(a,l,c){return o((Zn[a]&&Zn[a].get||r)(t,a,l,c))})},quickSetter:function(t,e,n){if(t=Si(t),t.length>1){var i=t.map(function(h){return An.quickSetter(h,e,n)}),r=i.length;return function(h){for(var d=r;d--;)i[d](h)}}t=t[0]||{};var o=Zn[e],a=Gs(t),l=a.harness&&(a.harness.aliases||{})[e]||e,c=o?function(h){var d=new o;po._pt=0,d.init(t,n?h+n:h,po,0,[t]),d.render(1,d),po._pt&&jf(1,po)}:a.set(t,l);return o?c:function(h){return c(t,l,n?h+n:h,a,1)}},quickTo:function(t,e,n){var i,r=An.to(t,hi((i={},i[e]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,c,h){return r.resetTo(e,l,c,h)};return o.tween=r,o},isTweening:function(t){return Fe.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=gr(t.ease,Na.ease)),Um(Na,t||{})},config:function(t){return Um(Kn,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,r=t.defaults,o=t.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!Zn[a]&&!ci[a]&&Ua(e+" effect requires "+a+" plugin.")}),Mf[e]=function(a,l,c){return n(Si(a),hi(l||{},r),c)},o&&(wn.prototype[e]=function(a,l,c){return this.add(Mf[e](a,Ji(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){ce[t]=gr(e)},parseEase:function(t,e){return arguments.length?gr(t,e):ce},getById:function(t){return Fe.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new wn(t),i,r;for(n.smoothChildTiming=$n(t.smoothChildTiming),Fe.remove(n),n._dp=0,n._time=n._tTime=Fe._time,i=Fe._first;i;)r=i._next,(e||!(!i._dur&&i instanceof We&&i.vars.onComplete===i._targets[0]))&&Zi(n,i,i._start-i._delay),i=r;return Zi(Fe,n,0),n},context:function(t,e){return t?new gg(t,e):De},matchMedia:function(t){return new eb(t)},matchMediaRefresh:function(){return _r.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||za()},addEventListener:function(t,e){var n=ch[t]||(ch[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=ch[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:LM,wrapYoyo:DM,distribute:ig,random:rg,snap:sg,normalize:IM,getUnit:gn,clamp:AM,splitColor:hg,toArray:Si,selector:Df,mapRange:ag,pipe:RM,unitize:PM,interpolate:NM,shuffle:ng},install:Xm,effects:Mf,ticker:Jn,updateRoot:wn.updateRoot,plugins:Zn,globalTimeline:Fe,core:{PropTween:On,globals:qm,Tween:We,Timeline:wn,Animation:Ba,getCache:Gs,_removeLinkedListItem:vh,reverting:function(){return mn},context:function(t){return t&&De&&(De.data.push(t),t._ctx=De),De},suppressOverwrites:function(t){return Of=t}}};Un("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return gh[s]=We[s]});Jn.add(wn.updateRoot);po=gh.to({},{duration:0});var nb=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},ib=function(t,e){var n=t._targets,i,r,o;for(i in e)for(r=n.length;r--;)o=t._ptLookup[r][i],o&&(o=o.d)&&(o._pt&&(o=nb(o,i)),o&&o.modifier&&o.modifier(e[i],t,n[r],i))},Af=function(t,e){return{name:t,headless:1,rawVars:1,init:function(i,r,o){o._onInit=function(a){var l,c;if(rn(r)&&(l={},Un(r,function(h){return l[h]=1}),r=l),e){l={};for(c in r)l[c]=e(r[c]);r=l}ib(a,r)}}}},An=gh.registerPlugin({name:"attr",init:function(t,e,n,i,r){var o,a,l;this.tween=n;for(o in e)l=t.getAttribute(o)||"",a=this.add(t,"setAttribute",(l||0)+"",e[o],i,r,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(t,e){for(var n=e._pt;n;)mn?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",headless:1,init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},Af("roundProps",Nf),Af("modifiers"),Af("snap",sg))||gh;We.version=wn.version=An.version="3.15.1";Wm=1;Ff()&&xo();var sb=ce.Power0,rb=ce.Power1,ob=ce.Power2,ab=ce.Power3,lb=ce.Power4,cb=ce.Linear,hb=ce.Quad,ub=ce.Cubic,fb=ce.Quart,db=ce.Quint,pb=ce.Strong,mb=ce.Elastic,gb=ce.Back,_b=ce.SteppedEase,xb=ce.Bounce,vb=ce.Sine,yb=ce.Expo,Sb=ce.Circ;var _g,Xs,So,od,Tr,Mb,xg,ad,bb=function(){return typeof window!="undefined"},xs={},br=180/Math.PI,Mo=Math.PI/180,yo=Math.atan2,vg=1e8,ld=/([A-Z])/g,Tb=/(left|right|width|margin|padding|x)/i,wb=/[\s,\(]\S/,$i={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},nd=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},Eb=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},Ab=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},Cb=function(t,e){return e.set(e.t,e.p,t===1?e.e:t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},Rb=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},Ag=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},Cg=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},Pb=function(t,e,n){return t.style[e]=n},Ib=function(t,e,n){return t.style.setProperty(e,n)},Lb=function(t,e,n){return t._gsap[e]=n},Db=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},Nb=function(t,e,n,i,r){var o=t._gsap;o.scaleX=o.scaleY=n,o.renderTransform(r,o)},Ub=function(t,e,n,i,r){var o=t._gsap;o[e]=n,o.renderTransform(r,o)},Be="transform",Qn=Be+"Origin",Ob=function s(t,e){var n=this,i=this.target,r=i.style,o=i._gsap;if(t in xs&&r){if(this.tfm=this.tfm||{},t!=="transform")t=$i[t]||t,~t.indexOf(",")?t.split(",").forEach(function(a){return n.tfm[a]=_s(i,a)}):this.tfm[t]=o.x?o[t]:_s(i,t),t===Qn&&(this.tfm.zOrigin=o.zOrigin);else return $i.transform.split(",").forEach(function(a){return s.call(n,a,e)});if(this.props.indexOf(Be)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Qn,e,"")),t=Be}(r||e)&&this.props.push(t,e,r[t])},Rg=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},Fb=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,r,o;for(r=0;r<t.length;r+=3)t[r+1]?t[r+1]===2?e[t[r]](t[r+2]):e[t[r]]=t[r+2]:t[r+2]?n[t[r]]=t[r+2]:n.removeProperty(t[r].substr(0,2)==="--"?t[r]:t[r].replace(ld,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),r=ad(),(!r||!r.isStart)&&!n[Be]&&(Rg(n),i.zOrigin&&n[Qn]&&(n[Qn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Pg=function(t,e){var n={target:t,props:[],revert:Fb,save:Ob};return t._gsap||An.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(i){return n.save(i)}),n},Ig,id=function(t,e){var n=Xs.createElementNS?Xs.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Xs.createElement(t);return n&&n.style?n:Xs.createElement(t)},ui=function s(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(ld,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&s(t,bo(e)||e,1)||""},yg="O,Moz,ms,Ms,Webkit".split(","),bo=function(t,e,n){var i=e||Tr,r=i.style,o=5;if(t in r&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(yg[o]+t in r););return o<0?null:(o===3?"ms":o>=0?yg[o]:"")+t},sd=function(){bb()&&window.document&&(_g=window,Xs=_g.document,So=Xs.documentElement,Tr=id("div")||{style:{}},Mb=id("div"),Be=bo(Be),Qn=Be+"Origin",Tr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Ig=!!bo("perspective"),ad=An.core.reverting,od=1)},Sg=function(t){var e=t.ownerSVGElement,n=id("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=t.cloneNode(!0),r;i.style.display="block",n.appendChild(i),So.appendChild(n);try{r=i.getBBox()}catch{}return n.removeChild(i),So.removeChild(n),r},Mg=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},Lg=function(t){var e,n;try{e=t.getBBox()}catch{e=Sg(t),n=1}return e&&(e.width||e.height)||n||(e=Sg(t)),e&&!e.width&&!e.x&&!e.y?{x:+Mg(t,["x","cx","x1"])||0,y:+Mg(t,["y","cy","y1"])||0,width:0,height:0}:e},Dg=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&Lg(t))},Ys=function(t,e){if(e){var n=t.style,i;e in xs&&e!==Qn&&(e=Be),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(ld,"-$1").toLowerCase())):n.removeAttribute(e)}},qs=function(t,e,n,i,r,o){var a=new On(t._pt,e,n,0,1,o?Cg:Ag);return t._pt=a,a.b=i,a.e=r,t._props.push(n),a},bg={deg:1,rad:1,turn:1},Bb={grid:1,flex:1},Zs=function s(t,e,n,i){var r=parseFloat(n)||0,o=(n+"").trim().substr((r+"").length)||"px",a=Tr.style,l=Tb.test(e),c=t.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),d=100,f=i==="px",u=i==="%",m,_,p,g;if(i===o||!r||bg[i]||bg[o])return r;if(o!=="px"&&!f&&(r=s(t,e,n,"px")),g=t.getCTM&&Dg(t),(u||o==="%")&&(xs[e]||~e.indexOf("adius")))return m=g?t.getBBox()[l?"width":"height"]:t[h],Ge(u?r/m*d:r/100*m);if(a[l?"width":"height"]=d+(f?o:i),_=i!=="rem"&&~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,g&&(_=(t.ownerSVGElement||{}).parentNode),(!_||_===Xs||!_.appendChild)&&(_=Xs.body),p=_._gsap,p&&u&&p.width&&l&&p.time===Jn.time&&!p.uncache)return Ge(r/p.width*d);if(u&&(e==="height"||e==="width")){var v=t.style[e];t.style[e]=d+i,m=t[h],v?t.style[e]=v:Ys(t,e)}else(u||o==="%")&&!Bb[ui(_,"display")]&&(a.position=ui(t,"position")),_===t&&(a.position="static"),_.appendChild(Tr),m=Tr[h],_.removeChild(Tr),a.position="absolute";return l&&u&&(p=Gs(_),p.time=Jn.time,p.width=_[h]),Ge(f?m*r/d:m&&r?d/m*r:0)},_s=function(t,e,n,i){var r;return od||sd(),e in $i&&e!=="transform"&&(e=$i[e],~e.indexOf(",")&&(e=e.split(",")[0])),xs[e]&&e!=="transform"?(r=Ha(t,i),r=e!=="transformOrigin"?r[e]:r.svg?r.origin:Th(ui(t,Qn))+" "+r.zOrigin+"px"):(r=t.style[e],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=bh[e]&&bh[e](t,e,n)||ui(t,e)||Wf(t,e)||(e==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?Zs(t,e,r,n)+n:r},zb=function(t,e,n,i){if(!n||n==="none"){var r=bo(e,t,1),o=r&&ui(t,r,1);o&&o!==n?(e=r,n=o):e==="borderColor"&&(n=ui(t,"borderTopColor"))}var a=new On(this._pt,t.style,e,0,1,Qf),l=0,c=0,h,d,f,u,m,_,p,g,v,w,y,T;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=ui(t,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=t.style[e],t.style[e]=i,i=ui(t,e)||i,_?t.style[e]=_:Ys(t,e)),h=[n,i],qf(h),n=h[0],i=h[1],f=n.match(xr)||[],T=i.match(xr)||[],T.length){for(;d=xr.exec(i);)p=d[0],v=i.substring(l,d.index),m?m=(m+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(m=1),p!==(_=f[c++]||"")&&(u=parseFloat(_)||0,y=_.substr((u+"").length),p.charAt(1)==="="&&(p=vr(u,p)+y),g=parseFloat(p),w=p.substr((g+"").length),l=xr.lastIndex-w.length,w||(w=w||Kn.units[e]||y,l===i.length&&(i+=w,a.e+=w)),y!==w&&(u=Zs(t,e,_,w)||0),a._pt={_next:a._pt,p:v||c===1?v:",",s:u,c:g-u,m:m&&m<4||e==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=e==="display"&&i==="none"?Cg:Ag;return zf.test(i)&&(a.e=0),this._pt=a,a},Tg={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},kb=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=Tg[n]||n,e[1]=Tg[i]||i,e.join(" ")},Vb=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,r=e.u,o=n._gsap,a,l,c;if(r==="all"||r===!0)i.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)a=r[c],xs[a]&&(l=1,a=a==="transformOrigin"?Qn:Be),Ys(n,a);l&&(Ys(n,Be),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Ha(n,1),o.uncache=1,Rg(i)))}},bh={clearProps:function(t,e,n,i,r){if(r.data!=="isFromStart"){var o=t._pt=new On(t._pt,e,n,0,0,Vb);return o.u=i,o.pr=-10,o.tween=r,t._props.push(n),1}}},Ga=[1,0,0,1,0,0],Ng={},Ug=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},wg=function(t){var e=ui(t,Be);return Ug(e)?Ga:e.substr(7).match(Bf).map(Ge)},cd=function(t,e){var n=t._gsap||Gs(t),i=t.style,r=wg(t),o,a,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?Ga:r):(r===Ga&&!t.offsetParent&&t!==So&&!n.svg&&(l=i.display,i.display="block",o=t.parentNode,(!o||!t.offsetParent&&!t.getBoundingClientRect().width)&&(c=1,a=t.nextElementSibling,So.appendChild(t)),r=wg(t),l?i.display=l:Ys(t,"display"),c&&(a?o.insertBefore(t,a):o?o.appendChild(t):So.removeChild(t))),e&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},rd=function(t,e,n,i,r,o){var a=t._gsap,l=r||cd(t,!0),c=a.xOrigin||0,h=a.yOrigin||0,d=a.xOffset||0,f=a.yOffset||0,u=l[0],m=l[1],_=l[2],p=l[3],g=l[4],v=l[5],w=e.split(" "),y=parseFloat(w[0])||0,T=parseFloat(w[1])||0,E,x,b,P;n?l!==Ga&&(x=u*p-m*_)&&(b=y*(p/x)+T*(-_/x)+(_*v-p*g)/x,P=y*(-m/x)+T*(u/x)-(u*v-m*g)/x,y=b,T=P):(E=Lg(t),y=E.x+(~w[0].indexOf("%")?y/100*E.width:y),T=E.y+(~(w[1]||w[0]).indexOf("%")?T/100*E.height:T)),i||i!==!1&&a.smooth?(g=y-c,v=T-h,a.xOffset=d+(g*u+v*_)-g,a.yOffset=f+(g*m+v*p)-v):a.xOffset=a.yOffset=0,a.xOrigin=y,a.yOrigin=T,a.smooth=!!i,a.origin=e,a.originIsAbsolute=!!n,t.style[Qn]="0px 0px",o&&(qs(o,a,"xOrigin",c,y),qs(o,a,"yOrigin",h,T),qs(o,a,"xOffset",d,a.xOffset),qs(o,a,"yOffset",f,a.yOffset)),t.setAttribute("data-svg-origin",y+" "+T)},Ha=function(t,e){var n=t._gsap||new Yf(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,r=n.scaleX<0,o="px",a="deg",l=getComputedStyle(t),c=ui(t,Qn)||"0",h,d,f,u,m,_,p,g,v,w,y,T,E,x,b,P,C,N,D,H,I,B,X,F,Q,W,R,tt,yt,Ut,J,lt;return h=d=f=_=p=g=v=w=y=0,u=m=1,n.svg=!!(t.getCTM&&Dg(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Be]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Be]!=="none"?l[Be]:"")),i.scale=i.rotate=i.translate="none"),x=cd(t,n.svg),n.svg&&(n.uncache?(Q=t.getBBox(),c=n.xOrigin-Q.x+"px "+(n.yOrigin-Q.y)+"px",F=""):F=!e&&t.getAttribute("data-svg-origin"),rd(t,F||c,!!F||n.originIsAbsolute,n.smooth!==!1,x)),T=n.xOrigin||0,E=n.yOrigin||0,x!==Ga&&(N=x[0],D=x[1],H=x[2],I=x[3],h=B=x[4],d=X=x[5],x.length===6?(u=Math.sqrt(N*N+D*D),m=Math.sqrt(I*I+H*H),_=N||D?yo(D,N)*br:0,v=H||I?yo(H,I)*br+_:0,v&&(m*=Math.abs(Math.cos(v*Mo))),n.svg&&(h-=T-(T*N+E*H),d-=E-(T*D+E*I))):(lt=x[6],Ut=x[7],R=x[8],tt=x[9],yt=x[10],J=x[11],h=x[12],d=x[13],f=x[14],b=yo(lt,yt),p=b*br,b&&(P=Math.cos(-b),C=Math.sin(-b),F=B*P+R*C,Q=X*P+tt*C,W=lt*P+yt*C,R=B*-C+R*P,tt=X*-C+tt*P,yt=lt*-C+yt*P,J=Ut*-C+J*P,B=F,X=Q,lt=W),b=yo(-H,yt),g=b*br,b&&(P=Math.cos(-b),C=Math.sin(-b),F=N*P-R*C,Q=D*P-tt*C,W=H*P-yt*C,J=I*C+J*P,N=F,D=Q,H=W),b=yo(D,N),_=b*br,b&&(P=Math.cos(b),C=Math.sin(b),F=N*P+D*C,Q=B*P+X*C,D=D*P-N*C,X=X*P-B*C,N=F,B=Q),p&&Math.abs(p)+Math.abs(_)>359.9&&(p=_=0,g=180-g),u=Ge(Math.sqrt(N*N+D*D+H*H)),m=Ge(Math.sqrt(X*X+lt*lt)),b=yo(B,X),v=Math.abs(b)>2e-4?b*br:0,y=J?1/(J<0?-J:J):0),n.svg&&(F=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!Ug(ui(t,Be)),F&&t.setAttribute("transform",F))),Math.abs(v)>90&&Math.abs(v)<270&&(r?(u*=-1,v+=_<=0?180:-180,_+=_<=0?180:-180):(m*=-1,v+=v<=0?180:-180)),e=e||n.uncache,n.x=h-((n.xPercent=h&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-h)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+o,n.y=d-((n.yPercent=d&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-d)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+o,n.z=f+o,n.scaleX=Ge(u),n.scaleY=Ge(m),n.rotation=Ge(_)+a,n.rotationX=Ge(p)+a,n.rotationY=Ge(g)+a,n.skewX=v+a,n.skewY=w+a,n.transformPerspective=y+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(i[Qn]=Th(c)),n.xOffset=n.yOffset=0,n.force3D=Kn.force3D,n.renderTransform=n.svg?Hb:Ig?Og:Gb,n.uncache=0,n},Th=function(t){return(t=t.split(" "))[0]+" "+t[1]},ed=function(t,e,n){var i=gn(e);return Ge(parseFloat(e)+parseFloat(Zs(t,"x",n+"px",i)))+i},Gb=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,Og(t,e)},Sr="0deg",Va="0px",Mr=") ",Og=function(t,e){var n=e||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,h=n.rotationY,d=n.rotationX,f=n.skewX,u=n.skewY,m=n.scaleX,_=n.scaleY,p=n.transformPerspective,g=n.force3D,v=n.target,w=n.zOrigin,y="",T=g==="auto"&&t&&t!==1||g===!0;if(w&&(d!==Sr||h!==Sr)){var E=parseFloat(h)*Mo,x=Math.sin(E),b=Math.cos(E),P;E=parseFloat(d)*Mo,P=Math.cos(E),o=ed(v,o,x*P*-w),a=ed(v,a,-Math.sin(E)*-w),l=ed(v,l,b*P*-w+w)}p!==Va&&(y+="perspective("+p+Mr),(i||r)&&(y+="translate("+i+"%, "+r+"%) "),(T||o!==Va||a!==Va||l!==Va)&&(y+=l!==Va||T?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Mr),c!==Sr&&(y+="rotate("+c+Mr),h!==Sr&&(y+="rotateY("+h+Mr),d!==Sr&&(y+="rotateX("+d+Mr),(f!==Sr||u!==Sr)&&(y+="skew("+f+", "+u+Mr),(m!==1||_!==1)&&(y+="scale("+m+", "+_+Mr),v.style[Be]=y||"translate(0, 0)"},Hb=function(t,e){var n=e||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,h=n.skewY,d=n.scaleX,f=n.scaleY,u=n.target,m=n.xOrigin,_=n.yOrigin,p=n.xOffset,g=n.yOffset,v=n.forceCSS,w=parseFloat(o),y=parseFloat(a),T,E,x,b,P;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=Mo,c*=Mo,T=Math.cos(l)*d,E=Math.sin(l)*d,x=Math.sin(l-c)*-f,b=Math.cos(l-c)*f,c&&(h*=Mo,P=Math.tan(c-h),P=Math.sqrt(1+P*P),x*=P,b*=P,h&&(P=Math.tan(h),P=Math.sqrt(1+P*P),T*=P,E*=P)),T=Ge(T),E=Ge(E),x=Ge(x),b=Ge(b)):(T=d,b=f,E=x=0),(w&&!~(o+"").indexOf("px")||y&&!~(a+"").indexOf("px"))&&(w=Zs(u,"x",o,"px"),y=Zs(u,"y",a,"px")),(m||_||p||g)&&(w=Ge(w+m-(m*T+_*x)+p),y=Ge(y+_-(m*E+_*b)+g)),(i||r)&&(P=u.getBBox(),w=Ge(w+i/100*P.width),y=Ge(y+r/100*P.height)),P="matrix("+T+","+E+","+x+","+b+","+w+","+y+")",u.setAttribute("transform",P),v&&(u.style[Be]=P)},Wb=function(t,e,n,i,r){var o=360,a=rn(r),l=parseFloat(r)*(a&&~r.indexOf("rad")?br:1),c=l-i,h=i+c+"deg",d,f;return a&&(d=r.split("_")[1],d==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),d==="cw"&&c<0?c=(c+o*vg)%o-~~(c/o)*o:d==="ccw"&&c>0&&(c=(c-o*vg)%o-~~(c/o)*o)),t._pt=f=new On(t._pt,e,n,i,c,Eb),f.e=h,f.u="deg",t._props.push(n),f},Eg=function(t,e){for(var n in e)t[n]=e[n];return t},Xb=function(t,e,n){var i=Eg({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,h,d,f,u,m;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Be]=e,a=Ha(n,1),Ys(n,Be),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Be],o[Be]=e,a=Ha(n,1),o[Be]=c);for(l in xs)c=i[l],h=a[l],c!==h&&r.indexOf(l)<0&&(u=gn(c),m=gn(h),d=u!==m?Zs(n,l,c,m):parseFloat(c),f=parseFloat(h),t._pt=new On(t._pt,a,l,d,f-d,nd),t._pt.u=m||0,t._props.push(l));Eg(a,i)};Un("padding,margin,Width,Radius",function(s,t){var e="Top",n="Right",i="Bottom",r="Left",o=(t<3?[e,n,i,r]:[e+r,e+n,i+n,i+r]).map(function(a){return t<2?s+a:"border"+a+s});bh[t>1?"border"+s:s]=function(a,l,c,h,d){var f,u;if(arguments.length<4)return f=o.map(function(m){return _s(a,m,c)}),u=f.join(" "),u.split(f[0]).length===5?f[0]:u;f=(h+"").split(" "),u={},o.forEach(function(m,_){return u[m]=f[_]=f[_]||f[(_-1)/2|0]}),a.init(l,u,d)}});var hd={name:"css",register:sd,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,r){var o=this._props,a=t.style,l=n.vars.startAt,c,h,d,f,u,m,_,p,g,v,w,y,T,E,x,b,P;od||sd(),this.styles=this.styles||Pg(t),b=this.styles.props,this.tween=n;for(_ in e)if(_!=="autoRound"&&(h=e[_],!(Zn[_]&&Jf(_,e,n,i,t,r)))){if(u=typeof h,m=bh[_],u==="function"&&(h=h.call(n,i,t,r),u=typeof h),u==="string"&&~h.indexOf("random(")&&(h=vo(h)),m)m(this,t,_,h,n)&&(x=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(_)+"").trim(),h+="",ms.lastIndex=0,ms.test(c)||(p=gn(c),g=gn(h),g?p!==g&&(c=Zs(t,_,c,g)+g):p&&(h+=p)),this.add(a,"setProperty",c,h,i,r,0,0,_),o.push(_),b.push(_,0,a[_]);else if(u!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,t,r):l[_],rn(c)&&~c.indexOf("random(")&&(c=vo(c)),gn(c+"")||c==="auto"||(c+=Kn.units[_]||gn(_s(t,_))||""),(c+"").charAt(1)==="="&&(c=_s(t,_))):c=_s(t,_),f=parseFloat(c),v=u==="string"&&h.charAt(1)==="="&&h.substr(0,2),v&&(h=h.substr(2)),d=parseFloat(h),_ in $i&&(_==="autoAlpha"&&(f===1&&_s(t,"visibility")==="hidden"&&d&&(f=0),b.push("visibility",0,a.visibility),qs(this,a,"visibility",f?"inherit":"hidden",d?"inherit":"hidden",!d)),_!=="scale"&&_!=="transform"&&(_=$i[_],~_.indexOf(",")&&(_=_.split(",")[0]))),w=_ in xs,w){if(this.styles.save(_),P=h,u==="string"&&h.substring(0,6)==="var(--"){if(h=ui(t,h.substring(4,h.indexOf(")"))),h.substring(0,5)==="calc("){var C=t.style.perspective;t.style.perspective=h,h=ui(t,"perspective"),C?t.style.perspective=C:Ys(t,"perspective")}d=parseFloat(h)}if(y||(T=t._gsap,T.renderTransform&&!e.parseTransform||Ha(t,e.parseTransform),E=e.smoothOrigin!==!1&&T.smooth,y=this._pt=new On(this._pt,a,Be,0,1,T.renderTransform,T,0,-1),y.dep=1),_==="scale")this._pt=new On(this._pt,T,"scaleY",T.scaleY,(v?vr(T.scaleY,v+d):d)-T.scaleY||0,nd),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){b.push(Qn,0,a[Qn]),h=kb(h),T.svg?rd(t,h,0,E,0,this):(g=parseFloat(h.split(" ")[2])||0,g!==T.zOrigin&&qs(this,T,"zOrigin",T.zOrigin,g),qs(this,a,_,Th(c),Th(h)));continue}else if(_==="svgOrigin"){rd(t,h,1,E,0,this);continue}else if(_ in Ng){Wb(this,T,_,f,v?vr(f,v+h):h);continue}else if(_==="smoothOrigin"){qs(this,T,"smooth",T.smooth,h);continue}else if(_==="force3D"){T[_]=h;continue}else if(_==="transform"){Xb(this,h,t);continue}}else _ in a||(_=bo(_)||_);if(w||(d||d===0)&&(f||f===0)&&!wb.test(h)&&_ in a)p=(c+"").substr((f+"").length),d||(d=0),g=gn(h)||(_ in Kn.units?Kn.units[_]:p),p!==g&&(f=Zs(t,_,c,g)),this._pt=new On(this._pt,w?T:a,_,f,(v?vr(f,v+d):d)-f,!w&&(g==="px"||_==="zIndex")&&e.autoRound!==!1?Rb:nd),this._pt.u=g||0,w&&P!==h?(this._pt.b=c,this._pt.e=P,this._pt.r=Cb):p!==g&&g!=="%"&&(this._pt.b=c,this._pt.r=Ab);else if(_ in a)zb.call(this,t,_,c,v?v+h:h);else if(_ in t)this.add(t,_,c||t[_],v?v+h:h,i,r);else if(_!=="parseTransform"){xh(_,h);continue}w||(_ in a?b.push(_,0,a[_]):typeof t[_]=="function"?b.push(_,2,t[_]()):b.push(_,1,c||t[_])),o.push(_)}}x&&td(this)},render:function(t,e){if(e.tween._time||!ad())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:_s,aliases:$i,getSetter:function(t,e,n){var i=$i[e];return i&&i.indexOf(",")<0&&(e=i),e in xs&&e!==Qn&&(t._gsap.x||_s(t,"x"))?n&&xg===n?e==="scale"?Db:Lb:(xg=n||{})&&(e==="scale"?Nb:Ub):t.style&&!_h(t.style[e])?Pb:~e.indexOf("-")?Ib:Mh(t,e)},core:{_removeProperty:Ys,_getMatrix:cd}};An.utils.checkPrefix=bo;An.core.getStyleSaver=Pg;(function(s,t,e,n){var i=Un(s+","+t+","+e,function(r){xs[r]=1});Un(t,function(r){Kn.units[r]="deg",Ng[r]=1}),$i[i[13]]=s+","+t,Un(n,function(r){var o=r.split(":");$i[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Un("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){Kn.units[s]="px"});An.registerPlugin(hd);var on=An.registerPlugin(hd)||An,gA=on.core.Tween;function Fg(s,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(s,n.key,n)}}function qb(s,t,e){return t&&Fg(s.prototype,t),e&&Fg(s,e),s}var _n,Ah,Yb,jn,Js,$s,wo,zg,wr,Eo,kg,vs,Ui,Vg,Gg=function(){return _n||typeof window!="undefined"&&(_n=window.gsap)&&_n.registerPlugin&&_n},Hg=1,To=[],Qt=[],Oi=[],Xa=Date.now,ud=function(t,e){return e},Zb=function(){var t=Eo.core,e=t.bridge||{},n=t._scrollers,i=t._proxies;n.push.apply(n,Qt),i.push.apply(i,Oi),Qt=n,Oi=i,ud=function(o,a){return e[o](a)}},Ss=function(t,e){return~Oi.indexOf(t)&&Oi[Oi.indexOf(t)+1][e]},qa=function(t){return!!~kg.indexOf(t)},Bn=function(t,e,n,i,r){return t.addEventListener(e,n,{passive:i!==!1,capture:!!r})},Fn=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},wh="scrollLeft",Eh="scrollTop",fd=function(){return vs&&vs.isPressed||Qt.cache++},Ch=function(t,e){var n=function i(r){if(r||r===0){Hg&&jn.history.scrollRestoration!=="manual"&&(jn.history.scrollRestoration="manual");var o=vs&&vs.isPressed;r=i.v=Math.round(r)||(vs&&vs.iOS?1:0),t(r),i.cacheID=Qt.cache,o&&ud("ss",r)}else(e||Qt.cache!==i.cacheID||ud("ref"))&&(i.cacheID=Qt.cache,i.v=t());return i.v+i.offset};return n.offset=0,t&&n},Cn={s:wh,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Ch(function(s){return arguments.length?jn.scrollTo(s,$e.sc()):jn.pageXOffset||Js[wh]||$s[wh]||wo[wh]||0})},$e={s:Eh,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Cn,sc:Ch(function(s){return arguments.length?jn.scrollTo(Cn.sc(),s):jn.pageYOffset||Js[Eh]||$s[Eh]||wo[Eh]||0})},zn=function(t,e){return(e&&e._ctx&&e._ctx.selector||_n.utils.toArray)(t)[0]||(typeof t=="string"&&_n.config().nullTargetWarn!==!1?console.warn("Element not found:",t):null)},Jb=function(t,e){for(var n=e.length;n--;)if(e[n]===t||e[n].contains(t))return!0;return!1},ys=function(t,e){var n=e.s,i=e.sc;qa(t)&&(t=Js.scrollingElement||$s);var r=Qt.indexOf(t),o=i===$e.sc?1:2;!~r&&(r=Qt.push(t)-1),Qt[r+o]||Bn(t,"scroll",fd);var a=Qt[r+o],l=a||(Qt[r+o]=Ch(Ss(t,n),!0)||(qa(t)?i:Ch(function(c){return arguments.length?t[n]=c:t[n]})));return l.target=t,a||(l.smooth=_n.getProperty(t,"scrollBehavior")==="smooth"),l},Rh=function(t,e,n){var i=t,r=t,o=Xa(),a=o,l=e||50,c=Math.max(500,l*3),h=function(m,_){var p=Xa();_||p-o>l?(r=i,i=m,a=o,o=p):n?i+=m:i=r+(m-r)/(p-a)*(o-a)},d=function(){r=i=n?0:i,a=o=0},f=function(m){var _=a,p=r,g=Xa();return(m||m===0)&&m!==i&&h(m),o===a||g-a>c?0:(i+(n?p:-p))/((n?g:o)-_)*1e3};return{update:h,reset:d,getVelocity:f}},Wa=function(t,e){return e&&!t._gsapAllow&&t.cancelable!==!1&&t.preventDefault(),t.changedTouches?t.changedTouches[0]:t},Bg=function(t){var e=Math.max.apply(Math,t),n=Math.min.apply(Math,t);return Math.abs(e)>=Math.abs(n)?e:n},Wg=function(){Eo=_n.core.globals().ScrollTrigger,Eo&&Eo.core&&Zb()},Xg=function(t){return _n=t||Gg(),!Ah&&_n&&typeof document!="undefined"&&document.body&&(jn=window,Js=document,$s=Js.documentElement,wo=Js.body,kg=[jn,Js,$s,wo],Yb=_n.utils.clamp,Vg=_n.core.context||function(){},wr="onpointerenter"in wo?"pointer":"mouse",zg=He.isTouch=jn.matchMedia&&jn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in jn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Ui=He.eventTypes=("ontouchstart"in $s?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in $s?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return Hg=0},500),Ah=1),Eo||Wg(),Ah};Cn.op=$e;Qt.cache=0;var He=(function(){function s(e){this.init(e)}var t=s.prototype;return t.init=function(n){Ah||Xg(_n)||console.warn("Please gsap.registerPlugin(Observer)"),Eo||Wg();var i=n.tolerance,r=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,h=n.preventDefault,d=n.onStop,f=n.onStopDelay,u=n.ignore,m=n.wheelSpeed,_=n.event,p=n.onDragStart,g=n.onDragEnd,v=n.onDrag,w=n.onPress,y=n.onRelease,T=n.onRight,E=n.onLeft,x=n.onUp,b=n.onDown,P=n.onChangeX,C=n.onChangeY,N=n.onChange,D=n.onToggleX,H=n.onToggleY,I=n.onHover,B=n.onHoverEnd,X=n.onMove,F=n.ignoreCheck,Q=n.isNormalizer,W=n.onGestureStart,R=n.onGestureEnd,tt=n.onWheel,yt=n.onEnable,Ut=n.onDisable,J=n.onClick,lt=n.scrollSpeed,_t=n.capture,Mt=n.allowClicks,ut=n.lockAxis,Nt=n.onLockAxis;this.target=a=zn(a)||$s,this.vars=n,u&&(u=_n.utils.toArray(u)),i=i||1e-9,r=r||0,m=m||1,lt=lt||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(jn.getComputedStyle(wo).lineHeight)||22);var de,Rt,bt,Ct,Tt,ne,Jt,Y=this,Xt=0,ye=0,zt=n.passive||!h&&n.passive!==!1,$t=ys(a,Cn),Re=ys(a,$e),Ne=$t(),O=Re(),pe=~o.indexOf("touch")&&!~o.indexOf("pointer")&&Ui[0]==="pointerdown",he=qa(a),Ht=a.ownerDocument||Js,ft=[0,0,0],fe=[0,0,0],Ot=0,kt=function(){return Ot=Xa()},A=function(mt,st){return(Y.event=mt)&&u&&Jb(mt.target,u)||st&&pe&&mt.pointerType!=="touch"||F&&F(mt,st)},S=function(){Y._vx.reset(),Y._vy.reset(),Rt.pause(),d&&d(Y)},k=function(){var mt=Y.deltaX=Bg(ft),st=Y.deltaY=Bg(fe),et=Math.abs(mt)>=i,xt=Math.abs(st)>=i;N&&(et||xt)&&N(Y,mt,st,ft,fe),et&&(T&&Y.deltaX>0&&T(Y),E&&Y.deltaX<0&&E(Y),P&&P(Y),D&&Y.deltaX<0!=Xt<0&&D(Y),Xt=Y.deltaX,ft[0]=ft[1]=ft[2]=0),xt&&(b&&Y.deltaY>0&&b(Y),x&&Y.deltaY<0&&x(Y),C&&C(Y),H&&Y.deltaY<0!=ye<0&&H(Y),ye=Y.deltaY,fe[0]=fe[1]=fe[2]=0),(Ct||bt)&&(X&&X(Y),bt&&(p&&bt===1&&p(Y),v&&v(Y),bt=0),Ct=!1),ne&&!(ne=!1)&&Nt&&Nt(Y),Tt&&(tt(Y),Tt=!1),de=0},rt=function(mt,st,et){ft[et]+=mt,fe[et]+=st,Y._vx.update(mt),Y._vy.update(st),c?de||(de=requestAnimationFrame(k)):k()},it=function(mt,st){ut&&!Jt&&(Y.axis=Jt=Math.abs(mt)>Math.abs(st)?"x":"y",ne=!0),Jt!=="y"&&(ft[2]+=mt,Y._vx.update(mt,!0)),Jt!=="x"&&(fe[2]+=st,Y._vy.update(st,!0)),c?de||(de=requestAnimationFrame(k)):k()},ht=function(mt){if(!A(mt,1)){mt=Wa(mt,h);var st=mt.clientX,et=mt.clientY,xt=st-Y.x,nt=et-Y.y,Et=Y.isDragging;Y.x=st,Y.y=et,(Et||(xt||nt)&&(Math.abs(Y.startX-st)>=r||Math.abs(Y.startY-et)>=r))&&(bt||(bt=Et?2:1),Et||(Y.isDragging=!0),it(xt,nt))}},gt=Y.onPress=function(ot){A(ot,1)||ot&&ot.button||(Y.axis=Jt=null,Rt.pause(),Y.isPressed=!0,ot=Wa(ot),Xt=ye=0,Y.startX=Y.x=ot.clientX,Y.startY=Y.y=ot.clientY,Y._vx.reset(),Y._vy.reset(),Bn(Q?a:Ht,Ui[1],ht,zt,!0),Y.deltaX=Y.deltaY=0,w&&w(Y))},G=Y.onRelease=function(ot){if(!A(ot,1)){Fn(Q?a:Ht,Ui[1],ht,!0);var mt=!isNaN(Y.y-Y.startY),st=Y.isDragging,et=st&&(Math.abs(Y.x-Y.startX)>3||Math.abs(Y.y-Y.startY)>3),xt=Wa(ot);!et&&mt&&(Y._vx.reset(),Y._vy.reset(),h&&Mt&&_n.delayedCall(.08,function(){if(Xa()-Ot>300&&!ot.defaultPrevented){if(ot.target.click)ot.target.click();else if(Ht.createEvent){var nt=Ht.createEvent("MouseEvents");nt.initMouseEvent("click",!0,!0,jn,1,xt.screenX,xt.screenY,xt.clientX,xt.clientY,!1,!1,!1,!1,0,null),ot.target.dispatchEvent(nt)}}})),Y.isDragging=Y.isGesturing=Y.isPressed=!1,d&&st&&!Q&&Rt.restart(!0),bt&&k(),g&&st&&g(Y),y&&y(Y,et)}},j=function(mt){return mt.touches&&mt.touches.length>1&&(Y.isGesturing=!0)&&W(mt,Y.isDragging)},ct=function(){return(Y.isGesturing=!1)||R(Y)},L=function(mt){if(!A(mt)){var st=$t(),et=Re();rt((st-Ne)*lt,(et-O)*lt,1),Ne=st,O=et,d&&Rt.restart(!0)}},K=function(mt){if(!A(mt)){mt=Wa(mt,h),tt&&(Tt=!0);var st=(mt.deltaMode===1?l:mt.deltaMode===2?jn.innerHeight:1)*m;rt(mt.deltaX*st,mt.deltaY*st,0),d&&!Q&&Rt.restart(!0)}},$=function(mt){if(!A(mt)){var st=mt.clientX,et=mt.clientY,xt=st-Y.x,nt=et-Y.y;Y.x=st,Y.y=et,Ct=!0,d&&Rt.restart(!0),(xt||nt)&&it(xt,nt)}},dt=function(mt){Y.event=mt,I(Y)},at=function(mt){Y.event=mt,B(Y)},pt=function(mt){return A(mt)||Wa(mt,h)&&J(Y)};Rt=Y._dc=_n.delayedCall(f||.25,S).pause(),Y.deltaX=Y.deltaY=0,Y._vx=Rh(0,50,!0),Y._vy=Rh(0,50,!0),Y.scrollX=$t,Y.scrollY=Re,Y.isDragging=Y.isGesturing=Y.isPressed=!1,Vg(this),Y.enable=function(ot){return Y.isEnabled||(Bn(he?Ht:a,"scroll",fd),o.indexOf("scroll")>=0&&Bn(he?Ht:a,"scroll",L,zt,_t),o.indexOf("wheel")>=0&&Bn(a,"wheel",K,zt,_t),(o.indexOf("touch")>=0&&zg||o.indexOf("pointer")>=0)&&(Bn(a,Ui[0],gt,zt,_t),Bn(Ht,Ui[2],G),Bn(Ht,Ui[3],G),Mt&&Bn(a,"click",kt,!0,!0),J&&Bn(a,"click",pt),W&&Bn(Ht,"gesturestart",j),R&&Bn(Ht,"gestureend",ct),I&&Bn(a,wr+"enter",dt),B&&Bn(a,wr+"leave",at),X&&Bn(a,wr+"move",$)),Y.isEnabled=!0,Y.isDragging=Y.isGesturing=Y.isPressed=Ct=bt=!1,Y._vx.reset(),Y._vy.reset(),Ne=$t(),O=Re(),ot&&ot.type&&gt(ot),yt&&yt(Y)),Y},Y.disable=function(){Y.isEnabled&&(To.filter(function(ot){return ot!==Y&&qa(ot.target)}).length||Fn(he?Ht:a,"scroll",fd),Y.isPressed&&(Y._vx.reset(),Y._vy.reset(),Fn(Q?a:Ht,Ui[1],ht,!0)),Fn(he?Ht:a,"scroll",L,_t),Fn(a,"wheel",K,_t),Fn(a,Ui[0],gt,_t),Fn(Ht,Ui[2],G),Fn(Ht,Ui[3],G),Fn(a,"click",kt,!0),Fn(a,"click",pt),Fn(Ht,"gesturestart",j),Fn(Ht,"gestureend",ct),Fn(a,wr+"enter",dt),Fn(a,wr+"leave",at),Fn(a,wr+"move",$),Y.isEnabled=Y.isPressed=Y.isDragging=!1,Ut&&Ut(Y))},Y.kill=Y.revert=function(){Y.disable();var ot=To.indexOf(Y);ot>=0&&To.splice(ot,1),vs===Y&&(vs=0)},To.push(Y),Q&&qa(a)&&(vs=Y),Y.enable(_)},qb(s,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),s})();He.version="3.15.1";He.create=function(s){return new He(s)};He.register=Xg;He.getAll=function(){return To.slice()};He.getById=function(s){return To.filter(function(t){return t.vars.id===s})[0]};Gg()&&_n.registerPlugin(He);var Pt,Po,te,ve,pi,xe,Ed,Xh,rl,ja,Za,Ph,Rn,Zh,vd,Vn,qg,Yg,Io,c_,dd,h_,kn,yd,u_,f_,Ks,Sd,Ad,Lo,Cd,Qs,Md,pd,Ih=1,Pn=Date.now,md=Pn(),Ti=0,Ja=0,Zg=function(t,e,n){var i=di(t)&&(t.substr(0,6)==="clamp("||t.indexOf("max")>-1);return n["_"+e+"Clamp"]=i,i?t.substr(6,t.length-7):t},Jg=function(t,e){return e&&(!di(t)||t.substr(0,6)!=="clamp(")?"clamp("+t+")":t},$b=function s(){return Ja&&requestAnimationFrame(s)},$g=function(){return Zh=1},Kg=function(){return Zh=0},Ki=function(t){return t},$a=function(t){return Math.round(t*1e5)/1e5||0},d_=function(){return typeof window!="undefined"},p_=function(){return Pt||d_()&&(Pt=window.gsap)&&Pt.registerPlugin&&Pt},Ir=function(t){return!!~Ed.indexOf(t)},m_=function(t){return(t==="Height"?Cd:te["inner"+t])||pi["client"+t]||xe["client"+t]},g_=function(t){return Ss(t,"getBoundingClientRect")||(Ir(t)?function(){return Wh.width=te.innerWidth,Wh.height=Cd,Wh}:function(){return Ms(t)})},Kb=function(t,e,n){var i=n.d,r=n.d2,o=n.a;return(o=Ss(t,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(e?m_(r):t["client"+r])||0}},Qb=function(t,e){return!e||~Oi.indexOf(t)?g_(t):function(){return Wh}},Qi=function(t,e){var n=e.s,i=e.d2,r=e.d,o=e.a;return Math.max(0,(n="scroll"+i)&&(o=Ss(t,n))?o()-g_(t)()[r]:Ir(t)?(pi[n]||xe[n])-m_(i):t[n]-t["offset"+i])},Lh=function(t,e){for(var n=0;n<Io.length;n+=3)(!e||~e.indexOf(Io[n+1]))&&t(Io[n],Io[n+1],Io[n+2])},di=function(t){return typeof t=="string"},In=function(t){return typeof t=="function"},Ka=function(t){return typeof t=="number"},Er=function(t){return typeof t=="object"},Ya=function(t,e,n){return t&&t.progress(e?0:1)&&n&&t.pause()},Ao=function(t,e,n){if(t.enabled){var i=t._ctx?t._ctx.add(function(){return e(t,n)}):e(t,n);i&&i.totalTime&&(t.callbackAnimation=i)}},Co=Math.abs,__="left",x_="top",Rd="right",Pd="bottom",Cr="width",Rr="height",tl="Right",el="Left",nl="Top",il="Bottom",Ke="padding",Mi="margin",No="Width",Id="Height",an="px",bi=function(t){return te.getComputedStyle(t.nodeType===Node.DOCUMENT_NODE?t.scrollingElement:t)},jb=function(t){var e=bi(t).position;t.style.position=e==="absolute"||e==="fixed"?e:"relative"},Qg=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},Ms=function(t,e){var n=e&&bi(t)[vd]!=="matrix(1, 0, 0, 1, 0, 0)"&&Pt.to(t,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=t.getBoundingClientRect?t.getBoundingClientRect():t.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),i},qh=function(t,e){var n=e.d2;return t["offset"+n]||t["client"+n]||0},v_=function(t){var e=[],n=t.labels,i=t.duration(),r;for(r in n)e.push(n[r]/i);return e},tT=function(t){return function(e){return Pt.utils.snap(v_(t),e)}},Ld=function(t){var e=Pt.utils.snap(t),n=Array.isArray(t)&&t.slice(0).sort(function(i,r){return i-r});return n?function(i,r,o){o===void 0&&(o=.001);var a;if(!r)return e(i);if(r>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,r,o){o===void 0&&(o=.001);var a=e(i);return!r||Math.abs(a-i)<o||a-i<0==r<0?a:e(r<0?i-t:i+t)}},eT=function(t){return function(e,n){return Ld(v_(t))(e,n.direction)}},Dh=function(t,e,n,i){return n.split(",").forEach(function(r){return t(e,r,i)})},fn=function(t,e,n,i,r){return t.addEventListener(e,n,{passive:!i,capture:!!r})},un=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},Nh=function(t,e,n){n=n&&n.wheelHandler,n&&(t(e,"wheel",n),t(e,"touchmove",n))},jg={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Uh={toggleActions:"play",anticipatePin:0},Yh={top:0,left:0,center:.5,bottom:1,right:1},kh=function(t,e){if(di(t)){var n=t.indexOf("="),i=~n?+(t.charAt(n-1)+1)*parseFloat(t.substr(n+1)):0;~n&&(t.indexOf("%")>n&&(i*=e/100),t=t.substr(0,n-1)),t=i+(t in Yh?Yh[t]*e:~t.indexOf("%")?parseFloat(t)*e/100:parseFloat(t)||0)}return t},Oh=function(t,e,n,i,r,o,a,l){var c=r.startColor,h=r.endColor,d=r.fontSize,f=r.indent,u=r.fontWeight,m=ve.createElement("div"),_=Ir(n)||Ss(n,"pinType")==="fixed",p=t.indexOf("scroller")!==-1,g=_?xe:n.tagName==="IFRAME"?n.contentDocument.body:n,v=t.indexOf("start")!==-1,w=v?c:h,y="border-color:"+w+";font-size:"+d+";color:"+w+";font-weight:"+u+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return y+="position:"+((p||l)&&_?"fixed;":"absolute;"),(p||l||!_)&&(y+=(i===$e?Rd:Pd)+":"+(o+parseFloat(f))+"px;"),a&&(y+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),m._isStart=v,m.setAttribute("class","gsap-marker-"+t+(e?" marker-"+e:"")),m.style.cssText=y,m.innerText=e||e===0?t+"-"+e:t,g.children[0]?g.insertBefore(m,g.children[0]):g.appendChild(m),m._offset=m["offset"+i.op.d2],Vh(m,0,i,v),m},Vh=function(t,e,n,i){var r={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];t._isFlipped=i,r[n.a+"Percent"]=i?-100:0,r[n.a]=i?"1px":0,r["border"+o+No]=1,r["border"+a+No]=0,r[n.p]=e+"px",Pt.set(t,r)},jt=[],bd={},ol,t_=function(){return Pn()-Ti>34&&(ol||(ol=requestAnimationFrame(bs)))},Ro=function(){(!kn||!kn.isPressed||kn.startX>xe.clientWidth)&&(Qt.cache++,kn?ol||(ol=requestAnimationFrame(bs)):bs(),Ti||Dr("scrollStart"),Ti=Pn())},gd=function(){f_=te.innerWidth,u_=te.innerHeight},Qa=function(t){Qt.cache++,(t===!0||!Rn&&!h_&&!ve.fullscreenElement&&!ve.webkitFullscreenElement&&(!yd||f_!==te.innerWidth||Math.abs(te.innerHeight-u_)>te.innerHeight*.25))&&Xh.restart(!0)},Lr={},nT=[],y_=function s(){return un(Zt,"scrollEnd",s)||Ar(!0)},Dr=function(t){return Lr[t]&&Lr[t].map(function(e){return e()})||nT},fi=[],S_=function(t){for(var e=0;e<fi.length;e+=5)(!t||fi[e+4]&&fi[e+4].query===t)&&(fi[e].style.cssText=fi[e+1],fi[e].getBBox&&fi[e].setAttribute("transform",fi[e+2]||""),fi[e+3].uncache=1)},M_=function(){Qt.cache++,Qt.forEach(function(t){return In(t)&&(t.rec=t())})},Dd=function(t,e){var n;for(Vn=0;Vn<jt.length;Vn++)n=jt[Vn],n&&(!e||n._ctx===e)&&(t?n.kill(1):n.revert(!0,!0));Qs=!0,e&&S_(e),e||Dr("revert")},b_=function(t,e){Qt.cache++,(e||!Gn)&&Qt.forEach(function(n){return In(n)&&n.cacheID++&&(n.rec=0)}),di(t)&&(Ad=t,te.history.scrollRestoration!==t&&(te.history.scrollRestoration=t))},Gn,Pr=0,e_,iT=function(){if(e_!==Pr){var t=e_=Pr;requestAnimationFrame(function(){return t===Pr&&Ar(!0)})}},T_=function(){xe.appendChild(Lo),Cd=!kn&&Lo.offsetHeight||te.innerHeight,xe.removeChild(Lo)},n_=function(t){return rl(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(e){return e.style.display=t?"none":"block"})},Ar=function(t,e){if(pi=ve.documentElement,xe=ve.body,Ed=[te,ve,pi,xe],Ti&&!t&&!Qs){fn(Zt,"scrollEnd",y_);return}T_(),Gn=Zt.isRefreshing=!0,Qs||M_();var n=Dr("refreshInit");c_&&Zt.sort(),e||Dd(),Qt.forEach(function(i){In(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),jt.slice(0).forEach(function(i){return i.refresh()}),Qs=!1,jt.forEach(function(i){if(i._subPinOffset&&i.pin){var r=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[r];i.revert(!0,1),i.adjustPinSpacing(i.pin[r]-o),i.refresh()}}),Md=1,n_(!0),jt.forEach(function(i){var r=Qi(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>r,a=i._startClamp&&i.start>=r;(o||a)&&i.setPositions(a?r-1:i.start,o?Math.max(a?r:i.start+1,r):i.end,!0)}),n_(!1),Md=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),Qt.forEach(function(i){In(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),b_(Ad,1),Xh.pause(),Pr++,Gn=2,bs(2),jt.forEach(function(i){return In(i.vars.onRefresh)&&i.vars.onRefresh(i)}),Gn=Zt.isRefreshing=!1,Dr("refresh")},Td=0,Gh=1,sl,bs=function(t){if(t===2||!Gn&&!Qs){Zt.isUpdating=!0,sl&&sl.update(0);var e=jt.length,n=Pn(),i=n-md>=50,r=e&&jt[0].scroll();if(Gh=Td>r?-1:1,Gn||(Td=r),i&&(Ti&&!Zh&&n-Ti>200&&(Ti=0,Dr("scrollEnd")),Za=md,md=n),Gh<0){for(Vn=e;Vn-- >0;)jt[Vn]&&jt[Vn].update(0,i);Gh=1}else for(Vn=0;Vn<e;Vn++)jt[Vn]&&jt[Vn].update(0,i);Zt.isUpdating=!1}ol=0},wd=[__,x_,Pd,Rd,Mi+il,Mi+tl,Mi+nl,Mi+el,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Hh=wd.concat([Cr,Rr,"boxSizing","max"+No,"max"+Id,"position",Mi,Ke,Ke+nl,Ke+tl,Ke+il,Ke+el]),sT=function(t,e,n){Do(n);var i=t._gsap;if(i.spacerIsNative)Do(i.spacerState);else if(t._gsap.swappedIn){var r=e.parentNode;r&&(r.insertBefore(t,e),r.removeChild(e))}t._gsap.swappedIn=!1},_d=function(t,e,n,i){if(!t._gsap.swappedIn){for(var r=wd.length,o=e.style,a=t.style,l;r--;)l=wd[r],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[Pd]=a[Rd]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[Cr]=qh(t,Cn)+an,o[Rr]=qh(t,$e)+an,o[Ke]=a[Mi]=a[x_]=a[__]="0",Do(i),a[Cr]=a["max"+No]=n[Cr],a[Rr]=a["max"+Id]=n[Rr],a[Ke]=n[Ke],t.parentNode!==e&&(t.parentNode.insertBefore(e,t),e.appendChild(t)),t._gsap.swappedIn=!0}},rT=/([A-Z])/g,Do=function(t){if(t){var e=t.t.style,n=t.length,i=0,r,o;for((t.t._gsap||Pt.core.getCache(t.t)).uncache=1;i<n;i+=2)o=t[i+1],r=t[i],o?e[r]=o:e[r]&&e.removeProperty(r.replace(rT,"-$1").toLowerCase())}},Fh=function(t){for(var e=Hh.length,n=t.style,i=[],r=0;r<e;r++)i.push(Hh[r],n[Hh[r]]);return i.t=t,i},oT=function(t,e,n){for(var i=[],r=t.length,o=n?8:0,a;o<r;o+=2)a=t[o],i.push(a,a in e?e[a]:t[o+1]);return i.t=t.t,i},Wh={left:0,top:0},i_=function(t,e,n,i,r,o,a,l,c,h,d,f,u,m){In(t)&&(t=t(l)),di(t)&&t.substr(0,3)==="max"&&(t=f+(t.charAt(4)==="="?kh("0"+t.substr(3),n):0));var _=u?u.time():0,p,g,v;if(u&&u.seek(0),isNaN(t)||(t=+t),Ka(t))u&&(t=Pt.utils.mapRange(u.scrollTrigger.start,u.scrollTrigger.end,0,f,t)),a&&Vh(a,n,i,!0);else{In(e)&&(e=e(l));var w=(t||"0").split(" "),y,T,E,x;v=zn(e,l)||xe,y=Ms(v)||{},(!y||!y.left&&!y.top)&&bi(v).display==="none"&&(x=v.style.display,v.style.display="block",y=Ms(v),x?v.style.display=x:v.style.removeProperty("display")),T=kh(w[0],y[i.d]),E=kh(w[1]||"0",n),t=y[i.p]-c[i.p]-h+T+r-E,a&&Vh(a,E,i,n-E<20||a._isStart&&E>20),n-=n-E}if(m&&(l[m]=t||-.001,t<0&&(t=0)),o){var b=t+n,P=o._isStart;p="scroll"+i.d2,Vh(o,b,i,P&&b>20||!P&&(d?Math.max(xe[p],pi[p]):o.parentNode[p])<=b+1),d&&(c=Ms(a),d&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+an))}return u&&v&&(p=Ms(v),u.seek(f),g=Ms(v),u._caScrollDist=p[i.p]-g[i.p],t=t/u._caScrollDist*f),u&&u.seek(_),u?t:Math.round(t)},aT=/(webkit|moz|length|cssText|inset)/i,s_=function(t,e,n,i){if(t.parentNode!==e){var r=t.style,o,a;if(e===xe){t._stOrig=r.cssText,a=bi(t);for(o in a)!+o&&!aT.test(o)&&a[o]&&typeof r[o]=="string"&&o!=="0"&&(r[o]=a[o]);r.top=n,r.left=i}else r.cssText=t._stOrig;Pt.core.getCache(t).uncache=1,e.appendChild(t)}},w_=function(t,e,n){var i=e,r=i;return function(o){var a=Math.round(t());return a!==i&&a!==r&&Math.abs(a-i)>3&&Math.abs(a-r)>3&&(o=a,n&&n()),r=i,i=Math.round(o),i}},Bh=function(t,e,n){var i={};i[e.p]="+="+n,Pt.set(t,i)},r_=function(t,e){var n=ys(t,e),i="_scroll"+e.p2,r=function o(a,l,c,h,d){var f=o.tween,u=l.onComplete,m={};c=c||n();var _=w_(n,c,function(){f.kill(),o.tween=0});return d=h&&d||0,h=h||a-c,f&&f.kill(),l[i]=a,l.inherit=!1,l.modifiers=m,m[i]=function(){return _(c+h*f.ratio+d*f.ratio*f.ratio)},l.onUpdate=function(){Qt.cache++,o.tween&&bs()},l.onComplete=function(){o.tween=0,u&&u.call(f)},f=o.tween=Pt.to(t,l),f};return t[i]=n,n.wheelHandler=function(){return r.tween&&r.tween.kill()&&(r.tween=0)},fn(t,"wheel",n.wheelHandler),Zt.isTouch&&fn(t,"touchmove",n.wheelHandler),r},Zt=(function(){function s(e,n){Po||s.register(Pt)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Sd(this),this.init(e,n)}var t=s.prototype;return t.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Ja){this.update=this.refresh=this.kill=Ki;return}n=Qg(di(n)||Ka(n)||n.nodeType?{trigger:n}:n,Uh);var r=n,o=r.onUpdate,a=r.toggleClass,l=r.id,c=r.onToggle,h=r.onRefresh,d=r.scrub,f=r.trigger,u=r.pin,m=r.pinSpacing,_=r.invalidateOnRefresh,p=r.anticipatePin,g=r.onScrubComplete,v=r.onSnapComplete,w=r.once,y=r.snap,T=r.pinReparent,E=r.pinSpacer,x=r.containerAnimation,b=r.fastScrollEnd,P=r.preventOverlaps,C=n.horizontal||n.containerAnimation&&n.horizontal!==!1?Cn:$e,N=!d&&d!==0,D=zn(n.scroller||te),H=Pt.core.getCache(D),I=Ir(D),B=("pinType"in n?n.pinType:Ss(D,"pinType")||I&&"fixed")==="fixed",X=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],F=N&&n.toggleActions.split(" "),Q="markers"in n?n.markers:Uh.markers,W=I?0:parseFloat(bi(D)["border"+C.p2+No])||0,R=this,tt=n.onRefreshInit&&function(){return n.onRefreshInit(R)},yt=Kb(D,I,C),Ut=Qb(D,I),J=0,lt=0,_t=0,Mt=ys(D,C),ut,Nt,de,Rt,bt,Ct,Tt,ne,Jt,Y,Xt,ye,zt,$t,Re,Ne,O,pe,he,Ht,ft,fe,Ot,kt,A,S,k,rt,it,ht,gt,G,j,ct,L,K,$,dt,at;if(R._startClamp=R._endClamp=!1,R._dir=C,p*=45,R.scroller=D,R.scroll=x?x.time.bind(x):Mt,Rt=Mt(),Qs&&Mt.rec==null&&(Mt.rec=Rt),R.vars=n,i=i||n.animation,"refreshPriority"in n&&(c_=1,n.refreshPriority===-9999&&(sl=R)),H.tweenScroll=H.tweenScroll||{top:r_(D,$e),left:r_(D,Cn)},R.tweenTo=ut=H.tweenScroll[C.p],R.scrubDuration=function(et){j=Ka(et)&&et,j?G?G.duration(et):G=Pt.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:j,paused:!0,onComplete:function(){return g&&g(R)}}):(G&&G.progress(1).kill(),G=0)},i&&(i.vars.lazy=!1,i._initted&&!R.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),R.animation=i.pause(),i.scrollTrigger=R,R.scrubDuration(d),ht=0,l||(l=i.vars.id)),y&&((!Er(y)||y.push)&&(y={snapTo:y}),"scrollBehavior"in xe.style&&Pt.set(I?[xe,pi]:D,{scrollBehavior:"auto"}),Qt.forEach(function(et){return In(et)&&et.target===(I?ve.scrollingElement||pi:D)&&(et.smooth=!1)}),de=In(y.snapTo)?y.snapTo:y.snapTo==="labels"?tT(i):y.snapTo==="labelsDirectional"?eT(i):y.directional!==!1?function(et,xt){return Ld(y.snapTo)(et,Pn()-lt<500?0:xt.direction)}:Pt.utils.snap(y.snapTo),ct=y.duration||{min:.1,max:2},ct=Er(ct)?ja(ct.min,ct.max):ja(ct,ct),L=Pt.delayedCall(y.delay||j/2||.1,function(){var et=Mt(),xt=Pn()-lt<500,nt=ut.tween;if((xt||Math.abs(R.getVelocity())<10)&&!nt&&!Zh&&J!==et){var Et=(et-Ct)/$t,ie=i&&!N?i.totalProgress():Et,qt=xt?0:(ie-gt)/(Pn()-Za)*1e3||0,Pe=Pt.utils.clamp(-Et,1-Et,Co(qt/2)*qt/.185),Xe=Et+(y.inertia===!1?0:Pe),Ie,be,ge=y,Qe=ge.onStart,Te=ge.onInterrupt,xn=ge.onComplete;if(Ie=de(Xe,R),Ka(Ie)||(Ie=Xe),be=Math.max(0,Math.round(Ct+Ie*$t)),et<=Tt&&et>=Ct&&be!==et){if(nt&&!nt._initted&&nt.data<=Co(be-et))return;y.inertia===!1&&(Pe=Ie-Et),ut(be,{duration:ct(Co(Math.max(Co(Xe-ie),Co(Ie-ie))*.185/qt/.05||0)),ease:y.ease||"power3",data:Co(be-et),onInterrupt:function(){return L.restart(!0)&&Te&&Ao(R,Te)},onComplete:function(){R.update(),J=Mt(),i&&!N&&(G?G.resetTo("totalProgress",Ie,i._tTime/i._tDur):i.progress(Ie)),ht=gt=i&&!N?i.totalProgress():R.progress,v&&v(R),xn&&Ao(R,xn)}},et,Pe*$t,be-et-Pe*$t),Qe&&Ao(R,Qe,ut.tween)}}else R.isActive&&J!==et&&L.restart(!0)}).pause()),l&&(bd[l]=R),f=R.trigger=zn(f||u!==!0&&u),at=f&&f._gsap&&f._gsap.stRevert,at&&(at=at(R)),u=u===!0?f:zn(u),di(a)&&(a={targets:f,className:a}),u&&(m===!1||m===Mi||(m=!m&&u.parentNode&&u.parentNode.style&&bi(u.parentNode).display==="flex"?!1:Ke),R.pin=u,Nt=Pt.core.getCache(u),Nt.spacer?Re=Nt.pinState:(E&&(E=zn(E),E&&!E.nodeType&&(E=E.current||E.nativeElement),Nt.spacerIsNative=!!E,E&&(Nt.spacerState=Fh(E))),Nt.spacer=pe=E||ve.createElement("div"),pe.classList.add("pin-spacer"),l&&pe.classList.add("pin-spacer-"+l),Nt.pinState=Re=Fh(u)),n.force3D!==!1&&Pt.set(u,{force3D:!0}),R.spacer=pe=Nt.spacer,it=bi(u),kt=it[m+C.os2],Ht=Pt.getProperty(u),ft=Pt.quickSetter(u,C.a,an),_d(u,pe,it),O=Fh(u)),Q){ye=Er(Q)?Qg(Q,jg):jg,Y=Oh("scroller-start",l,D,C,ye,0),Xt=Oh("scroller-end",l,D,C,ye,0,Y),he=Y["offset"+C.op.d2];var pt=zn(Ss(D,"content")||D);ne=this.markerStart=Oh("start",l,pt,C,ye,he,0,x),Jt=this.markerEnd=Oh("end",l,pt,C,ye,he,0,x),x&&(dt=Pt.quickSetter([ne,Jt],C.a,an)),!B&&!(Oi.length&&Ss(D,"fixedMarkers")===!0)&&(jb(I?xe:D),Pt.set([Y,Xt],{force3D:!0}),S=Pt.quickSetter(Y,C.a,an),rt=Pt.quickSetter(Xt,C.a,an))}if(x){var ot=x.vars.onUpdate,mt=x.vars.onUpdateParams;x.eventCallback("onUpdate",function(){R.update(0,0,1),ot&&ot.apply(x,mt||[])})}if(R.previous=function(){return jt[jt.indexOf(R)-1]},R.next=function(){return jt[jt.indexOf(R)+1]},R.revert=function(et,xt){if(!xt)return R.kill(!0);var nt=et!==!1||!R.enabled,Et=Rn;nt!==R.isReverted&&(nt&&(K=Math.max(Mt(),R.scroll.rec||0),_t=R.progress,$=i&&i.progress()),ne&&[ne,Jt,Y,Xt].forEach(function(ie){return ie.style.display=nt?"none":"block"}),nt&&(Rn=R,R.update(nt)),u&&(!T||!R.isActive)&&(nt?sT(u,pe,Re):_d(u,pe,bi(u),A)),nt||R.update(nt),Rn=Et,R.isReverted=nt)},R.refresh=function(et,xt,nt,Et){if(!((Rn||!R.enabled)&&!xt)){if(u&&et&&Ti){fn(s,"scrollEnd",y_);return}!Gn&&tt&&tt(R),Rn=R,ut.tween&&!nt&&(ut.tween.kill(),ut.tween=0),G&&G.pause(),_&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(z){return z.vars.immediateRender&&z.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),R.isReverted||R.revert(!0,!0),R._subPinOffset=!1;var ie=yt(),qt=Ut(),Pe=x?x.duration():Qi(D,C),Xe=$t<=.01||!$t,Ie=0,be=Et||0,ge=Er(nt)?nt.end:n.end,Qe=n.endTrigger||f,Te=Er(nt)?nt.start:n.start||(n.start===0||!f?0:u?"0 0":"0 100%"),xn=R.pinnedContainer=n.pinnedContainer&&zn(n.pinnedContainer,R),ti=f&&Math.max(0,jt.indexOf(R))||0,ze=ti,qe,je,ei,Ur,tn,ke,mi,Oo,ll,Ts,M,U,Z;for(Q&&Er(nt)&&(U=Pt.getProperty(Y,C.p),Z=Pt.getProperty(Xt,C.p));ze-- >0;)ke=jt[ze],ke.end||ke.refresh(0,1)||(Rn=R),mi=ke.pin,mi&&(mi===f||mi===u||mi===xn)&&!ke.isReverted&&(Ts||(Ts=[]),Ts.unshift(ke),ke.revert(!0,!0)),ke!==jt[ze]&&(ti--,ze--);for(In(Te)&&(Te=Te(R)),Te=Zg(Te,"start",R),Ct=i_(Te,f,ie,C,Mt(),ne,Y,R,qt,W,B,Pe,x,R._startClamp&&"_startClamp")||(u?-.001:0),In(ge)&&(ge=ge(R)),di(ge)&&!ge.indexOf("+=")&&(~ge.indexOf(" ")?ge=(di(Te)?Te.split(" ")[0]:"")+ge:(Ie=kh(ge.substr(2),ie),ge=di(Te)?Te:(x?Pt.utils.mapRange(0,x.duration(),x.scrollTrigger.start,x.scrollTrigger.end,Ct):Ct)+Ie,Qe=f)),ge=Zg(ge,"end",R),Tt=Math.max(Ct,i_(ge||(Qe?"100% 0":Pe),Qe,ie,C,Mt()+Ie,Jt,Xt,R,qt,W,B,Pe,x,R._endClamp&&"_endClamp"))||-.001,Ie=0,ze=ti;ze--;)ke=jt[ze]||{},mi=ke.pin,mi&&ke.start-ke._pinPush<=Ct&&!x&&ke.end>0&&(qe=ke.end-(R._startClamp?Math.max(0,ke.start):ke.start),(mi===f&&ke.start-ke._pinPush<Ct||mi===xn)&&isNaN(Te)&&(Ie+=qe*(1-ke.progress)),mi===u&&(be+=qe));if(Ct+=Ie,Tt+=Ie,R._startClamp&&(R._startClamp+=Ie),R._endClamp&&!Gn&&(R._endClamp=Tt||-.001,Tt=Math.min(Tt,Qi(D,C))),$t=Tt-Ct||(Ct-=.01)&&.001,Xe&&(_t=Pt.utils.clamp(0,1,Pt.utils.normalize(Ct,Tt,K))),R._pinPush=be,ne&&Ie&&(qe={},qe[C.a]="+="+Ie,xn&&(qe[C.p]="-="+Mt()),Pt.set([ne,Jt],qe)),u&&!(Md&&R.end>=Qi(D,C)))qe=bi(u),Ur=C===$e,ei=Mt(),fe=parseFloat(Ht(C.a))+be,!Pe&&Tt>1&&(M=(I?ve.scrollingElement||pi:D).style,M={style:M,value:M["overflow"+C.a.toUpperCase()]},I&&bi(xe)["overflow"+C.a.toUpperCase()]!=="scroll"&&(M.style["overflow"+C.a.toUpperCase()]="scroll")),_d(u,pe,qe),O=Fh(u),je=Ms(u,!0),Oo=B&&ys(D,Ur?Cn:$e)(),m?(A=[m+C.os2,$t+be+an],A.t=pe,ze=m===Ke?qh(u,C)+$t+be:0,ze&&(A.push(C.d,ze+an),pe.style.flexBasis!=="auto"&&(pe.style.flexBasis=ze+an)),Do(A),xn&&jt.forEach(function(z){z.pin===xn&&z.vars.pinSpacing!==!1&&(z._subPinOffset=!0)}),B&&Mt(K)):(ze=qh(u,C),ze&&pe.style.flexBasis!=="auto"&&(pe.style.flexBasis=ze+an)),B&&(tn={top:je.top+(Ur?ei-Ct:Oo)+an,left:je.left+(Ur?Oo:ei-Ct)+an,boxSizing:"border-box",position:"fixed"},tn[Cr]=tn["max"+No]=Math.ceil(je.width)+an,tn[Rr]=tn["max"+Id]=Math.ceil(je.height)+an,tn[Mi]=tn[Mi+nl]=tn[Mi+tl]=tn[Mi+il]=tn[Mi+el]="0",tn[Ke]=qe[Ke],tn[Ke+nl]=qe[Ke+nl],tn[Ke+tl]=qe[Ke+tl],tn[Ke+il]=qe[Ke+il],tn[Ke+el]=qe[Ke+el],Ne=oT(Re,tn,T),Gn&&Mt(0)),i?(ll=i._initted,dd(1),i.render(i.duration(),!0,!0),Ot=Ht(C.a)-fe+$t+be,k=Math.abs($t-Ot)>1,B&&k&&Ne.splice(Ne.length-2,2),i.render(0,!0,!0),ll||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),dd(0)):Ot=$t,M&&(M.value?M.style["overflow"+C.a.toUpperCase()]=M.value:M.style.removeProperty("overflow-"+C.a));else if(f&&Mt()&&!x)for(je=f.parentNode;je&&je!==xe;)je._pinOffset&&(Ct-=je._pinOffset,Tt-=je._pinOffset),je=je.parentNode;Ts&&Ts.forEach(function(z){return z.revert(!1,!0)}),R.start=Ct,R.end=Tt,Rt=bt=Gn?K:Mt(),!x&&!Gn&&!Qs&&(Rt<K&&Mt(K),R.scroll.rec=0),R.revert(!1,!0),lt=Pn(),L&&(J=-1,L.restart(!0)),Rn=0,i&&N&&(i._initted||$)&&i.progress()!==$&&i.progress($||0,!0).render(i.time(),!0,!0),(Xe||_t!==R.progress||x||_||i&&!i._initted)&&(i&&!N&&(i._initted||_t||i.vars.immediateRender!==!1)&&i.totalProgress(x&&Ct<-.001&&!_t?Pt.utils.normalize(Ct,Tt,0):_t,!0),R.progress=Xe||(Rt-Ct)/$t===_t?0:_t),u&&m&&(pe._pinOffset=Math.round(R.progress*Ot)),G&&G.invalidate(),isNaN(U)||(U-=Pt.getProperty(Y,C.p),Z-=Pt.getProperty(Xt,C.p),Bh(Y,C,U),Bh(ne,C,U-(Et||0)),Bh(Xt,C,Z),Bh(Jt,C,Z-(Et||0))),Xe&&!Gn&&R.update(),h&&!Gn&&!zt&&(zt=!0,h(R),zt=!1)}},R.getVelocity=function(){return(Mt()-bt)/(Pn()-Za)*1e3||0},R.endAnimation=function(){Ya(R.callbackAnimation),i&&(G?G.progress(1):i.paused()?N||Ya(i,R.direction<0,1):Ya(i,i.reversed()))},R.labelToScroll=function(et){return i&&i.labels&&(Ct||R.refresh()||Ct)+i.labels[et]/i.duration()*$t||0},R.getTrailing=function(et){var xt=jt.indexOf(R),nt=R.direction>0?jt.slice(0,xt).reverse():jt.slice(xt+1);return(di(et)?nt.filter(function(Et){return Et.vars.preventOverlaps===et}):nt).filter(function(Et){return R.direction>0?Et.end<=Ct:Et.start>=Tt})},R.update=function(et,xt,nt){if(!(x&&!nt&&!et)){var Et=Gn===!0?K:R.scroll(),ie=et?0:(Et-Ct)/$t,qt=ie<0?0:ie>1?1:ie||0,Pe=R.progress,Xe,Ie,be,ge,Qe,Te,xn,ti;if(xt&&(bt=Rt,Rt=x?Mt():Et,y&&(gt=ht,ht=i&&!N?i.totalProgress():qt)),p&&u&&!Rn&&!Ih&&Ti&&(!qt&&Ct<Et+(Et-bt)/(Pn()-Za)*p?qt=1e-4:qt===1&&Tt>Et+(Et-bt)/(Pn()-Za)*p&&(qt=.9999)),qt!==Pe&&R.enabled){if(Xe=R.isActive=!!qt&&qt<1,Ie=!!Pe&&Pe<1,Te=Xe!==Ie,Qe=Te||!!qt!=!!Pe,R.direction=qt>Pe?1:-1,R.progress=qt,Qe&&!Rn&&(be=qt&&!Pe?0:qt===1?1:Pe===1?2:3,N&&(ge=!Te&&F[be+1]!=="none"&&F[be+1]||F[be],ti=i&&(ge==="complete"||ge==="reset"||ge in i))),P&&(Te||ti)&&(ti||d||!i)&&(In(P)?P(R):R.getTrailing(P).forEach(function(ei){return ei.endAnimation()})),N||(G&&!Rn&&!Ih?(G._dp._time-G._start!==G._time&&G.render(G._dp._time-G._start),G.resetTo?G.resetTo("totalProgress",qt,i._tTime/i._tDur):(G.vars.totalProgress=qt,G.invalidate().restart())):i&&i.totalProgress(qt,!!(Rn&&(lt||et)))),u){if(et&&m&&(pe.style[m+C.os2]=kt),!B)ft($a(fe+Ot*qt));else if(Qe){if(xn=!et&&qt>Pe&&Tt+1>Et&&Et+1>=Qi(D,C),T)if(!et&&(Xe||xn)){var ze=Ms(u,!0),qe=Et-Ct;s_(u,xe,ze.top+(C===$e?qe:0)+an,ze.left+(C===$e?0:qe)+an)}else s_(u,pe);Do(Xe||xn?Ne:O),k&&qt<1&&Xe||ft(fe+(qt===1&&!xn?Ot:0))}}y&&!ut.tween&&!Rn&&!Ih&&L.restart(!0),a&&(Te||w&&qt&&(qt<1||!pd))&&rl(a.targets).forEach(function(ei){return ei.classList[Xe||w?"add":"remove"](a.className)}),o&&!N&&!et&&o(R),Qe&&!Rn?(N&&(ti&&(ge==="complete"?i.pause().totalProgress(1):ge==="reset"?i.restart(!0).pause():ge==="restart"?i.restart(!0):i[ge]()),o&&o(R)),(Te||!pd)&&(c&&Te&&Ao(R,c),X[be]&&Ao(R,X[be]),w&&(qt===1?R.kill(!1,1):X[be]=0),Te||(be=qt===1?1:3,X[be]&&Ao(R,X[be]))),b&&!Xe&&Math.abs(R.getVelocity())>(Ka(b)?b:2500)&&(Ya(R.callbackAnimation),G?G.progress(1):Ya(i,ge==="reverse"?1:!qt,1))):N&&o&&!Rn&&o(R)}if(rt){var je=x?Et/x.duration()*(x._caScrollDist||0):Et;S(je+(Y._isFlipped?1:0)),rt(je)}dt&&dt(-Et/x.duration()*(x._caScrollDist||0))}},R.enable=function(et,xt){R.enabled||(R.enabled=!0,fn(D,"resize",Qa),I||fn(D,"scroll",Ro),tt&&fn(s,"refreshInit",tt),et!==!1&&(R.progress=_t=0,Rt=bt=J=Mt()),xt!==!1&&R.refresh())},R.getTween=function(et){return et&&ut?ut.tween:G},R.setPositions=function(et,xt,nt,Et){if(x){var ie=x.scrollTrigger,qt=x.duration(),Pe=ie.end-ie.start;et=ie.start+Pe*et/qt,xt=ie.start+Pe*xt/qt}R.refresh(!1,!1,{start:Jg(et,nt&&!!R._startClamp),end:Jg(xt,nt&&!!R._endClamp)},Et),R.update()},R.adjustPinSpacing=function(et){if(A&&et){var xt=A.indexOf(C.d)+1;A[xt]=parseFloat(A[xt])+et+an,A[1]=parseFloat(A[1])+et+an,Do(A)}},R.disable=function(et,xt){if(et!==!1&&R.revert(!0,!0),R.enabled&&(R.enabled=R.isActive=!1,xt||G&&G.pause(),K=0,Nt&&(Nt.uncache=1),tt&&un(s,"refreshInit",tt),L&&(L.pause(),ut.tween&&ut.tween.kill()&&(ut.tween=0)),!I)){for(var nt=jt.length;nt--;)if(jt[nt].scroller===D&&jt[nt]!==R)return;un(D,"resize",Qa),I||un(D,"scroll",Ro)}},R.kill=function(et,xt){R.disable(et,xt),G&&!xt&&G.kill(),l&&delete bd[l];var nt=jt.indexOf(R);nt>=0&&jt.splice(nt,1),nt===Vn&&Gh>0&&Vn--,nt=0,jt.forEach(function(Et){return Et.scroller===R.scroller&&(nt=1)}),nt||Gn||Qs||(R.scroll.rec=0),i&&(i.scrollTrigger=null,et&&i.revert({kill:!1}),xt||i.kill()),ne&&[ne,Jt,Y,Xt].forEach(function(Et){return Et.parentNode&&Et.parentNode.removeChild(Et)}),sl===R&&(sl=0),u&&(Nt&&(Nt.uncache=1),nt=0,jt.forEach(function(Et){return Et.pin===u&&nt++}),nt||(Nt.spacer=0)),n.onKill&&n.onKill(R)},jt.push(R),R.enable(!1,!1),at&&at(R),i&&i.add&&!$t){var st=R.update;R.update=function(){R.update=st,Qt.cache++,Ct||Tt||R.refresh()},Pt.delayedCall(.01,R.update),$t=.01,Ct=Tt=0}else R.refresh();u&&iT()},s.register=function(n){return Po||(Pt=n||p_(),d_()&&window.document&&s.enable(),Po=Ja),Po},s.defaults=function(n){if(n)for(var i in n)Uh[i]=n[i];return Uh},s.disable=function(n,i){Ja=0,jt.forEach(function(o){return o[i?"kill":"disable"](n)}),un(te,"wheel",Ro),un(ve,"scroll",Ro),clearInterval(Ph),un(ve,"touchcancel",Ki),un(xe,"touchstart",Ki),Dh(un,ve,"pointerdown,touchstart,mousedown",$g),Dh(un,ve,"pointerup,touchend,mouseup",Kg),Xh.kill(),Lh(un);for(var r=0;r<Qt.length;r+=3)Nh(un,Qt[r],Qt[r+1]),Nh(un,Qt[r],Qt[r+2])},s.enable=function(){if(te=window,ve=document,pi=ve.documentElement,xe=ve.body,Pt){if(rl=Pt.utils.toArray,ja=Pt.utils.clamp,Sd=Pt.core.context||Ki,dd=Pt.core.suppressOverwrites||Ki,Ad=te.history.scrollRestoration||"auto",Td=te.pageYOffset||0,Pt.core.globals("ScrollTrigger",s),xe){Ja=1,Lo=document.createElement("div"),Lo.style.height="100vh",Lo.style.position="absolute",T_(),$b(),He.register(Pt),s.isTouch=He.isTouch,Ks=He.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),yd=He.isTouch===1,fn(te,"wheel",Ro),Ed=[te,ve,pi,xe],Pt.matchMedia?(s.matchMedia=function(h){var d=Pt.matchMedia(),f;for(f in h)d.add(f,h[f]);return d},Pt.addEventListener("matchMediaInit",function(){M_(),Dd()}),Pt.addEventListener("matchMediaRevert",function(){return S_()}),Pt.addEventListener("matchMedia",function(){Ar(0,1),Dr("matchMedia")}),Pt.matchMedia().add("(orientation: portrait)",function(){return gd(),gd})):console.warn("Requires GSAP 3.11.0 or later"),gd(),fn(ve,"scroll",Ro);var n=xe.hasAttribute("style"),i=xe.style,r=i.borderTopStyle,o=Pt.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",a=Ms(xe),$e.m=Math.round(a.top+$e.sc())||0,Cn.m=Math.round(a.left+Cn.sc())||0,r?i.borderTopStyle=r:i.removeProperty("border-top-style"),n||(xe.setAttribute("style",""),xe.removeAttribute("style")),Ph=setInterval(t_,250),Pt.delayedCall(.5,function(){return Ih=0}),fn(ve,"touchcancel",Ki),fn(xe,"touchstart",Ki),Dh(fn,ve,"pointerdown,touchstart,mousedown",$g),Dh(fn,ve,"pointerup,touchend,mouseup",Kg),vd=Pt.utils.checkPrefix("transform"),Hh.push(vd),Po=Pn(),Xh=Pt.delayedCall(.2,Ar).pause(),Io=[ve,"visibilitychange",function(){var h=te.innerWidth,d=te.innerHeight;ve.hidden?(qg=h,Yg=d):(qg!==h||Yg!==d)&&Qa()},ve,"DOMContentLoaded",Ar,te,"load",Ar,te,"resize",Qa],Lh(fn),jt.forEach(function(h){return h.enable(0,1)}),l=0;l<Qt.length;l+=3)Nh(un,Qt[l],Qt[l+1]),Nh(un,Qt[l],Qt[l+2])}else if(ve){var c=function h(){s.enable(),ve.removeEventListener("DOMContentLoaded",h)};ve.addEventListener("DOMContentLoaded",c)}}},s.config=function(n){"limitCallbacks"in n&&(pd=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(Ph)||(Ph=i)&&setInterval(t_,i),"ignoreMobileResize"in n&&(yd=s.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(Lh(un)||Lh(fn,n.autoRefreshEvents||"none"),h_=(n.autoRefreshEvents+"").indexOf("resize")===-1)},s.scrollerProxy=function(n,i){var r=zn(n),o=Qt.indexOf(r),a=Ir(r);~o&&Qt.splice(o,a?6:2),i&&(a?Oi.unshift(te,i,xe,i,pi,i):Oi.unshift(r,i))},s.clearMatchMedia=function(n){jt.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},s.isInViewport=function(n,i,r){var o=(di(n)?zn(n):n).getBoundingClientRect(),a=o[r?Cr:Rr]*i||0;return r?o.right-a>0&&o.left+a<te.innerWidth:o.bottom-a>0&&o.top+a<te.innerHeight},s.positionInViewport=function(n,i,r){di(n)&&(n=zn(n));var o=n.getBoundingClientRect(),a=o[r?Cr:Rr],l=i==null?a/2:i in Yh?Yh[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return r?(o.left+l)/te.innerWidth:(o.top+l)/te.innerHeight},s.killAll=function(n){if(jt.slice(0).forEach(function(r){return r.vars.id!=="ScrollSmoother"&&r.kill()}),n!==!0){var i=Lr.killAll||[];Lr={},i.forEach(function(r){return r()})}},s})();Zt.version="3.15.1";Zt.saveStyles=function(s){return s?rl(s).forEach(function(t){if(t&&t.style){var e=fi.indexOf(t);e>=0&&fi.splice(e,5),fi.push(t,t.style.cssText,t.getBBox&&t.getAttribute("transform"),Pt.core.getCache(t),Sd())}}):fi};Zt.revert=function(s,t){return Dd(!s,t)};Zt.create=function(s,t){return new Zt(s,t)};Zt.refresh=function(s){return s?Qa(!0):(Po||Zt.register())&&Ar(!0)};Zt.update=function(s){return++Qt.cache&&bs(s===!0?2:0)};Zt.clearScrollMemory=b_;Zt.maxScroll=function(s,t){return Qi(s,t?Cn:$e)};Zt.getScrollFunc=function(s,t){return ys(zn(s),t?Cn:$e)};Zt.getById=function(s){return bd[s]};Zt.getAll=function(){return jt.filter(function(s){return s.vars.id!=="ScrollSmoother"})};Zt.isScrolling=function(){return!!Ti};Zt.snapDirectional=Ld;Zt.addEventListener=function(s,t){var e=Lr[s]||(Lr[s]=[]);~e.indexOf(t)||e.push(t)};Zt.removeEventListener=function(s,t){var e=Lr[s],n=e&&e.indexOf(t);n>=0&&e.splice(n,1)};Zt.batch=function(s,t){var e=[],n={},i=t.interval||.016,r=t.batchMax||1e9,o=function(c,h){var d=[],f=[],u=Pt.delayedCall(i,function(){h(d,f),d=[],f=[]}).pause();return function(m){d.length||u.restart(!0),d.push(m.trigger),f.push(m),r<=d.length&&u.progress(1)}},a;for(a in t)n[a]=a.substr(0,2)==="on"&&In(t[a])&&a!=="onRefreshInit"?o(a,t[a]):t[a];return In(r)&&(r=r(),fn(Zt,"refresh",function(){return r=t.batchMax()})),rl(s).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,e.push(Zt.create(c))}),e};var o_=function(t,e,n,i){return e>i?t(i):e<0&&t(0),n>i?(i-e)/(n-e):n<0?e/(e-n):1},xd=function s(t,e){e===!0?t.style.removeProperty("touch-action"):t.style.touchAction=e===!0?"auto":e?"pan-"+e+(He.isTouch?" pinch-zoom":""):"none",t===pi&&s(xe,e)},zh={auto:1,scroll:1},lT=function(t){var e=t.event,n=t.target,i=t.axis,r=(e.changedTouches?e.changedTouches[0]:e).target,o=r._gsap||Pt.core.getCache(r),a=Pn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;r&&r!==xe&&(r.scrollHeight<=r.clientHeight&&r.scrollWidth<=r.clientWidth||!(zh[(l=bi(r)).overflowY]||zh[l.overflowX]));)r=r.parentNode;o._isScroll=r&&r!==n&&!Ir(r)&&(zh[(l=bi(r)).overflowY]||zh[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(e.stopPropagation(),e._gsapAllow=!0)},E_=function(t,e,n,i){return He.create({target:t,capture:!0,debounce:!1,lockAxis:!0,type:e,onWheel:i=i&&lT,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&fn(ve,He.eventTypes[0],l_,!1,!0)},onDisable:function(){return un(ve,He.eventTypes[0],l_,!0)}})},cT=/(input|label|select|textarea)/i,a_,l_=function(t){var e=cT.test(t.target.tagName);(e||a_)&&(t._gsapAllow=!0,a_=e)},hT=function(t){Er(t)||(t={}),t.preventDefault=t.isNormalizer=t.allowClicks=!0,t.type||(t.type="wheel,touch"),t.debounce=!!t.debounce,t.id=t.id||"normalizer";var e=t,n=e.normalizeScrollX,i=e.momentum,r=e.allowNestedScroll,o=e.onRelease,a,l,c=zn(t.target)||pi,h=Pt.core.globals().ScrollSmoother,d=h&&h.get(),f=Ks&&(t.content&&zn(t.content)||d&&t.content!==!1&&!d.smooth()&&d.content()),u=ys(c,$e),m=ys(c,Cn),_=1,p=(He.isTouch&&te.visualViewport?te.visualViewport.scale*te.visualViewport.width:te.outerWidth)/te.innerWidth,g=0,v=In(i)?function(){return i(a)}:function(){return i||2.8},w,y,T=E_(c,t.type,!0,r),E=function(){return y=!1},x=Ki,b=Ki,P=function(){l=Qi(c,$e),b=ja(Ks?1:0,l),n&&(x=ja(0,Qi(c,Cn))),w=Pr},C=function(){f._gsap.y=$a(parseFloat(f._gsap.y)+u.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",u.offset=u.cacheID=0},N=function(){if(y){requestAnimationFrame(E);var Q=$a(a.deltaY/2),W=b(u.v-Q);if(f&&W!==u.v+u.offset){u.offset=W-u.v;var R=$a((parseFloat(f&&f._gsap.y)||0)-u.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+R+", 0, 1)",f._gsap.y=R+"px",u.cacheID=Qt.cache,bs()}return!0}u.offset&&C(),y=!0},D,H,I,B,X=function(){P(),D.isActive()&&D.vars.scrollY>l&&(u()>l?D.progress(1)&&u(l):D.resetTo("scrollY",l))};return f&&Pt.set(f,{y:"+=0"}),t.ignoreCheck=function(F){return Ks&&F.type==="touchmove"&&N(F)||_>1.05&&F.type!=="touchstart"||a.isGesturing||F.touches&&F.touches.length>1},t.onPress=function(){y=!1;var F=_;_=$a((te.visualViewport&&te.visualViewport.scale||1)/p),D.pause(),F!==_&&xd(c,_>1.01?!0:n?!1:"x"),H=m(),I=u(),P(),w=Pr},t.onRelease=t.onGestureStart=function(F,Q){if(u.offset&&C(),!Q)B.restart(!0);else{Qt.cache++;var W=v(),R,tt;n&&(R=m(),tt=R+W*.05*-F.velocityX/.227,W*=o_(m,R,tt,Qi(c,Cn)),D.vars.scrollX=x(tt)),R=u(),tt=R+W*.05*-F.velocityY/.227,W*=o_(u,R,tt,Qi(c,$e)),D.vars.scrollY=b(tt),D.invalidate().duration(W).play(.01),(Ks&&D.vars.scrollY>=l||R>=l-1)&&Pt.to({},{onUpdate:X,duration:W})}o&&o(F)},t.onWheel=function(){D._ts&&D.pause(),Pn()-g>1e3&&(w=0,g=Pn())},t.onChange=function(F,Q,W,R,tt){if(Pr!==w&&P(),Q&&n&&m(x(R[2]===Q?H+(F.startX-F.x):m()+Q-R[1])),W){u.offset&&C();var yt=tt[2]===W,Ut=yt?I+F.startY-F.y:u()+W-tt[1],J=b(Ut);yt&&Ut!==J&&(I+=J-Ut),u(J)}(W||Q)&&bs()},t.onEnable=function(){xd(c,n?!1:"x"),Zt.addEventListener("refresh",X),fn(te,"resize",X),u.smooth&&(u.target.style.scrollBehavior="auto",u.smooth=m.smooth=!1),T.enable()},t.onDisable=function(){xd(c,!0),un(te,"resize",X),Zt.removeEventListener("refresh",X),T.kill()},t.lockAxis=t.lockAxis!==!1,a=new He(t),a.iOS=Ks,Ks&&!u()&&u(1),Ks&&Pt.ticker.add(Ki),B=a._dc,D=Pt.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:w_(u,u(),function(){return D.pause()})},onUpdate:bs,onComplete:B.vars.onComplete}),a};Zt.sort=function(s){if(In(s))return jt.sort(s);var t=te.pageYOffset||0;return Zt.getAll().forEach(function(e){return e._sortY=e.trigger?t+e.trigger.getBoundingClientRect().top:e.start+te.innerHeight}),jt.sort(s||function(e,n){return(e.vars.refreshPriority||0)*-1e6+(e.vars.containerAnimation?1e6:e._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};Zt.observe=function(s){return new He(s)};Zt.normalizeScroll=function(s){if(typeof s=="undefined")return kn;if(s===!0&&kn)return kn.enable();if(s===!1){kn&&kn.kill(),kn=s;return}var t=s instanceof He?s:hT(s);return kn&&kn.target===t.target&&kn.kill(),Ir(t.target)&&(kn=t),t};Zt.core={_getVelocityProp:Rh,_inputObserver:E_,_scrollers:Qt,_proxies:Oi,bridge:{ss:function(){Ti||Dr("scrollStart"),Ti=Pn()},ref:function(){return Rn}}};p_()&&Pt.registerPlugin(Zt);var A_="1.3.27";function P_(s,t,e){return Math.max(s,Math.min(t,e))}function uT(s,t,e){return(1-e)*s+e*t}function fT(s,t,e,n){return uT(s,t,1-Math.exp(-e*n))}function dT(s,t){return(s%t+t)%t}var pT=class{constructor(){Bt(this,"isRunning",!1);Bt(this,"value",0);Bt(this,"from",0);Bt(this,"to",0);Bt(this,"currentTime",0);Bt(this,"lerp");Bt(this,"duration");Bt(this,"easing");Bt(this,"onUpdate")}advance(s){var e;if(!this.isRunning)return;let t=!1;if(this.duration&&this.easing){this.currentTime+=s;let n=P_(0,this.currentTime/this.duration,1);t=n>=1;let i=t?1:this.easing(n);this.value=this.from+(this.to-this.from)*i}else this.lerp?(this.value=fT(this.value,this.to,this.lerp*60,s),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,t=!0)):(this.value=this.to,t=!0);t&&this.stop(),(e=this.onUpdate)==null||e.call(this,this.value,t)}stop(){this.isRunning=!1}fromTo(s,t,{lerp:e,duration:n,easing:i,onStart:r,onUpdate:o}){this.from=this.value=s,this.to=t,this.lerp=e,this.duration=n,this.easing=i,this.currentTime=0,this.isRunning=!0,r==null||r(),this.onUpdate=o}};function mT(s,t){let e;return function(...n){clearTimeout(e),e=setTimeout(()=>{e=void 0,s.apply(this,n)},t)}}var gT=class{constructor(s,t,{autoResize:e=!0,debounce:n=250}={}){Bt(this,"width",0);Bt(this,"height",0);Bt(this,"scrollHeight",0);Bt(this,"scrollWidth",0);Bt(this,"debouncedResize");Bt(this,"wrapperResizeObserver");Bt(this,"contentResizeObserver");Bt(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});Bt(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});Bt(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=s,this.content=t,e&&(this.debouncedResize=mT(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var s,t;(s=this.wrapperResizeObserver)==null||s.disconnect(),(t=this.contentResizeObserver)==null||t.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},I_=class{constructor(){Bt(this,"events",{})}emit(s,...t){var n;let e=this.events[s]||[];for(let i=0,r=e.length;i<r;i++)(n=e[i])==null||n.call(e,...t)}on(s,t){return this.events[s]?this.events[s].push(t):this.events[s]=[t],()=>{var e;this.events[s]=(e=this.events[s])==null?void 0:e.filter(n=>t!==n)}}off(s,t){var e;this.events[s]=(e=this.events[s])==null?void 0:e.filter(n=>t!==n)}destroy(){this.events={}}},_T=100/6,js={passive:!1};function C_(s,t){return s===1?_T:s===2?t:1}var xT=class{constructor(s,t={wheelMultiplier:1,touchMultiplier:1}){Bt(this,"touchStart",{x:0,y:0});Bt(this,"lastDelta",{x:0,y:0});Bt(this,"window",{width:0,height:0});Bt(this,"emitter",new I_);Bt(this,"onTouchStart",s=>{let{clientX:t,clientY:e}=s.targetTouches?s.targetTouches[0]:s;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:s})});Bt(this,"onTouchMove",s=>{let{clientX:t,clientY:e}=s.targetTouches?s.targetTouches[0]:s,n=-(t-this.touchStart.x)*this.options.touchMultiplier,i=-(e-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:n,y:i},this.emitter.emit("scroll",{deltaX:n,deltaY:i,event:s})});Bt(this,"onTouchEnd",s=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:s})});Bt(this,"onWheel",s=>{let{deltaX:t,deltaY:e,deltaMode:n}=s,i=C_(n,this.window.width),r=C_(n,this.window.height);t*=i,e*=r,t*=this.options.wheelMultiplier,e*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:t,deltaY:e,event:s})});Bt(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=s,this.options=t,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,js),this.element.addEventListener("touchstart",this.onTouchStart,js),this.element.addEventListener("touchmove",this.onTouchMove,js),this.element.addEventListener("touchend",this.onTouchEnd,js)}on(s,t){return this.emitter.on(s,t)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,js),this.element.removeEventListener("touchstart",this.onTouchStart,js),this.element.removeEventListener("touchmove",this.onTouchMove,js),this.element.removeEventListener("touchend",this.onTouchEnd,js)}},R_=s=>Math.min(1,1.001-2**(-10*s)),L_=class{constructor({wrapper:s=window,content:t=document.documentElement,eventsTarget:e=s,smoothWheel:n=!0,syncTouch:i=!1,syncTouchLerp:r=.075,touchInertiaExponent:o=1.7,duration:a,easing:l,lerp:c=.1,infinite:h=!1,orientation:d="vertical",gestureOrientation:f=d==="horizontal"?"both":"vertical",touchMultiplier:u=1,wheelMultiplier:m=1,autoResize:_=!0,prevent:p,virtualScroll:g,overscroll:v=!0,autoRaf:w=!1,anchors:y=!1,autoToggle:T=!1,allowNestedScroll:E=!1,__experimental__naiveDimensions:x=!1,naiveDimensions:b=x,stopInertiaOnNavigate:P=!1,respectReducedMotion:C=!0}={}){Bt(this,"_isScrolling",!1);Bt(this,"_isStopped",!1);Bt(this,"_isLocked",!1);Bt(this,"_preventNextNativeScrollEvent",!1);Bt(this,"_resetVelocityTimeout",null);Bt(this,"_rafId",null);Bt(this,"_isDraggingSelection",!1);Bt(this,"reducedMotionMediaQuery",window.matchMedia("(prefers-reduced-motion: reduce)"));Bt(this,"isTouching");Bt(this,"isIos");Bt(this,"time",0);Bt(this,"userData",{});Bt(this,"lastVelocity",0);Bt(this,"velocity",0);Bt(this,"direction",0);Bt(this,"options");Bt(this,"targetScroll");Bt(this,"animatedScroll");Bt(this,"animate",new pT);Bt(this,"emitter",new I_);Bt(this,"dimensions");Bt(this,"virtualScroll");Bt(this,"onScrollEnd",s=>{s instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&s.stopPropagation()});Bt(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});Bt(this,"onTransitionEnd",s=>{var t;(t=s.propertyName)!=null&&t.includes("overflow")&&s.target===this.rootElement&&this.checkOverflow()});Bt(this,"onClick",s=>{let t=s.composedPath().filter(n=>n instanceof HTMLAnchorElement&&n.href).map(n=>new URL(n.href)),e=new URL(window.location.href);if(this.options.anchors){let n=t.find(i=>e.host===i.host&&e.pathname===i.pathname&&i.hash);if(n){let i=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,r=decodeURIComponent(n.hash);this.scrollTo(r,i);return}}if(this.options.stopInertiaOnNavigate&&t.some(n=>e.host===n.host&&e.pathname!==n.pathname)){this.reset();return}});Bt(this,"onPointerDown",s=>{s.button===1&&this.reset()});Bt(this,"onVirtualScroll",s=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(s)===!1)return;let{deltaX:t,deltaY:e,event:n}=s;if(this.emitter.emit("virtual-scroll",{deltaX:t,deltaY:e,event:n}),n.ctrlKey||n.lenisStopPropagation)return;let i=n.type.includes("touch"),r=n.type.includes("wheel");if(i&&this.isIos&&(n.type==="touchstart"&&(this._isDraggingSelection=this.isTouchOnSelectionHandle(n)),this._isDraggingSelection)){n.type==="touchend"&&(this._isDraggingSelection=!1);return}this.isTouching=n.type==="touchstart"||n.type==="touchmove";let o=t===0&&e===0;if(this.options.syncTouch&&i&&n.type==="touchstart"&&o&&!this.isStopped&&!this.isLocked){this.reset();return}let a=this.options.gestureOrientation==="vertical"&&e===0||this.options.gestureOrientation==="horizontal"&&t===0;if(o||a)return;let l=n.composedPath();l=l.slice(0,l.indexOf(this.rootElement));let c=this.options.prevent,h=Math.abs(t)>=Math.abs(e)?"horizontal":"vertical";if(l.find(m=>{var _,p,g,v,w;return m instanceof HTMLElement&&(typeof c=="function"&&(c==null?void 0:c(m))||((_=m.hasAttribute)==null?void 0:_.call(m,"data-lenis-prevent"))||h==="vertical"&&((p=m.hasAttribute)==null?void 0:p.call(m,"data-lenis-prevent-vertical"))||h==="horizontal"&&((g=m.hasAttribute)==null?void 0:g.call(m,"data-lenis-prevent-horizontal"))||i&&((v=m.hasAttribute)==null?void 0:v.call(m,"data-lenis-prevent-touch"))||r&&((w=m.hasAttribute)==null?void 0:w.call(m,"data-lenis-prevent-wheel"))||this.options.allowNestedScroll&&this.hasNestedScroll(m,{deltaX:t,deltaY:e}))}))return;if(this.isStopped||this.isLocked){n.cancelable&&n.preventDefault();return}if(!(this.options.syncTouch&&i||this.options.smoothWheel&&r)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let d=e;this.options.gestureOrientation==="both"?d=Math.abs(e)>Math.abs(t)?e:t:this.options.gestureOrientation==="horizontal"&&(d=t),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&e>0||this.animatedScroll===this.limit&&e<0))&&(n.lenisStopPropagation=!0),n.cancelable&&n.preventDefault();let f=i&&this.options.syncTouch,u=i&&n.type==="touchend";u&&(d=Math.sign(d)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+d,{programmatic:!1,...f?{lerp:u?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});Bt(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){let s=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-s,this.direction=Math.sign(this.animatedScroll-s),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});Bt(this,"raf",s=>{let t=s-(this.time||s);this.time=s,this.animate.advance(t*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))});window.lenisVersion=A_,window.lenis||(window.lenis={}),window.lenis.version=A_,d==="horizontal"&&(window.lenis.horizontal=!0),i===!0&&(window.lenis.touch=!0),this.isIos=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),(!s||s===document.documentElement)&&(s=window),typeof a=="number"&&typeof l!="function"?l=R_:typeof l=="function"&&typeof a!="number"&&(a=1),this.options={wrapper:s,content:t,eventsTarget:e,smoothWheel:n,syncTouch:i,syncTouchLerp:r,touchInertiaExponent:o,duration:a,easing:l,lerp:c,infinite:h,gestureOrientation:f,orientation:d,touchMultiplier:u,wheelMultiplier:m,autoResize:_,prevent:p,virtualScroll:g,overscroll:v,autoRaf:w,anchors:y,autoToggle:T,allowNestedScroll:E,naiveDimensions:b,stopInertiaOnNavigate:P,respectReducedMotion:C},this.dimensions=new gT(s,t,{autoResize:_}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new xT(e,{touchMultiplier:u,wheelMultiplier:m}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(s,t){return this.emitter.on(s,t)}off(s,t){return this.emitter.off(s,t)}get overflow(){let s=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[s]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}setScroll(s){this.isHorizontal?this.options.wrapper.scrollTo({left:s,behavior:"instant"}):this.options.wrapper.scrollTo({top:s,behavior:"instant"})}isTouchOnSelectionHandle(s){var c;let t=window.getSelection();if(!t||t.isCollapsed||t.rangeCount===0)return!1;let e=(c=s.targetTouches[0])!=null?c:s.changedTouches[0];if(!e)return!1;let n=t.getRangeAt(0).getClientRects();if(n.length===0)return!1;let i=n[0],r=n[n.length-1],o=40,a=Math.hypot(e.clientX-i.left,e.clientY-i.top)<=o,l=Math.hypot(e.clientX-r.right,e.clientY-r.bottom)<=o;return a||l}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(s,{offset:t=0,immediate:e=!1,lock:n=!1,programmatic:i=!0,lerp:r=i?this.options.lerp:void 0,duration:o=i?this.options.duration:void 0,easing:a=i?this.options.easing:void 0,onStart:l,onComplete:c,force:h=!1,userData:d}={}){if(this.prefersReducedMotion&&(i?e=!0:(r=1,o=void 0,a=void 0)),(this.isStopped||this.isLocked)&&!h)return;let f=s,u=t;if(typeof f=="string"&&["top","left","start","#"].includes(f))f=0;else if(typeof f=="string"&&["bottom","right","end"].includes(f))f=this.limit;else{let m=null;if(typeof f=="string"?(m=f.startsWith("#")?document.getElementById(f.slice(1)):document.querySelector(f),m||(f==="#top"?f=0:console.warn("Lenis: Target not found",f))):f instanceof Element&&(m=f),m){if(this.options.wrapper!==window){let y=this.rootElement.getBoundingClientRect();u-=this.isHorizontal?y.left:y.top}let _=m.getBoundingClientRect(),p=getComputedStyle(m),g=this.isHorizontal?Number.parseFloat(p.scrollMarginLeft):Number.parseFloat(p.scrollMarginTop),v=getComputedStyle(this.rootElement),w=this.isHorizontal?Number.parseFloat(v.scrollPaddingLeft):Number.parseFloat(v.scrollPaddingTop);f=(this.isHorizontal?_.left:_.top)+this.animatedScroll-(Number.isNaN(g)?0:g)-(Number.isNaN(w)?0:w)}}if(typeof f=="number"){if(f+=u,this.options.infinite){if(i){this.targetScroll=this.animatedScroll=this.scroll;let m=f-this.animatedScroll;m>this.limit/2?f-=this.limit:m<-this.limit/2&&(f+=this.limit)}}else f=P_(0,f,this.limit);if(f===this.targetScroll){l==null||l(this),c==null||c(this);return}if(this.userData=d!=null?d:{},e){this.animatedScroll=this.targetScroll=f,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c==null||c(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}i||(this.targetScroll=f),typeof o=="number"&&typeof a!="function"?a=R_:typeof a=="function"&&typeof o!="number"&&(o=1),this.animate.fromTo(this.animatedScroll,f,{duration:o,easing:a,lerp:r,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",l==null||l(this)},onUpdate:(m,_)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=m-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=m,this.setScroll(this.scroll),i&&(this.targetScroll=m),_||this.emit(),_&&(this.reset(),this.emit(),c==null||c(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(s,{deltaX:t,deltaY:e}){var E;let n=Date.now();s._lenis||(s._lenis={});let i=s._lenis,r,o,a,l,c,h,d,f,u,m;if(n-((E=i.time)!=null?E:0)>2e3){i.time=Date.now();let x=window.getComputedStyle(s);if(i.computedStyle=x,r=["auto","overlay","scroll"].includes(x.overflowX),o=["auto","overlay","scroll"].includes(x.overflowY),c=["auto"].includes(x.overscrollBehaviorX),h=["auto"].includes(x.overscrollBehaviorY),i.hasOverflowX=r,i.hasOverflowY=o,!(r||o))return!1;d=s.scrollWidth,f=s.scrollHeight,u=s.clientWidth,m=s.clientHeight,a=d>u,l=f>m,i.isScrollableX=a,i.isScrollableY=l,i.scrollWidth=d,i.scrollHeight=f,i.clientWidth=u,i.clientHeight=m,i.hasOverscrollBehaviorX=c,i.hasOverscrollBehaviorY=h}else a=i.isScrollableX,l=i.isScrollableY,r=i.hasOverflowX,o=i.hasOverflowY,d=i.scrollWidth,f=i.scrollHeight,u=i.clientWidth,m=i.clientHeight,c=i.hasOverscrollBehaviorX,h=i.hasOverscrollBehaviorY;if(!(r&&a||o&&l))return!1;let _=Math.abs(t)>=Math.abs(e)?"horizontal":"vertical",p,g,v,w,y,T;if(_==="horizontal")p=Math.round(s.scrollLeft),g=d-u,v=t,w=r,y=a,T=c;else if(_==="vertical")p=Math.round(s.scrollTop),g=f-m,v=e,w=o,y=l,T=h;else return!1;return!T&&(p>=g||p<=0)?!0:(v>0?p<g:p>0)&&w&&y}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){var t,e;let s=this.options.wrapper;return this.isHorizontal?(t=s.scrollX)!=null?t:s.scrollLeft:(e=s.scrollY)!=null?e:s.scrollTop}get scroll(){return this.options.infinite?dT(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(s){this._isScrolling!==s&&(this._isScrolling=s,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(s){this._isStopped!==s&&(this._isStopped=s,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(s){this._isLocked!==s&&(this._isLocked=s,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get prefersReducedMotion(){return this.options.respectReducedMotion&&this.reducedMotionMediaQuery.matches}get className(){let s="lenis";return this.options.autoToggle&&(s+=" lenis-autoToggle"),this.isStopped&&(s+=" lenis-stopped"),this.isLocked&&(s+=" lenis-locked"),this.isScrolling&&(s+=" lenis-scrolling"),this.isScrolling==="smooth"&&(s+=" lenis-smooth"),s}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(s=>{this.rootElement.classList.add(s)})}cleanUpClassName(){for(let s of Array.from(this.rootElement.classList))(s==="lenis"||s.startsWith("lenis-"))&&this.rootElement.classList.remove(s)}};on.registerPlugin(Zt);var vT="nolan@nestlewoodrealty.com",yT="https://formsubmit.co/ajax/"+vT,Wn=(s,t=document)=>t.querySelector(s),er=(s,t=document)=>[...t.querySelectorAll(s)],Nr=matchMedia("(prefers-reduced-motion: reduce)").matches,nr=document.documentElement,ST=84,Hn=null;Nr||(Hn=new L_({lerp:.1,smoothWheel:!0}),Hn.on("scroll",Zt.update),on.ticker.add(s=>Hn.raf(s*1e3)),on.ticker.lagSmoothing(0));var MT=s=>{Hn?Hn.scrollTo(s,{offset:s===0?0:-ST+1,duration:1.4}):s===0?scrollTo({top:0}):s.scrollIntoView({behavior:"auto"})},al=null;try{al=Lm(Wn("#bg"),{reduced:Nr})}catch{al=null}al||nr.classList.add("no-webgl");function Nd(){nr.classList.contains("opened")||(nr.classList.add("opened"),al&&al.assemble(),setTimeout(()=>{nr.classList.add("intro-done"),Hn&&Hn.start()},1400))}var bT=sessionStorage.getItem("hts-intro");Nr||bT?(nr.classList.add("skip-intro"),Nd()):(sessionStorage.setItem("hts-intro","1"),nr.classList.add("intro-run"),Hn&&Hn.stop(),setTimeout(Nd,2500),Wn("#intro").addEventListener("click",Nd,{once:!0}));var TT=Wn("#top"),D_=()=>TT.classList.toggle("scrolled",scrollY>40);addEventListener("scroll",D_,{passive:!0});D_();er('a[href^="#"]').forEach(s=>s.addEventListener("click",t=>{let e=s.getAttribute("href"),n=e==="#"||e==="#top"?0:Wn(e);n!==null&&(t.preventDefault(),N_(),MT(n),n!==0&&history.replaceState(null,"",e))}));var Ud=Wn("#menuBtn"),Jh=Wn("#mobileMenu");function N_(){Jh.classList.contains("open")&&(Jh.classList.remove("open"),Ud.setAttribute("aria-expanded","false"),nr.classList.remove("menu-open"),Hn&&Hn.start())}Ud.addEventListener("click",()=>{let s=Jh.classList.toggle("open");Ud.setAttribute("aria-expanded",String(s)),nr.classList.toggle("menu-open",s),s?(Hn&&Hn.stop(),Wn("a",Jh).focus()):Hn&&Hn.start()});addEventListener("keydown",s=>{s.key==="Escape"&&N_()});var wT=0;function U_(s){[...s.childNodes].forEach(t=>{if(t.nodeType===3){let e=document.createDocumentFragment();t.textContent.split(/(\s+)/).forEach(n=>{if(!n)return;if(!n.trim()){e.appendChild(document.createTextNode(n));return}let i=document.createElement("span");i.className="w";let r=document.createElement("span");r.style.setProperty("--i",wT++),r.textContent=n,i.appendChild(r),e.appendChild(i)}),t.replaceWith(e)}else t.nodeType===1&&U_(t)})}er("[data-split]").forEach(U_);Nr?er(".reveal").forEach(s=>s.classList.add("in")):(Zt.batch(".reveal",{start:"top 88%",once:!0,onEnter:s=>{s.forEach(t=>t.classList.add("in")),on.to(s,{opacity:1,y:0,duration:1,ease:"power3.out",stagger:.1,overwrite:!0})}}),on.to(".hero-inner",{yPercent:-18,opacity:0,ease:"none",scrollTrigger:{trigger:".hero",start:"top top",end:"bottom top",scrub:!0}}),on.to(".giant span",{yPercent:-25,ease:"none",scrollTrigger:{trigger:".hero",start:"top top",end:"bottom top",scrub:!0}}),Zt.matchMedia({"(min-width: 900px)":()=>{let s=Wn("#track"),t=()=>Math.max(0,s.scrollWidth-innerWidth+80),e=on.to(s,{x:()=>-t(),ease:"none",scrollTrigger:{trigger:"#work",pin:".work-pin",start:"top top",end:()=>"+="+t(),scrub:.6,invalidateOnRefresh:!0,onUpdate:n=>on.set("#workBar",{scaleX:n.progress})}});return()=>e.kill()}}),er(".parallax").forEach(s=>on.fromTo(s,{yPercent:6},{yPercent:-6,ease:"none",scrollTrigger:{trigger:s,start:"top bottom",end:"bottom top",scrub:!0}})));addEventListener("load",()=>Zt.refresh());er("[data-count]").forEach(s=>{let t=+s.dataset.count,e=s.dataset.pre||"",n=s.dataset.suf||"";if(Nr){s.textContent=e+t+n;return}let i={v:0};Zt.create({trigger:s,start:"top 85%",once:!0,onEnter:()=>on.to(i,{v:t,duration:1.4,ease:"power3.out",onUpdate:()=>{s.textContent=e+Math.round(i.v)+n}})})});if(matchMedia("(hover: hover) and (pointer: fine)").matches&&!Nr){er(".tilt").forEach(n=>{n.addEventListener("pointermove",i=>{let r=n.getBoundingClientRect(),o=(i.clientX-r.left)/r.width-.5,a=(i.clientY-r.top)/r.height-.5;on.to(n,{rotateY:o*7,rotateX:-a*7,y:-4,transformPerspective:900,duration:.4,ease:"power2.out"}),n.style.setProperty("--mx",(o+.5)*100+"%"),n.style.setProperty("--my",(a+.5)*100+"%")}),n.addEventListener("pointerleave",()=>on.to(n,{rotateY:0,rotateX:0,y:0,duration:.6,ease:"power3.out"}))}),er(".btn.gold").forEach(n=>{n.addEventListener("pointermove",i=>{let r=n.getBoundingClientRect();on.to(n,{x:(i.clientX-r.left-r.width/2)*.18,y:(i.clientY-r.top-r.height/2)*.25,duration:.4,ease:"power2.out"})}),n.addEventListener("pointerleave",()=>on.to(n,{x:0,y:0,duration:.6,ease:"elastic.out(1, 0.4)"}))});let s=Wn("#cursor"),t=on.quickTo(s,"x",{duration:.25,ease:"power3"}),e=on.quickTo(s,"y",{duration:.25,ease:"power3"});addEventListener("pointermove",n=>{n.pointerType!=="mouse"||!n.clientX&&!n.clientY||(t(n.clientX),e(n.clientY),s.classList.add("on"))},{passive:!0}),er("a, button, .tilt, input, select, textarea").forEach(n=>{n.addEventListener("pointerenter",()=>s.classList.add("big")),n.addEventListener("pointerleave",()=>s.classList.remove("big"))})}var tr=Wn("#leadForm"),Uo=Wn("#formNote"),Fd={name:s=>s.trim().length>=2||"Please add your name.",phone:s=>s.replace(/\D/g,"").length>=10||"Please add a 10-digit phone number.",email:s=>!s.trim()||/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s.trim())||"That email doesn\u2019t look right."};function Od(s){let t=Fd[s.name];if(!t)return!0;let e=t(s.value),n=Wn(`#err-${s.name}`),i=e===!0;return s.setAttribute("aria-invalid",String(!i)),n.textContent=i?"":e,i}Object.keys(Fd).forEach(s=>{let t=tr.elements[s];t.addEventListener("blur",()=>{t.value&&Od(t)}),t.addEventListener("input",()=>{t.getAttribute("aria-invalid")==="true"&&Od(t)})});tr.addEventListener("submit",async s=>{if(s.preventDefault(),tr._honey.value)return;let t=Object.keys(Fd).map(r=>tr.elements[r]).filter(r=>!Od(r));if(t.length){t[0].focus(),Nr||on.fromTo(t[0],{x:-8},{x:0,duration:.5,ease:"elastic.out(1, 0.3)"}),Uo.textContent="Please fix the highlighted field.",Uo.className="fine err";return}let e=tr.querySelector("button[type=submit]"),n=e.innerHTML;e.disabled=!0,e.classList.add("loading"),e.innerHTML='<span class="spin" aria-hidden="true"></span>Sending\u2026',Uo.textContent="",Uo.className="fine";let i=Object.fromEntries(new FormData(tr));delete i._honey;try{let r=await fetch(yT,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({...i,_subject:"HTS website lead: "+i.name,_template:"table",_captcha:"false"})}),o=await r.json().catch(()=>({}));if(!r.ok||String(o.success)!=="true")throw new Error(o.message||"not delivered");tr.reset(),tr.classList.add("sent"),Wn("#formDone").hidden=!1,Wn("#formDone").focus()}catch{e.innerHTML=n,e.disabled=!1,e.classList.remove("loading"),Uo.className="fine err",Uo.innerHTML='Couldn\u2019t send just now. Call or text <a href="tel:+18284045335">828-404-5335</a>.'}});Wn("#yr").textContent=new Date().getFullYear();})();
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
