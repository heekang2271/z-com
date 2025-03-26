'use client';

import { useContext } from 'react';
import { TabContext } from '@/app/(afterLogin)/home/_components/TabProvider';
import PostRecommends from '@/app/(afterLogin)/home/_components/PostRecommends';
import FollowingPosts from '@/app/(afterLogin)/home/_components/FollowingPosts';

export default function TabDecider() {
  const { tab } = useContext(TabContext);
  if (tab === 'rec') {
    return <PostRecommends />;
  }
  return <FollowingPosts />;
}
