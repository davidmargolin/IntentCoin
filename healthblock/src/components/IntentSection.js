import React, { Component } from 'react';
import Intent from './Intent'
import add from '../photos/add.png'
import Modal from 'react-modal'

export default class IntentSection extends Component {

  constructor(props){
    super(props)
    this.state={
      modalIsOpen:false
    }
  }

  openModal=()=> {
    this.setState({modalIsOpen: true});
  }

  closeModal=()=> {
    this.setState({modalIsOpen: false});
  }

  render() {
    return (
      <div style={{flexDirection: 'row', display: 'flex', flexWrap: 'wrap', margin: 40}}>
        {this.props.intents.map((intent)=><Intent intent={intent} total_contributors={this.props.total_contributors}/>)}
        <button onClick={this.openModal}style={{flexDirection:'column',textAlign: 'center',justifyContent: 'center',alignItems: 'center', display: 'flex', boxShadow: "1px 1px 4px #cEcEcE", width: 400,height: 310, margin: 20}}>
        <img src={add} style={{padding: 20, width: 65, height: 65}}/>
        Add New Intent
      </button>
      <Modal
        isOpen={this.state.modalIsOpen}
        onRequestClose={this.closeModal}
        contentLabel="Add Intent">
        <div style={{padding: 20, display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
        <div style={{display:'flex', flexDirection:'column', justifyContent: 'center'}}>
          <label style={{padding: 8, color: '#6A6FEA', fontWeight: 'bold', fontSize: 18}} >Title</label>
          <input style={{border: 0, backgroundColor: '#e3e3e3',margin: 8, padding: 20}}type="text" />
          <label style={{color: '#6A6FEA', fontWeight: 'bold', padding: 8}} >Amount</label>
          <input style={{border: 0, backgroundColor: '#e3e3e3',margin: 8, padding: 20}}type="text" />
          <label style={{color: '#6A6FEA', fontWeight: 'bold', padding: 8}} >Issue To</label>
          <input style={{border: 0, backgroundColor: '#e3e3e3',margin: 8, padding: 20}}type="text" />
          <label style={{color: '#6A6FEA', fontWeight: 'bold', padding: 8}} >Goal</label>
        <input style={{border: 0, backgroundColor: '#e3e3e3',margin: 8, padding: 20}}type="text" />
          <label style={{color: '#6A6FEA', fontWeight: 'bold', padding: 8}} >Description</label>
          <input style={{border: 0, backgroundColor: '#e3e3e3',margin: 8, padding: 20}}type="text" />
          <button >Submit</button>
        </div>
      </div>
      </Modal>
      </div>
    );
  }
}
