$('.datepicker').datepicker({
  format: 'dd/mm/yyyy',
  startDate: '-3d',
  autoclose: true,
  todayHighlight: true
});
$(function () {
  $('.panel-group-submit').click(function () {
    $(this).stop().animate({
      width: '300px',
      height: '300px'
    });
    $('.collapse').show();
  });
  /* close modal on href*/
  $('#modal').on('hidden.bs.modal', function (e) {
    $('html, body').animate({ scrollTop: $('#pricing').offset().top }, 2000);
  });
  /* close modal on href*/
  /* modal text area */
  $('.modal').on('shown.bs.modal', function () {
    $('.form-control').focus();
  });
});