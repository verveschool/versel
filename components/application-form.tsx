"use client"

import { useState, useRef, ChangeEvent, FormEvent } from "react"

interface ApplicationFormProps {
  isOpen: boolean
  onClose: () => void
}

interface FormData {
  fullName: string
  mobile: string
  email: string
  city: string
  currentRole: string
  yearsOfExperience: string
  resume: File | null
  linkedIn: string
  motivation: string
}

export function ApplicationForm({ isOpen, onClose }: ApplicationFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState("")
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    mobile: "",
    email: "",
    city: "",
    currentRole: "",
    yearsOfExperience: "",
    resume: null,
    linkedIn: "",
    motivation: "",
  })
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    setError("")
  }

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      if (file.type === "application/pdf" || file.type === "application/msword" || file.type === "application/vnd.openxmlformats-officedocument.wordprocessingml.document") {
        setFormData((prev) => ({
          ...prev,
          resume: file,
        }))
        setError("")
      } else {
        setError("Please upload a PDF or Word document")
      }
    }
  }

  const validateForm = () => {
    if (!formData.fullName.trim()) return "Full name is required"
    if (!formData.mobile.trim()) return "Mobile number is required"
    if (!formData.email.trim()) return "Email is required"
    if (!formData.email.includes("@")) return "Valid email is required"
    if (!formData.city.trim()) return "City is required"
    if (!formData.currentRole.trim()) return "Current role or latest education is required"
    if (!formData.yearsOfExperience) return "Years of experience is required"
    if (!formData.resume) return "Resume is required"
    if (!formData.motivation.trim()) return "Please answer the motivation question"
    return ""
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const validationError = validateForm()
    if (validationError) {
      setError(validationError)
      return
    }

    setIsSubmitting(true)
    setError("")

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Here you would typically send the form data to your backend
      console.log("[v0] Application submitted:", formData)

      setIsSuccess(true)

      // Reset form after 3 seconds
      setTimeout(() => {
        handleClose()
      }, 3000)
    } catch (err) {
      setError("An error occurred. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleClose = () => {
    setFormData({
      fullName: "",
      mobile: "",
      email: "",
      city: "",
      currentRole: "",
      yearsOfExperience: "",
      resume: null,
      linkedIn: "",
      motivation: "",
    })
    setIsSuccess(false)
    setError("")
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="w-full max-w-2xl max-h-[90vh] overflow-y-auto border border-white/15 bg-background/95 shadow-2xl">
        {isSuccess ? (
          <div className="flex flex-col items-center justify-center p-8 md:p-12">
            <div className="mb-6 h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
              <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="mb-4 text-xl font-semibold text-foreground">Application received</h2>
            <p className="mb-8 max-w-md text-center text-foreground/65">
              Thank you for your application. Every application is carefully reviewed. Shortlisted candidates will be contacted within 2-3 business days.
            </p>
            <button
              onClick={handleClose}
              className="inline-flex items-center justify-center border border-primary bg-primary px-6 py-3 text-[13px] font-semibold uppercase tracking-[0.18em] text-black transition hover:opacity-90"
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <div className="border-b border-white/10 px-6 py-6 md:px-8">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-foreground">Apply now</h2>
                <button
                  onClick={handleClose}
                  className="inline-flex h-8 w-8 items-center justify-center rounded hover:bg-white/10 transition"
                  aria-label="Close form"
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-6">
              {error && (
                <div className="rounded-sm border border-red-500/50 bg-red-500/10 p-3 text-sm text-red-200">
                  {error}
                </div>
              )}

              {/* Full Name */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Full name
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full border border-white/15 bg-white/5 px-4 py-3 text-foreground placeholder:text-foreground/40 transition hover:bg-white/8 focus:outline-none focus:ring-1 focus:ring-primary/50"
                  placeholder="John Doe"
                />
              </div>

              {/* Mobile Number */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Mobile number
                </label>
                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleInputChange}
                  className="w-full border border-white/15 bg-white/5 px-4 py-3 text-foreground placeholder:text-foreground/40 transition hover:bg-white/8 focus:outline-none focus:ring-1 focus:ring-primary/50"
                  placeholder="+91 9876543210"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full border border-white/15 bg-white/5 px-4 py-3 text-foreground placeholder:text-foreground/40 transition hover:bg-white/8 focus:outline-none focus:ring-1 focus:ring-primary/50"
                  placeholder="john@example.com"
                />
              </div>

              {/* City */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  City
                </label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  className="w-full border border-white/15 bg-white/5 px-4 py-3 text-foreground placeholder:text-foreground/40 transition hover:bg-white/8 focus:outline-none focus:ring-1 focus:ring-primary/50"
                  placeholder="Bangalore"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                {/* Current Role */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Current role or latest education
                  </label>
                  <input
                    type="text"
                    name="currentRole"
                    value={formData.currentRole}
                    onChange={handleInputChange}
                    className="w-full border border-white/15 bg-white/5 px-4 py-3 text-foreground placeholder:text-foreground/40 transition hover:bg-white/8 focus:outline-none focus:ring-1 focus:ring-primary/50"
                    placeholder="e.g., BDE at XYZ"
                  />
                </div>

                {/* Years of Experience */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Years of experience
                  </label>
                  <select
                    name="yearsOfExperience"
                    value={formData.yearsOfExperience}
                    onChange={handleInputChange}
                    className="w-full border border-white/15 bg-white/5 px-4 py-3 text-foreground placeholder:text-foreground/40 transition hover:bg-white/8 focus:outline-none focus:ring-1 focus:ring-primary/50"
                  >
                    <option value="">Select...</option>
                    <option value="fresher">Fresher (0 years)</option>
                    <option value="0-1">0-1 years</option>
                    <option value="1-2">1-2 years</option>
                    <option value="2-3">2-3 years</option>
                    <option value="3-5">3-5 years</option>
                    <option value="5+">5+ years</option>
                  </select>
                </div>
              </div>

              {/* Resume Upload */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Resume <span className="text-primary">*</span>
                </label>
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="w-full border-2 border-dashed border-white/20 px-4 py-6 text-center transition hover:border-white/40 hover:bg-white/5"
                >
                  {formData.resume ? (
                    <div className="flex items-center justify-center gap-2 text-foreground/75">
                      <svg className="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {formData.resume.name}
                    </div>
                  ) : (
                    <div className="flex flex-col items-center gap-1.5 text-foreground/60">
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                      <span className="text-sm">Upload resume (PDF or Word)</span>
                    </div>
                  )}
                </button>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  className="hidden"
                  aria-label="Upload resume"
                />
              </div>

              {/* LinkedIn Profile */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  LinkedIn profile <span className="text-foreground/40">(optional)</span>
                </label>
                <input
                  type="url"
                  name="linkedIn"
                  value={formData.linkedIn}
                  onChange={handleInputChange}
                  className="w-full border border-white/15 bg-white/5 px-4 py-3 text-foreground placeholder:text-foreground/40 transition hover:bg-white/8 focus:outline-none focus:ring-1 focus:ring-primary/50"
                  placeholder="https://linkedin.com/in/yourprofile"
                />
              </div>

              {/* Motivation */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Why do you want a customer-facing role?
                </label>
                <textarea
                  name="motivation"
                  value={formData.motivation}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full border border-white/15 bg-white/5 px-4 py-3 text-foreground placeholder:text-foreground/40 transition hover:bg-white/8 focus:outline-none focus:ring-1 focus:ring-primary/50 resize-none"
                  placeholder="Share what excites you about customer-facing work..."
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4 flex gap-3">
                <button
                  type="button"
                  onClick={handleClose}
                  className="flex-1 border border-white/20 px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-foreground/75 transition hover:bg-white/5 hover:text-foreground"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 border border-primary bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-black transition hover:opacity-90 disabled:opacity-50"
                >
                  {isSubmitting ? "Submitting..." : "Submit application"}
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  )
}
