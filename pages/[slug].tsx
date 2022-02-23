import {
  GetStaticPaths,
  GetStaticPropsContext,
  InferGetStaticPropsType,
  NextPage,
} from 'next'

type Props = InferGetStaticPropsType<typeof getStaticProps>

const Page: NextPage<Props> = ({ slug }) => {
  return <div>{slug}!</div>
}

export default Page

export const getStaticProps = ({
  params,
}: GetStaticPropsContext<{ slug: string }>) => {
  return {
    props: { slug: params?.slug || 'null' },
  }
}

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [{ params: { slug: 'page1' } }, { params: { slug: 'page2' } }],
    fallback: true,
  }
}
