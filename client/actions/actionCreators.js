// increment

export function increment(index) {
  return {
    type: 'INCREMENT_LIKES',
    index,
  }
}

// addComment

export function addComment(postID, author, comment) {
  return {
    type: 'ADD_COMMENT',
    postID,
    author,
    comment,
  }
}

// removeComment

export function removeComment(postID, index) {
  return { removeComment: 'REMOVE_COMMENT', index, postID }
}
