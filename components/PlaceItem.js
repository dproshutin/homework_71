import React from "react";
import {View, Text, StyleSheet, Image, TouchableOpacity} from "react-native";

export default function PlaceItem(props) {
    return (
        <TouchableOpacity
            key={props.place.id}
            style={styles.placeItem}
        >
            <Image
                source={props.place.thumbnail}
                style={styles.image}
            />
            <Text style={{fontSize: 15}}>{props.place.title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    placeItem: {
        padding: 20,
        backgroundColor: "#eee",
        marginBottom: 10,
        marginLeft: 10,
        marginRight: 10,
        flexDirection: "row",
        alignItems: "center"
    },
    image: {
        width: 50,
        height: 50,
        marginRight: 10
    }
});