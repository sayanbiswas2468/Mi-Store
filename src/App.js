import './App.css';
import PreNavbar from './components/PreNavbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Slider from './/components/Slider.js'
import data from "./data/data.json"
import Offers from './components/Offers';
import Heading from './components/Heading.js'
import StarProduct from './components/StarProduct.js'
import HotAcessoriesMenu from './components/HotAccessoriesMenu.js'
import HotAcessories from './components/HotAcessories.js'
import ProductReviews from './components/ProductReviews.js'
import Videos from './components/Videos.js'
import Banner from './components/Banner.js'
import Footer from './components/Footer.js'
import NavOptios from "./components/NavOptios.js"

function App() {
  return (
    <Router>

      <PreNavbar />
      <NavOptios miPhones={data.miPhones} redmiPhones={data.redmiPhones} tv={data.tv} laptop={data.laptop} fitnessAndLifeStyle={data.fitnessAndLifeStyle} home={data.home} audio={data.audio}  accessories={data.accessories}/>
      <Slider start={data.banner.start} />
      <Offers offer={data.offer} />
      <Heading text="STAR PRODUCTS" />
      <StarProduct starProduct={data.starProduct} />
      <Heading text="HOT ACCESSORIES" />
      <HotAcessoriesMenu />
      <Routes>

        <Route exact path="/music" element={<HotAcessories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music} />} />



        <Route exact path="/smartDevice" element={<HotAcessories smartDevice={data.hotAccessories.smartDevice} smartDeviceCover={data.hotAccessoriesCover.smartDevice} />} />


        <Route exact path="/home" element={<HotAcessories home={data.hotAccessories.home} homeCover={data.hotAccessoriesCover.home} />} />


        <Route exact path="/lifeStyle" element={<HotAcessories home={data.hotAccessories.lifeStyle} homeCover={data.hotAccessoriesCover.lifeStyle} />} />


        <Route exact path="/mobileAccessories" element={<HotAcessories home={data.hotAccessories.mobileAccessories} homeCover={data.hotAccessoriesCover.mobileAccessories} />} />
      </Routes>
      <Heading text="PRODUCT REVIEWS" />
      <ProductReviews productReviews={data.productReviews} />
      <Heading text="VIDEOS" />
      <Videos videos={data.videos} />
      <Heading text="IN THE PRESS" />
      <Banner banner={data.banner} />
      <Footer footer={data.footer} />
    </Router>
  );
}

export default App;
