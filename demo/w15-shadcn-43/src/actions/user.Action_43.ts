'use server';

import {prisma} from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export const fetchUsers = async () => {
    const users = await prisma.user.findMany();
    return users;
};

export const createUser = async (formData: FormData) => {
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const newUser = {name, email};
    console.log('newUser', newUser);
    try {
        const result = await prisma.user.create({data: newUser});
        revalidatePath('/users_db_43');
    }catch (error) {
        console.log(error);
    }
};

export const createUser2 = async (prevState: string | null, formData: FormData) => {
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const newUser = {name, email};
    console.log('newUser', newUser);
    try {
        const result = await prisma.user.create({data: newUser});
        revalidatePath('/users_db_43');
        return 'user created successfully';
    }catch (error) {
        console.log(error);
        return 'failed to create user...';
    }
};

export const removeUser = async (id:number, formData: FormData) => {
    console.log('id', id);
    await prisma.user.delete({where: {id}});
    revalidatePath('/users_db_43');
};