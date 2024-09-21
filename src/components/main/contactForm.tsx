'use client';
import AutoForm, {AutoFormSubmit} from '../ui/auto-form';
import * as z from 'zod';
import {Card, CardContent, CardHeader, CardTitle} from '../ui/card';
import SectionHeading from '../commons/section-heading';
import {useToast} from "@/components/ui/use-toast"
import {sendEmail} from "@/actions/sendEmail";

// Define your form schema using zod
const formSchema = z.object({
    email: z
        .string()
        .min(1, {message: "This field has to be filled."})
        .email("This is not a valid email."),

    message: z
        .string({
            required_error: 'Message is required.',
        }),
});

export default function ContactForm() {
    const {toast} = useToast()
    return (
        <section
            id="contact"
            className="mb-12 md:mb-20 lg:mb-32 max-w-4xl mx-auto leading-8 scroll-mt-28">
            <SectionHeading>Contact</SectionHeading>
            <Card className="mx-auto mb-3 last:mb-0 m-4 sm:mb-8 max-w-full">
                {' '}
                <CardHeader>
                    <CardTitle>Contact me</CardTitle>
                </CardHeader>
                <CardContent>
                    <AutoForm
                        // Pass the schema to the form
                        formSchema={formSchema}
                        onSubmit={async (formData) => {
                            const {data, error} = await sendEmail(formData.message, formData.email);

                            if (error) {
                                toast({
                                    variant: "destructive",
                                    title: "Error cannot send email",
                                    description: error,
                                })
                                return;
                            }

                            toast({
                                description: "Email sent successfully!",
                            })
                        }}
                        fieldConfig={{
                            message: {
                                fieldType: "textarea",
                            },
                        }}
                    >

                        <AutoFormSubmit>Send now</AutoFormSubmit>


                        <p className="text-gray-500 text-sm">
                            By submitting this form, you agree to our{' '}
                            <a href="#" className="text-primary underline">
                                terms and conditions
                            </a>
                            .
                        </p>
                    </AutoForm>
                </CardContent>
            </Card>
        </section>
    );
}
