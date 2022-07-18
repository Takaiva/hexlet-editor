import React from 'react';
import { useSelect } from './hooks.js';

export const Select = () => {
  const {
    languages,
    language,
    selectedLanguage,
    selectLanguage,
    ChangeLanguage,
  } = useSelect();

  return (
    <div className="container">
      <form onSubmit={(e) => ChangeLanguage(e, selectedLanguage)}>
        <div className="form-group d-flex flex-column align-items-center">
          <label htmlFor="language" className="h4 font-italic font-weight-lighter">
            Choose language
            <select
              name={language}
              className="form-control"
              aria-label="select languages"
              onChange={selectLanguage}
            >
              {languages.map((l) => (
                <option key={l} value={l}>{l}</option>
              ))}
            </select>
            <input type="submit" value="Select" className="btn btn-primary" id="language" />
          </label>
        </div>
      </form>
    </div>
  );
};
