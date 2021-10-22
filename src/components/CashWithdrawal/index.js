import {Component} from 'react'

import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  state = {
    currentBalance: 2000,
  }

  withDrawAmount = amount => {
    this.setState(prevState => {
      const updatedBalance = prevState.currentBalance - amount
      if (updatedBalance >= 0) {
        return {currentBalance: updatedBalance}
      }
      return {currentBalance: prevState.currentBalance}
    })
  }

  render() {
    const {denominationsList} = this.props
    const {currentBalance} = this.state

    return (
      <div className="cash-bcg-withdrawal-container">
        <div className="cash-withdrawal-container">
          <div className="cash-withdrawal-profile-name-container">
            <div className="profile-pic-container">
              <p className="profile-pic-name"> S </p>
            </div>
            <p className="profile-name"> Sarah williams </p>
          </div>
          <div className="balance-container">
            <p className="your-balance-text"> Your Balance </p>
            <div className="current-balance-container">
              <p className="current-balance-text"> {currentBalance} </p>
              <p className="balance-type-text"> In Rupees </p>
            </div>
          </div>

          <p className="withdraw-text"> Withdraw </p>
          <p className="choose-sum-text"> CHOOSE SUM (IN RUPEES)</p>
          <ul className="denominationItem-container">
            {denominationsList.map(eachItem => (
              <DenominationItem
                eachItem={eachItem}
                denominationList={denominationsList}
                withDrawAmount={this.withDrawAmount}
                key={eachItem.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
