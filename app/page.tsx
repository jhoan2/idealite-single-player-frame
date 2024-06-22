import { fetchMetadata } from "frames.js/next";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Daily Reviews",
    other: {
      ...(await fetchMetadata(
        new URL("/frames", process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3001")
      )),
    },
  };
}

export default async function Home() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ backgroundColor: 'orange', padding: '20px' }}>
        <p>Daily Reviews Frame for <a href="https://www.idealite.xyz" target="_blank" rel="noopener noreferrer">Idealite</a> </p>
      </div>
    </div>
  )
}
