export default function getAge(birthdate) {
  const contactsDate = new Date(birthdate);

  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth() + 1;
  const currentDay = new Date().getDate();
  let age = currentYear - contactsDate.getFullYear();
  if (
    currentMonth < contactsDate.getMonth() + 1 ||
    (currentMonth === contactsDate.getMonth() + 1 &&
      currentDay < contactsDate.getDate())
  ) {
    age--;
  }
  return age;
}
