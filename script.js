let people = [
    {
      name: "Malika",
      budget: 20000,
      rent: 12,
      expenses: [
        {
          total: 2000,
          title: "sousages",
        },
        {
          total: 1200,
          title: "mobile phone",
        },
        {
          total: 3000,
          title: "car",
        },
      ],
    },
    {
      name: "Diyor from 611 gr",
      budget: 20000,
      rent: 12,
      expenses: [
        {
          total: 1500,
          title: "sousages",
        },
        {
          total: 2200,
          title: "sousages width ketchup",
        },
        {
          total: 3500,
          title: "sousages",
        },
      ],
    },
    {
      name: "Aziz",
      budget: 20200,
      rent: 12,
      expenses: [
        {
          total: 100,
          title: "girls",
        },
        {
          total: 4200,
          title: "girls",
        },
        {
          total: 300,
          title: "girls",
        },
      ],
    },
    {
      name: "Amir",
      budget: 27000,
      rent: 12,
      expenses: [
        {
          total: 2000,
          title: "study",
        },
        {
          total: 1000,
          title: "games",
        },
        {
          total: 5000,
          title: "clothes",
        },
      ],
    },
    {
      name: "Maxmudbek",
      budget: 15000,
      rent: 12,
      expenses: [
        {
          total: 1111,
          title: "sigarets",
        },
        {
          total: 1900,
          title: "chilim",
        },
        {
          total: 6000,
          title: "anasha",
        },
      ],
    },
    {
      name: "Samir",
      budget: 12000,
      rent: 12,
      expenses: [
        {
          total: 1200,
          title: "food",
        },
        {
          total: 990,
          title: "car",
        },
        {
          total: 7000,
          title: "protain",
        },
      ],
    },
    {
      name: "Badriddin",
      budget: 2000,
      rent: 12,
      expenses: [
        {
          total: 1000,
          title: "taxi",
        },
        {
          total: 8000,
          title: "rich girls",
        },
        {
          total: 700,
          title: "on himself",
        },
      ],
    },
  ];
  
  let cool = [];
  let bad = [];
  
  
  for (let person of people) {
    person.totalExpenses = 0;
  
    for (let item of person.expenses) {
      person.totalExpenses += item.total;
    }
  
    person.totalMoney = person.budget - person.totalExpenses;
  
    person.totalMoney =
      person.totalMoney - (person.rent * person.totalMoney) / 100;
  
    person.totalMoney > 0
      ? cool.push(person.totalMoney)
      : bad.push(person.totalMoney);
  
    person.totalMoney > 0
      ? document.write(
          `<br>+name:${person.name}<br> money:${person.totalMoney}<br>`
        )
      : document.write(
          `<br><b>-name:${person.name}<b><br>monye:${person.totalMoney}<br>`
        );
  }