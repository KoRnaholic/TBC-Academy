import { sqlDeleteCourse } from "../../../../app/sql/sql-courses/sqlDeleteCourse";
import { CourseTransl } from "../../Edit-DelDropdown";

export interface CourseModal {
  courseId: number;
  setDeleteModal: (arg: boolean) => void;
  courseTransl: CourseTransl;
}

export default function DeleteCourseModal({
  courseId,
  setDeleteModal,
  courseTransl,
}: CourseModal) {
  const deleteCourse = sqlDeleteCourse.bind(null, courseId);
  return (
    <>
      <div
        onClick={() => setDeleteModal(false)}
        className="min-w-screen h-screen fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-80"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="w-full max-w-lg p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg relative mx-auto"
        >
          <h1 className="text-center text-2xl text-red-500 dark:text-red-400 mb-6">
            {courseTransl.sure}
          </h1>

          <form
            action={async () => {
              await deleteCourse();
              setDeleteModal(false);
            }}
          >
            <div className="flex justify-around">
              <button
                type="button"
                onClick={() => setDeleteModal(false)}
                className="mt-6 py-2 px-4 bg-green-500 dark:bg-green-600 text-white rounded-lg hover:bg-green-600 dark:hover:bg-green-700 transition-colors duration-300"
              >
                {courseTransl.no}
              </button>

              <button
                type="submit"
                className="mt-6 py-2 px-4 bg-red-400 dark:bg-red-500 text-white rounded-lg hover:bg-red-600 dark:hover:bg-red-600 transition-colors duration-300"
              >
                {courseTransl.yes}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
