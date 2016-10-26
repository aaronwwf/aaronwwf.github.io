jQuery(document).ready(function($) {

    $('.level-bar-inner').css('width', '0');
    
    $(window).on('load', function() {

        $('.level-bar-inner').each(function() {
        
            var itemWidth = $(this).data('level');
            
            $(this).animate({
                width: itemWidth
            }, 800);
            
        });
        changeLanguage("en");
    });
    window.currentLan="en";
    function changeLanguage(lan){
    	$("."+window.currentLan).hide();
    	$("."+lan).show();
    	window.currentLan=lan;
    } 
    $(".changeLan").click(function(){
    	var lan = $(this).attr("lan");
    	changeLanguage(lan);
    	return false;
    });
    
});