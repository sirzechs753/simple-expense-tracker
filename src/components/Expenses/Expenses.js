import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';

const Expenses = (props) => {

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