import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import colorTheme from "./theme";

import Fab from "@material-ui/core/Fab";
import CheckIcon from "@material-ui/icons/Check";
import Icon from "@material-ui/core/Icon";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import copy from "copy-to-clipboard";
import DialogTitle from "@material-ui/core/DialogTitle";

import HttpUtil from "../utils/HttpUtil";

var QRCode = require("qrcode.react");

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    width: "30%",
    minWidth: "300px"
  },
  dense: {
    marginTop: 19
  },
  menu: {
    width: 200
  },
  root: {
    display: "block",
    paddingTop: "48px"
  },
  sourceInfo: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    paddingLeft: "6%",
    paddingRight: "6%"
  },
  find: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    paddingLeft: "6%",
    paddingRight: "6%"
  },
  search: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    paddingLeft: "6%",
    paddingRight: "6%"
  },
  detail: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    paddingLeft: "6%",
    paddingRight: "6%",
    marginBottom: "120px"
  },
  chip: {
    width: 200
  },
  divider: {
    marginTop: 70,
    marginBottom: 10,
    userSelect: "none",
    width: "100%",
    color: colorTheme.palette.primary.main
  },
  itemempty: {
    height: "0px",
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    width: "30%",
    minWidth: "300px"
  },
  fab: {
    position: "fixed",
    bottom: theme.spacing.unit * 4,
    right: theme.spacing.unit * 4,
    zIndex: 888
  },
  extendedIcon: {
    marginRight: theme.spacing.unit
  },
  qrContent: {
    paddingLeft: "48px",
    paddingRight: "48px"
  }
});

class TextFields extends React.Component {
  state = { open: false, bookSource: "", scroll: "paper", bookSourceUrl: "" };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  copySource = () => {
    copy(this.state.bookSource);
    this.handleClose();
  };

