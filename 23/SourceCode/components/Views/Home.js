import React, { Component } from 'react';
import { View, TouchableOpacity, Image, Text, StyleSheet, TextInput} from 'react-native';

import {Icon} from 'native-base';
import Search from '../Layout/Search';

var SQLite = require('react-native-sqlite-storage');
var db = SQLite.openDatabase({name: 'en_vi', createFromLocation: '~en_vi_full_json.db'})

  
export default class Home extends Component {

    

    isPress = () => {
        db.transaction((tx) => {
            tx.executeSql('SELECT * FROM word WHERE word.word LIKE "hel%" ', [], (tx, results) => {
                console.log("Query completed");
           
                var len = results.rows.length;
                for (let i = 0; i < len; i++) {
                  let row = results.rows.item(i);
                  console.log(JSON.stringify(row));
                }
           
              });
          });
    }

    render() {
        return (
            <View style={styles.main}>
                <Search  navigation = {this.props.navigation} />
                <View style={styles.separate}></View>
                <View style={styles.container}>
                    <TouchableOpacity onPress={this.isPress}>
                        <View style={styles.translate}>
                            <Icon style={styles.icon} name="md-globe" size={35} color="#900" />
                            <Text>DỊCH ONLINE</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.separate}></View>   
                <View>
                    <Text>Tìm kiếm gần đây</Text>
                </View>

            </View>
        );
    }
    
    
}


const styles = StyleSheet.create({
    main: {
        alignItems: 'center'
    },
    container: {
        backgroundColor: '#1E90FF',
        width: 150,
        borderRadius: 5
    },
    separate: {
        paddingTop: 10
    },
    translate: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
        
    },
    icon: {
        paddingRight: 10
    }
})

