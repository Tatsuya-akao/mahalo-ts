import { MenuListItem } from "@/types/menu";
import MenuItem from "./menu-item";

export default function MenuList() {
  const menuListData: MenuListItem[] = [
    {
      id: "lunchbox",
      name: "お弁当",
      text: "サンプルテキストが入りますサンプルテキストが入ります。サンプルテキストが入りますサンプルテキストが入りますサンプルテキストが入ります。",
      imageUrl: "/images/home/menu_bento.jpg",
      url: "/menu",
    },
    {
      id: "lunch",
      name: "ランチセット",
      text: "サンプルテキストが入りますサンプルテキストが入ります。サンプルテキストが入りますサンプルテキストが入りますサンプルテキストが入ります。",
      imageUrl: "/images/home/menu_lunch.jpg",
      url: "/menu",
    },
    {
      id: "drink",
      name: "ドリンク & デザート",
      text: "サンプルテキストが入りますサンプルテキストが入ります。サンプルテキストが入りますサンプルテキストが入りますサンプルテキストが入ります。",
      imageUrl: "/images/home/menu_drink.jpg",
      url: "/menu",
    },
  ];

  return (
    <ul>
      {menuListData.map((data) => {
        return <MenuItem menuData={data} key={data.id} />;
      })}
    </ul>
  );
}
