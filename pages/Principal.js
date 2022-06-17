import { StyleSheet, View, Image } from 'react-native';
import { NativeBaseProvider, Heading } from 'native-base';
import Botao from '../components/Botao';

export default function Principal({navigation}) {
    return (
      <NativeBaseProvider>
        <View style={styles.container}>
          <Image 
            style={styles.image}
            source={require('../assets/logo.png')}
          />
          <Heading style={styles.head}>Bem-vindo a Placamãe</Heading>
          <Botao 
            alignItems='center' 
            style={styles.botao} 
            text='Cadastre-se' 
            onPress={() => navigation.navigate('Cadastro')}
          />
          <Botao 
            alignItems="center"
            style={styles.botao}
            text="Entrar"
            onPress={() => navigation.navigate('Logado')}
          />
          <Botao 
            alignItems='center' 
            style={styles.botao} 
            text='Conhecer' 
            onPress={() => navigation.navigate('Tabs2')}
          />
        </View>
      </NativeBaseProvider>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#48378e',
    },
    image: {
      width: 190,
      height: 70,
      position: 'absolute',
      top: 3,
      marginBottom: 10,
    },
    head: {
      color: '#FFF',
    },
    botao:{
      backgroundColor: "#FF00FF",
      color: "#FFF",
      width: 115,
      height: 35,
      margin: 10,
      borderRadius: 3,
      fontWeight: "bold"
    },
});