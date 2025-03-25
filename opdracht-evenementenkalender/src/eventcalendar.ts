interface CalendarEventInterface {
  id: number;
  title: string;
  date: string;
  description: string;
  attendees: number;
}

type CalendarEventAlias = CalendarEventInterface[];

let nextId: number = 0;
const events: CalendarEventAlias = [];

function addEvent(
  title: string,
  date: string,
  description: string,
  attendees: number
): CalendarEventInterface {
  const event: CalendarEventInterface = {
    id: ++nextId,
    title,
    date,
    description,
    attendees,
  };
  events.push(event);
  return event;
}

function removeEvent(id: number): boolean {
  const index = events.findIndex((event) => event.id === id);
  if (index === -1) {
    return false;
  }
  events.splice(index, 1);
  return true;
}

function findEventByTitle(title: string): CalendarEventInterface | undefined {
  return events.find((event) =>
    event.title.toLowerCase().includes(title.toLowerCase())
  );
}

function searchEvents(keyword: string): CalendarEventAlias {
  let lowerKeyword = keyword.toLowerCase();
  return events.filter(
    (event) =>
      event.title.toLowerCase().includes(lowerKeyword) ||
      event.description.toLowerCase().includes(lowerKeyword)
  );
}

addEvent(
  "TypeScript Workshop",
  "2034-03-15",
  "Een diepgaande workshop over TypeScript.",
  100
);
addEvent(
  "JavaScript Conferentie",
  "2034-04-20",
  "Internationale conferentie over JavaScript.",
  200
);

const foundEvent = findEventByTitle("Workshop");
if (foundEvent) {
  console.log("Evenement met titel 'Workshop':", foundEvent);
}

const workshopEvent = searchEvents("workshop");
console.log("\nZoekresultaten voor 'workshop':");
workshopEvent.forEach((event) => console.log(event.title));

const typescriptEvent = searchEvents("TypeScript");
console.log("\nZoekresultaten voor 'TypeScript':");
typescriptEvent.forEach((event) => console.log(event.title));

const overEvent = searchEvents("over");
console.log("\nZoekresultaten voor 'over':");
overEvent.forEach((event) => console.log(event.title));

console.log("\nEvenement 1 verwijderd:", removeEvent(1));

console.log("\nHuidige Evenementen:", events);
