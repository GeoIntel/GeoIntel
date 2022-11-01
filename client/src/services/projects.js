import PropTypes from 'prop-types'
import http from '../utils/http'

export const fetchProjects = ({ setProjects, setProjectsLoading }) => {
  http('project')
    .then(response => {
      setProjects(response.data)
      setProjectsLoading(false)
    })
    .catch(error => {
      console.log(error)
    })
}

fetchProjects.propTypes = {
  setProjects: PropTypes.func,
  setProjectsLoading: PropTypes.func
}
