import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import DailyImage from "./pages/DailyImage";
import './App.css';
import { getDailyImage, getMarsImages, getSpecificNasaImages } from "./api/index";
import Mars from "./pages/Mars";
import { ChakraProvider } from '@chakra-ui/react'
import NasaImages from "./pages/NasaImages";
import SearchDetails from "./pages/SearchDetails";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
          // loader: () => {
          //   return getDailyImage();
          // }
        },
        {
          path: "/dailyimage",
          element: <DailyImage/>,
          loader: () => {
            return getDailyImage();
          }
        },
        {
          path: "/mars",
          element: <Mars/>,
          loader: () => {
             return getMarsImages();
          }
        },
        {
          path: "nasaimages",
          element: <NasaImages/>,
          // loader: () => {
          //   // return searchImages();
          // }
        }
      ]
    },
    {
      path: "/nasaimages/:nasa_id",
      element: <SearchDetails/>,
      loader: ({params}) => {
          const nasa_id = params.nasa_id;
          return getSpecificNasaImages(nasa_id);
      }
    }
  ]); 

  return (
    <div className="App">
      <ChakraProvider>
        <RouterProvider router={router}/>
      </ChakraProvider>
    </div>
  )
}

export default App

//todo 
//make it look better
//make styled image component and use for the rover and nasi images`
//try and make search bar on top.(Extra)
//make split things to videos