import { 
  Box, 
  Switch, 
  Text, 
  HStack
} from '@chakra-ui/react';
import { ChangeEvent } from 'react';

type VipStatusSwitchProps = {
  isVip: boolean
}

const VipStatusSwitch = (props: VipStatusSwitchProps) => {
  const handleVipStatusChanged = (e: ChangeEvent<HTMLInputElement>) => {
    console.log('vip status changed ...', e.target.checked, props.isVip)
  }
  return (
    <Box ml={5}>
      <HStack direction="row">
        <Text fontSize="14px" color="white">VIP</Text>
        <Switch colorScheme="blue" onChange={ handleVipStatusChanged } />
      </HStack>
    </Box>
  )
}

export default VipStatusSwitch