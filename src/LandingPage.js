import React from 'react';
import { Globe, MessageCircle, Video, ChevronRight } from 'lucide-react';
import FeatureCard from './components/FeatureCard';
import TestimonialCard from './components/TestimonialCard';

export default function LandingPage() {
  return (
    <div 
      className="min-h-screen bg-gradient-to-b from-blue-50 to-green-50"
      style={{
        backgroundImage: `url('C:/Users/25666/Documents/image.jpg')`, // Replace with your actual image path
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <header className="bg-white shadow-md">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Globe className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-blue-600">WorldChat</span>
          </div>
          <div className="hidden md:flex space-x-6">
            <a href="#features" className="text-gray-600 hover:text-blue-600">Features</a>
            <a href="#about" className="text-gray-600 hover:text-blue-600">About</a>
            <a href="#community" className="text-gray-600 hover:text-blue-600">Community</a>
            <a href="#blog" className="text-gray-600 hover:text-blue-600">Blog</a>
          </div>
          <div className="flex space-x-2">
            <button className="px-4 py-2 rounded border border-blue-600 text-blue-600 bg-transparent hover:bg-blue-600 hover:text-white">Log In</button>
            <button className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-500">Sign Up</button>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-5xl font-bold mb-4 text-blue-800">Connect to the World, Instantly</h1>
          <p className="text-xl mb-8 text-gray-600">Real-time chat, language translation, and a global community at your fingertips.</p>
          <div className="flex justify-center space-x-4">
            <button className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-500">Sign Up Now</button>
            <button className="px-4 py-2 rounded border border-blue-600 text-blue-600 bg-transparent hover:bg-blue-600 hover:text-white">Learn More</button>
          </div>
          <img src="/placeholder.svg?height=400&width=800" alt="WorldChat Platform" className="mt-12 rounded-lg shadow-xl" />
        </section>

        {/* Features Section */}
        <section id="features" className="bg-white py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-blue-800">Why Choose WorldChat?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <FeatureCard
                icon={<MessageCircle className="h-12 w-12 text-blue-600" />}
                title="Instant Translation"
                description="Communicate in over 100 languages effortlessly. Break language barriers and connect with anyone, anywhere."
              />
              <FeatureCard
                icon={<Video className="h-12 w-12 text-green-600" />}
                title="Video and Text Chat"
                description="Engage in live conversations with people from all over the world. See and hear your new friends in HD quality."
              />
              <FeatureCard
                icon={<Globe className="h-12 w-12 text-purple-600" />}
                title="Global Community"
                description="Join a thriving network of individuals from diverse cultures. Expand your horizons and make lasting connections."
              />
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="bg-blue-50 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-blue-800">What Our Users Say</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <TestimonialCard
                quote="WorldChat has completely transformed how I connect with people around the globe. The instant translation feature is a game-changer!"
                author="Maria S., Spain"
              />
              <TestimonialCard
                quote="I've made friends from countries I've never even visited. WorldChat's community is truly global and welcoming."
                author="Raj P., India"
              />
              <TestimonialCard
                quote="The video chat quality is amazing, and it's so easy to use. I feel like I'm right there with my international colleagues."
                author="John D., USA"
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-blue-600 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Connect with the World?</h2>
            <p className="text-xl mb-8">Join millions of users and start your global journey today.</p>
            <button className="px-4 py-2 rounded bg-green-600 text-white hover:bg-green-500">Get Started Now</button>
          </div>
        </section>
      </main>
    </div>
  );
}
