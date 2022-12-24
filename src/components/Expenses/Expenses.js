import React, { useState } from "react";

import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";

const Expenses = (props) => {
	const [filteredYear, setFilteredYear] = useState("Select Year");

	const expenseFilterChangeHandler = (selectedFilter) => {
		setFilteredYear(selectedFilter);
	};

	const filteredExpenses = props.expenses.filter((expense) => {
		if (filteredYear === "Select Year") return true;
		return expense.date.getFullYear().toString() === filteredYear;
	});

	return (
		<Card className="expenses">
			<ExpensesFilter
				selected={filteredYear}
				onChangeFilter={expenseFilterChangeHandler}
			/>
            <ExpensesChart expenses={filteredExpenses} />
			<ExpensesList items={filteredExpenses} />
		</Card>
	);
};

export default Expenses;
