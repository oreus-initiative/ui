// Generated with util/create-component.js
export interface ContactProps {
  newsletter?: {
    title?: string;
    description?: string;
    inputPlaceholder?: string;
    buttonLabel?: string;
    onSubscribe?: any;
    errors?: {
      required?: string;
      valid?: string;
    }
  }
  coords: {
    title?: string;
    address?: string;
    phone?: string;
    email?: string;
  }
  style?: any;
  className?: string;
}

export interface ContactNewsletter;