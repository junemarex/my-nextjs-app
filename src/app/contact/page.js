"use client";
import { useRouter } from "next/navigation";

export default function contact() {
  const router = useRouter();

  return (
    <div>
      <p className="text-black">Gmail: junemarex.madera@hcdc.edu.ph</p>
      <p className="text-black">School: Holy Cross of Davao College</p>
      <button onClick={() => router.back()}>Back</button>
    </div>
  );

}