$(document).ready(function(){
    $(".menu-icon").click(function(){
        $(this).toggleClass("change");
        if($("#dashboard").hasClass("hide")){
            $("#dashboard").animate({ marginLeft: '0px'});
        } else {
          $("#dashboard").animate({ marginLeft: '-300px'});
        }
        $("#dashboard").toggleClass("hide");
    });
});
