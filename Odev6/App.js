import React, {Component} from 'react';
import {
  FlatList,
  View,
  Text,
  StyleSheet,
  TouchableNativeFeedback,
  Alert,
} from 'react-native';
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }
  componentDidMount() {
    this.ApiCall();
  }
  async ApiCall() {
    let resp = await fetch('https://jsonplaceholder.typicode.com/posts');
    let respJson = await resp.json();
    this.setState({data: respJson});
  }
  render() {
    return (
      <View>
        <Text style={{fontSize: 20}}>Ödev 6 React Native</Text>
        <FlatList
          data={this.state.data}
          renderItem={({item}) => (
            <TouchableNativeFeedback
              onPress={() => {
                Alert.alert(
                  'Post',
                  item.id + '\n' + item.title + '\n' + item.body,
                );
              }}
              key={item.id}>
              <Text
                style={{
                  fontSize: 20,
                  backgroundColor: 'skyblue',
                  margin: 15,
                  color: 'white',
                  padding: 10,
                }}>
                {item.title}
              </Text>
            </TouchableNativeFeedback>
          )}
        />
      </View>
    );
  }
}

export default App;
