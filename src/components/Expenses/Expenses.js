import { useState } from 'react/cjs/react.development';
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import './Expenses.css'
import Card from '../UI/Card';

const Expenses = props => {
    const [selectedYear, setSelectedYear] = useState('');

    const expenseFilterChangeHandler = (newSelectedValue) => {
        setSelectedYear(newSelectedValue);
    }

    return (
        <div>

            <Card className='expenses'>
                <ExpenseFilter selected={selectedYear} expenseFilterChangeHandler={expenseFilterChangeHandler} />

                {props.expenses.map((expense) => (
                    <ExpenseItem
                        key={expense.id}
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}
                    />
                ))}
            </Card>
        </div>
    );

}

export default Expenses;