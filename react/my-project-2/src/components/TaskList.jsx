

export function TaskList({ tasks }) {
  return (
    <div>
      <h2>Task List</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>   // key is required when rendering lists
        ))}
      </ul>
    </div>
  );
}
