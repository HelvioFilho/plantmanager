import { StyleSheet, Dimensions } from 'react-native';
import colors from '../../styles/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  title:{
    fontSize: 32,
    textAlign: 'center',
    color: colors.heading,
    marginTop: 38,
  },
  subtitle:{
    textAlign: 'center',
    fontSize: 18,
    paddingHorizontal: 20,
    color: colors.heading,
  },
  button:{
      backgroundColor: colors.green,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 16,
      marginBottom: 10,
      height: 56,
      width: 56,
  },
  image:{
    height: Dimensions.get('window').width * 0.7,
  }

});