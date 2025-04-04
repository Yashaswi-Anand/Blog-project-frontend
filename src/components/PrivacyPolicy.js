import { Container } from '@mui/material'
import React from 'react'

function PrivacyPolicy() {
  return (
    <Container maxWidth="lg" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'start', marginTop: '100px', marginBottom: '35px' }}>
      <div className="max-w-4xl mx-auto p-6 text-gray-800">
        <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-sm text-gray-500 mb-6">Effective Date: [Insert Date]</p>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">1. Information We Collect</h2>
          <p className="mb-2">
            We collect the following types of information:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Admin Login Data:</strong> Username and password for authentication.</li>
            <li><strong>Post Content:</strong> Created and managed by the admin.</li>
            <li><strong>Image Links:</strong> Generated using the third-party service PostImage.</li>
            <li><strong>Technical Data:</strong> IP address and browser information for security.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">2. How We Use Your Information</h2>
          <p>
            We use the information to authenticate admin access, manage blog content, securely store data using AWS RDS, and display images from PostImage. We do not sell or share your data for marketing purposes.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">3. Third-Party Services</h2>
          <p className="mb-2">
            We use the following third-party services:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>PostImage:</strong> <a href="https://postimages.org/privacy" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">Privacy Policy</a></li>
            <li><strong>AWS RDS:</strong> <a href="https://aws.amazon.com/privacy/" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">Privacy Notice</a></li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">4. Data Security</h2>
          <p>
            We implement industry-standard measures to protect your data. Admin credentials are encrypted and access is restricted.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">5. Your Rights</h2>
          <p>
            You may update your credentials, manage blog content, and request removal of stored data if applicable.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">6. Changes to This Policy</h2>
          <p>
            We may update this policy occasionally. Updates will be posted here with a new effective date.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">7. Contact Us</h2>
          <p>
            If you have questions, contact us at: <strong>[Your Email Here]</strong>
          </p>
        </section>
      </div>
    </Container>
  )
}

export default PrivacyPolicy
