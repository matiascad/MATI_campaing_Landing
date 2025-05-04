import React, { useState, FormEvent } from 'react';

interface FormData {
  email: string;
  name: string;
  phone: string;
}

const SubscriptionForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    name: '',
    phone: ''
  });
  
  const [status, setStatus] = useState<{
    message: string;
    isError: boolean;
  } | null>(null);
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);
    
    try {
      // In a real implementation, this would call your API endpoint
      // that connects to Mailchimp/MailerLite
      // For now, we'll simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setStatus({
        message: "Thank you for subscribing! You will be notified of updates.",
        isError: false
      });
      
      // Reset form
      setFormData({
        email: '',
        name: '',
        phone: ''
      });
    } catch (error) {
      setStatus({
        message: "Sorry, there was an error. Please try again later.",
        isError: true
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="subscription" className="py-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/30 to-black/90 z-0"></div>
      
      <div className="max-w-md mx-auto relative z-10">
        <div className="form-container p-8 focus-highlight">
          <h2 className="text-2xl font-bold mb-6 text-white">Get Notified</h2>
          
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-purple-300 mb-1">Email Address *</label>
              <input 
                type="email" 
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required 
                className="w-full px-4 py-3 rounded-md transition duration-200"
                placeholder="your@email.com"
                aria-required="true"
              />
            </div>
            
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-purple-300 mb-1">Name (Optional)</label>
              <input 
                type="text" 
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-md transition duration-200"
                placeholder="Your Name"
              />
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-purple-300 mb-1">Phone Number (Optional)</label>
              <input 
                type="tel" 
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-md transition duration-200"
                placeholder="+1 (123) 456-7890"
              />
            </div>
            
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full gradient-button text-white font-medium py-3 px-4 rounded-md flex justify-center items-center"
            >
              {isSubmitting ? (
                <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </span>
              ) : "Get Notified"}
            </button>
            
            {status && (
              <div className={`text-sm p-3 rounded ${status.isError ? 'bg-red-500/20 text-red-100' : 'bg-green-500/20 text-green-100'}`}>
                {status.message}
              </div>
            )}
            
            <p className="text-xs text-purple-300/70 text-center mt-4">
              Be the first to know about breakthroughs in Physical AI.<br />
              Follow our LinkedIn campaign starting May 1st!
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SubscriptionForm;