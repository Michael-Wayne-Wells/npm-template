import {User} from "./../src/calc.js";

describe('user', () => {

  test('users age on mercury', () => {
    let user = new User('mike', 32, 70, 4.16);
    expect(user.planetAge()).toEqual(133);
  })

  test('users age on venus', () => {
    let user = new User('mike', 32, 70, 1.61);
    expect(user.planetAge()).toEqual(51);
  })
  test('users age on mars ', () => {
    let user = new User('mike', 32, 70, .532);
    expect(user.planetAge()).toEqual(17);
  })
  test('users age on jupiter', () => {
    let user = new User('mike', 32, 70, .084);
    expect(user.planetAge()).toEqual(2);
  })
  test('users years left to live', () => {
    let user = new User('mike', 32, 70, 1);
    expect(user.deathClock()).toEqual(38);
  })
  test('users years left to live if older than death expectency', () => {
    let user = new User('mike', 34, 32, 1);
    expect(user.deathClock()).toEqual(2);
  })
})
