import {  Linking} from 'react-native';
import { Box, Button, Text, Center, Skeleton, Image, VStack} from 'native-base';

const Info = ({text, url, image}) => {
   
    return <Center w="100%">
        <Box w="90%" maxWidth="400">
          <VStack maxWidth="400" borderWidth="1" space={8} overflow="hidden" rounded="md" _dark={{
          borderColor: "coolGray.500"
        }} _light={{
          borderColor: "coolGray.200"
        }}>
            <Skeleton h="40" isLoaded={true}>
              <Image h="40" source={image} />
            </Skeleton>
            <Skeleton.Text lines={4} px="4" isLoaded={true}>
              <Text px="4" fontSize={"md"} lineHeight={"20px"} color="white">
                {text}
              </Text>
            </Skeleton.Text>
            <Skeleton px="4" mb="4" rounded="md" startColor="primary.100" isLoaded={true}>
              <Button m="4" onPress={() => Linking.openURL({url})}>Ver mais</Button>
            </Skeleton>
          </VStack>
        </Box>
      </Center>;
  };

  export default Info;