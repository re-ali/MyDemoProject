import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Button = (props) => {
  return (
    <TouchableOpacity
      onPress={props.onPressButton}
      style={{flex: 1, alignSelf: 'center'}}
      style={[styles.touchStyle, props.touchStyle]}>
      <Text style={[styles.textStyle, props.textStyle]}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  touchStyle: {
    height: hp('8%'),
    justifyContent: 'center',
    alignItems: 'center',
    width: wp('70%'),
    backgroundColor: '#ff0066',
    borderRadius: 5,
  },
  textStyle: {
    color: '#fff',
    width: wp('100%'),
    fontWeight: 'bold',
    fontSize: hp('4%'),
    textAlign: 'center',
  },
});

export default Button;
