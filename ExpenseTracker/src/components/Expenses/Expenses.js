import { useState } from 'react/cjs/react.development';
import ExpensesList from "./ExpensesList";
import ExpenseFilter from "./ExpenseFilter";
import './Expenses.css'
import Card from '../UI/Card';

const Expenses = props => {
    const [selectedYear, setSelectedYear] = useState('');

    const expenseFilterChangeHandler = (newSelectedValue) => {
        setSelectedYear(newSelectedValue);
    }

    const filteredExpenses = props.expenses.filter(expense => {
        return expense.date.getFullYear().toString() === selectedYear;
    })

    return (
        <div>

            <Card className='expenses'>
                <ExpenseFilter selected={selectedYear} expenseFilterChangeHandler={expenseFilterChangeHandler} />

                <ExpensesList items={filteredExpenses} />
            </Card>
        </div>
    );

}

export default Expenses;