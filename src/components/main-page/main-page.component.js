import React from 'react';
import MainSection from '../main-section/main-section.component';
import CardSection from '../card-section/card-section.component';
import ListaOddeli from '../oddeli/oddeli-preview.component';
import KorisniLinkovi from '../korisni-linkovi/korisni-linkovi.component';
import './main-page.styls.css';
import NewsPage from '../news/news-page.component';

const MainPage = (props) => {
    return ( 
      <div className='main-page'>
      <MainSection/>
      <CardSection />
      <ListaOddeli />
      <KorisniLinkovi />
      <NewsPage />
      </div>
     );
}
 
export default MainPage;
