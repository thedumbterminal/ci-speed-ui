import { createRoot } from 'react-dom/client';
import * as React from "react"
import App from "./pages/App"
import TestRuns from './pages/TestRuns'
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
          <Route path="/test_runs" element={<TestRuns />} />
          <Route path="/test_run" element={<TestRun />} />
          <Route path="/test_suite" element={<TestSuite />} />
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>
)
