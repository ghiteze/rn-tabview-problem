import React, { Component } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';

import data from './data';

const Item = props => (
  <View
    style={{
      flex: 1,
      padding: 20,
      justifyContent: 'center',
      borderBottomWidth: 1.0,
      borderBottomColor: '#005abc'
    }}>
    <Text>{props.name}</Text>
  </View>
);

export default class List extends Component {
  renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => this.props.navigator.push({ screen: 'example.ChildScreen', title: 'Sample Pushed Screen' })}>
      <Item {...item} key={item.id} />
    </TouchableOpacity>
  );
  render() {
    return (
      <FlatList
        data={data}
        renderItem={this.renderItem}
        keyExtractor={item => item.id}
      />
    );
  }
}
