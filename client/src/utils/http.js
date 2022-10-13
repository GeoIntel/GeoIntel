import axios from 'axios'

const http = async (endpoint, method = 'get', data = undefined, params = undefined) => {
  return axios({
    url: `http://api:4000/${endpoint}`,
    method,
    params,
    data
  })
}

export default http
