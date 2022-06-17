
import Stacks from './Stacks';
import Tabs from './Tabs';
import { View } from 'react-native';

const Navigation = ({cadastro}) => {
  return (
    <View style={{flex:1}}>
      { cadastro ?  <Tabs/> : <Stacks/> }
    </View>
  )
}

export default Navigation;