import { useState } from "react";
import { useRouter } from "next/router";
import { Animated } from "react-animated-css";
import AddForm from "../Components/AddForm";

export default function Alltodos({ homeActive, setHomeActive }) {
  const router = useRouter();
  const todolist = [
    {
      id: 1,
      title: "Learn React",
      priority: "High",
      createdBy: "John P",
      assignedTo: "John P",
    },
    {
      id: 2,
      title: "Learn GraphQL",
      priority: "Low",
      createdBy: "Carlos",
      assignedTo: "Carlos",
    },
    {
      id: 3,
      title: "Learn Next.js",
      priority: "Medium",
      createdBy: "Leclerc",
      assignedTo: "Leclerc",
    },
    {
      id: 4,
      title: "Learn Node.js",
      priority: "High",
      createdBy: "Lewis H",
      assignedTo: "Lewis H",
    },
    {
      id: 5,
      title: "Learn MongoDB",
      priority: "Low",
      createdBy: "Seb V",
      assignedTo: "Seb V",
    },
  ];
  const userData = ["John P", "Carlos", "Leclerc", "Lewis H", "Seb V"];
  const [todos, setTodos] = useState(todolist);
  const [users, setUsers] = useState(userData);
  const [formActive, setFormActive] = useState(false);
  const [editdata, setEditdata] = useState({});
  const [editFormActive, setEditFormActive] = useState(false);

  const editForm = (currenttodo) => {
    setFormActive(true);
    setEditFormActive(true);
    setEditdata(currenttodo);
  };

  const makeFormActive = () => {
    setEditFormActive(false);
    setFormActive(true);
  };

  return (
    <div className="flex h-full">
      <div className="container rounded h-full flex flex-col items-center">
        <div
          id="react-table"
          className="bg-[#ffffff] mt-14 ml-64 border-gray-200 w-8/12 rounded-lg shadow-lg overflow-hidden"
        >
          <div id="title-add" className="flex m-1 flex-row justify-between">
            <button
              className="text-xl text-blue-500"
              onClick={() => router.push("/alltodos")}
            >
              All todos
            </button>
            {!homeActive ? (
              <button
                className="bg-[#b338ff] hover:bg-purple-700 text-white py-2 px-4 rounded"
                onClick={makeFormActive}
              >
                + Add
              </button>
            ) : null}
          </div>
          <table className="table w-full table-striped rounded">
            <thead className="bg-gray-50 border-gray-200">
              <tr>
                <th className="p-3 text-sm w-7/12 font-semibold tracking-wide text-left">
                  Todos
                </th>
                <th className="p-3 text-sm w-1/12 font-semibold tracking-wide text-left">
                  Priority
                </th>
                {!homeActive ? (
                  <th className="p-3 text-sm w-2/12 font-semibold tracking-wide text-left">
                    Created By
                  </th>
                ) : null}
                <th className="p-3 text-sm w-2/12 font-semibold tracking-wide text-left">
                  Assigned To
                </th>
                {!homeActive ? (
                  <th className="p-3 text-sm w-1/12 font-semibold tracking-wide text-left">
                    Action
                  </th>
                ) : null}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {todos ? (
                todos.map((todo) => (
                  <tr key={todo.id}>
                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                      {todo.title}
                    </td>
                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                      {todo.priority.toLowerCase() === "high" ? (
                        <p className="bg-red-300 text-xs text-red-700 text-center rounded">
                          {todo.priority}
                        </p>
                      ) : (
                        <p className="bg-green-300 text-xs text-green-700 text-center rounded">
                          {todo.priority}
                        </p>
                      )}
                    </td>
                    {!homeActive ? (
                      <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                        {todo.createdBy}
                      </td>
                    ) : null}
                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                      {todo.assignedTo}
                    </td>
                    {!homeActive ? (
                      <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                        <a
                          className="text-blue-600"
                          onClick={() => editForm(todo)}
                        >
                          Edit
                        </a>
                      </td>
                    ) : null}
                  </tr>
                ))
              ) : (
                <tr>
                  <td>
                    <h3>You have no todos</h3>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
          {homeActive ? (
            <div>
              <button
                className="text-red-500 hover:text-red-700 py-2 px-4 rounded"
                onClick={() => router.push("/alltodos")}
              >
                View all
              </button>
            </div>
          ) : null}
        </div>
      </div>
      <div className="w-1/3 h-full mt-0 self-end">
        {formActive ? (
          <Animated
            className="w-full h-full"
            animationIn="fadeIn"
            animationOut="fadeOut"
            // animationIn="slideInRight"
            // animationOut="zoomOutDown"
            animationInDuration={1000}
            animationOutDuration={1000}
            isVisible={true}
          >
            <AddForm
              users={users}
              todos={todos}
              editdata={editdata}
              setEditdata={setEditdata}
              setTodos={setTodos}
              formActive={formActive}
              setFormActive={setFormActive}
              editFormActive={editFormActive}
              setEditFormActive={setEditFormActive}
            />
          </Animated>
        ) : null}
      </div>
    </div>
  );
}
