import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import shopCard from '../styles/img/shopCard.jpg'

const useStyles = makeStyles({
  root: {
    maxWidth: 545
  },
  media: {
    height: 340
  }
})

const Shop = () => {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component='img'
          alt='wineDrink'
          height='400'
          image={shopCard}
          title='wineDrink'
        />
        {/* <img src={wineDrink} /> */}
        <CardContent>
          <Typography gutterBottom variant='h5' component='h2'>
            Lizard
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            An neb a labour en deus gwir da vezañ paeet reizh ha mat evit ma c'hellfe, eñ hag e diegezh, bevañ en un doare a zere ouzh dellezegezh mab-den, ha mar deo ret ouzhpenn, da gaout gwarez kevredigezhel dre hentoù all.

            Da bep hini eo an holl wirioù ha frankizioù embannet en disklêriadur-mañ, hep ket a ziforc'h, a ouenn, a liv, a reizh, a yezh, a veno politikel pe a veno all, a orin broadel pe gevredigezhel, a leve, a c'hanedigezh pe a natur all.

            Gwir pep hini eo e vefe anavezet e bersonelezh lezennel e pep lec'h.

          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size='small' color='primary'>
          Voir plus...
        </Button>
      </CardActions>
    </Card>
  )
}

export default Shop
