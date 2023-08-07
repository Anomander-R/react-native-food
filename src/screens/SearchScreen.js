
import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = ({navigation}) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();

    const filterResultsByPrice =(price)=>{
        //  price === '$' || '$$' || '$$$'
        return results.filter(result=>{
            return result.price === price;
        })
    };

  return (
    <>
        
        <SearchBar 
            term={searchTerm} 
            onTermChange={(newTerm)=>setSearchTerm(newTerm)}
            onTermSubmit={()=>searchApi(searchTerm)}/>

        <ScrollView >
            <ResultsList 
                title="Cost Effective" 
                results={filterResultsByPrice('$')} 
                navigation={navigation}/>
            <ResultsList 
                title="Bit Pricier" 
                results={filterResultsByPrice('$$')} 
                navigation={navigation}/>
            <ResultsList 
                title="Big Spender" 
                results={[...filterResultsByPrice('$$$'), ...filterResultsByPrice('$$$$')]} 
                navigation={navigation}/>
        </ScrollView>
    </>
  )
};

const styles = StyleSheet.create({
    backgroundCol: {
        backgroundColor: '#FFF',
        flex: 1,
    },
    marginLeftStyle: {
        marginLeft: 15,
    },

});

export default SearchScreen;