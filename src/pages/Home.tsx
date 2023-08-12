import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import { Link as RLink } from 'react-router-dom'

const home = () => {
  return (
    <>
      <Typography variant="h2" component="h3">
        Home
      </Typography>
      <p>Welcome to CI-Speed.</p>
      <Typography variant="h3" component="h4">
        Quick start
      </Typography>
      <ol>
        <li>
          <RLink to="/account">Login via OAUTH with GitHub.</RLink>
        </li>
        <li>
          <RLink to="/add_project">Add a project.</RLink>
        </li>
        <li>
          <RLink to="/api_key">Generate an API Key.</RLink>
        </li>
        <li>
          <Link
            href="https://github.com/thedumbterminal/ci-speed/wiki/Documentation"
            rel="noopener"
            target="_blank"
          >
            Upload test results.
          </Link>
        </li>
      </ol>
    </>
  )
}

export default home
