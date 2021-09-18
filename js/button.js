var myTime = "week";

function changeTime(element) {
  var myMenu = document.querySelectorAll(".user-nav__item");

  myMenu.forEach((item, i) => {
    item.classList.remove("user-nav__item--active");
  });

  element.classList.add("user-nav__item--active");

  checkTime(element.innerHTML.replace(/\s/g, ""));
  calculateChangeTime();
}

function checkTime(nav_time) {
  if (nav_time == "Daily") {
    myTime = "day";
  } else if (nav_time == "Weekly") {
    myTime = "week";
  } else if (nav_time == "Monthly") {
    myTime = "month";
  }
}

function calculateChangeTime(element) {
  elements.forEach((item, i) => {
    var myHours = document.querySelector(
      ".time-card--" + item.time_name + " .time-card__hours"
    );
    var myLastHours = document.querySelector(
      ".time-card--" + item.time_name + " .time-card__hours--last"
    );

    myHours.innerHTML = "";
    myLastHours.innerHTML = "";

    var time_week = calculate_week(item);
    var time_month = calculate_month(item);

    var show_time = 0;
    var show_time_last = 0;

    if (myTime == "day") {
      show_time = item.time_h_day[0];
      show_time_last = " Day - " + item.time_h_day[1];
    } else if (myTime == "week") {
      show_time = time_week[0];
      show_time_last = " Week - " + time_week[1];
    } else if (myTime == "month") {
      show_time = time_month[0];
      if (time_month[1] > 0) {
        show_time_last = " Month - " + time_month[1];
      } else {
        show_time_last = " Month - /";
      }
    }

    myHours.innerHTML = show_time;
    myLastHours.innerHTML = show_time_last;
  });
}
