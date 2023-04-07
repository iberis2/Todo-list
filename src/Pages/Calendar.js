import Calendar1 from "react-calendar";
import { useState } from "react";
import styled from "styled-components";

const CalendarContainer = styled.div`
  width: 600px;
  height: 100vh;

  .react-calendar {
    background-color: #fff;
    color: #222;
    border-radius: 8px;
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
    font-family: Arial, Helvetica, sans-serif;
    line-height: 3em;
  }
  .react-calendar__navigation {
    display: flex;
    height: 50px;
  }

  .react-calendar__navigation button {
    color: #93909c;
    min-width: 100px;
    background: none;
    font-size: 16px;
    margin-top: 8px;
  }
  .react-calendar__navigation button:enabled:hover, // 년도에 hover
  .react-calendar__navigation button:enabled:focus {
    background-color: #f3f3f3;
  }
  .react-calendar__navigation button[disabled] {
    background-color: #ffd8ff;
  }
  abbr[title] {
    text-decoration: none;
  }
  .react-calendar__month-view__weekdays__weekday {
    // 월 ~금
    height: 80px;
    text-align: center;
    line-height: 80px;
    background: pink;
    font-weight: bold;
    font-size: 20px;
    color: #ffffff;
  }
  .react-calendar__month-view__days__day {
    // 1일 2일 ~
    height: 80px;
    background: none;
  }

  .react-calendar__tile:enabled:hover,
  .react-calendar__tile:enabled:focus {
    background: #f3f3f3;
    color: #ffabc5;
    border-radius: 6px;
  }
  .react-calendar__tile--now {
    // 오늘 날짜
    background: #ffabc5;
    border-radius: 6px;
    font-weight: bold;
    color: #ffffff;
  }
  .react-calendar__tile--now:enabled:hover, // 오늘 날짜 hover & focus
  .react-calendar__tile--now:enabled:focus {
    background: #ffabc5;
    border-radius: 6px;
    font-weight: bold;
    color: #ffffff;
  }
  .react-calendar__tile--hasActive:enabled:hover,
  .react-calendar__tile--hasActive:enabled:focus {
    background: #ffabc5;
  }
  .react-calendar__tile--active {
    background: #ff76a6; // 진한핑크
    border-radius: 6px;
    font-weight: bold;
    color: #ffffff;
  }
  .react-calendar__tile--active:enabled:hover, // 선택한 날짜 hover & focus 다른 배경 클릭했을 때
  .react-calendar__tile--active:enabled:focus {
    background: #ff76a6; // 진한핑크
    color: #ffffff;
  }
  .calendar-textarea {
    background: #f3f3f3;
    color: #93909c;
    margin-top: 20px;
    padding: 10px;
    border-radius: 6px;
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
  }
`;

function Calendar() {
  const [value, onChange] = useState(new Date());
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
    timeZone: "Asia/Seoul",
  };
  const formatter = new Intl.DateTimeFormat("ko-KR", options);
  return (
    <CalendarContainer>
      <Calendar1 onChange={onChange} value={value} />
      <p className="calendar-textarea">
        <span className="calendar-clicked">선택한 날짜:</span>{" "}
        {formatter.format(value)}
      </p>
    </CalendarContainer>
  );
}

export default Calendar;
