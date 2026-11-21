import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href="/profile">Profile</Link>
      <Link href="/contact">Contact</Link>
    </div>
  )
}