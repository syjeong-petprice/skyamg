import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 480, // 사용자 정의 태블릿 크기
      md: 768, // 사용자 정의 데스크톱 크기
      lg: 1440, // 사용자 정의 큰 데스크톱 크기
      xl: 1920,
    },
  },
});

export default theme;
