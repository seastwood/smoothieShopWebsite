
const smoothies = {
  "Fruit Smoothies": [
    {
      name: "Strawberry Banana",
      price: { small: 4.99, medium: 5.99, large: 6.99 },
      description: "A classic blend of sweet strawberries and ripe bananas.",
      ingredients: ["sugar", "strawberry", "banana"],
      servingSize: "1 smoothie (16 fl oz)",
      calories: {
        calories: "210",
        fatCal: "22",
      },
      nutrition: { 
        totalFat: { name: "Total Fat", amount: "1g", percentDailyValue: "2%" },
        saturatedFat: { name: "Saturated Fat", amount: "0.5g", percentDailyValue: "3%" },
        transFat: { name: "Trans Fat", amount: "0g", percentDailyValue: "0%" },
        cholesterol: { name: "Cholesterol", amount: "5mg", percentDailyValue: "2%" },
        sodium: { name: "Sodium", amount: "45mg", percentDailyValue: "2%" },
        potassium: { name: "Potassium", amount: "400g", percentDailyValue: "10%" },
        totalCarbs: { name: "Total Carbs", amount: "47g", percentDailyValue: "16%" },
        dietaryFiber: { name: "Dietary Fiber", amount: "4g", percentDailyValue: "14%" },
        totalSugars: { name: "Total Sugars", amount: "30g", dailpercentDailyValueyValue: "" },
        protein: { name: "Protein", amount: "3g", percentDailyValue: "6%" },
      },
      mineralsVitamins: {
        vitaminA: {name: 'Vitamin A', percentDailyValue: "2%"},
        vitaminC: {name: 'Vitamin C', percentDailyValue: "70%"},
        calcium: {name: 'Calcium', percentDailyValue: "10%"},
        iron: {name: 'Iron', percentDailyValue: "4%"},
        potassium: {name: 'Potassium', percentDailyValue: '8%'},
      },
      allergens: ["Milk", "Soy"],
      dietaryRestrictions: ["Vegetarian", "Gluten-Free"],
      image: "smoothie_pink.png"
    },
    {
      name: "Mango Pineapple",
      price: { small: 5.99, medium: 6.99, large: 7.99 },
      description: "A tropical mix of juicy mango and tangy pineapple.",
      ingredients: ["sugar", "mango", "pineapple"],
      servingSize: "1 smoothie (16 fl oz)",
      calories: {
      calories: "240",
      fatCal: "0",
      },
      nutrition: {
      totalFat: { name: "Total Fat", amount: "0g", percentDailyValue: "0%" },
      saturatedFat: { name: "Saturated Fat", amount: "0g", percentDailyValue: "0%" },
      transFat: { name: "Trans Fat", amount: "0g", percentDailyValue: "0%" },
      cholesterol: { name: "Cholesterol", amount: "0mg", percentDailyValue: "0%" },
      sodium: { name: "Sodium", amount: "10mg", percentDailyValue: "0%" },
      potassium: { name: "Potassium", amount: "400mg", percentDailyValue: "10%" },
      totalCarbs: { name: "Total Carbs", amount: "61g", percentDailyValue: "20%" },
      dietaryFiber: { name: "Dietary Fiber", amount: "3g", percentDailyValue: "12%" },
      totalSugars: { name: "Total Sugars", amount: "38g", percentDailyValue: "" },
      protein: { name: "Protein", amount: "2g", percentDailyValue: "4%" },
      },
      mineralsVitamins: {
      vitaminA: {name: 'Vitamin A', percentDailyValue: "2%"},
      vitaminC: {name: 'Vitamin C', percentDailyValue: "70%"},
      calcium: {name: 'Calcium', percentDailyValue: "4%"},
      iron: {name: 'Iron', percentDailyValue: "2%"},
      potassium: {name: 'Potassium', percentDailyValue: '10%'},
      },
      allergens: ["Milk", "Soy"],
      dietaryRestrictions: ["Vegetarian", "Gluten-Free"],
      image: "smoothie_fruit.png"
      },
    {
      name: "Peach Raspberry",
      price: { small: 5.99, medium: 6.99, large: 7.99 },
      description: "A sweet and tart blend of ripe peaches and fresh raspberries.",
      ingredients: ["sugar", "peach", "raspberries"],
      servingSize: "1 smoothie (16 fl oz)",
      calories: {
      calories: "230",
      fatCal: "0",
      },
      nutrition: {
      totalFat: { name: "Total Fat", amount: "0g", percentDailyValue: "0%" },
      saturatedFat: { name: "Saturated Fat", amount: "0g", percentDailyValue: "0%" },
      transFat: { name: "Trans Fat", amount: "0g", percentDailyValue: "0%" },
      cholesterol: { name: "Cholesterol", amount: "0mg", percentDailyValue: "0%" },
      sodium: { name: "Sodium", amount: "5mg", percentDailyValue: "0%" },
      potassium: { name: "Potassium", amount: "410mg", percentDailyValue: "12%" },
      totalCarbs: { name: "Total Carbs", amount: "56g", percentDailyValue: "19%" },
      dietaryFiber: { name: "Dietary Fiber", amount: "4g", percentDailyValue: "14%" },
      totalSugars: { name: "Total Sugars", amount: "36g", percentDailyValue: "" },
      protein: { name: "Protein", amount: "2g", percentDailyValue: "4%" },
      },
      mineralsVitamins: {
      vitaminA: {name: 'Vitamin A', percentDailyValue: "2%"},
      vitaminC: {name: 'Vitamin C', percentDailyValue: "30%"},
      calcium: {name: 'Calcium', percentDailyValue: "4%"},
      iron: {name: 'Iron', percentDailyValue: "6%"},
      potassium: {name: 'Potassium', percentDailyValue: '12%'},
      },
      allergens: ["Milk", "Soy"],
      dietaryRestrictions: ["Vegetarian", "Gluten-Free"],
      image: "smoothie_fruit.png"
      },
      {
        name: "Blueberry Pomegranate",
        price: { small: 6.99, medium: 7.99, large: 8.99 },
        description: "A bold mix of antioxidant-rich blueberries and pomegranate juice.",
        ingredients: ["sugar", "blueberries", "pomegranate"],
        servingSize: "1 smoothie (16 fl oz)",
        calories: {
          calories: "250",
          fatCal: "0",
        },
        nutrition: { 
          totalFat: { name: "Total Fat", amount: "0g", percentDailyValue: "0%" },
          saturatedFat: { name: "Saturated Fat", amount: "0g", percentDailyValue: "0%" },
          transFat: { name: "Trans Fat", amount: "0g", percentDailyValue: "0%" },
          cholesterol: { name: "Cholesterol", amount: "0mg", percentDailyValue: "0%" },
          sodium: { name: "Sodium", amount: "10mg", percentDailyValue: "0%" },
          potassium: { name: "Potassium", amount: "370mg", percentDailyValue: "10%" },
          totalCarbs: { name: "Total Carbs", amount: "62g", percentDailyValue: "21%" },
          dietaryFiber: { name: "Dietary Fiber", amount: "6g", percentDailyValue: "24%" },
          totalSugars: { name: "Total Sugars", amount: "51g", percentDailyValue: "" },
          protein: { name: "Protein", amount: "2g", percentDailyValue: "4%" },
        },
        mineralsVitamins: {
          vitaminA: {name: 'Vitamin A', percentDailyValue: "0%"},
          vitaminC: {name: 'Vitamin C', percentDailyValue: "40%"},
          calcium: {name: 'Calcium', percentDailyValue: "2%"},
          iron: {name: 'Iron', percentDailyValue: "4%"},
          potassium: {name: 'Potassium', percentDailyValue: '10%'},
        },
        allergens: [],
        dietaryRestrictions: ["Vegetarian", "Vegan", "Gluten-Free"],
        image: "smoothie_fruit.png"
      },
      {
        name: "Mixed Berry",
        price: { small: 5.99, medium: 6.99, large: 7.99 },
        description: "A delicious blend of assorted berries, including strawberries, blueberries, and raspberries.",
        ingredients: ["sugar", "blueberries", "raspberries", "strawberries", "blackberries"],
        servingSize: "1 smoothie (16 fl oz)",
        calories: {
        calories: "220",
        fatCal: "5",
        },
        nutrition: {
        totalFat: { name: "Total Fat", amount: "0.5g", percentDailyValue: "1%" },
        saturatedFat: { name: "Saturated Fat", amount: "0g", percentDailyValue: "0%" },
        transFat: { name: "Trans Fat", amount: "0g", percentDailyValue: "0%" },
        cholesterol: { name: "Cholesterol", amount: "0mg", percentDailyValue: "0%" },
        sodium: { name: "Sodium", amount: "5mg", percentDailyValue: "0%" },
        potassium: { name: "Potassium", amount: "380mg", percentDailyValue: "10%" },
        totalCarbs: { name: "Total Carbs", amount: "56g", percentDailyValue: "19%" },
        dietaryFiber: { name: "Dietary Fiber", amount: "9g", percentDailyValue: "36%" },
        totalSugars: { name: "Total Sugars", amount: "34g", percentDailyValue: "" },
        protein: { name: "Protein", amount: "2g", percentDailyValue: "4%" },
        },
        mineralsVitamins: {
        vitaminA: {name: 'Vitamin A', percentDailyValue: "0%"},
        vitaminC: {name: 'Vitamin C', percentDailyValue: "130%"},
        calcium: {name: 'Calcium', percentDailyValue: "4%"},
        iron: {name: 'Iron', percentDailyValue: "6%"},
        potassium: {name: 'Potassium', percentDailyValue: '10%'},
        },
        allergens: [],
        dietaryRestrictions: ["Vegetarian", "Vegan", "Gluten-Free"],
        image: "smoothie_strawberry_mint.png"
        },
    {
      name: "Watermelon Lime",
      price: { small: 4.99, medium: 5.99, large: 6.99 },
      description: "A refreshing combination of juicy watermelon and tangy lime.",
      ingredients: ["sugar", "watermelon", "lime"],
      servingSize: "1 smoothie (16 fl oz)",
      calories: {
        calories: "180",
        fatCal: "0",
      },
      nutrition: {
        totalFat: { name: "Total Fat", amount: "0g", percentDailyValue: "0%" },
        saturatedFat: { name: "Saturated Fat", amount: "0g", percentDailyValue: "0%" },
        transFat: { name: "Trans Fat", amount: "0g", percentDailyValue: "0%" },
        cholesterol: { name: "Cholesterol", amount: "0mg", percentDailyValue: "0%" },
        sodium: { name: "Sodium", amount: "10mg", percentDailyValue: "0%" },
        potassium: { name: "Potassium", amount: "360mg", percentDailyValue: "10%" },
        totalCarbs: { name: "Total Carbs", amount: "47g", percentDailyValue: "16%" },
        dietaryFiber: { name: "Dietary Fiber", amount: "1g", percentDailyValue: "4%" },
        totalSugars: { name: "Total Sugars", amount: "26g", percentDailyValue: "" },
        protein: { name: "Protein", amount: "1g", percentDailyValue: "2%" },
      },
      mineralsVitamins: {
        vitaminA: {name: 'Vitamin A', percentDailyValue: "30%"},
        vitaminC: {name: 'Vitamin C', percentDailyValue: "40%"},
        calcium: {name: 'Calcium', percentDailyValue: "4%"},
        iron: {name: 'Iron', percentDailyValue: "2%"},
        potassium: {name: 'Potassium', percentDailyValue: '10%'},
      },
      allergens: [],
      dietaryRestrictions: ["Vegetarian", "Vegan", "Gluten-Free"],
      image: "smoothie_fruit.png"
    },
    {
      name: "Kiwi Strawberry",
      price: { small: 5.99, medium: 6.99, large: 7.99 },
      description: "A refreshing blend of juicy kiwi and sweet strawberries.",
      ingredients: ["sugar", "kiwi", "strawberries"],
      servingSize: "1 smoothie (16 fl oz)",
      calories: {
        calories: "210",
        fatCal: "5",
      },
      nutrition: {
        totalFat: { name: "Total Fat", amount: "0.5g", percentDailyValue: "1%" },
        saturatedFat: { name: "Saturated Fat", amount: "0g", percentDailyValue: "0%" },
        transFat: { name: "Trans Fat", amount: "0g", percentDailyValue: "0%" },
        cholesterol: { name: "Cholesterol", amount: "0mg", percentDailyValue: "0%" },
        sodium: { name: "Sodium", amount: "5mg", percentDailyValue: "0%" },
        potassium: { name: "Potassium", amount: "350mg", percentDailyValue: "10%" },
        totalCarbs: { name: "Total Carbs", amount: "53g", percentDailyValue: "18%" },
        dietaryFiber: { name: "Dietary Fiber", amount: "8g", percentDailyValue: "32%" },
        totalSugars: { name: "Total Sugars", amount: "30g", percentDailyValue: "" },
        protein: { name: "Protein", amount: "2g", percentDailyValue: "4%" },
      },
      mineralsVitamins: {
        vitaminA: {name: 'Vitamin A', percentDailyValue: "0%"},
        vitaminC: {name: 'Vitamin C', percentDailyValue: "200%"},
        calcium: {name: 'Calcium', percentDailyValue: "6%"},
        iron: {name: 'Iron', percentDailyValue: "4%"},
        potassium: {name: 'Potassium', percentDailyValue: '10%'},
      },
      allergens: [],
      dietaryRestrictions: ["Vegetarian", "Vegan", "Gluten-Free"],
      image: "smoothie_kiwi.png"
    },
    {
      name: "Orange Mango",
      price: { small: 5.99, medium: 6.99, large: 7.99 },
      description: "A refreshing blend of tangy oranges and sweet mangoes, perfect for a hot day.",
      ingredients: ["sugar", "orange", "mango"],
      servingSize: "1 smoothie (16 fl oz)",
      calories: {
        calories: "230",
        fatCal: "5",
      },
      nutrition: {
        totalFat: { name: "Total Fat", amount: "0.5g", percentDailyValue: "1%" },
        saturatedFat: { name: "Saturated Fat", amount: "0g", percentDailyValue: "0%" },
        transFat: { name: "Trans Fat", amount: "0g", percentDailyValue: "0%" },
        cholesterol: { name: "Cholesterol", amount: "0mg", percentDailyValue: "0%" },
        sodium: { name: "Sodium", amount: "5mg", percentDailyValue: "0%" },
        potassium: { name: "Potassium", amount: "370mg", percentDailyValue: "10%" },
        totalCarbs: { name: "Total Carbs", amount: "57g", percentDailyValue: "19%" },
        dietaryFiber: { name: "Dietary Fiber", amount: "3g", percentDailyValue: "12%" },
        totalSugars: { name: "Total Sugars", amount: "40g", percentDailyValue: "" },
        protein: { name: "Protein", amount: "2g", percentDailyValue: "4%" },
      },
      mineralsVitamins: {
        vitaminA: {name: 'Vitamin A', percentDailyValue: "0%"},
        vitaminC: {name: 'Vitamin C', percentDailyValue: "130%"},
        calcium: {name: 'Calcium', percentDailyValue: "4%"},
        iron: {name: 'Iron', percentDailyValue: "2%"},
        potassium: {name: 'Potassium', percentDailyValue: '10%'},
      },
      allergens: [],
      dietaryRestrictions: ["Vegetarian", "Vegan", "Gluten-Free"],
      image: "smoothie_mango.png"
    }
  ],
  "Green Smoothies": [
    {
      name: "Kale Spinach",
      price: { small: 6.99, medium: 7.99, large: 8.99 },
      description: "A nutrient-packed blend of leafy greens, apple juice, and lemon.",
      ingredients: ["sugar", "kale", "spinach"],
      servingSize: "1 smoothie (16 fl oz)",
      calories: {
      calories: "160",
      fatCal: "0",
      },
      nutrition: {
      totalFat: { name: "Total Fat", amount: "0g", percentDailyValue: "0%" },
      saturatedFat: { name: "Saturated Fat", amount: "0g", percentDailyValue: "0%" },
      transFat: { name: "Trans Fat", amount: "0g", percentDailyValue: "0%" },
      cholesterol: { name: "Cholesterol", amount: "0mg", percentDailyValue: "0%" },
      sodium: { name: "Sodium", amount: "55mg", percentDailyValue: "2%" },
      potassium: { name: "Potassium", amount: "640mg", percentDailyValue: "18%" },
      totalCarbs: { name: "Total Carbs", amount: "38g", percentDailyValue: "13%" },
      dietaryFiber: { name: "Dietary Fiber", amount: "4g", percentDailyValue: "16%" },
      totalSugars: { name: "Total Sugars", amount: "28g", percentDailyValue: "" },
      protein: { name: "Protein", amount: "4g", percentDailyValue: "8%" },
      },
      mineralsVitamins: {
      vitaminA: {name: 'Vitamin A', percentDailyValue: "290%"},
      vitaminC: {name: 'Vitamin C', percentDailyValue: "140%"},
      calcium: {name: 'Calcium', percentDailyValue: "15%"},
      iron: {name: 'Iron', percentDailyValue: "10%"},
      potassium: {name: 'Potassium', percentDailyValue: '18%'},
      },
      allergens: [],
      dietaryRestrictions: ["Vegetarian", "Vegan", "Gluten-Free"],
      image: "smoothie_kale.png"
      },
      {
        name: "Avocado Spinach",
        price: { small: 7.99, medium: 8.99, large: 9.99 },
        description: "A creamy blend of avocado, spinach, almond milk, and honey.",
        ingredients: ["avocado", "spinach", "almond milk", "honey"],
        servingSize: "1 smoothie (16 fl oz)",
        calories: {
          calories: "320",
          fatCal: "140",
        },
        nutrition: {
          totalFat: { name: "Total Fat", amount: "16g", percentDailyValue: "25%" },
          saturatedFat: { name: "Saturated Fat", amount: "1.5g", percentDailyValue: "8%" },
          transFat: { name: "Trans Fat", amount: "0g", percentDailyValue: "0%" },
          cholesterol: { name: "Cholesterol", amount: "0mg", percentDailyValue: "0%" },
          sodium: { name: "Sodium", amount: "210mg", percentDailyValue: "9%" },
          potassium: { name: "Potassium", amount: "820mg", percentDailyValue: "23%" },
          totalCarbs: { name: "Total Carbs", amount: "42g", percentDailyValue: "14%" },
          dietaryFiber: { name: "Dietary Fiber", amount: "9g", percentDailyValue: "36%" },
          totalSugars: { name: "Total Sugars", amount: "28g", percentDailyValue: "" },
          protein: { name: "Protein", amount: "7g", percentDailyValue: "14%" },
        },
        mineralsVitamins: {
          vitaminA: { name: "Vitamin A", percentDailyValue: "140%" },
          vitaminC: { name: "Vitamin C", percentDailyValue: "50%" },
          calcium: { name: "Calcium", percentDailyValue: "35%" },
          iron: { name: "Iron", percentDailyValue: "15%" },
          potassium: { name: "Potassium", percentDailyValue: "23%" },
        },
        allergens: ["tree nuts"],
        dietaryRestrictions: ["Vegetarian", "Gluten-Free"],
        image: "smoothie_veggie.png"
      },
      {
        name: "Celery Cucumber",
        price: { small: 5.99, medium: 6.99, large: 7.99 },
        description: "A refreshing blend of celery, cucumber, and pineapple juice.",
        ingredients: ["celery", "cucumber", "pineapple juice"],
        servingSize: "1 smoothie (16 fl oz)",
        calories: {
        calories: "120",
        fatCal: "0",
        },
        nutrition: {
        totalFat: { name: "Total Fat", amount: "0g", percentDailyValue: "0%" },
        saturatedFat: { name: "Saturated Fat", amount: "0g", percentDailyValue: "0%" },
        transFat: { name: "Trans Fat", amount: "0g", percentDailyValue: "0%" },
        cholesterol: { name: "Cholesterol", amount: "0mg", percentDailyValue: "0%" },
        sodium: { name: "Sodium", amount: "60mg", percentDailyValue: "3%" },
        potassium: { name: "Potassium", amount: "860mg", percentDailyValue: "25%" },
        totalCarbs: { name: "Total Carbs", amount: "30g", percentDailyValue: "10%" },
        dietaryFiber: { name: "Dietary Fiber", amount: "3g", percentDailyValue: "12%" },
        totalSugars: { name: "Total Sugars", amount: "21g", percentDailyValue: "" },
        protein: { name: "Protein", amount: "3g", percentDailyValue: "6%" },
        },
        mineralsVitamins: {
        vitaminA: { name: "Vitamin A", percentDailyValue: "20%" },
        vitaminC: { name: "Vitamin C", percentDailyValue: "40%" },
        calcium: { name: "Calcium", percentDailyValue: "8%" },
        iron: { name: "Iron", percentDailyValue: "8%" },
        potassium: { name: "Potassium", percentDailyValue: "25%" },
        },
        allergens: [],
        dietaryRestrictions: ["Vegetarian", "Gluten-Free"],
        image: "smoothie_veggie.png"
        },
      {
        name: "Spinach Mango",
        price: { small: 6.99, medium: 7.99, large: 8.99 },
        description: "A tropical blend of spinach, mango, banana, and coconut water.",
        ingredients: ["spinach", "mango", "banana", "coconut water"],
        servingSize: "1 smoothie (16 fl oz)",
        calories: {
        calories: "260",
        fatCal: "10",
        },
        nutrition: {
        totalFat: { name: "Total Fat", amount: "1g", percentDailyValue: "2%" },
        saturatedFat: { name: "Saturated Fat", amount: "0.5g", percentDailyValue: "3%" },
        transFat: { name: "Trans Fat", amount: "0g", percentDailyValue: "0%" },
        cholesterol: { name: "Cholesterol", amount: "0mg", percentDailyValue: "0%" },
        sodium: { name: "Sodium", amount: "100mg", percentDailyValue: "4%" },
        potassium: { name: "Potassium", amount: "820mg", percentDailyValue: "23%" },
        totalCarbs: { name: "Total Carbs", amount: "63g", percentDailyValue: "21%" },
        dietaryFiber: { name: "Dietary Fiber", amount: "7g", percentDailyValue: "28%" },
        totalSugars: { name: "Total Sugars", amount: "50g", percentDailyValue: "" },
        protein: { name: "Protein", amount: "4g", percentDailyValue: "8%" },
        },
        mineralsVitamins: {
        vitaminA: { name: "Vitamin A", percentDailyValue: "150%" },
        vitaminC: { name: "Vitamin C", percentDailyValue: "130%" },
        calcium: { name: "Calcium", percentDailyValue: "15%" },
        iron: { name: "Iron", percentDailyValue: "10%" },
        potassium: { name: "Potassium", percentDailyValue: "23%" },
        },
        allergens: ["tree nuts"],
        dietaryRestrictions: ["Vegetarian", "Gluten-Free"],
        image: "smoothie_veggie.png"
        },
        {
          name: "Matcha Green Tea",
          price: { small: 7.99, medium: 8.99, large: 9.99 },
          description: "A refreshing blend of matcha green tea, spinach, banana, almond milk, and honey.",
          ingredients: ["matcha green tea powder", "spinach", "banana", "almond milk", "honey"],
          servingSize: "1 smoothie (16 fl oz)",
          calories: {
          calories: "200",
          fatCal: "50",
          },
          nutrition: {
          totalFat: { name: "Total Fat", amount: "6g", percentDailyValue: "9%" },
          saturatedFat: { name: "Saturated Fat", amount: "0.5g", percentDailyValue: "3%" },
          transFat: { name: "Trans Fat", amount: "0g", percentDailyValue: "0%" },
          cholesterol: { name: "Cholesterol", amount: "0mg", percentDailyValue: "0%" },
          sodium: { name: "Sodium", amount: "200mg", percentDailyValue: "8%" },
          potassium: { name: "Potassium", amount: "600mg", percentDailyValue: "17%" },
          totalCarbs: { name: "Total Carbs", amount: "35g", percentDailyValue: "12%" },
          dietaryFiber: { name: "Dietary Fiber", amount: "5g", percentDailyValue: "20%" },
          totalSugars: { name: "Total Sugars", amount: "25g", percentDailyValue: "" },
          protein: { name: "Protein", amount: "3g", percentDailyValue: "6%" },
          },
          mineralsVitamins: {
          vitaminA: { name: "Vitamin A", percentDailyValue: "80%" },
          vitaminC: { name: "Vitamin C", percentDailyValue: "30%" },
          calcium: { name: "Calcium", percentDailyValue: "35%" },
          iron: { name: "Iron", percentDailyValue: "10%" },
          potassium: { name: "Potassium", percentDailyValue: "17%" },
          },
          allergens: ["tree nuts"],
          dietaryRestrictions: ["Vegetarian", "Gluten-Free"],
          image: "smoothie_veggie.png"
          }
  ],
  "Protein Smoothies" : [
    {
    name: "Chocolate Peanut Butter",
    price: { small: 5.99, medium: 6.99, large: 7.99 },
    description: "This rich and creamy smoothie combines the classic flavors of chocolate and peanut butter with a boost of protein to keep you full and satisfied.",
    ingredients: ["peanut butter", "chocolate", "whey protein", "banana", "almond milk"],
    servingSize: "16 fl oz",
    calories: {
    calories: "450",
    fatCal: "108",
    },
    nutrition: {
    totalFat: { name: "Total Fat", amount: "12g", percentDailyValue: "18%" },
    saturatedFat: { name: "Saturated Fat", amount: "3g", percentDailyValue: "15%" },
    transFat: { name: "Trans Fat", amount: "0g", percentDailyValue: "0%" },
    cholesterol: { name: "Cholesterol", amount: "25mg", percentDailyValue: "8%" },
    sodium: { name: "Sodium", amount: "280mg", percentDailyValue: "12%" },
    totalCarbs: { name: "Total Carbs", amount: "56g", percentDailyValue: "19%" },
    dietaryFiber: { name: "Dietary Fiber", amount: "5g", percentDailyValue: "20%" },
    totalSugars: { name: "Total Sugars", amount: "40g", percentDailyValue: "" },
    protein: { name: "Protein", amount: "30g", percentDailyValue: "60%" },
    },
    mineralsVitamins: {
    vitaminA: { name: "Vitamin A", percentDailyValue: "0%" },
    vitaminC: { name: "Vitamin C", percentDailyValue: "0%" },
    calcium: { name: "Calcium", percentDailyValue: "20%" },
    iron: { name: "Iron", percentDailyValue: "10%" },
    potassium: { name: "Potassium", percentDailyValue: "15%" },
    },
    allergens: ["peanuts", "tree nuts"],
    dietaryRestrictions: ["Gluten-Free"],
    image: "smoothie_rich.png"
    },
    {
      name: "Vanilla Almond",
      price: { small: 5.99, medium: 6.99, large: 7.99 },
      description: "A smooth and nutty blend of vanilla and almond flavors, packed with protein to keep you energized throughout the day.",
      ingredients: ["vanilla protein powder", "almond milk", "banana", "honey", "almond butter"],
      servingSize: "16 fl oz",
      calories: {
      calories: "350",
      fatCal: "90",
      },
      nutrition: {
      totalFat: { name: "Total Fat", amount: "10g", percentDailyValue: "15%" },
      saturatedFat: { name: "Saturated Fat", amount: "1g", percentDailyValue: "5%" },
      transFat: { name: "Trans Fat", amount: "0g", percentDailyValue: "0%" },
      cholesterol: { name: "Cholesterol", amount: "20mg", percentDailyValue: "7%" },
      sodium: { name: "Sodium", amount: "200mg", percentDailyValue: "8%" },
      potassium: { name: "Potassium", amount: "590mg", percentDailyValue: "17%" },
      totalCarbs: { name: "Total Carbs", amount: "44g", percentDailyValue: "15%" },
      dietaryFiber: { name: "Dietary Fiber", amount: "5g", percentDailyValue: "20%" },
      totalSugars: { name: "Total Sugars", amount: "27g", percentDailyValue: "" },
      protein: { name: "Protein", amount: "28g", percentDailyValue: "56%" },
      },
      mineralsVitamins: {
      vitaminA: { name: "Vitamin A", percentDailyValue: "60%" },
      vitaminC: { name: "Vitamin C", percentDailyValue: "15%" },
      calcium: { name: "Calcium", percentDailyValue: "45%" },
      iron: { name: "Iron", percentDailyValue: "10%" },
      potassium: { name: "Potassium", percentDailyValue: "17%" },
      },
      allergens: ["tree nuts"],
      dietaryRestrictions: ["Vegetarian", "Gluten-Free"],
      image: "smoothie_vanilla_almond.png"
      }
  ],
  "Meal Smoothies" : [
    {
    name: "Green Powerhouse",
    price: { small: 6.99, medium: 7.99, large: 8.99 },
    description: "This nutritious and filling smoothie is packed with a variety of veggies and fruits to give you all the vitamins and minerals you need in one meal.",
    ingredients: ["spinach", "kale", "banana", "apple", "avocado", "whey protein", "coconut water"],
    servingSize: "16 fl oz",
    calories: {
    calories: "350",
    fatCal: "90",
    },
    nutrition: {
    totalFat: { name: "Total Fat", amount: "10g", percentDailyValue: "15%" },
    saturatedFat: { name: "Saturated Fat", amount: "3g", percentDailyValue: "15%" },
    transFat: { name: "Trans Fat", amount: "0g", percentDailyValue: "0%" },
    cholesterol: { name: "Cholesterol", amount: "25mg", percentDailyValue: "8%" },
    sodium: { name: "Sodium", amount: "170mg", percentDailyValue: "7%" },
    totalCarbs: { name: "Total Carbs", amount: "50g", percentDailyValue: "17%" },
    dietaryFiber: { name: "Dietary Fiber", amount: "10g", percentDailyValue: "40%" },
    totalSugars: { name: "Total Sugars", amount: "28g", percentDailyValue: "" },
    protein: { name: "Protein", amount: "25g", percentDailyValue: "50%" },
    },
    mineralsVitamins: {
    vitaminA: { name: "Vitamin A", percentDailyValue: "180%" },
    vitaminC: { name: "Vitamin C", percentDailyValue: "220%" },
    calcium: { name: "Calcium", percentDailyValue: "25%" },
    iron: { name: "Iron", percentDailyValue: "20%" },
    potassium: { name: "Potassium", percentDailyValue: "30%" },
    },
    allergens: ["none"],
    dietaryRestrictions: ["Gluten-Free", "Vegetarian", "Low-Sugar"],
    image: "smoothie_kale.png"
    },
    {
        name: "Berry Blast",
        price: { small: 7.99, medium: 8.99, large: 9.99 },
        description: "This fruity smoothie is a delicious and healthy meal replacement, packed with berries and other superfoods.",
        ingredients: ["mixed berries", "banana", "chia seeds", "almond butter", "vanilla protein powder", "coconut milk"],
        servingSize: "16 fl oz",
        calories: {
          calories: "400",
          fatCal: "150",
        },
        nutrition: {
          totalFat: { name: "Total Fat", amount: "16g", percentDailyValue: "25%" },
          saturatedFat: { name: "Saturated Fat", amount: "2g", percentDailyValue: "10%" },
          transFat: { name: "Trans Fat", amount: "0g", percentDailyValue: "0%" },
          cholesterol: { name: "Cholesterol", amount: "0mg", percentDailyValue: "0%" },
          sodium: { name: "Sodium", amount: "180mg", percentDailyValue: "8%" },
          totalCarbs: { name: "Total Carbs", amount: "55g", percentDailyValue: "18%" },
          dietaryFiber: { name: "Dietary Fiber", amount: "16g", percentDailyValue: "64%" },
          totalSugars: { name: "Total Sugars", amount: "28g", percentDailyValue: "" },
          protein: { name: "Protein", amount: "25g", percentDailyValue: "50%" },
        },
        mineralsVitamins: {
          vitaminA: { name: "Vitamin A", percentDailyValue: "0%" },
          vitaminC: { name: "Vitamin C", percentDailyValue: "80%" },
          calcium: { name: "Calcium", percentDailyValue: "35%" },
          iron: { name: "Iron", percentDailyValue: "25%" },
          potassium: { name: "Potassium", percentDailyValue: "30%" },
        },
        allergens: ["tree nuts"],
        dietaryRestrictions: ["Gluten-Free", "Vegetarian", "Low-Sugar", "Paleo"],
        image: "smoothie_berry.png"
      }
    ],
    "Custom Smoothies": [
      {
        name: "Create Your Own",
        price: { small: 7.99, medium: 8.99, large: 9.99 },
        description: "Put whatever you want in it.",
        ingredients: [ 
          "ice",
          "mixed berries", 
          "banana", 
          "chia seeds", 
          "almond butter", 
          "vanilla protein powder", 
          "coconut milk", 
          "spinach", 
          "kale", 
          "apple", 
          "avocado", 
          "whey protein", 
          "coconut water"
        ],          servingSize: "16 fl oz",
        calories: {
          calories: "400",
          fatCal: "150",
        },
        nutrition: {
          totalFat: { name: "Total Fat", amount: "16g", percentDailyValue: "25%" },
          saturatedFat: { name: "Saturated Fat", amount: "2g", percentDailyValue: "10%" },
          transFat: { name: "Trans Fat", amount: "0g", percentDailyValue: "0%" },
          cholesterol: { name: "Cholesterol", amount: "0mg", percentDailyValue: "0%" },
          sodium: { name: "Sodium", amount: "180mg", percentDailyValue: "8%" },
          totalCarbs: { name: "Total Carbs", amount: "55g", percentDailyValue: "18%" },
          dietaryFiber: { name: "Dietary Fiber", amount: "16g", percentDailyValue: "64%" },
          totalSugars: { name: "Total Sugars", amount: "28g", percentDailyValue: "" },
          protein: { name: "Protein", amount: "25g", percentDailyValue: "50%" },
        },
        mineralsVitamins: {
          vitaminA: { name: "Vitamin A", percentDailyValue: "0%" },
          vitaminC: { name: "Vitamin C", percentDailyValue: "80%" },
          calcium: { name: "Calcium", percentDailyValue: "35%" },
          iron: { name: "Iron", percentDailyValue: "25%" },
          potassium: { name: "Potassium", percentDailyValue: "30%" },
        },
        allergens: ["tree nuts"],
        dietaryRestrictions: ["Gluten-Free", "Vegetarian", "Low-Sugar", "Paleo"],
        image: "smoothie_banana_berry.png"
      }
      ]
}
//const smoothieList = generateSmoothieList(categories);
//
console.log(smoothies);

