import React from 'react';
import {ScrollView, StyleSheet, Text, View, FlatList} from "react-native";
import PlaceItem from "./PlaceItem";

export default function PlacesList(props) {
    return (
        <FlatList style={{marginTop: 10}}
                  data={props.items}
                  renderItem={(info) => {
                      return <PlaceItem
                          place={info.item}
                      />
                  }}
                  windowSize={5}
                  initialListSize={8}
                  initialNumToRender={8}
                  maxToRenderPerBatch={9}
                  onEndReachedThreshhold={0.4}
                    onEndReached={props.load}
                  keyExtractor={(item) => item.id}
        />
    );

}