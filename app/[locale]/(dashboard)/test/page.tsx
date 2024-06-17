import { sqlGetCartItems } from "../../../sql/sqlGetCartItems";
import TestDropwdown from "./TestDropwdown";

export default async function Page() {
  const courses = await sqlGetCartItems();
  console.log(courses);
  return (
    <div className="mt-40">
      <TestDropwdown courses={courses} />
    </div>
  );
}
