import React from 'react';
import { View, Text, StyleSheet, Dimensions  } from 'react-native';

const deviceWidth = Dimensions.get('window').width;

interface DisplayProps {
    counter: number
}

const Display: React.FC<DisplayProps> = ({ counter }) => {
    return (
        <View style={styles.container}>
            <View style={styles.displayContainer}>
                <Text style={styles.text}>{counter}</Text>
            </View>
        </View>
    )
}

export default Display;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    displayContainer: {
        width: deviceWidth * 0.8 + 10,
        height: deviceWidth * 0.4,
        backgroundColor: '#FF9500',
        borderRadius: 15,
        marginBottom: 10,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: deviceWidth * 0.25,
        color: '#fff',
        textAlign: 'center',
        fontWeight: '500',
    }
})