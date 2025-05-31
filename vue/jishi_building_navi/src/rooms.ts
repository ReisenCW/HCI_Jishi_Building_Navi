export interface Room {
    id: string;
    name: string;
    responsible?: string;
    function: string;
    teachers?: string[];
    image: string;
    x: number;   // 地图上的相对坐标（百分比）
    y: number;
    width: number;
    height: number;
    rotate?: number; // 旋转角度属性（单位：度）
  }
  
  export const rooms: Room[] = [
    {
      id: "400",
      name: "400",
      function: "活动区",
      responsible: "无",
      teachers: ["无"],
      image: "/images/400.jpg",
      x: 50, y: 73,
      width: 22, height: 22,
      rotate: 40
    },
    {
      id: "420",
      name: "420",
      function: "电梯间",
      responsible: "无",
      teachers: ["无"],
      image: "/images/420.jpg",
      x: 8, y: 19,
      width: 7, height: 5,
      rotate: 0
    },
    {
      id: "1",
      name: "楼梯间1",
      function: "消防通道",
      responsible: "无",
      teachers: ["无"],
      image: "/images/1.jpg",
      x: 24.5, y: 18.5,
      width: 9.5, height: 5.5,
      rotate: 0
    },
    {
      id: "418",
      name: "418-R",
      function: "研究生工作站",
      responsible: "陈梁：69589847",
      teachers: ["尹长青（安全负责人）：18901892339", "陈韩悦（安全员）"],
      image: "/images/418R.jpg",
      x: 8, y: 24,
      width: 10, height: 6,
      rotate: 0
    },
    {
      id: "418",
      name: "418-L",
      function: "研究生工作站",
      responsible: "陈梁：69589847",
      teachers: ["尹长青（安全负责人）：18901892339", "陈韩悦（安全员）"],
      image: "/images/418L.jpg",
      x: 8, y: 30,
      width: 10, height: 6,
      rotate: 0
    },
    {
      id: "416",
      name: "416",
      function: "教学机房",
      responsible: "陈梁：69589847",
      teachers: ["杨旻（安全负责人）：13918683745"],
      image: "/images/416.jpg",
      x: 8, y: 36,
      width: 10, height: 11,
      rotate: 0
    },
    {
      id: "419",
      name: "419",
      function: "嵌入式系统实验室",
      responsible: "陈梁：69589847",
      teachers: ["张晶（安全负责人）：13916133163"],
      image: "/images/419.jpg",
      x: 25, y: 24,
      width: 9, height: 12,
      rotate: 0
    },
    {
      id: "417",
      name: "417",
      function: "会议室",
      responsible: "无",
      teachers: ["无"],
      image: "/images/417.jpg",
      x: 25, y: 36,
      width: 9, height: 11,
      rotate: 0
    },
    {
      id: "414",
      name: "414",
      function: "硬件实验室",
      responsible: "无",
      teachers: ["无"],
      image: "/images/414.jpg",
      x: 9, y: 47,
      width: 9, height: 11,
      rotate: -10
    },
    {
      id: "415",
      name: "415",
      function: "消防间",
      responsible: "无",
      teachers: ["无"],
      image: "/images/415.jpg",
      x: 25, y: 47,
      width: 9, height: 5,
      rotate: -10
    },
    {
      id: "413",
      name: "413",
      function: "阳台",
      responsible: "无",
      teachers: ["无"],
      image: "/images/413.jpg",
      x: 10.5, y: 57.5,
      width: 6.5, height: 4,
      rotate: -22
    },
    {
      id: "2",
      name: "楼梯间2",
      function: "消防通道",
      responsible: "无",
      teachers: ["无"],
      image: "/images/2.jpg",
      x: 13, y: 61,
      width: 6.5, height: 4,
      rotate: -28
    },
    {
      id: "411",
      name: "411",
      function: "阳台",
      responsible: "无",
      teachers: ["无"],
      image: "/images/411.jpg",
      x: 18, y: 63.5,
      width: 6, height: 7,
      rotate: -45
    },
    {
      id: "457",
      name: "457",
      function: "文化展览区",
      responsible: "无",
      teachers: ["无"],
      image: "/images/457.jpg",
      x: 30, y: 53,
      width: 6, height: 4,
      rotate: 0
    },
    {
      id: "409L",
      name: "409L",
      function: "研究生工作室",
      responsible: "陈梁：69589847",
      teachers: ["朱亚萍（安全负责人）：15195975598", "代玉琢（安全员）"],
      image: "/images/409L.jpg",
      x: 33, y: 57.5,
      width: 10, height: 6,
      rotate: -50
    },
    {
      id: "409R",
      name: "409R",
      function: "研究生工作室",
      responsible: "陈梁：69589847",
      teachers: ["杜庆峰（安全负责人）：18964806609", "韩永琦（安全员）"],
      image: "/images/409R.jpg",
      x: 38.5, y: 61,
      width: 10, height: 5,
      rotate: -50
    },
    {
      id: "407",
      name: "407",
      function: "研究生工作室",
      responsible: "陈梁：69589847",
      teachers: ["严海洲（安全负责人）：13918378240", "叶珂男（安全员）"],
      image: "/images/407.jpg",
      x: 43, y: 64.5,
      width: 10, height: 5.5,
      rotate: -51
    },
    {
      id: "405",
      name: "405",
      function: "男卫生间",
      responsible: "无",
      teachers: ["无"],
      image: "/images/405.jpg",
      x: 47.5, y: 68.5,
      width: 10, height: 3,
      rotate: -51
    },
    {
      id: "3",
      name: "楼梯间3",
      function: "消防通道",
      responsible: "无",
      teachers: ["无"],
      image: "/images/3.jpg",
      x: 50.6, y: 70.7,
      width: 10, height: 3,
      rotate: -51
    },
    {
      id: "412",
      name: "412",
      function: "教研室",
      responsible: "无",
      teachers: ["刘岩", "张慧娟", "孙萍", "罗怡桂"],
      image: "/images/412.jpg",
      x: 22.9, y: 67.6,
      width: 10, height: 5,
      rotate: -51
    },
    {
      id: "410",
      name: "410",
      function: "教研室",
      responsible: "无",
      teachers: ["王冬青", "李江峰", "夏波涌", "张颖"],
      image: "/images/410.jpg",
      x: 27.8, y: 71.5,
      width: 10, height: 5,
      rotate: -51
    },
    {
      id: "408",
      name: "408",
      function: "多媒体教室",
      responsible: "无",
      teachers: ["无"],
      image: "/images/408.jpg",
      x: 32.8, y: 74.5,
      width: 10, height: 6,
      rotate: -51
    },
    {
      id: "406",
      name: "406",
      function: "女卫生间",
      responsible: "无",
      teachers: ["无"],
      image: "/images/406.jpg",
      x: 37.7, y: 78.6,
      width: 10, height: 3,
      rotate: -51
    },
    {
      id: "4",
      name: "楼梯间4",
      function: "消防通道",
      responsible: "无",
      teachers: ["无"],
      image: "/images/4.jpg",
      x: 40.6, y: 80.6,
      width: 10, height: 3,
      rotate: -51
    },
    {
      id: "401",
      name: "401",
      function: "门脸+饮水区",
      responsible: "无",
      teachers: ["无"],
      image: "/images/401.jpg",
      x: 8, y: 5,
      width: 14, height: 5.5,
      rotate: 0
    },
    {
      id: "426",
      name: "426",
      function: "教学机房",
      responsible: "陈梁：69589847",
      teachers: ["杨旻（安全负责人）：13918683745"],
      image: "/images/426.jpg",
      x: 22, y: 5,
      width: 7, height: 5.5,
      rotate: 0
    },
    {
      id: "428",
      name: "428",
      function: "服务器机房",
      responsible: "杨旻：13918683745",
      teachers: ["课题组负责人-杨旻：13918683745", "安全责任人-严海洲：13918378240","学院办公室电话：69589585"],
      image: "/images/428.jpg",
      x: 29, y: 5,
      width: 5, height: 5.5,
      rotate: 0
    },
    {
      id: "430",
      name: "430",
      function: "教学机房",
      responsible: "陈梁：69589847",
      teachers: ["杨旻（安全负责人）：13918683745"],
      image: "/images/430.jpg",
      x: 37, y: 7,
      width: 16, height: 4,
      rotate: 0
    },
    {
      id: "402",
      name: "402",
      function: "学生活动区",
      responsible: "无",
      teachers: ["无"],
      image: "/images/402.jpg",
      x: 36.5, y: 16.5,
      width: 15, height: 6,
      rotate: 0
    },
    {
      id: "432",
      name: "432",
      function: "党员之家",
      responsible: "无",
      teachers: ["无"],
      image: "/images/432.jpg",
      x: 58, y: 7,
      width: 3, height: 4,
      rotate: 0
    },
    {
      id: "434",
      name: "434",
      function: "教室",
      responsible: "无",
      teachers: ["无"],
      image: "/images/434.jpg",
      x: 61, y: 7,
      width: 4, height: 4,
      rotate: 0
    },
    {
      id: "403",
      name: "403",
      function: "卫生间",
      responsible: "无",
      teachers: ["无"],
      image: "/images/403.jpg",
      x: 65, y: 7,
      width: 4, height: 4,
      rotate: 0
    },
    {
      id: "404",
      name: "404",
      function: "图书角",
      responsible: "无",
      teachers: ["无"],
      image: "/images/404.jpg",
      x: 68, y: 11,
      width: 8, height: 11,
      rotate: 0
    },
    {
      id: "5",
      name: "楼梯间5",
      function: "消防通道",
      responsible: "无",
      teachers: ["无"],
      image: "/images/5.jpg",
      x: 69, y: 22,
      width: 7, height: 3,
      rotate: 0
    },
    {
      id: "442-R",
      name: "442-R",
      function: "学院办公室",
      responsible: "无",
      teachers: ["闫鹏", "张晶", "林伊凡", "张晓雅", "钱银飞", "王昊榕", "俞晓静"],
      image: "/images/442R.jpg",
      x: 58, y: 19,
      width: 7, height: 5.5,
      rotate: 0
    },
    {
      id: "442-L",
      name: "442-L",
      function: "学院办公室",
      responsible: "无",
      teachers: ["刘梦露", "李慧敏", "王彩霞", "杨丹", "姚世仪"],
      image: "/images/442L.jpg",
      x: 58, y: 24.5,
      width: 7, height: 5,
      rotate: 0
    },
    {
      id: "444",
      name: "444",
      function: "档案室",
      responsible: "无",
      teachers: ["无"],
      image: "/images/444.jpg",
      x: 58, y: 29.5,
      width: 7, height: 4,
      rotate: 0
    },
    {
      id: "441",
      name: "441",
      function: "会议室",
      responsible: "无",
      teachers: ["无"],
      image: "/images/441.jpg",
      x: 69, y: 25,
      width: 7, height: 8,
      rotate: 0
    },
    {
      id: "443",
      name: "443",
      function: "实验中心",
      responsible: "无",
      teachers: ["陈梁", "杨旻", "严海洲"],
      image: "/images/443.jpg",
      x: 70, y: 33,
      width: 6, height: 3,
      rotate: -9
    },
    {
      id: "447+449",
      name: "447+449",
      function: "卫生间",
      responsible: "无",
      teachers: ["无"],
      image: "/images/447.jpg",
      x: 71, y: 36,
      width: 6, height: 4.5,
      rotate: -29
    },
    {
      id: "451",
      name: "451",
      function: "副院长办公室",
      responsible: "无",
      teachers: ["451-1：王成", "451-2：何良华", "451-3：张林"],
      image: "/images/451.jpg",
      x: 75, y: 39.5,
      width: 6, height: 5.5,
      rotate: -49
    },
    {
      id: "6",
      name: "楼梯间6",
      function: "消防通道",
      responsible: "无",
      teachers: ["无"],
      image: "/images/6.jpg",
      x: 79, y: 43,
      width: 6.5, height: 3.5,
      rotate: -55
    },
    {
      id: "446",
      name: "446",
      function: "学生工作办公室（学工办）",
      responsible: "无",
      teachers: ["张砚秋", "丁瑞庭", "葛蕾", "焦嘉欣", "钟梦莹", "陈璞皎"],
      image: "/images/446.jpg",
      x: 58, y: 33.5,
      width: 7, height: 5,
      rotate: -10
    },
    {
      id: "448",
      name: "448",
      function: "副书记办公室+院务助理办公室",
      responsible: "无",
      teachers: ["448-1-副书记：陈荣", "448-2-副书记：吴晓培", "448-3-院务助理：宋井宽"],
      image: "/images/448.jpg",
      x: 58.5, y: 39,
      width: 7.5, height: 3,
      rotate: -26
    },
    {
      id: "450-R",
      name: "450-R",
      function: "院长办公室",
      responsible: "申恒涛",
      teachers: ["申恒涛"],
      image: "/images/450R.jpg",
      x: 61, y: 41.5,
      width: 7.5, height: 6.5,
      rotate: -35
    },
    {
      id: "450-L",
      name: "450-L",
      function: "党委书记办公室",
      responsible: "熊岚",
      teachers: ["熊岚"],
      image: "/images/450L.jpg",
      x: 65.5, y: 46.5,
      width: 7.5, height: 6.5,
      rotate: -40
    },
    {
      id: "7",
      name: "楼梯间7",
      function: "消防通道",
      responsible: "无",
      teachers: ["无"],
      image: "/images/7.jpg",
      x: 71, y: 51.5,
      width: 7, height: 3,
      rotate: -52
    },
    {
      id: "455",
      name: "455",
      function: "会议室",
      responsible: "无",
      teachers: ["无"],
      image: "/images/455.jpg",
      x: 89, y: 46.5,
      width: 6, height: 5,
      rotate: -55
    },
    {
      id: "456",
      name: "456",
      function: "党委办公室",
      responsible: "无",
      teachers: ["周微微", "陆凤兰", "赵清理"],
      image: "/images/456.jpg",
      x: 82, y: 54,
      width: 6, height: 5,
      rotate: -55
    },
  ];