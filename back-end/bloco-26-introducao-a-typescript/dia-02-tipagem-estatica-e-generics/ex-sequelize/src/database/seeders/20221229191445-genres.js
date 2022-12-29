'use strict';

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('genres', [
      { genre: 'Epic' },
      { genre: 'Philosophical fiction' },
      { genre: 'Adventure' }
    ], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('genres', null, {});
  }
};
