import './index.css'

const TabItem = props => {
  const {tabDetails, tabItemClicked, isActive} = props
  const {displayText, tabId} = tabDetails

  const tabClicked = () => {
    tabItemClicked(tabId)
  }

  const tabClassName = isActive ? 'active-tab-btn' : ''

  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${tabClassName}`}
        onClick={tabClicked}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
