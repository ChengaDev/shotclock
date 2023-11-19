import React, { useState, createContext, useContext, FC } from 'react'
import { LocalizationContextType } from './types'
import Localization from '../../localization/locailzation'
import LanguageCodes from '../../constants/LanguageCodes'

const languageContextDefaultValues: LocalizationContextType = {
  languageCode: LanguageCodes.English,
  locals: Localization[LanguageCodes.English],
  changeLocale: () => {},
}

export const LocalizationContext = createContext<LocalizationContextType>(
  languageContextDefaultValues
)

const LanguageProvider: FC = ({ children }) => {
  const [languageCode, setLanguageCode] = useState<string>(
    LanguageCodes.English
  )

  const changeLocale = (newLanguageCode: string) => {
    setLanguageCode(newLanguageCode)
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
