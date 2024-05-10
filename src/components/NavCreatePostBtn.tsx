"use client";
import useStateStore from "@/store/state";
import { PlusCircleIcon } from "@heroicons/react/24/outline";

export default function NavCreatePostBtn() {
  const { setOpen } = useStateStore();

  return (
    <button className="nav-item" onClick={() => setOpen(true)}>
      <PlusCircleIcon className="nav-icon m-[14px]" />
      <p className="nav-text">Criar</p>
    </button>
  );
}