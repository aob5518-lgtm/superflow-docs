const fs = require("fs");

const file = "C:\\superflow-docs\\docs.json";

const data = JSON.parse(fs.readFileSync(file, "utf8"));

data.navbar = data.navbar || {};
data.navbar.links = Array.isArray(data.navbar.links) ? data.navbar.links : [];

// 删除旧的语言按钮，避免重复
data.navbar.links = data.navbar.links.filter((item) => {
  return !["中文", "CN", "EN", "English"].includes(item.label);
});

// 在顶部导航加入语言切换按钮
data.navbar.links.push(
  {
    label: "中文",
    href: "/"
  },
  {
    label: "EN",
    href: "/en"
  }
);

fs.writeFileSync(file, JSON.stringify(data, null, 2), "utf8");

console.log("Done. Language buttons added: 中文 / EN");