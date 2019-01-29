import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import {createStackNavigator} from 'react-navigation';

class Search extends React.Component {
    static navigationOptions = {
        title: 'G4',
      };
    render() {
      return (
        <View style={styles.container}>
          <Text>Please Enter a Search Term</Text>
          <TextInput  style={styles.inp}>Development</TextInput>
          <Button
            title="Go to Camera"
            onPress={() => this.props.navigation.navigate('Camera')}
          />
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
      borderRadius: 4,
      borderWidth: 1,
  }
});

export default Search