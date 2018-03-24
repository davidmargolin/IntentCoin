import React, { Component } from 'react'
import * as firebase from 'firebase'
import CharityInfo from '../components/CharityInfo'
import IntentSection from '../components/IntentSection'
class CharityPage extends Component {
  constructor(props){
    super(props)
    this.state={
      charity_info: {intents:[]}
    }
  }

  componentWillMount(){
    firebase.database().ref(this.props.match.params.category+"/"+this.props.match.params.index).once("value", (data) => {
      console.log(data.val())
      this.setState({charity_info: data.val()})
    });
  }

  render() {
    //console.log(this.state.charity_info)
    return (


        <div>
          <CharityInfo/>
          <IntentSection intents={this.state.charity_info.intents}/>
        </div>

    );
  }
}

export default CharityPage;
