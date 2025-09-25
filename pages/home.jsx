import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ImageBackground, Text, Pressable, Image } from "react-native";
import React, { useState } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const image = {uri: 'https://i.pinimg.com/474x/26/29/ee/2629ee107e81b6c820febbf7eb29d8fa.jpg'};

export default function Home({navigation}) {
  const [hoveredBtn, setHoveredBtn] = useState(null);

  return (         
    <ImageBackground
        source={image}
        resizeMode="cover"
        style={styles.container}>
        <View style={styles.vw}>
      <Pressable
        style={[
          styles.botao,
          hoveredBtn === 'roupas' && styles.botaoHover
        ]}
        onPress={() => navigation.navigate('Roupas')}
        onHoverIn={() => setHoveredBtn('roupas')}
        onHoverOut={() => setHoveredBtn(null)}
        title='Roupas'>
        <Ionicons name="shirt" size={50} color="black" />
      </Pressable>
      <Pressable
        style={[
          styles.botao,
          hoveredBtn === 'acessorios' && styles.botaoHover
        ]}
        onPress={() => navigation.navigate('Acessorios')}
        onHoverIn={() => setHoveredBtn('acessorios')}
        onHoverOut={() => setHoveredBtn(null)}
        title='Acessorios'>
        <MaterialCommunityIcons name="necklace" size={50} color="black" />
      </Pressable>  
        </View>
      <Pressable
        style={[
          styles.botao2,
          hoveredBtn === 'sobre' && styles.botaoHover
        ]}
        onPress={() => navigation.navigate('Sobre')}
        onHoverIn={() => setHoveredBtn('sobre')}
        onHoverOut={() => setHoveredBtn(null)}
        title='Sobre'>
        <Text style={styles.txtBtn}>Sobre a Loja</Text>
      </Pressable>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    width: '100vw',
  },
  vw: {
    flexDirection: 'row',
  },  
  botao: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5efdb",
    width: 100,
    height: 100,
    borderRadius: 15,
    margin: 10,
  },
  botao2: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5efdb",
    width: 220,
    height: 70,
    borderRadius: '50rem',
    margin: 10,
  },
  botaoHover: {
    backgroundColor: "#e2dcc9",
  },
  txtBtn: {
    fontFamily: 'Roboto-Black',
    fontSize: 25, 
    color: '#000000', 
    textAlign: 'center'
  }
});