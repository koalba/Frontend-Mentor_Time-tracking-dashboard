function create_timecard() {
  var myContainer = document.querySelector(".container");
  elements.forEach((item, i) => {
    var timecard = document.createElement("div");

    var time_week = calculate_week(item);
    var time_this_week = time_week[0];
    var time_last_week = " Week - " + time_week[1];
    var time_month = calculate_month(item);
    var time_this_month = time_month[0];
    var time_last_month = " Month - " + time_month[1];

    timecard.classList.add("time-card");
    timecard.classList.add("time-card--" + item.time_name);

    timecard.innerHTML =
      "<div class='time-card__icon'></div>" +
      "<div class='time-card__info'>" +
      "<div class='d-flex time-card__upper'>" +
      "<p class='time-card__title'>" +
      item.time_name +
      "</p>" +
      "<div class='time-card__menu'>" +
      "<svg class='menu-icon' width='21' height='5' xmlns='http://www.w3.org/2000/svg'><path d='M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z' fill-rule='evenodd'/></svg>" +
      "</div>" +
      "</div>" +
      "<div class='d-flex'>" +
      "<p class='text--big time-card__time'>" +
      "<span class='time-card__hours'>" +
      time_this_week +
      "</span>hrs</p>" +
      "<p class='text--small'>Last<span class='time-card__hours--last'>" +
      time_last_week +
      "</span>hrs</p>" +
      "</div>" +
      "</div>";

    myContainer.appendChild(timecard);
  });
}

function calculate_week(time) {
  var time_this_week = 0;
  var time_last_week = 0;
  time.time_h_day.reverse();
  time.time_h_day.forEach((hour, h) => {
    if (h <= 7) {
      time_this_week = time_this_week + hour;
    } else if (h > 7 && h <= 14) {
      time_last_week = time_last_week + hour;
    }
  });

  var time_week = [time_this_week, time_last_week];

  return time_week;
}

function calculate_month(time) {
  var today = new Date();
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();

  var daysinMonth = new Date(yyyy, mm, 0).getDate();
  var daysinLastMonth = new Date(yyyy, mm - 1, 0).getDate();

  var time_this_month = 0;
  var time_last_month = 0;

  time.time_h_day.forEach((hour, h) => {
    if (h <= daysinMonth) {
      time_this_month = time_this_month + hour;
    } else if (h > daysinMonth && h <= daysinLastMonth) {
      time_last_month = time_last_month + hour;
    }
  });

  var time_month = [time_this_month, time_last_month];

  return time_month;
}

create_timecard();
