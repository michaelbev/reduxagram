// a reducer takes in two things:

// 1. copy of current state
// 2. the action (info about what happened)
export default function posts(state = [], action) {
  const i = action.index
  switch (action.type) {
    case 'INCREMENT_LIKES':
      // return state with the post updated
      return [
        ...state.slice(0, i), // before the one we are updating
        { ...state[i], likes: state[i].likes + 1 }, // update the one post
        ...state.slice(i + 1), // after the one we are updating
      ]
    default:
      return state
  }
}
