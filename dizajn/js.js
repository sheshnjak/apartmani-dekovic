$(document).ready(function(){
// navigacija
if(window.location.pathname.length>2)  $('table#menu tr>td>a[href$="'+location.pathname.substring(1).substring(location.pathname.substring(1).lastIndexOf("/")+1)+'"]').addClass("active");
if(window.location.href.indexOf(".html")==-1) $("table#menu tr>td>a:first").addClass("active");

$.emajl();
/*$("table#menu tr>td a.active").css("width",185);
$("table#menu tr>td>a").hover(function(){
	prdni = $(this);
	stisni = $("table#menu tr>td a.active");
	prdni.addClass("active").animate({"width":192},500);
	stisni.removeClass("active").animate({"width":118},500);
}, function(){
	stisni = $(this);
	$(".proActive").addClass("active");
	stisni.removeClass("active").animate({"width":118},500);
});

$("table#menu").mouseout(function(){
	stisni = $("table#menu tr>td a.active");
	stisni.removeClass("active").animate({"width":118},500);
	$(".proActive").addClass("active").animate({"width":192},500);
});

*/

});
jQuery.extend({	//  metode prebacene u $.namespace
emajl: function(){  // <a class="emajl" href="user_nameATdomain">tekst linka</a> >>> mailto:user_name@domain
$("a.emajl").each(function(){
$(this).attr("href",$(this).attr("href").replace(/([^A]+)AT([\w]+)/,"mailto:$1@$2"));
if(!$(this).text()) $(this).text($(this).attr("href").substr(7));
});}
// testis zona
});

