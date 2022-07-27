var currentDay = ('#currentDay');

window.setInterval(function () {
    $('#currentDay').html(moment().format('dddd, MMMM do YYYY'))
  }, 1000);