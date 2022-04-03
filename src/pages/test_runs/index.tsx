import { Table } from 'react-bootstrap'
import axios from 'axios'

const TestRuns = ({ testRuns }) => {
  return (
    <main className="main-container container-fluid">
      <h1>Test Runs</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Created</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>some date</td>
          </tr>
        </tbody>
      </Table>
    </main>
  )
}

TestRuns.getInitialProps = async () => {
  const { data } = await axios.get('https://ci-speed.herokuapp.com/test_runs')
  return { testRuns: data }
}

export default TestRuns
