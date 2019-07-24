import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useDispatch } from 'react-redux';
import { buttonStyles } from '../styles/buttonStyles';
import { incrementCounter } from '../actions/index.js';

interface Props {
    counter: number
}

const IncrementButton: React.FC<Props> = ({ counter }) => {
    const dispatch = useDispatch();
    const [timer, setTimer] = React.useState(0);
    const autoCounter = () => {
        dispatch(incrementCounter());
        setTimer(() => setInterval(() => dispatch(incrementCounter()), 100))
    }
    const stopTimer = () => {
        clearInterval(timer);
    }
    return (
        <TouchableOpacity
            disabled={counter === 100 ? true : false}
            delayLongPress={500}
            onLongPress={() => autoCounter()}
            onPressOut={stopTimer}
            onPress={() => dispatch(incrementCounter())}
            style={buttonStyles.button}>
            <Icon name="plus" color="#fff" size={45} />
        </TouchableOpacity>
    )
}

export default IncrementButton;