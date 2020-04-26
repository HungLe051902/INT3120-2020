import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Search from '../Layout/Search'; 

export default class LookUp extends Component {
    
    render() {
        return (
            <View>
                <View>
                    <Search  navigation = {this.props.navigation} />
                </View>
            </View>
        );
    }
    
}
