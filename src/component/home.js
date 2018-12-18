import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";

import Fab from "@material-ui/core/Fab";
import DownIcon from "@material-ui/icons/CloudDownload";

import SpaIcon from "@material-ui/icons/Spa";
import AllIcon from "@material-ui/icons/AllInclusive";
import NearIcon from "@material-ui/icons/NearMe";
import EditIcon from "@material-ui/icons/Edit";
import TuneIcon from "@material-ui/icons/Tune";
import LayersIcon from "@material-ui/icons/Layers";

import Button from "@material-ui/core/Button";

const styles = () => ({
  homeRoot: {
    paddingTop: 64,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around"
  },
  logo: {
    marginTop: "100px",
    width: "256px",
    height: "256px",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    background: "url(../img/read.png)"
  },
  typographyH4: {
    paddingTop: "64px",
    width: "100%"
  },
  typographyH6: {
    paddingTop: 18,
    paddingLeft: "4%",
    paddingRight: "4%",
    width: "100%"
  },
  fabDiv: {
    marginTop: 64,
    width: "100%",
    textAlign: "center"
  },
  fab: {
    marginRight: "-18px"
  },
  extendedIcon: {
    marginRight: 16
  },
  cardDiv: {
    marginTop: "120px",
    paddingTop: "84px",
    marginBottom: "120px",
    paddingBottom: "84px",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "rgba(226,225,228,0.3)",
    justifyContent: "space-around"
  },
  detailDiv: {
    width: "40%",
    minWidth: "400px",
    display: "flex",
    flexDirection: "row",
    marginLeft: "5%",
    marginRight: "5%",
    marginTop: "30px"
  },
  detailIcon: {
    width: "30px",
    height: "30px",
    marginRight: "20px"
  },
  detailTextDiv: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "48px"
  },
  detailTitle: {},
  detailContent: {},
  itemempty: {
    height: "0px",
    width: "33%",
    minWidth: "420px"
  },
  titleTypography: {
    marginBottom: "14px"
  },
  detailTypography: {},
  bottomDiv: {
    width: "100%",
    background: "#424242",
    display: "flex",
    flexDirection: "column"
  },
  divider: {
    width: "90%",
    height: "1px",
    marginRight: "5%",
    marginLeft: "5%",
    background: "#878787"
  },
  bottomContent: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    paddingLeft: "10%",
    paddingRight: "10%",
    flexWrap: "wrap"
  },
  community: {
    flexGrow: 1,
    marginTop: "64px"
  },
  resource: {
    flexGrow: 1
  },
  donate: {
    flexGrow: 2
  },
  bottomTextTitle: {
    color: "#ffffff",
    fontWeight: "900",
    fontSize: "20px",
    marginBottom: "24px"
  },
  bottomTextContent: {
    width: "100%",
    fontWeight: "600",
    marginTop: "12px",
    color: "#9e9e9e"
  },
  donateButton: {},
  copyRight: {
    paddingTop: "24px",
    paddingBottom: "24px",
    color: "#9e9e9e",
    textAlign: "center"
  },
  donateMe: {
    display: "flex",
    flexDirection: "row",
    marginTop: "36px",
    marginBottom: "36px"
  },
  qrcode: {
    width: "136px",
    height: "136px",
    marginLeft: "40px"
  },
  links: {
    textDecoration: "none"
  }
});

class home extends React.Component {
  state = {
    qrcodeDisplay: "none",
    qrcodeState: false,
    donateButtonText: "显示捐赠二维码"
  };

  showQrcode = () => {
    this.setState({
      qrcodeDisplay: "block",
      qrcodeState: true,
      donateButtonText: "隐藏捐赠二维码"
    });
  };

  hideQrcode = () => {
    this.setState({
      qrcodeDisplay: "none",
      qrcodeState: false,
      donateButtonText: "显示捐赠二维码"
    });
  };

