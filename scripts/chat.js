const http = '';

const header =`
	<ul>
		<li class="logo">
			<a href="index.html">0.0</a>
		</li>
		<li class="logo">
			 <i class="icon iconfont icon-search"></i>
		</li>
	</ul>
`

// const footer =`
// 	<ul>
//         <li class="active">
//             <a href="index.html">
//                 <i class="icon iconfont icon-comments"></i>
//                 <span>聊天室</span>
//             </a>
//         </li>
//         <li>
//             <a href="me.html">
//                 <i class="icon iconfont icon-account"></i>
//                 <span>我</span>
//             </a>
//         </li>
//     </ul>
// `;

function color(){
	this.r = Math.floor(Math.random()*255);
	this.g = Math.floor(Math.random()*255);
	this.b = Math.floor(Math.random()*255);
	this.color = 'rgba('+this.r+','+this.g+','+this.b+',1)';
}

String.prototype.strHTML = function(){
	let str = /<(?:.|\s)*?>/g;
	return this.replace(str,"");
}

function getQs(name){
	var reg = new RegExp(name+"=([^&]*)[$|&]?");
	var r = window.location.search.substr(1).match(reg);
	// console.log(r)
	// var r=window.location.search.substr(8);
	// console.log(window.location.search.substr(8))
	if(r != null) {
		// return unescape(r[2])
		return r[1];
	};
	return null;
}

function setCookie(name,value,expires,path,domain,secure){
	var cookieName = encodeURIComponent(name)+'='+encodeURIComponent(value);
	if (expires instanceof Date) {
		cookieName+=';expires='+expires;
	}
	if (path) {
		cookieName+=';expires='+path;
	}
	if (domain) {
		cookieName+=';domain='+domain;
	}
	if (secure) {
		cookieName+=';secure';
	}
	document.cookie = cookieName;
} 

function setCookie2(name,value){
	var expiresDate = new Date();
	expiresDate.setMonth(expiresDate.getMonth()+1);
	var cookieName = encodeURIComponent(name)+'='+encodeURIComponent(value);
        cookieName+=';expires='+ expiresDate.toUTCString()+';';
    document.cookie = cookieName;
}

function setCookieDate(day){
    var date = new Date();
        date.setDate(date.getDate() + day);
    return date;
}
    
    
function getCookie(name){
    //访问Cookie的name开始处
    var offset = document.cookie.indexOf(name);
    //alert(offset);
    //如果找到指定的cookie
    if (offset != -1) {
       //从cookie名后的位置开始搜索
       offset += name.length + 1;
       end = document.cookie.indexOf(";",offset);
       //如果没有找到分号
       if (end == -1) {
                 end = document.cookie.length;
       }
       //截取字符中的cookie的值
       return unescape(decodeURIComponent(document.cookie.substring(offset,end)));
    }else{
       return "";
    }
}
    
    
//删除cookie
function removeCookie(name) {
    document.cookie = name + "= ; expires=" + new Date(0);
}
    
    //alert(document.cookie)
	// setCookie2('name','应煜鑫')
	// setCookie2('email','yyx219@qq.com')
	// delCookie("email");
	// alert(getCookle('name'));