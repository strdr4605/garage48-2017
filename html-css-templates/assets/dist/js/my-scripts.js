$(document).ready(function(){
    $(".menu-icon").click(function(){
        $(this).toggleClass("change");
        if($("#dashboard").hasClass("active-dashboard")) {
          $("#dashboard").addClass("inactive-dashboard");
          $("#dashboard").removeClass("active-dashboard")
        }
        if(!$("#dashboard").hasClass("inactive-dashboard")) {
          $("#dashboard").addClass("active-dashboard");
        }
        else {
          $("#dashboard").removeClass("inactive-dashboard");
        }
    });
});
