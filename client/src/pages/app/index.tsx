import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0";
import Link from "next/link";
import { withApollo } from "../../lib/withApollo";
import { useGetProductsQuery } from "../../graphql/generated/graphql";
import { getServerPageGetProducts, ssrGetProducts } from "../../graphql/generated/page";

function Home() {
  const { user } = useUser();
  const {data, loading, error} = useGetProductsQuery()

  return (
    <>
      <h1>oi logado rs</h1>
      <p>{user?.name}</p>
      <pre>
        {JSON.stringify(data, null, 2)}
      </pre>

      <Link href="/api/auth/logout" passHref>
        <a>Logout</a>
      </Link>
    </>
  );
}

export const getServerSideProps = withPageAuthRequired({
  getServerSideProps: (ctx) => {
    return getServerPageGetProducts({}, ctx)
  }
});

export default withApollo(ssrGetProducts.withPage()(Home))