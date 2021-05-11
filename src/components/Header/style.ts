import { StyleSheet, Dimensions } from 'react-native'
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

const deviceHeight = Dimensions.get("window").height;

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20,
    marginTop: getStatusBarHeight(),
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  greeting: {
    fontFamily: fonts.text,
    fontSize: 32,
    color: colors.heading,
  },
  userName: {
    fontFamily: fonts.heading,
    fontSize: 32,
    color: colors.heading,
    lineHeight: 40
  },
  buttonIcon: {
    fontSize:24,
    color: colors.heading,
  },
  containerModal:{ 
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
});