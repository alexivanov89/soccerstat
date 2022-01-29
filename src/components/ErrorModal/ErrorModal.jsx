import { useDispatch, useSelector } from 'react-redux';
import { SetError } from '../../store/actions/creator/error';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
  dialog: {
    '& .MuiDialog-paper': {
      borderRadius: 12,
    },
  },
  dialogTitleBlock: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: '12px',
  },
  dialogTitle: {
    padding: '24px 32px 12px 32px',
  },
  textDialogTitle: {
    color: '#363A40',
    fontFamily: 'Inter',
    fontSize: '18px',
    fontWeight: 700,
    lineHeight: '24px',
  },
  dialogContentBlock: {
    padding: '0px 32px 24px 32px',
  },
}));

export const ErrorModal = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const error = useSelector(({ error }) => error);

  const handleClose = () => {
    dispatch(SetError(''));
  };

  return (
    <Dialog
      open={Boolean(error.value)}
      onClose={handleClose}
      scroll="paper"
      className={classes.dialog}
      aria-labelledby="scroll-dialog-title"
      aria-describedby="scroll-dialog-description"
    >
      <div className={classes.dialogTitleBlock}>
        <DialogTitle className={classes.dialogTitle} id="scroll-dialog-title">
          <Typography className={classes.textDialogTitle}>Ошибка</Typography>
        </DialogTitle>
        <IconButton onClick={handleClose}>
          <CloseIcon fontSize="small"></CloseIcon>
        </IconButton>
      </div>
      <DialogContent className={classes.dialogContentBlock}>{error.value}</DialogContent>
    </Dialog>
  );
};
