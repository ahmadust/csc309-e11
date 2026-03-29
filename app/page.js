import Link from "next/link";

export default function Home() {
  return (
    <main style={{ padding: "1.5rem", fontFamily: "system-ui" }}>
      <p>
        Auto-tester path:{" "}
        <Link href="/csc309-e11">/csc309-e11</Link>
      </p>
    </main>
  );
}
