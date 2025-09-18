import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ImageBackground, Text, Pressable, Image } from "react-native";
import React, { useState } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const image = {uri: 'https://i.pinimg.com/474x/26/29/ee/2629ee107e81b6c820febbf7eb29d8fa.jpg'};

export default function Home(props) {
  const [hoveredBtn, setHoveredBtn] = useState(null);

  return (         
    <ImageBackground
        source={image}
        resizeMode="cover"
        style={styles.container}>
      <Pressable
        style={[
          styles.botao,
          hoveredBtn === 'roupas' && styles.botaoHover
        ]}
        onPress={() => props.navigation.navigate('Roupas')}
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
        onPress={() => props.navigation.navigate('Acessorios')}
        onHoverIn={() => setHoveredBtn('acessorios')}
        onHoverOut={() => setHoveredBtn(null)}
        title='Acessorios'>
        <MaterialCommunityIcons name="necklace" size={50} color="black" />
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
    flexDirection: 'row',
    height: '100vh',
    width: '100vw',
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
  botaoHover: {
    backgroundColor: "#e2dcc9",
  },
  txtBtn: {
    fontFamily: 'Roboto-Black',
    fontSize: 25, 
    marginTop: 18,
    marginBottom: 10, 
    color: '#000000', 
    textAlign: 'center'
  }
});