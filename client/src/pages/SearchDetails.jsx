import React from 'react'
import { useLoaderData } from "react-router-dom";
import { Box, Center, Image, Flex } from '@chakra-ui/react';
import Navbar from '../components/Navbar/Navbar';
import Images from '../components/Extra/Images';

export default function SearchDetails() {
    const data = useLoaderData();
  return (
    <>
    <Navbar/>
    <div className='container'>
        
    {
        data.map(imagedata => (
          <Center>
            <div>
                  {/* <Image width="800px" height="600px" src={imagedata.href} alt="Not available"/> */}
                  <Images img_src={imagedata.href} alt="Not available"/>
                {/* </Box> */}
            </div>
          </Center>

        ))
      }
    </div>
    </>
  )
}
