"use strict";!function(l){function r(){var e=n.find(".lev-2>.overview"),a=n.find("div.sub");a.length<1||(t.removeClass("active"),a.removeClass("active"),a.css({height:0}),e.removeClass("hidden"))}var i=l("header").find("#overlay-burger-mobile"),n=i.find(".content"),o=i.find("button[data-target]"),v=i.find(".lev-2"),t=i.find("button.lev-3-toggler");i.on("burger-open",function(e){i.addClass("open")}),i.on("burger-close",function(e){i.removeClass("open")});var d=0;o.click(function(e){var a=l(e.currentTarget),t=a.data("target");if("back"==t)return r(),n.scrollTop(d),void n.removeClass("lev-2");var s=i.find(t);if(s.length<1){if((s=i.find('[data-item="'+t+'"]')).length<1)return;v.removeClass("active"),s.hasClass("lev-2")&&(n.addClass("lev-2"),s.addClass("active"),d=n.scrollTop(),n.scrollTop(0))}else i.find(".actions .values").not(t).removeClass("active"),o.removeClass("active"),s.toggleClass("active"),s.hasClass("active")&&a.addClass("active")}),t.click(function(e){var a=n.find(".lev-2>.overview"),t=l(e.currentTarget),s=t.next("div.sub");if(!(s.length<1)){var i=s.hasClass("active");r(),i||(t.addClass("active"),s.addClass("active"),s.css({height:s.find("div.wrapper").outerHeight()}),a.addClass("hidden"))}}),l(window).on("global::layoutChanged",function(){l("html").hasClass("layout-desktop")&&l('[data-target="#overlay-burger-mobile"][aria-expanded="true"]').trigger("click")})}(jQuery);