  clickDonateButton = () => {
    if (this.state.qrcodeState) {
      this.hideQrcode();
    } else {
      this.showQrcode();
    }
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.homeRoot}>
        <div className={classes.logo} />
        <Typography
          variant="h4"
          align="center"
          color="primary"
          className={classes.typographyH4}
          width="100%"
        >
          阅 读
        </Typography>
        <Typography
          variant="h6"
          align="center"
          color="primary"
          className={classes.typographyH6}
        >
          阅读是一款提供网络文学搜索的工具，为广大网络文学爱好者提供一种方便、快捷舒适的试读体验。
        </Typography>
        <div className={classes.fabDiv}>
          <a
            href="https://www.coolapk.com/apk/com.gedoor.monkeybook"
            target="_blank"
            rel="noopener noreferrer"
            className={classes.links}
          >
            <Fab variant="extended" color="primary" className={classes.fab}>
              <DownIcon className={classes.extendedIcon} />
              Download From CoolApk
            </Fab>
          </a>
        </div>
        <div className={classes.cardDiv}>
          <div className={classes.detailDiv}>
            <div className={classes.detailIcon}>
              <SpaIcon color="primary" fontSize="large" />
            </div>
            <div className={classes.detailTextDiv}>
              <Typography
                className={classes.titleTypography}
                variant="h6"
                align="left"
              >
                界面简洁，专注阅读
              </Typography>
              <Typography
                className={classes.detailTypography}
                variant="h7"
                align="left"
              >
                点击直接打开书架，无广告，无多余功能。拒绝各种附加服务的打扰，只为阅读文字而生
              </Typography>
            </div>
          </div>
          <div className={classes.detailDiv}>
            <div className={classes.detailIcon}>
              <LayersIcon color="primary" fontSize="large" />
            </div>
            <div className={classes.detailTextDiv}>
              <Typography
                className={classes.titleTypography}
                variant="h6"
                align="left"
              >
                体积虽小，功能齐全
              </Typography>
              <Typography
                className={classes.detailTypography}
                variant="h7"
                align="left"
              >
                6.41MB
                的体积中容纳了强大的书源解析引擎，支持多途径的书源管理，书籍的并行缓存等服务，您亦可以自行设置规则，对书籍内指定字符进行过滤和替换
              </Typography>
            </div>
          </div>
          <div className={classes.detailDiv}>
            <div className={classes.detailIcon}>
              <NearIcon color="primary" fontSize="large" />
            </div>
            <div className={classes.detailTextDiv}>
              <Typography
                className={classes.titleTypography}
                variant="h6"
                align="left"
              >
                发现版块，寻书简便
              </Typography>
              <Typography
                className={classes.detailTypography}
                variant="h7"
                align="left"
              >
                从多个网站获取最新的书籍排行信息，力求提供最全面、最真实的排名资讯，茫茫书海，任你遨游。
              </Typography>
            </div>
          </div>
          <div className={classes.detailDiv}>
            <div className={classes.detailIcon}>
              <AllIcon color="primary" fontSize="large" />
            </div>
            <div className={classes.detailTextDiv}>
              <Typography
                className={classes.titleTypography}
                variant="h6"
                align="left"
              >
                书源丰富，全网尽收
              </Typography>
              <Typography
                className={classes.detailTypography}
                variant="h7"
                align="left"
              >
                拥有由爱好者共同分享维护的数百个书源，覆盖网文，出版书，轻小说等各个类型的书籍，一个软件，全网通吃
              </Typography>
            </div>
          </div>
          <div className={classes.detailDiv}>
            <div className={classes.detailIcon}>
              <EditIcon color="primary" fontSize="large" />
            </div>
            <div className={classes.detailTextDiv}>
              <Typography
                className={classes.titleTypography}
                variant="h6"
                align="left"
              >
                编辑书源，自给自足
              </Typography>
              <Typography
                className={classes.detailTypography}
                variant="h7"
                align="left"
              >
                书源引擎支持 css select，JsonPath，XPath
                等多种语法，同时可以使用 JavaScript
                语句对返回值进行处理，为不同的网站带来相同的阅读体验
              </Typography>
            </div>
          </div>
          <div className={classes.detailDiv}>
            <div className={classes.detailIcon}>
              <TuneIcon color="primary" fontSize="large" />
            </div>
            <div className={classes.detailTextDiv}>
              <Typography
                className={classes.titleTypography}
                variant="h6"
                align="left"
              >
                自定排版，功能丰富
              </Typography>
              <Typography
                className={classes.detailTypography}
                variant="h7"
                align="left"
              >
                从字体到间距，从阅读背景到翻页动画，均可自行设定相关参数，适合自己的才是最好的。
              </Typography>
            </div>
          </div>
        </div>
        <div className={classes.bottomDiv}>
          <div className={classes.bottomContent}>
            <div className={classes.community}>
              <div className={classes.bottomTextTitle}>社区</div>
              <a
                href="http://www.hostfans.cn/"
                target="_blank"
                rel="noopener noreferrer"
                className={classes.links}
              >
                <div className={classes.bottomTextContent}>阅读爱好者</div>
              </a>
              <a
                href="https://www.coolapk.com/apk/com.gedoor.monkeybook"
                target="_blank"
                rel="noopener noreferrer"
                className={classes.links}
              >
                <div className={classes.bottomTextContent}>酷安评论区</div>
              </a>
            </div>
            <div className={classes.resource}>
              <div className={classes.community}>
                <div className={classes.bottomTextTitle}>资源</div>
                <a
                  href="https://github.com/gedoor/MyBookshelf/releases/latest"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={classes.links}
                >
                  <div className={classes.bottomTextContent}>最新版本</div>
                </a>
              </div>
            </div>
            <div className={classes.donate}>
              <div className={classes.community}>
                <div className={classes.bottomTextTitle}>赞助该项目</div>
                <div className={classes.bottomTextContent}>
                  本软件为开源软件, 没有上架 Google Play, 没有在任何地方售卖,
                  如果想支持我请通过软件里的捐赠, 不要在任何地方购买!
                </div>
                <div className={classes.donateMe}>
                  <Button
                    className={classes.donateButton}
                    variant="outlined"
                    color="primary"
                    onClick={this.clickDonateButton}
                  >
                    {this.state.donateButtonText}
                  </Button>
                  <img
                    className={classes.qrcode}
                    style={{ display: this.state.qrcodeDisplay }}
                    src="/img/hbewm.png"
                    alt="支付宝红包码"
                  />
                  <img
                    className={classes.qrcode}
                    style={{ display: this.state.qrcodeDisplay }}
                    src="/img/donatezfb.png"
                    alt="支付宝收钱码"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={classes.divider} />
          <div className={classes.copyRight}>
            This page is powered by zsakvo .
          </div>
        </div>
      </div>
    );
  }
}

home.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(home);
