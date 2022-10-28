import StaffService from '../src/services/staff_service.js';
import Staff from "../src/models/staff.js";

/*
Write unit tests (JEST) for HR service methods
*/

test('add staff and get no errros', async () => {
  const firstName = 'Angela';
  const lastName = 'Elmond';
  const age = 27;
  const newStaff = await StaffService.addStaff({
    firstName: firstName,
    lastName: lastName,
    age: age
  });
  expect(newStaff instanceof Staff).toBe(true);
  expect(newStaff.firstName).toBe(firstName);
  expect(newStaff.lastName).toBe(lastName);
  expect(newStaff.age).toBe(age);
});

test('check finding of staff', async () => {
  const firstName = 'Anna';
  const lastName = 'Smith';
  const age = 25;
  const newStaff = await StaffService.addStaff({
    firstName: firstName,
    lastName: lastName,
    age: age
  });
  const findStaff = await StaffService.findBy({
    firstName: firstName,
    lastName: lastName,
    age: age
  })
  expect(newStaff.firstName).toBe(findStaff.firstName);
  expect(newStaff.lastName).toBe(findStaff.lastName);
  expect(newStaff.age).toBe(findStaff.age);


});

test('check remove staff', async () => {
  const firstName = 'Toondra';
  const lastName = 'Malik';
  const age = 22;
  const newStaff = await StaffService.addStaff({
    firstName: firstName,
    lastName: lastName,
    age: age
  });
  await StaffService.removeStaff(newStaff);

  const findRemovedStaff = await StaffService.findBy({
    firstName: firstName,
    lastName: lastName,
    age: age
  });

  expect(findRemovedStaff).toBe(null);

});