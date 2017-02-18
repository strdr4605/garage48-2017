$(document).ready(function(){
    $(".menu-icon").click(function(){
        $(this).toggleClass("change");
        if($("#dashboard").hasClass("hide")){
            $("#dashboard").animate({ marginLeft: '0vw'});
            $("#products-list").css("width", "75vw");
        } else {
          $("#dashboard").animate({ marginLeft: '-25vw'});
          $("#products-list").css("width", "100vw");
        }
        $("#dashboard").toggleClass("hide");
    });
    $('input[type="checkbox"]').click(function(){
            if($('input[type="checkbox"]').prop("checked") == true){
                console.log($('input[type="checkbox"]').prop("id") + " check");
            }
            else if($('input[type="checkbox"]').prop("checked") == false){
                console.log($('input[type="checkbox"]').prop("id") + " uncheck");
            }
        });
});
