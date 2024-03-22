import axios from 'axios'

export const requestServer = axios.create({
  baseURL: 'http://localhost:3000'
})
