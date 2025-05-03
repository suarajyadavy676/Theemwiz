import React from "react";
import { Box, Text, Heading, IconButton } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Dummy team data
const team = [
  {
    name: "Azah Anyeni",
    role: "Designer",
    image: "/Bitmap1.png",
  },
  {
    name: "Roelof Bekkenenks",
    role: "React Developer",
    image: "/Bitmap2.png",
  },
  {
    name: "Leonardo Oliveira",
    role: "Illustrator",
    image: "/Bitmap3.png",
  },
  {
    name: "Izabella Tabakova",
    role: "Product Designer",
    image: "/Bitmap4.png",
  },
];

const TeamSection = () => {
  return (
    <Box className="bg-[#1B1F36] text-white py-16 px-4 md:px-20 relative">
      {/* Header */}
      <Box className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
        <Box>
          <Text className="text-sm text-[#f4715f] tracking-wider uppercase mb-2">
            Our Team
          </Text>
          <Heading size="lg" fontWeight="extrabold" lineHeight="1.2">
            Team of Designers <br className="hidden md:block" />
            and Developers
          </Heading>
        </Box>

        {/* Arrows (desktop only) */}
        <Box className="hidden md:flex space-x-2 mt-6 md:mt-0">
          <IconButton
            id="prevBtn"
            icon={<FaArrowLeft />}
            aria-label="Previous"
            size="sm"
            bg="transparent"
            border="1px solid #ffffff33"
            color="white"
            _hover={{ bg: "#ffffff10" }}
            isRound
          />
          <IconButton
            id="nextBtn"
            icon={<FaArrowRight />}
            aria-label="Next"
            size="sm"
            bg="transparent"
            border="1px solid #ffffff33"
            color="white"
            _hover={{ bg: "#ffffff10" }}
            isRound
          />
        </Box>
      </Box>

      {/* Swiper */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation={{
          prevEl: "#prevBtn",
          nextEl: "#nextBtn",
        }}
        pagination={{
          el: ".custom-pagination",
          clickable: true,
          type: "bullets", // Use bullets as pagination style
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false, // Keep autoplay running
        }}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 4 },
        }}
        className="group"
      >
        {team.map((member, idx) => (
          <SwiperSlide key={idx}>
            <Box className="border border-white/10 rounded-lg p-4 text-center bg-[#1B1F36] h-full">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-80 object-cover rounded-md mb-4"
              />
              <Text fontWeight="bold">{member.name}</Text>
              <Text fontSize="sm" color="gray.400">
                {member.role}
              </Text>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Pagination (mobile and desktop) */}
      <Box className="custom-pagination mt-6 flex justify-center" />
    </Box>
  );
};

export default TeamSection;
