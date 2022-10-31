import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class Form extends Component {
  // static propTypes = { second: third };
  state = {
    name: '',
    price: '',
    discount: false,
  };

  handleChange = event => {
    // Універсальна та проста версия зміни стану у импути-форми! дуже користна
    console.log(event.target.value);
    console.log(event.target.name); // 'name' | 'price' | 'discount'
    // if (event.target.type === 'checkbox') {
    //   this.setState(prevState => ({
    //     // це Callback function в каллбєк функции ти можешь робити будь що!
    //     // просто треба повернути Правильні данні! (state) - будь що

    //     [event.target.name]: !prevState[event.target.name],
    //   }));
    //   return;
    // }
    // this.setState({
    //   // спрощена версия зміни стану у импути-форми!
    //   // ['name']: event.target.value,
    //   [event.target.name]: event.target.value,
    // });
    // this.state.name // this.state.price // this.state.discount
    //
    this.setState(prevState => ({
      [event.target.name]:
        event.target.type === 'checkbox'
          ? !prevState[event.target.name]
          : event.target.value,
    }));
  };
  render() {
    return (
      <form className="">
        <h1>Title</h1>
        <label className="">
          <span>Taco name:</span>
          <input
            onChange={this.handleChange}
            type="text"
            name="name"
            value={this.state.name}
            className=""
            placeholder="Enter taco name"
          />
        </label>
        <label className="input-group">
          <span>Taco name:</span>
          <input
            onChange={this.handleChange}
            type="text"
            name="price"
            value={this.state.price}
            className="s.input"
            autoComplete="off"
            placeholder="Enter taco class"
          />
        </label>
        <label className="s.checkboxGroup">
          <input
            type="checkbox"
            name="discount"
            className=""
            checked={this.state.discount}
            onChange={this.handleChange}
          />
          <span>Do you need a Discount?</span>
        </label>
        <button className="s.SubmitBtn" type="submit">
          SubmitOnTaco
        </button>
      </form>
    );
  }
}
