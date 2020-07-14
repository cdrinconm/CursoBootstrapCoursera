$(function(){
  $("[data-toggle='tooltip'").tooltip();
  $("[data-toggle='popover'").popover();
  $('.carousel').carousel({
    interval: 3000
  });
  $('#registroModal').on('show.bs.modal', function(e){
    console.log("se esta abriendo el modal");
    $('#registro').removeClass('btn-outline-primary');
    $('#registro').addClass('btn-success');
    $('#registro').prop('disabled', true);
  });
  $('#registroModal').on('shown.bs.modal', function(e){
    console.log("se abrio el modal");
  });
  $('#registroModal').on('hide.bs.modal', function(e){
    console.log("se esta cerrando el modal");
  });
  $('#registroModal').on('hidden.bs.modal', function(e){
    console.log("se cerro el modal");
    $('#registro').removeClass('btn-success');
    $('#registro').addClass('btn-outline-primary');
    $('#registro').prop('disabled', false);
  });
});