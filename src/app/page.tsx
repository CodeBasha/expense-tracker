import Image from "next/image";
import Header from "./components/Header";
import NewExpenseForm from "./components/NewExpenseForm";
import ExpensesShortList from "./components/ExpensesShortList";

const Home = () => {
  return (
    <>
      <Header />
      <NewExpenseForm />
      <ExpensesShortList />
    </>
  );
};
export default Home;
