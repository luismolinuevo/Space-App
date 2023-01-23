import React from 'react';
import { useLoaderData, Link } from "react-router-dom";
import { Box, Center, Image, Flex } from '@chakra-ui/react';


export default function Mars() {
    const dailyMarsImageData = useLoaderData();
    console.log(dailyMarsImageData.id)

  return (
    <div className='mars'>
      <div className='container'>
      {dailyMarsImageData ? (
        <div className='roverimages'>
          {
            dailyMarsImageData.map(imagedata => (
              <Center>
                  <Box
                  width="800px" 
                  borderWidth='1px' 
                  borderRadius='lg'
                  overflow='hidden' 
                  mb="40px"
                  >
                    <Image width="800px" height="600px" src={imagedata.img_src}/>
                  </Box>
              </Center>

            ))
          }
        </div>
        ) : (
          <div>This is the mars page</div>
        )}
      </div>
    </div>
  )
}
