"use client";

import Chip from "@/stories/Chip/Chip";
import { SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  IconButton,
  Input,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import { useState } from "react";

export default function Header() {
  const [searchKeyword, setSearchKeyword] = useState<string>("");

  //media query use hook , 지금은 사용하지 않음.
  const [isLargerThanHD, isLargerThan1400px, isDisplayingInBrowser] =
    useMediaQuery([
      "(min-width: 1680px)",
      "(min-width: 1024px)",
      "(display-mode: browser)", // 렌더링 완료되면 displaymode가 browser임
    ]);

  const searchRecord: string[] = [
    "여행 장소 ",
    "음식",
    "일상",
    "개발 공부",
    "게임",
    "영화",
    "플레이리스트",
  ];

  return (
    <>
      <Flex
        w={"100%"}
        alignItems={"center"}
        justifyContent={"center"}
        flexDirection={"column"}
      >
        {/* 검색 Input + 버튼 */}
        <Flex
          p={"15px"}
          w={"30%"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Input
            p={3}
            height={"45px"}
            bg={"white"}
            placeholder="검색"
            variant={"outline"}
            size={"sm"}
            onChange={(e) => {
              setSearchKeyword(e.currentTarget.value);
            }}
          />
          <IconButton
            aria-label="검색 돋보기 아이콘"
            background={"none"}
            icon={<SearchIcon />}
            onClick={(e) => {
              console.log("입력한 검색어 : ", searchKeyword);
            }}
          />
        </Flex>
        <Flex
          flexDirection={"row"}
          boxShadow={"md"}
          justifyContent={"center"}
          alignItems={"center"}
          width={"100%"}
          border={"1px"}
          borderColor={"blackAlpha.300"}
          p={"15px"}
          gap={"8px"}
        >
          <Box>
            <strong>POPULAR</strong>
          </Box>
          {searchRecord.map((item: string) => {
            return <Chip text={item} />;
          })}
        </Flex>
      </Flex>
    </>
  );
}
