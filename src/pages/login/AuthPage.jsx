import { useState } from 'react'
import './AuthPage.css'

function AuthPage({ backgroundImage, otterImage, onDone, onBack }) {
  const [mode, setMode] = useState('register')
  const [showPassword, setShowPassword] = useState(false)

  const submit = (event) => {
    event.preventDefault()
    onDone()
  }

  return (
    <section className="AuthPage" style={{ '--auth-background': `url("${backgroundImage}")` }}>
      <button className="AuthPage__back" type="button" onClick={onBack} aria-label="Volver al inicio"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m15 18-6-6 6-6M9 12h12" /></svg></button>
      <img className="AuthPage__mascot" src={otterImage} alt="Nutria tejiendo" />
      <div className={`AuthCard AuthCard--${mode}`}>
        <div className="AuthCard__tabs">
          <button className={mode === 'login' ? 'is-active' : ''} type="button" onClick={() => setMode('login')}>Inicio de sesi&#243;n</button>
          <span aria-hidden="true">/</span>
          <button className={mode === 'register' ? 'is-active' : ''} type="button" onClick={() => setMode('register')}>Registrarse</button>
        </div>

        {mode === 'register' ? <form className="AuthForm" onSubmit={submit}>
          <label>Ingrese nombre<input required placeholder="Completar campos..." /></label>
          <label>Ingrese Apellido<input required placeholder="Completar campos..." /></label>
          <label>Ingrese nombre de usuario<input required placeholder="Completar campos..." /></label>
          <label>Contrase&#241;a<div className="AuthForm__password"><input required type={showPassword ? 'text' : 'password'} placeholder="Completar campos..." /><button type="button" aria-label="Mostrar u ocultar contrase&#241;a" onClick={() => setShowPassword((visible) => !visible)}>◉</button></div></label>
          <label>Ingrese la contrase&#241;a nuevamente<input required type="password" placeholder="Completar campos..." /></label>
          <label className="AuthForm__terms"><input required type="checkbox" /> <span>Aceptar los <a href="#terminos">t&#233;rminos y condiciones</a></span></label>
          <button className="AuthForm__submit" type="submit">Registrarse</button>
        </form> : <form className="AuthForm AuthForm--login" onSubmit={submit}>
          <label>Ingrese nombre de usuario o gmail<input required placeholder="Ingrese nombre de usuario o gmail" /></label>
          <label>Contrase&#241;a<div className="AuthForm__password"><input required type={showPassword ? 'text' : 'password'} placeholder="Ingrese su contrase&#241;a..." /><button type="button" aria-label="Mostrar u ocultar contrase&#241;a" onClick={() => setShowPassword((visible) => !visible)}>◉</button></div></label>
          <a className="AuthForm__forgot" href="#recuperar">&#191;Olvidaste tu contrase&#241;a?</a>
          <button className="AuthForm__submit" type="submit">Iniciar sesi&#243;n</button>
          <button className="AuthForm__social" type="button"><b>G</b> Iniciar sesi&#243;n con Google</button>
          <button className="AuthForm__social" type="button"><b>f</b> Iniciar sesi&#243;n con Facebook</button>
        </form>}
      </div>
    </section>
  )
}

export default AuthPage
