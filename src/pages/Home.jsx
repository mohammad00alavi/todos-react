import Input from "../components/Input";
import { useEffect, useContext } from "react";
import TodosContext from "../contexts/TodosContext";

export default function Home() {
  const { getTodos } = useContext(TodosContext);

  useEffect(() =>  {
    getTodos();
  }, [])

  return (
    <>
      <Input />
    </>
  )
}
