import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import store from './reduxtooolkit/store'

import { useFonts } from 'expo-font';

import Index from './Index';
import AppLoading from 'expo-app-loading';

export default function App() {

  


 
  const [fontsLoaded] = useFonts({
    'bangla-font': require('./assets/fonts/bangla-font.ttf'),
    'BanglaFont': require('./assets/fonts/bangla-font.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading/>;
  }



  
  return (
    <Provider store={store}>

    <Index/>
   

    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
