import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import GithubSvg from "../svg/github";

import Drawer from "@material-ui/core/Drawer";

import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import IndexIcon from "@material-ui/icons/School";
import CropIcon from "@material-ui/icons/Crop";
import EditIcon from "@material-ui/icons/Edit";
import ListItemIcon from "@material-ui/core/ListItemIcon";

import MenuItem from "@material-ui/core/MenuItem";

import { Link } from "react-router-dom";

import HintSvg from "../svg/hint";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const styles = {
  root: {},
  grow: {
    flexGrow: 1,
    userSelect: "none"
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  sourceRule: {
    width: "100%",
    paddingTop: "80px"
  },
  dialogToolbar: {
    position: "fixed",
    width: "100%"
  },
  rootToolbar: {
    position: "fixed",
    width: "100%"
  },
  mdRoot: {
    paddingLeft: "32px",
    paddingRight: "32px"
  },
  list: {
    width: 300
  },
  fullList: {
    width: "auto"
  },
  header: {
    width: 300,
    height: 175,
    background: "url(../img/header.png)",
    backgroundSize: "300px 175px"
  },
  menuItem: {
    marginTop: 8,
    marginBottom: 8
  },
  links: {
    textDecoration: "none"
  },
  hintContent: {
    marginTop: "12px",
    marginBottom: "12px"
  }
};

class MenuAppBar extends React.Component {
  state = {
    auth: true,
    anchorEl: null,
    left: false,
    selectedIndex: 0,
    open: false,
    scroll: "paper"
  };

  jumpUrl = url => {
    window.location.href = url;
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  openDrawer = () => {
    this.setState({
      left: true
    });
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open
    });
  };

  handleMenuItemClick = (event, index) => {
    this.setState({ selectedIndex: index });
  };

  componentDidMount() {
    var selectIndex = 0;
    switch (window.location.pathname) {
      case "/":
        selectIndex = 0;
        break;
      case "/rule":
        selectIndex = 1;
        break;
      case "/editor":
        selectIndex = 2;
        break;
      default:
        selectIndex = 0;
        break;
    }
    this.setState({
      selectedIndex: selectIndex
    });
  }

  render() {
    const { classes } = this.props;
    const icons = [<IndexIcon />, <CropIcon />, <EditIcon />];
    const links = ["/", "/rule", "editor"];
    const sideList = (
      <div className={classes.list}>
        <Divider />
        <List>
          {["首页", "书源规则", "书源编辑器"].map((text, index) => (
            <Link to={links[index]} className={classes.links} key={text}>
              <MenuItem
                className={classes.menuItem}
                key={text}
                selected={index === this.state.selectedIndex}
                onClick={event => this.handleMenuItemClick(event, index)}
              >
                <ListItemIcon>{icons[index]}</ListItemIcon>
                {text}
              </MenuItem>
            </Link>
          ))}
        </List>
      </div>
    );

    return (
      <div className={classes.root}>
        <Drawer
          open={this.state.left}
          onClose={this.toggleDrawer("left", false)}
        >
          <div className={classes.header}>
            {/* <ReadSvg /> */}
            {/* <div>让阅读成为一种习惯</div> */}
          </div>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer("left", false)}
            onKeyDown={this.toggleDrawer("left", false)}
          >
            {sideList}
          </div>
        </Drawer>

        <AppBar position="static" className={classes.rootToolbar}>
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
              onClick={this.openDrawer}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              阅读
            </Typography>

            <IconButton color="inherit" onClick={this.handleClickOpen}>
              <HintSvg />
            </IconButton>
            <IconButton
              color="inherit"
              onClick={() => this.jumpUrl("https://github.com/zsakvo")}
            >
              <GithubSvg />
            </IconButton>
          </Toolbar>
        </AppBar>

        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          scroll={this.state.scroll}
          aria-labelledby="scroll-dialog-title"
        >
          <DialogTitle id="scroll-dialog-title">
            免责声明（Disclaimer）
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              <div className={classes.hintContent}>
                阅读是一款提供网络文学搜索的工具，为广大网络文学爱好者提供一种方便、快捷舒适的试读体验。
              </div>
              <div className={classes.hintContent}>
                当您搜索一本书的时，阅读会将该书的书名以关键词的形式提交到各个第三方网络文学网站。各第三方网站返回的内容与阅读无关，阅读对其概不负责，亦不承担任何法律责任。任何通过使用阅读而链接到的第三方网页均系他人制作或提供，您可能从第三方网页上获得其他服务，阅读对其合法性概不负责，亦不承担任何法律责任。第三方搜索引擎结果根据您提交的书名自动搜索获得并提供试读，不代表阅读赞成或被搜索链接到的第三方网页上的内容或立场。您应该对使用搜索引擎的结果自行承担风险。
              </div>
              <div className={classes.hintContent}>
                阅读不做任何形式的保证：不保证第三方搜索引擎的搜索结果满足您的要求，不保证搜索服务不中断，不保证搜索结果的安全性、正确性、及时性、合法性。因网络状况、通讯线路、第三方网站等任何原因而导致您不能正常使用阅读，阅读不承担任何法律责任。阅读尊重并保护所有使用阅读用户的个人隐私权，您注册的用户名、电子邮件地址等个人资料，非经您亲自许可或根据相关法律、法规的强制性规定，阅读不会主动地泄露给第三方。
              </div>
              <div className={classes.hintContent}>
                阅读致力于最大程度地减少网络文学阅读者在自行搜寻过程中的无意义的时间浪费，通过专业搜索展示不同网站中网络文学的最新章节。阅读在为广大小说爱好者提供方便、快捷舒适的试读体验的同时，也使优秀网络文学得以迅速、更广泛的传播，从而达到了在一定程度促进网络文学充分繁荣发展之目的。阅读鼓励广大小说爱好者通过阅读发现优秀网络小说及其提供商，并建议阅读正版图书。任何单位或个人认为通过阅读搜索链接到的第三方网页内容可能涉嫌侵犯其信息网络传播权，应该及时向阅读提出书面权力通知，并提供身份证明、权属证明及详细侵权情况证明。阅读在收到上述法律文件后，将会依法尽快断开相关链接内容。
              </div>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              我知道了
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

MenuAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MenuAppBar);
