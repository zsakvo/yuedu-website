var mongoose = require("mongoose");
var config = require("./config");

mongoose.connect(config.mongoUrl);
var db = mongoose.connection.on("open", function() {
  console.log("数据库连接成功！");
});

var bookSourceModel = db.model("bookSource", {
  bookSourceName: String,
  bookSourceGroup: String,
  bookSourceUrl: String,
  loginUrl: String,
  checkUrl: String,
  httpUserAgent: String,
  ruleFindUrl: String,
  ruleSearchUrl: String,
  ruleSearchList: String,
  ruleSearchName: String,
  ruleSearchAuthor: String,
  ruleSearchCoverUrl: String,
  ruleSearchKind: String,
  ruleSearchLastChapter: String,
  ruleSearchNoteUrl: String,
  ruleBookUrlPattern: String,
  ruleBookName: String,
  ruleBookAuthor: String,
  ruleCoverUrl: String,
  ruleBookKind: String,
  ruleBookLastChapter: String,
  ruleChapterUrl: String,
  ruleChapterUrlNext: String,
  ruleIntroduce: String,
  ruleChapterList: String,
  ruleChapterName: String,
  ruleContentUrl: String,
  ruleContentUrlNext: String,
  ruleBookContent: String
});

module.exports = bookSourceModel;
