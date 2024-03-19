import './Page_header.css';
import HeaderLogo from './images/Logo.svg';
import HeaderPhone from './images/Phone.svg';
import HeaderTime from './images/Time.svg';
import HeaderLocation from './images/Location.svg';
const PageHeader = () => {
    return(
        <div className="PageHeader-wrapper">
            <div className="PageHeader-wrapper_container">
                <div className="PageHeader-wrapper_container_header">
                    <div className="PageHeader-wrapper_container_header_logo">
                        <a href="#A" className="PageHeader-wrapper_container_header_logo_link">
                            <img src={HeaderLogo} alt="" />
                        </a>
                    </div>
                    <div className="PageHeader-wrapper_container_header_information">
                        <div className="PageHeader-wrapper_container_header_information_row">
                            <div className="PageHeader-wrapper_container_header_information_row_item">
                                <div className="PageHeader-wrapper_container_header_information_row_item_img">
                                    <img src={HeaderPhone} alt="" />
                                </div>
                                <div className="PageHeader-wrapper_container_header_information_row_item_content">
                                    <p className="PageHeader-wrapper_container_header_information_row_item_content_title">
                                        Телефон
                                    </p>
                                    <p className="PageHeader-wrapper_container_header_information_row_item_content_subtitle">
                                        {'(237)'} 681-812-255
                                    </p>
                                </div>
                            </div>
                            <div className="PageHeader-wrapper_container_header_information_row_item">
                                <div className="PageHeader-wrapper_container_header_information_row_item_img">
                                    <img src={HeaderTime} alt="" />
                                </div>
                                <div className="PageHeader-wrapper_container_header_information_row_item_content">
                                    <p className="PageHeader-wrapper_container_header_information_row_item_content_title">
                                        Время работы
                                    </p>
                                    <p className="PageHeader-wrapper_container_header_information_row_item_content_subtitle">
                                        09:00 - 20:00 
                                    </p>
                                </div>
                            </div>
                            <div className="PageHeader-wrapper_container_header_information_row_item">
                                <div className="PageHeader-wrapper_container_header_information_row_item_img">
                                    <img src={HeaderLocation} alt="" />
                                </div>
                                <div className="PageHeader-wrapper_container_header_information_row_item_content">
                                    <p className="PageHeader-wrapper_container_header_information_row_item_content_title">
                                        Местонахождение
                                    </p>
                                    <p className="PageHeader-wrapper_container_header_information_row_item_content_subtitle">
                                        Где-то там 8а
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="PageHeader-wrapper_container_navigaton">
                <div className="PageHeader-wrapper_container_navigaton_menu">
                    <ul className="PageHeader-wrapper_container_navigaton_menu_list">
                        <li className="PageHeader-wrapper_container_navigaton_menu_list_item">
                            <a href="/">Главная</a>
                        </li>
                        <li className="PageHeader-wrapper_container_navigaton_menu_list_item">
                            <a href="/PageVaccine">Вакцины</a>
                        </li>
                        <li className="PageHeader-wrapper_container_navigaton_menu_list_item">
                            <a href="/Feedback">Комментарии</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default PageHeader;
