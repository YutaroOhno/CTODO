import { Todo } from "../../entity/todo";

export interface TodoUseCase {
    findAll(): Promise<Todo[] | null>;
    create(title: string, body: string): Promise<void>;
}
