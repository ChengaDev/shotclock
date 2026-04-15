import React, { useState, createContext, useContext, FC, PropsWithChildren } from 'react'
import { useLocation } from 'react-router-dom'
import { LocalizationContextType } from './types'
import Localization from '../../localization/locailzation'
import LanguageCodes from '../../constants/LanguageCodes'

const LANG_KEY = 'sc_lang'
const VALID_NON_ENGLISH = ['it', 'es', 'fr', 'el']

const getLangFromPath = (pathname: string): string => {
  const maybeLang = pathname.split('/')[1]
  return VALID_NON_ENGLISH.includes(maybeLang) ? maybeLang : LanguageCodes.English
}

const languageContextDefaultValues: LocalizationContextType = {
  languageCode: LanguageCodes.English,
  locals: Localization[LanguageCodes.English],
  changeLocale: () => {},
}

export const LocalizationContext = createContext<LocalizationContextType>(
  languageContextDefaultValues
)

const LanguageProvider: FC<PropsWithChildren> = ({ children }) => {
  const { pathname } = useLocation()

  const [languageCode, setLanguageCode] = useState<string>(
    () => getLangFromPath(pathname)
  )

  const changeLocale = (newLanguageCode: string) => {
    setLanguageCode(newLanguageCode)
    localStorage.setItem(LANG_KEY, newLanguageCode)
  }

  return (
    <LocalizationContext.Provider
      value={{ languageCode, locals: Localization[languageCode], changeLocale }}
    >
      {children}
    </LocalizationContext.Provider>
  )
}

export const useLocalization = () => useContext(LocalizationContext)

export default LanguageProvider
