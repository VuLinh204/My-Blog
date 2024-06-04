import { Post } from '@/lib/models';
import { connectToDb } from '@/lib/utils';
import { NextResponse } from 'next/server';

const pageSize = 6;

export const GET = async (request) => {
    try {
        connectToDb();

        const _searchParams = request.nextUrl.searchParams;
        const page = _searchParams.get('page') ? +_searchParams.get('page') : 0;

        console.log('_searchParams', _searchParams);
        console.log('page', page);

        const limit = page * pageSize + pageSize;

        const posts = await Post.find().limit(limit);
        return NextResponse.json(posts);
    } catch (err) {
        console.log(err);
        throw new Error('Failed to fetch posts!');
    }
};
