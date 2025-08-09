import Link from 'next/link';
import Image from 'next/image';
import logo from '@/public/images/logo.png';

export default function Logo() {
  return (
    <Link href="/" className="inline-flex shrink-0" aria-label="Wortec">
      <Image src={logo} alt="Wortec Logo" width={32} height={32} />
    </Link>
  );
}
