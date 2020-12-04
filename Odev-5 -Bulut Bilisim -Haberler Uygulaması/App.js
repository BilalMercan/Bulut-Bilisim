import React, {useState} from 'react';
import {
  FlatList,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import data from './data.json';

const DATA = [
  {
    id: '1',
    title: 'Otomobil',
    color: 'grey',
  },
  {
    id: '2',
    title: 'Dünya',
    color: 'orange',
  },
  {
    id: '3',
    title: 'Sağlık',
    color: 'brown',
  },
  {
    id: '4',
    title: 'Teknoloji',
    color: 'purple',
  },
  {
    id: '5',
    title: 'Spor',
    color: 'blue',
  },
];

const Item = ({item, onPress, style}) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
    <Text style={styles.title}>{item.title}</Text>
  </TouchableOpacity>
);

const App = () => {
  const [selectedId, setSelectedId] = useState(null);
  const [selected, setSelected] = useState(null);
  const [colors, setSelectedColor] = useState(null);

  const renderItem = ({item}) => {
    const backgroundColor = item.id === selectedId ? colors : selectedId;
    return (
      <Item
        item={item}
        onPress={() => {
          setSelectedId(item.id);
          setSelected(item.title);
          setSelectedColor(item.color);
        }}
        style={{backgroundColor}}
      />
    );
  };

  const dataList = data.filter((item) => item.categories === selected);

  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
        style={{maxHeight: '50%'}}
      />
      <ScrollView
          style={{
          padding: 10,
          flex: 1,
          backgroundColor: 'skyblue',
          fontSize: 25,
          marginVertical: 4,
          marginHorizontal: 8,
        }}>
        {dataList.map((item) => (
          <View key={item.content} style={({marginTop: 10})}>
            <Text>Kategori: {item.categorie}</Text>
            <Text>İçerik: {item.content}</Text>
            <Text>Açıklama: {item.description}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 5,
    marginVertical: 4,
    marginHorizontal: 8,
  },
  title: {
    fontSize: 18,
  },
});

export default App;
