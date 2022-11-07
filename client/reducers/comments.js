// a reducer takes in two things:

// 1. copy of current state
// 2. the action (info about what happened)
export default function comments(state = [], action) {
  console.log(state, action)
  return state
}
