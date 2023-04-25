import { makeAutoObservable } from "mobx";

export default class CalculatorStore 
{
    constructor()
    {
        this._days = [];
        this._salary = 20000;
        this._workingHours = 8;
        this._month = 6;
        this._year = 2023;

        makeAutoObservable(this);
    }

    sumWorkingDays()
    {
        let sum = 0;

        this._days.forEach(element => {
            if(element === "0")
                sum++;
        });
        return sum;
    }

    totalCostPerHour()
    {
        return +(Number(this._salary) / (Number(this.sumWorkingDays()) * Number(this._workingHours))).toFixed(2); 
    }

    setDays(days){
        this._days = days;
    }

    setSalary(salary)
    {
        if(Number(salary) > 0 || salary=="")
        {
            this._salary = salary;
        }
        else
        {
            this._salary = "";
            alert("Зарплата указана неверно!")
        }
    }

    setWorkingHours(workingHours)
    {
        if(Number(workingHours) > 0 && Number(workingHours) < 25 || workingHours=="")
        {
            this._workingHours = workingHours;
        }
        else
        {
            this._workingHours = "";
            alert("Рабочие часы указаны неверно!")
        }
    }

    setMonth(month)
    {
        if(Number(month) > 0 && Number(month) < 13)
        {
            this._month = month;
        }
        else
        {
            this._month = "";
            alert("Месяц указан неверно!")
        }
    }

    setYear(year)
    {
        this._year = year;
        if(Number(year) > 0 && Number(year) < 2050 || year=="")
        {
            this._year = year;
        }
        else
        {
            this._year = "";
            alert("Год указан неверно!")
        }
    }

    get days()
    {
        return this._days;
    }

    get salary()
    {
        return this._salary;
    }

    get workingHours()
    {
        return this._workingHours;
    }

    get month()
    {
        return this._month;
    }

    get year()
    {
        return this._year;
    }
}