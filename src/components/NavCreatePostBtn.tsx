"use client";
import useStateStore from "@/store/state";
import { PlusCircleIcon } from "lucide-react";

export default function NavCreatePostBtn() {
  const { setOpen } = useStateStore();

  return (
    <button type="button" className="nav-item" onClick={() => setOpen(true)}>
      <PlusCircleIcon className="nav-icon m-[14px]" />
      <p className="nav-text">Criar</p>
    </button>
  );
}