var RandomPostConfig = {homePage: &quot;<data:blog.homepageUrl/>&quot;,numPosts:4};
//<![CDATA[
function downloadJSAtOnload(){var d=document.createElement("script");d.src="https://cdn.jsdelivr.net/gh/proarabic/js@master/tharabic_home.js",document.body.appendChild(d)}window.addEventListener?window.addEventListener("load",downloadJSAtOnload,!1):window.attachEvent?window.attachEvent("onload",downloadJSAtOnload):window.onload=downloadJSAtOnload;
document.addEventListener("DOMContentLoaded",function(){function e(){r&&clearTimeout(r),r=setTimeout(function(){var t=window.pageYOffset;n.forEach(function(e){e.offsetTop<window.innerHeight+t&&(e.src=e.dataset.src,e.src=e.src.replace(/.*?:\/\//g,"//"),e.classList.remove("lazy"))}),0==n.length&&(document.removeEventListener("scroll",e),window.removeEventListener("resize",e),window.removeEventListener("orientationChange",e))},20)}var n;if("IntersectionObserver"in window){n=document.querySelectorAll(".lazy");var t=new IntersectionObserver(function(e){e.forEach(function(e){if(e.isIntersecting){var n=e.target;n.src=n.dataset.src,n.src=n.src.replace(/.*?:\/\//g,"//"),n.classList.remove("lazy"),t.unobserve(n)}})});n.forEach(function(e){t.observe(e)})}else{var r;n=document.querySelectorAll(".lazy"),document.addEventListener("scroll",e),window.addEventListener("resize",e),window.addEventListener("orientationChange",e)}});
function im() {
var x=document.querySelectorAll(".lazyloadimg"),i;for(i=0;i<x.length;i++)x[i].innerHTML=x[i].innerHTML.replace("<!--","").replace("-->","");
}window.onload = im;
cookieOptions = {
    msg: "يستخدم هذا الموقع ملفات تعريف الارتباط للمساعدة في تقديم الخدمات. باستخدام هذا الموقع ، فإنك توافق على استخدام ملفات تعريف الارتباط.",
    link: "https://www.blogger.com/go/blogspot-cookies",
    close: "حسنا!",
    learn: "عرض المزيد" };
//]]>
