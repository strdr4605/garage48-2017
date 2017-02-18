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
        var checkNum = 0;
      $('input[type="checkbox"]').each(
        function(i){
          if($(this).prop("checked") == true){
            checkNum++;
            console.log($(this).prop("id") + " check");
          }
          else if($(this).prop("checked") == false){
            checkNum--;
            console.log($(this).prop("id") + " uncheck");
          }
        })
        console.log(checkNum);
        if(checkNum == -8){
          $('.product').show();
        } else {
          $('.product').hide();
          $('input[type="checkbox"]').each(
            function(i){
              var that = this;
              if($(that).prop("checked") == true){
                $('.product').each(
                  function(i){
                    if($(this).hasClass($(that).prop("id") + ''))$(this).show()
                  }
                )
              }

            })
        }
      });
});
