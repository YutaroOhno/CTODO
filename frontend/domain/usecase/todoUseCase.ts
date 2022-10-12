import { Todo } from "../entity/todo";
import { TodoRepository } from "../interface/repository/TodoRepository";
import { TodoUseCase } from "../interface/usecase/todoUsecase";

export class TodoUseCaseImpl implements TodoUseCase {
    readonly todoRepository: TodoRepository;

    constructor(repository: TodoRepository) {
        this.todoRepository = repository;
    }

    async findAll(): Promise<Todo[] | null> {
        return this.todoRepository.findAll();
    }

    async create(title: string, body: string): Promise<void> {
        await this.todoRepository.create(title, body);
    }
}
