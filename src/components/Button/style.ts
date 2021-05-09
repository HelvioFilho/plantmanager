import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

export const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.green,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    marginBottom: 10,
    height: 56, 
  },
  buttonTotal:{
    paddingHorizontal: 20,
  },
  buttonChevron:{
    width: 56,
  },
  buttonText:{
    color: colors.white,
    fontSize: 24,
  },
  buttonIcon: {
    fontSize:24,
  }
});