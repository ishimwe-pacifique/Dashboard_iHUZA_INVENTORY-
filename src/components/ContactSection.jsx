
import { MapPin, Mail, Phone, AlertCircle, CheckCircle } from "lucide-react"
import { useState } from "react"


const Input = ({ type = "text", placeholder, error, value, onChange, name, label, className = "", ...props }) => {
  return (
    <div className="space-y-1">
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {label} <span className="text-red-500">*</span>
        </label>
      )}
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-colors bg-white ${
          error ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : 'border-gray-300'
        } ${className}`}
        {...props}
      />
      {error && (
        <div className="flex items-center space-x-1 text-red-500 text-sm mt-1">
          <AlertCircle className="w-4 h-4" />
          <p>{error}</p>
        </div>
      )}
    </div>
  )
}

// Clean Textarea component
const Textarea = ({ placeholder, error, value, onChange, name, label, rows = 6, className = "", ...props }) => {
  return (
    <div className="space-y-1">
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {label} <span className="text-red-500">*</span>
        </label>
      )}
      <textarea
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        rows={rows}
        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-colors resize-none bg-white ${
          error ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : 'border-gray-300'
        } ${className}`}
        {...props}
      />
      {error && (
        <div className="flex items-center space-x-1 text-red-500 text-sm mt-1">
          <AlertCircle className="w-4 h-4" />
          <p>{error}</p>
        </div>
      )}
    </div>
  )
}

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

 
  const validateForm = () => {
    const newErrors = {}
    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters"
    }

      
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email"
    }

      
    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required"
    } else if (formData.subject.trim().length < 3) {
      newErrors.subject = "Subject must be at least 3 characters"
    }

      
    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters"
    }

    return newErrors
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))

    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }))
    }

    if (submitStatus) {
      setSubmitStatus(null)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
      
    const validationErrors = validateForm()
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      setSubmitStatus('error')
      return
    }

    setIsSubmitting(true)
    setSubmitStatus(null)
    setErrors({})

    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      console.log("Form submitted:", formData)
      
        
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
      setSubmitStatus('success')
      
        
      setTimeout(() => setSubmitStatus(null), 5000)
      
    } catch (error) {
      console.error("Submission error:", error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      content: "Location KG 9 Ave, Kigali",
    },
    {
      icon: Mail,
      title: "Email",
      content: "businesscafe@info.com",
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+250788183628",
    },
  ]

  return (
    <section id="contact" className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <img
          src="https://th.bing.com/th/id/OSK.HEROU-8cLZ1wjJJLIu7Y8LLIR0TsYJyraJi9w7B9Wdv9xC4?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3"
          alt="World Map Background"
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-teal-600">Contact Us</h3>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">Say Hello</h2>
            </div>
            <div className="space-y-8">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon
                return (
              <div key={index} className="flex items-start space-x-4">
  {/* Dashed circular border wrapper */}
  <div className="w-16 h-16 rounded-full border-2 border-dashed border-teal-600 flex items-center justify-center flex-shrink-0">
    {/* Solid teal inner circle with icon */}
    <div className="bg-teal-600 w-12 h-12 rounded-full flex items-center justify-center">
      <IconComponent className="w-6 h-6 text-white" />
    </div>
  </div>

  {/* Title and content */}
  <div>
    <h4 className="text-xl font-bold text-gray-900 mb-1">{info.title}</h4>
    <p className="text-gray-600">{info.content}</p>
  </div>
</div>

                )
              })}
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="space-y-4 mb-8">
              <h3 className="text-lg font-semibold text-teal-600">Have Question ?</h3>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">Send a Message</h2>
            </div>


            {submitStatus === 'success' && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <p className="text-green-800">Message sent successfully! We'll get back to you soon.</p>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-center space-x-2">
                <AlertCircle className="w-5 h-5 text-red-600" />
                <p className="text-red-800">Please fix the errors and try again.</p>
              </div>
            )}

            <div className="space-y-6">
              <Input
                type="text"
                name="name"
                label="Full Name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleInputChange}
                error={errors.name}
              />

              <Input
                type="email"
                name="email"
                label="Email Address"
                placeholder="Enter your email address"
                value={formData.email}
                onChange={handleInputChange}
                error={errors.email}
              />

              <Input
                type="text"
                name="subject"
                label="Subject"
                placeholder="What is this regarding?"
                value={formData.subject}
                onChange={handleInputChange}
                error={errors.subject}
              />

              <Textarea
                name="message"
                label="Message"
                placeholder="Tell us more about your inquiry..."
                value={formData.message}
                onChange={handleInputChange}
                error={errors.message}
                rows={6}
              />

              <button
                type="button"
                onClick={handleSubmit}
                disabled={isSubmitting}
                className={`w-full flex items-center justify-center space-x-2 px-8 py-4 rounded-lg font-semibold transition-all duration-200 ${
                  !isSubmitting
                    ? 'bg-teal-600 hover:bg-teal-700 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5'
                    : 'bg-gray-400 text-white cursor-not-allowed'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <span>Send Message</span>
                )}
              </button>
              </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection