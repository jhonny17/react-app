import { useEffect, useState } from 'react';
import { getDocs, Query } from 'firebase/firestore';

type HookResult<T> = {
  isLoading: boolean;
  queryResult: T[];
};

const useFirebaseQueryOnce = <T,>(query: Query<T>) => {
  const [queryResult, setQueryResult] = useState<T[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [currentQuery, setCurrentQuery] = useState<Query<T>>();

  useEffect(() => {
    if (query === currentQuery) return;
    setIsLoading(false);
    setCurrentQuery(query);
  }, [query]);

  const executeRequest = async () => {
    if (!currentQuery) return;
    const querySnapShots = await getDocs<T>(currentQuery);
    const documents = querySnapShots.docs;
    const data = documents.map((document) => document.data());
    setQueryResult(data);
    setIsLoading(false);
  };

  useEffect(() => {
    executeRequest();
  }, [currentQuery]);

  const hookResult: HookResult<T> = { isLoading, queryResult };

  return hookResult;
};

export default useFirebaseQueryOnce;
