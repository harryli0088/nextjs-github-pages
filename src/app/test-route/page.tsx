import Image from "next/image";
import Link from "next/link";

import logo from 'public/next.svg'

export default function TestRoute() {
  return (
    <div style={{display: "flex", justifyContent: "center", height: "100vh", alignItems: "center", textAlign: "center"}}>
      <div>
        <Image
          src={logo}
          alt="Next.js Logo"
          width={180}
          height={37}
          style={{filter: "invert(1) drop-shadow(0 0 0.3rem #ffffff70)"}}
          priority
        />
        <br/>
        <br/>
        <p>This is a test route</p>
        <br/>
        <Link href="/" prefetch={false}><button>Go Back Home</button></Link>
      </div>
    </div>
  )
}