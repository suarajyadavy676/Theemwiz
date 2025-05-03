import React from 'react';
import { Box, Heading, Text, SimpleGrid } from '@chakra-ui/react';
import PricingCard from './PricingCard';

const PricingSection = () => {
  const pricingData = [
    {
      title: 'Consultation',
      price: 'Free',
      description: 'Your digital marketing efforts, instead of handling in-house.',
      features: [
        { label: 'Brand Design', active: true },
        { label: 'Market Analysis', active: false },
        { label: 'Production', active: false },
      ],
      isPopular: false,
    },
    {
      title: 'Design',
      price: '$1500',
      description: 'Provide your business with a variety of digital solutions to promote.',
      features: [
        { label: 'Brand Design', active: true },
        { label: 'Market Analysis', active: true },
        { label: 'Production', active: false },
      ],
      isPopular: true,
    },
    {
      title: 'Design + Code',
      price: '$2900',
      description: 'Help you hit your marketing goals and grow your business.',
      features: [
        { label: 'Brand Design', active: true },
        { label: 'Market Analysis', active: true },
        { label: 'Production', active: true },
      ],
      isPopular: false,
    },
  ];

  return (
    <Box className="bg-[#ffeee6] py-16 px-4">
      {/* Section Header */}
      <Box className="text-center mb-12">
        <Text className="uppercase text-[#cc6f57] text-sm tracking-widest">Pricing</Text>
        <Heading className="text-4xl font-bold text-[#2d2d2d] mt-2">
          Check Our <br /> Pricing Plans
        </Heading>
      </Box>

      {/* Cards Grid */}
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} justifyItems="center">
        {pricingData.map((card, idx) => (
          <PricingCard key={idx} {...card} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default PricingSection;
