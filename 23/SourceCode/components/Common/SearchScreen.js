import React, { Component } from 'react';
import { FlatList, View, Text, TouchableWithoutFeedback , StyleSheet, TextInput, ScrollView  } from 'react-native';
import {Icon} from 'native-base';
import Item from './Item';
var SQLite = require('react-native-sqlite-storage');
var db = SQLite.openDatabase({name: 'en_vi', createFromLocation: '~en_vi_full_json.db'})
export default class Search extends Component {

  state = {
    search: '',
    data: [],
  };

  updateSearch = search => {
    this.setState({ search });
    this.setState({data: []});
    this.isPress()
  };

  isPress = () => {
    db.transaction((tx) => {
        var name = 'hello';
        var query = 'SELECT * FROM word WHERE word.word LIKE "'+this.state.search+'%" LIMIT 10';
        tx.executeSql(query, [], (tx, results) => {
            console.log("Query completed");
       
            var len = results.rows.length;
            for (let i = 0; i < len; i++) {
              let row = results.rows.item(i);
              //this.state.data.push(row);
              var newStateArray = this.state.data.slice();
              newStateArray.push(row);
              this.setState({data: newStateArray});
            }
             console.log(this.state.data);
       
          });
      });
    }

  render() {

    const { search } = this.state;
    return (
      <View>
        <View style={{height: 70, backgroundColor: '#1E90FF', flexDirection: 'row', alignContent: 'center', alignItems: 'center'}}>
          <TouchableWithoutFeedback  onPress={()=> {this.props.navigation.goBack()}}>
            <Icon style={{marginLeft: 20}} name="ios-arrow-round-back" size={35} color="#900" />
          </TouchableWithoutFeedback>
          
          <TextInput
            style={{ flex: 9, height: "80%", borderColor: 'gray', borderWidth: 1, borderRadius: 15, backgroundColor: 'white', justifyContent: 'center', margin: 10 }}
            placeholder="Type Here..."
            value={search}
            onChangeText={this.updateSearch}
            
            autoFocus={true}
          />
        </View>
        <View style={styles.separate}></View>
        <View>
          
        <FlatList
          data={this.state.data}
          renderItem={({ item }) => <Item title={item.word}/>}
          keyExtractor={item => item.id}
        />
          
        </View>
      </View>
      
     
    );
  }
}


const styles = StyleSheet.create({
  separate: {
      paddingTop: 10
  }
})

