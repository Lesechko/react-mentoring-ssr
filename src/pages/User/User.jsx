import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './User.css';

class UserPage extends PureComponent {
  static propTypes = {
    user: PropTypes.arrayOf(PropTypes.shape({})),
  };

  static defaultProps = {
    user: null,
  };

  render() {
    const { user } = this.props;
    return (
      <div>
        <h2 className={styles.title}>User</h2>
        <pre>{JSON.stringify(user, null, 2)}</pre>
      </div>
    );
  }
}

export default UserPage;
