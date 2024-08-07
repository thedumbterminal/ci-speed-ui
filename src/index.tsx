import { createRoot } from 'react-dom/client'
import * as React from 'react'
import App from './pages/App'
import Authed from './pages/Authed'
import Home from './pages/Home'
import Account from './pages/Account'
import Login from './pages/Login'
import ApiKey from './pages/ApiKey'
import Summary from './pages/Summary'
import Analyse from './pages/Analyse'
import ChooseProject from './pages/ChooseProject'
import Project from './pages/Project'
import AddProject from './pages/AddProject'
import Build from './pages/Build'
import TestRun from './pages/TestRun'
import TestSuite from './pages/TestSuite'
import TestFailure from './pages/TestFailure'
import SkippedTest from './pages/SkippedTest'
import { HashRouter, Routes, Route } from 'react-router-dom'

import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

const container = document.getElementById('root')
const root = createRoot(container!)
root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="login" element={<Login />} />
          <Route element={<Authed />}>
            <Route path="account" element={<Account />} />
            <Route path="api_key" element={<ApiKey />} />
            <Route path="summary" element={<Summary />} />
            <Route path="analyse" element={<Analyse />} />
            <Route path="choose_project" element={<ChooseProject />} />
            <Route path="add_project" element={<AddProject />} />
            <Route path="project" element={<Project />} />
            <Route path="build" element={<Build />} />
            <Route path="test_run" element={<TestRun />} />
            <Route path="test_suite" element={<TestSuite />} />
            <Route path="test_failure" element={<TestFailure />} />
            <Route path="skipped_test" element={<SkippedTest />} />
            <Route index element={<Home />} />
          </Route>
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>,
)
