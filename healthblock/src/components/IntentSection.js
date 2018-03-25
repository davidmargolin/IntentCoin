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
    this.title=""
    this.amount=""
    this.issue_to=""
    this.goal=""
    this.description=""
  }

  openModal=()=> {
    this.setState({modalIsOpen: true});
  }

  closeModal=()=> {
    this.setState({modalIsOpen: false});
  }

  handleSubmit=()=>{
    let form_data={
      title: this.title,
      amount: this.amount,
      issue_to: this.issue_to,
      goal: this.goal,
      description: this.description
    }
    console.log(form_data)
    this.closeModal()
  }

  render() {
    return (
      <div style={{flexDirection: 'row', display: 'flex', flexWrap: 'wrap', margin: 40}}>
        {this.props.intents.map((intent, index)=><Intent reference={this.props.reference+"/intents/"+index} intent={intent} total_contributors={this.props.total_contributors}/>)}
        <button onClick={this.openModal}style={{flexDirection:'column',textAlign: 'center',justifyContent: 'center',alignItems: 'center', display: 'flex', boxShadow: "1px 1px 4px #cEcEcE", width: 400,height: 330, margin: 20}}>
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
        <input style={{border: 0, backgroundColor: '#e3e3e3',margin: 8, padding: 20}}type="text" onChange={(e)=>{this.title=e.target.value}}/>
          <label style={{color: '#6A6FEA', fontWeight: 'bold', padding: 8}} >Amount</label>
        <input style={{border: 0, backgroundColor: '#e3e3e3',margin: 8, padding: 20}}type="text" onChange={(e)=>{this.amount=e.target.value}}/>
          <label style={{color: '#6A6FEA', fontWeight: 'bold', padding: 8}} >Issue To</label>
        <input style={{border: 0, backgroundColor: '#e3e3e3',margin: 8, padding: 20}}type="text" onChange={(e)=>{this.issue_to=e.target.value}}/>
          <label style={{color: '#6A6FEA', fontWeight: 'bold', padding: 8}} >Goal</label>
        <input style={{border: 0, backgroundColor: '#e3e3e3',margin: 8, padding: 20}}type="text" onChange={(e)=>{this.goal=e.target.value}}/>
          <label style={{color: '#6A6FEA', fontWeight: 'bold', padding: 8}} >Description</label>
        <input style={{border: 0, backgroundColor: '#e3e3e3',margin: 8, padding: 20}}type="text" onChange={(e)=>{this.description=e.target.value}}/>
      <button onClick={this.handleSubmit} >Submit</button>
      <button onClick={this.closeModal} >Cancel</button>

        </div>
      </div>
      </Modal>
      </div>
    );
  }
}
