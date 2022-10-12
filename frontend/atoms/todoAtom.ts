import { atom } from "recoil";
import { Todo } from "../domain/entity/todo";

export default atom<Todo[]> ({
    key: "TodoList",
    default: []
});
