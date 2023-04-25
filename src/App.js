import { useContext, useEffect } from 'react';
import './App.css';
import { workDays } from './http/workDaysApi';
import {Context} from "./index";
import { observable } from 'mobx';
import { observer } from 'mobx-react-lite';




const App = observer(() => {

  const {calculator} = useContext(Context);


  const calc = async (year, month) => {
    const response = await workDays(year, month);
    calculator.setDays(response);
  }


  useEffect(() => {
    calc(Number(calculator.year), Number(calculator.month));
  }, []);


  return (
    <div className="container">

      <div className="item item_1">
        <div>
          <label className='content_item' htmlFor="salary">Заработная плата</label>
        </div>
        <div>
          <input className='content_item' type="number" value={calculator.salary} id="salary" min="1" onChange={
            (event) => {calculator.setSalary(event.target.value); calc(Number(calculator.year), Number(calculator.month))}}/>
        </div>
      </div>


      <div className="item item_2">
        <div>
          <label className='content_item' htmlFor="workingHours">Часов в рабочем дне</label>
        </div>
        <div>
          <input className='content_item' type="number" value={calculator.workingHours} id="workingHours" min="1" max="24" onChange={
            (event) => {calculator.setWorkingHours(event.target.value); calc(Number(calculator.year), Number(calculator.month))}}/>
        </div>
      </div>


      <div className="item item_3">
        <div>
          <label className='content_item' htmlFor="year">Год</label>
        </div>
        <div>
          <input className='content_item' type="number" value={calculator.year} id="year" min="2000" max="2050" onChange={
            (event) => {calculator.setYear(event.target.value); calc(Number(calculator.year), Number(calculator.month))}}/>
        </div>
      </div>


      <div className="item item_4">
        <div>
          <label className='content_item' htmlFor="month">Месяц</label>
        </div>
        <div>
          <select className='content_item' id="month" onChange={
            (event) => {calculator.setMonth(event.target.value); calc(Number(calculator.year), Number(calculator.month))}}>
            <option value="1" >Январь</option>
            <option value="2">Февраль</option>
            <option value="3">Март</option>
            <option value="4">Апрель</option>
            <option value="5">Май</option>
            <option selected value="6">Июнь</option>
            <option value="7">Июль</option>
            <option value="8">Август</option>
            <option value="9">Сентябрь</option>
            <option value="10">Октябрь</option>
            <option value="11">Ноябрь</option>
            <option value="12">Декабрь</option>
          </select>
      </div>
      </div>

      {console.log(typeof calculator.totalCostPerHour() == "number")}
      {console.log(calculator.totalCostPerHour() != NaN)}
      {console.log(calculator.totalCostPerHour() != Infinity)}
      {console.log(calculator.totalCostPerHour())}
      

        <div className="item item_5">Стоимость часа: {typeof calculator.totalCostPerHour() == "number" && !isNaN(calculator.totalCostPerHour()) &&
         calculator.totalCostPerHour() != Infinity ? calculator.totalCostPerHour() : "Некорректные данные"}</div>
    </div>
  );
})

export default App;




