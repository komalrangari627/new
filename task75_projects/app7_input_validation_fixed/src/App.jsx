import React, { useState, useMemo } from 'react'

function validateName(name){
  return name.trim().length >= 2
}
function validateEmail(email){
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}
function validatePassword(p){
  return p.length >= 6
}

export default function App(){
  const [form, setForm] = useState({name:'', email:'', password:'', confirm:''})
  const [submitted, setSubmitted] = useState(false)

  const errors = useMemo(()=>{
    return {
      name: validateName(form.name) ? null : 'Name must be at least 2 characters',
      email: validateEmail(form.email) ? null : 'Enter a valid email',
      password: validatePassword(form.password) ? null : 'Password must be 6+ chars',
      confirm: form.password === form.confirm ? null : 'Passwords must match'
    }
  }, [form])

  const isValid = Object.values(errors).every(v=>v===null)

  function onChange(e){
    const {name, value} = e.target
    setForm(prev=>({...prev, [name]: value}))
    setSubmitted(false)
  }

  function onSubmit(e){
    e.preventDefault()
    setSubmitted(true)
    if(!isValid) return
    alert('Form valid! (this demo does not send data)')
    setForm({name:'', email:'', password:'', confirm:''})
    setSubmitted(false)
  }

  return (
    <div className="wrap">
      <div className="card">
        <h1>Input Validation Demo</h1>
        <form onSubmit={onSubmit} className="form">
          <label>
            Name
            <input name="name" value={form.name} onChange={onChange} />
            {submitted && errors.name && <div className="err">{errors.name}</div>}
          </label>

          <label>
            Email
            <input name="email" value={form.email} onChange={onChange} />
            {submitted && errors.email && <div className="err">{errors.email}</div>}
          </label>

          <label>
            Password
            <input name="password" type="password" value={form.password} onChange={onChange} />
            {submitted && errors.password && <div className="err">{errors.password}</div>}
          </label>

          <label>
            Confirm password
            <input name="confirm" type="password" value={form.confirm} onChange={onChange} />
            {submitted && errors.confirm && <div className="err">{errors.confirm}</div>}
          </label>

          <button className="btn" disabled={!isValid && submitted===false && true && false ? false : false} type="submit">
            Submit
          </button>

          <div className="hint">Tip: try invalid values and press submit to see inline errors.</div>
        </form>
      </div>
    </div>
  )
}
