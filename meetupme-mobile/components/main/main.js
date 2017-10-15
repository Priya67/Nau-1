import React from 'react';
import { AppRegistry,
  AsyncStorage,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  AlertIOS,
  ActivityIndicator,
  TextInput
} from 'react-native';
import { signoutUser } from "../../actions/auth_actions";
import { connect } from 'react-redux';
import Locations from '../locations/locations';
// import { StackNavigator } from 'react-navigation';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.onSignOut = this.onSignOut.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      productName: "",
      searchRadius: 0
    };
  }

  onSignOut() {
    this.props.signoutUser();
  }

  onSubmit() {
    debugger;
    this.props.navigation.navigate('Locations',this.state);
  }

  render() {
    return(
      <View style = {styles.container}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.logout} onPress={this.onSignOut}>
            <Text style={styles.logoutText}>Log Out</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TextInput
            onChangeText={text => this.setState({productName: text})}
            placeholder="Product Name"
            style={styles.textInput}
          />
        </View>
        <View>
          <TextInput
            onChangeText={text => this.setState({searchRadius: text})}
            placeholder="Search Radius"
            style={styles.textInput}
          />
        </View>
        <TouchableOpacity style={styles.logout} onPress={this.onSubmit}>
          <Text style={styles.logoutText}>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
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
  textInput: {
    height: 50,
    color: '#000053',
    textAlign: 'center',
    width: '80%',
    borderWidth: 2,
    borderColor: "black",
    margin: 10,
    alignSelf: "center"
  }
});

// const mapStateToProps = state => ({
//   locations: state.locations
// });

const mapDispatchToProps = dispatch => ({
  signoutUser: () => dispatch(signoutUser())
});

export default connect(null, mapDispatchToProps)(Main);
