'use client';
import AutoForm, { AutoFormSubmit } from '../ui/auto-form';
import { DependencyType } from '../ui/auto-form/types';
import * as z from 'zod';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import SectionHeading from '../commons/section-heading';

// Define your form schema using zod
const formSchema = z.object({
	username: z
		.string({
			required_error: 'Username is required.',
		})
		// You can use zod's built-in validation as normal
		.min(2, {
			message: 'Username must be at least 2 characters.',
		}),

	password: z
		.string({
			required_error: 'Password is required.',
		})
		// Use the "describe" method to set the label
		// If no label is set, the field name will be used
		// and un-camel-cased
		.describe('Your secure password')
		.min(8, {
			message: 'Password must be at least 8 characters.',
		}),

	acceptTerms: z
		.boolean()
		.describe('Accept terms and conditions.')
		.refine((value) => value, {
			message: 'You must accept the terms and conditions.',
			path: ['acceptTerms'],
		}),

	// Date will show a date picker
	birthday: z.coerce.date().optional(),

	sendMeMails: z.boolean().optional(),

	// Enum will show a select
	color: z.enum(['red', 'green', 'blue']),

	// Create sub-objects to create accordion sections
	address: z.object({
		street: z.string(),
		city: z.string(),
		zip: z.string(),
	}),
});

export default function ContactForm() {
	return (
		<section
			id="contact"
			className="mb-12 md:mb-20 lg:mb-32 max-w-4xl mx-auto leading-8 scroll-mt-28">
			<SectionHeading>Contact</SectionHeading>
			<Card className="mx-auto max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-3xl">
				{' '}
				<CardHeader>
					<CardTitle>Join Me</CardTitle>
				</CardHeader>
				<CardContent>
					<AutoForm
						// Pass the schema to the form
						formSchema={formSchema}
						// You can add additional config for each field
						// to customize the UI
						fieldConfig={{
							password: {
								// Use "inputProps" to pass props to the input component
								// You can use any props that the component accepts
								inputProps: {
									type: 'password',
									placeholder: '••••••••',
								},
							},

							acceptTerms: {
								inputProps: {
									required: true,
								},
								// You can use JSX in the description
								description: (
									<>
										I agree to the{' '}
										<a
											href="#"
											className="text-primary underline"
											onClick={(e) => {
												e.preventDefault();
												alert('Terms and conditions clicked.');
											}}>
											terms and conditions
										</a>
										.
									</>
								),
							},

							birthday: {
								description: 'We need your birthday to send you a gift.',
							},

							sendMeMails: {
								// Booleans use a checkbox by default, you can use a switch instead
								fieldType: 'switch',
							},
						}}
						// Optionally, define dependencies between fields
						dependencies={[
							{
								// Hide "color" when "sendMeMails" is not checked as we only need to
								// know the color when we send mails
								sourceField: 'sendMeMails',
								type: DependencyType.HIDES,
								targetField: 'color',
								when: (sendMeMails) => !sendMeMails,
							},
						]}>
						{/* 
      Pass in a AutoFormSubmit or a button with type="submit".
      Alternatively, you can not pass a submit button
      to create auto-saving forms etc.
      */}
						<AutoFormSubmit>Send now</AutoFormSubmit>

						{/*
      All children passed to the form will be rendered below the form.
      */}
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
