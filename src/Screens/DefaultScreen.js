import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Images,
  SafeAreaView,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Slider from '../Screens/Slider';
import {Slider1, Slider2, Slider3, Slider4, Slider5} from '../Assets/Icons';
// import AsyncStorage from '@react-native-async-storage/async-storage';

import Button from '../Components/Button';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Navigation from '../Navigation/Navigation';

export default class DefaultScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activateSlider: true,
    };
  }

  componentDidMount() {
    // AsyncStorage.getItem('FirstTime').then((resp) => {
    //   console.log('Hlo', resp);
    //   if (resp == null) {
    //     this.setState({activateSlider: true});
    //   } else {
    //     this.setState({activateSlider: false});
    //   }
    // });
  }

  onSkip = () => {
    this.setState({activateSlider: false});
    // AsyncStorage.setItem('FirstTime', true);
    //hello
  };

  render() {
    return (
      <View style={styles.container}>
        {this.state.activateSlider ? (
          <Slider
            onPressGetSkip1={() => this.onSkip()}
            onPressGetSkip2={() => this.onSkip()}
            onPressGetSkip3={() => this.onSkip()}
            onPressGetSkip4={() => this.onSkip()}
            onPressGetSkip5={() => this.onSkip()}
          />
        ) : (
          <ImageBackground
            source={Slider3}
            style={{
              height: hp('100%'),
              width: wp('100%'),
              alignItems: 'center',
            }}>
            <View
              style={{
                marginTop: hp('10%'),
                alignItems: 'center',
                width: wp('80%'),
                alignSelf: 'center',
                alignItems: 'flex-start',
              }}>
              <Text
                style={{
                  color: 'white',
                  fontSize: hp('4.5%'),
                  fontWeight: 'bold',
                }}>
                Create a New Account
              </Text>
              {/* <Text style={{color:"white",fontSize:hp("3.5%"),fontWeight:"bold"}}></Text> */}
            </View>

            <View
              style={{
                marginVertical: hp('2%'),
                width: wp('80%'),
                alignSelf: 'center',
              }}>
              <Text style={{color: 'white', fontSize: hp('3%')}}>
                For the best experience{' '}
              </Text>
              <Text style={{color: 'white', fontSize: hp('3%')}}>
                with BeautyApp
              </Text>
            </View>

            <View
              style={{
                top: hp('35%'),
                width: wp('100%'),
                height: hp('10%'),
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Button
                // onPressButton={()=>{ this.props.navigation.navigate('SignUp')}}
                touchStyle={{width: wp('90%'), backgroundColor: '#ff0066'}}
                textStyle={{fontWeight: 'bold', fontSize: hp('3%')}}
                title="REGISTER"
              />
            </View>

            <View
              style={{
                // backgroundColor: 'green',
                height: hp('10%'),
                width: wp('90%'),
                justifyContent: 'center',
                alignItems: 'center',
                top: hp('40%'),
              }}>
              <View>
                <Text style={{fontSize: hp('3.5%'), color: 'white'}}>
                  Already have an Account ?.
                </Text>
              </View>

              <TouchableOpacity
                style={{}}
                // onPress={() =>navigation.navigate("Login")}
              >
                <Text style={{fontSize: hp('4%'), color: 'white'}}>Login</Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
