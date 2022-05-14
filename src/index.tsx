import { createRoot } from 'react-dom/client';
import * as React from "react"
import App from "./pages/App"
import Account from "./pages/Account"
import Projects from './pages/Projects'
import Project from './pages/Project'
import TestRun from './pages/TestRun'
import TestSuite from './pages/TestSuite'
import {
  HashRouter,
  Routes,
  Route
} from "react-router-dom";


const container = document.getElementById("root");
const root = createRoot(container!)
root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/account" element={<Account />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project" element={<Project />} />
          <Route path="/test_run" element={<TestRun />} />
          <Route path="/test_suite" element={<TestSuite />} />
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>
)
