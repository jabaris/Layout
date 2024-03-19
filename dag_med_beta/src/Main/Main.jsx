import './Main.css';
import calendarImage from './Images/CalendarImage.svg';
import PAvatar from './Images/PAvatar.svg';
import CashImage from './Images/Cash.svg';
import blackDoctors from './Images/Blackdoctors.jpg';
import medical1 from './Images/medical1.svg';
import medical2 from './Images/medical2.svg';
import medical3 from './Images/medical3.svg';
import medical4 from './Images/medical4.svg';
import serviceImage1 from './Images/serviceImage1.jpg';
import serviceImage2 from './Images/serviceImage2.jpeg';
import inImage from './Images/in.svg';
import facebook from './Images/facebook.svg';
import instagram from './Images/instagram.svg';
import DocProfile1 from './Images/DoctorNigga1.jpg';
import DocProfile2 from './Images/DoctorNigga2.jpg';
import DocProfile3 from './Images/DoctorNigga3.jpg';
import smallPhone from './Images/smallPhone.svg';
import Treker from './Images/Treker.svg';
import mailImage from './Images/mailImage.svg';
import timeImage from './Images/TimeImage.svg';



const Doctors = (props) => {
    return (
        <div className='Doctors'>
            <img src={props.picturesss} alt="" />
            <div className='Doctors_data'>
                <div className='Doctors_data_name'>ФИО: {props.name}</div>
                <div className='Doctors_data_type'>Спец.: {props.typesss}</div>
                <div className='Doctors_data_socNet'>
                    <img src={inImage} alt="" />
                    <img src={facebook} alt="" />
                    <img src={instagram} alt="" />
                </div>
            </div>
        </div>
    )
}

const Main = () => {
    return (
        <div className='App-Main'>
            <div className='App-Main_header'>
                <div className='App-Main_header_image'>
                    <div className='App-Main_header_image_Ellipse'></div>
                </div>
                <div className='App-Main_header_text'>
                    <div className='App-Main_header_text_container'>
                        <h3>Берегите здоровье</h3>
                        <p>Вакцинация является
                            одним из лучших
                            вариантов</p>
                        <button>Вакцины</button>
                    </div>
                    <div className='App-Main_header_text_boxes'>
                        <div className='App-Main_header_text_boxes_day'>Удобный день <img src={calendarImage} width={40} alt="" /></div>
                        <div className='App-Main_header_text_boxes_doctor'>Именитые доктора <img src={PAvatar} alt="" /></div>
                        <div className='App-Main_header_text_boxes_price'>Удобные цены <img src={CashImage} alt="" /></div>
                    </div>
                </div>
            </div>
            <div className='App-Main_center_first'>
                <h3>Добро пожаловать в Meddag</h3>
                <h2>Место, которое поможет вам с любым видом болезни</h2>
                <p>Наша поликлиника была создана изначально из нескольких человек, которые
                    помогали людям лечиться от многих тяжелых болезней,
                    теперь мы можем помочь всем</p>
                <img src={blackDoctors} alt="" />
            </div>
            <div className='App-Main_center_second'>
                <h3>Мы верим в чудо, и вы верьте с нами</h3>
                <h2>Наш сервис</h2>
                <div className='App-Main_center_second_container'>
                    <div className='App-Main_center_second_container_leftSide'>
                        <div><img src={medical1} alt="" /><div>Лечение любых болзней</div></div>
                        <div><img src={medical2} alt="" /><div>Бережное отношение</div></div>
                        <div><img src={medical3} alt="" /><div>Бесплатная проверка</div></div>
                        <div><img src={medical4} alt="" /><div>Удобства</div></div>
                        <div className='App-Main_center_second_container_leftSide_bottom'></div>
                    </div>
                    <div className='App-Main_center_second_container_middleSide'>
                        <h1>В нашей поликлинике вы найдете
                            такие преимущества как:</h1>
                        <ul>
                            <li>Лучшее лечение во всем мире</li>
                            <li>Уникальные вакцины</li>
                            <li>Все в рамках закона</li>
                            <li>5 звезд из 5</li>
                            <li>Подстраивается под пациэнта</li>
                            <li>Всегда с вами</li>
                        </ul>
                        <p>На сегодняшний день можно отметить мало негосударственных структур, славящихся своей хорошей
                            работой, с уникальными возможностями и адаптацией под гостя.</p>
                        <p>Для нас вы гость, пока вы у нас, вы можете не беспокоиться о вашем здоровье, так как ваша жизнь в надежных руках</p>
                    </div>
                    <div className='App-Main_center_second_container_rightSide'>
                        <img src={serviceImage1} alt="" />
                        <img src={serviceImage2} alt="" />
                    </div>
                </div>
            </div>
            <div className='App-Main_header_footer_first'>
                <h3>Ваш выбор</h3>
                <h2>Наши Доктора</h2>
                <div className='App-Main_header_footer_first_Doctors'>
                    <Doctors picturesss={DocProfile1} name={'Расул В. Н.'} typesss={'Шкефаль М9 - Геппатит В'} />
                    <Doctors picturesss={DocProfile2} name={'Кирилл А. А.'} typesss={'Дерампаг А32 - Бешенство'} />
                    <Doctors picturesss={DocProfile3} name={'Ксюша С. Ч.'} typesss={'Ломанное А1 - ВИЧ'} />
                    <Doctors picturesss={DocProfile1} name={'Бирон А. М.'} typesss={'Ломанное А1 - ВИЧ'} />
                    <Doctors picturesss={DocProfile2} name={'Михайл С. К.'} typesss={'Шкипер К19 - Ковид 19'} />
                    <Doctors picturesss={DocProfile3} name={'Милана У. У.'} typesss={'Сьерра Аль7 - Хворь'} />
                </div>
            </div>
            <div className='App-Main_header_footer_second'>
                <h3>О нас</h3>
                <h2>Контакты</h2>
                <div>
                    <div className='App-Main_header_footer_second_white'>
                        <img src={smallPhone} alt="" />
                        <h4>Тел. Номера</h4>
                        <p>(237) 681-812-255</p>
                        <p>(237) 666-331-894</p>
                    </div>
                    <div className='App-Main_header_footer_second_black'>
                        <img src={Treker} alt="" />
                        <h4>Расположение</h4>
                        <p>Ватутина 44б</p>
                        <p>Крамова 12</p>
                    </div>
                    <div className='App-Main_header_footer_second_white'>
                        <img src={mailImage} alt="" />
                        <h4>Майл</h4>
                        <p>meddag@mail.ru</p>
                        <p>meddag@gmail.com</p>
                    </div>
                    <div className='App-Main_header_footer_second_white'>
                        <img src={timeImage} alt="" />
                        <h4>Время работы</h4>
                        <p>Пон-Суб 09:00-20:00</p>
                        <p>Выходной не рабочий день</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Main;