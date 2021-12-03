import Navbar from "./components/navbar/Navbar.js";
import Header from "./components/header/Header.js";
import Cards from "./components/cards/Cards.js";
import "./App.css";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <div className="cardsAll">
      <Cards
        Name="Istanbul"
        Url="https://d2bgjx2gb489de.cloudfront.net/gbb-blogs/wp-content/uploads/2018/03/06175333/Istanbul.jpg" />
      <Cards
        Name="New York"
        Url="https://image.tatileksper.com/blog/776x436/newyork-ile-ilgili-bilinmesi-gerekenler_12_ny1-1555757305.jpg" />
      <Cards
        Name="Paris"
        Url="https://www.bilgiustam.com/resimler/2015/06/First-Time-Paris-Eiffel-Tower.jpg" />
      <Cards
        Name="Roma"
        Url="https://assets.enuygun.com/media/lib/570x400/uploads/image/4077.jpeg" />
      <Cards
        Name="Berlin"
        Url="https://www.steigenberger.com/cache/images/berlin_fotolia_93887_2206ae4123b62425d56a38c.jpg" />
      <Cards
        Name="Madrid"
        Url="http://www.bilimevi.com/images/dosyalar/madrid22.jpg" />
      <Cards
        Name="Barcelona"
        Url="https://www.avianca.com/content/dam/avianca_new/destinos/bcn/eu_bcn_ciudad-03_2880_1620.jpg" />
      <Cards
        Name="Tehran"
        Url="https://www.nationsonline.org/gallery/Iran/Azadi-Monument-Tehran2.jpg" />
      <Cards
        Name="Bagdad"
        Url="http://1.bp.blogspot.com/-wgbj8oqvRhU/UQzmYLBfVWI/AAAAAAAAn_g/vP5S9O9ZkyE/s1600/Muab+Camii,+Ba%C4%9Fdad,+Irak.jpg" />
      <Cards
        Name="Cairo"
        Url="https://www.woimacorporation.com/wp-content/uploads/2019/01/Landscape-of-Cairo-Egypt-pyramids-on-the-background-drowning-in-waste-WOIMA-Corporation.png" />
      <Cards
        Name="Dubai"
        Url="https://i4.hurimg.com/i/hurriyet/75/1110x740/58d375430f2544277cfa7d0f.jpg" />
      <Cards
        Name="Fethiye"
        Url="https://webdosya.csb.gov.tr/db/tabiat/editordosya/gocek_icerik_9.jpg" />
      
    </div>
    </div>
  )
}

export default App;
