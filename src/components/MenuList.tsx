// this has to be react as its inside react

export default function MenuList() {
  return (
    <ul>
      <li key="directions"><a href="/directions">Directions</a></li>
      <li key="information"><a href="/information">Information</a></li>
      <li key="see"><a href="/see-and-do">Activities</a></li>
      <li key="departure"><a href="/departure">Departure</a></li>
    </ul>
  );
}