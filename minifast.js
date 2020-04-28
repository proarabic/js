function msgError(){return'<span class="no-posts"><b>Error:</b> No Results Found</span>'}function msgServerError(){return'<div class="no-posts error-503"><b>Failed to load resource:</b> the server responded with a status of 503</div>'}function beforeLoader(){return'<div class="loader"/>'}function getFeedUrl(e,t,a){var s="";switch(a){case"recent":s="/feeds/posts/summary?alt=json&max-results="+t;break;case"comments":s="list"==e?"/feeds/comments/summary?alt=json&max-results="+t:"/feeds/posts/summary/-/"+a+"?alt=json&max-results="+t;break;default:s="/feeds/posts/summary/-/"+a+"?alt=json&max-results="+t}return s}function getPostLink(e,t){for(var a=0;a<e[t].link.length;a++)if("alternate"==e[t].link[a].rel){var s=e[t].link[a].href;break}return s}function getPostTitle(e,t){return e[t].title.$t}function getPostImage(e,t){if("media$thumbnail"in e[t]){var a=e[t].media$thumbnail.url;a.match("img.youtube.com")&&(a=a.replace("/default.","/0."));var s=a}else s="//3.bp.blogspot.com/-1ZZxyCMl1pY/XqH95hQ1wnI/AAAAAAAACPc/Rbr-bOHHpf8yftU2etziZr5hYqEqV7x6gCK4BGAYYCw/s1600/courspdf.jpg";return s}function getPostAuthor(e,t){var a=e[t].author[0].name.$t,s=messages.postedBy,o="";if("true"==messages.postAuthor){""!=s&&(o="<em>"+s+"</em>");var r='<span class="entry-author">'+o+'<span class="by">'+a+"</span></span>"}else r="";return r}function getPostDate(e,t){var a=e[t].published.$t,s=a.substring(0,4),o=a.substring(5,7),r=a.substring(8,10),n=monthFormat[parseInt(o,10)-1]+" "+r+", "+s,i=messages.postedOn,l="";if("true"==messages.postDate){"true"==messages.postAuthor&&""!=i&&(l="<em>"+i+"</em>");var c='<span class="entry-time">'+l+'<time class="published" datetime="'+a+'">'+n+"</time></span>"}else c="";return c}function getPostSnip(e,t){return e[t].summary.$t}function getPostComments(e,t,a){return'<article class="custom-item item-'+t+'"><span class="entry-title"><a href="'+a+'">'+e[t].author[0].name.$t+'<span class="cmm-snippet excerpt"> - '+e[t].title.$t.substr(0,35)+"...</span></a></span></article>"}function getAjax(m,u,e,p){switch(u){case"list":case"related":null==p&&(p="geterror404");var t=getFeedUrl(u,e,p);$.ajax({url:t,type:"GET",dataType:"json",cache:!0,beforeSend:function(e){switch(u){case"related":m.html(beforeLoader()).parent().addClass("show-ify");break;case"list":m.html(beforeLoader())}},success:function(e){var t="";switch(u){case"list":t='<div class="custom-widget">';break;case"related":t='<div class="related-posts">'}var a=e.feed.entry;if(null!=a)for(var s=0,o=a;s<o.length;s++){var r=getPostLink(o,s),n=getPostTitle(o,s,r),i=getPostImage(o,s,r),l=getPostAuthor(o,s),c=getPostDate(o,s),d=getPostSnip(o,s),h="";switch(u){case"list":switch(p){case"comments":h+=getPostComments(o,s,r);break;default:h+='<article class="custom-item item-'+s+'"><h2 class="entry-title"><a href="'+r+'">'+n+"</a></h2></article>"}break;case"related":h+='<article class="related-item post item-'+s+'"><a class="entry-image-link" href="'+r+'"><span class="entry-thumb" data-image="'+i+'"/></a><div class="entry-header"><h2 class="entry-title"><a href="'+r+'">'+n+'</a></h2><p class="entry-excerpt excerpt">'+d.substr(0,79)+'…</p><div class="entry-meta">'+l+c+"</div></div></article>"}t+=h}else t=msgError();t+="</div>",m.html(t),m.find("span.entry-thumb").lazyify()},error:function(){m.html(msgServerError())}})}}function ajaxWidget(e,t,a,s,o){if(o.match("getwidget")){if("list"==t)return getAjax(e,t,a,s);e.html(msgError())}}function ajaxRelated(e,t,a,s,o){if(o.match("getrelated"))return getAjax(e,t,a,s)}!function(r){r.fn.lazyify=function(){return this.each(function(){var s=r(this),e=s.attr("data-image"),t="/w"+Math.round(s.width())+"-h"+Math.round(s.height())+"-p-k-no-nu",o="";function a(){var e=r(window).height(),t=r(window).scrollTop();if(s.offset().top<t+e){var a=new Image;a.onload=function(){s.attr("style","background-image:url("+this.src+")").addClass("lazy-ify")},a.src=o}}o=e.match("s72-c")?e.replace("/s72-c",t):e.match("w72-h")?e.replace("/w72-h72-p-k-no-nu",t):e,r(window).on("load resize scroll",a),a()})}}(jQuery),$("#main-menu-ul").each(function(){var e=$(this).attr("data-title").trim();$(".menu-toggle").text(e)}),$(".search-toggle").on("click",function(){$("body").toggleClass("search-active")}),$(".search-toggle").each(function(){var e=$(this),t=e.attr("data-text"),a=searchText;""==a?e.text(t):"hide"==a?e.text(""):e.text(a)}),$(".follow-by-email-text").each(function(){var e=$(this),t=followByEmailText;""!=t&&e.text(t)}),$("#post-body").shortcode({ads:function(){if(null!=this.options)switch(this.options.id){case"ads1":return'<div id="new-before-ad"/>';case"ads2":return'<div id="new-after-ad"/>';default:return""}}}),$("#new-before-ad").each(function(){var e=$(this);e.length&&$("#before-ad").appendTo(e)}),$("#new-after-ad").each(function(){var e=$(this);e.length&&$("#after-ad").appendTo(e)}),$("#main-before-ad .widget").each(function(){var e=$(this);e.length&&e.appendTo($("#before-ad"))}),$("#main-after-ad .widget").each(function(){var e=$(this);e.length&&e.appendTo($("#after-ad"))}),$("#main-arel-ad .widget").each(function(){var e=$(this);e.length&&e.appendTo($("#arel-ad"))}),$(".avatar-image-container img").attr("src",function(e,t){return t=(t=t.replace("//resources.blogblog.com/img/blank.gif","//1.bp.blogspot.com/-oSjP8F09qxo/Wy1J9dp7b0I/AAAAAAAACF0/ggcRfLCFQ9s2SSaeL9BFSE2wyTYzQaTyQCK4BGAYYCw/s35-r/avatar.jpg")).replace("//img1.blogblog.com/img/blank.gif","//1.bp.blogspot.com/-oSjP8F09qxo/Wy1J9dp7b0I/AAAAAAAACF0/ggcRfLCFQ9s2SSaeL9BFSE2wyTYzQaTyQCK4BGAYYCw/s35-r/avatar.jpg")}),$(".post-body a").each(function(){var e=$(this),t=e.text().trim(),a=t.split("/"),s=a[0],o=a[1],r=a.pop();t.match("button")&&(e.addClass("button").text(s),"button"!=o&&e.addClass(o),"button"!=r&&e.addClass("colored-button").css({"background-color":r}))}),$(".post-body strike").each(function(){var e=$(this),t=e.text().trim(),a=e.html();t.match("contact-form")&&(e.replaceWith('<div class="contact-form"/>'),$(".contact-form").append($("#ContactForm1"))),t.match("alert-success")&&e.replaceWith('<div class="alert-message alert-success short-b">'+a+"</div>"),t.match("alert-info")&&e.replaceWith('<div class="alert-message alert-info short-b">'+a+"</div>"),t.match("alert-warning")&&e.replaceWith('<div class="alert-message alert-warning short-b">'+a+"</div>"),t.match("alert-error")&&e.replaceWith('<div class="alert-message alert-error short-b">'+a+"</div>"),t.match("left-sidebar")&&e.replaceWith("<style>.item #main-wrapper{float:right}.item #sidebar-wrapper{float:left}</style>"),t.match("right-sidebar")&&e.replaceWith("<style>.item #main-wrapper{float:left}.item #sidebar-wrapper{float:right}</style>"),t.match("full-width")&&e.replaceWith("<style>.item #main-wrapper{width:100%}.item #sidebar-wrapper{display:none}</style>"),t.match("code-box")&&e.replaceWith('<pre class="code-box short-b">'+a+"</pre>"),$(".post-body .short-b").find("b").each(function(){var e=$(this),t=e.text().trim();(t.match("alert-success")||t.match("alert-info")||t.match("alert-warning")||t.match("alert-error")||t.match("code-box"))&&e.replaceWith("")})}),$(".share-links .window-ify,.entry-share .window-ify").on("click",function(){var e=$(this),t=e.data("url"),a=e.data("width"),s=e.data("height"),o=window.screen.width,r=window.screen.height,n=Math.round(o/2-a/2),i=Math.round(r/2-s/2);window.open(t,"_blank","scrollbars=yes,resizable=yes,toolbar=no,location=yes,width="+a+",height="+s+",left="+n+",top="+i).focus()}),$(".share-links").each(function(){var e=$(this);e.find(".show-hid a").on("click",function(){e.toggleClass("show-hidden")})}),$(".about-author .author-description span a").each(function(){var e=$(this),t=e.text().trim(),a=e.attr("href");e.replaceWith('<li class="'+t+'"><a href="'+a+'" title="'+t+'" target="_blank"/></li>'),$(".author-description").append($(".author-description span li")),$(".author-description").addClass("show-icons")}),$(".widget-ready .HTML .widget-content").each(function(){var s=$(this),o=s.text().trim().toLowerCase();s.shortcode({getWidget:function(){var e=this.options.results,t=this.options.label,a=this.options.type;ajaxWidget(s,a,e,t,o)}})}),$(".related-content").each(function(){var e=$(this),t=e.find(".related-tag").attr("data-label");ajaxRelated(e,"related",relatedPostsNum,t,"getrelated")}),$(".blog-post-comments").each(function(){var e=$(this),t=commentsSystem,a='<div class="fb-comments" data-width="100%" data-href="'+disqus_blogger_current_url+'" order_by="time" data-numposts="5"></div>',s="comments-system-"+t;switch(t){case"blogger":e.addClass(s).show(),$(".entry-meta .entry-comments-link").addClass("show");break;case"disqus":e.addClass(s).show();break;case"facebook":e.addClass(s).find("#comments").html(a),e.show();break;case"hide":e.hide();break;default:e.addClass("comments-system-default").show(),$(".entry-meta .entry-comments-link").addClass("show")}var o=e.find(".comments .toplevel-thread > ol > .comment .comment-actions .comment-reply"),r=e.find(".comments .toplevel-thread > #top-continue");o.on("click",function(){r.show()}),r.on("click",function(){r.hide()})}),$(function(){$(".index-post .entry-image-link .entry-thumb,.FeaturedPost .entry-image-link .entry-thumb,.about-author .author-avatar").lazyify(),$("#slide-menu").each(function(){$(".menu-toggle, .close-slide-menu, .overlay").on("click",function(){$("body").toggleClass("menu-active")})}),$("#main-menu-ul").each(function(){$(this).clone().prependTo("#slide-menu")}),$("#topbar-menu-ul").each(function(){$(this).clone().appendTo("#slide-menu")}),$("#topbar-social ul.social").each(function(){$(this).clone().appendTo("#main-menu-social, .slide-menu-social")}),$("#header-wrapper .headerify-fixed").each(function(){var t=$(this);if(1==fixedMenu&&0<t.length){var a=$(document).scrollTop(),s=t.offset().top,o=t.height(),r=s+o+58;$(window).scroll(function(){var e=$(document).scrollTop();e<$("#footer-wrapper").offset().top-o&&(r<e?t.addClass("is-fixed"):e<s&&t.removeClass("is-fixed"),a<e?t.removeClass("show"):t.addClass("show"),a=$(document).scrollTop())})}}),$("#main-wrapper,#sidebar-wrapper").each(function(){1==fixedSidebar&&$(this).theiaStickySidebar({additionalMarginTop:25,additionalMarginBottom:25})}),$(".back-top").each(function(){var e=$(this);$(window).on("scroll",function(){100<=$(this).scrollTop()?e.fadeIn(250):e.fadeOut(250),e.offset().top>=$("#footer-wrapper").offset().top-32?e.addClass("on-footer"):e.removeClass("on-footer")}),e.click(function(){$("html, body").animate({scrollTop:0},500)})}),$("p.comment-content").each(function(){var e=$(this);e.replaceText(/(https:\/\/\S+(\.png|\.jpeg|\.jpg|\.gif))/g,'<img src="$1"/>'),e.replaceText(/(?:https:\/\/)?(?:www\.)?(?:youtube\.com)\/(?:watch\?v=)?(.+)/g,'<iframe id="youtube" width="100%" height="280" src="https://www.youtube.com/embed/$1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>')}),$("#load-more-link").each(function(){var a=$(this).data("load");a&&$("#load-more-link").show(),$("#load-more-link").on("click",function(e){$("#load-more-link").hide(),$.ajax({url:a,success:function(e){var t=$(e).find(".blog-posts");t.find(".index-post").addClass("post-animated post-fadeInUp"),$(".blog-posts").append(t.html()),(a=$(e).find("#load-more-link").data("load"))?$("#load-more-link").show():($("#load-more-link").hide(),$("#blog-pager .no-more").addClass("show")),$(".index-post .entry-image-link .entry-thumb").lazyify()},beforeSend:function(){$("#blog-pager .loading").show()},complete:function(){$("#blog-pager .loading").hide()}}),e.preventDefault()})})});
