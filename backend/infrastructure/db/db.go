package db

import (
	"github.com/jmoiron/sqlx"
)

type DB struct {
	SqlxDB *sqlx.DB
}

type Database interface {
	Open() *DB
}

func (db *DB) Close() {
	db.SqlxDB.Close()
}
