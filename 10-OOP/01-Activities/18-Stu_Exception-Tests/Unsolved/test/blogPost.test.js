const BlogPost = require('../blogPost.js');

describe('BlogPost', () => {
  // TODO: Write a test that verifies that BlogPost throws an error when the authorName provided is less than 2 characters long.
  describe('BlogPost instantiation', () => {
    it('should throw an error when authorName is less than 2 characters long', () => {
      const shortAuthor = a;
      expect(() => blogPost = new BlogPost(shortAuthor)).toThrow(Error);
    });

    it('should throw an error when authorName is less than 2 characters long', () => {
      const shortAuthor = 'mewhaw!';
      expect(() => blogPost = new BlogPost(shortAuthor)).toThrow(Error);
    });


  });
  // TODO: Write a test that verifies that BlogPost throws an error when the authorName provided does not only contain uppercase, lowercase, numbers, dashes, and underscores.
});
