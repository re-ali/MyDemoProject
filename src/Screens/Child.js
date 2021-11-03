import React, {Component} from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import Button from '../Components/Button';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default class Child extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleLogin = () => {};
  render() {
    return (
      <View>
        <Text
          style={{
            alignSelf: 'center',
            fontSize: 40,
          }}>
          {this.props.message}
        </Text>

        <View style={{marginTop: hp('10%')}}>
          <Button
            touchStyle={{
              width: wp('70%'),
              backgroundColor: 'skyblue',
              height: hp('9%'),
              alignSelf: 'flex-start',
            }}
            onPressButton={() => this.handleLogin()}
            textStyle={{fontWeight: 'bold', fontSize: hp('3%')}}
            title={'Hello'}
          />
        </View>
      </View>
    );
  }
}
