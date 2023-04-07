import axios from "axios";
import { useState } from "react";
import shortid from "shortid";
import styled from "styled-components";

const InputContainer = styled.div`
  min-width: 60%;
`;

const Label = styled.label`
  display: flex;
`;

const Input = styled.input`
  width: 100%;
  padding-left: 5px;
  margin-right: 5px;
  box-shadow: 3px 3px 3px 1px #d8d8d8;
  border-radius: 5px;
  border: 0.3px solid #d8d8d8;
  height: 30px;

  :focus {
    outline: none !important;
    box-shadow: inset 2px 2px 1px #d8d8d8;
  }
`;

const Button = styled.button`
  min-width: 40px;
  cursor: pointer;
  box-shadow: 3px 3px 3px 1px #d8d8d8;

  :active {
    box-shadow: none;
  }
`;

function InputToDo() {
  const [newTodo, setNewTodo] = useState("");

  const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };
  const body = JSON.stringify({
    id: shortid.generate(),
    content: newTodo,
    checked: false,
  });
  const url = "http://localhost:3001/data";

  const changeNewTodo = (e) => {
    setNewTodo(e.target.value);
  };

  const handleInputClick = () => {
    fetch(url, {
      method: "POST",
      headers,
      body,
    })
      .then(() => {
        window.location.reload();
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const handleInputEnter = async (e) => {
    if (e.key === "Enter") {
      try {
        await axios.post(url, {
          id: shortid.generate(),
          content: newTodo,
          checked: false,
        });
        window.location.reload();
      } catch (error) {
        console.log(error.message);
      }
    }
  };

  return (
    <InputContainer>
      <Label htmlFor="newTodo">
        <Input
          id="newTodo"
          type="text"
          placeholder="할 일을 입력하세요."
          value={newTodo}
          onChange={changeNewTodo}
          onKeyDown={handleInputEnter}
        />
        <Button onClick={handleInputClick}>추가</Button>
      </Label>
    </InputContainer>
  );
}

export default InputToDo;
