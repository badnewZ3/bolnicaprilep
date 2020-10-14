import React from 'react';
import MainSection from '../main-section/main-section.component';
import CardSection from '../card-section/card-section.component';
import Oddeli from '../oddeli/oddeli-preview.component';
import KorisniLinkovi from '../korisni-linkovi/korisni-linkovi.component';
import './main-page.styls.css';
import NewsPage from '../news/news-page.component';

const MainPage = () => {
    return ( 
      <div className='main-page'>
      <MainSection/>
      <CardSection />
      <Oddeli/>
      <KorisniLinkovi/>
      <NewsPage/>
      </div>
     );
}
 
export default MainPage;
