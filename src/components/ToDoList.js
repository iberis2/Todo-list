import "./ToDoList.css";
import { GrCheckbox, GrCheckboxSelected } from "react-icons/gr";

function ToDoList({ toDoList, setToDoList }) {
  const handleDelete = (e) => {
    fetch(`http://localhost:3001/data/${e.target.value}`, {
      method: "DELETE",
    })
      .then(() => {
        window.location.reload();
      })
      .catch((err) => console.log(err.message));
  };

  const handleClick = (e) => {
    const checkedList = toDoList.map((todo, index) => {
      let checked =
        index === Number(e.target.value) ? !todo.checked : todo.checked;
      return { ...todo, checked };
    });
    setToDoList(checkedList);
  };

  return (
    <div id="toDoList">
      <ul>
        {toDoList.map(({ content, id, checked }, index) => {
          return (
            <div id="listContainer" key={id}>
              {checked ? <GrCheckboxSelected /> : <GrCheckbox />}
              <li
                id="check"
                className={checked ? "checked" : ""}
                value={index}
                onClick={handleClick}
              >
                {content}
              </li>
              <button value={id} onClick={handleDelete}>
                삭제
              </button>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default ToDoList;
