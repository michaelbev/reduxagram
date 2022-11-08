import React from 'react'

const Comments = React.createClass({
  rendercomment(comment, i) {
    return (
      <div className="comment" key={i}>
        <p>
          <strong>{comment.user}:</strong> {comment.text}
          {
            <button
              className="remove-comment"
              onClick={this.props.removeComment.bind(null, this.props.params.postId, i)}
            >
              ❌
            </button>
          }
        </p>
      </div>
    )
  },
  handleSubmit(e) {
    e.preventDefault()
    const { postId } = this.props.params
    this.props.addComment(postId, this.refs.author.value, this.refs.comment.value)
    this.refs.commentForm.reset()
  },
  render() {
    return (
      <div className="comments">
        {this.props.postComments.map(this.rendercomment)}

        <form ref="commentForm" className="comment-form" onSubmit={this.handleSubmit}>
          <input type="text" ref="author" placeholder="author" />
          <input type="text" ref="comment" placeholder="comment" />
          <input type="submit" hidden />
        </form>
      </div>
    )
  },
})

export default Comments
