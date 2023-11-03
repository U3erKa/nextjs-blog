import useSWR from 'swr';
import type { ApiHelloResponse } from '../pages/api/hello';

export default function Profile() {
  const { data, error, isLoading } = useSWR<ApiHelloResponse>(
    '/api/hello',
    fetch as any,
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  return <div>{data!.text}</div>;
}
