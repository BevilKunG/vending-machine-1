import React,{ Component } from 'react'
import { connect } from 'react-redux'
import { fetchItems,resetBalance,refundChanges,setLabel } from '../actions'
import ReactLoading from 'react-loading'

export const OUT_OF_STOCK = 'Out of stock'
export const NOT_ENOUGH_MONEY = 'Not enough money, please insert some coins'

class ItemList extends Component {

  componentDidMount(){
    this.props.fetchItems()
  }

  onItemClick(item){
    const coins = [10,5,2,1]
    let balance = this.props.balance
    let label = ''

    //Reset Changes
    this.props.refundChanges([0,0,0,0])
    //

    if(balance >= item.price && item.in_stock){
      balance -= item.price
      label = `Got ${item.name} Price:${item.price} Changes:${balance}`

      const refundCoins = coins.map(coin => {
                            const x = Math.floor(balance/coin)
                            balance -= x * coin
                            return x
                          })
      this.props.resetBalance()
      this.props.refundChanges(refundCoins)
    }else{
      if(item.in_stock === false) label = OUT_OF_STOCK
      else if(balance < item.price )label = NOT_ENOUGH_MONEY
    }

    //Label will show on changes menu
    this.props.setLabel(label)
  }

  checkItemStatus(item){
    if(item.in_stock === false){
      return 'red'
    }else if(this.props.balance>=item.price){
      return 'green'
    }
    return 'grey'
  }


  renderItems(){
    if(!this.props.items){
      return <ReactLoading type="spin" color="#767676" />
    }else{
      return this.props.items.map(item => (
        <div
          key={item.id}
          className="card"
          onClick={() => this.onItemClick(item)}>

          <div className="image">
            <img src={item.image} alt="img not found"/>
          </div>

          <div className="content">
            <div className="center aligned header">
              {item.name}
            </div>

            <div className="center aligned">
              price: {item.price}
            </div>
          </div>

          <div className="extra content">
            <div className={`ui inverted ${this.checkItemStatus(item)} segment`}></div>
          </div>

        </div>
      ))
    }
  }

  render(){
    return (
      <div className="ui basic segment">
        <div className="ui basic segment">
          <div className="ui center aligned header">Select Item</div>
        </div>

        <div className="ui centered cards">
          {this.renderItems()}
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ items,balance }) => {
  return { items,balance }
}

export default connect(mapStateToProps, { fetchItems,resetBalance,refundChanges,setLabel })(ItemList)
