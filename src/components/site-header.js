import React from 'react';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';


import Badge from 'material-ui/Badge';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import IconButton from 'material-ui/IconButton';

import FlatButton from 'material-ui/FlatButton';
import UserAvatar from './user-avatar';
import MasterNav from './master-nav';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const styles = {
    root: {
        backgroundColor: '#005bbb',
        color: '#ffffff',
        verticalAlign: 'middle',
        paddingBottom: '0'
    },
    title: {
        float: 'left',
        textAlign: 'left',
        verticalAlign: 'middle',
        padding: '20px'
    },
    brand: {
        backgroundColor: '#005bbb',
        color: '#ffffff',
        verticalAlign: 'middle',
    },
    logo: {
        src: 'img/ub_white.png',
        height: '24px',
        width: '24px'
    },
    avatar: {
        float: 'right',
        verticalAlign: 'middle',
        padding: '10px'
    },
    userMenu: {
      color: 'white',
      textAlign: 'left',
      backgroundColor: '#333333',
      padding: '0',
      list: {
          padding: '16px 16px 16px 45px'
      },
      title: {
        fontSize: '14px'
      },
      root: {
          backgroundColor: '#333333'
      },
      avatar: {
        color: 'white',
      },
      hr: {
        height: '2px',
        backgroundColor: 'rgb(95, 95, 95)'
      }, 
      active: {
        color: 'white',
        borderLeft: '3px solid greenyellow'
      },
      title: {
          fontSize: '14px',
          backgroundColor: '#000000'
      },
      badges: {
        color: 'white',
        backgroundColor: 'red'
      },
      userCard: {
          backgroundColor: 'black',         
          color: 'white'
      },
  },
  icons: {
      icon: {
          padding: '15px',
          verticalAlign: 'middle'
      },
      avatar: {
          color: 'green'
      },
      messages: {
          color: 'gold'
      },
      settings: {
          color: 'darkorchid'
      },
      discovery: {
          color: 'deepskyblue'
      },
      commandCenter: {
          color: 'white'
      }
  },
  secondaryText: {
      color: 'white'
  },
  Subheader: {
      color: 'white',
      textAlign: 'left',
      fontSize: '18px',
      backgroundColor: 'rgba(0, 0, 0, 0.2)'
  },
  ActivityFeed: {
      position: 'absolute',
      bottom: '0',

  },
  medium: {
    width: 60,
    height: 60,
    padding: 0,
    marginTop: '-5px'
  },
};

class SiteHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {open: false};
    };
    
    handleToggle = () => this.setState({open: !this.state.open});

    handleOpen = () => this.seteState({open: !this.state.open});

    handleClose = () => this.setState({open: false});

    handleUserToggle = () => this.setState({open: !this.state.open});

    render() {
        return (
            <div>            
            <AppBar
              title={<span><img src={styles.logo.src} style={styles.logo} /> UB Linked</span>}
              onRightIconButtonTouchTap={this.handleToggle}
              onLeftIconButtonTouchTap={this.handleMenu}
              iconElementLeft={<MasterNav />}
              iconElementRight={<IconButton style={styles.medium}><UserAvatar /></IconButton>}
              style={styles.brand} />
            <Drawer width={300} openSecondary={true} open={this.state.open} containerStyle={styles.userMenu.root}>
                <AppBar style={styles.userMenu.title} iconElementLeft={<FlatButton label="Bruce Wayne" style={styles.userMenu.avatar} />} iconElementRight={<UserAvatar style={styles.userMenu.avatar} />} />
                <List style={styles.userMenu}>
                    <Divider style={styles.userMenu.hr} />
                    <ListItem onTouchTap={this.handleClose} primaryText="My Profile" style={styles.userMenu} leftIcon={<i className="fa fa-user-circle" style={styles.icons.avatar}></i>} />
                    <Divider style={styles.userMenu.hr} />
                    <ListItem onTouchTap={this.handleClose} primaryText="Settings" style={styles.userMenu} leftIcon={<i className="fa fa-gear" style={styles.icons.settings}></i>} />
                    <Divider style={styles.userMenu.hr} />
                    <ListItem onTouchTap={this.handleClose} primaryText="Organization Home" style={styles.userMenu} leftIcon={<i className="fa fa-home" style={styles.icons.discovery}></i>} />
                    <Divider style={styles.userMenu.hr} />
                    <ListItem onTouchTap={this.handleClose} primaryText="Command Center" style={styles.userMenu.active} rightIcon={<Badge badgeContent={13} badgeStyle={styles.userMenu.badges}/>} leftIcon={<i className="fa fa-rocket" style={styles.icons.commandCenter}></i>} />
                </List>
                <Divider style={styles.userMenu.hr} />
                <List style={styles.ActivityFeed}>
                    <Subheader style={styles.Subheader}>Activity Feed</Subheader>
                    <ListItem onTouchTap={this.handleClose} primaryText="You submitted a request for a parking pass." leftIcon={<i className="fa fa-flag" />} style={styles.userMenu} />
                    <ListItem onTouchTap={this.handleClose} primaryText="A new form approval request was generated." leftIcon={<i className="fa fa-flag" />} style={styles.userMenu} />
                    <ListItem onTouchTap={this.handleClose} primaryText="A new event request was submitted." leftIcon={<i className="fa fa-flag" />} style={styles.userMenu} />
                    <ListItem onTouchTap={this.handleClose} primaryText="Bake Sale form is awaiting your approval." leftIcon={<i className="fa fa-flag" />} style={styles.userMenu} />
                    <Divider style={styles.userMenu.hr} />
                    <ListItem onTouchTap={this.handleClose} style={styles.userMenu}><a href="/activity">See more (12)</a></ListItem>
                </List>
            </Drawer>
        </div>
        );
    }
}

export default SiteHeader;