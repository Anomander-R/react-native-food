
import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import MagnifyingGlass from './MagnifyingGlass';


const SearchBar = ({term, onTermChange, onTermSubmit}) => {
  return (
    <View style={styles.backgroundStyle}>
        <MagnifyingGlass/>
        <TextInput
            autoCapitalize='none'
            autoCorrect={false}
            placeholder='Search'
            value={term}
            style={styles.inputStyle}
            onChangeText={(newTerm)=>onTermChange(newTerm)}
            onEndEditing={()=>onTermSubmit()}/>
    </View>
  )
};

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'stretch',
        marginHorizontal: 15,
        marginTop: 10,
    },
    inputStyle: {
        // borderColor: 'black',
        // borderWidth: 1,
        flex: 1,
        fontSize: 18,
    }
});

export default SearchBar;