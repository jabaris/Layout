import './Footer.css';
import inBlue from'../Main/Images/inBlue.svg';
import facebookBlue from'../Main/Images/facebookBlue.svg';
import instagramBlue from'../Main/Images/instagramBlue.svg';

const Footer = () => {
    return (
        <div className='Footer'>
            <div className='Footer-menu'>
                <div className='Footer-header'>
                    <div className='Footer-header_logo'>
                        <h1>MEDDAG</h1>
                        <p>
                            Лучше страдать от
                            недельного лечения,
                            чем страдать от боли
                            более месяца
                        </p>
                    </div>
                    <div className='Footer-header_box'>
                        <h2>Страницы</h2>
                        <a href="">Главная</a>
                        <a href="">Вакцины</a>
                        <a href="">Комментарии</a>
                    </div>
                    <div className='Footer-header_box'>
                        <h2>Контакты</h2>
                        <ul>
                            <li>Тел: (237) 681-812-255</li>
                            <li>Майл: meddag@mail.ru</li>
                            <li>Адрес: Где-то там 8а</li>
                        </ul>
                    </div>
                    <div className='Footer-header_box'>
                        <h2>Получать новости</h2>
                        <input type="text" placeholder='Ваш Майл' />
                    </div>
                </div>
                <div className='Footer-menu_line'></div>
                <div className='Footer-menu_text'>© 2024 Имя больницы зарезервирована мною(Курсантом)
                    <div>
                        <img src={inBlue} alt="" />
                        <img src={facebookBlue} alt="" />
                        <img src={instagramBlue} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;