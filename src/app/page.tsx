"use client";
import { redirect } from "next/navigation";
import { useEffect } from "react";

export default function Home({ id }: { id: string }) {
  useEffect(() => {
    if (id) {
      redirect(`/${id}`)
    } else {
      redirect(`/edit`)
    }
  }, [id]);
}
