import React from 'react';
import {View, Text, StyleSheet, ScrollView} from "react-native";

const Settings = (props) => {
    return(

        <View style={styles.container}>
            { 
            <Text style={styles.Text}>Settings page</Text> 
            }
            <ScrollView style={{flex:1}}/>
        </View>
    )}
    export default Settings;

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',

        },
        Text: {
            fontSize: 20,
            fontWeight: "bold",
            color: "purple",
            textAlignVertical: "center",
        },
    });