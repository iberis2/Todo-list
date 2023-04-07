import styled from "styled-components";
import {
  BsFillBrightnessHighFill,
  BsFillCalendarDayFill,
} from "react-icons/bs";
import { RiTodoLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const SideContainer = styled.div`
  background-color: pink;
  width: 100px;
  margin-left: 20px;
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .icon {
    font-size: 50px;
    color: #fffbf4;
    margin-top: 20px;
    margin-bottom: 20px;
  }
`;

function Sidebar() {
  return (
    <SideContainer>
      <Link to="/">
        <RiTodoLine className="icon" />
      </Link>
      <Link to="weather">
        <BsFillBrightnessHighFill className="icon" />
      </Link>
      <Link to="calendar">
        <BsFillCalendarDayFill className="icon" />
      </Link>
    </SideContainer>
  );
}

export default Sidebar;
