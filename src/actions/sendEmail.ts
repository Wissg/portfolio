"use server";

import React from "react";
import {Resend} from "resend";
import ContactFormEmail from "@/email-template/contact-form-email";
import {getLogger} from "@/utils/logUtils";

const resend: Resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (message: string, email: string) => {
    const logger = getLogger('emailService'); // Use a descriptive name for your logger

    logger.info('Starting to send email', {email, message});

    try {
        const data = await resend.emails.send({
            from: "Contact Form <onboarding@resend.dev>",
            to: "addictotakulover@gmail.com",
            subject: "Message from contact form",
            replyTo: email,
            react: React.createElement(ContactFormEmail, {
                message: message,
                senderEmail: email,
            }),
        });

        logger.info('Email sent successfully', {email, data});
        if (data.error != null) {
            return {error: data.error.message};
        }
        return {data};
    } catch (error) {
        if (error instanceof Error) {
            logger.error('Failed to send email', {email, error: error.message});
        } else {
            logger.error('Failed to send email: Unknown error', {email});
        }

        return {error: "Cannot send email"};
    }
};