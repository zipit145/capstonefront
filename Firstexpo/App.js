import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './components/Home'
import {createStackNavigator} from 'react-navigation';
import { createAppContainer } from 'react-navigation';
// you can also import from @react-navigation/native

const AppNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
});

const AppContainer = createAppContainer(AppNavigator);

// Now AppContainer is the main component for React to render

export default AppContainer;



// export default class App extends React.Component {

//   render() {
//     createStackNavigator();
//     return (
//       <View style={styles.container}>
//         <Text>Hi Ried! Open up App.js to start working on your app! this is a change!!</Text>
//         <HomeScreen />
//       </View>

//     );
//   }
// }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
