import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Ensure dark theme is set by default
document.documentElement.classList.add("dark");

createRoot(document.getElementById("root")!).render(<App />);
