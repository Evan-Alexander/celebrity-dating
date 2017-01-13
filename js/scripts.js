$(document).ready(function() {
  $("form#about-you").submit(function(event){
    var age = parseInt($("input#age").val());
    var gender = $("select#gender").val();
    var hobbies = $("select#hobbies").val();
    var food = $("select#food").val();


    if (gender === 'male' && age <= 30 ) {
      var celeb = ("Kate Upton");
      $("#upton").show();
      $("#oprah").hide();
      $("#keaton").hide();
      $("#burr").hide();
    } else if (gender === 'male' && age < 30 && hobbies === 'reading' && food === 'italian') {
      var celeb = ("Oprah Winfrey");
      $("#oprah").show();
      $("#upton").hide();
      $("#keaton").hide();
      $("#burr").hide();
    } else if (gender === 'male' && age > 30 ) {
      var celeb = ("Oprah Winfrey");
      $("#oprah").show();
      $("#upton").hide();
      $("#keaton").hide();
      $("#burr").hide();
    } else if (gender === 'male' && age > 30 && hobbies === 'outdoor' && food === 'thai') {
      var celeb = ("Kate Upton");
      $("#upton").show();
      $("#oprah").hide();
      $("#keaton").hide();
      $("#burr").hide();
    }

    if (gender === 'female' && age <= 30 ) {
      var celeb = ("Micheal Keaton");
      $("#keaton").show();
      $("#oprah").hide();
      $("#upton").hide();
      $("#burr").hide();
    } else if (gender === 'female' && age < 30 && hobbies === 'reading' && food === 'italian') {
      var celeb = ("Bill Burr");
      $("#burr").show();
      $("#upton").hide();
      $("#keaton").hide();
      $("#oprah").hide();
    } else if (gender === 'female' && age > 30 ) {
      var celeb = ("Bill Burr");
      $("#burr").show();
      $("#upton").hide();
      $("#keaton").hide();
      $("#oprah").hide();
    } else if (gender === 'female' && age > 30 && hobbies === 'outdoor' && food === 'thai') {
      var celeb = ("Micheal Keaton");
      $("#keaton").show();
      $("#oprah").hide();
      $("#keaton").hide();
      $("#burr").hide();
    }

    $("#celeb").empty().append(celeb);
    $("#match").show();

    event.preventDefault();
  });
});
