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
var currentDay = "#currentDay";
var currentTime = moment().format("LT");
var hour = document.querySelector(".hour");
var today = moment().format("H");
var timeBlock = $(".time-block");
var container = $(".container");
var textAreas = [
  $("#9"),
  $("#10"),
  $("#11"),
  $("#12"),
  $("#13"),
  $("#14"),
  $("#15"),
  $("#16"),
  $("#17"),
];
var textAreaNum = [9, 10, 11, 12, 13, 14, 15, 16, 17];

$(currentDay).text(moment().format("MMMM Do YYYY"));

container.on("click", ".btn", function (event) {
  var activity = $(event.target).siblings("textarea").val();

  localStorage.setItem("activity", activity);
});

console.log(today);
console.log(textAreaNum);

for (i = 0; i < textAreas.length; i++) {
if (today === textAreaNum[i]) {
    textAreas[i].addClass("present");
} else if (today > textAreaNum[i]) {
    textAreas[i].addClass("past");
} else {
    textAreas[i].addClass("future");
};
}
