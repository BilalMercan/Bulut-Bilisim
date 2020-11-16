/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, TextInput, StyleSheet, Button} from 'react-native';
const contentText = 'Bilal Mercan - Mobil Teknolojileri Bölümü - 19MY93004';

const App = () => {
  return (
    <View
      style={{
        flex: 10,
        backgroundColor: '#A8F9FF',
      }}>
      <Text
        style={{
          fontSize: 20,
          textAlign: 'center',
          padding: 60,
          color: '#ffffff',
        }}>
        Kayıt Oluşturma Uygulaması
      </Text>
      <View style={{alignSelf: 'center', flex: 1, justifyContent: 'center'}}>
        <TextInput placeholder="Adınız" style={StyleSheet.TextInput} />
        <TextInput placeholder="Soyadınız" style={StyleSheet.TextInput} />
        <TextInput placeholder="Email Adresi" style={StyleSheet.TextInput} />
        <TextInput placeholder="Yaşınız" style={StyleSheet.TextInput} />
        <TextInput placeholder="Şifre" style={StyleSheet.TextInput} />
        <TextInput placeholder="Şifre tekrar" style={StyleSheet.TextInput} />

        <Button title="Kaydet" onPress />
      </View>
      <Text
        style={{minHeight: 300, color: 'black', fontSize: 16, padding: 100}}>
        {contentText}
      </Text>
    </View>
  );
};

export default App;
