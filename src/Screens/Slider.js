import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Swiper from 'react-native-swiper';
import {Slider1, Slider2, Slider3, Slider4, Slider5} from '../Assets/Icons';

const Slider = (props) => {
  return (
    <View style={{flex: 1, width: wp('100%'), height: hp('100%')}}>
      <Swiper
        style={{height: hp('100%')}}
        activeDot={
          <View
            style={{
              bottom: hp('4%'),
              backgroundColor: '#ff0066',
              width: wp('2%'),
              height: hp('1%'),
              borderRadius: hp('1%'),
              margin: hp('3%'),
            }}
          />
        }
        dot={
          <View
            style={{
              bottom: hp('4%'),
              backgroundColor: 'rgba(255, 0, 102, 0.26)',
              width: wp('2%'),
              height: hp('1%'),
              borderRadius: hp('1%'),
              margin: hp('3%'),
            }}
          />
        }>
        <View style={{alignItems: 'center'}}>
          <ImageBackground
            source={Slider1}
            style={{
              height: hp('100%'),
              width: wp('100%'),
              justifyContent: 'flex-end',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              onPress={props.onPressGetSkip1}
              style={{
                bottom: hp('10%'),
                height: hp('5%'),
                width: wp('90%'),
                justifyContent: 'center',
                alignItems: 'flex-end',
              }}>
              <Text style={{fontSize: hp('3%'), color: '#ff0066'}}> Skip</Text>
            </TouchableOpacity>
          </ImageBackground>
        </View>

        <View style={{alignItems: 'center'}}>
          <ImageBackground
            source={Slider2}
            style={{
              height: hp('100%'),
              width: wp('100%'),
              justifyContent: 'flex-end',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              onPress={props.onPressGetSkip2}
              style={{
                bottom: hp('10%'),
                height: hp('5%'),
                width: wp('90%'),
                justifyContent: 'center',
                alignItems: 'flex-end',
              }}>
              <Text style={{fontSize: hp('3%'), color: '#ff0066'}}> Skip</Text>
            </TouchableOpacity>
          </ImageBackground>
        </View>

        <View style={{alignItems: 'center'}}>
          <ImageBackground
            source={Slider3}
            style={{
              height: hp('100%'),
              width: wp('100%'),
              justifyContent: 'flex-end',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              onPress={props.onPressGetSkip3}
              style={{
                bottom: hp('10%'),
                height: hp('5%'),
                width: wp('90%'),
                justifyContent: 'center',
                alignItems: 'flex-end',
              }}>
              <Text style={{fontSize: hp('3%'), color: '#ff0066'}}> Skip</Text>
            </TouchableOpacity>
          </ImageBackground>
        </View>

        <View style={{alignItems: 'center'}}>
          <ImageBackground
            source={Slider4}
            style={{
              height: hp('100%'),
              width: wp('100%'),
              justifyContent: 'flex-end',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              onPress={props.onPressGetSkip4}
              style={{
                bottom: hp('10%'),
                height: hp('5%'),
                width: wp('80%'),
                justifyContent: 'center',
                alignItems: 'flex-end',
              }}>
              <Text style={{fontSize: hp('3%'), color: '#ff0066'}}> Skip</Text>
            </TouchableOpacity>
          </ImageBackground>
        </View>

        <View style={{alignItems: 'center'}}>
          <ImageBackground
            source={Slider5}
            style={{
              height: hp('100%'),
              width: wp('100%'),
              justifyContent: 'flex-end',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              onPress={props.onPressGetSkip5}
              style={{
                bottom: hp('10%'),
                height: hp('5%'),
                width: wp('90%'),
                justifyContent: 'center',
                alignItems: 'flex-end',
              }}>
              <Text style={{fontSize: hp('3%'), color: '#ff0066'}}>
                {' '}
                Get Started
              </Text>
            </TouchableOpacity>
          </ImageBackground>
        </View>
      </Swiper>
    </View>
  );
};

export default Slider;
