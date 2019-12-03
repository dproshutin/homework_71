import React, {Component} from 'react';
import {StyleSheet} from "react-native";

class Main extends Component {
    render() {
        return (
            <div>Hello World</div>
        );
    }
}

export default Main;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});