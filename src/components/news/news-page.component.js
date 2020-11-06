import React from 'react';
import NewsCard from './news-card.component';
import { Container ,Row ,CardGroup} from 'react-bootstrap';

class NewsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            link1: {
                image:'vesti-kislorod.jpg',
                title:'Нови донации за прилепската блница „Борка Талески“',
                text:`Деновиве во прилепската Општа болница „Борка Талески“, поставена е и пуштена
                во функција цистерна за течен кислород, која ќе овозможи подобро снабдување со
                кислород на сите одделенија и операционите сали во болницата. Цистерната е со
                капацитет од 5 тони, колку што отприлика и изнесува потрошувачката на кислород
                во болницата на годишно ниво.`,
                link:'https://www.prilep.gov.mk/czisterna-za-techen-kislorod-i-20-kreveti-za-novorodenchinata-novi-donaczii-za-prilepskata-blnicza-borka-taleski/?fbclid=IwAR3NjiKWwUfxudopVi69Y6VVJgAjT_jsstR6XNeuMw82BZQmmLbBweB-wQA',
            },link2: {
                image:'urgenten.jpg',
                title:'Пуштени во употреба новиот Ургентен центар и реновираното Акушерско одделение',
                text:`Во присуство на премиерот Оливер Спасовски, министрите за здравство и за транспорт и врски, Венко Филипче и Горан Сугарески и градоначалникот Илија Јованоски, денеска во Општата болница „Борка Талески“ во Прилеп беа пуштени во употреба новиот Ургентен центар и реновираното Акушерско одделение.`,
                link:'https://www.prilep.gov.mk/vo-prilepskata-bolnicza-pushteni-vo-upotreba-noviot-urgenten-czentar-i-renoviranoto-akushersko-oddelenie/?fbclid=IwAR11IS5BuBG7eeAQVrAM5-n8PH0BdDfLUCkNloECam_IiSNVw3jk7vKYPhs',
            },
            link3: {
                image:'usno-odd.jpg',
                title:'Одделението за „Уво, нос и грло“ во Прилеп се преадаптира за пациенти заболени од Ковид 19',
                text:`Ситуацијата со Ковид 19 во Прилеп е навистина алармантна. Поради преисполнетост на капацитети на инфективното одделение во Прилеп со заболени од Ковид 19, во општата болница се приспособуваат цели оддели за да ги примат новите пациенти чиј број секојдневно рапидно расте.`,
                link:'https://infokompas.com.mk/2020/10/28/%d0%b2%d0%b8%d0%b4%d0%b5%d0%be-%d0%be%d0%b4%d0%b4%d0%b5%d0%bb%d0%b5%d0%bd%d0%b8%d0%b5%d1%82%d0%be-%d0%b7%d0%b0-%d1%83%d0%b2%d0%be-%d0%bd%d0%be%d1%81-%d0%b8-%d0%b3%d1%80%d0%bb%d0%be/?fbclid=IwAR0ArvRXyjhZau58Ibvso3o5sxQyhfOUHAJ2whKX4rqrnpQd5hlAQ4-oWE0',
            }
            
         }
    }
    render() { 
            const link1 = this.state.link1;
            const link2 = this.state.link2;
            const link3 = this.state.link3;
        return ( 
            <div className='bg-light py-4'>
            <h1 className='mb-5'>Најнови Вести</h1>
            <Container> 
                <Row>
            <CardGroup>
            <NewsCard img={link1.image} title={link1.title} text={link1.text} link={link1.link} />
            <NewsCard img={link2.image} title={link2.title} text={link2.text}  link={link2.link}/>
            <NewsCard img={link3.image} title={link3.title} text={link3.text} link={link3.link}/>
            </CardGroup>
            </Row>
            </Container>
        </div>
         );
    }
}
 
export default NewsPage;