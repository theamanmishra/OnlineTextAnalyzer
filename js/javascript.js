$(document).ready(function(){
    
    var toplink = $(".topbarlink");
    toplink.click(function(e){
        e.preventDefault();
        $("body,html").animate({
            scrollTop: $(this.hash).offset().top
            },500);
    })

    $(window).scroll(function(){
        var scrollbarlocation = $(this).scrollTop()+1;
        toplink.each(function(){
            var secoffset = $(this.hash).offset().top
            if(secoffset <= scrollbarlocation){
                $(this).addClass("active");
                $(this).siblings().removeClass("active");
            }
        })
    })
})