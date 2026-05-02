const TodoProgress = ({ todos }) => {
    const completedTodos = todos.filter((todo) => todo.isCompleted);
    const completedCount = completedTodos.length;
    const allCount = todos.length;
    const progressRatio = (completedCount / allCount) * 100;

    if (allCount === 0) {
        return null;
    }

    return (
        <div className="todoProgress">
            <div>{completedCount} / {allCount}</div>
            <progress value={progressRatio} max="100" />
            <div>{Math.floor(progressRatio)}%</div>
        </div>
    );
};

export default TodoProgress;