const fruitSmoothies = smoothies["Fruit Smoothies"];
const fruitTable = document.getElementById('fruit-items');
renderCart(fruitSmoothies, fruitTable)

const greenSmoothies = smoothies["Green Smoothies"];
const greenTable = document.getElementById('green-items');
renderCart(greenSmoothies, greenTable)

const proteinSmoothies = smoothies["Protein Smoothies"];
const proteinTable = document.getElementById('protein-items');
renderCart(proteinSmoothies, proteinTable)

const mealSmoothies = smoothies["Meal Smoothies"];
const mealTable = document.getElementById('meal-items');
renderCart(mealSmoothies, mealTable)

const customSmoothies = smoothies["Custom Smoothies"];
const customTable = document.getElementById('custom-items');
renderCart(customSmoothies, customTable)

function renderCart(lst, tbody){
  let count = 0;

  // Iterate over each item in the cart
  lst.forEach((item, index) => {
    count++;

    // Create a new table row for the item
    const newRow = document.createElement('tr');
    // Create a new table row for the item
    newRow.id = `cart-item-${index}`;

    // Add a CSS class to the new row
    newRow.classList.add('cart-item-row');

    // Create a new table cell for the item image
    const imageCell = document.createElement('td');
    const imageContainer = document.createElement('div');
    imageContainer.classList.add('cart-item');

    const imageElement = document.createElement('img');
    imageElement.src = item.image;
    imageElement.alt = item.name;
    imageElement.classList.add('item-image');
    imageContainer.appendChild(imageElement);

    // Create a new table cell for the item name
    const nameContainer = document.createElement('div');
    nameContainer.classList.add('name-container');

    // Create a new table cell for the item name
    const nameElement = document.createElement('h3');
    nameElement.classList.add('item-name');
    nameElement.textContent = item.name;
    nameContainer.appendChild(nameElement);
    imageContainer.appendChild(nameContainer);
    
    const nameUnderline = document.createElement('hr');
    nameUnderline.classList.add('name-underline');
    imageContainer.appendChild(nameUnderline);

    const sizePriceContainer = document.createElement('div');
    sizePriceContainer.classList.add('size-price-container');

    // Create a new table cell for the item size
    const sizeElement = document.createElement('p');
    sizeElement.classList.add('item-size');
    sizeElement.textContent = "Medium: ";
    sizePriceContainer.appendChild(sizeElement);

    // Create a new span element for the item price
    const priceElement = document.createElement('span');
    priceElement.classList.add('item-price');
    priceElement.textContent = '$' + item.price.medium;
    sizePriceContainer.appendChild(priceElement);


    // Append the size element to the image container
    imageContainer.appendChild(sizePriceContainer);

    // Create a new table cell for the item name
    const descriptionContainer = document.createElement('div');
    descriptionContainer.classList.add('description-container');

    // Create a new table cell for the item price
    const description = document.createElement('p');
    description.classList.add('item-description');
    description.textContent = item.description;
    descriptionContainer.appendChild(description);
    imageContainer.appendChild(descriptionContainer);
    description.style.fontSize = '12px';

    const buttonCell = document.createElement('td');



    // // Create a new table cell for the add to cart button
    // const infoButton = document.createElement('button');
    // infoButton.classList.add('info-button');
    // infoButton.textContent = 'Info';
    // infoButton.addEventListener('click', () => {
      // console.log('Info button clicked');
    // });
    // buttonCell.appendChild(infoButton);
	
	
	
	
	//**************************************************************//
	const infoButton = document.createElement('button');
	infoButton.classList.add('info-button');
	infoButton.textContent = 'Nutrition Facts';

	const hiddenNutritionContainer = document.createElement('div');
hiddenNutritionContainer.classList.add('hidden-nutrition');
hiddenNutritionContainer.style.display = 'none';

const nutritionTitle = document.createElement('h3');
nutritionTitle.textContent = 'Nutrition Facts';
hiddenNutritionContainer.appendChild(nutritionTitle);

const nutritionInfo = document.createElement('div');
nutritionInfo.classList.add('nutrition-info');

const servingSize = document.createElement('p');
servingSize.classList.add('serving-size');
servingSize.textContent = 'Serving Size ' + item.servingSize;
nutritionInfo.appendChild(servingSize);

const servingSizeLine = document.createElement('hr');
servingSizeLine.classList.add('serving-size-line');
nutritionInfo.appendChild(servingSizeLine);

const amountPerServing = document.createElement('p');
amountPerServing.innerHTML = 'Amount per Serving';
nutritionInfo.appendChild(amountPerServing);
amountPerServing.style.fontSize = '12px';

const calories = document.createElement('p');
calories.classList.add('calories-info');
calories.innerHTML = 'Calories ' + item.calories.calories + '<span class="percent-dv">Fat Cal ' + item.calories.fatCal + '</span>';
nutritionInfo.appendChild(calories);

const servingSizeLine2 = document.createElement('hr');
servingSizeLine2.classList.add('serving-size-line');
nutritionInfo.appendChild(servingSizeLine2);

const percentDailyValueLabel = document.createElement('p');
percentDailyValueLabel.innerHTML = '%Daily Value';
nutritionInfo.appendChild(percentDailyValueLabel);
percentDailyValueLabel.style.fontSize = '12px';
percentDailyValueLabel.style.textAlign = 'right';

for (nutrient in item.nutrition){
  const nutrientName = item.nutrition[nutrient].name;
  const nutrientValue = item.nutrition[nutrient].amount;
  const dailyValue = item.nutrition[nutrient].percentDailyValue;
  const dailyValueText = dailyValue ?  dailyValue : '';
  nutritionInfo.innerHTML += '<p>'+nutrientName+': '+ nutrientValue +'<span class="percent-dv">'+dailyValueText+'</span></p>';
}

hiddenNutritionContainer.appendChild(nutritionInfo);

const servingSizeLine3 = document.createElement('hr');
servingSizeLine3.classList.add('serving-size-line');
nutritionInfo.appendChild(servingSizeLine3);

for (object in item.mineralsVitamins){
  const mineralViatminName = item.mineralsVitamins[object].name;
  const mineralViatminNamePercent = item.mineralsVitamins[object].percentDailyValue;
  nutritionInfo.innerHTML += '<p>'+mineralViatminName+': '+'<span class="percent-dv">'+mineralViatminNamePercent+'</span></p>'
}

const servingSizeLine4 = document.createElement('hr');
servingSizeLine4.classList.add('serving-size-line');
nutritionInfo.appendChild(servingSizeLine4);

const allergens = document.createElement('p');
allergens.classList.add('allergen-info');
allergens.innerHTML = 'Allergens: ' + item.allergens;
nutritionInfo.appendChild(allergens);

const dietaryRestrictions = document.createElement('p');
dietaryRestrictions.classList.add('allergen-info');
dietaryRestrictions.innerHTML = 'Dietary Restrictions:  ' + item.dietaryRestrictions;
nutritionInfo.appendChild(dietaryRestrictions);



let isOpen = false;

infoButton.addEventListener('click', (event) => {
  event.stopPropagation();
  isOpen = !isOpen;
  hiddenNutritionContainer.style.display = isOpen ? 'block' : 'none';
});

hiddenNutritionContainer.addEventListener('click', (event) => {
  event.stopPropagation();
});

buttonCell.appendChild(infoButton);
buttonCell.appendChild(hiddenNutritionContainer);
	//**************************************************************//






    // Create a new table cell for the add to cart button
    const addButton = document.createElement('button');
    addButton.classList.add('add-to-cart-button');
    addButton.textContent = 'Add to cart';
    addButton.addEventListener('click', (event) => {
      addToCart(event)
    })
    // Append the add to cart button to the image container
    buttonCell.appendChild(addButton);

    newRow.appendChild(buttonCell);
    imageContainer.appendChild(buttonCell);

    imageCell.appendChild(imageContainer);
    newRow.appendChild(imageCell);
     // Append button cell to the table row
    tbody.appendChild(newRow);

    // Create a container for the hidden options
    // const hiddenNutritionContainer = document.createElement('div');
    // hiddenNutritionContainer.classList.add('hidden-nutrition');

    // const nutritionInfo = document.createElement('div');
    // nutritionInfo.classList.add('nutrition-info');
    // nutritionInfo.innerHTML = `
      // <p>${item.nutrition}</p>

    // `;
    // hiddenNutritionContainer.appendChild(nutritionInfo);

    // infoButton.addEventListener('click', () => {
      // hiddenNutritionContainer.classList.toggle('show');
    // });


// Create a container for the hidden options
const hiddenOptionsContainer = document.createElement('div');
hiddenOptionsContainer.classList.add('hidden-options');

        
        
// Add the hidden options to the container
const sizeOptions = document.createElement('div');
sizeOptions.classList.add('size-options');
sizeOptions.innerHTML = `
  <label>
    <input type="radio" name="size-${index}-${item.name}" value="small" data-index="${index}">
    Small&nbsp&nbsp&nbsp&nbsp&nbsp (8oz)&nbsp&nbsp&nbsp&nbsp&nbsp $${item.price.small}
  </label>
  <label>
    <input type="radio" name="size-${index}-${item.name}" value="medium" data-index="${index}" checked>
    Medium&nbsp (12oz)&nbsp&nbsp&nbsp $${item.price.medium}
  </label>
  <label>
    <input type="radio" name="size-${index}-${item.name}" value="large" data-index="${index}">
    Large&nbsp&nbsp&nbsp&nbsp (16oz)&nbsp&nbsp&nbsp&nbsp $${item.price.large}
  </label>
`;
hiddenOptionsContainer.appendChild(sizeOptions);

const sizeRadioButtons = document.querySelectorAll('.size-options input[type="radio"]');
//sizeRadioButtons.forEach(radioButton => {
 // if (radioButton.value === "medium") {
  //  radioButton.checked = true;
 // }


   // });

    // TODO Add an event listener to each size radio button that updates the item'S priceElement
    // Add event listener to size options
    sizeOptions.addEventListener('change', event => {
      const radio = event.target;
      const value = radio.value;
      const size = radio.parentNode.textContent.split('(')[0].trim();
      const newPrice = item.price[value];
      // sizeElement.textContent = size+ ':';
      // Update the price element text content

      sizeElement.textContent = size+ ':';
      priceElement.textContent = '$' + newPrice;
    });

//addRadioListeners();


        
        const smoothieOptions = document.createElement('div');
        smoothieOptions.classList.add('smoothie-options');

        const ingredientHeader = document.createElement('div');
        ingredientHeader.classList.add('ingredient-header');
        ingredientHeader.innerHTML = `
          <p style = "font-style: bold; font-size: 13px; position: absolute;top: 0">Ingredients&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspAmount</p>
          <p style="font-size: 10px;  margin-bottom: 0px;">
          &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspNone&nbsp&nbspLess&nbsp&nbspAvg&nbsp&nbspMore
          </p>
          `;
        smoothieOptions.appendChild(ingredientHeader);
        
        for(const ingredient of item.ingredients) {
          
          const ingredientCheckbox = document.createElement('div');
          ingredientCheckbox.classList.add('ingredient-checkbox');

          // const averageQuantityRadio = document.createElement('input');
          // averageQuantityRadio.type = "radio";
          // averageQuantityRadio.name = `${ingredient}-quantity-${index}-${ingredientCount}`;
          // averageQuantityRadio.value = "average";
          // averageQuantityRadio.checked = true;

          ingredientCheckbox.innerHTML = `

            <label>
              ${ingredient}
            </label>
            <div class="ingredient-options-quantity">
              <label>
                <input type="radio" name="${ingredient}-quantity-${index}-${item.name}" value="none">
              </label>
              <label>
                <input type="radio" name="${ingredient}-quantity-${index}-${item.name}" value="less">
              </label>
              <label>
                <input type="radio" name="${ingredient}-quantity-${index}-${item.name}" value="average" checked>
              </label>
              <label>
                <input type="radio" name="${ingredient}-quantity-${index}-${item.name}" value="more">
              </label>
            </div>
          `;
          // ingredientCheckbox.querySelector(`input[name="${ingredient}-quantity-${index}-${ingredientCount}"][value="average"]`).checked = true;
          
          smoothieOptions.appendChild(ingredientCheckbox);
        }
           
        hiddenOptionsContainer.appendChild(smoothieOptions);

        // Add the pull-down button to the cart item
        const pullDownButton = document.createElement('button');
        pullDownButton.innerHTML = 'sizes & fixings'; // Add the HTML entity for the down arrow
        pullDownButton.classList.add('pull-down-button');
        pullDownButton.addEventListener('click', function() {
        // Toggle the "show" class on the hidden options container
        hiddenOptionsContainer.classList.toggle('show');

        // Toggle the "move-down" class on the cart item row to expand or collapse the pull-down options
});
  
    
        // Add the pull-down button and the hidden options container to the cart item
        imageContainer.appendChild(pullDownButton);
    //        imageContainer.appendChild(document.createElement("br")); // add a line break before hiddenOptionsContainer
        newRow.appendChild(imageContainer)
        newRow.appendChild(hiddenOptionsContainer);
        newRow.appendChild(hiddenNutritionContainer);

  });
  }

