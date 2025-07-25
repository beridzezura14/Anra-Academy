const habit = [
  "Python",
  "HTML",
  "CSS & SCSS",
  "Javascript"
];

function Habits() {
  return (
    <div className="container">
      {habit.map((item, i) => (
        <div
          key={i}
          className="child"
        >
          {item}
        </div>
      ))}
    </div>
  );
}

export default Habits;
