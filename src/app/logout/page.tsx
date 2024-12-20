'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function LogoutPage() {
  const router = useRouter();

  useEffect(() => {
    // Clear any auth tokens/session data
    localStorage.removeItem('token'); // Adjust based on your auth implementation
    sessionStorage.clear();
    
    // You might need to call your logout API endpoint here
    // await fetch('/api/auth/logout', { method: 'POST' });

    // Redirect to login or home page
    router.push('/login');
  }, [router]);

  return (
    <div className="text-center p-4">
      <p>Logging out...</p>
    </div>
  );
} 