
import { NativeBaseProvider } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';

import Navigation from './navigation';
import { useState } from 'react';
import { AuthContext } from './provider';

   
export default function App() {
  
  const[resultado, setResultado] = useState({
    user : {
        name : '',
        email : '',
        password : '',
        age : ''
    },
    cadastrado : false
  })

  return (
    <NavigationContainer>
        <NativeBaseProvider>
            <AuthContext.Provider value={{resultado, setResultado}}>
                <Navigation cadastro={resultado.cadastrado} />
            </AuthContext.Provider>
        </NativeBaseProvider>
    </NavigationContainer>
  );
}


