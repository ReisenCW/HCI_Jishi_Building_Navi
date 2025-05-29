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
    rotate?: number; // 新增旋转角度属性（单位：度）
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
      responsible: "未知",
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
      responsible: "未知",
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
      teachers: ["尹长青（安全负责人）：18901892339", "陈韩悦（安全员）：69589847"],
      image: "/images/418R.jpg",
      x: 8, y: 24,
      width: 10, height: 12,
      rotate: 0
    },
    {
      id: "418",
      name: "418-L",
      function: "研究生工作站",
      responsible: "陈梁：69589847",
      teachers: ["尹长青（安全负责人）：18901892339", "陈韩悦（安全员）：69589847"],
      image: "/images/418L.jpg",
      x: 8, y: 36,
      width: 10, height: 11,
      rotate: 0
    },
    {
      id: "419",
      name: "419",
      function: "软件技术研究中心",
      responsible: "未知",
      teachers: ["无"],
      image: "/images/419.jpg",
      x: 25, y: 24,
      width: 9, height: 12,
      rotate: 0
    },
    {
      id: "417",
      name: "417",
      function: "会议室",
      responsible: "未知",
      teachers: ["无"],
      image: "/images/417.jpg",
      x: 25, y: 36,
      width: 9, height: 11,
      rotate: 0
    },
    {
      id: "416",
      name: "416",
      function: "教育部工程研究中心实验室",
      responsible: "负责人1",
      teachers: ["老师1", "老师2"],
      image: "/images/416.jpg",
      x: 9, y: 47,
      width: 9, height: 11,
      rotate: -10
    },
    {
      id: "415",
      name: "415",
      function: "消防间",
      responsible: "未知",
      teachers: ["无"],
      image: "/images/415.jpg",
      x: 25, y: 47,
      width: 9, height: 5,
      rotate: -10
    },
    {
      id: "414",
      name: "414",
      function: "未知",
      responsible: "未知",
      teachers: ["无"],
      image: "/images/414.jpg",
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
      id: "413",
      name: "413",
      function: "未知",
      responsible: "无",
      teachers: ["无"],
      image: "/images/413.jpg",
      x: 18, y: 63.5,
      width: 6, height: 7,
      rotate: -45
    },
    {
      id: "411",
      name: "411",
      function: "文化展览区",
      responsible: "无",
      teachers: ["无"],
      image: "/images/411.jpg",
      x: 30, y: 53,
      width: 6, height: 4,
      rotate: 0
    },
    {
      id: "409",
      name: "409",
      function: "未知",
      responsible: "1",
      teachers: ["2", "3"],
      image: "/images/409.jpg",
      x: 36, y: 56.5,
      width: 10, height: 10.5,
      rotate: -50
    },
    {
      id: "407",
      name: "407",
      function: "研究生工作室",
      responsible: "陈梁：69589847",
      teachers: ["严海洲（安全负责人）：13918378240", "叶珂男（安全员）：69589847"],
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
      responsible: "未知",
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
      responsible: "未知",
      teachers: ["王冬青", "李江峰", "夏波涌", "张颖"],
      image: "/images/410.jpg",
      x: 27.8, y: 71.5,
      width: 10, height: 5,
      rotate: -51
    },
    {
      id: "408",
      name: "408",
      function: "未知",
      responsible: "未知",
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
      function: "门脸+卫生间+饮水机",
      responsible: "无",
      teachers: ["无"],
      image: "/images/401.jpg",
      x: 8, y: 5,
      width: 14, height: 6,
      rotate: 0
    },
    // 房间数据...
  ];