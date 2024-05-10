"use client";
import {
  collection,
  DocumentData,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { Session } from "next-auth";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import Post from "./Post";

export default function Posts({ session }: { session: Session | null}) {
  const [posts, setPosts] = useState<DocumentData[]>([]);
  console.log(posts);
  
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
          session={session}
        />
      ))}
    </section>
  );
}
