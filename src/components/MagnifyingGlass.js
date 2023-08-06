import React from 'react'
import {View, StyleSheet} from 'react-native';
import { Entypo } from '@expo/vector-icons';

const MagnifyingGlass = () => {
  return (

    <Entypo name="magnifying-glass" color="black" style={styles.iconStyle} />
)
}

const styles = StyleSheet.create({
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15
    }
});

export default MagnifyingGlass