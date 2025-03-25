class Logger {
  private static instance: Logger;

  private constructor() {}

  public static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }

  public log(message: string): void {
    console.log(`[${new Date().toISOString()}] ${message}`);
  }
}

class Users {
  private name: string;
  private logger: Logger = Logger.getInstance();

  constructor(name: string) {
    this.name = name;
    this.logger.log(
      `Een nieuwe gebruiker met de naam ${this.name} is aangemaakt.`
    );
  }

  public setName(newName: string): void {
    const oldName = this.name;
    this.name = newName;
    this.logger.log(
      `De gebruikersnaam is veranderd van ${oldName} naar ${this.name}.`
    );
  }
}

const users1 = new Users("John Doe");
users1.setName("Jane Doe");

const users2 = new Users("Randi Moran");
users1.setName("Peyin Moran");
users2.setName("Johnny Blade");
