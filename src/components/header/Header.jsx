import React from 'react'
import Button from '../button/Button'
import {BUTTON_STYLE} from '../button/buttonTypes'
import  Logo from '../logo/Logo'
import Search from '../search/Search'
// import { connect } from 'react-redux'
// import { setActiveMovie } from '../../redux/action-creators/actionCreators'
// import { RootState } from '../../redux/reducers'

import styles from './Header.module.css'

const Header = ({ addMovie }) => {

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.top}>
          <Logo />
          <Button style={BUTTON_STYLE.TRANSPARENT} onClick={addMovie}>
            + Add movie
          </Button>
        </div>
        <div className={styles.content}>
          <div className={styles.title}>Find your movie</div>
          <Search
            value={''}
            placeholder="What do you want to watch ?"
            actionName="Search"
          />
        </div>
      </div>
    </header>
  )
}

export default Header
