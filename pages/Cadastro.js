
import { StyleSheet, View, StatusBar } from 'react-native';
import { NativeBaseProvider, Box, Text, ScrollView, Stack, FormControl, Input } from 'native-base';
import Botao from '../components/Botao';
import axios from 'axios';
import { useContext, useState } from 'react'
import { AuthContext } from '../provider';


const Cadastro = () => {
      const {resultado, setResultado} = useContext(AuthContext);
      
      const IDADE_KIDS_BASE = 13;
      const IDADE_ADOLESCENT_BASE = 17;
      const IDADE_ADULT_BASE = 18;

      const [errorEmail, setErrorEmail] = useState({message: "Por favor, digite um e-mail válido"});

      let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

      const [userCadastro, setUser] = useState({
        name: '',
        age: '',
        password: '',
        email: ''
      });
     
      const cadastrar = () => {
          if(userCadastro.email.match(emailRegex)){
              if(userCadastro.age <= IDADE_KIDS_BASE){
                axios.post("https://fierce-ocean-02102.herokuapp.com/kids", userCadastro)
                  .then((res) => {
                    setResultado({user : userCadastro, cadastrado : true});
                  })
              }
              else if(userCadastro.age > IDADE_KIDS_BASE && userCadastro.age <= IDADE_ADOLESCENT_BASE){
                axios.post("https://fierce-ocean-02102.herokuapp.com/adolescents", userCadastro)
                  .then((res) => {
                    setResultado({user : userCadastro, cadastrado : true});
                  })
              }
              else if(userCadastro.age >= IDADE_ADULT_BASE){
                axios.post("https://fierce-ocean-02102.herokuapp.com/adults", userCadastro)
                  .then((res) => {
                      setResultado({user : userCadastro, cadastrado : true});
                  })
              }
          } else {
              setErrorEmail(errorEmail.message);
          }
      } 
      
      return (
        <NativeBaseProvider>
          <View style={styles.container}>
              <ScrollView w="100%">
                <Stack 
                  space={2.0} 
                  alignSelf="center" 
                  px="3" 
                  safeArea 
                  mt="150" 
                  w={{
                    base: "100%",
                    md: "25%"
                  }}
                >
                  <Box>
                    <Text bold fontSize="xl" mb="1" color="#FFF">
                      Cadastre-se
                    </Text>
                      <FormControl mb="5">
                        <FormControl.Label>Digite seu e-mail</FormControl.Label>
                        <Input 
                          style={styles.cor} 
                          value={userCadastro.email} 
                          onChangeText={value => {
                            setUser({...userCadastro, email: value})
                          }}
                          errorMessage={errorEmail}
                        />
                      </FormControl>
                  
                      <FormControl mb="5">
                        <FormControl.Label>Digite sua senha</FormControl.Label>
                        <Input  
                          style={styles.cor} 
                          value={userCadastro.password}
                          hidden
                          onChangeText={value => {
                            setUser({...userCadastro, password: value})
                          }} 
                        />
                      </FormControl>

                      <FormControl mb="5">
                        <FormControl.Label>Digite sua idade</FormControl.Label>
                        <Input 
                          style={styles.cor} 
                          value={userCadastro.age}
                          onChangeText={value => {
                            setUser({...userCadastro, age: value})
                          }} 
                        />
                      </FormControl>

                      <FormControl mb="5">
                        <FormControl.Label>Digite seu nome</FormControl.Label>
                        <Input 
                          style={styles.cor} 
                          value={userCadastro.name}
                          onChangeText={value => {
                            setUser({...userCadastro, name: value})
                          }} 
                        />
                      </FormControl>
                      <Botao 
                        alignItems='center' 
                        style={styles.botao} 
                        text='Continuar' 
                        onPress={cadastrar}
                      />
                  </Box>
                </Stack>
                </ScrollView>
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
      backgroundColor: '#48378e'
    },  
    botao: {
      backgroundColor: "#FF00FF",
      width: 70,
      height: 32,
      margin: 1,
    },
    cor: {
     color: '#FFF'
    }
});

export default Cadastro;