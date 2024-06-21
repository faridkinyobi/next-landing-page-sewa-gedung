import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function PageNotFound() {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.back();
    }, 2000);
  }, [router]);

  return <div>PageNotFound</div>;
}
