import Team from '../app';
import Character from '../Character';

test('Добавление игрока', () => {
  const character = new Character('tor', 'Bowerman');
  const team = new Team();
  team.add(character);
  const newContainer = new Set();
  newContainer.add({ name: 'tor', type: 'Bowerman' });
  expect(team.members).toEqual(newContainer);
});

test('Добавление существующего игрока', () => {
  const character = new Character('tor', 'Bowerman');
  const team = new Team();
  team.add(character);
  expect(() => {
    team.add(character);
  }).toThrow();
});

test('Проверка задвоения игроков', () => {
  const character1 = new Character('tor', 'Bowerman');
  const character2 = new Character('Roman', 'Undead');
  const character3 = new Character('vova', 'Zombie');
  const team = new Team();
  team.addAll(character1, character2, character3, character2);
  expect(team.members.size).toBe(3);
});

test('проверка Set в массивe', () => {
  const character1 = new Character('tor', 'Bowerman');
  const character2 = new Character('Roman', 'Undead');
  const team = new Team();
  team.addAll(character1, character2);
  team.toArray();
  expect(team.members).toEqual([{ name: 'tor', type: 'Bowerman' }, { name: 'Roman', type: 'Undead' }]);
});
