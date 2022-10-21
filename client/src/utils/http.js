import axios from 'axios'

const http = async (endpoint, method = 'get', data = undefined, params = undefined) => {
  return axios({
    url: `http://localhost:4000/${endpoint}`,
    method,
    data,
    params
  })
}

export default http
