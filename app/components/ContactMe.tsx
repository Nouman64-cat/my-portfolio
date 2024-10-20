// components/ContactMe.tsx
import React, { forwardRef } from 'react';

const ContactMe = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <section ref={ref} id="contact" className="min-h-screen  flex items-center justify-center" data-scroll-section>
      <h2 className="text-4xl md:text-5xl font-bold">Contact Me</h2>
    </section>
  );
});

export default ContactMe;
