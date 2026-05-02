import { useState } from "react";

import './App.css';
import Header from "./components/Header";
import TodoInput from "./components/TodoInput";
import TodoListItems from "./components/TodoListItems";
import TodoProgress from "./components/TodoProgress";


/* ["todo1", "todo2"]
  [{
    text: "todo1",
    isComplited: true,
  }, {
    text: "todo2",
    isComplited: false,
  }]
  이렇게 객체로 나눠서, 할일이 체크(완료)되면 true, false로 확인해 취소선 그어줄 수 있겠다
*/

function App() {
  const [todos, setTodos] = useState([]);

  const handleCreate = (value) => {
    setTodos([
      ...todos,
      {
        id: Math.random(), //토글될 아이 식별 //자바스크립트에서 가져오는 랜덤한 값
        text: value, //투두에 들어갈 텍스트
        isCompleted: false, //완료됨을 확인할 값
      },
    ]);
  };
  //투두인풋 추가 버튼 누르면 -> 인풋의 밸류 값이 온크리에이트(인풋에 들어간 밸류값)로 받아지고
  //이스컴플리티드 불리언값 확인해서 취소선 그어줄 수 있음

  const handleToggle = (id) => {
    const nextTodos = todos.map((todo) => {
      if (todo.id !== id) {
        return todo;
      }

      return {
        ...todo,
        isCompleted: !todo.isCompleted, //! not 연산자를 이용해 이즈컴플리티드 값 반대로 토글시킴
      };
    });

    setTodos(nextTodos);
  };

  const handleDelete = (id) => {
    const nextTodos = todos.filter((todo) => {
      if (todo.id != id) {
        return true;
      }

      return false;
    });

    setTodos(nextTodos);
  };

  return (
    <div className="todoContainer">
      <Header />
      <TodoInput onCreate={handleCreate} />
      <TodoListItems todos={todos} onToggle={handleToggle} onDelete={handleDelete} />
      <TodoProgress todos={todos} />
      {/* 상태는 부모에서 자식으로 흐를 수 있음. 그런데 위의 상황은 부모/자식 개념이 아니기 때문에 상태를 직접적으로 공유할 수 없음 */}
      {/* 그래서 App() 컴포넌트 위로 상태를 끌어올린 후 재전파하는 과정이 필요함 -> 상태 리프팅 */}
    </div>
  );
}

export default App
