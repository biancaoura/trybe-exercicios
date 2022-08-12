const data = require('../data/zoo_data');

const { species, hours } = data;

const checkDay = (day) => {
  const opening = (openDay) => Object.values(hours[openDay])[0];
  const closing = (openDay) => Object.values(hours[openDay])[1];
  if (opening(day) === 0) return 'CLOSED';
  return `Open from ${opening(day)}am until ${closing(day)}pm`;
};

const animals = (day) => {
  if (checkDay(day) === 'CLOSED') return 'The zoo will be closed!';
  return species.filter((el) => el.availability.includes(day)).map((el) => el.name);
};

const noParameter = () => ({
  Tuesday: { officeHour: checkDay('Tuesday'), exhibition: animals('Tuesday') },
  Wednesday: { officeHour: checkDay('Wednesday'), exhibition: animals('Wednesday') },
  Thursday: { officeHour: checkDay('Thursday'), exhibition: animals('Thursday') },
  Friday: { officeHour: checkDay('Friday'), exhibition: animals('Friday') },
  Saturday: { officeHour: checkDay('Saturday'), exhibition: animals('Saturday') },
  Sunday: { officeHour: checkDay('Sunday'), exhibition: animals('Sunday') },
  Monday: { officeHour: checkDay('Monday'), exhibition: animals('Monday') },
});

const daySchedule = (day) => ({ [day]: { officeHour: checkDay(day), exhibition: animals(day) } });

const days = Object.keys(hours);
const allAnimals = species.map((el) => el.name);

function getSchedule(scheduleTarget) {
  if (!scheduleTarget) return noParameter();
  if (!days.includes(scheduleTarget) && !allAnimals.includes(scheduleTarget)) return noParameter();
  if (days.includes(scheduleTarget)) return daySchedule(scheduleTarget);
  return species.find((el) => el.name === scheduleTarget).availability;
}

module.exports = getSchedule;
