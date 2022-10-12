package db

import (
	_ "github.com/jinzhu/gorm/dialects/postgres"
	"github.com/jmoiron/sqlx"
	// "os"
)

type Postgres struct {
	sqlx *sqlx.DB
}

func NewPostgres() *Postgres {
	return &Postgres{}
}

func (postgres *Postgres) Open() *DB {

	db, err := sqlx.Open("postgres", "host=db port=5432 user=hogehoge password=hogehoge dbname=todo_graphql_api_development sslmode=disable")
	if err != nil {
		panic(err.Error())
	}

	return &DB{SqlxDB: db}
}
