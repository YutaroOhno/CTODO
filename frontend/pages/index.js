import { todoUseCase } from "../domain/usecase";
import { useTodo } from "../hooks/useTodo";
import todoListState from "../atoms/todoAtom";
import { useRecoilState } from "recoil";

export default function Home() {
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const usecase = useTodo(todoUseCase)

  const fetch =() => {
    return usecase.findAll()
  }

  const create =() => {
    return usecase.create()
  }

  return (
    <div>
        <button onClick={fetch}>fetch</button>
        <button onClick={create}>create</button>
        {todoList.map(todo => {
          return (
            <p key={todo.id}>{todo.title}</p>)
        })}
    </div>
  )
}
