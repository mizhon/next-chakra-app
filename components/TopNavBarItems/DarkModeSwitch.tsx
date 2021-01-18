import { useColorMode, IconButton, Box } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Box px={5}>
      <IconButton
        aria-label="Toggle Dark Switch"
        icon={ colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
        onClick={toggleColorMode}
      />
    </Box>
  )
}

export default DarkModeSwitch