import { StyleSheet, Dimensions } from 'react-native';

const deviceWidth = Dimensions.get('window').width;

export const buttonStyles = StyleSheet.create({
  button: {
    width: deviceWidth * 0.4,
    height: deviceWidth * 0.4,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    backgroundColor: '#455a64',
    marginHorizontal: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
});
