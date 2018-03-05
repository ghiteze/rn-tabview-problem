import { Navigation } from 'react-native-navigation';

import TabbedView from './component/TabbedView';
import ChildScreen from './component/ChildScreen';
import List from './component/List';

export function registerScreens() {
  Navigation.registerComponent('example.TabbedView', () => TabbedView);
  Navigation.registerComponent('example.ChildScreen', () => ChildScreen);
  Navigation.registerComponent('example.List', () => List);
}