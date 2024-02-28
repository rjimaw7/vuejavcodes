/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable no-unsafe-optional-chaining */

import { useInfiniteQuery, useMutation } from '@tanstack/vue-query';
import { addCode, deleteCode, fetchCodes, updateCode } from '@/server/action';
import { CODE_KEY } from '@/shared/constants/constants';
import type { ICodes, SortByType } from '@/shared/interfaces/ICode';
import type { CodeType } from '@/shared/zod/schema';

export const useCodeService = () => {
    const GetAllCodes = (query?: string, page?: number, limit?: number, sortBy?: SortByType) => {
        return useInfiniteQuery<ICodes[], Error>({
            queryKey: [CODE_KEY, query, page, limit, sortBy],
            queryFn: ({ pageParam = page }) => fetchCodes(query, pageParam as number, limit, sortBy),
            initialPageParam: 1,
            getNextPageParam: (lastPage, allPages) => {
                const nextPage = lastPage?.length > 0 ? allPages?.length + 1 : null;
                return nextPage;
            }
        });
    };

    const AddCode = useMutation({
        mutationFn: (values: CodeType) => addCode(values)
    });
    const AddCodeMutation = () => {
        return {
            AddCode
        };
    };

    const UpdateCode = useMutation({
        mutationFn: (values: CodeType) => updateCode(values)
    });
    const UpdateCodeMutation = () => {
        return {
            UpdateCode
        };
    };

    const DeleteCode = useMutation({
        mutationFn: (id: string) => deleteCode(id)
    });
    const DeleteCodeMutation = () => {
        return {
            DeleteCode
        };
    };

    return {
        GetAllCodes,
        AddCodeMutation,
        UpdateCodeMutation,
        DeleteCodeMutation
    };
};
