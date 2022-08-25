import React, { useState } from "react";

import ExpensesFilter from "./ExpenseFilter";
import ExpensesChart from "./ExpensesChart";
import ExpenseList from "./ExpenseList";
import Card from "../UI//Card";
import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2022");
  const old_expenses = props.expenses;

  const expenses = old_expenses.filter((expense) => {
    // console.log("From Array" + expense.date.getFullYear().toString());
    // console.log("From Filter" + filteredYear);
    return expense.date.getFullYear().toString() === filteredYear;
  });

  const getInputtedYear = (year) => {
    // console.log("In Expense.Js");
    // console.log(year);
    setFilteredYear(year);
  };
  // console.log(filteredYear);
  // console.log(old_expenses);
  // console.log(expenses);

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selectedYear={filteredYear}
          onSelectYear={getInputtedYear}
        />
        <ExpensesChart expenses={expenses} />
        <ExpenseList expenses={expenses} />
      </Card>
    </div>
  );
};

export default Expenses;
