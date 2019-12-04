import React, {Component} from 'react';
import {StyleSheet, FlatList, Text} from "react-native";
import {connect} from "react-redux";
import {onInitItems} from "../store/actions";
import PlaceItem from "../components/PlaceItem";

class Main extends Component {
    componentDidMount() {
        this.props.onInitItems();
    }

    render() {
        return (
            <FlatList
                style={styles.list}
                data={this.props.items}
                renderItem={(info) => {
                    console.log(info);
                    return <PlaceItem
                        place={info.item}
                    />
                }}
                keyExtractor={(item) => item.id}
            />
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

export default connect(mapStateToProps, mapDispatchToProps)(Main);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    list: {
        marginTop: 10
    }
});