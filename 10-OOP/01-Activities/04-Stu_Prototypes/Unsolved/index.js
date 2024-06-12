// TODO: Constructor function for creating a BlogPost object.
// the BlogPost properties are authorName, title, text, and createdOn
// and includes a comments array and a method to print metadata.
function BlogPost(authorName, title, text, createdOn) {
  this.authorName = authorName;
  this.title = title;
  this.text = text;
  this.createdOn = createdOn;
  this.comments = [];
  this.printMetaData = function () {
    console.log(`Created by ${this.authorName} on ${this.createdOn}`);
  };
}

// TODO: Add a comment describing the purpose of `.prototype` in this method declaration
  // The .prototype property allows you to define methods that will be available on all instances
 // of the BlogPost object, rather than being created for each instance.

// constructor functions, as it allows those methods to be shared across all instances,
// conserving memory and maintaining a single reference to the method.

// adding the addcomment to each new object into the parent element
BlogPost.prototype.addComment = function(comment) {
  this.comments.push(comment);
};

const post = new BlogPost(
  'John Doe',
  'My Second Post',
  'Cats are super cute!',
  '12/16/2021'
);

post.addComment('Nice post, I like it!');

// TODO: it is the addcomment.    nice post i like it
console.log(post.comments);
