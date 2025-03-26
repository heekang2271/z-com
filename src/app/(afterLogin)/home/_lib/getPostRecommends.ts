export async function getPostRecommends() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/postRecommends`, {
    next: {
      tags: ['posts', 'recommends'],
    },
    // cache: "force-cache" 캐시하고 싶을때
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}
