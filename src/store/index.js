import { createStore } from 'redux'
export default {
  greenPage:createStore(counter),
  redPage:createStore(counter),
}

function counter(state = 0,action) {
  return state+1;
}
