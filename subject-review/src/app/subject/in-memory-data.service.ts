import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const subjects = [
      { id: 31242, name: 'Advanced Internet Programming' },
      { id: 31282, name: 'Systems Testing and Quality Management' },
      { id: 31285, name: 'Mobile Applications Development' },
      { id: 41094, name: 'Software Engineering Studio 1B' },
      { id: 31266, name: 'Introduction to Information Systems' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' }
    ];
    return {subjects};
  }
}