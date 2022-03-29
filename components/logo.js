import Link from 'next/link'
// import Image from 'next/image'
import {Text, useColorModeValue} from '@chakra-ui/react'
import styled from '@emotion/styled'
import { MoonIcon } from '@chakra-ui/icons'

const LogoBox = styled.span`
font-weight: bold;
font-size: 24px;
display: inline-block;
aling-items: center;
height: auto;
lione-height: 20px;
padding: 10px;

&:hover p {
  span {
    transform: rotate(20deg);
  }
}
`

const Logo = () => {
  // const logoImg = `/images/logo${useColorModeValue('', '-dark')}.png`

  return (
    <Link href='/'>
      <a>
        <LogoBox>
          {/* <Image src={logoImg} width={100} height={100} alt='logotype' /> */}
          <Text 
            color={useColorModeValue('gray.800', 'whiteAlpha.900')} 
            fontFamily='M PLUS Rounded 1c' 
            fontWeight='bold' 
            ml={3}
            display='flex'
            alignItems='center'
            letterSpacing={0.5}
            >
            <span><MoonIcon mr={2} /></span> re:name
          </Text>
        </LogoBox>
      </a>
    </Link>
  )
}

export default Logo