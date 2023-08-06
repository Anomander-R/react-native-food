
import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();

    const filterResultsByPrice =(price)=>{
        //  price === '$' || '$$' || '$$$'
        return results.filter(result=>{
            return result.price === price;
        })
    };

  return (
    <View style={styles.backgroundCol}>
        
        <SearchBar 
            term={searchTerm} 
            onTermChange={(newTerm)=>setSearchTerm(newTerm)}
            onTermSubmit={()=>searchApi(searchTerm)}/>
        {errorMessage.length!==0 
            ? <Text>{errorMessage}</Text> 
            : <Text>We have found {results.length} results</Text>
        }
        <ResultsList title="Cost Effective" results={filterResultsByPrice('$')}/>
        <ResultsList title="Bit Pricier" results={filterResultsByPrice('$$')}/>
        <ResultsList title="Big Spender" results={[...filterResultsByPrice('$$$'), ...filterResultsByPrice('$$$$')]}/>
    </View>
  )
};

const styles = StyleSheet.create({
    backgroundCol: {
        backgroundColor: '#FFF',
    }
});

export default SearchScreen;