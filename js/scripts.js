// Business Logic
function todoList(list) {
  this.item = list;
}

$(function() {
  $("form#todo").submit(function(event) {
    event.preventDefault();
    var listItem = $("input#todoItem").val();
    var addItem = new todoList(listItem);

// Front End Logic
    $("ul#list-1").append("<li><span class='listItems'>"+ addItem.item +"</span></li>");

    $("li").on('click', function(){
      var element = this;
      $("ul#list-2").append(element);
      console.log(element);
      $(this).hide();
      $(element).show();
    });
    $("input#todoItem").val("");

  });
});
