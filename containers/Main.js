import React, {Component} from 'react';
import {StyleSheet} from "react-native";
import {connect} from "react-redux";
import {onInitItems} from "../store/actions";

class Main extends Component {
    componentDidMount() {
        this.props.onInitItems();
    }

    render() {
        return (
            <div>Hello World</div>
        );
    }
}

const mapStateToProps = state => {
    return {
        items: state.items
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onInitItems: () => dispatch(onInitItems())
    };
};

export default connect(mapStateToProps, mapDispatchToProps) (Main);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});