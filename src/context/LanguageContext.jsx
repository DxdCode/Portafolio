import { createContext, useContext, useState, useEffect } from 'react'

// Crear el contexto
const LanguageContext = createContext()

// Provider
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en')

  // Leer de localStorage al iniciar
  useEffect(() => {
    const storedLang = localStorage.getItem('language')
    if (storedLang) setLanguage(storedLang)
  }, [])

  // Guardar en localStorage cuando cambia
  useEffect(() => {
    localStorage.setItem('language', language)
  }, [language])

  const toggleLanguage = () => {
    setLanguage(prev => (prev === 'en' ? 'es' : 'en'))
  }

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

// Hook para usar el contexto
export const useLanguageContext = () => useContext(LanguageContext)