const cartCountElement = document.querySelector('.cart-count');
let cartCount = localStorage.getItem('cartCount') || 0;
cartCountElement.textContent = cartCount;
const cart = JSON.parse(localStorage.getItem('cart') || '[]');

function addToCart(event) {
  cartCount++;
  cartCountElement.textContent = cartCount;
  localStorage.setItem('cartCount', cartCount);
  
  // Get the clicked button element
  const button = event.target;

  // Get the parent table row of the button element
  const cartItemRow = button.parentElement.parentElement.parentElement;

  // Get the name and price of the item from the table row
  const itemName = cartItemRow.querySelector('.item-name').textContent;
  const itemSize = cartItemRow.querySelector('.item-size').textContent.trim().replace(/:\s*$/, '');
  const itemPrice = cartItemRow.querySelector('.item-price').textContent;
  const itemImage = cartItemRow.querySelector('.item-image').src;

  // Get all the ingredient options for the item
  const ingredientOptions = cartItemRow.querySelectorAll(`.ingredient-checkbox input[type="radio"]:checked`);

  // Create an empty object to hold the ingredient quantities
  const ingredientQuantities = {};

  // Loop through each ingredient option and add its value to the ingredientQuantities object
  ingredientOptions.forEach(option => {
    const ingredient = option.name.split('-')[0];
    const quantity = option.value;
    ingredientQuantities[ingredient] = quantity;
  });

  // Find the corresponding smoothie object
  let smoothie;
  for (const category in smoothies) {
    for (const item of smoothies[category]) {
      if (item.name === itemName) {
        smoothie = item;
        break;
      }
    }
  }

  // Create a new cart item object with the name and price
  const cartItem = {
    name: itemName,
    size: itemSize,
    price: parseFloat(itemPrice.substring(1)),
    image: itemImage,
    ingredients: ingredientQuantities,
    cartSmoothieObject: smoothie
  };
  cart.push(cartItem);
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCart();
  animateAddToCartImage(cartItemRow);


console.log('Added item to cart:', cartItem);
}

