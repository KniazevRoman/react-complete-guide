import React, {useState} from "react";

import Card from "../UI/Card";
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import ExpensesList from "./ExpensesList";
import './Expenses.css';

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = (year) => {
        setFilteredYear(year);
    };

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear() === +filteredYear;
    });
    
    return (
        <li>
            <Card className="expenses">
                <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>   
                <ExpensesList items={filteredExpenses}/>
            </Card>
        </li>
        
    );
}

export default Expenses;