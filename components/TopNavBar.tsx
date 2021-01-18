import { 
  Box, 
  Center, 
  Divider, 
  Flex,
  Tag,
  Text
} from '@chakra-ui/react';

import SystemMenu from './TopNavBarItems/SystemMenu'
import EnvironmentMenu from './TopNavBarItems/EnvironmentMenu';
import DarkModeSwitch from './TopNavBarItems/DarkModeSwitch'
import VipStatusSwitch from "./TopNavBarItems/VipStatusSwitch";
import SearchButton from './TopNavBarItems/SearchButon';
import React from 'react';

type TopNavBarProps = {
  system: string,
  environment: string,
  isVip: boolean
}

const TopNavBar: any = (props: TopNavBarProps) => {

  return (
    <Flex direction="column">
      <Box bg="cyan.500" w="100%" p={6}>
        <Center>
          {/* 改变theme设置 */}
          <DarkModeSwitch />
          {/* 选择系统 */}
          <SystemMenu system={props.system}/>
          {/* 选择环境 */}
          <EnvironmentMenu environment={props.environment}/>   
          {/* 选择是否为VIP */}
          <VipStatusSwitch isVip={props.isVip}/>
          {/* 搜索按钮 */}
          <SearchButton /> 
        </Center>
      </Box>
      <Box p={3} w="100%">
        <Center height="20px">
          <Flex align="center">
            <Text mx={2} color="blue.500" fontSize="lg">
              Current System:
            </Text>
            <Tag mx={4} colorScheme="blue">Android</Tag>
          </Flex>
          
          <Divider orientation="vertical" />

          <Flex align="center">
            <Text mx={2} color="green.500" fontSize="lg">
              Current Environment:
            </Text>
            <Tag mx={4} colorScheme="green">TEST</Tag>
          </Flex>

          <Divider orientation="vertical" />

          <Flex align="center">
            <Text mx={2} color="red.500" fontSize="lg">
              VIP:
            </Text>
            <Tag mx={4} colorScheme="red">true</Tag>
          </Flex>

        </Center>
      </Box>
    </Flex>
  )
}

export default TopNavBar