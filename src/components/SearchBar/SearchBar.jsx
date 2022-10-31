import styles from '../Styles.module.scss';
import { useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import React from 'react';

export const SearchBar = ({ handleSubmit }) => {
  const [request, setRequest] = useState('');

  const handleChange = e => {
    setRequest(e.target.value);
  };

  const onSubmit = evt => {
    evt.preventDefault();
    handleSubmit(request);
  };

  return (
    <>
      <header className={styles.SearchBar}>
        <form className={styles.SearchForm} onSubmit={onSubmit}>
          <button type="submit" className={styles.SearchFormButton}>
            <span className={styles.SearchFormButtonLabel}>Search</span>
            <CiSearch />
          </button>

          <input
            onChange={handleChange}
            name="input"
            className={styles.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    </>
  );
};
