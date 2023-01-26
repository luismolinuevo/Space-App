import React from 'react';
import { useLoaderData, Link } from "react-router-dom";
import { Box, Center, Image} from '@chakra-ui/react';
import Images from '../components/Extra/Images';


export default function Mars() {
    const dailyMarsImageData = useLoaderData();
    console.log(dailyMarsImageData.id)

  return (
    <div className='mars'>
      <div className='container'>
      {dailyMarsImageData ? (
        <div>
          {/* <Center> */}
              {
                
                dailyMarsImageData.map(imagedata => (
                  // <Center>
                    <Images img_src={imagedata.img_src}/>
                  // </Center>
                    
                ))
                
              }
              {/* </Center> */}
        </div>
          
        ) : (
          <div>This is the mars page</div>
        )}
      </div>
    </div>
  )
}
