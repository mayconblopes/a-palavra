import React, { Fragment } from 'react'
import { Box, Button, Typography } from '@mui/joy'
import { graphql } from 'gatsby'
import '../pages/style.css'
import { PhCrossBold } from '../components/PhCrossBold'
import monthsOfTheYear from '../utils/monthsOfTheYear'
import Img from 'gatsby-image'
import MyText from '../components/MyText'

interface SiteData {
  site: {
    siteMetadata: {
      [key: string]: string
    }
  }
  markdownRemark: {
    [x: string]: any
  }
  file: {
    [x: string]: any
  }
}

export default function PostDetail({ data }: { data: SiteData }) {
  console.log(data)
  const { html } = data.markdownRemark
  const { title, createdAt, image } = data.markdownRemark.frontmatter
  const month = monthsOfTheYear[Number(createdAt.replace(/\d{4}-(\d{2})-\d{2}.*/, '$1'))]
  const day = createdAt.replace(/\d{4}-\d{2}-(\d{2}).*/, '$1')
  const year = createdAt.replace(/(\d{4})-\d{2}-\d{2}.*/, '$1')

  const blue = '#5484FF'
  const darkBlue = '#455DFF'
  const darkGrey = '#3D3C3E'
  const lightGrey = '#8D8C92'
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
          minWidth='165px'
          // maxWidth={`${6.2 * title.length}px`}
          sx={{
            marginLeft: '10px',
            marginRight: '95px',
            fontSize: `${450 / title.length > 20 ? 20 : 450 / title.length}px`,
          }}
        >
          { title }
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
            { month }
          </Typography>

          <Typography className='fontJosefin' textColor={white} fontSize='14px'>
            { day }
          </Typography>

          <Typography className='fontJosefin' textColor={white} fontSize='14px'>
            { year }
          </Typography>
        </Box>
      </Box>

      {/* LATERAL BAR */}
      <Box className='body' display='flex'>
        <Box
          className='bodyLateralBar'
          display='flex'
          flexDirection='column'
          justifyContent='space-around'
          alignItems='center'
          minHeight='calc(100vh - 60px)'
          width='100px'
          sx={{
            backgroundColor: blue,
          }}
        >
          {/* MENU LATERAL */}
          <Typography
            className='fontJosefin'
            textColor={white}
            fontSize='10px'
            fontWeight='bold'
            textAlign='center'
          >
            VOLTAR
          </Typography>

          <MyText text='Busque a verdadeira paz que só Jesus oferece.' />
          <MyText text='Cultive e cuide dos frutos do espírito.' />
          <Box marginBottom='150px'>
            <MyText text='Renuncie à intimidade com os prazeres do mundo.' />
          </Box>

          <Box
            display='flex'
            justifyContent='space-between'
            position='absolute'
            height='110px'
            width='99.1%'
            bottom='9px'
            left='4px'
          >
            <Box
              display='flex'
              justifyContent='space-around'
              alignItems='center'
              width='240px'
              sx={{ backgroundColor: darkBlue, borderRadius: '0 5px 0 0' }}
            >
              <Box
                display='flex'
                flexDirection='column'
                gap='8px'
                alignItems='center'
              >
                <Button
                  size='sm'
                  className='fontJosefin'
                  sx={{
                    backgroundColor: yellow,
                    color: black,
                    maxWidth: '100px',
                    fontSize: '10px',
                  }}
                >
                  GÊNESIS 3:1-6
                </Button>
                <Button
                  size='sm'
                  className='fontJosefin'
                  sx={{
                    backgroundColor: yellow,
                    color: black,
                    maxWidth: '100px',
                    fontSize: '10px',
                  }}
                >
                  GÁLATAS 5:22
                </Button>
              </Box>
              <Box width='100px' height='100px'>
                <Img fluid={data.markdownRemark.frontmatter.image.childImageSharp.fluid} />
              </Box>
            </Box>
            <Box
              display='flex'
              flexDirection='column'
              justifyContent='space-around'
            >
              <Button
                size='sm'
                className='fontJosefin'
                sx={{
                  backgroundColor: yellow,
                  color: black,
                  maxWidth: '100px',
                  fontSize: '10px',
                }}
              >
                PREGAÇÃO ORIGINAL
              </Button>
              <Box
                display='flex'
                alignItems='center'
                width='125px'
                height='55px'
                sx={{ backgroundColor: black, borderRadius: '5px 0 0 5px' }}
              >
                <Typography
                  maxWidth='85px'
                  className='fontJosefin'
                  fontSize='10px'
                  textColor={white}
                  ml='10px'
                  textAlign='center'
                >
                  Material criado para honra e glória de Deus
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box
          className='bodyContent'
          display='flex'
          flexDirection='column'
          justifyContent='space-between'
          gap='8px'
          alignItems='center'
          sx={{
            backgroundColor: darkGrey,
            width: '100%',
            height: 'calc(100vh - 60px)',
          }}
        >
          <Box
            width='90%'
            height='auto'
            marginTop='30px'
            padding='10px'
            sx={{
              backgroundColor: black,
              borderRadius: '10px',
              boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25);',
              overflow: 'scroll',
            }}
          >
            {/* CONTEUDO DO POST */}
            <Typography textColor={white} fontSize='10.5px' textAlign='justify'>
              {/* <div dangerouslySetInnerHTML={ {__html: html} } /> */}
            </Typography>
          </Box>

          {/* FOOTER */}
          <Box
            minHeight='190px'
            width='100%'
            // sx={{ backgroundColor: '#D9D9D9' }}
          >
            <Box
              width='90%'
              display='flex'
              padding='0 10px'
              flexDirection='column'
            >
              <Typography
                className='fontJosefin'
                fontSize='9px'
                textColor={lightGrey}
              >
                Lições extraídas da pregação original de Pr. Fábio S. Dos
                Santos.
              </Typography>
              <br />
              <Typography
                className='fontJosefin'
                fontSize='9px'
                textColor={lightGrey}
              >
                Esse texto é uma interpretação livre à pregação original.
              </Typography>
              <Typography
                className='fontJosefin'
                fontSize='9px'
                textColor={lightGrey}
                sx={{ textDecoration: 'underline' }}
              >
                designed by @mayconblopes
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Fragment>
  )
}

export const query = graphql`
  query BlogsPage($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        createdAt
        image {
          childImageSharp {
            fluid {
              base64
              aspectRatio
              src
              srcSet
              sizes
            }
          }
        }
      }
    }
  }
`
