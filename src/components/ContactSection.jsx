import React from 'react';
import { Input, Textarea, Select, Button } from '@chakra-ui/react';

const ContactSection = () => {
  return (
    <div className="relative w-full h-screen flex items-center px-4">
      {/* Google Maps Embed */}
      <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.2493877041707!2d72.82572867418814!3d19.227960047186414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b14a01d5ccbd%3A0x27203f4cf2daa32d!2sDr%20Babasaheb%20Ambedkar%20Rd%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1745918536360!5m2!1sen!2sin"
        className="absolute top-0 left-0 w-full h-full"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      {/* Contact Form Container */}
      <div className="bg-white rounded-md p-6 shadow-lg w-full max-w-md z-10" style={{ marginLeft: '30px' }}>
        <h2 className="text-lg font-semibold mb-4">Get In Touch</h2>

        {/* Form Fields */}
        <form className="space-y-4">
          {/* Email Input */}
          <Input
            placeholder="Your email"
            type="email"
            variant="filled"
            borderColor="#F3D1BF"
            bg="white"
            _hover={{ borderColor: "#F3D1BF" }}
            _focus={{ borderColor: "#F3D1BF" }}
          />

          {/* Subject Select */}
          <Select
            placeholder="Subject"
            variant="filled"
            borderColor="#F3D1BF"
            bg="white"
            _hover={{ borderColor: "#F3D1BF" }}
            _focus={{ borderColor: "#F3D1BF" }}
            iconColor="#F3D1BF"  // This will set the color of the icon inside the select dropdown
          >
            <option>General</option>
            <option>Support</option>
            <option>Business</option>
          </Select>

          {/* Message Textarea */}
          <Textarea
            placeholder="Message"
            variant="filled"
            borderColor="#F3D1BF"
            bg="white"
            _hover={{ borderColor: "#F3D1BF" }}
            _focus={{ borderColor: "#F3D1BF" }}
          />

          {/* Submit Button */}
          <Button colorScheme="red" width="full">
            SUBMIT NOW
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ContactSection;
