import React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { TabViewAnimated, TabBar } from 'react-native-tab-view';

import List from './List';

const initialLayout = {
  height: 0,
  width: Dimensions.get('window').width,
};

export default class TabViewExample extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'tab1', title: 'Tab 1' },
      { key: 'tab2', title: 'Tab 2' },
    ],
  };
  
  handleIndexChange = index => this.setState({ index });

  renderHeader = props => <TabBar {...props} />;

  renderScene = ({ route }) => {
    switch (route.key) {
      case 'tab1':
        return <List navigator={this.props.navigator} />;
      case 'tab2':
        return <View style={{ backgroundColor: '#673ab7', flex: 1 }} />;
      default:
        null;
    }
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <TabViewAnimated
          style={{ flex: 1 }}
          navigationState={this.state}
          renderScene={this.renderScene}
          renderHeader={this.renderHeader}
          onIndexChange={this.handleIndexChange}
          initialLayout={initialLayout}
        />
      </View>
    );
  }
}