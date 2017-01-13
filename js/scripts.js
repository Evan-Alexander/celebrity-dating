$(document).ready(function() {
  $("form#about-you").submit(function(event){
    var age = parseInt($("input#age").val());
    var gender = $("select#gender").val();
    var hobbies = $("select#hobbies").val();
    var food = $("select#food").val());


    if (gender === 'male' && age <= 30 ) {
      $("#upton").show();
      $("#oprah").hide();
      $("#keaton").hide();
      $("#burr").hide();
    } else if (gender === 'male' || age <= 30 || 'reading' || 'italian') {
      $("#upton").show();
      $("#oprah").hide();
      $("#keaton").hide();
      $("#burr").hide();
    } else if (gender === 'male' &&  age <=31 ) {
      $("#oprah").show();
      $("#upton").hide();
      $("#keaton").hide();
      $("#burr").hide();
    } else if (gender === 'male' ||  age <=31 || 'italian' || 'reading') {
      $("#oprah").show();
      $("#upton").hide();
      $("#keaton").hide();
      $("#burr").hide();
    }








    }

    $("#celeb").empty().append();
    $("#match").show();

    event.preventDefault();
  });
});
