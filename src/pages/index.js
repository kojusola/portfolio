import * as React from "react"
import { Box, Text } from "@chakra-ui/react"
// import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Hero from "../components/hero"
import Projects from "../components/projects"
import Contacts from "../components/contacts"
import CustomCursor from "../components/custom-cursor"
import Seo from "../components/seo"

const IndexPage = () => (
  <Box cursor="none">
    <CustomCursor />
    <Layout>
      <Seo title="Home" />
      <Hero />
      <Projects />
      <Contacts />
    </Layout>
  </Box>
)

export default IndexPage
