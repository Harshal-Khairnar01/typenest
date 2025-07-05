

import { CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function FeaturesPage() {
  return (
    <div className="min-h-screen  text-white">
     
      <section className="py-20 px-4 text-center bg-gradient-to-br from-gray-900 to-black">
        <h1 className="text-5xl font-extrabold tracking-tight text-white mb-4">
          Discover the Power of <span className="text-blue-400">Typenest</span>
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Typenest isn't just a CMS; it's your complete solution for effortless content creation, management, and distribution. Dive into our features designed to empower your workflow.
        </p>
        <div className="mt-8">
          <Link href="/sign-in" passHref>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-4 rounded-lg shadow-lg">
              Get Started with Typenest
            </Button>
          </Link>
        </div>
      </section>

    
      <section className="py-16 px-4 text-center bg-gray-900">
        <h2 className="text-4xl font-bold text-white mb-6">
          Who Can Benefit from Typenest?
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div className="flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-md">
            <CheckCircle size={32} className="text-green-400 mb-3" />
            <h4 className="text-xl font-semibold text-white mb-2">Bloggers & Writers</h4>
            <p className="text-gray-300">Focus on writing, not on technicalities.</p>
          </div>
          <div className="flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-md">
            <CheckCircle size={32} className="text-green-400 mb-3" />
            <h4 className="text-xl font-semibold text-white mb-2">Marketing Teams</h4>
            <p className="text-gray-300">Accelerate campaigns with dynamic content.</p>
          </div>
          <div className="flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-md">
            <CheckCircle size={32} className="text-green-400 mb-3" />
            <h4 className="text-xl font-semibold text-white mb-2">Small Businesses</h4>
            <p className="text-gray-300">Establish a powerful online presence affordably.</p>
          </div>
          <div className="flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-md">
            <CheckCircle size={32} className="text-green-400 mb-3" />
            <h4 className="text-xl font-semibold text-white mb-2">Developers</h4>
            <p className="text-gray-300">Headless capabilities for custom builds.</p>
          </div>
        </div>
      </section>

      
      <section className="py-20 px-4 text-center ">
        <h2 className="text-4xl font-bold text-white mb-6">
          Ready to Elevate Your Content?
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
          Join the Typenest community and experience the future of content management. Start your journey today!
        </p>
        <Link href="/sign-in" passHref>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-10 py-5 rounded-lg shadow-lg transform hover:scale-105">
            Get Started Free
          </Button>
        </Link>
      </section>
    </div>
  );
}