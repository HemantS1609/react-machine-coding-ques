import React from "react";
import "./Dashboard.css";
import { useNavigate } from "react-router-dom";

const questions = [
  { id: 1, route: "/counter", title: "Counter Component" },
  { id: 2, route: "/todo-list", title: "Todo List App" },
  { id: 3, route: "/debounced-search", title: "Debounced Search" },
  { id: 4, route: "/fetch-data-api", title: "Fetch Data from API" },
  { id: 5, route: "/tabs-component", title: "Tabs Component" },
  { id: 6, route: "/accordion-component", title: "Accordion Component" },
  {
    id: 7,
    route: "/favorite-list-with-local-storage",
    title: "Favorite List (Local Storage)",
  },
  { id: 8, route: "/theme-toggle", title: "Theme Toggle (Dark/Light Mode)" },
  {
    id: 9,
    route: "/controlled-vs-uncontrolled-inputs",
    title: "Controlled vs Uncontrolled Inputs",
  },
  {
    id: 10,
    route: "/parent-child-communication",
    title: "Parent-Child Communication",
  },
  {
    id: 11,
    route: "/otp-input",
    title: "OTP Input",
  },
];
const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <h2>React Interview Machine Coding Questions (2-3 Yrs)</h2>
      <ul className="question-list">
        {questions.map((q) => (
          <li key={q.id} className="question-item">
            <button
              className="question-button"
              onClick={() => navigate(q.route)}
            >
              {q.title}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
