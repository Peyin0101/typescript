interface Printable {
  print(): void;
}

class Doc implements Printable {
  constructor(private content: string) {}

  print(): void {
    console.log(this.content);
  }
}

const myDocument = new Doc("Dit is een document om af te drukken.");
myDocument.print();
