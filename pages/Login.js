import React from "react";
import { NativeBaseProvider, Box, Stack, FormControl } from "native-base";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import Botao from '../components/Botao';
import axios from 'axios';
import { useContext, useState } from "react";
import { AuthContext } from "../provider";

const Login = () => {
    const {resultado, setResultado} = useContext(AuthContext);

    const [validEmail, setValidEmail] = useState(
        {
           message: "Usuário não cadastrado."
        }
    );

    const [login, setLogin] = useState({
        id: id,
        email: "",
        password: "",
        material: material
    });

    const getLogin = (id) => {
        if (axios.get(`https://fierce-ocean-02102.herokuapp.com/kids/${id}`, login)
            .then(() => {
                setResultado({user : login, cadastrado : true})
            }))
        return;

        if (axios.get(`https://fierce-ocean-02102.herokuapp.com/adolescents/${id}`, login)
            .then(() => {
                setResultado({user : login, cadastrado : true})
            }))
        return;    

        if (axios.get(`https://fierce-ocean-02102.herokuapp.com/adults/${id}`, login)
            .then(() => {
                setResultado({user : login, cadastrado : true})
            })) 
        return;    
       
        else {
            setValidEmail(validEmail.message);
        }       
    }

    return(
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
                                Entrar
                            </Text>
                            <FormControl mb="5">
                                <FormControl.Label>E-mail</FormControl.Label>
                                <Input
                                    style={styles.cor}
                                    value={login.email}
                                    onChangeText={value => {
                                        setLogin({...login, email : value})
                                    }}
                                />
                            </FormControl>
                            <FormControl mb="5">
                                <FormControl.Label>Senha</FormControl.Label>
                                <Input
                                    style={styles.cor}
                                    value={login.password}
                                    onChangeText={value => {
                                        setLogin({...login, password : value})
                                    }}
                                />
                            </FormControl>
                            
                            <View>{!!validEmail ? validEmail.message : ""}</View>
                            
                            <Botao
                                alignItems="center"
                                style={styles.botao}
                                text="Continuar"
                                onPress={getLogin}
                            />
                        </Box>
                    </Stack>
                </ScrollView>
            </View>
        </NativeBaseProvider>
    )

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

export default Login;