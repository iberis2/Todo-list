import Clock from "react-live-clock";
import "./Week.css";

const DatesArray = (today, lastDay) => {
  let dates = [];

  dates[0] = today;
  for (let i = 1; i <= 6; i++) {
    today++;

    if (today > lastDay) {
      today = 1;
      dates[i] = today;
    } else {
      dates[i] = today;
    }
  }
  return dates;
};

const DaysArray = (todayWeek) => {
  let strWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let weekly = [];

  weekly[0] = strWeek[todayWeek];

  for (let i = 1; i <= 6; i++) {
    todayWeek++;
    if (todayWeek > 6) {
      todayWeek = 0;
      weekly[i] = strWeek[todayWeek];
    } else {
      weekly[i] = strWeek[todayWeek];
    }
  }
  return weekly;
};

function Week() {
  const now = new Date();
  const todayWeek = now.getDay();
  const today = now.getDate();
  const lastDay = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();

  const DatesOfThisWeek = DatesArray(today, lastDay);
  const DaysOfThisWeek = DaysArray(todayWeek);

  const weeklyObject = [
    { id: "000", dates: DatesOfThisWeek[0], day: DaysOfThisWeek[0] },
    { id: "001", dates: DatesOfThisWeek[1], day: DaysOfThisWeek[1] },
    { id: "002", dates: DatesOfThisWeek[2], day: DaysOfThisWeek[2] },
    { id: "003", dates: DatesOfThisWeek[3], day: DaysOfThisWeek[3] },
    { id: "004", dates: DatesOfThisWeek[4], day: DaysOfThisWeek[4] },
    { id: "005", dates: DatesOfThisWeek[5], day: DaysOfThisWeek[5] },
    { id: "006", dates: DatesOfThisWeek[6], day: DaysOfThisWeek[6] },
  ];

  return (
    <div id="weekCalender">
      <div className="Year-Month">
        <Clock
          id="year"
          format={"YYYY"}
          ticking={false}
          timezone={"Asia/Seoul"}
        />
        &nbsp;&nbsp;
        <Clock
          id="month"
          format={"MMM"}
          ticking={false}
          timezone={"Asia/Seoul"}
        />
      </div>
      <div id="Weekly">
        {weeklyObject.map(({ dates, day, id }) => {
          return (
            <span className="dates-day" key={id}>
              <span
                className={
                  day === "Sat" ? "Sat" : day === "Sun" ? "Sun" : "day"
                }
              >
                {day}
              </span>
              <span className="dates">{dates}</span>
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default Week;

// https://velog.io/@lifeisbeautiful/React-%EC%9D%BC%EC%A3%BC%EC%9D%BC-%EB%8B%AC%EB%A0%A5-%EB%A7%8C%EB%93%A4%EA%B8%B0
