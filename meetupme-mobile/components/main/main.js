import React from 'react';
import { Font } from 'expo';
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
import { clearLocations } from '../../actions/location_actions';
import { connect } from 'react-redux';
import Locations from '../locations/locations';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.onSignOut = this.onSignOut.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      productName: "",
      searchRadius: 0,
      fontLoaded: false
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      'baloo-chettan': require('../../assets/fonts/BalooChettan-Regular.ttf'),
      'open-sans': require('../../assets/fonts/OpenSans-Regular.ttf')
    });
    this.setState({ fontLoaded: true });
  }

  onSignOut() {
    this.props.signoutUser();
  }

  onSubmit() {
    this.props.clearLocations();
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
        <View style={styles.titleContainer}>
          { this.state.fontLoaded ?
            (<View>
              <Text style={styles.subtitle}>
                U betta search it, gurl
              </Text>
            </View>) : null

           }
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
        <TouchableOpacity style={styles.submit} onPress={this.onSubmit}>
          <Text style={styles.submitText}>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    paddingTop: 5,
    backgroundColor: '#536A91',

  },
  titleContainer: {
    padding: 10
  },
  title: {
    color: '#FF890D',
    fontSize: 56,
    fontFamily: 'baloo-chettan',
    marginBottom: 10,
    textAlign: 'center'
  },
  subtitle: {
    color: '#FF890D',
    fontSize: 26,
    fontFamily: 'open-sans',
    margin: 5,
    textAlign: 'center'
  },
  buttonContainer: {
    padding: 20,
    width: '80%',
    alignSelf: 'flex-end',
  },
  submit: {
    borderRadius: 5,
    borderColor: 'transparent',
    backgroundColor: '#183059',
    margin: 40,
    padding: 10,
    width: '65%',
    alignSelf:'center'

  },
  logout: {
    borderRadius: 5,
    borderColor: 'transparent',
    backgroundColor: '#183059',
    marginBottom: 20,
    padding: 5,
    width: '40%',
    alignSelf:'flex-end'

  },
  logoutText: {
    textAlign: 'center',
    fontSize: 20,
    color: 'white'
  },
  submitText: {
    textAlign: 'center',
    fontSize: 24,
    color: 'white'
  },
  textInput: {
    borderRadius: 5,
    padding: 5,
    marginBottom: 15,
    marginTop: 5,
    width: '80%',
    backgroundColor: '#E9ECF1',
    borderBottomColor: '#183059',
    borderBottomWidth: 3,
    alignSelf: 'center',
    height: 50
  }
});

// const mapStateToProps = state => ({
//   locations: state.locations
// });

const mapDispatchToProps = dispatch => ({
  signoutUser: () => dispatch(signoutUser()),
  clearLocations: () => dispatch(clearLocations())
});

export default connect(null, mapDispatchToProps)(Main);
