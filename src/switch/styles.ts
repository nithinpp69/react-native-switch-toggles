import { StyleSheet } from 'react-native';

const styles = (props) =>
  StyleSheet.create({
    switchContainer: {
      opacity: props.disabled ? 0.6 : 1,
    },
    container: {
      width: props.switchWidth,
      height: props.switchHeight,
      backgroundColor: 'rgba(0,0,0,0.25)',
      borderRadius: props.switchBorderRadius,
      justifyContent: 'center',
      overflow: 'hidden',
    },
    thumb: {
      height: props.switchHeight - 10,
      width: props.switchHeight - 10,
      borderRadius: props.switchBorderRadius,
      margin: 5,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
    },
    onIndicator: {
      width: '50%',
      height: '100%',
      backgroundColor: 'transparent',
      position: 'absolute',
      left: 0,
      alignItems: 'center',
      justifyContent: 'center',
    },
    offIndicator: {
      width: '50%',
      height: '100%',
      backgroundColor: 'transparent',
      position: 'absolute',
      right: 0,
      alignItems: 'center',
      justifyContent: 'center',
    },
    thumbIconContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default styles;
