import React, { useState } from 'react';
import './Page_vaccine.css';
import VaccineHealth from './images/vaccine-icon.svg';

const Vaccine = (props) => {
    return (
        <a onClick={() => props.onClick(props.name)} className="Vaccine-wrapper_container_block_table_item">
            <div className="Vaccine-wrapper_container_block_table_item_img">
                <img src={VaccineHealth} alt="" />
            </div>
            <div className="Vaccine-wrapper_container_block_table_item_content">
                <p>{props.name}</p>
            </div>
        </a>
    )
}

const PageVaccine = () => {
    const [selectedVaccine, setSelectedVaccine] = useState(null);

    const handleClick = (vaccineName) => {
        setSelectedVaccine(vaccineName);
    };

    return (
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
                        {selectedVaccine && (
                            <div className="SelectedVaccine">
                                <div className='SelectedVaccine_info'>
                                    <div className='SelectedVaccine_Exit' onClick={() => setSelectedVaccine(null)}>x</div>
                                    <img src={VaccineHealth} alt="" />
                                    <p>Вакцина: {selectedVaccine}</p>
                                    <p>Описание:
                                        {
                                            selectedVaccine === 'Демитрия А8 - Амнезийное расстройство' ? '"Демитрия А8" разработана для предотвращения амнезийных расстройств. Её формула основана на последних достижениях в области нейрофармакологии, предоставляя надежную защиту от утраты памяти и улучшая когнитивные функции.' :
                                                selectedVaccine === 'Краннер 44 - Коронавирус' ? '"Краннер 44" - инновационная вакцина, разработанная для борьбы с коронавирусом. Её высокоэффективная формула помогает организму справиться с вирусом, предотвращая его развитие и смягчая симптомы.' :
                                                    selectedVaccine === 'Шкипер К19 - Ковид 19' ? 'Вакцина "Шкипер К19" создана специально для борьбы с вирусом COVID-19. Её компоненты активируют иммунную систему, обеспечивая надежную защиту от инфекции и способствуя быстрому восстановлению здоровья.' :
                                                        selectedVaccine === 'Ломанное А1 - ВИЧ' ? '"Ломанное А1" - вакцина, предназначенная для профилактики вируса иммунодефицита человека (ВИЧ). Её уникальная формула направлена на укрепление иммунной системы и снижение риска заражения ВИЧ.' :
                                                            selectedVaccine === 'Асфана Е88 - Эбола' ? '"Асфана Е88" разработана для предотвращения эболы. Её компоненты эффективно борются с вирусом, обеспечивая высокий уровень защиты и способствуя стабильному здоровью.' :
                                                                selectedVaccine === 'Испанка В5 - Герпес' ? '"Испанка В5" - вакцина, предназначенная для предотвращения герпеса. Её активные вещества подавляют развитие вируса, минимизируя риски рецидивов и обеспечивая долгосрочную защиту.' :
                                                                    selectedVaccine === 'Шкефаль М9 - Геппатит В' ? '"Шкефаль М9" разработана для профилактики гепатита В. Её компоненты стимулируют иммунную систему, предотвращая заражение и обеспечивая поддержание здоровья печени.' :
                                                                        selectedVaccine === 'Шкефаль М8 -  Геппатит С' ? '"Шкефаль М8" - вакцина, созданная для предотвращения гепатита С. Её инновационная формула обеспечивает надежную защиту печени и снижает риски развития хронической инфекции.' :
                                                                            selectedVaccine === 'Дерампаг А32 - Бешенство' ? '"Дерампаг А32" разработана для предотвращения бешенства. Её компоненты эффективно сдерживают вирус, обеспечивая безопасность и защиту от данного инфекционного заболевания.' :
                                                                                selectedVaccine === 'Товарищ Ц - Корь' ? '"Товарищ Ц" - вакцина, направленная на профилактику кори. Её активные ингредиенты стимулируют иммунную систему, предотвращая заражение и обеспечивая здоровье организма.' :
                                                                                    selectedVaccine === 'Самбиот В8 - Оспа' ? '"Самбиот В8" разработана для борьбы с вирусом оспы. Её формула обеспечивает эффективную защиту от инфекции, снижая риски развития осложнений.' :
                                                                                        selectedVaccine === 'Сьерра Аль7 - Хворь' ? '' : '"Сьерра Аль7" - вакцина, предназначенная для профилактики хвори. Её компоненты укрепляют иммунитет, предотвращая развитие инфекции и способствуя общему здоровью.'
                                        }
                                    </p>
                                    <p>+7 (124) (556) - 44 - 44</p>
                                    <button>
                                        {
                                            selectedVaccine === 'Демитрия А8 - Амнезийное расстройство' ? '6000р' :
                                                selectedVaccine === 'Краннер 44 - Коронавирус' ? '3000р' :
                                                    selectedVaccine === 'Шкипер К19 - Ковид 19' ? '4000р' :
                                                        selectedVaccine === 'Ломанное А1 - ВИЧ' ? '12000р' :
                                                            selectedVaccine === 'Асфана Е88 - Эбола' ? '2000р' :
                                                                selectedVaccine === 'Испанка В5 - Герпес' ? '7000р' :
                                                                    selectedVaccine === 'Шкефаль М9 - Геппатит В' ? '4500р' :
                                                                        selectedVaccine === 'Шкефаль М8 -  Геппатит С' ? '4000р' :
                                                                            selectedVaccine === 'Дерампаг А32 - Бешенство' ? '1500р' :
                                                                                selectedVaccine === 'Товарищ Ц - Корь' ? '1000р' :
                                                                                    selectedVaccine === 'Самбиот В8 - Оспа' ? '8000р' :
                                                                                        selectedVaccine === 'Сьерра Аль7 - Хворь' ? '3000р' : ''
                                        }
                                    </button>
                                </div>
                            </div>
                        )}
                        <Vaccine name={'Демитрия А8 - Амнезийное расстройство'} onClick={handleClick} />
                        <Vaccine name={'Краннер 44 - Коронавирус'} onClick={handleClick} />
                        <Vaccine name={'Шкипер К19 - Ковид 19'} onClick={handleClick} />
                        <Vaccine name={'Ломанное А1 - ВИЧ'} onClick={handleClick} />
                        <Vaccine name={'Асфана Е88 - Эбола'} onClick={handleClick} />
                        <Vaccine name={'Испанка В5 - Герпес'} onClick={handleClick} />
                        <Vaccine name={'Шкефаль М9 - Геппатит В'} onClick={handleClick} />
                        <Vaccine name={'Шкефаль М8 -  Геппатит С'} onClick={handleClick} />
                        <Vaccine name={'Дерампаг А32 - Бешенство'} onClick={handleClick} />
                        <Vaccine name={'Товарищ Ц - Корь'} onClick={handleClick} />
                        <Vaccine name={'Самбиот В8 - Оспа'} onClick={handleClick} />
                        <Vaccine name={'Сьерра Аль7 - Хворь'} onClick={handleClick} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PageVaccine;