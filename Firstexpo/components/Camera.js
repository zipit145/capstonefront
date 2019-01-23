import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

class Search extends React.Component {
    static navigationOptions = {
        title: 'G4',
      };
    render() {
      return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
          <Text>Camera screen Screen</Text>
          <TextInput>This is text input</TextInput>
          <Button
            title="Go to Camera"
            onPress={() => this.props.navigation.navigate('Search')}
          />
        </View>
      );
    }
}

export default Search