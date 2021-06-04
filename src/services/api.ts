import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://myheroacademiaapi.com/api/character'
})