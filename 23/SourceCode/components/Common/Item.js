import React, { Component } from 'react';
import { FlatList, View, Text, TouchableWithoutFeedback , StyleSheet, Alert, ScrollView  } from 'react-native';


export default class Item extends Component {

    constructor(props) {
        super(props);
    }
    

  render() {

    
    return (
      <View>
        <View style={{height: 70, backgroundColor: '#1E90FF', flexDirection: 'row', alignContent: 'center', alignItems: 'center'}}>
          <TouchableWithoutFeedback  onPress={()=> {this.props.navigation.goBack()}}>
            <Text>{this.props.title}</Text>
          </TouchableWithoutFeedback>
        </View>
        <View style={styles.separate}></View>
      </View>
      
     
    );
  }
}


const styles = StyleSheet.create({
  separate: {
      paddingTop: 10
  }
})