// Select the total price element
const totalPriceElement = document.getElementById('$' + 'total-price-value');

function calculateTotalPrice() {
  let totalPrice = 0;
  cart.forEach(item => {
    let price = item.price;
    if (isNaN(price)) {
      price = parseFloat(price.slice(1)); // Convert price string to number
    }
    totalPrice += price;
  });
  const totalPriceElement = document.getElementById('total-price-value');
  totalPriceElement.textContent = `$${totalPrice}`; // Update the text content of the element to display the updated total price
  return totalPrice.toFixed(2);
}

function animateAddToCartImage(cartItemRow){
  // Animate the image
  const itemImageAnimate = cartItemRow.querySelector('.item-image');
  const clonedImage = itemImageAnimate.cloneNode(true);

  // Get the position of the cloned image relative to the document
  const imageRect = itemImageAnimate.getBoundingClientRect();
  const imageX = imageRect.left + window.scrollX;
  const imageY = imageRect.top + window.scrollY;

  // Set the position of the cloned image
  clonedImage.style.position = 'absolute';
  clonedImage.style.top = imageY + 'px';
  clonedImage.style.left = imageX + 'px';

  // Add the cloned image to the parent container
  document.body.appendChild(clonedImage);

  // Animate the cloned image
  clonedImage.classList.add('animateAddToCartImage');

  // Set the position of the cloned image to be the same as the original item image
  clonedImage.style.position = 'absolute';
  clonedImage.style.top = imageY + 'px';
  clonedImage.style.left = imageX + 'px';

  // Set custom properties on the cloned image element
  clonedImage.style.setProperty('--item-x', imageX + 'px');
  clonedImage.style.setProperty('--item-y', imageY + 'px');

  // Get the position of the cart-count element relative to the document
  const cartCountRect = document.querySelector('.cart-count').getBoundingClientRect();
  const cartCountX = cartCountRect.left + window.scrollX;
  const cartCountY = cartCountRect.top + window.scrollY;

  // Set custom properties on the :root element
  document.documentElement.style.setProperty('--cart-count-x', cartCountX + 'px');
  document.documentElement.style.setProperty('--cart-count-y', cartCountY + 'px');

  // Animate the cloned image to the cart-count position
  clonedImage.style.animationName = 'move-to-cart-count';
  clonedImage.style.animationDuration = '0.5s';
  clonedImage.style.animationFillMode = 'forwards';

  // Remove the cloned image when the animation is complete
  clonedImage.addEventListener('animationend', () => {
    document.body.removeChild(clonedImage);
  });
}

function updateCart() {
  // ... code to update cart items display ...

  // Update total price in navbar
  const totalPriceElement = document.getElementById('total-price-value');
  totalPriceElement.textContent = '$' + calculateTotalPrice();

  // Update cart count in navbar
  const cartCountElement = document.querySelector('.cart-count');
  let cartCount = cart.length;
  cartCountElement.textContent = cartCount;
  localStorage.setItem('cartCount', cartCount);

}
function addRadioListeners() {
  const sizeRadios = document.querySelectorAll('.smoothie input[type="radio"]');
  sizeRadios.forEach(radio => {
    radio.addEventListener('change', updatePrice);
  });
}

function updatePrice(event) {
  const priceElement = event.target.closest('.smoothie').querySelector('.price');
  const size = event.target.value;
  const smoothieName = event.target.closest('.smoothie').querySelector('h2').textContent;
  const smoothie = smoothies["Fruit Smoothies"].find(s => s.name === smoothieName);
  const price = smoothie.price[size];
  priceElement.textContent = `$$}`;
}