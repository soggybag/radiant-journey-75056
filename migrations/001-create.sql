--------------------------------------------------------------------------------
-- Up
--------------------------------------------------------------------------------

CREATE TABLE User (name TEXT, login TEXT, password TEXT);

INSERT INTO User (name, login, password) VALUES ('Admin', 'admin@site.com', 'mmmmm6');
INSERT INTO User (name, login, password) VALUES ('Other User', 'user@site.com', 'somepassword');
INSERT INTO User (name, login, password) VALUES ("Hacker", 'login@hacker.com', 'Hacker Honey');

CREATE TABLE Post (title TEXT, body TEXT, claps NUMBER);

INSERT INTO Post (title, body, claps) VALUES ('A post title!', 'This is a post that is <strong>cool</strong>!', 3);

--------------------------------------------------------------------------------
-- Down
--------------------------------------------------------------------------------

DROP TABLE User;
DROP TABLE Post;
