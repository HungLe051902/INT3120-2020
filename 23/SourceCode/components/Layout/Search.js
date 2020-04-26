import React, { Component } from 'react';
import {Keyboard, View, TouchableWithoutFeedback, TextInput } from 'react-native';





export default class Search extends Component {


  render() {
    return (
      
      <TouchableWithoutFeedback onPress={() => {this.props.navigation.navigate('Search')}}>
        <View style={{height: 70, backgroundColor: '#1E90FF', flexDirection: 'row', alignContent: 'center', alignItems: 'center'}}>

          <TextInput
            style={{ flex: 9, height: "80%", borderColor: 'gray', borderWidth: 1, borderRadius: 15, backgroundColor: 'white', justifyContent: 'center', margin: 10 }}
            placeholder="Type Here..."
            editable={false}
          />
        </View>
      </TouchableWithoutFeedback>
      
    );
  }
}