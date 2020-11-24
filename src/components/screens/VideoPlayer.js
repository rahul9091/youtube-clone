import React from 'react';
import {Text,View,Dimensions} from 'react-native';
import Header from '../Header'
import {WebView} from 'react-native-webview';
// import Constant from 'expo-constants';
import {useTheme} from '@react-navigation/native'




const VideoPlayer = ({route}) => {
        const {videoId,title} = route.params
        const {colors} = useTheme()
         const textcolor = colors.iconColor
    return (
        <View style={{flex:1}}>
            <Header/>
            <View style={{width:'100%',height:200}}>
                <WebView source={{uri:`https://www.youtube.com/embed/${videoId}`}}
                javaScriptEnabled={true}
                domStorageEnabled={true}
                />
                
            </View>
            <Text style={{fontSize:20,width:Dimensions.get('screen').width-50,margin:9,color:textcolor}} ellipsizeMode="tail" numberOfLines={2}>
                {title}
            </Text>
            <View style={{borderBottomWidth:1}}>

            </View>
        </View>
    )
}

export default VideoPlayer;