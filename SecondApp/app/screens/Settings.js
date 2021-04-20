import React from 'react';
import {View, Text, StyleSheet, ScrollView} from "react-native";

const Settings = (props) => {
    return(

        <View style={styles.container}>
            {/* {<Text>Settings</Text>} */}
            <ScrollView style={{flex:1}}/>
        </View>
    )}
    export default Settings;

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            // alignItems: 'center',
            // justifyContent: 'center'
        },
    });