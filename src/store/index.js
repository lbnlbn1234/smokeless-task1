import { createStore } from 'redux'
export default {
  greenPage:function(){
    let tmp=createStore(counter);
    console.log("init "+tmp.getState());
    return tmp;
  }(),
  redPage:createStore(counter),
}

function counter(state = 0,action) {
  switch (action.type) {
    case 'INC':
      return state + 1
    case 'DEC':
      return state - 1
    default:
      return state
  }
}
