import React from 'react';
import { StyleSheet, Text, View, Button,Image } from 'react-native';
import { StackNavigator } from 'react-navigation';

import LoginScreen from './Login'

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome'
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>

        


        <Image
        source={require('./img/cover.jpg')}
        style={this.props.style}>
        
          

        </Image>


        

        
      </View>
    );
  }
}

const SimpleApp = StackNavigator({
  Home: { screen: HomeScreen },
  Login: {screen: LoginScreen },
});

export default class App extends React.Component {
  render() {
    return <SimpleApp />;
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 4,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


// <View>
//           <Login />
//         </View>
        

