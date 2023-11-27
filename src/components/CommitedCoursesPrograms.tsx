import isEmpty from "@/utils/isEmpty";
import Link from "next/link";
import { useState } from "react";

interface SelectedCourse {
  title: string;
  skills: string[];
}

interface PropTypes {
  currentPathCoursesAndPrograms: Record<string, string[]> | undefined;
}

type MyModalProps = SelectedCourse | null;

function MyModal(props: MyModalProps = { title: "", skills: [] }) {
  return (
    <dialog id="my_modal_3" className="modal">
      <div className="modal-box h-1/3 md:h-2/3 p-5">
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <div className="p-10 grid grid-rows-3 items-center justify-center">
          <p className="row-span-1 font-bold text-base md:text-xl p-3">
            {props?.title}
          </p>
          <ul className="row-span-3">
            {props?.skills.map((skill) => (
              <>
                <li className="grid grid-cols-4 ">
                  <div className="form-control">
                    <label className="cursor-pointer label">
                      <input
                        type="checkbox"
                        checked="checked"
                        className="checkbox checkbox-accent"
                      />
                    </label>
                  </div>
                  <div className="col-span-3">{skill}</div>
                </li>
                <div className="divider divider-accent"></div>
              </>
            ))}
          </ul>
        </div>
      </div>
    </dialog>
  );
}

export default function CommitedCoursesPrograms({
  currentPathCoursesAndPrograms,
}: PropTypes) {
  const [selectedCourse, setSelectedCourse] = useState<SelectedCourse | null>(
    null
  );
  console.log("HEY HEY HEY");
  console.log(currentPathCoursesAndPrograms);

  const handleCourseSelect = (title: string, skills: string[]) => {
    setSelectedCourse({ title, skills });
    (document.getElementById("my_modal_3") as HTMLDialogElement).showModal();
  };

  return (
    <div className="sm:col-span-2">
      <div className="grid items-center">
        <div className="bg-main-bg h-auto w-full rounded-2xl mx-auto p-4 text-center align-middle items-center justify-center grid grid-cols-1 md:grid-cols-4 shadow-xl">
          <div className="col-span-1 items-center justify-center">
            <div className="flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="58"
                height="48"
                viewBox="0 0 58 48"
                fill="none"
              >
                <path
                  d="M20.166 28.7677L20.166 23.726"
                  stroke="#222222"
                  stroke-width="3.36119"
                  stroke-linecap="round"
                />
                <path
                  d="M28.7324 8.07159L28.7324 14.8208L28.7324 19.8826"
                  stroke="#222222"
                  stroke-width="3.36119"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M26.3379 5.8153V14.2651C26.3379 15.1933 27.0903 15.9457 28.0185 15.9457H43.1493C43.938 15.9457 44.2922 14.9572 43.6829 14.4563L38.7057 10.3648C38.5013 10.1967 38.5013 9.88374 38.7057 9.71566L43.6829 5.62412C44.2922 5.12325 43.938 4.1347 43.1493 4.1347H28.0185C27.0903 4.1347 26.3379 4.88713 26.3379 5.8153Z"
                  fill="#222222"
                />
                <path
                  d="M47.3013 43.5048H10.165C8.28257 43.5048 7.34135 43.5048 6.62235 43.1384C5.9899 42.8162 5.4757 42.302 5.15346 41.6695C4.78711 40.9505 4.78711 40.0093 4.78711 38.1269V25.2606C4.78711 23.3781 4.78711 22.4369 5.15346 21.7179C5.4757 21.0855 5.9899 20.5713 6.62235 20.249C7.34135 19.8827 8.28257 19.8827 10.165 19.8827H17.4439C18.0275 19.8827 18.3193 19.8827 18.5196 20.0035C18.6951 20.1094 18.8258 20.2757 18.8872 20.4713C18.9572 20.6944 18.8883 20.9779 18.7503 21.545L15.1744 36.2431C14.8985 37.3772 14.7605 37.9443 14.9006 38.3905C15.0234 38.7816 15.2849 39.1144 15.6359 39.3262C16.0363 39.5677 16.6199 39.5677 17.7871 39.5677H39.6792C40.8464 39.5677 41.43 39.5677 41.8304 39.3262C42.1814 39.1144 42.4429 38.7816 42.5657 38.3905C42.7058 37.9443 42.5678 37.3772 42.2919 36.2431L38.716 21.545C38.578 20.9779 38.509 20.6944 38.5791 20.4713C38.6405 20.2757 38.7712 20.1094 38.9467 20.0035C39.147 19.8827 39.4388 19.8827 40.0224 19.8827H47.3013C49.1837 19.8827 50.1249 19.8827 50.8439 20.249C51.4764 20.5713 51.9906 21.0855 52.3128 21.7179C52.6792 22.4369 52.6792 23.3781 52.6792 25.2606V38.1269C52.6792 40.0093 52.6792 40.9505 52.3128 41.6695C51.9906 42.302 51.4764 42.8162 50.8439 43.1384C50.1249 43.5048 49.1837 43.5048 47.3013 43.5048Z"
                  fill="#222222"
                />
              </svg>
            </div>
            <p className="font-bold pt-2">Completed Courses: 0</p>
          </div>
          <div className="col-span-3 grid grid-rows-7 w-full h-full">
            <p className="text-lg w-fit place-self-center font-bold pb-3">
              Courses and Programs
            </p>
            <MyModal
              title={selectedCourse?.title || ""}
              skills={selectedCourse?.skills || []}
            />
            <div className="row-span-6 bg-bright-main h-full rounded-2xl items-center justify-center grid grid-cols-2 gap-3 p-3 md:p-5">
              <>
                {currentPathCoursesAndPrograms &&
                !isEmpty(currentPathCoursesAndPrograms) ? (
                  Object.keys(currentPathCoursesAndPrograms).map((val) => (
                    <div
                      key={val}
                      className="bg-main-bg p-5 md:p-10 w-full h-full rounded-lg drop-shadow-md place-self-center grid grid-rows-2 gap-5"
                    >
                      <div className="text-black h-2/3 place-content-center">
                        <p>{val}</p>
                      </div>
                      <button
                        className="h-fit px-3 py-1 border border-gray-400 rounded-lg shadow place-self-center hover:bg-white bg-button-bg w-fit text-xs text-center hover:cursor-pointer"
                        onClick={() =>
                          handleCourseSelect(
                            val,
                            currentPathCoursesAndPrograms[val]
                          )
                        }
                      >
                        View Details
                      </button>
                    </div>
                  ))
                ) : (
                  <div className="col-span-2 p-36 flex items-center justify-center">
                    <p>Nothing to display</p>
                  </div>
                )}
              </>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}