import React,{useState} from 'react';
import {TextInput, View,ScrollView,FlatList,ActivityIndicator} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import Constant from 'expo-constants'
import MiniCard from '../MiniCard';
import { useTheme } from '@react-navigation/native'
import {useSelector,useDispatch} from 'react-redux';




const Search = ({navigation}) => {
    const {colors} = useTheme()
    const myColor = colors.iconColor

    const[value,setValue] = useState("")
    // const [miniCard,setMiniCard] = useState([]) 
    const dispatch = useDispatch()
    const miniCard = useSelector(state=>{
        return state.cardData
    })
    const[loading,setLoading] = useState(false)

    const fetchData = () => {
        setLoading(true)
        fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=1000&q=${value}&type=video&key=AIzaSyDC5g-76g6yeXdrD6BTTLzfBzq7E9GDgdY`)
        .then(res=>res.json())
        .then(data=>{
            // setMiniCard(data.items)
            dispatch({type:'add',payload:data.items})
            setLoading(false)
            console.log(data)
        })
    }

    return (
        <View style={{flex:1,elevation:20}}>
            <View style={{
                padding:5,
                flexDirection:'row',
                backgroundColor:colors.headerColor,
                marginTop:Constant.statusBarHeight,
                justifyContent:'space-around',
                elevation:20
            }}>
                <Ionicons style={{color:myColor}} onPress={()=> navigation.goBack()} name="md-arrow-back" size={32} />
                <TextInput style={{width:'70%',marginLeft:20,backgroundColor:"#e6e6e6",fontSize:20}}
                placeholder="Search" 
                value={value}
                onChangeText={(text)=>setValue(text)} 
                onSubmitEditing={() => fetchData()}
                />
            
                <Ionicons style={{color:myColor}} onPress={()=>fetchData()} name="ios-send" size={30} />
            </View>
            {loading ?  <ActivityIndicator style={{marginTop:10}} size="large" color="red"/> : null }
           
           

            <FlatList
            data={miniCard}
            renderItem={({item})=>{
                return <MiniCard
                videoId={item.id.videoId}
                title={item.snippet.title}
                channel={item.snippet.channelTitle}
                />
            }}
            keyExtractor={item=>item.id.videoId}
            />

        </View>
    )
}

export default Search;