import React from "react";
import { useState } from "react";
import { Menu, MenuItemProps, Segment } from "semantic-ui-react";

function HeaderView() {
  const [menu, setMenu] = useState({ activeItem: "home" });

  const handleItemClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    data: MenuItemProps
  ) => {
    if (data.name === undefined) {
      return;
    }
    setMenu({ activeItem: data.name });
  };
  return (
    <>
      <Segment inverted>
        <Menu inverted pointing secondary>
          <Menu.Item
            name="home"
            active={menu.activeItem === "home"}
            onClick={handleItemClick}
          />
          <Menu.Item
            name="messages"
            active={menu.activeItem === "messages"}
            onClick={handleItemClick}
          />
          <Menu.Item
            name="friends"
            active={menu.activeItem === "friends"}
            onClick={handleItemClick}
          />
        </Menu>
      </Segment>
    </>
  );
}

export default HeaderView;
