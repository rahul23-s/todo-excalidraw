import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Axios from "axios";

const Todo = () => {
  const [Todo, setTodo] = useState("");
  const [AllTodos, setAllTodos] = useState([]);

  useEffect(() => {
    Axios.get("https://todo-excalidraw.herokuapp.com/todo").then(
      (responseData) => {
        setAllTodos(responseData.data);
      }
    );
  }, [AllTodos]);

  const addTodo = () => {
    Axios.post("https://todo-excalidraw.herokuapp.com/addtodo", {
      TodoTitle: Todo,
    });
    setTodo("");
    setAllTodos(["updated"]);
  };

  const handleKeypress = (e) => {
    if (e.keyCode === 13) {
      addTodo();
      console.log(e);
    }
  };

  const markComplete = (id) => {
    Axios.put("https://todo-excalidraw.herokuapp.com/mark", { id: id });
    setAllTodos(["updated"]);
  };
  const deleteTodo = (id) => {
    Axios.delete(`https://todo-excalidraw.herokuapp.com/delete/${id}`);
    setAllTodos(["deleted"]);
  };

  return (
    <Container>
      <Heading>
        <h1>
          <i className="fas fa-clipboard-list"></i>ToDo List
        </h1>
        <h5>~Get Organised & Productive</h5>
      </Heading>
      <Content>
        <AddTodo>
          <input
            type="text"
            onChange={(event) => {
              setTodo(event.target.value);
            }}
            value={Todo}
            placeholder="Write your Todo Here: "
            onKeyPress={handleKeypress}
          />
          <button onClick={addTodo}>
            <i className="fas fa-plus-square"></i>
          </button>
        </AddTodo>
        <TodoList>
          <thead>
            <tr>
              <th className="col1">All-Your-Todos </th>
              <th>Status</th>
              <th>Created On</th>
              <th>Completed On</th>
            </tr>
          </thead>
          <tbody>
            {AllTodos.map((val, key) => {
              return (
                <tr key={val._id}>
                  <td className="todo-title">
                    ⦿&emsp;{val.TodoTitle}
                    <div>
                      {val.Status ? (
                        <i
                          className="fas fa-clipboard-check"
                          style={{ color: "#00e600" }}
                        ></i>
                      ) : (
                        <i
                          onClick={() => markComplete(val._id)}
                          className="fas fa-clipboard-check"
                        ></i>
                      )}
                      <i
                        className="fas fa-trash-alt"
                        onClick={() => deleteTodo(val._id)}
                        style={{ color: "#cd0000" }}
                      ></i>
                    </div>
                  </td>
                  <td>
                    {val.Status ? (
                      <i
                        className="fas fa-check-circle"
                        style={{ color: "#00e600" }}
                      ></i>
                    ) : (
                      "Pending"
                    )}
                  </td>
                  <td>{val.Created}</td>
                  <td>{val.Completed === null ? "-" : val.Completed}</td>
                </tr>
              );
            })}
          </tbody>
        </TodoList>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  margin-top: 70px;
  flex-direction: column;
  align-items: center;
  min-height: calc(100vh - 70px);
  height: fit-content;
  background-image: linear-gradient(
    109.6deg,
    rgba(48, 207, 208, 1) 11.2%,
    rgba(51, 8, 103, 1) 92.5%
  );
  overflow: contain;
`;

const Heading = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  width: 100%;
  height: 10vh;
  h1 {
    font-size: 3rem;
    color: #ffffff;
    padding: 10px;
    background-color: #090b13;
    border-radius: 0px 0px 25px 25px;
    i {
      padding: 0 10px;
    }
  }
  h5 {
    font-size: 1rem;
    color: #ffffff;
  }
`;
const Content = styled.div`
  height: calc(100% - 100px);
  width: 90%;
  margin-top: 20px;
  /* border-radius: 30px; */
  background-color: #f1f1f1;
  opacity: 0.9;
  margin-bottom: 10vh;
  @media (max-width: 768px) {
    height: fit-content;
  }
`;

const AddTodo = styled.div`
  width: 100%;
  height: 45px;
  border: 2px solid #ffffff;
  position: relative;
  top: 0;
  background: #ffffff;
  display: flex;
  align-items: center;

  input {
    height: 100%;
    width: calc(100% - 50px);
  }

  button {
    width: fit-content;
    height: fit-content;
    border: none;
    background-color: transparent;
    i {
      font-size: 35px;
      height: 100%;
      transition: 200ms;

      &:hover {
        color: #31a5ba;
        transform: rotate(90deg);
      }
    }
    position: relative;
    left: 5px;
    transform: scale(1.35);
  }
`;

const TodoList = styled.table`
  width: 100%;

  height: fit-content;
  padding-bottom: 10vh;
  .col1 {
    width: 64%;
  }

  th {
    background: #090b13;
    color: #ffffff;
  }

  td,
  th {
    border: 1px solid #999;
    padding: 0.5rem;
    width: 12%;
    text-align: center;
    font-size: 20px;
    font-weight: bolder;
    word-wrap: contain;
  }

  tbody {
    height: 100%;
    overflow-y: auto;
  }

  td {
    i {
      font-size: 25px;
      margin: 20px;
      cursor: pointer;
    }
    height: fit-content;
  }

  .todo-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 65vw;
    height: 100%;
  }

  @media (max-width: 768px) {
    th,
    td,
    tr div {
      font-size: 10px;
    }

    height: fit-content;

    .todo-title,
    .todo-title div {
      padding: 2px;
      font-size: 12px;
      word-wrap: break-word;
      overflow: contain;
    }

    .todo-title {
      width: 100%;
      /* max-width: 75vw; */
      overflow-wrap: break-word;

      div {
        display: block;
      }
    }

    .todo-title div i {
      font-size: 13px;
      padding: 0;
      margin: 5px;
    }
    td {
      height: fit-content;
      i {
        font-size: 13px;
        margin: 0;
        padding: 0;
      }
    }
  }
  transform-origin: 0 0;
`;

export default Todo;
