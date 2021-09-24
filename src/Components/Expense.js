import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./NewExpense/ExpensesFilter";
import Card from "./Card";
import "./Expense.css";
import ExpenseChart from "./ExpenseChart";

function Expense(props) {
  const [enteredYear, setEnteredYear] = useState("2021");

  const filterChangeHandler = (selectedYear) => {
    setEnteredYear(selectedYear);
  };

  const filteredExpense = props.items.filter(expense => {
      let filterYear = expense.date.getFullYear().toString() === enteredYear;
      return filterYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={enteredYear}
          onChangeFilter={filterChangeHandler}
        />

        <ExpenseChart expense={filteredExpense} />

        {filteredExpense.length === 0 ? <h2>No expense found.</h2> : filteredExpense.map((expense) => 
        (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        )) }

        {/* {filteredExpense.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))} */}

        {/* out the each component staticly */}
        {/* <ExpenseItem
                title={props.items[0].title}
                amount={props.items[0].amount}
                date={props.items[0].date}
            />

            <ExpenseItem
                title={props.items[1].title}
                amount={props.items[1].amount}
                date={props.items[1].date}
            />

            <ExpenseItem
                title={props.items[2].title}
                amount={props.items[2].amount}
                date={props.items[2].date}
            />
            
            <ExpenseItem
                title={props.items[3].title}
                amount={props.items[3].amount}
                date={props.items[3].date}
            /> */}
      </Card>
    </div>
  );
}

export default Expense;
