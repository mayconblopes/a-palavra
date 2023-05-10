import React, { Fragment, useState } from 'react'
import { Box, Button, Typography } from '@mui/joy'
import { Link, graphql, navigate } from 'gatsby'
import { PhCrossBold } from '../components/PhCrossBold'
import monthsOfTheYear from '../utils/monthsOfTheYear'
import Img from 'gatsby-image'
import MyText from '../components/MyText'
import MyModal from '../components/MyModal'
import { getBibleText } from '../utils/getBibleText'
import colors from '../utils/colors'
import '../pages/style.css'

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

const isBrowser = typeof window !== "undefined"

export default function PostDetail({ data }: { data: SiteData }) {

  const fixMobileViewPortHeight = isBrowser ? `calc(${window.innerHeight - 60}px)` : `calc(100vh - 60px)`

  const { html } = data.markdownRemark
  const {
    title,
    createdAt,
    image,
    keyConcept1,
    keyConcept2,
    keyConcept3,
    bibleQuote1,
    bibleQuote2,
    originalPreaching,
  } = data.markdownRemark.frontmatter
  const month =
    monthsOfTheYear[Number(createdAt.replace(/\d{4}-(\d{2})-\d{2}.*/, '$1'))]
  const day = createdAt.replace(/\d{4}-\d{2}-(\d{2}).*/, '$1')
  const year = createdAt.replace(/(\d{4})-\d{2}-\d{2}.*/, '$1')

  const [modalOpen, setModalOpen] = useState(false)
  const [modalContent, setModalContent] = useState('')
  const [modalTitle, setModalTitle] = useState('')

  async function openBibleText(quote: string) {
    const bibleText = await getBibleText(quote)
    setModalTitle(bibleText.reference)
    setModalContent(bibleText.text)
    setModalOpen(true)

  }

  return (
    <Fragment>
      <MyModal open={modalOpen} title={modalTitle} content={modalContent} setModalOpen={setModalOpen}/>
      <Box
        className='header'
        display='flex'
        alignItems='center'
        gap='20px'
        sx={{ height: '60px', width: '100vw', backgroundColor: colors.blue }}
      >
        <Link to='/'>
          <PhCrossBold style={{ marginLeft: '23px' }} />
        </Link>

        <Typography
          className='fontJosefin'
          level='h1'
          textColor={colors.white}
          minWidth='165px'
          // maxWidth={`${6.2 * title.length}px`}
          sx={{
            marginLeft: '10px',
            marginRight: '95px',
            fontSize: `${450 / title.length > 20 ? 20 : 450 / title.length}px`,
          }}
        >
          {title}
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
          <Typography className='fontJosefin' textColor={colors.white} fontSize='14px'>
            {day}
          </Typography>

          <Typography className='fontJosefin' textColor={colors.white} fontSize='14px'>
            {month}
          </Typography>

          <Typography className='fontJosefin' textColor={colors.white} fontSize='14px'>
            {year}
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
          width='100px'
          sx={{
            backgroundColor: colors.blue,
            height: fixMobileViewPortHeight
            // height: typeof window !== undefined ? `calc(${window.innerHeight - 60}px)` : `calc(100vh - 60px)`
            // height: `calc(${window.innerHeight - 60}px)`,
          }}
        >
          {/* MENU LATERAL */}
          <Link to='/' style={{ textDecoration: 'none' }}>
            <Typography
              className='fontJosefin'
              textColor={colors.white}
              fontSize='10px'
              fontWeight='bold'
              textAlign='center'
            >
              VOLTAR
            </Typography>
          </Link>

          <MyText text={keyConcept1} />
          <MyText text={keyConcept2} />
          <Box marginBottom='190px'>
            <MyText text={keyConcept3} />
          </Box>

          <Box
            display='flex'
            justifyContent='space-between'
            position='absolute'
            height='110px'
            // width='98.1%'
            bottom='9px'
            left='4px'
            right='0'
          >
            <Box
              display='flex'
              justifyContent='space-around'
              alignItems='center'
              width='240px'
              sx={{ backgroundColor: colors.darkBlue, borderRadius: '0 5px 0 0' }}
            >
              <Box
                display='flex'
                flexDirection='column'
                gap='8px'
                alignItems='center'
              >
                {bibleQuote1 && (
                  <Button
                    size='sm'
                    className='fontJosefin'
                    color='warning'
                    onClick={() => openBibleText(bibleQuote1)}
                    sx={{
                      backgroundColor: colors.yellow,
                      color: colors.black,
                      maxWidth: '100px',
                      fontSize: '10px',
                    }}
                  >
                    {bibleQuote1.toUpperCase()}
                  </Button>
                )}

                {bibleQuote2 && (
                  <Button
                    size='sm'
                    className='fontJosefin'
                    color='warning'
                    onClick={() => openBibleText(bibleQuote2)}
                    sx={{
                      backgroundColor: colors.yellow,
                      color: colors.black,
                      maxWidth: '100px',
                      fontSize: '10px',
                    }}
                  >
                    {bibleQuote2.toUpperCase()}
                  </Button>
                )}
              </Box>
              <Box width='100px' height='100px'>
                <Img
                  fluid={
                    data.markdownRemark.frontmatter.image.childImageSharp.fluid
                  }
                />
              </Box>
            </Box>
            <Box
              display='flex'
              flexDirection='column'
              justifyContent='space-around'
            >
              <Link
                to={originalPreaching}
                target='_blank'
                className='fontJosefin'
                style={{
                  backgroundColor: colors.yellow,
                  color: colors.black,
                  maxWidth: '100px',
                  fontSize: '10px',
                  fontWeight: 'bold',
                  borderRadius: '10px',
                  textDecoration: 'none',
                  textAlign: 'center',
                  padding: '5px 0',
                }}
              >
                PREGAÇÃO ORIGINAL
              </Link>
              <Box
                display='flex'
                alignItems='center'
                width='125px'
                height='55px'
                sx={{ backgroundColor: colors.black, borderRadius: '5px 0 0 5px' }}
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
            backgroundColor: colors.darkGrey,
            width: '100%',
            height: fixMobileViewPortHeight,
            // height: typeof window !== undefined ? `calc(${window.innerHeight - 60}px)` : `calc(100vh - 60px)`
            // height: `calc(${window.innerHeight - 60}px)`,
          }}
        >
          <Box
            width='90%'
            height='auto'
            marginTop='30px'
            padding='10px'
            sx={{
              backgroundColor: colors.black,
              borderRadius: '10px',
              boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25);',
              overflowY: 'scroll',
            }}
          >
            {/* CONTEUDO DO POST */}
            <div
              className='postContent'
              dangerouslySetInnerHTML={{ __html: html }}
            />
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
                textColor={colors.lightGrey}
              >
                Lições extraídas da pregação original de Pr. Fábio S. Dos
                Santos.
              </Typography>
              <br />
              <Typography
                className='fontJosefin'
                fontSize='9px'
                textColor={colors.lightGrey}
              >
                Esse texto é uma interpretação livre à pregação original.
              </Typography>
              <Typography
                className='fontJosefin'
                fontSize='9px'
                textColor={colors.lightGrey}
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
        keyConcept1
        keyConcept2
        keyConcept3
        bibleQuote1
        bibleQuote2
        originalPreaching
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
