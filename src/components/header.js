import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import * as Chakra from "@chakra-ui/react"
import Hamburger from "../images/hamburger.inline.svg"
import Cancel from "../images/cancel.inline.svg"

const Header = ({ siteTitle }) => {
  const { isOpen, onOpen, onClose } = Chakra.useDisclosure()
  const firstField = React.useRef()
  return (
    <Chakra.Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      paddingTop="65px"
      px={{ base: "20px", md: "100px" }}
      width="100%"
    >
      <Chakra.Text
        fontFamily="Roboto"
        fontWeight="700"
        fontSize="20px"
        lineHeight="23px"
        mb="0px"
      >
        Kojusola
      </Chakra.Text>
      <Chakra.Box
        display={{ base: "none", md: "flex" }}
        justifyContent="space-between"
        maxWidth={{ base: "auto", md: "186px" }}
        w={{ base: "auto", md: "100%" }}
      >
        <Chakra.Text
          fontFamily="Roboto"
          fontWeight="400"
          fontSize="18px"
          lineHeight="21px"
          mb="0px"
        >
          Contact me
        </Chakra.Text>
        <Chakra.Text
          fontFamily="Roboto"
          fontWeight="400"
          fontSize="18px"
          lineHeight="21px"
          mb="0px"
        >
          My Info
        </Chakra.Text>
      </Chakra.Box>
      <Chakra.Box display={{ base: "flex", md: "none" }} alignItems="center">
        <button onClick={onOpen}>
          <Hamburger />
        </button>
        <Chakra.Drawer
          isOpen={isOpen}
          size="full"
          initialFocusRef={firstField}
          onClose={onClose}
        >
          <Chakra.DrawerOverlay backgroundColor="#000000" />
          <Chakra.DrawerContent
            position="relative"
            backgroundColor="#000000"
            paddingTop="60px"
          >
            <Chakra.Box position="absolute" right="32px">
              <button onClick={onClose}>
                <Cancel />
              </button>
            </Chakra.Box>
            <Chakra.DrawerBody
              paddingTop="101px"
              display="flex"
              flexDirection="column"
            >
              <Chakra.Link
                fontFamily="Roboto"
                fontWeight="700"
                fontSize="48px"
                lineHeight="72px"
                color="white"
                mb="0px"
              >
                Home
              </Chakra.Link>
              <Chakra.Link
                fontFamily="Roboto"
                fontWeight="700"
                fontSize="48px"
                lineHeight="72px"
                color="white"
                marginTop="32px"
                mb="0px"
              >
                Contact Me
              </Chakra.Link>
              <Chakra.Link
                fontFamily="Roboto"
                fontWeight="700"
                fontSize="48px"
                lineHeight="72px"
                color="white"
                marginTop="32px"
                mb="0px"
              >
                My Info
              </Chakra.Link>
            </Chakra.DrawerBody>
          </Chakra.DrawerContent>
        </Chakra.Drawer>
      </Chakra.Box>
    </Chakra.Box>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
