import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import * as Chakra from "@chakra-ui/react"
import gsap from "gsap"
import { Tween, Reveal, ScrollTrigger } from "react-gsap"
import EyeImage from "../images/red-eye-image.png"

const Projects = ({ siteTitle }) => {
  const [flag, setFlag] = Chakra.useBoolean()
  const [leave, setLeave] = React.useState(false)
  const ref = React.useRef([])
  ref.current = []
  const addToRefs = el => {
    if (!ref.current.includes(el)) {
      ref.current.push(el)
    }
  }

  React.useEffect(() => {
    ref.current.forEach(
      el => {
        const image = el.querySelector("img")
        const text = el.querySelector("p")

        el.addEventListener("mouseenter", e => {
          gsap.to(image, { autoAlpha: 1 })
        })

        el.addEventListener("mouseleave", e => {
          gsap.to(image, { autoAlpha: 0 })
        })

        el.addEventListener("mousemove", e => {
          gsap.set(image, { x: e.offsetX - 200 })
        })
      },
      [ref]
    )
  })

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
      className="projectTop"
      px={{ base: "20px", md: "100px" }}
      pt={{ base: "80px", md: "111px" }}
    >
      <Chakra.Box width="auto" height="75px">
        <Reveal repeat>
          <Tween from={{ opacity: 0, x: -100 }} duration={2}>
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
          </Tween>
        </Reveal>
      </Chakra.Box>
      <Chakra.Box
        width="100%"
        display="flex"
        justifyContent="space-between"
        className="project"
      >
        <Chakra.Box maxWidth="547px" with="100%">
          {Projects &&
            Projects.map(({ name, technologies, description }, idx) => {
              return (
                <Chakra.Box
                  key={idx}
                  mb="48px"
                  position="relative"
                  ref={addToRefs}
                  role="group"
                >
                  <Chakra.Image
                    src={EyeImage}
                    position="absolute"
                    width="300px"
                    height="300px"
                    object-fit="cover"
                    transform="translateX(-50%) translateY(-50%)"
                    top="25%"
                    left="25%"
                    zIndex="-10"
                    opacity="0"
                    visibility="hidden"
                    pointerEvents="none"
                  />
                  <Chakra.Box height="42px" mb="16px" overflow="hidden">
                    <Chakra.Box
                    // transform={flag ? "translateY(58px)" : "translateY(0px)"}
                    // transition="all 300ms ease-in-out"
                    // _hover={{
                    //   transform: "translateY(-58px)",
                    //   transition: "all 300ms ease-in-out",
                    //   filter: "grayScale(1)",
                    // }}
                    // _hover={{
                    //   transform: ` ${
                    //     leave ? "translateY(58px)" : "translateY(0px)"
                    //   }`,
                    //   transition: leave ? "all 300ms ease-in-out" : "",
                    //   filter: "grayScale(1)",
                    // // }}
                    // onMouseEnter={setFlag.on}
                    // onMouseLeave={setFlag.off}
                    >
                      <Chakra.Text
                        fontFamily="Roboto"
                        fontWeight="700"
                        fontSize="36px"
                        lineHeight="42px"
                        mb="16px"
                        _groupHover={{
                          color: "white",
                          backdropFilter: "blur(10px)",
                          opacity: "0.5",
                        }}
                      >
                        {name}
                      </Chakra.Text>
                      <Chakra.Text
                        fontFamily="Roboto"
                        fontWeight="700"
                        fontSize="36px"
                        lineHeight="42px"
                      >
                        {name}
                      </Chakra.Text>
                    </Chakra.Box>
                  </Chakra.Box>
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
                      color="#525252"
                    >
                      {description}
                    </Chakra.Text>
                  </Chakra.Box>
                </Chakra.Box>
              )
            })}
        </Chakra.Box>
        <Tween
          to={{
            yPercent: 120,
            scrollTrigger: {
              trigger: ".project",
              start: "top top",
              end: "bottom bottom",
              scrub: 0.7,
            },
          }}
        >
          <Chakra.Box
            height="400px"
            width="1px"
            backgroundColor="black"
            display={{ base: "none", lg: "flex" }}
          >
            <Tween
              to={{
                yPercent: 300,
                scrollTrigger: {
                  trigger: ".project",
                  start: "top top",
                  end: "bottom bottom",
                  scrub: 0.5,
                },
              }}
            >
              <Chakra.Box
                height="100px"
                ml="-1px"
                width="3px"
                backgroundColor="black"
              ></Chakra.Box>
            </Tween>
          </Chakra.Box>
        </Tween>
      </Chakra.Box>
    </Chakra.Box>
  )
}

export default Projects
