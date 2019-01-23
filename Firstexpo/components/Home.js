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
        <TextInput>This is text input</TextInput>
        <Button title="Go to Details" onPress={() => this.props.navigation.navigate('Search')} />
    </View>
          );
    }
  }

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
  });
  export default HomeScreen