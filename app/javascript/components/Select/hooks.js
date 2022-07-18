import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { actions } from '../../slices';

export const useSelect = () => {
  const dispatch = useDispatch();

  const {
    languages,
    language,
  } = useSelector((state) => ({
    languages: state.languages.supportedLanguages,
    language: state.languages.currentLanguage,
  }));

  const [selectedLanguage, setSelectedLanguage] = useState(language);

  const selectLanguage = (e) => {
    setSelectedLanguage(e.target.value);
  };

  const ChangeLanguage = (e, language) => {
    e.preventDefault();
    dispatch(actions.changeLanguage(language));
  };

  return {
    languages,
    language,
    selectedLanguage,
    selectLanguage,
    ChangeLanguage,
  };
};
