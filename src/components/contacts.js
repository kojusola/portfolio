import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import * as Chakra from "@chakra-ui/react"

const Contacts = ({ siteTitle }) => {
  return (
    <Chakra.Box
      px={{ base: "20px", md: "100px" }}
      pt={{ base: "40px", md: "64px" }}
      pb={{ base: "102px", md: "200px" }}
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
      >
        <Chakra.Text
          fontFamily="Roboto"
          fontWeight="400"
          fontSize="18px"
          lineHeight="21px"
          mb="0px"
        >
          <Chakra.Link>Github</Chakra.Link>
        </Chakra.Text>
        <Chakra.Text
          fontFamily="Roboto"
          fontWeight="400"
          fontSize="18px"
          lineHeight="21px"
          mb="0px"
        >
          <Chakra.Link>LinkedIn</Chakra.Link>
        </Chakra.Text>
        <Chakra.Text
          fontFamily="Roboto"
          fontWeight="400"
          fontSize="18px"
          lineHeight="21px"
          mb="0px"
        >
          <Chakra.Link> Twitter</Chakra.Link>
        </Chakra.Text>
        <Chakra.Text
          fontFamily="Roboto"
          fontWeight="400"
          fontSize="18px"
          lineHeight="21px"
          mb="0px"
        >
          <Chakra.Link>CV</Chakra.Link>
        </Chakra.Text>
      </Chakra.Box>
    </Chakra.Box>
  )
}

export default Contacts
