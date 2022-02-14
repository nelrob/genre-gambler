import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen'; 
import { useWindowDimensions} from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';

// Import Screens
import { CalcScreen } from './Screens/1_Calc_Screen';
import { ShuffleScreen } from './Screens/2_Shuffle_Screen';
import { ListScreen } from './Screens/3_List_Screen';


// Tab Screens
const renderScene = SceneMap({
  first: CalcScreen,
  second: ShuffleScreen,
  third: ListScreen,
});

export default function App() {
  // Splash Screen - appears on app's first load
  useEffect(()=>{
    SplashScreen.hide();
  }, [])

  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Calculator' },
    { key: 'second', title: 'Shuffler' },
    { key: 'third', title: 'Genre List' },
  ]);

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    />
  );
}