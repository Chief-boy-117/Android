import React from 'react';
import {
  StyleSheet,
  FlatList,
  View,
  Button,
  Text,
  TouchableOpacity
} from 'react-native';
//import { ListItem, Icon } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';
import { useDispatch, useSelector } from 'react-redux';
import { deleteFood } from './actions/food';

const FoodList = () => {

  const dispatch = useDispatch();

  const deleteCurrent = (key) => dispatch(deleteFood(key))

  const foods = useSelector(state => state.foodReducer.foodList)

  return (
    <FlatList style={styles.listContainer} contentContainerStyle={styles.containerStyle}
      data={foods}
      keyExtractor={(item, index) => item.key.toString()}
      renderItem={
        (data) =>
        <View style={styles.listContainer}>
          <View style={{flex:7,backgroundColor:'white',paddingHorizontal:3,alignItems:'center',justifyContent:'center'}}>
            <Text style={styles.listText}>{data.item.name}</Text>
          </View>
          <TouchableOpacity onPress={()=>deleteCurrent(data.item.key)}
            style={styles.deleteOpacity}>
            <Icon name="trash" color = "white" size = {25}/>
          </TouchableOpacity>
        </View>
          
      }
    />
  );
}
{/*<ListItem
  title={data.item.name}
  bottomDivider
  rightIcon={<Icon
    name='delete'
    size={36}
    onPress={() => deleteCurrent(data.item.key)} />
  }
/>*/}
const styles = StyleSheet.create({
  listContainer: {
    backgroundColor: '#212121',
    padding: 16,
    display:'flex',
    /*justifyContent:'center',
    alignItems:'center'*/
  },
  containerStyle:{
    display:'flex',
    flexDirection:'column', 
    justifyContent:'center',
    alignContent:'center'
  },
  listText: {
    fontSize: 30,
    //flex:7,
    //display:'flex',
    //width:'90%',
    color:'black'
  },
  deleteOpacity:{
    backgroundColor:'red',
    alignItems:'center',
    width:'100%',
    padding:5
  }
});

export default FoodList;