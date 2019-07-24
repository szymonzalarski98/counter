import React from 'react';
import { View, Text, StyleSheet  } from 'react-native';
import { useSelector } from 'react-redux';
import Display from './Display';

const Main = () => {
    const counter = useSelector((state: { counter: number; }) => state.counter);
    return (
        <View style={styles.container}>
            <Display counter={counter} />
        </View>
    )
}

export default Main;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
    wrapper: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
    },
})