// Javascript for Squiiid
//--------------------------------------------------------
//
//						Home Page
//
//--------------------------------------------------------
//	Keycodes:
//		37: Left Arrow
//		38: Up Arrow
//		39: Right Arrow
//		40: Down Arrow
//		13: Enter
function loginShow(){$("#requestinvite").animate({opacity:0},300,function(){$("#requestinvite").css("display","none")});layerinvite=!1;$("#button-login").animate({opacity:0},300,function(){$("#button-login").css("display","none")});$("#login").css("display","block").animate({opacity:1},300);layerlogin=!0;$("#button-back").css("display","block").animate({opacity:1},300)}function inviteShow(){$("#login").animate({opacity:0},300,function(){$("#login").css("display","none")});layerinvite=!0;$("#button-login").animate({opacity:0},300,function(){$("#button-login").css("display","none")});$("#requestinvite").css("display","block").animate({opacity:1},300);layerlogin=!1;$("#button-back").css("display","block").animate({opacity:1},300)}function loginInviteHide(){$("#button-login").css("display","block").animate({opacity:1},300);$("#requestinvite").animate({opacity:0},300,function(){$("#requestinvite").css("display","none")});layerinvite=!1;$("#login").animate({opacity:0},300,function(){$("#login").css("display","none")});layerlogin=!1;$("#button-back").animate({opacity:0},300,function(){$("#button-back").css("display","none")})}function submitInviteRequest(){requestform.submit()}function getfaded(){$("#photosharing").css("display")=="block"&&$("#photosharing").animate({opacity:0},300,function(){$("#photosharing").css("display","none")});$("#settings").css("display")=="block"&&$("#settings").animate({opacity:0},300,function(){$("#settings").css("display","none")});$("#search").css("display")=="block"&&$("#search").animate({opacity:0},300,function(){$("#search").css("display","none")});$("#uploader").css("display")=="block"&&$("#uploader").animate({opacity:0},300,function(){$("#uploader").css("display","none")});$("#omgwhiteeverywhere").animate({opacity:0},300,function(){$("#omgwhiteeverywhere").css("display","none")})}function opensesame(e){if(e=="sharing"){$("#photosharing").css("display","block").animate({opacity:1},300);document.getElementById("share-embed-code").innerHTML='<object src="http://squiiid.com/image/'+image_id+'/" />'}e=="settings"&&$("#settings").css("display","block").animate({opacity:1},300);e=="search"&&$("#search").css("display","block").animate({opacity:1},300);e=="uploader"&&$("#uploader").css("display","block").animate({opacity:1},300);$("#omgwhiteeverywhere").css("display","block").animate({opacity:1},300)}function loadMyPhotos(){}function sizeOverlays(){$(".a-photo").each(function(e,t){$imgheight=$(t).height();$imgwidth=$(t).width();$imgoffset=Number($imgheight)*-1;$(t).siblings(".photo-hover-box").css({width:$imgwidth,height:$imgheight,"margin-bottom":$imgoffset});$(t).attr("rel",$imgoffset)})}function switchsection(e){if(e=="section-tags")var t=$("#section-tags");else if(e=="section-contributors")var t=$("#section-contributors");else if(e=="section-geo")var t=$("#section-geo");else if(e=="section-camera")var t=$("#section-camera");else if(e=="section-products")var t=$("#section-products");$.each($(".upload-details > .upload-section"),function(t,n){n.getAttribute("id")==e?n.setAttribute("rel","open"):n.setAttribute("rel","closed")})}function showerror(){$(".error").css("display","table-cell").animate({opacity:"1"},250)}function hideerror(){$(".error").animate({opacity:"0"},250,function(){$(".error").css("display","none")})}var layerlogin=!1,layerinvite=!1,image_id=0;$("#button-back").on("click",function(){loginInviteHide()});$("#button-login").on("click",function(){layerlogin==1?loginInviteHide():loginShow()});$("#squid-button").on("click",function(){layerinvite==0&&inviteShow()});$("#requestinvite2").on("click",function(){layerinvite==0&&inviteShow()});var requestform=document.forms.requestinvite;$("#requestinvitebutton").on("click",function(){submitInviteRequest();loginInviteHide();$("#inviteconfirm").css("display","block")});$("#inviteconfirm").on("click",function(){$("#inviteconfirm").css("display","none")});var myphotos=[{id:0,width:1280,height:1920,likes:177,clicks:891,hovers:677,reblogs:1208,url:"/static/assets/images/bg-dash1.jpg"},{id:1,width:1920,height:1080,likes:22,clicks:344,hovers:514,reblogs:770,url:"/static/assets/images/bg-dash2.jpg"},{id:2,width:1100,height:1650,likes:816,clicks:1480,hovers:6760,reblogs:666,url:"/static/assets/images/bg-dash3.jpg"}],opensection="480px",closedsection="54px";$("body").delegate("#upload-tags","click",function(){$("#section-tags").attr("rel")=="closed"&&switchsection("section-tags")});$("body").delegate("#upload-contributors","click",function(){$("#section-contributors").attr("rel")=="closed"&&switchsection("section-contributors")});$("body").delegate("#upload-geo","click",function(){$("#section-geo").attr("rel")=="closed"&&switchsection("section-geo")});$("body").delegate("#upload-camera","click",function(){$("#section-camera").attr("rel")=="closed"&&switchsection("section-camera")});$("body").delegate("#upload-products","click",function(){$("#section-products").attr("rel")=="closed"&&switchsection("section-products")});$("body").delegate("#settings-checkbox","click",function(){if($("#settings-checkbox").attr("rel")=="0"){$("#settings-checkbox").attr("rel","1");$("settings-checkbox-hidden").attr("value","1")}else{$("#settings-checkbox").attr("rel","0");$("settings-checkbox-hidden").attr("value","0")}});$("body").delegate("#error-x","click",function(){hideerror()});$("body").delegate("#share-embed","click",function(){$("#share-embed-box").css("display","block").animate({opacity:"1"},250);$("#share-embed-code").focus().select()});$("body").delegate("#share-embed-code","click",function(){$("#share-embed-code").focus().select()});$("body").delegate("#share-embed-x","click",function(){$("#share-embed-box").animate({opacity:"0"},250,function(){$("#share-embed-box").css("display","none")})});$("body").delegate("#photo-share-x","click",function(){getfaded()});$("body").delegate("#squiiid-logo","click",function(){getfaded()});$("body").delegate("#settings-save","click",function(){getfaded()});$("body").delegate("#nav-settings","click",function(){opensesame("settings")});$("body").delegate("#nav-search","click",function(){opensesame("search")});$("body").delegate("#nav-upload","click",function(){opensesame("uploader")});$(document).ready(function(){($("#my-photos")!==""||$("#my-photos")!==null)&&loadMyPhotos();sizeOverlays()});$(window).resize(function(){sizeOverlays()});