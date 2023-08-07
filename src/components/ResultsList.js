import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import { withNavigation } from 'react-navigation';
import ResultsDetail from './ResultsDetail';

const ResultsList = ({title, results, navigation}) => {
  return (results.length !==0) ? <View>
            <Text style={styles.titleStyle}>{title}</Text>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                // in JSX we can write only horizontal if horizontal={true}
                data={results}
                keyExtractor={result=>result.id}
                renderItem={({item})=>{
                    return (
                    <TouchableOpacity 
                        onPress={()=> navigation.navigate('ResultsShow', {id: item.id})}>
                            <ResultsDetail result={item}/>
                    </TouchableOpacity>
                    );
                }}
            />
        </View>: null
}

const styles = StyleSheet.create({
    titleStyle:{
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
    }
});

export default withNavigation(ResultsList);