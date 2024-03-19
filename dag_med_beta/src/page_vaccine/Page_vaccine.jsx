import './Page_vaccine.css';
import VaccineHealth from './images/vaccine-icon.svg';

const PageVaccine = () => {
    return(
        <div className="Vaccine-wrapper">
            <div className="Vaccine-wrapper_container">
                <div className="Vaccine-wrapper_container_block">
                    <div className="Vaccine-wrapper_container_block_subtitle">
                        <p>Все вакцины</p>
                    </div>
                    <div className="Vaccine-wrapper_container_block_title">
                        <p>Выберите под ваши нужды</p>
                    </div>
                    <div className="Vaccine-wrapper_container_block_table">
                        <a href='#A' className="Vaccine-wrapper_container_block_table_item">
                            <div className="Vaccine-wrapper_container_block_table_item_img">
                                <img src={VaccineHealth} alt="" />
                            </div>
                            <div className="Vaccine-wrapper_container_block_table_item_content">
                                <p>Демитрия А8 - Амнезийное расстройство</p>
                            </div>
                        </a>
                        <a href='#A' className="Vaccine-wrapper_container_block_table_item">
                            <div className="Vaccine-wrapper_container_block_table_item_img">
                                <img src={VaccineHealth} alt="" />
                            </div>
                            <div className="Vaccine-wrapper_container_block_table_item_content">
                                <p>Краннер 44 - Коронавирус</p>
                            </div>
                        </a>
                        <a href='#A' className="Vaccine-wrapper_container_block_table_item">
                            <div className="Vaccine-wrapper_container_block_table_item_img">
                                <img src={VaccineHealth} alt="" />
                            </div>
                            <div className="Vaccine-wrapper_container_block_table_item_content">
                                <p>Шкипер К19 - Ковид 19</p>
                            </div>
                        </a>
                        <a href='#A' className="Vaccine-wrapper_container_block_table_item">
                            <div className="Vaccine-wrapper_container_block_table_item_img">
                                <img src={VaccineHealth} alt="" />
                            </div>
                            <div className="Vaccine-wrapper_container_block_table_item_content">
                                <p>Ломанное А1 - ВИЧ</p>
                            </div>
                        </a>
                        <a href='#A' className="Vaccine-wrapper_container_block_table_item">
                            <div className="Vaccine-wrapper_container_block_table_item_img">
                                <img src={VaccineHealth} alt="" />
                            </div>
                            <div className="Vaccine-wrapper_container_block_table_item_content">
                                <p>Асфана Е88 - Эбола</p>
                            </div>
                        </a>
                        <a href='#A' className="Vaccine-wrapper_container_block_table_item">
                            <div className="Vaccine-wrapper_container_block_table_item_img">
                                <img src={VaccineHealth} alt="" />
                            </div>
                            <div className="Vaccine-wrapper_container_block_table_item_content">
                                <p>Испанка В5 - Герпес</p>
                            </div>
                        </a>
                        <a href='#A' className="Vaccine-wrapper_container_block_table_item">
                            <div className="Vaccine-wrapper_container_block_table_item_img">
                                <img src={VaccineHealth} alt="" />
                            </div>
                            <div className="Vaccine-wrapper_container_block_table_item_content">
                                <p>Шкефаль М9 - Геппатит В</p>
                            </div>
                        </a>
                        <a href='#A' className="Vaccine-wrapper_container_block_table_item">
                            <div className="Vaccine-wrapper_container_block_table_item_img">
                                <img src={VaccineHealth} alt="" />
                            </div>
                            <div className="Vaccine-wrapper_container_block_table_item_content">
                                <p>Шкефаль М8 -  Геппатит С</p>
                            </div>
                        </a>
                        <a href='#A' className="Vaccine-wrapper_container_block_table_item">
                            <div className="Vaccine-wrapper_container_block_table_item_img">
                                <img src={VaccineHealth} alt="" />
                            </div>
                            <div className="Vaccine-wrapper_container_block_table_item_content">
                                <p>Дерампаг А32 - Бешенство</p>
                            </div>
                        </a>
                        <a href='#A' className="Vaccine-wrapper_container_block_table_item">
                            <div className="Vaccine-wrapper_container_block_table_item_img">
                                <img src={VaccineHealth} alt="" />
                            </div>
                            <div className="Vaccine-wrapper_container_block_table_item_content">
                                <p>Товарищ Ц - Корь</p>
                            </div>
                        </a>
                        <a href='#A' className="Vaccine-wrapper_container_block_table_item">
                            <div className="Vaccine-wrapper_container_block_table_item_img">
                                <img src={VaccineHealth} alt="" />
                            </div>
                            <div className="Vaccine-wrapper_container_block_table_item_content">
                                <p>Самбиот В8 - Оспа</p>
                            </div>
                        </a>
                        <a href='#A' className="Vaccine-wrapper_container_block_table_item">
                            <div className="Vaccine-wrapper_container_block_table_item_img">
                                <img src={VaccineHealth} alt="" />
                            </div>
                            <div className="Vaccine-wrapper_container_block_table_item_content">
                                <p>Сьерра Аль7 - Хворь</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PageVaccine;
