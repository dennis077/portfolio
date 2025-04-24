import React from 'react'
import './contact.css'
const Contact = () => {
  return (
    <section>
      <h2>Contact</h2>
      <div className='container'>
        <div className="form__container">
        <form action="" className='form'>
          <div className="input__area">
          <input type='text' className='name' placeholder='First Name'></input>
          <input type='text' className='name' placeholder='Last Name'></input>
          <input type='text' className='name' placeholder='Contact Number'></input>
          <input type='text' className='name' placeholder='Email'></input>
          </div>
          <div className="message__area">
          <textarea rows="4" cols="50" placeholder='Message'/>
          </div>
          <input type="submit" value="Submit" className='submit__button'/>
        </form>
          </div>
        </div>

    </section>
  )
}

export default Contact