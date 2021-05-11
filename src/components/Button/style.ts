import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

export const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center', 
  },
  buttonTotal:{
    paddingHorizontal: 20,
    height: 56, 
    borderRadius: 16,
    marginBottom: 10,
  },
  buttonModal:{
    paddingHorizontal: 15,
    height: 38,
    borderRadius: 12,
  },
  buttonChevron:{
    width: 56,
    height: 56, 
    borderRadius: 16,
    marginBottom: 10,
  },
  buttonText:{
    color: colors.white,
    fontSize: 20,
  },
  textModal:{
    color: colors.white,
    fontSize: 18,
  },
  buttonIcon: {
    fontSize:24,
  },
  cancel:{
    backgroundColor: colors.red,
  },
  main:{
    backgroundColor: colors.green,
  }
});