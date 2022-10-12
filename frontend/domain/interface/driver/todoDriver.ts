import { Todo } from "../../entity/todo";

// TODO: 本当は graphqlの型指定したい。
export interface TodoDriver {
    findAll(): Promise<Todo[] | any>;
    create(title: string, body: string): Promise<void>;
}


