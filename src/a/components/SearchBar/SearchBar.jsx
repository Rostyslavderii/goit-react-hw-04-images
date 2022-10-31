import styles from '../Styles.module.scss';
import { CiSearch } from 'react-icons/ci';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

export class SearchBar extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
  };

  state = {
    request: null,
  };

  handleChange = e => {
    this.setState({ request: e.target.value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    this.props.handleSubmit(this.state.request);
  };

  render() {
    return (
      <>
        <header className={styles.SearchBar}>
          <form className={styles.SearchForm} onSubmit={this.handleSubmit}>
            <button type="submit" className={styles.SearchFormButton}>
              <span className={styles.SearchFormButtonLabel}>Search</span>
              <CiSearch />
            </button>

            <input
              onChange={this.handleChange}
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
  }
}
