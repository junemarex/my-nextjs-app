"use client";
import { useRouter } from "next/navigation";

export default function contact() {
  const router = useRouter();

  return (
    <div>
        <img
        src="https://hips.hearstapps.com/hmg-prod/images/white-cat-breeds-kitten-in-grass-67bf648a54a3b.jpg?crop=0.668xw:1.00xh;0.167xw,0&resize=980:*"
        alt="Profile Image"
        />
      <button onClick={() => router.back()}>Back</button>
    </div>
  );

}