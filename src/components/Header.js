
import React from 'react';
import {  Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Constant from 'expo-constants';
import { FontAwesome,EvilIcons,MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation ,useTheme } from '@react-navigation/native';
import {useDispatch,useSelector} from 'react-redux'



export default function Header() {

  const navigation = useNavigation() 
  const currentTheme =useSelector(state=>{
    return state.myDarkMode
  }) 
  const {colors} = useTheme()
  const dispatch = useDispatch()
  const mycolor = colors.iconColor
  return (
    <View style={{height:50,backgroundColor:colors.headerColor,padding:10,elevation:10,justifyContent:'space-between',marginTop:Constant.statusBarHeight,flexDirection:'row'}}>
        <View style={{flexDirection:'row'}}>
        <AntDesign style={{marginLeft:1}} name="youtube" size={35} color='red' />
        <Text style={{fontSize:25,fontWeight:'bold',marginLeft:10,marginTop:2,color:mycolor}}>YouTube</Text>
        </View>
        <View style={{flexDirection:'row',marginTop:5,justifyContent:'space-around',width:125}}>
        <FontAwesome style={{marginTop:3}} name="bell" size={20} color={mycolor} />
        <EvilIcons onPress={()=> navigation.navigate('search')}  name="search" size={30} color={mycolor} />
        <MaterialCommunityIcons 
        onPress={() => dispatch({type:'change_theme',payload:!currentTheme})}
        name="account-circle" size={24} color={mycolor} />
        </View>
    

    </View>
  );
}