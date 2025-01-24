"use client";

import { LoginLink, RegisterLink, LogoutLink } from '@kinde-oss/kinde-auth-nextjs/components';
import Link from 'next/link';
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';
import '../app/globals.css'

const Header = () => {
  // Use the browser client hook
  const { user } = useKindeBrowserClient();

  return (
    <header>
      <nav>
        <ul>
          <li><Link  href="/">Home</Link></li>
          <li><Link href="/profile">Profile</Link></li>
        </ul>
        <div>
          {user ? (
            <div className="flex gap-4">
              <span>Hello, {user.given_name}</span>
              <LogoutLink>
                <button className="bg-red-500 text-white px-4 py-2 rounded">
                  Log out
                </button>
              </LogoutLink>
            </div>
          ) : (
            <div className="flex gap-4">
              <LoginLink>
                <button className="bg-blue-500 text-white px-4 py-2 rounded">
                  Sign in
                </button>
              </LoginLink>
              <RegisterLink>
                <button className="bg-green-500 text-white px-4 py-2 rounded">
                  Sign up
                </button>
              </RegisterLink>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;