import { useState } from 'react';
import paneerTikka from './assets/paneer_tikka.png';
import oatmealImg from './assets/oatmeal.png';
import paneerRollImg from './assets/paneer_roll.jpg';

const recipes = [
  {
    id: 1,
    name: 'Paneer Tikka',
    image: paneerTikka,
    protein: '18g',
    ingredients: ['Paneer (Cottage Cheese)', 'Yogurt', 'Bell Peppers', 'Garam Masala', 'Ginger Garlic Paste', 'Lemon Juice'],
    description: 'A popular Indian appetizer made from chunks of paneer marinated in spices and grilled in a tandoor.'
  },
  {
    id: 2,
    name: 'Chana Masala',
    image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&q=80&w=800',
    protein: '15g',
    ingredients: ['Chickpeas', 'Onions', 'Tomatoes', 'Green Chilies', 'Coriander Powder', 'Amchur (Mango Powder)'],
    description: 'A protein-packed chickpea curry cooked with a blend of aromatic spices and tangy tomato base.'
  },
  {
    id: 3,
    name: 'Chicken Tikka Masala',
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&q=80&w=800',
    protein: '35g',
    ingredients: ['Chicken Breast', 'Cream', 'Tomato Puree', 'Kashmiri Red Chili', 'Kasuri Methi', 'Butter'],
    description: 'Succulent pieces of marinated chicken grilled and then tossed in a rich, creamy, and spiced tomato gravy.'
  },
  {
    id: 4,
    name: 'Soya Chunks Curry',
    image: 'https://imgs.search.brave.com/eiOYEq9jnB6Tw5gQjclMqRBS9lRhRmsjhwQIxY1h6sY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dmVncmVjaXBlc29m/aW5kaWEuY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIxLzA1/L3NveWEtY2h1bmtz/LWN1cnJ5MTYuanBn',
    protein: '42g',
    ingredients: ['Soya Chunks', 'Onion-Tomato Paste', 'Cumin Seeds', 'Turmeric', 'Coconut Milk', 'Bay Leaf'],
    description: 'A highly nutritious vegetarian dish made with soy nuggets, often called "vegetarian meat" for its high protein content.'
  },
  {
    id: 5,
    name: 'Egg Curry',
    image: 'https://imgs.search.brave.com/NzhO4OPshtGouTZu-qALRIZqh_xSGpKPm4fdtIzIXm0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9pbmRp/YW4tbWVhbC1lZ2ct/Y3VycnktbWFzYWxh/LTM3MTc4MDcwLmpw/Zw',
    protein: '13g',
    ingredients: ['Hard-boiled Eggs', 'Onions', 'Tomato Paste', 'Ginger', 'Green Chilies', 'Fresh Cilantro'],
    description: 'Classic Indian egg curry made with boiled eggs simmered in a spicy and flavorful onion-tomato gravy.'
  },
  {
    id: 6,
    name: 'Dal Tadka',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&q=80&w=800',
    protein: '12g',
    ingredients: ['Yellow Moong Dal', 'Ghee', 'Dried Red Chilies', 'Asafoetida (Hing)', 'Cumin Seeds', 'Garlic'],
    description: 'Comforting and protein-rich yellow lentils tempered with ghee, garlic, and whole spices.'
  },
  {
    id: 7,
    name: 'Fish Moilee',
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&q=80&w=800',
    protein: '28g',
    ingredients: ['Kingfish or Pomfret', 'Coconut Milk', 'Curry Leaves', 'Turmeric', 'Green Chilies', 'Black Pepper'],
    description: 'A light and fragrant Kerala-style fish curry cooked in coconut milk with subtle spices.'
  },
  {
    id: 8,
    name: 'Mutton Rogan Josh',
    image: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&q=80&w=800',
    protein: '31g',
    ingredients: ['Lamb/Mutton', 'Ratan Jot', 'Fennel Powder', 'Dry Ginger Powder', 'Curd', 'Kashmiri Chili'],
    description: 'An iconic Kashmiri lamb dish known for its intense red color and rich flavor from slow-cooked meat.'
  },
  {
    id: 9,
    name: 'Tandoori Chicken',
    image: 'https://imgs.search.brave.com/I-EPVls7F5-2yv--sKkztVOMUtRbFE0yva2arJvyUS8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/Y3JlYXRlLnZpc3Rh/LmNvbS9hcGkvbWVk/aWEvc21hbGwvMzM2/MjgxNjg4L3N0b2Nr/LXBob3RvLWNoaWNr/ZW4tdGFuZG9vcmkt/c2VydmVkLXBsYXRl',
    protein: '45g',
    ingredients: ['Chicken Drumsticks', 'Hung Curd', 'Tandoori Masala', 'Lemon', 'Mustard Oil', 'Garlic'],
    description: 'The ultimate high-protein Indian dish, chicken marinated in yogurt and spices, roasted to perfection in a tandoor.'
  },
  {
    id: 10,
    name: 'Oats Meal',
    image: oatmealImg,
    protein: '12g',
    ingredients: ['Rolled Oats', 'Skimmed Milk', 'Peanut Butter', 'Chia Seeds', 'Blueberries'],
    description: 'A healthy, high-fiber, and protein-rich breakfast bowl to kickstart your day.'
  },
  {
    id: 11,
    name: 'Paneer Kathi Roll',
    image: paneerRollImg,
    protein: '22g',
    ingredients: ['Paneer cubes', 'Whole Wheat Paratha', 'Sautéed Onions', 'Green Chutney', 'Chaat Masala'],
    description: 'Spiced paneer chunks wrapped in a soft paratha with crunchy onions and tangy chutney.'
  },
  {
    id: 12,
    name: 'Grilled Chicken Breast',
    image: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&q=80&w=800',
    protein: '31g',
    ingredients: ['Chicken Breast', 'Lemon Juice', 'Garlic', 'Black Pepper', 'Olive Oil', 'Fresh Thyme'],
    description: 'Lean and tender grilled chicken breast, perfect for a clean and high-protein diet.'
  }
];

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeRecipeId, setActiveRecipeId] = useState(null);

  const filteredRecipes = recipes.filter(recipe =>
    recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-emerald-50 text-gray-900 p-8 font-sans transition-colors duration-500">
      <div className="max-w-6xl mx-auto">
        <header className="mb-12 text-center">
          <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-emerald-600 to-teal-700 bg-clip-text text-transparent">
            Find Your Protein
          </h1>
          <p className="text-emerald-700 text-lg font-medium">Discover and manage your favorite recipes</p>
        </header>

        {/* Search Bar */}
        <div className="mb-12 max-w-md mx-auto">
          <div className="relative">
            <input type="text" placeholder="Search recipes..." className="w-full bg-white border border-emerald-100 rounded-2xl py-3 px-6 pl-12 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all shadow-md text-lg text-gray-800 placeholder-emerald-300" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
            <svg className="absolute left-4 top-3.5 h-6 w-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRecipes.map((recipe) => (
            <div
              key={recipe.id}
              className="bg-white rounded-2xl overflow-hidden border border-emerald-50 transition-all hover:border-emerald-300 hover:shadow-[0_10px_30px_rgba(16,185,129,0.1)] group shadow-sm"
            >
              <div className="h-48 overflow-hidden">
                <img src={recipe.image} alt={recipe.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h2 className="text-2xl font-bold text-gray-800 group-hover:text-emerald-600 transition-colors">
                    {recipe.name}
                  </h2>
                  <span className="bg-emerald-100 text-emerald-700 text-xs font-bold px-2 py-1 rounded-lg border border-emerald-200">
                    {recipe.protein} Protein
                  </span>
                </div>
                <p className="text-gray-500 text-sm mb-4 line-clamp-2">
                  {recipe.description}
                </p>
                {/* show details button */}
                <button
                  onClick={() => setActiveRecipeId(activeRecipeId === recipe.id ? null : recipe.id)}
                  className="w-full bg-emerald-50 hover:bg-emerald-600 hover:text-white text-emerald-700 font-semibold py-2 px-4 rounded-xl transition-all focus:outline-none border border-emerald-100"
                >
                  {activeRecipeId === recipe.id ? 'Hide Details' : 'View Details'}
                </button>

                {/* Conditional Rendering: Ingredients */}
                {activeRecipeId === recipe.id && (
                  <div className="mt-6 p-4 bg-emerald-50/50 rounded-xl border border-emerald-100 animate-in fade-in slide-in-from-top-2 duration-300">
                    <h3 className="text-emerald-600 font-bold mb-2 text-sm uppercase tracking-wider">
                      Ingredients
                    </h3>
                    <ul className="space-y-1">
                      {recipe.ingredients.map((ingredient, idx) => (
                        <li key={idx} className="text-gray-700 text-sm flex items-center">
                          <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-2"></span>
                          {ingredient}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {filteredRecipes.length === 0 && (
          <div className="text-center py-20">
            <p className="text-emerald-800/50 text-xl italic font-medium">No recipes found matching "{searchTerm}"</p>
          </div>
        )}
      </div>

      <footer className="text-center p-2 m-10 bg-emerald-100 text-emerald-700 font-medium ">Made by Ashish Bhardwaj </footer>
    </div>
  );
}

export default App;
