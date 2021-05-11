import { useState } from 'react'
import emailjs from 'emailjs-com'

const initialState = {
  name: '',
  tel: '',
  message: '',
}
export const Contact = (props) => {
  const [{ name, tel, message }, setState] = useState(initialState)

  const handleChange = (e) => {
    const { name, value } = e.target
    setState((prevState) => ({ ...prevState, [name]: value }))
  }
  const clearState = () => setState({ ...initialState })

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log(name, tel, message)
    // alert(name + tel + message)
    emailjs
      .sendForm(
        '', 'template_xhpt6ds', e.target, ''
      )
      .then(
        (result) => {
          console.log(result.text)
          clearState()
          alert("Дякуємо, ми зв'яжемося з вами якнайшвидше")
        },
        (error) => {
          console.log(error.text)
        }
      )


  }
  return (
    <div>
      <div id='contact'>
        <div className='container'>
          <div className='col-md-8'>
            <div className='row'>
              <div className='section-title'>
                <h2>Запит</h2>
                <p>
                  Залиште свої контактні данні і ми зв'яжемося з вами
                </p>
              </div>
              <form name='sentMessage' validate onSubmit={handleSubmit}>
                <div className='row'>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <input
                        type='text'
                        id='name'
                        name='name'
                        className='form-control'
                        placeholder="Ім'я"
                        required
                        onChange={handleChange}
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <input
                        type='tel'
                        id='tel'
                        name='tel'
                        pattern="[0]{1}[0-9]{9}"
                        className='form-control'
                        placeholder='Телефон у форматі 0912345678'
                        required
                        onChange={handleChange}
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>
                </div>
                <div className='form-group'>
                  <textarea
                    name='message'
                    id='message'
                    className='form-control'
                    rows='4'
                    placeholder='Повідомлення'
                    onChange={handleChange}
                  ></textarea>
                  <p className='help-block text-danger'></p>
                </div>
                <div id='success'></div>
                <button type='submit' className='btn btn-custom btn-lg'>
                  Відправити повідомлення
                </button>
              </form>
            </div>
          </div>
          <div className='col-md-3 col-md-offset-1 contact-info'>
            <div className='contact-item'>
              <h3>Контакти</h3>
              {/*<p>*/}
              {/*  <span>*/}
              {/*    <i className='fa fa-map-marker'></i> Address*/}
              {/*  </span>*/}
              {/*  {props.data ? props.data.address : 'loading'}*/}
              {/*</p>*/}
            </div>
            <div className='contact-item'>
              <p>
                <span>
                  <i className='fa fa-phone'></i> Телефон
                </span>{' '}
                <ul>
                  <li>{props.data ? props.data.phone : 'loading'}</li>
                  <li>{props.data ? props.data.phone2 : 'loading'}</li>
                </ul>
              </p>
            </div>
            <div className='contact-item'>
              <p>
                <span>
                  <i className='fa fa-mobile-phone'></i> Telegram
                </span>{' '}
                098-523-42-53
              </p>
            </div>
            <div className='contact-item'>
              <p>
                <span>
                  <i className='fa fa-envelope-o'></i> Email
                </span>{' '}
                {props.data ? props.data.email : 'loading'}
              </p>
            </div>
          </div>
          <div className='col-md-12'>
            <div className='row'>
              <div className='social'>

                {/*<ul>*/}
                {/*  <li>*/}
                {/*    <a href={props.data ? props.data.facebook : '/'}>*/}
                {/*      <i className='fa fa-facebook'></i>*/}
                {/*    </a>*/}
                {/*  </li>*/}
                {/*  <li>*/}
                {/*    <a href={props.data ? props.data.twitter : '/'}>*/}
                {/*      <i className='fa fa-twitter'></i>*/}
                {/*    </a>*/}
                {/*  </li>*/}
                {/*  <li>*/}
                {/*    <a href={props.data ? props.data.youtube : '/'}>*/}
                {/*      <i className='fa fa-youtube'></i>*/}
                {/*    </a>*/}
                {/*  </li>*/}
                {/*</ul>*/}
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
