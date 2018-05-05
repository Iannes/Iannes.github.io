
$(document).ready(() => {

  const input = "input[type='text']";
  const clearIcon = "<span class='close'><a class='btn-floating btn-small waves-effect waves-light red'><i class='material-icons'>clear</i></a></span>";

  // Check Off Specific Todos By Clicking them
  $(".container").on("click", "li", function () {
    $(this).toggleClass("completed");
  });

  //Click on trash icon to delete Todo
  $(".container").on("click", ".close", function (event) {
    $(this).parent().fadeOut(800, () => {
      $(this).remove();
    });
    event.stopPropagation();
  });

  // When plus button is clicked on mobile add items
  $(document).on("click", '#addMobile', (event) => {
    //if there is any text store it else focus on input
    const hasValue = $(input).val();
    if (hasValue) {
      let todoText = hasValue;
      $(input).val("");
      // Append a new list item
      $(".inner-container ul").append(`<li>${clearIcon}${todoText}</li>`)
    } else {
      $('input').focus();
    }
  });
})

// Bind enter keypress with click function
$("input").keypress((e) => {if (e.which === 13) {$("#addMobile").click();}});

