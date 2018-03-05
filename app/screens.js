import { Navigation } from 'react-native-navigation';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler'

import TabbedView from './component/TabbedView';
import ChildScreen from './component/ChildScreen';
import List from './component/List';

export function registerScreens() {
  Navigation.registerComponent('example.TabbedView', () => gestureHandlerRootHOC(TabbedView));
  Navigation.registerComponent('example.ChildScreen', () => gestureHandlerRootHOC(ChildScreen));
  Navigation.registerComponent('example.List', () => gestureHandlerRootHOC(List));
}