import { RiTodoLine } from "react-icons/ri";
import Week from "../components/Week";
import InputToDo from "../components/InputToDo";
import ToDoList from "../components/ToDoList";
import styled from "styled-components";

const HomepageContainer = styled.div`
  min-width: 600px;
  font-size: 20px;

  p {
    font-size: 40px;
    text-align: center;
    color: hsl(354, 79%, 76%);
  }
`;

function Homepage({ toDoList, setToDoList }) {
  return (
    <HomepageContainer>
      <Week />
      <p>
        <RiTodoLine id="noteImg" />
        오늘의 할 일 ({toDoList.length})
      </p>
      <InputToDo />
      <ToDoList toDoList={toDoList} setToDoList={setToDoList} />
    </HomepageContainer>
  );
}

export default Homepage;
