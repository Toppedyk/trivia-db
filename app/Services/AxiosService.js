export const api = axios.create({
  baseURL: 'https://opentdb.com/api.php?amount=10&difficulty=medium&type=multiple',
  timeout: 10000
})