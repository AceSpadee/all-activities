-- Write your Schema Here -- 
DROP DATABASE IF EXISTS registrar_db;
CREATE DATABASE registrar_db;

\c registrar_db;

CREATE TABLE customers (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(30),
  last_name VARCHAR(30)
);

CREATE TABLE customer_orders (
  id INTEGER PRIMARY KEY,
  course_title VARCHAR(30) NOT NULL,
  customer_id INTEGER,
  order_details TEXT,
  FOREIGN KEY (id)
  REFERENCES customers(id)
  ON DELETE SET NULL
);
