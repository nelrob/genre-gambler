package com.genregambler;

import com.facebook.react.ReactActivity;
import org.devio.rn.splashscreen.SplashScreen;
import android.os.Bundle;

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */

  // for splash screen
  @Override
  protected void onCreate(Bundle savedInstanceState) {
    SplashScreen.show(this);
    super.onCreate(savedInstanceState);
  }

  // for genre gambler
  @Override
  protected String getMainComponentName() {
    return "GenreGambler";
  }

  // // for react nav
  // @Override
  // protected void onCreate(Bundle savedInstanceState) {
  //   super.onCreate(null);
  // }
}
