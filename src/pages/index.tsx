import React, { Fragment } from 'react'
import { Box, Typography } from '@mui/joy'
import { Link, StaticQueryDocument, graphql } from 'gatsby'
import './style.css'
import { PhCrossBold } from '../components/PhCrossBold'
import monthsOfTheYear from '../utils/monthsOfTheYear'

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
  const today = new Date()

  const blue = '#5484FF'
  const darkBlue = '#455DFF'
  const darkGrey = '#3D3C3E'
  const black = '#302F32'
  const yellow = '#FFB729'
  const white = '#F2F1F7'

  return (
    <Fragment>
      <Box
        className='header'
        display='flex'
        alignItems='center'
        gap='20px'
        sx={{ height: '60px', width: '100vw', backgroundColor: blue }}
      >
        <PhCrossBold style={{ marginLeft: '23px' }} />

        <Typography
          className='fontJosefin'
          level='h1'
          textColor={white}
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
            backgroundColor: darkBlue,
            position: 'absolute',
            right: '6px',
            top: '2px',
            borderRadius: '0 0 5px 5px',
          }}
        >
          <Typography className='fontJosefin' textColor={white} fontSize='14px'>
            {monthsOfTheYear[today.getMonth()].toLocaleUpperCase()}
          </Typography>

          <Typography className='fontJosefin' textColor={white} fontSize='14px'>
            {today.getDate()}
          </Typography>

          <Typography className='fontJosefin' textColor={white} fontSize='14px'>
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
          sx={{ backgroundColor: darkGrey, width: '100%', height: 'calc(100vh - 60px)' }}
        >
          <Box
            width='90vw'
            height='auto'
            marginTop='30px'
            padding='10px'
            sx={{
              backgroundColor: black,
              borderRadius: '10px',
              boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25);',
            }}
          >
            <Typography className='bemVindo' textColor={white} fontSize='10.5px' textAlign='justify'>
              Bem-vindo(a)! Este é um espaço dedicado a compartilhar resumos
              de pregações cristãs. Aqui você encontrará uma fonte de inspiração
              e reflexão. Fique à vontade para explorar e mergulhar nas Palavras
              que temos para compartilhar.
              <br />
              <br />
              Que este espaço seja um meio de edificação e fortalecimento da sua
              fé.
              <br />
              <br />
              Nos links abaixo você encontrará os posts, listados dos mais recentes aos mais antigos.
            </Typography>
          </Box>

          {/* Todo os posts */}
          <Box display='flex' flexDirection='row' flexWrap='wrap' justifyContent='space-between' alignItems='center' marginTop='20px' width='90vw'>
          {blogs.map((blog: any) => (
            <Link
              to={'/palavras/'+blog.frontmatter.slug}
              key={blog.id}
              style={{ textDecorationColor: white }}
            >
              <Typography
                className='fontJosefin'
                textColor={white}
                textAlign='center'
                fontSize='10px'
                padding='5px'
              >
                {blog.frontmatter.title}
              </Typography>
            </Link>
          ))}
          </Box>
        </Box>
      </Box>
    </Fragment>
  )
}

export const query = graphql`
  query MyQuery {
    allMarkdownRemark {
      nodes {
        frontmatter {
          title
          slug
          createdAt
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
