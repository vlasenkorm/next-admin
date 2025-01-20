"use server"
import { z } from "zod";
import bcrypt from "bcrypt";
import { registerSchema } from "@/lib/schemas";
import { db } from '@/lib/db'

export const register = async (values: z.infer<typeof registerSchema>) => {

    const validate = registerSchema.safeParse(values)

    if (!validate.success) {
        return { error: 'Invalid fields', success: '' }
    }

    const { email, password, name } = validate.data;

    //const existingUser = await findUserByEmail(email)
    const existingUser = await db.user.findUnique({ where: { email } })


    if (existingUser) {
        return { error: 'User already exist', success: '' }
    }

    const hashedPassword = await bcrypt.hash(password, 10)
    const addUserRes = await db.user.create({ data: { email, password: hashedPassword, name } })
    console.log(addUserRes)

    return { success: 'User Created', error: '' }

}