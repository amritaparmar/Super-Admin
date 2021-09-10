$(document).ready(function () {
if ($(window).width() > 768) {
        $("ul.tabs li:first").addClass("active");
        var e = $("ul.tabs li:first").attr("rel");
        $("#" + e).addClass("active_content"),
                $("ul.tabs li").click(function () {
            $(".tab_content").removeClass("active_content");
            var e = $(this).attr("rel");
            $("#" + e).addClass("active_content");
            $("ul.tabs li").removeClass("active");
            $(this).addClass("active");
            $(".tab_drawer_heading").removeClass("d_active");
            $(".tab_drawer_heading[rel^='" + e + "']").addClass("d_active");
        });
    } else
        $(".tab_drawer_heading").on("click", function () {
            if ($(this).hasClass("d_active")) {
                $(this).next().slideUp("slow");
                $(this).removeClass("d_active");
                $(this).next().removeClass("active_content");
            } else {
                $(this).toggleClass("d_active");
                $(this).siblings(".tab_drawer_heading").removeClass("d_active");
                var e = $(this).attr("rel");
                $("#" + e).slideDown("slow");
                $("#" + e).siblings(".tab_content").slideUp("slow");
            }
        });
});
