import React from 'react';
import { AppRegistry,
  AsyncStorage,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  AlertIOS,
  ActivityIndicator
} from 'react-native';
import { signoutUser } from "../../actions/auth_actions";
import { connect } from 'react-redux';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.onSignOut = this.onSignOut.bind(this);
  }

  onSignOut() {
    this.props.signoutUser();
  }

  render() {
    return(
      <View>
        <Text>Hello</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.logout} onPress={this.onSignOut}>
            <Text style={styles.logoutText}>Log Out</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    padding: 20,
    width: '75%',
    alignSelf: 'center',
  },
  logout: {
    borderRadius: 5,
    borderColor: 'transparent',
    backgroundColor: '#000053',
    padding: 20,
  },
  logoutText: {
    textAlign: 'center',
    fontSize: 24,
    color: 'white'
  },
});

const mapDispatchToProps = dispatch => ({
  signoutUser: () => dispatch(signoutUser())
});

export default connect(null, mapDispatchToProps)(Main);
