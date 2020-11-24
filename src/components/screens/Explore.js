import React from 'react';
import {Text,View,FlatList} from 'react-native';
import Header from '../Header'
import Card from '../Card'
import {useSelector} from 'react-redux'

const LittleCard = (props) =>{

    return(
        <View style={{backgroundColor:"red",marginTop:10,width:150,height:50,borderRadius:4}}>
            <Text style={{textAlign:"center",color:'white',marginTop:10,fontSize:20}}>{props.name}</Text>
        </View>
    )
}

const Explore = () => {
    const cardData = useSelector(state=>{
        return state.cardData
    })
    
    return (
        <View style={{flex:1}}>
            <Header/>
            <View style={{flexDirection:'row',flexWrap:'wrap',justifyContent:'space-around'}}>
            <LittleCard name="Gaming"/>
            <LittleCard name="Trending"/>
            <LittleCard name="Music"/>
            <LittleCard name="News"/>
            <LittleCard name="Movies"/>
            <LittleCard name="Fashion"/>
            </View>
            <Text style={{margin:8,fontSize:22,borderBottomWidth:2}}>
                Trending Videos
            </Text>
            <FlatList
      data={cardData}
      renderItem={({item})=> {
        return <Card
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

export default Explore;