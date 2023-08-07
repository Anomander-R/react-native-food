import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';


const ResultsDetail = ({result}) => {
  return (
    <View style={styles.viewStyle}>
        <Image source={{uri: result.image_url}} style={styles.imageStyle}/>
       <Text style={styles.nameStyle}>{result.name} </Text>
       <Text style={styles.reviewStyle}>{result.rating} Stars, {result.review_count} Reviews</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    viewStyle:{
        width: 330,
        marginHorizontal: 15
    },
    nameStyle:{
        fontSize: 14,
        fontWeight: 'bold',
        lineHeight: 16
    },

    reviewStyle:{
        fontSize: 12,
        fontWeight: 'bold',
        color: "#827878",
        lineHeight: 20,
        marginBottom: 30,
    },
    imageStyle: {
        width: 250,
        height:120,
        borderRadius: 4,
        marginBottom: 10,
        marginTop:20,
    }
});

export default ResultsDetail