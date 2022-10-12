package todos

import (
	"todo/models"
)

type TodoUsecaseInterface interface {
	GetTodos() ([]*models.Todo, error)
	CreateTodo(input models.NewTodo) (*models.Todo, error)
}
