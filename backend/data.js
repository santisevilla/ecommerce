import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      name: "Santiago",
      email: "admin@gmail.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: true,
    },
    {
      name: "Maincra",
      email: "user@gmail.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: false,
    },
  ],
  products: [
    {
      // _id: '1',
      name: "Nikeasdasd",
      slug: "asdasdadsad",
      category: "Shirts",
      image: "/images/remera.jpg",
      price: 120,
      stock: 0,
      brand: "Nike",
      rating: 4.5,
      numReviews: 10,
      description: "sdadasdasd",
    },
    {
      // _id: '2',
      name: "Nikesssss",
      slug: "sssssssss",
      category: "Shirts",
      image: "/images/remera.jpg",
      price: 120,
      stock: 10,
      brand: "Nike",
      rating: 3.5,
      numReviews: 10,
      description: "sdadasdasd",
    },
    {
      // _id: '3',
      name: "Nike",
      slug: "naaaaaaaaaa",
      category: "Shirts",
      image: "/images/remera.jpg",
      price: 120,
      stock: 10,
      brand: "Nike",
      rating: 4.5,
      numReviews: 10,
      description: "sdadasdasd",
    },
    {
      // _id: '4',
      name: "Nikeeeeeeeeee",
      slug: "hghghgghhgh",
      category: "Shirts",
      image: "/images/remera.jpg",
      price: 120,
      stock: 10,
      brand: "Nike",
      rating: 1.5,
      numReviews: 10,
      description: "sdadasdasd",
    },
  ],
};

export default data;
