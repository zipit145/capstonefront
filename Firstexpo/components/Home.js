import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';
import {createStackNavigator} from 'react-navigation';

class HomeScreen extends React.Component {
    
    static navigationOptions = {
      title: 'G4',
    };
    render() {
        return (
        <View style={styles.container}>
            <TextInput style={styles.inp}>Username</TextInput>
            <TouchableOpacity
            style={styles.butt}
            onPress={() => this.props.navigation.navigate('Search')}
        >
            <Text style={styles.textg}> Touch Here </Text>
        </TouchableOpacity>
        </View>
    
          );
    }
  }

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 24,
    },
    inp: {
        textAlign: 'center',
        backgroundColor: '#76cffb',
        borderColor: '#F1E3F3',
        marginBottom: 300,
        marginTop: 200,
        minWidth: 400,
        height: 100,
        borderRadius:10,
        borderWidth: 1,
        fontSize: 24,
    },
    textg: {
        paddingTop: 50,
        fontSize: 24,
        textAlign: 'center',
    },
    butt:{
        marginRight:40,
        marginLeft:40,
        marginTop:10,
        paddingTop:10,
        minWidth: 150,
        height: 150,
        paddingBottom:10,
        backgroundColor:'#ffb347',
        borderRadius:100,
        borderWidth: 1,
        borderColor: '#F1E3F3',
        fontSize: 24,
      },
  });
  export default HomeScreen