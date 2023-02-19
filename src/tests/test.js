import characterStatus from '../index';

test('check healthy', () => {
  const character = { name: 'Маг', health: 90 };
  const varHealth = characterStatus(character.health);
  expect(varHealth).toBe('healthy');
});

test('check wounded', () => {
  const character = { name: 'Маг', health: 16 };
  const varHealth = characterStatus(character.health);
  expect(varHealth).toBe('wounded');
});

test('check critical', () => {
  const character = { name: 'Маг', health: 0 };
  const varHealth = characterStatus(character.health);
  expect(varHealth).toBe('critical');
});

test('empty argument', () => {
  const character = {};
  const varCharactor = characterStatus(character);
  expect(varCharactor).toBeFalsy();
});