 const products = [
  {
    "category": "Dairy & Beverages",
    "name": "Amul Milk",
    "price": 50,
    "rating": 85,
    "image": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSBL_-DmMS-H6HRoKjHdxjjldMbWeYFMWrTD0-GazvZuY4CWkVOu072JBfaAavaZKGejMYEEi1pIactixz5WqthrL2noNp1FjFEj_s7HQ2mrz9sKZ7gyrI36JcG&usqp=CAc",
    "description": "Fresh Amul milk, rich in nutrients.",
    "discount": 0,
    "discountedPrice": 50,
    "id": "1"
  },
  {
    "category": "Dairy & Beverages",
    "name": "Tropicana Orange Juice",
    "price": 120,
    "rating": 90,
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-mSIibv302UfBDrX_9hMO7HmtOHKMXhYpUw&s",
    "description": "Refreshing orange juice with no added sugar.",
    "discount": 0,
    "discountedPrice": 120,
    "id": "2"
  },
  {
    "category": "Snacks",
    "name": "Lays Chips Classic Salted",
    "price": 30,
    "rating": 80,
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSSX3RH79N1WMVi1PtE_vCCVcCS6UvfQVdjw&s",
    "description": "Crispy potato chips with a classic salted flavor.",
    "discount": 0,
    "discountedPrice": 30,
    "id": "3"
  },
  {
    "category": "Bakery & Cookies",
    "name": "Britannia Good Day Biscuits",
    "price": 40,
    "rating": 75,
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW6LDP68ET4XXHCvJq7Gwzy3k8Cs7OdB-FYA&s",
    "description": "Crunchy and delicious cookies loaded with cashews.",
    "discount": 0,
    "discountedPrice": 40,
    "id": "4"
  },
  {
    "category": "Frozen Food",
    "name": "Frozen Peas",
    "price": 90,
    "rating": 85,
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0VQ9C-3H7zEW3ql2EEu8Gt2a_A2UPK_6Rfw&s",
    "description": "Freshly frozen green peas for all your recipes.",
    "discount": 5,
    "discountedPrice": 85.5,
    "id": "5"
  },
  {
    "category": "Frozen Food",
    "name": "Chicken Nuggets",
    "price": 180,
    "rating": 92,
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_uyTu3JRSm5wSMSBweh8_Pt7n6__3Mf_ZKQ&s",
    "description": "Crispy and delicious frozen chicken nuggets.",
    "discount": 10,
    "discountedPrice": 162,
    "id": "6"
  },
  {
    "category": "Packaged Food",
    "name": "Instant Noodles",
    "price": 40,
    "rating": 88,
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3j2zOmdQi7b-UwSfdkrflRzts3_bV__X5ew&s",
    "description": "Quick and easy-to-cook instant noodles.",
    "discount": 0,
    "discountedPrice": 40,
    "id": "7"
  },
  {
    "category": "Masala & Dry Fruits",
    "name": "Almonds 500g",
    "price": 450,
    "rating": 95,
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPBsM_vcrHK4EvuSaSuOZY-OCCkZpIL8RoIg&s",
    "description": "Premium quality almonds, rich in nutrients.",
    "discount": 5,
    "discountedPrice": 427.5,
    "id": "8"
  },
  {
    "category": "Meat, Fish & Eggs",
    "name": "Fresh Chicken Breast",
    "price": 250,
    "rating": 93,
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU7_ViBpkHJh8NJuOHDGpO7qyLfyInnBqtSg&s",
    "description": "Tender and fresh chicken breast, perfect for grilling.",
    "discount": 0,
    "discountedPrice": 250,
    "id": "9"
  },
  {
    "category": "Zepto Cafe",
    "name": "Iced Latte",
    "price": 150,
    "rating": 90,
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR7Zls8rFz8y60xVlKZHiENvsjQjjK5Kn8hQ&s",
    "description": "Smooth and refreshing iced latte.",
    "discount": 0,
    "discountedPrice": 150,
    "id": "10"
  },
  {
    "category": "Frozen Food",
    "name": "Fish Fillets",
    "price": 200,
    "rating": 88,
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_fE3Y3vlq7Za2oqd-GgaNwynJgsEdEffvLQ&s",
    "description": "Fresh frozen fish fillets, ready to cook.",
    "discount": 5,
    "discountedPrice": 190,
    "id": "11"
  },
  {
    "category": "Packaged Food",
    "name": "Peanut Butter",
    "price": 180,
    "rating": 87,
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEzbBTg1Cy3L60wIYnyfaS4JXzQuHmFDUQTw&s",
    "description": "Smooth and creamy peanut butter.",
    "discount": 0,
    "discountedPrice": 180,
    "id": "12"
  },
  {
    "category": "Masala & Dry Fruits",
    "name": "Cashews 500g",
    "price": 500,
    "rating": 94,
    "image": "https://m.media-amazon.com/images/I/71DWvVOwIFL.jpg",
    "description": "High-quality cashews, perfect for snacking.",
    "discount": 5,
    "discountedPrice": 475,
    "id": "13"
  },
  {
    "category": "Meat, Fish & Eggs",
    "name": "Brown Eggs (6 pcs)",
    "price": 90,
    "rating": 92,
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxX_3b405enKsYjBwtmokXHjeJ1hG-fFsUqg&s",
    "description": "Farm fresh brown eggs, rich in protein.",
    "discount": 0,
    "discountedPrice": 90,
    "id": "14"
  },
  {
    "category": "Zepto Cafe",
    "name": "Espresso Shot",
    "price": 100,
    "rating": 89,
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6QWg55FAiPiyGuuwb7TH9WZsEiYv6QkEVVg&s",
    "description": "Strong and bold espresso shot.",
    "discount": 0,
    "discountedPrice": 100,
    "id": "15"
  }
]

export default products;