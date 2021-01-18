import { Box, Button, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'
import { ChevronDownIcon } from "@chakra-ui/icons"
// import { useState } from 'react'

type SystemProps = {
  system: string
}

const SystemMenu = (props: SystemProps) => {
  // let [system, setSystem] = useState("")

  const onSystemChanged = () => {
    console.log('on system changed ...', props.system)
    // setSystem("window")
  }
  
  return (
    <Box>
      <Menu id="system" onClose={onSystemChanged}>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />} colorScheme="gray">
          Please Select OS System
        </MenuButton>
        <MenuList>
          <MenuItem>Windows</MenuItem>
          <MenuItem>Mac OS</MenuItem>
          <MenuItem>Mobile</MenuItem>
          <MenuItem>Web</MenuItem>
        </MenuList>
      </Menu>
    </Box>
  )
}

export default SystemMenu