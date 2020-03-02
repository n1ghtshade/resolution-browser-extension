import {createStyles, Theme} from '@material-ui/core';

const ExtensionStyles = ({spacing}: Theme)  => createStyles({
 root: {
   width: '400px',
  //  height: '316px',
  //  minHeight: '316px',
   borderRadius: spacing(0)
 },
 topLayout: {
   display: 'flex',
   flexDirection: 'column',
   justifyContent: 'space-between',
   height: '100%'
 },
 middleLayout: {
   display: 'flex',
   flexDirection: 'column',
   height: '100%'
 }
});

export default ExtensionStyles;