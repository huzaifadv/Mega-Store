import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'flowbite';
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router";
import About from './components/About.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Shop from './components/Shop.jsx';
import Watches from './components/Categories/Watches.jsx';
import Bags from './components/Categories/Bags.jsx';
import Shoes from './components/Categories/Shoes.jsx';
import Skin from './components/Categories/Skin.jsx';
import Tshirts from './components/Categories/Tshirts.jsx';
import Dress from './components/Categories/Dress.jsx';
import Contact from './components/Contact.jsx';

let router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/home",
    element: <App />
  },
  {
    path: "/about",
    element: <> <Navbar/> <About/> <br/> <br/> <Footer/>  </>
  },
  {
    path: "/shop",
    element: <> <Navbar/> <Shop/> <Footer/>  </>
  },
  {
    path: "/categories/watches",
    element: <> <Navbar/> <Watches/> <Footer/>  </>
  },
  {
    path: "/categories/bags",
    element: <> <Navbar/> <Bags/> <Footer/>  </>
  },
  {
    path: "/categories/shoes",
    element: <> <Navbar/> <Shoes/> <Footer/>  </>
  },
  {
    path: "/categories/skincare",
    element: <> <Navbar/> <Skin/> <Footer/>  </>
  },
  {
    path: "/categories/tshirts",
    element: <> <Navbar/> <Tshirts/> <Footer/>  </>
  },
  {
    path: "/categories/women-dress",
    element: <> <Navbar/> <Dress/> <Footer/>  </>
  },
  {
    path: "/contact",
    element: <> <Navbar/> <Contact/> <Footer/>  </>
  },
  
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
