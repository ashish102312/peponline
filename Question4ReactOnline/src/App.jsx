import ProfileCard from './components/ProfileCard';

function App() {
  const profileData = {
    name: "Ashish Bhardwaj",
    age: 24,
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=300",
    bio: "Passionate developer exploring React and building cool web applications. Loving the journey of learning and creating!"
  };

  return (
    <div className="min-h-screen bg-emerald-50 flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-extrabold text-emerald-800 mb-12">
        Profile Viewer
      </h1>
      
      <ProfileCard 
        name={profileData.name}
        age={profileData.age}
        image={profileData.image}
        bio={profileData.bio}
      />
      
      <footer className="mt-12 text-emerald-600 font-medium italic">
        Task 1: Simple Profile Card Completed
      </footer>
    </div>
  );
}

export default App;
