import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './Users.css';
import Users from '../../components/Users';

class UsersPage extends PureComponent {
  static propTypes = {
    users: PropTypes.arrayOf(PropTypes.shape({})),
  };
  static defaultProps = {
    users: [],
  };

  render() {
    const { users } = this.props;
    return (
      <div>
        <h2 className={styles.title}>Users</h2>
        <Users users={users} />
      </div>
    );
  }
}

export default UsersPage;
