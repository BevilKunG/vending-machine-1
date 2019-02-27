import React,{ Component } from 'react'
import { connect } from 'react-redux'
import { increaseBalance,setLabel,refundChanges } from '../actions'

class InsertCoin extends Component {
  onCoinInsert(coin){
    this.props.setLabel('')
    this.props.refundChanges([0,0,0,0])
    this.props.increaseBalance(coin)
  }

  render(){
    return(
      <div className="item">
        <div className="ui basic compact segment">
          <div className="ui center aligned  header">Insert Coin</div>
          <div className="ui basic center aligned segment">
            <div className="ui yellow button" onClick={() => this.onCoinInsert(1)}>฿1</div>
            <div className="ui yellow button" onClick={() => this.onCoinInsert(2)}>฿2</div>
            <div className="ui yellow button" onClick={() => this.onCoinInsert(5)}>฿5</div>
            <div className="ui yellow button" onClick={() => this.onCoinInsert(10)}>฿10</div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(null,{ increaseBalance,setLabel,refundChanges })(InsertCoin)
