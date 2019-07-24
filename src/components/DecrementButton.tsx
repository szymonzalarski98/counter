import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useDispatch } from 'react-redux';
import { buttonStyles } from '../styles/buttonStyles';
import { decrementCounter } from '../actions/index.js';

interface Props {
    counter: number
}

const DecrementButton: React.FC<Props> = ({ counter }) => {
    const dispatch = useDispatch();
    const [timer, setTimer] = React.useState(0);
    const autoCounter = () => {
        dispatch(decrementCounter());
        setTimer(() => setInterval(() => dispatch(decrementCounter()), 100))
    }
    const stopTimer = () => {
        clearInterval(timer);
    }
    return (
        <TouchableOpacity
            disabled={counter === 0 ? true : false}
            delayLongPress={500}
            onLongPress={() => autoCounter()}
            onPressOut={stopTimer}
            onPress={() => dispatch(decrementCounter())}
            style={buttonStyles.button}>
            <Icon name="minus" color="#fff" size={45} />
        </TouchableOpacity>
    )
}

export default DecrementButton;