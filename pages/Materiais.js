
import { StyleSheet, View} from 'react-native';
import { NativeBaseProvider, Heading,  Image} from 'native-base';

import Info from '../components/Info';

export default function Principal({navigation}) {
    return (
      <NativeBaseProvider>
        <View style={styles.container}>
          <Image 
            style={styles.image}
            source={require('../assets/logo.png')}
          />
          <Heading style={styles.head}>Material</Heading>
          <Info 
            text="No post de ontem conversamos com vocês sobre o que é Ciberbullying e hoje trouxemos o último resultado da nossa pesquisa."
            url = 'https://www.instagram.com/p/CbcwnRRu0ds/?igshid=YmMyMTA2M2Y%3D'
            image={require('../assets/material.png')}
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
      color: 'white',
      padding: 2
  },
  image2: {
    width: 300,
    height: 400
  }
  
});