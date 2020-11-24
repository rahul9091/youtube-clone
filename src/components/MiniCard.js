import React from 'react';
import {Text,View,Image,Dimensions,TouchableOpacity} from 'react-native';
import {useNavigation,useTheme} from '@react-navigation/native'



const MiniCard = (props) => {
    
    const {colors} = useTheme()
    const textColor = colors.iconColor
    const navigation = useNavigation()

    return (
        <TouchableOpacity onPress={() => navigation.navigate('videoPlayer',{videoId:props.videoId,title:props.title})}>
        <View style={{flexDirection:'row',marginLeft:10,marginTop:10,marginBottom:5}}>
            <Image style={{width:'45%',height:100}} 
            source={{uri:`https://i.ytimg.com/vi/${props.videoId}/hqdefault.jpg`}}/>
            <View style={{padding:5,marginLeft:8}}>
                <Text style={{
                    fontSize:18,
                    color:textColor,
                    width:Dimensions.get('screen').width/2
                }} ellipsizeMode="tail"numberOfLines={3}>
                    {props.title}
                </Text>
                <Text style={{fontSize:12,marginTop:4,color:textColor}} >
                    {props.channel}
                </Text>
            </View>
        </View>
        </TouchableOpacity>

    )
}

export default MiniCard;