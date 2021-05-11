import { StyleSheet, Dimensions } from 'react-native'
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

const deviceHeight = Dimensions.get("window").height;

export const styles = StyleSheet.create({
  container:{ 
    flex: 1, 
    backgroundColor: '#000000AA', 
    justifyContent: 'center' 
  },
  bodyModal: {
    position: 'absolute',
    top: "30%",
    backgroundColor: '#ffffff',
    width: '100%',
    borderRadius: 20,
    paddingHorizontal: 40,
    paddingVertical: 20,
    maxHeight: deviceHeight * 0.4
  },
  title:{ 
    fontFamily: fonts.heading,
    textAlign: 'center', 
    color: '#182e44', 
    fontSize: 20, 
    fontWeight: '500' 
  },
  input: {
    borderBottomWidth: 1,
    borderColor: colors.gray,
    color: colors.heading,
    width: '100%',
    fontSize: 18,
    marginTop: 20,
    padding: 10,
    textAlign: 'center',
  },
  footer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 40,
    marginBottom:10,
    paddingHorizontal: 20
  },
})