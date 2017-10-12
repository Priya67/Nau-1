import React from 'react';
import { connect } from 'react-redux';
import { AppRegistry,
  AsyncStorage,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  AlertIOS,
  ActivityIndicator
} from 'react-native';
import Main from './main/main';
import Login from './auth/login';

class Entry extends React.Component {


  render() {
    const newPage = this.props.auth.user_id ? <Main /> : <Login />;
    return(
      <View style={styles.container}>{newPage}</View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

const mapStateToProps = (state) => {
  return({
    auth: state.auth
  });
};


export default connect(mapStateToProps, null)(Entry);
