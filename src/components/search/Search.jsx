import React, { useState } from 'react'
import  Button from '../button/Button'
import {BUTTON_STYLE} from '../button/buttonTypes'

import styles from './Search.css'

const Search = ({
  placeholder,
  actionName,
  value: initialValue = '',
}) => {
  const [value, setValue] = useState(initialValue)
  const onActionClick = () => {
  }

  return (
    <div className={styles.search}>
      <input
        placeholder={placeholder}
        className={styles.input}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        data-testid="input"
        id="input"
      />
      <Button style={BUTTON_STYLE.COMPLETE} onClick={onActionClick}>
        {actionName}
      </Button>
    </div>
  )
}

export default Search
