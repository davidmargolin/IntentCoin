import React, { Component } from 'react'
import * as firebase from 'firebase'
import CharityInfo from '../components/CharityInfo'
import IntentSection from '../components/IntentSection'
import { Carousel } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

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
    var settings = {
      dots: true,
      infinite: true,
      speed: 200,
    };
    return (




        <div>

          <CharityInfo charity={this.state.charity_info}/>
        <img src={this.state.charity_info.big_pic} style={{flex:1, alignSelf: 'stretch', width:'100%', height: null}}/>
        <IntentSection intents={this.state.charity_info.intents} total_contributors={this.state.charity_info.total_contributors}/>
        </div>

    );
  }
}

export default CharityPage;
