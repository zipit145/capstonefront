import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import {createStackNavigator} from 'react-navigation';

class HomeScreen extends React.Component {
    
    static navigationOptions = {
      title: 'G4',
    };
    render() {
        return (
    <View style={styles.container}>
        <TextInput style={styles.inp}>Username</TextInput>
        <Button title="Go to Details" onPress={() => this.props.navigation.navigate('Search')} />
    </View>
          );
    }
  }

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ADD8E6',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inp: {
        textAlign: 'center',
        backgroundColor: '#FFF',
        marginBottom: 10,
        minWidth: 150,
        borderRadius: 6,
        borderWidth: 1,
    }
  });
  export default HomeScreen