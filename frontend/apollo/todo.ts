import { gql } from '@apollo/client';

export const query = gql`
     query Todo {
         todos {
             id
             title
             body
         }
     }
 `
// 一旦直書き
export const mutation = gql`
    mutation {
        createTodo(input: { title: "todo", body: "body" }) {
            id
            title
            body
        }
    }
 `
