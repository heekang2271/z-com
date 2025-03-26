import PostForm from './_components/PostForm';
import PostRecommends from './_components/PostRecommends';
import Tab from './_components/Tab';
import TabProvider from './_components/TabProvider';
import { getPostRecommends } from './_lib/getPostRecommends';
import style from './home.module.css';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import TabDecider from '@/app/(afterLogin)/home/_components/TabDecider';

export default async function Home() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({ queryKey: ['posts', 'recommends'], queryFn: getPostRecommends });
  const dehydratedState = dehydrate(queryClient);

  return (
    <main className={style.main}>
      <HydrationBoundary state={dehydratedState}>
        <TabProvider>
          <Tab />
          <PostForm />
          <TabDecider />
        </TabProvider>
      </HydrationBoundary>
    </main>
  );
}
