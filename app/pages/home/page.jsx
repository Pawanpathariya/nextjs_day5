'use client';

import { signOut, useSession } from "next-auth/react";
import { useState,useEffect } from "react";
import { useRouter } from "next/navigation";
export default function Home() {
  const { data: session } = useSession();
const router=useRouter();

const loadData = async () => {
 if(!session){    
  router.push("/");
}
};

useEffect(() => {
  loadData();
}, []);
  return (
    
        <>
        {session && (
          <nav className="bg-gray-800 p-4 flex justify-between items-center">
            <p className="text-white">Signed in as {session.user?.email}</p>
            <button onClick={() => signOut()} className="bg-red-500 text-white px-4 py-2 rounded">Sign Out</button>
          </nav>
        )}
  <div>
    <h1 className="text-3xl font-bold ">
      Hello world!
    </h1>
  </div>

        </>
      
  );
}

