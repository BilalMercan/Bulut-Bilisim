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
    title: 'Marmara',
  },
  {
    id: '2',
    title: 'İç Anadolu',
  },
  {
    id: '3',
    title: 'Akdeniz',
  },
  {
    id: '4',
    title: 'Karadeniz',
  },
  {
    id: '5',
    title: 'Ege',
  },
  {
    id: '6',
    title: 'Doğu Anadolu',
  },
  {
    id: '7',
    title: 'Güneydoğu Anadolu',
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

  const renderItem = ({item}) => {
    const backgroundColor = item.id === selectedId ? 'blue' : 'red';

    return (
      <Item
        item={item}
        onPress={() => {
          setSelectedId(item.id);
          setSelected(item.title);
        }}
        style={{backgroundColor}}
      />
    );
  };

  const dataList = data.filter((item) => item.bolge_adi === selected);

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
          backgroundColor: 'yellow',
          fontSize: 25,
          marginVertical: 4,
          marginHorizontal: 8,
        }}>
        {dataList.map((item) => (
          <View key={item.plaka_kodu} style={{marginTop: 10}}>
            <Text>Şehir: {item.sehir}</Text>
            <Text>Nüfus: {item.nufus}</Text>
            <Text>Plaka Kodu: {item.plaka_kodu}</Text>
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
