const fs = require('fs').promises;
const path = require('path');

const readAndWrite = async () => {
  try {
    const array = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'];
    const writeFiles = array.map((str, i) => fs.writeFile(path.resolve(`./file${i + 1}.txt`), str));
    await Promise.all(writeFiles);

    const files = ['file1.txt', 'file2.txt', 'file3.txt', 'file4.txt', 'file5.txt'];
    const readFiles = files.map((file) => fs.readFile(path.resolve(__dirname, file), 'utf-8'));
    const fileContent = await Promise.all(readFiles);
    const concatFilesContent = fileContent.join(' ');
    await fs.writeFile('./fileAll.txt', concatFilesContent);
  } catch (e) {
    console.error(`Erro ao ler o arquivo: ${e.message}`);
  }
};

readAndWrite();
