var RandomPostConfig = {homePage: &quot;<data:blog.homepageUrl/>&quot;,numPosts:4};
//<![CDATA[
// Youtube Responsive
setTimeout(function(){$(".video-youtube").each(function(){$(this).replaceWith('<iframe class="video-youtube loader" src="'+$(this).data("src")+'" allowfullscreen="allowfullscreen" height="281" width="500"></iframe>')})},5e3);
var shortname = "tharabic-1";
for(var imgEl=document.querySelectorAll(".post-body img"),i=0;i<imgEl.length;i++)imgEl[i].getAttribute("src")&&(imgEl[i].setAttribute("data-src",imgEl[i].getAttribute("src")),imgEl[i].removeAttribute("src"),imgEl[i].className+=" lazy");
document.addEventListener("DOMContentLoaded",function(){function e(){r&&clearTimeout(r),r=setTimeout(function(){var t=window.pageYOffset;n.forEach(function(e){e.offsetTop<window.innerHeight+t&&(e.src=e.dataset.src,e.src=e.src.replace(/.*?:\/\//g,"https://cdn.staticaly.com/img/"),e.classList.remove("lazy"))}),0==n.length&&(document.removeEventListener("scroll",e),window.removeEventListener("resize",e),window.removeEventListener("orientationChange",e))},20)}var n;if("IntersectionObserver"in window){n=document.querySelectorAll(".lazy");var t=new IntersectionObserver(function(e){e.forEach(function(e){if(e.isIntersecting){var n=e.target;n.src=n.dataset.src,n.src=n.src.replace(/.*?:\/\//g,"https://cdn.staticaly.com/img/"),n.classList.remove("lazy"),t.unobserve(n)}})});n.forEach(function(e){t.observe(e)})}else{var r;n=document.querySelectorAll(".lazy"),document.addEventListener("scroll",e),window.addEventListener("resize",e),window.addEventListener("orientationChange",e)}});
function downloadJSAtOnload(){var d=document.createElement("script");d.src="https://cdn.jsdelivr.net/gh/proarabic/js@master/tharabic_post.js",document.body.appendChild(d)}window.addEventListener?window.addEventListener("load",downloadJSAtOnload,!1):window.attachEvent?window.attachEvent("onload",downloadJSAtOnload):window.onload=downloadJSAtOnload;
cookieOptions = {
    msg: "يستخدم هذا الموقع ملفات تعريف الارتباط للمساعدة في تقديم الخدمات. باستخدام هذا الموقع ، فإنك توافق على استخدام ملفات تعريف الارتباط.",
    link: "https://www.blogger.com/go/blogspot-cookies",
    close: "حسنا!",
    learn: "عرض المزيد" };
//]]>
