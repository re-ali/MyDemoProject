package com.beutyapp;
import android.os.Bundle; // required for onCreate parameter

import com.facebook.react.ReactActivity;

public class MainActivity extends ReactActivity {


  @Override
  protected void onCreate(Bundle savedInstanceState) {
    SplashActivity.show(this);
    super.onCreate(savedInstanceState);
  }


  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "BeutyApp";
  }
}
