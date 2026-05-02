import { useState } from "react";

const TodoInput = ({ onCreate }) => {
  const [text, setText] = useState("");

  return (
    <div className="todoInput">
      <input
        placeholder="할 일을 입력해주세요!"
        type="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button
        onClick={() => {
          if (text.length === 0) {
            alert("텍스트를 입력해주세요!");

            return;
          }

          onCreate({
            id: Math.random(),
            text,
            completed: false,
          });

          setText("");
        }}
      >
        추가
      </button>
    </div>
  );
};

export default TodoInput;
