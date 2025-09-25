import { StyleSheet, Text, Pressable, ScrollView, Image } from 'react-native';
import { View } from 'react-native-web';

const image1 = {uri: 'https://i.pinimg.com/474x/26/29/ee/2629ee107e81b6c820febbf7eb29d8fa.jpg'};

export default function Roupas() {
  return ( 
    <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.containerMasc}>
          <Text style={styles.titulo}>Roupas Masculinas</Text>
          <View>
            <Image source={ image }></Image>
            <Image></Image>
            <Image></Image>
            <Image></Image>
          </View>
        </View>
        <View style={styles.containerFem}>

        </View>
    </ScrollView>      
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    paddingVertical: 20,
    height: '110vh',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'column',
  },
  containerMasc: {
    backgroundColor: '#ADD8E6',
    width: '100%',
    height: '45%',
    marginBottom: 20,
  },
  containerFem: {
    backgroundColor: '#FFB6C1',
    width: '100%',
    height: '45%',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#f5efdb',
  },
});