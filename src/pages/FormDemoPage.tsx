import React, { useState } from 'react'
import { Link } from 'react-router-dom'

interface FormFields {
    fullName: string
    email: string
    experienceYears: string
}

interface FormErrors {
    fullName?: string
    email?: string
    experienceYears?: string
}

export function FormDemoPage() {
    // 1. STATE FOR CONTROLLED COMPONENTS
    const [formData, setFormData] = useState<FormFields>({
        fullName: '',
        email: '',
        experienceYears: '',
    })

    // 3. STATE FOR ERROR HANDLING
    const [errors, setErrors] = useState<FormErrors>({})

    // 5. STATE FOR LOADING & SUCCESS STATUS
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [submitSuccess, setSubmitSuccess] = useState<boolean>(false)

    // Handler for text inputs (updates controlled state)
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))

        // Real-time validation clearance
        if (errors[name as keyof FormErrors]) {
            setErrors((prev) => ({
                ...prev,
                [name]: undefined,
            }))
        }
    }

    // 2. VALIDATION LOGIC
    const validateForm = (): boolean => {
        const newErrors: FormErrors = {}

        if (!formData.fullName.trim()) {
            newErrors.fullName = 'Full Name is required.'
        } else if (formData.fullName.trim().length < 3) {
            newErrors.fullName = 'Full Name must be at least 3 characters.'
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!formData.email) {
            newErrors.email = 'Email Address is required.'
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address.'
        }

        const expNum = Number(formData.experienceYears)
        if (!formData.experienceYears) {
            newErrors.experienceYears = 'Years of experience is required.'
        } else if (isNaN(expNum) || expNum < 0 || expNum > 50) {
            newErrors.experienceYears = 'Experience must be a valid number between 0 and 50.'
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    // 4. SUBMISSION HANDLER
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault() // Prevents page reload!
        setSubmitSuccess(false)

        const isValid = validateForm()
        if (!isValid) return

        setIsLoading(true) // Turn on loading state

        try {
            // Simulate API call to backend database
            await new Promise((resolve) => setTimeout(resolve, 1500))

            console.log('Form Submitted successfully:', formData)
            setSubmitSuccess(true)

            // 7. RESET THE FORM
            setFormData({
                fullName: '',
                email: '',
                experienceYears: '',
            })
            setErrors({})
        } catch (err) {
            console.error(err)
        } finally {
            setIsLoading(false) // Turn off loading state
        }
    }

    return (
        <section className="panel state-demo-page" style={{ maxWidth: '600px', margin: '0 auto' }}>
            <div className="state-demo-header">
                <div>
                    <p className="eyebrow">Interactive Tutorial</p>
                    <h2>React Forms Playground</h2>
                    <p>
                        Learn Controlled Components, Validation, Loading, Error Handling, and Form Resetting hands-on!
                    </p>
                </div>

                <Link className="button button-secondary" to="/">
                    Back home
                </Link>
            </div>

            <div style={{ marginTop: '24px' }}>
                {submitSuccess && (
                    <div style={inlineStyles.successAlert}>
                        🎉 Form submitted successfully! State reset to empty.
                    </div>
                )}

                <form onSubmit={handleSubmit} style={inlineStyles.form}>
                    {/* Full Name */}
                    <div style={inlineStyles.formGroup}>
                        <label htmlFor="fullName" style={inlineStyles.label}>
                            1. Full Name (Controlled Component)
                        </label>
                        <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            placeholder="e.g. Jane Doe"
                            disabled={isLoading}
                            style={{
                                ...inlineStyles.input,
                                borderColor: errors.fullName ? '#f87171' : 'rgba(148, 163, 184, 0.2)',
                            }}
                        />
                        {errors.fullName && <span style={inlineStyles.errorText}>{errors.fullName}</span>}
                    </div>

                    {/* Email */}
                    <div style={inlineStyles.formGroup}>
                        <label htmlFor="email" style={inlineStyles.label}>
                            2. Email Address (Regex validation)
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="e.g. jane.doe@example.com"
                            disabled={isLoading}
                            style={{
                                ...inlineStyles.input,
                                borderColor: errors.email ? '#f87171' : 'rgba(148, 163, 184, 0.2)',
                            }}
                        />
                        {errors.email && <span style={inlineStyles.errorText}>{errors.email}</span>}
                    </div>

                    {/* Experience Years */}
                    <div style={inlineStyles.formGroup}>
                        <label htmlFor="experienceYears" style={inlineStyles.label}>
                            3. Experience Years (Numeric validation)
                        </label>
                        <input
                            type="text"
                            id="experienceYears"
                            name="experienceYears"
                            value={formData.experienceYears}
                            onChange={handleChange}
                            placeholder="e.g. 3"
                            disabled={isLoading}
                            style={{
                                ...inlineStyles.input,
                                borderColor: errors.experienceYears ? '#f87171' : 'rgba(148, 163, 184, 0.2)',
                            }}
                        />
                        {errors.experienceYears && (
                            <span style={inlineStyles.errorText}>{errors.experienceYears}</span>
                        )}
                    </div>

                    {/* Submit Button (Disabled state) */}
                    <button
                        className="button"
                        type="submit"
                        disabled={isLoading}
                        style={{
                            marginTop: '12px',
                            backgroundColor: isLoading ? 'rgba(148, 163, 184, 0.2)' : undefined,
                            cursor: isLoading ? 'not-allowed' : 'pointer',
                        }}
                    >
                        {isLoading ? 'Submitting Forms Data...' : 'Submit Application'}
                    </button>
                </form>
            </div>
        </section>
    )
}

const inlineStyles: Record<string, React.CSSProperties> = {
    form: {
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        background: 'rgba(15, 23, 42, 0.45)',
        border: '1px solid rgba(148, 163, 184, 0.14)',
        padding: '24px',
        borderRadius: '16px',
        marginTop: '20px',
    },
    formGroup: {
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
    },
    label: {
        fontSize: '0.85rem',
        fontWeight: '600',
        color: '#cbd5e1',
        letterSpacing: '0.02em',
    },
    input: {
        padding: '12px 14px',
        fontSize: '15px',
        borderRadius: '10px',
        border: '1px solid rgba(148, 163, 184, 0.2)',
        background: 'rgba(15, 23, 42, 0.6)',
        color: '#f8fafc',
        outline: 'none',
        transition: 'border-color 0.2s',
    },
    errorText: {
        fontSize: '12px',
        color: '#f87171',
        fontWeight: '500',
        marginTop: '2px',
    },
    successAlert: {
        padding: '14px',
        backgroundColor: 'rgba(16, 185, 129, 0.15)',
        border: '1px solid rgba(16, 185, 129, 0.3)',
        color: '#34d399',
        borderRadius: '12px',
        fontSize: '14px',
        fontWeight: '500',
        textAlign: 'center',
        marginBottom: '20px',
    },
}
