import { useSearchParams } from "react-router-dom";

const usePageParam = (key) => {
  const [searchParams] = useSearchParams();
  return searchParams.get(key);
};

export default usePageParam;
