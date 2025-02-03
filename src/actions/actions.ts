"use server";

import { prisma } from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function addExpense(formData: FormData) {
  await prisma.expence.create({
    data: {
      title: formData.get("title") as string,
      amount: Number(formData.get("amount")),
    },
  });
  revalidatePath("/app/dashboard");
}

export async function editExpense(formData: FormData, id: number) {
  await prisma.expence.update({
    where: {
      id: id,
    },
    data: {
      title: formData.get("title") as string,
      amount: Number(formData.get("amount")),
    },
  });
  revalidatePath("/app/dashboard");
}

export async function deleteExpense(id: number) {
  await prisma.expence.delete({
    where: {
      id: id,
    },
  });
  revalidatePath("/app/dashboard");
}
