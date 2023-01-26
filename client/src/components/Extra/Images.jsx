import React from 'react'
import { Box, Center, Image, Flex } from '@chakra-ui/react';

export default function Images(props) {
  return (
        <Box
            width="300px" 
            borderWidth='1px' 
            borderRadius='lg'
            overflow='hidden' 
            mb="20px"
            flex= "33.33%"
            >
            <Image width="300px" height="200px" src={props.img_src}/>
        </Box>
  )
}
