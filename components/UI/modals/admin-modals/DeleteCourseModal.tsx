import { sqlDeleteCourse } from "../../../../app/sql/sql-courses/sqlDeleteCourse";

export interface CourseModal {
  courseId: number;
  setDeleteModal: (arg: boolean) => void;
}

export default function DeleteCourseModal({
  courseId,
  setDeleteModal,
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
          className="w-full max-w-lg p-8 bg-white rounded-lg shadow-lg relative mx-auto"
        >
          <h1 className="text-center text-2xl text-red-500 mb-6">
            Are you sure you want to delete this course?
          </h1>

          <form
            action={async () => {
              await deleteCourse();
              setDeleteModal(false);
            }}
          >
            <div className="flex">
              <button
                type="button"
                onClick={() => setDeleteModal(false)}
                className="mt-6 py-2 px-4 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-300 mx-auto block"
              >
                No, Close
              </button>

              <button
                type="submit"
                className="mt-6 py-2 px-4 bg-red-400 text-white rounded-lg hover:bg-red-600 transition-colors duration-300 mx-auto block"
              >
                Yes, Delete
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
