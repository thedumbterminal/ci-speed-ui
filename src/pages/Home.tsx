import Typography from '@mui/material/Typography'
import { Link } from 'react-router-dom'

export default () => {
  return (
    <>
      <Typography variant="h2" component="h2">
        Home
      </Typography>
      <p>Welcome to CI-Speed.</p>
      <Typography variant="h3" component="h3">
        Quick start
      </Typography>
      <ol>
        <li>
          <Link to="/account">Login via OAUTH with GitHub.</Link>
        </li>
        <li>
          <Link to="/projects">Create a project.</Link>
        </li>
        <li>
          <Link to="/api_key">Generate an API Key</Link>
        </li>
        <li>Upload test results.</li>
      </ol>
    </>
  )
}
