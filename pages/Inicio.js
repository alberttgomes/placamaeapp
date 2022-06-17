import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image } from 'react-native';
import { NativeBaseProvider, Box, Button, Text, Heading } from 'native-base';


export default function Home({navigation}) {

  const Botao = () => {
    return(
      <Box alignItems="center">
        <Button
         style={styles.botao}
         onPress={() => console.log("hello world")}
        >
          Denuncie
        </Button>
      </Box>
    ) 
  };

  return (
    <NativeBaseProvider>
      <View style={styles.container}>
        <Image 
          style={styles.image}
          source={require('../assets/logo.png')}
        />
        <Box style={styles.inicio}>
          <Heading color="white">Cyberbullyling</Heading>
          <Text style={styles.text}>
            Cyberbullying é o bullying realizado por meio das tecnologias digitais. 
            Pode ocorrer nas mídias sociais, plataformas de mensagens, plataformas de jogos 
            e celulares. É o comportamento repetido, com intuito de assustar, enfurecer ou 
            envergonhar aqueles que são vítimas.
          </Text>
          <Image 
          style={styles.imagebox}
          source={require('../assets/foto.jpg')}
          />
        </Box>
        <Botao></Botao>
        <StatusBar style="auto" />
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
  botao:{
    backgroundColor: "#FF0000",
    width: 85,
    height: 40,
  },
  text: {
    color: '#FFF',
    width: 305,
    height: 85,
    margin: 8,
  },
  inicio: {
    alignItems: 'center',
    margin: 30,
  },
  imagebox: {
    width: 300,
    height: 200,
    margin: 40,
  }
});