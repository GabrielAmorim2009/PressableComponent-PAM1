import { StyleSheet, Text, Pressable, ScrollView, Image } from 'react-native';
import { View } from 'react-native-web';

import i1 from '../assets/acessorios/Acessorio1.jpg'
import i2 from '../assets/acessorios/Acessorio2.jpg'
import i3 from '../assets/acessorios/Acessorio3.jpg'
import i4 from '../assets/acessorios/Acessorio4.jpg'
import i5 from '../assets/acessorios/Acessorio5.jpg'
import i6 from '../assets/acessorios/Acessorio6.jpg'
import i7 from '../assets/acessorios/Acessorio7.jpg'
import i8 from '../assets/acessorios/Acessorio8.jpg'

export default function Acessorios() {
  return ( 
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <Text style={styles.titulo}>Acessórios</Text>
      <View style={styles.containerAce}>
        <View style={styles.item}>
          <Image source={i1} style={styles.img} />
          <Text style={styles.nome}>Bolsa Gucci</Text>
          <Text style={styles.preco}>R$ 8.900,00</Text>
        </View>
        <View style={styles.item}>
          <Image source={i2} style={styles.img} />
          <Text style={styles.nome}>Bolsa Gucci</Text>
          <Text style={styles.preco}>R$ 1.200,00</Text>
        </View>
        <View style={styles.item}>
          <Image source={i3} style={styles.img} />
          <Text style={styles.nome}>Jóias do Braz</Text>
          <Text style={styles.preco}>R$ 35.000,00</Text>
        </View>
        <View style={styles.item}>
          <Image source={i4} style={styles.img} />
          <Text style={styles.nome}>Pulseira Pandora</Text>
          <Text style={styles.preco}>R$ 650,00</Text>
        </View>
        <View style={styles.item}>
          <Image source={i5} style={styles.img} />
          <Text style={styles.nome}>Colar Vivara</Text>
          <Text style={styles.preco}>R$ 980,00</Text>
        </View>
        <View style={styles.item}>
          <Image source={i6} style={styles.img} />
          <Text style={styles.nome}>Óculos Prada</Text>
          <Text style={styles.preco}>R$ 1.500,00</Text>
        </View>
        <View style={styles.item}>
          <Image source={i7} style={styles.img} />
          <Text style={styles.nome}>Óculos Louis Vuitton</Text>
          <Text style={styles.preco}>R$ 2.300,00</Text>
        </View>
        <View style={styles.item}>
          <Image source={i8} style={styles.img} />
          <Text style={styles.nome}>Pantufa Swarovski</Text>
          <Text style={styles.preco}>R$ 450,00</Text>
        </View>
      </View>
      <View style={styles.bb}></View>
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
  containerAce: {
    backgroundColor: '#f5efdb',
    alignContent: 'space-between',
    justifyContent: 'space-between',
    width: '100%',
    flexWrap: 'wrap',
    flexDirection: 'row',
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#f5efdb',
    width: '100%'
  },
  img: {
    width: 140,
    height: 140,
    borderRadius: 10,
  },
  item: {
    width: 160,
    alignItems: 'center',
    marginBottom: 28,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#f5efdb',
  },
  preco: {
    marginTop: 6,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#b8860b',
    backgroundColor: '#f5efdb',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 6,
  },
  desc: {
    marginTop: 6,
    fontSize: 13,
    color: '#555',
    textAlign: 'center',
    fontStyle: 'italic',
  },
  nome: {
    marginTop: 8,
    fontSize: 16,
    textAlign: 'center',
    color: '#333',
    fontWeight: '500',
  },
  bb: {
    height: 140,
    width: '100%',
    backgroundColor: '#f5efdb',
  }
});