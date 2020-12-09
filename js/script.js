$(document).ready(function () {

  var list = [
    "Prendere il caffè",
    "Rifare il letto",
    "Seguire la lezione di Gianluca",
    "Pranzare",
    "Fare l'esercitazione"
  ];

  var source = document.getElementById("entry-template").innerHTML;
  var template = Handlebars.compile(source);

  for (var i = 0; i < list.length; i++) {

    var context = {
      text: list[i]
    };
    var html = template(context);
    $("#to-do").append(html);

  }

  $(document).on("click", ".fa-check-circle",
    function() {
      $(this).parent().remove();
    }
  );

  $("input").keypress(function(event){
    if(event.which == 13 || event.keyCode == 13) {
      var newText = $("[name='add-activity']").val();

      var context = {
        text: newText
      };
      var html = template(context);
      $("#to-do").append(html);

      $("input").val("");
      
    }
  });

});
