"use server";

import { sqlDeletePurchase } from "../sql/sql-purchases/sqlDeletePurchase";

export async function deletePurchase(courseId: number) {
  await sqlDeletePurchase(courseId);
}
