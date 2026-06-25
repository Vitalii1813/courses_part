import React, { useState } from 'react';
import { TrendingUp, Users, Target, Award, BookOpen, Play, Star } from 'lucide-react';

export default function SalesPage() {
  const [selectedCourse, setSelectedCourse] = useState(null);

  const courses = [
    {
      id: 1,
      title: 'Sales Fundamentals',
      description: 'Master the core principles of modern sales',
      instructor: 'Sarah Johnson',
      rating: 4.8,
      students: 2340,
      duration: '4 weeks',
      level: 'Beginner',
      price: '$49',
      image: '📊',
    },
    {
      id: 2,
      title: 'Advanced Negotiation',
      description: 'Close deals with confidence and strategic skills',
      instructor: 'Michael Chen',
      rating: 4.9,
      students: 1890,
      duration: '5 weeks',
      level: 'Intermediate',
      price: '$79',
      image: '🤝',
    },
    {
      id: 3,
      title: 'Customer Relationship Management',
      description: 'Build lasting relationships that drive growth',
      instructor: 'Emma Wilson',
      rating: 4.7,
      students: 1560,
      duration: '6 weeks',
      level: 'Intermediate',
      price: '$89',
      image: '❤️',
    },
    {
      id: 4,
      title: 'Digital Sales Strategies',
      description: 'Leverage modern tools for B2B and B2C sales',
      instructor: 'Alex Martinez',
      rating: 4.9,
      students: 3120,
      duration: '4 weeks',
      level: 'Advanced',
      price: '$99',
      image: '💻',
    },
  ];

  const stats = [
    { icon: Users, label: 'Active Learners', value: '50K+' },
    { icon: Award, label: 'Certifications', value: '15K+' },
    { icon: TrendingUp, label: 'Success Rate', value: '94%' },
    { icon: BookOpen, label: 'Courses', value: '25+' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Target className="w-8 h-8 text-indigo-600" />
              <h1 className="text-2xl font-bold text-gray-900">Sales Academy</h1>
            </div>
            <button className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
              Sign In
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Master Modern Sales Excellence
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Learn from industry experts and transform your sales career with hands-on courses, real-world strategies, and certifications.
          </p>
          <button className="inline-flex items-center space-x-2 px-8 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition font-medium">
            <Play className="w-5 h-5" />
            <span>Start Learning Today</span>
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition">
                <Icon className="w-8 h-8 text-indigo-600 mb-4" />
                <p className="text-gray-600 text-sm font-medium mb-2">{stat.label}</p>
                <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Courses Section */}
      <section className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Featured Courses</h3>
          <p className="text-gray-600">Curated learning paths for sales professionals at every level</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course) => (
            <div
              key={course.id}
              onClick={() => setSelectedCourse(course.id)}
              className={`bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition cursor-pointer transform hover:-translate-y-1 ${
                selectedCourse === course.id ? 'ring-2 ring-indigo-600' : ''
              }`}
            >
              <div className="p-6">
                <div className="text-5xl mb-4">{course.image}</div>
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full mb-3">
                  {course.level}
                </span>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{course.title}</h4>
                <p className="text-sm text-gray-600 mb-4">{course.description}</p>

                <div className="border-t border-gray-100 pt-4 mb-4">
                  <p className="text-xs text-gray-500 mb-3">Instructor: {course.instructor}</p>
                  <div className="flex items-center justify-between text-xs text-gray-600 mb-3">
                    <span className="flex items-center">
                      <Star className="w-3 h-3 fill-yellow-400 text-yellow-400 mr-1" />
                      {course.rating}
                    </span>
                    <span>{course.students} students</span>
                  </div>
                  <p className="text-gray-500">{course.duration}</p>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-gray-900">{course.price}</span>
                  <button className="px-4 py-2 bg-indigo-600 text-white text-sm rounded-lg hover:bg-indigo-700 transition">
                    Enroll
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 mb-8">
        <div className="bg-gradient-to-r from-indigo-600 to-blue-600 rounded-lg p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Advance Your Sales Career?</h3>
          <p className="text-lg mb-8 opacity-90">
            Join thousands of sales professionals who have transformed their careers with our courses.
          </p>
          <button className="px-8 py-3 bg-white text-indigo-600 rounded-lg font-semibold hover:bg-gray-100 transition">
            Explore All Courses
          </button>
        </div>
      </section>
    </div>
  );
}