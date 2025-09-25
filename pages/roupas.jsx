import { StyleSheet, Text, Pressable, ScrollView, Image } from 'react-native';
import { View } from 'react-native-web';

import i1 from '../assets/roupas/Conjunto1.jpg'
import i2 from '../assets/roupas/Conjunto2.jpg'
import i3 from '../assets/roupas/Conjunto3.jpg'
import i4 from '../assets/roupas/Conjunto4.jpg'
import i5 from '../assets/roupas/Conjunto5.jpg'
import i6 from '../assets/roupas/Conjunto6.jpg'
import i7 from '../assets/roupas/Conjunto7.jpg'
import i8 from '../assets/roupas/Conjunto8.jpg'

export default function Roupas() {
  return ( 
    <ScrollView contentContainerStyle={styles.scrollContainer}>
          <Text style={styles.titulo}>Roupas Masculinas</Text>
        <View style={styles.containerMasc}>
          <View style={styles.item}>
            <Image source={i1} style={styles.img} />
            <Text style={styles.nome}>Conjunto Mizuno</Text>
            <Text style={styles.preco}>R$ 320,00</Text>
          </View>
          <View style={styles.item}>
            <Image source={i2} style={styles.img} />
            <Text style={styles.nome}>Conjunto Nike Tech</Text>
            <Text style={styles.preco}>R$ 1.200,00</Text>
          </View>
          <View style={styles.item}>
            <Image source={i3} style={styles.img} />
            <Text style={styles.nome}>Conjunto do Braz</Text>
            <Text style={styles.preco}>R$ 350,00</Text>
          </View>
          <View style={styles.item}>
            <Image source={i4} style={styles.img} />
            <Text style={styles.nome}>Conjunto Verde Mike</Text>
            <Text style={styles.preco}>R$ 650,00</Text>
          </View>
        </View>
          <Text style={styles.titulo}>Roupas Femininas</Text>
        <View style={styles.containerFem}>
          <View style={styles.item}>
            <Image source={i5} style={styles.img} />
            <Text style={styles.nome}>Vestido Farm</Text>
            <Text style={styles.preco}>R$ 420,00</Text>
          </View>
          <View style={styles.item}>
            <Image source={i6} style={styles.img} />
            <Text style={styles.nome}>Blusa Zara</Text>
            <Text style={styles.preco}>R$ 180,00</Text>
          </View>
          <View style={styles.item}>
            <Image source={i7} style={styles.img} />
            <Text style={styles.nome}>Body Petrobras</Text>
            <Text style={styles.preco}>R$ 120,00</Text>
          </View>
          <View style={styles.item}>
            <Image source={i8} style={styles.img} />
            <Text style={styles.nome}>Body Nike</Text>
            <Text style={styles.preco}>R$ 390,00</Text>
          </View>
        </View>
        <View style={styles.bb}></View>
    </ScrollView>      
  );
}

const styles = StyleSheet.create({
  item: {
    width: 160,
    height: 250,
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
  nome: {
    marginTop: 8,
    fontSize: 16,
    textAlign: 'center',
    color: '#333',
    fontWeight: '500',
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
  scrollContainer: {
    paddingVertical: 20,
    height: '110vh',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'column',
  },
  containerMasc: {
    backgroundColor: '#ADD8E6',
    alignContent: 'space-between',
    justifyContent: 'space-between',
    width: '100%',
    flexWrap: 'wrap',
    flexDirection: 'row',
    padding: 20,
  },
  containerFem: {
    backgroundColor: '#FFB6C1',
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
    flexWrap: 'wrap',
    width: 140,
    height: 140,
    borderRadius: 10,
  },
  bb: {
    height: 140,
    width: '100%',
    backgroundColor: '#f5efdb',
  }
});