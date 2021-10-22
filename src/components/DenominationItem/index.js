import './index.css'

const DenominationItem = props => {
  const {eachItem, withDrawAmount} = props

  const onWithdrawAmount = () => {
    const {value} = eachItem
    withDrawAmount(value)
  }

  return (
    <li className="amount-button">
      <button
        onClick={onWithdrawAmount}
        type="button"
        className="onwithdraw-button"
      >
        {' '}
        {eachItem.value}
      </button>
    </li>
  )
}

export default DenominationItem
