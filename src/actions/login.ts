"use server"
import { z } from "zod";
import { loginSchema } from "@/lib/schemas";

export const login = async (values: z.infer<typeof loginSchema>) => {

    const validate = loginSchema.safeParse(values)

    if (!validate.success) {
        return { error: 'Invalid fields', success: '' }
    }
    return { success: 'Email send', error: '' }

}