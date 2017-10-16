import React from 'react';
import { Font } from 'expo';

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';
import Dimensions from 'Dimensions';
import { connect } from 'react-redux';
import {loginUser, signupUser} from '../../actions/auth_actions';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      fontLoaded: false
    };

    this.onSignIn = this.onSignIn.bind(this);
    this.onSignUp = this.onSignUp.bind(this);
    this.navigateToMain = this.navigateToMain.bind(this);
  }

  async componentDidMount() {
    await Font.loadAsync({
      'baloo-chettan': require('../../assets/fonts/BalooChettan-Regular.ttf'),
      'open-sans': require('../../assets/fonts/OpenSans-Regular.ttf')
    });
    this.setState({ fontLoaded: true });
  }

  componentWillReceiveProps() {
    if (this.props.state.auth.user_id) {
      this.navigateToMain();
    }
  }

  navigateToMain() {
    this.props.navigation.navigate('Main');
  }

  onSignIn() {
    this.props.loginUser(this.state.email, this.state.password);
  }

  onSignUp() {
    this.props.signupUser(this.state.email, this.state.password);
  }

  render() {
      return (
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            { this.state.fontLoaded ?
              (<View>
                <Text style={styles.title}>
                  Nau
                </Text>
                <Text style={styles.subtitle}>
                  Get what you need, Nau.
                </Text>
              </View>) : null

             }
          </View>
          <View style={styles.inputs}>
            <View style={styles.field}>

              <TextInput
                onChangeText={text => this.setState({email: text})}
                placeholder="Email"
                style={styles.textInput}/>
            </View>
            <View style={styles.field}>

              <TextInput
                onChangeText={text => this.setState({password: text})}
                placeholder="Password"
                secureTextEntry={true}
                style={styles.textInput}/>
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.login} onPress={this.onSignIn}>
                <Text style={styles.loginText}>Log In</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.login} onPress={this.onSignUp}>
                <Text style={styles.loginText}>Sign Up</Text>
              </TouchableOpacity>
            </View>
          </View>

        </View>
      );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    paddingTop: 40,
    backgroundColor: '#FFFFCd',
    top: Dimensions.get('window').height*.01,
  },
  titleContainer: {
    padding: 10
  },
  title: {
    color: '#9b9aff',
    fontSize: 56,
    fontFamily: 'baloo-chettan',
    top: Dimensions.get('window').height*.05,
    marginBottom: 10,
    textAlign: 'center'
  },
  subtitle: {
    color: '#9b9aff',
    fontSize: 26,
    fontFamily: 'open-sans',
    top: Dimensions.get('window').height*.05,
    margin: 5,
    textAlign: 'center'
  },
  inputs: {
    top: Dimensions.get('window').height*.11,
  },
  field: {
    borderRadius: 5,
    padding: 5,
    marginBottom: 15,
    marginTop: 5,
    width: '80%',
    backgroundColor: '#FFFFCd',
    borderBottomColor: '#6FE8C8',
    borderBottomWidth: 3,
    alignSelf: 'center'
  },
  textInput: {
    height: 50,
    fontSize: 24,
    color: 'black',
    textAlign: 'center',
    width: '100%'
  },
  buttonContainer: {
    padding: 20,
    width: '65%',
    alignSelf: 'center',
  },
  login: {
    borderRadius: 5,
    borderColor: 'transparent',
    backgroundColor: '#6FE8C8',
    marginBottom: 20,
    padding: 10,

  },
  loginText: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white'
  },
  formError: {
    color: 'red'
  }
});

const mapStateToProps = state => ({
  state
});
const mapDispatchToProps = dispatch => ({
  loginUser: (email, password) => dispatch(loginUser(email, password)),
  signupUser: (email, password) => dispatch(signupUser(email, password))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
