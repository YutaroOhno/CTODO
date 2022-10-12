import { TodoDriver } from "../interface/driver/TodoDriver";
import { client } from "../../infrastructure/http/apollo";
import { query, mutation } from "../../apollo/todo";

export class TodoDriverImpl implements TodoDriver {

    // constructorでclient入れるか

    async findAll(){
        return client.query({ query }).then((res) => {
                return res.data
            }).catch(err => {
                console.error(err)
                return err
            })
    }

    async create(title: string, body: string): Promise<void> {
          return client.mutate({ mutation }).then((res) => {
            return res
        }).catch(err => {
            console.error(err)
            return err
        })
    }
}
