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
  }
  
  export const rooms: Room[] = [
    {
      id: "400",
      name: "房间名",
      function: "房间功能",
      responsible: "负责人",
      teachers: ["老师1", "老师2"],
      image: "/images/400.jpg",
      x: 15, y: 20,
      width: 10, height: 12
    },
    // 房间数据...
  ];