-- TODO: What is the SQL code below doing?
-- it is inserting data into the biographies table then its listing all the information stored
-- inside the biographis table and displaying contents of the table
INSERT INTO biographies (id, name)
VALUES
    ( 001, 'Diary of Anne Frank'),
    ( 002, 'Frida: A Biography of Frida Kahlo'),
    ( 003, 'Long Walk to Freedom');

SELECT * FROM biographies;
