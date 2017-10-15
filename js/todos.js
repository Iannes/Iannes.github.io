$(document).ready(function () {

  var input = "input[type='text']";
  // var trashIcon = "<span class='close'><i class='fa fa-trash'></i></span>";
  var clearIcon = "<span class='close'><a class='btn-floating btn-small waves-effect waves-light red'><i class='material-icons'>clear</i></a></span>";

  // Check Off Specific Todos By Clicking them
  $(".container").on("click", "li", function () {
    $(this).toggleClass("completed");
  });

  //Click on trash icon to delete Todo
  $(".container").on("click", ".close", function (event) {
    $(this).parent().fadeOut(500, function () {
      $(this).remove();
    });
    event.stopPropagation();
  });

  //When header plus icon is clicked hide the input
  $(".fa-plus").click(function () {
    $("input").fadeToggle()
  });

  // When plus button is clicked on mobile add items
  $(document).on("click", '#addMobile', function (event) {
    //if there is any text store it else focus on input
    var hasValue = $(input).val();
    if (hasValue) {

      var todoText = hasValue;
      $(input).val("");
      //create a new list item
      $(".inner-container ul").append("<li>"+ clearIcon + todoText + "</li>")
    } else {
      $('input').focus();
    }
  });
})

// Bind enter keypress with click function
$("input").keypress(function (e) {
  if (e.which === 13) {
    $("#addMobile").click();
  }
});

// Programmaticaly change the date on footer
var copy = document.getElementById('copy')
var date =new Date()
copy.textContent = date.getFullYear()

console.log('Looking for a developer ? Feel free to contact me on js15js@gmail.com')
