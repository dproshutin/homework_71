import React, {Component} from 'react';
import {StyleSheet, FlatList, Text, ActivityIndicator, View} from "react-native";
import {connect} from "react-redux";
import {onInitItems, loadNextItems} from "../store/actions";
import PlaceItem from "../components/PlaceItem";
import PlacesList from "../components/PlacesList";

class Main extends Component {
    componentDidMount() {
        this.props.onInitItems();
    }

    render() {
        let spinner = (this.props.loading) ?
            <View style={[styles.containerForSpinner, styles.horizontal]}>
                <ActivityIndicator size="large" color="#0000ff"/>
            </View> : null;
        return (
            <View style={styles.container}>
                {spinner}
                <PlacesList
                    style={styles.list}
                    items={this.props.items}
                    load={this.props.loadNextItems}
                />
            </View>
        );
    }
}

const mapStateToProps = state => {
    return {
        items: state.items,
        loading: state.loading,
        after: state.after
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onInitItems: () => dispatch(onInitItems()),
        loadNextItems: () => dispatch(loadNextItems())
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
    },
    containerForSpinner: {
        flex: 1,
        justifyContent: 'center'
    },
    horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10
    }
});