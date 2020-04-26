import React, { Component } from 'react';
import { View } from 'react-native';
import Search from '../Layout/Search';

export default class Favorite extends Component  {

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



