import React from 'react'
import actions from '../../actions'
import {connect} from 'react-redux'

import Text from '../presentations/Text'

class Home extends React.Component {
  constructor(){
    super()
    this.state={
      inputVal:''
    }
  }
  handleChange(e){
    this.setState({inputVal:e.target.value})
  }
  displayText(text){
    this.props.fetchText(this.state.inputVal)
  }
  render() {
    return (
      <div id="body-container">
        <h1>Home</h1>
        <input onChange = {this.handleChange.bind(this)}></input>
        <button onClick ={this.displayText.bind(this)}>Change Display Text</button>
        <Text text={this.props.text}/>
      </div>

    )
  }
}

const stateToProps = (state) => {
  return {text: state.text.text}
}

const dispatchToProps = (dispatch) => {
  return {
    fetchText: (text) => {
      dispatch(actions.fetchText(text))
    }
  }
}

export default connect(stateToProps, dispatchToProps)(Home);