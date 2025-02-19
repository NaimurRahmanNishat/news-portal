// pages/about.tsx
import React from 'react';
import Head from 'next/head';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <Head>
        <title>About Us - Newspaper Name</title>
        <meta name="description" content="Learn more about Newspaper Name and our mission to deliver quality news." />
      </Head>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">About Us</h1>

        <div className="bg-white shadow-lg rounded-lg p-6">
          <p className="text-gray-700 text-lg mb-4">
            Welcome to <strong>Newspaper Name</strong>, your trusted source for the latest news, in-depth analysis, and insightful commentary.
          </p>

          <p className="text-gray-700 text-lg mb-4">
            Our mission is to deliver accurate, unbiased, and timely news to our readers. We believe in the power of information to inspire change and foster understanding in our community and beyond.
          </p>

          <p className="text-gray-700 text-lg mb-4">
            Founded in <strong>2023</strong>, Newspaper Name has grown to become a leading voice in journalism. Our team of experienced reporters and editors is dedicated to upholding the highest standards of integrity and excellence.
          </p>

          <p className="text-gray-700 text-lg mb-4">
            We cover a wide range of topics, including politics, business, technology, culture, and sports. Whether you're looking for breaking news or thoughtful features, we've got you covered.
          </p>

          <p className="text-gray-700 text-lg">
            Thank you for choosing Newspaper Name. We appreciate your trust and look forward to serving you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;