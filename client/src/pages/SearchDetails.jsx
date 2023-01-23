import React from 'react'
import { useLoaderData } from "react-router-dom";
import { Box, Center, Image, Flex } from '@chakra-ui/react';
import Navbar from '../components/Navbar/Navbar';

export default function SearchDetails() {
    const data = useLoaderData();
  return (
    <>
    <Navbar/>
    <div className='container'>
        
    {
        data.map(imagedata => (
          <Center>
              <Box
              width="800px" 
              borderWidth='1px' 
              borderRadius='lg'
              overflow='hidden' 
              mb="40px"
              >
                <Image width="800px" height="600px" src={imagedata.href} alt="Not available"/>
              </Box>
          </Center>

        ))
      }
    </div>
    </>
  )
}
