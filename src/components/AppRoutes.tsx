import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Projects from "./Projects";
import CountryInfoApp from "./CountryInfoApp";
import WeatherApp from "./WeatherApp";
import ECommerceApp from "./ECommerceApp";



const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/projects/country-info" element={<CountryInfoApp/>} />
                <Route path="/projects/weather" element={<WeatherApp/>} />
                <Route path="/projects/ecommerce" element={<ECommerceApp/>} />                
            </Routes>
        </BrowserRouter >
    )
}

export default AppRoutes