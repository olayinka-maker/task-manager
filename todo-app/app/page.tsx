import React from "react";

const TodoDashboard = () => {
  const tasks = [
    { id: 1, title: "Buy monthly groceries", completed: false },
    { id: 2, title: "Pick up the kids", completed: false },
    { id: 3, title: "Get nails and hair done", completed: false },
    { id: 4, title: "Prepare presentations", highlighted: true },
    { id: 5, title: "Go to the gym", highlighted: true },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-48 bg-white p-4 border-r">
          <div className="flex items-center gap-2 mb-8">
            <span className="text-orange-600 font-bold text-xl">To-Do App</span>
          </div>

          <button className="w-full flex items-center gap-2 mb-8">
            <span className="bg-orange-600 text-white rounded-full w-6 h-6 flex items-center justify-center">
              +
            </span>
            <span className="text-gray-800">Add Task</span>
          </button>

          <nav className="space-y-2">
            <button className="w-full text-left p-2 bg-orange-100 rounded-lg text-gray-800">
              Dashboard
            </button>
            <button className="w-full text-left p-2 text-gray-600">
              Active
            </button>
            <button className="w-full text-left p-2 text-gray-600">
              Completed
            </button>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h1 className="text-2xl font-bold mb-2">
                Hello, Beautiful Human!
              </h1>
              <p className="text-gray-600">What do you want to do today?</p>
            </div>
            <button className="bg-orange-600 text-white px-4 py-2 rounded-lg">
              Sign out
            </button>
          </div>

          <div className="flex gap-8">
            {/* Tasks List */}
            <div className="flex-1">
              <div className="flex justify-between items-center mb-4">
                <h2 className="font-medium text-gray-800">Today's Tasks</h2>
                <div className="flex items-center gap-4">
                  <button className="text-orange-600 text-sm">
                    Delete All
                  </button>
                  <span className="text-gray-600 text-sm">
                    Monday, 18 December 2023
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                {tasks.map((task) => (
                  <div
                    key={task.id}
                    className={`flex items-center gap-3 p-4 rounded-lg ${
                      task.highlighted ? "bg-orange-100" : "bg-gray-50"
                    }`}
                  >
                    <input
                      type="checkbox"
                      className="w-5 h-5 rounded-sm border-2 border-gray-300 checked:bg-orange-600"
                    />
                    <span>{task.title}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats Cards */}
            <div className="w-48 space-y-4">
              <div className="bg-orange-600 p-4 rounded-lg text-white">
                <div className="mb-2">
                  <span className="text-3xl font-bold">40%</span>
                </div>
                <div className="text-sm">Completed tasks</div>
              </div>

              <div className="bg-orange-300 p-4 rounded-lg text-white">
                <div className="mb-2">
                  <span className="text-3xl font-bold">60%</span>
                </div>
                <div className="text-sm">Time Progress</div>
              </div>

              <div className="relative">
                <img
                  src="/api/placeholder/200/240"
                  alt="Illustration of person with laptop"
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoDashboard;
