import React from 'react';
import { StyleSheet, Text,Image, View, Dimensions ,TouchableOpacity} from 'react-native';
import { FontAwesome,EvilIcons,MaterialCommunityIcons,AntDesign } from '@expo/vector-icons';
import {useNavigation,useTheme} from '@react-navigation/native'


const Card = (props) => {

    const navigation = useNavigation()
    const {colors} = useTheme()
    const textColor = colors.iconColor

    return (
        <TouchableOpacity onPress={() => navigation.navigate('videoPlayer',{videoId:props.videoId,title:props.title})}>
        <View style={{elevation:10,margin:5,marginBottom:10}}>
            <Image style={{width:'100%',height:200}} source={{uri:`https://i.ytimg.com/vi/${props.videoId}/hqdefault.jpg`}}/>
            <View style={{flexDirection:"row",margin:5}}>
                <MaterialCommunityIcons name="account-circle" size={40} color="black" />
                <View style={{marginLeft:10}}>
    <Text style={{fontSize:20,width:Dimensions.get('screen').width-50,color:textColor}}ellipsizeMode='tail' numberOfLines={2}>{props.title}</Text>
    <Text style={{color:textColor}}>{props.channel}</Text>
                </View>
              
            </View>
        </View>
        </TouchableOpacity>
    )
}

export default Card;