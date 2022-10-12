import { TodoRepositoryImpl } from "../repository/todoRepository";
import { TodoDriverImpl } from "../driver/todoDriver";
import { TodoUseCaseImpl } from "./todoUseCase";

const todoRepository = new TodoRepositoryImpl(new TodoDriverImpl());

export const todoUseCase = new TodoUseCaseImpl(todoRepository);
