import React from 'react'

function Edit() {
  return (
    <form action="">
        <input type="text" placeholder='username'/>
        <input type="email" placeholder='email'/>
        <input type="tel" placeholder='Number'/>
        <textarea placeholder='Message'  cols="30" rows="10"></textarea>
    </form>
  )
}

export default Edit