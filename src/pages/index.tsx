import React, { Fragment, useState } from 'react'
import { Box, Typography } from '@mui/joy'
import { Link, StaticQueryDocument, graphql } from 'gatsby'
import './style.css'
import { PhCrossBold } from '../components/PhCrossBold'
import monthsOfTheYear from '../utils/monthsOfTheYear'
import colors from '../utils/colors'
import { Collapse } from '@mui/material'

interface SiteData {
  site: {
    siteMetadata: {
      [key: string]: string
    }
  }
  allMarkdownRemark: {
    [x: string]: any
  }
}

export default function Index({ data }: { data: SiteData }) {
  const { title } = data.site.siteMetadata
  const blogs = data.allMarkdownRemark.nodes
  console.log(blogs)
  const today = new Date()

  const [collapse, setCollapse] = useState(true)

  const postsColors: { [key: number]: string } = {
    1: '#FCE200',
    2: '#B59665',
    3: '#00D953',
    4: '#EB5EFF',
    5: '#FFA000',
    6: '#63D3FF',
    7: '#FCE200',
    8: '#B59665',
    9: '#00D953',
    10: '#EB5EFF',
    11: '#FFA000',
    12: '#63D3FF',
  }

  function getPostColor(blog: any) {
    console.log(blog)
    const mounth = blog.frontmatter.createdAt.replace(
      /\d{4}-(\d{2})-\d{2}.*/,
      '$1'
    )
    return postsColors[Number(mounth)]
  }

  return (
    <Fragment>
      <Box
        className='header'
        display='flex'
        alignItems='center'
        gap='20px'
        sx={{ height: '60px', width: '100vw', backgroundColor: colors.blue }}
      >
        <PhCrossBold style={{ marginLeft: '23px' }} />

        <Typography
          className='fontJosefin'
          level='h1'
          textColor={colors.white}
          sx={{
            marginLeft: '10px',
            fontSize: '26px',
          }}
        >
          {title.toLocaleUpperCase()}
        </Typography>

        <Box
          width='69px'
          height='63px'
          display='flex'
          flexDirection='column'
          justifyContent='center'
          alignItems='center'
          padding='5px'
          sx={{
            backgroundColor: colors.darkBlue,
            position: 'absolute',
            right: '6px',
            top: '2px',
            borderRadius: '0 0 5px 5px',
          }}
        >
          <Typography
            className='fontJosefin'
            textColor={colors.white}
            fontSize='14px'
          >
            {today.getDate()}
          </Typography>

          <Typography
            className='fontJosefin'
            textColor={colors.white}
            fontSize='14px'
          >
            {monthsOfTheYear[today.getMonth()].toLocaleUpperCase()}
          </Typography>

          <Typography
            className='fontJosefin'
            textColor={colors.white}
            fontSize='14px'
          >
            {today.getFullYear()}
          </Typography>
        </Box>
      </Box>

      <Box className='body' display='flex'>
        <Box
          className='bodyContent'
          display='flex'
          flexDirection='column'
          alignItems='center'
          sx={{
            backgroundColor: colors.darkGrey,
            width: '100%',
            height: typeof window !== undefined ? `calc(${window.innerHeight - 60}px)` : `calc(100vh - 60px)`
          }}
        >
          <Box
            width='75vw'
            height='auto'
            marginTop='30px'
            padding='10px'
            sx={{
              backgroundColor: colors.black,
              borderRadius: '10px',
              boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25);',
            }}
          >
            <Typography
              className='bemVindo'
              textColor={colors.white}
              fontSize='12px'
              textAlign='justify'
            >
              Bem-vindo(a)! Este é um espaço dedicado a compartilhar resumos de
              pregações cristãs. Aqui você encontrará uma fonte de inspiração e
              reflexão. Fique à vontade para explorar e mergulhar nas Palavras
              que temos para compartilhar.
              <br />
              <br />
              Que este espaço seja um meio de edificação e fortalecimento da sua
              fé.
              <br />
              <br />
              Nos links abaixo você encontrará os posts, listados dos mais
              recentes aos mais antigos.
              <br />
              <br />
            </Typography>
            <Typography
              className='bemVindo'
              textColor={colors.lightGrey}
              fontSize='10px'
              textAlign='right'
            >
              Este projeto foi desenvolvido e é mantido por{' '}
              <a
                href='http://maycon.barretolopes.com'
                target='_blank'
                style={{ color: colors.brown }}
              >
                @mayconblopes
              </a>
              .
            </Typography>
          </Box>

          {/* Todo os posts */}
          <Box
            display='flex'
            flexDirection='row'
            flexWrap='wrap'
            justifyContent='space-around'
            marginTop='20px'
            // marginBottom='100px'
            width='70vw'
            overflow='auto'
          >
            {blogs.map((blog: any) => (
              <Box
                width='100px'
                height='102px'
                key={blog.id}
                borderRadius='5px'
                m='5px'
                sx={{
                  backgroundColor: getPostColor(blog),
                  ':active': { backgroundColor: colors.darkYellow },
                }}
              >
                <Link
                  to={'/palavras/' + blog.frontmatter.slug}
                  style={{ textDecoration: 'none' }}
                >
                  <Box display='flex' flexDirection='column'>
                    <Typography
                      className='fontJosefin'
                      textColor={colors.black}
                      textAlign='center'
                      fontSize='10px'
                      padding='5px'
                    >
                      {blog.frontmatter.title}
                    </Typography>

                    <Typography
                      className='fontJosefin'
                      textColor={colors.black}
                      textAlign='center'
                      fontSize='10px'
                      padding='5px'
                    >
                      {blog.frontmatter.bibleQuote1}
                    </Typography>
                    <Typography
                      className='fontJosefin'
                      textColor={colors.black}
                      textAlign='center'
                      fontSize='10px'
                      padding='5px'
                    >
                      {blog.frontmatter.bibleQuote2}
                    </Typography>
                  </Box>
                </Link>
              </Box>
            ))}
          </Box>
          <Collapse
            in={collapse}
            timeout='auto'
            unmountOnExit
            onClick={() => {
              setCollapse(false)
              setTimeout(() => {
                setCollapse(true)
              }, 10000)
            }}
          >
            <Box
              display='flex'
              alignItems='center'
              width='125px'
              height='55px'
              position='absolute'
              bottom='9px'
              right='0'
              sx={{
                backgroundColor: colors.black,
                borderRadius: '5px 0 0 5px',
              }}
            >
              <Typography
                maxWidth='85px'
                className='fontJosefin'
                fontSize='10px'
                textColor={colors.white}
                ml='10px'
                textAlign='center'
              >
                Material criado para honra e glória de Deus
              </Typography>
            </Box>
          </Collapse>
        </Box>
      </Box>
    </Fragment>
  )
}

export const query = graphql`
  query MyQuery {
    allMarkdownRemark(sort: { frontmatter: { createdAt: DESC } }) {
      nodes {
        frontmatter {
          title
          slug
          createdAt
          bibleQuote1
          bibleQuote2
        }
        id
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`
