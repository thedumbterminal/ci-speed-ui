import { createRoot } from 'react-dom/client';
import * as React from "react"
import App from "./pages/App"
import Home from './pages/Home'
import Account from './pages/Account'
import ApiKey from './pages/ApiKey'
import Projects from './pages/Projects'
import Project from './pages/Project'
import Build from './pages/Build'
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
          <Route path="/api_key" element={<ApiKey />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project" element={<Project />} />
          <Route path="/build" element={<Build />} />
          <Route path="/test_run" element={<TestRun />} />
          <Route path="/test_suite" element={<TestSuite />} />
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>
)
