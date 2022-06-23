DROP TABLE IF EXISTS posts;

CREATE TABLE posts (
    id serial PRIMARY KEY,
    title VARCHAR(150) NOT NULL,
    author VARCHAR(100) NOT NULL,
    story VARCHAR(500) NOT NULL
);


INSERT INTO posts (title, author, story) 
VALUES 
('Title 1', 'Author 1', 'Story 3'),
('Title 2', 'Author 2', 'Story 2'),
('Title 3', 'Author 3', 'Story 3'),
('Title 4', 'Author 4', 'Story 4');

-- WITH HEROKU INSTALLED AND LOGGED IN FROM THE TERMINAL
-- Intialise a Heroku Database typing this command in the console:

-- cat initDb.sql | heroku pg:psql <database-name> --app <heroku project name>
