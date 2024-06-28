DROP DATABASE IF EXISTS books_db;

-- TODO: What is the SQL code below doing?
-- its creating a database called books_db
CREATE DATABASE books_db;

-- TODO: What is the SQL code below doing?
--  its connecting to the database named books_db?
\c books_db;

-- TODO: What is the SQL code below doing?
-- its creating a table named biographies inside of books_db
CREATE TABLE biographies (

  -- TODO: What is the SQL code below doing?
  -- its creating a column inside biographies table named id. that value being stored has to be an integer and not null meaning 
  -- that it has to have a value
  id INTEGER NOT NULL,

  -- TODO: What is the SQL code below doing?
  -- its creating another column that is named name. its storing strings with a character limit of 100 and cant be null
  name VARCHAR(100) NOT NULL
);

