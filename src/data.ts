type Product = {
  category: string;
  items: {
    id: number;
    name: string;
    price: number;
    desc?: string;
    img?: string;
    options?: { title: string; additionalPrice: number }[];
  }[];
}[];

type SingleProduct = {
  category: string;
  items: {
    id: number;
    name: string;
    price: number;
    desc?: string;
    img?: string;
    options?: { title: string; additionalPrice: number }[];
  }[];
};

type Item = {
  id: number;
  name: string;
  price: number;
  desc?: string;
  img?: string;
  options?: { title: string; additionalPrice: number }[];
}[];

export const product = {
  id: 1,
  name: "FRIED CALAMARI",
  desc: "Served with our tomato sauce",
  img: "https://images.pexels.com/photos/15801007/pexels-photo-15801007/free-photo-of-crispy-fried-calamari-and-sauce.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  price: 11.95,
  options: [
    {
      title: "Small",
      additionalPrice: 0,
    },
    {
      title: "Medium",
      additionalPrice: 4,
    },
    {
      title: "Large",
      additionalPrice: 6,
    },
  ],
};

export const menu: Product = [
  {
    category: "APPETIZERS",
    items: [
      {
        id: 1,
        name: "FRIED CALAMARI",
        desc: "Served with our tomato sauce",
        img: "https://images.pexels.com/photos/15801007/pexels-photo-15801007/free-photo-of-crispy-fried-calamari-and-sauce.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        price: 11.95,
        options: [
          {
            title: "Small",
            additionalPrice: 0,
          },
          {
            title: "Medium",
            additionalPrice: 4,
          },
          {
            title: "Large",
            additionalPrice: 6,
          },
        ],
      },
      {
        id: 2,
        name: "ITALIAN FRIES",
        desc: "Our fabulous fries topped with special seasonings",
        img: "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        price: 11.95,
        options: [
          {
            title: "Small",
            additionalPrice: 0,
          },
          {
            title: "Medium",
            additionalPrice: 4,
          },
          {
            title: "Large",
            additionalPrice: 6,
          },
        ],
      },
      {
        id: 3,
        name: "BUFFALO WINGS",
        desc: "plain, mild, hot, garlic parmesan, calypso or Jack Daniels BBQ sauce",
        img: "https://images.pexels.com/photos/11299734/pexels-photo-11299734.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        price: 15.95,
        options: [
          {
            title: "Small",
            additionalPrice: 0,
          },
          {
            title: "Medium",
            additionalPrice: 4,
          },
          {
            title: "Large",
            additionalPrice: 6,
          },
        ],
      },
      {
        id: 4,
        name: "CHICKEN FINGERS",
        desc: "lightly breaded breast strips... plain, mild, hot, garlic parmesan, calypso, or Jack Daniels BBQ sauce",
        img: "https://images.pexels.com/photos/11118936/pexels-photo-11118936.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        price: 13.95,
        options: [
          {
            title: "Small",
            additionalPrice: 0,
          },
          {
            title: "Medium",
            additionalPrice: 4,
          },
          {
            title: "Large",
            additionalPrice: 6,
          },
        ],
      },
      {
        id: 5,
        name: "HOUSEMADE MEATBALLS",
        desc: "2 meatballs in our tomato sauce",
        img: "https://images.pexels.com/photos/998245/pexels-photo-998245.jpeg?auto=compress&cs=tinysrgb&w=1600",
        price: 8.95,
      },
      {
        id: 6,
        name: "GARLIC BREAD STICKS",
        desc: "Freshly baked bread sticks, smothered in fresh garlic and parmesan , served with our tomato sauce",
        img: "https://images.pexels.com/photos/17894236/pexels-photo-17894236/free-photo-of-chicken-meatballs-on-black-plate.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        price: 6.5,
        options: [
          {
            title: "6 pieces",
            additionalPrice: 0,
          },
          {
            title: "12 pieces",
            additionalPrice: 4,
          },
        ],
      },
      {
        id: 7,
        name: "INSALATA CAPRESE",
        desc: "Fresh mozzarella, roasted tomato and basil, drizzled with extra virgin olive oil",
        img: "https://images.pexels.com/photos/4768996/pexels-photo-4768996.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        price: 12.95,
      },
      {
        id: 8,
        name: "CLASSIC ANTIPASTO",
        desc: "Sliced prosciutto di Parma, fresh mozzarella, genoa salami, kalamata olives and seasoned artichoke hearts",
        img: "https://images.pexels.com/photos/5975427/pexels-photo-5975427.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        price: 19.95,
      },
    ],
  },

  // 2
  {
    category: "HOUSE SPECIALTIES",
    items: [
      {
        id: 1,
        name: "FRIED ZUCCHINI STICKS (5)",
        desc: "Fried fresh local zucchini, served with our tomato sauce",
        img: "https://images.pexels.com/photos/8250284/pexels-photo-8250284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        price: 8.5,
      },
      {
        id: 2,
        name: "MOZZARELLA STICKS (5)",
        desc: "Served with our tomato sauce",
        img: "https://images.pexels.com/photos/5639378/pexels-photo-5639378.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        price: 9.5,
      },
      {
        id: 3,
        name: "GARLIC BREAD",
        desc: "Italian bread with fresh garlic and Romano cheese",
        img: "https://images.pexels.com/photos/959926/pexels-photo-959926.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        price: 7.5,
      },
    ],
  },

  // 3
  {
    category: "SOUPS",
    items: [
      {
        id: 1,
        name: "PASTA FAGIOLI",
        desc: "Classic Italian cannelloni bean stew with ditalini pasta",
        price: 6.95,
        img: "https://images.pexels.com/photos/17848654/pexels-photo-17848654/free-photo-of-meal-with-chopsticks-in-bowl.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      {
        id: 2,
        name: "NYCP'S WEDDING SOUP",
        desc: "Chicken, meatball and escarole soup with ditalini pasta",
        price: 6.95,
        img: "https://images.pexels.com/photos/1703272/pexels-photo-1703272.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
    ],
  },
  // 4
  {
    category: "SALADS",
    items: [
      {
        id: 1,
        name: "HOUSE SALAD",
        desc: "Mixed greens, bell pepper, crouton, sliced mushroom, onion, diced tomato, tossed with your choice of dressing",
        price: 9.45,
        img: "https://images.pexels.com/photos/1059905/pexels-photo-1059905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      {
        id: 2,
        name: "SIDE SALAD",
        desc: "Mixed lettuce greens and tomato",
        price: 5.45,
        img: "https://images.pexels.com/photos/257816/pexels-photo-257816.jpeg?auto=compress&cs=tinysrgb&w=1600",
      },
      {
        id: 3,
        name: "CHOPPED SALAD",
        desc: "Mixed greens, kalamata olives, onion, tomato, bell pepper and tomato, chopped and tossed in our housemade ranch dressing, topped with our housemade croutons",
        price: 10.45,
        img: "https://images.pexels.com/photos/1059905/pexels-photo-1059905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      {
        id: 4,
        name: "CAESAR SALAD",
        desc: "Romaine lettuce, grated Romano, croutons and our Classic Caesar dressing",
        price: 9.45,
        img: "https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=1600",
      },
      {
        id: 5,
        name: "GREEK SALAD",
        desc: "Iceberg with feta cheese, diced tomato, bell pepper, kalamata olives, artichoke, drizzled with our housemade Mediterranean dressing",
        price: 10.45,
        img: "https://images.pexels.com/photos/1152237/pexels-photo-1152237.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
    ],
  },

  // 6
  {
    category: "CALZONE & STROMBOLI",
    items: [
      {
        id: 1,
        name: "CALZONE",
        desc: "Pizza turnover filled with ricotta and mozzarella cheese",
        price: 17,
        options: [
          {
            title: "small",
            additionalPrice: 0,
          },
          {
            title: "large",
            additionalPrice: 19,
          },
        ],

        img: "https://images.pexels.com/photos/11654222/pexels-photo-11654222.jpeg?auto=compress&cs=tinysrgb&w=1600",
      },
      {
        id: 2,
        name: "STROMBOLI",
        desc: "Stuffed bread with mozzarella cheese",
        price: 17,
        options: [
          {
            title: "small",
            additionalPrice: 0,
          },
          {
            title: "large",
            additionalPrice: 19,
          },
        ],
        img: "https://images.pexels.com/photos/10935261/pexels-photo-10935261.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
    ],
  },

  // 7
  {
    category: "PIZZA",
    items: [
      {
        id: 1,
        name: "NYCP SPECIAL",
        desc: "Pepperoni, sausage, bell pepper, onion and mushroom",
        price: 27.5,
        options: [
          {
            title: "Medium",
            additionalPrice: 0,
          },
          {
            title: "Large",
            additionalPrice: 30.5,
          },
        ],
        img: "https://images.pexels.com/photos/7137024/pexels-photo-7137024.jpeg?auto=compress&cs=tinysrgb&w=1600",
      },
      {
        id: 2,
        name: "VEGETARIAN",
        desc: "Mushroom, bell pepper, onion, tomato and artichoke",
        price: 24.5,
        options: [
          {
            title: "Medium",
            additionalPrice: 0,
          },
          {
            title: "Large",
            additionalPrice: 27.5,
          },
        ],
        img: "https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg?auto=compress&cs=tinysrgb&w=1600",
      },
      {
        id: 3,
        name: "MEAT LOVERS",
        desc: "Pepperoni, sausage, meatball, ham and bacon",
        price: 29,
        options: [
          {
            title: "Medium",
            additionalPrice: 0,
          },
          {
            title: "Large",
            additionalPrice: 32,
          },
        ],
        img: "https://images.pexels.com/photos/4773769/pexels-photo-4773769.jpeg?auto=compress&cs=tinysrgb&w=1600",
      },
      {
        id: 4,
        name: "BBQ CHICKEN PIZZA",
        desc: "Housemade Jack Daniels BBQ sauce, BBQ fried chicken, bacon, mozzarella and cheddar cheeses",
        price: 27,
        options: [
          {
            title: "Medium",
            additionalPrice: 0,
          },
          {
            title: "Large",
            additionalPrice: 30,
          },
        ],
        img: "https://images.pexels.com/photos/5017837/pexels-photo-5017837.jpeg?auto=compress&cs=tinysrgb&w=1600",
      },
      {
        id: 5,
        name: "WHITE PIZZA",
        desc: "Housemade ricotta white sauce, mozzarella and romano cheese",
        price: 23,
        options: [
          {
            title: "Medium",
            additionalPrice: 0,
          },
          {
            title: "Large",
            additionalPrice: 26,
          },
        ],
        img: "https://images.pexels.com/photos/12843244/pexels-photo-12843244.jpeg?auto=compress&cs=tinysrgb&w=1600",
      },
      {
        id: 6,
        name: "HAWAIIAN",
        desc: "Housemade tomato sauce, mozzarella, ham and pineapple",
        price: 23,
        options: [
          {
            title: "Medium",
            additionalPrice: 0,
          },
          {
            title: "Large",
            additionalPrice: 26,
          },
        ],
        img: "https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      {
        id: 7,
        name: "MARGHERITA",
        desc: "Our fresh tomato sauce, fresh housemade mozzarella, extra virgin olive oil, fresh basil and garlic",
        price: 24,
        options: [
          {
            title: "Medium",
            additionalPrice: 0,
          },
          {
            title: "Large",
            additionalPrice: 27,
          },
        ],
        img: "https://images.pexels.com/photos/6605214/pexels-photo-6605214.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      {
        id: 8,
        name: "BUFFALO CHICKEN PIZZA",
        desc: "Housemade buffalo ranch sauce, buffalo fried chicken, mozzarella and cheddar cheese with buffalo wing sauce",
        price: 26,
        options: [
          {
            title: "Medium",
            additionalPrice: 0,
          },
          {
            title: "Large",
            additionalPrice: 26,
          },
        ],
        img: "https://images.pexels.com/photos/6940996/pexels-photo-6940996.jpeg?auto=compress&cs=tinysrgb&w=1600",
      },
      {
        id: 9,
        name: "NEW YORK",
        desc: "Classic New York style thin crust",
        price: 19,
        options: [
          {
            title: "medium",
            additionalPrice: 0,
          },
          {
            title: "large",
            additionalPrice: 21,
          },
        ],
        img: "https://images.pexels.com/photos/14391207/pexels-photo-14391207.jpeg?auto=compress&cs=tinysrgb&w=1600",
      },
      {
        id: 10,
        name: "DEEP DISH PAN",
        desc: "Thick crust pan pizza",
        price: 21,
        options: [
          {
            title: "small",
            additionalPrice: 0,
          },
          {
            title: "large",
            additionalPrice: 23,
          },
        ],
        img: "/pizza-01.png",
      },
      {
        id: 11,
        name: "SICILIAN",
        desc: "Thick crust pan pizza",
        price: 26,
        img: "https://images.pexels.com/photos/14590497/pexels-photo-14590497.jpeg?auto=compress&cs=tinysrgb&w=1600",
      },
    ],
  },
  {
    category: "PASTA AND ENTREES",
    items: [
      {
        id: 1,
        name: "SPAGHETTI WITH MEATBALLS",
        desc: "Meatballs in our tomato sauce and tossed with spaghetti",
        price: 15.5,
        img: "https://images.pexels.com/photos/12720645/pexels-photo-12720645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      {
        id: 2,
        name: "PENNE BOLOGNESE",
        desc: "Meat sauce of beef, stewed in our tomato sauce and a touch of cream",
        price: 15.95,
        img: "https://images.pexels.com/photos/6287525/pexels-photo-6287525.jpeg?auto=compress&cs=tinysrgb&w=1600",
      },
      {
        id: 3,
        name: "FETTUCCINE ALFREDO",
        desc: "Cream sauce with parmesan and romano cheese tossed with fettuccine",
        price: 16.95,
        img: "https://images.pexels.com/photos/11220209/pexels-photo-11220209.jpeg?auto=compress&cs=tinysrgb&w=1600",
      },
      {
        id: 4,
        name: "PENNE ALLA VODKA",
        desc: "Minced prosciutto, onions, peas, sauteed and finished with vodka in our tomato sauce with a touch of cream",
        price: 16.95,
        img: "https://images.pexels.com/photos/11220208/pexels-photo-11220208.jpeg?auto=compress&cs=tinysrgb&w=1600",
      },
      {
        id: 5,
        name: "SPAGHETTI AND RED CLAM SAUCE",
        desc: "Sauteed chopped sea clams, with garlic and parsley, finished with our housemade marinara sauce, tossed with linguine",
        price: 18.95,
        img: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=1600",
      },
      {
        id: 6,
        name: "HOUSEMADE BAKED ZITI",
        desc: "Ricotta and mozzarella cheese with ziti pasta, topped with our tomato sauce and more melted mozzarella",
        price: 12.5,
        img: "https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&w=1600",
      },
      {
        id: 7,
        name: "PARMIGIANA - Chicken",
        desc: "Choice of Chicken covered in our tomato sauce and mozzarella cheese served with penne pasta",
        price: 17.95,
        img: "https://images.pexels.com/photos/17849428/pexels-photo-17849428/free-photo-of-chicken-with-fries-and-salad.jpeg?auto=compress&cs=tinysrgb&w=1600",
      },
      {
        id: 8,
        name: "PARMIGIANA - Eggplant",
        desc: "Choice of Eggplant covered in our tomato sauce and mozzarella cheese served with penne pasta",
        price: 15.95,
        img: "https://images.pexels.com/photos/1707917/pexels-photo-1707917.jpeg?auto=compress&cs=tinysrgb&w=1600",
      },
      {
        id: 9,
        name: "CHICKEN MARSALA",
        desc: "Tender breaded chicken cutlet sauteed with mushrooms in our Sicilian Marsala sauce, served with penne pasta",
        price: 18.95,
        img: "https://images.pexels.com/photos/533325/pexels-photo-533325.jpeg?auto=compress&cs=tinysrgb&w=1600",
      },
    ],
  },
  {
    category: "HEROES",
    items: [
      {
        id: 1,
        name: "THE ITALIAN",
        desc: "Ham, salami, pepperoni and provolone, with shaved lettuce, sliced onion and tomato, oil and vinegar",
        price: 14.95,
        img: "https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg?auto=compress&cs=tinysrgb&w=1600",
      },
      {
        id: 2,
        name: "HAM OR TURKEY AND PROVOLONE",
        desc: "With shaved lettuce, sliced onion, and tomato, oil and vinegar",
        price: 13.95,
        img: "https://images.pexels.com/photos/6605653/pexels-photo-6605653.jpeg?auto=compress&cs=tinysrgb&w=1600",
      },
      {
        id: 3,
        name: "EGGPLANT PARMIGIANA",
        desc: "Slices of fried eggplant, breaded in-house with our tomato sauce and melted mozzarella cheese, baked in the oven",
        price: 12.95,
        img: "https://images.pexels.com/photos/1707917/pexels-photo-1707917.jpeg?auto=compress&cs=tinysrgb&w=1600",
      },
      {
        id: 4,
        name: "CHICKEN PARMIGIANA",
        desc: "Tender chicken cutlet, breaded in-house with our tomato sauce and melted mozzarella cheese, baked in the oven",
        price: 13.95,
        img: "https://images.pexels.com/photos/17894236/pexels-photo-17894236/free-photo-of-chicken-meatballs-on-black-plate.jpeg?auto=compress&cs=tinysrgb&w=1600",
      },
      {
        id: 5,
        name: "MEATBALL PARMIGIANA",
        desc: "Housemade meatballs with our tomato sauce and melted mozzarella cheese, baked in the oven",
        price: 13.95,
        img: "https://images.pexels.com/photos/4210862/pexels-photo-4210862.jpeg?auto=compress&cs=tinysrgb&w=1600",
      },
      {
        id: 6,
        name: "PHILLY CHEESESTEAK",
        desc: "Shaved top sirloin with onion, bell pepper, and mushroom, sauteed on the flat top, topped with melted white American cheese",
        price: 13.95,
        img: "https://images.pexels.com/photos/15141034/pexels-photo-15141034/free-photo-of-bread-food-sandwich-dinner.jpeg?auto=compress&cs=tinysrgb&w=1600",
      },
      {
        id: 7,
        name: "PHILLY CHICKEN CHEESESTEAK",
        desc: "Chicken with onion, bell pepper and mushroom, sauteed on the flat top, topped with melted white American cheese",
        price: 13.95,
        img: "https://images.pexels.com/photos/6896379/pexels-photo-6896379.jpeg?auto=compress&cs=tinysrgb&w=1600",
      },
      {
        id: 8,
        name: "BUFFALO CHICKEN",
        desc: "Boneless breast of chicken, breaded in-house, fried and dipped in Buffalo wing sauce, with romaine lettuce and our housemade blue cheese dressing",
        price: 13.95,
        img: "https://images.pexels.com/photos/11299734/pexels-photo-11299734.jpeg?auto=compress&cs=tinysrgb&w=1600",
      },
    ],
  },
];

export const featured: Item = [
  {
    id: 1,
    name: "NYCP SPECIAL",
    desc: "Pepperoni, sausage, bell pepper, onion and mushroom",
    price: 27.5,
    options: [
      {
        title: "Medium",
        additionalPrice: 0,
      },
      {
        title: "Large",
        additionalPrice: 30.5,
      },
    ],
    img: "https://images.pexels.com/photos/7137024/pexels-photo-7137024.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    id: 2,
    name: "VEGETARIAN",
    desc: "Mushroom, bell pepper, onion, tomato and artichoke",
    price: 24.5,
    options: [
      {
        title: "Medium",
        additionalPrice: 0,
      },
      {
        title: "Large",
        additionalPrice: 27.5,
      },
    ],
    img: "https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    id: 3,
    name: "MEAT LOVERS",
    desc: "Pepperoni, sausage, meatball, ham and bacon",
    price: 29,
    options: [
      {
        title: "Medium",
        additionalPrice: 0,
      },
      {
        title: "Large",
        additionalPrice: 32,
      },
    ],
    img: "https://images.pexels.com/photos/4773769/pexels-photo-4773769.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    id: 4,
    name: "BBQ CHICKEN PIZZA",
    desc: "Housemade Jack Daniels BBQ sauce, BBQ fried chicken, bacon, mozzarella and cheddar cheeses",
    price: 27,
    options: [
      {
        title: "Medium",
        additionalPrice: 0,
      },
      {
        title: "Large",
        additionalPrice: 30,
      },
    ],
    img: "https://images.pexels.com/photos/5017837/pexels-photo-5017837.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    id: 5,
    name: "WHITE PIZZA",
    desc: "Housemade ricotta white sauce, mozzarella and romano cheese",
    price: 23,
    options: [
      {
        title: "Medium",
        additionalPrice: 0,
      },
      {
        title: "Large",
        additionalPrice: 26,
      },
    ],
    img: "https://images.pexels.com/photos/12843244/pexels-photo-12843244.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    id: 6,
    name: "HAWAIIAN",
    desc: "Housemade tomato sauce, mozzarella, ham and pineapple",
    price: 23,
    options: [
      {
        title: "Medium",
        additionalPrice: 0,
      },
      {
        title: "Large",
        additionalPrice: 26,
      },
    ],
    img: "https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];
