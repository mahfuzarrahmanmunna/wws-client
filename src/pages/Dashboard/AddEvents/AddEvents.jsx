import React, { useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure/useAxiosSecure";

const AddEvents = () => {
    const axiosSecure = useAxiosSecure();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setSuccess("");

        const form = e.currentTarget;
        const fd = new FormData(form);

        const city = fd.get("city")?.toString().trim();
        const month = fd.get("month")?.toString().trim();
        const destination = fd.get("destination")?.toString().trim();
        const programType = fd.get("programType")?.toString().trim();
        const duration = fd.get("duration")?.toString().trim();
        const description = fd.get("description")?.toString().trim();
        const deadline = fd.get("deadline")?.toString().trim();
        const eligibility = fd.get("eligibility")?.toString().trim();
        const benefits = fd.get("benefits")?.toString().trim();
        const applicationLink = fd.get("applicationLink")?.toString().trim();
        const organizer = fd.get("organizer")?.toString().trim();
        const contactEmail = fd.get("contactEmail")?.toString().trim();

        if (
            !city ||
            !month ||
            !destination ||
            !programType ||
            !duration ||
            !description ||
            !deadline ||
            !eligibility ||
            !benefits ||
            !applicationLink ||
            !organizer ||
            !contactEmail
        ) {
            setError("Please fill in all required fields.");
            return;
        }

        const payload = {
            city,
            month,
            destination,
            programType,
            duration,
            description,
            deadline,
            eligibility,
            benefits,
            applicationLink,
            organizer,
            contactEmail,
        };

        try {
            setIsSubmitting(true);
            const res = await axiosSecure.post("/add-new-event", payload);
            if (res?.status === 201) {
                setSuccess("Event added successfully!");
                form.reset();
            } else {
                setError("Failed to add event. Please try again.");
            }
        } catch (err) {
            setError(err?.response?.data?.message || "Failed to add event.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-8">
            <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
                <div className="px-6 sm:px-8 py-6 border-b border-gray-100">
                    <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">
                        Add New Event
                    </h1>
                    <p className="mt-1 text-slate-600">
                        Enter details to list a new event.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="px-6 sm:px-8 py-6 space-y-6">
                    {error && (
                        <div className="rounded-lg border border-red-200 bg-red-50 text-red-700 px-4 py-3 text-sm">
                            {error}
                        </div>
                    )}
                    {success && (
                        <div className="rounded-lg border border-green-200 bg-green-50 text-green-700 px-4 py-3 text-sm">
                            {success}
                        </div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">
                                City<span className="text-red-500">*</span>
                            </label>
                            <input
                                name="city"
                                type="text"
                                className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="e.g., Chittagong"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">
                                Month<span className="text-red-500">*</span>
                            </label>
                            <input
                                name="month"
                                type="text"
                                className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="e.g., December"
                                required
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">
                                Destination<span className="text-red-500">*</span>
                            </label>
                            <input
                                name="destination"
                                type="text"
                                className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="e.g., Netherlands"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">
                                Program Type<span className="text-red-500">*</span>
                            </label>
                            <input
                                name="programType"
                                type="text"
                                className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="e.g., Agriculture & Environment"
                                required
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">
                            Duration<span className="text-red-500">*</span>
                        </label>
                        <input
                            name="duration"
                            type="text"
                            className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="e.g., 2 years"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">
                            Description<span className="text-red-500">*</span>
                        </label>
                        <textarea
                            name="description"
                            rows="4"
                            className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Describe the event..."
                            required
                        ></textarea>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">
                                Deadline<span className="text-red-500">*</span>
                            </label>
                            <input
                                name="deadline"
                                type="date"
                                className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">
                                Organizer<span className="text-red-500">*</span>
                            </label>
                            <input
                                name="organizer"
                                type="text"
                                className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="e.g., Netherlands Education Support"
                                required
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">
                            Eligibility<span className="text-red-500">*</span>
                        </label>
                        <input
                            name="eligibility"
                            type="text"
                            className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="e.g., Bachelor’s degree in agriculture..."
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">
                            Benefits<span className="text-red-500">*</span>
                        </label>
                        <input
                            name="benefits"
                            type="text"
                            className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="e.g., Full tuition, accommodation subsidy..."
                            required
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">
                                Application Link<span className="text-red-500">*</span>
                            </label>
                            <input
                                name="applicationLink"
                                type="url"
                                className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="https://example.com/apply"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">
                                Contact Email<span className="text-red-500">*</span>
                            </label>
                            <input
                                name="contactEmail"
                                type="email"
                                className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="info@example.com"
                                required
                            />
                        </div>
                    </div>

                    <div className="pt-2 flex items-center justify-end gap-3">
                        <button
                            type="reset"
                            className="inline-flex items-center rounded-full border-2 border-blue-500 px-6 py-3 text-sm font-medium text-blue-600 hover:bg-blue-50 transition-colors disabled:opacity-60"
                            disabled={isSubmitting}
                        >
                            Reset
                        </button>
                        <button
                            type="submit"
                            className="inline-flex items-center rounded-full bg-[#11AD00] hover:bg-[#4CADFF] px-6 py-3 text-white text-sm font-medium transition-colors disabled:opacity-60"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? "Submitting..." : "Add Event"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddEvents;
