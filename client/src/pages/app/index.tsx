import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0";
import Link from "next/link";

export default function Home() {
  const { user } = useUser();
  console.log(user);

  return (
    <>
      <h1>oi logado rs</h1>
      <p>{user?.name}</p>

      <Link href="/api/auth/logout" passHref>
        <a>Logout</a>
      </Link>
    </>
  );
}

export const getServerSideProps = withPageAuthRequired();
