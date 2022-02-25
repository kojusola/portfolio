import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import * as Chakra from "@chakra-ui/react"

const Hero = ({ siteTitle }) => {
  return (
    <Chakra.Box
      px={{ base: "20px", md: "100px" }}
      pt={{ base: "64px", md: "164px" }}
    >
      <Chakra.Text
        fontFamily="Roboto"
        fontWeight="700"
        fontSize={{ base: "48px", md: "64px" }}
        lineHeight={{ base: "72px", md: "75px" }}
        mb="0px"
      >
        Frontend Developer
      </Chakra.Text>
      <Chakra.Box w="100%" maxW="547px" mt={{ base: "24px", md: "56px" }}>
        <Chakra.Text
          fontFamily="Roboto"
          fontWeight="400"
          fontSize={{ base: "16px", md: "16px" }}
          lineHeight={{ base: "27px", md: "27px" }}
          mb="0px"
        >
          I’m{" "}
          <Chakra.Box as="span" fontWeight="700">
            Adeola
          </Chakra.Box>
          , a{" "}
          <Chakra.Box as="span" fontWeight="700">
            Frontend Developer
          </Chakra.Box>{" "}
          based in{" "}
          <Chakra.Box as="span" fontWeight="700">
            Lagos, Nigeria.
          </Chakra.Box>{" "}
          I create interactive experiences for amazing people using modern
          frontend frameworks such as ReactJS and other technologies in building
          functional web applications. I have experience in building testable
          and well-organized production-quality code while collaborating in a
          team of engineers and designers. I am currently exploring
          decentralized web.
        </Chakra.Text>
      </Chakra.Box>
    </Chakra.Box>
  )
}

export default Hero
