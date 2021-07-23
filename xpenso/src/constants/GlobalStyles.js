import {StyleSheet, Dimensions} from 'react-native';
import Colors from '../constants/Colors';

const {width, height} = Dimensions.get('window');

const GlobalStyles = StyleSheet.create({
  windowWidth: width,
  windowHeight: height,
  mainView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    justifyContent: 'center',
    padding: 10,
    borderRadius: 5,
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.primary,
    elevation: 1,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 2.62,
  },
  buttonText: {
    color: Colors.primary,
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },
  buttonDisabledContainer: {
    opacity: 0.6,
    // backgroundColor: Colors.greyText,
  },
  secondaryButtonContainer: {
    justifyContent: 'center',
    padding: 10,
    borderRadius: 5,
    backgroundColor: Colors.primary,
    elevation: 1,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 2.62,
  },
  secondaryButtonText: {
    color: Colors.white,
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },
  flexStyle: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
  },
  footerText: {
    fontSize: 14,
    textAlign: 'center',
  },
  emptyContainer: {
    padding: 16,
    alignItems: 'center',
  },
  divider: {
    borderRightWidth: 0.5,
    borderRightColor: '#ffffff',
    marginVertical: 10,
  },
  topBar: {
    backgroundColor: Colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: Colors.white,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.15,
    shadowRadius: 5.62,
    elevation: 4,
  },
  isOnlineDot: (isOnline, isActive) => ({
    height: 8,
    width: 8,
    borderRadius: 50,
    backgroundColor: !isOnline
      ? Colors.greyText
      : isActive
      ? Colors.green
      : Colors.yellow,
  }),
  notificationDot: {
    backgroundColor: Colors.unapproved,
    height: 8,
    width: 8,
    borderRadius: 50,
  },
  bottomButtonContainer: (isActive) => ({
    borderWidth: 1,
    borderColor: Colors.secondary,
    backgroundColor: Colors.secondary,
    opacity: isActive ? 1 : 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    height: 42,
  }),
  bottomButtonText: {
    color: Colors.white,
    paddingHorizontal: 8,
    paddingVertical: 3,
    fontWeight: 'bold',
  },
  flex1: {
    flex: 1,
  },
  flexGrow1: {
    flexGrow: 1,
  },
  cardContainer: {
    marginTop: 12,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.15,
    shadowRadius: 5.62,
    elevation: 3,
    borderRadius: 5,
    backgroundColor: Colors.white,
  },
});

export default GlobalStyles;
