import { Navigation } from 'react-native-navigation';

import { registerScreens } from './screens';

registerScreens();

export default class App {
  constructor() {
    this.startApp();
  }

  startApp() {
    Navigation.startSingleScreenApp({
      screen: {
        screen: 'example.TabbedView',
        title: 'TabbedView',
      }
    });
  }
}