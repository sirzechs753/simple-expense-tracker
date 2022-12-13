import Card from './Card';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';

function Expenses(props) {

    return (
      <Card className="expenses">
        {props.expenses.map((element) => {
          return (
            <ExpenseItem
              title={element.title}
              amount={element.amount}
              date={element.date}
            ></ExpenseItem>
          );
        })}
      </Card>
    );
}

export default Expenses;