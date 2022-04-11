import { getAccessToken, getSession, useUser } from "@auth0/nextjs-auth0";
import { GetServerSideProps } from "next";
import Link from "next/link";

export default function Home() {
  const user = useUser();
  console.log(user)

  return (
    <>
      <h1>fala galera</h1>
      <Link href="/api/auth/login" passHref>
        <a >Login</a>
      </Link>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async({req, res}) => {
  const session = getSession(req, res)

  if(!session) {
    return {
      redirect: {
        destination: '/api/auth/login',
        permanent: false
      }
    }
  }

  return {
    redirect: {
      destination: '/app',
      permanent: false
    }
  }
}