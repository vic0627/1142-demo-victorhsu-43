'use server';

import {prisma} from "@/lib/prisma";
import { nanoid } from "nanoid";
import { revalidatePath } from "next/cache";

export const fetchGroceries = async () => {
    const groceries = await prisma.grocery.findMany();
    return groceries;
};

export const createGrocery = async (formData: FormData) => {
    const name = formData.get('name') as string;
    const id = nanoid();
    const completed = false;
    const newItem = {id, name, completed};
    try {
        const result = await prisma.grocery.create({data: newItem});
        revalidatePath('/groceries_db_43');
    }catch (error) {
        console.log(error);
    }
};