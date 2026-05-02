import { useState } from "react";

const TodoInput = ({onCreate}) => {
    const [value, setValue] = useState("");

    return (
        <div className="todoInput">
            <input
                placeholder="할 일을 입력해주세요!"
                value={value}
                onChange={(e) => {
                    setValue(e.target.value);
                }}
            />
            <button onClick={() => {
                if (value.length === 0) {
                    alert("할 일을 입력해주세요!");
                    return;
                }
                onCreate(value);
                setValue("");
            }}>추가</button>
        </div>
    );
};

export default TodoInput;