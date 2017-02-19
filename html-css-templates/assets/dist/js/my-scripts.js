$(document).ready(function(){
    $('.company').hide();
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

      $('#profile-name').click(function(){
        $('#profile-info ul').toggle()
      })

      $('#challange').click(function(){
        $('.product').show()
        $('.company').hide()
      })
      $('#company').click(function(){
        $('.product').hide()
        $('.company').show()
      })

      $('#upload').click(function() {
        $('#loader1').show()
        setTimeout(function(){
          $('#loader1').hide()
          $('#checkmark1').show()
          $('#frame2').show()
        },2000)
      });

      $('#check').click(function() {
        $('#loader2').show()
        setTimeout(function(){
          $('#loader2').hide()
          $('#checkmark2').show()
          $('#frame2').show()
          $('#finish').show()
        },2000)
      });
});
