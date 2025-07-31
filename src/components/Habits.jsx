const habit = [
  {
    head: "python",
    description: [
      "ცვლადები და მონაცემთა ტიპები (int, float, str, bool)",
      "input ფუნქცია და მომხმარებლისგან მონაცემის მიღება",
      "ოპერატორები და ლოგიკა (if, else, and, or)",
      "ციკლები (for, while)",
      "სიები",
      "ძირითადი მეთოდები",
      "ფუნქციები"

    ]
  },
  {
    head: "html",
    description: [
      "სტრუქტურა: html, head, body",
      "ტექსტის ელემენტები (h1-h6, p, span)",
      "ლინკები, ღილაკები და სურათები",
      "სიები (ul, ol, li)",
      "ფორმები (input, textarea, button)",
      "სემანტიკური თეგები (header, footer, section)",
      "iframe, video, audio — მედია ელემენტები"
    ]
  },
  {
    head: "CSS & SCSS",
    description: [
      "selector, class, id",
      "სტილები: ფერები, ზომები, ფონტები",
      "ჰოვერები და ტრანზიშენები",
      "CSS Position (relative, absolute, fixed)",
      "Flexbox და Grid",
      "Responsive დიზაინი (media queries)",
      "SCSS და მისი წერის სინტაქსი",
    ]
  },
    {
    head: "Javascript",
    description: [
      "ცვლადები (var, let, const)",
      "ტიპები და ოპერატორები",
      "ფუნქციები და arrow functions",
      "DOM-ის მანიპულაცია",
      "ივენთების დამუშავება (click, input)",
      "მასივები და მეთოდები (map, filter, forEach)",
    ]
  },
];

function Habits() {
  return (
    <div className="container max-w-full">

      {habit.map((item, i) => (
        <div
          key={i}
          className="child px-[5%] py-[4rem] w-full even:bg-[#2B384C] text-[#2B384C] even:text-[#F3ECE2] flex justify-center items-start gap-4 flex-col even:justify-end even:items-end even:text-right relative"
        >
          <h3 className="text-5xl font-poppins uppercase">{item.head}</h3>
          <div className="flex flex-col gap-2">
          {
            i % 2 === 0 ?
              item.description.map((items, i) => (
                <div className="text-[17px] font-georgian" key={i}>
                  <span>&#10003;</span> -  {items}
                </div>
              ))
            :
              item.description.map((items, i) => (
                <div className="text-[17px] font-georgian" key={i}>
                  {items} <span> - &#10003;</span>
                </div>
            ))

          }
          </div>

          {/* <div className="w-full h-full">
            {
              i % 2 === 0 ? 
              <div className="absolute -right-[200px] -bottom-[190px] h-96 w-96 bg-[#643434] rounded-full opacity-[0.3]" ></div>
              :
              <div> dd </div>
            }
          </div> */}
        </div>
      ))}
    </div>
  );
}

export default Habits;
