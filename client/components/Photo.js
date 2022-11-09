import React from 'react'
import { Link } from 'react-router'
import CSSTransitionGroup from 'react-addons-css-transition-group'

import Raven from 'raven-js'
import { sentry_url, logException } from '../data/config'

Raven.config(sentry_url, {
  tags: {
    app: 'reduxagram',
    userLevel: 'editor',
  },
}).install()

function clickedDeath() {
  logException(new Error('Death button clicked! Error thrown!'), {
    email: 'meb@gmail.com',
  })
}

const Photo = React.createClass({
  render() {
    const { post, i, comments } = this.props
    return (
      <figure className="grid-figure">
        <div className="grid-photo-wrap">
          <Link to={`/view/${post.code}`}>
            <img src={post.display_src} alt={post.caption} className="grid-photo" />
          </Link>

          <CSSTransitionGroup
            transitionName={'like'}
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}
          >
            <span key={post.likes} className="likes-heart">
              {post.likes}
            </span>
          </CSSTransitionGroup>
        </div>
        <figcaption>
          <p>{post.caption}</p>
          <div className="control-buttons">
            <button className="likes" onClick={this.props.increment.bind(null, i)}>
              ❤️ {post.likes}
            </button>
            <Link className="button" to={`/view/${post.code}`}>
              <span className="comment-count">
                <span className="speech-bubble">💬 </span>
                {comments[post.code] ? comments[post.code].length : 0}
              </span>
            </Link>
            <button
              onClick={() => {
                clickedDeath()
              }}
            >
              💀
            </button>
          </div>
        </figcaption>
      </figure>
    )
  },
})

export default Photo
