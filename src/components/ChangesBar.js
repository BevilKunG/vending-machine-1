import React, { Component } from 'react'
import { connect } from 'react-redux'

class ChangesBar extends Component {
  renderChangesBar(){
    const coins = [10,5,2,1]
    return this.props.changes.map((change,index) => change>0?<div key={coins[index]}>{`฿${coins[index]} - ${change} ${change>1?'coins':'coin'}`}</div>:null)
  }

  render(){
    return (
      <div className="ui center aligned segment">
        {this.renderChangesBar()}
      </div>
    )
  }
}

const mapStateToProps = ({ changes }) => {
  return { changes }
}

export default connect(mapStateToProps)(ChangesBar)
