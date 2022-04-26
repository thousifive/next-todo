function AddForm({
  users,
  todos,
  editdata,
  setEditdata,
  setTodos,
  formActive,
  setFormActive,
  editFormActive,
  setEditFormActive,
}) {
  const addTodoItem = (e) => {
    e.preventDefault();
    if (editFormActive) {
      const newTodos = todos.map((todo) => {
        if (todo.id === editdata.id) {
          return {
            ...todo,
            title: e.target.elements[0].value,
            priority: e.target.elements[1].value,
            assignedTo: e.target.elements[2].value,
          };
        } else {
          return todo;
        }
      });
      setTodos(newTodos);
      setEditFormActive(false);
      setEditdata({});
    } else {
      const newTodo = {
        id: todos.length + 1,
        title: e.target.elements[0].value,
        priority: e.target.elements[1].value,
        createdBy: e.target.elements[2].value,
        assignedTo: e.target.elements[3].value,
      };
      setTodos([...todos, newTodo]);
    }
    setFormActive(false);
  };

  const makeFormInactive = () => {
    if (editFormActive) {
      setEditFormActive(false);
    }
    setFormActive(false);
  };

  const deleteTodo = () => {
    const newTodos = todos.filter((todo) => todo.id !== editdata.id);
    setTodos(newTodos);
  };

  return (
    <div className="h-full w-full">
      {formActive ? (
        <form onSubmit={addTodoItem} className="h-full w-full">
          <div className="bg-white h-45rem w-full rounded shadow-lg p-4">
            <div className="flex flex-row w-full justify-between">
              <h1 className="text-xl text-blue-500">
                {editFormActive ? "Edit todo" : "Add todo"}
              </h1>
            </div>
            <div className="flex flex-col mt-4">
              <label className="text-sm text-gray-700">Title</label>
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                type="text"
                placeholder="Title"
                defaultValue={
                  editFormActive && editdata.title ? editdata.title : ""
                }
              />
            </div>
            <div className="flex flex-col mt-4">
              <label className="text-sm text-gray-700">Priority</label>
              <select
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                defaultValue={
                  editFormActive && editdata.priority ? editdata.priority : ""
                }
              >
                <option>High</option>
                <option>Medium</option>
                <option>Low</option>
              </select>
            </div>
            {!editFormActive ? (
              <div className="flex flex-col mt-4">
                <label className="text-sm text-gray-700">Created By</label>
                <select className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500">
                  {users.map((user) => (
                    <option key={user}>{user}</option>
                  ))}
                </select>
              </div>
            ) : null}
            <div className="flex flex-col mt-4">
              <label className="text-sm text-gray-700">Assigned To</label>
              <select
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                defaultValue={
                  editFormActive && editdata.assignedTo
                    ? editdata.assignedTo
                    : ""
                }
              >
                {users.map((user) => (
                  <option key={user}>{user}</option>
                ))}
              </select>
            </div>
            <div className="flex flex-row justify-between mt-4">
              <button
                className="bg-gray-200 text-gray hover:bg-gray-300 py-2 px-4 rounded"
                onClick={makeFormInactive}
              >
                Cancel
              </button>
              <button
                className="bg-[#b338ff] hover:bg-purple-700 text-white py-2 px-4 rounded"
                type="submit"
              >
                {editFormActive ? "Save Changes" : "Add"}
              </button>
            </div>
            {editFormActive ? (
              <div className="flex justify-end mt-4">
                <button
                  className="bg-[#b338ff] hover:bg-purple-700 text-white py-2 px-4 rounded"
                  onClick={deleteTodo}
                >
                  Mark complete
                </button>
              </div>
            ) : null}
            {editFormActive ? (
              <div className="flex justify-end mt-4">
                <button
                  className="bg-[#b338ff] hover:bg-purple-700 text-white py-2 px-4 rounded  "
                  onClick={deleteTodo}
                >
                  Delete todo
                </button>
              </div>
            ) : null}
          </div>
        </form>
      ) : null}
    </div>
  );
}

export default AddForm;
