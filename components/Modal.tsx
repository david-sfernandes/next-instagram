import { Transition, Dialog } from "@headlessui/react";
import { CameraIcon } from "@heroicons/react/24/solid";
import { Fragment, LegacyRef, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { modalState } from "../atoms/modalAtom";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { db, storage } from "../firebase";
import { useSession } from "next-auth/react";
import { getDownloadURL, ref, uploadString } from "firebase/storage";

type FileResult = string | ArrayBuffer | null | undefined;

export default function Modal() {
  const { data: session } = useSession();
  const [open, setOpen] = useRecoilState(modalState);
  const [loading, setLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState<FileResult>(null);
  const filePickerRef = useRef<null | HTMLInputElement>(null);
  const captionRef = useRef<null | HTMLInputElement>(null);

  const uploadPost = async () => {
    if (loading) return;
    setLoading(true);
    console.log(
      collection(db, "posts")
    )

    const docRef = await addDoc(collection(db, "posts"), {
      username: (session as CustomSession).user.username,
      caption: captionRef.current?.value,
      profileImg: session?.user?.image,
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

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-10 inset-0 overflow-y-auto"
        onClose={setOpen}
      >
        <div
          className="flex items-end justify-center
        min-h-[800px] sm:min-h-screen p-4 pb-20
        text-center sm:block sm:p-0"
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>
          <span
            aria-hidden="true"
            className="hidden sm:inline-block sm:align-middle
            sm:h-screen"
          >
            &#8203;
          </span>

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div
              className="inline-block align-bottom bg-white rounded-lg
              p-4 text-left overflow-hidden shadow-lg transform
              transition-all sm:my-0 sm:align-middle sm:max-w-sm
              sm:w-full sm:p-6"
            >
              <div className="mt-3 text-center sm:mt-5">
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
                    className="mx-auto flex items-center justify-center h-12
                    w-12 rounded-full bg-red-100 cursor-pointer"
                  >
                    <CameraIcon
                      className="h-6 w-6 text-red-600"
                      aria-hidden="true"
                    />
                  </div>
                )}
                <Dialog.Title
                  as="h3"
                  className="text-lg leading-6 font-medium text-gray-600"
                >
                  Upload a photo
                </Dialog.Title>
                <div>
                  <input
                    ref={filePickerRef}
                    type="file"
                    hidden
                    onChange={addImageToPost}
                  />
                  <input
                    type="text"
                    className="border-none focus:ring-0 w-full text-center mt-2"
                    placeholder="Please enter a caption"
                    ref={captionRef}
                  />
                </div>
                <div className="mt-5 sm:mt-6">
                  <button
                    onClick={uploadPost}
                    disabled={!selectedFile || loading}
                    type="button"
                    className="inline-flex justify-center w-full rounded-md
                      border border-transparent shadow-md px-4 py-2 bg-red-600
                      text-base font-medium text-white hover:bg-red-700
                      focus:outline-none focus:ring-2 focus:ring-offset-2 
                      sm:text-sm disabled:bg-gray-300 disabled:cursor-not-allowed"
                  >
                    {loading ? 'Uploading...' : "Upload Post"}
                  </button>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
