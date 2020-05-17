import React from 'react';
import 'react-native';
import renderer from 'react-test-renderer';
import SettingsScreen from '../Components/Views/SettingsScreen';

it('renders correctly SettingsScreen', () => {
    const tree = renderer.create(<SettingsScreen />).toJSON();
    expect(tree).toMatchSnapshot();
})