// a reducer takes in two things:

// 1. copy of current state
// 2. the action (info about what happened)
function postComments(state = [], action) {
  const i = action.i
  switch (action.type) {
    case 'REMOVE_COMMENT':
      // return state with the comment removed
      return [
        ...state.slice(0, i), // before the one we are updating
        ...state.slice(i + 1), // after the one we are updating
      ]
    // return state
    case 'ADD_COMMENT':
      // return state with the comment added
      return [...state, { user: action.author, text: action.comment }]
    //TODO Why does this not work?
    // return [...state[i].comments.append(action.author, action.comment)]
    default:
      return state
  }
}

function comments(state = [], action) {
  if (typeof action.postId !== 'undefined') {
    return {
      // take the current state
      ...state,
      // overwrite this post with a new one
      [action.postId]: postComments(state[action.postId], action),
    }
  }
  return state
}

export default comments
