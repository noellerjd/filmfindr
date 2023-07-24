import fflogo from "../public/filmfindrlogo.png";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <main>
      <div className="flex justify-center">
        <div className=" flex rounded-lg px-3 my-3">
          <Link href="/">
            <Image src={fflogo} alt="film finder logo" />
          </Link>
        </div>
      </div>
    </main>
  );
}
