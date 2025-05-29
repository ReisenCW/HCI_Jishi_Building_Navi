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
      name: "房间名",
      function: "房间功能",
      responsible: "负责人",
      teachers: ["老师1", "老师2"],
      image: "/images/400.jpg",
      x: 0, y: 0,
      width: 0, height: 0,
      rotate: 0
    },
    {
      id: "420",
      name: "420-电梯间",
      function: "直梯",
      responsible: "未知",
      teachers: [],
      image: "/images/420.jpg",
      x: 8, y: 19,
      width: 7, height: 5,
      rotate: 0
    },
    {
      id: "0",
      name: "楼梯间",
      function: "楼梯",
      responsible: "未知",
      teachers: [],
      image: "/images/0.jpg",
      x: 25, y: 19,
      width: 9, height: 5,
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
      teachers: [],
      image: "/assets/images/419.jpg",
      x: 25, y: 24,
      width: 9, height: 12,
      rotate: 0
    },
    {
      id: "417",
      name: "417",
      function: "会议室",
      responsible: "未知",
      teachers: [],
      image: "/images/419.jpg",
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
      teachers: [],
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
      teachers: [],
      image: "/images/414.jpg",
      x: 10.5, y: 57.5,
      width: 6.5, height: 4,
      rotate: -22
    },
    {
      id: "1",
      name: "楼梯间",
      function: "楼梯",
      responsible: "无",
      teachers: [],
      image: "/images/1.jpg",
      x: 13, y: 61,
      width: 6.5, height: 4,
      rotate: -28
    },
    {
      id: "413",
      name: "413",
      function: "未知",
      responsible: "无",
      teachers: [],
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
      teachers: [],
      image: "/images/411.jpg",
      x: 28, y: 53,
      width: 8, height: 6,
      rotate: -35
    },
    {
      id: "409",
      name: "409",
      function: "研究生工作室",
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
      function: "未知",
      responsible: "1",
      teachers: ["2", "3"],
      image: "/images/407.jpg",
      x: 43, y: 64.5,
      width: 10, height: 5.5,
      rotate: -51
    },
    // 房间数据...
  ];