// Made with ❤️ by the Dove and Olive Co
import type { NextPage } from 'next'
import Head from 'next/head'
import { Typography, Card, Box, Link, Stack, Paper, CardMedia, CardContent, CardActions, Button } from '@mui/material'

const Home: NextPage = () => {
  return (
    <Box sx={{ backgroundColor: '#e7ebf0', height: '100%', overflow: 'auto' }}>
      <Head>
        <title>NoMo Venmo</title>
        <meta name="description" content="Learn why your friends are opting out" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main >
        <Box sx={{ backgroundColor: '#008cff', color: 'white', p: 2, width: '100%' }}>
          <Typography variant={'h2'}>NoMo Venmo</Typography>
          <Typography variant={'subtitle1'}>Learn why your friend is opting out of Paypal and Venmo, and find other ways to pay them</Typography></Box>
        <Card variant='outlined' sx={{ p: 2, m: 2 }}>
          <Typography variant='h4'>What happened?</Typography>
          <Box sx={{ mt: 1 }}>In October 2022 Paypal and its subsidiary Venmo changed their Acceptable Use Policy to <b>allow the company to seize $2,500 from users for spreading disinformation, per violation</b>.

            <br /><br />Disinformation is a serious problem in today's world. However, many people are uncomfortable with the idea that a private company can decide what is disinformation and seize your funds with no oversight.

            <br /><br />Paypal has since stepped back to <Link href='https://www.usatoday.com/story/money/2022/10/13/paypal-misinformation-policy-sparks-backlash-many-users-delete-app/10486413002/' target="_blank">remove the policy</Link>, however, many people do not feel comfortable doing business with a company where an idea like this even made it this far in conversation. <b>They're choosing to opt-out by disconnecting their bank accounts and credit cards from Paypal and Venmo, and closing their accounts.</b>
          </Box>
        </Card>
        <Card variant='outlined' sx={{ p: 2, m: 2 }}>
          <Typography variant='h4'>How do I pay my friend?</Typography>
          <Box sx={{ mt: 1 }}>Fortunately, there are plenty of other easy ways to pay people. Here are a list of options that allow you to choose your own tradeoffs of security and convenience.
          </Box>
          <Stack spacing={2} sx={{ my: 2 }}>
            <Card variant='outlined'>
              <CardMedia
                component="img"
                height="140"
                image="https://www.logo.wine/a/logo/Cash_App/Cash_App-White-Dark-Background-Logo.wine.svg"
                alt="cash app"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Cash App
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  While Cash App provides a similar service to Venmo, the company has not indicated an interest in seizing user funds and actively offers products that allow greater financial freedom.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary" href="https://cash.app/" target="_blank">
                  Get Cash App
                </Button>
              </CardActions>
            </Card>
            <Card variant='outlined'>
              <CardMedia
                component="img"
                height="140"
                image="http://app.chainwire.org/storage/uploads/users/CN-USDC_1666017094KC9UrWxcFL.jpg"
                alt="usdc"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  USDC
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  USDC, or USD Coin, is a Stablecoin issued by Coinbase and Circle via the Centre Consortium. A Stablecoin is a cryptocurrency that is tied to the value of a US Dollar. USDC is backed by cash and short-dated US Treasuries, and can be redeemed for a dollar at any time.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary" href="https://www.circle.com/en/usdc" target="_blank">
                  Learn more
                </Button>
              </CardActions>
            </Card>
            <Card variant='outlined'>
              <CardMedia
                component="img"
                height="140"
                image="https://www.arkasoftwares.com/blog/wp-content/uploads/2022/03/How-Does-Zelle-Make-Money-Zelle-Business-Model.jpg"
                alt="zelle logo"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Zelle
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Zelle allows you to send payments directly from your bank account using just an email or phone number. It is run by a consortium of banks and offered via most major banking apps.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary" href="https://www.zellepay.com/" target="_blank">
                  Learn more
                </Button>
              </CardActions>
            </Card>
            <Card variant='outlined'>
              <CardMedia
                component="img"
                height="140"
                image="https://www.gannett-cdn.com/-mm-/e76b3f8780406e2332171b90051c86d67cb0349b/c=0-85-2122-1282/local/-/media/USATODAY/USATODAY/2014/09/04/1409858217000-492529263.jpg?width=2122&height=1197&fit=crop&format=pjpg&auto=webp"
                alt="hundred dollar bills"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Physical Cash
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  It may seem too obvious to mention Physical Cash, but many people forget how useful it is. While not as convenient as digital methods, it is the most private payment mechanism. Many ATMs don't even require a physical card anymore to withdraw as they support tap-to-withdraw from your phone.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary" href="https://www.google.com/maps/search/atm/" target="_blank">
                  Find an ATM
                </Button>
              </CardActions>
            </Card>
          </Stack>
        </Card>
      </main>
    </Box >
  )
}

export default Home
