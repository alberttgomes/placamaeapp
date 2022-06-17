import { Box } from "native-base"
import { Button } from "native-base"


const Botao = ({onPress, text, alignItems, style}) => {
    return(
      <Box alignItems={alignItems}>
        <Button style={style} onPress={onPress}>
              {text}
        </Button>
      </Box>
    );
}

export default Botao