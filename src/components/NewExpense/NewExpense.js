import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
	const [showExpenseForm, setShowExpenseForm] = useState(false);

	const toggleShowExpenseFormHandler = () => {
		setShowExpenseForm((prevState) => {
			return prevState ? false : true;
		});
	};

	const saveExpenseDataHandler = (enteredExpenseData) => {
		const expenseData = {
			...enteredExpenseData,
			id: Math.random().toString(),
		};
		props.onAddExpense(expenseData);
	};

	return (
		<div className="new-expense">
			{!showExpenseForm && (
				<button onClick={toggleShowExpenseFormHandler}>Add New Expenses</button>
			)}
			{showExpenseForm && (
				<ExpenseForm
					onSaveExpenseData={saveExpenseDataHandler}
					onCancel={toggleShowExpenseFormHandler}
				/>
			)}
		</div>
	);
};

export default NewExpense;
