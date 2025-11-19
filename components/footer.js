'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    alert('Thank you for subscribing!');
    setEmail('');
    setIsSubmitting(false);
  };

  const currentYear = new Date().getFullYear();

  const footerLinks = {
    about: [
      { name: 'Who We Are', href: '/about#who-we-are' },
      { name: 'Mission & Vision', href: '/about#mission-vision' },
      { name: 'Leadership Team', href: '/about#team' },
      { name: 'Partnerships', href: '/about#partnerships' },
      { name: 'Careers', href: '/careers' },
    ],
    research: [
      { name: 'Research Areas', href: '/research#areas' },
      { name: 'Publications', href: '/research#publications' },
      { name: 'Innovation Lab', href: '/innovation-lab' },
      { name: 'Submit Research', href: '/research#submit' },
      { name: 'Ongoing Projects', href: '/innovation-lab#projects' },
    ],
    education: [
      { name: 'Programs Overview', href: '/education' },
      { name: 'Research Fellowship', href: '/education#fellowship' },
      { name: 'Developer Bootcamp', href: '/education#bootcamp' },
      { name: 'Policy Masterclass', href: '/education#policy' },
      { name: 'Apply Now', href: '/education#apply' },
    ],
    resources: [
      { name: 'Latest News', href: '/publications#news' },
      { name: 'Blog', href: '/publications#insights' },
      { name: 'Events', href: '/events' },
      { name: 'Contact Us', href: '/contact' },
      { name: 'FAQ', href: '/faq' },
    ],
  };

  const socialLinks = [
    { 
      name: 'Twitter', 
      href: 'https://twitter.com/blockchainresearch', 
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      )
    },
    { 
      name: 'LinkedIn', 
      href: 'https://linkedin.com/company/blockchainresearch', 
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      )
    },
    { 
      name: 'GitHub', 
      href: 'https://github.com/blockchainresearch', 
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
        </svg>
      )
    },
    { 
      name: 'YouTube', 
      href: 'https://youtube.com/@blockchainresearch', 
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      )
    },
  ];

  return (
    <footer className="bg-[#0A1F44] text-white">
      {/* Main Footer Content */}
      <div className="container-custom section">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 section">
          {/* About Column */}
          <div className="lg:col-span-1 mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Image src="/elevate-white-logo.png" alt= "Profile Picture" width={120} height={120} />              
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Advancing blockchain research, innovation, and policy development across Africa.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 hover:bg-[#00BFA6] rounded-lg flex items-center justify-center transition-colors focus-ring"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links - About */}
          <div className='pb-8'>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
              About
            </h3>
            <ul className="space-y-3">
              {footerLinks.about.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-[#00BFA6] text-sm transition-colors focus-ring"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links - Research */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
              Research
            </h3>
            <ul className="space-y-3">
              {footerLinks.research.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-[#00BFA6] text-sm transition-colors focus-ring"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

           {/* Quick Links - Education */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
              Education
            </h3>
            <ul className="space-y-3">
              {footerLinks.education.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-[#00BFA6] text-sm transition-colors focus-ring"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links - Resources */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
              Resources
            </h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-[#00BFA6] text-sm transition-colors focus-ring"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-white/10 section">
          <div className="flex flex-col items-center justify-center gap-2">
            <h3 className="text-white font-bold text-lg">
              Stay Updated
            </h3>
            <p className="text-gray-300 text-sm mb-4">
              Subscribe to our newsletter for the latest research insights and program updates.
            </p>
            
            <form onSubmit={handleNewsletterSubmit} className="flex gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#00BFA6] focus:ring-2 focus:ring-[#00BFA6]/20 transition-all"
                required
                aria-label="Email address for newsletter"
              />
              <button 
                type="submit" 
                className="btn btn-primary whitespace-nowrap"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="spinner spinner-sm"></span>
                    <span className="sr-only">Subscribing...</span>
                  </>
                ) : (
                  'Subscribe'
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-white/10 section">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#00BFA6] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <div className="font-semibold text-white mb-1">Address</div>
                  <div className="text-gray-300">
                    123 Innovation Drive<br />
                    Ibadan, Oyo State<br />
                    Nigeria
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#00BFA6] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div>
                  <div className="font-semibold text-white mb-1">Email</div>
                  <a href="mailto:info@blockchainresearch.africa" className="text-gray-300 hover:text-[#00BFA6] transition-colors">
                    info@blockchainresearch.africa
                  </a>
                  <br />
                  <a href="mailto:research@blockchainresearch.africa" className="text-gray-300 hover:text-[#00BFA6] transition-colors">
                    research@blockchainresearch.africa
                  </a>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#00BFA6] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <div className="font-semibold text-white mb-1">Phone</div>
                  <a href="tel:+2341234567890" className="text-gray-300 hover:text-[#00BFA6] transition-colors">
                    +234 123 456 7890
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 section">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-300">
            <div>
              © {currentYear} Blockchain Research Institute Africa. All rights reserved.
            </div>
            <div className="flex gap-6">
              <Link href="/privacy-policy" className="hover:text-[#00BFA6] transition-colors focus-ring">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="hover:text-[#00BFA6] transition-colors focus-ring">
                Terms of Service
              </Link>
              <Link href="/cookie-policy" className="hover:text-[#00BFA6] transition-colors focus-ring">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}