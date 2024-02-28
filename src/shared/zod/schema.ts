import { z } from 'zod';

const isValidFormat = (input: string): boolean => {
    const pattern = /^(\[?[a-zA-Z]{2,6}\]-[a-zA-Z0-9]+|[a-zA-Z]{2,6}-[a-zA-Z0-9]+)$/;
    return pattern.test(input);
};

export const CodeSchema = z.object({
    title: z.string().refine((data) => isValidFormat(data), {
        message: 'Invalid Code format'
    }),
    id: z.string().optional()
});

export type CodeType = z.infer<typeof CodeSchema>;
