const data = {
  meals: [
    {
      _id: "1",
      name: "Air Fryer Crispy Chicken",
      description:
        "Enjoy legitimately fried chicken in a completely guilt-free and paleo-friendly fashion.",
      price: 12,
      ingredients: "chiken",
      dietplanName: "paleo",
      image: "/images/paleo/paleoFriedChicken.jpg",
      rating: 4.5,
    },
    {
      _id: "2",
      name: "Apple Cinnamon Paleo Fig Newtons",
      description:
        "Apples, figs, and cinnamon form the sticky sweet filling for this homemade paleo-friendly fig newton recipe.",
      price: 12,
      ingredients: "chiken",
      dietplanName: "paleo",
      image: "/images/paleo/paleoAppleCinnamonFig.jpg",
      rating: 4.5,
    },
    {
      _id: "3",
      name: "Strawberry Peach Paleo Parfait",
      description:
        "Crunchy, creamy, and fruity layers come together in this quick and easy paleo dessert. Loaded with nutritious ingredients, this dessert also makes a good breakfast.",
      price: 12,
      ingredients: "chiken",
      dietplanName: "paleo",
      image: "/images/paleo/paleoStrawPeachParfait.jpg",
      rating: 4.5,
    },
    {
      _id: "4",
      name: "Paleo Almond Butter Cups",
      description:
        "This paleo recipe provides a healthy, Paleo-friendly alternative to peanut butter cups. These are made with dark chocolate and almond butter butter instead.",
      price: 12,
      ingredients: "chiken",
      dietplanName: "paleo",
      image: "/images/paleo/paleoAlmondButterCups.jpg",
      rating: 4.5,
    },
    {
      _id: "5",
      name: "Paleo Zucchini Fritters",
      description:
        "Zucchini fritters are a great use for leftover zucchini, and can be served with eggs at breakfast or with a lemony mayo for a side dish.",
      price: 12,
      ingredients: "chiken",
      dietplanName: "paleo",
      image: "/images/paleo/paleoZucchiniFritters.jpg",
      rating: 4.5,
    },
    {
      _id: "6",
      name: "Paleo Pumpkin Bread",
      description:
        "This recipe provides a Paleo-friendly way to enjoy the wonderful flavor combination of pumpkin, cinnamon, nutmeg, and cloves.",
      price: 12,
      ingredients: "bean",
      dietplanName: "paleo",
      image: "/images/paleo/paleoPumpkinBread.jpg",
      rating: 4.5,
    },
    {
      _id: "7",
      name: "Chicken & Goat Cheese Skillet",
      description:
        "Your whole family will love this. The salsa sauce gives you a head start on this quick kid-friendly pasta dinner, and the flavor combination with cream cheese is simply addictive.",
      price: 12,
      ingredients: "bean",
      dietplanName: "keto",
      image: "/images/keto/ketoChickenGoatCheeseSkillet.jpg",
      rating: 4.5,
    },
    {
      _id: "8",
      name: "Creamy Garlic Pesto Chicken",
      description:
        "This stir-fry chicken with pesto, sun-dried tomatoes and bell peppers in a creamy garlic sauce is simply amazing.",
      price: 12,
      ingredients: "bean",
      dietplanName: "keto",
      image: "/images/keto/ketoGarlicChicken.webp",
      rating: 4.5,
    },
    {
      _id: "9",
      name: "Buttery Garlic Herb Chicken With Asparagus",
      description:
        "Calling ALL chicken lovers… This is the easy dinner recipe of your dreams! Garlic, butter, and herbs come together to flavor this golden chicken.",
      price: 12,
      ingredients: "bean",
      dietplanName: "keto",
      image: "/images/keto/ketoGarlicHerbChicken.webp",
      rating: 4.5,
    },
    {
      _id: "10",
      name: "Italian Sausage and Peppers Skillet",
      description:
        "Easy and full of flavor! This Italian American street-food classic is so delish: cooked with Italian sausages, bell peppers and tomato, and flavored with fennel and basil.",
      price: 12,
      ingredients: "bean",
      dietplanName: "keto",
      image: "/images/keto/ketoItalianSausageAndPeppers.webp",
      rating: 4.5,
    },
    {
      _id: "11",
      name: "Baked Spaghetti Squash with Lemon Garlic Sauce",
      description:
        "Baked spaghetti squash strands are tossed with a fragrant lemon garlic butter sauce and sprinkled with Parmesan for a cheesy note",
      price: 12,
      ingredients: "bean",
      dietplanName: "keto",
      image: "/images/keto/ketoBakedSpaghettiSquash.webp",
      rating: 4.5,
    },
    {
      _id: "12",
      name: "Zucchini Noodles in Creamy Tomato Sauce",
      description:
        "Try these zucchini noodles for a low carb comfort dinner. Zucchini is quickly infused in a creamy tomato sauce flavored with onion and garlic.",
      price: 12,
      ingredients: "bean",
      dietplanName: "keto",
      image: "/images/keto/ketoZucchiniNoodles.webp",
      rating: 4.5,
    },
    {
      _id: "13",
      name: "Cheesy Green Beans Casserole",
      description:
        "A delicious side dish to enjoy for a casual dinner—Simply roast green beans with a mix of cream, garlic and herbs, top with cheese and bake until cheesy goodness!",
      price: 12,
      ingredients: "bean",
      dietplanName: "keto",
      image: "/images/keto/ketoCheesyGreenBeans.webp",
      rating: 4.5,
    },
    {
      _id: "14",
      name: "Tomato Spinach Chicken Skillet",
      description:
        "Filling, tasty and comforting, this nutritious chicken skillet recipe is a delicious protein packed dinner option and great if you are on a keto diet.",
      price: 12,
      ingredients: "bean",
      dietplanName: "keto",
      image: "/images/keto/ketoTomotaSpinachChicken.webp",
      rating: 4.5,
    },
    {
      _id: "15",
      name: "Jalapeño Popper Chicken Casserole",
      description:
        "A great chicken casserole recipe for lunch or dinner. Gluten-free, and low carb / keto diet friendly. Relish today!",
      price: 12,
      ingredients: "bean",
      dietplanName: "keto",
      image: "/images/keto/ketoJalapenoPopperChicken.webp",
      rating: 4.5,
    },
    {
      _id: "16",
      name: "Mozzarella Parmesan Chicken Casserole",
      description:
        "Seasoned chicken baked with Marinara sauce, Parmesan and mozzarella, and topped with crisp pork rind makes this delicious twist on chicken parmesan a total crowd pleaser.",
      price: 12,
      ingredients: "bean",
      dietplanName: "keto",
      image: "/images/keto/ketoMozzarellaParmesanChicken.webp",
      rating: 4.5,
    },
    {
      _id: "17",
      name: "Paleo Carrot Cake Cupcakes",
      description:
        "This classic carrot cake is transformed into individual cupcakes. Carrots, dates, and crunchy walnuts add an abundance of flavors and textures.",
      price: 12,
      ingredients: "bean",
      dietplanName: "paleo",
      image: "/images/paleo/paleoCarrotCakeCupcakes.jpg",
      rating: 4.5,
    },
  ],
};
export default data;
