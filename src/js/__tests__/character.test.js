import Daemon from '../daemon';
import Magician from '../magician';

test('Ошибка при длине имени < 2', () => {
  function createCharacter() {
    const character = '1';
    const type = 'Daemon';

    return new Daemon(character, type);
  }

  expect(createCharacter).toThrowError('Недопустимая длина имени');
});

test('Ошибка при длине имени > 10', () => {
  function createCharacter() {
    const character = '01234567891011';
    const type = 'Daemon';

    return new Daemon(character, type);
  }

  expect(createCharacter).toThrowError('Недопустимая длина имени');
});

test('Ошибка при неправильно указанном типе', () => {
  function createCharacter() {
    const character = '12345';
    const type = 'Bowerman';

    return new Daemon(character, type);
  }

  expect(createCharacter).toThrowError('Тип указан неправильно');
});

test('Создание Magician', () => {
  const character = '12345';
  const type = 'Magician';

  const expected = {
    name: '12345',
    type: 'Magician',
    health: 100,
    level: 1,
  };

  const newCharacter = new Magician(character, type);

  expect(newCharacter).toEqual(expected);
});

test('Создание Daemon', () => {
  const character = '12345';
  const type = 'Daemon';

  const expected = {
    name: '12345',
    type: 'Daemon',
    health: 100,
    level: 1,
  };

  const newCharacter = new Daemon(character, type);

  expect(newCharacter).toEqual(expected);
});
