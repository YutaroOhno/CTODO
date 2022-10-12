import { Todo } from "../entity/todo";
import { TodoRepository } from "../interface/repository/TodoRepository";
import { TodoDriver } from "../interface/driver/TodoDriver";

export class TodoRepositoryImpl implements TodoRepository {
    private readonly todoDriver: TodoDriver;

    constructor(driver: TodoDriver) {
        this.todoDriver = driver;
    }

    async findAll(): Promise<Todo[] | null> {
        const res = await this.todoDriver.findAll();
        console.info(res)
        return res ? res : null;
    }

    async create(title: string, body: string): Promise<void> {
        const res = await this.todoDriver.create("hoge", "hogehgoe");
        console.info(res)
        return res;
    }
}
