
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

interface ConsultationFormProps {
  onSubmit?: () => void;
  onCancel?: () => void;
}

const ConsultationForm = ({ onSubmit, onCancel }: ConsultationFormProps) => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Consultation request submitted",
      description: "We'll get back to you within 24 hours.",
    });
    if (onSubmit) onSubmit();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <label htmlFor="name" className="text-sm font-medium">Name</label>
        <Input id="name" placeholder="Your full name" required />
      </div>
      
      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium">Email</label>
        <Input id="email" type="email" placeholder="your.email@example.com" required />
      </div>
      
      <div className="space-y-2">
        <label htmlFor="company" className="text-sm font-medium">Company</label>
        <Input id="company" placeholder="Your company name" />
      </div>
      
      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium">How can we help?</label>
        <Textarea id="message" placeholder="Tell us about your project or inquiry" rows={4} required />
      </div>
      
      <div className="flex justify-end pt-2 space-x-2">
        {onCancel && (
          <Button type="button" variant="outline" onClick={onCancel}>
            Cancel
          </Button>
        )}
        <Button type="submit" rightIcon={<span className="ml-1">→</span>}>
          Submit Request
        </Button>
      </div>
    </form>
  );
};

export default ConsultationForm;
