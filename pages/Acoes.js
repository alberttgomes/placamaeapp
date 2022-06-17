import { StyleSheet, View, Image } from 'react-native';
import { NativeBaseProvider, Box,Text, Heading } from 'native-base';


export default function Acoes({navigation}) {
      return (
          <NativeBaseProvider>
            <View style={styles.container}>
              <Image 
              style={styles.image}
              source={require('../assets/logo.png')}
              />
              <Text></Text>
              <Box style={styles.inicio}>
                <Heading color="white">Nossas Ações </Heading>
                  <Text style={styles.text}>
                    A PlacaMãe.Org_ desenvolve atividades, em escolas públicas e privadas, da região metropolitana 
                    do Recife. Levamos para crianças e adolescentes a temática: 
                  </Text>
                  <Text style={styles.text}>
                    Internet: contexto, limites e responsabilidades, esse assunto nos 
                    direciona a uma conversa sobre 
                    Cyberbullying. 
                  </Text> 
                  <Image 
                    style={styles.imagebox}
                    source={require('../assets/ft0.png')}
                  />
                  <Image 
                    style={styles.imagebox}
                    source={require('../assets/ft1.jpeg')}
                  />
              </Box>
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
      width: 180,
      height: 40,
      position: 'absolute',
      top: 3,
      marginBottom: 10,
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
      width: 200,
      height: 120,
      margin: 5,
      borderColor: '#F8F8FF',

    }
});