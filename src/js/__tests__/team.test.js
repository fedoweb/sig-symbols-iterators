import Character from '../Character';
import Team from '../Team';

const team = new Team();
const char1 = new Character('Лилит', 'Daemon');
const char2 = new Character('Лучник', 'Bowman');
const char3 = new Character('Мамон', 'Daemon');

describe('testing iterator', () => {
  team.members.clear();
  team.addAll(char1, char2, char3);
  const iterator = team[Symbol.iterator]();

  test('should return char1', () => {
    expect(iterator.next().value).toEqual({
      "attack": 40,
      "defence": 10,
      "health": 50,
      "level": 1,
      "name": "Лилит",
      "type": "Daemon",
    }); 
  });

  test('should return char2', () => {
    expect(iterator.next().value).toEqual({
      "attack": 40,
      "defence": 10,
      "health": 50,
      "level": 1,
      "name": "Лучник",
      "type": "Bowman",
    }); 
  });

  test('should return char3', () => {
    expect(iterator.next().value).toEqual({
      "attack": 40,
      "defence": 10,
      "health": 50,
      "level": 1,
      "name": "Мамон",
      "type": "Daemon",
    }); 
  });

  test('should return undefined', () => {
    expect(iterator.next().value).toEqual(undefined); 
  });
});
