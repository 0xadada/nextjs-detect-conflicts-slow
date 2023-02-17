const NUMBER_OF_PATHS = 200000;

export const getStaticPaths = async () => {
  const paths = [...(new Array(NUMBER_OF_PATHS))].map((_i, x) => ({ params: { id: `${x}` }}))
  return {
    paths,
    fallback: false,
  };
};

// @ts-ignore
export const getStaticProps = async ({ params })=> {
  console.debug(`getStaticProps for /[id]: ${params?.id} of ${NUMBER_OF_PATHS}`);
  const id = params?.id;

  return {
    props: {
      id
    },
  };
};

export default function Id({
  id,
}: {id: string}) {
  return (
    <p>id: {id}</p>
  );
}
