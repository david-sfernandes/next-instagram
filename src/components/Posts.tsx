"use client";
import { User } from "@/types/user";
import { useUser } from "@clerk/nextjs";
import {
  collection,
  DocumentData,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import Post from "./Post";

export default function Posts() {
  const [posts, setPosts] = useState<DocumentData[]>([]);
  const { user } = useUser();

  useEffect(
    () =>
      onSnapshot(
        query(collection(db, "posts"), orderBy("timestamp", "desc")),
        (snapshot) => setPosts(snapshot.docs)
      ),
    [db]
  );

  return (
    <section className="flex flex-col items-center">
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.data().username}
          userImg={post.data().profileImg}
          img={post.data().image}
          caption={post.data().caption}
          user={user as (User | null)}
        />
      ))}
    </section>
  );
}
