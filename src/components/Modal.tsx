"use client";
import useStateStore from "@/store/state";
import { useUser } from "@clerk/nextjs";
import {
  Button,
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { getDownloadURL, ref, uploadString } from "firebase/storage";
import { CameraIcon } from "lucide-react";
import { useRef, useState } from "react";
import { db, storage } from "../firebase";

type FileResult = string | ArrayBuffer | null | undefined;

export default function Modal() {
  const { user } = useUser();
  const { open, setOpen } = useStateStore();

  const [loading, setLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState<FileResult>(null);
  const filePickerRef = useRef<null | HTMLInputElement>(null);
  const captionRef = useRef<null | HTMLInputElement>(null);

  const uploadPost = async () => {
    if (loading) return;
    setLoading(true);
    console.log(collection(db, "posts"));

    const docRef = await addDoc(collection(db, "posts"), {
      username: `${user?.firstName} ${user?.lastName}`,
      caption: captionRef.current?.value,
      profileImg: user?.imageUrl,
      timestamp: serverTimestamp(),
    });
    console.log("Doc id: ", docRef.id);
    const imageRef = ref(storage, `posts/${docRef.id}/image`);

    await uploadString(imageRef, `${selectedFile}`, "data_url").then(
      async (snapshot) => {
        const downloadUrl = await getDownloadURL(imageRef);
        await updateDoc(doc(db, "posts", docRef.id), {
          image: downloadUrl,
        });
      }
    );

    setOpen(false);
    setLoading(false);
    setSelectedFile(null);
  };

  const addImageToPost = (e: any) => {
    const reader = new FileReader();
    if (e.target.files[0]) reader.readAsDataURL(e.target.files[0]);
    reader.onload = (readerEvent: ProgressEvent<FileReader>) => {
      setSelectedFile(readerEvent.target?.result);
    };
  };

  if (!user) return null;

  return (
    <>
      <Transition appear show={open}>
        <Dialog
          as="div"
          className="relative z-10 focus:outline-none"
          onClose={setOpen}
        >
          <div className="fixed inset-0 z-10 w-screen overflow-y-auto bg-black/70">
            <div className="flex min-h-full items-center justify-center">
              <TransitionChild
                enter="ease-out duration-300"
                enterFrom="opacity-0 transform-[scale(95%)]"
                enterTo="opacity-100 transform-[scale(100%)]"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 transform-[scale(100%)]"
                leaveTo="opacity-0 transform-[scale(95%)]"
              >
                <DialogPanel className="w-full max-w-md rounded-xl bg-white dark:bg-zinc-950 flex flex-col gap-3 justify-center items-center">
                  <DialogTitle
                    as="h3"
                    className="text-base/7 font-medium text-color-darker text-center border-b border-gray-500/10 p-1 w-full"
                  >
                    Crie uma nova publicação
                  </DialogTitle>
                  {selectedFile ? (
                    <img
                      src={selectedFile.toString()}
                      className="w-full object-contain cursor-pointer"
                      onClick={() => setSelectedFile(null)}
                      alt=""
                    />
                  ) : (
                    <div
                      onClick={() => filePickerRef.current?.click()}
                      className="flex flex-col py-2 items-center justify-center cursor-pointer"
                    >
                      <input
                        ref={filePickerRef}
                        type="file"
                        hidden
                        onChange={addImageToPost}
                      />
                      <CameraIcon className="h-9 w-9 text text-color-darker mt-4" />
                      <p className="mt-2 text-color-darker">
                        Arraste as fotos e os vídeos aqui
                      </p>
                    </div>
                  )}
                  <input
                    type="text"
                    className="border-none focus:ring-0 w-11/12 text-center my-2 bg-gray-500/5 text-color-dark border-b border-gray-400/50 p-1"
                    placeholder="Digite uma legenda..."
                    ref={captionRef}
                  />
                  <div className="">
                    <Button
                      onClick={uploadPost}
                      disabled={!selectedFile || loading}
                      className="
                      inline-flex items-center rounded-md bg-blue-500 py-1.5 px-3 text-sm/6 text-white focus:bg-blue-600/95 data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white mb-6
                      focus:ring-2 focus:ring-offset-2 sm:text-sm disabled:bg-gray-300 disabled:cursor-not-allowed"
                    >
                      {loading ? "Publicando..." : "Publicar"}
                    </Button>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
