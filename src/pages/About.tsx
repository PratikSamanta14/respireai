
import React from 'react';
import { AlertTriangle, Target, Heart, TrendingUp } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            About <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">BreatheAI</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Revolutionizing respiratory healthcare through artificial intelligence and advanced audio analysis
          </p>
        </div>

        {/* Problem Statement */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <div className="bg-red-100 p-3 rounded-lg mr-4">
                <AlertTriangle className="h-8 w-8 text-red-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">The Problem</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Healthcare Challenges</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="bg-red-500 w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Early detection of respiratory diseases remains difficult and expensive
                  </li>
                  <li className="flex items-start">
                    <span className="bg-red-500 w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Limited access to specialized pulmonary testing in remote areas
                  </li>
                  <li className="flex items-start">
                    <span className="bg-red-500 w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    High costs associated with traditional diagnostic equipment
                  </li>
                  <li className="flex items-start">
                    <span className="bg-red-500 w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Delayed diagnosis leads to worsened patient outcomes
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Global Impact</h3>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="text-3xl font-bold text-red-600 mb-2">400M+</div>
                  <p className="text-gray-600 mb-4">People worldwide suffer from respiratory diseases</p>
                  
                  <div className="text-3xl font-bold text-red-600 mb-2">4M+</div>
                  <p className="text-gray-600">Annual deaths from respiratory conditions</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Solution */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <div className="bg-blue-100 p-3 rounded-lg mr-4">
                <Target className="h-8 w-8 text-blue-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Our Solution</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">BreatheAI Technology</h3>
                <p className="text-gray-600 mb-6">
                  Our innovative AI-powered platform analyzes cough and breath sounds to detect early signs of respiratory diseases, making healthcare more accessible and affordable for everyone.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="bg-green-500 w-3 h-3 rounded-full mr-3"></div>
                    <span className="text-gray-700">Non-invasive audio-based diagnosis</span>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-green-500 w-3 h-3 rounded-full mr-3"></div>
                    <span className="text-gray-700">Smartphone and web accessibility</span>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-green-500 w-3 h-3 rounded-full mr-3"></div>
                    <span className="text-gray-700">Real-time AI analysis and recommendations</span>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-green-500 w-3 h-3 rounded-full mr-3"></div>
                    <span className="text-gray-700">Cost-effective and scalable solution</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-teal-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Key Capabilities</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-700">Disease Detection</h4>
                    <p className="text-sm text-gray-600">Asthma, Bronchitis, Pneumonia, COPD</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700">Accuracy Rate</h4>
                    <p className="text-sm text-gray-600">85%+ accuracy in clinical trials</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700">Response Time</h4>
                    <p className="text-sm text-gray-600">Instant analysis in under 30 seconds</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Impact */}
        <section>
          <div className="bg-gradient-to-r from-blue-600 to-teal-500 rounded-2xl shadow-lg p-8 text-white">
            <div className="flex items-center mb-6">
              <div className="bg-white/20 p-3 rounded-lg mr-4">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold">Healthcare Impact</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <TrendingUp className="h-12 w-12 mx-auto mb-4 text-white/80" />
                <h3 className="text-xl font-semibold mb-2">Early Detection</h3>
                <p className="text-blue-100">
                  Enable early intervention and better patient outcomes through timely diagnosis
                </p>
              </div>
              
              <div className="text-center">
                <Target className="h-12 w-12 mx-auto mb-4 text-white/80" />
                <h3 className="text-xl font-semibold mb-2">Accessibility</h3>
                <p className="text-blue-100">
                  Bring advanced respiratory diagnostics to underserved and remote communities
                </p>
              </div>
              
              <div className="text-center">
                <Heart className="h-12 w-12 mx-auto mb-4 text-white/80" />
                <h3 className="text-xl font-semibold mb-2">Prevention</h3>
                <p className="text-blue-100">
                  Reduce healthcare costs through preventive care and early treatment
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
