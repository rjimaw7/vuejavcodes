/* eslint-disable @typescript-eslint/explicit-function-return-type */

import { sql } from '@vercel/postgres';
import { generateRandomNumber } from '@/lib/utils';
import type { ICodes, SortByType } from '@/shared/interfaces/ICode';
import type { CodeType } from '@/shared/zod/schema';

export const fetchCodes = async (query?: string, page = 1, limit = 10, sortBy?: SortByType) => {
    try {
        // Calculate the offset based on the page number and limit
        const offset = (page - 1) * limit;

        const data =
            sortBy === 'latest'
                ? await sql<ICodes>`SELECT * FROM codes ORDER BY created_at DESC LIMIT ${limit} OFFSET ${offset}`
                : sortBy === 'most_viewed'
                  ? await sql<ICodes>`SELECT * FROM codes ORDER BY views DESC LIMIT ${limit} OFFSET ${offset}`
                  : await sql<ICodes>`SELECT * FROM codes ORDER BY created_at ASC LIMIT ${limit} OFFSET ${offset}`;

        if (query) {
            const searchCodeData =
                await sql<ICodes>`SELECT * FROM codes WHERE title LIKE ${`%${query.toUpperCase()}%`}`;

            return searchCodeData.rows;
        }

        return data.rows;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch codes.');
        ``;
    }
};

export const fetchCodeById = async (id: string) => {
    try {
        const data = await sql<ICodes>`
          SELECT
            codes.id,
            codes.title,
            codes.views
          FROM codes
          WHERE codes.id = '${id}';
        `;

        const codes = data.rows.map((code) => ({ ...code }));

        return codes[0];
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch code.');
    }
};

export const addCode = async (values: CodeType) => {
    try {
        await sql`INSERT INTO codes (title, views, created_at) VALUES (${values.title}, ${generateRandomNumber()}, CURRENT_TIMESTAMP);`;
    } catch (error: unknown) {
        console.error('Database Error:', error);
        throw new Error('Failed to ADD code.');
    }
};

export const updateCode = async (values: CodeType) => {
    try {
        await sql`
      UPDATE codes
      SET title = ${values.title}
      WHERE id = ${values.id}`;
    } catch (error: unknown) {
        console.error('Database Error:', error);
        throw new Error('Failed to Update code.');
    }
};

export const deleteCode = async (id: string) => {
    await sql`DELETE FROM codes WHERE id = ${id};`;
};
