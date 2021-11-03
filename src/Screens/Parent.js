import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import Child from './Child';

export default class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: 'green',
        }}>
        <ScrollView showsHorizontalScrollIndicator={false}>
          <View style={{flex: 1}}>
            <Text style={{fontSize: 30}}>This is Parent Component</Text>
            <Child message="This is custom heading " />

            <Child message="This is custom heading " />

            <Child message="This is custom heading " />

            <Child message="This is custom heading " />

            <Child message="This is custom heading " />
            <Child message="This is custom heading " />
            <Child message="This is custom heading " />
            <Child message="This is custom heading " />
            <Child message="This is custom heading " />
            <Child message="This is custom heading " />
            <Child message="This is custom heading " />
            <Child message="This is custom heading " />
            <Child message="This is custom heading " />
            <Child message="This is custom heading " />
            <Child message="This is custom heading " />
            <Child message="This is custom heading " />
            <Child message="This is custom heading " />
            <Child message="This is custom heading " />
            <Child message="This is custom heading " />
            <Child message="This is custom heading " />
            <Child message="This is custom heading " />
            <Child message="This is custom heading " />
            <Child message="This is custom heading " />
            <Child message="This is custom heading " />
            <Child message="This is custom heading " />
            <Child message="This is custom heading " />
            <Child message="This is custom heading " />
            <Child message="This is custom heading " />
            <Child message="This is custom heading " />
            <Child message="This is custom heading " />
            <Child message="This is custom heading " />
            <Child message="This is custom heading " />
            <Child message="This is custom heading " />
            <Child message="This is custom heading " />
            <Child message="This is custom heading " />
            <Child message="This is custom heading " />
            <Child message="This is custom heading " />
            <Child message="This is custom heading " />
            <Child message="This is custom heading " />
            <Child message="This is custom heading " />
            <Child message="This is custom heading " />
            <Child message="This is custom heading " />
            <Child message="This is custom heading " />
            <Child message="This is custom heading " />
            <Child message="This is custom heading " />
            <Child message="This is custom heading " />
            <Child message="This is custom heading " />
            <Child message="This is custom heading " />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
