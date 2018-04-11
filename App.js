import React from 'react';
import {AppRegistry, StatusBar, StyleSheet} from 'react-native';
import {Main} from "./app/main";

export default class App extends React.Component {
    async componentWillMount() {
        await Expo.Font.loadAsync({
            'Roboto': require('native-base/Fonts/Roboto.ttf'),
            'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
        });
    }

    render() {
        return (
            <Main/>
        );
    }
}

StatusBar.setBarStyle('default');
AppRegistry.registerComponent('App', () => App);


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
