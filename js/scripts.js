$(document).ready(function() {
  $("form#about-you").submit(function(event){
    var age = parseInt($("input#age").val());
    var gender = $("select#gender").val();
    var hobbies = $("select#hobbies").val();
    var food = $("select#food").val();


    if (gender === 'male' && age <= 30 ) {
      $("#upton").show();
      $("#oprah").hide();
      $("#keaton").hide();
      $("#burr").hide();
    } else if (gender === 'male' && age < 30 && hobbies === 'reading' && food === 'italian') {
      $("#oprah").show();
      $("#upton").hide();
      $("#keaton").hide();
      $("#burr").hide();
    } else if (gender === 'male' && age > 30 ) {
      $("#oprah").show();
      $("#upton").hide();
      $("#keaton").hide();
      $("#burr").hide();
    } else if (gender === 'male' && age > 30 && hobbies === 'outdoor' && food === 'thai') {
      $("#upton").show();
      $("#oprah").hide();
      $("#keaton").hide();
      $("#burr").hide();
    }

    if (gender === 'female' && age <= 30 ) {
      $("#keaton").show();
      $("#oprah").hide();
      $("#upton").hide();
      $("#burr").hide();
    } else if (gender === 'female' && age < 30 && hobbies === 'reading' && food === 'italian') {
      $("#burr").show();
      $("#upton").hide();
      $("#keaton").hide();
      $("#oprah").hide();
    } else if (gender === 'female' && age > 30 ) {
      $("#burr").show();
      $("#upton").hide();
      $("#keaton").hide();
      $("#oprah").hide();
    } else if (gender === 'female' && age > 30 && hobbies === 'outdoor' && food === 'thai') {
      $("#keaton").show();
      $("#oprah").hide();
      $("#keaton").hide();
      $("#burr").hide();
    }

    $("#celeb").empty().append();
    $("#match").show();

    event.preventDefault();
  });
});
