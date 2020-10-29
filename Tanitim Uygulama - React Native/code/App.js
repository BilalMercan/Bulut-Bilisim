import React from 'react';
import { View, Text } from 'react-native';


const contentTextStyle = {
    fontSize: 20,
    color: "#ffffff",
    padding: 10
}

const contentText = `
İş Deneyimlerim

Sözlük Uygulaması, Otel tanıtım Uygulaması, Bilgi Yarışması gibi uygulamalar geliştirmekteyim.
Unity ve Unreal Engine ile geliştirmekte olduğum oyunlarım bulunmakta. 
`;

const App = () => {
  return (
    <View style={{ 
      flex: 1,
      backgroundColor: "#0485e0" 
    }}>
      <Text style={{ 
        fontSize: 25,
        textAlign: "center",
        padding: 10,
        color: "#ffffff" }}>Bilal Mercan</Text>
      <View style={{ alignSelf: "center", flex: 1, justifyContent: "center" }}>
          <Text style={contentTextStyle}>Yaş: 22</Text>
          <Text style={contentTextStyle}>Eğitim : Üniversite ve Bölüm:Okan Üniversitesi - Mobil Teknolojileri Bölümü </Text>
          <Text style={contentTextStyle}>Memleket: Kayseri</Text>
      </View>
      <Text style={{
        minHeight: 300,
        color: "black",
        fontSize: 22,
        padding: 10
      }}>
        {contentText}
      </Text>
    </View>
  );
}


export default App;