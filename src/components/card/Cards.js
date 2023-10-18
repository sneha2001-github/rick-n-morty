import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Dialog } from '@mui/material';
import DialogActions from '@mui/material/DialogActions';
import Dialogs from "./Dialogs";



function Cards({data}) {


  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <div>
    <Dialog
    open={open}
    onClose={handleClose}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
  >
   <Dialogs data={data} />
    <DialogActions>
      <Button onClick={handleClose}>Close</Button>
    </DialogActions>
  </Dialog>
        
<Card sx={{ maxWidth: 345 , margin:"auto"}}>
      <CardActionArea>
        <CardMedia 
          component="img"
          height="280"
          image={data?.image}
          alt="green iguana"
          
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           {data?.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <div style={{display:"flex",flexDirection:"column" }}>
            {data.type}
            </div>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={() =>{setOpen(true)}}>
          More
        </Button>
      </CardActions>
    </Card>
    </div>
  )
}

export default Cards;


