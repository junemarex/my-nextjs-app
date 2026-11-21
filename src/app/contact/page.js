"use client";
import { useRouter } from "next/navigation";

export default function contact() {
  const router = useRouter();

  return (
    <div>
      <p className="text-black">Gmail: junemarex.madera@hcdc.edu.ph</p>
      <button onClick={() => router.back()}>Back</button>
    </div>
  );

}vs