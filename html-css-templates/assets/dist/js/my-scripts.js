$(document).ready(function(){
    $(".menu-icon").click(function(){
        $(this).toggleClass("change");
        if(!($("#dashboard").hasClass("inactive-dashboard")) &&
        !($("#dashboard").hasClass("active-dashboard"))) {
          $("#dashboard").addClass("active-dashboard");
        }
        else {
        if($("#dashboard").hasClass("inactive-dashboard")) {
          $("#dashboard").addClass("active-dashboard");
          $("#dashboard").removeClass("inactive-dashboard")
        }
        else {
          $("#dashboard").removeClass("active-dashboard")
          $("#dashboard").addClass("inactive-dashboard");
        }
      }
    });
});
