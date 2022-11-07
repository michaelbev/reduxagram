// a reducer takes in two things:

// 1. copy of current state
// 2. the action (info about what happened)
export default function posts(state = [], action) {
  console.log('This post will change')
  console.log(state, action)
  return state
}
