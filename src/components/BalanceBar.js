import React from 'react'
import { connect } from 'react-redux'

const BalanceBar = (props) => {
  return (
    <div className="ui top fixed large vertical compact inverted yellow menu">
      <div className="item">{`Balance: ฿ ${props.balance}`}</div>
    </div>
  )
}
// <div className="ui clearing basic segment">
//   <div className="ui right floated compact segment">{`Balance: ฿ ${props.balance}`}</div>
// </div>
const mapStateToProps = ({balance}) => {
  return {balance}
}

export default connect(mapStateToProps)(BalanceBar)
