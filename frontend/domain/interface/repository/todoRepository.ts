import { Todo } from "../../entity/todo";

export interface TodoRepository {
    findAll(): Promise<Todo[] | null>;
    create(title: string, body: string): Promise<void>;
}
