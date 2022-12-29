import sequelize from 'sequelize';
import Author from './database/models/AuthorModel';
import Book from './database/models/BookModel';

(async () => {
  const data = await Author.findAll({
    include: {
      model: Book,
      attributes: [],
    },
    attributes: [
      ['name', 'author'], // ['column', 'alias']
      [sequelize.fn('COUNT', sequelize.col('books.id')), 'totalBooks'],
    ],
    group: 'authors.name',
    order: [
      [sequelize.literal('totalBooks'), 'DESC'], // ['column', 'direction']
      ['name', 'ASC']
    ],
    raw: true,
  });

  console.log(data);
  process.exit(0);
})();