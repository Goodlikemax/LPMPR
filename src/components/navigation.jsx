export const Navigation = (props) => {
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
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

          <div className=''>

            <img src='img/moparLogo.png' className='navbar-brand navbar-form' alt='' />{' '}
          </div>

        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
            <li>
              <a href='tel:0800750960' className='page-scroll'>
                0-800-750-960
              </a>
            </li>
            <li>
              <a href='tel:0939123600' className='page-scroll'>
                093-912-36-00
              </a>
            </li>
            <li>
              <a href='/#features' className='page-scroll'>
                Переваги
              </a>
            </li>
            <li>
              <a href='/#about' className='page-scroll'>
                Про нас
              </a>
            </li>
            <li>
              <a href='/#shipping' className='page-scroll'>
                Доставка
              </a>
            </li>
            <li>
              <a href='/#guarantee' className='page-scroll'>
                Гарантія
              </a>
            </li>
            <li>
              <a href='/#contact' className='page-scroll'>
                Контакти
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
