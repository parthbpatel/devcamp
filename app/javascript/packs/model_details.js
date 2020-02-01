//= require jquery
//= require jquery_ujs
//= require popper
//= require bootstrap/bootstrap-rails-tooltip
//= require bootstrap/bootstrap-rails-popover

document.addEventListener("turbolinks:load", function() {
  $(".element").click(function(){
    $("[data-toggle='tooltip']").tooltip('show');
  });
});

// $('#element').tooltip('show')
