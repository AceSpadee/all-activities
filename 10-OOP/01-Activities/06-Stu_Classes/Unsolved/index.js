// TODO: Create a class constructor named BlogPost that takes in 'authorName', 'title', 'text', and 'createdOn'.
    class BlogPost{
        constructor (authorName, title, text, createdOn) {
            this.authorName = authorName;
            this.title = title;
            this.text = text;
            this.createdOn = createdOn;
            this.comments = [];
        }

        printMetaData() {
            console.log(`Created by ${this.authorName} on ${this.createdOn}`)
        }

        addComment(comment) {
            this.comments.push(comment)
        }
    }

    class Comment{
        constructor (authorName, text, createdOn) {
            this.authorName = authorName;
            this.text = text;
            this.createdOn = createdOn;
        }

        printMetaData() {
            console.log(`Created by ${this.authorName} on ${this.createdOn} with ${this.text}`)
        }

    }

    const words = new Comment('john', 'wick', '11/25/2018');
    const post = new BlogPost('john', 'wwe', 'allstar', '11/25/2018');

    post.addComment(words);

    post.printMetaData();
    words.printMetaData();

// TODO: Give BlogPost a property called 'comments' that is set to an empty array.

// TODO: Give BlogPost a method called printMetaData() that logs a message saying 'Created by (authorName) on (createdOn)'.

// TODO: Give Blog Post a method called addComment() that takes in a comment and adds it to the comments array.

// TODO: Create a class constructor called Comment that takes in 'authorName', 'text', and 'createdOn'.

// TODO: Give Comment a method called printMetaData() that logs a message saying 'Created by (authorName) on (createdOn) with (text)'.

// TODO: Create a new object using the Comment class constructor.

// TODO: Create a new object using the BlogPost class constructor.

// TODO: Use the addComment() method on your newly created BlogPost to add your newly created Comment to its comments array.

// TODO: Print the meta data for both the BlogPost and the Comment to the console.
