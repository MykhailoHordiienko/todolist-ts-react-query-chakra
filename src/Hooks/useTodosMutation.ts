import { useMutation, useQueryClient } from 'react-query';
import { MutationType } from 'types';

export const useTodosMutation = (foo: () => Promise<void>) => {
  const queryClient = useQueryClient();

  return useMutation<void, unknown, string | MutationType, unknown>(foo, {
    onSuccess: () => {
      queryClient.invalidateQueries('todos');
    },
  });
};
