import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  drawerVisible: false,
  items: [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "About Us",
      url: "/about-us",
    },
    {
      name: "Contact",
      url: "/contact",
    },
  ],
  menu: {
    visible: false,
  },
};

const NavbarSlice = createSlice({
  name: "NavbarHome",
  initialState,
  reducers: {
    setNavbarDrawerVisible: (state, action) => {
      state.drawerVisible = action.payload;
    },
    setNavbarMenu: (state, action) => {
      state.menu = action.payload;
    },
  },
});

export const { setNavbarDrawerVisible, setNavbarMenu } = NavbarSlice.actions;

export default NavbarSlice.reducer;
