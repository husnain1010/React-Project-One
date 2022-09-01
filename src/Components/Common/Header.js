import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Container } from "@mui/system";
import { autocompleteClasses, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import "../Style/Common/Header.scss";


const drawerWidth = autocompleteClasses;
const navItems = [
  {
    name:"Home",
    path:"/"
  },
  {
    name:"Courses",
    path:"/courses"
  },
  {
    name:"Deals",
    path:"/deals"
  },
  {
    name:"Success",
    path:"/success"
  },
  {
    name:"About",
    path:"/about"
  },
  {
    name:"Register",
    path:"/register"
  },
];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>Pro Edu</Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText to={item.path}>{item.name}</ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Grid item xs={4} sx={{display:"flex",justifyContent:"center"}}>
              <Button
                className="pop poppp"
                variant="outlined"
                sx={{
                  color: "#289BDE",
                  fontWeight: "400",
                  fontSize: "18px",
                  border: "1px solid #289BDE",
                  mb:3,
                }}
              >
                Register
              </Button>

            </Grid>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box className="Navbar" sx={{ display: "flex" ,my:{xl:5,md:4 ,xs:2} }}>
      <AppBar
        component="nav"
        sx={{ backgroundColor: "white", boxShadow: "none" }}
      >
        <Container className="container">
          <Toolbar className="px-0">
           
            <Grid item xs={2}>
              <Typography
                className="pop"
                variant="h6"
                component="div"
                sx={{
                  flexGrow: 1,
                  display: { xs: "block", md: "block" },
                  fontWeight: "600",
                  fontSize: {xl:40,lg:40, md:35, xs:25},
                  color: "#4A4A4A",
                }}
              >
                Pro Edu
              </Typography> 
            </Grid>
            <Grid item xs={6} sx={{ mx: "auto" }}>
              <Box sx={{ display: { xs: "none", md: "block" } }}>
                {navItems.map((item) => (
                  <Button
                    className="pop"
                    key={item}
                    sx={{
                      color: "#777777",
                      px: {lg:3,sm:1.2},
                      fontWeight: "400",
                      fontSize: "18px",
                      
                    }}
                  >
                  <Link className="nav-color pop" to={item.path}>{item.name}</Link>
                    
                  </Button>
                ))}
              </Box>
            </Grid>
            <Grid item xs={4} className='parent'>
              <Button
                className="pop popp1"
                variant="outlined"
                sx={{
                  color: "#289BDE",
                  fontWeight: "400",
                  fontSize: "18px",
                  border: "1px solid #289BDE",
                  mx:{lg:1 ,md:5 ,sm:5 ,xs:0}
                }}
              >
                Register
              </Button>

            </Grid>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{  display: { md: "none" }, color: "black", }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      <Box component="nav">
        <Drawer
        anchor="top"
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      
    </Box>
  );
}



export default DrawerAppBar;
