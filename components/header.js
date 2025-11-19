'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const navigation = [
    { name: 'Home', href: '/' },
    { 
      name: 'About', 
      href: '/about',
      submenu: [
        { name: 'Who We Are', href: '/about#who-we-are' },
        { name: 'Mission & Vision', href: '/about#mission-vision' },
        { name: 'Leadership Team', href: '/about#team' },
        { name: 'Partnerships', href: '/about#partnerships' },
      ]
    },
    { 
      name: 'Research', 
      href: '/research',
      submenu: [
        { name: 'Research Areas', href: '/research#areas' },
        { name: 'Publications', href: '/research#publications' },
        { name: 'Submit Research', href: '/research#submit' },
      ]
    },
    { 
      name: 'Innovation Lab', 
      href: '/innovation-lab',
      submenu: [
        { name: 'Current Projects', href: '/innovation-lab#projects' },
        { name: 'Collaborate', href: '/innovation-lab#collaborate' },
      ]
    },
    { 
      name: 'Education', 
      href: '/education',
      submenu: [
        { name: 'Programs Overview', href: '/education' },
        { name: 'Research Fellowship', href: '/education#fellowship' },
        { name: 'Developer Bootcamp', href: '/education#bootcamp' },
        { name: 'Policy Masterclass', href: '/education#policy' },
      ]
    },
    { name: 'Publications', href: '/publications' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (href) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md' 
          : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <nav className="container-custom" aria-label="Main navigation">
        <div className="flex items-center justify-between h-20 gap-4">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center gap-3 group focus-ring"
            aria-label="Blockchain Research Institute Africa Home"
          >
            <div className="flex items-center justify-center text-white font-bold text-xl group-hover:scale-105 transition-transform">
              <Image src="/elevate-white-logo.png" alt= "Profile Picture" width={120} height={120} />
            </div>
            
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-4">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  href={item.href}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors focus-ring ${
                    isActive(item.href)
                      ? 'text-[#00BFA6] bg-[#00BFA6]/10'
                      : 'text-[#2C3E50] hover:text-[#00BFA6] hover:bg-gray-50'
                  }`}
                >
                  {item.name}
                  {item.submenu && (
                    <svg 
                      className="inline-block ml-4 w-4 h-4" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </Link>

                {/* Dropdown Menu */}
                {item.submenu && (
                  <div className="absolute left-0 mt-1 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="bg-white rounded-lg shadow-lg border border-gray-100 py-2 m-2">
                      {item.submenu.map((subitem) => (
                        <Link
                          key={subitem.name}
                          href={subitem.href}
                          className="block px-4 py-2 text-sm text-[#2C3E50] hover:bg-[#00BFA6]/10 hover:text-[#00BFA6] transition-colors"
                        >
                          {subitem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button (Desktop) */}
          <div className="hidden lg:block">
            <Link href="/education#apply" className="btn btn-primary">
              Login
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md text-[#2C3E50] hover:bg-gray-100 focus-ring"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <div 
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsMenuOpen(false)}
              aria-hidden="true"
            />

            {/* Menu Panel */}
            <div 
              id="mobile-menu"
              className="fixed top-20 left-0 right-0 bottom-0 bg-white z-50 lg:hidden overflow-y-auto"
            >
              <div className="px-4 py-6 space-y-1">
                {navigation.map((item) => (
                  <div key={item.name}>
                    <Link
                      href={item.href}
                      className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                        isActive(item.href)
                          ? 'text-[#00BFA6] bg-[#00BFA6]/10'
                          : 'text-[#2C3E50] hover:bg-gray-50'
                      }`}
                    >
                      {item.name}
                    </Link>

                   {/* Mobile Submenu */}
                    {item.submenu && (
                      <div className="ml-4 mt-2 space-y-1">
                        {item.submenu.map((subitem) => (
                          <Link
                            key={subitem.name}
                            href={subitem.href}
                            className="block px-4 py-2 text-sm text-[#7F8C8D] hover:text-[#00BFA6] hover:bg-gray-50 rounded-lg transition-colors"
                          >
                            {subitem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}

                {/* Mobile CTA */}
                <div className="pt-4 mt-4 border-t border-gray-200">
                  <Link 
                    href="/education#apply" 
                    className="btn btn-primary w-full justify-center"
                  >
                    Login/Signup
                  </Link>
                </div>
              </div>
            </div>
          </>
        )}
      </nav>
    </header>
  );
}