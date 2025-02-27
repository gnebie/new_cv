import { useState } from "react";
import axios from "axios";

import config from '../config';


export function useContactForm() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);

        try {
            await axios.post(`${config.backendEmailUrl}`, formData);
            setIsSubmitted(true);
            setFormData({ name: "", email: "", message: "" });

            setTimeout(() => setIsSubmitted(false), 3000);
        } catch (err) {
            setError("❌ Une erreur est survenue, veuillez réessayer.");
            console.error("Erreur lors de l'envoi du message:", err);
        } finally {
            setIsSubmitting(false);
        }
    };

    return { formData, isSubmitting, isSubmitted, error, handleChange, handleSubmit };
}
