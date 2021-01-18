import { Box, Button, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react"
import { ChevronDownIcon } from "@chakra-ui/icons"

type EnvironmentProps = {
  environment: string
}

const EnvironmentMenu = (props: EnvironmentProps) => {
  const onEnvChanged = () => {
    console.log('on env changed ...', props)
  }

  return (
    <Box ml={5}>
      <Menu id="environment" onClose={onEnvChanged}>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />} colorScheme="gray">
          Environments
        </MenuButton>
        <MenuList defaultValue="prod">
          <MenuItem value="prod">PROD</MenuItem>
          <MenuItem value="pre">PRE</MenuItem>
          <MenuItem value="test">TEST</MenuItem>
        </MenuList>
      </Menu>
    </Box>
  )
}

export default EnvironmentMenu