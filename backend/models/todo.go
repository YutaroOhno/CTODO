package models

type NewTodo struct {
	Title string `json:"title"`
	Body  string `json:"body"`
}

type Todo struct {
	ID    int    `json:"id"`
	Title string `json:"title"`
	Body  string `json:"body"`
}
