import { Typography } from '@mui/material'
import ProjectSelect from '../components/ProjectSelect'

const ChooseProject = () => {
  return (
    <>
      <Typography variant="h2" component="h2" gutterBottom>
        Choose Project
      </Typography>
      <ProjectSelect />
    </>
  )
}

export default ChooseProject
