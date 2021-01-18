import { SearchIcon } from '@chakra-ui/icons';
import { 
  Box, 
  Button,
  useToast
} from '@chakra-ui/react';
import React, { useState } from 'react';

const SearchButton = () => {
  let [loading, setLoading] = useState(false)
  const toast = useToast()
  // 执行搜索
  const handleSearch = () => {
    setLoading(loading = true)
    toast({
      title: "Demo Toast.",
      description: "We've created your account for you.",
      status: "success",
      duration: 3000,
      isClosable: true,
      position: "top-right"
    })
    setTimeout(() => {
      setLoading(loading = false)
    }, 3000)
  }
  return (
    <Box ml={5}>
      <Button 
        isLoading={loading}
        loadingText="Search"
        colorScheme="blue" 
        onClick={handleSearch}
        leftIcon={<SearchIcon />}
      >
        Search
      </Button>
    </Box>
  )
}

export default SearchButton