import React from 'react';
import { MessageCircle } from 'lucide-react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

interface WhatsAppButtonProps {
  className?: string;
  message?: string;
  text?: string;
  variant?: 'solid' | 'outline' | 'floating';
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ 
  className, 
  message = 'Hi, I would like to enquire about Mehendi services.',
  text = 'Book on WhatsApp',
  variant = 'solid'
}) => {
  const phoneNumber = '917395870780';
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  const baseClasses = "inline-flex items-center justify-center gap-2 font-medium transition-all duration-300 rounded-full";
  
  const variants = {
    solid: "bg-gradient-brand text-white px-6 py-3 hover:glow-primary hover:scale-105",
    outline: "border border-primary text-white px-6 py-3 hover:bg-primary/10 hover:glow-primary",
    floating: "fixed bottom-6 right-6 bg-gradient-brand text-white p-4 shadow-lg hover:scale-110 z-50 glow-primary"
  };

  return (
    <a 
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={twMerge(clsx(baseClasses, variants[variant], className))}
    >
      <MessageCircle size={variant === 'floating' ? 28 : 20} />
      {variant !== 'floating' && <span>{text}</span>}
    </a>
  );
};

export default WhatsAppButton;
