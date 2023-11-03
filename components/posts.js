import useSWR from 'swr';

export default function Profile() {
  const { data, error, isLoading } = useSWR('/api/hello', fetch);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  return <div>{data.text}</div>;
}
