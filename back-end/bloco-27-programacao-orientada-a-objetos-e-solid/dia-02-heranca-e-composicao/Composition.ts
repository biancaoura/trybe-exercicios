interface Logger {
  log(param: string): void;
}

class ConsoleLogger implements Logger {
  public log(param: string): void {
      console.log('ConsoleLogger', param);
  }
}

class ConsoleLogger2 implements Logger {
  public log(param: string): void {
    console.log('ConsoleLogger2', param);
  }
}

interface Database {
  logger: Logger;

  save(key: string, value: string): void;
}

class ExampleDatabase implements Database {
  constructor(public logger: Logger = new ConsoleLogger()) {}

  save(key: string, value: string): void {
    this.logger.log(`key: ${key}, value: ${value}`);
  }
}

const log1 = new ConsoleLogger();
const log2 = new ConsoleLogger2();

const db1 = new ExampleDatabase(log1);
const db2 = new ExampleDatabase(log2);
const db3 = new ExampleDatabase();

db1.save('key1', 'value1');
db2.save('key2', 'value2');
db3.save('key3', 'value3');