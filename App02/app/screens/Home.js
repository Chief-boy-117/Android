import React from 'react';
import {View, Text, StyleSheet, Button} from "react-native";
import { color } from 'react-native-reanimated';

const Home = ({navigation}) => {
    return(

        <View style={styles.container}>
            <Button 
            title="Settings" 
            onPress={()=>navigation.navigate('Settings')}/>
        </View>
    )}
    export default Home;

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
        }
    });