'use strict';

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('authors', [
      { name: 'Victor Hugo' },
      { name: 'Franz Kafka' },
      { name: 'Jack London' }
    ], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('authors', null, {});
  }
};
