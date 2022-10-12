import { TodoUseCase } from "../domain/interface/usecase/todoUsecase";
import { useRecoilState } from "recoil";
import todoListState from "../atoms/todoAtom";

export function useTodo(useCase: TodoUseCase) {
    const [todoList, setTodoList] = useRecoilState(todoListState);

    const findAll = async (): Promise<void> => {
        const todos = await useCase.findAll();
        setTodoList(todos.todos)
    };

    const create = async (title: string, body: string): Promise<void> => {
        await useCase.create(title, body)
    }

    return { findAll, create };
}
