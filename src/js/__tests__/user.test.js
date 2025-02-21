import Character from '../Character';
import Team from '../Team';

const team = new Team();
const char1 = new Character('Лилит', 'Daemon');
const char2 = new Character('Лучник', 'Bowman');
const char3 = new Character('Мамон', 'Daemon');

describe('testing iterator', () => {
  team.members.clear();
  team.addAll(char1, char2, char3);

  test('should return char1', () => {
    let result;
    for (item of team) {
       result = item;
    }
    expect(result).toEqual({});
  })


})
