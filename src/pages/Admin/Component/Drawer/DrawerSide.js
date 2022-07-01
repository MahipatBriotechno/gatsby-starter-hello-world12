import React from 'react'
import Drawer from "@material-ui/core/Drawer";
import { AppBar, CssBaseline, List, ListItem, ListItemIcon, ListItemText, makeStyles, Toolbar } from '@material-ui/core';
import settingIcon from '../../../../images/setting_ic.svg'
import schedulegIcon from '../../../../images/schedule_ic.svg'
import clubIcon from '../../../../images/club_ic.svg'
import drawerIcon from '../../../../images/drawer_ic.svg'
import { Link } from '@reach/router';
import Welcome from './Screen/Welcome';
import ScopedCssBaseline from '@material-ui/core/ScopedCssBaseline';
import AddClubForm from './Screen/Forms/AddClubForm';
import AddCourtForm from './Screen/Forms/AddCourtForm';
import BillingForm from './Screen/Forms/BillingForm';
import StapperMain from '../Stapper/StapperMain';
import { Router } from '@reach/router';
import { Match } from '@reach/router';
import Dashboard from './Dashboard';
const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex"
    },
    drawer: {
        width: 220,
        flexShrink: 0,
        whiteSpace: "nowrap",
        marginTop: '20px'
    },
    toolbar: {
        display: "flex",
        alignItems: "center",
        marginTop: theme.spacing.unit,
        justifyContent: "flex-end",
        padding: "0 8px",
        ...theme.mixins.toolbar,
        background: 'white',
        paddingTop: '60px'
    },
    contentData: {
        display: "flex",
        alignItems: "center",
        marginTop: theme.spacing.unit,
        justifyContent: "center",
        padding: "0 8px",
        ...theme.mixins.toolbar,
        background: 'white',
        paddingTop: '10px',
        width: '100%'

    },
    menuButton: {
        marginLeft: 12,
        marginRight: 36
    },
    appBar: {
        backgroundColor: 'transparent',
        zIndex: theme.zIndex.drawer + 1
    },
    toolbarImg: {
        marginLeft: '20px'
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing.unit * 3
    },

}))
const NotFound = () => <p>Sorry, nothing here.</p>;
const toolItem = [
    {
        title: "Schedule",
        icon: schedulegIcon
    },
    {
        title: "Club Profile",
        icon: clubIcon
    },
    {
        title: "Settings",
        icon: settingIcon
    }

]


function DrawerSide({ children }) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <ScopedCssBaseline />
            <AppBar elevation={0} className={classes.appBar}>
                <Toolbar disableGutters={true}>
                    <img className={classes.toolbarImg} src={drawerIcon} alt='logo' />
                </Toolbar>
            </AppBar>
            <Drawer variant="permanent" className={classes.drawer}>
                <div className={classes.toolbar}>
                    <List>
                        {toolItem.map((data, index) => (
                            <ListItem button key={index} disabled>
                                <ListItemIcon>
                                    <img src={data.icon} alt='icon' />
                                </ListItemIcon>
                                <ListItemText>
                                    {data.title}
                                </ListItemText>
                            </ListItem>
                        ))}
                    </List>
                </div>
            </Drawer>



            <main className={classes.content}>
                <div className={classes.contentData}>
                  
                    {children}
                </div>
            </main>

        </div>
    )
}

export default DrawerSide