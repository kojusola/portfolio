import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import * as Chakra from "@chakra-ui/react"
import { chakra } from "@chakra-ui/react"

const Projects = ({ siteTitle }) => {
  const Projects = [
    {
      name: "CoinStack",
      technologies: ["React", "Gabsy.js", "Next.js", "Fullpage.js"],
      description: `I’m a UI Designer based in Lagos, Nigeria. 
I help businesses create usable, acessible and beautiful products. I ideate and come up with solution that helps the business grow.`,
    },
    {
      name: "CoinStack",
      technologies: ["React", "Gabsy.js", "Next.js", "Fullpage.js"],
      description: `I’m a UI Designer based in Lagos, Nigeria. 
I help businesses create usable, acessible and beautiful products. I ideate and come up with solution that helps the business grow.`,
    },
    {
      name: "CoinStack",
      technologies: ["React", "Gabsy.js", "Next.js", "Fullpage.js"],
      description: `I’m a UI Designer based in Lagos, Nigeria. 
I help businesses create usable, acessible and beautiful products. I ideate and come up with solution that helps the business grow.`,
    },
    {
      name: "CoinStack",
      technologies: ["React", "Gabsy.js", "Next.js", "Fullpage.js"],
      description: `I’m a UI Designer based in Lagos, Nigeria. 
I help businesses create usable, acessible and beautiful products. I ideate and come up with solution that helps the business grow.`,
    },
  ]
  return (
    <Chakra.Box
      px={{ base: "20px", md: "100px" }}
      pt={{ base: "80px", md: "111px" }}
    >
      <Chakra.Text
        fontFamily="Roboto"
        fontWeight="700"
        fontSize="64px"
        lineHeight="75px"
        color="#E5E5E5"
        whiteSpace="nowrap"
        mb={{ base: "40px", md: "48px" }}
      >
        Selected Projects
      </Chakra.Text>
      {Projects &&
        Projects.map(({ name, technologies, description }) => {
          return (
            <Chakra.Box key={name} mb="48px">
              <Chakra.Text
                fontFamily="Roboto"
                fontWeight="700"
                fontSize="36px"
                lineHeight="42px"
                mb="16px"
              >
                {name}
              </Chakra.Text>
              <Chakra.Box
                display="flex"
                maxWidth="305px"
                width="100%"
                mb="16px"
              >
                {technologies &&
                  technologies.map(each => {
                    return (
                      <Chakra.Text
                        key={each}
                        fontFamily="Roboto"
                        fontSize="16px"
                        lineHeight="27px"
                        color="#E5E5E5"
                        mb="0px"
                        mr="16px"
                      >
                        {each}
                      </Chakra.Text>
                    )
                  })}
              </Chakra.Box>
              <Chakra.Box width="100%" maxWidth="547px">
                <Chakra.Text
                  fontFamily="Roboto"
                  fontSize="16px"
                  lineHeight="27px"
                  mb="0px"
                >
                  {description}
                </Chakra.Text>
              </Chakra.Box>
            </Chakra.Box>
          )
        })}
    </Chakra.Box>
  )
}

export default Projects
