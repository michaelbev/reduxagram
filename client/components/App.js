import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actionCreators from '../actions/actionCreators'
import Main from './Main'

function mapStateToProps3(state) {
  return { posts: state.posts, comments: state.comments }
}

function mapDispathToProps(dispath) {
  return bindActionCreators(actionCreators, dispath)
}

const App = connect(mapStateToProps3, mapDispathToProps)(Main)

export default App
