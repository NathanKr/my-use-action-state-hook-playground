"use server"

import { GOOD_POSTS_URL } from "@/logic/constants";
import { pauseMs } from "@/logic/utils";

export async function fetchPostsLength() : Promise<number>{
    await pauseMs(2000); // --- pause just so we can see loader
    const res = await fetch(GOOD_POSTS_URL);
    
    if (!res.ok) {
      throw new Error('Failed to fetch posts');
    }
    const posts = await res.json();
    return posts.length;
  }