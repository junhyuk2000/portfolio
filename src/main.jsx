import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./styles/reset.css";
import "./styles/common.css";
import "pretendard/dist/web/variable/pretendardvariable.css";

createRoot(document.getElementById("root")).render(<App />);
