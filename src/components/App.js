import React from 'react'
import BalanceBar from './BalanceBar'
import InsertCoin from './InsertCoin'
import ChangesMenu from './ChangesMenu'
import ItemList from './ItemList'
import './App.css'

const App = () => {
  // const style = { marginBottom:'20%' }
  return (
    <div className="ui container">
      <BalanceBar/>
      <div className="space bottom">
        <ItemList/>
      </div>
      <div className="ui bottom fixed two item menu">
        <InsertCoin/>
        <ChangesMenu/>
      </div>
    </div>
  )
}

export default App
