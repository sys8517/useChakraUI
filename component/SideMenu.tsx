import { Box, Flex, Image, Switch, Text, calc } from "@chakra-ui/react";
import MenuItem from "./MenuItem";

type MenuType = {
  name: string;
  isNewPost: boolean;
};

export default function SideMenu() {
  const myMenus: MenuType[] = [
    { name: "첫번째 메뉴 예시", isNewPost: true },
    { name: "음식", isNewPost: false },
    { name: "음악", isNewPost: true },
    { name: "게임 리뷰", isNewPost: false },
    { name: "일상 포스팅", isNewPost: true },
    { name: "개발 관련 포스팅", isNewPost: true },
    {
      name: "개발 관련 포스팅ddddddddddddddddddddddddddddddd",
      isNewPost: false,
    },
  ];
  return (
    <>
      <Flex
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        position={"sticky"}
        height={"fit-content"}
        bg={"blackAlpha.200"}
        p={"20px"}
        gap={"40px"}
        top={"0px"}
        width={"20%"}
      >
        <Flex flexDirection={"column"} alignItems={"center"} gap={"25px"}>
          <Image
            boxSize={70}
            src="data:image/jpeg;base64,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"
          ></Image>
          <Text>
            <strong>User Name</strong>
          </Text>
          <Switch colorScheme="purple" isFocusable size="lg" />
        </Flex>
        <Flex
          textOverflow={"ellipsis"}
          flexDirection={"column"}
          gap={"12.5px"}
          w={"100%"}
        >
          {myMenus.map((menu: MenuType, i: number) => {
            return (
              <MenuItem
                title={menu.name}
                isNewPost={menu.isNewPost}
                key={menu.name + i}
              />
            );
          })}
        </Flex>
      </Flex>
    </>
  );
}
