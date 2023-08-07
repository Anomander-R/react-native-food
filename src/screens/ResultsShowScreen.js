import React, {useState, useEffect} from 'react'
import {Text, View, StyleSheet, FlatList, Image} from 'react-native';
import yelp from '../api/yelp';

const ResultsShowScreen = ({navigation}) => {
  const [result, setResult] = useState(null);
  const id = navigation.getParam('id');

  const getResult = async (id)=>{
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };

  useEffect(() => {
      getResult(id);
  }, [])
  
  if (!result){
    return null;
  }
  
  return (
    <View>
        <Text style={styles.textStyle}>{result.name}</Text>
        <FlatList
          data={result.photos}
          keyExtractor={photo=> photo}
          renderItem={({item})=>{
            return <Image 
                      source={{ uri: item}}
                      style={styles.imageStyle}
                      />
                      
          }}
        />
    </View>
  )
};

const styles = StyleSheet.create({
  imageStyle: {
    width: 250,
    height:120,
    borderRadius: 4,
    marginBottom: 10,
    marginTop:10,
    alignSelf: 'center'
},
viewStyle:{
  display: 'flex', 
  alignContent: 'center'
},
textStyle: {
  alignSelf: 'center',
  fontSize: 18,
  fontWeight: 'bold',
  marginTop: 20,

}
});

export default ResultsShowScreen;