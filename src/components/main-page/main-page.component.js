import React from 'react';
import MainSection from '../main-section/main-section.component';
import CardSection from '../card-section/card-section.component';
import Oddeli from '../oddeli/oddeli-preview.component';
import KorisniLinkovi from '../korisni-linkovi/korisni-linkovi.component';

const MainPage = () => {
    return ( 
      <div>
      <MainSection/>
      <CardSection />
      <Oddeli/>
      <KorisniLinkovi/>
      </div>
     );
}
 
export default MainPage;
