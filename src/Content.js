import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Content.css';

function Flight(props) {
    return React.createElement('article',{},
            React.createElement('h2', {className: 'article'},`Откуда: ${props.from}`),
            React.createElement('h2', {className: 'article'},`Куда: ${props.to}`),
            React.createElement('p', {className: 'article'}, `Номер рейса: ${props.number}`),
            React.createElement('p', {className: 'article'}, `Цена: ${props.cost}`),
            React.createElement('p', {className: 'article'}, `Дата: ${props.date}`),
            React.createElement('button', {className: 'article'}, `Купить билет`),
            );
    }	
const flights = (
        <div>
            <Flight from="Бишкек" to="Лондон" number="59187364" cost="100$" date="12.02.2020"/>
            <Flight from="Бишкек" to="Астана" number="86428361" cost="80$" date="30.06.2019"/>
            <Flight from="Лондон" to="Берлин" number="43268108" cost="70$" date="01.01.2021"/>
            <Flight from="Пекин" to="Нью-Йорк" number="63278642" cost="250$" date="22.02.2022"/>
        </div>
    );

class Content extends Component {
    render() {
        return ReactDOM.render(flights, document.getElementById('content'));
  }
}

export default Content;
