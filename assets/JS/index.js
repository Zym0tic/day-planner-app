// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist

// setting date
var currentDay = ('#currentDay');
var currentTime = moment().format('LT');
var hour = document.querySelector('.hour');
var btn1 = $('.saveBtn1');
var btn2 = $('.saveBtn2');
var btn3 = $('.saveBtn3');
var btn4 = $('.saveBtn4');
var btn5 = $('.saveBtn5');
var btn6 = $('.saveBtn6');
var btn7 = $('.saveBtn7');
var btn8 = $('.saveBtn8');
var btn9 = $('.saveBtn9');
var saveBtn = [btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8, btn9];
var timeBlock = $('.timeBlock');



$(currentDay).text(moment().format('MMMM Do YYYY'));


for (i = 0; i < saveBtn.length; i ++) {
    saveBtn[i].on('click', function() {
    var activity = $('textarea[name="activity"]').val();
    console.log(activity);
});
};




