import useSWR from 'swr';

export const useLoading = () => {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data, error } = useSWR(`/`, fetcher);

  return {
    isLoading: !error && !data,
  };
};
