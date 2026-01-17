"use client"

import { signUpSchema } from "@/app/schemas/auth";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent} from "@/components/ui/card";
import { Field, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form";

const SignUpPage = () => {
    const form = useForm({
        resolver: zodResolver(signUpSchema),
        defaultValues: {
            email: "",
            name: "",
            password: "",
        }
    })
  return (
    <Card>
      <CardHeader>
        <CardTitle>Sign Up</CardTitle>
        <CardDescription>Create an Account to get Started</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
            <FieldGroup cl>
                <Controller 
                    name="name"
                    control={form.control}
                    render={({field, fieldState})=>(
                        <Field>
                            <FieldLabel>Full Name</FieldLabel>
                            <Input placeholder="Jane Doe" {...field}/>
                            {fieldState.invalid && (
                                <FieldError errors={[fieldState.error]} />
                            )}
                        </Field>
                    )}
                />
                <Controller 
                    name="email"
                    control={form.control}
                    render={({field, fieldState})=>(
                        <Field>
                            <FieldLabel>Email</FieldLabel>
                            <Input placeholder="jane@doe.com" type="email" {...field}/>
                            {fieldState.invalid && (
                                <FieldError errors={[fieldState.error]} />
                            )}
                        </Field>
                    )}
                />
                <Controller 
                    name="password"
                    control={form.control}
                    render={({field, fieldState})=>(
                        <Field>
                            <FieldLabel>Password</FieldLabel>
                            <Input placeholder="********" type="password" {...field}/>
                            {fieldState.invalid && (
                                <FieldError errors={[fieldState.error]} />
                            )}
                        </Field>
                    )}
                />

                <Button>Sign up</Button>
            </FieldGroup>
        </form>
      </CardContent>
    </Card>
  )
}

export default SignUpPage
