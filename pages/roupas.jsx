import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Pressable, ScrollView } from 'react-native';

export default function Roupas() {
  return ( 
    <ScrollView contentContainerStyle={styles.scrollContainer}>

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
  botao: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "yellow",
    width: 200,
    height: 100,
    borderRadius: 20,
    marginBottom: 15,
  }
});