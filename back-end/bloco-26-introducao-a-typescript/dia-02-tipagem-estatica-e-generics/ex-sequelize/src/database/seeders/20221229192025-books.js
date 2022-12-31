'use strict';

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('books', [
      {
        title: 'Les Misérables',
        author_id: 1,
        genre_id: 1
      },
      {
        title: 'The Trial',
        author_id: 2,
        genre_id: 2
      },
      {
        title: 'The Metamorphosis',
        author_id: 2,
        genre_id: 2
      },
      {
        title: 'The Call of the Wild',
        author_id: 3,
        genre_id: 3
      },
      {
        title: 'White Fang',
        author_id: 3,
        genre_id: 3
      }
    ], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('books', null, {});
  }
};
