import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import * as Chakra from "@chakra-ui/react"
import { Tween, Reveal, ScrollTrigger } from "react-gsap"

const Contacts = ({ siteTitle }) => {
  return (
    <Chakra.Box
      className="contact"
      px={{ base: "20px", md: "100px" }}
      pt={{ base: "40px", md: "64px" }}
      pb={{ base: "102px", md: "200px" }}
    >
      <Chakra.Box width="auto" height="75px" overflow="hidden">
        <Reveal repeat>
          <Tween
            from={{
              y: "200px",
              scrollTrigger: {
                trigger: ".contact",
                start: "-350px top",
                end: "300px bottom",
                scrub: 0.1,
              },
            }}
          >
            <Chakra.Text
              fontFamily="Roboto"
              fontWeight="700"
              fontSize="64px"
              lineHeight="75px"
              color="#E5E5E5"
              whiteSpace="nowrap"
            >
              Contact Info
            </Chakra.Text>
          </Tween>
        </Reveal>
      </Chakra.Box>
      <Chakra.Box maxWidth="865px" width="100%">
        <Chakra.Text
          fontFamily="Roboto"
          fontWeight="700"
          fontSize={{ base: "48px", md: "64px" }}
          lineHeight={{ base: "74px", md: "75px" }}
        >
          Send that DM, Let’s work together.
        </Chakra.Text>
      </Chakra.Box>
      <Chakra.Box
        display="flex"
        maxWidth="320px"
        alignItems="center"
        justifyContent="space-between"
        width="100%"
        height="25px"
        overflow="hidden"
        mt="32px"
      >
        <Tween
          from={{
            y: "200px",
            scrollTrigger: {
              trigger: ".contact",
              start: "-350px top",
              end: "300px bottom",
              scrub: 0.8,
            },
          }}
          duration={1.5}
          stagger={0.2}
        >
          <Chakra.Box
            fontFamily="Roboto"
            fontWeight="400"
            fontSize="18px"
            lineHeight="21px"
            mb="0px"
            position="relative"
            color="black"
            _before={{
              content: '""',
              position: "absolute",
              width: "100%",
              transform: "scale(0)",
              height: "1px",
              bottom: "0",
              right: "0",
              backgroundColor: "black",
              transformOrigin: "bottom right ",
              transition: "transform 0.3s ease-out",
            }}
            display="block"
            opacity={{ base: "1", md: "1" }}
            transition="opacity 0.5s, color 0.5s"
            _hover={{
              color: "black",
              opacity: "1",
            }}
            css={{
              ":hover:before": {
                transform: "scale(1)",
                transformOrigin: "bottom left",
              },
            }}
          >
            Github
          </Chakra.Box>
          <Chakra.Box
            fontFamily="Roboto"
            fontWeight="400"
            fontSize="18px"
            lineHeight="21px"
            mb="0px"
            position="relative"
            color="black"
            _before={{
              content: '""',
              position: "absolute",
              width: "100%",
              transform: "scale(0)",
              height: "1px",
              bottom: "0",
              right: "0",
              backgroundColor: "black",
              transformOrigin: "bottom right ",
              transition: "transform 0.3s ease-out",
            }}
            display="block"
            opacity={{ base: "1", md: "1" }}
            transition="opacity 0.5s, color 0.5s"
            _hover={{
              color: "black",
              opacity: "1",
            }}
            css={{
              ":hover:before": {
                transform: "scale(1)",
                transformOrigin: "bottom left",
              },
            }}
          >
            LinkedIn
          </Chakra.Box>
          <Chakra.Box
            fontFamily="Roboto"
            fontWeight="400"
            fontSize="18px"
            lineHeight="21px"
            mb="0px"
            position="relative"
            color="black"
            _before={{
              content: '""',
              position: "absolute",
              width: "100%",
              transform: "scale(0)",
              height: "1px",
              bottom: "0",
              right: "0",
              backgroundColor: "black",
              transformOrigin: "bottom right ",
              transition: "transform 0.3s ease-out",
            }}
            display="block"
            opacity={{ base: "1", md: "1" }}
            transition="opacity 0.5s, color 0.5s"
            _hover={{
              color: "black",
              opacity: "1",
            }}
            css={{
              ":hover:before": {
                transform: "scale(1)",
                transformOrigin: "bottom left",
              },
            }}
          >
            Twitter
          </Chakra.Box>
          <Chakra.Box
            fontFamily="Roboto"
            fontWeight="400"
            fontSize="18px"
            lineHeight="21px"
            mb="0px"
            position="relative"
            color="black"
            _before={{
              content: '""',
              position: "absolute",
              width: "100%",
              transform: "scale(0)",
              height: "1px",
              bottom: "0",
              right: "0",
              backgroundColor: "black",
              transformOrigin: "bottom right ",
              transition: "transform 0.3s ease-out",
            }}
            display="block"
            opacity={{ base: "1", md: "1" }}
            transition="opacity 0.5s, color 0.5s"
            _hover={{
              color: "black",
              opacity: "1",
            }}
            css={{
              ":hover:before": {
                transform: "scale(1)",
                transformOrigin: "bottom left",
              },
            }}
          >
            CV
          </Chakra.Box>
        </Tween>
      </Chakra.Box>
    </Chakra.Box>
  )
}

export default Contacts
