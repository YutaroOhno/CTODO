package todos

import (
	"fmt"

	"todo/infrastructure/db"
	"todo/models"
)

type TodoUsecase struct {
	DB *db.DB
}

func NewTodoUsecase(db *db.DB) *TodoUsecase {
	return &TodoUsecase{
		DB: db,
	}
}

func (usecase *TodoUsecase) GetTodos() ([]*models.Todo, error) {
	var todos []*models.Todo

	err := usecase.DB.SqlxDB.Select(&todos, "select id, title, body from todos")
	if err != nil {
		panic(err)
	}

	return todos, nil
}

func (usecase *TodoUsecase) CreateTodo(input models.NewTodo) (*models.Todo, error) {
	var todo models.Todo

	// insertId取得
	// lastInsertId := 0
	// err := usecase.DB.SqlxDB.QueryRow("insert into todos(title, body) values($1, $2) RETURNING id", input.Title, input.Body).Scan(&lastInsertId)
	// fmt.Println(lastInsertId)
	// if err != nil {
	// 	panic(err)
	// }

	err := usecase.DB.SqlxDB.QueryRow("insert into todos(title, body) values($1, $2) RETURNING id, title, body", input.Title, input.Body).Scan(&todo.ID, &todo.Title, &todo.Body)

	// id, err := r.LastInsertId()
	if err != nil {
		panic(err)
	}

	// for rows.Next() {
	// 	err = rows.StructScan(&todo)
	// 	if err != nil {
	// 		log.Fatal(err)
	// 	}
	// 	fmt.Println(todo)
	// }

	// fmt.Println("todooooooooooooooooo")
	fmt.Println(todo)
	return &todo, nil
}