  buildJson = () => {
    this.setState({
      fabDisabled: true
    });
    var json = {};
    var bookSourceName = this.bookSourceName.value;
    var bookSourceGroup = this.bookSourceGroup.value;
    var bookSourceUrl = this.bookSourceUrl.value;
    var loginUrl = this.loginUrl.value;
    var checkUrl = this.checkUrl.value;
    var httpUserAgent = this.httpUserAgent.value;
    var ruleFindUrl = this.ruleFindUrl.value;
    var ruleSearchUrl = this.ruleSearchUrl.value;
    var ruleSearchList = this.ruleSearchList.value;
    var ruleSearchName = this.ruleSearchName.value;
    var ruleSearchAuthor = this.ruleSearchAuthor.value;
    var ruleSearchCoverUrl = this.ruleSearchCoverUrl.value;
    var ruleSearchKind = this.ruleSearchKind.value;
    var ruleSearchLastChapter = this.ruleSearchLastChapter.value;
    var ruleSearchNoteUrl = this.ruleSearchNoteUrl.value;
    var ruleBookUrlPattern = this.ruleBookUrlPattern.value;
    var ruleBookName = this.ruleBookName.value;
    var ruleBookAuthor = this.ruleBookAuthor.value;
    var ruleCoverUrl = this.ruleCoverUrl.value;
    var ruleBookKind = this.ruleBookKind.value;
    var ruleBookLastChapter = this.ruleBookLastChapter.value;
    var ruleChapterUrl = this.ruleChapterUrl.value;
    var ruleChapterUrlNext = this.ruleChapterUrlNext.value;
    var ruleIntroduce = this.ruleIntroduce.value;
    var ruleChapterList = this.ruleChapterList.value;
    var ruleChapterName = this.ruleChapterName.value;
    var ruleContentUrl = this.ruleContentUrl.value;
    var ruleContentUrlNext = this.ruleContentUrlNext.value;
    var ruleBookContent = this.ruleBookContent.value;
    json.bookSourceName = bookSourceName;
    json.bookSourceGroup = bookSourceGroup;
    json.bookSourceUrl = bookSourceUrl;
    json.loginUrl = loginUrl;
    json.checkUrl = checkUrl;
    json.httpUserAgent = httpUserAgent;
    json.ruleFindUrl = ruleFindUrl;
    json.ruleSearchUrl = ruleSearchUrl;
    json.ruleSearchList = ruleSearchList;
    json.ruleSearchName = ruleSearchName;
    json.ruleSearchAuthor = ruleSearchAuthor;
    json.ruleSearchCoverUrl = ruleSearchCoverUrl;
    json.ruleSearchKind = ruleSearchKind;
    json.ruleSearchLastChapter = ruleSearchLastChapter;
    json.ruleSearchNoteUrl = ruleSearchNoteUrl;
    json.ruleBookUrlPattern = ruleBookUrlPattern;
    json.ruleBookName = ruleBookName;
    json.ruleBookAuthor = ruleBookAuthor;
    json.ruleCoverUrl = ruleCoverUrl;
    json.ruleBookKind = ruleBookKind;
    json.ruleBookLastChapter = ruleBookLastChapter;
    json.ruleChapterUrl = ruleChapterUrl;
    json.ruleChapterUrlNext = ruleChapterUrlNext;
    json.ruleIntroduce = ruleIntroduce;
    json.ruleChapterList = ruleChapterList;
    json.ruleChapterName = ruleChapterName;
    json.ruleContentUrl = ruleContentUrl;
    json.ruleContentUrlNext = ruleContentUrlNext;
    json.ruleBookContent = ruleBookContent;
    HttpUtil.post("/createQr", "type=book&json=" + JSON.stringify(json))
      .then(data => {
        console.log(data);
        console.log(data.result);
        console.log(data.id);
        if (data.result === "success") {
          this.setState(
            {
              fabDisabled: false,
              dialogTitle: "生成完毕",
              qrShow: "block",
              bookSource: JSON.stringify(json),
              bookSourceUrl: "http://qr.daguduiyuan.xyz/getJson?id=" + data.id
            },
            () => {
              this.handleClickOpen();
            }
          );
        } else {
          this.setState(
            {
              fabDisabled: false,
              dialogTitle: "活码生成失败",
              qrShow: "none",
              bookSource: JSON.stringify(json)
            },
            () => {
              this.handleClickOpen();
            }
          );
        }
      })
      .catch(exception => {
        console.log(exception);
        this.setState(
          {
            fabDisabled: false,
            dialogTitle: "活码生成失败",
            qrShow: "none",
            bookSource: JSON.stringify(json)
          },
          () => {
            this.handleClickOpen();
          }
        );
      });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Fab
          color="secondary"
          aria-label="Edit"
          className={classes.fab}
          onClick={this.buildJson}
          disabled={this.state.fabDisabled}
        >
          <Icon>
            <CheckIcon />
          </Icon>
        </Fab>
        <div className={classes.sourceInfo}>
          <div className={classes.divider}>书源基础信息</div>
          <TextField
            id="standard-name"
            label="书源名称"
            className={classes.textField}
            margin="normal"
            inputRef={el => (this.bookSourceName = el)}
          />
          <TextField
            id="standard-name"
            label="书源分组"
            className={classes.textField}
            margin="normal"
            inputRef={el => (this.bookSourceGroup = el)}
          />
          <TextField
            id="standard-name"
            label="书源URL"
            className={classes.textField}
            margin="normal"
            inputRef={el => (this.bookSourceUrl = el)}
          />
          <TextField
            id="standard-name"
            label="登陆URL"
            className={classes.textField}
            margin="normal"
            inputRef={el => (this.loginUrl = el)}
          />
          <TextField
            id="standard-name"
            label="检测URL"
            className={classes.textField}
            margin="normal"
            inputRef={el => (this.checkUrl = el)}
          />
          <TextField
            id="standard-name"
            label="User-Agent"
            className={classes.textField}
            margin="normal"
            inputRef={el => (this.httpUserAgent = el)}
          />
          <div className={classes.itemempty} />
          <div className={classes.itemempty} />
          <div className={classes.itemempty} />
          <div className={classes.itemempty} />
        </div>
        <div className={classes.find}>
          <div className={classes.divider}>发现规则</div>
          <TextField
            id="standard-name"
            label="发现规则"
            className={classes.textField}
            margin="normal"
            multiline
            inputRef={el => (this.ruleFindUrl = el)}
          />
          <div className={classes.itemempty} />
          <div className={classes.itemempty} />
          <div className={classes.itemempty} />
          <div className={classes.itemempty} />
        </div>
        <div className={classes.search}>
          <div className={classes.divider}>搜索规则</div>
          <TextField
            id="standard-name"
            label="搜索地址"
            className={classes.textField}
            margin="normal"
            inputRef={el => (this.ruleSearchUrl = el)}
          />
          <TextField
            id="standard-name"
            label="搜索结果列表规则"
            className={classes.textField}
            margin="normal"
            inputRef={el => (this.ruleSearchList = el)}
          />
          <TextField
            id="standard-name"
            label="搜索结果书名规则"
            className={classes.textField}
            margin="normal"
            inputRef={el => (this.ruleSearchName = el)}
          />
          <TextField
            id="standard-name"
            label="搜索结果作者规则"
            className={classes.textField}
            margin="normal"
            inputRef={el => (this.ruleSearchAuthor = el)}
          />
          <TextField
            id="standard-name"
            label="搜索结果分类规则"
            className={classes.textField}
            margin="normal"
            inputRef={el => (this.ruleSearchKind = el)}
          />
          <TextField
            id="standard-name"
            label="搜索结果最新章节规则"
            className={classes.textField}
            margin="normal"
            inputRef={el => (this.ruleSearchLastChapter = el)}
          />
          <TextField
            id="standard-name"
            label="搜索结果封面规则"
            className={classes.textField}
            margin="normal"
            inputRef={el => (this.ruleSearchCoverUrl = el)}
          />
          <TextField
            id="standard-name"
            label="搜索结果书籍URL规则"
            className={classes.textField}
            margin="normal"
            multiline
            inputRef={el => (this.ruleSearchNoteUrl = el)}
          />
          <div className={classes.itemempty} />
          <div className={classes.itemempty} />
          <div className={classes.itemempty} />
          <div className={classes.itemempty} />
        </div>
        <div className={classes.detail}>
          <div className={classes.divider}>书籍内容规则</div>
          <TextField
            id="standard-name"
            label="书籍详情URL正则"
            className={classes.textField}
            margin="normal"
            inputRef={el => (this.ruleBookUrlPattern = el)}
          />
          <TextField
            id="standard-name"
            label="书名规则"
            className={classes.textField}
            margin="normal"
            inputRef={el => (this.ruleBookName = el)}
          />
          <TextField
            id="standard-name"
            label="作者规则"
            className={classes.textField}
            margin="normal"
            inputRef={el => (this.ruleBookAuthor = el)}
          />
          <TextField
            id="standard-name"
            label="封面规则"
            className={classes.textField}
            margin="normal"
            inputRef={el => (this.ruleCoverUrl = el)}
          />
          <TextField
            id="standard-name"
            label="分类规则"
            className={classes.textField}
            margin="normal"
            inputRef={el => (this.ruleBookKind = el)}
          />
          <TextField
            id="standard-name"
            label="最新章节规则"
            className={classes.textField}
            margin="normal"
            inputRef={el => (this.ruleBookLastChapter = el)}
          />
          <TextField
            id="standard-name"
            label="目录URL规则"
            className={classes.textField}
            margin="normal"
            inputRef={el => (this.ruleChapterUrl = el)}
          />
          <TextField
            id="standard-name"
            label="章节列表下一页规则"
            className={classes.textField}
            margin="normal"
            inputRef={el => (this.ruleChapterUrlNext = el)}
          />
          <TextField
            id="standard-name"
            label="简介规则"
            className={classes.textField}
            margin="normal"
            inputRef={el => (this.ruleIntroduce = el)}
          />
          <TextField
            id="standard-name"
            label="目录列表规则"
            className={classes.textField}
            margin="normal"
            inputRef={el => (this.ruleChapterList = el)}
          />
          <TextField
            id="standard-name"
            label="章节名规则"
            className={classes.textField}
            margin="normal"
            inputRef={el => (this.ruleChapterName = el)}
          />
          <TextField
            id="standard-name"
            label="章节URL规则"
            className={classes.textField}
            margin="normal"
            inputRef={el => (this.ruleContentUrl = el)}
          />
          <TextField
            id="standard-name"
            label="正文下一页URL规则"
            className={classes.textField}
            margin="normal"
            inputRef={el => (this.ruleContentUrlNext = el)}
          />
          <TextField
            id="standard-name"
            label="正文规则"
            className={classes.textField}
            margin="normal"
            multiline
            inputRef={el => (this.ruleBookContent = el)}
          />
          <div className={classes.itemempty} />
          <div className={classes.itemempty} />
          <div className={classes.itemempty} />
          <div className={classes.itemempty} />
        </div>

        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle>{this.state.dialogTitle}</DialogTitle>
          <DialogContent
            className={classes.qrContent}
            display={this.state.qrShow}
          >
            <QRCode value={this.state.bookSourceUrl} size={200} />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.copySource} color="primary">
              复制代码
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

TextFields.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TextFields);
