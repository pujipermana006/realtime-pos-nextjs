import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { LoginForm, loginSchema } from "@/validations/auth-validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export default function Login() {

    const form = useForm<LoginForm>({
        resolver: zodResolver(loginSchema)
    })
    return (
        <Card>
            <CardHeader className="text-center">
                <CardTitle className="text-xl">Welcome</CardTitle>
                <CardDescription>Login Terlebih Dahulu Sebelum Masuk ke aplikasi</CardDescription>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form action="">
                        <FormField control={form.control} name="email" render={({ field: { ...rest } }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input
                                        {...rest}
                                        type="email"
                                        placeholder="Insert Your Email"
                                        autoComplete="off" />
                                </FormControl>
                                <FormMessage className="text-xs" />
                            </FormItem>
                        )}>

                        </FormField>
                    </form>
                </Form>
            </CardContent>
        </Card>
    )

}