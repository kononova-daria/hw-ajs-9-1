import Daemon from '../daemon';
import Magician from '../magician';

test('Расчет атаки при distance > 0 и stoned = true', () => {
  const character = '12345';
  const type = 'Daemon';

  const daemon = new Daemon(character, type);

  daemon.attack = 100;
  daemon.distance = 2;
  daemon.stoned = true;

  const expected = 85;

  expect(daemon.attack).toBe(expected);
});

test('Расчет атаки при distance > 0 и stoned = false', () => {
  const character = '12345';
  const type = 'Daemon';

  const daemon = new Daemon(character, type);

  daemon.attack = 100;
  daemon.distance = 2;
  daemon.stoned = false;

  const expected = 90;

  expect(daemon.attack).toBe(expected);
});

test('Расчет атаки при distance = 0', () => {
  const character = '12345';
  const type = 'Magician';

  const magician = new Magician(character, type);

  magician.attack = 200;
  magician.distance = 0;
  magician.stoned = true;

  const expected = 200;

  expect(magician.attack).toBe(expected);
});

test('Расчет атаки при attack = 0', () => {
  const character = '12345';
  const type = 'Magician';

  const magician = new Magician(character, type);

  magician.attack = 0;
  magician.distance = 2;
  magician.stoned = true;

  const expected = 0;

  expect(magician.attack).toBe(expected);
});
