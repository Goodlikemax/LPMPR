export const Navigation = (props) => {

    return (
        <nav id='menu' className='navbar  navbar-default navbar-fixed-top'>
            <div className='container'>
                <div className='navbar-header'>
                    <button
                        type='button'
                        className='navbar-toggle collapsed'
                        data-toggle='collapse'
                        data-target='#bs-example-navbar-collapse-1'
                    >
                        {' '}
                        <span className='sr-only'>Toggle navigation</span>{' '}
                        <span className='icon-bar'></span>{' '}
                        <span className='icon-bar'></span>{' '}
                        <span className='icon-bar'></span>{' '}
                    </button>

                    <div className='navbar-try'>

                        <ul className=' navbar-nav navbar-right'>

                            <li>
                                <img src='img/moparLogo.png' className='navbar-brand navbar-form' alt=''/>{' '}
                            </li>
                            <li>
                                <a href='tel:0800750960' className='navbar-brand'>
                                    0-800-750-960
                                </a>
                            </li>
                            <li>
                                <a href='tel:0939123600' className='navbar-brand'>
                                    093-912-36-00
                                </a>
                            </li>
                        </ul>

                    </div>

                </div>

                <div
                    className='collapse navbar-collapse'
                    id='bs-example-navbar-collapse-1'
                >
                    <ul className='nav navbar-nav navbar-right'>
                        <li>
                            <a data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" href='/#features'
                               className='page-scroll'>
                                Переваги
                            </a>
                        </li>
                        <li>
                            <a data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" href='/#about'
                               className='page-scroll'>
                                Про нас
                            </a>
                        </li>
                        <li>
                            <a data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" href='/#shipping'
                               className='page-scroll'>
                                Доставка
                            </a>
                        </li>
                        <li>
                            <a data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" href='/#guarantee'
                               className='page-scroll'>
                                Гарантія
                            </a>
                        </li>
                        <li>
                            <a data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" href='/#contact'
                               className='page-scroll'>
                                Контакти
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
